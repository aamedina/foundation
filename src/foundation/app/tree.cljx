(ns foundation.app.tree
  (:require [clojure.zip :as zip]))

(def inversions
  {:node-create :node-destroy :node-destroy :node-create
   :transform-enable :transform-disable :transform-disable :transform-enable})

(defn invert
  [deltas]
  (map inversions (reverse deltas)))

(def app-model
  {:deltas []
   :t 0})