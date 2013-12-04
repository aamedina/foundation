(ns foundation.app
  (:refer-clojure :exclude [derive])
  (:require [clojure.set :as set]
            [clojure.string :as str]
            [clojure.data :refer [diff]]            
            [foundation.app.message :as msg]
            [clojure.core :as core]
            #+clj [clojure.xml :as xml]
            #+clj [clojure.core.match :refer [match]]
            #+cljs [cljs.core.match]
            #+clj [clojure.repl :refer [doc]]
            #+cljs [cljs.core.async :as a :refer [<! >! put! take! chan]]
            #+clj [clojure.core.async :as a
                   :refer [<! >! put! take! chan go go-loop sliding-buffer]]
            [clojure.zip :as zip])
  #+cljs (:require-macros [cljs.core.async.macros :refer [go go-loop]]
                          [cljs.core.match :refer [match]]
                          [foundation.app.macros :as m]))

(defmulti transform (juxt msg/type msg/path))
(defmulti effect (juxt msg/type msg/path))
(defmulti derive identity)
(defmulti render identity)
(defmulti node-create msg/path)
(defmulti node-update (juxt msg/path :sel))
(defmulti node-destroy msg/path)
(defmulti transform-enable (juxt msg/type msg/path))
(defmulti transform-disable (juxt msg/type msg/path))

(defmethod transform :default [message state] state)

(defmethod effect :default [message] (go []))

(declare transact-one since-t apply-deltas log-group)

(defn input-queue
  [data-model]
  (let [input-queue (chan (sliding-buffer 10))]
    (go-loop [message (<! input-queue)]
      (swap! data-model transact-one message)
      (recur (<! input-queue)))
    input-queue))

(defn effect-queue
  [data-model services-fn input-queue]
  (let [effect-queue (chan (sliding-buffer 10))]
    (go-loop [message (<! effect-queue)]
      (services-fn message input-queue))
    effect-queue))

(defn app-model-queue
  [app-model input-queue render-fn]
  (let [render-queue (chan (sliding-buffer 10))]
    (go-loop [message (<! render-queue)]
      (let [old-app-model @app-model
            new-app-model (swap! app-model apply-deltas (:deltas message))
            deltas (since-t new-app-model old-app-model)]
        (render-fn deltas input-queue))
      (recur (<! render-queue)))
    render-queue))

(defn consume-app-model
  [app render-fn]
  (let [app-model (atom new-app-model)]
    (app-model-queue (:app-model app) (:input app) render-fn)
    app-model))

(defprotocol DomMapper
  (get-id [this path])
  (get-parent-id [this path])
  (new-id! [this path] [this path v])
  (delete-id! [this path])
  (on-destroy! [this path f])
  (set-data! [this ks d])
  (drop-data! [this ks])
  (get-data [this ks]))

(defn run-on-destroy!
  [env]
  (let [nodes (tree-seq (constantly true)
                        (fn [n]
                          (map #(get n %) (remove #{:id :on-destroy :_data}
                                                  (keys n)))) env)]
    (doseq [f (mapcat :on-destroy nodes)]
      (f))))

(defrecord DomRenderer [env]
  DomMapper
  (get-id [this path]
    (if (seq path) (get-in @env (conj path :id)) (:id @env)))
  (get-parent-id [this path]
    (when (seq path) (get-id this (vec (butlast path)))))
  (new-id! [this path] (new-id! this path (gensym)))
  (new-id! [this path v] (swap! env assoc-in (conj path :id) v) v)
  (delete-id! [this path]
    (run-on-destroy! (get-in @env path))
    (swap! env assoc-in path nil))
  (on-destroy! [this path f]
    (swap! env update-in (conj path :on-destroy) (fnil conj []) f))
  (set-data! [this ks d] (swap! env assoc-in (concat [:_data] ks) d))
  (drop-data! [this ks]
    (swap! env update-in (concat [:_data] (butlast ks)) dissoc (last ks)))
  (get-data [this ks] (get-in @env (concat [:_data] ks))))

(defn resolve-method
  [op delta]
  (case op
    :node-create (node-create delta)
    :node-update (node-update delta)
    :node-destroy (node-destroy delta)
    :transform-enable (transform-enable delta)
    :transform-disable (transform-disable delta)
    nil))

