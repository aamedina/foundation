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
var G__18307 = cljs.core.assoc.call(null,c__$2,(j__$1 - 1),(c__$2.call(null,j__$1) - 1));
var G__18308 = (j__$1 - 1);
c__$2 = G__18307;
j__$1 = G__18308;
continue;
}
}
break;
}
}
}
});
return (new cljs.core.LazySeq(null,(function (){var c = cljs.core.vec.call(null,cljs.core.cons.call(null,null,(function (){var iter__8324__auto__ = (function iter__18303(s__18304){return (new cljs.core.LazySeq(null,(function (){var s__18304__$1 = s__18304;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__18304__$1);if(temp__4092__auto__)
{var s__18304__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18304__$2))
{var c__8322__auto__ = cljs.core.chunk_first.call(null,s__18304__$2);var size__8323__auto__ = cljs.core.count.call(null,c__8322__auto__);var b__18306 = cljs.core.chunk_buffer.call(null,size__8323__auto__);if((function (){var i__18305 = 0;while(true){
if((i__18305 < size__8323__auto__))
{var j = cljs.core._nth.call(null,c__8322__auto__,i__18305);cljs.core.chunk_append.call(null,b__18306,((j + cnt) + (- (n + 1))));
{
var G__18309 = (i__18305 + 1);
i__18305 = G__18309;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18306),iter__18303.call(null,cljs.core.chunk_rest.call(null,s__18304__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18306),null);
}
} else
{var j = cljs.core.first.call(null,s__18304__$2);return cljs.core.cons.call(null,((j + cnt) + (- (n + 1))),iter__18303.call(null,cljs.core.rest.call(null,s__18304__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8324__auto__.call(null,cljs.core.range.call(null,1,(n + 1)));
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
{return cljs.core.map.call(null,(function (p1__18310_SHARP_){return cljs.core.map.call(null,v_items,p1__18310_SHARP_);
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
var G__18311 = (i - 1);
var G__18312 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__18311;
v_seqs__$2 = G__18312;
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
cartesian_product.cljs$lang$applyTo = (function (arglist__18313){
var seqs = cljs.core.seq(arglist__18313);
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
var G__18314 = (i - 1);
i = G__18314;
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
var G__18315 = (i - 1);
i = G__18315;
continue;
}
}
break;
}
})();var v__$1 = cljs.core.assoc.call(null,v,j,v.call(null,l),l,vj);var k = (j + 1);var l__$1 = (len - 1);while(true){
if((k < l__$1))
{{
var G__18316 = cljs.core.assoc.call(null,v__$1,k,v__$1.call(null,l__$1),l__$1,v__$1.call(null,k));
var G__18317 = (k + 1);
var G__18318 = (l__$1 - 1);
v__$1 = G__18316;
k = G__18317;
l__$1 = G__18318;
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
foundation.app.data.combinatorics.multi_perm = (function multi_perm(l){var f = cljs.core.frequencies.call(null,l);var v = cljs.core.vec.call(null,cljs.core.keys.call(null,f));var indices = cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__8324__auto__ = ((function (f,v){
return (function iter__18323(s__18324){return (new cljs.core.LazySeq(null,((function (f,v){
return (function (){var s__18324__$1 = s__18324;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__18324__$1);if(temp__4092__auto__)
{var s__18324__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18324__$2))
{var c__8322__auto__ = cljs.core.chunk_first.call(null,s__18324__$2);var size__8323__auto__ = cljs.core.count.call(null,c__8322__auto__);var b__18326 = cljs.core.chunk_buffer.call(null,size__8323__auto__);if((function (){var i__18325 = 0;while(true){
if((i__18325 < size__8323__auto__))
{var i = cljs.core._nth.call(null,c__8322__auto__,i__18325);cljs.core.chunk_append.call(null,b__18326,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));
{
var G__18327 = (i__18325 + 1);
i__18325 = G__18327;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18326),iter__18323.call(null,cljs.core.chunk_rest.call(null,s__18324__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18326),null);
}
} else
{var i = cljs.core.first.call(null,s__18324__$2);return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),iter__18323.call(null,cljs.core.rest.call(null,s__18324__$2)));
}
} else
{return null;
}
break;
}
});})(f,v))
,null,null));
});})(f,v))
;return iter__8324__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,v)));
})());return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.map,v),foundation.app.data.combinatorics.lex_permutations.call(null,indices));
});
/**
* All the distinct permutations of items, lexicographic by index.
*/
foundation.app.data.combinatorics.permutations = (function permutations(items){if(cljs.core.truth_(foundation.app.data.combinatorics.sorted_numbers_QMARK_.call(null,items)))
{return foundation.app.data.combinatorics.lex_permutations.call(null,items);
} else
{if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core.distinct_QMARK_,items)))
{var v = cljs.core.vec.call(null,items);return cljs.core.map.call(null,(function (p1__18328_SHARP_){return cljs.core.map.call(null,v,p1__18328_SHARP_);
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
{return cljs.core.vec.call(null,(function (){var iter__8324__auto__ = (function iter__18333(s__18334){return (new cljs.core.LazySeq(null,(function (){var s__18334__$1 = s__18334;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__18334__$1);if(temp__4092__auto__)
{var s__18334__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18334__$2))
{var c__8322__auto__ = cljs.core.chunk_first.call(null,s__18334__$2);var size__8323__auto__ = cljs.core.count.call(null,c__8322__auto__);var b__18336 = cljs.core.chunk_buffer.call(null,size__8323__auto__);if((function (){var i__18335 = 0;while(true){
if((i__18335 < size__8323__auto__))
{var i = cljs.core._nth.call(null,c__8322__auto__,i__18335);cljs.core.chunk_append.call(null,b__18336,(function (){var x__7943__auto__ = 0;var y__7944__auto__ = (i - ((n - s) - -1));return ((x__7943__auto__ > y__7944__auto__) ? x__7943__auto__ : y__7944__auto__);
})());
{
var G__18337 = (i__18335 + 1);
i__18335 = G__18337;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18336),iter__18333.call(null,cljs.core.chunk_rest.call(null,s__18334__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18336),null);
}
} else
{var i = cljs.core.first.call(null,s__18334__$2);return cljs.core.cons.call(null,(function (){var x__7943__auto__ = 0;var y__7944__auto__ = (i - ((n - s) - -1));return ((x__7943__auto__ > y__7944__auto__) ? x__7943__auto__ : y__7944__auto__);
})(),iter__18333.call(null,cljs.core.rest.call(null,s__18334__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8324__auto__.call(null,cljs.core.range.call(null,1,(n + 1)));
})());
} else
{return cljs.core.vec.call(null,cljs.core.repeat.call(null,n,0));
}
});
foundation.app.data.combinatorics.growth_strings_H = (function() {
var growth_strings_H = null;
var growth_strings_H__3 = (function (n,r,s){return growth_strings_H.call(null,n,foundation.app.data.combinatorics.init.call(null,n,s),cljs.core.vec.call(null,cljs.core.repeat.call(null,n,1)),r,s);
});
var growth_strings_H__5 = (function (n,a,b,r,s){return cljs.core.cons.call(null,a,(new cljs.core.LazySeq(null,(function (){if((function (){var and__7629__auto__ = (cljs.core.peek.call(null,b) > cljs.core.peek.call(null,a));if(and__7629__auto__)
{if(cljs.core.truth_(r))
{return (cljs.core.peek.call(null,a) < (r - 1));
} else
{return true;
}
} else
{return and__7629__auto__;
}
})())
{return growth_strings_H.call(null,n,foundation.app.data.combinatorics.update.call(null,a,(n - 1),cljs.core.inc),b,r,s);
} else
{var j = (function (){var j = (n - 2);while(true){
if((function (){var and__7629__auto__ = (a.call(null,j) < b.call(null,j));if(and__7629__auto__)
{var and__7629__auto____$1 = (cljs.core.truth_(r)?(a.call(null,j) < (r - 1)):true);if(and__7629__auto____$1)
{if(cljs.core.truth_(s))
{return (((s - b.call(null,j)) - ((((a.call(null,j) + 1) === b.call(null,j)))?1:0)) <= (n - j));
} else
{return true;
}
} else
{return and__7629__auto____$1;
}
} else
{return and__7629__auto__;
}
})())
{return j;
} else
{{
var G__18340 = (j - 1);
j = G__18340;
continue;
}
}
break;
}
})();if((j === 0))
{return cljs.core.List.EMPTY;
} else
{var a__$1 = foundation.app.data.combinatorics.update.call(null,a,j,cljs.core.inc);var x = (cljs.core.truth_(s)?(s - (b.call(null,j) + ((cljs.core._EQ_.call(null,a__$1.call(null,j),b.call(null,j)))?1:0))):null);var vec__18339 = (function (){var a__$2 = a__$1;var b__$1 = b;var i = (j + 1);var current_max = (b__$1.call(null,j) + (((b__$1.call(null,j) === a__$2.call(null,j)))?1:0));while(true){
if((i === n))
{return cljs.core.PersistentVector.fromArray([a__$2,b__$1], true);
} else
{if(cljs.core.truth_((function (){var and__7629__auto__ = s;if(cljs.core.truth_(and__7629__auto__))
{return (i > ((n - x) - 1));
} else
{return and__7629__auto__;
}
})()))
{var new_a_i = ((i - n) + s);{
var G__18341 = cljs.core.assoc.call(null,a__$2,i,new_a_i);
var G__18342 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__18343 = (i + 1);
var G__18344 = (function (){var x__7943__auto__ = current_max;var y__7944__auto__ = (new_a_i + 1);return ((x__7943__auto__ > y__7944__auto__) ? x__7943__auto__ : y__7944__auto__);
})();
a__$2 = G__18341;
b__$1 = G__18342;
i = G__18343;
current_max = G__18344;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__18345 = cljs.core.assoc.call(null,a__$2,i,0);
var G__18346 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__18347 = (i + 1);
var G__18348 = current_max;
a__$2 = G__18345;
b__$1 = G__18346;
i = G__18347;
current_max = G__18348;
continue;
}
} else
{return null;
}
}
}
break;
}
})();var a__$2 = cljs.core.nth.call(null,vec__18339,0,null);var b__$1 = cljs.core.nth.call(null,vec__18339,1,null);return growth_strings_H.call(null,n,a__$2,b__$1,r,s);
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
var lex_partitions_H__delegate = function (N,p__18349){var map__18355 = p__18349;var map__18355__$1 = ((cljs.core.seq_QMARK_.call(null,map__18355))?cljs.core.apply.call(null,cljs.core.hash_map,map__18355):map__18355);var from = cljs.core.get.call(null,map__18355__$1,new cljs.core.Keyword(null,"min","min",1014012356));var to = cljs.core.get.call(null,map__18355__$1,new cljs.core.Keyword(null,"max","max",1014012118));if(cljs.core._EQ_.call(null,N,0))
{if((((function (){var or__7638__auto__ = from;if(cljs.core.truth_(or__7638__auto__))
{return or__7638__auto__;
} else
{return 0;
}
})() <= 0)) && ((0 <= (function (){var or__7638__auto__ = to;if(cljs.core.truth_(or__7638__auto__))
{return or__7638__auto__;
} else
{return 0;
}
})())))
{return cljs.core.list(cljs.core.List.EMPTY);
} else
{return cljs.core.List.EMPTY;
}
} else
{var from__$1 = (cljs.core.truth_((function (){var and__7629__auto__ = from;if(cljs.core.truth_(and__7629__auto__))
{return (from <= 1);
} else
{return and__7629__auto__;
}
})())?null:from);var to__$1 = (cljs.core.truth_((function (){var and__7629__auto__ = to;if(cljs.core.truth_(and__7629__auto__))
{return (to >= N);
} else
{return and__7629__auto__;
}
})())?null:to);if(!(((1 <= (function (){var or__7638__auto__ = from__$1;if(cljs.core.truth_(or__7638__auto__))
{return or__7638__auto__;
} else
{return 1;
}
})())) && ((((function (){var or__7638__auto__ = from__$1;if(cljs.core.truth_(or__7638__auto__))
{return or__7638__auto__;
} else
{return 1;
}
})() <= (function (){var or__7638__auto__ = to__$1;if(cljs.core.truth_(or__7638__auto__))
{return or__7638__auto__;
} else
{return N;
}
})())) && (((function (){var or__7638__auto__ = to__$1;if(cljs.core.truth_(or__7638__auto__))
{return or__7638__auto__;
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
{var growth_strings = foundation.app.data.combinatorics.growth_strings_H.call(null,N,to__$1,from__$1);var iter__8324__auto__ = (function iter__18356(s__18357){return (new cljs.core.LazySeq(null,(function (){var s__18357__$1 = s__18357;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__18357__$1);if(temp__4092__auto__)
{var s__18357__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18357__$2))
{var c__8322__auto__ = cljs.core.chunk_first.call(null,s__18357__$2);var size__8323__auto__ = cljs.core.count.call(null,c__8322__auto__);var b__18359 = cljs.core.chunk_buffer.call(null,size__8323__auto__);if((function (){var i__18358 = 0;while(true){
if((i__18358 < size__8323__auto__))
{var growth_string = cljs.core._nth.call(null,c__8322__auto__,i__18358);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));cljs.core.chunk_append.call(null,b__18359,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))));
{
var G__18360 = (i__18358 + 1);
i__18358 = G__18360;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18359),iter__18356.call(null,cljs.core.chunk_rest.call(null,s__18357__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18359),null);
}
} else
{var growth_string = cljs.core.first.call(null,s__18357__$2);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));return cljs.core.cons.call(null,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))),iter__18356.call(null,cljs.core.rest.call(null,s__18357__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8324__auto__.call(null,growth_strings);
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
var p__18349 = null;if (arguments.length > 1) {
  p__18349 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return lex_partitions_H__delegate.call(this,N,p__18349);};
lex_partitions_H.cljs$lang$maxFixedArity = 1;
lex_partitions_H.cljs$lang$applyTo = (function (arglist__18361){
var N = cljs.core.first(arglist__18361);
var p__18349 = cljs.core.rest(arglist__18361);
return lex_partitions_H__delegate(N,p__18349);
});
lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic = lex_partitions_H__delegate;
return lex_partitions_H;
})()
;
/**
* @param {...*} var_args
*/
foundation.app.data.combinatorics.partitions_H = (function() { 
var partitions_H__delegate = function (items,args){var items__$1 = cljs.core.vec.call(null,items);var N = cljs.core.count.call(null,items__$1);var lex = cljs.core.apply.call(null,foundation.app.data.combinatorics.lex_partitions_H,N,args);var iter__8324__auto__ = (function iter__18382(s__18383){return (new cljs.core.LazySeq(null,(function (){var s__18383__$1 = s__18383;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__18383__$1);if(temp__4092__auto__)
{var s__18383__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18383__$2))
{var c__8322__auto__ = cljs.core.chunk_first.call(null,s__18383__$2);var size__8323__auto__ = cljs.core.count.call(null,c__8322__auto__);var b__18385 = cljs.core.chunk_buffer.call(null,size__8323__auto__);if((function (){var i__18384 = 0;while(true){
if((i__18384 < size__8323__auto__))
{var parts = cljs.core._nth.call(null,c__8322__auto__,i__18384);cljs.core.chunk_append.call(null,b__18385,(function (){var iter__8324__auto__ = ((function (i__18384,parts,c__8322__auto__,size__8323__auto__,b__18385,s__18383__$2,temp__4092__auto__){
return (function iter__18394(s__18395){return (new cljs.core.LazySeq(null,((function (i__18384,parts,c__8322__auto__,size__8323__auto__,b__18385,s__18383__$2,temp__4092__auto__){
return (function (){var s__18395__$1 = s__18395;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__18395__$1);if(temp__4092__auto____$1)
{var s__18395__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__18395__$2))
{var c__8322__auto____$1 = cljs.core.chunk_first.call(null,s__18395__$2);var size__8323__auto____$1 = cljs.core.count.call(null,c__8322__auto____$1);var b__18397 = cljs.core.chunk_buffer.call(null,size__8323__auto____$1);if((function (){var i__18396 = 0;while(true){
if((i__18396 < size__8323__auto____$1))
{var part = cljs.core._nth.call(null,c__8322__auto____$1,i__18396);cljs.core.chunk_append.call(null,b__18397,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__18396,i__18384,part,c__8322__auto____$1,size__8323__auto____$1,b__18397,s__18395__$2,temp__4092__auto____$1,parts,c__8322__auto__,size__8323__auto__,b__18385,s__18383__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__18396,i__18384,part,c__8322__auto____$1,size__8323__auto____$1,b__18397,s__18395__$2,temp__4092__auto____$1,parts,c__8322__auto__,size__8323__auto__,b__18385,s__18383__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__18402 = (i__18396 + 1);
i__18396 = G__18402;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18397),iter__18394.call(null,cljs.core.chunk_rest.call(null,s__18395__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18397),null);
}
} else
{var part = cljs.core.first.call(null,s__18395__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__18384,part,s__18395__$2,temp__4092__auto____$1,parts,c__8322__auto__,size__8323__auto__,b__18385,s__18383__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__18384,part,s__18395__$2,temp__4092__auto____$1,parts,c__8322__auto__,size__8323__auto__,b__18385,s__18383__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__18394.call(null,cljs.core.rest.call(null,s__18395__$2)));
}
} else
{return null;
}
break;
}
});})(i__18384,parts,c__8322__auto__,size__8323__auto__,b__18385,s__18383__$2,temp__4092__auto__))
,null,null));
});})(i__18384,parts,c__8322__auto__,size__8323__auto__,b__18385,s__18383__$2,temp__4092__auto__))
;return iter__8324__auto__.call(null,parts);
})());
{
var G__18403 = (i__18384 + 1);
i__18384 = G__18403;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18385),iter__18382.call(null,cljs.core.chunk_rest.call(null,s__18383__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18385),null);
}
} else
{var parts = cljs.core.first.call(null,s__18383__$2);return cljs.core.cons.call(null,(function (){var iter__8324__auto__ = ((function (parts,s__18383__$2,temp__4092__auto__){
return (function iter__18398(s__18399){return (new cljs.core.LazySeq(null,((function (parts,s__18383__$2,temp__4092__auto__){
return (function (){var s__18399__$1 = s__18399;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__18399__$1);if(temp__4092__auto____$1)
{var s__18399__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__18399__$2))
{var c__8322__auto__ = cljs.core.chunk_first.call(null,s__18399__$2);var size__8323__auto__ = cljs.core.count.call(null,c__8322__auto__);var b__18401 = cljs.core.chunk_buffer.call(null,size__8323__auto__);if((function (){var i__18400 = 0;while(true){
if((i__18400 < size__8323__auto__))
{var part = cljs.core._nth.call(null,c__8322__auto__,i__18400);cljs.core.chunk_append.call(null,b__18401,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__18400,part,c__8322__auto__,size__8323__auto__,b__18401,s__18399__$2,temp__4092__auto____$1,parts,s__18383__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__18400,part,c__8322__auto__,size__8323__auto__,b__18401,s__18399__$2,temp__4092__auto____$1,parts,s__18383__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__18404 = (i__18400 + 1);
i__18400 = G__18404;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18401),iter__18398.call(null,cljs.core.chunk_rest.call(null,s__18399__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18401),null);
}
} else
{var part = cljs.core.first.call(null,s__18399__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (part,s__18399__$2,temp__4092__auto____$1,parts,s__18383__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(part,s__18399__$2,temp__4092__auto____$1,parts,s__18383__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__18398.call(null,cljs.core.rest.call(null,s__18399__$2)));
}
} else
{return null;
}
break;
}
});})(parts,s__18383__$2,temp__4092__auto__))
,null,null));
});})(parts,s__18383__$2,temp__4092__auto__))
;return iter__8324__auto__.call(null,parts);
})(),iter__18382.call(null,cljs.core.rest.call(null,s__18383__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8324__auto__.call(null,lex);
};
var partitions_H = function (items,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions_H__delegate.call(this,items,args);};
partitions_H.cljs$lang$maxFixedArity = 1;
partitions_H.cljs$lang$applyTo = (function (arglist__18405){
var items = cljs.core.first(arglist__18405);
var args = cljs.core.rest(arglist__18405);
return partitions_H__delegate(items,args);
});
partitions_H.cljs$core$IFn$_invoke$arity$variadic = partitions_H__delegate;
return partitions_H;
})()
;
foundation.app.data.combinatorics.multiset_partitions_M = (function() {
var multiset_partitions_M = null;
var multiset_partitions_M__3 = (function (multiset,r,s){var n = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,multiset));var m = cljs.core.count.call(null,multiset);var f = cljs.core.PersistentVector.EMPTY;var c = cljs.core.PersistentVector.EMPTY;var u = cljs.core.PersistentVector.EMPTY;var v = cljs.core.PersistentVector.EMPTY;var vec__18428 = (function (){var j = 0;var c__$1 = c;var u__$1 = u;var v__$1 = v;while(true){
if(cljs.core._EQ_.call(null,j,m))
{return cljs.core.PersistentVector.fromArray([c__$1,u__$1,v__$1], true);
} else
{{
var G__18450 = (j + 1);
var G__18451 = cljs.core.assoc.call(null,c__$1,j,(j + 1));
var G__18452 = cljs.core.assoc.call(null,u__$1,j,multiset.call(null,(j + 1)));
var G__18453 = cljs.core.assoc.call(null,v__$1,j,multiset.call(null,(j + 1)));
j = G__18450;
c__$1 = G__18451;
u__$1 = G__18452;
v__$1 = G__18453;
continue;
}
}
break;
}
})();var c__$1 = cljs.core.nth.call(null,vec__18428,0,null);var u__$1 = cljs.core.nth.call(null,vec__18428,1,null);var v__$1 = cljs.core.nth.call(null,vec__18428,2,null);var a = 0;var b = m;var l = 0;var f__$1 = cljs.core.assoc.call(null,f,0,0,1,m);var stack = cljs.core.List.EMPTY;return multiset_partitions_M.call(null,n,m,f__$1,c__$1,u__$1,v__$1,a,b,l,r,s);
});
var multiset_partitions_M__11 = (function (n,m,f,c,u,v,a,b,l,r,s){while(true){
var vec__18429 = (function (){var j = a;var k = b;var x = false;var u__$1 = u;var v__$1 = v;var c__$1 = c;while(true){
if((j >= b))
{return cljs.core.PersistentVector.fromArray([u__$1,v__$1,c__$1,j,k], true);
} else
{var u__$2 = cljs.core.assoc.call(null,u__$1,k,(u__$1.call(null,j) - v__$1.call(null,j)));if(cljs.core._EQ_.call(null,u__$2.call(null,k),0))
{{
var G__18454 = (j + 1);
var G__18455 = k;
var G__18456 = true;
var G__18457 = u__$2;
var G__18458 = v__$1;
var G__18459 = c__$1;
j = G__18454;
k = G__18455;
x = G__18456;
u__$1 = G__18457;
v__$1 = G__18458;
c__$1 = G__18459;
continue;
}
} else
{if(!(x))
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,(function (){var x__7950__auto__ = v__$1.call(null,j);var y__7951__auto__ = u__$2.call(null,k);return ((x__7950__auto__ < y__7951__auto__) ? x__7950__auto__ : y__7951__auto__);
})());var x__$1 = (u__$2.call(null,k) < v__$2.call(null,j));var k__$1 = (k + 1);var j__$1 = (j + 1);{
var G__18460 = j__$1;
var G__18461 = k__$1;
var G__18462 = x__$1;
var G__18463 = u__$2;
var G__18464 = v__$2;
var G__18465 = c__$2;
j = G__18460;
k = G__18461;
x = G__18462;
u__$1 = G__18463;
v__$1 = G__18464;
c__$1 = G__18465;
continue;
}
} else
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,u__$2.call(null,k));var k__$1 = (k + 1);var j__$1 = (j + 1);{
var G__18466 = j__$1;
var G__18467 = k__$1;
var G__18468 = x;
var G__18469 = u__$2;
var G__18470 = v__$2;
var G__18471 = c__$2;
j = G__18466;
k = G__18467;
x = G__18468;
u__$1 = G__18469;
v__$1 = G__18470;
c__$1 = G__18471;
continue;
}
}
}
}
break;
}
})();var u__$1 = cljs.core.nth.call(null,vec__18429,0,null);var v__$1 = cljs.core.nth.call(null,vec__18429,1,null);var c__$1 = cljs.core.nth.call(null,vec__18429,2,null);var j = cljs.core.nth.call(null,vec__18429,3,null);var k = cljs.core.nth.call(null,vec__18429,4,null);if(cljs.core.truth_((function (){var and__7629__auto__ = r;if(cljs.core.truth_(and__7629__auto__))
{return ((k > b)) && (cljs.core._EQ_.call(null,l,(r - 1)));
} else
{return and__7629__auto__;
}
})()))
{return foundation.app.data.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
} else
{if(cljs.core.truth_((function (){var and__7629__auto__ = s;if(cljs.core.truth_(and__7629__auto__))
{return ((k <= b)) && (((l + 1) < s));
} else
{return and__7629__auto__;
}
})()))
{return foundation.app.data.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
} else
{if((k > b))
{var a__$1 = b;var b__$1 = k;var l__$1 = (l + 1);var f__$1 = cljs.core.assoc.call(null,f,(l__$1 + 1),b__$1);{
var G__18472 = n;
var G__18473 = m;
var G__18474 = f__$1;
var G__18475 = c__$1;
var G__18476 = u__$1;
var G__18477 = v__$1;
var G__18478 = a__$1;
var G__18479 = b__$1;
var G__18480 = l__$1;
var G__18481 = r;
var G__18482 = s;
n = G__18472;
m = G__18473;
f = G__18474;
c = G__18475;
u = G__18476;
v = G__18477;
a = G__18478;
b = G__18479;
l = G__18480;
r = G__18481;
s = G__18482;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var part = (function (){var iter__8324__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s){
return (function iter__18430(s__18431){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s){
return (function (){var s__18431__$1 = s__18431;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__18431__$1);if(temp__4092__auto__)
{var s__18431__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18431__$2))
{var c__8322__auto__ = cljs.core.chunk_first.call(null,s__18431__$2);var size__8323__auto__ = cljs.core.count.call(null,c__8322__auto__);var b__18433 = cljs.core.chunk_buffer.call(null,size__8323__auto__);if((function (){var i__18432 = 0;while(true){
if((i__18432 < size__8323__auto__))
{var y = cljs.core._nth.call(null,c__8322__auto__,i__18432);cljs.core.chunk_append.call(null,b__18433,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + 1)) - 1);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8324__auto__ = ((function (i__18432,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8322__auto__,size__8323__auto__,b__18433,s__18431__$2,temp__4092__auto__){
return (function iter__18442(s__18443){return (new cljs.core.LazySeq(null,((function (i__18432,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8322__auto__,size__8323__auto__,b__18433,s__18431__$2,temp__4092__auto__){
return (function (){var s__18443__$1 = s__18443;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__18443__$1);if(temp__4092__auto____$1)
{var s__18443__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__18443__$2))
{var c__8322__auto____$1 = cljs.core.chunk_first.call(null,s__18443__$2);var size__8323__auto____$1 = cljs.core.count.call(null,c__8322__auto____$1);var b__18445 = cljs.core.chunk_buffer.call(null,size__8323__auto____$1);if((function (){var i__18444 = 0;while(true){
if((i__18444 < size__8323__auto____$1))
{var z = cljs.core._nth.call(null,c__8322__auto____$1,i__18444);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{cljs.core.chunk_append.call(null,b__18445,cljs.core.PersistentVector.fromArray([c__$1.call(null,z),v__$1.call(null,z)], true));
{
var G__18483 = (i__18444 + 1);
i__18444 = G__18483;
continue;
}
} else
{{
var G__18484 = (i__18444 + 1);
i__18444 = G__18484;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18445),iter__18442.call(null,cljs.core.chunk_rest.call(null,s__18443__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18445),null);
}
} else
{var z = cljs.core.first.call(null,s__18443__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([c__$1.call(null,z),v__$1.call(null,z)], true),iter__18442.call(null,cljs.core.rest.call(null,s__18443__$2)));
} else
{{
var G__18485 = cljs.core.rest.call(null,s__18443__$2);
s__18443__$1 = G__18485;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__18432,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8322__auto__,size__8323__auto__,b__18433,s__18431__$2,temp__4092__auto__))
,null,null));
});})(i__18432,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8322__auto__,size__8323__auto__,b__18433,s__18431__$2,temp__4092__auto__))
;return iter__8324__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + 1)));
})());
})());
{
var G__18486 = (i__18432 + 1);
i__18432 = G__18486;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18433),iter__18430.call(null,cljs.core.chunk_rest.call(null,s__18431__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18433),null);
}
} else
{var y = cljs.core.first.call(null,s__18431__$2);return cljs.core.cons.call(null,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + 1)) - 1);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8324__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__18431__$2,temp__4092__auto__){
return (function iter__18446(s__18447){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__18431__$2,temp__4092__auto__){
return (function (){var s__18447__$1 = s__18447;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__18447__$1);if(temp__4092__auto____$1)
{var s__18447__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__18447__$2))
{var c__8322__auto__ = cljs.core.chunk_first.call(null,s__18447__$2);var size__8323__auto__ = cljs.core.count.call(null,c__8322__auto__);var b__18449 = cljs.core.chunk_buffer.call(null,size__8323__auto__);if((function (){var i__18448 = 0;while(true){
if((i__18448 < size__8323__auto__))
{var z = cljs.core._nth.call(null,c__8322__auto__,i__18448);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{cljs.core.chunk_append.call(null,b__18449,cljs.core.PersistentVector.fromArray([c__$1.call(null,z),v__$1.call(null,z)], true));
{
var G__18487 = (i__18448 + 1);
i__18448 = G__18487;
continue;
}
} else
{{
var G__18488 = (i__18448 + 1);
i__18448 = G__18488;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18449),iter__18446.call(null,cljs.core.chunk_rest.call(null,s__18447__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18449),null);
}
} else
{var z = cljs.core.first.call(null,s__18447__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([c__$1.call(null,z),v__$1.call(null,z)], true),iter__18446.call(null,cljs.core.rest.call(null,s__18447__$2)));
} else
{{
var G__18489 = cljs.core.rest.call(null,s__18447__$2);
s__18447__$1 = G__18489;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__18431__$2,temp__4092__auto__))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__18431__$2,temp__4092__auto__))
;return iter__8324__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + 1)));
})());
})(),iter__18430.call(null,cljs.core.rest.call(null,s__18431__$2)));
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s))
;return iter__8324__auto__.call(null,cljs.core.range.call(null,(l + 1)));
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
var G__18498 = (j - 1);
j = G__18498;
continue;
}
}
break;
}
})();if(cljs.core.truth_((function (){var and__7629__auto__ = r;if(cljs.core.truth_(and__7629__auto__))
{return (cljs.core._EQ_.call(null,j,a)) && ((((v.call(null,j) - 1) * (r - l)) < u.call(null,j)));
} else
{return and__7629__auto__;
}
})()))
{return foundation.app.data.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s);
} else
{if((cljs.core._EQ_.call(null,j,a)) && (cljs.core._EQ_.call(null,v.call(null,j),1)))
{return foundation.app.data.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var v__$1 = foundation.app.data.combinatorics.update.call(null,v,j,cljs.core.dec);var diff_uv = (cljs.core.truth_(s)?cljs.core.apply.call(null,cljs.core._PLUS_,(function (){var iter__8324__auto__ = ((function (v__$1){
return (function iter__18494(s__18495){return (new cljs.core.LazySeq(null,((function (v__$1){
return (function (){var s__18495__$1 = s__18495;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__18495__$1);if(temp__4092__auto__)
{var s__18495__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18495__$2))
{var c__8322__auto__ = cljs.core.chunk_first.call(null,s__18495__$2);var size__8323__auto__ = cljs.core.count.call(null,c__8322__auto__);var b__18497 = cljs.core.chunk_buffer.call(null,size__8323__auto__);if((function (){var i__18496 = 0;while(true){
if((i__18496 < size__8323__auto__))
{var i = cljs.core._nth.call(null,c__8322__auto__,i__18496);cljs.core.chunk_append.call(null,b__18497,(u.call(null,i) - v__$1.call(null,i)));
{
var G__18499 = (i__18496 + 1);
i__18496 = G__18499;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18497),iter__18494.call(null,cljs.core.chunk_rest.call(null,s__18495__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18497),null);
}
} else
{var i = cljs.core.first.call(null,s__18495__$2);return cljs.core.cons.call(null,(u.call(null,i) - v__$1.call(null,i)),iter__18494.call(null,cljs.core.rest.call(null,s__18495__$2)));
}
} else
{return null;
}
break;
}
});})(v__$1))
,null,null));
});})(v__$1))
;return iter__8324__auto__.call(null,cljs.core.range.call(null,a,(j + 1)));
})()):null);var v__$2 = (function (){var ks = cljs.core.range.call(null,(j + 1),b);var v__$2 = v__$1;while(true){
if(cljs.core.empty_QMARK_.call(null,ks))
{return v__$2;
} else
{var k = cljs.core.first.call(null,ks);{
var G__18500 = cljs.core.rest.call(null,ks);
var G__18501 = cljs.core.assoc.call(null,v__$2,k,u.call(null,k));
ks = G__18500;
v__$2 = G__18501;
continue;
}
}
break;
}
})();var min_partitions_after_this = (cljs.core.truth_(s)?(s - (l + 1)):0);var amount_to_dec = (cljs.core.truth_(s)?(function (){var x__7943__auto__ = 0;var y__7944__auto__ = (min_partitions_after_this - diff_uv);return ((x__7943__auto__ > y__7944__auto__) ? x__7943__auto__ : y__7944__auto__);
})():0);var v__$3 = ((cljs.core._EQ_.call(null,amount_to_dec,0))?v__$2:(function (){var k_1 = (b - 1);var v__$3 = v__$2;var amount = amount_to_dec;while(true){
var vk = v__$3.call(null,k_1);if((amount > vk))
{{
var G__18502 = (k_1 - 1);
var G__18503 = cljs.core.assoc.call(null,v__$3,k_1,0);
var G__18504 = (amount - vk);
k_1 = G__18502;
v__$3 = G__18503;
amount = G__18504;
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
var partitions_M__delegate = function (items,p__18505){var map__18563 = p__18505;var map__18563__$1 = ((cljs.core.seq_QMARK_.call(null,map__18563))?cljs.core.apply.call(null,cljs.core.hash_map,map__18563):map__18563);var from = cljs.core.get.call(null,map__18563__$1,new cljs.core.Keyword(null,"min","min",1014012356));var to = cljs.core.get.call(null,map__18563__$1,new cljs.core.Keyword(null,"max","max",1014012118));if(cljs.core._EQ_.call(null,cljs.core.count.call(null,items),0))
{if((((function (){var or__7638__auto__ = from;if(cljs.core.truth_(or__7638__auto__))
{return or__7638__auto__;
} else
{return 0;
}
})() <= 0)) && ((0 <= (function (){var or__7638__auto__ = to;if(cljs.core.truth_(or__7638__auto__))
{return or__7638__auto__;
} else
{return 0;
}
})())))
{return cljs.core.list(cljs.core.List.EMPTY);
} else
{return cljs.core.List.EMPTY;
}
} else
{var items__$1 = cljs.core.vec.call(null,items);var ditems = cljs.core.vec.call(null,cljs.core.distinct.call(null,items__$1));var freqs = cljs.core.frequencies.call(null,items__$1);var N = cljs.core.count.call(null,items__$1);var M = cljs.core.count.call(null,ditems);var from__$1 = (cljs.core.truth_((function (){var and__7629__auto__ = from;if(cljs.core.truth_(and__7629__auto__))
{return (from <= 1);
} else
{return and__7629__auto__;
}
})())?null:from);var to__$1 = (cljs.core.truth_((function (){var and__7629__auto__ = to;if(cljs.core.truth_(and__7629__auto__))
{return (to >= N);
} else
{return and__7629__auto__;
}
})())?null:to);if(!(((1 <= (function (){var or__7638__auto__ = from__$1;if(cljs.core.truth_(or__7638__auto__))
{return or__7638__auto__;
} else
{return 1;
}
})())) && ((((function (){var or__7638__auto__ = from__$1;if(cljs.core.truth_(or__7638__auto__))
{return or__7638__auto__;
} else
{return 1;
}
})() <= (function (){var or__7638__auto__ = to__$1;if(cljs.core.truth_(or__7638__auto__))
{return or__7638__auto__;
} else
{return N;
}
})())) && (((function (){var or__7638__auto__ = to__$1;if(cljs.core.truth_(or__7638__auto__))
{return or__7638__auto__;
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
{var start_multiset = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8324__auto__ = (function iter__18564(s__18565){return (new cljs.core.LazySeq(null,(function (){var s__18565__$1 = s__18565;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__18565__$1);if(temp__4092__auto__)
{var s__18565__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18565__$2))
{var c__8322__auto__ = cljs.core.chunk_first.call(null,s__18565__$2);var size__8323__auto__ = cljs.core.count.call(null,c__8322__auto__);var b__18567 = cljs.core.chunk_buffer.call(null,size__8323__auto__);if((function (){var i__18566 = 0;while(true){
if((i__18566 < size__8323__auto__))
{var i = cljs.core._nth.call(null,c__8322__auto__,i__18566);var j = (i + 1);cljs.core.chunk_append.call(null,b__18567,cljs.core.PersistentVector.fromArray([j,freqs.call(null,ditems.call(null,i))], true));
{
var G__18620 = (i__18566 + 1);
i__18566 = G__18620;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18567),iter__18564.call(null,cljs.core.chunk_rest.call(null,s__18565__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18567),null);
}
} else
{var i = cljs.core.first.call(null,s__18565__$2);var j = (i + 1);return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([j,freqs.call(null,ditems.call(null,i))], true),iter__18564.call(null,cljs.core.rest.call(null,s__18565__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8324__auto__.call(null,cljs.core.range.call(null,M));
})());var parts = foundation.app.data.combinatorics.multiset_partitions_M.call(null,start_multiset,to__$1,from__$1);var iter__8324__auto__ = (function iter__18568(s__18569){return (new cljs.core.LazySeq(null,(function (){var s__18569__$1 = s__18569;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__18569__$1);if(temp__4092__auto__)
{var s__18569__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18569__$2))
{var c__8322__auto__ = cljs.core.chunk_first.call(null,s__18569__$2);var size__8323__auto__ = cljs.core.count.call(null,c__8322__auto__);var b__18571 = cljs.core.chunk_buffer.call(null,size__8323__auto__);if((function (){var i__18570 = 0;while(true){
if((i__18570 < size__8323__auto__))
{var part = cljs.core._nth.call(null,c__8322__auto__,i__18570);cljs.core.chunk_append.call(null,b__18571,(function (){var iter__8324__auto__ = ((function (i__18570,part,c__8322__auto__,size__8323__auto__,b__18571,s__18569__$2,temp__4092__auto__){
return (function iter__18596(s__18597){return (new cljs.core.LazySeq(null,((function (i__18570,part,c__8322__auto__,size__8323__auto__,b__18571,s__18569__$2,temp__4092__auto__){
return (function (){var s__18597__$1 = s__18597;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__18597__$1);if(temp__4092__auto____$1)
{var s__18597__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__18597__$2))
{var c__8322__auto____$1 = cljs.core.chunk_first.call(null,s__18597__$2);var size__8323__auto____$1 = cljs.core.count.call(null,c__8322__auto____$1);var b__18599 = cljs.core.chunk_buffer.call(null,size__8323__auto____$1);if((function (){var i__18598 = 0;while(true){
if((i__18598 < size__8323__auto____$1))
{var multiset = cljs.core._nth.call(null,c__8322__auto____$1,i__18598);cljs.core.chunk_append.call(null,b__18599,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__18598,i__18570,multiset,c__8322__auto____$1,size__8323__auto____$1,b__18599,s__18597__$2,temp__4092__auto____$1,part,c__8322__auto__,size__8323__auto__,b__18571,s__18569__$2,temp__4092__auto__){
return (function (p__18604){var vec__18605 = p__18604;var index = cljs.core.nth.call(null,vec__18605,0,null);var numtimes = cljs.core.nth.call(null,vec__18605,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__18598,i__18570,multiset,c__8322__auto____$1,size__8323__auto____$1,b__18599,s__18597__$2,temp__4092__auto____$1,part,c__8322__auto__,size__8323__auto__,b__18571,s__18569__$2,temp__4092__auto__))
,multiset)));
{
var G__18621 = (i__18598 + 1);
i__18598 = G__18621;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18599),iter__18596.call(null,cljs.core.chunk_rest.call(null,s__18597__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18599),null);
}
} else
{var multiset = cljs.core.first.call(null,s__18597__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__18570,multiset,s__18597__$2,temp__4092__auto____$1,part,c__8322__auto__,size__8323__auto__,b__18571,s__18569__$2,temp__4092__auto__){
return (function (p__18606){var vec__18607 = p__18606;var index = cljs.core.nth.call(null,vec__18607,0,null);var numtimes = cljs.core.nth.call(null,vec__18607,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__18570,multiset,s__18597__$2,temp__4092__auto____$1,part,c__8322__auto__,size__8323__auto__,b__18571,s__18569__$2,temp__4092__auto__))
,multiset)),iter__18596.call(null,cljs.core.rest.call(null,s__18597__$2)));
}
} else
{return null;
}
break;
}
});})(i__18570,part,c__8322__auto__,size__8323__auto__,b__18571,s__18569__$2,temp__4092__auto__))
,null,null));
});})(i__18570,part,c__8322__auto__,size__8323__auto__,b__18571,s__18569__$2,temp__4092__auto__))
;return iter__8324__auto__.call(null,part);
})());
{
var G__18622 = (i__18570 + 1);
i__18570 = G__18622;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18571),iter__18568.call(null,cljs.core.chunk_rest.call(null,s__18569__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18571),null);
}
} else
{var part = cljs.core.first.call(null,s__18569__$2);return cljs.core.cons.call(null,(function (){var iter__8324__auto__ = ((function (part,s__18569__$2,temp__4092__auto__){
return (function iter__18608(s__18609){return (new cljs.core.LazySeq(null,((function (part,s__18569__$2,temp__4092__auto__){
return (function (){var s__18609__$1 = s__18609;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__18609__$1);if(temp__4092__auto____$1)
{var s__18609__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__18609__$2))
{var c__8322__auto__ = cljs.core.chunk_first.call(null,s__18609__$2);var size__8323__auto__ = cljs.core.count.call(null,c__8322__auto__);var b__18611 = cljs.core.chunk_buffer.call(null,size__8323__auto__);if((function (){var i__18610 = 0;while(true){
if((i__18610 < size__8323__auto__))
{var multiset = cljs.core._nth.call(null,c__8322__auto__,i__18610);cljs.core.chunk_append.call(null,b__18611,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__18610,multiset,c__8322__auto__,size__8323__auto__,b__18611,s__18609__$2,temp__4092__auto____$1,part,s__18569__$2,temp__4092__auto__){
return (function (p__18616){var vec__18617 = p__18616;var index = cljs.core.nth.call(null,vec__18617,0,null);var numtimes = cljs.core.nth.call(null,vec__18617,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__18610,multiset,c__8322__auto__,size__8323__auto__,b__18611,s__18609__$2,temp__4092__auto____$1,part,s__18569__$2,temp__4092__auto__))
,multiset)));
{
var G__18623 = (i__18610 + 1);
i__18610 = G__18623;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18611),iter__18608.call(null,cljs.core.chunk_rest.call(null,s__18609__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18611),null);
}
} else
{var multiset = cljs.core.first.call(null,s__18609__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (multiset,s__18609__$2,temp__4092__auto____$1,part,s__18569__$2,temp__4092__auto__){
return (function (p__18618){var vec__18619 = p__18618;var index = cljs.core.nth.call(null,vec__18619,0,null);var numtimes = cljs.core.nth.call(null,vec__18619,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(multiset,s__18609__$2,temp__4092__auto____$1,part,s__18569__$2,temp__4092__auto__))
,multiset)),iter__18608.call(null,cljs.core.rest.call(null,s__18609__$2)));
}
} else
{return null;
}
break;
}
});})(part,s__18569__$2,temp__4092__auto__))
,null,null));
});})(part,s__18569__$2,temp__4092__auto__))
;return iter__8324__auto__.call(null,part);
})(),iter__18568.call(null,cljs.core.rest.call(null,s__18569__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8324__auto__.call(null,parts);
} else
{return null;
}
}
}
}
};
var partitions_M = function (items,var_args){
var p__18505 = null;if (arguments.length > 1) {
  p__18505 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions_M__delegate.call(this,items,p__18505);};
partitions_M.cljs$lang$maxFixedArity = 1;
partitions_M.cljs$lang$applyTo = (function (arglist__18624){
var items = cljs.core.first(arglist__18624);
var p__18505 = cljs.core.rest(arglist__18624);
return partitions_M__delegate(items,p__18505);
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
partitions.cljs$lang$applyTo = (function (arglist__18625){
var items = cljs.core.first(arglist__18625);
var args = cljs.core.rest(arglist__18625);
return partitions__delegate(items,args);
});
partitions.cljs$core$IFn$_invoke$arity$variadic = partitions__delegate;
return partitions;
})()
;
