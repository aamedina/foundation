(ns cljs-time.coerce
  (:refer-clojure :exclude [extend second])
  (:require [cljs-time.core :as time]
            [cljs-time.format :as time-fmt]
            [goog.date]
            [goog.date.Date]
            [goog.date.DateTime]
            [goog.date.UtcDateTime])
  (:import goog.date.Date
           goog.date.DateTime
           goog.date.UtcDateTime))

(defprotocol ICoerce
  (to-date-time [obj]))

(defn from-long
  "Returns a DateTime instance in the UTC time zone corresponding to the given
   number of milliseconds after the Unix epoch."
  [millis]
  (time/date-time (js/Date. millis)))

(defn from-string
  "return DateTime instance from string using
   formatters in clj-time.format, returning first
   which parses"
  [s]
  (first
   (for [f (vals time-fmt/formatters)
         :let [d (try (time-fmt/parse f s) (catch js/Error e nil))]
         :when d] d)))

(defn from-date
  "Returns a DateTime instance in the UTC time zone corresponding to the given
   Java Date object."
  [date]
  (from-long (.getTime date)))

(defn to-long
  "Convert `obj` to the number of milliseconds after the Unix epoch."
  [obj]
  (if-let [dt (to-date-time obj)]
    (.getTime dt)))

(defn to-epoch
  "Convert `obj` to Unix epoch."
  [obj]
  (let [millis (to-long obj)]
    (and millis (/ millis 1000))))

(defn to-date
  "Convert `obj` to a Java Date instance."
  [obj]
  (to-date-time obj))

(defn to-string
  "Returns a string representation of obj in UTC time-zone
  using (ISODateTimeFormat/dateTime) date-time representation."
  [obj]
  (if-let [dt (to-date-time obj)]
    (time-fmt/unparse (:date-time time-fmt/formatters) dt)))

(defn to-local-date
  "Convert `obj` to a org.joda.time.LocalDate instance"
  [obj]
  (if-let [dt (to-date-time obj)]
    (time/local-date (.getYear dt) (.getMonth dt) (.getDate dt))))

(extend-protocol ICoerce
  nil
  (to-date-time [_] nil)

  Date
  (to-date-time [date] (from-date date))

  DateTime
  (to-date-time [date-time] date-time)

  UtcDateTime
  (to-date-time [date-time] date-time)

  number
  (to-date-time [number]
    (if (integer? number)
      (from-long number)
      (from-long (int number))))
  
  string
  (to-date-time [string] (from-string string)))
