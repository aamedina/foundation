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
var G__15969 = cljs.core.assoc.call(null,c__$2,(j__$1 - 1),(c__$2.call(null,j__$1) - 1));
var G__15970 = (j__$1 - 1);
c__$2 = G__15969;
j__$1 = G__15970;
continue;
}
}
break;
}
}
}
});
return (new cljs.core.LazySeq(null,(function (){var c = cljs.core.vec.call(null,cljs.core.cons.call(null,null,(function (){var iter__14516__auto__ = (function iter__15965(s__15966){return (new cljs.core.LazySeq(null,(function (){var s__15966__$1 = s__15966;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15966__$1);if(temp__4092__auto__)
{var s__15966__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15966__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__15966__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__15968 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__15967 = 0;while(true){
if((i__15967 < size__14515__auto__))
{var j = cljs.core._nth.call(null,c__14514__auto__,i__15967);cljs.core.chunk_append.call(null,b__15968,((j + cnt) + (- (n + 1))));
{
var G__15971 = (i__15967 + 1);
i__15967 = G__15971;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15968),iter__15965.call(null,cljs.core.chunk_rest.call(null,s__15966__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15968),null);
}
} else
{var j = cljs.core.first.call(null,s__15966__$2);return cljs.core.cons.call(null,((j + cnt) + (- (n + 1))),iter__15965.call(null,cljs.core.rest.call(null,s__15966__$2)));
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
{return cljs.core.map.call(null,(function (p1__15972_SHARP_){return cljs.core.map.call(null,v_items,p1__15972_SHARP_);
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
var G__15973 = (i - 1);
var G__15974 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__15973;
v_seqs__$2 = G__15974;
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
cartesian_product.cljs$lang$applyTo = (function (arglist__15975){
var seqs = cljs.core.seq(arglist__15975);
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
var G__15976 = (i - 1);
i = G__15976;
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
var G__15977 = (i - 1);
i = G__15977;
continue;
}
}
break;
}
})();var v__$1 = cljs.core.assoc.call(null,v,j,v.call(null,l),l,vj);var k = (j + 1);var l__$1 = (len - 1);while(true){
if((k < l__$1))
{{
var G__15978 = cljs.core.assoc.call(null,v__$1,k,v__$1.call(null,l__$1),l__$1,v__$1.call(null,k));
var G__15979 = (k + 1);
var G__15980 = (l__$1 - 1);
v__$1 = G__15978;
k = G__15979;
l__$1 = G__15980;
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
return (function iter__15985(s__15986){return (new cljs.core.LazySeq(null,((function (f,v){
return (function (){var s__15986__$1 = s__15986;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15986__$1);if(temp__4092__auto__)
{var s__15986__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15986__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__15986__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__15988 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__15987 = 0;while(true){
if((i__15987 < size__14515__auto__))
{var i = cljs.core._nth.call(null,c__14514__auto__,i__15987);cljs.core.chunk_append.call(null,b__15988,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));
{
var G__15989 = (i__15987 + 1);
i__15987 = G__15989;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15988),iter__15985.call(null,cljs.core.chunk_rest.call(null,s__15986__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15988),null);
}
} else
{var i = cljs.core.first.call(null,s__15986__$2);return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),iter__15985.call(null,cljs.core.rest.call(null,s__15986__$2)));
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
{var v = cljs.core.vec.call(null,items);return cljs.core.map.call(null,(function (p1__15990_SHARP_){return cljs.core.map.call(null,v,p1__15990_SHARP_);
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
{return cljs.core.vec.call(null,(function (){var iter__14516__auto__ = (function iter__15995(s__15996){return (new cljs.core.LazySeq(null,(function (){var s__15996__$1 = s__15996;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15996__$1);if(temp__4092__auto__)
{var s__15996__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15996__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__15996__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__15998 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__15997 = 0;while(true){
if((i__15997 < size__14515__auto__))
{var i = cljs.core._nth.call(null,c__14514__auto__,i__15997);cljs.core.chunk_append.call(null,b__15998,(function (){var x__14130__auto__ = 0;var y__14131__auto__ = (i - ((n - s) - -1));return ((x__14130__auto__ > y__14131__auto__) ? x__14130__auto__ : y__14131__auto__);
})());
{
var G__15999 = (i__15997 + 1);
i__15997 = G__15999;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15998),iter__15995.call(null,cljs.core.chunk_rest.call(null,s__15996__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15998),null);
}
} else
{var i = cljs.core.first.call(null,s__15996__$2);return cljs.core.cons.call(null,(function (){var x__14130__auto__ = 0;var y__14131__auto__ = (i - ((n - s) - -1));return ((x__14130__auto__ > y__14131__auto__) ? x__14130__auto__ : y__14131__auto__);
})(),iter__15995.call(null,cljs.core.rest.call(null,s__15996__$2)));
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
var G__16002 = (j - 1);
j = G__16002;
continue;
}
}
break;
}
})();if((j === 0))
{return cljs.core.List.EMPTY;
} else
{var a__$1 = foundation.app.data.combinatorics.update.call(null,a,j,cljs.core.inc);var x = (cljs.core.truth_(s)?(s - (b.call(null,j) + ((cljs.core._EQ_.call(null,a__$1.call(null,j),b.call(null,j)))?1:0))):null);var vec__16001 = (function (){var a__$2 = a__$1;var b__$1 = b;var i = (j + 1);var current_max = (b__$1.call(null,j) + (((b__$1.call(null,j) === a__$2.call(null,j)))?1:0));while(true){
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
var G__16003 = cljs.core.assoc.call(null,a__$2,i,new_a_i);
var G__16004 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__16005 = (i + 1);
var G__16006 = (function (){var x__14130__auto__ = current_max;var y__14131__auto__ = (new_a_i + 1);return ((x__14130__auto__ > y__14131__auto__) ? x__14130__auto__ : y__14131__auto__);
})();
a__$2 = G__16003;
b__$1 = G__16004;
i = G__16005;
current_max = G__16006;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__16007 = cljs.core.assoc.call(null,a__$2,i,0);
var G__16008 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__16009 = (i + 1);
var G__16010 = current_max;
a__$2 = G__16007;
b__$1 = G__16008;
i = G__16009;
current_max = G__16010;
continue;
}
} else
{return null;
}
}
}
break;
}
})();var a__$2 = cljs.core.nth.call(null,vec__16001,0,null);var b__$1 = cljs.core.nth.call(null,vec__16001,1,null);return growth_strings_H.call(null,n,a__$2,b__$1,r,s);
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
var lex_partitions_H__delegate = function (N,p__16011){var map__16017 = p__16011;var map__16017__$1 = ((cljs.core.seq_QMARK_.call(null,map__16017))?cljs.core.apply.call(null,cljs.core.hash_map,map__16017):map__16017);var from = cljs.core.get.call(null,map__16017__$1,new cljs.core.Keyword(null,"min","min",1014012356));var to = cljs.core.get.call(null,map__16017__$1,new cljs.core.Keyword(null,"max","max",1014012118));if(cljs.core._EQ_.call(null,N,0))
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
{var growth_strings = foundation.app.data.combinatorics.growth_strings_H.call(null,N,to__$1,from__$1);var iter__14516__auto__ = (function iter__16018(s__16019){return (new cljs.core.LazySeq(null,(function (){var s__16019__$1 = s__16019;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16019__$1);if(temp__4092__auto__)
{var s__16019__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16019__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__16019__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__16021 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__16020 = 0;while(true){
if((i__16020 < size__14515__auto__))
{var growth_string = cljs.core._nth.call(null,c__14514__auto__,i__16020);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));cljs.core.chunk_append.call(null,b__16021,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))));
{
var G__16022 = (i__16020 + 1);
i__16020 = G__16022;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16021),iter__16018.call(null,cljs.core.chunk_rest.call(null,s__16019__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16021),null);
}
} else
{var growth_string = cljs.core.first.call(null,s__16019__$2);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));return cljs.core.cons.call(null,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))),iter__16018.call(null,cljs.core.rest.call(null,s__16019__$2)));
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
var p__16011 = null;if (arguments.length > 1) {
  p__16011 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return lex_partitions_H__delegate.call(this,N,p__16011);};
lex_partitions_H.cljs$lang$maxFixedArity = 1;
lex_partitions_H.cljs$lang$applyTo = (function (arglist__16023){
var N = cljs.core.first(arglist__16023);
var p__16011 = cljs.core.rest(arglist__16023);
return lex_partitions_H__delegate(N,p__16011);
});
lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic = lex_partitions_H__delegate;
return lex_partitions_H;
})()
;
/**
* @param {...*} var_args
*/
foundation.app.data.combinatorics.partitions_H = (function() { 
var partitions_H__delegate = function (items,args){var items__$1 = cljs.core.vec.call(null,items);var N = cljs.core.count.call(null,items__$1);var lex = cljs.core.apply.call(null,foundation.app.data.combinatorics.lex_partitions_H,N,args);var iter__14516__auto__ = (function iter__16044(s__16045){return (new cljs.core.LazySeq(null,(function (){var s__16045__$1 = s__16045;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16045__$1);if(temp__4092__auto__)
{var s__16045__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16045__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__16045__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__16047 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__16046 = 0;while(true){
if((i__16046 < size__14515__auto__))
{var parts = cljs.core._nth.call(null,c__14514__auto__,i__16046);cljs.core.chunk_append.call(null,b__16047,(function (){var iter__14516__auto__ = ((function (i__16046,parts,c__14514__auto__,size__14515__auto__,b__16047,s__16045__$2,temp__4092__auto__){
return (function iter__16056(s__16057){return (new cljs.core.LazySeq(null,((function (i__16046,parts,c__14514__auto__,size__14515__auto__,b__16047,s__16045__$2,temp__4092__auto__){
return (function (){var s__16057__$1 = s__16057;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__16057__$1);if(temp__4092__auto____$1)
{var s__16057__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__16057__$2))
{var c__14514__auto____$1 = cljs.core.chunk_first.call(null,s__16057__$2);var size__14515__auto____$1 = cljs.core.count.call(null,c__14514__auto____$1);var b__16059 = cljs.core.chunk_buffer.call(null,size__14515__auto____$1);if((function (){var i__16058 = 0;while(true){
if((i__16058 < size__14515__auto____$1))
{var part = cljs.core._nth.call(null,c__14514__auto____$1,i__16058);cljs.core.chunk_append.call(null,b__16059,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__16058,i__16046,part,c__14514__auto____$1,size__14515__auto____$1,b__16059,s__16057__$2,temp__4092__auto____$1,parts,c__14514__auto__,size__14515__auto__,b__16047,s__16045__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__16058,i__16046,part,c__14514__auto____$1,size__14515__auto____$1,b__16059,s__16057__$2,temp__4092__auto____$1,parts,c__14514__auto__,size__14515__auto__,b__16047,s__16045__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__16064 = (i__16058 + 1);
i__16058 = G__16064;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16059),iter__16056.call(null,cljs.core.chunk_rest.call(null,s__16057__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16059),null);
}
} else
{var part = cljs.core.first.call(null,s__16057__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__16046,part,s__16057__$2,temp__4092__auto____$1,parts,c__14514__auto__,size__14515__auto__,b__16047,s__16045__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__16046,part,s__16057__$2,temp__4092__auto____$1,parts,c__14514__auto__,size__14515__auto__,b__16047,s__16045__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__16056.call(null,cljs.core.rest.call(null,s__16057__$2)));
}
} else
{return null;
}
break;
}
});})(i__16046,parts,c__14514__auto__,size__14515__auto__,b__16047,s__16045__$2,temp__4092__auto__))
,null,null));
});})(i__16046,parts,c__14514__auto__,size__14515__auto__,b__16047,s__16045__$2,temp__4092__auto__))
;return iter__14516__auto__.call(null,parts);
})());
{
var G__16065 = (i__16046 + 1);
i__16046 = G__16065;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16047),iter__16044.call(null,cljs.core.chunk_rest.call(null,s__16045__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16047),null);
}
} else
{var parts = cljs.core.first.call(null,s__16045__$2);return cljs.core.cons.call(null,(function (){var iter__14516__auto__ = ((function (parts,s__16045__$2,temp__4092__auto__){
return (function iter__16060(s__16061){return (new cljs.core.LazySeq(null,((function (parts,s__16045__$2,temp__4092__auto__){
return (function (){var s__16061__$1 = s__16061;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__16061__$1);if(temp__4092__auto____$1)
{var s__16061__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__16061__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__16061__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__16063 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__16062 = 0;while(true){
if((i__16062 < size__14515__auto__))
{var part = cljs.core._nth.call(null,c__14514__auto__,i__16062);cljs.core.chunk_append.call(null,b__16063,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__16062,part,c__14514__auto__,size__14515__auto__,b__16063,s__16061__$2,temp__4092__auto____$1,parts,s__16045__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__16062,part,c__14514__auto__,size__14515__auto__,b__16063,s__16061__$2,temp__4092__auto____$1,parts,s__16045__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__16066 = (i__16062 + 1);
i__16062 = G__16066;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16063),iter__16060.call(null,cljs.core.chunk_rest.call(null,s__16061__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16063),null);
}
} else
{var part = cljs.core.first.call(null,s__16061__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (part,s__16061__$2,temp__4092__auto____$1,parts,s__16045__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(part,s__16061__$2,temp__4092__auto____$1,parts,s__16045__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__16060.call(null,cljs.core.rest.call(null,s__16061__$2)));
}
} else
{return null;
}
break;
}
});})(parts,s__16045__$2,temp__4092__auto__))
,null,null));
});})(parts,s__16045__$2,temp__4092__auto__))
;return iter__14516__auto__.call(null,parts);
})(),iter__16044.call(null,cljs.core.rest.call(null,s__16045__$2)));
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
partitions_H.cljs$lang$applyTo = (function (arglist__16067){
var items = cljs.core.first(arglist__16067);
var args = cljs.core.rest(arglist__16067);
return partitions_H__delegate(items,args);
});
partitions_H.cljs$core$IFn$_invoke$arity$variadic = partitions_H__delegate;
return partitions_H;
})()
;
foundation.app.data.combinatorics.multiset_partitions_M = (function() {
var multiset_partitions_M = null;
var multiset_partitions_M__3 = (function (multiset,r,s){var n = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,multiset));var m = cljs.core.count.call(null,multiset);var f = cljs.core.PersistentVector.EMPTY;var c = cljs.core.PersistentVector.EMPTY;var u = cljs.core.PersistentVector.EMPTY;var v = cljs.core.PersistentVector.EMPTY;var vec__16090 = (function (){var j = 0;var c__$1 = c;var u__$1 = u;var v__$1 = v;while(true){
if(cljs.core._EQ_.call(null,j,m))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,u__$1,v__$1], null);
} else
{{
var G__16112 = (j + 1);
var G__16113 = cljs.core.assoc.call(null,c__$1,j,(j + 1));
var G__16114 = cljs.core.assoc.call(null,u__$1,j,multiset.call(null,(j + 1)));
var G__16115 = cljs.core.assoc.call(null,v__$1,j,multiset.call(null,(j + 1)));
j = G__16112;
c__$1 = G__16113;
u__$1 = G__16114;
v__$1 = G__16115;
continue;
}
}
break;
}
})();var c__$1 = cljs.core.nth.call(null,vec__16090,0,null);var u__$1 = cljs.core.nth.call(null,vec__16090,1,null);var v__$1 = cljs.core.nth.call(null,vec__16090,2,null);var a = 0;var b = m;var l = 0;var f__$1 = cljs.core.assoc.call(null,f,0,0,1,m);var stack = cljs.core.List.EMPTY;return multiset_partitions_M.call(null,n,m,f__$1,c__$1,u__$1,v__$1,a,b,l,r,s);
});
var multiset_partitions_M__11 = (function (n,m,f,c,u,v,a,b,l,r,s){while(true){
var vec__16091 = (function (){var j = a;var k = b;var x = false;var u__$1 = u;var v__$1 = v;var c__$1 = c;while(true){
if((j >= b))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [u__$1,v__$1,c__$1,j,k], null);
} else
{var u__$2 = cljs.core.assoc.call(null,u__$1,k,(u__$1.call(null,j) - v__$1.call(null,j)));if(cljs.core._EQ_.call(null,u__$2.call(null,k),0))
{{
var G__16116 = (j + 1);
var G__16117 = k;
var G__16118 = true;
var G__16119 = u__$2;
var G__16120 = v__$1;
var G__16121 = c__$1;
j = G__16116;
k = G__16117;
x = G__16118;
u__$1 = G__16119;
v__$1 = G__16120;
c__$1 = G__16121;
continue;
}
} else
{if(!(x))
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,(function (){var x__14137__auto__ = v__$1.call(null,j);var y__14138__auto__ = u__$2.call(null,k);return ((x__14137__auto__ < y__14138__auto__) ? x__14137__auto__ : y__14138__auto__);
})());var x__$1 = (u__$2.call(null,k) < v__$2.call(null,j));var k__$1 = (k + 1);var j__$1 = (j + 1);{
var G__16122 = j__$1;
var G__16123 = k__$1;
var G__16124 = x__$1;
var G__16125 = u__$2;
var G__16126 = v__$2;
var G__16127 = c__$2;
j = G__16122;
k = G__16123;
x = G__16124;
u__$1 = G__16125;
v__$1 = G__16126;
c__$1 = G__16127;
continue;
}
} else
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,u__$2.call(null,k));var k__$1 = (k + 1);var j__$1 = (j + 1);{
var G__16128 = j__$1;
var G__16129 = k__$1;
var G__16130 = x;
var G__16131 = u__$2;
var G__16132 = v__$2;
var G__16133 = c__$2;
j = G__16128;
k = G__16129;
x = G__16130;
u__$1 = G__16131;
v__$1 = G__16132;
c__$1 = G__16133;
continue;
}
}
}
}
break;
}
})();var u__$1 = cljs.core.nth.call(null,vec__16091,0,null);var v__$1 = cljs.core.nth.call(null,vec__16091,1,null);var c__$1 = cljs.core.nth.call(null,vec__16091,2,null);var j = cljs.core.nth.call(null,vec__16091,3,null);var k = cljs.core.nth.call(null,vec__16091,4,null);if(cljs.core.truth_((function (){var and__13811__auto__ = r;if(cljs.core.truth_(and__13811__auto__))
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
var G__16134 = n;
var G__16135 = m;
var G__16136 = f__$1;
var G__16137 = c__$1;
var G__16138 = u__$1;
var G__16139 = v__$1;
var G__16140 = a__$1;
var G__16141 = b__$1;
var G__16142 = l__$1;
var G__16143 = r;
var G__16144 = s;
n = G__16134;
m = G__16135;
f = G__16136;
c = G__16137;
u = G__16138;
v = G__16139;
a = G__16140;
b = G__16141;
l = G__16142;
r = G__16143;
s = G__16144;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var part = (function (){var iter__14516__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s){
return (function iter__16092(s__16093){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s){
return (function (){var s__16093__$1 = s__16093;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16093__$1);if(temp__4092__auto__)
{var s__16093__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16093__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__16093__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__16095 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__16094 = 0;while(true){
if((i__16094 < size__14515__auto__))
{var y = cljs.core._nth.call(null,c__14514__auto__,i__16094);cljs.core.chunk_append.call(null,b__16095,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + 1)) - 1);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__14516__auto__ = ((function (i__16094,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__14514__auto__,size__14515__auto__,b__16095,s__16093__$2,temp__4092__auto__){
return (function iter__16104(s__16105){return (new cljs.core.LazySeq(null,((function (i__16094,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__14514__auto__,size__14515__auto__,b__16095,s__16093__$2,temp__4092__auto__){
return (function (){var s__16105__$1 = s__16105;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__16105__$1);if(temp__4092__auto____$1)
{var s__16105__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__16105__$2))
{var c__14514__auto____$1 = cljs.core.chunk_first.call(null,s__16105__$2);var size__14515__auto____$1 = cljs.core.count.call(null,c__14514__auto____$1);var b__16107 = cljs.core.chunk_buffer.call(null,size__14515__auto____$1);if((function (){var i__16106 = 0;while(true){
if((i__16106 < size__14515__auto____$1))
{var z = cljs.core._nth.call(null,c__14514__auto____$1,i__16106);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{cljs.core.chunk_append.call(null,b__16107,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));
{
var G__16145 = (i__16106 + 1);
i__16106 = G__16145;
continue;
}
} else
{{
var G__16146 = (i__16106 + 1);
i__16106 = G__16146;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16107),iter__16104.call(null,cljs.core.chunk_rest.call(null,s__16105__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16107),null);
}
} else
{var z = cljs.core.first.call(null,s__16105__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),iter__16104.call(null,cljs.core.rest.call(null,s__16105__$2)));
} else
{{
var G__16147 = cljs.core.rest.call(null,s__16105__$2);
s__16105__$1 = G__16147;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__16094,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__14514__auto__,size__14515__auto__,b__16095,s__16093__$2,temp__4092__auto__))
,null,null));
});})(i__16094,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__14514__auto__,size__14515__auto__,b__16095,s__16093__$2,temp__4092__auto__))
;return iter__14516__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + 1)));
})());
})());
{
var G__16148 = (i__16094 + 1);
i__16094 = G__16148;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16095),iter__16092.call(null,cljs.core.chunk_rest.call(null,s__16093__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16095),null);
}
} else
{var y = cljs.core.first.call(null,s__16093__$2);return cljs.core.cons.call(null,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + 1)) - 1);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__14516__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__16093__$2,temp__4092__auto__){
return (function iter__16108(s__16109){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__16093__$2,temp__4092__auto__){
return (function (){var s__16109__$1 = s__16109;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__16109__$1);if(temp__4092__auto____$1)
{var s__16109__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__16109__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__16109__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__16111 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__16110 = 0;while(true){
if((i__16110 < size__14515__auto__))
{var z = cljs.core._nth.call(null,c__14514__auto__,i__16110);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{cljs.core.chunk_append.call(null,b__16111,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));
{
var G__16149 = (i__16110 + 1);
i__16110 = G__16149;
continue;
}
} else
{{
var G__16150 = (i__16110 + 1);
i__16110 = G__16150;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16111),iter__16108.call(null,cljs.core.chunk_rest.call(null,s__16109__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16111),null);
}
} else
{var z = cljs.core.first.call(null,s__16109__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),iter__16108.call(null,cljs.core.rest.call(null,s__16109__$2)));
} else
{{
var G__16151 = cljs.core.rest.call(null,s__16109__$2);
s__16109__$1 = G__16151;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__16093__$2,temp__4092__auto__))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__16093__$2,temp__4092__auto__))
;return iter__14516__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + 1)));
})());
})(),iter__16092.call(null,cljs.core.rest.call(null,s__16093__$2)));
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
var G__16160 = (j - 1);
j = G__16160;
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
return (function iter__16156(s__16157){return (new cljs.core.LazySeq(null,((function (v__$1){
return (function (){var s__16157__$1 = s__16157;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16157__$1);if(temp__4092__auto__)
{var s__16157__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16157__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__16157__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__16159 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__16158 = 0;while(true){
if((i__16158 < size__14515__auto__))
{var i = cljs.core._nth.call(null,c__14514__auto__,i__16158);cljs.core.chunk_append.call(null,b__16159,(u.call(null,i) - v__$1.call(null,i)));
{
var G__16161 = (i__16158 + 1);
i__16158 = G__16161;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16159),iter__16156.call(null,cljs.core.chunk_rest.call(null,s__16157__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16159),null);
}
} else
{var i = cljs.core.first.call(null,s__16157__$2);return cljs.core.cons.call(null,(u.call(null,i) - v__$1.call(null,i)),iter__16156.call(null,cljs.core.rest.call(null,s__16157__$2)));
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
var G__16162 = cljs.core.rest.call(null,ks);
var G__16163 = cljs.core.assoc.call(null,v__$2,k,u.call(null,k));
ks = G__16162;
v__$2 = G__16163;
continue;
}
}
break;
}
})();var min_partitions_after_this = (cljs.core.truth_(s)?(s - (l + 1)):0);var amount_to_dec = (cljs.core.truth_(s)?(function (){var x__14130__auto__ = 0;var y__14131__auto__ = (min_partitions_after_this - diff_uv);return ((x__14130__auto__ > y__14131__auto__) ? x__14130__auto__ : y__14131__auto__);
})():0);var v__$3 = ((cljs.core._EQ_.call(null,amount_to_dec,0))?v__$2:(function (){var k_1 = (b - 1);var v__$3 = v__$2;var amount = amount_to_dec;while(true){
var vk = v__$3.call(null,k_1);if((amount > vk))
{{
var G__16164 = (k_1 - 1);
var G__16165 = cljs.core.assoc.call(null,v__$3,k_1,0);
var G__16166 = (amount - vk);
k_1 = G__16164;
v__$3 = G__16165;
amount = G__16166;
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
var partitions_M__delegate = function (items,p__16167){var map__16225 = p__16167;var map__16225__$1 = ((cljs.core.seq_QMARK_.call(null,map__16225))?cljs.core.apply.call(null,cljs.core.hash_map,map__16225):map__16225);var from = cljs.core.get.call(null,map__16225__$1,new cljs.core.Keyword(null,"min","min",1014012356));var to = cljs.core.get.call(null,map__16225__$1,new cljs.core.Keyword(null,"max","max",1014012118));if(cljs.core._EQ_.call(null,cljs.core.count.call(null,items),0))
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
{var start_multiset = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__14516__auto__ = (function iter__16226(s__16227){return (new cljs.core.LazySeq(null,(function (){var s__16227__$1 = s__16227;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16227__$1);if(temp__4092__auto__)
{var s__16227__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16227__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__16227__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__16229 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__16228 = 0;while(true){
if((i__16228 < size__14515__auto__))
{var i = cljs.core._nth.call(null,c__14514__auto__,i__16228);var j = (i + 1);cljs.core.chunk_append.call(null,b__16229,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null));
{
var G__16282 = (i__16228 + 1);
i__16228 = G__16282;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16229),iter__16226.call(null,cljs.core.chunk_rest.call(null,s__16227__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16229),null);
}
} else
{var i = cljs.core.first.call(null,s__16227__$2);var j = (i + 1);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null),iter__16226.call(null,cljs.core.rest.call(null,s__16227__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14516__auto__.call(null,cljs.core.range.call(null,M));
})());var parts = foundation.app.data.combinatorics.multiset_partitions_M.call(null,start_multiset,to__$1,from__$1);var iter__14516__auto__ = (function iter__16230(s__16231){return (new cljs.core.LazySeq(null,(function (){var s__16231__$1 = s__16231;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16231__$1);if(temp__4092__auto__)
{var s__16231__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16231__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__16231__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__16233 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__16232 = 0;while(true){
if((i__16232 < size__14515__auto__))
{var part = cljs.core._nth.call(null,c__14514__auto__,i__16232);cljs.core.chunk_append.call(null,b__16233,(function (){var iter__14516__auto__ = ((function (i__16232,part,c__14514__auto__,size__14515__auto__,b__16233,s__16231__$2,temp__4092__auto__){
return (function iter__16258(s__16259){return (new cljs.core.LazySeq(null,((function (i__16232,part,c__14514__auto__,size__14515__auto__,b__16233,s__16231__$2,temp__4092__auto__){
return (function (){var s__16259__$1 = s__16259;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__16259__$1);if(temp__4092__auto____$1)
{var s__16259__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__16259__$2))
{var c__14514__auto____$1 = cljs.core.chunk_first.call(null,s__16259__$2);var size__14515__auto____$1 = cljs.core.count.call(null,c__14514__auto____$1);var b__16261 = cljs.core.chunk_buffer.call(null,size__14515__auto____$1);if((function (){var i__16260 = 0;while(true){
if((i__16260 < size__14515__auto____$1))
{var multiset = cljs.core._nth.call(null,c__14514__auto____$1,i__16260);cljs.core.chunk_append.call(null,b__16261,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__16260,i__16232,multiset,c__14514__auto____$1,size__14515__auto____$1,b__16261,s__16259__$2,temp__4092__auto____$1,part,c__14514__auto__,size__14515__auto__,b__16233,s__16231__$2,temp__4092__auto__){
return (function (p__16266){var vec__16267 = p__16266;var index = cljs.core.nth.call(null,vec__16267,0,null);var numtimes = cljs.core.nth.call(null,vec__16267,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__16260,i__16232,multiset,c__14514__auto____$1,size__14515__auto____$1,b__16261,s__16259__$2,temp__4092__auto____$1,part,c__14514__auto__,size__14515__auto__,b__16233,s__16231__$2,temp__4092__auto__))
,multiset)));
{
var G__16283 = (i__16260 + 1);
i__16260 = G__16283;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16261),iter__16258.call(null,cljs.core.chunk_rest.call(null,s__16259__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16261),null);
}
} else
{var multiset = cljs.core.first.call(null,s__16259__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__16232,multiset,s__16259__$2,temp__4092__auto____$1,part,c__14514__auto__,size__14515__auto__,b__16233,s__16231__$2,temp__4092__auto__){
return (function (p__16268){var vec__16269 = p__16268;var index = cljs.core.nth.call(null,vec__16269,0,null);var numtimes = cljs.core.nth.call(null,vec__16269,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__16232,multiset,s__16259__$2,temp__4092__auto____$1,part,c__14514__auto__,size__14515__auto__,b__16233,s__16231__$2,temp__4092__auto__))
,multiset)),iter__16258.call(null,cljs.core.rest.call(null,s__16259__$2)));
}
} else
{return null;
}
break;
}
});})(i__16232,part,c__14514__auto__,size__14515__auto__,b__16233,s__16231__$2,temp__4092__auto__))
,null,null));
});})(i__16232,part,c__14514__auto__,size__14515__auto__,b__16233,s__16231__$2,temp__4092__auto__))
;return iter__14516__auto__.call(null,part);
})());
{
var G__16284 = (i__16232 + 1);
i__16232 = G__16284;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16233),iter__16230.call(null,cljs.core.chunk_rest.call(null,s__16231__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16233),null);
}
} else
{var part = cljs.core.first.call(null,s__16231__$2);return cljs.core.cons.call(null,(function (){var iter__14516__auto__ = ((function (part,s__16231__$2,temp__4092__auto__){
return (function iter__16270(s__16271){return (new cljs.core.LazySeq(null,((function (part,s__16231__$2,temp__4092__auto__){
return (function (){var s__16271__$1 = s__16271;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__16271__$1);if(temp__4092__auto____$1)
{var s__16271__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__16271__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__16271__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__16273 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__16272 = 0;while(true){
if((i__16272 < size__14515__auto__))
{var multiset = cljs.core._nth.call(null,c__14514__auto__,i__16272);cljs.core.chunk_append.call(null,b__16273,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__16272,multiset,c__14514__auto__,size__14515__auto__,b__16273,s__16271__$2,temp__4092__auto____$1,part,s__16231__$2,temp__4092__auto__){
return (function (p__16278){var vec__16279 = p__16278;var index = cljs.core.nth.call(null,vec__16279,0,null);var numtimes = cljs.core.nth.call(null,vec__16279,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__16272,multiset,c__14514__auto__,size__14515__auto__,b__16273,s__16271__$2,temp__4092__auto____$1,part,s__16231__$2,temp__4092__auto__))
,multiset)));
{
var G__16285 = (i__16272 + 1);
i__16272 = G__16285;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16273),iter__16270.call(null,cljs.core.chunk_rest.call(null,s__16271__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16273),null);
}
} else
{var multiset = cljs.core.first.call(null,s__16271__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (multiset,s__16271__$2,temp__4092__auto____$1,part,s__16231__$2,temp__4092__auto__){
return (function (p__16280){var vec__16281 = p__16280;var index = cljs.core.nth.call(null,vec__16281,0,null);var numtimes = cljs.core.nth.call(null,vec__16281,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(multiset,s__16271__$2,temp__4092__auto____$1,part,s__16231__$2,temp__4092__auto__))
,multiset)),iter__16270.call(null,cljs.core.rest.call(null,s__16271__$2)));
}
} else
{return null;
}
break;
}
});})(part,s__16231__$2,temp__4092__auto__))
,null,null));
});})(part,s__16231__$2,temp__4092__auto__))
;return iter__14516__auto__.call(null,part);
})(),iter__16230.call(null,cljs.core.rest.call(null,s__16231__$2)));
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
var p__16167 = null;if (arguments.length > 1) {
  p__16167 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions_M__delegate.call(this,items,p__16167);};
partitions_M.cljs$lang$maxFixedArity = 1;
partitions_M.cljs$lang$applyTo = (function (arglist__16286){
var items = cljs.core.first(arglist__16286);
var p__16167 = cljs.core.rest(arglist__16286);
return partitions_M__delegate(items,p__16167);
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
partitions.cljs$lang$applyTo = (function (arglist__16287){
var items = cljs.core.first(arglist__16287);
var args = cljs.core.rest(arglist__16287);
return partitions__delegate(items,args);
});
partitions.cljs$core$IFn$_invoke$arity$variadic = partitions__delegate;
return partitions;
})()
;

//# sourceMappingURL=combinatorics.js.map