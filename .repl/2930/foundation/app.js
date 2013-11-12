// Compiled by ClojureScript 0.0-2030
goog.provide('foundation.app');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('foundation.app.tree');
goog.require('foundation.app.log');
goog.require('foundation.app.dataflow');
goog.require('clojure.set');
goog.require('foundation.app.log');
goog.require('foundation.app.dataflow');
goog.require('clojure.set');
goog.require('foundation.app.messages');
goog.require('foundation.app.messages');
goog.require('cljs.core.async');
goog.require('foundation.app.tree');
foundation.app.IService = {};
foundation.app.start = (function start(_){if((function (){var and__7430__auto__ = _;if(and__7430__auto__)
{return _.foundation$app$IService$start$arity$1;
} else
{return and__7430__auto__;
}
})())
{return _.foundation$app$IService$start$arity$1(_);
} else
{var x__8035__auto__ = (((_ == null))?null:_);return (function (){var or__7439__auto__ = (foundation.app.start[goog.typeOf(x__8035__auto__)]);if(or__7439__auto__)
{return or__7439__auto__;
} else
{var or__7439__auto____$1 = (foundation.app.start["_"]);if(or__7439__auto____$1)
{return or__7439__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IService.start",_);
}
}
})().call(null,_);
}
});
foundation.app.stop = (function stop(_){if((function (){var and__7430__auto__ = _;if(and__7430__auto__)
{return _.foundation$app$IService$stop$arity$1;
} else
{return and__7430__auto__;
}
})())
{return _.foundation$app$IService$stop$arity$1(_);
} else
{var x__8035__auto__ = (((_ == null))?null:_);return (function (){var or__7439__auto__ = (foundation.app.stop[goog.typeOf(x__8035__auto__)]);if(or__7439__auto__)
{return or__7439__auto__;
} else
{var or__7439__auto____$1 = (foundation.app.stop["_"]);if(or__7439__auto____$1)
{return or__7439__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IService.stop",_);
}
}
})().call(null,_);
}
});
foundation.app.filter_changes = (function filter_changes(p__53586,changes){var map__53590 = p__53586;var map__53590__$1 = ((cljs.core.seq_QMARK_.call(null,map__53590))?cljs.core.apply.call(null,cljs.core.hash_map,map__53590):map__53590);var processed_inputs = cljs.core.get.call(null,map__53590__$1,new cljs.core.Keyword(null,"processed-inputs","processed-inputs",3715694778));var mode = cljs.core.get.call(null,map__53590__$1,new cljs.core.Keyword(null,"mode","mode",1017261333));if(cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"always","always",3894314369)))
{return changes;
} else
{return cljs.core.remove.call(null,(function (p__53591){var vec__53592 = p__53591;var k = cljs.core.nth.call(null,vec__53592,0,null);var v = cljs.core.nth.call(null,vec__53592,1,null);return cljs.core.some.call(null,cljs.core.partial.call(null,foundation.app.dataflow.matching_path_QMARK_,k),processed_inputs);
}),changes);
}
});
var prefixed = (function prefixed(k,p){return cljs.core.vec.call(null,cljs.core.concat.call(null,(((p instanceof cljs.core.Keyword))?cljs.core.PersistentVector.fromArray([p], true):p),k));
});
/**
* Return an emitter function which will emit deltas under the
* provided path prefix.
*/
foundation.app.default_emitter = (function default_emitter(prefix){return (function (inputs){return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var added = foundation.app.filter_changes.call(null,inputs,foundation.app.dataflow.added_inputs.call(null,inputs));return cljs.core.mapcat.call(null,(function (p__53599){var vec__53600 = p__53599;var k = cljs.core.nth.call(null,vec__53600,0,null);var v = cljs.core.nth.call(null,vec__53600,1,null);var k__$1 = prefixed.call(null,k,prefix);return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"node-create","node-create",4378585753),k__$1,new cljs.core.Keyword(null,"map","map",1014012110)], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"value","value",1125876963),k__$1,v], true)], true);
}),added);
})(),(function (){var updates = foundation.app.filter_changes.call(null,inputs,foundation.app.dataflow.updated_inputs.call(null,inputs));return cljs.core.mapv.call(null,(function (p__53601){var vec__53602 = p__53601;var k = cljs.core.nth.call(null,vec__53602,0,null);var v = cljs.core.nth.call(null,vec__53602,1,null);return cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"value","value",1125876963),prefixed.call(null,k,prefix),v], true);
}),updates);
})(),(function (){var removed = foundation.app.filter_changes.call(null,inputs,foundation.app.dataflow.removed_inputs.call(null,inputs));return cljs.core.mapcat.call(null,(function (p__53603){var vec__53604 = p__53603;var k = cljs.core.nth.call(null,vec__53604,0,null);var v = cljs.core.nth.call(null,vec__53604,1,null);var k__$1 = prefixed.call(null,k,prefix);if(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("io.pedestal.app.dataflow","removed","io.pedestal.app.dataflow/removed",1294526979)))
{return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"value","value",1125876963),k__$1,null], true),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),k__$1], true)], true);
} else
{return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"value","value",1125876963),k__$1,v], true)], true);
}
}),removed);
})()));
});
});
foundation.app.process_app_model_message = (function (){var method_table__8238__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8239__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8240__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8241__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8242__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("process-app-model-message",(function (state,flow,message){return foundation.app.messages.type.call(null,message);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8242__auto__,method_table__8238__auto__,prefer_table__8239__auto__,method_cache__8240__auto__,cached_hierarchy__8241__auto__));
})();
cljs.core._add_method.call(null,foundation.app.process_app_model_message,new cljs.core.Keyword(null,"default","default",2558708147),(function (state,flow,message){return state;
}));
foundation.app.refresh_emitters = (function refresh_emitters(state,flow){return cljs.core.reduce.call(null,(function (deltas,p__53607){var map__53608 = p__53607;var map__53608__$1 = ((cljs.core.seq_QMARK_.call(null,map__53608))?cljs.core.apply.call(null,cljs.core.hash_map,map__53608):map__53608);var in$ = cljs.core.get.call(null,map__53608__$1,new cljs.core.Keyword(null,"in","in",1013907607));var init_emitter = cljs.core.get.call(null,map__53608__$1,new cljs.core.Keyword(null,"init","init",1017141378));var emitter = cljs.core.get.call(null,map__53608__$1,new cljs.core.Keyword(null,"fn","fn",1013907514));var init_emitter__$1 = (function (){var or__7439__auto__ = init_emitter;if(cljs.core.truth_(or__7439__auto__))
{return or__7439__auto__;
} else
{return emitter;
}
})();var dm = new cljs.core.Keyword(null,"data-model","data-model",1196427960).cljs$core$IFn$_invoke$arity$1(state);var inputs = cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"new-model","new-model",3618698286),dm,new cljs.core.Keyword(null,"old-model","old-model",1443313525),dm,new cljs.core.Keyword(null,"input-paths","input-paths",3910795421),in$,new cljs.core.Keyword(null,"added","added",1106564210),in$,new cljs.core.Keyword(null,"updated","updated",779473965),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"removed","removed",2105740242),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"message","message",1968829305),new cljs.core.Keyword("foundation.app","input","foundation.app/input",3497291955).cljs$core$IFn$_invoke$arity$1(state)], true);if(cljs.core.truth_(init_emitter__$1))
{return cljs.core.into.call(null,deltas,init_emitter__$1.call(null,inputs));
} else
{return deltas;
}
}),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"emit","emit",1017021253).cljs$core$IFn$_invoke$arity$1(flow));
});
cljs.core._add_method.call(null,foundation.app.process_app_model_message,new cljs.core.Keyword(null,"navigate","navigate",3116398819),(function (state,flow,message){var deltas = foundation.app.refresh_emitters.call(null,state,flow);var paths = cljs.core.get_in.call(null,state,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword("foundation.app","named-paths","foundation.app/named-paths",2065402371),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(message)], true));var old_paths = new cljs.core.Keyword("foundation.app","subscriptions","foundation.app/subscriptions",1089257319).cljs$core$IFn$_invoke$arity$1(state);var destroy_paths = cljs.core.remove.call(null,cljs.core.set.call(null,paths),old_paths);return cljs.core.assoc.call(null,state,new cljs.core.Keyword("foundation.app","subscriptions","foundation.app/subscriptions",1089257319),paths,new cljs.core.Keyword(null,"emit","emit",1017021253),cljs.core.into.call(null,cljs.core.mapv.call(null,(function (p1__53609_SHARP_){return cljs.core.PersistentVector.fromArray.call(null,[new cljs.core.Keyword(null,"navigate-node-destroy","navigate-node-destroy",3976380797),p1__53609_SHARP_],true);
}),destroy_paths),deltas));
}));
cljs.core._add_method.call(null,foundation.app.process_app_model_message,new cljs.core.Keyword(null,"set-focus","set-focus",4797351711),(function (state,flow,message){return foundation.app.process_app_model_message.call(null,state,flow,cljs.core.assoc.call(null,message,foundation.app.messages.type,new cljs.core.Keyword(null,"navigate","navigate",3116398819)));
}));
cljs.core._add_method.call(null,foundation.app.process_app_model_message,new cljs.core.Keyword(null,"subscribe","subscribe",1528746172),(function (state,flow,message){var deltas = foundation.app.refresh_emitters.call(null,state,flow);return cljs.core.assoc.call(null,cljs.core.update_in.call(null,state,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword("foundation.app","subscriptions","foundation.app/subscriptions",1089257319)], true),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"paths","paths",1120343136).cljs$core$IFn$_invoke$arity$1(message)),new cljs.core.Keyword(null,"emit","emit",1017021253),deltas);
}));
cljs.core._add_method.call(null,foundation.app.process_app_model_message,new cljs.core.Keyword(null,"unsubscribe","unsubscribe",1597185603),(function (state,flow,message){var paths = cljs.core.set.call(null,new cljs.core.Keyword(null,"paths","paths",1120343136).cljs$core$IFn$_invoke$arity$1(message));return cljs.core.assoc.call(null,cljs.core.update_in.call(null,state,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword("foundation.app","subscriptions","foundation.app/subscriptions",1089257319)], true),(function (s){return cljs.core.remove.call(null,(function (p1__53610_SHARP_){return cljs.core.contains_QMARK_.call(null,paths,p1__53610_SHARP_);
}),s);
})),new cljs.core.Keyword(null,"emit","emit",1017021253),cljs.core.mapv.call(null,(function (p1__53611_SHARP_){return cljs.core.PersistentVector.fromArray.call(null,[new cljs.core.Keyword(null,"navigate-node-destroy","navigate-node-destroy",3976380797),p1__53611_SHARP_],true);
}),paths));
}));
cljs.core._add_method.call(null,foundation.app.process_app_model_message,new cljs.core.Keyword(null,"add-named-paths","add-named-paths",2898366880),(function (state,flow,message){var map__53612 = message;var map__53612__$1 = ((cljs.core.seq_QMARK_.call(null,map__53612))?cljs.core.apply.call(null,cljs.core.hash_map,map__53612):map__53612);var name = cljs.core.get.call(null,map__53612__$1,new cljs.core.Keyword(null,"name","name",1017277949));var paths = cljs.core.get.call(null,map__53612__$1,new cljs.core.Keyword(null,"paths","paths",1120343136));return cljs.core.assoc_in.call(null,state,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword("foundation.app","named-paths","foundation.app/named-paths",2065402371),name], true),paths);
}));
cljs.core._add_method.call(null,foundation.app.process_app_model_message,new cljs.core.Keyword(null,"remove-named-paths","remove-named-paths",3455276291),(function (state,flow,message){var map__53613 = message;var map__53613__$1 = ((cljs.core.seq_QMARK_.call(null,map__53613))?cljs.core.apply.call(null,cljs.core.hash_map,map__53613):map__53613);var name = cljs.core.get.call(null,map__53613__$1,new cljs.core.Keyword(null,"name","name",1017277949));return cljs.core.update_in.call(null,state,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword("foundation.app","named-paths","foundation.app/named-paths",2065402371)], true),cljs.core.dissoc,name);
}));
foundation.app.path_starts_with_QMARK_ = (function path_starts_with_QMARK_(path,prefix){return cljs.core._EQ_.call(null,cljs.core.take.call(null,cljs.core.count.call(null,prefix),path),prefix);
});
foundation.app.special_ops = cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"navigate-node-destroy","navigate-node-destroy",3976380797),new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529)], true);
foundation.app.filter_deltas = (function filter_deltas(state,deltas){var subscriptions = new cljs.core.Keyword("foundation.app","subscriptions","foundation.app/subscriptions",1089257319).cljs$core$IFn$_invoke$arity$1(state);return cljs.core.mapv.call(null,(function (p__53618){var vec__53619 = p__53618;var op = cljs.core.nth.call(null,vec__53619,0,null);var xs = cljs.core.nthnext.call(null,vec__53619,1);var delta = vec__53619;if(cljs.core.truth_(foundation.app.special_ops.call(null,op)))
{return cljs.core.apply.call(null,cljs.core.vector,foundation.app.special_ops.call(null,op),xs);
} else
{return delta;
}
}),cljs.core.filter.call(null,(function (p__53620){var vec__53621 = p__53620;var op = cljs.core.nth.call(null,vec__53621,0,null);var path = cljs.core.nth.call(null,vec__53621,1,null);var or__7439__auto__ = foundation.app.special_ops.call(null,op);if(cljs.core.truth_(or__7439__auto__))
{return or__7439__auto__;
} else
{return cljs.core.some.call(null,(function (s){return foundation.app.path_starts_with_QMARK_.call(null,path,s);
}),subscriptions);
}
}),cljs.core.mapcat.call(null,foundation.app.tree.expand_map,deltas)));
});
foundation.app.run_dataflow = (function run_dataflow(state,flow,message){return foundation.app.dataflow.run.call(null,state,flow,message);
});
/**
* Using the given flow, process the given message producing a new
* state.
*/
foundation.app.process_message = (function process_message(state,flow,message){var old_state = state;var new_state = ((cljs.core._EQ_.call(null,foundation.app.messages.topic.call(null,message),foundation.app.messages.app_model))?foundation.app.process_app_model_message.call(null,state,flow,message):((cljs.core._EQ_.call(null,foundation.app.messages.topic.call(null,message),foundation.app.messages.output))?cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"effect","effect",4002786563),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"payload","payload",4522169600).cljs$core$IFn$_invoke$arity$1(message)], true)):((new cljs.core.Keyword(null,"else","else",1017020587))?foundation.app.run_dataflow.call(null,state,flow,message):null)));var new_deltas = foundation.app.filter_deltas.call(null,new_state,new cljs.core.Keyword(null,"emit","emit",1017021253).cljs$core$IFn$_invoke$arity$1(new_state));return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,new_state,new cljs.core.Keyword("foundation.app","emitter-deltas","foundation.app/emitter-deltas",2150451043),new_deltas),new cljs.core.Keyword(null,"emit","emit",1017021253));
});
foundation.app.transact_one = (function transact_one(state,flow,message){return foundation.app.process_message.call(null,cljs.core.dissoc.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword("foundation.app","input","foundation.app/input",3497291955),message),new cljs.core.Keyword(null,"effect","effect",4002786563),new cljs.core.Keyword(null,"continue-inputs","continue-inputs",2996869441)),flow,message);
});
foundation.app.pre_process = (function pre_process(flow,message){var map__53623 = new cljs.core.Keyword(null,"input-adapter","input-adapter",1428449214).cljs$core$IFn$_invoke$arity$1(flow).call(null,message);var map__53623__$1 = ((cljs.core.seq_QMARK_.call(null,map__53623))?cljs.core.apply.call(null,cljs.core.hash_map,map__53623):map__53623);var out_path = cljs.core.get.call(null,map__53623__$1,new cljs.core.Keyword(null,"out","out",1014014656));var key = cljs.core.get.call(null,map__53623__$1,new cljs.core.Keyword(null,"key","key",1014010321));var pre_fn = foundation.app.dataflow.find_message_transformer.call(null,new cljs.core.Keyword(null,"pre","pre",1014015509).cljs$core$IFn$_invoke$arity$1(flow),out_path,key);if(cljs.core.truth_(pre_fn))
{return pre_fn.call(null,message);
} else
{return cljs.core.PersistentVector.fromArray([message], true);
}
});
foundation.app.receive_input_message = (function receive_input_message(state,flow,input_queue){var c__11508__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11509__auto__ = (function (){var switch__11438__auto__ = (function (state_53778){var state_val_53779 = (state_53778[1]);if((state_val_53779 === 1))
{var state_53778__$1 = state_53778;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53778__$1,2,input_queue);
} else
{if((state_val_53779 === 2))
{var inst_53722 = (state_53778[2]);var inst_53723 = inst_53722;var state_53778__$1 = (function (){var statearr_53780 = state_53778;(statearr_53780[7] = inst_53723);
return statearr_53780;
})();var statearr_53781_53818 = state_53778__$1;(statearr_53781_53818[2] = null);
(statearr_53781_53818[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53779 === 3))
{var inst_53725 = new cljs.core.Keyword(null,"pre","pre",1014015509).cljs$core$IFn$_invoke$arity$1(flow);var state_53778__$1 = state_53778;if(cljs.core.truth_(inst_53725))
{var statearr_53782_53819 = state_53778__$1;(statearr_53782_53819[1] = 5);
} else
{var statearr_53783_53820 = state_53778__$1;(statearr_53783_53820[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53779 === 4))
{var inst_53776 = (state_53778[2]);var state_53778__$1 = state_53778;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53778__$1,inst_53776);
} else
{if((state_val_53779 === 5))
{var inst_53723 = (state_53778[7]);var inst_53731 = foundation.app.pre_process.call(null,flow,inst_53723);var inst_53732 = cljs.core.seq.call(null,inst_53731);var inst_53733 = inst_53732;var inst_53734 = null;var inst_53735 = 0;var inst_53736 = 0;var state_53778__$1 = (function (){var statearr_53784 = state_53778;(statearr_53784[8] = inst_53734);
(statearr_53784[9] = inst_53733);
(statearr_53784[10] = inst_53736);
(statearr_53784[11] = inst_53735);
return statearr_53784;
})();var statearr_53785_53821 = state_53778__$1;(statearr_53785_53821[2] = null);
(statearr_53785_53821[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53779 === 6))
{var inst_53723 = (state_53778[7]);var inst_53769 = cljs.core.swap_BANG_.call(null,state,foundation.app.transact_one,flow,inst_53723);var state_53778__$1 = state_53778;var statearr_53786_53822 = state_53778__$1;(statearr_53786_53822[2] = inst_53769);
(statearr_53786_53822[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53779 === 7))
{var inst_53771 = (state_53778[2]);var state_53778__$1 = (function (){var statearr_53787 = state_53778;(statearr_53787[12] = inst_53771);
return statearr_53787;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53778__$1,19,input_queue);
} else
{if((state_val_53779 === 8))
{var inst_53736 = (state_53778[10]);var inst_53735 = (state_53778[11]);var inst_53738 = (inst_53736 < inst_53735);var inst_53739 = inst_53738;var state_53778__$1 = state_53778;if(cljs.core.truth_(inst_53739))
{var statearr_53791_53823 = state_53778__$1;(statearr_53791_53823[1] = 10);
} else
{var statearr_53792_53824 = state_53778__$1;(statearr_53792_53824[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53779 === 9))
{var inst_53767 = (state_53778[2]);var state_53778__$1 = state_53778;var statearr_53793_53825 = state_53778__$1;(statearr_53793_53825[2] = inst_53767);
(statearr_53793_53825[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53779 === 10))
{var inst_53734 = (state_53778[8]);var inst_53733 = (state_53778[9]);var inst_53736 = (state_53778[10]);var inst_53735 = (state_53778[11]);var inst_53741 = cljs.core._nth.call(null,inst_53734,inst_53736);var inst_53742 = cljs.core.swap_BANG_.call(null,state,foundation.app.transact_one,flow,inst_53741);var inst_53743 = (inst_53736 + 1);var tmp53788 = inst_53734;var tmp53789 = inst_53733;var tmp53790 = inst_53735;var inst_53733__$1 = tmp53789;var inst_53734__$1 = tmp53788;var inst_53735__$1 = tmp53790;var inst_53736__$1 = inst_53743;var state_53778__$1 = (function (){var statearr_53794 = state_53778;(statearr_53794[8] = inst_53734__$1);
(statearr_53794[9] = inst_53733__$1);
(statearr_53794[10] = inst_53736__$1);
(statearr_53794[11] = inst_53735__$1);
(statearr_53794[13] = inst_53742);
return statearr_53794;
})();var statearr_53795_53826 = state_53778__$1;(statearr_53795_53826[2] = null);
(statearr_53795_53826[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53779 === 11))
{var inst_53733 = (state_53778[9]);var inst_53746 = (state_53778[14]);var inst_53746__$1 = cljs.core.seq.call(null,inst_53733);var state_53778__$1 = (function (){var statearr_53796 = state_53778;(statearr_53796[14] = inst_53746__$1);
return statearr_53796;
})();if(inst_53746__$1)
{var statearr_53797_53827 = state_53778__$1;(statearr_53797_53827[1] = 13);
} else
{var statearr_53798_53828 = state_53778__$1;(statearr_53798_53828[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53779 === 12))
{var inst_53765 = (state_53778[2]);var state_53778__$1 = state_53778;var statearr_53799_53829 = state_53778__$1;(statearr_53799_53829[2] = inst_53765);
(statearr_53799_53829[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53779 === 13))
{var inst_53746 = (state_53778[14]);var inst_53748 = cljs.core.chunked_seq_QMARK_.call(null,inst_53746);var state_53778__$1 = state_53778;if(inst_53748)
{var statearr_53800_53830 = state_53778__$1;(statearr_53800_53830[1] = 16);
} else
{var statearr_53801_53831 = state_53778__$1;(statearr_53801_53831[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53779 === 14))
{var state_53778__$1 = state_53778;var statearr_53802_53832 = state_53778__$1;(statearr_53802_53832[2] = null);
(statearr_53802_53832[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53779 === 15))
{var inst_53763 = (state_53778[2]);var state_53778__$1 = state_53778;var statearr_53803_53833 = state_53778__$1;(statearr_53803_53833[2] = inst_53763);
(statearr_53803_53833[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53779 === 16))
{var inst_53746 = (state_53778[14]);var inst_53750 = cljs.core.chunk_first.call(null,inst_53746);var inst_53751 = cljs.core.chunk_rest.call(null,inst_53746);var inst_53752 = cljs.core.count.call(null,inst_53750);var inst_53733 = inst_53751;var inst_53734 = inst_53750;var inst_53735 = inst_53752;var inst_53736 = 0;var state_53778__$1 = (function (){var statearr_53804 = state_53778;(statearr_53804[8] = inst_53734);
(statearr_53804[9] = inst_53733);
(statearr_53804[10] = inst_53736);
(statearr_53804[11] = inst_53735);
return statearr_53804;
})();var statearr_53805_53834 = state_53778__$1;(statearr_53805_53834[2] = null);
(statearr_53805_53834[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53779 === 17))
{var inst_53746 = (state_53778[14]);var inst_53755 = cljs.core.first.call(null,inst_53746);var inst_53756 = cljs.core.swap_BANG_.call(null,state,foundation.app.transact_one,flow,inst_53755);var inst_53757 = cljs.core.next.call(null,inst_53746);var inst_53733 = inst_53757;var inst_53734 = null;var inst_53735 = 0;var inst_53736 = 0;var state_53778__$1 = (function (){var statearr_53806 = state_53778;(statearr_53806[8] = inst_53734);
(statearr_53806[9] = inst_53733);
(statearr_53806[10] = inst_53736);
(statearr_53806[11] = inst_53735);
(statearr_53806[15] = inst_53756);
return statearr_53806;
})();var statearr_53807_53835 = state_53778__$1;(statearr_53807_53835[2] = null);
(statearr_53807_53835[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53779 === 18))
{var inst_53760 = (state_53778[2]);var state_53778__$1 = state_53778;var statearr_53808_53836 = state_53778__$1;(statearr_53808_53836[2] = inst_53760);
(statearr_53808_53836[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53779 === 19))
{var inst_53773 = (state_53778[2]);var inst_53723 = inst_53773;var state_53778__$1 = (function (){var statearr_53809 = state_53778;(statearr_53809[7] = inst_53723);
return statearr_53809;
})();var statearr_53810_53837 = state_53778__$1;(statearr_53810_53837[2] = null);
(statearr_53810_53837[1] = 3);
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
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__11438__auto__){
return (function() {
var state_machine__11439__auto__ = null;
var state_machine__11439__auto____0 = (function (){var statearr_53814 = (new Array(16));(statearr_53814[0] = state_machine__11439__auto__);
(statearr_53814[1] = 1);
return statearr_53814;
});
var state_machine__11439__auto____1 = (function (state_53778){while(true){
var ret_value__11440__auto__ = (function (){try{while(true){
var result__11441__auto__ = switch__11438__auto__.call(null,state_53778);if(cljs.core.keyword_identical_QMARK_.call(null,result__11441__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11441__auto__;
}
break;
}
}catch (e53815){if((e53815 instanceof Object))
{var ex__11442__auto__ = e53815;var statearr_53816_53838 = state_53778;(statearr_53816_53838[5] = ex__11442__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53778);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e53815;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11440__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__53839 = state_53778;
state_53778 = G__53839;
continue;
}
} else
{return ret_value__11440__auto__;
}
break;
}
});
state_machine__11439__auto__ = function(state_53778){
switch(arguments.length){
case 0:
return state_machine__11439__auto____0.call(this);
case 1:
return state_machine__11439__auto____1.call(this,state_53778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11439__auto____0;
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11439__auto____1;
return state_machine__11439__auto__;
})()
;})(switch__11438__auto__))
})();var state__11510__auto__ = (function (){var statearr_53817 = f__11509__auto__.call(null);(statearr_53817[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11508__auto__);
return statearr_53817;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11510__auto__);
}));
return c__11508__auto__;
});
foundation.app.post_process_effects = (function post_process_effects(flow,message){var post_fn = cljs.core.some.call(null,(function (p__53842){var vec__53843 = p__53842;var pred = cljs.core.nth.call(null,vec__53843,0,null);var f = cljs.core.nth.call(null,vec__53843,1,null);if(cljs.core.truth_(pred.call(null,message)))
{return f;
} else
{return null;
}
}),new cljs.core.Keyword(null,"effect","effect",4002786563).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"post","post",1017351186).cljs$core$IFn$_invoke$arity$1(flow)));if(cljs.core.truth_(post_fn))
{return post_fn.call(null,message);
} else
{return cljs.core.PersistentVector.fromArray([message], true);
}
});
foundation.app.continue_inputs = (function continue_inputs(app,flow,input_queue){return cljs.core.add_watch.call(null,app,new cljs.core.Keyword(null,"continue-inputs-watcher","continue-inputs-watcher",1983059760),(function (_,___$1,___$2,new_state){var seq__53848 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"continue-inputs","continue-inputs",2996869441).cljs$core$IFn$_invoke$arity$1(new_state));var chunk__53849 = null;var count__53850 = 0;var i__53851 = 0;while(true){
if((i__53851 < count__53850))
{var message = cljs.core._nth.call(null,chunk__53849,i__53851);cljs.core.async.put_BANG_.call(null,input_queue,message);
{
var G__53852 = seq__53848;
var G__53853 = chunk__53849;
var G__53854 = count__53850;
var G__53855 = (i__53851 + 1);
seq__53848 = G__53852;
chunk__53849 = G__53853;
count__53850 = G__53854;
i__53851 = G__53855;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__53848);if(temp__4092__auto__)
{var seq__53848__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__53848__$1))
{var c__8156__auto__ = cljs.core.chunk_first.call(null,seq__53848__$1);{
var G__53856 = cljs.core.chunk_rest.call(null,seq__53848__$1);
var G__53857 = c__8156__auto__;
var G__53858 = cljs.core.count.call(null,c__8156__auto__);
var G__53859 = 0;
seq__53848 = G__53856;
chunk__53849 = G__53857;
count__53850 = G__53858;
i__53851 = G__53859;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__53848__$1);cljs.core.async.put_BANG_.call(null,input_queue,message);
{
var G__53860 = cljs.core.next.call(null,seq__53848__$1);
var G__53861 = null;
var G__53862 = 0;
var G__53863 = 0;
seq__53848 = G__53860;
chunk__53849 = G__53861;
count__53850 = G__53862;
i__53851 = G__53863;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
});
foundation.app.send_effects = (function send_effects(app,flow,output_queue){return cljs.core.add_watch.call(null,app,new cljs.core.Keyword(null,"effects-watcher","effects-watcher",634455907),(function (_,___$1,___$2,new_state){var seq__53876 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effect","effect",4002786563).cljs$core$IFn$_invoke$arity$1(new_state));var chunk__53877 = null;var count__53878 = 0;var i__53879 = 0;while(true){
if((i__53879 < count__53878))
{var message = cljs.core._nth.call(null,chunk__53877,i__53879);if(cljs.core.truth_(new cljs.core.Keyword(null,"effect","effect",4002786563).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"post","post",1017351186).cljs$core$IFn$_invoke$arity$1(flow))))
{var seq__53880_53888 = cljs.core.seq.call(null,foundation.app.post_process_effects.call(null,flow,message));var chunk__53881_53889 = null;var count__53882_53890 = 0;var i__53883_53891 = 0;while(true){
if((i__53883_53891 < count__53882_53890))
{var message_53892__$1 = cljs.core._nth.call(null,chunk__53881_53889,i__53883_53891);cljs.core.async.put_BANG_.call(null,output_queue,message_53892__$1);
{
var G__53893 = seq__53880_53888;
var G__53894 = chunk__53881_53889;
var G__53895 = count__53882_53890;
var G__53896 = (i__53883_53891 + 1);
seq__53880_53888 = G__53893;
chunk__53881_53889 = G__53894;
count__53882_53890 = G__53895;
i__53883_53891 = G__53896;
continue;
}
} else
{var temp__4092__auto___53897 = cljs.core.seq.call(null,seq__53880_53888);if(temp__4092__auto___53897)
{var seq__53880_53898__$1 = temp__4092__auto___53897;if(cljs.core.chunked_seq_QMARK_.call(null,seq__53880_53898__$1))
{var c__8156__auto___53899 = cljs.core.chunk_first.call(null,seq__53880_53898__$1);{
var G__53900 = cljs.core.chunk_rest.call(null,seq__53880_53898__$1);
var G__53901 = c__8156__auto___53899;
var G__53902 = cljs.core.count.call(null,c__8156__auto___53899);
var G__53903 = 0;
seq__53880_53888 = G__53900;
chunk__53881_53889 = G__53901;
count__53882_53890 = G__53902;
i__53883_53891 = G__53903;
continue;
}
} else
{var message_53904__$1 = cljs.core.first.call(null,seq__53880_53898__$1);cljs.core.async.put_BANG_.call(null,output_queue,message_53904__$1);
{
var G__53905 = cljs.core.next.call(null,seq__53880_53898__$1);
var G__53906 = null;
var G__53907 = 0;
var G__53908 = 0;
seq__53880_53888 = G__53905;
chunk__53881_53889 = G__53906;
count__53882_53890 = G__53907;
i__53883_53891 = G__53908;
continue;
}
}
} else
{}
}
break;
}
} else
{cljs.core.async.put_BANG_.call(null,output_queue,message);
}
{
var G__53909 = seq__53876;
var G__53910 = chunk__53877;
var G__53911 = count__53878;
var G__53912 = (i__53879 + 1);
seq__53876 = G__53909;
chunk__53877 = G__53910;
count__53878 = G__53911;
i__53879 = G__53912;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__53876);if(temp__4092__auto__)
{var seq__53876__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__53876__$1))
{var c__8156__auto__ = cljs.core.chunk_first.call(null,seq__53876__$1);{
var G__53913 = cljs.core.chunk_rest.call(null,seq__53876__$1);
var G__53914 = c__8156__auto__;
var G__53915 = cljs.core.count.call(null,c__8156__auto__);
var G__53916 = 0;
seq__53876 = G__53913;
chunk__53877 = G__53914;
count__53878 = G__53915;
i__53879 = G__53916;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__53876__$1);if(cljs.core.truth_(new cljs.core.Keyword(null,"effect","effect",4002786563).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"post","post",1017351186).cljs$core$IFn$_invoke$arity$1(flow))))
{var seq__53884_53917 = cljs.core.seq.call(null,foundation.app.post_process_effects.call(null,flow,message));var chunk__53885_53918 = null;var count__53886_53919 = 0;var i__53887_53920 = 0;while(true){
if((i__53887_53920 < count__53886_53919))
{var message_53921__$1 = cljs.core._nth.call(null,chunk__53885_53918,i__53887_53920);cljs.core.async.put_BANG_.call(null,output_queue,message_53921__$1);
{
var G__53922 = seq__53884_53917;
var G__53923 = chunk__53885_53918;
var G__53924 = count__53886_53919;
var G__53925 = (i__53887_53920 + 1);
seq__53884_53917 = G__53922;
chunk__53885_53918 = G__53923;
count__53886_53919 = G__53924;
i__53887_53920 = G__53925;
continue;
}
} else
{var temp__4092__auto___53926__$1 = cljs.core.seq.call(null,seq__53884_53917);if(temp__4092__auto___53926__$1)
{var seq__53884_53927__$1 = temp__4092__auto___53926__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__53884_53927__$1))
{var c__8156__auto___53928 = cljs.core.chunk_first.call(null,seq__53884_53927__$1);{
var G__53929 = cljs.core.chunk_rest.call(null,seq__53884_53927__$1);
var G__53930 = c__8156__auto___53928;
var G__53931 = cljs.core.count.call(null,c__8156__auto___53928);
var G__53932 = 0;
seq__53884_53917 = G__53929;
chunk__53885_53918 = G__53930;
count__53886_53919 = G__53931;
i__53887_53920 = G__53932;
continue;
}
} else
{var message_53933__$1 = cljs.core.first.call(null,seq__53884_53927__$1);cljs.core.async.put_BANG_.call(null,output_queue,message_53933__$1);
{
var G__53934 = cljs.core.next.call(null,seq__53884_53927__$1);
var G__53935 = null;
var G__53936 = 0;
var G__53937 = 0;
seq__53884_53917 = G__53934;
chunk__53885_53918 = G__53935;
count__53886_53919 = G__53936;
i__53887_53920 = G__53937;
continue;
}
}
} else
{}
}
break;
}
} else
{cljs.core.async.put_BANG_.call(null,output_queue,message);
}
{
var G__53938 = cljs.core.next.call(null,seq__53876__$1);
var G__53939 = null;
var G__53940 = 0;
var G__53941 = 0;
seq__53876 = G__53938;
chunk__53877 = G__53939;
count__53878 = G__53940;
i__53879 = G__53941;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
});
foundation.app.post_process_deltas = (function post_process_deltas(flow,deltas){var post_processors = new cljs.core.Keyword(null,"app-model","app-model",1419288559).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"post","post",1017351186).cljs$core$IFn$_invoke$arity$1(flow));return cljs.core.reduce.call(null,(function (acc,p__53944){var vec__53945 = p__53944;var op = cljs.core.nth.call(null,vec__53945,0,null);var path = cljs.core.nth.call(null,vec__53945,1,null);var delta = vec__53945;var temp__4090__auto__ = foundation.app.dataflow.find_message_transformer.call(null,post_processors,path,op);if(cljs.core.truth_(temp__4090__auto__))
{var post_fn = temp__4090__auto__;return cljs.core.into.call(null,acc,post_fn.call(null,delta));
} else
{return cljs.core.conj.call(null,acc,delta);
}
}),cljs.core.PersistentVector.EMPTY,deltas);
});
foundation.app.send_app_model_deltas = (function send_app_model_deltas(app,flow,app_model_queue){return cljs.core.add_watch.call(null,app,new cljs.core.Keyword(null,"app-model-delta-watcher","app-model-delta-watcher",3254923977),(function (_,___$1,old_state,new_state){var deltas = new cljs.core.Keyword("foundation.app","emitter-deltas","foundation.app/emitter-deltas",2150451043).cljs$core$IFn$_invoke$arity$1(new_state);if(!((cljs.core.empty_QMARK_.call(null,deltas)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword("foundation.app","emitter-deltas","foundation.app/emitter-deltas",2150451043).cljs$core$IFn$_invoke$arity$1(old_state),deltas))))
{var deltas__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"app-model","app-model",1419288559).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"post","post",1017351186).cljs$core$IFn$_invoke$arity$1(flow)))?foundation.app.post_process_deltas.call(null,flow,deltas):deltas);return cljs.core.async.put_BANG_.call(null,app_model_queue,cljs.core.PersistentArrayMap.fromArray([foundation.app.messages.topic,foundation.app.messages.app_model,foundation.app.messages.type,new cljs.core.Keyword(null,"deltas","deltas",3973426989),new cljs.core.Keyword(null,"deltas","deltas",3973426989),deltas__$1], true));
} else
{return null;
}
}));
});
foundation.app.ensure_default_emitter = (function ensure_default_emitter(emit){if(cljs.core.empty_QMARK_.call(null,emit))
{return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([cljs.core.PersistentHashSet.fromArray([cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"*","*",1013904284)], true),null], true),foundation.app.default_emitter.call(null,cljs.core.PersistentVector.EMPTY)], true)], true);
} else
{return emit;
}
});
foundation.app.ensure_input_adapter = (function ensure_input_adapter(input_adapter){if(cljs.core.not.call(null,input_adapter))
{return (function (m){return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"key","key",1014010321),foundation.app.messages.type.call(null,m),new cljs.core.Keyword(null,"out","out",1014014656),foundation.app.messages.topic.call(null,m)], true);
});
} else
{return input_adapter;
}
});
foundation.app.rekey_transforms = (function rekey_transforms(transforms){return cljs.core.mapv.call(null,(function (p1__53946_SHARP_){if(cljs.core.map_QMARK_.call(null,p1__53946_SHARP_))
{return clojure.set.rename_keys.call(null,p1__53946_SHARP_,cljs.core.PersistentArrayMap.fromArray([foundation.app.messages.type,new cljs.core.Keyword(null,"key","key",1014010321),foundation.app.messages.topic,new cljs.core.Keyword(null,"out","out",1014014656)], true));
} else
{return p1__53946_SHARP_;
}
}),transforms);
});
foundation.app.standardize_pre_if_exists = (function standardize_pre_if_exists(description){if(cljs.core.truth_(new cljs.core.Keyword(null,"pre","pre",1014015509).cljs$core$IFn$_invoke$arity$1(description)))
{return cljs.core.update_in.call(null,description,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"pre","pre",1014015509)], true),foundation.app.dataflow.transform_maps);
} else
{return description;
}
});
foundation.app.standardize_post_app_model_if_exists = (function standardize_post_app_model_if_exists(description){if(cljs.core.truth_(new cljs.core.Keyword(null,"app-model","app-model",1419288559).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"post","post",1017351186).cljs$core$IFn$_invoke$arity$1(description))))
{return cljs.core.update_in.call(null,description,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"post","post",1017351186),new cljs.core.Keyword(null,"app-model","app-model",1419288559)], true),foundation.app.dataflow.transform_maps);
} else
{return description;
}
});
foundation.app.create_start_messages = (function create_start_messages(focus){return cljs.core.into.call(null,cljs.core.mapv.call(null,(function (p__53951){var vec__53952 = p__53951;var name = cljs.core.nth.call(null,vec__53952,0,null);var paths = cljs.core.nth.call(null,vec__53952,1,null);return cljs.core.PersistentArrayMap.fromArray([foundation.app.messages.topic,foundation.app.messages.app_model,foundation.app.messages.type,new cljs.core.Keyword(null,"add-named-paths","add-named-paths",2898366880),new cljs.core.Keyword(null,"paths","paths",1120343136),paths,new cljs.core.Keyword(null,"name","name",1017277949),name], true);
}),cljs.core.remove.call(null,(function (p__53953){var vec__53954 = p__53953;var k = cljs.core.nth.call(null,vec__53954,0,null);var v = cljs.core.nth.call(null,vec__53954,1,null);return cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"default","default",2558708147));
}),focus)),(function (){var temp__4092__auto__ = new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(focus);if(cljs.core.truth_(temp__4092__auto__))
{var n = temp__4092__auto__;return cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray([foundation.app.messages.topic,foundation.app.messages.app_model,foundation.app.messages.type,new cljs.core.Keyword(null,"navigate","navigate",3116398819),new cljs.core.Keyword(null,"name","name",1017277949),n], true)], true);
} else
{return null;
}
})());
});
foundation.app.begin = (function() {
var begin = null;
var begin__1 = (function (app){return begin.call(null,app,null);
});
var begin__2 = (function (app,start_messages){var map__53960 = app;var map__53960__$1 = ((cljs.core.seq_QMARK_.call(null,map__53960))?cljs.core.apply.call(null,cljs.core.hash_map,map__53960):map__53960);var default_emitter = cljs.core.get.call(null,map__53960__$1,new cljs.core.Keyword(null,"default-emitter","default-emitter",2434111316));var dataflow = cljs.core.get.call(null,map__53960__$1,new cljs.core.Keyword(null,"dataflow","dataflow",2803498826));var description = cljs.core.get.call(null,map__53960__$1,new cljs.core.Keyword(null,"description","description",3584325486));var start_messages__$1 = (cljs.core.truth_(start_messages)?start_messages:(cljs.core.truth_(new cljs.core.Keyword(null,"focus","focus",1111509066).cljs$core$IFn$_invoke$arity$1(description))?foundation.app.create_start_messages.call(null,new cljs.core.Keyword(null,"focus","focus",1111509066).cljs$core$IFn$_invoke$arity$1(description)):((new cljs.core.Keyword(null,"else","else",1017020587))?cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArray([foundation.app.messages.topic,foundation.app.messages.app_model,foundation.app.messages.type,new cljs.core.Keyword(null,"subscribe","subscribe",1528746172),new cljs.core.Keyword(null,"paths","paths",1120343136),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.EMPTY], true)], true)], true):null)));var init_messages = cljs.core.vec.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"init","init",1017141378),new cljs.core.Keyword(null,"transform","transform",2066570974).cljs$core$IFn$_invoke$arity$1(description)));var seq__53961 = cljs.core.seq.call(null,cljs.core.concat.call(null,start_messages__$1,init_messages));var chunk__53962 = null;var count__53963 = 0;var i__53964 = 0;while(true){
if((i__53964 < count__53963))
{var message = cljs.core._nth.call(null,chunk__53962,i__53964);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__53965 = seq__53961;
var G__53966 = chunk__53962;
var G__53967 = count__53963;
var G__53968 = (i__53964 + 1);
seq__53961 = G__53965;
chunk__53962 = G__53966;
count__53963 = G__53967;
i__53964 = G__53968;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__53961);if(temp__4092__auto__)
{var seq__53961__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__53961__$1))
{var c__8156__auto__ = cljs.core.chunk_first.call(null,seq__53961__$1);{
var G__53969 = cljs.core.chunk_rest.call(null,seq__53961__$1);
var G__53970 = c__8156__auto__;
var G__53971 = cljs.core.count.call(null,c__8156__auto__);
var G__53972 = 0;
seq__53961 = G__53969;
chunk__53962 = G__53970;
count__53963 = G__53971;
i__53964 = G__53972;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__53961__$1);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__53973 = cljs.core.next.call(null,seq__53961__$1);
var G__53974 = null;
var G__53975 = 0;
var G__53976 = 0;
seq__53961 = G__53973;
chunk__53962 = G__53974;
count__53963 = G__53975;
i__53964 = G__53976;
continue;
}
}
} else
{return null;
}
}
break;
}
});
begin = function(app,start_messages){
switch(arguments.length){
case 1:
return begin__1.call(this,app);
case 2:
return begin__2.call(this,app,start_messages);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
begin.cljs$core$IFn$_invoke$arity$1 = begin__1;
begin.cljs$core$IFn$_invoke$arity$2 = begin__2;
return begin;
})()
;
foundation.app.consume_output_queue = (function consume_output_queue(out_queue,in_queue,services_fn){var c__11508__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__11509__auto__ = (function (){var switch__11438__auto__ = (function (state_54013){var state_val_54014 = (state_54013[1]);if((state_val_54014 === 5))
{var inst_54008 = (state_54013[2]);var inst_54004 = inst_54008;var state_54013__$1 = (function (){var statearr_54015 = state_54013;(statearr_54015[7] = inst_54004);
return statearr_54015;
})();var statearr_54016_54027 = state_54013__$1;(statearr_54016_54027[2] = null);
(statearr_54016_54027[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54014 === 4))
{var inst_54011 = (state_54013[2]);var state_54013__$1 = state_54013;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54013__$1,inst_54011);
} else
{if((state_val_54014 === 3))
{var inst_54004 = (state_54013[7]);var inst_54006 = services_fn.call(null,inst_54004,in_queue);var state_54013__$1 = (function (){var statearr_54017 = state_54013;(statearr_54017[8] = inst_54006);
return statearr_54017;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54013__$1,5,out_queue);
} else
{if((state_val_54014 === 2))
{var inst_54003 = (state_54013[2]);var inst_54004 = inst_54003;var state_54013__$1 = (function (){var statearr_54018 = state_54013;(statearr_54018[7] = inst_54004);
return statearr_54018;
})();var statearr_54019_54028 = state_54013__$1;(statearr_54019_54028[2] = null);
(statearr_54019_54028[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_54014 === 1))
{var state_54013__$1 = state_54013;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54013__$1,2,out_queue);
} else
{return null;
}
}
}
}
}
});return ((function (switch__11438__auto__){
return (function() {
var state_machine__11439__auto__ = null;
var state_machine__11439__auto____0 = (function (){var statearr_54023 = (new Array(9));(statearr_54023[0] = state_machine__11439__auto__);
(statearr_54023[1] = 1);
return statearr_54023;
});
var state_machine__11439__auto____1 = (function (state_54013){while(true){
var ret_value__11440__auto__ = (function (){try{while(true){
var result__11441__auto__ = switch__11438__auto__.call(null,state_54013);if(cljs.core.keyword_identical_QMARK_.call(null,result__11441__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__11441__auto__;
}
break;
}
}catch (e54024){if((e54024 instanceof Object))
{var ex__11442__auto__ = e54024;var statearr_54025_54029 = state_54013;(statearr_54025_54029[5] = ex__11442__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54013);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e54024;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11440__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__54030 = state_54013;
state_54013 = G__54030;
continue;
}
} else
{return ret_value__11440__auto__;
}
break;
}
});
state_machine__11439__auto__ = function(state_54013){
switch(arguments.length){
case 0:
return state_machine__11439__auto____0.call(this);
case 1:
return state_machine__11439__auto____1.call(this,state_54013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11439__auto____0;
state_machine__11439__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11439__auto____1;
return state_machine__11439__auto__;
})()
;})(switch__11438__auto__))
})();var state__11510__auto__ = (function (){var statearr_54026 = f__11509__auto__.call(null);(statearr_54026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11508__auto__);
return statearr_54026;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11510__auto__);
}));
return c__11508__auto__;
});
foundation.app.consume_output = (function consume_output(app,services_fn){return foundation.app.consume_output_queue.call(null,new cljs.core.Keyword(null,"output","output",4303359091).cljs$core$IFn$_invoke$arity$1(app),new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),services_fn);
});
foundation.app.consume_effects = (function consume_effects(app,services_fn){return foundation.app.consume_output.call(null,app,services_fn);
});
foundation.app.run_BANG_ = (function run_BANG_(app,script){if((cljs.core.vector_QMARK_.call(null,script)) || (cljs.core.list_QMARK_.call(null,script)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("The passed script must be a vector or list"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",-1640527972,null),cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-1302740715,null),new cljs.core.Symbol(null,"script","script",1746750084,null)),cljs.core.list(new cljs.core.Symbol(null,"list?","list?",-1537549030,null),new cljs.core.Symbol(null,"script","script",1746750084,null)))))].join('')));
}
if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,script))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Each element of the passed script must be a map"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",1363110461,null),new cljs.core.Symbol(null,"map?","map?",-1637187556,null),new cljs.core.Symbol(null,"script","script",1746750084,null))))].join('')));
}
var seq__54035 = cljs.core.seq.call(null,script);var chunk__54036 = null;var count__54037 = 0;var i__54038 = 0;while(true){
if((i__54038 < count__54037))
{var message = cljs.core._nth.call(null,chunk__54036,i__54038);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__54039 = seq__54035;
var G__54040 = chunk__54036;
var G__54041 = count__54037;
var G__54042 = (i__54038 + 1);
seq__54035 = G__54039;
chunk__54036 = G__54040;
count__54037 = G__54041;
i__54038 = G__54042;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__54035);if(temp__4092__auto__)
{var seq__54035__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__54035__$1))
{var c__8156__auto__ = cljs.core.chunk_first.call(null,seq__54035__$1);{
var G__54043 = cljs.core.chunk_rest.call(null,seq__54035__$1);
var G__54044 = c__8156__auto__;
var G__54045 = cljs.core.count.call(null,c__8156__auto__);
var G__54046 = 0;
seq__54035 = G__54043;
chunk__54036 = G__54044;
count__54037 = G__54045;
i__54038 = G__54046;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__54035__$1);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),message);
{
var G__54047 = cljs.core.next.call(null,seq__54035__$1);
var G__54048 = null;
var G__54049 = 0;
var G__54050 = 0;
seq__54035 = G__54047;
chunk__54036 = G__54048;
count__54037 = G__54049;
i__54038 = G__54050;
continue;
}
}
} else
{return null;
}
}
break;
}
});
foundation.app.build = (function build(description){var app_atom = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"data-model","data-model",1196427960),cljs.core.PersistentArrayMap.EMPTY], true));var description__$1 = cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,foundation.app.standardize_post_app_model_if_exists.call(null,foundation.app.standardize_pre_if_exists.call(null,description)),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"emit","emit",1017021253)], true),foundation.app.ensure_default_emitter),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"input-adapter","input-adapter",1428449214)], true),foundation.app.ensure_input_adapter),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"transform","transform",2066570974)], true),foundation.app.rekey_transforms);var dataflow = foundation.app.dataflow.build.call(null,description__$1);var input_queue = cljs.core.async.chan.call(null);var output_queue = cljs.core.async.chan.call(null);var app_model_queue = cljs.core.async.chan.call(null);foundation.app.receive_input_message.call(null,app_atom,dataflow,input_queue);
foundation.app.send_effects.call(null,app_atom,dataflow,output_queue);
foundation.app.continue_inputs.call(null,app_atom,dataflow,input_queue);
foundation.app.send_app_model_deltas.call(null,app_atom,dataflow,app_model_queue);
return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"state","state",1123661827),app_atom,new cljs.core.Keyword(null,"description","description",3584325486),description__$1,new cljs.core.Keyword(null,"dataflow","dataflow",2803498826),dataflow,new cljs.core.Keyword(null,"input","input",1114262332),input_queue,new cljs.core.Keyword(null,"output","output",4303359091),output_queue,new cljs.core.Keyword(null,"app-model","app-model",1419288559),app_model_queue], true);
});
foundation.app.set_value_transform = (function set_value_transform(old_value,message){return new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(message);
});
foundation.app.forward_effect = (function forward_effect(inputs){return cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(inputs)], true);
});
foundation.app.app = cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"transform","transform",2066570974),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"set-value","set-value",516752312),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"greeting","greeting",1219326891)], true),foundation.app.set_value_transform], true)], true),new cljs.core.Keyword(null,"effect","effect",4002786563),cljs.core.PersistentHashSet.fromArray([cljs.core.PersistentVector.fromArray([cljs.core.PersistentHashSet.fromArray([cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"greeting","greeting",1219326891)], true),null], true),foundation.app.forward_effect], true),null], true),new cljs.core.Keyword(null,"emit","emit",1017021253),cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([cljs.core.PersistentHashSet.fromArray([cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"greeting","greeting",1219326891)], true),null], true),foundation.app.default_emitter.call(null,cljs.core.PersistentVector.EMPTY)], true)], true)], true);
