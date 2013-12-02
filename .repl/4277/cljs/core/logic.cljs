(ns cljs.core.logic
  (:refer-clojure :exclude [==])
  (:require [clojure.set :as set]
            [clojure.string :as string]
            [cljs.reader :as reader])
  (:require-macros [cljs.core.logic.macros
                    :refer [umi uai llist composeg* bind* mplus* -inc
                            conde fresh -run run run* run-db run-db* run-nc
                            run-nc* all is pred project trace-lvars trace-s
                            log ifa* ifu* conda condu lvaro nonlvaro fnm
                            defnm fne defne matche fna fnu defna defnu matcha
                            matchu tabled let-dom fnc defnc == != lazy-run
                            lazy-run*]]))

(def ^:dynamic *logic-dbs* [])

(def ^:dynamic *occurs-check* true)

(defprotocol IUnifyTerms
  (-unify-terms [u v s]))

(defprotocol IUnifyWithNil
  (-unify-with-nil [v u s]))

(defprotocol IUnifyWithObject
  (-unify-with-object [v u s]))

(defprotocol IUnifyWithLVar
  (-unify-with-lvar [v u s]))

(defprotocol IUnifyWithLSeq
  (-unify-with-lseq [v u s]))

(defprotocol IUnifyWithSequential
  (-unify-with-seq [v u s]))

(defprotocol IUnifyWithMap
  (-unify-with-map [v u s]))

(defprotocol IUnifyWithRecord
  (-unify-with-record [v u s]))

(defprotocol IReifyTerm
  (-reify-term [v s]))

(defprotocol IWalkTerm
  (-walk-term [v f]))

(defprotocol IOccursCheckTerm
  (-occurs-check-term [v u s]))

(defprotocol IBuildTerm
  (-build-term [u s]))

(defprotocol IBind
  (-bind [this g]))

(defprotocol IMPlus
  (-mplus [a f]))

(defprotocol ITake
  (-take* [a]))

(defprotocol IMemberCount
  (-member-count [_]))

;; Utilities

(declare lvar? build subst-val)

(def not-found (js-obj))

(defn assoc-meta [x k v]
  (with-meta x (assoc (meta x) k v)))

(defn dissoc-meta [x k]
  (with-meta x (dissoc (meta x) k)))

(defn assoc-dom [x k v]
  (subst-val (.-v x) (assoc (.-doms x) k v) (.-eset x) (meta x)))

(defn dissoc-dom [x k]
  (subst-val (.-v x) (dissoc (.-doms x) k) (.-eset x) (meta x)))

(def unbound-names
  (let [r (range 100)]
    (zipmap r (map (comp symbol str) (repeat "_") r))))

(defn ^boolean record? [x]
  (implements? IRecord x))

(defprotocol IBindable)

(defn ^boolean bindable? [x]
  (or (lvar? x)
      (implements? IBindable x)))

;; =======================================================================
;; SubstValue
;; v - the actual ground value of the var
;; doms - the constraint domains assigned to the var
;; eset - set of other vars this var is entangled with

(defrecord SubstValue [v doms eset]
  Object
  (toString [_] (str v)))

(defn ^boolean subst-val? [x]
  (instance? SubstValue x))

(defn subst-val
  ([x] (SubstValue. x nil nil))
  ([x doms] (SubstValue. x doms nil))
  ([x doms _meta] (with-meta (SubstValue. x doms nil) _meta))
  ([x doms eset _meta] (with-meta (SubstValue. x doms eset) _meta)))

;; ===========================================================================
;; Constraint Store

(declare lvar? bindable? add-var non-storable? choice merge-with-root
         -root-var -root-val)

