(ns foundation.app.macros
  (:require [clojure.set :as set]
            [clojure.string :as str]
            [clojure.repl :refer [doc]]
            [clojure.zip :as zip]
            [clojure.pprint :refer [pprint]]
            [clojure.math.combinatorics :as com]
            [clojure.tools.namespace.repl :refer [refresh-all]]
            [clojure.core.match :as m :refer [match]]
            [riddley.walk :refer [walk-exprs macroexpand-all]]
            [clojure.core.async :refer [go go-loop chan <! >! <!! put! take!]]
            [clojure.core.reducers :as r]
            [foundation.app.dependency :as d]
            [foundation.app.tree :as tree]
            [foundation.app.data.tracking-map :as tm]))

(declare run-dataflow match-dispatch dispatches)

(defmulti node-create identity)

(defmulti transform (fn [state msg] ((juxt :type :path) msg)))

(defmethod transform :default [state msg] :default)

(defmulti derives (fn [state msg inputs] ((juxt :type :path) msg)))

(defmethod derives :default [state msg inputs] :default)

(defmulti effect (partial match-dispatch :effect))

(defmulti post-process (juxt first second))

(defmethod post-process :default [delta] [delta])

(defmulti pre-process (juxt :type :path))

(defmethod pre-process :default [message] [message])

(defmulti input-spec (fn [k & args] (if (vector? k) (last k) k)))

(defn reify-input-paths
  [input-paths data-model arg-names]
  (->> (for [[path arg-name] (if (seq arg-names)
                               (zipmap input-paths arg-names)
                               (zipmap input-paths input-paths))]
         (loop [pkeys path
                data-model data-model]
           (let [pkey (first pkeys)]
             (match [pkey data-model]
               [nil v] [arg-name v]
               [:* v] (recur (rest pkeys) (get v pkey v))
               [:** v] [arg-name v]
               [pkey {pkey v}] (recur (rest pkeys) v)
               :else nil))))
       (remove nil?)
       (into {})))

(defmethod input-spec :vals
  [_ arg-names inputs]
  (vals (input-spec :map nil inputs)))

(defmethod input-spec :map
  [_ arg-names {:keys [new-model input-paths]}]
  (reify-input-paths input-paths new-model arg-names))

(defmethod input-spec :map-seq
  [dispatch-val arg-names inputs])

(defmethod input-spec :single-val
  [dispatch-val arg-names inputs])

(defmethod input-spec :default
  [dispatch-val arg-names inputs]
  :default)

(defn consume-app-model
  [app render-fn]
  (let [app-model (atom tree/new-app-model)]
    (go-loop [message (<! (:app-model app))]
      (let [old-app-model @app-model
            new-app-model (swap! app-model tree/apply-deltas
                                 (:deltas message))
            deltas (tree/since-t new-app-model (tree/t old-app-model))]
        (render-fn deltas (:input app))))
    app-model))

(defn multiplex-message
  [state message]
  [(cond
     (= (:path message) ::app-model) :app-model
     (= (:path message) ::output) :output
     :else :default) (:type message)])

(defmulti process-message multiplex-message)

(defmethod process-message :default
  [state message]
  (run-dataflow state message))

(defmethod process-message [:app-model :navigate]
  [state message])

(defmethod process-message [:app-model :set-focus]
  [state message])

(defmethod process-message [:app-model :subscribe]
  [state message])

(defmethod process-message [:app-model :unsubscribe]
  [state message])

(defmethod process-message [:app-model :add-named-paths]
  [state message])

(defmethod process-message [:app-model :remove-named-paths]
  [state message])

