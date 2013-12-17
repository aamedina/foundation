// Compiled by ClojureScript 0.0-2080
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
var G__26992 = cljs.core.assoc.call(null,c__$2,(j__$1 - 1),(c__$2.call(null,j__$1) - 1));
var G__26993 = (j__$1 - 1);
c__$2 = G__26992;
j__$1 = G__26993;
continue;
}
}
break;
}
}
}
});
return (new cljs.core.LazySeq(null,(function (){var c = cljs.core.vec.call(null,cljs.core.cons.call(null,null,(function (){var iter__8521__auto__ = (function iter__26988(s__26989){return (new cljs.core.LazySeq(null,(function (){var s__26989__$1 = s__26989;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__26989__$1);if(temp__4092__auto__)
{var s__26989__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__26989__$2))
{var c__8519__auto__ = cljs.core.chunk_first.call(null,s__26989__$2);var size__8520__auto__ = cljs.core.count.call(null,c__8519__auto__);var b__26991 = cljs.core.chunk_buffer.call(null,size__8520__auto__);if((function (){var i__26990 = 0;while(true){
if((i__26990 < size__8520__auto__))
{var j = cljs.core._nth.call(null,c__8519__auto__,i__26990);cljs.core.chunk_append.call(null,b__26991,((j + cnt) + (- (n + 1))));
{
var G__26994 = (i__26990 + 1);
i__26990 = G__26994;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26991),iter__26988.call(null,cljs.core.chunk_rest.call(null,s__26989__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26991),null);
}
} else
{var j = cljs.core.first.call(null,s__26989__$2);return cljs.core.cons.call(null,((j + cnt) + (- (n + 1))),iter__26988.call(null,cljs.core.rest.call(null,s__26989__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8521__auto__.call(null,cljs.core.range.call(null,1,(n + 1)));
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
{return cljs.core.map.call(null,(function (p1__26995_SHARP_){return cljs.core.map.call(null,v_items,p1__26995_SHARP_);
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
var G__26996 = (i - 1);
var G__26997 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__26996;
v_seqs__$2 = G__26997;
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
cartesian_product.cljs$lang$applyTo = (function (arglist__26998){
var seqs = cljs.core.seq(arglist__26998);
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
var G__26999 = (i - 1);
i = G__26999;
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
var G__27000 = (i - 1);
i = G__27000;
continue;
}
}
break;
}
})();var v__$1 = cljs.core.assoc.call(null,v,j,v.call(null,l),l,vj);var k = (j + 1);var l__$1 = (len - 1);while(true){
if((k < l__$1))
{{
var G__27001 = cljs.core.assoc.call(null,v__$1,k,v__$1.call(null,l__$1),l__$1,v__$1.call(null,k));
var G__27002 = (k + 1);
var G__27003 = (l__$1 - 1);
v__$1 = G__27001;
k = G__27002;
l__$1 = G__27003;
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
foundation.app.data.combinatorics.multi_perm = (function multi_perm(l){var f = cljs.core.frequencies.call(null,l);var v = cljs.core.vec.call(null,cljs.core.keys.call(null,f));var indices = cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__8521__auto__ = ((function (f,v){
return (function iter__27008(s__27009){return (new cljs.core.LazySeq(null,((function (f,v){
return (function (){var s__27009__$1 = s__27009;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__27009__$1);if(temp__4092__auto__)
{var s__27009__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27009__$2))
{var c__8519__auto__ = cljs.core.chunk_first.call(null,s__27009__$2);var size__8520__auto__ = cljs.core.count.call(null,c__8519__auto__);var b__27011 = cljs.core.chunk_buffer.call(null,size__8520__auto__);if((function (){var i__27010 = 0;while(true){
if((i__27010 < size__8520__auto__))
{var i = cljs.core._nth.call(null,c__8519__auto__,i__27010);cljs.core.chunk_append.call(null,b__27011,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));
{
var G__27012 = (i__27010 + 1);
i__27010 = G__27012;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27011),iter__27008.call(null,cljs.core.chunk_rest.call(null,s__27009__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27011),null);
}
} else
{var i = cljs.core.first.call(null,s__27009__$2);return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),iter__27008.call(null,cljs.core.rest.call(null,s__27009__$2)));
}
} else
{return null;
}
break;
}
});})(f,v))
,null,null));
});})(f,v))
;return iter__8521__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,v)));
})());return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.map,v),foundation.app.data.combinatorics.lex_permutations.call(null,indices));
});
/**
* All the distinct permutations of items, lexicographic by index.
*/
foundation.app.data.combinatorics.permutations = (function permutations(items){if(foundation.app.data.combinatorics.sorted_numbers_QMARK_.call(null,items))
{return foundation.app.data.combinatorics.lex_permutations.call(null,items);
} else
{if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core.distinct_QMARK_,items)))
{var v = cljs.core.vec.call(null,items);return cljs.core.map.call(null,(function (p1__27013_SHARP_){return cljs.core.map.call(null,v,p1__27013_SHARP_);
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
{return cljs.core.vec.call(null,(function (){var iter__8521__auto__ = (function iter__27018(s__27019){return (new cljs.core.LazySeq(null,(function (){var s__27019__$1 = s__27019;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__27019__$1);if(temp__4092__auto__)
{var s__27019__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27019__$2))
{var c__8519__auto__ = cljs.core.chunk_first.call(null,s__27019__$2);var size__8520__auto__ = cljs.core.count.call(null,c__8519__auto__);var b__27021 = cljs.core.chunk_buffer.call(null,size__8520__auto__);if((function (){var i__27020 = 0;while(true){
if((i__27020 < size__8520__auto__))
{var i = cljs.core._nth.call(null,c__8519__auto__,i__27020);cljs.core.chunk_append.call(null,b__27021,(function (){var x__8135__auto__ = 0;var y__8136__auto__ = (i - ((n - s) - -1));return ((x__8135__auto__ > y__8136__auto__) ? x__8135__auto__ : y__8136__auto__);
})());
{
var G__27022 = (i__27020 + 1);
i__27020 = G__27022;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27021),iter__27018.call(null,cljs.core.chunk_rest.call(null,s__27019__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27021),null);
}
} else
{var i = cljs.core.first.call(null,s__27019__$2);return cljs.core.cons.call(null,(function (){var x__8135__auto__ = 0;var y__8136__auto__ = (i - ((n - s) - -1));return ((x__8135__auto__ > y__8136__auto__) ? x__8135__auto__ : y__8136__auto__);
})(),iter__27018.call(null,cljs.core.rest.call(null,s__27019__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8521__auto__.call(null,cljs.core.range.call(null,1,(n + 1)));
})());
} else
{return cljs.core.vec.call(null,cljs.core.repeat.call(null,n,0));
}
});
foundation.app.data.combinatorics.growth_strings_H = (function() {
var growth_strings_H = null;
var growth_strings_H__3 = (function (n,r,s){return growth_strings_H.call(null,n,foundation.app.data.combinatorics.init.call(null,n,s),cljs.core.vec.call(null,cljs.core.repeat.call(null,n,1)),r,s);
});
var growth_strings_H__5 = (function (n,a,b,r,s){return cljs.core.cons.call(null,a,(new cljs.core.LazySeq(null,(function (){if((function (){var and__7816__auto__ = (cljs.core.peek.call(null,b) > cljs.core.peek.call(null,a));if(and__7816__auto__)
{if(cljs.core.truth_(r))
{return (cljs.core.peek.call(null,a) < (r - 1));
} else
{return true;
}
} else
{return and__7816__auto__;
}
})())
{return growth_strings_H.call(null,n,foundation.app.data.combinatorics.update.call(null,a,(n - 1),cljs.core.inc),b,r,s);
} else
{var j = (function (){var j = (n - 2);while(true){
if((function (){var and__7816__auto__ = (a.call(null,j) < b.call(null,j));if(and__7816__auto__)
{var and__7816__auto____$1 = (cljs.core.truth_(r)?(a.call(null,j) < (r - 1)):true);if(and__7816__auto____$1)
{if(cljs.core.truth_(s))
{return (((s - b.call(null,j)) - ((((a.call(null,j) + 1) === b.call(null,j)))?1:0)) <= (n - j));
} else
{return true;
}
} else
{return and__7816__auto____$1;
}
} else
{return and__7816__auto__;
}
})())
{return j;
} else
{{
var G__27025 = (j - 1);
j = G__27025;
continue;
}
}
break;
}
})();if((j === 0))
{return cljs.core.List.EMPTY;
} else
{var a__$1 = foundation.app.data.combinatorics.update.call(null,a,j,cljs.core.inc);var x = (cljs.core.truth_(s)?(s - (b.call(null,j) + ((cljs.core._EQ_.call(null,a__$1.call(null,j),b.call(null,j)))?1:0))):null);var vec__27024 = (function (){var a__$2 = a__$1;var b__$1 = b;var i = (j + 1);var current_max = (b__$1.call(null,j) + (((b__$1.call(null,j) === a__$2.call(null,j)))?1:0));while(true){
if((i === n))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$2,b__$1], null);
} else
{if(cljs.core.truth_((function (){var and__7816__auto__ = s;if(cljs.core.truth_(and__7816__auto__))
{return (i > ((n - x) - 1));
} else
{return and__7816__auto__;
}
})()))
{var new_a_i = ((i - n) + s);{
var G__27026 = cljs.core.assoc.call(null,a__$2,i,new_a_i);
var G__27027 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__27028 = (i + 1);
var G__27029 = (function (){var x__8135__auto__ = current_max;var y__8136__auto__ = (new_a_i + 1);return ((x__8135__auto__ > y__8136__auto__) ? x__8135__auto__ : y__8136__auto__);
})();
a__$2 = G__27026;
b__$1 = G__27027;
i = G__27028;
current_max = G__27029;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__27030 = cljs.core.assoc.call(null,a__$2,i,0);
var G__27031 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__27032 = (i + 1);
var G__27033 = current_max;
a__$2 = G__27030;
b__$1 = G__27031;
i = G__27032;
current_max = G__27033;
continue;
}
} else
{return null;
}
}
}
break;
}
})();var a__$2 = cljs.core.nth.call(null,vec__27024,0,null);var b__$1 = cljs.core.nth.call(null,vec__27024,1,null);return growth_strings_H.call(null,n,a__$2,b__$1,r,s);
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
var lex_partitions_H__delegate = function (N,p__27034){var map__27040 = p__27034;var map__27040__$1 = ((cljs.core.seq_QMARK_.call(null,map__27040))?cljs.core.apply.call(null,cljs.core.hash_map,map__27040):map__27040);var from = cljs.core.get.call(null,map__27040__$1,new cljs.core.Keyword(null,"min","min",1014012356));var to = cljs.core.get.call(null,map__27040__$1,new cljs.core.Keyword(null,"max","max",1014012118));if(cljs.core._EQ_.call(null,N,0))
{if((((function (){var or__7828__auto__ = from;if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
} else
{return 0;
}
})() <= 0)) && ((0 <= (function (){var or__7828__auto__ = to;if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
} else
{return 0;
}
})())))
{return cljs.core.list(cljs.core.List.EMPTY);
} else
{return cljs.core.List.EMPTY;
}
} else
{var from__$1 = (cljs.core.truth_((function (){var and__7816__auto__ = from;if(cljs.core.truth_(and__7816__auto__))
{return (from <= 1);
} else
{return and__7816__auto__;
}
})())?null:from);var to__$1 = (cljs.core.truth_((function (){var and__7816__auto__ = to;if(cljs.core.truth_(and__7816__auto__))
{return (to >= N);
} else
{return and__7816__auto__;
}
})())?null:to);if(!(((1 <= (function (){var or__7828__auto__ = from__$1;if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
} else
{return 1;
}
})())) && ((((function (){var or__7828__auto__ = from__$1;if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
} else
{return 1;
}
})() <= (function (){var or__7828__auto__ = to__$1;if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
} else
{return N;
}
})())) && (((function (){var or__7828__auto__ = to__$1;if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
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
{var growth_strings = foundation.app.data.combinatorics.growth_strings_H.call(null,N,to__$1,from__$1);var iter__8521__auto__ = (function iter__27041(s__27042){return (new cljs.core.LazySeq(null,(function (){var s__27042__$1 = s__27042;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__27042__$1);if(temp__4092__auto__)
{var s__27042__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27042__$2))
{var c__8519__auto__ = cljs.core.chunk_first.call(null,s__27042__$2);var size__8520__auto__ = cljs.core.count.call(null,c__8519__auto__);var b__27044 = cljs.core.chunk_buffer.call(null,size__8520__auto__);if((function (){var i__27043 = 0;while(true){
if((i__27043 < size__8520__auto__))
{var growth_string = cljs.core._nth.call(null,c__8519__auto__,i__27043);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));cljs.core.chunk_append.call(null,b__27044,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))));
{
var G__27045 = (i__27043 + 1);
i__27043 = G__27045;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27044),iter__27041.call(null,cljs.core.chunk_rest.call(null,s__27042__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27044),null);
}
} else
{var growth_string = cljs.core.first.call(null,s__27042__$2);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));return cljs.core.cons.call(null,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))),iter__27041.call(null,cljs.core.rest.call(null,s__27042__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8521__auto__.call(null,growth_strings);
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
var p__27034 = null;if (arguments.length > 1) {
  p__27034 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return lex_partitions_H__delegate.call(this,N,p__27034);};
lex_partitions_H.cljs$lang$maxFixedArity = 1;
lex_partitions_H.cljs$lang$applyTo = (function (arglist__27046){
var N = cljs.core.first(arglist__27046);
var p__27034 = cljs.core.rest(arglist__27046);
return lex_partitions_H__delegate(N,p__27034);
});
lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic = lex_partitions_H__delegate;
return lex_partitions_H;
})()
;
/**
* @param {...*} var_args
*/
foundation.app.data.combinatorics.partitions_H = (function() { 
var partitions_H__delegate = function (items,args){var items__$1 = cljs.core.vec.call(null,items);var N = cljs.core.count.call(null,items__$1);var lex = cljs.core.apply.call(null,foundation.app.data.combinatorics.lex_partitions_H,N,args);var iter__8521__auto__ = (function iter__27067(s__27068){return (new cljs.core.LazySeq(null,(function (){var s__27068__$1 = s__27068;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__27068__$1);if(temp__4092__auto__)
{var s__27068__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27068__$2))
{var c__8519__auto__ = cljs.core.chunk_first.call(null,s__27068__$2);var size__8520__auto__ = cljs.core.count.call(null,c__8519__auto__);var b__27070 = cljs.core.chunk_buffer.call(null,size__8520__auto__);if((function (){var i__27069 = 0;while(true){
if((i__27069 < size__8520__auto__))
{var parts = cljs.core._nth.call(null,c__8519__auto__,i__27069);cljs.core.chunk_append.call(null,b__27070,(function (){var iter__8521__auto__ = ((function (i__27069,parts,c__8519__auto__,size__8520__auto__,b__27070,s__27068__$2,temp__4092__auto__){
return (function iter__27079(s__27080){return (new cljs.core.LazySeq(null,((function (i__27069,parts,c__8519__auto__,size__8520__auto__,b__27070,s__27068__$2,temp__4092__auto__){
return (function (){var s__27080__$1 = s__27080;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__27080__$1);if(temp__4092__auto____$1)
{var s__27080__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__27080__$2))
{var c__8519__auto____$1 = cljs.core.chunk_first.call(null,s__27080__$2);var size__8520__auto____$1 = cljs.core.count.call(null,c__8519__auto____$1);var b__27082 = cljs.core.chunk_buffer.call(null,size__8520__auto____$1);if((function (){var i__27081 = 0;while(true){
if((i__27081 < size__8520__auto____$1))
{var part = cljs.core._nth.call(null,c__8519__auto____$1,i__27081);cljs.core.chunk_append.call(null,b__27082,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__27081,i__27069,part,c__8519__auto____$1,size__8520__auto____$1,b__27082,s__27080__$2,temp__4092__auto____$1,parts,c__8519__auto__,size__8520__auto__,b__27070,s__27068__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__27081,i__27069,part,c__8519__auto____$1,size__8520__auto____$1,b__27082,s__27080__$2,temp__4092__auto____$1,parts,c__8519__auto__,size__8520__auto__,b__27070,s__27068__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__27087 = (i__27081 + 1);
i__27081 = G__27087;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27082),iter__27079.call(null,cljs.core.chunk_rest.call(null,s__27080__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27082),null);
}
} else
{var part = cljs.core.first.call(null,s__27080__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__27069,part,s__27080__$2,temp__4092__auto____$1,parts,c__8519__auto__,size__8520__auto__,b__27070,s__27068__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__27069,part,s__27080__$2,temp__4092__auto____$1,parts,c__8519__auto__,size__8520__auto__,b__27070,s__27068__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__27079.call(null,cljs.core.rest.call(null,s__27080__$2)));
}
} else
{return null;
}
break;
}
});})(i__27069,parts,c__8519__auto__,size__8520__auto__,b__27070,s__27068__$2,temp__4092__auto__))
,null,null));
});})(i__27069,parts,c__8519__auto__,size__8520__auto__,b__27070,s__27068__$2,temp__4092__auto__))
;return iter__8521__auto__.call(null,parts);
})());
{
var G__27088 = (i__27069 + 1);
i__27069 = G__27088;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27070),iter__27067.call(null,cljs.core.chunk_rest.call(null,s__27068__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27070),null);
}
} else
{var parts = cljs.core.first.call(null,s__27068__$2);return cljs.core.cons.call(null,(function (){var iter__8521__auto__ = ((function (parts,s__27068__$2,temp__4092__auto__){
return (function iter__27083(s__27084){return (new cljs.core.LazySeq(null,((function (parts,s__27068__$2,temp__4092__auto__){
return (function (){var s__27084__$1 = s__27084;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__27084__$1);if(temp__4092__auto____$1)
{var s__27084__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__27084__$2))
{var c__8519__auto__ = cljs.core.chunk_first.call(null,s__27084__$2);var size__8520__auto__ = cljs.core.count.call(null,c__8519__auto__);var b__27086 = cljs.core.chunk_buffer.call(null,size__8520__auto__);if((function (){var i__27085 = 0;while(true){
if((i__27085 < size__8520__auto__))
{var part = cljs.core._nth.call(null,c__8519__auto__,i__27085);cljs.core.chunk_append.call(null,b__27086,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__27085,part,c__8519__auto__,size__8520__auto__,b__27086,s__27084__$2,temp__4092__auto____$1,parts,s__27068__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__27085,part,c__8519__auto__,size__8520__auto__,b__27086,s__27084__$2,temp__4092__auto____$1,parts,s__27068__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__27089 = (i__27085 + 1);
i__27085 = G__27089;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27086),iter__27083.call(null,cljs.core.chunk_rest.call(null,s__27084__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27086),null);
}
} else
{var part = cljs.core.first.call(null,s__27084__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (part,s__27084__$2,temp__4092__auto____$1,parts,s__27068__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(part,s__27084__$2,temp__4092__auto____$1,parts,s__27068__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__27083.call(null,cljs.core.rest.call(null,s__27084__$2)));
}
} else
{return null;
}
break;
}
});})(parts,s__27068__$2,temp__4092__auto__))
,null,null));
});})(parts,s__27068__$2,temp__4092__auto__))
;return iter__8521__auto__.call(null,parts);
})(),iter__27067.call(null,cljs.core.rest.call(null,s__27068__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8521__auto__.call(null,lex);
};
var partitions_H = function (items,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions_H__delegate.call(this,items,args);};
partitions_H.cljs$lang$maxFixedArity = 1;
partitions_H.cljs$lang$applyTo = (function (arglist__27090){
var items = cljs.core.first(arglist__27090);
var args = cljs.core.rest(arglist__27090);
return partitions_H__delegate(items,args);
});
partitions_H.cljs$core$IFn$_invoke$arity$variadic = partitions_H__delegate;
return partitions_H;
})()
;
foundation.app.data.combinatorics.multiset_partitions_M = (function() {
var multiset_partitions_M = null;
var multiset_partitions_M__3 = (function (multiset,r,s){var n = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,multiset));var m = cljs.core.count.call(null,multiset);var f = cljs.core.PersistentVector.EMPTY;var c = cljs.core.PersistentVector.EMPTY;var u = cljs.core.PersistentVector.EMPTY;var v = cljs.core.PersistentVector.EMPTY;var vec__27113 = (function (){var j = 0;var c__$1 = c;var u__$1 = u;var v__$1 = v;while(true){
if(cljs.core._EQ_.call(null,j,m))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,u__$1,v__$1], null);
} else
{{
var G__27135 = (j + 1);
var G__27136 = cljs.core.assoc.call(null,c__$1,j,(j + 1));
var G__27137 = cljs.core.assoc.call(null,u__$1,j,multiset.call(null,(j + 1)));
var G__27138 = cljs.core.assoc.call(null,v__$1,j,multiset.call(null,(j + 1)));
j = G__27135;
c__$1 = G__27136;
u__$1 = G__27137;
v__$1 = G__27138;
continue;
}
}
break;
}
})();var c__$1 = cljs.core.nth.call(null,vec__27113,0,null);var u__$1 = cljs.core.nth.call(null,vec__27113,1,null);var v__$1 = cljs.core.nth.call(null,vec__27113,2,null);var a = 0;var b = m;var l = 0;var f__$1 = cljs.core.assoc.call(null,f,0,0,1,m);var stack = cljs.core.List.EMPTY;return multiset_partitions_M.call(null,n,m,f__$1,c__$1,u__$1,v__$1,a,b,l,r,s);
});
var multiset_partitions_M__11 = (function (n,m,f,c,u,v,a,b,l,r,s){while(true){
var vec__27114 = (function (){var j = a;var k = b;var x = false;var u__$1 = u;var v__$1 = v;var c__$1 = c;while(true){
if((j >= b))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [u__$1,v__$1,c__$1,j,k], null);
} else
{var u__$2 = cljs.core.assoc.call(null,u__$1,k,(u__$1.call(null,j) - v__$1.call(null,j)));if(cljs.core._EQ_.call(null,u__$2.call(null,k),0))
{{
var G__27139 = (j + 1);
var G__27140 = k;
var G__27141 = true;
var G__27142 = u__$2;
var G__27143 = v__$1;
var G__27144 = c__$1;
j = G__27139;
k = G__27140;
x = G__27141;
u__$1 = G__27142;
v__$1 = G__27143;
c__$1 = G__27144;
continue;
}
} else
{if(!(x))
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,(function (){var x__8142__auto__ = v__$1.call(null,j);var y__8143__auto__ = u__$2.call(null,k);return ((x__8142__auto__ < y__8143__auto__) ? x__8142__auto__ : y__8143__auto__);
})());var x__$1 = (u__$2.call(null,k) < v__$2.call(null,j));var k__$1 = (k + 1);var j__$1 = (j + 1);{
var G__27145 = j__$1;
var G__27146 = k__$1;
var G__27147 = x__$1;
var G__27148 = u__$2;
var G__27149 = v__$2;
var G__27150 = c__$2;
j = G__27145;
k = G__27146;
x = G__27147;
u__$1 = G__27148;
v__$1 = G__27149;
c__$1 = G__27150;
continue;
}
} else
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,u__$2.call(null,k));var k__$1 = (k + 1);var j__$1 = (j + 1);{
var G__27151 = j__$1;
var G__27152 = k__$1;
var G__27153 = x;
var G__27154 = u__$2;
var G__27155 = v__$2;
var G__27156 = c__$2;
j = G__27151;
k = G__27152;
x = G__27153;
u__$1 = G__27154;
v__$1 = G__27155;
c__$1 = G__27156;
continue;
}
}
}
}
break;
}
})();var u__$1 = cljs.core.nth.call(null,vec__27114,0,null);var v__$1 = cljs.core.nth.call(null,vec__27114,1,null);var c__$1 = cljs.core.nth.call(null,vec__27114,2,null);var j = cljs.core.nth.call(null,vec__27114,3,null);var k = cljs.core.nth.call(null,vec__27114,4,null);if(cljs.core.truth_((function (){var and__7816__auto__ = r;if(cljs.core.truth_(and__7816__auto__))
{return ((k > b)) && (cljs.core._EQ_.call(null,l,(r - 1)));
} else
{return and__7816__auto__;
}
})()))
{return foundation.app.data.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
} else
{if(cljs.core.truth_((function (){var and__7816__auto__ = s;if(cljs.core.truth_(and__7816__auto__))
{return ((k <= b)) && (((l + 1) < s));
} else
{return and__7816__auto__;
}
})()))
{return foundation.app.data.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
} else
{if((k > b))
{var a__$1 = b;var b__$1 = k;var l__$1 = (l + 1);var f__$1 = cljs.core.assoc.call(null,f,(l__$1 + 1),b__$1);{
var G__27157 = n;
var G__27158 = m;
var G__27159 = f__$1;
var G__27160 = c__$1;
var G__27161 = u__$1;
var G__27162 = v__$1;
var G__27163 = a__$1;
var G__27164 = b__$1;
var G__27165 = l__$1;
var G__27166 = r;
var G__27167 = s;
n = G__27157;
m = G__27158;
f = G__27159;
c = G__27160;
u = G__27161;
v = G__27162;
a = G__27163;
b = G__27164;
l = G__27165;
r = G__27166;
s = G__27167;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var part = (function (){var iter__8521__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s){
return (function iter__27115(s__27116){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s){
return (function (){var s__27116__$1 = s__27116;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__27116__$1);if(temp__4092__auto__)
{var s__27116__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27116__$2))
{var c__8519__auto__ = cljs.core.chunk_first.call(null,s__27116__$2);var size__8520__auto__ = cljs.core.count.call(null,c__8519__auto__);var b__27118 = cljs.core.chunk_buffer.call(null,size__8520__auto__);if((function (){var i__27117 = 0;while(true){
if((i__27117 < size__8520__auto__))
{var y = cljs.core._nth.call(null,c__8519__auto__,i__27117);cljs.core.chunk_append.call(null,b__27118,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + 1)) - 1);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8521__auto__ = ((function (i__27117,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8519__auto__,size__8520__auto__,b__27118,s__27116__$2,temp__4092__auto__){
return (function iter__27127(s__27128){return (new cljs.core.LazySeq(null,((function (i__27117,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8519__auto__,size__8520__auto__,b__27118,s__27116__$2,temp__4092__auto__){
return (function (){var s__27128__$1 = s__27128;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__27128__$1);if(temp__4092__auto____$1)
{var s__27128__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__27128__$2))
{var c__8519__auto____$1 = cljs.core.chunk_first.call(null,s__27128__$2);var size__8520__auto____$1 = cljs.core.count.call(null,c__8519__auto____$1);var b__27130 = cljs.core.chunk_buffer.call(null,size__8520__auto____$1);if((function (){var i__27129 = 0;while(true){
if((i__27129 < size__8520__auto____$1))
{var z = cljs.core._nth.call(null,c__8519__auto____$1,i__27129);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{cljs.core.chunk_append.call(null,b__27130,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));
{
var G__27168 = (i__27129 + 1);
i__27129 = G__27168;
continue;
}
} else
{{
var G__27169 = (i__27129 + 1);
i__27129 = G__27169;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27130),iter__27127.call(null,cljs.core.chunk_rest.call(null,s__27128__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27130),null);
}
} else
{var z = cljs.core.first.call(null,s__27128__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),iter__27127.call(null,cljs.core.rest.call(null,s__27128__$2)));
} else
{{
var G__27170 = cljs.core.rest.call(null,s__27128__$2);
s__27128__$1 = G__27170;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__27117,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8519__auto__,size__8520__auto__,b__27118,s__27116__$2,temp__4092__auto__))
,null,null));
});})(i__27117,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8519__auto__,size__8520__auto__,b__27118,s__27116__$2,temp__4092__auto__))
;return iter__8521__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + 1)));
})());
})());
{
var G__27171 = (i__27117 + 1);
i__27117 = G__27171;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27118),iter__27115.call(null,cljs.core.chunk_rest.call(null,s__27116__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27118),null);
}
} else
{var y = cljs.core.first.call(null,s__27116__$2);return cljs.core.cons.call(null,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + 1)) - 1);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8521__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__27116__$2,temp__4092__auto__){
return (function iter__27131(s__27132){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__27116__$2,temp__4092__auto__){
return (function (){var s__27132__$1 = s__27132;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__27132__$1);if(temp__4092__auto____$1)
{var s__27132__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__27132__$2))
{var c__8519__auto__ = cljs.core.chunk_first.call(null,s__27132__$2);var size__8520__auto__ = cljs.core.count.call(null,c__8519__auto__);var b__27134 = cljs.core.chunk_buffer.call(null,size__8520__auto__);if((function (){var i__27133 = 0;while(true){
if((i__27133 < size__8520__auto__))
{var z = cljs.core._nth.call(null,c__8519__auto__,i__27133);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{cljs.core.chunk_append.call(null,b__27134,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));
{
var G__27172 = (i__27133 + 1);
i__27133 = G__27172;
continue;
}
} else
{{
var G__27173 = (i__27133 + 1);
i__27133 = G__27173;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27134),iter__27131.call(null,cljs.core.chunk_rest.call(null,s__27132__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27134),null);
}
} else
{var z = cljs.core.first.call(null,s__27132__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),iter__27131.call(null,cljs.core.rest.call(null,s__27132__$2)));
} else
{{
var G__27174 = cljs.core.rest.call(null,s__27132__$2);
s__27132__$1 = G__27174;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__27116__$2,temp__4092__auto__))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__27116__$2,temp__4092__auto__))
;return iter__8521__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + 1)));
})());
})(),iter__27115.call(null,cljs.core.rest.call(null,s__27116__$2)));
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s))
;return iter__8521__auto__.call(null,cljs.core.range.call(null,(l + 1)));
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
var G__27183 = (j - 1);
j = G__27183;
continue;
}
}
break;
}
})();if(cljs.core.truth_((function (){var and__7816__auto__ = r;if(cljs.core.truth_(and__7816__auto__))
{return (cljs.core._EQ_.call(null,j,a)) && ((((v.call(null,j) - 1) * (r - l)) < u.call(null,j)));
} else
{return and__7816__auto__;
}
})()))
{return foundation.app.data.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s);
} else
{if((cljs.core._EQ_.call(null,j,a)) && (cljs.core._EQ_.call(null,v.call(null,j),1)))
{return foundation.app.data.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var v__$1 = foundation.app.data.combinatorics.update.call(null,v,j,cljs.core.dec);var diff_uv = (cljs.core.truth_(s)?cljs.core.apply.call(null,cljs.core._PLUS_,(function (){var iter__8521__auto__ = ((function (v__$1){
return (function iter__27179(s__27180){return (new cljs.core.LazySeq(null,((function (v__$1){
return (function (){var s__27180__$1 = s__27180;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__27180__$1);if(temp__4092__auto__)
{var s__27180__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27180__$2))
{var c__8519__auto__ = cljs.core.chunk_first.call(null,s__27180__$2);var size__8520__auto__ = cljs.core.count.call(null,c__8519__auto__);var b__27182 = cljs.core.chunk_buffer.call(null,size__8520__auto__);if((function (){var i__27181 = 0;while(true){
if((i__27181 < size__8520__auto__))
{var i = cljs.core._nth.call(null,c__8519__auto__,i__27181);cljs.core.chunk_append.call(null,b__27182,(u.call(null,i) - v__$1.call(null,i)));
{
var G__27184 = (i__27181 + 1);
i__27181 = G__27184;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27182),iter__27179.call(null,cljs.core.chunk_rest.call(null,s__27180__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27182),null);
}
} else
{var i = cljs.core.first.call(null,s__27180__$2);return cljs.core.cons.call(null,(u.call(null,i) - v__$1.call(null,i)),iter__27179.call(null,cljs.core.rest.call(null,s__27180__$2)));
}
} else
{return null;
}
break;
}
});})(v__$1))
,null,null));
});})(v__$1))
;return iter__8521__auto__.call(null,cljs.core.range.call(null,a,(j + 1)));
})()):null);var v__$2 = (function (){var ks = cljs.core.range.call(null,(j + 1),b);var v__$2 = v__$1;while(true){
if(cljs.core.empty_QMARK_.call(null,ks))
{return v__$2;
} else
{var k = cljs.core.first.call(null,ks);{
var G__27185 = cljs.core.rest.call(null,ks);
var G__27186 = cljs.core.assoc.call(null,v__$2,k,u.call(null,k));
ks = G__27185;
v__$2 = G__27186;
continue;
}
}
break;
}
})();var min_partitions_after_this = (cljs.core.truth_(s)?(s - (l + 1)):0);var amount_to_dec = (cljs.core.truth_(s)?(function (){var x__8135__auto__ = 0;var y__8136__auto__ = (min_partitions_after_this - diff_uv);return ((x__8135__auto__ > y__8136__auto__) ? x__8135__auto__ : y__8136__auto__);
})():0);var v__$3 = ((cljs.core._EQ_.call(null,amount_to_dec,0))?v__$2:(function (){var k_1 = (b - 1);var v__$3 = v__$2;var amount = amount_to_dec;while(true){
var vk = v__$3.call(null,k_1);if((amount > vk))
{{
var G__27187 = (k_1 - 1);
var G__27188 = cljs.core.assoc.call(null,v__$3,k_1,0);
var G__27189 = (amount - vk);
k_1 = G__27187;
v__$3 = G__27188;
amount = G__27189;
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
var partitions_M__delegate = function (items,p__27190){var map__27248 = p__27190;var map__27248__$1 = ((cljs.core.seq_QMARK_.call(null,map__27248))?cljs.core.apply.call(null,cljs.core.hash_map,map__27248):map__27248);var from = cljs.core.get.call(null,map__27248__$1,new cljs.core.Keyword(null,"min","min",1014012356));var to = cljs.core.get.call(null,map__27248__$1,new cljs.core.Keyword(null,"max","max",1014012118));if(cljs.core._EQ_.call(null,cljs.core.count.call(null,items),0))
{if((((function (){var or__7828__auto__ = from;if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
} else
{return 0;
}
})() <= 0)) && ((0 <= (function (){var or__7828__auto__ = to;if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
} else
{return 0;
}
})())))
{return cljs.core.list(cljs.core.List.EMPTY);
} else
{return cljs.core.List.EMPTY;
}
} else
{var items__$1 = cljs.core.vec.call(null,items);var ditems = cljs.core.vec.call(null,cljs.core.distinct.call(null,items__$1));var freqs = cljs.core.frequencies.call(null,items__$1);var N = cljs.core.count.call(null,items__$1);var M = cljs.core.count.call(null,ditems);var from__$1 = (cljs.core.truth_((function (){var and__7816__auto__ = from;if(cljs.core.truth_(and__7816__auto__))
{return (from <= 1);
} else
{return and__7816__auto__;
}
})())?null:from);var to__$1 = (cljs.core.truth_((function (){var and__7816__auto__ = to;if(cljs.core.truth_(and__7816__auto__))
{return (to >= N);
} else
{return and__7816__auto__;
}
})())?null:to);if(!(((1 <= (function (){var or__7828__auto__ = from__$1;if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
} else
{return 1;
}
})())) && ((((function (){var or__7828__auto__ = from__$1;if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
} else
{return 1;
}
})() <= (function (){var or__7828__auto__ = to__$1;if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
} else
{return N;
}
})())) && (((function (){var or__7828__auto__ = to__$1;if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
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
{var start_multiset = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8521__auto__ = (function iter__27249(s__27250){return (new cljs.core.LazySeq(null,(function (){var s__27250__$1 = s__27250;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__27250__$1);if(temp__4092__auto__)
{var s__27250__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27250__$2))
{var c__8519__auto__ = cljs.core.chunk_first.call(null,s__27250__$2);var size__8520__auto__ = cljs.core.count.call(null,c__8519__auto__);var b__27252 = cljs.core.chunk_buffer.call(null,size__8520__auto__);if((function (){var i__27251 = 0;while(true){
if((i__27251 < size__8520__auto__))
{var i = cljs.core._nth.call(null,c__8519__auto__,i__27251);var j = (i + 1);cljs.core.chunk_append.call(null,b__27252,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null));
{
var G__27305 = (i__27251 + 1);
i__27251 = G__27305;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27252),iter__27249.call(null,cljs.core.chunk_rest.call(null,s__27250__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27252),null);
}
} else
{var i = cljs.core.first.call(null,s__27250__$2);var j = (i + 1);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null),iter__27249.call(null,cljs.core.rest.call(null,s__27250__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8521__auto__.call(null,cljs.core.range.call(null,M));
})());var parts = foundation.app.data.combinatorics.multiset_partitions_M.call(null,start_multiset,to__$1,from__$1);var iter__8521__auto__ = (function iter__27253(s__27254){return (new cljs.core.LazySeq(null,(function (){var s__27254__$1 = s__27254;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__27254__$1);if(temp__4092__auto__)
{var s__27254__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27254__$2))
{var c__8519__auto__ = cljs.core.chunk_first.call(null,s__27254__$2);var size__8520__auto__ = cljs.core.count.call(null,c__8519__auto__);var b__27256 = cljs.core.chunk_buffer.call(null,size__8520__auto__);if((function (){var i__27255 = 0;while(true){
if((i__27255 < size__8520__auto__))
{var part = cljs.core._nth.call(null,c__8519__auto__,i__27255);cljs.core.chunk_append.call(null,b__27256,(function (){var iter__8521__auto__ = ((function (i__27255,part,c__8519__auto__,size__8520__auto__,b__27256,s__27254__$2,temp__4092__auto__){
return (function iter__27281(s__27282){return (new cljs.core.LazySeq(null,((function (i__27255,part,c__8519__auto__,size__8520__auto__,b__27256,s__27254__$2,temp__4092__auto__){
return (function (){var s__27282__$1 = s__27282;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__27282__$1);if(temp__4092__auto____$1)
{var s__27282__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__27282__$2))
{var c__8519__auto____$1 = cljs.core.chunk_first.call(null,s__27282__$2);var size__8520__auto____$1 = cljs.core.count.call(null,c__8519__auto____$1);var b__27284 = cljs.core.chunk_buffer.call(null,size__8520__auto____$1);if((function (){var i__27283 = 0;while(true){
if((i__27283 < size__8520__auto____$1))
{var multiset = cljs.core._nth.call(null,c__8519__auto____$1,i__27283);cljs.core.chunk_append.call(null,b__27284,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__27283,i__27255,multiset,c__8519__auto____$1,size__8520__auto____$1,b__27284,s__27282__$2,temp__4092__auto____$1,part,c__8519__auto__,size__8520__auto__,b__27256,s__27254__$2,temp__4092__auto__){
return (function (p__27289){var vec__27290 = p__27289;var index = cljs.core.nth.call(null,vec__27290,0,null);var numtimes = cljs.core.nth.call(null,vec__27290,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__27283,i__27255,multiset,c__8519__auto____$1,size__8520__auto____$1,b__27284,s__27282__$2,temp__4092__auto____$1,part,c__8519__auto__,size__8520__auto__,b__27256,s__27254__$2,temp__4092__auto__))
,multiset)));
{
var G__27306 = (i__27283 + 1);
i__27283 = G__27306;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27284),iter__27281.call(null,cljs.core.chunk_rest.call(null,s__27282__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27284),null);
}
} else
{var multiset = cljs.core.first.call(null,s__27282__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__27255,multiset,s__27282__$2,temp__4092__auto____$1,part,c__8519__auto__,size__8520__auto__,b__27256,s__27254__$2,temp__4092__auto__){
return (function (p__27291){var vec__27292 = p__27291;var index = cljs.core.nth.call(null,vec__27292,0,null);var numtimes = cljs.core.nth.call(null,vec__27292,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__27255,multiset,s__27282__$2,temp__4092__auto____$1,part,c__8519__auto__,size__8520__auto__,b__27256,s__27254__$2,temp__4092__auto__))
,multiset)),iter__27281.call(null,cljs.core.rest.call(null,s__27282__$2)));
}
} else
{return null;
}
break;
}
});})(i__27255,part,c__8519__auto__,size__8520__auto__,b__27256,s__27254__$2,temp__4092__auto__))
,null,null));
});})(i__27255,part,c__8519__auto__,size__8520__auto__,b__27256,s__27254__$2,temp__4092__auto__))
;return iter__8521__auto__.call(null,part);
})());
{
var G__27307 = (i__27255 + 1);
i__27255 = G__27307;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27256),iter__27253.call(null,cljs.core.chunk_rest.call(null,s__27254__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27256),null);
}
} else
{var part = cljs.core.first.call(null,s__27254__$2);return cljs.core.cons.call(null,(function (){var iter__8521__auto__ = ((function (part,s__27254__$2,temp__4092__auto__){
return (function iter__27293(s__27294){return (new cljs.core.LazySeq(null,((function (part,s__27254__$2,temp__4092__auto__){
return (function (){var s__27294__$1 = s__27294;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__27294__$1);if(temp__4092__auto____$1)
{var s__27294__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__27294__$2))
{var c__8519__auto__ = cljs.core.chunk_first.call(null,s__27294__$2);var size__8520__auto__ = cljs.core.count.call(null,c__8519__auto__);var b__27296 = cljs.core.chunk_buffer.call(null,size__8520__auto__);if((function (){var i__27295 = 0;while(true){
if((i__27295 < size__8520__auto__))
{var multiset = cljs.core._nth.call(null,c__8519__auto__,i__27295);cljs.core.chunk_append.call(null,b__27296,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__27295,multiset,c__8519__auto__,size__8520__auto__,b__27296,s__27294__$2,temp__4092__auto____$1,part,s__27254__$2,temp__4092__auto__){
return (function (p__27301){var vec__27302 = p__27301;var index = cljs.core.nth.call(null,vec__27302,0,null);var numtimes = cljs.core.nth.call(null,vec__27302,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__27295,multiset,c__8519__auto__,size__8520__auto__,b__27296,s__27294__$2,temp__4092__auto____$1,part,s__27254__$2,temp__4092__auto__))
,multiset)));
{
var G__27308 = (i__27295 + 1);
i__27295 = G__27308;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27296),iter__27293.call(null,cljs.core.chunk_rest.call(null,s__27294__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27296),null);
}
} else
{var multiset = cljs.core.first.call(null,s__27294__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (multiset,s__27294__$2,temp__4092__auto____$1,part,s__27254__$2,temp__4092__auto__){
return (function (p__27303){var vec__27304 = p__27303;var index = cljs.core.nth.call(null,vec__27304,0,null);var numtimes = cljs.core.nth.call(null,vec__27304,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(multiset,s__27294__$2,temp__4092__auto____$1,part,s__27254__$2,temp__4092__auto__))
,multiset)),iter__27293.call(null,cljs.core.rest.call(null,s__27294__$2)));
}
} else
{return null;
}
break;
}
});})(part,s__27254__$2,temp__4092__auto__))
,null,null));
});})(part,s__27254__$2,temp__4092__auto__))
;return iter__8521__auto__.call(null,part);
})(),iter__27253.call(null,cljs.core.rest.call(null,s__27254__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8521__auto__.call(null,parts);
} else
{return null;
}
}
}
}
};
var partitions_M = function (items,var_args){
var p__27190 = null;if (arguments.length > 1) {
  p__27190 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions_M__delegate.call(this,items,p__27190);};
partitions_M.cljs$lang$maxFixedArity = 1;
partitions_M.cljs$lang$applyTo = (function (arglist__27309){
var items = cljs.core.first(arglist__27309);
var p__27190 = cljs.core.rest(arglist__27309);
return partitions_M__delegate(items,p__27190);
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
partitions.cljs$lang$applyTo = (function (arglist__27310){
var items = cljs.core.first(arglist__27310);
var args = cljs.core.rest(arglist__27310);
return partitions__delegate(items,args);
});
partitions.cljs$core$IFn$_invoke$arity$variadic = partitions__delegate;
return partitions;
})()
;
