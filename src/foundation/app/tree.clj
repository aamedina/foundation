(ns foundation.app.tree
  (:require [clojure.set :as set]))

(def ^:dynamic *gc-deltas* true)

(defmulti inverse first)

(defmethod inverse :node-create
  [[op path type]]
  [:node-destroy path type])

(defmethod inverse :node-destroy
  [[op path type]]
  [:node-create path type])

(defmethod inverse :value
  [[op path o n]]
  [op path n o])

(defmethod inverse :attr
  [[op path k o n]]
  [op path k n o])

(defmethod inverse :transform-enable
  [[op path transform-name msgs]]
  [:transform-disable path transform-name msgs])

(defmethod inverse :transform-disable
  [[op path transform-name msgs]]
  [:transform-enable path transform-name msgs])

(defn invert [deltas]
  (mapv inverse (reverse deltas)))

(defn real-path [path]
  (vec (interpose :children (into [:tree] path))))

(defn new-node [children]
  {:children children})

(defn node-type [x]
  (cond (map? x) :map
    (vector? x) :vector
    :else :unknown))

(defn- existing-node-has-same-type? [tree r-path type]
  (if-let [node (get-in tree r-path)]
    (= (node-type (:children node)) type)
    true))

(defn node-exists? [tree path]
  (let [r-path (real-path path)]
    (get-in tree r-path)))

(defn- parent-exists? [tree path]
  (if (= path [])
    true
    (let [r-path (real-path (vec (butlast path)))]
      (get-in tree r-path))))

(defn- apply-to-tree-dispatch [_ delta]
  (if (fn? delta)
    :function
    (first delta)))

(defmulti apply-to-tree apply-to-tree-dispatch)

(defmethod apply-to-tree :default [tree _] tree)

(declare map->deltas)

(defn- ensure-parents-exist
  [tree path]
  (if (parent-exists? tree path)
    tree
    (apply-to-tree tree [:node-create (vec (butlast path)) :map])))

(defn- ensure-node-exists
  [tree path]
  (if (node-exists? tree path)
    tree
    (apply-to-tree tree [:node-create path :map])))

(defmethod apply-to-tree :node-create [tree delta]
  (let [[_ path type] delta]
    (if (map? type)
      (reduce apply-to-tree tree (map->deltas type path))
      (let [type (or type :map)
            delta (if (= (count delta) 2) [:node-create path type] delta)
            r-path (real-path path)
            children (condp = type
                       :vector []
                       :map {})
            tree (ensure-parents-exist tree path)]
        (assert (existing-node-has-same-type? tree r-path type)
                (str "The node at "
                     path
                     " exists and is not the same type as the requested node.\n"
                     "node:\n"
                     (get-in tree r-path) "\n"
                     "delta:\n"
                     delta))
        (if (get-in tree r-path)
          tree
          (-> tree
              (assoc-in r-path (new-node children))
              (update-in [:this-tx] conj delta)))))))

(defn- remove-index-from-vector [vector index]
  (let [[begin end] (split-at index vector)]
    (into (vec begin) (rest end))))

(defn- child-keys [children]
  (condp = (node-type children)
    :map (keys children)
    :vector (reverse (range (count children)))
    :else []))

(defn- remove-children [tree path children]
  (reduce apply-to-tree tree (map (fn [k] [:node-destroy (conj path k)])
                                  (child-keys children))))
(defmethod apply-to-tree :node-destroy [tree delta]
  (let [[_ path type] delta
        r-path (real-path path)
        containing-path (butlast r-path)
        node-to-remove (get-in tree r-path)
        children (:children node-to-remove)
        type (or type (node-type children))
        delta (if (= (count delta) 2) (conj delta type) delta)]
    (assert (= (node-type children) type)
            (str "The given child node type does not match the actual type: "
                 (pr-str delta)))
    (if node-to-remove
      (let [tree (if (not (empty? children))
                   (remove-children tree path children)
                   tree)
            tree (if (:value node-to-remove)
                   (apply-to-tree tree [:value path (:value node-to-remove)
                                        nil])
                   tree)
            tree (if-let [ks (:transforms node-to-remove)]
                   (reduce apply-to-tree tree
                           (map (fn [[k v]] [:transform-disable path k]) ks))
                   tree)
            tree (if-let [ks (:attrs node-to-remove)]
                   (reduce apply-to-tree tree
                           (map (fn [[k v]] [:attr path k v nil]) ks))
                   tree)
            new-tree (if (nil? containing-path)
                       (assoc tree :tree nil)
                       (let [last-path (last r-path)
                             container (get-in tree containing-path)]
                         (if (map? container)
                           (update-in tree containing-path dissoc last-path)
                           (update-in tree containing-path
                                      remove-index-from-vector last-path))))]
        (update-in new-tree [:this-tx] conj delta))
      tree)))

