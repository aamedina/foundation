(ns foundation.app.ui)

(defmacro component
  [body]
  `(reify
     foundation.app.ui/IComponent
     (~'-render [this# parent#]
       (dommy.macros/node ~body))))
