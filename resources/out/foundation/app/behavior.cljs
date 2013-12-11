(ns foundation.app.behavior
  (:require [clojure.browser.repl]
            [clojure.set :as set]
            [clojure.string :as str]
            [clojure.zip :as zip]
            [cljs.core.match :as m]
            [cljs.core.async :refer [chan <! >! <! put! take! timeout alts!]]
            [foundation.app :as app
             :refer [transform derives route-effect]]
            [foundation.app.rendering :as rendering]
            [foundation.app.message :as msg]
            [foundation.app.templates :as tmpl]
            [foundation.app.models :as models]
            [foundation.app.xhr :as xhr]
            [foundation.app.util :as util]
            [enfocus.core :as en]
            [enfocus.events :as events]
            [dommy.core :as dom])
  (:require-macros [cljs.core.match.macros :as m :refer [match]]
                   [cljs.core.async.macros :as a :refer [go go-loop]]
                   [enfocus.macros :as en :refer [defaction]]
                   [dommy.macros :as dom :refer [sel1]]))

(defmethod transform [:inc [:my-counter]]
  [state _]
  ((fnil inc 0) state))

(defmethod transform [:swap [:**]]
  [_ message]
  (:value message))

(defmethod transform [:add-points [:my-counter]]
  [old-value message]
  (if-let [points (int (:points message))]
    (+ old-value points)
    old-value))

(defmethod derives [#{[:my-counter]
                      [:other-counters :*]} [:total-count] :vals]
  [state message nums]
  (reduce + nums))

(defmethod derives [#{[:my-counter]
                      [:other-counters :*]} [:max-count] :vals]
  [old-value message nums]
  (apply max (or old-value 0) nums))

(defmethod derives [{[:my-counter] :nums
                     [:other-counters :*] :nums
                     [:total-count] :total} [:average-count] :map]
  [old-value message {:keys [nums total] :as m}]
  (/ total (count nums)))

(defmethod route-effect [#{[:my-counter]} :single-val]
  [message count]
  [{msg/type :swap msg/path [:other-counters] :value count}])
