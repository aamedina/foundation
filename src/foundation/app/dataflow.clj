(ns foundation.app.dataflow
  (:require [clojure.set :as set]))

(defn matching-path?
  [path1 path2]
  (= (loop [a (vec (flatten path1))
            b (vec (flatten path2))]
       (match [(first a) (first b)]
         [[] []] :succeed
         [nil nil] :succeed
         [:** _] (if-not (seq (rest a)) :succeed :fail)
         [_ :**] (if-not (seq (rest b)) :succeed :fail)
         [:* _] (recur (vec (rest a)) (vec (rest b)))
         [_ :*] (recur (vec (rest a)) (vec (rest b)))
         :else (if (= (first a) (first b))
                 (recur (vec (rest a)) (vec (rest b)))
                 :fail)))
     :succeed))

(defn matching-path-element?
  "Return true if the two elements match."
  [a b]
  (or (= a b) (= a :*) (= b :*)))

;; (defn matching-path?
;;   "Return true if the two paths match."
;;   [path-a path-b]
;;   (and (= (count path-a) (count path-b))
;;        (every? true? (map (fn [a b] (matching-path-element? a b)) path-a path-b))))

(defn descendant?
  "Return true if one path could be the parent of the other."
  [path-a path-b]
  (let [[small large] (if (< (count path-a) (count path-b))
                        [path-a path-b]
                        [path-b path-a])]
    (matching-path? small (take (count small) large))))

(defn get-path
  "Returns a sequence of [path value] tuples"
  ([data path]
     (get-path data [] path))
  ([data context [x & xs]]
     (if (and x (not= data ::nokey))
       (if (= x :*)
         (mapcat #(get-path (get data %) (conj context %) xs) (keys data))
         (get-path (get data x ::nokey) (conj context x) xs))
       [[context data]])))

(letfn [(rekey [k path arg-names]
          (if arg-names
            (let [new-key (get arg-names path)]
              (if (keyword? new-key)
                new-key
                (new-key k)))
            k))
        (value-types [arg-names]
          (if arg-names
            (reduce (fn [a [k v]]
                      (cond (contains? (set k) :*)
                        (assoc a v :seq)
                        (contains? a v)
                        (assoc a v :seq)
                        (nil? (get a v))
                        (assoc a v :single)
                        :else a))
                    {}
                    arg-names)
            (constantly :single)))]
  (defn input-map
    ([inputs]
       (input-map inputs nil))
    ([{:keys [new-model input-paths]} arg-names]
       (let [v-type (value-types arg-names)]
         (reduce (fn [a [k v]]
                   (if (= (v-type k) :seq)
                     (update-in a [k] (fnil conj []) v)
                     (assoc a k v)))
                 {}
                 (for [path input-paths
                       [k v] (get-path new-model path)
                       :when (not= v ::nokey)]
                   [(rekey k path arg-names) v]))))))

(defn input-vals [inputs]
  (vals (input-map inputs)))

(defn single-val [inputs]
  (let [m (input-map inputs)]
    (assert (>= 1 (count m)) "input is expected to have 0 or 1 values")
    (first (vals m))))

(defn change-map [inputs model-key change-key]
  (let [[model change-paths] ((juxt model-key change-key) inputs)]
    (into {} (for [path change-paths
                   [k v] (get-path model path)
                   :when (not= v ::nokey)]
               [k v]))))

(defn updated-map [inputs]
  (change-map inputs :new-model :updated))

(defn added-map [inputs]
  (change-map inputs :new-model :added))

(defn removed-map [inputs]
  (change-map inputs :old-model :removed))

(defn changed-inputs [inputs f]
  (let [input-m (input-map inputs)
        changed (keys (f inputs))]
    (reduce (fn [a [k v]]
              (if (some #(descendant? k %) changed)
                (assoc a k v)
                a))
            {}
            input-m)))

(defn added-inputs [inputs]
  (changed-inputs inputs added-map))

(defn updated-inputs [inputs]
  (changed-inputs inputs updated-map))

(defn old-and-new [inputs path]
  {:old (get-in inputs (into [:old-model] path))
   :new (get-in inputs (into [:new-model] path))})

(letfn [(actual-input-paths [{:keys [old-model input-paths]}]
          (for [path input-paths
                [k v] (get-path old-model path)]
            k))
        (removed [input-paths changed-paths f]
          (reduce (fn [acc path]
                    (reduce (fn [a cp] (f a path cp))
                            acc
                            (filter #(descendant? path %) changed-paths)))
                  {}
                  input-paths))]
  (defn removed-inputs [inputs]
    (let [paths (actual-input-paths inputs)]
      (into
       ;; process changes reported as a remove
       (removed paths (keys (removed-map inputs))
                (fn [m path changed-path]
                  (if (<= (count changed-path) (count path))
                    (assoc m path ::removed)
                    (assoc m path (get-in inputs (concat [:new-model] path))))))
       ;; process changes reported as an update
       (removed paths (keys (updated-map inputs))
                (fn [m path changed-path]
                  (if (< (count changed-path) (count path))
                    (let [new-m (:new-model inputs)
                          parent (butlast path)
                          k (last path)
                          parent-m (if (seq parent) (get-in new-m parent) new-m)]
                      (if (contains? parent-m k)
                        (assoc m path (get-in inputs (concat [:new-model] path)))
                        (assoc m path ::removed)))
                    m)))))))
