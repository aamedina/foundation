(ns foundation.app.relation
  (:refer-clojure :exclude [divide name])
  (:require [clojure.set :as set
             :refer [project select union intersection difference join]]
            [foundation.app.data.combinatorics :as combo
             :refer [cartesian-product]]
            [foundation.app.component :as component :refer [start stop]]
            [foundation.app.data.dependency :as deps]
            [foundation.app.messages :as msg]
            [foundation.app :as app]
            [foundation.app.dataflow :as df]
            [dommy.template]
            [clojure.string :as str]
            [clojure.core.reducers :as r]
            [clojure.data :refer [diff]]
            [cljs.core.async :as async :refer [<! put! take! chan map> >!]]
            [cljs.reader :as reader]
            [goog.module.ModuleManager])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]
                   [foundation.app.macros :refer [defrel]]))

(defn resolve-var
  [ns-qualified]
  (-> (str ns-qualified)
      (clojure.string/replace #":" "")
      (clojure.string/split #"\.|/")
      (#(apply aget (into [js/self] %)))))

(defn record
  [& attributes]
  (apply hash-map (interpose nil attributes)))

(defn product
  [xrel yrel]
  (->> (cartesian-product xrel yrel)
       (r/map #(merge (first %) (second %)))
       (into #{})))

(defn divide
  ([xrel yrel]
     (let [xs (set (keys (first xrel))) ys (set (keys (first yrel)))]
       (divide xrel yrel (set/difference xs ys))))
  ([xrel yrel ks]
     (-> (product (set/project xrel ks) yrel)
         (set/difference xrel)
         (project ks)
         (#(set/difference (set/project xrel ks) %)))))

(defrecord Relvar [path behavior schema rel]
  component/Lifecycle
  (start [relvar])
  (stop [relvar])
  dommy.template/PElement
  (-elem [relvar]))

(reader/register-tag-parser! "foundation.app.relation.Relvar" map->Relvar)

(defn relvar
  [spec]
  (map->Relvar spec))

(def delta-enum
  #{:node-create :node-destroy :value :attr :transform-enable
    :transform-disable})

(def behavior-enum
  #{:transform :emit :derive :effect})

(def input-spec-enum
  #{:map :map-seq :default :single-val})

(defrel root
  {:path []
   :schema {}
   :template {}
   :behavior {:transform [[:op [:path] identity]]
              :derive    #{[#{[:in]} [:path] identity]}
              :effect    #{[#{[:in]} identity]}
              :emit      [[#{[:in]} identity]]}})

(defrecord Effect [type topic ns-qualified f])

(defrel effects {})

(defrecord Transform [type topic ns-qualified f])

(defrel transforms {})

(defrecord Derivation [type topic ns-qualified port f])

(defrel derivations {})

(defn consume-effects
  [app service]
  (start service))

(defrecord DataModel []
  component/Lifecycle
  (start [dataflow])
  (stop [dataflow]))

(defrecord AppModel []
  component/Lifecycle
  (start [dataflow])
  (stop [dataflow]))

(defrecord Service [app effects]
  component/Lifecycle
  (start [service])
  (stop [service]))

(defrecord Renderer [render-queue render-config]
  component/Lifecycle
  (start [dataflow])
  (stop [dataflow]))

(defrecord Transformer [effect-queue app-model-queue behavior worker]
  component/Lifecycle
  (start [dataflow])
  (stop [dataflow]))

(defrecord Effector [effect-dispatcher input output]
  component/Lifecycle
  (start [effector]
    (go-loop [message (<! output)]
      (effect-dispatcher message input)
      (recur (<! output)))
    effector)
  (stop [effector] effector))

(defrecord Dataflow [description]
  component/Lifecycle
  (start [dataflow]
    (assoc dataflow
      :description (-> description
                       (update-in [:transform] df/transform-maps)
                       (update-in [:derive] df/derive-maps)
                       (update-in [:continue] (comp set df/output-maps))
                       (update-in [:effect] (comp set df/output-maps))
                       (update-in [:emit] df/output-maps)
                       (update-in [:derive] df/sort-derive-fns)
                       (update-in [:input-adapter] df/add-default identity))))
  (stop [dataflow] dataflow))

(defrecord Application [state description input output app-model dataflow
                        transformer effector emitter]
  component/Lifecycle
  (start [app]
    (let [start-messages
          (cond (:focus description)
                (app/create-start-messages (:focus description))

                :else
                [{msg/topic msg/app-model msg/type
                  :subscribe :paths [[]]}])
          init-messages (vec (mapcat :init (:transform description)))]
      
      (app/receive-input-message state dataflow input)
      (app/send-effects state dataflow output)
      (app/continue-inputs state dataflow input)
      (app/send-app-model-deltas state dataflow app-model)
      
      (doseq [message (concat start-messages init-messages)]
        (put! input message))
      app))
  (stop [app] app))

(defn normalize-description
  [description]
  (-> description
      app/standardize-pre-if-exists
      app/standardize-post-app-model-if-exists
      (update-in [:emit] app/ensure-default-emitter)
      (update-in [:input-adapter] app/ensure-input-adapter)
      (update-in [:transform] app/rekey-transforms)))

(defn build
  [{:keys [render-config] :as description}]
  (let [description (normalize-description description)]
    (map->Application
     {:state (atom {:data-model {}})
      :description description
      :dataflow (component/using
                 (map->Dataflow description)
                 [:description])
      :transformer (component/using
                    (map->Transformer description)
                    [])
      :effector (component/using
                 (map->Effector description)
                 [])
      :renderer (component/using
                 (map->Renderer render-config)
                 [:input])
      :input (chan (async/buffer 32))
      :output (chan (async/buffer 32))
      :app-model (chan (async/buffer 32))})))

(defn set-value-transform [old-value message]
  (:value message))

(defn forward-effect
  [inputs]  
  [(:message inputs)])

(def app
  {:transform [[:set-value [:greeting] set-value-transform]]
   :effect #{[#{[:greeting]} forward-effect]}
   :emit [[#{[:greeting]} (app/default-emitter [])]]})
