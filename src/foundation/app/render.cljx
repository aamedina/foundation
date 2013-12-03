(ns foundation.app.render
  (:require #+cljs [cljs.core.async :refer [<! take! put! >! chan]]
            #+clj [clojure.core.async :refer [<! take! put! >! chan go-loop]])
  #+cljs (:require-macros [cljs.core.async.macros :refer [go-loop]]))

(defn render-queue
  []
  (go-loop []))
