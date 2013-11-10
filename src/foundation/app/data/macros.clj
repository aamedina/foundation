(ns foundation.app.data.macros)

(defmacro reify-bool
  [statement]
  `(if ~statement 1 0))
