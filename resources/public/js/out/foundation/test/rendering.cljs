(ns foundation.test.rendering
  (:require [cljs.core.async :refer [chan <! >! <! put! take! timeout alts!]]
            [foundation.app :as app :refer [transform]]
            [foundation.app.render :as r :refer [render]])
  (:require-macros [cljs.core.async.macros :as a :refer [go go-loop]]))

(defmethod render [:node-create []]
  [renderer [op path old new] pid id]
  [:h1 "Hello, world!"])

(defmethod render [:node-create [:datagrid]]
  [renderer [op path old new] pid id]
  [:table
   [:thead]
   [:tbody]])

(defmethod render [:node-create [:datagrid :collection]]
  [renderer [op path old new] pid id]
  [:tr id])

(defmethod render [:node-update [:datagrid :collection]]
  [renderer [op path old new] pid id]
  [:tr (str new)])
