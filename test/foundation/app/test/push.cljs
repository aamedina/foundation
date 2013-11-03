; Copyright 2013 Relevance, Inc.

; The use and distribution terms for this software are covered by the
; Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0)
; which can be found in the file epl-v10.html at the root of this distribution.
;
; By using this software in any fashion, you are agreeing to be bound by
; the terms of this license.
;
; You must not remove this notice, or any other, from this software.

(ns foundation.app.test.push
  "Test rendering code with an artificial DOM."
  (:require [foundation.app.test.dom :as d]
            [foundation.app.messages :as msg]
            [foundation.app.render.push :as push]
            [cljs.core.async :refer [put! chan map> map< take!]]
            [cemerick.cljs.test :as t])
  (:require-macros [cemerick.cljs.test :refer [deftest run-tests is testing]]))

;; Handlers
;; ================================================================================

(deftest test-add-handler
  (is (= (push/add-handler {} :* [:a :b :c] :x)
         {:* {:children
              {:a {:children
                   {:b {:children
                        {:c {:handler :x}}}}}}}}))
  (is (= (-> {}
             (push/add-handler :node-create [] :a)
             (push/add-handler :node-create [:**] :b))
         {:node-create {:handler :a
                        :children {:** {:handler :b}}}})))

(deftest test-add-handlers
  (is (= (push/add-handlers [[:* [:a :b :c] :x]])
         {:* {:children
              {:a {:children
                   {:b {:children
                        {:c {:handler :x}}}}}}}}))
  (is (= (push/add-handlers [[:node-create [] :a]
                        [:node-create [:**] :b]])
         {:node-create {:handler :a
                        :children {:** {:handler :b}}}})))

(deftest test-find-handler
  (let [handlers
        (-> {}
            (push/add-handler :node-create      []                :_node-enter-root)
            (push/add-handler :node-create      [:**]             :_node-enter-any)
            (push/add-handler :node-create      [:a :b :*]        :_node-enter-a-b-any)
            (push/add-handler :transform-enable [:a :b :*]        :_transform-enter-a-b-any)
            (push/add-handler :transform-*          [:a :b :*]    :_transform-any-a-b-any)
            (push/add-handler :transform-enable [:a :b :* :d :e]  :_transform-enter-a-b-any-d-e)
            (push/add-handler :transform-enable [:* :* :* :d :*]  :_transform-enter-any-any-any-d-any)
            (push/add-handler :transform-enable [:* :* :* :f :**] :_transform-enter-any-any-any-f-any)
            (push/add-handler :transform-enable [:a :b :* :d :e]  :_transform-enter-a-b-any-d-e))]
    (is (= (push/find-handler handlers :node-create [])
           :_node-enter-root))
    (is (= (push/find-handler handlers :node-create [:a :b :c :d])
           :_node-enter-any))
    (is (= (push/find-handler handlers :transform-enable [:a :b :c])
           :_transform-enter-a-b-any))
    (is (= (push/find-handler handlers :transform-enable [:a :b :g])
           :_transform-enter-a-b-any))
    (is (= (push/find-handler handlers :transform-disable [:a :b :g])
           :_transform-any-a-b-any))
    (is (= (push/find-handler handlers :transform-enable [:a :b :c :d :e])
           :_transform-enter-a-b-any-d-e))
    (is (= (push/find-handler handlers :transform-enable [:a :b :c :d :e])
           :_transform-enter-a-b-any-d-e))
    (is (= (push/find-handler handlers :transform-enable [:z :b :c :d :e])
           :_transform-enter-any-any-any-d-any))
    (is (= (push/find-handler handlers :transform-enable [:a :b :c :f :e])
           :_transform-enter-any-any-any-f-any))
    (is (= (push/find-handler handlers :node-create [:a :b :c])
           :_node-enter-a-b-any))))

;; Rendering
;; ================================================================================

