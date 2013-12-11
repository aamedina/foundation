(ns foundation.app
  (:require [clojure.browser.repl]
            [clojure.set :as set]
            [clojure.string :as str]
            [clojure.zip :as zip]
            [cljs.core.match :as m]
            [cljs.core.async :refer [chan <! >! <! put! take! timeout alts!]]
            [foundation.app.message :as msg]
            [foundation.app.util :as util]
            [foundation.app.data.dependency :as d]
            [foundation.app.tree :as tree]
            [foundation.app.dataflow :as df]
            [foundation.app.data.component :as c]
            [foundation.app.data.tracking-map :as tm]
            [enfocus.core :as en]
            [enfocus.events :as events]
            [dommy.core :as dom])
  (:require-macros [cljs.core.match.macros :as m :refer [match]]
                   [cljs.core.async.macros :as a :refer [go go-loop]]
                   [enfocus.macros :as en :refer [defaction]]
                   [dommy.macros :as dom :refer [sel1]]))

(enable-console-print!)

(declare run-dataflow match-dispatch dispatches derives? matching-path?
         node-create node-update node-destroy)

(defmulti node-create
  (fn [renderer [_ path _ _] input-queue id]
    (let [nodes (keys (dissoc (methods node-create) :default))
          matching (set (filter #(matching-path? path %) nodes))]
      (cond
        (contains? matching path) path
        (seq (disj matching [:**] [:*] []))
        (first (disj matching [:**] [:*] []))
        (seq matching) (first matching)
        :else :default))))

(defmethod node-create :default [renderer delta input-queue])

(defmulti node-update
  (fn [renderer [_ path _ _] input-queue id node]
    [(if-not (keyword? id) (keyword id) id) path]))

(defmethod node-update :default [& args] nil)

(defmulti node-destroy
  (fn [renderer [_ path _ _] input-queue id]
    (let [nodes (keys (dissoc (methods node-create) :default))
          matching (set (filter #(matching-path? path %) nodes))]
      (cond
        (contains? matching path) path
        (seq (disj matching [:**] [:*] []))
        (first (disj matching [:**] [:*] []))
        (seq matching) (first matching)
        :else :default))))

(defmethod node-destroy :default [& args])

(defmulti transform-enable (fn [renderer delta input-queue] (second delta)))

(defmethod transform-enable :default [renderer delta input-queue])

(defmulti transform-disable (fn [renderer delta input-queue] (second delta)))

(defmethod transform-disable :default [renderer delta input-queue])

(defmulti transform (fn [state msg] ((juxt msg/type msg/path) msg)))

(defmethod transform :default [state msg] nil)

(defmulti derives (fn [state msg inputs] ((juxt msg/type msg/path) msg)))

(defmethod derives :default [state msg inputs] nil)

(defmulti effect (fn [msg input-queue] ((juxt msg/type msg/path) msg)))

(defmethod effect :default [message input-queue] nil)

(defmulti post-process (juxt first second))

(defmethod post-process :default [delta] [delta])

(defmulti pre-process (juxt msg/type msg/path))

(defmethod pre-process :default [message] [message])

(defmulti input-spec (fn [k & args] (if (vector? k) (last k) k)))

(defmulti route-effect (fn [message inputs] ((juxt msg/type msg/path) message)))

(defmethod route-effect :default [message inputs] [])

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
           (let [[op path] d
                 id (if-let [id (get-id renderer path)]
                      id
                      (new-id! renderer path))]
             (case op
               :node-create (node-create renderer d input-queue id)
               :node-update (node-update renderer d input-queue id (sel1 id))
               :node-destroy (node-destroy renderer d input-queue id)
               :value (node-update renderer d input-queue id (sel1 id))
               :attr (node-update renderer d input-queue id (sel1 id))
               :transform-enable
               (transform-enable renderer d input-queue id (sel1 id))
               :transform-disable
               (transform-disable renderer d input-queue id (sel1 id)))))))))

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
  (cond
    (= (msg/path message) :app-model) :app-model
    (= (msg/path message) :output) :output
    :else :default))

(defn process-message
  [state message]
  (let [k (multiplex-message state message)]
    (case k
      :app-model state
      :output state
      (run-dataflow state message))))

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
  (let [input-queue (chan)]
    (go-loop []
      (let [message (<! input-queue)]
        (doseq [message (pre-process message)]          
          (swap! app-atom transact-one message)))
      (recur))
    input-queue))

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
                             {msg/path :app-model
                              msg/type :deltas
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
                {msg/path :app-model
                 msg/type :add-named-paths
                 msg/paths paths
                 :name name})
              (remove (fn [[k v]] (= k :default)) focus))
        (when-let [n (:default focus)]
          [{msg/path :app-model
            msg/type :navigate
            :name n}])))

(defn begin
  ([app] (begin app nil))
  ([app {:keys [init-messages focus]}]
     (let [init-messages
           (cond
             init-messages init-messages
             focus (create-init-messages focus)
             :else [{msg/path :app-model msg/type :subscribe msg/paths [[]]}])]
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
  (let [dispatch-fn (.-dispatch-fn multifn)
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
  (let [message (:message context)
        {type msg/type path msg/path} message
        transform-fn (first (find-message-transformer transform message))]    
    (update-state state path transform-fn message)))

(defn derives?
  [{:keys [context] :as state} input-paths]
  (let [nodes (d/nodes (:deps (:new state)))
        path (msg/path (:message context))
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

(def swap-msg
  {msg/type :swap msg/path [:other-counters "abc"] :value 42})

(def inc-msg
  {msg/type :inc msg/path [:my-counter]})

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
  [{msg/type :swap msg/path [:other-counters] :value count}])

(defaction click-handler
  [message]
  [:#button1] (ef/content message))

(defaction setup
  []
  [:#button1] (events/listen :click #(click-handler "I have been clicked")))

(defn transform-enable!
  [event type path])

(defmethod node-create []
  [renderer [_ path _ val] input-queue id]
  (en/at js/document
    [:body] (en/do->
             (en/set-attr :id id)
             (en/content "Hello, world!" (en/html [:h1 "hello"]))
             (en/append (en/html [:button#button1 "button"]))))
  )

;; (defmethod node-create [:*]
;;   [renderer [_ path _ val] input-queue]
;;   (println path val))

;; (defmethod node-create [:my-counter]
;;   [renderer [_ path _ val] input-queue]
;;   (println path val))

;; (defmethod node-create [:other-counters :*]
;;   [renderer [_ path _ val] input-queue]
;;   (println path val))

;; (defmethod node-create [:average-count]
;;   [renderer [_ path _ val] input-queue]
;;   (println path val))

(defmethod node-update [:my-counter]
  [renderer [_ path old-val new-val :as delta] input-queue node]
  (println path old-val new-val node))

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

(defn log-fn [deltas] (util/log-group "Rendering Deltas" deltas))

(defn create-app
  [& {:keys [services init-messages]}]
  (let [app (build)
        render-fn (renderer "content" log-fn)
        app-model (consume-app-model app render-fn)]
    (consume-effects app)
    (def ^:dynamic *app* {:app app :app-model app-model})))

(def counters (atom {"abc" 0 "xyz" 0}))

(defn increment-counter
  [k t input-queue]
  (go-loop []
    (put! input-queue {msg/type :swap msg/path [:other-counters k]
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

(defn reset [] (js/location.reload true))

(defn ^:export -main []
  (let [app (create-app)]
    (put! (:input (:app *app*)) inc-msg)
    app))

(enable-console-print!)
