(ns foundation.test.behavior
  (:require [foundation.app :as app :refer [transform]]))

(defmethod transform [:init [:datagrid]]
  [state message]
  {})

(defmethod transform [:init [:datagrid :collection]]
  [state message]
  [])

(defmethod transform [:init [:dashboard]]
  [state message]
  {})
