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
                   :refer [<! >! put! take! chan go-loop]]
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

(defmethod transform :default
  [message state]
  (let [new-state state]
    new-state))

(defmethod effect :default
  [message]
  [])

(defmethod render :default
  [[op path f :as delta]]
  [])

(defn input-queue
  [data-model render-queue]
  (go-loop []))

(defn effect-queue
  [data-model input-queue]
  (go-loop []))

(defn render-queue
  [data-model]
  (go-loop []))

(defn run-dataflow
  [data-model message]
  (let [state {:old @data-model
               :new @data-model
               :change {}
               :context {:message message}}]
    (letfn [(transform-phase [state]
              (update-in data-model (:topic message)
                         (partial transform message)))
            (effect-phase [state]
              (effect message))]
      (-> state
          transform-phase
          effect-phase))))

(defn diff-map
  [old new]
  (loop [[o n both] (diff old new)
         m {:removed nil :added nil :updated nil :data-model new}]
    (println o n)
    (cond
      (and (= o old) (= n new)) (assoc m :updated n)
      (map? n) (recur (diff old n) m)
      (nil? o) (assoc m :added o)
      (nil? n) (assoc m :removed o))
    ))

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


