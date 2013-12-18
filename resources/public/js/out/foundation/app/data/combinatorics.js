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
var G__39997 = cljs.core.assoc.call(null,c__$2,(j__$1 - 1),(c__$2.call(null,j__$1) - 1));
var G__39998 = (j__$1 - 1);
c__$2 = G__39997;
j__$1 = G__39998;
continue;
}
}
break;
}
}
}
});
return (new cljs.core.LazySeq(null,(function (){var c = cljs.core.vec.call(null,cljs.core.cons.call(null,null,(function (){var iter__8943__auto__ = (function iter__39993(s__39994){return (new cljs.core.LazySeq(null,(function (){var s__39994__$1 = s__39994;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__39994__$1);if(temp__4092__auto__)
{var s__39994__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__39994__$2))
{var c__8941__auto__ = cljs.core.chunk_first.call(null,s__39994__$2);var size__8942__auto__ = cljs.core.count.call(null,c__8941__auto__);var b__39996 = cljs.core.chunk_buffer.call(null,size__8942__auto__);if((function (){var i__39995 = 0;while(true){
if((i__39995 < size__8942__auto__))
{var j = cljs.core._nth.call(null,c__8941__auto__,i__39995);cljs.core.chunk_append.call(null,b__39996,((j + cnt) + (- (n + 1))));
{
var G__39999 = (i__39995 + 1);
i__39995 = G__39999;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39996),iter__39993.call(null,cljs.core.chunk_rest.call(null,s__39994__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39996),null);
}
} else
{var j = cljs.core.first.call(null,s__39994__$2);return cljs.core.cons.call(null,((j + cnt) + (- (n + 1))),iter__39993.call(null,cljs.core.rest.call(null,s__39994__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8943__auto__.call(null,cljs.core.range.call(null,1,(n + 1)));
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
{return cljs.core.map.call(null,(function (p1__40000_SHARP_){return cljs.core.map.call(null,v_items,p1__40000_SHARP_);
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
var G__40001 = (i - 1);
var G__40002 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__40001;
v_seqs__$2 = G__40002;
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
cartesian_product.cljs$lang$applyTo = (function (arglist__40003){
var seqs = cljs.core.seq(arglist__40003);
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
var G__40004 = (i - 1);
i = G__40004;
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
var G__40005 = (i - 1);
i = G__40005;
continue;
}
}
break;
}
})();var v__$1 = cljs.core.assoc.call(null,v,j,v.call(null,l),l,vj);var k = (j + 1);var l__$1 = (len - 1);while(true){
if((k < l__$1))
{{
var G__40006 = cljs.core.assoc.call(null,v__$1,k,v__$1.call(null,l__$1),l__$1,v__$1.call(null,k));
var G__40007 = (k + 1);
var G__40008 = (l__$1 - 1);
v__$1 = G__40006;
k = G__40007;
l__$1 = G__40008;
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
foundation.app.data.combinatorics.multi_perm = (function multi_perm(l){var f = cljs.core.frequencies.call(null,l);var v = cljs.core.vec.call(null,cljs.core.keys.call(null,f));var indices = cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__8943__auto__ = ((function (f,v){
return (function iter__40013(s__40014){return (new cljs.core.LazySeq(null,((function (f,v){
return (function (){var s__40014__$1 = s__40014;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__40014__$1);if(temp__4092__auto__)
{var s__40014__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__40014__$2))
{var c__8941__auto__ = cljs.core.chunk_first.call(null,s__40014__$2);var size__8942__auto__ = cljs.core.count.call(null,c__8941__auto__);var b__40016 = cljs.core.chunk_buffer.call(null,size__8942__auto__);if((function (){var i__40015 = 0;while(true){
if((i__40015 < size__8942__auto__))
{var i = cljs.core._nth.call(null,c__8941__auto__,i__40015);cljs.core.chunk_append.call(null,b__40016,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));
{
var G__40017 = (i__40015 + 1);
i__40015 = G__40017;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40016),iter__40013.call(null,cljs.core.chunk_rest.call(null,s__40014__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40016),null);
}
} else
{var i = cljs.core.first.call(null,s__40014__$2);return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),iter__40013.call(null,cljs.core.rest.call(null,s__40014__$2)));
}
} else
{return null;
}
break;
}
});})(f,v))
,null,null));
});})(f,v))
;return iter__8943__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,v)));
})());return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.map,v),foundation.app.data.combinatorics.lex_permutations.call(null,indices));
});
/**
* All the distinct permutations of items, lexicographic by index.
*/
foundation.app.data.combinatorics.permutations = (function permutations(items){if(foundation.app.data.combinatorics.sorted_numbers_QMARK_.call(null,items))
{return foundation.app.data.combinatorics.lex_permutations.call(null,items);
} else
{if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core.distinct_QMARK_,items)))
{var v = cljs.core.vec.call(null,items);return cljs.core.map.call(null,(function (p1__40018_SHARP_){return cljs.core.map.call(null,v,p1__40018_SHARP_);
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
{return cljs.core.vec.call(null,(function (){var iter__8943__auto__ = (function iter__40023(s__40024){return (new cljs.core.LazySeq(null,(function (){var s__40024__$1 = s__40024;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__40024__$1);if(temp__4092__auto__)
{var s__40024__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__40024__$2))
{var c__8941__auto__ = cljs.core.chunk_first.call(null,s__40024__$2);var size__8942__auto__ = cljs.core.count.call(null,c__8941__auto__);var b__40026 = cljs.core.chunk_buffer.call(null,size__8942__auto__);if((function (){var i__40025 = 0;while(true){
if((i__40025 < size__8942__auto__))
{var i = cljs.core._nth.call(null,c__8941__auto__,i__40025);cljs.core.chunk_append.call(null,b__40026,(function (){var x__8557__auto__ = 0;var y__8558__auto__ = (i - ((n - s) - -1));return ((x__8557__auto__ > y__8558__auto__) ? x__8557__auto__ : y__8558__auto__);
})());
{
var G__40027 = (i__40025 + 1);
i__40025 = G__40027;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40026),iter__40023.call(null,cljs.core.chunk_rest.call(null,s__40024__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40026),null);
}
} else
{var i = cljs.core.first.call(null,s__40024__$2);return cljs.core.cons.call(null,(function (){var x__8557__auto__ = 0;var y__8558__auto__ = (i - ((n - s) - -1));return ((x__8557__auto__ > y__8558__auto__) ? x__8557__auto__ : y__8558__auto__);
})(),iter__40023.call(null,cljs.core.rest.call(null,s__40024__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8943__auto__.call(null,cljs.core.range.call(null,1,(n + 1)));
})());
} else
{return cljs.core.vec.call(null,cljs.core.repeat.call(null,n,0));
}
});
foundation.app.data.combinatorics.growth_strings_H = (function() {
var growth_strings_H = null;
var growth_strings_H__3 = (function (n,r,s){return growth_strings_H.call(null,n,foundation.app.data.combinatorics.init.call(null,n,s),cljs.core.vec.call(null,cljs.core.repeat.call(null,n,1)),r,s);
});
var growth_strings_H__5 = (function (n,a,b,r,s){return cljs.core.cons.call(null,a,(new cljs.core.LazySeq(null,(function (){if((function (){var and__8233__auto__ = (cljs.core.peek.call(null,b) > cljs.core.peek.call(null,a));if(and__8233__auto__)
{if(cljs.core.truth_(r))
{return (cljs.core.peek.call(null,a) < (r - 1));
} else
{return true;
}
} else
{return and__8233__auto__;
}
})())
{return growth_strings_H.call(null,n,foundation.app.data.combinatorics.update.call(null,a,(n - 1),cljs.core.inc),b,r,s);
} else
{var j = (function (){var j = (n - 2);while(true){
if((function (){var and__8233__auto__ = (a.call(null,j) < b.call(null,j));if(and__8233__auto__)
{var and__8233__auto____$1 = (cljs.core.truth_(r)?(a.call(null,j) < (r - 1)):true);if(and__8233__auto____$1)
{if(cljs.core.truth_(s))
{return (((s - b.call(null,j)) - ((((a.call(null,j) + 1) === b.call(null,j)))?1:0)) <= (n - j));
} else
{return true;
}
} else
{return and__8233__auto____$1;
}
} else
{return and__8233__auto__;
}
})())
{return j;
} else
{{
var G__40030 = (j - 1);
j = G__40030;
continue;
}
}
break;
}
})();if((j === 0))
{return cljs.core.List.EMPTY;
} else
{var a__$1 = foundation.app.data.combinatorics.update.call(null,a,j,cljs.core.inc);var x = (cljs.core.truth_(s)?(s - (b.call(null,j) + ((cljs.core._EQ_.call(null,a__$1.call(null,j),b.call(null,j)))?1:0))):null);var vec__40029 = (function (){var a__$2 = a__$1;var b__$1 = b;var i = (j + 1);var current_max = (b__$1.call(null,j) + (((b__$1.call(null,j) === a__$2.call(null,j)))?1:0));while(true){
if((i === n))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$2,b__$1], null);
} else
{if(cljs.core.truth_((function (){var and__8233__auto__ = s;if(cljs.core.truth_(and__8233__auto__))
{return (i > ((n - x) - 1));
} else
{return and__8233__auto__;
}
})()))
{var new_a_i = ((i - n) + s);{
var G__40031 = cljs.core.assoc.call(null,a__$2,i,new_a_i);
var G__40032 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__40033 = (i + 1);
var G__40034 = (function (){var x__8557__auto__ = current_max;var y__8558__auto__ = (new_a_i + 1);return ((x__8557__auto__ > y__8558__auto__) ? x__8557__auto__ : y__8558__auto__);
})();
a__$2 = G__40031;
b__$1 = G__40032;
i = G__40033;
current_max = G__40034;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__40035 = cljs.core.assoc.call(null,a__$2,i,0);
var G__40036 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__40037 = (i + 1);
var G__40038 = current_max;
a__$2 = G__40035;
b__$1 = G__40036;
i = G__40037;
current_max = G__40038;
continue;
}
} else
{return null;
}
}
}
break;
}
})();var a__$2 = cljs.core.nth.call(null,vec__40029,0,null);var b__$1 = cljs.core.nth.call(null,vec__40029,1,null);return growth_strings_H.call(null,n,a__$2,b__$1,r,s);
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
var lex_partitions_H__delegate = function (N,p__40039){var map__40045 = p__40039;var map__40045__$1 = ((cljs.core.seq_QMARK_.call(null,map__40045))?cljs.core.apply.call(null,cljs.core.hash_map,map__40045):map__40045);var from = cljs.core.get.call(null,map__40045__$1,new cljs.core.Keyword(null,"min","min",1014012356));var to = cljs.core.get.call(null,map__40045__$1,new cljs.core.Keyword(null,"max","max",1014012118));if(cljs.core._EQ_.call(null,N,0))
{if((((function (){var or__8245__auto__ = from;if(cljs.core.truth_(or__8245__auto__))
{return or__8245__auto__;
} else
{return 0;
}
})() <= 0)) && ((0 <= (function (){var or__8245__auto__ = to;if(cljs.core.truth_(or__8245__auto__))
{return or__8245__auto__;
} else
{return 0;
}
})())))
{return cljs.core.list(cljs.core.List.EMPTY);
} else
{return cljs.core.List.EMPTY;
}
} else
{var from__$1 = (cljs.core.truth_((function (){var and__8233__auto__ = from;if(cljs.core.truth_(and__8233__auto__))
{return (from <= 1);
} else
{return and__8233__auto__;
}
})())?null:from);var to__$1 = (cljs.core.truth_((function (){var and__8233__auto__ = to;if(cljs.core.truth_(and__8233__auto__))
{return (to >= N);
} else
{return and__8233__auto__;
}
})())?null:to);if(!(((1 <= (function (){var or__8245__auto__ = from__$1;if(cljs.core.truth_(or__8245__auto__))
{return or__8245__auto__;
} else
{return 1;
}
})())) && ((((function (){var or__8245__auto__ = from__$1;if(cljs.core.truth_(or__8245__auto__))
{return or__8245__auto__;
} else
{return 1;
}
})() <= (function (){var or__8245__auto__ = to__$1;if(cljs.core.truth_(or__8245__auto__))
{return or__8245__auto__;
} else
{return N;
}
})())) && (((function (){var or__8245__auto__ = to__$1;if(cljs.core.truth_(or__8245__auto__))
{return or__8245__auto__;
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
{var growth_strings = foundation.app.data.combinatorics.growth_strings_H.call(null,N,to__$1,from__$1);var iter__8943__auto__ = (function iter__40046(s__40047){return (new cljs.core.LazySeq(null,(function (){var s__40047__$1 = s__40047;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__40047__$1);if(temp__4092__auto__)
{var s__40047__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__40047__$2))
{var c__8941__auto__ = cljs.core.chunk_first.call(null,s__40047__$2);var size__8942__auto__ = cljs.core.count.call(null,c__8941__auto__);var b__40049 = cljs.core.chunk_buffer.call(null,size__8942__auto__);if((function (){var i__40048 = 0;while(true){
if((i__40048 < size__8942__auto__))
{var growth_string = cljs.core._nth.call(null,c__8941__auto__,i__40048);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));cljs.core.chunk_append.call(null,b__40049,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))));
{
var G__40050 = (i__40048 + 1);
i__40048 = G__40050;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40049),iter__40046.call(null,cljs.core.chunk_rest.call(null,s__40047__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40049),null);
}
} else
{var growth_string = cljs.core.first.call(null,s__40047__$2);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));return cljs.core.cons.call(null,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))),iter__40046.call(null,cljs.core.rest.call(null,s__40047__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8943__auto__.call(null,growth_strings);
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
var p__40039 = null;if (arguments.length > 1) {
  p__40039 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return lex_partitions_H__delegate.call(this,N,p__40039);};
lex_partitions_H.cljs$lang$maxFixedArity = 1;
lex_partitions_H.cljs$lang$applyTo = (function (arglist__40051){
var N = cljs.core.first(arglist__40051);
var p__40039 = cljs.core.rest(arglist__40051);
return lex_partitions_H__delegate(N,p__40039);
});
lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic = lex_partitions_H__delegate;
return lex_partitions_H;
})()
;
/**
* @param {...*} var_args
*/
foundation.app.data.combinatorics.partitions_H = (function() { 
var partitions_H__delegate = function (items,args){var items__$1 = cljs.core.vec.call(null,items);var N = cljs.core.count.call(null,items__$1);var lex = cljs.core.apply.call(null,foundation.app.data.combinatorics.lex_partitions_H,N,args);var iter__8943__auto__ = (function iter__40072(s__40073){return (new cljs.core.LazySeq(null,(function (){var s__40073__$1 = s__40073;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__40073__$1);if(temp__4092__auto__)
{var s__40073__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__40073__$2))
{var c__8941__auto__ = cljs.core.chunk_first.call(null,s__40073__$2);var size__8942__auto__ = cljs.core.count.call(null,c__8941__auto__);var b__40075 = cljs.core.chunk_buffer.call(null,size__8942__auto__);if((function (){var i__40074 = 0;while(true){
if((i__40074 < size__8942__auto__))
{var parts = cljs.core._nth.call(null,c__8941__auto__,i__40074);cljs.core.chunk_append.call(null,b__40075,(function (){var iter__8943__auto__ = ((function (i__40074,parts,c__8941__auto__,size__8942__auto__,b__40075,s__40073__$2,temp__4092__auto__){
return (function iter__40084(s__40085){return (new cljs.core.LazySeq(null,((function (i__40074,parts,c__8941__auto__,size__8942__auto__,b__40075,s__40073__$2,temp__4092__auto__){
return (function (){var s__40085__$1 = s__40085;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__40085__$1);if(temp__4092__auto____$1)
{var s__40085__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__40085__$2))
{var c__8941__auto____$1 = cljs.core.chunk_first.call(null,s__40085__$2);var size__8942__auto____$1 = cljs.core.count.call(null,c__8941__auto____$1);var b__40087 = cljs.core.chunk_buffer.call(null,size__8942__auto____$1);if((function (){var i__40086 = 0;while(true){
if((i__40086 < size__8942__auto____$1))
{var part = cljs.core._nth.call(null,c__8941__auto____$1,i__40086);cljs.core.chunk_append.call(null,b__40087,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__40086,i__40074,part,c__8941__auto____$1,size__8942__auto____$1,b__40087,s__40085__$2,temp__4092__auto____$1,parts,c__8941__auto__,size__8942__auto__,b__40075,s__40073__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__40086,i__40074,part,c__8941__auto____$1,size__8942__auto____$1,b__40087,s__40085__$2,temp__4092__auto____$1,parts,c__8941__auto__,size__8942__auto__,b__40075,s__40073__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__40092 = (i__40086 + 1);
i__40086 = G__40092;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40087),iter__40084.call(null,cljs.core.chunk_rest.call(null,s__40085__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40087),null);
}
} else
{var part = cljs.core.first.call(null,s__40085__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__40074,part,s__40085__$2,temp__4092__auto____$1,parts,c__8941__auto__,size__8942__auto__,b__40075,s__40073__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__40074,part,s__40085__$2,temp__4092__auto____$1,parts,c__8941__auto__,size__8942__auto__,b__40075,s__40073__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__40084.call(null,cljs.core.rest.call(null,s__40085__$2)));
}
} else
{return null;
}
break;
}
});})(i__40074,parts,c__8941__auto__,size__8942__auto__,b__40075,s__40073__$2,temp__4092__auto__))
,null,null));
});})(i__40074,parts,c__8941__auto__,size__8942__auto__,b__40075,s__40073__$2,temp__4092__auto__))
;return iter__8943__auto__.call(null,parts);
})());
{
var G__40093 = (i__40074 + 1);
i__40074 = G__40093;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40075),iter__40072.call(null,cljs.core.chunk_rest.call(null,s__40073__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40075),null);
}
} else
{var parts = cljs.core.first.call(null,s__40073__$2);return cljs.core.cons.call(null,(function (){var iter__8943__auto__ = ((function (parts,s__40073__$2,temp__4092__auto__){
return (function iter__40088(s__40089){return (new cljs.core.LazySeq(null,((function (parts,s__40073__$2,temp__4092__auto__){
return (function (){var s__40089__$1 = s__40089;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__40089__$1);if(temp__4092__auto____$1)
{var s__40089__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__40089__$2))
{var c__8941__auto__ = cljs.core.chunk_first.call(null,s__40089__$2);var size__8942__auto__ = cljs.core.count.call(null,c__8941__auto__);var b__40091 = cljs.core.chunk_buffer.call(null,size__8942__auto__);if((function (){var i__40090 = 0;while(true){
if((i__40090 < size__8942__auto__))
{var part = cljs.core._nth.call(null,c__8941__auto__,i__40090);cljs.core.chunk_append.call(null,b__40091,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__40090,part,c__8941__auto__,size__8942__auto__,b__40091,s__40089__$2,temp__4092__auto____$1,parts,s__40073__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__40090,part,c__8941__auto__,size__8942__auto__,b__40091,s__40089__$2,temp__4092__auto____$1,parts,s__40073__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__40094 = (i__40090 + 1);
i__40090 = G__40094;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40091),iter__40088.call(null,cljs.core.chunk_rest.call(null,s__40089__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40091),null);
}
} else
{var part = cljs.core.first.call(null,s__40089__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (part,s__40089__$2,temp__4092__auto____$1,parts,s__40073__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(part,s__40089__$2,temp__4092__auto____$1,parts,s__40073__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__40088.call(null,cljs.core.rest.call(null,s__40089__$2)));
}
} else
{return null;
}
break;
}
});})(parts,s__40073__$2,temp__4092__auto__))
,null,null));
});})(parts,s__40073__$2,temp__4092__auto__))
;return iter__8943__auto__.call(null,parts);
})(),iter__40072.call(null,cljs.core.rest.call(null,s__40073__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8943__auto__.call(null,lex);
};
var partitions_H = function (items,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions_H__delegate.call(this,items,args);};
partitions_H.cljs$lang$maxFixedArity = 1;
partitions_H.cljs$lang$applyTo = (function (arglist__40095){
var items = cljs.core.first(arglist__40095);
var args = cljs.core.rest(arglist__40095);
return partitions_H__delegate(items,args);
});
partitions_H.cljs$core$IFn$_invoke$arity$variadic = partitions_H__delegate;
return partitions_H;
})()
;
foundation.app.data.combinatorics.multiset_partitions_M = (function() {
var multiset_partitions_M = null;
var multiset_partitions_M__3 = (function (multiset,r,s){var n = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,multiset));var m = cljs.core.count.call(null,multiset);var f = cljs.core.PersistentVector.EMPTY;var c = cljs.core.PersistentVector.EMPTY;var u = cljs.core.PersistentVector.EMPTY;var v = cljs.core.PersistentVector.EMPTY;var vec__40118 = (function (){var j = 0;var c__$1 = c;var u__$1 = u;var v__$1 = v;while(true){
if(cljs.core._EQ_.call(null,j,m))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,u__$1,v__$1], null);
} else
{{
var G__40140 = (j + 1);
var G__40141 = cljs.core.assoc.call(null,c__$1,j,(j + 1));
var G__40142 = cljs.core.assoc.call(null,u__$1,j,multiset.call(null,(j + 1)));
var G__40143 = cljs.core.assoc.call(null,v__$1,j,multiset.call(null,(j + 1)));
j = G__40140;
c__$1 = G__40141;
u__$1 = G__40142;
v__$1 = G__40143;
continue;
}
}
break;
}
})();var c__$1 = cljs.core.nth.call(null,vec__40118,0,null);var u__$1 = cljs.core.nth.call(null,vec__40118,1,null);var v__$1 = cljs.core.nth.call(null,vec__40118,2,null);var a = 0;var b = m;var l = 0;var f__$1 = cljs.core.assoc.call(null,f,0,0,1,m);var stack = cljs.core.List.EMPTY;return multiset_partitions_M.call(null,n,m,f__$1,c__$1,u__$1,v__$1,a,b,l,r,s);
});
var multiset_partitions_M__11 = (function (n,m,f,c,u,v,a,b,l,r,s){while(true){
var vec__40119 = (function (){var j = a;var k = b;var x = false;var u__$1 = u;var v__$1 = v;var c__$1 = c;while(true){
if((j >= b))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [u__$1,v__$1,c__$1,j,k], null);
} else
{var u__$2 = cljs.core.assoc.call(null,u__$1,k,(u__$1.call(null,j) - v__$1.call(null,j)));if(cljs.core._EQ_.call(null,u__$2.call(null,k),0))
{{
var G__40144 = (j + 1);
var G__40145 = k;
var G__40146 = true;
var G__40147 = u__$2;
var G__40148 = v__$1;
var G__40149 = c__$1;
j = G__40144;
k = G__40145;
x = G__40146;
u__$1 = G__40147;
v__$1 = G__40148;
c__$1 = G__40149;
continue;
}
} else
{if(!(x))
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,(function (){var x__8564__auto__ = v__$1.call(null,j);var y__8565__auto__ = u__$2.call(null,k);return ((x__8564__auto__ < y__8565__auto__) ? x__8564__auto__ : y__8565__auto__);
})());var x__$1 = (u__$2.call(null,k) < v__$2.call(null,j));var k__$1 = (k + 1);var j__$1 = (j + 1);{
var G__40150 = j__$1;
var G__40151 = k__$1;
var G__40152 = x__$1;
var G__40153 = u__$2;
var G__40154 = v__$2;
var G__40155 = c__$2;
j = G__40150;
k = G__40151;
x = G__40152;
u__$1 = G__40153;
v__$1 = G__40154;
c__$1 = G__40155;
continue;
}
} else
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,u__$2.call(null,k));var k__$1 = (k + 1);var j__$1 = (j + 1);{
var G__40156 = j__$1;
var G__40157 = k__$1;
var G__40158 = x;
var G__40159 = u__$2;
var G__40160 = v__$2;
var G__40161 = c__$2;
j = G__40156;
k = G__40157;
x = G__40158;
u__$1 = G__40159;
v__$1 = G__40160;
c__$1 = G__40161;
continue;
}
}
}
}
break;
}
})();var u__$1 = cljs.core.nth.call(null,vec__40119,0,null);var v__$1 = cljs.core.nth.call(null,vec__40119,1,null);var c__$1 = cljs.core.nth.call(null,vec__40119,2,null);var j = cljs.core.nth.call(null,vec__40119,3,null);var k = cljs.core.nth.call(null,vec__40119,4,null);if(cljs.core.truth_((function (){var and__8233__auto__ = r;if(cljs.core.truth_(and__8233__auto__))
{return ((k > b)) && (cljs.core._EQ_.call(null,l,(r - 1)));
} else
{return and__8233__auto__;
}
})()))
{return foundation.app.data.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
} else
{if(cljs.core.truth_((function (){var and__8233__auto__ = s;if(cljs.core.truth_(and__8233__auto__))
{return ((k <= b)) && (((l + 1) < s));
} else
{return and__8233__auto__;
}
})()))
{return foundation.app.data.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
} else
{if((k > b))
{var a__$1 = b;var b__$1 = k;var l__$1 = (l + 1);var f__$1 = cljs.core.assoc.call(null,f,(l__$1 + 1),b__$1);{
var G__40162 = n;
var G__40163 = m;
var G__40164 = f__$1;
var G__40165 = c__$1;
var G__40166 = u__$1;
var G__40167 = v__$1;
var G__40168 = a__$1;
var G__40169 = b__$1;
var G__40170 = l__$1;
var G__40171 = r;
var G__40172 = s;
n = G__40162;
m = G__40163;
f = G__40164;
c = G__40165;
u = G__40166;
v = G__40167;
a = G__40168;
b = G__40169;
l = G__40170;
r = G__40171;
s = G__40172;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var part = (function (){var iter__8943__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s){
return (function iter__40120(s__40121){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s){
return (function (){var s__40121__$1 = s__40121;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__40121__$1);if(temp__4092__auto__)
{var s__40121__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__40121__$2))
{var c__8941__auto__ = cljs.core.chunk_first.call(null,s__40121__$2);var size__8942__auto__ = cljs.core.count.call(null,c__8941__auto__);var b__40123 = cljs.core.chunk_buffer.call(null,size__8942__auto__);if((function (){var i__40122 = 0;while(true){
if((i__40122 < size__8942__auto__))
{var y = cljs.core._nth.call(null,c__8941__auto__,i__40122);cljs.core.chunk_append.call(null,b__40123,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + 1)) - 1);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8943__auto__ = ((function (i__40122,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8941__auto__,size__8942__auto__,b__40123,s__40121__$2,temp__4092__auto__){
return (function iter__40132(s__40133){return (new cljs.core.LazySeq(null,((function (i__40122,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8941__auto__,size__8942__auto__,b__40123,s__40121__$2,temp__4092__auto__){
return (function (){var s__40133__$1 = s__40133;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__40133__$1);if(temp__4092__auto____$1)
{var s__40133__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__40133__$2))
{var c__8941__auto____$1 = cljs.core.chunk_first.call(null,s__40133__$2);var size__8942__auto____$1 = cljs.core.count.call(null,c__8941__auto____$1);var b__40135 = cljs.core.chunk_buffer.call(null,size__8942__auto____$1);if((function (){var i__40134 = 0;while(true){
if((i__40134 < size__8942__auto____$1))
{var z = cljs.core._nth.call(null,c__8941__auto____$1,i__40134);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{cljs.core.chunk_append.call(null,b__40135,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));
{
var G__40173 = (i__40134 + 1);
i__40134 = G__40173;
continue;
}
} else
{{
var G__40174 = (i__40134 + 1);
i__40134 = G__40174;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40135),iter__40132.call(null,cljs.core.chunk_rest.call(null,s__40133__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40135),null);
}
} else
{var z = cljs.core.first.call(null,s__40133__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),iter__40132.call(null,cljs.core.rest.call(null,s__40133__$2)));
} else
{{
var G__40175 = cljs.core.rest.call(null,s__40133__$2);
s__40133__$1 = G__40175;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__40122,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8941__auto__,size__8942__auto__,b__40123,s__40121__$2,temp__4092__auto__))
,null,null));
});})(i__40122,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8941__auto__,size__8942__auto__,b__40123,s__40121__$2,temp__4092__auto__))
;return iter__8943__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + 1)));
})());
})());
{
var G__40176 = (i__40122 + 1);
i__40122 = G__40176;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40123),iter__40120.call(null,cljs.core.chunk_rest.call(null,s__40121__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40123),null);
}
} else
{var y = cljs.core.first.call(null,s__40121__$2);return cljs.core.cons.call(null,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + 1)) - 1);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8943__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__40121__$2,temp__4092__auto__){
return (function iter__40136(s__40137){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__40121__$2,temp__4092__auto__){
return (function (){var s__40137__$1 = s__40137;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__40137__$1);if(temp__4092__auto____$1)
{var s__40137__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__40137__$2))
{var c__8941__auto__ = cljs.core.chunk_first.call(null,s__40137__$2);var size__8942__auto__ = cljs.core.count.call(null,c__8941__auto__);var b__40139 = cljs.core.chunk_buffer.call(null,size__8942__auto__);if((function (){var i__40138 = 0;while(true){
if((i__40138 < size__8942__auto__))
{var z = cljs.core._nth.call(null,c__8941__auto__,i__40138);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{cljs.core.chunk_append.call(null,b__40139,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));
{
var G__40177 = (i__40138 + 1);
i__40138 = G__40177;
continue;
}
} else
{{
var G__40178 = (i__40138 + 1);
i__40138 = G__40178;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40139),iter__40136.call(null,cljs.core.chunk_rest.call(null,s__40137__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40139),null);
}
} else
{var z = cljs.core.first.call(null,s__40137__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),iter__40136.call(null,cljs.core.rest.call(null,s__40137__$2)));
} else
{{
var G__40179 = cljs.core.rest.call(null,s__40137__$2);
s__40137__$1 = G__40179;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__40121__$2,temp__4092__auto__))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__40121__$2,temp__4092__auto__))
;return iter__8943__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + 1)));
})());
})(),iter__40120.call(null,cljs.core.rest.call(null,s__40121__$2)));
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s))
;return iter__8943__auto__.call(null,cljs.core.range.call(null,(l + 1)));
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
var G__40188 = (j - 1);
j = G__40188;
continue;
}
}
break;
}
})();if(cljs.core.truth_((function (){var and__8233__auto__ = r;if(cljs.core.truth_(and__8233__auto__))
{return (cljs.core._EQ_.call(null,j,a)) && ((((v.call(null,j) - 1) * (r - l)) < u.call(null,j)));
} else
{return and__8233__auto__;
}
})()))
{return foundation.app.data.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s);
} else
{if((cljs.core._EQ_.call(null,j,a)) && (cljs.core._EQ_.call(null,v.call(null,j),1)))
{return foundation.app.data.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var v__$1 = foundation.app.data.combinatorics.update.call(null,v,j,cljs.core.dec);var diff_uv = (cljs.core.truth_(s)?cljs.core.apply.call(null,cljs.core._PLUS_,(function (){var iter__8943__auto__ = ((function (v__$1){
return (function iter__40184(s__40185){return (new cljs.core.LazySeq(null,((function (v__$1){
return (function (){var s__40185__$1 = s__40185;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__40185__$1);if(temp__4092__auto__)
{var s__40185__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__40185__$2))
{var c__8941__auto__ = cljs.core.chunk_first.call(null,s__40185__$2);var size__8942__auto__ = cljs.core.count.call(null,c__8941__auto__);var b__40187 = cljs.core.chunk_buffer.call(null,size__8942__auto__);if((function (){var i__40186 = 0;while(true){
if((i__40186 < size__8942__auto__))
{var i = cljs.core._nth.call(null,c__8941__auto__,i__40186);cljs.core.chunk_append.call(null,b__40187,(u.call(null,i) - v__$1.call(null,i)));
{
var G__40189 = (i__40186 + 1);
i__40186 = G__40189;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40187),iter__40184.call(null,cljs.core.chunk_rest.call(null,s__40185__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40187),null);
}
} else
{var i = cljs.core.first.call(null,s__40185__$2);return cljs.core.cons.call(null,(u.call(null,i) - v__$1.call(null,i)),iter__40184.call(null,cljs.core.rest.call(null,s__40185__$2)));
}
} else
{return null;
}
break;
}
});})(v__$1))
,null,null));
});})(v__$1))
;return iter__8943__auto__.call(null,cljs.core.range.call(null,a,(j + 1)));
})()):null);var v__$2 = (function (){var ks = cljs.core.range.call(null,(j + 1),b);var v__$2 = v__$1;while(true){
if(cljs.core.empty_QMARK_.call(null,ks))
{return v__$2;
} else
{var k = cljs.core.first.call(null,ks);{
var G__40190 = cljs.core.rest.call(null,ks);
var G__40191 = cljs.core.assoc.call(null,v__$2,k,u.call(null,k));
ks = G__40190;
v__$2 = G__40191;
continue;
}
}
break;
}
})();var min_partitions_after_this = (cljs.core.truth_(s)?(s - (l + 1)):0);var amount_to_dec = (cljs.core.truth_(s)?(function (){var x__8557__auto__ = 0;var y__8558__auto__ = (min_partitions_after_this - diff_uv);return ((x__8557__auto__ > y__8558__auto__) ? x__8557__auto__ : y__8558__auto__);
})():0);var v__$3 = ((cljs.core._EQ_.call(null,amount_to_dec,0))?v__$2:(function (){var k_1 = (b - 1);var v__$3 = v__$2;var amount = amount_to_dec;while(true){
var vk = v__$3.call(null,k_1);if((amount > vk))
{{
var G__40192 = (k_1 - 1);
var G__40193 = cljs.core.assoc.call(null,v__$3,k_1,0);
var G__40194 = (amount - vk);
k_1 = G__40192;
v__$3 = G__40193;
amount = G__40194;
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
var partitions_M__delegate = function (items,p__40195){var map__40253 = p__40195;var map__40253__$1 = ((cljs.core.seq_QMARK_.call(null,map__40253))?cljs.core.apply.call(null,cljs.core.hash_map,map__40253):map__40253);var from = cljs.core.get.call(null,map__40253__$1,new cljs.core.Keyword(null,"min","min",1014012356));var to = cljs.core.get.call(null,map__40253__$1,new cljs.core.Keyword(null,"max","max",1014012118));if(cljs.core._EQ_.call(null,cljs.core.count.call(null,items),0))
{if((((function (){var or__8245__auto__ = from;if(cljs.core.truth_(or__8245__auto__))
{return or__8245__auto__;
} else
{return 0;
}
})() <= 0)) && ((0 <= (function (){var or__8245__auto__ = to;if(cljs.core.truth_(or__8245__auto__))
{return or__8245__auto__;
} else
{return 0;
}
})())))
{return cljs.core.list(cljs.core.List.EMPTY);
} else
{return cljs.core.List.EMPTY;
}
} else
{var items__$1 = cljs.core.vec.call(null,items);var ditems = cljs.core.vec.call(null,cljs.core.distinct.call(null,items__$1));var freqs = cljs.core.frequencies.call(null,items__$1);var N = cljs.core.count.call(null,items__$1);var M = cljs.core.count.call(null,ditems);var from__$1 = (cljs.core.truth_((function (){var and__8233__auto__ = from;if(cljs.core.truth_(and__8233__auto__))
{return (from <= 1);
} else
{return and__8233__auto__;
}
})())?null:from);var to__$1 = (cljs.core.truth_((function (){var and__8233__auto__ = to;if(cljs.core.truth_(and__8233__auto__))
{return (to >= N);
} else
{return and__8233__auto__;
}
})())?null:to);if(!(((1 <= (function (){var or__8245__auto__ = from__$1;if(cljs.core.truth_(or__8245__auto__))
{return or__8245__auto__;
} else
{return 1;
}
})())) && ((((function (){var or__8245__auto__ = from__$1;if(cljs.core.truth_(or__8245__auto__))
{return or__8245__auto__;
} else
{return 1;
}
})() <= (function (){var or__8245__auto__ = to__$1;if(cljs.core.truth_(or__8245__auto__))
{return or__8245__auto__;
} else
{return N;
}
})())) && (((function (){var or__8245__auto__ = to__$1;if(cljs.core.truth_(or__8245__auto__))
{return or__8245__auto__;
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
{var start_multiset = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8943__auto__ = (function iter__40254(s__40255){return (new cljs.core.LazySeq(null,(function (){var s__40255__$1 = s__40255;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__40255__$1);if(temp__4092__auto__)
{var s__40255__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__40255__$2))
{var c__8941__auto__ = cljs.core.chunk_first.call(null,s__40255__$2);var size__8942__auto__ = cljs.core.count.call(null,c__8941__auto__);var b__40257 = cljs.core.chunk_buffer.call(null,size__8942__auto__);if((function (){var i__40256 = 0;while(true){
if((i__40256 < size__8942__auto__))
{var i = cljs.core._nth.call(null,c__8941__auto__,i__40256);var j = (i + 1);cljs.core.chunk_append.call(null,b__40257,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null));
{
var G__40310 = (i__40256 + 1);
i__40256 = G__40310;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40257),iter__40254.call(null,cljs.core.chunk_rest.call(null,s__40255__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40257),null);
}
} else
{var i = cljs.core.first.call(null,s__40255__$2);var j = (i + 1);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null),iter__40254.call(null,cljs.core.rest.call(null,s__40255__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8943__auto__.call(null,cljs.core.range.call(null,M));
})());var parts = foundation.app.data.combinatorics.multiset_partitions_M.call(null,start_multiset,to__$1,from__$1);var iter__8943__auto__ = (function iter__40258(s__40259){return (new cljs.core.LazySeq(null,(function (){var s__40259__$1 = s__40259;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__40259__$1);if(temp__4092__auto__)
{var s__40259__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__40259__$2))
{var c__8941__auto__ = cljs.core.chunk_first.call(null,s__40259__$2);var size__8942__auto__ = cljs.core.count.call(null,c__8941__auto__);var b__40261 = cljs.core.chunk_buffer.call(null,size__8942__auto__);if((function (){var i__40260 = 0;while(true){
if((i__40260 < size__8942__auto__))
{var part = cljs.core._nth.call(null,c__8941__auto__,i__40260);cljs.core.chunk_append.call(null,b__40261,(function (){var iter__8943__auto__ = ((function (i__40260,part,c__8941__auto__,size__8942__auto__,b__40261,s__40259__$2,temp__4092__auto__){
return (function iter__40286(s__40287){return (new cljs.core.LazySeq(null,((function (i__40260,part,c__8941__auto__,size__8942__auto__,b__40261,s__40259__$2,temp__4092__auto__){
return (function (){var s__40287__$1 = s__40287;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__40287__$1);if(temp__4092__auto____$1)
{var s__40287__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__40287__$2))
{var c__8941__auto____$1 = cljs.core.chunk_first.call(null,s__40287__$2);var size__8942__auto____$1 = cljs.core.count.call(null,c__8941__auto____$1);var b__40289 = cljs.core.chunk_buffer.call(null,size__8942__auto____$1);if((function (){var i__40288 = 0;while(true){
if((i__40288 < size__8942__auto____$1))
{var multiset = cljs.core._nth.call(null,c__8941__auto____$1,i__40288);cljs.core.chunk_append.call(null,b__40289,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__40288,i__40260,multiset,c__8941__auto____$1,size__8942__auto____$1,b__40289,s__40287__$2,temp__4092__auto____$1,part,c__8941__auto__,size__8942__auto__,b__40261,s__40259__$2,temp__4092__auto__){
return (function (p__40294){var vec__40295 = p__40294;var index = cljs.core.nth.call(null,vec__40295,0,null);var numtimes = cljs.core.nth.call(null,vec__40295,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__40288,i__40260,multiset,c__8941__auto____$1,size__8942__auto____$1,b__40289,s__40287__$2,temp__4092__auto____$1,part,c__8941__auto__,size__8942__auto__,b__40261,s__40259__$2,temp__4092__auto__))
,multiset)));
{
var G__40311 = (i__40288 + 1);
i__40288 = G__40311;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40289),iter__40286.call(null,cljs.core.chunk_rest.call(null,s__40287__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40289),null);
}
} else
{var multiset = cljs.core.first.call(null,s__40287__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__40260,multiset,s__40287__$2,temp__4092__auto____$1,part,c__8941__auto__,size__8942__auto__,b__40261,s__40259__$2,temp__4092__auto__){
return (function (p__40296){var vec__40297 = p__40296;var index = cljs.core.nth.call(null,vec__40297,0,null);var numtimes = cljs.core.nth.call(null,vec__40297,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__40260,multiset,s__40287__$2,temp__4092__auto____$1,part,c__8941__auto__,size__8942__auto__,b__40261,s__40259__$2,temp__4092__auto__))
,multiset)),iter__40286.call(null,cljs.core.rest.call(null,s__40287__$2)));
}
} else
{return null;
}
break;
}
});})(i__40260,part,c__8941__auto__,size__8942__auto__,b__40261,s__40259__$2,temp__4092__auto__))
,null,null));
});})(i__40260,part,c__8941__auto__,size__8942__auto__,b__40261,s__40259__$2,temp__4092__auto__))
;return iter__8943__auto__.call(null,part);
})());
{
var G__40312 = (i__40260 + 1);
i__40260 = G__40312;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40261),iter__40258.call(null,cljs.core.chunk_rest.call(null,s__40259__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40261),null);
}
} else
{var part = cljs.core.first.call(null,s__40259__$2);return cljs.core.cons.call(null,(function (){var iter__8943__auto__ = ((function (part,s__40259__$2,temp__4092__auto__){
return (function iter__40298(s__40299){return (new cljs.core.LazySeq(null,((function (part,s__40259__$2,temp__4092__auto__){
return (function (){var s__40299__$1 = s__40299;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__40299__$1);if(temp__4092__auto____$1)
{var s__40299__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__40299__$2))
{var c__8941__auto__ = cljs.core.chunk_first.call(null,s__40299__$2);var size__8942__auto__ = cljs.core.count.call(null,c__8941__auto__);var b__40301 = cljs.core.chunk_buffer.call(null,size__8942__auto__);if((function (){var i__40300 = 0;while(true){
if((i__40300 < size__8942__auto__))
{var multiset = cljs.core._nth.call(null,c__8941__auto__,i__40300);cljs.core.chunk_append.call(null,b__40301,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__40300,multiset,c__8941__auto__,size__8942__auto__,b__40301,s__40299__$2,temp__4092__auto____$1,part,s__40259__$2,temp__4092__auto__){
return (function (p__40306){var vec__40307 = p__40306;var index = cljs.core.nth.call(null,vec__40307,0,null);var numtimes = cljs.core.nth.call(null,vec__40307,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__40300,multiset,c__8941__auto__,size__8942__auto__,b__40301,s__40299__$2,temp__4092__auto____$1,part,s__40259__$2,temp__4092__auto__))
,multiset)));
{
var G__40313 = (i__40300 + 1);
i__40300 = G__40313;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40301),iter__40298.call(null,cljs.core.chunk_rest.call(null,s__40299__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40301),null);
}
} else
{var multiset = cljs.core.first.call(null,s__40299__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (multiset,s__40299__$2,temp__4092__auto____$1,part,s__40259__$2,temp__4092__auto__){
return (function (p__40308){var vec__40309 = p__40308;var index = cljs.core.nth.call(null,vec__40309,0,null);var numtimes = cljs.core.nth.call(null,vec__40309,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(multiset,s__40299__$2,temp__4092__auto____$1,part,s__40259__$2,temp__4092__auto__))
,multiset)),iter__40298.call(null,cljs.core.rest.call(null,s__40299__$2)));
}
} else
{return null;
}
break;
}
});})(part,s__40259__$2,temp__4092__auto__))
,null,null));
});})(part,s__40259__$2,temp__4092__auto__))
;return iter__8943__auto__.call(null,part);
})(),iter__40258.call(null,cljs.core.rest.call(null,s__40259__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8943__auto__.call(null,parts);
} else
{return null;
}
}
}
}
};
var partitions_M = function (items,var_args){
var p__40195 = null;if (arguments.length > 1) {
  p__40195 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions_M__delegate.call(this,items,p__40195);};
partitions_M.cljs$lang$maxFixedArity = 1;
partitions_M.cljs$lang$applyTo = (function (arglist__40314){
var items = cljs.core.first(arglist__40314);
var p__40195 = cljs.core.rest(arglist__40314);
return partitions_M__delegate(items,p__40195);
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
partitions.cljs$lang$applyTo = (function (arglist__40315){
var items = cljs.core.first(arglist__40315);
var args = cljs.core.rest(arglist__40315);
return partitions__delegate(items,args);
});
partitions.cljs$core$IFn$_invoke$arity$variadic = partitions__delegate;
return partitions;
})()
;

//# sourceMappingURL=combinatorics.js.map