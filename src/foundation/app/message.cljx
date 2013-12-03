(ns foundation.app.message
  (:refer-clojure :exclude [type]))

(def type ::type)

(def path ::path)

(def param-ns (str (namespace ::dummy) ".param"))

(defn param
  [k]
  (keyword param-ns (name k)))

(defn param?
  [k]
  (identical? (namespace k) param-ns))