(defn matching-path?
  [path1 path2]
  (= (loop [a (vec (flatten path1))
            b (vec (flatten path2))]
       (match [(first a) (first b)]
         [[] []] :succeed
         [nil nil] :succeed
         [:** (_ :guard keyword?)] (if-not (seq (rest a)) :succeed :fail)
         [(_ :guard keyword?) :**] (if-not (seq (rest b)) :succeed :fail)
         [:* (_ :guard keyword?)] (recur (vec (rest a)) (vec (rest b)))
         [(_ :guard keyword?) :*] (recur (vec (rest a)) (vec (rest b)))
         :else (if (= (first a) (first b))
                 (recur (vec (rest a)) (vec (rest b)))
                 :fail)))
     :succeed))

(defmulti match-dispatch (fn [k & args] k))

(defmethod match-dispatch :transform
  [t {:keys [type path] :as message} & args]
  (let [dispatches (dissoc (methods transform :default))
        dval ((juxt :type :path) message)]
    (for [dispatch-val (keys dispatches)]
      (when-let [dispatch-fn (get-method transform dispatch-val)]
        (matching-path? dval path)
        dispatch-val))))

(defmethod match-dispatch :derives
  [t {:keys [type path] :as message} & args]
  (let [dispatches (dissoc (methods derives) :default)]
    (for [[paths derived-path ispec :as dispatch-val] (keys dispatches)
          :when (some #(matching-path? path %)
                      (if (map? paths) (keys paths) paths))]
      (let [dispatch-fn (get dispatches dispatch-val)
            ispec (input-spec ispec message dispatch-val)]
        (dispatch-fn message nil (range 10))))))

(defn filter-deltas
  [state deltas]
  (let [subscriptions (:subscriptions state)
        special-ops {:navigate-node-destroy :node-destroy}
        prefix? (fn [path prefix] (= (take (count prefix) path) prefix))]
    (mapv (fn [[op & xs :as delta]]
            (if (special-ops op)
              (apply vector (special-ops op) xs) delta))
          (filter (fn [[op path]]
                    (or (special-ops op)
                        (some (fn [s] (prefix? path s)) subscriptions)))
                  (mapcat tree/expand-map deltas)))))

(defn transact-one
  [state message]
  (let [old-state (-> state (assoc :input message) (dissoc :effect))
        new-state (process-message state message)
        new-deltas (filter-deltas new-state (:emit new-state))]
    (-> new-state
        (assoc :emitter-deltas new-deltas)
        (dissoc :emit))))

(defn receive-input-message
  [app-atom input-queue]
  (go-loop [message (<! input-queue)]
    (doseq [message (pre-process message)]
      (swap! app-atom transact-one message))
    (recur (<! input-queue))))

(defn send-effects
  [app-atom output-queue]
  (add-watch app-atom :effects-watcher
             (fn [_ _ _ new-state]
               (doseq [message (post-process (:effect new-state))]
                 (put! output-queue message)))))

(defn send-app-model-deltas
  [app-atom app-model-queue]
  (add-watch app-atom :app-model-delta-watcher
             (fn [_ _ old-state new-state]
               (let [deltas (:emitter-deltas new-state)]
                 (when-not (or (empty? deltas)
                               (= (:emitter-deltas old-state) deltas))
                   (let [deltas (reduce (fn [acc delta]
                                          (into acc (post-process delta)))
                                        deltas)]
                     (put! app-model-queue
                           {:path :app-model
                            :type :deltas
                            :deltas deltas})))))))

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
  [app services-fn]
  (let [output (:output app) input (:input app)]
    (go-loop [message (<! output)]
      (services-fn message input)
      (recur (<! (:output app))))))

(defn run!
  [app script]
  (doseq [message script]
    (put! (:input app) message)))

