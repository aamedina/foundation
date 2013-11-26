(ns cljs.core.logic
  (:refer-clojure :exclude [==])
  (:require [clojure.set :as set]
            [clojure.string :as string]
            [cljs.core.logic.protocols :as proto
             :refer [walk non-storable? reifiable? enforceable?
                     tree-constraint? take* unify-terms ext-no-check id bind
                     lfirst lnext ifa -cached? -add reify-tabled
                     -reify-tabled reuse ready? subunify
                     unify-with-record unify-with-pmap -member-count]]
            [cljs.reader :as reader])
  (:require-macros [cljs.core.logic.macros
                    :refer [umi uai llist composeg* bind* mplus* -inc
                            conde fresh -run run run* run-db run-db* run-nc
                            run-nc* all is pred project trace-lvars trace-s
                            log ifa* ifu* conda condu lvaro nonlvaro fnm
                            defnm fne defne matche fna fnu defna defnu matcha
                            matchu tabled let-dom fnc defnc]]))


(def ^:dynamic *logic-dbs* [])

(def fk (js/Error.))

;; Utilities

(defn assoc-meta [x k v]
  (with-meta x (assoc (meta x) k v)))

(defn dissoc-meta [x k]
  (with-meta x (dissoc (meta x) k)))

(defn assoc-dom [x k v]
  (assoc x :doms (assoc (.-doms x) k v)))

(defn dissoc-dom [x k]
  (assoc x :doms (dissoc (.-doms x) k)))

(defn ^boolean record? [x]
  (satisfies? IRecord x))

;; Pair

(deftype Pair [lhs rhs]
  Object
  (toString [_]
    (str "(" lhs " . " rhs ")"))
  
  ILookup
  (-lookup [this k]
    (-lookup this k nil))
  (-lookup [this k not-found]
    (case k
      :lhs lhs
      :rhs rhs
      not-found))

  ICounted
  (-count [_] 2)

  IIndexed
  (-nth [this i]
    (case i
      0 lhs
      1 rhs
      (throw (ex-info "Index out of bounds" {:index i :coll this}))))
  (-nth [_ i not-found]
    (case i
      0 lhs
      1 rhs
      not-found))

  IMapEntry
  (-key [_] lhs)
  (-val [_] rhs)

  IEquiv
  (-equiv [_ o]
    (if (instance? Pair o)
      (and (= lhs (.-lhs o))
           (= rhs (.-rhs o)))
      false))

  IPrintWithWriter
  (-pr-writer [x writer opts]
    (-write writer (str "(" (.-lhs x) " . " (.-rhs x) ")"))))

(defn- pair [lhs rhs]
  (Pair. lhs rhs))

;; Constraint Store

(declare lvar? bindable? add-var)

