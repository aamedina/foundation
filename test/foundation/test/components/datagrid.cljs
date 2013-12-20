(ns foundation.test.components.datagrid
  (:require [foundation.app.ui :as ui]
            [foundation.app.message :as msg]
            [foundation.test.templates :as t]
            [foundation.test.models :as m :refer [columns]]
            [foundation.test.cells :as cells]
            [dommy.template :as tmpl]
            [dommy.core :as dom]
            [goog.style :as style]
            [cljs.core.async :refer [put!]])
  (:require-macros [dommy.macros :refer [sel1 sel deftemplate node]]
                   [foundation.app.ui :refer [defcomponent]]))

(enable-console-print!)

(declare set-datagrid-height! fix-column-widths!)

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

(defn datagrid-body
  [coll columns]
  (reify ui/IRender
    (-render [_]
      [:tbody#datagrid-body.datagrid-tbody
       (for [model coll] (datagrid-row model columns))])
    tmpl/PElement
    (-elem [x] (with-meta (tmpl/node (ui/-render x)) {:component x}))))

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

(defn save-button
  [input]
  (reify ui/IRender
    (-render [_] [:button#save.btn.btn-info.btn-sm.disabled "Save"])
    ui/IClickable
    (-click [_ e]
      (put! input {msg/type :update
                   msg/path [:datagrid :collection]
                   :model {}}))
    tmpl/PElement
    (-elem [x] (with-meta (tmpl/-elem (ui/-render x)) {:component x}))))

(defn delete-button
  [input]
  (reify ui/IRender
    (-render [_] [:button#delete.btn.btn-danger.btn-sm.disabled "Delete"])
    ui/IClickable
    (-click [_ e]
      (put! input {msg/type :delete
                   msg/path [:datagrid :collection]
                   :model {}}))
    tmpl/PElement
    (-elem [x] (with-meta (tmpl/-elem (ui/-render x)) {:component x}))))

(defn dupe-button
  [input]
  (reify ui/IRender
    (-render [_] [:button#dupe.btn.btn-primary.btn-sm.disabled "Duplicate"])
    ui/IClickable
    (-click [_ e]
      (put! input {msg/type :dupe
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
     [:div.form-group (save-button input)]
     [:div.form-group
      (delete-button input)]
     [:div.form-group
      (dupe-button input)]]]])

(extend-type js/HTMLCollection
  ISeq
  (-first [x] (aget x 0))
  (-rest [x] (for [i (range (alength x))] (aget x i)))
  ISeqable
  (-seq [x] (cons (first x) (rest x))))

(defn th-widths
  [ths widths]
  (reduce (fn [ws [width th]]
            (let [th-width (.-width (style/getBounds th))]
              (if (> width th-width)
                (conj ws width)
                (conj ws th-width))))
          [] (map vector widths ths)))

(defn td-widths
  [rows]
  (reduce (fn [ws td]
            (conj ws (.-width (style/getBounds td))))
          [] (.-cells (first rows))))

(defn full-td-widths
  [th-widths ths row-width table-width]
  (reduce (fn [ws [width th]]
            (let [th-width (.-width (style/getBounds th))
                  new-width (* table-width (/ width row-width))]
              (if (> new-width width)
                (do (style/setWidth th new-width) (conj ws new-width))
                (do (style/setWidth th width) (conj ws width)))))
          [] (map vector th-widths ths)))

(defn fix-column-widths!
  []
  (let [[panel-body tbody thead]
        (vec (map #(sel1 %) [:.panel-body :tbody :thead]))
        table-width (.-width (style/getBounds tbody))
        rows (.-rows tbody)
        ths (.-cells (first (.-rows thead)))
        td-widths (td-widths rows)
        th-widths (th-widths ths td-widths)
        row-width (reduce + th-widths)
        th-widths (full-td-widths th-widths ths row-width table-width)]
    (if (> row-width table-width)
      (style/setWidth (-> thead .-rows first) row-width)
      (style/setWidth (-> thead .-rows first) table-width))
    (doseq [tr rows]
      (doseq [[width td] (map vector th-widths (.-cells tr))]
        (style/setWidth td width)))))

(defn set-datagrid-height!
  []
  (let [content (sel1 :div.twitter-stats.panel.panel-default)
        header-height 126
        footer-height 81
        max-height (- (.-clientHeight js/document.body)
                      (+ (.-height (style/getBounds content))
                         (.-offsetTop content))
                      header-height
                      footer-height)]
    (style/setHeight (sel1 :tbody) (* (quot max-height 60) 60))))

(defn datagrid
  [input id state]
  (reify
    ui/IRender
    (-render [_]
      (datagrid-template input id (:resource state) (:collection state)))
    ui/IPostProcess
    (-post-process [_]
      (set-datagrid-height!)
      (fix-column-widths!))
    ui/IWithChildren
    (-with-children [_] [:#new])
    ui/IResizeable
    (-resize [_ e]
      (set-datagrid-height!)
      (when (> (.-width (style/getBounds (sel1 :tbody)))
               (.-width (.getSize (.-target e))))
        (fix-column-widths!)))))
