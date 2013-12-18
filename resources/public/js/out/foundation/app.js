// Compiled by ClojureScript 0.0-2120
goog.provide('foundation.app');
goog.require('cljs.core');
goog.require('foundation.app.util');
goog.require('foundation.app.router');
goog.require('cljs.core.async');
goog.require('foundation.app.data.component');
goog.require('foundation.app.message');
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
goog.require('foundation.app.message');
goog.require('cljs.core.match');
goog.require('cljs.core.async');
goog.require('foundation.app.data.tracking_map');
goog.require('foundation.app.router');
goog.require('foundation.app.data.dependency');
goog.require('foundation.app.render');
foundation.app.transform = (function (){var method_table__9061__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__9062__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__9063__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__9064__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__9065__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("transform",(function (state,message){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.app.message.type.call(null,message),foundation.app.message.path.call(null,message)], null);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__9065__auto__,method_table__9061__auto__,prefer_table__9062__auto__,method_cache__9063__auto__,cached_hierarchy__9064__auto__));
})();
cljs.core._add_method.call(null,foundation.app.transform,new cljs.core.Keyword(null,"default","default",2558708147),(function (state,message){return state;
}));
foundation.app.transact_one = (function transact_one(state,message){var in_transaction_QMARK_ = (new cljs.core.Keyword(null,"data-model","data-model",1196427960).cljs$core$IFn$_invoke$arity$1(state) instanceof foundation.app.data.tracking_map.TrackingMap);var state__$1 = cljs.core.dissoc.call(null,cljs.core.assoc.call(null,((in_transaction_QMARK_)?state:cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"data-model","data-model",1196427960),foundation.app.data.tracking_map.tracking_map.call(null,new cljs.core.Keyword(null,"data-model","data-model",1196427960).cljs$core$IFn$_invoke$arity$1(state)))),new cljs.core.Keyword(null,"input","input",1114262332),message),new cljs.core.Keyword(null,"effect","effect",4002786563));var new_state = cljs.core.update_in.call(null,state__$1,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-model","data-model",1196427960)], null),foundation.app.message.path.call(null,message)),foundation.app.transform,message);var deltas = foundation.app.data.tracking_map.changes.call(null,new cljs.core.Keyword(null,"data-model","data-model",1196427960).cljs$core$IFn$_invoke$arity$1(new_state));return cljs.core.assoc.call(null,((in_transaction_QMARK_)?new_state:cljs.core.assoc.call(null,new_state,new cljs.core.Keyword(null,"data-model","data-model",1196427960),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"data-model","data-model",1196427960).cljs$core$IFn$_invoke$arity$1(new_state)))),new cljs.core.Keyword(null,"deltas","deltas",3973426989),deltas);
});
foundation.app.transact_batch = (function transact_batch(state,messages){var transaction = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"data-model","data-model",1196427960),foundation.app.data.tracking_map.tracking_map.call(null,new cljs.core.Keyword(null,"data-model","data-model",1196427960).cljs$core$IFn$_invoke$arity$1(state)));var new_state = cljs.core.reduce.call(null,foundation.app.transact_one,transaction,messages);return cljs.core.assoc.call(null,new_state,new cljs.core.Keyword(null,"data-model","data-model",1196427960),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"data-model","data-model",1196427960).cljs$core$IFn$_invoke$arity$1(new_state)));
});
foundation.app.input_queue = (function input_queue(app_state){var input_queue__$1 = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,32));var c__12187__auto___31067 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_31050){var state_val_31051 = (state_31050[1]);if((state_val_31051 === 7))
{var inst_31043 = (state_31050[2]);var inst_31044 = new cljs.core.Keyword(null,"deltas","deltas",3973426989).cljs$core$IFn$_invoke$arity$1(inst_31043);var inst_31045 = foundation.app.util.log_group.call(null,"Data Model Deltas",inst_31044);var state_31050__$1 = (function (){var statearr_31052 = state_31050;(statearr_31052[7] = inst_31045);
return statearr_31052;
})();var statearr_31053_31068 = state_31050__$1;(statearr_31053_31068[2] = null);
(statearr_31053_31068[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31051 === 6))
{var inst_31036 = (state_31050[8]);var inst_31041 = cljs.core.swap_BANG_.call(null,app_state,foundation.app.transact_one,inst_31036);var state_31050__$1 = state_31050;var statearr_31054_31069 = state_31050__$1;(statearr_31054_31069[2] = inst_31041);
(statearr_31054_31069[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31051 === 5))
{var inst_31036 = (state_31050[8]);var inst_31039 = cljs.core.swap_BANG_.call(null,app_state,foundation.app.transact_batch,inst_31036);var state_31050__$1 = state_31050;var statearr_31055_31070 = state_31050__$1;(statearr_31055_31070[2] = inst_31039);
(statearr_31055_31070[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31051 === 4))
{var inst_31036 = (state_31050[8]);var inst_31036__$1 = (state_31050[2]);var inst_31037 = cljs.core.vector_QMARK_.call(null,inst_31036__$1);var state_31050__$1 = (function (){var statearr_31056 = state_31050;(statearr_31056[8] = inst_31036__$1);
return statearr_31056;
})();if(inst_31037)
{var statearr_31057_31071 = state_31050__$1;(statearr_31057_31071[1] = 5);
} else
{var statearr_31058_31072 = state_31050__$1;(statearr_31058_31072[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31051 === 3))
{var inst_31048 = (state_31050[2]);var state_31050__$1 = state_31050;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31050__$1,inst_31048);
} else
{if((state_val_31051 === 2))
{var state_31050__$1 = state_31050;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31050__$1,4,input_queue__$1);
} else
{if((state_val_31051 === 1))
{var state_31050__$1 = state_31050;var statearr_31059_31073 = state_31050__$1;(statearr_31059_31073[2] = null);
(statearr_31059_31073[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_31063 = [null,null,null,null,null,null,null,null,null];(statearr_31063[0] = state_machine__12118__auto__);
(statearr_31063[1] = 1);
return statearr_31063;
});
var state_machine__12118__auto____1 = (function (state_31050){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_31050);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e31064){if((e31064 instanceof Object))
{var ex__12121__auto__ = e31064;var statearr_31065_31074 = state_31050;(statearr_31065_31074[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31050);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31064;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31075 = state_31050;
state_31050 = G__31075;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_31050){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_31050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_31066 = f__12188__auto__.call(null);(statearr_31066[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto___31067);
return statearr_31066;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return input_queue__$1;
});
foundation.app.output_queue = (function output_queue(app_state){var output_queue__$1 = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,32));cljs.core.add_watch.call(null,app_state,new cljs.core.Keyword(null,"output","output",4303359091),(function (_,___$1,old,new$){foundation.app.util.log_group.call(null,"State Transitition",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-model","data-model",1196427960).cljs$core$IFn$_invoke$arity$1(old),new cljs.core.Keyword(null,"data-model","data-model",1196427960).cljs$core$IFn$_invoke$arity$1(new$)], null));
return cljs.core.async.put_BANG_.call(null,output_queue__$1,new$);
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
foundation.app.Dataflow.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8785__auto__){var self__ = this;
var this__8785__auto____$1 = this;var h__8639__auto__ = self__.__hash;if(!((h__8639__auto__ == null)))
{return h__8639__auto__;
} else
{var h__8639__auto____$1 = cljs.core.hash_imap.call(null,this__8785__auto____$1);self__.__hash = h__8639__auto____$1;
return h__8639__auto____$1;
}
});
foundation.app.Dataflow.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8790__auto__,k__8791__auto__){var self__ = this;
var this__8790__auto____$1 = this;return cljs.core._lookup.call(null,this__8790__auto____$1,k__8791__auto__,null);
});
foundation.app.Dataflow.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8792__auto__,k31077,else__8793__auto__){var self__ = this;
var this__8792__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k31077,new cljs.core.Keyword(null,"state","state",1123661827)))
{return self__.state;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k31077,new cljs.core.Keyword(null,"input","input",1114262332)))
{return self__.input;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k31077,new cljs.core.Keyword(null,"output","output",4303359091)))
{return self__.output;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k31077,new cljs.core.Keyword(null,"renderer","renderer",519058485)))
{return self__.renderer;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k31077,new cljs.core.Keyword(null,"render-queue","render-queue",665147788)))
{return self__.render_queue;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k31077,new cljs.core.Keyword(null,"router","router",4383738555)))
{return self__.router;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k31077,else__8793__auto__);
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
foundation.app.Dataflow.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8797__auto__,k__8798__auto__,G__31076){var self__ = this;
var this__8797__auto____$1 = this;var pred__31079 = cljs.core.keyword_identical_QMARK_;var expr__31080 = k__8798__auto__;if(cljs.core.truth_(pred__31079.call(null,new cljs.core.Keyword(null,"state","state",1123661827),expr__31080)))
{return (new foundation.app.Dataflow(G__31076,self__.input,self__.output,self__.renderer,self__.render_queue,self__.router,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__31079.call(null,new cljs.core.Keyword(null,"input","input",1114262332),expr__31080)))
{return (new foundation.app.Dataflow(self__.state,G__31076,self__.output,self__.renderer,self__.render_queue,self__.router,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__31079.call(null,new cljs.core.Keyword(null,"output","output",4303359091),expr__31080)))
{return (new foundation.app.Dataflow(self__.state,self__.input,G__31076,self__.renderer,self__.render_queue,self__.router,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__31079.call(null,new cljs.core.Keyword(null,"renderer","renderer",519058485),expr__31080)))
{return (new foundation.app.Dataflow(self__.state,self__.input,self__.output,G__31076,self__.render_queue,self__.router,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__31079.call(null,new cljs.core.Keyword(null,"render-queue","render-queue",665147788),expr__31080)))
{return (new foundation.app.Dataflow(self__.state,self__.input,self__.output,self__.renderer,G__31076,self__.router,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__31079.call(null,new cljs.core.Keyword(null,"router","router",4383738555),expr__31080)))
{return (new foundation.app.Dataflow(self__.state,self__.input,self__.output,self__.renderer,self__.render_queue,G__31076,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.Dataflow(self__.state,self__.input,self__.output,self__.renderer,self__.render_queue,self__.router,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8798__auto__,G__31076),null));
}
}
}
}
}
}
});
foundation.app.Dataflow.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8804__auto__,writer__8805__auto__,opts__8806__auto__){var self__ = this;
var this__8804__auto____$1 = this;var pr_pair__8807__auto__ = (function (keyval__8808__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8805__auto__,cljs.core.pr_writer,""," ","",opts__8806__auto__,keyval__8808__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__8805__auto__,pr_pair__8807__auto__,"#foundation.app.Dataflow{",", ","}",opts__8806__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",1123661827),self__.state],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input","input",1114262332),self__.input],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output","output",4303359091),self__.output],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"renderer","renderer",519058485),self__.renderer],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-queue","render-queue",665147788),self__.render_queue],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"router","router",4383738555),self__.router],null))], null),self__.__extmap));
});
foundation.app.Dataflow.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8795__auto__,entry__8796__auto__){var self__ = this;
var this__8795__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8796__auto__))
{return cljs.core._assoc.call(null,this__8795__auto____$1,cljs.core._nth.call(null,entry__8796__auto__,0),cljs.core._nth.call(null,entry__8796__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8795__auto____$1,entry__8796__auto__);
}
});
foundation.app.Dataflow.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8802__auto__){var self__ = this;
var this__8802__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",1123661827),self__.state],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input","input",1114262332),self__.input],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output","output",4303359091),self__.output],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"renderer","renderer",519058485),self__.renderer],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-queue","render-queue",665147788),self__.render_queue],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"router","router",4383738555),self__.router],null))], null),self__.__extmap));
});
foundation.app.Dataflow.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8794__auto__){var self__ = this;
var this__8794__auto____$1 = this;return (6 + cljs.core.count.call(null,self__.__extmap));
});
foundation.app.Dataflow.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8786__auto__,other__8787__auto__){var self__ = this;
var this__8786__auto____$1 = this;if(cljs.core.truth_((function (){var and__8211__auto__ = other__8787__auto__;if(cljs.core.truth_(and__8211__auto__))
{return ((this__8786__auto____$1.constructor === other__8787__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__8786__auto____$1,other__8787__auto__));
} else
{return and__8211__auto__;
}
})()))
{return true;
} else
{return false;
}
});
foundation.app.Dataflow.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8789__auto__,G__31076){var self__ = this;
var this__8789__auto____$1 = this;return (new foundation.app.Dataflow(self__.state,self__.input,self__.output,self__.renderer,self__.render_queue,self__.router,G__31076,self__.__extmap,self__.__hash));
});
foundation.app.Dataflow.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8788__auto__){var self__ = this;
var this__8788__auto____$1 = this;return self__.__meta;
});
foundation.app.Dataflow.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8799__auto__,k__8800__auto__){var self__ = this;
var this__8799__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"renderer","renderer",519058485),null,new cljs.core.Keyword(null,"state","state",1123661827),null,new cljs.core.Keyword(null,"output","output",4303359091),null,new cljs.core.Keyword(null,"input","input",1114262332),null,new cljs.core.Keyword(null,"router","router",4383738555),null,new cljs.core.Keyword(null,"render-queue","render-queue",665147788),null], null), null),k__8800__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8799__auto____$1),self__.__meta),k__8800__auto__);
} else
{return (new foundation.app.Dataflow(self__.state,self__.input,self__.output,self__.renderer,self__.render_queue,self__.router,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8800__auto__)),null));
}
});
foundation.app.Dataflow.cljs$lang$type = true;
foundation.app.Dataflow.cljs$lang$ctorPrSeq = (function (this__8824__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"foundation.app/Dataflow");
});
foundation.app.Dataflow.cljs$lang$ctorPrWriter = (function (this__8824__auto__,writer__8825__auto__){return cljs.core._write.call(null,writer__8825__auto__,"foundation.app/Dataflow");
});
foundation.app.__GT_Dataflow = (function __GT_Dataflow(state,input,output,renderer,render_queue,router){return (new foundation.app.Dataflow(state,input,output,renderer,render_queue,router));
});
foundation.app.map__GT_Dataflow = (function map__GT_Dataflow(G__31078){return (new foundation.app.Dataflow(new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(G__31078),new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(G__31078),new cljs.core.Keyword(null,"output","output",4303359091).cljs$core$IFn$_invoke$arity$1(G__31078),new cljs.core.Keyword(null,"renderer","renderer",519058485).cljs$core$IFn$_invoke$arity$1(G__31078),new cljs.core.Keyword(null,"render-queue","render-queue",665147788).cljs$core$IFn$_invoke$arity$1(G__31078),new cljs.core.Keyword(null,"router","router",4383738555).cljs$core$IFn$_invoke$arity$1(G__31078),null,cljs.core.dissoc.call(null,G__31078,new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.Keyword(null,"output","output",4303359091),new cljs.core.Keyword(null,"renderer","renderer",519058485),new cljs.core.Keyword(null,"render-queue","render-queue",665147788),new cljs.core.Keyword(null,"router","router",4383738555))));
});
/**
* @param {...*} var_args
*/
foundation.app.build = (function() { 
var build__delegate = function (p__31082){var map__31085 = p__31082;var map__31085__$1 = ((cljs.core.seq_QMARK_.call(null,map__31085))?cljs.core.apply.call(null,cljs.core.hash_map,map__31085):map__31085);var config = map__31085__$1;var routes = cljs.core.get.call(null,map__31085__$1,new cljs.core.Keyword(null,"routes","routes",4383738556));var root_id = cljs.core.get.call(null,map__31085__$1,new cljs.core.Keyword(null,"root-id","root-id",2393957720));var app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-model","data-model",1196427960),cljs.core.PersistentArrayMap.EMPTY], null));var input = foundation.app.input_queue.call(null,app_state);var output = foundation.app.output_queue.call(null,app_state);var renderer = foundation.app.render.renderer.call(null,root_id);var render_queue = foundation.app.render.push_render_queue.call(null,renderer,input);try{return foundation.app.data.component.start.call(null,foundation.app.map__GT_Dataflow.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"state","state",1123661827),app_state,new cljs.core.Keyword(null,"input","input",1114262332),input,new cljs.core.Keyword(null,"output","output",4303359091),output,new cljs.core.Keyword(null,"renderer","renderer",519058485),foundation.app.data.component.using.call(null,renderer,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.Keyword(null,"app-state","app-state",1424976215),new cljs.core.Keyword(null,"state","state",1123661827)], null)),new cljs.core.Keyword(null,"render-queue","render-queue",665147788),render_queue,new cljs.core.Keyword(null,"router","router",4383738555),foundation.app.data.component.using.call(null,foundation.app.router.router.call(null,routes),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.Keyword(null,"app-state","app-state",1424976215),new cljs.core.Keyword(null,"state","state",1123661827)], null))], null)));
}catch (e31086){if((e31086 instanceof Error))
{var e = e31086;return cljs.core.println.call(null,e);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31086;
} else
{return null;
}
}
}};
var build = function (var_args){
var p__31082 = null;if (arguments.length > 0) {
  p__31082 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return build__delegate.call(this,p__31082);};
build.cljs$lang$maxFixedArity = 0;
build.cljs$lang$applyTo = (function (arglist__31087){
var p__31082 = cljs.core.seq(arglist__31087);
return build__delegate(p__31082);
});
build.cljs$core$IFn$_invoke$arity$variadic = build__delegate;
return build;
})()
;

//# sourceMappingURL=app.js.map