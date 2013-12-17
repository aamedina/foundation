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
var G__332358 = cljs.core.assoc.call(null,c__$2,(j__$1 - 1),(c__$2.call(null,j__$1) - 1));
var G__332359 = (j__$1 - 1);
c__$2 = G__332358;
j__$1 = G__332359;
continue;
}
}
break;
}
}
}
});
return (new cljs.core.LazySeq(null,(function (){var c = cljs.core.vec.call(null,cljs.core.cons.call(null,null,(function (){var iter__14516__auto__ = (function iter__332354(s__332355){return (new cljs.core.LazySeq(null,(function (){var s__332355__$1 = s__332355;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__332355__$1);if(temp__4092__auto__)
{var s__332355__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__332355__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__332355__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__332357 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__332356 = 0;while(true){
if((i__332356 < size__14515__auto__))
{var j = cljs.core._nth.call(null,c__14514__auto__,i__332356);cljs.core.chunk_append.call(null,b__332357,((j + cnt) + (- (n + 1))));
{
var G__332360 = (i__332356 + 1);
i__332356 = G__332360;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__332357),iter__332354.call(null,cljs.core.chunk_rest.call(null,s__332355__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__332357),null);
}
} else
{var j = cljs.core.first.call(null,s__332355__$2);return cljs.core.cons.call(null,((j + cnt) + (- (n + 1))),iter__332354.call(null,cljs.core.rest.call(null,s__332355__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14516__auto__.call(null,cljs.core.range.call(null,1,(n + 1)));
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
{return cljs.core.map.call(null,(function (p1__332361_SHARP_){return cljs.core.map.call(null,v_items,p1__332361_SHARP_);
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
var G__332362 = (i - 1);
var G__332363 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__332362;
v_seqs__$2 = G__332363;
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
cartesian_product.cljs$lang$applyTo = (function (arglist__332364){
var seqs = cljs.core.seq(arglist__332364);
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
var G__332365 = (i - 1);
i = G__332365;
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
var G__332366 = (i - 1);
i = G__332366;
continue;
}
}
break;
}
})();var v__$1 = cljs.core.assoc.call(null,v,j,v.call(null,l),l,vj);var k = (j + 1);var l__$1 = (len - 1);while(true){
if((k < l__$1))
{{
var G__332367 = cljs.core.assoc.call(null,v__$1,k,v__$1.call(null,l__$1),l__$1,v__$1.call(null,k));
var G__332368 = (k + 1);
var G__332369 = (l__$1 - 1);
v__$1 = G__332367;
k = G__332368;
l__$1 = G__332369;
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
foundation.app.data.combinatorics.multi_perm = (function multi_perm(l){var f = cljs.core.frequencies.call(null,l);var v = cljs.core.vec.call(null,cljs.core.keys.call(null,f));var indices = cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__14516__auto__ = ((function (f,v){
return (function iter__332374(s__332375){return (new cljs.core.LazySeq(null,((function (f,v){
return (function (){var s__332375__$1 = s__332375;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__332375__$1);if(temp__4092__auto__)
{var s__332375__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__332375__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__332375__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__332377 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__332376 = 0;while(true){
if((i__332376 < size__14515__auto__))
{var i = cljs.core._nth.call(null,c__14514__auto__,i__332376);cljs.core.chunk_append.call(null,b__332377,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));
{
var G__332378 = (i__332376 + 1);
i__332376 = G__332378;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__332377),iter__332374.call(null,cljs.core.chunk_rest.call(null,s__332375__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__332377),null);
}
} else
{var i = cljs.core.first.call(null,s__332375__$2);return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),iter__332374.call(null,cljs.core.rest.call(null,s__332375__$2)));
}
} else
{return null;
}
break;
}
});})(f,v))
,null,null));
});})(f,v))
;return iter__14516__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,v)));
})());return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.map,v),foundation.app.data.combinatorics.lex_permutations.call(null,indices));
});
/**
* All the distinct permutations of items, lexicographic by index.
*/
foundation.app.data.combinatorics.permutations = (function permutations(items){if(foundation.app.data.combinatorics.sorted_numbers_QMARK_.call(null,items))
{return foundation.app.data.combinatorics.lex_permutations.call(null,items);
} else
{if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core.distinct_QMARK_,items)))
{var v = cljs.core.vec.call(null,items);return cljs.core.map.call(null,(function (p1__332379_SHARP_){return cljs.core.map.call(null,v,p1__332379_SHARP_);
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
{return cljs.core.vec.call(null,(function (){var iter__14516__auto__ = (function iter__332384(s__332385){return (new cljs.core.LazySeq(null,(function (){var s__332385__$1 = s__332385;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__332385__$1);if(temp__4092__auto__)
{var s__332385__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__332385__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__332385__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__332387 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__332386 = 0;while(true){
if((i__332386 < size__14515__auto__))
{var i = cljs.core._nth.call(null,c__14514__auto__,i__332386);cljs.core.chunk_append.call(null,b__332387,(function (){var x__14130__auto__ = 0;var y__14131__auto__ = (i - ((n - s) - -1));return ((x__14130__auto__ > y__14131__auto__) ? x__14130__auto__ : y__14131__auto__);
})());
{
var G__332388 = (i__332386 + 1);
i__332386 = G__332388;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__332387),iter__332384.call(null,cljs.core.chunk_rest.call(null,s__332385__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__332387),null);
}
} else
{var i = cljs.core.first.call(null,s__332385__$2);return cljs.core.cons.call(null,(function (){var x__14130__auto__ = 0;var y__14131__auto__ = (i - ((n - s) - -1));return ((x__14130__auto__ > y__14131__auto__) ? x__14130__auto__ : y__14131__auto__);
})(),iter__332384.call(null,cljs.core.rest.call(null,s__332385__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14516__auto__.call(null,cljs.core.range.call(null,1,(n + 1)));
})());
} else
{return cljs.core.vec.call(null,cljs.core.repeat.call(null,n,0));
}
});
foundation.app.data.combinatorics.growth_strings_H = (function() {
var growth_strings_H = null;
var growth_strings_H__3 = (function (n,r,s){return growth_strings_H.call(null,n,foundation.app.data.combinatorics.init.call(null,n,s),cljs.core.vec.call(null,cljs.core.repeat.call(null,n,1)),r,s);
});
var growth_strings_H__5 = (function (n,a,b,r,s){return cljs.core.cons.call(null,a,(new cljs.core.LazySeq(null,(function (){if((function (){var and__13811__auto__ = (cljs.core.peek.call(null,b) > cljs.core.peek.call(null,a));if(and__13811__auto__)
{if(cljs.core.truth_(r))
{return (cljs.core.peek.call(null,a) < (r - 1));
} else
{return true;
}
} else
{return and__13811__auto__;
}
})())
{return growth_strings_H.call(null,n,foundation.app.data.combinatorics.update.call(null,a,(n - 1),cljs.core.inc),b,r,s);
} else
{var j = (function (){var j = (n - 2);while(true){
if((function (){var and__13811__auto__ = (a.call(null,j) < b.call(null,j));if(and__13811__auto__)
{var and__13811__auto____$1 = (cljs.core.truth_(r)?(a.call(null,j) < (r - 1)):true);if(and__13811__auto____$1)
{if(cljs.core.truth_(s))
{return (((s - b.call(null,j)) - ((((a.call(null,j) + 1) === b.call(null,j)))?1:0)) <= (n - j));
} else
{return true;
}
} else
{return and__13811__auto____$1;
}
} else
{return and__13811__auto__;
}
})())
{return j;
} else
{{
var G__332391 = (j - 1);
j = G__332391;
continue;
}
}
break;
}
})();if((j === 0))
{return cljs.core.List.EMPTY;
} else
{var a__$1 = foundation.app.data.combinatorics.update.call(null,a,j,cljs.core.inc);var x = (cljs.core.truth_(s)?(s - (b.call(null,j) + ((cljs.core._EQ_.call(null,a__$1.call(null,j),b.call(null,j)))?1:0))):null);var vec__332390 = (function (){var a__$2 = a__$1;var b__$1 = b;var i = (j + 1);var current_max = (b__$1.call(null,j) + (((b__$1.call(null,j) === a__$2.call(null,j)))?1:0));while(true){
if((i === n))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$2,b__$1], null);
} else
{if(cljs.core.truth_((function (){var and__13811__auto__ = s;if(cljs.core.truth_(and__13811__auto__))
{return (i > ((n - x) - 1));
} else
{return and__13811__auto__;
}
})()))
{var new_a_i = ((i - n) + s);{
var G__332392 = cljs.core.assoc.call(null,a__$2,i,new_a_i);
var G__332393 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__332394 = (i + 1);
var G__332395 = (function (){var x__14130__auto__ = current_max;var y__14131__auto__ = (new_a_i + 1);return ((x__14130__auto__ > y__14131__auto__) ? x__14130__auto__ : y__14131__auto__);
})();
a__$2 = G__332392;
b__$1 = G__332393;
i = G__332394;
current_max = G__332395;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__332396 = cljs.core.assoc.call(null,a__$2,i,0);
var G__332397 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__332398 = (i + 1);
var G__332399 = current_max;
a__$2 = G__332396;
b__$1 = G__332397;
i = G__332398;
current_max = G__332399;
continue;
}
} else
{return null;
}
}
}
break;
}
})();var a__$2 = cljs.core.nth.call(null,vec__332390,0,null);var b__$1 = cljs.core.nth.call(null,vec__332390,1,null);return growth_strings_H.call(null,n,a__$2,b__$1,r,s);
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
var lex_partitions_H__delegate = function (N,p__332400){var map__332406 = p__332400;var map__332406__$1 = ((cljs.core.seq_QMARK_.call(null,map__332406))?cljs.core.apply.call(null,cljs.core.hash_map,map__332406):map__332406);var from = cljs.core.get.call(null,map__332406__$1,new cljs.core.Keyword(null,"min","min",1014012356));var to = cljs.core.get.call(null,map__332406__$1,new cljs.core.Keyword(null,"max","max",1014012118));if(cljs.core._EQ_.call(null,N,0))
{if((((function (){var or__13823__auto__ = from;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return 0;
}
})() <= 0)) && ((0 <= (function (){var or__13823__auto__ = to;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return 0;
}
})())))
{return cljs.core.list(cljs.core.List.EMPTY);
} else
{return cljs.core.List.EMPTY;
}
} else
{var from__$1 = (cljs.core.truth_((function (){var and__13811__auto__ = from;if(cljs.core.truth_(and__13811__auto__))
{return (from <= 1);
} else
{return and__13811__auto__;
}
})())?null:from);var to__$1 = (cljs.core.truth_((function (){var and__13811__auto__ = to;if(cljs.core.truth_(and__13811__auto__))
{return (to >= N);
} else
{return and__13811__auto__;
}
})())?null:to);if(!(((1 <= (function (){var or__13823__auto__ = from__$1;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return 1;
}
})())) && ((((function (){var or__13823__auto__ = from__$1;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return 1;
}
})() <= (function (){var or__13823__auto__ = to__$1;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return N;
}
})())) && (((function (){var or__13823__auto__ = to__$1;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
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
{var growth_strings = foundation.app.data.combinatorics.growth_strings_H.call(null,N,to__$1,from__$1);var iter__14516__auto__ = (function iter__332407(s__332408){return (new cljs.core.LazySeq(null,(function (){var s__332408__$1 = s__332408;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__332408__$1);if(temp__4092__auto__)
{var s__332408__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__332408__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__332408__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__332410 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__332409 = 0;while(true){
if((i__332409 < size__14515__auto__))
{var growth_string = cljs.core._nth.call(null,c__14514__auto__,i__332409);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));cljs.core.chunk_append.call(null,b__332410,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))));
{
var G__332411 = (i__332409 + 1);
i__332409 = G__332411;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__332410),iter__332407.call(null,cljs.core.chunk_rest.call(null,s__332408__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__332410),null);
}
} else
{var growth_string = cljs.core.first.call(null,s__332408__$2);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));return cljs.core.cons.call(null,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))),iter__332407.call(null,cljs.core.rest.call(null,s__332408__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14516__auto__.call(null,growth_strings);
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
var p__332400 = null;if (arguments.length > 1) {
  p__332400 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return lex_partitions_H__delegate.call(this,N,p__332400);};
lex_partitions_H.cljs$lang$maxFixedArity = 1;
lex_partitions_H.cljs$lang$applyTo = (function (arglist__332412){
var N = cljs.core.first(arglist__332412);
var p__332400 = cljs.core.rest(arglist__332412);
return lex_partitions_H__delegate(N,p__332400);
});
lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic = lex_partitions_H__delegate;
return lex_partitions_H;
})()
;
/**
* @param {...*} var_args
*/
foundation.app.data.combinatorics.partitions_H = (function() { 
var partitions_H__delegate = function (items,args){var items__$1 = cljs.core.vec.call(null,items);var N = cljs.core.count.call(null,items__$1);var lex = cljs.core.apply.call(null,foundation.app.data.combinatorics.lex_partitions_H,N,args);var iter__14516__auto__ = (function iter__332433(s__332434){return (new cljs.core.LazySeq(null,(function (){var s__332434__$1 = s__332434;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__332434__$1);if(temp__4092__auto__)
{var s__332434__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__332434__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__332434__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__332436 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__332435 = 0;while(true){
if((i__332435 < size__14515__auto__))
{var parts = cljs.core._nth.call(null,c__14514__auto__,i__332435);cljs.core.chunk_append.call(null,b__332436,(function (){var iter__14516__auto__ = ((function (i__332435,parts,c__14514__auto__,size__14515__auto__,b__332436,s__332434__$2,temp__4092__auto__){
return (function iter__332445(s__332446){return (new cljs.core.LazySeq(null,((function (i__332435,parts,c__14514__auto__,size__14515__auto__,b__332436,s__332434__$2,temp__4092__auto__){
return (function (){var s__332446__$1 = s__332446;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__332446__$1);if(temp__4092__auto____$1)
{var s__332446__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__332446__$2))
{var c__14514__auto____$1 = cljs.core.chunk_first.call(null,s__332446__$2);var size__14515__auto____$1 = cljs.core.count.call(null,c__14514__auto____$1);var b__332448 = cljs.core.chunk_buffer.call(null,size__14515__auto____$1);if((function (){var i__332447 = 0;while(true){
if((i__332447 < size__14515__auto____$1))
{var part = cljs.core._nth.call(null,c__14514__auto____$1,i__332447);cljs.core.chunk_append.call(null,b__332448,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__332447,i__332435,part,c__14514__auto____$1,size__14515__auto____$1,b__332448,s__332446__$2,temp__4092__auto____$1,parts,c__14514__auto__,size__14515__auto__,b__332436,s__332434__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__332447,i__332435,part,c__14514__auto____$1,size__14515__auto____$1,b__332448,s__332446__$2,temp__4092__auto____$1,parts,c__14514__auto__,size__14515__auto__,b__332436,s__332434__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__332453 = (i__332447 + 1);
i__332447 = G__332453;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__332448),iter__332445.call(null,cljs.core.chunk_rest.call(null,s__332446__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__332448),null);
}
} else
{var part = cljs.core.first.call(null,s__332446__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__332435,part,s__332446__$2,temp__4092__auto____$1,parts,c__14514__auto__,size__14515__auto__,b__332436,s__332434__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__332435,part,s__332446__$2,temp__4092__auto____$1,parts,c__14514__auto__,size__14515__auto__,b__332436,s__332434__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__332445.call(null,cljs.core.rest.call(null,s__332446__$2)));
}
} else
{return null;
}
break;
}
});})(i__332435,parts,c__14514__auto__,size__14515__auto__,b__332436,s__332434__$2,temp__4092__auto__))
,null,null));
});})(i__332435,parts,c__14514__auto__,size__14515__auto__,b__332436,s__332434__$2,temp__4092__auto__))
;return iter__14516__auto__.call(null,parts);
})());
{
var G__332454 = (i__332435 + 1);
i__332435 = G__332454;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__332436),iter__332433.call(null,cljs.core.chunk_rest.call(null,s__332434__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__332436),null);
}
} else
{var parts = cljs.core.first.call(null,s__332434__$2);return cljs.core.cons.call(null,(function (){var iter__14516__auto__ = ((function (parts,s__332434__$2,temp__4092__auto__){
return (function iter__332449(s__332450){return (new cljs.core.LazySeq(null,((function (parts,s__332434__$2,temp__4092__auto__){
return (function (){var s__332450__$1 = s__332450;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__332450__$1);if(temp__4092__auto____$1)
{var s__332450__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__332450__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__332450__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__332452 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__332451 = 0;while(true){
if((i__332451 < size__14515__auto__))
{var part = cljs.core._nth.call(null,c__14514__auto__,i__332451);cljs.core.chunk_append.call(null,b__332452,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__332451,part,c__14514__auto__,size__14515__auto__,b__332452,s__332450__$2,temp__4092__auto____$1,parts,s__332434__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__332451,part,c__14514__auto__,size__14515__auto__,b__332452,s__332450__$2,temp__4092__auto____$1,parts,s__332434__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__332455 = (i__332451 + 1);
i__332451 = G__332455;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__332452),iter__332449.call(null,cljs.core.chunk_rest.call(null,s__332450__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__332452),null);
}
} else
{var part = cljs.core.first.call(null,s__332450__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (part,s__332450__$2,temp__4092__auto____$1,parts,s__332434__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(part,s__332450__$2,temp__4092__auto____$1,parts,s__332434__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__332449.call(null,cljs.core.rest.call(null,s__332450__$2)));
}
} else
{return null;
}
break;
}
});})(parts,s__332434__$2,temp__4092__auto__))
,null,null));
});})(parts,s__332434__$2,temp__4092__auto__))
;return iter__14516__auto__.call(null,parts);
})(),iter__332433.call(null,cljs.core.rest.call(null,s__332434__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14516__auto__.call(null,lex);
};
var partitions_H = function (items,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions_H__delegate.call(this,items,args);};
partitions_H.cljs$lang$maxFixedArity = 1;
partitions_H.cljs$lang$applyTo = (function (arglist__332456){
var items = cljs.core.first(arglist__332456);
var args = cljs.core.rest(arglist__332456);
return partitions_H__delegate(items,args);
});
partitions_H.cljs$core$IFn$_invoke$arity$variadic = partitions_H__delegate;
return partitions_H;
})()
;
foundation.app.data.combinatorics.multiset_partitions_M = (function() {
var multiset_partitions_M = null;
var multiset_partitions_M__3 = (function (multiset,r,s){var n = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,multiset));var m = cljs.core.count.call(null,multiset);var f = cljs.core.PersistentVector.EMPTY;var c = cljs.core.PersistentVector.EMPTY;var u = cljs.core.PersistentVector.EMPTY;var v = cljs.core.PersistentVector.EMPTY;var vec__332479 = (function (){var j = 0;var c__$1 = c;var u__$1 = u;var v__$1 = v;while(true){
if(cljs.core._EQ_.call(null,j,m))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,u__$1,v__$1], null);
} else
{{
var G__332501 = (j + 1);
var G__332502 = cljs.core.assoc.call(null,c__$1,j,(j + 1));
var G__332503 = cljs.core.assoc.call(null,u__$1,j,multiset.call(null,(j + 1)));
var G__332504 = cljs.core.assoc.call(null,v__$1,j,multiset.call(null,(j + 1)));
j = G__332501;
c__$1 = G__332502;
u__$1 = G__332503;
v__$1 = G__332504;
continue;
}
}
break;
}
})();var c__$1 = cljs.core.nth.call(null,vec__332479,0,null);var u__$1 = cljs.core.nth.call(null,vec__332479,1,null);var v__$1 = cljs.core.nth.call(null,vec__332479,2,null);var a = 0;var b = m;var l = 0;var f__$1 = cljs.core.assoc.call(null,f,0,0,1,m);var stack = cljs.core.List.EMPTY;return multiset_partitions_M.call(null,n,m,f__$1,c__$1,u__$1,v__$1,a,b,l,r,s);
});
var multiset_partitions_M__11 = (function (n,m,f,c,u,v,a,b,l,r,s){while(true){
var vec__332480 = (function (){var j = a;var k = b;var x = false;var u__$1 = u;var v__$1 = v;var c__$1 = c;while(true){
if((j >= b))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [u__$1,v__$1,c__$1,j,k], null);
} else
{var u__$2 = cljs.core.assoc.call(null,u__$1,k,(u__$1.call(null,j) - v__$1.call(null,j)));if(cljs.core._EQ_.call(null,u__$2.call(null,k),0))
{{
var G__332505 = (j + 1);
var G__332506 = k;
var G__332507 = true;
var G__332508 = u__$2;
var G__332509 = v__$1;
var G__332510 = c__$1;
j = G__332505;
k = G__332506;
x = G__332507;
u__$1 = G__332508;
v__$1 = G__332509;
c__$1 = G__332510;
continue;
}
} else
{if(!(x))
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,(function (){var x__14137__auto__ = v__$1.call(null,j);var y__14138__auto__ = u__$2.call(null,k);return ((x__14137__auto__ < y__14138__auto__) ? x__14137__auto__ : y__14138__auto__);
})());var x__$1 = (u__$2.call(null,k) < v__$2.call(null,j));var k__$1 = (k + 1);var j__$1 = (j + 1);{
var G__332511 = j__$1;
var G__332512 = k__$1;
var G__332513 = x__$1;
var G__332514 = u__$2;
var G__332515 = v__$2;
var G__332516 = c__$2;
j = G__332511;
k = G__332512;
x = G__332513;
u__$1 = G__332514;
v__$1 = G__332515;
c__$1 = G__332516;
continue;
}
} else
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,u__$2.call(null,k));var k__$1 = (k + 1);var j__$1 = (j + 1);{
var G__332517 = j__$1;
var G__332518 = k__$1;
var G__332519 = x;
var G__332520 = u__$2;
var G__332521 = v__$2;
var G__332522 = c__$2;
j = G__332517;
k = G__332518;
x = G__332519;
u__$1 = G__332520;
v__$1 = G__332521;
c__$1 = G__332522;
continue;
}
}
}
}
break;
}
})();var u__$1 = cljs.core.nth.call(null,vec__332480,0,null);var v__$1 = cljs.core.nth.call(null,vec__332480,1,null);var c__$1 = cljs.core.nth.call(null,vec__332480,2,null);var j = cljs.core.nth.call(null,vec__332480,3,null);var k = cljs.core.nth.call(null,vec__332480,4,null);if(cljs.core.truth_((function (){var and__13811__auto__ = r;if(cljs.core.truth_(and__13811__auto__))
{return ((k > b)) && (cljs.core._EQ_.call(null,l,(r - 1)));
} else
{return and__13811__auto__;
}
})()))
{return foundation.app.data.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
} else
{if(cljs.core.truth_((function (){var and__13811__auto__ = s;if(cljs.core.truth_(and__13811__auto__))
{return ((k <= b)) && (((l + 1) < s));
} else
{return and__13811__auto__;
}
})()))
{return foundation.app.data.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
} else
{if((k > b))
{var a__$1 = b;var b__$1 = k;var l__$1 = (l + 1);var f__$1 = cljs.core.assoc.call(null,f,(l__$1 + 1),b__$1);{
var G__332523 = n;
var G__332524 = m;
var G__332525 = f__$1;
var G__332526 = c__$1;
var G__332527 = u__$1;
var G__332528 = v__$1;
var G__332529 = a__$1;
var G__332530 = b__$1;
var G__332531 = l__$1;
var G__332532 = r;
var G__332533 = s;
n = G__332523;
m = G__332524;
f = G__332525;
c = G__332526;
u = G__332527;
v = G__332528;
a = G__332529;
b = G__332530;
l = G__332531;
r = G__332532;
s = G__332533;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var part = (function (){var iter__14516__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s){
return (function iter__332481(s__332482){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s){
return (function (){var s__332482__$1 = s__332482;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__332482__$1);if(temp__4092__auto__)
{var s__332482__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__332482__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__332482__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__332484 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__332483 = 0;while(true){
if((i__332483 < size__14515__auto__))
{var y = cljs.core._nth.call(null,c__14514__auto__,i__332483);cljs.core.chunk_append.call(null,b__332484,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + 1)) - 1);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__14516__auto__ = ((function (i__332483,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__14514__auto__,size__14515__auto__,b__332484,s__332482__$2,temp__4092__auto__){
return (function iter__332493(s__332494){return (new cljs.core.LazySeq(null,((function (i__332483,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__14514__auto__,size__14515__auto__,b__332484,s__332482__$2,temp__4092__auto__){
return (function (){var s__332494__$1 = s__332494;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__332494__$1);if(temp__4092__auto____$1)
{var s__332494__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__332494__$2))
{var c__14514__auto____$1 = cljs.core.chunk_first.call(null,s__332494__$2);var size__14515__auto____$1 = cljs.core.count.call(null,c__14514__auto____$1);var b__332496 = cljs.core.chunk_buffer.call(null,size__14515__auto____$1);if((function (){var i__332495 = 0;while(true){
if((i__332495 < size__14515__auto____$1))
{var z = cljs.core._nth.call(null,c__14514__auto____$1,i__332495);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{cljs.core.chunk_append.call(null,b__332496,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));
{
var G__332534 = (i__332495 + 1);
i__332495 = G__332534;
continue;
}
} else
{{
var G__332535 = (i__332495 + 1);
i__332495 = G__332535;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__332496),iter__332493.call(null,cljs.core.chunk_rest.call(null,s__332494__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__332496),null);
}
} else
{var z = cljs.core.first.call(null,s__332494__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),iter__332493.call(null,cljs.core.rest.call(null,s__332494__$2)));
} else
{{
var G__332536 = cljs.core.rest.call(null,s__332494__$2);
s__332494__$1 = G__332536;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__332483,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__14514__auto__,size__14515__auto__,b__332484,s__332482__$2,temp__4092__auto__))
,null,null));
});})(i__332483,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__14514__auto__,size__14515__auto__,b__332484,s__332482__$2,temp__4092__auto__))
;return iter__14516__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + 1)));
})());
})());
{
var G__332537 = (i__332483 + 1);
i__332483 = G__332537;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__332484),iter__332481.call(null,cljs.core.chunk_rest.call(null,s__332482__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__332484),null);
}
} else
{var y = cljs.core.first.call(null,s__332482__$2);return cljs.core.cons.call(null,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + 1)) - 1);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__14516__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__332482__$2,temp__4092__auto__){
return (function iter__332497(s__332498){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__332482__$2,temp__4092__auto__){
return (function (){var s__332498__$1 = s__332498;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__332498__$1);if(temp__4092__auto____$1)
{var s__332498__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__332498__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__332498__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__332500 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__332499 = 0;while(true){
if((i__332499 < size__14515__auto__))
{var z = cljs.core._nth.call(null,c__14514__auto__,i__332499);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{cljs.core.chunk_append.call(null,b__332500,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));
{
var G__332538 = (i__332499 + 1);
i__332499 = G__332538;
continue;
}
} else
{{
var G__332539 = (i__332499 + 1);
i__332499 = G__332539;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__332500),iter__332497.call(null,cljs.core.chunk_rest.call(null,s__332498__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__332500),null);
}
} else
{var z = cljs.core.first.call(null,s__332498__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),iter__332497.call(null,cljs.core.rest.call(null,s__332498__$2)));
} else
{{
var G__332540 = cljs.core.rest.call(null,s__332498__$2);
s__332498__$1 = G__332540;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__332482__$2,temp__4092__auto__))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__332482__$2,temp__4092__auto__))
;return iter__14516__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + 1)));
})());
})(),iter__332481.call(null,cljs.core.rest.call(null,s__332482__$2)));
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s))
;return iter__14516__auto__.call(null,cljs.core.range.call(null,(l + 1)));
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
var G__332549 = (j - 1);
j = G__332549;
continue;
}
}
break;
}
})();if(cljs.core.truth_((function (){var and__13811__auto__ = r;if(cljs.core.truth_(and__13811__auto__))
{return (cljs.core._EQ_.call(null,j,a)) && ((((v.call(null,j) - 1) * (r - l)) < u.call(null,j)));
} else
{return and__13811__auto__;
}
})()))
{return foundation.app.data.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s);
} else
{if((cljs.core._EQ_.call(null,j,a)) && (cljs.core._EQ_.call(null,v.call(null,j),1)))
{return foundation.app.data.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var v__$1 = foundation.app.data.combinatorics.update.call(null,v,j,cljs.core.dec);var diff_uv = (cljs.core.truth_(s)?cljs.core.apply.call(null,cljs.core._PLUS_,(function (){var iter__14516__auto__ = ((function (v__$1){
return (function iter__332545(s__332546){return (new cljs.core.LazySeq(null,((function (v__$1){
return (function (){var s__332546__$1 = s__332546;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__332546__$1);if(temp__4092__auto__)
{var s__332546__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__332546__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__332546__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__332548 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__332547 = 0;while(true){
if((i__332547 < size__14515__auto__))
{var i = cljs.core._nth.call(null,c__14514__auto__,i__332547);cljs.core.chunk_append.call(null,b__332548,(u.call(null,i) - v__$1.call(null,i)));
{
var G__332550 = (i__332547 + 1);
i__332547 = G__332550;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__332548),iter__332545.call(null,cljs.core.chunk_rest.call(null,s__332546__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__332548),null);
}
} else
{var i = cljs.core.first.call(null,s__332546__$2);return cljs.core.cons.call(null,(u.call(null,i) - v__$1.call(null,i)),iter__332545.call(null,cljs.core.rest.call(null,s__332546__$2)));
}
} else
{return null;
}
break;
}
});})(v__$1))
,null,null));
});})(v__$1))
;return iter__14516__auto__.call(null,cljs.core.range.call(null,a,(j + 1)));
})()):null);var v__$2 = (function (){var ks = cljs.core.range.call(null,(j + 1),b);var v__$2 = v__$1;while(true){
if(cljs.core.empty_QMARK_.call(null,ks))
{return v__$2;
} else
{var k = cljs.core.first.call(null,ks);{
var G__332551 = cljs.core.rest.call(null,ks);
var G__332552 = cljs.core.assoc.call(null,v__$2,k,u.call(null,k));
ks = G__332551;
v__$2 = G__332552;
continue;
}
}
break;
}
})();var min_partitions_after_this = (cljs.core.truth_(s)?(s - (l + 1)):0);var amount_to_dec = (cljs.core.truth_(s)?(function (){var x__14130__auto__ = 0;var y__14131__auto__ = (min_partitions_after_this - diff_uv);return ((x__14130__auto__ > y__14131__auto__) ? x__14130__auto__ : y__14131__auto__);
})():0);var v__$3 = ((cljs.core._EQ_.call(null,amount_to_dec,0))?v__$2:(function (){var k_1 = (b - 1);var v__$3 = v__$2;var amount = amount_to_dec;while(true){
var vk = v__$3.call(null,k_1);if((amount > vk))
{{
var G__332553 = (k_1 - 1);
var G__332554 = cljs.core.assoc.call(null,v__$3,k_1,0);
var G__332555 = (amount - vk);
k_1 = G__332553;
v__$3 = G__332554;
amount = G__332555;
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
var partitions_M__delegate = function (items,p__332556){var map__332614 = p__332556;var map__332614__$1 = ((cljs.core.seq_QMARK_.call(null,map__332614))?cljs.core.apply.call(null,cljs.core.hash_map,map__332614):map__332614);var from = cljs.core.get.call(null,map__332614__$1,new cljs.core.Keyword(null,"min","min",1014012356));var to = cljs.core.get.call(null,map__332614__$1,new cljs.core.Keyword(null,"max","max",1014012118));if(cljs.core._EQ_.call(null,cljs.core.count.call(null,items),0))
{if((((function (){var or__13823__auto__ = from;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return 0;
}
})() <= 0)) && ((0 <= (function (){var or__13823__auto__ = to;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return 0;
}
})())))
{return cljs.core.list(cljs.core.List.EMPTY);
} else
{return cljs.core.List.EMPTY;
}
} else
{var items__$1 = cljs.core.vec.call(null,items);var ditems = cljs.core.vec.call(null,cljs.core.distinct.call(null,items__$1));var freqs = cljs.core.frequencies.call(null,items__$1);var N = cljs.core.count.call(null,items__$1);var M = cljs.core.count.call(null,ditems);var from__$1 = (cljs.core.truth_((function (){var and__13811__auto__ = from;if(cljs.core.truth_(and__13811__auto__))
{return (from <= 1);
} else
{return and__13811__auto__;
}
})())?null:from);var to__$1 = (cljs.core.truth_((function (){var and__13811__auto__ = to;if(cljs.core.truth_(and__13811__auto__))
{return (to >= N);
} else
{return and__13811__auto__;
}
})())?null:to);if(!(((1 <= (function (){var or__13823__auto__ = from__$1;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return 1;
}
})())) && ((((function (){var or__13823__auto__ = from__$1;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return 1;
}
})() <= (function (){var or__13823__auto__ = to__$1;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return N;
}
})())) && (((function (){var or__13823__auto__ = to__$1;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
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
{var start_multiset = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__14516__auto__ = (function iter__332615(s__332616){return (new cljs.core.LazySeq(null,(function (){var s__332616__$1 = s__332616;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__332616__$1);if(temp__4092__auto__)
{var s__332616__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__332616__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__332616__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__332618 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__332617 = 0;while(true){
if((i__332617 < size__14515__auto__))
{var i = cljs.core._nth.call(null,c__14514__auto__,i__332617);var j = (i + 1);cljs.core.chunk_append.call(null,b__332618,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null));
{
var G__332671 = (i__332617 + 1);
i__332617 = G__332671;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__332618),iter__332615.call(null,cljs.core.chunk_rest.call(null,s__332616__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__332618),null);
}
} else
{var i = cljs.core.first.call(null,s__332616__$2);var j = (i + 1);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null),iter__332615.call(null,cljs.core.rest.call(null,s__332616__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14516__auto__.call(null,cljs.core.range.call(null,M));
})());var parts = foundation.app.data.combinatorics.multiset_partitions_M.call(null,start_multiset,to__$1,from__$1);var iter__14516__auto__ = (function iter__332619(s__332620){return (new cljs.core.LazySeq(null,(function (){var s__332620__$1 = s__332620;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__332620__$1);if(temp__4092__auto__)
{var s__332620__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__332620__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__332620__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__332622 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__332621 = 0;while(true){
if((i__332621 < size__14515__auto__))
{var part = cljs.core._nth.call(null,c__14514__auto__,i__332621);cljs.core.chunk_append.call(null,b__332622,(function (){var iter__14516__auto__ = ((function (i__332621,part,c__14514__auto__,size__14515__auto__,b__332622,s__332620__$2,temp__4092__auto__){
return (function iter__332647(s__332648){return (new cljs.core.LazySeq(null,((function (i__332621,part,c__14514__auto__,size__14515__auto__,b__332622,s__332620__$2,temp__4092__auto__){
return (function (){var s__332648__$1 = s__332648;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__332648__$1);if(temp__4092__auto____$1)
{var s__332648__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__332648__$2))
{var c__14514__auto____$1 = cljs.core.chunk_first.call(null,s__332648__$2);var size__14515__auto____$1 = cljs.core.count.call(null,c__14514__auto____$1);var b__332650 = cljs.core.chunk_buffer.call(null,size__14515__auto____$1);if((function (){var i__332649 = 0;while(true){
if((i__332649 < size__14515__auto____$1))
{var multiset = cljs.core._nth.call(null,c__14514__auto____$1,i__332649);cljs.core.chunk_append.call(null,b__332650,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__332649,i__332621,multiset,c__14514__auto____$1,size__14515__auto____$1,b__332650,s__332648__$2,temp__4092__auto____$1,part,c__14514__auto__,size__14515__auto__,b__332622,s__332620__$2,temp__4092__auto__){
return (function (p__332655){var vec__332656 = p__332655;var index = cljs.core.nth.call(null,vec__332656,0,null);var numtimes = cljs.core.nth.call(null,vec__332656,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__332649,i__332621,multiset,c__14514__auto____$1,size__14515__auto____$1,b__332650,s__332648__$2,temp__4092__auto____$1,part,c__14514__auto__,size__14515__auto__,b__332622,s__332620__$2,temp__4092__auto__))
,multiset)));
{
var G__332672 = (i__332649 + 1);
i__332649 = G__332672;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__332650),iter__332647.call(null,cljs.core.chunk_rest.call(null,s__332648__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__332650),null);
}
} else
{var multiset = cljs.core.first.call(null,s__332648__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__332621,multiset,s__332648__$2,temp__4092__auto____$1,part,c__14514__auto__,size__14515__auto__,b__332622,s__332620__$2,temp__4092__auto__){
return (function (p__332657){var vec__332658 = p__332657;var index = cljs.core.nth.call(null,vec__332658,0,null);var numtimes = cljs.core.nth.call(null,vec__332658,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__332621,multiset,s__332648__$2,temp__4092__auto____$1,part,c__14514__auto__,size__14515__auto__,b__332622,s__332620__$2,temp__4092__auto__))
,multiset)),iter__332647.call(null,cljs.core.rest.call(null,s__332648__$2)));
}
} else
{return null;
}
break;
}
});})(i__332621,part,c__14514__auto__,size__14515__auto__,b__332622,s__332620__$2,temp__4092__auto__))
,null,null));
});})(i__332621,part,c__14514__auto__,size__14515__auto__,b__332622,s__332620__$2,temp__4092__auto__))
;return iter__14516__auto__.call(null,part);
})());
{
var G__332673 = (i__332621 + 1);
i__332621 = G__332673;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__332622),iter__332619.call(null,cljs.core.chunk_rest.call(null,s__332620__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__332622),null);
}
} else
{var part = cljs.core.first.call(null,s__332620__$2);return cljs.core.cons.call(null,(function (){var iter__14516__auto__ = ((function (part,s__332620__$2,temp__4092__auto__){
return (function iter__332659(s__332660){return (new cljs.core.LazySeq(null,((function (part,s__332620__$2,temp__4092__auto__){
return (function (){var s__332660__$1 = s__332660;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__332660__$1);if(temp__4092__auto____$1)
{var s__332660__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__332660__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__332660__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__332662 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__332661 = 0;while(true){
if((i__332661 < size__14515__auto__))
{var multiset = cljs.core._nth.call(null,c__14514__auto__,i__332661);cljs.core.chunk_append.call(null,b__332662,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__332661,multiset,c__14514__auto__,size__14515__auto__,b__332662,s__332660__$2,temp__4092__auto____$1,part,s__332620__$2,temp__4092__auto__){
return (function (p__332667){var vec__332668 = p__332667;var index = cljs.core.nth.call(null,vec__332668,0,null);var numtimes = cljs.core.nth.call(null,vec__332668,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__332661,multiset,c__14514__auto__,size__14515__auto__,b__332662,s__332660__$2,temp__4092__auto____$1,part,s__332620__$2,temp__4092__auto__))
,multiset)));
{
var G__332674 = (i__332661 + 1);
i__332661 = G__332674;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__332662),iter__332659.call(null,cljs.core.chunk_rest.call(null,s__332660__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__332662),null);
}
} else
{var multiset = cljs.core.first.call(null,s__332660__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (multiset,s__332660__$2,temp__4092__auto____$1,part,s__332620__$2,temp__4092__auto__){
return (function (p__332669){var vec__332670 = p__332669;var index = cljs.core.nth.call(null,vec__332670,0,null);var numtimes = cljs.core.nth.call(null,vec__332670,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(multiset,s__332660__$2,temp__4092__auto____$1,part,s__332620__$2,temp__4092__auto__))
,multiset)),iter__332659.call(null,cljs.core.rest.call(null,s__332660__$2)));
}
} else
{return null;
}
break;
}
});})(part,s__332620__$2,temp__4092__auto__))
,null,null));
});})(part,s__332620__$2,temp__4092__auto__))
;return iter__14516__auto__.call(null,part);
})(),iter__332619.call(null,cljs.core.rest.call(null,s__332620__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14516__auto__.call(null,parts);
} else
{return null;
}
}
}
}
};
var partitions_M = function (items,var_args){
var p__332556 = null;if (arguments.length > 1) {
  p__332556 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions_M__delegate.call(this,items,p__332556);};
partitions_M.cljs$lang$maxFixedArity = 1;
partitions_M.cljs$lang$applyTo = (function (arglist__332675){
var items = cljs.core.first(arglist__332675);
var p__332556 = cljs.core.rest(arglist__332675);
return partitions_M__delegate(items,p__332556);
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
partitions.cljs$lang$applyTo = (function (arglist__332676){
var items = cljs.core.first(arglist__332676);
var args = cljs.core.rest(arglist__332676);
return partitions__delegate(items,args);
});
partitions.cljs$core$IFn$_invoke$arity$variadic = partitions__delegate;
return partitions;
})()
;

//# sourceMappingURL=combinatorics.js.map