(deftest test-render-add

  (binding [d/*dom* (d/test-dom)]

    (let [;; create handlers
          r-enter (fn [r _ _] (d/set-attrs! :root {:class "active"}))
          a-enter (fn [r [o p _ v] _] (d/append! :root {:content v :attrs {:id :a}}))
          ;; create listeners
          ls (-> {}
                 (push/add-handler :node-create [:a] r-enter)
                 (push/add-handler :value [:a] a-enter))
          ;; create renderer
          r (push/renderer :root ls)]

      (r [[:node-create [:a] :map]
          [:value [:a] nil 1]]
         nil)

      (is (= (:root @d/*dom*)
             {:content nil
              :attrs {:id :root :class "active"}
              :children [{:content 1
                          :attrs {:id :a}}]})))))

(deftest test-working-with-ids
  (let [r (push/->DomRenderer (atom {:id :root}))]
    (is (nil? (push/get-parent-id r [])))
    (is (= :root (push/get-parent-id r [:a])))
    (let [root-id (push/new-id! r [])]
      (is (= root-id (push/get-parent-id r [:a])))
      (let [a-id (push/new-id! r [:a])
            b-id (push/new-id! r [:b] :b)
            c-id (push/new-id! r [:b :c])]
        (is (= :b b-id))
        (is (= a-id (push/get-id r [:a])))
        (is (= :b (push/get-id r [:b])))
        (is (= c-id (push/get-id r [:b :c])))
        (is (= :b (push/get-id r [:b]) (push/get-parent-id r [:b :c])))

        (push/delete-id! r [:a])

        (is (nil? (push/get-id r [:a])))
        (is (= c-id (push/get-id r [:b :c])))

        (push/delete-id! r [:b])
        (is (nil? (push/get-id r [:a])))
        (is (nil? (push/get-id r [:b :c])))))))

(deftest test-render-build-up-tear-down

  (binding [d/*dom* (d/test-dom)]

    (let [;; create handlers
          a-enter (fn [r [_ path] _]
                    (let [parent (push/get-parent-id r path)
                          id (push/new-id! r path :a)]
                      (d/append! parent {:content nil :attrs {:id id}})))

          b-enter (fn [r [_ path] _]
                    (let [parent (push/get-parent-id r path)
                          id (push/new-id! r path :b)
                          list-id (push/new-id! r (conj path :c) :attr-list)]
                      (d/append! parent {:content "Attributes List"
                                         :attrs {:id id}})
                      (d/append! id {:content nil
                                     :attrs {:id list-id :class "list"}
                                     :children []})))

          c-update (fn [r [_ path _ v] _]
                     (let [id (push/get-id r path)]
                       (d/destroy-children! id)
                       (doseq [x (sort v)]
                         (d/append! id {:content x}))))

          c-exit (fn [r [_ path] _]
                   (d/destroy-children! (push/get-id r path)))
          ;; create listeners
          ls (-> {}
                 (push/add-handler :node-create [:a] a-enter)
                 (push/add-handler :node-create [:a :b] b-enter)
                 (push/add-handler :value [:a :b :c] c-update)
                 (push/add-handler :node-destroy [:a :b :c] c-exit)
                 (push/add-handler :node-destroy [:**] d/default-exit))
          ;; create renderer
          r (push/renderer :root ls)]

      (r [[:node-create [:a] :map]] nil)

      (is (= (:root @d/*dom*)
             {:content nil
              :attrs {:id :root}
              :children [{:content nil :attrs {:id :a}}]}))

      (r [[:node-create [:a :b] :map]] nil)

      (is (= (:root @d/*dom*)
             {:content nil
              :attrs {:id :root}
              :children
              [{:content nil
                :attrs {:id :a}
                :children
                [{:content "Attributes List"
                  :attrs {:id :b}
                  :children
                  [{:content nil
                    :attrs {:id :attr-list :class "list"}
                    :children []}]}]}]}))

      (r [[:node-create [:a :b :c] :map]
          [:value [:a :b :c] nil [:x :y]]]
         nil)

      (is (= (:root @d/*dom*)
             {:content nil
              :attrs {:id :root}
              :children
              [{:content nil
                :attrs {:id :a}
                :children
                [{:content "Attributes List"
                  :attrs {:id :b}
                  :children
                  [{:content nil
                    :attrs {:id :attr-list :class "list"}
                    :children [{:content :x}
                               {:content :y}]}]}]}]}))

      (r [[:value [:a :b :c] nil [:z :x :y]]]
         nil)

      (is (= (:root @d/*dom*)
             {:content nil
              :attrs {:id :root}
              :children
              [{:content nil
                :attrs {:id :a}
                :children
                [{:content "Attributes List"
                  :attrs {:id :b}
                  :children
                  [{:content nil
                    :attrs {:id :attr-list :class "list"}
                    :children [{:content :x}
                               {:content :y}
                               {:content :z}]}]}]}]}))

      (r [[:node-destroy [:a :b :c]]] nil)

      (is (= (:root @d/*dom*)
             {:content nil
              :attrs {:id :root}
              :children
              [{:content nil
                :attrs {:id :a}
                :children
                [{:content "Attributes List"
                  :attrs {:id :b}
                  :children
                  [{:content nil
                    :attrs {:id :attr-list :class "list"}
                    :children []}]}]}]}))

      (r [[:node-destroy [:a :b]]] nil)

      (is (= (:root @d/*dom*)
             {:content nil
              :attrs {:id :root}
              :children [{:content nil
                          :attrs {:id :a}
                          :children []}]}))

      (r [[:node-destroy [:a]]] nil)

      (is (= (:root @d/*dom*)
             {:content nil
              :attrs {:id :root}
              :children []})))))

(defn fill-messages [messages transform-name env]
  (assert (contains? messages transform-name) (str "There is no transform named " transform-name))
  (map (partial msg/add-message-type transform-name) (transform-name messages)))

(deftest test-render-timeline

  (binding [d/*dom* (d/test-dom)]

    (let [ ;; create handlers
          t-enter (fn [r [_ path] _]
                    (let [parent (push/get-parent-id r path)
                          id (push/new-id! r path :timeline)]
                      (d/append! parent {:content nil :attrs {:id id}})))

          chart-enter (fn [r [_ path] d]
                        (let [parent (push/get-parent-id r path)
                              id (push/new-id! r path :chart)]
                          (d/append! parent {:content "Timeline Chart" :attrs {:id id}})))

          chart-transform-enable (fn [r [_ path transform-name msgs] d]
                                   (let [id (push/get-id r path)]
                                     (d/listen! id
                                                :click
                                                (fn [e]
                                                  (put! d (fill-messages {transform-name msgs}
                                                                         :group-selected
                                                                         {}))))
                                     (push/on-destroy! r path
                                                       #(d/unlisten! id :click))))

          data-enter (fn [r [_ path] _]
                       (let [parent (push/get-parent-id r path)
                             id (push/new-id! r path :chart-content)]
                         (d/append! parent {:content nil :attrs {:id id}})))

          add-chart-data-node (fn [r [_ path] _]
                                (let [parent (push/get-parent-id r path)
                                      id (push/new-id! r path (keyword (str "chart-data-" (last path))))]
                                  (d/append! parent {:content nil :attrs {:id id}})))

          data-update (fn [r [_ path _ v] _]
                        (let [parent (push/get-parent-id r path)
                              id (d/nth-child-id parent (last path))]
                          (d/set-content! id v)))

          bb-enter (fn [r delta d]
                     (let [[op path] delta
                           parent (push/get-parent-id r path)
                           id (push/get-id r (conj path :back-button))
                           id (or id (push/new-id! r path :back-button))]
                       (condp = op
                         :node-create (d/append! parent {:attrs {:id id :class :button}})
                         :value (d/set-content! id (last delta))
                         :transform-enable
                         (let [[_ _ transform-name msgs] delta]
                           (d/listen! id
                                      :click
                                      (fn [e]
                                        (put! d (fill-messages {transform-name msgs} :nav {}))))
                           (push/on-destroy! r path #(d/unlisten! id :click))))))

          ;; create listeners
          ls (-> {}
                 (push/add-handler :node-create [:t] t-enter)
                 (push/add-handler :node-create [:t :chart] chart-enter)
                 (push/add-handler :node-create [:t :chart :data] data-enter)
                 (push/add-handler :node-create [:t :chart :data :*]
                                   add-chart-data-node)
                 (push/add-handler :value [:t :chart :data :*] data-update)
                 (push/add-handler :transform-enable [:t :chart]
                                   chart-transform-enable)
                 (push/add-handler :* [:t :chart :back-button] bb-enter)
                 (push/add-handler :node-destroy [:**] d/default-exit))
          ;; create a mock input-queue
          last-user-action (atom nil)
          input-queue (map> #(reset! last-user-action %) (chan))
          r (push/renderer :root ls)]

      ;; render the page
      (r [[:node-create [:t] :map]] input-queue)

      (is (= (:root @d/*dom*)
             {:content nil
              :attrs {:id :root}
              :children [{:content nil :attrs {:id :timeline}}]}))

      (d/click! :back-button)

      (is (= @last-user-action nil))

      (r [[:node-create [:t :chart] :map]
          [:transform-enable [:t :chart]
           :group-selected [{msg/topic :timeline (msg/param :group-id) {}}]]
          [:node-create [:t :chart :data] :vector]
          [:node-create [:t :chart :back-button] :map]
          [:value [:t :chart :back-button] nil "Back to Index"]
          [:transform-enable [:t :chart :back-button] :nav [{:page :attributes}]]]
         input-queue)

      (is (= (:root @d/*dom*)
             {:content nil
              :attrs {:id :root}
              :children
              [{:content nil
                :attrs {:id :timeline}
                :children [{:content "Timeline Chart"
                            :attrs {:id :chart}
                            :children
                            [{:content nil
                              :attrs {:id :chart-content}}
                             {:content "Back to Index"
                              :attrs {:id :back-button :class :button}}]}]}]}))

      (d/click! :back-button)

      (is (= @last-user-action [{msg/type :nav :page :attributes}]))

      (d/click! :chart)

      (is (= @last-user-action
             [{msg/type :group-selected msg/topic :timeline (msg/param :group-id)
               {}}]))

      (r [[:node-create [:t :chart :data 0] :map]
          [:value [:t :chart :data 0] nil {:group-id 0 :tx-count 1}]]
         input-queue)

      (is (= (:root @d/*dom*)
             {:content nil
              :attrs {:id :root}
              :children
              [{:content nil
                :attrs {:id :timeline}
                :children
                [{:content "Timeline Chart"
                  :attrs {:id :chart}
                  :children
                  [{:content nil
                    :attrs {:id :chart-content}
                    :children [{:attrs {:id :chart-data-0}
                                :content {:group-id 0 :tx-count 1}}]}
                   {:content "Back to Index"
                    :attrs {:id :back-button :class :button}}]}]}]}))

      (r [[:value [:t :chart :data 0] nil {:group-id 0 :tx-count 2}]]
         input-queue)

      (is (= (:root @d/*dom*)
             {:content nil
              :attrs {:id :root}
              :children
              [{:content nil
                :attrs {:id :timeline}
                :children
                [{:content "Timeline Chart"
                  :attrs {:id :chart}
                  :children [{:content nil
                              :attrs {:id :chart-content}
                              :children [{:attrs {:id :chart-data-0}
                                          :content {:group-id 0 :tx-count 2}}]}
                             {:content "Back to Index"
                              :attrs {:id :back-button :class :button}}]}]}]}))


      (r [[:node-create [:t :chart :data 1] :map]
          [:value [:t :chart :data 1] nil {:group-id 1 :tx-count 3}]]
         input-queue)

      (is (= (:root @d/*dom*)
             {:content nil
              :attrs {:id :root}
              :children
              [{:content nil
                :attrs {:id :timeline}
                :children
                [{:content "Timeline Chart"
                  :attrs {:id :chart}
                  :children
                  [{:content nil
                    :attrs {:id :chart-content}
                    :children [{:attrs {:id :chart-data-0}
                                :content {:group-id 0 :tx-count 2}}
                               {:attrs {:id :chart-data-1}
                                :content {:group-id 1 :tx-count 3}}]}
                   {:content "Back to Index"
                    :attrs {:id :back-button :class :button}}]}]}]}))

      ;; remove a group
      (r [[:node-destroy [:t :chart :data 0]]]
         input-queue)

      (is (= (:root @d/*dom*)
             {:content nil
              :attrs {:id :root}
              :children
              [{:content nil
                :attrs {:id :timeline}
                :children
                [{:content "Timeline Chart"
                  :attrs {:id :chart}
                  :children [{:content nil
                              :attrs {:id :chart-content}
                              :children [{:attrs {:id :chart-data-1}
                                          :content {:group-id 1 :tx-count 3}}]}
                             {:content "Back to Index"
                              :attrs {:id :back-button :class :button}}]}]}]}))

      ;; remove the timeline chart
      (r [[:node-destroy [:t :chart]]]
         input-queue)

      (is (= (:root @d/*dom*)
             {:content nil
              :attrs {:id :root}
              :children [{:content nil :attrs {:id :timeline} :children []}]}))

      ;; check that all transforms have been removed
      (reset! last-user-action nil)
      (is (nil? @last-user-action))
      (d/click! :back-button)
      (is (nil? @last-user-action))
      (d/click! :chart)
      (is (nil? @last-user-action))

      ;; remove the page
      (r [[:node-destroy [:t]]]
         input-queue)

      (is (= (:root @d/*dom*)
             {:content nil
              :attrs {:id :root}
              :children []})))))
