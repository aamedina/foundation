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
var G__95942 = cljs.core.assoc.call(null,c__$2,(j__$1 - 1),(c__$2.call(null,j__$1) - 1));
var G__95943 = (j__$1 - 1);
c__$2 = G__95942;
j__$1 = G__95943;
continue;
}
}
break;
}
}
}
});
return (new cljs.core.LazySeq(null,(function (){var c = cljs.core.vec.call(null,cljs.core.cons.call(null,null,(function (){var iter__14515__auto__ = (function iter__95938(s__95939){return (new cljs.core.LazySeq(null,(function (){var s__95939__$1 = s__95939;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__95939__$1);if(temp__4092__auto__)
{var s__95939__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__95939__$2))
{var c__14513__auto__ = cljs.core.chunk_first.call(null,s__95939__$2);var size__14514__auto__ = cljs.core.count.call(null,c__14513__auto__);var b__95941 = cljs.core.chunk_buffer.call(null,size__14514__auto__);if((function (){var i__95940 = 0;while(true){
if((i__95940 < size__14514__auto__))
{var j = cljs.core._nth.call(null,c__14513__auto__,i__95940);cljs.core.chunk_append.call(null,b__95941,((j + cnt) + (- (n + 1))));
{
var G__95944 = (i__95940 + 1);
i__95940 = G__95944;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__95941),iter__95938.call(null,cljs.core.chunk_rest.call(null,s__95939__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__95941),null);
}
} else
{var j = cljs.core.first.call(null,s__95939__$2);return cljs.core.cons.call(null,((j + cnt) + (- (n + 1))),iter__95938.call(null,cljs.core.rest.call(null,s__95939__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14515__auto__.call(null,cljs.core.range.call(null,1,(n + 1)));
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
{return cljs.core.map.call(null,(function (p1__95945_SHARP_){return cljs.core.map.call(null,v_items,p1__95945_SHARP_);
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
var G__95946 = (i - 1);
var G__95947 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__95946;
v_seqs__$2 = G__95947;
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
cartesian_product.cljs$lang$applyTo = (function (arglist__95948){
var seqs = cljs.core.seq(arglist__95948);
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
var G__95949 = (i - 1);
i = G__95949;
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
var G__95950 = (i - 1);
i = G__95950;
continue;
}
}
break;
}
})();var v__$1 = cljs.core.assoc.call(null,v,j,v.call(null,l),l,vj);var k = (j + 1);var l__$1 = (len - 1);while(true){
if((k < l__$1))
{{
var G__95951 = cljs.core.assoc.call(null,v__$1,k,v__$1.call(null,l__$1),l__$1,v__$1.call(null,k));
var G__95952 = (k + 1);
var G__95953 = (l__$1 - 1);
v__$1 = G__95951;
k = G__95952;
l__$1 = G__95953;
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
foundation.app.data.combinatorics.multi_perm = (function multi_perm(l){var f = cljs.core.frequencies.call(null,l);var v = cljs.core.vec.call(null,cljs.core.keys.call(null,f));var indices = cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__14515__auto__ = ((function (f,v){
return (function iter__95958(s__95959){return (new cljs.core.LazySeq(null,((function (f,v){
return (function (){var s__95959__$1 = s__95959;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__95959__$1);if(temp__4092__auto__)
{var s__95959__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__95959__$2))
{var c__14513__auto__ = cljs.core.chunk_first.call(null,s__95959__$2);var size__14514__auto__ = cljs.core.count.call(null,c__14513__auto__);var b__95961 = cljs.core.chunk_buffer.call(null,size__14514__auto__);if((function (){var i__95960 = 0;while(true){
if((i__95960 < size__14514__auto__))
{var i = cljs.core._nth.call(null,c__14513__auto__,i__95960);cljs.core.chunk_append.call(null,b__95961,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));
{
var G__95962 = (i__95960 + 1);
i__95960 = G__95962;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__95961),iter__95958.call(null,cljs.core.chunk_rest.call(null,s__95959__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__95961),null);
}
} else
{var i = cljs.core.first.call(null,s__95959__$2);return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),iter__95958.call(null,cljs.core.rest.call(null,s__95959__$2)));
}
} else
{return null;
}
break;
}
});})(f,v))
,null,null));
});})(f,v))
;return iter__14515__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,v)));
})());return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.map,v),foundation.app.data.combinatorics.lex_permutations.call(null,indices));
});
/**
* All the distinct permutations of items, lexicographic by index.
*/
foundation.app.data.combinatorics.permutations = (function permutations(items){if(foundation.app.data.combinatorics.sorted_numbers_QMARK_.call(null,items))
{return foundation.app.data.combinatorics.lex_permutations.call(null,items);
} else
{if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core.distinct_QMARK_,items)))
{var v = cljs.core.vec.call(null,items);return cljs.core.map.call(null,(function (p1__95963_SHARP_){return cljs.core.map.call(null,v,p1__95963_SHARP_);
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
{return cljs.core.vec.call(null,(function (){var iter__14515__auto__ = (function iter__95968(s__95969){return (new cljs.core.LazySeq(null,(function (){var s__95969__$1 = s__95969;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__95969__$1);if(temp__4092__auto__)
{var s__95969__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__95969__$2))
{var c__14513__auto__ = cljs.core.chunk_first.call(null,s__95969__$2);var size__14514__auto__ = cljs.core.count.call(null,c__14513__auto__);var b__95971 = cljs.core.chunk_buffer.call(null,size__14514__auto__);if((function (){var i__95970 = 0;while(true){
if((i__95970 < size__14514__auto__))
{var i = cljs.core._nth.call(null,c__14513__auto__,i__95970);cljs.core.chunk_append.call(null,b__95971,(function (){var x__14129__auto__ = 0;var y__14130__auto__ = (i - ((n - s) - -1));return ((x__14129__auto__ > y__14130__auto__) ? x__14129__auto__ : y__14130__auto__);
})());
{
var G__95972 = (i__95970 + 1);
i__95970 = G__95972;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__95971),iter__95968.call(null,cljs.core.chunk_rest.call(null,s__95969__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__95971),null);
}
} else
{var i = cljs.core.first.call(null,s__95969__$2);return cljs.core.cons.call(null,(function (){var x__14129__auto__ = 0;var y__14130__auto__ = (i - ((n - s) - -1));return ((x__14129__auto__ > y__14130__auto__) ? x__14129__auto__ : y__14130__auto__);
})(),iter__95968.call(null,cljs.core.rest.call(null,s__95969__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14515__auto__.call(null,cljs.core.range.call(null,1,(n + 1)));
})());
} else
{return cljs.core.vec.call(null,cljs.core.repeat.call(null,n,0));
}
});
foundation.app.data.combinatorics.growth_strings_H = (function() {
var growth_strings_H = null;
var growth_strings_H__3 = (function (n,r,s){return growth_strings_H.call(null,n,foundation.app.data.combinatorics.init.call(null,n,s),cljs.core.vec.call(null,cljs.core.repeat.call(null,n,1)),r,s);
});
var growth_strings_H__5 = (function (n,a,b,r,s){return cljs.core.cons.call(null,a,(new cljs.core.LazySeq(null,(function (){if((function (){var and__13810__auto__ = (cljs.core.peek.call(null,b) > cljs.core.peek.call(null,a));if(and__13810__auto__)
{if(cljs.core.truth_(r))
{return (cljs.core.peek.call(null,a) < (r - 1));
} else
{return true;
}
} else
{return and__13810__auto__;
}
})())
{return growth_strings_H.call(null,n,foundation.app.data.combinatorics.update.call(null,a,(n - 1),cljs.core.inc),b,r,s);
} else
{var j = (function (){var j = (n - 2);while(true){
if((function (){var and__13810__auto__ = (a.call(null,j) < b.call(null,j));if(and__13810__auto__)
{var and__13810__auto____$1 = (cljs.core.truth_(r)?(a.call(null,j) < (r - 1)):true);if(and__13810__auto____$1)
{if(cljs.core.truth_(s))
{return (((s - b.call(null,j)) - ((((a.call(null,j) + 1) === b.call(null,j)))?1:0)) <= (n - j));
} else
{return true;
}
} else
{return and__13810__auto____$1;
}
} else
{return and__13810__auto__;
}
})())
{return j;
} else
{{
var G__95975 = (j - 1);
j = G__95975;
continue;
}
}
break;
}
})();if((j === 0))
{return cljs.core.List.EMPTY;
} else
{var a__$1 = foundation.app.data.combinatorics.update.call(null,a,j,cljs.core.inc);var x = (cljs.core.truth_(s)?(s - (b.call(null,j) + ((cljs.core._EQ_.call(null,a__$1.call(null,j),b.call(null,j)))?1:0))):null);var vec__95974 = (function (){var a__$2 = a__$1;var b__$1 = b;var i = (j + 1);var current_max = (b__$1.call(null,j) + (((b__$1.call(null,j) === a__$2.call(null,j)))?1:0));while(true){
if((i === n))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$2,b__$1], null);
} else
{if(cljs.core.truth_((function (){var and__13810__auto__ = s;if(cljs.core.truth_(and__13810__auto__))
{return (i > ((n - x) - 1));
} else
{return and__13810__auto__;
}
})()))
{var new_a_i = ((i - n) + s);{
var G__95976 = cljs.core.assoc.call(null,a__$2,i,new_a_i);
var G__95977 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__95978 = (i + 1);
var G__95979 = (function (){var x__14129__auto__ = current_max;var y__14130__auto__ = (new_a_i + 1);return ((x__14129__auto__ > y__14130__auto__) ? x__14129__auto__ : y__14130__auto__);
})();
a__$2 = G__95976;
b__$1 = G__95977;
i = G__95978;
current_max = G__95979;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__95980 = cljs.core.assoc.call(null,a__$2,i,0);
var G__95981 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__95982 = (i + 1);
var G__95983 = current_max;
a__$2 = G__95980;
b__$1 = G__95981;
i = G__95982;
current_max = G__95983;
continue;
}
} else
{return null;
}
}
}
break;
}
})();var a__$2 = cljs.core.nth.call(null,vec__95974,0,null);var b__$1 = cljs.core.nth.call(null,vec__95974,1,null);return growth_strings_H.call(null,n,a__$2,b__$1,r,s);
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
var lex_partitions_H__delegate = function (N,p__95984){var map__95990 = p__95984;var map__95990__$1 = ((cljs.core.seq_QMARK_.call(null,map__95990))?cljs.core.apply.call(null,cljs.core.hash_map,map__95990):map__95990);var from = cljs.core.get.call(null,map__95990__$1,new cljs.core.Keyword(null,"min","min",1014012356));var to = cljs.core.get.call(null,map__95990__$1,new cljs.core.Keyword(null,"max","max",1014012118));if(cljs.core._EQ_.call(null,N,0))
{if((((function (){var or__13822__auto__ = from;if(cljs.core.truth_(or__13822__auto__))
{return or__13822__auto__;
} else
{return 0;
}
})() <= 0)) && ((0 <= (function (){var or__13822__auto__ = to;if(cljs.core.truth_(or__13822__auto__))
{return or__13822__auto__;
} else
{return 0;
}
})())))
{return cljs.core.list(cljs.core.List.EMPTY);
} else
{return cljs.core.List.EMPTY;
}
} else
{var from__$1 = (cljs.core.truth_((function (){var and__13810__auto__ = from;if(cljs.core.truth_(and__13810__auto__))
{return (from <= 1);
} else
{return and__13810__auto__;
}
})())?null:from);var to__$1 = (cljs.core.truth_((function (){var and__13810__auto__ = to;if(cljs.core.truth_(and__13810__auto__))
{return (to >= N);
} else
{return and__13810__auto__;
}
})())?null:to);if(!(((1 <= (function (){var or__13822__auto__ = from__$1;if(cljs.core.truth_(or__13822__auto__))
{return or__13822__auto__;
} else
{return 1;
}
})())) && ((((function (){var or__13822__auto__ = from__$1;if(cljs.core.truth_(or__13822__auto__))
{return or__13822__auto__;
} else
{return 1;
}
})() <= (function (){var or__13822__auto__ = to__$1;if(cljs.core.truth_(or__13822__auto__))
{return or__13822__auto__;
} else
{return N;
}
})())) && (((function (){var or__13822__auto__ = to__$1;if(cljs.core.truth_(or__13822__auto__))
{return or__13822__auto__;
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
{var growth_strings = foundation.app.data.combinatorics.growth_strings_H.call(null,N,to__$1,from__$1);var iter__14515__auto__ = (function iter__95991(s__95992){return (new cljs.core.LazySeq(null,(function (){var s__95992__$1 = s__95992;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__95992__$1);if(temp__4092__auto__)
{var s__95992__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__95992__$2))
{var c__14513__auto__ = cljs.core.chunk_first.call(null,s__95992__$2);var size__14514__auto__ = cljs.core.count.call(null,c__14513__auto__);var b__95994 = cljs.core.chunk_buffer.call(null,size__14514__auto__);if((function (){var i__95993 = 0;while(true){
if((i__95993 < size__14514__auto__))
{var growth_string = cljs.core._nth.call(null,c__14513__auto__,i__95993);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));cljs.core.chunk_append.call(null,b__95994,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))));
{
var G__95995 = (i__95993 + 1);
i__95993 = G__95995;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__95994),iter__95991.call(null,cljs.core.chunk_rest.call(null,s__95992__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__95994),null);
}
} else
{var growth_string = cljs.core.first.call(null,s__95992__$2);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));return cljs.core.cons.call(null,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))),iter__95991.call(null,cljs.core.rest.call(null,s__95992__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14515__auto__.call(null,growth_strings);
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
var p__95984 = null;if (arguments.length > 1) {
  p__95984 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return lex_partitions_H__delegate.call(this,N,p__95984);};
lex_partitions_H.cljs$lang$maxFixedArity = 1;
lex_partitions_H.cljs$lang$applyTo = (function (arglist__95996){
var N = cljs.core.first(arglist__95996);
var p__95984 = cljs.core.rest(arglist__95996);
return lex_partitions_H__delegate(N,p__95984);
});
lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic = lex_partitions_H__delegate;
return lex_partitions_H;
})()
;
/**
* @param {...*} var_args
*/
foundation.app.data.combinatorics.partitions_H = (function() { 
var partitions_H__delegate = function (items,args){var items__$1 = cljs.core.vec.call(null,items);var N = cljs.core.count.call(null,items__$1);var lex = cljs.core.apply.call(null,foundation.app.data.combinatorics.lex_partitions_H,N,args);var iter__14515__auto__ = (function iter__96017(s__96018){return (new cljs.core.LazySeq(null,(function (){var s__96018__$1 = s__96018;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__96018__$1);if(temp__4092__auto__)
{var s__96018__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__96018__$2))
{var c__14513__auto__ = cljs.core.chunk_first.call(null,s__96018__$2);var size__14514__auto__ = cljs.core.count.call(null,c__14513__auto__);var b__96020 = cljs.core.chunk_buffer.call(null,size__14514__auto__);if((function (){var i__96019 = 0;while(true){
if((i__96019 < size__14514__auto__))
{var parts = cljs.core._nth.call(null,c__14513__auto__,i__96019);cljs.core.chunk_append.call(null,b__96020,(function (){var iter__14515__auto__ = ((function (i__96019,parts,c__14513__auto__,size__14514__auto__,b__96020,s__96018__$2,temp__4092__auto__){
return (function iter__96029(s__96030){return (new cljs.core.LazySeq(null,((function (i__96019,parts,c__14513__auto__,size__14514__auto__,b__96020,s__96018__$2,temp__4092__auto__){
return (function (){var s__96030__$1 = s__96030;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__96030__$1);if(temp__4092__auto____$1)
{var s__96030__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__96030__$2))
{var c__14513__auto____$1 = cljs.core.chunk_first.call(null,s__96030__$2);var size__14514__auto____$1 = cljs.core.count.call(null,c__14513__auto____$1);var b__96032 = cljs.core.chunk_buffer.call(null,size__14514__auto____$1);if((function (){var i__96031 = 0;while(true){
if((i__96031 < size__14514__auto____$1))
{var part = cljs.core._nth.call(null,c__14513__auto____$1,i__96031);cljs.core.chunk_append.call(null,b__96032,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__96031,i__96019,part,c__14513__auto____$1,size__14514__auto____$1,b__96032,s__96030__$2,temp__4092__auto____$1,parts,c__14513__auto__,size__14514__auto__,b__96020,s__96018__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__96031,i__96019,part,c__14513__auto____$1,size__14514__auto____$1,b__96032,s__96030__$2,temp__4092__auto____$1,parts,c__14513__auto__,size__14514__auto__,b__96020,s__96018__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__96037 = (i__96031 + 1);
i__96031 = G__96037;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__96032),iter__96029.call(null,cljs.core.chunk_rest.call(null,s__96030__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__96032),null);
}
} else
{var part = cljs.core.first.call(null,s__96030__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__96019,part,s__96030__$2,temp__4092__auto____$1,parts,c__14513__auto__,size__14514__auto__,b__96020,s__96018__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__96019,part,s__96030__$2,temp__4092__auto____$1,parts,c__14513__auto__,size__14514__auto__,b__96020,s__96018__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__96029.call(null,cljs.core.rest.call(null,s__96030__$2)));
}
} else
{return null;
}
break;
}
});})(i__96019,parts,c__14513__auto__,size__14514__auto__,b__96020,s__96018__$2,temp__4092__auto__))
,null,null));
});})(i__96019,parts,c__14513__auto__,size__14514__auto__,b__96020,s__96018__$2,temp__4092__auto__))
;return iter__14515__auto__.call(null,parts);
})());
{
var G__96038 = (i__96019 + 1);
i__96019 = G__96038;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__96020),iter__96017.call(null,cljs.core.chunk_rest.call(null,s__96018__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__96020),null);
}
} else
{var parts = cljs.core.first.call(null,s__96018__$2);return cljs.core.cons.call(null,(function (){var iter__14515__auto__ = ((function (parts,s__96018__$2,temp__4092__auto__){
return (function iter__96033(s__96034){return (new cljs.core.LazySeq(null,((function (parts,s__96018__$2,temp__4092__auto__){
return (function (){var s__96034__$1 = s__96034;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__96034__$1);if(temp__4092__auto____$1)
{var s__96034__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__96034__$2))
{var c__14513__auto__ = cljs.core.chunk_first.call(null,s__96034__$2);var size__14514__auto__ = cljs.core.count.call(null,c__14513__auto__);var b__96036 = cljs.core.chunk_buffer.call(null,size__14514__auto__);if((function (){var i__96035 = 0;while(true){
if((i__96035 < size__14514__auto__))
{var part = cljs.core._nth.call(null,c__14513__auto__,i__96035);cljs.core.chunk_append.call(null,b__96036,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__96035,part,c__14513__auto__,size__14514__auto__,b__96036,s__96034__$2,temp__4092__auto____$1,parts,s__96018__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__96035,part,c__14513__auto__,size__14514__auto__,b__96036,s__96034__$2,temp__4092__auto____$1,parts,s__96018__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__96039 = (i__96035 + 1);
i__96035 = G__96039;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__96036),iter__96033.call(null,cljs.core.chunk_rest.call(null,s__96034__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__96036),null);
}
} else
{var part = cljs.core.first.call(null,s__96034__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (part,s__96034__$2,temp__4092__auto____$1,parts,s__96018__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(part,s__96034__$2,temp__4092__auto____$1,parts,s__96018__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__96033.call(null,cljs.core.rest.call(null,s__96034__$2)));
}
} else
{return null;
}
break;
}
});})(parts,s__96018__$2,temp__4092__auto__))
,null,null));
});})(parts,s__96018__$2,temp__4092__auto__))
;return iter__14515__auto__.call(null,parts);
})(),iter__96017.call(null,cljs.core.rest.call(null,s__96018__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14515__auto__.call(null,lex);
};
var partitions_H = function (items,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions_H__delegate.call(this,items,args);};
partitions_H.cljs$lang$maxFixedArity = 1;
partitions_H.cljs$lang$applyTo = (function (arglist__96040){
var items = cljs.core.first(arglist__96040);
var args = cljs.core.rest(arglist__96040);
return partitions_H__delegate(items,args);
});
partitions_H.cljs$core$IFn$_invoke$arity$variadic = partitions_H__delegate;
return partitions_H;
})()
;
foundation.app.data.combinatorics.multiset_partitions_M = (function() {
var multiset_partitions_M = null;
var multiset_partitions_M__3 = (function (multiset,r,s){var n = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,multiset));var m = cljs.core.count.call(null,multiset);var f = cljs.core.PersistentVector.EMPTY;var c = cljs.core.PersistentVector.EMPTY;var u = cljs.core.PersistentVector.EMPTY;var v = cljs.core.PersistentVector.EMPTY;var vec__96063 = (function (){var j = 0;var c__$1 = c;var u__$1 = u;var v__$1 = v;while(true){
if(cljs.core._EQ_.call(null,j,m))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,u__$1,v__$1], null);
} else
{{
var G__96085 = (j + 1);
var G__96086 = cljs.core.assoc.call(null,c__$1,j,(j + 1));
var G__96087 = cljs.core.assoc.call(null,u__$1,j,multiset.call(null,(j + 1)));
var G__96088 = cljs.core.assoc.call(null,v__$1,j,multiset.call(null,(j + 1)));
j = G__96085;
c__$1 = G__96086;
u__$1 = G__96087;
v__$1 = G__96088;
continue;
}
}
break;
}
})();var c__$1 = cljs.core.nth.call(null,vec__96063,0,null);var u__$1 = cljs.core.nth.call(null,vec__96063,1,null);var v__$1 = cljs.core.nth.call(null,vec__96063,2,null);var a = 0;var b = m;var l = 0;var f__$1 = cljs.core.assoc.call(null,f,0,0,1,m);var stack = cljs.core.List.EMPTY;return multiset_partitions_M.call(null,n,m,f__$1,c__$1,u__$1,v__$1,a,b,l,r,s);
});
var multiset_partitions_M__11 = (function (n,m,f,c,u,v,a,b,l,r,s){while(true){
var vec__96064 = (function (){var j = a;var k = b;var x = false;var u__$1 = u;var v__$1 = v;var c__$1 = c;while(true){
if((j >= b))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [u__$1,v__$1,c__$1,j,k], null);
} else
{var u__$2 = cljs.core.assoc.call(null,u__$1,k,(u__$1.call(null,j) - v__$1.call(null,j)));if(cljs.core._EQ_.call(null,u__$2.call(null,k),0))
{{
var G__96089 = (j + 1);
var G__96090 = k;
var G__96091 = true;
var G__96092 = u__$2;
var G__96093 = v__$1;
var G__96094 = c__$1;
j = G__96089;
k = G__96090;
x = G__96091;
u__$1 = G__96092;
v__$1 = G__96093;
c__$1 = G__96094;
continue;
}
} else
{if(!(x))
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,(function (){var x__14136__auto__ = v__$1.call(null,j);var y__14137__auto__ = u__$2.call(null,k);return ((x__14136__auto__ < y__14137__auto__) ? x__14136__auto__ : y__14137__auto__);
})());var x__$1 = (u__$2.call(null,k) < v__$2.call(null,j));var k__$1 = (k + 1);var j__$1 = (j + 1);{
var G__96095 = j__$1;
var G__96096 = k__$1;
var G__96097 = x__$1;
var G__96098 = u__$2;
var G__96099 = v__$2;
var G__96100 = c__$2;
j = G__96095;
k = G__96096;
x = G__96097;
u__$1 = G__96098;
v__$1 = G__96099;
c__$1 = G__96100;
continue;
}
} else
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,u__$2.call(null,k));var k__$1 = (k + 1);var j__$1 = (j + 1);{
var G__96101 = j__$1;
var G__96102 = k__$1;
var G__96103 = x;
var G__96104 = u__$2;
var G__96105 = v__$2;
var G__96106 = c__$2;
j = G__96101;
k = G__96102;
x = G__96103;
u__$1 = G__96104;
v__$1 = G__96105;
c__$1 = G__96106;
continue;
}
}
}
}
break;
}
})();var u__$1 = cljs.core.nth.call(null,vec__96064,0,null);var v__$1 = cljs.core.nth.call(null,vec__96064,1,null);var c__$1 = cljs.core.nth.call(null,vec__96064,2,null);var j = cljs.core.nth.call(null,vec__96064,3,null);var k = cljs.core.nth.call(null,vec__96064,4,null);if(cljs.core.truth_((function (){var and__13810__auto__ = r;if(cljs.core.truth_(and__13810__auto__))
{return ((k > b)) && (cljs.core._EQ_.call(null,l,(r - 1)));
} else
{return and__13810__auto__;
}
})()))
{return foundation.app.data.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
} else
{if(cljs.core.truth_((function (){var and__13810__auto__ = s;if(cljs.core.truth_(and__13810__auto__))
{return ((k <= b)) && (((l + 1) < s));
} else
{return and__13810__auto__;
}
})()))
{return foundation.app.data.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
} else
{if((k > b))
{var a__$1 = b;var b__$1 = k;var l__$1 = (l + 1);var f__$1 = cljs.core.assoc.call(null,f,(l__$1 + 1),b__$1);{
var G__96107 = n;
var G__96108 = m;
var G__96109 = f__$1;
var G__96110 = c__$1;
var G__96111 = u__$1;
var G__96112 = v__$1;
var G__96113 = a__$1;
var G__96114 = b__$1;
var G__96115 = l__$1;
var G__96116 = r;
var G__96117 = s;
n = G__96107;
m = G__96108;
f = G__96109;
c = G__96110;
u = G__96111;
v = G__96112;
a = G__96113;
b = G__96114;
l = G__96115;
r = G__96116;
s = G__96117;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var part = (function (){var iter__14515__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s){
return (function iter__96065(s__96066){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s){
return (function (){var s__96066__$1 = s__96066;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__96066__$1);if(temp__4092__auto__)
{var s__96066__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__96066__$2))
{var c__14513__auto__ = cljs.core.chunk_first.call(null,s__96066__$2);var size__14514__auto__ = cljs.core.count.call(null,c__14513__auto__);var b__96068 = cljs.core.chunk_buffer.call(null,size__14514__auto__);if((function (){var i__96067 = 0;while(true){
if((i__96067 < size__14514__auto__))
{var y = cljs.core._nth.call(null,c__14513__auto__,i__96067);cljs.core.chunk_append.call(null,b__96068,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + 1)) - 1);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__14515__auto__ = ((function (i__96067,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__14513__auto__,size__14514__auto__,b__96068,s__96066__$2,temp__4092__auto__){
return (function iter__96077(s__96078){return (new cljs.core.LazySeq(null,((function (i__96067,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__14513__auto__,size__14514__auto__,b__96068,s__96066__$2,temp__4092__auto__){
return (function (){var s__96078__$1 = s__96078;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__96078__$1);if(temp__4092__auto____$1)
{var s__96078__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__96078__$2))
{var c__14513__auto____$1 = cljs.core.chunk_first.call(null,s__96078__$2);var size__14514__auto____$1 = cljs.core.count.call(null,c__14513__auto____$1);var b__96080 = cljs.core.chunk_buffer.call(null,size__14514__auto____$1);if((function (){var i__96079 = 0;while(true){
if((i__96079 < size__14514__auto____$1))
{var z = cljs.core._nth.call(null,c__14513__auto____$1,i__96079);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{cljs.core.chunk_append.call(null,b__96080,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));
{
var G__96118 = (i__96079 + 1);
i__96079 = G__96118;
continue;
}
} else
{{
var G__96119 = (i__96079 + 1);
i__96079 = G__96119;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__96080),iter__96077.call(null,cljs.core.chunk_rest.call(null,s__96078__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__96080),null);
}
} else
{var z = cljs.core.first.call(null,s__96078__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),iter__96077.call(null,cljs.core.rest.call(null,s__96078__$2)));
} else
{{
var G__96120 = cljs.core.rest.call(null,s__96078__$2);
s__96078__$1 = G__96120;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__96067,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__14513__auto__,size__14514__auto__,b__96068,s__96066__$2,temp__4092__auto__))
,null,null));
});})(i__96067,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__14513__auto__,size__14514__auto__,b__96068,s__96066__$2,temp__4092__auto__))
;return iter__14515__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + 1)));
})());
})());
{
var G__96121 = (i__96067 + 1);
i__96067 = G__96121;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__96068),iter__96065.call(null,cljs.core.chunk_rest.call(null,s__96066__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__96068),null);
}
} else
{var y = cljs.core.first.call(null,s__96066__$2);return cljs.core.cons.call(null,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + 1)) - 1);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__14515__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__96066__$2,temp__4092__auto__){
return (function iter__96081(s__96082){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__96066__$2,temp__4092__auto__){
return (function (){var s__96082__$1 = s__96082;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__96082__$1);if(temp__4092__auto____$1)
{var s__96082__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__96082__$2))
{var c__14513__auto__ = cljs.core.chunk_first.call(null,s__96082__$2);var size__14514__auto__ = cljs.core.count.call(null,c__14513__auto__);var b__96084 = cljs.core.chunk_buffer.call(null,size__14514__auto__);if((function (){var i__96083 = 0;while(true){
if((i__96083 < size__14514__auto__))
{var z = cljs.core._nth.call(null,c__14513__auto__,i__96083);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{cljs.core.chunk_append.call(null,b__96084,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));
{
var G__96122 = (i__96083 + 1);
i__96083 = G__96122;
continue;
}
} else
{{
var G__96123 = (i__96083 + 1);
i__96083 = G__96123;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__96084),iter__96081.call(null,cljs.core.chunk_rest.call(null,s__96082__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__96084),null);
}
} else
{var z = cljs.core.first.call(null,s__96082__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),iter__96081.call(null,cljs.core.rest.call(null,s__96082__$2)));
} else
{{
var G__96124 = cljs.core.rest.call(null,s__96082__$2);
s__96082__$1 = G__96124;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__96066__$2,temp__4092__auto__))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__96066__$2,temp__4092__auto__))
;return iter__14515__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + 1)));
})());
})(),iter__96065.call(null,cljs.core.rest.call(null,s__96066__$2)));
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s))
;return iter__14515__auto__.call(null,cljs.core.range.call(null,(l + 1)));
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
var G__96133 = (j - 1);
j = G__96133;
continue;
}
}
break;
}
})();if(cljs.core.truth_((function (){var and__13810__auto__ = r;if(cljs.core.truth_(and__13810__auto__))
{return (cljs.core._EQ_.call(null,j,a)) && ((((v.call(null,j) - 1) * (r - l)) < u.call(null,j)));
} else
{return and__13810__auto__;
}
})()))
{return foundation.app.data.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s);
} else
{if((cljs.core._EQ_.call(null,j,a)) && (cljs.core._EQ_.call(null,v.call(null,j),1)))
{return foundation.app.data.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var v__$1 = foundation.app.data.combinatorics.update.call(null,v,j,cljs.core.dec);var diff_uv = (cljs.core.truth_(s)?cljs.core.apply.call(null,cljs.core._PLUS_,(function (){var iter__14515__auto__ = ((function (v__$1){
return (function iter__96129(s__96130){return (new cljs.core.LazySeq(null,((function (v__$1){
return (function (){var s__96130__$1 = s__96130;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__96130__$1);if(temp__4092__auto__)
{var s__96130__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__96130__$2))
{var c__14513__auto__ = cljs.core.chunk_first.call(null,s__96130__$2);var size__14514__auto__ = cljs.core.count.call(null,c__14513__auto__);var b__96132 = cljs.core.chunk_buffer.call(null,size__14514__auto__);if((function (){var i__96131 = 0;while(true){
if((i__96131 < size__14514__auto__))
{var i = cljs.core._nth.call(null,c__14513__auto__,i__96131);cljs.core.chunk_append.call(null,b__96132,(u.call(null,i) - v__$1.call(null,i)));
{
var G__96134 = (i__96131 + 1);
i__96131 = G__96134;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__96132),iter__96129.call(null,cljs.core.chunk_rest.call(null,s__96130__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__96132),null);
}
} else
{var i = cljs.core.first.call(null,s__96130__$2);return cljs.core.cons.call(null,(u.call(null,i) - v__$1.call(null,i)),iter__96129.call(null,cljs.core.rest.call(null,s__96130__$2)));
}
} else
{return null;
}
break;
}
});})(v__$1))
,null,null));
});})(v__$1))
;return iter__14515__auto__.call(null,cljs.core.range.call(null,a,(j + 1)));
})()):null);var v__$2 = (function (){var ks = cljs.core.range.call(null,(j + 1),b);var v__$2 = v__$1;while(true){
if(cljs.core.empty_QMARK_.call(null,ks))
{return v__$2;
} else
{var k = cljs.core.first.call(null,ks);{
var G__96135 = cljs.core.rest.call(null,ks);
var G__96136 = cljs.core.assoc.call(null,v__$2,k,u.call(null,k));
ks = G__96135;
v__$2 = G__96136;
continue;
}
}
break;
}
})();var min_partitions_after_this = (cljs.core.truth_(s)?(s - (l + 1)):0);var amount_to_dec = (cljs.core.truth_(s)?(function (){var x__14129__auto__ = 0;var y__14130__auto__ = (min_partitions_after_this - diff_uv);return ((x__14129__auto__ > y__14130__auto__) ? x__14129__auto__ : y__14130__auto__);
})():0);var v__$3 = ((cljs.core._EQ_.call(null,amount_to_dec,0))?v__$2:(function (){var k_1 = (b - 1);var v__$3 = v__$2;var amount = amount_to_dec;while(true){
var vk = v__$3.call(null,k_1);if((amount > vk))
{{
var G__96137 = (k_1 - 1);
var G__96138 = cljs.core.assoc.call(null,v__$3,k_1,0);
var G__96139 = (amount - vk);
k_1 = G__96137;
v__$3 = G__96138;
amount = G__96139;
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
var partitions_M__delegate = function (items,p__96140){var map__96198 = p__96140;var map__96198__$1 = ((cljs.core.seq_QMARK_.call(null,map__96198))?cljs.core.apply.call(null,cljs.core.hash_map,map__96198):map__96198);var from = cljs.core.get.call(null,map__96198__$1,new cljs.core.Keyword(null,"min","min",1014012356));var to = cljs.core.get.call(null,map__96198__$1,new cljs.core.Keyword(null,"max","max",1014012118));if(cljs.core._EQ_.call(null,cljs.core.count.call(null,items),0))
{if((((function (){var or__13822__auto__ = from;if(cljs.core.truth_(or__13822__auto__))
{return or__13822__auto__;
} else
{return 0;
}
})() <= 0)) && ((0 <= (function (){var or__13822__auto__ = to;if(cljs.core.truth_(or__13822__auto__))
{return or__13822__auto__;
} else
{return 0;
}
})())))
{return cljs.core.list(cljs.core.List.EMPTY);
} else
{return cljs.core.List.EMPTY;
}
} else
{var items__$1 = cljs.core.vec.call(null,items);var ditems = cljs.core.vec.call(null,cljs.core.distinct.call(null,items__$1));var freqs = cljs.core.frequencies.call(null,items__$1);var N = cljs.core.count.call(null,items__$1);var M = cljs.core.count.call(null,ditems);var from__$1 = (cljs.core.truth_((function (){var and__13810__auto__ = from;if(cljs.core.truth_(and__13810__auto__))
{return (from <= 1);
} else
{return and__13810__auto__;
}
})())?null:from);var to__$1 = (cljs.core.truth_((function (){var and__13810__auto__ = to;if(cljs.core.truth_(and__13810__auto__))
{return (to >= N);
} else
{return and__13810__auto__;
}
})())?null:to);if(!(((1 <= (function (){var or__13822__auto__ = from__$1;if(cljs.core.truth_(or__13822__auto__))
{return or__13822__auto__;
} else
{return 1;
}
})())) && ((((function (){var or__13822__auto__ = from__$1;if(cljs.core.truth_(or__13822__auto__))
{return or__13822__auto__;
} else
{return 1;
}
})() <= (function (){var or__13822__auto__ = to__$1;if(cljs.core.truth_(or__13822__auto__))
{return or__13822__auto__;
} else
{return N;
}
})())) && (((function (){var or__13822__auto__ = to__$1;if(cljs.core.truth_(or__13822__auto__))
{return or__13822__auto__;
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
{var start_multiset = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__14515__auto__ = (function iter__96199(s__96200){return (new cljs.core.LazySeq(null,(function (){var s__96200__$1 = s__96200;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__96200__$1);if(temp__4092__auto__)
{var s__96200__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__96200__$2))
{var c__14513__auto__ = cljs.core.chunk_first.call(null,s__96200__$2);var size__14514__auto__ = cljs.core.count.call(null,c__14513__auto__);var b__96202 = cljs.core.chunk_buffer.call(null,size__14514__auto__);if((function (){var i__96201 = 0;while(true){
if((i__96201 < size__14514__auto__))
{var i = cljs.core._nth.call(null,c__14513__auto__,i__96201);var j = (i + 1);cljs.core.chunk_append.call(null,b__96202,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null));
{
var G__96255 = (i__96201 + 1);
i__96201 = G__96255;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__96202),iter__96199.call(null,cljs.core.chunk_rest.call(null,s__96200__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__96202),null);
}
} else
{var i = cljs.core.first.call(null,s__96200__$2);var j = (i + 1);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null),iter__96199.call(null,cljs.core.rest.call(null,s__96200__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14515__auto__.call(null,cljs.core.range.call(null,M));
})());var parts = foundation.app.data.combinatorics.multiset_partitions_M.call(null,start_multiset,to__$1,from__$1);var iter__14515__auto__ = (function iter__96203(s__96204){return (new cljs.core.LazySeq(null,(function (){var s__96204__$1 = s__96204;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__96204__$1);if(temp__4092__auto__)
{var s__96204__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__96204__$2))
{var c__14513__auto__ = cljs.core.chunk_first.call(null,s__96204__$2);var size__14514__auto__ = cljs.core.count.call(null,c__14513__auto__);var b__96206 = cljs.core.chunk_buffer.call(null,size__14514__auto__);if((function (){var i__96205 = 0;while(true){
if((i__96205 < size__14514__auto__))
{var part = cljs.core._nth.call(null,c__14513__auto__,i__96205);cljs.core.chunk_append.call(null,b__96206,(function (){var iter__14515__auto__ = ((function (i__96205,part,c__14513__auto__,size__14514__auto__,b__96206,s__96204__$2,temp__4092__auto__){
return (function iter__96231(s__96232){return (new cljs.core.LazySeq(null,((function (i__96205,part,c__14513__auto__,size__14514__auto__,b__96206,s__96204__$2,temp__4092__auto__){
return (function (){var s__96232__$1 = s__96232;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__96232__$1);if(temp__4092__auto____$1)
{var s__96232__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__96232__$2))
{var c__14513__auto____$1 = cljs.core.chunk_first.call(null,s__96232__$2);var size__14514__auto____$1 = cljs.core.count.call(null,c__14513__auto____$1);var b__96234 = cljs.core.chunk_buffer.call(null,size__14514__auto____$1);if((function (){var i__96233 = 0;while(true){
if((i__96233 < size__14514__auto____$1))
{var multiset = cljs.core._nth.call(null,c__14513__auto____$1,i__96233);cljs.core.chunk_append.call(null,b__96234,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__96233,i__96205,multiset,c__14513__auto____$1,size__14514__auto____$1,b__96234,s__96232__$2,temp__4092__auto____$1,part,c__14513__auto__,size__14514__auto__,b__96206,s__96204__$2,temp__4092__auto__){
return (function (p__96239){var vec__96240 = p__96239;var index = cljs.core.nth.call(null,vec__96240,0,null);var numtimes = cljs.core.nth.call(null,vec__96240,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__96233,i__96205,multiset,c__14513__auto____$1,size__14514__auto____$1,b__96234,s__96232__$2,temp__4092__auto____$1,part,c__14513__auto__,size__14514__auto__,b__96206,s__96204__$2,temp__4092__auto__))
,multiset)));
{
var G__96256 = (i__96233 + 1);
i__96233 = G__96256;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__96234),iter__96231.call(null,cljs.core.chunk_rest.call(null,s__96232__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__96234),null);
}
} else
{var multiset = cljs.core.first.call(null,s__96232__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__96205,multiset,s__96232__$2,temp__4092__auto____$1,part,c__14513__auto__,size__14514__auto__,b__96206,s__96204__$2,temp__4092__auto__){
return (function (p__96241){var vec__96242 = p__96241;var index = cljs.core.nth.call(null,vec__96242,0,null);var numtimes = cljs.core.nth.call(null,vec__96242,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__96205,multiset,s__96232__$2,temp__4092__auto____$1,part,c__14513__auto__,size__14514__auto__,b__96206,s__96204__$2,temp__4092__auto__))
,multiset)),iter__96231.call(null,cljs.core.rest.call(null,s__96232__$2)));
}
} else
{return null;
}
break;
}
});})(i__96205,part,c__14513__auto__,size__14514__auto__,b__96206,s__96204__$2,temp__4092__auto__))
,null,null));
});})(i__96205,part,c__14513__auto__,size__14514__auto__,b__96206,s__96204__$2,temp__4092__auto__))
;return iter__14515__auto__.call(null,part);
})());
{
var G__96257 = (i__96205 + 1);
i__96205 = G__96257;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__96206),iter__96203.call(null,cljs.core.chunk_rest.call(null,s__96204__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__96206),null);
}
} else
{var part = cljs.core.first.call(null,s__96204__$2);return cljs.core.cons.call(null,(function (){var iter__14515__auto__ = ((function (part,s__96204__$2,temp__4092__auto__){
return (function iter__96243(s__96244){return (new cljs.core.LazySeq(null,((function (part,s__96204__$2,temp__4092__auto__){
return (function (){var s__96244__$1 = s__96244;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__96244__$1);if(temp__4092__auto____$1)
{var s__96244__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__96244__$2))
{var c__14513__auto__ = cljs.core.chunk_first.call(null,s__96244__$2);var size__14514__auto__ = cljs.core.count.call(null,c__14513__auto__);var b__96246 = cljs.core.chunk_buffer.call(null,size__14514__auto__);if((function (){var i__96245 = 0;while(true){
if((i__96245 < size__14514__auto__))
{var multiset = cljs.core._nth.call(null,c__14513__auto__,i__96245);cljs.core.chunk_append.call(null,b__96246,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__96245,multiset,c__14513__auto__,size__14514__auto__,b__96246,s__96244__$2,temp__4092__auto____$1,part,s__96204__$2,temp__4092__auto__){
return (function (p__96251){var vec__96252 = p__96251;var index = cljs.core.nth.call(null,vec__96252,0,null);var numtimes = cljs.core.nth.call(null,vec__96252,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__96245,multiset,c__14513__auto__,size__14514__auto__,b__96246,s__96244__$2,temp__4092__auto____$1,part,s__96204__$2,temp__4092__auto__))
,multiset)));
{
var G__96258 = (i__96245 + 1);
i__96245 = G__96258;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__96246),iter__96243.call(null,cljs.core.chunk_rest.call(null,s__96244__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__96246),null);
}
} else
{var multiset = cljs.core.first.call(null,s__96244__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (multiset,s__96244__$2,temp__4092__auto____$1,part,s__96204__$2,temp__4092__auto__){
return (function (p__96253){var vec__96254 = p__96253;var index = cljs.core.nth.call(null,vec__96254,0,null);var numtimes = cljs.core.nth.call(null,vec__96254,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(multiset,s__96244__$2,temp__4092__auto____$1,part,s__96204__$2,temp__4092__auto__))
,multiset)),iter__96243.call(null,cljs.core.rest.call(null,s__96244__$2)));
}
} else
{return null;
}
break;
}
});})(part,s__96204__$2,temp__4092__auto__))
,null,null));
});})(part,s__96204__$2,temp__4092__auto__))
;return iter__14515__auto__.call(null,part);
})(),iter__96203.call(null,cljs.core.rest.call(null,s__96204__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14515__auto__.call(null,parts);
} else
{return null;
}
}
}
}
};
var partitions_M = function (items,var_args){
var p__96140 = null;if (arguments.length > 1) {
  p__96140 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions_M__delegate.call(this,items,p__96140);};
partitions_M.cljs$lang$maxFixedArity = 1;
partitions_M.cljs$lang$applyTo = (function (arglist__96259){
var items = cljs.core.first(arglist__96259);
var p__96140 = cljs.core.rest(arglist__96259);
return partitions_M__delegate(items,p__96140);
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
partitions.cljs$lang$applyTo = (function (arglist__96260){
var items = cljs.core.first(arglist__96260);
var args = cljs.core.rest(arglist__96260);
return partitions__delegate(items,args);
});
partitions.cljs$core$IFn$_invoke$arity$variadic = partitions__delegate;
return partitions;
})()
;

//# sourceMappingURL=combinatorics.js.map