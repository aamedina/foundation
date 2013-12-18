(ns foundation.app.render
  (:require [foundation.app.util :as util]))

(defn log-fn [deltas] (util/log-group "Rendering Deltas" deltas))

(defprotocol IRenderer
  (-get-id [_ path])
  (-get-parent-id [_ path])
  (-new-id [_ path] [_ path id])
  (-delete-id [_ path])
  (-on-destroy [_ path])
  (-set-data [_ path data])
  (-get-data [_ path])
  (-drop-data [_ path]))

(defrecord Renderer []
  IRenderer
  (-get-id [_ path])
  (-get-parent-id [_ path])
  (-new-id [_ path])
  (-new-id [_ path id])
  (-delete-id [_ path])
  (-on-destroy [_ path])
  (-set-data [_ path data])
  (-get-data [_ path])
  (-drop-data [_ path]))

(defn renderer
  ([root-id] (renderer root-id identity))
  ([root-id render-fn]
     ))
