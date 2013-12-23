(ns foundation.app.test)

(def ascii (map char (range 65 (+ 65 26))))

(defn rand-str
  [size alphabet]
  (apply str (repeatedly size #(rand-nth alphabet))))
