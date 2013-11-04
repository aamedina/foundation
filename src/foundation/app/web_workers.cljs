(ns foundation.app.web-workers
  (:require [cljs.core.async :refer [put! <! chan]]
            [foundation.app.render.push :as push-render]
            [cljs.reader :as reader])
  (:require-macros [cljs.core.async.macros :refer [go-loop]]))

(defn create-render-queue [config input-queue]
  (assert (:id config) "render config must have :id")
  (assert (:config config) "render config must have :config")
  (put! push-render-queue (:id config) ((:config config)) input-queue))

(defn run-on-web-worker! [worker-source & {:keys [render]}]
  (let [worker-input-queue (chan)
        render-queue (create-render-queue render worker-input-queue)
        worker (js/Worker. worker-source)]
    (go-loop [message (<! worker-input-queue)]
      (.postMessage worker (pr-str %))
      (recur (<! worker-input-queue)))
    (.addEventListener worker
                       "message"
                       (fn [e]
                         (put! render-queue (reader/read-string (.-data e)))))))
