(ns foundation.test.components.dashboard
  (:require [foundation.app.ui :as ui]
            [foundation.test.templates :as t]
            [foundation.test.models :as m]
            [foundation.test.stats :as s]
            [foundation.app.render :as r]
            [dommy.template :as tmpl]
            [clojure.string :as str]
            [dommy.core :as dom]
            [enfocus.core :as en])
  (:require-macros [dommy.macros :refer [sel1 sel deftemplate node]]
                   [enfocus.macros :as en]))

(def metrics
  [["Impressions" "CPM" "Impression Rate"]
   ["Engagements" "CPE" "Engagement Rate"]
   ["Clicks" "CPC" "Click Rate"]
   ["Retweets" "CPRT" "Retweet Rate"]
   ["Replies" "CPR" "Reply Rate"]
   ["Follows" "CPF" "Follow Rate"]])

(defn dashboard-metrics
  [renderer new]
  (reify ui/IRender
    (-render [_]
      (let [total (s/total-stats (:total-stats new))
            billed (-> (:estimated-charge-local-micro (:stats new))
                       (first))
            cpas (s/cpa-stats total billed)
            rates (s/rate-stats total)]
        
        [:div.twitter-stats#stats-list-group
         (for [[metric cpa rate] metrics]
           [:ul.list-group
            [:li.list-group-item {:id metric}
             [:h5.metric-header.list-group-item-heading
              (str (get total metric) " " metric)]]
            [:li.list-group-item {:id (str metric "-cpa")}
             [:small.list-group-item-text
              (str (get cpas metric) " " cpa)]]
            [:li.list-group-item {:id (str metric "-rate")}
             [:small.list-group-item-text
              (str (get rates metric) " " rate)]]])]))
    ui/IClickable
    (-click [x e]
      (let [id (apply str (or (seq (-> e .-target .-id))
                              (seq (-> e .-target .-parentNode .-id))))
            el (sel1 (str "#" id))
            prev (sel1 (sel1 :div.twitter-stats#stats-list-group)
                       :li.list-group-item.active)
            stats (:stats new)
            [metric metric-type] (str/split id "-")
            t (s/graph-stats stats metric (keyword metric-type))
            total-stats (:total-stats new)]
        (when-not (dom/has-class? el :active)
          (dom/add-class! el :active)
          (some-> prev (dom/remove-class! :active))
          (let [chart (r/-get-data renderer [:chart])
                start-picker (r/-get-data renderer [:start-time-picker])
                start-time (.getTime (.getDate start-picker))]
            (doseq [series (.-series chart)]
              (.remove series))
            (.addSeries chart (clj->js {:data t
                                        :pointInterval (* 3600 1000)
                                        :pointStart start-time}))))))
    tmpl/PElement
    (-elem [x] (with-meta (node (ui/-render x)) {:component x}))))

(deftemplate dashboard-template
  [renderer state id]
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
    (dashboard-metrics renderer state)]])

(defn dashboard
  [renderer id state]
  (reify
    ui/IRender
    (-render [_]
      (dashboard-template renderer state id))
    ui/IWithChildren
    (-with-children [_]
      [:#stats-list-group])))
