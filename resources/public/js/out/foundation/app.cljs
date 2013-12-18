(ns foundation.app
  (:require [cljs.core.async :refer [chan <! >! <! put! take! timeout alts!
                                     sliding-buffer close!]]
            [cljs.core.match :as m]
            [clojure.set :as set]
            [clojure.string :as str]
            [foundation.app.render :as render]
            [foundation.app.data.tracking-map :as tm]
            [foundation.app.data.component :as c :refer [Lifecycle]]
            [foundation.app.data.dependency :as d])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]
                   [cljs.core.match.macros :refer [match]]))

(defn transact-one
  [state message]
  (let [state (-> state (assoc :input message) (dissoc :effect))
        old-state state
        new-state state]
    new-state))

(defn input-queue
  [app-state]
  (let [input-queue (chan (sliding-buffer 32))]
    (go-loop []
      (let [message (<! input-queue)]
        (swap! app-state transact-one message))
      (recur))
    input-queue))

(defn output-queue
  [app-state]
  (let [output-queue (chan (sliding-buffer 32))]
    (add-watch app-state :output
               (fn [_ _ old new]
                 (put! output-queue new)))
    output-queue))

(def refresh-queued false)

(defn render-queue
  [app-state]
  (let [render-queue (chan (sliding-buffer 32))
        rootf (fn []
                (set! refresh-queued false)
                (let [path []]
                  ))]
    (add-watch app-state :render
               (fn [_ _ old new]
                 (when-not refresh-queued
                   (if (exists? js/requestAnimationFrame)
                     (js/requestAnimationFrame rootf)
                     (js/setTimeout rootf 16)))
                 (put! render-queue new)))
    render-queue))

(defrecord Dataflow [state input output renderer])

(defn root
  [root-id]
  (let [app-state (atom {:data-model (tm/tracking-map {})})
        [input output renderer]
        ((juxt input-queue output-queue render-queue) app-state)]
    (Dataflow. app-state input output renderer)))
