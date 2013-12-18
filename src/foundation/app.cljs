(ns foundation.app
  (:require [cljs.core.async :refer [chan <! >! <! put! take! timeout alts!
                                     sliding-buffer close!]]
            [cljs.core.match :as m]
            [clojure.set :as set]
            [clojure.string :as str]
            [foundation.app.render :as render]
            [foundation.app.message :as msg]
            [foundation.app.router :as r :refer [route]]
            [foundation.app.util :refer [log-group]]
            [foundation.app.data.tracking-map :as tm]
            [foundation.app.data.component :as c :refer [Lifecycle]]
            [foundation.app.data.dependency :as d])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]
                   [cljs.core.match.macros :refer [match]]))

(defmulti transform
  (fn [state message]
    [(msg/type message) (msg/path message)]))

(defmethod transform :default
  [state message]
  (println state message)
  state)

(defn transact-one
  [state message]
  (let [state (-> state (assoc :input message) (dissoc :effect))
        old-state (get-in state (into [:data-model] (msg/path message)))
        new-state (update-in state (into [:data-model] (msg/path message))
                             transform message)
        deltas []]
    (-> new-state
        (assoc :deltas deltas))))

(defn transact-batch
  [state messages]
  (reduce transact-one state messages))

(defn input-queue
  [app-state]
  (let [input-queue (chan (sliding-buffer 32))]
    (go-loop []
      (let [input (<! input-queue)]
        (if (vector? input)
          (swap! app-state transact-batch input)
          (swap! app-state transact-one input)))
      (recur))
    input-queue))

(defn output-queue
  [app-state]
  (let [output-queue (chan (sliding-buffer 32))]
    (add-watch app-state :output
               (fn [_ _ old new]
                 (put! output-queue new)))
    output-queue))

(defrecord Dataflow [state input output renderer render-queue router]
  Lifecycle
  (start [df]
    (c/start-system df #{:router :renderer})
    (log-group
     "System initialization"
     [["Router initialized."]
      ["Renderer initialized."]
      [(c/dependency-graph df [:router :renderer])]])
    df)
  (stop [df]
    (c/stop-system df #{:router :renderer})))

(defn build
  [& {:keys [root-id routes] :as config}]
  (let [app-state (atom {:data-model (tm/tracking-map {})})
        input (input-queue app-state)
        output (output-queue app-state)
        renderer (render/renderer root-id)
        render-queue (render/push-render-queue renderer input)]
    (try (c/start (map->Dataflow
                   {:state app-state
                    :input input
                    :output output
                    :renderer (c/using renderer
                                {:input :input
                                 :app-state :state})
                    :render-queue render-queue
                    :router (c/using (r/router routes)
                              {:input :input
                               :app-state :state})}))
         (catch js/Error e
           (println e)))))
