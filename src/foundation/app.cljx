(ns foundation.app
  (:refer-clojure :exclude [derive])
  (:require [clojure.set :as set]
            [clojure.string :as str]
            [clojure.data :refer [diff]]            
            [foundation.app.message :as msg]
            [clojure.core :as core]
            #+clj [clojure.core.match :refer [match]]
            #+clj [clojure.repl :refer [doc]]
            #+cljs [cljs.core.async :as a :refer [<! >! put! take! chan]]
            #+clj [clojure.core.async :as a
                   :refer [<! >! put! take! chan go-loop]]
            [clojure.zip :as zip])
  #+cljs (:require-macros [cljs.core.async.macros :refer [go go-loop]]
                          [foundation.app.macros :as m]))

(defmulti transform (juxt msg/type msg/topic))
(defmulti effect (juxt msg/type msg/topic))
(defmulti derive identity)

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

(defn app-model-diff
  [])

(defn apply-transform
  [data-model message]
  (update-in data-model (:topic message) (partial transform message)))

(defmacro build
  []
  `(let [data-model# (atom {:data-model {}})
         render-queue# (render-queue data-model#)
         input-queue# (input-queue data-model# render-queue#)
         effect-queue# (effect-queue data-model# input-queue#)
         transform# ~(into [] (map vec (methods transform)))
         effect# ~(into [] (map set (methods effect)))
         description# {:transform transform# :effect effect#}
         dataflow# description#]
     {:state data-model#
      :description description#
      :dataflow dataflow#
      :input input-queue#
      :effect effect-queue#
      :render render-queue#}))

(defmethod transform [:inc [:counter]]
  [message state]
  ((fnil inc 0) state))

(defmethod derive [:inc #{[:counter]} [:counters] :map]
  [message state]
  ((fnil inc 0) state))

(defmethod effect [:inc [:counter]]
  [message])

(defmethod render [:node-create [:*] :map]
  [delta])

(defmethod render [:node-destroy [:*] :map]
  [delta])

(defmethod render [:transform-enable [:*] :map]
  [delta])

(defmethod render [:transform-disable [:*] :map]
  [delta])

(defmulti node-create msg/topic)
(defmulti node-destroy msg/topic)
(defmulti transform-enable (juxt msg/type msg/topic))
(defmulti transform-disable (juxt msg/type msg/topic))

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

(defmethod node-create [:*]
  [delta]
  '(dom/append! ))

(defmethod node-create :default
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


