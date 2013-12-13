(ns foundation.app.test
  (:require [clojure.browser.repl]
            [clojure.set :as set]
            [clojure.string :as str]
            [clojure.zip :as zip]
            [cljs.core.match :as m]
            [cljs.core.async
             :refer [chan <! >! <! put! take! timeout alts! sliding-buffer
                     close!]]
            [cljs.core.async.impl.protocols :as impl]
            [foundation.app :as app]
            [foundation.behavior :as behavior]
            [foundation.rendering :as rendering]
            [foundation.services :as services]
            [foundation.templates :as tmpl]
            [foundation.models :as models]
            [foundation.app.message :as msg]
            [foundation.app.xhr :as xhr]
            [foundation.app.util :as util]
            [foundation.app.data.component :as c]
            [foundation.app.data.dependency :as d :refer [graph depend]]
            [enfocus.core :as en]
            [enfocus.events :as events]
            [dommy.core :as dom])
  (:require-macros [cljs.core.match.macros :as m :refer [match]]
                   [cljs.core.async.macros :as a :refer [go go-loop]]
                   [enfocus.macros :as en :refer [defaction]]
                   [dommy.macros :as dom :refer [sel1]]))

(enable-console-print!)

(defn reset [] (js/location.reload true))

(defn proc
  ([f] (proc nil f))
  ([out f]
     (let [make-argv (fn [args] (if (coll? args) args [args]))
           in (chan (sliding-buffer 32))
           out out]
       (go-loop []
         (when-let [args (make-argv (<! in))]
           (if out
             (>! out (apply f args))
             (apply f args)))
         (recur))
       in)))

(defn add-proc
  ([f] (add-proc f (atom (graph))))
  ([f out] (add-proc f out (atom (graph))))
  ([f out procs]
     (let [in (proc out f)]
       (swap! procs depend out in)
       [in procs])))

(def logger (proc println))

(defrecord TwitterAds [app app-model procs]
  app/IApplication
  (initialize [application]
    (put! (:input app) {msg/type :init msg/path [:dashboard]})
    (put! (:input app) {msg/type :init msg/path [:datagrid]}))
  c/Lifecycle
  (start [this]
    (app/initialize this))
  (stop [_]))

(defn ^:export -main []
  (let [{:keys [app app-model]} (app/create-app "content")
        app (TwitterAds. app app-model (atom {}))]
    (c/start app)))
