(ns foundation.behavior
  (:require [clojure.browser.repl]
            [clojure.set :as set]
            [clojure.string :as str]
            [clojure.zip :as zip]
            [cljs.core.match :as m]
            [cljs.core.async :refer [chan <! >! <! put! take! timeout alts!]]
            [foundation.app :as app :refer [transform derives route-effect]]
            [foundation.templates :as tmpl]
            [foundation.models :as models]
            [foundation.app.message :as msg]
            [foundation.app.xhr :as xhr]
            [foundation.app.util :as util]
            [enfocus.core :as en]
            [enfocus.events :as events]
            [dommy.core :as dom])
  (:require-macros [cljs.core.match.macros :as m :refer [match]]
                   [cljs.core.async.macros :as a :refer [go go-loop]]
                   [enfocus.macros :as en :refer [defaction]]
                   [dommy.macros :as dom :refer [sel1]]))

(enable-console-print!)

(defmethod transform [:init [:**]] [state message] {})

(defmethod transform [:load [:dashboard]]
  [state message]
  (binding [foundation.models/*account* (:account message)]
    {:model (:model message)
     :account (:account message)
     :stats-model (:stats-model message)
     :start-time (models/start-time (:model message))
     :metrics (:metrics message)
     :granularity (:granularity message)
     :end-time (models/end-time (:model message))}))

(defmethod transform [:load [:datagrid]]
  [state message]
  {:collection (:collection message) :selected #{}
   :resource (:resource message)
   :account (:account message)})

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
                         (map (fn [n]
                                (if (or (js/isNaN n) (= n js/Infinity))
                                  0
                                  (round n 2))))
                         (vec)))
             :rate (->> (map / (first impressions) (apply map + %))
                        (map (fn [n]
                               (if (or (js/isNaN n) (= n js/Infinity))
                                 0
                                 (round n 2))))
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

(defmethod transform [:stats [:chart]]
  [state message]
  (cond
    (:stats message) (assoc state :stats (:stats message))
    (:metric message) (assoc state
                        :stat (graph-stats (:stats state)
                                           (:metric message)
                                           (:metric-type message)))
    :else state))

(defmethod transform [:stats [:dashboard]]
  [state message]
  (let [total-stats (total-stats (:stats message))
        rate-stats (rate-stats total-stats)
        billed-stats (-> (:estimated-charge-local-micro (:stats message))
                         (first))]
    (assoc state
      :stats {:rate rate-stats
              :cpa (cpa-stats total-stats billed-stats)
              :total total-stats})))

(defmethod derives [#{[:dashboard] [:datagrid]} [:chart] :vals]
  [state message input]
  (select-keys (reduce merge input) [:start-time :end-time]))

(defmethod transform [:add [:**]]
  [state message]
  state)

(defmethod transform [:update [:**]]
  [state message]
  state)

(defmethod transform [:remove [:**]]
  [state message]
  state)

;; (defmethod derives [#{[:datagrid]} [:datagrid :collection] :single-val]
;;   [state message input]
;;   (:collection input))

