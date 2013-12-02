// Compiled by ClojureScript 0.0-2080
goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = 0;
cljs.core.async.impl.ioc_helpers.STATE_IDX = 1;
cljs.core.async.impl.ioc_helpers.VALUE_IDX = 2;
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = 3;
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = 4;
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = 5;
cljs.core.async.impl.ioc_helpers.USER_START_IDX = 6;
cljs.core.async.impl.ioc_helpers.aset_object = (function aset_object(arr,idx,o){return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function aget_object(arr,idx){return (arr[idx]);
});
/**
* Returns true if the machine is in a finished state
*/
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function finished_QMARK_(state_array){return cljs.core.keyword_identical_QMARK_((state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),cljs.core.constant$keyword$296);
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.impl.ioc_helpers.t83677 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t83677 = (function (f,fn_handler,meta83678){
this.f = f;
this.fn_handler = fn_handler;
this.meta83678 = meta83678;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t83677.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.t83677.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t83677";
cljs.core.async.impl.ioc_helpers.t83677.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write(writer__8275__auto__,"cljs.core.async.impl.ioc-helpers/t83677");
});
cljs.core.async.impl.ioc_helpers.t83677.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.impl.ioc_helpers.t83677.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.impl.ioc_helpers.t83677.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.impl.ioc_helpers.t83677.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_83679){var self__ = this;
var _83679__$1 = this;return self__.meta83678;
});
cljs.core.async.impl.ioc_helpers.t83677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_83679,meta83678__$1){var self__ = this;
var _83679__$1 = this;return (new cljs.core.async.impl.ioc_helpers.t83677(self__.f,self__.fn_handler,meta83678__$1));
});
cljs.core.async.impl.ioc_helpers.__GT_t83677 = (function __GT_t83677(f__$1,fn_handler__$1,meta83678){return (new cljs.core.async.impl.ioc_helpers.t83677(f__$1,fn_handler__$1,meta83678));
});
}
return (new cljs.core.async.impl.ioc_helpers.t83677(f,fn_handler,null));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){return cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e83681){if((e83681 instanceof Object))
{var ex = e83681;cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.USER_START_IDX).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);
throw ex;
} else
{if(cljs.core.constant$keyword$286)
{throw e83681;
} else
{return null;
}
}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){var temp__4096__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){var statearr_83684_83686 = state;(statearr_83684_83686[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);
(statearr_83684_83686[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));if(cljs.core.truth_(temp__4096__auto__))
{var cb = temp__4096__auto__;var statearr_83685_83687 = state;(statearr_83685_83687[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref(cb));
(statearr_83685_83687[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.constant$keyword$297;
} else
{return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){var temp__4096__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (){var statearr_83690_83692 = state;(statearr_83690_83692[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = null);
(statearr_83690_83692[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));if(cljs.core.truth_(temp__4096__auto__))
{var cb = temp__4096__auto__;var statearr_83691_83693 = state;(statearr_83691_83693[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref(cb));
(statearr_83691_83693[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.constant$keyword$297;
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__83694){var map__83699 = p__83694;var map__83699__$1 = ((cljs.core.seq_QMARK_(map__83699))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83699):map__83699);var opts = map__83699__$1;var statearr_83700_83703 = state;(statearr_83700_83703[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4098__auto__ = cljs.core.async.do_alts((function (val){var statearr_83701_83704 = state;(statearr_83701_83704[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);if(cljs.core.truth_(temp__4098__auto__))
{var cb = temp__4098__auto__;var statearr_83702_83705 = state;(statearr_83702_83705[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref(cb));
return cljs.core.constant$keyword$297;
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__83694 = null;if (arguments.length > 3) {
  p__83694 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__83694);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__83706){
var state = cljs.core.first(arglist__83706);
arglist__83706 = cljs.core.next(arglist__83706);
var cont_block = cljs.core.first(arglist__83706);
arglist__83706 = cljs.core.next(arglist__83706);
var ports = cljs.core.first(arglist__83706);
var p__83694 = cljs.core.rest(arglist__83706);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__83694);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
cljs.core.async.impl.ioc_helpers.return_chan = (function return_chan(state,value){var c = (state[cljs.core.async.impl.ioc_helpers.USER_START_IDX]);if((value == null))
{} else
{c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,value,cljs.core.async.impl.ioc_helpers.fn_handler((function (){return null;
})));
}
c.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);
return c;
});

/**
* @constructor
* @param {*} catch_block
* @param {*} catch_exception
* @param {*} finally_block
* @param {*} continue_block
* @param {*} prev
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
cljs.core.async.impl.ioc_helpers.ExceptionFrame = (function (catch_block,catch_exception,finally_block,continue_block,prev,__meta,__extmap){
this.catch_block = catch_block;
this.catch_exception = catch_exception;
this.finally_block = finally_block;
this.continue_block = continue_block;
this.prev = prev;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>5){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8287__auto__){var self__ = this;
var this__8287__auto____$1 = this;var h__8141__auto__ = self__.__hash;if(!((h__8141__auto__ == null)))
{return h__8141__auto__;
} else
{var h__8141__auto____$1 = cljs.core.hash_imap(this__8287__auto____$1);self__.__hash = h__8141__auto____$1;
return h__8141__auto____$1;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8292__auto__,k__8293__auto__){var self__ = this;
var this__8292__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__8292__auto____$1,k__8293__auto__,null);
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8294__auto__,k83708,else__8295__auto__){var self__ = this;
var this__8294__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_(k83708,cljs.core.constant$keyword$298))
{return self__.catch_block;
} else
{if(cljs.core.keyword_identical_QMARK_(k83708,cljs.core.constant$keyword$299))
{return self__.catch_exception;
} else
{if(cljs.core.keyword_identical_QMARK_(k83708,cljs.core.constant$keyword$300))
{return self__.finally_block;
} else
{if(cljs.core.keyword_identical_QMARK_(k83708,cljs.core.constant$keyword$301))
{return self__.continue_block;
} else
{if(cljs.core.keyword_identical_QMARK_(k83708,cljs.core.constant$keyword$302))
{return self__.prev;
} else
{if(cljs.core.constant$keyword$286)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k83708,else__8295__auto__);
} else
{return null;
}
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8299__auto__,k__8300__auto__,G__83707){var self__ = this;
var this__8299__auto____$1 = this;var pred__83710 = cljs.core.keyword_identical_QMARK_;var expr__83711 = k__8300__auto__;if(cljs.core.truth_((pred__83710.cljs$core$IFn$_invoke$arity$2 ? pred__83710.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$298,expr__83711) : pred__83710.call(null,cljs.core.constant$keyword$298,expr__83711))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__83707,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__83710.cljs$core$IFn$_invoke$arity$2 ? pred__83710.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$299,expr__83711) : pred__83710.call(null,cljs.core.constant$keyword$299,expr__83711))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__83707,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__83710.cljs$core$IFn$_invoke$arity$2 ? pred__83710.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$300,expr__83711) : pred__83710.call(null,cljs.core.constant$keyword$300,expr__83711))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__83707,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__83710.cljs$core$IFn$_invoke$arity$2 ? pred__83710.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$301,expr__83711) : pred__83710.call(null,cljs.core.constant$keyword$301,expr__83711))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__83707,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__83710.cljs$core$IFn$_invoke$arity$2 ? pred__83710.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$302,expr__83711) : pred__83710.call(null,cljs.core.constant$keyword$302,expr__83711))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__83707,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8300__auto__,G__83707),null));
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8306__auto__,writer__8307__auto__,opts__8308__auto__){var self__ = this;
var this__8306__auto____$1 = this;var pr_pair__8309__auto__ = (function (keyval__8310__auto__){return cljs.core.pr_sequential_writer(writer__8307__auto__,cljs.core.pr_writer,""," ","",opts__8308__auto__,keyval__8310__auto__);
});return cljs.core.pr_sequential_writer(writer__8307__auto__,pr_pair__8309__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__8308__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$298,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$299,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$300,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$301,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$302,self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8297__auto__,entry__8298__auto__){var self__ = this;
var this__8297__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__8298__auto__))
{return cljs.core._assoc(this__8297__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8298__auto__,0),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8298__auto__,1));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8297__auto____$1,entry__8298__auto__);
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8304__auto__){var self__ = this;
var this__8304__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$298,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$299,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$300,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$301,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$302,self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8296__auto__){var self__ = this;
var this__8296__auto____$1 = this;return (5 + cljs.core.count(self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8288__auto__,other__8289__auto__){var self__ = this;
var this__8288__auto____$1 = this;if(cljs.core.truth_((function (){var and__7718__auto__ = other__8289__auto__;if(cljs.core.truth_(and__7718__auto__))
{return ((this__8288__auto____$1.constructor === other__8289__auto__.constructor)) && (cljs.core.equiv_map(this__8288__auto____$1,other__8289__auto__));
} else
{return and__7718__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8291__auto__,G__83707){var self__ = this;
var this__8291__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__83707,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8290__auto__){var self__ = this;
var this__8290__auto____$1 = this;return self__.__meta;
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8301__auto__,k__8302__auto__){var self__ = this;
var this__8301__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$300,null,cljs.core.constant$keyword$298,null,cljs.core.constant$keyword$299,null,cljs.core.constant$keyword$301,null,cljs.core.constant$keyword$302,null], null), null),k__8302__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,this__8301__auto____$1),self__.__meta),k__8302__auto__);
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8302__auto__)),null));
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__8326__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__8326__auto__,writer__8327__auto__){return cljs.core._write(writer__8327__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function __GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev));
});
cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__83709){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(cljs.core.constant$keyword$298.cljs$core$IFn$_invoke$arity$1(G__83709),cljs.core.constant$keyword$299.cljs$core$IFn$_invoke$arity$1(G__83709),cljs.core.constant$keyword$300.cljs$core$IFn$_invoke$arity$1(G__83709),cljs.core.constant$keyword$301.cljs$core$IFn$_invoke$arity$1(G__83709),cljs.core.constant$keyword$302.cljs$core$IFn$_invoke$arity$1(G__83709),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__83709,cljs.core.constant$keyword$298,cljs.core.array_seq([cljs.core.constant$keyword$299,cljs.core.constant$keyword$300,cljs.core.constant$keyword$301,cljs.core.constant$keyword$302], 0))));
});
cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){var statearr_83714 = state;(statearr_83714[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));
return statearr_83714;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function process_exception(state){while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);var catch_block = cljs.core.constant$keyword$298.cljs$core$IFn$_invoke$arity$1(exception_frame);var catch_exception = cljs.core.constant$keyword$299.cljs$core$IFn$_invoke$arity$1(exception_frame);var exception = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);if(cljs.core.truth_((function (){var and__7718__auto__ = exception;if(cljs.core.truth_(and__7718__auto__))
{return cljs.core.not(exception_frame);
} else
{return and__7718__auto__;
}
})()))
{throw exception;
} else
{if(cljs.core.truth_((function (){var and__7718__auto__ = exception;if(cljs.core.truth_(and__7718__auto__))
{var and__7718__auto____$1 = catch_block;if(cljs.core.truth_(and__7718__auto____$1))
{return (exception instanceof catch_exception);
} else
{return and__7718__auto____$1;
}
} else
{return and__7718__auto__;
}
})()))
{var statearr_83720 = state;(statearr_83720[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);
(statearr_83720[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);
(statearr_83720[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);
(statearr_83720[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(exception_frame,cljs.core.constant$keyword$298,null,cljs.core.array_seq([cljs.core.constant$keyword$299,null], 0)));
return statearr_83720;
} else
{if(cljs.core.truth_((function (){var and__7718__auto__ = exception;if(cljs.core.truth_(and__7718__auto__))
{return (cljs.core.not(catch_block)) && (cljs.core.not(cljs.core.constant$keyword$300.cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else
{return and__7718__auto__;
}
})()))
{var statearr_83721_83725 = state;(statearr_83721_83725[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$302.cljs$core$IFn$_invoke$arity$1(exception_frame));
{
var G__83726 = state;
state = G__83726;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__7718__auto__ = exception;if(cljs.core.truth_(and__7718__auto__))
{var and__7718__auto____$1 = cljs.core.not(catch_block);if(and__7718__auto____$1)
{return cljs.core.constant$keyword$300.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__7718__auto____$1;
}
} else
{return and__7718__auto__;
}
})()))
{var statearr_83722 = state;(statearr_83722[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$300.cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_83722[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$300,null));
return statearr_83722;
} else
{if(cljs.core.truth_((function (){var and__7718__auto__ = cljs.core.not(exception);if(and__7718__auto__)
{return cljs.core.constant$keyword$300.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__7718__auto__;
}
})()))
{var statearr_83723 = state;(statearr_83723[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$300.cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_83723[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$300,null));
return statearr_83723;
} else
{if((cljs.core.not(exception)) && (cljs.core.not(cljs.core.constant$keyword$300.cljs$core$IFn$_invoke$arity$1(exception_frame))))
{var statearr_83724 = state;(statearr_83724[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$301.cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_83724[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$302.cljs$core$IFn$_invoke$arity$1(exception_frame));
return statearr_83724;
} else
{if(cljs.core.constant$keyword$286)
{if(false)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No matching clause"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([false], 0)))].join('')));
}
} else
{return null;
}
}
}
}
}
}
}
break;
}
});
