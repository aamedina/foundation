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

(defmethod transform :default [state message] state)

(defn transact-one
  ([state message]
     (let [in-transaction? (instance? tm/TrackingMap (:data-model state))
           state (-> (if in-transaction?
                       state
                       (assoc state
                         :data-model (tm/tracking-map (:data-model state))))
                     (assoc :input message)
                     (dissoc :effect))
           new-state (update-in state (into [:data-model] (msg/path message))
                                transform message)
           deltas (tm/changes (:data-model new-state))]
       (-> (if in-transaction?
             new-state
             (assoc new-state :data-model (into {} (:data-model new-state))))
           (assoc :deltas deltas)))))

(defn transact-batch
  [state messages]
  (let [transaction (assoc state
                      :data-model (tm/tracking-map (:data-model state)))
        new-state (reduce transact-one transaction messages)]
    (assoc new-state
      :data-model (into {} (:data-model new-state)))))

(defn input-queue
  [app-state]
  (let [input-queue (chan (sliding-buffer 32))]
    (go-loop []
      (let [input (<! input-queue)]
        (let [new-state (if (vector? input)
                          (swap! app-state transact-batch input)
                          (swap! app-state transact-one input))]
          (log-group "Data Model Deltas" (:deltas new-state))))
      (recur))
    input-queue))

(defn output-queue
  [app-state]
  (let [output-queue (chan (sliding-buffer 32))]
    (add-watch app-state :output
               (fn [_ _ old new]
                 (log-group
                  "State Transitition"
                  [(:data-model old)
                   (:data-model new)])
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
  (let [app-state (atom {:data-model {}})
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
