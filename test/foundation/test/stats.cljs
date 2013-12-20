(ns foundation.test.stats
  (:require [foundation.test.models :as models]
            [clojure.string :as str]
            [foundation.test.templates :as tmpl]))

(def metrics
  [["Impressions" "CPM" "Impression Rate"]
   ["Engagements" "CPE" "Engagement Rate"]
   ["Clicks" "CPC" "Click Rate"]
   ["Retweets" "CPRT" "Retweet Rate"]
   ["Replies" "CPR" "Reply Rate"]
   ["Follows" "CPF" "Follow Rate"]])

(defn round [n places]
  (let [p (Math/pow 10 places)]
    (/ (Math/round (* p n)) p)))

(defn total-stats
  [stats]
  (->> (map (models/metrics :default) (map first metrics))
       (map (fn [ms]
              (->> (map #(str/replace % #"_" "-") ms)
                   (map keyword)
                   (map stats)
                   (reduce into)
                   (reduce +))))
       (zipmap (map first metrics))))

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
       (map js-number)
       (map #(tmpl/format-currency % "USD"))
       (zipmap (keys stats))))

(defn rate-stats
  [stats]
  (->> (map / (repeat (get stats "Impressions")) (vals stats))
       (#(map round % (repeat 2)))
       (map js-number)
       (map #(tmpl/format-percent %))
       (zipmap (keys stats))))