(ns foundation.test.rendering
  (:require [cljs.core.async :refer [chan <! >! <! put! take! timeout alts!]]
            [foundation.app :as app :refer [transform]]
            [foundation.app.render :as r :refer [render]]
            [foundation.app.ui :as ui]
            [foundation.test.templates :as t]
            [dommy.core :as dom])
  (:require-macros [cljs.core.async.macros :as a :refer [go go-loop]]
                   [dommy.macros :refer [sel1]]))

(defmethod render [:node-create []]
  [renderer [op path old new] pid id]
  (t/twitter-power id))

(defmethod render [:node-create [:datagrid]]
  [renderer [op path old new] pid id]
  [:table {:id id}
   [:thead]
   [:tbody]])

(defmethod render [:node-create [:datagrid :collection]]
  [renderer [op path old new] pid id]
  (reify
    ui/IRender
    (-render [_]
      [:ul {:id id}
       (for [n (range 10)]
         [:li n])])
    ui/IParentNode
    (-parent-node [_] #(sel1 % :thead))))

(defmethod render [:node-update [:datagrid :collection]]
  [renderer [op path old new] pid id]
  [:tr (str new)])
