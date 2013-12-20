(ns foundation.test.rendering
  (:require [cljs.core.async :refer [chan <! >! <! put! take! timeout alts!]]
            [foundation.app :as app :refer [transform]]
            [foundation.app.render :as r :refer [render]]
            [foundation.test.models :as m]
            [foundation.app.ui :as ui]
            [foundation.test.templates :as t]
            [foundation.test.components.datagrid :as dg :refer [datagrid]]
            [foundation.test.components.dashboard :refer [dashboard]]
            [foundation.test.components.chart :refer [highchart]]
            [dommy.core :as dom])
  (:require-macros [cljs.core.async.macros :as a :refer [go go-loop]]
                   [dommy.macros :refer [sel1]]))

(declare start-date-picker end-date-picker)

(defmethod render [:node-create []]
  [renderer [op path old new] input pid id]
  (t/twitter-power id))

(defmethod render [:node-create [:datagrid]]
  [renderer [op path old new] input pid id]  
  (r/-set-data renderer [:datagrid :resource] (:resource new))
  (datagrid input id new))

(defmethod render [:node-update [:datagrid]]
  [renderer [op path old new] input pid id]
  (dg/set-datagrid-height!)
  (r/-set-data renderer [:datagrid :resource] (:resource new)))

(defmethod render [:node-update [:datagrid :collection]]
  [renderer [op path old new] input pid id]
  (dg/set-datagrid-height!)
  (dg/fix-column-widths!)
  (let [resource (r/-get-data renderer [:datagrid :resource])]
    (reify ui/IRender
      (-render [_] (dg/datagrid-body new (m/columns resource)))
      ui/IPostProcess
      (-post-process [_]
        (dg/set-datagrid-height!)
        (dg/fix-column-widths!)))))

(defmethod render [:node-create [:dashboard]]
  [renderer [op path old new] input pid id]
  (dashboard renderer id new))

(defmethod render [:node-create [:chart]]
  [renderer [op path old new] input pid id]
  (let [chart (highchart)
        stat (:promoted-tweet-timeline-clicks (:stats new))
        start-time (.getTime (js/Date. (:start-time new)))]
    (doseq [series (.-series chart)]
      (.remove series))
    (.addSeries chart (clj->js {:data stat
                                :pointInterval (* 3600 1000)
                                :pointStart start-time}))
    (r/-set-data renderer [:chart] chart)
    (start-date-picker renderer (:start-time new))
    (end-date-picker renderer (:end-time new))
    nil))

(defmethod render [:node-update [:chart]]
  [renderer [op path old new] input pid id]
  (let [chart (r/-get-data renderer path)
        start-time (.getTime (js/Date. (:start-time new)))]
    (doseq [series (.-series chart)]
      (.remove series))
    (.addSeries chart (clj->js {:data (:stat new)
                                :pointInterval (* 3600 1000)
                                :pointStart start-time}))))

(defn start-date-picker
  [renderer start-time]
  (if-let [picker (r/-get-data renderer [:start-time-picker])]
    picker
    (let [picker (t/date-picker
                  (sel1 :.date-picker#start-time)
                  (js/Date. start-time) :long-date)]
      (r/-set-data renderer [:start-time-picker] picker)
      picker)))

(defn end-date-picker
  [renderer end-time]
  (if-let [picker (r/-get-data renderer [:end-time-picker])]
    picker
    (let [picker (t/date-picker
                  (sel1 :.date-picker#end-time)
                  (js/Date. end-time) :long-date)]
      (r/-set-data renderer [:end-time-picker] picker)
      picker)))
