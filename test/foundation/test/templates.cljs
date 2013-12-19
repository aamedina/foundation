(ns foundation.test.templates
  (:require [enfocus.core :as en]
            [enfocus.events :as e]
            [dommy.core :as dom]
            [foundation.test.cells :as cells]
            [foundation.test.models :refer [columns]]
            [goog.ui.InputDatePicker]
            [goog.i18n.DateTimeParse :as datetime-parse]
            [goog.i18n.DateTimeFormat :as datetime-format]
            [cljs-time.core :as time]
            [cljs-time.format :as fmt]
            [goog.date :as date])
  (:require-macros [dommy.macros :as dom :refer [deftemplate]]
                   [enfocus.macros :as en :refer [defaction]]
                   [cljs.core.match.macros :as m :refer [match]]
                   [cljs.core.async.macros :as a :refer [go go-loop]]))

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
