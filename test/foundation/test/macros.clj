(ns foundation.test.macros
  (:require [clojure.xml :as xml]))

(defmacro currency-data
  []
  (let [rates
        (->> (xml/parse
              "http://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml")
             :content
             (filter #(= (:tag %) :Cube))
             first
             :content
             first
             :content
             (map :attrs)
             (reduce (fn [rates {:keys [currency rate]}]
                       (assoc rates currency (read-string rate)))
                     {}))
        rates (reduce (fn [currency-rates [currency rate]]
                        (assoc currency-rates currency (/ rate (get rates "USD"))))
                      {} rates)]
    `(do (cljs.reader/read-string ~(str rates)))))