(defn var-rands [a c]
  (->> (-rands c)
       (map #(-root-var a %))
       (filter lvar?)
       (into [])))

(defn unbound-rands [a c]
  (->> (var-rands a c)
       (filter #(lvar? (-root-val a %)))))

(defprotocol IConstraintStore
  (-addc [cs a c])
  (-updatec [cs a c])
  (-remc [cs a c])
  (-runc [cs c state])
  (-constraints-for [cs a x ws])
  (-migrate [cs s root]))

(defprotocol IWithConstraintId
  (-with-id [c id]))

(defprotocol IConstraintId
  (-id [c]))

(defn id [c]
  (if (implements? IConstraintId c)
    (-id c)
    (-> c meta ::id)))

(defn with-id [c id]
  (if (implements? IWithConstraintId c)
    (-with-id c id)
    (vary-meta c assoc ::id id)))

;; ConstraintStore
;; -----
;; km  - mapping logic vars to constraints ids
;; cm  - mapping constraint ids to to actual constraints
;; cid - the current constraint id, an integer, incremented
;;       everytime we add a constraint to the store
;; running - set of running constraint ids

(deftype ConstraintStore [km cm cid running]
  IConstraintStore
  (-addc [this a c]
    (let [vars (var-rands a c)
          c (with-id c cid)
          cs (reduce (fn [cs v] (add-var cs v c)) this vars)]
      (ConstraintStore. (.-km cs) (.-cm cs) (inc cid) running)))

  (-updatec [this a c]
    (let [oc (cm (id c))]
      (ConstraintStore. km (assoc cm (id c) c) cid running)))

  (-remc [this a c]
    (let [vs (var-rands a c)
          ocid (id c)
          nkm (reduce (fn [km v]
                        (let [vcs (disj (get km v) ocid)]
                          (if (empty? vcs)
                            (dissoc km v)
                            (assoc km v vcs))))
                      km vs)
          ncm (dissoc cm ocid)]
      (ConstraintStore. nkm ncm cid running)))

  (-runc [this c state]
    (if state
      (ConstraintStore. km cm cid (conj running (id c)))
      (ConstraintStore. km cm cid (disj running (id c)))))

  (-constraints-for [this a x ws]
    (when-let [ids (get km (-root-var a x))]
      (filter #((-watched-stores %) ws)
              (map cm (remove running ids)))))

  (-migrate [this x root]
    (let [xcs    (km x)
          rootcs (km root #{})
          nkm    (assoc (dissoc km x) root (into rootcs xcs))]
      (ConstraintStore. nkm cm cid running)))

  ICounted
  (-count [this] (count cm)))

(defn add-var [cs x c]
  (when-not (lvar? x)
    (throw (js/Error.
            (str "constraint store assoc expected logic var key: " x))))
  (let [cm (.-cm cs)
        km (.-km cs)
        cid (.-cid cs)
        nkm (update-in km [x] (fnil (fn [s] (conj s cid)) #{}))
        ncm (assoc cm cid c)]
    (ConstraintStore. nkm ncm cid (.-running cs))))

(defn make-cs []
  (ConstraintStore. {} {} 0 #{}))

;; ==========================================================================
;; Substitutions

(declare tree-term? fail)

(defprotocol ISubstitutions
  (-occurs-check [this u v])
  (-ext [this u v])
  (-ext-no-check [this u v])
  (-walk [this v])
  (-walk* [this v])
  (-unify [this u v])
  (-reify-lvar-name [_])
  (-reify* [this v])
  (-reify [s v] [s v r]))

(defprotocol ISubstitutionsCLP
  (-root-val [s v])
  (-root-var [s v])
  (-ext-run-cs [s x v])
  (-queue [s c])
  (-update-var [s x v]))

;; Substitutions
;; -----
;; s   - persistent hashmap to store logic var bindings
;; vs  - changed var set
;; ts  - atom containing a hashmap of
;;       tabled goals -> atoms of sets containing cached answers
;; cs  - constraint store
;; cq  - for the constraint queue
;; cqs - constraint ids in the queue
;; oc  - occurs check

(deftype Substitutions [s vs ts cs cq cqs oc _meta]
  IEquiv
  (-equiv [this o]
    (or (identical? this o)
        (and (instance? Substitutions o)
             (= s (.-s o)))))

  IPrintWithWriter
  (-pr-writer [this writer opts]
    (-pr-writer s writer opts))

  ISubstitutions
  (-occurs-check [this u v]
    (let [v (-walk this v)]
      (-occurs-check-term v u this)))

  (-ext [this u v]
    (if (and ^boolean *occurs-check*
             ^boolean (-occurs-check this u (if (subst-val? v) (.-v v) v)))
      nil
      (-ext-no-check this u v)))

  (-ext-no-check [this u v]
    (let [u (if-not (lvar? v)
              (assoc-meta u ::root true)
              u)]
      (Substitutions. (assoc s u v)
                      (if vs (conj vs u)) ts cs cq cqs oc _meta)))

  (-walk [this v]
    (if (bindable? v)
      (loop [^not-native lv v ^not-native me (find s v)]
        (if (nil? me)
          lv
          (let [v  (key me)
                vp (val me)]
            (if (not (bindable? vp))
              (if (subst-val? vp)
                (let [sv (.-v vp)]
                  (if (keyword-identical? sv ::unbound)
                    (with-meta v (assoc (meta vp) ::unbound true))
                    sv))
                vp)
              (recur vp (find s vp))))))
      v))

  (-walk* [this v]
    (let [v (-walk this v)]
      (-walk-term v
                  (fn [x]
                    (let [x (-walk this x)]
                      (if (tree-term? x)
                        (-walk* this x)
                        x))))))

  (-unify [this u v]
    (if (identical? u v)
      this
      (let [u (-walk this u)
            v (-walk this v)]        
        (if (and (lvar? u) (= u v))
          this
          (if (and (not (lvar? u)) (lvar? v))
            (-unify-terms v u this)
            (-unify-terms u v this))))))

  (-reify-lvar-name [this]
    (let [c (count s)]
      (if (< c 100)
        (unbound-names c)
        (symbol (str "_" (count s))))))

  (-reify* [this v]
    (let [v (-walk this v)]
      (-reify-term v this)))

  (-reify [this v]
    (let [v (-walk* this v)]
      (-walk* ^not-native
              (-reify* ^not-native (with-meta empty-s _meta) v) v)))

  (-reify [this v r]
    (let [v (-walk* this v)]
      (-walk* ^not-native (-reify* r v) v)))

  ICounted
  (-count [this] (count s))

  IMeta
  (-meta [this] _meta)

  IWithMeta
  (-with-meta [this new-meta]
    (Substitutions. s vs ts cs cq cqs oc new-meta))

  ISubstitutionsCLP
  (-root-val [this v]
    (if (lvar? v)
      (loop [^not-native lv v [v vp :as me] (find s v)]
        (cond
          (nil? me) lv
          (not (lvar? vp)) vp
          :else (recur vp (find s vp))))
      v))
  
  (-root-var [this v]
    (if (lvar? v)
      (if (-> v meta ::root)
        v
        (loop [lv v [v vp :as me] (find s v)]
          (cond
            (nil? me) lv
            (not (lvar? vp))
            (if (subst-val? vp)
              (with-meta v (meta vp))
              v)
            :else (recur vp (find s vp)))))
      v))

  (-ext-run-cs [this x v]
    (let [x  (-root-var this x)
          xs (if (lvar? v)
               [x (-root-var this v)]
               [x])
          s  (if oc
               (-ext this x v)
               (-ext-no-check this x v))]
      (when s
        ((run-constraints* xs cs ::subst) s))))

  (-queue [this c]
    (let [id (id c)]
      (if-not (cqs id)
        (Substitutions. s vs ts cs (conj (or cq []) c) (conj cqs id) oc _meta)
        this)))

  (-update-var [this x v]
    (Substitutions. (assoc s x v) vs ts cs cq cqs oc _meta)) 

  IBind
  (-bind [this g] (g this))

  IMPlus
  (-mplus [this f] (choice this f))

  ITake
  (-take* [this] this))

(declare make-cs)

(defn make-s
  ([] (make-s {}))
  ([m] (make-s m (make-cs)))
  ([m cs] (Substitutions. m nil nil cs nil #{} true nil)))

(defn tabled-s
  ([] (tabled-s false))
  ([oc] (tabled-s oc nil))
  ([oc meta] (Substitutions. {} nil (atom {}) (make-cs) nil #{} oc meta)))

(def ^not-native empty-s (make-s))

(defn ^boolean subst? [x]
  (instance? Substitutions x))

(defn to-s [v]
  (let [s (reduce (fn [m [k v]] (assoc m k v)) {} v)]
    (Substitutions. s nil nil (make-cs) nil #{} true nil)))

;; ===========================================================================
;; Logic Variables

(deftype LVar [id unique name oname ^:mutable __hash meta]
  Object
  (toString [_] (pr-str this))

  IHash
  (-hash [_] __hash)

  IMeta
  (-meta [this] meta)

  IWithMeta
  (-with-meta [this new-meta]
    (LVar. id unique name oname __hash new-meta))

  IPrintWithWriter
  (-pr-writer [x writer opts]
    (-write writer (str "<lvar:" name ">")))

  IEquiv
  (-equiv [this o]
    (and (instance? LVar o)
         (if unique
           (identical? id (.-id o))
           (identical? name (.-name o)))))

  IUnifyTerms
  (-unify-terms [u v s]
    (cond
      (lvar? v)
      (let [repoint (cond
                      (-> u clojure.core/meta ::unbound) [u v]
                      (-> v clojure.core/meta ::unbound) [v u]
                      :else nil)]
        (if repoint
          (let [[root other] repoint
                s (Substitutions. (.-s s) (.-vs s) (.-ts s)
                                  (-migrate (.-cs s) other root) (.-cq s)
                                  (.-cqs s) (.-oc s) (.-_meta s))
                s (if (-> other clojure.core/meta ::unbound)
                    (merge-with-root s other root)
                    s)]
            (when s
              (-ext-no-check s other root)))
          (-ext-no-check s u v)))
      (non-storable? v) (throw (js/Error. (str v " is non-storable")))
      (not= v not-found)
      (if (tree-term? v)
        (-ext s u v)
        (if (-> u clojure.core/meta ::unbound)
          (-ext-no-check s u (assoc (-root-val s u) :v v))
          (-ext-no-check s u v)))
      :else (-ext-no-check s u v)))

  IUnifyWithNil
  (-unify-with-nil [v u ^not-native s]
    (-ext-no-check s v u))

  IUnifyWithObject
  (-unify-with-object [v u ^not-native s]
    (-ext s v u))

  IUnifyWithLVar
  (-unify-with-lvar [v u ^not-native s]
    (-ext-no-check s u v))

  IUnifyWithLSeq
  (-unify-with-lseq [v u ^not-native s]
    (-ext s v u))

  IUnifyWithSequential
  (-unify-with-seq [v u ^not-native s]
    (-ext s v u))

  IUnifyWithMap
  (-unify-with-map [v u ^not-native s]
    (-ext s v u))

  IReifyTerm
  (-reify-term [v ^not-native s]
    (let [rf (-> s clojure.core/meta :reify-vars)]
      (if (fn? rf)
        (rf v s)
        (if rf
          (-ext s v (-reify-lvar-name s))
          (-ext s v (.-oname v))))))

  IWalkTerm
  (-walk-term [v f] (f v))

  IOccursCheckTerm
  (-occurs-check-term [v x ^not-native s]
    (= (-walk s v) x))

  IBuildTerm
  (-build-term [u ^not-native s]
    (let [m (.-s s)
          cs (.-cs s)
          lv (lvar 'ignore)]
      (if (contains? m u)
        s
        (make-s (assoc m u lv) cs)))))

(def lvar-sym-counter (array 0))

(defn next-id
  []
  (str "_" (aset lvar-sym-counter 0 (inc (aget lvar-sym-counter 0)))))

(defn lvar
  ([] (lvar 'gen))
  ([name] (lvar name true))
  ([name unique]
     (let [oname name
           id   (if unique
                  (next-id)
                  name)
           name (if unique
                  (str name id)
                  (str name))]
       (LVar. id unique name oname (hash name) nil))))

(defn ^boolean lvar? [x]
  (instance? LVar x))

(defn lvars [n]
  (repeatedly n lvar))

;; ==========================================================================
;; LCons

(defprotocol ITreeTerm)

(defprotocol LConsSeq
  (-lfirst [this])
  (-lnext [this]))

(defprotocol LConsPrint
  (-pr-seq [lcons]))

(declare lcons? LCons failed?)

(defn lcons-pr-seq [x]
  (if (lcons? x)
    (lazy-seq (cons (-lfirst x)
                    (lcons-pr-seq (-lnext x))))
    (list '. x)))

(deftype LCons [a d ^:unsynchronized-mutable cache meta]
  ITreeTerm

  IMeta
  (-meta [this] meta)

  IWithMeta
  (-with-meta [this new-meta]
    (LCons. a d cache new-meta))

  LConsSeq
  (-lfirst [_] a)
  (-lnext [_] d)

  IPrintWithWriter
  (-pr-writer [x writer opts]
    (pr-sequential-writer writer pr-writer "(" " " ")" opts (lcons-pr-seq x)))

  Object
  (toString [this]
    (cond
      (lcons? d) (str "(" a " " (lcons-pr-seq d) ")")
      :else (str "(" a " . " d ")")))

  IEquiv
  (-equiv [this o]
    (or (identical? this o)
        (and (instance? LCons o)
             (loop [me this
                    you o]
               (cond
                 (nil? me) (nil? you)
                 (lvar? me) true
                 (lvar? you) true
                 (and (lcons? me) (lcons? you))
                 (let [mef  (-lfirst me)
                       youf (-lfirst you)]
                   (and (or (= mef youf)
                            (lvar? mef)
                            (lvar? youf))
                        (recur (-lnext me) (-lnext you))))
                 :else (= me you))))))

  IHash
  (-hash [this]
    (if (cljs.core/== cache -1)
      (set! (.-cache this) (uai (umi (int 31) (hash d)) (hash a)))
      cache))

  IUnifyTerms
  (-unify-terms [u v s]
    (cond
      (sequential? v) (-unify-with-seq u v s)            
      (lcons? v) (-unify-with-lseq v u s)
      :else nil))

  IUnifyWithNil
  (-unify-with-nil [v u s] nil)

  IUnifyWithObject
  (-unify-with-object [v u s] nil)

  IUnifyWithLSeq
  (-unify-with-lseq [^not-native v ^not-native u ^not-native s]
    (loop [u u v v s s]
      (if (lvar? u)
        (-unify s u v)
        (cond
          (lvar? v) (-unify s v u)
          (and (lcons? u) (lcons? v))
          (let [s (-unify s (-lfirst u) (-lfirst v))]
            (if-not (failed? s)
              (recur (-lnext u) (-lnext v) s)
              s))
          :else (-unify s u v)))))

  IUnifyWithSequential
  (-unify-with-seq [v u s]
    (-unify-with-lseq u v s))
  
  IUnifyWithMap
  (-unify-with-map [v u s] nil)

  IReifyTerm
  (-reify-term [v s]    
    (loop [v v s s]
      (if (lcons? v)
        (recur (-lnext v) (-reify* s (-lfirst v)))
        (-reify* s v))))

  IWalkTerm
  (-walk-term [v f]
    (lcons (f (-lfirst v))
           (f (-lnext v))))

  IOccursCheckTerm
  (-occurs-check-term [v x ^not-native s]
    (loop [v v x x s s]
      (if (lcons? v)
        (or (-occurs-check s x (-lfirst v))
            (recur (-lnext v) x s))
        (-occurs-check s x v))))

  IBuildTerm
  (-build-term [u s]
    (loop [u u s s]
      (if (lcons? u)
        (recur (-lnext u) (build s (-lfirst u)))
        (build s u)))))

(defn lcons
  "Constructs a sequence a with an improper tail d if d is a logic variable."
  [a d]
  (if (or (coll? d) (nil? d))
    (cons a (seq d))
    (LCons. a d -1 nil)))

(defn ^boolean lcons? [x]
  (instance? LCons x))

(defn ^boolean tree-term? [x]
  (or (coll? x)
      (implements? ITreeTerm x)))

;; ==========================================================================
;; Unification

(defn unify-with-pmap*
  [u v s]
  (if (map? v)
    (loop [ks (keys u) s s]
      (if (seq ks)
        (let [kf (first ks)
              vf (get v kf not-found)]
          (if (identical? vf not-found)
            nil
            (let [uf (get u kf)
                  vf (-walk s vf)]
              (if (lvar? vf)
                (recur (next ks) ((featurec vf uf) s))
                (if (map? uf)
                  (if-let [s (-unify s (partial-map uf) vf)]
                    (recur (next ks) s)
                    nil)
                  (if-let [s (-unify s uf vf)]
                    (recur (next ks) s)
                    nil))))))
        s))))

(extend-protocol IUnifyTerms
  nil
  (-unify-terms [u v s]
    (-unify-with-nil v u s))

  default
  (-unify-terms [u v s]
    (cond
      (sequential? u) (-unify-with-seq v u s)
      (record? u) (unify-with-pmap* v u s)
      :else (-unify-with-object v u s)))

  PersistentArrayMap
  (-unify-terms [u v s]
    (-unify-with-map v u s))

  PersistentHashMap
  (-unify-terms [u v s]
    (-unify-with-map v u s)))

;; ---------------------------------------------------------------------------
;; Unify nil with X

(extend-protocol IUnifyWithNil
  nil
  (-unify-with-nil [v u s] s)

  default
  (-unify-with-nil [v u s] nil))

;; ---------------------------------------------------------------------------
;; Unify Object with X

(extend-protocol IUnifyWithObject
  nil
  (-unify-with-object [v u s] nil)

  default
  (-unify-with-object [v u s]
    (if (= u v) s nil)))

;; ---------------------------------------------------------------------------
;; Unify LVar with X

(extend-protocol IUnifyWithLVar
  nil
  (-unify-with-lvar [v u ^not-native s] (-ext-no-check s u v))

  default
  (-unify-with-lvar [v u ^not-native s] (-ext s u v)))

;; ---------------------------------------------------------------------------
;; Unify LCons with X

(extend-protocol IUnifyWithLSeq
  nil
  (-unify-with-lseq [v u s] nil)

  default
  (-unify-with-lseq [v ^not-native u ^not-native s]
    (if (sequential? v)
      (loop [u u ^not-native v (seq v) s s]
        (if v
          (if (lcons? u)
            (let [s (-unify s (-lfirst u) (first v))]
              (if-not (failed? s)
                (recur (-lnext u) (next v) s)
                s))
            (-unify s u v))
          (if (lvar? u)
            (-unify s u '())
            nil)))
      nil)))

;; ---------------------------------------------------------------------------
;; Unify Sequential with X

(extend-protocol IUnifyWithSequential
  nil
  (-unify-with-seq [v u s] nil)

  default
  (-unify-with-seq [^not-native v ^not-native u ^not-native s]
    (if (sequential? v)
      (loop [^not-native u (seq u) ^not-native v (seq v) s s]
        (if-not (nil? u)
          (if-not (nil? v)
            (let [s (-unify s (first u) (first v))]
              (if-not (failed? s)
                (recur (next u) (next v) s)
                s))
            nil)
          (if-not (nil? v) nil s)))
      nil)))

;; ---------------------------------------------------------------------------
;; Unify IPersistentMap with X

(defn unify-with-map* [v u s]
  (if-not (cljs.core/== (count u) (count v))
    nil
    (loop [^not-native ks (seq (keys u)) s s]
      (if ks
        (let [kf (first ks)
              vf (get v kf not-found)]
          (if (identical? vf not-found)
            nil
            (let [s (-unify s (get u kf) vf)]
              (if-not (failed? s)
                (recur (next ks) s)
                nil))))
        s))))

(extend-protocol IUnifyWithMap
  nil
  (-unify-with-map [v u s] nil)

  default
  (-unify-with-map [v u s] nil)

  PersistentArrayMap
  (-unify-with-map [v u s]
    (unify-with-map* v u s))

  PersistentHashMap
  (-unify-with-map [v u s]
    (unify-with-map* v u s)))

;; ===========================================================================
;; Reification

(extend-protocol IReifyTerm
  nil
  (-reify-term [v s] s)

  default
  (-reify-term [v ^not-native s]
    (if (coll? v)
      (loop [v v s s]
        (if (seq v)
          (recur (next v) (-reify* s (first v)))
          s))
      s)))

;; ==========================================================================
;; Walk Term

(defn walk-term-record [^not-native v f]
  (with-meta
    (loop [^not-native v v
           ^not-native r (-uninitialized v)]
      (if (seq v)
        (let [[vfk vfv] (first v)]
          (recur (next v) (assoc r
                            (-walk-term (f vfk) f)
                            (-walk-term (f vfv) f))))
        r))
    (meta v)))

(defn walk-term-map* [^not-native v f]
  (with-meta
    (loop [^not-native v v
           ^not-native r (transient {})]
      (if (seq v)
        (let [[vfk vfv] (first v)]
          (recur (next v)
                 (-assoc! r
                          (-walk-term (f vfk) f)
                          (-walk-term (f vfv) f))))
        (persistent! r)))
    (meta v)))

(extend-protocol IWalkTerm
  nil
  (-walk-term [v f] (f nil))

  default
  (-walk-term [v f]
    (cond
      (sequential? v)
      (with-meta
        (doall (map #(-walk-term (f %) f) v))
        (meta v))
      (record? v) (walk-term-record v f)
      :else (f v)))

  PersistentHashMap
  (-walk-term [v f]  (walk-term-map* v f))

  PersistentArrayMap
  (-walk-term [v f] (walk-term-map* v f))

  PersistentVector
  (-walk-term [^not-native v f]
    (with-meta
      (loop [^not-native v (seq v)
             ^not-native r (transient [])]
        (if v
          (recur (next v) (-conj! r (-walk-term (f (first v)) f)))
          (persistent! r)))
      (meta v))))

;; ===========================================================================
;; Occurs Check Term

(extend-protocol IOccursCheckTerm
  nil
  (-occurs-check-term [v x s] false)

  default
  (-occurs-check-term [v x ^not-native s]
    (if (sequential? v)
      (loop [^not-native v (seq v) x x s s]
        (if-not (nil? v)
          (or (-occurs-check s x (first v))
              (recur (next v) x s))
          false))
      false)))

;; ==========================================================================
;; Build Term

(extend-protocol IBuildTerm
  nil
  (-build-term [u s] s)

  default
  (-build-term [u s]
    (if (coll? u)
      (reduce build s u)
      s)))

;; ===========================================================================
;; Goals and Goal Constructors

(declare Choice)

(defn mplus [a f]
  (if (satisfies? IMPlus a)
    (-mplus ^not-native a f)
    (Choice. a f)))

(defn take* [x]
  (if (satisfies? ITake x)
    (-take* ^not-native x)
    x))

(declare Inc)

(deftype Choice [a f]
  IBind
  (-bind [this g] (mplus (g a) (-inc (-bind ^not-native f g))))
  IMPlus
  (-mplus [this fp] (Choice. a (-inc (mplus (fp) f))))  
  ITake
  (-take* [this] (lazy-seq (cons a (lazy-seq (take* f))))))

(defn choice [a f]
  (Choice. a f))

;; ---------------------------------------------------------------------------
;; Inc

(deftype Inc [f]
  IFn
  (-invoke [_] (f))  
  IBind
  (-bind [this g] (-inc (let [^not-native a (f)] (-bind a g))))
  IMPlus
  (-mplus [this fp] (-inc (mplus (fp) this)))  
  ITake
  (-take* [this] (lazy-seq (take* (f)))))

;; ---------------------------------------------------------------------------
;; MZero

(extend-type nil
  IBind
  (-bind [_ g] this)
  IMPlus
  (-mplus [_ f] (f))
  ITake
  (-take* [_] '()))

(def failed? nil?)

(extend-protocol ITake
  nil
  (-take* [_] '())
  
  function
  (-take* [this]
    (lazy-seq (take* (this)))))

(extend-protocol IMPlus
  nil
  (-mplus [_ f] (f))
  
  function
  (-mplus [this f]
    (-inc (mplus (f) this))))

(extend-protocol IBind
  nil
  (-bind [_ g] nil)
  
  function
  (-bind [this g]
    (-inc (-bind (this) g))))

;; ===========================================================================
;; Syntax

(defn succeed
  "A goal that always succeeds."
  [a] a)

(defn fail
  "A goal that always fails."
  [a] nil)

(def s# succeed)

(def u# fail)

;; ===========================================================================
;; conda (soft-cut), condu (committed-choice)

(defprotocol IIfA
  (-ifa [b gs c]))

(defprotocol IIfU
  (-ifu [b gs c]))

(extend-protocol IIfA
  nil
  (-ifa [b gs c]
    (when c
      (force c)))

  Substitutions
  (-ifa [b gs c]
    (loop [b b [g0 & goals] gs]
      (if g0
        (when-let [b (g0 b)]
          (recur b gr))
        b)))
  
  Choice
  (-ifa [b gs c]
    (reduce -bind b gs))

  Inc
  (-ifa [b gs c]
    (-inc (-ifa (b) gs c)))

  function
  (-ifa [b gs c]
    (-inc (-ifa (b) gs c))))

(extend-protocol IIfU
  nil
  (-ifu [b gs c]
    (when c
      (force c)))

  Substitutions
  (-ifu [b gs c]
    (loop [b b [g0 & goals] gs]
      (if g0
        (when-let [b (g0 b)]
          (recur b gr))
        b)))

  function
  (-ifu [b gs c]
    (-inc (-ifu (b) gs c)))
  
  Inc
  (-ifu [b gs c]
    (-inc (-ifu (b) gs c)))

  Choice
  (-ifu [b gs c]
    (reduce -bind (.-a b) gs)))

(defn onceo [g] (condu (g)))

;; ==========================================================================
;; copy-term

(defn copy-term
  "Copies a term u into v. Non-relational."
  [u v]
  (project [u]
    (== (-walk* (build empty-s u) u) v)))

;; ==========================================================================
;; Useful goals

(defn nilo
  "A relation where a is nil"
  [a]
  (== nil a))

(defn emptyo
  "A relation where a is the empty list"
  [a]
  (== '() a))

(defn conso
  "A relation where l is a collection, such that a is the first of l
  and d is the rest of l. If ground d must be bound to a proper tail."
  [a d l]
  (== (lcons a d) l))

(defn firsto
  "A relation where l is a collection, such that a is the first of l"
  [l a]
  (fresh [d]
    (conso a d l)))

(defn resto
  "A relation where l is a collection, such that d is the rest of l"
  [l d]
  (fresh [a]
    (== (lcons a d) l)))

(defn everyg
  "A pseudo-relation that takes a coll and ensures that the goal g
   succeeds on every element of the collection."
  [g coll]
  (fn [a]
    (let [coll (-walk a coll)]
      (((fn everyg* [g coll]
          (if (seq coll)
            (all
             (g (first coll))
             (everyg* g (next coll)))
            s#)) g coll) a))))

;; ===========================================================================
;; More convenient goals

(declare !=)

(defne membero
  "A relation where l is a collection, such that l contains x."
  [x l]
  ([_ [x . tail]])
  ([_ [head . tail]]
     (membero x tail)))

(defne member1o
  "Like membero but uses to disequality further constraining
   the results. For example, if x and l are ground and x occurs
   multiple times in l, member1o will succeed only once."
  [x l]
  ([_ [x . tail]])
  ([_ [head . tail]]
     (!= x head)
     (member1o x tail)))

(defne appendo
  "A relation where x, y, and z are proper collections,
  such that z is x appended to y"
  [x y z]
  ([() _ y])
  ([[a . d] _ [a . r]]
     (appendo d y r)))

(declare rembero)

(defne permuteo
  "A relation that will permute xl into the yl. May not
   terminate if xl is not ground."
  [xl yl]
  ([() ()])
  ([[x . xs] _]
     (fresh [ys]
       (permuteo xs ys)
       (rembero x yl ys))))

;; ===========================================================================
;; Partial Maps

(declare featurec partial-map)

(defprotocol INonStorable)

(defn ^boolean non-storable? [x]
  (implements? INonStorable x))

(defprotocol IUninitialized
  (-uninitialized [_]))

(defprotocol IUnifyWithPMap
  (-unify-with-pmap [v u s]))

(defrecord PMap []
  INonStorable
  IUnifyTerms
  (-unify-terms [u v s]
    (if (map? v)
      (-unify-with-pmap v u s)
      nil))

  IUnifyWithPMap
  (-unify-with-pmap [v u s] (-unify-with-map v u s))

  IUnifyWithLVar
  (-unify-with-lvar [v u s] (-ext-no-check s u v))

  IUnifyWithMap
  (-unify-with-map [u v s]
    (loop [ks (keys u) s s]
      (if (seq ks)
        (let [kf (first ks)
              vf (get v kf not-found)]
          (if (identical? vf not-found)
            nil
            (let [uf (get u kf)
                  vf (-walk s vf)]
              (if (lvar? vf)
                (recur (next ks) ((featurec vf uf) s))
                (if (map? uf)
                  (if-let [s (-unify s (partial-map uf) vf)]
                    (recur (next ks) s)
                    nil)
                  (if-let [s (-unify s uf vf)]
                    (recur (next ks) s)
                    nil))))))
        s)))

  IUnifyWithRecord
  (-unify-with-record [u v s]
    (if (map? v)
      (-unify-with-map v u s)
      nil))

  IWalkTerm
  (-walk-term [v f]
    (walk-term-map* v f))

  IUninitialized
  (-uninitialized [_] (PMap.)))

(extend-protocol IUnifyWithPMap
  nil
  (-unify-with-pmap [v u s] nil)

  default
  (-unify-with-pmap [v u s] nil)

  LVar
  (-unify-with-pmap [v u s] (-ext s v u))

  PersistentArrayMap
  (-unify-with-pmap [v u s] (-unify-with-map u v s))

  PersistentHashMap
  (-unify-with-pmap [v u s] (-unify-with-map u v s)))

(defn partial-map
  "Given map m, returns partial map that unifies with maps even if it
   doesn't share all of the keys of that map."
  [m]
  (map->PMap m))

(defn ^boolean partial-map? [x]
  (instance? PMap x))

(defn composeg
  ([] identity)
  ([g0 g1]
     (fn [a]
       (let [a (g0 a)]
         (and a (g1 a))))))

(defprotocol IFeature
  (-feature [x]))

(extend-protocol IFeature
  default
  (-feature [x]
    (when (record? x)
      (partial-map x)))
  
  PersistentHashMap
  (-feature [x] (partial-map x))

  PersistentArrayMap
  (-feature [x] (partial-map x)))

(defprotocol IConstraintStep
  (-step [this s]))

(defprotocol IRunnable
  (-runnable? [_]))

(defprotocol IConstraintOp
  (-rator [_])
  (-rands [_]))

(defprotocol IReifiableConstraint
  (-reifyc [_ v r a]))

(defn ^boolean reifiable? [x]
  (implements? IReifiableConstraint x))

(defprotocol IEnforceableConstraint)

(defn ^boolean enforceable? [x]
  (implements? IEnforceableConstraint x))

(defprotocol IConstraintWatchedStores
  (-watched-stores [_]))

(declare remcg)

(defn -featurec
  [x fs]
  (reify
    IConstraintStep
    (-step [this s]
      (reify
        IFn
        (-invoke [_ s]
          (let [fs (-walk s fs)]
            ((composeg
              (== (partial-map fs) x)
              (remcg this)) s)))
        IRunnable
        (-runnable? [_]
          (and (not (lvar? (-walk s x)))
               (not (lvar? (-walk s fs)))))))
    IConstraintOp
    (-rator [_] `cljs.core.logic/featurec)
    (-rands [_] [x])
    IReifiableConstraint
    (-reifyc [_ v r a]
      (if-not (lvar? fs)
        (let [fs (into {} fs)
              r  (-reify* r (-walk* a fs))]
          `(featurec ~(-walk* r x) ~(-walk* r fs)))
        (let [[x fs] (-reify a [x fs] r)]
          `(featurec ~x ~fs))))
    IConstraintWatchedStores
    (-watched-stores [this] #{::subst})))

(defn featurec
  "Ensure that a map contains at least the key-value pairs
  in the map fs. fs must be partially instantiated - that is,
  it may contain values which are logic variables to support
  feature extraction."
  [x fs]
  (cgoal (-featurec x fs)))

(declare choice lvar lvar? lcons run-constraints*)

(defn build [s u]
  (-build-term u s))

(defn add-attr [s x attr attrv]
  (let [x (-root-var s x)
        v (-root-val s x)]
    (if (subst-val? v)
      (-update-var s x (assoc-meta v attr attrv))
      (let [v (if (lvar? v) ::unbound v)]
        (-ext-no-check s x (with-meta (subst-val v) {attr attrv}))))))

(defn rem-attr [s x attr]
  (let [x (-root-var s x)
        v (-root-val s x)]
    (if (subst-val? v)
      (let [new-meta (dissoc (meta v) attr)]
        (if (and (zero? (count new-meta))
                 (not (keyword-identical? (.-v v) ::unbound)))
          (-update-var s x (.-v v))
          (-update-var s x (with-meta v new-meta))))
      s)))

(defn get-attr [s x attr]
  (let [v (-root-val s x)]
    (if (subst-val? v)
      (-> v meta attr))))

(defn sync-eset [s v seenset f]
  (if (not (keyword-identical? seenset ::no-prop))
    (reduce (fn [s y]
              (let [y (-root-var s y)]
                (if-not (contains? seenset y)
                  (f s y)
                  s)))
            s (.-eset v))
    s))

(defprotocol IMergeDomains
  (-merge-doms [a b]))

(defn add-dom
  ([s x dom domv]
     (let [x (-root-var s x)]
       (add-dom s x dom domv nil)))
  ([s x dom domv seenset]
     (let [v (-root-val s x)
           s (if (subst-val? v)
               (-update-var s x (assoc-dom v dom domv))
               (let [v (if (lvar? v) ::unbound v)]
                 (-ext-no-check s x (subst-val v {dom domv}))))]
       (sync-eset s v seenset
                  (fn [s y]
                    (add-dom s y dom domv (conj (or seenset #{}) x)))))))

(defn update-dom
  ([s x dom f]
     (let [x (-root-var s x)]
       (update-dom s x dom f nil)))
  ([s x dom f seenset]
     (let [v (-root-val s x)
           v (if (lvar? v)
               (subst-val ::unbound)
               v)
           doms (.-doms v)
           s (-update-var s x (assoc-dom v dom (f (get doms dom))))]
       (sync-eset s v seenset
                  (fn [s y]
                    (update-dom s y dom f (conj (or seenset #{}) x)))))))

(defn rem-dom
  ([s x dom]
     (let [x (-root-var s x)]
       (rem-dom s x dom nil)))
  ([s x dom seenset]
     (let [v (-root-val s x)
           s (if (subst-val? v)
               (let [new-doms (dissoc (.-doms v) dom)]
                 (if (and (zero? (count new-doms))
                          (not (keyword-identical? (.-v v) ::unbound)))
                   (-update-var s x (.-v v))
                   (-update-var s x (subst-val (.-v v) new-doms
                                               (.-eset v) (meta v)))))
               s)]
       (sync-eset s v seenset
                  (fn [s y] (rem-dom s y dom (conj (or seenset #{}) x)))))))

(defn get-dom [s x dom]
  (let [v (-root-val s x)]
    (cond
      (subst-val? v) (let [v' (.-v v)]
                       (if (not= v' ::unbound)
                         v'
                         (-> v :doms dom)))
      (not (lvar? v)) v)))

(def empty-f (fn []))

(defn annotate [k v]
  (fn [a]
    (vary-meta a assoc k v)))

(defn merge-doms [s x doms]
  (let [xdoms (.-doms (-root-val s x))]
    (loop [^not-native doms (seq doms) ^not-native s s]
      (if doms
        (let [[dom domv] (first doms)]
          (let [xdomv (get xdoms dom not-found)
                ndomv (if (identical? xdomv not-found)
                        domv
                        (-merge-doms domv xdomv))]
            (when ndomv
              (recur (next doms)
                     (add-dom s x dom ndomv #{})))))
        s))))

(defn update-eset [s doms eset]
  (loop [^not-native eset (seq eset) ^not-native s s]
    (if eset
      (when-let [s (merge-doms s (-root-var s (first eset)) doms)]
        (recur (next eset) s))
      s)))

(defn merge-with-root [s x root]
  (let [xv    (-root-val s x)
        rootv (-root-val s root)
        eset  (set/union (.-eset rootv) (.-eset xv))
        doms (loop [^not-native xd (seq (.-doms xv))
                    ^not-native rd (.-doms rootv)
                    ^not-native r {}]
               (if xd
                 (let [[xk xv] (first xd)]
                   (if-let [[_ rv] (find rd xk)]
                     (let [nd (-merge-doms xv rv)]
                       (when nd
                         (recur (next xd)
                                (dissoc rd xk) (assoc r xk nd))))
                     (recur (next xd) rd (assoc r xk xv))))
                 (merge r rd)))
        nv (when doms
             (subst-val (.-v rootv) doms eset
                        (merge (meta xv) (meta rootv))))]
    (when nv
      (-> s
          (-ext-no-check root nv)
          (update-eset doms eset)))))

;; ==========================================================================
;; Entanglement

(defn to-subst-val [v]
  (if (subst-val? v)
    v
    (subst-val ::unbound)))

(defn entangle [s x y]
  (let [x  (-root-var s x)
        y  (-root-var s y)
        xv (to-subst-val (-root-val s x))
        yv (to-subst-val (-root-val s y))]
    (-> s
        (-update-var x (SubstValue. (.-v xv) (.-doms xv)
                                    (conj (or (.-eset xv) #{}) y)))
        (-update-var y (SubstValue. (.-v yv) (.-doms yv)
                                    (conj (or (.-eset yv) #{}) x))))))

(defn ext-run-csg [u v]
  (fn [a]
    (-ext-run-cs a u v)))

(declare reifyg)

(defn solutions
  ([s g]
     (solutions s (lvar) g))
  ([s q g]
     (-take* ((all g (reifyg q)) s))))

;; ===========================================================================
;; Rel

(defn to-stream [aseq]
  (let [aseq (drop-while nil? aseq)]
    (when (seq aseq)
      (choice (first aseq)
              (fn [] (to-stream (next aseq)))))))

;; ===========================================================================
;; Tabling

;; See - William Byrd "Relational Programming in miniKanren:
;; Techniques, Applications, and Implementations"
;; http://scholarworks.iu.edu/dspace/bitstream/handle/2022/8777/Byrd_indiana_0093A_10344.pdf?sequence=1
;; http://code.google.com/p/iucs-relational-research/

;; ---------------------------------------------------------------------------
;; Data Structures
;; waiting streams are PersistentVectors

;; AnswerCache
;; ansl - ans list, for calculating the fixpoint
;; anss - cached answer set, for quickly checking whether an answer term
;;        is already in the cache

(defprotocol IAnswerCache
  (-add [this x])
  (-cached? [this x]))

(deftype AnswerCache [ansl anss _meta]
  Object
  (toString [this]
    (str "<answer-cache:" (pr-str ansl) ">"))

  IMeta
  (-meta [_] _meta)

  IWithMeta
  (-with-meta [_ new-meta]
    (AnswerCache. ansl anss new-meta))

  IAnswerCache
  (-add [this x] (AnswerCache. (conj ansl x) (conj anss x) _meta))
  (-cached? [_ x] (contains? anss x))

  IPrintWithWriter
  (-pr-writer [x writer opts]
    (-write writer (str x))))

(defn answer-cache []
  (AnswerCache. '() #{} nil))

(defprotocol ISuspendedStream
  (-ready? [this]))

(defrecord SuspendedStream [cache ansv* f]
  ISuspendedStream
  (-ready? [this]
    (not (identical? (.-ansl @cache) ansv*))))

(defn make-suspended-stream [cache ansv* f]
  (SuspendedStream. cache ansv* f))

(defn ^boolean suspended-stream? [x]
  (instance? SuspendedStream x))

(defn ^boolean waiting-stream? [x]
  (vector? x))

(defn waiting-stream-check
  "Take a waiting stream, a success continuation, and a failure continuation.
   If we don't find any ready suspended streams, invoke the failure 
   continuation.
   If we find a ready suspended stream calculate the remainder of the waiting
   stream. If we've reached the fixpoint just call the thunk of the suspended
   stream, otherwise call mplus on the result of the thunk and the remainder
   of the waiting stream. Pass this result to the success contination."
  [w success-cont failure-cont]
  (loop [^not-native w w ^not-native a []]
    (cond
      (nil? w) (failure-cont)

      (-ready? (first w))
      (success-cont
       (fn []
         (let [ss (first w)
               f  (.-f ss)
               w  (into a (next w))]
           (if (empty? w)
             (f)
             (-mplus (f) (fn [] w))))))

      :else (recur (next w) (conj a (first w))))))

;; ---------------------------------------------------------------------------
;; Extend Substitutions to support tabling

(defprotocol ITabled
  (-reify-tabled [s v])
  (-reuse [s argv cache start end])
  (-subunify [s arg ans]))

(defn reify-tabled [s v]
  (let [v (-walk* s v)]
    (-walk* (-reify-tabled empty-s v) v)))

(extend-type Substitutions
  ITabled
  (-reify-tabled [this v]
    (let [v (-walk this v)]
      (cond
        (lvar? v) (-ext-no-check this v (lvar (count (.-s this))))
        (coll? v) (-reify-tabled
                   (-reify-tabled this (first v))
                   (next v))
        :else this)))

  (-reuse [this argv cache start end]
    (let [start (or start (.-ansl @cache))
          end   (or end 0)]
      (letfn [(reuse-loop [ansv*]
                (if (cljs.core/== (count ansv*) end)
                  [(make-suspended-stream cache start
                                          (fn [] (-reuse this argv cache
                                                         (.-ansl @cache)
                                                         (count start))))]
                  (let [ans (first ansv*)]
                    (Choice. (-subunify this argv (reify-tabled this ans))
                             (fn [] (reuse-loop (rest ansv*)))))))]
        (reuse-loop start))))

  (-subunify [this arg ans]
    (let [arg (-walk this arg)]
      (cond
        (= arg ans) this
        (lvar? arg) (-ext-no-check this arg ans)
        (coll? arg) (-subunify (-subunify this (next arg) (next ans))
                               (first arg) (first ans))
        :else this))))

;; ---------------------------------------------------------------------------
;; Waiting Stream

(extend-type PersistentVector
  IBind
  (-bind [this g]
    (waiting-stream-check
     this
     (fn [f] (-bind f g))
     (fn []
       (into []
             (map (fn [ss]
                    (make-suspended-stream (.-cache ss) (.-ansv* ss)
                                           (fn [] (-bind ((.-f ss)) g))))
                  this)))))

  IMPlus
  (-mplus [this f]
    (waiting-stream-check this
                          (fn [fp] (mplus fp f))
                          (fn []
                            (let [a-inf (f)]
                              (if (waiting-stream? a-inf)
                                (into a-inf this)
                                (mplus a-inf (fn [] this)))))))

  ITake
  (-take* [this]
    (waiting-stream-check this (fn [f] (take* f)) (fn [] ()))))

(defn master
  "Take the argument to the goal and check that we don't
   have an alpha equivalent cached answer term in the cache.
   If it doesn't already exist in the cache add the new
   answer term."
  [argv cache]
  (fn [a]
    (let [rargv (-reify a argv)]
      (when-not (-cached? @cache rargv)
        (swap! cache
               (fn [cache]
                 (if (-cached? cache rargv)
                   cache
                   (-add cache (reify-tabled a argv)))))
        a))))

;; ===========================================================================
;; cKanren
;;
;; See - Claire Alvis, Dan Friedman, Will Byrd, et al
;; "cKanren - miniKanren with Constraints"
;; http://www.schemeworkshop.org/2011/papers/Alvis2011.pdf
;; http://github.com/calvis/cKanren

(defn addcg [c]
  (fn [a]
    (let [a (reduce (fn [a x]
                      (-ext-no-check a x (subst-val ::unbound)))
                    a (unbound-rands a c))]
      (Substitutions. (.-s a) (.-vs a) (.-ts a) (-addc (.-cs a) a c) (.-cq a)
                      (.-cqs a) (.-oc a) (.-_meta a)))))

(defn updatecg [c]
  (fn [a]
    (Substitutions. (.-s a) (.-vs a) (.-ts a) (-updatec (.-cs a) a c) (.-cq a)
                    (.-cqs a) (.-oc a) (.-_meta a))))

(defn remcg [c]
  (fn [a]
    (Substitutions. (.-s a) (.-vs a) (.-ts a) (-remc (.-cs a) a c) (.-cq a)
                    (.-cqs a) (.-oc a) (.-_meta a))))

(defn runcg [c]
  (fn [a]
    (Substitutions. (.-s a) (.-vs a) (.-ts a) (-runc (.-cs a) c true) (.-cq a)
                    (.-cqs a) (.-oc a) (.-_meta a))))

(defn stopcg [c]
  (fn [a]
    (Substitutions. (.-s a) (.-vs a) (.-ts a) (-runc (.-cs a) c false)
                    (.-cq a) (.-cqs a) (.-oc a) (.-_meta a))))

(defprotocol IEntailed
  (-entailed? [c]))

(defn ^boolean ientailed? [c]
  (implements? IEntailed c))

(defn ^boolean entailed? [c c' a]
  (let [id (id c)]
    (and (or ((-> a .-cs .-cm) id)
             (nil? id))
         (-entailed? c'))))

(defn run-constraint [c]
  (fn [a]
    (let [c' (-step c a)]
      (if (or (not (ientailed? c'))
              (not (entailed? c c' a)))
        (if (-runnable? c')
          ((composeg* (runcg c) c' (stopcg c)) a)
          a)
        ((remcg c) a)))))

(defn fix-constraints
  "A goal to run the constraints in cq until it is empty. Of
   course running a constraint may grow cq so this function
   finds the fixpoint."
  [a]
  (loop [^not-native a a]
    (when a
      (let [cq (.-cq a)]
        (if (zero? (count cq))
          (Substitutions. (.-s a) (.-vs a) (.-ts a) (.-cs a) nil (.-cqs a)
                          (.-oc a) (.-_meta a))
          (let [c (first cq)]
            (recur ((run-constraint c)
                    (Substitutions. (.-s a) (.-vs a) (.-ts a) (.-cs a)
                                    (subvec (.-cq a) 1)
                                    (disj (.-cqs a) (id c)) (.-oc a)
                                    (.-_meta a))))))))))

(defn run-constraints [xcs]
  (fn [a]
    (let [cq (.-cq a)
          a  (reduce (fn [a c]
                       (-queue a c))
                     (Substitutions. (.-s a) (.-vs a) (.-ts a) (.-cs a)
                                     (or cq []) (.-cqs a) (.-oc a)
                                     (.-_meta a)) xcs)]
      (if cq
        a
        (fix-constraints a)))))

(defn run-constraints* [xs cs ws]
  (if (or (zero? (count cs))
          (nil? (seq xs)))
    s#
    (fn [a]
      (let [xcs (-constraints-for cs a (first xs) ws)]
        (if (seq xcs)
          ((composeg*
            (run-constraints xcs)
            (run-constraints* (next xs) cs ws)) a)
          ((run-constraints* (next xs) cs ws) a))))))

(defn verify-all-bound [a constrained]
  (letfn [(verify-all-bound* [a constrained]
            (when constrained
              (let [x (first constrained)]
                (if (and (lvar? x)
                         (and (lvar? (-walk a x))
                              (nil? (get-dom a x ::fd))))
                  (throw (js/Error.
                          (str "Constrained variable " x " without domain")))
                  (recur a (next constrained))))))]
    (verify-all-bound* a (seq constrained))))

(defn enforceable-constrained [a]
  (let [cs (.-cs a)
        km (.-km cs)
        cm (.-cm cs)
        vs (keys km)]
    (filter (fn [v]
              (some (fn [cid]
                      (when-let [c (get cm cid)]
                        (enforceable? c)))
                    (get km v)))
            vs)))

(declare force-ans)

(defn enforce-constraints [x]
  (all
   (force-ans x)
   (fn [a]
     (let [constrained (enforceable-constrained a)]
       (verify-all-bound a constrained)
       ((onceo (force-ans constrained)) a)))))

(defn reify-constraints [v r a]
  (let [cs  (.-cs  a)
        rcs (->> (vals (.-cm cs))
                 (filter reifiable?)
                 (map #(-reifyc % v r a))
                 (filter #(not (nil? %)))
                 (into #{}))]
    (if (empty? rcs)
      (choice v empty-f)
      (choice `(~v :- ~@rcs) empty-f))))

(defn reifyg [x]
  (all
   (enforce-constraints x)
   (fn [a]
     (let [v (-walk* a x)
           r (-reify* (with-meta empty-s (meta a)) v)]
       (if (zero? (count r))
         (choice v empty-f)
         (let [v (-walk* r v)]
           (reify-constraints v r a)))))))

(defprotocol IUnwrapConstraint
  (-unwrap [_]))

(defn cgoal [c]
  (reify
    IFn
    (-invoke [_ a]
      (let [c' (-step c a)]
        (if (-runnable? c')
          (when-let [a (c' a)]
            (let [c' (-step c a)]
              (if (and (ientailed? c')
                       (not (entailed? c c' a)))
                ((addcg c) a)
                a)))
          ((addcg c) a))))
    IUnwrapConstraint
    (-unwrap [_] c)))

(defn get-dom-fd
  [a x]
  (if (lvar? x)
    (get-dom a x ::fd)
    x))

(defn sort-by-member-count [a]
  (fn [x y]
    (let-dom a [x dx y dy]
             (< (-member-count dx) (-member-count dy)))))

(defn sort-by-strategy [v x a]
  (case (-> x meta ::strategy)
    ::ff (seq (sort (sort-by-member-count a) v))
    v))

(declare force-ans)

(defprotocol IForceAnswerTerm
  (-force-ans [v x]))

(extend-protocol IForceAnswerTerm
  nil
  (-force-ans [v x] s#)

  default
  (-force-ans [v x]
    (cond (sequential? v)
      (letfn [(loop [ys]
                (if ys
                  (all
                   (force-ans (first ys))
                   (fn [a]
                     (if-let [ys (sort-by-strategy (next ys) x a)]
                       ((loop ys) a)
                       a)))
                  s#))]
        (loop (seq v)))
      
      :else (if (lvar? x)
              (ext-run-csg x v)
              s#)))
  
  PersistentHashMap
  (-force-ans [v x]
    (letfn [(loop [ys]
              (if ys
                (all
                 (force-ans (val (first ys)))
                 (loop (next ys)))
                s#))]
      (loop (seq v))))

  PersistentArrayMap
  (-force-ans [v x]
    (letfn [(loop [ys]
              (if ys
                (all
                 (force-ans (val (first ys)))
                 (loop (next ys)))
                s#))]
      (loop (seq v))))
  
  LCons
  (-force-ans [v x]
    (letfn [(loop [ys]
              (all
               (force-ans (-lfirst ys))
               (if (lcons? (-lnext ys))
                 (loop (-lnext ys))
                 s#)))]
      (loop v))))

(defn force-ans [x]
  (fn [a]
    ((let [v (-walk a x)]
       (if (lvar? v)
         (-force-ans (get-dom-fd a x) v)
         (let [x (-root-var a x)]
           (if (sequential? v)
             (-force-ans (sort-by-strategy v x a) x)
             (-force-ans v x))))) a)))

(defn distribute [v* strategy]
  (fn [a]
    (add-attr a v* ::strategy ::ff)))

;; ===========================================================================
;; CLP(Tree)

(defprotocol IDisunifyTerms
  (-disunify-terms [u v s cs]))

(defprotocol IDisunifyWithNil
  (-disunify-with-nil [v u s cs]))

(defprotocol IDisunifyWithObject
  (-disunify-with-object [v u s cs]))

(defprotocol IDisunifyWithLSeq
  (-disunify-with-lseq [v u s cs]))

(defprotocol IDisunifyWithLVar
  (-disunify-with-lvar [v u s cs]))

(defprotocol IDisunifyWithSequential
  (-disunify-with-seq [v u s cs]))

(defprotocol IDisunifyWithMap
  (-disunify-with-map [v u s cs]))

(defn disunify
  ([s u v] (disunify s u v {:prefixc {}}))
  ([s u v cs]
     (if (identical? u v)
       cs
       (let [u (-walk s u)
             v (-walk s v)]
         (if (or (identical? u v) (= u v))
           cs
           (if (and (not (lvar? u)) (lvar? v))
             (-disunify-terms v u s cs)
             (-disunify-terms u v s cs)))))))

(defn disunify-with-map
  [v u s cs]
  (if (and (map? v) (cljs.core/== (count u) (count v)))
    (loop [ks (seq (keys u)) cs cs]
      (if ks
        (let [kf (first ks)
              vf (get v kf not-found)]
          (when-not (= vf not-found)
            (if-let [cs (disunify s (get u kf) vf cs)]
              (recur (next ks) cs)
              nil)))
        cs))
    nil))

(extend-protocol IDisunifyTerms
  nil
  (-disunify-terms [u v s cs]
    (if-not (nil? v) nil cs))

  LVar
  (-disunify-terms [u v s {pc :prefixc :as cs}]
    (assoc cs :prefixc (assoc pc u v)))

  PersistentArrayMap
  (-disunify-terms [u v s cs]
    (disunify-with-map v u s cs))
  
  PersistentHashMap
  (-disunify-terms [u v s cs]
    (disunify-with-map v u s cs))
  
  default
  (-disunify-terms [u v s cs]
    (cond
      (sequential? u)
      (if (sequential? v)
        (loop [^not-native u (seq u) ^not-native v (seq v) ^not-native cs cs]
          (if u
            (if v
              (let [uv (first u)
                    vv (first v)
                    cs (disunify s uv vv cs)]
                (if cs
                  (recur (next u) (next v) cs)
                  nil))
              nil)
            (if (nil? v)
              cs
              nil)))
        nil)            
      :else (if-not (= u v)
              nil
              cs))))

(defn recover-vars-from-term [x]
  (let [r (atom #{})]
    (-walk-term x
                (fn [x]
                  (if (lvar? x)
                    (do (swap! r conj x) x)
                    x)))
    @r))

(defn recover-vars [p]
  (loop [^not-native p (seq p) ^not-native r #{}]
    (if p
      (let [[u v] (first p)]
        (recur (next p)
               (set/union r (recover-vars-from-term u)
                          (recover-vars-from-term v))))
      r)))

(declare normalize-store ground-term?)

(defprotocol ITreeConstraint)

(defn ^boolean tree-constraint? [x]
  (implements? ITreeConstraint x))

(defprotocol IWithPrefix
  (-with-prefix [_ p]))

(defprotocol IPrefix
  (-prefix [_]))

(defn !=c [p]
  (reify
    ITreeConstraint
    IConstraintStep
    (-step [this s]
      (reify
        IFn
        (-invoke [_ s]
          (let [p (loop [^not-native sp (seq p) ^not-native p p]
                    (if sp
                      (let [[x v] (first sp)
                            xv (-walk* s x)
                            vv (-walk* s v)]
                        (cond
                          (= xv vv) (recur (next sp) (dissoc p x))
                          (nil? (-unify s xv vv)) nil
                          :else (recur (next sp) (assoc (dissoc p x) xv vv))))
                      p))]
            (if p
              (when-not (empty? p)             
                ((composeg*
                  (remcg this)
                  (cgoal (!=c p))) s))
              ((remcg this) s))))
        IRunnable
        (-runnable? [_] (some #(not= (-walk s %) %) (recover-vars p)))
        IEntailed
        (-entailed? [_] (empty? p))))
    IPrefix
    (-prefix [_] p)
    IWithPrefix
    (-with-prefix [_ p] (!=c p))
    IReifiableConstraint
    (-reifyc [this v r a]
      (let [p* (-reify a (map (fn [[lhs rhs]] `(~lhs ~rhs)) p) r)]
        (if (empty? p*)
          '()
          `(~'!= ~@p*))))
    IConstraintOp
    (-rator [_] `cljs.core.logic.macros/!=)
    (-rands [_] (seq (recover-vars p)))
    IConstraintWatchedStores
    (-watched-stores [this] #{::subst})))

(defne distincto
  "A relation which guarantees no element of l will unify
   with another element of l."
  [l]
  ([()])
  ([[h]])
  ([[h0 h1 . t]]
     (!= h0 h1)
     (distincto (lcons h0 t))
     (distincto (lcons h1 t))))

(defne rembero
  "A relation between l and o where is removed from
   l exactly one time."
  [x l o]
  ([_ [x . xs] xs])
  ([_ [y . ys] [y . zs]]
     (!= y x)
     (rembero x ys zs)))

;; ===========================================================================
;; defnc

(defn ^boolean ground-term? [x s]
  (letfn [(-ground-term? [x s]
            (let [x (-walk s x)]
              (if (lvar? x)
                (throw (js/Error.))
                (-walk-term x
                            (fn [x]
                              (let [x (-walk s x)]
                                (cond
                                  (lvar? x) (throw (js/Error.))
                                  (tree-term? x) (-ground-term? x s)
                                  :else x)))))))]
    (try
      (-ground-term? x s)
      true
      (catch js/Error e
        false))))

;; ===========================================================================
;; Predicate Constraint

(defn -predc
  ([x p] (-predc x p p))
  ([x p pform]
     (reify
       IConstraintStep
       (-step [this s]
         (reify
           IFn
           (-invoke [_ s]
             (let [x (-walk s x)]
               (when (p x)
                 ((remcg this) s))))
           IRunnable
           (-runnable? [_]
             (not (lvar? (-walk s x))))))
       IConstraintOp
       (-rator [_] (if (seq? pform)
                     `(predc ~pform)
                     `cljs.core.logic/predc))
       (-rands [_] [x])
       IReifiableConstraint
       (-reifyc [c v r s]
         (if (and (not= p pform) (fn? pform))
           (pform c v r s)
           pform))
       IConstraintWatchedStores
       (-watched-stores [this] #{::subst}))))

(defn predc
  ([x p] (predc x p p))
  ([x p pform] (cgoal (-predc x p pform))))

;; ===========================================================================
;; Negation as failure

(defn tramp [f]
  (loop [f f]
    (if (fn? f)
      (recur (f))
      f)))

(defn -nafc
  ([c args]
     (reify
       IConstraintStep
       (-step [this s]
         (reify
           IFn
           (-invoke [_ s]
             (when-not (tramp ((apply c args) s))
               ((remcg this) s)))
           IRunnable
           (-runnable? [_]
             (every? #(ground-term? % s) args))))
       IConstraintOp
       (-rator [_] `cljs.core.logic/nafc)
       (-rands [_] (vec (concat [c] args)))
       IReifiableConstraint
       (-reifyc [_ v r s]
         `(nafc ~c ~@(-reify s args r)))
       IConstraintWatchedStores
       (-watched-stores [this] #{::subst}))))

(defn nafc
  "EXPERIMENTAL: negation as failure constraint. All arguments to the goal c
   must be ground. If some argument is not ground the execution of this 
   constraint will be delayed."
  [c & args]
  (cgoal (-nafc c args)))

;; ===========================================================================
;; Deep Constraint

(declare treec)

(defprotocol IConstrainTree
  (-constrain-tree [t fc s]))

(defn constrain-tree-map
  [t fc s]
  (loop [^not-native t (seq t) ^not-native s s]
    (if t
      (let [[_ v] (first t)
            s (fc v s)]
        (when s
          (recur (next t) s)))
      s)))

(extend-protocol IConstrainTree
  LCons
  (-constrain-tree [t fc s]
    (loop [t t s s]
      (if (lvar? t)
        (fc t s)
        (when-let [s (fc (-lfirst t) s)]
          (recur (-lnext t) s)))))

  PersistentArrayMap
  (-constrain-tree [t fc s]
    (constrain-tree-map t fc s))

  PersistentHashMap
  (-constrain-tree [t fc s]
    (constrain-tree-map t fc s))

  default
  (-constrain-tree [t fc s]
    (cond
      (sequential? t)
      (loop [^not-native t (seq t) ^not-native s s]
        (if t
          (when-let [s (fc (first t) s)]
            (recur (next t) s))
          s))
      (record? t) (constrain-tree-map t fc s)
      :else nil)))

(defn constrain-tree [t fc]
  (fn [a]
    (-constrain-tree t fc a)))

(defn -fixc
  ([x f reifier] (-fixc x f nil reifier))
  ([x f runnable reifier]
     (reify
       IConstraintStep
       (-step [this s]
         (let [xv (-walk s x)]
           (reify
             IFn
             (-invoke [_ s]
               ((composeg (f xv s reifier) (remcg this)) s))
             IRunnable
             (-runnable? [_]
               (if (fn? runnable)
                 (runnable x s)
                 (not (lvar? xv)))))))
       IConstraintOp
       (-rator [_] `cljs.core.logic/fixc)
       (-rands [_] (if (vector? x) x [x]))
       IReifiableConstraint
       (-reifyc [c v r s]
         (if (fn? reifier)
           (reifier c x v r s)
           (let [x (-walk* r x)]
             `(fixc ~x ~reifier))))
       IConstraintWatchedStores
       (-watched-stores [this] #{::subst}))))

(defn fixc
  ([x f reifier] (fixc x f nil reifier))
  ([x f runnable reifier]
     (cgoal (-fixc x f runnable reifier))))

(defn treec [x fc reifier]
  (fixc x (fn loop [t a reifier]
            (if (tree-term? t)
              (composeg*
               (fc t)
               (constrain-tree t (fn [t a] ((fixc t loop reifier) a))))
              (fc t)))
        reifier))

(defn seqc [v]
  (fixc v
        (fn [t _ _]
          (cond
            (sequential? t) succeed
            (lcons? t) (seqc (-lnext t))
            :else fail))
        (fn [_ v _ r a]
          `(seqc ~(-reify a v r)))))

(comment
  (run* [answer]
    (== answer 5))
  (run* [v1 v2]
    (== {:a v1 :b 2}
        {:a 1 :b v2}))
  (run* [x y]
    (== x y))
  (run* [q]
    (== q 1)
    (== q 2))
  (run* [george]
    (conde
     [(== george :born)]
     [(== george :unborn)]))
  `(+ 1 ~(do 2))
  (run* [q]
    (== q [1 2]))

  (run* [q]
    (fresh [x y]
      (== q [x y])
      (!= y "Java")))

  (run* [q] (!= q "Java"))

  (run* [q]
    (fresh [x y]
      (== [:pizza "Java"] [x y])
      (== q [x y])
      (!= y "Java")))

  (run* [q]
    (fresh [x y]
      (== [:pizza "Scala"] [x y])
      (== q [x y])
      (!= y "Java")))
  
  (run* [q]
    (fresh [n]
      (!= 0 n)
      (== q n)))

  (run* [x y]
    (featurec x {:a {:b 1}})
    (== x {:a y})
    (== y {:b 1}))
  (run* [x y]
    (featurec x {:foo {:bar y}})
    (== x {:foo {:bar 1 :woz 2}}))

  )



