(ns foundation.app.macros)

(defmacro defrel
  [name spec]
  `(def ~name (foundation.app.relation/relvar ~spec)))
