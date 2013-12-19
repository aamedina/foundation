(ns foundation.test.behavior
  (:require [foundation.app :as app :refer [transform derives]]))

(defmethod transform [:init [:datagrid]]
  [state message]
  {:collection []
   :resource (:resource message)})

(defmethod transform [:init [:dashboard]]
  [state message]
  {:model (:model message)})

(defmethod transform [:load [:datagrid :collection]]
  [state message]
  (into state (:collection message)))

(defmethod transform [:create [:datagrid :collection]]
  [state message]
  (into [((fnil identity {} (:model message)))] state))

(defmethod transform [:save [:datagrid :collection]]
  [state message]
  (into (conj (subvec state 0 (:nth message)) (:model message))
        (subvec state (inc (:nth message)) (count state))))

(defmethod transform [:delete [:datagrid :collection]]
  [state message]
  (into (subvec state 0 (:nth message))
        (subvec state (inc (:nth message)) (count state))))

(defmethod derives [#{[:datagrid] [:dashboard]} [:chart] :default]
  [state message input]
  (let [dashboard (get input [:dashboard])
        datagrid (get input [:datagrid])]
    {:resource (:resource datagrid)
     :model (:model dashboard)}))
