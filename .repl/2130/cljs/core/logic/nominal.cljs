(ns cljs.core.logic.nominal
  (:refer-clojure :exclude [== hash -hash])
  (:require [cljs.core.logic :as l
             :refer [empty-s lcons lvar to-s == reify-lvar-name fail succeed
                     walk* conso s# u# != copy-term rembero membero member1o
                     emptyo resto firsto appendo reifyg partial-map predc
                     featurec everyg composeg solutions pair ext-run-csg
                     run-constraints* addcg make-cs var-rands force-ans
                     verify-all-bound enforce-constraints add-attr entangle
                     !=c nafc treec -reify tree-term? distribute rem-attr
                     get-attr distincto cgoal lvar? remcg constrain-tree ext
                     subst-val? unify occurs-check -reify*]]
            [cljs.core.logic.protocols :as proto
             :refer [walk ifa -step -rator addc -entailed? -runnable? id
                     constraints-for take* root-var root-val -prefix
                     -with-prefix tree-constraint? with-id remc
                     -constrain-tree ext-run-cs ext-no-check walk-term]]
            [cljs.core :as core])
  (:require-macros [cljs.core.logic.macros
                    :refer [umi uai llist composeg* bind* mplus* -inc
                            conde fresh -run run run* run-db run-db* run-nc
                            run-nc* all is pred project trace-lvars trace-s
                            log ifa* ifu* conda condu lvaro nonlvaro fnm
                            defnm fne defne matche fna fnu defna defnu matcha
                            matchu tabled let-dom fnc defnc]]))

;; ===========================================================================
;; Nominal unification with fresh, hash and tie.
;;
;; Some references / inspiration:
;; alphaKanren - http://www.cs.indiana.edu/~webyrd/alphamk/alphamk.pdf
;; Nominal Unification - http://www.cl.cam.ac.uk/~amp12/papers/nomu/nomu-jv.pdf
;; http://code.google.com/p/iucs-relational-research/source/browse/trunk/lib/minikanren/nominal.sls

;; ===========================================================================
;; Nominal unification protocols

(defprotocol INomSwap
  (swap-noms [t swap s]))

(defn nom-swap [a swap]
  (cond
   (= a (first swap)) (second swap)
   (= a (second swap)) (first swap)
   :else a))

(declare suspc)

(extend-protocol INomSwap
  nil
  (swap-noms [t swap s] [t s])

  default
  (swap-noms [t swap s]
    (cond (coll? t)
          (if (seq t)
            (let [[tfirst s] (swap-noms (first t) swap s)
                  [tnext s] (swap-noms (next t) swap s)]
              [(with-meta (cons tfirst tnext) (meta t)) s])
            [t s])
          (map? t)
          (let [[tkvs s] (swap-noms (seq t) swap s)]
            [(into {} tkvs) s])
          :else [t s]))

  l/LVar
  (swap-noms [t swap s]
    (let [t (walk s t)]
      (if (lvar? t)
        (let [v (with-meta (lvar) (meta t))
              rt (root-val s t)
              s (-> (if (subst-val? rt) (ext-no-check s v rt) s)
                    (entangle t v)
                    ((suspc v t swap)))]
          [v s])
        (swap-noms t swap s))))

  l/LCons
  (swap-noms [t swap s]
    (let [[tfirst s] (swap-noms (proto/lfirst t) swap s)
          [tnext s] (swap-noms (proto/lnext t) swap s)]
      [(with-meta (lcons tfirst tnext) (meta t))
       s]))

  PersistentVector
  (swap-noms [t swap s]
    (let [[ts s] (swap-noms (seq t) swap s)]
      [(vec ts) s])))

;; ===========================================================================
;; Nom

(declare nom)

(deftype Nom [lvar]
  proto/IBindable

  Object
  (toString [_]
    (str "<nom:" (:name lvar) ">"))

  IHash
  (cljs.core/-hash [_] (cljs.core/hash lvar))

  IEquiv
  (-equiv [this o]
    (and (instance? Nom o)
         (= lvar (:lvar o))))
  
  IMeta
  (-meta [this] (meta lvar))

  IWithMeta
  (-with-meta [this new-meta]
    (nom (with-meta lvar new-meta)))
  

  ILookup
  (-lookup [this k]
    (-lookup this k nil))
  (-lookup [_ k not-found]
    (case k
      :lvar lvar
      :name (:name lvar)
      :oname (:oname lvar)
      not-found))

  proto/IReifyTerm
  (reify-term [v s]
    (ext s v (symbol (str (if (-> s meta (:reify-noms true))
                            "a"
                            (:oname v)) "_" (count s)))))

  INomSwap
  (swap-noms [t swap s]
    [(nom-swap t swap) s])

  IPrintWithWriter
  (-pr-writer [x writer opts]
    (-write writer (str "<nom:" (:name x) ">"))))

(defn nom [lvar]
  (Nom. lvar))

(defn nom? [x]
  (instance? Nom x))

;; ===========================================================================
;; hash: ensure a nom is free in a term

(declare tie? hash)

