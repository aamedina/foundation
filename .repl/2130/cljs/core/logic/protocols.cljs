(ns cljs.core.logic.protocols)

;; Marker Interfaces

(defprotocol IBindable)
(defprotocol ITreeTerm)
(defprotocol IVar)

;; Utility Protocols

(defprotocol IUninitialized
  (-uninitialized [coll]))

;;; Unification protocols for core Clojure types

(defprotocol IUnifyTerms
  (unify-terms [u v s]))

(defprotocol IUnifyWithRecord
  (unify-with-record [u v s]))

(defprotocol INonStorable)

(defn ^boolean non-storable? [x]
  (satisfies? INonStorable x))

;; Utility Protocols

(defprotocol LConsSeq
  (lfirst [this])
  (lnext [this]))

(defprotocol LConsPrint
  (toShortString [this]))

;; Substitution

(defprotocol ISubstitutions
  (ext-no-check [this x v])
  (walk [this x]))

;; Protocols for terms

(defprotocol IReifyTerm
  (reify-term [v s]))

(defprotocol IWalkTerm
  (walk-term [v f]))

(defprotocol IOccursCheckTerm
  (occurs-check-term [v x s]))

(defprotocol IBuildTerm
  (build-term [u s]))

;; Goal protocols

(defprotocol IBind
  (bind [this g]))

(defprotocol IMPlus
  (mplus [a f]))

(defprotocol ITake
  (take* [a]))

;; Soft cut & committed choice protocols

(defprotocol IIfA
  (ifa [b gs c]))

(defprotocol IIfU
  (ifu [b gs c]))

;; Rel protocols

(defprotocol IRel
  (setfn [this arity f])
  (indexes-for [this arity])
  (add-indexes [this arity index]))

;; Tabling Protocols

(defprotocol ITabled
  (-reify-tabled [this v])
  (reify-tabled [this v])
  (reuse [this argv cache start end])
  (subunify [this arg ans]))

(defprotocol ISuspendedStream
  (ready? [this]))

(defprotocol IAnswerCache
  (-add [this x])
  (-cached? [this x]))

 ;; cKanren protocols

(defprotocol ISubstitutionsCLP
  (root-val [this x])
  (root-var [this x])
  (ext-run-cs [this x v])
  (queue [this c])
  (update-var [this x v]))

;; Constraint store


(defprotocol IConstraintStore
  (addc [this a c])
  (updatec [this a c])
  (remc [this a c])
  (runc [this c state])
  (constraints-for [this a x ws])
  (migrate [this x root]))

;; Generic constraint Protocols

(defprotocol IConstraintStep
  (-step [c s]))

(defprotocol IRunnable
  (-runnable? [c]))

(defprotocol IEntailed
  (-entailed? [c]))

(defprotocol IEntailedVar
  (-entailed-var? [c x]))

;; Constraint reflection protocols

(defprotocol IWithConstraintId
  (-with-id [c id]))

(defprotocol IConstraintId
  (-id [c]))

(defn id [c]
  (if (satisfies? IConstraintId c)
    (-id c)
    (-> c meta ::id)))

(defn with-id [c id]
  (if (satisfies? IWithConstraintId c)
    (-with-id c id)
    (vary-meta c assoc ::id id)))

(defprotocol IConstraintWatchedStores
  (-watched-stores [c]))

(defprotocol IConstraintOp
  (-rator [c])
  (-rands [c]))

(defprotocol IReifiableConstraint
  (-reifyc [c v r a]))

(defn ^boolean reifiable? [x]
  (satisfies? IReifiableConstraint x))

(defprotocol IEnforceableConstraint)

(defn ^boolean enforceable? [x]
  (satisfies? IEnforceableConstraint x))

;; cgoal

(defprotocol IUnwrapConstraint
  (-unwrap [c]))

;; generic domain related protocols

(defprotocol IMergeDomains
  (-merge-doms [a b]))

(defprotocol IMemberCount
  (-member-count [dom]))

(defprotocol IForceAnswerTerm
  (-force-ans [v x]))

;; Tree Constraints

(defprotocol IDisunifyTerms
  (-disunify-terms [u v s cs]))

(defprotocol ITreeConstraint)

(defn ^boolean tree-constraint? [x]
  (satisfies? ITreeConstraint x))

(defprotocol IPrefix
  (-prefix [c]))

(defprotocol IWithPrefix
  (-with-prefix [c p]))

;; Partial Maps

(defprotocol IUnifyWithPMap
  (unify-with-pmap [pmap u s]))

;; Deep Constraints

(defprotocol IConstrainTree
  (-constrain-tree [t fc s]))

;; Features

(defprotocol IFeature
  (-feature [x]))
