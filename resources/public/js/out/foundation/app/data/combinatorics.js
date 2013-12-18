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
var G__10416 = cljs.core.assoc.call(null,c__$2,(j__$1 - 1),(c__$2.call(null,j__$1) - 1));
var G__10417 = (j__$1 - 1);
c__$2 = G__10416;
j__$1 = G__10417;
continue;
}
}
break;
}
}
}
});
return (new cljs.core.LazySeq(null,(function (){var c = cljs.core.vec.call(null,cljs.core.cons.call(null,null,(function (){var iter__8921__auto__ = (function iter__10412(s__10413){return (new cljs.core.LazySeq(null,(function (){var s__10413__$1 = s__10413;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10413__$1);if(temp__4092__auto__)
{var s__10413__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10413__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__10413__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__10415 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__10414 = 0;while(true){
if((i__10414 < size__8920__auto__))
{var j = cljs.core._nth.call(null,c__8919__auto__,i__10414);cljs.core.chunk_append.call(null,b__10415,((j + cnt) + (- (n + 1))));
{
var G__10418 = (i__10414 + 1);
i__10414 = G__10418;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10415),iter__10412.call(null,cljs.core.chunk_rest.call(null,s__10413__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10415),null);
}
} else
{var j = cljs.core.first.call(null,s__10413__$2);return cljs.core.cons.call(null,((j + cnt) + (- (n + 1))),iter__10412.call(null,cljs.core.rest.call(null,s__10413__$2)));
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
{return cljs.core.map.call(null,(function (p1__10419_SHARP_){return cljs.core.map.call(null,v_items,p1__10419_SHARP_);
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
var G__10420 = (i - 1);
var G__10421 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__10420;
v_seqs__$2 = G__10421;
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
cartesian_product.cljs$lang$applyTo = (function (arglist__10422){
var seqs = cljs.core.seq(arglist__10422);
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
var G__10423 = (i - 1);
i = G__10423;
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
var G__10424 = (i - 1);
i = G__10424;
continue;
}
}
break;
}
})();var v__$1 = cljs.core.assoc.call(null,v,j,v.call(null,l),l,vj);var k = (j + 1);var l__$1 = (len - 1);while(true){
if((k < l__$1))
{{
var G__10425 = cljs.core.assoc.call(null,v__$1,k,v__$1.call(null,l__$1),l__$1,v__$1.call(null,k));
var G__10426 = (k + 1);
var G__10427 = (l__$1 - 1);
v__$1 = G__10425;
k = G__10426;
l__$1 = G__10427;
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
return (function iter__10432(s__10433){return (new cljs.core.LazySeq(null,((function (f,v){
return (function (){var s__10433__$1 = s__10433;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10433__$1);if(temp__4092__auto__)
{var s__10433__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10433__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__10433__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__10435 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__10434 = 0;while(true){
if((i__10434 < size__8920__auto__))
{var i = cljs.core._nth.call(null,c__8919__auto__,i__10434);cljs.core.chunk_append.call(null,b__10435,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));
{
var G__10436 = (i__10434 + 1);
i__10434 = G__10436;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10435),iter__10432.call(null,cljs.core.chunk_rest.call(null,s__10433__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10435),null);
}
} else
{var i = cljs.core.first.call(null,s__10433__$2);return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),iter__10432.call(null,cljs.core.rest.call(null,s__10433__$2)));
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
{var v = cljs.core.vec.call(null,items);return cljs.core.map.call(null,(function (p1__10437_SHARP_){return cljs.core.map.call(null,v,p1__10437_SHARP_);
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
{return cljs.core.vec.call(null,(function (){var iter__8921__auto__ = (function iter__10442(s__10443){return (new cljs.core.LazySeq(null,(function (){var s__10443__$1 = s__10443;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10443__$1);if(temp__4092__auto__)
{var s__10443__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10443__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__10443__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__10445 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__10444 = 0;while(true){
if((i__10444 < size__8920__auto__))
{var i = cljs.core._nth.call(null,c__8919__auto__,i__10444);cljs.core.chunk_append.call(null,b__10445,(function (){var x__8535__auto__ = 0;var y__8536__auto__ = (i - ((n - s) - -1));return ((x__8535__auto__ > y__8536__auto__) ? x__8535__auto__ : y__8536__auto__);
})());
{
var G__10446 = (i__10444 + 1);
i__10444 = G__10446;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10445),iter__10442.call(null,cljs.core.chunk_rest.call(null,s__10443__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10445),null);
}
} else
{var i = cljs.core.first.call(null,s__10443__$2);return cljs.core.cons.call(null,(function (){var x__8535__auto__ = 0;var y__8536__auto__ = (i - ((n - s) - -1));return ((x__8535__auto__ > y__8536__auto__) ? x__8535__auto__ : y__8536__auto__);
})(),iter__10442.call(null,cljs.core.rest.call(null,s__10443__$2)));
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
var G__10449 = (j - 1);
j = G__10449;
continue;
}
}
break;
}
})();if((j === 0))
{return cljs.core.List.EMPTY;
} else
{var a__$1 = foundation.app.data.combinatorics.update.call(null,a,j,cljs.core.inc);var x = (cljs.core.truth_(s)?(s - (b.call(null,j) + ((cljs.core._EQ_.call(null,a__$1.call(null,j),b.call(null,j)))?1:0))):null);var vec__10448 = (function (){var a__$2 = a__$1;var b__$1 = b;var i = (j + 1);var current_max = (b__$1.call(null,j) + (((b__$1.call(null,j) === a__$2.call(null,j)))?1:0));while(true){
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
var G__10450 = cljs.core.assoc.call(null,a__$2,i,new_a_i);
var G__10451 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__10452 = (i + 1);
var G__10453 = (function (){var x__8535__auto__ = current_max;var y__8536__auto__ = (new_a_i + 1);return ((x__8535__auto__ > y__8536__auto__) ? x__8535__auto__ : y__8536__auto__);
})();
a__$2 = G__10450;
b__$1 = G__10451;
i = G__10452;
current_max = G__10453;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__10454 = cljs.core.assoc.call(null,a__$2,i,0);
var G__10455 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__10456 = (i + 1);
var G__10457 = current_max;
a__$2 = G__10454;
b__$1 = G__10455;
i = G__10456;
current_max = G__10457;
continue;
}
} else
{return null;
}
}
}
break;
}
})();var a__$2 = cljs.core.nth.call(null,vec__10448,0,null);var b__$1 = cljs.core.nth.call(null,vec__10448,1,null);return growth_strings_H.call(null,n,a__$2,b__$1,r,s);
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
var lex_partitions_H__delegate = function (N,p__10458){var map__10464 = p__10458;var map__10464__$1 = ((cljs.core.seq_QMARK_.call(null,map__10464))?cljs.core.apply.call(null,cljs.core.hash_map,map__10464):map__10464);var from = cljs.core.get.call(null,map__10464__$1,new cljs.core.Keyword(null,"min","min",1014012356));var to = cljs.core.get.call(null,map__10464__$1,new cljs.core.Keyword(null,"max","max",1014012118));if(cljs.core._EQ_.call(null,N,0))
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
{var growth_strings = foundation.app.data.combinatorics.growth_strings_H.call(null,N,to__$1,from__$1);var iter__8921__auto__ = (function iter__10465(s__10466){return (new cljs.core.LazySeq(null,(function (){var s__10466__$1 = s__10466;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10466__$1);if(temp__4092__auto__)
{var s__10466__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10466__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__10466__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__10468 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__10467 = 0;while(true){
if((i__10467 < size__8920__auto__))
{var growth_string = cljs.core._nth.call(null,c__8919__auto__,i__10467);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));cljs.core.chunk_append.call(null,b__10468,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))));
{
var G__10469 = (i__10467 + 1);
i__10467 = G__10469;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10468),iter__10465.call(null,cljs.core.chunk_rest.call(null,s__10466__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10468),null);
}
} else
{var growth_string = cljs.core.first.call(null,s__10466__$2);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));return cljs.core.cons.call(null,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))),iter__10465.call(null,cljs.core.rest.call(null,s__10466__$2)));
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
var p__10458 = null;if (arguments.length > 1) {
  p__10458 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return lex_partitions_H__delegate.call(this,N,p__10458);};
lex_partitions_H.cljs$lang$maxFixedArity = 1;
lex_partitions_H.cljs$lang$applyTo = (function (arglist__10470){
var N = cljs.core.first(arglist__10470);
var p__10458 = cljs.core.rest(arglist__10470);
return lex_partitions_H__delegate(N,p__10458);
});
lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic = lex_partitions_H__delegate;
return lex_partitions_H;
})()
;
/**
* @param {...*} var_args
*/
foundation.app.data.combinatorics.partitions_H = (function() { 
var partitions_H__delegate = function (items,args){var items__$1 = cljs.core.vec.call(null,items);var N = cljs.core.count.call(null,items__$1);var lex = cljs.core.apply.call(null,foundation.app.data.combinatorics.lex_partitions_H,N,args);var iter__8921__auto__ = (function iter__10491(s__10492){return (new cljs.core.LazySeq(null,(function (){var s__10492__$1 = s__10492;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10492__$1);if(temp__4092__auto__)
{var s__10492__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10492__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__10492__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__10494 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__10493 = 0;while(true){
if((i__10493 < size__8920__auto__))
{var parts = cljs.core._nth.call(null,c__8919__auto__,i__10493);cljs.core.chunk_append.call(null,b__10494,(function (){var iter__8921__auto__ = ((function (i__10493,parts,c__8919__auto__,size__8920__auto__,b__10494,s__10492__$2,temp__4092__auto__){
return (function iter__10503(s__10504){return (new cljs.core.LazySeq(null,((function (i__10493,parts,c__8919__auto__,size__8920__auto__,b__10494,s__10492__$2,temp__4092__auto__){
return (function (){var s__10504__$1 = s__10504;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__10504__$1);if(temp__4092__auto____$1)
{var s__10504__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__10504__$2))
{var c__8919__auto____$1 = cljs.core.chunk_first.call(null,s__10504__$2);var size__8920__auto____$1 = cljs.core.count.call(null,c__8919__auto____$1);var b__10506 = cljs.core.chunk_buffer.call(null,size__8920__auto____$1);if((function (){var i__10505 = 0;while(true){
if((i__10505 < size__8920__auto____$1))
{var part = cljs.core._nth.call(null,c__8919__auto____$1,i__10505);cljs.core.chunk_append.call(null,b__10506,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__10505,i__10493,part,c__8919__auto____$1,size__8920__auto____$1,b__10506,s__10504__$2,temp__4092__auto____$1,parts,c__8919__auto__,size__8920__auto__,b__10494,s__10492__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__10505,i__10493,part,c__8919__auto____$1,size__8920__auto____$1,b__10506,s__10504__$2,temp__4092__auto____$1,parts,c__8919__auto__,size__8920__auto__,b__10494,s__10492__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__10511 = (i__10505 + 1);
i__10505 = G__10511;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10506),iter__10503.call(null,cljs.core.chunk_rest.call(null,s__10504__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10506),null);
}
} else
{var part = cljs.core.first.call(null,s__10504__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__10493,part,s__10504__$2,temp__4092__auto____$1,parts,c__8919__auto__,size__8920__auto__,b__10494,s__10492__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__10493,part,s__10504__$2,temp__4092__auto____$1,parts,c__8919__auto__,size__8920__auto__,b__10494,s__10492__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__10503.call(null,cljs.core.rest.call(null,s__10504__$2)));
}
} else
{return null;
}
break;
}
});})(i__10493,parts,c__8919__auto__,size__8920__auto__,b__10494,s__10492__$2,temp__4092__auto__))
,null,null));
});})(i__10493,parts,c__8919__auto__,size__8920__auto__,b__10494,s__10492__$2,temp__4092__auto__))
;return iter__8921__auto__.call(null,parts);
})());
{
var G__10512 = (i__10493 + 1);
i__10493 = G__10512;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10494),iter__10491.call(null,cljs.core.chunk_rest.call(null,s__10492__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10494),null);
}
} else
{var parts = cljs.core.first.call(null,s__10492__$2);return cljs.core.cons.call(null,(function (){var iter__8921__auto__ = ((function (parts,s__10492__$2,temp__4092__auto__){
return (function iter__10507(s__10508){return (new cljs.core.LazySeq(null,((function (parts,s__10492__$2,temp__4092__auto__){
return (function (){var s__10508__$1 = s__10508;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__10508__$1);if(temp__4092__auto____$1)
{var s__10508__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__10508__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__10508__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__10510 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__10509 = 0;while(true){
if((i__10509 < size__8920__auto__))
{var part = cljs.core._nth.call(null,c__8919__auto__,i__10509);cljs.core.chunk_append.call(null,b__10510,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__10509,part,c__8919__auto__,size__8920__auto__,b__10510,s__10508__$2,temp__4092__auto____$1,parts,s__10492__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__10509,part,c__8919__auto__,size__8920__auto__,b__10510,s__10508__$2,temp__4092__auto____$1,parts,s__10492__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__10513 = (i__10509 + 1);
i__10509 = G__10513;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10510),iter__10507.call(null,cljs.core.chunk_rest.call(null,s__10508__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10510),null);
}
} else
{var part = cljs.core.first.call(null,s__10508__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (part,s__10508__$2,temp__4092__auto____$1,parts,s__10492__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(part,s__10508__$2,temp__4092__auto____$1,parts,s__10492__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__10507.call(null,cljs.core.rest.call(null,s__10508__$2)));
}
} else
{return null;
}
break;
}
});})(parts,s__10492__$2,temp__4092__auto__))
,null,null));
});})(parts,s__10492__$2,temp__4092__auto__))
;return iter__8921__auto__.call(null,parts);
})(),iter__10491.call(null,cljs.core.rest.call(null,s__10492__$2)));
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
partitions_H.cljs$lang$applyTo = (function (arglist__10514){
var items = cljs.core.first(arglist__10514);
var args = cljs.core.rest(arglist__10514);
return partitions_H__delegate(items,args);
});
partitions_H.cljs$core$IFn$_invoke$arity$variadic = partitions_H__delegate;
return partitions_H;
})()
;
foundation.app.data.combinatorics.multiset_partitions_M = (function() {
var multiset_partitions_M = null;
var multiset_partitions_M__3 = (function (multiset,r,s){var n = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,multiset));var m = cljs.core.count.call(null,multiset);var f = cljs.core.PersistentVector.EMPTY;var c = cljs.core.PersistentVector.EMPTY;var u = cljs.core.PersistentVector.EMPTY;var v = cljs.core.PersistentVector.EMPTY;var vec__10537 = (function (){var j = 0;var c__$1 = c;var u__$1 = u;var v__$1 = v;while(true){
if(cljs.core._EQ_.call(null,j,m))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,u__$1,v__$1], null);
} else
{{
var G__10559 = (j + 1);
var G__10560 = cljs.core.assoc.call(null,c__$1,j,(j + 1));
var G__10561 = cljs.core.assoc.call(null,u__$1,j,multiset.call(null,(j + 1)));
var G__10562 = cljs.core.assoc.call(null,v__$1,j,multiset.call(null,(j + 1)));
j = G__10559;
c__$1 = G__10560;
u__$1 = G__10561;
v__$1 = G__10562;
continue;
}
}
break;
}
})();var c__$1 = cljs.core.nth.call(null,vec__10537,0,null);var u__$1 = cljs.core.nth.call(null,vec__10537,1,null);var v__$1 = cljs.core.nth.call(null,vec__10537,2,null);var a = 0;var b = m;var l = 0;var f__$1 = cljs.core.assoc.call(null,f,0,0,1,m);var stack = cljs.core.List.EMPTY;return multiset_partitions_M.call(null,n,m,f__$1,c__$1,u__$1,v__$1,a,b,l,r,s);
});
var multiset_partitions_M__11 = (function (n,m,f,c,u,v,a,b,l,r,s){while(true){
var vec__10538 = (function (){var j = a;var k = b;var x = false;var u__$1 = u;var v__$1 = v;var c__$1 = c;while(true){
if((j >= b))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [u__$1,v__$1,c__$1,j,k], null);
} else
{var u__$2 = cljs.core.assoc.call(null,u__$1,k,(u__$1.call(null,j) - v__$1.call(null,j)));if(cljs.core._EQ_.call(null,u__$2.call(null,k),0))
{{
var G__10563 = (j + 1);
var G__10564 = k;
var G__10565 = true;
var G__10566 = u__$2;
var G__10567 = v__$1;
var G__10568 = c__$1;
j = G__10563;
k = G__10564;
x = G__10565;
u__$1 = G__10566;
v__$1 = G__10567;
c__$1 = G__10568;
continue;
}
} else
{if(!(x))
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,(function (){var x__8542__auto__ = v__$1.call(null,j);var y__8543__auto__ = u__$2.call(null,k);return ((x__8542__auto__ < y__8543__auto__) ? x__8542__auto__ : y__8543__auto__);
})());var x__$1 = (u__$2.call(null,k) < v__$2.call(null,j));var k__$1 = (k + 1);var j__$1 = (j + 1);{
var G__10569 = j__$1;
var G__10570 = k__$1;
var G__10571 = x__$1;
var G__10572 = u__$2;
var G__10573 = v__$2;
var G__10574 = c__$2;
j = G__10569;
k = G__10570;
x = G__10571;
u__$1 = G__10572;
v__$1 = G__10573;
c__$1 = G__10574;
continue;
}
} else
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,u__$2.call(null,k));var k__$1 = (k + 1);var j__$1 = (j + 1);{
var G__10575 = j__$1;
var G__10576 = k__$1;
var G__10577 = x;
var G__10578 = u__$2;
var G__10579 = v__$2;
var G__10580 = c__$2;
j = G__10575;
k = G__10576;
x = G__10577;
u__$1 = G__10578;
v__$1 = G__10579;
c__$1 = G__10580;
continue;
}
}
}
}
break;
}
})();var u__$1 = cljs.core.nth.call(null,vec__10538,0,null);var v__$1 = cljs.core.nth.call(null,vec__10538,1,null);var c__$1 = cljs.core.nth.call(null,vec__10538,2,null);var j = cljs.core.nth.call(null,vec__10538,3,null);var k = cljs.core.nth.call(null,vec__10538,4,null);if(cljs.core.truth_((function (){var and__8211__auto__ = r;if(cljs.core.truth_(and__8211__auto__))
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
var G__10581 = n;
var G__10582 = m;
var G__10583 = f__$1;
var G__10584 = c__$1;
var G__10585 = u__$1;
var G__10586 = v__$1;
var G__10587 = a__$1;
var G__10588 = b__$1;
var G__10589 = l__$1;
var G__10590 = r;
var G__10591 = s;
n = G__10581;
m = G__10582;
f = G__10583;
c = G__10584;
u = G__10585;
v = G__10586;
a = G__10587;
b = G__10588;
l = G__10589;
r = G__10590;
s = G__10591;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var part = (function (){var iter__8921__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s){
return (function iter__10539(s__10540){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s){
return (function (){var s__10540__$1 = s__10540;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10540__$1);if(temp__4092__auto__)
{var s__10540__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10540__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__10540__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__10542 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__10541 = 0;while(true){
if((i__10541 < size__8920__auto__))
{var y = cljs.core._nth.call(null,c__8919__auto__,i__10541);cljs.core.chunk_append.call(null,b__10542,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + 1)) - 1);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8921__auto__ = ((function (i__10541,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8919__auto__,size__8920__auto__,b__10542,s__10540__$2,temp__4092__auto__){
return (function iter__10551(s__10552){return (new cljs.core.LazySeq(null,((function (i__10541,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8919__auto__,size__8920__auto__,b__10542,s__10540__$2,temp__4092__auto__){
return (function (){var s__10552__$1 = s__10552;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__10552__$1);if(temp__4092__auto____$1)
{var s__10552__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__10552__$2))
{var c__8919__auto____$1 = cljs.core.chunk_first.call(null,s__10552__$2);var size__8920__auto____$1 = cljs.core.count.call(null,c__8919__auto____$1);var b__10554 = cljs.core.chunk_buffer.call(null,size__8920__auto____$1);if((function (){var i__10553 = 0;while(true){
if((i__10553 < size__8920__auto____$1))
{var z = cljs.core._nth.call(null,c__8919__auto____$1,i__10553);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{cljs.core.chunk_append.call(null,b__10554,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));
{
var G__10592 = (i__10553 + 1);
i__10553 = G__10592;
continue;
}
} else
{{
var G__10593 = (i__10553 + 1);
i__10553 = G__10593;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10554),iter__10551.call(null,cljs.core.chunk_rest.call(null,s__10552__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10554),null);
}
} else
{var z = cljs.core.first.call(null,s__10552__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),iter__10551.call(null,cljs.core.rest.call(null,s__10552__$2)));
} else
{{
var G__10594 = cljs.core.rest.call(null,s__10552__$2);
s__10552__$1 = G__10594;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__10541,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8919__auto__,size__8920__auto__,b__10542,s__10540__$2,temp__4092__auto__))
,null,null));
});})(i__10541,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8919__auto__,size__8920__auto__,b__10542,s__10540__$2,temp__4092__auto__))
;return iter__8921__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + 1)));
})());
})());
{
var G__10595 = (i__10541 + 1);
i__10541 = G__10595;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10542),iter__10539.call(null,cljs.core.chunk_rest.call(null,s__10540__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10542),null);
}
} else
{var y = cljs.core.first.call(null,s__10540__$2);return cljs.core.cons.call(null,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + 1)) - 1);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8921__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__10540__$2,temp__4092__auto__){
return (function iter__10555(s__10556){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__10540__$2,temp__4092__auto__){
return (function (){var s__10556__$1 = s__10556;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__10556__$1);if(temp__4092__auto____$1)
{var s__10556__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__10556__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__10556__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__10558 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__10557 = 0;while(true){
if((i__10557 < size__8920__auto__))
{var z = cljs.core._nth.call(null,c__8919__auto__,i__10557);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{cljs.core.chunk_append.call(null,b__10558,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));
{
var G__10596 = (i__10557 + 1);
i__10557 = G__10596;
continue;
}
} else
{{
var G__10597 = (i__10557 + 1);
i__10557 = G__10597;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10558),iter__10555.call(null,cljs.core.chunk_rest.call(null,s__10556__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10558),null);
}
} else
{var z = cljs.core.first.call(null,s__10556__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),iter__10555.call(null,cljs.core.rest.call(null,s__10556__$2)));
} else
{{
var G__10598 = cljs.core.rest.call(null,s__10556__$2);
s__10556__$1 = G__10598;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__10540__$2,temp__4092__auto__))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__10540__$2,temp__4092__auto__))
;return iter__8921__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + 1)));
})());
})(),iter__10539.call(null,cljs.core.rest.call(null,s__10540__$2)));
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
var G__10607 = (j - 1);
j = G__10607;
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
return (function iter__10603(s__10604){return (new cljs.core.LazySeq(null,((function (v__$1){
return (function (){var s__10604__$1 = s__10604;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10604__$1);if(temp__4092__auto__)
{var s__10604__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10604__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__10604__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__10606 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__10605 = 0;while(true){
if((i__10605 < size__8920__auto__))
{var i = cljs.core._nth.call(null,c__8919__auto__,i__10605);cljs.core.chunk_append.call(null,b__10606,(u.call(null,i) - v__$1.call(null,i)));
{
var G__10608 = (i__10605 + 1);
i__10605 = G__10608;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10606),iter__10603.call(null,cljs.core.chunk_rest.call(null,s__10604__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10606),null);
}
} else
{var i = cljs.core.first.call(null,s__10604__$2);return cljs.core.cons.call(null,(u.call(null,i) - v__$1.call(null,i)),iter__10603.call(null,cljs.core.rest.call(null,s__10604__$2)));
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
var G__10609 = cljs.core.rest.call(null,ks);
var G__10610 = cljs.core.assoc.call(null,v__$2,k,u.call(null,k));
ks = G__10609;
v__$2 = G__10610;
continue;
}
}
break;
}
})();var min_partitions_after_this = (cljs.core.truth_(s)?(s - (l + 1)):0);var amount_to_dec = (cljs.core.truth_(s)?(function (){var x__8535__auto__ = 0;var y__8536__auto__ = (min_partitions_after_this - diff_uv);return ((x__8535__auto__ > y__8536__auto__) ? x__8535__auto__ : y__8536__auto__);
})():0);var v__$3 = ((cljs.core._EQ_.call(null,amount_to_dec,0))?v__$2:(function (){var k_1 = (b - 1);var v__$3 = v__$2;var amount = amount_to_dec;while(true){
var vk = v__$3.call(null,k_1);if((amount > vk))
{{
var G__10611 = (k_1 - 1);
var G__10612 = cljs.core.assoc.call(null,v__$3,k_1,0);
var G__10613 = (amount - vk);
k_1 = G__10611;
v__$3 = G__10612;
amount = G__10613;
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
var partitions_M__delegate = function (items,p__10614){var map__10672 = p__10614;var map__10672__$1 = ((cljs.core.seq_QMARK_.call(null,map__10672))?cljs.core.apply.call(null,cljs.core.hash_map,map__10672):map__10672);var from = cljs.core.get.call(null,map__10672__$1,new cljs.core.Keyword(null,"min","min",1014012356));var to = cljs.core.get.call(null,map__10672__$1,new cljs.core.Keyword(null,"max","max",1014012118));if(cljs.core._EQ_.call(null,cljs.core.count.call(null,items),0))
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
{var start_multiset = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8921__auto__ = (function iter__10673(s__10674){return (new cljs.core.LazySeq(null,(function (){var s__10674__$1 = s__10674;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10674__$1);if(temp__4092__auto__)
{var s__10674__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10674__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__10674__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__10676 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__10675 = 0;while(true){
if((i__10675 < size__8920__auto__))
{var i = cljs.core._nth.call(null,c__8919__auto__,i__10675);var j = (i + 1);cljs.core.chunk_append.call(null,b__10676,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null));
{
var G__10729 = (i__10675 + 1);
i__10675 = G__10729;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10676),iter__10673.call(null,cljs.core.chunk_rest.call(null,s__10674__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10676),null);
}
} else
{var i = cljs.core.first.call(null,s__10674__$2);var j = (i + 1);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null),iter__10673.call(null,cljs.core.rest.call(null,s__10674__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,cljs.core.range.call(null,M));
})());var parts = foundation.app.data.combinatorics.multiset_partitions_M.call(null,start_multiset,to__$1,from__$1);var iter__8921__auto__ = (function iter__10677(s__10678){return (new cljs.core.LazySeq(null,(function (){var s__10678__$1 = s__10678;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10678__$1);if(temp__4092__auto__)
{var s__10678__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10678__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__10678__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__10680 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__10679 = 0;while(true){
if((i__10679 < size__8920__auto__))
{var part = cljs.core._nth.call(null,c__8919__auto__,i__10679);cljs.core.chunk_append.call(null,b__10680,(function (){var iter__8921__auto__ = ((function (i__10679,part,c__8919__auto__,size__8920__auto__,b__10680,s__10678__$2,temp__4092__auto__){
return (function iter__10705(s__10706){return (new cljs.core.LazySeq(null,((function (i__10679,part,c__8919__auto__,size__8920__auto__,b__10680,s__10678__$2,temp__4092__auto__){
return (function (){var s__10706__$1 = s__10706;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__10706__$1);if(temp__4092__auto____$1)
{var s__10706__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__10706__$2))
{var c__8919__auto____$1 = cljs.core.chunk_first.call(null,s__10706__$2);var size__8920__auto____$1 = cljs.core.count.call(null,c__8919__auto____$1);var b__10708 = cljs.core.chunk_buffer.call(null,size__8920__auto____$1);if((function (){var i__10707 = 0;while(true){
if((i__10707 < size__8920__auto____$1))
{var multiset = cljs.core._nth.call(null,c__8919__auto____$1,i__10707);cljs.core.chunk_append.call(null,b__10708,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__10707,i__10679,multiset,c__8919__auto____$1,size__8920__auto____$1,b__10708,s__10706__$2,temp__4092__auto____$1,part,c__8919__auto__,size__8920__auto__,b__10680,s__10678__$2,temp__4092__auto__){
return (function (p__10713){var vec__10714 = p__10713;var index = cljs.core.nth.call(null,vec__10714,0,null);var numtimes = cljs.core.nth.call(null,vec__10714,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__10707,i__10679,multiset,c__8919__auto____$1,size__8920__auto____$1,b__10708,s__10706__$2,temp__4092__auto____$1,part,c__8919__auto__,size__8920__auto__,b__10680,s__10678__$2,temp__4092__auto__))
,multiset)));
{
var G__10730 = (i__10707 + 1);
i__10707 = G__10730;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10708),iter__10705.call(null,cljs.core.chunk_rest.call(null,s__10706__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10708),null);
}
} else
{var multiset = cljs.core.first.call(null,s__10706__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__10679,multiset,s__10706__$2,temp__4092__auto____$1,part,c__8919__auto__,size__8920__auto__,b__10680,s__10678__$2,temp__4092__auto__){
return (function (p__10715){var vec__10716 = p__10715;var index = cljs.core.nth.call(null,vec__10716,0,null);var numtimes = cljs.core.nth.call(null,vec__10716,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__10679,multiset,s__10706__$2,temp__4092__auto____$1,part,c__8919__auto__,size__8920__auto__,b__10680,s__10678__$2,temp__4092__auto__))
,multiset)),iter__10705.call(null,cljs.core.rest.call(null,s__10706__$2)));
}
} else
{return null;
}
break;
}
});})(i__10679,part,c__8919__auto__,size__8920__auto__,b__10680,s__10678__$2,temp__4092__auto__))
,null,null));
});})(i__10679,part,c__8919__auto__,size__8920__auto__,b__10680,s__10678__$2,temp__4092__auto__))
;return iter__8921__auto__.call(null,part);
})());
{
var G__10731 = (i__10679 + 1);
i__10679 = G__10731;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10680),iter__10677.call(null,cljs.core.chunk_rest.call(null,s__10678__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10680),null);
}
} else
{var part = cljs.core.first.call(null,s__10678__$2);return cljs.core.cons.call(null,(function (){var iter__8921__auto__ = ((function (part,s__10678__$2,temp__4092__auto__){
return (function iter__10717(s__10718){return (new cljs.core.LazySeq(null,((function (part,s__10678__$2,temp__4092__auto__){
return (function (){var s__10718__$1 = s__10718;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__10718__$1);if(temp__4092__auto____$1)
{var s__10718__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__10718__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__10718__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__10720 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__10719 = 0;while(true){
if((i__10719 < size__8920__auto__))
{var multiset = cljs.core._nth.call(null,c__8919__auto__,i__10719);cljs.core.chunk_append.call(null,b__10720,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__10719,multiset,c__8919__auto__,size__8920__auto__,b__10720,s__10718__$2,temp__4092__auto____$1,part,s__10678__$2,temp__4092__auto__){
return (function (p__10725){var vec__10726 = p__10725;var index = cljs.core.nth.call(null,vec__10726,0,null);var numtimes = cljs.core.nth.call(null,vec__10726,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__10719,multiset,c__8919__auto__,size__8920__auto__,b__10720,s__10718__$2,temp__4092__auto____$1,part,s__10678__$2,temp__4092__auto__))
,multiset)));
{
var G__10732 = (i__10719 + 1);
i__10719 = G__10732;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10720),iter__10717.call(null,cljs.core.chunk_rest.call(null,s__10718__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10720),null);
}
} else
{var multiset = cljs.core.first.call(null,s__10718__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (multiset,s__10718__$2,temp__4092__auto____$1,part,s__10678__$2,temp__4092__auto__){
return (function (p__10727){var vec__10728 = p__10727;var index = cljs.core.nth.call(null,vec__10728,0,null);var numtimes = cljs.core.nth.call(null,vec__10728,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(multiset,s__10718__$2,temp__4092__auto____$1,part,s__10678__$2,temp__4092__auto__))
,multiset)),iter__10717.call(null,cljs.core.rest.call(null,s__10718__$2)));
}
} else
{return null;
}
break;
}
});})(part,s__10678__$2,temp__4092__auto__))
,null,null));
});})(part,s__10678__$2,temp__4092__auto__))
;return iter__8921__auto__.call(null,part);
})(),iter__10677.call(null,cljs.core.rest.call(null,s__10678__$2)));
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
var p__10614 = null;if (arguments.length > 1) {
  p__10614 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions_M__delegate.call(this,items,p__10614);};
partitions_M.cljs$lang$maxFixedArity = 1;
partitions_M.cljs$lang$applyTo = (function (arglist__10733){
var items = cljs.core.first(arglist__10733);
var p__10614 = cljs.core.rest(arglist__10733);
return partitions_M__delegate(items,p__10614);
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
partitions.cljs$lang$applyTo = (function (arglist__10734){
var items = cljs.core.first(arglist__10734);
var args = cljs.core.rest(arglist__10734);
return partitions__delegate(items,args);
});
partitions.cljs$core$IFn$_invoke$arity$variadic = partitions__delegate;
return partitions;
})()
;

//# sourceMappingURL=combinatorics.js.map