(ns foundation.app.router
  (:require [clojure.tools.macro :refer [name-with-attributes]]
            [clojure.string :as str]
            [ring.util.response :refer [response content-type]]
            [riddley.walk :refer [macroexpand-all]]))

(defn prepare-route
  [route]
  (cond
    (string? route) `(route-compile ~route)
    (vector? route) `(route-compile (first ~route)
                                    (apply hash-map (rest ~route)))
    :else `(if (string? ~route)
             (route-compile ~route)
             ~route)))

(defn- assoc-&-binding [binds req sym]
  (assoc binds sym `(dissoc (:params ~req)
                            ~@(map keyword (keys binds))
                            ~@(map str (keys binds)))))

(defn- assoc-symbol-binding [binds req sym]
  (assoc binds sym `(get-in ~req [:params ~(keyword sym)]
                            (get-in ~req [:params ~(str sym)]))))

(defn vector-bindings
  [args req]
  (loop [args args, binds {}]
    (if-let [sym (first args)]
      (cond
        (= '& sym)
        (recur (nnext args) (assoc-&-binding binds req (second args)))
        (= :as sym)
        (recur (nnext args) (assoc binds (second args) req))
        (symbol? sym)
        (recur (next args) (assoc-symbol-binding binds req sym))
        :else
        (throw (Exception. (str "Unexpected binding: " sym))))
      (mapcat identity binds))))

(defmacro let-request
  [[bindings request] & body]
  (if (vector? bindings)
    `(let [~@(vector-bindings bindings request)] ~@body)
    `(let [~bindings ~request] ~@body)))

(defn compile-route
  [method route bindings body]
  `(make-route ~method ~(prepare-route route)
               (fn [request#] (let-request [~bindings request#] ~@body))))

(defmacro defroutes
  [name & routes]
  (let [[name routes] (name-with-attributes name routes)]
    `(def ~name (routes ~@routes))))

(defmacro GET
  [path args & body]
  (compile-route :get path args body))

(defmacro POST
  [path args & body]
  (compile-route :post path args body))

(defmacro PUT
  [path args & body]
  (compile-route :put path args body))

(defmacro DELETE
  [path args & body]
  (compile-route :delete path args body))

(defmacro OPTIONS "Generate an OPTIONS route."
  [path args & body]
  (compile-route :options path args body))

(defmacro PATCH "Generate a PATCH route."
  [path args & body]
  (compile-route :patch path args body))

(defmacro ANY "Generate a route that matches any method."
  [path args & body]
  (compile-route nil path args body))

(defn- context-route [route]
  (let [re-context {:__path-info #"/.*"}]
    (cond
      (string? route)
      `(route-compile ~(str route ":__path-info") ~re-context)
      (vector? route)
      `(route-compile*
        ~(str (first route) ":__path-info")
        ~(merge (apply hash-map (rest route)) re-context))
      :else
      `(route-compile* (str ~route ":__path-info") ~re-context))))

(defmacro context
  "Give all routes in the form a common path prefix and set of bindings.

  The following example demonstrates defining two routes with a common
  path prefix ('/user/:id') and a common binding ('id'):

    (context \"/user/:id\" [id]
      (GET \"/profile\" [] ...)
      (GET \"/settings\" [] ...))"
  [path args & routes]
  `(if-route ~(context-route path)
             (wrap-context
              (fn [request#]
                (let-request [~args request#]
                             (routing request# ~@routes))))))

(defmacro let-routes
  "Takes a vector of bindings and a body of routes. Equivalent to:
  (let [...] (routes ...))"
  [bindings & body]
  `(let ~bindings (routes ~@body)))
