(ns foundation.app.macros
  (:require [clojure.core.async :refer [put!]]))

(defmacro defbehavior
  [name config]
  `(def ~name ~config))

(defmacro defrenderer
  [name config]
  `(def ~name ~config))

(defmacro defservice
  [name config]
  `(def ~name ~config))

(defmacro defmodel
  [name spec]
  `(def ~name ~spec))

(defservice twitter
  {:api "http://192.241.130.213:8080/user/15/ads-api"})

(defmulti transform (juxt :type :topic))
(defmulti effect (juxt :type :topic))
(defmulti render (juxt first second last))

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

(def event-types #{:click})

(def app-model (atom {}))

(defn route-message
  [app-model effect-queue msg]
  (cond
    (or (contains? event-types (:type msg)) 
        (contains? (methods effect) [(:type msg) (:topic msg)]))
    (put! effect-queue msg)
    (contains? (methods transform) [(:type msg) (:topic msg)])
    (transform msg (get-in app-model (:topic msg)))
    :else
    (throw (ex-info "No matching route found for message." {:msg msg}))))

(defbehavior app
  {:transform []
   :effect []})

(defmodel accounts
  {:url "/accounts/:id"})

(defmodel campaigns
  {:url "/accounts/:account-id/campaigns/:id"})

(comment
  "Three fundamental queues:
    a. Render queue => 
         input: rendering deltas 
         job: mutate the DOM accordingly
    b. Input queue =>
         input: message from the application
         job: route the message to its appropriate transform function handler,
              apply the function, and return a new application state after 
              the function application. Only creates rendering deltas for 
              those transformed paths which are configured in the renderer.
    c. Effect/Service queue =>
         input: message from the application
         job: route the message to the appropriate effect function handler,
              call the function, which should return messages to be enqueued
              to the input queue - possibly with transforms that will update
              the state.")
