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

(defn coll-zip
  [root]
  (zip/zipper coll?
              seq
              (fn [node children]
                (with-meta (into (empty node) children) (meta node)))
              root))

(defn locs
  [root]
  (take-while (complement zip/end?)
              (iterate zip/next (coll-zip root))))

(defn nodes
  [root]
  (for [loc (locs root)] (zip/node loc)))
