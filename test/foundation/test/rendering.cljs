(ns foundation.test.rendering
  (:require [cljs.core.async :refer [chan <! >! <! put! take! timeout alts!]]
            [foundation.app :as app :refer [transform]]
            [foundation.app.render :as r :refer [render]]
            [foundation.test.models :as m]
            [foundation.app.ui :as ui]
            [foundation.test.templates :as t]
            [foundation.test.components.datagrid :refer [datagrid]]
            [foundation.test.components.dashboard :refer [dashboard]]
            [foundation.test.components.chart :refer [highchart]]
            [dommy.core :as dom])
  (:require-macros [cljs.core.async.macros :as a :refer [go go-loop]]
                   [dommy.macros :refer [sel1]]))

(declare start-date-picker end-date-picker)

(defmethod render [:node-create []]
  [renderer [op path old new] pid id]
  (t/twitter-power id))

(defmethod render [:node-create [:datagrid]]
  [renderer [op path old new] pid id]
  (datagrid id new))

(defmethod render [:node-create [:datagrid :collection]]
  [renderer [op path old new] pid id]
  )

(defmethod render [:node-update [:datagrid :collection]]
  [renderer [op path old new] pid id]
  )

(defmethod render [:node-create [:dashboard]]
  [renderer [op path old new] pid id]
  (dashboard id new))

(defmethod render [:node-create [:chart]]
  [renderer [op path old new] pid id]
  (r/-set-data renderer (conj path :chart) (highchart))
  nil)

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
