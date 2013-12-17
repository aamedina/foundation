// Compiled by ClojureScript 0.0-2120
goog.provide('foundation.app.data.combinatorics');
goog.require('cljs.core');
foundation.app.data.combinatorics.index_combinations = (function index_combinations(n,cnt){var iter_comb = (function iter_comb(c,j){if((j > n))
{return null;
} else
{var c__$1 = cljs.core.assoc.call(null,c,j,(c.call(null,j) - 1));if((c__$1.call(null,j) < j))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,(j + 1)], null);
} else
{var c__$2 = c__$1;var j__$1 = j;while(true){
if(cljs.core._EQ_.call(null,j__$1,1))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$2,j__$1], null);
} else
{{
var G__37424 = cljs.core.assoc.call(null,c__$2,(j__$1 - 1),(c__$2.call(null,j__$1) - 1));
var G__37425 = (j__$1 - 1);
c__$2 = G__37424;
j__$1 = G__37425;
continue;
}
}
break;
}
}
}
});
return (new cljs.core.LazySeq(null,(function (){var c = cljs.core.vec.call(null,cljs.core.cons.call(null,null,(function (){var iter__14652__auto__ = (function iter__37420(s__37421){return (new cljs.core.LazySeq(null,(function (){var s__37421__$1 = s__37421;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__37421__$1);if(temp__4092__auto__)
{var s__37421__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37421__$2))
{var c__14650__auto__ = cljs.core.chunk_first.call(null,s__37421__$2);var size__14651__auto__ = cljs.core.count.call(null,c__14650__auto__);var b__37423 = cljs.core.chunk_buffer.call(null,size__14651__auto__);if((function (){var i__37422 = 0;while(true){
if((i__37422 < size__14651__auto__))
{var j = cljs.core._nth.call(null,c__14650__auto__,i__37422);cljs.core.chunk_append.call(null,b__37423,((j + cnt) + (- (n + 1))));
{
var G__37426 = (i__37422 + 1);
i__37422 = G__37426;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37423),iter__37420.call(null,cljs.core.chunk_rest.call(null,s__37421__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37423),null);
}
} else
{var j = cljs.core.first.call(null,s__37421__$2);return cljs.core.cons.call(null,((j + cnt) + (- (n + 1))),iter__37420.call(null,cljs.core.rest.call(null,s__37421__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14652__auto__.call(null,cljs.core.range.call(null,1,(n + 1)));
})()));var step = ((function (c){
return (function step(c__$1,j){return cljs.core.cons.call(null,cljs.core.reverse.call(null,cljs.core.subvec.call(null,c__$1,1,(n + 1))),(new cljs.core.LazySeq(null,((function (c){
return (function (){var next_step = iter_comb.call(null,c__$1,j);if(cljs.core.truth_(next_step))
{return step.call(null,next_step.call(null,0),next_step.call(null,1));
} else
{return null;
}
});})(c))
,null,null)));
});})(c))
;return step.call(null,c,1);
}),null,null));
});
/**
* All the unique ways of taking n different elements from items
*/
foundation.app.data.combinatorics.combinations = (function combinations(items,n){var v_items = cljs.core.vec.call(null,cljs.core.reverse.call(null,items));if((n === 0))
{return cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.List.EMPTY);
} else
{var cnt = cljs.core.count.call(null,items);if((n > cnt))
{return null;
} else
{if(cljs.core._EQ_.call(null,n,cnt))
{return cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.seq.call(null,items));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.map.call(null,(function (p1__37427_SHARP_){return cljs.core.map.call(null,v_items,p1__37427_SHARP_);
}),foundation.app.data.combinatorics.index_combinations.call(null,n,cnt));
} else
{return null;
}
}
}
}
});
/**
* All the subsets of items
*/
foundation.app.data.combinatorics.subsets = (function subsets(items){return cljs.core.mapcat.call(null,(function (n){return foundation.app.data.combinatorics.combinations.call(null,items,n);
}),cljs.core.range.call(null,(cljs.core.count.call(null,items) + 1)));
});
/**
* All the ways to take one item from each sequence
* @param {...*} var_args
*/
foundation.app.data.combinatorics.cartesian_product = (function() { 
var cartesian_product__delegate = function (seqs){var v_original_seqs = cljs.core.vec.call(null,seqs);var step = ((function (v_original_seqs){
return (function step(v_seqs){var increment = ((function (v_original_seqs){
return (function (v_seqs__$1){var i = (cljs.core.count.call(null,v_seqs__$1) - 1);var v_seqs__$2 = v_seqs__$1;while(true){
if(cljs.core._EQ_.call(null,i,-1))
{return null;
} else
{var temp__4090__auto__ = cljs.core.next.call(null,v_seqs__$2.call(null,i));if(temp__4090__auto__)
{var rst = temp__4090__auto__;return cljs.core.assoc.call(null,v_seqs__$2,i,rst);
} else
{{
var G__37428 = (i - 1);
var G__37429 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__37428;
v_seqs__$2 = G__37429;
continue;
}
}
}
break;
}
});})(v_original_seqs))
;if(cljs.core.truth_(v_seqs))
{return cljs.core.cons.call(null,cljs.core.map.call(null,cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,((function (increment,v_original_seqs){
return (function (){return step.call(null,increment.call(null,v_seqs));
});})(increment,v_original_seqs))
,null,null)));
} else
{return null;
}
});})(v_original_seqs))
;if(cljs.core.every_QMARK_.call(null,cljs.core.seq,seqs))
{return (new cljs.core.LazySeq(null,(function (){return step.call(null,v_original_seqs);
}),null,null));
} else
{return null;
}
};
var cartesian_product = function (var_args){
var seqs = null;if (arguments.length > 0) {
  seqs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return cartesian_product__delegate.call(this,seqs);};
cartesian_product.cljs$lang$maxFixedArity = 0;
cartesian_product.cljs$lang$applyTo = (function (arglist__37430){
var seqs = cljs.core.seq(arglist__37430);
return cartesian_product__delegate(seqs);
});
cartesian_product.cljs$core$IFn$_invoke$arity$variadic = cartesian_product__delegate;
return cartesian_product;
})()
;
/**
* All the ways of taking n (possibly the same) elements from the sequence of items
*/
foundation.app.data.combinatorics.selections = (function selections(items,n){return cljs.core.apply.call(null,foundation.app.data.combinatorics.cartesian_product,cljs.core.take.call(null,n,cljs.core.repeat.call(null,items)));
});
foundation.app.data.combinatorics.iter_perm = (function iter_perm(v){var len = cljs.core.count.call(null,v);var j = (function (){var i = (len - 2);while(true){
if(cljs.core._EQ_.call(null,i,-1))
{return null;
} else
{if((v.call(null,i) < v.call(null,(i + 1))))
{return i;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__37431 = (i - 1);
i = G__37431;
continue;
}
} else
{return null;
}
}
}
break;
}
})();if(cljs.core.truth_(j))
{var vj = v.call(null,j);var l = (function (){var i = (len - 1);while(true){
if((vj < v.call(null,i)))
{return i;
} else
{{
var G__37432 = (i - 1);
i = G__37432;
continue;
}
}
break;
}
})();var v__$1 = cljs.core.assoc.call(null,v,j,v.call(null,l),l,vj);var k = (j + 1);var l__$1 = (len - 1);while(true){
if((k < l__$1))
{{
var G__37433 = cljs.core.assoc.call(null,v__$1,k,v__$1.call(null,l__$1),l__$1,v__$1.call(null,k));
var G__37434 = (k + 1);
var G__37435 = (l__$1 - 1);
v__$1 = G__37433;
k = G__37434;
l__$1 = G__37435;
continue;
}
} else
{return v__$1;
}
break;
}
} else
{return null;
}
});
foundation.app.data.combinatorics.vec_lex_permutations = (function vec_lex_permutations(v){if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,v,(new cljs.core.LazySeq(null,(function (){return vec_lex_permutations.call(null,foundation.app.data.combinatorics.iter_perm.call(null,v));
}),null,null)));
} else
{return null;
}
});
/**
* DEPRECATED as a public function.
* 
* In prior versions of the combinatorics library, there were two similar functions: permutations and lex-permutations.  It was a source of confusion to know which to call.  Now, you can always call permutations.  When appropriate (i.e., when you pass in a sorted sequence of numbers), permutations will automatically call lex-permutations as a speed optimization.
*/
foundation.app.data.combinatorics.lex_permutations = (function lex_permutations(c){return (new cljs.core.LazySeq(null,(function (){var vec_sorted = cljs.core.vec.call(null,cljs.core.sort.call(null,c));if((cljs.core.count.call(null,vec_sorted) === 0))
{return cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY);
} else
{return foundation.app.data.combinatorics.vec_lex_permutations.call(null,vec_sorted);
}
}),null,null));
});
/**
* Returns true iff s is a sequence of numbers in non-decreasing order
*/
foundation.app.data.combinatorics.sorted_numbers_QMARK_ = (function sorted_numbers_QMARK_(s){return (cljs.core.every_QMARK_.call(null,cljs.core.number_QMARK_,s)) && (cljs.core.every_QMARK_.call(null,cljs.core.partial.call(null,cljs.core.apply,cljs.core._LT__EQ_),cljs.core.partition.call(null,2,1,s)));
});
/**
* Handles the case when you want the permutations of a list with duplicate items.
*/
foundation.app.data.combinatorics.multi_perm = (function multi_perm(l){var f = cljs.core.frequencies.call(null,l);var v = cljs.core.vec.call(null,cljs.core.keys.call(null,f));var indices = cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__14652__auto__ = ((function (f,v){
return (function iter__37440(s__37441){return (new cljs.core.LazySeq(null,((function (f,v){
return (function (){var s__37441__$1 = s__37441;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__37441__$1);if(temp__4092__auto__)
{var s__37441__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37441__$2))
{var c__14650__auto__ = cljs.core.chunk_first.call(null,s__37441__$2);var size__14651__auto__ = cljs.core.count.call(null,c__14650__auto__);var b__37443 = cljs.core.chunk_buffer.call(null,size__14651__auto__);if((function (){var i__37442 = 0;while(true){
if((i__37442 < size__14651__auto__))
{var i = cljs.core._nth.call(null,c__14650__auto__,i__37442);cljs.core.chunk_append.call(null,b__37443,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));
{
var G__37444 = (i__37442 + 1);
i__37442 = G__37444;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37443),iter__37440.call(null,cljs.core.chunk_rest.call(null,s__37441__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37443),null);
}
} else
{var i = cljs.core.first.call(null,s__37441__$2);return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),iter__37440.call(null,cljs.core.rest.call(null,s__37441__$2)));
}
} else
{return null;
}
break;
}
});})(f,v))
,null,null));
});})(f,v))
;return iter__14652__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,v)));
})());return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.map,v),foundation.app.data.combinatorics.lex_permutations.call(null,indices));
});
/**
* All the distinct permutations of items, lexicographic by index.
*/
foundation.app.data.combinatorics.permutations = (function permutations(items){if(foundation.app.data.combinatorics.sorted_numbers_QMARK_.call(null,items))
{return foundation.app.data.combinatorics.lex_permutations.call(null,items);
} else
{if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core.distinct_QMARK_,items)))
{var v = cljs.core.vec.call(null,items);return cljs.core.map.call(null,(function (p1__37445_SHARP_){return cljs.core.map.call(null,v,p1__37445_SHARP_);
}),foundation.app.data.combinatorics.lex_permutations.call(null,cljs.core.range.call(null,cljs.core.count.call(null,v))));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return foundation.app.data.combinatorics.multi_perm.call(null,items);
} else
{return null;
}
}
}
});
foundation.app.data.combinatorics.update = (function update(vec,index,f){var item = vec.call(null,index);return cljs.core.assoc.call(null,vec,index,f.call(null,item));
});
foundation.app.data.combinatorics.init = (function init(n,s){if(cljs.core.truth_(s))
{return cljs.core.vec.call(null,(function (){var iter__14652__auto__ = (function iter__37450(s__37451){return (new cljs.core.LazySeq(null,(function (){var s__37451__$1 = s__37451;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__37451__$1);if(temp__4092__auto__)
{var s__37451__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37451__$2))
{var c__14650__auto__ = cljs.core.chunk_first.call(null,s__37451__$2);var size__14651__auto__ = cljs.core.count.call(null,c__14650__auto__);var b__37453 = cljs.core.chunk_buffer.call(null,size__14651__auto__);if((function (){var i__37452 = 0;while(true){
if((i__37452 < size__14651__auto__))
{var i = cljs.core._nth.call(null,c__14650__auto__,i__37452);cljs.core.chunk_append.call(null,b__37453,(function (){var x__14266__auto__ = 0;var y__14267__auto__ = (i - ((n - s) - -1));return ((x__14266__auto__ > y__14267__auto__) ? x__14266__auto__ : y__14267__auto__);
})());
{
var G__37454 = (i__37452 + 1);
i__37452 = G__37454;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37453),iter__37450.call(null,cljs.core.chunk_rest.call(null,s__37451__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37453),null);
}
} else
{var i = cljs.core.first.call(null,s__37451__$2);return cljs.core.cons.call(null,(function (){var x__14266__auto__ = 0;var y__14267__auto__ = (i - ((n - s) - -1));return ((x__14266__auto__ > y__14267__auto__) ? x__14266__auto__ : y__14267__auto__);
})(),iter__37450.call(null,cljs.core.rest.call(null,s__37451__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14652__auto__.call(null,cljs.core.range.call(null,1,(n + 1)));
})());
} else
{return cljs.core.vec.call(null,cljs.core.repeat.call(null,n,0));
}
});
foundation.app.data.combinatorics.growth_strings_H = (function() {
var growth_strings_H = null;
var growth_strings_H__3 = (function (n,r,s){return growth_strings_H.call(null,n,foundation.app.data.combinatorics.init.call(null,n,s),cljs.core.vec.call(null,cljs.core.repeat.call(null,n,1)),r,s);
});
var growth_strings_H__5 = (function (n,a,b,r,s){return cljs.core.cons.call(null,a,(new cljs.core.LazySeq(null,(function (){if((function (){var and__13942__auto__ = (cljs.core.peek.call(null,b) > cljs.core.peek.call(null,a));if(and__13942__auto__)
{if(cljs.core.truth_(r))
{return (cljs.core.peek.call(null,a) < (r - 1));
} else
{return true;
}
} else
{return and__13942__auto__;
}
})())
{return growth_strings_H.call(null,n,foundation.app.data.combinatorics.update.call(null,a,(n - 1),cljs.core.inc),b,r,s);
} else
{var j = (function (){var j = (n - 2);while(true){
if((function (){var and__13942__auto__ = (a.call(null,j) < b.call(null,j));if(and__13942__auto__)
{var and__13942__auto____$1 = (cljs.core.truth_(r)?(a.call(null,j) < (r - 1)):true);if(and__13942__auto____$1)
{if(cljs.core.truth_(s))
{return (((s - b.call(null,j)) - ((((a.call(null,j) + 1) === b.call(null,j)))?1:0)) <= (n - j));
} else
{return true;
}
} else
{return and__13942__auto____$1;
}
} else
{return and__13942__auto__;
}
})())
{return j;
} else
{{
var G__37457 = (j - 1);
j = G__37457;
continue;
}
}
break;
}
})();if((j === 0))
{return cljs.core.List.EMPTY;
} else
{var a__$1 = foundation.app.data.combinatorics.update.call(null,a,j,cljs.core.inc);var x = (cljs.core.truth_(s)?(s - (b.call(null,j) + ((cljs.core._EQ_.call(null,a__$1.call(null,j),b.call(null,j)))?1:0))):null);var vec__37456 = (function (){var a__$2 = a__$1;var b__$1 = b;var i = (j + 1);var current_max = (b__$1.call(null,j) + (((b__$1.call(null,j) === a__$2.call(null,j)))?1:0));while(true){
if((i === n))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$2,b__$1], null);
} else
{if(cljs.core.truth_((function (){var and__13942__auto__ = s;if(cljs.core.truth_(and__13942__auto__))
{return (i > ((n - x) - 1));
} else
{return and__13942__auto__;
}
})()))
{var new_a_i = ((i - n) + s);{
var G__37458 = cljs.core.assoc.call(null,a__$2,i,new_a_i);
var G__37459 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__37460 = (i + 1);
var G__37461 = (function (){var x__14266__auto__ = current_max;var y__14267__auto__ = (new_a_i + 1);return ((x__14266__auto__ > y__14267__auto__) ? x__14266__auto__ : y__14267__auto__);
})();
a__$2 = G__37458;
b__$1 = G__37459;
i = G__37460;
current_max = G__37461;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__37462 = cljs.core.assoc.call(null,a__$2,i,0);
var G__37463 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__37464 = (i + 1);
var G__37465 = current_max;
a__$2 = G__37462;
b__$1 = G__37463;
i = G__37464;
current_max = G__37465;
continue;
}
} else
{return null;
}
}
}
break;
}
})();var a__$2 = cljs.core.nth.call(null,vec__37456,0,null);var b__$1 = cljs.core.nth.call(null,vec__37456,1,null);return growth_strings_H.call(null,n,a__$2,b__$1,r,s);
}
}
}),null,null)));
});
growth_strings_H = function(n,a,b,r,s){
switch(arguments.length){
case 3:
return growth_strings_H__3.call(this,n,a,b);
case 5:
return growth_strings_H__5.call(this,n,a,b,r,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
growth_strings_H.cljs$core$IFn$_invoke$arity$3 = growth_strings_H__3;
growth_strings_H.cljs$core$IFn$_invoke$arity$5 = growth_strings_H__5;
return growth_strings_H;
})()
;
/**
* @param {...*} var_args
*/
foundation.app.data.combinatorics.lex_partitions_H = (function() { 
var lex_partitions_H__delegate = function (N,p__37466){var map__37472 = p__37466;var map__37472__$1 = ((cljs.core.seq_QMARK_.call(null,map__37472))?cljs.core.apply.call(null,cljs.core.hash_map,map__37472):map__37472);var from = cljs.core.get.call(null,map__37472__$1,new cljs.core.Keyword(null,"min","min",1014012356));var to = cljs.core.get.call(null,map__37472__$1,new cljs.core.Keyword(null,"max","max",1014012118));if(cljs.core._EQ_.call(null,N,0))
{if((((function (){var or__13954__auto__ = from;if(cljs.core.truth_(or__13954__auto__))
{return or__13954__auto__;
} else
{return 0;
}
})() <= 0)) && ((0 <= (function (){var or__13954__auto__ = to;if(cljs.core.truth_(or__13954__auto__))
{return or__13954__auto__;
} else
{return 0;
}
})())))
{return cljs.core.list(cljs.core.List.EMPTY);
} else
{return cljs.core.List.EMPTY;
}
} else
{var from__$1 = (cljs.core.truth_((function (){var and__13942__auto__ = from;if(cljs.core.truth_(and__13942__auto__))
{return (from <= 1);
} else
{return and__13942__auto__;
}
})())?null:from);var to__$1 = (cljs.core.truth_((function (){var and__13942__auto__ = to;if(cljs.core.truth_(and__13942__auto__))
{return (to >= N);
} else
{return and__13942__auto__;
}
})())?null:to);if(!(((1 <= (function (){var or__13954__auto__ = from__$1;if(cljs.core.truth_(or__13954__auto__))
{return or__13954__auto__;
} else
{return 1;
}
})())) && ((((function (){var or__13954__auto__ = from__$1;if(cljs.core.truth_(or__13954__auto__))
{return or__13954__auto__;
} else
{return 1;
}
})() <= (function (){var or__13954__auto__ = to__$1;if(cljs.core.truth_(or__13954__auto__))
{return or__13954__auto__;
} else
{return N;
}
})())) && (((function (){var or__13954__auto__ = to__$1;if(cljs.core.truth_(or__13954__auto__))
{return or__13954__auto__;
} else
{return N;
}
})() <= N)))))
{return cljs.core.List.EMPTY;
} else
{if(cljs.core._EQ_.call(null,N,0))
{return cljs.core.list(cljs.core.List.EMPTY);
} else
{if(cljs.core._EQ_.call(null,N,1))
{return cljs.core.list(cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [0], null)));
} else
{if(cljs.core._EQ_.call(null,to__$1,1))
{return cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.range.call(null,N)))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,209),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,19),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,209),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,31)))))))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,209),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,209),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,32)))));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var growth_strings = foundation.app.data.combinatorics.growth_strings_H.call(null,N,to__$1,from__$1);var iter__14652__auto__ = (function iter__37473(s__37474){return (new cljs.core.LazySeq(null,(function (){var s__37474__$1 = s__37474;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__37474__$1);if(temp__4092__auto__)
{var s__37474__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37474__$2))
{var c__14650__auto__ = cljs.core.chunk_first.call(null,s__37474__$2);var size__14651__auto__ = cljs.core.count.call(null,c__14650__auto__);var b__37476 = cljs.core.chunk_buffer.call(null,size__14651__auto__);if((function (){var i__37475 = 0;while(true){
if((i__37475 < size__14651__auto__))
{var growth_string = cljs.core._nth.call(null,c__14650__auto__,i__37475);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));cljs.core.chunk_append.call(null,b__37476,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))));
{
var G__37477 = (i__37475 + 1);
i__37475 = G__37477;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37476),iter__37473.call(null,cljs.core.chunk_rest.call(null,s__37474__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37476),null);
}
} else
{var growth_string = cljs.core.first.call(null,s__37474__$2);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));return cljs.core.cons.call(null,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))),iter__37473.call(null,cljs.core.rest.call(null,s__37474__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14652__auto__.call(null,growth_strings);
} else
{return null;
}
}
}
}
}
}
};
var lex_partitions_H = function (N,var_args){
var p__37466 = null;if (arguments.length > 1) {
  p__37466 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return lex_partitions_H__delegate.call(this,N,p__37466);};
lex_partitions_H.cljs$lang$maxFixedArity = 1;
lex_partitions_H.cljs$lang$applyTo = (function (arglist__37478){
var N = cljs.core.first(arglist__37478);
var p__37466 = cljs.core.rest(arglist__37478);
return lex_partitions_H__delegate(N,p__37466);
});
lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic = lex_partitions_H__delegate;
return lex_partitions_H;
})()
;
/**
* @param {...*} var_args
*/
foundation.app.data.combinatorics.partitions_H = (function() { 
var partitions_H__delegate = function (items,args){var items__$1 = cljs.core.vec.call(null,items);var N = cljs.core.count.call(null,items__$1);var lex = cljs.core.apply.call(null,foundation.app.data.combinatorics.lex_partitions_H,N,args);var iter__14652__auto__ = (function iter__37499(s__37500){return (new cljs.core.LazySeq(null,(function (){var s__37500__$1 = s__37500;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__37500__$1);if(temp__4092__auto__)
{var s__37500__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37500__$2))
{var c__14650__auto__ = cljs.core.chunk_first.call(null,s__37500__$2);var size__14651__auto__ = cljs.core.count.call(null,c__14650__auto__);var b__37502 = cljs.core.chunk_buffer.call(null,size__14651__auto__);if((function (){var i__37501 = 0;while(true){
if((i__37501 < size__14651__auto__))
{var parts = cljs.core._nth.call(null,c__14650__auto__,i__37501);cljs.core.chunk_append.call(null,b__37502,(function (){var iter__14652__auto__ = ((function (i__37501,parts,c__14650__auto__,size__14651__auto__,b__37502,s__37500__$2,temp__4092__auto__){
return (function iter__37511(s__37512){return (new cljs.core.LazySeq(null,((function (i__37501,parts,c__14650__auto__,size__14651__auto__,b__37502,s__37500__$2,temp__4092__auto__){
return (function (){var s__37512__$1 = s__37512;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__37512__$1);if(temp__4092__auto____$1)
{var s__37512__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__37512__$2))
{var c__14650__auto____$1 = cljs.core.chunk_first.call(null,s__37512__$2);var size__14651__auto____$1 = cljs.core.count.call(null,c__14650__auto____$1);var b__37514 = cljs.core.chunk_buffer.call(null,size__14651__auto____$1);if((function (){var i__37513 = 0;while(true){
if((i__37513 < size__14651__auto____$1))
{var part = cljs.core._nth.call(null,c__14650__auto____$1,i__37513);cljs.core.chunk_append.call(null,b__37514,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__37513,i__37501,part,c__14650__auto____$1,size__14651__auto____$1,b__37514,s__37512__$2,temp__4092__auto____$1,parts,c__14650__auto__,size__14651__auto__,b__37502,s__37500__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__37513,i__37501,part,c__14650__auto____$1,size__14651__auto____$1,b__37514,s__37512__$2,temp__4092__auto____$1,parts,c__14650__auto__,size__14651__auto__,b__37502,s__37500__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__37519 = (i__37513 + 1);
i__37513 = G__37519;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37514),iter__37511.call(null,cljs.core.chunk_rest.call(null,s__37512__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37514),null);
}
} else
{var part = cljs.core.first.call(null,s__37512__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__37501,part,s__37512__$2,temp__4092__auto____$1,parts,c__14650__auto__,size__14651__auto__,b__37502,s__37500__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__37501,part,s__37512__$2,temp__4092__auto____$1,parts,c__14650__auto__,size__14651__auto__,b__37502,s__37500__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__37511.call(null,cljs.core.rest.call(null,s__37512__$2)));
}
} else
{return null;
}
break;
}
});})(i__37501,parts,c__14650__auto__,size__14651__auto__,b__37502,s__37500__$2,temp__4092__auto__))
,null,null));
});})(i__37501,parts,c__14650__auto__,size__14651__auto__,b__37502,s__37500__$2,temp__4092__auto__))
;return iter__14652__auto__.call(null,parts);
})());
{
var G__37520 = (i__37501 + 1);
i__37501 = G__37520;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37502),iter__37499.call(null,cljs.core.chunk_rest.call(null,s__37500__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37502),null);
}
} else
{var parts = cljs.core.first.call(null,s__37500__$2);return cljs.core.cons.call(null,(function (){var iter__14652__auto__ = ((function (parts,s__37500__$2,temp__4092__auto__){
return (function iter__37515(s__37516){return (new cljs.core.LazySeq(null,((function (parts,s__37500__$2,temp__4092__auto__){
return (function (){var s__37516__$1 = s__37516;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__37516__$1);if(temp__4092__auto____$1)
{var s__37516__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__37516__$2))
{var c__14650__auto__ = cljs.core.chunk_first.call(null,s__37516__$2);var size__14651__auto__ = cljs.core.count.call(null,c__14650__auto__);var b__37518 = cljs.core.chunk_buffer.call(null,size__14651__auto__);if((function (){var i__37517 = 0;while(true){
if((i__37517 < size__14651__auto__))
{var part = cljs.core._nth.call(null,c__14650__auto__,i__37517);cljs.core.chunk_append.call(null,b__37518,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__37517,part,c__14650__auto__,size__14651__auto__,b__37518,s__37516__$2,temp__4092__auto____$1,parts,s__37500__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__37517,part,c__14650__auto__,size__14651__auto__,b__37518,s__37516__$2,temp__4092__auto____$1,parts,s__37500__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__37521 = (i__37517 + 1);
i__37517 = G__37521;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37518),iter__37515.call(null,cljs.core.chunk_rest.call(null,s__37516__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37518),null);
}
} else
{var part = cljs.core.first.call(null,s__37516__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (part,s__37516__$2,temp__4092__auto____$1,parts,s__37500__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(part,s__37516__$2,temp__4092__auto____$1,parts,s__37500__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__37515.call(null,cljs.core.rest.call(null,s__37516__$2)));
}
} else
{return null;
}
break;
}
});})(parts,s__37500__$2,temp__4092__auto__))
,null,null));
});})(parts,s__37500__$2,temp__4092__auto__))
;return iter__14652__auto__.call(null,parts);
})(),iter__37499.call(null,cljs.core.rest.call(null,s__37500__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14652__auto__.call(null,lex);
};
var partitions_H = function (items,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions_H__delegate.call(this,items,args);};
partitions_H.cljs$lang$maxFixedArity = 1;
partitions_H.cljs$lang$applyTo = (function (arglist__37522){
var items = cljs.core.first(arglist__37522);
var args = cljs.core.rest(arglist__37522);
return partitions_H__delegate(items,args);
});
partitions_H.cljs$core$IFn$_invoke$arity$variadic = partitions_H__delegate;
return partitions_H;
})()
;
foundation.app.data.combinatorics.multiset_partitions_M = (function() {
var multiset_partitions_M = null;
var multiset_partitions_M__3 = (function (multiset,r,s){var n = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,multiset));var m = cljs.core.count.call(null,multiset);var f = cljs.core.PersistentVector.EMPTY;var c = cljs.core.PersistentVector.EMPTY;var u = cljs.core.PersistentVector.EMPTY;var v = cljs.core.PersistentVector.EMPTY;var vec__37545 = (function (){var j = 0;var c__$1 = c;var u__$1 = u;var v__$1 = v;while(true){
if(cljs.core._EQ_.call(null,j,m))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,u__$1,v__$1], null);
} else
{{
var G__37567 = (j + 1);
var G__37568 = cljs.core.assoc.call(null,c__$1,j,(j + 1));
var G__37569 = cljs.core.assoc.call(null,u__$1,j,multiset.call(null,(j + 1)));
var G__37570 = cljs.core.assoc.call(null,v__$1,j,multiset.call(null,(j + 1)));
j = G__37567;
c__$1 = G__37568;
u__$1 = G__37569;
v__$1 = G__37570;
continue;
}
}
break;
}
})();var c__$1 = cljs.core.nth.call(null,vec__37545,0,null);var u__$1 = cljs.core.nth.call(null,vec__37545,1,null);var v__$1 = cljs.core.nth.call(null,vec__37545,2,null);var a = 0;var b = m;var l = 0;var f__$1 = cljs.core.assoc.call(null,f,0,0,1,m);var stack = cljs.core.List.EMPTY;return multiset_partitions_M.call(null,n,m,f__$1,c__$1,u__$1,v__$1,a,b,l,r,s);
});
var multiset_partitions_M__11 = (function (n,m,f,c,u,v,a,b,l,r,s){while(true){
var vec__37546 = (function (){var j = a;var k = b;var x = false;var u__$1 = u;var v__$1 = v;var c__$1 = c;while(true){
if((j >= b))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [u__$1,v__$1,c__$1,j,k], null);
} else
{var u__$2 = cljs.core.assoc.call(null,u__$1,k,(u__$1.call(null,j) - v__$1.call(null,j)));if(cljs.core._EQ_.call(null,u__$2.call(null,k),0))
{{
var G__37571 = (j + 1);
var G__37572 = k;
var G__37573 = true;
var G__37574 = u__$2;
var G__37575 = v__$1;
var G__37576 = c__$1;
j = G__37571;
k = G__37572;
x = G__37573;
u__$1 = G__37574;
v__$1 = G__37575;
c__$1 = G__37576;
continue;
}
} else
{if(!(x))
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,(function (){var x__14273__auto__ = v__$1.call(null,j);var y__14274__auto__ = u__$2.call(null,k);return ((x__14273__auto__ < y__14274__auto__) ? x__14273__auto__ : y__14274__auto__);
})());var x__$1 = (u__$2.call(null,k) < v__$2.call(null,j));var k__$1 = (k + 1);var j__$1 = (j + 1);{
var G__37577 = j__$1;
var G__37578 = k__$1;
var G__37579 = x__$1;
var G__37580 = u__$2;
var G__37581 = v__$2;
var G__37582 = c__$2;
j = G__37577;
k = G__37578;
x = G__37579;
u__$1 = G__37580;
v__$1 = G__37581;
c__$1 = G__37582;
continue;
}
} else
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,u__$2.call(null,k));var k__$1 = (k + 1);var j__$1 = (j + 1);{
var G__37583 = j__$1;
var G__37584 = k__$1;
var G__37585 = x;
var G__37586 = u__$2;
var G__37587 = v__$2;
var G__37588 = c__$2;
j = G__37583;
k = G__37584;
x = G__37585;
u__$1 = G__37586;
v__$1 = G__37587;
c__$1 = G__37588;
continue;
}
}
}
}
break;
}
})();var u__$1 = cljs.core.nth.call(null,vec__37546,0,null);var v__$1 = cljs.core.nth.call(null,vec__37546,1,null);var c__$1 = cljs.core.nth.call(null,vec__37546,2,null);var j = cljs.core.nth.call(null,vec__37546,3,null);var k = cljs.core.nth.call(null,vec__37546,4,null);if(cljs.core.truth_((function (){var and__13942__auto__ = r;if(cljs.core.truth_(and__13942__auto__))
{return ((k > b)) && (cljs.core._EQ_.call(null,l,(r - 1)));
} else
{return and__13942__auto__;
}
})()))
{return foundation.app.data.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
} else
{if(cljs.core.truth_((function (){var and__13942__auto__ = s;if(cljs.core.truth_(and__13942__auto__))
{return ((k <= b)) && (((l + 1) < s));
} else
{return and__13942__auto__;
}
})()))
{return foundation.app.data.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
} else
{if((k > b))
{var a__$1 = b;var b__$1 = k;var l__$1 = (l + 1);var f__$1 = cljs.core.assoc.call(null,f,(l__$1 + 1),b__$1);{
var G__37589 = n;
var G__37590 = m;
var G__37591 = f__$1;
var G__37592 = c__$1;
var G__37593 = u__$1;
var G__37594 = v__$1;
var G__37595 = a__$1;
var G__37596 = b__$1;
var G__37597 = l__$1;
var G__37598 = r;
var G__37599 = s;
n = G__37589;
m = G__37590;
f = G__37591;
c = G__37592;
u = G__37593;
v = G__37594;
a = G__37595;
b = G__37596;
l = G__37597;
r = G__37598;
s = G__37599;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var part = (function (){var iter__14652__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s){
return (function iter__37547(s__37548){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s){
return (function (){var s__37548__$1 = s__37548;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__37548__$1);if(temp__4092__auto__)
{var s__37548__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37548__$2))
{var c__14650__auto__ = cljs.core.chunk_first.call(null,s__37548__$2);var size__14651__auto__ = cljs.core.count.call(null,c__14650__auto__);var b__37550 = cljs.core.chunk_buffer.call(null,size__14651__auto__);if((function (){var i__37549 = 0;while(true){
if((i__37549 < size__14651__auto__))
{var y = cljs.core._nth.call(null,c__14650__auto__,i__37549);cljs.core.chunk_append.call(null,b__37550,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + 1)) - 1);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__14652__auto__ = ((function (i__37549,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__14650__auto__,size__14651__auto__,b__37550,s__37548__$2,temp__4092__auto__){
return (function iter__37559(s__37560){return (new cljs.core.LazySeq(null,((function (i__37549,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__14650__auto__,size__14651__auto__,b__37550,s__37548__$2,temp__4092__auto__){
return (function (){var s__37560__$1 = s__37560;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__37560__$1);if(temp__4092__auto____$1)
{var s__37560__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__37560__$2))
{var c__14650__auto____$1 = cljs.core.chunk_first.call(null,s__37560__$2);var size__14651__auto____$1 = cljs.core.count.call(null,c__14650__auto____$1);var b__37562 = cljs.core.chunk_buffer.call(null,size__14651__auto____$1);if((function (){var i__37561 = 0;while(true){
if((i__37561 < size__14651__auto____$1))
{var z = cljs.core._nth.call(null,c__14650__auto____$1,i__37561);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{cljs.core.chunk_append.call(null,b__37562,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));
{
var G__37600 = (i__37561 + 1);
i__37561 = G__37600;
continue;
}
} else
{{
var G__37601 = (i__37561 + 1);
i__37561 = G__37601;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37562),iter__37559.call(null,cljs.core.chunk_rest.call(null,s__37560__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37562),null);
}
} else
{var z = cljs.core.first.call(null,s__37560__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),iter__37559.call(null,cljs.core.rest.call(null,s__37560__$2)));
} else
{{
var G__37602 = cljs.core.rest.call(null,s__37560__$2);
s__37560__$1 = G__37602;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__37549,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__14650__auto__,size__14651__auto__,b__37550,s__37548__$2,temp__4092__auto__))
,null,null));
});})(i__37549,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__14650__auto__,size__14651__auto__,b__37550,s__37548__$2,temp__4092__auto__))
;return iter__14652__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + 1)));
})());
})());
{
var G__37603 = (i__37549 + 1);
i__37549 = G__37603;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37550),iter__37547.call(null,cljs.core.chunk_rest.call(null,s__37548__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37550),null);
}
} else
{var y = cljs.core.first.call(null,s__37548__$2);return cljs.core.cons.call(null,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + 1)) - 1);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__14652__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__37548__$2,temp__4092__auto__){
return (function iter__37563(s__37564){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__37548__$2,temp__4092__auto__){
return (function (){var s__37564__$1 = s__37564;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__37564__$1);if(temp__4092__auto____$1)
{var s__37564__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__37564__$2))
{var c__14650__auto__ = cljs.core.chunk_first.call(null,s__37564__$2);var size__14651__auto__ = cljs.core.count.call(null,c__14650__auto__);var b__37566 = cljs.core.chunk_buffer.call(null,size__14651__auto__);if((function (){var i__37565 = 0;while(true){
if((i__37565 < size__14651__auto__))
{var z = cljs.core._nth.call(null,c__14650__auto__,i__37565);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{cljs.core.chunk_append.call(null,b__37566,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));
{
var G__37604 = (i__37565 + 1);
i__37565 = G__37604;
continue;
}
} else
{{
var G__37605 = (i__37565 + 1);
i__37565 = G__37605;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37566),iter__37563.call(null,cljs.core.chunk_rest.call(null,s__37564__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37566),null);
}
} else
{var z = cljs.core.first.call(null,s__37564__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),iter__37563.call(null,cljs.core.rest.call(null,s__37564__$2)));
} else
{{
var G__37606 = cljs.core.rest.call(null,s__37564__$2);
s__37564__$1 = G__37606;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__37548__$2,temp__4092__auto__))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__37548__$2,temp__4092__auto__))
;return iter__14652__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + 1)));
})());
})(),iter__37547.call(null,cljs.core.rest.call(null,s__37548__$2)));
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s))
;return iter__14652__auto__.call(null,cljs.core.range.call(null,(l + 1)));
})();return cljs.core.cons.call(null,part,(new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s){
return (function (){return foundation.app.data.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
});})(n,m,f,c,u,v,a,b,l,r,s))
,null,null)));
} else
{return null;
}
}
}
}
break;
}
});
multiset_partitions_M = function(n,m,f,c,u,v,a,b,l,r,s){
switch(arguments.length){
case 3:
return multiset_partitions_M__3.call(this,n,m,f);
case 11:
return multiset_partitions_M__11.call(this,n,m,f,c,u,v,a,b,l,r,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
multiset_partitions_M.cljs$core$IFn$_invoke$arity$3 = multiset_partitions_M__3;
multiset_partitions_M.cljs$core$IFn$_invoke$arity$11 = multiset_partitions_M__11;
return multiset_partitions_M;
})()
;
foundation.app.data.combinatorics.m5 = (function m5(n,m,f,c,u,v,a,b,l,r,s){var j = (function (){var j = (b - 1);while(true){
if(cljs.core.not_EQ_.call(null,v.call(null,j),0))
{return j;
} else
{{
var G__37615 = (j - 1);
j = G__37615;
continue;
}
}
break;
}
})();if(cljs.core.truth_((function (){var and__13942__auto__ = r;if(cljs.core.truth_(and__13942__auto__))
{return (cljs.core._EQ_.call(null,j,a)) && ((((v.call(null,j) - 1) * (r - l)) < u.call(null,j)));
} else
{return and__13942__auto__;
}
})()))
{return foundation.app.data.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s);
} else
{if((cljs.core._EQ_.call(null,j,a)) && (cljs.core._EQ_.call(null,v.call(null,j),1)))
{return foundation.app.data.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var v__$1 = foundation.app.data.combinatorics.update.call(null,v,j,cljs.core.dec);var diff_uv = (cljs.core.truth_(s)?cljs.core.apply.call(null,cljs.core._PLUS_,(function (){var iter__14652__auto__ = ((function (v__$1){
return (function iter__37611(s__37612){return (new cljs.core.LazySeq(null,((function (v__$1){
return (function (){var s__37612__$1 = s__37612;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__37612__$1);if(temp__4092__auto__)
{var s__37612__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37612__$2))
{var c__14650__auto__ = cljs.core.chunk_first.call(null,s__37612__$2);var size__14651__auto__ = cljs.core.count.call(null,c__14650__auto__);var b__37614 = cljs.core.chunk_buffer.call(null,size__14651__auto__);if((function (){var i__37613 = 0;while(true){
if((i__37613 < size__14651__auto__))
{var i = cljs.core._nth.call(null,c__14650__auto__,i__37613);cljs.core.chunk_append.call(null,b__37614,(u.call(null,i) - v__$1.call(null,i)));
{
var G__37616 = (i__37613 + 1);
i__37613 = G__37616;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37614),iter__37611.call(null,cljs.core.chunk_rest.call(null,s__37612__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37614),null);
}
} else
{var i = cljs.core.first.call(null,s__37612__$2);return cljs.core.cons.call(null,(u.call(null,i) - v__$1.call(null,i)),iter__37611.call(null,cljs.core.rest.call(null,s__37612__$2)));
}
} else
{return null;
}
break;
}
});})(v__$1))
,null,null));
});})(v__$1))
;return iter__14652__auto__.call(null,cljs.core.range.call(null,a,(j + 1)));
})()):null);var v__$2 = (function (){var ks = cljs.core.range.call(null,(j + 1),b);var v__$2 = v__$1;while(true){
if(cljs.core.empty_QMARK_.call(null,ks))
{return v__$2;
} else
{var k = cljs.core.first.call(null,ks);{
var G__37617 = cljs.core.rest.call(null,ks);
var G__37618 = cljs.core.assoc.call(null,v__$2,k,u.call(null,k));
ks = G__37617;
v__$2 = G__37618;
continue;
}
}
break;
}
})();var min_partitions_after_this = (cljs.core.truth_(s)?(s - (l + 1)):0);var amount_to_dec = (cljs.core.truth_(s)?(function (){var x__14266__auto__ = 0;var y__14267__auto__ = (min_partitions_after_this - diff_uv);return ((x__14266__auto__ > y__14267__auto__) ? x__14266__auto__ : y__14267__auto__);
})():0);var v__$3 = ((cljs.core._EQ_.call(null,amount_to_dec,0))?v__$2:(function (){var k_1 = (b - 1);var v__$3 = v__$2;var amount = amount_to_dec;while(true){
var vk = v__$3.call(null,k_1);if((amount > vk))
{{
var G__37619 = (k_1 - 1);
var G__37620 = cljs.core.assoc.call(null,v__$3,k_1,0);
var G__37621 = (amount - vk);
k_1 = G__37619;
v__$3 = G__37620;
amount = G__37621;
continue;
}
} else
{return cljs.core.assoc.call(null,v__$3,k_1,(vk - amount));
}
break;
}
})());return foundation.app.data.combinatorics.multiset_partitions_M.call(null,n,m,f,c,u,v__$3,a,b,l,r,s);
} else
{return null;
}
}
}
});
foundation.app.data.combinatorics.m6 = (function m6(n,m,f,c,u,v,a,b,l,r,s){if(cljs.core._EQ_.call(null,l,0))
{return cljs.core.List.EMPTY;
} else
{var l__$1 = (l - 1);var b__$1 = a;var a__$1 = f.call(null,l__$1);return foundation.app.data.combinatorics.m5.call(null,n,m,f,c,u,v,a__$1,b__$1,l__$1,r,s);
}
});
/**
* @param {...*} var_args
*/
foundation.app.data.combinatorics.partitions_M = (function() { 
var partitions_M__delegate = function (items,p__37622){var map__37680 = p__37622;var map__37680__$1 = ((cljs.core.seq_QMARK_.call(null,map__37680))?cljs.core.apply.call(null,cljs.core.hash_map,map__37680):map__37680);var from = cljs.core.get.call(null,map__37680__$1,new cljs.core.Keyword(null,"min","min",1014012356));var to = cljs.core.get.call(null,map__37680__$1,new cljs.core.Keyword(null,"max","max",1014012118));if(cljs.core._EQ_.call(null,cljs.core.count.call(null,items),0))
{if((((function (){var or__13954__auto__ = from;if(cljs.core.truth_(or__13954__auto__))
{return or__13954__auto__;
} else
{return 0;
}
})() <= 0)) && ((0 <= (function (){var or__13954__auto__ = to;if(cljs.core.truth_(or__13954__auto__))
{return or__13954__auto__;
} else
{return 0;
}
})())))
{return cljs.core.list(cljs.core.List.EMPTY);
} else
{return cljs.core.List.EMPTY;
}
} else
{var items__$1 = cljs.core.vec.call(null,items);var ditems = cljs.core.vec.call(null,cljs.core.distinct.call(null,items__$1));var freqs = cljs.core.frequencies.call(null,items__$1);var N = cljs.core.count.call(null,items__$1);var M = cljs.core.count.call(null,ditems);var from__$1 = (cljs.core.truth_((function (){var and__13942__auto__ = from;if(cljs.core.truth_(and__13942__auto__))
{return (from <= 1);
} else
{return and__13942__auto__;
}
})())?null:from);var to__$1 = (cljs.core.truth_((function (){var and__13942__auto__ = to;if(cljs.core.truth_(and__13942__auto__))
{return (to >= N);
} else
{return and__13942__auto__;
}
})())?null:to);if(!(((1 <= (function (){var or__13954__auto__ = from__$1;if(cljs.core.truth_(or__13954__auto__))
{return or__13954__auto__;
} else
{return 1;
}
})())) && ((((function (){var or__13954__auto__ = from__$1;if(cljs.core.truth_(or__13954__auto__))
{return or__13954__auto__;
} else
{return 1;
}
})() <= (function (){var or__13954__auto__ = to__$1;if(cljs.core.truth_(or__13954__auto__))
{return or__13954__auto__;
} else
{return N;
}
})())) && (((function (){var or__13954__auto__ = to__$1;if(cljs.core.truth_(or__13954__auto__))
{return or__13954__auto__;
} else
{return N;
}
})() <= N)))))
{return cljs.core.List.EMPTY;
} else
{if(cljs.core._EQ_.call(null,N,1))
{return cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.with_meta.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.first.call(null,items__$1))))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,381),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,19),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,381),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,35)))))))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,381),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,381),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,36)))))))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,381),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,17),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,381),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,37)))));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var start_multiset = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__14652__auto__ = (function iter__37681(s__37682){return (new cljs.core.LazySeq(null,(function (){var s__37682__$1 = s__37682;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__37682__$1);if(temp__4092__auto__)
{var s__37682__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37682__$2))
{var c__14650__auto__ = cljs.core.chunk_first.call(null,s__37682__$2);var size__14651__auto__ = cljs.core.count.call(null,c__14650__auto__);var b__37684 = cljs.core.chunk_buffer.call(null,size__14651__auto__);if((function (){var i__37683 = 0;while(true){
if((i__37683 < size__14651__auto__))
{var i = cljs.core._nth.call(null,c__14650__auto__,i__37683);var j = (i + 1);cljs.core.chunk_append.call(null,b__37684,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null));
{
var G__37737 = (i__37683 + 1);
i__37683 = G__37737;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37684),iter__37681.call(null,cljs.core.chunk_rest.call(null,s__37682__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37684),null);
}
} else
{var i = cljs.core.first.call(null,s__37682__$2);var j = (i + 1);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null),iter__37681.call(null,cljs.core.rest.call(null,s__37682__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14652__auto__.call(null,cljs.core.range.call(null,M));
})());var parts = foundation.app.data.combinatorics.multiset_partitions_M.call(null,start_multiset,to__$1,from__$1);var iter__14652__auto__ = (function iter__37685(s__37686){return (new cljs.core.LazySeq(null,(function (){var s__37686__$1 = s__37686;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__37686__$1);if(temp__4092__auto__)
{var s__37686__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37686__$2))
{var c__14650__auto__ = cljs.core.chunk_first.call(null,s__37686__$2);var size__14651__auto__ = cljs.core.count.call(null,c__14650__auto__);var b__37688 = cljs.core.chunk_buffer.call(null,size__14651__auto__);if((function (){var i__37687 = 0;while(true){
if((i__37687 < size__14651__auto__))
{var part = cljs.core._nth.call(null,c__14650__auto__,i__37687);cljs.core.chunk_append.call(null,b__37688,(function (){var iter__14652__auto__ = ((function (i__37687,part,c__14650__auto__,size__14651__auto__,b__37688,s__37686__$2,temp__4092__auto__){
return (function iter__37713(s__37714){return (new cljs.core.LazySeq(null,((function (i__37687,part,c__14650__auto__,size__14651__auto__,b__37688,s__37686__$2,temp__4092__auto__){
return (function (){var s__37714__$1 = s__37714;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__37714__$1);if(temp__4092__auto____$1)
{var s__37714__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__37714__$2))
{var c__14650__auto____$1 = cljs.core.chunk_first.call(null,s__37714__$2);var size__14651__auto____$1 = cljs.core.count.call(null,c__14650__auto____$1);var b__37716 = cljs.core.chunk_buffer.call(null,size__14651__auto____$1);if((function (){var i__37715 = 0;while(true){
if((i__37715 < size__14651__auto____$1))
{var multiset = cljs.core._nth.call(null,c__14650__auto____$1,i__37715);cljs.core.chunk_append.call(null,b__37716,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__37715,i__37687,multiset,c__14650__auto____$1,size__14651__auto____$1,b__37716,s__37714__$2,temp__4092__auto____$1,part,c__14650__auto__,size__14651__auto__,b__37688,s__37686__$2,temp__4092__auto__){
return (function (p__37721){var vec__37722 = p__37721;var index = cljs.core.nth.call(null,vec__37722,0,null);var numtimes = cljs.core.nth.call(null,vec__37722,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__37715,i__37687,multiset,c__14650__auto____$1,size__14651__auto____$1,b__37716,s__37714__$2,temp__4092__auto____$1,part,c__14650__auto__,size__14651__auto__,b__37688,s__37686__$2,temp__4092__auto__))
,multiset)));
{
var G__37738 = (i__37715 + 1);
i__37715 = G__37738;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37716),iter__37713.call(null,cljs.core.chunk_rest.call(null,s__37714__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37716),null);
}
} else
{var multiset = cljs.core.first.call(null,s__37714__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__37687,multiset,s__37714__$2,temp__4092__auto____$1,part,c__14650__auto__,size__14651__auto__,b__37688,s__37686__$2,temp__4092__auto__){
return (function (p__37723){var vec__37724 = p__37723;var index = cljs.core.nth.call(null,vec__37724,0,null);var numtimes = cljs.core.nth.call(null,vec__37724,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__37687,multiset,s__37714__$2,temp__4092__auto____$1,part,c__14650__auto__,size__14651__auto__,b__37688,s__37686__$2,temp__4092__auto__))
,multiset)),iter__37713.call(null,cljs.core.rest.call(null,s__37714__$2)));
}
} else
{return null;
}
break;
}
});})(i__37687,part,c__14650__auto__,size__14651__auto__,b__37688,s__37686__$2,temp__4092__auto__))
,null,null));
});})(i__37687,part,c__14650__auto__,size__14651__auto__,b__37688,s__37686__$2,temp__4092__auto__))
;return iter__14652__auto__.call(null,part);
})());
{
var G__37739 = (i__37687 + 1);
i__37687 = G__37739;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37688),iter__37685.call(null,cljs.core.chunk_rest.call(null,s__37686__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37688),null);
}
} else
{var part = cljs.core.first.call(null,s__37686__$2);return cljs.core.cons.call(null,(function (){var iter__14652__auto__ = ((function (part,s__37686__$2,temp__4092__auto__){
return (function iter__37725(s__37726){return (new cljs.core.LazySeq(null,((function (part,s__37686__$2,temp__4092__auto__){
return (function (){var s__37726__$1 = s__37726;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__37726__$1);if(temp__4092__auto____$1)
{var s__37726__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__37726__$2))
{var c__14650__auto__ = cljs.core.chunk_first.call(null,s__37726__$2);var size__14651__auto__ = cljs.core.count.call(null,c__14650__auto__);var b__37728 = cljs.core.chunk_buffer.call(null,size__14651__auto__);if((function (){var i__37727 = 0;while(true){
if((i__37727 < size__14651__auto__))
{var multiset = cljs.core._nth.call(null,c__14650__auto__,i__37727);cljs.core.chunk_append.call(null,b__37728,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__37727,multiset,c__14650__auto__,size__14651__auto__,b__37728,s__37726__$2,temp__4092__auto____$1,part,s__37686__$2,temp__4092__auto__){
return (function (p__37733){var vec__37734 = p__37733;var index = cljs.core.nth.call(null,vec__37734,0,null);var numtimes = cljs.core.nth.call(null,vec__37734,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__37727,multiset,c__14650__auto__,size__14651__auto__,b__37728,s__37726__$2,temp__4092__auto____$1,part,s__37686__$2,temp__4092__auto__))
,multiset)));
{
var G__37740 = (i__37727 + 1);
i__37727 = G__37740;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37728),iter__37725.call(null,cljs.core.chunk_rest.call(null,s__37726__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37728),null);
}
} else
{var multiset = cljs.core.first.call(null,s__37726__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (multiset,s__37726__$2,temp__4092__auto____$1,part,s__37686__$2,temp__4092__auto__){
return (function (p__37735){var vec__37736 = p__37735;var index = cljs.core.nth.call(null,vec__37736,0,null);var numtimes = cljs.core.nth.call(null,vec__37736,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(multiset,s__37726__$2,temp__4092__auto____$1,part,s__37686__$2,temp__4092__auto__))
,multiset)),iter__37725.call(null,cljs.core.rest.call(null,s__37726__$2)));
}
} else
{return null;
}
break;
}
});})(part,s__37686__$2,temp__4092__auto__))
,null,null));
});})(part,s__37686__$2,temp__4092__auto__))
;return iter__14652__auto__.call(null,part);
})(),iter__37685.call(null,cljs.core.rest.call(null,s__37686__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14652__auto__.call(null,parts);
} else
{return null;
}
}
}
}
};
var partitions_M = function (items,var_args){
var p__37622 = null;if (arguments.length > 1) {
  p__37622 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions_M__delegate.call(this,items,p__37622);};
partitions_M.cljs$lang$maxFixedArity = 1;
partitions_M.cljs$lang$applyTo = (function (arglist__37741){
var items = cljs.core.first(arglist__37741);
var p__37622 = cljs.core.rest(arglist__37741);
return partitions_M__delegate(items,p__37622);
});
partitions_M.cljs$core$IFn$_invoke$arity$variadic = partitions_M__delegate;
return partitions_M;
})()
;
/**
* All the lexicographic distinct partitions of items.
* Optionally pass in :min and/or :max to specify inclusive bounds on the number of parts the items can be split into.
* @param {...*} var_args
*/
foundation.app.data.combinatorics.partitions = (function() { 
var partitions__delegate = function (items,args){if(cljs.core._EQ_.call(null,cljs.core.count.call(null,items),0))
{return cljs.core.apply.call(null,foundation.app.data.combinatorics.partitions_H,items,args);
} else
{if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core.distinct_QMARK_,items)))
{return cljs.core.apply.call(null,foundation.app.data.combinatorics.partitions_H,items,args);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.apply.call(null,foundation.app.data.combinatorics.partitions_M,items,args);
} else
{return null;
}
}
}
};
var partitions = function (items,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions__delegate.call(this,items,args);};
partitions.cljs$lang$maxFixedArity = 1;
partitions.cljs$lang$applyTo = (function (arglist__37742){
var items = cljs.core.first(arglist__37742);
var args = cljs.core.rest(arglist__37742);
return partitions__delegate(items,args);
});
partitions.cljs$core$IFn$_invoke$arity$variadic = partitions__delegate;
return partitions;
})()
;

//# sourceMappingURL=combinatorics.js.map