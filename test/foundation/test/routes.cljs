(ns foundation.test.routes
  (:require [foundation.app.router :as router :include-macros true
             :refer [defroutes GET ANY]]))

(defroutes app
  (GET "/" [] ""))
