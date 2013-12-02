(ns foundation.app.message)

(def param-ns (str (namespace ::dummy) ".param"))

(defn param
  [k]
  (keyword param-ns (name k)))

(defn ^boolean param?
  [k]
  (identical? (namespace k) param-ns))
