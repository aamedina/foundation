(ns foundation.app.macros
  (:refer-clojure :exclude [future]))

(defmacro future
  [& body]
  `(let [future-state# (atom nil)
         promise#
         (reify
           cljs.core/IDeref
           (~'-deref [this#]
             (when-not (realized? this#)
               (cljs.core.async.macros/go-loop [x# (cljs.core.async/<!
                                                    (do ~@body))]
                 (if (foundation.app.logic/chan? x#)
                   (recur (cljs.core.async/<! x#))
                   (reset! future-state# x#))))
             (if-not (realized? this#)
               future-state#
               @future-state#))
           cljs.core/IPending
           (~'-realized? [this#]
             (boolean @future-state#))
           cljs.core/IPrintWithWriter
           (~'-pr-writer [coll# writer# opts#]
             (~'-pr-writer future-state# writer# opts#)))]
     @promise#
     promise#))
