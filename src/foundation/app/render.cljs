(ns foundation.app.render
  (:require [foundation.app.util :as util]
            [cljs.core.async :as async :refer [<! put! >! take! chan
                                               sliding-buffer alts!]]
            [foundation.app.data.component :as c :refer [Lifecycle]]
            [foundation.app.data.dependency :as d :refer [graph depend]]
            [foundation.app.ui :as ui]
            [goog.events :as e]
            [goog.dom :as gdom]
            [dommy.core :as dom]
            [dommy.template :as tmpl])
  (:require-macros [cljs.core.async.macros :refer [go-loop go]]
                   [dommy.macros :refer [node sel sel1]])
  (:import [goog.ui IdGenerator]
           [goog.events EventHandler InputHandler FocusHandler MouseWheelEvent
            MouseWheelHandler ActionEvent EventType KeyEvent ActionHandler
            FileDropHandler OnlineHandler KeyHandler]
           [goog.dom ViewportSizeMonitor]))

(enable-console-print!)

(defmulti render (fn [renderer [op path _ _] input-queue pid id] [op path]))

(defn guid [] (.getNextUniqueId (IdGenerator/getInstance)))

(defn log-fn [deltas] (util/log-group "Rendering Deltas" deltas))

(defprotocol IEventDelegate
  (-find-dispatches [_ t e])
  (-dispatch-action [_ e])
  (-dispatch-key [_ e])
  (-dispatch-focus [_ e])
  (-dispatch-scroll [_ e])
  (-dispatch-drop [_ e])
  (-dispatch-online [_ e])
  (-dispatch-resize [_ e]))

