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
            [foundation.app.dependency :as d]))

(defn scaffold [iface]
  (doseq [[iface methods]
          (->> iface .getMethods
               (map #(vector (.getName (.getDeclaringClass %))
                             (symbol (.getName %))
                             (count (.getParameterTypes %))))
               (group-by first))]
    (println (str "  " iface))
    (doseq [[_ name argcount] methods]
      (println
       (str "    "
            (list name
                  (into ['this] (take argcount (repeatedly gensym)))))))))

(defn all-dependencies
  [dependencies n]
  (loop [stack []
         unprocessed [n]
         processed {}]
    (if (empty? unprocessed)
      stack
      (let [i (peek unprocessed)
            status (processed i)]
        (case status
          :done (recur stack (pop unprocessed) processed)
          :seen-once (recur (conj stack i) (pop unprocessed)
                            (assoc processed i :done))
          (recur stack (into unprocessed (dependencies i))
                 (assoc processed i :seen-once)))))))


(defn locs
  [root]
  (take-while (complement zip/end?)
              (iterate zip/next root)))

(defn nodes
  [root]
  (for [loc (locs root)]
    (zip/node loc)))

(defn zip-with
  [f & colls]
  (apply map f colls))

(defn zip
  [& colls]
  (apply zip-with vector colls))

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

(defmulti match-dispatch (fn [k & args] k))

(defmulti transform (partial match-dispatch :transform))

(defmulti derives (partial match-dispatch :derives))

(defmulti effect (partial match-dispatch :effect))

(defmulti post-process (juxt first second))

(defn data-model
  []
  {})

(def app-model ::app-model)
(def output ::output)
(def effect ::output)
(def priority ::priority)
(def init ::init)

(defn input-queue [])
(defn output-queue [])
(defn app-model-queue [])

(def new-app-model {})

(defn apply-deltas
  [app-model deltas])

(defn since-t
  [new-app-model old-app-model])

(defn consume-app-model
  [app render-fn]
  (let [app-model (atom new-app-model)]
    (go-loop [message (<! (:app-model app))]
      (let [old-app-model @app-model
            new-app-model (swap! app-model apply-deltas (:deltas message))
            deltas (since-t new-app-model old-app-model)]
        (render-fn deltas (:input app))))
    app-model))

(defn filter-deltas
  [new-state paths])

(declare run-dataflow)

(defn multiplex-message
  [state flow message]
  [(cond
     (= (:path message) ::app-model) :app-model
     (= (:path message) ::output) :output
     :else :default) (:type message)])

(defmulti process-message multiplex-message)

(defmethod process-message :default
  [state flow message]
  (run-dataflow state flow message))

(defmethod process-message [:app-model :navigate]
  [state flow message])

(defmethod process-message [:app-model :set-focus]
  [state flow message])

(defmethod process-message [:app-model :subscribe]
  [state flow message])

(defmethod process-message [:app-model :unsubscribe]
  [state flow message])

(defmethod process-message [:app-model :add-named-paths]
  [state flow message])

(defmethod process-message [:app-model :remove-named-paths]
  [state flow message])

(defn transact-message
  [state flow message]
  (let [old-state (assoc state ::input message)
        new-state (process-message state flow message)
        new-deltas (filter-deltas new-state (:emit new-state))]
    (-> new-state
        (assoc :emitter-deltas new-deltas)
        (dissoc :emit))))

(defn matching-path?
  [path1 path2]
  (= (loop [a path1
            b path2]
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

(defmethod post-process :default [delta] [delta])

(defmethod derives :default [state & args] :default)

(defmethod transform :default [messsage] :default)

(def swap-msg
  {:type :swap :path [:other-counters "abc"] :value 42})

(def inc-msg
  {:type :inc :path [:my-counter]})

;; (defmethod node-create [:*]
;;   [delta state])

;; (defmethod node-update [#{[:*]} :#content]
;;   [delta old-state new-state])

;; (defmethod node-destroy [:*]
;;   [delta node])

;; (defmethod transform-enable [:inc [:my-counter] :click]
;;   [delta node])

;; (defmethod transform-disable [:inc [:my-counter] :click]
;;   [delta node])

(defn transact-one
  [state message]
  )

(defmulti pre-process (juxt :type :path))

(defmethod pre-process :default [message] [message])

(defn receive-input-message
  [app-atom input-queue]
  (go-loop [message (<! input-queue)]
    (doseq [message (pre-process message)]
      (swap! app-atom transact-one message))
    (recur (<! input-queue))))

(defn send-effects
  [app-atom output-queue]
  )

(defn post-process-deltas
  [deltas]
  (reduce (fn [acc [op path :as delta]]
            (into acc (post-process delta)))
          deltas))

(defn send-app-model-deltas
  [app-atom app-model-queue]
  (add-watch app-atom :app-model-delta-watcher
             (fn [_ _ old-state new-state]
               (let [deltas (:emitter-deltas new-state)]
                 (when-not (or (empty? deltas)
                               (= (:emitter-deltas old-state) deltas))
                   (let [deltas (post-process-deltas deltas)]
                     (put! app-model-queue
                           {:path :app-model :type :deltas :deltas deltas}))))
               )))

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

(defn transform-phase
  [])

(defn derive-phase
  [])

(defn effect-phase
  [])

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
  [{:keys [dataflow context change] :as state}]
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
              (:emit dataflow))
      (dissoc :remaining-change)))

(defn output-phase
  [])

(defn post-processing-phase
  [])

(defn run-dataflow
  [model dataflow message]
  (let [state {:old model
               :new model
               :change {}
               :dataflow dataflow
               :context {}}
        new-state (-> (assoc-in state [:context :message] message)
                      transform-phase
                      derive-phase)]
    (:new (-> new-state
              effect-phase
              emit-phase))))
