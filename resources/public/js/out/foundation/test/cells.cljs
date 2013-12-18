(ns foundation.test.cells
  (:require [enfocus.core :as en]
            [enfocus.events :as e]
            [dommy.core :as dom]
            [cljs-time.core :as time]
            [cljs-time.format :as fmt])
  (:require-macros [dommy.macros :as dom :refer [deftemplate node]]
                   [enfocus.macros :as en :refer [defaction]]
                   [cljs.core.match.macros :as m :refer [match]]
                   [cljs.core.async.macros :as a :refer [go go-loop]]))

(deftemplate date-picker-cell
  [date-str]
  [:input.date-picker {:readonly true}
   (fmt/parse :long-date date-str)])

(defmulti th :name)
(defmulti td :content)

(defmethod th :select-all
  [column]
  (node [:th {:id (:name column)}
         [:input#select-all {:type "checkbox"}]]))

(defmethod th :default
  [column]
  (node [:th {:id (:name column)} (:name column)]))

(defmethod td :select
  [column record]
  (node [:td [:input.select {:type "checkbox"}]]))

(defmethod td :pause-button
  [column record]
  (node (if (:paused record)
          [:td
           [:button#pause-button-cell.btn.glyphicon.glyphicon-play]]
          [:td
           [:button#pause-button-cell.btn.glyphicon.glyphicon-pause]])))

(defmethod td :funding-instrument
  [column record])

(defmethod td :date-picker
  [column record])

(defmethod td :total-budget
  [column record])

(defmethod td :total-spent
  [column record])

(defmethod td :daily-budget
  [column record])

(defmethod td :daily-spent
  [column record])

(defmethod td :account-toggle
  [column record]
  [:td {:value (:id record) :id "toggle"}
   [:img.toggle {:width "40" :height "40"
                 :src (get-in record [:user :profile-image-url])}]])

(defmethod td :toggle
  [column record]
  [:td {:value (:id record) :id "toggle"}
   [:button.btn.btn-primary.btn-sm.toggle (:id record)]])

(defmethod td :targeting-toggle
  [column record])

(defmethod td :bid
  [column record])

(defmethod td :low-bid
  [column record])

(defmethod td :high-bid
  [column record])

(defmethod td :number
  [column record]
  0)

(defmethod td :currency
  [column record]
  "$0.00")

(defmethod td :default
  [column record]
  (if (:key column)
    [:td {:value (:id record)} ((:key column) record)]
    [:td {:value (:id record)} (:content column)]))
