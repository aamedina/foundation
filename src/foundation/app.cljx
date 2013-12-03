(ns foundation.app
  (:refer-clojure :exclude [derive])
  (:require [clojure.set :as set]
            [clojure.string :as str]
            [clojure.data :refer [diff]]            
            [foundation.app.message :as msg]
            [clojure.core :as core]
            #+clj [clojure.core.match :refer [match]]
            #+cljs [cljs.core.match :as m]
            #+clj [clojure.repl :refer [doc]]
            #+cljs [cljs.core.async :as a :refer [<! >! put! take! chan]]
            #+clj [clojure.core.async :as a
                   :refer [<! >! put! take! chan go go-loop]]
            [clojure.zip :as zip])
  #+cljs (:require-macros [cljs.core.async.macros :refer [go go-loop]]
                          [cljs.core.match :as m :refer [match]]
                          [foundation.app.macros :as m]))

(defmulti transform (juxt msg/type msg/topic))
(defmulti effect (juxt msg/type msg/topic))
(defmulti derive identity)
(defmulti render identity)
(defmulti node-create msg/topic)
(defmulti node-update (juxt msg/topic :sel))
(defmulti node-destroy msg/topic)
(defmulti transform-enable (juxt msg/type msg/topic))
(defmulti transform-disable (juxt msg/type msg/topic))

(defmethod transform :default [message state] state)

(defmethod effect :default [message] (go []))

(defmethod render :default [[op path f :as delta]] [])

(defn input-queue
  [data-model render-queue]
  (go-loop []))

(defn effect-queue
  [data-model input-queue]
  (go-loop []))

(defn render-queue
  [data-model]
  (go-loop []))

(defn transact
  [data-model message]
  )

(defn transact-all
  [data-model]
  (let []))

(defn rendering-deltas
  [[old new _]]
  (let []))

(defn run-dataflow
  [data-model message]
  (letfn [(transform-phase [state]
            (update-in state (reduce into [] :new (:topic message))
                       (partial transform message)))
          (diff-phase [state]
            (loop [o (:old state) n (:new state) prefix (:topic message)]
              )
            (assoc state :change (diff (:old state) (:new state))))
          (emit-phase [state]
            (assoc state :deltas (rendering-deltas (:change state))))
          (derive-phase [state]
            (assoc state :deltas (rendering-deltas (:change state))))
          (effect-phase [state]
            (effect message))]
    (let [state {:old @data-model
                 :new @data-model
                 :change {}
                 :deltas []
                 :context {:message message}}
          new-state (transform-phase state)]
      (-> state
          transform-phase
          diff-phase))))

(defmacro build
  []
  `(let [data-model# (atom {:data-model {}})
         render-queue# (render-queue data-model#)
         input-queue# (input-queue data-model# render-queue#)
         effect-queue# (effect-queue data-model# input-queue#)
         transform# ~(methods transform)
         effect# ~(set (methods effect))
         rendering-config# ~(assoc {}
                              :node-create (methods node-create)
                              :node-update (methods node-update)
                              :node-destroy (methods node-destroy)
                              :transform-enable (methods transform-enable)
                              :transform-disable (methods transform-disable))
         description# {:transform transform# :effect effect#}
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

(defmethod derive [:inc #{[:counter]} [:counters] :map]
  [message state]
  ((fnil inc 0) state))

(defmethod effect [:inc [:counter]]
  [message])

(defn resolve-id
  [topic])

(def ^:dynamic *dom* (atom (make-hierarchy)))

(def dom ::dom)
(def root ::root)

(defn ns-qualify
  [x]
  (keyword (namespace dom) (name x)))

(defn extend-dom!
  ([child] (extend-dom! child :root))
  ([child parent]
     (swap! *dom* core/derive (ns-qualify child) (ns-qualify parent))))

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


