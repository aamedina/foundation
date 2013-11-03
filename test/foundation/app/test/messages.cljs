; Copyright 2013 Relevance, Inc.

; The use and distribution terms for this software are covered by the
; Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0)
; which can be found in the file epl-v10.html at the root of this distribution.
;
; By using this software in any fashion, you are agreeing to be bound by
; the terms of this license.
;
; You must not remove this notice, or any other, from this software.

(ns foundation.app.test.messages
  (:refer-clojure :exclude [type])
  (:require [foundation.app.messages :as msg]
            [cemerick.cljs.test :as t])
  (:require-macros [cemerick.cljs.test :refer [deftest run-tests is testing]]))

(deftest test-param-ns
  (let [param-ns msg/param-ns]
    (is (= "foundation.app.messages.param" param-ns))))

(deftest test-param
  (is (= :foundation.app.messages.param/input (msg/param :input))
      "namespaces the passed keyword"))

(deftest test-add-message-type
  (is (= {msg/topic :todo msg/type :clear-completed}
         (msg/add-message-type :clear-completed {msg/topic :todo}))
      "injects the transform-name into message as type")
  (is (= {msg/topic :todo msg/type :my-other-type}
         (msg/add-message-type :clear-completed {msg/topic :todo
                                                 msg/type :my-other-type}))
      "returns the original message if type is already present"))

(deftest test-fill-params
  (is (= [{msg/topic :todo, msg/type :create-todo, :content "Get 'er done."}]
         (msg/fill-params {(msg/param :content) "Get 'er done."}
                      [{msg/topic :todo, msg/type :create-todo, (msg/param :content) {}}]))
      "returns the original message with params filled")
  (is (thrown-with-msg?
       js/Error
       #"These keys are invalid: \[:bad-key\]"
       (msg/fill-params {:bad-key :bad-value} [{}]))))

(deftest test-message-params
  (is (= [(msg/param :foo), (msg/param :bar)]
         (msg/message-params
          [{(msg/param :foo) {}, :something :else}, {(msg/param :bar) {},
                                                     (msg/param :foo) {}}]))
      "collects all of the keys from messages that are params"))

(deftest test-keys-to-param-keys
  (is (= {(msg/param :age) 42, (msg/param :name) "Joe"}
         (msg/keys-to-param-keys {:age 42, :name "Joe"}))
      "turns every key into param namespaced key"))

(deftest test-fill
  (let [person-id 9001]
    (is (= [{msg/topic :person msg/type :set-age :age 42 :id person-id}]
           (msg/fill :set-age
                     [{msg/topic :person, :id person-id, (msg/param :age) {}}]
                     {:age 42}))
        "fills message-topic and params when input-map is supplied")
    (is (= [{msg/topic :todo msg/type :clear-completed}]
           (msg/fill :clear-completed [{msg/topic :todo}]))
        "fills message-topic when no input-map is supplied")
    (is (thrown-with-msg? js/Error
                          #"Missing keys"
                          (msg/fill :set-age [{(msg/param :age) {}}]))
        "fails an assertion when the input-map is missing param keys")))
