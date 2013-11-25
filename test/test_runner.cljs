(ns test-runner
  (:require [foundation.app.data.test.tracking-map :as test-tracking-map]
            [foundation.app.test.dataflow :as test-dataflow]
            [foundation.app.test.tree]
            [foundation.app.test.messages]
            [foundation.app.test.query]
            [foundation.app.test.dom]
            [foundation.app.test.push]
            [cemerick.cljs.test :as t])
  (:require-macros [cemerick.cljs.test :refer [deftest run-tests is testing]]))

(test-tracking-map/test-changes)
(test-tracking-map/test-as-map)
(test-tracking-map/test-change-tracking-preservation)
(test-dataflow/test-multiple-deep-changes)

(t/test-ns 'foundation.app.test.dataflow)
(t/test-ns 'foundation.app.test.messages)
(t/test-ns 'foundation.app.test.query)
(t/test-ns 'foundation.app.test.dom)
(t/test-ns 'foundation.app.test.push)

(println "Tests completed without exception")
