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
var G__323181 = cljs.core.assoc.call(null,c__$2,(j__$1 - 1),(c__$2.call(null,j__$1) - 1));
var G__323182 = (j__$1 - 1);
c__$2 = G__323181;
j__$1 = G__323182;
continue;
}
}
break;
}
}
}
});
return (new cljs.core.LazySeq(null,(function (){var c = cljs.core.vec.call(null,cljs.core.cons.call(null,null,(function (){var iter__14516__auto__ = (function iter__323177(s__323178){return (new cljs.core.LazySeq(null,(function (){var s__323178__$1 = s__323178;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__323178__$1);if(temp__4092__auto__)
{var s__323178__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__323178__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__323178__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__323180 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__323179 = 0;while(true){
if((i__323179 < size__14515__auto__))
{var j = cljs.core._nth.call(null,c__14514__auto__,i__323179);cljs.core.chunk_append.call(null,b__323180,((j + cnt) + (- (n + 1))));
{
var G__323183 = (i__323179 + 1);
i__323179 = G__323183;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__323180),iter__323177.call(null,cljs.core.chunk_rest.call(null,s__323178__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__323180),null);
}
} else
{var j = cljs.core.first.call(null,s__323178__$2);return cljs.core.cons.call(null,((j + cnt) + (- (n + 1))),iter__323177.call(null,cljs.core.rest.call(null,s__323178__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14516__auto__.call(null,cljs.core.range.call(null,1,(n + 1)));
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
{return cljs.core.map.call(null,(function (p1__323184_SHARP_){return cljs.core.map.call(null,v_items,p1__323184_SHARP_);
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
var G__323185 = (i - 1);
var G__323186 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__323185;
v_seqs__$2 = G__323186;
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
cartesian_product.cljs$lang$applyTo = (function (arglist__323187){
var seqs = cljs.core.seq(arglist__323187);
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
var G__323188 = (i - 1);
i = G__323188;
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
var G__323189 = (i - 1);
i = G__323189;
continue;
}
}
break;
}
})();var v__$1 = cljs.core.assoc.call(null,v,j,v.call(null,l),l,vj);var k = (j + 1);var l__$1 = (len - 1);while(true){
if((k < l__$1))
{{
var G__323190 = cljs.core.assoc.call(null,v__$1,k,v__$1.call(null,l__$1),l__$1,v__$1.call(null,k));
var G__323191 = (k + 1);
var G__323192 = (l__$1 - 1);
v__$1 = G__323190;
k = G__323191;
l__$1 = G__323192;
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
foundation.app.data.combinatorics.multi_perm = (function multi_perm(l){var f = cljs.core.frequencies.call(null,l);var v = cljs.core.vec.call(null,cljs.core.keys.call(null,f));var indices = cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__14516__auto__ = ((function (f,v){
return (function iter__323197(s__323198){return (new cljs.core.LazySeq(null,((function (f,v){
return (function (){var s__323198__$1 = s__323198;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__323198__$1);if(temp__4092__auto__)
{var s__323198__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__323198__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__323198__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__323200 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__323199 = 0;while(true){
if((i__323199 < size__14515__auto__))
{var i = cljs.core._nth.call(null,c__14514__auto__,i__323199);cljs.core.chunk_append.call(null,b__323200,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));
{
var G__323201 = (i__323199 + 1);
i__323199 = G__323201;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__323200),iter__323197.call(null,cljs.core.chunk_rest.call(null,s__323198__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__323200),null);
}
} else
{var i = cljs.core.first.call(null,s__323198__$2);return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),iter__323197.call(null,cljs.core.rest.call(null,s__323198__$2)));
}
} else
{return null;
}
break;
}
});})(f,v))
,null,null));
});})(f,v))
;return iter__14516__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,v)));
})());return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.map,v),foundation.app.data.combinatorics.lex_permutations.call(null,indices));
});
/**
* All the distinct permutations of items, lexicographic by index.
*/
foundation.app.data.combinatorics.permutations = (function permutations(items){if(foundation.app.data.combinatorics.sorted_numbers_QMARK_.call(null,items))
{return foundation.app.data.combinatorics.lex_permutations.call(null,items);
} else
{if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core.distinct_QMARK_,items)))
{var v = cljs.core.vec.call(null,items);return cljs.core.map.call(null,(function (p1__323202_SHARP_){return cljs.core.map.call(null,v,p1__323202_SHARP_);
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
{return cljs.core.vec.call(null,(function (){var iter__14516__auto__ = (function iter__323207(s__323208){return (new cljs.core.LazySeq(null,(function (){var s__323208__$1 = s__323208;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__323208__$1);if(temp__4092__auto__)
{var s__323208__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__323208__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__323208__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__323210 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__323209 = 0;while(true){
if((i__323209 < size__14515__auto__))
{var i = cljs.core._nth.call(null,c__14514__auto__,i__323209);cljs.core.chunk_append.call(null,b__323210,(function (){var x__14130__auto__ = 0;var y__14131__auto__ = (i - ((n - s) - -1));return ((x__14130__auto__ > y__14131__auto__) ? x__14130__auto__ : y__14131__auto__);
})());
{
var G__323211 = (i__323209 + 1);
i__323209 = G__323211;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__323210),iter__323207.call(null,cljs.core.chunk_rest.call(null,s__323208__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__323210),null);
}
} else
{var i = cljs.core.first.call(null,s__323208__$2);return cljs.core.cons.call(null,(function (){var x__14130__auto__ = 0;var y__14131__auto__ = (i - ((n - s) - -1));return ((x__14130__auto__ > y__14131__auto__) ? x__14130__auto__ : y__14131__auto__);
})(),iter__323207.call(null,cljs.core.rest.call(null,s__323208__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14516__auto__.call(null,cljs.core.range.call(null,1,(n + 1)));
})());
} else
{return cljs.core.vec.call(null,cljs.core.repeat.call(null,n,0));
}
});
foundation.app.data.combinatorics.growth_strings_H = (function() {
var growth_strings_H = null;
var growth_strings_H__3 = (function (n,r,s){return growth_strings_H.call(null,n,foundation.app.data.combinatorics.init.call(null,n,s),cljs.core.vec.call(null,cljs.core.repeat.call(null,n,1)),r,s);
});
var growth_strings_H__5 = (function (n,a,b,r,s){return cljs.core.cons.call(null,a,(new cljs.core.LazySeq(null,(function (){if((function (){var and__13811__auto__ = (cljs.core.peek.call(null,b) > cljs.core.peek.call(null,a));if(and__13811__auto__)
{if(cljs.core.truth_(r))
{return (cljs.core.peek.call(null,a) < (r - 1));
} else
{return true;
}
} else
{return and__13811__auto__;
}
})())
{return growth_strings_H.call(null,n,foundation.app.data.combinatorics.update.call(null,a,(n - 1),cljs.core.inc),b,r,s);
} else
{var j = (function (){var j = (n - 2);while(true){
if((function (){var and__13811__auto__ = (a.call(null,j) < b.call(null,j));if(and__13811__auto__)
{var and__13811__auto____$1 = (cljs.core.truth_(r)?(a.call(null,j) < (r - 1)):true);if(and__13811__auto____$1)
{if(cljs.core.truth_(s))
{return (((s - b.call(null,j)) - ((((a.call(null,j) + 1) === b.call(null,j)))?1:0)) <= (n - j));
} else
{return true;
}
} else
{return and__13811__auto____$1;
}
} else
{return and__13811__auto__;
}
})())
{return j;
} else
{{
var G__323214 = (j - 1);
j = G__323214;
continue;
}
}
break;
}
})();if((j === 0))
{return cljs.core.List.EMPTY;
} else
{var a__$1 = foundation.app.data.combinatorics.update.call(null,a,j,cljs.core.inc);var x = (cljs.core.truth_(s)?(s - (b.call(null,j) + ((cljs.core._EQ_.call(null,a__$1.call(null,j),b.call(null,j)))?1:0))):null);var vec__323213 = (function (){var a__$2 = a__$1;var b__$1 = b;var i = (j + 1);var current_max = (b__$1.call(null,j) + (((b__$1.call(null,j) === a__$2.call(null,j)))?1:0));while(true){
if((i === n))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$2,b__$1], null);
} else
{if(cljs.core.truth_((function (){var and__13811__auto__ = s;if(cljs.core.truth_(and__13811__auto__))
{return (i > ((n - x) - 1));
} else
{return and__13811__auto__;
}
})()))
{var new_a_i = ((i - n) + s);{
var G__323215 = cljs.core.assoc.call(null,a__$2,i,new_a_i);
var G__323216 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__323217 = (i + 1);
var G__323218 = (function (){var x__14130__auto__ = current_max;var y__14131__auto__ = (new_a_i + 1);return ((x__14130__auto__ > y__14131__auto__) ? x__14130__auto__ : y__14131__auto__);
})();
a__$2 = G__323215;
b__$1 = G__323216;
i = G__323217;
current_max = G__323218;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__323219 = cljs.core.assoc.call(null,a__$2,i,0);
var G__323220 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__323221 = (i + 1);
var G__323222 = current_max;
a__$2 = G__323219;
b__$1 = G__323220;
i = G__323221;
current_max = G__323222;
continue;
}
} else
{return null;
}
}
}
break;
}
})();var a__$2 = cljs.core.nth.call(null,vec__323213,0,null);var b__$1 = cljs.core.nth.call(null,vec__323213,1,null);return growth_strings_H.call(null,n,a__$2,b__$1,r,s);
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
var lex_partitions_H__delegate = function (N,p__323223){var map__323229 = p__323223;var map__323229__$1 = ((cljs.core.seq_QMARK_.call(null,map__323229))?cljs.core.apply.call(null,cljs.core.hash_map,map__323229):map__323229);var from = cljs.core.get.call(null,map__323229__$1,new cljs.core.Keyword(null,"min","min",1014012356));var to = cljs.core.get.call(null,map__323229__$1,new cljs.core.Keyword(null,"max","max",1014012118));if(cljs.core._EQ_.call(null,N,0))
{if((((function (){var or__13823__auto__ = from;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return 0;
}
})() <= 0)) && ((0 <= (function (){var or__13823__auto__ = to;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return 0;
}
})())))
{return cljs.core.list(cljs.core.List.EMPTY);
} else
{return cljs.core.List.EMPTY;
}
} else
{var from__$1 = (cljs.core.truth_((function (){var and__13811__auto__ = from;if(cljs.core.truth_(and__13811__auto__))
{return (from <= 1);
} else
{return and__13811__auto__;
}
})())?null:from);var to__$1 = (cljs.core.truth_((function (){var and__13811__auto__ = to;if(cljs.core.truth_(and__13811__auto__))
{return (to >= N);
} else
{return and__13811__auto__;
}
})())?null:to);if(!(((1 <= (function (){var or__13823__auto__ = from__$1;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return 1;
}
})())) && ((((function (){var or__13823__auto__ = from__$1;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return 1;
}
})() <= (function (){var or__13823__auto__ = to__$1;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return N;
}
})())) && (((function (){var or__13823__auto__ = to__$1;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
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
{var growth_strings = foundation.app.data.combinatorics.growth_strings_H.call(null,N,to__$1,from__$1);var iter__14516__auto__ = (function iter__323230(s__323231){return (new cljs.core.LazySeq(null,(function (){var s__323231__$1 = s__323231;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__323231__$1);if(temp__4092__auto__)
{var s__323231__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__323231__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__323231__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__323233 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__323232 = 0;while(true){
if((i__323232 < size__14515__auto__))
{var growth_string = cljs.core._nth.call(null,c__14514__auto__,i__323232);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));cljs.core.chunk_append.call(null,b__323233,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))));
{
var G__323234 = (i__323232 + 1);
i__323232 = G__323234;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__323233),iter__323230.call(null,cljs.core.chunk_rest.call(null,s__323231__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__323233),null);
}
} else
{var growth_string = cljs.core.first.call(null,s__323231__$2);var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));return cljs.core.cons.call(null,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))),iter__323230.call(null,cljs.core.rest.call(null,s__323231__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14516__auto__.call(null,growth_strings);
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
var p__323223 = null;if (arguments.length > 1) {
  p__323223 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return lex_partitions_H__delegate.call(this,N,p__323223);};
lex_partitions_H.cljs$lang$maxFixedArity = 1;
lex_partitions_H.cljs$lang$applyTo = (function (arglist__323235){
var N = cljs.core.first(arglist__323235);
var p__323223 = cljs.core.rest(arglist__323235);
return lex_partitions_H__delegate(N,p__323223);
});
lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic = lex_partitions_H__delegate;
return lex_partitions_H;
})()
;
/**
* @param {...*} var_args
*/
foundation.app.data.combinatorics.partitions_H = (function() { 
var partitions_H__delegate = function (items,args){var items__$1 = cljs.core.vec.call(null,items);var N = cljs.core.count.call(null,items__$1);var lex = cljs.core.apply.call(null,foundation.app.data.combinatorics.lex_partitions_H,N,args);var iter__14516__auto__ = (function iter__323256(s__323257){return (new cljs.core.LazySeq(null,(function (){var s__323257__$1 = s__323257;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__323257__$1);if(temp__4092__auto__)
{var s__323257__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__323257__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__323257__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__323259 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__323258 = 0;while(true){
if((i__323258 < size__14515__auto__))
{var parts = cljs.core._nth.call(null,c__14514__auto__,i__323258);cljs.core.chunk_append.call(null,b__323259,(function (){var iter__14516__auto__ = ((function (i__323258,parts,c__14514__auto__,size__14515__auto__,b__323259,s__323257__$2,temp__4092__auto__){
return (function iter__323268(s__323269){return (new cljs.core.LazySeq(null,((function (i__323258,parts,c__14514__auto__,size__14515__auto__,b__323259,s__323257__$2,temp__4092__auto__){
return (function (){var s__323269__$1 = s__323269;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__323269__$1);if(temp__4092__auto____$1)
{var s__323269__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__323269__$2))
{var c__14514__auto____$1 = cljs.core.chunk_first.call(null,s__323269__$2);var size__14515__auto____$1 = cljs.core.count.call(null,c__14514__auto____$1);var b__323271 = cljs.core.chunk_buffer.call(null,size__14515__auto____$1);if((function (){var i__323270 = 0;while(true){
if((i__323270 < size__14515__auto____$1))
{var part = cljs.core._nth.call(null,c__14514__auto____$1,i__323270);cljs.core.chunk_append.call(null,b__323271,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__323270,i__323258,part,c__14514__auto____$1,size__14515__auto____$1,b__323271,s__323269__$2,temp__4092__auto____$1,parts,c__14514__auto__,size__14515__auto__,b__323259,s__323257__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__323270,i__323258,part,c__14514__auto____$1,size__14515__auto____$1,b__323271,s__323269__$2,temp__4092__auto____$1,parts,c__14514__auto__,size__14515__auto__,b__323259,s__323257__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__323276 = (i__323270 + 1);
i__323270 = G__323276;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__323271),iter__323268.call(null,cljs.core.chunk_rest.call(null,s__323269__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__323271),null);
}
} else
{var part = cljs.core.first.call(null,s__323269__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__323258,part,s__323269__$2,temp__4092__auto____$1,parts,c__14514__auto__,size__14515__auto__,b__323259,s__323257__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__323258,part,s__323269__$2,temp__4092__auto____$1,parts,c__14514__auto__,size__14515__auto__,b__323259,s__323257__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__323268.call(null,cljs.core.rest.call(null,s__323269__$2)));
}
} else
{return null;
}
break;
}
});})(i__323258,parts,c__14514__auto__,size__14515__auto__,b__323259,s__323257__$2,temp__4092__auto__))
,null,null));
});})(i__323258,parts,c__14514__auto__,size__14515__auto__,b__323259,s__323257__$2,temp__4092__auto__))
;return iter__14516__auto__.call(null,parts);
})());
{
var G__323277 = (i__323258 + 1);
i__323258 = G__323277;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__323259),iter__323256.call(null,cljs.core.chunk_rest.call(null,s__323257__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__323259),null);
}
} else
{var parts = cljs.core.first.call(null,s__323257__$2);return cljs.core.cons.call(null,(function (){var iter__14516__auto__ = ((function (parts,s__323257__$2,temp__4092__auto__){
return (function iter__323272(s__323273){return (new cljs.core.LazySeq(null,((function (parts,s__323257__$2,temp__4092__auto__){
return (function (){var s__323273__$1 = s__323273;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__323273__$1);if(temp__4092__auto____$1)
{var s__323273__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__323273__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__323273__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__323275 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__323274 = 0;while(true){
if((i__323274 < size__14515__auto__))
{var part = cljs.core._nth.call(null,c__14514__auto__,i__323274);cljs.core.chunk_append.call(null,b__323275,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__323274,part,c__14514__auto__,size__14515__auto__,b__323275,s__323273__$2,temp__4092__auto____$1,parts,s__323257__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__323274,part,c__14514__auto__,size__14515__auto__,b__323275,s__323273__$2,temp__4092__auto____$1,parts,s__323257__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));
{
var G__323278 = (i__323274 + 1);
i__323274 = G__323278;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__323275),iter__323272.call(null,cljs.core.chunk_rest.call(null,s__323273__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__323275),null);
}
} else
{var part = cljs.core.first.call(null,s__323273__$2);return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (part,s__323273__$2,temp__4092__auto____$1,parts,s__323257__$2,temp__4092__auto__){
return (function (v,o){return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(part,s__323273__$2,temp__4092__auto____$1,parts,s__323257__$2,temp__4092__auto__))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),iter__323272.call(null,cljs.core.rest.call(null,s__323273__$2)));
}
} else
{return null;
}
break;
}
});})(parts,s__323257__$2,temp__4092__auto__))
,null,null));
});})(parts,s__323257__$2,temp__4092__auto__))
;return iter__14516__auto__.call(null,parts);
})(),iter__323256.call(null,cljs.core.rest.call(null,s__323257__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14516__auto__.call(null,lex);
};
var partitions_H = function (items,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions_H__delegate.call(this,items,args);};
partitions_H.cljs$lang$maxFixedArity = 1;
partitions_H.cljs$lang$applyTo = (function (arglist__323279){
var items = cljs.core.first(arglist__323279);
var args = cljs.core.rest(arglist__323279);
return partitions_H__delegate(items,args);
});
partitions_H.cljs$core$IFn$_invoke$arity$variadic = partitions_H__delegate;
return partitions_H;
})()
;
foundation.app.data.combinatorics.multiset_partitions_M = (function() {
var multiset_partitions_M = null;
var multiset_partitions_M__3 = (function (multiset,r,s){var n = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,multiset));var m = cljs.core.count.call(null,multiset);var f = cljs.core.PersistentVector.EMPTY;var c = cljs.core.PersistentVector.EMPTY;var u = cljs.core.PersistentVector.EMPTY;var v = cljs.core.PersistentVector.EMPTY;var vec__323302 = (function (){var j = 0;var c__$1 = c;var u__$1 = u;var v__$1 = v;while(true){
if(cljs.core._EQ_.call(null,j,m))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,u__$1,v__$1], null);
} else
{{
var G__323324 = (j + 1);
var G__323325 = cljs.core.assoc.call(null,c__$1,j,(j + 1));
var G__323326 = cljs.core.assoc.call(null,u__$1,j,multiset.call(null,(j + 1)));
var G__323327 = cljs.core.assoc.call(null,v__$1,j,multiset.call(null,(j + 1)));
j = G__323324;
c__$1 = G__323325;
u__$1 = G__323326;
v__$1 = G__323327;
continue;
}
}
break;
}
})();var c__$1 = cljs.core.nth.call(null,vec__323302,0,null);var u__$1 = cljs.core.nth.call(null,vec__323302,1,null);var v__$1 = cljs.core.nth.call(null,vec__323302,2,null);var a = 0;var b = m;var l = 0;var f__$1 = cljs.core.assoc.call(null,f,0,0,1,m);var stack = cljs.core.List.EMPTY;return multiset_partitions_M.call(null,n,m,f__$1,c__$1,u__$1,v__$1,a,b,l,r,s);
});
var multiset_partitions_M__11 = (function (n,m,f,c,u,v,a,b,l,r,s){while(true){
var vec__323303 = (function (){var j = a;var k = b;var x = false;var u__$1 = u;var v__$1 = v;var c__$1 = c;while(true){
if((j >= b))
{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [u__$1,v__$1,c__$1,j,k], null);
} else
{var u__$2 = cljs.core.assoc.call(null,u__$1,k,(u__$1.call(null,j) - v__$1.call(null,j)));if(cljs.core._EQ_.call(null,u__$2.call(null,k),0))
{{
var G__323328 = (j + 1);
var G__323329 = k;
var G__323330 = true;
var G__323331 = u__$2;
var G__323332 = v__$1;
var G__323333 = c__$1;
j = G__323328;
k = G__323329;
x = G__323330;
u__$1 = G__323331;
v__$1 = G__323332;
c__$1 = G__323333;
continue;
}
} else
{if(!(x))
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,(function (){var x__14137__auto__ = v__$1.call(null,j);var y__14138__auto__ = u__$2.call(null,k);return ((x__14137__auto__ < y__14138__auto__) ? x__14137__auto__ : y__14138__auto__);
})());var x__$1 = (u__$2.call(null,k) < v__$2.call(null,j));var k__$1 = (k + 1);var j__$1 = (j + 1);{
var G__323334 = j__$1;
var G__323335 = k__$1;
var G__323336 = x__$1;
var G__323337 = u__$2;
var G__323338 = v__$2;
var G__323339 = c__$2;
j = G__323334;
k = G__323335;
x = G__323336;
u__$1 = G__323337;
v__$1 = G__323338;
c__$1 = G__323339;
continue;
}
} else
{var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));var v__$2 = cljs.core.assoc.call(null,v__$1,k,u__$2.call(null,k));var k__$1 = (k + 1);var j__$1 = (j + 1);{
var G__323340 = j__$1;
var G__323341 = k__$1;
var G__323342 = x;
var G__323343 = u__$2;
var G__323344 = v__$2;
var G__323345 = c__$2;
j = G__323340;
k = G__323341;
x = G__323342;
u__$1 = G__323343;
v__$1 = G__323344;
c__$1 = G__323345;
continue;
}
}
}
}
break;
}
})();var u__$1 = cljs.core.nth.call(null,vec__323303,0,null);var v__$1 = cljs.core.nth.call(null,vec__323303,1,null);var c__$1 = cljs.core.nth.call(null,vec__323303,2,null);var j = cljs.core.nth.call(null,vec__323303,3,null);var k = cljs.core.nth.call(null,vec__323303,4,null);if(cljs.core.truth_((function (){var and__13811__auto__ = r;if(cljs.core.truth_(and__13811__auto__))
{return ((k > b)) && (cljs.core._EQ_.call(null,l,(r - 1)));
} else
{return and__13811__auto__;
}
})()))
{return foundation.app.data.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
} else
{if(cljs.core.truth_((function (){var and__13811__auto__ = s;if(cljs.core.truth_(and__13811__auto__))
{return ((k <= b)) && (((l + 1) < s));
} else
{return and__13811__auto__;
}
})()))
{return foundation.app.data.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
} else
{if((k > b))
{var a__$1 = b;var b__$1 = k;var l__$1 = (l + 1);var f__$1 = cljs.core.assoc.call(null,f,(l__$1 + 1),b__$1);{
var G__323346 = n;
var G__323347 = m;
var G__323348 = f__$1;
var G__323349 = c__$1;
var G__323350 = u__$1;
var G__323351 = v__$1;
var G__323352 = a__$1;
var G__323353 = b__$1;
var G__323354 = l__$1;
var G__323355 = r;
var G__323356 = s;
n = G__323346;
m = G__323347;
f = G__323348;
c = G__323349;
u = G__323350;
v = G__323351;
a = G__323352;
b = G__323353;
l = G__323354;
r = G__323355;
s = G__323356;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var part = (function (){var iter__14516__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s){
return (function iter__323304(s__323305){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s){
return (function (){var s__323305__$1 = s__323305;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__323305__$1);if(temp__4092__auto__)
{var s__323305__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__323305__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__323305__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__323307 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__323306 = 0;while(true){
if((i__323306 < size__14515__auto__))
{var y = cljs.core._nth.call(null,c__14514__auto__,i__323306);cljs.core.chunk_append.call(null,b__323307,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + 1)) - 1);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__14516__auto__ = ((function (i__323306,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__14514__auto__,size__14515__auto__,b__323307,s__323305__$2,temp__4092__auto__){
return (function iter__323316(s__323317){return (new cljs.core.LazySeq(null,((function (i__323306,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__14514__auto__,size__14515__auto__,b__323307,s__323305__$2,temp__4092__auto__){
return (function (){var s__323317__$1 = s__323317;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__323317__$1);if(temp__4092__auto____$1)
{var s__323317__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__323317__$2))
{var c__14514__auto____$1 = cljs.core.chunk_first.call(null,s__323317__$2);var size__14515__auto____$1 = cljs.core.count.call(null,c__14514__auto____$1);var b__323319 = cljs.core.chunk_buffer.call(null,size__14515__auto____$1);if((function (){var i__323318 = 0;while(true){
if((i__323318 < size__14515__auto____$1))
{var z = cljs.core._nth.call(null,c__14514__auto____$1,i__323318);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{cljs.core.chunk_append.call(null,b__323319,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));
{
var G__323357 = (i__323318 + 1);
i__323318 = G__323357;
continue;
}
} else
{{
var G__323358 = (i__323318 + 1);
i__323318 = G__323358;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__323319),iter__323316.call(null,cljs.core.chunk_rest.call(null,s__323317__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__323319),null);
}
} else
{var z = cljs.core.first.call(null,s__323317__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),iter__323316.call(null,cljs.core.rest.call(null,s__323317__$2)));
} else
{{
var G__323359 = cljs.core.rest.call(null,s__323317__$2);
s__323317__$1 = G__323359;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__323306,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__14514__auto__,size__14515__auto__,b__323307,s__323305__$2,temp__4092__auto__))
,null,null));
});})(i__323306,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__14514__auto__,size__14515__auto__,b__323307,s__323305__$2,temp__4092__auto__))
;return iter__14516__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + 1)));
})());
})());
{
var G__323360 = (i__323306 + 1);
i__323306 = G__323360;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__323307),iter__323304.call(null,cljs.core.chunk_rest.call(null,s__323305__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__323307),null);
}
} else
{var y = cljs.core.first.call(null,s__323305__$2);return cljs.core.cons.call(null,(function (){var first_col = f.call(null,y);var last_col = (f.call(null,(y + 1)) - 1);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__14516__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__323305__$2,temp__4092__auto__){
return (function iter__323320(s__323321){return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__323305__$2,temp__4092__auto__){
return (function (){var s__323321__$1 = s__323321;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__323321__$1);if(temp__4092__auto____$1)
{var s__323321__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__323321__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__323321__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__323323 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__323322 = 0;while(true){
if((i__323322 < size__14515__auto__))
{var z = cljs.core._nth.call(null,c__14514__auto__,i__323322);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{cljs.core.chunk_append.call(null,b__323323,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));
{
var G__323361 = (i__323322 + 1);
i__323322 = G__323361;
continue;
}
} else
{{
var G__323362 = (i__323322 + 1);
i__323322 = G__323362;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__323323),iter__323320.call(null,cljs.core.chunk_rest.call(null,s__323321__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__323323),null);
}
} else
{var z = cljs.core.first.call(null,s__323321__$2);if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),0))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),iter__323320.call(null,cljs.core.rest.call(null,s__323321__$2)));
} else
{{
var G__323363 = cljs.core.rest.call(null,s__323321__$2);
s__323321__$1 = G__323363;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__323305__$2,temp__4092__auto__))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__323305__$2,temp__4092__auto__))
;return iter__14516__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + 1)));
})());
})(),iter__323304.call(null,cljs.core.rest.call(null,s__323305__$2)));
}
} else
{return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s))
;return iter__14516__auto__.call(null,cljs.core.range.call(null,(l + 1)));
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
var G__323372 = (j - 1);
j = G__323372;
continue;
}
}
break;
}
})();if(cljs.core.truth_((function (){var and__13811__auto__ = r;if(cljs.core.truth_(and__13811__auto__))
{return (cljs.core._EQ_.call(null,j,a)) && ((((v.call(null,j) - 1) * (r - l)) < u.call(null,j)));
} else
{return and__13811__auto__;
}
})()))
{return foundation.app.data.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s);
} else
{if((cljs.core._EQ_.call(null,j,a)) && (cljs.core._EQ_.call(null,v.call(null,j),1)))
{return foundation.app.data.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var v__$1 = foundation.app.data.combinatorics.update.call(null,v,j,cljs.core.dec);var diff_uv = (cljs.core.truth_(s)?cljs.core.apply.call(null,cljs.core._PLUS_,(function (){var iter__14516__auto__ = ((function (v__$1){
return (function iter__323368(s__323369){return (new cljs.core.LazySeq(null,((function (v__$1){
return (function (){var s__323369__$1 = s__323369;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__323369__$1);if(temp__4092__auto__)
{var s__323369__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__323369__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__323369__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__323371 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__323370 = 0;while(true){
if((i__323370 < size__14515__auto__))
{var i = cljs.core._nth.call(null,c__14514__auto__,i__323370);cljs.core.chunk_append.call(null,b__323371,(u.call(null,i) - v__$1.call(null,i)));
{
var G__323373 = (i__323370 + 1);
i__323370 = G__323373;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__323371),iter__323368.call(null,cljs.core.chunk_rest.call(null,s__323369__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__323371),null);
}
} else
{var i = cljs.core.first.call(null,s__323369__$2);return cljs.core.cons.call(null,(u.call(null,i) - v__$1.call(null,i)),iter__323368.call(null,cljs.core.rest.call(null,s__323369__$2)));
}
} else
{return null;
}
break;
}
});})(v__$1))
,null,null));
});})(v__$1))
;return iter__14516__auto__.call(null,cljs.core.range.call(null,a,(j + 1)));
})()):null);var v__$2 = (function (){var ks = cljs.core.range.call(null,(j + 1),b);var v__$2 = v__$1;while(true){
if(cljs.core.empty_QMARK_.call(null,ks))
{return v__$2;
} else
{var k = cljs.core.first.call(null,ks);{
var G__323374 = cljs.core.rest.call(null,ks);
var G__323375 = cljs.core.assoc.call(null,v__$2,k,u.call(null,k));
ks = G__323374;
v__$2 = G__323375;
continue;
}
}
break;
}
})();var min_partitions_after_this = (cljs.core.truth_(s)?(s - (l + 1)):0);var amount_to_dec = (cljs.core.truth_(s)?(function (){var x__14130__auto__ = 0;var y__14131__auto__ = (min_partitions_after_this - diff_uv);return ((x__14130__auto__ > y__14131__auto__) ? x__14130__auto__ : y__14131__auto__);
})():0);var v__$3 = ((cljs.core._EQ_.call(null,amount_to_dec,0))?v__$2:(function (){var k_1 = (b - 1);var v__$3 = v__$2;var amount = amount_to_dec;while(true){
var vk = v__$3.call(null,k_1);if((amount > vk))
{{
var G__323376 = (k_1 - 1);
var G__323377 = cljs.core.assoc.call(null,v__$3,k_1,0);
var G__323378 = (amount - vk);
k_1 = G__323376;
v__$3 = G__323377;
amount = G__323378;
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
var partitions_M__delegate = function (items,p__323379){var map__323437 = p__323379;var map__323437__$1 = ((cljs.core.seq_QMARK_.call(null,map__323437))?cljs.core.apply.call(null,cljs.core.hash_map,map__323437):map__323437);var from = cljs.core.get.call(null,map__323437__$1,new cljs.core.Keyword(null,"min","min",1014012356));var to = cljs.core.get.call(null,map__323437__$1,new cljs.core.Keyword(null,"max","max",1014012118));if(cljs.core._EQ_.call(null,cljs.core.count.call(null,items),0))
{if((((function (){var or__13823__auto__ = from;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return 0;
}
})() <= 0)) && ((0 <= (function (){var or__13823__auto__ = to;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return 0;
}
})())))
{return cljs.core.list(cljs.core.List.EMPTY);
} else
{return cljs.core.List.EMPTY;
}
} else
{var items__$1 = cljs.core.vec.call(null,items);var ditems = cljs.core.vec.call(null,cljs.core.distinct.call(null,items__$1));var freqs = cljs.core.frequencies.call(null,items__$1);var N = cljs.core.count.call(null,items__$1);var M = cljs.core.count.call(null,ditems);var from__$1 = (cljs.core.truth_((function (){var and__13811__auto__ = from;if(cljs.core.truth_(and__13811__auto__))
{return (from <= 1);
} else
{return and__13811__auto__;
}
})())?null:from);var to__$1 = (cljs.core.truth_((function (){var and__13811__auto__ = to;if(cljs.core.truth_(and__13811__auto__))
{return (to >= N);
} else
{return and__13811__auto__;
}
})())?null:to);if(!(((1 <= (function (){var or__13823__auto__ = from__$1;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return 1;
}
})())) && ((((function (){var or__13823__auto__ = from__$1;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return 1;
}
})() <= (function (){var or__13823__auto__ = to__$1;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return N;
}
})())) && (((function (){var or__13823__auto__ = to__$1;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
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
{var start_multiset = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__14516__auto__ = (function iter__323438(s__323439){return (new cljs.core.LazySeq(null,(function (){var s__323439__$1 = s__323439;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__323439__$1);if(temp__4092__auto__)
{var s__323439__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__323439__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__323439__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__323441 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__323440 = 0;while(true){
if((i__323440 < size__14515__auto__))
{var i = cljs.core._nth.call(null,c__14514__auto__,i__323440);var j = (i + 1);cljs.core.chunk_append.call(null,b__323441,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null));
{
var G__323494 = (i__323440 + 1);
i__323440 = G__323494;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__323441),iter__323438.call(null,cljs.core.chunk_rest.call(null,s__323439__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__323441),null);
}
} else
{var i = cljs.core.first.call(null,s__323439__$2);var j = (i + 1);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null),iter__323438.call(null,cljs.core.rest.call(null,s__323439__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14516__auto__.call(null,cljs.core.range.call(null,M));
})());var parts = foundation.app.data.combinatorics.multiset_partitions_M.call(null,start_multiset,to__$1,from__$1);var iter__14516__auto__ = (function iter__323442(s__323443){return (new cljs.core.LazySeq(null,(function (){var s__323443__$1 = s__323443;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__323443__$1);if(temp__4092__auto__)
{var s__323443__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__323443__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__323443__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__323445 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__323444 = 0;while(true){
if((i__323444 < size__14515__auto__))
{var part = cljs.core._nth.call(null,c__14514__auto__,i__323444);cljs.core.chunk_append.call(null,b__323445,(function (){var iter__14516__auto__ = ((function (i__323444,part,c__14514__auto__,size__14515__auto__,b__323445,s__323443__$2,temp__4092__auto__){
return (function iter__323470(s__323471){return (new cljs.core.LazySeq(null,((function (i__323444,part,c__14514__auto__,size__14515__auto__,b__323445,s__323443__$2,temp__4092__auto__){
return (function (){var s__323471__$1 = s__323471;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__323471__$1);if(temp__4092__auto____$1)
{var s__323471__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__323471__$2))
{var c__14514__auto____$1 = cljs.core.chunk_first.call(null,s__323471__$2);var size__14515__auto____$1 = cljs.core.count.call(null,c__14514__auto____$1);var b__323473 = cljs.core.chunk_buffer.call(null,size__14515__auto____$1);if((function (){var i__323472 = 0;while(true){
if((i__323472 < size__14515__auto____$1))
{var multiset = cljs.core._nth.call(null,c__14514__auto____$1,i__323472);cljs.core.chunk_append.call(null,b__323473,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__323472,i__323444,multiset,c__14514__auto____$1,size__14515__auto____$1,b__323473,s__323471__$2,temp__4092__auto____$1,part,c__14514__auto__,size__14515__auto__,b__323445,s__323443__$2,temp__4092__auto__){
return (function (p__323478){var vec__323479 = p__323478;var index = cljs.core.nth.call(null,vec__323479,0,null);var numtimes = cljs.core.nth.call(null,vec__323479,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__323472,i__323444,multiset,c__14514__auto____$1,size__14515__auto____$1,b__323473,s__323471__$2,temp__4092__auto____$1,part,c__14514__auto__,size__14515__auto__,b__323445,s__323443__$2,temp__4092__auto__))
,multiset)));
{
var G__323495 = (i__323472 + 1);
i__323472 = G__323495;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__323473),iter__323470.call(null,cljs.core.chunk_rest.call(null,s__323471__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__323473),null);
}
} else
{var multiset = cljs.core.first.call(null,s__323471__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__323444,multiset,s__323471__$2,temp__4092__auto____$1,part,c__14514__auto__,size__14515__auto__,b__323445,s__323443__$2,temp__4092__auto__){
return (function (p__323480){var vec__323481 = p__323480;var index = cljs.core.nth.call(null,vec__323481,0,null);var numtimes = cljs.core.nth.call(null,vec__323481,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__323444,multiset,s__323471__$2,temp__4092__auto____$1,part,c__14514__auto__,size__14515__auto__,b__323445,s__323443__$2,temp__4092__auto__))
,multiset)),iter__323470.call(null,cljs.core.rest.call(null,s__323471__$2)));
}
} else
{return null;
}
break;
}
});})(i__323444,part,c__14514__auto__,size__14515__auto__,b__323445,s__323443__$2,temp__4092__auto__))
,null,null));
});})(i__323444,part,c__14514__auto__,size__14515__auto__,b__323445,s__323443__$2,temp__4092__auto__))
;return iter__14516__auto__.call(null,part);
})());
{
var G__323496 = (i__323444 + 1);
i__323444 = G__323496;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__323445),iter__323442.call(null,cljs.core.chunk_rest.call(null,s__323443__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__323445),null);
}
} else
{var part = cljs.core.first.call(null,s__323443__$2);return cljs.core.cons.call(null,(function (){var iter__14516__auto__ = ((function (part,s__323443__$2,temp__4092__auto__){
return (function iter__323482(s__323483){return (new cljs.core.LazySeq(null,((function (part,s__323443__$2,temp__4092__auto__){
return (function (){var s__323483__$1 = s__323483;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__323483__$1);if(temp__4092__auto____$1)
{var s__323483__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__323483__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__323483__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__323485 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__323484 = 0;while(true){
if((i__323484 < size__14515__auto__))
{var multiset = cljs.core._nth.call(null,c__14514__auto__,i__323484);cljs.core.chunk_append.call(null,b__323485,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__323484,multiset,c__14514__auto__,size__14515__auto__,b__323485,s__323483__$2,temp__4092__auto____$1,part,s__323443__$2,temp__4092__auto__){
return (function (p__323490){var vec__323491 = p__323490;var index = cljs.core.nth.call(null,vec__323491,0,null);var numtimes = cljs.core.nth.call(null,vec__323491,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(i__323484,multiset,c__14514__auto__,size__14515__auto__,b__323485,s__323483__$2,temp__4092__auto____$1,part,s__323443__$2,temp__4092__auto__))
,multiset)));
{
var G__323497 = (i__323484 + 1);
i__323484 = G__323497;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__323485),iter__323482.call(null,cljs.core.chunk_rest.call(null,s__323483__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__323485),null);
}
} else
{var multiset = cljs.core.first.call(null,s__323483__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (multiset,s__323483__$2,temp__4092__auto____$1,part,s__323443__$2,temp__4092__auto__){
return (function (p__323492){var vec__323493 = p__323492;var index = cljs.core.nth.call(null,vec__323493,0,null);var numtimes = cljs.core.nth.call(null,vec__323493,1,null);return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - 1)));
});})(multiset,s__323483__$2,temp__4092__auto____$1,part,s__323443__$2,temp__4092__auto__))
,multiset)),iter__323482.call(null,cljs.core.rest.call(null,s__323483__$2)));
}
} else
{return null;
}
break;
}
});})(part,s__323443__$2,temp__4092__auto__))
,null,null));
});})(part,s__323443__$2,temp__4092__auto__))
;return iter__14516__auto__.call(null,part);
})(),iter__323442.call(null,cljs.core.rest.call(null,s__323443__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14516__auto__.call(null,parts);
} else
{return null;
}
}
}
}
};
var partitions_M = function (items,var_args){
var p__323379 = null;if (arguments.length > 1) {
  p__323379 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return partitions_M__delegate.call(this,items,p__323379);};
partitions_M.cljs$lang$maxFixedArity = 1;
partitions_M.cljs$lang$applyTo = (function (arglist__323498){
var items = cljs.core.first(arglist__323498);
var p__323379 = cljs.core.rest(arglist__323498);
return partitions_M__delegate(items,p__323379);
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
partitions.cljs$lang$applyTo = (function (arglist__323499){
var items = cljs.core.first(arglist__323499);
var args = cljs.core.rest(arglist__323499);
return partitions__delegate(items,args);
});
partitions.cljs$core$IFn$_invoke$arity$variadic = partitions__delegate;
return partitions;
})()
;

//# sourceMappingURL=combinatorics.js.map