(defn- -hash [a x]
  (reify
    Object
    (toString [_]
      (str a "#" x))
    proto/IConstraintStep
    (-step [this s]
      (let [a (walk s a)
            x (walk s x)]
        (reify
          IFn
          (-invoke [_ s]
            ((composeg*
              (remcg this)
              (fn [s]
                (cond
                 (and (lvar? a) (lvar? x) (= x a)) nil
                 (and (nom? a) (nom? x) (= x a)) nil
                 (and (not (lvar? a)) (not (nom? a))) nil
                 (and (nom? a) (tie? x) (= (:binding-nom x) a)) s
                 (and (tree-term? x)
                      (or (not (tie? x)) (nom? a)))
                 ((constrain-tree x
                                  (fn [t s] ((hash a t) s))) s)
                 :else s))) s))
          proto/IRunnable
          (-runnable? [_]
            (if (lvar? a)
              (or (and (lvar? x) (= x a))
                  (and (tree-term? x) (not (tie? x))))
              (or (not (nom? a))
                  (not (lvar? x))))))))
    proto/IConstraintOp
    (-rator [_] `cljs.core.logic.nominal/hash)
    (-rands [_] [a x])
    proto/IReifiableConstraint
    (-reifyc [_ v r s]
      (let [x (walk* r (walk* s x))
            a (walk* r (walk* s a))]
        ;; Filter constraints unrelated to reified variables.
        (when (and (symbol? a) (empty? (->> (list x) flatten (filter lvar?))))
          (symbol (str a "#" x)))))

    proto/IConstraintWatchedStores
    (-watched-stores [this] #{::l/subst})))

(defn hash [a t]
  (cgoal (-hash a t)))

;; ===========================================================================
;; Suspensions as constraints

(defn- -do-suspc [t1 t2 swap a]
  (let [x (loop [vs #{t2} seen #{}]
            (let [vs (clojure.set/difference vs seen)]
              (cond
               (empty? vs) true
               (some #(occurs-check a % t1) vs) false
               :else (recur
                      (reduce
                       (fn [s0 s1]
                         (clojure.set/union s0 (:eset (root-val a s1))))
                       #{} vs)
                      (clojure.set/union vs seen)))))]
    (when x
      (let [[t1 a] (swap-noms t1 swap a)]
        ((== t1 t2) a)))))

(defn -suspc [v1 v2 swap]
  (reify
    Object
    (toString [_]
      (str "suspc" v1 v2 swap))
    proto/IConstraintStep
    (-step [this a]
      (let [t1 (walk a v1)
            t2 (walk a v2)]
        (reify
          IFn
          (-invoke [_ a]
            ((composeg*
              (remcg this)
              (fn [a]
                (cond
                 (not (lvar? t1)) (-do-suspc t1 t2 swap a)
                 (not (lvar? t2)) (-do-suspc t2 t1 swap a)
                 :else ;; (= t1 t2)
                 (loop [a* swap a a]
                   (if (empty? a*) a
                       (recur (rest a*) ((hash (first a*) t2) a))))))) a))
          proto/IRunnable
          (-runnable? [_]
            (or (not (lvar? t1)) (not (lvar? t2)) (= t1 t2))))))
    proto/IConstraintOp
    (-rator [_] `cljs.core.logic.nominal/suspc)
    (-rands [_] [v1 v2])
    proto/IReifiableConstraint
    (-reifyc [c v r a]
      (let [t1 (walk* r (walk* a v1))
            t2 (walk* r (walk* a v2))
            swap (walk* r swap)]
        (when (and
               (not (lvar? t1))
               (not (lvar? t2))
               (symbol? (first swap))
               (symbol? (second swap)))
          `(~'swap ~swap ~t1 ~t2))))
    proto/IConstraintWatchedStores
    (-watched-stores [this] #{::l/subst})))

(defn suspc [v1 v2 swap]
  (cgoal (-suspc v1 v2 swap)))

;; ===========================================================================
;; tie: bind a nom in a term

(declare tie)

(defrecord Tie [binding-nom body]
  proto/ITreeTerm

  proto/IUnifyTerms
  (unify-terms [v u s]
    (cond
     (tie? u)
     (if (= (:binding-nom v) (:binding-nom u))
       (unify s (:body v) (:body u))
       (let [[t s]
             (swap-noms (:body v) [(:binding-nom v) (:binding-nom u)] s)]
         ((composeg*
           (hash (:binding-nom u) (:body v))
           (== t (:body u))) s)))
     :else nil))

  proto/IReifyTerm
  (reify-term [v s]
    (let [s (-reify* s binding-nom)]
      (let [s (-reify* s body)]
        s)))

  proto/IWalkTerm
  (walk-term [v f]
    (with-meta
      (tie (walk-term (:binding-nom v) f)
           (walk-term (:body v) f))
      (meta v)))

  proto/IOccursCheckTerm
  (occurs-check-term [v x s]
    (occurs-check s x (:body v)))

  proto/IConstrainTree
  (-constrain-tree [t fc s]
    (fc (:body t) s))

  proto/IForceAnswerTerm
  (-force-ans [v x]
    (force-ans (:body v)))

  INomSwap
  (swap-noms [t swap s]
    (let [[tbody s] (swap-noms (:body t) swap s)]
      [(with-meta (tie (nom-swap (:binding-nom t) swap) tbody) (meta t)) s]))

  IPrintWithWriter
  (-pr-writer [x writer opts]
    (-write writer "[")
    (pr-writer (:binding-nom x) writer opts)
    (-write writer "] ")
    (pr-writer (:body x) writer opts)))

(defn tie [binding-nom body]
  (Tie. binding-nom body))

(defn tie? [x]
  (instance? Tie x))
