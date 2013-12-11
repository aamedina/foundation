(ns foundation.app.data.component
  (:require [foundation.app.data.dependency :as dep]))

(defprotocol Lifecycle
  (start [component]
    "Begins operation of this component. Synchronous, does not return
  until the component is started. Returns an updated version of this
  component.")
  (stop [component]
    "Ceases operation of this component. Synchronous, does not return
  until the component is stopped. Returns an updated version of this
  component."))

;; No-op implementation if one is not defined.
(extend-protocol Lifecycle
  default
  (start [this]
    this)
  (stop [this]
    this))

(defn dependencies
  "Returns the map of other components on which this component depends."
  [component]
  (::dependencies (meta component) {}))

(defn using
  "Associates metadata with component describing the other components
  on which it depends. Component dependencies are specified as a map.
  Keys in the map correspond to keys in this component which must be
  provided by its containing system. Values in the map are the keys in
  the system at which those components may be found. Alternatively, if
  the keys are the same in both the component and its enclosing
  system, they may be specified as a vector of keys."
  [component dependencies]
  (vary-meta
   component update-in [::dependencies] (fnil merge {})
   (cond
     (map? dependencies)
     dependencies
     (vector? dependencies)
     (into {} (map (fn [x] [x x]) dependencies))
     :else
     (throw (ex-info "Dependencies must be a map or vector"
                     {:reason ::invalid-dependencies
                      :component component
                      :dependencies dependencies})))))

(defn system-using
  "Associates dependency metadata with multiple components in the
  system. dependency-map is a map of keys in the system to maps or
  vectors specifying the dependencies of the component at that key in
  the system, as per 'using'."
  [system dependency-map]
  (reduce-kv
   (fn [system key dependencies]
     (let [component (get system key)]
       (when-not component
         (throw (ex-info "Missing component from system"
                         {:reason ::missing-component
                          :component-key key
                          :system system})))
       (assoc system key (using component dependencies))))
   system
   dependency-map))

(defn dependency-graph
  "Returns a dependency graph, using the data structures defined in
  com.stuartsierra.dependency, for the components found by
  (select-keys system component-keys)"
  [system component-keys]
  (reduce-kv (fn [graph key component]
               (reduce #(dep/depend %1 key %2)
                       graph
                       (vals (dependencies component))))
             (dep/graph)
             (select-keys system component-keys)))

(defn- assoc-dependency [system component dependency-key system-key]
  (let [dependency (get system system-key)]
    (when-not dependency
      (throw (ex-info "Missing component dependency"
                      {:reason ::missing-dependency
                       :system-key system-key
                       :dependency-key dependency-key
                       :component component
                       :system system})))
    (assoc component dependency-key dependency)))

(defn- assoc-dependencies [component system]
  (reduce-kv #(assoc-dependency system %1 %2 %3)
             component
             (dependencies component)))

(defn- try-action [component system f args]
  (try (apply f component args)
       (catch js/Error t
         (throw (ex-info "Error calling function on component"
                         {:reason ::component-function-threw-exception
                          :function f
                          :component component
                          :system system}
                         t)))))

(defn- get-component [system key]
  (or (get system key)
      (throw (ex-info "Missing component from system"
                      {:reason ::missing-component
                       :component-key key
                       :system system}))))

(defn update-system
  "Invokes (apply f component args) on each of the components at
  component-keys in the system, in dependency order. Before invoking
  f, assoc's updated dependencies of the component."
  [system component-keys f & args]
  (let [graph (dependency-graph system component-keys)]
    (reduce (fn [system key]
              (assoc system key
                     (-> (get-component system key)
                         (assoc-dependencies system)
                         (try-action system f args))))
            system
            (sort (dep/topo-comparator graph) component-keys))))

(defn update-system-reverse
  "Like update-system but operates in reverse-dependence order."
  [system component-keys f & args]
  (let [graph (dependency-graph system component-keys)]
    (reduce (fn [system key]
              (assoc system key
                     (-> (get-component system key)
                         (assoc-dependencies system)
                         (try-action system f args))))
            system
            (reverse (sort (dep/topo-comparator graph) component-keys)))))

(defn start-system
  "Recursively starts components in the system, in dependency order,
  assoc'ing in their dependencies along the way."
  [system component-keys]
  (update-system system component-keys #'start))

(defn stop-system
  "Recursively stops components in the system, in reverse dependency
  order."
  [system component-keys]
  (update-system-reverse system component-keys #'stop))

