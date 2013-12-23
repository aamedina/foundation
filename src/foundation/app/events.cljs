(ns foundation.app.events
  (:require [goog.events :as events]
            [cljs.core.async :as async
             :refer [<! take! put! >! chan close!]])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

(defprotocol IValidate
  (-validate [_]))

(defn valid?
  [event]
  (-validate event))
