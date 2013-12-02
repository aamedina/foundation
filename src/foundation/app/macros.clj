(ns foundation.app.macros)

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

(defmulti transform (fn [{:keys [type topic]}] [type topic]))
(defmulti effect (fn [{:keys [type topic]}] [type topic]))
(defmulti render (fn [{:keys [type topic]}] [type topic]))

(def event-types #{:click})

(defn route-message
  [{:keys [type topic] :as message}]
  (cond
    (or (contains? event-types type)
        )
    (effect message)
    :else (throw (ex-info "No matching route found for message."
                          {:message message}))))

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
