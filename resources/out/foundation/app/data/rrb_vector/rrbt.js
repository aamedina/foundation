// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.app.data.rrb_vector.rrbt');
goog.require('cljs.core');
goog.require('foundation.app.data.rrb_vector.protocols');
goog.require('foundation.app.data.rrb_vector.transients');
goog.require('foundation.app.data.rrb_vector.nodes');
goog.require('foundation.app.data.rrb_vector.trees');
goog.require('foundation.app.data.rrb_vector.transients');
goog.require('foundation.app.data.rrb_vector.trees');
goog.require('foundation.app.data.rrb_vector.nodes');
goog.require('foundation.app.data.rrb_vector.protocols');
foundation.app.data.rrb_vector.rrbt.rrbt_concat_threshold = 33;
foundation.app.data.rrb_vector.rrbt.max_extra_search_steps = 2;
foundation.app.data.rrb_vector.rrbt.AsRRBT = (function (){var obj96368 = {};return obj96368;
})();
foundation.app.data.rrb_vector.rrbt._as_rrbt = (function _as_rrbt(v){if((function (){var and__13810__auto__ = v;if(and__13810__auto__)
{return v.foundation$app$data$rrb_vector$rrbt$AsRRBT$_as_rrbt$arity$1;
} else
{return and__13810__auto__;
}
})())
{return v.foundation$app$data$rrb_vector$rrbt$AsRRBT$_as_rrbt$arity$1(v);
} else
{var x__14425__auto__ = (((v == null))?null:v);return (function (){var or__13822__auto__ = (foundation.app.data.rrb_vector.rrbt._as_rrbt[goog.typeOf(x__14425__auto__)]);if(or__13822__auto__)
{return or__13822__auto__;
} else
{var or__13822__auto____$1 = (foundation.app.data.rrb_vector.rrbt._as_rrbt["_"]);if(or__13822__auto____$1)
{return or__13822__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"AsRRBT.-as-rrbt",v);
}
}
})().call(null,v);
}
});

