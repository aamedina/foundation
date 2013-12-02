(ns foundation.app
  (:require [clojure.set :as set]
            [clojure.string :as str]
            [clojure.data :refer [diff]]
            #+cljs [cljs.core.async :as a :refer [<! >! put! take! chan]]
            #+clj [clojure.core.async :as a
                   :refer [<! >! put! take! chan go-loop]]
            [clojure.zip :as zip])
  #+cljs (:require-macros [cljs.core.async.macros :refer [go go-loop]]
                          [foundation.app.macros :as m]))

(defn input-queue
  []
  (go-loop []))

(defn effect-queue
  []
  (go-loop []))

(defn render-queue
  []
  (go-loop []))

(defn app-model
  {:state (atom {})
   :description nil
   :dataflow nil
   :input input-queue
   :ouput effect-queue
   :render render-queue})
