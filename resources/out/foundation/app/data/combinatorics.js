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
var G__320967 = cljs.core.assoc.call(null,c__$2,(j__$1 - 1),(c__$2.call(null,j__$1) - 1));
var G__320968 = (j__$1 - 1);
c__$2 = G__320967;
j__$1 = G__320968;
continue;
}
}
break;
}
}
}
});
return (new cljs.core.LazySeq(null,(function (){var c = cljs.core.vec.call(null,cljs.core.cons.call(null,null,(function (){var iter__14518__auto__ = (function iter__320963(s__320964){return (new cljs.core.LazySeq(null,(function (){var s__320964__$1 = s__320964;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__320964__$1);if(temp__4092__auto__)
{var s__320964__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__320964__$2))
{var c__14516__auto__ = cljs.core.chunk_first.call(null,s__320964__$2);var size__14517__auto__ = cljs.core.count.call(null,c__14516__auto__);var b__320966 = cljs.core.chunk_buffer.call(null,size__14517__auto__);if((function (){var i__320965 = 0;while(true){
if((i__320965 < size__14517__auto__))
{var j = cljs.core._nth.call(null,c__14516__auto__,i__320965);cljs.core.chunk_append.call(null,b__320966,((j + cnt) + (- (n + 1))));
{
var G__320969 = (i__320965 + 1);
i__320965 = G__320969;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__320966),iter__320963.call(null,cljs.core.chunk_rest.call(null,s__320964__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__320966),null);
}
} else
{var j = cljs.core.first.call(null,s__320964__$2);return cljs.core.cons.call(null,((j + cnt) + (- (n + 1))),iter__320963.call(null,cljs.core.rest.call(null,s__320964__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14518__auto__.call(null,cljs.core.range.call(null,1,(n + 1)));
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
{return cljs.core.map.call(null,(function (p1__320970_SHARP_){return cljs.core.map.call(null,v_items,p1__320970_SHARP_);
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
var G__320971 = (i - 1);
var G__320972 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__320971;
v_seqs__$2 = G__320972;
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
cartesian_product.cljs$lang$applyTo = (function (arglist__320973){
var seqs = cljs.core.seq(arglist__320973);
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
var G__320974 = (i - 1);
i = G__320974;
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
var G__320975 = (i - 1);
i = G__320975;
continue;
}
}
break;
}
})();var v__$1 = cljs.core.assoc.call(null,v,j,v.call(null,l),l,vj);var k = (j + 1);var l__$1 = (len - 1);while(true){
if((k < l__$1))
{{
var G__320976 = cljs.core.assoc.call(null,v__$1,k,v__$1.call(null,l__$1),l__$1,v__$1.call(null,k));
var G__320977 = (k + 1);
var G__320978 = (l__$1 - 1);
v__$1 = G__320976;
k = G__320977;
l__$1 = G__320978;
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
foundation.app.data.combinatorics.multi_perm = (function multi_perm(l){var f = cljs.core.frequencies.call(null,l);var v = cljs.core.vec.call(null,cljs.core.keys.call(null,f));var indices = cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__14518__auto__ = ((function (f,v){
return (function iter__320983(s__320984){return (new cljs.core.LazySeq(null,((function (f,v){
return (function (){var s__320984__$1 = s__320984;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__320984__$1);if(temp__4092__auto__)
{var s__320984__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__320984__$2))
{var c__14516__auto__ = cljs.core.chunk_first.call(null,s__320984__$2);var size__14517__auto__ = cljs.core.count.call(null,c__14516__auto__);var b__320986 = cljs.core.chunk_buffer.call(null,size__14517__auto__);if((function (){var i__320985 = 0;while(true){
if((i__320985 < size__14517__auto__))
{var i = cljs.core._nth.call(null,c__14516__auto__,i__320985);cljs.core.chunk_append.call(null,b__320986,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));
{
var G__320987 = (i__320985 + 1);
i__320985 = G__320987;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__320986),iter__320983.call(null,cljs.core.chunk_rest.call(null,s__320984__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__320986),null);
}
} else
{var i = cljs.core.first.call(null,s__320984__$2);return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),iter__320983.call(null,cljs.core.rest.call(null,s__320984__$2)));
}
} else
{return null;
}
break;
}
});})(f,v))
,null,null));
});})(f,v))
;return iter__14518__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,v)));
})());return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.map,v),foundation.app.data.combinatorics.lex_permutations.call(null,indices));
});
/**
* All the distinct permutations of items, lexicographic by index.
*/
foundation.app.data.combinatorics.permutations = (function permutations(items){if(foundation.app.data.combinatorics.sorted_numbers_QMARK_.call(null,items))
{return foundation.app.data.combinatorics.lex_permutations.call(null,items);
} else
{if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core.distinct_QMARK_,items)))
{var v = cljs.core.vec.call(null,items);return cljs.core.map.call(null,(function (p1__320988_SHARP_){return cljs.core.map.call(null,v,p1__320988_SHARP_);
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
{return cljs.core.vec.call(null,(function (){var iter__14518__auto__ = (function iter__320993(s__320994){return (new cljs.core.LazySeq(null,(function (){var s__320994__$1 = s__320994;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__320994__$1);if(temp__4092__auto__)
{var s__320994__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__320994__$2))
{var c__14516__auto__ = cljs.core.chunk_first.call(null,s__320994__$2);var size__14517__auto__ = cljs.core.count.call(null,c__14516__auto__);var b__320996 = cljs.core.chunk_buffer.call(null,size__14517__auto__);if((function (){var i__320995 = 0;while(true){
if((i__320995 < size__14517__auto__))
{var i = cljs.core._nth.call(null,c__14516__auto__,i__320995);cljs.core.chunk_append.call(null,b__320996,(function (){var x__14132__auto__ = 0;var y__14133__auto__ = (i - ((n - s) - -1));return ((x__14132__auto__ > y__14133__auto__) ? x__14132__auto__ : y__14133__auto__);
})());
{
var G__320997 = (i__320995 + 1);
i__320995 = G__320997;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__320996),iter__320993.call(null,cljs.core.chunk_rest.call(null,s__320994__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__320996),null);
}
} else
{var i = cljs.core.first.call(null,s__320994__$2);return cljs.core.cons.call(null,(function (){var x__14132__auto__ = 0;var y__14133__auto__ = (i - ((n - s) - -1));return ((x__14132__auto__ > y__14133__auto__) ? x__14132__auto__ : y__14133__auto__);
})(),iter__320993.call(null,cljs.core.rest.call(null,s__320994__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14518__auto__.call(null,cljs.core.range.call(null,1,(n + 1)));
})());
} else
{return cljs.core.vec.call(null,cljs.core.repeat.call(null,n,0));
}
});
foundation.app.data.combinatorics.growth_strings_H = (function() {
var growth_strings_H = null;
var growth_strings_H__3 = (function (n,r,s){return growth_strings_H.call(null,n,foundation.app.data.combinatorics.init.call(null,n,s),cljs.core.vec.call(null,cljs.core.repeat.call(null,n,1)),r,s);
});
var growth_strings_H__5 = (function (n,a,b,r,s){return cljs.core.cons.call(null,a,(new cljs.core.LazySeq(null,(function (){if((function (){var and__13813__auto__ = (cljs.core.peek.call(null,b) > cljs.core.peek.call(null,a));if(and__13813__auto__)
{if(cljs.core.truth_(r))
{return (cljs.core.peek.call(null,a) < (r - 1));
} else
{return true;
}
} else
{return and__13813__auto__;
}
})())
{return growth_strings_H.call(null,n,foundation.app.data.combinatorics.update.call(null,a,(n - 1),cljs.core.inc),b,r,s);
} else
{var j = (function (){var j = (n - 2);while(true){
if((function (){var and__13813__auto__ = (a.call(null,j) < b.call(null,j));if(and__13813__auto__)
{var and__13813__auto____$1 = (cljs.core.truth_(r)?(a.call(null,j) < (r - 1)):true);if(and__13813__auto____$1)
{if(cljs.core.truth_(s))
{return (((s - b.call(null,j)) - ((((a.call(null,j) + 1) === b.call(null,j)))?1:0)) <= (n - j));
} else
{return true;
}
} else
{return and__13813__auto____$1;
}
} else
{return and__13813__auto__;
}
})())
{return j;
} else
{{
var G__321000 = (j - 1);
j = G__321000;
continue;
}
}
break;
}
})();if((j === 0))
{return cljs.core.List.EMPTY;
} else
{var a__$1 = foundation.app.data.combinatorics.update.call(null,a,j,cljs.core.inc);var x = (cljs.core.truth_(s)?(s - (b.call(null,j) + ((cljs.core._EQ_.call(null,a__$1.call(null,j),b.call(null,j)))?1:0))):null);var vec__320999 = (function (){var a__$2 = a__$1;var b__$1 = b;var i = (j + 1);var current_max = (b__$1.call(null,j) + (((b__$1.call(null,j) === a__$2.call(null,j)))?1:0));while(true){
if((i === n))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$2,b__$1], null);
} else
{if(cljs.core.truth_((function (){var and__13813__auto__ = s;if(cljs.core.truth_(and__13813__auto__))
{return (i > ((n - x) - 1));
} else
{return and__13813__auto__;
}
})()))
{var new_a_i = ((i - n) + s);{
var G__321001 = cljs.core.assoc.call(null,a__$2,i,new_a_i);
var G__321002 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__321003 = (i + 1);
var G__321004 = (function (){var x__14132__auto__ = current_max;var y__14133__auto__ = (new_a_i + 1);return ((x__14132__auto__ > y__14133__auto__) ? x__14132__auto__ : y__14133__auto__);
})();
a__$2 = G__321001;
b__$1 = G__321002;
i = G__321003;
current_max = G__321004;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__321005 = cljs.core.assoc.call(null,a__$2,i,0);
var G__321006 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__321007 = (i + 1);
var G__321008 = current_max;
a__$2 = G__321005;
b__$1 = G__321006;
i = G__321007;
current_max = G__321008;
continue;
}
} else
{return null;
}
}
}
break;
}
})();var a__$2 = cljs.core.nth.call(null,vec__320999,0,null);var b__$1 = cljs.core.nth.call(null,vec__320999,1,null);return growth_strings_H.call(null,n,a__$2,b__$1,r,s);
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
var lex_partitions_H__delegate = function (N,p__321009){var map__321015 = p__321009;var map__321015__$1 = ((cljs.core.seq_QMARK_.call(null,map__321015))?cljs.core.apply.call(null,cljs.core.hash_map,map__321015):map__321015);var from = cljs.core.get.call(null,map__321015__$1,new cljs.core.Keyword(null,"min","min",1014012356));var to = cljs.core.get.call(null,map__321015__$1,new cljs.core.Keyword(null,"max","max",1014012118));if(cljs.core._EQ_.call(null,N,0))
{if((((function (){var or__13825__auto__ = from;if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
} else
{return 0;
}
})() <= 0)) && ((0 <= (function (){var or__13825__auto__ = to;if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
} else
{return 0;
}
})())))
{return cljs.core.list(cljs.core.List.EMPTY);
} else
{return cljs.core.List.EMPTY;
}
} else
{var from__$1 = (cljs.core.truth_((function (){var and__13813__auto__ = from;if(cljs.core.truth_(and__13813__auto__))
{return (from <= 1);
} else
{return and__13813__auto__;
}
})())?null:from);var to__$1 = (cljs.core.truth_((function (){var and__13813__auto__ = to;if(cljs.core.truth_(and__13813__auto__))
{return (to >= N);
} else
{return and__13813__auto__;
}
})())?null:to);if(!(((1 <= (function (){var or__13825__auto__ = from__$1;if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
} else
{return 1;
}
})())) && ((((function (){var or__13825__auto__ = from__$1;if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
} else
{return 1;
}
})() <= (function (){var or__13825__auto__ = to__$1;if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
} else
{return N;
}
})())) && (((function (){var or__13825__auto__ = to__$1;if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
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
{var growth_strings = foundation.app.data.combinatorics.growth_strings_H.call(null,N,to__$1,from__$1);var iter__14518__auto__ = (function iter__321016(s__321017){return (new cljs.core.LazySeq(null,(function (){var s__321017__$1 = s__321017;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__321017__$1);if(temp__4092__auto__)
{var s__321017__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__321017__$2))
{var c__14516__auto__ = cljs.core.chunk_first.call(null,s__321017__$2);var size__14517__auto__ = cljs.core.count.call(null,c__14516__auto__);var b__321019 = cljs.core.chunk_buffer.call(null,size__14517__auto__);if((function (){var i__321018 = 0;while(true){
if((i__321018 < size__14517__auto__))
{var growth_string = cljs.core._nth.call(null,c__14516__auto__,i__321018);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));cljs.core.chunk_append.call(null,b__321019,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))));
{
var G__321020 = (i__321018 + 1);
i__321018 = G__321020;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__321019),iter__321016.call(null,cljs.core.chunk_rest.call(null,s__321017__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__321019),null);
}
} else
{var growth_string = cljs.core.first.call(null,s__321017__$2);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));return cljs.core.cons.call(null,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))),iter__321016.call(null,cljs.core.rest.call(null,s__321017__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14518__auto__.call(null,growth_strings);
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
var p__321009 = null;if (arguments.length > 1) {
  p__321009 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return lex_partitions_H__delegate.call(this,N,p__321009);};
lex_partitions_H.cljs$lang$maxFixedArity = 1;
lex_partitions_H.cljs$lang$applyTo = (function (arglist__321021){
var N = cljs.core.first(arglist__321021);
var p__321009 = cljs.core.rest(arglist__321021);
return lex_partitions_H__delegate(N,p__321009);
});
lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic = lex_partitions_H__delegate;
return lex_partitions_H;
})()
;
/**
* @param {...*} var_args
*/
foundation.app.data.combinatorics.partitions_H = (function() { 
var partitions_H__delegate = function (items,args){var items__$1 = cljs.core.vec.call(null,items);var N = cljs.core.count.call(null,items__$1);var lex = cljs.core.apply.call(null,foundation.app.data.combinatorics.lex_partitions_H,N,args);var iter__14518__auto__ = (function iter__321042(s__321043){return (new cljs.core.LazySeq(null,(function (){var s__321043__$1 = s__321043;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__321043__$1);if(temp__4092__auto__)
{var s__321043__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__321043__$2))
{var c__14516__auto__ = cljs.core.chunk_first.call(null,s__321043__$2);var size__14517__auto__ = cljs.core.count.call(null,c__14516__auto__);var b__321045 = cljs.core.chunk_buffer.call(null,size__14517__auto__);if((function (){var i__321044 = 0;while(true){
if((i__321044 < size__14517__auto__))
{var parts = cljs.core._nth.call(null,c__14516__auto__,i__321044);cljs.core.chunk_append.call(null,b__321045,(function (){var iter__14518__auto__ = ((function (i__321044,parts,c__14516__auto__,size__14517__auto__,b__321045,s__321043__$2,temp__4092__auto__){
return (function iter__321054(s__321055){return (new cljs.core.LazySeq(null,((function (i__321044,parts,c__14516__auto__,size__14517__auto__,b__321045,s__321043__$2,temp__4092__auto__){
return (function (){var s__321055__$1 = s__321055;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__321055__$1);if(temp__4092__auto____$1)
{var s__321055__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__321055__$2))
{var c__14516__auto____$1 = cljs.core.chunk_first.call(null,s__321055__$2);var size__14517__auto____$1 = cljs.core.count.call(null,c__14516__auto____$1);var b__321057 = cljs.core.chunk_buffer.call(null,size__14517__auto____$1);if((function (){var i__321056 = 0;while(true){
if((i__321056 < size__14517__auto____$1))
{var part = cljs.core._nth.call(null,c__14516__auto____$1,i__321056);cljs.core.chunk_append.call(null,b__321057,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__321056,i__321044,part,c__14516__auto____$1,size__14517__auto____$1,b__321057,s__321055__$2,temp__4092__auto____$1,parts,c__14516__auto__,size__14517__auto__,b__321045,s__321043__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__321056,i__321044,part,c__14516__auto____$1,size__14517__auto____$1,b__321057,s__321055__$2,temp__4092__auto____$1,parts,c__14516__auto__,size__14517__auto__,b__321045,s__321043__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__321062 = (i__321056 + 1);
i__321056 = G__321062;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__321057),iter__321054.call(null,cljs.core.chunk_rest.call(null,s__321055__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__321057),null);
}
} else
{var part = cljs.core.first.call(null,s__321055__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__321044,part,s__321055__$2,temp__4092__auto____$1,parts,c__14516__auto__,size__14517__auto__,b__321045,s__321043__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__321044,part,s__321055__$2,temp__4092__auto____$1,parts,c__14516__auto__,size__14517__auto__,b__321045,s__321043__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__321054.call(null,cljs.core.rest.call(null,s__321055__$2)));
}
} else
{return null;
}
break;
}
});})(i__321044,parts,c__14516__auto__,size__14517__auto__,b__321045,s__321043__$2,temp__4092__auto__))
,null,null));
});})(i__321044,parts,c__14516__auto__,size__14517__auto__,b__321045,s__321043__$2,temp__4092__auto__))
;return iter__14518__auto__.call(null,parts);
})());
{
var G__321063 = (i__321044 + 1);
i__321044 = G__321063;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__321045),iter__321042.call(null,cljs.core.chunk_rest.call(null,s__321043__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__321045),null);
}
} else
{var parts = cljs.core.first.call(null,s__321043__$2);return cljs.core.cons.call(null,(function (){var iter__14518__auto__ = ((function (parts,s__321043__$2,temp__4092__auto__){
return (function iter__321058(s__321059){return (new cljs.core.LazySeq(null,((function (parts,s__321043__$2,temp__4092__auto__){
return (function (){var s__321059__$1 = s__321059;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__321059__$1);if(temp__4092__auto____$1)
{var s__321059__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__321059__$2))
{var c__14516__auto__ = cljs.core.chunk_first.call(null,s__321059__$2);var size__14517__auto__ = cljs.core.count.call(null,c__14516__auto__);var b__321061 = cljs.core.chunk_buffer.call(null,size__14517__auto__);if((function (){var i__321060 = 0;while(true){
if((i__321060 < size__14517__auto__))
{var part = cljs.core._nth.call(null,c__14516__auto__,i__321060);cljs.core.chunk_append.call(null,b__321061,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__321060,part,c__14516__auto__,size__14517__auto__,b__321061,s__321059__$2,temp__4092__auto____$1,parts,s__321043__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__321060,part,c__14516__auto__,size__14517__auto__,b__321061,s__321059__$2,temp__4092__auto____$1,parts,s__321043__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__321064 = (i__321060 + 1);
i__321060 = G__321064;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__321061),iter__321058.call(null,cljs.core.chunk_rest.call(null,s__321059__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__321061),null);
}
} else
{var part = cljs.core.first.call(null,s__321059__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (part,s__321059__$2,temp__4092__auto____$1,parts,s__321043__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(part,s__321059__$2,temp__4092__auto____$1,parts,s__321043__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__321058.call(null,cljs.core.rest.call(null,s__321059__$2)));
}
} else
{return null;
}
break;
}
});})(parts,s__321043__$2,temp__4092__auto__))
,null,null));
});})(parts,s__321043__$2,temp__4092__auto__))
;return iter__14518__auto__.call(null,parts);
})(),iter__321042.call(null,cljs.core.rest.call(null,s__321043__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14518__auto__.call(null,lex);
};
var partitions_H = function (items,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions_H__delegate.call(this,items,args);};
partitions_H.cljs$lang$maxFixedArity = 1;
partitions_H.cljs$lang$applyTo = (function (arglist__321065){
var items = cljs.core.first(arglist__321065);
var args = cljs.core.rest(arglist__321065);
return partitions_H__delegate(items,args);
});
partitions_H.cljs$core$IFn$_invoke$arity$variadic = partitions_H__delegate;
return partitions_H;
})()
;
foundation.app.data.combinatorics.multiset_partitions_M = (function() {
var multiset_partitions_M = null;
var multiset_partitions_M__3 = (function (multiset,r,s){var n = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,multiset));var m = cljs.core.count.call(null,multiset);var f = cljs.core.PersistentVector.EMPTY;var c = cljs.core.PersistentVector.EMPTY;var u = cljs.core.PersistentVector.EMPTY;var v = cljs.core.PersistentVector.EMPTY;var vec__321088 = (function (){var j = 0;var c__$1 = c;var u__$1 = u;var v__$1 = v;while(true){
if(cljs.core._EQ_.call(null,j,m))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,u__$1,v__$1], null);
} else
{{
var G__321110 = (j + 1);
var G__321111 = cljs.core.assoc.call(null,c__$1,j,(j + 1));
var G__321112 = cljs.core.assoc.call(null,u__$1,j,multiset.call(null,(j + 1)));
var G__321113 = cljs.core.assoc.call(null,v__$1,j,multiset.call(null,(j + 1)));
j = G__321110;
c__$1 = G__321111;
u__$1 = G__321112;
v__$1 = G__321113;
continue;
}
}
break;
}
})();var c__$1 = cljs.core.nth.call(null,vec__321088,0,null);var u__$1 = cljs.core.nth.call(null,vec__321088,1,null);var v__$1 = cljs.core.nth.call(null,vec__321088,2,null);var a = 0;var b = m;var l = 0;var f__$1 = cljs.core.assoc.call(null,f,0,0,1,m);var stack = cljs.core.List.EMPTY;return multiset_partitions_M.call(null,n,m,f__$1,c__$1,u__$1,v__$1,a,b,l,r,s);
});
var multiset_partitions_M__11 = (function (n,m,f,c,u,v,a,b,l,r,s){while(true){
var vec__321089 = (function (){var j = a;var k = b;var x = false;var u__$1 = u;var v__$1 = v;var c__$1 = c;while(true){
if((j >= b))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [u__$1,v__$1,c__$1,j,k], null);
} else
{var u__$2 = cljs.core.assoc.call(null,u__$1,k,(u__$1.call(null,j) - v__$1.call(null,j)));if(cljs.core._EQ_.call(null,u__$2.call(null,k),0))
{{
var G__321114 = (j + 1);
var G__321115 = k;
var G__321116 = true;
var G__321117 = u__$2;
var G__321118 = v__$1;
var G__321119 = c__$1;
j = G__321114;
k = G__321115;
x = G__321116;
u__$1 = G__321117;
v__$1 = G__321118;
c__$1 = G__321119;
continue;
}
} else
{if(!(x))
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,(function (){var x__14139__auto__ = v__$1.call(null,j);var y__14140__auto__ = u__$2.call(null,k);return ((x__14139__auto__ < y__14140__auto__) ? x__14139__auto__ : y__14140__auto__);
})());var x__$1 = (u__$2.call(null,k) < v__$2.call(null,j));var k__$1 = (k + 1);var j__$1 = (j + 1);{
var G__321120 = j__$1;
var G__321121 = k__$1;
var G__321122 = x__$1;
var G__321123 = u__$2;
var G__321124 = v__$2;
var G__321125 = c__$2;
j = G__321120;
k = G__321121;
x = G__321122;
u__$1 = G__321123;
v__$1 = G__321124;
c__$1 = G__321125;
continue;
}
} else
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,u__$2.call(null,k));var k__$1 = (k + 1);var j__$1 = (j + 1);{
var G__321126 = j__$1;
var G__321127 = k__$1;
var G__321128 = x;
var G__321129 = u__$2;
var G__321130 = v__$2;
var G__321131 = c__$2;
j = G__321126;
k = G__321127;
x = G__321128;
u__$1 = G__321129;
v__$1 = G__321130;
c__$1 = G__321131;
continue;
}
}
}
}
break;
}
})();var u__$1 = cljs.core.nth.call(null,vec__321089,0,null);var v__$1 = cljs.core.nth.call(null,vec__321089,1,null);var c__$1 = cljs.core.nth.call(null,vec__321089,2,null);var j = cljs.core.nth.call(null,vec__321089,3,null);var k = cljs.core.nth.call(null,vec__321089,4,null);if(cljs.core.truth_((function (){var and__13813__auto__ = r;if(cljs.core.truth_(and__13813__auto__))
{return ((k > b)) && (cljs.core._EQ_.call(null,l,(r - 1)));
} else
{return and__13813__auto__;
}
})()))
{return foundation.app.data.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
} else
{if(cljs.core.truth_((function (){var and__13813__auto__ = s;if(cljs.core.truth_(and__13813__auto__))
{return ((k <= b)) && (((l + 1) < s));
} else
{return and__13813__auto__;
}
})()))
{return foundation.app.data.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
} else
{if((k > b))
{var a__$1 = b;var b__$1 = k;var l__$1 = (l + 1);var f__$1 = cljs.core.assoc.call(null,f,(l__$1 + 1),b__$1);{
var G__321132 = n;
var G__321133 = m;
var G__321134 = f__$1;
var G__321135 = c__$1;
var G__321136 = u__$1;
var G__321137 = v__$1;
var G__321138 = a__$1;
var G__321139 = b__$1;
var G__321140 = l__$1;
var G__321141 = r;
var G__321142 = s;
n = G__321132;
m = G__321133;
f = G__321134;
c = G__321135;
u = G__321136;
v = G__321137;
a = G__321138;
b = G__321139;
l = G__321140;
r = G__321141;
s = G__321142;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var part = (function (){var iter__14518__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s){
return (function iter__321090(s__321091){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s){
return (function (){var s__321091__$1 = s__321091;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__321091__$1);if(temp__4092__auto__)
{var s__321091__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__321091__$2))
{var c__14516__auto__ = cljs.core.chunk_first.call(null,s__321091__$2);var size__14517__auto__ = cljs.core.count.call(null,c__14516__auto__);var b__321093 = cljs.core.chunk_buffer.call(null,size__14517__auto__);if((function (){var i__321092 = 0;while(true){
if((i__321092 < size__14517__auto__))
{var y = cljs.core._nth.call(null,c__14516__auto__,i__321092);cljs.core.chunk_append.call(null,b__321093,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + 1)) - 1);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__14518__auto__ = ((function (i__321092,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__14516__auto__,size__14517__auto__,b__321093,s__321091__$2,temp__4092__auto__){
return (function iter__321102(s__321103){return (new cljs.core.LazySeq(null,((function (i__321092,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__14516__auto__,size__14517__auto__,b__321093,s__321091__$2,temp__4092__auto__){
return (function (){var s__321103__$1 = s__321103;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__321103__$1);if(temp__4092__auto____$1)
{var s__321103__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__321103__$2))
{var c__14516__auto____$1 = cljs.core.chunk_first.call(null,s__321103__$2);var size__14517__auto____$1 = cljs.core.count.call(null,c__14516__auto____$1);var b__321105 = cljs.core.chunk_buffer.call(null,size__14517__auto____$1);if((function (){var i__321104 = 0;while(true){
if((i__321104 < size__14517__auto____$1))
{var z = cljs.core._nth.call(null,c__14516__auto____$1,i__321104);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{cljs.core.chunk_append.call(null,b__321105,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));
{
var G__321143 = (i__321104 + 1);
i__321104 = G__321143;
continue;
}
} else
{{
var G__321144 = (i__321104 + 1);
i__321104 = G__321144;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__321105),iter__321102.call(null,cljs.core.chunk_rest.call(null,s__321103__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__321105),null);
}
} else
{var z = cljs.core.first.call(null,s__321103__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),iter__321102.call(null,cljs.core.rest.call(null,s__321103__$2)));
} else
{{
var G__321145 = cljs.core.rest.call(null,s__321103__$2);
s__321103__$1 = G__321145;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__321092,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__14516__auto__,size__14517__auto__,b__321093,s__321091__$2,temp__4092__auto__))
,null,null));
});})(i__321092,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__14516__auto__,size__14517__auto__,b__321093,s__321091__$2,temp__4092__auto__))
;return iter__14518__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + 1)));
})());
})());
{
var G__321146 = (i__321092 + 1);
i__321092 = G__321146;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__321093),iter__321090.call(null,cljs.core.chunk_rest.call(null,s__321091__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__321093),null);
}
} else
{var y = cljs.core.first.call(null,s__321091__$2);return cljs.core.cons.call(null,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + 1)) - 1);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__14518__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__321091__$2,temp__4092__auto__){
return (function iter__321106(s__321107){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__321091__$2,temp__4092__auto__){
return (function (){var s__321107__$1 = s__321107;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__321107__$1);if(temp__4092__auto____$1)
{var s__321107__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__321107__$2))
{var c__14516__auto__ = cljs.core.chunk_first.call(null,s__321107__$2);var size__14517__auto__ = cljs.core.count.call(null,c__14516__auto__);var b__321109 = cljs.core.chunk_buffer.call(null,size__14517__auto__);if((function (){var i__321108 = 0;while(true){
if((i__321108 < size__14517__auto__))
{var z = cljs.core._nth.call(null,c__14516__auto__,i__321108);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{cljs.core.chunk_append.call(null,b__321109,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));
{
var G__321147 = (i__321108 + 1);
i__321108 = G__321147;
continue;
}
} else
{{
var G__321148 = (i__321108 + 1);
i__321108 = G__321148;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__321109),iter__321106.call(null,cljs.core.chunk_rest.call(null,s__321107__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__321109),null);
}
} else
{var z = cljs.core.first.call(null,s__321107__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),iter__321106.call(null,cljs.core.rest.call(null,s__321107__$2)));
} else
{{
var G__321149 = cljs.core.rest.call(null,s__321107__$2);
s__321107__$1 = G__321149;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__321091__$2,temp__4092__auto__))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__321091__$2,temp__4092__auto__))
;return iter__14518__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + 1)));
})());
})(),iter__321090.call(null,cljs.core.rest.call(null,s__321091__$2)));
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s))
;return iter__14518__auto__.call(null,cljs.core.range.call(null,(l + 1)));
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
var G__321158 = (j - 1);
j = G__321158;
continue;
}
}
break;
}
})();if(cljs.core.truth_((function (){var and__13813__auto__ = r;if(cljs.core.truth_(and__13813__auto__))
{return (cljs.core._EQ_.call(null,j,a)) && ((((v.call(null,j) - 1) * (r - l)) < u.call(null,j)));
} else
{return and__13813__auto__;
}
})()))
{return foundation.app.data.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s);
} else
{if((cljs.core._EQ_.call(null,j,a)) && (cljs.core._EQ_.call(null,v.call(null,j),1)))
{return foundation.app.data.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var v__$1 = foundation.app.data.combinatorics.update.call(null,v,j,cljs.core.dec);var diff_uv = (cljs.core.truth_(s)?cljs.core.apply.call(null,cljs.core._PLUS_,(function (){var iter__14518__auto__ = ((function (v__$1){
return (function iter__321154(s__321155){return (new cljs.core.LazySeq(null,((function (v__$1){
return (function (){var s__321155__$1 = s__321155;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__321155__$1);if(temp__4092__auto__)
{var s__321155__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__321155__$2))
{var c__14516__auto__ = cljs.core.chunk_first.call(null,s__321155__$2);var size__14517__auto__ = cljs.core.count.call(null,c__14516__auto__);var b__321157 = cljs.core.chunk_buffer.call(null,size__14517__auto__);if((function (){var i__321156 = 0;while(true){
if((i__321156 < size__14517__auto__))
{var i = cljs.core._nth.call(null,c__14516__auto__,i__321156);cljs.core.chunk_append.call(null,b__321157,(u.call(null,i) - v__$1.call(null,i)));
{
var G__321159 = (i__321156 + 1);
i__321156 = G__321159;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__321157),iter__321154.call(null,cljs.core.chunk_rest.call(null,s__321155__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__321157),null);
}
} else
{var i = cljs.core.first.call(null,s__321155__$2);return cljs.core.cons.call(null,(u.call(null,i) - v__$1.call(null,i)),iter__321154.call(null,cljs.core.rest.call(null,s__321155__$2)));
}
} else
{return null;
}
break;
}
});})(v__$1))
,null,null));
});})(v__$1))
;return iter__14518__auto__.call(null,cljs.core.range.call(null,a,(j + 1)));
})()):null);var v__$2 = (function (){var ks = cljs.core.range.call(null,(j + 1),b);var v__$2 = v__$1;while(true){
if(cljs.core.empty_QMARK_.call(null,ks))
{return v__$2;
} else
{var k = cljs.core.first.call(null,ks);{
var G__321160 = cljs.core.rest.call(null,ks);
var G__321161 = cljs.core.assoc.call(null,v__$2,k,u.call(null,k));
ks = G__321160;
v__$2 = G__321161;
continue;
}
}
break;
}
})();var min_partitions_after_this = (cljs.core.truth_(s)?(s - (l + 1)):0);var amount_to_dec = (cljs.core.truth_(s)?(function (){var x__14132__auto__ = 0;var y__14133__auto__ = (min_partitions_after_this - diff_uv);return ((x__14132__auto__ > y__14133__auto__) ? x__14132__auto__ : y__14133__auto__);
})():0);var v__$3 = ((cljs.core._EQ_.call(null,amount_to_dec,0))?v__$2:(function (){var k_1 = (b - 1);var v__$3 = v__$2;var amount = amount_to_dec;while(true){
var vk = v__$3.call(null,k_1);if((amount > vk))
{{
var G__321162 = (k_1 - 1);
var G__321163 = cljs.core.assoc.call(null,v__$3,k_1,0);
var G__321164 = (amount - vk);
k_1 = G__321162;
v__$3 = G__321163;
amount = G__321164;
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
var partitions_M__delegate = function (items,p__321165){var map__321223 = p__321165;var map__321223__$1 = ((cljs.core.seq_QMARK_.call(null,map__321223))?cljs.core.apply.call(null,cljs.core.hash_map,map__321223):map__321223);var from = cljs.core.get.call(null,map__321223__$1,new cljs.core.Keyword(null,"min","min",1014012356));var to = cljs.core.get.call(null,map__321223__$1,new cljs.core.Keyword(null,"max","max",1014012118));if(cljs.core._EQ_.call(null,cljs.core.count.call(null,items),0))
{if((((function (){var or__13825__auto__ = from;if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
} else
{return 0;
}
})() <= 0)) && ((0 <= (function (){var or__13825__auto__ = to;if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
} else
{return 0;
}
})())))
{return cljs.core.list(cljs.core.List.EMPTY);
} else
{return cljs.core.List.EMPTY;
}
} else
{var items__$1 = cljs.core.vec.call(null,items);var ditems = cljs.core.vec.call(null,cljs.core.distinct.call(null,items__$1));var freqs = cljs.core.frequencies.call(null,items__$1);var N = cljs.core.count.call(null,items__$1);var M = cljs.core.count.call(null,ditems);var from__$1 = (cljs.core.truth_((function (){var and__13813__auto__ = from;if(cljs.core.truth_(and__13813__auto__))
{return (from <= 1);
} else
{return and__13813__auto__;
}
})())?null:from);var to__$1 = (cljs.core.truth_((function (){var and__13813__auto__ = to;if(cljs.core.truth_(and__13813__auto__))
{return (to >= N);
} else
{return and__13813__auto__;
}
})())?null:to);if(!(((1 <= (function (){var or__13825__auto__ = from__$1;if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
} else
{return 1;
}
})())) && ((((function (){var or__13825__auto__ = from__$1;if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
} else
{return 1;
}
})() <= (function (){var or__13825__auto__ = to__$1;if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
} else
{return N;
}
})())) && (((function (){var or__13825__auto__ = to__$1;if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
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
{var start_multiset = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__14518__auto__ = (function iter__321224(s__321225){return (new cljs.core.LazySeq(null,(function (){var s__321225__$1 = s__321225;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__321225__$1);if(temp__4092__auto__)
{var s__321225__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__321225__$2))
{var c__14516__auto__ = cljs.core.chunk_first.call(null,s__321225__$2);var size__14517__auto__ = cljs.core.count.call(null,c__14516__auto__);var b__321227 = cljs.core.chunk_buffer.call(null,size__14517__auto__);if((function (){var i__321226 = 0;while(true){
if((i__321226 < size__14517__auto__))
{var i = cljs.core._nth.call(null,c__14516__auto__,i__321226);var j = (i + 1);cljs.core.chunk_append.call(null,b__321227,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null));
{
var G__321280 = (i__321226 + 1);
i__321226 = G__321280;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__321227),iter__321224.call(null,cljs.core.chunk_rest.call(null,s__321225__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__321227),null);
}
} else
{var i = cljs.core.first.call(null,s__321225__$2);var j = (i + 1);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null),iter__321224.call(null,cljs.core.rest.call(null,s__321225__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14518__auto__.call(null,cljs.core.range.call(null,M));
})());var parts = foundation.app.data.combinatorics.multiset_partitions_M.call(null,start_multiset,to__$1,from__$1);var iter__14518__auto__ = (function iter__321228(s__321229){return (new cljs.core.LazySeq(null,(function (){var s__321229__$1 = s__321229;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__321229__$1);if(temp__4092__auto__)
{var s__321229__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__321229__$2))
{var c__14516__auto__ = cljs.core.chunk_first.call(null,s__321229__$2);var size__14517__auto__ = cljs.core.count.call(null,c__14516__auto__);var b__321231 = cljs.core.chunk_buffer.call(null,size__14517__auto__);if((function (){var i__321230 = 0;while(true){
if((i__321230 < size__14517__auto__))
{var part = cljs.core._nth.call(null,c__14516__auto__,i__321230);cljs.core.chunk_append.call(null,b__321231,(function (){var iter__14518__auto__ = ((function (i__321230,part,c__14516__auto__,size__14517__auto__,b__321231,s__321229__$2,temp__4092__auto__){
return (function iter__321256(s__321257){return (new cljs.core.LazySeq(null,((function (i__321230,part,c__14516__auto__,size__14517__auto__,b__321231,s__321229__$2,temp__4092__auto__){
return (function (){var s__321257__$1 = s__321257;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__321257__$1);if(temp__4092__auto____$1)
{var s__321257__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__321257__$2))
{var c__14516__auto____$1 = cljs.core.chunk_first.call(null,s__321257__$2);var size__14517__auto____$1 = cljs.core.count.call(null,c__14516__auto____$1);var b__321259 = cljs.core.chunk_buffer.call(null,size__14517__auto____$1);if((function (){var i__321258 = 0;while(true){
if((i__321258 < size__14517__auto____$1))
{var multiset = cljs.core._nth.call(null,c__14516__auto____$1,i__321258);cljs.core.chunk_append.call(null,b__321259,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__321258,i__321230,multiset,c__14516__auto____$1,size__14517__auto____$1,b__321259,s__321257__$2,temp__4092__auto____$1,part,c__14516__auto__,size__14517__auto__,b__321231,s__321229__$2,temp__4092__auto__){
return (function (p__321264){var vec__321265 = p__321264;var index = cljs.core.nth.call(null,vec__321265,0,null);var numtimes = cljs.core.nth.call(null,vec__321265,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__321258,i__321230,multiset,c__14516__auto____$1,size__14517__auto____$1,b__321259,s__321257__$2,temp__4092__auto____$1,part,c__14516__auto__,size__14517__auto__,b__321231,s__321229__$2,temp__4092__auto__))
,multiset)));
{
var G__321281 = (i__321258 + 1);
i__321258 = G__321281;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__321259),iter__321256.call(null,cljs.core.chunk_rest.call(null,s__321257__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__321259),null);
}
} else
{var multiset = cljs.core.first.call(null,s__321257__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__321230,multiset,s__321257__$2,temp__4092__auto____$1,part,c__14516__auto__,size__14517__auto__,b__321231,s__321229__$2,temp__4092__auto__){
return (function (p__321266){var vec__321267 = p__321266;var index = cljs.core.nth.call(null,vec__321267,0,null);var numtimes = cljs.core.nth.call(null,vec__321267,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__321230,multiset,s__321257__$2,temp__4092__auto____$1,part,c__14516__auto__,size__14517__auto__,b__321231,s__321229__$2,temp__4092__auto__))
,multiset)),iter__321256.call(null,cljs.core.rest.call(null,s__321257__$2)));
}
} else
{return null;
}
break;
}
});})(i__321230,part,c__14516__auto__,size__14517__auto__,b__321231,s__321229__$2,temp__4092__auto__))
,null,null));
});})(i__321230,part,c__14516__auto__,size__14517__auto__,b__321231,s__321229__$2,temp__4092__auto__))
;return iter__14518__auto__.call(null,part);
})());
{
var G__321282 = (i__321230 + 1);
i__321230 = G__321282;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__321231),iter__321228.call(null,cljs.core.chunk_rest.call(null,s__321229__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__321231),null);
}
} else
{var part = cljs.core.first.call(null,s__321229__$2);return cljs.core.cons.call(null,(function (){var iter__14518__auto__ = ((function (part,s__321229__$2,temp__4092__auto__){
return (function iter__321268(s__321269){return (new cljs.core.LazySeq(null,((function (part,s__321229__$2,temp__4092__auto__){
return (function (){var s__321269__$1 = s__321269;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__321269__$1);if(temp__4092__auto____$1)
{var s__321269__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__321269__$2))
{var c__14516__auto__ = cljs.core.chunk_first.call(null,s__321269__$2);var size__14517__auto__ = cljs.core.count.call(null,c__14516__auto__);var b__321271 = cljs.core.chunk_buffer.call(null,size__14517__auto__);if((function (){var i__321270 = 0;while(true){
if((i__321270 < size__14517__auto__))
{var multiset = cljs.core._nth.call(null,c__14516__auto__,i__321270);cljs.core.chunk_append.call(null,b__321271,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__321270,multiset,c__14516__auto__,size__14517__auto__,b__321271,s__321269__$2,temp__4092__auto____$1,part,s__321229__$2,temp__4092__auto__){
return (function (p__321276){var vec__321277 = p__321276;var index = cljs.core.nth.call(null,vec__321277,0,null);var numtimes = cljs.core.nth.call(null,vec__321277,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__321270,multiset,c__14516__auto__,size__14517__auto__,b__321271,s__321269__$2,temp__4092__auto____$1,part,s__321229__$2,temp__4092__auto__))
,multiset)));
{
var G__321283 = (i__321270 + 1);
i__321270 = G__321283;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__321271),iter__321268.call(null,cljs.core.chunk_rest.call(null,s__321269__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__321271),null);
}
} else
{var multiset = cljs.core.first.call(null,s__321269__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (multiset,s__321269__$2,temp__4092__auto____$1,part,s__321229__$2,temp__4092__auto__){
return (function (p__321278){var vec__321279 = p__321278;var index = cljs.core.nth.call(null,vec__321279,0,null);var numtimes = cljs.core.nth.call(null,vec__321279,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(multiset,s__321269__$2,temp__4092__auto____$1,part,s__321229__$2,temp__4092__auto__))
,multiset)),iter__321268.call(null,cljs.core.rest.call(null,s__321269__$2)));
}
} else
{return null;
}
break;
}
});})(part,s__321229__$2,temp__4092__auto__))
,null,null));
});})(part,s__321229__$2,temp__4092__auto__))
;return iter__14518__auto__.call(null,part);
})(),iter__321228.call(null,cljs.core.rest.call(null,s__321229__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14518__auto__.call(null,parts);
} else
{return null;
}
}
}
}
};
var partitions_M = function (items,var_args){
var p__321165 = null;if (arguments.length > 1) {
  p__321165 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions_M__delegate.call(this,items,p__321165);};
partitions_M.cljs$lang$maxFixedArity = 1;
partitions_M.cljs$lang$applyTo = (function (arglist__321284){
var items = cljs.core.first(arglist__321284);
var p__321165 = cljs.core.rest(arglist__321284);
return partitions_M__delegate(items,p__321165);
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
partitions.cljs$lang$applyTo = (function (arglist__321285){
var items = cljs.core.first(arglist__321285);
var args = cljs.core.rest(arglist__321285);
return partitions__delegate(items,args);
});
partitions.cljs$core$IFn$_invoke$arity$variadic = partitions__delegate;
return partitions;
})()
;

//# sourceMappingURL=combinatorics.js.map