(ns foundation.app.templates
  (:require [enfocus.core :as en]
            [enfocus.events :as e]
            [dommy.core :as dom])
  (:require-macros [dommy.macros :as dom :refer [deftemplate]]
                   [enfocus.macros :as en :refer [defaction]]
                   [cljs.core.match.macros :as m :refer [match]]
                   [cljs.core.async.macros :as a :refer [go go-loop]]))

(deftemplate twitter-power
  [id]
  [:div {:id id}
   ])
