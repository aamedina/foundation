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
var G__10421 = cljs.core.assoc.call(null,c__$2,(j__$1 - 1),(c__$2.call(null,j__$1) - 1));
var G__10422 = (j__$1 - 1);
c__$2 = G__10421;
j__$1 = G__10422;
continue;
}
}
break;
}
}
}
});
return (new cljs.core.LazySeq(null,(function (){var c = cljs.core.vec.call(null,cljs.core.cons.call(null,null,(function (){var iter__8926__auto__ = (function iter__10417(s__10418){return (new cljs.core.LazySeq(null,(function (){var s__10418__$1 = s__10418;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10418__$1);if(temp__4092__auto__)
{var s__10418__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10418__$2))
{var c__8924__auto__ = cljs.core.chunk_first.call(null,s__10418__$2);var size__8925__auto__ = cljs.core.count.call(null,c__8924__auto__);var b__10420 = cljs.core.chunk_buffer.call(null,size__8925__auto__);if((function (){var i__10419 = 0;while(true){
if((i__10419 < size__8925__auto__))
{var j = cljs.core._nth.call(null,c__8924__auto__,i__10419);cljs.core.chunk_append.call(null,b__10420,((j + cnt) + (- (n + 1))));
{
var G__10423 = (i__10419 + 1);
i__10419 = G__10423;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10420),iter__10417.call(null,cljs.core.chunk_rest.call(null,s__10418__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10420),null);
}
} else
{var j = cljs.core.first.call(null,s__10418__$2);return cljs.core.cons.call(null,((j + cnt) + (- (n + 1))),iter__10417.call(null,cljs.core.rest.call(null,s__10418__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8926__auto__.call(null,cljs.core.range.call(null,1,(n + 1)));
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
{return cljs.core.map.call(null,(function (p1__10424_SHARP_){return cljs.core.map.call(null,v_items,p1__10424_SHARP_);
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
var G__10425 = (i - 1);
var G__10426 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__10425;
v_seqs__$2 = G__10426;
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
cartesian_product.cljs$lang$applyTo = (function (arglist__10427){
var seqs = cljs.core.seq(arglist__10427);
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
var G__10428 = (i - 1);
i = G__10428;
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
var G__10429 = (i - 1);
i = G__10429;
continue;
}
}
break;
}
})();var v__$1 = cljs.core.assoc.call(null,v,j,v.call(null,l),l,vj);var k = (j + 1);var l__$1 = (len - 1);while(true){
if((k < l__$1))
{{
var G__10430 = cljs.core.assoc.call(null,v__$1,k,v__$1.call(null,l__$1),l__$1,v__$1.call(null,k));
var G__10431 = (k + 1);
var G__10432 = (l__$1 - 1);
v__$1 = G__10430;
k = G__10431;
l__$1 = G__10432;
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
foundation.app.data.combinatorics.multi_perm = (function multi_perm(l){var f = cljs.core.frequencies.call(null,l);var v = cljs.core.vec.call(null,cljs.core.keys.call(null,f));var indices = cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__8926__auto__ = ((function (f,v){
return (function iter__10437(s__10438){return (new cljs.core.LazySeq(null,((function (f,v){
return (function (){var s__10438__$1 = s__10438;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10438__$1);if(temp__4092__auto__)
{var s__10438__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10438__$2))
{var c__8924__auto__ = cljs.core.chunk_first.call(null,s__10438__$2);var size__8925__auto__ = cljs.core.count.call(null,c__8924__auto__);var b__10440 = cljs.core.chunk_buffer.call(null,size__8925__auto__);if((function (){var i__10439 = 0;while(true){
if((i__10439 < size__8925__auto__))
{var i = cljs.core._nth.call(null,c__8924__auto__,i__10439);cljs.core.chunk_append.call(null,b__10440,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));
{
var G__10441 = (i__10439 + 1);
i__10439 = G__10441;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10440),iter__10437.call(null,cljs.core.chunk_rest.call(null,s__10438__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10440),null);
}
} else
{var i = cljs.core.first.call(null,s__10438__$2);return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),iter__10437.call(null,cljs.core.rest.call(null,s__10438__$2)));
}
} else
{return null;
}
break;
}
});})(f,v))
,null,null));
});})(f,v))
;return iter__8926__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,v)));
})());return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.map,v),foundation.app.data.combinatorics.lex_permutations.call(null,indices));
});
/**
* All the distinct permutations of items, lexicographic by index.
*/
foundation.app.data.combinatorics.permutations = (function permutations(items){if(foundation.app.data.combinatorics.sorted_numbers_QMARK_.call(null,items))
{return foundation.app.data.combinatorics.lex_permutations.call(null,items);
} else
{if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core.distinct_QMARK_,items)))
{var v = cljs.core.vec.call(null,items);return cljs.core.map.call(null,(function (p1__10442_SHARP_){return cljs.core.map.call(null,v,p1__10442_SHARP_);
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
{return cljs.core.vec.call(null,(function (){var iter__8926__auto__ = (function iter__10447(s__10448){return (new cljs.core.LazySeq(null,(function (){var s__10448__$1 = s__10448;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10448__$1);if(temp__4092__auto__)
{var s__10448__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10448__$2))
{var c__8924__auto__ = cljs.core.chunk_first.call(null,s__10448__$2);var size__8925__auto__ = cljs.core.count.call(null,c__8924__auto__);var b__10450 = cljs.core.chunk_buffer.call(null,size__8925__auto__);if((function (){var i__10449 = 0;while(true){
if((i__10449 < size__8925__auto__))
{var i = cljs.core._nth.call(null,c__8924__auto__,i__10449);cljs.core.chunk_append.call(null,b__10450,(function (){var x__8540__auto__ = 0;var y__8541__auto__ = (i - ((n - s) - -1));return ((x__8540__auto__ > y__8541__auto__) ? x__8540__auto__ : y__8541__auto__);
})());
{
var G__10451 = (i__10449 + 1);
i__10449 = G__10451;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10450),iter__10447.call(null,cljs.core.chunk_rest.call(null,s__10448__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10450),null);
}
} else
{var i = cljs.core.first.call(null,s__10448__$2);return cljs.core.cons.call(null,(function (){var x__8540__auto__ = 0;var y__8541__auto__ = (i - ((n - s) - -1));return ((x__8540__auto__ > y__8541__auto__) ? x__8540__auto__ : y__8541__auto__);
})(),iter__10447.call(null,cljs.core.rest.call(null,s__10448__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8926__auto__.call(null,cljs.core.range.call(null,1,(n + 1)));
})());
} else
{return cljs.core.vec.call(null,cljs.core.repeat.call(null,n,0));
}
});
foundation.app.data.combinatorics.growth_strings_H = (function() {
var growth_strings_H = null;
var growth_strings_H__3 = (function (n,r,s){return growth_strings_H.call(null,n,foundation.app.data.combinatorics.init.call(null,n,s),cljs.core.vec.call(null,cljs.core.repeat.call(null,n,1)),r,s);
});
var growth_strings_H__5 = (function (n,a,b,r,s){return cljs.core.cons.call(null,a,(new cljs.core.LazySeq(null,(function (){if((function (){var and__8216__auto__ = (cljs.core.peek.call(null,b) > cljs.core.peek.call(null,a));if(and__8216__auto__)
{if(cljs.core.truth_(r))
{return (cljs.core.peek.call(null,a) < (r - 1));
} else
{return true;
}
} else
{return and__8216__auto__;
}
})())
{return growth_strings_H.call(null,n,foundation.app.data.combinatorics.update.call(null,a,(n - 1),cljs.core.inc),b,r,s);
} else
{var j = (function (){var j = (n - 2);while(true){
if((function (){var and__8216__auto__ = (a.call(null,j) < b.call(null,j));if(and__8216__auto__)
{var and__8216__auto____$1 = (cljs.core.truth_(r)?(a.call(null,j) < (r - 1)):true);if(and__8216__auto____$1)
{if(cljs.core.truth_(s))
{return (((s - b.call(null,j)) - ((((a.call(null,j) + 1) === b.call(null,j)))?1:0)) <= (n - j));
} else
{return true;
}
} else
{return and__8216__auto____$1;
}
} else
{return and__8216__auto__;
}
})())
{return j;
} else
{{
var G__10454 = (j - 1);
j = G__10454;
continue;
}
}
break;
}
})();if((j === 0))
{return cljs.core.List.EMPTY;
} else
{var a__$1 = foundation.app.data.combinatorics.update.call(null,a,j,cljs.core.inc);var x = (cljs.core.truth_(s)?(s - (b.call(null,j) + ((cljs.core._EQ_.call(null,a__$1.call(null,j),b.call(null,j)))?1:0))):null);var vec__10453 = (function (){var a__$2 = a__$1;var b__$1 = b;var i = (j + 1);var current_max = (b__$1.call(null,j) + (((b__$1.call(null,j) === a__$2.call(null,j)))?1:0));while(true){
if((i === n))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$2,b__$1], null);
} else
{if(cljs.core.truth_((function (){var and__8216__auto__ = s;if(cljs.core.truth_(and__8216__auto__))
{return (i > ((n - x) - 1));
} else
{return and__8216__auto__;
}
})()))
{var new_a_i = ((i - n) + s);{
var G__10455 = cljs.core.assoc.call(null,a__$2,i,new_a_i);
var G__10456 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__10457 = (i + 1);
var G__10458 = (function (){var x__8540__auto__ = current_max;var y__8541__auto__ = (new_a_i + 1);return ((x__8540__auto__ > y__8541__auto__) ? x__8540__auto__ : y__8541__auto__);
})();
a__$2 = G__10455;
b__$1 = G__10456;
i = G__10457;
current_max = G__10458;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__10459 = cljs.core.assoc.call(null,a__$2,i,0);
var G__10460 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__10461 = (i + 1);
var G__10462 = current_max;
a__$2 = G__10459;
b__$1 = G__10460;
i = G__10461;
current_max = G__10462;
continue;
}
} else
{return null;
}
}
}
break;
}
})();var a__$2 = cljs.core.nth.call(null,vec__10453,0,null);var b__$1 = cljs.core.nth.call(null,vec__10453,1,null);return growth_strings_H.call(null,n,a__$2,b__$1,r,s);
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
var lex_partitions_H__delegate = function (N,p__10463){var map__10469 = p__10463;var map__10469__$1 = ((cljs.core.seq_QMARK_.call(null,map__10469))?cljs.core.apply.call(null,cljs.core.hash_map,map__10469):map__10469);var from = cljs.core.get.call(null,map__10469__$1,new cljs.core.Keyword(null,"min","min",1014012356));var to = cljs.core.get.call(null,map__10469__$1,new cljs.core.Keyword(null,"max","max",1014012118));if(cljs.core._EQ_.call(null,N,0))
{if((((function (){var or__8228__auto__ = from;if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
} else
{return 0;
}
})() <= 0)) && ((0 <= (function (){var or__8228__auto__ = to;if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
} else
{return 0;
}
})())))
{return cljs.core.list(cljs.core.List.EMPTY);
} else
{return cljs.core.List.EMPTY;
}
} else
{var from__$1 = (cljs.core.truth_((function (){var and__8216__auto__ = from;if(cljs.core.truth_(and__8216__auto__))
{return (from <= 1);
} else
{return and__8216__auto__;
}
})())?null:from);var to__$1 = (cljs.core.truth_((function (){var and__8216__auto__ = to;if(cljs.core.truth_(and__8216__auto__))
{return (to >= N);
} else
{return and__8216__auto__;
}
})())?null:to);if(!(((1 <= (function (){var or__8228__auto__ = from__$1;if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
} else
{return 1;
}
})())) && ((((function (){var or__8228__auto__ = from__$1;if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
} else
{return 1;
}
})() <= (function (){var or__8228__auto__ = to__$1;if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
} else
{return N;
}
})())) && (((function (){var or__8228__auto__ = to__$1;if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
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
{var growth_strings = foundation.app.data.combinatorics.growth_strings_H.call(null,N,to__$1,from__$1);var iter__8926__auto__ = (function iter__10470(s__10471){return (new cljs.core.LazySeq(null,(function (){var s__10471__$1 = s__10471;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10471__$1);if(temp__4092__auto__)
{var s__10471__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10471__$2))
{var c__8924__auto__ = cljs.core.chunk_first.call(null,s__10471__$2);var size__8925__auto__ = cljs.core.count.call(null,c__8924__auto__);var b__10473 = cljs.core.chunk_buffer.call(null,size__8925__auto__);if((function (){var i__10472 = 0;while(true){
if((i__10472 < size__8925__auto__))
{var growth_string = cljs.core._nth.call(null,c__8924__auto__,i__10472);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));cljs.core.chunk_append.call(null,b__10473,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))));
{
var G__10474 = (i__10472 + 1);
i__10472 = G__10474;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10473),iter__10470.call(null,cljs.core.chunk_rest.call(null,s__10471__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10473),null);
}
} else
{var growth_string = cljs.core.first.call(null,s__10471__$2);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));return cljs.core.cons.call(null,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))),iter__10470.call(null,cljs.core.rest.call(null,s__10471__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8926__auto__.call(null,growth_strings);
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
var p__10463 = null;if (arguments.length > 1) {
  p__10463 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return lex_partitions_H__delegate.call(this,N,p__10463);};
lex_partitions_H.cljs$lang$maxFixedArity = 1;
lex_partitions_H.cljs$lang$applyTo = (function (arglist__10475){
var N = cljs.core.first(arglist__10475);
var p__10463 = cljs.core.rest(arglist__10475);
return lex_partitions_H__delegate(N,p__10463);
});
lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic = lex_partitions_H__delegate;
return lex_partitions_H;
})()
;
/**
* @param {...*} var_args
*/
foundation.app.data.combinatorics.partitions_H = (function() { 
var partitions_H__delegate = function (items,args){var items__$1 = cljs.core.vec.call(null,items);var N = cljs.core.count.call(null,items__$1);var lex = cljs.core.apply.call(null,foundation.app.data.combinatorics.lex_partitions_H,N,args);var iter__8926__auto__ = (function iter__10496(s__10497){return (new cljs.core.LazySeq(null,(function (){var s__10497__$1 = s__10497;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10497__$1);if(temp__4092__auto__)
{var s__10497__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10497__$2))
{var c__8924__auto__ = cljs.core.chunk_first.call(null,s__10497__$2);var size__8925__auto__ = cljs.core.count.call(null,c__8924__auto__);var b__10499 = cljs.core.chunk_buffer.call(null,size__8925__auto__);if((function (){var i__10498 = 0;while(true){
if((i__10498 < size__8925__auto__))
{var parts = cljs.core._nth.call(null,c__8924__auto__,i__10498);cljs.core.chunk_append.call(null,b__10499,(function (){var iter__8926__auto__ = ((function (i__10498,parts,c__8924__auto__,size__8925__auto__,b__10499,s__10497__$2,temp__4092__auto__){
return (function iter__10508(s__10509){return (new cljs.core.LazySeq(null,((function (i__10498,parts,c__8924__auto__,size__8925__auto__,b__10499,s__10497__$2,temp__4092__auto__){
return (function (){var s__10509__$1 = s__10509;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__10509__$1);if(temp__4092__auto____$1)
{var s__10509__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__10509__$2))
{var c__8924__auto____$1 = cljs.core.chunk_first.call(null,s__10509__$2);var size__8925__auto____$1 = cljs.core.count.call(null,c__8924__auto____$1);var b__10511 = cljs.core.chunk_buffer.call(null,size__8925__auto____$1);if((function (){var i__10510 = 0;while(true){
if((i__10510 < size__8925__auto____$1))
{var part = cljs.core._nth.call(null,c__8924__auto____$1,i__10510);cljs.core.chunk_append.call(null,b__10511,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__10510,i__10498,part,c__8924__auto____$1,size__8925__auto____$1,b__10511,s__10509__$2,temp__4092__auto____$1,parts,c__8924__auto__,size__8925__auto__,b__10499,s__10497__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__10510,i__10498,part,c__8924__auto____$1,size__8925__auto____$1,b__10511,s__10509__$2,temp__4092__auto____$1,parts,c__8924__auto__,size__8925__auto__,b__10499,s__10497__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__10516 = (i__10510 + 1);
i__10510 = G__10516;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10511),iter__10508.call(null,cljs.core.chunk_rest.call(null,s__10509__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10511),null);
}
} else
{var part = cljs.core.first.call(null,s__10509__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__10498,part,s__10509__$2,temp__4092__auto____$1,parts,c__8924__auto__,size__8925__auto__,b__10499,s__10497__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__10498,part,s__10509__$2,temp__4092__auto____$1,parts,c__8924__auto__,size__8925__auto__,b__10499,s__10497__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__10508.call(null,cljs.core.rest.call(null,s__10509__$2)));
}
} else
{return null;
}
break;
}
});})(i__10498,parts,c__8924__auto__,size__8925__auto__,b__10499,s__10497__$2,temp__4092__auto__))
,null,null));
});})(i__10498,parts,c__8924__auto__,size__8925__auto__,b__10499,s__10497__$2,temp__4092__auto__))
;return iter__8926__auto__.call(null,parts);
})());
{
var G__10517 = (i__10498 + 1);
i__10498 = G__10517;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10499),iter__10496.call(null,cljs.core.chunk_rest.call(null,s__10497__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10499),null);
}
} else
{var parts = cljs.core.first.call(null,s__10497__$2);return cljs.core.cons.call(null,(function (){var iter__8926__auto__ = ((function (parts,s__10497__$2,temp__4092__auto__){
return (function iter__10512(s__10513){return (new cljs.core.LazySeq(null,((function (parts,s__10497__$2,temp__4092__auto__){
return (function (){var s__10513__$1 = s__10513;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__10513__$1);if(temp__4092__auto____$1)
{var s__10513__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__10513__$2))
{var c__8924__auto__ = cljs.core.chunk_first.call(null,s__10513__$2);var size__8925__auto__ = cljs.core.count.call(null,c__8924__auto__);var b__10515 = cljs.core.chunk_buffer.call(null,size__8925__auto__);if((function (){var i__10514 = 0;while(true){
if((i__10514 < size__8925__auto__))
{var part = cljs.core._nth.call(null,c__8924__auto__,i__10514);cljs.core.chunk_append.call(null,b__10515,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__10514,part,c__8924__auto__,size__8925__auto__,b__10515,s__10513__$2,temp__4092__auto____$1,parts,s__10497__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__10514,part,c__8924__auto__,size__8925__auto__,b__10515,s__10513__$2,temp__4092__auto____$1,parts,s__10497__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__10518 = (i__10514 + 1);
i__10514 = G__10518;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10515),iter__10512.call(null,cljs.core.chunk_rest.call(null,s__10513__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10515),null);
}
} else
{var part = cljs.core.first.call(null,s__10513__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (part,s__10513__$2,temp__4092__auto____$1,parts,s__10497__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(part,s__10513__$2,temp__4092__auto____$1,parts,s__10497__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__10512.call(null,cljs.core.rest.call(null,s__10513__$2)));
}
} else
{return null;
}
break;
}
});})(parts,s__10497__$2,temp__4092__auto__))
,null,null));
});})(parts,s__10497__$2,temp__4092__auto__))
;return iter__8926__auto__.call(null,parts);
})(),iter__10496.call(null,cljs.core.rest.call(null,s__10497__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8926__auto__.call(null,lex);
};
var partitions_H = function (items,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions_H__delegate.call(this,items,args);};
partitions_H.cljs$lang$maxFixedArity = 1;
partitions_H.cljs$lang$applyTo = (function (arglist__10519){
var items = cljs.core.first(arglist__10519);
var args = cljs.core.rest(arglist__10519);
return partitions_H__delegate(items,args);
});
partitions_H.cljs$core$IFn$_invoke$arity$variadic = partitions_H__delegate;
return partitions_H;
})()
;
foundation.app.data.combinatorics.multiset_partitions_M = (function() {
var multiset_partitions_M = null;
var multiset_partitions_M__3 = (function (multiset,r,s){var n = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,multiset));var m = cljs.core.count.call(null,multiset);var f = cljs.core.PersistentVector.EMPTY;var c = cljs.core.PersistentVector.EMPTY;var u = cljs.core.PersistentVector.EMPTY;var v = cljs.core.PersistentVector.EMPTY;var vec__10542 = (function (){var j = 0;var c__$1 = c;var u__$1 = u;var v__$1 = v;while(true){
if(cljs.core._EQ_.call(null,j,m))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,u__$1,v__$1], null);
} else
{{
var G__10564 = (j + 1);
var G__10565 = cljs.core.assoc.call(null,c__$1,j,(j + 1));
var G__10566 = cljs.core.assoc.call(null,u__$1,j,multiset.call(null,(j + 1)));
var G__10567 = cljs.core.assoc.call(null,v__$1,j,multiset.call(null,(j + 1)));
j = G__10564;
c__$1 = G__10565;
u__$1 = G__10566;
v__$1 = G__10567;
continue;
}
}
break;
}
})();var c__$1 = cljs.core.nth.call(null,vec__10542,0,null);var u__$1 = cljs.core.nth.call(null,vec__10542,1,null);var v__$1 = cljs.core.nth.call(null,vec__10542,2,null);var a = 0;var b = m;var l = 0;var f__$1 = cljs.core.assoc.call(null,f,0,0,1,m);var stack = cljs.core.List.EMPTY;return multiset_partitions_M.call(null,n,m,f__$1,c__$1,u__$1,v__$1,a,b,l,r,s);
});
var multiset_partitions_M__11 = (function (n,m,f,c,u,v,a,b,l,r,s){while(true){
var vec__10543 = (function (){var j = a;var k = b;var x = false;var u__$1 = u;var v__$1 = v;var c__$1 = c;while(true){
if((j >= b))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [u__$1,v__$1,c__$1,j,k], null);
} else
{var u__$2 = cljs.core.assoc.call(null,u__$1,k,(u__$1.call(null,j) - v__$1.call(null,j)));if(cljs.core._EQ_.call(null,u__$2.call(null,k),0))
{{
var G__10568 = (j + 1);
var G__10569 = k;
var G__10570 = true;
var G__10571 = u__$2;
var G__10572 = v__$1;
var G__10573 = c__$1;
j = G__10568;
k = G__10569;
x = G__10570;
u__$1 = G__10571;
v__$1 = G__10572;
c__$1 = G__10573;
continue;
}
} else
{if(!(x))
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,(function (){var x__8547__auto__ = v__$1.call(null,j);var y__8548__auto__ = u__$2.call(null,k);return ((x__8547__auto__ < y__8548__auto__) ? x__8547__auto__ : y__8548__auto__);
})());var x__$1 = (u__$2.call(null,k) < v__$2.call(null,j));var k__$1 = (k + 1);var j__$1 = (j + 1);{
var G__10574 = j__$1;
var G__10575 = k__$1;
var G__10576 = x__$1;
var G__10577 = u__$2;
var G__10578 = v__$2;
var G__10579 = c__$2;
j = G__10574;
k = G__10575;
x = G__10576;
u__$1 = G__10577;
v__$1 = G__10578;
c__$1 = G__10579;
continue;
}
} else
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,u__$2.call(null,k));var k__$1 = (k + 1);var j__$1 = (j + 1);{
var G__10580 = j__$1;
var G__10581 = k__$1;
var G__10582 = x;
var G__10583 = u__$2;
var G__10584 = v__$2;
var G__10585 = c__$2;
j = G__10580;
k = G__10581;
x = G__10582;
u__$1 = G__10583;
v__$1 = G__10584;
c__$1 = G__10585;
continue;
}
}
}
}
break;
}
})();var u__$1 = cljs.core.nth.call(null,vec__10543,0,null);var v__$1 = cljs.core.nth.call(null,vec__10543,1,null);var c__$1 = cljs.core.nth.call(null,vec__10543,2,null);var j = cljs.core.nth.call(null,vec__10543,3,null);var k = cljs.core.nth.call(null,vec__10543,4,null);if(cljs.core.truth_((function (){var and__8216__auto__ = r;if(cljs.core.truth_(and__8216__auto__))
{return ((k > b)) && (cljs.core._EQ_.call(null,l,(r - 1)));
} else
{return and__8216__auto__;
}
})()))
{return foundation.app.data.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
} else
{if(cljs.core.truth_((function (){var and__8216__auto__ = s;if(cljs.core.truth_(and__8216__auto__))
{return ((k <= b)) && (((l + 1) < s));
} else
{return and__8216__auto__;
}
})()))
{return foundation.app.data.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
} else
{if((k > b))
{var a__$1 = b;var b__$1 = k;var l__$1 = (l + 1);var f__$1 = cljs.core.assoc.call(null,f,(l__$1 + 1),b__$1);{
var G__10586 = n;
var G__10587 = m;
var G__10588 = f__$1;
var G__10589 = c__$1;
var G__10590 = u__$1;
var G__10591 = v__$1;
var G__10592 = a__$1;
var G__10593 = b__$1;
var G__10594 = l__$1;
var G__10595 = r;
var G__10596 = s;
n = G__10586;
m = G__10587;
f = G__10588;
c = G__10589;
u = G__10590;
v = G__10591;
a = G__10592;
b = G__10593;
l = G__10594;
r = G__10595;
s = G__10596;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var part = (function (){var iter__8926__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s){
return (function iter__10544(s__10545){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s){
return (function (){var s__10545__$1 = s__10545;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10545__$1);if(temp__4092__auto__)
{var s__10545__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10545__$2))
{var c__8924__auto__ = cljs.core.chunk_first.call(null,s__10545__$2);var size__8925__auto__ = cljs.core.count.call(null,c__8924__auto__);var b__10547 = cljs.core.chunk_buffer.call(null,size__8925__auto__);if((function (){var i__10546 = 0;while(true){
if((i__10546 < size__8925__auto__))
{var y = cljs.core._nth.call(null,c__8924__auto__,i__10546);cljs.core.chunk_append.call(null,b__10547,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + 1)) - 1);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8926__auto__ = ((function (i__10546,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8924__auto__,size__8925__auto__,b__10547,s__10545__$2,temp__4092__auto__){
return (function iter__10556(s__10557){return (new cljs.core.LazySeq(null,((function (i__10546,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8924__auto__,size__8925__auto__,b__10547,s__10545__$2,temp__4092__auto__){
return (function (){var s__10557__$1 = s__10557;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__10557__$1);if(temp__4092__auto____$1)
{var s__10557__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__10557__$2))
{var c__8924__auto____$1 = cljs.core.chunk_first.call(null,s__10557__$2);var size__8925__auto____$1 = cljs.core.count.call(null,c__8924__auto____$1);var b__10559 = cljs.core.chunk_buffer.call(null,size__8925__auto____$1);if((function (){var i__10558 = 0;while(true){
if((i__10558 < size__8925__auto____$1))
{var z = cljs.core._nth.call(null,c__8924__auto____$1,i__10558);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{cljs.core.chunk_append.call(null,b__10559,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));
{
var G__10597 = (i__10558 + 1);
i__10558 = G__10597;
continue;
}
} else
{{
var G__10598 = (i__10558 + 1);
i__10558 = G__10598;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10559),iter__10556.call(null,cljs.core.chunk_rest.call(null,s__10557__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10559),null);
}
} else
{var z = cljs.core.first.call(null,s__10557__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),iter__10556.call(null,cljs.core.rest.call(null,s__10557__$2)));
} else
{{
var G__10599 = cljs.core.rest.call(null,s__10557__$2);
s__10557__$1 = G__10599;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__10546,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8924__auto__,size__8925__auto__,b__10547,s__10545__$2,temp__4092__auto__))
,null,null));
});})(i__10546,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8924__auto__,size__8925__auto__,b__10547,s__10545__$2,temp__4092__auto__))
;return iter__8926__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + 1)));
})());
})());
{
var G__10600 = (i__10546 + 1);
i__10546 = G__10600;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10547),iter__10544.call(null,cljs.core.chunk_rest.call(null,s__10545__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10547),null);
}
} else
{var y = cljs.core.first.call(null,s__10545__$2);return cljs.core.cons.call(null,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + 1)) - 1);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8926__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__10545__$2,temp__4092__auto__){
return (function iter__10560(s__10561){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__10545__$2,temp__4092__auto__){
return (function (){var s__10561__$1 = s__10561;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__10561__$1);if(temp__4092__auto____$1)
{var s__10561__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__10561__$2))
{var c__8924__auto__ = cljs.core.chunk_first.call(null,s__10561__$2);var size__8925__auto__ = cljs.core.count.call(null,c__8924__auto__);var b__10563 = cljs.core.chunk_buffer.call(null,size__8925__auto__);if((function (){var i__10562 = 0;while(true){
if((i__10562 < size__8925__auto__))
{var z = cljs.core._nth.call(null,c__8924__auto__,i__10562);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{cljs.core.chunk_append.call(null,b__10563,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));
{
var G__10601 = (i__10562 + 1);
i__10562 = G__10601;
continue;
}
} else
{{
var G__10602 = (i__10562 + 1);
i__10562 = G__10602;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10563),iter__10560.call(null,cljs.core.chunk_rest.call(null,s__10561__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10563),null);
}
} else
{var z = cljs.core.first.call(null,s__10561__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),iter__10560.call(null,cljs.core.rest.call(null,s__10561__$2)));
} else
{{
var G__10603 = cljs.core.rest.call(null,s__10561__$2);
s__10561__$1 = G__10603;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__10545__$2,temp__4092__auto__))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__10545__$2,temp__4092__auto__))
;return iter__8926__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + 1)));
})());
})(),iter__10544.call(null,cljs.core.rest.call(null,s__10545__$2)));
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s))
;return iter__8926__auto__.call(null,cljs.core.range.call(null,(l + 1)));
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
var G__10612 = (j - 1);
j = G__10612;
continue;
}
}
break;
}
})();if(cljs.core.truth_((function (){var and__8216__auto__ = r;if(cljs.core.truth_(and__8216__auto__))
{return (cljs.core._EQ_.call(null,j,a)) && ((((v.call(null,j) - 1) * (r - l)) < u.call(null,j)));
} else
{return and__8216__auto__;
}
})()))
{return foundation.app.data.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s);
} else
{if((cljs.core._EQ_.call(null,j,a)) && (cljs.core._EQ_.call(null,v.call(null,j),1)))
{return foundation.app.data.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var v__$1 = foundation.app.data.combinatorics.update.call(null,v,j,cljs.core.dec);var diff_uv = (cljs.core.truth_(s)?cljs.core.apply.call(null,cljs.core._PLUS_,(function (){var iter__8926__auto__ = ((function (v__$1){
return (function iter__10608(s__10609){return (new cljs.core.LazySeq(null,((function (v__$1){
return (function (){var s__10609__$1 = s__10609;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10609__$1);if(temp__4092__auto__)
{var s__10609__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10609__$2))
{var c__8924__auto__ = cljs.core.chunk_first.call(null,s__10609__$2);var size__8925__auto__ = cljs.core.count.call(null,c__8924__auto__);var b__10611 = cljs.core.chunk_buffer.call(null,size__8925__auto__);if((function (){var i__10610 = 0;while(true){
if((i__10610 < size__8925__auto__))
{var i = cljs.core._nth.call(null,c__8924__auto__,i__10610);cljs.core.chunk_append.call(null,b__10611,(u.call(null,i) - v__$1.call(null,i)));
{
var G__10613 = (i__10610 + 1);
i__10610 = G__10613;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10611),iter__10608.call(null,cljs.core.chunk_rest.call(null,s__10609__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10611),null);
}
} else
{var i = cljs.core.first.call(null,s__10609__$2);return cljs.core.cons.call(null,(u.call(null,i) - v__$1.call(null,i)),iter__10608.call(null,cljs.core.rest.call(null,s__10609__$2)));
}
} else
{return null;
}
break;
}
});})(v__$1))
,null,null));
});})(v__$1))
;return iter__8926__auto__.call(null,cljs.core.range.call(null,a,(j + 1)));
})()):null);var v__$2 = (function (){var ks = cljs.core.range.call(null,(j + 1),b);var v__$2 = v__$1;while(true){
if(cljs.core.empty_QMARK_.call(null,ks))
{return v__$2;
} else
{var k = cljs.core.first.call(null,ks);{
var G__10614 = cljs.core.rest.call(null,ks);
var G__10615 = cljs.core.assoc.call(null,v__$2,k,u.call(null,k));
ks = G__10614;
v__$2 = G__10615;
continue;
}
}
break;
}
})();var min_partitions_after_this = (cljs.core.truth_(s)?(s - (l + 1)):0);var amount_to_dec = (cljs.core.truth_(s)?(function (){var x__8540__auto__ = 0;var y__8541__auto__ = (min_partitions_after_this - diff_uv);return ((x__8540__auto__ > y__8541__auto__) ? x__8540__auto__ : y__8541__auto__);
})():0);var v__$3 = ((cljs.core._EQ_.call(null,amount_to_dec,0))?v__$2:(function (){var k_1 = (b - 1);var v__$3 = v__$2;var amount = amount_to_dec;while(true){
var vk = v__$3.call(null,k_1);if((amount > vk))
{{
var G__10616 = (k_1 - 1);
var G__10617 = cljs.core.assoc.call(null,v__$3,k_1,0);
var G__10618 = (amount - vk);
k_1 = G__10616;
v__$3 = G__10617;
amount = G__10618;
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
var partitions_M__delegate = function (items,p__10619){var map__10677 = p__10619;var map__10677__$1 = ((cljs.core.seq_QMARK_.call(null,map__10677))?cljs.core.apply.call(null,cljs.core.hash_map,map__10677):map__10677);var from = cljs.core.get.call(null,map__10677__$1,new cljs.core.Keyword(null,"min","min",1014012356));var to = cljs.core.get.call(null,map__10677__$1,new cljs.core.Keyword(null,"max","max",1014012118));if(cljs.core._EQ_.call(null,cljs.core.count.call(null,items),0))
{if((((function (){var or__8228__auto__ = from;if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
} else
{return 0;
}
})() <= 0)) && ((0 <= (function (){var or__8228__auto__ = to;if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
} else
{return 0;
}
})())))
{return cljs.core.list(cljs.core.List.EMPTY);
} else
{return cljs.core.List.EMPTY;
}
} else
{var items__$1 = cljs.core.vec.call(null,items);var ditems = cljs.core.vec.call(null,cljs.core.distinct.call(null,items__$1));var freqs = cljs.core.frequencies.call(null,items__$1);var N = cljs.core.count.call(null,items__$1);var M = cljs.core.count.call(null,ditems);var from__$1 = (cljs.core.truth_((function (){var and__8216__auto__ = from;if(cljs.core.truth_(and__8216__auto__))
{return (from <= 1);
} else
{return and__8216__auto__;
}
})())?null:from);var to__$1 = (cljs.core.truth_((function (){var and__8216__auto__ = to;if(cljs.core.truth_(and__8216__auto__))
{return (to >= N);
} else
{return and__8216__auto__;
}
})())?null:to);if(!(((1 <= (function (){var or__8228__auto__ = from__$1;if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
} else
{return 1;
}
})())) && ((((function (){var or__8228__auto__ = from__$1;if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
} else
{return 1;
}
})() <= (function (){var or__8228__auto__ = to__$1;if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
} else
{return N;
}
})())) && (((function (){var or__8228__auto__ = to__$1;if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
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
{var start_multiset = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8926__auto__ = (function iter__10678(s__10679){return (new cljs.core.LazySeq(null,(function (){var s__10679__$1 = s__10679;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10679__$1);if(temp__4092__auto__)
{var s__10679__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10679__$2))
{var c__8924__auto__ = cljs.core.chunk_first.call(null,s__10679__$2);var size__8925__auto__ = cljs.core.count.call(null,c__8924__auto__);var b__10681 = cljs.core.chunk_buffer.call(null,size__8925__auto__);if((function (){var i__10680 = 0;while(true){
if((i__10680 < size__8925__auto__))
{var i = cljs.core._nth.call(null,c__8924__auto__,i__10680);var j = (i + 1);cljs.core.chunk_append.call(null,b__10681,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null));
{
var G__10734 = (i__10680 + 1);
i__10680 = G__10734;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10681),iter__10678.call(null,cljs.core.chunk_rest.call(null,s__10679__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10681),null);
}
} else
{var i = cljs.core.first.call(null,s__10679__$2);var j = (i + 1);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null),iter__10678.call(null,cljs.core.rest.call(null,s__10679__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8926__auto__.call(null,cljs.core.range.call(null,M));
})());var parts = foundation.app.data.combinatorics.multiset_partitions_M.call(null,start_multiset,to__$1,from__$1);var iter__8926__auto__ = (function iter__10682(s__10683){return (new cljs.core.LazySeq(null,(function (){var s__10683__$1 = s__10683;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10683__$1);if(temp__4092__auto__)
{var s__10683__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10683__$2))
{var c__8924__auto__ = cljs.core.chunk_first.call(null,s__10683__$2);var size__8925__auto__ = cljs.core.count.call(null,c__8924__auto__);var b__10685 = cljs.core.chunk_buffer.call(null,size__8925__auto__);if((function (){var i__10684 = 0;while(true){
if((i__10684 < size__8925__auto__))
{var part = cljs.core._nth.call(null,c__8924__auto__,i__10684);cljs.core.chunk_append.call(null,b__10685,(function (){var iter__8926__auto__ = ((function (i__10684,part,c__8924__auto__,size__8925__auto__,b__10685,s__10683__$2,temp__4092__auto__){
return (function iter__10710(s__10711){return (new cljs.core.LazySeq(null,((function (i__10684,part,c__8924__auto__,size__8925__auto__,b__10685,s__10683__$2,temp__4092__auto__){
return (function (){var s__10711__$1 = s__10711;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__10711__$1);if(temp__4092__auto____$1)
{var s__10711__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__10711__$2))
{var c__8924__auto____$1 = cljs.core.chunk_first.call(null,s__10711__$2);var size__8925__auto____$1 = cljs.core.count.call(null,c__8924__auto____$1);var b__10713 = cljs.core.chunk_buffer.call(null,size__8925__auto____$1);if((function (){var i__10712 = 0;while(true){
if((i__10712 < size__8925__auto____$1))
{var multiset = cljs.core._nth.call(null,c__8924__auto____$1,i__10712);cljs.core.chunk_append.call(null,b__10713,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__10712,i__10684,multiset,c__8924__auto____$1,size__8925__auto____$1,b__10713,s__10711__$2,temp__4092__auto____$1,part,c__8924__auto__,size__8925__auto__,b__10685,s__10683__$2,temp__4092__auto__){
return (function (p__10718){var vec__10719 = p__10718;var index = cljs.core.nth.call(null,vec__10719,0,null);var numtimes = cljs.core.nth.call(null,vec__10719,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__10712,i__10684,multiset,c__8924__auto____$1,size__8925__auto____$1,b__10713,s__10711__$2,temp__4092__auto____$1,part,c__8924__auto__,size__8925__auto__,b__10685,s__10683__$2,temp__4092__auto__))
,multiset)));
{
var G__10735 = (i__10712 + 1);
i__10712 = G__10735;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10713),iter__10710.call(null,cljs.core.chunk_rest.call(null,s__10711__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10713),null);
}
} else
{var multiset = cljs.core.first.call(null,s__10711__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__10684,multiset,s__10711__$2,temp__4092__auto____$1,part,c__8924__auto__,size__8925__auto__,b__10685,s__10683__$2,temp__4092__auto__){
return (function (p__10720){var vec__10721 = p__10720;var index = cljs.core.nth.call(null,vec__10721,0,null);var numtimes = cljs.core.nth.call(null,vec__10721,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__10684,multiset,s__10711__$2,temp__4092__auto____$1,part,c__8924__auto__,size__8925__auto__,b__10685,s__10683__$2,temp__4092__auto__))
,multiset)),iter__10710.call(null,cljs.core.rest.call(null,s__10711__$2)));
}
} else
{return null;
}
break;
}
});})(i__10684,part,c__8924__auto__,size__8925__auto__,b__10685,s__10683__$2,temp__4092__auto__))
,null,null));
});})(i__10684,part,c__8924__auto__,size__8925__auto__,b__10685,s__10683__$2,temp__4092__auto__))
;return iter__8926__auto__.call(null,part);
})());
{
var G__10736 = (i__10684 + 1);
i__10684 = G__10736;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10685),iter__10682.call(null,cljs.core.chunk_rest.call(null,s__10683__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10685),null);
}
} else
{var part = cljs.core.first.call(null,s__10683__$2);return cljs.core.cons.call(null,(function (){var iter__8926__auto__ = ((function (part,s__10683__$2,temp__4092__auto__){
return (function iter__10722(s__10723){return (new cljs.core.LazySeq(null,((function (part,s__10683__$2,temp__4092__auto__){
return (function (){var s__10723__$1 = s__10723;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__10723__$1);if(temp__4092__auto____$1)
{var s__10723__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__10723__$2))
{var c__8924__auto__ = cljs.core.chunk_first.call(null,s__10723__$2);var size__8925__auto__ = cljs.core.count.call(null,c__8924__auto__);var b__10725 = cljs.core.chunk_buffer.call(null,size__8925__auto__);if((function (){var i__10724 = 0;while(true){
if((i__10724 < size__8925__auto__))
{var multiset = cljs.core._nth.call(null,c__8924__auto__,i__10724);cljs.core.chunk_append.call(null,b__10725,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__10724,multiset,c__8924__auto__,size__8925__auto__,b__10725,s__10723__$2,temp__4092__auto____$1,part,s__10683__$2,temp__4092__auto__){
return (function (p__10730){var vec__10731 = p__10730;var index = cljs.core.nth.call(null,vec__10731,0,null);var numtimes = cljs.core.nth.call(null,vec__10731,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__10724,multiset,c__8924__auto__,size__8925__auto__,b__10725,s__10723__$2,temp__4092__auto____$1,part,s__10683__$2,temp__4092__auto__))
,multiset)));
{
var G__10737 = (i__10724 + 1);
i__10724 = G__10737;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10725),iter__10722.call(null,cljs.core.chunk_rest.call(null,s__10723__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10725),null);
}
} else
{var multiset = cljs.core.first.call(null,s__10723__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (multiset,s__10723__$2,temp__4092__auto____$1,part,s__10683__$2,temp__4092__auto__){
return (function (p__10732){var vec__10733 = p__10732;var index = cljs.core.nth.call(null,vec__10733,0,null);var numtimes = cljs.core.nth.call(null,vec__10733,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(multiset,s__10723__$2,temp__4092__auto____$1,part,s__10683__$2,temp__4092__auto__))
,multiset)),iter__10722.call(null,cljs.core.rest.call(null,s__10723__$2)));
}
} else
{return null;
}
break;
}
});})(part,s__10683__$2,temp__4092__auto__))
,null,null));
});})(part,s__10683__$2,temp__4092__auto__))
;return iter__8926__auto__.call(null,part);
})(),iter__10682.call(null,cljs.core.rest.call(null,s__10683__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8926__auto__.call(null,parts);
} else
{return null;
}
}
}
}
};
var partitions_M = function (items,var_args){
var p__10619 = null;if (arguments.length > 1) {
  p__10619 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions_M__delegate.call(this,items,p__10619);};
partitions_M.cljs$lang$maxFixedArity = 1;
partitions_M.cljs$lang$applyTo = (function (arglist__10738){
var items = cljs.core.first(arglist__10738);
var p__10619 = cljs.core.rest(arglist__10738);
return partitions_M__delegate(items,p__10619);
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
partitions.cljs$lang$applyTo = (function (arglist__10739){
var items = cljs.core.first(arglist__10739);
var args = cljs.core.rest(arglist__10739);
return partitions__delegate(items,args);
});
partitions.cljs$core$IFn$_invoke$arity$variadic = partitions__delegate;
return partitions;
})()
;

//# sourceMappingURL=combinatorics.js.map