(defn root-paths
  [graph]
  (->> (d/nodes graph)
       (mapcat (juxt (fn [k n] n) d/transitive-dependencies) (repeat graph))
       (apply hash-map)
       (filter #(nil? (val %)))
       (keys)))

(defn derived-paths
  [graph]
  (->> (d/nodes graph)
       (mapcat (juxt (fn [k n] n) d/transitive-dependencies) (repeat graph))
       (apply hash-map)
       (remove #(nil? (val %)))
       (keys)))

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

(defn build
  []
  (let [dependencies (build-dependency-graph)
        app-atom (atom {:data-model {} :deps dependencies})
        input-queue (chan)
        output-queue (chan)
        app-model-queue (chan)]
    (receive-input-message app-atom input-queue)
    (send-effects app-atom output-queue)
    (send-app-model-deltas app-atom app-model-queue)
    {:state app-atom     
     :input input-queue
     :output output-queue
     :app-model app-model-queue}))

(defn descendent?
  [path-a path-b]
  (let [[small large] (if (< (count path-a) (count path-b))
                        [path-a path-b]
                        [path-b path-a])]
    (= small (take (count small) large))))

(defn remover
  [change-set input-paths]
  (set (remove (fn [x] (some #(matching-path? x) input-paths) change-set))))

(defn remove-matching-changes
  [change input-paths]
  (reduce (fn [a k] (update-in a [k] remover input-paths))
          change [:inspect :added :updated :removed]))

(defn propagate?
  [{:keys [change] :as state} input-paths]
  (let [changed-inputs (if (seq change) (reduce into (vals change)) [])]
    (some (fn [input-path]
            (some #(descendent? input-path %) changed-inputs))
          input-paths)))

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
  (-> (reduce (fn [{:keys [change remaining-change processed-inputs] :as acc}
                   {input-paths :in emit-fn :fn mode :mode}]
                (-> acc
                    (update-in [:remaining-change] remove-matching-changes
                               input-paths)
                    (update-in [:processed-inputs] (fnil into []) input-paths)
                    (update-in [:new :emit] (fnil into [])
                               (emit-fn (-> (flow-input context acc
                                                        input-paths
                                                        change)
                                            (assoc :mode mode
                                                   :processed-inputs
                                                   processed-inputs))))))
              (assoc state :remaining-change change)
              (keys (methods node-create)))
      (dissoc :remaining-change)))

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
  [{:keys [context] :as state}
   [[input-paths output-path ispec :as derive] derive-fn]]
  (and (seq (d/transitive-dependents (:deps (:new state))
                                     (:path (:message context))))
       (propagate? state input-paths)))

(defn derives-phase
  [{:keys [context] :as state}]
  (if-let [dependents (->> (filter (fn [x] (derives? state x))
                                   (dissoc (methods derives) :default))
                           (sort (d/topo-comparator (:deps (:new state))))
                           seq)]
    (let [fix-paths (juxt (comp set keys) identity)
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
  [])

(defn output-phase
  [])

(defn post-processing-phase
  [])

(defn run-dataflow
  [model message]
  (let [state {:old model
               :new model
               :change {}
               :context {}}
        new-state (-> (assoc-in state [:context :message] message)
                      transform-phase
                      derives-phase
                      )]
    new-state
    ;; (:new (-> new-state
    ;;           effect-phase
    ;;           emit-phase))
    ))

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
  [old-value message {:keys [nums total]}]
  (println old-value message nums total)
  (/ total (count nums)))

(defmethod post-process [:value [:average-count]]
  [[op path n]]
  (letfn [(round [n places]
            (let [p (Math/pow 10 places)]
              (/ (Math/round (* p n)) p)))]
    [[op path (round n 2)]]))

(def counter-dependencies
  (-> (d/graph)
      (d/depend [:my-counter] nil)
      (d/depend [:other-counters :*] nil)
      (d/depend [:total-count] [:my-counter])
      (d/depend [:total-count] [:other-counters :*])
      (d/depend [:max-count] [:my-counter])
      (d/depend [:max-count] [:other-counters :*])
      (d/depend [:average-count] [:my-counter])
      (d/depend [:average-count] [:total-count])
      (d/depend [:average-count] [:other-counters :*])))

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
  ([msg] (test-dataflow msg @(:state (build))))
  ([msg state] (test-dataflow 1 msg state))
  ([n msg state]
     (reduce (fn [state n]
               (:data-model (:new (run-dataflow state)))) state (range n))))


