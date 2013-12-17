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
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function finished_QMARK_(state_array){return cljs.core.keyword_identical_QMARK_((state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),cljs.core.constant$keyword$284);
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.impl.ioc_helpers.t53063 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t53063 = (function (f,fn_handler,meta53064){
this.f = f;
this.fn_handler = fn_handler;
this.meta53064 = meta53064;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t53063.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.t53063.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t53063";
cljs.core.async.impl.ioc_helpers.t53063.cljs$lang$ctorPrWriter = (function (this__11441__auto__,writer__11442__auto__,opt__11443__auto__){return cljs.core._write(writer__11442__auto__,"cljs.core.async.impl.ioc-helpers/t53063");
});
cljs.core.async.impl.ioc_helpers.t53063.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.impl.ioc_helpers.t53063.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.impl.ioc_helpers.t53063.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.impl.ioc_helpers.t53063.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53065){var self__ = this;
var _53065__$1 = this;return self__.meta53064;
});
cljs.core.async.impl.ioc_helpers.t53063.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53065,meta53064__$1){var self__ = this;
var _53065__$1 = this;return (new cljs.core.async.impl.ioc_helpers.t53063(self__.f,self__.fn_handler,meta53064__$1));
});
cljs.core.async.impl.ioc_helpers.__GT_t53063 = (function __GT_t53063(f__$1,fn_handler__$1,meta53064){return (new cljs.core.async.impl.ioc_helpers.t53063(f__$1,fn_handler__$1,meta53064));
});
}
return (new cljs.core.async.impl.ioc_helpers.t53063(f,fn_handler,null));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){return cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e53067){if((e53067 instanceof Object))
{var ex = e53067;cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.USER_START_IDX).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);
throw ex;
} else
{if(cljs.core.constant$keyword$274)
{throw e53067;
} else
{return null;
}
}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){var temp__4096__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){var statearr_53070_53072 = state;(statearr_53070_53072[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);
(statearr_53070_53072[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));if(cljs.core.truth_(temp__4096__auto__))
{var cb = temp__4096__auto__;var statearr_53071_53073 = state;(statearr_53071_53073[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref(cb));
(statearr_53071_53073[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.constant$keyword$285;
} else
{return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){var temp__4096__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (){var statearr_53076_53078 = state;(statearr_53076_53078[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = null);
(statearr_53076_53078[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));if(cljs.core.truth_(temp__4096__auto__))
{var cb = temp__4096__auto__;var statearr_53077_53079 = state;(statearr_53077_53079[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref(cb));
(statearr_53077_53079[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.constant$keyword$285;
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__53080){var map__53085 = p__53080;var map__53085__$1 = ((cljs.core.seq_QMARK_(map__53085))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53085):map__53085);var opts = map__53085__$1;var statearr_53086_53089 = state;(statearr_53086_53089[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4098__auto__ = cljs.core.async.do_alts((function (val){var statearr_53087_53090 = state;(statearr_53087_53090[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);if(cljs.core.truth_(temp__4098__auto__))
{var cb = temp__4098__auto__;var statearr_53088_53091 = state;(statearr_53088_53091[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref(cb));
return cljs.core.constant$keyword$285;
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__53080 = null;if (arguments.length > 3) {
  p__53080 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__53080);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__53092){
var state = cljs.core.first(arglist__53092);
arglist__53092 = cljs.core.next(arglist__53092);
var cont_block = cljs.core.first(arglist__53092);
arglist__53092 = cljs.core.next(arglist__53092);
var ports = cljs.core.first(arglist__53092);
var p__53080 = cljs.core.rest(arglist__53092);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__53080);
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
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11454__auto__){var self__ = this;
var this__11454__auto____$1 = this;var h__11308__auto__ = self__.__hash;if(!((h__11308__auto__ == null)))
{return h__11308__auto__;
} else
{var h__11308__auto____$1 = cljs.core.hash_imap(this__11454__auto____$1);self__.__hash = h__11308__auto____$1;
return h__11308__auto____$1;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11459__auto__,k__11460__auto__){var self__ = this;
var this__11459__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__11459__auto____$1,k__11460__auto__,null);
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11461__auto__,k53094,else__11462__auto__){var self__ = this;
var this__11461__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_(k53094,cljs.core.constant$keyword$286))
{return self__.catch_block;
} else
{if(cljs.core.keyword_identical_QMARK_(k53094,cljs.core.constant$keyword$287))
{return self__.catch_exception;
} else
{if(cljs.core.keyword_identical_QMARK_(k53094,cljs.core.constant$keyword$288))
{return self__.finally_block;
} else
{if(cljs.core.keyword_identical_QMARK_(k53094,cljs.core.constant$keyword$289))
{return self__.continue_block;
} else
{if(cljs.core.keyword_identical_QMARK_(k53094,cljs.core.constant$keyword$290))
{return self__.prev;
} else
{if(cljs.core.constant$keyword$274)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k53094,else__11462__auto__);
} else
{return null;
}
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11466__auto__,k__11467__auto__,G__53093){var self__ = this;
var this__11466__auto____$1 = this;var pred__53096 = cljs.core.keyword_identical_QMARK_;var expr__53097 = k__11467__auto__;if(cljs.core.truth_((pred__53096.cljs$core$IFn$_invoke$arity$2 ? pred__53096.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$286,expr__53097) : pred__53096.call(null,cljs.core.constant$keyword$286,expr__53097))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__53093,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__53096.cljs$core$IFn$_invoke$arity$2 ? pred__53096.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$287,expr__53097) : pred__53096.call(null,cljs.core.constant$keyword$287,expr__53097))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__53093,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__53096.cljs$core$IFn$_invoke$arity$2 ? pred__53096.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$288,expr__53097) : pred__53096.call(null,cljs.core.constant$keyword$288,expr__53097))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__53093,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__53096.cljs$core$IFn$_invoke$arity$2 ? pred__53096.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$289,expr__53097) : pred__53096.call(null,cljs.core.constant$keyword$289,expr__53097))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__53093,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__53096.cljs$core$IFn$_invoke$arity$2 ? pred__53096.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$290,expr__53097) : pred__53096.call(null,cljs.core.constant$keyword$290,expr__53097))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__53093,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11467__auto__,G__53093),null));
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11473__auto__,writer__11474__auto__,opts__11475__auto__){var self__ = this;
var this__11473__auto____$1 = this;var pr_pair__11476__auto__ = (function (keyval__11477__auto__){return cljs.core.pr_sequential_writer(writer__11474__auto__,cljs.core.pr_writer,""," ","",opts__11475__auto__,keyval__11477__auto__);
});return cljs.core.pr_sequential_writer(writer__11474__auto__,pr_pair__11476__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__11475__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$286,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$287,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$288,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$289,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$290,self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11464__auto__,entry__11465__auto__){var self__ = this;
var this__11464__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__11465__auto__))
{return cljs.core._assoc(this__11464__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11465__auto__,0),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11465__auto__,1));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11464__auto____$1,entry__11465__auto__);
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11471__auto__){var self__ = this;
var this__11471__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$286,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$287,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$288,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$289,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$290,self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11463__auto__){var self__ = this;
var this__11463__auto____$1 = this;return (5 + cljs.core.count(self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__11455__auto__,other__11456__auto__){var self__ = this;
var this__11455__auto____$1 = this;if(cljs.core.truth_((function (){var and__10885__auto__ = other__11456__auto__;if(cljs.core.truth_(and__10885__auto__))
{return ((this__11455__auto____$1.constructor === other__11456__auto__.constructor)) && (cljs.core.equiv_map(this__11455__auto____$1,other__11456__auto__));
} else
{return and__10885__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11458__auto__,G__53093){var self__ = this;
var this__11458__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__53093,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11457__auto__){var self__ = this;
var this__11457__auto____$1 = this;return self__.__meta;
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11468__auto__,k__11469__auto__){var self__ = this;
var this__11468__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$288,null,cljs.core.constant$keyword$286,null,cljs.core.constant$keyword$287,null,cljs.core.constant$keyword$289,null,cljs.core.constant$keyword$290,null], null), null),k__11469__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,this__11468__auto____$1),self__.__meta),k__11469__auto__);
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11469__auto__)),null));
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__11493__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__11493__auto__,writer__11494__auto__){return cljs.core._write(writer__11494__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function __GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev));
});
cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__53095){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(cljs.core.constant$keyword$286.cljs$core$IFn$_invoke$arity$1(G__53095),cljs.core.constant$keyword$287.cljs$core$IFn$_invoke$arity$1(G__53095),cljs.core.constant$keyword$288.cljs$core$IFn$_invoke$arity$1(G__53095),cljs.core.constant$keyword$289.cljs$core$IFn$_invoke$arity$1(G__53095),cljs.core.constant$keyword$290.cljs$core$IFn$_invoke$arity$1(G__53095),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__53095,cljs.core.constant$keyword$286,cljs.core.array_seq([cljs.core.constant$keyword$287,cljs.core.constant$keyword$288,cljs.core.constant$keyword$289,cljs.core.constant$keyword$290], 0))));
});
cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){var statearr_53100 = state;(statearr_53100[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));
return statearr_53100;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function process_exception(state){while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);var catch_block = cljs.core.constant$keyword$286.cljs$core$IFn$_invoke$arity$1(exception_frame);var catch_exception = cljs.core.constant$keyword$287.cljs$core$IFn$_invoke$arity$1(exception_frame);var exception = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);if(cljs.core.truth_((function (){var and__10885__auto__ = exception;if(cljs.core.truth_(and__10885__auto__))
{return cljs.core.not(exception_frame);
} else
{return and__10885__auto__;
}
})()))
{throw exception;
} else
{if(cljs.core.truth_((function (){var and__10885__auto__ = exception;if(cljs.core.truth_(and__10885__auto__))
{var and__10885__auto____$1 = catch_block;if(cljs.core.truth_(and__10885__auto____$1))
{return (exception instanceof catch_exception);
} else
{return and__10885__auto____$1;
}
} else
{return and__10885__auto__;
}
})()))
{var statearr_53106 = state;(statearr_53106[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);
(statearr_53106[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);
(statearr_53106[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);
(statearr_53106[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(exception_frame,cljs.core.constant$keyword$286,null,cljs.core.array_seq([cljs.core.constant$keyword$287,null], 0)));
return statearr_53106;
} else
{if(cljs.core.truth_((function (){var and__10885__auto__ = exception;if(cljs.core.truth_(and__10885__auto__))
{return (cljs.core.not(catch_block)) && (cljs.core.not(cljs.core.constant$keyword$288.cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else
{return and__10885__auto__;
}
})()))
{var statearr_53107_53111 = state;(statearr_53107_53111[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$290.cljs$core$IFn$_invoke$arity$1(exception_frame));
{
var G__53112 = state;
state = G__53112;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__10885__auto__ = exception;if(cljs.core.truth_(and__10885__auto__))
{var and__10885__auto____$1 = cljs.core.not(catch_block);if(and__10885__auto____$1)
{return cljs.core.constant$keyword$288.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__10885__auto____$1;
}
} else
{return and__10885__auto__;
}
})()))
{var statearr_53108 = state;(statearr_53108[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$288.cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_53108[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$288,null));
return statearr_53108;
} else
{if(cljs.core.truth_((function (){var and__10885__auto__ = cljs.core.not(exception);if(and__10885__auto__)
{return cljs.core.constant$keyword$288.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__10885__auto__;
}
})()))
{var statearr_53109 = state;(statearr_53109[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$288.cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_53109[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$288,null));
return statearr_53109;
} else
{if((cljs.core.not(exception)) && (cljs.core.not(cljs.core.constant$keyword$288.cljs$core$IFn$_invoke$arity$1(exception_frame))))
{var statearr_53110 = state;(statearr_53110[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$289.cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_53110[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$290.cljs$core$IFn$_invoke$arity$1(exception_frame));
return statearr_53110;
} else
{if(cljs.core.constant$keyword$274)
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
