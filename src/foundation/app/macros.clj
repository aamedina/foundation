(ns foundation.app.macros
  (:require [clojure.set :as set]
            [clojure.string :as str]
            [clojure.data :refer [diff]]
            [clojure.java.io :as io]
            [clojure.core :as core]
            [clojure.repl :refer [doc]]
            [clojure.zip :as zip]
            [clojure.pprint :refer [pprint]]
            [clojure.math.combinatorics :as com]
            [clojure.tools.namespace.repl :refer [refresh-all]]
            [clojure.core.match :as m
             :refer [match match-let matchv defpred]]
            [cljs.compiler :as comp]
            [cljs.analyzer :as ana]
            [cljs.env :as env]
            [cljs.closure :as cljsc]
            [riddley.walk :refer [walk-exprs macroexpand-all]]
            [riddley.compiler :refer [locals]]
            [clojure.core.match.protocols :refer :all]
            [clojure.core.async :refer [go go-loop chan <! >! <!! put! take!]]
            [clojure.core.reducers :as r]
            [foundation.app.dependency :as d]
            [foundation.app.tree :as tree]
            [foundation.app.data.tracking-map :as tm]))

(declare run-dataflow match-dispatch)

(defmulti node-create identity)

(defmulti transform (fn [msg & args] ((juxt :type :path) msg)))

(defmethod transform :default [message & args] :default)

(defmulti derives (partial match-dispatch :derives))

(defmethod derives :default [state & args] :default)

(defmulti effect (partial match-dispatch :effect))

(defmulti post-process (juxt first second))

(defmethod post-process :default [delta] [delta])

(defmulti pre-process (juxt :type :path))

(defmethod pre-process :default [message] [message])

(defmulti input-spec (fn [k & args] (if (vector? k) (last k) k)))

(defmethod input-spec :vals
  [dispatch-val inputs args-key arg-names])

(defmethod input-spec :map
  [dispatch-val inputs args-key arg-names])

(defmethod input-spec :map-seq
  [dispatch-val inputs args-key arg-names])

(defmethod input-spec :single-val
  [dispatch-val inputs args-key arg-names])

(defmethod input-spec :default
  [dispatch-val inputs args-key arg-names])

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

(defn build
  []
  (let [app-atom (atom {:data-model {}})
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

(defn descendant?
  [input-path path])

(defn remover
  [change-set input-paths]
  (set (remove (fn [x] (some #(matching-path? x) input-paths) change-set))))

(defn remove-matching-changes
  [change input-paths]
  (reduce (fn [a k] (update-in a [k] remover input-paths))
          change [:inspect :added :updated :removed]))

(defn propagate?
  [{:keys [change] :as state} input-paths]
  (letfn [(propagate? [state changed-inputs input-path]
            (some #(descendant? input-path %) changed-inputs))]
    (let [changed-inputs (if (seq change) (reduce into (vals change)) [])]
      (some (fn [input-path]
              (if-let [propagate? (or (:propagator (meta input-path))
                                      propagate?)]
                (propagate? state changed-inputs input-path)))
            input-paths))))

(defn flow-input
  [context state input-paths change]
  (letfn [(input-set [changes f input-paths]
            (set (f (fn [x] (some (partial descendant? x) input-paths))
                    changes)))
          (update-input-sets [m ks f input-paths]
            (reduce (fn [a k] (update-in a [k] input-set f input-paths))
                    m ks))]
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
        dispatch-val (dispatch-fn message)
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
        new-data-model (update-in (tm/tracking-map data-model) path f args)]
    (-> state
        (assoc-in [:new :data-model] @new-data-model)
        (update-in [:change] (fn [old new] (merge-with into old new))
                   (tm/changes tracking-map)))))

(defn transform-phase
  [{:keys [new context] :as state}]
  (let [{:keys [type path] :as message} (:message context)
        transform-fn (first (find-message-transformer transform message))]
    (update-state state path transform-fn message)))

(defn derive-phase
  [])

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
                      derive-phase)]
    (:new (-> new-state
              effect-phase
              emit-phase))))

(def default-msg
  {:type :default :path [:nil :**] :value "hallo"})

(def swap-msg
  {:type :swap :path [:other-counters "abc"] :value 42})

(def inc-msg
  {:type :inc :path [:my-counter]})

(defmethod transform [:inc [:my-counter]]
  [_ state]
  ((fnil inc 0) state))

(defmethod transform [:swap [:**]]
  [message _]
  (:value message))

(defmethod derives [#{[:my-counter]
                      [:other-counters :*]} [:total-count] :vals]
  [message state nums]
  (reduce + nums))

(defmethod derives [#{[:my-counter]
                      [:other-counters :*]} [:max-count] :vals]
  [message old-value nums]  
  (apply max (or old-value 0) nums))

(defmethod derives [{[:my-counter] :nums
                     [:other-counters :*] :nums
                     [:total-count] :total} [:average-count] :map]
  [message old-value {:keys [nums total]}]
  (/ total (count nums)))

(defmethod post-process [:value [:average-count]]
  [[op path n]]
  (letfn [(round [n places]
            (let [p (Math/pow 10 places)]
              (/ (Math/round (* p n)) p)))]
    [[op path (round n 2)]]))

