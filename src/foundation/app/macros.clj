(ns foundation.app.macros)

(defmacro defbehavior
  [name config]
  `(def ~name ~config))

(defmacro defrenderer
  [name config]
  `(def ~name ~config))

(defmacro defservice
  [name config]
  `(def ~name ~config))

(defmacro defmodel
  [name spec]
  `(def ~name ~spec))

(defservice twitter
  {:api "http://192.241.130.213:8080/user/15/ads-api"})

(defbehavior app
  {:transform []
   :effect []
   :emit []})
