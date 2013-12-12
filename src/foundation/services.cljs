(ns foundation.app.services
  (:require [clojure.browser.repl]
            [clojure.set :as set]
            [clojure.string :as str]
            [clojure.zip :as zip]
            [cljs.core.match :as m]
            [cljs.core.async :refer [chan <! >! <! put! take! timeout alts!]]
            [foundation.app :as app :refer [effect]]
            [foundation.app.behavior :as behavior]
            [foundation.app.rendering :as rendering]
            [foundation.app.message :as msg]
            [foundation.app.templates :as tmpl]
            [foundation.app.models :as models]
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

(defmethod effect [:init [:**]]
  [message input-queue]
  (println "effect"))

(defmulti construct identity)

(defrecord TwitterAds [app]
  c/Lifecycle
  (start [_])
  (stop [_]))
