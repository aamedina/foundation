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
var G__27498 = cljs.core.assoc.call(null,c__$2,(j__$1 - 1),(c__$2.call(null,j__$1) - 1));
var G__27499 = (j__$1 - 1);
c__$2 = G__27498;
j__$1 = G__27499;
continue;
}
}
break;
}
}
}
});
return (new cljs.core.LazySeq(null,(function (){var c = cljs.core.vec.call(null,cljs.core.cons.call(null,null,(function (){var iter__14514__auto__ = (function iter__27494(s__27495){return (new cljs.core.LazySeq(null,(function (){var s__27495__$1 = s__27495;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__27495__$1);if(temp__4092__auto__)
{var s__27495__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27495__$2))
{var c__14512__auto__ = cljs.core.chunk_first.call(null,s__27495__$2);var size__14513__auto__ = cljs.core.count.call(null,c__14512__auto__);var b__27497 = cljs.core.chunk_buffer.call(null,size__14513__auto__);if((function (){var i__27496 = 0;while(true){
if((i__27496 < size__14513__auto__))
{var j = cljs.core._nth.call(null,c__14512__auto__,i__27496);cljs.core.chunk_append.call(null,b__27497,((j + cnt) + (- (n + 1))));
{
var G__27500 = (i__27496 + 1);
i__27496 = G__27500;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27497),iter__27494.call(null,cljs.core.chunk_rest.call(null,s__27495__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27497),null);
}
} else
{var j = cljs.core.first.call(null,s__27495__$2);return cljs.core.cons.call(null,((j + cnt) + (- (n + 1))),iter__27494.call(null,cljs.core.rest.call(null,s__27495__$2)));
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
{return cljs.core.map.call(null,(function (p1__27501_SHARP_){return cljs.core.map.call(null,v_items,p1__27501_SHARP_);
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
var G__27502 = (i - 1);
var G__27503 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__27502;
v_seqs__$2 = G__27503;
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
cartesian_product.cljs$lang$applyTo = (function (arglist__27504){
var seqs = cljs.core.seq(arglist__27504);
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
var G__27505 = (i - 1);
i = G__27505;
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
var G__27506 = (i - 1);
i = G__27506;
continue;
}
}
break;
}
})();var v__$1 = cljs.core.assoc.call(null,v,j,v.call(null,l),l,vj);var k = (j + 1);var l__$1 = (len - 1);while(true){
if((k < l__$1))
{{
var G__27507 = cljs.core.assoc.call(null,v__$1,k,v__$1.call(null,l__$1),l__$1,v__$1.call(null,k));
var G__27508 = (k + 1);
var G__27509 = (l__$1 - 1);
v__$1 = G__27507;
k = G__27508;
l__$1 = G__27509;
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
return (function iter__27514(s__27515){return (new cljs.core.LazySeq(null,((function (f,v){
return (function (){var s__27515__$1 = s__27515;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__27515__$1);if(temp__4092__auto__)
{var s__27515__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27515__$2))
{var c__14512__auto__ = cljs.core.chunk_first.call(null,s__27515__$2);var size__14513__auto__ = cljs.core.count.call(null,c__14512__auto__);var b__27517 = cljs.core.chunk_buffer.call(null,size__14513__auto__);if((function (){var i__27516 = 0;while(true){
if((i__27516 < size__14513__auto__))
{var i = cljs.core._nth.call(null,c__14512__auto__,i__27516);cljs.core.chunk_append.call(null,b__27517,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));
{
var G__27518 = (i__27516 + 1);
i__27516 = G__27518;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27517),iter__27514.call(null,cljs.core.chunk_rest.call(null,s__27515__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27517),null);
}
} else
{var i = cljs.core.first.call(null,s__27515__$2);return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),iter__27514.call(null,cljs.core.rest.call(null,s__27515__$2)));
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
{var v = cljs.core.vec.call(null,items);return cljs.core.map.call(null,(function (p1__27519_SHARP_){return cljs.core.map.call(null,v,p1__27519_SHARP_);
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
{return cljs.core.vec.call(null,(function (){var iter__14514__auto__ = (function iter__27524(s__27525){return (new cljs.core.LazySeq(null,(function (){var s__27525__$1 = s__27525;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__27525__$1);if(temp__4092__auto__)
{var s__27525__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27525__$2))
{var c__14512__auto__ = cljs.core.chunk_first.call(null,s__27525__$2);var size__14513__auto__ = cljs.core.count.call(null,c__14512__auto__);var b__27527 = cljs.core.chunk_buffer.call(null,size__14513__auto__);if((function (){var i__27526 = 0;while(true){
if((i__27526 < size__14513__auto__))
{var i = cljs.core._nth.call(null,c__14512__auto__,i__27526);cljs.core.chunk_append.call(null,b__27527,(function (){var x__14128__auto__ = 0;var y__14129__auto__ = (i - ((n - s) - -1));return ((x__14128__auto__ > y__14129__auto__) ? x__14128__auto__ : y__14129__auto__);
})());
{
var G__27528 = (i__27526 + 1);
i__27526 = G__27528;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27527),iter__27524.call(null,cljs.core.chunk_rest.call(null,s__27525__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27527),null);
}
} else
{var i = cljs.core.first.call(null,s__27525__$2);return cljs.core.cons.call(null,(function (){var x__14128__auto__ = 0;var y__14129__auto__ = (i - ((n - s) - -1));return ((x__14128__auto__ > y__14129__auto__) ? x__14128__auto__ : y__14129__auto__);
})(),iter__27524.call(null,cljs.core.rest.call(null,s__27525__$2)));
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
var G__27531 = (j - 1);
j = G__27531;
continue;
}
}
break;
}
})();if((j === 0))
{return cljs.core.List.EMPTY;
} else
{var a__$1 = foundation.app.data.combinatorics.update.call(null,a,j,cljs.core.inc);var x = (cljs.core.truth_(s)?(s - (b.call(null,j) + ((cljs.core._EQ_.call(null,a__$1.call(null,j),b.call(null,j)))?1:0))):null);var vec__27530 = (function (){var a__$2 = a__$1;var b__$1 = b;var i = (j + 1);var current_max = (b__$1.call(null,j) + (((b__$1.call(null,j) === a__$2.call(null,j)))?1:0));while(true){
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
var G__27532 = cljs.core.assoc.call(null,a__$2,i,new_a_i);
var G__27533 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__27534 = (i + 1);
var G__27535 = (function (){var x__14128__auto__ = current_max;var y__14129__auto__ = (new_a_i + 1);return ((x__14128__auto__ > y__14129__auto__) ? x__14128__auto__ : y__14129__auto__);
})();
a__$2 = G__27532;
b__$1 = G__27533;
i = G__27534;
current_max = G__27535;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__27536 = cljs.core.assoc.call(null,a__$2,i,0);
var G__27537 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__27538 = (i + 1);
var G__27539 = current_max;
a__$2 = G__27536;
b__$1 = G__27537;
i = G__27538;
current_max = G__27539;
continue;
}
} else
{return null;
}
}
}
break;
}
})();var a__$2 = cljs.core.nth.call(null,vec__27530,0,null);var b__$1 = cljs.core.nth.call(null,vec__27530,1,null);return growth_strings_H.call(null,n,a__$2,b__$1,r,s);
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
var lex_partitions_H__delegate = function (N,p__27540){var map__27546 = p__27540;var map__27546__$1 = ((cljs.core.seq_QMARK_.call(null,map__27546))?cljs.core.apply.call(null,cljs.core.hash_map,map__27546):map__27546);var from = cljs.core.get.call(null,map__27546__$1,new cljs.core.Keyword(null,"min","min",1014012356));var to = cljs.core.get.call(null,map__27546__$1,new cljs.core.Keyword(null,"max","max",1014012118));if(cljs.core._EQ_.call(null,N,0))
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
{var growth_strings = foundation.app.data.combinatorics.growth_strings_H.call(null,N,to__$1,from__$1);var iter__14514__auto__ = (function iter__27547(s__27548){return (new cljs.core.LazySeq(null,(function (){var s__27548__$1 = s__27548;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__27548__$1);if(temp__4092__auto__)
{var s__27548__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27548__$2))
{var c__14512__auto__ = cljs.core.chunk_first.call(null,s__27548__$2);var size__14513__auto__ = cljs.core.count.call(null,c__14512__auto__);var b__27550 = cljs.core.chunk_buffer.call(null,size__14513__auto__);if((function (){var i__27549 = 0;while(true){
if((i__27549 < size__14513__auto__))
{var growth_string = cljs.core._nth.call(null,c__14512__auto__,i__27549);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));cljs.core.chunk_append.call(null,b__27550,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))));
{
var G__27551 = (i__27549 + 1);
i__27549 = G__27551;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27550),iter__27547.call(null,cljs.core.chunk_rest.call(null,s__27548__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27550),null);
}
} else
{var growth_string = cljs.core.first.call(null,s__27548__$2);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));return cljs.core.cons.call(null,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))),iter__27547.call(null,cljs.core.rest.call(null,s__27548__$2)));
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
var p__27540 = null;if (arguments.length > 1) {
  p__27540 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return lex_partitions_H__delegate.call(this,N,p__27540);};
lex_partitions_H.cljs$lang$maxFixedArity = 1;
lex_partitions_H.cljs$lang$applyTo = (function (arglist__27552){
var N = cljs.core.first(arglist__27552);
var p__27540 = cljs.core.rest(arglist__27552);
return lex_partitions_H__delegate(N,p__27540);
});
lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic = lex_partitions_H__delegate;
return lex_partitions_H;
})()
;
/**
* @param {...*} var_args
*/
foundation.app.data.combinatorics.partitions_H = (function() { 
var partitions_H__delegate = function (items,args){var items__$1 = cljs.core.vec.call(null,items);var N = cljs.core.count.call(null,items__$1);var lex = cljs.core.apply.call(null,foundation.app.data.combinatorics.lex_partitions_H,N,args);var iter__14514__auto__ = (function iter__27573(s__27574){return (new cljs.core.LazySeq(null,(function (){var s__27574__$1 = s__27574;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__27574__$1);if(temp__4092__auto__)
{var s__27574__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27574__$2))
{var c__14512__auto__ = cljs.core.chunk_first.call(null,s__27574__$2);var size__14513__auto__ = cljs.core.count.call(null,c__14512__auto__);var b__27576 = cljs.core.chunk_buffer.call(null,size__14513__auto__);if((function (){var i__27575 = 0;while(true){
if((i__27575 < size__14513__auto__))
{var parts = cljs.core._nth.call(null,c__14512__auto__,i__27575);cljs.core.chunk_append.call(null,b__27576,(function (){var iter__14514__auto__ = ((function (i__27575,parts,c__14512__auto__,size__14513__auto__,b__27576,s__27574__$2,temp__4092__auto__){
return (function iter__27585(s__27586){return (new cljs.core.LazySeq(null,((function (i__27575,parts,c__14512__auto__,size__14513__auto__,b__27576,s__27574__$2,temp__4092__auto__){
return (function (){var s__27586__$1 = s__27586;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__27586__$1);if(temp__4092__auto____$1)
{var s__27586__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__27586__$2))
{var c__14512__auto____$1 = cljs.core.chunk_first.call(null,s__27586__$2);var size__14513__auto____$1 = cljs.core.count.call(null,c__14512__auto____$1);var b__27588 = cljs.core.chunk_buffer.call(null,size__14513__auto____$1);if((function (){var i__27587 = 0;while(true){
if((i__27587 < size__14513__auto____$1))
{var part = cljs.core._nth.call(null,c__14512__auto____$1,i__27587);cljs.core.chunk_append.call(null,b__27588,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__27587,i__27575,part,c__14512__auto____$1,size__14513__auto____$1,b__27588,s__27586__$2,temp__4092__auto____$1,parts,c__14512__auto__,size__14513__auto__,b__27576,s__27574__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__27587,i__27575,part,c__14512__auto____$1,size__14513__auto____$1,b__27588,s__27586__$2,temp__4092__auto____$1,parts,c__14512__auto__,size__14513__auto__,b__27576,s__27574__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__27593 = (i__27587 + 1);
i__27587 = G__27593;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27588),iter__27585.call(null,cljs.core.chunk_rest.call(null,s__27586__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27588),null);
}
} else
{var part = cljs.core.first.call(null,s__27586__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__27575,part,s__27586__$2,temp__4092__auto____$1,parts,c__14512__auto__,size__14513__auto__,b__27576,s__27574__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__27575,part,s__27586__$2,temp__4092__auto____$1,parts,c__14512__auto__,size__14513__auto__,b__27576,s__27574__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__27585.call(null,cljs.core.rest.call(null,s__27586__$2)));
}
} else
{return null;
}
break;
}
});})(i__27575,parts,c__14512__auto__,size__14513__auto__,b__27576,s__27574__$2,temp__4092__auto__))
,null,null));
});})(i__27575,parts,c__14512__auto__,size__14513__auto__,b__27576,s__27574__$2,temp__4092__auto__))
;return iter__14514__auto__.call(null,parts);
})());
{
var G__27594 = (i__27575 + 1);
i__27575 = G__27594;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27576),iter__27573.call(null,cljs.core.chunk_rest.call(null,s__27574__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27576),null);
}
} else
{var parts = cljs.core.first.call(null,s__27574__$2);return cljs.core.cons.call(null,(function (){var iter__14514__auto__ = ((function (parts,s__27574__$2,temp__4092__auto__){
return (function iter__27589(s__27590){return (new cljs.core.LazySeq(null,((function (parts,s__27574__$2,temp__4092__auto__){
return (function (){var s__27590__$1 = s__27590;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__27590__$1);if(temp__4092__auto____$1)
{var s__27590__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__27590__$2))
{var c__14512__auto__ = cljs.core.chunk_first.call(null,s__27590__$2);var size__14513__auto__ = cljs.core.count.call(null,c__14512__auto__);var b__27592 = cljs.core.chunk_buffer.call(null,size__14513__auto__);if((function (){var i__27591 = 0;while(true){
if((i__27591 < size__14513__auto__))
{var part = cljs.core._nth.call(null,c__14512__auto__,i__27591);cljs.core.chunk_append.call(null,b__27592,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__27591,part,c__14512__auto__,size__14513__auto__,b__27592,s__27590__$2,temp__4092__auto____$1,parts,s__27574__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__27591,part,c__14512__auto__,size__14513__auto__,b__27592,s__27590__$2,temp__4092__auto____$1,parts,s__27574__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__27595 = (i__27591 + 1);
i__27591 = G__27595;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27592),iter__27589.call(null,cljs.core.chunk_rest.call(null,s__27590__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27592),null);
}
} else
{var part = cljs.core.first.call(null,s__27590__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (part,s__27590__$2,temp__4092__auto____$1,parts,s__27574__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(part,s__27590__$2,temp__4092__auto____$1,parts,s__27574__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__27589.call(null,cljs.core.rest.call(null,s__27590__$2)));
}
} else
{return null;
}
break;
}
});})(parts,s__27574__$2,temp__4092__auto__))
,null,null));
});})(parts,s__27574__$2,temp__4092__auto__))
;return iter__14514__auto__.call(null,parts);
})(),iter__27573.call(null,cljs.core.rest.call(null,s__27574__$2)));
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
partitions_H.cljs$lang$applyTo = (function (arglist__27596){
var items = cljs.core.first(arglist__27596);
var args = cljs.core.rest(arglist__27596);
return partitions_H__delegate(items,args);
});
partitions_H.cljs$core$IFn$_invoke$arity$variadic = partitions_H__delegate;
return partitions_H;
})()
;
foundation.app.data.combinatorics.multiset_partitions_M = (function() {
var multiset_partitions_M = null;
var multiset_partitions_M__3 = (function (multiset,r,s){var n = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,multiset));var m = cljs.core.count.call(null,multiset);var f = cljs.core.PersistentVector.EMPTY;var c = cljs.core.PersistentVector.EMPTY;var u = cljs.core.PersistentVector.EMPTY;var v = cljs.core.PersistentVector.EMPTY;var vec__27619 = (function (){var j = 0;var c__$1 = c;var u__$1 = u;var v__$1 = v;while(true){
if(cljs.core._EQ_.call(null,j,m))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,u__$1,v__$1], null);
} else
{{
var G__27641 = (j + 1);
var G__27642 = cljs.core.assoc.call(null,c__$1,j,(j + 1));
var G__27643 = cljs.core.assoc.call(null,u__$1,j,multiset.call(null,(j + 1)));
var G__27644 = cljs.core.assoc.call(null,v__$1,j,multiset.call(null,(j + 1)));
j = G__27641;
c__$1 = G__27642;
u__$1 = G__27643;
v__$1 = G__27644;
continue;
}
}
break;
}
})();var c__$1 = cljs.core.nth.call(null,vec__27619,0,null);var u__$1 = cljs.core.nth.call(null,vec__27619,1,null);var v__$1 = cljs.core.nth.call(null,vec__27619,2,null);var a = 0;var b = m;var l = 0;var f__$1 = cljs.core.assoc.call(null,f,0,0,1,m);var stack = cljs.core.List.EMPTY;return multiset_partitions_M.call(null,n,m,f__$1,c__$1,u__$1,v__$1,a,b,l,r,s);
});
var multiset_partitions_M__11 = (function (n,m,f,c,u,v,a,b,l,r,s){while(true){
var vec__27620 = (function (){var j = a;var k = b;var x = false;var u__$1 = u;var v__$1 = v;var c__$1 = c;while(true){
if((j >= b))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [u__$1,v__$1,c__$1,j,k], null);
} else
{var u__$2 = cljs.core.assoc.call(null,u__$1,k,(u__$1.call(null,j) - v__$1.call(null,j)));if(cljs.core._EQ_.call(null,u__$2.call(null,k),0))
{{
var G__27645 = (j + 1);
var G__27646 = k;
var G__27647 = true;
var G__27648 = u__$2;
var G__27649 = v__$1;
var G__27650 = c__$1;
j = G__27645;
k = G__27646;
x = G__27647;
u__$1 = G__27648;
v__$1 = G__27649;
c__$1 = G__27650;
continue;
}
} else
{if(!(x))
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,(function (){var x__14135__auto__ = v__$1.call(null,j);var y__14136__auto__ = u__$2.call(null,k);return ((x__14135__auto__ < y__14136__auto__) ? x__14135__auto__ : y__14136__auto__);
})());var x__$1 = (u__$2.call(null,k) < v__$2.call(null,j));var k__$1 = (k + 1);var j__$1 = (j + 1);{
var G__27651 = j__$1;
var G__27652 = k__$1;
var G__27653 = x__$1;
var G__27654 = u__$2;
var G__27655 = v__$2;
var G__27656 = c__$2;
j = G__27651;
k = G__27652;
x = G__27653;
u__$1 = G__27654;
v__$1 = G__27655;
c__$1 = G__27656;
continue;
}
} else
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,u__$2.call(null,k));var k__$1 = (k + 1);var j__$1 = (j + 1);{
var G__27657 = j__$1;
var G__27658 = k__$1;
var G__27659 = x;
var G__27660 = u__$2;
var G__27661 = v__$2;
var G__27662 = c__$2;
j = G__27657;
k = G__27658;
x = G__27659;
u__$1 = G__27660;
v__$1 = G__27661;
c__$1 = G__27662;
continue;
}
}
}
}
break;
}
})();var u__$1 = cljs.core.nth.call(null,vec__27620,0,null);var v__$1 = cljs.core.nth.call(null,vec__27620,1,null);var c__$1 = cljs.core.nth.call(null,vec__27620,2,null);var j = cljs.core.nth.call(null,vec__27620,3,null);var k = cljs.core.nth.call(null,vec__27620,4,null);if(cljs.core.truth_((function (){var and__13809__auto__ = r;if(cljs.core.truth_(and__13809__auto__))
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
var G__27663 = n;
var G__27664 = m;
var G__27665 = f__$1;
var G__27666 = c__$1;
var G__27667 = u__$1;
var G__27668 = v__$1;
var G__27669 = a__$1;
var G__27670 = b__$1;
var G__27671 = l__$1;
var G__27672 = r;
var G__27673 = s;
n = G__27663;
m = G__27664;
f = G__27665;
c = G__27666;
u = G__27667;
v = G__27668;
a = G__27669;
b = G__27670;
l = G__27671;
r = G__27672;
s = G__27673;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var part = (function (){var iter__14514__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s){
return (function iter__27621(s__27622){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s){
return (function (){var s__27622__$1 = s__27622;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__27622__$1);if(temp__4092__auto__)
{var s__27622__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27622__$2))
{var c__14512__auto__ = cljs.core.chunk_first.call(null,s__27622__$2);var size__14513__auto__ = cljs.core.count.call(null,c__14512__auto__);var b__27624 = cljs.core.chunk_buffer.call(null,size__14513__auto__);if((function (){var i__27623 = 0;while(true){
if((i__27623 < size__14513__auto__))
{var y = cljs.core._nth.call(null,c__14512__auto__,i__27623);cljs.core.chunk_append.call(null,b__27624,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + 1)) - 1);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__14514__auto__ = ((function (i__27623,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__14512__auto__,size__14513__auto__,b__27624,s__27622__$2,temp__4092__auto__){
return (function iter__27633(s__27634){return (new cljs.core.LazySeq(null,((function (i__27623,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__14512__auto__,size__14513__auto__,b__27624,s__27622__$2,temp__4092__auto__){
return (function (){var s__27634__$1 = s__27634;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__27634__$1);if(temp__4092__auto____$1)
{var s__27634__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__27634__$2))
{var c__14512__auto____$1 = cljs.core.chunk_first.call(null,s__27634__$2);var size__14513__auto____$1 = cljs.core.count.call(null,c__14512__auto____$1);var b__27636 = cljs.core.chunk_buffer.call(null,size__14513__auto____$1);if((function (){var i__27635 = 0;while(true){
if((i__27635 < size__14513__auto____$1))
{var z = cljs.core._nth.call(null,c__14512__auto____$1,i__27635);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{cljs.core.chunk_append.call(null,b__27636,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));
{
var G__27674 = (i__27635 + 1);
i__27635 = G__27674;
continue;
}
} else
{{
var G__27675 = (i__27635 + 1);
i__27635 = G__27675;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27636),iter__27633.call(null,cljs.core.chunk_rest.call(null,s__27634__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27636),null);
}
} else
{var z = cljs.core.first.call(null,s__27634__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),iter__27633.call(null,cljs.core.rest.call(null,s__27634__$2)));
} else
{{
var G__27676 = cljs.core.rest.call(null,s__27634__$2);
s__27634__$1 = G__27676;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__27623,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__14512__auto__,size__14513__auto__,b__27624,s__27622__$2,temp__4092__auto__))
,null,null));
});})(i__27623,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__14512__auto__,size__14513__auto__,b__27624,s__27622__$2,temp__4092__auto__))
;return iter__14514__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + 1)));
})());
})());
{
var G__27677 = (i__27623 + 1);
i__27623 = G__27677;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27624),iter__27621.call(null,cljs.core.chunk_rest.call(null,s__27622__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27624),null);
}
} else
{var y = cljs.core.first.call(null,s__27622__$2);return cljs.core.cons.call(null,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + 1)) - 1);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__14514__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__27622__$2,temp__4092__auto__){
return (function iter__27637(s__27638){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__27622__$2,temp__4092__auto__){
return (function (){var s__27638__$1 = s__27638;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__27638__$1);if(temp__4092__auto____$1)
{var s__27638__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__27638__$2))
{var c__14512__auto__ = cljs.core.chunk_first.call(null,s__27638__$2);var size__14513__auto__ = cljs.core.count.call(null,c__14512__auto__);var b__27640 = cljs.core.chunk_buffer.call(null,size__14513__auto__);if((function (){var i__27639 = 0;while(true){
if((i__27639 < size__14513__auto__))
{var z = cljs.core._nth.call(null,c__14512__auto__,i__27639);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{cljs.core.chunk_append.call(null,b__27640,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));
{
var G__27678 = (i__27639 + 1);
i__27639 = G__27678;
continue;
}
} else
{{
var G__27679 = (i__27639 + 1);
i__27639 = G__27679;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27640),iter__27637.call(null,cljs.core.chunk_rest.call(null,s__27638__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27640),null);
}
} else
{var z = cljs.core.first.call(null,s__27638__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),iter__27637.call(null,cljs.core.rest.call(null,s__27638__$2)));
} else
{{
var G__27680 = cljs.core.rest.call(null,s__27638__$2);
s__27638__$1 = G__27680;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__27622__$2,temp__4092__auto__))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__27622__$2,temp__4092__auto__))
;return iter__14514__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + 1)));
})());
})(),iter__27621.call(null,cljs.core.rest.call(null,s__27622__$2)));
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
var G__27689 = (j - 1);
j = G__27689;
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
return (function iter__27685(s__27686){return (new cljs.core.LazySeq(null,((function (v__$1){
return (function (){var s__27686__$1 = s__27686;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__27686__$1);if(temp__4092__auto__)
{var s__27686__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27686__$2))
{var c__14512__auto__ = cljs.core.chunk_first.call(null,s__27686__$2);var size__14513__auto__ = cljs.core.count.call(null,c__14512__auto__);var b__27688 = cljs.core.chunk_buffer.call(null,size__14513__auto__);if((function (){var i__27687 = 0;while(true){
if((i__27687 < size__14513__auto__))
{var i = cljs.core._nth.call(null,c__14512__auto__,i__27687);cljs.core.chunk_append.call(null,b__27688,(u.call(null,i) - v__$1.call(null,i)));
{
var G__27690 = (i__27687 + 1);
i__27687 = G__27690;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27688),iter__27685.call(null,cljs.core.chunk_rest.call(null,s__27686__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27688),null);
}
} else
{var i = cljs.core.first.call(null,s__27686__$2);return cljs.core.cons.call(null,(u.call(null,i) - v__$1.call(null,i)),iter__27685.call(null,cljs.core.rest.call(null,s__27686__$2)));
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
var G__27691 = cljs.core.rest.call(null,ks);
var G__27692 = cljs.core.assoc.call(null,v__$2,k,u.call(null,k));
ks = G__27691;
v__$2 = G__27692;
continue;
}
}
break;
}
})();var min_partitions_after_this = (cljs.core.truth_(s)?(s - (l + 1)):0);var amount_to_dec = (cljs.core.truth_(s)?(function (){var x__14128__auto__ = 0;var y__14129__auto__ = (min_partitions_after_this - diff_uv);return ((x__14128__auto__ > y__14129__auto__) ? x__14128__auto__ : y__14129__auto__);
})():0);var v__$3 = ((cljs.core._EQ_.call(null,amount_to_dec,0))?v__$2:(function (){var k_1 = (b - 1);var v__$3 = v__$2;var amount = amount_to_dec;while(true){
var vk = v__$3.call(null,k_1);if((amount > vk))
{{
var G__27693 = (k_1 - 1);
var G__27694 = cljs.core.assoc.call(null,v__$3,k_1,0);
var G__27695 = (amount - vk);
k_1 = G__27693;
v__$3 = G__27694;
amount = G__27695;
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
var partitions_M__delegate = function (items,p__27696){var map__27754 = p__27696;var map__27754__$1 = ((cljs.core.seq_QMARK_.call(null,map__27754))?cljs.core.apply.call(null,cljs.core.hash_map,map__27754):map__27754);var from = cljs.core.get.call(null,map__27754__$1,new cljs.core.Keyword(null,"min","min",1014012356));var to = cljs.core.get.call(null,map__27754__$1,new cljs.core.Keyword(null,"max","max",1014012118));if(cljs.core._EQ_.call(null,cljs.core.count.call(null,items),0))
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
{var start_multiset = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__14514__auto__ = (function iter__27755(s__27756){return (new cljs.core.LazySeq(null,(function (){var s__27756__$1 = s__27756;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__27756__$1);if(temp__4092__auto__)
{var s__27756__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27756__$2))
{var c__14512__auto__ = cljs.core.chunk_first.call(null,s__27756__$2);var size__14513__auto__ = cljs.core.count.call(null,c__14512__auto__);var b__27758 = cljs.core.chunk_buffer.call(null,size__14513__auto__);if((function (){var i__27757 = 0;while(true){
if((i__27757 < size__14513__auto__))
{var i = cljs.core._nth.call(null,c__14512__auto__,i__27757);var j = (i + 1);cljs.core.chunk_append.call(null,b__27758,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null));
{
var G__27811 = (i__27757 + 1);
i__27757 = G__27811;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27758),iter__27755.call(null,cljs.core.chunk_rest.call(null,s__27756__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27758),null);
}
} else
{var i = cljs.core.first.call(null,s__27756__$2);var j = (i + 1);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null),iter__27755.call(null,cljs.core.rest.call(null,s__27756__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14514__auto__.call(null,cljs.core.range.call(null,M));
})());var parts = foundation.app.data.combinatorics.multiset_partitions_M.call(null,start_multiset,to__$1,from__$1);var iter__14514__auto__ = (function iter__27759(s__27760){return (new cljs.core.LazySeq(null,(function (){var s__27760__$1 = s__27760;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__27760__$1);if(temp__4092__auto__)
{var s__27760__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27760__$2))
{var c__14512__auto__ = cljs.core.chunk_first.call(null,s__27760__$2);var size__14513__auto__ = cljs.core.count.call(null,c__14512__auto__);var b__27762 = cljs.core.chunk_buffer.call(null,size__14513__auto__);if((function (){var i__27761 = 0;while(true){
if((i__27761 < size__14513__auto__))
{var part = cljs.core._nth.call(null,c__14512__auto__,i__27761);cljs.core.chunk_append.call(null,b__27762,(function (){var iter__14514__auto__ = ((function (i__27761,part,c__14512__auto__,size__14513__auto__,b__27762,s__27760__$2,temp__4092__auto__){
return (function iter__27787(s__27788){return (new cljs.core.LazySeq(null,((function (i__27761,part,c__14512__auto__,size__14513__auto__,b__27762,s__27760__$2,temp__4092__auto__){
return (function (){var s__27788__$1 = s__27788;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__27788__$1);if(temp__4092__auto____$1)
{var s__27788__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__27788__$2))
{var c__14512__auto____$1 = cljs.core.chunk_first.call(null,s__27788__$2);var size__14513__auto____$1 = cljs.core.count.call(null,c__14512__auto____$1);var b__27790 = cljs.core.chunk_buffer.call(null,size__14513__auto____$1);if((function (){var i__27789 = 0;while(true){
if((i__27789 < size__14513__auto____$1))
{var multiset = cljs.core._nth.call(null,c__14512__auto____$1,i__27789);cljs.core.chunk_append.call(null,b__27790,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__27789,i__27761,multiset,c__14512__auto____$1,size__14513__auto____$1,b__27790,s__27788__$2,temp__4092__auto____$1,part,c__14512__auto__,size__14513__auto__,b__27762,s__27760__$2,temp__4092__auto__){
return (function (p__27795){var vec__27796 = p__27795;var index = cljs.core.nth.call(null,vec__27796,0,null);var numtimes = cljs.core.nth.call(null,vec__27796,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__27789,i__27761,multiset,c__14512__auto____$1,size__14513__auto____$1,b__27790,s__27788__$2,temp__4092__auto____$1,part,c__14512__auto__,size__14513__auto__,b__27762,s__27760__$2,temp__4092__auto__))
,multiset)));
{
var G__27812 = (i__27789 + 1);
i__27789 = G__27812;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27790),iter__27787.call(null,cljs.core.chunk_rest.call(null,s__27788__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27790),null);
}
} else
{var multiset = cljs.core.first.call(null,s__27788__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__27761,multiset,s__27788__$2,temp__4092__auto____$1,part,c__14512__auto__,size__14513__auto__,b__27762,s__27760__$2,temp__4092__auto__){
return (function (p__27797){var vec__27798 = p__27797;var index = cljs.core.nth.call(null,vec__27798,0,null);var numtimes = cljs.core.nth.call(null,vec__27798,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__27761,multiset,s__27788__$2,temp__4092__auto____$1,part,c__14512__auto__,size__14513__auto__,b__27762,s__27760__$2,temp__4092__auto__))
,multiset)),iter__27787.call(null,cljs.core.rest.call(null,s__27788__$2)));
}
} else
{return null;
}
break;
}
});})(i__27761,part,c__14512__auto__,size__14513__auto__,b__27762,s__27760__$2,temp__4092__auto__))
,null,null));
});})(i__27761,part,c__14512__auto__,size__14513__auto__,b__27762,s__27760__$2,temp__4092__auto__))
;return iter__14514__auto__.call(null,part);
})());
{
var G__27813 = (i__27761 + 1);
i__27761 = G__27813;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27762),iter__27759.call(null,cljs.core.chunk_rest.call(null,s__27760__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27762),null);
}
} else
{var part = cljs.core.first.call(null,s__27760__$2);return cljs.core.cons.call(null,(function (){var iter__14514__auto__ = ((function (part,s__27760__$2,temp__4092__auto__){
return (function iter__27799(s__27800){return (new cljs.core.LazySeq(null,((function (part,s__27760__$2,temp__4092__auto__){
return (function (){var s__27800__$1 = s__27800;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__27800__$1);if(temp__4092__auto____$1)
{var s__27800__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__27800__$2))
{var c__14512__auto__ = cljs.core.chunk_first.call(null,s__27800__$2);var size__14513__auto__ = cljs.core.count.call(null,c__14512__auto__);var b__27802 = cljs.core.chunk_buffer.call(null,size__14513__auto__);if((function (){var i__27801 = 0;while(true){
if((i__27801 < size__14513__auto__))
{var multiset = cljs.core._nth.call(null,c__14512__auto__,i__27801);cljs.core.chunk_append.call(null,b__27802,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__27801,multiset,c__14512__auto__,size__14513__auto__,b__27802,s__27800__$2,temp__4092__auto____$1,part,s__27760__$2,temp__4092__auto__){
return (function (p__27807){var vec__27808 = p__27807;var index = cljs.core.nth.call(null,vec__27808,0,null);var numtimes = cljs.core.nth.call(null,vec__27808,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__27801,multiset,c__14512__auto__,size__14513__auto__,b__27802,s__27800__$2,temp__4092__auto____$1,part,s__27760__$2,temp__4092__auto__))
,multiset)));
{
var G__27814 = (i__27801 + 1);
i__27801 = G__27814;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27802),iter__27799.call(null,cljs.core.chunk_rest.call(null,s__27800__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27802),null);
}
} else
{var multiset = cljs.core.first.call(null,s__27800__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (multiset,s__27800__$2,temp__4092__auto____$1,part,s__27760__$2,temp__4092__auto__){
return (function (p__27809){var vec__27810 = p__27809;var index = cljs.core.nth.call(null,vec__27810,0,null);var numtimes = cljs.core.nth.call(null,vec__27810,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(multiset,s__27800__$2,temp__4092__auto____$1,part,s__27760__$2,temp__4092__auto__))
,multiset)),iter__27799.call(null,cljs.core.rest.call(null,s__27800__$2)));
}
} else
{return null;
}
break;
}
});})(part,s__27760__$2,temp__4092__auto__))
,null,null));
});})(part,s__27760__$2,temp__4092__auto__))
;return iter__14514__auto__.call(null,part);
})(),iter__27759.call(null,cljs.core.rest.call(null,s__27760__$2)));
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
var p__27696 = null;if (arguments.length > 1) {
  p__27696 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions_M__delegate.call(this,items,p__27696);};
partitions_M.cljs$lang$maxFixedArity = 1;
partitions_M.cljs$lang$applyTo = (function (arglist__27815){
var items = cljs.core.first(arglist__27815);
var p__27696 = cljs.core.rest(arglist__27815);
return partitions_M__delegate(items,p__27696);
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
partitions.cljs$lang$applyTo = (function (arglist__27816){
var items = cljs.core.first(arglist__27816);
var args = cljs.core.rest(arglist__27816);
return partitions__delegate(items,args);
});
partitions.cljs$core$IFn$_invoke$arity$variadic = partitions__delegate;
return partitions;
})()
;

//# sourceMappingURL=combinatorics.js.map