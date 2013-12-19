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

(def dashboard-metrics
  [["Impressions" "CPM" "Impression Rate"]
   ["Engagements" "CPE" "Engagement Rate"]
   ["Clicks" "CPC" "Click Rate"]
   ["Retweets" "CPRT" "Retweet Rate"]
   ["Replies" "CPR" "Reply Rate"]
   ["Follows" "CPF" "Follow Rate"]])

(deftemplate dashboard-metric
  [[metric cpa rate]]
  [:ul.list-group
   [:li.list-group-item {:id metric}
    [:h5.metric-header.list-group-item-heading (str "0 " metric)]]
   [:li.list-group-item {:id (str metric "-cpa")}
    [:small.list-group-item-text (str "0 " cpa)]]
   [:li.list-group-item {:id (str metric "-rate")}
    [:small.list-group-item-text (str "0 " rate)]]])

(deftemplate dashboard
  [id]
  [:div.twitter-stats.panel.panel-default {:id id}
   [:div.panel-heading
    [:h1.panel-title {:id "resource-id"}]
    [:div.form-inline.pull-right
     [:div.form-group
      [:input#start-time.form-control.date-picker {:readonly true}]]
     [:em {:style {:color "#6F6F6F"}} "to"]
     [:div.form-group
      [:input#end-time.form-control.date-picker {:readonly true}]]
     [:button#update-stats.btn.btn-primary.btn-sm "Update"]]]
   [:div.panel-body
    [:div.analytics-highcharts]]
   [:div.panel-footer.row
    [:div.twitter-stats
     (for [metric dashboard-metrics]
       (dashboard-metric metric))]]])

(deftemplate datagrid-filter
  []
  [:div.autocomplete
   [:input.form-control {:type "text"
                         :placeholder "What are you looking for?"}]])

(deftemplate datagrid-header
  [columns]
  [:thead#datagrid-header
   [:tr (for [col columns] (cells/th col))]])

(deftemplate datagrid-row
  [model columns]
  [:tr (for [col columns] (cells/td col model))])

(deftemplate datagrid-body
  [coll columns]
  [:tbody#datagrid-body.datagrid-tbody
   (for [model coll] (datagrid-row model columns))])

(deftemplate datagrid-breadcrumb
  []
  [:ol.breadcrumb
   [:li#account.active [:div.arrow-down] [:a "Accounts"] [:div.arrow-up]]
   [:li#campaign.hidden [:a "Campaigns"]]
   [:li#line_item.hidden [:a "Line Items"]]
   [:li#promoted_tweet.hidden  [:a "Promoted Products"]]])

(deftemplate datagrid-table
  [model coll]
  (let [cols (columns model)]
    [:table#datagrid-table.table
     (datagrid-header cols)
     (datagrid-body coll cols)]))

(deftemplate datagrid
  [id]
  [:div.datagrid-container.panel.panel-default {:id id}
   [:div.panel-heading
    (datagrid-breadcrumb)
    [:form.form-inline.pull-right
     [:div.form-group
      (datagrid-filter)]]]
   [:div.panel-body]
   [:div.panel-footer
    [:div.form-inline
     [:div.form-group [:button#new.btn.btn-success.btn-sm "New"]]
     [:div.form-group [:button#save.btn.btn-info.btn-sm.disabled "Save"]]
     [:div.form-group
      [:button#delete.btn.btn-danger.btn-sm.disabled "Delete"]]
     [:div.form-group
      [:button#dupe.btn.btn-primary.btn-sm.disabled "Duplicate"]]]]])

(deftemplate twitter-power
  [id]
  [:div {:id id}])
