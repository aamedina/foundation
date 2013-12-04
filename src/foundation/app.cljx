(ns foundation.app
  (:refer-clojure :exclude [derive])
  (:require [clojure.set :as set]
            [clojure.string :as str]
            [clojure.data :refer [diff]]            
            [foundation.app.message :as msg]
            [clojure.core :as core]
            #+clj [clojure.core.match :refer [match]]
            #+cljs [cljs.core.match]
            #+clj [clojure.repl :refer [doc]]
            #+cljs [cljs.core.async :as a :refer [<! >! put! take! chan]]
            #+clj [clojure.core.async :as a
                   :refer [<! >! put! take! chan go go-loop]]
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

(defn input-queue
  [data-model render-queue]
  (go-loop []))

(defn effect-queue
  [data-model input-queue]
  (go-loop []))

(defn render-queue
  [app-model]
  (go-loop []))

(defn transact
  [data-model message]
  )

(defn transact-all
  [data-model]
  (let []))

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
     (-> (state data-model message)
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

(defrecord VirtualDOM [dom hierarchy])

(defn virtual-dom
  [root-id]
  (->VirtualDOM (atom {::root root-id}) (atom (make-hierarchy))))

(defn ns-qualify
  [x]
  (keyword (namespace dom) (name x)))

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

(defmacro constrain
  [& preds]
  `(fn [q#]
     (match [q#]
       ~(vec (map (fn [pred#] (list '_ :guard pred#)) preds)) :ok
       :else :fail)))


