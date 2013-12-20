(ns foundation.test.components.dashboard
  (:require [foundation.app.ui :as ui]
            [foundation.test.templates :as t]
            [foundation.test.models :as m]
            [dommy.template :as tmpl]
            [dommy.core :as dom])
  (:require-macros [dommy.macros :refer [sel1 sel deftemplate node]]))

(def metrics
  [["Impressions" "CPM" "Impression Rate"]
   ["Engagements" "CPE" "Engagement Rate"]
   ["Clicks" "CPC" "Click Rate"]
   ["Retweets" "CPRT" "Retweet Rate"]
   ["Replies" "CPR" "Reply Rate"]
   ["Follows" "CPF" "Follow Rate"]])

(defn dashboard-metrics
  []
  (reify ui/IRender
    (-render [_]
      [:div.twitter-stats#stats-list-group
       (for [[metric cpa rate] metrics]
         [:ul.list-group
          [:li.list-group-item {:id metric}
           [:h5.metric-header.list-group-item-heading (str "0 " metric)]]
          [:li.list-group-item {:id (str metric "-cpa")}
           [:small.list-group-item-text (str "0 " cpa)]]
          [:li.list-group-item {:id (str metric "-rate")}
           [:small.list-group-item-text (str "0 " rate)]]])])
    ui/IClickable
    (-click [x e]
      (js/console.log "click!" (.-target e)))
    tmpl/PElement
    (-elem [x] (with-meta (node (ui/-render x)) {:component x}))))

(deftemplate dashboard-template
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
    (dashboard-metrics)]])

(defn dashboard
  [id state]
  (reify
    ui/IRender
    (-render [_]
      (dashboard-template id))
    ui/IWithChildren
    (-with-children [_]
      [:#stats-list-group])))
