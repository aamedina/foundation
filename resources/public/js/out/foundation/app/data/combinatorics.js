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
var G__10423 = cljs.core.assoc.call(null,c__$2,(j__$1 - 1),(c__$2.call(null,j__$1) - 1));
var G__10424 = (j__$1 - 1);
c__$2 = G__10423;
j__$1 = G__10424;
continue;
}
}
break;
}
}
}
});
return (new cljs.core.LazySeq(null,(function (){var c = cljs.core.vec.call(null,cljs.core.cons.call(null,null,(function (){var iter__8928__auto__ = (function iter__10419(s__10420){return (new cljs.core.LazySeq(null,(function (){var s__10420__$1 = s__10420;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10420__$1);if(temp__4092__auto__)
{var s__10420__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10420__$2))
{var c__8926__auto__ = cljs.core.chunk_first.call(null,s__10420__$2);var size__8927__auto__ = cljs.core.count.call(null,c__8926__auto__);var b__10422 = cljs.core.chunk_buffer.call(null,size__8927__auto__);if((function (){var i__10421 = 0;while(true){
if((i__10421 < size__8927__auto__))
{var j = cljs.core._nth.call(null,c__8926__auto__,i__10421);cljs.core.chunk_append.call(null,b__10422,((j + cnt) + (- (n + 1))));
{
var G__10425 = (i__10421 + 1);
i__10421 = G__10425;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10422),iter__10419.call(null,cljs.core.chunk_rest.call(null,s__10420__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10422),null);
}
} else
{var j = cljs.core.first.call(null,s__10420__$2);return cljs.core.cons.call(null,((j + cnt) + (- (n + 1))),iter__10419.call(null,cljs.core.rest.call(null,s__10420__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8928__auto__.call(null,cljs.core.range.call(null,1,(n + 1)));
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
{return cljs.core.map.call(null,(function (p1__10426_SHARP_){return cljs.core.map.call(null,v_items,p1__10426_SHARP_);
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
var G__10427 = (i - 1);
var G__10428 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__10427;
v_seqs__$2 = G__10428;
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
cartesian_product.cljs$lang$applyTo = (function (arglist__10429){
var seqs = cljs.core.seq(arglist__10429);
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
var G__10430 = (i - 1);
i = G__10430;
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
var G__10431 = (i - 1);
i = G__10431;
continue;
}
}
break;
}
})();var v__$1 = cljs.core.assoc.call(null,v,j,v.call(null,l),l,vj);var k = (j + 1);var l__$1 = (len - 1);while(true){
if((k < l__$1))
{{
var G__10432 = cljs.core.assoc.call(null,v__$1,k,v__$1.call(null,l__$1),l__$1,v__$1.call(null,k));
var G__10433 = (k + 1);
var G__10434 = (l__$1 - 1);
v__$1 = G__10432;
k = G__10433;
l__$1 = G__10434;
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
foundation.app.data.combinatorics.multi_perm = (function multi_perm(l){var f = cljs.core.frequencies.call(null,l);var v = cljs.core.vec.call(null,cljs.core.keys.call(null,f));var indices = cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__8928__auto__ = ((function (f,v){
return (function iter__10439(s__10440){return (new cljs.core.LazySeq(null,((function (f,v){
return (function (){var s__10440__$1 = s__10440;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10440__$1);if(temp__4092__auto__)
{var s__10440__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10440__$2))
{var c__8926__auto__ = cljs.core.chunk_first.call(null,s__10440__$2);var size__8927__auto__ = cljs.core.count.call(null,c__8926__auto__);var b__10442 = cljs.core.chunk_buffer.call(null,size__8927__auto__);if((function (){var i__10441 = 0;while(true){
if((i__10441 < size__8927__auto__))
{var i = cljs.core._nth.call(null,c__8926__auto__,i__10441);cljs.core.chunk_append.call(null,b__10442,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));
{
var G__10443 = (i__10441 + 1);
i__10441 = G__10443;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10442),iter__10439.call(null,cljs.core.chunk_rest.call(null,s__10440__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10442),null);
}
} else
{var i = cljs.core.first.call(null,s__10440__$2);return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),iter__10439.call(null,cljs.core.rest.call(null,s__10440__$2)));
}
} else
{return null;
}
break;
}
});})(f,v))
,null,null));
});})(f,v))
;return iter__8928__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,v)));
})());return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.map,v),foundation.app.data.combinatorics.lex_permutations.call(null,indices));
});
/**
* All the distinct permutations of items, lexicographic by index.
*/
foundation.app.data.combinatorics.permutations = (function permutations(items){if(foundation.app.data.combinatorics.sorted_numbers_QMARK_.call(null,items))
{return foundation.app.data.combinatorics.lex_permutations.call(null,items);
} else
{if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core.distinct_QMARK_,items)))
{var v = cljs.core.vec.call(null,items);return cljs.core.map.call(null,(function (p1__10444_SHARP_){return cljs.core.map.call(null,v,p1__10444_SHARP_);
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
{return cljs.core.vec.call(null,(function (){var iter__8928__auto__ = (function iter__10449(s__10450){return (new cljs.core.LazySeq(null,(function (){var s__10450__$1 = s__10450;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10450__$1);if(temp__4092__auto__)
{var s__10450__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10450__$2))
{var c__8926__auto__ = cljs.core.chunk_first.call(null,s__10450__$2);var size__8927__auto__ = cljs.core.count.call(null,c__8926__auto__);var b__10452 = cljs.core.chunk_buffer.call(null,size__8927__auto__);if((function (){var i__10451 = 0;while(true){
if((i__10451 < size__8927__auto__))
{var i = cljs.core._nth.call(null,c__8926__auto__,i__10451);cljs.core.chunk_append.call(null,b__10452,(function (){var x__8542__auto__ = 0;var y__8543__auto__ = (i - ((n - s) - -1));return ((x__8542__auto__ > y__8543__auto__) ? x__8542__auto__ : y__8543__auto__);
})());
{
var G__10453 = (i__10451 + 1);
i__10451 = G__10453;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10452),iter__10449.call(null,cljs.core.chunk_rest.call(null,s__10450__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10452),null);
}
} else
{var i = cljs.core.first.call(null,s__10450__$2);return cljs.core.cons.call(null,(function (){var x__8542__auto__ = 0;var y__8543__auto__ = (i - ((n - s) - -1));return ((x__8542__auto__ > y__8543__auto__) ? x__8542__auto__ : y__8543__auto__);
})(),iter__10449.call(null,cljs.core.rest.call(null,s__10450__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8928__auto__.call(null,cljs.core.range.call(null,1,(n + 1)));
})());
} else
{return cljs.core.vec.call(null,cljs.core.repeat.call(null,n,0));
}
});
foundation.app.data.combinatorics.growth_strings_H = (function() {
var growth_strings_H = null;
var growth_strings_H__3 = (function (n,r,s){return growth_strings_H.call(null,n,foundation.app.data.combinatorics.init.call(null,n,s),cljs.core.vec.call(null,cljs.core.repeat.call(null,n,1)),r,s);
});
var growth_strings_H__5 = (function (n,a,b,r,s){return cljs.core.cons.call(null,a,(new cljs.core.LazySeq(null,(function (){if((function (){var and__8218__auto__ = (cljs.core.peek.call(null,b) > cljs.core.peek.call(null,a));if(and__8218__auto__)
{if(cljs.core.truth_(r))
{return (cljs.core.peek.call(null,a) < (r - 1));
} else
{return true;
}
} else
{return and__8218__auto__;
}
})())
{return growth_strings_H.call(null,n,foundation.app.data.combinatorics.update.call(null,a,(n - 1),cljs.core.inc),b,r,s);
} else
{var j = (function (){var j = (n - 2);while(true){
if((function (){var and__8218__auto__ = (a.call(null,j) < b.call(null,j));if(and__8218__auto__)
{var and__8218__auto____$1 = (cljs.core.truth_(r)?(a.call(null,j) < (r - 1)):true);if(and__8218__auto____$1)
{if(cljs.core.truth_(s))
{return (((s - b.call(null,j)) - ((((a.call(null,j) + 1) === b.call(null,j)))?1:0)) <= (n - j));
} else
{return true;
}
} else
{return and__8218__auto____$1;
}
} else
{return and__8218__auto__;
}
})())
{return j;
} else
{{
var G__10456 = (j - 1);
j = G__10456;
continue;
}
}
break;
}
})();if((j === 0))
{return cljs.core.List.EMPTY;
} else
{var a__$1 = foundation.app.data.combinatorics.update.call(null,a,j,cljs.core.inc);var x = (cljs.core.truth_(s)?(s - (b.call(null,j) + ((cljs.core._EQ_.call(null,a__$1.call(null,j),b.call(null,j)))?1:0))):null);var vec__10455 = (function (){var a__$2 = a__$1;var b__$1 = b;var i = (j + 1);var current_max = (b__$1.call(null,j) + (((b__$1.call(null,j) === a__$2.call(null,j)))?1:0));while(true){
if((i === n))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$2,b__$1], null);
} else
{if(cljs.core.truth_((function (){var and__8218__auto__ = s;if(cljs.core.truth_(and__8218__auto__))
{return (i > ((n - x) - 1));
} else
{return and__8218__auto__;
}
})()))
{var new_a_i = ((i - n) + s);{
var G__10457 = cljs.core.assoc.call(null,a__$2,i,new_a_i);
var G__10458 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__10459 = (i + 1);
var G__10460 = (function (){var x__8542__auto__ = current_max;var y__8543__auto__ = (new_a_i + 1);return ((x__8542__auto__ > y__8543__auto__) ? x__8542__auto__ : y__8543__auto__);
})();
a__$2 = G__10457;
b__$1 = G__10458;
i = G__10459;
current_max = G__10460;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__10461 = cljs.core.assoc.call(null,a__$2,i,0);
var G__10462 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__10463 = (i + 1);
var G__10464 = current_max;
a__$2 = G__10461;
b__$1 = G__10462;
i = G__10463;
current_max = G__10464;
continue;
}
} else
{return null;
}
}
}
break;
}
})();var a__$2 = cljs.core.nth.call(null,vec__10455,0,null);var b__$1 = cljs.core.nth.call(null,vec__10455,1,null);return growth_strings_H.call(null,n,a__$2,b__$1,r,s);
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
var lex_partitions_H__delegate = function (N,p__10465){var map__10471 = p__10465;var map__10471__$1 = ((cljs.core.seq_QMARK_.call(null,map__10471))?cljs.core.apply.call(null,cljs.core.hash_map,map__10471):map__10471);var from = cljs.core.get.call(null,map__10471__$1,new cljs.core.Keyword(null,"min","min",1014012356));var to = cljs.core.get.call(null,map__10471__$1,new cljs.core.Keyword(null,"max","max",1014012118));if(cljs.core._EQ_.call(null,N,0))
{if((((function (){var or__8230__auto__ = from;if(cljs.core.truth_(or__8230__auto__))
{return or__8230__auto__;
} else
{return 0;
}
})() <= 0)) && ((0 <= (function (){var or__8230__auto__ = to;if(cljs.core.truth_(or__8230__auto__))
{return or__8230__auto__;
} else
{return 0;
}
})())))
{return cljs.core.list(cljs.core.List.EMPTY);
} else
{return cljs.core.List.EMPTY;
}
} else
{var from__$1 = (cljs.core.truth_((function (){var and__8218__auto__ = from;if(cljs.core.truth_(and__8218__auto__))
{return (from <= 1);
} else
{return and__8218__auto__;
}
})())?null:from);var to__$1 = (cljs.core.truth_((function (){var and__8218__auto__ = to;if(cljs.core.truth_(and__8218__auto__))
{return (to >= N);
} else
{return and__8218__auto__;
}
})())?null:to);if(!(((1 <= (function (){var or__8230__auto__ = from__$1;if(cljs.core.truth_(or__8230__auto__))
{return or__8230__auto__;
} else
{return 1;
}
})())) && ((((function (){var or__8230__auto__ = from__$1;if(cljs.core.truth_(or__8230__auto__))
{return or__8230__auto__;
} else
{return 1;
}
})() <= (function (){var or__8230__auto__ = to__$1;if(cljs.core.truth_(or__8230__auto__))
{return or__8230__auto__;
} else
{return N;
}
})())) && (((function (){var or__8230__auto__ = to__$1;if(cljs.core.truth_(or__8230__auto__))
{return or__8230__auto__;
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
{var growth_strings = foundation.app.data.combinatorics.growth_strings_H.call(null,N,to__$1,from__$1);var iter__8928__auto__ = (function iter__10472(s__10473){return (new cljs.core.LazySeq(null,(function (){var s__10473__$1 = s__10473;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10473__$1);if(temp__4092__auto__)
{var s__10473__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10473__$2))
{var c__8926__auto__ = cljs.core.chunk_first.call(null,s__10473__$2);var size__8927__auto__ = cljs.core.count.call(null,c__8926__auto__);var b__10475 = cljs.core.chunk_buffer.call(null,size__8927__auto__);if((function (){var i__10474 = 0;while(true){
if((i__10474 < size__8927__auto__))
{var growth_string = cljs.core._nth.call(null,c__8926__auto__,i__10474);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));cljs.core.chunk_append.call(null,b__10475,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))));
{
var G__10476 = (i__10474 + 1);
i__10474 = G__10476;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10475),iter__10472.call(null,cljs.core.chunk_rest.call(null,s__10473__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10475),null);
}
} else
{var growth_string = cljs.core.first.call(null,s__10473__$2);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));return cljs.core.cons.call(null,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))),iter__10472.call(null,cljs.core.rest.call(null,s__10473__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8928__auto__.call(null,growth_strings);
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
var p__10465 = null;if (arguments.length > 1) {
  p__10465 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return lex_partitions_H__delegate.call(this,N,p__10465);};
lex_partitions_H.cljs$lang$maxFixedArity = 1;
lex_partitions_H.cljs$lang$applyTo = (function (arglist__10477){
var N = cljs.core.first(arglist__10477);
var p__10465 = cljs.core.rest(arglist__10477);
return lex_partitions_H__delegate(N,p__10465);
});
lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic = lex_partitions_H__delegate;
return lex_partitions_H;
})()
;
/**
* @param {...*} var_args
*/
foundation.app.data.combinatorics.partitions_H = (function() { 
var partitions_H__delegate = function (items,args){var items__$1 = cljs.core.vec.call(null,items);var N = cljs.core.count.call(null,items__$1);var lex = cljs.core.apply.call(null,foundation.app.data.combinatorics.lex_partitions_H,N,args);var iter__8928__auto__ = (function iter__10498(s__10499){return (new cljs.core.LazySeq(null,(function (){var s__10499__$1 = s__10499;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10499__$1);if(temp__4092__auto__)
{var s__10499__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10499__$2))
{var c__8926__auto__ = cljs.core.chunk_first.call(null,s__10499__$2);var size__8927__auto__ = cljs.core.count.call(null,c__8926__auto__);var b__10501 = cljs.core.chunk_buffer.call(null,size__8927__auto__);if((function (){var i__10500 = 0;while(true){
if((i__10500 < size__8927__auto__))
{var parts = cljs.core._nth.call(null,c__8926__auto__,i__10500);cljs.core.chunk_append.call(null,b__10501,(function (){var iter__8928__auto__ = ((function (i__10500,parts,c__8926__auto__,size__8927__auto__,b__10501,s__10499__$2,temp__4092__auto__){
return (function iter__10510(s__10511){return (new cljs.core.LazySeq(null,((function (i__10500,parts,c__8926__auto__,size__8927__auto__,b__10501,s__10499__$2,temp__4092__auto__){
return (function (){var s__10511__$1 = s__10511;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__10511__$1);if(temp__4092__auto____$1)
{var s__10511__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__10511__$2))
{var c__8926__auto____$1 = cljs.core.chunk_first.call(null,s__10511__$2);var size__8927__auto____$1 = cljs.core.count.call(null,c__8926__auto____$1);var b__10513 = cljs.core.chunk_buffer.call(null,size__8927__auto____$1);if((function (){var i__10512 = 0;while(true){
if((i__10512 < size__8927__auto____$1))
{var part = cljs.core._nth.call(null,c__8926__auto____$1,i__10512);cljs.core.chunk_append.call(null,b__10513,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__10512,i__10500,part,c__8926__auto____$1,size__8927__auto____$1,b__10513,s__10511__$2,temp__4092__auto____$1,parts,c__8926__auto__,size__8927__auto__,b__10501,s__10499__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__10512,i__10500,part,c__8926__auto____$1,size__8927__auto____$1,b__10513,s__10511__$2,temp__4092__auto____$1,parts,c__8926__auto__,size__8927__auto__,b__10501,s__10499__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__10518 = (i__10512 + 1);
i__10512 = G__10518;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10513),iter__10510.call(null,cljs.core.chunk_rest.call(null,s__10511__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10513),null);
}
} else
{var part = cljs.core.first.call(null,s__10511__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__10500,part,s__10511__$2,temp__4092__auto____$1,parts,c__8926__auto__,size__8927__auto__,b__10501,s__10499__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__10500,part,s__10511__$2,temp__4092__auto____$1,parts,c__8926__auto__,size__8927__auto__,b__10501,s__10499__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__10510.call(null,cljs.core.rest.call(null,s__10511__$2)));
}
} else
{return null;
}
break;
}
});})(i__10500,parts,c__8926__auto__,size__8927__auto__,b__10501,s__10499__$2,temp__4092__auto__))
,null,null));
});})(i__10500,parts,c__8926__auto__,size__8927__auto__,b__10501,s__10499__$2,temp__4092__auto__))
;return iter__8928__auto__.call(null,parts);
})());
{
var G__10519 = (i__10500 + 1);
i__10500 = G__10519;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10501),iter__10498.call(null,cljs.core.chunk_rest.call(null,s__10499__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10501),null);
}
} else
{var parts = cljs.core.first.call(null,s__10499__$2);return cljs.core.cons.call(null,(function (){var iter__8928__auto__ = ((function (parts,s__10499__$2,temp__4092__auto__){
return (function iter__10514(s__10515){return (new cljs.core.LazySeq(null,((function (parts,s__10499__$2,temp__4092__auto__){
return (function (){var s__10515__$1 = s__10515;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__10515__$1);if(temp__4092__auto____$1)
{var s__10515__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__10515__$2))
{var c__8926__auto__ = cljs.core.chunk_first.call(null,s__10515__$2);var size__8927__auto__ = cljs.core.count.call(null,c__8926__auto__);var b__10517 = cljs.core.chunk_buffer.call(null,size__8927__auto__);if((function (){var i__10516 = 0;while(true){
if((i__10516 < size__8927__auto__))
{var part = cljs.core._nth.call(null,c__8926__auto__,i__10516);cljs.core.chunk_append.call(null,b__10517,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__10516,part,c__8926__auto__,size__8927__auto__,b__10517,s__10515__$2,temp__4092__auto____$1,parts,s__10499__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__10516,part,c__8926__auto__,size__8927__auto__,b__10517,s__10515__$2,temp__4092__auto____$1,parts,s__10499__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__10520 = (i__10516 + 1);
i__10516 = G__10520;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10517),iter__10514.call(null,cljs.core.chunk_rest.call(null,s__10515__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10517),null);
}
} else
{var part = cljs.core.first.call(null,s__10515__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (part,s__10515__$2,temp__4092__auto____$1,parts,s__10499__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(part,s__10515__$2,temp__4092__auto____$1,parts,s__10499__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__10514.call(null,cljs.core.rest.call(null,s__10515__$2)));
}
} else
{return null;
}
break;
}
});})(parts,s__10499__$2,temp__4092__auto__))
,null,null));
});})(parts,s__10499__$2,temp__4092__auto__))
;return iter__8928__auto__.call(null,parts);
})(),iter__10498.call(null,cljs.core.rest.call(null,s__10499__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8928__auto__.call(null,lex);
};
var partitions_H = function (items,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions_H__delegate.call(this,items,args);};
partitions_H.cljs$lang$maxFixedArity = 1;
partitions_H.cljs$lang$applyTo = (function (arglist__10521){
var items = cljs.core.first(arglist__10521);
var args = cljs.core.rest(arglist__10521);
return partitions_H__delegate(items,args);
});
partitions_H.cljs$core$IFn$_invoke$arity$variadic = partitions_H__delegate;
return partitions_H;
})()
;
foundation.app.data.combinatorics.multiset_partitions_M = (function() {
var multiset_partitions_M = null;
var multiset_partitions_M__3 = (function (multiset,r,s){var n = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,multiset));var m = cljs.core.count.call(null,multiset);var f = cljs.core.PersistentVector.EMPTY;var c = cljs.core.PersistentVector.EMPTY;var u = cljs.core.PersistentVector.EMPTY;var v = cljs.core.PersistentVector.EMPTY;var vec__10544 = (function (){var j = 0;var c__$1 = c;var u__$1 = u;var v__$1 = v;while(true){
if(cljs.core._EQ_.call(null,j,m))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,u__$1,v__$1], null);
} else
{{
var G__10566 = (j + 1);
var G__10567 = cljs.core.assoc.call(null,c__$1,j,(j + 1));
var G__10568 = cljs.core.assoc.call(null,u__$1,j,multiset.call(null,(j + 1)));
var G__10569 = cljs.core.assoc.call(null,v__$1,j,multiset.call(null,(j + 1)));
j = G__10566;
c__$1 = G__10567;
u__$1 = G__10568;
v__$1 = G__10569;
continue;
}
}
break;
}
})();var c__$1 = cljs.core.nth.call(null,vec__10544,0,null);var u__$1 = cljs.core.nth.call(null,vec__10544,1,null);var v__$1 = cljs.core.nth.call(null,vec__10544,2,null);var a = 0;var b = m;var l = 0;var f__$1 = cljs.core.assoc.call(null,f,0,0,1,m);var stack = cljs.core.List.EMPTY;return multiset_partitions_M.call(null,n,m,f__$1,c__$1,u__$1,v__$1,a,b,l,r,s);
});
var multiset_partitions_M__11 = (function (n,m,f,c,u,v,a,b,l,r,s){while(true){
var vec__10545 = (function (){var j = a;var k = b;var x = false;var u__$1 = u;var v__$1 = v;var c__$1 = c;while(true){
if((j >= b))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [u__$1,v__$1,c__$1,j,k], null);
} else
{var u__$2 = cljs.core.assoc.call(null,u__$1,k,(u__$1.call(null,j) - v__$1.call(null,j)));if(cljs.core._EQ_.call(null,u__$2.call(null,k),0))
{{
var G__10570 = (j + 1);
var G__10571 = k;
var G__10572 = true;
var G__10573 = u__$2;
var G__10574 = v__$1;
var G__10575 = c__$1;
j = G__10570;
k = G__10571;
x = G__10572;
u__$1 = G__10573;
v__$1 = G__10574;
c__$1 = G__10575;
continue;
}
} else
{if(!(x))
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,(function (){var x__8549__auto__ = v__$1.call(null,j);var y__8550__auto__ = u__$2.call(null,k);return ((x__8549__auto__ < y__8550__auto__) ? x__8549__auto__ : y__8550__auto__);
})());var x__$1 = (u__$2.call(null,k) < v__$2.call(null,j));var k__$1 = (k + 1);var j__$1 = (j + 1);{
var G__10576 = j__$1;
var G__10577 = k__$1;
var G__10578 = x__$1;
var G__10579 = u__$2;
var G__10580 = v__$2;
var G__10581 = c__$2;
j = G__10576;
k = G__10577;
x = G__10578;
u__$1 = G__10579;
v__$1 = G__10580;
c__$1 = G__10581;
continue;
}
} else
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,u__$2.call(null,k));var k__$1 = (k + 1);var j__$1 = (j + 1);{
var G__10582 = j__$1;
var G__10583 = k__$1;
var G__10584 = x;
var G__10585 = u__$2;
var G__10586 = v__$2;
var G__10587 = c__$2;
j = G__10582;
k = G__10583;
x = G__10584;
u__$1 = G__10585;
v__$1 = G__10586;
c__$1 = G__10587;
continue;
}
}
}
}
break;
}
})();var u__$1 = cljs.core.nth.call(null,vec__10545,0,null);var v__$1 = cljs.core.nth.call(null,vec__10545,1,null);var c__$1 = cljs.core.nth.call(null,vec__10545,2,null);var j = cljs.core.nth.call(null,vec__10545,3,null);var k = cljs.core.nth.call(null,vec__10545,4,null);if(cljs.core.truth_((function (){var and__8218__auto__ = r;if(cljs.core.truth_(and__8218__auto__))
{return ((k > b)) && (cljs.core._EQ_.call(null,l,(r - 1)));
} else
{return and__8218__auto__;
}
})()))
{return foundation.app.data.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
} else
{if(cljs.core.truth_((function (){var and__8218__auto__ = s;if(cljs.core.truth_(and__8218__auto__))
{return ((k <= b)) && (((l + 1) < s));
} else
{return and__8218__auto__;
}
})()))
{return foundation.app.data.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
} else
{if((k > b))
{var a__$1 = b;var b__$1 = k;var l__$1 = (l + 1);var f__$1 = cljs.core.assoc.call(null,f,(l__$1 + 1),b__$1);{
var G__10588 = n;
var G__10589 = m;
var G__10590 = f__$1;
var G__10591 = c__$1;
var G__10592 = u__$1;
var G__10593 = v__$1;
var G__10594 = a__$1;
var G__10595 = b__$1;
var G__10596 = l__$1;
var G__10597 = r;
var G__10598 = s;
n = G__10588;
m = G__10589;
f = G__10590;
c = G__10591;
u = G__10592;
v = G__10593;
a = G__10594;
b = G__10595;
l = G__10596;
r = G__10597;
s = G__10598;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var part = (function (){var iter__8928__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s){
return (function iter__10546(s__10547){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s){
return (function (){var s__10547__$1 = s__10547;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10547__$1);if(temp__4092__auto__)
{var s__10547__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10547__$2))
{var c__8926__auto__ = cljs.core.chunk_first.call(null,s__10547__$2);var size__8927__auto__ = cljs.core.count.call(null,c__8926__auto__);var b__10549 = cljs.core.chunk_buffer.call(null,size__8927__auto__);if((function (){var i__10548 = 0;while(true){
if((i__10548 < size__8927__auto__))
{var y = cljs.core._nth.call(null,c__8926__auto__,i__10548);cljs.core.chunk_append.call(null,b__10549,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + 1)) - 1);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8928__auto__ = ((function (i__10548,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8926__auto__,size__8927__auto__,b__10549,s__10547__$2,temp__4092__auto__){
return (function iter__10558(s__10559){return (new cljs.core.LazySeq(null,((function (i__10548,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8926__auto__,size__8927__auto__,b__10549,s__10547__$2,temp__4092__auto__){
return (function (){var s__10559__$1 = s__10559;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__10559__$1);if(temp__4092__auto____$1)
{var s__10559__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__10559__$2))
{var c__8926__auto____$1 = cljs.core.chunk_first.call(null,s__10559__$2);var size__8927__auto____$1 = cljs.core.count.call(null,c__8926__auto____$1);var b__10561 = cljs.core.chunk_buffer.call(null,size__8927__auto____$1);if((function (){var i__10560 = 0;while(true){
if((i__10560 < size__8927__auto____$1))
{var z = cljs.core._nth.call(null,c__8926__auto____$1,i__10560);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{cljs.core.chunk_append.call(null,b__10561,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));
{
var G__10599 = (i__10560 + 1);
i__10560 = G__10599;
continue;
}
} else
{{
var G__10600 = (i__10560 + 1);
i__10560 = G__10600;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10561),iter__10558.call(null,cljs.core.chunk_rest.call(null,s__10559__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10561),null);
}
} else
{var z = cljs.core.first.call(null,s__10559__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),iter__10558.call(null,cljs.core.rest.call(null,s__10559__$2)));
} else
{{
var G__10601 = cljs.core.rest.call(null,s__10559__$2);
s__10559__$1 = G__10601;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__10548,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8926__auto__,size__8927__auto__,b__10549,s__10547__$2,temp__4092__auto__))
,null,null));
});})(i__10548,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8926__auto__,size__8927__auto__,b__10549,s__10547__$2,temp__4092__auto__))
;return iter__8928__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + 1)));
})());
})());
{
var G__10602 = (i__10548 + 1);
i__10548 = G__10602;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10549),iter__10546.call(null,cljs.core.chunk_rest.call(null,s__10547__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10549),null);
}
} else
{var y = cljs.core.first.call(null,s__10547__$2);return cljs.core.cons.call(null,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + 1)) - 1);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8928__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__10547__$2,temp__4092__auto__){
return (function iter__10562(s__10563){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__10547__$2,temp__4092__auto__){
return (function (){var s__10563__$1 = s__10563;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__10563__$1);if(temp__4092__auto____$1)
{var s__10563__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__10563__$2))
{var c__8926__auto__ = cljs.core.chunk_first.call(null,s__10563__$2);var size__8927__auto__ = cljs.core.count.call(null,c__8926__auto__);var b__10565 = cljs.core.chunk_buffer.call(null,size__8927__auto__);if((function (){var i__10564 = 0;while(true){
if((i__10564 < size__8927__auto__))
{var z = cljs.core._nth.call(null,c__8926__auto__,i__10564);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{cljs.core.chunk_append.call(null,b__10565,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));
{
var G__10603 = (i__10564 + 1);
i__10564 = G__10603;
continue;
}
} else
{{
var G__10604 = (i__10564 + 1);
i__10564 = G__10604;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10565),iter__10562.call(null,cljs.core.chunk_rest.call(null,s__10563__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10565),null);
}
} else
{var z = cljs.core.first.call(null,s__10563__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),iter__10562.call(null,cljs.core.rest.call(null,s__10563__$2)));
} else
{{
var G__10605 = cljs.core.rest.call(null,s__10563__$2);
s__10563__$1 = G__10605;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__10547__$2,temp__4092__auto__))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__10547__$2,temp__4092__auto__))
;return iter__8928__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + 1)));
})());
})(),iter__10546.call(null,cljs.core.rest.call(null,s__10547__$2)));
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s))
;return iter__8928__auto__.call(null,cljs.core.range.call(null,(l + 1)));
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
var G__10614 = (j - 1);
j = G__10614;
continue;
}
}
break;
}
})();if(cljs.core.truth_((function (){var and__8218__auto__ = r;if(cljs.core.truth_(and__8218__auto__))
{return (cljs.core._EQ_.call(null,j,a)) && ((((v.call(null,j) - 1) * (r - l)) < u.call(null,j)));
} else
{return and__8218__auto__;
}
})()))
{return foundation.app.data.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s);
} else
{if((cljs.core._EQ_.call(null,j,a)) && (cljs.core._EQ_.call(null,v.call(null,j),1)))
{return foundation.app.data.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var v__$1 = foundation.app.data.combinatorics.update.call(null,v,j,cljs.core.dec);var diff_uv = (cljs.core.truth_(s)?cljs.core.apply.call(null,cljs.core._PLUS_,(function (){var iter__8928__auto__ = ((function (v__$1){
return (function iter__10610(s__10611){return (new cljs.core.LazySeq(null,((function (v__$1){
return (function (){var s__10611__$1 = s__10611;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10611__$1);if(temp__4092__auto__)
{var s__10611__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10611__$2))
{var c__8926__auto__ = cljs.core.chunk_first.call(null,s__10611__$2);var size__8927__auto__ = cljs.core.count.call(null,c__8926__auto__);var b__10613 = cljs.core.chunk_buffer.call(null,size__8927__auto__);if((function (){var i__10612 = 0;while(true){
if((i__10612 < size__8927__auto__))
{var i = cljs.core._nth.call(null,c__8926__auto__,i__10612);cljs.core.chunk_append.call(null,b__10613,(u.call(null,i) - v__$1.call(null,i)));
{
var G__10615 = (i__10612 + 1);
i__10612 = G__10615;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10613),iter__10610.call(null,cljs.core.chunk_rest.call(null,s__10611__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10613),null);
}
} else
{var i = cljs.core.first.call(null,s__10611__$2);return cljs.core.cons.call(null,(u.call(null,i) - v__$1.call(null,i)),iter__10610.call(null,cljs.core.rest.call(null,s__10611__$2)));
}
} else
{return null;
}
break;
}
});})(v__$1))
,null,null));
});})(v__$1))
;return iter__8928__auto__.call(null,cljs.core.range.call(null,a,(j + 1)));
})()):null);var v__$2 = (function (){var ks = cljs.core.range.call(null,(j + 1),b);var v__$2 = v__$1;while(true){
if(cljs.core.empty_QMARK_.call(null,ks))
{return v__$2;
} else
{var k = cljs.core.first.call(null,ks);{
var G__10616 = cljs.core.rest.call(null,ks);
var G__10617 = cljs.core.assoc.call(null,v__$2,k,u.call(null,k));
ks = G__10616;
v__$2 = G__10617;
continue;
}
}
break;
}
})();var min_partitions_after_this = (cljs.core.truth_(s)?(s - (l + 1)):0);var amount_to_dec = (cljs.core.truth_(s)?(function (){var x__8542__auto__ = 0;var y__8543__auto__ = (min_partitions_after_this - diff_uv);return ((x__8542__auto__ > y__8543__auto__) ? x__8542__auto__ : y__8543__auto__);
})():0);var v__$3 = ((cljs.core._EQ_.call(null,amount_to_dec,0))?v__$2:(function (){var k_1 = (b - 1);var v__$3 = v__$2;var amount = amount_to_dec;while(true){
var vk = v__$3.call(null,k_1);if((amount > vk))
{{
var G__10618 = (k_1 - 1);
var G__10619 = cljs.core.assoc.call(null,v__$3,k_1,0);
var G__10620 = (amount - vk);
k_1 = G__10618;
v__$3 = G__10619;
amount = G__10620;
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
var partitions_M__delegate = function (items,p__10621){var map__10679 = p__10621;var map__10679__$1 = ((cljs.core.seq_QMARK_.call(null,map__10679))?cljs.core.apply.call(null,cljs.core.hash_map,map__10679):map__10679);var from = cljs.core.get.call(null,map__10679__$1,new cljs.core.Keyword(null,"min","min",1014012356));var to = cljs.core.get.call(null,map__10679__$1,new cljs.core.Keyword(null,"max","max",1014012118));if(cljs.core._EQ_.call(null,cljs.core.count.call(null,items),0))
{if((((function (){var or__8230__auto__ = from;if(cljs.core.truth_(or__8230__auto__))
{return or__8230__auto__;
} else
{return 0;
}
})() <= 0)) && ((0 <= (function (){var or__8230__auto__ = to;if(cljs.core.truth_(or__8230__auto__))
{return or__8230__auto__;
} else
{return 0;
}
})())))
{return cljs.core.list(cljs.core.List.EMPTY);
} else
{return cljs.core.List.EMPTY;
}
} else
{var items__$1 = cljs.core.vec.call(null,items);var ditems = cljs.core.vec.call(null,cljs.core.distinct.call(null,items__$1));var freqs = cljs.core.frequencies.call(null,items__$1);var N = cljs.core.count.call(null,items__$1);var M = cljs.core.count.call(null,ditems);var from__$1 = (cljs.core.truth_((function (){var and__8218__auto__ = from;if(cljs.core.truth_(and__8218__auto__))
{return (from <= 1);
} else
{return and__8218__auto__;
}
})())?null:from);var to__$1 = (cljs.core.truth_((function (){var and__8218__auto__ = to;if(cljs.core.truth_(and__8218__auto__))
{return (to >= N);
} else
{return and__8218__auto__;
}
})())?null:to);if(!(((1 <= (function (){var or__8230__auto__ = from__$1;if(cljs.core.truth_(or__8230__auto__))
{return or__8230__auto__;
} else
{return 1;
}
})())) && ((((function (){var or__8230__auto__ = from__$1;if(cljs.core.truth_(or__8230__auto__))
{return or__8230__auto__;
} else
{return 1;
}
})() <= (function (){var or__8230__auto__ = to__$1;if(cljs.core.truth_(or__8230__auto__))
{return or__8230__auto__;
} else
{return N;
}
})())) && (((function (){var or__8230__auto__ = to__$1;if(cljs.core.truth_(or__8230__auto__))
{return or__8230__auto__;
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
{var start_multiset = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8928__auto__ = (function iter__10680(s__10681){return (new cljs.core.LazySeq(null,(function (){var s__10681__$1 = s__10681;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10681__$1);if(temp__4092__auto__)
{var s__10681__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10681__$2))
{var c__8926__auto__ = cljs.core.chunk_first.call(null,s__10681__$2);var size__8927__auto__ = cljs.core.count.call(null,c__8926__auto__);var b__10683 = cljs.core.chunk_buffer.call(null,size__8927__auto__);if((function (){var i__10682 = 0;while(true){
if((i__10682 < size__8927__auto__))
{var i = cljs.core._nth.call(null,c__8926__auto__,i__10682);var j = (i + 1);cljs.core.chunk_append.call(null,b__10683,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null));
{
var G__10736 = (i__10682 + 1);
i__10682 = G__10736;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10683),iter__10680.call(null,cljs.core.chunk_rest.call(null,s__10681__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10683),null);
}
} else
{var i = cljs.core.first.call(null,s__10681__$2);var j = (i + 1);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null),iter__10680.call(null,cljs.core.rest.call(null,s__10681__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8928__auto__.call(null,cljs.core.range.call(null,M));
})());var parts = foundation.app.data.combinatorics.multiset_partitions_M.call(null,start_multiset,to__$1,from__$1);var iter__8928__auto__ = (function iter__10684(s__10685){return (new cljs.core.LazySeq(null,(function (){var s__10685__$1 = s__10685;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10685__$1);if(temp__4092__auto__)
{var s__10685__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10685__$2))
{var c__8926__auto__ = cljs.core.chunk_first.call(null,s__10685__$2);var size__8927__auto__ = cljs.core.count.call(null,c__8926__auto__);var b__10687 = cljs.core.chunk_buffer.call(null,size__8927__auto__);if((function (){var i__10686 = 0;while(true){
if((i__10686 < size__8927__auto__))
{var part = cljs.core._nth.call(null,c__8926__auto__,i__10686);cljs.core.chunk_append.call(null,b__10687,(function (){var iter__8928__auto__ = ((function (i__10686,part,c__8926__auto__,size__8927__auto__,b__10687,s__10685__$2,temp__4092__auto__){
return (function iter__10712(s__10713){return (new cljs.core.LazySeq(null,((function (i__10686,part,c__8926__auto__,size__8927__auto__,b__10687,s__10685__$2,temp__4092__auto__){
return (function (){var s__10713__$1 = s__10713;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__10713__$1);if(temp__4092__auto____$1)
{var s__10713__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__10713__$2))
{var c__8926__auto____$1 = cljs.core.chunk_first.call(null,s__10713__$2);var size__8927__auto____$1 = cljs.core.count.call(null,c__8926__auto____$1);var b__10715 = cljs.core.chunk_buffer.call(null,size__8927__auto____$1);if((function (){var i__10714 = 0;while(true){
if((i__10714 < size__8927__auto____$1))
{var multiset = cljs.core._nth.call(null,c__8926__auto____$1,i__10714);cljs.core.chunk_append.call(null,b__10715,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__10714,i__10686,multiset,c__8926__auto____$1,size__8927__auto____$1,b__10715,s__10713__$2,temp__4092__auto____$1,part,c__8926__auto__,size__8927__auto__,b__10687,s__10685__$2,temp__4092__auto__){
return (function (p__10720){var vec__10721 = p__10720;var index = cljs.core.nth.call(null,vec__10721,0,null);var numtimes = cljs.core.nth.call(null,vec__10721,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__10714,i__10686,multiset,c__8926__auto____$1,size__8927__auto____$1,b__10715,s__10713__$2,temp__4092__auto____$1,part,c__8926__auto__,size__8927__auto__,b__10687,s__10685__$2,temp__4092__auto__))
,multiset)));
{
var G__10737 = (i__10714 + 1);
i__10714 = G__10737;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10715),iter__10712.call(null,cljs.core.chunk_rest.call(null,s__10713__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10715),null);
}
} else
{var multiset = cljs.core.first.call(null,s__10713__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__10686,multiset,s__10713__$2,temp__4092__auto____$1,part,c__8926__auto__,size__8927__auto__,b__10687,s__10685__$2,temp__4092__auto__){
return (function (p__10722){var vec__10723 = p__10722;var index = cljs.core.nth.call(null,vec__10723,0,null);var numtimes = cljs.core.nth.call(null,vec__10723,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__10686,multiset,s__10713__$2,temp__4092__auto____$1,part,c__8926__auto__,size__8927__auto__,b__10687,s__10685__$2,temp__4092__auto__))
,multiset)),iter__10712.call(null,cljs.core.rest.call(null,s__10713__$2)));
}
} else
{return null;
}
break;
}
});})(i__10686,part,c__8926__auto__,size__8927__auto__,b__10687,s__10685__$2,temp__4092__auto__))
,null,null));
});})(i__10686,part,c__8926__auto__,size__8927__auto__,b__10687,s__10685__$2,temp__4092__auto__))
;return iter__8928__auto__.call(null,part);
})());
{
var G__10738 = (i__10686 + 1);
i__10686 = G__10738;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10687),iter__10684.call(null,cljs.core.chunk_rest.call(null,s__10685__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10687),null);
}
} else
{var part = cljs.core.first.call(null,s__10685__$2);return cljs.core.cons.call(null,(function (){var iter__8928__auto__ = ((function (part,s__10685__$2,temp__4092__auto__){
return (function iter__10724(s__10725){return (new cljs.core.LazySeq(null,((function (part,s__10685__$2,temp__4092__auto__){
return (function (){var s__10725__$1 = s__10725;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__10725__$1);if(temp__4092__auto____$1)
{var s__10725__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__10725__$2))
{var c__8926__auto__ = cljs.core.chunk_first.call(null,s__10725__$2);var size__8927__auto__ = cljs.core.count.call(null,c__8926__auto__);var b__10727 = cljs.core.chunk_buffer.call(null,size__8927__auto__);if((function (){var i__10726 = 0;while(true){
if((i__10726 < size__8927__auto__))
{var multiset = cljs.core._nth.call(null,c__8926__auto__,i__10726);cljs.core.chunk_append.call(null,b__10727,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__10726,multiset,c__8926__auto__,size__8927__auto__,b__10727,s__10725__$2,temp__4092__auto____$1,part,s__10685__$2,temp__4092__auto__){
return (function (p__10732){var vec__10733 = p__10732;var index = cljs.core.nth.call(null,vec__10733,0,null);var numtimes = cljs.core.nth.call(null,vec__10733,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__10726,multiset,c__8926__auto__,size__8927__auto__,b__10727,s__10725__$2,temp__4092__auto____$1,part,s__10685__$2,temp__4092__auto__))
,multiset)));
{
var G__10739 = (i__10726 + 1);
i__10726 = G__10739;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10727),iter__10724.call(null,cljs.core.chunk_rest.call(null,s__10725__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10727),null);
}
} else
{var multiset = cljs.core.first.call(null,s__10725__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (multiset,s__10725__$2,temp__4092__auto____$1,part,s__10685__$2,temp__4092__auto__){
return (function (p__10734){var vec__10735 = p__10734;var index = cljs.core.nth.call(null,vec__10735,0,null);var numtimes = cljs.core.nth.call(null,vec__10735,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(multiset,s__10725__$2,temp__4092__auto____$1,part,s__10685__$2,temp__4092__auto__))
,multiset)),iter__10724.call(null,cljs.core.rest.call(null,s__10725__$2)));
}
} else
{return null;
}
break;
}
});})(part,s__10685__$2,temp__4092__auto__))
,null,null));
});})(part,s__10685__$2,temp__4092__auto__))
;return iter__8928__auto__.call(null,part);
})(),iter__10684.call(null,cljs.core.rest.call(null,s__10685__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8928__auto__.call(null,parts);
} else
{return null;
}
}
}
}
};
var partitions_M = function (items,var_args){
var p__10621 = null;if (arguments.length > 1) {
  p__10621 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions_M__delegate.call(this,items,p__10621);};
partitions_M.cljs$lang$maxFixedArity = 1;
partitions_M.cljs$lang$applyTo = (function (arglist__10740){
var items = cljs.core.first(arglist__10740);
var p__10621 = cljs.core.rest(arglist__10740);
return partitions_M__delegate(items,p__10621);
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
partitions.cljs$lang$applyTo = (function (arglist__10741){
var items = cljs.core.first(arglist__10741);
var args = cljs.core.rest(arglist__10741);
return partitions__delegate(items,args);
});
partitions.cljs$core$IFn$_invoke$arity$variadic = partitions__delegate;
return partitions;
})()
;

//# sourceMappingURL=combinatorics.js.map