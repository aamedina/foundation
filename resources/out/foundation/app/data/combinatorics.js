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
var G__350584 = cljs.core.assoc.call(null,c__$2,(j__$1 - 1),(c__$2.call(null,j__$1) - 1));
var G__350585 = (j__$1 - 1);
c__$2 = G__350584;
j__$1 = G__350585;
continue;
}
}
break;
}
}
}
});
return (new cljs.core.LazySeq(null,(function (){var c = cljs.core.vec.call(null,cljs.core.cons.call(null,null,(function (){var iter__14677__auto__ = (function iter__350580(s__350581){return (new cljs.core.LazySeq(null,(function (){var s__350581__$1 = s__350581;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__350581__$1);if(temp__4092__auto__)
{var s__350581__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__350581__$2))
{var c__14675__auto__ = cljs.core.chunk_first.call(null,s__350581__$2);var size__14676__auto__ = cljs.core.count.call(null,c__14675__auto__);var b__350583 = cljs.core.chunk_buffer.call(null,size__14676__auto__);if((function (){var i__350582 = 0;while(true){
if((i__350582 < size__14676__auto__))
{var j = cljs.core._nth.call(null,c__14675__auto__,i__350582);cljs.core.chunk_append.call(null,b__350583,((j + cnt) + (- (n + 1))));
{
var G__350586 = (i__350582 + 1);
i__350582 = G__350586;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__350583),iter__350580.call(null,cljs.core.chunk_rest.call(null,s__350581__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__350583),null);
}
} else
{var j = cljs.core.first.call(null,s__350581__$2);return cljs.core.cons.call(null,((j + cnt) + (- (n + 1))),iter__350580.call(null,cljs.core.rest.call(null,s__350581__$2)));
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
{return cljs.core.map.call(null,(function (p1__350587_SHARP_){return cljs.core.map.call(null,v_items,p1__350587_SHARP_);
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
var G__350588 = (i - 1);
var G__350589 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__350588;
v_seqs__$2 = G__350589;
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
cartesian_product.cljs$lang$applyTo = (function (arglist__350590){
var seqs = cljs.core.seq(arglist__350590);
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
var G__350591 = (i - 1);
i = G__350591;
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
var G__350592 = (i - 1);
i = G__350592;
continue;
}
}
break;
}
})();var v__$1 = cljs.core.assoc.call(null,v,j,v.call(null,l),l,vj);var k = (j + 1);var l__$1 = (len - 1);while(true){
if((k < l__$1))
{{
var G__350593 = cljs.core.assoc.call(null,v__$1,k,v__$1.call(null,l__$1),l__$1,v__$1.call(null,k));
var G__350594 = (k + 1);
var G__350595 = (l__$1 - 1);
v__$1 = G__350593;
k = G__350594;
l__$1 = G__350595;
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
return (function iter__350600(s__350601){return (new cljs.core.LazySeq(null,((function (f,v){
return (function (){var s__350601__$1 = s__350601;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__350601__$1);if(temp__4092__auto__)
{var s__350601__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__350601__$2))
{var c__14675__auto__ = cljs.core.chunk_first.call(null,s__350601__$2);var size__14676__auto__ = cljs.core.count.call(null,c__14675__auto__);var b__350603 = cljs.core.chunk_buffer.call(null,size__14676__auto__);if((function (){var i__350602 = 0;while(true){
if((i__350602 < size__14676__auto__))
{var i = cljs.core._nth.call(null,c__14675__auto__,i__350602);cljs.core.chunk_append.call(null,b__350603,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));
{
var G__350604 = (i__350602 + 1);
i__350602 = G__350604;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__350603),iter__350600.call(null,cljs.core.chunk_rest.call(null,s__350601__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__350603),null);
}
} else
{var i = cljs.core.first.call(null,s__350601__$2);return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),iter__350600.call(null,cljs.core.rest.call(null,s__350601__$2)));
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
{var v = cljs.core.vec.call(null,items);return cljs.core.map.call(null,(function (p1__350605_SHARP_){return cljs.core.map.call(null,v,p1__350605_SHARP_);
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
{return cljs.core.vec.call(null,(function (){var iter__14677__auto__ = (function iter__350610(s__350611){return (new cljs.core.LazySeq(null,(function (){var s__350611__$1 = s__350611;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__350611__$1);if(temp__4092__auto__)
{var s__350611__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__350611__$2))
{var c__14675__auto__ = cljs.core.chunk_first.call(null,s__350611__$2);var size__14676__auto__ = cljs.core.count.call(null,c__14675__auto__);var b__350613 = cljs.core.chunk_buffer.call(null,size__14676__auto__);if((function (){var i__350612 = 0;while(true){
if((i__350612 < size__14676__auto__))
{var i = cljs.core._nth.call(null,c__14675__auto__,i__350612);cljs.core.chunk_append.call(null,b__350613,(function (){var x__14291__auto__ = 0;var y__14292__auto__ = (i - ((n - s) - -1));return ((x__14291__auto__ > y__14292__auto__) ? x__14291__auto__ : y__14292__auto__);
})());
{
var G__350614 = (i__350612 + 1);
i__350612 = G__350614;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__350613),iter__350610.call(null,cljs.core.chunk_rest.call(null,s__350611__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__350613),null);
}
} else
{var i = cljs.core.first.call(null,s__350611__$2);return cljs.core.cons.call(null,(function (){var x__14291__auto__ = 0;var y__14292__auto__ = (i - ((n - s) - -1));return ((x__14291__auto__ > y__14292__auto__) ? x__14291__auto__ : y__14292__auto__);
})(),iter__350610.call(null,cljs.core.rest.call(null,s__350611__$2)));
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
var G__350617 = (j - 1);
j = G__350617;
continue;
}
}
break;
}
})();if((j === 0))
{return cljs.core.List.EMPTY;
} else
{var a__$1 = foundation.app.data.combinatorics.update.call(null,a,j,cljs.core.inc);var x = (cljs.core.truth_(s)?(s - (b.call(null,j) + ((cljs.core._EQ_.call(null,a__$1.call(null,j),b.call(null,j)))?1:0))):null);var vec__350616 = (function (){var a__$2 = a__$1;var b__$1 = b;var i = (j + 1);var current_max = (b__$1.call(null,j) + (((b__$1.call(null,j) === a__$2.call(null,j)))?1:0));while(true){
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
var G__350618 = cljs.core.assoc.call(null,a__$2,i,new_a_i);
var G__350619 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__350620 = (i + 1);
var G__350621 = (function (){var x__14291__auto__ = current_max;var y__14292__auto__ = (new_a_i + 1);return ((x__14291__auto__ > y__14292__auto__) ? x__14291__auto__ : y__14292__auto__);
})();
a__$2 = G__350618;
b__$1 = G__350619;
i = G__350620;
current_max = G__350621;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__350622 = cljs.core.assoc.call(null,a__$2,i,0);
var G__350623 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__350624 = (i + 1);
var G__350625 = current_max;
a__$2 = G__350622;
b__$1 = G__350623;
i = G__350624;
current_max = G__350625;
continue;
}
} else
{return null;
}
}
}
break;
}
})();var a__$2 = cljs.core.nth.call(null,vec__350616,0,null);var b__$1 = cljs.core.nth.call(null,vec__350616,1,null);return growth_strings_H.call(null,n,a__$2,b__$1,r,s);
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
var lex_partitions_H__delegate = function (N,p__350626){var map__350632 = p__350626;var map__350632__$1 = ((cljs.core.seq_QMARK_.call(null,map__350632))?cljs.core.apply.call(null,cljs.core.hash_map,map__350632):map__350632);var from = cljs.core.get.call(null,map__350632__$1,new cljs.core.Keyword(null,"min","min",1014012356));var to = cljs.core.get.call(null,map__350632__$1,new cljs.core.Keyword(null,"max","max",1014012118));if(cljs.core._EQ_.call(null,N,0))
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
{var growth_strings = foundation.app.data.combinatorics.growth_strings_H.call(null,N,to__$1,from__$1);var iter__14677__auto__ = (function iter__350633(s__350634){return (new cljs.core.LazySeq(null,(function (){var s__350634__$1 = s__350634;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__350634__$1);if(temp__4092__auto__)
{var s__350634__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__350634__$2))
{var c__14675__auto__ = cljs.core.chunk_first.call(null,s__350634__$2);var size__14676__auto__ = cljs.core.count.call(null,c__14675__auto__);var b__350636 = cljs.core.chunk_buffer.call(null,size__14676__auto__);if((function (){var i__350635 = 0;while(true){
if((i__350635 < size__14676__auto__))
{var growth_string = cljs.core._nth.call(null,c__14675__auto__,i__350635);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));cljs.core.chunk_append.call(null,b__350636,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))));
{
var G__350637 = (i__350635 + 1);
i__350635 = G__350637;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__350636),iter__350633.call(null,cljs.core.chunk_rest.call(null,s__350634__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__350636),null);
}
} else
{var growth_string = cljs.core.first.call(null,s__350634__$2);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));return cljs.core.cons.call(null,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))),iter__350633.call(null,cljs.core.rest.call(null,s__350634__$2)));
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
var p__350626 = null;if (arguments.length > 1) {
  p__350626 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return lex_partitions_H__delegate.call(this,N,p__350626);};
lex_partitions_H.cljs$lang$maxFixedArity = 1;
lex_partitions_H.cljs$lang$applyTo = (function (arglist__350638){
var N = cljs.core.first(arglist__350638);
var p__350626 = cljs.core.rest(arglist__350638);
return lex_partitions_H__delegate(N,p__350626);
});
lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic = lex_partitions_H__delegate;
return lex_partitions_H;
})()
;
/**
* @param {...*} var_args
*/
foundation.app.data.combinatorics.partitions_H = (function() { 
var partitions_H__delegate = function (items,args){var items__$1 = cljs.core.vec.call(null,items);var N = cljs.core.count.call(null,items__$1);var lex = cljs.core.apply.call(null,foundation.app.data.combinatorics.lex_partitions_H,N,args);var iter__14677__auto__ = (function iter__350659(s__350660){return (new cljs.core.LazySeq(null,(function (){var s__350660__$1 = s__350660;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__350660__$1);if(temp__4092__auto__)
{var s__350660__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__350660__$2))
{var c__14675__auto__ = cljs.core.chunk_first.call(null,s__350660__$2);var size__14676__auto__ = cljs.core.count.call(null,c__14675__auto__);var b__350662 = cljs.core.chunk_buffer.call(null,size__14676__auto__);if((function (){var i__350661 = 0;while(true){
if((i__350661 < size__14676__auto__))
{var parts = cljs.core._nth.call(null,c__14675__auto__,i__350661);cljs.core.chunk_append.call(null,b__350662,(function (){var iter__14677__auto__ = ((function (i__350661,parts,c__14675__auto__,size__14676__auto__,b__350662,s__350660__$2,temp__4092__auto__){
return (function iter__350671(s__350672){return (new cljs.core.LazySeq(null,((function (i__350661,parts,c__14675__auto__,size__14676__auto__,b__350662,s__350660__$2,temp__4092__auto__){
return (function (){var s__350672__$1 = s__350672;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__350672__$1);if(temp__4092__auto____$1)
{var s__350672__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__350672__$2))
{var c__14675__auto____$1 = cljs.core.chunk_first.call(null,s__350672__$2);var size__14676__auto____$1 = cljs.core.count.call(null,c__14675__auto____$1);var b__350674 = cljs.core.chunk_buffer.call(null,size__14676__auto____$1);if((function (){var i__350673 = 0;while(true){
if((i__350673 < size__14676__auto____$1))
{var part = cljs.core._nth.call(null,c__14675__auto____$1,i__350673);cljs.core.chunk_append.call(null,b__350674,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__350673,i__350661,part,c__14675__auto____$1,size__14676__auto____$1,b__350674,s__350672__$2,temp__4092__auto____$1,parts,c__14675__auto__,size__14676__auto__,b__350662,s__350660__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__350673,i__350661,part,c__14675__auto____$1,size__14676__auto____$1,b__350674,s__350672__$2,temp__4092__auto____$1,parts,c__14675__auto__,size__14676__auto__,b__350662,s__350660__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__350679 = (i__350673 + 1);
i__350673 = G__350679;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__350674),iter__350671.call(null,cljs.core.chunk_rest.call(null,s__350672__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__350674),null);
}
} else
{var part = cljs.core.first.call(null,s__350672__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__350661,part,s__350672__$2,temp__4092__auto____$1,parts,c__14675__auto__,size__14676__auto__,b__350662,s__350660__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__350661,part,s__350672__$2,temp__4092__auto____$1,parts,c__14675__auto__,size__14676__auto__,b__350662,s__350660__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__350671.call(null,cljs.core.rest.call(null,s__350672__$2)));
}
} else
{return null;
}
break;
}
});})(i__350661,parts,c__14675__auto__,size__14676__auto__,b__350662,s__350660__$2,temp__4092__auto__))
,null,null));
});})(i__350661,parts,c__14675__auto__,size__14676__auto__,b__350662,s__350660__$2,temp__4092__auto__))
;return iter__14677__auto__.call(null,parts);
})());
{
var G__350680 = (i__350661 + 1);
i__350661 = G__350680;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__350662),iter__350659.call(null,cljs.core.chunk_rest.call(null,s__350660__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__350662),null);
}
} else
{var parts = cljs.core.first.call(null,s__350660__$2);return cljs.core.cons.call(null,(function (){var iter__14677__auto__ = ((function (parts,s__350660__$2,temp__4092__auto__){
return (function iter__350675(s__350676){return (new cljs.core.LazySeq(null,((function (parts,s__350660__$2,temp__4092__auto__){
return (function (){var s__350676__$1 = s__350676;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__350676__$1);if(temp__4092__auto____$1)
{var s__350676__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__350676__$2))
{var c__14675__auto__ = cljs.core.chunk_first.call(null,s__350676__$2);var size__14676__auto__ = cljs.core.count.call(null,c__14675__auto__);var b__350678 = cljs.core.chunk_buffer.call(null,size__14676__auto__);if((function (){var i__350677 = 0;while(true){
if((i__350677 < size__14676__auto__))
{var part = cljs.core._nth.call(null,c__14675__auto__,i__350677);cljs.core.chunk_append.call(null,b__350678,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__350677,part,c__14675__auto__,size__14676__auto__,b__350678,s__350676__$2,temp__4092__auto____$1,parts,s__350660__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__350677,part,c__14675__auto__,size__14676__auto__,b__350678,s__350676__$2,temp__4092__auto____$1,parts,s__350660__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__350681 = (i__350677 + 1);
i__350677 = G__350681;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__350678),iter__350675.call(null,cljs.core.chunk_rest.call(null,s__350676__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__350678),null);
}
} else
{var part = cljs.core.first.call(null,s__350676__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (part,s__350676__$2,temp__4092__auto____$1,parts,s__350660__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(part,s__350676__$2,temp__4092__auto____$1,parts,s__350660__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__350675.call(null,cljs.core.rest.call(null,s__350676__$2)));
}
} else
{return null;
}
break;
}
});})(parts,s__350660__$2,temp__4092__auto__))
,null,null));
});})(parts,s__350660__$2,temp__4092__auto__))
;return iter__14677__auto__.call(null,parts);
})(),iter__350659.call(null,cljs.core.rest.call(null,s__350660__$2)));
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
partitions_H.cljs$lang$applyTo = (function (arglist__350682){
var items = cljs.core.first(arglist__350682);
var args = cljs.core.rest(arglist__350682);
return partitions_H__delegate(items,args);
});
partitions_H.cljs$core$IFn$_invoke$arity$variadic = partitions_H__delegate;
return partitions_H;
})()
;
foundation.app.data.combinatorics.multiset_partitions_M = (function() {
var multiset_partitions_M = null;
var multiset_partitions_M__3 = (function (multiset,r,s){var n = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,multiset));var m = cljs.core.count.call(null,multiset);var f = cljs.core.PersistentVector.EMPTY;var c = cljs.core.PersistentVector.EMPTY;var u = cljs.core.PersistentVector.EMPTY;var v = cljs.core.PersistentVector.EMPTY;var vec__350705 = (function (){var j = 0;var c__$1 = c;var u__$1 = u;var v__$1 = v;while(true){
if(cljs.core._EQ_.call(null,j,m))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,u__$1,v__$1], null);
} else
{{
var G__350727 = (j + 1);
var G__350728 = cljs.core.assoc.call(null,c__$1,j,(j + 1));
var G__350729 = cljs.core.assoc.call(null,u__$1,j,multiset.call(null,(j + 1)));
var G__350730 = cljs.core.assoc.call(null,v__$1,j,multiset.call(null,(j + 1)));
j = G__350727;
c__$1 = G__350728;
u__$1 = G__350729;
v__$1 = G__350730;
continue;
}
}
break;
}
})();var c__$1 = cljs.core.nth.call(null,vec__350705,0,null);var u__$1 = cljs.core.nth.call(null,vec__350705,1,null);var v__$1 = cljs.core.nth.call(null,vec__350705,2,null);var a = 0;var b = m;var l = 0;var f__$1 = cljs.core.assoc.call(null,f,0,0,1,m);var stack = cljs.core.List.EMPTY;return multiset_partitions_M.call(null,n,m,f__$1,c__$1,u__$1,v__$1,a,b,l,r,s);
});
var multiset_partitions_M__11 = (function (n,m,f,c,u,v,a,b,l,r,s){while(true){
var vec__350706 = (function (){var j = a;var k = b;var x = false;var u__$1 = u;var v__$1 = v;var c__$1 = c;while(true){
if((j >= b))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [u__$1,v__$1,c__$1,j,k], null);
} else
{var u__$2 = cljs.core.assoc.call(null,u__$1,k,(u__$1.call(null,j) - v__$1.call(null,j)));if(cljs.core._EQ_.call(null,u__$2.call(null,k),0))
{{
var G__350731 = (j + 1);
var G__350732 = k;
var G__350733 = true;
var G__350734 = u__$2;
var G__350735 = v__$1;
var G__350736 = c__$1;
j = G__350731;
k = G__350732;
x = G__350733;
u__$1 = G__350734;
v__$1 = G__350735;
c__$1 = G__350736;
continue;
}
} else
{if(!(x))
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,(function (){var x__14298__auto__ = v__$1.call(null,j);var y__14299__auto__ = u__$2.call(null,k);return ((x__14298__auto__ < y__14299__auto__) ? x__14298__auto__ : y__14299__auto__);
})());var x__$1 = (u__$2.call(null,k) < v__$2.call(null,j));var k__$1 = (k + 1);var j__$1 = (j + 1);{
var G__350737 = j__$1;
var G__350738 = k__$1;
var G__350739 = x__$1;
var G__350740 = u__$2;
var G__350741 = v__$2;
var G__350742 = c__$2;
j = G__350737;
k = G__350738;
x = G__350739;
u__$1 = G__350740;
v__$1 = G__350741;
c__$1 = G__350742;
continue;
}
} else
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,u__$2.call(null,k));var k__$1 = (k + 1);var j__$1 = (j + 1);{
var G__350743 = j__$1;
var G__350744 = k__$1;
var G__350745 = x;
var G__350746 = u__$2;
var G__350747 = v__$2;
var G__350748 = c__$2;
j = G__350743;
k = G__350744;
x = G__350745;
u__$1 = G__350746;
v__$1 = G__350747;
c__$1 = G__350748;
continue;
}
}
}
}
break;
}
})();var u__$1 = cljs.core.nth.call(null,vec__350706,0,null);var v__$1 = cljs.core.nth.call(null,vec__350706,1,null);var c__$1 = cljs.core.nth.call(null,vec__350706,2,null);var j = cljs.core.nth.call(null,vec__350706,3,null);var k = cljs.core.nth.call(null,vec__350706,4,null);if(cljs.core.truth_((function (){var and__13967__auto__ = r;if(cljs.core.truth_(and__13967__auto__))
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
var G__350749 = n;
var G__350750 = m;
var G__350751 = f__$1;
var G__350752 = c__$1;
var G__350753 = u__$1;
var G__350754 = v__$1;
var G__350755 = a__$1;
var G__350756 = b__$1;
var G__350757 = l__$1;
var G__350758 = r;
var G__350759 = s;
n = G__350749;
m = G__350750;
f = G__350751;
c = G__350752;
u = G__350753;
v = G__350754;
a = G__350755;
b = G__350756;
l = G__350757;
r = G__350758;
s = G__350759;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var part = (function (){var iter__14677__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s){
return (function iter__350707(s__350708){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s){
return (function (){var s__350708__$1 = s__350708;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__350708__$1);if(temp__4092__auto__)
{var s__350708__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__350708__$2))
{var c__14675__auto__ = cljs.core.chunk_first.call(null,s__350708__$2);var size__14676__auto__ = cljs.core.count.call(null,c__14675__auto__);var b__350710 = cljs.core.chunk_buffer.call(null,size__14676__auto__);if((function (){var i__350709 = 0;while(true){
if((i__350709 < size__14676__auto__))
{var y = cljs.core._nth.call(null,c__14675__auto__,i__350709);cljs.core.chunk_append.call(null,b__350710,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + 1)) - 1);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__14677__auto__ = ((function (i__350709,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__14675__auto__,size__14676__auto__,b__350710,s__350708__$2,temp__4092__auto__){
return (function iter__350719(s__350720){return (new cljs.core.LazySeq(null,((function (i__350709,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__14675__auto__,size__14676__auto__,b__350710,s__350708__$2,temp__4092__auto__){
return (function (){var s__350720__$1 = s__350720;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__350720__$1);if(temp__4092__auto____$1)
{var s__350720__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__350720__$2))
{var c__14675__auto____$1 = cljs.core.chunk_first.call(null,s__350720__$2);var size__14676__auto____$1 = cljs.core.count.call(null,c__14675__auto____$1);var b__350722 = cljs.core.chunk_buffer.call(null,size__14676__auto____$1);if((function (){var i__350721 = 0;while(true){
if((i__350721 < size__14676__auto____$1))
{var z = cljs.core._nth.call(null,c__14675__auto____$1,i__350721);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{cljs.core.chunk_append.call(null,b__350722,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));
{
var G__350760 = (i__350721 + 1);
i__350721 = G__350760;
continue;
}
} else
{{
var G__350761 = (i__350721 + 1);
i__350721 = G__350761;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__350722),iter__350719.call(null,cljs.core.chunk_rest.call(null,s__350720__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__350722),null);
}
} else
{var z = cljs.core.first.call(null,s__350720__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),iter__350719.call(null,cljs.core.rest.call(null,s__350720__$2)));
} else
{{
var G__350762 = cljs.core.rest.call(null,s__350720__$2);
s__350720__$1 = G__350762;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__350709,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__14675__auto__,size__14676__auto__,b__350710,s__350708__$2,temp__4092__auto__))
,null,null));
});})(i__350709,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__14675__auto__,size__14676__auto__,b__350710,s__350708__$2,temp__4092__auto__))
;return iter__14677__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + 1)));
})());
})());
{
var G__350763 = (i__350709 + 1);
i__350709 = G__350763;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__350710),iter__350707.call(null,cljs.core.chunk_rest.call(null,s__350708__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__350710),null);
}
} else
{var y = cljs.core.first.call(null,s__350708__$2);return cljs.core.cons.call(null,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + 1)) - 1);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__14677__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__350708__$2,temp__4092__auto__){
return (function iter__350723(s__350724){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__350708__$2,temp__4092__auto__){
return (function (){var s__350724__$1 = s__350724;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__350724__$1);if(temp__4092__auto____$1)
{var s__350724__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__350724__$2))
{var c__14675__auto__ = cljs.core.chunk_first.call(null,s__350724__$2);var size__14676__auto__ = cljs.core.count.call(null,c__14675__auto__);var b__350726 = cljs.core.chunk_buffer.call(null,size__14676__auto__);if((function (){var i__350725 = 0;while(true){
if((i__350725 < size__14676__auto__))
{var z = cljs.core._nth.call(null,c__14675__auto__,i__350725);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{cljs.core.chunk_append.call(null,b__350726,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));
{
var G__350764 = (i__350725 + 1);
i__350725 = G__350764;
continue;
}
} else
{{
var G__350765 = (i__350725 + 1);
i__350725 = G__350765;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__350726),iter__350723.call(null,cljs.core.chunk_rest.call(null,s__350724__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__350726),null);
}
} else
{var z = cljs.core.first.call(null,s__350724__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),iter__350723.call(null,cljs.core.rest.call(null,s__350724__$2)));
} else
{{
var G__350766 = cljs.core.rest.call(null,s__350724__$2);
s__350724__$1 = G__350766;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__350708__$2,temp__4092__auto__))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__350708__$2,temp__4092__auto__))
;return iter__14677__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + 1)));
})());
})(),iter__350707.call(null,cljs.core.rest.call(null,s__350708__$2)));
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
var G__350775 = (j - 1);
j = G__350775;
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
return (function iter__350771(s__350772){return (new cljs.core.LazySeq(null,((function (v__$1){
return (function (){var s__350772__$1 = s__350772;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__350772__$1);if(temp__4092__auto__)
{var s__350772__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__350772__$2))
{var c__14675__auto__ = cljs.core.chunk_first.call(null,s__350772__$2);var size__14676__auto__ = cljs.core.count.call(null,c__14675__auto__);var b__350774 = cljs.core.chunk_buffer.call(null,size__14676__auto__);if((function (){var i__350773 = 0;while(true){
if((i__350773 < size__14676__auto__))
{var i = cljs.core._nth.call(null,c__14675__auto__,i__350773);cljs.core.chunk_append.call(null,b__350774,(u.call(null,i) - v__$1.call(null,i)));
{
var G__350776 = (i__350773 + 1);
i__350773 = G__350776;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__350774),iter__350771.call(null,cljs.core.chunk_rest.call(null,s__350772__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__350774),null);
}
} else
{var i = cljs.core.first.call(null,s__350772__$2);return cljs.core.cons.call(null,(u.call(null,i) - v__$1.call(null,i)),iter__350771.call(null,cljs.core.rest.call(null,s__350772__$2)));
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
var G__350777 = cljs.core.rest.call(null,ks);
var G__350778 = cljs.core.assoc.call(null,v__$2,k,u.call(null,k));
ks = G__350777;
v__$2 = G__350778;
continue;
}
}
break;
}
})();var min_partitions_after_this = (cljs.core.truth_(s)?(s - (l + 1)):0);var amount_to_dec = (cljs.core.truth_(s)?(function (){var x__14291__auto__ = 0;var y__14292__auto__ = (min_partitions_after_this - diff_uv);return ((x__14291__auto__ > y__14292__auto__) ? x__14291__auto__ : y__14292__auto__);
})():0);var v__$3 = ((cljs.core._EQ_.call(null,amount_to_dec,0))?v__$2:(function (){var k_1 = (b - 1);var v__$3 = v__$2;var amount = amount_to_dec;while(true){
var vk = v__$3.call(null,k_1);if((amount > vk))
{{
var G__350779 = (k_1 - 1);
var G__350780 = cljs.core.assoc.call(null,v__$3,k_1,0);
var G__350781 = (amount - vk);
k_1 = G__350779;
v__$3 = G__350780;
amount = G__350781;
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
var partitions_M__delegate = function (items,p__350782){var map__350840 = p__350782;var map__350840__$1 = ((cljs.core.seq_QMARK_.call(null,map__350840))?cljs.core.apply.call(null,cljs.core.hash_map,map__350840):map__350840);var from = cljs.core.get.call(null,map__350840__$1,new cljs.core.Keyword(null,"min","min",1014012356));var to = cljs.core.get.call(null,map__350840__$1,new cljs.core.Keyword(null,"max","max",1014012118));if(cljs.core._EQ_.call(null,cljs.core.count.call(null,items),0))
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
{var start_multiset = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__14677__auto__ = (function iter__350841(s__350842){return (new cljs.core.LazySeq(null,(function (){var s__350842__$1 = s__350842;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__350842__$1);if(temp__4092__auto__)
{var s__350842__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__350842__$2))
{var c__14675__auto__ = cljs.core.chunk_first.call(null,s__350842__$2);var size__14676__auto__ = cljs.core.count.call(null,c__14675__auto__);var b__350844 = cljs.core.chunk_buffer.call(null,size__14676__auto__);if((function (){var i__350843 = 0;while(true){
if((i__350843 < size__14676__auto__))
{var i = cljs.core._nth.call(null,c__14675__auto__,i__350843);var j = (i + 1);cljs.core.chunk_append.call(null,b__350844,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null));
{
var G__350897 = (i__350843 + 1);
i__350843 = G__350897;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__350844),iter__350841.call(null,cljs.core.chunk_rest.call(null,s__350842__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__350844),null);
}
} else
{var i = cljs.core.first.call(null,s__350842__$2);var j = (i + 1);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null),iter__350841.call(null,cljs.core.rest.call(null,s__350842__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14677__auto__.call(null,cljs.core.range.call(null,M));
})());var parts = foundation.app.data.combinatorics.multiset_partitions_M.call(null,start_multiset,to__$1,from__$1);var iter__14677__auto__ = (function iter__350845(s__350846){return (new cljs.core.LazySeq(null,(function (){var s__350846__$1 = s__350846;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__350846__$1);if(temp__4092__auto__)
{var s__350846__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__350846__$2))
{var c__14675__auto__ = cljs.core.chunk_first.call(null,s__350846__$2);var size__14676__auto__ = cljs.core.count.call(null,c__14675__auto__);var b__350848 = cljs.core.chunk_buffer.call(null,size__14676__auto__);if((function (){var i__350847 = 0;while(true){
if((i__350847 < size__14676__auto__))
{var part = cljs.core._nth.call(null,c__14675__auto__,i__350847);cljs.core.chunk_append.call(null,b__350848,(function (){var iter__14677__auto__ = ((function (i__350847,part,c__14675__auto__,size__14676__auto__,b__350848,s__350846__$2,temp__4092__auto__){
return (function iter__350873(s__350874){return (new cljs.core.LazySeq(null,((function (i__350847,part,c__14675__auto__,size__14676__auto__,b__350848,s__350846__$2,temp__4092__auto__){
return (function (){var s__350874__$1 = s__350874;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__350874__$1);if(temp__4092__auto____$1)
{var s__350874__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__350874__$2))
{var c__14675__auto____$1 = cljs.core.chunk_first.call(null,s__350874__$2);var size__14676__auto____$1 = cljs.core.count.call(null,c__14675__auto____$1);var b__350876 = cljs.core.chunk_buffer.call(null,size__14676__auto____$1);if((function (){var i__350875 = 0;while(true){
if((i__350875 < size__14676__auto____$1))
{var multiset = cljs.core._nth.call(null,c__14675__auto____$1,i__350875);cljs.core.chunk_append.call(null,b__350876,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__350875,i__350847,multiset,c__14675__auto____$1,size__14676__auto____$1,b__350876,s__350874__$2,temp__4092__auto____$1,part,c__14675__auto__,size__14676__auto__,b__350848,s__350846__$2,temp__4092__auto__){
return (function (p__350881){var vec__350882 = p__350881;var index = cljs.core.nth.call(null,vec__350882,0,null);var numtimes = cljs.core.nth.call(null,vec__350882,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__350875,i__350847,multiset,c__14675__auto____$1,size__14676__auto____$1,b__350876,s__350874__$2,temp__4092__auto____$1,part,c__14675__auto__,size__14676__auto__,b__350848,s__350846__$2,temp__4092__auto__))
,multiset)));
{
var G__350898 = (i__350875 + 1);
i__350875 = G__350898;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__350876),iter__350873.call(null,cljs.core.chunk_rest.call(null,s__350874__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__350876),null);
}
} else
{var multiset = cljs.core.first.call(null,s__350874__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__350847,multiset,s__350874__$2,temp__4092__auto____$1,part,c__14675__auto__,size__14676__auto__,b__350848,s__350846__$2,temp__4092__auto__){
return (function (p__350883){var vec__350884 = p__350883;var index = cljs.core.nth.call(null,vec__350884,0,null);var numtimes = cljs.core.nth.call(null,vec__350884,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__350847,multiset,s__350874__$2,temp__4092__auto____$1,part,c__14675__auto__,size__14676__auto__,b__350848,s__350846__$2,temp__4092__auto__))
,multiset)),iter__350873.call(null,cljs.core.rest.call(null,s__350874__$2)));
}
} else
{return null;
}
break;
}
});})(i__350847,part,c__14675__auto__,size__14676__auto__,b__350848,s__350846__$2,temp__4092__auto__))
,null,null));
});})(i__350847,part,c__14675__auto__,size__14676__auto__,b__350848,s__350846__$2,temp__4092__auto__))
;return iter__14677__auto__.call(null,part);
})());
{
var G__350899 = (i__350847 + 1);
i__350847 = G__350899;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__350848),iter__350845.call(null,cljs.core.chunk_rest.call(null,s__350846__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__350848),null);
}
} else
{var part = cljs.core.first.call(null,s__350846__$2);return cljs.core.cons.call(null,(function (){var iter__14677__auto__ = ((function (part,s__350846__$2,temp__4092__auto__){
return (function iter__350885(s__350886){return (new cljs.core.LazySeq(null,((function (part,s__350846__$2,temp__4092__auto__){
return (function (){var s__350886__$1 = s__350886;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__350886__$1);if(temp__4092__auto____$1)
{var s__350886__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__350886__$2))
{var c__14675__auto__ = cljs.core.chunk_first.call(null,s__350886__$2);var size__14676__auto__ = cljs.core.count.call(null,c__14675__auto__);var b__350888 = cljs.core.chunk_buffer.call(null,size__14676__auto__);if((function (){var i__350887 = 0;while(true){
if((i__350887 < size__14676__auto__))
{var multiset = cljs.core._nth.call(null,c__14675__auto__,i__350887);cljs.core.chunk_append.call(null,b__350888,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__350887,multiset,c__14675__auto__,size__14676__auto__,b__350888,s__350886__$2,temp__4092__auto____$1,part,s__350846__$2,temp__4092__auto__){
return (function (p__350893){var vec__350894 = p__350893;var index = cljs.core.nth.call(null,vec__350894,0,null);var numtimes = cljs.core.nth.call(null,vec__350894,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__350887,multiset,c__14675__auto__,size__14676__auto__,b__350888,s__350886__$2,temp__4092__auto____$1,part,s__350846__$2,temp__4092__auto__))
,multiset)));
{
var G__350900 = (i__350887 + 1);
i__350887 = G__350900;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__350888),iter__350885.call(null,cljs.core.chunk_rest.call(null,s__350886__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__350888),null);
}
} else
{var multiset = cljs.core.first.call(null,s__350886__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (multiset,s__350886__$2,temp__4092__auto____$1,part,s__350846__$2,temp__4092__auto__){
return (function (p__350895){var vec__350896 = p__350895;var index = cljs.core.nth.call(null,vec__350896,0,null);var numtimes = cljs.core.nth.call(null,vec__350896,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(multiset,s__350886__$2,temp__4092__auto____$1,part,s__350846__$2,temp__4092__auto__))
,multiset)),iter__350885.call(null,cljs.core.rest.call(null,s__350886__$2)));
}
} else
{return null;
}
break;
}
});})(part,s__350846__$2,temp__4092__auto__))
,null,null));
});})(part,s__350846__$2,temp__4092__auto__))
;return iter__14677__auto__.call(null,part);
})(),iter__350845.call(null,cljs.core.rest.call(null,s__350846__$2)));
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
var p__350782 = null;if (arguments.length > 1) {
  p__350782 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions_M__delegate.call(this,items,p__350782);};
partitions_M.cljs$lang$maxFixedArity = 1;
partitions_M.cljs$lang$applyTo = (function (arglist__350901){
var items = cljs.core.first(arglist__350901);
var p__350782 = cljs.core.rest(arglist__350901);
return partitions_M__delegate(items,p__350782);
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
partitions.cljs$lang$applyTo = (function (arglist__350902){
var items = cljs.core.first(arglist__350902);
var args = cljs.core.rest(arglist__350902);
return partitions__delegate(items,args);
});
partitions.cljs$core$IFn$_invoke$arity$variadic = partitions__delegate;
return partitions;
})()
;

//# sourceMappingURL=combinatorics.js.map