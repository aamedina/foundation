(ns foundation.behavior
  (:require [clojure.browser.repl]
            [clojure.set :as set]
            [clojure.string :as str]
            [clojure.zip :as zip]
            [cljs.core.match :as m]
            [cljs.core.async :refer [chan <! >! <! put! take! timeout alts!]]
            [foundation.app :as app :refer [transform derives route-effect]]
            [foundation.templates :as tmpl]
            [foundation.models :as models]
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

(defmethod transform [:init [:**]] [state message] {})

(defmethod transform [:load [:dashboard]]
  [state message]
  {:model (:model message) :start-time nil :end-time nil})

(defmethod transform [:load [:datagrid]]
  [state message]
  {:collection (:collection message) :selected #{}})

(defmethod derives [#{[:dashboard]} [:chart] :single-val]
  [state message input]
  (if-not (:stats state)
    state
    input))

(defmethod derives [#{[:datagrid]} [:datagrid :collection] :single-val]
  [state message input]
  (:collection input))
