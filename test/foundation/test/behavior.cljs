(ns foundation.test.behavior
  (:require [foundation.app :as app :refer [transform derives]]))

(defmethod transform [:init [:datagrid]]
  [state message]
  {:resource (:resource message)})

(defmethod transform [:init [:dashboard]]
  [state message]
  {:model (:model message)
   :stats (:stats message)})

(defmethod transform [:load [:datagrid :collection]]
  [state message]
  (:collection message))

(defmethod transform [:create [:datagrid :collection]]
  [state message]
  (into [((fnil identity {}) (:model message))] state))

(defmethod transform [:save [:datagrid :collection]]
  [state message]
  (into (conj (subvec state 0 (:nth message)) (:model message))
        (subvec state (inc (:nth message)) (count state))))

(defmethod transform [:delete [:datagrid :collection]]
  [state message]
  (into (subvec state 0 (:nth message))
        (subvec state (inc (:nth message)) (count state))))

(defn round [n places]
  (let [p (Math/pow 10 places)]
    (/ (Math/round (* p n)) p)))

(defn total-stats
  [stats]
  (->> (map (models/metrics :default) (map first tmpl/dashboard-metrics))
       (map (fn [ms]
              (->> (map #(str/replace % #"_" "-") ms)
                   (map keyword)
                   (map stats)
                   (reduce into)
                   (reduce +))))
       (zipmap (map first tmpl/dashboard-metrics))))

(defn js-number
  [n]
  (if (or (js/isNaN n) (= n js/Infinity))
    0
    (round n 2)))

(defn graph-stats
  [stats metric metric-type]
  (let [impressions (->> (get (models/metrics :default) "Impressions")
                         (map #(str/replace % #"_" "-"))
                         (map keyword)
                         (map stats))]
    (->> (get (models/metrics :default) metric)
         (map #(str/replace % #"_" "-"))
         (map keyword)
         (map stats)
         (#(case metric-type
             :total (apply map + %)
             :cpa (let [billed (map / (:estimated-charge-local-micro stats)
                                    (repeat 1e6))]
                    (->> (map / billed (apply map + %))
                         (map js-number)
                         (vec)))
             :rate (->> (map / (first impressions) (apply map + %))
                        (map js-number)
                        (vec))
             (apply map + %)))
         (vec))))

(defn cpa-stats
  [stats billed]
  (->> (map / (repeat (/ billed 1e6)) (vals stats))
       (#(map round % (repeat 2)))
       (zipmap (keys stats))))

(defn rate-stats
  [stats]
  (->> (map / (repeat (get stats "Impressions")) (vals stats))
       (#(map round % (repeat 2)))
       (zipmap (keys stats))))

(defmethod derives [#{[:datagrid] [:dashboard]} [:chart] :default]
  [state message input]
  (let [dashboard (get input [:dashboard])
        datagrid (get input [:datagrid])]
    {:resource (:resource datagrid)
     :model (:model dashboard)
     :stats (:stats dashboard)
     :start-time (:start-time (:stats dashboard))
     :end-time (:end-time (:stats dashboard))}))
