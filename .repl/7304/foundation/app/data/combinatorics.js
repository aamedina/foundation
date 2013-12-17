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
var G__25282 = cljs.core.assoc.call(null,c__$2,(j__$1 - 1),(c__$2.call(null,j__$1) - 1));
var G__25283 = (j__$1 - 1);
c__$2 = G__25282;
j__$1 = G__25283;
continue;
}
}
break;
}
}
}
});
return (new cljs.core.LazySeq(null,(function (){var c = cljs.core.vec.call(null,cljs.core.cons.call(null,null,(function (){var iter__8521__auto__ = (function iter__25278(s__25279){return (new cljs.core.LazySeq(null,(function (){var s__25279__$1 = s__25279;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__25279__$1);if(temp__4092__auto__)
{var s__25279__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__25279__$2))
{var c__8519__auto__ = cljs.core.chunk_first.call(null,s__25279__$2);var size__8520__auto__ = cljs.core.count.call(null,c__8519__auto__);var b__25281 = cljs.core.chunk_buffer.call(null,size__8520__auto__);if((function (){var i__25280 = 0;while(true){
if((i__25280 < size__8520__auto__))
{var j = cljs.core._nth.call(null,c__8519__auto__,i__25280);cljs.core.chunk_append.call(null,b__25281,((j + cnt) + (- (n + 1))));
{
var G__25284 = (i__25280 + 1);
i__25280 = G__25284;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25281),iter__25278.call(null,cljs.core.chunk_rest.call(null,s__25279__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25281),null);
}
} else
{var j = cljs.core.first.call(null,s__25279__$2);return cljs.core.cons.call(null,((j + cnt) + (- (n + 1))),iter__25278.call(null,cljs.core.rest.call(null,s__25279__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8521__auto__.call(null,cljs.core.range.call(null,1,(n + 1)));
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
{return cljs.core.map.call(null,(function (p1__25285_SHARP_){return cljs.core.map.call(null,v_items,p1__25285_SHARP_);
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
var G__25286 = (i - 1);
var G__25287 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__25286;
v_seqs__$2 = G__25287;
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
cartesian_product.cljs$lang$applyTo = (function (arglist__25288){
var seqs = cljs.core.seq(arglist__25288);
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
var G__25289 = (i - 1);
i = G__25289;
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
var G__25290 = (i - 1);
i = G__25290;
continue;
}
}
break;
}
})();var v__$1 = cljs.core.assoc.call(null,v,j,v.call(null,l),l,vj);var k = (j + 1);var l__$1 = (len - 1);while(true){
if((k < l__$1))
{{
var G__25291 = cljs.core.assoc.call(null,v__$1,k,v__$1.call(null,l__$1),l__$1,v__$1.call(null,k));
var G__25292 = (k + 1);
var G__25293 = (l__$1 - 1);
v__$1 = G__25291;
k = G__25292;
l__$1 = G__25293;
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
foundation.app.data.combinatorics.multi_perm = (function multi_perm(l){var f = cljs.core.frequencies.call(null,l);var v = cljs.core.vec.call(null,cljs.core.keys.call(null,f));var indices = cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__8521__auto__ = ((function (f,v){
return (function iter__25298(s__25299){return (new cljs.core.LazySeq(null,((function (f,v){
return (function (){var s__25299__$1 = s__25299;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__25299__$1);if(temp__4092__auto__)
{var s__25299__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__25299__$2))
{var c__8519__auto__ = cljs.core.chunk_first.call(null,s__25299__$2);var size__8520__auto__ = cljs.core.count.call(null,c__8519__auto__);var b__25301 = cljs.core.chunk_buffer.call(null,size__8520__auto__);if((function (){var i__25300 = 0;while(true){
if((i__25300 < size__8520__auto__))
{var i = cljs.core._nth.call(null,c__8519__auto__,i__25300);cljs.core.chunk_append.call(null,b__25301,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));
{
var G__25302 = (i__25300 + 1);
i__25300 = G__25302;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25301),iter__25298.call(null,cljs.core.chunk_rest.call(null,s__25299__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25301),null);
}
} else
{var i = cljs.core.first.call(null,s__25299__$2);return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),iter__25298.call(null,cljs.core.rest.call(null,s__25299__$2)));
}
} else
{return null;
}
break;
}
});})(f,v))
,null,null));
});})(f,v))
;return iter__8521__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,v)));
})());return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.map,v),foundation.app.data.combinatorics.lex_permutations.call(null,indices));
});
/**
* All the distinct permutations of items, lexicographic by index.
*/
foundation.app.data.combinatorics.permutations = (function permutations(items){if(foundation.app.data.combinatorics.sorted_numbers_QMARK_.call(null,items))
{return foundation.app.data.combinatorics.lex_permutations.call(null,items);
} else
{if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core.distinct_QMARK_,items)))
{var v = cljs.core.vec.call(null,items);return cljs.core.map.call(null,(function (p1__25303_SHARP_){return cljs.core.map.call(null,v,p1__25303_SHARP_);
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
{return cljs.core.vec.call(null,(function (){var iter__8521__auto__ = (function iter__25308(s__25309){return (new cljs.core.LazySeq(null,(function (){var s__25309__$1 = s__25309;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__25309__$1);if(temp__4092__auto__)
{var s__25309__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__25309__$2))
{var c__8519__auto__ = cljs.core.chunk_first.call(null,s__25309__$2);var size__8520__auto__ = cljs.core.count.call(null,c__8519__auto__);var b__25311 = cljs.core.chunk_buffer.call(null,size__8520__auto__);if((function (){var i__25310 = 0;while(true){
if((i__25310 < size__8520__auto__))
{var i = cljs.core._nth.call(null,c__8519__auto__,i__25310);cljs.core.chunk_append.call(null,b__25311,(function (){var x__8135__auto__ = 0;var y__8136__auto__ = (i - ((n - s) - -1));return ((x__8135__auto__ > y__8136__auto__) ? x__8135__auto__ : y__8136__auto__);
})());
{
var G__25312 = (i__25310 + 1);
i__25310 = G__25312;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25311),iter__25308.call(null,cljs.core.chunk_rest.call(null,s__25309__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25311),null);
}
} else
{var i = cljs.core.first.call(null,s__25309__$2);return cljs.core.cons.call(null,(function (){var x__8135__auto__ = 0;var y__8136__auto__ = (i - ((n - s) - -1));return ((x__8135__auto__ > y__8136__auto__) ? x__8135__auto__ : y__8136__auto__);
})(),iter__25308.call(null,cljs.core.rest.call(null,s__25309__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8521__auto__.call(null,cljs.core.range.call(null,1,(n + 1)));
})());
} else
{return cljs.core.vec.call(null,cljs.core.repeat.call(null,n,0));
}
});
foundation.app.data.combinatorics.growth_strings_H = (function() {
var growth_strings_H = null;
var growth_strings_H__3 = (function (n,r,s){return growth_strings_H.call(null,n,foundation.app.data.combinatorics.init.call(null,n,s),cljs.core.vec.call(null,cljs.core.repeat.call(null,n,1)),r,s);
});
var growth_strings_H__5 = (function (n,a,b,r,s){return cljs.core.cons.call(null,a,(new cljs.core.LazySeq(null,(function (){if((function (){var and__7816__auto__ = (cljs.core.peek.call(null,b) > cljs.core.peek.call(null,a));if(and__7816__auto__)
{if(cljs.core.truth_(r))
{return (cljs.core.peek.call(null,a) < (r - 1));
} else
{return true;
}
} else
{return and__7816__auto__;
}
})())
{return growth_strings_H.call(null,n,foundation.app.data.combinatorics.update.call(null,a,(n - 1),cljs.core.inc),b,r,s);
} else
{var j = (function (){var j = (n - 2);while(true){
if((function (){var and__7816__auto__ = (a.call(null,j) < b.call(null,j));if(and__7816__auto__)
{var and__7816__auto____$1 = (cljs.core.truth_(r)?(a.call(null,j) < (r - 1)):true);if(and__7816__auto____$1)
{if(cljs.core.truth_(s))
{return (((s - b.call(null,j)) - ((((a.call(null,j) + 1) === b.call(null,j)))?1:0)) <= (n - j));
} else
{return true;
}
} else
{return and__7816__auto____$1;
}
} else
{return and__7816__auto__;
}
})())
{return j;
} else
{{
var G__25315 = (j - 1);
j = G__25315;
continue;
}
}
break;
}
})();if((j === 0))
{return cljs.core.List.EMPTY;
} else
{var a__$1 = foundation.app.data.combinatorics.update.call(null,a,j,cljs.core.inc);var x = (cljs.core.truth_(s)?(s - (b.call(null,j) + ((cljs.core._EQ_.call(null,a__$1.call(null,j),b.call(null,j)))?1:0))):null);var vec__25314 = (function (){var a__$2 = a__$1;var b__$1 = b;var i = (j + 1);var current_max = (b__$1.call(null,j) + (((b__$1.call(null,j) === a__$2.call(null,j)))?1:0));while(true){
if((i === n))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$2,b__$1], null);
} else
{if(cljs.core.truth_((function (){var and__7816__auto__ = s;if(cljs.core.truth_(and__7816__auto__))
{return (i > ((n - x) - 1));
} else
{return and__7816__auto__;
}
})()))
{var new_a_i = ((i - n) + s);{
var G__25316 = cljs.core.assoc.call(null,a__$2,i,new_a_i);
var G__25317 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__25318 = (i + 1);
var G__25319 = (function (){var x__8135__auto__ = current_max;var y__8136__auto__ = (new_a_i + 1);return ((x__8135__auto__ > y__8136__auto__) ? x__8135__auto__ : y__8136__auto__);
})();
a__$2 = G__25316;
b__$1 = G__25317;
i = G__25318;
current_max = G__25319;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__25320 = cljs.core.assoc.call(null,a__$2,i,0);
var G__25321 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__25322 = (i + 1);
var G__25323 = current_max;
a__$2 = G__25320;
b__$1 = G__25321;
i = G__25322;
current_max = G__25323;
continue;
}
} else
{return null;
}
}
}
break;
}
})();var a__$2 = cljs.core.nth.call(null,vec__25314,0,null);var b__$1 = cljs.core.nth.call(null,vec__25314,1,null);return growth_strings_H.call(null,n,a__$2,b__$1,r,s);
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
var lex_partitions_H__delegate = function (N,p__25324){var map__25330 = p__25324;var map__25330__$1 = ((cljs.core.seq_QMARK_.call(null,map__25330))?cljs.core.apply.call(null,cljs.core.hash_map,map__25330):map__25330);var from = cljs.core.get.call(null,map__25330__$1,new cljs.core.Keyword(null,"min","min",1014012356));var to = cljs.core.get.call(null,map__25330__$1,new cljs.core.Keyword(null,"max","max",1014012118));if(cljs.core._EQ_.call(null,N,0))
{if((((function (){var or__7828__auto__ = from;if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
} else
{return 0;
}
})() <= 0)) && ((0 <= (function (){var or__7828__auto__ = to;if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
} else
{return 0;
}
})())))
{return cljs.core.list(cljs.core.List.EMPTY);
} else
{return cljs.core.List.EMPTY;
}
} else
{var from__$1 = (cljs.core.truth_((function (){var and__7816__auto__ = from;if(cljs.core.truth_(and__7816__auto__))
{return (from <= 1);
} else
{return and__7816__auto__;
}
})())?null:from);var to__$1 = (cljs.core.truth_((function (){var and__7816__auto__ = to;if(cljs.core.truth_(and__7816__auto__))
{return (to >= N);
} else
{return and__7816__auto__;
}
})())?null:to);if(!(((1 <= (function (){var or__7828__auto__ = from__$1;if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
} else
{return 1;
}
})())) && ((((function (){var or__7828__auto__ = from__$1;if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
} else
{return 1;
}
})() <= (function (){var or__7828__auto__ = to__$1;if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
} else
{return N;
}
})())) && (((function (){var or__7828__auto__ = to__$1;if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
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
{var growth_strings = foundation.app.data.combinatorics.growth_strings_H.call(null,N,to__$1,from__$1);var iter__8521__auto__ = (function iter__25331(s__25332){return (new cljs.core.LazySeq(null,(function (){var s__25332__$1 = s__25332;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__25332__$1);if(temp__4092__auto__)
{var s__25332__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__25332__$2))
{var c__8519__auto__ = cljs.core.chunk_first.call(null,s__25332__$2);var size__8520__auto__ = cljs.core.count.call(null,c__8519__auto__);var b__25334 = cljs.core.chunk_buffer.call(null,size__8520__auto__);if((function (){var i__25333 = 0;while(true){
if((i__25333 < size__8520__auto__))
{var growth_string = cljs.core._nth.call(null,c__8519__auto__,i__25333);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));cljs.core.chunk_append.call(null,b__25334,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))));
{
var G__25335 = (i__25333 + 1);
i__25333 = G__25335;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25334),iter__25331.call(null,cljs.core.chunk_rest.call(null,s__25332__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25334),null);
}
} else
{var growth_string = cljs.core.first.call(null,s__25332__$2);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));return cljs.core.cons.call(null,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))),iter__25331.call(null,cljs.core.rest.call(null,s__25332__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8521__auto__.call(null,growth_strings);
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
var p__25324 = null;if (arguments.length > 1) {
  p__25324 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return lex_partitions_H__delegate.call(this,N,p__25324);};
lex_partitions_H.cljs$lang$maxFixedArity = 1;
lex_partitions_H.cljs$lang$applyTo = (function (arglist__25336){
var N = cljs.core.first(arglist__25336);
var p__25324 = cljs.core.rest(arglist__25336);
return lex_partitions_H__delegate(N,p__25324);
});
lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic = lex_partitions_H__delegate;
return lex_partitions_H;
})()
;
/**
* @param {...*} var_args
*/
foundation.app.data.combinatorics.partitions_H = (function() { 
var partitions_H__delegate = function (items,args){var items__$1 = cljs.core.vec.call(null,items);var N = cljs.core.count.call(null,items__$1);var lex = cljs.core.apply.call(null,foundation.app.data.combinatorics.lex_partitions_H,N,args);var iter__8521__auto__ = (function iter__25357(s__25358){return (new cljs.core.LazySeq(null,(function (){var s__25358__$1 = s__25358;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__25358__$1);if(temp__4092__auto__)
{var s__25358__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__25358__$2))
{var c__8519__auto__ = cljs.core.chunk_first.call(null,s__25358__$2);var size__8520__auto__ = cljs.core.count.call(null,c__8519__auto__);var b__25360 = cljs.core.chunk_buffer.call(null,size__8520__auto__);if((function (){var i__25359 = 0;while(true){
if((i__25359 < size__8520__auto__))
{var parts = cljs.core._nth.call(null,c__8519__auto__,i__25359);cljs.core.chunk_append.call(null,b__25360,(function (){var iter__8521__auto__ = ((function (i__25359,parts,c__8519__auto__,size__8520__auto__,b__25360,s__25358__$2,temp__4092__auto__){
return (function iter__25369(s__25370){return (new cljs.core.LazySeq(null,((function (i__25359,parts,c__8519__auto__,size__8520__auto__,b__25360,s__25358__$2,temp__4092__auto__){
return (function (){var s__25370__$1 = s__25370;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__25370__$1);if(temp__4092__auto____$1)
{var s__25370__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__25370__$2))
{var c__8519__auto____$1 = cljs.core.chunk_first.call(null,s__25370__$2);var size__8520__auto____$1 = cljs.core.count.call(null,c__8519__auto____$1);var b__25372 = cljs.core.chunk_buffer.call(null,size__8520__auto____$1);if((function (){var i__25371 = 0;while(true){
if((i__25371 < size__8520__auto____$1))
{var part = cljs.core._nth.call(null,c__8519__auto____$1,i__25371);cljs.core.chunk_append.call(null,b__25372,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__25371,i__25359,part,c__8519__auto____$1,size__8520__auto____$1,b__25372,s__25370__$2,temp__4092__auto____$1,parts,c__8519__auto__,size__8520__auto__,b__25360,s__25358__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__25371,i__25359,part,c__8519__auto____$1,size__8520__auto____$1,b__25372,s__25370__$2,temp__4092__auto____$1,parts,c__8519__auto__,size__8520__auto__,b__25360,s__25358__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__25377 = (i__25371 + 1);
i__25371 = G__25377;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25372),iter__25369.call(null,cljs.core.chunk_rest.call(null,s__25370__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25372),null);
}
} else
{var part = cljs.core.first.call(null,s__25370__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__25359,part,s__25370__$2,temp__4092__auto____$1,parts,c__8519__auto__,size__8520__auto__,b__25360,s__25358__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__25359,part,s__25370__$2,temp__4092__auto____$1,parts,c__8519__auto__,size__8520__auto__,b__25360,s__25358__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__25369.call(null,cljs.core.rest.call(null,s__25370__$2)));
}
} else
{return null;
}
break;
}
});})(i__25359,parts,c__8519__auto__,size__8520__auto__,b__25360,s__25358__$2,temp__4092__auto__))
,null,null));
});})(i__25359,parts,c__8519__auto__,size__8520__auto__,b__25360,s__25358__$2,temp__4092__auto__))
;return iter__8521__auto__.call(null,parts);
})());
{
var G__25378 = (i__25359 + 1);
i__25359 = G__25378;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25360),iter__25357.call(null,cljs.core.chunk_rest.call(null,s__25358__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25360),null);
}
} else
{var parts = cljs.core.first.call(null,s__25358__$2);return cljs.core.cons.call(null,(function (){var iter__8521__auto__ = ((function (parts,s__25358__$2,temp__4092__auto__){
return (function iter__25373(s__25374){return (new cljs.core.LazySeq(null,((function (parts,s__25358__$2,temp__4092__auto__){
return (function (){var s__25374__$1 = s__25374;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__25374__$1);if(temp__4092__auto____$1)
{var s__25374__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__25374__$2))
{var c__8519__auto__ = cljs.core.chunk_first.call(null,s__25374__$2);var size__8520__auto__ = cljs.core.count.call(null,c__8519__auto__);var b__25376 = cljs.core.chunk_buffer.call(null,size__8520__auto__);if((function (){var i__25375 = 0;while(true){
if((i__25375 < size__8520__auto__))
{var part = cljs.core._nth.call(null,c__8519__auto__,i__25375);cljs.core.chunk_append.call(null,b__25376,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__25375,part,c__8519__auto__,size__8520__auto__,b__25376,s__25374__$2,temp__4092__auto____$1,parts,s__25358__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__25375,part,c__8519__auto__,size__8520__auto__,b__25376,s__25374__$2,temp__4092__auto____$1,parts,s__25358__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__25379 = (i__25375 + 1);
i__25375 = G__25379;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25376),iter__25373.call(null,cljs.core.chunk_rest.call(null,s__25374__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25376),null);
}
} else
{var part = cljs.core.first.call(null,s__25374__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (part,s__25374__$2,temp__4092__auto____$1,parts,s__25358__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(part,s__25374__$2,temp__4092__auto____$1,parts,s__25358__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__25373.call(null,cljs.core.rest.call(null,s__25374__$2)));
}
} else
{return null;
}
break;
}
});})(parts,s__25358__$2,temp__4092__auto__))
,null,null));
});})(parts,s__25358__$2,temp__4092__auto__))
;return iter__8521__auto__.call(null,parts);
})(),iter__25357.call(null,cljs.core.rest.call(null,s__25358__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8521__auto__.call(null,lex);
};
var partitions_H = function (items,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions_H__delegate.call(this,items,args);};
partitions_H.cljs$lang$maxFixedArity = 1;
partitions_H.cljs$lang$applyTo = (function (arglist__25380){
var items = cljs.core.first(arglist__25380);
var args = cljs.core.rest(arglist__25380);
return partitions_H__delegate(items,args);
});
partitions_H.cljs$core$IFn$_invoke$arity$variadic = partitions_H__delegate;
return partitions_H;
})()
;
foundation.app.data.combinatorics.multiset_partitions_M = (function() {
var multiset_partitions_M = null;
var multiset_partitions_M__3 = (function (multiset,r,s){var n = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,multiset));var m = cljs.core.count.call(null,multiset);var f = cljs.core.PersistentVector.EMPTY;var c = cljs.core.PersistentVector.EMPTY;var u = cljs.core.PersistentVector.EMPTY;var v = cljs.core.PersistentVector.EMPTY;var vec__25403 = (function (){var j = 0;var c__$1 = c;var u__$1 = u;var v__$1 = v;while(true){
if(cljs.core._EQ_.call(null,j,m))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,u__$1,v__$1], null);
} else
{{
var G__25425 = (j + 1);
var G__25426 = cljs.core.assoc.call(null,c__$1,j,(j + 1));
var G__25427 = cljs.core.assoc.call(null,u__$1,j,multiset.call(null,(j + 1)));
var G__25428 = cljs.core.assoc.call(null,v__$1,j,multiset.call(null,(j + 1)));
j = G__25425;
c__$1 = G__25426;
u__$1 = G__25427;
v__$1 = G__25428;
continue;
}
}
break;
}
})();var c__$1 = cljs.core.nth.call(null,vec__25403,0,null);var u__$1 = cljs.core.nth.call(null,vec__25403,1,null);var v__$1 = cljs.core.nth.call(null,vec__25403,2,null);var a = 0;var b = m;var l = 0;var f__$1 = cljs.core.assoc.call(null,f,0,0,1,m);var stack = cljs.core.List.EMPTY;return multiset_partitions_M.call(null,n,m,f__$1,c__$1,u__$1,v__$1,a,b,l,r,s);
});
var multiset_partitions_M__11 = (function (n,m,f,c,u,v,a,b,l,r,s){while(true){
var vec__25404 = (function (){var j = a;var k = b;var x = false;var u__$1 = u;var v__$1 = v;var c__$1 = c;while(true){
if((j >= b))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [u__$1,v__$1,c__$1,j,k], null);
} else
{var u__$2 = cljs.core.assoc.call(null,u__$1,k,(u__$1.call(null,j) - v__$1.call(null,j)));if(cljs.core._EQ_.call(null,u__$2.call(null,k),0))
{{
var G__25429 = (j + 1);
var G__25430 = k;
var G__25431 = true;
var G__25432 = u__$2;
var G__25433 = v__$1;
var G__25434 = c__$1;
j = G__25429;
k = G__25430;
x = G__25431;
u__$1 = G__25432;
v__$1 = G__25433;
c__$1 = G__25434;
continue;
}
} else
{if(!(x))
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,(function (){var x__8142__auto__ = v__$1.call(null,j);var y__8143__auto__ = u__$2.call(null,k);return ((x__8142__auto__ < y__8143__auto__) ? x__8142__auto__ : y__8143__auto__);
})());var x__$1 = (u__$2.call(null,k) < v__$2.call(null,j));var k__$1 = (k + 1);var j__$1 = (j + 1);{
var G__25435 = j__$1;
var G__25436 = k__$1;
var G__25437 = x__$1;
var G__25438 = u__$2;
var G__25439 = v__$2;
var G__25440 = c__$2;
j = G__25435;
k = G__25436;
x = G__25437;
u__$1 = G__25438;
v__$1 = G__25439;
c__$1 = G__25440;
continue;
}
} else
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,u__$2.call(null,k));var k__$1 = (k + 1);var j__$1 = (j + 1);{
var G__25441 = j__$1;
var G__25442 = k__$1;
var G__25443 = x;
var G__25444 = u__$2;
var G__25445 = v__$2;
var G__25446 = c__$2;
j = G__25441;
k = G__25442;
x = G__25443;
u__$1 = G__25444;
v__$1 = G__25445;
c__$1 = G__25446;
continue;
}
}
}
}
break;
}
})();var u__$1 = cljs.core.nth.call(null,vec__25404,0,null);var v__$1 = cljs.core.nth.call(null,vec__25404,1,null);var c__$1 = cljs.core.nth.call(null,vec__25404,2,null);var j = cljs.core.nth.call(null,vec__25404,3,null);var k = cljs.core.nth.call(null,vec__25404,4,null);if(cljs.core.truth_((function (){var and__7816__auto__ = r;if(cljs.core.truth_(and__7816__auto__))
{return ((k > b)) && (cljs.core._EQ_.call(null,l,(r - 1)));
} else
{return and__7816__auto__;
}
})()))
{return foundation.app.data.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
} else
{if(cljs.core.truth_((function (){var and__7816__auto__ = s;if(cljs.core.truth_(and__7816__auto__))
{return ((k <= b)) && (((l + 1) < s));
} else
{return and__7816__auto__;
}
})()))
{return foundation.app.data.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
} else
{if((k > b))
{var a__$1 = b;var b__$1 = k;var l__$1 = (l + 1);var f__$1 = cljs.core.assoc.call(null,f,(l__$1 + 1),b__$1);{
var G__25447 = n;
var G__25448 = m;
var G__25449 = f__$1;
var G__25450 = c__$1;
var G__25451 = u__$1;
var G__25452 = v__$1;
var G__25453 = a__$1;
var G__25454 = b__$1;
var G__25455 = l__$1;
var G__25456 = r;
var G__25457 = s;
n = G__25447;
m = G__25448;
f = G__25449;
c = G__25450;
u = G__25451;
v = G__25452;
a = G__25453;
b = G__25454;
l = G__25455;
r = G__25456;
s = G__25457;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var part = (function (){var iter__8521__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s){
return (function iter__25405(s__25406){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s){
return (function (){var s__25406__$1 = s__25406;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__25406__$1);if(temp__4092__auto__)
{var s__25406__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__25406__$2))
{var c__8519__auto__ = cljs.core.chunk_first.call(null,s__25406__$2);var size__8520__auto__ = cljs.core.count.call(null,c__8519__auto__);var b__25408 = cljs.core.chunk_buffer.call(null,size__8520__auto__);if((function (){var i__25407 = 0;while(true){
if((i__25407 < size__8520__auto__))
{var y = cljs.core._nth.call(null,c__8519__auto__,i__25407);cljs.core.chunk_append.call(null,b__25408,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + 1)) - 1);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8521__auto__ = ((function (i__25407,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8519__auto__,size__8520__auto__,b__25408,s__25406__$2,temp__4092__auto__){
return (function iter__25417(s__25418){return (new cljs.core.LazySeq(null,((function (i__25407,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8519__auto__,size__8520__auto__,b__25408,s__25406__$2,temp__4092__auto__){
return (function (){var s__25418__$1 = s__25418;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__25418__$1);if(temp__4092__auto____$1)
{var s__25418__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__25418__$2))
{var c__8519__auto____$1 = cljs.core.chunk_first.call(null,s__25418__$2);var size__8520__auto____$1 = cljs.core.count.call(null,c__8519__auto____$1);var b__25420 = cljs.core.chunk_buffer.call(null,size__8520__auto____$1);if((function (){var i__25419 = 0;while(true){
if((i__25419 < size__8520__auto____$1))
{var z = cljs.core._nth.call(null,c__8519__auto____$1,i__25419);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{cljs.core.chunk_append.call(null,b__25420,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));
{
var G__25458 = (i__25419 + 1);
i__25419 = G__25458;
continue;
}
} else
{{
var G__25459 = (i__25419 + 1);
i__25419 = G__25459;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25420),iter__25417.call(null,cljs.core.chunk_rest.call(null,s__25418__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25420),null);
}
} else
{var z = cljs.core.first.call(null,s__25418__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),iter__25417.call(null,cljs.core.rest.call(null,s__25418__$2)));
} else
{{
var G__25460 = cljs.core.rest.call(null,s__25418__$2);
s__25418__$1 = G__25460;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__25407,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8519__auto__,size__8520__auto__,b__25408,s__25406__$2,temp__4092__auto__))
,null,null));
});})(i__25407,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8519__auto__,size__8520__auto__,b__25408,s__25406__$2,temp__4092__auto__))
;return iter__8521__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + 1)));
})());
})());
{
var G__25461 = (i__25407 + 1);
i__25407 = G__25461;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25408),iter__25405.call(null,cljs.core.chunk_rest.call(null,s__25406__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25408),null);
}
} else
{var y = cljs.core.first.call(null,s__25406__$2);return cljs.core.cons.call(null,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + 1)) - 1);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8521__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__25406__$2,temp__4092__auto__){
return (function iter__25421(s__25422){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__25406__$2,temp__4092__auto__){
return (function (){var s__25422__$1 = s__25422;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__25422__$1);if(temp__4092__auto____$1)
{var s__25422__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__25422__$2))
{var c__8519__auto__ = cljs.core.chunk_first.call(null,s__25422__$2);var size__8520__auto__ = cljs.core.count.call(null,c__8519__auto__);var b__25424 = cljs.core.chunk_buffer.call(null,size__8520__auto__);if((function (){var i__25423 = 0;while(true){
if((i__25423 < size__8520__auto__))
{var z = cljs.core._nth.call(null,c__8519__auto__,i__25423);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{cljs.core.chunk_append.call(null,b__25424,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));
{
var G__25462 = (i__25423 + 1);
i__25423 = G__25462;
continue;
}
} else
{{
var G__25463 = (i__25423 + 1);
i__25423 = G__25463;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25424),iter__25421.call(null,cljs.core.chunk_rest.call(null,s__25422__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25424),null);
}
} else
{var z = cljs.core.first.call(null,s__25422__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),iter__25421.call(null,cljs.core.rest.call(null,s__25422__$2)));
} else
{{
var G__25464 = cljs.core.rest.call(null,s__25422__$2);
s__25422__$1 = G__25464;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__25406__$2,temp__4092__auto__))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__25406__$2,temp__4092__auto__))
;return iter__8521__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + 1)));
})());
})(),iter__25405.call(null,cljs.core.rest.call(null,s__25406__$2)));
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s))
;return iter__8521__auto__.call(null,cljs.core.range.call(null,(l + 1)));
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
var G__25473 = (j - 1);
j = G__25473;
continue;
}
}
break;
}
})();if(cljs.core.truth_((function (){var and__7816__auto__ = r;if(cljs.core.truth_(and__7816__auto__))
{return (cljs.core._EQ_.call(null,j,a)) && ((((v.call(null,j) - 1) * (r - l)) < u.call(null,j)));
} else
{return and__7816__auto__;
}
})()))
{return foundation.app.data.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s);
} else
{if((cljs.core._EQ_.call(null,j,a)) && (cljs.core._EQ_.call(null,v.call(null,j),1)))
{return foundation.app.data.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var v__$1 = foundation.app.data.combinatorics.update.call(null,v,j,cljs.core.dec);var diff_uv = (cljs.core.truth_(s)?cljs.core.apply.call(null,cljs.core._PLUS_,(function (){var iter__8521__auto__ = ((function (v__$1){
return (function iter__25469(s__25470){return (new cljs.core.LazySeq(null,((function (v__$1){
return (function (){var s__25470__$1 = s__25470;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__25470__$1);if(temp__4092__auto__)
{var s__25470__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__25470__$2))
{var c__8519__auto__ = cljs.core.chunk_first.call(null,s__25470__$2);var size__8520__auto__ = cljs.core.count.call(null,c__8519__auto__);var b__25472 = cljs.core.chunk_buffer.call(null,size__8520__auto__);if((function (){var i__25471 = 0;while(true){
if((i__25471 < size__8520__auto__))
{var i = cljs.core._nth.call(null,c__8519__auto__,i__25471);cljs.core.chunk_append.call(null,b__25472,(u.call(null,i) - v__$1.call(null,i)));
{
var G__25474 = (i__25471 + 1);
i__25471 = G__25474;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25472),iter__25469.call(null,cljs.core.chunk_rest.call(null,s__25470__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25472),null);
}
} else
{var i = cljs.core.first.call(null,s__25470__$2);return cljs.core.cons.call(null,(u.call(null,i) - v__$1.call(null,i)),iter__25469.call(null,cljs.core.rest.call(null,s__25470__$2)));
}
} else
{return null;
}
break;
}
});})(v__$1))
,null,null));
});})(v__$1))
;return iter__8521__auto__.call(null,cljs.core.range.call(null,a,(j + 1)));
})()):null);var v__$2 = (function (){var ks = cljs.core.range.call(null,(j + 1),b);var v__$2 = v__$1;while(true){
if(cljs.core.empty_QMARK_.call(null,ks))
{return v__$2;
} else
{var k = cljs.core.first.call(null,ks);{
var G__25475 = cljs.core.rest.call(null,ks);
var G__25476 = cljs.core.assoc.call(null,v__$2,k,u.call(null,k));
ks = G__25475;
v__$2 = G__25476;
continue;
}
}
break;
}
})();var min_partitions_after_this = (cljs.core.truth_(s)?(s - (l + 1)):0);var amount_to_dec = (cljs.core.truth_(s)?(function (){var x__8135__auto__ = 0;var y__8136__auto__ = (min_partitions_after_this - diff_uv);return ((x__8135__auto__ > y__8136__auto__) ? x__8135__auto__ : y__8136__auto__);
})():0);var v__$3 = ((cljs.core._EQ_.call(null,amount_to_dec,0))?v__$2:(function (){var k_1 = (b - 1);var v__$3 = v__$2;var amount = amount_to_dec;while(true){
var vk = v__$3.call(null,k_1);if((amount > vk))
{{
var G__25477 = (k_1 - 1);
var G__25478 = cljs.core.assoc.call(null,v__$3,k_1,0);
var G__25479 = (amount - vk);
k_1 = G__25477;
v__$3 = G__25478;
amount = G__25479;
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
var partitions_M__delegate = function (items,p__25480){var map__25538 = p__25480;var map__25538__$1 = ((cljs.core.seq_QMARK_.call(null,map__25538))?cljs.core.apply.call(null,cljs.core.hash_map,map__25538):map__25538);var from = cljs.core.get.call(null,map__25538__$1,new cljs.core.Keyword(null,"min","min",1014012356));var to = cljs.core.get.call(null,map__25538__$1,new cljs.core.Keyword(null,"max","max",1014012118));if(cljs.core._EQ_.call(null,cljs.core.count.call(null,items),0))
{if((((function (){var or__7828__auto__ = from;if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
} else
{return 0;
}
})() <= 0)) && ((0 <= (function (){var or__7828__auto__ = to;if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
} else
{return 0;
}
})())))
{return cljs.core.list(cljs.core.List.EMPTY);
} else
{return cljs.core.List.EMPTY;
}
} else
{var items__$1 = cljs.core.vec.call(null,items);var ditems = cljs.core.vec.call(null,cljs.core.distinct.call(null,items__$1));var freqs = cljs.core.frequencies.call(null,items__$1);var N = cljs.core.count.call(null,items__$1);var M = cljs.core.count.call(null,ditems);var from__$1 = (cljs.core.truth_((function (){var and__7816__auto__ = from;if(cljs.core.truth_(and__7816__auto__))
{return (from <= 1);
} else
{return and__7816__auto__;
}
})())?null:from);var to__$1 = (cljs.core.truth_((function (){var and__7816__auto__ = to;if(cljs.core.truth_(and__7816__auto__))
{return (to >= N);
} else
{return and__7816__auto__;
}
})())?null:to);if(!(((1 <= (function (){var or__7828__auto__ = from__$1;if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
} else
{return 1;
}
})())) && ((((function (){var or__7828__auto__ = from__$1;if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
} else
{return 1;
}
})() <= (function (){var or__7828__auto__ = to__$1;if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
} else
{return N;
}
})())) && (((function (){var or__7828__auto__ = to__$1;if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
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
{var start_multiset = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8521__auto__ = (function iter__25539(s__25540){return (new cljs.core.LazySeq(null,(function (){var s__25540__$1 = s__25540;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__25540__$1);if(temp__4092__auto__)
{var s__25540__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__25540__$2))
{var c__8519__auto__ = cljs.core.chunk_first.call(null,s__25540__$2);var size__8520__auto__ = cljs.core.count.call(null,c__8519__auto__);var b__25542 = cljs.core.chunk_buffer.call(null,size__8520__auto__);if((function (){var i__25541 = 0;while(true){
if((i__25541 < size__8520__auto__))
{var i = cljs.core._nth.call(null,c__8519__auto__,i__25541);var j = (i + 1);cljs.core.chunk_append.call(null,b__25542,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null));
{
var G__25595 = (i__25541 + 1);
i__25541 = G__25595;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25542),iter__25539.call(null,cljs.core.chunk_rest.call(null,s__25540__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25542),null);
}
} else
{var i = cljs.core.first.call(null,s__25540__$2);var j = (i + 1);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null),iter__25539.call(null,cljs.core.rest.call(null,s__25540__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8521__auto__.call(null,cljs.core.range.call(null,M));
})());var parts = foundation.app.data.combinatorics.multiset_partitions_M.call(null,start_multiset,to__$1,from__$1);var iter__8521__auto__ = (function iter__25543(s__25544){return (new cljs.core.LazySeq(null,(function (){var s__25544__$1 = s__25544;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__25544__$1);if(temp__4092__auto__)
{var s__25544__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__25544__$2))
{var c__8519__auto__ = cljs.core.chunk_first.call(null,s__25544__$2);var size__8520__auto__ = cljs.core.count.call(null,c__8519__auto__);var b__25546 = cljs.core.chunk_buffer.call(null,size__8520__auto__);if((function (){var i__25545 = 0;while(true){
if((i__25545 < size__8520__auto__))
{var part = cljs.core._nth.call(null,c__8519__auto__,i__25545);cljs.core.chunk_append.call(null,b__25546,(function (){var iter__8521__auto__ = ((function (i__25545,part,c__8519__auto__,size__8520__auto__,b__25546,s__25544__$2,temp__4092__auto__){
return (function iter__25571(s__25572){return (new cljs.core.LazySeq(null,((function (i__25545,part,c__8519__auto__,size__8520__auto__,b__25546,s__25544__$2,temp__4092__auto__){
return (function (){var s__25572__$1 = s__25572;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__25572__$1);if(temp__4092__auto____$1)
{var s__25572__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__25572__$2))
{var c__8519__auto____$1 = cljs.core.chunk_first.call(null,s__25572__$2);var size__8520__auto____$1 = cljs.core.count.call(null,c__8519__auto____$1);var b__25574 = cljs.core.chunk_buffer.call(null,size__8520__auto____$1);if((function (){var i__25573 = 0;while(true){
if((i__25573 < size__8520__auto____$1))
{var multiset = cljs.core._nth.call(null,c__8519__auto____$1,i__25573);cljs.core.chunk_append.call(null,b__25574,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__25573,i__25545,multiset,c__8519__auto____$1,size__8520__auto____$1,b__25574,s__25572__$2,temp__4092__auto____$1,part,c__8519__auto__,size__8520__auto__,b__25546,s__25544__$2,temp__4092__auto__){
return (function (p__25579){var vec__25580 = p__25579;var index = cljs.core.nth.call(null,vec__25580,0,null);var numtimes = cljs.core.nth.call(null,vec__25580,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__25573,i__25545,multiset,c__8519__auto____$1,size__8520__auto____$1,b__25574,s__25572__$2,temp__4092__auto____$1,part,c__8519__auto__,size__8520__auto__,b__25546,s__25544__$2,temp__4092__auto__))
,multiset)));
{
var G__25596 = (i__25573 + 1);
i__25573 = G__25596;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25574),iter__25571.call(null,cljs.core.chunk_rest.call(null,s__25572__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25574),null);
}
} else
{var multiset = cljs.core.first.call(null,s__25572__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__25545,multiset,s__25572__$2,temp__4092__auto____$1,part,c__8519__auto__,size__8520__auto__,b__25546,s__25544__$2,temp__4092__auto__){
return (function (p__25581){var vec__25582 = p__25581;var index = cljs.core.nth.call(null,vec__25582,0,null);var numtimes = cljs.core.nth.call(null,vec__25582,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__25545,multiset,s__25572__$2,temp__4092__auto____$1,part,c__8519__auto__,size__8520__auto__,b__25546,s__25544__$2,temp__4092__auto__))
,multiset)),iter__25571.call(null,cljs.core.rest.call(null,s__25572__$2)));
}
} else
{return null;
}
break;
}
});})(i__25545,part,c__8519__auto__,size__8520__auto__,b__25546,s__25544__$2,temp__4092__auto__))
,null,null));
});})(i__25545,part,c__8519__auto__,size__8520__auto__,b__25546,s__25544__$2,temp__4092__auto__))
;return iter__8521__auto__.call(null,part);
})());
{
var G__25597 = (i__25545 + 1);
i__25545 = G__25597;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25546),iter__25543.call(null,cljs.core.chunk_rest.call(null,s__25544__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25546),null);
}
} else
{var part = cljs.core.first.call(null,s__25544__$2);return cljs.core.cons.call(null,(function (){var iter__8521__auto__ = ((function (part,s__25544__$2,temp__4092__auto__){
return (function iter__25583(s__25584){return (new cljs.core.LazySeq(null,((function (part,s__25544__$2,temp__4092__auto__){
return (function (){var s__25584__$1 = s__25584;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__25584__$1);if(temp__4092__auto____$1)
{var s__25584__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__25584__$2))
{var c__8519__auto__ = cljs.core.chunk_first.call(null,s__25584__$2);var size__8520__auto__ = cljs.core.count.call(null,c__8519__auto__);var b__25586 = cljs.core.chunk_buffer.call(null,size__8520__auto__);if((function (){var i__25585 = 0;while(true){
if((i__25585 < size__8520__auto__))
{var multiset = cljs.core._nth.call(null,c__8519__auto__,i__25585);cljs.core.chunk_append.call(null,b__25586,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__25585,multiset,c__8519__auto__,size__8520__auto__,b__25586,s__25584__$2,temp__4092__auto____$1,part,s__25544__$2,temp__4092__auto__){
return (function (p__25591){var vec__25592 = p__25591;var index = cljs.core.nth.call(null,vec__25592,0,null);var numtimes = cljs.core.nth.call(null,vec__25592,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__25585,multiset,c__8519__auto__,size__8520__auto__,b__25586,s__25584__$2,temp__4092__auto____$1,part,s__25544__$2,temp__4092__auto__))
,multiset)));
{
var G__25598 = (i__25585 + 1);
i__25585 = G__25598;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25586),iter__25583.call(null,cljs.core.chunk_rest.call(null,s__25584__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25586),null);
}
} else
{var multiset = cljs.core.first.call(null,s__25584__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (multiset,s__25584__$2,temp__4092__auto____$1,part,s__25544__$2,temp__4092__auto__){
return (function (p__25593){var vec__25594 = p__25593;var index = cljs.core.nth.call(null,vec__25594,0,null);var numtimes = cljs.core.nth.call(null,vec__25594,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(multiset,s__25584__$2,temp__4092__auto____$1,part,s__25544__$2,temp__4092__auto__))
,multiset)),iter__25583.call(null,cljs.core.rest.call(null,s__25584__$2)));
}
} else
{return null;
}
break;
}
});})(part,s__25544__$2,temp__4092__auto__))
,null,null));
});})(part,s__25544__$2,temp__4092__auto__))
;return iter__8521__auto__.call(null,part);
})(),iter__25543.call(null,cljs.core.rest.call(null,s__25544__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8521__auto__.call(null,parts);
} else
{return null;
}
}
}
}
};
var partitions_M = function (items,var_args){
var p__25480 = null;if (arguments.length > 1) {
  p__25480 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions_M__delegate.call(this,items,p__25480);};
partitions_M.cljs$lang$maxFixedArity = 1;
partitions_M.cljs$lang$applyTo = (function (arglist__25599){
var items = cljs.core.first(arglist__25599);
var p__25480 = cljs.core.rest(arglist__25599);
return partitions_M__delegate(items,p__25480);
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
partitions.cljs$lang$applyTo = (function (arglist__25600){
var items = cljs.core.first(arglist__25600);
var args = cljs.core.rest(arglist__25600);
return partitions__delegate(items,args);
});
partitions.cljs$core$IFn$_invoke$arity$variadic = partitions__delegate;
return partitions;
})()
;
