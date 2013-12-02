(ns cljs-time.format
  (:refer-clojure :exclude [extend second])
  (:require [clojure.set :refer [difference]]
            [cljs-time.core :as time]
            [goog.i18n.DateTimeFormat]
            [goog.i18n.DateTimeParse])
  (:import goog.i18n.DateTimeFormat
           goog.i18n.DateTimeParse))

(defn formatter
  "Returns a custom formatter for the given date-time pattern."
  ([fmts] (formatter fmts nil))
  ([fmts dtz] (DateTimeFormat. fmts dtz)))

(def formatters
  {:full-date 0 :long-date 1 :medium-date 2 :short-date 3 :full-time 4
   :long-time 5 :medium-time 6 :short-time 7 :full-datetime 8 :long-datetime 9
   :medium-datetime 10 :short-datetime 11
   :basic-date "yyyyMMdd"
   :basic-date-time "yyyyMMdd'T'HHmmss.SSSZ"
   :basic-date-time-no-ms "yyyyMMdd'T'HHmmssZ"
   :basic-time "HHmmss.SSSZ"
   :basic-time-no-ms "HHmmssZ"
   :basic-t-time "'T'HHmmss.SSSZ"
   :basic-t-time-no-ms "'T'HHmmssZ"
   :date "yyyy-MM-dd"
   :date-hour-minute-second-fraction "yyyy-MM-dd'T'HH:mm:ss.SSS"
   :date-hour-minute-second-ms "yyyy-MM-dd'T'HH:mm:ss.SSS"
   :date-time "yyyy-MM-dd'T'HH:mm:ss.SSSZZ"
   :date-time-no-ms "yyyy-MM-dd'T'HH:mm:ssZZ"
   :hour-minute-second-fraction "HH:mm:ss.SSS"
   :hour-minute-second-ms "HH:mm:ss.SSS"
   :time "HH:mm:ss.SSSZZ"
   :time-no-ms "HH:mm:ssZZ"
   :t-time "T'HH:mm:ss.SSSZZ"
   :t-time-no-ms "T'HH:mm:ssZZ"
   :rfc822 "EEE, dd MMM yyyy HH:mm:ss Z"
   :mysql "yyyy-MM-dd HH:mm:ss"})

(defn parser
  [fmt]
  (DateTimeParse. fmt))

(defn parse
  "Returns a DateTime instance in the UTC time zone obtained by parsing the
   given string according to the given formatter."
  [fmt s]
  (let [dt (time/today-at-midnight)]
    (.strictParse (parser fmt) s dt)
    (when-not (= dt (time/today-at-midnight))
      dt)))

(defn unparse
  "Returns a string representing the given DateTime instance in UTC and in the
  form determined by the given formatter."
  [fmt dt & {:keys [tz]}]
  (let [tz (cond (number? tz)
                 (time/time-zone-for-offset tz)
                 (string? tz)
                 (time/time-zone-for-id tz))]
    (.format (formatter fmt tz) dt)))

(defn show-formatters
  [& {:keys [date-like] :or {date-like (time/now)}}]
  (for [i (sort (vals formatters))]
    (unparse i date-like)))
