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
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function finished_QMARK_(state_array){return cljs.core.keyword_identical_QMARK_.call(null,(state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),new cljs.core.Keyword(null,"finished","finished",4635210724));
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.impl.ioc_helpers.t34566 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t34566 = (function (f,fn_handler,meta34567){
this.f = f;
this.fn_handler = fn_handler;
this.meta34567 = meta34567;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t34566.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.t34566.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t34566";
cljs.core.async.impl.ioc_helpers.t34566.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.async.impl.ioc-helpers/t34566");
});
cljs.core.async.impl.ioc_helpers.t34566.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.impl.ioc_helpers.t34566.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.impl.ioc_helpers.t34566.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.impl.ioc_helpers.t34566.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34568){var self__ = this;
var _34568__$1 = this;return self__.meta34567;
});
cljs.core.async.impl.ioc_helpers.t34566.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34568,meta34567__$1){var self__ = this;
var _34568__$1 = this;return (new cljs.core.async.impl.ioc_helpers.t34566(self__.f,self__.fn_handler,meta34567__$1));
});
cljs.core.async.impl.ioc_helpers.__GT_t34566 = (function __GT_t34566(f__$1,fn_handler__$1,meta34567){return (new cljs.core.async.impl.ioc_helpers.t34566(f__$1,fn_handler__$1,meta34567));
});
}
return (new cljs.core.async.impl.ioc_helpers.t34566(f,fn_handler,null));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){return cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){try{return cljs.core.async.impl.ioc_helpers.run_state_machine.call(null,state);
}catch (e34570){if((e34570 instanceof Object))
{var ex = e34570;cljs.core.async.impl.protocols.close_BANG_.call(null,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.USER_START_IDX));
throw ex;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34570;
} else
{return null;
}
}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){var temp__4096__auto__ = cljs.core.async.impl.protocols.take_BANG_.call(null,c,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (x){var statearr_34573_34575 = state;(statearr_34573_34575[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);
(statearr_34573_34575[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4096__auto__))
{var cb = temp__4096__auto__;var statearr_34574_34576 = state;(statearr_34574_34576[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_34574_34576[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){var temp__4096__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,c,val,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (){var statearr_34579_34581 = state;(statearr_34579_34581[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = null);
(statearr_34579_34581[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4096__auto__))
{var cb = temp__4096__auto__;var statearr_34580_34582 = state;(statearr_34580_34582[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_34580_34582[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__34583){var map__34588 = p__34583;var map__34588__$1 = ((cljs.core.seq_QMARK_.call(null,map__34588))?cljs.core.apply.call(null,cljs.core.hash_map,map__34588):map__34588);var opts = map__34588__$1;var statearr_34589_34592 = state;(statearr_34589_34592[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4098__auto__ = cljs.core.async.do_alts.call(null,(function (val){var statearr_34590_34593 = state;(statearr_34590_34593[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);if(cljs.core.truth_(temp__4098__auto__))
{var cb = temp__4098__auto__;var statearr_34591_34594 = state;(statearr_34591_34594[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__34583 = null;if (arguments.length > 3) {
  p__34583 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__34583);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__34595){
var state = cljs.core.first(arglist__34595);
arglist__34595 = cljs.core.next(arglist__34595);
var cont_block = cljs.core.first(arglist__34595);
arglist__34595 = cljs.core.next(arglist__34595);
var ports = cljs.core.first(arglist__34595);
var p__34583 = cljs.core.rest(arglist__34595);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__34583);
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
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5714__auto__){var self__ = this;
var this__5714__auto____$1 = this;var h__5568__auto__ = self__.__hash;if(!((h__5568__auto__ == null)))
{return h__5568__auto__;
} else
{var h__5568__auto____$1 = cljs.core.hash_imap.call(null,this__5714__auto____$1);self__.__hash = h__5568__auto____$1;
return h__5568__auto____$1;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5719__auto__,k__5720__auto__){var self__ = this;
var this__5719__auto____$1 = this;return cljs.core._lookup.call(null,this__5719__auto____$1,k__5720__auto__,null);
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5721__auto__,k34597,else__5722__auto__){var self__ = this;
var this__5721__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k34597,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893)))
{return self__.catch_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k34597,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687)))
{return self__.catch_exception;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k34597,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429)))
{return self__.finally_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k34597,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097)))
{return self__.continue_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k34597,new cljs.core.Keyword(null,"prev","prev",1017353637)))
{return self__.prev;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k34597,else__5722__auto__);
} else
{return null;
}
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5726__auto__,k__5727__auto__,G__34596){var self__ = this;
var this__5726__auto____$1 = this;var pred__34599 = cljs.core.keyword_identical_QMARK_;var expr__34600 = k__5727__auto__;if(cljs.core.truth_(pred__34599.call(null,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),expr__34600)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__34596,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__34599.call(null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),expr__34600)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__34596,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__34599.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),expr__34600)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__34596,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__34599.call(null,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),expr__34600)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__34596,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__34599.call(null,new cljs.core.Keyword(null,"prev","prev",1017353637),expr__34600)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__34596,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5727__auto__,G__34596),null));
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5733__auto__,writer__5734__auto__,opts__5735__auto__){var self__ = this;
var this__5733__auto____$1 = this;var pr_pair__5736__auto__ = (function (keyval__5737__auto__){return cljs.core.pr_sequential_writer.call(null,writer__5734__auto__,cljs.core.pr_writer,""," ","",opts__5735__auto__,keyval__5737__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__5734__auto__,pr_pair__5736__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__5735__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prev","prev",1017353637),self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5724__auto__,entry__5725__auto__){var self__ = this;
var this__5724__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__5725__auto__))
{return cljs.core._assoc.call(null,this__5724__auto____$1,cljs.core._nth.call(null,entry__5725__auto__,0),cljs.core._nth.call(null,entry__5725__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__5724__auto____$1,entry__5725__auto__);
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5731__auto__){var self__ = this;
var this__5731__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prev","prev",1017353637),self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5723__auto__){var self__ = this;
var this__5723__auto____$1 = this;return (5 + cljs.core.count.call(null,self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5715__auto__,other__5716__auto__){var self__ = this;
var this__5715__auto____$1 = this;if(cljs.core.truth_((function (){var and__5145__auto__ = other__5716__auto__;if(cljs.core.truth_(and__5145__auto__))
{return ((this__5715__auto____$1.constructor === other__5716__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__5715__auto____$1,other__5716__auto__));
} else
{return and__5145__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5718__auto__,G__34596){var self__ = this;
var this__5718__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__34596,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5717__auto__){var self__ = this;
var this__5717__auto____$1 = this;return self__.__meta;
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5728__auto__,k__5729__auto__){var self__ = this;
var this__5728__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),null,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),null,new cljs.core.Keyword(null,"prev","prev",1017353637),null], null), null),k__5729__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5728__auto____$1),self__.__meta),k__5729__auto__);
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5729__auto__)),null));
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__5753__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__5753__auto__,writer__5754__auto__){return cljs.core._write.call(null,writer__5754__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function __GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev));
});
cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__34598){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(new cljs.core.Keyword(null,"catch-block","catch-block",2343862893).cljs$core$IFn$_invoke$arity$1(G__34598),new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687).cljs$core$IFn$_invoke$arity$1(G__34598),new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(G__34598),new cljs.core.Keyword(null,"continue-block","continue-block",1486987097).cljs$core$IFn$_invoke$arity$1(G__34598),new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(G__34598),null,cljs.core.dissoc.call(null,G__34598,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),new cljs.core.Keyword(null,"prev","prev",1017353637))));
});
cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){var statearr_34603 = state;(statearr_34603[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame.call(null,catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));
return statearr_34603;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function process_exception(state){while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);var catch_block = new cljs.core.Keyword(null,"catch-block","catch-block",2343862893).cljs$core$IFn$_invoke$arity$1(exception_frame);var catch_exception = new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687).cljs$core$IFn$_invoke$arity$1(exception_frame);var exception = cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);if(cljs.core.truth_((function (){var and__5145__auto__ = exception;if(cljs.core.truth_(and__5145__auto__))
{return cljs.core.not.call(null,exception_frame);
} else
{return and__5145__auto__;
}
})()))
{throw exception;
} else
{if(cljs.core.truth_((function (){var and__5145__auto__ = exception;if(cljs.core.truth_(and__5145__auto__))
{var and__5145__auto____$1 = catch_block;if(cljs.core.truth_(and__5145__auto____$1))
{return (exception instanceof catch_exception);
} else
{return and__5145__auto____$1;
}
} else
{return and__5145__auto__;
}
})()))
{var statearr_34609 = state;(statearr_34609[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);
(statearr_34609[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);
(statearr_34609[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);
(statearr_34609[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),null));
return statearr_34609;
} else
{if(cljs.core.truth_((function (){var and__5145__auto__ = exception;if(cljs.core.truth_(and__5145__auto__))
{return (cljs.core.not.call(null,catch_block)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else
{return and__5145__auto__;
}
})()))
{var statearr_34610_34614 = state;(statearr_34610_34614[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(exception_frame));
{
var G__34615 = state;
state = G__34615;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__5145__auto__ = exception;if(cljs.core.truth_(and__5145__auto__))
{var and__5145__auto____$1 = cljs.core.not.call(null,catch_block);if(and__5145__auto____$1)
{return new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__5145__auto____$1;
}
} else
{return and__5145__auto__;
}
})()))
{var statearr_34611 = state;(statearr_34611[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_34611[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null));
return statearr_34611;
} else
{if(cljs.core.truth_((function (){var and__5145__auto__ = cljs.core.not.call(null,exception);if(and__5145__auto__)
{return new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__5145__auto__;
}
})()))
{var statearr_34612 = state;(statearr_34612[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_34612[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null));
return statearr_34612;
} else
{if((cljs.core.not.call(null,exception)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame))))
{var statearr_34613 = state;(statearr_34613[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"continue-block","continue-block",1486987097).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_34613[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(exception_frame));
return statearr_34613;
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
