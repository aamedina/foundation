(ns foundation.test.components.datagrid
  (:require [foundation.app.ui :as ui]
            [foundation.test.templates :as t]
            [foundation.test.models :as m]
            [dommy.core])
  (:require-macros [dommy.macros :refer [sel1 sel]]))

(defn datagrid
  [id state]
  (reify
    ui/IRender
    (-render [_]
      (t/datagrid id))))
