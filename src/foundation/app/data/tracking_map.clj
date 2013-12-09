(ns foundation.app.data.tracking-map)

(defn plain-map
  [val])

(defn record-change
  [type m k v change-map])

(defn tracking-map
  ([m] (tracking-map m m {}))
  ([basis map changes]
     (reify
       clojure.lang.IPersistentMap
       (assoc [m k v]
         (tracking-map basis (assoc basis k v)))
       (assocEx [m k v]
         (tracking-map (seq (assoc basis k v)))))))