(defn event-delegate
  [renderer]
  (if (and (seq @(:handlers renderer))
           (every? #(not (.isDisposed %)) (vals @(:handlers renderer))))
    @(:handlers renderer)
    (let [action-handler (ActionHandler. js/document)
          key-handler (KeyHandler. js/document)
          focus-handler (FocusHandler. js/document)
          file-drop-handler (FileDropHandler. js/document)
          scroll-handler (MouseWheelHandler. js/document)
          online-handler (OnlineHandler. js/document)
          resize-handler (ViewportSizeMonitor/getInstanceForWindow)
          handler (doto (EventHandler. renderer)
                    (.listen action-handler
                             ActionHandler.EventType.BEFOREACTION
                             (fn [e] (-dispatch-action renderer e)))
                    (.listen action-handler
                             ActionHandler.EventType.ACTION
                             (fn [e] (-dispatch-action renderer e)))
                    (.listen key-handler
                             KeyHandler.EventType.KEY
                             (fn [e] (-dispatch-key renderer e)))
                    (.listen focus-handler
                             FocusHandler.EventType.FOCUSIN
                             (fn [e] (-dispatch-focus renderer e)))
                    (.listen focus-handler
                             FocusHandler.EventType.FOCUSOUT
                             (fn [e] (-dispatch-focus renderer e)))
                    (.listen file-drop-handler
                             FileDropHandler.EventType.DROP
                             (fn [e] (-dispatch-drop renderer e)))
                    (.listen scroll-handler
                             MouseWheelHandler.EventType.MOUSEWHEEL
                             (fn [e] (-dispatch-scroll renderer e)))
                    (.listen online-handler
                             OnlineHandler.EventType.ONLINE
                             (fn [e] (-dispatch-online renderer e)))
                    (.listen online-handler
                             OnlineHandler.EventType.OFFLINE
                             (fn [e] (-dispatch-online renderer e)))
                    (.listen resize-handler
                             EventType.RESIZE
                             (fn [e] (-dispatch-resize renderer e))))]
      {:action action-handler
       :key key-handler
       :event handler
       :focus focus-handler
       :file file-drop-handler
       :online online-handler
       :scroll scroll-handler
       :resize resize-handler})))

(defn node-seq
  [env]
  (tree-seq (constantly true)
            (fn [n]
              (map #(get n %) (remove #{:id :on-destroy :_data} (keys n))))
            env))

(defn run-on-destroy!
  [env]
  (let [nodes (node-seq env)]
    (doseq [f (mapcat :on-destroy nodes)]
      (f))))

(def refresh-queued false)

(defprotocol IRenderer
  (-get-id [_ path])
  (-parent-id [_ path])
  (-new-id [_ path] [_ path id])
  (-delete-id [_ path])
  (-on-destroy [_ path f])
  (-set-data [_ path data])
  (-get-data [_ path])
  (-drop-data [_ path]))

(defprotocol IRender
  (-render [_ renderer]))

(defn extend-component
  [component renderer event-type]
  (-set-data renderer [:_event event-type] 
             ((fnil conj []) (-get-data renderer [:_event event-type])
              (with-meta component
                {:dom (-render (ui/-render component) renderer)})))
  component)

(extend-type js/Element
  IMeta
  (-meta [el] (.-meta el))
  IWithMeta
  (-with-meta [el meta]
    (set! (.-meta el) meta)
    el))

(extend-type js/DocumentFragment
  IMeta
  (-meta [el] (.-meta el))
  IWithMeta
  (-with-meta [el meta]
    (set! (.-meta el) meta)
    el))

(defn bind-component-events
  [x renderer]
  (cond-> x
    (satisfies? ui/IFocusable x) (extend-component renderer :focus)
    (satisfies? ui/IClickable x) (extend-component renderer :action)
    (satisfies? ui/IKeyTarget x) (extend-component renderer :key)
    (satisfies? ui/IResizeable x) (extend-component renderer :resize)
    (satisfies? ui/IScrollable x) (extend-component renderer :scroll)
    (satisfies? ui/IInput x) (extend-component renderer :input)
    (satisfies? ui/IOnline x) (extend-component renderer :online)
    (satisfies? ui/IRender x) (ui/-render)))

(extend-protocol IRender
  nil
  (-render [_ _] nil)

  default
  (-render [x renderer]
    (let [dom-content
          (bind-component-events x renderer)]
      (with-meta dom-content {:component x})))

  PersistentVector
  (-render [x renderer] (node x))

  Keyword
  (-render [x renderer] (sel1 x))

  function
  (-render [f renderer] (-render (f) renderer))

  js/Element
  (-render [x renderer] x))

(defn sort-deps
  [deps pid]
  (->> (d/transitive-dependents @deps pid)
       (remove nil?)
       (sort (d/topo-comparator @deps))))

(defrecord Renderer [env deps render-fn handlers]
  Lifecycle
  (start [renderer]
    (let [handlers (reset! handlers (event-delegate renderer))
          render-fns (methods render)
          input (:input renderer)
          render-fn
          (fn [deltas]
            (when-let [deltas
                       (seq (keep (fn [[op path _ _ :as delta]]
                                    (let [f (get render-fns [op path])]
                                      (if f
                                        [delta f]
                                        (if (= op :node-destroy)
                                          [delta nil])))) deltas))]
              (log-fn (map #(vec (take 2 %)) (map first deltas)))
              (doseq [[[op path _ _ :as d] f] deltas]
                (let [id (or (-get-id renderer path)
                             (-new-id renderer path))
                      pid (-parent-id renderer path)]
                  (case op
                    :node-create
                    (when-let [dom (-render (f renderer d input pid id)
                                            renderer)]
                      (let [c (:component (meta dom))
                            children (when (satisfies? ui/IWithChildren c)
                                       (map (fn [x]
                                              (-> (sel1 dom x)
                                                  meta
                                                  :component
                                                  (-render renderer)))
                                            (ui/-with-children c)))
                            parent (if (and (satisfies? ui/IParentNode c))
                                     ((ui/-parent-node c)
                                      (-get-data renderer [pid]))
                                     (-get-data renderer [pid]))]
                        (if parent
                          (dom/append! parent dom)
                          (dom/append! js/document.body dom))
                        (-set-data renderer [id] dom)
                        (when (satisfies? ui/IPostProcess c)
                          (ui/-post-process c))
                        (doseq [child children]
                          (when (satisfies? ui/IPostProcess c)
                            (ui/-post-process c))))
                      (swap! deps depend id pid))
                    :node-update
                    (if-let [deps (seq (sort-deps deps pid))]
                      (doseq [dep deps]
                        (let [dep-pid (-parent-id renderer dep)]
                          (when-let [dom
                                     (-render (f renderer d input dep-pid dep)
                                              renderer)]
                            (when-let [old-content
                                       (or (-get-data renderer [id])
                                           (gdom/getElement
                                            (.-id dom)))]
                              (dom/replace! old-content dom))
                            (-set-data renderer [dep] dom))))
                      (when-let [dom
                                 (-render (f renderer d input pid id)
                                          renderer)]
                        (let [c (:component (meta dom))
                              dom (if (satisfies? ui/IRender dom)
                                    (node (ui/-render dom))
                                    dom)
                              parent (if (and (satisfies? ui/IParentNode c))
                                       ((ui/-parent-node c)
                                        (-get-data renderer [pid]))
                                       (-get-data renderer [pid]))]
                          (when-let [old-content (or (-get-data renderer [id])
                                                     (gdom/getElement
                                                      (.-id dom)))]
                            (dom/replace! old-content dom)
                            (-set-data renderer [id] dom))
                          (js/console.log (satisfies? ui/IPostProcess c)
                                          c)
                          (when (satisfies? ui/IPostProcess c)
                            (ui/-post-process c)))))
                    :node-destroy
                    (doseq [dep (sort-deps deps pid)]
                      (let [dep-pid (-parent-id renderer dep)]
                        (when-let [old-content (-get-data renderer [dep])]
                          (dom/remove! old-content))
                        (-delete-id renderer [dep])
                        (-drop-data renderer [dep]))))))))]
      (add-watch (:app-state renderer) :root
                 (fn [_ _ _ {:keys [deltas]}]
                   (if (exists? js/requestAnimationFrame)
                     (js/requestAnimationFrame #(render-fn deltas))
                     (js/setTimeout render-fn 16))))
      (render-fn [[:node-create [] nil nil]])))
  
  (stop [renderer]
    (doseq [handler (vals @handlers)]
      (.dispose handler)))

  IEventDelegate
  (-find-dispatches [renderer event-type e]
    (let [registered (-get-data renderer [:_event event-type])]
      (filter (fn [x]
                (let [el (gdom/getElement (.-id ((comp :dom meta) x)))]
                  (or (identical? (.-innerHTML el) (.-innerHTML (.-target e)))
                      (when (instance? js/Element (.-target e))
                        (dom/descendant? (.-target e) el))
                      (satisfies? ui/IResizeable x))))
              registered)))
  (-dispatch-action [renderer e]
    (doseq [c (-find-dispatches renderer :action e)]
      (cond-> c
        (and (identical? (.-type e) "action")
             (satisfies? ui/IClickable c))
        (ui/-click e)
        (and (identical? (.-type e) "beforeaction")
             (satisfies? ui/IBeforeClick c))
        (ui/-before-click e))))
  (-dispatch-key [renderer e]
    (doseq [c (-find-dispatches renderer :key e)]
      (when (satisfies? ui/IKeyTarget c)
        (ui/-keydown c e)
        (ui/-keyup c e))))
  (-dispatch-focus [renderer e]
    (doseq [c (-find-dispatches renderer :focus e)]
      (when (satisfies? ui/IFocusable c)
        (cond-> c
          (identical? (.-type e) "focusin") (ui/-focus e)
          (identical? (.-type e) "focusout") (ui/-blur e)))))
  (-dispatch-scroll [renderer e]
    (doseq [c (-find-dispatches renderer :scroll e)]
      (when (satisfies? ui/IScrollable c)
        (ui/-scroll c e))))
  (-dispatch-drop [renderer e]
    (doseq [c (-find-dispatches renderer :drop e)]
      (when (satisfies? ui/IFileDrop c)
        (ui/-drop c e))))
  (-dispatch-online [renderer e]
    (doseq [c (-find-dispatches renderer :online e)]
      (when (satisfies? ui/IOnline c)
        (ui/-online c e))))
  (-dispatch-resize [renderer e]    
    (doseq [c (-find-dispatches renderer :resize e)]      
      (when (satisfies? ui/IResizeable c)
        (ui/-resize c e))))
  
  IRenderer
  (-get-id [_ path]
    (if (seq path)
      (get-in @env (conj path :id))
      (:id @env)))
  (-parent-id [r path]
    (when (seq path)
      (-get-id r (vec (butlast path)))))
  (-new-id [r path] (-new-id r path (guid)))
  (-new-id [_ path id] (swap! env assoc-in (conj path :id) id) id)
  (-delete-id [_ path]
    (run-on-destroy! (get-in @env path))
    (swap! env assoc-in path nil))
  (-on-destroy [_ path f]
    (swap! env update-in (conj path :on-destroy) (fnil conj []) f))
  (-set-data [_ path data]
    (if (seq path)
      (swap! env assoc-in (concat [:_data] path) data)
      (swap! env assoc-in [:_data :id] data)))
  (-get-data [_ path]
    (if (seq path)
      (get-in @env (concat [:_data] path))
      (get-in @env [:_data :id])))
  (-drop-data [_ path]
    (if (seq path)
      (swap! env update-in
             (concat [:_data] (butlast path)) dissoc (last path))
      (swap! env update-in [:_data :id] dissoc (last path)))))

(defn renderer
  ([root-id]
     (renderer root-id log-fn))
  ([root-id render-fn]
     (map->Renderer {:env (atom {:id root-id})
                     :deps (atom (graph))
                     :render-fn render-fn
                     :handlers (atom {})})))

(defmethod render :default
  [renderer [op path _ _] input-queue pid id]
  "Default render implementation. Implemented as a no-op and returns nil."
  (println "No matching render method for:" [op path]))
