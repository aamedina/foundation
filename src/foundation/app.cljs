(ns foundation.app
  (:require [cljs.core.async :refer [chan <! >! <! put! take! timeout alts!
                                     sliding-buffer close!]]
            [cljs.core.match :as m]
            [clojure.set :as set]
            [clojure.string :as str]
            [foundation.app.render :as render]
            [foundation.app.router :as r]
            [foundation.app.data.tracking-map :as tm]
            [foundation.app.data.component :as c :refer [Lifecycle]]
            [foundation.app.data.dependency :as d])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]
                   [cljs.core.match.macros :refer [match]]))

(def ^:dynamic *app* nil)

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
        (println message)
        ;; (swap! app-state transact-one message)
        )
      (recur))
    input-queue))

(defn output-queue
  [app-state]
  (let [output-queue (chan (sliding-buffer 32))]
    (add-watch app-state :output
               (fn [_ _ old new]
                 (put! output-queue new)))
    output-queue))

(defrecord Dataflow [state input output renderer router]
  Lifecycle
  (start [df])
  (stop [df]))

(defn build
  [& {:keys [root-id routes] :as config}]
  (let [app-state (atom {:data-model (tm/tracking-map {})})
        router (r/router app-state routes)
        [input output renderer]
        ((juxt input-queue output-queue identity) app-state)]
    (r/navigate! router js/document.location.href :method :get)
    (Dataflow. app-state input output renderer router)))
