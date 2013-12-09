(ns foundation.app.data.tracking-map
  (:require [clojure.set :as set]))

(defn map-difference [m1 m2]
  (let [ks1 (set (keys m1))
        ks2 (set (keys m2))
        ks1-ks2 (set/difference ks1 ks2)
        ks2-ks1 (set/difference ks2 ks1)
        ks1*ks2 (set/intersection ks1 ks2)]
    (merge (select-keys m1 ks1-ks2)
           (select-keys m2 ks2-ks1)
           (select-keys m1
                        (remove (fn [k] (= (m1 k) (m2 k)))
                                ks1*ks2)))))

(declare plain-map merge-when-tracking-map record-change -changes)

(deftype TrackingMap [basis map changes]
  java.io.Serializable
  clojure.lang.MapEquivalence
  
  clojure.lang.IPersistentMap
  (assoc [this key val]
    (TrackingMap. basis
                  (.assoc map key (plain-map val))
                  (record-change :assoc map key val changes)))
  (assocEx [this key val]
    (TrackingMap. basis
                  (.assocEx map key val)
                  (record-change :assoc map key val changes)))
  (without [this key]
    (TrackingMap. basis
                  (.without map key)
                  (record-change :dissoc map key val changes)))
  
  clojure.lang.ILookup
  (valAt [this key not-found]
    (if-let [v (.valAt map key)]
      (cond
        (instance? TrackingMap v)
        (TrackingMap. basis (.map v)
                      (update-in changes [:context] (fnil conj []) key))
        (map? v)
        (TrackingMap. basis v
                      (update-in changes [:context] (fnil conj []) key))
        :else v)
      not-found))
  (valAt [this key]
    (.valAt this key nil))

  clojure.lang.IFn
  (invoke [this arg]
    (.invoke map arg))

  java.util.Map
  (clear [this]
    (.clear map))
  (containsKey [this key]
    (.containsKey map key))
  (containsValue [this val]
    (.containsValue map val))
  (entrySet [this]
    (.entrySet map))
  (equals [this m]
    (.equals map m))
  (get [this k]
    (.get map k))
  (hashCode [this]
    (.hashCode map))
  (isEmpty [this]
    (.isEmpty map))
  (keySet [this]
    (.keySet map))
  (put [this k v]
    (.put map k v))
  (putAll [this m]
    (.putAll map m))
  (remove [this k]
    (.remove map k))
  (size [this]
    (.size map))
  (values [this]
    (.values map))

  clojure.lang.Counted
  (count [this]
    (.count map))

  java.lang.Iterable
  (iterator [this]
    (.iterator map))

  clojure.lang.Seqable
  (seq [this]
    (seq map))

  clojure.lang.IObj
  (withMeta [this meta]
    (TrackingMap. basis (.withMeta map meta) changes))

  clojure.lang.IMeta
  (meta [this]
    (.meta map))

  clojure.lang.IPersistentCollection
  (empty [this]
    (.empty map))
  (cons [this o]
    (TrackingMap. basis (.cons map o)
                  (let [{:keys [context]} changes
                        inspect-paths (mapv #(if (seq context)
                                               (conj context %) [%])
                                            (keys o))
                        cs (-> changes
                               (dissoc :context)
                               (update-in [:inspect]
                                          #(apply (fnil conj #{}) %
                                                  inspect-paths)))]
                    (merge-when-tracking-map cs o))))
  (equiv [this m]
    (.equiv map (plain-map m)))

  clojure.lang.IEditableCollection
  (asTransient [this]
    (.asTransient map))

  clojure.lang.IHashEq
  (hasheq [this]
    (.hasheq map))

  clojure.lang.IDeref
  (deref [this] map))