(defn push-render-queue
  [root-id input-queue]
  (let [renderer (->DomRenderer (atom {:id root-id}))
        push-render-queue (chan (sliding-buffer 10))]
    (go-loop [delta (<! push-render-queue)]
      (let [[op path] delta]
        (resolve-method op delta))
      (recur (<! push-render-queue)))
    push-render-queue))

(defn renderer
  [root-id]
  (let [renderer (->DomRenderer (atom {:id root-id}))
        log-fn (fn [deltas] (log-group "Rendering Deltas" deltas))]
    (fn [deltas input-queue]
      (log-fn deltas)
      (doseq [d deltas]
        (let [[op path] d]
          (resolve-method op d))))))

(defn transact-one
  [data-model message]
  )

(defn rendering-deltas
  [state]
  (letfn [(delta [op path]
            [op path (get-in state (into [:new] path))])
          (delta-op [op path]           
            [(case op
               :node-create :transform-enable
               :node-destroy :transform-disable
               nil) path ])
          (deltas [deltas [k paths]]
            (case k
              :added (into deltas (map delta (repeat :node-create) paths))
              :updated (into deltas (map delta (repeat :node-update) paths))
              :removed (into deltas (map delta (repeat :node-destroy)
                                         paths))))]
    (reduce deltas [] (select-keys state [:added :updated :removed]))))

(defn derives
  [input]
  (->> (filter (fn [[dispatch f]]
                 (some (first dispatch) [input]))
               (methods derive))
       (map (fn [[dispatch f]]
              {:output (last dispatch)
               :input input
               :fn f}))))

(declare diff-phase)

(defn transform-phase
  [state]
  (let [message (get-in state [:context :message])]
    (diff-phase (update-in state
                           (into [:new] (msg/path message))
                           (partial transform message))
                (msg/path message))))

(defn diff-phase
  [state path]
  (let [[o n _] (diff (:old state) (:new state))]
    (cond
      (= o n) state
      (nil? o) (update-in state [:added] conj path)
      (and (map? o) (nil? n)) state
      (nil? n) (update-in state [:removed] conj path)
      :else (update-in state [:updated] conj path))))

(defn emit-phase
  [state]
  (assoc state :deltas (rendering-deltas (:change state))))

