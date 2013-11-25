(ns foundation.app.logic
  (:refer-clojure :exclude [==])
  (:require [cljs.core.logic :as l :refer [==]]
            [cljs.core.logic.fd :as fd]
            [cljs.core.logic.unifier :as u])
  (:require-macros [cljs.core.logic.macros :as l :refer [run* fresh]]))
