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
var G__17287 = cljs.core.assoc.call(null,c__$2,(j__$1 - 1),(c__$2.call(null,j__$1) - 1));
var G__17288 = (j__$1 - 1);
c__$2 = G__17287;
j__$1 = G__17288;
continue;
}
}
break;
}
}
}
});
return (new cljs.core.LazySeq(null,(function (){var c = cljs.core.vec.call(null,cljs.core.cons.call(null,null,(function (){var iter__15834__auto__ = (function iter__17283(s__17284){return (new cljs.core.LazySeq(null,(function (){var s__17284__$1 = s__17284;while(true){
var temp__4098__auto__ = cljs.core.seq.call(null,s__17284__$1);if(temp__4098__auto__)
{var s__17284__$2 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17284__$2))
{var c__15832__auto__ = cljs.core.chunk_first.call(null,s__17284__$2);var size__15833__auto__ = cljs.core.count.call(null,c__15832__auto__);var b__17286 = cljs.core.chunk_buffer.call(null,size__15833__auto__);if((function (){var i__17285 = 0;while(true){
if((i__17285 < size__15833__auto__))
{var j = cljs.core._nth.call(null,c__15832__auto__,i__17285);cljs.core.chunk_append.call(null,b__17286,((j + cnt) + (- (n + 1))));
{
var G__17289 = (i__17285 + 1);
i__17285 = G__17289;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17286),iter__17283.call(null,cljs.core.chunk_rest.call(null,s__17284__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17286),null);
}
} else
{var j = cljs.core.first.call(null,s__17284__$2);return cljs.core.cons.call(null,((j + cnt) + (- (n + 1))),iter__17283.call(null,cljs.core.rest.call(null,s__17284__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__15834__auto__.call(null,cljs.core.range.call(null,1,(n + 1)));
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
{return cljs.core.map.call(null,(function (p1__17290_SHARP_){return cljs.core.map.call(null,v_items,p1__17290_SHARP_);
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
var G__17291 = (i - 1);
var G__17292 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__17291;
v_seqs__$2 = G__17292;
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
cartesian_product.cljs$lang$applyTo = (function (arglist__17293){
var seqs = cljs.core.seq(arglist__17293);
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
var G__17294 = (i - 1);
i = G__17294;
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
var G__17295 = (i - 1);
i = G__17295;
continue;
}
}
break;
}
})();var v__$1 = cljs.core.assoc.call(null,v,j,v.call(null,l),l,vj);var k = (j + 1);var l__$1 = (len - 1);while(true){
if((k < l__$1))
{{
var G__17296 = cljs.core.assoc.call(null,v__$1,k,v__$1.call(null,l__$1),l__$1,v__$1.call(null,k));
var G__17297 = (k + 1);
var G__17298 = (l__$1 - 1);
v__$1 = G__17296;
k = G__17297;
l__$1 = G__17298;
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
foundation.app.data.combinatorics.multi_perm = (function multi_perm(l){var f = cljs.core.frequencies.call(null,l);var v = cljs.core.vec.call(null,cljs.core.keys.call(null,f));var indices = cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__15834__auto__ = ((function (f,v){
return (function iter__17303(s__17304){return (new cljs.core.LazySeq(null,((function (f,v){
return (function (){var s__17304__$1 = s__17304;while(true){
var temp__4098__auto__ = cljs.core.seq.call(null,s__17304__$1);if(temp__4098__auto__)
{var s__17304__$2 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17304__$2))
{var c__15832__auto__ = cljs.core.chunk_first.call(null,s__17304__$2);var size__15833__auto__ = cljs.core.count.call(null,c__15832__auto__);var b__17306 = cljs.core.chunk_buffer.call(null,size__15833__auto__);if((function (){var i__17305 = 0;while(true){
if((i__17305 < size__15833__auto__))
{var i = cljs.core._nth.call(null,c__15832__auto__,i__17305);cljs.core.chunk_append.call(null,b__17306,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));
{
var G__17307 = (i__17305 + 1);
i__17305 = G__17307;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17306),iter__17303.call(null,cljs.core.chunk_rest.call(null,s__17304__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17306),null);
}
} else
{var i = cljs.core.first.call(null,s__17304__$2);return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),iter__17303.call(null,cljs.core.rest.call(null,s__17304__$2)));
}
} else
{return null;
}
break;
}
});})(f,v))
,null,null));
});})(f,v))
;return iter__15834__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,v)));
})());return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.map,v),foundation.app.data.combinatorics.lex_permutations.call(null,indices));
});
/**
* All the distinct permutations of items, lexicographic by index.
*/
foundation.app.data.combinatorics.permutations = (function permutations(items){if(foundation.app.data.combinatorics.sorted_numbers_QMARK_.call(null,items))
{return foundation.app.data.combinatorics.lex_permutations.call(null,items);
} else
{if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core.distinct_QMARK_,items)))
{var v = cljs.core.vec.call(null,items);return cljs.core.map.call(null,(function (p1__17308_SHARP_){return cljs.core.map.call(null,v,p1__17308_SHARP_);
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
{return cljs.core.vec.call(null,(function (){var iter__15834__auto__ = (function iter__17313(s__17314){return (new cljs.core.LazySeq(null,(function (){var s__17314__$1 = s__17314;while(true){
var temp__4098__auto__ = cljs.core.seq.call(null,s__17314__$1);if(temp__4098__auto__)
{var s__17314__$2 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17314__$2))
{var c__15832__auto__ = cljs.core.chunk_first.call(null,s__17314__$2);var size__15833__auto__ = cljs.core.count.call(null,c__15832__auto__);var b__17316 = cljs.core.chunk_buffer.call(null,size__15833__auto__);if((function (){var i__17315 = 0;while(true){
if((i__17315 < size__15833__auto__))
{var i = cljs.core._nth.call(null,c__15832__auto__,i__17315);cljs.core.chunk_append.call(null,b__17316,(function (){var x__15448__auto__ = 0;var y__15449__auto__ = (i - ((n - s) - -1));return ((x__15448__auto__ > y__15449__auto__) ? x__15448__auto__ : y__15449__auto__);
})());
{
var G__17317 = (i__17315 + 1);
i__17315 = G__17317;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17316),iter__17313.call(null,cljs.core.chunk_rest.call(null,s__17314__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17316),null);
}
} else
{var i = cljs.core.first.call(null,s__17314__$2);return cljs.core.cons.call(null,(function (){var x__15448__auto__ = 0;var y__15449__auto__ = (i - ((n - s) - -1));return ((x__15448__auto__ > y__15449__auto__) ? x__15448__auto__ : y__15449__auto__);
})(),iter__17313.call(null,cljs.core.rest.call(null,s__17314__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__15834__auto__.call(null,cljs.core.range.call(null,1,(n + 1)));
})());
} else
{return cljs.core.vec.call(null,cljs.core.repeat.call(null,n,0));
}
});
foundation.app.data.combinatorics.growth_strings_H = (function() {
var growth_strings_H = null;
var growth_strings_H__3 = (function (n,r,s){return growth_strings_H.call(null,n,foundation.app.data.combinatorics.init.call(null,n,s),cljs.core.vec.call(null,cljs.core.repeat.call(null,n,1)),r,s);
});
var growth_strings_H__5 = (function (n,a,b,r,s){return cljs.core.cons.call(null,a,(new cljs.core.LazySeq(null,(function (){if((function (){var and__15129__auto__ = (cljs.core.peek.call(null,b) > cljs.core.peek.call(null,a));if(and__15129__auto__)
{if(cljs.core.truth_(r))
{return (cljs.core.peek.call(null,a) < (r - 1));
} else
{return true;
}
} else
{return and__15129__auto__;
}
})())
{return growth_strings_H.call(null,n,foundation.app.data.combinatorics.update.call(null,a,(n - 1),cljs.core.inc),b,r,s);
} else
{var j = (function (){var j = (n - 2);while(true){
if((function (){var and__15129__auto__ = (a.call(null,j) < b.call(null,j));if(and__15129__auto__)
{var and__15129__auto____$1 = (cljs.core.truth_(r)?(a.call(null,j) < (r - 1)):true);if(and__15129__auto____$1)
{if(cljs.core.truth_(s))
{return (((s - b.call(null,j)) - ((((a.call(null,j) + 1) === b.call(null,j)))?1:0)) <= (n - j));
} else
{return true;
}
} else
{return and__15129__auto____$1;
}
} else
{return and__15129__auto__;
}
})())
{return j;
} else
{{
var G__17320 = (j - 1);
j = G__17320;
continue;
}
}
break;
}
})();if((j === 0))
{return cljs.core.List.EMPTY;
} else
{var a__$1 = foundation.app.data.combinatorics.update.call(null,a,j,cljs.core.inc);var x = (cljs.core.truth_(s)?(s - (b.call(null,j) + ((cljs.core._EQ_.call(null,a__$1.call(null,j),b.call(null,j)))?1:0))):null);var vec__17319 = (function (){var a__$2 = a__$1;var b__$1 = b;var i = (j + 1);var current_max = (b__$1.call(null,j) + (((b__$1.call(null,j) === a__$2.call(null,j)))?1:0));while(true){
if((i === n))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$2,b__$1], null);
} else
{if(cljs.core.truth_((function (){var and__15129__auto__ = s;if(cljs.core.truth_(and__15129__auto__))
{return (i > ((n - x) - 1));
} else
{return and__15129__auto__;
}
})()))
{var new_a_i = ((i - n) + s);{
var G__17321 = cljs.core.assoc.call(null,a__$2,i,new_a_i);
var G__17322 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__17323 = (i + 1);
var G__17324 = (function (){var x__15448__auto__ = current_max;var y__15449__auto__ = (new_a_i + 1);return ((x__15448__auto__ > y__15449__auto__) ? x__15448__auto__ : y__15449__auto__);
})();
a__$2 = G__17321;
b__$1 = G__17322;
i = G__17323;
current_max = G__17324;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__17325 = cljs.core.assoc.call(null,a__$2,i,0);
var G__17326 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__17327 = (i + 1);
var G__17328 = current_max;
a__$2 = G__17325;
b__$1 = G__17326;
i = G__17327;
current_max = G__17328;
continue;
}
} else
{return null;
}
}
}
break;
}
})();var a__$2 = cljs.core.nth.call(null,vec__17319,0,null);var b__$1 = cljs.core.nth.call(null,vec__17319,1,null);return growth_strings_H.call(null,n,a__$2,b__$1,r,s);
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
var lex_partitions_H__delegate = function (N,p__17329){var map__17335 = p__17329;var map__17335__$1 = ((cljs.core.seq_QMARK_.call(null,map__17335))?cljs.core.apply.call(null,cljs.core.hash_map,map__17335):map__17335);var from = cljs.core.get.call(null,map__17335__$1,new cljs.core.Keyword(null,"min","min",1014012356));var to = cljs.core.get.call(null,map__17335__$1,new cljs.core.Keyword(null,"max","max",1014012118));if(cljs.core._EQ_.call(null,N,0))
{if((((function (){var or__15141__auto__ = from;if(cljs.core.truth_(or__15141__auto__))
{return or__15141__auto__;
} else
{return 0;
}
})() <= 0)) && ((0 <= (function (){var or__15141__auto__ = to;if(cljs.core.truth_(or__15141__auto__))
{return or__15141__auto__;
} else
{return 0;
}
})())))
{return cljs.core.list(cljs.core.List.EMPTY);
} else
{return cljs.core.List.EMPTY;
}
} else
{var from__$1 = (cljs.core.truth_((function (){var and__15129__auto__ = from;if(cljs.core.truth_(and__15129__auto__))
{return (from <= 1);
} else
{return and__15129__auto__;
}
})())?null:from);var to__$1 = (cljs.core.truth_((function (){var and__15129__auto__ = to;if(cljs.core.truth_(and__15129__auto__))
{return (to >= N);
} else
{return and__15129__auto__;
}
})())?null:to);if(!(((1 <= (function (){var or__15141__auto__ = from__$1;if(cljs.core.truth_(or__15141__auto__))
{return or__15141__auto__;
} else
{return 1;
}
})())) && ((((function (){var or__15141__auto__ = from__$1;if(cljs.core.truth_(or__15141__auto__))
{return or__15141__auto__;
} else
{return 1;
}
})() <= (function (){var or__15141__auto__ = to__$1;if(cljs.core.truth_(or__15141__auto__))
{return or__15141__auto__;
} else
{return N;
}
})())) && (((function (){var or__15141__auto__ = to__$1;if(cljs.core.truth_(or__15141__auto__))
{return or__15141__auto__;
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
{var growth_strings = foundation.app.data.combinatorics.growth_strings_H.call(null,N,to__$1,from__$1);var iter__15834__auto__ = (function iter__17336(s__17337){return (new cljs.core.LazySeq(null,(function (){var s__17337__$1 = s__17337;while(true){
var temp__4098__auto__ = cljs.core.seq.call(null,s__17337__$1);if(temp__4098__auto__)
{var s__17337__$2 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17337__$2))
{var c__15832__auto__ = cljs.core.chunk_first.call(null,s__17337__$2);var size__15833__auto__ = cljs.core.count.call(null,c__15832__auto__);var b__17339 = cljs.core.chunk_buffer.call(null,size__15833__auto__);if((function (){var i__17338 = 0;while(true){
if((i__17338 < size__15833__auto__))
{var growth_string = cljs.core._nth.call(null,c__15832__auto__,i__17338);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));cljs.core.chunk_append.call(null,b__17339,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))));
{
var G__17340 = (i__17338 + 1);
i__17338 = G__17340;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17339),iter__17336.call(null,cljs.core.chunk_rest.call(null,s__17337__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17339),null);
}
} else
{var growth_string = cljs.core.first.call(null,s__17337__$2);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));return cljs.core.cons.call(null,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))),iter__17336.call(null,cljs.core.rest.call(null,s__17337__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__15834__auto__.call(null,growth_strings);
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
var p__17329 = null;if (arguments.length > 1) {
  p__17329 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return lex_partitions_H__delegate.call(this,N,p__17329);};
lex_partitions_H.cljs$lang$maxFixedArity = 1;
lex_partitions_H.cljs$lang$applyTo = (function (arglist__17341){
var N = cljs.core.first(arglist__17341);
var p__17329 = cljs.core.rest(arglist__17341);
return lex_partitions_H__delegate(N,p__17329);
});
lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic = lex_partitions_H__delegate;
return lex_partitions_H;
})()
;
/**
* @param {...*} var_args
*/
foundation.app.data.combinatorics.partitions_H = (function() { 
var partitions_H__delegate = function (items,args){var items__$1 = cljs.core.vec.call(null,items);var N = cljs.core.count.call(null,items__$1);var lex = cljs.core.apply.call(null,foundation.app.data.combinatorics.lex_partitions_H,N,args);var iter__15834__auto__ = (function iter__17362(s__17363){return (new cljs.core.LazySeq(null,(function (){var s__17363__$1 = s__17363;while(true){
var temp__4098__auto__ = cljs.core.seq.call(null,s__17363__$1);if(temp__4098__auto__)
{var s__17363__$2 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17363__$2))
{var c__15832__auto__ = cljs.core.chunk_first.call(null,s__17363__$2);var size__15833__auto__ = cljs.core.count.call(null,c__15832__auto__);var b__17365 = cljs.core.chunk_buffer.call(null,size__15833__auto__);if((function (){var i__17364 = 0;while(true){
if((i__17364 < size__15833__auto__))
{var parts = cljs.core._nth.call(null,c__15832__auto__,i__17364);cljs.core.chunk_append.call(null,b__17365,(function (){var iter__15834__auto__ = ((function (i__17364,parts,c__15832__auto__,size__15833__auto__,b__17365,s__17363__$2,temp__4098__auto__){
return (function iter__17374(s__17375){return (new cljs.core.LazySeq(null,((function (i__17364,parts,c__15832__auto__,size__15833__auto__,b__17365,s__17363__$2,temp__4098__auto__){
return (function (){var s__17375__$1 = s__17375;while(true){
var temp__4098__auto____$1 = cljs.core.seq.call(null,s__17375__$1);if(temp__4098__auto____$1)
{var s__17375__$2 = temp__4098__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__17375__$2))
{var c__15832__auto____$1 = cljs.core.chunk_first.call(null,s__17375__$2);var size__15833__auto____$1 = cljs.core.count.call(null,c__15832__auto____$1);var b__17377 = cljs.core.chunk_buffer.call(null,size__15833__auto____$1);if((function (){var i__17376 = 0;while(true){
if((i__17376 < size__15833__auto____$1))
{var part = cljs.core._nth.call(null,c__15832__auto____$1,i__17376);cljs.core.chunk_append.call(null,b__17377,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__17376,i__17364,part,c__15832__auto____$1,size__15833__auto____$1,b__17377,s__17375__$2,temp__4098__auto____$1,parts,c__15832__auto__,size__15833__auto__,b__17365,s__17363__$2,temp__4098__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__17376,i__17364,part,c__15832__auto____$1,size__15833__auto____$1,b__17377,s__17375__$2,temp__4098__auto____$1,parts,c__15832__auto__,size__15833__auto__,b__17365,s__17363__$2,temp__4098__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__17382 = (i__17376 + 1);
i__17376 = G__17382;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17377),iter__17374.call(null,cljs.core.chunk_rest.call(null,s__17375__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17377),null);
}
} else
{var part = cljs.core.first.call(null,s__17375__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__17364,part,s__17375__$2,temp__4098__auto____$1,parts,c__15832__auto__,size__15833__auto__,b__17365,s__17363__$2,temp__4098__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__17364,part,s__17375__$2,temp__4098__auto____$1,parts,c__15832__auto__,size__15833__auto__,b__17365,s__17363__$2,temp__4098__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__17374.call(null,cljs.core.rest.call(null,s__17375__$2)));
}
} else
{return null;
}
break;
}
});})(i__17364,parts,c__15832__auto__,size__15833__auto__,b__17365,s__17363__$2,temp__4098__auto__))
,null,null));
});})(i__17364,parts,c__15832__auto__,size__15833__auto__,b__17365,s__17363__$2,temp__4098__auto__))
;return iter__15834__auto__.call(null,parts);
})());
{
var G__17383 = (i__17364 + 1);
i__17364 = G__17383;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17365),iter__17362.call(null,cljs.core.chunk_rest.call(null,s__17363__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17365),null);
}
} else
{var parts = cljs.core.first.call(null,s__17363__$2);return cljs.core.cons.call(null,(function (){var iter__15834__auto__ = ((function (parts,s__17363__$2,temp__4098__auto__){
return (function iter__17378(s__17379){return (new cljs.core.LazySeq(null,((function (parts,s__17363__$2,temp__4098__auto__){
return (function (){var s__17379__$1 = s__17379;while(true){
var temp__4098__auto____$1 = cljs.core.seq.call(null,s__17379__$1);if(temp__4098__auto____$1)
{var s__17379__$2 = temp__4098__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__17379__$2))
{var c__15832__auto__ = cljs.core.chunk_first.call(null,s__17379__$2);var size__15833__auto__ = cljs.core.count.call(null,c__15832__auto__);var b__17381 = cljs.core.chunk_buffer.call(null,size__15833__auto__);if((function (){var i__17380 = 0;while(true){
if((i__17380 < size__15833__auto__))
{var part = cljs.core._nth.call(null,c__15832__auto__,i__17380);cljs.core.chunk_append.call(null,b__17381,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__17380,part,c__15832__auto__,size__15833__auto__,b__17381,s__17379__$2,temp__4098__auto____$1,parts,s__17363__$2,temp__4098__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__17380,part,c__15832__auto__,size__15833__auto__,b__17381,s__17379__$2,temp__4098__auto____$1,parts,s__17363__$2,temp__4098__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__17384 = (i__17380 + 1);
i__17380 = G__17384;
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
{var part = cljs.core.first.call(null,s__17379__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (part,s__17379__$2,temp__4098__auto____$1,parts,s__17363__$2,temp__4098__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(part,s__17379__$2,temp__4098__auto____$1,parts,s__17363__$2,temp__4098__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__17378.call(null,cljs.core.rest.call(null,s__17379__$2)));
}
} else
{return null;
}
break;
}
});})(parts,s__17363__$2,temp__4098__auto__))
,null,null));
});})(parts,s__17363__$2,temp__4098__auto__))
;return iter__15834__auto__.call(null,parts);
})(),iter__17362.call(null,cljs.core.rest.call(null,s__17363__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__15834__auto__.call(null,lex);
};
var partitions_H = function (items,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions_H__delegate.call(this,items,args);};
partitions_H.cljs$lang$maxFixedArity = 1;
partitions_H.cljs$lang$applyTo = (function (arglist__17385){
var items = cljs.core.first(arglist__17385);
var args = cljs.core.rest(arglist__17385);
return partitions_H__delegate(items,args);
});
partitions_H.cljs$core$IFn$_invoke$arity$variadic = partitions_H__delegate;
return partitions_H;
})()
;
foundation.app.data.combinatorics.multiset_partitions_M = (function() {
var multiset_partitions_M = null;
var multiset_partitions_M__3 = (function (multiset,r,s){var n = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,multiset));var m = cljs.core.count.call(null,multiset);var f = cljs.core.PersistentVector.EMPTY;var c = cljs.core.PersistentVector.EMPTY;var u = cljs.core.PersistentVector.EMPTY;var v = cljs.core.PersistentVector.EMPTY;var vec__17408 = (function (){var j = 0;var c__$1 = c;var u__$1 = u;var v__$1 = v;while(true){
if(cljs.core._EQ_.call(null,j,m))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,u__$1,v__$1], null);
} else
{{
var G__17430 = (j + 1);
var G__17431 = cljs.core.assoc.call(null,c__$1,j,(j + 1));
var G__17432 = cljs.core.assoc.call(null,u__$1,j,multiset.call(null,(j + 1)));
var G__17433 = cljs.core.assoc.call(null,v__$1,j,multiset.call(null,(j + 1)));
j = G__17430;
c__$1 = G__17431;
u__$1 = G__17432;
v__$1 = G__17433;
continue;
}
}
break;
}
})();var c__$1 = cljs.core.nth.call(null,vec__17408,0,null);var u__$1 = cljs.core.nth.call(null,vec__17408,1,null);var v__$1 = cljs.core.nth.call(null,vec__17408,2,null);var a = 0;var b = m;var l = 0;var f__$1 = cljs.core.assoc.call(null,f,0,0,1,m);var stack = cljs.core.List.EMPTY;return multiset_partitions_M.call(null,n,m,f__$1,c__$1,u__$1,v__$1,a,b,l,r,s);
});
var multiset_partitions_M__11 = (function (n,m,f,c,u,v,a,b,l,r,s){while(true){
var vec__17409 = (function (){var j = a;var k = b;var x = false;var u__$1 = u;var v__$1 = v;var c__$1 = c;while(true){
if((j >= b))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [u__$1,v__$1,c__$1,j,k], null);
} else
{var u__$2 = cljs.core.assoc.call(null,u__$1,k,(u__$1.call(null,j) - v__$1.call(null,j)));if(cljs.core._EQ_.call(null,u__$2.call(null,k),0))
{{
var G__17434 = (j + 1);
var G__17435 = k;
var G__17436 = true;
var G__17437 = u__$2;
var G__17438 = v__$1;
var G__17439 = c__$1;
j = G__17434;
k = G__17435;
x = G__17436;
u__$1 = G__17437;
v__$1 = G__17438;
c__$1 = G__17439;
continue;
}
} else
{if(!(x))
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,(function (){var x__15455__auto__ = v__$1.call(null,j);var y__15456__auto__ = u__$2.call(null,k);return ((x__15455__auto__ < y__15456__auto__) ? x__15455__auto__ : y__15456__auto__);
})());var x__$1 = (u__$2.call(null,k) < v__$2.call(null,j));var k__$1 = (k + 1);var j__$1 = (j + 1);{
var G__17440 = j__$1;
var G__17441 = k__$1;
var G__17442 = x__$1;
var G__17443 = u__$2;
var G__17444 = v__$2;
var G__17445 = c__$2;
j = G__17440;
k = G__17441;
x = G__17442;
u__$1 = G__17443;
v__$1 = G__17444;
c__$1 = G__17445;
continue;
}
} else
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,u__$2.call(null,k));var k__$1 = (k + 1);var j__$1 = (j + 1);{
var G__17446 = j__$1;
var G__17447 = k__$1;
var G__17448 = x;
var G__17449 = u__$2;
var G__17450 = v__$2;
var G__17451 = c__$2;
j = G__17446;
k = G__17447;
x = G__17448;
u__$1 = G__17449;
v__$1 = G__17450;
c__$1 = G__17451;
continue;
}
}
}
}
break;
}
})();var u__$1 = cljs.core.nth.call(null,vec__17409,0,null);var v__$1 = cljs.core.nth.call(null,vec__17409,1,null);var c__$1 = cljs.core.nth.call(null,vec__17409,2,null);var j = cljs.core.nth.call(null,vec__17409,3,null);var k = cljs.core.nth.call(null,vec__17409,4,null);if(cljs.core.truth_((function (){var and__15129__auto__ = r;if(cljs.core.truth_(and__15129__auto__))
{return ((k > b)) && (cljs.core._EQ_.call(null,l,(r - 1)));
} else
{return and__15129__auto__;
}
})()))
{return foundation.app.data.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
} else
{if(cljs.core.truth_((function (){var and__15129__auto__ = s;if(cljs.core.truth_(and__15129__auto__))
{return ((k <= b)) && (((l + 1) < s));
} else
{return and__15129__auto__;
}
})()))
{return foundation.app.data.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
} else
{if((k > b))
{var a__$1 = b;var b__$1 = k;var l__$1 = (l + 1);var f__$1 = cljs.core.assoc.call(null,f,(l__$1 + 1),b__$1);{
var G__17452 = n;
var G__17453 = m;
var G__17454 = f__$1;
var G__17455 = c__$1;
var G__17456 = u__$1;
var G__17457 = v__$1;
var G__17458 = a__$1;
var G__17459 = b__$1;
var G__17460 = l__$1;
var G__17461 = r;
var G__17462 = s;
n = G__17452;
m = G__17453;
f = G__17454;
c = G__17455;
u = G__17456;
v = G__17457;
a = G__17458;
b = G__17459;
l = G__17460;
r = G__17461;
s = G__17462;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var part = (function (){var iter__15834__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s){
return (function iter__17410(s__17411){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s){
return (function (){var s__17411__$1 = s__17411;while(true){
var temp__4098__auto__ = cljs.core.seq.call(null,s__17411__$1);if(temp__4098__auto__)
{var s__17411__$2 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17411__$2))
{var c__15832__auto__ = cljs.core.chunk_first.call(null,s__17411__$2);var size__15833__auto__ = cljs.core.count.call(null,c__15832__auto__);var b__17413 = cljs.core.chunk_buffer.call(null,size__15833__auto__);if((function (){var i__17412 = 0;while(true){
if((i__17412 < size__15833__auto__))
{var y = cljs.core._nth.call(null,c__15832__auto__,i__17412);cljs.core.chunk_append.call(null,b__17413,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + 1)) - 1);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__15834__auto__ = ((function (i__17412,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__15832__auto__,size__15833__auto__,b__17413,s__17411__$2,temp__4098__auto__){
return (function iter__17422(s__17423){return (new cljs.core.LazySeq(null,((function (i__17412,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__15832__auto__,size__15833__auto__,b__17413,s__17411__$2,temp__4098__auto__){
return (function (){var s__17423__$1 = s__17423;while(true){
var temp__4098__auto____$1 = cljs.core.seq.call(null,s__17423__$1);if(temp__4098__auto____$1)
{var s__17423__$2 = temp__4098__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__17423__$2))
{var c__15832__auto____$1 = cljs.core.chunk_first.call(null,s__17423__$2);var size__15833__auto____$1 = cljs.core.count.call(null,c__15832__auto____$1);var b__17425 = cljs.core.chunk_buffer.call(null,size__15833__auto____$1);if((function (){var i__17424 = 0;while(true){
if((i__17424 < size__15833__auto____$1))
{var z = cljs.core._nth.call(null,c__15832__auto____$1,i__17424);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{cljs.core.chunk_append.call(null,b__17425,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));
{
var G__17463 = (i__17424 + 1);
i__17424 = G__17463;
continue;
}
} else
{{
var G__17464 = (i__17424 + 1);
i__17424 = G__17464;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17425),iter__17422.call(null,cljs.core.chunk_rest.call(null,s__17423__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17425),null);
}
} else
{var z = cljs.core.first.call(null,s__17423__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),iter__17422.call(null,cljs.core.rest.call(null,s__17423__$2)));
} else
{{
var G__17465 = cljs.core.rest.call(null,s__17423__$2);
s__17423__$1 = G__17465;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__17412,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__15832__auto__,size__15833__auto__,b__17413,s__17411__$2,temp__4098__auto__))
,null,null));
});})(i__17412,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__15832__auto__,size__15833__auto__,b__17413,s__17411__$2,temp__4098__auto__))
;return iter__15834__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + 1)));
})());
})());
{
var G__17466 = (i__17412 + 1);
i__17412 = G__17466;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17413),iter__17410.call(null,cljs.core.chunk_rest.call(null,s__17411__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17413),null);
}
} else
{var y = cljs.core.first.call(null,s__17411__$2);return cljs.core.cons.call(null,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + 1)) - 1);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__15834__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__17411__$2,temp__4098__auto__){
return (function iter__17426(s__17427){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__17411__$2,temp__4098__auto__){
return (function (){var s__17427__$1 = s__17427;while(true){
var temp__4098__auto____$1 = cljs.core.seq.call(null,s__17427__$1);if(temp__4098__auto____$1)
{var s__17427__$2 = temp__4098__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__17427__$2))
{var c__15832__auto__ = cljs.core.chunk_first.call(null,s__17427__$2);var size__15833__auto__ = cljs.core.count.call(null,c__15832__auto__);var b__17429 = cljs.core.chunk_buffer.call(null,size__15833__auto__);if((function (){var i__17428 = 0;while(true){
if((i__17428 < size__15833__auto__))
{var z = cljs.core._nth.call(null,c__15832__auto__,i__17428);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{cljs.core.chunk_append.call(null,b__17429,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));
{
var G__17467 = (i__17428 + 1);
i__17428 = G__17467;
continue;
}
} else
{{
var G__17468 = (i__17428 + 1);
i__17428 = G__17468;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17429),iter__17426.call(null,cljs.core.chunk_rest.call(null,s__17427__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17429),null);
}
} else
{var z = cljs.core.first.call(null,s__17427__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),iter__17426.call(null,cljs.core.rest.call(null,s__17427__$2)));
} else
{{
var G__17469 = cljs.core.rest.call(null,s__17427__$2);
s__17427__$1 = G__17469;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__17411__$2,temp__4098__auto__))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__17411__$2,temp__4098__auto__))
;return iter__15834__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + 1)));
})());
})(),iter__17410.call(null,cljs.core.rest.call(null,s__17411__$2)));
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s))
;return iter__15834__auto__.call(null,cljs.core.range.call(null,(l + 1)));
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
var G__17478 = (j - 1);
j = G__17478;
continue;
}
}
break;
}
})();if(cljs.core.truth_((function (){var and__15129__auto__ = r;if(cljs.core.truth_(and__15129__auto__))
{return (cljs.core._EQ_.call(null,j,a)) && ((((v.call(null,j) - 1) * (r - l)) < u.call(null,j)));
} else
{return and__15129__auto__;
}
})()))
{return foundation.app.data.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s);
} else
{if((cljs.core._EQ_.call(null,j,a)) && (cljs.core._EQ_.call(null,v.call(null,j),1)))
{return foundation.app.data.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var v__$1 = foundation.app.data.combinatorics.update.call(null,v,j,cljs.core.dec);var diff_uv = (cljs.core.truth_(s)?cljs.core.apply.call(null,cljs.core._PLUS_,(function (){var iter__15834__auto__ = ((function (v__$1){
return (function iter__17474(s__17475){return (new cljs.core.LazySeq(null,((function (v__$1){
return (function (){var s__17475__$1 = s__17475;while(true){
var temp__4098__auto__ = cljs.core.seq.call(null,s__17475__$1);if(temp__4098__auto__)
{var s__17475__$2 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17475__$2))
{var c__15832__auto__ = cljs.core.chunk_first.call(null,s__17475__$2);var size__15833__auto__ = cljs.core.count.call(null,c__15832__auto__);var b__17477 = cljs.core.chunk_buffer.call(null,size__15833__auto__);if((function (){var i__17476 = 0;while(true){
if((i__17476 < size__15833__auto__))
{var i = cljs.core._nth.call(null,c__15832__auto__,i__17476);cljs.core.chunk_append.call(null,b__17477,(u.call(null,i) - v__$1.call(null,i)));
{
var G__17479 = (i__17476 + 1);
i__17476 = G__17479;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17477),iter__17474.call(null,cljs.core.chunk_rest.call(null,s__17475__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17477),null);
}
} else
{var i = cljs.core.first.call(null,s__17475__$2);return cljs.core.cons.call(null,(u.call(null,i) - v__$1.call(null,i)),iter__17474.call(null,cljs.core.rest.call(null,s__17475__$2)));
}
} else
{return null;
}
break;
}
});})(v__$1))
,null,null));
});})(v__$1))
;return iter__15834__auto__.call(null,cljs.core.range.call(null,a,(j + 1)));
})()):null);var v__$2 = (function (){var ks = cljs.core.range.call(null,(j + 1),b);var v__$2 = v__$1;while(true){
if(cljs.core.empty_QMARK_.call(null,ks))
{return v__$2;
} else
{var k = cljs.core.first.call(null,ks);{
var G__17480 = cljs.core.rest.call(null,ks);
var G__17481 = cljs.core.assoc.call(null,v__$2,k,u.call(null,k));
ks = G__17480;
v__$2 = G__17481;
continue;
}
}
break;
}
})();var min_partitions_after_this = (cljs.core.truth_(s)?(s - (l + 1)):0);var amount_to_dec = (cljs.core.truth_(s)?(function (){var x__15448__auto__ = 0;var y__15449__auto__ = (min_partitions_after_this - diff_uv);return ((x__15448__auto__ > y__15449__auto__) ? x__15448__auto__ : y__15449__auto__);
})():0);var v__$3 = ((cljs.core._EQ_.call(null,amount_to_dec,0))?v__$2:(function (){var k_1 = (b - 1);var v__$3 = v__$2;var amount = amount_to_dec;while(true){
var vk = v__$3.call(null,k_1);if((amount > vk))
{{
var G__17482 = (k_1 - 1);
var G__17483 = cljs.core.assoc.call(null,v__$3,k_1,0);
var G__17484 = (amount - vk);
k_1 = G__17482;
v__$3 = G__17483;
amount = G__17484;
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
var partitions_M__delegate = function (items,p__17485){var map__17543 = p__17485;var map__17543__$1 = ((cljs.core.seq_QMARK_.call(null,map__17543))?cljs.core.apply.call(null,cljs.core.hash_map,map__17543):map__17543);var from = cljs.core.get.call(null,map__17543__$1,new cljs.core.Keyword(null,"min","min",1014012356));var to = cljs.core.get.call(null,map__17543__$1,new cljs.core.Keyword(null,"max","max",1014012118));if(cljs.core._EQ_.call(null,cljs.core.count.call(null,items),0))
{if((((function (){var or__15141__auto__ = from;if(cljs.core.truth_(or__15141__auto__))
{return or__15141__auto__;
} else
{return 0;
}
})() <= 0)) && ((0 <= (function (){var or__15141__auto__ = to;if(cljs.core.truth_(or__15141__auto__))
{return or__15141__auto__;
} else
{return 0;
}
})())))
{return cljs.core.list(cljs.core.List.EMPTY);
} else
{return cljs.core.List.EMPTY;
}
} else
{var items__$1 = cljs.core.vec.call(null,items);var ditems = cljs.core.vec.call(null,cljs.core.distinct.call(null,items__$1));var freqs = cljs.core.frequencies.call(null,items__$1);var N = cljs.core.count.call(null,items__$1);var M = cljs.core.count.call(null,ditems);var from__$1 = (cljs.core.truth_((function (){var and__15129__auto__ = from;if(cljs.core.truth_(and__15129__auto__))
{return (from <= 1);
} else
{return and__15129__auto__;
}
})())?null:from);var to__$1 = (cljs.core.truth_((function (){var and__15129__auto__ = to;if(cljs.core.truth_(and__15129__auto__))
{return (to >= N);
} else
{return and__15129__auto__;
}
})())?null:to);if(!(((1 <= (function (){var or__15141__auto__ = from__$1;if(cljs.core.truth_(or__15141__auto__))
{return or__15141__auto__;
} else
{return 1;
}
})())) && ((((function (){var or__15141__auto__ = from__$1;if(cljs.core.truth_(or__15141__auto__))
{return or__15141__auto__;
} else
{return 1;
}
})() <= (function (){var or__15141__auto__ = to__$1;if(cljs.core.truth_(or__15141__auto__))
{return or__15141__auto__;
} else
{return N;
}
})())) && (((function (){var or__15141__auto__ = to__$1;if(cljs.core.truth_(or__15141__auto__))
{return or__15141__auto__;
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
{var start_multiset = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__15834__auto__ = (function iter__17544(s__17545){return (new cljs.core.LazySeq(null,(function (){var s__17545__$1 = s__17545;while(true){
var temp__4098__auto__ = cljs.core.seq.call(null,s__17545__$1);if(temp__4098__auto__)
{var s__17545__$2 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17545__$2))
{var c__15832__auto__ = cljs.core.chunk_first.call(null,s__17545__$2);var size__15833__auto__ = cljs.core.count.call(null,c__15832__auto__);var b__17547 = cljs.core.chunk_buffer.call(null,size__15833__auto__);if((function (){var i__17546 = 0;while(true){
if((i__17546 < size__15833__auto__))
{var i = cljs.core._nth.call(null,c__15832__auto__,i__17546);var j = (i + 1);cljs.core.chunk_append.call(null,b__17547,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null));
{
var G__17600 = (i__17546 + 1);
i__17546 = G__17600;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17547),iter__17544.call(null,cljs.core.chunk_rest.call(null,s__17545__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17547),null);
}
} else
{var i = cljs.core.first.call(null,s__17545__$2);var j = (i + 1);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null),iter__17544.call(null,cljs.core.rest.call(null,s__17545__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__15834__auto__.call(null,cljs.core.range.call(null,M));
})());var parts = foundation.app.data.combinatorics.multiset_partitions_M.call(null,start_multiset,to__$1,from__$1);var iter__15834__auto__ = (function iter__17548(s__17549){return (new cljs.core.LazySeq(null,(function (){var s__17549__$1 = s__17549;while(true){
var temp__4098__auto__ = cljs.core.seq.call(null,s__17549__$1);if(temp__4098__auto__)
{var s__17549__$2 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17549__$2))
{var c__15832__auto__ = cljs.core.chunk_first.call(null,s__17549__$2);var size__15833__auto__ = cljs.core.count.call(null,c__15832__auto__);var b__17551 = cljs.core.chunk_buffer.call(null,size__15833__auto__);if((function (){var i__17550 = 0;while(true){
if((i__17550 < size__15833__auto__))
{var part = cljs.core._nth.call(null,c__15832__auto__,i__17550);cljs.core.chunk_append.call(null,b__17551,(function (){var iter__15834__auto__ = ((function (i__17550,part,c__15832__auto__,size__15833__auto__,b__17551,s__17549__$2,temp__4098__auto__){
return (function iter__17576(s__17577){return (new cljs.core.LazySeq(null,((function (i__17550,part,c__15832__auto__,size__15833__auto__,b__17551,s__17549__$2,temp__4098__auto__){
return (function (){var s__17577__$1 = s__17577;while(true){
var temp__4098__auto____$1 = cljs.core.seq.call(null,s__17577__$1);if(temp__4098__auto____$1)
{var s__17577__$2 = temp__4098__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__17577__$2))
{var c__15832__auto____$1 = cljs.core.chunk_first.call(null,s__17577__$2);var size__15833__auto____$1 = cljs.core.count.call(null,c__15832__auto____$1);var b__17579 = cljs.core.chunk_buffer.call(null,size__15833__auto____$1);if((function (){var i__17578 = 0;while(true){
if((i__17578 < size__15833__auto____$1))
{var multiset = cljs.core._nth.call(null,c__15832__auto____$1,i__17578);cljs.core.chunk_append.call(null,b__17579,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__17578,i__17550,multiset,c__15832__auto____$1,size__15833__auto____$1,b__17579,s__17577__$2,temp__4098__auto____$1,part,c__15832__auto__,size__15833__auto__,b__17551,s__17549__$2,temp__4098__auto__){
return (function (p__17584){var vec__17585 = p__17584;var index = cljs.core.nth.call(null,vec__17585,0,null);var numtimes = cljs.core.nth.call(null,vec__17585,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__17578,i__17550,multiset,c__15832__auto____$1,size__15833__auto____$1,b__17579,s__17577__$2,temp__4098__auto____$1,part,c__15832__auto__,size__15833__auto__,b__17551,s__17549__$2,temp__4098__auto__))
,multiset)));
{
var G__17601 = (i__17578 + 1);
i__17578 = G__17601;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17579),iter__17576.call(null,cljs.core.chunk_rest.call(null,s__17577__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17579),null);
}
} else
{var multiset = cljs.core.first.call(null,s__17577__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__17550,multiset,s__17577__$2,temp__4098__auto____$1,part,c__15832__auto__,size__15833__auto__,b__17551,s__17549__$2,temp__4098__auto__){
return (function (p__17586){var vec__17587 = p__17586;var index = cljs.core.nth.call(null,vec__17587,0,null);var numtimes = cljs.core.nth.call(null,vec__17587,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__17550,multiset,s__17577__$2,temp__4098__auto____$1,part,c__15832__auto__,size__15833__auto__,b__17551,s__17549__$2,temp__4098__auto__))
,multiset)),iter__17576.call(null,cljs.core.rest.call(null,s__17577__$2)));
}
} else
{return null;
}
break;
}
});})(i__17550,part,c__15832__auto__,size__15833__auto__,b__17551,s__17549__$2,temp__4098__auto__))
,null,null));
});})(i__17550,part,c__15832__auto__,size__15833__auto__,b__17551,s__17549__$2,temp__4098__auto__))
;return iter__15834__auto__.call(null,part);
})());
{
var G__17602 = (i__17550 + 1);
i__17550 = G__17602;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17551),iter__17548.call(null,cljs.core.chunk_rest.call(null,s__17549__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17551),null);
}
} else
{var part = cljs.core.first.call(null,s__17549__$2);return cljs.core.cons.call(null,(function (){var iter__15834__auto__ = ((function (part,s__17549__$2,temp__4098__auto__){
return (function iter__17588(s__17589){return (new cljs.core.LazySeq(null,((function (part,s__17549__$2,temp__4098__auto__){
return (function (){var s__17589__$1 = s__17589;while(true){
var temp__4098__auto____$1 = cljs.core.seq.call(null,s__17589__$1);if(temp__4098__auto____$1)
{var s__17589__$2 = temp__4098__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__17589__$2))
{var c__15832__auto__ = cljs.core.chunk_first.call(null,s__17589__$2);var size__15833__auto__ = cljs.core.count.call(null,c__15832__auto__);var b__17591 = cljs.core.chunk_buffer.call(null,size__15833__auto__);if((function (){var i__17590 = 0;while(true){
if((i__17590 < size__15833__auto__))
{var multiset = cljs.core._nth.call(null,c__15832__auto__,i__17590);cljs.core.chunk_append.call(null,b__17591,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__17590,multiset,c__15832__auto__,size__15833__auto__,b__17591,s__17589__$2,temp__4098__auto____$1,part,s__17549__$2,temp__4098__auto__){
return (function (p__17596){var vec__17597 = p__17596;var index = cljs.core.nth.call(null,vec__17597,0,null);var numtimes = cljs.core.nth.call(null,vec__17597,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__17590,multiset,c__15832__auto__,size__15833__auto__,b__17591,s__17589__$2,temp__4098__auto____$1,part,s__17549__$2,temp__4098__auto__))
,multiset)));
{
var G__17603 = (i__17590 + 1);
i__17590 = G__17603;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17591),iter__17588.call(null,cljs.core.chunk_rest.call(null,s__17589__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17591),null);
}
} else
{var multiset = cljs.core.first.call(null,s__17589__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (multiset,s__17589__$2,temp__4098__auto____$1,part,s__17549__$2,temp__4098__auto__){
return (function (p__17598){var vec__17599 = p__17598;var index = cljs.core.nth.call(null,vec__17599,0,null);var numtimes = cljs.core.nth.call(null,vec__17599,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(multiset,s__17589__$2,temp__4098__auto____$1,part,s__17549__$2,temp__4098__auto__))
,multiset)),iter__17588.call(null,cljs.core.rest.call(null,s__17589__$2)));
}
} else
{return null;
}
break;
}
});})(part,s__17549__$2,temp__4098__auto__))
,null,null));
});})(part,s__17549__$2,temp__4098__auto__))
;return iter__15834__auto__.call(null,part);
})(),iter__17548.call(null,cljs.core.rest.call(null,s__17549__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__15834__auto__.call(null,parts);
} else
{return null;
}
}
}
}
};
var partitions_M = function (items,var_args){
var p__17485 = null;if (arguments.length > 1) {
  p__17485 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions_M__delegate.call(this,items,p__17485);};
partitions_M.cljs$lang$maxFixedArity = 1;
partitions_M.cljs$lang$applyTo = (function (arglist__17604){
var items = cljs.core.first(arglist__17604);
var p__17485 = cljs.core.rest(arglist__17604);
return partitions_M__delegate(items,p__17485);
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
partitions.cljs$lang$applyTo = (function (arglist__17605){
var items = cljs.core.first(arglist__17605);
var args = cljs.core.rest(arglist__17605);
return partitions__delegate(items,args);
});
partitions.cljs$core$IFn$_invoke$arity$variadic = partitions__delegate;
return partitions;
})()
;

//# sourceMappingURL=combinatorics.js.map