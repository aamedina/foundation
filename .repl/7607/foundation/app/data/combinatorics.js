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
var G__21373 = cljs.core.assoc.call(null,c__$2,(j__$1 - 1),(c__$2.call(null,j__$1) - 1));
var G__21374 = (j__$1 - 1);
c__$2 = G__21373;
j__$1 = G__21374;
continue;
}
}
break;
}
}
}
});
return (new cljs.core.LazySeq(null,(function (){var c = cljs.core.vec.call(null,cljs.core.cons.call(null,null,(function (){var iter__5850__auto__ = (function iter__21369(s__21370){return (new cljs.core.LazySeq(null,(function (){var s__21370__$1 = s__21370;while(true){
var temp__4098__auto__ = cljs.core.seq.call(null,s__21370__$1);if(temp__4098__auto__)
{var s__21370__$2 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21370__$2))
{var c__5848__auto__ = cljs.core.chunk_first.call(null,s__21370__$2);var size__5849__auto__ = cljs.core.count.call(null,c__5848__auto__);var b__21372 = cljs.core.chunk_buffer.call(null,size__5849__auto__);if((function (){var i__21371 = 0;while(true){
if((i__21371 < size__5849__auto__))
{var j = cljs.core._nth.call(null,c__5848__auto__,i__21371);cljs.core.chunk_append.call(null,b__21372,((j + cnt) + (- (n + 1))));
{
var G__21375 = (i__21371 + 1);
i__21371 = G__21375;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21372),iter__21369.call(null,cljs.core.chunk_rest.call(null,s__21370__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21372),null);
}
} else
{var j = cljs.core.first.call(null,s__21370__$2);return cljs.core.cons.call(null,((j + cnt) + (- (n + 1))),iter__21369.call(null,cljs.core.rest.call(null,s__21370__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__5850__auto__.call(null,cljs.core.range.call(null,1,(n + 1)));
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
{return cljs.core.map.call(null,(function (p1__21376_SHARP_){return cljs.core.map.call(null,v_items,p1__21376_SHARP_);
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
{var temp__4096__auto__ = cljs.core.next.call(null,v_seqs__$2.call(null,i));if(temp__4096__auto__)
{var rst = temp__4096__auto__;return cljs.core.assoc.call(null,v_seqs__$2,i,rst);
} else
{{
var G__21377 = (i - 1);
var G__21378 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__21377;
v_seqs__$2 = G__21378;
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
cartesian_product.cljs$lang$applyTo = (function (arglist__21379){
var seqs = cljs.core.seq(arglist__21379);
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
var G__21380 = (i - 1);
i = G__21380;
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
var G__21381 = (i - 1);
i = G__21381;
continue;
}
}
break;
}
})();var v__$1 = cljs.core.assoc.call(null,v,j,v.call(null,l),l,vj);var k = (j + 1);var l__$1 = (len - 1);while(true){
if((k < l__$1))
{{
var G__21382 = cljs.core.assoc.call(null,v__$1,k,v__$1.call(null,l__$1),l__$1,v__$1.call(null,k));
var G__21383 = (k + 1);
var G__21384 = (l__$1 - 1);
v__$1 = G__21382;
k = G__21383;
l__$1 = G__21384;
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
foundation.app.data.combinatorics.multi_perm = (function multi_perm(l){var f = cljs.core.frequencies.call(null,l);var v = cljs.core.vec.call(null,cljs.core.keys.call(null,f));var indices = cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__5850__auto__ = ((function (f,v){
return (function iter__21389(s__21390){return (new cljs.core.LazySeq(null,((function (f,v){
return (function (){var s__21390__$1 = s__21390;while(true){
var temp__4098__auto__ = cljs.core.seq.call(null,s__21390__$1);if(temp__4098__auto__)
{var s__21390__$2 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21390__$2))
{var c__5848__auto__ = cljs.core.chunk_first.call(null,s__21390__$2);var size__5849__auto__ = cljs.core.count.call(null,c__5848__auto__);var b__21392 = cljs.core.chunk_buffer.call(null,size__5849__auto__);if((function (){var i__21391 = 0;while(true){
if((i__21391 < size__5849__auto__))
{var i = cljs.core._nth.call(null,c__5848__auto__,i__21391);cljs.core.chunk_append.call(null,b__21392,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));
{
var G__21393 = (i__21391 + 1);
i__21391 = G__21393;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21392),iter__21389.call(null,cljs.core.chunk_rest.call(null,s__21390__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21392),null);
}
} else
{var i = cljs.core.first.call(null,s__21390__$2);return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),iter__21389.call(null,cljs.core.rest.call(null,s__21390__$2)));
}
} else
{return null;
}
break;
}
});})(f,v))
,null,null));
});})(f,v))
;return iter__5850__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,v)));
})());return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.map,v),foundation.app.data.combinatorics.lex_permutations.call(null,indices));
});
/**
* All the distinct permutations of items, lexicographic by index.
*/
foundation.app.data.combinatorics.permutations = (function permutations(items){if(foundation.app.data.combinatorics.sorted_numbers_QMARK_.call(null,items))
{return foundation.app.data.combinatorics.lex_permutations.call(null,items);
} else
{if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core.distinct_QMARK_,items)))
{var v = cljs.core.vec.call(null,items);return cljs.core.map.call(null,(function (p1__21394_SHARP_){return cljs.core.map.call(null,v,p1__21394_SHARP_);
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
{return cljs.core.vec.call(null,(function (){var iter__5850__auto__ = (function iter__21399(s__21400){return (new cljs.core.LazySeq(null,(function (){var s__21400__$1 = s__21400;while(true){
var temp__4098__auto__ = cljs.core.seq.call(null,s__21400__$1);if(temp__4098__auto__)
{var s__21400__$2 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21400__$2))
{var c__5848__auto__ = cljs.core.chunk_first.call(null,s__21400__$2);var size__5849__auto__ = cljs.core.count.call(null,c__5848__auto__);var b__21402 = cljs.core.chunk_buffer.call(null,size__5849__auto__);if((function (){var i__21401 = 0;while(true){
if((i__21401 < size__5849__auto__))
{var i = cljs.core._nth.call(null,c__5848__auto__,i__21401);cljs.core.chunk_append.call(null,b__21402,(function (){var x__5464__auto__ = 0;var y__5465__auto__ = (i - ((n - s) - -1));return ((x__5464__auto__ > y__5465__auto__) ? x__5464__auto__ : y__5465__auto__);
})());
{
var G__21403 = (i__21401 + 1);
i__21401 = G__21403;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21402),iter__21399.call(null,cljs.core.chunk_rest.call(null,s__21400__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21402),null);
}
} else
{var i = cljs.core.first.call(null,s__21400__$2);return cljs.core.cons.call(null,(function (){var x__5464__auto__ = 0;var y__5465__auto__ = (i - ((n - s) - -1));return ((x__5464__auto__ > y__5465__auto__) ? x__5464__auto__ : y__5465__auto__);
})(),iter__21399.call(null,cljs.core.rest.call(null,s__21400__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__5850__auto__.call(null,cljs.core.range.call(null,1,(n + 1)));
})());
} else
{return cljs.core.vec.call(null,cljs.core.repeat.call(null,n,0));
}
});
foundation.app.data.combinatorics.growth_strings_H = (function() {
var growth_strings_H = null;
var growth_strings_H__3 = (function (n,r,s){return growth_strings_H.call(null,n,foundation.app.data.combinatorics.init.call(null,n,s),cljs.core.vec.call(null,cljs.core.repeat.call(null,n,1)),r,s);
});
var growth_strings_H__5 = (function (n,a,b,r,s){return cljs.core.cons.call(null,a,(new cljs.core.LazySeq(null,(function (){if((function (){var and__5145__auto__ = (cljs.core.peek.call(null,b) > cljs.core.peek.call(null,a));if(and__5145__auto__)
{if(cljs.core.truth_(r))
{return (cljs.core.peek.call(null,a) < (r - 1));
} else
{return true;
}
} else
{return and__5145__auto__;
}
})())
{return growth_strings_H.call(null,n,foundation.app.data.combinatorics.update.call(null,a,(n - 1),cljs.core.inc),b,r,s);
} else
{var j = (function (){var j = (n - 2);while(true){
if((function (){var and__5145__auto__ = (a.call(null,j) < b.call(null,j));if(and__5145__auto__)
{var and__5145__auto____$1 = (cljs.core.truth_(r)?(a.call(null,j) < (r - 1)):true);if(and__5145__auto____$1)
{if(cljs.core.truth_(s))
{return (((s - b.call(null,j)) - ((((a.call(null,j) + 1) === b.call(null,j)))?1:0)) <= (n - j));
} else
{return true;
}
} else
{return and__5145__auto____$1;
}
} else
{return and__5145__auto__;
}
})())
{return j;
} else
{{
var G__21406 = (j - 1);
j = G__21406;
continue;
}
}
break;
}
})();if((j === 0))
{return cljs.core.List.EMPTY;
} else
{var a__$1 = foundation.app.data.combinatorics.update.call(null,a,j,cljs.core.inc);var x = (cljs.core.truth_(s)?(s - (b.call(null,j) + ((cljs.core._EQ_.call(null,a__$1.call(null,j),b.call(null,j)))?1:0))):null);var vec__21405 = (function (){var a__$2 = a__$1;var b__$1 = b;var i = (j + 1);var current_max = (b__$1.call(null,j) + (((b__$1.call(null,j) === a__$2.call(null,j)))?1:0));while(true){
if((i === n))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$2,b__$1], null);
} else
{if(cljs.core.truth_((function (){var and__5145__auto__ = s;if(cljs.core.truth_(and__5145__auto__))
{return (i > ((n - x) - 1));
} else
{return and__5145__auto__;
}
})()))
{var new_a_i = ((i - n) + s);{
var G__21407 = cljs.core.assoc.call(null,a__$2,i,new_a_i);
var G__21408 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__21409 = (i + 1);
var G__21410 = (function (){var x__5464__auto__ = current_max;var y__5465__auto__ = (new_a_i + 1);return ((x__5464__auto__ > y__5465__auto__) ? x__5464__auto__ : y__5465__auto__);
})();
a__$2 = G__21407;
b__$1 = G__21408;
i = G__21409;
current_max = G__21410;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__21411 = cljs.core.assoc.call(null,a__$2,i,0);
var G__21412 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__21413 = (i + 1);
var G__21414 = current_max;
a__$2 = G__21411;
b__$1 = G__21412;
i = G__21413;
current_max = G__21414;
continue;
}
} else
{return null;
}
}
}
break;
}
})();var a__$2 = cljs.core.nth.call(null,vec__21405,0,null);var b__$1 = cljs.core.nth.call(null,vec__21405,1,null);return growth_strings_H.call(null,n,a__$2,b__$1,r,s);
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
var lex_partitions_H__delegate = function (N,p__21415){var map__21421 = p__21415;var map__21421__$1 = ((cljs.core.seq_QMARK_.call(null,map__21421))?cljs.core.apply.call(null,cljs.core.hash_map,map__21421):map__21421);var from = cljs.core.get.call(null,map__21421__$1,new cljs.core.Keyword(null,"min","min",1014012356));var to = cljs.core.get.call(null,map__21421__$1,new cljs.core.Keyword(null,"max","max",1014012118));if(cljs.core._EQ_.call(null,N,0))
{if((((function (){var or__5157__auto__ = from;if(cljs.core.truth_(or__5157__auto__))
{return or__5157__auto__;
} else
{return 0;
}
})() <= 0)) && ((0 <= (function (){var or__5157__auto__ = to;if(cljs.core.truth_(or__5157__auto__))
{return or__5157__auto__;
} else
{return 0;
}
})())))
{return cljs.core.list(cljs.core.List.EMPTY);
} else
{return cljs.core.List.EMPTY;
}
} else
{var from__$1 = (cljs.core.truth_((function (){var and__5145__auto__ = from;if(cljs.core.truth_(and__5145__auto__))
{return (from <= 1);
} else
{return and__5145__auto__;
}
})())?null:from);var to__$1 = (cljs.core.truth_((function (){var and__5145__auto__ = to;if(cljs.core.truth_(and__5145__auto__))
{return (to >= N);
} else
{return and__5145__auto__;
}
})())?null:to);if(!(((1 <= (function (){var or__5157__auto__ = from__$1;if(cljs.core.truth_(or__5157__auto__))
{return or__5157__auto__;
} else
{return 1;
}
})())) && ((((function (){var or__5157__auto__ = from__$1;if(cljs.core.truth_(or__5157__auto__))
{return or__5157__auto__;
} else
{return 1;
}
})() <= (function (){var or__5157__auto__ = to__$1;if(cljs.core.truth_(or__5157__auto__))
{return or__5157__auto__;
} else
{return N;
}
})())) && (((function (){var or__5157__auto__ = to__$1;if(cljs.core.truth_(or__5157__auto__))
{return or__5157__auto__;
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
{var growth_strings = foundation.app.data.combinatorics.growth_strings_H.call(null,N,to__$1,from__$1);var iter__5850__auto__ = (function iter__21422(s__21423){return (new cljs.core.LazySeq(null,(function (){var s__21423__$1 = s__21423;while(true){
var temp__4098__auto__ = cljs.core.seq.call(null,s__21423__$1);if(temp__4098__auto__)
{var s__21423__$2 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21423__$2))
{var c__5848__auto__ = cljs.core.chunk_first.call(null,s__21423__$2);var size__5849__auto__ = cljs.core.count.call(null,c__5848__auto__);var b__21425 = cljs.core.chunk_buffer.call(null,size__5849__auto__);if((function (){var i__21424 = 0;while(true){
if((i__21424 < size__5849__auto__))
{var growth_string = cljs.core._nth.call(null,c__5848__auto__,i__21424);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));cljs.core.chunk_append.call(null,b__21425,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))));
{
var G__21426 = (i__21424 + 1);
i__21424 = G__21426;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21425),iter__21422.call(null,cljs.core.chunk_rest.call(null,s__21423__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21425),null);
}
} else
{var growth_string = cljs.core.first.call(null,s__21423__$2);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));return cljs.core.cons.call(null,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))),iter__21422.call(null,cljs.core.rest.call(null,s__21423__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__5850__auto__.call(null,growth_strings);
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
var p__21415 = null;if (arguments.length > 1) {
  p__21415 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return lex_partitions_H__delegate.call(this,N,p__21415);};
lex_partitions_H.cljs$lang$maxFixedArity = 1;
lex_partitions_H.cljs$lang$applyTo = (function (arglist__21427){
var N = cljs.core.first(arglist__21427);
var p__21415 = cljs.core.rest(arglist__21427);
return lex_partitions_H__delegate(N,p__21415);
});
lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic = lex_partitions_H__delegate;
return lex_partitions_H;
})()
;
/**
* @param {...*} var_args
*/
foundation.app.data.combinatorics.partitions_H = (function() { 
var partitions_H__delegate = function (items,args){var items__$1 = cljs.core.vec.call(null,items);var N = cljs.core.count.call(null,items__$1);var lex = cljs.core.apply.call(null,foundation.app.data.combinatorics.lex_partitions_H,N,args);var iter__5850__auto__ = (function iter__21448(s__21449){return (new cljs.core.LazySeq(null,(function (){var s__21449__$1 = s__21449;while(true){
var temp__4098__auto__ = cljs.core.seq.call(null,s__21449__$1);if(temp__4098__auto__)
{var s__21449__$2 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21449__$2))
{var c__5848__auto__ = cljs.core.chunk_first.call(null,s__21449__$2);var size__5849__auto__ = cljs.core.count.call(null,c__5848__auto__);var b__21451 = cljs.core.chunk_buffer.call(null,size__5849__auto__);if((function (){var i__21450 = 0;while(true){
if((i__21450 < size__5849__auto__))
{var parts = cljs.core._nth.call(null,c__5848__auto__,i__21450);cljs.core.chunk_append.call(null,b__21451,(function (){var iter__5850__auto__ = ((function (i__21450,parts,c__5848__auto__,size__5849__auto__,b__21451,s__21449__$2,temp__4098__auto__){
return (function iter__21460(s__21461){return (new cljs.core.LazySeq(null,((function (i__21450,parts,c__5848__auto__,size__5849__auto__,b__21451,s__21449__$2,temp__4098__auto__){
return (function (){var s__21461__$1 = s__21461;while(true){
var temp__4098__auto____$1 = cljs.core.seq.call(null,s__21461__$1);if(temp__4098__auto____$1)
{var s__21461__$2 = temp__4098__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__21461__$2))
{var c__5848__auto____$1 = cljs.core.chunk_first.call(null,s__21461__$2);var size__5849__auto____$1 = cljs.core.count.call(null,c__5848__auto____$1);var b__21463 = cljs.core.chunk_buffer.call(null,size__5849__auto____$1);if((function (){var i__21462 = 0;while(true){
if((i__21462 < size__5849__auto____$1))
{var part = cljs.core._nth.call(null,c__5848__auto____$1,i__21462);cljs.core.chunk_append.call(null,b__21463,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__21462,i__21450,part,c__5848__auto____$1,size__5849__auto____$1,b__21463,s__21461__$2,temp__4098__auto____$1,parts,c__5848__auto__,size__5849__auto__,b__21451,s__21449__$2,temp__4098__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__21462,i__21450,part,c__5848__auto____$1,size__5849__auto____$1,b__21463,s__21461__$2,temp__4098__auto____$1,parts,c__5848__auto__,size__5849__auto__,b__21451,s__21449__$2,temp__4098__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__21468 = (i__21462 + 1);
i__21462 = G__21468;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21463),iter__21460.call(null,cljs.core.chunk_rest.call(null,s__21461__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21463),null);
}
} else
{var part = cljs.core.first.call(null,s__21461__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__21450,part,s__21461__$2,temp__4098__auto____$1,parts,c__5848__auto__,size__5849__auto__,b__21451,s__21449__$2,temp__4098__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__21450,part,s__21461__$2,temp__4098__auto____$1,parts,c__5848__auto__,size__5849__auto__,b__21451,s__21449__$2,temp__4098__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__21460.call(null,cljs.core.rest.call(null,s__21461__$2)));
}
} else
{return null;
}
break;
}
});})(i__21450,parts,c__5848__auto__,size__5849__auto__,b__21451,s__21449__$2,temp__4098__auto__))
,null,null));
});})(i__21450,parts,c__5848__auto__,size__5849__auto__,b__21451,s__21449__$2,temp__4098__auto__))
;return iter__5850__auto__.call(null,parts);
})());
{
var G__21469 = (i__21450 + 1);
i__21450 = G__21469;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21451),iter__21448.call(null,cljs.core.chunk_rest.call(null,s__21449__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21451),null);
}
} else
{var parts = cljs.core.first.call(null,s__21449__$2);return cljs.core.cons.call(null,(function (){var iter__5850__auto__ = ((function (parts,s__21449__$2,temp__4098__auto__){
return (function iter__21464(s__21465){return (new cljs.core.LazySeq(null,((function (parts,s__21449__$2,temp__4098__auto__){
return (function (){var s__21465__$1 = s__21465;while(true){
var temp__4098__auto____$1 = cljs.core.seq.call(null,s__21465__$1);if(temp__4098__auto____$1)
{var s__21465__$2 = temp__4098__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__21465__$2))
{var c__5848__auto__ = cljs.core.chunk_first.call(null,s__21465__$2);var size__5849__auto__ = cljs.core.count.call(null,c__5848__auto__);var b__21467 = cljs.core.chunk_buffer.call(null,size__5849__auto__);if((function (){var i__21466 = 0;while(true){
if((i__21466 < size__5849__auto__))
{var part = cljs.core._nth.call(null,c__5848__auto__,i__21466);cljs.core.chunk_append.call(null,b__21467,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__21466,part,c__5848__auto__,size__5849__auto__,b__21467,s__21465__$2,temp__4098__auto____$1,parts,s__21449__$2,temp__4098__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__21466,part,c__5848__auto__,size__5849__auto__,b__21467,s__21465__$2,temp__4098__auto____$1,parts,s__21449__$2,temp__4098__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__21470 = (i__21466 + 1);
i__21466 = G__21470;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21467),iter__21464.call(null,cljs.core.chunk_rest.call(null,s__21465__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21467),null);
}
} else
{var part = cljs.core.first.call(null,s__21465__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (part,s__21465__$2,temp__4098__auto____$1,parts,s__21449__$2,temp__4098__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(part,s__21465__$2,temp__4098__auto____$1,parts,s__21449__$2,temp__4098__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__21464.call(null,cljs.core.rest.call(null,s__21465__$2)));
}
} else
{return null;
}
break;
}
});})(parts,s__21449__$2,temp__4098__auto__))
,null,null));
});})(parts,s__21449__$2,temp__4098__auto__))
;return iter__5850__auto__.call(null,parts);
})(),iter__21448.call(null,cljs.core.rest.call(null,s__21449__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__5850__auto__.call(null,lex);
};
var partitions_H = function (items,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions_H__delegate.call(this,items,args);};
partitions_H.cljs$lang$maxFixedArity = 1;
partitions_H.cljs$lang$applyTo = (function (arglist__21471){
var items = cljs.core.first(arglist__21471);
var args = cljs.core.rest(arglist__21471);
return partitions_H__delegate(items,args);
});
partitions_H.cljs$core$IFn$_invoke$arity$variadic = partitions_H__delegate;
return partitions_H;
})()
;
foundation.app.data.combinatorics.multiset_partitions_M = (function() {
var multiset_partitions_M = null;
var multiset_partitions_M__3 = (function (multiset,r,s){var n = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,multiset));var m = cljs.core.count.call(null,multiset);var f = cljs.core.PersistentVector.EMPTY;var c = cljs.core.PersistentVector.EMPTY;var u = cljs.core.PersistentVector.EMPTY;var v = cljs.core.PersistentVector.EMPTY;var vec__21494 = (function (){var j = 0;var c__$1 = c;var u__$1 = u;var v__$1 = v;while(true){
if(cljs.core._EQ_.call(null,j,m))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,u__$1,v__$1], null);
} else
{{
var G__21516 = (j + 1);
var G__21517 = cljs.core.assoc.call(null,c__$1,j,(j + 1));
var G__21518 = cljs.core.assoc.call(null,u__$1,j,multiset.call(null,(j + 1)));
var G__21519 = cljs.core.assoc.call(null,v__$1,j,multiset.call(null,(j + 1)));
j = G__21516;
c__$1 = G__21517;
u__$1 = G__21518;
v__$1 = G__21519;
continue;
}
}
break;
}
})();var c__$1 = cljs.core.nth.call(null,vec__21494,0,null);var u__$1 = cljs.core.nth.call(null,vec__21494,1,null);var v__$1 = cljs.core.nth.call(null,vec__21494,2,null);var a = 0;var b = m;var l = 0;var f__$1 = cljs.core.assoc.call(null,f,0,0,1,m);var stack = cljs.core.List.EMPTY;return multiset_partitions_M.call(null,n,m,f__$1,c__$1,u__$1,v__$1,a,b,l,r,s);
});
var multiset_partitions_M__11 = (function (n,m,f,c,u,v,a,b,l,r,s){while(true){
var vec__21495 = (function (){var j = a;var k = b;var x = false;var u__$1 = u;var v__$1 = v;var c__$1 = c;while(true){
if((j >= b))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [u__$1,v__$1,c__$1,j,k], null);
} else
{var u__$2 = cljs.core.assoc.call(null,u__$1,k,(u__$1.call(null,j) - v__$1.call(null,j)));if(cljs.core._EQ_.call(null,u__$2.call(null,k),0))
{{
var G__21520 = (j + 1);
var G__21521 = k;
var G__21522 = true;
var G__21523 = u__$2;
var G__21524 = v__$1;
var G__21525 = c__$1;
j = G__21520;
k = G__21521;
x = G__21522;
u__$1 = G__21523;
v__$1 = G__21524;
c__$1 = G__21525;
continue;
}
} else
{if(!(x))
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,(function (){var x__5471__auto__ = v__$1.call(null,j);var y__5472__auto__ = u__$2.call(null,k);return ((x__5471__auto__ < y__5472__auto__) ? x__5471__auto__ : y__5472__auto__);
})());var x__$1 = (u__$2.call(null,k) < v__$2.call(null,j));var k__$1 = (k + 1);var j__$1 = (j + 1);{
var G__21526 = j__$1;
var G__21527 = k__$1;
var G__21528 = x__$1;
var G__21529 = u__$2;
var G__21530 = v__$2;
var G__21531 = c__$2;
j = G__21526;
k = G__21527;
x = G__21528;
u__$1 = G__21529;
v__$1 = G__21530;
c__$1 = G__21531;
continue;
}
} else
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,u__$2.call(null,k));var k__$1 = (k + 1);var j__$1 = (j + 1);{
var G__21532 = j__$1;
var G__21533 = k__$1;
var G__21534 = x;
var G__21535 = u__$2;
var G__21536 = v__$2;
var G__21537 = c__$2;
j = G__21532;
k = G__21533;
x = G__21534;
u__$1 = G__21535;
v__$1 = G__21536;
c__$1 = G__21537;
continue;
}
}
}
}
break;
}
})();var u__$1 = cljs.core.nth.call(null,vec__21495,0,null);var v__$1 = cljs.core.nth.call(null,vec__21495,1,null);var c__$1 = cljs.core.nth.call(null,vec__21495,2,null);var j = cljs.core.nth.call(null,vec__21495,3,null);var k = cljs.core.nth.call(null,vec__21495,4,null);if(cljs.core.truth_((function (){var and__5145__auto__ = r;if(cljs.core.truth_(and__5145__auto__))
{return ((k > b)) && (cljs.core._EQ_.call(null,l,(r - 1)));
} else
{return and__5145__auto__;
}
})()))
{return foundation.app.data.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
} else
{if(cljs.core.truth_((function (){var and__5145__auto__ = s;if(cljs.core.truth_(and__5145__auto__))
{return ((k <= b)) && (((l + 1) < s));
} else
{return and__5145__auto__;
}
})()))
{return foundation.app.data.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
} else
{if((k > b))
{var a__$1 = b;var b__$1 = k;var l__$1 = (l + 1);var f__$1 = cljs.core.assoc.call(null,f,(l__$1 + 1),b__$1);{
var G__21538 = n;
var G__21539 = m;
var G__21540 = f__$1;
var G__21541 = c__$1;
var G__21542 = u__$1;
var G__21543 = v__$1;
var G__21544 = a__$1;
var G__21545 = b__$1;
var G__21546 = l__$1;
var G__21547 = r;
var G__21548 = s;
n = G__21538;
m = G__21539;
f = G__21540;
c = G__21541;
u = G__21542;
v = G__21543;
a = G__21544;
b = G__21545;
l = G__21546;
r = G__21547;
s = G__21548;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var part = (function (){var iter__5850__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s){
return (function iter__21496(s__21497){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s){
return (function (){var s__21497__$1 = s__21497;while(true){
var temp__4098__auto__ = cljs.core.seq.call(null,s__21497__$1);if(temp__4098__auto__)
{var s__21497__$2 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21497__$2))
{var c__5848__auto__ = cljs.core.chunk_first.call(null,s__21497__$2);var size__5849__auto__ = cljs.core.count.call(null,c__5848__auto__);var b__21499 = cljs.core.chunk_buffer.call(null,size__5849__auto__);if((function (){var i__21498 = 0;while(true){
if((i__21498 < size__5849__auto__))
{var y = cljs.core._nth.call(null,c__5848__auto__,i__21498);cljs.core.chunk_append.call(null,b__21499,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + 1)) - 1);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5850__auto__ = ((function (i__21498,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__5848__auto__,size__5849__auto__,b__21499,s__21497__$2,temp__4098__auto__){
return (function iter__21508(s__21509){return (new cljs.core.LazySeq(null,((function (i__21498,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__5848__auto__,size__5849__auto__,b__21499,s__21497__$2,temp__4098__auto__){
return (function (){var s__21509__$1 = s__21509;while(true){
var temp__4098__auto____$1 = cljs.core.seq.call(null,s__21509__$1);if(temp__4098__auto____$1)
{var s__21509__$2 = temp__4098__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__21509__$2))
{var c__5848__auto____$1 = cljs.core.chunk_first.call(null,s__21509__$2);var size__5849__auto____$1 = cljs.core.count.call(null,c__5848__auto____$1);var b__21511 = cljs.core.chunk_buffer.call(null,size__5849__auto____$1);if((function (){var i__21510 = 0;while(true){
if((i__21510 < size__5849__auto____$1))
{var z = cljs.core._nth.call(null,c__5848__auto____$1,i__21510);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{cljs.core.chunk_append.call(null,b__21511,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));
{
var G__21549 = (i__21510 + 1);
i__21510 = G__21549;
continue;
}
} else
{{
var G__21550 = (i__21510 + 1);
i__21510 = G__21550;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21511),iter__21508.call(null,cljs.core.chunk_rest.call(null,s__21509__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21511),null);
}
} else
{var z = cljs.core.first.call(null,s__21509__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),iter__21508.call(null,cljs.core.rest.call(null,s__21509__$2)));
} else
{{
var G__21551 = cljs.core.rest.call(null,s__21509__$2);
s__21509__$1 = G__21551;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__21498,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__5848__auto__,size__5849__auto__,b__21499,s__21497__$2,temp__4098__auto__))
,null,null));
});})(i__21498,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__5848__auto__,size__5849__auto__,b__21499,s__21497__$2,temp__4098__auto__))
;return iter__5850__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + 1)));
})());
})());
{
var G__21552 = (i__21498 + 1);
i__21498 = G__21552;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21499),iter__21496.call(null,cljs.core.chunk_rest.call(null,s__21497__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21499),null);
}
} else
{var y = cljs.core.first.call(null,s__21497__$2);return cljs.core.cons.call(null,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + 1)) - 1);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5850__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__21497__$2,temp__4098__auto__){
return (function iter__21512(s__21513){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__21497__$2,temp__4098__auto__){
return (function (){var s__21513__$1 = s__21513;while(true){
var temp__4098__auto____$1 = cljs.core.seq.call(null,s__21513__$1);if(temp__4098__auto____$1)
{var s__21513__$2 = temp__4098__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__21513__$2))
{var c__5848__auto__ = cljs.core.chunk_first.call(null,s__21513__$2);var size__5849__auto__ = cljs.core.count.call(null,c__5848__auto__);var b__21515 = cljs.core.chunk_buffer.call(null,size__5849__auto__);if((function (){var i__21514 = 0;while(true){
if((i__21514 < size__5849__auto__))
{var z = cljs.core._nth.call(null,c__5848__auto__,i__21514);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{cljs.core.chunk_append.call(null,b__21515,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));
{
var G__21553 = (i__21514 + 1);
i__21514 = G__21553;
continue;
}
} else
{{
var G__21554 = (i__21514 + 1);
i__21514 = G__21554;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21515),iter__21512.call(null,cljs.core.chunk_rest.call(null,s__21513__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21515),null);
}
} else
{var z = cljs.core.first.call(null,s__21513__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),iter__21512.call(null,cljs.core.rest.call(null,s__21513__$2)));
} else
{{
var G__21555 = cljs.core.rest.call(null,s__21513__$2);
s__21513__$1 = G__21555;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__21497__$2,temp__4098__auto__))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__21497__$2,temp__4098__auto__))
;return iter__5850__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + 1)));
})());
})(),iter__21496.call(null,cljs.core.rest.call(null,s__21497__$2)));
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s))
;return iter__5850__auto__.call(null,cljs.core.range.call(null,(l + 1)));
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
var G__21564 = (j - 1);
j = G__21564;
continue;
}
}
break;
}
})();if(cljs.core.truth_((function (){var and__5145__auto__ = r;if(cljs.core.truth_(and__5145__auto__))
{return (cljs.core._EQ_.call(null,j,a)) && ((((v.call(null,j) - 1) * (r - l)) < u.call(null,j)));
} else
{return and__5145__auto__;
}
})()))
{return foundation.app.data.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s);
} else
{if((cljs.core._EQ_.call(null,j,a)) && (cljs.core._EQ_.call(null,v.call(null,j),1)))
{return foundation.app.data.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var v__$1 = foundation.app.data.combinatorics.update.call(null,v,j,cljs.core.dec);var diff_uv = (cljs.core.truth_(s)?cljs.core.apply.call(null,cljs.core._PLUS_,(function (){var iter__5850__auto__ = ((function (v__$1){
return (function iter__21560(s__21561){return (new cljs.core.LazySeq(null,((function (v__$1){
return (function (){var s__21561__$1 = s__21561;while(true){
var temp__4098__auto__ = cljs.core.seq.call(null,s__21561__$1);if(temp__4098__auto__)
{var s__21561__$2 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21561__$2))
{var c__5848__auto__ = cljs.core.chunk_first.call(null,s__21561__$2);var size__5849__auto__ = cljs.core.count.call(null,c__5848__auto__);var b__21563 = cljs.core.chunk_buffer.call(null,size__5849__auto__);if((function (){var i__21562 = 0;while(true){
if((i__21562 < size__5849__auto__))
{var i = cljs.core._nth.call(null,c__5848__auto__,i__21562);cljs.core.chunk_append.call(null,b__21563,(u.call(null,i) - v__$1.call(null,i)));
{
var G__21565 = (i__21562 + 1);
i__21562 = G__21565;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21563),iter__21560.call(null,cljs.core.chunk_rest.call(null,s__21561__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21563),null);
}
} else
{var i = cljs.core.first.call(null,s__21561__$2);return cljs.core.cons.call(null,(u.call(null,i) - v__$1.call(null,i)),iter__21560.call(null,cljs.core.rest.call(null,s__21561__$2)));
}
} else
{return null;
}
break;
}
});})(v__$1))
,null,null));
});})(v__$1))
;return iter__5850__auto__.call(null,cljs.core.range.call(null,a,(j + 1)));
})()):null);var v__$2 = (function (){var ks = cljs.core.range.call(null,(j + 1),b);var v__$2 = v__$1;while(true){
if(cljs.core.empty_QMARK_.call(null,ks))
{return v__$2;
} else
{var k = cljs.core.first.call(null,ks);{
var G__21566 = cljs.core.rest.call(null,ks);
var G__21567 = cljs.core.assoc.call(null,v__$2,k,u.call(null,k));
ks = G__21566;
v__$2 = G__21567;
continue;
}
}
break;
}
})();var min_partitions_after_this = (cljs.core.truth_(s)?(s - (l + 1)):0);var amount_to_dec = (cljs.core.truth_(s)?(function (){var x__5464__auto__ = 0;var y__5465__auto__ = (min_partitions_after_this - diff_uv);return ((x__5464__auto__ > y__5465__auto__) ? x__5464__auto__ : y__5465__auto__);
})():0);var v__$3 = ((cljs.core._EQ_.call(null,amount_to_dec,0))?v__$2:(function (){var k_1 = (b - 1);var v__$3 = v__$2;var amount = amount_to_dec;while(true){
var vk = v__$3.call(null,k_1);if((amount > vk))
{{
var G__21568 = (k_1 - 1);
var G__21569 = cljs.core.assoc.call(null,v__$3,k_1,0);
var G__21570 = (amount - vk);
k_1 = G__21568;
v__$3 = G__21569;
amount = G__21570;
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
var partitions_M__delegate = function (items,p__21571){var map__21629 = p__21571;var map__21629__$1 = ((cljs.core.seq_QMARK_.call(null,map__21629))?cljs.core.apply.call(null,cljs.core.hash_map,map__21629):map__21629);var from = cljs.core.get.call(null,map__21629__$1,new cljs.core.Keyword(null,"min","min",1014012356));var to = cljs.core.get.call(null,map__21629__$1,new cljs.core.Keyword(null,"max","max",1014012118));if(cljs.core._EQ_.call(null,cljs.core.count.call(null,items),0))
{if((((function (){var or__5157__auto__ = from;if(cljs.core.truth_(or__5157__auto__))
{return or__5157__auto__;
} else
{return 0;
}
})() <= 0)) && ((0 <= (function (){var or__5157__auto__ = to;if(cljs.core.truth_(or__5157__auto__))
{return or__5157__auto__;
} else
{return 0;
}
})())))
{return cljs.core.list(cljs.core.List.EMPTY);
} else
{return cljs.core.List.EMPTY;
}
} else
{var items__$1 = cljs.core.vec.call(null,items);var ditems = cljs.core.vec.call(null,cljs.core.distinct.call(null,items__$1));var freqs = cljs.core.frequencies.call(null,items__$1);var N = cljs.core.count.call(null,items__$1);var M = cljs.core.count.call(null,ditems);var from__$1 = (cljs.core.truth_((function (){var and__5145__auto__ = from;if(cljs.core.truth_(and__5145__auto__))
{return (from <= 1);
} else
{return and__5145__auto__;
}
})())?null:from);var to__$1 = (cljs.core.truth_((function (){var and__5145__auto__ = to;if(cljs.core.truth_(and__5145__auto__))
{return (to >= N);
} else
{return and__5145__auto__;
}
})())?null:to);if(!(((1 <= (function (){var or__5157__auto__ = from__$1;if(cljs.core.truth_(or__5157__auto__))
{return or__5157__auto__;
} else
{return 1;
}
})())) && ((((function (){var or__5157__auto__ = from__$1;if(cljs.core.truth_(or__5157__auto__))
{return or__5157__auto__;
} else
{return 1;
}
})() <= (function (){var or__5157__auto__ = to__$1;if(cljs.core.truth_(or__5157__auto__))
{return or__5157__auto__;
} else
{return N;
}
})())) && (((function (){var or__5157__auto__ = to__$1;if(cljs.core.truth_(or__5157__auto__))
{return or__5157__auto__;
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
{var start_multiset = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5850__auto__ = (function iter__21630(s__21631){return (new cljs.core.LazySeq(null,(function (){var s__21631__$1 = s__21631;while(true){
var temp__4098__auto__ = cljs.core.seq.call(null,s__21631__$1);if(temp__4098__auto__)
{var s__21631__$2 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21631__$2))
{var c__5848__auto__ = cljs.core.chunk_first.call(null,s__21631__$2);var size__5849__auto__ = cljs.core.count.call(null,c__5848__auto__);var b__21633 = cljs.core.chunk_buffer.call(null,size__5849__auto__);if((function (){var i__21632 = 0;while(true){
if((i__21632 < size__5849__auto__))
{var i = cljs.core._nth.call(null,c__5848__auto__,i__21632);var j = (i + 1);cljs.core.chunk_append.call(null,b__21633,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null));
{
var G__21686 = (i__21632 + 1);
i__21632 = G__21686;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21633),iter__21630.call(null,cljs.core.chunk_rest.call(null,s__21631__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21633),null);
}
} else
{var i = cljs.core.first.call(null,s__21631__$2);var j = (i + 1);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null),iter__21630.call(null,cljs.core.rest.call(null,s__21631__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__5850__auto__.call(null,cljs.core.range.call(null,M));
})());var parts = foundation.app.data.combinatorics.multiset_partitions_M.call(null,start_multiset,to__$1,from__$1);var iter__5850__auto__ = (function iter__21634(s__21635){return (new cljs.core.LazySeq(null,(function (){var s__21635__$1 = s__21635;while(true){
var temp__4098__auto__ = cljs.core.seq.call(null,s__21635__$1);if(temp__4098__auto__)
{var s__21635__$2 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21635__$2))
{var c__5848__auto__ = cljs.core.chunk_first.call(null,s__21635__$2);var size__5849__auto__ = cljs.core.count.call(null,c__5848__auto__);var b__21637 = cljs.core.chunk_buffer.call(null,size__5849__auto__);if((function (){var i__21636 = 0;while(true){
if((i__21636 < size__5849__auto__))
{var part = cljs.core._nth.call(null,c__5848__auto__,i__21636);cljs.core.chunk_append.call(null,b__21637,(function (){var iter__5850__auto__ = ((function (i__21636,part,c__5848__auto__,size__5849__auto__,b__21637,s__21635__$2,temp__4098__auto__){
return (function iter__21662(s__21663){return (new cljs.core.LazySeq(null,((function (i__21636,part,c__5848__auto__,size__5849__auto__,b__21637,s__21635__$2,temp__4098__auto__){
return (function (){var s__21663__$1 = s__21663;while(true){
var temp__4098__auto____$1 = cljs.core.seq.call(null,s__21663__$1);if(temp__4098__auto____$1)
{var s__21663__$2 = temp__4098__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__21663__$2))
{var c__5848__auto____$1 = cljs.core.chunk_first.call(null,s__21663__$2);var size__5849__auto____$1 = cljs.core.count.call(null,c__5848__auto____$1);var b__21665 = cljs.core.chunk_buffer.call(null,size__5849__auto____$1);if((function (){var i__21664 = 0;while(true){
if((i__21664 < size__5849__auto____$1))
{var multiset = cljs.core._nth.call(null,c__5848__auto____$1,i__21664);cljs.core.chunk_append.call(null,b__21665,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__21664,i__21636,multiset,c__5848__auto____$1,size__5849__auto____$1,b__21665,s__21663__$2,temp__4098__auto____$1,part,c__5848__auto__,size__5849__auto__,b__21637,s__21635__$2,temp__4098__auto__){
return (function (p__21670){var vec__21671 = p__21670;var index = cljs.core.nth.call(null,vec__21671,0,null);var numtimes = cljs.core.nth.call(null,vec__21671,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__21664,i__21636,multiset,c__5848__auto____$1,size__5849__auto____$1,b__21665,s__21663__$2,temp__4098__auto____$1,part,c__5848__auto__,size__5849__auto__,b__21637,s__21635__$2,temp__4098__auto__))
,multiset)));
{
var G__21687 = (i__21664 + 1);
i__21664 = G__21687;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21665),iter__21662.call(null,cljs.core.chunk_rest.call(null,s__21663__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21665),null);
}
} else
{var multiset = cljs.core.first.call(null,s__21663__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__21636,multiset,s__21663__$2,temp__4098__auto____$1,part,c__5848__auto__,size__5849__auto__,b__21637,s__21635__$2,temp__4098__auto__){
return (function (p__21672){var vec__21673 = p__21672;var index = cljs.core.nth.call(null,vec__21673,0,null);var numtimes = cljs.core.nth.call(null,vec__21673,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__21636,multiset,s__21663__$2,temp__4098__auto____$1,part,c__5848__auto__,size__5849__auto__,b__21637,s__21635__$2,temp__4098__auto__))
,multiset)),iter__21662.call(null,cljs.core.rest.call(null,s__21663__$2)));
}
} else
{return null;
}
break;
}
});})(i__21636,part,c__5848__auto__,size__5849__auto__,b__21637,s__21635__$2,temp__4098__auto__))
,null,null));
});})(i__21636,part,c__5848__auto__,size__5849__auto__,b__21637,s__21635__$2,temp__4098__auto__))
;return iter__5850__auto__.call(null,part);
})());
{
var G__21688 = (i__21636 + 1);
i__21636 = G__21688;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21637),iter__21634.call(null,cljs.core.chunk_rest.call(null,s__21635__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21637),null);
}
} else
{var part = cljs.core.first.call(null,s__21635__$2);return cljs.core.cons.call(null,(function (){var iter__5850__auto__ = ((function (part,s__21635__$2,temp__4098__auto__){
return (function iter__21674(s__21675){return (new cljs.core.LazySeq(null,((function (part,s__21635__$2,temp__4098__auto__){
return (function (){var s__21675__$1 = s__21675;while(true){
var temp__4098__auto____$1 = cljs.core.seq.call(null,s__21675__$1);if(temp__4098__auto____$1)
{var s__21675__$2 = temp__4098__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__21675__$2))
{var c__5848__auto__ = cljs.core.chunk_first.call(null,s__21675__$2);var size__5849__auto__ = cljs.core.count.call(null,c__5848__auto__);var b__21677 = cljs.core.chunk_buffer.call(null,size__5849__auto__);if((function (){var i__21676 = 0;while(true){
if((i__21676 < size__5849__auto__))
{var multiset = cljs.core._nth.call(null,c__5848__auto__,i__21676);cljs.core.chunk_append.call(null,b__21677,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__21676,multiset,c__5848__auto__,size__5849__auto__,b__21677,s__21675__$2,temp__4098__auto____$1,part,s__21635__$2,temp__4098__auto__){
return (function (p__21682){var vec__21683 = p__21682;var index = cljs.core.nth.call(null,vec__21683,0,null);var numtimes = cljs.core.nth.call(null,vec__21683,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__21676,multiset,c__5848__auto__,size__5849__auto__,b__21677,s__21675__$2,temp__4098__auto____$1,part,s__21635__$2,temp__4098__auto__))
,multiset)));
{
var G__21689 = (i__21676 + 1);
i__21676 = G__21689;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21677),iter__21674.call(null,cljs.core.chunk_rest.call(null,s__21675__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21677),null);
}
} else
{var multiset = cljs.core.first.call(null,s__21675__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (multiset,s__21675__$2,temp__4098__auto____$1,part,s__21635__$2,temp__4098__auto__){
return (function (p__21684){var vec__21685 = p__21684;var index = cljs.core.nth.call(null,vec__21685,0,null);var numtimes = cljs.core.nth.call(null,vec__21685,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(multiset,s__21675__$2,temp__4098__auto____$1,part,s__21635__$2,temp__4098__auto__))
,multiset)),iter__21674.call(null,cljs.core.rest.call(null,s__21675__$2)));
}
} else
{return null;
}
break;
}
});})(part,s__21635__$2,temp__4098__auto__))
,null,null));
});})(part,s__21635__$2,temp__4098__auto__))
;return iter__5850__auto__.call(null,part);
})(),iter__21634.call(null,cljs.core.rest.call(null,s__21635__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__5850__auto__.call(null,parts);
} else
{return null;
}
}
}
}
};
var partitions_M = function (items,var_args){
var p__21571 = null;if (arguments.length > 1) {
  p__21571 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions_M__delegate.call(this,items,p__21571);};
partitions_M.cljs$lang$maxFixedArity = 1;
partitions_M.cljs$lang$applyTo = (function (arglist__21690){
var items = cljs.core.first(arglist__21690);
var p__21571 = cljs.core.rest(arglist__21690);
return partitions_M__delegate(items,p__21571);
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
partitions.cljs$lang$applyTo = (function (arglist__21691){
var items = cljs.core.first(arglist__21691);
var args = cljs.core.rest(arglist__21691);
return partitions__delegate(items,args);
});
partitions.cljs$core$IFn$_invoke$arity$variadic = partitions__delegate;
return partitions;
})()
;
