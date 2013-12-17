(ns foundation.app.xhr
  (:require
   [goog.net.XhrManager]
   [goog.Uri.QueryData]
   [goog.storage.mechanism.HTML5LocalStorage]
   [goog.storage.ExpiringStorage]
   [cljs-time.core :as t]
   [cljs-time.coerce :as coerce]
   [clojure.walk :refer [postwalk]]
   [cljs.reader :as reader]
   [cljs.core.async :as async :refer [put! chan mult tap sub pub]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def localstorage
  (goog.storage.ExpiringStorage. (goog.storage.mechanism.HTML5LocalStorage.)))

(defn get-cached
  [uri]
  (try (reader/read-string (.get localstorage uri))
       (catch js/Error e nil)))

(defn assoc-in-cache!
  [k v & {:keys [expiry]}]
  (try (.set localstorage (name k) (pr-str v) expiry)
       (catch js/Error e nil)))

(defn parse-response
  [response-body]
  (if-let [data (:data response-body)]
    data
    response-body))

(defn on-success
  [uri response-body]
  (let [data (parse-response response-body)]
    (assoc-in-cache! uri data :expiry (t/plus (t/now) (t/minutes 15)))
    data))

(def *headers*
  {"X-Requested-With" "XMLHttpRequest"})

(def xhr-pool
  (goog.net.XhrManager. (clj->js {:opt_minCount 1
                                  :opt_maxCount 6
                                  :opt_maxRetries 0})))

(def outstanding-requests (atom {}))

(defn clojurify-keys
  [m]
  (let [f (fn [[k v]]
            (if (string? k)
              [(keyword (clojure.string/replace k #"_" "-")) v]
              [k v]))]
    (clojure.walk/postwalk (fn [x] (if (map? x)
                                     (into {} (map f x))
                                     x)) m)))

(defn stringify
  [kvs]
  (-> (reduce-kv (fn [init k v]
                   (assoc init
                     (clojure.string/replace (name k) #"-" "_") v))
                 {} kvs)
      clj->js
      JSON/stringify))

(defn handle-response
  [res]
  (let [content-type (-> (.getResponseHeader res "Content-Type")
                         (clojure.string/split #";")
                         first)
        body (condp = content-type
               "application/json" (-> (.getResponseJson res)
                                      js->clj
                                      clojurify-keys)
               "application/edn" (-> (.getResponseText res)
                                     cljs.reader/read-string)
               (.getResponseText res))
        status (.getStatus res)
        headers (.getAllResponseHeaders res)
        body (if (or (= status 200) (= status 201))
               (on-success (.getLastUri res) body)
               body)]
    {:headers headers :status status :body body}))

(defn xhr
  [uri method content headers]
  (let [c (chan)
        m (mult c)]
    (if-let [cached (get-cached uri)]
      (let [tapped (tap m (chan))]
        (put! tapped cached)
        tapped)
      (if-let [source (get @outstanding-requests uri)]
        (tap source (chan))
        (try (.send xhr-pool uri uri method
                    (if (and (not (string? content))
                             (not (nil? content)))
                      (stringify content)
                      content)
                    (clj->js headers) 50
                    #(do (put! c (handle-response (.-target %)))
                         (swap! outstanding-requests dissoc uri))
                    0)
             (swap! outstanding-requests assoc uri m)
             (tap m (chan))
             (catch js/Error e nil))))))

(defn GET
  "Sends a GET request to the specified URI."
  [uri & {:keys [headers] :or {:headers {}}}]
  (xhr uri "GET" nil (merge *headers* headers)))

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
