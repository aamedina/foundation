// Compiled by ClojureScript 0.0-2120
goog.provide('foundation.app');
goog.require('cljs.core');
goog.require('foundation.app.util');
goog.require('foundation.app.router');
goog.require('cljs.core.async');
goog.require('foundation.app.data.component');
goog.require('foundation.app.router');
goog.require('foundation.app.data.component');
goog.require('foundation.app.render');
goog.require('foundation.app.data.tracking_map');
goog.require('foundation.app.util');
goog.require('foundation.app.data.component');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('foundation.app.data.dependency');
goog.require('cljs.core.match');
goog.require('clojure.set');
goog.require('cljs.core.match');
goog.require('cljs.core.async');
goog.require('foundation.app.data.tracking_map');
goog.require('foundation.app.router');
goog.require('foundation.app.data.dependency');
goog.require('foundation.app.render');
foundation.app.transact_one = (function transact_one(state,message){var state__$1 = cljs.core.dissoc.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"input","input",1114262332),message),new cljs.core.Keyword(null,"effect","effect",4002786563));var old_state = state__$1;var new_state = state__$1;return new_state;
});
foundation.app.input_queue = (function input_queue(app_state){var input_queue__$1 = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,32));var c__12185__auto___92627 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12186__auto__ = (function (){var switch__12115__auto__ = (function (state_92615){var state_val_92616 = (state_92615[1]);if((state_val_92616 === 4))
{var inst_92609 = (state_92615[2]);var inst_92610 = cljs.core.println.call(null,inst_92609);var state_92615__$1 = (function (){var statearr_92617 = state_92615;(statearr_92617[7] = inst_92610);
return statearr_92617;
})();var statearr_92618_92628 = state_92615__$1;(statearr_92618_92628[2] = null);
(statearr_92618_92628[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_92616 === 3))
{var inst_92613 = (state_92615[2]);var state_92615__$1 = state_92615;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_92615__$1,inst_92613);
} else
{if((state_val_92616 === 2))
{var state_92615__$1 = state_92615;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_92615__$1,4,input_queue__$1);
} else
{if((state_val_92616 === 1))
{var state_92615__$1 = state_92615;var statearr_92619_92629 = state_92615__$1;(statearr_92619_92629[2] = null);
(statearr_92619_92629[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__12115__auto__){
return (function() {
var state_machine__12116__auto__ = null;
var state_machine__12116__auto____0 = (function (){var statearr_92623 = [null,null,null,null,null,null,null,null];(statearr_92623[0] = state_machine__12116__auto__);
(statearr_92623[1] = 1);
return statearr_92623;
});
var state_machine__12116__auto____1 = (function (state_92615){while(true){
var ret_value__12117__auto__ = (function (){try{while(true){
var result__12118__auto__ = switch__12115__auto__.call(null,state_92615);if(cljs.core.keyword_identical_QMARK_.call(null,result__12118__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12118__auto__;
}
break;
}
}catch (e92624){if((e92624 instanceof Object))
{var ex__12119__auto__ = e92624;var statearr_92625_92630 = state_92615;(statearr_92625_92630[5] = ex__12119__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92615);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e92624;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12117__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__92631 = state_92615;
state_92615 = G__92631;
continue;
}
} else
{return ret_value__12117__auto__;
}
break;
}
});
state_machine__12116__auto__ = function(state_92615){
switch(arguments.length){
case 0:
return state_machine__12116__auto____0.call(this);
case 1:
return state_machine__12116__auto____1.call(this,state_92615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12116__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12116__auto____0;
state_machine__12116__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12116__auto____1;
return state_machine__12116__auto__;
})()
;})(switch__12115__auto__))
})();var state__12187__auto__ = (function (){var statearr_92626 = f__12186__auto__.call(null);(statearr_92626[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12185__auto___92627);
return statearr_92626;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12187__auto__);
}));
return input_queue__$1;
});
foundation.app.output_queue = (function output_queue(app_state){var output_queue__$1 = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,32));cljs.core.add_watch.call(null,app_state,new cljs.core.Keyword(null,"output","output",4303359091),(function (_,___$1,old,new$){return cljs.core.async.put_BANG_.call(null,output_queue__$1,new$);
}));
return output_queue__$1;
});

/**
* @constructor
* @param {*} state
* @param {*} input
* @param {*} output
* @param {*} renderer
* @param {*} render_queue
* @param {*} router
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
foundation.app.Dataflow = (function (state,input,output,renderer,render_queue,router,__meta,__extmap){
this.state = state;
this.input = input;
this.output = output;
this.renderer = renderer;
this.render_queue = render_queue;
this.router = router;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>6){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
foundation.app.Dataflow.prototype.foundation$app$data$component$Lifecycle$ = true;
foundation.app.Dataflow.prototype.foundation$app$data$component$Lifecycle$start$arity$1 = (function (df){var self__ = this;
var df__$1 = this;foundation.app.data.component.start_system.call(null,df__$1,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"renderer","renderer",519058485),null,new cljs.core.Keyword(null,"router","router",4383738555),null], null), null));
foundation.app.util.log_group.call(null,"System initialization",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Router initialized."], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Renderer initialized."], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.app.data.component.dependency_graph.call(null,df__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"router","router",4383738555),new cljs.core.Keyword(null,"renderer","renderer",519058485)], null))], null)], null));
return df__$1;
});
foundation.app.Dataflow.prototype.foundation$app$data$component$Lifecycle$stop$arity$1 = (function (df){var self__ = this;
var df__$1 = this;return foundation.app.data.component.stop_system.call(null,df__$1,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"renderer","renderer",519058485),null,new cljs.core.Keyword(null,"router","router",4383738555),null], null), null));
});
foundation.app.Dataflow.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8790__auto__){var self__ = this;
var this__8790__auto____$1 = this;var h__8644__auto__ = self__.__hash;if(!((h__8644__auto__ == null)))
{return h__8644__auto__;
} else
{var h__8644__auto____$1 = cljs.core.hash_imap.call(null,this__8790__auto____$1);self__.__hash = h__8644__auto____$1;
return h__8644__auto____$1;
}
});
foundation.app.Dataflow.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8795__auto__,k__8796__auto__){var self__ = this;
var this__8795__auto____$1 = this;return cljs.core._lookup.call(null,this__8795__auto____$1,k__8796__auto__,null);
});
foundation.app.Dataflow.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8797__auto__,k92633,else__8798__auto__){var self__ = this;
var this__8797__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k92633,new cljs.core.Keyword(null,"state","state",1123661827)))
{return self__.state;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k92633,new cljs.core.Keyword(null,"input","input",1114262332)))
{return self__.input;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k92633,new cljs.core.Keyword(null,"output","output",4303359091)))
{return self__.output;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k92633,new cljs.core.Keyword(null,"renderer","renderer",519058485)))
{return self__.renderer;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k92633,new cljs.core.Keyword(null,"render-queue","render-queue",665147788)))
{return self__.render_queue;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k92633,new cljs.core.Keyword(null,"router","router",4383738555)))
{return self__.router;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k92633,else__8798__auto__);
} else
{return null;
}
}
}
}
}
}
}
});
foundation.app.Dataflow.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8802__auto__,k__8803__auto__,G__92632){var self__ = this;
var this__8802__auto____$1 = this;var pred__92635 = cljs.core.keyword_identical_QMARK_;var expr__92636 = k__8803__auto__;if(cljs.core.truth_(pred__92635.call(null,new cljs.core.Keyword(null,"state","state",1123661827),expr__92636)))
{return (new foundation.app.Dataflow(G__92632,self__.input,self__.output,self__.renderer,self__.render_queue,self__.router,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__92635.call(null,new cljs.core.Keyword(null,"input","input",1114262332),expr__92636)))
{return (new foundation.app.Dataflow(self__.state,G__92632,self__.output,self__.renderer,self__.render_queue,self__.router,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__92635.call(null,new cljs.core.Keyword(null,"output","output",4303359091),expr__92636)))
{return (new foundation.app.Dataflow(self__.state,self__.input,G__92632,self__.renderer,self__.render_queue,self__.router,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__92635.call(null,new cljs.core.Keyword(null,"renderer","renderer",519058485),expr__92636)))
{return (new foundation.app.Dataflow(self__.state,self__.input,self__.output,G__92632,self__.render_queue,self__.router,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__92635.call(null,new cljs.core.Keyword(null,"render-queue","render-queue",665147788),expr__92636)))
{return (new foundation.app.Dataflow(self__.state,self__.input,self__.output,self__.renderer,G__92632,self__.router,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__92635.call(null,new cljs.core.Keyword(null,"router","router",4383738555),expr__92636)))
{return (new foundation.app.Dataflow(self__.state,self__.input,self__.output,self__.renderer,self__.render_queue,G__92632,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.Dataflow(self__.state,self__.input,self__.output,self__.renderer,self__.render_queue,self__.router,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8803__auto__,G__92632),null));
}
}
}
}
}
}
});
foundation.app.Dataflow.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8809__auto__,writer__8810__auto__,opts__8811__auto__){var self__ = this;
var this__8809__auto____$1 = this;var pr_pair__8812__auto__ = (function (keyval__8813__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8810__auto__,cljs.core.pr_writer,""," ","",opts__8811__auto__,keyval__8813__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__8810__auto__,pr_pair__8812__auto__,"#foundation.app.Dataflow{",", ","}",opts__8811__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",1123661827),self__.state],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input","input",1114262332),self__.input],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output","output",4303359091),self__.output],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"renderer","renderer",519058485),self__.renderer],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-queue","render-queue",665147788),self__.render_queue],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"router","router",4383738555),self__.router],null))], null),self__.__extmap));
});
foundation.app.Dataflow.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8800__auto__,entry__8801__auto__){var self__ = this;
var this__8800__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8801__auto__))
{return cljs.core._assoc.call(null,this__8800__auto____$1,cljs.core._nth.call(null,entry__8801__auto__,0),cljs.core._nth.call(null,entry__8801__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8800__auto____$1,entry__8801__auto__);
}
});
foundation.app.Dataflow.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8807__auto__){var self__ = this;
var this__8807__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",1123661827),self__.state],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input","input",1114262332),self__.input],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output","output",4303359091),self__.output],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"renderer","renderer",519058485),self__.renderer],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-queue","render-queue",665147788),self__.render_queue],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"router","router",4383738555),self__.router],null))], null),self__.__extmap));
});
foundation.app.Dataflow.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8799__auto__){var self__ = this;
var this__8799__auto____$1 = this;return (6 + cljs.core.count.call(null,self__.__extmap));
});
foundation.app.Dataflow.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8791__auto__,other__8792__auto__){var self__ = this;
var this__8791__auto____$1 = this;if(cljs.core.truth_((function (){var and__8216__auto__ = other__8792__auto__;if(cljs.core.truth_(and__8216__auto__))
{return ((this__8791__auto____$1.constructor === other__8792__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__8791__auto____$1,other__8792__auto__));
} else
{return and__8216__auto__;
}
})()))
{return true;
} else
{return false;
}
});
foundation.app.Dataflow.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8794__auto__,G__92632){var self__ = this;
var this__8794__auto____$1 = this;return (new foundation.app.Dataflow(self__.state,self__.input,self__.output,self__.renderer,self__.render_queue,self__.router,G__92632,self__.__extmap,self__.__hash));
});
foundation.app.Dataflow.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8793__auto__){var self__ = this;
var this__8793__auto____$1 = this;return self__.__meta;
});
foundation.app.Dataflow.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8804__auto__,k__8805__auto__){var self__ = this;
var this__8804__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"renderer","renderer",519058485),null,new cljs.core.Keyword(null,"state","state",1123661827),null,new cljs.core.Keyword(null,"output","output",4303359091),null,new cljs.core.Keyword(null,"input","input",1114262332),null,new cljs.core.Keyword(null,"router","router",4383738555),null,new cljs.core.Keyword(null,"render-queue","render-queue",665147788),null], null), null),k__8805__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8804__auto____$1),self__.__meta),k__8805__auto__);
} else
{return (new foundation.app.Dataflow(self__.state,self__.input,self__.output,self__.renderer,self__.render_queue,self__.router,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8805__auto__)),null));
}
});
foundation.app.Dataflow.cljs$lang$type = true;
foundation.app.Dataflow.cljs$lang$ctorPrSeq = (function (this__8829__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"foundation.app/Dataflow");
});
foundation.app.Dataflow.cljs$lang$ctorPrWriter = (function (this__8829__auto__,writer__8830__auto__){return cljs.core._write.call(null,writer__8830__auto__,"foundation.app/Dataflow");
});
foundation.app.__GT_Dataflow = (function __GT_Dataflow(state,input,output,renderer,render_queue,router){return (new foundation.app.Dataflow(state,input,output,renderer,render_queue,router));
});
foundation.app.map__GT_Dataflow = (function map__GT_Dataflow(G__92634){return (new foundation.app.Dataflow(new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(G__92634),new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(G__92634),new cljs.core.Keyword(null,"output","output",4303359091).cljs$core$IFn$_invoke$arity$1(G__92634),new cljs.core.Keyword(null,"renderer","renderer",519058485).cljs$core$IFn$_invoke$arity$1(G__92634),new cljs.core.Keyword(null,"render-queue","render-queue",665147788).cljs$core$IFn$_invoke$arity$1(G__92634),new cljs.core.Keyword(null,"router","router",4383738555).cljs$core$IFn$_invoke$arity$1(G__92634),null,cljs.core.dissoc.call(null,G__92634,new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.Keyword(null,"output","output",4303359091),new cljs.core.Keyword(null,"renderer","renderer",519058485),new cljs.core.Keyword(null,"render-queue","render-queue",665147788),new cljs.core.Keyword(null,"router","router",4383738555))));
});
/**
* @param {...*} var_args
*/
foundation.app.build = (function() { 
var build__delegate = function (p__92638){var map__92641 = p__92638;var map__92641__$1 = ((cljs.core.seq_QMARK_.call(null,map__92641))?cljs.core.apply.call(null,cljs.core.hash_map,map__92641):map__92641);var config = map__92641__$1;var routes = cljs.core.get.call(null,map__92641__$1,new cljs.core.Keyword(null,"routes","routes",4383738556));var root_id = cljs.core.get.call(null,map__92641__$1,new cljs.core.Keyword(null,"root-id","root-id",2393957720));var app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-model","data-model",1196427960),foundation.app.data.tracking_map.tracking_map.call(null,cljs.core.PersistentArrayMap.EMPTY)], null));var input = foundation.app.input_queue.call(null,app_state);var output = foundation.app.output_queue.call(null,app_state);var renderer = foundation.app.render.renderer.call(null,root_id);var render_queue = foundation.app.render.push_render_queue.call(null,renderer,input);try{return foundation.app.data.component.start.call(null,foundation.app.map__GT_Dataflow.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"state","state",1123661827),app_state,new cljs.core.Keyword(null,"input","input",1114262332),input,new cljs.core.Keyword(null,"output","output",4303359091),output,new cljs.core.Keyword(null,"renderer","renderer",519058485),foundation.app.data.component.using.call(null,renderer,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.Keyword(null,"app-state","app-state",1424976215),new cljs.core.Keyword(null,"state","state",1123661827)], null)),new cljs.core.Keyword(null,"render-queue","render-queue",665147788),render_queue,new cljs.core.Keyword(null,"router","router",4383738555),foundation.app.data.component.using.call(null,foundation.app.router.router.call(null,routes),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.Keyword(null,"app-state","app-state",1424976215),new cljs.core.Keyword(null,"state","state",1123661827)], null))], null)));
}catch (e92642){if((e92642 instanceof Error))
{var e = e92642;return cljs.core.println.call(null,e);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e92642;
} else
{return null;
}
}
}};
var build = function (var_args){
var p__92638 = null;if (arguments.length > 0) {
  p__92638 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return build__delegate.call(this,p__92638);};
build.cljs$lang$maxFixedArity = 0;
build.cljs$lang$applyTo = (function (arglist__92643){
var p__92638 = cljs.core.seq(arglist__92643);
return build__delegate(p__92638);
});
build.cljs$core$IFn$_invoke$arity$variadic = build__delegate;
return build;
})()
;

//# sourceMappingURL=app.js.map