(defn- find-changes [changes old-map new-map path]
  (let [parent-path (butlast path)
        k (last path)
        old-m (if (seq parent-path) (get-in old-map parent-path) old-map)
        new-m (if (seq parent-path) (get-in new-map parent-path) new-map)
        o (get old-m k)
        n (get new-m k)]
    (cond
      (not (contains? old-m k))
      (update-in changes [:added] (fnil conj #{}) path)

      (not (contains? new-m k))
      (update-in changes [:removed] (fnil conj #{}) path)

      (and (not= o n) (or (not (map? o)) (not (map? n))))
      (update-in changes [:updated] (fnil conj #{}) path)

      (and (not= o n) (map? o) (map? n))
      (reduce (fn [a k]
                (find-changes a old-map new-map (conj path k)))
              changes
              (into (keys n) (keys o)))

      :else changes)))

(defn- merge-changes [c1 c2]
  (merge-with (comp set concat) c1 c2))

(defn- descendent? [path-a path-b]
  (let [[small large] (if (< (count path-a) (count path-b))
                        [path-a path-b]
                        [path-b path-a])]
    (= small (take (count small) large))))

(defn- remove-redundant-updates [updates]
  (reduce (fn [a update]
            (if (some #(descendent? % update) a)
              a
              (conj a update)))
          #{}
          (reverse (sort-by count updates))))

(defn- remove-redundant-adds [adds]
  (reduce (fn [a add]
            (if (some #(descendent? % add) a)
              a
              (conj a add)))
          #{}
          (sort-by count adds)))

(defn- remove-updates-covered-by-adds [updates adds]
  (set (remove (fn [u]
                 (some (fn [a]
                         (descendent? a u))
                       adds))
               updates)))

(defn- remove-updates-covered-by-removes [updates removes]
  (set (remove (fn [u]
                 (some (fn [r]
                         (descendent? r u))
                       removes))
               updates)))

(defn compact [old-m new-m {:keys [added updated removed inspect] :as change}]
  (let [change (reduce (fn [a change-path]
                         (find-changes a old-m new-m change-path))
                       change
                       inspect)
        change (if (:updated change)
                 (update-in change [:updated] remove-redundant-updates)
                 change)
        change (if (:added change)
                 (update-in change [:added] remove-redundant-adds)
                 change)
        change (if (:updated change)
                 (update-in change [:updated]
                            remove-updates-covered-by-adds (:added change))
                 change)
        change (if (:updated change)
                 (update-in change [:updated]
                            remove-updates-covered-by-removes
                            (:removed change))
                 change)]
    (reduce (fn [a [k v]]
              (if (empty? v)
                a
                (assoc a k v)))
            {}
            (dissoc change :inspect))))

(defn- plain-map [m]
  (if (instance? TrackingMap m) (.-map m) m))

(defn merge-when-tracking-map [change-map tracking-map]
  (merge-with (comp set concat)
              change-map
              (dissoc (when (instance? TrackingMap tracking-map)
                        (.-changes tracking-map))
                      :context)))

(defn- record-change [action map key val change-map]
  (let [{:keys [context updated] :as cs} change-map
        change (if (seq context)
                 (conj context key)
                 [key])

        cs (cond
             (= action :dissoc)
             (update-in cs [:removed] (fnil conj #{}) change)

             (and (get map key) (not= (get map key) (plain-map val)))
             (update-in cs [:updated] (fnil conj #{}) change)

             (not (get map key))
             (update-in cs [:added] (fnil conj #{}) change)

             :else cs)

        cs (cond
             (and (= action :assoc) (map? val)
                  (not (instance? TrackingMap val)))
             (update-in cs [:inspect] (fnil conj #{}) change)
             (and (= action :assoc) (nil? val))
             (update-in cs [:inspect] (fnil conj #{}) change)
             :else cs)]
    (merge-when-tracking-map cs val)))

(defn changes [v]
  (when (instance? TrackingMap v)
    (compact (.-basis v) (.-map v) (.-changes v))))

(defmethod print-method TrackingMap [tm writer]
  (pr (.-map tm)))

(defn tracking-map
  ([m] (TrackingMap. m m {})))
