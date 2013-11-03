; Copyright 2013 Relevance, Inc.

; The use and distribution terms for this software are covered by the
; Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0)
; which can be found in the file epl-v10.html at the root of this distribution.
;
; By using this software in any fashion, you are agreeing to be bound by
; the terms of this license.
;
; You must not remove this notice, or any other, from this software.

(ns foundation.app-tools.rendering-view.client
  (:require [goog.Uri :as uri]
            [goog.events :as gevents]
            [goog.events.KeyCodes :as kc]
            [goog.events.KeyHandler :as kh]
            [domina :as dom]
            [domina.events :as events]
            [foundation.app.log :as log]
            [foundation.app.render.push :as render]
            [foundation.app.tree :as tree]
            [foundation.app.xhr :as xhr]
            [cljs.reader :as reader]
            [cljs.core.async :refer [<! chan]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def emitter (atom {:ui tree/new-app-model
                    :recording nil
                    :index 0}))

(defn run-deltas [state deltas]
  (update-in state [:ui] tree/apply-deltas deltas))

(defn step-forward [state]
  (if-let [next-step (get (:recording state) (:index state))]
    (-> state
        (run-deltas next-step)
        (update-in [:index] inc))
    (do (.log js/console "At the end of the recording, can't move forward")
        state)))

(defn step-back [state]
  (if (zero? (:index state))
    (do (.log js/console "At index 0, can't move back")
        state)
    (let [index (dec (:index state))
          next-step (get (:recording state) index)]
      (-> state
          (run-deltas (if (map? (first next-step))
                        [[:node-destroy []]]
                        (tree/invert next-step)))
          (assoc :index index)))))

(def docKh (goog.events.KeyHandler. js/document))

(defn step-forward? [key-code]
  (= key-code goog.events.KeyCodes/RIGHT))

(defn step-back? [key-code]
  (= key-code goog.events.KeyCodes/LEFT))

(defn key-handler [e]
  (let [key-code (.-keyCode e)]
    (cond (step-forward? key-code)
          (do (.preventDefault e)
              (swap! emitter step-forward))
          (step-back? key-code)
          (do (.preventDefault e)
              (swap! emitter step-back)))))

(defn enable-step-keys []
  (gevents/listen docKh "key" key-handler))

(defn on-error [response]
  (log/error :error response))

(defn initialize-step-recording [state recording index]
  (assoc state :recording recording :index index))

(defn step
  "Step through a sequence of changes. The scriipt argument is a vector containing
  vectors of deltas. Each vector of deltas is run in a single transaction and can
  be run forward or backwords."
  [recording]
  (swap! emitter initialize-step-recording recording 0)
  (enable-step-keys))

(defn step-each-delta
  "Convert a sequence of deltas into a step recording where we run on
  delta at a time."
  [recording]
  (vec (map vector (remove keyword? recording))))

(defn step-by-breakpoint
  "Convert a sequence of deltas with breakpoints into a step recording
  where each block will be run on each step."
  [recording]
  (vec (keep #(if (keyword? (first %)) nil (vec %))
             (partition-by keyword? recording))))

(defn run-recording* [recording mode]
  (case mode
    "break" (step (step-by-breakpoint recording))
    "step" (step (step-each-delta recording))
    (swap! emitter run-deltas (remove keyword? recording))))

(defn receive-and-run-recording [mode response]
  (let [recording response]
    (if (:error recording)
      (do (dom/append! (dom/by-id "content")
                       (str 
                        "<div class='alert'>"
                        "<strong>Oops!</strong> " (:error recording) "."
                        "</div>"))))
    (run-recording* (:data recording) mode)))

(defn run-recording [recording-name mode]
  (let [uri (str "http://localhost:3000/_tools/render/recordings/" recording-name)]
    (log/info :in :run-recording :uri uri)
    (go (let [res (:body (<! (xhr/GET uri)))]
          (receive-and-run-recording mode res)))))

(defn load-and-render []
  (let [uri (goog.Uri. (.toString (.-location js/document)))
        recording-name (.getParameterValue uri "recording")
        mode (.getParameterValue uri "mode")]
    (assert recording-name "recording-name is required")
    (run-recording recording-name mode)))

(defn main [config log?]
  (log/debug :in :start :msg "Starting the render driver")
  (let [input-queue (chan)
        render-fn (render/renderer "content" config)]
    (add-watch emitter :renderer
               (fn [k r o n]
                 (let [o (:ui o)
                       n (:ui n)]
                   (when (not= o n)
                     (let [deltas (tree/since-t n (tree/t o))]
                       (log/log-group "Rendering Deltas" deltas)
                       (render-fn deltas input-queue))))))
    (load-and-render)))

