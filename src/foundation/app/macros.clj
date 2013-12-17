(ns foundation.app.macros
  (:require [clojure.set :as set]
            [clojure.string :as str]
            [clojure.repl :refer [doc]]
            [clojure.zip :as zip]
            [clojure.pprint :refer [pprint]]
            [clojure.math.combinatorics :as com]
            [clojure.tools.namespace.repl :refer [refresh-all]]
            [clojure.core.match :as m :refer [match]]
            [clojure.core.async
             :refer [go go-loop chan <! >! <!! put! take! timeout alts!]]
            [clojure.core.reducers :as r]
            [foundation.app.dependency :as d]
            [foundation.app.tree :as tree]
            [foundation.app.dataflow :as df]
            [foundation.app.component :as c]
            [foundation.app.data.tracking-map :as tm]))

(declare run-dataflow match-dispatch dispatches derives? matching-path?)

(defmulti node-create
  (fn [renderer delta input-queue]
    (->> (keys (dissoc (methods node-create) :default))
         (filter #(matching-path? (second delta) %))
         first)))

(defmethod node-create :default [renderer delta input-queue])

(defmulti node-destroy
  (fn [renderer delta input-queue]
    (->> (keys (dissoc (methods node-create) :default))
         (filter #(matching-path? (second delta) %))
         first)))

(defmethod node-destroy :default [renderer delta input-queue])

(defmulti transform-enable (fn [renderer delta input-queue] (second delta)))

(defmethod transform-enable :default [renderer delta input-queue])

(defmulti transform-disable (fn [renderer delta input-queue] (second delta)))

(defmethod transform-disable :default [renderer delta input-queue])

(defmulti transform (fn [state msg] ((juxt :type :path) msg)))

(defmethod transform :default [state msg] nil)

(defmulti derives (fn [state msg inputs] ((juxt :type :path) msg)))

(defmethod derives :default [state msg inputs] nil)

(defmulti effect (fn [msg input-queue] ((juxt :type :path) msg)))

(defmethod effect :default [message input-queue] nil)

(defmulti post-process (juxt first second))

(defmethod post-process :default [delta] [delta])

(defmulti pre-process (juxt :type :path))

(defmethod pre-process :default [message] [message])

(defmulti input-spec (fn [k & args] (if (vector? k) (last k) k)))

(defmulti route-effect (fn [message inputs] ((juxt :type :path) message)))

(defmethod route-effect :default [message inputs] [])

(def search-ops {:node-create #{:node-* :*}
                 :node-destroy #{:node-* :*}
                 :value #{:value :*}
                 :attr #{:attr :*}
                 :transform-enable #{:transform-* :*}
                 :transform-disable #{:transform-* :*}})

(defn real-path [op path]
  (cons op (conj (vec (interleave (repeat :children) path)) :handler)))

(defn add-handler [handlers op path f]
  (assoc-in handlers (real-path op path) f))

(defn add-handlers
  ([hs] (add-handlers {} hs))
  ([m hs] (reduce (fn [acc [op path f]] (add-handler acc op path f)) m hs)))

(defn matching-keys [ks p]
  (filter (fn [k]
            (or (= k p)
                (= k :*)
                (= k :**)
                (when (contains? search-ops p)
                  (contains? (p search-ops) k))))
          ks))

(defn sort-keys [ks]
  (let [sorted-keys (remove #(= % :**) (sort ks))]
    (reverse (if (> (count ks) (count sorted-keys))
               (conj sorted-keys :**)
               sorted-keys))))

(defn select-matches [handlers p]
  (let [keys (matching-keys (keys handlers) p)]
    (map (fn [k] [k (get handlers k)]) (sort-keys keys))))

(defn find-handler* [handlers path]
  (if (empty? path)
    (:handler handlers)
    (some (fn [[k v]]
            (if-let [handler (find-handler* v (rest path))]
              handler
              (when (= k :**) (:handler v))))
          (select-matches (:children handlers) (first path)))))

(defn find-handler [handlers op path]
  (find-handler* {:children handlers} (vec (cons op path))))

(defprotocol DomMapper
  (get-id [this path])
  (get-parent-id [this path])
  (new-id! [this path] [this path v]
    "Create a new id for this given path.
    Store this id in the renderer's environment.
    Returns the generated id. An id can be provided as a third
    argument.")
  (delete-id! [this path]
    "Delete this id and all information associated with it from the
    environment. This will also delete all ids and information
    associated with child nodes.")
  (on-destroy! [this path f]
    "Add a function to be called when the node at path is destroyed.")
  (set-data! [this ks d])
  (drop-data! [this ks])
  (get-data [this ks]))

(defn- run-on-destroy!
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
    (if (seq path)
      (get-in @env (conj path :id))
      (:id @env)))
  (get-parent-id [this path]
    (when (seq path)
      (get-id this (vec (butlast path)))))
  (new-id! [this path]
    (new-id! this path (gensym)))
  (new-id! [this path v]
    (swap! env assoc-in (conj path :id) v)
    v)
  (delete-id! [this path]
    (run-on-destroy! (get-in @env path))
    (swap! env assoc-in path nil))
  (on-destroy! [this path f]
    (swap! env update-in (conj path :on-destroy) (fnil conj []) f))
  (set-data! [this ks d]
    (swap! env assoc-in (concat [:_data] ks) d))
  (drop-data! [this ks]
    (swap! env update-in (concat [:_data] (butlast ks)) dissoc (last ks)))
  (get-data [this ks]
    (get-in @env (concat [:_data] ks))))

(defn renderer
  ([root-id] (renderer root-id identity))
  ([root-id log-fn]
     (let [renderer (->DomRenderer (atom {:id root-id}))]
       (fn [deltas input-queue]
         (log-fn deltas)
         (doseq [d deltas]
           (let [[op path] d]
             (node-create renderer d input-queue)))))))

(defn push-render-queue
  [root-id input-queue]
  (let [renderer (->DomRenderer (atom {:id root-id}))
        render-queue (chan)]
    (go-loop []
      (let [message (<! render-queue)
            [op path] message]
        (node-create renderer message input-queue))
      (recur))
    render-queue))

(defn filter-changes [{:keys [processed-inputs]} changes]
  (remove (fn [[k v]] (some (partial matching-path? k)
                            processed-inputs)) changes))

(letfn [(prefixed [k p] (vec (concat (if (keyword? p) [p] p) k)))]
  (defn default-emitter
    [prefix]
    (fn [inputs]
      (vec (concat (let [added (->> inputs
                                    df/added-inputs
                                    (filter-changes inputs))]
                     (mapcat (fn [[k v]]
                               (let [k (prefixed k prefix)]
                                 [[:node-create k :map]
                                  [:value k v]]))
                             added))
                   (let [updates (->> inputs
                                      df/updated-inputs
                                      (filter-changes inputs))]
                     (mapv (fn [[k v]] [:value (prefixed k prefix) v])
                           updates))
                   (let [removed (->> inputs
                                      df/removed-inputs
                                      (filter-changes inputs))]
                     (mapcat (fn [[k v]]
                               (let [k (prefixed k prefix)]
                                 (if (= v ::removed)
                                   [[:value k nil] [:node-destroy k]]
                                   [[:value k v]])))
                             removed)))))))

(defn reify-input-paths
  [input-paths data-model arg-names]
  (letfn [(value-types [arg-names]
            (if arg-names
              (reduce (fn [a [k v]]
                        (cond
                          (contains? (set k) :*) (assoc a v :seq)
                          (contains? a v) (assoc a v :seq)
                          (nil? (get a v)) (assoc a v :single)
                          :else a))
                      {} arg-names)
              (constantly :single)))]
    (let [input-paths (if (seq arg-names)
                        (zipmap input-paths arg-names)
                        (zipmap input-paths input-paths))
          v-type (value-types input-paths)
          assoc-a (fn [a k v]
                    (if (= (v-type k) :seq)
                      (update-in a [k] (fnil into []) (if (coll? v) v [v]))
                      (assoc a k v)))]
      (->> (for [[path arg] input-paths]
             (loop [ks path
                    data-model data-model
                    ret {}]
               (let [k (first ks)]
                 (match [k data-model]
                   [nil v] (assoc-a ret arg v)
                   [:* m] (assoc-a ret arg (vals m))
                   [:** v] (assoc-a ret arg v)
                   [k {k v}] (recur (rest ks) (get v k v) ret)
                   :else ret))))
           (reduce (partial merge-with (comp vec concat)))))))

(defmethod input-spec :vals
  [_ arg-names inputs]
  (flatten (vals (input-spec :map arg-names inputs))))

(defmethod input-spec :map
  [_ arg-names {:keys [new-model input-paths]}]
  (reify-input-paths input-paths new-model arg-names))

(defmethod input-spec :map-seq
  [_ arg-names inputs]
  (apply concat (seq (input-spec :map inputs arg-names))))

(defmethod input-spec :single-val
  [_ arg-names inputs]
  (first (vals (input-spec :map arg-names inputs))))

(defmethod input-spec :default
  [_ arg-names inputs]
  [inputs])

(defn consume-app-model
  [app render-fn]
  (let [app-model (atom tree/new-app-model)]
    (go-loop []
      (let [message (<! (:app-model app))
            old-app-model @app-model
            new-app-model (swap! app-model tree/apply-deltas
                                 (:deltas message))
            deltas (tree/since-t new-app-model (tree/t old-app-model))]
        (render-fn deltas (:input app)))
      (recur))
    app-model))

(defn multiplex-message
  [state message]
  [(cond
     (= (:path message) :app-model) :app-model
     (= (:path message) :output) :output
     :else :default) (:type message)])

(defmulti process-message multiplex-message)

(defmethod process-message :default
  [state message]
  (run-dataflow state message))

(defmethod process-message [:app-model :navigate]
  [state message]
  state)

(defmethod process-message [:app-model :set-focus]
  [state message]
  state)

(defmethod process-message [:app-model :subscribe]
  [state message]
  
  state)

(defmethod process-message [:app-model :unsubscribe]
  [state message]
  state)

(defmethod process-message [:app-model :add-named-paths]
  [state message]
  state)

(defmethod process-message [:app-model :remove-named-paths]
  [state message]
  state)

(defn matching-path?
  [path1 path2]
  (= (loop [a (vec (flatten path1))
            b (vec (flatten path2))]
       (match [(first a) (first b)]
         [[] []] :succeed
         [nil nil] :succeed
         [:** _] (if-not (seq (rest a)) :succeed :fail)
         [_ :**] (if-not (seq (rest b)) :succeed :fail)
         [:* _] (recur (vec (rest a)) (vec (rest b)))
         [_ :*] (recur (vec (rest a)) (vec (rest b)))
         :else (if (= (first a) (first b))
                 (recur (vec (rest a)) (vec (rest b)))
                 :fail)))
     :succeed))

(defn filter-deltas
  [state deltas]
  (let [special-ops {:navigate-node-destroy :node-destroy}
        prefix? (fn [path prefix] (= (take (count prefix) path) prefix))]
    (vec (mapcat tree/expand-map deltas))))

(defn transact-one
  [state message]
  (let [state (-> state (assoc :input message) (dissoc :effect))
        old-state state
        new-state (process-message state message)
        new-deltas (filter-deltas new-state (:emit new-state))]
    (-> new-state
        (assoc :emitter-deltas new-deltas)
        (dissoc :emit))))

(defn input-queue
  [app-atom]
  (let [c (chan)]
    (go-loop []
      (let [message (<! c)]
        (doseq [message (pre-process message)]          
          (swap! app-atom transact-one message)))
      (recur))
    c))

(defn app-model-queue
  [app-atom]
  (let [app-model-queue (chan)]
    (add-watch app-atom :app-model-delta-watcher
               (fn [_ _ old-state new-state]
                 (let [deltas (:emitter-deltas new-state)]
                   (when-not (or (empty? deltas)
                                 (= (:emitter-deltas old-state) deltas))
                     (let [deltas (vec (mapcat post-process deltas))]
                       (put! app-model-queue
                             {:path :app-model
                              :type :deltas
                              :deltas deltas}))))))
    app-model-queue))

(defn effect-queue
  [app-atom]
  (let [output-queue (chan)]
    (add-watch app-atom :effects-watcher
               (fn [_ _ _ new-state]
                 (doseq [message (:effect new-state)]
                   (put! output-queue message))))
    output-queue))

(defn create-init-messages
  [focus]
  (into (mapv (fn [[name paths]]
                {:path :app-model
                 :type :add-named-paths
                 :paths paths
                 :name name})
              (remove (fn [[k v]] (= k :default)) focus))
        (when-let [n (:default focus)]
          [{:topic :app-model
            :type :navigate
            :name n}])))

(defn begin
  ([app] (begin app nil))
  ([app {:keys [init-messages focus]}]
     (let [init-messages
           (cond
             init-messages init-messages
             focus (create-init-messages focus)
             :else [{:path :app-model :type :subscribe :paths [[]]}])]
       (doseq [message init-messages]
         (put! (:input app) message)))))

(defn consume-effects
  [app]
  (let [output (:output app) input (:input app)]
    (go-loop []
      (let [message (<! output)]
        (effect message input)
        (recur)))))

(defn run!
  [app script]
  (doseq [message script]
    (put! (:input app) message)))

(defmulti depends (fn [dm graph] (-> dm keys first)))

(defmethod depends :transform
  [{:keys [transform]} graph]
  (let [[type path] (key transform)]
    graph))

(defmethod depends :derives
  [{:keys [derives]} graph]
  (let [[input-paths output-path input-spec] (key derives)
        input-paths (or (and (map? input-paths) (keys input-paths))
                        input-paths)]
    (reduce #(d/depend %1 output-path %2) graph input-paths)))

(defmethod depends :effect
  [dispatch-map graph]
  graph)

(defmethod depends :default
  [dispatch-map graph]
  graph)

(defn build-dependency-graph
  ([] (build-dependency-graph {}))
  ([app]
     (reduce (fn [graph dispatch-map] (depends dispatch-map graph))
             (or (:deps app) (d/graph)) dispatches)))

(defn descendent?
  [path-a path-b]
  (let [[small large] (if (< (count path-a) (count path-b))
                        [path-a path-b]
                        [path-b path-a])]
    (matching-path? small (vec (take (count small) large)))))

(defn remover
  [change-set input-paths]
  (set (remove (fn [x] (some #(matching-path? x %) input-paths)) change-set)))

(defn remove-matching-changes
  [change input-paths]
  (reduce (fn [a k] (update-in a [k] remover input-paths))
          change [:inspect :added :updated :removed]))

(defn flow-input
  [context state input-paths change]
  (letfn [(input-set [changes f input-paths]
            (set (f (fn [x]
                      (some (partial descendent? x) input-paths)) changes)))
          (update-input-sets [m ks f input-paths]
            (reduce (fn [a k]
                      (update-in a [k] input-set f input-paths)) m ks))]
    (-> context
        (assoc :new-model (get-in state [:new :data-model]))
        (assoc :old-model (get-in state [:old :data-model]))
        (assoc :input-paths input-paths)
        (merge (select-keys change [:added :updated :removed]))
        (update-input-sets [:added :updated :removed] filter input-paths))))

(defn emit-phase
  [{:keys [context change] :as state}]
  (let [input-paths (into #{} (keys (dissoc (methods node-create) :default)))
        {:keys [change remaining-change processed-inputs] :as state}
        (-> (assoc state :remaining-change change))]
    (-> state
        (update-in [:remaining-change] remove-matching-changes input-paths)
        (update-in [:processed-inputs] (fnil into []) input-paths)
        (update-in [:new :emit] (fnil into [])
                   ((default-emitter [])
                    (-> (flow-input context state
                                    input-paths
                                    remaining-change)
                        (assoc :processed-inputs
                          processed-inputs))))
        (dissoc :remaining-change))))

(defn find-message-transformer
  [multifn message]
  (let [dispatch-fn (.-dispatchFn multifn)
        dispatch-val (dispatch-fn nil message)
        dispatches (dissoc (methods multifn) :default)]
    (if-let [transformer (get dispatches dispatch-val)]
      [transformer]
      (if-let [transformers
               (seq (for [dval (keys dispatches)
                          :when (matching-path? dval dispatch-val)]
                      (get dispatches dval)))]
        (vec transformers)
        [(get-method multifn dispatch-val)]))))

(defn update-state
  [state path f & args]
  (let [data-model (get-in state [:new :data-model])
        new-data-model
        (apply update-in (tm/tracking-map data-model) path f args)]
    (-> state
        (assoc-in [:new :data-model] @new-data-model)
        (update-in [:change] (fn [old new] (merge-with into old new))
                   (tm/changes new-data-model)))))

(defn transform-phase
  [{:keys [new context] :as state}]
  (let [{:keys [type path] :as message} (:message context)
        transform-fn (first (find-message-transformer transform message))]    
    (update-state state path transform-fn message)))

(defn derives?
  [{:keys [context] :as state} input-paths]
  (let [nodes (d/nodes (:deps (:new state)))
        path (:path (:message context))
        node-for-path (first (filter #(matching-path? path %) nodes))]
    (seq (d/transitive-dependents (:deps (:new state)) node-for-path))))

(defn dependents
  [state multifn]
  (->> (filter (fn [x] (derives? state x))
               (dissoc (methods multifn) :default))
       (sort (d/topo-comparator (:deps (:new state))))
       seq))

(defn derives-phase
  [{:keys [context] :as state}]
  (if-let [dependents (dependents state derives)]
    (let [fix-paths (juxt (comp set keys) vals)
          message (:message context)]     
      (reduce (fn [{:keys [change] :as state}
                   [[input-paths output-path ispec :as derive] derive-fn]]
                (let [[input-paths arg-names] (if (map? input-paths)
                                                (fix-paths input-paths)
                                                [input-paths nil])]
                  (->> (flow-input context state input-paths change)
                       (input-spec ispec arg-names)
                       (update-state state output-path derive-fn message))))
              state dependents))
    state))

(defn effect-phase
  [{:keys [context] :as state}]
  (if-let [dependents (dependents state route-effect)]
    (let [fix-paths (juxt (comp set keys) vals)
          message (:message context)]
      (reduce
       (fn [{:keys [change] :as state}
            [[input-paths ispec :as effect] effect-fn]]
         (let [[input-paths arg-names] (if (map? input-paths)
                                         (fix-paths input-paths)
                                         [input-paths nil])]
           (->> (flow-input context state input-paths change)
                (input-spec ispec arg-names)
                (effect-fn message)
                (update-in state [:new :effect] (fnil into [])))))
       state dependents))
    state))

(defrecord App [state input output app-model])

(defn build
  []
  (let [app-atom (atom {:data-model {} :deps (build-dependency-graph)})]
    (App. app-atom
          (input-queue app-atom)
          (effect-queue app-atom)
          (app-model-queue app-atom))))

(defn run-dataflow
  [model message]
  (let [state {:old model
               :new model
               :change {}
               :context {}}
        new-state (-> (assoc-in state [:context :message] message)
                      transform-phase
                      derives-phase
                      effect-phase
                      emit-phase)]
    (:new new-state)))

(def default-msg
  {:type :default :path [:nil :**] :value "hallo"})

(def swap-msg
  {:type :swap :path [:other-counters "abc"] :value 42})

(def inc-msg
  {:type :inc :path [:my-counter]})

(defmethod transform [:inc [:my-counter]]
  [state _]
  ((fnil inc 0) state))

(defmethod transform [:swap [:**]]
  [_ message]
  (:value message))

(defmethod derives [#{[:my-counter]
                      [:other-counters :*]} [:total-count] :vals]
  [state message nums]
  (reduce + nums))

(defmethod derives [#{[:my-counter]
                      [:other-counters :*]} [:max-count] :vals]
  [old-value message nums]
  (apply max (or old-value 0) nums))

(defmethod derives [{[:my-counter] :nums
                     [:other-counters :*] :nums
                     [:total-count] :total} [:average-count] :map]
  [old-value message {:keys [nums total] :as m}]
  (/ total (count nums)))

(defmethod route-effect [#{[:my-counter]} :single-val]
  [message count]
  [{:type :swap :path [:other-counters] :value count}])

;; (defmethod node-create [] [& args] ((constantly nil)))

;; (defmethod node-create [:*]
;;   [renderer delta input-queue]
;;   (println path val))

(defmethod node-create [:my-counter]
  [renderer [_ path _ val] input-queue]
  (println path val))

(defmethod node-create [:other-counters :*]
  [renderer [_ path _ val] input-queue]
  (println path val))

(defmethod node-create [:average-count]
  [renderer [_ path _ val] input-queue]
  (println path val))

(defmethod transform-enable [:inc [:my-counter]]
  []
  )

(defmethod transform-disable [:inc [:my-counter]]
  []
  )

(defmethod post-process [:value [:average-count]]
  [[op path n]]
  (letfn [(round [n places]
            (let [p (Math/pow 10 places)]
              (/ (Math/round (* p n)) p)))]
    [[op path (round n 2)]]))

(defmethod effect [:swap [:other-counters]]
  [message input-queue]
  (println (str "Sending message to server: " message)))

(defmethod effect :default
  [message input-queue]
  (println (str "Sending message to server: " message)))

(def dispatches
  (->> [transform derives effect]
       (map #(dissoc (methods %) :default))
       (map assoc (repeat {}) [:transform :derives :effect])
       (reduce (fn [xrel dispatches]
                 (->> (first (vals dispatches))
                      (map assoc (repeat {})
                           (repeat (first (keys dispatches))))
                      (into xrel)))
               #{})))

(defn test-dataflow
  ([msgs] (test-dataflow msgs @(:state (build))))
  ([msgs state]
     (:data-model (reduce (fn [state msg]
                            (run-dataflow state msg))
                          state msgs))))


(defn test-transact-one
  [msgs]
  (reduce (fn [state msg]
            (transact-one state msg))
          @(:state (build)) msgs))

(defn test-input-queue
  [msgs]
  (let [app (build)
        transact-complete (chan)]
    (go-loop [msgs msgs]
      (put! (:input app) (first msgs))
      (recur (rest msgs)))
    app))

(defn log-fn
  [deltas]
  (println "Rendering Deltas")
  (pprint deltas))

(defn test-create-app
  []
  (let [app (build)
        render-fn (renderer "content" log-fn)
        app-model (consume-app-model app render-fn)]
    (begin app)
    (put! (:input app) inc-msg)
    {:app app :app-model app-model}))

(def counters (atom {"abc" 0 "xyz" 0}))

(defn increment-counter
  [k t input-queue]
  (go-loop []
    (put! input-queue {:type :swap :path [:other-counters k]
                       :value (get (swap! counters update-in [k] inc) k)})
    (<! (timeout t))
    (recur)))

(defn receive-messages
  [input-queue]
  (increment-counter "abc" 2000 input-queue)
  (increment-counter "xyz" 5000 input-queue))

(defrecord MockServices [app]
  c/Lifecycle
  (start [_]
    (receive-messages (:input app)))
  (stop [_]))

(defn ^:export -main []
  (let [app (test-create-app)
        services (->MockServices (:app app))]
    (consume-effects (:app app))
    ;; (c/start services)
    app))
