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
var G__398617 = cljs.core.assoc.call(null,c__$2,(j__$1 - 1),(c__$2.call(null,j__$1) - 1));
var G__398618 = (j__$1 - 1);
c__$2 = G__398617;
j__$1 = G__398618;
continue;
}
}
break;
}
}
}
});
return (new cljs.core.LazySeq(null,(function (){var c = cljs.core.vec.call(null,cljs.core.cons.call(null,null,(function (){var iter__8921__auto__ = (function iter__398613(s__398614){return (new cljs.core.LazySeq(null,(function (){var s__398614__$1 = s__398614;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__398614__$1);if(temp__4092__auto__)
{var s__398614__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__398614__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__398614__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__398616 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__398615 = 0;while(true){
if((i__398615 < size__8920__auto__))
{var j = cljs.core._nth.call(null,c__8919__auto__,i__398615);cljs.core.chunk_append.call(null,b__398616,((j + cnt) + (- (n + 1))));
{
var G__398619 = (i__398615 + 1);
i__398615 = G__398619;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__398616),iter__398613.call(null,cljs.core.chunk_rest.call(null,s__398614__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__398616),null);
}
} else
{var j = cljs.core.first.call(null,s__398614__$2);return cljs.core.cons.call(null,((j + cnt) + (- (n + 1))),iter__398613.call(null,cljs.core.rest.call(null,s__398614__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,cljs.core.range.call(null,1,(n + 1)));
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
{return cljs.core.map.call(null,(function (p1__398620_SHARP_){return cljs.core.map.call(null,v_items,p1__398620_SHARP_);
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
var G__398621 = (i - 1);
var G__398622 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__398621;
v_seqs__$2 = G__398622;
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
cartesian_product.cljs$lang$applyTo = (function (arglist__398623){
var seqs = cljs.core.seq(arglist__398623);
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
var G__398624 = (i - 1);
i = G__398624;
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
var G__398625 = (i - 1);
i = G__398625;
continue;
}
}
break;
}
})();var v__$1 = cljs.core.assoc.call(null,v,j,v.call(null,l),l,vj);var k = (j + 1);var l__$1 = (len - 1);while(true){
if((k < l__$1))
{{
var G__398626 = cljs.core.assoc.call(null,v__$1,k,v__$1.call(null,l__$1),l__$1,v__$1.call(null,k));
var G__398627 = (k + 1);
var G__398628 = (l__$1 - 1);
v__$1 = G__398626;
k = G__398627;
l__$1 = G__398628;
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
foundation.app.data.combinatorics.multi_perm = (function multi_perm(l){var f = cljs.core.frequencies.call(null,l);var v = cljs.core.vec.call(null,cljs.core.keys.call(null,f));var indices = cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__8921__auto__ = ((function (f,v){
return (function iter__398633(s__398634){return (new cljs.core.LazySeq(null,((function (f,v){
return (function (){var s__398634__$1 = s__398634;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__398634__$1);if(temp__4092__auto__)
{var s__398634__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__398634__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__398634__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__398636 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__398635 = 0;while(true){
if((i__398635 < size__8920__auto__))
{var i = cljs.core._nth.call(null,c__8919__auto__,i__398635);cljs.core.chunk_append.call(null,b__398636,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));
{
var G__398637 = (i__398635 + 1);
i__398635 = G__398637;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__398636),iter__398633.call(null,cljs.core.chunk_rest.call(null,s__398634__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__398636),null);
}
} else
{var i = cljs.core.first.call(null,s__398634__$2);return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),iter__398633.call(null,cljs.core.rest.call(null,s__398634__$2)));
}
} else
{return null;
}
break;
}
});})(f,v))
,null,null));
});})(f,v))
;return iter__8921__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,v)));
})());return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.map,v),foundation.app.data.combinatorics.lex_permutations.call(null,indices));
});
/**
* All the distinct permutations of items, lexicographic by index.
*/
foundation.app.data.combinatorics.permutations = (function permutations(items){if(foundation.app.data.combinatorics.sorted_numbers_QMARK_.call(null,items))
{return foundation.app.data.combinatorics.lex_permutations.call(null,items);
} else
{if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core.distinct_QMARK_,items)))
{var v = cljs.core.vec.call(null,items);return cljs.core.map.call(null,(function (p1__398638_SHARP_){return cljs.core.map.call(null,v,p1__398638_SHARP_);
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
{return cljs.core.vec.call(null,(function (){var iter__8921__auto__ = (function iter__398643(s__398644){return (new cljs.core.LazySeq(null,(function (){var s__398644__$1 = s__398644;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__398644__$1);if(temp__4092__auto__)
{var s__398644__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__398644__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__398644__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__398646 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__398645 = 0;while(true){
if((i__398645 < size__8920__auto__))
{var i = cljs.core._nth.call(null,c__8919__auto__,i__398645);cljs.core.chunk_append.call(null,b__398646,(function (){var x__8535__auto__ = 0;var y__8536__auto__ = (i - ((n - s) - -1));return ((x__8535__auto__ > y__8536__auto__) ? x__8535__auto__ : y__8536__auto__);
})());
{
var G__398647 = (i__398645 + 1);
i__398645 = G__398647;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__398646),iter__398643.call(null,cljs.core.chunk_rest.call(null,s__398644__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__398646),null);
}
} else
{var i = cljs.core.first.call(null,s__398644__$2);return cljs.core.cons.call(null,(function (){var x__8535__auto__ = 0;var y__8536__auto__ = (i - ((n - s) - -1));return ((x__8535__auto__ > y__8536__auto__) ? x__8535__auto__ : y__8536__auto__);
})(),iter__398643.call(null,cljs.core.rest.call(null,s__398644__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,cljs.core.range.call(null,1,(n + 1)));
})());
} else
{return cljs.core.vec.call(null,cljs.core.repeat.call(null,n,0));
}
});
foundation.app.data.combinatorics.growth_strings_H = (function() {
var growth_strings_H = null;
var growth_strings_H__3 = (function (n,r,s){return growth_strings_H.call(null,n,foundation.app.data.combinatorics.init.call(null,n,s),cljs.core.vec.call(null,cljs.core.repeat.call(null,n,1)),r,s);
});
var growth_strings_H__5 = (function (n,a,b,r,s){return cljs.core.cons.call(null,a,(new cljs.core.LazySeq(null,(function (){if((function (){var and__8211__auto__ = (cljs.core.peek.call(null,b) > cljs.core.peek.call(null,a));if(and__8211__auto__)
{if(cljs.core.truth_(r))
{return (cljs.core.peek.call(null,a) < (r - 1));
} else
{return true;
}
} else
{return and__8211__auto__;
}
})())
{return growth_strings_H.call(null,n,foundation.app.data.combinatorics.update.call(null,a,(n - 1),cljs.core.inc),b,r,s);
} else
{var j = (function (){var j = (n - 2);while(true){
if((function (){var and__8211__auto__ = (a.call(null,j) < b.call(null,j));if(and__8211__auto__)
{var and__8211__auto____$1 = (cljs.core.truth_(r)?(a.call(null,j) < (r - 1)):true);if(and__8211__auto____$1)
{if(cljs.core.truth_(s))
{return (((s - b.call(null,j)) - ((((a.call(null,j) + 1) === b.call(null,j)))?1:0)) <= (n - j));
} else
{return true;
}
} else
{return and__8211__auto____$1;
}
} else
{return and__8211__auto__;
}
})())
{return j;
} else
{{
var G__398650 = (j - 1);
j = G__398650;
continue;
}
}
break;
}
})();if((j === 0))
{return cljs.core.List.EMPTY;
} else
{var a__$1 = foundation.app.data.combinatorics.update.call(null,a,j,cljs.core.inc);var x = (cljs.core.truth_(s)?(s - (b.call(null,j) + ((cljs.core._EQ_.call(null,a__$1.call(null,j),b.call(null,j)))?1:0))):null);var vec__398649 = (function (){var a__$2 = a__$1;var b__$1 = b;var i = (j + 1);var current_max = (b__$1.call(null,j) + (((b__$1.call(null,j) === a__$2.call(null,j)))?1:0));while(true){
if((i === n))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$2,b__$1], null);
} else
{if(cljs.core.truth_((function (){var and__8211__auto__ = s;if(cljs.core.truth_(and__8211__auto__))
{return (i > ((n - x) - 1));
} else
{return and__8211__auto__;
}
})()))
{var new_a_i = ((i - n) + s);{
var G__398651 = cljs.core.assoc.call(null,a__$2,i,new_a_i);
var G__398652 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__398653 = (i + 1);
var G__398654 = (function (){var x__8535__auto__ = current_max;var y__8536__auto__ = (new_a_i + 1);return ((x__8535__auto__ > y__8536__auto__) ? x__8535__auto__ : y__8536__auto__);
})();
a__$2 = G__398651;
b__$1 = G__398652;
i = G__398653;
current_max = G__398654;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__398655 = cljs.core.assoc.call(null,a__$2,i,0);
var G__398656 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__398657 = (i + 1);
var G__398658 = current_max;
a__$2 = G__398655;
b__$1 = G__398656;
i = G__398657;
current_max = G__398658;
continue;
}
} else
{return null;
}
}
}
break;
}
})();var a__$2 = cljs.core.nth.call(null,vec__398649,0,null);var b__$1 = cljs.core.nth.call(null,vec__398649,1,null);return growth_strings_H.call(null,n,a__$2,b__$1,r,s);
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
var lex_partitions_H__delegate = function (N,p__398659){var map__398665 = p__398659;var map__398665__$1 = ((cljs.core.seq_QMARK_.call(null,map__398665))?cljs.core.apply.call(null,cljs.core.hash_map,map__398665):map__398665);var from = cljs.core.get.call(null,map__398665__$1,new cljs.core.Keyword(null,"min","min",1014012356));var to = cljs.core.get.call(null,map__398665__$1,new cljs.core.Keyword(null,"max","max",1014012118));if(cljs.core._EQ_.call(null,N,0))
{if((((function (){var or__8223__auto__ = from;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return 0;
}
})() <= 0)) && ((0 <= (function (){var or__8223__auto__ = to;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return 0;
}
})())))
{return cljs.core.list(cljs.core.List.EMPTY);
} else
{return cljs.core.List.EMPTY;
}
} else
{var from__$1 = (cljs.core.truth_((function (){var and__8211__auto__ = from;if(cljs.core.truth_(and__8211__auto__))
{return (from <= 1);
} else
{return and__8211__auto__;
}
})())?null:from);var to__$1 = (cljs.core.truth_((function (){var and__8211__auto__ = to;if(cljs.core.truth_(and__8211__auto__))
{return (to >= N);
} else
{return and__8211__auto__;
}
})())?null:to);if(!(((1 <= (function (){var or__8223__auto__ = from__$1;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return 1;
}
})())) && ((((function (){var or__8223__auto__ = from__$1;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return 1;
}
})() <= (function (){var or__8223__auto__ = to__$1;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return N;
}
})())) && (((function (){var or__8223__auto__ = to__$1;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
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
{var growth_strings = foundation.app.data.combinatorics.growth_strings_H.call(null,N,to__$1,from__$1);var iter__8921__auto__ = (function iter__398666(s__398667){return (new cljs.core.LazySeq(null,(function (){var s__398667__$1 = s__398667;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__398667__$1);if(temp__4092__auto__)
{var s__398667__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__398667__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__398667__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__398669 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__398668 = 0;while(true){
if((i__398668 < size__8920__auto__))
{var growth_string = cljs.core._nth.call(null,c__8919__auto__,i__398668);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));cljs.core.chunk_append.call(null,b__398669,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))));
{
var G__398670 = (i__398668 + 1);
i__398668 = G__398670;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__398669),iter__398666.call(null,cljs.core.chunk_rest.call(null,s__398667__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__398669),null);
}
} else
{var growth_string = cljs.core.first.call(null,s__398667__$2);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));return cljs.core.cons.call(null,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))),iter__398666.call(null,cljs.core.rest.call(null,s__398667__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,growth_strings);
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
var p__398659 = null;if (arguments.length > 1) {
  p__398659 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return lex_partitions_H__delegate.call(this,N,p__398659);};
lex_partitions_H.cljs$lang$maxFixedArity = 1;
lex_partitions_H.cljs$lang$applyTo = (function (arglist__398671){
var N = cljs.core.first(arglist__398671);
var p__398659 = cljs.core.rest(arglist__398671);
return lex_partitions_H__delegate(N,p__398659);
});
lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic = lex_partitions_H__delegate;
return lex_partitions_H;
})()
;
/**
* @param {...*} var_args
*/
foundation.app.data.combinatorics.partitions_H = (function() { 
var partitions_H__delegate = function (items,args){var items__$1 = cljs.core.vec.call(null,items);var N = cljs.core.count.call(null,items__$1);var lex = cljs.core.apply.call(null,foundation.app.data.combinatorics.lex_partitions_H,N,args);var iter__8921__auto__ = (function iter__398692(s__398693){return (new cljs.core.LazySeq(null,(function (){var s__398693__$1 = s__398693;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__398693__$1);if(temp__4092__auto__)
{var s__398693__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__398693__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__398693__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__398695 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__398694 = 0;while(true){
if((i__398694 < size__8920__auto__))
{var parts = cljs.core._nth.call(null,c__8919__auto__,i__398694);cljs.core.chunk_append.call(null,b__398695,(function (){var iter__8921__auto__ = ((function (i__398694,parts,c__8919__auto__,size__8920__auto__,b__398695,s__398693__$2,temp__4092__auto__){
return (function iter__398704(s__398705){return (new cljs.core.LazySeq(null,((function (i__398694,parts,c__8919__auto__,size__8920__auto__,b__398695,s__398693__$2,temp__4092__auto__){
return (function (){var s__398705__$1 = s__398705;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__398705__$1);if(temp__4092__auto____$1)
{var s__398705__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__398705__$2))
{var c__8919__auto____$1 = cljs.core.chunk_first.call(null,s__398705__$2);var size__8920__auto____$1 = cljs.core.count.call(null,c__8919__auto____$1);var b__398707 = cljs.core.chunk_buffer.call(null,size__8920__auto____$1);if((function (){var i__398706 = 0;while(true){
if((i__398706 < size__8920__auto____$1))
{var part = cljs.core._nth.call(null,c__8919__auto____$1,i__398706);cljs.core.chunk_append.call(null,b__398707,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__398706,i__398694,part,c__8919__auto____$1,size__8920__auto____$1,b__398707,s__398705__$2,temp__4092__auto____$1,parts,c__8919__auto__,size__8920__auto__,b__398695,s__398693__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__398706,i__398694,part,c__8919__auto____$1,size__8920__auto____$1,b__398707,s__398705__$2,temp__4092__auto____$1,parts,c__8919__auto__,size__8920__auto__,b__398695,s__398693__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__398712 = (i__398706 + 1);
i__398706 = G__398712;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__398707),iter__398704.call(null,cljs.core.chunk_rest.call(null,s__398705__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__398707),null);
}
} else
{var part = cljs.core.first.call(null,s__398705__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__398694,part,s__398705__$2,temp__4092__auto____$1,parts,c__8919__auto__,size__8920__auto__,b__398695,s__398693__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__398694,part,s__398705__$2,temp__4092__auto____$1,parts,c__8919__auto__,size__8920__auto__,b__398695,s__398693__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__398704.call(null,cljs.core.rest.call(null,s__398705__$2)));
}
} else
{return null;
}
break;
}
});})(i__398694,parts,c__8919__auto__,size__8920__auto__,b__398695,s__398693__$2,temp__4092__auto__))
,null,null));
});})(i__398694,parts,c__8919__auto__,size__8920__auto__,b__398695,s__398693__$2,temp__4092__auto__))
;return iter__8921__auto__.call(null,parts);
})());
{
var G__398713 = (i__398694 + 1);
i__398694 = G__398713;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__398695),iter__398692.call(null,cljs.core.chunk_rest.call(null,s__398693__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__398695),null);
}
} else
{var parts = cljs.core.first.call(null,s__398693__$2);return cljs.core.cons.call(null,(function (){var iter__8921__auto__ = ((function (parts,s__398693__$2,temp__4092__auto__){
return (function iter__398708(s__398709){return (new cljs.core.LazySeq(null,((function (parts,s__398693__$2,temp__4092__auto__){
return (function (){var s__398709__$1 = s__398709;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__398709__$1);if(temp__4092__auto____$1)
{var s__398709__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__398709__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__398709__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__398711 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__398710 = 0;while(true){
if((i__398710 < size__8920__auto__))
{var part = cljs.core._nth.call(null,c__8919__auto__,i__398710);cljs.core.chunk_append.call(null,b__398711,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__398710,part,c__8919__auto__,size__8920__auto__,b__398711,s__398709__$2,temp__4092__auto____$1,parts,s__398693__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__398710,part,c__8919__auto__,size__8920__auto__,b__398711,s__398709__$2,temp__4092__auto____$1,parts,s__398693__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__398714 = (i__398710 + 1);
i__398710 = G__398714;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__398711),iter__398708.call(null,cljs.core.chunk_rest.call(null,s__398709__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__398711),null);
}
} else
{var part = cljs.core.first.call(null,s__398709__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (part,s__398709__$2,temp__4092__auto____$1,parts,s__398693__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(part,s__398709__$2,temp__4092__auto____$1,parts,s__398693__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__398708.call(null,cljs.core.rest.call(null,s__398709__$2)));
}
} else
{return null;
}
break;
}
});})(parts,s__398693__$2,temp__4092__auto__))
,null,null));
});})(parts,s__398693__$2,temp__4092__auto__))
;return iter__8921__auto__.call(null,parts);
})(),iter__398692.call(null,cljs.core.rest.call(null,s__398693__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,lex);
};
var partitions_H = function (items,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions_H__delegate.call(this,items,args);};
partitions_H.cljs$lang$maxFixedArity = 1;
partitions_H.cljs$lang$applyTo = (function (arglist__398715){
var items = cljs.core.first(arglist__398715);
var args = cljs.core.rest(arglist__398715);
return partitions_H__delegate(items,args);
});
partitions_H.cljs$core$IFn$_invoke$arity$variadic = partitions_H__delegate;
return partitions_H;
})()
;
foundation.app.data.combinatorics.multiset_partitions_M = (function() {
var multiset_partitions_M = null;
var multiset_partitions_M__3 = (function (multiset,r,s){var n = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,multiset));var m = cljs.core.count.call(null,multiset);var f = cljs.core.PersistentVector.EMPTY;var c = cljs.core.PersistentVector.EMPTY;var u = cljs.core.PersistentVector.EMPTY;var v = cljs.core.PersistentVector.EMPTY;var vec__398738 = (function (){var j = 0;var c__$1 = c;var u__$1 = u;var v__$1 = v;while(true){
if(cljs.core._EQ_.call(null,j,m))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,u__$1,v__$1], null);
} else
{{
var G__398760 = (j + 1);
var G__398761 = cljs.core.assoc.call(null,c__$1,j,(j + 1));
var G__398762 = cljs.core.assoc.call(null,u__$1,j,multiset.call(null,(j + 1)));
var G__398763 = cljs.core.assoc.call(null,v__$1,j,multiset.call(null,(j + 1)));
j = G__398760;
c__$1 = G__398761;
u__$1 = G__398762;
v__$1 = G__398763;
continue;
}
}
break;
}
})();var c__$1 = cljs.core.nth.call(null,vec__398738,0,null);var u__$1 = cljs.core.nth.call(null,vec__398738,1,null);var v__$1 = cljs.core.nth.call(null,vec__398738,2,null);var a = 0;var b = m;var l = 0;var f__$1 = cljs.core.assoc.call(null,f,0,0,1,m);var stack = cljs.core.List.EMPTY;return multiset_partitions_M.call(null,n,m,f__$1,c__$1,u__$1,v__$1,a,b,l,r,s);
});
var multiset_partitions_M__11 = (function (n,m,f,c,u,v,a,b,l,r,s){while(true){
var vec__398739 = (function (){var j = a;var k = b;var x = false;var u__$1 = u;var v__$1 = v;var c__$1 = c;while(true){
if((j >= b))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [u__$1,v__$1,c__$1,j,k], null);
} else
{var u__$2 = cljs.core.assoc.call(null,u__$1,k,(u__$1.call(null,j) - v__$1.call(null,j)));if(cljs.core._EQ_.call(null,u__$2.call(null,k),0))
{{
var G__398764 = (j + 1);
var G__398765 = k;
var G__398766 = true;
var G__398767 = u__$2;
var G__398768 = v__$1;
var G__398769 = c__$1;
j = G__398764;
k = G__398765;
x = G__398766;
u__$1 = G__398767;
v__$1 = G__398768;
c__$1 = G__398769;
continue;
}
} else
{if(!(x))
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,(function (){var x__8542__auto__ = v__$1.call(null,j);var y__8543__auto__ = u__$2.call(null,k);return ((x__8542__auto__ < y__8543__auto__) ? x__8542__auto__ : y__8543__auto__);
})());var x__$1 = (u__$2.call(null,k) < v__$2.call(null,j));var k__$1 = (k + 1);var j__$1 = (j + 1);{
var G__398770 = j__$1;
var G__398771 = k__$1;
var G__398772 = x__$1;
var G__398773 = u__$2;
var G__398774 = v__$2;
var G__398775 = c__$2;
j = G__398770;
k = G__398771;
x = G__398772;
u__$1 = G__398773;
v__$1 = G__398774;
c__$1 = G__398775;
continue;
}
} else
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,u__$2.call(null,k));var k__$1 = (k + 1);var j__$1 = (j + 1);{
var G__398776 = j__$1;
var G__398777 = k__$1;
var G__398778 = x;
var G__398779 = u__$2;
var G__398780 = v__$2;
var G__398781 = c__$2;
j = G__398776;
k = G__398777;
x = G__398778;
u__$1 = G__398779;
v__$1 = G__398780;
c__$1 = G__398781;
continue;
}
}
}
}
break;
}
})();var u__$1 = cljs.core.nth.call(null,vec__398739,0,null);var v__$1 = cljs.core.nth.call(null,vec__398739,1,null);var c__$1 = cljs.core.nth.call(null,vec__398739,2,null);var j = cljs.core.nth.call(null,vec__398739,3,null);var k = cljs.core.nth.call(null,vec__398739,4,null);if(cljs.core.truth_((function (){var and__8211__auto__ = r;if(cljs.core.truth_(and__8211__auto__))
{return ((k > b)) && (cljs.core._EQ_.call(null,l,(r - 1)));
} else
{return and__8211__auto__;
}
})()))
{return foundation.app.data.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
} else
{if(cljs.core.truth_((function (){var and__8211__auto__ = s;if(cljs.core.truth_(and__8211__auto__))
{return ((k <= b)) && (((l + 1) < s));
} else
{return and__8211__auto__;
}
})()))
{return foundation.app.data.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
} else
{if((k > b))
{var a__$1 = b;var b__$1 = k;var l__$1 = (l + 1);var f__$1 = cljs.core.assoc.call(null,f,(l__$1 + 1),b__$1);{
var G__398782 = n;
var G__398783 = m;
var G__398784 = f__$1;
var G__398785 = c__$1;
var G__398786 = u__$1;
var G__398787 = v__$1;
var G__398788 = a__$1;
var G__398789 = b__$1;
var G__398790 = l__$1;
var G__398791 = r;
var G__398792 = s;
n = G__398782;
m = G__398783;
f = G__398784;
c = G__398785;
u = G__398786;
v = G__398787;
a = G__398788;
b = G__398789;
l = G__398790;
r = G__398791;
s = G__398792;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var part = (function (){var iter__8921__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s){
return (function iter__398740(s__398741){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s){
return (function (){var s__398741__$1 = s__398741;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__398741__$1);if(temp__4092__auto__)
{var s__398741__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__398741__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__398741__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__398743 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__398742 = 0;while(true){
if((i__398742 < size__8920__auto__))
{var y = cljs.core._nth.call(null,c__8919__auto__,i__398742);cljs.core.chunk_append.call(null,b__398743,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + 1)) - 1);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8921__auto__ = ((function (i__398742,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8919__auto__,size__8920__auto__,b__398743,s__398741__$2,temp__4092__auto__){
return (function iter__398752(s__398753){return (new cljs.core.LazySeq(null,((function (i__398742,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8919__auto__,size__8920__auto__,b__398743,s__398741__$2,temp__4092__auto__){
return (function (){var s__398753__$1 = s__398753;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__398753__$1);if(temp__4092__auto____$1)
{var s__398753__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__398753__$2))
{var c__8919__auto____$1 = cljs.core.chunk_first.call(null,s__398753__$2);var size__8920__auto____$1 = cljs.core.count.call(null,c__8919__auto____$1);var b__398755 = cljs.core.chunk_buffer.call(null,size__8920__auto____$1);if((function (){var i__398754 = 0;while(true){
if((i__398754 < size__8920__auto____$1))
{var z = cljs.core._nth.call(null,c__8919__auto____$1,i__398754);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{cljs.core.chunk_append.call(null,b__398755,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));
{
var G__398793 = (i__398754 + 1);
i__398754 = G__398793;
continue;
}
} else
{{
var G__398794 = (i__398754 + 1);
i__398754 = G__398794;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__398755),iter__398752.call(null,cljs.core.chunk_rest.call(null,s__398753__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__398755),null);
}
} else
{var z = cljs.core.first.call(null,s__398753__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),iter__398752.call(null,cljs.core.rest.call(null,s__398753__$2)));
} else
{{
var G__398795 = cljs.core.rest.call(null,s__398753__$2);
s__398753__$1 = G__398795;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__398742,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8919__auto__,size__8920__auto__,b__398743,s__398741__$2,temp__4092__auto__))
,null,null));
});})(i__398742,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8919__auto__,size__8920__auto__,b__398743,s__398741__$2,temp__4092__auto__))
;return iter__8921__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + 1)));
})());
})());
{
var G__398796 = (i__398742 + 1);
i__398742 = G__398796;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__398743),iter__398740.call(null,cljs.core.chunk_rest.call(null,s__398741__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__398743),null);
}
} else
{var y = cljs.core.first.call(null,s__398741__$2);return cljs.core.cons.call(null,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + 1)) - 1);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8921__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__398741__$2,temp__4092__auto__){
return (function iter__398756(s__398757){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__398741__$2,temp__4092__auto__){
return (function (){var s__398757__$1 = s__398757;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__398757__$1);if(temp__4092__auto____$1)
{var s__398757__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__398757__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__398757__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__398759 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__398758 = 0;while(true){
if((i__398758 < size__8920__auto__))
{var z = cljs.core._nth.call(null,c__8919__auto__,i__398758);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{cljs.core.chunk_append.call(null,b__398759,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));
{
var G__398797 = (i__398758 + 1);
i__398758 = G__398797;
continue;
}
} else
{{
var G__398798 = (i__398758 + 1);
i__398758 = G__398798;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__398759),iter__398756.call(null,cljs.core.chunk_rest.call(null,s__398757__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__398759),null);
}
} else
{var z = cljs.core.first.call(null,s__398757__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),iter__398756.call(null,cljs.core.rest.call(null,s__398757__$2)));
} else
{{
var G__398799 = cljs.core.rest.call(null,s__398757__$2);
s__398757__$1 = G__398799;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__398741__$2,temp__4092__auto__))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__398741__$2,temp__4092__auto__))
;return iter__8921__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + 1)));
})());
})(),iter__398740.call(null,cljs.core.rest.call(null,s__398741__$2)));
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s))
;return iter__8921__auto__.call(null,cljs.core.range.call(null,(l + 1)));
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
var G__398808 = (j - 1);
j = G__398808;
continue;
}
}
break;
}
})();if(cljs.core.truth_((function (){var and__8211__auto__ = r;if(cljs.core.truth_(and__8211__auto__))
{return (cljs.core._EQ_.call(null,j,a)) && ((((v.call(null,j) - 1) * (r - l)) < u.call(null,j)));
} else
{return and__8211__auto__;
}
})()))
{return foundation.app.data.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s);
} else
{if((cljs.core._EQ_.call(null,j,a)) && (cljs.core._EQ_.call(null,v.call(null,j),1)))
{return foundation.app.data.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var v__$1 = foundation.app.data.combinatorics.update.call(null,v,j,cljs.core.dec);var diff_uv = (cljs.core.truth_(s)?cljs.core.apply.call(null,cljs.core._PLUS_,(function (){var iter__8921__auto__ = ((function (v__$1){
return (function iter__398804(s__398805){return (new cljs.core.LazySeq(null,((function (v__$1){
return (function (){var s__398805__$1 = s__398805;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__398805__$1);if(temp__4092__auto__)
{var s__398805__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__398805__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__398805__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__398807 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__398806 = 0;while(true){
if((i__398806 < size__8920__auto__))
{var i = cljs.core._nth.call(null,c__8919__auto__,i__398806);cljs.core.chunk_append.call(null,b__398807,(u.call(null,i) - v__$1.call(null,i)));
{
var G__398809 = (i__398806 + 1);
i__398806 = G__398809;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__398807),iter__398804.call(null,cljs.core.chunk_rest.call(null,s__398805__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__398807),null);
}
} else
{var i = cljs.core.first.call(null,s__398805__$2);return cljs.core.cons.call(null,(u.call(null,i) - v__$1.call(null,i)),iter__398804.call(null,cljs.core.rest.call(null,s__398805__$2)));
}
} else
{return null;
}
break;
}
});})(v__$1))
,null,null));
});})(v__$1))
;return iter__8921__auto__.call(null,cljs.core.range.call(null,a,(j + 1)));
})()):null);var v__$2 = (function (){var ks = cljs.core.range.call(null,(j + 1),b);var v__$2 = v__$1;while(true){
if(cljs.core.empty_QMARK_.call(null,ks))
{return v__$2;
} else
{var k = cljs.core.first.call(null,ks);{
var G__398810 = cljs.core.rest.call(null,ks);
var G__398811 = cljs.core.assoc.call(null,v__$2,k,u.call(null,k));
ks = G__398810;
v__$2 = G__398811;
continue;
}
}
break;
}
})();var min_partitions_after_this = (cljs.core.truth_(s)?(s - (l + 1)):0);var amount_to_dec = (cljs.core.truth_(s)?(function (){var x__8535__auto__ = 0;var y__8536__auto__ = (min_partitions_after_this - diff_uv);return ((x__8535__auto__ > y__8536__auto__) ? x__8535__auto__ : y__8536__auto__);
})():0);var v__$3 = ((cljs.core._EQ_.call(null,amount_to_dec,0))?v__$2:(function (){var k_1 = (b - 1);var v__$3 = v__$2;var amount = amount_to_dec;while(true){
var vk = v__$3.call(null,k_1);if((amount > vk))
{{
var G__398812 = (k_1 - 1);
var G__398813 = cljs.core.assoc.call(null,v__$3,k_1,0);
var G__398814 = (amount - vk);
k_1 = G__398812;
v__$3 = G__398813;
amount = G__398814;
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
var partitions_M__delegate = function (items,p__398815){var map__398873 = p__398815;var map__398873__$1 = ((cljs.core.seq_QMARK_.call(null,map__398873))?cljs.core.apply.call(null,cljs.core.hash_map,map__398873):map__398873);var from = cljs.core.get.call(null,map__398873__$1,new cljs.core.Keyword(null,"min","min",1014012356));var to = cljs.core.get.call(null,map__398873__$1,new cljs.core.Keyword(null,"max","max",1014012118));if(cljs.core._EQ_.call(null,cljs.core.count.call(null,items),0))
{if((((function (){var or__8223__auto__ = from;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return 0;
}
})() <= 0)) && ((0 <= (function (){var or__8223__auto__ = to;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return 0;
}
})())))
{return cljs.core.list(cljs.core.List.EMPTY);
} else
{return cljs.core.List.EMPTY;
}
} else
{var items__$1 = cljs.core.vec.call(null,items);var ditems = cljs.core.vec.call(null,cljs.core.distinct.call(null,items__$1));var freqs = cljs.core.frequencies.call(null,items__$1);var N = cljs.core.count.call(null,items__$1);var M = cljs.core.count.call(null,ditems);var from__$1 = (cljs.core.truth_((function (){var and__8211__auto__ = from;if(cljs.core.truth_(and__8211__auto__))
{return (from <= 1);
} else
{return and__8211__auto__;
}
})())?null:from);var to__$1 = (cljs.core.truth_((function (){var and__8211__auto__ = to;if(cljs.core.truth_(and__8211__auto__))
{return (to >= N);
} else
{return and__8211__auto__;
}
})())?null:to);if(!(((1 <= (function (){var or__8223__auto__ = from__$1;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return 1;
}
})())) && ((((function (){var or__8223__auto__ = from__$1;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return 1;
}
})() <= (function (){var or__8223__auto__ = to__$1;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return N;
}
})())) && (((function (){var or__8223__auto__ = to__$1;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
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
{var start_multiset = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8921__auto__ = (function iter__398874(s__398875){return (new cljs.core.LazySeq(null,(function (){var s__398875__$1 = s__398875;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__398875__$1);if(temp__4092__auto__)
{var s__398875__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__398875__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__398875__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__398877 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__398876 = 0;while(true){
if((i__398876 < size__8920__auto__))
{var i = cljs.core._nth.call(null,c__8919__auto__,i__398876);var j = (i + 1);cljs.core.chunk_append.call(null,b__398877,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null));
{
var G__398930 = (i__398876 + 1);
i__398876 = G__398930;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__398877),iter__398874.call(null,cljs.core.chunk_rest.call(null,s__398875__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__398877),null);
}
} else
{var i = cljs.core.first.call(null,s__398875__$2);var j = (i + 1);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null),iter__398874.call(null,cljs.core.rest.call(null,s__398875__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,cljs.core.range.call(null,M));
})());var parts = foundation.app.data.combinatorics.multiset_partitions_M.call(null,start_multiset,to__$1,from__$1);var iter__8921__auto__ = (function iter__398878(s__398879){return (new cljs.core.LazySeq(null,(function (){var s__398879__$1 = s__398879;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__398879__$1);if(temp__4092__auto__)
{var s__398879__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__398879__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__398879__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__398881 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__398880 = 0;while(true){
if((i__398880 < size__8920__auto__))
{var part = cljs.core._nth.call(null,c__8919__auto__,i__398880);cljs.core.chunk_append.call(null,b__398881,(function (){var iter__8921__auto__ = ((function (i__398880,part,c__8919__auto__,size__8920__auto__,b__398881,s__398879__$2,temp__4092__auto__){
return (function iter__398906(s__398907){return (new cljs.core.LazySeq(null,((function (i__398880,part,c__8919__auto__,size__8920__auto__,b__398881,s__398879__$2,temp__4092__auto__){
return (function (){var s__398907__$1 = s__398907;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__398907__$1);if(temp__4092__auto____$1)
{var s__398907__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__398907__$2))
{var c__8919__auto____$1 = cljs.core.chunk_first.call(null,s__398907__$2);var size__8920__auto____$1 = cljs.core.count.call(null,c__8919__auto____$1);var b__398909 = cljs.core.chunk_buffer.call(null,size__8920__auto____$1);if((function (){var i__398908 = 0;while(true){
if((i__398908 < size__8920__auto____$1))
{var multiset = cljs.core._nth.call(null,c__8919__auto____$1,i__398908);cljs.core.chunk_append.call(null,b__398909,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__398908,i__398880,multiset,c__8919__auto____$1,size__8920__auto____$1,b__398909,s__398907__$2,temp__4092__auto____$1,part,c__8919__auto__,size__8920__auto__,b__398881,s__398879__$2,temp__4092__auto__){
return (function (p__398914){var vec__398915 = p__398914;var index = cljs.core.nth.call(null,vec__398915,0,null);var numtimes = cljs.core.nth.call(null,vec__398915,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__398908,i__398880,multiset,c__8919__auto____$1,size__8920__auto____$1,b__398909,s__398907__$2,temp__4092__auto____$1,part,c__8919__auto__,size__8920__auto__,b__398881,s__398879__$2,temp__4092__auto__))
,multiset)));
{
var G__398931 = (i__398908 + 1);
i__398908 = G__398931;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__398909),iter__398906.call(null,cljs.core.chunk_rest.call(null,s__398907__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__398909),null);
}
} else
{var multiset = cljs.core.first.call(null,s__398907__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__398880,multiset,s__398907__$2,temp__4092__auto____$1,part,c__8919__auto__,size__8920__auto__,b__398881,s__398879__$2,temp__4092__auto__){
return (function (p__398916){var vec__398917 = p__398916;var index = cljs.core.nth.call(null,vec__398917,0,null);var numtimes = cljs.core.nth.call(null,vec__398917,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__398880,multiset,s__398907__$2,temp__4092__auto____$1,part,c__8919__auto__,size__8920__auto__,b__398881,s__398879__$2,temp__4092__auto__))
,multiset)),iter__398906.call(null,cljs.core.rest.call(null,s__398907__$2)));
}
} else
{return null;
}
break;
}
});})(i__398880,part,c__8919__auto__,size__8920__auto__,b__398881,s__398879__$2,temp__4092__auto__))
,null,null));
});})(i__398880,part,c__8919__auto__,size__8920__auto__,b__398881,s__398879__$2,temp__4092__auto__))
;return iter__8921__auto__.call(null,part);
})());
{
var G__398932 = (i__398880 + 1);
i__398880 = G__398932;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__398881),iter__398878.call(null,cljs.core.chunk_rest.call(null,s__398879__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__398881),null);
}
} else
{var part = cljs.core.first.call(null,s__398879__$2);return cljs.core.cons.call(null,(function (){var iter__8921__auto__ = ((function (part,s__398879__$2,temp__4092__auto__){
return (function iter__398918(s__398919){return (new cljs.core.LazySeq(null,((function (part,s__398879__$2,temp__4092__auto__){
return (function (){var s__398919__$1 = s__398919;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__398919__$1);if(temp__4092__auto____$1)
{var s__398919__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__398919__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__398919__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__398921 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__398920 = 0;while(true){
if((i__398920 < size__8920__auto__))
{var multiset = cljs.core._nth.call(null,c__8919__auto__,i__398920);cljs.core.chunk_append.call(null,b__398921,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__398920,multiset,c__8919__auto__,size__8920__auto__,b__398921,s__398919__$2,temp__4092__auto____$1,part,s__398879__$2,temp__4092__auto__){
return (function (p__398926){var vec__398927 = p__398926;var index = cljs.core.nth.call(null,vec__398927,0,null);var numtimes = cljs.core.nth.call(null,vec__398927,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__398920,multiset,c__8919__auto__,size__8920__auto__,b__398921,s__398919__$2,temp__4092__auto____$1,part,s__398879__$2,temp__4092__auto__))
,multiset)));
{
var G__398933 = (i__398920 + 1);
i__398920 = G__398933;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__398921),iter__398918.call(null,cljs.core.chunk_rest.call(null,s__398919__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__398921),null);
}
} else
{var multiset = cljs.core.first.call(null,s__398919__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (multiset,s__398919__$2,temp__4092__auto____$1,part,s__398879__$2,temp__4092__auto__){
return (function (p__398928){var vec__398929 = p__398928;var index = cljs.core.nth.call(null,vec__398929,0,null);var numtimes = cljs.core.nth.call(null,vec__398929,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(multiset,s__398919__$2,temp__4092__auto____$1,part,s__398879__$2,temp__4092__auto__))
,multiset)),iter__398918.call(null,cljs.core.rest.call(null,s__398919__$2)));
}
} else
{return null;
}
break;
}
});})(part,s__398879__$2,temp__4092__auto__))
,null,null));
});})(part,s__398879__$2,temp__4092__auto__))
;return iter__8921__auto__.call(null,part);
})(),iter__398878.call(null,cljs.core.rest.call(null,s__398879__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,parts);
} else
{return null;
}
}
}
}
};
var partitions_M = function (items,var_args){
var p__398815 = null;if (arguments.length > 1) {
  p__398815 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions_M__delegate.call(this,items,p__398815);};
partitions_M.cljs$lang$maxFixedArity = 1;
partitions_M.cljs$lang$applyTo = (function (arglist__398934){
var items = cljs.core.first(arglist__398934);
var p__398815 = cljs.core.rest(arglist__398934);
return partitions_M__delegate(items,p__398815);
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
partitions.cljs$lang$applyTo = (function (arglist__398935){
var items = cljs.core.first(arglist__398935);
var args = cljs.core.rest(arglist__398935);
return partitions__delegate(items,args);
});
partitions.cljs$core$IFn$_invoke$arity$variadic = partitions__delegate;
return partitions;
})()
;

//# sourceMappingURL=combinatorics.js.map