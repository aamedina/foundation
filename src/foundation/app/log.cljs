; Copyright 2013 Relevance, Inc.

; The use and distribution terms for this software are covered by the
; Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0)
; which can be found in the file epl-v10.html at the root of this distribution.
;
; By using this software in any fashion, you are agreeing to be bound by
; the terms of this license.
;
; You must not remove this notice, or any other, from this software.
(ns foundation.app.log
  (:require [foundation.app.observers :as observers]))

(defn ^:export worker? [] (nil? (.-document (js* "this"))))

(defn log-map
  [m]
  (let [d (assoc m :timestamp (.getTime (js/Date.)))]
    (condp = (get-in m [:log :level])
      :debug (js/console.debug (pr-str d))
      :error (js/console.error (pr-str d))
      :warn (js/console.warn (pr-str d))
      (js/console.log (pr-str d)))))

(defn log!
  [& args]
  (log-map (apply hash-map args)))

(defn log
  "Logs a message at level (a keyword). The message will be a map
  constructed from the key-value pairs supplied."
  [& args]
  (let [[level args]
        (if (contains? #{:debug :warn :render :error} (first args))
          [(first args) (rest args)]
          [:** args])
        message {msg/type :log msg/topic [level] :message (vec args)}]
    (if (worker?)
      (js/postMessage (pr-str message))
      (log! [:log (assoc (apply hash-map args) :level level)]))
    (observers/publish :log (assoc (apply hash-map args) :level level))))

(defn trace
  "Logs a trace message. Argument is a quoted list representing the
  function being called, with arguments."
  [call-expr]
  (log :trace :call call-expr))

(defn error
  "Logs an error message."
  [& keyvals]
  (apply log :error keyvals))

(defn debug
  "Logs a :debug level message. Use this level for debugging output
  which is less verbose than :trace."
  [& keyvals]
  (apply log :debug keyvals))

(defn info
  "Logs an :info level message. Use this level for information we may
  want to record in tests of the production system."
  [& keyvals]
  (apply log :info keyvals))

(defn warn
  "Logs a :warn level message."
  [& keyvals]
  (apply log :warn keyvals))

(defn log-group
  [group-name coll]
  (js/console.group group-name)
  (doseq [d coll]
    (js/console.log (pr-str d)))
  (js/console.groupEnd))

(defn log-exceptions [f & args]
  (try (apply f args)
       (catch js/Error e
         (.groupCollapsed js/console "Caught exception" e)
         (.log js/console "Was applying function\n" f)
         (.log js/console "With arguments" (pr-str args))
         (.log js/console "Re-throwing error...")
         (.groupEnd js/console)
         (throw e))))
