(ns foundation.app.events
  (:require [goog.events :as events]
            [cljs.core.async :as async
             :refer [<! take! put! >! chan close!]]
            [cljs.core.match :as m]
            [clojure.set :as set])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]
                   [cljs.core.match.macros :refer [match]]))

(defprotocol IEvent)

(defprotocol IEventSource
  (-emit [_ event])
  (-observe [_ event]))

(defprotocol IValidate
  (-validate [_]))

(defn ^boolean event?
  [e]
  (or (satisfies? IEvent e)))

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

(defmulti effect (fn [record event]
                   (let [record-type (or (::type record) (type record))
                         event-type (or (::type event) (type event))]
                     (match [record-type event-type]
                       [record-type event-type] [record-type event-type]
                       [record-type _] [record-type :*]
                       [_ _] [:* :*]
                       :else nil))))

(defmethod effect :default [_ _] nil)

(defn effect-all
  [init coll]
  (reduce effect init coll))

(defn timeline
  [init coll]
  (reductions effect init coll))

;; tests

(declare batting-event)

(defn effect-test
  [{:keys [ab h] :or {ab 0 h 0}} e]
  (let [ab (inc ab)
        h (if (= (:result e) :hit)
          (inc h)
          h)]
    {:ab ab :h h :avg (/ h ab)}))

(defmethod effect [:batting-stats :swing]
  [record event]
  (merge record (effect-test record event)))

(defrecord BattingEvent [result]
  IEvent
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

(defn rand-weighted
  [& ks]
  (let [weighted (->> (partition 2 ks)
                      (map reverse)
                      (flatten)
                      (apply sorted-map))
        r (rand-int (reduce + (keys weighted)))
        chosen (first (filter (fn [[weight elem]] (< r weight)) weighted))]
    (if chosen
      (val chosen)
      (val (last weighted)))))

(def test-events
  (repeatedly 100 (fn [] {:result (rand-weighted :hit 30 :out 70)
                          ::type :swing})))
