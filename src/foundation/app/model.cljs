(ns foundation.app.model)

(defn subs-uri
  [uri & params]
  (let [params (if-not (map? (first params))
                 (apply hash-map params)
                 (first params))
        str (loop [matches (re-seq #":([\w-_]+)" uri) result uri]
              (if (empty? matches) result
                  (let [[token kw] (first matches) value (get params (keyword kw))]
                    (recur (rest matches)
                           (clojure.string/replace result token (str value))))))]
    (clojure.string/replace str #"/$" "")))

(defn query-params
  [kvs]  
  (when (seq kvs)
    (let [kvs (clojure.walk/stringify-keys kvs)]
      (str "?" (goog.Uri.QueryData/createFromKeysValues
                (clj->js (map #(clojure.string/replace % #"-" "_") (keys kvs)))
                (clj->js (vals kvs)))))))

(defn make-uri
  [resource params]
  (if-let [query-string (when-let [q (:query-params resource)]
                          (let [ps (keep #(when (get q (key %)) %) params)]
                            (query-params (into {} ps))))]
    (str (:api resource) (subs-uri (:url resource) params) query-string)
    (str (:api resource) (subs-uri (:url resource) params))))

(defn fetch!
  ([resource] (fetch! resource {}))
  ([resource params]
     (let [uri (if (string? params) params (make-uri resource params))
           out (chan)]
       (if-let [cached (get-cached uri)]
         (do (put! out cached)
             (close! out))
         (go (let [res-chan (GET uri) res (<! res-chan)]
               (when (or (= (:status res) 200) (= (:status res) 201))
                 (when-not (nil? res)
                   (put! out (on-success uri (:body res))))
                 (close! out))
               (when (not (or (= (:status res) 200) (= (:status res) 201)))
                 (when-not (nil? (:body res))
                   (put! out (:body res)))
                 (close! out))
               (close! res-chan))))
       
       out)))
