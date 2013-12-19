(ns foundation.test.components.dashboard
  (:require [foundation.app.ui :as ui]
            [foundation.test.templates :as t]
            [foundation.test.models :as m]
            [dommy.core])
  (:require-macros [dommy.macros :refer [sel1 sel]]))

(defn dashboard
  [id state]
  (reify
    ui/IRender
    (-render [_]
      (t/dashboard id))))
