(ns foundation.app.test)

(def ascii (map char (range 65 (+ 65 26))))

(defn rand-str
  [size alphabet]
  (apply str (repeatedly size #(rand-nth alphabet))))

(def rand-sym #(symbol (rand-str %1 %2)))

(def rand-key #(keyword (rand-str %1 %2)))

(defn rand-vec
  [& generators]
  (into [] (map apply generators)))

(defn rand-map
  [size kgen vgen]
  (into {} (repeatedly size #(rand-vec kgen vgen))))
