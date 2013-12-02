(ns foundation.app.zip
  (:require [clojure.zip :as zip]))

(defn coll-zip
  [root]
  (zip/zipper coll?
              seq
              (fn [node children]
                (with-meta (into (empty node) children) (meta node)))
              root))

(defn locs
  [root]
  (take-while (complement zip/end?) (iterate zip/next (coll-zip root))))

(defn nodes
  [root]
  (for [loc (locs root)] (zip/node loc)))
