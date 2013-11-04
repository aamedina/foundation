;; Fork of Pedestal Introspector https://github.com/ilshad/pedestal-introspector
;; Author: Ilshad Khabibullin.

(ns foundation.app-tools.introspector
  (:require [domina :as d]
            [domina.events :as e]
            [foundation.app.render.templates :as t]
            [foundation.app.render.cljs-formatter :as formatter])
  (:require-macros [dommy.macros :refer [deftemplate]]))

(deftemplate index
  [data-model-id info]
  [:html
   [:head
    [:title "Application Introspector"]
    [:link {:href "css/pedestal.css"}]]
   [:body
    [:div#content
     [:h1 "Data Model"]
     [:div#info info]
     [:div {:id data-model-id}]]]])

(def index-template
  [{:info {:type :content :id "info"}
    :data-model-id {:type :attr :attr-name :id :id "data-model-id"}}])

(def monitored-app)
(def monitored-model-path-only)

(defn create
  "Create Introspector for app"
  [app & {:keys [model-path-only]
          :or {model-path-only []}}]
  (set! monitored-app app)
  (set! monitored-model-path-only model-path-only))

(defn bind-key
  "Create keyboard shortcut to open Introspector pop-up window.
   Default: Ctrl+I."
  ([]
     (bind-key 73))
  ([key-code]
     (e/listen! :keydown
                (fn [event]
                  (let [evt (e/raw-event event)]
                    (and (.-ctrlKey evt)
                         (= (.-keyCode evt) key-code)
                         (open)))))))

(defn ^:export open
  "Open Introspector pop-up window"
  []
  (let [doc (popup)
        model-id (gensym)]
    (render-layout doc model-id)
    (render-model doc model-id)))

(defn- popup []
  (.-document
   (.open js/window "" "introspector" "height=600,width=600")))

(declare info)

(defn- render-layout [doc model-id]
  (let [[_ template-fn] ((:content templates))]
    (dom/replace! doc (template-fn {:data-model-id model-id :info (info)}))))

(defn- get-model [state]
  (get-in (:data-model @state) monitored-model-path-only))

(defn- render-model [doc model-id]
  (let [state (get-in monitored-app [:app :state])
        node (d/single-node (formatter/html (get-model state)))
        container (.getElementById doc model-id)]
    (d/append! container node)
    (formatter/arrange! node container)))

(defn- model-path-only-info [s]
  (when (< 0 (count monitored-model-path-only))
    (str s
         "<div class='info'>Model path only: <span class='path'>"
         monitored-model-path-only
         "</span></div>")))

(defn- info []
  (-> ""
      model-path-only-info))
