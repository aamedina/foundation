(ns foundation.app
  (:require [clojure.set :as set]
            [clojure.string :as str]
            [clojure.data :refer [diff]]
            [cljs.core.async :as a :refer [<! >! put! take! chan]]
            [clojure.zip :as zip])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]
                   [foundation.app.macros :as m]))

(defn input-queue
  []
  (go-loop []))

(defn build
  [])
