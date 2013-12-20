(ns foundation.test.components.datagrid
  (:require [foundation.app.ui :as ui]
            [foundation.app.message :as msg]
            [foundation.test.templates :as t]
            [foundation.test.models :as m :refer [columns]]
            [foundation.test.cells :as cells]
            [dommy.template :as tmpl]
            [dommy.core :as dom]
            [cljs.core.async :refer [put!]])
  (:require-macros [dommy.macros :refer [sel1 sel deftemplate]]
                   [foundation.app.ui :refer [defcomponent]]))

(enable-console-print!)

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

(defn new-button
  [input]
  (reify ui/IRender
    (-render [_] [:button#new.btn.btn-success.btn-sm "New"])
    ui/IClickable
    (-click [_ e]
      (put! input {msg/type :create
                   msg/path [:datagrid :collection]
                   :model {}}))
    tmpl/PElement
    (-elem [x] (with-meta (tmpl/-elem (ui/-render x)) {:component x}))))

(deftemplate datagrid-template
  [input id model coll]
  [:div.datagrid-container.panel.panel-default {:id id}
   [:div.panel-heading
    (datagrid-breadcrumb)
    [:form.form-inline.pull-right
     [:div.form-group
      (datagrid-filter)]]]
   [:div.panel-body
    (datagrid-table model coll)]
   [:div.panel-footer
    [:div.form-inline
     [:div.form-group (new-button input)]
     [:div.form-group [:button#save.btn.btn-info.btn-sm.disabled "Save"]]
     [:div.form-group
      [:button#delete.btn.btn-danger.btn-sm.disabled "Delete"]]
     [:div.form-group
      [:button#dupe.btn.btn-primary.btn-sm.disabled "Duplicate"]]]]])

(defn datagrid
  [input id state]
  (reify
    ui/IRender
    (-render [_]
      (datagrid-template input id (:resource state) (:collection state)))
    ui/IWithChildren
    (-with-children [_]
      [:#new])))
