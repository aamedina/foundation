(ns cljs-time.core
  (:refer-clojure :exclude [second])
  (:require [goog.date]
            [goog.date.Date]
            [goog.date.DateRange]
            [goog.date.DateTime]
            [goog.date.Interval]
            [goog.date.UtcDateTime]
            [goog.i18n.TimeZone]
            [cljs.core.async :refer [<! timeout]])
  (:require-macros [cljs.core.async.macros :refer [go]]
                   [cljs-time.macros :refer [do-at]])
  (:import goog.date.Date
           goog.date.DateRange
           goog.date.DateTime
           goog.date.Interval
           goog.date.UtcDateTime
           goog.i18n.TimeZone))

(defprotocol DateTimeProtocol
  "Interface for various date time functions"
  (year [this])
  (month [this])
  (day [this])
  (day-of-week [this])
  (hour [this])
  (minute [this])
  (second [this])
  (milli [this])
  (after? [this that])
  (before? [this that])
  (plus- [this period])
  (minus- [this period]))

(extend-protocol DateTimeProtocol
  UtcDateTime
  (year [this] (.getYear this))
  (month [this] (inc (.getMonth this)))
  (day [this] (.getDate this))
  (day-of-week [this] (.getDay this))
  (hour [this] (.getHours this))
  (minute [this] (.getMinutes this))
  (second [this] (.getSeconds this))
  (milli [this] (.getMilliseconds this))
  (after? [this that] (> this that))
  (before? [this that] (< this that))
  (plus- [this period] (.add this period) this)
  (minus- [this period] (.add this (.getInverse period)) this)

  DateTime
  (year [this] (.getYear this))
  (month [this] (inc (.getMonth this)))
  (day [this] (.getDate this))
  (day-of-week [this] (.getDay this))
  (hour [this] (.getHours this))
  (minute [this] (.getMinutes this))
  (second [this] (.getSeconds this))
  (milli [this] (.getMilliseconds this))
  (after? [this that] (> this that))
  (before? [this that] (< this that))
  (plus- [this period] (.add this period) this)
  (minus- [this period] (.add this (.getInverse period)) this)

  Date
  (year [this] (.getYear this))
  (month [this] (inc (.getMonth this)))
  (day [this] (.getDate this))
  (day-of-week [this] (.getDay this))
  (after? [this that] (> this that))
  (before? [this that] (< this that))
  (plus- [this period] (.add this period) this)
  (minus- [this period] (.add this (.getInverse period)) this))

(defn now
  "Returns a DateTime for the current instant in the UTC time zone."
  []
  (UtcDateTime.))

(defn today-at-midnight
  "Returns a DateMidnight for today at midnight in the UTC time zone."
  []
  (doto (UtcDateTime.)
    (.setHours 0)
    (.setMinutes 0)
    (.setSeconds 0)
    (.setMilliseconds 0)))

(defn epoch
  "Returns a DateTime for the begining of the Unix epoch in the UTC time zone."
  []
  (doto (UtcDateTime.)
    (.setTime 0)))

(defn date-midnight
  "Constructs and returns a new UtcDateTime at midnight.
   Specify the year, month of year, day of month. Note that month and day are
   1-indexed. Any number of least-significant components can be omitted, in which 
   case they will default to 1."
  ([year]
     (date-midnight year 1 1))
  ([year month]
     (date-midnight year month 1))
  ([year month day]
     (UtcDateTime. year (dec month) day 0 0 0 0)))

(defn date-time
  "Constructs and returns a new DateTime in UTC.
   Specify the year, month of year, day of month, hour of day, minute if hour,
   second of minute, and millisecond of second. Note that month and day are
   1-indexed while hour, second, minute, and millis are 0-indexed.
   Any number of least-significant components can be ommited, in which case
   they will default to 1 or 0 as appropriate."
  ([year]
   (date-time year 1 1 0 0 0 0))
  ([year month]
   (date-time year month 1 0 0 0 0))
  ([year month day]
   (date-time year month day 0 0 0 0))
  ([year month day hour]
   (date-time year month day hour 0 0 0))
  ([year month day hour minute]
   (date-time year month day hour minute 0 0))
  ([year month day hour minute second]
   (date-time year month day hour minute second 0))
  ([year month day hour minute second millis]
     (UtcDateTime. year (dec month) day hour minute second millis)))

