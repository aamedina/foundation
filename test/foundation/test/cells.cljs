(ns foundation.test.cells
  (:require [enfocus.core :as en]
            [enfocus.events :as e]
            [dommy.core :as dom]
            [cljs-time.core :as time]
            [cljs-time.format :as fmt]
            [goog.date :as date]
            [foundation.test.templates
             :refer [format-currency format-percent]])
  (:require-macros [dommy.macros :as dom :refer [deftemplate node]]
                   [enfocus.macros :as en :refer [defaction]]
                   [cljs.core.match.macros :as m :refer [match]]
                   [cljs.core.async.macros :as a :refer [go go-loop]]))

(deftemplate date-picker-cell
  [date-str]
  [:input.date-picker {:readonly true}
   (fmt/parse :long-date date-str)])

(deftemplate budget-spent-cell
  [budget spent currency-code]
  [:p#spent {:style {:padding "0" :margin "0" :width "133px"}}
   (format-currency spent currency-code)]
  [:div.progress
   {:style {:height "5px" :margin "0" :padding "0"}}
   [:div.progress-bar.progress-bar-success
    {:style {:width (format-percent (/ spent budget))}}]]
  [:small.text-muted
   [:span#budget-remaining
    (str (format-currency (- budget spent) currency-code) " remaining")]])

(defmulti th :name)
(defmulti td :content)

(defmethod th :select-all
  [column]
  (node [:th {:id (:name column)}
         [:input#select-all {:type "checkbox"}]]))

(defmethod th :default
  [column]
  [:th {:id (:name column)} (:name column)])

(defmethod td :select
  [column record]
  [:td [:input.select {:type "checkbox"}]])

(defmethod td :pause-button
  [column record]
  (if (:paused record)
    [:td
     [:button#pause-button-cell.btn.glyphicon.glyphicon-play]]
    [:td
     [:button#pause-button-cell.btn.glyphicon.glyphicon-pause]]))

(defmethod td :funding-instrument
  [column record]
  [:td (:funding-instrument-id record)])

(defmethod td :date-picker
  [column record]
  (date-picker-cell ((:key column) record)))

(defmethod td :total-budget
  [column record]
  [:td "$0.00"])

(defmethod td :total-spent
  [column record]
  [:td "$0.00"])

(defmethod td :daily-budget
  [column record]
  [:td "$0.00"])

(defmethod td :daily-spent
  [column record]
  [:td "$0.00"])

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

(defmethod td :total-budget-spent
  [column record])

(defmethod td :daily-budget-spent
  [column record])

(defmethod td :tweet
  [column record]
 )

(deftemplate choice
  [content]
  [:li.choice
   [:button.close "x"]
   [:span content]])

(deftemplate targeting-option-body
  [content])

(defn brand-options
  []
  [:span.targeting-options-body
   [:h4.panel-title
    [:span "TV"]
    [:span "targeting:"]]
   [:h5 "Target people who have been exposed to your ads on TV."]])

(defn brand-control
  []
  [:span
   [:label.checkbox-inline
    [:input#tv-enabled {:type "checkbox" :value "enabled"}] "Enabled"]])

(defn keyword-options
  []
  [:span.targeting-options-body
   [:h4.panel-title
    [:span "Keyword"]
    [:span "targeting:"]]
   [:h5 "Enter the keywords or phrases you want to target."]
   [:ul.chosen
    (choice "Sports/Skateboarding")]])

(defn keyword-autocomplete
  []
  (mvc.twitter.ui.autocomplete/autocomplete
   ""
   (fn [{:keys [targeting-value
                name
                targeting-type]}]
     name)))

(defn interest-options
  []
  [:span.targeting-options-body
   [:h4.panel-title
    [:span "Interest"]
    [:span "targeting:"]]
   [:h5 "Add interest categories to target a broad audience."]
   [:ul.chosen
    (choice "Sports/Skateboarding")]])

(defn interest-autocomplete
  []
  (mvc.twitter.ui.autocomplete/autocomplete
   (str ads-api (:url interest))
   (fn [{:keys [targeting-value
                name
                targeting-type]}]
     name)))

(defn username-options
  []
  [:span.targeting-options-body
   [:h4.panel-title
    [:span "Username"]
    [:span "targeting:"]]
   [:h5 "Add @usernames to target people similar to that user's followers."]
   [:label.checkbox-inline
    [:input {:type "checkbox" :value "followers"}]
    "Include followers of your account."]
   [:label.checkbox-inline
    [:input {:type "checkbox" :value "similar"}]
    "Include users like followers of your account."]])

(defn username-control
  []
  (mvc.twitter.ui.autocomplete/autocomplete
   (str ads-api (:url location))
   (fn [{:keys [targeting-value
                name
                targeting-type]}]
     name)))

(defn location-options
  []
  [:span.targeting-options-body
   [:h4.panel-title
    [:span "Location"]
    [:span "targeting:"]]
   [:h5 "Choose all of the locations you want to reach."]
   [:ul.chosen
    (choice "United States")]])

(defn location-autocomplete
  []
  (mvc.twitter.ui.autocomplete/autocomplete
   (str ads-api (:url location))
   (fn [{:keys [targeting-value
                name
                targeting-type]}]
     name)))

(defn gender-options
  []
  [:span.targeting-options-body
   [:h4.panel-title
    [:span "Gender"]
    [:span "targeting:"]]
   [:h5 "Limit Targeting By Gender"]
   [:ul.chosen
    (choice "Men")]])

(defn gender-control
  []
  [:span
   [:label.checkbox-inline
    [:input#tv-enabled {:type "checkbox" :value "female"}] "Women"]
   [:label.checkbox-inline
    [:input#tv-enabled {:type "checkbox" :value "male"}] "Men"]])

(defn device-options
  []
  [:span.targeting-options-body
   [:h4.panel-title
    [:span "Device"]
    [:span "targeting:"]]
   [:h5 "Select which devices and platforms you wish to target."]
   [:ul.chosen
    (choice "iOS")
    (choice "Android")]])

(defn device-control
  []
  (mvc.twitter.ui.autocomplete/autocomplete
   (str ads-api (:url location))
   (fn [{:keys [targeting-value
                name
                targeting-type]}]
     name)))

(def targeting-options
  (array-map
   :tv {:name "TV Targeting"
        :content brand-options
        :control brand-control}
   :keywords {:name "Keywords"
              :content keyword-options
              :control keyword-autocomplete}
   :interests {:name "Interests"
               :content interest-options
               :control interest-autocomplete}
   :usernames {:name "Usernames"
               :content username-options
               :control username-control}
   :locations {:name "Locations"
               :content location-options
               :control location-autocomplete}
   :gender {:name "Gender"
            :content gender-options
            :control gender-control}
   :devices {:name "Devices"
             :content device-options
             :control device-control}))
