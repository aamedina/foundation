(ns foundation.test.templates
  (:require [enfocus.core :as en]
            [enfocus.events :as e]
            [dommy.core :as dom]
            [foundation.test.models :refer [columns]]
            [goog.i18n.NumberFormat :as num-format]
            [goog.i18n.currency :as currency]
            [goog.ui.InputDatePicker]
            [goog.i18n.DateTimeParse :as datetime-parse]
            [goog.i18n.DateTimeFormat :as datetime-format]
            [cljs-time.core :as time]
            [cljs-time.format :as fmt]
            [goog.date :as date])
  (:require-macros [dommy.macros :as dom :refer [deftemplate]]
                   [enfocus.macros :as en :refer [defaction]]
                   [cljs.core.match.macros :as m :refer [match]]
                   [cljs.core.async.macros :as a :refer [go go-loop]]
                   [foundation.test.macros :refer [currency-data]]))

(enable-console-print!)

(defn date-picker
  [el init-date date-pattern]
  (let [date-pattern (if (keyword? date-pattern)
                       (date-pattern fmt/formatters)
                       date-pattern)
        picker (goog.ui.InputDatePicker.
                (goog.i18n.DateTimeFormat. date-pattern)
                (goog.i18n.DateTimeParse. date-pattern))]
    (doto (.getDatePicker picker)
      (.setUseSimpleNavigationMenu true)
      (.setAllowNone true))
    (doto picker
      (.decorate el)
      (.setDate init-date))))

(deftemplate twitter-power
  [id]
  [:div {:id id}])

(def exchange-rate (currency-data))

(defn format-currency
  [n currency-code]
  (let [parser (goog.i18n.NumberFormat.
                (currency/getLocalCurrencyPattern (if currency-code
                                                    currency-code
                                                    "USD")))]
    (.format parser (if n (* n (get exchange-rate currency-code)) 0))))

(def formatters {:decimal goog.i18n.NumberFormat.Format.DECIMAL
                 :percent goog.i18n.NumberFormat.Format.PERCENT
                 :scientific goog.i18n.NumberFormat.Format.SCIENTIFIC
                 :currency goog.i18n.NumberFormat.Format.CURRENCY})

(defn format-percent
  [n]
  (let [parser (goog.i18n.NumberFormat. (:percent formatters))]
    (.format parser n)))

(defn query-string
  "Given a map of query params to values, constructs a query string for the 
   URI."
  [kvs]
  (str  (goog.Uri.QueryData/createFromKeysValues
         (clj->js (map #(clojure.string/replace % #"-" "_")
                       (map name (keys kvs))))
         (clj->js (vals kvs)))))
