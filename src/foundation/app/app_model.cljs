(ns foundation.app.app-model
  (:require [clojure.browser.repl]
            [clojure.set :as set]
            [clojure.string :as str]
            [clojure.zip :as zip]
            [cljs.core.match :as m]
            [cljs.core.async :refer [chan <! >! <! put! take! timeout alts!]]
            [foundation.app.render :as render
             :refer [node-create node-update node-destroy transform-enable
                     transform-disable fix-id get-id new-id! get-parent-id]]
            [foundation.app.util :as util]
            [enfocus.core :as en]
            [enfocus.events :as events]
            [dommy.core :as dom])
  (:require-macros [cljs.core.match.macros :as m :refer [match]]
                   [cljs.core.async.macros :as a :refer [go go-loop]]
                   [enfocus.macros :as en :refer [defaction]]
                   [dommy.macros :as dom :refer [sel1]]))

(defn log-fn [deltas] (util/log-group "Rendering Deltas" deltas))

(defn renderer
  ([root-id] (renderer root-id identity))
  ([root-id log-fn]
     (let [renderer (render/->DomRenderer (atom {:id root-id}))]
       (fn [deltas input-queue]
         (let [deltas (remove (fn [[op path _ _]]
                                (and (empty? path) (not= op :node-create)))
                              deltas)]
           (when (seq deltas)
             (log-fn deltas))
           (doseq [d deltas]
             (let [[op path] d
                   id (if-let [id (get-id renderer path)]
                        id
                        (new-id! renderer path))
                   pid (get-parent-id renderer path)]
               (case op
                 :node-create (node-create renderer d input-queue pid id)
                 :node-update (node-update renderer d input-queue pid)
                 :node-destroy (node-destroy renderer d input-queue id)
                 :value (node-update renderer d input-queue id)
                 :attr (node-update renderer d input-queue id)
                 :transform-enable
                 (transform-enable renderer d input-queue id)
                 :transform-disable
                 (transform-disable renderer d input-queue id)))))
         ))))
