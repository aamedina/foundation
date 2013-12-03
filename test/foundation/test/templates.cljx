(ns foundation.test.templates
  (:require #+cljs [clojure.browser.repl]
            [foundation.app :as app]
            #+cljs [foundation.app.xhr :as xhr]
            [clojure.set :as set]
            [clojure.string :as str]
            [clojure.data :refer [diff]]
            #+cljs [cljs.core.async :as a :refer [<! >! put! take! chan]]
            #+cljs [cemerick.cljs.test :as t]
            #+clj [foundation.app.macros :as m])
  #+cljs (:require-macros [cljs.core.async.macros :refer [go go-loop]]
                          [foundation.app.macros :as app]
                          [cemerick.cljs.test
                           :refer [deftest run-tests is testing]])
  #+clj (:use clojure.test))
