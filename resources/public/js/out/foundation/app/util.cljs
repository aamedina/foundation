(ns foundation.app.util
  (:require [cljs.reader :as reader]))

(defn safe-read-string [s]
  (reader/read-string s))

(defn parse-int [s]
  (assert (or (number? s) (string? s))
          "the value passed to parse-int must be a number or a string")
  (js/parseInt s 10))

(defn read-form-if-string [x]
  (if (string? x)
    (try (safe-read-string x)
         (catch js/Error _ nil))
    x))

(defn log-group [group-name coll]
  (.group js/console group-name)
  (doseq [d coll]
    (.log js/console (pr-str (vec (take 2 d)))))
  (.groupEnd js/console))

(defn log-exceptions [f & args]
  (try (apply f args)
       (catch js/Error e
         (.groupCollapsed js/console "Caught exception" e)
         (.log js/console "Was applying function\n" f)
         (.log js/console "With arguments" (pr-str args))
         (.log js/console "Re-throwing error...")
         (.groupEnd js/console)
         (throw e))))
