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
var G__76853 = cljs.core.assoc.call(null,c__$2,(j__$1 - 1),(c__$2.call(null,j__$1) - 1));
var G__76854 = (j__$1 - 1);
c__$2 = G__76853;
j__$1 = G__76854;
continue;
}
}
break;
}
}
}
});
return (new cljs.core.LazySeq(null,(function (){var c = cljs.core.vec.call(null,cljs.core.cons.call(null,null,(function (){var iter__14514__auto__ = (function iter__76849(s__76850){return (new cljs.core.LazySeq(null,(function (){var s__76850__$1 = s__76850;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__76850__$1);if(temp__4092__auto__)
{var s__76850__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__76850__$2))
{var c__14512__auto__ = cljs.core.chunk_first.call(null,s__76850__$2);var size__14513__auto__ = cljs.core.count.call(null,c__14512__auto__);var b__76852 = cljs.core.chunk_buffer.call(null,size__14513__auto__);if((function (){var i__76851 = 0;while(true){
if((i__76851 < size__14513__auto__))
{var j = cljs.core._nth.call(null,c__14512__auto__,i__76851);cljs.core.chunk_append.call(null,b__76852,((j + cnt) + (- (n + 1))));
{
var G__76855 = (i__76851 + 1);
i__76851 = G__76855;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__76852),iter__76849.call(null,cljs.core.chunk_rest.call(null,s__76850__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__76852),null);
}
} else
{var j = cljs.core.first.call(null,s__76850__$2);return cljs.core.cons.call(null,((j + cnt) + (- (n + 1))),iter__76849.call(null,cljs.core.rest.call(null,s__76850__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14514__auto__.call(null,cljs.core.range.call(null,1,(n + 1)));
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
{return cljs.core.map.call(null,(function (p1__76856_SHARP_){return cljs.core.map.call(null,v_items,p1__76856_SHARP_);
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
var G__76857 = (i - 1);
var G__76858 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__76857;
v_seqs__$2 = G__76858;
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
cartesian_product.cljs$lang$applyTo = (function (arglist__76859){
var seqs = cljs.core.seq(arglist__76859);
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
var G__76860 = (i - 1);
i = G__76860;
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
var G__76861 = (i - 1);
i = G__76861;
continue;
}
}
break;
}
})();var v__$1 = cljs.core.assoc.call(null,v,j,v.call(null,l),l,vj);var k = (j + 1);var l__$1 = (len - 1);while(true){
if((k < l__$1))
{{
var G__76862 = cljs.core.assoc.call(null,v__$1,k,v__$1.call(null,l__$1),l__$1,v__$1.call(null,k));
var G__76863 = (k + 1);
var G__76864 = (l__$1 - 1);
v__$1 = G__76862;
k = G__76863;
l__$1 = G__76864;
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
foundation.app.data.combinatorics.multi_perm = (function multi_perm(l){var f = cljs.core.frequencies.call(null,l);var v = cljs.core.vec.call(null,cljs.core.keys.call(null,f));var indices = cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__14514__auto__ = ((function (f,v){
return (function iter__76869(s__76870){return (new cljs.core.LazySeq(null,((function (f,v){
return (function (){var s__76870__$1 = s__76870;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__76870__$1);if(temp__4092__auto__)
{var s__76870__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__76870__$2))
{var c__14512__auto__ = cljs.core.chunk_first.call(null,s__76870__$2);var size__14513__auto__ = cljs.core.count.call(null,c__14512__auto__);var b__76872 = cljs.core.chunk_buffer.call(null,size__14513__auto__);if((function (){var i__76871 = 0;while(true){
if((i__76871 < size__14513__auto__))
{var i = cljs.core._nth.call(null,c__14512__auto__,i__76871);cljs.core.chunk_append.call(null,b__76872,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));
{
var G__76873 = (i__76871 + 1);
i__76871 = G__76873;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__76872),iter__76869.call(null,cljs.core.chunk_rest.call(null,s__76870__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__76872),null);
}
} else
{var i = cljs.core.first.call(null,s__76870__$2);return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),iter__76869.call(null,cljs.core.rest.call(null,s__76870__$2)));
}
} else
{return null;
}
break;
}
});})(f,v))
,null,null));
});})(f,v))
;return iter__14514__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,v)));
})());return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.map,v),foundation.app.data.combinatorics.lex_permutations.call(null,indices));
});
/**
* All the distinct permutations of items, lexicographic by index.
*/
foundation.app.data.combinatorics.permutations = (function permutations(items){if(foundation.app.data.combinatorics.sorted_numbers_QMARK_.call(null,items))
{return foundation.app.data.combinatorics.lex_permutations.call(null,items);
} else
{if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core.distinct_QMARK_,items)))
{var v = cljs.core.vec.call(null,items);return cljs.core.map.call(null,(function (p1__76874_SHARP_){return cljs.core.map.call(null,v,p1__76874_SHARP_);
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
{return cljs.core.vec.call(null,(function (){var iter__14514__auto__ = (function iter__76879(s__76880){return (new cljs.core.LazySeq(null,(function (){var s__76880__$1 = s__76880;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__76880__$1);if(temp__4092__auto__)
{var s__76880__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__76880__$2))
{var c__14512__auto__ = cljs.core.chunk_first.call(null,s__76880__$2);var size__14513__auto__ = cljs.core.count.call(null,c__14512__auto__);var b__76882 = cljs.core.chunk_buffer.call(null,size__14513__auto__);if((function (){var i__76881 = 0;while(true){
if((i__76881 < size__14513__auto__))
{var i = cljs.core._nth.call(null,c__14512__auto__,i__76881);cljs.core.chunk_append.call(null,b__76882,(function (){var x__14128__auto__ = 0;var y__14129__auto__ = (i - ((n - s) - -1));return ((x__14128__auto__ > y__14129__auto__) ? x__14128__auto__ : y__14129__auto__);
})());
{
var G__76883 = (i__76881 + 1);
i__76881 = G__76883;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__76882),iter__76879.call(null,cljs.core.chunk_rest.call(null,s__76880__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__76882),null);
}
} else
{var i = cljs.core.first.call(null,s__76880__$2);return cljs.core.cons.call(null,(function (){var x__14128__auto__ = 0;var y__14129__auto__ = (i - ((n - s) - -1));return ((x__14128__auto__ > y__14129__auto__) ? x__14128__auto__ : y__14129__auto__);
})(),iter__76879.call(null,cljs.core.rest.call(null,s__76880__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14514__auto__.call(null,cljs.core.range.call(null,1,(n + 1)));
})());
} else
{return cljs.core.vec.call(null,cljs.core.repeat.call(null,n,0));
}
});
foundation.app.data.combinatorics.growth_strings_H = (function() {
var growth_strings_H = null;
var growth_strings_H__3 = (function (n,r,s){return growth_strings_H.call(null,n,foundation.app.data.combinatorics.init.call(null,n,s),cljs.core.vec.call(null,cljs.core.repeat.call(null,n,1)),r,s);
});
var growth_strings_H__5 = (function (n,a,b,r,s){return cljs.core.cons.call(null,a,(new cljs.core.LazySeq(null,(function (){if((function (){var and__13809__auto__ = (cljs.core.peek.call(null,b) > cljs.core.peek.call(null,a));if(and__13809__auto__)
{if(cljs.core.truth_(r))
{return (cljs.core.peek.call(null,a) < (r - 1));
} else
{return true;
}
} else
{return and__13809__auto__;
}
})())
{return growth_strings_H.call(null,n,foundation.app.data.combinatorics.update.call(null,a,(n - 1),cljs.core.inc),b,r,s);
} else
{var j = (function (){var j = (n - 2);while(true){
if((function (){var and__13809__auto__ = (a.call(null,j) < b.call(null,j));if(and__13809__auto__)
{var and__13809__auto____$1 = (cljs.core.truth_(r)?(a.call(null,j) < (r - 1)):true);if(and__13809__auto____$1)
{if(cljs.core.truth_(s))
{return (((s - b.call(null,j)) - ((((a.call(null,j) + 1) === b.call(null,j)))?1:0)) <= (n - j));
} else
{return true;
}
} else
{return and__13809__auto____$1;
}
} else
{return and__13809__auto__;
}
})())
{return j;
} else
{{
var G__76886 = (j - 1);
j = G__76886;
continue;
}
}
break;
}
})();if((j === 0))
{return cljs.core.List.EMPTY;
} else
{var a__$1 = foundation.app.data.combinatorics.update.call(null,a,j,cljs.core.inc);var x = (cljs.core.truth_(s)?(s - (b.call(null,j) + ((cljs.core._EQ_.call(null,a__$1.call(null,j),b.call(null,j)))?1:0))):null);var vec__76885 = (function (){var a__$2 = a__$1;var b__$1 = b;var i = (j + 1);var current_max = (b__$1.call(null,j) + (((b__$1.call(null,j) === a__$2.call(null,j)))?1:0));while(true){
if((i === n))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$2,b__$1], null);
} else
{if(cljs.core.truth_((function (){var and__13809__auto__ = s;if(cljs.core.truth_(and__13809__auto__))
{return (i > ((n - x) - 1));
} else
{return and__13809__auto__;
}
})()))
{var new_a_i = ((i - n) + s);{
var G__76887 = cljs.core.assoc.call(null,a__$2,i,new_a_i);
var G__76888 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__76889 = (i + 1);
var G__76890 = (function (){var x__14128__auto__ = current_max;var y__14129__auto__ = (new_a_i + 1);return ((x__14128__auto__ > y__14129__auto__) ? x__14128__auto__ : y__14129__auto__);
})();
a__$2 = G__76887;
b__$1 = G__76888;
i = G__76889;
current_max = G__76890;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__76891 = cljs.core.assoc.call(null,a__$2,i,0);
var G__76892 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__76893 = (i + 1);
var G__76894 = current_max;
a__$2 = G__76891;
b__$1 = G__76892;
i = G__76893;
current_max = G__76894;
continue;
}
} else
{return null;
}
}
}
break;
}
})();var a__$2 = cljs.core.nth.call(null,vec__76885,0,null);var b__$1 = cljs.core.nth.call(null,vec__76885,1,null);return growth_strings_H.call(null,n,a__$2,b__$1,r,s);
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
var lex_partitions_H__delegate = function (N,p__76895){var map__76901 = p__76895;var map__76901__$1 = ((cljs.core.seq_QMARK_.call(null,map__76901))?cljs.core.apply.call(null,cljs.core.hash_map,map__76901):map__76901);var from = cljs.core.get.call(null,map__76901__$1,new cljs.core.Keyword(null,"min","min",1014012356));var to = cljs.core.get.call(null,map__76901__$1,new cljs.core.Keyword(null,"max","max",1014012118));if(cljs.core._EQ_.call(null,N,0))
{if((((function (){var or__13821__auto__ = from;if(cljs.core.truth_(or__13821__auto__))
{return or__13821__auto__;
} else
{return 0;
}
})() <= 0)) && ((0 <= (function (){var or__13821__auto__ = to;if(cljs.core.truth_(or__13821__auto__))
{return or__13821__auto__;
} else
{return 0;
}
})())))
{return cljs.core.list(cljs.core.List.EMPTY);
} else
{return cljs.core.List.EMPTY;
}
} else
{var from__$1 = (cljs.core.truth_((function (){var and__13809__auto__ = from;if(cljs.core.truth_(and__13809__auto__))
{return (from <= 1);
} else
{return and__13809__auto__;
}
})())?null:from);var to__$1 = (cljs.core.truth_((function (){var and__13809__auto__ = to;if(cljs.core.truth_(and__13809__auto__))
{return (to >= N);
} else
{return and__13809__auto__;
}
})())?null:to);if(!(((1 <= (function (){var or__13821__auto__ = from__$1;if(cljs.core.truth_(or__13821__auto__))
{return or__13821__auto__;
} else
{return 1;
}
})())) && ((((function (){var or__13821__auto__ = from__$1;if(cljs.core.truth_(or__13821__auto__))
{return or__13821__auto__;
} else
{return 1;
}
})() <= (function (){var or__13821__auto__ = to__$1;if(cljs.core.truth_(or__13821__auto__))
{return or__13821__auto__;
} else
{return N;
}
})())) && (((function (){var or__13821__auto__ = to__$1;if(cljs.core.truth_(or__13821__auto__))
{return or__13821__auto__;
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
{var growth_strings = foundation.app.data.combinatorics.growth_strings_H.call(null,N,to__$1,from__$1);var iter__14514__auto__ = (function iter__76902(s__76903){return (new cljs.core.LazySeq(null,(function (){var s__76903__$1 = s__76903;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__76903__$1);if(temp__4092__auto__)
{var s__76903__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__76903__$2))
{var c__14512__auto__ = cljs.core.chunk_first.call(null,s__76903__$2);var size__14513__auto__ = cljs.core.count.call(null,c__14512__auto__);var b__76905 = cljs.core.chunk_buffer.call(null,size__14513__auto__);if((function (){var i__76904 = 0;while(true){
if((i__76904 < size__14513__auto__))
{var growth_string = cljs.core._nth.call(null,c__14512__auto__,i__76904);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));cljs.core.chunk_append.call(null,b__76905,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))));
{
var G__76906 = (i__76904 + 1);
i__76904 = G__76906;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__76905),iter__76902.call(null,cljs.core.chunk_rest.call(null,s__76903__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__76905),null);
}
} else
{var growth_string = cljs.core.first.call(null,s__76903__$2);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));return cljs.core.cons.call(null,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))),iter__76902.call(null,cljs.core.rest.call(null,s__76903__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14514__auto__.call(null,growth_strings);
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
var p__76895 = null;if (arguments.length > 1) {
  p__76895 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return lex_partitions_H__delegate.call(this,N,p__76895);};
lex_partitions_H.cljs$lang$maxFixedArity = 1;
lex_partitions_H.cljs$lang$applyTo = (function (arglist__76907){
var N = cljs.core.first(arglist__76907);
var p__76895 = cljs.core.rest(arglist__76907);
return lex_partitions_H__delegate(N,p__76895);
});
lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic = lex_partitions_H__delegate;
return lex_partitions_H;
})()
;
/**
* @param {...*} var_args
*/
foundation.app.data.combinatorics.partitions_H = (function() { 
var partitions_H__delegate = function (items,args){var items__$1 = cljs.core.vec.call(null,items);var N = cljs.core.count.call(null,items__$1);var lex = cljs.core.apply.call(null,foundation.app.data.combinatorics.lex_partitions_H,N,args);var iter__14514__auto__ = (function iter__76928(s__76929){return (new cljs.core.LazySeq(null,(function (){var s__76929__$1 = s__76929;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__76929__$1);if(temp__4092__auto__)
{var s__76929__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__76929__$2))
{var c__14512__auto__ = cljs.core.chunk_first.call(null,s__76929__$2);var size__14513__auto__ = cljs.core.count.call(null,c__14512__auto__);var b__76931 = cljs.core.chunk_buffer.call(null,size__14513__auto__);if((function (){var i__76930 = 0;while(true){
if((i__76930 < size__14513__auto__))
{var parts = cljs.core._nth.call(null,c__14512__auto__,i__76930);cljs.core.chunk_append.call(null,b__76931,(function (){var iter__14514__auto__ = ((function (i__76930,parts,c__14512__auto__,size__14513__auto__,b__76931,s__76929__$2,temp__4092__auto__){
return (function iter__76940(s__76941){return (new cljs.core.LazySeq(null,((function (i__76930,parts,c__14512__auto__,size__14513__auto__,b__76931,s__76929__$2,temp__4092__auto__){
return (function (){var s__76941__$1 = s__76941;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__76941__$1);if(temp__4092__auto____$1)
{var s__76941__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__76941__$2))
{var c__14512__auto____$1 = cljs.core.chunk_first.call(null,s__76941__$2);var size__14513__auto____$1 = cljs.core.count.call(null,c__14512__auto____$1);var b__76943 = cljs.core.chunk_buffer.call(null,size__14513__auto____$1);if((function (){var i__76942 = 0;while(true){
if((i__76942 < size__14513__auto____$1))
{var part = cljs.core._nth.call(null,c__14512__auto____$1,i__76942);cljs.core.chunk_append.call(null,b__76943,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__76942,i__76930,part,c__14512__auto____$1,size__14513__auto____$1,b__76943,s__76941__$2,temp__4092__auto____$1,parts,c__14512__auto__,size__14513__auto__,b__76931,s__76929__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__76942,i__76930,part,c__14512__auto____$1,size__14513__auto____$1,b__76943,s__76941__$2,temp__4092__auto____$1,parts,c__14512__auto__,size__14513__auto__,b__76931,s__76929__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__76948 = (i__76942 + 1);
i__76942 = G__76948;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__76943),iter__76940.call(null,cljs.core.chunk_rest.call(null,s__76941__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__76943),null);
}
} else
{var part = cljs.core.first.call(null,s__76941__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__76930,part,s__76941__$2,temp__4092__auto____$1,parts,c__14512__auto__,size__14513__auto__,b__76931,s__76929__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__76930,part,s__76941__$2,temp__4092__auto____$1,parts,c__14512__auto__,size__14513__auto__,b__76931,s__76929__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__76940.call(null,cljs.core.rest.call(null,s__76941__$2)));
}
} else
{return null;
}
break;
}
});})(i__76930,parts,c__14512__auto__,size__14513__auto__,b__76931,s__76929__$2,temp__4092__auto__))
,null,null));
});})(i__76930,parts,c__14512__auto__,size__14513__auto__,b__76931,s__76929__$2,temp__4092__auto__))
;return iter__14514__auto__.call(null,parts);
})());
{
var G__76949 = (i__76930 + 1);
i__76930 = G__76949;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__76931),iter__76928.call(null,cljs.core.chunk_rest.call(null,s__76929__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__76931),null);
}
} else
{var parts = cljs.core.first.call(null,s__76929__$2);return cljs.core.cons.call(null,(function (){var iter__14514__auto__ = ((function (parts,s__76929__$2,temp__4092__auto__){
return (function iter__76944(s__76945){return (new cljs.core.LazySeq(null,((function (parts,s__76929__$2,temp__4092__auto__){
return (function (){var s__76945__$1 = s__76945;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__76945__$1);if(temp__4092__auto____$1)
{var s__76945__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__76945__$2))
{var c__14512__auto__ = cljs.core.chunk_first.call(null,s__76945__$2);var size__14513__auto__ = cljs.core.count.call(null,c__14512__auto__);var b__76947 = cljs.core.chunk_buffer.call(null,size__14513__auto__);if((function (){var i__76946 = 0;while(true){
if((i__76946 < size__14513__auto__))
{var part = cljs.core._nth.call(null,c__14512__auto__,i__76946);cljs.core.chunk_append.call(null,b__76947,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__76946,part,c__14512__auto__,size__14513__auto__,b__76947,s__76945__$2,temp__4092__auto____$1,parts,s__76929__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__76946,part,c__14512__auto__,size__14513__auto__,b__76947,s__76945__$2,temp__4092__auto____$1,parts,s__76929__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__76950 = (i__76946 + 1);
i__76946 = G__76950;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__76947),iter__76944.call(null,cljs.core.chunk_rest.call(null,s__76945__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__76947),null);
}
} else
{var part = cljs.core.first.call(null,s__76945__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (part,s__76945__$2,temp__4092__auto____$1,parts,s__76929__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(part,s__76945__$2,temp__4092__auto____$1,parts,s__76929__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__76944.call(null,cljs.core.rest.call(null,s__76945__$2)));
}
} else
{return null;
}
break;
}
});})(parts,s__76929__$2,temp__4092__auto__))
,null,null));
});})(parts,s__76929__$2,temp__4092__auto__))
;return iter__14514__auto__.call(null,parts);
})(),iter__76928.call(null,cljs.core.rest.call(null,s__76929__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14514__auto__.call(null,lex);
};
var partitions_H = function (items,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions_H__delegate.call(this,items,args);};
partitions_H.cljs$lang$maxFixedArity = 1;
partitions_H.cljs$lang$applyTo = (function (arglist__76951){
var items = cljs.core.first(arglist__76951);
var args = cljs.core.rest(arglist__76951);
return partitions_H__delegate(items,args);
});
partitions_H.cljs$core$IFn$_invoke$arity$variadic = partitions_H__delegate;
return partitions_H;
})()
;
foundation.app.data.combinatorics.multiset_partitions_M = (function() {
var multiset_partitions_M = null;
var multiset_partitions_M__3 = (function (multiset,r,s){var n = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,multiset));var m = cljs.core.count.call(null,multiset);var f = cljs.core.PersistentVector.EMPTY;var c = cljs.core.PersistentVector.EMPTY;var u = cljs.core.PersistentVector.EMPTY;var v = cljs.core.PersistentVector.EMPTY;var vec__76974 = (function (){var j = 0;var c__$1 = c;var u__$1 = u;var v__$1 = v;while(true){
if(cljs.core._EQ_.call(null,j,m))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,u__$1,v__$1], null);
} else
{{
var G__76996 = (j + 1);
var G__76997 = cljs.core.assoc.call(null,c__$1,j,(j + 1));
var G__76998 = cljs.core.assoc.call(null,u__$1,j,multiset.call(null,(j + 1)));
var G__76999 = cljs.core.assoc.call(null,v__$1,j,multiset.call(null,(j + 1)));
j = G__76996;
c__$1 = G__76997;
u__$1 = G__76998;
v__$1 = G__76999;
continue;
}
}
break;
}
})();var c__$1 = cljs.core.nth.call(null,vec__76974,0,null);var u__$1 = cljs.core.nth.call(null,vec__76974,1,null);var v__$1 = cljs.core.nth.call(null,vec__76974,2,null);var a = 0;var b = m;var l = 0;var f__$1 = cljs.core.assoc.call(null,f,0,0,1,m);var stack = cljs.core.List.EMPTY;return multiset_partitions_M.call(null,n,m,f__$1,c__$1,u__$1,v__$1,a,b,l,r,s);
});
var multiset_partitions_M__11 = (function (n,m,f,c,u,v,a,b,l,r,s){while(true){
var vec__76975 = (function (){var j = a;var k = b;var x = false;var u__$1 = u;var v__$1 = v;var c__$1 = c;while(true){
if((j >= b))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [u__$1,v__$1,c__$1,j,k], null);
} else
{var u__$2 = cljs.core.assoc.call(null,u__$1,k,(u__$1.call(null,j) - v__$1.call(null,j)));if(cljs.core._EQ_.call(null,u__$2.call(null,k),0))
{{
var G__77000 = (j + 1);
var G__77001 = k;
var G__77002 = true;
var G__77003 = u__$2;
var G__77004 = v__$1;
var G__77005 = c__$1;
j = G__77000;
k = G__77001;
x = G__77002;
u__$1 = G__77003;
v__$1 = G__77004;
c__$1 = G__77005;
continue;
}
} else
{if(!(x))
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,(function (){var x__14135__auto__ = v__$1.call(null,j);var y__14136__auto__ = u__$2.call(null,k);return ((x__14135__auto__ < y__14136__auto__) ? x__14135__auto__ : y__14136__auto__);
})());var x__$1 = (u__$2.call(null,k) < v__$2.call(null,j));var k__$1 = (k + 1);var j__$1 = (j + 1);{
var G__77006 = j__$1;
var G__77007 = k__$1;
var G__77008 = x__$1;
var G__77009 = u__$2;
var G__77010 = v__$2;
var G__77011 = c__$2;
j = G__77006;
k = G__77007;
x = G__77008;
u__$1 = G__77009;
v__$1 = G__77010;
c__$1 = G__77011;
continue;
}
} else
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,u__$2.call(null,k));var k__$1 = (k + 1);var j__$1 = (j + 1);{
var G__77012 = j__$1;
var G__77013 = k__$1;
var G__77014 = x;
var G__77015 = u__$2;
var G__77016 = v__$2;
var G__77017 = c__$2;
j = G__77012;
k = G__77013;
x = G__77014;
u__$1 = G__77015;
v__$1 = G__77016;
c__$1 = G__77017;
continue;
}
}
}
}
break;
}
})();var u__$1 = cljs.core.nth.call(null,vec__76975,0,null);var v__$1 = cljs.core.nth.call(null,vec__76975,1,null);var c__$1 = cljs.core.nth.call(null,vec__76975,2,null);var j = cljs.core.nth.call(null,vec__76975,3,null);var k = cljs.core.nth.call(null,vec__76975,4,null);if(cljs.core.truth_((function (){var and__13809__auto__ = r;if(cljs.core.truth_(and__13809__auto__))
{return ((k > b)) && (cljs.core._EQ_.call(null,l,(r - 1)));
} else
{return and__13809__auto__;
}
})()))
{return foundation.app.data.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
} else
{if(cljs.core.truth_((function (){var and__13809__auto__ = s;if(cljs.core.truth_(and__13809__auto__))
{return ((k <= b)) && (((l + 1) < s));
} else
{return and__13809__auto__;
}
})()))
{return foundation.app.data.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
} else
{if((k > b))
{var a__$1 = b;var b__$1 = k;var l__$1 = (l + 1);var f__$1 = cljs.core.assoc.call(null,f,(l__$1 + 1),b__$1);{
var G__77018 = n;
var G__77019 = m;
var G__77020 = f__$1;
var G__77021 = c__$1;
var G__77022 = u__$1;
var G__77023 = v__$1;
var G__77024 = a__$1;
var G__77025 = b__$1;
var G__77026 = l__$1;
var G__77027 = r;
var G__77028 = s;
n = G__77018;
m = G__77019;
f = G__77020;
c = G__77021;
u = G__77022;
v = G__77023;
a = G__77024;
b = G__77025;
l = G__77026;
r = G__77027;
s = G__77028;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var part = (function (){var iter__14514__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s){
return (function iter__76976(s__76977){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s){
return (function (){var s__76977__$1 = s__76977;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__76977__$1);if(temp__4092__auto__)
{var s__76977__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__76977__$2))
{var c__14512__auto__ = cljs.core.chunk_first.call(null,s__76977__$2);var size__14513__auto__ = cljs.core.count.call(null,c__14512__auto__);var b__76979 = cljs.core.chunk_buffer.call(null,size__14513__auto__);if((function (){var i__76978 = 0;while(true){
if((i__76978 < size__14513__auto__))
{var y = cljs.core._nth.call(null,c__14512__auto__,i__76978);cljs.core.chunk_append.call(null,b__76979,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + 1)) - 1);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__14514__auto__ = ((function (i__76978,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__14512__auto__,size__14513__auto__,b__76979,s__76977__$2,temp__4092__auto__){
return (function iter__76988(s__76989){return (new cljs.core.LazySeq(null,((function (i__76978,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__14512__auto__,size__14513__auto__,b__76979,s__76977__$2,temp__4092__auto__){
return (function (){var s__76989__$1 = s__76989;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__76989__$1);if(temp__4092__auto____$1)
{var s__76989__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__76989__$2))
{var c__14512__auto____$1 = cljs.core.chunk_first.call(null,s__76989__$2);var size__14513__auto____$1 = cljs.core.count.call(null,c__14512__auto____$1);var b__76991 = cljs.core.chunk_buffer.call(null,size__14513__auto____$1);if((function (){var i__76990 = 0;while(true){
if((i__76990 < size__14513__auto____$1))
{var z = cljs.core._nth.call(null,c__14512__auto____$1,i__76990);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{cljs.core.chunk_append.call(null,b__76991,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));
{
var G__77029 = (i__76990 + 1);
i__76990 = G__77029;
continue;
}
} else
{{
var G__77030 = (i__76990 + 1);
i__76990 = G__77030;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__76991),iter__76988.call(null,cljs.core.chunk_rest.call(null,s__76989__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__76991),null);
}
} else
{var z = cljs.core.first.call(null,s__76989__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),iter__76988.call(null,cljs.core.rest.call(null,s__76989__$2)));
} else
{{
var G__77031 = cljs.core.rest.call(null,s__76989__$2);
s__76989__$1 = G__77031;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__76978,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__14512__auto__,size__14513__auto__,b__76979,s__76977__$2,temp__4092__auto__))
,null,null));
});})(i__76978,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__14512__auto__,size__14513__auto__,b__76979,s__76977__$2,temp__4092__auto__))
;return iter__14514__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + 1)));
})());
})());
{
var G__77032 = (i__76978 + 1);
i__76978 = G__77032;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__76979),iter__76976.call(null,cljs.core.chunk_rest.call(null,s__76977__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__76979),null);
}
} else
{var y = cljs.core.first.call(null,s__76977__$2);return cljs.core.cons.call(null,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + 1)) - 1);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__14514__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__76977__$2,temp__4092__auto__){
return (function iter__76992(s__76993){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__76977__$2,temp__4092__auto__){
return (function (){var s__76993__$1 = s__76993;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__76993__$1);if(temp__4092__auto____$1)
{var s__76993__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__76993__$2))
{var c__14512__auto__ = cljs.core.chunk_first.call(null,s__76993__$2);var size__14513__auto__ = cljs.core.count.call(null,c__14512__auto__);var b__76995 = cljs.core.chunk_buffer.call(null,size__14513__auto__);if((function (){var i__76994 = 0;while(true){
if((i__76994 < size__14513__auto__))
{var z = cljs.core._nth.call(null,c__14512__auto__,i__76994);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{cljs.core.chunk_append.call(null,b__76995,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));
{
var G__77033 = (i__76994 + 1);
i__76994 = G__77033;
continue;
}
} else
{{
var G__77034 = (i__76994 + 1);
i__76994 = G__77034;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__76995),iter__76992.call(null,cljs.core.chunk_rest.call(null,s__76993__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__76995),null);
}
} else
{var z = cljs.core.first.call(null,s__76993__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),iter__76992.call(null,cljs.core.rest.call(null,s__76993__$2)));
} else
{{
var G__77035 = cljs.core.rest.call(null,s__76993__$2);
s__76993__$1 = G__77035;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__76977__$2,temp__4092__auto__))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__76977__$2,temp__4092__auto__))
;return iter__14514__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + 1)));
})());
})(),iter__76976.call(null,cljs.core.rest.call(null,s__76977__$2)));
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s))
;return iter__14514__auto__.call(null,cljs.core.range.call(null,(l + 1)));
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
var G__77044 = (j - 1);
j = G__77044;
continue;
}
}
break;
}
})();if(cljs.core.truth_((function (){var and__13809__auto__ = r;if(cljs.core.truth_(and__13809__auto__))
{return (cljs.core._EQ_.call(null,j,a)) && ((((v.call(null,j) - 1) * (r - l)) < u.call(null,j)));
} else
{return and__13809__auto__;
}
})()))
{return foundation.app.data.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s);
} else
{if((cljs.core._EQ_.call(null,j,a)) && (cljs.core._EQ_.call(null,v.call(null,j),1)))
{return foundation.app.data.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var v__$1 = foundation.app.data.combinatorics.update.call(null,v,j,cljs.core.dec);var diff_uv = (cljs.core.truth_(s)?cljs.core.apply.call(null,cljs.core._PLUS_,(function (){var iter__14514__auto__ = ((function (v__$1){
return (function iter__77040(s__77041){return (new cljs.core.LazySeq(null,((function (v__$1){
return (function (){var s__77041__$1 = s__77041;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__77041__$1);if(temp__4092__auto__)
{var s__77041__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__77041__$2))
{var c__14512__auto__ = cljs.core.chunk_first.call(null,s__77041__$2);var size__14513__auto__ = cljs.core.count.call(null,c__14512__auto__);var b__77043 = cljs.core.chunk_buffer.call(null,size__14513__auto__);if((function (){var i__77042 = 0;while(true){
if((i__77042 < size__14513__auto__))
{var i = cljs.core._nth.call(null,c__14512__auto__,i__77042);cljs.core.chunk_append.call(null,b__77043,(u.call(null,i) - v__$1.call(null,i)));
{
var G__77045 = (i__77042 + 1);
i__77042 = G__77045;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__77043),iter__77040.call(null,cljs.core.chunk_rest.call(null,s__77041__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__77043),null);
}
} else
{var i = cljs.core.first.call(null,s__77041__$2);return cljs.core.cons.call(null,(u.call(null,i) - v__$1.call(null,i)),iter__77040.call(null,cljs.core.rest.call(null,s__77041__$2)));
}
} else
{return null;
}
break;
}
});})(v__$1))
,null,null));
});})(v__$1))
;return iter__14514__auto__.call(null,cljs.core.range.call(null,a,(j + 1)));
})()):null);var v__$2 = (function (){var ks = cljs.core.range.call(null,(j + 1),b);var v__$2 = v__$1;while(true){
if(cljs.core.empty_QMARK_.call(null,ks))
{return v__$2;
} else
{var k = cljs.core.first.call(null,ks);{
var G__77046 = cljs.core.rest.call(null,ks);
var G__77047 = cljs.core.assoc.call(null,v__$2,k,u.call(null,k));
ks = G__77046;
v__$2 = G__77047;
continue;
}
}
break;
}
})();var min_partitions_after_this = (cljs.core.truth_(s)?(s - (l + 1)):0);var amount_to_dec = (cljs.core.truth_(s)?(function (){var x__14128__auto__ = 0;var y__14129__auto__ = (min_partitions_after_this - diff_uv);return ((x__14128__auto__ > y__14129__auto__) ? x__14128__auto__ : y__14129__auto__);
})():0);var v__$3 = ((cljs.core._EQ_.call(null,amount_to_dec,0))?v__$2:(function (){var k_1 = (b - 1);var v__$3 = v__$2;var amount = amount_to_dec;while(true){
var vk = v__$3.call(null,k_1);if((amount > vk))
{{
var G__77048 = (k_1 - 1);
var G__77049 = cljs.core.assoc.call(null,v__$3,k_1,0);
var G__77050 = (amount - vk);
k_1 = G__77048;
v__$3 = G__77049;
amount = G__77050;
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
var partitions_M__delegate = function (items,p__77051){var map__77109 = p__77051;var map__77109__$1 = ((cljs.core.seq_QMARK_.call(null,map__77109))?cljs.core.apply.call(null,cljs.core.hash_map,map__77109):map__77109);var from = cljs.core.get.call(null,map__77109__$1,new cljs.core.Keyword(null,"min","min",1014012356));var to = cljs.core.get.call(null,map__77109__$1,new cljs.core.Keyword(null,"max","max",1014012118));if(cljs.core._EQ_.call(null,cljs.core.count.call(null,items),0))
{if((((function (){var or__13821__auto__ = from;if(cljs.core.truth_(or__13821__auto__))
{return or__13821__auto__;
} else
{return 0;
}
})() <= 0)) && ((0 <= (function (){var or__13821__auto__ = to;if(cljs.core.truth_(or__13821__auto__))
{return or__13821__auto__;
} else
{return 0;
}
})())))
{return cljs.core.list(cljs.core.List.EMPTY);
} else
{return cljs.core.List.EMPTY;
}
} else
{var items__$1 = cljs.core.vec.call(null,items);var ditems = cljs.core.vec.call(null,cljs.core.distinct.call(null,items__$1));var freqs = cljs.core.frequencies.call(null,items__$1);var N = cljs.core.count.call(null,items__$1);var M = cljs.core.count.call(null,ditems);var from__$1 = (cljs.core.truth_((function (){var and__13809__auto__ = from;if(cljs.core.truth_(and__13809__auto__))
{return (from <= 1);
} else
{return and__13809__auto__;
}
})())?null:from);var to__$1 = (cljs.core.truth_((function (){var and__13809__auto__ = to;if(cljs.core.truth_(and__13809__auto__))
{return (to >= N);
} else
{return and__13809__auto__;
}
})())?null:to);if(!(((1 <= (function (){var or__13821__auto__ = from__$1;if(cljs.core.truth_(or__13821__auto__))
{return or__13821__auto__;
} else
{return 1;
}
})())) && ((((function (){var or__13821__auto__ = from__$1;if(cljs.core.truth_(or__13821__auto__))
{return or__13821__auto__;
} else
{return 1;
}
})() <= (function (){var or__13821__auto__ = to__$1;if(cljs.core.truth_(or__13821__auto__))
{return or__13821__auto__;
} else
{return N;
}
})())) && (((function (){var or__13821__auto__ = to__$1;if(cljs.core.truth_(or__13821__auto__))
{return or__13821__auto__;
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
{var start_multiset = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__14514__auto__ = (function iter__77110(s__77111){return (new cljs.core.LazySeq(null,(function (){var s__77111__$1 = s__77111;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__77111__$1);if(temp__4092__auto__)
{var s__77111__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__77111__$2))
{var c__14512__auto__ = cljs.core.chunk_first.call(null,s__77111__$2);var size__14513__auto__ = cljs.core.count.call(null,c__14512__auto__);var b__77113 = cljs.core.chunk_buffer.call(null,size__14513__auto__);if((function (){var i__77112 = 0;while(true){
if((i__77112 < size__14513__auto__))
{var i = cljs.core._nth.call(null,c__14512__auto__,i__77112);var j = (i + 1);cljs.core.chunk_append.call(null,b__77113,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null));
{
var G__77166 = (i__77112 + 1);
i__77112 = G__77166;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__77113),iter__77110.call(null,cljs.core.chunk_rest.call(null,s__77111__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__77113),null);
}
} else
{var i = cljs.core.first.call(null,s__77111__$2);var j = (i + 1);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null),iter__77110.call(null,cljs.core.rest.call(null,s__77111__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14514__auto__.call(null,cljs.core.range.call(null,M));
})());var parts = foundation.app.data.combinatorics.multiset_partitions_M.call(null,start_multiset,to__$1,from__$1);var iter__14514__auto__ = (function iter__77114(s__77115){return (new cljs.core.LazySeq(null,(function (){var s__77115__$1 = s__77115;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__77115__$1);if(temp__4092__auto__)
{var s__77115__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__77115__$2))
{var c__14512__auto__ = cljs.core.chunk_first.call(null,s__77115__$2);var size__14513__auto__ = cljs.core.count.call(null,c__14512__auto__);var b__77117 = cljs.core.chunk_buffer.call(null,size__14513__auto__);if((function (){var i__77116 = 0;while(true){
if((i__77116 < size__14513__auto__))
{var part = cljs.core._nth.call(null,c__14512__auto__,i__77116);cljs.core.chunk_append.call(null,b__77117,(function (){var iter__14514__auto__ = ((function (i__77116,part,c__14512__auto__,size__14513__auto__,b__77117,s__77115__$2,temp__4092__auto__){
return (function iter__77142(s__77143){return (new cljs.core.LazySeq(null,((function (i__77116,part,c__14512__auto__,size__14513__auto__,b__77117,s__77115__$2,temp__4092__auto__){
return (function (){var s__77143__$1 = s__77143;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__77143__$1);if(temp__4092__auto____$1)
{var s__77143__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__77143__$2))
{var c__14512__auto____$1 = cljs.core.chunk_first.call(null,s__77143__$2);var size__14513__auto____$1 = cljs.core.count.call(null,c__14512__auto____$1);var b__77145 = cljs.core.chunk_buffer.call(null,size__14513__auto____$1);if((function (){var i__77144 = 0;while(true){
if((i__77144 < size__14513__auto____$1))
{var multiset = cljs.core._nth.call(null,c__14512__auto____$1,i__77144);cljs.core.chunk_append.call(null,b__77145,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__77144,i__77116,multiset,c__14512__auto____$1,size__14513__auto____$1,b__77145,s__77143__$2,temp__4092__auto____$1,part,c__14512__auto__,size__14513__auto__,b__77117,s__77115__$2,temp__4092__auto__){
return (function (p__77150){var vec__77151 = p__77150;var index = cljs.core.nth.call(null,vec__77151,0,null);var numtimes = cljs.core.nth.call(null,vec__77151,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__77144,i__77116,multiset,c__14512__auto____$1,size__14513__auto____$1,b__77145,s__77143__$2,temp__4092__auto____$1,part,c__14512__auto__,size__14513__auto__,b__77117,s__77115__$2,temp__4092__auto__))
,multiset)));
{
var G__77167 = (i__77144 + 1);
i__77144 = G__77167;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__77145),iter__77142.call(null,cljs.core.chunk_rest.call(null,s__77143__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__77145),null);
}
} else
{var multiset = cljs.core.first.call(null,s__77143__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__77116,multiset,s__77143__$2,temp__4092__auto____$1,part,c__14512__auto__,size__14513__auto__,b__77117,s__77115__$2,temp__4092__auto__){
return (function (p__77152){var vec__77153 = p__77152;var index = cljs.core.nth.call(null,vec__77153,0,null);var numtimes = cljs.core.nth.call(null,vec__77153,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__77116,multiset,s__77143__$2,temp__4092__auto____$1,part,c__14512__auto__,size__14513__auto__,b__77117,s__77115__$2,temp__4092__auto__))
,multiset)),iter__77142.call(null,cljs.core.rest.call(null,s__77143__$2)));
}
} else
{return null;
}
break;
}
});})(i__77116,part,c__14512__auto__,size__14513__auto__,b__77117,s__77115__$2,temp__4092__auto__))
,null,null));
});})(i__77116,part,c__14512__auto__,size__14513__auto__,b__77117,s__77115__$2,temp__4092__auto__))
;return iter__14514__auto__.call(null,part);
})());
{
var G__77168 = (i__77116 + 1);
i__77116 = G__77168;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__77117),iter__77114.call(null,cljs.core.chunk_rest.call(null,s__77115__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__77117),null);
}
} else
{var part = cljs.core.first.call(null,s__77115__$2);return cljs.core.cons.call(null,(function (){var iter__14514__auto__ = ((function (part,s__77115__$2,temp__4092__auto__){
return (function iter__77154(s__77155){return (new cljs.core.LazySeq(null,((function (part,s__77115__$2,temp__4092__auto__){
return (function (){var s__77155__$1 = s__77155;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__77155__$1);if(temp__4092__auto____$1)
{var s__77155__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__77155__$2))
{var c__14512__auto__ = cljs.core.chunk_first.call(null,s__77155__$2);var size__14513__auto__ = cljs.core.count.call(null,c__14512__auto__);var b__77157 = cljs.core.chunk_buffer.call(null,size__14513__auto__);if((function (){var i__77156 = 0;while(true){
if((i__77156 < size__14513__auto__))
{var multiset = cljs.core._nth.call(null,c__14512__auto__,i__77156);cljs.core.chunk_append.call(null,b__77157,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__77156,multiset,c__14512__auto__,size__14513__auto__,b__77157,s__77155__$2,temp__4092__auto____$1,part,s__77115__$2,temp__4092__auto__){
return (function (p__77162){var vec__77163 = p__77162;var index = cljs.core.nth.call(null,vec__77163,0,null);var numtimes = cljs.core.nth.call(null,vec__77163,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__77156,multiset,c__14512__auto__,size__14513__auto__,b__77157,s__77155__$2,temp__4092__auto____$1,part,s__77115__$2,temp__4092__auto__))
,multiset)));
{
var G__77169 = (i__77156 + 1);
i__77156 = G__77169;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__77157),iter__77154.call(null,cljs.core.chunk_rest.call(null,s__77155__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__77157),null);
}
} else
{var multiset = cljs.core.first.call(null,s__77155__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (multiset,s__77155__$2,temp__4092__auto____$1,part,s__77115__$2,temp__4092__auto__){
return (function (p__77164){var vec__77165 = p__77164;var index = cljs.core.nth.call(null,vec__77165,0,null);var numtimes = cljs.core.nth.call(null,vec__77165,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(multiset,s__77155__$2,temp__4092__auto____$1,part,s__77115__$2,temp__4092__auto__))
,multiset)),iter__77154.call(null,cljs.core.rest.call(null,s__77155__$2)));
}
} else
{return null;
}
break;
}
});})(part,s__77115__$2,temp__4092__auto__))
,null,null));
});})(part,s__77115__$2,temp__4092__auto__))
;return iter__14514__auto__.call(null,part);
})(),iter__77114.call(null,cljs.core.rest.call(null,s__77115__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14514__auto__.call(null,parts);
} else
{return null;
}
}
}
}
};
var partitions_M = function (items,var_args){
var p__77051 = null;if (arguments.length > 1) {
  p__77051 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions_M__delegate.call(this,items,p__77051);};
partitions_M.cljs$lang$maxFixedArity = 1;
partitions_M.cljs$lang$applyTo = (function (arglist__77170){
var items = cljs.core.first(arglist__77170);
var p__77051 = cljs.core.rest(arglist__77170);
return partitions_M__delegate(items,p__77051);
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
partitions.cljs$lang$applyTo = (function (arglist__77171){
var items = cljs.core.first(arglist__77171);
var args = cljs.core.rest(arglist__77171);
return partitions__delegate(items,args);
});
partitions.cljs$core$IFn$_invoke$arity$variadic = partitions__delegate;
return partitions;
})()
;

//# sourceMappingURL=combinatorics.js.map