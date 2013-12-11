(ns foundation.app.rendering
  (:require [clojure.browser.repl]
            [clojure.set :as set]
            [clojure.string :as str]
            [clojure.zip :as zip]
            [cljs.core.match :as m]
            [cljs.core.async :refer [chan <! >! <! put! take! timeout alts!]]
            [foundation.app :as app
             :refer [node-create node-update transform-enable attach-transform
                     fix-id post-process]]
            [foundation.app.behavior :as behavior]
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

(defmethod node-create []
  [renderer [_ path _ val] input-queue parent-id id]
  (en/at js/document
    [:body] (en/append (tmpl/twitter-power id))))

(defmethod transform-enable [:inc [:my-counter]]
  [renderer dispatch-val id message]
  [{msg/type :inc msg/path [:my-counter]}])

(defmethod transform-enable [:swap [:other-counters :*]]
  [renderer dispatch-val id message]
  (println id message)
  [{msg/type :swap msg/path [:other-counters :*] :value (rand-int 20)}])

(defmethod node-create [:my-counter]
  [renderer [_ path _ val] input-queue parent-id id]
  (en/at [parent-id]
    (en/append (en/html [:button {:id id} "click me"])))
  (attach-transform renderer :click id :inc path input-queue))

(defmethod node-create [:other-counters :*]
  [renderer [_ path _ val] input-queue parent-id id]
  (en/at [parent-id]
    (en/append (en/html [:h1 path [:button {:id id} val]])))
  (attach-transform renderer :click id :swap path input-queue))

(defmethod node-update [:other-counters :*]
  [renderer [_ path _ val] input-queue parent-id id]
  (en/at (sel1 (fix-id parent-id))
    ["button"] (en/content (str val))))

(defmethod node-create [:total-count]
  [renderer [_ path _ val] input-queue parent-id id]
  (en/at [parent-id]
    (en/append (en/html [:h3 {:id id} "Total" [:p.val val]]))))

(defmethod node-create [:max-count]
  [renderer [_ path _ val] input-queue parent-id id]
  (en/at [parent-id]
    (en/append (en/html [:h3 {:id id} "Max" [:p.val val]]))))

(defmethod node-create [:average-count]
  [renderer [_ path _ val] input-queue parent-id id]
  (en/at [parent-id]
    (en/append (en/html [:h3 {:id id} "Average" [:p.val val]]))))

(defmethod node-update [:average-count]
  [renderer [_ path _ val] input-queue parent-id]
  (en/at (sel1 (fix-id parent-id))
    [".val"] (en/content (str val))))

(defmethod node-update [:max-count]
  [renderer [_ path _ val] input-queue parent-id]
  (en/at (sel1 (fix-id parent-id))
    [".val"] (en/content (str val))))

(defmethod node-update [:total-count]
  [renderer [_ path _ val] input-queue parent-id]
  (en/at (sel1 (fix-id parent-id))
    [".val"] (en/content (str val))))

(defmethod node-update [:my-counter]
  [renderer [_ path _ val :as delta] input-queue parent-id]
  (en/at [:#my-counter] (en/content (str val))))

(defmethod post-process [:value [:average-count]]
  [[op path n]]
  (letfn [(round [n places]
            (let [p (Math/pow 10 places)]
              (/ (Math/round (* p n)) p)))]
    [[op path (round n 2)]]))
