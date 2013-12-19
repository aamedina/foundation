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
var G__176150 = cljs.core.assoc.call(null,c__$2,(j__$1 - 1),(c__$2.call(null,j__$1) - 1));
var G__176151 = (j__$1 - 1);
c__$2 = G__176150;
j__$1 = G__176151;
continue;
}
}
break;
}
}
}
});
return (new cljs.core.LazySeq(null,(function (){var c = cljs.core.vec.call(null,cljs.core.cons.call(null,null,(function (){var iter__8921__auto__ = (function iter__176146(s__176147){return (new cljs.core.LazySeq(null,(function (){var s__176147__$1 = s__176147;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__176147__$1);if(temp__4092__auto__)
{var s__176147__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__176147__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__176147__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__176149 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__176148 = 0;while(true){
if((i__176148 < size__8920__auto__))
{var j = cljs.core._nth.call(null,c__8919__auto__,i__176148);cljs.core.chunk_append.call(null,b__176149,((j + cnt) + (- (n + 1))));
{
var G__176152 = (i__176148 + 1);
i__176148 = G__176152;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__176149),iter__176146.call(null,cljs.core.chunk_rest.call(null,s__176147__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__176149),null);
}
} else
{var j = cljs.core.first.call(null,s__176147__$2);return cljs.core.cons.call(null,((j + cnt) + (- (n + 1))),iter__176146.call(null,cljs.core.rest.call(null,s__176147__$2)));
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
{return cljs.core.map.call(null,(function (p1__176153_SHARP_){return cljs.core.map.call(null,v_items,p1__176153_SHARP_);
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
var G__176154 = (i - 1);
var G__176155 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__176154;
v_seqs__$2 = G__176155;
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
cartesian_product.cljs$lang$applyTo = (function (arglist__176156){
var seqs = cljs.core.seq(arglist__176156);
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
var G__176157 = (i - 1);
i = G__176157;
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
var G__176158 = (i - 1);
i = G__176158;
continue;
}
}
break;
}
})();var v__$1 = cljs.core.assoc.call(null,v,j,v.call(null,l),l,vj);var k = (j + 1);var l__$1 = (len - 1);while(true){
if((k < l__$1))
{{
var G__176159 = cljs.core.assoc.call(null,v__$1,k,v__$1.call(null,l__$1),l__$1,v__$1.call(null,k));
var G__176160 = (k + 1);
var G__176161 = (l__$1 - 1);
v__$1 = G__176159;
k = G__176160;
l__$1 = G__176161;
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
return (function iter__176166(s__176167){return (new cljs.core.LazySeq(null,((function (f,v){
return (function (){var s__176167__$1 = s__176167;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__176167__$1);if(temp__4092__auto__)
{var s__176167__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__176167__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__176167__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__176169 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__176168 = 0;while(true){
if((i__176168 < size__8920__auto__))
{var i = cljs.core._nth.call(null,c__8919__auto__,i__176168);cljs.core.chunk_append.call(null,b__176169,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));
{
var G__176170 = (i__176168 + 1);
i__176168 = G__176170;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__176169),iter__176166.call(null,cljs.core.chunk_rest.call(null,s__176167__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__176169),null);
}
} else
{var i = cljs.core.first.call(null,s__176167__$2);return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),iter__176166.call(null,cljs.core.rest.call(null,s__176167__$2)));
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
{var v = cljs.core.vec.call(null,items);return cljs.core.map.call(null,(function (p1__176171_SHARP_){return cljs.core.map.call(null,v,p1__176171_SHARP_);
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
{return cljs.core.vec.call(null,(function (){var iter__8921__auto__ = (function iter__176176(s__176177){return (new cljs.core.LazySeq(null,(function (){var s__176177__$1 = s__176177;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__176177__$1);if(temp__4092__auto__)
{var s__176177__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__176177__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__176177__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__176179 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__176178 = 0;while(true){
if((i__176178 < size__8920__auto__))
{var i = cljs.core._nth.call(null,c__8919__auto__,i__176178);cljs.core.chunk_append.call(null,b__176179,(function (){var x__8535__auto__ = 0;var y__8536__auto__ = (i - ((n - s) - -1));return ((x__8535__auto__ > y__8536__auto__) ? x__8535__auto__ : y__8536__auto__);
})());
{
var G__176180 = (i__176178 + 1);
i__176178 = G__176180;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__176179),iter__176176.call(null,cljs.core.chunk_rest.call(null,s__176177__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__176179),null);
}
} else
{var i = cljs.core.first.call(null,s__176177__$2);return cljs.core.cons.call(null,(function (){var x__8535__auto__ = 0;var y__8536__auto__ = (i - ((n - s) - -1));return ((x__8535__auto__ > y__8536__auto__) ? x__8535__auto__ : y__8536__auto__);
})(),iter__176176.call(null,cljs.core.rest.call(null,s__176177__$2)));
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
var G__176183 = (j - 1);
j = G__176183;
continue;
}
}
break;
}
})();if((j === 0))
{return cljs.core.List.EMPTY;
} else
{var a__$1 = foundation.app.data.combinatorics.update.call(null,a,j,cljs.core.inc);var x = (cljs.core.truth_(s)?(s - (b.call(null,j) + ((cljs.core._EQ_.call(null,a__$1.call(null,j),b.call(null,j)))?1:0))):null);var vec__176182 = (function (){var a__$2 = a__$1;var b__$1 = b;var i = (j + 1);var current_max = (b__$1.call(null,j) + (((b__$1.call(null,j) === a__$2.call(null,j)))?1:0));while(true){
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
var G__176184 = cljs.core.assoc.call(null,a__$2,i,new_a_i);
var G__176185 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__176186 = (i + 1);
var G__176187 = (function (){var x__8535__auto__ = current_max;var y__8536__auto__ = (new_a_i + 1);return ((x__8535__auto__ > y__8536__auto__) ? x__8535__auto__ : y__8536__auto__);
})();
a__$2 = G__176184;
b__$1 = G__176185;
i = G__176186;
current_max = G__176187;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__176188 = cljs.core.assoc.call(null,a__$2,i,0);
var G__176189 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__176190 = (i + 1);
var G__176191 = current_max;
a__$2 = G__176188;
b__$1 = G__176189;
i = G__176190;
current_max = G__176191;
continue;
}
} else
{return null;
}
}
}
break;
}
})();var a__$2 = cljs.core.nth.call(null,vec__176182,0,null);var b__$1 = cljs.core.nth.call(null,vec__176182,1,null);return growth_strings_H.call(null,n,a__$2,b__$1,r,s);
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
var lex_partitions_H__delegate = function (N,p__176192){var map__176198 = p__176192;var map__176198__$1 = ((cljs.core.seq_QMARK_.call(null,map__176198))?cljs.core.apply.call(null,cljs.core.hash_map,map__176198):map__176198);var from = cljs.core.get.call(null,map__176198__$1,new cljs.core.Keyword(null,"min","min",1014012356));var to = cljs.core.get.call(null,map__176198__$1,new cljs.core.Keyword(null,"max","max",1014012118));if(cljs.core._EQ_.call(null,N,0))
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
{var growth_strings = foundation.app.data.combinatorics.growth_strings_H.call(null,N,to__$1,from__$1);var iter__8921__auto__ = (function iter__176199(s__176200){return (new cljs.core.LazySeq(null,(function (){var s__176200__$1 = s__176200;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__176200__$1);if(temp__4092__auto__)
{var s__176200__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__176200__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__176200__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__176202 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__176201 = 0;while(true){
if((i__176201 < size__8920__auto__))
{var growth_string = cljs.core._nth.call(null,c__8919__auto__,i__176201);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));cljs.core.chunk_append.call(null,b__176202,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))));
{
var G__176203 = (i__176201 + 1);
i__176201 = G__176203;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__176202),iter__176199.call(null,cljs.core.chunk_rest.call(null,s__176200__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__176202),null);
}
} else
{var growth_string = cljs.core.first.call(null,s__176200__$2);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));return cljs.core.cons.call(null,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))),iter__176199.call(null,cljs.core.rest.call(null,s__176200__$2)));
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
var p__176192 = null;if (arguments.length > 1) {
  p__176192 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return lex_partitions_H__delegate.call(this,N,p__176192);};
lex_partitions_H.cljs$lang$maxFixedArity = 1;
lex_partitions_H.cljs$lang$applyTo = (function (arglist__176204){
var N = cljs.core.first(arglist__176204);
var p__176192 = cljs.core.rest(arglist__176204);
return lex_partitions_H__delegate(N,p__176192);
});
lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic = lex_partitions_H__delegate;
return lex_partitions_H;
})()
;
/**
* @param {...*} var_args
*/
foundation.app.data.combinatorics.partitions_H = (function() { 
var partitions_H__delegate = function (items,args){var items__$1 = cljs.core.vec.call(null,items);var N = cljs.core.count.call(null,items__$1);var lex = cljs.core.apply.call(null,foundation.app.data.combinatorics.lex_partitions_H,N,args);var iter__8921__auto__ = (function iter__176225(s__176226){return (new cljs.core.LazySeq(null,(function (){var s__176226__$1 = s__176226;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__176226__$1);if(temp__4092__auto__)
{var s__176226__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__176226__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__176226__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__176228 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__176227 = 0;while(true){
if((i__176227 < size__8920__auto__))
{var parts = cljs.core._nth.call(null,c__8919__auto__,i__176227);cljs.core.chunk_append.call(null,b__176228,(function (){var iter__8921__auto__ = ((function (i__176227,parts,c__8919__auto__,size__8920__auto__,b__176228,s__176226__$2,temp__4092__auto__){
return (function iter__176237(s__176238){return (new cljs.core.LazySeq(null,((function (i__176227,parts,c__8919__auto__,size__8920__auto__,b__176228,s__176226__$2,temp__4092__auto__){
return (function (){var s__176238__$1 = s__176238;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__176238__$1);if(temp__4092__auto____$1)
{var s__176238__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__176238__$2))
{var c__8919__auto____$1 = cljs.core.chunk_first.call(null,s__176238__$2);var size__8920__auto____$1 = cljs.core.count.call(null,c__8919__auto____$1);var b__176240 = cljs.core.chunk_buffer.call(null,size__8920__auto____$1);if((function (){var i__176239 = 0;while(true){
if((i__176239 < size__8920__auto____$1))
{var part = cljs.core._nth.call(null,c__8919__auto____$1,i__176239);cljs.core.chunk_append.call(null,b__176240,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__176239,i__176227,part,c__8919__auto____$1,size__8920__auto____$1,b__176240,s__176238__$2,temp__4092__auto____$1,parts,c__8919__auto__,size__8920__auto__,b__176228,s__176226__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__176239,i__176227,part,c__8919__auto____$1,size__8920__auto____$1,b__176240,s__176238__$2,temp__4092__auto____$1,parts,c__8919__auto__,size__8920__auto__,b__176228,s__176226__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__176245 = (i__176239 + 1);
i__176239 = G__176245;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__176240),iter__176237.call(null,cljs.core.chunk_rest.call(null,s__176238__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__176240),null);
}
} else
{var part = cljs.core.first.call(null,s__176238__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__176227,part,s__176238__$2,temp__4092__auto____$1,parts,c__8919__auto__,size__8920__auto__,b__176228,s__176226__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__176227,part,s__176238__$2,temp__4092__auto____$1,parts,c__8919__auto__,size__8920__auto__,b__176228,s__176226__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__176237.call(null,cljs.core.rest.call(null,s__176238__$2)));
}
} else
{return null;
}
break;
}
});})(i__176227,parts,c__8919__auto__,size__8920__auto__,b__176228,s__176226__$2,temp__4092__auto__))
,null,null));
});})(i__176227,parts,c__8919__auto__,size__8920__auto__,b__176228,s__176226__$2,temp__4092__auto__))
;return iter__8921__auto__.call(null,parts);
})());
{
var G__176246 = (i__176227 + 1);
i__176227 = G__176246;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__176228),iter__176225.call(null,cljs.core.chunk_rest.call(null,s__176226__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__176228),null);
}
} else
{var parts = cljs.core.first.call(null,s__176226__$2);return cljs.core.cons.call(null,(function (){var iter__8921__auto__ = ((function (parts,s__176226__$2,temp__4092__auto__){
return (function iter__176241(s__176242){return (new cljs.core.LazySeq(null,((function (parts,s__176226__$2,temp__4092__auto__){
return (function (){var s__176242__$1 = s__176242;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__176242__$1);if(temp__4092__auto____$1)
{var s__176242__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__176242__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__176242__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__176244 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__176243 = 0;while(true){
if((i__176243 < size__8920__auto__))
{var part = cljs.core._nth.call(null,c__8919__auto__,i__176243);cljs.core.chunk_append.call(null,b__176244,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__176243,part,c__8919__auto__,size__8920__auto__,b__176244,s__176242__$2,temp__4092__auto____$1,parts,s__176226__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__176243,part,c__8919__auto__,size__8920__auto__,b__176244,s__176242__$2,temp__4092__auto____$1,parts,s__176226__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__176247 = (i__176243 + 1);
i__176243 = G__176247;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__176244),iter__176241.call(null,cljs.core.chunk_rest.call(null,s__176242__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__176244),null);
}
} else
{var part = cljs.core.first.call(null,s__176242__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (part,s__176242__$2,temp__4092__auto____$1,parts,s__176226__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(part,s__176242__$2,temp__4092__auto____$1,parts,s__176226__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__176241.call(null,cljs.core.rest.call(null,s__176242__$2)));
}
} else
{return null;
}
break;
}
});})(parts,s__176226__$2,temp__4092__auto__))
,null,null));
});})(parts,s__176226__$2,temp__4092__auto__))
;return iter__8921__auto__.call(null,parts);
})(),iter__176225.call(null,cljs.core.rest.call(null,s__176226__$2)));
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
partitions_H.cljs$lang$applyTo = (function (arglist__176248){
var items = cljs.core.first(arglist__176248);
var args = cljs.core.rest(arglist__176248);
return partitions_H__delegate(items,args);
});
partitions_H.cljs$core$IFn$_invoke$arity$variadic = partitions_H__delegate;
return partitions_H;
})()
;
foundation.app.data.combinatorics.multiset_partitions_M = (function() {
var multiset_partitions_M = null;
var multiset_partitions_M__3 = (function (multiset,r,s){var n = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,multiset));var m = cljs.core.count.call(null,multiset);var f = cljs.core.PersistentVector.EMPTY;var c = cljs.core.PersistentVector.EMPTY;var u = cljs.core.PersistentVector.EMPTY;var v = cljs.core.PersistentVector.EMPTY;var vec__176271 = (function (){var j = 0;var c__$1 = c;var u__$1 = u;var v__$1 = v;while(true){
if(cljs.core._EQ_.call(null,j,m))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,u__$1,v__$1], null);
} else
{{
var G__176293 = (j + 1);
var G__176294 = cljs.core.assoc.call(null,c__$1,j,(j + 1));
var G__176295 = cljs.core.assoc.call(null,u__$1,j,multiset.call(null,(j + 1)));
var G__176296 = cljs.core.assoc.call(null,v__$1,j,multiset.call(null,(j + 1)));
j = G__176293;
c__$1 = G__176294;
u__$1 = G__176295;
v__$1 = G__176296;
continue;
}
}
break;
}
})();var c__$1 = cljs.core.nth.call(null,vec__176271,0,null);var u__$1 = cljs.core.nth.call(null,vec__176271,1,null);var v__$1 = cljs.core.nth.call(null,vec__176271,2,null);var a = 0;var b = m;var l = 0;var f__$1 = cljs.core.assoc.call(null,f,0,0,1,m);var stack = cljs.core.List.EMPTY;return multiset_partitions_M.call(null,n,m,f__$1,c__$1,u__$1,v__$1,a,b,l,r,s);
});
var multiset_partitions_M__11 = (function (n,m,f,c,u,v,a,b,l,r,s){while(true){
var vec__176272 = (function (){var j = a;var k = b;var x = false;var u__$1 = u;var v__$1 = v;var c__$1 = c;while(true){
if((j >= b))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [u__$1,v__$1,c__$1,j,k], null);
} else
{var u__$2 = cljs.core.assoc.call(null,u__$1,k,(u__$1.call(null,j) - v__$1.call(null,j)));if(cljs.core._EQ_.call(null,u__$2.call(null,k),0))
{{
var G__176297 = (j + 1);
var G__176298 = k;
var G__176299 = true;
var G__176300 = u__$2;
var G__176301 = v__$1;
var G__176302 = c__$1;
j = G__176297;
k = G__176298;
x = G__176299;
u__$1 = G__176300;
v__$1 = G__176301;
c__$1 = G__176302;
continue;
}
} else
{if(!(x))
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,(function (){var x__8542__auto__ = v__$1.call(null,j);var y__8543__auto__ = u__$2.call(null,k);return ((x__8542__auto__ < y__8543__auto__) ? x__8542__auto__ : y__8543__auto__);
})());var x__$1 = (u__$2.call(null,k) < v__$2.call(null,j));var k__$1 = (k + 1);var j__$1 = (j + 1);{
var G__176303 = j__$1;
var G__176304 = k__$1;
var G__176305 = x__$1;
var G__176306 = u__$2;
var G__176307 = v__$2;
var G__176308 = c__$2;
j = G__176303;
k = G__176304;
x = G__176305;
u__$1 = G__176306;
v__$1 = G__176307;
c__$1 = G__176308;
continue;
}
} else
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,u__$2.call(null,k));var k__$1 = (k + 1);var j__$1 = (j + 1);{
var G__176309 = j__$1;
var G__176310 = k__$1;
var G__176311 = x;
var G__176312 = u__$2;
var G__176313 = v__$2;
var G__176314 = c__$2;
j = G__176309;
k = G__176310;
x = G__176311;
u__$1 = G__176312;
v__$1 = G__176313;
c__$1 = G__176314;
continue;
}
}
}
}
break;
}
})();var u__$1 = cljs.core.nth.call(null,vec__176272,0,null);var v__$1 = cljs.core.nth.call(null,vec__176272,1,null);var c__$1 = cljs.core.nth.call(null,vec__176272,2,null);var j = cljs.core.nth.call(null,vec__176272,3,null);var k = cljs.core.nth.call(null,vec__176272,4,null);if(cljs.core.truth_((function (){var and__8211__auto__ = r;if(cljs.core.truth_(and__8211__auto__))
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
var G__176315 = n;
var G__176316 = m;
var G__176317 = f__$1;
var G__176318 = c__$1;
var G__176319 = u__$1;
var G__176320 = v__$1;
var G__176321 = a__$1;
var G__176322 = b__$1;
var G__176323 = l__$1;
var G__176324 = r;
var G__176325 = s;
n = G__176315;
m = G__176316;
f = G__176317;
c = G__176318;
u = G__176319;
v = G__176320;
a = G__176321;
b = G__176322;
l = G__176323;
r = G__176324;
s = G__176325;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var part = (function (){var iter__8921__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s){
return (function iter__176273(s__176274){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s){
return (function (){var s__176274__$1 = s__176274;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__176274__$1);if(temp__4092__auto__)
{var s__176274__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__176274__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__176274__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__176276 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__176275 = 0;while(true){
if((i__176275 < size__8920__auto__))
{var y = cljs.core._nth.call(null,c__8919__auto__,i__176275);cljs.core.chunk_append.call(null,b__176276,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + 1)) - 1);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8921__auto__ = ((function (i__176275,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8919__auto__,size__8920__auto__,b__176276,s__176274__$2,temp__4092__auto__){
return (function iter__176285(s__176286){return (new cljs.core.LazySeq(null,((function (i__176275,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8919__auto__,size__8920__auto__,b__176276,s__176274__$2,temp__4092__auto__){
return (function (){var s__176286__$1 = s__176286;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__176286__$1);if(temp__4092__auto____$1)
{var s__176286__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__176286__$2))
{var c__8919__auto____$1 = cljs.core.chunk_first.call(null,s__176286__$2);var size__8920__auto____$1 = cljs.core.count.call(null,c__8919__auto____$1);var b__176288 = cljs.core.chunk_buffer.call(null,size__8920__auto____$1);if((function (){var i__176287 = 0;while(true){
if((i__176287 < size__8920__auto____$1))
{var z = cljs.core._nth.call(null,c__8919__auto____$1,i__176287);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{cljs.core.chunk_append.call(null,b__176288,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));
{
var G__176326 = (i__176287 + 1);
i__176287 = G__176326;
continue;
}
} else
{{
var G__176327 = (i__176287 + 1);
i__176287 = G__176327;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__176288),iter__176285.call(null,cljs.core.chunk_rest.call(null,s__176286__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__176288),null);
}
} else
{var z = cljs.core.first.call(null,s__176286__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),iter__176285.call(null,cljs.core.rest.call(null,s__176286__$2)));
} else
{{
var G__176328 = cljs.core.rest.call(null,s__176286__$2);
s__176286__$1 = G__176328;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__176275,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8919__auto__,size__8920__auto__,b__176276,s__176274__$2,temp__4092__auto__))
,null,null));
});})(i__176275,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8919__auto__,size__8920__auto__,b__176276,s__176274__$2,temp__4092__auto__))
;return iter__8921__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + 1)));
})());
})());
{
var G__176329 = (i__176275 + 1);
i__176275 = G__176329;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__176276),iter__176273.call(null,cljs.core.chunk_rest.call(null,s__176274__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__176276),null);
}
} else
{var y = cljs.core.first.call(null,s__176274__$2);return cljs.core.cons.call(null,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + 1)) - 1);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8921__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__176274__$2,temp__4092__auto__){
return (function iter__176289(s__176290){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__176274__$2,temp__4092__auto__){
return (function (){var s__176290__$1 = s__176290;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__176290__$1);if(temp__4092__auto____$1)
{var s__176290__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__176290__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__176290__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__176292 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__176291 = 0;while(true){
if((i__176291 < size__8920__auto__))
{var z = cljs.core._nth.call(null,c__8919__auto__,i__176291);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{cljs.core.chunk_append.call(null,b__176292,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));
{
var G__176330 = (i__176291 + 1);
i__176291 = G__176330;
continue;
}
} else
{{
var G__176331 = (i__176291 + 1);
i__176291 = G__176331;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__176292),iter__176289.call(null,cljs.core.chunk_rest.call(null,s__176290__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__176292),null);
}
} else
{var z = cljs.core.first.call(null,s__176290__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),iter__176289.call(null,cljs.core.rest.call(null,s__176290__$2)));
} else
{{
var G__176332 = cljs.core.rest.call(null,s__176290__$2);
s__176290__$1 = G__176332;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__176274__$2,temp__4092__auto__))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__176274__$2,temp__4092__auto__))
;return iter__8921__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + 1)));
})());
})(),iter__176273.call(null,cljs.core.rest.call(null,s__176274__$2)));
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
var G__176341 = (j - 1);
j = G__176341;
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
return (function iter__176337(s__176338){return (new cljs.core.LazySeq(null,((function (v__$1){
return (function (){var s__176338__$1 = s__176338;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__176338__$1);if(temp__4092__auto__)
{var s__176338__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__176338__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__176338__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__176340 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__176339 = 0;while(true){
if((i__176339 < size__8920__auto__))
{var i = cljs.core._nth.call(null,c__8919__auto__,i__176339);cljs.core.chunk_append.call(null,b__176340,(u.call(null,i) - v__$1.call(null,i)));
{
var G__176342 = (i__176339 + 1);
i__176339 = G__176342;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__176340),iter__176337.call(null,cljs.core.chunk_rest.call(null,s__176338__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__176340),null);
}
} else
{var i = cljs.core.first.call(null,s__176338__$2);return cljs.core.cons.call(null,(u.call(null,i) - v__$1.call(null,i)),iter__176337.call(null,cljs.core.rest.call(null,s__176338__$2)));
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
var G__176343 = cljs.core.rest.call(null,ks);
var G__176344 = cljs.core.assoc.call(null,v__$2,k,u.call(null,k));
ks = G__176343;
v__$2 = G__176344;
continue;
}
}
break;
}
})();var min_partitions_after_this = (cljs.core.truth_(s)?(s - (l + 1)):0);var amount_to_dec = (cljs.core.truth_(s)?(function (){var x__8535__auto__ = 0;var y__8536__auto__ = (min_partitions_after_this - diff_uv);return ((x__8535__auto__ > y__8536__auto__) ? x__8535__auto__ : y__8536__auto__);
})():0);var v__$3 = ((cljs.core._EQ_.call(null,amount_to_dec,0))?v__$2:(function (){var k_1 = (b - 1);var v__$3 = v__$2;var amount = amount_to_dec;while(true){
var vk = v__$3.call(null,k_1);if((amount > vk))
{{
var G__176345 = (k_1 - 1);
var G__176346 = cljs.core.assoc.call(null,v__$3,k_1,0);
var G__176347 = (amount - vk);
k_1 = G__176345;
v__$3 = G__176346;
amount = G__176347;
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
var partitions_M__delegate = function (items,p__176348){var map__176406 = p__176348;var map__176406__$1 = ((cljs.core.seq_QMARK_.call(null,map__176406))?cljs.core.apply.call(null,cljs.core.hash_map,map__176406):map__176406);var from = cljs.core.get.call(null,map__176406__$1,new cljs.core.Keyword(null,"min","min",1014012356));var to = cljs.core.get.call(null,map__176406__$1,new cljs.core.Keyword(null,"max","max",1014012118));if(cljs.core._EQ_.call(null,cljs.core.count.call(null,items),0))
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
{var start_multiset = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8921__auto__ = (function iter__176407(s__176408){return (new cljs.core.LazySeq(null,(function (){var s__176408__$1 = s__176408;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__176408__$1);if(temp__4092__auto__)
{var s__176408__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__176408__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__176408__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__176410 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__176409 = 0;while(true){
if((i__176409 < size__8920__auto__))
{var i = cljs.core._nth.call(null,c__8919__auto__,i__176409);var j = (i + 1);cljs.core.chunk_append.call(null,b__176410,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null));
{
var G__176463 = (i__176409 + 1);
i__176409 = G__176463;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__176410),iter__176407.call(null,cljs.core.chunk_rest.call(null,s__176408__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__176410),null);
}
} else
{var i = cljs.core.first.call(null,s__176408__$2);var j = (i + 1);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null),iter__176407.call(null,cljs.core.rest.call(null,s__176408__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,cljs.core.range.call(null,M));
})());var parts = foundation.app.data.combinatorics.multiset_partitions_M.call(null,start_multiset,to__$1,from__$1);var iter__8921__auto__ = (function iter__176411(s__176412){return (new cljs.core.LazySeq(null,(function (){var s__176412__$1 = s__176412;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__176412__$1);if(temp__4092__auto__)
{var s__176412__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__176412__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__176412__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__176414 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__176413 = 0;while(true){
if((i__176413 < size__8920__auto__))
{var part = cljs.core._nth.call(null,c__8919__auto__,i__176413);cljs.core.chunk_append.call(null,b__176414,(function (){var iter__8921__auto__ = ((function (i__176413,part,c__8919__auto__,size__8920__auto__,b__176414,s__176412__$2,temp__4092__auto__){
return (function iter__176439(s__176440){return (new cljs.core.LazySeq(null,((function (i__176413,part,c__8919__auto__,size__8920__auto__,b__176414,s__176412__$2,temp__4092__auto__){
return (function (){var s__176440__$1 = s__176440;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__176440__$1);if(temp__4092__auto____$1)
{var s__176440__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__176440__$2))
{var c__8919__auto____$1 = cljs.core.chunk_first.call(null,s__176440__$2);var size__8920__auto____$1 = cljs.core.count.call(null,c__8919__auto____$1);var b__176442 = cljs.core.chunk_buffer.call(null,size__8920__auto____$1);if((function (){var i__176441 = 0;while(true){
if((i__176441 < size__8920__auto____$1))
{var multiset = cljs.core._nth.call(null,c__8919__auto____$1,i__176441);cljs.core.chunk_append.call(null,b__176442,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__176441,i__176413,multiset,c__8919__auto____$1,size__8920__auto____$1,b__176442,s__176440__$2,temp__4092__auto____$1,part,c__8919__auto__,size__8920__auto__,b__176414,s__176412__$2,temp__4092__auto__){
return (function (p__176447){var vec__176448 = p__176447;var index = cljs.core.nth.call(null,vec__176448,0,null);var numtimes = cljs.core.nth.call(null,vec__176448,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__176441,i__176413,multiset,c__8919__auto____$1,size__8920__auto____$1,b__176442,s__176440__$2,temp__4092__auto____$1,part,c__8919__auto__,size__8920__auto__,b__176414,s__176412__$2,temp__4092__auto__))
,multiset)));
{
var G__176464 = (i__176441 + 1);
i__176441 = G__176464;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__176442),iter__176439.call(null,cljs.core.chunk_rest.call(null,s__176440__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__176442),null);
}
} else
{var multiset = cljs.core.first.call(null,s__176440__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__176413,multiset,s__176440__$2,temp__4092__auto____$1,part,c__8919__auto__,size__8920__auto__,b__176414,s__176412__$2,temp__4092__auto__){
return (function (p__176449){var vec__176450 = p__176449;var index = cljs.core.nth.call(null,vec__176450,0,null);var numtimes = cljs.core.nth.call(null,vec__176450,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__176413,multiset,s__176440__$2,temp__4092__auto____$1,part,c__8919__auto__,size__8920__auto__,b__176414,s__176412__$2,temp__4092__auto__))
,multiset)),iter__176439.call(null,cljs.core.rest.call(null,s__176440__$2)));
}
} else
{return null;
}
break;
}
});})(i__176413,part,c__8919__auto__,size__8920__auto__,b__176414,s__176412__$2,temp__4092__auto__))
,null,null));
});})(i__176413,part,c__8919__auto__,size__8920__auto__,b__176414,s__176412__$2,temp__4092__auto__))
;return iter__8921__auto__.call(null,part);
})());
{
var G__176465 = (i__176413 + 1);
i__176413 = G__176465;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__176414),iter__176411.call(null,cljs.core.chunk_rest.call(null,s__176412__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__176414),null);
}
} else
{var part = cljs.core.first.call(null,s__176412__$2);return cljs.core.cons.call(null,(function (){var iter__8921__auto__ = ((function (part,s__176412__$2,temp__4092__auto__){
return (function iter__176451(s__176452){return (new cljs.core.LazySeq(null,((function (part,s__176412__$2,temp__4092__auto__){
return (function (){var s__176452__$1 = s__176452;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__176452__$1);if(temp__4092__auto____$1)
{var s__176452__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__176452__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__176452__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__176454 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__176453 = 0;while(true){
if((i__176453 < size__8920__auto__))
{var multiset = cljs.core._nth.call(null,c__8919__auto__,i__176453);cljs.core.chunk_append.call(null,b__176454,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__176453,multiset,c__8919__auto__,size__8920__auto__,b__176454,s__176452__$2,temp__4092__auto____$1,part,s__176412__$2,temp__4092__auto__){
return (function (p__176459){var vec__176460 = p__176459;var index = cljs.core.nth.call(null,vec__176460,0,null);var numtimes = cljs.core.nth.call(null,vec__176460,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__176453,multiset,c__8919__auto__,size__8920__auto__,b__176454,s__176452__$2,temp__4092__auto____$1,part,s__176412__$2,temp__4092__auto__))
,multiset)));
{
var G__176466 = (i__176453 + 1);
i__176453 = G__176466;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__176454),iter__176451.call(null,cljs.core.chunk_rest.call(null,s__176452__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__176454),null);
}
} else
{var multiset = cljs.core.first.call(null,s__176452__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (multiset,s__176452__$2,temp__4092__auto____$1,part,s__176412__$2,temp__4092__auto__){
return (function (p__176461){var vec__176462 = p__176461;var index = cljs.core.nth.call(null,vec__176462,0,null);var numtimes = cljs.core.nth.call(null,vec__176462,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(multiset,s__176452__$2,temp__4092__auto____$1,part,s__176412__$2,temp__4092__auto__))
,multiset)),iter__176451.call(null,cljs.core.rest.call(null,s__176452__$2)));
}
} else
{return null;
}
break;
}
});})(part,s__176412__$2,temp__4092__auto__))
,null,null));
});})(part,s__176412__$2,temp__4092__auto__))
;return iter__8921__auto__.call(null,part);
})(),iter__176411.call(null,cljs.core.rest.call(null,s__176412__$2)));
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
var p__176348 = null;if (arguments.length > 1) {
  p__176348 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions_M__delegate.call(this,items,p__176348);};
partitions_M.cljs$lang$maxFixedArity = 1;
partitions_M.cljs$lang$applyTo = (function (arglist__176467){
var items = cljs.core.first(arglist__176467);
var p__176348 = cljs.core.rest(arglist__176467);
return partitions_M__delegate(items,p__176348);
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
partitions.cljs$lang$applyTo = (function (arglist__176468){
var items = cljs.core.first(arglist__176468);
var args = cljs.core.rest(arglist__176468);
return partitions__delegate(items,args);
});
partitions.cljs$core$IFn$_invoke$arity$variadic = partitions__delegate;
return partitions;
})()
;

//# sourceMappingURL=combinatorics.js.map