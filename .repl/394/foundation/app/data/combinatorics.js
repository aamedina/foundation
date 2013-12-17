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
var G__25807 = cljs.core.assoc.call(null,c__$2,(j__$1 - 1),(c__$2.call(null,j__$1) - 1));
var G__25808 = (j__$1 - 1);
c__$2 = G__25807;
j__$1 = G__25808;
continue;
}
}
break;
}
}
}
});
return (new cljs.core.LazySeq(null,(function (){var c = cljs.core.vec.call(null,cljs.core.cons.call(null,null,(function (){var iter__8540__auto__ = (function iter__25803(s__25804){return (new cljs.core.LazySeq(null,(function (){var s__25804__$1 = s__25804;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__25804__$1);if(temp__4092__auto__)
{var s__25804__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__25804__$2))
{var c__8538__auto__ = cljs.core.chunk_first.call(null,s__25804__$2);var size__8539__auto__ = cljs.core.count.call(null,c__8538__auto__);var b__25806 = cljs.core.chunk_buffer.call(null,size__8539__auto__);if((function (){var i__25805 = 0;while(true){
if((i__25805 < size__8539__auto__))
{var j = cljs.core._nth.call(null,c__8538__auto__,i__25805);cljs.core.chunk_append.call(null,b__25806,((j + cnt) + (- (n + 1))));
{
var G__25809 = (i__25805 + 1);
i__25805 = G__25809;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25806),iter__25803.call(null,cljs.core.chunk_rest.call(null,s__25804__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25806),null);
}
} else
{var j = cljs.core.first.call(null,s__25804__$2);return cljs.core.cons.call(null,((j + cnt) + (- (n + 1))),iter__25803.call(null,cljs.core.rest.call(null,s__25804__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8540__auto__.call(null,cljs.core.range.call(null,1,(n + 1)));
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
{return cljs.core.map.call(null,(function (p1__25810_SHARP_){return cljs.core.map.call(null,v_items,p1__25810_SHARP_);
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
var G__25811 = (i - 1);
var G__25812 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__25811;
v_seqs__$2 = G__25812;
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
cartesian_product.cljs$lang$applyTo = (function (arglist__25813){
var seqs = cljs.core.seq(arglist__25813);
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
var G__25814 = (i - 1);
i = G__25814;
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
var G__25815 = (i - 1);
i = G__25815;
continue;
}
}
break;
}
})();var v__$1 = cljs.core.assoc.call(null,v,j,v.call(null,l),l,vj);var k = (j + 1);var l__$1 = (len - 1);while(true){
if((k < l__$1))
{{
var G__25816 = cljs.core.assoc.call(null,v__$1,k,v__$1.call(null,l__$1),l__$1,v__$1.call(null,k));
var G__25817 = (k + 1);
var G__25818 = (l__$1 - 1);
v__$1 = G__25816;
k = G__25817;
l__$1 = G__25818;
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
foundation.app.data.combinatorics.multi_perm = (function multi_perm(l){var f = cljs.core.frequencies.call(null,l);var v = cljs.core.vec.call(null,cljs.core.keys.call(null,f));var indices = cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__8540__auto__ = ((function (f,v){
return (function iter__25823(s__25824){return (new cljs.core.LazySeq(null,((function (f,v){
return (function (){var s__25824__$1 = s__25824;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__25824__$1);if(temp__4092__auto__)
{var s__25824__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__25824__$2))
{var c__8538__auto__ = cljs.core.chunk_first.call(null,s__25824__$2);var size__8539__auto__ = cljs.core.count.call(null,c__8538__auto__);var b__25826 = cljs.core.chunk_buffer.call(null,size__8539__auto__);if((function (){var i__25825 = 0;while(true){
if((i__25825 < size__8539__auto__))
{var i = cljs.core._nth.call(null,c__8538__auto__,i__25825);cljs.core.chunk_append.call(null,b__25826,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));
{
var G__25827 = (i__25825 + 1);
i__25825 = G__25827;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25826),iter__25823.call(null,cljs.core.chunk_rest.call(null,s__25824__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25826),null);
}
} else
{var i = cljs.core.first.call(null,s__25824__$2);return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),iter__25823.call(null,cljs.core.rest.call(null,s__25824__$2)));
}
} else
{return null;
}
break;
}
});})(f,v))
,null,null));
});})(f,v))
;return iter__8540__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,v)));
})());return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.map,v),foundation.app.data.combinatorics.lex_permutations.call(null,indices));
});
/**
* All the distinct permutations of items, lexicographic by index.
*/
foundation.app.data.combinatorics.permutations = (function permutations(items){if(foundation.app.data.combinatorics.sorted_numbers_QMARK_.call(null,items))
{return foundation.app.data.combinatorics.lex_permutations.call(null,items);
} else
{if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core.distinct_QMARK_,items)))
{var v = cljs.core.vec.call(null,items);return cljs.core.map.call(null,(function (p1__25828_SHARP_){return cljs.core.map.call(null,v,p1__25828_SHARP_);
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
{return cljs.core.vec.call(null,(function (){var iter__8540__auto__ = (function iter__25833(s__25834){return (new cljs.core.LazySeq(null,(function (){var s__25834__$1 = s__25834;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__25834__$1);if(temp__4092__auto__)
{var s__25834__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__25834__$2))
{var c__8538__auto__ = cljs.core.chunk_first.call(null,s__25834__$2);var size__8539__auto__ = cljs.core.count.call(null,c__8538__auto__);var b__25836 = cljs.core.chunk_buffer.call(null,size__8539__auto__);if((function (){var i__25835 = 0;while(true){
if((i__25835 < size__8539__auto__))
{var i = cljs.core._nth.call(null,c__8538__auto__,i__25835);cljs.core.chunk_append.call(null,b__25836,(function (){var x__8154__auto__ = 0;var y__8155__auto__ = (i - ((n - s) - -1));return ((x__8154__auto__ > y__8155__auto__) ? x__8154__auto__ : y__8155__auto__);
})());
{
var G__25837 = (i__25835 + 1);
i__25835 = G__25837;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25836),iter__25833.call(null,cljs.core.chunk_rest.call(null,s__25834__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25836),null);
}
} else
{var i = cljs.core.first.call(null,s__25834__$2);return cljs.core.cons.call(null,(function (){var x__8154__auto__ = 0;var y__8155__auto__ = (i - ((n - s) - -1));return ((x__8154__auto__ > y__8155__auto__) ? x__8154__auto__ : y__8155__auto__);
})(),iter__25833.call(null,cljs.core.rest.call(null,s__25834__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8540__auto__.call(null,cljs.core.range.call(null,1,(n + 1)));
})());
} else
{return cljs.core.vec.call(null,cljs.core.repeat.call(null,n,0));
}
});
foundation.app.data.combinatorics.growth_strings_H = (function() {
var growth_strings_H = null;
var growth_strings_H__3 = (function (n,r,s){return growth_strings_H.call(null,n,foundation.app.data.combinatorics.init.call(null,n,s),cljs.core.vec.call(null,cljs.core.repeat.call(null,n,1)),r,s);
});
var growth_strings_H__5 = (function (n,a,b,r,s){return cljs.core.cons.call(null,a,(new cljs.core.LazySeq(null,(function (){if((function (){var and__7835__auto__ = (cljs.core.peek.call(null,b) > cljs.core.peek.call(null,a));if(and__7835__auto__)
{if(cljs.core.truth_(r))
{return (cljs.core.peek.call(null,a) < (r - 1));
} else
{return true;
}
} else
{return and__7835__auto__;
}
})())
{return growth_strings_H.call(null,n,foundation.app.data.combinatorics.update.call(null,a,(n - 1),cljs.core.inc),b,r,s);
} else
{var j = (function (){var j = (n - 2);while(true){
if((function (){var and__7835__auto__ = (a.call(null,j) < b.call(null,j));if(and__7835__auto__)
{var and__7835__auto____$1 = (cljs.core.truth_(r)?(a.call(null,j) < (r - 1)):true);if(and__7835__auto____$1)
{if(cljs.core.truth_(s))
{return (((s - b.call(null,j)) - ((((a.call(null,j) + 1) === b.call(null,j)))?1:0)) <= (n - j));
} else
{return true;
}
} else
{return and__7835__auto____$1;
}
} else
{return and__7835__auto__;
}
})())
{return j;
} else
{{
var G__25840 = (j - 1);
j = G__25840;
continue;
}
}
break;
}
})();if((j === 0))
{return cljs.core.List.EMPTY;
} else
{var a__$1 = foundation.app.data.combinatorics.update.call(null,a,j,cljs.core.inc);var x = (cljs.core.truth_(s)?(s - (b.call(null,j) + ((cljs.core._EQ_.call(null,a__$1.call(null,j),b.call(null,j)))?1:0))):null);var vec__25839 = (function (){var a__$2 = a__$1;var b__$1 = b;var i = (j + 1);var current_max = (b__$1.call(null,j) + (((b__$1.call(null,j) === a__$2.call(null,j)))?1:0));while(true){
if((i === n))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$2,b__$1], null);
} else
{if(cljs.core.truth_((function (){var and__7835__auto__ = s;if(cljs.core.truth_(and__7835__auto__))
{return (i > ((n - x) - 1));
} else
{return and__7835__auto__;
}
})()))
{var new_a_i = ((i - n) + s);{
var G__25841 = cljs.core.assoc.call(null,a__$2,i,new_a_i);
var G__25842 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__25843 = (i + 1);
var G__25844 = (function (){var x__8154__auto__ = current_max;var y__8155__auto__ = (new_a_i + 1);return ((x__8154__auto__ > y__8155__auto__) ? x__8154__auto__ : y__8155__auto__);
})();
a__$2 = G__25841;
b__$1 = G__25842;
i = G__25843;
current_max = G__25844;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__25845 = cljs.core.assoc.call(null,a__$2,i,0);
var G__25846 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__25847 = (i + 1);
var G__25848 = current_max;
a__$2 = G__25845;
b__$1 = G__25846;
i = G__25847;
current_max = G__25848;
continue;
}
} else
{return null;
}
}
}
break;
}
})();var a__$2 = cljs.core.nth.call(null,vec__25839,0,null);var b__$1 = cljs.core.nth.call(null,vec__25839,1,null);return growth_strings_H.call(null,n,a__$2,b__$1,r,s);
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
var lex_partitions_H__delegate = function (N,p__25849){var map__25855 = p__25849;var map__25855__$1 = ((cljs.core.seq_QMARK_.call(null,map__25855))?cljs.core.apply.call(null,cljs.core.hash_map,map__25855):map__25855);var from = cljs.core.get.call(null,map__25855__$1,new cljs.core.Keyword(null,"min","min",1014012356));var to = cljs.core.get.call(null,map__25855__$1,new cljs.core.Keyword(null,"max","max",1014012118));if(cljs.core._EQ_.call(null,N,0))
{if((((function (){var or__7847__auto__ = from;if(cljs.core.truth_(or__7847__auto__))
{return or__7847__auto__;
} else
{return 0;
}
})() <= 0)) && ((0 <= (function (){var or__7847__auto__ = to;if(cljs.core.truth_(or__7847__auto__))
{return or__7847__auto__;
} else
{return 0;
}
})())))
{return cljs.core.list(cljs.core.List.EMPTY);
} else
{return cljs.core.List.EMPTY;
}
} else
{var from__$1 = (cljs.core.truth_((function (){var and__7835__auto__ = from;if(cljs.core.truth_(and__7835__auto__))
{return (from <= 1);
} else
{return and__7835__auto__;
}
})())?null:from);var to__$1 = (cljs.core.truth_((function (){var and__7835__auto__ = to;if(cljs.core.truth_(and__7835__auto__))
{return (to >= N);
} else
{return and__7835__auto__;
}
})())?null:to);if(!(((1 <= (function (){var or__7847__auto__ = from__$1;if(cljs.core.truth_(or__7847__auto__))
{return or__7847__auto__;
} else
{return 1;
}
})())) && ((((function (){var or__7847__auto__ = from__$1;if(cljs.core.truth_(or__7847__auto__))
{return or__7847__auto__;
} else
{return 1;
}
})() <= (function (){var or__7847__auto__ = to__$1;if(cljs.core.truth_(or__7847__auto__))
{return or__7847__auto__;
} else
{return N;
}
})())) && (((function (){var or__7847__auto__ = to__$1;if(cljs.core.truth_(or__7847__auto__))
{return or__7847__auto__;
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
{var growth_strings = foundation.app.data.combinatorics.growth_strings_H.call(null,N,to__$1,from__$1);var iter__8540__auto__ = (function iter__25856(s__25857){return (new cljs.core.LazySeq(null,(function (){var s__25857__$1 = s__25857;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__25857__$1);if(temp__4092__auto__)
{var s__25857__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__25857__$2))
{var c__8538__auto__ = cljs.core.chunk_first.call(null,s__25857__$2);var size__8539__auto__ = cljs.core.count.call(null,c__8538__auto__);var b__25859 = cljs.core.chunk_buffer.call(null,size__8539__auto__);if((function (){var i__25858 = 0;while(true){
if((i__25858 < size__8539__auto__))
{var growth_string = cljs.core._nth.call(null,c__8538__auto__,i__25858);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));cljs.core.chunk_append.call(null,b__25859,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))));
{
var G__25860 = (i__25858 + 1);
i__25858 = G__25860;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25859),iter__25856.call(null,cljs.core.chunk_rest.call(null,s__25857__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25859),null);
}
} else
{var growth_string = cljs.core.first.call(null,s__25857__$2);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));return cljs.core.cons.call(null,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))),iter__25856.call(null,cljs.core.rest.call(null,s__25857__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8540__auto__.call(null,growth_strings);
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
var p__25849 = null;if (arguments.length > 1) {
  p__25849 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return lex_partitions_H__delegate.call(this,N,p__25849);};
lex_partitions_H.cljs$lang$maxFixedArity = 1;
lex_partitions_H.cljs$lang$applyTo = (function (arglist__25861){
var N = cljs.core.first(arglist__25861);
var p__25849 = cljs.core.rest(arglist__25861);
return lex_partitions_H__delegate(N,p__25849);
});
lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic = lex_partitions_H__delegate;
return lex_partitions_H;
})()
;
/**
* @param {...*} var_args
*/
foundation.app.data.combinatorics.partitions_H = (function() { 
var partitions_H__delegate = function (items,args){var items__$1 = cljs.core.vec.call(null,items);var N = cljs.core.count.call(null,items__$1);var lex = cljs.core.apply.call(null,foundation.app.data.combinatorics.lex_partitions_H,N,args);var iter__8540__auto__ = (function iter__25882(s__25883){return (new cljs.core.LazySeq(null,(function (){var s__25883__$1 = s__25883;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__25883__$1);if(temp__4092__auto__)
{var s__25883__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__25883__$2))
{var c__8538__auto__ = cljs.core.chunk_first.call(null,s__25883__$2);var size__8539__auto__ = cljs.core.count.call(null,c__8538__auto__);var b__25885 = cljs.core.chunk_buffer.call(null,size__8539__auto__);if((function (){var i__25884 = 0;while(true){
if((i__25884 < size__8539__auto__))
{var parts = cljs.core._nth.call(null,c__8538__auto__,i__25884);cljs.core.chunk_append.call(null,b__25885,(function (){var iter__8540__auto__ = ((function (i__25884,parts,c__8538__auto__,size__8539__auto__,b__25885,s__25883__$2,temp__4092__auto__){
return (function iter__25894(s__25895){return (new cljs.core.LazySeq(null,((function (i__25884,parts,c__8538__auto__,size__8539__auto__,b__25885,s__25883__$2,temp__4092__auto__){
return (function (){var s__25895__$1 = s__25895;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__25895__$1);if(temp__4092__auto____$1)
{var s__25895__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__25895__$2))
{var c__8538__auto____$1 = cljs.core.chunk_first.call(null,s__25895__$2);var size__8539__auto____$1 = cljs.core.count.call(null,c__8538__auto____$1);var b__25897 = cljs.core.chunk_buffer.call(null,size__8539__auto____$1);if((function (){var i__25896 = 0;while(true){
if((i__25896 < size__8539__auto____$1))
{var part = cljs.core._nth.call(null,c__8538__auto____$1,i__25896);cljs.core.chunk_append.call(null,b__25897,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__25896,i__25884,part,c__8538__auto____$1,size__8539__auto____$1,b__25897,s__25895__$2,temp__4092__auto____$1,parts,c__8538__auto__,size__8539__auto__,b__25885,s__25883__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__25896,i__25884,part,c__8538__auto____$1,size__8539__auto____$1,b__25897,s__25895__$2,temp__4092__auto____$1,parts,c__8538__auto__,size__8539__auto__,b__25885,s__25883__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__25902 = (i__25896 + 1);
i__25896 = G__25902;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25897),iter__25894.call(null,cljs.core.chunk_rest.call(null,s__25895__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25897),null);
}
} else
{var part = cljs.core.first.call(null,s__25895__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__25884,part,s__25895__$2,temp__4092__auto____$1,parts,c__8538__auto__,size__8539__auto__,b__25885,s__25883__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__25884,part,s__25895__$2,temp__4092__auto____$1,parts,c__8538__auto__,size__8539__auto__,b__25885,s__25883__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__25894.call(null,cljs.core.rest.call(null,s__25895__$2)));
}
} else
{return null;
}
break;
}
});})(i__25884,parts,c__8538__auto__,size__8539__auto__,b__25885,s__25883__$2,temp__4092__auto__))
,null,null));
});})(i__25884,parts,c__8538__auto__,size__8539__auto__,b__25885,s__25883__$2,temp__4092__auto__))
;return iter__8540__auto__.call(null,parts);
})());
{
var G__25903 = (i__25884 + 1);
i__25884 = G__25903;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25885),iter__25882.call(null,cljs.core.chunk_rest.call(null,s__25883__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25885),null);
}
} else
{var parts = cljs.core.first.call(null,s__25883__$2);return cljs.core.cons.call(null,(function (){var iter__8540__auto__ = ((function (parts,s__25883__$2,temp__4092__auto__){
return (function iter__25898(s__25899){return (new cljs.core.LazySeq(null,((function (parts,s__25883__$2,temp__4092__auto__){
return (function (){var s__25899__$1 = s__25899;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__25899__$1);if(temp__4092__auto____$1)
{var s__25899__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__25899__$2))
{var c__8538__auto__ = cljs.core.chunk_first.call(null,s__25899__$2);var size__8539__auto__ = cljs.core.count.call(null,c__8538__auto__);var b__25901 = cljs.core.chunk_buffer.call(null,size__8539__auto__);if((function (){var i__25900 = 0;while(true){
if((i__25900 < size__8539__auto__))
{var part = cljs.core._nth.call(null,c__8538__auto__,i__25900);cljs.core.chunk_append.call(null,b__25901,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__25900,part,c__8538__auto__,size__8539__auto__,b__25901,s__25899__$2,temp__4092__auto____$1,parts,s__25883__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__25900,part,c__8538__auto__,size__8539__auto__,b__25901,s__25899__$2,temp__4092__auto____$1,parts,s__25883__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__25904 = (i__25900 + 1);
i__25900 = G__25904;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25901),iter__25898.call(null,cljs.core.chunk_rest.call(null,s__25899__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25901),null);
}
} else
{var part = cljs.core.first.call(null,s__25899__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (part,s__25899__$2,temp__4092__auto____$1,parts,s__25883__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(part,s__25899__$2,temp__4092__auto____$1,parts,s__25883__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__25898.call(null,cljs.core.rest.call(null,s__25899__$2)));
}
} else
{return null;
}
break;
}
});})(parts,s__25883__$2,temp__4092__auto__))
,null,null));
});})(parts,s__25883__$2,temp__4092__auto__))
;return iter__8540__auto__.call(null,parts);
})(),iter__25882.call(null,cljs.core.rest.call(null,s__25883__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8540__auto__.call(null,lex);
};
var partitions_H = function (items,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions_H__delegate.call(this,items,args);};
partitions_H.cljs$lang$maxFixedArity = 1;
partitions_H.cljs$lang$applyTo = (function (arglist__25905){
var items = cljs.core.first(arglist__25905);
var args = cljs.core.rest(arglist__25905);
return partitions_H__delegate(items,args);
});
partitions_H.cljs$core$IFn$_invoke$arity$variadic = partitions_H__delegate;
return partitions_H;
})()
;
foundation.app.data.combinatorics.multiset_partitions_M = (function() {
var multiset_partitions_M = null;
var multiset_partitions_M__3 = (function (multiset,r,s){var n = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,multiset));var m = cljs.core.count.call(null,multiset);var f = cljs.core.PersistentVector.EMPTY;var c = cljs.core.PersistentVector.EMPTY;var u = cljs.core.PersistentVector.EMPTY;var v = cljs.core.PersistentVector.EMPTY;var vec__25928 = (function (){var j = 0;var c__$1 = c;var u__$1 = u;var v__$1 = v;while(true){
if(cljs.core._EQ_.call(null,j,m))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,u__$1,v__$1], null);
} else
{{
var G__25950 = (j + 1);
var G__25951 = cljs.core.assoc.call(null,c__$1,j,(j + 1));
var G__25952 = cljs.core.assoc.call(null,u__$1,j,multiset.call(null,(j + 1)));
var G__25953 = cljs.core.assoc.call(null,v__$1,j,multiset.call(null,(j + 1)));
j = G__25950;
c__$1 = G__25951;
u__$1 = G__25952;
v__$1 = G__25953;
continue;
}
}
break;
}
})();var c__$1 = cljs.core.nth.call(null,vec__25928,0,null);var u__$1 = cljs.core.nth.call(null,vec__25928,1,null);var v__$1 = cljs.core.nth.call(null,vec__25928,2,null);var a = 0;var b = m;var l = 0;var f__$1 = cljs.core.assoc.call(null,f,0,0,1,m);var stack = cljs.core.List.EMPTY;return multiset_partitions_M.call(null,n,m,f__$1,c__$1,u__$1,v__$1,a,b,l,r,s);
});
var multiset_partitions_M__11 = (function (n,m,f,c,u,v,a,b,l,r,s){while(true){
var vec__25929 = (function (){var j = a;var k = b;var x = false;var u__$1 = u;var v__$1 = v;var c__$1 = c;while(true){
if((j >= b))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [u__$1,v__$1,c__$1,j,k], null);
} else
{var u__$2 = cljs.core.assoc.call(null,u__$1,k,(u__$1.call(null,j) - v__$1.call(null,j)));if(cljs.core._EQ_.call(null,u__$2.call(null,k),0))
{{
var G__25954 = (j + 1);
var G__25955 = k;
var G__25956 = true;
var G__25957 = u__$2;
var G__25958 = v__$1;
var G__25959 = c__$1;
j = G__25954;
k = G__25955;
x = G__25956;
u__$1 = G__25957;
v__$1 = G__25958;
c__$1 = G__25959;
continue;
}
} else
{if(!(x))
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,(function (){var x__8161__auto__ = v__$1.call(null,j);var y__8162__auto__ = u__$2.call(null,k);return ((x__8161__auto__ < y__8162__auto__) ? x__8161__auto__ : y__8162__auto__);
})());var x__$1 = (u__$2.call(null,k) < v__$2.call(null,j));var k__$1 = (k + 1);var j__$1 = (j + 1);{
var G__25960 = j__$1;
var G__25961 = k__$1;
var G__25962 = x__$1;
var G__25963 = u__$2;
var G__25964 = v__$2;
var G__25965 = c__$2;
j = G__25960;
k = G__25961;
x = G__25962;
u__$1 = G__25963;
v__$1 = G__25964;
c__$1 = G__25965;
continue;
}
} else
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,u__$2.call(null,k));var k__$1 = (k + 1);var j__$1 = (j + 1);{
var G__25966 = j__$1;
var G__25967 = k__$1;
var G__25968 = x;
var G__25969 = u__$2;
var G__25970 = v__$2;
var G__25971 = c__$2;
j = G__25966;
k = G__25967;
x = G__25968;
u__$1 = G__25969;
v__$1 = G__25970;
c__$1 = G__25971;
continue;
}
}
}
}
break;
}
})();var u__$1 = cljs.core.nth.call(null,vec__25929,0,null);var v__$1 = cljs.core.nth.call(null,vec__25929,1,null);var c__$1 = cljs.core.nth.call(null,vec__25929,2,null);var j = cljs.core.nth.call(null,vec__25929,3,null);var k = cljs.core.nth.call(null,vec__25929,4,null);if(cljs.core.truth_((function (){var and__7835__auto__ = r;if(cljs.core.truth_(and__7835__auto__))
{return ((k > b)) && (cljs.core._EQ_.call(null,l,(r - 1)));
} else
{return and__7835__auto__;
}
})()))
{return foundation.app.data.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
} else
{if(cljs.core.truth_((function (){var and__7835__auto__ = s;if(cljs.core.truth_(and__7835__auto__))
{return ((k <= b)) && (((l + 1) < s));
} else
{return and__7835__auto__;
}
})()))
{return foundation.app.data.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
} else
{if((k > b))
{var a__$1 = b;var b__$1 = k;var l__$1 = (l + 1);var f__$1 = cljs.core.assoc.call(null,f,(l__$1 + 1),b__$1);{
var G__25972 = n;
var G__25973 = m;
var G__25974 = f__$1;
var G__25975 = c__$1;
var G__25976 = u__$1;
var G__25977 = v__$1;
var G__25978 = a__$1;
var G__25979 = b__$1;
var G__25980 = l__$1;
var G__25981 = r;
var G__25982 = s;
n = G__25972;
m = G__25973;
f = G__25974;
c = G__25975;
u = G__25976;
v = G__25977;
a = G__25978;
b = G__25979;
l = G__25980;
r = G__25981;
s = G__25982;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var part = (function (){var iter__8540__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s){
return (function iter__25930(s__25931){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s){
return (function (){var s__25931__$1 = s__25931;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__25931__$1);if(temp__4092__auto__)
{var s__25931__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__25931__$2))
{var c__8538__auto__ = cljs.core.chunk_first.call(null,s__25931__$2);var size__8539__auto__ = cljs.core.count.call(null,c__8538__auto__);var b__25933 = cljs.core.chunk_buffer.call(null,size__8539__auto__);if((function (){var i__25932 = 0;while(true){
if((i__25932 < size__8539__auto__))
{var y = cljs.core._nth.call(null,c__8538__auto__,i__25932);cljs.core.chunk_append.call(null,b__25933,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + 1)) - 1);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8540__auto__ = ((function (i__25932,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8538__auto__,size__8539__auto__,b__25933,s__25931__$2,temp__4092__auto__){
return (function iter__25942(s__25943){return (new cljs.core.LazySeq(null,((function (i__25932,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8538__auto__,size__8539__auto__,b__25933,s__25931__$2,temp__4092__auto__){
return (function (){var s__25943__$1 = s__25943;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__25943__$1);if(temp__4092__auto____$1)
{var s__25943__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__25943__$2))
{var c__8538__auto____$1 = cljs.core.chunk_first.call(null,s__25943__$2);var size__8539__auto____$1 = cljs.core.count.call(null,c__8538__auto____$1);var b__25945 = cljs.core.chunk_buffer.call(null,size__8539__auto____$1);if((function (){var i__25944 = 0;while(true){
if((i__25944 < size__8539__auto____$1))
{var z = cljs.core._nth.call(null,c__8538__auto____$1,i__25944);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{cljs.core.chunk_append.call(null,b__25945,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));
{
var G__25983 = (i__25944 + 1);
i__25944 = G__25983;
continue;
}
} else
{{
var G__25984 = (i__25944 + 1);
i__25944 = G__25984;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25945),iter__25942.call(null,cljs.core.chunk_rest.call(null,s__25943__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25945),null);
}
} else
{var z = cljs.core.first.call(null,s__25943__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),iter__25942.call(null,cljs.core.rest.call(null,s__25943__$2)));
} else
{{
var G__25985 = cljs.core.rest.call(null,s__25943__$2);
s__25943__$1 = G__25985;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__25932,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8538__auto__,size__8539__auto__,b__25933,s__25931__$2,temp__4092__auto__))
,null,null));
});})(i__25932,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8538__auto__,size__8539__auto__,b__25933,s__25931__$2,temp__4092__auto__))
;return iter__8540__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + 1)));
})());
})());
{
var G__25986 = (i__25932 + 1);
i__25932 = G__25986;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25933),iter__25930.call(null,cljs.core.chunk_rest.call(null,s__25931__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25933),null);
}
} else
{var y = cljs.core.first.call(null,s__25931__$2);return cljs.core.cons.call(null,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + 1)) - 1);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8540__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__25931__$2,temp__4092__auto__){
return (function iter__25946(s__25947){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__25931__$2,temp__4092__auto__){
return (function (){var s__25947__$1 = s__25947;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__25947__$1);if(temp__4092__auto____$1)
{var s__25947__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__25947__$2))
{var c__8538__auto__ = cljs.core.chunk_first.call(null,s__25947__$2);var size__8539__auto__ = cljs.core.count.call(null,c__8538__auto__);var b__25949 = cljs.core.chunk_buffer.call(null,size__8539__auto__);if((function (){var i__25948 = 0;while(true){
if((i__25948 < size__8539__auto__))
{var z = cljs.core._nth.call(null,c__8538__auto__,i__25948);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{cljs.core.chunk_append.call(null,b__25949,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));
{
var G__25987 = (i__25948 + 1);
i__25948 = G__25987;
continue;
}
} else
{{
var G__25988 = (i__25948 + 1);
i__25948 = G__25988;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25949),iter__25946.call(null,cljs.core.chunk_rest.call(null,s__25947__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25949),null);
}
} else
{var z = cljs.core.first.call(null,s__25947__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),iter__25946.call(null,cljs.core.rest.call(null,s__25947__$2)));
} else
{{
var G__25989 = cljs.core.rest.call(null,s__25947__$2);
s__25947__$1 = G__25989;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__25931__$2,temp__4092__auto__))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__25931__$2,temp__4092__auto__))
;return iter__8540__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + 1)));
})());
})(),iter__25930.call(null,cljs.core.rest.call(null,s__25931__$2)));
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s))
;return iter__8540__auto__.call(null,cljs.core.range.call(null,(l + 1)));
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
var G__25998 = (j - 1);
j = G__25998;
continue;
}
}
break;
}
})();if(cljs.core.truth_((function (){var and__7835__auto__ = r;if(cljs.core.truth_(and__7835__auto__))
{return (cljs.core._EQ_.call(null,j,a)) && ((((v.call(null,j) - 1) * (r - l)) < u.call(null,j)));
} else
{return and__7835__auto__;
}
})()))
{return foundation.app.data.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s);
} else
{if((cljs.core._EQ_.call(null,j,a)) && (cljs.core._EQ_.call(null,v.call(null,j),1)))
{return foundation.app.data.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var v__$1 = foundation.app.data.combinatorics.update.call(null,v,j,cljs.core.dec);var diff_uv = (cljs.core.truth_(s)?cljs.core.apply.call(null,cljs.core._PLUS_,(function (){var iter__8540__auto__ = ((function (v__$1){
return (function iter__25994(s__25995){return (new cljs.core.LazySeq(null,((function (v__$1){
return (function (){var s__25995__$1 = s__25995;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__25995__$1);if(temp__4092__auto__)
{var s__25995__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__25995__$2))
{var c__8538__auto__ = cljs.core.chunk_first.call(null,s__25995__$2);var size__8539__auto__ = cljs.core.count.call(null,c__8538__auto__);var b__25997 = cljs.core.chunk_buffer.call(null,size__8539__auto__);if((function (){var i__25996 = 0;while(true){
if((i__25996 < size__8539__auto__))
{var i = cljs.core._nth.call(null,c__8538__auto__,i__25996);cljs.core.chunk_append.call(null,b__25997,(u.call(null,i) - v__$1.call(null,i)));
{
var G__25999 = (i__25996 + 1);
i__25996 = G__25999;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25997),iter__25994.call(null,cljs.core.chunk_rest.call(null,s__25995__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25997),null);
}
} else
{var i = cljs.core.first.call(null,s__25995__$2);return cljs.core.cons.call(null,(u.call(null,i) - v__$1.call(null,i)),iter__25994.call(null,cljs.core.rest.call(null,s__25995__$2)));
}
} else
{return null;
}
break;
}
});})(v__$1))
,null,null));
});})(v__$1))
;return iter__8540__auto__.call(null,cljs.core.range.call(null,a,(j + 1)));
})()):null);var v__$2 = (function (){var ks = cljs.core.range.call(null,(j + 1),b);var v__$2 = v__$1;while(true){
if(cljs.core.empty_QMARK_.call(null,ks))
{return v__$2;
} else
{var k = cljs.core.first.call(null,ks);{
var G__26000 = cljs.core.rest.call(null,ks);
var G__26001 = cljs.core.assoc.call(null,v__$2,k,u.call(null,k));
ks = G__26000;
v__$2 = G__26001;
continue;
}
}
break;
}
})();var min_partitions_after_this = (cljs.core.truth_(s)?(s - (l + 1)):0);var amount_to_dec = (cljs.core.truth_(s)?(function (){var x__8154__auto__ = 0;var y__8155__auto__ = (min_partitions_after_this - diff_uv);return ((x__8154__auto__ > y__8155__auto__) ? x__8154__auto__ : y__8155__auto__);
})():0);var v__$3 = ((cljs.core._EQ_.call(null,amount_to_dec,0))?v__$2:(function (){var k_1 = (b - 1);var v__$3 = v__$2;var amount = amount_to_dec;while(true){
var vk = v__$3.call(null,k_1);if((amount > vk))
{{
var G__26002 = (k_1 - 1);
var G__26003 = cljs.core.assoc.call(null,v__$3,k_1,0);
var G__26004 = (amount - vk);
k_1 = G__26002;
v__$3 = G__26003;
amount = G__26004;
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
var partitions_M__delegate = function (items,p__26005){var map__26063 = p__26005;var map__26063__$1 = ((cljs.core.seq_QMARK_.call(null,map__26063))?cljs.core.apply.call(null,cljs.core.hash_map,map__26063):map__26063);var from = cljs.core.get.call(null,map__26063__$1,new cljs.core.Keyword(null,"min","min",1014012356));var to = cljs.core.get.call(null,map__26063__$1,new cljs.core.Keyword(null,"max","max",1014012118));if(cljs.core._EQ_.call(null,cljs.core.count.call(null,items),0))
{if((((function (){var or__7847__auto__ = from;if(cljs.core.truth_(or__7847__auto__))
{return or__7847__auto__;
} else
{return 0;
}
})() <= 0)) && ((0 <= (function (){var or__7847__auto__ = to;if(cljs.core.truth_(or__7847__auto__))
{return or__7847__auto__;
} else
{return 0;
}
})())))
{return cljs.core.list(cljs.core.List.EMPTY);
} else
{return cljs.core.List.EMPTY;
}
} else
{var items__$1 = cljs.core.vec.call(null,items);var ditems = cljs.core.vec.call(null,cljs.core.distinct.call(null,items__$1));var freqs = cljs.core.frequencies.call(null,items__$1);var N = cljs.core.count.call(null,items__$1);var M = cljs.core.count.call(null,ditems);var from__$1 = (cljs.core.truth_((function (){var and__7835__auto__ = from;if(cljs.core.truth_(and__7835__auto__))
{return (from <= 1);
} else
{return and__7835__auto__;
}
})())?null:from);var to__$1 = (cljs.core.truth_((function (){var and__7835__auto__ = to;if(cljs.core.truth_(and__7835__auto__))
{return (to >= N);
} else
{return and__7835__auto__;
}
})())?null:to);if(!(((1 <= (function (){var or__7847__auto__ = from__$1;if(cljs.core.truth_(or__7847__auto__))
{return or__7847__auto__;
} else
{return 1;
}
})())) && ((((function (){var or__7847__auto__ = from__$1;if(cljs.core.truth_(or__7847__auto__))
{return or__7847__auto__;
} else
{return 1;
}
})() <= (function (){var or__7847__auto__ = to__$1;if(cljs.core.truth_(or__7847__auto__))
{return or__7847__auto__;
} else
{return N;
}
})())) && (((function (){var or__7847__auto__ = to__$1;if(cljs.core.truth_(or__7847__auto__))
{return or__7847__auto__;
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
{var start_multiset = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8540__auto__ = (function iter__26064(s__26065){return (new cljs.core.LazySeq(null,(function (){var s__26065__$1 = s__26065;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__26065__$1);if(temp__4092__auto__)
{var s__26065__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__26065__$2))
{var c__8538__auto__ = cljs.core.chunk_first.call(null,s__26065__$2);var size__8539__auto__ = cljs.core.count.call(null,c__8538__auto__);var b__26067 = cljs.core.chunk_buffer.call(null,size__8539__auto__);if((function (){var i__26066 = 0;while(true){
if((i__26066 < size__8539__auto__))
{var i = cljs.core._nth.call(null,c__8538__auto__,i__26066);var j = (i + 1);cljs.core.chunk_append.call(null,b__26067,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null));
{
var G__26120 = (i__26066 + 1);
i__26066 = G__26120;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26067),iter__26064.call(null,cljs.core.chunk_rest.call(null,s__26065__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26067),null);
}
} else
{var i = cljs.core.first.call(null,s__26065__$2);var j = (i + 1);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null),iter__26064.call(null,cljs.core.rest.call(null,s__26065__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8540__auto__.call(null,cljs.core.range.call(null,M));
})());var parts = foundation.app.data.combinatorics.multiset_partitions_M.call(null,start_multiset,to__$1,from__$1);var iter__8540__auto__ = (function iter__26068(s__26069){return (new cljs.core.LazySeq(null,(function (){var s__26069__$1 = s__26069;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__26069__$1);if(temp__4092__auto__)
{var s__26069__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__26069__$2))
{var c__8538__auto__ = cljs.core.chunk_first.call(null,s__26069__$2);var size__8539__auto__ = cljs.core.count.call(null,c__8538__auto__);var b__26071 = cljs.core.chunk_buffer.call(null,size__8539__auto__);if((function (){var i__26070 = 0;while(true){
if((i__26070 < size__8539__auto__))
{var part = cljs.core._nth.call(null,c__8538__auto__,i__26070);cljs.core.chunk_append.call(null,b__26071,(function (){var iter__8540__auto__ = ((function (i__26070,part,c__8538__auto__,size__8539__auto__,b__26071,s__26069__$2,temp__4092__auto__){
return (function iter__26096(s__26097){return (new cljs.core.LazySeq(null,((function (i__26070,part,c__8538__auto__,size__8539__auto__,b__26071,s__26069__$2,temp__4092__auto__){
return (function (){var s__26097__$1 = s__26097;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__26097__$1);if(temp__4092__auto____$1)
{var s__26097__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__26097__$2))
{var c__8538__auto____$1 = cljs.core.chunk_first.call(null,s__26097__$2);var size__8539__auto____$1 = cljs.core.count.call(null,c__8538__auto____$1);var b__26099 = cljs.core.chunk_buffer.call(null,size__8539__auto____$1);if((function (){var i__26098 = 0;while(true){
if((i__26098 < size__8539__auto____$1))
{var multiset = cljs.core._nth.call(null,c__8538__auto____$1,i__26098);cljs.core.chunk_append.call(null,b__26099,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__26098,i__26070,multiset,c__8538__auto____$1,size__8539__auto____$1,b__26099,s__26097__$2,temp__4092__auto____$1,part,c__8538__auto__,size__8539__auto__,b__26071,s__26069__$2,temp__4092__auto__){
return (function (p__26104){var vec__26105 = p__26104;var index = cljs.core.nth.call(null,vec__26105,0,null);var numtimes = cljs.core.nth.call(null,vec__26105,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__26098,i__26070,multiset,c__8538__auto____$1,size__8539__auto____$1,b__26099,s__26097__$2,temp__4092__auto____$1,part,c__8538__auto__,size__8539__auto__,b__26071,s__26069__$2,temp__4092__auto__))
,multiset)));
{
var G__26121 = (i__26098 + 1);
i__26098 = G__26121;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26099),iter__26096.call(null,cljs.core.chunk_rest.call(null,s__26097__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26099),null);
}
} else
{var multiset = cljs.core.first.call(null,s__26097__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__26070,multiset,s__26097__$2,temp__4092__auto____$1,part,c__8538__auto__,size__8539__auto__,b__26071,s__26069__$2,temp__4092__auto__){
return (function (p__26106){var vec__26107 = p__26106;var index = cljs.core.nth.call(null,vec__26107,0,null);var numtimes = cljs.core.nth.call(null,vec__26107,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__26070,multiset,s__26097__$2,temp__4092__auto____$1,part,c__8538__auto__,size__8539__auto__,b__26071,s__26069__$2,temp__4092__auto__))
,multiset)),iter__26096.call(null,cljs.core.rest.call(null,s__26097__$2)));
}
} else
{return null;
}
break;
}
});})(i__26070,part,c__8538__auto__,size__8539__auto__,b__26071,s__26069__$2,temp__4092__auto__))
,null,null));
});})(i__26070,part,c__8538__auto__,size__8539__auto__,b__26071,s__26069__$2,temp__4092__auto__))
;return iter__8540__auto__.call(null,part);
})());
{
var G__26122 = (i__26070 + 1);
i__26070 = G__26122;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26071),iter__26068.call(null,cljs.core.chunk_rest.call(null,s__26069__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26071),null);
}
} else
{var part = cljs.core.first.call(null,s__26069__$2);return cljs.core.cons.call(null,(function (){var iter__8540__auto__ = ((function (part,s__26069__$2,temp__4092__auto__){
return (function iter__26108(s__26109){return (new cljs.core.LazySeq(null,((function (part,s__26069__$2,temp__4092__auto__){
return (function (){var s__26109__$1 = s__26109;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__26109__$1);if(temp__4092__auto____$1)
{var s__26109__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__26109__$2))
{var c__8538__auto__ = cljs.core.chunk_first.call(null,s__26109__$2);var size__8539__auto__ = cljs.core.count.call(null,c__8538__auto__);var b__26111 = cljs.core.chunk_buffer.call(null,size__8539__auto__);if((function (){var i__26110 = 0;while(true){
if((i__26110 < size__8539__auto__))
{var multiset = cljs.core._nth.call(null,c__8538__auto__,i__26110);cljs.core.chunk_append.call(null,b__26111,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__26110,multiset,c__8538__auto__,size__8539__auto__,b__26111,s__26109__$2,temp__4092__auto____$1,part,s__26069__$2,temp__4092__auto__){
return (function (p__26116){var vec__26117 = p__26116;var index = cljs.core.nth.call(null,vec__26117,0,null);var numtimes = cljs.core.nth.call(null,vec__26117,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__26110,multiset,c__8538__auto__,size__8539__auto__,b__26111,s__26109__$2,temp__4092__auto____$1,part,s__26069__$2,temp__4092__auto__))
,multiset)));
{
var G__26123 = (i__26110 + 1);
i__26110 = G__26123;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26111),iter__26108.call(null,cljs.core.chunk_rest.call(null,s__26109__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26111),null);
}
} else
{var multiset = cljs.core.first.call(null,s__26109__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (multiset,s__26109__$2,temp__4092__auto____$1,part,s__26069__$2,temp__4092__auto__){
return (function (p__26118){var vec__26119 = p__26118;var index = cljs.core.nth.call(null,vec__26119,0,null);var numtimes = cljs.core.nth.call(null,vec__26119,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(multiset,s__26109__$2,temp__4092__auto____$1,part,s__26069__$2,temp__4092__auto__))
,multiset)),iter__26108.call(null,cljs.core.rest.call(null,s__26109__$2)));
}
} else
{return null;
}
break;
}
});})(part,s__26069__$2,temp__4092__auto__))
,null,null));
});})(part,s__26069__$2,temp__4092__auto__))
;return iter__8540__auto__.call(null,part);
})(),iter__26068.call(null,cljs.core.rest.call(null,s__26069__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8540__auto__.call(null,parts);
} else
{return null;
}
}
}
}
};
var partitions_M = function (items,var_args){
var p__26005 = null;if (arguments.length > 1) {
  p__26005 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions_M__delegate.call(this,items,p__26005);};
partitions_M.cljs$lang$maxFixedArity = 1;
partitions_M.cljs$lang$applyTo = (function (arglist__26124){
var items = cljs.core.first(arglist__26124);
var p__26005 = cljs.core.rest(arglist__26124);
return partitions_M__delegate(items,p__26005);
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
partitions.cljs$lang$applyTo = (function (arglist__26125){
var items = cljs.core.first(arglist__26125);
var args = cljs.core.rest(arglist__26125);
return partitions__delegate(items,args);
});
partitions.cljs$core$IFn$_invoke$arity$variadic = partitions__delegate;
return partitions;
})()
;
