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
var G__377900 = cljs.core.assoc.call(null,c__$2,(j__$1 - 1),(c__$2.call(null,j__$1) - 1));
var G__377901 = (j__$1 - 1);
c__$2 = G__377900;
j__$1 = G__377901;
continue;
}
}
break;
}
}
}
});
return (new cljs.core.LazySeq(null,(function (){var c = cljs.core.vec.call(null,cljs.core.cons.call(null,null,(function (){var iter__14677__auto__ = (function iter__377896(s__377897){return (new cljs.core.LazySeq(null,(function (){var s__377897__$1 = s__377897;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__377897__$1);if(temp__4092__auto__)
{var s__377897__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__377897__$2))
{var c__14675__auto__ = cljs.core.chunk_first.call(null,s__377897__$2);var size__14676__auto__ = cljs.core.count.call(null,c__14675__auto__);var b__377899 = cljs.core.chunk_buffer.call(null,size__14676__auto__);if((function (){var i__377898 = 0;while(true){
if((i__377898 < size__14676__auto__))
{var j = cljs.core._nth.call(null,c__14675__auto__,i__377898);cljs.core.chunk_append.call(null,b__377899,((j + cnt) + (- (n + 1))));
{
var G__377902 = (i__377898 + 1);
i__377898 = G__377902;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__377899),iter__377896.call(null,cljs.core.chunk_rest.call(null,s__377897__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__377899),null);
}
} else
{var j = cljs.core.first.call(null,s__377897__$2);return cljs.core.cons.call(null,((j + cnt) + (- (n + 1))),iter__377896.call(null,cljs.core.rest.call(null,s__377897__$2)));
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
{return cljs.core.map.call(null,(function (p1__377903_SHARP_){return cljs.core.map.call(null,v_items,p1__377903_SHARP_);
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
var G__377904 = (i - 1);
var G__377905 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__377904;
v_seqs__$2 = G__377905;
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
cartesian_product.cljs$lang$applyTo = (function (arglist__377906){
var seqs = cljs.core.seq(arglist__377906);
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
var G__377907 = (i - 1);
i = G__377907;
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
var G__377908 = (i - 1);
i = G__377908;
continue;
}
}
break;
}
})();var v__$1 = cljs.core.assoc.call(null,v,j,v.call(null,l),l,vj);var k = (j + 1);var l__$1 = (len - 1);while(true){
if((k < l__$1))
{{
var G__377909 = cljs.core.assoc.call(null,v__$1,k,v__$1.call(null,l__$1),l__$1,v__$1.call(null,k));
var G__377910 = (k + 1);
var G__377911 = (l__$1 - 1);
v__$1 = G__377909;
k = G__377910;
l__$1 = G__377911;
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
return (function iter__377916(s__377917){return (new cljs.core.LazySeq(null,((function (f,v){
return (function (){var s__377917__$1 = s__377917;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__377917__$1);if(temp__4092__auto__)
{var s__377917__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__377917__$2))
{var c__14675__auto__ = cljs.core.chunk_first.call(null,s__377917__$2);var size__14676__auto__ = cljs.core.count.call(null,c__14675__auto__);var b__377919 = cljs.core.chunk_buffer.call(null,size__14676__auto__);if((function (){var i__377918 = 0;while(true){
if((i__377918 < size__14676__auto__))
{var i = cljs.core._nth.call(null,c__14675__auto__,i__377918);cljs.core.chunk_append.call(null,b__377919,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));
{
var G__377920 = (i__377918 + 1);
i__377918 = G__377920;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__377919),iter__377916.call(null,cljs.core.chunk_rest.call(null,s__377917__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__377919),null);
}
} else
{var i = cljs.core.first.call(null,s__377917__$2);return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),iter__377916.call(null,cljs.core.rest.call(null,s__377917__$2)));
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
{var v = cljs.core.vec.call(null,items);return cljs.core.map.call(null,(function (p1__377921_SHARP_){return cljs.core.map.call(null,v,p1__377921_SHARP_);
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
{return cljs.core.vec.call(null,(function (){var iter__14677__auto__ = (function iter__377926(s__377927){return (new cljs.core.LazySeq(null,(function (){var s__377927__$1 = s__377927;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__377927__$1);if(temp__4092__auto__)
{var s__377927__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__377927__$2))
{var c__14675__auto__ = cljs.core.chunk_first.call(null,s__377927__$2);var size__14676__auto__ = cljs.core.count.call(null,c__14675__auto__);var b__377929 = cljs.core.chunk_buffer.call(null,size__14676__auto__);if((function (){var i__377928 = 0;while(true){
if((i__377928 < size__14676__auto__))
{var i = cljs.core._nth.call(null,c__14675__auto__,i__377928);cljs.core.chunk_append.call(null,b__377929,(function (){var x__14291__auto__ = 0;var y__14292__auto__ = (i - ((n - s) - -1));return ((x__14291__auto__ > y__14292__auto__) ? x__14291__auto__ : y__14292__auto__);
})());
{
var G__377930 = (i__377928 + 1);
i__377928 = G__377930;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__377929),iter__377926.call(null,cljs.core.chunk_rest.call(null,s__377927__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__377929),null);
}
} else
{var i = cljs.core.first.call(null,s__377927__$2);return cljs.core.cons.call(null,(function (){var x__14291__auto__ = 0;var y__14292__auto__ = (i - ((n - s) - -1));return ((x__14291__auto__ > y__14292__auto__) ? x__14291__auto__ : y__14292__auto__);
})(),iter__377926.call(null,cljs.core.rest.call(null,s__377927__$2)));
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
var G__377933 = (j - 1);
j = G__377933;
continue;
}
}
break;
}
})();if((j === 0))
{return cljs.core.List.EMPTY;
} else
{var a__$1 = foundation.app.data.combinatorics.update.call(null,a,j,cljs.core.inc);var x = (cljs.core.truth_(s)?(s - (b.call(null,j) + ((cljs.core._EQ_.call(null,a__$1.call(null,j),b.call(null,j)))?1:0))):null);var vec__377932 = (function (){var a__$2 = a__$1;var b__$1 = b;var i = (j + 1);var current_max = (b__$1.call(null,j) + (((b__$1.call(null,j) === a__$2.call(null,j)))?1:0));while(true){
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
var G__377934 = cljs.core.assoc.call(null,a__$2,i,new_a_i);
var G__377935 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__377936 = (i + 1);
var G__377937 = (function (){var x__14291__auto__ = current_max;var y__14292__auto__ = (new_a_i + 1);return ((x__14291__auto__ > y__14292__auto__) ? x__14291__auto__ : y__14292__auto__);
})();
a__$2 = G__377934;
b__$1 = G__377935;
i = G__377936;
current_max = G__377937;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__377938 = cljs.core.assoc.call(null,a__$2,i,0);
var G__377939 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__377940 = (i + 1);
var G__377941 = current_max;
a__$2 = G__377938;
b__$1 = G__377939;
i = G__377940;
current_max = G__377941;
continue;
}
} else
{return null;
}
}
}
break;
}
})();var a__$2 = cljs.core.nth.call(null,vec__377932,0,null);var b__$1 = cljs.core.nth.call(null,vec__377932,1,null);return growth_strings_H.call(null,n,a__$2,b__$1,r,s);
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
var lex_partitions_H__delegate = function (N,p__377942){var map__377948 = p__377942;var map__377948__$1 = ((cljs.core.seq_QMARK_.call(null,map__377948))?cljs.core.apply.call(null,cljs.core.hash_map,map__377948):map__377948);var from = cljs.core.get.call(null,map__377948__$1,new cljs.core.Keyword(null,"min","min",1014012356));var to = cljs.core.get.call(null,map__377948__$1,new cljs.core.Keyword(null,"max","max",1014012118));if(cljs.core._EQ_.call(null,N,0))
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
{var growth_strings = foundation.app.data.combinatorics.growth_strings_H.call(null,N,to__$1,from__$1);var iter__14677__auto__ = (function iter__377949(s__377950){return (new cljs.core.LazySeq(null,(function (){var s__377950__$1 = s__377950;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__377950__$1);if(temp__4092__auto__)
{var s__377950__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__377950__$2))
{var c__14675__auto__ = cljs.core.chunk_first.call(null,s__377950__$2);var size__14676__auto__ = cljs.core.count.call(null,c__14675__auto__);var b__377952 = cljs.core.chunk_buffer.call(null,size__14676__auto__);if((function (){var i__377951 = 0;while(true){
if((i__377951 < size__14676__auto__))
{var growth_string = cljs.core._nth.call(null,c__14675__auto__,i__377951);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));cljs.core.chunk_append.call(null,b__377952,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))));
{
var G__377953 = (i__377951 + 1);
i__377951 = G__377953;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__377952),iter__377949.call(null,cljs.core.chunk_rest.call(null,s__377950__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__377952),null);
}
} else
{var growth_string = cljs.core.first.call(null,s__377950__$2);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));return cljs.core.cons.call(null,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))),iter__377949.call(null,cljs.core.rest.call(null,s__377950__$2)));
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
var p__377942 = null;if (arguments.length > 1) {
  p__377942 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return lex_partitions_H__delegate.call(this,N,p__377942);};
lex_partitions_H.cljs$lang$maxFixedArity = 1;
lex_partitions_H.cljs$lang$applyTo = (function (arglist__377954){
var N = cljs.core.first(arglist__377954);
var p__377942 = cljs.core.rest(arglist__377954);
return lex_partitions_H__delegate(N,p__377942);
});
lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic = lex_partitions_H__delegate;
return lex_partitions_H;
})()
;
/**
* @param {...*} var_args
*/
foundation.app.data.combinatorics.partitions_H = (function() { 
var partitions_H__delegate = function (items,args){var items__$1 = cljs.core.vec.call(null,items);var N = cljs.core.count.call(null,items__$1);var lex = cljs.core.apply.call(null,foundation.app.data.combinatorics.lex_partitions_H,N,args);var iter__14677__auto__ = (function iter__377975(s__377976){return (new cljs.core.LazySeq(null,(function (){var s__377976__$1 = s__377976;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__377976__$1);if(temp__4092__auto__)
{var s__377976__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__377976__$2))
{var c__14675__auto__ = cljs.core.chunk_first.call(null,s__377976__$2);var size__14676__auto__ = cljs.core.count.call(null,c__14675__auto__);var b__377978 = cljs.core.chunk_buffer.call(null,size__14676__auto__);if((function (){var i__377977 = 0;while(true){
if((i__377977 < size__14676__auto__))
{var parts = cljs.core._nth.call(null,c__14675__auto__,i__377977);cljs.core.chunk_append.call(null,b__377978,(function (){var iter__14677__auto__ = ((function (i__377977,parts,c__14675__auto__,size__14676__auto__,b__377978,s__377976__$2,temp__4092__auto__){
return (function iter__377987(s__377988){return (new cljs.core.LazySeq(null,((function (i__377977,parts,c__14675__auto__,size__14676__auto__,b__377978,s__377976__$2,temp__4092__auto__){
return (function (){var s__377988__$1 = s__377988;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__377988__$1);if(temp__4092__auto____$1)
{var s__377988__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__377988__$2))
{var c__14675__auto____$1 = cljs.core.chunk_first.call(null,s__377988__$2);var size__14676__auto____$1 = cljs.core.count.call(null,c__14675__auto____$1);var b__377990 = cljs.core.chunk_buffer.call(null,size__14676__auto____$1);if((function (){var i__377989 = 0;while(true){
if((i__377989 < size__14676__auto____$1))
{var part = cljs.core._nth.call(null,c__14675__auto____$1,i__377989);cljs.core.chunk_append.call(null,b__377990,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__377989,i__377977,part,c__14675__auto____$1,size__14676__auto____$1,b__377990,s__377988__$2,temp__4092__auto____$1,parts,c__14675__auto__,size__14676__auto__,b__377978,s__377976__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__377989,i__377977,part,c__14675__auto____$1,size__14676__auto____$1,b__377990,s__377988__$2,temp__4092__auto____$1,parts,c__14675__auto__,size__14676__auto__,b__377978,s__377976__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__377995 = (i__377989 + 1);
i__377989 = G__377995;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__377990),iter__377987.call(null,cljs.core.chunk_rest.call(null,s__377988__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__377990),null);
}
} else
{var part = cljs.core.first.call(null,s__377988__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__377977,part,s__377988__$2,temp__4092__auto____$1,parts,c__14675__auto__,size__14676__auto__,b__377978,s__377976__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__377977,part,s__377988__$2,temp__4092__auto____$1,parts,c__14675__auto__,size__14676__auto__,b__377978,s__377976__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__377987.call(null,cljs.core.rest.call(null,s__377988__$2)));
}
} else
{return null;
}
break;
}
});})(i__377977,parts,c__14675__auto__,size__14676__auto__,b__377978,s__377976__$2,temp__4092__auto__))
,null,null));
});})(i__377977,parts,c__14675__auto__,size__14676__auto__,b__377978,s__377976__$2,temp__4092__auto__))
;return iter__14677__auto__.call(null,parts);
})());
{
var G__377996 = (i__377977 + 1);
i__377977 = G__377996;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__377978),iter__377975.call(null,cljs.core.chunk_rest.call(null,s__377976__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__377978),null);
}
} else
{var parts = cljs.core.first.call(null,s__377976__$2);return cljs.core.cons.call(null,(function (){var iter__14677__auto__ = ((function (parts,s__377976__$2,temp__4092__auto__){
return (function iter__377991(s__377992){return (new cljs.core.LazySeq(null,((function (parts,s__377976__$2,temp__4092__auto__){
return (function (){var s__377992__$1 = s__377992;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__377992__$1);if(temp__4092__auto____$1)
{var s__377992__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__377992__$2))
{var c__14675__auto__ = cljs.core.chunk_first.call(null,s__377992__$2);var size__14676__auto__ = cljs.core.count.call(null,c__14675__auto__);var b__377994 = cljs.core.chunk_buffer.call(null,size__14676__auto__);if((function (){var i__377993 = 0;while(true){
if((i__377993 < size__14676__auto__))
{var part = cljs.core._nth.call(null,c__14675__auto__,i__377993);cljs.core.chunk_append.call(null,b__377994,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__377993,part,c__14675__auto__,size__14676__auto__,b__377994,s__377992__$2,temp__4092__auto____$1,parts,s__377976__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__377993,part,c__14675__auto__,size__14676__auto__,b__377994,s__377992__$2,temp__4092__auto____$1,parts,s__377976__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__377997 = (i__377993 + 1);
i__377993 = G__377997;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__377994),iter__377991.call(null,cljs.core.chunk_rest.call(null,s__377992__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__377994),null);
}
} else
{var part = cljs.core.first.call(null,s__377992__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (part,s__377992__$2,temp__4092__auto____$1,parts,s__377976__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(part,s__377992__$2,temp__4092__auto____$1,parts,s__377976__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__377991.call(null,cljs.core.rest.call(null,s__377992__$2)));
}
} else
{return null;
}
break;
}
});})(parts,s__377976__$2,temp__4092__auto__))
,null,null));
});})(parts,s__377976__$2,temp__4092__auto__))
;return iter__14677__auto__.call(null,parts);
})(),iter__377975.call(null,cljs.core.rest.call(null,s__377976__$2)));
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
partitions_H.cljs$lang$applyTo = (function (arglist__377998){
var items = cljs.core.first(arglist__377998);
var args = cljs.core.rest(arglist__377998);
return partitions_H__delegate(items,args);
});
partitions_H.cljs$core$IFn$_invoke$arity$variadic = partitions_H__delegate;
return partitions_H;
})()
;
foundation.app.data.combinatorics.multiset_partitions_M = (function() {
var multiset_partitions_M = null;
var multiset_partitions_M__3 = (function (multiset,r,s){var n = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,multiset));var m = cljs.core.count.call(null,multiset);var f = cljs.core.PersistentVector.EMPTY;var c = cljs.core.PersistentVector.EMPTY;var u = cljs.core.PersistentVector.EMPTY;var v = cljs.core.PersistentVector.EMPTY;var vec__378021 = (function (){var j = 0;var c__$1 = c;var u__$1 = u;var v__$1 = v;while(true){
if(cljs.core._EQ_.call(null,j,m))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,u__$1,v__$1], null);
} else
{{
var G__378043 = (j + 1);
var G__378044 = cljs.core.assoc.call(null,c__$1,j,(j + 1));
var G__378045 = cljs.core.assoc.call(null,u__$1,j,multiset.call(null,(j + 1)));
var G__378046 = cljs.core.assoc.call(null,v__$1,j,multiset.call(null,(j + 1)));
j = G__378043;
c__$1 = G__378044;
u__$1 = G__378045;
v__$1 = G__378046;
continue;
}
}
break;
}
})();var c__$1 = cljs.core.nth.call(null,vec__378021,0,null);var u__$1 = cljs.core.nth.call(null,vec__378021,1,null);var v__$1 = cljs.core.nth.call(null,vec__378021,2,null);var a = 0;var b = m;var l = 0;var f__$1 = cljs.core.assoc.call(null,f,0,0,1,m);var stack = cljs.core.List.EMPTY;return multiset_partitions_M.call(null,n,m,f__$1,c__$1,u__$1,v__$1,a,b,l,r,s);
});
var multiset_partitions_M__11 = (function (n,m,f,c,u,v,a,b,l,r,s){while(true){
var vec__378022 = (function (){var j = a;var k = b;var x = false;var u__$1 = u;var v__$1 = v;var c__$1 = c;while(true){
if((j >= b))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [u__$1,v__$1,c__$1,j,k], null);
} else
{var u__$2 = cljs.core.assoc.call(null,u__$1,k,(u__$1.call(null,j) - v__$1.call(null,j)));if(cljs.core._EQ_.call(null,u__$2.call(null,k),0))
{{
var G__378047 = (j + 1);
var G__378048 = k;
var G__378049 = true;
var G__378050 = u__$2;
var G__378051 = v__$1;
var G__378052 = c__$1;
j = G__378047;
k = G__378048;
x = G__378049;
u__$1 = G__378050;
v__$1 = G__378051;
c__$1 = G__378052;
continue;
}
} else
{if(!(x))
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,(function (){var x__14298__auto__ = v__$1.call(null,j);var y__14299__auto__ = u__$2.call(null,k);return ((x__14298__auto__ < y__14299__auto__) ? x__14298__auto__ : y__14299__auto__);
})());var x__$1 = (u__$2.call(null,k) < v__$2.call(null,j));var k__$1 = (k + 1);var j__$1 = (j + 1);{
var G__378053 = j__$1;
var G__378054 = k__$1;
var G__378055 = x__$1;
var G__378056 = u__$2;
var G__378057 = v__$2;
var G__378058 = c__$2;
j = G__378053;
k = G__378054;
x = G__378055;
u__$1 = G__378056;
v__$1 = G__378057;
c__$1 = G__378058;
continue;
}
} else
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,u__$2.call(null,k));var k__$1 = (k + 1);var j__$1 = (j + 1);{
var G__378059 = j__$1;
var G__378060 = k__$1;
var G__378061 = x;
var G__378062 = u__$2;
var G__378063 = v__$2;
var G__378064 = c__$2;
j = G__378059;
k = G__378060;
x = G__378061;
u__$1 = G__378062;
v__$1 = G__378063;
c__$1 = G__378064;
continue;
}
}
}
}
break;
}
})();var u__$1 = cljs.core.nth.call(null,vec__378022,0,null);var v__$1 = cljs.core.nth.call(null,vec__378022,1,null);var c__$1 = cljs.core.nth.call(null,vec__378022,2,null);var j = cljs.core.nth.call(null,vec__378022,3,null);var k = cljs.core.nth.call(null,vec__378022,4,null);if(cljs.core.truth_((function (){var and__13967__auto__ = r;if(cljs.core.truth_(and__13967__auto__))
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
var G__378065 = n;
var G__378066 = m;
var G__378067 = f__$1;
var G__378068 = c__$1;
var G__378069 = u__$1;
var G__378070 = v__$1;
var G__378071 = a__$1;
var G__378072 = b__$1;
var G__378073 = l__$1;
var G__378074 = r;
var G__378075 = s;
n = G__378065;
m = G__378066;
f = G__378067;
c = G__378068;
u = G__378069;
v = G__378070;
a = G__378071;
b = G__378072;
l = G__378073;
r = G__378074;
s = G__378075;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var part = (function (){var iter__14677__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s){
return (function iter__378023(s__378024){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s){
return (function (){var s__378024__$1 = s__378024;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__378024__$1);if(temp__4092__auto__)
{var s__378024__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__378024__$2))
{var c__14675__auto__ = cljs.core.chunk_first.call(null,s__378024__$2);var size__14676__auto__ = cljs.core.count.call(null,c__14675__auto__);var b__378026 = cljs.core.chunk_buffer.call(null,size__14676__auto__);if((function (){var i__378025 = 0;while(true){
if((i__378025 < size__14676__auto__))
{var y = cljs.core._nth.call(null,c__14675__auto__,i__378025);cljs.core.chunk_append.call(null,b__378026,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + 1)) - 1);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__14677__auto__ = ((function (i__378025,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__14675__auto__,size__14676__auto__,b__378026,s__378024__$2,temp__4092__auto__){
return (function iter__378035(s__378036){return (new cljs.core.LazySeq(null,((function (i__378025,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__14675__auto__,size__14676__auto__,b__378026,s__378024__$2,temp__4092__auto__){
return (function (){var s__378036__$1 = s__378036;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__378036__$1);if(temp__4092__auto____$1)
{var s__378036__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__378036__$2))
{var c__14675__auto____$1 = cljs.core.chunk_first.call(null,s__378036__$2);var size__14676__auto____$1 = cljs.core.count.call(null,c__14675__auto____$1);var b__378038 = cljs.core.chunk_buffer.call(null,size__14676__auto____$1);if((function (){var i__378037 = 0;while(true){
if((i__378037 < size__14676__auto____$1))
{var z = cljs.core._nth.call(null,c__14675__auto____$1,i__378037);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{cljs.core.chunk_append.call(null,b__378038,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));
{
var G__378076 = (i__378037 + 1);
i__378037 = G__378076;
continue;
}
} else
{{
var G__378077 = (i__378037 + 1);
i__378037 = G__378077;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__378038),iter__378035.call(null,cljs.core.chunk_rest.call(null,s__378036__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__378038),null);
}
} else
{var z = cljs.core.first.call(null,s__378036__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),iter__378035.call(null,cljs.core.rest.call(null,s__378036__$2)));
} else
{{
var G__378078 = cljs.core.rest.call(null,s__378036__$2);
s__378036__$1 = G__378078;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__378025,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__14675__auto__,size__14676__auto__,b__378026,s__378024__$2,temp__4092__auto__))
,null,null));
});})(i__378025,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__14675__auto__,size__14676__auto__,b__378026,s__378024__$2,temp__4092__auto__))
;return iter__14677__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + 1)));
})());
})());
{
var G__378079 = (i__378025 + 1);
i__378025 = G__378079;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__378026),iter__378023.call(null,cljs.core.chunk_rest.call(null,s__378024__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__378026),null);
}
} else
{var y = cljs.core.first.call(null,s__378024__$2);return cljs.core.cons.call(null,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + 1)) - 1);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__14677__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__378024__$2,temp__4092__auto__){
return (function iter__378039(s__378040){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__378024__$2,temp__4092__auto__){
return (function (){var s__378040__$1 = s__378040;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__378040__$1);if(temp__4092__auto____$1)
{var s__378040__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__378040__$2))
{var c__14675__auto__ = cljs.core.chunk_first.call(null,s__378040__$2);var size__14676__auto__ = cljs.core.count.call(null,c__14675__auto__);var b__378042 = cljs.core.chunk_buffer.call(null,size__14676__auto__);if((function (){var i__378041 = 0;while(true){
if((i__378041 < size__14676__auto__))
{var z = cljs.core._nth.call(null,c__14675__auto__,i__378041);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{cljs.core.chunk_append.call(null,b__378042,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));
{
var G__378080 = (i__378041 + 1);
i__378041 = G__378080;
continue;
}
} else
{{
var G__378081 = (i__378041 + 1);
i__378041 = G__378081;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__378042),iter__378039.call(null,cljs.core.chunk_rest.call(null,s__378040__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__378042),null);
}
} else
{var z = cljs.core.first.call(null,s__378040__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),iter__378039.call(null,cljs.core.rest.call(null,s__378040__$2)));
} else
{{
var G__378082 = cljs.core.rest.call(null,s__378040__$2);
s__378040__$1 = G__378082;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__378024__$2,temp__4092__auto__))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__378024__$2,temp__4092__auto__))
;return iter__14677__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + 1)));
})());
})(),iter__378023.call(null,cljs.core.rest.call(null,s__378024__$2)));
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
var G__378091 = (j - 1);
j = G__378091;
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
return (function iter__378087(s__378088){return (new cljs.core.LazySeq(null,((function (v__$1){
return (function (){var s__378088__$1 = s__378088;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__378088__$1);if(temp__4092__auto__)
{var s__378088__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__378088__$2))
{var c__14675__auto__ = cljs.core.chunk_first.call(null,s__378088__$2);var size__14676__auto__ = cljs.core.count.call(null,c__14675__auto__);var b__378090 = cljs.core.chunk_buffer.call(null,size__14676__auto__);if((function (){var i__378089 = 0;while(true){
if((i__378089 < size__14676__auto__))
{var i = cljs.core._nth.call(null,c__14675__auto__,i__378089);cljs.core.chunk_append.call(null,b__378090,(u.call(null,i) - v__$1.call(null,i)));
{
var G__378092 = (i__378089 + 1);
i__378089 = G__378092;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__378090),iter__378087.call(null,cljs.core.chunk_rest.call(null,s__378088__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__378090),null);
}
} else
{var i = cljs.core.first.call(null,s__378088__$2);return cljs.core.cons.call(null,(u.call(null,i) - v__$1.call(null,i)),iter__378087.call(null,cljs.core.rest.call(null,s__378088__$2)));
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
var G__378093 = cljs.core.rest.call(null,ks);
var G__378094 = cljs.core.assoc.call(null,v__$2,k,u.call(null,k));
ks = G__378093;
v__$2 = G__378094;
continue;
}
}
break;
}
})();var min_partitions_after_this = (cljs.core.truth_(s)?(s - (l + 1)):0);var amount_to_dec = (cljs.core.truth_(s)?(function (){var x__14291__auto__ = 0;var y__14292__auto__ = (min_partitions_after_this - diff_uv);return ((x__14291__auto__ > y__14292__auto__) ? x__14291__auto__ : y__14292__auto__);
})():0);var v__$3 = ((cljs.core._EQ_.call(null,amount_to_dec,0))?v__$2:(function (){var k_1 = (b - 1);var v__$3 = v__$2;var amount = amount_to_dec;while(true){
var vk = v__$3.call(null,k_1);if((amount > vk))
{{
var G__378095 = (k_1 - 1);
var G__378096 = cljs.core.assoc.call(null,v__$3,k_1,0);
var G__378097 = (amount - vk);
k_1 = G__378095;
v__$3 = G__378096;
amount = G__378097;
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
var partitions_M__delegate = function (items,p__378098){var map__378156 = p__378098;var map__378156__$1 = ((cljs.core.seq_QMARK_.call(null,map__378156))?cljs.core.apply.call(null,cljs.core.hash_map,map__378156):map__378156);var from = cljs.core.get.call(null,map__378156__$1,new cljs.core.Keyword(null,"min","min",1014012356));var to = cljs.core.get.call(null,map__378156__$1,new cljs.core.Keyword(null,"max","max",1014012118));if(cljs.core._EQ_.call(null,cljs.core.count.call(null,items),0))
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
{var start_multiset = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__14677__auto__ = (function iter__378157(s__378158){return (new cljs.core.LazySeq(null,(function (){var s__378158__$1 = s__378158;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__378158__$1);if(temp__4092__auto__)
{var s__378158__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__378158__$2))
{var c__14675__auto__ = cljs.core.chunk_first.call(null,s__378158__$2);var size__14676__auto__ = cljs.core.count.call(null,c__14675__auto__);var b__378160 = cljs.core.chunk_buffer.call(null,size__14676__auto__);if((function (){var i__378159 = 0;while(true){
if((i__378159 < size__14676__auto__))
{var i = cljs.core._nth.call(null,c__14675__auto__,i__378159);var j = (i + 1);cljs.core.chunk_append.call(null,b__378160,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null));
{
var G__378213 = (i__378159 + 1);
i__378159 = G__378213;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__378160),iter__378157.call(null,cljs.core.chunk_rest.call(null,s__378158__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__378160),null);
}
} else
{var i = cljs.core.first.call(null,s__378158__$2);var j = (i + 1);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null),iter__378157.call(null,cljs.core.rest.call(null,s__378158__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14677__auto__.call(null,cljs.core.range.call(null,M));
})());var parts = foundation.app.data.combinatorics.multiset_partitions_M.call(null,start_multiset,to__$1,from__$1);var iter__14677__auto__ = (function iter__378161(s__378162){return (new cljs.core.LazySeq(null,(function (){var s__378162__$1 = s__378162;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__378162__$1);if(temp__4092__auto__)
{var s__378162__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__378162__$2))
{var c__14675__auto__ = cljs.core.chunk_first.call(null,s__378162__$2);var size__14676__auto__ = cljs.core.count.call(null,c__14675__auto__);var b__378164 = cljs.core.chunk_buffer.call(null,size__14676__auto__);if((function (){var i__378163 = 0;while(true){
if((i__378163 < size__14676__auto__))
{var part = cljs.core._nth.call(null,c__14675__auto__,i__378163);cljs.core.chunk_append.call(null,b__378164,(function (){var iter__14677__auto__ = ((function (i__378163,part,c__14675__auto__,size__14676__auto__,b__378164,s__378162__$2,temp__4092__auto__){
return (function iter__378189(s__378190){return (new cljs.core.LazySeq(null,((function (i__378163,part,c__14675__auto__,size__14676__auto__,b__378164,s__378162__$2,temp__4092__auto__){
return (function (){var s__378190__$1 = s__378190;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__378190__$1);if(temp__4092__auto____$1)
{var s__378190__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__378190__$2))
{var c__14675__auto____$1 = cljs.core.chunk_first.call(null,s__378190__$2);var size__14676__auto____$1 = cljs.core.count.call(null,c__14675__auto____$1);var b__378192 = cljs.core.chunk_buffer.call(null,size__14676__auto____$1);if((function (){var i__378191 = 0;while(true){
if((i__378191 < size__14676__auto____$1))
{var multiset = cljs.core._nth.call(null,c__14675__auto____$1,i__378191);cljs.core.chunk_append.call(null,b__378192,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__378191,i__378163,multiset,c__14675__auto____$1,size__14676__auto____$1,b__378192,s__378190__$2,temp__4092__auto____$1,part,c__14675__auto__,size__14676__auto__,b__378164,s__378162__$2,temp__4092__auto__){
return (function (p__378197){var vec__378198 = p__378197;var index = cljs.core.nth.call(null,vec__378198,0,null);var numtimes = cljs.core.nth.call(null,vec__378198,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__378191,i__378163,multiset,c__14675__auto____$1,size__14676__auto____$1,b__378192,s__378190__$2,temp__4092__auto____$1,part,c__14675__auto__,size__14676__auto__,b__378164,s__378162__$2,temp__4092__auto__))
,multiset)));
{
var G__378214 = (i__378191 + 1);
i__378191 = G__378214;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__378192),iter__378189.call(null,cljs.core.chunk_rest.call(null,s__378190__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__378192),null);
}
} else
{var multiset = cljs.core.first.call(null,s__378190__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__378163,multiset,s__378190__$2,temp__4092__auto____$1,part,c__14675__auto__,size__14676__auto__,b__378164,s__378162__$2,temp__4092__auto__){
return (function (p__378199){var vec__378200 = p__378199;var index = cljs.core.nth.call(null,vec__378200,0,null);var numtimes = cljs.core.nth.call(null,vec__378200,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__378163,multiset,s__378190__$2,temp__4092__auto____$1,part,c__14675__auto__,size__14676__auto__,b__378164,s__378162__$2,temp__4092__auto__))
,multiset)),iter__378189.call(null,cljs.core.rest.call(null,s__378190__$2)));
}
} else
{return null;
}
break;
}
});})(i__378163,part,c__14675__auto__,size__14676__auto__,b__378164,s__378162__$2,temp__4092__auto__))
,null,null));
});})(i__378163,part,c__14675__auto__,size__14676__auto__,b__378164,s__378162__$2,temp__4092__auto__))
;return iter__14677__auto__.call(null,part);
})());
{
var G__378215 = (i__378163 + 1);
i__378163 = G__378215;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__378164),iter__378161.call(null,cljs.core.chunk_rest.call(null,s__378162__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__378164),null);
}
} else
{var part = cljs.core.first.call(null,s__378162__$2);return cljs.core.cons.call(null,(function (){var iter__14677__auto__ = ((function (part,s__378162__$2,temp__4092__auto__){
return (function iter__378201(s__378202){return (new cljs.core.LazySeq(null,((function (part,s__378162__$2,temp__4092__auto__){
return (function (){var s__378202__$1 = s__378202;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__378202__$1);if(temp__4092__auto____$1)
{var s__378202__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__378202__$2))
{var c__14675__auto__ = cljs.core.chunk_first.call(null,s__378202__$2);var size__14676__auto__ = cljs.core.count.call(null,c__14675__auto__);var b__378204 = cljs.core.chunk_buffer.call(null,size__14676__auto__);if((function (){var i__378203 = 0;while(true){
if((i__378203 < size__14676__auto__))
{var multiset = cljs.core._nth.call(null,c__14675__auto__,i__378203);cljs.core.chunk_append.call(null,b__378204,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__378203,multiset,c__14675__auto__,size__14676__auto__,b__378204,s__378202__$2,temp__4092__auto____$1,part,s__378162__$2,temp__4092__auto__){
return (function (p__378209){var vec__378210 = p__378209;var index = cljs.core.nth.call(null,vec__378210,0,null);var numtimes = cljs.core.nth.call(null,vec__378210,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__378203,multiset,c__14675__auto__,size__14676__auto__,b__378204,s__378202__$2,temp__4092__auto____$1,part,s__378162__$2,temp__4092__auto__))
,multiset)));
{
var G__378216 = (i__378203 + 1);
i__378203 = G__378216;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__378204),iter__378201.call(null,cljs.core.chunk_rest.call(null,s__378202__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__378204),null);
}
} else
{var multiset = cljs.core.first.call(null,s__378202__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (multiset,s__378202__$2,temp__4092__auto____$1,part,s__378162__$2,temp__4092__auto__){
return (function (p__378211){var vec__378212 = p__378211;var index = cljs.core.nth.call(null,vec__378212,0,null);var numtimes = cljs.core.nth.call(null,vec__378212,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(multiset,s__378202__$2,temp__4092__auto____$1,part,s__378162__$2,temp__4092__auto__))
,multiset)),iter__378201.call(null,cljs.core.rest.call(null,s__378202__$2)));
}
} else
{return null;
}
break;
}
});})(part,s__378162__$2,temp__4092__auto__))
,null,null));
});})(part,s__378162__$2,temp__4092__auto__))
;return iter__14677__auto__.call(null,part);
})(),iter__378161.call(null,cljs.core.rest.call(null,s__378162__$2)));
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
var p__378098 = null;if (arguments.length > 1) {
  p__378098 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions_M__delegate.call(this,items,p__378098);};
partitions_M.cljs$lang$maxFixedArity = 1;
partitions_M.cljs$lang$applyTo = (function (arglist__378217){
var items = cljs.core.first(arglist__378217);
var p__378098 = cljs.core.rest(arglist__378217);
return partitions_M__delegate(items,p__378098);
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
partitions.cljs$lang$applyTo = (function (arglist__378218){
var items = cljs.core.first(arglist__378218);
var args = cljs.core.rest(arglist__378218);
return partitions__delegate(items,args);
});
partitions.cljs$core$IFn$_invoke$arity$variadic = partitions__delegate;
return partitions;
})()
;

//# sourceMappingURL=combinatorics.js.map