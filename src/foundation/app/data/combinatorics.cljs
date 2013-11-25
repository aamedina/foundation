;;; combinatorics.clj: efficient, functional algorithms for generating lazy
;;; sequences for common combinatorial functions.

;; by Mark Engelberg (mark.engelberg@gmail.com)
;; Last updated - October 31, 2013

(ns foundation.app.data.combinatorics
  (:require-macros [foundation.app.data.macros :refer [reify-bool]]))

(defn- index-combinations
  [n cnt]
  (letfn [(iter-comb [c j]
            (if (> j n) nil
                (let [c (assoc c j (dec (c j)))]
                  (if (< (c j) j) [c (inc j)]
                      (loop [c c, j j]
                        (if (= j 1) [c j]
                            (recur (assoc c (dec j)
                                          (dec (c j))) (dec j))))))))]
    (lazy-seq
     (let [c (vec (cons nil (for [j (range 1 (inc n))]
                              (+ j cnt (- (inc n))))))
           step
           (fn step [c j]
             (cons (reverse (subvec c 1 (inc n)))
                   (lazy-seq (let [next-step (iter-comb c j)]
                               (when next-step
                                 (step (next-step 0) (next-step 1)))))))]
     (step c 1)))))

(defn combinations
  "All the unique ways of taking n different elements from items"
  [items n]
  (let [v-items (vec (reverse items))]
    (if (zero? n) (list ())
        (let [cnt (count items)]
          (cond (> n cnt) nil
                (= n cnt) (list (seq items))
                :else
                (map #(map v-items %) (index-combinations n cnt)))))))

(defn subsets
  "All the subsets of items"
  [items]
  (mapcat (fn [n] (combinations items n))
          (range (inc (count items)))))

(defn cartesian-product
  "All the ways to take one item from each sequence"
  [& seqs]
  (let [v-original-seqs (vec seqs)
        step
        (fn step [v-seqs]
          (let [increment
                (fn [v-seqs]
                  (loop [i (dec (count v-seqs)), v-seqs v-seqs]
                    (if (= i -1) nil
                        (if-let [rst (next (v-seqs i))]
                          (assoc v-seqs i rst)
                          (recur (dec i) (assoc v-seqs i
                                                (v-original-seqs i)))))))]
            (when v-seqs
              (cons (map first v-seqs)
                    (lazy-seq (step (increment v-seqs)))))))]
    (when (every? seq seqs)
      (lazy-seq (step v-original-seqs)))))


(defn selections
  "All the ways of taking n (possibly the same) elements from the sequence of items"
  [items n]
  (apply cartesian-product (take n (repeat items))))


(defn- iter-perm [v]
  (let [len (count v),
        j (loop [i (- len 2)]
            (cond (= i -1) nil
                  (< (v i) (v (inc i))) i
                  :else (recur (dec i))))]
    (when j
      (let [vj (v j),
            l (loop [i (dec len)]
                (if (< vj (v i)) i (recur (dec i))))]
        (loop [v (assoc v j (v l) l vj), k (inc j), l (dec len)]
          (if (< k l)
            (recur (assoc v k (v l) l (v k)) (inc k) (dec l))
            v))))))

(defn- vec-lex-permutations [v]
  (when v (cons v (lazy-seq (vec-lex-permutations (iter-perm v))))))

(defn lex-permutations
  "DEPRECATED as a public function.

In prior versions of the combinatorics library, there were two similar functions: permutations and lex-permutations.  It was a source of confusion to know which to call.  Now, you can always call permutations.  When appropriate (i.e., when you pass in a sorted sequence of numbers), permutations will automatically call lex-permutations as a speed optimization."
  [c]
  (lazy-seq
   (let [vec-sorted (vec (sort c))]
     (if (zero? (count vec-sorted))
       (list [])
       (vec-lex-permutations vec-sorted)))))

(defn- sorted-numbers?
  "Returns true iff s is a sequence of numbers in non-decreasing order"
  [s]
  (and (every? number? s)
       (every? (partial apply <=) (partition 2 1 s))))

(defn- multi-perm
  "Handles the case when you want the permutations of a list with duplicate items."
  [l]
  (let [f (frequencies l),
        v (vec (keys f)),
        indices (apply concat
                       (for [i (range (count v))]
                         (repeat (f (v i)) i)))]
    (map (partial map v) (lex-permutations indices))))

(defn permutations
  "All the distinct permutations of items, lexicographic by index."
  [items]
  (cond
   (sorted-numbers? items) (lex-permutations items),

   (apply distinct? items)
   (let [v (vec items)]
     (map #(map v %) (lex-permutations (range (count v)))))

   :else
   (multi-perm items)))

(defn- update
  [vec index f]
  (let [item (vec index)]
    (assoc vec index (f item))))

(defn- init
  [n s]
  (if s
    (vec (for [i (range 1 (inc n))]
           (max 0 (- i (- n s -1)))))
    (vec (repeat n 0))))

(defn- growth-strings-H
  ([n r s] ; H1
     (growth-strings-H n
                       (init n s)
                       (vec (repeat n 1))
                       r
                       s))
  ([n a b r s]
     (cons a   ; begin H2
           (lazy-seq
            (if (and (> (peek b) (peek a))
                     (if r (< (peek a) (dec r)) true)) ; end H2
              (growth-strings-H n (update a (dec n) inc) b r s)  ; H3
              (let [j (loop [j (- n 2)] ; begin H4
                        (if (and (< (a j) (b j))
                                 (if r
                                   (< (a j) (dec r))
                                   true)
                                 (if s
                                   (<= (- s (b j) (reify-bool (== (inc (a j)) (b j)))) (- n j))
                                   true))
                          j
                          (recur (dec j))))] ; end H4
                (if (zero? j) ;begin H5
                  ()
                  (let [a (update a j inc) ; end H5
                        x (when s
                            (- s
                               (+ (b j)
                                  (reify-bool (= (a j) (b j))))))
                        [a b] (loop [a a
                                     b b
                                     i (inc j)
                                     current-max (+ (b j)
                                                    (reify-bool (== (b j) (a j))))]
                                (cond
                                 (== i n) [a b]

                                 (and s (> i (- (- n x) 1)))
                                 (let [new-a-i (+ (- i n) s)]
                                   (recur (assoc a i new-a-i)
                                          (assoc b i current-max)
                                          (inc i)
                                          (max current-max (inc new-a-i))))

                                 :else (recur (assoc a i 0)
                                              (assoc b i current-max)
                                              (inc i)
                                              current-max)))]
                    (growth-strings-H n a b r s))))))))) ;end H6

(defn- lex-partitions-H
  [N & {from :min to :max}]
  (if (= N 0)
    (if (<= (or from 0) 0 (or to 0))
      '(())
      ())
    (let [from (if (and from (<= from 1)) nil from)
          to (if (and to (>= to N)) nil to)]
      (cond
       (not (<= 1 (or from 1) (or to N) N)) ()

       (= N 0) '(())
       (= N 1) '(([0]))
       (= to 1) `((~(range N)))
       :else (let [growth-strings (growth-strings-H N to from)]
               (for [growth-string growth-strings
                     :let [groups (group-by growth-string (range N))]]
                 (map groups (range (count groups)))))))))

(defn- partitions-H
  [items & args]
  (let [items (vec items)
        N (count items)
        lex (apply lex-partitions-H N args)]
    (for [parts lex]
      (for [part parts]
        (-> (reduce (fn [v o] (conj! v (items o))) (transient []) part) ; mapv
            persistent!)))))

;;;;;; Partitions - Algorithm M

                                        ; In Algorithm M, the idea is to find the partitions of a list of items that may contain duplicates.
                                        ; Within the algorithm, the collections are stored as "multisets," which are maps that map items
                                        ; to their frequency. (keyval pairs with a value of 0 are not included.) Note that in this algorithm,
                                        ; the multisets are not stored as maps, but all multisets are stored together across multiple vectors.

                                        ; Here is what the internal vectors/variables will look like when the algorithm is visiting the
                                        ; partition ([1 1 2 2 2] [1 2] [1]):

                                        ; c[i] =      1 2|1 2|1
                                        ; v[i] =      2 3|1 1|1
                                        ; u[i] =      4 4|2 1|1
                                        ; ---------------------------
                                        ;    i =      0 1 2 3 4 5
                                        ; f[x]=i:     0   1   2 3
                                        ; l = 2
                                        ; n = 8
                                        ; m = 2

                                        ; You can think of (c,v) and (c,u) as the (keys,vals) pairs of two multisets.
                                        ; u[i] represents how many c[i]'s were left before choosing the v values for the current partition.
                                        ; (Note that v[i] could be 0 if u[i] is not 0.)
                                        ; f[x] says where to begin looking in c, u, and v, to find information about the xth partition.
                                        ; l is the number of partitions minus one.
                                        ; n is the total amount of all items (including duplicates).
                                        ; m is the total amount of distinct items.

                                        ; During the algorithm, a and b are temporary variables that end up as f(l) and f(l+1).
                                        ; In other words, they represent the boundaries of the "workspace" of the most recently written-out partition.

(declare m5 m6)

(defn- multiset-partitions-M
  ([multiset r s] ; M1
     (let [n (apply + (vals multiset))
           m (count multiset)
           f []
           c []
           u []
           v []
                                        ; these vectors will grow over time, as new values are assoc'd into the next spots.
           [c u v] (loop [j 0, c c, u u, v v]
                     (if (= j m)
                       [c u v]
                       (recur (inc j)
                              (assoc c j (inc j))
                              (assoc u j (multiset (inc j)))
                              (assoc v j (multiset (inc j))))))
           a 0, b m, l 0
           f (assoc f 0 0, 1 m)
           stack ()]
       (multiset-partitions-M n m f c u v a b l r s)))
  ([n m f c u v a b l r s]
     (let [[u v c j k] (loop [j a, k b, x false     ; M2
                              u u, v v, c c]
                         (if (>= j b)
                           [u v c j k]
                           (let [u (assoc u k (- (u j) (v j)))]
                             (if (= (u k) 0)
                               (recur (inc j), k, true
                                      u, v, c)
                               (if-not x
                                 (let [c (assoc c k (c j))
                                       v (assoc v k (min (v j) (u k)))
                                       x (< (u k) (v j))
                                       k (inc k)
                                       j (inc j)]
                                   (recur j, k, x
                                          u, v, c))
                                 (let [c (assoc c k (c j))
                                       v (assoc v k (u k))
                                       k (inc k)
                                       j (inc j)]
                                   (recur j, k, x
                                          u, v, c)))))))]
       (cond  ; M3
        (and r
             (> k b)
             (= l (dec r))) (m5 n m f c u v a b l r s)
             (and s
                  (<= k b)
                  (< (inc l) s)) (m5 n m f c u v a b l r s)
                  (> k b) (let [a b, b k, l (inc l)
                                f (assoc f (inc l) b)]
                            (recur n m f c u v a b l r s))
                  :else (let [part (for [y (range (inc l))]
                                     (let [first-col (f y)
                                           last-col (dec (f (inc y)))]
                                       (into {} (for [z (range first-col (inc last-col))
                                                      :when (not= (v z) 0)]
                                                  [(c z) (v z)]))))]
                          (cons part ; M4
                                (lazy-seq (m5 n m f c u v a b l r s))))))))

(defn- m5  ; M5
  [n m f c u v a b l r s]
  (let [j (loop [j (dec b)]
            (if (not= (v j) 0)
              j
              (recur (dec j))))]
    (cond
     (and r
          (= j a)
          (< (* (dec (v j)) (- r l))
             (u j))) (m6 n m f c u v a b l r s)
             (and (= j a)
                  (= (v j) 1)) (m6 n m f c u v a b l r s)
                  :else (let [v (update v j dec)
                              diff-uv (if s (apply + (for [i (range a (inc j))]
                                                       (- (u i) (v i)))) nil)
                              v (loop [ks (range (inc j) b)
                                       v v]
                                  (if (empty? ks)
                                    v
                                    (let [k (first ks)]
                                      (recur (rest ks)
                                             (assoc v k (u k))))))
                              min-partitions-after-this (if s (- s (inc l)) 0)
                              amount-to-dec (if s (max 0 (- min-partitions-after-this diff-uv)) 0)
                              v (if (= amount-to-dec 0)
                                  v
                                  (loop [k-1 (dec b), v v
                                         amount amount-to-dec]
                                    (let [vk (v k-1)]
                                      (if (> amount vk)
                                        (recur (dec k-1)
                                               (assoc v k-1 0)
                                               (- amount vk))
                                        (assoc v k-1 (- vk amount))))))]
                          (multiset-partitions-M n m f c u v a b l r s)))))

(defn- m6  ; M6
  [n m f c u v a b l r s]
  (if (= l 0)
    ()
    (let [l (dec l)
          b a
          a (f l)]
      (m5 n m f c u v a b l r s))))

(defn- partitions-M
  [items & {from :min to :max}]
  (if (= (count items) 0)
    (if (<= (or from 0) 0 (or to 0))
      '(())
      ())
    (let [items (vec items)
          ditems (vec (distinct items))
          freqs (frequencies items)
          N (count items)
          M (count ditems)
          from (if (and from (<= from 1)) nil from)
          to (if (and to (>= to N)) nil to)]
      (cond
       (not (<= 1 (or from 1) (or to N) N)) ()
       (= N 1) `(([~(first items)]))
       :else (let [start-multiset (into {} (for [i (range M)
                                                 :let [j (inc i)]]
                                             [j (freqs (ditems i))]))
                   parts (multiset-partitions-M start-multiset to from)]
               (->> multiset
                    (mapcat (fn [[index numtimes]] (repeat numtimes (ditems (dec index)))))
                    vec
                    (for [multiset part])
                    (for [part parts])))))))

(defn partitions
  "All the lexicographic distinct partitions of items.
Optionally pass in :min and/or :max to specify inclusive bounds on the number of parts the items can be split into."
  [items & args]
  (cond
   (= (count items) 0) (apply partitions-H items args)
   (apply distinct? items) (apply partitions-H items args)
   :else (apply partitions-M items args)))
