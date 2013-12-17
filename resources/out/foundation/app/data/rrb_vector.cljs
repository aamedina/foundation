(ns foundation.app.data.rrb-vector
  (:refer-clojure :exclude [vector vec subvec])
  (:require [foundation.app.data.rrb-vector.protocols
             :refer [-slicev -splicev]]
            [foundation.app.data.rrb-vector.rrbt]
            [foundation.app.data.rrb-vector.interop])
  (:require-macros [foundation.app.data.rrb-vector.macros
                    :refer [gen-vector-method]]))

(defn catvec
  "Concatenates the given vectors in logarithmic time."
  ([]
     [])
  ([v1]
     v1)
  ([v1 v2]
     (-splicev v1 v2))
  ([v1 v2 v3]
     (-splicev (-splicev v1 v2) v3))
  ([v1 v2 v3 v4]
     (-splicev (-splicev v1 v2) (-splicev v3 v4)))
  ([v1 v2 v3 v4 & vn]
     (-splicev (-splicev (-splicev v1 v2) (-splicev v3 v4))
               (apply catvec vn))))

(defn subvec
  "Returns a new vector containing the elements of the given vector v
  lying between the start (inclusive) and end (exclusive) indices in
  logarithmic time. end defaults to end of vector. The resulting
  vector shares structure with the original, but does not hold on to
  any elements of the original vector lying outside the given index
  range."
  ([v start]
     (-slicev v start (count v)))
  ([v start end]
     (-slicev v start end)))

(defn vector
  "Creates a new vector containing the args."
  ([]
     (gen-vector-method))
  ([x1]
     (gen-vector-method x1))
  ([x1 x2]
     (gen-vector-method x1 x2))
  ([x1 x2 x3]
     (gen-vector-method x1 x2 x3))
  ([x1 x2 x3 x4]
     (gen-vector-method x1 x2 x3 x4))
  ([x1 x2 x3 x4 & xn]
     (into (vector x1 x2 x3 x4) xn)
     #_
     (loop [v  (vector x1 x2 x3 x4)
            xn xn]
       (if xn
         (recur (-conj ^not-native v (first xn))
                (next xn))
         v))))

(defn vec
  "Returns a new vector containing the contents of coll."
  [coll]
  (apply vector coll))
