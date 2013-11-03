; Copyright 2013 Relevance, Inc.

; The use and distribution terms for this software are covered by the
; Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0)
; which can be found in the file epl-v10.html at the root of this distribution.

; By using this software in any fashion, you are agreeing to be bound by
; the terms of this license.
; You must not remove this notice, or any other, from this software.

(ns foundation.test
  (:require [foundation.app :as app]
            [cljs.core.async :refer [<! timeout]])
  (:require-macros [cljs.core.async.macros :refer [go-loop]]))

(defn run-sync! [app script & {:keys [begin timeout-ms wait-for]}]
  (assert (or (nil? begin)
              (= begin :default)
              (vector? begin))
          "begin must be nil, the keyword :default or a vector of messages")
  (assert (or (nil? wait-for)
              (every? #(contains? #{:output :app-model} %) wait-for))
          "wait-for must be nil or a seq with a subset of #{:output :app-model}")
  (let [timeout-ms (or timeout-ms 1000)
        script (conj (vec (butlast script)) (with-meta (last script) {::last true}))
        record-states (atom [@(:state app)])]
    (add-watch (:state app) :state-watch
               (fn [_ _ _ n]
                 (swap! record-states conj n)))
    
    (cond (= begin :default) (app/begin app)
          (vector? begin) (app/begin app begin))
    
    (app/run! app script)

    (go-loop [tout timeout-ms]
      (let [last-input (-> app :state deref :io.pedestal.app/input)]
        (when (not= (meta last-input) {::last true})
          (if (neg? tout)
            (throw (Exception. (str "Test timeout after " timeout-ms "ms.\n"
                                    " Last input: " last-input "\n"
                                    " Meta: " (meta last-input))))
            (<! (timeout 20))
            (recur (- tout 20))))))

    (if (seq wait-for)
      (doseq [k wait-for]
        (go-loop [queue (:queue @(.state (k app)))
                  c 0]
          (when (> c 3)
            (throw (str "The queue " k " is not being consumed.")))
          (when-not (zero? (count queue))
            (<! (timeout 20))
            (let [new-queue (:queue @(.state (k app)))]
              (recur new-queue
                     (if (= new-queue queue)
                       (inc c)
                       0)))))))
    @record-states))
