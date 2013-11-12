// Compiled by ClojureScript 0.0-2030
goog.provide('foundation.app.data.combinatorics');
goog.require('cljs.core');
foundation.app.data.combinatorics.index_combinations = (function index_combinations(n,cnt){var iter_comb = (function iter_comb(c,j){if((j > n))
{return null;
} else
{var c__$1 = cljs.core.assoc.call(null,c,j,(c.call(null,j) - 1));if((c__$1.call(null,j) < j))
{return cljs.core.PersistentVector.fromArray([c__$1,(j + 1)], true);
} else
{var c__$2 = c__$1;var j__$1 = j;while(true){
if(cljs.core._EQ_.call(null,j__$1,1))
{return cljs.core.PersistentVector.fromArray([c__$2,j__$1], true);
} else
{{
var G__43293 = cljs.core.assoc.call(null,c__$2,(j__$1 - 1),(c__$2.call(null,j__$1) - 1));
var G__43294 = (j__$1 - 1);
c__$2 = G__43293;
j__$1 = G__43294;
continue;
}
}
break;
}
}
}
});
return (new cljs.core.LazySeq(null,(function (){var c = cljs.core.vec.call(null,cljs.core.cons.call(null,null,(function (){var iter__8125__auto__ = (function iter__43289(s__43290){return (new cljs.core.LazySeq(null,(function (){var s__43290__$1 = s__43290;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__43290__$1);if(temp__4092__auto__)
{var s__43290__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__43290__$2))
{var c__8123__auto__ = cljs.core.chunk_first.call(null,s__43290__$2);var size__8124__auto__ = cljs.core.count.call(null,c__8123__auto__);var b__43292 = cljs.core.chunk_buffer.call(null,size__8124__auto__);if((function (){var i__43291 = 0;while(true){
if((i__43291 < size__8124__auto__))
{var j = cljs.core._nth.call(null,c__8123__auto__,i__43291);cljs.core.chunk_append.call(null,b__43292,((j + cnt) + (- (n + 1))));
{
var G__43295 = (i__43291 + 1);
i__43291 = G__43295;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43292),iter__43289.call(null,cljs.core.chunk_rest.call(null,s__43290__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43292),null);
}
} else
{var j = cljs.core.first.call(null,s__43290__$2);return cljs.core.cons.call(null,((j + cnt) + (- (n + 1))),iter__43289.call(null,cljs.core.rest.call(null,s__43290__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8125__auto__.call(null,cljs.core.range.call(null,1,(n + 1)));
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
{return cljs.core.map.call(null,(function (p1__43296_SHARP_){return cljs.core.map.call(null,v_items,p1__43296_SHARP_);
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
var G__43297 = (i - 1);
var G__43298 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__43297;
v_seqs__$2 = G__43298;
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
cartesian_product.cljs$lang$applyTo = (function (arglist__43299){
var seqs = cljs.core.seq(arglist__43299);
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
var G__43300 = (i - 1);
i = G__43300;
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
var G__43301 = (i - 1);
i = G__43301;
continue;
}
}
break;
}
})();var v__$1 = cljs.core.assoc.call(null,v,j,v.call(null,l),l,vj);var k = (j + 1);var l__$1 = (len - 1);while(true){
if((k < l__$1))
{{
var G__43302 = cljs.core.assoc.call(null,v__$1,k,v__$1.call(null,l__$1),l__$1,v__$1.call(null,k));
var G__43303 = (k + 1);
var G__43304 = (l__$1 - 1);
v__$1 = G__43302;
k = G__43303;
l__$1 = G__43304;
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
foundation.app.data.combinatorics.multi_perm = (function multi_perm(l){var f = cljs.core.frequencies.call(null,l);var v = cljs.core.vec.call(null,cljs.core.keys.call(null,f));var indices = cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__8125__auto__ = ((function (f,v){
return (function iter__43309(s__43310){return (new cljs.core.LazySeq(null,((function (f,v){
return (function (){var s__43310__$1 = s__43310;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__43310__$1);if(temp__4092__auto__)
{var s__43310__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__43310__$2))
{var c__8123__auto__ = cljs.core.chunk_first.call(null,s__43310__$2);var size__8124__auto__ = cljs.core.count.call(null,c__8123__auto__);var b__43312 = cljs.core.chunk_buffer.call(null,size__8124__auto__);if((function (){var i__43311 = 0;while(true){
if((i__43311 < size__8124__auto__))
{var i = cljs.core._nth.call(null,c__8123__auto__,i__43311);cljs.core.chunk_append.call(null,b__43312,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));
{
var G__43313 = (i__43311 + 1);
i__43311 = G__43313;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43312),iter__43309.call(null,cljs.core.chunk_rest.call(null,s__43310__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43312),null);
}
} else
{var i = cljs.core.first.call(null,s__43310__$2);return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),iter__43309.call(null,cljs.core.rest.call(null,s__43310__$2)));
}
} else
{return null;
}
break;
}
});})(f,v))
,null,null));
});})(f,v))
;return iter__8125__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,v)));
})());return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.map,v),foundation.app.data.combinatorics.lex_permutations.call(null,indices));
});
/**
* All the distinct permutations of items, lexicographic by index.
*/
foundation.app.data.combinatorics.permutations = (function permutations(items){if(cljs.core.truth_(foundation.app.data.combinatorics.sorted_numbers_QMARK_.call(null,items)))
{return foundation.app.data.combinatorics.lex_permutations.call(null,items);
} else
{if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core.distinct_QMARK_,items)))
{var v = cljs.core.vec.call(null,items);return cljs.core.map.call(null,(function (p1__43314_SHARP_){return cljs.core.map.call(null,v,p1__43314_SHARP_);
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
{return cljs.core.vec.call(null,(function (){var iter__8125__auto__ = (function iter__43319(s__43320){return (new cljs.core.LazySeq(null,(function (){var s__43320__$1 = s__43320;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__43320__$1);if(temp__4092__auto__)
{var s__43320__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__43320__$2))
{var c__8123__auto__ = cljs.core.chunk_first.call(null,s__43320__$2);var size__8124__auto__ = cljs.core.count.call(null,c__8123__auto__);var b__43322 = cljs.core.chunk_buffer.call(null,size__8124__auto__);if((function (){var i__43321 = 0;while(true){
if((i__43321 < size__8124__auto__))
{var i = cljs.core._nth.call(null,c__8123__auto__,i__43321);cljs.core.chunk_append.call(null,b__43322,(function (){var x__7744__auto__ = 0;var y__7745__auto__ = (i - ((n - s) - -1));return ((x__7744__auto__ > y__7745__auto__) ? x__7744__auto__ : y__7745__auto__);
})());
{
var G__43323 = (i__43321 + 1);
i__43321 = G__43323;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43322),iter__43319.call(null,cljs.core.chunk_rest.call(null,s__43320__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43322),null);
}
} else
{var i = cljs.core.first.call(null,s__43320__$2);return cljs.core.cons.call(null,(function (){var x__7744__auto__ = 0;var y__7745__auto__ = (i - ((n - s) - -1));return ((x__7744__auto__ > y__7745__auto__) ? x__7744__auto__ : y__7745__auto__);
})(),iter__43319.call(null,cljs.core.rest.call(null,s__43320__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8125__auto__.call(null,cljs.core.range.call(null,1,(n + 1)));
})());
} else
{return cljs.core.vec.call(null,cljs.core.repeat.call(null,n,0));
}
});
foundation.app.data.combinatorics.growth_strings_H = (function() {
var growth_strings_H = null;
var growth_strings_H__3 = (function (n,r,s){return growth_strings_H.call(null,n,foundation.app.data.combinatorics.init.call(null,n,s),cljs.core.vec.call(null,cljs.core.repeat.call(null,n,1)),r,s);
});
var growth_strings_H__5 = (function (n,a,b,r,s){return cljs.core.cons.call(null,a,(new cljs.core.LazySeq(null,(function (){if((function (){var and__7430__auto__ = (cljs.core.peek.call(null,b) > cljs.core.peek.call(null,a));if(and__7430__auto__)
{if(cljs.core.truth_(r))
{return (cljs.core.peek.call(null,a) < (r - 1));
} else
{return true;
}
} else
{return and__7430__auto__;
}
})())
{return growth_strings_H.call(null,n,foundation.app.data.combinatorics.update.call(null,a,(n - 1),cljs.core.inc),b,r,s);
} else
{var j = (function (){var j = (n - 2);while(true){
if((function (){var and__7430__auto__ = (a.call(null,j) < b.call(null,j));if(and__7430__auto__)
{var and__7430__auto____$1 = (cljs.core.truth_(r)?(a.call(null,j) < (r - 1)):true);if(and__7430__auto____$1)
{if(cljs.core.truth_(s))
{return (((s - b.call(null,j)) - ((((a.call(null,j) + 1) === b.call(null,j)))?1:0)) <= (n - j));
} else
{return true;
}
} else
{return and__7430__auto____$1;
}
} else
{return and__7430__auto__;
}
})())
{return j;
} else
{{
var G__43326 = (j - 1);
j = G__43326;
continue;
}
}
break;
}
})();if((j === 0))
{return cljs.core.List.EMPTY;
} else
{var a__$1 = foundation.app.data.combinatorics.update.call(null,a,j,cljs.core.inc);var x = (cljs.core.truth_(s)?(s - (b.call(null,j) + ((cljs.core._EQ_.call(null,a__$1.call(null,j),b.call(null,j)))?1:0))):null);var vec__43325 = (function (){var a__$2 = a__$1;var b__$1 = b;var i = (j + 1);var current_max = (b__$1.call(null,j) + (((b__$1.call(null,j) === a__$2.call(null,j)))?1:0));while(true){
if((i === n))
{return cljs.core.PersistentVector.fromArray([a__$2,b__$1], true);
} else
{if(cljs.core.truth_((function (){var and__7430__auto__ = s;if(cljs.core.truth_(and__7430__auto__))
{return (i > ((n - x) - 1));
} else
{return and__7430__auto__;
}
})()))
{var new_a_i = ((i - n) + s);{
var G__43327 = cljs.core.assoc.call(null,a__$2,i,new_a_i);
var G__43328 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__43329 = (i + 1);
var G__43330 = (function (){var x__7744__auto__ = current_max;var y__7745__auto__ = (new_a_i + 1);return ((x__7744__auto__ > y__7745__auto__) ? x__7744__auto__ : y__7745__auto__);
})();
a__$2 = G__43327;
b__$1 = G__43328;
i = G__43329;
current_max = G__43330;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__43331 = cljs.core.assoc.call(null,a__$2,i,0);
var G__43332 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__43333 = (i + 1);
var G__43334 = current_max;
a__$2 = G__43331;
b__$1 = G__43332;
i = G__43333;
current_max = G__43334;
continue;
}
} else
{return null;
}
}
}
break;
}
})();var a__$2 = cljs.core.nth.call(null,vec__43325,0,null);var b__$1 = cljs.core.nth.call(null,vec__43325,1,null);return growth_strings_H.call(null,n,a__$2,b__$1,r,s);
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
var lex_partitions_H__delegate = function (N,p__43335){var map__43341 = p__43335;var map__43341__$1 = ((cljs.core.seq_QMARK_.call(null,map__43341))?cljs.core.apply.call(null,cljs.core.hash_map,map__43341):map__43341);var from = cljs.core.get.call(null,map__43341__$1,new cljs.core.Keyword(null,"min","min",1014012356));var to = cljs.core.get.call(null,map__43341__$1,new cljs.core.Keyword(null,"max","max",1014012118));if(cljs.core._EQ_.call(null,N,0))
{if((((function (){var or__7439__auto__ = from;if(cljs.core.truth_(or__7439__auto__))
{return or__7439__auto__;
} else
{return 0;
}
})() <= 0)) && ((0 <= (function (){var or__7439__auto__ = to;if(cljs.core.truth_(or__7439__auto__))
{return or__7439__auto__;
} else
{return 0;
}
})())))
{return cljs.core.list(cljs.core.List.EMPTY);
} else
{return cljs.core.List.EMPTY;
}
} else
{var from__$1 = (cljs.core.truth_((function (){var and__7430__auto__ = from;if(cljs.core.truth_(and__7430__auto__))
{return (from <= 1);
} else
{return and__7430__auto__;
}
})())?null:from);var to__$1 = (cljs.core.truth_((function (){var and__7430__auto__ = to;if(cljs.core.truth_(and__7430__auto__))
{return (to >= N);
} else
{return and__7430__auto__;
}
})())?null:to);if(!(((1 <= (function (){var or__7439__auto__ = from__$1;if(cljs.core.truth_(or__7439__auto__))
{return or__7439__auto__;
} else
{return 1;
}
})())) && ((((function (){var or__7439__auto__ = from__$1;if(cljs.core.truth_(or__7439__auto__))
{return or__7439__auto__;
} else
{return 1;
}
})() <= (function (){var or__7439__auto__ = to__$1;if(cljs.core.truth_(or__7439__auto__))
{return or__7439__auto__;
} else
{return N;
}
})())) && (((function (){var or__7439__auto__ = to__$1;if(cljs.core.truth_(or__7439__auto__))
{return or__7439__auto__;
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
{return cljs.core.list(cljs.core.list(cljs.core.PersistentVector.fromArray([0], true)));
} else
{if(cljs.core._EQ_.call(null,to__$1,1))
{return cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.range.call(null,N)))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,206),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,19)))))))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,206),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18)))));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var growth_strings = foundation.app.data.combinatorics.growth_strings_H.call(null,N,to__$1,from__$1);var iter__8125__auto__ = (function iter__43342(s__43343){return (new cljs.core.LazySeq(null,(function (){var s__43343__$1 = s__43343;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__43343__$1);if(temp__4092__auto__)
{var s__43343__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__43343__$2))
{var c__8123__auto__ = cljs.core.chunk_first.call(null,s__43343__$2);var size__8124__auto__ = cljs.core.count.call(null,c__8123__auto__);var b__43345 = cljs.core.chunk_buffer.call(null,size__8124__auto__);if((function (){var i__43344 = 0;while(true){
if((i__43344 < size__8124__auto__))
{var growth_string = cljs.core._nth.call(null,c__8123__auto__,i__43344);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));cljs.core.chunk_append.call(null,b__43345,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))));
{
var G__43346 = (i__43344 + 1);
i__43344 = G__43346;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43345),iter__43342.call(null,cljs.core.chunk_rest.call(null,s__43343__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43345),null);
}
} else
{var growth_string = cljs.core.first.call(null,s__43343__$2);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));return cljs.core.cons.call(null,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))),iter__43342.call(null,cljs.core.rest.call(null,s__43343__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8125__auto__.call(null,growth_strings);
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
var p__43335 = null;if (arguments.length > 1) {
  p__43335 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return lex_partitions_H__delegate.call(this,N,p__43335);};
lex_partitions_H.cljs$lang$maxFixedArity = 1;
lex_partitions_H.cljs$lang$applyTo = (function (arglist__43347){
var N = cljs.core.first(arglist__43347);
var p__43335 = cljs.core.rest(arglist__43347);
return lex_partitions_H__delegate(N,p__43335);
});
lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic = lex_partitions_H__delegate;
return lex_partitions_H;
})()
;
/**
* @param {...*} var_args
*/
foundation.app.data.combinatorics.partitions_H = (function() { 
var partitions_H__delegate = function (items,args){var items__$1 = cljs.core.vec.call(null,items);var N = cljs.core.count.call(null,items__$1);var lex = cljs.core.apply.call(null,foundation.app.data.combinatorics.lex_partitions_H,N,args);var iter__8125__auto__ = (function iter__43368(s__43369){return (new cljs.core.LazySeq(null,(function (){var s__43369__$1 = s__43369;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__43369__$1);if(temp__4092__auto__)
{var s__43369__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__43369__$2))
{var c__8123__auto__ = cljs.core.chunk_first.call(null,s__43369__$2);var size__8124__auto__ = cljs.core.count.call(null,c__8123__auto__);var b__43371 = cljs.core.chunk_buffer.call(null,size__8124__auto__);if((function (){var i__43370 = 0;while(true){
if((i__43370 < size__8124__auto__))
{var parts = cljs.core._nth.call(null,c__8123__auto__,i__43370);cljs.core.chunk_append.call(null,b__43371,(function (){var iter__8125__auto__ = ((function (i__43370,parts,c__8123__auto__,size__8124__auto__,b__43371,s__43369__$2,temp__4092__auto__){
return (function iter__43380(s__43381){return (new cljs.core.LazySeq(null,((function (i__43370,parts,c__8123__auto__,size__8124__auto__,b__43371,s__43369__$2,temp__4092__auto__){
return (function (){var s__43381__$1 = s__43381;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__43381__$1);if(temp__4092__auto____$1)
{var s__43381__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__43381__$2))
{var c__8123__auto____$1 = cljs.core.chunk_first.call(null,s__43381__$2);var size__8124__auto____$1 = cljs.core.count.call(null,c__8123__auto____$1);var b__43383 = cljs.core.chunk_buffer.call(null,size__8124__auto____$1);if((function (){var i__43382 = 0;while(true){
if((i__43382 < size__8124__auto____$1))
{var part = cljs.core._nth.call(null,c__8123__auto____$1,i__43382);cljs.core.chunk_append.call(null,b__43383,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__43382,i__43370,part,c__8123__auto____$1,size__8124__auto____$1,b__43383,s__43381__$2,temp__4092__auto____$1,parts,c__8123__auto__,size__8124__auto__,b__43371,s__43369__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__43382,i__43370,part,c__8123__auto____$1,size__8124__auto____$1,b__43383,s__43381__$2,temp__4092__auto____$1,parts,c__8123__auto__,size__8124__auto__,b__43371,s__43369__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__43388 = (i__43382 + 1);
i__43382 = G__43388;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43383),iter__43380.call(null,cljs.core.chunk_rest.call(null,s__43381__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43383),null);
}
} else
{var part = cljs.core.first.call(null,s__43381__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__43370,part,s__43381__$2,temp__4092__auto____$1,parts,c__8123__auto__,size__8124__auto__,b__43371,s__43369__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__43370,part,s__43381__$2,temp__4092__auto____$1,parts,c__8123__auto__,size__8124__auto__,b__43371,s__43369__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__43380.call(null,cljs.core.rest.call(null,s__43381__$2)));
}
} else
{return null;
}
break;
}
});})(i__43370,parts,c__8123__auto__,size__8124__auto__,b__43371,s__43369__$2,temp__4092__auto__))
,null,null));
});})(i__43370,parts,c__8123__auto__,size__8124__auto__,b__43371,s__43369__$2,temp__4092__auto__))
;return iter__8125__auto__.call(null,parts);
})());
{
var G__43389 = (i__43370 + 1);
i__43370 = G__43389;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43371),iter__43368.call(null,cljs.core.chunk_rest.call(null,s__43369__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43371),null);
}
} else
{var parts = cljs.core.first.call(null,s__43369__$2);return cljs.core.cons.call(null,(function (){var iter__8125__auto__ = ((function (parts,s__43369__$2,temp__4092__auto__){
return (function iter__43384(s__43385){return (new cljs.core.LazySeq(null,((function (parts,s__43369__$2,temp__4092__auto__){
return (function (){var s__43385__$1 = s__43385;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__43385__$1);if(temp__4092__auto____$1)
{var s__43385__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__43385__$2))
{var c__8123__auto__ = cljs.core.chunk_first.call(null,s__43385__$2);var size__8124__auto__ = cljs.core.count.call(null,c__8123__auto__);var b__43387 = cljs.core.chunk_buffer.call(null,size__8124__auto__);if((function (){var i__43386 = 0;while(true){
if((i__43386 < size__8124__auto__))
{var part = cljs.core._nth.call(null,c__8123__auto__,i__43386);cljs.core.chunk_append.call(null,b__43387,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__43386,part,c__8123__auto__,size__8124__auto__,b__43387,s__43385__$2,temp__4092__auto____$1,parts,s__43369__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__43386,part,c__8123__auto__,size__8124__auto__,b__43387,s__43385__$2,temp__4092__auto____$1,parts,s__43369__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__43390 = (i__43386 + 1);
i__43386 = G__43390;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43387),iter__43384.call(null,cljs.core.chunk_rest.call(null,s__43385__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43387),null);
}
} else
{var part = cljs.core.first.call(null,s__43385__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (part,s__43385__$2,temp__4092__auto____$1,parts,s__43369__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(part,s__43385__$2,temp__4092__auto____$1,parts,s__43369__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__43384.call(null,cljs.core.rest.call(null,s__43385__$2)));
}
} else
{return null;
}
break;
}
});})(parts,s__43369__$2,temp__4092__auto__))
,null,null));
});})(parts,s__43369__$2,temp__4092__auto__))
;return iter__8125__auto__.call(null,parts);
})(),iter__43368.call(null,cljs.core.rest.call(null,s__43369__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8125__auto__.call(null,lex);
};
var partitions_H = function (items,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions_H__delegate.call(this,items,args);};
partitions_H.cljs$lang$maxFixedArity = 1;
partitions_H.cljs$lang$applyTo = (function (arglist__43391){
var items = cljs.core.first(arglist__43391);
var args = cljs.core.rest(arglist__43391);
return partitions_H__delegate(items,args);
});
partitions_H.cljs$core$IFn$_invoke$arity$variadic = partitions_H__delegate;
return partitions_H;
})()
;
foundation.app.data.combinatorics.multiset_partitions_M = (function() {
var multiset_partitions_M = null;
var multiset_partitions_M__3 = (function (multiset,r,s){var n = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,multiset));var m = cljs.core.count.call(null,multiset);var f = cljs.core.PersistentVector.EMPTY;var c = cljs.core.PersistentVector.EMPTY;var u = cljs.core.PersistentVector.EMPTY;var v = cljs.core.PersistentVector.EMPTY;var vec__43414 = (function (){var j = 0;var c__$1 = c;var u__$1 = u;var v__$1 = v;while(true){
if(cljs.core._EQ_.call(null,j,m))
{return cljs.core.PersistentVector.fromArray([c__$1,u__$1,v__$1], true);
} else
{{
var G__43436 = (j + 1);
var G__43437 = cljs.core.assoc.call(null,c__$1,j,(j + 1));
var G__43438 = cljs.core.assoc.call(null,u__$1,j,multiset.call(null,(j + 1)));
var G__43439 = cljs.core.assoc.call(null,v__$1,j,multiset.call(null,(j + 1)));
j = G__43436;
c__$1 = G__43437;
u__$1 = G__43438;
v__$1 = G__43439;
continue;
}
}
break;
}
})();var c__$1 = cljs.core.nth.call(null,vec__43414,0,null);var u__$1 = cljs.core.nth.call(null,vec__43414,1,null);var v__$1 = cljs.core.nth.call(null,vec__43414,2,null);var a = 0;var b = m;var l = 0;var f__$1 = cljs.core.assoc.call(null,f,0,0,1,m);var stack = cljs.core.List.EMPTY;return multiset_partitions_M.call(null,n,m,f__$1,c__$1,u__$1,v__$1,a,b,l,r,s);
});
var multiset_partitions_M__11 = (function (n,m,f,c,u,v,a,b,l,r,s){while(true){
var vec__43415 = (function (){var j = a;var k = b;var x = false;var u__$1 = u;var v__$1 = v;var c__$1 = c;while(true){
if((j >= b))
{return cljs.core.PersistentVector.fromArray([u__$1,v__$1,c__$1,j,k], true);
} else
{var u__$2 = cljs.core.assoc.call(null,u__$1,k,(u__$1.call(null,j) - v__$1.call(null,j)));if(cljs.core._EQ_.call(null,u__$2.call(null,k),0))
{{
var G__43440 = (j + 1);
var G__43441 = k;
var G__43442 = true;
var G__43443 = u__$2;
var G__43444 = v__$1;
var G__43445 = c__$1;
j = G__43440;
k = G__43441;
x = G__43442;
u__$1 = G__43443;
v__$1 = G__43444;
c__$1 = G__43445;
continue;
}
} else
{if(!(x))
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,(function (){var x__7751__auto__ = v__$1.call(null,j);var y__7752__auto__ = u__$2.call(null,k);return ((x__7751__auto__ < y__7752__auto__) ? x__7751__auto__ : y__7752__auto__);
})());var x__$1 = (u__$2.call(null,k) < v__$2.call(null,j));var k__$1 = (k + 1);var j__$1 = (j + 1);{
var G__43446 = j__$1;
var G__43447 = k__$1;
var G__43448 = x__$1;
var G__43449 = u__$2;
var G__43450 = v__$2;
var G__43451 = c__$2;
j = G__43446;
k = G__43447;
x = G__43448;
u__$1 = G__43449;
v__$1 = G__43450;
c__$1 = G__43451;
continue;
}
} else
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,u__$2.call(null,k));var k__$1 = (k + 1);var j__$1 = (j + 1);{
var G__43452 = j__$1;
var G__43453 = k__$1;
var G__43454 = x;
var G__43455 = u__$2;
var G__43456 = v__$2;
var G__43457 = c__$2;
j = G__43452;
k = G__43453;
x = G__43454;
u__$1 = G__43455;
v__$1 = G__43456;
c__$1 = G__43457;
continue;
}
}
}
}
break;
}
})();var u__$1 = cljs.core.nth.call(null,vec__43415,0,null);var v__$1 = cljs.core.nth.call(null,vec__43415,1,null);var c__$1 = cljs.core.nth.call(null,vec__43415,2,null);var j = cljs.core.nth.call(null,vec__43415,3,null);var k = cljs.core.nth.call(null,vec__43415,4,null);if(cljs.core.truth_((function (){var and__7430__auto__ = r;if(cljs.core.truth_(and__7430__auto__))
{return ((k > b)) && (cljs.core._EQ_.call(null,l,(r - 1)));
} else
{return and__7430__auto__;
}
})()))
{return foundation.app.data.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
} else
{if(cljs.core.truth_((function (){var and__7430__auto__ = s;if(cljs.core.truth_(and__7430__auto__))
{return ((k <= b)) && (((l + 1) < s));
} else
{return and__7430__auto__;
}
})()))
{return foundation.app.data.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
} else
{if((k > b))
{var a__$1 = b;var b__$1 = k;var l__$1 = (l + 1);var f__$1 = cljs.core.assoc.call(null,f,(l__$1 + 1),b__$1);{
var G__43458 = n;
var G__43459 = m;
var G__43460 = f__$1;
var G__43461 = c__$1;
var G__43462 = u__$1;
var G__43463 = v__$1;
var G__43464 = a__$1;
var G__43465 = b__$1;
var G__43466 = l__$1;
var G__43467 = r;
var G__43468 = s;
n = G__43458;
m = G__43459;
f = G__43460;
c = G__43461;
u = G__43462;
v = G__43463;
a = G__43464;
b = G__43465;
l = G__43466;
r = G__43467;
s = G__43468;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var part = (function (){var iter__8125__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s){
return (function iter__43416(s__43417){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s){
return (function (){var s__43417__$1 = s__43417;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__43417__$1);if(temp__4092__auto__)
{var s__43417__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__43417__$2))
{var c__8123__auto__ = cljs.core.chunk_first.call(null,s__43417__$2);var size__8124__auto__ = cljs.core.count.call(null,c__8123__auto__);var b__43419 = cljs.core.chunk_buffer.call(null,size__8124__auto__);if((function (){var i__43418 = 0;while(true){
if((i__43418 < size__8124__auto__))
{var y = cljs.core._nth.call(null,c__8123__auto__,i__43418);cljs.core.chunk_append.call(null,b__43419,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + 1)) - 1);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8125__auto__ = ((function (i__43418,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8123__auto__,size__8124__auto__,b__43419,s__43417__$2,temp__4092__auto__){
return (function iter__43428(s__43429){return (new cljs.core.LazySeq(null,((function (i__43418,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8123__auto__,size__8124__auto__,b__43419,s__43417__$2,temp__4092__auto__){
return (function (){var s__43429__$1 = s__43429;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__43429__$1);if(temp__4092__auto____$1)
{var s__43429__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__43429__$2))
{var c__8123__auto____$1 = cljs.core.chunk_first.call(null,s__43429__$2);var size__8124__auto____$1 = cljs.core.count.call(null,c__8123__auto____$1);var b__43431 = cljs.core.chunk_buffer.call(null,size__8124__auto____$1);if((function (){var i__43430 = 0;while(true){
if((i__43430 < size__8124__auto____$1))
{var z = cljs.core._nth.call(null,c__8123__auto____$1,i__43430);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{cljs.core.chunk_append.call(null,b__43431,cljs.core.PersistentVector.fromArray([c__$1.call(null,z),v__$1.call(null,z)], true));
{
var G__43469 = (i__43430 + 1);
i__43430 = G__43469;
continue;
}
} else
{{
var G__43470 = (i__43430 + 1);
i__43430 = G__43470;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43431),iter__43428.call(null,cljs.core.chunk_rest.call(null,s__43429__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43431),null);
}
} else
{var z = cljs.core.first.call(null,s__43429__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([c__$1.call(null,z),v__$1.call(null,z)], true),iter__43428.call(null,cljs.core.rest.call(null,s__43429__$2)));
} else
{{
var G__43471 = cljs.core.rest.call(null,s__43429__$2);
s__43429__$1 = G__43471;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__43418,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8123__auto__,size__8124__auto__,b__43419,s__43417__$2,temp__4092__auto__))
,null,null));
});})(i__43418,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8123__auto__,size__8124__auto__,b__43419,s__43417__$2,temp__4092__auto__))
;return iter__8125__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + 1)));
})());
})());
{
var G__43472 = (i__43418 + 1);
i__43418 = G__43472;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43419),iter__43416.call(null,cljs.core.chunk_rest.call(null,s__43417__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43419),null);
}
} else
{var y = cljs.core.first.call(null,s__43417__$2);return cljs.core.cons.call(null,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + 1)) - 1);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8125__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__43417__$2,temp__4092__auto__){
return (function iter__43432(s__43433){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__43417__$2,temp__4092__auto__){
return (function (){var s__43433__$1 = s__43433;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__43433__$1);if(temp__4092__auto____$1)
{var s__43433__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__43433__$2))
{var c__8123__auto__ = cljs.core.chunk_first.call(null,s__43433__$2);var size__8124__auto__ = cljs.core.count.call(null,c__8123__auto__);var b__43435 = cljs.core.chunk_buffer.call(null,size__8124__auto__);if((function (){var i__43434 = 0;while(true){
if((i__43434 < size__8124__auto__))
{var z = cljs.core._nth.call(null,c__8123__auto__,i__43434);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{cljs.core.chunk_append.call(null,b__43435,cljs.core.PersistentVector.fromArray([c__$1.call(null,z),v__$1.call(null,z)], true));
{
var G__43473 = (i__43434 + 1);
i__43434 = G__43473;
continue;
}
} else
{{
var G__43474 = (i__43434 + 1);
i__43434 = G__43474;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43435),iter__43432.call(null,cljs.core.chunk_rest.call(null,s__43433__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43435),null);
}
} else
{var z = cljs.core.first.call(null,s__43433__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([c__$1.call(null,z),v__$1.call(null,z)], true),iter__43432.call(null,cljs.core.rest.call(null,s__43433__$2)));
} else
{{
var G__43475 = cljs.core.rest.call(null,s__43433__$2);
s__43433__$1 = G__43475;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__43417__$2,temp__4092__auto__))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__43417__$2,temp__4092__auto__))
;return iter__8125__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + 1)));
})());
})(),iter__43416.call(null,cljs.core.rest.call(null,s__43417__$2)));
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s))
;return iter__8125__auto__.call(null,cljs.core.range.call(null,(l + 1)));
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
var G__43484 = (j - 1);
j = G__43484;
continue;
}
}
break;
}
})();if(cljs.core.truth_((function (){var and__7430__auto__ = r;if(cljs.core.truth_(and__7430__auto__))
{return (cljs.core._EQ_.call(null,j,a)) && ((((v.call(null,j) - 1) * (r - l)) < u.call(null,j)));
} else
{return and__7430__auto__;
}
})()))
{return foundation.app.data.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s);
} else
{if((cljs.core._EQ_.call(null,j,a)) && (cljs.core._EQ_.call(null,v.call(null,j),1)))
{return foundation.app.data.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var v__$1 = foundation.app.data.combinatorics.update.call(null,v,j,cljs.core.dec);var diff_uv = (cljs.core.truth_(s)?cljs.core.apply.call(null,cljs.core._PLUS_,(function (){var iter__8125__auto__ = ((function (v__$1){
return (function iter__43480(s__43481){return (new cljs.core.LazySeq(null,((function (v__$1){
return (function (){var s__43481__$1 = s__43481;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__43481__$1);if(temp__4092__auto__)
{var s__43481__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__43481__$2))
{var c__8123__auto__ = cljs.core.chunk_first.call(null,s__43481__$2);var size__8124__auto__ = cljs.core.count.call(null,c__8123__auto__);var b__43483 = cljs.core.chunk_buffer.call(null,size__8124__auto__);if((function (){var i__43482 = 0;while(true){
if((i__43482 < size__8124__auto__))
{var i = cljs.core._nth.call(null,c__8123__auto__,i__43482);cljs.core.chunk_append.call(null,b__43483,(u.call(null,i) - v__$1.call(null,i)));
{
var G__43485 = (i__43482 + 1);
i__43482 = G__43485;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43483),iter__43480.call(null,cljs.core.chunk_rest.call(null,s__43481__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43483),null);
}
} else
{var i = cljs.core.first.call(null,s__43481__$2);return cljs.core.cons.call(null,(u.call(null,i) - v__$1.call(null,i)),iter__43480.call(null,cljs.core.rest.call(null,s__43481__$2)));
}
} else
{return null;
}
break;
}
});})(v__$1))
,null,null));
});})(v__$1))
;return iter__8125__auto__.call(null,cljs.core.range.call(null,a,(j + 1)));
})()):null);var v__$2 = (function (){var ks = cljs.core.range.call(null,(j + 1),b);var v__$2 = v__$1;while(true){
if(cljs.core.empty_QMARK_.call(null,ks))
{return v__$2;
} else
{var k = cljs.core.first.call(null,ks);{
var G__43486 = cljs.core.rest.call(null,ks);
var G__43487 = cljs.core.assoc.call(null,v__$2,k,u.call(null,k));
ks = G__43486;
v__$2 = G__43487;
continue;
}
}
break;
}
})();var min_partitions_after_this = (cljs.core.truth_(s)?(s - (l + 1)):0);var amount_to_dec = (cljs.core.truth_(s)?(function (){var x__7744__auto__ = 0;var y__7745__auto__ = (min_partitions_after_this - diff_uv);return ((x__7744__auto__ > y__7745__auto__) ? x__7744__auto__ : y__7745__auto__);
})():0);var v__$3 = ((cljs.core._EQ_.call(null,amount_to_dec,0))?v__$2:(function (){var k_1 = (b - 1);var v__$3 = v__$2;var amount = amount_to_dec;while(true){
var vk = v__$3.call(null,k_1);if((amount > vk))
{{
var G__43488 = (k_1 - 1);
var G__43489 = cljs.core.assoc.call(null,v__$3,k_1,0);
var G__43490 = (amount - vk);
k_1 = G__43488;
v__$3 = G__43489;
amount = G__43490;
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
var partitions_M__delegate = function (items,p__43491){var map__43549 = p__43491;var map__43549__$1 = ((cljs.core.seq_QMARK_.call(null,map__43549))?cljs.core.apply.call(null,cljs.core.hash_map,map__43549):map__43549);var from = cljs.core.get.call(null,map__43549__$1,new cljs.core.Keyword(null,"min","min",1014012356));var to = cljs.core.get.call(null,map__43549__$1,new cljs.core.Keyword(null,"max","max",1014012118));if(cljs.core._EQ_.call(null,cljs.core.count.call(null,items),0))
{if((((function (){var or__7439__auto__ = from;if(cljs.core.truth_(or__7439__auto__))
{return or__7439__auto__;
} else
{return 0;
}
})() <= 0)) && ((0 <= (function (){var or__7439__auto__ = to;if(cljs.core.truth_(or__7439__auto__))
{return or__7439__auto__;
} else
{return 0;
}
})())))
{return cljs.core.list(cljs.core.List.EMPTY);
} else
{return cljs.core.List.EMPTY;
}
} else
{var items__$1 = cljs.core.vec.call(null,items);var ditems = cljs.core.vec.call(null,cljs.core.distinct.call(null,items__$1));var freqs = cljs.core.frequencies.call(null,items__$1);var N = cljs.core.count.call(null,items__$1);var M = cljs.core.count.call(null,ditems);var from__$1 = (cljs.core.truth_((function (){var and__7430__auto__ = from;if(cljs.core.truth_(and__7430__auto__))
{return (from <= 1);
} else
{return and__7430__auto__;
}
})())?null:from);var to__$1 = (cljs.core.truth_((function (){var and__7430__auto__ = to;if(cljs.core.truth_(and__7430__auto__))
{return (to >= N);
} else
{return and__7430__auto__;
}
})())?null:to);if(!(((1 <= (function (){var or__7439__auto__ = from__$1;if(cljs.core.truth_(or__7439__auto__))
{return or__7439__auto__;
} else
{return 1;
}
})())) && ((((function (){var or__7439__auto__ = from__$1;if(cljs.core.truth_(or__7439__auto__))
{return or__7439__auto__;
} else
{return 1;
}
})() <= (function (){var or__7439__auto__ = to__$1;if(cljs.core.truth_(or__7439__auto__))
{return or__7439__auto__;
} else
{return N;
}
})())) && (((function (){var or__7439__auto__ = to__$1;if(cljs.core.truth_(or__7439__auto__))
{return or__7439__auto__;
} else
{return N;
}
})() <= N)))))
{return cljs.core.List.EMPTY;
} else
{if(cljs.core._EQ_.call(null,N,1))
{return cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.with_meta.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.first.call(null,items__$1))))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,378),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,19)))))))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,378),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18)))))))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,378),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,17)))));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var start_multiset = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8125__auto__ = (function iter__43550(s__43551){return (new cljs.core.LazySeq(null,(function (){var s__43551__$1 = s__43551;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__43551__$1);if(temp__4092__auto__)
{var s__43551__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__43551__$2))
{var c__8123__auto__ = cljs.core.chunk_first.call(null,s__43551__$2);var size__8124__auto__ = cljs.core.count.call(null,c__8123__auto__);var b__43553 = cljs.core.chunk_buffer.call(null,size__8124__auto__);if((function (){var i__43552 = 0;while(true){
if((i__43552 < size__8124__auto__))
{var i = cljs.core._nth.call(null,c__8123__auto__,i__43552);var j = (i + 1);cljs.core.chunk_append.call(null,b__43553,cljs.core.PersistentVector.fromArray([j,freqs.call(null,ditems.call(null,i))], true));
{
var G__43606 = (i__43552 + 1);
i__43552 = G__43606;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43553),iter__43550.call(null,cljs.core.chunk_rest.call(null,s__43551__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43553),null);
}
} else
{var i = cljs.core.first.call(null,s__43551__$2);var j = (i + 1);return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([j,freqs.call(null,ditems.call(null,i))], true),iter__43550.call(null,cljs.core.rest.call(null,s__43551__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8125__auto__.call(null,cljs.core.range.call(null,M));
})());var parts = foundation.app.data.combinatorics.multiset_partitions_M.call(null,start_multiset,to__$1,from__$1);var iter__8125__auto__ = (function iter__43554(s__43555){return (new cljs.core.LazySeq(null,(function (){var s__43555__$1 = s__43555;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__43555__$1);if(temp__4092__auto__)
{var s__43555__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__43555__$2))
{var c__8123__auto__ = cljs.core.chunk_first.call(null,s__43555__$2);var size__8124__auto__ = cljs.core.count.call(null,c__8123__auto__);var b__43557 = cljs.core.chunk_buffer.call(null,size__8124__auto__);if((function (){var i__43556 = 0;while(true){
if((i__43556 < size__8124__auto__))
{var part = cljs.core._nth.call(null,c__8123__auto__,i__43556);cljs.core.chunk_append.call(null,b__43557,(function (){var iter__8125__auto__ = ((function (i__43556,part,c__8123__auto__,size__8124__auto__,b__43557,s__43555__$2,temp__4092__auto__){
return (function iter__43582(s__43583){return (new cljs.core.LazySeq(null,((function (i__43556,part,c__8123__auto__,size__8124__auto__,b__43557,s__43555__$2,temp__4092__auto__){
return (function (){var s__43583__$1 = s__43583;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__43583__$1);if(temp__4092__auto____$1)
{var s__43583__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__43583__$2))
{var c__8123__auto____$1 = cljs.core.chunk_first.call(null,s__43583__$2);var size__8124__auto____$1 = cljs.core.count.call(null,c__8123__auto____$1);var b__43585 = cljs.core.chunk_buffer.call(null,size__8124__auto____$1);if((function (){var i__43584 = 0;while(true){
if((i__43584 < size__8124__auto____$1))
{var multiset = cljs.core._nth.call(null,c__8123__auto____$1,i__43584);cljs.core.chunk_append.call(null,b__43585,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__43584,i__43556,multiset,c__8123__auto____$1,size__8124__auto____$1,b__43585,s__43583__$2,temp__4092__auto____$1,part,c__8123__auto__,size__8124__auto__,b__43557,s__43555__$2,temp__4092__auto__){
return (function (p__43590){var vec__43591 = p__43590;var index = cljs.core.nth.call(null,vec__43591,0,null);var numtimes = cljs.core.nth.call(null,vec__43591,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__43584,i__43556,multiset,c__8123__auto____$1,size__8124__auto____$1,b__43585,s__43583__$2,temp__4092__auto____$1,part,c__8123__auto__,size__8124__auto__,b__43557,s__43555__$2,temp__4092__auto__))
,multiset)));
{
var G__43607 = (i__43584 + 1);
i__43584 = G__43607;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43585),iter__43582.call(null,cljs.core.chunk_rest.call(null,s__43583__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43585),null);
}
} else
{var multiset = cljs.core.first.call(null,s__43583__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__43556,multiset,s__43583__$2,temp__4092__auto____$1,part,c__8123__auto__,size__8124__auto__,b__43557,s__43555__$2,temp__4092__auto__){
return (function (p__43592){var vec__43593 = p__43592;var index = cljs.core.nth.call(null,vec__43593,0,null);var numtimes = cljs.core.nth.call(null,vec__43593,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__43556,multiset,s__43583__$2,temp__4092__auto____$1,part,c__8123__auto__,size__8124__auto__,b__43557,s__43555__$2,temp__4092__auto__))
,multiset)),iter__43582.call(null,cljs.core.rest.call(null,s__43583__$2)));
}
} else
{return null;
}
break;
}
});})(i__43556,part,c__8123__auto__,size__8124__auto__,b__43557,s__43555__$2,temp__4092__auto__))
,null,null));
});})(i__43556,part,c__8123__auto__,size__8124__auto__,b__43557,s__43555__$2,temp__4092__auto__))
;return iter__8125__auto__.call(null,part);
})());
{
var G__43608 = (i__43556 + 1);
i__43556 = G__43608;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43557),iter__43554.call(null,cljs.core.chunk_rest.call(null,s__43555__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43557),null);
}
} else
{var part = cljs.core.first.call(null,s__43555__$2);return cljs.core.cons.call(null,(function (){var iter__8125__auto__ = ((function (part,s__43555__$2,temp__4092__auto__){
return (function iter__43594(s__43595){return (new cljs.core.LazySeq(null,((function (part,s__43555__$2,temp__4092__auto__){
return (function (){var s__43595__$1 = s__43595;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__43595__$1);if(temp__4092__auto____$1)
{var s__43595__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__43595__$2))
{var c__8123__auto__ = cljs.core.chunk_first.call(null,s__43595__$2);var size__8124__auto__ = cljs.core.count.call(null,c__8123__auto__);var b__43597 = cljs.core.chunk_buffer.call(null,size__8124__auto__);if((function (){var i__43596 = 0;while(true){
if((i__43596 < size__8124__auto__))
{var multiset = cljs.core._nth.call(null,c__8123__auto__,i__43596);cljs.core.chunk_append.call(null,b__43597,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__43596,multiset,c__8123__auto__,size__8124__auto__,b__43597,s__43595__$2,temp__4092__auto____$1,part,s__43555__$2,temp__4092__auto__){
return (function (p__43602){var vec__43603 = p__43602;var index = cljs.core.nth.call(null,vec__43603,0,null);var numtimes = cljs.core.nth.call(null,vec__43603,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__43596,multiset,c__8123__auto__,size__8124__auto__,b__43597,s__43595__$2,temp__4092__auto____$1,part,s__43555__$2,temp__4092__auto__))
,multiset)));
{
var G__43609 = (i__43596 + 1);
i__43596 = G__43609;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43597),iter__43594.call(null,cljs.core.chunk_rest.call(null,s__43595__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43597),null);
}
} else
{var multiset = cljs.core.first.call(null,s__43595__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (multiset,s__43595__$2,temp__4092__auto____$1,part,s__43555__$2,temp__4092__auto__){
return (function (p__43604){var vec__43605 = p__43604;var index = cljs.core.nth.call(null,vec__43605,0,null);var numtimes = cljs.core.nth.call(null,vec__43605,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(multiset,s__43595__$2,temp__4092__auto____$1,part,s__43555__$2,temp__4092__auto__))
,multiset)),iter__43594.call(null,cljs.core.rest.call(null,s__43595__$2)));
}
} else
{return null;
}
break;
}
});})(part,s__43555__$2,temp__4092__auto__))
,null,null));
});})(part,s__43555__$2,temp__4092__auto__))
;return iter__8125__auto__.call(null,part);
})(),iter__43554.call(null,cljs.core.rest.call(null,s__43555__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8125__auto__.call(null,parts);
} else
{return null;
}
}
}
}
};
var partitions_M = function (items,var_args){
var p__43491 = null;if (arguments.length > 1) {
  p__43491 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions_M__delegate.call(this,items,p__43491);};
partitions_M.cljs$lang$maxFixedArity = 1;
partitions_M.cljs$lang$applyTo = (function (arglist__43610){
var items = cljs.core.first(arglist__43610);
var p__43491 = cljs.core.rest(arglist__43610);
return partitions_M__delegate(items,p__43491);
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
partitions.cljs$lang$applyTo = (function (arglist__43611){
var items = cljs.core.first(arglist__43611);
var args = cljs.core.rest(arglist__43611);
return partitions__delegate(items,args);
});
partitions.cljs$core$IFn$_invoke$arity$variadic = partitions__delegate;
return partitions;
})()
;
