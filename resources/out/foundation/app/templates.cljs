(ns foundation.app.templates
  (:require [enfocus.core :as en]
            [enfocus.events :as e]
            [dommy.core :as dom]
            [foundation.app.cells :as cells])
  (:require-macros [dommy.macros :as dom :refer [deftemplate]]
                   [enfocus.macros :as en :refer [defaction]]
                   [cljs.core.match.macros :as m :refer [match]]
                   [cljs.core.async.macros :as a :refer [go go-loop]]))

(def dashboard-metrics
  ["Impressions" "Engagements" "Clicks" "Retweets" "Replies" "Follows"])

(deftemplate chart
  []
  [:div.analytics-highcharts])

(deftemplate dashboard-metric
  [metric]
  [:ul.list-group
   [:li.list-group-item {:id metric}
    [:h5.metric-header.list-group-item-heading (str "0 " metric)]]
   [:li.list-group-item {:id (str metric "-cpa")}
    [:small.list-group-item-text 0]]
   [:li.list-group-item {:id (str metric "-rate")}
    [:small.list-group-item-text 0]]])

(deftemplate dashboard
  [{:keys [id]}]
  [:div.twitter-stats.panel.panel-default {:id id}
   [:div.panel-heading
    [:h1.panel-title#resource-id]
    [:div.form-inline.pull-right
     [:div.form-group
      [:input#start-time.form-control.date-picker {:readonly true}]]
     [:em {:style {:color "#6F6F6F"}} "to"]
     [:div.form-group
      [:input#end-time.form-control.date-picker {:readonly true}]]
     [:button#update-stats.btn.btn-primary.btn-sm "Update"]]]
   [:div.panel-body (chart)]
   [:div.panel-footer.row
    [:div.twitter-stats
     (for [metric dashboard-metrics]
       (dashboard-metric metric))]]])

(deftemplate datagrid-filter
  [coll]
  [:div.autocomplete
   [:input.form-control {:type "text"
                         :placeholder "What are you looking for?"}]])

(deftemplate datagrid-header
  [columns]
  [:thead#datagrid-header
   [:tr (for [col columns]
          (cells/th col))]])

(deftemplate datagrid-row
  [model columns]
  [:tr (for [col columns]
         (cells/td col model))])

(deftemplate datagrid-body
  [coll columns]
  [:tbody#datagrid-body.datagrid-tbody
   (for [model (vals coll)]
     (datagrid-row model columns))])

(deftemplate datagrid-breadcrumb
  [coll]
  [:ol.breadcrumb
   [:li#account.active [:div.arrow-down] [:a "Accounts"] [:div.arrow-up]]
   [:li#campaign.hidden [:a "Campaigns"]]
   [:li#line_item.hidden [:a "Line Items"]]
   [:li#promoted_tweet.hidden  [:a "Promoted Products"]]])

(deftemplate datagrid-table
  [{:keys [resource collection]}]
  (let [{:keys [columns]} resource]
    [:table#datagrid-table.table
     (datagrid-header columns)
     (datagrid-body collection columns)]))

(deftemplate datagrid
  [{:keys [id collection]}]
  [:div.datagrid-container.panel.panel-default {:id id}
   [:div.panel-heading
    (datagrid-breadcrumb collection)
    [:form.form-inline.pull-right
     [:div.form-group
      (datagrid-filter collection)]]]
   [:div.panel-body
    (datagrid-table {:collection collection})]
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
