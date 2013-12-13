(ns foundation.rendering
  (:require [clojure.browser.repl]
            [clojure.set :as set]
            [clojure.string :as str]
            [clojure.zip :as zip]
            [cljs.core.match :as m]
            [cljs.core.async :refer [chan <! >! <! put! take! timeout alts!]]
            [foundation.app :as app :refer [post-process]]
            [foundation.behavior :as behavior]
            [foundation.templates :as tmpl]
            [foundation.chart :as c :refer [highchart]]
            [foundation.models :as models]
            [foundation.app.render :as r
             :refer [node-create node-update transform-enable attach-transform
                     fix-id set-data! get-data drop-data!]]
            [foundation.app.message :as msg]
            [foundation.app.xhr :as xhr]
            [foundation.app.util :as util]
            [enfocus.core :as en]
            [enfocus.events :as events]
            [dommy.core :as dom])
  (:require-macros [cljs.core.match.macros :as m :refer [match]]
                   [cljs.core.async.macros :as a :refer [go go-loop]]
                   [enfocus.macros :as en :refer [defaction]]
                   [dommy.macros :as dom :refer [sel1]]))

(enable-console-print!)

(defn css-id [id] (str "#" id))

(defmethod node-create []
  [renderer [_ path _ val] input-queue parent-id id]
  (en/at js/document
    [:body] (en/append (tmpl/twitter-power id))))

(defmethod node-create [:dashboard]
  [renderer delta input-queue parent-id id]
  (en/at [(css-id parent-id)]
    (en/append (tmpl/dashboard id))))

(defmethod node-create [:datagrid]
  [renderer delta input-queue parent-id id]
  (en/at [(css-id parent-id)]
    (en/append (tmpl/datagrid id []))))

(defmethod node-create [:chart]
  [renderer [_ path _ _] input-queue parent-id id]
  (let [chart (highchart)]
    (set-data! renderer path chart)))

(defmethod node-update [:chart]
  [renderer [_ path _ val] input-queue parent-id id]
  (let [chart (get-data renderer path)]
    (println path val)))

(defmethod node-update [:datagrid :collection :*]
  [renderer [_ path _ val] input-queue parent-id id]
  (println path val)
  ;; (en/at (.getElementById parent-id)
  ;;   (en/content (tmpl/datagrid {:collection [] :id id})))
  )

;; (defmethod transform-enable [:datagrid]
;;   [renderer dispatch-val id message]
;;   [{msg/type :create msg/path [:datagrid]}])

;; (defmethod post-process [:value [:average-count]]
;;   [[op path n]]
;;   (letfn [(round [n places]
;;             (let [p (Math/pow 10 places)]
;;               (/ (Math/round (* p n)) p)))]
;;     [[op path (round n 2)]]))

