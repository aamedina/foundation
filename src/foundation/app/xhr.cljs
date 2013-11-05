(ns foundation.app.xhr
  (:require
   [goog.net.XhrManager]
   [clojure.walk :refer [postwalk]]
   [cljs.reader :as reader]
   [cljs.core.async :as async :refer [put! chan mult tap sub pub]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def *headers*
  {"X-Requested-With" "XMLHttpRequest"})

(def *xhr-pool*
  "Default options for the XHR pool used to manage concurrent XHR requests.
   It operates as a FIFO (first in, first out) queue, where (by default) up to
   six concurrent XHR requests are sent out by the browser. This number was chosen
   because that's generally what browsers are maximally capable of truly performing
   concurrently."
  (goog.net.XhrManager.
   (clj->js {:opt_minCount 1
             :opt_maxCount 6
             :opt_maxRetries 0})))

(defn clojurify-keys
  [m]
  (let [f (fn [[k v]] (if (string? k)
                        [(keyword (clojure.string/replace k #"_" "-")) v]
                        [k v]))]
    (postwalk (fn [x] (if (map? x) (into {} (map f x)) x)) m)))

(defn fix-body
  [body]
  (when (seq kvs)
    (let [kvs (clojure.walk/stringify-keys kvs)]
      (reduce-kv (fn [init k v]
                   (assoc init (clojure.string/replace k #"-" "_") v))
                 {} kvs))))

(def outstanding-requests
  (atom {}))

(defn xhr
  "Function that performs the XHR request. Parses the response upon return into a
   persistent data structure, given that content type of the response was
   JSON. Otherwise, it just returns the body of the response as text. Multiple
   concurrent requests to identical URIs are disallowed to prevent deadlock in the
   event of starvation (if the response never returns)."
  ([uri]
     (xhr uri "GET" nil *headers*))
  ([uri method]
     (xhr uri method nil *headers*))
  ([uri method content]
     (xhr uri method content *headers*))
  ([uri method content headers]
     (let [c (chan) m (mult c)]
       (if-let [source (get @outstanding-requests uri)]
         (tap source (chan))
         (try (.send
               *xhr-pool* uri uri method
               (if-not (string? content)
                 (JSON/stringify (clj->js (fix-body content)))
                 content)
               (clj->js headers) 50
               #(do (put! c
                          {:status (.getStatus (.-target %))
                           :body (cond (re-find #"application/json"
                                                (.getResponseHeader
                                                 (.-target %) "Content-Type"))
                                       (-> (js->clj (.getResponseJson
                                                     (.-target %)))
                                           (clojurify-keys))
                                       (re-find #"application/edn"
                                                (.getResponseHeader
                                                 (.-target %) "Content-Type"))
                                       (reader/read-string
                                        (.getResponseText (.-target %)))
                                       :else (.getResponseText (.-target %)))
                           :headers (.getAllResponseHeaders (.-target %))})
                    (swap! outstanding-requests dissoc uri))
               0)
              (swap! outstanding-requests assoc uri m)
              (tap m (chan))
              (catch js/Error e nil))))))

(defn GET
  "Sends a GET request to the specified URI."
  [uri & {:keys [headers] :or {:headers {}}}]
  (xhr uri "GET" nil headers))

(defn POST
  "Sends a POST request to the specified URI with the given payload."
  [uri & {:keys [body headers] :or {headers {} body nil}}]
  (xhr uri "POST" body (merge *headers* headers)))

(defn PUT
  "Sends a PUT request to the specified URI with the given payload."
  [uri & {:keys [body headers] :or {headers {} body nil}}]
  (xhr uri "PUT" body (merge *headers* headers)))

(defn DELETE
  "Sends a DELETE request to the specified URI."
  [uri & {:keys [body headers] :or {headers {} body nil}}]
  (xhr uri "DELETE" nil (merge *headers* headers)))


