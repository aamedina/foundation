(ns foundation.test.components.datagrid
  (:require [foundation.app.ui :as ui]
            [foundation.test.templates :as t]
            [foundation.test.models :as m :refer [columns]]
            [dommy.core :as dom])
  (:require-macros [dommy.macros :refer [sel1 sel deftemplate]]))

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

(deftemplate datagrid-template
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


(defn datagrid
  [id state]
  (reify
    ui/IRender
    (-render [_]
      (datagrid-template id))))
