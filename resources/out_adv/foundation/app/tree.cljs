(ns foundation.app.tree)

(def inversions
  {:node-create :node-destroy :node-destroy :node-create
   :transform-enable :transform-disable :transform-disable :transform-enable})

(defn invert
  [deltas]
  (map inversions (reverse deltas)))

(def app-model
  {:deltas []
   :t 0})
