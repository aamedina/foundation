(ns foundation.app.render
  (:require [cljs.core.async :refer [<! take! put! >! chan]])
  (:require-macros [cljs.core.async.macros :refer [go-loop]]))

(defn render-queue
  []
  (go-loop []))
