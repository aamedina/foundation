(ns foundation.app.log)

(defn ^:export worker? [] (nil? (.-document (js* "this"))))

(defn log-map
  []
  (let [d (assoc m :timestamp (.getTime (js/Date.)))]
    (condp = (get-in [:log :level])
      :debug (js/console.debug (pr-str d))
      :error (js/))))

(defn log
  [& args]
  (if (worker?)
    (js/postMessage (pr-str message))
    (log-map (apply hash-map args))))

(defn log-group
  [group-name coll]
  (js/console.group group-name)
  (doseq [d coll]
    (js/console.log (pr-str d)))
  (js/console.groupEnd))
