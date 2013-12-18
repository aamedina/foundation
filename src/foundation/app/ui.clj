(ns foundation.app.ui)

(defmacro component
  [body]
  `(reify
     foundation.app.ui/IComponent
     (~'-render [this#]
       (dommy.macros/node ~body))))
