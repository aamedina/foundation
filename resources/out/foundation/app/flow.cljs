(ns foundation.app.flow
  (:refer-clojure :exclude [merge])
  (:require [clojure.set :as set]
            [cljs.core :as core]
            [cljs.core.match :as m]
            [cljs.core.async :as a
             :refer [<! put! chan filter< filter> merge split map< map>
                     mult tap take! to-chan into-chan]]
            [foundation.app.data.rrb-vector :as rrb :refer [catvec]]
            [avl.clj :as avl]
            [foundation.app.data.dependency :as d :refer [graph depend]]
            [foundation.app.data.component :as c :refer [start stop]])
  (:require-macros [cljs.core.match.macros :as m :refer [match]]
                   [cljs.core.async.macros :as a :refer [go go-loop]]))

(defn assign
  [in opt out]
  )

(enable-console-log!)


(defn event-queue
  []
  (.addEventListener js/document "click"))
