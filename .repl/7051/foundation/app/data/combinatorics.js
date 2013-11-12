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
var G__29575 = cljs.core.assoc.call(null,c__$2,(j__$1 - 1),(c__$2.call(null,j__$1) - 1));
var G__29576 = (j__$1 - 1);
c__$2 = G__29575;
j__$1 = G__29576;
continue;
}
}
break;
}
}
}
});
return (new cljs.core.LazySeq(null,(function (){var c = cljs.core.vec.call(null,cljs.core.cons.call(null,null,(function (){var iter__8125__auto__ = (function iter__29571(s__29572){return (new cljs.core.LazySeq(null,(function (){var s__29572__$1 = s__29572;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__29572__$1);if(temp__4092__auto__)
{var s__29572__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29572__$2))
{var c__8123__auto__ = cljs.core.chunk_first.call(null,s__29572__$2);var size__8124__auto__ = cljs.core.count.call(null,c__8123__auto__);var b__29574 = cljs.core.chunk_buffer.call(null,size__8124__auto__);if((function (){var i__29573 = 0;while(true){
if((i__29573 < size__8124__auto__))
{var j = cljs.core._nth.call(null,c__8123__auto__,i__29573);cljs.core.chunk_append.call(null,b__29574,((j + cnt) + (- (n + 1))));
{
var G__29577 = (i__29573 + 1);
i__29573 = G__29577;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29574),iter__29571.call(null,cljs.core.chunk_rest.call(null,s__29572__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29574),null);
}
} else
{var j = cljs.core.first.call(null,s__29572__$2);return cljs.core.cons.call(null,((j + cnt) + (- (n + 1))),iter__29571.call(null,cljs.core.rest.call(null,s__29572__$2)));
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
{return cljs.core.map.call(null,(function (p1__29578_SHARP_){return cljs.core.map.call(null,v_items,p1__29578_SHARP_);
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
var G__29579 = (i - 1);
var G__29580 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__29579;
v_seqs__$2 = G__29580;
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
cartesian_product.cljs$lang$applyTo = (function (arglist__29581){
var seqs = cljs.core.seq(arglist__29581);
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
var G__29582 = (i - 1);
i = G__29582;
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
var G__29583 = (i - 1);
i = G__29583;
continue;
}
}
break;
}
})();var v__$1 = cljs.core.assoc.call(null,v,j,v.call(null,l),l,vj);var k = (j + 1);var l__$1 = (len - 1);while(true){
if((k < l__$1))
{{
var G__29584 = cljs.core.assoc.call(null,v__$1,k,v__$1.call(null,l__$1),l__$1,v__$1.call(null,k));
var G__29585 = (k + 1);
var G__29586 = (l__$1 - 1);
v__$1 = G__29584;
k = G__29585;
l__$1 = G__29586;
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
return (function iter__29591(s__29592){return (new cljs.core.LazySeq(null,((function (f,v){
return (function (){var s__29592__$1 = s__29592;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__29592__$1);if(temp__4092__auto__)
{var s__29592__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29592__$2))
{var c__8123__auto__ = cljs.core.chunk_first.call(null,s__29592__$2);var size__8124__auto__ = cljs.core.count.call(null,c__8123__auto__);var b__29594 = cljs.core.chunk_buffer.call(null,size__8124__auto__);if((function (){var i__29593 = 0;while(true){
if((i__29593 < size__8124__auto__))
{var i = cljs.core._nth.call(null,c__8123__auto__,i__29593);cljs.core.chunk_append.call(null,b__29594,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));
{
var G__29595 = (i__29593 + 1);
i__29593 = G__29595;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29594),iter__29591.call(null,cljs.core.chunk_rest.call(null,s__29592__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29594),null);
}
} else
{var i = cljs.core.first.call(null,s__29592__$2);return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),iter__29591.call(null,cljs.core.rest.call(null,s__29592__$2)));
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
{var v = cljs.core.vec.call(null,items);return cljs.core.map.call(null,(function (p1__29596_SHARP_){return cljs.core.map.call(null,v,p1__29596_SHARP_);
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
{return cljs.core.vec.call(null,(function (){var iter__8125__auto__ = (function iter__29601(s__29602){return (new cljs.core.LazySeq(null,(function (){var s__29602__$1 = s__29602;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__29602__$1);if(temp__4092__auto__)
{var s__29602__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29602__$2))
{var c__8123__auto__ = cljs.core.chunk_first.call(null,s__29602__$2);var size__8124__auto__ = cljs.core.count.call(null,c__8123__auto__);var b__29604 = cljs.core.chunk_buffer.call(null,size__8124__auto__);if((function (){var i__29603 = 0;while(true){
if((i__29603 < size__8124__auto__))
{var i = cljs.core._nth.call(null,c__8123__auto__,i__29603);cljs.core.chunk_append.call(null,b__29604,(function (){var x__7744__auto__ = 0;var y__7745__auto__ = (i - ((n - s) - -1));return ((x__7744__auto__ > y__7745__auto__) ? x__7744__auto__ : y__7745__auto__);
})());
{
var G__29605 = (i__29603 + 1);
i__29603 = G__29605;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29604),iter__29601.call(null,cljs.core.chunk_rest.call(null,s__29602__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29604),null);
}
} else
{var i = cljs.core.first.call(null,s__29602__$2);return cljs.core.cons.call(null,(function (){var x__7744__auto__ = 0;var y__7745__auto__ = (i - ((n - s) - -1));return ((x__7744__auto__ > y__7745__auto__) ? x__7744__auto__ : y__7745__auto__);
})(),iter__29601.call(null,cljs.core.rest.call(null,s__29602__$2)));
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
var G__29608 = (j - 1);
j = G__29608;
continue;
}
}
break;
}
})();if((j === 0))
{return cljs.core.List.EMPTY;
} else
{var a__$1 = foundation.app.data.combinatorics.update.call(null,a,j,cljs.core.inc);var x = (cljs.core.truth_(s)?(s - (b.call(null,j) + ((cljs.core._EQ_.call(null,a__$1.call(null,j),b.call(null,j)))?1:0))):null);var vec__29607 = (function (){var a__$2 = a__$1;var b__$1 = b;var i = (j + 1);var current_max = (b__$1.call(null,j) + (((b__$1.call(null,j) === a__$2.call(null,j)))?1:0));while(true){
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
var G__29609 = cljs.core.assoc.call(null,a__$2,i,new_a_i);
var G__29610 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__29611 = (i + 1);
var G__29612 = (function (){var x__7744__auto__ = current_max;var y__7745__auto__ = (new_a_i + 1);return ((x__7744__auto__ > y__7745__auto__) ? x__7744__auto__ : y__7745__auto__);
})();
a__$2 = G__29609;
b__$1 = G__29610;
i = G__29611;
current_max = G__29612;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__29613 = cljs.core.assoc.call(null,a__$2,i,0);
var G__29614 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__29615 = (i + 1);
var G__29616 = current_max;
a__$2 = G__29613;
b__$1 = G__29614;
i = G__29615;
current_max = G__29616;
continue;
}
} else
{return null;
}
}
}
break;
}
})();var a__$2 = cljs.core.nth.call(null,vec__29607,0,null);var b__$1 = cljs.core.nth.call(null,vec__29607,1,null);return growth_strings_H.call(null,n,a__$2,b__$1,r,s);
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
var lex_partitions_H__delegate = function (N,p__29617){var map__29623 = p__29617;var map__29623__$1 = ((cljs.core.seq_QMARK_.call(null,map__29623))?cljs.core.apply.call(null,cljs.core.hash_map,map__29623):map__29623);var from = cljs.core.get.call(null,map__29623__$1,new cljs.core.Keyword(null,"min","min",1014012356));var to = cljs.core.get.call(null,map__29623__$1,new cljs.core.Keyword(null,"max","max",1014012118));if(cljs.core._EQ_.call(null,N,0))
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
{var growth_strings = foundation.app.data.combinatorics.growth_strings_H.call(null,N,to__$1,from__$1);var iter__8125__auto__ = (function iter__29624(s__29625){return (new cljs.core.LazySeq(null,(function (){var s__29625__$1 = s__29625;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__29625__$1);if(temp__4092__auto__)
{var s__29625__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29625__$2))
{var c__8123__auto__ = cljs.core.chunk_first.call(null,s__29625__$2);var size__8124__auto__ = cljs.core.count.call(null,c__8123__auto__);var b__29627 = cljs.core.chunk_buffer.call(null,size__8124__auto__);if((function (){var i__29626 = 0;while(true){
if((i__29626 < size__8124__auto__))
{var growth_string = cljs.core._nth.call(null,c__8123__auto__,i__29626);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));cljs.core.chunk_append.call(null,b__29627,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))));
{
var G__29628 = (i__29626 + 1);
i__29626 = G__29628;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29627),iter__29624.call(null,cljs.core.chunk_rest.call(null,s__29625__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29627),null);
}
} else
{var growth_string = cljs.core.first.call(null,s__29625__$2);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));return cljs.core.cons.call(null,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))),iter__29624.call(null,cljs.core.rest.call(null,s__29625__$2)));
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
var p__29617 = null;if (arguments.length > 1) {
  p__29617 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return lex_partitions_H__delegate.call(this,N,p__29617);};
lex_partitions_H.cljs$lang$maxFixedArity = 1;
lex_partitions_H.cljs$lang$applyTo = (function (arglist__29629){
var N = cljs.core.first(arglist__29629);
var p__29617 = cljs.core.rest(arglist__29629);
return lex_partitions_H__delegate(N,p__29617);
});
lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic = lex_partitions_H__delegate;
return lex_partitions_H;
})()
;
/**
* @param {...*} var_args
*/
foundation.app.data.combinatorics.partitions_H = (function() { 
var partitions_H__delegate = function (items,args){var items__$1 = cljs.core.vec.call(null,items);var N = cljs.core.count.call(null,items__$1);var lex = cljs.core.apply.call(null,foundation.app.data.combinatorics.lex_partitions_H,N,args);var iter__8125__auto__ = (function iter__29650(s__29651){return (new cljs.core.LazySeq(null,(function (){var s__29651__$1 = s__29651;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__29651__$1);if(temp__4092__auto__)
{var s__29651__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29651__$2))
{var c__8123__auto__ = cljs.core.chunk_first.call(null,s__29651__$2);var size__8124__auto__ = cljs.core.count.call(null,c__8123__auto__);var b__29653 = cljs.core.chunk_buffer.call(null,size__8124__auto__);if((function (){var i__29652 = 0;while(true){
if((i__29652 < size__8124__auto__))
{var parts = cljs.core._nth.call(null,c__8123__auto__,i__29652);cljs.core.chunk_append.call(null,b__29653,(function (){var iter__8125__auto__ = ((function (i__29652,parts,c__8123__auto__,size__8124__auto__,b__29653,s__29651__$2,temp__4092__auto__){
return (function iter__29662(s__29663){return (new cljs.core.LazySeq(null,((function (i__29652,parts,c__8123__auto__,size__8124__auto__,b__29653,s__29651__$2,temp__4092__auto__){
return (function (){var s__29663__$1 = s__29663;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__29663__$1);if(temp__4092__auto____$1)
{var s__29663__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__29663__$2))
{var c__8123__auto____$1 = cljs.core.chunk_first.call(null,s__29663__$2);var size__8124__auto____$1 = cljs.core.count.call(null,c__8123__auto____$1);var b__29665 = cljs.core.chunk_buffer.call(null,size__8124__auto____$1);if((function (){var i__29664 = 0;while(true){
if((i__29664 < size__8124__auto____$1))
{var part = cljs.core._nth.call(null,c__8123__auto____$1,i__29664);cljs.core.chunk_append.call(null,b__29665,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__29664,i__29652,part,c__8123__auto____$1,size__8124__auto____$1,b__29665,s__29663__$2,temp__4092__auto____$1,parts,c__8123__auto__,size__8124__auto__,b__29653,s__29651__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__29664,i__29652,part,c__8123__auto____$1,size__8124__auto____$1,b__29665,s__29663__$2,temp__4092__auto____$1,parts,c__8123__auto__,size__8124__auto__,b__29653,s__29651__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__29670 = (i__29664 + 1);
i__29664 = G__29670;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29665),iter__29662.call(null,cljs.core.chunk_rest.call(null,s__29663__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29665),null);
}
} else
{var part = cljs.core.first.call(null,s__29663__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__29652,part,s__29663__$2,temp__4092__auto____$1,parts,c__8123__auto__,size__8124__auto__,b__29653,s__29651__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__29652,part,s__29663__$2,temp__4092__auto____$1,parts,c__8123__auto__,size__8124__auto__,b__29653,s__29651__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__29662.call(null,cljs.core.rest.call(null,s__29663__$2)));
}
} else
{return null;
}
break;
}
});})(i__29652,parts,c__8123__auto__,size__8124__auto__,b__29653,s__29651__$2,temp__4092__auto__))
,null,null));
});})(i__29652,parts,c__8123__auto__,size__8124__auto__,b__29653,s__29651__$2,temp__4092__auto__))
;return iter__8125__auto__.call(null,parts);
})());
{
var G__29671 = (i__29652 + 1);
i__29652 = G__29671;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29653),iter__29650.call(null,cljs.core.chunk_rest.call(null,s__29651__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29653),null);
}
} else
{var parts = cljs.core.first.call(null,s__29651__$2);return cljs.core.cons.call(null,(function (){var iter__8125__auto__ = ((function (parts,s__29651__$2,temp__4092__auto__){
return (function iter__29666(s__29667){return (new cljs.core.LazySeq(null,((function (parts,s__29651__$2,temp__4092__auto__){
return (function (){var s__29667__$1 = s__29667;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__29667__$1);if(temp__4092__auto____$1)
{var s__29667__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__29667__$2))
{var c__8123__auto__ = cljs.core.chunk_first.call(null,s__29667__$2);var size__8124__auto__ = cljs.core.count.call(null,c__8123__auto__);var b__29669 = cljs.core.chunk_buffer.call(null,size__8124__auto__);if((function (){var i__29668 = 0;while(true){
if((i__29668 < size__8124__auto__))
{var part = cljs.core._nth.call(null,c__8123__auto__,i__29668);cljs.core.chunk_append.call(null,b__29669,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__29668,part,c__8123__auto__,size__8124__auto__,b__29669,s__29667__$2,temp__4092__auto____$1,parts,s__29651__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__29668,part,c__8123__auto__,size__8124__auto__,b__29669,s__29667__$2,temp__4092__auto____$1,parts,s__29651__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__29672 = (i__29668 + 1);
i__29668 = G__29672;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29669),iter__29666.call(null,cljs.core.chunk_rest.call(null,s__29667__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29669),null);
}
} else
{var part = cljs.core.first.call(null,s__29667__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (part,s__29667__$2,temp__4092__auto____$1,parts,s__29651__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(part,s__29667__$2,temp__4092__auto____$1,parts,s__29651__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__29666.call(null,cljs.core.rest.call(null,s__29667__$2)));
}
} else
{return null;
}
break;
}
});})(parts,s__29651__$2,temp__4092__auto__))
,null,null));
});})(parts,s__29651__$2,temp__4092__auto__))
;return iter__8125__auto__.call(null,parts);
})(),iter__29650.call(null,cljs.core.rest.call(null,s__29651__$2)));
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
partitions_H.cljs$lang$applyTo = (function (arglist__29673){
var items = cljs.core.first(arglist__29673);
var args = cljs.core.rest(arglist__29673);
return partitions_H__delegate(items,args);
});
partitions_H.cljs$core$IFn$_invoke$arity$variadic = partitions_H__delegate;
return partitions_H;
})()
;
foundation.app.data.combinatorics.multiset_partitions_M = (function() {
var multiset_partitions_M = null;
var multiset_partitions_M__3 = (function (multiset,r,s){var n = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,multiset));var m = cljs.core.count.call(null,multiset);var f = cljs.core.PersistentVector.EMPTY;var c = cljs.core.PersistentVector.EMPTY;var u = cljs.core.PersistentVector.EMPTY;var v = cljs.core.PersistentVector.EMPTY;var vec__29696 = (function (){var j = 0;var c__$1 = c;var u__$1 = u;var v__$1 = v;while(true){
if(cljs.core._EQ_.call(null,j,m))
{return cljs.core.PersistentVector.fromArray([c__$1,u__$1,v__$1], true);
} else
{{
var G__29718 = (j + 1);
var G__29719 = cljs.core.assoc.call(null,c__$1,j,(j + 1));
var G__29720 = cljs.core.assoc.call(null,u__$1,j,multiset.call(null,(j + 1)));
var G__29721 = cljs.core.assoc.call(null,v__$1,j,multiset.call(null,(j + 1)));
j = G__29718;
c__$1 = G__29719;
u__$1 = G__29720;
v__$1 = G__29721;
continue;
}
}
break;
}
})();var c__$1 = cljs.core.nth.call(null,vec__29696,0,null);var u__$1 = cljs.core.nth.call(null,vec__29696,1,null);var v__$1 = cljs.core.nth.call(null,vec__29696,2,null);var a = 0;var b = m;var l = 0;var f__$1 = cljs.core.assoc.call(null,f,0,0,1,m);var stack = cljs.core.List.EMPTY;return multiset_partitions_M.call(null,n,m,f__$1,c__$1,u__$1,v__$1,a,b,l,r,s);
});
var multiset_partitions_M__11 = (function (n,m,f,c,u,v,a,b,l,r,s){while(true){
var vec__29697 = (function (){var j = a;var k = b;var x = false;var u__$1 = u;var v__$1 = v;var c__$1 = c;while(true){
if((j >= b))
{return cljs.core.PersistentVector.fromArray([u__$1,v__$1,c__$1,j,k], true);
} else
{var u__$2 = cljs.core.assoc.call(null,u__$1,k,(u__$1.call(null,j) - v__$1.call(null,j)));if(cljs.core._EQ_.call(null,u__$2.call(null,k),0))
{{
var G__29722 = (j + 1);
var G__29723 = k;
var G__29724 = true;
var G__29725 = u__$2;
var G__29726 = v__$1;
var G__29727 = c__$1;
j = G__29722;
k = G__29723;
x = G__29724;
u__$1 = G__29725;
v__$1 = G__29726;
c__$1 = G__29727;
continue;
}
} else
{if(!(x))
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,(function (){var x__7751__auto__ = v__$1.call(null,j);var y__7752__auto__ = u__$2.call(null,k);return ((x__7751__auto__ < y__7752__auto__) ? x__7751__auto__ : y__7752__auto__);
})());var x__$1 = (u__$2.call(null,k) < v__$2.call(null,j));var k__$1 = (k + 1);var j__$1 = (j + 1);{
var G__29728 = j__$1;
var G__29729 = k__$1;
var G__29730 = x__$1;
var G__29731 = u__$2;
var G__29732 = v__$2;
var G__29733 = c__$2;
j = G__29728;
k = G__29729;
x = G__29730;
u__$1 = G__29731;
v__$1 = G__29732;
c__$1 = G__29733;
continue;
}
} else
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,u__$2.call(null,k));var k__$1 = (k + 1);var j__$1 = (j + 1);{
var G__29734 = j__$1;
var G__29735 = k__$1;
var G__29736 = x;
var G__29737 = u__$2;
var G__29738 = v__$2;
var G__29739 = c__$2;
j = G__29734;
k = G__29735;
x = G__29736;
u__$1 = G__29737;
v__$1 = G__29738;
c__$1 = G__29739;
continue;
}
}
}
}
break;
}
})();var u__$1 = cljs.core.nth.call(null,vec__29697,0,null);var v__$1 = cljs.core.nth.call(null,vec__29697,1,null);var c__$1 = cljs.core.nth.call(null,vec__29697,2,null);var j = cljs.core.nth.call(null,vec__29697,3,null);var k = cljs.core.nth.call(null,vec__29697,4,null);if(cljs.core.truth_((function (){var and__7430__auto__ = r;if(cljs.core.truth_(and__7430__auto__))
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
var G__29740 = n;
var G__29741 = m;
var G__29742 = f__$1;
var G__29743 = c__$1;
var G__29744 = u__$1;
var G__29745 = v__$1;
var G__29746 = a__$1;
var G__29747 = b__$1;
var G__29748 = l__$1;
var G__29749 = r;
var G__29750 = s;
n = G__29740;
m = G__29741;
f = G__29742;
c = G__29743;
u = G__29744;
v = G__29745;
a = G__29746;
b = G__29747;
l = G__29748;
r = G__29749;
s = G__29750;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var part = (function (){var iter__8125__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s){
return (function iter__29698(s__29699){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s){
return (function (){var s__29699__$1 = s__29699;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__29699__$1);if(temp__4092__auto__)
{var s__29699__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29699__$2))
{var c__8123__auto__ = cljs.core.chunk_first.call(null,s__29699__$2);var size__8124__auto__ = cljs.core.count.call(null,c__8123__auto__);var b__29701 = cljs.core.chunk_buffer.call(null,size__8124__auto__);if((function (){var i__29700 = 0;while(true){
if((i__29700 < size__8124__auto__))
{var y = cljs.core._nth.call(null,c__8123__auto__,i__29700);cljs.core.chunk_append.call(null,b__29701,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + 1)) - 1);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8125__auto__ = ((function (i__29700,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8123__auto__,size__8124__auto__,b__29701,s__29699__$2,temp__4092__auto__){
return (function iter__29710(s__29711){return (new cljs.core.LazySeq(null,((function (i__29700,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8123__auto__,size__8124__auto__,b__29701,s__29699__$2,temp__4092__auto__){
return (function (){var s__29711__$1 = s__29711;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__29711__$1);if(temp__4092__auto____$1)
{var s__29711__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__29711__$2))
{var c__8123__auto____$1 = cljs.core.chunk_first.call(null,s__29711__$2);var size__8124__auto____$1 = cljs.core.count.call(null,c__8123__auto____$1);var b__29713 = cljs.core.chunk_buffer.call(null,size__8124__auto____$1);if((function (){var i__29712 = 0;while(true){
if((i__29712 < size__8124__auto____$1))
{var z = cljs.core._nth.call(null,c__8123__auto____$1,i__29712);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{cljs.core.chunk_append.call(null,b__29713,cljs.core.PersistentVector.fromArray([c__$1.call(null,z),v__$1.call(null,z)], true));
{
var G__29751 = (i__29712 + 1);
i__29712 = G__29751;
continue;
}
} else
{{
var G__29752 = (i__29712 + 1);
i__29712 = G__29752;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29713),iter__29710.call(null,cljs.core.chunk_rest.call(null,s__29711__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29713),null);
}
} else
{var z = cljs.core.first.call(null,s__29711__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([c__$1.call(null,z),v__$1.call(null,z)], true),iter__29710.call(null,cljs.core.rest.call(null,s__29711__$2)));
} else
{{
var G__29753 = cljs.core.rest.call(null,s__29711__$2);
s__29711__$1 = G__29753;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__29700,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8123__auto__,size__8124__auto__,b__29701,s__29699__$2,temp__4092__auto__))
,null,null));
});})(i__29700,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__8123__auto__,size__8124__auto__,b__29701,s__29699__$2,temp__4092__auto__))
;return iter__8125__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + 1)));
})());
})());
{
var G__29754 = (i__29700 + 1);
i__29700 = G__29754;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29701),iter__29698.call(null,cljs.core.chunk_rest.call(null,s__29699__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29701),null);
}
} else
{var y = cljs.core.first.call(null,s__29699__$2);return cljs.core.cons.call(null,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + 1)) - 1);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8125__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__29699__$2,temp__4092__auto__){
return (function iter__29714(s__29715){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__29699__$2,temp__4092__auto__){
return (function (){var s__29715__$1 = s__29715;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__29715__$1);if(temp__4092__auto____$1)
{var s__29715__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__29715__$2))
{var c__8123__auto__ = cljs.core.chunk_first.call(null,s__29715__$2);var size__8124__auto__ = cljs.core.count.call(null,c__8123__auto__);var b__29717 = cljs.core.chunk_buffer.call(null,size__8124__auto__);if((function (){var i__29716 = 0;while(true){
if((i__29716 < size__8124__auto__))
{var z = cljs.core._nth.call(null,c__8123__auto__,i__29716);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{cljs.core.chunk_append.call(null,b__29717,cljs.core.PersistentVector.fromArray([c__$1.call(null,z),v__$1.call(null,z)], true));
{
var G__29755 = (i__29716 + 1);
i__29716 = G__29755;
continue;
}
} else
{{
var G__29756 = (i__29716 + 1);
i__29716 = G__29756;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29717),iter__29714.call(null,cljs.core.chunk_rest.call(null,s__29715__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29717),null);
}
} else
{var z = cljs.core.first.call(null,s__29715__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([c__$1.call(null,z),v__$1.call(null,z)], true),iter__29714.call(null,cljs.core.rest.call(null,s__29715__$2)));
} else
{{
var G__29757 = cljs.core.rest.call(null,s__29715__$2);
s__29715__$1 = G__29757;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__29699__$2,temp__4092__auto__))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__29699__$2,temp__4092__auto__))
;return iter__8125__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + 1)));
})());
})(),iter__29698.call(null,cljs.core.rest.call(null,s__29699__$2)));
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
var G__29766 = (j - 1);
j = G__29766;
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
return (function iter__29762(s__29763){return (new cljs.core.LazySeq(null,((function (v__$1){
return (function (){var s__29763__$1 = s__29763;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__29763__$1);if(temp__4092__auto__)
{var s__29763__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29763__$2))
{var c__8123__auto__ = cljs.core.chunk_first.call(null,s__29763__$2);var size__8124__auto__ = cljs.core.count.call(null,c__8123__auto__);var b__29765 = cljs.core.chunk_buffer.call(null,size__8124__auto__);if((function (){var i__29764 = 0;while(true){
if((i__29764 < size__8124__auto__))
{var i = cljs.core._nth.call(null,c__8123__auto__,i__29764);cljs.core.chunk_append.call(null,b__29765,(u.call(null,i) - v__$1.call(null,i)));
{
var G__29767 = (i__29764 + 1);
i__29764 = G__29767;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29765),iter__29762.call(null,cljs.core.chunk_rest.call(null,s__29763__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29765),null);
}
} else
{var i = cljs.core.first.call(null,s__29763__$2);return cljs.core.cons.call(null,(u.call(null,i) - v__$1.call(null,i)),iter__29762.call(null,cljs.core.rest.call(null,s__29763__$2)));
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
var G__29768 = cljs.core.rest.call(null,ks);
var G__29769 = cljs.core.assoc.call(null,v__$2,k,u.call(null,k));
ks = G__29768;
v__$2 = G__29769;
continue;
}
}
break;
}
})();var min_partitions_after_this = (cljs.core.truth_(s)?(s - (l + 1)):0);var amount_to_dec = (cljs.core.truth_(s)?(function (){var x__7744__auto__ = 0;var y__7745__auto__ = (min_partitions_after_this - diff_uv);return ((x__7744__auto__ > y__7745__auto__) ? x__7744__auto__ : y__7745__auto__);
})():0);var v__$3 = ((cljs.core._EQ_.call(null,amount_to_dec,0))?v__$2:(function (){var k_1 = (b - 1);var v__$3 = v__$2;var amount = amount_to_dec;while(true){
var vk = v__$3.call(null,k_1);if((amount > vk))
{{
var G__29770 = (k_1 - 1);
var G__29771 = cljs.core.assoc.call(null,v__$3,k_1,0);
var G__29772 = (amount - vk);
k_1 = G__29770;
v__$3 = G__29771;
amount = G__29772;
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
var partitions_M__delegate = function (items,p__29773){var map__29831 = p__29773;var map__29831__$1 = ((cljs.core.seq_QMARK_.call(null,map__29831))?cljs.core.apply.call(null,cljs.core.hash_map,map__29831):map__29831);var from = cljs.core.get.call(null,map__29831__$1,new cljs.core.Keyword(null,"min","min",1014012356));var to = cljs.core.get.call(null,map__29831__$1,new cljs.core.Keyword(null,"max","max",1014012118));if(cljs.core._EQ_.call(null,cljs.core.count.call(null,items),0))
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
{var start_multiset = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8125__auto__ = (function iter__29832(s__29833){return (new cljs.core.LazySeq(null,(function (){var s__29833__$1 = s__29833;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__29833__$1);if(temp__4092__auto__)
{var s__29833__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29833__$2))
{var c__8123__auto__ = cljs.core.chunk_first.call(null,s__29833__$2);var size__8124__auto__ = cljs.core.count.call(null,c__8123__auto__);var b__29835 = cljs.core.chunk_buffer.call(null,size__8124__auto__);if((function (){var i__29834 = 0;while(true){
if((i__29834 < size__8124__auto__))
{var i = cljs.core._nth.call(null,c__8123__auto__,i__29834);var j = (i + 1);cljs.core.chunk_append.call(null,b__29835,cljs.core.PersistentVector.fromArray([j,freqs.call(null,ditems.call(null,i))], true));
{
var G__29888 = (i__29834 + 1);
i__29834 = G__29888;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29835),iter__29832.call(null,cljs.core.chunk_rest.call(null,s__29833__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29835),null);
}
} else
{var i = cljs.core.first.call(null,s__29833__$2);var j = (i + 1);return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([j,freqs.call(null,ditems.call(null,i))], true),iter__29832.call(null,cljs.core.rest.call(null,s__29833__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8125__auto__.call(null,cljs.core.range.call(null,M));
})());var parts = foundation.app.data.combinatorics.multiset_partitions_M.call(null,start_multiset,to__$1,from__$1);var iter__8125__auto__ = (function iter__29836(s__29837){return (new cljs.core.LazySeq(null,(function (){var s__29837__$1 = s__29837;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__29837__$1);if(temp__4092__auto__)
{var s__29837__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29837__$2))
{var c__8123__auto__ = cljs.core.chunk_first.call(null,s__29837__$2);var size__8124__auto__ = cljs.core.count.call(null,c__8123__auto__);var b__29839 = cljs.core.chunk_buffer.call(null,size__8124__auto__);if((function (){var i__29838 = 0;while(true){
if((i__29838 < size__8124__auto__))
{var part = cljs.core._nth.call(null,c__8123__auto__,i__29838);cljs.core.chunk_append.call(null,b__29839,(function (){var iter__8125__auto__ = ((function (i__29838,part,c__8123__auto__,size__8124__auto__,b__29839,s__29837__$2,temp__4092__auto__){
return (function iter__29864(s__29865){return (new cljs.core.LazySeq(null,((function (i__29838,part,c__8123__auto__,size__8124__auto__,b__29839,s__29837__$2,temp__4092__auto__){
return (function (){var s__29865__$1 = s__29865;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__29865__$1);if(temp__4092__auto____$1)
{var s__29865__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__29865__$2))
{var c__8123__auto____$1 = cljs.core.chunk_first.call(null,s__29865__$2);var size__8124__auto____$1 = cljs.core.count.call(null,c__8123__auto____$1);var b__29867 = cljs.core.chunk_buffer.call(null,size__8124__auto____$1);if((function (){var i__29866 = 0;while(true){
if((i__29866 < size__8124__auto____$1))
{var multiset = cljs.core._nth.call(null,c__8123__auto____$1,i__29866);cljs.core.chunk_append.call(null,b__29867,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__29866,i__29838,multiset,c__8123__auto____$1,size__8124__auto____$1,b__29867,s__29865__$2,temp__4092__auto____$1,part,c__8123__auto__,size__8124__auto__,b__29839,s__29837__$2,temp__4092__auto__){
return (function (p__29872){var vec__29873 = p__29872;var index = cljs.core.nth.call(null,vec__29873,0,null);var numtimes = cljs.core.nth.call(null,vec__29873,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__29866,i__29838,multiset,c__8123__auto____$1,size__8124__auto____$1,b__29867,s__29865__$2,temp__4092__auto____$1,part,c__8123__auto__,size__8124__auto__,b__29839,s__29837__$2,temp__4092__auto__))
,multiset)));
{
var G__29889 = (i__29866 + 1);
i__29866 = G__29889;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29867),iter__29864.call(null,cljs.core.chunk_rest.call(null,s__29865__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29867),null);
}
} else
{var multiset = cljs.core.first.call(null,s__29865__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__29838,multiset,s__29865__$2,temp__4092__auto____$1,part,c__8123__auto__,size__8124__auto__,b__29839,s__29837__$2,temp__4092__auto__){
return (function (p__29874){var vec__29875 = p__29874;var index = cljs.core.nth.call(null,vec__29875,0,null);var numtimes = cljs.core.nth.call(null,vec__29875,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__29838,multiset,s__29865__$2,temp__4092__auto____$1,part,c__8123__auto__,size__8124__auto__,b__29839,s__29837__$2,temp__4092__auto__))
,multiset)),iter__29864.call(null,cljs.core.rest.call(null,s__29865__$2)));
}
} else
{return null;
}
break;
}
});})(i__29838,part,c__8123__auto__,size__8124__auto__,b__29839,s__29837__$2,temp__4092__auto__))
,null,null));
});})(i__29838,part,c__8123__auto__,size__8124__auto__,b__29839,s__29837__$2,temp__4092__auto__))
;return iter__8125__auto__.call(null,part);
})());
{
var G__29890 = (i__29838 + 1);
i__29838 = G__29890;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29839),iter__29836.call(null,cljs.core.chunk_rest.call(null,s__29837__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29839),null);
}
} else
{var part = cljs.core.first.call(null,s__29837__$2);return cljs.core.cons.call(null,(function (){var iter__8125__auto__ = ((function (part,s__29837__$2,temp__4092__auto__){
return (function iter__29876(s__29877){return (new cljs.core.LazySeq(null,((function (part,s__29837__$2,temp__4092__auto__){
return (function (){var s__29877__$1 = s__29877;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__29877__$1);if(temp__4092__auto____$1)
{var s__29877__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__29877__$2))
{var c__8123__auto__ = cljs.core.chunk_first.call(null,s__29877__$2);var size__8124__auto__ = cljs.core.count.call(null,c__8123__auto__);var b__29879 = cljs.core.chunk_buffer.call(null,size__8124__auto__);if((function (){var i__29878 = 0;while(true){
if((i__29878 < size__8124__auto__))
{var multiset = cljs.core._nth.call(null,c__8123__auto__,i__29878);cljs.core.chunk_append.call(null,b__29879,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__29878,multiset,c__8123__auto__,size__8124__auto__,b__29879,s__29877__$2,temp__4092__auto____$1,part,s__29837__$2,temp__4092__auto__){
return (function (p__29884){var vec__29885 = p__29884;var index = cljs.core.nth.call(null,vec__29885,0,null);var numtimes = cljs.core.nth.call(null,vec__29885,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__29878,multiset,c__8123__auto__,size__8124__auto__,b__29879,s__29877__$2,temp__4092__auto____$1,part,s__29837__$2,temp__4092__auto__))
,multiset)));
{
var G__29891 = (i__29878 + 1);
i__29878 = G__29891;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29879),iter__29876.call(null,cljs.core.chunk_rest.call(null,s__29877__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29879),null);
}
} else
{var multiset = cljs.core.first.call(null,s__29877__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (multiset,s__29877__$2,temp__4092__auto____$1,part,s__29837__$2,temp__4092__auto__){
return (function (p__29886){var vec__29887 = p__29886;var index = cljs.core.nth.call(null,vec__29887,0,null);var numtimes = cljs.core.nth.call(null,vec__29887,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(multiset,s__29877__$2,temp__4092__auto____$1,part,s__29837__$2,temp__4092__auto__))
,multiset)),iter__29876.call(null,cljs.core.rest.call(null,s__29877__$2)));
}
} else
{return null;
}
break;
}
});})(part,s__29837__$2,temp__4092__auto__))
,null,null));
});})(part,s__29837__$2,temp__4092__auto__))
;return iter__8125__auto__.call(null,part);
})(),iter__29836.call(null,cljs.core.rest.call(null,s__29837__$2)));
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
var p__29773 = null;if (arguments.length > 1) {
  p__29773 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions_M__delegate.call(this,items,p__29773);};
partitions_M.cljs$lang$maxFixedArity = 1;
partitions_M.cljs$lang$applyTo = (function (arglist__29892){
var items = cljs.core.first(arglist__29892);
var p__29773 = cljs.core.rest(arglist__29892);
return partitions_M__delegate(items,p__29773);
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
partitions.cljs$lang$applyTo = (function (arglist__29893){
var items = cljs.core.first(arglist__29893);
var args = cljs.core.rest(arglist__29893);
return partitions__delegate(items,args);
});
partitions.cljs$core$IFn$_invoke$arity$variadic = partitions__delegate;
return partitions;
})()
;
