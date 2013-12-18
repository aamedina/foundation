(ns foundation.test.models
  (:import [goog Uri]))

(def ads-api (Uri. "http://192.241.130.213:8080/user/15/ads-api"))
(def rest-api (Uri. "http://192.241.130.213:8080/user/15/rest-api"))

(def ^:dynamic *api* ads-api)
