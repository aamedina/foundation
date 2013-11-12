// Compiled by ClojureScript 0.0-2030
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
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function finished_QMARK_(state_array){return cljs.core.keyword_identical_QMARK_.call(null,(state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),new cljs.core.Keyword(null,"finished","finished",4635210724));
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.impl.ioc_helpers.t19780 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t19780 = (function (f,fn_handler,meta19781){
this.f = f;
this.fn_handler = fn_handler;
this.meta19781 = meta19781;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t19780.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.t19780.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t19780";
cljs.core.async.impl.ioc_helpers.t19780.cljs$lang$ctorPrWriter = (function (this__7976__auto__,writer__7977__auto__,opt__7978__auto__){return cljs.core._write.call(null,writer__7977__auto__,"cljs.core.async.impl.ioc-helpers/t19780");
});
cljs.core.async.impl.ioc_helpers.t19780.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.impl.ioc_helpers.t19780.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.impl.ioc_helpers.t19780.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.impl.ioc_helpers.t19780.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19782){var self__ = this;
var _19782__$1 = this;return self__.meta19781;
});
cljs.core.async.impl.ioc_helpers.t19780.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19782,meta19781__$1){var self__ = this;
var _19782__$1 = this;return (new cljs.core.async.impl.ioc_helpers.t19780(self__.f,self__.fn_handler,meta19781__$1));
});
cljs.core.async.impl.ioc_helpers.__GT_t19780 = (function __GT_t19780(f__$1,fn_handler__$1,meta19781){return (new cljs.core.async.impl.ioc_helpers.t19780(f__$1,fn_handler__$1,meta19781));
});
}
return (new cljs.core.async.impl.ioc_helpers.t19780(f,fn_handler,null));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){return cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){try{return cljs.core.async.impl.ioc_helpers.run_state_machine.call(null,state);
}catch (e19784){if((e19784 instanceof Object))
{var ex = e19784;cljs.core.async.impl.protocols.close_BANG_.call(null,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.USER_START_IDX));
throw ex;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19784;
} else
{return null;
}
}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){var temp__4090__auto__ = cljs.core.async.impl.protocols.take_BANG_.call(null,c,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (x){var statearr_19787_19789 = state;(statearr_19787_19789[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);
(statearr_19787_19789[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_19788_19790 = state;(statearr_19788_19790[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_19788_19790[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,c,val,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (){var statearr_19793_19795 = state;(statearr_19793_19795[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = null);
(statearr_19793_19795[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_19794_19796 = state;(statearr_19794_19796[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_19794_19796[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__19797){var map__19802 = p__19797;var map__19802__$1 = ((cljs.core.seq_QMARK_.call(null,map__19802))?cljs.core.apply.call(null,cljs.core.hash_map,map__19802):map__19802);var opts = map__19802__$1;var statearr_19803_19806 = state;(statearr_19803_19806[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4092__auto__ = cljs.core.async.do_alts.call(null,(function (val){var statearr_19804_19807 = state;(statearr_19804_19807[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);if(cljs.core.truth_(temp__4092__auto__))
{var cb = temp__4092__auto__;var statearr_19805_19808 = state;(statearr_19805_19808[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__19797 = null;if (arguments.length > 3) {
  p__19797 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__19797);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__19809){
var state = cljs.core.first(arglist__19809);
arglist__19809 = cljs.core.next(arglist__19809);
var cont_block = cljs.core.first(arglist__19809);
arglist__19809 = cljs.core.next(arglist__19809);
var ports = cljs.core.first(arglist__19809);
var p__19797 = cljs.core.rest(arglist__19809);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__19797);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
cljs.core.async.impl.ioc_helpers.return_chan = (function return_chan(state,value){var c = (state[cljs.core.async.impl.ioc_helpers.USER_START_IDX]);if((value == null))
{} else
{cljs.core.async.impl.protocols.put_BANG_.call(null,c,value,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (){return null;
})));
}
cljs.core.async.impl.protocols.close_BANG_.call(null,c);
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
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7989__auto__){var self__ = this;
var this__7989__auto____$1 = this;var h__7843__auto__ = self__.__hash;if(!((h__7843__auto__ == null)))
{return h__7843__auto__;
} else
{var h__7843__auto____$1 = cljs.core.hash_imap.call(null,this__7989__auto____$1);self__.__hash = h__7843__auto____$1;
return h__7843__auto____$1;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7994__auto__,k__7995__auto__){var self__ = this;
var this__7994__auto____$1 = this;return cljs.core._lookup.call(null,this__7994__auto____$1,k__7995__auto__,null);
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7996__auto__,k19811,else__7997__auto__){var self__ = this;
var this__7996__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k19811,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893)))
{return self__.catch_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k19811,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687)))
{return self__.catch_exception;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k19811,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429)))
{return self__.finally_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k19811,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097)))
{return self__.continue_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k19811,new cljs.core.Keyword(null,"prev","prev",1017353637)))
{return self__.prev;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k19811,else__7997__auto__);
} else
{return null;
}
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8001__auto__,k__8002__auto__,G__19810){var self__ = this;
var this__8001__auto____$1 = this;var pred__19813 = cljs.core.keyword_identical_QMARK_;var expr__19814 = k__8002__auto__;if(pred__19813.call(null,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),expr__19814))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__19810,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(pred__19813.call(null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),expr__19814))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__19810,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(pred__19813.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),expr__19814))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__19810,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(pred__19813.call(null,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),expr__19814))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__19810,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(pred__19813.call(null,new cljs.core.Keyword(null,"prev","prev",1017353637),expr__19814))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__19810,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8002__auto__,G__19810),null));
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8008__auto__,writer__8009__auto__,opts__8010__auto__){var self__ = this;
var this__8008__auto____$1 = this;var pr_pair__8011__auto__ = (function (keyval__8012__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8009__auto__,cljs.core.pr_writer,""," ","",opts__8010__auto__,keyval__8012__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__8009__auto__,pr_pair__8011__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__8010__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray.call(null,[new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),self__.catch_block],true),cljs.core.PersistentVector.fromArray.call(null,[new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),self__.catch_exception],true),cljs.core.PersistentVector.fromArray.call(null,[new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),self__.finally_block],true),cljs.core.PersistentVector.fromArray.call(null,[new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),self__.continue_block],true),cljs.core.PersistentVector.fromArray.call(null,[new cljs.core.Keyword(null,"prev","prev",1017353637),self__.prev],true)], true),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7999__auto__,entry__8000__auto__){var self__ = this;
var this__7999__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8000__auto__))
{return cljs.core._assoc.call(null,this__7999__auto____$1,cljs.core._nth.call(null,entry__8000__auto__,0),cljs.core._nth.call(null,entry__8000__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__7999__auto____$1,entry__8000__auto__);
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8006__auto__){var self__ = this;
var this__8006__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray.call(null,[new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),self__.catch_block],true),cljs.core.PersistentVector.fromArray.call(null,[new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),self__.catch_exception],true),cljs.core.PersistentVector.fromArray.call(null,[new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),self__.finally_block],true),cljs.core.PersistentVector.fromArray.call(null,[new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),self__.continue_block],true),cljs.core.PersistentVector.fromArray.call(null,[new cljs.core.Keyword(null,"prev","prev",1017353637),self__.prev],true)], true),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7998__auto__){var self__ = this;
var this__7998__auto____$1 = this;return (5 + cljs.core.count.call(null,self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7990__auto__,other__7991__auto__){var self__ = this;
var this__7990__auto____$1 = this;if(cljs.core.truth_((function (){var and__7430__auto__ = other__7991__auto__;if(cljs.core.truth_(and__7430__auto__))
{var and__7430__auto____$1 = (this__7990__auto____$1.constructor === other__7991__auto__.constructor);if(and__7430__auto____$1)
{return cljs.core.equiv_map.call(null,this__7990__auto____$1,other__7991__auto__);
} else
{return and__7430__auto____$1;
}
} else
{return and__7430__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7993__auto__,G__19810){var self__ = this;
var this__7993__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__19810,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7992__auto__){var self__ = this;
var this__7992__auto____$1 = this;return self__.__meta;
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8003__auto__,k__8004__auto__){var self__ = this;
var this__8003__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),null,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),null,new cljs.core.Keyword(null,"prev","prev",1017353637),null], true),k__8004__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8003__auto____$1),self__.__meta),k__8004__auto__);
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8004__auto__)),null));
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__8028__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__8028__auto__,writer__8029__auto__){return cljs.core._write.call(null,writer__8029__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function __GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev));
});
cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__19812){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(new cljs.core.Keyword(null,"catch-block","catch-block",2343862893).cljs$core$IFn$_invoke$arity$1(G__19812),new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687).cljs$core$IFn$_invoke$arity$1(G__19812),new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(G__19812),new cljs.core.Keyword(null,"continue-block","continue-block",1486987097).cljs$core$IFn$_invoke$arity$1(G__19812),new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(G__19812),null,cljs.core.dissoc.call(null,G__19812,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),new cljs.core.Keyword(null,"prev","prev",1017353637))));
});
cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){var statearr_19817 = state;(statearr_19817[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame.call(null,catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));
return statearr_19817;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function process_exception(state){while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);var catch_block = new cljs.core.Keyword(null,"catch-block","catch-block",2343862893).cljs$core$IFn$_invoke$arity$1(exception_frame);var catch_exception = new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687).cljs$core$IFn$_invoke$arity$1(exception_frame);var exception = cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);if(cljs.core.truth_((function (){var and__7430__auto__ = exception;if(cljs.core.truth_(and__7430__auto__))
{return cljs.core.not.call(null,exception_frame);
} else
{return and__7430__auto__;
}
})()))
{throw exception;
} else
{if(cljs.core.truth_((function (){var and__7430__auto__ = exception;if(cljs.core.truth_(and__7430__auto__))
{var and__7430__auto____$1 = catch_block;if(cljs.core.truth_(and__7430__auto____$1))
{return (exception instanceof catch_exception);
} else
{return and__7430__auto____$1;
}
} else
{return and__7430__auto__;
}
})()))
{var statearr_19823 = state;(statearr_19823[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);
(statearr_19823[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);
(statearr_19823[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);
(statearr_19823[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),null));
return statearr_19823;
} else
{if(cljs.core.truth_((function (){var and__7430__auto__ = exception;if(cljs.core.truth_(and__7430__auto__))
{return (cljs.core.not.call(null,catch_block)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else
{return and__7430__auto__;
}
})()))
{var statearr_19824_19828 = state;(statearr_19824_19828[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(exception_frame));
{
var G__19829 = state;
state = G__19829;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__7430__auto__ = exception;if(cljs.core.truth_(and__7430__auto__))
{var and__7430__auto____$1 = cljs.core.not.call(null,catch_block);if(and__7430__auto____$1)
{return new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__7430__auto____$1;
}
} else
{return and__7430__auto__;
}
})()))
{var statearr_19825 = state;(statearr_19825[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_19825[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null));
return statearr_19825;
} else
{if(cljs.core.truth_((function (){var and__7430__auto__ = cljs.core.not.call(null,exception);if(and__7430__auto__)
{return new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__7430__auto__;
}
})()))
{var statearr_19826 = state;(statearr_19826[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_19826[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null));
return statearr_19826;
} else
{if((cljs.core.not.call(null,exception)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame))))
{var statearr_19827 = state;(statearr_19827[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"continue-block","continue-block",1486987097).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_19827[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(exception_frame));
return statearr_19827;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(false)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No matching clause"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,false))].join('')));
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
