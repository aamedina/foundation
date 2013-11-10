(ns foundation.app.relation
  (:require [clojure.set :as set]))

(defn derived
  [& relations])

(def view derived)

(defn base
  [relation])

(defn record
  [& attributes]
  (apply hash-map (interpose nil attributes)))

(defn relation
  [& records]
  (set records))
