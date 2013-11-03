(ns foundation.app.templates
  (:require [clojure.string :as string]
            [clojure.java.io :as io]
            [clojure.zip :as zip]
            [dommy.macros]
            [riddley.walk :refer [walk-exprs macroexpand-all]]
            [hickory.core :refer [as-hiccup as-hickory]]
            [hickory.convert :as convert :refer [hickory-to-hiccup]]
            [hickory.zip :refer [hickory-zip hiccup-zip]]
            [hiccup.core :refer [html]]
            [hiccup.def :refer [defelem defhtml wrap-attrs]])
  (:import java.io.File))

(defn gen-id
  [arg]
  {:id (str (gensym))
   :argkey (keyword arg)
   :arg arg})

(defn bound-attrs
  [attrs bound]
  (when (some #(contains? bound %) (vals attrs))
    (filter #(contains? bound (val %)) attrs)))

(defn bound-content
  [content bound]
  (when (some #(contains? bound %) content)
    (filter #(contains? bound %) content)))

(defn update-loc
  [loc bound bindings]
  (if (map? (zip/node loc))
    (let [node (zip/node loc)]
      (if-let [attrs (bound-attrs (:attrs node) bound)]
        (let [[new-bindings new-node]
              (reduce (fn [[bindings node] [attr-name bound-sym]]
                        (if-not (= attr-name :id)
                          [(update-in bindings [bound-sym] assoc
                                      :type :attr :attr-name attr-name)
                           (update-in node [:attrs] assoc attr-name
                                      (str (:arg (get bindings bound-sym)))
                                      :id bound-sym)]
                          [(dissoc bindings bound-sym) node]))
                      [bindings node] attrs)]
          [(zip/replace loc new-node) bound new-bindings])
        (if-let [content (bound-content (:content node) bound)]
          (let [new-node
                (-> (update-in node [:attrs] assoc :id (first content))
                    (update-in [:content]
                               #(mapv (fn [x]
                                        (if (= (first content) x)
                                          (str (:arg (get bindings
                                                          (first content))))
                                          x)) %)))
                new-bindings (assoc-in bindings [(first content) :type] :content)]
            [(zip/replace loc new-node) bound new-bindings])
          [loc bound bindings])))
    [loc bound bindings]))

(defn zip-nodes
  [nodes bound bindings]
  (loop [loc (hickory-zip nodes) bound bound bindings bindings]
    (cond (zip/end? loc)
          [bindings (zip/root loc)]
          :else
          (let [[updated-loc bound bindings] (update-loc loc bound bindings)]
            (recur (zip/next updated-loc) bound bindings)))))

(defn update-node
  [loc locals]
  (let [node (zip/node loc)]
    (if (symbol? node)
      [(zip/replace loc (str node)) (assoc locals (str node) node)]
      [loc locals])))

(defn collect-locals
  [nodes]
  (loop [loc (hiccup-zip nodes) locals {}]
    (if (zip/end? loc)
      (do (println nodes)
          [locals (zip/root loc)])
      (let [[updated-loc locals] (update-node loc locals)]
        (recur (zip/next loc) locals)))))

(defmacro deftemplate
  [name args & body]
  (let [binding-args (-> (first (filter #(when-let [m (meta %)]
                                           (contains? m :bindings)) args))
                         (get :keys))
        id-maps (map gen-id binding-args)
        by-argkey (group-by :argkey id-maps)
        by-id (group-by :id id-maps)
        bound (keys by-id)
        bindings (zipmap bound (map first (vals by-id)))
        body (walk-exprs #(contains? (set binding-args) %)
                         #(-> (first (get by-argkey (keyword %)))
                              (get :id)) body)
        nodes (first (convert/hiccup-fragment-to-hickory body))
        [bindings zipped] (zip-nodes nodes (set bound) bindings)
        as-hiccup
        (->> (hickory-to-hiccup zipped)
             (walk-exprs #(contains? (set (map str binding-args)) %)
                         #(:arg (first (get by-argkey (keyword %))))))]
    `(def ~name
       (fn [] [~(zipmap (map :argkey (vals bindings))
                        (map #(dissoc % :arg :argkey) (vals bindings)))
               (dommy.macros/deftemplate ~(gensym) ~args ~as-hiccup)]))))
