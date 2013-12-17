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
var G__359716 = cljs.core.assoc.call(null,c__$2,(j__$1 - 1),(c__$2.call(null,j__$1) - 1));
var G__359717 = (j__$1 - 1);
c__$2 = G__359716;
j__$1 = G__359717;
continue;
}
}
break;
}
}
}
});
return (new cljs.core.LazySeq(null,(function (){var c = cljs.core.vec.call(null,cljs.core.cons.call(null,null,(function (){var iter__14677__auto__ = (function iter__359712(s__359713){return (new cljs.core.LazySeq(null,(function (){var s__359713__$1 = s__359713;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__359713__$1);if(temp__4092__auto__)
{var s__359713__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__359713__$2))
{var c__14675__auto__ = cljs.core.chunk_first.call(null,s__359713__$2);var size__14676__auto__ = cljs.core.count.call(null,c__14675__auto__);var b__359715 = cljs.core.chunk_buffer.call(null,size__14676__auto__);if((function (){var i__359714 = 0;while(true){
if((i__359714 < size__14676__auto__))
{var j = cljs.core._nth.call(null,c__14675__auto__,i__359714);cljs.core.chunk_append.call(null,b__359715,((j + cnt) + (- (n + 1))));
{
var G__359718 = (i__359714 + 1);
i__359714 = G__359718;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__359715),iter__359712.call(null,cljs.core.chunk_rest.call(null,s__359713__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__359715),null);
}
} else
{var j = cljs.core.first.call(null,s__359713__$2);return cljs.core.cons.call(null,((j + cnt) + (- (n + 1))),iter__359712.call(null,cljs.core.rest.call(null,s__359713__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14677__auto__.call(null,cljs.core.range.call(null,1,(n + 1)));
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
{return cljs.core.map.call(null,(function (p1__359719_SHARP_){return cljs.core.map.call(null,v_items,p1__359719_SHARP_);
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
var G__359720 = (i - 1);
var G__359721 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__359720;
v_seqs__$2 = G__359721;
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
cartesian_product.cljs$lang$applyTo = (function (arglist__359722){
var seqs = cljs.core.seq(arglist__359722);
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
var G__359723 = (i - 1);
i = G__359723;
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
var G__359724 = (i - 1);
i = G__359724;
continue;
}
}
break;
}
})();var v__$1 = cljs.core.assoc.call(null,v,j,v.call(null,l),l,vj);var k = (j + 1);var l__$1 = (len - 1);while(true){
if((k < l__$1))
{{
var G__359725 = cljs.core.assoc.call(null,v__$1,k,v__$1.call(null,l__$1),l__$1,v__$1.call(null,k));
var G__359726 = (k + 1);
var G__359727 = (l__$1 - 1);
v__$1 = G__359725;
k = G__359726;
l__$1 = G__359727;
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
foundation.app.data.combinatorics.multi_perm = (function multi_perm(l){var f = cljs.core.frequencies.call(null,l);var v = cljs.core.vec.call(null,cljs.core.keys.call(null,f));var indices = cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__14677__auto__ = ((function (f,v){
return (function iter__359732(s__359733){return (new cljs.core.LazySeq(null,((function (f,v){
return (function (){var s__359733__$1 = s__359733;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__359733__$1);if(temp__4092__auto__)
{var s__359733__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__359733__$2))
{var c__14675__auto__ = cljs.core.chunk_first.call(null,s__359733__$2);var size__14676__auto__ = cljs.core.count.call(null,c__14675__auto__);var b__359735 = cljs.core.chunk_buffer.call(null,size__14676__auto__);if((function (){var i__359734 = 0;while(true){
if((i__359734 < size__14676__auto__))
{var i = cljs.core._nth.call(null,c__14675__auto__,i__359734);cljs.core.chunk_append.call(null,b__359735,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));
{
var G__359736 = (i__359734 + 1);
i__359734 = G__359736;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__359735),iter__359732.call(null,cljs.core.chunk_rest.call(null,s__359733__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__359735),null);
}
} else
{var i = cljs.core.first.call(null,s__359733__$2);return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),iter__359732.call(null,cljs.core.rest.call(null,s__359733__$2)));
}
} else
{return null;
}
break;
}
});})(f,v))
,null,null));
});})(f,v))
;return iter__14677__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,v)));
})());return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.map,v),foundation.app.data.combinatorics.lex_permutations.call(null,indices));
});
/**
* All the distinct permutations of items, lexicographic by index.
*/
foundation.app.data.combinatorics.permutations = (function permutations(items){if(foundation.app.data.combinatorics.sorted_numbers_QMARK_.call(null,items))
{return foundation.app.data.combinatorics.lex_permutations.call(null,items);
} else
{if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core.distinct_QMARK_,items)))
{var v = cljs.core.vec.call(null,items);return cljs.core.map.call(null,(function (p1__359737_SHARP_){return cljs.core.map.call(null,v,p1__359737_SHARP_);
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
{return cljs.core.vec.call(null,(function (){var iter__14677__auto__ = (function iter__359742(s__359743){return (new cljs.core.LazySeq(null,(function (){var s__359743__$1 = s__359743;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__359743__$1);if(temp__4092__auto__)
{var s__359743__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__359743__$2))
{var c__14675__auto__ = cljs.core.chunk_first.call(null,s__359743__$2);var size__14676__auto__ = cljs.core.count.call(null,c__14675__auto__);var b__359745 = cljs.core.chunk_buffer.call(null,size__14676__auto__);if((function (){var i__359744 = 0;while(true){
if((i__359744 < size__14676__auto__))
{var i = cljs.core._nth.call(null,c__14675__auto__,i__359744);cljs.core.chunk_append.call(null,b__359745,(function (){var x__14291__auto__ = 0;var y__14292__auto__ = (i - ((n - s) - -1));return ((x__14291__auto__ > y__14292__auto__) ? x__14291__auto__ : y__14292__auto__);
})());
{
var G__359746 = (i__359744 + 1);
i__359744 = G__359746;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__359745),iter__359742.call(null,cljs.core.chunk_rest.call(null,s__359743__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__359745),null);
}
} else
{var i = cljs.core.first.call(null,s__359743__$2);return cljs.core.cons.call(null,(function (){var x__14291__auto__ = 0;var y__14292__auto__ = (i - ((n - s) - -1));return ((x__14291__auto__ > y__14292__auto__) ? x__14291__auto__ : y__14292__auto__);
})(),iter__359742.call(null,cljs.core.rest.call(null,s__359743__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14677__auto__.call(null,cljs.core.range.call(null,1,(n + 1)));
})());
} else
{return cljs.core.vec.call(null,cljs.core.repeat.call(null,n,0));
}
});
foundation.app.data.combinatorics.growth_strings_H = (function() {
var growth_strings_H = null;
var growth_strings_H__3 = (function (n,r,s){return growth_strings_H.call(null,n,foundation.app.data.combinatorics.init.call(null,n,s),cljs.core.vec.call(null,cljs.core.repeat.call(null,n,1)),r,s);
});
var growth_strings_H__5 = (function (n,a,b,r,s){return cljs.core.cons.call(null,a,(new cljs.core.LazySeq(null,(function (){if((function (){var and__13967__auto__ = (cljs.core.peek.call(null,b) > cljs.core.peek.call(null,a));if(and__13967__auto__)
{if(cljs.core.truth_(r))
{return (cljs.core.peek.call(null,a) < (r - 1));
} else
{return true;
}
} else
{return and__13967__auto__;
}
})())
{return growth_strings_H.call(null,n,foundation.app.data.combinatorics.update.call(null,a,(n - 1),cljs.core.inc),b,r,s);
} else
{var j = (function (){var j = (n - 2);while(true){
if((function (){var and__13967__auto__ = (a.call(null,j) < b.call(null,j));if(and__13967__auto__)
{var and__13967__auto____$1 = (cljs.core.truth_(r)?(a.call(null,j) < (r - 1)):true);if(and__13967__auto____$1)
{if(cljs.core.truth_(s))
{return (((s - b.call(null,j)) - ((((a.call(null,j) + 1) === b.call(null,j)))?1:0)) <= (n - j));
} else
{return true;
}
} else
{return and__13967__auto____$1;
}
} else
{return and__13967__auto__;
}
})())
{return j;
} else
{{
var G__359749 = (j - 1);
j = G__359749;
continue;
}
}
break;
}
})();if((j === 0))
{return cljs.core.List.EMPTY;
} else
{var a__$1 = foundation.app.data.combinatorics.update.call(null,a,j,cljs.core.inc);var x = (cljs.core.truth_(s)?(s - (b.call(null,j) + ((cljs.core._EQ_.call(null,a__$1.call(null,j),b.call(null,j)))?1:0))):null);var vec__359748 = (function (){var a__$2 = a__$1;var b__$1 = b;var i = (j + 1);var current_max = (b__$1.call(null,j) + (((b__$1.call(null,j) === a__$2.call(null,j)))?1:0));while(true){
if((i === n))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$2,b__$1], null);
} else
{if(cljs.core.truth_((function (){var and__13967__auto__ = s;if(cljs.core.truth_(and__13967__auto__))
{return (i > ((n - x) - 1));
} else
{return and__13967__auto__;
}
})()))
{var new_a_i = ((i - n) + s);{
var G__359750 = cljs.core.assoc.call(null,a__$2,i,new_a_i);
var G__359751 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__359752 = (i + 1);
var G__359753 = (function (){var x__14291__auto__ = current_max;var y__14292__auto__ = (new_a_i + 1);return ((x__14291__auto__ > y__14292__auto__) ? x__14291__auto__ : y__14292__auto__);
})();
a__$2 = G__359750;
b__$1 = G__359751;
i = G__359752;
current_max = G__359753;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__359754 = cljs.core.assoc.call(null,a__$2,i,0);
var G__359755 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__359756 = (i + 1);
var G__359757 = current_max;
a__$2 = G__359754;
b__$1 = G__359755;
i = G__359756;
current_max = G__359757;
continue;
}
} else
{return null;
}
}
}
break;
}
})();var a__$2 = cljs.core.nth.call(null,vec__359748,0,null);var b__$1 = cljs.core.nth.call(null,vec__359748,1,null);return growth_strings_H.call(null,n,a__$2,b__$1,r,s);
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
var lex_partitions_H__delegate = function (N,p__359758){var map__359764 = p__359758;var map__359764__$1 = ((cljs.core.seq_QMARK_.call(null,map__359764))?cljs.core.apply.call(null,cljs.core.hash_map,map__359764):map__359764);var from = cljs.core.get.call(null,map__359764__$1,new cljs.core.Keyword(null,"min","min",1014012356));var to = cljs.core.get.call(null,map__359764__$1,new cljs.core.Keyword(null,"max","max",1014012118));if(cljs.core._EQ_.call(null,N,0))
{if((((function (){var or__13979__auto__ = from;if(cljs.core.truth_(or__13979__auto__))
{return or__13979__auto__;
} else
{return 0;
}
})() <= 0)) && ((0 <= (function (){var or__13979__auto__ = to;if(cljs.core.truth_(or__13979__auto__))
{return or__13979__auto__;
} else
{return 0;
}
})())))
{return cljs.core.list(cljs.core.List.EMPTY);
} else
{return cljs.core.List.EMPTY;
}
} else
{var from__$1 = (cljs.core.truth_((function (){var and__13967__auto__ = from;if(cljs.core.truth_(and__13967__auto__))
{return (from <= 1);
} else
{return and__13967__auto__;
}
})())?null:from);var to__$1 = (cljs.core.truth_((function (){var and__13967__auto__ = to;if(cljs.core.truth_(and__13967__auto__))
{return (to >= N);
} else
{return and__13967__auto__;
}
})())?null:to);if(!(((1 <= (function (){var or__13979__auto__ = from__$1;if(cljs.core.truth_(or__13979__auto__))
{return or__13979__auto__;
} else
{return 1;
}
})())) && ((((function (){var or__13979__auto__ = from__$1;if(cljs.core.truth_(or__13979__auto__))
{return or__13979__auto__;
} else
{return 1;
}
})() <= (function (){var or__13979__auto__ = to__$1;if(cljs.core.truth_(or__13979__auto__))
{return or__13979__auto__;
} else
{return N;
}
})())) && (((function (){var or__13979__auto__ = to__$1;if(cljs.core.truth_(or__13979__auto__))
{return or__13979__auto__;
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
{var growth_strings = foundation.app.data.combinatorics.growth_strings_H.call(null,N,to__$1,from__$1);var iter__14677__auto__ = (function iter__359765(s__359766){return (new cljs.core.LazySeq(null,(function (){var s__359766__$1 = s__359766;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__359766__$1);if(temp__4092__auto__)
{var s__359766__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__359766__$2))
{var c__14675__auto__ = cljs.core.chunk_first.call(null,s__359766__$2);var size__14676__auto__ = cljs.core.count.call(null,c__14675__auto__);var b__359768 = cljs.core.chunk_buffer.call(null,size__14676__auto__);if((function (){var i__359767 = 0;while(true){
if((i__359767 < size__14676__auto__))
{var growth_string = cljs.core._nth.call(null,c__14675__auto__,i__359767);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));cljs.core.chunk_append.call(null,b__359768,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))));
{
var G__359769 = (i__359767 + 1);
i__359767 = G__359769;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__359768),iter__359765.call(null,cljs.core.chunk_rest.call(null,s__359766__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__359768),null);
}
} else
{var growth_string = cljs.core.first.call(null,s__359766__$2);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));return cljs.core.cons.call(null,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))),iter__359765.call(null,cljs.core.rest.call(null,s__359766__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14677__auto__.call(null,growth_strings);
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
var p__359758 = null;if (arguments.length > 1) {
  p__359758 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return lex_partitions_H__delegate.call(this,N,p__359758);};
lex_partitions_H.cljs$lang$maxFixedArity = 1;
lex_partitions_H.cljs$lang$applyTo = (function (arglist__359770){
var N = cljs.core.first(arglist__359770);
var p__359758 = cljs.core.rest(arglist__359770);
return lex_partitions_H__delegate(N,p__359758);
});
lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic = lex_partitions_H__delegate;
return lex_partitions_H;
})()
;
/**
* @param {...*} var_args
*/
foundation.app.data.combinatorics.partitions_H = (function() { 
var partitions_H__delegate = function (items,args){var items__$1 = cljs.core.vec.call(null,items);var N = cljs.core.count.call(null,items__$1);var lex = cljs.core.apply.call(null,foundation.app.data.combinatorics.lex_partitions_H,N,args);var iter__14677__auto__ = (function iter__359791(s__359792){return (new cljs.core.LazySeq(null,(function (){var s__359792__$1 = s__359792;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__359792__$1);if(temp__4092__auto__)
{var s__359792__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__359792__$2))
{var c__14675__auto__ = cljs.core.chunk_first.call(null,s__359792__$2);var size__14676__auto__ = cljs.core.count.call(null,c__14675__auto__);var b__359794 = cljs.core.chunk_buffer.call(null,size__14676__auto__);if((function (){var i__359793 = 0;while(true){
if((i__359793 < size__14676__auto__))
{var parts = cljs.core._nth.call(null,c__14675__auto__,i__359793);cljs.core.chunk_append.call(null,b__359794,(function (){var iter__14677__auto__ = ((function (i__359793,parts,c__14675__auto__,size__14676__auto__,b__359794,s__359792__$2,temp__4092__auto__){
return (function iter__359803(s__359804){return (new cljs.core.LazySeq(null,((function (i__359793,parts,c__14675__auto__,size__14676__auto__,b__359794,s__359792__$2,temp__4092__auto__){
return (function (){var s__359804__$1 = s__359804;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__359804__$1);if(temp__4092__auto____$1)
{var s__359804__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__359804__$2))
{var c__14675__auto____$1 = cljs.core.chunk_first.call(null,s__359804__$2);var size__14676__auto____$1 = cljs.core.count.call(null,c__14675__auto____$1);var b__359806 = cljs.core.chunk_buffer.call(null,size__14676__auto____$1);if((function (){var i__359805 = 0;while(true){
if((i__359805 < size__14676__auto____$1))
{var part = cljs.core._nth.call(null,c__14675__auto____$1,i__359805);cljs.core.chunk_append.call(null,b__359806,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__359805,i__359793,part,c__14675__auto____$1,size__14676__auto____$1,b__359806,s__359804__$2,temp__4092__auto____$1,parts,c__14675__auto__,size__14676__auto__,b__359794,s__359792__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__359805,i__359793,part,c__14675__auto____$1,size__14676__auto____$1,b__359806,s__359804__$2,temp__4092__auto____$1,parts,c__14675__auto__,size__14676__auto__,b__359794,s__359792__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__359811 = (i__359805 + 1);
i__359805 = G__359811;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__359806),iter__359803.call(null,cljs.core.chunk_rest.call(null,s__359804__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__359806),null);
}
} else
{var part = cljs.core.first.call(null,s__359804__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__359793,part,s__359804__$2,temp__4092__auto____$1,parts,c__14675__auto__,size__14676__auto__,b__359794,s__359792__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__359793,part,s__359804__$2,temp__4092__auto____$1,parts,c__14675__auto__,size__14676__auto__,b__359794,s__359792__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__359803.call(null,cljs.core.rest.call(null,s__359804__$2)));
}
} else
{return null;
}
break;
}
});})(i__359793,parts,c__14675__auto__,size__14676__auto__,b__359794,s__359792__$2,temp__4092__auto__))
,null,null));
});})(i__359793,parts,c__14675__auto__,size__14676__auto__,b__359794,s__359792__$2,temp__4092__auto__))
;return iter__14677__auto__.call(null,parts);
})());
{
var G__359812 = (i__359793 + 1);
i__359793 = G__359812;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__359794),iter__359791.call(null,cljs.core.chunk_rest.call(null,s__359792__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__359794),null);
}
} else
{var parts = cljs.core.first.call(null,s__359792__$2);return cljs.core.cons.call(null,(function (){var iter__14677__auto__ = ((function (parts,s__359792__$2,temp__4092__auto__){
return (function iter__359807(s__359808){return (new cljs.core.LazySeq(null,((function (parts,s__359792__$2,temp__4092__auto__){
return (function (){var s__359808__$1 = s__359808;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__359808__$1);if(temp__4092__auto____$1)
{var s__359808__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__359808__$2))
{var c__14675__auto__ = cljs.core.chunk_first.call(null,s__359808__$2);var size__14676__auto__ = cljs.core.count.call(null,c__14675__auto__);var b__359810 = cljs.core.chunk_buffer.call(null,size__14676__auto__);if((function (){var i__359809 = 0;while(true){
if((i__359809 < size__14676__auto__))
{var part = cljs.core._nth.call(null,c__14675__auto__,i__359809);cljs.core.chunk_append.call(null,b__359810,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__359809,part,c__14675__auto__,size__14676__auto__,b__359810,s__359808__$2,temp__4092__auto____$1,parts,s__359792__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__359809,part,c__14675__auto__,size__14676__auto__,b__359810,s__359808__$2,temp__4092__auto____$1,parts,s__359792__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__359813 = (i__359809 + 1);
i__359809 = G__359813;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__359810),iter__359807.call(null,cljs.core.chunk_rest.call(null,s__359808__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__359810),null);
}
} else
{var part = cljs.core.first.call(null,s__359808__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (part,s__359808__$2,temp__4092__auto____$1,parts,s__359792__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(part,s__359808__$2,temp__4092__auto____$1,parts,s__359792__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__359807.call(null,cljs.core.rest.call(null,s__359808__$2)));
}
} else
{return null;
}
break;
}
});})(parts,s__359792__$2,temp__4092__auto__))
,null,null));
});})(parts,s__359792__$2,temp__4092__auto__))
;return iter__14677__auto__.call(null,parts);
})(),iter__359791.call(null,cljs.core.rest.call(null,s__359792__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14677__auto__.call(null,lex);
};
var partitions_H = function (items,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions_H__delegate.call(this,items,args);};
partitions_H.cljs$lang$maxFixedArity = 1;
partitions_H.cljs$lang$applyTo = (function (arglist__359814){
var items = cljs.core.first(arglist__359814);
var args = cljs.core.rest(arglist__359814);
return partitions_H__delegate(items,args);
});
partitions_H.cljs$core$IFn$_invoke$arity$variadic = partitions_H__delegate;
return partitions_H;
})()
;
foundation.app.data.combinatorics.multiset_partitions_M = (function() {
var multiset_partitions_M = null;
var multiset_partitions_M__3 = (function (multiset,r,s){var n = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,multiset));var m = cljs.core.count.call(null,multiset);var f = cljs.core.PersistentVector.EMPTY;var c = cljs.core.PersistentVector.EMPTY;var u = cljs.core.PersistentVector.EMPTY;var v = cljs.core.PersistentVector.EMPTY;var vec__359837 = (function (){var j = 0;var c__$1 = c;var u__$1 = u;var v__$1 = v;while(true){
if(cljs.core._EQ_.call(null,j,m))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,u__$1,v__$1], null);
} else
{{
var G__359859 = (j + 1);
var G__359860 = cljs.core.assoc.call(null,c__$1,j,(j + 1));
var G__359861 = cljs.core.assoc.call(null,u__$1,j,multiset.call(null,(j + 1)));
var G__359862 = cljs.core.assoc.call(null,v__$1,j,multiset.call(null,(j + 1)));
j = G__359859;
c__$1 = G__359860;
u__$1 = G__359861;
v__$1 = G__359862;
continue;
}
}
break;
}
})();var c__$1 = cljs.core.nth.call(null,vec__359837,0,null);var u__$1 = cljs.core.nth.call(null,vec__359837,1,null);var v__$1 = cljs.core.nth.call(null,vec__359837,2,null);var a = 0;var b = m;var l = 0;var f__$1 = cljs.core.assoc.call(null,f,0,0,1,m);var stack = cljs.core.List.EMPTY;return multiset_partitions_M.call(null,n,m,f__$1,c__$1,u__$1,v__$1,a,b,l,r,s);
});
var multiset_partitions_M__11 = (function (n,m,f,c,u,v,a,b,l,r,s){while(true){
var vec__359838 = (function (){var j = a;var k = b;var x = false;var u__$1 = u;var v__$1 = v;var c__$1 = c;while(true){
if((j >= b))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [u__$1,v__$1,c__$1,j,k], null);
} else
{var u__$2 = cljs.core.assoc.call(null,u__$1,k,(u__$1.call(null,j) - v__$1.call(null,j)));if(cljs.core._EQ_.call(null,u__$2.call(null,k),0))
{{
var G__359863 = (j + 1);
var G__359864 = k;
var G__359865 = true;
var G__359866 = u__$2;
var G__359867 = v__$1;
var G__359868 = c__$1;
j = G__359863;
k = G__359864;
x = G__359865;
u__$1 = G__359866;
v__$1 = G__359867;
c__$1 = G__359868;
continue;
}
} else
{if(!(x))
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,(function (){var x__14298__auto__ = v__$1.call(null,j);var y__14299__auto__ = u__$2.call(null,k);return ((x__14298__auto__ < y__14299__auto__) ? x__14298__auto__ : y__14299__auto__);
})());var x__$1 = (u__$2.call(null,k) < v__$2.call(null,j));var k__$1 = (k + 1);var j__$1 = (j + 1);{
var G__359869 = j__$1;
var G__359870 = k__$1;
var G__359871 = x__$1;
var G__359872 = u__$2;
var G__359873 = v__$2;
var G__359874 = c__$2;
j = G__359869;
k = G__359870;
x = G__359871;
u__$1 = G__359872;
v__$1 = G__359873;
c__$1 = G__359874;
continue;
}
} else
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,u__$2.call(null,k));var k__$1 = (k + 1);var j__$1 = (j + 1);{
var G__359875 = j__$1;
var G__359876 = k__$1;
var G__359877 = x;
var G__359878 = u__$2;
var G__359879 = v__$2;
var G__359880 = c__$2;
j = G__359875;
k = G__359876;
x = G__359877;
u__$1 = G__359878;
v__$1 = G__359879;
c__$1 = G__359880;
continue;
}
}
}
}
break;
}
})();var u__$1 = cljs.core.nth.call(null,vec__359838,0,null);var v__$1 = cljs.core.nth.call(null,vec__359838,1,null);var c__$1 = cljs.core.nth.call(null,vec__359838,2,null);var j = cljs.core.nth.call(null,vec__359838,3,null);var k = cljs.core.nth.call(null,vec__359838,4,null);if(cljs.core.truth_((function (){var and__13967__auto__ = r;if(cljs.core.truth_(and__13967__auto__))
{return ((k > b)) && (cljs.core._EQ_.call(null,l,(r - 1)));
} else
{return and__13967__auto__;
}
})()))
{return foundation.app.data.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
} else
{if(cljs.core.truth_((function (){var and__13967__auto__ = s;if(cljs.core.truth_(and__13967__auto__))
{return ((k <= b)) && (((l + 1) < s));
} else
{return and__13967__auto__;
}
})()))
{return foundation.app.data.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
} else
{if((k > b))
{var a__$1 = b;var b__$1 = k;var l__$1 = (l + 1);var f__$1 = cljs.core.assoc.call(null,f,(l__$1 + 1),b__$1);{
var G__359881 = n;
var G__359882 = m;
var G__359883 = f__$1;
var G__359884 = c__$1;
var G__359885 = u__$1;
var G__359886 = v__$1;
var G__359887 = a__$1;
var G__359888 = b__$1;
var G__359889 = l__$1;
var G__359890 = r;
var G__359891 = s;
n = G__359881;
m = G__359882;
f = G__359883;
c = G__359884;
u = G__359885;
v = G__359886;
a = G__359887;
b = G__359888;
l = G__359889;
r = G__359890;
s = G__359891;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var part = (function (){var iter__14677__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s){
return (function iter__359839(s__359840){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s){
return (function (){var s__359840__$1 = s__359840;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__359840__$1);if(temp__4092__auto__)
{var s__359840__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__359840__$2))
{var c__14675__auto__ = cljs.core.chunk_first.call(null,s__359840__$2);var size__14676__auto__ = cljs.core.count.call(null,c__14675__auto__);var b__359842 = cljs.core.chunk_buffer.call(null,size__14676__auto__);if((function (){var i__359841 = 0;while(true){
if((i__359841 < size__14676__auto__))
{var y = cljs.core._nth.call(null,c__14675__auto__,i__359841);cljs.core.chunk_append.call(null,b__359842,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + 1)) - 1);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__14677__auto__ = ((function (i__359841,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__14675__auto__,size__14676__auto__,b__359842,s__359840__$2,temp__4092__auto__){
return (function iter__359851(s__359852){return (new cljs.core.LazySeq(null,((function (i__359841,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__14675__auto__,size__14676__auto__,b__359842,s__359840__$2,temp__4092__auto__){
return (function (){var s__359852__$1 = s__359852;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__359852__$1);if(temp__4092__auto____$1)
{var s__359852__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__359852__$2))
{var c__14675__auto____$1 = cljs.core.chunk_first.call(null,s__359852__$2);var size__14676__auto____$1 = cljs.core.count.call(null,c__14675__auto____$1);var b__359854 = cljs.core.chunk_buffer.call(null,size__14676__auto____$1);if((function (){var i__359853 = 0;while(true){
if((i__359853 < size__14676__auto____$1))
{var z = cljs.core._nth.call(null,c__14675__auto____$1,i__359853);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{cljs.core.chunk_append.call(null,b__359854,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));
{
var G__359892 = (i__359853 + 1);
i__359853 = G__359892;
continue;
}
} else
{{
var G__359893 = (i__359853 + 1);
i__359853 = G__359893;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__359854),iter__359851.call(null,cljs.core.chunk_rest.call(null,s__359852__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__359854),null);
}
} else
{var z = cljs.core.first.call(null,s__359852__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),iter__359851.call(null,cljs.core.rest.call(null,s__359852__$2)));
} else
{{
var G__359894 = cljs.core.rest.call(null,s__359852__$2);
s__359852__$1 = G__359894;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__359841,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__14675__auto__,size__14676__auto__,b__359842,s__359840__$2,temp__4092__auto__))
,null,null));
});})(i__359841,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__14675__auto__,size__14676__auto__,b__359842,s__359840__$2,temp__4092__auto__))
;return iter__14677__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + 1)));
})());
})());
{
var G__359895 = (i__359841 + 1);
i__359841 = G__359895;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__359842),iter__359839.call(null,cljs.core.chunk_rest.call(null,s__359840__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__359842),null);
}
} else
{var y = cljs.core.first.call(null,s__359840__$2);return cljs.core.cons.call(null,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + 1)) - 1);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__14677__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__359840__$2,temp__4092__auto__){
return (function iter__359855(s__359856){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__359840__$2,temp__4092__auto__){
return (function (){var s__359856__$1 = s__359856;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__359856__$1);if(temp__4092__auto____$1)
{var s__359856__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__359856__$2))
{var c__14675__auto__ = cljs.core.chunk_first.call(null,s__359856__$2);var size__14676__auto__ = cljs.core.count.call(null,c__14675__auto__);var b__359858 = cljs.core.chunk_buffer.call(null,size__14676__auto__);if((function (){var i__359857 = 0;while(true){
if((i__359857 < size__14676__auto__))
{var z = cljs.core._nth.call(null,c__14675__auto__,i__359857);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{cljs.core.chunk_append.call(null,b__359858,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));
{
var G__359896 = (i__359857 + 1);
i__359857 = G__359896;
continue;
}
} else
{{
var G__359897 = (i__359857 + 1);
i__359857 = G__359897;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__359858),iter__359855.call(null,cljs.core.chunk_rest.call(null,s__359856__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__359858),null);
}
} else
{var z = cljs.core.first.call(null,s__359856__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),iter__359855.call(null,cljs.core.rest.call(null,s__359856__$2)));
} else
{{
var G__359898 = cljs.core.rest.call(null,s__359856__$2);
s__359856__$1 = G__359898;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__359840__$2,temp__4092__auto__))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__359840__$2,temp__4092__auto__))
;return iter__14677__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + 1)));
})());
})(),iter__359839.call(null,cljs.core.rest.call(null,s__359840__$2)));
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s))
;return iter__14677__auto__.call(null,cljs.core.range.call(null,(l + 1)));
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
var G__359907 = (j - 1);
j = G__359907;
continue;
}
}
break;
}
})();if(cljs.core.truth_((function (){var and__13967__auto__ = r;if(cljs.core.truth_(and__13967__auto__))
{return (cljs.core._EQ_.call(null,j,a)) && ((((v.call(null,j) - 1) * (r - l)) < u.call(null,j)));
} else
{return and__13967__auto__;
}
})()))
{return foundation.app.data.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s);
} else
{if((cljs.core._EQ_.call(null,j,a)) && (cljs.core._EQ_.call(null,v.call(null,j),1)))
{return foundation.app.data.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var v__$1 = foundation.app.data.combinatorics.update.call(null,v,j,cljs.core.dec);var diff_uv = (cljs.core.truth_(s)?cljs.core.apply.call(null,cljs.core._PLUS_,(function (){var iter__14677__auto__ = ((function (v__$1){
return (function iter__359903(s__359904){return (new cljs.core.LazySeq(null,((function (v__$1){
return (function (){var s__359904__$1 = s__359904;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__359904__$1);if(temp__4092__auto__)
{var s__359904__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__359904__$2))
{var c__14675__auto__ = cljs.core.chunk_first.call(null,s__359904__$2);var size__14676__auto__ = cljs.core.count.call(null,c__14675__auto__);var b__359906 = cljs.core.chunk_buffer.call(null,size__14676__auto__);if((function (){var i__359905 = 0;while(true){
if((i__359905 < size__14676__auto__))
{var i = cljs.core._nth.call(null,c__14675__auto__,i__359905);cljs.core.chunk_append.call(null,b__359906,(u.call(null,i) - v__$1.call(null,i)));
{
var G__359908 = (i__359905 + 1);
i__359905 = G__359908;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__359906),iter__359903.call(null,cljs.core.chunk_rest.call(null,s__359904__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__359906),null);
}
} else
{var i = cljs.core.first.call(null,s__359904__$2);return cljs.core.cons.call(null,(u.call(null,i) - v__$1.call(null,i)),iter__359903.call(null,cljs.core.rest.call(null,s__359904__$2)));
}
} else
{return null;
}
break;
}
});})(v__$1))
,null,null));
});})(v__$1))
;return iter__14677__auto__.call(null,cljs.core.range.call(null,a,(j + 1)));
})()):null);var v__$2 = (function (){var ks = cljs.core.range.call(null,(j + 1),b);var v__$2 = v__$1;while(true){
if(cljs.core.empty_QMARK_.call(null,ks))
{return v__$2;
} else
{var k = cljs.core.first.call(null,ks);{
var G__359909 = cljs.core.rest.call(null,ks);
var G__359910 = cljs.core.assoc.call(null,v__$2,k,u.call(null,k));
ks = G__359909;
v__$2 = G__359910;
continue;
}
}
break;
}
})();var min_partitions_after_this = (cljs.core.truth_(s)?(s - (l + 1)):0);var amount_to_dec = (cljs.core.truth_(s)?(function (){var x__14291__auto__ = 0;var y__14292__auto__ = (min_partitions_after_this - diff_uv);return ((x__14291__auto__ > y__14292__auto__) ? x__14291__auto__ : y__14292__auto__);
})():0);var v__$3 = ((cljs.core._EQ_.call(null,amount_to_dec,0))?v__$2:(function (){var k_1 = (b - 1);var v__$3 = v__$2;var amount = amount_to_dec;while(true){
var vk = v__$3.call(null,k_1);if((amount > vk))
{{
var G__359911 = (k_1 - 1);
var G__359912 = cljs.core.assoc.call(null,v__$3,k_1,0);
var G__359913 = (amount - vk);
k_1 = G__359911;
v__$3 = G__359912;
amount = G__359913;
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
var partitions_M__delegate = function (items,p__359914){var map__359972 = p__359914;var map__359972__$1 = ((cljs.core.seq_QMARK_.call(null,map__359972))?cljs.core.apply.call(null,cljs.core.hash_map,map__359972):map__359972);var from = cljs.core.get.call(null,map__359972__$1,new cljs.core.Keyword(null,"min","min",1014012356));var to = cljs.core.get.call(null,map__359972__$1,new cljs.core.Keyword(null,"max","max",1014012118));if(cljs.core._EQ_.call(null,cljs.core.count.call(null,items),0))
{if((((function (){var or__13979__auto__ = from;if(cljs.core.truth_(or__13979__auto__))
{return or__13979__auto__;
} else
{return 0;
}
})() <= 0)) && ((0 <= (function (){var or__13979__auto__ = to;if(cljs.core.truth_(or__13979__auto__))
{return or__13979__auto__;
} else
{return 0;
}
})())))
{return cljs.core.list(cljs.core.List.EMPTY);
} else
{return cljs.core.List.EMPTY;
}
} else
{var items__$1 = cljs.core.vec.call(null,items);var ditems = cljs.core.vec.call(null,cljs.core.distinct.call(null,items__$1));var freqs = cljs.core.frequencies.call(null,items__$1);var N = cljs.core.count.call(null,items__$1);var M = cljs.core.count.call(null,ditems);var from__$1 = (cljs.core.truth_((function (){var and__13967__auto__ = from;if(cljs.core.truth_(and__13967__auto__))
{return (from <= 1);
} else
{return and__13967__auto__;
}
})())?null:from);var to__$1 = (cljs.core.truth_((function (){var and__13967__auto__ = to;if(cljs.core.truth_(and__13967__auto__))
{return (to >= N);
} else
{return and__13967__auto__;
}
})())?null:to);if(!(((1 <= (function (){var or__13979__auto__ = from__$1;if(cljs.core.truth_(or__13979__auto__))
{return or__13979__auto__;
} else
{return 1;
}
})())) && ((((function (){var or__13979__auto__ = from__$1;if(cljs.core.truth_(or__13979__auto__))
{return or__13979__auto__;
} else
{return 1;
}
})() <= (function (){var or__13979__auto__ = to__$1;if(cljs.core.truth_(or__13979__auto__))
{return or__13979__auto__;
} else
{return N;
}
})())) && (((function (){var or__13979__auto__ = to__$1;if(cljs.core.truth_(or__13979__auto__))
{return or__13979__auto__;
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
{var start_multiset = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__14677__auto__ = (function iter__359973(s__359974){return (new cljs.core.LazySeq(null,(function (){var s__359974__$1 = s__359974;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__359974__$1);if(temp__4092__auto__)
{var s__359974__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__359974__$2))
{var c__14675__auto__ = cljs.core.chunk_first.call(null,s__359974__$2);var size__14676__auto__ = cljs.core.count.call(null,c__14675__auto__);var b__359976 = cljs.core.chunk_buffer.call(null,size__14676__auto__);if((function (){var i__359975 = 0;while(true){
if((i__359975 < size__14676__auto__))
{var i = cljs.core._nth.call(null,c__14675__auto__,i__359975);var j = (i + 1);cljs.core.chunk_append.call(null,b__359976,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null));
{
var G__360029 = (i__359975 + 1);
i__359975 = G__360029;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__359976),iter__359973.call(null,cljs.core.chunk_rest.call(null,s__359974__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__359976),null);
}
} else
{var i = cljs.core.first.call(null,s__359974__$2);var j = (i + 1);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null),iter__359973.call(null,cljs.core.rest.call(null,s__359974__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14677__auto__.call(null,cljs.core.range.call(null,M));
})());var parts = foundation.app.data.combinatorics.multiset_partitions_M.call(null,start_multiset,to__$1,from__$1);var iter__14677__auto__ = (function iter__359977(s__359978){return (new cljs.core.LazySeq(null,(function (){var s__359978__$1 = s__359978;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__359978__$1);if(temp__4092__auto__)
{var s__359978__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__359978__$2))
{var c__14675__auto__ = cljs.core.chunk_first.call(null,s__359978__$2);var size__14676__auto__ = cljs.core.count.call(null,c__14675__auto__);var b__359980 = cljs.core.chunk_buffer.call(null,size__14676__auto__);if((function (){var i__359979 = 0;while(true){
if((i__359979 < size__14676__auto__))
{var part = cljs.core._nth.call(null,c__14675__auto__,i__359979);cljs.core.chunk_append.call(null,b__359980,(function (){var iter__14677__auto__ = ((function (i__359979,part,c__14675__auto__,size__14676__auto__,b__359980,s__359978__$2,temp__4092__auto__){
return (function iter__360005(s__360006){return (new cljs.core.LazySeq(null,((function (i__359979,part,c__14675__auto__,size__14676__auto__,b__359980,s__359978__$2,temp__4092__auto__){
return (function (){var s__360006__$1 = s__360006;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__360006__$1);if(temp__4092__auto____$1)
{var s__360006__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__360006__$2))
{var c__14675__auto____$1 = cljs.core.chunk_first.call(null,s__360006__$2);var size__14676__auto____$1 = cljs.core.count.call(null,c__14675__auto____$1);var b__360008 = cljs.core.chunk_buffer.call(null,size__14676__auto____$1);if((function (){var i__360007 = 0;while(true){
if((i__360007 < size__14676__auto____$1))
{var multiset = cljs.core._nth.call(null,c__14675__auto____$1,i__360007);cljs.core.chunk_append.call(null,b__360008,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__360007,i__359979,multiset,c__14675__auto____$1,size__14676__auto____$1,b__360008,s__360006__$2,temp__4092__auto____$1,part,c__14675__auto__,size__14676__auto__,b__359980,s__359978__$2,temp__4092__auto__){
return (function (p__360013){var vec__360014 = p__360013;var index = cljs.core.nth.call(null,vec__360014,0,null);var numtimes = cljs.core.nth.call(null,vec__360014,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__360007,i__359979,multiset,c__14675__auto____$1,size__14676__auto____$1,b__360008,s__360006__$2,temp__4092__auto____$1,part,c__14675__auto__,size__14676__auto__,b__359980,s__359978__$2,temp__4092__auto__))
,multiset)));
{
var G__360030 = (i__360007 + 1);
i__360007 = G__360030;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__360008),iter__360005.call(null,cljs.core.chunk_rest.call(null,s__360006__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__360008),null);
}
} else
{var multiset = cljs.core.first.call(null,s__360006__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__359979,multiset,s__360006__$2,temp__4092__auto____$1,part,c__14675__auto__,size__14676__auto__,b__359980,s__359978__$2,temp__4092__auto__){
return (function (p__360015){var vec__360016 = p__360015;var index = cljs.core.nth.call(null,vec__360016,0,null);var numtimes = cljs.core.nth.call(null,vec__360016,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__359979,multiset,s__360006__$2,temp__4092__auto____$1,part,c__14675__auto__,size__14676__auto__,b__359980,s__359978__$2,temp__4092__auto__))
,multiset)),iter__360005.call(null,cljs.core.rest.call(null,s__360006__$2)));
}
} else
{return null;
}
break;
}
});})(i__359979,part,c__14675__auto__,size__14676__auto__,b__359980,s__359978__$2,temp__4092__auto__))
,null,null));
});})(i__359979,part,c__14675__auto__,size__14676__auto__,b__359980,s__359978__$2,temp__4092__auto__))
;return iter__14677__auto__.call(null,part);
})());
{
var G__360031 = (i__359979 + 1);
i__359979 = G__360031;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__359980),iter__359977.call(null,cljs.core.chunk_rest.call(null,s__359978__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__359980),null);
}
} else
{var part = cljs.core.first.call(null,s__359978__$2);return cljs.core.cons.call(null,(function (){var iter__14677__auto__ = ((function (part,s__359978__$2,temp__4092__auto__){
return (function iter__360017(s__360018){return (new cljs.core.LazySeq(null,((function (part,s__359978__$2,temp__4092__auto__){
return (function (){var s__360018__$1 = s__360018;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__360018__$1);if(temp__4092__auto____$1)
{var s__360018__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__360018__$2))
{var c__14675__auto__ = cljs.core.chunk_first.call(null,s__360018__$2);var size__14676__auto__ = cljs.core.count.call(null,c__14675__auto__);var b__360020 = cljs.core.chunk_buffer.call(null,size__14676__auto__);if((function (){var i__360019 = 0;while(true){
if((i__360019 < size__14676__auto__))
{var multiset = cljs.core._nth.call(null,c__14675__auto__,i__360019);cljs.core.chunk_append.call(null,b__360020,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__360019,multiset,c__14675__auto__,size__14676__auto__,b__360020,s__360018__$2,temp__4092__auto____$1,part,s__359978__$2,temp__4092__auto__){
return (function (p__360025){var vec__360026 = p__360025;var index = cljs.core.nth.call(null,vec__360026,0,null);var numtimes = cljs.core.nth.call(null,vec__360026,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__360019,multiset,c__14675__auto__,size__14676__auto__,b__360020,s__360018__$2,temp__4092__auto____$1,part,s__359978__$2,temp__4092__auto__))
,multiset)));
{
var G__360032 = (i__360019 + 1);
i__360019 = G__360032;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__360020),iter__360017.call(null,cljs.core.chunk_rest.call(null,s__360018__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__360020),null);
}
} else
{var multiset = cljs.core.first.call(null,s__360018__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (multiset,s__360018__$2,temp__4092__auto____$1,part,s__359978__$2,temp__4092__auto__){
return (function (p__360027){var vec__360028 = p__360027;var index = cljs.core.nth.call(null,vec__360028,0,null);var numtimes = cljs.core.nth.call(null,vec__360028,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(multiset,s__360018__$2,temp__4092__auto____$1,part,s__359978__$2,temp__4092__auto__))
,multiset)),iter__360017.call(null,cljs.core.rest.call(null,s__360018__$2)));
}
} else
{return null;
}
break;
}
});})(part,s__359978__$2,temp__4092__auto__))
,null,null));
});})(part,s__359978__$2,temp__4092__auto__))
;return iter__14677__auto__.call(null,part);
})(),iter__359977.call(null,cljs.core.rest.call(null,s__359978__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14677__auto__.call(null,parts);
} else
{return null;
}
}
}
}
};
var partitions_M = function (items,var_args){
var p__359914 = null;if (arguments.length > 1) {
  p__359914 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions_M__delegate.call(this,items,p__359914);};
partitions_M.cljs$lang$maxFixedArity = 1;
partitions_M.cljs$lang$applyTo = (function (arglist__360033){
var items = cljs.core.first(arglist__360033);
var p__359914 = cljs.core.rest(arglist__360033);
return partitions_M__delegate(items,p__359914);
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
partitions.cljs$lang$applyTo = (function (arglist__360034){
var items = cljs.core.first(arglist__360034);
var args = cljs.core.rest(arglist__360034);
return partitions__delegate(items,args);
});
partitions.cljs$core$IFn$_invoke$arity$variadic = partitions__delegate;
return partitions;
})()
;

//# sourceMappingURL=combinatorics.js.map