/**
* @constructor
*/
foundation.app.data.rrb_vector.rrbt.RRBChunkedSeq = (function (vec,node,i,off,meta,__hash){
this.vec = vec;
this.node = node;
this.i = i;
this.off = off;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2179858668;
this.cljs$lang$protocol_mask$partition1$ = 1536;
})
foundation.app.data.rrb_vector.rrbt.RRBChunkedSeq.cljs$lang$type = true;
foundation.app.data.rrb_vector.rrbt.RRBChunkedSeq.cljs$lang$ctorStr = "foundation.app.data.rrb-vector.rrbt/RRBChunkedSeq";
foundation.app.data.rrb_vector.rrbt.RRBChunkedSeq.cljs$lang$ctorPrWriter = (function (this__14366__auto__,writer__14367__auto__,opt__14368__auto__){return cljs.core._write.call(null,writer__14367__auto__,"foundation.app.data.rrb-vector.rrbt/RRBChunkedSeq");
});
foundation.app.data.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__14233__auto__ = self__.__hash;if(!((h__14233__auto__ == null)))
{return h__14233__auto__;
} else
{var h__14233__auto____$1 = cljs.core.hash_coll.call(null,coll__$1);self__.__hash = h__14233__auto____$1;
return h__14233__auto____$1;
}
});
foundation.app.data.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if(((self__.off + 1) < self__.node.length))
{var s = foundation.app.data.rrb_vector.rrbt.rrb_chunked_seq.call(null,self__.vec,self__.node,self__.i,(self__.off + 1));if((s == null))
{return null;
} else
{return s;
}
} else
{return cljs.core._chunked_next.call(null,coll__$1);
}
});
foundation.app.data.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,this$__$1);
});
foundation.app.data.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons.call(null,o,coll__$1);
});
foundation.app.data.rrb_vector.rrbt.RRBChunkedSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_.call(null,coll);
});
foundation.app.data.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.ci_reduce.call(null,clsj.core.subvec.call(null,self__.vec,(self__.i + self__.off),cljs.core.count.call(null,self__.vec)),f);
});
foundation.app.data.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.ci_reduce.call(null,cljs.core.subvec.call(null,self__.vec,(self__.i + self__.off),cljs.core.count.call(null,self__.vec)),f,start);
});
foundation.app.data.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
foundation.app.data.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (self__.node[self__.off]);
});
foundation.app.data.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if(((self__.off + 1) < self__.node.length))
{var s = foundation.app.data.rrb_vector.rrbt.rrb_chunked_seq.call(null,self__.vec,self__.node,self__.i,(self__.off + 1));if((s == null))
{return cljs.core.List.EMPTY;
} else
{return s;
}
} else
{return cljs.core._chunked_rest.call(null,coll__$1);
}
});
foundation.app.data.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var l = self__.node.length;var s = ((((self__.i + l) < cljs.core._count.call(null,self__.vec)))?foundation.app.data.rrb_vector.rrbt.rrb_chunked_seq.call(null,self__.vec,(self__.i + l),0):null);if((s == null))
{return null;
} else
{return s;
}
});
foundation.app.data.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential.call(null,coll__$1,other);
});
foundation.app.data.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){var self__ = this;
var coll__$1 = this;return foundation.app.data.rrb_vector.rrbt.rrb_chunked_seq.call(null,self__.vec,self__.node,self__.i,self__.off,m);
});
foundation.app.data.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
foundation.app.data.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta);
});
foundation.app.data.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.array_chunk.call(null,self__.node,self__.off);
});
foundation.app.data.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var l = self__.node.length;var s = ((((self__.i + l) < cljs.core._count.call(null,self__.vec)))?foundation.app.data.rrb_vector.rrbt.rrb_chunked_seq.call(null,self__.vec,(self__.i + l),0):null);if((s == null))
{return cljs.core.List.EMPTY;
} else
{return s;
}
});
foundation.app.data.rrb_vector.rrbt.__GT_RRBChunkedSeq = (function __GT_RRBChunkedSeq(vec,node,i,off,meta,__hash){return (new foundation.app.data.rrb_vector.rrbt.RRBChunkedSeq(vec,node,i,off,meta,__hash));
});
foundation.app.data.rrb_vector.rrbt.rrb_chunked_seq = (function() {
var rrb_chunked_seq = null;
var rrb_chunked_seq__3 = (function (vec,i,off){var cnt = vec.cnt;var shift = vec.shift;var root = vec.root;var tail = vec.tail;return (new foundation.app.data.rrb_vector.rrbt.RRBChunkedSeq(vec,foundation.app.data.rrb_vector.trees.array_for.call(null,cnt,shift,root,tail,i),i,off,null,null));
});
var rrb_chunked_seq__4 = (function (vec,node,i,off){return (new foundation.app.data.rrb_vector.rrbt.RRBChunkedSeq(vec,node,i,off,null,null));
});
var rrb_chunked_seq__5 = (function (vec,node,i,off,meta){return (new foundation.app.data.rrb_vector.rrbt.RRBChunkedSeq(vec,node,i,off,meta,null));
});
rrb_chunked_seq = function(vec,node,i,off,meta){
switch(arguments.length){
case 3:
return rrb_chunked_seq__3.call(this,vec,node,i);
case 4:
return rrb_chunked_seq__4.call(this,vec,node,i,off);
case 5:
return rrb_chunked_seq__5.call(this,vec,node,i,off,meta);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rrb_chunked_seq.cljs$core$IFn$_invoke$arity$3 = rrb_chunked_seq__3;
rrb_chunked_seq.cljs$core$IFn$_invoke$arity$4 = rrb_chunked_seq__4;
rrb_chunked_seq.cljs$core$IFn$_invoke$arity$5 = rrb_chunked_seq__5;
return rrb_chunked_seq;
})()
;
foundation.app.data.rrb_vector.rrbt.slice_right = (function slice_right(node,shift,end){if((shift === 0))
{var arr = node.arr;var new_arr = (new Array(end));cljs.core.array_copy.call(null,arr,0,new_arr,0,end);
return cljs.core.__GT_VectorNode.call(null,null,new_arr);
} else
{var reg_QMARK_ = foundation.app.data.rrb_vector.nodes.regular_QMARK_.call(null,node);var rngs = ((!(reg_QMARK_))?foundation.app.data.rrb_vector.nodes.ranges.call(null,node):null);var i = (((end - 1) >> shift) & 31);var i__$1 = ((reg_QMARK_)?i:(function (){var j = i;while(true){
if((end <= (rngs[j])))
{return j;
} else
{{
var G__96369 = (j + 1);
j = G__96369;
continue;
}
}
break;
}
})());var child_end = ((reg_QMARK_)?(function (){var ce = cljs.core.mod.call(null,end,(1 << shift));if((ce === 0))
{return (1 << shift);
} else
{return ce;
}
})():(((i__$1 > 0))?(end - (rngs[(i__$1 - 1)])):end));var arr = node.arr;var new_child = slice_right.call(null,(arr[i__$1]),(shift - 5),child_end);var regular_child_QMARK_ = (((shift === 5))?(32 === new_child.arr.length):foundation.app.data.rrb_vector.nodes.regular_QMARK_.call(null,new_child));var new_arr = (new Array((((reg_QMARK_) && (regular_child_QMARK_))?32:33)));var new_child_rng = ((regular_child_QMARK_)?(function (){var m = cljs.core.mod.call(null,child_end,(1 << shift));if((m === 0))
{return (1 << shift);
} else
{return m;
}
})():(((shift === 5))?new_child.arr.length:foundation.app.data.rrb_vector.nodes.last_range.call(null,new_child)));cljs.core.array_copy.call(null,arr,0,new_arr,0,i__$1);
(new_arr[i__$1] = new_child);
if(!((reg_QMARK_) && (regular_child_QMARK_)))
{var new_rngs_96370 = (new Array(33));var step_96371 = (1 << shift);if(reg_QMARK_)
{var n__14645__auto___96372 = i__$1;var j_96373 = 0;while(true){
if((j_96373 < n__14645__auto___96372))
{(new_rngs_96370[j_96373] = ((j_96373 + 1) * step_96371));
{
var G__96374 = (j_96373 + 1);
j_96373 = G__96374;
continue;
}
} else
{}
break;
}
} else
{var n__14645__auto___96375 = i__$1;var j_96376 = 0;while(true){
if((j_96376 < n__14645__auto___96375))
{(new_rngs_96370[j_96376] = (rngs[j_96376]));
{
var G__96377 = (j_96376 + 1);
j_96376 = G__96377;
continue;
}
} else
{}
break;
}
}
(new_rngs_96370[i__$1] = ((((i__$1 > 0))?(new_rngs_96370[(i__$1 - 1)]):0) + new_child_rng));
(new_rngs_96370[32] = (i__$1 + 1));
(new_arr[32] = new_rngs_96370);
} else
{}
return cljs.core.__GT_VectorNode.call(null,null,new_arr);
}
});
foundation.app.data.rrb_vector.rrbt.slice_left = (function slice_left(node,shift,start,end){if((shift === 0))
{var arr = node.arr;var new_len = (arr.length - start);var new_arr = (new Array(new_len));cljs.core.array_copy.call(null,arr,start,new_arr,0,new_len);
return cljs.core.__GT_VectorNode.call(null,null,new_arr);
} else
{var reg_QMARK_ = foundation.app.data.rrb_vector.nodes.regular_QMARK_.call(null,node);var arr = node.arr;var rngs = ((!(reg_QMARK_))?foundation.app.data.rrb_vector.nodes.ranges.call(null,node):null);var i = ((start >> shift) & 31);var i__$1 = ((reg_QMARK_)?i:(function (){var j = i;while(true){
if((start < (rngs[j])))
{return j;
} else
{{
var G__96378 = (j + 1);
j = G__96378;
continue;
}
}
break;
}
})());var len = ((reg_QMARK_)?(function (){var i__$2 = i__$1;while(true){
if(((i__$2 === 32)) || (((arr[i__$2]) == null)))
{return i__$2;
} else
{{
var G__96379 = (i__$2 + 1);
i__$2 = G__96379;
continue;
}
}
break;
}
})():(rngs[32]));var child_start = (((i__$1 > 0))?(start - ((reg_QMARK_)?(i__$1 * (1 << shift)):(rngs[(i__$1 - 1)]))):start);var child_end = (function (){var x__14136__auto__ = (1 << shift);var y__14137__auto__ = (((i__$1 > 0))?(end - ((reg_QMARK_)?(i__$1 * (1 << shift)):(rngs[(i__$1 - 1)]))):end);return ((x__14136__auto__ < y__14137__auto__) ? x__14136__auto__ : y__14137__auto__);
})();var new_child = slice_left.call(null,(arr[i__$1]),(shift - 5),child_start,child_end);var new_len = (len - i__$1);var new_len__$1 = (((new_child == null))?(new_len - 1):new_len);if((new_len__$1 === 0))
{return null;
} else
{if(reg_QMARK_)
{var new_arr = (new Array(33));var rngs__$1 = (new Array(33));var rng0 = ((((new_child == null)) || ((shift === 5)) || (foundation.app.data.rrb_vector.nodes.regular_QMARK_.call(null,new_child)))?((1 << shift) - ((start >> (shift - 5)) & 31)):foundation.app.data.rrb_vector.nodes.last_range.call(null,new_child));var step = (1 << shift);var j_96380 = 0;var r_96381 = rng0;while(true){
if((j_96380 < new_len__$1))
{(rngs__$1[j_96380] = r_96381);
{
var G__96382 = (j_96380 + 1);
var G__96383 = (r_96381 + step);
j_96380 = G__96382;
r_96381 = G__96383;
continue;
}
} else
{}
break;
}
(rngs__$1[(new_len__$1 - 1)] = (end - start));
(rngs__$1[32] = new_len__$1);
cljs.core.array_copy.call(null,arr,(((new_child == null))?(i__$1 + 1):i__$1),new_arr,0,new_len__$1);
if(!((new_child == null)))
{(new_arr[0] = new_child);
} else
{}
(new_arr[32] = rngs__$1);
return cljs.core.__GT_VectorNode.call(null,node.edit,new_arr);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var new_arr = (new Array(33));var new_rngs = (new Array(33));var j_96384 = 0;var i_96385__$2 = i__$1;while(true){
if((j_96384 < new_len__$1))
{(new_rngs[j_96384] = ((rngs[i_96385__$2]) - start));
{
var G__96386 = (j_96384 + 1);
var G__96387 = (i_96385__$2 + 1);
j_96384 = G__96386;
i_96385__$2 = G__96387;
continue;
}
} else
{}
break;
}
(new_rngs[32] = new_len__$1);
cljs.core.array_copy.call(null,arr,(((new_child == null))?(i__$1 + 1):i__$1),new_arr,0,new_len__$1);
if(!((new_child == null)))
{(new_arr[0] = new_child);
} else
{}
(new_arr[32] = new_rngs);
return cljs.core.__GT_VectorNode.call(null,node.edit,new_arr);
} else
{return null;
}
}
}
}
});

/**
* @constructor
*/
foundation.app.data.rrb_vector.rrbt.Vector = (function (cnt,shift,root,tail,meta,__hash){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 2052;
this.cljs$lang$protocol_mask$partition0$ = 2315152159;
})
foundation.app.data.rrb_vector.rrbt.Vector.cljs$lang$type = true;
foundation.app.data.rrb_vector.rrbt.Vector.cljs$lang$ctorStr = "foundation.app.data.rrb-vector.rrbt/Vector";
foundation.app.data.rrb_vector.rrbt.Vector.cljs$lang$ctorPrWriter = (function (this__14366__auto__,writer__14367__auto__,opt__14368__auto__){return cljs.core._write.call(null,writer__14367__auto__,"foundation.app.data.rrb-vector.rrbt/Vector");
});
foundation.app.data.rrb_vector.rrbt.Vector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return foundation.app.data.rrb_vector.rrbt.__GT_Transient.call(null,self__.cnt,self__.shift,foundation.app.data.rrb_vector.transients.editable_root.call(null,self__.root),foundation.app.data.rrb_vector.transients.editable_tail.call(null,self__.tail),self__.tail.length);
});
foundation.app.data.rrb_vector.rrbt.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var h__14233__auto__ = self__.__hash;if(!((h__14233__auto__ == null)))
{return h__14233__auto__;
} else
{var h__14233__auto____$1 = cljs.core.hash_coll.call(null,this$__$1);self__.__hash = h__14233__auto____$1;
return h__14233__auto____$1;
}
});
foundation.app.data.rrb_vector.rrbt.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;return cljs.core._nth.call(null,this$__$1,k,null);
});
foundation.app.data.rrb_vector.rrbt.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){var self__ = this;
var this$__$1 = this;return cljs.core._nth.call(null,this$__$1,k,not_found);
});
foundation.app.data.rrb_vector.rrbt.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,k,v){var self__ = this;
var this$__$1 = this;return cljs.core._assoc_n.call(null,this$__$1,k,v);
});
foundation.app.data.rrb_vector.rrbt.Vector.prototype.call = (function() {
var G__96392 = null;
var G__96392__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$IIndexed$_nth$arity$2(null,k);
});
var G__96392__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});
G__96392 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__96392__2.call(this,self__,k);
case 3:
return G__96392__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__96392;
})()
;
foundation.app.data.rrb_vector.rrbt.Vector.prototype.apply = (function (self__,args96388){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args96388)));
});
foundation.app.data.rrb_vector.rrbt.Vector.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var this$ = this;return this$.cljs$core$IIndexed$_nth$arity$2(null,k);
});
foundation.app.data.rrb_vector.rrbt.Vector.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var this$ = this;return this$.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});
foundation.app.data.rrb_vector.rrbt.Vector.prototype.foundation$app$data$rrb_vector$protocols$PSpliceableVector$ = true;
foundation.app.data.rrb_vector.rrbt.Vector.prototype.foundation$app$data$rrb_vector$protocols$PSpliceableVector$_splicev$arity$2 = (function (this$,that){var self__ = this;
var this$__$1 = this;return foundation.app.data.rrb_vector.rrbt.splice_rrbts.call(null,this$__$1,foundation.app.data.rrb_vector.rrbt._as_rrbt.call(null,that));
});
foundation.app.data.rrb_vector.rrbt.Vector.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,this$__$1);
});
foundation.app.data.rrb_vector.rrbt.Vector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this$,f,init){var self__ = this;
var this$__$1 = this;var i = 0;var j = 0;var init__$1 = init;var arr = foundation.app.data.rrb_vector.trees.array_for.call(null,self__.cnt,self__.shift,self__.root,self__.tail,i);var lim = (arr.length - 1);var step = (lim + 1);while(true){
var init__$2 = f.call(null,init__$1,(i + j),(arr[j]));if(cljs.core.reduced_QMARK_.call(null,init__$2))
{return cljs.core.deref.call(null,init__$2);
} else
{if((j < lim))
{{
var G__96393 = i;
var G__96394 = (j + 1);
var G__96395 = init__$2;
var G__96396 = arr;
var G__96397 = lim;
var G__96398 = step;
i = G__96393;
j = G__96394;
init__$1 = G__96395;
arr = G__96396;
lim = G__96397;
step = G__96398;
continue;
}
} else
{var i__$1 = (i + step);if((i__$1 < self__.cnt))
{var arr__$1 = foundation.app.data.rrb_vector.trees.array_for.call(null,self__.cnt,self__.shift,self__.root,self__.tail,i__$1);var len = arr__$1.length;var lim__$1 = (len - 1);{
var G__96399 = i__$1;
var G__96400 = 0;
var G__96401 = init__$2;
var G__96402 = arr__$1;
var G__96403 = lim__$1;
var G__96404 = len;
i = G__96399;
j = G__96400;
init__$1 = G__96401;
arr = G__96402;
lim = G__96403;
step = G__96404;
continue;
}
} else
{return init__$2;
}
}
}
break;
}
});
foundation.app.data.rrb_vector.rrbt.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,val){var self__ = this;
var this$__$1 = this;if((self__.tail.length < 32))
{var tail_len = self__.tail.length;var new_tail = (new Array((tail_len + 1)));cljs.core.array_copy.call(null,self__.tail,0,new_tail,0,tail_len);
(new_tail[tail_len] = val);
return (new foundation.app.data.rrb_vector.rrbt.Vector((self__.cnt + 1),self__.shift,self__.root,new_tail,self__.meta,null));
} else
{var tail_node = cljs.core.__GT_VectorNode.call(null,self__.root.edit,self__.tail);var new_tail = (function (){var new_arr = (new Array(1));(new_arr[0] = val);
return new_arr;
})();if(foundation.app.data.rrb_vector.nodes.overflow_QMARK_.call(null,self__.root,self__.shift,self__.cnt))
{if(foundation.app.data.rrb_vector.nodes.regular_QMARK_.call(null,self__.root))
{var new_arr = (new Array(32));var new_root = cljs.core.__GT_VectorNode.call(null,self__.root.edit,new_arr);var G__96389_96405 = new_arr;(G__96389_96405[0] = self__.root);
(G__96389_96405[1] = foundation.app.data.rrb_vector.trees.new_path.call(null,self__.tail,self__.root.edit,self__.shift,tail_node));
return (new foundation.app.data.rrb_vector.rrbt.Vector((self__.cnt + 1),(self__.shift + 5),new_root,new_tail,self__.meta,null));
} else
{var new_arr = (new Array(33));var new_rngs = (new Array(33));var new_root = cljs.core.__GT_VectorNode.call(null,self__.root.edit,new_arr);var root_total_range = (foundation.app.data.rrb_vector.nodes.ranges.call(null,self__.root)[31]);var G__96390_96406 = new_arr;(G__96390_96406[0] = self__.root);
(G__96390_96406[1] = foundation.app.data.rrb_vector.trees.new_path.call(null,self__.tail,self__.root.edit,self__.shift,tail_node));
(G__96390_96406[32] = new_rngs);
var G__96391_96407 = new_rngs;(G__96391_96407[0] = root_total_range);
(G__96391_96407[1] = (root_total_range + 32));
(G__96391_96407[32] = 2);
return (new foundation.app.data.rrb_vector.rrbt.Vector((self__.cnt + 1),(self__.shift + 5),new_root,new_tail,self__.meta,null));
}
} else
{return (new foundation.app.data.rrb_vector.rrbt.Vector((self__.cnt + 1),self__.shift,foundation.app.data.rrb_vector.trees.push_tail.call(null,self__.shift,self__.cnt,self__.root.edit,self__.root,tail_node),new_tail,self__.meta,null));
}
}
});
foundation.app.data.rrb_vector.rrbt.Vector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((self__.cnt > 0))
{return (new cljs.core.RSeq(this$__$1,(self__.cnt - 1),null));
} else
{return null;
}
});
foundation.app.data.rrb_vector.rrbt.Vector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core._nth.call(null,this$__$1,0);
});
foundation.app.data.rrb_vector.rrbt.Vector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core._nth.call(null,this$__$1,1);
});
foundation.app.data.rrb_vector.rrbt.Vector.prototype.foundation$app$data$rrb_vector$protocols$PSliceableVector$ = true;
foundation.app.data.rrb_vector.rrbt.Vector.prototype.foundation$app$data$rrb_vector$protocols$PSliceableVector$_slicev$arity$3 = (function (this$,start,end){var self__ = this;
var this$__$1 = this;var new_cnt = (end - start);if(((start < 0)) || ((end > self__.cnt)))
{throw (new Error("vector index out of bounds"));
} else
{if((start === end))
{return cljs.core.empty.call(null,this$__$1);
} else
{if((start > end))
{throw (new Error("start index greater than end index"));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var tail_off = foundation.app.data.rrb_vector.trees.tail_offset.call(null,self__.cnt,self__.tail);if((start >= tail_off))
{var new_tail = (new Array(new_cnt));cljs.core.array_copy.call(null,self__.tail,(start - tail_off),new_tail,0,new_cnt);
return (new foundation.app.data.rrb_vector.rrbt.Vector(new_cnt,5,foundation.app.data.rrb_vector.nodes.empty_node,new_tail,self__.meta,null));
} else
{var tail_cut_QMARK_ = (end > tail_off);var new_root = ((tail_cut_QMARK_)?self__.root:foundation.app.data.rrb_vector.rrbt.slice_right.call(null,self__.root,self__.shift,end));var new_root__$1 = (((start === 0))?new_root:foundation.app.data.rrb_vector.rrbt.slice_left.call(null,new_root,self__.shift,start,(function (){var x__14136__auto__ = end;var y__14137__auto__ = tail_off;return ((x__14136__auto__ < y__14137__auto__) ? x__14136__auto__ : y__14137__auto__);
})()));var new_tail = ((tail_cut_QMARK_)?(function (){var new_len = (end - tail_off);var new_tail = (new Array(new_len));cljs.core.array_copy.call(null,self__.tail,0,new_tail,0,new_len);
return new_tail;
})():foundation.app.data.rrb_vector.trees.array_for.call(null,new_cnt,self__.shift,new_root__$1,[],(new_cnt - 1)));var new_root__$2 = ((tail_cut_QMARK_)?new_root__$1:foundation.app.data.rrb_vector.trees.pop_tail.call(null,self__.shift,new_cnt,new_root__$1.edit,new_root__$1));if((new_root__$2 == null))
{return (new foundation.app.data.rrb_vector.rrbt.Vector(new_cnt,5,foundation.app.data.rrb_vector.nodes.empty_node,new_tail,self__.meta,null));
} else
{var r = new_root__$2;var s = self__.shift;while(true){
if(((s > 5)) && (((r.arr[1]) == null)))
{{
var G__96408 = (r.arr[0]);
var G__96409 = (s - 5);
r = G__96408;
s = G__96409;
continue;
}
} else
{return (new foundation.app.data.rrb_vector.rrbt.Vector(new_cnt,s,r,new_tail,self__.meta,null));
}
break;
}
}
}
} else
{return null;
}
}
}
}
});
foundation.app.data.rrb_vector.rrbt.Vector.prototype.toString = (function (){var self__ = this;
var this$ = this;return cljs.core.pr_str_STAR_.call(null,this$);
});
foundation.app.data.rrb_vector.rrbt.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){var self__ = this;
var this$__$1 = this;return cljs.core.ci_reduce.call(null,this$__$1,f);
});
foundation.app.data.rrb_vector.rrbt.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,start){var self__ = this;
var this$__$1 = this;return cljs.core.ci_reduce.call(null,this$__$1,f,start);
});
foundation.app.data.rrb_vector.rrbt.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((self__.cnt === 0))
{return null;
} else
{if((foundation.app.data.rrb_vector.trees.tail_offset.call(null,self__.cnt,self__.tail) === 0))
{return cljs.core.array_seq.call(null,self__.tail);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return foundation.app.data.rrb_vector.rrbt.rrb_chunked_seq.call(null,this$__$1,0,0);
} else
{return null;
}
}
}
});
foundation.app.data.rrb_vector.rrbt.Vector.prototype.foundation$app$data$rrb_vector$rrbt$AsRRBT$ = true;
foundation.app.data.rrb_vector.rrbt.Vector.prototype.foundation$app$data$rrb_vector$rrbt$AsRRBT$_as_rrbt$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return this$__$1;
});
foundation.app.data.rrb_vector.rrbt.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.cnt;
});
foundation.app.data.rrb_vector.rrbt.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((self__.cnt > 0))
{return cljs.core._nth.call(null,this$__$1,(self__.cnt - 1));
} else
{return null;
}
});
foundation.app.data.rrb_vector.rrbt.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((self__.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === self__.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,self__.meta);
} else
{if((self__.tail.length > 1))
{var new_tail = (new Array((self__.tail.length - 1)));cljs.core.array_copy.call(null,self__.tail,0,new_tail,0,new_tail.length);
return (new foundation.app.data.rrb_vector.rrbt.Vector((self__.cnt - 1),self__.shift,self__.root,new_tail,self__.meta,null));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var new_tail = foundation.app.data.rrb_vector.trees.array_for.call(null,self__.cnt,self__.shift,self__.root,self__.tail,(self__.cnt - 2));var root_cnt = foundation.app.data.rrb_vector.trees.tail_offset.call(null,self__.cnt,self__.tail);var new_root = foundation.app.data.rrb_vector.trees.pop_tail.call(null,self__.shift,root_cnt,self__.root.edit,self__.root);if((new_root == null))
{return (new foundation.app.data.rrb_vector.rrbt.Vector((self__.cnt - 1),self__.shift,foundation.app.data.rrb_vector.nodes.empty_node,new_tail,self__.meta,null));
} else
{if(((self__.shift > 5)) && (((new_root.arr[1]) == null)))
{return (new foundation.app.data.rrb_vector.rrbt.Vector((self__.cnt - 1),(self__.shift - 5),(new_root.arr[0]),new_tail,self__.meta,null));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return (new foundation.app.data.rrb_vector.rrbt.Vector((self__.cnt - 1),self__.shift,new_root,new_tail,self__.meta,null));
} else
{return null;
}
}
}
} else
{return null;
}
}
}
}
});
foundation.app.data.rrb_vector.rrbt.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (this$,i,val){var self__ = this;
var this$__$1 = this;if(((0 <= i)) && ((i < self__.cnt)))
{var tail_off = foundation.app.data.rrb_vector.trees.tail_offset.call(null,self__.cnt,self__.tail);if((i >= tail_off))
{var new_tail = (new Array(self__.tail.length));var idx = (i - tail_off);cljs.core.array_copy.call(null,self__.tail,0,new_tail,0,self__.tail.length);
(new_tail[idx] = val);
return (new foundation.app.data.rrb_vector.rrbt.Vector(self__.cnt,self__.shift,self__.root,new_tail,self__.meta,null));
} else
{return (new foundation.app.data.rrb_vector.rrbt.Vector(self__.cnt,self__.shift,foundation.app.data.rrb_vector.trees.do_assoc.call(null,self__.shift,self__.root,i,val),self__.tail,self__.meta,null));
}
} else
{if((i === self__.cnt))
{return cljs.core._conj.call(null,this$__$1,val);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.vector_index_out_of_bounds.call(null,i,self__.cnt);
} else
{return null;
}
}
}
});
foundation.app.data.rrb_vector.rrbt.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,that){var self__ = this;
var this$__$1 = this;return cljs.core.equiv_sequential.call(null,this$__$1,that);
});
foundation.app.data.rrb_vector.rrbt.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta__$1){var self__ = this;
var this$__$1 = this;return (new foundation.app.data.rrb_vector.rrbt.Vector(self__.cnt,self__.shift,self__.root,self__.tail,meta__$1,self__.__hash));
});
foundation.app.data.rrb_vector.rrbt.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.meta;
});
foundation.app.data.rrb_vector.rrbt.Vector.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,that){var self__ = this;
var this$__$1 = this;return cljs.core.compare_indexed.call(null,this$__$1,that);
});
foundation.app.data.rrb_vector.rrbt.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,i){var self__ = this;
var this$__$1 = this;if(((0 <= i)) && ((i < self__.cnt)))
{var tail_off = (self__.cnt - self__.tail.length);if((tail_off <= i))
{return (self__.tail[(i - tail_off)]);
} else
{var i__$1 = i;var node = self__.root;var shift__$1 = self__.shift;while(true){
if((shift__$1 === 0))
{var arr = node.arr;return (arr[((i__$1 >> shift__$1) & 31)]);
} else
{if(foundation.app.data.rrb_vector.nodes.regular_QMARK_.call(null,node))
{var arr = node.arr;var idx = ((i__$1 >> shift__$1) & 31);var i__$2 = i__$1;var node__$1 = (arr[idx]);var shift__$2 = (shift__$1 - 5);while(true){
var arr__$1 = node__$1.arr;var idx__$1 = ((i__$2 >> shift__$2) & 31);if((shift__$2 === 0))
{return (arr__$1[idx__$1]);
} else
{{
var G__96410 = i__$2;
var G__96411 = (arr__$1[idx__$1]);
var G__96412 = (shift__$2 - 5);
i__$2 = G__96410;
node__$1 = G__96411;
shift__$2 = G__96412;
continue;
}
}
break;
}
} else
{var arr = node.arr;var rngs = foundation.app.data.rrb_vector.nodes.ranges.call(null,node);var idx = (function (){var j = ((i__$1 >> shift__$1) & 31);while(true){
if((i__$1 < (rngs[j])))
{return j;
} else
{{
var G__96413 = (j + 1);
j = G__96413;
continue;
}
}
break;
}
})();var i__$2 = (((idx === 0))?i__$1:(i__$1 - (rngs[(idx - 1)])));{
var G__96414 = i__$2;
var G__96415 = (arr[idx]);
var G__96416 = (shift__$1 - 5);
i__$1 = G__96414;
node = G__96415;
shift__$1 = G__96416;
continue;
}
}
}
break;
}
}
} else
{return cljs.core.vector_index_out_of_bounds.call(null,i,self__.cnt);
}
});
foundation.app.data.rrb_vector.rrbt.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,i,not_found){var self__ = this;
var this$__$1 = this;if(((i >= 0)) && ((i < self__.cnt)))
{return cljs.core._nth.call(null,this$__$1,i);
} else
{return not_found;
}
});
foundation.app.data.rrb_vector.rrbt.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,self__.meta);
});
foundation.app.data.rrb_vector.rrbt.__GT_Vector = (function __GT_Vector(cnt,shift,root,tail,meta,__hash){return (new foundation.app.data.rrb_vector.rrbt.Vector(cnt,shift,root,tail,meta,__hash));
});
cljs.core.Subvec.prototype.foundation$app$data$rrb_vector$rrbt$AsRRBT$ = true;
cljs.core.Subvec.prototype.foundation$app$data$rrb_vector$rrbt$AsRRBT$_as_rrbt$arity$1 = (function (this$){var this$__$1 = this;var v = this$__$1.v;var start = this$__$1.start;var end = this$__$1.end;return foundation.app.data.rrb_vector.protocols._slicev.call(null,foundation.app.data.rrb_vector.rrbt._as_rrbt.call(null,v),start,end);
});
cljs.core.PersistentVector.prototype.foundation$app$data$rrb_vector$rrbt$AsRRBT$ = true;
cljs.core.PersistentVector.prototype.foundation$app$data$rrb_vector$rrbt$AsRRBT$_as_rrbt$arity$1 = (function (this$){var this$__$1 = this;return (new foundation.app.data.rrb_vector.rrbt.Vector(cljs.core.count.call(null,this$__$1),this$__$1.shift,this$__$1.root,this$__$1.tail,cljs.core.meta.call(null,this$__$1),null));
});
foundation.app.data.rrb_vector.rrbt.shift_from_to = (function shift_from_to(node,from,to){while(true){
if((from === to))
{return node;
} else
{if(foundation.app.data.rrb_vector.nodes.regular_QMARK_.call(null,node))
{{
var G__96423 = cljs.core.__GT_VectorNode.call(null,node.edit,(function (){var G__96420 = (new Array(32));(G__96420[0] = node);
return G__96420;
})());
var G__96424 = (5 + from);
var G__96425 = to;
node = G__96423;
from = G__96424;
to = G__96425;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__96426 = cljs.core.__GT_VectorNode.call(null,node.edit,(function (){var G__96421 = (new Array(33));(G__96421[0] = node);
(G__96421[32] = (function (){var G__96422 = (new Array(33));(G__96422[0] = foundation.app.data.rrb_vector.nodes.last_range.call(null,node));
(G__96422[32] = 1);
return G__96422;
})());
return G__96421;
})());
var G__96427 = (5 + from);
var G__96428 = to;
node = G__96426;
from = G__96427;
to = G__96428;
continue;
}
} else
{return null;
}
}
}
break;
}
});
foundation.app.data.rrb_vector.rrbt.slot_count = (function slot_count(node,shift){var arr = node.arr;if((shift === 0))
{return arr.length;
} else
{if(foundation.app.data.rrb_vector.nodes.regular_QMARK_.call(null,node))
{return foundation.app.data.rrb_vector.nodes.index_of_nil.call(null,arr);
} else
{var rngs = foundation.app.data.rrb_vector.nodes.ranges.call(null,node);return (rngs[32]);
}
}
});
foundation.app.data.rrb_vector.rrbt.subtree_branch_count = (function subtree_branch_count(node,shift){var arr = node.arr;var cs = (shift - 5);if(foundation.app.data.rrb_vector.nodes.regular_QMARK_.call(null,node))
{var i = 0;var sbc = 0;while(true){
if((i === 32))
{return sbc;
} else
{var temp__4090__auto__ = (arr[i]);if(cljs.core.truth_(temp__4090__auto__))
{var child = temp__4090__auto__;{
var G__96429 = (i + 1);
var G__96430 = (sbc + foundation.app.data.rrb_vector.rrbt.slot_count.call(null,child,cs));
i = G__96429;
sbc = G__96430;
continue;
}
} else
{return sbc;
}
}
break;
}
} else
{var lim = (foundation.app.data.rrb_vector.nodes.ranges.call(null,node)[32]);var i = 0;var sbc = 0;while(true){
if((i === lim))
{return sbc;
} else
{var child = (arr[i]);{
var G__96431 = (i + 1);
var G__96432 = (sbc + foundation.app.data.rrb_vector.rrbt.slot_count.call(null,child,cs));
i = G__96431;
sbc = G__96432;
continue;
}
}
break;
}
}
});
foundation.app.data.rrb_vector.rrbt.leaf_seq = (function leaf_seq(arr){return cljs.core.mapcat.call(null,(function (p1__96433_SHARP_){return p1__96433_SHARP_.arr;
}),cljs.core.take.call(null,foundation.app.data.rrb_vector.nodes.index_of_nil.call(null,arr),arr));
});
foundation.app.data.rrb_vector.rrbt.rebalance_leaves = (function rebalance_leaves(n1,cnt1,n2,cnt2,transferred_leaves){var slc1 = foundation.app.data.rrb_vector.rrbt.slot_count.call(null,n1,5);var slc2 = foundation.app.data.rrb_vector.rrbt.slot_count.call(null,n2,5);var a = (slc1 + slc2);var sbc1 = foundation.app.data.rrb_vector.rrbt.subtree_branch_count.call(null,n1,5);var sbc2 = foundation.app.data.rrb_vector.rrbt.subtree_branch_count.call(null,n2,5);var p = (sbc1 + sbc2);var e = (a - (cljs.core.quot.call(null,(p - 1),32) + 1));if((e <= foundation.app.data.rrb_vector.rrbt.max_extra_search_steps))
{return [n1,n2];
} else
{if(((sbc1 + sbc2) <= 1024))
{var reg_QMARK_ = (cljs.core.mod.call(null,p,32) === 0);var new_arr = (new Array(((reg_QMARK_)?32:33)));var new_n1 = cljs.core.__GT_VectorNode.call(null,null,new_arr);var i_96434 = 0;var bs_96435 = cljs.core.partition_all.call(null,32,cljs.core.concat.call(null,foundation.app.data.rrb_vector.rrbt.leaf_seq.call(null,n1.arr),foundation.app.data.rrb_vector.rrbt.leaf_seq.call(null,n2.arr)));while(true){
var temp__4092__auto___96436 = cljs.core.seq.call(null,bs_96435);if(temp__4092__auto___96436)
{var xs__4579__auto___96437 = temp__4092__auto___96436;var block_96438 = cljs.core.first.call(null,xs__4579__auto___96437);var a_96439__$1 = (new Array(cljs.core.count.call(null,block_96438)));var i_96440__$1 = 0;var xs_96441 = cljs.core.seq.call(null,block_96438);while(true){
if(xs_96441)
{(a_96439__$1[i_96440__$1] = cljs.core.first.call(null,xs_96441));
{
var G__96442 = (i_96440__$1 + 1);
var G__96443 = cljs.core.next.call(null,xs_96441);
i_96440__$1 = G__96442;
xs_96441 = G__96443;
continue;
}
} else
{}
break;
}
(new_arr[i_96434] = cljs.core.__GT_VectorNode.call(null,null,a_96439__$1));
{
var G__96444 = (i_96434 + 1);
var G__96445 = cljs.core.next.call(null,bs_96435);
i_96434 = G__96444;
bs_96435 = G__96445;
continue;
}
} else
{}
break;
}
if(!(reg_QMARK_))
{(new_arr[32] = foundation.app.data.rrb_vector.nodes.regular_ranges.call(null,5,p));
} else
{}
transferred_leaves.val = sbc2;
return [new_n1,null];
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var reg_QMARK_ = (cljs.core.mod.call(null,p,32) === 0);var new_arr1 = (new Array(32));var new_arr2 = (new Array(((reg_QMARK_)?32:33)));var new_n1 = cljs.core.__GT_VectorNode.call(null,null,new_arr1);var new_n2 = cljs.core.__GT_VectorNode.call(null,null,new_arr2);var i_96446 = 0;var bs_96447 = cljs.core.partition_all.call(null,32,cljs.core.concat.call(null,foundation.app.data.rrb_vector.rrbt.leaf_seq.call(null,(new Array(n1))),foundation.app.data.rrb_vector.rrbt.leaf_seq.call(null,(new Array(n2)))));while(true){
var temp__4092__auto___96448 = cljs.core.seq.call(null,bs_96447);if(temp__4092__auto___96448)
{var xs__4579__auto___96449 = temp__4092__auto___96448;var block_96450 = cljs.core.first.call(null,xs__4579__auto___96449);var a_96451__$1 = (new Array(cljs.core.count.call(null,block_96450)));var i_96452__$1 = 0;var xs_96453 = cljs.core.seq.call(null,block_96450);while(true){
if(xs_96453)
{(a_96451__$1[i_96452__$1] = cljs.core.first.call(null,xs_96453));
{
var G__96454 = (i_96452__$1 + 1);
var G__96455 = cljs.core.next.call(null,xs_96453);
i_96452__$1 = G__96454;
xs_96453 = G__96455;
continue;
}
} else
{}
break;
}
if((i_96446 < 32))
{(new_arr1[i_96446] = cljs.core.__GT_VectorNode.call(null,null,a_96451__$1));
} else
{(new_arr2[(i_96446 - 32)] = cljs.core.__GT_VectorNode.call(null,null,a_96451__$1));
}
{
var G__96456 = (i_96446 + 1);
var G__96457 = cljs.core.next.call(null,bs_96447);
i_96446 = G__96456;
bs_96447 = G__96457;
continue;
}
} else
{}
break;
}
if(!(reg_QMARK_))
{(new_arr2[32] = foundation.app.data.rrb_vector.nodes.regular_ranges.call(null,5,(p - 1024)));
} else
{}
transferred_leaves.val = (1024 - sbc1);
return [new_n1,new_n2];
} else
{return null;
}
}
}
});
foundation.app.data.rrb_vector.rrbt.child_seq = (function child_seq(node,shift,cnt){var arr = node.arr;var rngs = ((foundation.app.data.rrb_vector.nodes.regular_QMARK_.call(null,node))?foundation.app.data.rrb_vector.nodes.regular_ranges.call(null,shift,cnt):foundation.app.data.rrb_vector.nodes.ranges.call(null,node));var cs = (cljs.core.truth_(rngs)?(rngs[32]):foundation.app.data.rrb_vector.nodes.index_of_nil.call(null,arr));var cseq = ((function (arr,rngs,cs){
return (function cseq(c,r){var arr__$1 = c.arr;var rngs__$1 = ((foundation.app.data.rrb_vector.nodes.regular_QMARK_.call(null,c))?foundation.app.data.rrb_vector.nodes.regular_ranges.call(null,(shift - 5),r):foundation.app.data.rrb_vector.nodes.ranges.call(null,c));var gcs = (cljs.core.truth_(rngs__$1)?(rngs__$1[32]):foundation.app.data.rrb_vector.nodes.index_of_nil.call(null,arr__$1));return cljs.core.map.call(null,cljs.core.list,cljs.core.take.call(null,gcs,arr__$1),cljs.core.take.call(null,gcs,cljs.core.map.call(null,cljs.core._,rngs__$1,cljs.core.cons.call(null,0,rngs__$1))));
});})(arr,rngs,cs))
;return cljs.core.mapcat.call(null,cseq,cljs.core.take.call(null,cs,arr),cljs.core.take.call(null,cs,cljs.core.map.call(null,cljs.core._,rngs,cljs.core.cons.call(null,0,rngs))));
});
foundation.app.data.rrb_vector.rrbt.rebalance = (function rebalance(shift,n1,cnt1,n2,cnt2,transferred_leaves){if((n2 == null))
{return [n1,null];
} else
{var slc1 = foundation.app.data.rrb_vector.rrbt.slot_count.call(null,n1,shift);var slc2 = foundation.app.data.rrb_vector.rrbt.slot_count.call(null,n2,shift);var a = (slc1 + slc2);var sbc1 = foundation.app.data.rrb_vector.rrbt.subtree_branch_count.call(null,n1,shift);var sbc2 = foundation.app.data.rrb_vector.rrbt.subtree_branch_count.call(null,n2,shift);var p = (sbc1 + sbc2);var e = (a - (cljs.core.quot.call(null,(p - 1),32) + 1));if((e <= foundation.app.data.rrb_vector.rrbt.max_extra_search_steps))
{return [n1,n2];
} else
{if(((sbc1 + sbc2) <= 1024))
{var new_arr = (new Array(33));var new_rngs = (new Array(33));var new_n1 = cljs.core.__GT_VectorNode.call(null,null,new_arr);var i_96462 = 0;var bs_96463 = cljs.core.partition_all.call(null,32,cljs.core.concat.call(null,foundation.app.data.rrb_vector.rrbt.child_seq.call(null,n1,shift,cnt1),foundation.app.data.rrb_vector.rrbt.child_seq.call(null,n2,shift,cnt2)));while(true){
var temp__4092__auto___96464 = cljs.core.seq.call(null,bs_96463);if(temp__4092__auto___96464)
{var xs__4579__auto___96465 = temp__4092__auto___96464;var block_96466 = cljs.core.first.call(null,xs__4579__auto___96465);var a_96467__$1 = (new Array(33));var r_96468 = (new Array(33));(a_96467__$1[32] = r_96468);
(r_96468[32] = cljs.core.count.call(null,block_96466));
var i_96469__$1 = 0;var o_96470 = 0;var gcs_96471 = cljs.core.seq.call(null,block_96466);while(true){
var temp__4092__auto___96472__$1 = cljs.core.seq.call(null,gcs_96471);if(temp__4092__auto___96472__$1)
{var xs__4579__auto___96473__$1 = temp__4092__auto___96472__$1;var vec__96460_96474 = cljs.core.first.call(null,xs__4579__auto___96473__$1);var gc_96475 = cljs.core.nth.call(null,vec__96460_96474,0,null);var gcr_96476 = cljs.core.nth.call(null,vec__96460_96474,1,null);(a_96467__$1[i_96469__$1] = gc_96475);
(r_96468[i_96469__$1] = (o_96470 + gcr_96476));
{
var G__96477 = (i_96469__$1 + 1);
var G__96478 = (o_96470 + gcr_96476);
var G__96479 = cljs.core.next.call(null,gcs_96471);
i_96469__$1 = G__96477;
o_96470 = G__96478;
gcs_96471 = G__96479;
continue;
}
} else
{}
break;
}
(new_arr[i_96462] = cljs.core.__GT_VectorNode.call(null,null,a_96467__$1));
(new_rngs[i_96462] = ((r_96468[((r_96468[32]) - 1)]) + (((i_96462 > 0))?(new_rngs[(i_96462 - 1)]):0)));
(new_rngs[32] = (i_96462 + 1));
{
var G__96480 = (i_96462 + 1);
var G__96481 = cljs.core.next.call(null,bs_96463);
i_96462 = G__96480;
bs_96463 = G__96481;
continue;
}
} else
{}
break;
}
(new_arr[32] = new_rngs);
transferred_leaves.val = cnt2;
return [new_n1,null];
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var new_arr1 = (new Array(33));var new_arr2 = (new Array(33));var new_rngs1 = (new Array(33));var new_rngs2 = (new Array(33));var new_n1 = cljs.core.__GT_VectorNode.call(null,null,new_arr1);var new_n2 = cljs.core.__GT_VectorNode.call(null,null,new_arr2);var i_96482 = 0;var bs_96483 = cljs.core.partition_all.call(null,32,cljs.core.concat.call(null,foundation.app.data.rrb_vector.rrbt.child_seq.call(null,n1,shift,cnt1),foundation.app.data.rrb_vector.rrbt.child_seq.call(null,n2,shift,cnt2)));while(true){
var temp__4092__auto___96484 = cljs.core.seq.call(null,bs_96483);if(temp__4092__auto___96484)
{var xs__4579__auto___96485 = temp__4092__auto___96484;var block_96486 = cljs.core.first.call(null,xs__4579__auto___96485);var a_96487__$1 = (new Array(33));var r_96488 = (new Array(33));(a_96487__$1[32] = r_96488);
(r_96488[32] = cljs.core.count.call(null,block_96486));
var i_96489__$1 = 0;var o_96490 = 0;var gcs_96491 = cljs.core.seq.call(null,block_96486);while(true){
var temp__4092__auto___96492__$1 = cljs.core.seq.call(null,gcs_96491);if(temp__4092__auto___96492__$1)
{var xs__4579__auto___96493__$1 = temp__4092__auto___96492__$1;var vec__96461_96494 = cljs.core.first.call(null,xs__4579__auto___96493__$1);var gc_96495 = cljs.core.nth.call(null,vec__96461_96494,0,null);var gcr_96496 = cljs.core.nth.call(null,vec__96461_96494,1,null);(a_96487__$1[i_96489__$1] = gc_96495);
(r_96488[i_96489__$1] = (o_96490 + gcr_96496));
{
var G__96497 = (i_96489__$1 + 1);
var G__96498 = (o_96490 + gcr_96496);
var G__96499 = cljs.core.next.call(null,gcs_96491);
i_96489__$1 = G__96497;
o_96490 = G__96498;
gcs_96491 = G__96499;
continue;
}
} else
{}
break;
}
if(((i_96482 < 32)) && ((((i_96482 * 32) + cljs.core.count.call(null,block_96486)) > sbc1)))
{var tbs_96500 = (((i_96482 * 32) + cljs.core.count.call(null,block_96486)) - sbc1);var li_96501 = ((r_96488[32]) - 1);var d_96502 = (((tbs_96500 >= 32))?(r_96488[li_96501]):((r_96488[li_96501]) - (r_96488[(li_96501 - tbs_96500)])));transferred_leaves.val = (transferred_leaves.val + d_96502);
} else
{}
var new_arr_96503 = (((i_96482 < 32))?new_arr1:new_arr2);var new_rngs_96504 = (((i_96482 < 32))?new_rngs1:new_rngs2);var i_96505__$1 = cljs.core.mod.call(null,i_96482,32);(new_arr_96503[i_96505__$1] = cljs.core.__GT_VectorNode.call(null,null,a_96487__$1));
(new_rngs_96504[i_96505__$1] = ((r_96488[((r_96488[32]) - 1)]) + (((i_96505__$1 > 0))?(new_rngs_96504[(i_96505__$1 - 1)]):0)));
(new_rngs_96504[32] = (i_96505__$1 + 1));
{
var G__96506 = (i_96482 + 1);
var G__96507 = cljs.core.next.call(null,bs_96483);
i_96482 = G__96506;
bs_96483 = G__96507;
continue;
}
} else
{}
break;
}
(new_arr1[32] = new_rngs1);
(new_arr2[32] = new_rngs2);
return [new_n1,new_n2];
} else
{return null;
}
}
}
}
});
foundation.app.data.rrb_vector.rrbt.zippath = (function zippath(shift,n1,cnt1,n2,cnt2,transferred_leaves){if((shift === 5))
{return foundation.app.data.rrb_vector.rrbt.rebalance_leaves.call(null,n1,cnt1,n2,cnt2,transferred_leaves);
} else
{var c1 = foundation.app.data.rrb_vector.nodes.last_child.call(null,n1);var c2 = foundation.app.data.rrb_vector.nodes.first_child.call(null,n2);var ccnt1 = ((foundation.app.data.rrb_vector.nodes.regular_QMARK_.call(null,n1))?(function (){var m = cljs.core.mod.call(null,cnt1,(1 << shift));if((m === 0))
{return (1 << shift);
} else
{return m;
}
})():(function (){var rngs = foundation.app.data.rrb_vector.nodes.ranges.call(null,n1);var i = ((rngs[32]) - 1);if((i === 0))
{return (rngs[0]);
} else
{return ((rngs[i]) - (rngs[(i - 1)]));
}
})());var ccnt2 = ((foundation.app.data.rrb_vector.nodes.regular_QMARK_.call(null,n2))?(function (){var m = cljs.core.mod.call(null,cnt2,(1 << shift));if((m === 0))
{return (1 << shift);
} else
{return m;
}
})():(foundation.app.data.rrb_vector.nodes.ranges.call(null,n2)[0]));var next_transferred_leaves = (new cljs.core.Box(0));var vec__96509 = zippath.call(null,(shift - 5),c1,ccnt1,c2,ccnt2,next_transferred_leaves);var new_c1 = cljs.core.nth.call(null,vec__96509,0,null);var new_c2 = cljs.core.nth.call(null,vec__96509,1,null);var d = next_transferred_leaves.val;transferred_leaves.val = (transferred_leaves.val + d);
return foundation.app.data.rrb_vector.rrbt.rebalance.call(null,shift,(((c1 === new_c1))?n1:foundation.app.data.rrb_vector.nodes.replace_rightmost_child.call(null,shift,n1,new_c1,d)),(cnt1 + d),(cljs.core.truth_(new_c2)?(((c2 === new_c2))?n2:foundation.app.data.rrb_vector.nodes.replace_leftmost_child.call(null,shift,n2,cnt2,new_c2,d)):foundation.app.data.rrb_vector.nodes.remove_leftmost_child.call(null,shift,n2)),(cnt2 - d),transferred_leaves);
}
});
foundation.app.data.rrb_vector.rrbt.squash_nodes = (function squash_nodes(shift,n1,cnt1,n2,cnt2){var arr1 = n1.arr;var arr2 = n2.arr;var li1 = foundation.app.data.rrb_vector.nodes.index_of_nil.call(null,arr1);var li2 = foundation.app.data.rrb_vector.nodes.index_of_nil.call(null,arr2);var slots = cljs.core.concat.call(null,cljs.core.take.call(null,li1,arr1),cljs.core.take.call(null,li2,arr2));if((cljs.core.count.call(null,slots) > 32))
{return [n1,n2];
} else
{var new_rngs = (new Array(33));var new_arr = (new Array(33));var rngs1 = cljs.core.take.call(null,li1,((foundation.app.data.rrb_vector.nodes.regular_QMARK_.call(null,n1))?foundation.app.data.rrb_vector.nodes.regular_ranges.call(null,shift,cnt1):foundation.app.data.rrb_vector.nodes.ranges.call(null,n1)));var rngs2 = cljs.core.take.call(null,li2,((foundation.app.data.rrb_vector.nodes.regular_QMARK_.call(null,n2))?foundation.app.data.rrb_vector.nodes.regular_ranges.call(null,shift,cnt2):foundation.app.data.rrb_vector.nodes.ranges.call(null,n2)));var rngs2__$1 = (function (){var r = cljs.core.last.call(null,rngs1);return cljs.core.map.call(null,((function (r,new_rngs,new_arr,rngs1,rngs2){
return (function (p1__96510_SHARP_){return (p1__96510_SHARP_ + r);
});})(r,new_rngs,new_arr,rngs1,rngs2))
,rngs2);
})();var rngs = cljs.core.concat.call(null,rngs1,rngs2__$1);(new_arr[32] = new_rngs);
var i_96511 = 0;var cs_96512 = cljs.core.seq.call(null,slots);while(true){
if(cs_96512)
{(new_arr[i_96511] = cljs.core.first.call(null,cs_96512));
{
var G__96513 = (i_96511 + 1);
var G__96514 = cljs.core.next.call(null,cs_96512);
i_96511 = G__96513;
cs_96512 = G__96514;
continue;
}
} else
{}
break;
}
var i_96515 = 0;var rngs_96516__$1 = cljs.core.seq.call(null,rngs);while(true){
if(rngs_96516__$1)
{(new_rngs[i_96515] = cljs.core.first.call(null,rngs_96516__$1));
{
var G__96517 = (i_96515 + 1);
var G__96518 = cljs.core.next.call(null,rngs_96516__$1);
i_96515 = G__96517;
rngs_96516__$1 = G__96518;
continue;
}
} else
{(new_rngs[32] = i_96515);
}
break;
}
return [cljs.core.__GT_VectorNode.call(null,null,new_arr),null];
}
});
foundation.app.data.rrb_vector.rrbt.splice_rrbts = (function splice_rrbts(v1,v2){if((cljs.core.count.call(null,v1) === 0))
{return v2;
} else
{if((cljs.core.count.call(null,v2) < foundation.app.data.rrb_vector.rrbt.rrbt_concat_threshold))
{return cljs.core.into.call(null,v1,v2);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var s1 = v1.shift;var s2 = v2.shift;var r1 = v1.root;var o_QMARK_ = foundation.app.data.rrb_vector.nodes.overflow_QMARK_.call(null,r1,s1,(cljs.core.count.call(null,v1) + (32 - v1.tail.length)));var r1__$1 = ((o_QMARK_)?(function (){var tail = v1.tail;var tail_node = cljs.core.__GT_VectorNode.call(null,null,tail);var reg_QMARK_ = (foundation.app.data.rrb_vector.nodes.regular_QMARK_.call(null,r1)) && ((tail.length === 32));var arr = (new Array(((reg_QMARK_)?32:33)));(arr[0] = r1);
(arr[1] = foundation.app.data.rrb_vector.nodes.new_path_STAR_.call(null,s1,tail_node));
if(!(reg_QMARK_))
{var rngs_96525 = (new Array(33));(rngs_96525[32] = 2);
(rngs_96525[0] = (cljs.core.count.call(null,v1) - tail.length));
(rngs_96525[1] = cljs.core.count.call(null,v1));
(arr[32] = rngs_96525);
} else
{}
return cljs.core.__GT_VectorNode.call(null,null,arr);
})():foundation.app.data.rrb_vector.nodes.fold_tail.call(null,r1,s1,foundation.app.data.rrb_vector.trees.tail_offset.call(null,v1.cnt,v1.tail),v1.tail));var s1__$1 = ((o_QMARK_)?(s1 + 5):s1);var r2 = v2.root;var s = (function (){var x__14129__auto__ = s1__$1;var y__14130__auto__ = s2;return ((x__14129__auto__ > y__14130__auto__) ? x__14129__auto__ : y__14130__auto__);
})();var r1__$2 = foundation.app.data.rrb_vector.rrbt.shift_from_to.call(null,r1__$1,s1__$1,s);var r2__$1 = foundation.app.data.rrb_vector.rrbt.shift_from_to.call(null,r2,s2,s);var transferred_leaves = (new cljs.core.Box(0));var vec__96522 = foundation.app.data.rrb_vector.rrbt.zippath.call(null,s,r1__$2,cljs.core.count.call(null,v1),r2__$1,(cljs.core.count.call(null,v2) - v2.tail.length),transferred_leaves);var n1 = cljs.core.nth.call(null,vec__96522,0,null);var n2 = cljs.core.nth.call(null,vec__96522,1,null);var d = transferred_leaves.val;var ncnt1 = (cljs.core.count.call(null,v1) + d);var ncnt2 = ((cljs.core.count.call(null,v2) - v2.tail.length) - d);var vec__96523 = (((n2 === r2__$1))?foundation.app.data.rrb_vector.rrbt.squash_nodes.call(null,s,n1,ncnt1,n2,ncnt2):[n1,n2]);var n1__$1 = cljs.core.nth.call(null,vec__96523,0,null);var n2__$1 = cljs.core.nth.call(null,vec__96523,1,null);var ncnt1__$1 = (cljs.core.truth_(n2__$1)?ncnt1:(ncnt1 + ncnt2));var ncnt2__$1 = (cljs.core.truth_(n2__$1)?ncnt2:0);if(cljs.core.truth_(n2__$1))
{var arr = (new Array(33));var new_root = cljs.core.__GT_VectorNode.call(null,null,arr);(arr[0] = n1__$1);
(arr[1] = n2__$1);
(arr[32] = (function (){var G__96524 = (new Array(33));(G__96524[0] = ncnt1__$1);
(G__96524[1] = (ncnt1__$1 + ncnt2__$1));
(G__96524[32] = 2);
return G__96524;
})());
return (new foundation.app.data.rrb_vector.rrbt.Vector((cljs.core.count.call(null,v1) + cljs.core.count.call(null,v2)),(s + 5),new_root,v2.tail,null,null));
} else
{var r = n1__$1;var s__$1 = s;while(true){
if(((s__$1 > 5)) && (((r.arr[1]) == null)))
{{
var G__96526 = (r.arr[0]);
var G__96527 = (s__$1 - 5);
r = G__96526;
s__$1 = G__96527;
continue;
}
} else
{return (new foundation.app.data.rrb_vector.rrbt.Vector((cljs.core.count.call(null,v1) + cljs.core.count.call(null,v2)),s__$1,r,v2.tail,null,null));
}
break;
}
}
} else
{return null;
}
}
}
});

