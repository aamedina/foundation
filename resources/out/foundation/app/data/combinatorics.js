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
var G__17329 = cljs.core.assoc.call(null,c__$2,(j__$1 - 1),(c__$2.call(null,j__$1) - 1));
var G__17330 = (j__$1 - 1);
c__$2 = G__17329;
j__$1 = G__17330;
continue;
}
}
break;
}
}
}
});
return (new cljs.core.LazySeq(null,(function (){var c = cljs.core.vec.call(null,cljs.core.cons.call(null,null,(function (){var iter__15876__auto__ = (function iter__17325(s__17326){return (new cljs.core.LazySeq(null,(function (){var s__17326__$1 = s__17326;while(true){
var temp__4098__auto__ = cljs.core.seq.call(null,s__17326__$1);if(temp__4098__auto__)
{var s__17326__$2 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17326__$2))
{var c__15874__auto__ = cljs.core.chunk_first.call(null,s__17326__$2);var size__15875__auto__ = cljs.core.count.call(null,c__15874__auto__);var b__17328 = cljs.core.chunk_buffer.call(null,size__15875__auto__);if((function (){var i__17327 = 0;while(true){
if((i__17327 < size__15875__auto__))
{var j = cljs.core._nth.call(null,c__15874__auto__,i__17327);cljs.core.chunk_append.call(null,b__17328,((j + cnt) + (- (n + 1))));
{
var G__17331 = (i__17327 + 1);
i__17327 = G__17331;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17328),iter__17325.call(null,cljs.core.chunk_rest.call(null,s__17326__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17328),null);
}
} else
{var j = cljs.core.first.call(null,s__17326__$2);return cljs.core.cons.call(null,((j + cnt) + (- (n + 1))),iter__17325.call(null,cljs.core.rest.call(null,s__17326__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__15876__auto__.call(null,cljs.core.range.call(null,1,(n + 1)));
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
{return cljs.core.map.call(null,(function (p1__17332_SHARP_){return cljs.core.map.call(null,v_items,p1__17332_SHARP_);
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
var G__17333 = (i - 1);
var G__17334 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__17333;
v_seqs__$2 = G__17334;
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
cartesian_product.cljs$lang$applyTo = (function (arglist__17335){
var seqs = cljs.core.seq(arglist__17335);
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
var G__17336 = (i - 1);
i = G__17336;
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
var G__17337 = (i - 1);
i = G__17337;
continue;
}
}
break;
}
})();var v__$1 = cljs.core.assoc.call(null,v,j,v.call(null,l),l,vj);var k = (j + 1);var l__$1 = (len - 1);while(true){
if((k < l__$1))
{{
var G__17338 = cljs.core.assoc.call(null,v__$1,k,v__$1.call(null,l__$1),l__$1,v__$1.call(null,k));
var G__17339 = (k + 1);
var G__17340 = (l__$1 - 1);
v__$1 = G__17338;
k = G__17339;
l__$1 = G__17340;
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
foundation.app.data.combinatorics.multi_perm = (function multi_perm(l){var f = cljs.core.frequencies.call(null,l);var v = cljs.core.vec.call(null,cljs.core.keys.call(null,f));var indices = cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__15876__auto__ = ((function (f,v){
return (function iter__17345(s__17346){return (new cljs.core.LazySeq(null,((function (f,v){
return (function (){var s__17346__$1 = s__17346;while(true){
var temp__4098__auto__ = cljs.core.seq.call(null,s__17346__$1);if(temp__4098__auto__)
{var s__17346__$2 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17346__$2))
{var c__15874__auto__ = cljs.core.chunk_first.call(null,s__17346__$2);var size__15875__auto__ = cljs.core.count.call(null,c__15874__auto__);var b__17348 = cljs.core.chunk_buffer.call(null,size__15875__auto__);if((function (){var i__17347 = 0;while(true){
if((i__17347 < size__15875__auto__))
{var i = cljs.core._nth.call(null,c__15874__auto__,i__17347);cljs.core.chunk_append.call(null,b__17348,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));
{
var G__17349 = (i__17347 + 1);
i__17347 = G__17349;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17348),iter__17345.call(null,cljs.core.chunk_rest.call(null,s__17346__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17348),null);
}
} else
{var i = cljs.core.first.call(null,s__17346__$2);return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),iter__17345.call(null,cljs.core.rest.call(null,s__17346__$2)));
}
} else
{return null;
}
break;
}
});})(f,v))
,null,null));
});})(f,v))
;return iter__15876__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,v)));
})());return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.map,v),foundation.app.data.combinatorics.lex_permutations.call(null,indices));
});
/**
* All the distinct permutations of items, lexicographic by index.
*/
foundation.app.data.combinatorics.permutations = (function permutations(items){if(foundation.app.data.combinatorics.sorted_numbers_QMARK_.call(null,items))
{return foundation.app.data.combinatorics.lex_permutations.call(null,items);
} else
{if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core.distinct_QMARK_,items)))
{var v = cljs.core.vec.call(null,items);return cljs.core.map.call(null,(function (p1__17350_SHARP_){return cljs.core.map.call(null,v,p1__17350_SHARP_);
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
{return cljs.core.vec.call(null,(function (){var iter__15876__auto__ = (function iter__17355(s__17356){return (new cljs.core.LazySeq(null,(function (){var s__17356__$1 = s__17356;while(true){
var temp__4098__auto__ = cljs.core.seq.call(null,s__17356__$1);if(temp__4098__auto__)
{var s__17356__$2 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17356__$2))
{var c__15874__auto__ = cljs.core.chunk_first.call(null,s__17356__$2);var size__15875__auto__ = cljs.core.count.call(null,c__15874__auto__);var b__17358 = cljs.core.chunk_buffer.call(null,size__15875__auto__);if((function (){var i__17357 = 0;while(true){
if((i__17357 < size__15875__auto__))
{var i = cljs.core._nth.call(null,c__15874__auto__,i__17357);cljs.core.chunk_append.call(null,b__17358,(function (){var x__15490__auto__ = 0;var y__15491__auto__ = (i - ((n - s) - -1));return ((x__15490__auto__ > y__15491__auto__) ? x__15490__auto__ : y__15491__auto__);
})());
{
var G__17359 = (i__17357 + 1);
i__17357 = G__17359;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17358),iter__17355.call(null,cljs.core.chunk_rest.call(null,s__17356__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17358),null);
}
} else
{var i = cljs.core.first.call(null,s__17356__$2);return cljs.core.cons.call(null,(function (){var x__15490__auto__ = 0;var y__15491__auto__ = (i - ((n - s) - -1));return ((x__15490__auto__ > y__15491__auto__) ? x__15490__auto__ : y__15491__auto__);
})(),iter__17355.call(null,cljs.core.rest.call(null,s__17356__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__15876__auto__.call(null,cljs.core.range.call(null,1,(n + 1)));
})());
} else
{return cljs.core.vec.call(null,cljs.core.repeat.call(null,n,0));
}
});
foundation.app.data.combinatorics.growth_strings_H = (function() {
var growth_strings_H = null;
var growth_strings_H__3 = (function (n,r,s){return growth_strings_H.call(null,n,foundation.app.data.combinatorics.init.call(null,n,s),cljs.core.vec.call(null,cljs.core.repeat.call(null,n,1)),r,s);
});
var growth_strings_H__5 = (function (n,a,b,r,s){return cljs.core.cons.call(null,a,(new cljs.core.LazySeq(null,(function (){if((function (){var and__15171__auto__ = (cljs.core.peek.call(null,b) > cljs.core.peek.call(null,a));if(and__15171__auto__)
{if(cljs.core.truth_(r))
{return (cljs.core.peek.call(null,a) < (r - 1));
} else
{return true;
}
} else
{return and__15171__auto__;
}
})())
{return growth_strings_H.call(null,n,foundation.app.data.combinatorics.update.call(null,a,(n - 1),cljs.core.inc),b,r,s);
} else
{var j = (function (){var j = (n - 2);while(true){
if((function (){var and__15171__auto__ = (a.call(null,j) < b.call(null,j));if(and__15171__auto__)
{var and__15171__auto____$1 = (cljs.core.truth_(r)?(a.call(null,j) < (r - 1)):true);if(and__15171__auto____$1)
{if(cljs.core.truth_(s))
{return (((s - b.call(null,j)) - ((((a.call(null,j) + 1) === b.call(null,j)))?1:0)) <= (n - j));
} else
{return true;
}
} else
{return and__15171__auto____$1;
}
} else
{return and__15171__auto__;
}
})())
{return j;
} else
{{
var G__17362 = (j - 1);
j = G__17362;
continue;
}
}
break;
}
})();if((j === 0))
{return cljs.core.List.EMPTY;
} else
{var a__$1 = foundation.app.data.combinatorics.update.call(null,a,j,cljs.core.inc);var x = (cljs.core.truth_(s)?(s - (b.call(null,j) + ((cljs.core._EQ_.call(null,a__$1.call(null,j),b.call(null,j)))?1:0))):null);var vec__17361 = (function (){var a__$2 = a__$1;var b__$1 = b;var i = (j + 1);var current_max = (b__$1.call(null,j) + (((b__$1.call(null,j) === a__$2.call(null,j)))?1:0));while(true){
if((i === n))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$2,b__$1], null);
} else
{if(cljs.core.truth_((function (){var and__15171__auto__ = s;if(cljs.core.truth_(and__15171__auto__))
{return (i > ((n - x) - 1));
} else
{return and__15171__auto__;
}
})()))
{var new_a_i = ((i - n) + s);{
var G__17363 = cljs.core.assoc.call(null,a__$2,i,new_a_i);
var G__17364 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__17365 = (i + 1);
var G__17366 = (function (){var x__15490__auto__ = current_max;var y__15491__auto__ = (new_a_i + 1);return ((x__15490__auto__ > y__15491__auto__) ? x__15490__auto__ : y__15491__auto__);
})();
a__$2 = G__17363;
b__$1 = G__17364;
i = G__17365;
current_max = G__17366;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__17367 = cljs.core.assoc.call(null,a__$2,i,0);
var G__17368 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__17369 = (i + 1);
var G__17370 = current_max;
a__$2 = G__17367;
b__$1 = G__17368;
i = G__17369;
current_max = G__17370;
continue;
}
} else
{return null;
}
}
}
break;
}
})();var a__$2 = cljs.core.nth.call(null,vec__17361,0,null);var b__$1 = cljs.core.nth.call(null,vec__17361,1,null);return growth_strings_H.call(null,n,a__$2,b__$1,r,s);
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
var lex_partitions_H__delegate = function (N,p__17371){var map__17377 = p__17371;var map__17377__$1 = ((cljs.core.seq_QMARK_.call(null,map__17377))?cljs.core.apply.call(null,cljs.core.hash_map,map__17377):map__17377);var from = cljs.core.get.call(null,map__17377__$1,new cljs.core.Keyword(null,"min","min",1014012356));var to = cljs.core.get.call(null,map__17377__$1,new cljs.core.Keyword(null,"max","max",1014012118));if(cljs.core._EQ_.call(null,N,0))
{if((((function (){var or__15183__auto__ = from;if(cljs.core.truth_(or__15183__auto__))
{return or__15183__auto__;
} else
{return 0;
}
})() <= 0)) && ((0 <= (function (){var or__15183__auto__ = to;if(cljs.core.truth_(or__15183__auto__))
{return or__15183__auto__;
} else
{return 0;
}
})())))
{return cljs.core.list(cljs.core.List.EMPTY);
} else
{return cljs.core.List.EMPTY;
}
} else
{var from__$1 = (cljs.core.truth_((function (){var and__15171__auto__ = from;if(cljs.core.truth_(and__15171__auto__))
{return (from <= 1);
} else
{return and__15171__auto__;
}
})())?null:from);var to__$1 = (cljs.core.truth_((function (){var and__15171__auto__ = to;if(cljs.core.truth_(and__15171__auto__))
{return (to >= N);
} else
{return and__15171__auto__;
}
})())?null:to);if(!(((1 <= (function (){var or__15183__auto__ = from__$1;if(cljs.core.truth_(or__15183__auto__))
{return or__15183__auto__;
} else
{return 1;
}
})())) && ((((function (){var or__15183__auto__ = from__$1;if(cljs.core.truth_(or__15183__auto__))
{return or__15183__auto__;
} else
{return 1;
}
})() <= (function (){var or__15183__auto__ = to__$1;if(cljs.core.truth_(or__15183__auto__))
{return or__15183__auto__;
} else
{return N;
}
})())) && (((function (){var or__15183__auto__ = to__$1;if(cljs.core.truth_(or__15183__auto__))
{return or__15183__auto__;
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
{var growth_strings = foundation.app.data.combinatorics.growth_strings_H.call(null,N,to__$1,from__$1);var iter__15876__auto__ = (function iter__17378(s__17379){return (new cljs.core.LazySeq(null,(function (){var s__17379__$1 = s__17379;while(true){
var temp__4098__auto__ = cljs.core.seq.call(null,s__17379__$1);if(temp__4098__auto__)
{var s__17379__$2 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17379__$2))
{var c__15874__auto__ = cljs.core.chunk_first.call(null,s__17379__$2);var size__15875__auto__ = cljs.core.count.call(null,c__15874__auto__);var b__17381 = cljs.core.chunk_buffer.call(null,size__15875__auto__);if((function (){var i__17380 = 0;while(true){
if((i__17380 < size__15875__auto__))
{var growth_string = cljs.core._nth.call(null,c__15874__auto__,i__17380);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));cljs.core.chunk_append.call(null,b__17381,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))));
{
var G__17382 = (i__17380 + 1);
i__17380 = G__17382;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17381),iter__17378.call(null,cljs.core.chunk_rest.call(null,s__17379__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17381),null);
}
} else
{var growth_string = cljs.core.first.call(null,s__17379__$2);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));return cljs.core.cons.call(null,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))),iter__17378.call(null,cljs.core.rest.call(null,s__17379__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__15876__auto__.call(null,growth_strings);
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
var p__17371 = null;if (arguments.length > 1) {
  p__17371 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return lex_partitions_H__delegate.call(this,N,p__17371);};
lex_partitions_H.cljs$lang$maxFixedArity = 1;
lex_partitions_H.cljs$lang$applyTo = (function (arglist__17383){
var N = cljs.core.first(arglist__17383);
var p__17371 = cljs.core.rest(arglist__17383);
return lex_partitions_H__delegate(N,p__17371);
});
lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic = lex_partitions_H__delegate;
return lex_partitions_H;
})()
;
/**
* @param {...*} var_args
*/
foundation.app.data.combinatorics.partitions_H = (function() { 
var partitions_H__delegate = function (items,args){var items__$1 = cljs.core.vec.call(null,items);var N = cljs.core.count.call(null,items__$1);var lex = cljs.core.apply.call(null,foundation.app.data.combinatorics.lex_partitions_H,N,args);var iter__15876__auto__ = (function iter__17404(s__17405){return (new cljs.core.LazySeq(null,(function (){var s__17405__$1 = s__17405;while(true){
var temp__4098__auto__ = cljs.core.seq.call(null,s__17405__$1);if(temp__4098__auto__)
{var s__17405__$2 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17405__$2))
{var c__15874__auto__ = cljs.core.chunk_first.call(null,s__17405__$2);var size__15875__auto__ = cljs.core.count.call(null,c__15874__auto__);var b__17407 = cljs.core.chunk_buffer.call(null,size__15875__auto__);if((function (){var i__17406 = 0;while(true){
if((i__17406 < size__15875__auto__))
{var parts = cljs.core._nth.call(null,c__15874__auto__,i__17406);cljs.core.chunk_append.call(null,b__17407,(function (){var iter__15876__auto__ = ((function (i__17406,parts,c__15874__auto__,size__15875__auto__,b__17407,s__17405__$2,temp__4098__auto__){
return (function iter__17416(s__17417){return (new cljs.core.LazySeq(null,((function (i__17406,parts,c__15874__auto__,size__15875__auto__,b__17407,s__17405__$2,temp__4098__auto__){
return (function (){var s__17417__$1 = s__17417;while(true){
var temp__4098__auto____$1 = cljs.core.seq.call(null,s__17417__$1);if(temp__4098__auto____$1)
{var s__17417__$2 = temp__4098__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__17417__$2))
{var c__15874__auto____$1 = cljs.core.chunk_first.call(null,s__17417__$2);var size__15875__auto____$1 = cljs.core.count.call(null,c__15874__auto____$1);var b__17419 = cljs.core.chunk_buffer.call(null,size__15875__auto____$1);if((function (){var i__17418 = 0;while(true){
if((i__17418 < size__15875__auto____$1))
{var part = cljs.core._nth.call(null,c__15874__auto____$1,i__17418);cljs.core.chunk_append.call(null,b__17419,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__17418,i__17406,part,c__15874__auto____$1,size__15875__auto____$1,b__17419,s__17417__$2,temp__4098__auto____$1,parts,c__15874__auto__,size__15875__auto__,b__17407,s__17405__$2,temp__4098__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__17418,i__17406,part,c__15874__auto____$1,size__15875__auto____$1,b__17419,s__17417__$2,temp__4098__auto____$1,parts,c__15874__auto__,size__15875__auto__,b__17407,s__17405__$2,temp__4098__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__17424 = (i__17418 + 1);
i__17418 = G__17424;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17419),iter__17416.call(null,cljs.core.chunk_rest.call(null,s__17417__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17419),null);
}
} else
{var part = cljs.core.first.call(null,s__17417__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__17406,part,s__17417__$2,temp__4098__auto____$1,parts,c__15874__auto__,size__15875__auto__,b__17407,s__17405__$2,temp__4098__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__17406,part,s__17417__$2,temp__4098__auto____$1,parts,c__15874__auto__,size__15875__auto__,b__17407,s__17405__$2,temp__4098__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__17416.call(null,cljs.core.rest.call(null,s__17417__$2)));
}
} else
{return null;
}
break;
}
});})(i__17406,parts,c__15874__auto__,size__15875__auto__,b__17407,s__17405__$2,temp__4098__auto__))
,null,null));
});})(i__17406,parts,c__15874__auto__,size__15875__auto__,b__17407,s__17405__$2,temp__4098__auto__))
;return iter__15876__auto__.call(null,parts);
})());
{
var G__17425 = (i__17406 + 1);
i__17406 = G__17425;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17407),iter__17404.call(null,cljs.core.chunk_rest.call(null,s__17405__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17407),null);
}
} else
{var parts = cljs.core.first.call(null,s__17405__$2);return cljs.core.cons.call(null,(function (){var iter__15876__auto__ = ((function (parts,s__17405__$2,temp__4098__auto__){
return (function iter__17420(s__17421){return (new cljs.core.LazySeq(null,((function (parts,s__17405__$2,temp__4098__auto__){
return (function (){var s__17421__$1 = s__17421;while(true){
var temp__4098__auto____$1 = cljs.core.seq.call(null,s__17421__$1);if(temp__4098__auto____$1)
{var s__17421__$2 = temp__4098__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__17421__$2))
{var c__15874__auto__ = cljs.core.chunk_first.call(null,s__17421__$2);var size__15875__auto__ = cljs.core.count.call(null,c__15874__auto__);var b__17423 = cljs.core.chunk_buffer.call(null,size__15875__auto__);if((function (){var i__17422 = 0;while(true){
if((i__17422 < size__15875__auto__))
{var part = cljs.core._nth.call(null,c__15874__auto__,i__17422);cljs.core.chunk_append.call(null,b__17423,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__17422,part,c__15874__auto__,size__15875__auto__,b__17423,s__17421__$2,temp__4098__auto____$1,parts,s__17405__$2,temp__4098__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__17422,part,c__15874__auto__,size__15875__auto__,b__17423,s__17421__$2,temp__4098__auto____$1,parts,s__17405__$2,temp__4098__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__17426 = (i__17422 + 1);
i__17422 = G__17426;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17423),iter__17420.call(null,cljs.core.chunk_rest.call(null,s__17421__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17423),null);
}
} else
{var part = cljs.core.first.call(null,s__17421__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (part,s__17421__$2,temp__4098__auto____$1,parts,s__17405__$2,temp__4098__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(part,s__17421__$2,temp__4098__auto____$1,parts,s__17405__$2,temp__4098__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__17420.call(null,cljs.core.rest.call(null,s__17421__$2)));
}
} else
{return null;
}
break;
}
});})(parts,s__17405__$2,temp__4098__auto__))
,null,null));
});})(parts,s__17405__$2,temp__4098__auto__))
;return iter__15876__auto__.call(null,parts);
})(),iter__17404.call(null,cljs.core.rest.call(null,s__17405__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__15876__auto__.call(null,lex);
};
var partitions_H = function (items,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions_H__delegate.call(this,items,args);};
partitions_H.cljs$lang$maxFixedArity = 1;
partitions_H.cljs$lang$applyTo = (function (arglist__17427){
var items = cljs.core.first(arglist__17427);
var args = cljs.core.rest(arglist__17427);
return partitions_H__delegate(items,args);
});
partitions_H.cljs$core$IFn$_invoke$arity$variadic = partitions_H__delegate;
return partitions_H;
})()
;
foundation.app.data.combinatorics.multiset_partitions_M = (function() {
var multiset_partitions_M = null;
var multiset_partitions_M__3 = (function (multiset,r,s){var n = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,multiset));var m = cljs.core.count.call(null,multiset);var f = cljs.core.PersistentVector.EMPTY;var c = cljs.core.PersistentVector.EMPTY;var u = cljs.core.PersistentVector.EMPTY;var v = cljs.core.PersistentVector.EMPTY;var vec__17450 = (function (){var j = 0;var c__$1 = c;var u__$1 = u;var v__$1 = v;while(true){
if(cljs.core._EQ_.call(null,j,m))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,u__$1,v__$1], null);
} else
{{
var G__17472 = (j + 1);
var G__17473 = cljs.core.assoc.call(null,c__$1,j,(j + 1));
var G__17474 = cljs.core.assoc.call(null,u__$1,j,multiset.call(null,(j + 1)));
var G__17475 = cljs.core.assoc.call(null,v__$1,j,multiset.call(null,(j + 1)));
j = G__17472;
c__$1 = G__17473;
u__$1 = G__17474;
v__$1 = G__17475;
continue;
}
}
break;
}
})();var c__$1 = cljs.core.nth.call(null,vec__17450,0,null);var u__$1 = cljs.core.nth.call(null,vec__17450,1,null);var v__$1 = cljs.core.nth.call(null,vec__17450,2,null);var a = 0;var b = m;var l = 0;var f__$1 = cljs.core.assoc.call(null,f,0,0,1,m);var stack = cljs.core.List.EMPTY;return multiset_partitions_M.call(null,n,m,f__$1,c__$1,u__$1,v__$1,a,b,l,r,s);
});
var multiset_partitions_M__11 = (function (n,m,f,c,u,v,a,b,l,r,s){while(true){
var vec__17451 = (function (){var j = a;var k = b;var x = false;var u__$1 = u;var v__$1 = v;var c__$1 = c;while(true){
if((j >= b))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [u__$1,v__$1,c__$1,j,k], null);
} else
{var u__$2 = cljs.core.assoc.call(null,u__$1,k,(u__$1.call(null,j) - v__$1.call(null,j)));if(cljs.core._EQ_.call(null,u__$2.call(null,k),0))
{{
var G__17476 = (j + 1);
var G__17477 = k;
var G__17478 = true;
var G__17479 = u__$2;
var G__17480 = v__$1;
var G__17481 = c__$1;
j = G__17476;
k = G__17477;
x = G__17478;
u__$1 = G__17479;
v__$1 = G__17480;
c__$1 = G__17481;
continue;
}
} else
{if(!(x))
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,(function (){var x__15497__auto__ = v__$1.call(null,j);var y__15498__auto__ = u__$2.call(null,k);return ((x__15497__auto__ < y__15498__auto__) ? x__15497__auto__ : y__15498__auto__);
})());var x__$1 = (u__$2.call(null,k) < v__$2.call(null,j));var k__$1 = (k + 1);var j__$1 = (j + 1);{
var G__17482 = j__$1;
var G__17483 = k__$1;
var G__17484 = x__$1;
var G__17485 = u__$2;
var G__17486 = v__$2;
var G__17487 = c__$2;
j = G__17482;
k = G__17483;
x = G__17484;
u__$1 = G__17485;
v__$1 = G__17486;
c__$1 = G__17487;
continue;
}
} else
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,u__$2.call(null,k));var k__$1 = (k + 1);var j__$1 = (j + 1);{
var G__17488 = j__$1;
var G__17489 = k__$1;
var G__17490 = x;
var G__17491 = u__$2;
var G__17492 = v__$2;
var G__17493 = c__$2;
j = G__17488;
k = G__17489;
x = G__17490;
u__$1 = G__17491;
v__$1 = G__17492;
c__$1 = G__17493;
continue;
}
}
}
}
break;
}
})();var u__$1 = cljs.core.nth.call(null,vec__17451,0,null);var v__$1 = cljs.core.nth.call(null,vec__17451,1,null);var c__$1 = cljs.core.nth.call(null,vec__17451,2,null);var j = cljs.core.nth.call(null,vec__17451,3,null);var k = cljs.core.nth.call(null,vec__17451,4,null);if(cljs.core.truth_((function (){var and__15171__auto__ = r;if(cljs.core.truth_(and__15171__auto__))
{return ((k > b)) && (cljs.core._EQ_.call(null,l,(r - 1)));
} else
{return and__15171__auto__;
}
})()))
{return foundation.app.data.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
} else
{if(cljs.core.truth_((function (){var and__15171__auto__ = s;if(cljs.core.truth_(and__15171__auto__))
{return ((k <= b)) && (((l + 1) < s));
} else
{return and__15171__auto__;
}
})()))
{return foundation.app.data.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
} else
{if((k > b))
{var a__$1 = b;var b__$1 = k;var l__$1 = (l + 1);var f__$1 = cljs.core.assoc.call(null,f,(l__$1 + 1),b__$1);{
var G__17494 = n;
var G__17495 = m;
var G__17496 = f__$1;
var G__17497 = c__$1;
var G__17498 = u__$1;
var G__17499 = v__$1;
var G__17500 = a__$1;
var G__17501 = b__$1;
var G__17502 = l__$1;
var G__17503 = r;
var G__17504 = s;
n = G__17494;
m = G__17495;
f = G__17496;
c = G__17497;
u = G__17498;
v = G__17499;
a = G__17500;
b = G__17501;
l = G__17502;
r = G__17503;
s = G__17504;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var part = (function (){var iter__15876__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s){
return (function iter__17452(s__17453){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s){
return (function (){var s__17453__$1 = s__17453;while(true){
var temp__4098__auto__ = cljs.core.seq.call(null,s__17453__$1);if(temp__4098__auto__)
{var s__17453__$2 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17453__$2))
{var c__15874__auto__ = cljs.core.chunk_first.call(null,s__17453__$2);var size__15875__auto__ = cljs.core.count.call(null,c__15874__auto__);var b__17455 = cljs.core.chunk_buffer.call(null,size__15875__auto__);if((function (){var i__17454 = 0;while(true){
if((i__17454 < size__15875__auto__))
{var y = cljs.core._nth.call(null,c__15874__auto__,i__17454);cljs.core.chunk_append.call(null,b__17455,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + 1)) - 1);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__15876__auto__ = ((function (i__17454,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__15874__auto__,size__15875__auto__,b__17455,s__17453__$2,temp__4098__auto__){
return (function iter__17464(s__17465){return (new cljs.core.LazySeq(null,((function (i__17454,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__15874__auto__,size__15875__auto__,b__17455,s__17453__$2,temp__4098__auto__){
return (function (){var s__17465__$1 = s__17465;while(true){
var temp__4098__auto____$1 = cljs.core.seq.call(null,s__17465__$1);if(temp__4098__auto____$1)
{var s__17465__$2 = temp__4098__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__17465__$2))
{var c__15874__auto____$1 = cljs.core.chunk_first.call(null,s__17465__$2);var size__15875__auto____$1 = cljs.core.count.call(null,c__15874__auto____$1);var b__17467 = cljs.core.chunk_buffer.call(null,size__15875__auto____$1);if((function (){var i__17466 = 0;while(true){
if((i__17466 < size__15875__auto____$1))
{var z = cljs.core._nth.call(null,c__15874__auto____$1,i__17466);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{cljs.core.chunk_append.call(null,b__17467,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));
{
var G__17505 = (i__17466 + 1);
i__17466 = G__17505;
continue;
}
} else
{{
var G__17506 = (i__17466 + 1);
i__17466 = G__17506;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17467),iter__17464.call(null,cljs.core.chunk_rest.call(null,s__17465__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17467),null);
}
} else
{var z = cljs.core.first.call(null,s__17465__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),iter__17464.call(null,cljs.core.rest.call(null,s__17465__$2)));
} else
{{
var G__17507 = cljs.core.rest.call(null,s__17465__$2);
s__17465__$1 = G__17507;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__17454,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__15874__auto__,size__15875__auto__,b__17455,s__17453__$2,temp__4098__auto__))
,null,null));
});})(i__17454,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__15874__auto__,size__15875__auto__,b__17455,s__17453__$2,temp__4098__auto__))
;return iter__15876__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + 1)));
})());
})());
{
var G__17508 = (i__17454 + 1);
i__17454 = G__17508;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17455),iter__17452.call(null,cljs.core.chunk_rest.call(null,s__17453__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17455),null);
}
} else
{var y = cljs.core.first.call(null,s__17453__$2);return cljs.core.cons.call(null,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + 1)) - 1);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__15876__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__17453__$2,temp__4098__auto__){
return (function iter__17468(s__17469){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__17453__$2,temp__4098__auto__){
return (function (){var s__17469__$1 = s__17469;while(true){
var temp__4098__auto____$1 = cljs.core.seq.call(null,s__17469__$1);if(temp__4098__auto____$1)
{var s__17469__$2 = temp__4098__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__17469__$2))
{var c__15874__auto__ = cljs.core.chunk_first.call(null,s__17469__$2);var size__15875__auto__ = cljs.core.count.call(null,c__15874__auto__);var b__17471 = cljs.core.chunk_buffer.call(null,size__15875__auto__);if((function (){var i__17470 = 0;while(true){
if((i__17470 < size__15875__auto__))
{var z = cljs.core._nth.call(null,c__15874__auto__,i__17470);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{cljs.core.chunk_append.call(null,b__17471,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));
{
var G__17509 = (i__17470 + 1);
i__17470 = G__17509;
continue;
}
} else
{{
var G__17510 = (i__17470 + 1);
i__17470 = G__17510;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17471),iter__17468.call(null,cljs.core.chunk_rest.call(null,s__17469__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17471),null);
}
} else
{var z = cljs.core.first.call(null,s__17469__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),iter__17468.call(null,cljs.core.rest.call(null,s__17469__$2)));
} else
{{
var G__17511 = cljs.core.rest.call(null,s__17469__$2);
s__17469__$1 = G__17511;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__17453__$2,temp__4098__auto__))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__17453__$2,temp__4098__auto__))
;return iter__15876__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + 1)));
})());
})(),iter__17452.call(null,cljs.core.rest.call(null,s__17453__$2)));
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s))
;return iter__15876__auto__.call(null,cljs.core.range.call(null,(l + 1)));
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
var G__17520 = (j - 1);
j = G__17520;
continue;
}
}
break;
}
})();if(cljs.core.truth_((function (){var and__15171__auto__ = r;if(cljs.core.truth_(and__15171__auto__))
{return (cljs.core._EQ_.call(null,j,a)) && ((((v.call(null,j) - 1) * (r - l)) < u.call(null,j)));
} else
{return and__15171__auto__;
}
})()))
{return foundation.app.data.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s);
} else
{if((cljs.core._EQ_.call(null,j,a)) && (cljs.core._EQ_.call(null,v.call(null,j),1)))
{return foundation.app.data.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var v__$1 = foundation.app.data.combinatorics.update.call(null,v,j,cljs.core.dec);var diff_uv = (cljs.core.truth_(s)?cljs.core.apply.call(null,cljs.core._PLUS_,(function (){var iter__15876__auto__ = ((function (v__$1){
return (function iter__17516(s__17517){return (new cljs.core.LazySeq(null,((function (v__$1){
return (function (){var s__17517__$1 = s__17517;while(true){
var temp__4098__auto__ = cljs.core.seq.call(null,s__17517__$1);if(temp__4098__auto__)
{var s__17517__$2 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17517__$2))
{var c__15874__auto__ = cljs.core.chunk_first.call(null,s__17517__$2);var size__15875__auto__ = cljs.core.count.call(null,c__15874__auto__);var b__17519 = cljs.core.chunk_buffer.call(null,size__15875__auto__);if((function (){var i__17518 = 0;while(true){
if((i__17518 < size__15875__auto__))
{var i = cljs.core._nth.call(null,c__15874__auto__,i__17518);cljs.core.chunk_append.call(null,b__17519,(u.call(null,i) - v__$1.call(null,i)));
{
var G__17521 = (i__17518 + 1);
i__17518 = G__17521;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17519),iter__17516.call(null,cljs.core.chunk_rest.call(null,s__17517__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17519),null);
}
} else
{var i = cljs.core.first.call(null,s__17517__$2);return cljs.core.cons.call(null,(u.call(null,i) - v__$1.call(null,i)),iter__17516.call(null,cljs.core.rest.call(null,s__17517__$2)));
}
} else
{return null;
}
break;
}
});})(v__$1))
,null,null));
});})(v__$1))
;return iter__15876__auto__.call(null,cljs.core.range.call(null,a,(j + 1)));
})()):null);var v__$2 = (function (){var ks = cljs.core.range.call(null,(j + 1),b);var v__$2 = v__$1;while(true){
if(cljs.core.empty_QMARK_.call(null,ks))
{return v__$2;
} else
{var k = cljs.core.first.call(null,ks);{
var G__17522 = cljs.core.rest.call(null,ks);
var G__17523 = cljs.core.assoc.call(null,v__$2,k,u.call(null,k));
ks = G__17522;
v__$2 = G__17523;
continue;
}
}
break;
}
})();var min_partitions_after_this = (cljs.core.truth_(s)?(s - (l + 1)):0);var amount_to_dec = (cljs.core.truth_(s)?(function (){var x__15490__auto__ = 0;var y__15491__auto__ = (min_partitions_after_this - diff_uv);return ((x__15490__auto__ > y__15491__auto__) ? x__15490__auto__ : y__15491__auto__);
})():0);var v__$3 = ((cljs.core._EQ_.call(null,amount_to_dec,0))?v__$2:(function (){var k_1 = (b - 1);var v__$3 = v__$2;var amount = amount_to_dec;while(true){
var vk = v__$3.call(null,k_1);if((amount > vk))
{{
var G__17524 = (k_1 - 1);
var G__17525 = cljs.core.assoc.call(null,v__$3,k_1,0);
var G__17526 = (amount - vk);
k_1 = G__17524;
v__$3 = G__17525;
amount = G__17526;
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
var partitions_M__delegate = function (items,p__17527){var map__17585 = p__17527;var map__17585__$1 = ((cljs.core.seq_QMARK_.call(null,map__17585))?cljs.core.apply.call(null,cljs.core.hash_map,map__17585):map__17585);var from = cljs.core.get.call(null,map__17585__$1,new cljs.core.Keyword(null,"min","min",1014012356));var to = cljs.core.get.call(null,map__17585__$1,new cljs.core.Keyword(null,"max","max",1014012118));if(cljs.core._EQ_.call(null,cljs.core.count.call(null,items),0))
{if((((function (){var or__15183__auto__ = from;if(cljs.core.truth_(or__15183__auto__))
{return or__15183__auto__;
} else
{return 0;
}
})() <= 0)) && ((0 <= (function (){var or__15183__auto__ = to;if(cljs.core.truth_(or__15183__auto__))
{return or__15183__auto__;
} else
{return 0;
}
})())))
{return cljs.core.list(cljs.core.List.EMPTY);
} else
{return cljs.core.List.EMPTY;
}
} else
{var items__$1 = cljs.core.vec.call(null,items);var ditems = cljs.core.vec.call(null,cljs.core.distinct.call(null,items__$1));var freqs = cljs.core.frequencies.call(null,items__$1);var N = cljs.core.count.call(null,items__$1);var M = cljs.core.count.call(null,ditems);var from__$1 = (cljs.core.truth_((function (){var and__15171__auto__ = from;if(cljs.core.truth_(and__15171__auto__))
{return (from <= 1);
} else
{return and__15171__auto__;
}
})())?null:from);var to__$1 = (cljs.core.truth_((function (){var and__15171__auto__ = to;if(cljs.core.truth_(and__15171__auto__))
{return (to >= N);
} else
{return and__15171__auto__;
}
})())?null:to);if(!(((1 <= (function (){var or__15183__auto__ = from__$1;if(cljs.core.truth_(or__15183__auto__))
{return or__15183__auto__;
} else
{return 1;
}
})())) && ((((function (){var or__15183__auto__ = from__$1;if(cljs.core.truth_(or__15183__auto__))
{return or__15183__auto__;
} else
{return 1;
}
})() <= (function (){var or__15183__auto__ = to__$1;if(cljs.core.truth_(or__15183__auto__))
{return or__15183__auto__;
} else
{return N;
}
})())) && (((function (){var or__15183__auto__ = to__$1;if(cljs.core.truth_(or__15183__auto__))
{return or__15183__auto__;
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
{var start_multiset = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__15876__auto__ = (function iter__17586(s__17587){return (new cljs.core.LazySeq(null,(function (){var s__17587__$1 = s__17587;while(true){
var temp__4098__auto__ = cljs.core.seq.call(null,s__17587__$1);if(temp__4098__auto__)
{var s__17587__$2 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17587__$2))
{var c__15874__auto__ = cljs.core.chunk_first.call(null,s__17587__$2);var size__15875__auto__ = cljs.core.count.call(null,c__15874__auto__);var b__17589 = cljs.core.chunk_buffer.call(null,size__15875__auto__);if((function (){var i__17588 = 0;while(true){
if((i__17588 < size__15875__auto__))
{var i = cljs.core._nth.call(null,c__15874__auto__,i__17588);var j = (i + 1);cljs.core.chunk_append.call(null,b__17589,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null));
{
var G__17642 = (i__17588 + 1);
i__17588 = G__17642;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17589),iter__17586.call(null,cljs.core.chunk_rest.call(null,s__17587__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17589),null);
}
} else
{var i = cljs.core.first.call(null,s__17587__$2);var j = (i + 1);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null),iter__17586.call(null,cljs.core.rest.call(null,s__17587__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__15876__auto__.call(null,cljs.core.range.call(null,M));
})());var parts = foundation.app.data.combinatorics.multiset_partitions_M.call(null,start_multiset,to__$1,from__$1);var iter__15876__auto__ = (function iter__17590(s__17591){return (new cljs.core.LazySeq(null,(function (){var s__17591__$1 = s__17591;while(true){
var temp__4098__auto__ = cljs.core.seq.call(null,s__17591__$1);if(temp__4098__auto__)
{var s__17591__$2 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17591__$2))
{var c__15874__auto__ = cljs.core.chunk_first.call(null,s__17591__$2);var size__15875__auto__ = cljs.core.count.call(null,c__15874__auto__);var b__17593 = cljs.core.chunk_buffer.call(null,size__15875__auto__);if((function (){var i__17592 = 0;while(true){
if((i__17592 < size__15875__auto__))
{var part = cljs.core._nth.call(null,c__15874__auto__,i__17592);cljs.core.chunk_append.call(null,b__17593,(function (){var iter__15876__auto__ = ((function (i__17592,part,c__15874__auto__,size__15875__auto__,b__17593,s__17591__$2,temp__4098__auto__){
return (function iter__17618(s__17619){return (new cljs.core.LazySeq(null,((function (i__17592,part,c__15874__auto__,size__15875__auto__,b__17593,s__17591__$2,temp__4098__auto__){
return (function (){var s__17619__$1 = s__17619;while(true){
var temp__4098__auto____$1 = cljs.core.seq.call(null,s__17619__$1);if(temp__4098__auto____$1)
{var s__17619__$2 = temp__4098__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__17619__$2))
{var c__15874__auto____$1 = cljs.core.chunk_first.call(null,s__17619__$2);var size__15875__auto____$1 = cljs.core.count.call(null,c__15874__auto____$1);var b__17621 = cljs.core.chunk_buffer.call(null,size__15875__auto____$1);if((function (){var i__17620 = 0;while(true){
if((i__17620 < size__15875__auto____$1))
{var multiset = cljs.core._nth.call(null,c__15874__auto____$1,i__17620);cljs.core.chunk_append.call(null,b__17621,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__17620,i__17592,multiset,c__15874__auto____$1,size__15875__auto____$1,b__17621,s__17619__$2,temp__4098__auto____$1,part,c__15874__auto__,size__15875__auto__,b__17593,s__17591__$2,temp__4098__auto__){
return (function (p__17626){var vec__17627 = p__17626;var index = cljs.core.nth.call(null,vec__17627,0,null);var numtimes = cljs.core.nth.call(null,vec__17627,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__17620,i__17592,multiset,c__15874__auto____$1,size__15875__auto____$1,b__17621,s__17619__$2,temp__4098__auto____$1,part,c__15874__auto__,size__15875__auto__,b__17593,s__17591__$2,temp__4098__auto__))
,multiset)));
{
var G__17643 = (i__17620 + 1);
i__17620 = G__17643;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17621),iter__17618.call(null,cljs.core.chunk_rest.call(null,s__17619__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17621),null);
}
} else
{var multiset = cljs.core.first.call(null,s__17619__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__17592,multiset,s__17619__$2,temp__4098__auto____$1,part,c__15874__auto__,size__15875__auto__,b__17593,s__17591__$2,temp__4098__auto__){
return (function (p__17628){var vec__17629 = p__17628;var index = cljs.core.nth.call(null,vec__17629,0,null);var numtimes = cljs.core.nth.call(null,vec__17629,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__17592,multiset,s__17619__$2,temp__4098__auto____$1,part,c__15874__auto__,size__15875__auto__,b__17593,s__17591__$2,temp__4098__auto__))
,multiset)),iter__17618.call(null,cljs.core.rest.call(null,s__17619__$2)));
}
} else
{return null;
}
break;
}
});})(i__17592,part,c__15874__auto__,size__15875__auto__,b__17593,s__17591__$2,temp__4098__auto__))
,null,null));
});})(i__17592,part,c__15874__auto__,size__15875__auto__,b__17593,s__17591__$2,temp__4098__auto__))
;return iter__15876__auto__.call(null,part);
})());
{
var G__17644 = (i__17592 + 1);
i__17592 = G__17644;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17593),iter__17590.call(null,cljs.core.chunk_rest.call(null,s__17591__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17593),null);
}
} else
{var part = cljs.core.first.call(null,s__17591__$2);return cljs.core.cons.call(null,(function (){var iter__15876__auto__ = ((function (part,s__17591__$2,temp__4098__auto__){
return (function iter__17630(s__17631){return (new cljs.core.LazySeq(null,((function (part,s__17591__$2,temp__4098__auto__){
return (function (){var s__17631__$1 = s__17631;while(true){
var temp__4098__auto____$1 = cljs.core.seq.call(null,s__17631__$1);if(temp__4098__auto____$1)
{var s__17631__$2 = temp__4098__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__17631__$2))
{var c__15874__auto__ = cljs.core.chunk_first.call(null,s__17631__$2);var size__15875__auto__ = cljs.core.count.call(null,c__15874__auto__);var b__17633 = cljs.core.chunk_buffer.call(null,size__15875__auto__);if((function (){var i__17632 = 0;while(true){
if((i__17632 < size__15875__auto__))
{var multiset = cljs.core._nth.call(null,c__15874__auto__,i__17632);cljs.core.chunk_append.call(null,b__17633,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__17632,multiset,c__15874__auto__,size__15875__auto__,b__17633,s__17631__$2,temp__4098__auto____$1,part,s__17591__$2,temp__4098__auto__){
return (function (p__17638){var vec__17639 = p__17638;var index = cljs.core.nth.call(null,vec__17639,0,null);var numtimes = cljs.core.nth.call(null,vec__17639,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__17632,multiset,c__15874__auto__,size__15875__auto__,b__17633,s__17631__$2,temp__4098__auto____$1,part,s__17591__$2,temp__4098__auto__))
,multiset)));
{
var G__17645 = (i__17632 + 1);
i__17632 = G__17645;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17633),iter__17630.call(null,cljs.core.chunk_rest.call(null,s__17631__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17633),null);
}
} else
{var multiset = cljs.core.first.call(null,s__17631__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (multiset,s__17631__$2,temp__4098__auto____$1,part,s__17591__$2,temp__4098__auto__){
return (function (p__17640){var vec__17641 = p__17640;var index = cljs.core.nth.call(null,vec__17641,0,null);var numtimes = cljs.core.nth.call(null,vec__17641,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(multiset,s__17631__$2,temp__4098__auto____$1,part,s__17591__$2,temp__4098__auto__))
,multiset)),iter__17630.call(null,cljs.core.rest.call(null,s__17631__$2)));
}
} else
{return null;
}
break;
}
});})(part,s__17591__$2,temp__4098__auto__))
,null,null));
});})(part,s__17591__$2,temp__4098__auto__))
;return iter__15876__auto__.call(null,part);
})(),iter__17590.call(null,cljs.core.rest.call(null,s__17591__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__15876__auto__.call(null,parts);
} else
{return null;
}
}
}
}
};
var partitions_M = function (items,var_args){
var p__17527 = null;if (arguments.length > 1) {
  p__17527 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions_M__delegate.call(this,items,p__17527);};
partitions_M.cljs$lang$maxFixedArity = 1;
partitions_M.cljs$lang$applyTo = (function (arglist__17646){
var items = cljs.core.first(arglist__17646);
var p__17527 = cljs.core.rest(arglist__17646);
return partitions_M__delegate(items,p__17527);
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
partitions.cljs$lang$applyTo = (function (arglist__17647){
var items = cljs.core.first(arglist__17647);
var args = cljs.core.rest(arglist__17647);
return partitions__delegate(items,args);
});
partitions.cljs$core$IFn$_invoke$arity$variadic = partitions__delegate;
return partitions;
})()
;

//# sourceMappingURL=combinatorics.js.map