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
  (assert (satisfies? IEffect record) "Record does not implement IEffect.")
  (assert (contains? (-registered record) (type event))
          "Incompatible event type for record."))