/**
* @constructor
*/
foundation.app.data.rrb_vector.rrbt.Transient = (function (cnt,shift,root,tail,tidx){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.tidx = tidx;
this.cljs$lang$protocol_mask$partition0$ = 2;
this.cljs$lang$protocol_mask$partition1$ = 88;
})
foundation.app.data.rrb_vector.rrbt.Transient.cljs$lang$type = true;
foundation.app.data.rrb_vector.rrbt.Transient.cljs$lang$ctorStr = "foundation.app.data.rrb-vector.rrbt/Transient";
foundation.app.data.rrb_vector.rrbt.Transient.cljs$lang$ctorPrWriter = (function (this__14366__auto__,writer__14367__auto__,opt__14368__auto__){return cljs.core._write.call(null,writer__14367__auto__,"foundation.app.data.rrb-vector.rrbt/Transient");
});
foundation.app.data.rrb_vector.rrbt.Transient.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(self__.root.edit)
{return self__.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
foundation.app.data.rrb_vector.rrbt.Transient.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (this$,i,val){var self__ = this;
var this$__$1 = this;if(self__.root.edit)
{if(((0 <= i)) && ((i < self__.cnt)))
{var tail_off = (self__.cnt - self__.tidx);if((tail_off <= i))
{(self__.tail[(i - tail_off)] = val);
return this$__$1;
} else
{self__.root = foundation.app.data.rrb_vector.transients.do_assoc_BANG_.call(null,self__.shift,self__.root.edit,self__.root,i,val);
return this$__$1;
}
} else
{if((self__.cnt === self__.cnt))
{return cljs.core._conj_BANG_.call(null,this$__$1,val);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.vector_index_out_of_bounds.call(null,i,self__.cnt);
} else
{return null;
}
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
foundation.app.data.rrb_vector.rrbt.Transient.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(self__.root.edit)
{if((self__.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === self__.cnt))
{self__.cnt = 0;
self__.tidx = 0;
(self__.tail[0] = null);
return this$__$1;
} else
{if((self__.tidx > 1))
{self__.cnt = (self__.cnt - 1);
self__.tidx = (self__.tidx - 1);
(self__.tail[self__.tidx] = null);
return this$__$1;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var new_tail_base = foundation.app.data.rrb_vector.trees.array_for.call(null,self__.cnt,self__.shift,self__.root,self__.tail,(self__.cnt - 2));var new_tail = cljs.core.aclone.call(null,new_tail_base);var new_tidx = new_tail_base.length;var new_root = foundation.app.data.rrb_vector.transients.pop_tail_BANG_.call(null,self__.shift,self__.cnt,self__.root.edit,self__.root);if((new_root == null))
{self__.cnt = (self__.cnt - 1);
self__.root = foundation.app.data.rrb_vector.transients.ensure_editable.call(null,self__.root.edit,foundation.app.data.rrb_vector.nodes.empty_node);
self__.tail = new_tail;
self__.tidx = new_tidx;
return this$__$1;
} else
{if(((self__.shift > 5)) && (((new_root.arr[1]) == null)))
{self__.cnt = (self__.cnt - 1);
self__.shift = (self__.shift - 5);
self__.root = (new_root.arr[0]);
self__.tail = new_tail;
self__.tidx = new_tidx;
return this$__$1;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{self__.cnt = (self__.cnt - 1);
self__.root = new_root;
self__.tail = new_tail;
self__.tidx = new_tidx;
return this$__$1;
} else
{return null;
}
}
}
} else
{return null;
}
}
}
}
} else
{throw (new Error("count after persistent!"));
}
});
foundation.app.data.rrb_vector.rrbt.Transient.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (this$,key,val){var self__ = this;
var this$__$1 = this;return cljs.core._assoc_n_BANG_.call(null,this$__$1,key,val);
});
foundation.app.data.rrb_vector.rrbt.Transient.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (this$,o){var self__ = this;
var this$__$1 = this;if(self__.root.edit)
{if((self__.tidx < 32))
{(self__.tail[self__.tidx] = o);
self__.cnt = (self__.cnt + 1);
self__.tidx = (self__.tidx + 1);
return this$__$1;
} else
{var tail_node = cljs.core.__GT_VectorNode.call(null,self__.root.edit,self__.tail);var new_tail = (new Array(32));(new_tail[0] = o);
self__.tail = new_tail;
self__.tidx = 1;
if(foundation.app.data.rrb_vector.nodes.overflow_QMARK_.call(null,self__.root,self__.shift,self__.cnt))
{if(foundation.app.data.rrb_vector.nodes.regular_QMARK_.call(null,self__.root))
{var new_arr = (new Array(32));var G__96528_96531 = new_arr;(G__96528_96531[0] = self__.root);
(G__96528_96531[1] = foundation.app.data.rrb_vector.trees.new_path.call(null,self__.tail,self__.root.edit,self__.shift,tail_node));
self__.root = cljs.core.__GT_VectorNode.call(null,self__.root.edit,new_arr);
self__.shift = (self__.shift + 5);
self__.cnt = (self__.cnt + 1);
return this$__$1;
} else
{var new_arr = (new Array(33));var new_rngs = (new Array(33));var new_root = cljs.core.__GT_VectorNode.call(null,self__.root.edit,new_arr);var root_total_range = (foundation.app.data.rrb_vector.nodes.ranges.call(null,self__.root)[31]);var G__96529_96532 = new_arr;(G__96529_96532[0] = self__.root);
(G__96529_96532[1] = foundation.app.data.rrb_vector.trees.new_path.call(null,self__.tail,self__.root.edit,self__.shift,tail_node));
(G__96529_96532[32] = new_rngs);
var G__96530_96533 = new_rngs;(G__96530_96533[0] = root_total_range);
(G__96530_96533[1] = (root_total_range + 32));
(G__96530_96533[32] = 2);
self__.root = new_root;
self__.shift = (self__.shift + 5);
self__.cnt = (self__.cnt + 1);
return this$__$1;
}
} else
{var new_root = foundation.app.data.rrb_vector.transients.push_tail_BANG_.call(null,self__.shift,self__.cnt,self__.root.edit,self__.root,tail_node);self__.root = new_root;
self__.cnt = (self__.cnt + 1);
return this$__$1;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
foundation.app.data.rrb_vector.rrbt.Transient.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(self__.root.edit)
{self__.root.edit = null;
var trimmed_tail = (new Array(self__.tidx));cljs.core.array_copy.call(null,self__.tail,0,trimmed_tail,0,self__.tidx);
return (new foundation.app.data.rrb_vector.rrbt.Vector(self__.cnt,self__.shift,self__.root,trimmed_tail,null,null));
} else
{throw (new Error("persistent! called twice"));
}
});
foundation.app.data.rrb_vector.rrbt.__GT_Transient = (function __GT_Transient(cnt,shift,root,tail,tidx){return (new foundation.app.data.rrb_vector.rrbt.Transient(cnt,shift,root,tail,tidx));
});

//# sourceMappingURL=rrbt.js.map