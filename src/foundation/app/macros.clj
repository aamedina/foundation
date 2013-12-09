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
            [clojure.core.async :refer [go go-loop chan <! >! <!!]]
            [clojure.core.reducers :as r]))

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

(defn transform-phase
  [])

(defn derive-phase
  [])

(defn effect-phase
  [])

(defn emit-phase
  [])

(defn output-phase
  [])

(defn post-processing-phase
  [])

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

(defmulti post-process (partial match-dispatch :post-process))

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

(defn run-dataflow
  [state flow message])

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
