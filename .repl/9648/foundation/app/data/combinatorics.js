// Compiled by ClojureScript 0.0-2030
goog.provide('foundation.app.data.combinatorics');
goog.require('cljs.core');
foundation.app.data.combinatorics.index_combinations = (function index_combinations(n,cnt){var iter_comb = (function iter_comb(c,j){if((j > n))
{return null;
} else
{var c__$1 = cljs.core.assoc.call(null,c,j,(c.call(null,j) - 1));if((c__$1.call(null,j) < j))
{return cljs.core.PersistentVector.fromArray([c__$1,(j + 1)], true);
} else
{var c__$2 = c__$1;var j__$1 = j;while(true){
if(cljs.core._EQ_.call(null,j__$1,1))
{return cljs.core.PersistentVector.fromArray([c__$2,j__$1], true);
} else
{{
var G__16869 = cljs.core.assoc.call(null,c__$2,(j__$1 - 1),(c__$2.call(null,j__$1) - 1));
var G__16870 = (j__$1 - 1);
c__$2 = G__16869;
j__$1 = G__16870;
continue;
}
}
break;
}
}
}
});
return (new cljs.core.LazySeq(null,(function (){var c = cljs.core.vec.call(null,cljs.core.cons.call(null,null,(function (){var iter__8125__auto__ = (function iter__16865(s__16866){return (new cljs.core.LazySeq(null,(function (){var s__16866__$1 = s__16866;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16866__$1);if(temp__4092__auto__)
{var s__16866__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16866__$2))
{var c__8123__auto__ = cljs.core.chunk_first.call(null,s__16866__$2);var size__8124__auto__ = cljs.core.count.call(null,c__8123__auto__);var b__16868 = cljs.core.chunk_buffer.call(null,size__8124__auto__);if((function (){var i__16867 = 0;while(true){
if((i__16867 < size__8124__auto__))
{var j = cljs.core._nth.call(null,c__8123__auto__,i__16867);cljs.core.chunk_append.call(null,b__16868,((j + cnt) + (- (n + 1))));
{
var G__16871 = (i__16867 + 1);
i__16867 = G__16871;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16868),iter__16865.call(null,cljs.core.chunk_rest.call(null,s__16866__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16868),null);
}
} else
{var j = cljs.core.first.call(null,s__16866__$2);return cljs.core.cons.call(null,((j + cnt) + (- (n + 1))),iter__16865.call(null,cljs.core.rest.call(null,s__16866__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8125__auto__.call(null,cljs.core.range.call(null,1,(n + 1)));
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
{return cljs.core.map.call(null,(function (p1__16872_SHARP_){return cljs.core.map.call(null,v_items,p1__16872_SHARP_);
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
var G__16873 = (i - 1);
var G__16874 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__16873;
v_seqs__$2 = G__16874;
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
cartesian_product.cljs$lang$applyTo = (function (arglist__16875){
var seqs = cljs.core.seq(arglist__16875);
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
var G__16876 = (i - 1);
i = G__16876;
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
var G__16877 = (i - 1);
i = G__16877;
continue;
}
}
break;
}
})();var v__$1 = cljs.core.assoc.call(null,v,j,v.call(null,l),l,vj);var k = (j + 1);var l__$1 = (len - 1);while(true){
if((k < l__$1))
{{
var G__16878 = cljs.core.assoc.call(null,v__$1,k,v__$1.call(null,l__$1),l__$1,v__$1.call(null,k));
var G__16879 = (k + 1);
var G__16880 = (l__$1 - 1);
v__$1 = G__16878;
k = G__16879;
l__$1 = G__16880;
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
foundation.app.data.combinatorics.multi_perm = (function multi_perm(l){var f = cljs.core.frequencies.call(null,l);var v = cljs.core.vec.call(null,cljs.core.keys.call(null,f));var indices = cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__8125__auto__ = ((function (f,v){
return (function iter__16885(s__16886){return (new cljs.core.LazySeq(null,((function (f,v){
return (function (){var s__16886__$1 = s__16886;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16886__$1);if(temp__4092__auto__)
{var s__16886__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16886__$2))
{var c__8123__auto__ = cljs.core.chunk_first.call(null,s__16886__$2);var size__8124__auto__ = cljs.core.count.call(null,c__8123__auto__);var b__16888 = cljs.core.chunk_buffer.call(null,size__8124__auto__);if((function (){var i__16887 = 0;while(true){
if((i__16887 < size__8124__auto__))
{var i = cljs.core._nth.call(null,c__8123__auto__,i__16887);cljs.core.chunk_append.call(null,b__16888,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));
{
var G__16889 = (i__16887 + 1);
i__16887 = G__16889;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16888),iter__16885.call(null,cljs.core.chunk_rest.call(null,s__16886__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16888),null);
}
} else
{var i = cljs.core.first.call(null,s__16886__$2);return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),iter__16885.call(null,cljs.core.rest.call(null,s__16886__$2)));
}
} else
{return null;
}
break;
}
});})(f,v))
,null,null));
});})(f,v))
;return iter__8125__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,v)));
})());return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.map,v),foundation.app.data.combinatorics.lex_permutations.call(null,indices));
});
/**
* All the distinct permutations of items, lexicographic by index.
*/
foundation.app.data.combinatorics.permutations = (function permutations(items){if(cljs.core.truth_(foundation.app.data.combinatorics.sorted_numbers_QMARK_.call(null,items)))
{return foundation.app.data.combinatorics.lex_permutations.call(null,items);
} else
{if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core.distinct_QMARK_,items)))
{var v = cljs.core.vec.call(null,items);return cljs.core.map.call(null,(function (p1__16890_SHARP_){return cljs.core.map.call(null,v,p1__16890_SHARP_);
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
{return cljs.core.vec.call(null,(function (){var iter__8125__auto__ = (function iter__16895(s__16896){return (new cljs.core.LazySeq(null,(function (){var s__16896__$1 = s__16896;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16896__$1);if(temp__4092__auto__)
{var s__16896__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16896__$2))
{var c__8123__auto__ = cljs.core.chunk_first.call(null,s__16896__$2);var size__8124__auto__ = cljs.core.count.call(null,c__8123__auto__);var b__16898 = cljs.core.chunk_buffer.call(null,size__8124__auto__);if((function (){var i__16897 = 0;while(true){
if((i__16897 < size__8124__auto__))
{var i = cljs.core._nth.call(null,c__8123__auto__,i__16897);cljs.core.chunk_append.call(null,b__16898,(function (){var x__7744__auto__ = 0;var y__7745__auto__ = (i - ((n - s) - -1));return ((x__7744__auto__ > y__7745__auto__) ? x__7744__auto__ : y__7745__auto__);
})());
{
var G__16899 = (i__16897 + 1);
i__16897 = G__16899;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16898),iter__16895.call(null,cljs.core.chunk_rest.call(null,s__16896__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16898),null);
}
} else
{var i = cljs.core.first.call(null,s__16896__$2);return cljs.core.cons.call(null,(function (){var x__7744__auto__ = 0;var y__7745__auto__ = (i - ((n - s) - -1));return ((x__7744__auto__ > y__7745__auto__) ? x__7744__auto__ : y__7745__auto__);
})(),iter__16895.call(null,cljs.core.rest.call(null,s__16896__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8125__auto__.call(null,cljs.core.range.call(null,1,(n + 1)));
})());
} else
{return cljs.core.vec.call(null,cljs.core.repeat.call(null,n,0));
}
});
foundation.app.data.combinatorics.growth_strings_H = (function() {
var growth_strings_H = null;
var growth_strings_H__3 = (function (n,r,s){return growth_strings_H.call(null,n,foundation.app.data.combinatorics.init.call(null,n,s),cljs.core.vec.call(null,cljs.core.repeat.call(null,n,1)),r,s);
});
var growth_strings_H__5 = (function (n,a,b,r,s){return cljs.core.cons.call(null,a,(new cljs.core.LazySeq(null,(function (){if((function (){var and__7430__auto__ = (cljs.core.peek.call(null,b) > cljs.core.peek.call(null,a));if(and__7430__auto__)
{if(cljs.core.truth_(r))
{return (cljs.core.peek.call(null,a) < (r - 1));
} else
{return true;
}
} else
{return and__7430__auto__;
}
})())
{return growth_strings_H.call(null,n,foundation.app.data.combinatorics.update.call(null,a,(n - 1),cljs.core.inc),b,r,s);
} else
{var j = (function (){var j = (n - 2);while(true){
if((function (){var and__7430__auto__ = (a.call(null,j) < b.call(null,j));if(and__7430__auto__)
{var and__7430__auto____$1 = (cljs.core.truth_(r)?(a.call(null,j) < (r - 1)):true);if(and__7430__auto____$1)
{if(cljs.core.truth_(s))
{return (((s - b.call(null,j)) - ((((a.call(null,j) + 1) === b.call(null,j)))?1:0)) <= (n - j));
} else
{return true;
}
} else
{return and__7430__auto____$1;
}
} else
{return and__7430__auto__;
}
})())
{return j;
} else
{{
var G__16902 = (j - 1);
j = G__16902;
continue;
}
}
break;
}
})();if((j === 0))
{return cljs.core.List.EMPTY;
} else
{var a__$1 = foundation.app.data.combinatorics.update.call(null,a,j,cljs.core.inc);var x = (cljs.core.truth_(s)?(s - (b.call(null,j) + ((cljs.core._EQ_.call(null,a__$1.call(null,j),b.call(null,j)))?1:0))):null);var vec__16901 = (function (){var a__$2 = a__$1;var b__$1 = b;var i = (j + 1);var current_max = (b__$1.call(null,j) + (((b__$1.call(null,j) === a__$2.call(null,j)))?1:0));while(true){
if((i === n))
{return cljs.core.PersistentVector.fromArray([a__$2,b__$1], true);
} else
{if(cljs.core.truth_((function (){var and__7430__auto__ = s;if(cljs.core.truth_(and__7430__auto__))
{return (i > ((n - x) - 1));
} else
{return and__7430__auto__;
}
})()))
{var new_a_i = ((i - n) + s);{
var G__16903 = cljs.core.assoc.call(null,a__$2,i,new_a_i);
var G__16904 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__16905 = (i + 1);
var G__16906 = (function (){var x__7744__auto__ = current_max;var y__7745__auto__ = (new_a_i + 1);return ((x__7744__auto__ > y__7745__auto__) ? x__7744__auto__ : y__7745__auto__);
})();
a__$2 = G__16903;
b__$1 = G__16904;
i = G__16905;
current_max = G__16906;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__16907 = cljs.core.assoc.call(null,a__$2,i,0);
var G__16908 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__16909 = (i + 1);
var G__16910 = current_max;
a__$2 = G__16907;
b__$1 = G__16908;
i = G__16909;
current_max = G__16910;
continue;
}
} else
{return null;
}
}
}
break;
}
})();var a__$2 = cljs.core.nth.call(null,vec__16901,0,null);var b__$1 = cljs.core.nth.call(null,vec__16901,1,null);return growth_strings_H.call(null,n,a__$2,b__$1,r,s);
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
var lex_partitions_H__delegate = function (N,p__16911){var map__16917 = p__16911;var map__16917__$1 = ((cljs.core.seq_QMARK_.call(null,map__16917))?cljs.core.apply.call(null,cljs.core.hash_map,map__16917):map__16917);var from = cljs.core.get.call(null,map__16917__$1,new cljs.core.Keyword(null,"min","min",1014012356));var to = cljs.core.get.call(null,map__16917__$1,new cljs.core.Keyword(null,"max","max",1014012118));if(cljs.core._EQ_.call(null,N,0))
{if((((function (){var or__7439__auto__ = from;if(cljs.core.truth_(or__7439__auto__))
{return or__7439__auto__;
} else
{return 0;
}
})() <= 0)) && ((0 <= (function (){var or__7439__auto__ = to;if(cljs.core.truth_(or__7439__auto__))
{return or__7439__auto__;
} else
{return 0;
}
})())))
{return cljs.core.list(cljs.core.List.EMPTY);
} else
{return cljs.core.List.EMPTY;
}
} else
{var from__$1 = (cljs.core.truth_((function (){var and__7430__auto__ = from;if(cljs.core.truth_(and__7430__auto__))
{return (from <= 1);
} else
{return and__7430__auto__;
}
})())?null:from);var to__$1 = (cljs.core.truth_((function (){var and__7430__auto__ = to;if(cljs.core.truth_(and__7430__auto__))
{return (to >= N);
} else
{return and__7430__auto__;
}
})())?null:to);if(!(((1 <= (function (){var or__7439__auto__ = from__$1;if(cljs.core.truth_(or__7439__auto__))
{return or__7439__auto__;
} else
{return 1;
}
})())) && ((((function (){var or__7439__auto__ = from__$1;if(cljs.core.truth_(or__7439__auto__))
{return or__7439__auto__;
} else
{return 1;
}
})() <= (function (){var or__7439__auto__ = to__$1;if(cljs.core.truth_(or__7439__auto__))
{return or__7439__auto__;
} else
{return N;
}
})())) && (((function (){var or__7439__auto__ = to__$1;if(cljs.core.truth_(or__7439__auto__))
{return or__7439__auto__;
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
{return cljs.core.list(cljs.core.list(cljs.core.PersistentVector.fromArray([0], true)));
} else
{if(cljs.core._EQ_.call(null,to__$1,1))
{return cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.range.call(null,N)))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,206),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,19)))))))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,206),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18)))));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var growth_strings = foundation.app.data.combinatorics.growth_strings_H.call(null,N,to__$1,from__$1);var iter__8125__auto__ = (function iter__16918(s__16919){return (new cljs.core.LazySeq(null,(function (){var s__16919__$1 = s__16919;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16919__$1);if(temp__4092__auto__)
{var s__16919__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16919__$2))
{var c__8123__auto__ = cljs.core.chunk_first.call(null,s__16919__$2);var size__8124__auto__ = cljs.core.count.call(null,c__8123__auto__);var b__16921 = cljs.core.chunk_buffer.call(null,size__8124__auto__);if((function (){var i__16920 = 0;while(true){
if((i__16920 < size__8124__auto__))
{var growth_string = cljs.core._nth.call(null,c__8123__auto__,i__16920);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));cljs.core.chunk_append.call(null,b__16921,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))));
{
var G__16922 = (i__16920 + 1);
i__16920 = G__16922;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16921),iter__16918.call(null,cljs.core.chunk_rest.call(null,s__16919__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16921),null);
}
} else
{var growth_string = cljs.core.first.call(null,s__16919__$2);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));return cljs.core.cons.call(null,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))),iter__16918.call(null,cljs.core.rest.call(null,s__16919__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8125__auto__.call(null,growth_strings);
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
var p__16911 = null;if (arguments.length > 1) {
  p__16911 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return lex_partitions_H__delegate.call(this,N,p__16911);};
lex_partitions_H.cljs$lang$maxFixedArity = 1;
lex_partitions_H.cljs$lang$applyTo = (function (arglist__16923){
var N = cljs.core.first(arglist__16923);
var p__16911 = cljs.core.rest(arglist__16923);
return lex_partitions_H__delegate(N,p__16911);
});
lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic = lex_partitions_H__delegate;
return lex_partitions_H;
})()
;
/**
* @param {...*} var_args
*/
foundation.app.data.combinatorics.partitions_H = (function() { 
var partitions_H__delegate = function (items,args){var items__$1 = cljs.core.vec.call(null,items);var N = cljs.core.count.call(null,items__$1);var lex = cljs.core.apply.call(null,foundation.app.data.combinatorics.lex_partitions_H,N,args);var iter__8125__auto__ = (function iter__16944(s__16945){return (new cljs.core.LazySeq(null,(function (){var s__16945__$1 = s__16945;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16945__$1);if(temp__4092__auto__)
{var s__16945__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16945__$2))
{var c__8123__auto__ = cljs.core.chunk_first.call(null,s__16945__$2);var size__8124__auto__ = cljs.core.count.call(null,c__8123__auto__);var b__16947 = cljs.core.chunk_buffer.call(null,size__8124__auto__);if((function (){var i__16946 = 0;while(true){
if((i__16946 < size__8124__auto__))
{var parts = cljs.core._nth.call(null,c__8123__auto__,i__16946);cljs.core.chunk_append.call(null,b__16947,(function (){var iter__8125__auto__ = ((function (i__16946,parts,c__8123__auto__,size__8124__auto__,b__16947,s__16945__$2,temp__4092__auto__){
return (function iter__16956(s__16957){return (new cljs.core.LazySeq(null,((function (i__16946,parts,c__8123__auto__,size__8124__auto__,b__16947,s__16945__$2,temp__4092__auto__){
return (function (){var s__16957__$1 = s__16957;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__16957__$1);if(temp__4092__auto____$1)
{var s__16957__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__16957__$2))
{var c__8123__auto____$1 = cljs.core.chunk_first.call(null,s__16957__$2);var size__8124__auto____$1 = cljs.core.count.call(null,c__8123__auto____$1);var b__16959 = cljs.core.chunk_buffer.call(null,size__8124__auto____$1);if((function (){var i__16958 = 0;while(true){
if((i__16958 < size__8124__auto____$1))
{var part = cljs.core._nth.call(null,c__8123__auto____$1,i__16958);cljs.core.chunk_append.call(null,b__16959,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__16958,i__16946,part,c__8123__auto____$1,size__8124__auto____$1,b__16959,s__16957__$2,temp__4092__auto____$1,parts,c__8123__auto__,size__8124__auto__,b__16947,s__16945__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__16958,i__16946,part,c__8123__auto____$1,size__8124__auto____$1,b__16959,s__16957__$2,temp__4092__auto____$1,parts,c__8123__auto__,size__8124__auto__,b__16947,s__16945__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__16964 = (i__16958 + 1);
i__16958 = G__16964;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16959),iter__16956.call(null,cljs.core.chunk_rest.call(null,s__16957__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16959),null);
}
} else
{var part = cljs.core.first.call(null,s__16957__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__16946,part,s__16957__$2,temp__4092__auto____$1,parts,c__8123__auto__,size__8124__auto__,b__16947,s__16945__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__16946,part,s__16957__$2,temp__4092__auto____$1,parts,c__8123__auto__,size__8124__auto__,b__16947,s__16945__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__16956.call(null,cljs.core.rest.call(null,s__16957__$2)));
}
} else
{return null;
}
break;
}
});})(i__16946,parts,c__8123__auto__,size__8124__auto__,b__16947,s__16945__$2,temp__4092__auto__))
,null,null));
});})(i__16946,parts,c__8123__auto__,size__8124__auto__,b__16947,s__16945__$2,temp__4092__auto__))
;return iter__8125__auto__.call(null,parts);
})());
{
var G__16965 = (i__16946 + 1);
i__16946 = G__16965;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16947),iter__16944.call(null,cljs.core.chunk_rest.call(null,s__16945__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16947),null);
}
} else
{var parts = cljs.core.first.call(null,s__16945__$2);return cljs.core.cons.call(null,(function (){var iter__8125__auto__ = ((function (parts,s__16945__$2,temp__4092__auto__){
return (function iter__16960(s__16961){return (new cljs.core.LazySeq(null,((function (parts,s__16945__$2,temp__4092__auto__){
return (function (){var s__16961__$1 = s__16961;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__16961__$1);if(temp__4092__auto____$1)
{var s__16961__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__16961__$2))
{var c__8123__auto__ = cljs.core.chunk_first.call(null,s__16961__$2);var size__8124__auto__ = cljs.core.count.call(null,c__8123__auto__);var b__16963 = cljs.core.chunk_buffer.call(null,size__8124__auto__);if((function (){var i__16962 = 0;while(true){
if((i__16962 < size__8124__auto__))
{var part = cljs.core._nth.call(null,c__8123__auto__,i__16962);cljs.core.chunk_append.call(null,b__16963,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__16962,part,c__8123__auto__,size__8124__auto__,b__16963,s__16961__$2,temp__4092__auto____$1,parts,s__16945__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__16962,part,c__8123__auto__,size__8124__auto__,b__16963,s__16961__$2,temp__4092__auto____$1,parts,s__16945__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__16966 = (i__16962 + 1);
i__16962 = G__16966;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16963),iter__16960.call(null,cljs.core.chunk_rest.call(null,s__16961__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16963),null);
}
} else
{var part = cljs.core.first.call(null,s__16961__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (part,s__16961__$2,temp__4092__auto____$1,parts,s__16945__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(part,s__16961__$2,temp__4092__auto____$1,parts,s__16945__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__16960.call(null,cljs.core.rest.call(null,s__16961__$2)));
}
} else
{return null;
}
break;
}
});})(parts,s__16945__$2,temp__4092__auto__))
,null,null));
});})(parts,s__16945__$2,temp__4092__auto__))
;return iter__8125__auto__.call(null,parts);
})(),iter__16944.call(null,cljs.core.rest.call(null,s__16945__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8125__auto__.call(null,lex);
};
var partitions_H = function (items,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions_H__delegate.call(this,items,args);};
partitions_H.cljs$lang$maxFixedArity = 1;
partitions_H.cljs$lang$applyTo = (function (arglist__16967){
var items = cljs.core.first(arglist__16967);
var args = cljs.core.rest(arglist__16967);
return partitions_H__delegate(items,args);
});
partitions_H.cljs$core$IFn$_invoke$arity$variadic = partitions_H__delegate;
return partitions_H;
})()
;
foundation.app.data.combinatorics.multiset_partitions_M = (function() {
var multiset_partitions_M = null;
var multiset_partitions_M__3 = (function (multiset,r,s){var n = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,multiset));var m = cljs.core.count.call(null,multiset);var f = cljs.core.PersistentVector.EMPTY;var c = cljs.core.PersistentVector.EMPTY;var u = cljs.core.PersistentVector.EMPTY;var v = cljs.core.PersistentVector.EMPTY;var vec__16990 = (function (){var j = 0;var c__$1 = c;var u__$1 = u;var v__$1 = v;while(true){
if(cljs.core._EQ_.call(null,j,m))
{return cljs.core.PersistentVector.fromArray([c__$1,u__$1,v__$1], true);
} else
{{
var G__17012 = (j + 1);
var G__17013 = cljs.core.assoc.call(null,c__$1,j,(j + 1));
var G__17014 = cljs.core.assoc.call(null,u__$1,j,multiset.call(null,(j + 1)));
var G__17015 = cljs.core.assoc.call(null,v__$1,j,multiset.call(null,(j + 1)));
j = G__17012;
c__$1 = G__17013;
u__$1 = G__17014;
v__$1 = G__17015;
continue;
}
}
break;
}
})();var c__$1 = cljs.core.nth.call(null,vec__16990,0,null);var u__$1 = cljs.core.nth.call(null,vec__16990,1,null);var v__$1 = cljs.core.nth.call(null,vec__16990,2,null);var a = 0;var b = m;var l = 0;var f__$1 = cljs.core.assoc.call(null,f,0,0,1,m);var stack = cljs.core.List.EMPTY;return multiset_partitions_M.call(null,n,m,f__$1,c__$1,u__$1,v__$1,a,b,l,r,s);
});
var multiset_partitions_M__11 = (function (n,m,f,c,u,v,a,b,l,r,s){while(true){
var vec__16991 = (function (){var j = a;var k = b;var x = false;var u__$1 = u;var v__$1 = v;var c__$1 = c;while(true){
if((j >= b))
{return cljs.core.PersistentVector.fromArray([u__$1,v__$1,c__$1,j,k], true);
} else
{var u__$2 = cljs.core.assoc.call(null,u__$1,k,(u__$1.call(null,j) - v__$1.call(null,j)));if(cljs.core._EQ_.call(null,u__$2.call(null,k),0))
{{
var G__17016 = (j + 1);
var G__17017 = k;
var G__17018 = true;
var G__17019 = u__$2;
var G__17020 = v__$1;
var G__17021 = c__$1;
j = G__17016;
k = G__17017;
x = G__17018;
u__$1 = G__17019;
v__$1 = G__17020;
c__$1 = G__17021;
continue;
}
} else
{if(!(x))
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,(function (){var x__7751__auto__ = v__$1.call(null,j);var y__7752__auto__ = u__$2.call(null,k);return ((x__7751__auto__ < y__7752__auto__) ? x__7751__auto__ : y__7752__auto__);
})());var x__$1 = (u__$2.call(null,k) < v__$2.call(null,j));var k__$1 = (k + 1);var j__$1 = (j + 1);{
var G__17022 = j__$1;
var G__17023 = k__$1;
var G__17024 = x__$1;
var G__17025 = u__$2;
var G__17026 = v__$2;
var G__17027 = c__$2;
j = G__17022;
k = G__17023;
x = G__17024;
u__$1 = G__17025;
v__$1 = G__17026;
c__$1 = G__17027;
continue;
}
} else
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,u__$2.call(null,k));var k__$1 = (k + 1);var j__$1 = (j + 1);{
var G__17028 = j__$1;
var G__17029 = k__$1;
var G__17030 = x;
var G__17031 = u__$2;
var G__17032 = v__$2;
var G__17033 = c__$2;
j = G__17028;
k = G__17029;
x = G__17030;
u__$1 = G__17031;
v__$1 = G__17032;
c__$1 = G__17033;
continue;
}
}
}
}
break;
}
})();var u__$1 = cljs.core.nth.call(null,vec__16991,0,null);var v__$1 = cljs.core.nth.call(null,vec__16991,1,null);var c__$1 = cljs.core.nth.call(null,vec__16991,2,null);var j = cljs.core.nth.call(null,vec__16991,3,null);var k = cljs.core.nth.call(null,vec__16991,4,null);if(cljs.core.truth_((function (){var and__7430__auto__ = r;if(cljs.core.truth_(and__7430__auto__))
{return ((k > b)) && (cljs.core._EQ_.call(null,l,(r - 1)));
} else
{return and__7430__auto__;
}
})()))
{return foundation.app.data.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
} else
{if(cljs.core.truth_((function (){var and__7430__auto__ = s;if(cljs.core.truth_(and__7430__auto__))
{return ((k <= b)) && (((l + 1) < s));
} else
{return and__7430__auto__;
}
})()))
{return foundation.app.data.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
} else
{if((k > b))
{var a__$1 = b;var b__$1 = k;var l__$1 = (l + 1);var f__$1 = cljs.core.assoc.call(null,f,(l__$1 + 1),b__$1);{
var G__17034 = n;
var G__17035 = m;
var G__17036 = f__$1;
var G__17037 = c__$1;
var G__17038 = u__$1;
var G__17039 = v__$1;
var G__17040 = a__$1;
var G__17041 = b__$1;
var G__17042 = l__$1;
var G__17043 = r;
var G__17044 = s;
n = G__17034;
m = G__17035;
f = G__17036;
c = G__17037;
u = G__17038;
v = G__17039;
a = G__17040;
b = G__17041;
l = G__17042;
r = G__17043;
s = G__17044;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var part = (function (){var iter__8125__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s){
return (function iter__16992(s__16993){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s){
return (function (){var s__16993__$1 = s__16993;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16993__$1);if(temp__4092__auto__)
{var s__16993__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16993__$2))
{var c__8123__auto__ = cljs.core.chunk_first.call(null,s__16993__$2);var size__8124__auto__ = cljs.core.count.call(null,c__8123__auto__);var b__16995 = cljs.core.chunk_buffer.call(null,size__8124__auto__);if((function (){var i__16994 = 0;while(true){
if((i__16994 < size__8124__auto__))
{var y = cljs.core._nth.call(null,c__8123__auto__,i__16994);cljs.core.chunk_append.call(null,b__16995,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + 1)) - 1);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8125__auto__ = ((function (i__16994,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8123__auto__,size__8124__auto__,b__16995,s__16993__$2,temp__4092__auto__){
return (function iter__17004(s__17005){return (new cljs.core.LazySeq(null,((function (i__16994,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8123__auto__,size__8124__auto__,b__16995,s__16993__$2,temp__4092__auto__){
return (function (){var s__17005__$1 = s__17005;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__17005__$1);if(temp__4092__auto____$1)
{var s__17005__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__17005__$2))
{var c__8123__auto____$1 = cljs.core.chunk_first.call(null,s__17005__$2);var size__8124__auto____$1 = cljs.core.count.call(null,c__8123__auto____$1);var b__17007 = cljs.core.chunk_buffer.call(null,size__8124__auto____$1);if((function (){var i__17006 = 0;while(true){
if((i__17006 < size__8124__auto____$1))
{var z = cljs.core._nth.call(null,c__8123__auto____$1,i__17006);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{cljs.core.chunk_append.call(null,b__17007,cljs.core.PersistentVector.fromArray([c__$1.call(null,z),v__$1.call(null,z)], true));
{
var G__17045 = (i__17006 + 1);
i__17006 = G__17045;
continue;
}
} else
{{
var G__17046 = (i__17006 + 1);
i__17006 = G__17046;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17007),iter__17004.call(null,cljs.core.chunk_rest.call(null,s__17005__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17007),null);
}
} else
{var z = cljs.core.first.call(null,s__17005__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([c__$1.call(null,z),v__$1.call(null,z)], true),iter__17004.call(null,cljs.core.rest.call(null,s__17005__$2)));
} else
{{
var G__17047 = cljs.core.rest.call(null,s__17005__$2);
s__17005__$1 = G__17047;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__16994,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8123__auto__,size__8124__auto__,b__16995,s__16993__$2,temp__4092__auto__))
,null,null));
});})(i__16994,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8123__auto__,size__8124__auto__,b__16995,s__16993__$2,temp__4092__auto__))
;return iter__8125__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + 1)));
})());
})());
{
var G__17048 = (i__16994 + 1);
i__16994 = G__17048;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16995),iter__16992.call(null,cljs.core.chunk_rest.call(null,s__16993__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16995),null);
}
} else
{var y = cljs.core.first.call(null,s__16993__$2);return cljs.core.cons.call(null,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + 1)) - 1);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8125__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__16993__$2,temp__4092__auto__){
return (function iter__17008(s__17009){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__16993__$2,temp__4092__auto__){
return (function (){var s__17009__$1 = s__17009;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__17009__$1);if(temp__4092__auto____$1)
{var s__17009__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__17009__$2))
{var c__8123__auto__ = cljs.core.chunk_first.call(null,s__17009__$2);var size__8124__auto__ = cljs.core.count.call(null,c__8123__auto__);var b__17011 = cljs.core.chunk_buffer.call(null,size__8124__auto__);if((function (){var i__17010 = 0;while(true){
if((i__17010 < size__8124__auto__))
{var z = cljs.core._nth.call(null,c__8123__auto__,i__17010);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{cljs.core.chunk_append.call(null,b__17011,cljs.core.PersistentVector.fromArray([c__$1.call(null,z),v__$1.call(null,z)], true));
{
var G__17049 = (i__17010 + 1);
i__17010 = G__17049;
continue;
}
} else
{{
var G__17050 = (i__17010 + 1);
i__17010 = G__17050;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17011),iter__17008.call(null,cljs.core.chunk_rest.call(null,s__17009__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17011),null);
}
} else
{var z = cljs.core.first.call(null,s__17009__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([c__$1.call(null,z),v__$1.call(null,z)], true),iter__17008.call(null,cljs.core.rest.call(null,s__17009__$2)));
} else
{{
var G__17051 = cljs.core.rest.call(null,s__17009__$2);
s__17009__$1 = G__17051;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__16993__$2,temp__4092__auto__))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__16993__$2,temp__4092__auto__))
;return iter__8125__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + 1)));
})());
})(),iter__16992.call(null,cljs.core.rest.call(null,s__16993__$2)));
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s))
;return iter__8125__auto__.call(null,cljs.core.range.call(null,(l + 1)));
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
var G__17060 = (j - 1);
j = G__17060;
continue;
}
}
break;
}
})();if(cljs.core.truth_((function (){var and__7430__auto__ = r;if(cljs.core.truth_(and__7430__auto__))
{return (cljs.core._EQ_.call(null,j,a)) && ((((v.call(null,j) - 1) * (r - l)) < u.call(null,j)));
} else
{return and__7430__auto__;
}
})()))
{return foundation.app.data.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s);
} else
{if((cljs.core._EQ_.call(null,j,a)) && (cljs.core._EQ_.call(null,v.call(null,j),1)))
{return foundation.app.data.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var v__$1 = foundation.app.data.combinatorics.update.call(null,v,j,cljs.core.dec);var diff_uv = (cljs.core.truth_(s)?cljs.core.apply.call(null,cljs.core._PLUS_,(function (){var iter__8125__auto__ = ((function (v__$1){
return (function iter__17056(s__17057){return (new cljs.core.LazySeq(null,((function (v__$1){
return (function (){var s__17057__$1 = s__17057;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__17057__$1);if(temp__4092__auto__)
{var s__17057__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17057__$2))
{var c__8123__auto__ = cljs.core.chunk_first.call(null,s__17057__$2);var size__8124__auto__ = cljs.core.count.call(null,c__8123__auto__);var b__17059 = cljs.core.chunk_buffer.call(null,size__8124__auto__);if((function (){var i__17058 = 0;while(true){
if((i__17058 < size__8124__auto__))
{var i = cljs.core._nth.call(null,c__8123__auto__,i__17058);cljs.core.chunk_append.call(null,b__17059,(u.call(null,i) - v__$1.call(null,i)));
{
var G__17061 = (i__17058 + 1);
i__17058 = G__17061;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17059),iter__17056.call(null,cljs.core.chunk_rest.call(null,s__17057__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17059),null);
}
} else
{var i = cljs.core.first.call(null,s__17057__$2);return cljs.core.cons.call(null,(u.call(null,i) - v__$1.call(null,i)),iter__17056.call(null,cljs.core.rest.call(null,s__17057__$2)));
}
} else
{return null;
}
break;
}
});})(v__$1))
,null,null));
});})(v__$1))
;return iter__8125__auto__.call(null,cljs.core.range.call(null,a,(j + 1)));
})()):null);var v__$2 = (function (){var ks = cljs.core.range.call(null,(j + 1),b);var v__$2 = v__$1;while(true){
if(cljs.core.empty_QMARK_.call(null,ks))
{return v__$2;
} else
{var k = cljs.core.first.call(null,ks);{
var G__17062 = cljs.core.rest.call(null,ks);
var G__17063 = cljs.core.assoc.call(null,v__$2,k,u.call(null,k));
ks = G__17062;
v__$2 = G__17063;
continue;
}
}
break;
}
})();var min_partitions_after_this = (cljs.core.truth_(s)?(s - (l + 1)):0);var amount_to_dec = (cljs.core.truth_(s)?(function (){var x__7744__auto__ = 0;var y__7745__auto__ = (min_partitions_after_this - diff_uv);return ((x__7744__auto__ > y__7745__auto__) ? x__7744__auto__ : y__7745__auto__);
})():0);var v__$3 = ((cljs.core._EQ_.call(null,amount_to_dec,0))?v__$2:(function (){var k_1 = (b - 1);var v__$3 = v__$2;var amount = amount_to_dec;while(true){
var vk = v__$3.call(null,k_1);if((amount > vk))
{{
var G__17064 = (k_1 - 1);
var G__17065 = cljs.core.assoc.call(null,v__$3,k_1,0);
var G__17066 = (amount - vk);
k_1 = G__17064;
v__$3 = G__17065;
amount = G__17066;
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
var partitions_M__delegate = function (items,p__17067){var map__17125 = p__17067;var map__17125__$1 = ((cljs.core.seq_QMARK_.call(null,map__17125))?cljs.core.apply.call(null,cljs.core.hash_map,map__17125):map__17125);var from = cljs.core.get.call(null,map__17125__$1,new cljs.core.Keyword(null,"min","min",1014012356));var to = cljs.core.get.call(null,map__17125__$1,new cljs.core.Keyword(null,"max","max",1014012118));if(cljs.core._EQ_.call(null,cljs.core.count.call(null,items),0))
{if((((function (){var or__7439__auto__ = from;if(cljs.core.truth_(or__7439__auto__))
{return or__7439__auto__;
} else
{return 0;
}
})() <= 0)) && ((0 <= (function (){var or__7439__auto__ = to;if(cljs.core.truth_(or__7439__auto__))
{return or__7439__auto__;
} else
{return 0;
}
})())))
{return cljs.core.list(cljs.core.List.EMPTY);
} else
{return cljs.core.List.EMPTY;
}
} else
{var items__$1 = cljs.core.vec.call(null,items);var ditems = cljs.core.vec.call(null,cljs.core.distinct.call(null,items__$1));var freqs = cljs.core.frequencies.call(null,items__$1);var N = cljs.core.count.call(null,items__$1);var M = cljs.core.count.call(null,ditems);var from__$1 = (cljs.core.truth_((function (){var and__7430__auto__ = from;if(cljs.core.truth_(and__7430__auto__))
{return (from <= 1);
} else
{return and__7430__auto__;
}
})())?null:from);var to__$1 = (cljs.core.truth_((function (){var and__7430__auto__ = to;if(cljs.core.truth_(and__7430__auto__))
{return (to >= N);
} else
{return and__7430__auto__;
}
})())?null:to);if(!(((1 <= (function (){var or__7439__auto__ = from__$1;if(cljs.core.truth_(or__7439__auto__))
{return or__7439__auto__;
} else
{return 1;
}
})())) && ((((function (){var or__7439__auto__ = from__$1;if(cljs.core.truth_(or__7439__auto__))
{return or__7439__auto__;
} else
{return 1;
}
})() <= (function (){var or__7439__auto__ = to__$1;if(cljs.core.truth_(or__7439__auto__))
{return or__7439__auto__;
} else
{return N;
}
})())) && (((function (){var or__7439__auto__ = to__$1;if(cljs.core.truth_(or__7439__auto__))
{return or__7439__auto__;
} else
{return N;
}
})() <= N)))))
{return cljs.core.List.EMPTY;
} else
{if(cljs.core._EQ_.call(null,N,1))
{return cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.with_meta.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.first.call(null,items__$1))))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,378),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,19)))))))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,378),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18)))))))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,378),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,17)))));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var start_multiset = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8125__auto__ = (function iter__17126(s__17127){return (new cljs.core.LazySeq(null,(function (){var s__17127__$1 = s__17127;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__17127__$1);if(temp__4092__auto__)
{var s__17127__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17127__$2))
{var c__8123__auto__ = cljs.core.chunk_first.call(null,s__17127__$2);var size__8124__auto__ = cljs.core.count.call(null,c__8123__auto__);var b__17129 = cljs.core.chunk_buffer.call(null,size__8124__auto__);if((function (){var i__17128 = 0;while(true){
if((i__17128 < size__8124__auto__))
{var i = cljs.core._nth.call(null,c__8123__auto__,i__17128);var j = (i + 1);cljs.core.chunk_append.call(null,b__17129,cljs.core.PersistentVector.fromArray([j,freqs.call(null,ditems.call(null,i))], true));
{
var G__17182 = (i__17128 + 1);
i__17128 = G__17182;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17129),iter__17126.call(null,cljs.core.chunk_rest.call(null,s__17127__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17129),null);
}
} else
{var i = cljs.core.first.call(null,s__17127__$2);var j = (i + 1);return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([j,freqs.call(null,ditems.call(null,i))], true),iter__17126.call(null,cljs.core.rest.call(null,s__17127__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8125__auto__.call(null,cljs.core.range.call(null,M));
})());var parts = foundation.app.data.combinatorics.multiset_partitions_M.call(null,start_multiset,to__$1,from__$1);var iter__8125__auto__ = (function iter__17130(s__17131){return (new cljs.core.LazySeq(null,(function (){var s__17131__$1 = s__17131;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__17131__$1);if(temp__4092__auto__)
{var s__17131__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17131__$2))
{var c__8123__auto__ = cljs.core.chunk_first.call(null,s__17131__$2);var size__8124__auto__ = cljs.core.count.call(null,c__8123__auto__);var b__17133 = cljs.core.chunk_buffer.call(null,size__8124__auto__);if((function (){var i__17132 = 0;while(true){
if((i__17132 < size__8124__auto__))
{var part = cljs.core._nth.call(null,c__8123__auto__,i__17132);cljs.core.chunk_append.call(null,b__17133,(function (){var iter__8125__auto__ = ((function (i__17132,part,c__8123__auto__,size__8124__auto__,b__17133,s__17131__$2,temp__4092__auto__){
return (function iter__17158(s__17159){return (new cljs.core.LazySeq(null,((function (i__17132,part,c__8123__auto__,size__8124__auto__,b__17133,s__17131__$2,temp__4092__auto__){
return (function (){var s__17159__$1 = s__17159;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__17159__$1);if(temp__4092__auto____$1)
{var s__17159__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__17159__$2))
{var c__8123__auto____$1 = cljs.core.chunk_first.call(null,s__17159__$2);var size__8124__auto____$1 = cljs.core.count.call(null,c__8123__auto____$1);var b__17161 = cljs.core.chunk_buffer.call(null,size__8124__auto____$1);if((function (){var i__17160 = 0;while(true){
if((i__17160 < size__8124__auto____$1))
{var multiset = cljs.core._nth.call(null,c__8123__auto____$1,i__17160);cljs.core.chunk_append.call(null,b__17161,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__17160,i__17132,multiset,c__8123__auto____$1,size__8124__auto____$1,b__17161,s__17159__$2,temp__4092__auto____$1,part,c__8123__auto__,size__8124__auto__,b__17133,s__17131__$2,temp__4092__auto__){
return (function (p__17166){var vec__17167 = p__17166;var index = cljs.core.nth.call(null,vec__17167,0,null);var numtimes = cljs.core.nth.call(null,vec__17167,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__17160,i__17132,multiset,c__8123__auto____$1,size__8124__auto____$1,b__17161,s__17159__$2,temp__4092__auto____$1,part,c__8123__auto__,size__8124__auto__,b__17133,s__17131__$2,temp__4092__auto__))
,multiset)));
{
var G__17183 = (i__17160 + 1);
i__17160 = G__17183;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17161),iter__17158.call(null,cljs.core.chunk_rest.call(null,s__17159__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17161),null);
}
} else
{var multiset = cljs.core.first.call(null,s__17159__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__17132,multiset,s__17159__$2,temp__4092__auto____$1,part,c__8123__auto__,size__8124__auto__,b__17133,s__17131__$2,temp__4092__auto__){
return (function (p__17168){var vec__17169 = p__17168;var index = cljs.core.nth.call(null,vec__17169,0,null);var numtimes = cljs.core.nth.call(null,vec__17169,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__17132,multiset,s__17159__$2,temp__4092__auto____$1,part,c__8123__auto__,size__8124__auto__,b__17133,s__17131__$2,temp__4092__auto__))
,multiset)),iter__17158.call(null,cljs.core.rest.call(null,s__17159__$2)));
}
} else
{return null;
}
break;
}
});})(i__17132,part,c__8123__auto__,size__8124__auto__,b__17133,s__17131__$2,temp__4092__auto__))
,null,null));
});})(i__17132,part,c__8123__auto__,size__8124__auto__,b__17133,s__17131__$2,temp__4092__auto__))
;return iter__8125__auto__.call(null,part);
})());
{
var G__17184 = (i__17132 + 1);
i__17132 = G__17184;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17133),iter__17130.call(null,cljs.core.chunk_rest.call(null,s__17131__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17133),null);
}
} else
{var part = cljs.core.first.call(null,s__17131__$2);return cljs.core.cons.call(null,(function (){var iter__8125__auto__ = ((function (part,s__17131__$2,temp__4092__auto__){
return (function iter__17170(s__17171){return (new cljs.core.LazySeq(null,((function (part,s__17131__$2,temp__4092__auto__){
return (function (){var s__17171__$1 = s__17171;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__17171__$1);if(temp__4092__auto____$1)
{var s__17171__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__17171__$2))
{var c__8123__auto__ = cljs.core.chunk_first.call(null,s__17171__$2);var size__8124__auto__ = cljs.core.count.call(null,c__8123__auto__);var b__17173 = cljs.core.chunk_buffer.call(null,size__8124__auto__);if((function (){var i__17172 = 0;while(true){
if((i__17172 < size__8124__auto__))
{var multiset = cljs.core._nth.call(null,c__8123__auto__,i__17172);cljs.core.chunk_append.call(null,b__17173,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__17172,multiset,c__8123__auto__,size__8124__auto__,b__17173,s__17171__$2,temp__4092__auto____$1,part,s__17131__$2,temp__4092__auto__){
return (function (p__17178){var vec__17179 = p__17178;var index = cljs.core.nth.call(null,vec__17179,0,null);var numtimes = cljs.core.nth.call(null,vec__17179,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__17172,multiset,c__8123__auto__,size__8124__auto__,b__17173,s__17171__$2,temp__4092__auto____$1,part,s__17131__$2,temp__4092__auto__))
,multiset)));
{
var G__17185 = (i__17172 + 1);
i__17172 = G__17185;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17173),iter__17170.call(null,cljs.core.chunk_rest.call(null,s__17171__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17173),null);
}
} else
{var multiset = cljs.core.first.call(null,s__17171__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (multiset,s__17171__$2,temp__4092__auto____$1,part,s__17131__$2,temp__4092__auto__){
return (function (p__17180){var vec__17181 = p__17180;var index = cljs.core.nth.call(null,vec__17181,0,null);var numtimes = cljs.core.nth.call(null,vec__17181,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(multiset,s__17171__$2,temp__4092__auto____$1,part,s__17131__$2,temp__4092__auto__))
,multiset)),iter__17170.call(null,cljs.core.rest.call(null,s__17171__$2)));
}
} else
{return null;
}
break;
}
});})(part,s__17131__$2,temp__4092__auto__))
,null,null));
});})(part,s__17131__$2,temp__4092__auto__))
;return iter__8125__auto__.call(null,part);
})(),iter__17130.call(null,cljs.core.rest.call(null,s__17131__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8125__auto__.call(null,parts);
} else
{return null;
}
}
}
}
};
var partitions_M = function (items,var_args){
var p__17067 = null;if (arguments.length > 1) {
  p__17067 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions_M__delegate.call(this,items,p__17067);};
partitions_M.cljs$lang$maxFixedArity = 1;
partitions_M.cljs$lang$applyTo = (function (arglist__17186){
var items = cljs.core.first(arglist__17186);
var p__17067 = cljs.core.rest(arglist__17186);
return partitions_M__delegate(items,p__17067);
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
partitions.cljs$lang$applyTo = (function (arglist__17187){
var items = cljs.core.first(arglist__17187);
var args = cljs.core.rest(arglist__17187);
return partitions__delegate(items,args);
});
partitions.cljs$core$IFn$_invoke$arity$variadic = partitions__delegate;
return partitions;
})()
;
