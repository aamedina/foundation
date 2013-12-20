(ns foundation.app.ui)

(defmacro defcomponent
  [name args & body]
  `(defn ~name ~args ~@body))