(defn var-rands [a c]
  (->> (proto/-rands c)
       (map #(proto/root-var a %))
       (filter lvar?)
       (into [])))

(defn unbound-rands [a c]
  (->> (var-rands a c)
       (filter #(lvar? (proto/root-val a %)))))

;; ConstraintStore
;; -----
;; km  - mapping logic vars to constraints ids
;; cm  - mapping constraint ids to to actual constraints
;; cid - the current constraint id, an integer, incremented
;;       everytime we add a constraint to the store
;; running - set of running constraint ids

(deftype ConstraintStore [km cm cid running]
  ILookup
  (-lookup [this k]
    (-lookup this k nil))
  (-lookup [this k not-found]
    (case k
      :km km
      :cm cm
      :cid cid
      :running running
      not-found))

  proto/IConstraintStore
  (addc [this a c]
    (let [vars (var-rands a c)
          c (proto/with-id c cid)
          cs (reduce (fn [cs v] (add-var cs v c)) this vars)]
      (ConstraintStore. (.-km cs) (.-cm cs) (inc cid) running)))

  (updatec [this a c]
    (let [oc (cm (id c))
          nkm (if (satisfies? cljs.core.logic.protocols.IEntailedVar c)
                (reduce (fn [km x]
                          (if (proto/-entailed-var? c x)
                            (dissoc km x)
                            km))
                        km (var-rands a oc))
                km)]
      (ConstraintStore. nkm (assoc cm (id c) c) cid running)))

  (remc [this a c]
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

  (runc [this c state]
    (if state
      (ConstraintStore. km cm cid (conj running (id c)))
      (ConstraintStore. km cm cid (disj running (id c)))))

  (constraints-for [this a x ws]
    (when-let [ids (get km (proto/root-var a x))]
      (filter #((proto/-watched-stores %) ws) (map cm (remove running ids)))))

  (migrate [this x root]
    (let [xcs    (km x)
          rootcs (km root #{})
          nkm    (assoc (dissoc km x) root (into rootcs xcs))]
      (ConstraintStore. nkm cm cid running)))

  ICounted
  (-count [this] (count cm)))

(defn add-var [cs x c]
  (when-not (lvar? x)
    (throw (ex-info
            (str "constraint store assoc expected logic var key: " x) {})))
  (let [cm (.-cm cs)
        km (.-km cs)
        cid (.-cid cs)
        nkm (update-in km [x] (fnil (fn [s] (conj s cid)) #{}))
        ncm (assoc cm cid c)]
    (ConstraintStore. nkm ncm cid (.-running cs))))

(defn make-cs []
  (ConstraintStore. {} {} 0 #{}))

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

;; ==========================================================================
;; Substitutions

(declare empty-s choice lvar lvar? pair lcons run-constraints*)

(defn occurs-check [s u v]
  (let [v (walk s v)]
    (proto/occurs-check-term v u s)))

(defn ext [s u v]
  (if (and (.-oc s) ^boolean (occurs-check s u (if (subst-val? v) (.-v v) v)))
    nil
    (ext-no-check s u v)))

(declare tree-term?)

(defn walk* [s v]
  (let [v (walk s v)]
    (proto/walk-term v
                     (fn [x]
                       (let [x (walk s x)]
                         (if (tree-term? x)
                           (walk* s x)
                           x))))))

(defn unify [s u v]
  (if (identical? u v)
    s
    (let [u (walk s u)
          v (walk s v)]      
      (if (and (lvar? u) (= u v))
        s
        (if (and (not (lvar? u)) (lvar? v))
          (proto/unify-terms v u s)
          (proto/unify-terms u v s))))))

(def unbound-names
  (let [r (range 100)]
    (zipmap r (map (comp symbol str) (repeat "_") r))))

(defn reify-lvar-name [s]
  (let [c (count s)]
    (if (< c 100)
      (unbound-names c)
      (symbol (str "_" (count s))))))

(defn -reify* [s v]
  (let [v (walk s v)]
    (proto/reify-term v s)))

(defn -reify
  ([s v]
     (let [v (walk* s v)]
       (walk* ^not-native (-reify* (with-meta empty-s (meta s)) v) v)))
  ([s v r]
     (let [v (walk* s v)]
       (walk* ^not-native (-reify* r v) v))))

(defn build [s u]
  (proto/build-term u s))

(declare empty-s make-s)

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
  Object
  (toString [_] (str s))

  IEquiv
  (-equiv [this o]
    (or (identical? this o)
        (and (instance? Substitutions o)
             (= s (.-s o)))))

  ICounted
  (-count [this] (count s))

  IMeta
  (-meta [this] _meta)

  IWithMeta
  (-with-meta [this new-meta]
    (Substitutions. s vs ts cs cq cqs oc new-meta))

  ILookup
  (-lookup [this k]
    (-lookup this k nil))
  (-lookup [this k not-found]
    (case k
      :s   s
      :vs  vs
      :ts  ts
      :cs  cs
      :cq  cq
      :cqs cqs
      :oc  oc
      not-found))

  ICollection
  (-conj [this [k v]]
    (if (lvar? k)
      (assoc this k v)
      (throw (ex-info (str "key must be a logic var") {}))))

  IEmptyableCollection
  (-empty [this] empty-s)
  
  IAssociative
  (-contains-key? [this k]
    (contains? #{:s :vs :cs :cq :cqs :oc} k))
  (-assoc [this k v]
    (case k
      :s   (Substitutions. v vs ts cs cq cqs oc _meta)
      :vs  (Substitutions. s  v ts cs cq cqs oc _meta)
      :ts  (Substitutions. s vs  v cs cq cqs oc _meta)
      :cs  (Substitutions. s vs ts  v cq cqs oc _meta)
      :cq  (Substitutions. s vs ts cs  v cqs oc _meta)
      :cqs (Substitutions. s vs ts cs cq   v oc _meta)
      :oc  (Substitutions. s vs ts cs cq cqs  v _meta)
      (throw (ex-info (str "Substitutions has no field for key" k) {}))))

  proto/ISubstitutions
  (ext-no-check [this u v]
    (let [u (if-not (lvar? v)
              (assoc-meta u ::root true)
              u)]
      (Substitutions. (assoc s u v)
                      (if vs (conj vs u)) ts cs cq cqs oc _meta)))

  (walk [this v]
    (if (bindable? v)
      (loop [lv v me (find s v)]
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

  proto/ISubstitutionsCLP
  (root-val [this v]
    (if (lvar? v)
      (loop [lv v [v vp :as me] (find s v)]
        (cond
         (nil? me) lv
         (not (lvar? vp)) vp
         :else (recur vp (find s vp))))
      v))

  (root-var [this v]
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

  (ext-run-cs [this x v]
    (let [x  (proto/root-var this x)
          xs (if (lvar? v)
               [x (proto/root-var this v)]
               [x])
          s  (if oc
               (ext this x v)
               (ext-no-check this x v))]
      (when s
        ((run-constraints* xs cs ::subst) s))))

  (queue [this c]
    (let [id (id c)]
      (if-not (cqs id)
        (-> this
            (assoc :cq (conj (or cq []) c))
            (assoc :cqs (conj cqs id)))
        this)))

  (update-var [this x v]
    (assoc this :s (assoc (.-s this) x v)))

  proto/IBind
  (bind [this g]    
    (g this))
  
  proto/IMPlus
  (mplus [this f]
    (choice this f))
  
  proto/ITake
  (take* [this] this))

(defn add-attr [s x attr attrv]
  (let [x (proto/root-var s x)
        v (proto/root-val s x)]
    (if (subst-val? v)
      (proto/update-var s x (assoc-meta v attr attrv))
      (let [v (if (lvar? v) ::unbound v)]
        (ext-no-check s x (with-meta (subst-val v) {attr attrv}))))))

(defn rem-attr [s x attr]
  (let [x (proto/root-var s x)
        v (proto/root-val s x)]
    (if (subst-val? v)
      (let [new-meta (dissoc (meta v) attr)]
        (if (and (zero? (count new-meta)) (not= (.-v v) ::unbound))
          (proto/update-var s x (.-v v))
          (proto/update-var s x (with-meta v new-meta))))
      s)))

(defn get-attr [s x attr]
  (let [v (proto/root-val s x)]
    (if (subst-val? v)
      (-> v meta attr))))

(defn sync-eset [s v seenset f]
  (if (not= seenset ::no-prop)
    (reduce
     (fn [s y]
       (let [y (proto/root-var s y)]
         (if-not (contains? seenset y)
           (f s y)
           s)))
     s
     (.-eset v))
    s))

(defn add-dom
  ([s x dom domv]
     (let [x (proto/root-var s x)]
       (add-dom s x dom domv nil)))
  ([s x dom domv seenset]
     (let [v (proto/root-val s x)
           s (if (subst-val? v)
               (proto/update-var s x (assoc-dom v dom domv))
               (let [v (if (lvar? v) ::unbound v)]
                 (ext-no-check s x (subst-val v {dom domv}))))]
       (sync-eset s v seenset
                  (fn [s y]
                    (add-dom s y dom domv (conj (or seenset #{}) x)))))))

(defn update-dom
  ([s x dom f]
     (let [x (proto/root-var s x)]
       (update-dom s x dom f nil)))
  ([s x dom f seenset]
     (let [v (proto/root-val s x)
           v (if (lvar? v)
               (subst-val ::unbound)
               v)
           doms (.-doms v)
           s (proto/update-var s x (assoc-dom v dom (f (get doms dom))))]
       (sync-eset s v seenset
                  (fn [s y]
                    (update-dom s y dom f (conj (or seenset #{}) x)))))))

(defn rem-dom
  ([s x dom]
     (let [x (proto/root-var s x)]
       (rem-dom s x dom nil)))
  ([s x dom seenset]
     (let [v (proto/root-val s x)
           s (if (subst-val? v)
               (let [new-doms (dissoc (.-doms v) dom)]
                 (if (and (zero? (count new-doms)) (not= (.-v v) ::unbound))
                   (proto/update-var s x (.-v v))
                   (proto/update-var s x (assoc v :doms new-doms))))
               s)]
       (sync-eset s v seenset
                  (fn [s y] (rem-dom s y dom (conj (or seenset #{}) x)))))))

(defn get-dom [s x dom]
  (let [v (proto/root-val s x)]
    (cond
     (subst-val? v) (let [v' (.-v v)]
                      (if (not= v' ::unbound)
                        v'
                        (-> v :doms dom)))
     (not (lvar? v)) v)))

(defn- make-s
  ([] (make-s {}))
  ([m] (make-s m (make-cs)))
  ([m cs] (Substitutions. m nil nil cs nil #{} true nil)))

(defn tabled-s
  ([] (tabled-s false))
  ([oc] (tabled-s oc nil))
  ([oc meta]
     (-> (with-meta (make-s) meta)
         (assoc :oc oc)
         (assoc :ts (atom {})))))

(def ^not-native empty-s (make-s))
(def empty-f (fn []))

(defn ^boolean subst? [x]
  (instance? Substitutions x))

(defn to-s [v]
  (let [s (reduce (fn [m [k v]] (assoc m k v)) {} v)]
    (make-s s (make-cs))))

(defn annotate [k v]
  (fn [a]
    (vary-meta a assoc k v)))

(defn merge-doms [s x doms]
  (let [xdoms (.-doms (proto/root-val s x))]
    (loop [doms (seq doms) s s]
      (if doms
        (let [[dom domv] (first doms)]
          (let [xdomv (get xdoms dom ::not-found)
                ndomv (if (keyword-identical? xdomv ::not-found)
                        domv
                        (proto/-merge-doms domv xdomv))]
            (when ndomv
              (recur (next doms)
                     (add-dom s x dom ndomv #{})))))
        s))))

(defn update-eset [s doms eset]
  (loop [eset (seq eset) s s]
    (if eset
      (when-let [s (merge-doms s (proto/root-var s (first eset)) doms)]
        (recur (next eset) s))
      s)))

(defn merge-with-root [s x root]
  (let [xv    (proto/root-val s x)
        rootv (proto/root-val s root)
        eset  (set/union (.-eset rootv) (.-eset xv))
        doms (loop [xd (seq (.-doms xv)) rd (.-doms rootv) r {}]
               (if xd
                 (let [[xk xv] (first xd)]
                   (if-let [[_ rv] (find rd xk)]
                     (let [nd (proto/-merge-doms xv rv)]
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
          (ext-no-check root nv)
          (update-eset doms eset)))))

;; ==========================================================================
;; Entanglement

(defn to-subst-val [v]
  (if (subst-val? v)
    v
    (subst-val ::unbound)))

(defn entangle [s x y]
  (let [x  (proto/root-var s x)
        y  (proto/root-var s y)
        xv (to-subst-val (proto/root-val s x))
        yv (to-subst-val (proto/root-val s y))]
    (-> s
        (proto/update-var x (assoc xv :eset (conj (or (.-eset xv) #{}) y)))
        (proto/update-var y (assoc yv :eset (conj (or (.-eset yv) #{}) x))))))

;; ===========================================================================
;; Logic Variables

(deftype LVar [id unique name oname hash meta]
  proto/IVar
  ILookup
  (-lookup [this k]
    (-lookup this k nil))
  (-lookup [this k not-found]
    (case k
      :name name
      :oname oname
      :id id
      not-found))

  IMeta
  (-meta [this] meta)

  IWithMeta
  (-with-meta [this new-meta]
    (LVar. id unique name oname hash new-meta))

  Object
  (toString [_] (str "<lvar:" name ">"))

  IEquiv
  (-equiv [this o]
    (if (satisfies? proto/IVar o)
      (if unique
        (identical? id (.-id o))
        (identical? name (.-name o)))
      false))

  IHash
  (-hash [_] hash)

  proto/IUnifyTerms
  (unify-terms [u v ^not-native s]
    (cond
     (lvar? v)
     (let [repoint (cond
                    (-> u clojure.core/meta ::unbound) [u v]
                    (-> v clojure.core/meta ::unbound) [v u]
                    :else nil)]
       (if repoint
         (let [[root other] repoint
               s (assoc s :cs (proto/migrate (.-cs s) other root))
               s (if (-> other clojure.core/meta ::unbound)
                   (merge-with-root s other root)
                   s)]
           (when s
             (ext-no-check s other root)))
         (ext-no-check s u v)))

     (non-storable? v)
     (throw (ex-info (str v " is non-storable") {}))

     (not= v ::not-found)
     (if (tree-term? v)
       (ext s u v)
       (if (-> u clojure.core/meta ::unbound)
         (ext-no-check s u (assoc (proto/root-val s u) :v v))
         (ext-no-check s u v)))

     :else nil))

  proto/IReifyTerm
  (reify-term [v ^not-native s]
    (let [rf (-> s clojure.core/meta :reify-vars)]
      (if (fn? rf)
        (rf v s)
        (if rf
          (ext s v (reify-lvar-name s))
          (ext s v (.-oname v))))))

  proto/IWalkTerm
  (walk-term [v f]
    (f v))

  proto/IOccursCheckTerm
  (occurs-check-term [v x ^not-native s] (= (walk s v) x))

  proto/IBuildTerm
  (build-term [u ^not-native s]
    (let [m (.-s s)
          cs (.-cs s)
          lv (lvar 'ignore)]
      (if (contains? m u)
        s
        (make-s (assoc m u lv) cs))))

  IPrintWithWriter
  (-pr-writer [x writer opts]
    (-write writer (str "<lvar:" (.-name x) ">"))))

(defn next-id
  []
  (-> (str (gensym))
      (clojure.string/replace #"G__" "")
      reader/read-string))

(defn lvar
  ([]
     (let [id (next-id)
           name (str id)]
       (LVar. id true name nil (hash name) nil)))
  ([name]
     (lvar name true))
  ([name unique]
     (let [oname name
           id   (if unique
                  (next-id)
                  name)
           name (if unique
                  (str name "__" id)
                  (str name))]
       (LVar. id unique name oname (hash name) nil))))

(defn ^boolean lvar? [x]
  (satisfies? proto/IVar x))

(defn lvars [n]
  (repeatedly n lvar))

(defn ^boolean bindable? [x]
  (or (lvar? x)
      (satisfies? proto/IBindable x)))

;; ==========================================================================
;; LCons

(declare lcons?)

(deftype LCons [a d ^:unsynchronized-mutable cache meta]
  proto/ITreeTerm  
  IMeta
  (-meta [this] meta)
  
  IWithMeta
  (-with-meta [this new-meta]
    (LCons. a d cache new-meta))

  proto/LConsSeq
  (lfirst [_] a)
  (lnext [_] d)

  proto/LConsPrint
  (toShortString [this]
    (cond
     (instance? LCons d) (str a " " (proto/toShortString d))
     :else (str a " . " d)))

  Object
  (toString [this] (cond
                    (instance? LCons d)
                    (str "(" a " " (proto/toShortString d) ")")
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
                (let [mef  (lfirst me)
                      youf (lfirst you)]
                  (and (or (= mef youf)
                           (lvar? mef)
                           (lvar? youf))
                       (recur (lnext me) (lnext you))))
                :else (= me you))))))

  IHash
  (-hash [this]
    (if (cljs.core/== cache -1)
      (do
        (set! cache (uai (umi (int 31) (hash d))
                         (hash a)))
        cache)
      cache))

  proto/IUnifyTerms
  (unify-terms [^not-native u ^not-native v ^not-native s]
    (cond
     (sequential? v)
     (loop [u u v (seq v) s s]
       (if-not (nil? v)
         (if (lcons? u)
           (if-let [s (unify s (lfirst u) (first v))]
             (recur (lnext u) (next v) s)
             nil)
           (unify s u v))
         (if (lvar? u)
           (if-let [s (unify s u '())]
             s
             (unify s u nil))
           nil)))

     (lcons? v)
     (loop [u u v v s s]
       (if (lvar? u)
         (unify s u v)
         (cond
          (lvar? v) (unify s v u)
          (and (lcons? u) (lcons? v))
          (if-let [s (unify s (lfirst u) (lfirst v))]
            (recur (lnext u) (lnext v) s)
            nil)
          :else (unify s u v))))

     :else nil))

  proto/IReifyTerm
  (reify-term [v s]    
    (loop [v v s s]
      (if (lcons? v)
        (recur (lnext v) (-reify* s (lfirst v)))
        (-reify* s v))))

  proto/IWalkTerm
  (walk-term [v f]
    (lcons (f (lfirst v))
           (f (lnext v))))

  proto/IOccursCheckTerm
  (occurs-check-term [v x ^not-native s]
    (loop [v v x x s s]
      (if (lcons? v)
        (or (occurs-check s x (lfirst v))
            (recur (lnext v) x s))
        (occurs-check s x v))))

  proto/IBuildTerm
  (build-term [u s]
    (loop [u u s s]
      (if (lcons? u)
        (recur (lnext u) (build s (lfirst u)))
        (build s u))))

  IPrintWithWriter
  (-pr-writer [x writer opts]
    (-write writer (str x))))

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
      (satisfies? proto/ITreeTerm x)))

;; ==========================================================================
;; Unification

(defn unify-with-sequential* [^not-native u ^not-native v ^not-native s]
  (cond
   (sequential? v)
   (if (and (counted? u) (counted? v)
            (not (= (count u) (count v))))
     nil
     (loop [^not-native u (-seq u) ^not-native v (-seq v) s s]
       (if-not (nil? u)
         (if-not (nil? v)
           (if-let [s (unify s (first u) (first v))]
             (recur (next u) (next v) s)
             nil)
           nil)
         (if-not (nil? v) nil s))))

   (lcons? v) (unify-terms v u s)
   :else nil))

(defn unify-with-map* [u v s]
  (when (= (count u) (count v))
    (loop [ks (keys u) s s]
      (if (seq ks)
        (let [kf (first ks)
              vf (get v kf ::not-found)]
          (when-not (keyword-identical? vf ::not-found)
            (if-let [s (unify s (get u kf) vf)]
              (recur (next ks) s)
              nil)))
        s))))

(extend-protocol proto/IUnifyTerms
  nil
  (unify-terms [u v s]
    (if (nil? v) s nil))

  default
  (unify-terms [u v s]
    (cond
     (sequential? u)
     (unify-with-sequential* u v s)
     (map? u)
     (cond
      (satisfies? proto/IUnifyWithRecord v)
      (unify-with-record v u s)

      (map? v)
      (unify-with-map* u v s)

      :else nil)
     :else (if (= u v)
             s
             nil))))

;; ===========================================================================
;; Reification

(extend-protocol proto/IReifyTerm
  nil
  (reify-term [v s] s)

  default
  (reify-term [v ^not-native s]
    (cond (coll? v)
          (loop [v v s s]
            (if (seq v)
              (recur (next v) (-reify* s (first v)))
              s))
          :else s)))

;; ==========================================================================
;; Walk Term

(defn walk-record-term [v f]
  (with-meta
    (loop [v v r (proto/-uninitialized v)]
      (if (seq v)
        (let [[vfk vfv] (first v)]
          (recur (next v) (assoc r (proto/walk-term (f vfk) f)
                                 (proto/walk-term (f vfv) f))))
        r))
    (meta v)))

(defn walk-term-map*
  [^not-native v f]
  (with-meta
    (loop [^not-native v v ^not-native r (transient {})]
      (if (seq v)
        (let [[vfk vfv] (first v)]
          (recur (next v) (assoc! r (proto/walk-term (f vfk) f)
                                  (proto/walk-term (f vfv) f))))
        (persistent! r)))
    (meta v)))

(extend-protocol proto/IWalkTerm
  nil
  (walk-term [v f] (f nil))

  default
  (walk-term [v f]
    (cond (seq? v)
          (with-meta
            (doall (map #(proto/walk-term (f %) f) v))
            (meta v))
          (record? v)
          (walk-record-term v f)
          :else (f v)))

  PersistentHashMap
  (walk-term [v f] (walk-term-map* v f))

  PersistentArrayMap
  (walk-term [v f] (walk-term-map* v f))

  PersistentVector
  (walk-term [v f]
    (with-meta
      (loop [v v ^not-native r (transient [])]
        (if (seq v)
          (recur (next v) (conj! r (proto/walk-term (f (first v)) f)))
          (persistent! r)))
      (meta v))))

;; ===========================================================================
;; Occurs Check Term

(extend-protocol proto/IOccursCheckTerm
  nil
  (occurs-check-term [v x s] false)

  default
  (occurs-check-term [v x s]
    (cond (coll? v)
          (loop [v v x x s s]
            (if (seq v)
              (or (occurs-check s x (first v))
                  (recur (next v) x s))
              false))
          :else false)))

;; ==========================================================================
;; Build Term

(extend-protocol proto/IBuildTerm
  nil
  (build-term [u s] s)

  default
  (build-term [u s]
    (cond (coll? u)
          (reduce build s u)
          :else s)))

;; ===========================================================================
;; Goals and Goal Constructors

(defn composeg
  ([] identity)
  ([g0 g1]
     (fn [a]
       (let [a (g0 a)]
         (and a (g1 a))))))

(deftype Choice [a f]
  ILookup
  (-lookup [this k]
    (-lookup this k nil))
  (-lookup [this k not-found]
    (case k
      :a a
      not-found))
  
  proto/IBind
  (bind [this g]
    (proto/mplus (g a) (fn [] (proto/bind f g))))
  
  proto/IMPlus
  (mplus [this fp]
    (Choice. a (fn [] (proto/mplus (fp) f))))
  
  proto/ITake
  (take* [this]
    (lazy-seq (cons a (lazy-seq (take* f))))))

(defn choice [a f]
  (Choice. a f))

;; ---------------------------------------------------------------------------
;; MZero

(extend-type nil
  proto/IBind
  (bind [_ g] nil)
  proto/IMPlus
  (mplus [_ f] (f))
  proto/ITake
  (take* [_] '()))

;; ---------------------------------------------------------------------------
;; Unit and Inc

(extend-protocol proto/IBind
  default
  (bind [this g]
    (cond (fn? this) (-inc (proto/bind (this) g))
          :else (throw (ex-info "No protocol method" {})))))

(extend-protocol proto/IMPlus
  default
  (mplus [this f]
    (cond (fn? this) (-inc (proto/mplus (f) this))
          :else (Choice. this f))))

(extend-protocol proto/ITake
  default
  (take* [this]
    (cond (fn? this)
          (lazy-seq (proto/take* (this)))
          :else this)))

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

(defn ext-run-csg [u v]
  (fn [a]
    (proto/ext-run-cs a u v)))

(defn ==
  "A goal that attempts to unify terms u and v."
  [u v]
  (fn [a]
    (let [has-cs? (pos? (count (.-cs a)))]
      (let [ap (unify (if has-cs? (assoc a :vs []) a) u v)
            vs (if has-cs? (:vs ap))
            changed? (pos? (count vs))]
        (if changed?
          ((run-constraints* vs (.-cs ap) ::subst) (assoc ap :vs nil))
          ap)))))

(declare reifyg)

(defn solutions
  ([s g]
     (solutions s (lvar) g))
  ([s q g]
     (proto/take* ((all g (reifyg q)) s))))

;; ===========================================================================
;; conda (soft-cut), condu (committed-choice)
;;
;; conda once a line succeeds no others are tried
;; condu a line can succeed only one time

;; TODO : conda and condu should probably understanding logging

;; TODO : if -> when

(extend-protocol proto/IIfA
  nil
  (ifa [b gs c]
    (when c
      (force c)))

  Substitutions
  (ifa [b gs c]
    (reduce bind b gs))

  default
  (ifa [b gs c]
    (cond (fn? b) (-inc (ifa (b) gs c))
          :else nil))

  Choice
  (ifa [b gs c]
    (reduce bind b gs)))

(extend-protocol proto/IIfU
  nil
  (ifu [b gs c]
    (when c
      (force c)))

  Substitutions
  (ifu [b gs c]
    (reduce bind b gs))

  default
  (ifu [b gs c]
    (cond (fn? b) (-inc (proto/ifu (b) gs c))
          :else nil))

  Choice
  (ifu [b gs c]
    (reduce bind (.-a b) gs)))

(defn onceo [g] (condu (g)))

;; ==========================================================================
;; copy-term

(defn copy-term
  "Copies a term u into v. Non-relational."
  [u v]
  (project [u]
    (== (walk* (build empty-s u) u) v)))

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
    (let [coll (walk a coll)]
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
  ([[a . d] _ [a . r]] (appendo d y r)))

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

(deftype AnswerCache [ansl anss _meta]
  Object
  (toString [this]
    (str "<answer-cache:" (pr-str ansl) ">"))

  IMeta
  (-meta [_] _meta)

  IWithMeta
  (-with-meta [_ new-meta]
    (AnswerCache. ansl anss new-meta))

  ILookup
  (-lookup [this k]
    (-lookup this k nil))
  (-lookup [this k not-found]
    (case k
      :ansl ansl
      :anss anss
      not-found))

  proto/IAnswerCache
  (-add [this x]
    (AnswerCache. (conj ansl x) (conj anss x) _meta))
  (-cached? [_ x]
    (let [anss anss]
      (contains? anss x)))

  IPrintWithWriter
  (-pr-writer [x writer opts]
    (-write writer (str x))))

(defn answer-cache []
  (AnswerCache. '() #{} nil))

(defrecord SuspendedStream [cache ansv* f]
  proto/ISuspendedStream
  (ready? [this]
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
  (loop [w w a []]
    (cond
     (nil? w) (failure-cont)

     (ready? (first w))
     (success-cont
      (fn []
        (let [ss (first w)
              f  (.-f ss)
              w  (into a (next w))]
          (if (empty? w)
            (f)
            (proto/mplus (f) (fn [] w))))))

     :else (recur (next w) (conj a (first w))))))

;; ---------------------------------------------------------------------------
;; Extend Substitutions to support tabling

;; CONSIDER: subunify, reify-term-tabled, extending all the necessary types to
;; them

(extend-type Substitutions
  proto/ITabled

  ;; returns a substitution that maps fresh vars to
  ;; new ones. similar to Prolog's copy_term/2. this is to avoid
  ;; prematurely grounding vars.
  (-reify-tabled [this v]
    (let [v (walk this v)]
      (cond
       (lvar? v) (ext-no-check this v (lvar (count (.-s this))))
       (coll? v) (-reify-tabled
                  (-reify-tabled this (first v))
                  (next v))
       :else this)))

  ;; returns the term v with all fresh vars replaced with copies.
  ;; this is to avoid prematurely grounding vars.
  (reify-tabled [this v]
    (let [v (walk* this v)]
      (walk* (-reify-tabled empty-s v) v)))

  ;; argv are the actual parameters passed to a goal. cache
  ;; is the cache from the table for reified argv. on initial
  ;; call start and end are nil - so internally they will be
  ;; initialized to the contents of the cache & 0 respectively
  (reuse [this argv cache start end]
    (let [start (or start (.-ansl @cache))
          end   (or end 0)]
      (letfn [(reuse-loop [ansv*]
                (if (= (count ansv*) end)
                  ;; we've run out of answers terms to reuse in the cache
                  [(make-suspended-stream cache start
                                          (fn [] (reuse this argv cache
                                                        (.-ansl @cache)
                                                        (count start))))]
                  ;; we have answer terms to reuse in the cache
                  (let [ans (first ansv*)]
                    ;; FIXME: sets are unordered! - David
                    (Choice. (subunify this argv (reify-tabled this ans))
                             (fn [] (reuse-loop (rest ansv*)))))))]
        (reuse-loop start))))

  ;; unify an argument with an answer from a cache
  (subunify [this arg ans]
    (let [arg (walk this arg)]
      (cond
       (= arg ans) this
       (lvar? arg) (ext-no-check this arg ans)
       (coll? arg) (subunify
                    (subunify this (next arg) (next ans))
                    (first arg) (first ans))
       :else this))))

;; ---------------------------------------------------------------------------
;; Waiting Stream

(extend-type PersistentVector
  proto/IBind
  (bind [this g]
    (waiting-stream-check
     this
     ;; success continuation
     (fn [f] (proto/bind f g))
     ;; failure continuation
     (fn []
       (into []
             (map (fn [ss]
                    (make-suspended-stream (.-cache ss) (.-ansv* ss)
                                           (fn [] (proto/bind ((.-f ss)) g))))
                  this)))))

  proto/IMPlus
  (mplus [this f]
    (waiting-stream-check this
                          ;; success continuation
                          (fn [fp] (proto/mplus fp f))
                          ;; failure continuation
                          (fn []
                            (let [a-inf (f)]
                              (if (waiting-stream? a-inf)
                                (into a-inf this)
                                (proto/mplus a-inf (fn [] this)))))))

  proto/ITake
  (take* [this]
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
                      (ext-no-check a x (subst-val ::unbound)))
                    a (unbound-rands a c))]
      (assoc a :cs (proto/addc (.-cs a) a c)))))

(defn updatecg [c]
  (fn [a]
    (assoc a :cs (proto/updatec (.-cs a) a c))))

(defn remcg [c]
  (fn [a]
    (assoc a :cs (proto/remc (.-cs a) a c))))

(defn runcg [c]
  (fn [a]
    (assoc a :cs (proto/runc (.-cs a) c true))))

(defn stopcg [c]
  (fn [a]
    (assoc a :cs (proto/runc (.-cs a) c false))))

(defn ^boolean ientailed? [c]
  (satisfies? proto/IEntailed c))

(defn ^boolean entailed? [c c' a]
  (let [id (id c)]
    (and (or ((-> a :cs :cm) id)
             (nil? id))
         (proto/-entailed? c'))))

(defn run-constraint [c]
  (fn [a]
    (let [c' (proto/-step c a)]
      (if (or (not (ientailed? c'))
              (not (entailed? c c' a)))
        (if (proto/-runnable? c')
          ((composeg* (runcg c) c' (stopcg c)) a)
          a)
        ((remcg c) a)))))

;; TODO NOW: try an implementation that allows constraints
;; to run roughly in the order they normally would. reverse
;; xcs in run-constraints, (into cq (reverse xcs)), cq should
;; be persistent list.

;; TRIED: but causes overflow errors for crypt1, and if we switch to BigInt
;; for crypt1 out of memory errors, needs more investigation

(defn fix-constraints
  "A goal to run the constraints in cq until it is empty. Of
   course running a constraint may grow cq so this function
   finds the fixpoint."
  [a]
  (loop [a a]
    (when a
      (let [cq (.-cq a)]
        (if (zero? (count cq))
          (assoc a :cq nil)
          (let [c (first cq)]
            (recur
             ((run-constraint c)
              (-> a
                  (assoc :cq (subvec (.-cq a) 1))
                  (assoc :cqs (disj (.-cqs a) (id c))))))))))))

(defn run-constraints [xcs]
  (fn [a]
    (let [cq (.-cq a)
          a  (reduce (fn [a c]
                       (proto/queue a c))
                     (assoc a :cq (or cq [])) xcs)]
      (if cq
        a
        (fix-constraints a)))))

(defn run-constraints* [xs cs ws]
  (if (or (zero? (count cs))
          (nil? (seq xs)))
    s#
    (fn [a]
      (let [xcs (proto/constraints-for cs a (first xs) ws)]
        (if (seq xcs)
          ((composeg*
            (run-constraints xcs)
            (run-constraints* (next xs) cs ws)) a)
          ((run-constraints* (next xs) cs ws) a))))))

;; TODO: we've hard coded finite domains here

(defn verify-all-bound [a constrained]
  (letfn [(verify-all-bound* [a constrained]
            (when constrained
              (let [x (first constrained)]
                (if (and (lvar? x)
                         (and (lvar? (walk a x))
                              (nil? (get-dom a x ::fd))))
                  (throw (ex-info
                          (str "Constrained variable " x " without domain")
                          {}))
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

;; TODO: we've hard coded force-ans here

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
                 (map #(proto/-reifyc % v r a))
                 (filter #(not (nil? %)))
                 (into #{}))]
    (if (empty? rcs)
      (choice v empty-f)
      (choice `(~v :- ~@rcs) empty-f))))

(defn reifyg [x]
  (all
   (enforce-constraints x)
   (fn [a]
     (let [v (walk* a x)
           r (-reify* (with-meta empty-s (meta a)) v)]
       (if (zero? (count r))
         (choice v empty-f)
         (let [v (walk* r v)]
           (reify-constraints v r a)))))))


(defn cgoal [c]
  (reify
    IFn
    (-invoke [_ a]
      (let [c' (proto/-step c a)]
        (if (proto/-runnable? c')
          (when-let [a (c' a)]
            (let [c' (proto/-step c a)]
              (if (and (ientailed? c')
                       (not (entailed? c c' a)))
                ((addcg c) a)
                a)))
          ((addcg c) a))))
    proto/IUnwrapConstraint
    (-unwrap [_] c)))

;; TODO: this stuff needs to be moved into fd - David

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

;; TODO: handle all Clojure tree types
(extend-protocol proto/IForceAnswerTerm
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
          (map? v)
          (letfn [(loop [ys]
                    (if ys
                      (all
                       (force-ans (val (first ys)))
                       (loop (next ys)))
                      s#))]
            (loop (seq v)))
          :else (if (lvar? x)
                  (ext-run-csg x v)
                  s#)))
  LCons
  (-force-ans [v x]
    (letfn [(loop [ys]
              (all
               (force-ans (lfirst ys))
               (if (lcons? (lnext ys))
                 (loop (lnext ys))
                 s#)))]
      (loop v))))

(defn force-ans [x]
  (fn [a]
    ((let [v (walk a x)]
       (if (lvar? v)
         (proto/-force-ans (get-dom-fd a x) v)
         (let [x (proto/root-var a x)]
           (if (sequential? v)
             (proto/-force-ans (sort-by-strategy v x a) x)
             (proto/-force-ans v x))))) a)))

(defn distribute [v* strategy]
  (fn [a]
    (add-attr a v* ::strategy ::ff)))

;; ===========================================================================
;; CLP(Tree)

(defn disunify
  ([s u v] (disunify s u v {:prefixc {}}))
  ([s u v cs]
     (if (identical? u v)
       cs
       (let [u (walk s u)
             v (walk s v)]
         (if (identical? u v)
           cs
           (if (and (not (lvar? u)) (lvar? v))
             (proto/-disunify-terms v u s cs)
             (proto/-disunify-terms u v s cs)))))))

(extend-protocol proto/IDisunifyTerms
  nil
  (-disunify-terms [u v s cs]
    (if-not (nil? v) nil cs))

  LVar
  (-disunify-terms [u v s {pc :prefixc :as cs}]
    (assoc cs :prefixc (assoc pc u v)))

  default
  (-disunify-terms [u v s cs]
    (cond (sequential? u)
          (if (sequential? v)
            (loop [u (seq u) v (seq v) cs cs]
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
          (map? u)
          (if (and (map? v) (= (count u) (count v)))
            (loop [ks (seq (keys u)) cs cs]
              (if ks
                (let [kf (first ks)
                      vf (get v kf ::not-found)]
                  (when-not (= vf ::not-found)
                    (if-let [cs (disunify s (get u kf) vf cs)]
                      (recur (next ks) cs)
                      nil)))
                cs))
            nil)
          :else (if-not (= u v) nil cs))))

(defn recover-vars-from-term [x]
  (let [r (atom #{})]
    (proto/walk-term
     x
     (fn [x]
       (if (lvar? x)
         (do (swap! r conj x) x)
         x)))
    @r))

(defn recover-vars [p]
  (loop [p (seq p) r #{}]
    (if p
      (let [[u v] (first p)]
        (recur (next p)
               (set/union r (recover-vars-from-term u)
                          (recover-vars-from-term v))))
      r)))

(declare normalize-store ground-term?)

(defn !=c [p]
  (reify
    proto/ITreeConstraint
    proto/IConstraintStep
    (-step [this s]
      (reify
        IFn
        (-invoke [_ s]
          (let [p (loop [sp (seq p) p p]                    
                    (if sp
                      (let [[x v] (first sp)
                            xv (walk* s x)
                            vv (walk* s v)]
                        (cond
                         (= xv vv) (recur (next sp) (dissoc p x))
                         (nil? (unify s xv vv)) nil
                         :else (recur (next sp) (assoc (dissoc p x) xv vv))))
                      p))]
            (if p
              (when-not (empty? p)                
                ((composeg*
                  (remcg this)
                  (cgoal (!=c p))) s))
              ((remcg this) s))))
        proto/IRunnable
        (-runnable? [_]
          (some #(not= (walk s %) %) (recover-vars p)))
        proto/IEntailed
        (-entailed? [_]
          (empty? p))))
    proto/IPrefix
    (-prefix [_] p)
    proto/IWithPrefix
    (-with-prefix [_ p] (!=c p))
    proto/IReifiableConstraint
    (-reifyc [this v r a]
      (let [p* (-reify a (map (fn [[lhs rhs]] `(~lhs ~rhs)) p) r)]
        (if (empty? p*)
          '()
          `(~'!= ~@p*))))
    proto/IConstraintOp
    (-rator [_] `cljs.core.logic/!=)
    (-rands [_] (seq (recover-vars p)))
    proto/IConstraintWatchedStores
    (-watched-stores [this] #{::subst})))

(defn !=
  "Disequality constraint. Ensures that u and v will never
   unify. u and v can be complex terms."
  [u v]
  (fn [a]
    (let [cs (disunify a u v)]
      (if-not (nil? cs)
        (let [p (:prefixc cs)]
          (when-not (empty? p)
            (if (some (fn [[u v]] (nil? (unify a u v))) p)
              a
              ((cgoal (!=c p)) a))))
        a))))

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
;; Partial Maps

(declare featurec partial-map)

(defn unify-with-pmap* [u v s]
  (loop [ks (keys u) s s]
    (if (seq ks)
      (let [kf (first ks)
            vf (get v kf ::not-found)]
        (if (= vf ::not-found)
          nil
          (let [uf (get u kf)]
            (if (lvar? vf)
              (recur (next ks) ((featurec vf uf) s))
              (if (map? uf)
                (if-let [s (unify s (partial-map uf) vf)]
                  (recur (next ks) s))
                (if-let [s (unify s uf vf)]
                  (recur (next ks) s)
                  nil))))))
      s)))

(declare partial-map?)

(defrecord PMap []
  proto/INonStorable

  proto/IUnifyTerms
  (unify-terms [u v s]
    (if (map? v)
      (unify-with-pmap* u v s)
      nil))

  proto/IUnifyWithRecord
  (unify-with-record [u v s]
    (if (map? v)
      (unify-with-pmap* u v s)
      nil))

  proto/IUninitialized
  (-uninitialized [_] (PMap.)))

(defn partial-map
  "Given map m, returns partial map that unifies with maps even if it
   doesn't share all of the keys of that map."
  [m]
  (map->PMap m))

(defn ^boolean partial-map? [x]
  (instance? PMap x))

(extend-protocol proto/IFeature
  default
  (-feature [x]
    (cond (map? x) (partial-map x)
          :else nil)))

(defn -featurec
  [x fs]
  (reify
    proto/IConstraintStep
    (-step [this s]
      (reify
        IFn
        (-invoke [_ s]
          ((composeg
            (== fs x)
            (remcg this)) s))
        proto/IRunnable
        (-runnable? [_]
          (not (lvar? (walk s x))))))
    proto/IConstraintOp
    (-rator [_] `cljs.core.logic/featurec)
    (-rands [_] [x])
    proto/IReifiableConstraint
    (-reifyc [_ v r a]
      (let [fs (into {} fs)
            r  (-reify* r (walk* a fs))]
        `(featurec ~(walk* r x) ~(walk* r fs))))
    proto/IConstraintWatchedStores
    (-watched-stores [this] #{::subst})))

(defn featurec
  "Ensure that a map contains at least the key-value pairs
  in the map fs. fs must be partially instantiated - that is,
  it may contain values which are logic variables to support
  feature extraction."
  [x fs]
  (cgoal (-featurec x (partial-map fs))))

;; ===========================================================================
;; defnc

(defn ^boolean ground-term? [x s]
  (letfn [(-ground-term? [x s]
            (let [x (walk s x)]
              (if (lvar? x)
                (throw fk)
                (proto/walk-term x
                           (fn [x]
                             (let [x (walk s x)]
                               (cond
                                (lvar? x) (throw fk)
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
       proto/IConstraintStep
       (-step [this s]
         (reify
           IFn
           (-invoke [_ s]
             (let [x (walk s x)]
               (when (p x)
                 ((remcg this) s))))
           proto/IRunnable
           (-runnable? [_]
             (not (lvar? (walk s x))))))
       proto/IConstraintOp
       (-rator [_] (if (seq? pform)
                     `(predc ~pform)
                     `cljs.core.logic/predc))
       (-rands [_] [x])
       proto/IReifiableConstraint
       (-reifyc [c v r s]
         (if (and (not= p pform) (fn? pform))
           (pform c v r s)
           pform))
       proto/IConstraintWatchedStores
       (-watched-stores [this] #{::subst}))))

(defn predc
  ([x p] (predc x p p))
  ([x p pform]
     (cgoal (-predc x p pform))))

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
       proto/IConstraintStep
       (-step [this s]
         (reify
           IFn
           (-invoke [_ s]
             (when-not (tramp ((apply c args) s))
               ((remcg this) s)))
           proto/IRunnable
           (-runnable? [_]
             (every? #(ground-term? % s) args))))
       proto/IConstraintOp
       (-rator [_] `cljs.core.logic/nafc)
       (-rands [_] (vec (concat [c] args)))
       proto/IReifiableConstraint
       (-reifyc [_ v r s]
         `(nafc ~c ~@(-reify s args r)))
       proto/IConstraintWatchedStores
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

(extend-protocol proto/IConstrainTree
  LCons
  (-constrain-tree [t fc s]
    (loop [t t s s]
      (if (lvar? t)
        (fc t s)
        (when-let [s (fc (lfirst t) s)]
          (recur (lnext t) s)))))

  default
  (-constrain-tree [t fc s]
    (cond (sequential? t)
          (loop [t (seq t) s s]
            (if t
              (when-let [s (fc (first t) s)]
                (recur (next t) s))
              s))
          (map? t)
          (loop [t (seq t) s s]
            (if t
              (let [[_ v] (first t)
                    s (fc v s)]
                (when s
                  (recur (next t) s)))
              s))
          :else nil)))

(defn constrain-tree [t fc]
  (fn [a]
    (proto/-constrain-tree t fc a)))

(defn -fixc
  ([x f reifier] (-fixc x f nil reifier))
  ([x f runnable reifier]
     (reify
       proto/IConstraintStep
       (-step [this s]
         (let [xv (walk s x)]
           (reify
             IFn
             (-invoke [_ s]
               ((composeg (f xv s reifier) (remcg this)) s))
             proto/IRunnable
             (-runnable? [_]
               (if (fn? runnable)
                 (runnable x s)
                 (not (lvar? xv)))))))
       proto/IConstraintOp
       (-rator [_] `cljs.core.logic/fixc)
       (-rands [_] (if (vector? x) x [x]))
       proto/IReifiableConstraint
       (-reifyc [c v r s]
         (if (fn? reifier)
           (reifier c x v r s)
           (let [x (walk* r x)]
             `(fixc ~x ~reifier))))
       proto/IConstraintWatchedStores
       (-watched-stores [this] #{::subst}))))

(defn fixc
  ([x f reifier] (fixc x f nil reifier))
  ([x f runnable reifier]
     (cgoal (-fixc x f runnable reifier))))

(defn treec [x fc reifier]
  (fixc x
        (fn loop [t a reifier]
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
           (lcons? t) (seqc (lnext t))
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
  )

