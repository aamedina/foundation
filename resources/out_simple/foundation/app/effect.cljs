(ns foundation.app.effect
  (:require [cljs.core.async :refer [<! take! put! >! chan]])
  (:require-macros [cljs.core.async.macros :refer [go-loop]]))

(defn effect-queue
  []
  (go-loop []))