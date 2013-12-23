(ns foundation.app.events
  (:require [goog.events :as events]
            [cljs.core.async :as async
             :refer [<! take! put! >! chan close!]])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

(defprotocol IEventSource
  (-emit [_ event])
  (-observe [_ event]))

(defprotocol IValidate
  (-validate [_]))

(defn ^boolean valid?
  [event]
  (-validate event))

(defprotocol IEffect
  (-effect [record event])
  (-registered [record]))

(defn effect
  [record event]
  {:pre [(satisfies? IEffect record)
         (contains? (-registered record) (type event))]})

;; tests

(defrecord BattingEvent [result]
  IValidate
  (-validate [e] (boolean (:result e))))

(defn batting-event
  [event-map]
  (map->BattingEvent event-map))

(defn test-validate
  []
  (and (= (valid? (batting-event {:result :hit}))
          true)
       (= (valid? (batting-event {:result nil}))
          false)))

(defn effect-test
  [{:keys [ab ]}])