(defmethod apply-to-tree :children-exit [tree delta]
  (let [[_ path] delta
        r-path (real-path path)
        c-path (conj r-path :children)
        children (get-in tree c-path)]
    (if (not (empty? children))
      (remove-children tree path children)
      tree)))

(defn same-value? [tree path v]
  (= (get-in tree path) v))

(defn update-or-remove [tree path v]
  (if (nil? v)
    (update-in tree (butlast path) dissoc (last path))
    (assoc-in tree path v)))

(defmethod apply-to-tree :value [tree delta]
  (let [[op path o n] delta
        r-path (real-path path)
        v-path (conj r-path :value)
        old-value (get-in tree v-path)
        [o n] (if (= (count delta) 4) [o n] [old-value o])
        tree (ensure-node-exists tree path)]
    (assert (= o old-value)
            (str "The old value at path " path " is " old-value
                 " but was expected to be " o "."))
    (if (= o n)
      tree
      (-> tree
          (update-or-remove v-path n)
          (update-in [:this-tx] conj [op path o n])))))

(defn remove-empty [tree path]
  (if (seq (get-in tree path))
    tree
    (update-in tree (butlast path) dissoc (last path))))

(defmethod apply-to-tree :attr [tree delta]
  (let [[op path k o n] delta
        r-path (real-path path)
        a-path (conj r-path :attrs k)
        old-value (get-in tree a-path)
        [o n] (if (= (count delta) 5) [o n] [old-value o])
        tree (ensure-node-exists tree path)]
    (assert (= o old-value)
            (str "Error:" (pr-str delta) "\n"
                 "The old attribute value for " k " is "
                 old-value
                 " but was expected to be " o "."))
    (if (= o n)
      tree
      (-> tree
          (update-or-remove a-path n)
          (remove-empty (conj r-path :attrs))
          (update-in [:this-tx] conj [op path k o n])))))

(defn- same-transform? [tree path msgs]
  (= (get-in tree path) msgs))

(defmethod apply-to-tree :transform-enable [tree delta]
  (let [[_ path k msgs] delta
        r-path (real-path path)
        e-path (conj r-path :transforms k)
        tree (ensure-node-exists tree path)]
    (assert (or (not (get-in tree e-path))
                (same-transform? tree e-path msgs))
            (str "A different transform " k
                 " at path " path " already exists."))
    (if (get-in tree e-path)
      tree
      (-> tree
          (assoc-in e-path msgs)
          (update-in [:this-tx] conj delta)))))

(defmethod apply-to-tree :transform-disable
  [tree delta]
  (let [[_ path k ] delta
        r-path (real-path path)
        transforms-path (conj r-path :transforms)
        e-path (conj transforms-path k)]
    (if (get-in tree e-path)
      (-> tree
          (update-in [:this-tx] conj (conj delta (get-in tree e-path)))
          (update-in transforms-path dissoc k)
          (remove empty? transforms-path))
      tree)))

(defn node-deltas
  [{:keys [value transforms attrs]} path]
  (cond-> []
          value (concat [[:value path value]])
          attrs (concat (vec (map (fn [[k v]] [:attr path k v]) attrs)))
          transforms (concat (vec (map (fn [[k v]]
                                         [:transform-enable path k v])
                                       transforms)))))

