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
var G__184026 = cljs.core.assoc.call(null,c__$2,(j__$1 - 1),(c__$2.call(null,j__$1) - 1));
var G__184027 = (j__$1 - 1);
c__$2 = G__184026;
j__$1 = G__184027;
continue;
}
}
break;
}
}
}
});
return (new cljs.core.LazySeq(null,(function (){var c = cljs.core.vec.call(null,cljs.core.cons.call(null,null,(function (){var iter__8921__auto__ = (function iter__184022(s__184023){return (new cljs.core.LazySeq(null,(function (){var s__184023__$1 = s__184023;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__184023__$1);if(temp__4092__auto__)
{var s__184023__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__184023__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__184023__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__184025 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__184024 = 0;while(true){
if((i__184024 < size__8920__auto__))
{var j = cljs.core._nth.call(null,c__8919__auto__,i__184024);cljs.core.chunk_append.call(null,b__184025,((j + cnt) + (- (n + 1))));
{
var G__184028 = (i__184024 + 1);
i__184024 = G__184028;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__184025),iter__184022.call(null,cljs.core.chunk_rest.call(null,s__184023__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__184025),null);
}
} else
{var j = cljs.core.first.call(null,s__184023__$2);return cljs.core.cons.call(null,((j + cnt) + (- (n + 1))),iter__184022.call(null,cljs.core.rest.call(null,s__184023__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,cljs.core.range.call(null,1,(n + 1)));
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
{return cljs.core.map.call(null,(function (p1__184029_SHARP_){return cljs.core.map.call(null,v_items,p1__184029_SHARP_);
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
var G__184030 = (i - 1);
var G__184031 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__184030;
v_seqs__$2 = G__184031;
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
cartesian_product.cljs$lang$applyTo = (function (arglist__184032){
var seqs = cljs.core.seq(arglist__184032);
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
var G__184033 = (i - 1);
i = G__184033;
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
var G__184034 = (i - 1);
i = G__184034;
continue;
}
}
break;
}
})();var v__$1 = cljs.core.assoc.call(null,v,j,v.call(null,l),l,vj);var k = (j + 1);var l__$1 = (len - 1);while(true){
if((k < l__$1))
{{
var G__184035 = cljs.core.assoc.call(null,v__$1,k,v__$1.call(null,l__$1),l__$1,v__$1.call(null,k));
var G__184036 = (k + 1);
var G__184037 = (l__$1 - 1);
v__$1 = G__184035;
k = G__184036;
l__$1 = G__184037;
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
foundation.app.data.combinatorics.multi_perm = (function multi_perm(l){var f = cljs.core.frequencies.call(null,l);var v = cljs.core.vec.call(null,cljs.core.keys.call(null,f));var indices = cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__8921__auto__ = ((function (f,v){
return (function iter__184042(s__184043){return (new cljs.core.LazySeq(null,((function (f,v){
return (function (){var s__184043__$1 = s__184043;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__184043__$1);if(temp__4092__auto__)
{var s__184043__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__184043__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__184043__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__184045 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__184044 = 0;while(true){
if((i__184044 < size__8920__auto__))
{var i = cljs.core._nth.call(null,c__8919__auto__,i__184044);cljs.core.chunk_append.call(null,b__184045,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));
{
var G__184046 = (i__184044 + 1);
i__184044 = G__184046;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__184045),iter__184042.call(null,cljs.core.chunk_rest.call(null,s__184043__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__184045),null);
}
} else
{var i = cljs.core.first.call(null,s__184043__$2);return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),iter__184042.call(null,cljs.core.rest.call(null,s__184043__$2)));
}
} else
{return null;
}
break;
}
});})(f,v))
,null,null));
});})(f,v))
;return iter__8921__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,v)));
})());return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.map,v),foundation.app.data.combinatorics.lex_permutations.call(null,indices));
});
/**
* All the distinct permutations of items, lexicographic by index.
*/
foundation.app.data.combinatorics.permutations = (function permutations(items){if(foundation.app.data.combinatorics.sorted_numbers_QMARK_.call(null,items))
{return foundation.app.data.combinatorics.lex_permutations.call(null,items);
} else
{if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core.distinct_QMARK_,items)))
{var v = cljs.core.vec.call(null,items);return cljs.core.map.call(null,(function (p1__184047_SHARP_){return cljs.core.map.call(null,v,p1__184047_SHARP_);
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
{return cljs.core.vec.call(null,(function (){var iter__8921__auto__ = (function iter__184052(s__184053){return (new cljs.core.LazySeq(null,(function (){var s__184053__$1 = s__184053;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__184053__$1);if(temp__4092__auto__)
{var s__184053__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__184053__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__184053__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__184055 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__184054 = 0;while(true){
if((i__184054 < size__8920__auto__))
{var i = cljs.core._nth.call(null,c__8919__auto__,i__184054);cljs.core.chunk_append.call(null,b__184055,(function (){var x__8535__auto__ = 0;var y__8536__auto__ = (i - ((n - s) - -1));return ((x__8535__auto__ > y__8536__auto__) ? x__8535__auto__ : y__8536__auto__);
})());
{
var G__184056 = (i__184054 + 1);
i__184054 = G__184056;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__184055),iter__184052.call(null,cljs.core.chunk_rest.call(null,s__184053__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__184055),null);
}
} else
{var i = cljs.core.first.call(null,s__184053__$2);return cljs.core.cons.call(null,(function (){var x__8535__auto__ = 0;var y__8536__auto__ = (i - ((n - s) - -1));return ((x__8535__auto__ > y__8536__auto__) ? x__8535__auto__ : y__8536__auto__);
})(),iter__184052.call(null,cljs.core.rest.call(null,s__184053__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,cljs.core.range.call(null,1,(n + 1)));
})());
} else
{return cljs.core.vec.call(null,cljs.core.repeat.call(null,n,0));
}
});
foundation.app.data.combinatorics.growth_strings_H = (function() {
var growth_strings_H = null;
var growth_strings_H__3 = (function (n,r,s){return growth_strings_H.call(null,n,foundation.app.data.combinatorics.init.call(null,n,s),cljs.core.vec.call(null,cljs.core.repeat.call(null,n,1)),r,s);
});
var growth_strings_H__5 = (function (n,a,b,r,s){return cljs.core.cons.call(null,a,(new cljs.core.LazySeq(null,(function (){if((function (){var and__8211__auto__ = (cljs.core.peek.call(null,b) > cljs.core.peek.call(null,a));if(and__8211__auto__)
{if(cljs.core.truth_(r))
{return (cljs.core.peek.call(null,a) < (r - 1));
} else
{return true;
}
} else
{return and__8211__auto__;
}
})())
{return growth_strings_H.call(null,n,foundation.app.data.combinatorics.update.call(null,a,(n - 1),cljs.core.inc),b,r,s);
} else
{var j = (function (){var j = (n - 2);while(true){
if((function (){var and__8211__auto__ = (a.call(null,j) < b.call(null,j));if(and__8211__auto__)
{var and__8211__auto____$1 = (cljs.core.truth_(r)?(a.call(null,j) < (r - 1)):true);if(and__8211__auto____$1)
{if(cljs.core.truth_(s))
{return (((s - b.call(null,j)) - ((((a.call(null,j) + 1) === b.call(null,j)))?1:0)) <= (n - j));
} else
{return true;
}
} else
{return and__8211__auto____$1;
}
} else
{return and__8211__auto__;
}
})())
{return j;
} else
{{
var G__184059 = (j - 1);
j = G__184059;
continue;
}
}
break;
}
})();if((j === 0))
{return cljs.core.List.EMPTY;
} else
{var a__$1 = foundation.app.data.combinatorics.update.call(null,a,j,cljs.core.inc);var x = (cljs.core.truth_(s)?(s - (b.call(null,j) + ((cljs.core._EQ_.call(null,a__$1.call(null,j),b.call(null,j)))?1:0))):null);var vec__184058 = (function (){var a__$2 = a__$1;var b__$1 = b;var i = (j + 1);var current_max = (b__$1.call(null,j) + (((b__$1.call(null,j) === a__$2.call(null,j)))?1:0));while(true){
if((i === n))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$2,b__$1], null);
} else
{if(cljs.core.truth_((function (){var and__8211__auto__ = s;if(cljs.core.truth_(and__8211__auto__))
{return (i > ((n - x) - 1));
} else
{return and__8211__auto__;
}
})()))
{var new_a_i = ((i - n) + s);{
var G__184060 = cljs.core.assoc.call(null,a__$2,i,new_a_i);
var G__184061 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__184062 = (i + 1);
var G__184063 = (function (){var x__8535__auto__ = current_max;var y__8536__auto__ = (new_a_i + 1);return ((x__8535__auto__ > y__8536__auto__) ? x__8535__auto__ : y__8536__auto__);
})();
a__$2 = G__184060;
b__$1 = G__184061;
i = G__184062;
current_max = G__184063;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__184064 = cljs.core.assoc.call(null,a__$2,i,0);
var G__184065 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__184066 = (i + 1);
var G__184067 = current_max;
a__$2 = G__184064;
b__$1 = G__184065;
i = G__184066;
current_max = G__184067;
continue;
}
} else
{return null;
}
}
}
break;
}
})();var a__$2 = cljs.core.nth.call(null,vec__184058,0,null);var b__$1 = cljs.core.nth.call(null,vec__184058,1,null);return growth_strings_H.call(null,n,a__$2,b__$1,r,s);
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
var lex_partitions_H__delegate = function (N,p__184068){var map__184074 = p__184068;var map__184074__$1 = ((cljs.core.seq_QMARK_.call(null,map__184074))?cljs.core.apply.call(null,cljs.core.hash_map,map__184074):map__184074);var from = cljs.core.get.call(null,map__184074__$1,new cljs.core.Keyword(null,"min","min",1014012356));var to = cljs.core.get.call(null,map__184074__$1,new cljs.core.Keyword(null,"max","max",1014012118));if(cljs.core._EQ_.call(null,N,0))
{if((((function (){var or__8223__auto__ = from;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return 0;
}
})() <= 0)) && ((0 <= (function (){var or__8223__auto__ = to;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return 0;
}
})())))
{return cljs.core.list(cljs.core.List.EMPTY);
} else
{return cljs.core.List.EMPTY;
}
} else
{var from__$1 = (cljs.core.truth_((function (){var and__8211__auto__ = from;if(cljs.core.truth_(and__8211__auto__))
{return (from <= 1);
} else
{return and__8211__auto__;
}
})())?null:from);var to__$1 = (cljs.core.truth_((function (){var and__8211__auto__ = to;if(cljs.core.truth_(and__8211__auto__))
{return (to >= N);
} else
{return and__8211__auto__;
}
})())?null:to);if(!(((1 <= (function (){var or__8223__auto__ = from__$1;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return 1;
}
})())) && ((((function (){var or__8223__auto__ = from__$1;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return 1;
}
})() <= (function (){var or__8223__auto__ = to__$1;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return N;
}
})())) && (((function (){var or__8223__auto__ = to__$1;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
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
{var growth_strings = foundation.app.data.combinatorics.growth_strings_H.call(null,N,to__$1,from__$1);var iter__8921__auto__ = (function iter__184075(s__184076){return (new cljs.core.LazySeq(null,(function (){var s__184076__$1 = s__184076;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__184076__$1);if(temp__4092__auto__)
{var s__184076__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__184076__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__184076__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__184078 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__184077 = 0;while(true){
if((i__184077 < size__8920__auto__))
{var growth_string = cljs.core._nth.call(null,c__8919__auto__,i__184077);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));cljs.core.chunk_append.call(null,b__184078,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))));
{
var G__184079 = (i__184077 + 1);
i__184077 = G__184079;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__184078),iter__184075.call(null,cljs.core.chunk_rest.call(null,s__184076__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__184078),null);
}
} else
{var growth_string = cljs.core.first.call(null,s__184076__$2);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));return cljs.core.cons.call(null,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))),iter__184075.call(null,cljs.core.rest.call(null,s__184076__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,growth_strings);
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
var p__184068 = null;if (arguments.length > 1) {
  p__184068 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return lex_partitions_H__delegate.call(this,N,p__184068);};
lex_partitions_H.cljs$lang$maxFixedArity = 1;
lex_partitions_H.cljs$lang$applyTo = (function (arglist__184080){
var N = cljs.core.first(arglist__184080);
var p__184068 = cljs.core.rest(arglist__184080);
return lex_partitions_H__delegate(N,p__184068);
});
lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic = lex_partitions_H__delegate;
return lex_partitions_H;
})()
;
/**
* @param {...*} var_args
*/
foundation.app.data.combinatorics.partitions_H = (function() { 
var partitions_H__delegate = function (items,args){var items__$1 = cljs.core.vec.call(null,items);var N = cljs.core.count.call(null,items__$1);var lex = cljs.core.apply.call(null,foundation.app.data.combinatorics.lex_partitions_H,N,args);var iter__8921__auto__ = (function iter__184101(s__184102){return (new cljs.core.LazySeq(null,(function (){var s__184102__$1 = s__184102;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__184102__$1);if(temp__4092__auto__)
{var s__184102__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__184102__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__184102__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__184104 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__184103 = 0;while(true){
if((i__184103 < size__8920__auto__))
{var parts = cljs.core._nth.call(null,c__8919__auto__,i__184103);cljs.core.chunk_append.call(null,b__184104,(function (){var iter__8921__auto__ = ((function (i__184103,parts,c__8919__auto__,size__8920__auto__,b__184104,s__184102__$2,temp__4092__auto__){
return (function iter__184113(s__184114){return (new cljs.core.LazySeq(null,((function (i__184103,parts,c__8919__auto__,size__8920__auto__,b__184104,s__184102__$2,temp__4092__auto__){
return (function (){var s__184114__$1 = s__184114;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__184114__$1);if(temp__4092__auto____$1)
{var s__184114__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__184114__$2))
{var c__8919__auto____$1 = cljs.core.chunk_first.call(null,s__184114__$2);var size__8920__auto____$1 = cljs.core.count.call(null,c__8919__auto____$1);var b__184116 = cljs.core.chunk_buffer.call(null,size__8920__auto____$1);if((function (){var i__184115 = 0;while(true){
if((i__184115 < size__8920__auto____$1))
{var part = cljs.core._nth.call(null,c__8919__auto____$1,i__184115);cljs.core.chunk_append.call(null,b__184116,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__184115,i__184103,part,c__8919__auto____$1,size__8920__auto____$1,b__184116,s__184114__$2,temp__4092__auto____$1,parts,c__8919__auto__,size__8920__auto__,b__184104,s__184102__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__184115,i__184103,part,c__8919__auto____$1,size__8920__auto____$1,b__184116,s__184114__$2,temp__4092__auto____$1,parts,c__8919__auto__,size__8920__auto__,b__184104,s__184102__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__184121 = (i__184115 + 1);
i__184115 = G__184121;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__184116),iter__184113.call(null,cljs.core.chunk_rest.call(null,s__184114__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__184116),null);
}
} else
{var part = cljs.core.first.call(null,s__184114__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__184103,part,s__184114__$2,temp__4092__auto____$1,parts,c__8919__auto__,size__8920__auto__,b__184104,s__184102__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__184103,part,s__184114__$2,temp__4092__auto____$1,parts,c__8919__auto__,size__8920__auto__,b__184104,s__184102__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__184113.call(null,cljs.core.rest.call(null,s__184114__$2)));
}
} else
{return null;
}
break;
}
});})(i__184103,parts,c__8919__auto__,size__8920__auto__,b__184104,s__184102__$2,temp__4092__auto__))
,null,null));
});})(i__184103,parts,c__8919__auto__,size__8920__auto__,b__184104,s__184102__$2,temp__4092__auto__))
;return iter__8921__auto__.call(null,parts);
})());
{
var G__184122 = (i__184103 + 1);
i__184103 = G__184122;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__184104),iter__184101.call(null,cljs.core.chunk_rest.call(null,s__184102__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__184104),null);
}
} else
{var parts = cljs.core.first.call(null,s__184102__$2);return cljs.core.cons.call(null,(function (){var iter__8921__auto__ = ((function (parts,s__184102__$2,temp__4092__auto__){
return (function iter__184117(s__184118){return (new cljs.core.LazySeq(null,((function (parts,s__184102__$2,temp__4092__auto__){
return (function (){var s__184118__$1 = s__184118;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__184118__$1);if(temp__4092__auto____$1)
{var s__184118__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__184118__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__184118__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__184120 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__184119 = 0;while(true){
if((i__184119 < size__8920__auto__))
{var part = cljs.core._nth.call(null,c__8919__auto__,i__184119);cljs.core.chunk_append.call(null,b__184120,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__184119,part,c__8919__auto__,size__8920__auto__,b__184120,s__184118__$2,temp__4092__auto____$1,parts,s__184102__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__184119,part,c__8919__auto__,size__8920__auto__,b__184120,s__184118__$2,temp__4092__auto____$1,parts,s__184102__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__184123 = (i__184119 + 1);
i__184119 = G__184123;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__184120),iter__184117.call(null,cljs.core.chunk_rest.call(null,s__184118__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__184120),null);
}
} else
{var part = cljs.core.first.call(null,s__184118__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (part,s__184118__$2,temp__4092__auto____$1,parts,s__184102__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(part,s__184118__$2,temp__4092__auto____$1,parts,s__184102__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__184117.call(null,cljs.core.rest.call(null,s__184118__$2)));
}
} else
{return null;
}
break;
}
});})(parts,s__184102__$2,temp__4092__auto__))
,null,null));
});})(parts,s__184102__$2,temp__4092__auto__))
;return iter__8921__auto__.call(null,parts);
})(),iter__184101.call(null,cljs.core.rest.call(null,s__184102__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,lex);
};
var partitions_H = function (items,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions_H__delegate.call(this,items,args);};
partitions_H.cljs$lang$maxFixedArity = 1;
partitions_H.cljs$lang$applyTo = (function (arglist__184124){
var items = cljs.core.first(arglist__184124);
var args = cljs.core.rest(arglist__184124);
return partitions_H__delegate(items,args);
});
partitions_H.cljs$core$IFn$_invoke$arity$variadic = partitions_H__delegate;
return partitions_H;
})()
;
foundation.app.data.combinatorics.multiset_partitions_M = (function() {
var multiset_partitions_M = null;
var multiset_partitions_M__3 = (function (multiset,r,s){var n = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,multiset));var m = cljs.core.count.call(null,multiset);var f = cljs.core.PersistentVector.EMPTY;var c = cljs.core.PersistentVector.EMPTY;var u = cljs.core.PersistentVector.EMPTY;var v = cljs.core.PersistentVector.EMPTY;var vec__184147 = (function (){var j = 0;var c__$1 = c;var u__$1 = u;var v__$1 = v;while(true){
if(cljs.core._EQ_.call(null,j,m))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,u__$1,v__$1], null);
} else
{{
var G__184169 = (j + 1);
var G__184170 = cljs.core.assoc.call(null,c__$1,j,(j + 1));
var G__184171 = cljs.core.assoc.call(null,u__$1,j,multiset.call(null,(j + 1)));
var G__184172 = cljs.core.assoc.call(null,v__$1,j,multiset.call(null,(j + 1)));
j = G__184169;
c__$1 = G__184170;
u__$1 = G__184171;
v__$1 = G__184172;
continue;
}
}
break;
}
})();var c__$1 = cljs.core.nth.call(null,vec__184147,0,null);var u__$1 = cljs.core.nth.call(null,vec__184147,1,null);var v__$1 = cljs.core.nth.call(null,vec__184147,2,null);var a = 0;var b = m;var l = 0;var f__$1 = cljs.core.assoc.call(null,f,0,0,1,m);var stack = cljs.core.List.EMPTY;return multiset_partitions_M.call(null,n,m,f__$1,c__$1,u__$1,v__$1,a,b,l,r,s);
});
var multiset_partitions_M__11 = (function (n,m,f,c,u,v,a,b,l,r,s){while(true){
var vec__184148 = (function (){var j = a;var k = b;var x = false;var u__$1 = u;var v__$1 = v;var c__$1 = c;while(true){
if((j >= b))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [u__$1,v__$1,c__$1,j,k], null);
} else
{var u__$2 = cljs.core.assoc.call(null,u__$1,k,(u__$1.call(null,j) - v__$1.call(null,j)));if(cljs.core._EQ_.call(null,u__$2.call(null,k),0))
{{
var G__184173 = (j + 1);
var G__184174 = k;
var G__184175 = true;
var G__184176 = u__$2;
var G__184177 = v__$1;
var G__184178 = c__$1;
j = G__184173;
k = G__184174;
x = G__184175;
u__$1 = G__184176;
v__$1 = G__184177;
c__$1 = G__184178;
continue;
}
} else
{if(!(x))
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,(function (){var x__8542__auto__ = v__$1.call(null,j);var y__8543__auto__ = u__$2.call(null,k);return ((x__8542__auto__ < y__8543__auto__) ? x__8542__auto__ : y__8543__auto__);
})());var x__$1 = (u__$2.call(null,k) < v__$2.call(null,j));var k__$1 = (k + 1);var j__$1 = (j + 1);{
var G__184179 = j__$1;
var G__184180 = k__$1;
var G__184181 = x__$1;
var G__184182 = u__$2;
var G__184183 = v__$2;
var G__184184 = c__$2;
j = G__184179;
k = G__184180;
x = G__184181;
u__$1 = G__184182;
v__$1 = G__184183;
c__$1 = G__184184;
continue;
}
} else
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,u__$2.call(null,k));var k__$1 = (k + 1);var j__$1 = (j + 1);{
var G__184185 = j__$1;
var G__184186 = k__$1;
var G__184187 = x;
var G__184188 = u__$2;
var G__184189 = v__$2;
var G__184190 = c__$2;
j = G__184185;
k = G__184186;
x = G__184187;
u__$1 = G__184188;
v__$1 = G__184189;
c__$1 = G__184190;
continue;
}
}
}
}
break;
}
})();var u__$1 = cljs.core.nth.call(null,vec__184148,0,null);var v__$1 = cljs.core.nth.call(null,vec__184148,1,null);var c__$1 = cljs.core.nth.call(null,vec__184148,2,null);var j = cljs.core.nth.call(null,vec__184148,3,null);var k = cljs.core.nth.call(null,vec__184148,4,null);if(cljs.core.truth_((function (){var and__8211__auto__ = r;if(cljs.core.truth_(and__8211__auto__))
{return ((k > b)) && (cljs.core._EQ_.call(null,l,(r - 1)));
} else
{return and__8211__auto__;
}
})()))
{return foundation.app.data.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
} else
{if(cljs.core.truth_((function (){var and__8211__auto__ = s;if(cljs.core.truth_(and__8211__auto__))
{return ((k <= b)) && (((l + 1) < s));
} else
{return and__8211__auto__;
}
})()))
{return foundation.app.data.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
} else
{if((k > b))
{var a__$1 = b;var b__$1 = k;var l__$1 = (l + 1);var f__$1 = cljs.core.assoc.call(null,f,(l__$1 + 1),b__$1);{
var G__184191 = n;
var G__184192 = m;
var G__184193 = f__$1;
var G__184194 = c__$1;
var G__184195 = u__$1;
var G__184196 = v__$1;
var G__184197 = a__$1;
var G__184198 = b__$1;
var G__184199 = l__$1;
var G__184200 = r;
var G__184201 = s;
n = G__184191;
m = G__184192;
f = G__184193;
c = G__184194;
u = G__184195;
v = G__184196;
a = G__184197;
b = G__184198;
l = G__184199;
r = G__184200;
s = G__184201;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var part = (function (){var iter__8921__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s){
return (function iter__184149(s__184150){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s){
return (function (){var s__184150__$1 = s__184150;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__184150__$1);if(temp__4092__auto__)
{var s__184150__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__184150__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__184150__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__184152 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__184151 = 0;while(true){
if((i__184151 < size__8920__auto__))
{var y = cljs.core._nth.call(null,c__8919__auto__,i__184151);cljs.core.chunk_append.call(null,b__184152,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + 1)) - 1);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8921__auto__ = ((function (i__184151,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8919__auto__,size__8920__auto__,b__184152,s__184150__$2,temp__4092__auto__){
return (function iter__184161(s__184162){return (new cljs.core.LazySeq(null,((function (i__184151,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8919__auto__,size__8920__auto__,b__184152,s__184150__$2,temp__4092__auto__){
return (function (){var s__184162__$1 = s__184162;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__184162__$1);if(temp__4092__auto____$1)
{var s__184162__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__184162__$2))
{var c__8919__auto____$1 = cljs.core.chunk_first.call(null,s__184162__$2);var size__8920__auto____$1 = cljs.core.count.call(null,c__8919__auto____$1);var b__184164 = cljs.core.chunk_buffer.call(null,size__8920__auto____$1);if((function (){var i__184163 = 0;while(true){
if((i__184163 < size__8920__auto____$1))
{var z = cljs.core._nth.call(null,c__8919__auto____$1,i__184163);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{cljs.core.chunk_append.call(null,b__184164,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));
{
var G__184202 = (i__184163 + 1);
i__184163 = G__184202;
continue;
}
} else
{{
var G__184203 = (i__184163 + 1);
i__184163 = G__184203;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__184164),iter__184161.call(null,cljs.core.chunk_rest.call(null,s__184162__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__184164),null);
}
} else
{var z = cljs.core.first.call(null,s__184162__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),iter__184161.call(null,cljs.core.rest.call(null,s__184162__$2)));
} else
{{
var G__184204 = cljs.core.rest.call(null,s__184162__$2);
s__184162__$1 = G__184204;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__184151,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8919__auto__,size__8920__auto__,b__184152,s__184150__$2,temp__4092__auto__))
,null,null));
});})(i__184151,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8919__auto__,size__8920__auto__,b__184152,s__184150__$2,temp__4092__auto__))
;return iter__8921__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + 1)));
})());
})());
{
var G__184205 = (i__184151 + 1);
i__184151 = G__184205;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__184152),iter__184149.call(null,cljs.core.chunk_rest.call(null,s__184150__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__184152),null);
}
} else
{var y = cljs.core.first.call(null,s__184150__$2);return cljs.core.cons.call(null,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + 1)) - 1);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8921__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__184150__$2,temp__4092__auto__){
return (function iter__184165(s__184166){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__184150__$2,temp__4092__auto__){
return (function (){var s__184166__$1 = s__184166;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__184166__$1);if(temp__4092__auto____$1)
{var s__184166__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__184166__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__184166__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__184168 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__184167 = 0;while(true){
if((i__184167 < size__8920__auto__))
{var z = cljs.core._nth.call(null,c__8919__auto__,i__184167);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{cljs.core.chunk_append.call(null,b__184168,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));
{
var G__184206 = (i__184167 + 1);
i__184167 = G__184206;
continue;
}
} else
{{
var G__184207 = (i__184167 + 1);
i__184167 = G__184207;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__184168),iter__184165.call(null,cljs.core.chunk_rest.call(null,s__184166__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__184168),null);
}
} else
{var z = cljs.core.first.call(null,s__184166__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),iter__184165.call(null,cljs.core.rest.call(null,s__184166__$2)));
} else
{{
var G__184208 = cljs.core.rest.call(null,s__184166__$2);
s__184166__$1 = G__184208;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__184150__$2,temp__4092__auto__))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__184150__$2,temp__4092__auto__))
;return iter__8921__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + 1)));
})());
})(),iter__184149.call(null,cljs.core.rest.call(null,s__184150__$2)));
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s))
;return iter__8921__auto__.call(null,cljs.core.range.call(null,(l + 1)));
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
var G__184217 = (j - 1);
j = G__184217;
continue;
}
}
break;
}
})();if(cljs.core.truth_((function (){var and__8211__auto__ = r;if(cljs.core.truth_(and__8211__auto__))
{return (cljs.core._EQ_.call(null,j,a)) && ((((v.call(null,j) - 1) * (r - l)) < u.call(null,j)));
} else
{return and__8211__auto__;
}
})()))
{return foundation.app.data.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s);
} else
{if((cljs.core._EQ_.call(null,j,a)) && (cljs.core._EQ_.call(null,v.call(null,j),1)))
{return foundation.app.data.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var v__$1 = foundation.app.data.combinatorics.update.call(null,v,j,cljs.core.dec);var diff_uv = (cljs.core.truth_(s)?cljs.core.apply.call(null,cljs.core._PLUS_,(function (){var iter__8921__auto__ = ((function (v__$1){
return (function iter__184213(s__184214){return (new cljs.core.LazySeq(null,((function (v__$1){
return (function (){var s__184214__$1 = s__184214;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__184214__$1);if(temp__4092__auto__)
{var s__184214__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__184214__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__184214__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__184216 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__184215 = 0;while(true){
if((i__184215 < size__8920__auto__))
{var i = cljs.core._nth.call(null,c__8919__auto__,i__184215);cljs.core.chunk_append.call(null,b__184216,(u.call(null,i) - v__$1.call(null,i)));
{
var G__184218 = (i__184215 + 1);
i__184215 = G__184218;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__184216),iter__184213.call(null,cljs.core.chunk_rest.call(null,s__184214__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__184216),null);
}
} else
{var i = cljs.core.first.call(null,s__184214__$2);return cljs.core.cons.call(null,(u.call(null,i) - v__$1.call(null,i)),iter__184213.call(null,cljs.core.rest.call(null,s__184214__$2)));
}
} else
{return null;
}
break;
}
});})(v__$1))
,null,null));
});})(v__$1))
;return iter__8921__auto__.call(null,cljs.core.range.call(null,a,(j + 1)));
})()):null);var v__$2 = (function (){var ks = cljs.core.range.call(null,(j + 1),b);var v__$2 = v__$1;while(true){
if(cljs.core.empty_QMARK_.call(null,ks))
{return v__$2;
} else
{var k = cljs.core.first.call(null,ks);{
var G__184219 = cljs.core.rest.call(null,ks);
var G__184220 = cljs.core.assoc.call(null,v__$2,k,u.call(null,k));
ks = G__184219;
v__$2 = G__184220;
continue;
}
}
break;
}
})();var min_partitions_after_this = (cljs.core.truth_(s)?(s - (l + 1)):0);var amount_to_dec = (cljs.core.truth_(s)?(function (){var x__8535__auto__ = 0;var y__8536__auto__ = (min_partitions_after_this - diff_uv);return ((x__8535__auto__ > y__8536__auto__) ? x__8535__auto__ : y__8536__auto__);
})():0);var v__$3 = ((cljs.core._EQ_.call(null,amount_to_dec,0))?v__$2:(function (){var k_1 = (b - 1);var v__$3 = v__$2;var amount = amount_to_dec;while(true){
var vk = v__$3.call(null,k_1);if((amount > vk))
{{
var G__184221 = (k_1 - 1);
var G__184222 = cljs.core.assoc.call(null,v__$3,k_1,0);
var G__184223 = (amount - vk);
k_1 = G__184221;
v__$3 = G__184222;
amount = G__184223;
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
var partitions_M__delegate = function (items,p__184224){var map__184282 = p__184224;var map__184282__$1 = ((cljs.core.seq_QMARK_.call(null,map__184282))?cljs.core.apply.call(null,cljs.core.hash_map,map__184282):map__184282);var from = cljs.core.get.call(null,map__184282__$1,new cljs.core.Keyword(null,"min","min",1014012356));var to = cljs.core.get.call(null,map__184282__$1,new cljs.core.Keyword(null,"max","max",1014012118));if(cljs.core._EQ_.call(null,cljs.core.count.call(null,items),0))
{if((((function (){var or__8223__auto__ = from;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return 0;
}
})() <= 0)) && ((0 <= (function (){var or__8223__auto__ = to;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return 0;
}
})())))
{return cljs.core.list(cljs.core.List.EMPTY);
} else
{return cljs.core.List.EMPTY;
}
} else
{var items__$1 = cljs.core.vec.call(null,items);var ditems = cljs.core.vec.call(null,cljs.core.distinct.call(null,items__$1));var freqs = cljs.core.frequencies.call(null,items__$1);var N = cljs.core.count.call(null,items__$1);var M = cljs.core.count.call(null,ditems);var from__$1 = (cljs.core.truth_((function (){var and__8211__auto__ = from;if(cljs.core.truth_(and__8211__auto__))
{return (from <= 1);
} else
{return and__8211__auto__;
}
})())?null:from);var to__$1 = (cljs.core.truth_((function (){var and__8211__auto__ = to;if(cljs.core.truth_(and__8211__auto__))
{return (to >= N);
} else
{return and__8211__auto__;
}
})())?null:to);if(!(((1 <= (function (){var or__8223__auto__ = from__$1;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return 1;
}
})())) && ((((function (){var or__8223__auto__ = from__$1;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return 1;
}
})() <= (function (){var or__8223__auto__ = to__$1;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return N;
}
})())) && (((function (){var or__8223__auto__ = to__$1;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
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
{var start_multiset = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8921__auto__ = (function iter__184283(s__184284){return (new cljs.core.LazySeq(null,(function (){var s__184284__$1 = s__184284;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__184284__$1);if(temp__4092__auto__)
{var s__184284__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__184284__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__184284__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__184286 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__184285 = 0;while(true){
if((i__184285 < size__8920__auto__))
{var i = cljs.core._nth.call(null,c__8919__auto__,i__184285);var j = (i + 1);cljs.core.chunk_append.call(null,b__184286,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null));
{
var G__184339 = (i__184285 + 1);
i__184285 = G__184339;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__184286),iter__184283.call(null,cljs.core.chunk_rest.call(null,s__184284__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__184286),null);
}
} else
{var i = cljs.core.first.call(null,s__184284__$2);var j = (i + 1);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null),iter__184283.call(null,cljs.core.rest.call(null,s__184284__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,cljs.core.range.call(null,M));
})());var parts = foundation.app.data.combinatorics.multiset_partitions_M.call(null,start_multiset,to__$1,from__$1);var iter__8921__auto__ = (function iter__184287(s__184288){return (new cljs.core.LazySeq(null,(function (){var s__184288__$1 = s__184288;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__184288__$1);if(temp__4092__auto__)
{var s__184288__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__184288__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__184288__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__184290 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__184289 = 0;while(true){
if((i__184289 < size__8920__auto__))
{var part = cljs.core._nth.call(null,c__8919__auto__,i__184289);cljs.core.chunk_append.call(null,b__184290,(function (){var iter__8921__auto__ = ((function (i__184289,part,c__8919__auto__,size__8920__auto__,b__184290,s__184288__$2,temp__4092__auto__){
return (function iter__184315(s__184316){return (new cljs.core.LazySeq(null,((function (i__184289,part,c__8919__auto__,size__8920__auto__,b__184290,s__184288__$2,temp__4092__auto__){
return (function (){var s__184316__$1 = s__184316;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__184316__$1);if(temp__4092__auto____$1)
{var s__184316__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__184316__$2))
{var c__8919__auto____$1 = cljs.core.chunk_first.call(null,s__184316__$2);var size__8920__auto____$1 = cljs.core.count.call(null,c__8919__auto____$1);var b__184318 = cljs.core.chunk_buffer.call(null,size__8920__auto____$1);if((function (){var i__184317 = 0;while(true){
if((i__184317 < size__8920__auto____$1))
{var multiset = cljs.core._nth.call(null,c__8919__auto____$1,i__184317);cljs.core.chunk_append.call(null,b__184318,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__184317,i__184289,multiset,c__8919__auto____$1,size__8920__auto____$1,b__184318,s__184316__$2,temp__4092__auto____$1,part,c__8919__auto__,size__8920__auto__,b__184290,s__184288__$2,temp__4092__auto__){
return (function (p__184323){var vec__184324 = p__184323;var index = cljs.core.nth.call(null,vec__184324,0,null);var numtimes = cljs.core.nth.call(null,vec__184324,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__184317,i__184289,multiset,c__8919__auto____$1,size__8920__auto____$1,b__184318,s__184316__$2,temp__4092__auto____$1,part,c__8919__auto__,size__8920__auto__,b__184290,s__184288__$2,temp__4092__auto__))
,multiset)));
{
var G__184340 = (i__184317 + 1);
i__184317 = G__184340;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__184318),iter__184315.call(null,cljs.core.chunk_rest.call(null,s__184316__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__184318),null);
}
} else
{var multiset = cljs.core.first.call(null,s__184316__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__184289,multiset,s__184316__$2,temp__4092__auto____$1,part,c__8919__auto__,size__8920__auto__,b__184290,s__184288__$2,temp__4092__auto__){
return (function (p__184325){var vec__184326 = p__184325;var index = cljs.core.nth.call(null,vec__184326,0,null);var numtimes = cljs.core.nth.call(null,vec__184326,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__184289,multiset,s__184316__$2,temp__4092__auto____$1,part,c__8919__auto__,size__8920__auto__,b__184290,s__184288__$2,temp__4092__auto__))
,multiset)),iter__184315.call(null,cljs.core.rest.call(null,s__184316__$2)));
}
} else
{return null;
}
break;
}
});})(i__184289,part,c__8919__auto__,size__8920__auto__,b__184290,s__184288__$2,temp__4092__auto__))
,null,null));
});})(i__184289,part,c__8919__auto__,size__8920__auto__,b__184290,s__184288__$2,temp__4092__auto__))
;return iter__8921__auto__.call(null,part);
})());
{
var G__184341 = (i__184289 + 1);
i__184289 = G__184341;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__184290),iter__184287.call(null,cljs.core.chunk_rest.call(null,s__184288__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__184290),null);
}
} else
{var part = cljs.core.first.call(null,s__184288__$2);return cljs.core.cons.call(null,(function (){var iter__8921__auto__ = ((function (part,s__184288__$2,temp__4092__auto__){
return (function iter__184327(s__184328){return (new cljs.core.LazySeq(null,((function (part,s__184288__$2,temp__4092__auto__){
return (function (){var s__184328__$1 = s__184328;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__184328__$1);if(temp__4092__auto____$1)
{var s__184328__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__184328__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__184328__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__184330 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__184329 = 0;while(true){
if((i__184329 < size__8920__auto__))
{var multiset = cljs.core._nth.call(null,c__8919__auto__,i__184329);cljs.core.chunk_append.call(null,b__184330,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__184329,multiset,c__8919__auto__,size__8920__auto__,b__184330,s__184328__$2,temp__4092__auto____$1,part,s__184288__$2,temp__4092__auto__){
return (function (p__184335){var vec__184336 = p__184335;var index = cljs.core.nth.call(null,vec__184336,0,null);var numtimes = cljs.core.nth.call(null,vec__184336,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__184329,multiset,c__8919__auto__,size__8920__auto__,b__184330,s__184328__$2,temp__4092__auto____$1,part,s__184288__$2,temp__4092__auto__))
,multiset)));
{
var G__184342 = (i__184329 + 1);
i__184329 = G__184342;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__184330),iter__184327.call(null,cljs.core.chunk_rest.call(null,s__184328__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__184330),null);
}
} else
{var multiset = cljs.core.first.call(null,s__184328__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (multiset,s__184328__$2,temp__4092__auto____$1,part,s__184288__$2,temp__4092__auto__){
return (function (p__184337){var vec__184338 = p__184337;var index = cljs.core.nth.call(null,vec__184338,0,null);var numtimes = cljs.core.nth.call(null,vec__184338,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(multiset,s__184328__$2,temp__4092__auto____$1,part,s__184288__$2,temp__4092__auto__))
,multiset)),iter__184327.call(null,cljs.core.rest.call(null,s__184328__$2)));
}
} else
{return null;
}
break;
}
});})(part,s__184288__$2,temp__4092__auto__))
,null,null));
});})(part,s__184288__$2,temp__4092__auto__))
;return iter__8921__auto__.call(null,part);
})(),iter__184287.call(null,cljs.core.rest.call(null,s__184288__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,parts);
} else
{return null;
}
}
}
}
};
var partitions_M = function (items,var_args){
var p__184224 = null;if (arguments.length > 1) {
  p__184224 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions_M__delegate.call(this,items,p__184224);};
partitions_M.cljs$lang$maxFixedArity = 1;
partitions_M.cljs$lang$applyTo = (function (arglist__184343){
var items = cljs.core.first(arglist__184343);
var p__184224 = cljs.core.rest(arglist__184343);
return partitions_M__delegate(items,p__184224);
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
partitions.cljs$lang$applyTo = (function (arglist__184344){
var items = cljs.core.first(arglist__184344);
var args = cljs.core.rest(arglist__184344);
return partitions__delegate(items,args);
});
partitions.cljs$core$IFn$_invoke$arity$variadic = partitions__delegate;
return partitions;
})()
;

//# sourceMappingURL=combinatorics.js.map