(defn local-date-time
  "Constructs and returns a new LocalDateTime.
   Specify the year, month of year, day of month, hour of day, minute if hour,
   second of minute, and millisecond of second. Note that month and day are
   1-indexed while hour, second, minute, and millis are 0-indexed.
   Any number of least-significant components can be ommited, in which case
   they will default to 1 or 0 as appropriate."
  ([year]
   (local-date-time year 1 1 0 0 0 0))
  ([year month]
   (local-date-time year month 1 0 0 0 0))
  ([year month day]
   (local-date-time year month day 0 0 0 0))
  ([year month day hour]
   (local-date-time year month day hour 0 0 0))
  ([year month day hour minute]
   (local-date-time year month day hour minute 0 0))
  ([year month day hour minute second]
   (local-date-time year month day hour minute second 0))
  ([year month day hour minute second millis]
     (DateTime. year (dec month) day hour minute second millis)))

(defn local-date
  "Constructs and returns a new LocalDate.
   Specify the year, month, and day. Does not deal with timezones."
  [year month day]
  (Date. year month day))

(defn today
  "Constructs and returns a new LocalDate representing today's date.
   LocalDate objects do not deal with timezones at all."
  []
  (Date.))

(defn time-zone-for-offset
  "Returns a DateTimeZone for the given offset, specified either in hours or
   hours and minutes."
  [hours]
  (TimeZone/createTimeZone hours))

(defn time-zone-for-id
  "Returns a DateTimeZone for the given ID, which must be in long form, e.g.
   'America/Matamoros'."
  [id]
  id)

(defn years
  "Given a number, returns a Period representing that many years.
   Without an argument, returns a PeriodType representing only years."
  ([] goog.date.Interval.YEARS)
  ([n] (Interval. n)))

(defn months
  "Given a number, returns a Period representing that many months.
   Without an argument, returns a PeriodType representing only months."
  ([] goog.date.Interval.MONTHS)
  ([n] (Interval. 0 n)))

(defn weeks
  "Given a number, returns a Period representing that many weeks.
   Without an argument, returns a PeriodType representing only weeks."
  [n]
  (Interval. 0 0 (* 7 n)))

(defn days
  "Given a number, returns a Period representing that many days.
   Without an argument, returns a PeriodType representing only days."
  ([] goog.date.Interval.DAYS)
  ([n] (Interval. 0 0 n)))

(defn hours
  "Given a number, returns a Period representing that many hours.
   Without an argument, returns a PeriodType representing only hours."
  ([] goog.date.Interval.HOURS)
  ([n] (Interval. 0 0 0 n)))

(defn minutes
  "Given a number, returns a Period representing that many minutes.
   Without an argument, returns a PeriodType representing only minutes."
  ([] goog.date.Interval.MINUTES)
  ([n] (Interval. 0 0 0 0 n)))

(defn seconds
  "Given a number, returns a Period representing that many seconds.
   Without an argument, returns a PeriodType representing only seconds."
  ([] goog.date.Interval.SECONDS)
  ([n] (Interval. 0 0 0 0 0 n)))

(defn plus
  "Returns a new date/time corresponding to the given date/time moved forwards by
   the given Period(s)."
  ([dt p] (plus- dt p))
  ([dt p & ps] (reduce plus- (plus- dt p) ps)))

(defn minus
  "Returns a new date/time object corresponding to the given date/time moved
   backwards by the given Period(s)."
  ([dt p] (minus- dt p))
  ([dt p & ps] (reduce minus- (minus- dt p) ps)))

(defn ago
  "Returns a DateTime a supplied period before the present.
  e.g. (-> 5 years ago)"
  [period]
  (minus (now) period))

(defn from-now
  "Returns a DateTime a supplied period after the present.
  e.g. (-> 30 minutes from-now)"
  [period]
  (plus (now) period))

(defn interval
  [dt-a dt-b]
  (DateRange. dt-a dt-b))

(defn start
  "Returns the start DateTime of an Interval."
  [in]
  (.getStartDate in))

(defn end
  "Returns the end DateTime of an Interval."
  [in]
  (.getEndDate in))

(defn extend
  "Returns an Interval with an end ReadableDateTime the specified Period after the
   end of the given Interval"
  [in & by]
  (interval (start in) (apply plus (end in) by)))

(defn in-millis
  "Returns the number of milliseconds in the given Interval."
  [in]
  (- (.getTime (end in)) (.getTime (start in))))

(defn to-period
  [in]
  (condp = (type in)
    Interval in
    DateRange (Interval. 0 0 0 0 0 (int (/ (in-millis in) 1000)))))

(defn in-seconds
  "Returns the number of standard seconds in the given Interval."
  [in]
  (.getTotalSeconds (to-period in)))

(defn in-minutes
  "Returns the number of standard minutes in the given Interval."
  [in]
  (int (/ (in-seconds in) 60)))

(defn in-hours
  "Returns the number of standard hours in the given Interval."
  [in]
  (int (/ (in-minutes in) 60)))

