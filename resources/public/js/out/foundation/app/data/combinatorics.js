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
var G__45989 = cljs.core.assoc.call(null,c__$2,(j__$1 - 1),(c__$2.call(null,j__$1) - 1));
var G__45990 = (j__$1 - 1);
c__$2 = G__45989;
j__$1 = G__45990;
continue;
}
}
break;
}
}
}
});
return (new cljs.core.LazySeq(null,(function (){var c = cljs.core.vec.call(null,cljs.core.cons.call(null,null,(function (){var iter__8896__auto__ = (function iter__45985(s__45986){return (new cljs.core.LazySeq(null,(function (){var s__45986__$1 = s__45986;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__45986__$1);if(temp__4092__auto__)
{var s__45986__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__45986__$2))
{var c__8894__auto__ = cljs.core.chunk_first.call(null,s__45986__$2);var size__8895__auto__ = cljs.core.count.call(null,c__8894__auto__);var b__45988 = cljs.core.chunk_buffer.call(null,size__8895__auto__);if((function (){var i__45987 = 0;while(true){
if((i__45987 < size__8895__auto__))
{var j = cljs.core._nth.call(null,c__8894__auto__,i__45987);cljs.core.chunk_append.call(null,b__45988,((j + cnt) + (- (n + 1))));
{
var G__45991 = (i__45987 + 1);
i__45987 = G__45991;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45988),iter__45985.call(null,cljs.core.chunk_rest.call(null,s__45986__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45988),null);
}
} else
{var j = cljs.core.first.call(null,s__45986__$2);return cljs.core.cons.call(null,((j + cnt) + (- (n + 1))),iter__45985.call(null,cljs.core.rest.call(null,s__45986__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8896__auto__.call(null,cljs.core.range.call(null,1,(n + 1)));
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
{return cljs.core.map.call(null,(function (p1__45992_SHARP_){return cljs.core.map.call(null,v_items,p1__45992_SHARP_);
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
var G__45993 = (i - 1);
var G__45994 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__45993;
v_seqs__$2 = G__45994;
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
cartesian_product.cljs$lang$applyTo = (function (arglist__45995){
var seqs = cljs.core.seq(arglist__45995);
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
var G__45996 = (i - 1);
i = G__45996;
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
var G__45997 = (i - 1);
i = G__45997;
continue;
}
}
break;
}
})();var v__$1 = cljs.core.assoc.call(null,v,j,v.call(null,l),l,vj);var k = (j + 1);var l__$1 = (len - 1);while(true){
if((k < l__$1))
{{
var G__45998 = cljs.core.assoc.call(null,v__$1,k,v__$1.call(null,l__$1),l__$1,v__$1.call(null,k));
var G__45999 = (k + 1);
var G__46000 = (l__$1 - 1);
v__$1 = G__45998;
k = G__45999;
l__$1 = G__46000;
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
foundation.app.data.combinatorics.multi_perm = (function multi_perm(l){var f = cljs.core.frequencies.call(null,l);var v = cljs.core.vec.call(null,cljs.core.keys.call(null,f));var indices = cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__8896__auto__ = ((function (f,v){
return (function iter__46005(s__46006){return (new cljs.core.LazySeq(null,((function (f,v){
return (function (){var s__46006__$1 = s__46006;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__46006__$1);if(temp__4092__auto__)
{var s__46006__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__46006__$2))
{var c__8894__auto__ = cljs.core.chunk_first.call(null,s__46006__$2);var size__8895__auto__ = cljs.core.count.call(null,c__8894__auto__);var b__46008 = cljs.core.chunk_buffer.call(null,size__8895__auto__);if((function (){var i__46007 = 0;while(true){
if((i__46007 < size__8895__auto__))
{var i = cljs.core._nth.call(null,c__8894__auto__,i__46007);cljs.core.chunk_append.call(null,b__46008,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));
{
var G__46009 = (i__46007 + 1);
i__46007 = G__46009;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46008),iter__46005.call(null,cljs.core.chunk_rest.call(null,s__46006__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46008),null);
}
} else
{var i = cljs.core.first.call(null,s__46006__$2);return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),iter__46005.call(null,cljs.core.rest.call(null,s__46006__$2)));
}
} else
{return null;
}
break;
}
});})(f,v))
,null,null));
});})(f,v))
;return iter__8896__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,v)));
})());return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.map,v),foundation.app.data.combinatorics.lex_permutations.call(null,indices));
});
/**
* All the distinct permutations of items, lexicographic by index.
*/
foundation.app.data.combinatorics.permutations = (function permutations(items){if(foundation.app.data.combinatorics.sorted_numbers_QMARK_.call(null,items))
{return foundation.app.data.combinatorics.lex_permutations.call(null,items);
} else
{if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core.distinct_QMARK_,items)))
{var v = cljs.core.vec.call(null,items);return cljs.core.map.call(null,(function (p1__46010_SHARP_){return cljs.core.map.call(null,v,p1__46010_SHARP_);
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
{return cljs.core.vec.call(null,(function (){var iter__8896__auto__ = (function iter__46015(s__46016){return (new cljs.core.LazySeq(null,(function (){var s__46016__$1 = s__46016;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__46016__$1);if(temp__4092__auto__)
{var s__46016__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__46016__$2))
{var c__8894__auto__ = cljs.core.chunk_first.call(null,s__46016__$2);var size__8895__auto__ = cljs.core.count.call(null,c__8894__auto__);var b__46018 = cljs.core.chunk_buffer.call(null,size__8895__auto__);if((function (){var i__46017 = 0;while(true){
if((i__46017 < size__8895__auto__))
{var i = cljs.core._nth.call(null,c__8894__auto__,i__46017);cljs.core.chunk_append.call(null,b__46018,(function (){var x__8510__auto__ = 0;var y__8511__auto__ = (i - ((n - s) - -1));return ((x__8510__auto__ > y__8511__auto__) ? x__8510__auto__ : y__8511__auto__);
})());
{
var G__46019 = (i__46017 + 1);
i__46017 = G__46019;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46018),iter__46015.call(null,cljs.core.chunk_rest.call(null,s__46016__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46018),null);
}
} else
{var i = cljs.core.first.call(null,s__46016__$2);return cljs.core.cons.call(null,(function (){var x__8510__auto__ = 0;var y__8511__auto__ = (i - ((n - s) - -1));return ((x__8510__auto__ > y__8511__auto__) ? x__8510__auto__ : y__8511__auto__);
})(),iter__46015.call(null,cljs.core.rest.call(null,s__46016__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8896__auto__.call(null,cljs.core.range.call(null,1,(n + 1)));
})());
} else
{return cljs.core.vec.call(null,cljs.core.repeat.call(null,n,0));
}
});
foundation.app.data.combinatorics.growth_strings_H = (function() {
var growth_strings_H = null;
var growth_strings_H__3 = (function (n,r,s){return growth_strings_H.call(null,n,foundation.app.data.combinatorics.init.call(null,n,s),cljs.core.vec.call(null,cljs.core.repeat.call(null,n,1)),r,s);
});
var growth_strings_H__5 = (function (n,a,b,r,s){return cljs.core.cons.call(null,a,(new cljs.core.LazySeq(null,(function (){if((function (){var and__8186__auto__ = (cljs.core.peek.call(null,b) > cljs.core.peek.call(null,a));if(and__8186__auto__)
{if(cljs.core.truth_(r))
{return (cljs.core.peek.call(null,a) < (r - 1));
} else
{return true;
}
} else
{return and__8186__auto__;
}
})())
{return growth_strings_H.call(null,n,foundation.app.data.combinatorics.update.call(null,a,(n - 1),cljs.core.inc),b,r,s);
} else
{var j = (function (){var j = (n - 2);while(true){
if((function (){var and__8186__auto__ = (a.call(null,j) < b.call(null,j));if(and__8186__auto__)
{var and__8186__auto____$1 = (cljs.core.truth_(r)?(a.call(null,j) < (r - 1)):true);if(and__8186__auto____$1)
{if(cljs.core.truth_(s))
{return (((s - b.call(null,j)) - ((((a.call(null,j) + 1) === b.call(null,j)))?1:0)) <= (n - j));
} else
{return true;
}
} else
{return and__8186__auto____$1;
}
} else
{return and__8186__auto__;
}
})())
{return j;
} else
{{
var G__46022 = (j - 1);
j = G__46022;
continue;
}
}
break;
}
})();if((j === 0))
{return cljs.core.List.EMPTY;
} else
{var a__$1 = foundation.app.data.combinatorics.update.call(null,a,j,cljs.core.inc);var x = (cljs.core.truth_(s)?(s - (b.call(null,j) + ((cljs.core._EQ_.call(null,a__$1.call(null,j),b.call(null,j)))?1:0))):null);var vec__46021 = (function (){var a__$2 = a__$1;var b__$1 = b;var i = (j + 1);var current_max = (b__$1.call(null,j) + (((b__$1.call(null,j) === a__$2.call(null,j)))?1:0));while(true){
if((i === n))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$2,b__$1], null);
} else
{if(cljs.core.truth_((function (){var and__8186__auto__ = s;if(cljs.core.truth_(and__8186__auto__))
{return (i > ((n - x) - 1));
} else
{return and__8186__auto__;
}
})()))
{var new_a_i = ((i - n) + s);{
var G__46023 = cljs.core.assoc.call(null,a__$2,i,new_a_i);
var G__46024 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__46025 = (i + 1);
var G__46026 = (function (){var x__8510__auto__ = current_max;var y__8511__auto__ = (new_a_i + 1);return ((x__8510__auto__ > y__8511__auto__) ? x__8510__auto__ : y__8511__auto__);
})();
a__$2 = G__46023;
b__$1 = G__46024;
i = G__46025;
current_max = G__46026;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__46027 = cljs.core.assoc.call(null,a__$2,i,0);
var G__46028 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__46029 = (i + 1);
var G__46030 = current_max;
a__$2 = G__46027;
b__$1 = G__46028;
i = G__46029;
current_max = G__46030;
continue;
}
} else
{return null;
}
}
}
break;
}
})();var a__$2 = cljs.core.nth.call(null,vec__46021,0,null);var b__$1 = cljs.core.nth.call(null,vec__46021,1,null);return growth_strings_H.call(null,n,a__$2,b__$1,r,s);
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
var lex_partitions_H__delegate = function (N,p__46031){var map__46037 = p__46031;var map__46037__$1 = ((cljs.core.seq_QMARK_.call(null,map__46037))?cljs.core.apply.call(null,cljs.core.hash_map,map__46037):map__46037);var from = cljs.core.get.call(null,map__46037__$1,new cljs.core.Keyword(null,"min","min",1014012356));var to = cljs.core.get.call(null,map__46037__$1,new cljs.core.Keyword(null,"max","max",1014012118));if(cljs.core._EQ_.call(null,N,0))
{if((((function (){var or__8198__auto__ = from;if(cljs.core.truth_(or__8198__auto__))
{return or__8198__auto__;
} else
{return 0;
}
})() <= 0)) && ((0 <= (function (){var or__8198__auto__ = to;if(cljs.core.truth_(or__8198__auto__))
{return or__8198__auto__;
} else
{return 0;
}
})())))
{return cljs.core.list(cljs.core.List.EMPTY);
} else
{return cljs.core.List.EMPTY;
}
} else
{var from__$1 = (cljs.core.truth_((function (){var and__8186__auto__ = from;if(cljs.core.truth_(and__8186__auto__))
{return (from <= 1);
} else
{return and__8186__auto__;
}
})())?null:from);var to__$1 = (cljs.core.truth_((function (){var and__8186__auto__ = to;if(cljs.core.truth_(and__8186__auto__))
{return (to >= N);
} else
{return and__8186__auto__;
}
})())?null:to);if(!(((1 <= (function (){var or__8198__auto__ = from__$1;if(cljs.core.truth_(or__8198__auto__))
{return or__8198__auto__;
} else
{return 1;
}
})())) && ((((function (){var or__8198__auto__ = from__$1;if(cljs.core.truth_(or__8198__auto__))
{return or__8198__auto__;
} else
{return 1;
}
})() <= (function (){var or__8198__auto__ = to__$1;if(cljs.core.truth_(or__8198__auto__))
{return or__8198__auto__;
} else
{return N;
}
})())) && (((function (){var or__8198__auto__ = to__$1;if(cljs.core.truth_(or__8198__auto__))
{return or__8198__auto__;
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
{return cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.range.call(null,N)))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,209),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,20),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,209),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,32)))))))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,209),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,19),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,209),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,33)))));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var growth_strings = foundation.app.data.combinatorics.growth_strings_H.call(null,N,to__$1,from__$1);var iter__8896__auto__ = (function iter__46038(s__46039){return (new cljs.core.LazySeq(null,(function (){var s__46039__$1 = s__46039;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__46039__$1);if(temp__4092__auto__)
{var s__46039__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__46039__$2))
{var c__8894__auto__ = cljs.core.chunk_first.call(null,s__46039__$2);var size__8895__auto__ = cljs.core.count.call(null,c__8894__auto__);var b__46041 = cljs.core.chunk_buffer.call(null,size__8895__auto__);if((function (){var i__46040 = 0;while(true){
if((i__46040 < size__8895__auto__))
{var growth_string = cljs.core._nth.call(null,c__8894__auto__,i__46040);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));cljs.core.chunk_append.call(null,b__46041,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))));
{
var G__46042 = (i__46040 + 1);
i__46040 = G__46042;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46041),iter__46038.call(null,cljs.core.chunk_rest.call(null,s__46039__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46041),null);
}
} else
{var growth_string = cljs.core.first.call(null,s__46039__$2);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));return cljs.core.cons.call(null,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))),iter__46038.call(null,cljs.core.rest.call(null,s__46039__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8896__auto__.call(null,growth_strings);
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
var p__46031 = null;if (arguments.length > 1) {
  p__46031 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return lex_partitions_H__delegate.call(this,N,p__46031);};
lex_partitions_H.cljs$lang$maxFixedArity = 1;
lex_partitions_H.cljs$lang$applyTo = (function (arglist__46043){
var N = cljs.core.first(arglist__46043);
var p__46031 = cljs.core.rest(arglist__46043);
return lex_partitions_H__delegate(N,p__46031);
});
lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic = lex_partitions_H__delegate;
return lex_partitions_H;
})()
;
/**
* @param {...*} var_args
*/
foundation.app.data.combinatorics.partitions_H = (function() { 
var partitions_H__delegate = function (items,args){var items__$1 = cljs.core.vec.call(null,items);var N = cljs.core.count.call(null,items__$1);var lex = cljs.core.apply.call(null,foundation.app.data.combinatorics.lex_partitions_H,N,args);var iter__8896__auto__ = (function iter__46064(s__46065){return (new cljs.core.LazySeq(null,(function (){var s__46065__$1 = s__46065;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__46065__$1);if(temp__4092__auto__)
{var s__46065__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__46065__$2))
{var c__8894__auto__ = cljs.core.chunk_first.call(null,s__46065__$2);var size__8895__auto__ = cljs.core.count.call(null,c__8894__auto__);var b__46067 = cljs.core.chunk_buffer.call(null,size__8895__auto__);if((function (){var i__46066 = 0;while(true){
if((i__46066 < size__8895__auto__))
{var parts = cljs.core._nth.call(null,c__8894__auto__,i__46066);cljs.core.chunk_append.call(null,b__46067,(function (){var iter__8896__auto__ = ((function (i__46066,parts,c__8894__auto__,size__8895__auto__,b__46067,s__46065__$2,temp__4092__auto__){
return (function iter__46076(s__46077){return (new cljs.core.LazySeq(null,((function (i__46066,parts,c__8894__auto__,size__8895__auto__,b__46067,s__46065__$2,temp__4092__auto__){
return (function (){var s__46077__$1 = s__46077;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__46077__$1);if(temp__4092__auto____$1)
{var s__46077__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__46077__$2))
{var c__8894__auto____$1 = cljs.core.chunk_first.call(null,s__46077__$2);var size__8895__auto____$1 = cljs.core.count.call(null,c__8894__auto____$1);var b__46079 = cljs.core.chunk_buffer.call(null,size__8895__auto____$1);if((function (){var i__46078 = 0;while(true){
if((i__46078 < size__8895__auto____$1))
{var part = cljs.core._nth.call(null,c__8894__auto____$1,i__46078);cljs.core.chunk_append.call(null,b__46079,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__46078,i__46066,part,c__8894__auto____$1,size__8895__auto____$1,b__46079,s__46077__$2,temp__4092__auto____$1,parts,c__8894__auto__,size__8895__auto__,b__46067,s__46065__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__46078,i__46066,part,c__8894__auto____$1,size__8895__auto____$1,b__46079,s__46077__$2,temp__4092__auto____$1,parts,c__8894__auto__,size__8895__auto__,b__46067,s__46065__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__46084 = (i__46078 + 1);
i__46078 = G__46084;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46079),iter__46076.call(null,cljs.core.chunk_rest.call(null,s__46077__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46079),null);
}
} else
{var part = cljs.core.first.call(null,s__46077__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__46066,part,s__46077__$2,temp__4092__auto____$1,parts,c__8894__auto__,size__8895__auto__,b__46067,s__46065__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__46066,part,s__46077__$2,temp__4092__auto____$1,parts,c__8894__auto__,size__8895__auto__,b__46067,s__46065__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__46076.call(null,cljs.core.rest.call(null,s__46077__$2)));
}
} else
{return null;
}
break;
}
});})(i__46066,parts,c__8894__auto__,size__8895__auto__,b__46067,s__46065__$2,temp__4092__auto__))
,null,null));
});})(i__46066,parts,c__8894__auto__,size__8895__auto__,b__46067,s__46065__$2,temp__4092__auto__))
;return iter__8896__auto__.call(null,parts);
})());
{
var G__46085 = (i__46066 + 1);
i__46066 = G__46085;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46067),iter__46064.call(null,cljs.core.chunk_rest.call(null,s__46065__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46067),null);
}
} else
{var parts = cljs.core.first.call(null,s__46065__$2);return cljs.core.cons.call(null,(function (){var iter__8896__auto__ = ((function (parts,s__46065__$2,temp__4092__auto__){
return (function iter__46080(s__46081){return (new cljs.core.LazySeq(null,((function (parts,s__46065__$2,temp__4092__auto__){
return (function (){var s__46081__$1 = s__46081;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__46081__$1);if(temp__4092__auto____$1)
{var s__46081__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__46081__$2))
{var c__8894__auto__ = cljs.core.chunk_first.call(null,s__46081__$2);var size__8895__auto__ = cljs.core.count.call(null,c__8894__auto__);var b__46083 = cljs.core.chunk_buffer.call(null,size__8895__auto__);if((function (){var i__46082 = 0;while(true){
if((i__46082 < size__8895__auto__))
{var part = cljs.core._nth.call(null,c__8894__auto__,i__46082);cljs.core.chunk_append.call(null,b__46083,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__46082,part,c__8894__auto__,size__8895__auto__,b__46083,s__46081__$2,temp__4092__auto____$1,parts,s__46065__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__46082,part,c__8894__auto__,size__8895__auto__,b__46083,s__46081__$2,temp__4092__auto____$1,parts,s__46065__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__46086 = (i__46082 + 1);
i__46082 = G__46086;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46083),iter__46080.call(null,cljs.core.chunk_rest.call(null,s__46081__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46083),null);
}
} else
{var part = cljs.core.first.call(null,s__46081__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (part,s__46081__$2,temp__4092__auto____$1,parts,s__46065__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(part,s__46081__$2,temp__4092__auto____$1,parts,s__46065__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__46080.call(null,cljs.core.rest.call(null,s__46081__$2)));
}
} else
{return null;
}
break;
}
});})(parts,s__46065__$2,temp__4092__auto__))
,null,null));
});})(parts,s__46065__$2,temp__4092__auto__))
;return iter__8896__auto__.call(null,parts);
})(),iter__46064.call(null,cljs.core.rest.call(null,s__46065__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8896__auto__.call(null,lex);
};
var partitions_H = function (items,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions_H__delegate.call(this,items,args);};
partitions_H.cljs$lang$maxFixedArity = 1;
partitions_H.cljs$lang$applyTo = (function (arglist__46087){
var items = cljs.core.first(arglist__46087);
var args = cljs.core.rest(arglist__46087);
return partitions_H__delegate(items,args);
});
partitions_H.cljs$core$IFn$_invoke$arity$variadic = partitions_H__delegate;
return partitions_H;
})()
;
foundation.app.data.combinatorics.multiset_partitions_M = (function() {
var multiset_partitions_M = null;
var multiset_partitions_M__3 = (function (multiset,r,s){var n = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,multiset));var m = cljs.core.count.call(null,multiset);var f = cljs.core.PersistentVector.EMPTY;var c = cljs.core.PersistentVector.EMPTY;var u = cljs.core.PersistentVector.EMPTY;var v = cljs.core.PersistentVector.EMPTY;var vec__46110 = (function (){var j = 0;var c__$1 = c;var u__$1 = u;var v__$1 = v;while(true){
if(cljs.core._EQ_.call(null,j,m))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,u__$1,v__$1], null);
} else
{{
var G__46132 = (j + 1);
var G__46133 = cljs.core.assoc.call(null,c__$1,j,(j + 1));
var G__46134 = cljs.core.assoc.call(null,u__$1,j,multiset.call(null,(j + 1)));
var G__46135 = cljs.core.assoc.call(null,v__$1,j,multiset.call(null,(j + 1)));
j = G__46132;
c__$1 = G__46133;
u__$1 = G__46134;
v__$1 = G__46135;
continue;
}
}
break;
}
})();var c__$1 = cljs.core.nth.call(null,vec__46110,0,null);var u__$1 = cljs.core.nth.call(null,vec__46110,1,null);var v__$1 = cljs.core.nth.call(null,vec__46110,2,null);var a = 0;var b = m;var l = 0;var f__$1 = cljs.core.assoc.call(null,f,0,0,1,m);var stack = cljs.core.List.EMPTY;return multiset_partitions_M.call(null,n,m,f__$1,c__$1,u__$1,v__$1,a,b,l,r,s);
});
var multiset_partitions_M__11 = (function (n,m,f,c,u,v,a,b,l,r,s){while(true){
var vec__46111 = (function (){var j = a;var k = b;var x = false;var u__$1 = u;var v__$1 = v;var c__$1 = c;while(true){
if((j >= b))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [u__$1,v__$1,c__$1,j,k], null);
} else
{var u__$2 = cljs.core.assoc.call(null,u__$1,k,(u__$1.call(null,j) - v__$1.call(null,j)));if(cljs.core._EQ_.call(null,u__$2.call(null,k),0))
{{
var G__46136 = (j + 1);
var G__46137 = k;
var G__46138 = true;
var G__46139 = u__$2;
var G__46140 = v__$1;
var G__46141 = c__$1;
j = G__46136;
k = G__46137;
x = G__46138;
u__$1 = G__46139;
v__$1 = G__46140;
c__$1 = G__46141;
continue;
}
} else
{if(!(x))
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,(function (){var x__8517__auto__ = v__$1.call(null,j);var y__8518__auto__ = u__$2.call(null,k);return ((x__8517__auto__ < y__8518__auto__) ? x__8517__auto__ : y__8518__auto__);
})());var x__$1 = (u__$2.call(null,k) < v__$2.call(null,j));var k__$1 = (k + 1);var j__$1 = (j + 1);{
var G__46142 = j__$1;
var G__46143 = k__$1;
var G__46144 = x__$1;
var G__46145 = u__$2;
var G__46146 = v__$2;
var G__46147 = c__$2;
j = G__46142;
k = G__46143;
x = G__46144;
u__$1 = G__46145;
v__$1 = G__46146;
c__$1 = G__46147;
continue;
}
} else
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,u__$2.call(null,k));var k__$1 = (k + 1);var j__$1 = (j + 1);{
var G__46148 = j__$1;
var G__46149 = k__$1;
var G__46150 = x;
var G__46151 = u__$2;
var G__46152 = v__$2;
var G__46153 = c__$2;
j = G__46148;
k = G__46149;
x = G__46150;
u__$1 = G__46151;
v__$1 = G__46152;
c__$1 = G__46153;
continue;
}
}
}
}
break;
}
})();var u__$1 = cljs.core.nth.call(null,vec__46111,0,null);var v__$1 = cljs.core.nth.call(null,vec__46111,1,null);var c__$1 = cljs.core.nth.call(null,vec__46111,2,null);var j = cljs.core.nth.call(null,vec__46111,3,null);var k = cljs.core.nth.call(null,vec__46111,4,null);if(cljs.core.truth_((function (){var and__8186__auto__ = r;if(cljs.core.truth_(and__8186__auto__))
{return ((k > b)) && (cljs.core._EQ_.call(null,l,(r - 1)));
} else
{return and__8186__auto__;
}
})()))
{return foundation.app.data.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
} else
{if(cljs.core.truth_((function (){var and__8186__auto__ = s;if(cljs.core.truth_(and__8186__auto__))
{return ((k <= b)) && (((l + 1) < s));
} else
{return and__8186__auto__;
}
})()))
{return foundation.app.data.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
} else
{if((k > b))
{var a__$1 = b;var b__$1 = k;var l__$1 = (l + 1);var f__$1 = cljs.core.assoc.call(null,f,(l__$1 + 1),b__$1);{
var G__46154 = n;
var G__46155 = m;
var G__46156 = f__$1;
var G__46157 = c__$1;
var G__46158 = u__$1;
var G__46159 = v__$1;
var G__46160 = a__$1;
var G__46161 = b__$1;
var G__46162 = l__$1;
var G__46163 = r;
var G__46164 = s;
n = G__46154;
m = G__46155;
f = G__46156;
c = G__46157;
u = G__46158;
v = G__46159;
a = G__46160;
b = G__46161;
l = G__46162;
r = G__46163;
s = G__46164;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var part = (function (){var iter__8896__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s){
return (function iter__46112(s__46113){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s){
return (function (){var s__46113__$1 = s__46113;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__46113__$1);if(temp__4092__auto__)
{var s__46113__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__46113__$2))
{var c__8894__auto__ = cljs.core.chunk_first.call(null,s__46113__$2);var size__8895__auto__ = cljs.core.count.call(null,c__8894__auto__);var b__46115 = cljs.core.chunk_buffer.call(null,size__8895__auto__);if((function (){var i__46114 = 0;while(true){
if((i__46114 < size__8895__auto__))
{var y = cljs.core._nth.call(null,c__8894__auto__,i__46114);cljs.core.chunk_append.call(null,b__46115,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + 1)) - 1);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8896__auto__ = ((function (i__46114,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8894__auto__,size__8895__auto__,b__46115,s__46113__$2,temp__4092__auto__){
return (function iter__46124(s__46125){return (new cljs.core.LazySeq(null,((function (i__46114,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8894__auto__,size__8895__auto__,b__46115,s__46113__$2,temp__4092__auto__){
return (function (){var s__46125__$1 = s__46125;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__46125__$1);if(temp__4092__auto____$1)
{var s__46125__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__46125__$2))
{var c__8894__auto____$1 = cljs.core.chunk_first.call(null,s__46125__$2);var size__8895__auto____$1 = cljs.core.count.call(null,c__8894__auto____$1);var b__46127 = cljs.core.chunk_buffer.call(null,size__8895__auto____$1);if((function (){var i__46126 = 0;while(true){
if((i__46126 < size__8895__auto____$1))
{var z = cljs.core._nth.call(null,c__8894__auto____$1,i__46126);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{cljs.core.chunk_append.call(null,b__46127,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));
{
var G__46165 = (i__46126 + 1);
i__46126 = G__46165;
continue;
}
} else
{{
var G__46166 = (i__46126 + 1);
i__46126 = G__46166;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46127),iter__46124.call(null,cljs.core.chunk_rest.call(null,s__46125__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46127),null);
}
} else
{var z = cljs.core.first.call(null,s__46125__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),iter__46124.call(null,cljs.core.rest.call(null,s__46125__$2)));
} else
{{
var G__46167 = cljs.core.rest.call(null,s__46125__$2);
s__46125__$1 = G__46167;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__46114,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8894__auto__,size__8895__auto__,b__46115,s__46113__$2,temp__4092__auto__))
,null,null));
});})(i__46114,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8894__auto__,size__8895__auto__,b__46115,s__46113__$2,temp__4092__auto__))
;return iter__8896__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + 1)));
})());
})());
{
var G__46168 = (i__46114 + 1);
i__46114 = G__46168;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46115),iter__46112.call(null,cljs.core.chunk_rest.call(null,s__46113__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46115),null);
}
} else
{var y = cljs.core.first.call(null,s__46113__$2);return cljs.core.cons.call(null,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + 1)) - 1);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8896__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__46113__$2,temp__4092__auto__){
return (function iter__46128(s__46129){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__46113__$2,temp__4092__auto__){
return (function (){var s__46129__$1 = s__46129;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__46129__$1);if(temp__4092__auto____$1)
{var s__46129__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__46129__$2))
{var c__8894__auto__ = cljs.core.chunk_first.call(null,s__46129__$2);var size__8895__auto__ = cljs.core.count.call(null,c__8894__auto__);var b__46131 = cljs.core.chunk_buffer.call(null,size__8895__auto__);if((function (){var i__46130 = 0;while(true){
if((i__46130 < size__8895__auto__))
{var z = cljs.core._nth.call(null,c__8894__auto__,i__46130);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{cljs.core.chunk_append.call(null,b__46131,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));
{
var G__46169 = (i__46130 + 1);
i__46130 = G__46169;
continue;
}
} else
{{
var G__46170 = (i__46130 + 1);
i__46130 = G__46170;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46131),iter__46128.call(null,cljs.core.chunk_rest.call(null,s__46129__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46131),null);
}
} else
{var z = cljs.core.first.call(null,s__46129__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),iter__46128.call(null,cljs.core.rest.call(null,s__46129__$2)));
} else
{{
var G__46171 = cljs.core.rest.call(null,s__46129__$2);
s__46129__$1 = G__46171;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__46113__$2,temp__4092__auto__))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__46113__$2,temp__4092__auto__))
;return iter__8896__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + 1)));
})());
})(),iter__46112.call(null,cljs.core.rest.call(null,s__46113__$2)));
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s))
;return iter__8896__auto__.call(null,cljs.core.range.call(null,(l + 1)));
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
var G__46180 = (j - 1);
j = G__46180;
continue;
}
}
break;
}
})();if(cljs.core.truth_((function (){var and__8186__auto__ = r;if(cljs.core.truth_(and__8186__auto__))
{return (cljs.core._EQ_.call(null,j,a)) && ((((v.call(null,j) - 1) * (r - l)) < u.call(null,j)));
} else
{return and__8186__auto__;
}
})()))
{return foundation.app.data.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s);
} else
{if((cljs.core._EQ_.call(null,j,a)) && (cljs.core._EQ_.call(null,v.call(null,j),1)))
{return foundation.app.data.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var v__$1 = foundation.app.data.combinatorics.update.call(null,v,j,cljs.core.dec);var diff_uv = (cljs.core.truth_(s)?cljs.core.apply.call(null,cljs.core._PLUS_,(function (){var iter__8896__auto__ = ((function (v__$1){
return (function iter__46176(s__46177){return (new cljs.core.LazySeq(null,((function (v__$1){
return (function (){var s__46177__$1 = s__46177;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__46177__$1);if(temp__4092__auto__)
{var s__46177__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__46177__$2))
{var c__8894__auto__ = cljs.core.chunk_first.call(null,s__46177__$2);var size__8895__auto__ = cljs.core.count.call(null,c__8894__auto__);var b__46179 = cljs.core.chunk_buffer.call(null,size__8895__auto__);if((function (){var i__46178 = 0;while(true){
if((i__46178 < size__8895__auto__))
{var i = cljs.core._nth.call(null,c__8894__auto__,i__46178);cljs.core.chunk_append.call(null,b__46179,(u.call(null,i) - v__$1.call(null,i)));
{
var G__46181 = (i__46178 + 1);
i__46178 = G__46181;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46179),iter__46176.call(null,cljs.core.chunk_rest.call(null,s__46177__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46179),null);
}
} else
{var i = cljs.core.first.call(null,s__46177__$2);return cljs.core.cons.call(null,(u.call(null,i) - v__$1.call(null,i)),iter__46176.call(null,cljs.core.rest.call(null,s__46177__$2)));
}
} else
{return null;
}
break;
}
});})(v__$1))
,null,null));
});})(v__$1))
;return iter__8896__auto__.call(null,cljs.core.range.call(null,a,(j + 1)));
})()):null);var v__$2 = (function (){var ks = cljs.core.range.call(null,(j + 1),b);var v__$2 = v__$1;while(true){
if(cljs.core.empty_QMARK_.call(null,ks))
{return v__$2;
} else
{var k = cljs.core.first.call(null,ks);{
var G__46182 = cljs.core.rest.call(null,ks);
var G__46183 = cljs.core.assoc.call(null,v__$2,k,u.call(null,k));
ks = G__46182;
v__$2 = G__46183;
continue;
}
}
break;
}
})();var min_partitions_after_this = (cljs.core.truth_(s)?(s - (l + 1)):0);var amount_to_dec = (cljs.core.truth_(s)?(function (){var x__8510__auto__ = 0;var y__8511__auto__ = (min_partitions_after_this - diff_uv);return ((x__8510__auto__ > y__8511__auto__) ? x__8510__auto__ : y__8511__auto__);
})():0);var v__$3 = ((cljs.core._EQ_.call(null,amount_to_dec,0))?v__$2:(function (){var k_1 = (b - 1);var v__$3 = v__$2;var amount = amount_to_dec;while(true){
var vk = v__$3.call(null,k_1);if((amount > vk))
{{
var G__46184 = (k_1 - 1);
var G__46185 = cljs.core.assoc.call(null,v__$3,k_1,0);
var G__46186 = (amount - vk);
k_1 = G__46184;
v__$3 = G__46185;
amount = G__46186;
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
var partitions_M__delegate = function (items,p__46187){var map__46245 = p__46187;var map__46245__$1 = ((cljs.core.seq_QMARK_.call(null,map__46245))?cljs.core.apply.call(null,cljs.core.hash_map,map__46245):map__46245);var from = cljs.core.get.call(null,map__46245__$1,new cljs.core.Keyword(null,"min","min",1014012356));var to = cljs.core.get.call(null,map__46245__$1,new cljs.core.Keyword(null,"max","max",1014012118));if(cljs.core._EQ_.call(null,cljs.core.count.call(null,items),0))
{if((((function (){var or__8198__auto__ = from;if(cljs.core.truth_(or__8198__auto__))
{return or__8198__auto__;
} else
{return 0;
}
})() <= 0)) && ((0 <= (function (){var or__8198__auto__ = to;if(cljs.core.truth_(or__8198__auto__))
{return or__8198__auto__;
} else
{return 0;
}
})())))
{return cljs.core.list(cljs.core.List.EMPTY);
} else
{return cljs.core.List.EMPTY;
}
} else
{var items__$1 = cljs.core.vec.call(null,items);var ditems = cljs.core.vec.call(null,cljs.core.distinct.call(null,items__$1));var freqs = cljs.core.frequencies.call(null,items__$1);var N = cljs.core.count.call(null,items__$1);var M = cljs.core.count.call(null,ditems);var from__$1 = (cljs.core.truth_((function (){var and__8186__auto__ = from;if(cljs.core.truth_(and__8186__auto__))
{return (from <= 1);
} else
{return and__8186__auto__;
}
})())?null:from);var to__$1 = (cljs.core.truth_((function (){var and__8186__auto__ = to;if(cljs.core.truth_(and__8186__auto__))
{return (to >= N);
} else
{return and__8186__auto__;
}
})())?null:to);if(!(((1 <= (function (){var or__8198__auto__ = from__$1;if(cljs.core.truth_(or__8198__auto__))
{return or__8198__auto__;
} else
{return 1;
}
})())) && ((((function (){var or__8198__auto__ = from__$1;if(cljs.core.truth_(or__8198__auto__))
{return or__8198__auto__;
} else
{return 1;
}
})() <= (function (){var or__8198__auto__ = to__$1;if(cljs.core.truth_(or__8198__auto__))
{return or__8198__auto__;
} else
{return N;
}
})())) && (((function (){var or__8198__auto__ = to__$1;if(cljs.core.truth_(or__8198__auto__))
{return or__8198__auto__;
} else
{return N;
}
})() <= N)))))
{return cljs.core.List.EMPTY;
} else
{if(cljs.core._EQ_.call(null,N,1))
{return cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.with_meta.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.first.call(null,items__$1))))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,381),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,20),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,381),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,36)))))))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,381),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,19),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,381),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,37)))))))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,381),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,381),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,38)))));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var start_multiset = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8896__auto__ = (function iter__46246(s__46247){return (new cljs.core.LazySeq(null,(function (){var s__46247__$1 = s__46247;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__46247__$1);if(temp__4092__auto__)
{var s__46247__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__46247__$2))
{var c__8894__auto__ = cljs.core.chunk_first.call(null,s__46247__$2);var size__8895__auto__ = cljs.core.count.call(null,c__8894__auto__);var b__46249 = cljs.core.chunk_buffer.call(null,size__8895__auto__);if((function (){var i__46248 = 0;while(true){
if((i__46248 < size__8895__auto__))
{var i = cljs.core._nth.call(null,c__8894__auto__,i__46248);var j = (i + 1);cljs.core.chunk_append.call(null,b__46249,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null));
{
var G__46302 = (i__46248 + 1);
i__46248 = G__46302;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46249),iter__46246.call(null,cljs.core.chunk_rest.call(null,s__46247__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46249),null);
}
} else
{var i = cljs.core.first.call(null,s__46247__$2);var j = (i + 1);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null),iter__46246.call(null,cljs.core.rest.call(null,s__46247__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8896__auto__.call(null,cljs.core.range.call(null,M));
})());var parts = foundation.app.data.combinatorics.multiset_partitions_M.call(null,start_multiset,to__$1,from__$1);var iter__8896__auto__ = (function iter__46250(s__46251){return (new cljs.core.LazySeq(null,(function (){var s__46251__$1 = s__46251;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__46251__$1);if(temp__4092__auto__)
{var s__46251__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__46251__$2))
{var c__8894__auto__ = cljs.core.chunk_first.call(null,s__46251__$2);var size__8895__auto__ = cljs.core.count.call(null,c__8894__auto__);var b__46253 = cljs.core.chunk_buffer.call(null,size__8895__auto__);if((function (){var i__46252 = 0;while(true){
if((i__46252 < size__8895__auto__))
{var part = cljs.core._nth.call(null,c__8894__auto__,i__46252);cljs.core.chunk_append.call(null,b__46253,(function (){var iter__8896__auto__ = ((function (i__46252,part,c__8894__auto__,size__8895__auto__,b__46253,s__46251__$2,temp__4092__auto__){
return (function iter__46278(s__46279){return (new cljs.core.LazySeq(null,((function (i__46252,part,c__8894__auto__,size__8895__auto__,b__46253,s__46251__$2,temp__4092__auto__){
return (function (){var s__46279__$1 = s__46279;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__46279__$1);if(temp__4092__auto____$1)
{var s__46279__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__46279__$2))
{var c__8894__auto____$1 = cljs.core.chunk_first.call(null,s__46279__$2);var size__8895__auto____$1 = cljs.core.count.call(null,c__8894__auto____$1);var b__46281 = cljs.core.chunk_buffer.call(null,size__8895__auto____$1);if((function (){var i__46280 = 0;while(true){
if((i__46280 < size__8895__auto____$1))
{var multiset = cljs.core._nth.call(null,c__8894__auto____$1,i__46280);cljs.core.chunk_append.call(null,b__46281,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__46280,i__46252,multiset,c__8894__auto____$1,size__8895__auto____$1,b__46281,s__46279__$2,temp__4092__auto____$1,part,c__8894__auto__,size__8895__auto__,b__46253,s__46251__$2,temp__4092__auto__){
return (function (p__46286){var vec__46287 = p__46286;var index = cljs.core.nth.call(null,vec__46287,0,null);var numtimes = cljs.core.nth.call(null,vec__46287,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__46280,i__46252,multiset,c__8894__auto____$1,size__8895__auto____$1,b__46281,s__46279__$2,temp__4092__auto____$1,part,c__8894__auto__,size__8895__auto__,b__46253,s__46251__$2,temp__4092__auto__))
,multiset)));
{
var G__46303 = (i__46280 + 1);
i__46280 = G__46303;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46281),iter__46278.call(null,cljs.core.chunk_rest.call(null,s__46279__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46281),null);
}
} else
{var multiset = cljs.core.first.call(null,s__46279__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__46252,multiset,s__46279__$2,temp__4092__auto____$1,part,c__8894__auto__,size__8895__auto__,b__46253,s__46251__$2,temp__4092__auto__){
return (function (p__46288){var vec__46289 = p__46288;var index = cljs.core.nth.call(null,vec__46289,0,null);var numtimes = cljs.core.nth.call(null,vec__46289,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__46252,multiset,s__46279__$2,temp__4092__auto____$1,part,c__8894__auto__,size__8895__auto__,b__46253,s__46251__$2,temp__4092__auto__))
,multiset)),iter__46278.call(null,cljs.core.rest.call(null,s__46279__$2)));
}
} else
{return null;
}
break;
}
});})(i__46252,part,c__8894__auto__,size__8895__auto__,b__46253,s__46251__$2,temp__4092__auto__))
,null,null));
});})(i__46252,part,c__8894__auto__,size__8895__auto__,b__46253,s__46251__$2,temp__4092__auto__))
;return iter__8896__auto__.call(null,part);
})());
{
var G__46304 = (i__46252 + 1);
i__46252 = G__46304;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46253),iter__46250.call(null,cljs.core.chunk_rest.call(null,s__46251__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46253),null);
}
} else
{var part = cljs.core.first.call(null,s__46251__$2);return cljs.core.cons.call(null,(function (){var iter__8896__auto__ = ((function (part,s__46251__$2,temp__4092__auto__){
return (function iter__46290(s__46291){return (new cljs.core.LazySeq(null,((function (part,s__46251__$2,temp__4092__auto__){
return (function (){var s__46291__$1 = s__46291;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__46291__$1);if(temp__4092__auto____$1)
{var s__46291__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__46291__$2))
{var c__8894__auto__ = cljs.core.chunk_first.call(null,s__46291__$2);var size__8895__auto__ = cljs.core.count.call(null,c__8894__auto__);var b__46293 = cljs.core.chunk_buffer.call(null,size__8895__auto__);if((function (){var i__46292 = 0;while(true){
if((i__46292 < size__8895__auto__))
{var multiset = cljs.core._nth.call(null,c__8894__auto__,i__46292);cljs.core.chunk_append.call(null,b__46293,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__46292,multiset,c__8894__auto__,size__8895__auto__,b__46293,s__46291__$2,temp__4092__auto____$1,part,s__46251__$2,temp__4092__auto__){
return (function (p__46298){var vec__46299 = p__46298;var index = cljs.core.nth.call(null,vec__46299,0,null);var numtimes = cljs.core.nth.call(null,vec__46299,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__46292,multiset,c__8894__auto__,size__8895__auto__,b__46293,s__46291__$2,temp__4092__auto____$1,part,s__46251__$2,temp__4092__auto__))
,multiset)));
{
var G__46305 = (i__46292 + 1);
i__46292 = G__46305;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46293),iter__46290.call(null,cljs.core.chunk_rest.call(null,s__46291__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46293),null);
}
} else
{var multiset = cljs.core.first.call(null,s__46291__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (multiset,s__46291__$2,temp__4092__auto____$1,part,s__46251__$2,temp__4092__auto__){
return (function (p__46300){var vec__46301 = p__46300;var index = cljs.core.nth.call(null,vec__46301,0,null);var numtimes = cljs.core.nth.call(null,vec__46301,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(multiset,s__46291__$2,temp__4092__auto____$1,part,s__46251__$2,temp__4092__auto__))
,multiset)),iter__46290.call(null,cljs.core.rest.call(null,s__46291__$2)));
}
} else
{return null;
}
break;
}
});})(part,s__46251__$2,temp__4092__auto__))
,null,null));
});})(part,s__46251__$2,temp__4092__auto__))
;return iter__8896__auto__.call(null,part);
})(),iter__46250.call(null,cljs.core.rest.call(null,s__46251__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8896__auto__.call(null,parts);
} else
{return null;
}
}
}
}
};
var partitions_M = function (items,var_args){
var p__46187 = null;if (arguments.length > 1) {
  p__46187 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions_M__delegate.call(this,items,p__46187);};
partitions_M.cljs$lang$maxFixedArity = 1;
partitions_M.cljs$lang$applyTo = (function (arglist__46306){
var items = cljs.core.first(arglist__46306);
var p__46187 = cljs.core.rest(arglist__46306);
return partitions_M__delegate(items,p__46187);
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
partitions.cljs$lang$applyTo = (function (arglist__46307){
var items = cljs.core.first(arglist__46307);
var args = cljs.core.rest(arglist__46307);
return partitions__delegate(items,args);
});
partitions.cljs$core$IFn$_invoke$arity$variadic = partitions__delegate;
return partitions;
})()
;

//# sourceMappingURL=combinatorics.js.map