(defn map->deltas
  [tree path]
  (let [node-keys #{:children :transforms :value :attrs}
        node? (and (map? tree)
                   ((comp not empty?)
                    (set/intersection (set (keys tree)) node-keys)))
        children (if node? (or (:children tree) {}) tree)
        children-type (node-type children)
        node-deltas (when node?
                      (node-deltas tree path))]
    (concat [[:node-create path children-type]]
            node-deltas
            (mapcat (fn [k]
                      (map->deltas (get-in tree (if node? [:children k] [k]))
                                   (conj path k)))
                    (cond
                      (= children-type :map) (keys children)
                      (= children-type :vector) (range (count children))
                      :else [])))))

(defn expand-map
  [delta]
  (if (map? delta)
    (map->deltas delta [])
    [delta]))

(defn expand-maps
  [deltas]
  (mapcat expand-map deltas))

(defn update-tree
  [tree deltas]
  (reduce apply-to-tree tree deltas))

(defmethod apply-to-tree :function
  [tree f]
  (let [deltas (f tree)]
    (update-tree tree deltas)))

(def next-eid-atom (atom 0))

(defn next-eid [] (swap! next-eid-atom inc))

(defn transform->entities
  [transform-name msgs node-id]
  (let [transform-id (next-eid)]
    (concat [{:t/id transform-id :t/transform-name transform-name
              :t/node node-id :t/type :t/transform}]
            (map #(merge % {:t/id (next-eid) :t/transform transform-id
                            :t/type :t/message}) msgs))))

(defn transforms->entities
  [transforms node-id]
  (reduce #(concat %1 (transform->entities (first %2) (second %2) node-id))))

(defn attrs->entities
  [attrs node-id]
  (when ((comp not empty?) attrs)
    [(merge attrs {:t/id (next-eid) :t/node node-id
                   :t/type :t/attrs})]))

(defn node->entities
  [node path parent-id node-id]
  (let [{:keys [value attrs transforms]} node
        node-e (cond-> {:t/id node-id :t/path path :t/type :t/node
                        :t/segment (last path)}
                       parent-id (assoc :t/parent parent-id)
                       value (assoc :t/value value))
        attrs-es (attrs->entities attrs node-id)
        transform-es (transforms->entities transforms node-id)]
    (concat [node-e] attrs-es transform-es)))

(defn tree->entities
  [tree path parent-id]
  (let [{:keys [children]} tree
        ks (child-keys children)
        node-id (next-eid)
        node-tuples (node->entities tree path parent-id node-id)]
    (concat node-tuples
            (mapcat (fn [k] (tree->entities (get-in tree [:children k])
                                            (conj path k) node-id))
                    ks))))

(defn entity->tuples
  [ent]
  (let [id (:t/id ent)]
    (map (fn [[k v]] [id k v]) (dissoc ent :t/id))))

(defn entities->tuples
  [entities]
  (mapcat entity->tuples entities))

(defn tree->tuples
  [tree]
  (if (:tree tree)
    (entities->tuples
     (tree->entities (:tree tree) [] nil))
    []))

(defn delete-deltas
  [t deltas]
  (reduce (fn [d k]
            (if (< k t)
              (dissoc d k)
              d))
          deltas (keys deltas)))

(defn gc
  [state]
  (if *gc-deltas*
    (let [t (:t state)
          delete-t (- t 2)]
      (update-in state [:deltas] #(delete-deltas delete-t)))
    state))

(defn apply-deltas
  [old deltas]
  (let [{:keys [seq t]} old
        deltas (expand-maps deltas)
        {:keys [tree this-tx]} (update-tree old deltas)
        deltas (map (fn [d s]
                      {:delta d
                       :t t
                       :seq s})
                    this-tx
                    (iterate inc seq))]
    (-> old
        (assoc-in [:deltas t] deltas)
        (assoc-in [:this-tx] [])
        (update-in [:seq] + (count deltas))
        (assoc-in [:tree] tree)
        (update-in [:t] inc))))

(defn value
  [tree path]
  (let [r-path (real-path path)]
    (get-in tree (conj r-path :value))))

(def new-app-model
  {:deltas {}
   :this-tx []
   :tree nil
   :seq 0
   :t 0})

(defn t
  [tree]
  (:t tree))

(defn since-t
  [tree t]
  (let [ts (range t (:t tree))]
    (vec (map :delta (mapcat #(get (:deltas tree) %) ts)))))