(defn derive-phase
  [state]
  (reduce (fn [state [t paths]]
            (if-let [derives (reduce merge (map derives paths))]
              (cond
                (contains? #{:added :updated} t)
                (reduce (fn [s {:keys [input output fn]}]
                          (diff-phase (update-in s (into [:new] output) fn)
                                      input))
                        state derives)
                (= t :removed)
                (reduce
                 (fn [s {:keys [input output fn]}]
                   (update-in s (into [:new] output) fn))
                 state derives)
                :else state)
              state))
          state (select-keys state [:added :removed :updated])))

(defn effect-phase [state]
  (effect (get-in state [:context :message])))

(defn state
  [message data-model]
  {:old data-model
   :new data-model
   :added #{}
   :removed #{}
   :updated #{}
   :deltas []
   :context {:message message}})

(defn run-dataflow
  ([message] (run-dataflow message {}))
  ([message data-model]
     (-> (state message data-model)
         transform-phase
         derive-phase
         ;; effect-phase
         ;; emit-phase
         )))

(defn lazy-run
  [n init-model message]
  (take n (iterate (comp :new (partial run-dataflow message)) {})))

(defmacro build
  []
  `(let [data-model# (atom {:data-model {}})
         render-queue# (render-queue data-model#)
         input-queue# (input-queue data-model# render-queue#)
         effect-queue# (effect-queue data-model# input-queue#)
         transform# ~(methods transform)
         effect# ~(set (methods effect))
         derive# ~(methods derive)
         rendering-config# ~(assoc {}
                              :node-create (methods node-create)
                              :node-update (methods node-update)
                              :node-destroy (methods node-destroy)
                              :transform-enable (methods transform-enable)
                              :transform-disable (methods transform-disable))
         description# {:transform transform# :effect effect# :derive derive#}
         dataflow# description#]
     {:state data-model#
      :description description#
      :dataflow dataflow#
      :input input-queue#
      :effect effect-queue#
      :render render-queue#
      :rendering-config rendering-config#}))

(defmethod transform [:inc [:counter]]
  [message state]
  ((fnil inc 0) state))

(defmethod derive [#{[:counter]} [:counters]]
  [state]
  ((fnil inc 0) state))

(defmethod effect [:inc [:counter]]
  [message])

(defn resolve-id
  [path])

(def dom ::dom)
(def root ::root)

(defprotocol IDOM
  (-id [dom path])
  (-parent [dom path])
  (-children [dom path])
  (-ancestors [dom path])
  (-descendants [dom path])  
  (-append [dom path parent child])
  (-prepend [dom path parent child])
  (-listen [dom path event f])
  (-unlisten [dom path event])
  (-remove [dom path])
  (-remove-children [dom path])
  (-sel [dom selector])
  (-diff [dom new-dom]))

(defn ns-qualify
  [x]
  (keyword (namespace dom) (name x)))

(def empty-node
  {:tag ""
   :attrs {}
   :content []})

(defn locs
  [root]
  (take-while (complement zip/end?)
              (iterate zip/next (zip/xml-zip root))))

(defn nodes
  [root]
  (for [loc (locs root)] (zip/node loc)))

(defn -path [p & ps] (into [p] (flatten ps)))

(defrecord VirtualDOM [dom paths hierarchy]
    IDOM
    (-id [vdom path]
      (get-in @paths (-path ::root path)))
    (-parent [vdom path])
    (-children [vdom path])
    (-ancestors [vdom path])
    (-descendants [vdom path])
    (-append [vdom path parent child]
      (let [next-id (or (:id child) (gensym))]
        (swap! paths assoc-in (-path ::root path) next-id)))
    (-prepend [vdom path parent child]
      (let [next-id (or (:id child) (gensym))]
        (swap! paths assoc-in (-path ::root path) next-id)))
    (-listen [vdom path event f])
    (-unlisten [vdom path event])
    (-remove [vdom path]
      (swap! paths dissoc path))
    (-remove-children [vdom path]
      (map #(swap! paths dissoc %)
           (map #(-sel vdom %) (descendants @hierarchy (-id vdom path)))))
    (-sel [vdom selector]
      (loop [loc (zip/xml-zip @dom)]
        (cond
          (zip/end? loc) nil
          (identical? (get-in (zip/node loc) [:attrs :id]) selector)
          (zip/node loc)
          :else (recur (zip/next loc)))))
    (-diff [vdom new-dom]))

(defn virtual-dom
  [root-id]
  (->VirtualDOM (atom (assoc empty-node
                        :attrs {:id root-id}
                        :tag "div"))
                (atom {::root root-id})
                (atom (core/derive (make-hierarchy) (ns-qualify root-id)
                                   ::root))))

(defn extend-dom!
  ([dom child] (extend-dom! child :root))
  ([dom child parent]
     (swap! dom core/derive (ns-qualify child) (ns-qualify parent))))

(defmethod render :node-create
  [[op path f :as delta] renderer]
  (let []))

(defmethod render :node-update
  [[op path f :as delta] renderer]
  [])

(defmethod render :node-destroy
  [[op path f :as delta] renderer]
  [])

(defmethod render :transform-enable
  [[op path f :as delta] renderer]
  [])

(defmethod render :transform-enable
  [[op path f :as delta] renderer]
  [])

(defn append
  [])

(defn prepend
  [])

(defn remove-children
  [])

(defn remove-child
  [])

(defn listen
  [event])

(defn unlisten
  [event])

(defmethod node-create [:*]
  [delta])

(defmethod node-create :default
  [delta]
  (let [el [:div]]))

(defmethod node-update [#{[:*]} :#content]
  [delta])

(defmethod node-update :default
  [delta])

(defmethod node-destroy [:*]
  [delta])

(defmethod node-destroy :default
  [delta])

(defmethod transform-enable [:click [:*]]
  [delta]
  '(sel1 :*))

(defmethod transform-enable :default
  [delta])

(defmethod transform-disable [:click [:*]]
  [delta])

(defmethod transform-disable :default
  [delta])


(def ^:dynamic *gc-deltas* true)
(defmulti inverse (fn [delta] (first delta)))

(defmethod inverse :node-create [[op path type]]
  [:node-destroy path type])

(defmethod inverse :node-destroy [[op path type]]
  [:node-create path type])

(defmethod inverse :value [[op path o n]]
  [op path n o])

(defmethod inverse :attr [[op path k o n]]
  [op path k n o])

(defmethod inverse :transform-enable [[op path transform-name msgs]]
  [:transform-disable path transform-name msgs])

(defmethod inverse :transform-disable [[op path transform-name msgs]]
  [:transform-enable path transform-name msgs])

(defn invert [deltas]
  (mapv inverse (reverse deltas)))

(defn real-path [path]
  (vec (interpose :children (into [:tree] path))))

(defn new-node [children]
  {:children children})

(defn node-type [x]
  (cond (map? x) :map
    (vector? x) :vector
    :else :unknown))

(defn- existing-node-has-same-type? [tree r-path type]
  (if-let [node (get-in tree r-path)]
    (= (node-type (:children node)) type)
    true))

(defn node-exists? [tree path]
  (let [r-path (real-path path)]
    (get-in tree r-path)))

(defn- parent-exists? [tree path]
  (if (= path [])
    true
    (let [r-path (real-path (vec (butlast path)))]
      (get-in tree r-path))))

(defn- apply-to-tree-dispatch [_ delta]
  (if (fn? delta)
    :function
    (first delta)))

(defmulti apply-to-tree apply-to-tree-dispatch)

(defmethod apply-to-tree :default [tree _] tree)

(declare map->deltas)

(defn- ensure-parents-exist
  [tree path]
  (if (parent-exists? tree path)
    tree
    (apply-to-tree tree [:node-create (vec (butlast path)) :map])))


(defn- ensure-node-exists
  [tree path]
  (if (node-exists? tree path)
    tree
    (apply-to-tree tree [:node-create path :map])))


(defmethod apply-to-tree :node-create [tree delta]
  (let [[_ path type] delta]
    (if (map? type)
      (reduce apply-to-tree tree (map->deltas type path))
      (let [type (or type :map)
            delta (if (= (count delta) 2) [:node-create path type] delta)
            r-path (real-path path)
            children (condp = type
                       :vector []
                       :map {})
            tree (ensure-parents-exist tree path)]
        (assert (existing-node-has-same-type? tree r-path type)
                (str "The node at "
                     path
                     " exists and is not the same type as the requested node.\n"
                     "node:\n"
                     (get-in tree r-path) "\n"
                     "delta:\n"
                     delta))
        (if (get-in tree r-path)
          tree
          (-> tree
              (assoc-in r-path (new-node children))
              (update-in [:this-tx] conj delta)))))))
(defn- remove-index-from-vector [vector index]
  (let [[begin end] (split-at index vector)]
    (into (vec begin) (rest end))))
(defn- child-keys [children]
  (condp = (node-type children)
    :map (keys children)
    :vector (reverse (range (count children)))
    :else []))
(defn- remove-children [tree path children]
  (reduce apply-to-tree tree (map (fn [k] [:node-destroy (conj path k)])
                                  (child-keys children))))
(defmethod apply-to-tree :node-destroy [tree delta]
  (let [[_ path type] delta
        r-path (real-path path)
        containing-path (butlast r-path)
        node-to-remove (get-in tree r-path)
        children (:children node-to-remove)
        type (or type (node-type children))
        delta (if (= (count delta) 2) (conj delta type) delta)]
    (if (not node-to-remove)
      tree
      (do (assert (= (node-type children) type)
                  (str "The given child node type does not match the actual type: "
                       (pr-str delta)))
          (let [tree (if (not (empty? children))
                       (remove-children tree path children)
                       tree)
                tree (if (:value node-to-remove)
                       (apply-to-tree tree [:value path (:value node-to-remove)
                                            nil])
                       tree)
                tree (if-let [ks (:transforms node-to-remove)]
                       (reduce apply-to-tree tree
                               (map (fn [[k v]] [:transform-disable path k]) ks))
                       tree)
                tree (if-let [ks (:attrs node-to-remove)]
                       (reduce apply-to-tree tree
                               (map (fn [[k v]] [:attr path k v nil]) ks))
                       tree)
                new-tree (if (nil? containing-path)
                           (assoc tree :tree nil)
                           (let [last-path (last r-path)
                                 container (get-in tree containing-path)]
                             (if (map? container)
                               (update-in tree containing-path dissoc last-path)
                               (update-in tree containing-path
                                          remove-index-from-vector last-path))))]
            (update-in new-tree [:this-tx] conj delta))))))
(defmethod apply-to-tree :children-exit [tree delta]
  (let [[_ path] delta
        r-path (real-path path)
        c-path (conj r-path :children)
        children (get-in tree c-path)]
    (if (not (empty? children))
      (remove-children tree path children)
      tree)))
(defn- same-value? [tree path v]
  (= (get-in tree path) v))
(defn update-or-remove [tree path v]
  (if (nil? v)
    (update-in tree (butlast path) dissoc (last path))
    (assoc-in tree path v)))
(defmethod apply-to-tree :value [tree delta]
  (let [[op path o n] delta
        r-path (real-path path)
        v-path (conj r-path :value)
        old-value (get-in tree v-path)
        [o n] (if (= (count delta) 4) [o n] [old-value o])
        tree (ensure-node-exists tree path)]
    (assert (= o old-value)
            (str "The old value at path " path " is " old-value
                 " but was expected to be " o "."))
    (if (= o n)
      tree
      (-> tree
          (update-or-remove v-path n)
          (update-in [:this-tx] conj [op path o n])))))
(defn remove-empty [tree path]
  (if (seq (get-in tree path))
    tree
    (update-in tree (butlast path) dissoc (last path))))
(defmethod apply-to-tree :attr [tree delta]
  (let [[op path k o n] delta
        r-path (real-path path)
        a-path (conj r-path :attrs k)
        old-value (get-in tree a-path)
        [o n] (if (= (count delta) 5) [o n] [old-value o])
        tree (ensure-node-exists tree path)]
    (assert (= o old-value)
            (str "Error:" (pr-str delta) "\n"
                 "The old attribute value for " k " is "
                 old-value
                 " but was expected to be " o "."))
    (if (= o n)
      tree
      (-> tree
          (update-or-remove a-path n)
          (remove-empty (conj r-path :attrs))
          (update-in [:this-tx] conj [op path k o n])))))
(defn- same-transform? [tree path msgs]
  (= (get-in tree path) msgs))
(defmethod apply-to-tree :transform-enable [tree delta]
  (let [[_ path k msgs] delta
        r-path (real-path path)
        e-path (conj r-path :transforms k)
        tree (ensure-node-exists tree path)]
    (assert (or (not (get-in tree e-path))
                (same-transform? tree e-path msgs))
            (str "A different transform " k " at path " path " already exists."))
    (if (get-in tree e-path)
      tree
      (-> tree
          (assoc-in e-path msgs)
          (update-in [:this-tx] conj delta)))))

(defmethod apply-to-tree :transform-disable
  [tree delta]
  (let [[_ path k ] delta
        r-path (real-path path)
        transforms-path (conj r-path :transforms)
        e-path (conj transforms-path k)]
    (if (get-in tree e-path)
      (-> tree
          (update-in [:this-tx] conj (conj delta (get-in tree e-path)))
          (update-in transforms-path dissoc k)
          (remove empty? transforms-path))
      tree)))

(defn node-deltas
  [{:keys [value transforms attrs]} path]
  (cond-> []
          value (concat [[:value path value]])
          attrs (concat (vec (map (fn [[k v]] [:attr path k v]) attrs)))
          transforms (concat (vec (map (fn [[k v]]
                                         [:transform-enable path k v])
                                       transforms)))))

(defn map->deltas
  [tree path]
  (let [node-keys #{:children :transforms :value :attrs}
        node? (and (map? tree)
                   ((comp not empty?)
                    (set/intersection (set (keys tree)) node-keys)))
        children (if node? (or (:children tree) {}) tree)
        children-type (node-type children)
        node-deltas (when node?
                      (node-deltas tree path))]
    (concat [[:node-create path children-type]]
            node-deltas
            (mapcat (fn [k]
                      (map->deltas (get-in tree (if node? [:children k] [k]))
                                   (conj path k)))
                    (cond
                      (= children-type :map) (keys children)
                      (= children-type :vector) (range (count children))
                      :else [])))))

(defn expand-map
  [delta]
  (if (map? delta)
    (map->deltas delta [])
    [delta]))

(defn expand-maps
  [deltas]
  (mapcat expand-map deltas))

(defn update-tree
  [tree deltas]
  (reduce apply-to-tree tree deltas))

(defmethod apply-to-tree :function
  [tree f]
  (let [deltas (f tree)]
    (update-tree tree deltas)))

(def next-eid-atom (atom 0))

(defn next-eid [] (swap! next-eid-atom inc))

(defn transform->entities
  [transform-name msgs node-id]
  (let [transform-id (next-eid)]
    (concat [{:t/id transform-id :t/transform-name transform-name
              :t/node node-id :t/type :t/transform}]
            (map #(merge % {:t/id (next-eid) :t/transform transform-id
                            :t/type :t/message}) msgs))))

(defn transforms->entities
  [transforms node-id]
  (reduce #(concat %1 (transform->entities (first %2) (second %2) node-id))))

(defn attrs->entities
  [attrs node-id]
  (when ((comp not empty?) attrs)
    [(merge attrs {:t/id (next-eid) :t/node node-id
                   :t/type :t/attrs})]))

(defn node->entities
  [node path parent-id node-id]
  (let [{:keys [value attrs transforms]} node
        node-e (cond-> {:t/id node-id :t/path path :t/type :t/node
                        :t/segment (last path)}
                       parent-id (assoc :t/parent parent-id)
                       value (assoc :t/value value))
        attrs-es (attrs->entities attrs node-id)
        transform-es (transforms->entities transforms node-id)]
    (concat [node-e] attrs-es transform-es)))

(defn tree->entities
  [tree path parent-id]
  (let [{:keys [children]} tree
        ks (child-keys children)
        node-id (next-eid)
        node-tuples (node->entities tree path parent-id node-id)]
    (concat node-tuples
            (mapcat (fn [k] (tree->entities (get-in tree [:children k])
                                            (conj path k) node-id))
                    ks))))

(defn entity->tuples
  [ent]
  (let [id (:t/id ent)]
    (map (fn [[k v]] [id k v]) (dissoc ent :t/id))))

(defn entities->tuples
  [entities]
  (mapcat entity->tuples entities))

(defn tree->tuples
  [tree]
  (if (:tree tree)
    (entities->tuples
     (tree->entities (:tree tree) [] nil))
    []))

(defn delete-deltas
  [t deltas]
  (reduce (fn [d k]
            (if (< k t)
              (dissoc d k)
              d))
          deltas (keys deltas)))

(defn gc
  [state]
  (if *gc-deltas*
    (let [t (:t state)
          delete-t (- t 2)]
      (update-in state [:deltas] #(delete-deltas delete-t)))
    state))

(defn apply-deltas
  [old deltas]
  (let [{:keys [seq t]} old
        deltas (expand-maps deltas)
        {:keys [tree this-tx]} (update-tree old deltas)
        deltas (map (fn [d s]
                      {:delta d
                       :t t
                       :seq s})
                    this-tx
                    (iterate inc seq))]
    (-> old
        (assoc-in [:deltas t] deltas)
        (assoc-in [:this-tx] [])
        (update-in [:seq] + (count deltas))
        (assoc-in [:tree] tree)
        (update-in [:t] inc))))

(defn value
  [tree path]
  (let [r-path (real-path path)]
    (get-in tree (conj r-path :value))))

(def new-app-model
  {:deltas {}
   :this-tx []
   :tree nil
   :seq 0
   :t 0})

(defn t
  [tree]
  (:t tree))

(defn since-t
  [tree t]
  (let [ts (range t (:t tree))]
    (vec (map :delta (mapcat #(get (:deltas tree) %) ts)))))
