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
var G__35966 = cljs.core.assoc.call(null,c__$2,(j__$1 - 1),(c__$2.call(null,j__$1) - 1));
var G__35967 = (j__$1 - 1);
c__$2 = G__35966;
j__$1 = G__35967;
continue;
}
}
break;
}
}
}
});
return (new cljs.core.LazySeq(null,(function (){var c = cljs.core.vec.call(null,cljs.core.cons.call(null,null,(function (){var iter__14481__auto__ = (function iter__35962(s__35963){return (new cljs.core.LazySeq(null,(function (){var s__35963__$1 = s__35963;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__35963__$1);if(temp__4092__auto__)
{var s__35963__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__35963__$2))
{var c__14479__auto__ = cljs.core.chunk_first.call(null,s__35963__$2);var size__14480__auto__ = cljs.core.count.call(null,c__14479__auto__);var b__35965 = cljs.core.chunk_buffer.call(null,size__14480__auto__);if((function (){var i__35964 = 0;while(true){
if((i__35964 < size__14480__auto__))
{var j = cljs.core._nth.call(null,c__14479__auto__,i__35964);cljs.core.chunk_append.call(null,b__35965,((j + cnt) + (- (n + 1))));
{
var G__35968 = (i__35964 + 1);
i__35964 = G__35968;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35965),iter__35962.call(null,cljs.core.chunk_rest.call(null,s__35963__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35965),null);
}
} else
{var j = cljs.core.first.call(null,s__35963__$2);return cljs.core.cons.call(null,((j + cnt) + (- (n + 1))),iter__35962.call(null,cljs.core.rest.call(null,s__35963__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14481__auto__.call(null,cljs.core.range.call(null,1,(n + 1)));
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
{return cljs.core.map.call(null,(function (p1__35969_SHARP_){return cljs.core.map.call(null,v_items,p1__35969_SHARP_);
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
var G__35970 = (i - 1);
var G__35971 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__35970;
v_seqs__$2 = G__35971;
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
cartesian_product.cljs$lang$applyTo = (function (arglist__35972){
var seqs = cljs.core.seq(arglist__35972);
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
var G__35973 = (i - 1);
i = G__35973;
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
var G__35974 = (i - 1);
i = G__35974;
continue;
}
}
break;
}
})();var v__$1 = cljs.core.assoc.call(null,v,j,v.call(null,l),l,vj);var k = (j + 1);var l__$1 = (len - 1);while(true){
if((k < l__$1))
{{
var G__35975 = cljs.core.assoc.call(null,v__$1,k,v__$1.call(null,l__$1),l__$1,v__$1.call(null,k));
var G__35976 = (k + 1);
var G__35977 = (l__$1 - 1);
v__$1 = G__35975;
k = G__35976;
l__$1 = G__35977;
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
foundation.app.data.combinatorics.multi_perm = (function multi_perm(l){var f = cljs.core.frequencies.call(null,l);var v = cljs.core.vec.call(null,cljs.core.keys.call(null,f));var indices = cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__14481__auto__ = ((function (f,v){
return (function iter__35982(s__35983){return (new cljs.core.LazySeq(null,((function (f,v){
return (function (){var s__35983__$1 = s__35983;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__35983__$1);if(temp__4092__auto__)
{var s__35983__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__35983__$2))
{var c__14479__auto__ = cljs.core.chunk_first.call(null,s__35983__$2);var size__14480__auto__ = cljs.core.count.call(null,c__14479__auto__);var b__35985 = cljs.core.chunk_buffer.call(null,size__14480__auto__);if((function (){var i__35984 = 0;while(true){
if((i__35984 < size__14480__auto__))
{var i = cljs.core._nth.call(null,c__14479__auto__,i__35984);cljs.core.chunk_append.call(null,b__35985,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));
{
var G__35986 = (i__35984 + 1);
i__35984 = G__35986;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35985),iter__35982.call(null,cljs.core.chunk_rest.call(null,s__35983__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35985),null);
}
} else
{var i = cljs.core.first.call(null,s__35983__$2);return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),iter__35982.call(null,cljs.core.rest.call(null,s__35983__$2)));
}
} else
{return null;
}
break;
}
});})(f,v))
,null,null));
});})(f,v))
;return iter__14481__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,v)));
})());return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.map,v),foundation.app.data.combinatorics.lex_permutations.call(null,indices));
});
/**
* All the distinct permutations of items, lexicographic by index.
*/
foundation.app.data.combinatorics.permutations = (function permutations(items){if(foundation.app.data.combinatorics.sorted_numbers_QMARK_.call(null,items))
{return foundation.app.data.combinatorics.lex_permutations.call(null,items);
} else
{if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core.distinct_QMARK_,items)))
{var v = cljs.core.vec.call(null,items);return cljs.core.map.call(null,(function (p1__35987_SHARP_){return cljs.core.map.call(null,v,p1__35987_SHARP_);
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
{return cljs.core.vec.call(null,(function (){var iter__14481__auto__ = (function iter__35992(s__35993){return (new cljs.core.LazySeq(null,(function (){var s__35993__$1 = s__35993;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__35993__$1);if(temp__4092__auto__)
{var s__35993__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__35993__$2))
{var c__14479__auto__ = cljs.core.chunk_first.call(null,s__35993__$2);var size__14480__auto__ = cljs.core.count.call(null,c__14479__auto__);var b__35995 = cljs.core.chunk_buffer.call(null,size__14480__auto__);if((function (){var i__35994 = 0;while(true){
if((i__35994 < size__14480__auto__))
{var i = cljs.core._nth.call(null,c__14479__auto__,i__35994);cljs.core.chunk_append.call(null,b__35995,(function (){var x__14095__auto__ = 0;var y__14096__auto__ = (i - ((n - s) - -1));return ((x__14095__auto__ > y__14096__auto__) ? x__14095__auto__ : y__14096__auto__);
})());
{
var G__35996 = (i__35994 + 1);
i__35994 = G__35996;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35995),iter__35992.call(null,cljs.core.chunk_rest.call(null,s__35993__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35995),null);
}
} else
{var i = cljs.core.first.call(null,s__35993__$2);return cljs.core.cons.call(null,(function (){var x__14095__auto__ = 0;var y__14096__auto__ = (i - ((n - s) - -1));return ((x__14095__auto__ > y__14096__auto__) ? x__14095__auto__ : y__14096__auto__);
})(),iter__35992.call(null,cljs.core.rest.call(null,s__35993__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14481__auto__.call(null,cljs.core.range.call(null,1,(n + 1)));
})());
} else
{return cljs.core.vec.call(null,cljs.core.repeat.call(null,n,0));
}
});
foundation.app.data.combinatorics.growth_strings_H = (function() {
var growth_strings_H = null;
var growth_strings_H__3 = (function (n,r,s){return growth_strings_H.call(null,n,foundation.app.data.combinatorics.init.call(null,n,s),cljs.core.vec.call(null,cljs.core.repeat.call(null,n,1)),r,s);
});
var growth_strings_H__5 = (function (n,a,b,r,s){return cljs.core.cons.call(null,a,(new cljs.core.LazySeq(null,(function (){if((function (){var and__13776__auto__ = (cljs.core.peek.call(null,b) > cljs.core.peek.call(null,a));if(and__13776__auto__)
{if(cljs.core.truth_(r))
{return (cljs.core.peek.call(null,a) < (r - 1));
} else
{return true;
}
} else
{return and__13776__auto__;
}
})())
{return growth_strings_H.call(null,n,foundation.app.data.combinatorics.update.call(null,a,(n - 1),cljs.core.inc),b,r,s);
} else
{var j = (function (){var j = (n - 2);while(true){
if((function (){var and__13776__auto__ = (a.call(null,j) < b.call(null,j));if(and__13776__auto__)
{var and__13776__auto____$1 = (cljs.core.truth_(r)?(a.call(null,j) < (r - 1)):true);if(and__13776__auto____$1)
{if(cljs.core.truth_(s))
{return (((s - b.call(null,j)) - ((((a.call(null,j) + 1) === b.call(null,j)))?1:0)) <= (n - j));
} else
{return true;
}
} else
{return and__13776__auto____$1;
}
} else
{return and__13776__auto__;
}
})())
{return j;
} else
{{
var G__35999 = (j - 1);
j = G__35999;
continue;
}
}
break;
}
})();if((j === 0))
{return cljs.core.List.EMPTY;
} else
{var a__$1 = foundation.app.data.combinatorics.update.call(null,a,j,cljs.core.inc);var x = (cljs.core.truth_(s)?(s - (b.call(null,j) + ((cljs.core._EQ_.call(null,a__$1.call(null,j),b.call(null,j)))?1:0))):null);var vec__35998 = (function (){var a__$2 = a__$1;var b__$1 = b;var i = (j + 1);var current_max = (b__$1.call(null,j) + (((b__$1.call(null,j) === a__$2.call(null,j)))?1:0));while(true){
if((i === n))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$2,b__$1], null);
} else
{if(cljs.core.truth_((function (){var and__13776__auto__ = s;if(cljs.core.truth_(and__13776__auto__))
{return (i > ((n - x) - 1));
} else
{return and__13776__auto__;
}
})()))
{var new_a_i = ((i - n) + s);{
var G__36000 = cljs.core.assoc.call(null,a__$2,i,new_a_i);
var G__36001 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__36002 = (i + 1);
var G__36003 = (function (){var x__14095__auto__ = current_max;var y__14096__auto__ = (new_a_i + 1);return ((x__14095__auto__ > y__14096__auto__) ? x__14095__auto__ : y__14096__auto__);
})();
a__$2 = G__36000;
b__$1 = G__36001;
i = G__36002;
current_max = G__36003;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__36004 = cljs.core.assoc.call(null,a__$2,i,0);
var G__36005 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__36006 = (i + 1);
var G__36007 = current_max;
a__$2 = G__36004;
b__$1 = G__36005;
i = G__36006;
current_max = G__36007;
continue;
}
} else
{return null;
}
}
}
break;
}
})();var a__$2 = cljs.core.nth.call(null,vec__35998,0,null);var b__$1 = cljs.core.nth.call(null,vec__35998,1,null);return growth_strings_H.call(null,n,a__$2,b__$1,r,s);
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
var lex_partitions_H__delegate = function (N,p__36008){var map__36014 = p__36008;var map__36014__$1 = ((cljs.core.seq_QMARK_.call(null,map__36014))?cljs.core.apply.call(null,cljs.core.hash_map,map__36014):map__36014);var from = cljs.core.get.call(null,map__36014__$1,new cljs.core.Keyword(null,"min","min",1014012356));var to = cljs.core.get.call(null,map__36014__$1,new cljs.core.Keyword(null,"max","max",1014012118));if(cljs.core._EQ_.call(null,N,0))
{if((((function (){var or__13788__auto__ = from;if(cljs.core.truth_(or__13788__auto__))
{return or__13788__auto__;
} else
{return 0;
}
})() <= 0)) && ((0 <= (function (){var or__13788__auto__ = to;if(cljs.core.truth_(or__13788__auto__))
{return or__13788__auto__;
} else
{return 0;
}
})())))
{return cljs.core.list(cljs.core.List.EMPTY);
} else
{return cljs.core.List.EMPTY;
}
} else
{var from__$1 = (cljs.core.truth_((function (){var and__13776__auto__ = from;if(cljs.core.truth_(and__13776__auto__))
{return (from <= 1);
} else
{return and__13776__auto__;
}
})())?null:from);var to__$1 = (cljs.core.truth_((function (){var and__13776__auto__ = to;if(cljs.core.truth_(and__13776__auto__))
{return (to >= N);
} else
{return and__13776__auto__;
}
})())?null:to);if(!(((1 <= (function (){var or__13788__auto__ = from__$1;if(cljs.core.truth_(or__13788__auto__))
{return or__13788__auto__;
} else
{return 1;
}
})())) && ((((function (){var or__13788__auto__ = from__$1;if(cljs.core.truth_(or__13788__auto__))
{return or__13788__auto__;
} else
{return 1;
}
})() <= (function (){var or__13788__auto__ = to__$1;if(cljs.core.truth_(or__13788__auto__))
{return or__13788__auto__;
} else
{return N;
}
})())) && (((function (){var or__13788__auto__ = to__$1;if(cljs.core.truth_(or__13788__auto__))
{return or__13788__auto__;
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
{var growth_strings = foundation.app.data.combinatorics.growth_strings_H.call(null,N,to__$1,from__$1);var iter__14481__auto__ = (function iter__36015(s__36016){return (new cljs.core.LazySeq(null,(function (){var s__36016__$1 = s__36016;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__36016__$1);if(temp__4092__auto__)
{var s__36016__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__36016__$2))
{var c__14479__auto__ = cljs.core.chunk_first.call(null,s__36016__$2);var size__14480__auto__ = cljs.core.count.call(null,c__14479__auto__);var b__36018 = cljs.core.chunk_buffer.call(null,size__14480__auto__);if((function (){var i__36017 = 0;while(true){
if((i__36017 < size__14480__auto__))
{var growth_string = cljs.core._nth.call(null,c__14479__auto__,i__36017);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));cljs.core.chunk_append.call(null,b__36018,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))));
{
var G__36019 = (i__36017 + 1);
i__36017 = G__36019;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36018),iter__36015.call(null,cljs.core.chunk_rest.call(null,s__36016__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36018),null);
}
} else
{var growth_string = cljs.core.first.call(null,s__36016__$2);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));return cljs.core.cons.call(null,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))),iter__36015.call(null,cljs.core.rest.call(null,s__36016__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14481__auto__.call(null,growth_strings);
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
var p__36008 = null;if (arguments.length > 1) {
  p__36008 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return lex_partitions_H__delegate.call(this,N,p__36008);};
lex_partitions_H.cljs$lang$maxFixedArity = 1;
lex_partitions_H.cljs$lang$applyTo = (function (arglist__36020){
var N = cljs.core.first(arglist__36020);
var p__36008 = cljs.core.rest(arglist__36020);
return lex_partitions_H__delegate(N,p__36008);
});
lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic = lex_partitions_H__delegate;
return lex_partitions_H;
})()
;
/**
* @param {...*} var_args
*/
foundation.app.data.combinatorics.partitions_H = (function() { 
var partitions_H__delegate = function (items,args){var items__$1 = cljs.core.vec.call(null,items);var N = cljs.core.count.call(null,items__$1);var lex = cljs.core.apply.call(null,foundation.app.data.combinatorics.lex_partitions_H,N,args);var iter__14481__auto__ = (function iter__36041(s__36042){return (new cljs.core.LazySeq(null,(function (){var s__36042__$1 = s__36042;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__36042__$1);if(temp__4092__auto__)
{var s__36042__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__36042__$2))
{var c__14479__auto__ = cljs.core.chunk_first.call(null,s__36042__$2);var size__14480__auto__ = cljs.core.count.call(null,c__14479__auto__);var b__36044 = cljs.core.chunk_buffer.call(null,size__14480__auto__);if((function (){var i__36043 = 0;while(true){
if((i__36043 < size__14480__auto__))
{var parts = cljs.core._nth.call(null,c__14479__auto__,i__36043);cljs.core.chunk_append.call(null,b__36044,(function (){var iter__14481__auto__ = ((function (i__36043,parts,c__14479__auto__,size__14480__auto__,b__36044,s__36042__$2,temp__4092__auto__){
return (function iter__36053(s__36054){return (new cljs.core.LazySeq(null,((function (i__36043,parts,c__14479__auto__,size__14480__auto__,b__36044,s__36042__$2,temp__4092__auto__){
return (function (){var s__36054__$1 = s__36054;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__36054__$1);if(temp__4092__auto____$1)
{var s__36054__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__36054__$2))
{var c__14479__auto____$1 = cljs.core.chunk_first.call(null,s__36054__$2);var size__14480__auto____$1 = cljs.core.count.call(null,c__14479__auto____$1);var b__36056 = cljs.core.chunk_buffer.call(null,size__14480__auto____$1);if((function (){var i__36055 = 0;while(true){
if((i__36055 < size__14480__auto____$1))
{var part = cljs.core._nth.call(null,c__14479__auto____$1,i__36055);cljs.core.chunk_append.call(null,b__36056,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__36055,i__36043,part,c__14479__auto____$1,size__14480__auto____$1,b__36056,s__36054__$2,temp__4092__auto____$1,parts,c__14479__auto__,size__14480__auto__,b__36044,s__36042__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__36055,i__36043,part,c__14479__auto____$1,size__14480__auto____$1,b__36056,s__36054__$2,temp__4092__auto____$1,parts,c__14479__auto__,size__14480__auto__,b__36044,s__36042__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__36061 = (i__36055 + 1);
i__36055 = G__36061;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36056),iter__36053.call(null,cljs.core.chunk_rest.call(null,s__36054__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36056),null);
}
} else
{var part = cljs.core.first.call(null,s__36054__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__36043,part,s__36054__$2,temp__4092__auto____$1,parts,c__14479__auto__,size__14480__auto__,b__36044,s__36042__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__36043,part,s__36054__$2,temp__4092__auto____$1,parts,c__14479__auto__,size__14480__auto__,b__36044,s__36042__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__36053.call(null,cljs.core.rest.call(null,s__36054__$2)));
}
} else
{return null;
}
break;
}
});})(i__36043,parts,c__14479__auto__,size__14480__auto__,b__36044,s__36042__$2,temp__4092__auto__))
,null,null));
});})(i__36043,parts,c__14479__auto__,size__14480__auto__,b__36044,s__36042__$2,temp__4092__auto__))
;return iter__14481__auto__.call(null,parts);
})());
{
var G__36062 = (i__36043 + 1);
i__36043 = G__36062;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36044),iter__36041.call(null,cljs.core.chunk_rest.call(null,s__36042__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36044),null);
}
} else
{var parts = cljs.core.first.call(null,s__36042__$2);return cljs.core.cons.call(null,(function (){var iter__14481__auto__ = ((function (parts,s__36042__$2,temp__4092__auto__){
return (function iter__36057(s__36058){return (new cljs.core.LazySeq(null,((function (parts,s__36042__$2,temp__4092__auto__){
return (function (){var s__36058__$1 = s__36058;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__36058__$1);if(temp__4092__auto____$1)
{var s__36058__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__36058__$2))
{var c__14479__auto__ = cljs.core.chunk_first.call(null,s__36058__$2);var size__14480__auto__ = cljs.core.count.call(null,c__14479__auto__);var b__36060 = cljs.core.chunk_buffer.call(null,size__14480__auto__);if((function (){var i__36059 = 0;while(true){
if((i__36059 < size__14480__auto__))
{var part = cljs.core._nth.call(null,c__14479__auto__,i__36059);cljs.core.chunk_append.call(null,b__36060,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__36059,part,c__14479__auto__,size__14480__auto__,b__36060,s__36058__$2,temp__4092__auto____$1,parts,s__36042__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__36059,part,c__14479__auto__,size__14480__auto__,b__36060,s__36058__$2,temp__4092__auto____$1,parts,s__36042__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__36063 = (i__36059 + 1);
i__36059 = G__36063;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36060),iter__36057.call(null,cljs.core.chunk_rest.call(null,s__36058__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36060),null);
}
} else
{var part = cljs.core.first.call(null,s__36058__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (part,s__36058__$2,temp__4092__auto____$1,parts,s__36042__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(part,s__36058__$2,temp__4092__auto____$1,parts,s__36042__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__36057.call(null,cljs.core.rest.call(null,s__36058__$2)));
}
} else
{return null;
}
break;
}
});})(parts,s__36042__$2,temp__4092__auto__))
,null,null));
});})(parts,s__36042__$2,temp__4092__auto__))
;return iter__14481__auto__.call(null,parts);
})(),iter__36041.call(null,cljs.core.rest.call(null,s__36042__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14481__auto__.call(null,lex);
};
var partitions_H = function (items,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions_H__delegate.call(this,items,args);};
partitions_H.cljs$lang$maxFixedArity = 1;
partitions_H.cljs$lang$applyTo = (function (arglist__36064){
var items = cljs.core.first(arglist__36064);
var args = cljs.core.rest(arglist__36064);
return partitions_H__delegate(items,args);
});
partitions_H.cljs$core$IFn$_invoke$arity$variadic = partitions_H__delegate;
return partitions_H;
})()
;
foundation.app.data.combinatorics.multiset_partitions_M = (function() {
var multiset_partitions_M = null;
var multiset_partitions_M__3 = (function (multiset,r,s){var n = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,multiset));var m = cljs.core.count.call(null,multiset);var f = cljs.core.PersistentVector.EMPTY;var c = cljs.core.PersistentVector.EMPTY;var u = cljs.core.PersistentVector.EMPTY;var v = cljs.core.PersistentVector.EMPTY;var vec__36087 = (function (){var j = 0;var c__$1 = c;var u__$1 = u;var v__$1 = v;while(true){
if(cljs.core._EQ_.call(null,j,m))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,u__$1,v__$1], null);
} else
{{
var G__36109 = (j + 1);
var G__36110 = cljs.core.assoc.call(null,c__$1,j,(j + 1));
var G__36111 = cljs.core.assoc.call(null,u__$1,j,multiset.call(null,(j + 1)));
var G__36112 = cljs.core.assoc.call(null,v__$1,j,multiset.call(null,(j + 1)));
j = G__36109;
c__$1 = G__36110;
u__$1 = G__36111;
v__$1 = G__36112;
continue;
}
}
break;
}
})();var c__$1 = cljs.core.nth.call(null,vec__36087,0,null);var u__$1 = cljs.core.nth.call(null,vec__36087,1,null);var v__$1 = cljs.core.nth.call(null,vec__36087,2,null);var a = 0;var b = m;var l = 0;var f__$1 = cljs.core.assoc.call(null,f,0,0,1,m);var stack = cljs.core.List.EMPTY;return multiset_partitions_M.call(null,n,m,f__$1,c__$1,u__$1,v__$1,a,b,l,r,s);
});
var multiset_partitions_M__11 = (function (n,m,f,c,u,v,a,b,l,r,s){while(true){
var vec__36088 = (function (){var j = a;var k = b;var x = false;var u__$1 = u;var v__$1 = v;var c__$1 = c;while(true){
if((j >= b))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [u__$1,v__$1,c__$1,j,k], null);
} else
{var u__$2 = cljs.core.assoc.call(null,u__$1,k,(u__$1.call(null,j) - v__$1.call(null,j)));if(cljs.core._EQ_.call(null,u__$2.call(null,k),0))
{{
var G__36113 = (j + 1);
var G__36114 = k;
var G__36115 = true;
var G__36116 = u__$2;
var G__36117 = v__$1;
var G__36118 = c__$1;
j = G__36113;
k = G__36114;
x = G__36115;
u__$1 = G__36116;
v__$1 = G__36117;
c__$1 = G__36118;
continue;
}
} else
{if(!(x))
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,(function (){var x__14102__auto__ = v__$1.call(null,j);var y__14103__auto__ = u__$2.call(null,k);return ((x__14102__auto__ < y__14103__auto__) ? x__14102__auto__ : y__14103__auto__);
})());var x__$1 = (u__$2.call(null,k) < v__$2.call(null,j));var k__$1 = (k + 1);var j__$1 = (j + 1);{
var G__36119 = j__$1;
var G__36120 = k__$1;
var G__36121 = x__$1;
var G__36122 = u__$2;
var G__36123 = v__$2;
var G__36124 = c__$2;
j = G__36119;
k = G__36120;
x = G__36121;
u__$1 = G__36122;
v__$1 = G__36123;
c__$1 = G__36124;
continue;
}
} else
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,u__$2.call(null,k));var k__$1 = (k + 1);var j__$1 = (j + 1);{
var G__36125 = j__$1;
var G__36126 = k__$1;
var G__36127 = x;
var G__36128 = u__$2;
var G__36129 = v__$2;
var G__36130 = c__$2;
j = G__36125;
k = G__36126;
x = G__36127;
u__$1 = G__36128;
v__$1 = G__36129;
c__$1 = G__36130;
continue;
}
}
}
}
break;
}
})();var u__$1 = cljs.core.nth.call(null,vec__36088,0,null);var v__$1 = cljs.core.nth.call(null,vec__36088,1,null);var c__$1 = cljs.core.nth.call(null,vec__36088,2,null);var j = cljs.core.nth.call(null,vec__36088,3,null);var k = cljs.core.nth.call(null,vec__36088,4,null);if(cljs.core.truth_((function (){var and__13776__auto__ = r;if(cljs.core.truth_(and__13776__auto__))
{return ((k > b)) && (cljs.core._EQ_.call(null,l,(r - 1)));
} else
{return and__13776__auto__;
}
})()))
{return foundation.app.data.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
} else
{if(cljs.core.truth_((function (){var and__13776__auto__ = s;if(cljs.core.truth_(and__13776__auto__))
{return ((k <= b)) && (((l + 1) < s));
} else
{return and__13776__auto__;
}
})()))
{return foundation.app.data.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
} else
{if((k > b))
{var a__$1 = b;var b__$1 = k;var l__$1 = (l + 1);var f__$1 = cljs.core.assoc.call(null,f,(l__$1 + 1),b__$1);{
var G__36131 = n;
var G__36132 = m;
var G__36133 = f__$1;
var G__36134 = c__$1;
var G__36135 = u__$1;
var G__36136 = v__$1;
var G__36137 = a__$1;
var G__36138 = b__$1;
var G__36139 = l__$1;
var G__36140 = r;
var G__36141 = s;
n = G__36131;
m = G__36132;
f = G__36133;
c = G__36134;
u = G__36135;
v = G__36136;
a = G__36137;
b = G__36138;
l = G__36139;
r = G__36140;
s = G__36141;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var part = (function (){var iter__14481__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s){
return (function iter__36089(s__36090){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s){
return (function (){var s__36090__$1 = s__36090;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__36090__$1);if(temp__4092__auto__)
{var s__36090__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__36090__$2))
{var c__14479__auto__ = cljs.core.chunk_first.call(null,s__36090__$2);var size__14480__auto__ = cljs.core.count.call(null,c__14479__auto__);var b__36092 = cljs.core.chunk_buffer.call(null,size__14480__auto__);if((function (){var i__36091 = 0;while(true){
if((i__36091 < size__14480__auto__))
{var y = cljs.core._nth.call(null,c__14479__auto__,i__36091);cljs.core.chunk_append.call(null,b__36092,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + 1)) - 1);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__14481__auto__ = ((function (i__36091,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__14479__auto__,size__14480__auto__,b__36092,s__36090__$2,temp__4092__auto__){
return (function iter__36101(s__36102){return (new cljs.core.LazySeq(null,((function (i__36091,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__14479__auto__,size__14480__auto__,b__36092,s__36090__$2,temp__4092__auto__){
return (function (){var s__36102__$1 = s__36102;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__36102__$1);if(temp__4092__auto____$1)
{var s__36102__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__36102__$2))
{var c__14479__auto____$1 = cljs.core.chunk_first.call(null,s__36102__$2);var size__14480__auto____$1 = cljs.core.count.call(null,c__14479__auto____$1);var b__36104 = cljs.core.chunk_buffer.call(null,size__14480__auto____$1);if((function (){var i__36103 = 0;while(true){
if((i__36103 < size__14480__auto____$1))
{var z = cljs.core._nth.call(null,c__14479__auto____$1,i__36103);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{cljs.core.chunk_append.call(null,b__36104,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));
{
var G__36142 = (i__36103 + 1);
i__36103 = G__36142;
continue;
}
} else
{{
var G__36143 = (i__36103 + 1);
i__36103 = G__36143;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36104),iter__36101.call(null,cljs.core.chunk_rest.call(null,s__36102__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36104),null);
}
} else
{var z = cljs.core.first.call(null,s__36102__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),iter__36101.call(null,cljs.core.rest.call(null,s__36102__$2)));
} else
{{
var G__36144 = cljs.core.rest.call(null,s__36102__$2);
s__36102__$1 = G__36144;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__36091,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__14479__auto__,size__14480__auto__,b__36092,s__36090__$2,temp__4092__auto__))
,null,null));
});})(i__36091,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__14479__auto__,size__14480__auto__,b__36092,s__36090__$2,temp__4092__auto__))
;return iter__14481__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + 1)));
})());
})());
{
var G__36145 = (i__36091 + 1);
i__36091 = G__36145;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36092),iter__36089.call(null,cljs.core.chunk_rest.call(null,s__36090__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36092),null);
}
} else
{var y = cljs.core.first.call(null,s__36090__$2);return cljs.core.cons.call(null,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + 1)) - 1);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__14481__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__36090__$2,temp__4092__auto__){
return (function iter__36105(s__36106){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__36090__$2,temp__4092__auto__){
return (function (){var s__36106__$1 = s__36106;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__36106__$1);if(temp__4092__auto____$1)
{var s__36106__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__36106__$2))
{var c__14479__auto__ = cljs.core.chunk_first.call(null,s__36106__$2);var size__14480__auto__ = cljs.core.count.call(null,c__14479__auto__);var b__36108 = cljs.core.chunk_buffer.call(null,size__14480__auto__);if((function (){var i__36107 = 0;while(true){
if((i__36107 < size__14480__auto__))
{var z = cljs.core._nth.call(null,c__14479__auto__,i__36107);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{cljs.core.chunk_append.call(null,b__36108,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));
{
var G__36146 = (i__36107 + 1);
i__36107 = G__36146;
continue;
}
} else
{{
var G__36147 = (i__36107 + 1);
i__36107 = G__36147;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36108),iter__36105.call(null,cljs.core.chunk_rest.call(null,s__36106__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36108),null);
}
} else
{var z = cljs.core.first.call(null,s__36106__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),iter__36105.call(null,cljs.core.rest.call(null,s__36106__$2)));
} else
{{
var G__36148 = cljs.core.rest.call(null,s__36106__$2);
s__36106__$1 = G__36148;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__36090__$2,temp__4092__auto__))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__36090__$2,temp__4092__auto__))
;return iter__14481__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + 1)));
})());
})(),iter__36089.call(null,cljs.core.rest.call(null,s__36090__$2)));
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s))
;return iter__14481__auto__.call(null,cljs.core.range.call(null,(l + 1)));
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
var G__36157 = (j - 1);
j = G__36157;
continue;
}
}
break;
}
})();if(cljs.core.truth_((function (){var and__13776__auto__ = r;if(cljs.core.truth_(and__13776__auto__))
{return (cljs.core._EQ_.call(null,j,a)) && ((((v.call(null,j) - 1) * (r - l)) < u.call(null,j)));
} else
{return and__13776__auto__;
}
})()))
{return foundation.app.data.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s);
} else
{if((cljs.core._EQ_.call(null,j,a)) && (cljs.core._EQ_.call(null,v.call(null,j),1)))
{return foundation.app.data.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var v__$1 = foundation.app.data.combinatorics.update.call(null,v,j,cljs.core.dec);var diff_uv = (cljs.core.truth_(s)?cljs.core.apply.call(null,cljs.core._PLUS_,(function (){var iter__14481__auto__ = ((function (v__$1){
return (function iter__36153(s__36154){return (new cljs.core.LazySeq(null,((function (v__$1){
return (function (){var s__36154__$1 = s__36154;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__36154__$1);if(temp__4092__auto__)
{var s__36154__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__36154__$2))
{var c__14479__auto__ = cljs.core.chunk_first.call(null,s__36154__$2);var size__14480__auto__ = cljs.core.count.call(null,c__14479__auto__);var b__36156 = cljs.core.chunk_buffer.call(null,size__14480__auto__);if((function (){var i__36155 = 0;while(true){
if((i__36155 < size__14480__auto__))
{var i = cljs.core._nth.call(null,c__14479__auto__,i__36155);cljs.core.chunk_append.call(null,b__36156,(u.call(null,i) - v__$1.call(null,i)));
{
var G__36158 = (i__36155 + 1);
i__36155 = G__36158;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36156),iter__36153.call(null,cljs.core.chunk_rest.call(null,s__36154__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36156),null);
}
} else
{var i = cljs.core.first.call(null,s__36154__$2);return cljs.core.cons.call(null,(u.call(null,i) - v__$1.call(null,i)),iter__36153.call(null,cljs.core.rest.call(null,s__36154__$2)));
}
} else
{return null;
}
break;
}
});})(v__$1))
,null,null));
});})(v__$1))
;return iter__14481__auto__.call(null,cljs.core.range.call(null,a,(j + 1)));
})()):null);var v__$2 = (function (){var ks = cljs.core.range.call(null,(j + 1),b);var v__$2 = v__$1;while(true){
if(cljs.core.empty_QMARK_.call(null,ks))
{return v__$2;
} else
{var k = cljs.core.first.call(null,ks);{
var G__36159 = cljs.core.rest.call(null,ks);
var G__36160 = cljs.core.assoc.call(null,v__$2,k,u.call(null,k));
ks = G__36159;
v__$2 = G__36160;
continue;
}
}
break;
}
})();var min_partitions_after_this = (cljs.core.truth_(s)?(s - (l + 1)):0);var amount_to_dec = (cljs.core.truth_(s)?(function (){var x__14095__auto__ = 0;var y__14096__auto__ = (min_partitions_after_this - diff_uv);return ((x__14095__auto__ > y__14096__auto__) ? x__14095__auto__ : y__14096__auto__);
})():0);var v__$3 = ((cljs.core._EQ_.call(null,amount_to_dec,0))?v__$2:(function (){var k_1 = (b - 1);var v__$3 = v__$2;var amount = amount_to_dec;while(true){
var vk = v__$3.call(null,k_1);if((amount > vk))
{{
var G__36161 = (k_1 - 1);
var G__36162 = cljs.core.assoc.call(null,v__$3,k_1,0);
var G__36163 = (amount - vk);
k_1 = G__36161;
v__$3 = G__36162;
amount = G__36163;
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
var partitions_M__delegate = function (items,p__36164){var map__36222 = p__36164;var map__36222__$1 = ((cljs.core.seq_QMARK_.call(null,map__36222))?cljs.core.apply.call(null,cljs.core.hash_map,map__36222):map__36222);var from = cljs.core.get.call(null,map__36222__$1,new cljs.core.Keyword(null,"min","min",1014012356));var to = cljs.core.get.call(null,map__36222__$1,new cljs.core.Keyword(null,"max","max",1014012118));if(cljs.core._EQ_.call(null,cljs.core.count.call(null,items),0))
{if((((function (){var or__13788__auto__ = from;if(cljs.core.truth_(or__13788__auto__))
{return or__13788__auto__;
} else
{return 0;
}
})() <= 0)) && ((0 <= (function (){var or__13788__auto__ = to;if(cljs.core.truth_(or__13788__auto__))
{return or__13788__auto__;
} else
{return 0;
}
})())))
{return cljs.core.list(cljs.core.List.EMPTY);
} else
{return cljs.core.List.EMPTY;
}
} else
{var items__$1 = cljs.core.vec.call(null,items);var ditems = cljs.core.vec.call(null,cljs.core.distinct.call(null,items__$1));var freqs = cljs.core.frequencies.call(null,items__$1);var N = cljs.core.count.call(null,items__$1);var M = cljs.core.count.call(null,ditems);var from__$1 = (cljs.core.truth_((function (){var and__13776__auto__ = from;if(cljs.core.truth_(and__13776__auto__))
{return (from <= 1);
} else
{return and__13776__auto__;
}
})())?null:from);var to__$1 = (cljs.core.truth_((function (){var and__13776__auto__ = to;if(cljs.core.truth_(and__13776__auto__))
{return (to >= N);
} else
{return and__13776__auto__;
}
})())?null:to);if(!(((1 <= (function (){var or__13788__auto__ = from__$1;if(cljs.core.truth_(or__13788__auto__))
{return or__13788__auto__;
} else
{return 1;
}
})())) && ((((function (){var or__13788__auto__ = from__$1;if(cljs.core.truth_(or__13788__auto__))
{return or__13788__auto__;
} else
{return 1;
}
})() <= (function (){var or__13788__auto__ = to__$1;if(cljs.core.truth_(or__13788__auto__))
{return or__13788__auto__;
} else
{return N;
}
})())) && (((function (){var or__13788__auto__ = to__$1;if(cljs.core.truth_(or__13788__auto__))
{return or__13788__auto__;
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
{var start_multiset = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__14481__auto__ = (function iter__36223(s__36224){return (new cljs.core.LazySeq(null,(function (){var s__36224__$1 = s__36224;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__36224__$1);if(temp__4092__auto__)
{var s__36224__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__36224__$2))
{var c__14479__auto__ = cljs.core.chunk_first.call(null,s__36224__$2);var size__14480__auto__ = cljs.core.count.call(null,c__14479__auto__);var b__36226 = cljs.core.chunk_buffer.call(null,size__14480__auto__);if((function (){var i__36225 = 0;while(true){
if((i__36225 < size__14480__auto__))
{var i = cljs.core._nth.call(null,c__14479__auto__,i__36225);var j = (i + 1);cljs.core.chunk_append.call(null,b__36226,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null));
{
var G__36279 = (i__36225 + 1);
i__36225 = G__36279;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36226),iter__36223.call(null,cljs.core.chunk_rest.call(null,s__36224__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36226),null);
}
} else
{var i = cljs.core.first.call(null,s__36224__$2);var j = (i + 1);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null),iter__36223.call(null,cljs.core.rest.call(null,s__36224__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14481__auto__.call(null,cljs.core.range.call(null,M));
})());var parts = foundation.app.data.combinatorics.multiset_partitions_M.call(null,start_multiset,to__$1,from__$1);var iter__14481__auto__ = (function iter__36227(s__36228){return (new cljs.core.LazySeq(null,(function (){var s__36228__$1 = s__36228;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__36228__$1);if(temp__4092__auto__)
{var s__36228__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__36228__$2))
{var c__14479__auto__ = cljs.core.chunk_first.call(null,s__36228__$2);var size__14480__auto__ = cljs.core.count.call(null,c__14479__auto__);var b__36230 = cljs.core.chunk_buffer.call(null,size__14480__auto__);if((function (){var i__36229 = 0;while(true){
if((i__36229 < size__14480__auto__))
{var part = cljs.core._nth.call(null,c__14479__auto__,i__36229);cljs.core.chunk_append.call(null,b__36230,(function (){var iter__14481__auto__ = ((function (i__36229,part,c__14479__auto__,size__14480__auto__,b__36230,s__36228__$2,temp__4092__auto__){
return (function iter__36255(s__36256){return (new cljs.core.LazySeq(null,((function (i__36229,part,c__14479__auto__,size__14480__auto__,b__36230,s__36228__$2,temp__4092__auto__){
return (function (){var s__36256__$1 = s__36256;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__36256__$1);if(temp__4092__auto____$1)
{var s__36256__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__36256__$2))
{var c__14479__auto____$1 = cljs.core.chunk_first.call(null,s__36256__$2);var size__14480__auto____$1 = cljs.core.count.call(null,c__14479__auto____$1);var b__36258 = cljs.core.chunk_buffer.call(null,size__14480__auto____$1);if((function (){var i__36257 = 0;while(true){
if((i__36257 < size__14480__auto____$1))
{var multiset = cljs.core._nth.call(null,c__14479__auto____$1,i__36257);cljs.core.chunk_append.call(null,b__36258,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__36257,i__36229,multiset,c__14479__auto____$1,size__14480__auto____$1,b__36258,s__36256__$2,temp__4092__auto____$1,part,c__14479__auto__,size__14480__auto__,b__36230,s__36228__$2,temp__4092__auto__){
return (function (p__36263){var vec__36264 = p__36263;var index = cljs.core.nth.call(null,vec__36264,0,null);var numtimes = cljs.core.nth.call(null,vec__36264,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__36257,i__36229,multiset,c__14479__auto____$1,size__14480__auto____$1,b__36258,s__36256__$2,temp__4092__auto____$1,part,c__14479__auto__,size__14480__auto__,b__36230,s__36228__$2,temp__4092__auto__))
,multiset)));
{
var G__36280 = (i__36257 + 1);
i__36257 = G__36280;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36258),iter__36255.call(null,cljs.core.chunk_rest.call(null,s__36256__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36258),null);
}
} else
{var multiset = cljs.core.first.call(null,s__36256__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__36229,multiset,s__36256__$2,temp__4092__auto____$1,part,c__14479__auto__,size__14480__auto__,b__36230,s__36228__$2,temp__4092__auto__){
return (function (p__36265){var vec__36266 = p__36265;var index = cljs.core.nth.call(null,vec__36266,0,null);var numtimes = cljs.core.nth.call(null,vec__36266,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__36229,multiset,s__36256__$2,temp__4092__auto____$1,part,c__14479__auto__,size__14480__auto__,b__36230,s__36228__$2,temp__4092__auto__))
,multiset)),iter__36255.call(null,cljs.core.rest.call(null,s__36256__$2)));
}
} else
{return null;
}
break;
}
});})(i__36229,part,c__14479__auto__,size__14480__auto__,b__36230,s__36228__$2,temp__4092__auto__))
,null,null));
});})(i__36229,part,c__14479__auto__,size__14480__auto__,b__36230,s__36228__$2,temp__4092__auto__))
;return iter__14481__auto__.call(null,part);
})());
{
var G__36281 = (i__36229 + 1);
i__36229 = G__36281;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36230),iter__36227.call(null,cljs.core.chunk_rest.call(null,s__36228__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36230),null);
}
} else
{var part = cljs.core.first.call(null,s__36228__$2);return cljs.core.cons.call(null,(function (){var iter__14481__auto__ = ((function (part,s__36228__$2,temp__4092__auto__){
return (function iter__36267(s__36268){return (new cljs.core.LazySeq(null,((function (part,s__36228__$2,temp__4092__auto__){
return (function (){var s__36268__$1 = s__36268;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__36268__$1);if(temp__4092__auto____$1)
{var s__36268__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__36268__$2))
{var c__14479__auto__ = cljs.core.chunk_first.call(null,s__36268__$2);var size__14480__auto__ = cljs.core.count.call(null,c__14479__auto__);var b__36270 = cljs.core.chunk_buffer.call(null,size__14480__auto__);if((function (){var i__36269 = 0;while(true){
if((i__36269 < size__14480__auto__))
{var multiset = cljs.core._nth.call(null,c__14479__auto__,i__36269);cljs.core.chunk_append.call(null,b__36270,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__36269,multiset,c__14479__auto__,size__14480__auto__,b__36270,s__36268__$2,temp__4092__auto____$1,part,s__36228__$2,temp__4092__auto__){
return (function (p__36275){var vec__36276 = p__36275;var index = cljs.core.nth.call(null,vec__36276,0,null);var numtimes = cljs.core.nth.call(null,vec__36276,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__36269,multiset,c__14479__auto__,size__14480__auto__,b__36270,s__36268__$2,temp__4092__auto____$1,part,s__36228__$2,temp__4092__auto__))
,multiset)));
{
var G__36282 = (i__36269 + 1);
i__36269 = G__36282;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36270),iter__36267.call(null,cljs.core.chunk_rest.call(null,s__36268__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36270),null);
}
} else
{var multiset = cljs.core.first.call(null,s__36268__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (multiset,s__36268__$2,temp__4092__auto____$1,part,s__36228__$2,temp__4092__auto__){
return (function (p__36277){var vec__36278 = p__36277;var index = cljs.core.nth.call(null,vec__36278,0,null);var numtimes = cljs.core.nth.call(null,vec__36278,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(multiset,s__36268__$2,temp__4092__auto____$1,part,s__36228__$2,temp__4092__auto__))
,multiset)),iter__36267.call(null,cljs.core.rest.call(null,s__36268__$2)));
}
} else
{return null;
}
break;
}
});})(part,s__36228__$2,temp__4092__auto__))
,null,null));
});})(part,s__36228__$2,temp__4092__auto__))
;return iter__14481__auto__.call(null,part);
})(),iter__36227.call(null,cljs.core.rest.call(null,s__36228__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14481__auto__.call(null,parts);
} else
{return null;
}
}
}
}
};
var partitions_M = function (items,var_args){
var p__36164 = null;if (arguments.length > 1) {
  p__36164 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions_M__delegate.call(this,items,p__36164);};
partitions_M.cljs$lang$maxFixedArity = 1;
partitions_M.cljs$lang$applyTo = (function (arglist__36283){
var items = cljs.core.first(arglist__36283);
var p__36164 = cljs.core.rest(arglist__36283);
return partitions_M__delegate(items,p__36164);
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
partitions.cljs$lang$applyTo = (function (arglist__36284){
var items = cljs.core.first(arglist__36284);
var args = cljs.core.rest(arglist__36284);
return partitions__delegate(items,args);
});
partitions.cljs$core$IFn$_invoke$arity$variadic = partitions__delegate;
return partitions;
})()
;

//# sourceMappingURL=combinatorics.js.map