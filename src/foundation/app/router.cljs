(ns foundation.app.router
  (:require [clojure.string :as str]
            [goog.string :as gstring]
            [clojure.set :as set]
            [dommy.core :as dom]
            [foundation.app.ui :as ui]
            [cljs.core.async :as async :refer [put! chan >! <!]]
            [cljs.core.async.impl.channels :refer [ManyToManyChannel]]
            [foundation.app.xhr :as xhr]
            [foundation.app.data.component :as c :refer [Lifecycle]])
  (:require-macros [foundation.app.router
                    :refer [defroutes GET POST PUT DELETE ANY context]]
                   [dommy.macros :refer [node sel sel1]]
                   [cljs.core.async.macros :refer [go go-loop]])
  (:import [goog.history Html5History]
           [goog Uri]))

(enable-console-print!)

(defmulti route (fn [req]
                  (->> (replace (set/map-invert (:route-params req))
                                (str/split (:uri req) #"/"))
                       (str/join "/")
                       (#(if (empty? %) "/" %))
                       (vector (:method req)))))

(defmethod route :default [req] nil)

(def re-chars (reduce #(assoc %1 %2 (str \\ %2)) {} (set "\\.*+|?()[]{}$^")))

(defn- re-escape
  "Escape all special regex chars in a string."
  [s] (str/escape s re-chars))

;; Route matching

(defn path-decode
  "Decode a path segment in a URI. Defaults to using UTF-8 encoding."
  [path]
  (-> (str/replace path "+" (js/encodeURI "+"))
      (js/decodeURI)))

(defn- assoc-vec
  "Associate a key with a value. If the key already exists in the map,
  create a vector of values."
  [m k v]
  (assoc m k
         (if-let [cur (m k)]
           (if (vector? cur)
             (conj cur v)
             [cur v])
           v)))

(defn- assoc-keys-with-groups
  "Create a hash-map from a series of regex match groups and a collection of
  keywords."
  [groups keys]
  (reduce
   (fn [m [k v]] (assoc-vec m k v))
   {}
   (map vector keys groups)))

(defn- request-url
  "Return the complete URL for the request."
  [request]
  (str (name (:scheme request))
       "://"
       (get-in request [:headers "host"])
       (:uri request)))

(defn- path-info
  "Return the path info for the request."
  [request]
  (or (:path-info request)
      (:uri request)))

(defprotocol Route
  (route-matches [route request]
    "If the route matches the supplied request, the matched keywords are
    returned as a map. Otherwise, nil is returned."))

(defrecord CompiledRoute [re keys absolute?]
  Route
  (route-matches [route request]
    (let [path-info (if absolute?
                      (request-url request)
                      (path-info request))]
      (if-let [matches (re-matches re path-info)]
        (assoc-keys-with-groups
         (map path-decode (rest matches))
         keys)))))

;; Compile routes

(defn- lex-1
  "Lex one symbol from a string, and return the symbol and trailing source."
  [src clauses]
  (some
   (fn [[re action]]
     (let [matches (.exec re src)]
       (if (gstring/startsWith src (first matches))
         [(if (fn? action) (action matches) action)
          (subs src (count (first matches)))])))
   (partition 2 clauses)))

(defn- lex
  "Lex a string into tokens by matching against regexs and evaluating
   the matching associated function."
  [src & clauses]
  (loop [results []
         src     src
         clauses clauses]
    (if-let [[result src] (lex-1 src clauses)]
      (let [results (conj results result)]
        (if (= src "")
          results
          (recur results src clauses))))))

(defn- absolute-url?
  "True if the path contains an absolute or scheme-relative URL."
  [path]
  (boolean (re-matches #"(https?:)?//.*" path)))

(defn route-compile
  "Compile a path string using the routes syntax into a uri-matcher struct."
  ([path]
     (route-compile path {}))
  ([path regexs]
     (let [splat   #"\*"
           word #":([^:/.0-9][^:/.]*)"
           literal #"((:[/0-9]+)|[^:*]+)"
           word-group #(keyword (nth % 1))
           word-regex #(regexs (word-group %) #"[^/,;?]+")]
       (CompiledRoute.
        (re-pattern
         (apply str
                (lex path
                     splat   "(.*)"
                     #"^//"  "https?://"
                     word    #(str "(" (.-source (word-regex %)) ")")
                     literal #(re-escape (first %1)))))
        (remove nil?
                (lex path
                     splat   :*
                     word    word-group
                     literal nil))
        (absolute-url? path)))))

(extend-type string
  Route
  (route-matches [route request]
    (route-matches (route-compile route) request)))

(defprotocol IResponse
  (-response [body request]))

(extend-protocol IResponse
  nil
  (-response [body _] nil)

  string
  (-response [body _] body)

  function
  (-response [f request]
    (-response (f request) request))

  Atom
  (-response [ref request]
    (-response (deref ref) request))

  PersistentVector
  (-response [messages request]
    (println messages)
    (when-let [input-queue (or (get-in request [:router :input])
                               (:input request))]
      (put! input-queue messages)))

  ManyToManyChannel
  (-response [c request]
    (go (-response (<! c) request)))

  MultiFn
  (-response [multifn req]
    (-response (multifn req) req))

  default
  (-response [o req]
    (cond
      (implements? ui/IComponent o) (ui/render o)
      (sequential? o) (map #(-response % req) o)
      :else o)))

(defn method-matches?
  [method request]
  (let [request-method (:method request)
        form-method    (get-in request [:form-params "_method"])]
    (if (and form-method (= request-method :post))
      (= (str/upper-case (name method))
         (str/upper-case form-method))
      (= method request-method))))

(defn if-method
  [method handler]
  (fn [request]
    (cond
      (or (nil? method) (method-matches? method request))
      (handler request)
      (= :get method)
      (handler request))))

(defn assoc-route-params
  [request params]  
  (merge-with merge request {:route-params params, :params params}))

(defn if-route
  "Evaluate the handler if the route matches the request."
  [route handler]
  (fn [request]
    (if-let [params (route-matches route request)]
      (handler (assoc-route-params request params)))))

(defn routing
  [request & handlers]
  (some #(% request) handlers))

(defn routes
  [& handlers]
  #(apply routing % handlers))

(defn make-route
  [method route handler]
  (if-method method
             (if-route route
                       (fn [request]
                         (-response (handler request) request)))))

(defn- remove-suffix [path suffix]
  (subs path 0 (- (count path) (count suffix))))

(defn- wrap-context [handler]
  (fn [request]
    (let [uri     (:uri request)
          path    (:path-info request uri)
          context (or (:context request) "")
          subpath (-> request :route-params :__path-info)]
      (handler
       (-> request
           (assoc :path-info (if (= subpath "") "/" subpath))
           (assoc :context (remove-suffix uri subpath))
           (update-in [:params] dissoc :__path-info)
           (update-in [:route-params] dissoc :__path-info))))))

(defprotocol IRouter
  (-navigate [router uri method params])
  (-on-navigation [router e]))

(defrecord Router [router routes]
  Lifecycle
  (start [router]
    (doto (.-router router)
      (.setUseFragment false)
      (.addEventListener goog.history.EventType.NAVIGATE
                         (partial -on-navigation router))
      (.setEnabled true))
    (-navigate router js/document.location.href :get nil)
    router)
  
  (stop [router]
    (doto (.-router router)
      (.setEnabled false))
    router)
  
  IRouter
  (-navigate [router uri method params]
    (let [uri (Uri. uri)
          path (str/replace (.getPath uri) #"^/" "")]
      ;; (when-not (= (.getPath (Uri. js/window.location.href)) (.getPath uri))
      ;;   (set! js/document.location.href
      ;;         (str (.setPath (Uri. js/window.location.href) path))))
      (.setToken (.-router router) path)
      (routes {:uri (.getPath uri)
               :method method
               :params (->> (str/split (str (.getQuery uri)) #"=")
                            (apply hash-map)
                            (clojure.walk/keywordize-keys))
               :router router})))

  (-on-navigation [router e]
    (when (.-isNavigation e)
      (if (not= "index" (.-token e))
        (.-token e)
        ""))))

(defn router [routes]
  (map->Router {:routes routes
                :router (Html5History.)}))

(defn navigate!
  [router uri & {:keys [method params] :as args}]
  (-navigate router uri method params))


