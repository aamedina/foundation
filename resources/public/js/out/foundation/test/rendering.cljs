(ns foundation.test.rendering
  (:require [cljs.core.async :refer [chan <! >! <! put! take! timeout alts!]]
            [foundation.app :as app :refer [transform]]
            [foundation.app.render :as r :refer [render]])
  (:require-macros [cljs.core.async.macros :as a :refer [go go-loop]]))

(defmethod render [:added [:datagrid]]
  [renderer [op path old new] pid id]
  [:h1 "Hello, world!"])
