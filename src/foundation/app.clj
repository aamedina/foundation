(ns foundation.app
  (:require [clout.core :as clout]))

(defn compile-route
  [url]
  (->> (update-in (clout/route-compile url) [:keys] vec)
       ((juxt keys vals))
       (apply zipmap)))

(defmacro defmodel
  [n {:keys [url] :as config} & body]
  (let [url (:url config)
        str-name (name n)
        compiled-route (when url (compile-route url))]
    `(def ~n (foundation.app.models/map->Model
              (merge ~compiled-route
                     (assoc ~config
                       :name (keyword "foundation.test.models"
                                      ~str-name)))))))
