(ns foundation.app.events
  (:require [goog.events :as events]
            [cljs.core.async :as async
             :refer [<! take! put! >! chan close!]])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

(defprotocol IEventSource
  (-emit [_ event])
  (-observe [_ event]))

(defprotocol IValidate
  (-validate [_]))

(defn ^boolean valid?
  [event]
  (-validate event))

(defprotocol IEffect
  (-effect [record event])
  (-registered [record]))

(defn apply-effect
  [record event]
  {:pre [(satisfies? IEffect record)
         (contains? (-registered record) (type event))
         (valid? event)]}
  (-effect record event))

;; tests

(declare batting-event)

(defn effect-test
  [{:keys [ab h] :or {ab 0 h 0}} e]
  (let [e (batting-event e)
        ab (inc ab)
        h (if (= (:result e) :hit)
          (inc h)
          h)]
    {:ab ab :h h :avg (/ h ab)}))

(defrecord BattingEvent [result]
  IValidate
  (-validate [e] (boolean (:result e))))

(defrecord BattingStats [ab h avg]
  IEffect
  (-effect [record event] (effect-test record event))
  (-registered [_] #{BattingEvent}))

(defn batting-event
  [e]
  (if-not (instance? BattingEvent e)
    (map->BattingEvent e)
    e))

(defn test-validate
  []
  (and (= (valid? (batting-event {:result :hit}))
          true)
       (= (valid? (batting-event {:result nil}))
          false)))

(defn test-apply-effect
  []
  (= (apply-effect (map->BattingStats {})
                   (map->BattingEvent {:result :hit}))
     {:ab 1 :h 1 :avg 1}))
