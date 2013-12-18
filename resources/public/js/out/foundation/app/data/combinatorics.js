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
var G__79529 = cljs.core.assoc.call(null,c__$2,(j__$1 - 1),(c__$2.call(null,j__$1) - 1));
var G__79530 = (j__$1 - 1);
c__$2 = G__79529;
j__$1 = G__79530;
continue;
}
}
break;
}
}
}
});
return (new cljs.core.LazySeq(null,(function (){var c = cljs.core.vec.call(null,cljs.core.cons.call(null,null,(function (){var iter__8926__auto__ = (function iter__79525(s__79526){return (new cljs.core.LazySeq(null,(function (){var s__79526__$1 = s__79526;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__79526__$1);if(temp__4092__auto__)
{var s__79526__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__79526__$2))
{var c__8924__auto__ = cljs.core.chunk_first.call(null,s__79526__$2);var size__8925__auto__ = cljs.core.count.call(null,c__8924__auto__);var b__79528 = cljs.core.chunk_buffer.call(null,size__8925__auto__);if((function (){var i__79527 = 0;while(true){
if((i__79527 < size__8925__auto__))
{var j = cljs.core._nth.call(null,c__8924__auto__,i__79527);cljs.core.chunk_append.call(null,b__79528,((j + cnt) + (- (n + 1))));
{
var G__79531 = (i__79527 + 1);
i__79527 = G__79531;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__79528),iter__79525.call(null,cljs.core.chunk_rest.call(null,s__79526__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__79528),null);
}
} else
{var j = cljs.core.first.call(null,s__79526__$2);return cljs.core.cons.call(null,((j + cnt) + (- (n + 1))),iter__79525.call(null,cljs.core.rest.call(null,s__79526__$2)));
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
{return cljs.core.map.call(null,(function (p1__79532_SHARP_){return cljs.core.map.call(null,v_items,p1__79532_SHARP_);
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
var G__79533 = (i - 1);
var G__79534 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__79533;
v_seqs__$2 = G__79534;
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
cartesian_product.cljs$lang$applyTo = (function (arglist__79535){
var seqs = cljs.core.seq(arglist__79535);
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
var G__79536 = (i - 1);
i = G__79536;
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
var G__79537 = (i - 1);
i = G__79537;
continue;
}
}
break;
}
})();var v__$1 = cljs.core.assoc.call(null,v,j,v.call(null,l),l,vj);var k = (j + 1);var l__$1 = (len - 1);while(true){
if((k < l__$1))
{{
var G__79538 = cljs.core.assoc.call(null,v__$1,k,v__$1.call(null,l__$1),l__$1,v__$1.call(null,k));
var G__79539 = (k + 1);
var G__79540 = (l__$1 - 1);
v__$1 = G__79538;
k = G__79539;
l__$1 = G__79540;
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
return (function iter__79545(s__79546){return (new cljs.core.LazySeq(null,((function (f,v){
return (function (){var s__79546__$1 = s__79546;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__79546__$1);if(temp__4092__auto__)
{var s__79546__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__79546__$2))
{var c__8924__auto__ = cljs.core.chunk_first.call(null,s__79546__$2);var size__8925__auto__ = cljs.core.count.call(null,c__8924__auto__);var b__79548 = cljs.core.chunk_buffer.call(null,size__8925__auto__);if((function (){var i__79547 = 0;while(true){
if((i__79547 < size__8925__auto__))
{var i = cljs.core._nth.call(null,c__8924__auto__,i__79547);cljs.core.chunk_append.call(null,b__79548,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));
{
var G__79549 = (i__79547 + 1);
i__79547 = G__79549;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__79548),iter__79545.call(null,cljs.core.chunk_rest.call(null,s__79546__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__79548),null);
}
} else
{var i = cljs.core.first.call(null,s__79546__$2);return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),iter__79545.call(null,cljs.core.rest.call(null,s__79546__$2)));
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
{var v = cljs.core.vec.call(null,items);return cljs.core.map.call(null,(function (p1__79550_SHARP_){return cljs.core.map.call(null,v,p1__79550_SHARP_);
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
{return cljs.core.vec.call(null,(function (){var iter__8926__auto__ = (function iter__79555(s__79556){return (new cljs.core.LazySeq(null,(function (){var s__79556__$1 = s__79556;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__79556__$1);if(temp__4092__auto__)
{var s__79556__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__79556__$2))
{var c__8924__auto__ = cljs.core.chunk_first.call(null,s__79556__$2);var size__8925__auto__ = cljs.core.count.call(null,c__8924__auto__);var b__79558 = cljs.core.chunk_buffer.call(null,size__8925__auto__);if((function (){var i__79557 = 0;while(true){
if((i__79557 < size__8925__auto__))
{var i = cljs.core._nth.call(null,c__8924__auto__,i__79557);cljs.core.chunk_append.call(null,b__79558,(function (){var x__8540__auto__ = 0;var y__8541__auto__ = (i - ((n - s) - -1));return ((x__8540__auto__ > y__8541__auto__) ? x__8540__auto__ : y__8541__auto__);
})());
{
var G__79559 = (i__79557 + 1);
i__79557 = G__79559;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__79558),iter__79555.call(null,cljs.core.chunk_rest.call(null,s__79556__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__79558),null);
}
} else
{var i = cljs.core.first.call(null,s__79556__$2);return cljs.core.cons.call(null,(function (){var x__8540__auto__ = 0;var y__8541__auto__ = (i - ((n - s) - -1));return ((x__8540__auto__ > y__8541__auto__) ? x__8540__auto__ : y__8541__auto__);
})(),iter__79555.call(null,cljs.core.rest.call(null,s__79556__$2)));
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
var G__79562 = (j - 1);
j = G__79562;
continue;
}
}
break;
}
})();if((j === 0))
{return cljs.core.List.EMPTY;
} else
{var a__$1 = foundation.app.data.combinatorics.update.call(null,a,j,cljs.core.inc);var x = (cljs.core.truth_(s)?(s - (b.call(null,j) + ((cljs.core._EQ_.call(null,a__$1.call(null,j),b.call(null,j)))?1:0))):null);var vec__79561 = (function (){var a__$2 = a__$1;var b__$1 = b;var i = (j + 1);var current_max = (b__$1.call(null,j) + (((b__$1.call(null,j) === a__$2.call(null,j)))?1:0));while(true){
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
var G__79563 = cljs.core.assoc.call(null,a__$2,i,new_a_i);
var G__79564 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__79565 = (i + 1);
var G__79566 = (function (){var x__8540__auto__ = current_max;var y__8541__auto__ = (new_a_i + 1);return ((x__8540__auto__ > y__8541__auto__) ? x__8540__auto__ : y__8541__auto__);
})();
a__$2 = G__79563;
b__$1 = G__79564;
i = G__79565;
current_max = G__79566;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__79567 = cljs.core.assoc.call(null,a__$2,i,0);
var G__79568 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__79569 = (i + 1);
var G__79570 = current_max;
a__$2 = G__79567;
b__$1 = G__79568;
i = G__79569;
current_max = G__79570;
continue;
}
} else
{return null;
}
}
}
break;
}
})();var a__$2 = cljs.core.nth.call(null,vec__79561,0,null);var b__$1 = cljs.core.nth.call(null,vec__79561,1,null);return growth_strings_H.call(null,n,a__$2,b__$1,r,s);
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
var lex_partitions_H__delegate = function (N,p__79571){var map__79577 = p__79571;var map__79577__$1 = ((cljs.core.seq_QMARK_.call(null,map__79577))?cljs.core.apply.call(null,cljs.core.hash_map,map__79577):map__79577);var from = cljs.core.get.call(null,map__79577__$1,new cljs.core.Keyword(null,"min","min",1014012356));var to = cljs.core.get.call(null,map__79577__$1,new cljs.core.Keyword(null,"max","max",1014012118));if(cljs.core._EQ_.call(null,N,0))
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
{var growth_strings = foundation.app.data.combinatorics.growth_strings_H.call(null,N,to__$1,from__$1);var iter__8926__auto__ = (function iter__79578(s__79579){return (new cljs.core.LazySeq(null,(function (){var s__79579__$1 = s__79579;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__79579__$1);if(temp__4092__auto__)
{var s__79579__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__79579__$2))
{var c__8924__auto__ = cljs.core.chunk_first.call(null,s__79579__$2);var size__8925__auto__ = cljs.core.count.call(null,c__8924__auto__);var b__79581 = cljs.core.chunk_buffer.call(null,size__8925__auto__);if((function (){var i__79580 = 0;while(true){
if((i__79580 < size__8925__auto__))
{var growth_string = cljs.core._nth.call(null,c__8924__auto__,i__79580);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));cljs.core.chunk_append.call(null,b__79581,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))));
{
var G__79582 = (i__79580 + 1);
i__79580 = G__79582;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__79581),iter__79578.call(null,cljs.core.chunk_rest.call(null,s__79579__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__79581),null);
}
} else
{var growth_string = cljs.core.first.call(null,s__79579__$2);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));return cljs.core.cons.call(null,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))),iter__79578.call(null,cljs.core.rest.call(null,s__79579__$2)));
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
var p__79571 = null;if (arguments.length > 1) {
  p__79571 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return lex_partitions_H__delegate.call(this,N,p__79571);};
lex_partitions_H.cljs$lang$maxFixedArity = 1;
lex_partitions_H.cljs$lang$applyTo = (function (arglist__79583){
var N = cljs.core.first(arglist__79583);
var p__79571 = cljs.core.rest(arglist__79583);
return lex_partitions_H__delegate(N,p__79571);
});
lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic = lex_partitions_H__delegate;
return lex_partitions_H;
})()
;
/**
* @param {...*} var_args
*/
foundation.app.data.combinatorics.partitions_H = (function() { 
var partitions_H__delegate = function (items,args){var items__$1 = cljs.core.vec.call(null,items);var N = cljs.core.count.call(null,items__$1);var lex = cljs.core.apply.call(null,foundation.app.data.combinatorics.lex_partitions_H,N,args);var iter__8926__auto__ = (function iter__79604(s__79605){return (new cljs.core.LazySeq(null,(function (){var s__79605__$1 = s__79605;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__79605__$1);if(temp__4092__auto__)
{var s__79605__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__79605__$2))
{var c__8924__auto__ = cljs.core.chunk_first.call(null,s__79605__$2);var size__8925__auto__ = cljs.core.count.call(null,c__8924__auto__);var b__79607 = cljs.core.chunk_buffer.call(null,size__8925__auto__);if((function (){var i__79606 = 0;while(true){
if((i__79606 < size__8925__auto__))
{var parts = cljs.core._nth.call(null,c__8924__auto__,i__79606);cljs.core.chunk_append.call(null,b__79607,(function (){var iter__8926__auto__ = ((function (i__79606,parts,c__8924__auto__,size__8925__auto__,b__79607,s__79605__$2,temp__4092__auto__){
return (function iter__79616(s__79617){return (new cljs.core.LazySeq(null,((function (i__79606,parts,c__8924__auto__,size__8925__auto__,b__79607,s__79605__$2,temp__4092__auto__){
return (function (){var s__79617__$1 = s__79617;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__79617__$1);if(temp__4092__auto____$1)
{var s__79617__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__79617__$2))
{var c__8924__auto____$1 = cljs.core.chunk_first.call(null,s__79617__$2);var size__8925__auto____$1 = cljs.core.count.call(null,c__8924__auto____$1);var b__79619 = cljs.core.chunk_buffer.call(null,size__8925__auto____$1);if((function (){var i__79618 = 0;while(true){
if((i__79618 < size__8925__auto____$1))
{var part = cljs.core._nth.call(null,c__8924__auto____$1,i__79618);cljs.core.chunk_append.call(null,b__79619,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__79618,i__79606,part,c__8924__auto____$1,size__8925__auto____$1,b__79619,s__79617__$2,temp__4092__auto____$1,parts,c__8924__auto__,size__8925__auto__,b__79607,s__79605__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__79618,i__79606,part,c__8924__auto____$1,size__8925__auto____$1,b__79619,s__79617__$2,temp__4092__auto____$1,parts,c__8924__auto__,size__8925__auto__,b__79607,s__79605__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__79624 = (i__79618 + 1);
i__79618 = G__79624;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__79619),iter__79616.call(null,cljs.core.chunk_rest.call(null,s__79617__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__79619),null);
}
} else
{var part = cljs.core.first.call(null,s__79617__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__79606,part,s__79617__$2,temp__4092__auto____$1,parts,c__8924__auto__,size__8925__auto__,b__79607,s__79605__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__79606,part,s__79617__$2,temp__4092__auto____$1,parts,c__8924__auto__,size__8925__auto__,b__79607,s__79605__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__79616.call(null,cljs.core.rest.call(null,s__79617__$2)));
}
} else
{return null;
}
break;
}
});})(i__79606,parts,c__8924__auto__,size__8925__auto__,b__79607,s__79605__$2,temp__4092__auto__))
,null,null));
});})(i__79606,parts,c__8924__auto__,size__8925__auto__,b__79607,s__79605__$2,temp__4092__auto__))
;return iter__8926__auto__.call(null,parts);
})());
{
var G__79625 = (i__79606 + 1);
i__79606 = G__79625;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__79607),iter__79604.call(null,cljs.core.chunk_rest.call(null,s__79605__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__79607),null);
}
} else
{var parts = cljs.core.first.call(null,s__79605__$2);return cljs.core.cons.call(null,(function (){var iter__8926__auto__ = ((function (parts,s__79605__$2,temp__4092__auto__){
return (function iter__79620(s__79621){return (new cljs.core.LazySeq(null,((function (parts,s__79605__$2,temp__4092__auto__){
return (function (){var s__79621__$1 = s__79621;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__79621__$1);if(temp__4092__auto____$1)
{var s__79621__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__79621__$2))
{var c__8924__auto__ = cljs.core.chunk_first.call(null,s__79621__$2);var size__8925__auto__ = cljs.core.count.call(null,c__8924__auto__);var b__79623 = cljs.core.chunk_buffer.call(null,size__8925__auto__);if((function (){var i__79622 = 0;while(true){
if((i__79622 < size__8925__auto__))
{var part = cljs.core._nth.call(null,c__8924__auto__,i__79622);cljs.core.chunk_append.call(null,b__79623,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__79622,part,c__8924__auto__,size__8925__auto__,b__79623,s__79621__$2,temp__4092__auto____$1,parts,s__79605__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__79622,part,c__8924__auto__,size__8925__auto__,b__79623,s__79621__$2,temp__4092__auto____$1,parts,s__79605__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__79626 = (i__79622 + 1);
i__79622 = G__79626;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__79623),iter__79620.call(null,cljs.core.chunk_rest.call(null,s__79621__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__79623),null);
}
} else
{var part = cljs.core.first.call(null,s__79621__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (part,s__79621__$2,temp__4092__auto____$1,parts,s__79605__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(part,s__79621__$2,temp__4092__auto____$1,parts,s__79605__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__79620.call(null,cljs.core.rest.call(null,s__79621__$2)));
}
} else
{return null;
}
break;
}
});})(parts,s__79605__$2,temp__4092__auto__))
,null,null));
});})(parts,s__79605__$2,temp__4092__auto__))
;return iter__8926__auto__.call(null,parts);
})(),iter__79604.call(null,cljs.core.rest.call(null,s__79605__$2)));
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
partitions_H.cljs$lang$applyTo = (function (arglist__79627){
var items = cljs.core.first(arglist__79627);
var args = cljs.core.rest(arglist__79627);
return partitions_H__delegate(items,args);
});
partitions_H.cljs$core$IFn$_invoke$arity$variadic = partitions_H__delegate;
return partitions_H;
})()
;
foundation.app.data.combinatorics.multiset_partitions_M = (function() {
var multiset_partitions_M = null;
var multiset_partitions_M__3 = (function (multiset,r,s){var n = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,multiset));var m = cljs.core.count.call(null,multiset);var f = cljs.core.PersistentVector.EMPTY;var c = cljs.core.PersistentVector.EMPTY;var u = cljs.core.PersistentVector.EMPTY;var v = cljs.core.PersistentVector.EMPTY;var vec__79650 = (function (){var j = 0;var c__$1 = c;var u__$1 = u;var v__$1 = v;while(true){
if(cljs.core._EQ_.call(null,j,m))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,u__$1,v__$1], null);
} else
{{
var G__79672 = (j + 1);
var G__79673 = cljs.core.assoc.call(null,c__$1,j,(j + 1));
var G__79674 = cljs.core.assoc.call(null,u__$1,j,multiset.call(null,(j + 1)));
var G__79675 = cljs.core.assoc.call(null,v__$1,j,multiset.call(null,(j + 1)));
j = G__79672;
c__$1 = G__79673;
u__$1 = G__79674;
v__$1 = G__79675;
continue;
}
}
break;
}
})();var c__$1 = cljs.core.nth.call(null,vec__79650,0,null);var u__$1 = cljs.core.nth.call(null,vec__79650,1,null);var v__$1 = cljs.core.nth.call(null,vec__79650,2,null);var a = 0;var b = m;var l = 0;var f__$1 = cljs.core.assoc.call(null,f,0,0,1,m);var stack = cljs.core.List.EMPTY;return multiset_partitions_M.call(null,n,m,f__$1,c__$1,u__$1,v__$1,a,b,l,r,s);
});
var multiset_partitions_M__11 = (function (n,m,f,c,u,v,a,b,l,r,s){while(true){
var vec__79651 = (function (){var j = a;var k = b;var x = false;var u__$1 = u;var v__$1 = v;var c__$1 = c;while(true){
if((j >= b))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [u__$1,v__$1,c__$1,j,k], null);
} else
{var u__$2 = cljs.core.assoc.call(null,u__$1,k,(u__$1.call(null,j) - v__$1.call(null,j)));if(cljs.core._EQ_.call(null,u__$2.call(null,k),0))
{{
var G__79676 = (j + 1);
var G__79677 = k;
var G__79678 = true;
var G__79679 = u__$2;
var G__79680 = v__$1;
var G__79681 = c__$1;
j = G__79676;
k = G__79677;
x = G__79678;
u__$1 = G__79679;
v__$1 = G__79680;
c__$1 = G__79681;
continue;
}
} else
{if(!(x))
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,(function (){var x__8547__auto__ = v__$1.call(null,j);var y__8548__auto__ = u__$2.call(null,k);return ((x__8547__auto__ < y__8548__auto__) ? x__8547__auto__ : y__8548__auto__);
})());var x__$1 = (u__$2.call(null,k) < v__$2.call(null,j));var k__$1 = (k + 1);var j__$1 = (j + 1);{
var G__79682 = j__$1;
var G__79683 = k__$1;
var G__79684 = x__$1;
var G__79685 = u__$2;
var G__79686 = v__$2;
var G__79687 = c__$2;
j = G__79682;
k = G__79683;
x = G__79684;
u__$1 = G__79685;
v__$1 = G__79686;
c__$1 = G__79687;
continue;
}
} else
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,u__$2.call(null,k));var k__$1 = (k + 1);var j__$1 = (j + 1);{
var G__79688 = j__$1;
var G__79689 = k__$1;
var G__79690 = x;
var G__79691 = u__$2;
var G__79692 = v__$2;
var G__79693 = c__$2;
j = G__79688;
k = G__79689;
x = G__79690;
u__$1 = G__79691;
v__$1 = G__79692;
c__$1 = G__79693;
continue;
}
}
}
}
break;
}
})();var u__$1 = cljs.core.nth.call(null,vec__79651,0,null);var v__$1 = cljs.core.nth.call(null,vec__79651,1,null);var c__$1 = cljs.core.nth.call(null,vec__79651,2,null);var j = cljs.core.nth.call(null,vec__79651,3,null);var k = cljs.core.nth.call(null,vec__79651,4,null);if(cljs.core.truth_((function (){var and__8216__auto__ = r;if(cljs.core.truth_(and__8216__auto__))
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
var G__79694 = n;
var G__79695 = m;
var G__79696 = f__$1;
var G__79697 = c__$1;
var G__79698 = u__$1;
var G__79699 = v__$1;
var G__79700 = a__$1;
var G__79701 = b__$1;
var G__79702 = l__$1;
var G__79703 = r;
var G__79704 = s;
n = G__79694;
m = G__79695;
f = G__79696;
c = G__79697;
u = G__79698;
v = G__79699;
a = G__79700;
b = G__79701;
l = G__79702;
r = G__79703;
s = G__79704;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var part = (function (){var iter__8926__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s){
return (function iter__79652(s__79653){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s){
return (function (){var s__79653__$1 = s__79653;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__79653__$1);if(temp__4092__auto__)
{var s__79653__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__79653__$2))
{var c__8924__auto__ = cljs.core.chunk_first.call(null,s__79653__$2);var size__8925__auto__ = cljs.core.count.call(null,c__8924__auto__);var b__79655 = cljs.core.chunk_buffer.call(null,size__8925__auto__);if((function (){var i__79654 = 0;while(true){
if((i__79654 < size__8925__auto__))
{var y = cljs.core._nth.call(null,c__8924__auto__,i__79654);cljs.core.chunk_append.call(null,b__79655,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + 1)) - 1);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8926__auto__ = ((function (i__79654,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8924__auto__,size__8925__auto__,b__79655,s__79653__$2,temp__4092__auto__){
return (function iter__79664(s__79665){return (new cljs.core.LazySeq(null,((function (i__79654,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8924__auto__,size__8925__auto__,b__79655,s__79653__$2,temp__4092__auto__){
return (function (){var s__79665__$1 = s__79665;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__79665__$1);if(temp__4092__auto____$1)
{var s__79665__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__79665__$2))
{var c__8924__auto____$1 = cljs.core.chunk_first.call(null,s__79665__$2);var size__8925__auto____$1 = cljs.core.count.call(null,c__8924__auto____$1);var b__79667 = cljs.core.chunk_buffer.call(null,size__8925__auto____$1);if((function (){var i__79666 = 0;while(true){
if((i__79666 < size__8925__auto____$1))
{var z = cljs.core._nth.call(null,c__8924__auto____$1,i__79666);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{cljs.core.chunk_append.call(null,b__79667,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));
{
var G__79705 = (i__79666 + 1);
i__79666 = G__79705;
continue;
}
} else
{{
var G__79706 = (i__79666 + 1);
i__79666 = G__79706;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__79667),iter__79664.call(null,cljs.core.chunk_rest.call(null,s__79665__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__79667),null);
}
} else
{var z = cljs.core.first.call(null,s__79665__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),iter__79664.call(null,cljs.core.rest.call(null,s__79665__$2)));
} else
{{
var G__79707 = cljs.core.rest.call(null,s__79665__$2);
s__79665__$1 = G__79707;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__79654,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8924__auto__,size__8925__auto__,b__79655,s__79653__$2,temp__4092__auto__))
,null,null));
});})(i__79654,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8924__auto__,size__8925__auto__,b__79655,s__79653__$2,temp__4092__auto__))
;return iter__8926__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + 1)));
})());
})());
{
var G__79708 = (i__79654 + 1);
i__79654 = G__79708;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__79655),iter__79652.call(null,cljs.core.chunk_rest.call(null,s__79653__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__79655),null);
}
} else
{var y = cljs.core.first.call(null,s__79653__$2);return cljs.core.cons.call(null,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + 1)) - 1);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8926__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__79653__$2,temp__4092__auto__){
return (function iter__79668(s__79669){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__79653__$2,temp__4092__auto__){
return (function (){var s__79669__$1 = s__79669;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__79669__$1);if(temp__4092__auto____$1)
{var s__79669__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__79669__$2))
{var c__8924__auto__ = cljs.core.chunk_first.call(null,s__79669__$2);var size__8925__auto__ = cljs.core.count.call(null,c__8924__auto__);var b__79671 = cljs.core.chunk_buffer.call(null,size__8925__auto__);if((function (){var i__79670 = 0;while(true){
if((i__79670 < size__8925__auto__))
{var z = cljs.core._nth.call(null,c__8924__auto__,i__79670);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{cljs.core.chunk_append.call(null,b__79671,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));
{
var G__79709 = (i__79670 + 1);
i__79670 = G__79709;
continue;
}
} else
{{
var G__79710 = (i__79670 + 1);
i__79670 = G__79710;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__79671),iter__79668.call(null,cljs.core.chunk_rest.call(null,s__79669__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__79671),null);
}
} else
{var z = cljs.core.first.call(null,s__79669__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),iter__79668.call(null,cljs.core.rest.call(null,s__79669__$2)));
} else
{{
var G__79711 = cljs.core.rest.call(null,s__79669__$2);
s__79669__$1 = G__79711;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__79653__$2,temp__4092__auto__))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__79653__$2,temp__4092__auto__))
;return iter__8926__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + 1)));
})());
})(),iter__79652.call(null,cljs.core.rest.call(null,s__79653__$2)));
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
var G__79720 = (j - 1);
j = G__79720;
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
return (function iter__79716(s__79717){return (new cljs.core.LazySeq(null,((function (v__$1){
return (function (){var s__79717__$1 = s__79717;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__79717__$1);if(temp__4092__auto__)
{var s__79717__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__79717__$2))
{var c__8924__auto__ = cljs.core.chunk_first.call(null,s__79717__$2);var size__8925__auto__ = cljs.core.count.call(null,c__8924__auto__);var b__79719 = cljs.core.chunk_buffer.call(null,size__8925__auto__);if((function (){var i__79718 = 0;while(true){
if((i__79718 < size__8925__auto__))
{var i = cljs.core._nth.call(null,c__8924__auto__,i__79718);cljs.core.chunk_append.call(null,b__79719,(u.call(null,i) - v__$1.call(null,i)));
{
var G__79721 = (i__79718 + 1);
i__79718 = G__79721;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__79719),iter__79716.call(null,cljs.core.chunk_rest.call(null,s__79717__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__79719),null);
}
} else
{var i = cljs.core.first.call(null,s__79717__$2);return cljs.core.cons.call(null,(u.call(null,i) - v__$1.call(null,i)),iter__79716.call(null,cljs.core.rest.call(null,s__79717__$2)));
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
var G__79722 = cljs.core.rest.call(null,ks);
var G__79723 = cljs.core.assoc.call(null,v__$2,k,u.call(null,k));
ks = G__79722;
v__$2 = G__79723;
continue;
}
}
break;
}
})();var min_partitions_after_this = (cljs.core.truth_(s)?(s - (l + 1)):0);var amount_to_dec = (cljs.core.truth_(s)?(function (){var x__8540__auto__ = 0;var y__8541__auto__ = (min_partitions_after_this - diff_uv);return ((x__8540__auto__ > y__8541__auto__) ? x__8540__auto__ : y__8541__auto__);
})():0);var v__$3 = ((cljs.core._EQ_.call(null,amount_to_dec,0))?v__$2:(function (){var k_1 = (b - 1);var v__$3 = v__$2;var amount = amount_to_dec;while(true){
var vk = v__$3.call(null,k_1);if((amount > vk))
{{
var G__79724 = (k_1 - 1);
var G__79725 = cljs.core.assoc.call(null,v__$3,k_1,0);
var G__79726 = (amount - vk);
k_1 = G__79724;
v__$3 = G__79725;
amount = G__79726;
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
var partitions_M__delegate = function (items,p__79727){var map__79785 = p__79727;var map__79785__$1 = ((cljs.core.seq_QMARK_.call(null,map__79785))?cljs.core.apply.call(null,cljs.core.hash_map,map__79785):map__79785);var from = cljs.core.get.call(null,map__79785__$1,new cljs.core.Keyword(null,"min","min",1014012356));var to = cljs.core.get.call(null,map__79785__$1,new cljs.core.Keyword(null,"max","max",1014012118));if(cljs.core._EQ_.call(null,cljs.core.count.call(null,items),0))
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
{var start_multiset = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8926__auto__ = (function iter__79786(s__79787){return (new cljs.core.LazySeq(null,(function (){var s__79787__$1 = s__79787;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__79787__$1);if(temp__4092__auto__)
{var s__79787__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__79787__$2))
{var c__8924__auto__ = cljs.core.chunk_first.call(null,s__79787__$2);var size__8925__auto__ = cljs.core.count.call(null,c__8924__auto__);var b__79789 = cljs.core.chunk_buffer.call(null,size__8925__auto__);if((function (){var i__79788 = 0;while(true){
if((i__79788 < size__8925__auto__))
{var i = cljs.core._nth.call(null,c__8924__auto__,i__79788);var j = (i + 1);cljs.core.chunk_append.call(null,b__79789,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null));
{
var G__79842 = (i__79788 + 1);
i__79788 = G__79842;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__79789),iter__79786.call(null,cljs.core.chunk_rest.call(null,s__79787__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__79789),null);
}
} else
{var i = cljs.core.first.call(null,s__79787__$2);var j = (i + 1);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null),iter__79786.call(null,cljs.core.rest.call(null,s__79787__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8926__auto__.call(null,cljs.core.range.call(null,M));
})());var parts = foundation.app.data.combinatorics.multiset_partitions_M.call(null,start_multiset,to__$1,from__$1);var iter__8926__auto__ = (function iter__79790(s__79791){return (new cljs.core.LazySeq(null,(function (){var s__79791__$1 = s__79791;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__79791__$1);if(temp__4092__auto__)
{var s__79791__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__79791__$2))
{var c__8924__auto__ = cljs.core.chunk_first.call(null,s__79791__$2);var size__8925__auto__ = cljs.core.count.call(null,c__8924__auto__);var b__79793 = cljs.core.chunk_buffer.call(null,size__8925__auto__);if((function (){var i__79792 = 0;while(true){
if((i__79792 < size__8925__auto__))
{var part = cljs.core._nth.call(null,c__8924__auto__,i__79792);cljs.core.chunk_append.call(null,b__79793,(function (){var iter__8926__auto__ = ((function (i__79792,part,c__8924__auto__,size__8925__auto__,b__79793,s__79791__$2,temp__4092__auto__){
return (function iter__79818(s__79819){return (new cljs.core.LazySeq(null,((function (i__79792,part,c__8924__auto__,size__8925__auto__,b__79793,s__79791__$2,temp__4092__auto__){
return (function (){var s__79819__$1 = s__79819;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__79819__$1);if(temp__4092__auto____$1)
{var s__79819__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__79819__$2))
{var c__8924__auto____$1 = cljs.core.chunk_first.call(null,s__79819__$2);var size__8925__auto____$1 = cljs.core.count.call(null,c__8924__auto____$1);var b__79821 = cljs.core.chunk_buffer.call(null,size__8925__auto____$1);if((function (){var i__79820 = 0;while(true){
if((i__79820 < size__8925__auto____$1))
{var multiset = cljs.core._nth.call(null,c__8924__auto____$1,i__79820);cljs.core.chunk_append.call(null,b__79821,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__79820,i__79792,multiset,c__8924__auto____$1,size__8925__auto____$1,b__79821,s__79819__$2,temp__4092__auto____$1,part,c__8924__auto__,size__8925__auto__,b__79793,s__79791__$2,temp__4092__auto__){
return (function (p__79826){var vec__79827 = p__79826;var index = cljs.core.nth.call(null,vec__79827,0,null);var numtimes = cljs.core.nth.call(null,vec__79827,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__79820,i__79792,multiset,c__8924__auto____$1,size__8925__auto____$1,b__79821,s__79819__$2,temp__4092__auto____$1,part,c__8924__auto__,size__8925__auto__,b__79793,s__79791__$2,temp__4092__auto__))
,multiset)));
{
var G__79843 = (i__79820 + 1);
i__79820 = G__79843;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__79821),iter__79818.call(null,cljs.core.chunk_rest.call(null,s__79819__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__79821),null);
}
} else
{var multiset = cljs.core.first.call(null,s__79819__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__79792,multiset,s__79819__$2,temp__4092__auto____$1,part,c__8924__auto__,size__8925__auto__,b__79793,s__79791__$2,temp__4092__auto__){
return (function (p__79828){var vec__79829 = p__79828;var index = cljs.core.nth.call(null,vec__79829,0,null);var numtimes = cljs.core.nth.call(null,vec__79829,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__79792,multiset,s__79819__$2,temp__4092__auto____$1,part,c__8924__auto__,size__8925__auto__,b__79793,s__79791__$2,temp__4092__auto__))
,multiset)),iter__79818.call(null,cljs.core.rest.call(null,s__79819__$2)));
}
} else
{return null;
}
break;
}
});})(i__79792,part,c__8924__auto__,size__8925__auto__,b__79793,s__79791__$2,temp__4092__auto__))
,null,null));
});})(i__79792,part,c__8924__auto__,size__8925__auto__,b__79793,s__79791__$2,temp__4092__auto__))
;return iter__8926__auto__.call(null,part);
})());
{
var G__79844 = (i__79792 + 1);
i__79792 = G__79844;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__79793),iter__79790.call(null,cljs.core.chunk_rest.call(null,s__79791__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__79793),null);
}
} else
{var part = cljs.core.first.call(null,s__79791__$2);return cljs.core.cons.call(null,(function (){var iter__8926__auto__ = ((function (part,s__79791__$2,temp__4092__auto__){
return (function iter__79830(s__79831){return (new cljs.core.LazySeq(null,((function (part,s__79791__$2,temp__4092__auto__){
return (function (){var s__79831__$1 = s__79831;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__79831__$1);if(temp__4092__auto____$1)
{var s__79831__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__79831__$2))
{var c__8924__auto__ = cljs.core.chunk_first.call(null,s__79831__$2);var size__8925__auto__ = cljs.core.count.call(null,c__8924__auto__);var b__79833 = cljs.core.chunk_buffer.call(null,size__8925__auto__);if((function (){var i__79832 = 0;while(true){
if((i__79832 < size__8925__auto__))
{var multiset = cljs.core._nth.call(null,c__8924__auto__,i__79832);cljs.core.chunk_append.call(null,b__79833,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__79832,multiset,c__8924__auto__,size__8925__auto__,b__79833,s__79831__$2,temp__4092__auto____$1,part,s__79791__$2,temp__4092__auto__){
return (function (p__79838){var vec__79839 = p__79838;var index = cljs.core.nth.call(null,vec__79839,0,null);var numtimes = cljs.core.nth.call(null,vec__79839,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__79832,multiset,c__8924__auto__,size__8925__auto__,b__79833,s__79831__$2,temp__4092__auto____$1,part,s__79791__$2,temp__4092__auto__))
,multiset)));
{
var G__79845 = (i__79832 + 1);
i__79832 = G__79845;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__79833),iter__79830.call(null,cljs.core.chunk_rest.call(null,s__79831__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__79833),null);
}
} else
{var multiset = cljs.core.first.call(null,s__79831__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (multiset,s__79831__$2,temp__4092__auto____$1,part,s__79791__$2,temp__4092__auto__){
return (function (p__79840){var vec__79841 = p__79840;var index = cljs.core.nth.call(null,vec__79841,0,null);var numtimes = cljs.core.nth.call(null,vec__79841,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(multiset,s__79831__$2,temp__4092__auto____$1,part,s__79791__$2,temp__4092__auto__))
,multiset)),iter__79830.call(null,cljs.core.rest.call(null,s__79831__$2)));
}
} else
{return null;
}
break;
}
});})(part,s__79791__$2,temp__4092__auto__))
,null,null));
});})(part,s__79791__$2,temp__4092__auto__))
;return iter__8926__auto__.call(null,part);
})(),iter__79790.call(null,cljs.core.rest.call(null,s__79791__$2)));
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
var p__79727 = null;if (arguments.length > 1) {
  p__79727 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions_M__delegate.call(this,items,p__79727);};
partitions_M.cljs$lang$maxFixedArity = 1;
partitions_M.cljs$lang$applyTo = (function (arglist__79846){
var items = cljs.core.first(arglist__79846);
var p__79727 = cljs.core.rest(arglist__79846);
return partitions_M__delegate(items,p__79727);
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
partitions.cljs$lang$applyTo = (function (arglist__79847){
var items = cljs.core.first(arglist__79847);
var args = cljs.core.rest(arglist__79847);
return partitions__delegate(items,args);
});
partitions.cljs$core$IFn$_invoke$arity$variadic = partitions__delegate;
return partitions;
})()
;

//# sourceMappingURL=combinatorics.js.map