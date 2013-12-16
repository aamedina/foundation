(ns foundation.rendering
  (:require [clojure.browser.repl]
            [clojure.set :as set]
            [clojure.string :as str]
            [clojure.zip :as zip]
            [cljs.core.match :as m]
            [cljs-time.coerce :as coerce]
            [goog.dom]
            [goog.style :as style]
            [goog.dom.ViewportSizeMonitor]
            [goog.events :as events]
            [cljs.core.async :refer [chan <! >! <! put! take! timeout alts!]]
            [foundation.app :as app :refer [post-process]]
            [foundation.behavior :as behavior]
            [foundation.templates :as tmpl]
            [foundation.chart :as c :refer [highchart]]
            [foundation.models :as models]
            [foundation.app.render :as r
             :refer [node-create node-update transform-enable attach-transform
                     fix-id set-data! get-data drop-data!]]
            [foundation.app.message :as msg]
            [foundation.app.xhr :as xhr]
            [foundation.app.util :as util]
            [enfocus.core :as en]
            [enfocus.events :as e]
            [dommy.core :as dom])
  (:require-macros [cljs.core.match.macros :as m :refer [match]]
                   [cljs.core.async.macros :as a :refer [go go-loop]]
                   [enfocus.macros :as en :refer [defaction]]
                   [dommy.macros :as dom :refer [sel1]]))

(enable-console-print!)

(defn css-id [id] (str "#" id))

(defmethod node-create []
  [renderer [_ path _ val] input-queue parent-id id]
  (en/at [:body]
    (en/append (tmpl/twitter-power id))))

(def stats-msg {msg/type :stats msg/path [:chart]})

(defmethod node-create [:dashboard]
  [renderer [_ path _ val] input-queue parent-id id]
  (en/at [(css-id parent-id)]
    (en/append (tmpl/dashboard id)))
  (doseq [[metric cpa rate] tmpl/dashboard-metrics]
    (en/at (sel1 (css-id parent-id))
      [(str "#" metric)]
      (e/listen :click #(put! input-queue (assoc stats-msg
                                            :metric metric
                                            :metric-type :total)))
      [(str "#" metric "-cpa")]
      (e/listen :click #(put! input-queue (assoc stats-msg
                                            :metric metric
                                            :metric-type :cpa)))
      [(str "#" metric "-rate")]
      (e/listen :click
                #(put! input-queue (assoc stats-msg
                                     :metric metric
                                     :metric-type :rate))))))

(defn start-date-picker
  [renderer start-time]
  (if-let [picker (get-data renderer [:start-time-picker])]
    picker
    (let [picker (tmpl/date-picker
                  (sel1 :.date-picker#start-time)
                  (js/Date. start-time) :long-date)]
      (set-data! renderer [:start-time-picker] picker)
      picker)))

(defn end-date-picker
  [renderer end-time]
  (if-let [picker (get-data renderer [:end-time-picker])]
            picker
            (let [picker (tmpl/date-picker
                          (sel1 :.date-picker#end-time)
                          (js/Date. end-time) :long-date)]
              (set-data! renderer [:end-time-picker] picker)
              picker)))

(defmethod node-update [:dashboard]
  [renderer [_ path _ {:keys [stats start-time end-time model] :as val}]
   input-queue parent-id id]
  (when start-time
    (let [start-picker (start-date-picker renderer start-time)
          end-picker (end-date-picker renderer end-time)]
      (en/at (sel1 (str "#" parent-id))
        [:#resource-id] (en/content (:name model)))
      (doseq [[metric cpa rate] tmpl/dashboard-metrics]
        (let [total (get (:total stats) metric)
              -cpa (get (:cpa stats) metric)
              -rate (get (:rate stats) metric)]
          (en/at (sel1 (css-id parent-id))
            [(str "#" metric)] (en/content (str total " " metric))
            [(str "#" metric "-cpa")] (en/content (str -cpa " " cpa))
            [(str "#" metric "-rate")] (en/content (str -rate " " rate))))))))

(declare fix-column-widths! set-datagrid-height! as-resizable)

(defmethod node-create [:datagrid]
  [renderer [_ path _ _] input-queue parent-id id]
  (en/at [(css-id parent-id)]
    (en/append (tmpl/datagrid id))))

(defmethod node-update [:datagrid]
  [renderer [_ path _ val] input-queue parent-id id]
  (set-data! renderer path (:resource val)))

(def create-msg {msg/type :create msg/path [:datagrid :collection]})
(def save-msg {msg/type :save msg/path [:datagrid :collection]})
(def delete-msg {msg/type :delete msg/path [:datagrid :collection]})

(defmethod node-create [:datagrid :collection]
  [renderer [_ path _ val] input-queue parent-id id]
  (let [model (get-data renderer [:datagrid])]
    (en/at (sel1 (css-id parent-id))
      [:div.panel-body] (en/content (tmpl/datagrid-table model []))
      [:button#new] (e/listen :click #(put! input-queue create-msg))
      [:button#save] (e/listen :click #(put! input-queue save-msg))
      [:button#delete] (e/listen :click #(put! input-queue delete-msg))
      [:button#dupe] (e/listen :click #(put! input-queue create-msg)))
    (as-resizable)))

(defmethod node-update [:datagrid :collection]
  [renderer [_ path _ val] input-queue parent-id id]
  (let [model (get-data renderer [:datagrid])
        row-count (count (.-rows (sel1 :tbody)))]
    (en/at (sel1 (css-id parent-id))
      [:div.panel-body] (en/content (tmpl/datagrid-table model val)))
    (set-datagrid-height!)
    (fix-column-widths!)
    ))

(defmethod node-create [:chart]
  [renderer [_ path _ _] input-queue parent-id id]
  (let [chart (highchart)]
    (set-data! renderer path chart)))

(defmethod node-update [:chart]
  [renderer [_ path _ val] input-queue parent-id id]
  (let [chart (get-data renderer path)
        start-time (.getTime (js/Date. (:start-time val)))]
    (doseq [series (.-series chart)]
      (.remove series))
    (.addSeries chart (clj->js {:data (:stat val)
                                :pointInterval (* 3600 1000)
                                :pointStart start-time}))))

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
        table-width (.-width (style/getBounds panel-body))
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

(defn as-resizable
  []
  (set-datagrid-height!)
  (let [viewport-monitor (goog.dom.ViewportSizeMonitor/getInstanceForWindow)]
    (events/listen viewport-monitor goog.events.EventType.RESIZE
                   (fn [e]
                     (set-datagrid-height!)))))
