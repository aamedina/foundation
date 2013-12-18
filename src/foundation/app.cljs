(ns foundation.app
  (:require [cljs.core.async :refer [chan <! >! <! put! take! timeout alts!
                                     sliding-buffer close!]]
            [cljs.core.match :as m]
            [clojure.set :as set]
            [clojure.string :as str]
            [foundation.app.render :as render]
            [foundation.app.data.tracking-map :as tm])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]
                   [cljs.core.match.macros :refer [match]]))

(declare transact-one)

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

(defn render-queue
  [app-state]
  (let [render-queue (chan (sliding-buffer 32))]
    (add-watch app-state :output
               (fn [_ _ old new]
                 (put! render-queue new)))
    render-queue))

(defrecord Dataflow [state input output renderer])

(defn root
  [root-id]
  (let [app-state (atom (tm/tracking-map {}))
        [input output renderer]
        ((juxt input-queue output-queue render-queue) app-state)]
    (Dataflow. app-state input output renderer)))
