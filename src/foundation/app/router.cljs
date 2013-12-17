(ns foundation.app.router
  (:require [clojure.string :as string]
<<<<<<< HEAD
            [goog.string :as gstring]
            [dommy.core :as dom])
  (:require-macros [foundation.app.router
                    :refer [defroutes GET POST PUT DELETE ANY context]]
                   [dommy.macros :refer [node sel sel1]]))
=======
            [goog.string :as gstring])
  (:require-macros [foundation.app.router
                    :refer [defroutes GET POST PUT DELETE]]))
>>>>>>> 0cb24c9585ce5d6066c75a233f011ce4881ecbd1

(def re-chars (reduce #(assoc %1 %2 (str \\ %2)) {} (set "\\.*+|?()[]{}$^")))

(defn- re-escape
  "Escape all special regex chars in a string."
  [s] (string/escape s re-chars))

;; Route matching

(defn path-decode
  "Decode a path segment in a URI. Defaults to using UTF-8 encoding."
  [path]
  (-> (string/replace path "+" (js/encodeURI "+"))
      (js/decodeURI)))

(defn- assoc-vec
<<<<<<< HEAD
  "Associate a key with a value. If the key already exists in the map,
=======
  "Associate a key with a value. If the key already exists in the map, 
>>>>>>> 0cb24c9585ce5d6066c75a233f011ce4881ecbd1
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

(defn response
  [body]
  {:status 200
   :headers {}
   :body body})

(defprotocol IRenderable
  (-render [_ request]))

(extend-protocol IRenderable
  nil
  (-render [_ _] nil)

  string
<<<<<<< HEAD
  (-render [body _] (node body))
=======
  (-render [body _]
    (response body))
>>>>>>> 0cb24c9585ce5d6066c75a233f011ce4881ecbd1

  function
  (-render [f request]
    (-render (f request) request))

<<<<<<< HEAD
=======
  PersistentHashMap
  (-render [response-map _]
    (merge (with-meta (response "") (meta response-map))
           response-map))
  
>>>>>>> 0cb24c9585ce5d6066c75a233f011ce4881ecbd1
  Atom
  (-render [ref request]
    (-render (deref ref) request))

  default
  (-render [coll _]
    (when (sequential? coll)
<<<<<<< HEAD
      (node coll))))

(defn method-matches?
  [method request]
  (let [request-method (:method request)
=======
      (response coll))))

(defn method-matches?
  [method request]
  (let [request-method (request :request-method)
>>>>>>> 0cb24c9585ce5d6066c75a233f011ce4881ecbd1
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
<<<<<<< HEAD
      (= :get method)
=======
      (and (= :get method) (= :head (:request-method request)))
>>>>>>> 0cb24c9585ce5d6066c75a233f011ce4881ecbd1
      (some-> (handler request)
        (assoc :body nil)))))

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
<<<<<<< HEAD
  (if-method method
             (if-route route
                       (fn [request]
                         (-render (handler request) request)))))

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

(defroutes accounts
  (GET "/accounts" [] "hallo")
  (GET "/accounts/:id" [id] id)
  (POST "/accounts/:id" [id] id)
  (PUT "/accounts/:id" [id] id)
  (DELETE "/accounts/:id" [id] id))

(defroutes campaigns
  (context "/accounts/:id" [id]
    (GET "/campaigns" [] "campaigns")
    (GET "/campaigns/:id" [id] id)))

(defroutes line-items
  (context "/accounts/:account-id/campaigns/:id" [id]
    (GET "/line_items" [] "campaigns")
    (GET "/line_items/:id" [id] id)))

(defroutes app
  (GET "/" [] "")
  accounts
  campaigns
  line-items)
=======
  (if-method
   method
   (if-route
    route
    (fn [request]
      (-render (handler request) request)))))

(defroutes app
  (GET "/accounts/:id" [id] (println id)))

>>>>>>> 0cb24c9585ce5d6066c75a233f011ce4881ecbd1
