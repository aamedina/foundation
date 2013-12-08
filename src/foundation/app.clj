(ns foundation.app
  (:refer-clojure :exclude [derive])
  (:require [clojure.set :as set]
            [clojure.string :as str]
            [clojure.data :refer [diff]]
            [cljs.compiler :as comp]
            [cljs.analyzer :as ana]
            [cljs.env :as env]
            [cljs.closure :as cljsc]
            [foundation.app.message :as msg]
            [clojure.math.combinatorics :as com]
            [clojure.core :as core]
            [hickory.core :refer :all]
            [hickory.zip :refer :all]
            [net.cgrand.enlive-html :as en]
            [hickory.select :as s]
            [garden.core :as g :refer [css]]
            [hiccup.core :refer [html h]]
            [hiccup.def :refer [defelem defhtml wrap-attrs]]
            [hiccup.util :refer [escape-html as-str to-uri url url-encode]]
            [clout.core :as clout]
            [inflections.core :as inflect]
            [clojure.xml :as xml]
            [clojure.pprint :refer [pprint]]
            [clojure.core.match :refer [match]]
            [clojure.repl :refer [doc]]
            [clojure.core.async :as a
             :refer [<! >! put! take! chan go go-loop sliding-buffer]]
            [clojure.zip :as zip]))

(defmulti transform (juxt msg/type msg/path))
(defmulti effect (juxt msg/type msg/path))
(defmulti derive identity)
(defmulti render identity)
(defmulti node-create msg/path)
(defmulti node-update (juxt msg/path :sel))
(defmulti node-destroy msg/path)
(defmulti transform-enable (juxt msg/type msg/path))
(defmulti transform-disable (juxt msg/type msg/path))

(declare transact-one since-t apply-deltas log-group new-app-model)

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

(def ^:dynamic *gc-deltas* true)

(defmulti inverse first)

(defmethod inverse :node-create
  [[op path type]]
  [:node-destroy path type])

(defmethod inverse :node-destroy
  [[op path type]]
  [:node-create path type])

(defmethod inverse :value
  [[op path o n]]
  [op path n o])

(defmethod inverse :attr
  [[op path k o n]]
  [op path k n o])

(defmethod inverse :transform-enable
  [[op path transform-name msgs]]
  [:transform-disable path transform-name msgs])

(defmethod inverse :transform-disable
  [[op path transform-name msgs]]
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
    (assert (= (node-type children) type)
            (str "The given child node type does not match the actual type: "
                 (pr-str delta)))
    (if node-to-remove
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
        (update-in new-tree [:this-tx] conj delta))
      tree)))

(defmethod apply-to-tree :children-exit [tree delta]
  (let [[_ path] delta
        r-path (real-path path)
        c-path (conj r-path :children)
        children (get-in tree c-path)]
    (if (not (empty? children))
      (remove-children tree path children)
      tree)))

(defn same-value? [tree path v]
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
            (str "A different transform " k
                 " at path " path " already exists."))
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

(defprotocol IDom
  (-id [dom path])
  (-parent [dom path])
  (-children [dom path])
  (-append [dom parent child])
  (-prepend [dom parent child])
  (-listen [dom path event f])
  (-unlisten [dom path event])
  (-add-class [this path class])
  (-remove-class [this path class])
  (-add-attr [this path k v])
  (-remove-attr [this path k])
  (-remove [dom path])
  (-remove-children [dom path])
  (-sel [dom selector])
  (-sel1 [dom selector])
  (-diff [dom new-dom]))

(defn ns-qualify
  [x]
  (keyword (namespace ::dom) (name x)))

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

