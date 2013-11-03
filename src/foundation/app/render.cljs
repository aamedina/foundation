; Copyright 2013 Relevance, Inc.

; The use and distribution terms for this software are covered by the
; Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0)
; which can be found in the file epl-v10.html at the root of this distribution.
;
; By using this software in any fashion, you are agreeing to be bound by
; the terms of this license.
;
; You must not remove this notice, or any other, from this software.

(ns foundation.app.render
  (:require [cljs.core.async :refer [<!]]
            [foundation.app.log :as log]
            [foundation.app.tree :as tree])
  (:require-macros [cljs.core.async.macros :refer [go-loop]]))

(defn- consume-app-model-queue [queue in-queue app-model render-fn]
  (go-loop [message (<! queue)]
    (let [old-app-model @app-model
          new-app-model (swap! app-model tree/apply-deltas (:deltas message))
          deltas (tree/since-t new-app-model (tree/t old-app-model))]
      (render-fn deltas in-queue))
    (recur (<! queue))))

(defn consume-app-model [app render-fn]
  (let [app-model (atom tree/new-app-model)]
    (consume-app-model-queue (:app-model app) (:input app) app-model render-fn)
    app-model))

(defn log-fn [deltas]
  (log/log-group "Rendering Deltas" deltas))
