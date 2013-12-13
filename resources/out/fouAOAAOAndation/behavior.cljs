(ns fouAOAAOAndation.behavior
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
  (binding [foundation.models/*account* (:account message)]
    {:model (:model message)
     :account (:account message)
     :stats-model (:stats-model message)
     :start-time (models/start-time (:model message))
     :end-time (models/end-time (:model message))}))

(defmethod transform [:load [:datagrid]]
  [state message]
  {:collection (:collection message) :selected #{}
   :resource (:resource message)
   :account (:account message)})

(defmethod transform [:load [:chart]]
  [state message]
  state
  ;; (assoc state :stats (:stats message))
  )

(defmethod derives [#{[:dashboard] [:datagrid]} [:chart] :vals]
  [state message input]
  (dissoc (apply merge input) :collection))



;; (defmethod derives [#{[:datagrid]} [:datagrid :collection] :single-val]
;;   [state message input]
;;   (:collection input))