(defn selector
  [sel]
  (letfn [(re [k]
            (case k
              :tag #"(\w+)[\.#]\w+"
              :id #"#(\w+)"
              :class #"\.(\w+)"))
          (sel? [k {:keys [selector]}] (seq (re-seq (re k) selector)))
          (select [{:keys [selector] :as sel} k]
            (assoc sel k (last (flatten (re-seq (re k) selector)))))]
    (let [sel {:selector (name sel)}]
      (cond-> sel
              (sel? :tag sel) (select :tag)
              (sel? :id sel) (select :id)
              (sel? :class sel) (select :class)))))

(defrecord Dom [dom env]
  IDom
  (-id [this path]
    (if (seq path)
      (get-in env (conj path :id))
      (:id env)))
  (-parent [this path])
  (-children [this path])
  (-append [this path child]
    (assoc this
      :dom ((en/append child)
            (->> (-id this path) (str "#") keyword (-sel1 this)))
      :env (assoc-in env (conj path :id) (gensym))))
  (-prepend [this path child]
    (assoc this
      :dom ((en/prepend (-sel1 this path)) child)
      :env (assoc-in env (conj path :id) (gensym))))
  (-listen [this path event f])
  (-unlisten [this path event])
  (-remove [this path]
    (assoc this
      :env (update-in env (vec (butlast path)) dissoc (last path))))
  (-add-class [this path class]
    (assoc this
      :dom ((en/add-class class) (-sel1 this path))))
  (-remove-class [this path class]
    (assoc this
      :dom ((en/remove-class class) (-sel1 dom path))))
  (-add-attr [this path k v]
    (assoc this
      :dom ((en/set-attr k v) (-sel1 this path))))
  (-remove-attr [this path k]
    (assoc this
      :dom ((en/set-attr k nil) (-sel1 this path))))
  (-remove-children [this path])
  (-sel [this selector]
    (cond
      (vector? selector) (en/select dom selector)
      (string? selector) (en/select dom [(keyword selector)])
       (keyword? selector)  (en/select dom [selector])
      :else nil))
  (-sel1 [this selector]
    (first (-sel this selector)))
  (-diff [this new-dom]))

(defn dom
  [root-id]
  (let [root-node (assoc empty-node
                    :tag "div"
                    :attrs {:id root-id})]
    (Dom. root-node {:id root-id})))

(defmacro defmodel
  [name params {:keys [url views] :as conditions} & body]
  (let [compiled-route (->> (update-in (clout/route-compile url) [:keys] vec)
                            ((juxt keys vals))
                            (apply zipmap))
        conditions (select-keys conditions [:pre :post])
        m (dissoc conditions :pre :post)]
    `(do (def ~((comp symbol inflect/plural str) name)
           ~(assoc m
              :url compiled-route))
         (defn ~name
           ([{:keys [~@params] :as m#}] ~conditions
              (when (map? m#)
                (with-meta m# {:model ~(keyword name)})))
           ([~@params] ~conditions
              (with-meta (zipmap [~@(map keyword params)] ~params)
                {:model ~(keyword name)}))))))

(defmodel account [name id currency timezone]
  {:url "/accounts/:id"
   :pre [(string? name) (string? id) (string? currency) (string? timezone)]})

(defn matching-dispatches
  [dispatch-val]
  (let [ps (com/partitions dispatch-val)]
    (->> (map #(zipmap % (repeat :*))
              (reduce into [] (rest ps)))
         (map #(replace % dispatch-val))
         (cons (vec (repeat (count dispatch-val) :*)))
         (reverse)
         (cons dispatch-val)
         distinct)))

(defmacro multimethods
  [multifn]
  (let [m# (eval `(methods ~multifn))
        methods# (->> (keys m#)                      
                      ((juxt remove filter)
                       #(if (coll? %)
                          (some #{"_"} (map str %))
                          (identical? (str %) "_"))))]
    `(fn [q#]
       (match `[~@q#]
         ~@(interleave (first methods#) (map m# (first methods#)))
         ~@(interleave (second methods#) (map m# (second methods#)))))))

(defmacro defgeneric
  [name multifn]
  (let [methods (eval `(multimethods ~multifn))
        dispatch-fn `(.-dispatchFn ~multifn)]
    `(do (defn ~name [& args#]
           (let [dispatch-val# (apply ~dispatch-fn args#)]
             (apply (~methods dispatch-val#) args#))))))

(defmulti column (juxt (comp :model meta) first))

(defgeneric column* column)

(defmethod column [:account :name]
  [[attr v]]
  (html [:th {:id attr} "Name"]))

(defmethod column [:account :select-all]
  [[attr v]]
  (html [:th {:id attr} "Select All"]))

(defmethod column '[_ :id]
  [[attr v]]
  (html [:th {:id attr} "ID"]))

(defmethod column [:account :currency]
  [[attr v]]
  (html [:th {:id attr} "Currency"]))

(defmethod column [:account :timezone]
  [[attr v]]
  (html [:th {:id attr} "Timezone"]))

(defn attrs
  [model]
  (map #(with-meta (into [] %) (meta model)) model))

(def acct (apply account (repeat 4 "")))

(defgeneric transform* transform)

(defmethod transform :default [message state] state)
(defmethod effect :default [message] (go []))

(defmethod transform [:inc [:my-counter]]
  [_ state]
  ((fnil inc 0) state))

(defmethod transform [:swap [:**]]
  [message _]
  (:value message))

(defmethod derive [#{[:my-counter]} [:counters]]
  [state]
  ((fnil inc 0) state))

(defmethod effect [:inc [:my-counter]]
  [message])

(defmethod node-create [:*]
  [delta state])

(defmethod node-update [#{[:*]} :#content]
  [delta old-state new-state])

(defmethod node-destroy [:*]
  [delta node])

(defmethod transform-enable [:inc [:my-counter] :click]
  [delta node])

(defmethod transform-disable [:inc [:my-counter] :click]
  [delta node])

(defmulti dispatch-matcher (fn [k dispatch-val] k))

(defmethod dispatch-matcher :transform
  [k dispatch-val]
  (match [dispatch-val]
    [[type [:*]]] [type ['_]]
    [[:* [:**]]] ['_ '_]
    [[type [:**]]] [type '_]
    [[type path]] [type path]))

(defmethod dispatch-matcher :effect
  [k dispatch-val]
  (match [dispatch-val]
    [[:* path]] ['_ path]
    [[type path]] [type path]))

(defmethod dispatch-matcher :derive
  [k dispatch-val]
  (match [dispatch-val]
    [[input-set output]] [`(~(quote '_) :guard #(some ~input-set %)) output]))

(defmethod dispatch-matcher :node-create
  [k dispatch-val]
  (match [dispatch-val]
    [[:**]] ['_]
    [[path]] [path]))

(defmethod dispatch-matcher :node-update
  [k dispatch-val]
  (match [dispatch-val]
    [[:*]] ['_]
    [[selector]] [selector]))

(defmethod dispatch-matcher :node-destroy
  [k dispatch-val]
  (match [dispatch-val]    
    [[:**]] ['_]
    [[path]] [path]))

(defmethod dispatch-matcher :transform-enable
  [k dispatch-val]
  (match [dispatch-val]
    [[:* [:**] event]] ['_ '_]
    [[type [:**] event]] [type '_]
    [[type path event]] [type path]))

(defmethod dispatch-matcher :transform-disable
  [k dispatch-val]
  (match [dispatch-val]
    [[:* [:**] event]] ['_ '_]
    [[type [:**] event]] [type '_]
    [[type path event]] [type path event]))

(defmulti dispatch (fn [k dispatch-val] k))

(defmethod dispatch :transform
  [k dispatch-val]
  (let [dispatch-match (dispatch-matcher k dispatch-val)
        dispatch-fn (.-dispatchFn transform)]
    (fn [message data-model]
      (let [q (dispatch-fn message)]
        (if-let [method (get (methods transform) q)]
          (method message data-model)
          (match [q]
            [(_ :guard #(= dispatch-match %))]
            ((get (methods transform) dispatch-val) message data-model)
            :else (transform message data-model)))))))

(def swap-msg
  {msg/type :swap msg/path [:other-counters "abc"] :value 42})

(def inc-msg
  {msg/type :inc msg/path [:my-counter]})

(defn update-data-model
  [data-model message]
  (update-in data-model (msg/path message) #(apply transform message %&)))

(defmacro mmatch
  [q dispatch-match dispatch-val & {:keys [else] :or {else nil}}]
  (let [m (vec (eval `(do ~dispatch-match)))]
    `(match ~q
       ~m ~dispatch-val
       :else ~else)))



