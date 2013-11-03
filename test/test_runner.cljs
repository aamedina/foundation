(ns test-runner
  (:require [foundation.app.data.test.tracking-map :as test-tracking-map]
            [foundation.app.test.dataflow :as test-dataflow]
            [foundation.app.test.tree]
            [foundation.app.test.messages]
            [foundation.app.test.query]
            [foundation.app.test.dom]
            [foundation.app.test.push]
            [cemerick.cljs.test :as t]
            [dommy.core])
  (:require-macros [cemerick.cljs.test :refer [deftest run-tests is testing]]
                   [dommy.macros]
                   [foundation.app.templates :refer [deftemplate]]))

(test-tracking-map/test-changes)
(test-tracking-map/test-as-map)
(test-tracking-map/test-change-tracking-preservation)
(test-dataflow/test-multiple-deep-changes)

(t/test-ns 'foundation.app.test.dataflow)
(t/test-ns 'foundation.app.test.messages)
(t/test-ns 'foundation.app.test.query)
(t/test-ns 'foundation.app.test.dom)
(t/test-ns 'foundation.app.test.push)

(deftemplate div
  [^:bindings {:keys [count active?]}]
  [:div {:class active?}
   [:span count]])

(println "Tests completed without exception")