(defn in-days
  "Returns the number of standard days in the given Interval."
  [in]
  (int (/ (in-hours in) 24)))

(defn in-weeks
  "Returns the number of standard weeks in the given Interval."
  [in]
  (int (/ (in-days in) 7)))

(defn in-months
  "Returns the number of standard months in the given Interval."
  [in]
  (- (month (end in)) (month (start in))))

(defn in-years
  "Returns the number of standard years in the given Interval."
  [in]
  (- (year (end in)) (year (start in))))

(defn within?
  "With 2 arguments: Returns true if the given Interval contains the given
   ReadableDateTime. Note that if the ReadableDateTime is exactly equal to the
   end of the interval, this function returns false.
   With 3 arguments: Returns true if the start ReadablePartial is
   equal to or before and the end ReadablePartial is equal to or after the test
   ReadablePartial."
  ([i dt]
     (and (> dt (start i)) (< dt (end i))))
  ([start end test]
     (and (>= test start) (<= test end))))

(defn overlaps?
  "With 2 arguments: Returns true of the two given Intervals overlap.
   Note that intervals that satisfy abuts? do not satisfy overlaps?
   With 4 arguments: Returns true if the range specified by start-a and end-a
   overlaps with the range specified by start-b and end-b."
  ([i-a i-b] (overlaps? (start i-a) (end i-a) (start i-b) (end i-b)))
  ([start-a end-a start-b end-b]
     (or (and (before? start-b end-a) (after? end-b start-a))
         (and (after? end-b start-a) (before? start-b end-a))
         (or (= start-a end-b) (= start-b end-a)))))

(defn mins-ago
  [d]
  (in-minutes (interval d (now))))

(defn number-of-days-in-the-month
  ([dt] (number-of-days-in-the-month (year dt) (month dt)))
  ([year month] (goog.date/getNumberOfDaysInMonth year (dec month))))

(defn last-day-of-the-month
  [dt]
  (doto dt
    (.setDate (number-of-days-in-the-month dt))))

(defn first-day-of-the-month
  [dt]
  (doto dt
    (.setDate 1)))

(defn today-at
  ([hours minutes]
     (today-at hours minutes 0))
  ([hours minutes seconds]
     (today-at hours minutes seconds 0))
  ([hours minutes seconds millis]
     (date-time (doto (now)
                  (.setHourOfDay      hours)
                  (.setMinuteOfHour   minutes)
                  (.setSecondOfMinute seconds)
                  (.setMillisOfSecond millis)))))

(defn do-at* [base-date-time body-fn]
  (let [ms (- (.getTime base-date-time) (.getTime (now)))]
    (go (<! (timeout ms))
        (try (body-fn)
             (catch js/Error e)))))

(defprotocol Mappable
  (instant->map [instant]))

(defn- to-map [years months days hours minutes seconds]
  {:years   years
   :months  months
   :days    days
   :hours   hours
   :minutes minutes
   :seconds seconds})

(extend-protocol Mappable)

(extend-protocol Mappable
  DateTime
  (instant->map [dt]
    (to-map
     (.getYear dt)
     (.getMonth dt)
     (.getDate dt)
     (.getHours dt)
     (.getMinutes dt)
     (.getSeconds dt)))
  
  Interval
  (instant->map [period]
    (to-map
     (.-years period)
     (.-months period)
     (.-days period)
     (.-hours period)
     (.-minutes period)
     (.-seconds period)))

  DateRange
  (instant->map [it]
    (to-map
     (in-years it)
     (in-months it)
     (in-days it)
     (in-hours it)
     (in-minutes it)
     (in-seconds it))))

(extend-type Date
  IPrintWithWriter
  (-pr-writer [obj writer opts]
    (let [obj (js/Date. (.getTime obj))
          normalize (fn [n len]
                      (loop [ns (str n)]
                        (if (< (count ns) len)
                          (recur (str "0" ns))
                          ns)))]
      (write-all writer
                 "#inst \""
                 (str (.getUTCFullYear obj))             "-"
                 (normalize (inc (.getUTCMonth obj)) 2)  "-"
                 (normalize (.getUTCDate obj) 2)         "T"
                 (normalize (.getUTCHours obj) 2)        ":"
                 (normalize (.getUTCMinutes obj) 2)      ":"
                 (normalize (.getUTCSeconds obj) 2)      "."
                 (normalize (.getUTCMilliseconds obj) 3) "-"
                 "00:00\"")))
  IEquiv
  (-equiv [o other]
    (and (instance? Date other)
         (identical? (.toString o) (.toString other)))))

(defn fpartial
  [f & args]
  (fn [arg & more] (apply f arg (concat args more))))
