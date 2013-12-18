// Compiled by ClojureScript 0.0-2120
goog.provide('foundation.app');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('foundation.app.render');
goog.require('foundation.app.data.tracking_map');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.match');
goog.require('clojure.set');
goog.require('cljs.core.match');
goog.require('cljs.core.async');
goog.require('foundation.app.data.tracking_map');
goog.require('foundation.app.render');
foundation.app.input_queue = (function input_queue(app_state){var input_queue__$1 = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,32));var c__12202__auto___49084 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12203__auto__ = (function (){var switch__12132__auto__ = (function (state_49072){var state_val_49073 = (state_49072[1]);if((state_val_49073 === 4))
{var inst_49066 = (state_49072[2]);var inst_49067 = cljs.core.swap_BANG_.call(null,app_state,foundation.app.transact_one,inst_49066);var state_49072__$1 = (function (){var statearr_49074 = state_49072;(statearr_49074[7] = inst_49067);
return statearr_49074;
})();var statearr_49075_49085 = state_49072__$1;(statearr_49075_49085[2] = null);
(statearr_49075_49085[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49073 === 3))
{var inst_49070 = (state_49072[2]);var state_49072__$1 = state_49072;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49072__$1,inst_49070);
} else
{if((state_val_49073 === 2))
{var state_49072__$1 = state_49072;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49072__$1,4,input_queue__$1);
} else
{if((state_val_49073 === 1))
{var state_49072__$1 = state_49072;var statearr_49076_49086 = state_49072__$1;(statearr_49076_49086[2] = null);
(statearr_49076_49086[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__12132__auto__){
return (function() {
var state_machine__12133__auto__ = null;
var state_machine__12133__auto____0 = (function (){var statearr_49080 = [null,null,null,null,null,null,null,null];(statearr_49080[0] = state_machine__12133__auto__);
(statearr_49080[1] = 1);
return statearr_49080;
});
var state_machine__12133__auto____1 = (function (state_49072){while(true){
var ret_value__12134__auto__ = (function (){try{while(true){
var result__12135__auto__ = switch__12132__auto__.call(null,state_49072);if(cljs.core.keyword_identical_QMARK_.call(null,result__12135__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12135__auto__;
}
break;
}
}catch (e49081){if((e49081 instanceof Object))
{var ex__12136__auto__ = e49081;var statearr_49082_49087 = state_49072;(statearr_49082_49087[5] = ex__12136__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49072);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e49081;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12134__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__49088 = state_49072;
state_49072 = G__49088;
continue;
}
} else
{return ret_value__12134__auto__;
}
break;
}
});
state_machine__12133__auto__ = function(state_49072){
switch(arguments.length){
case 0:
return state_machine__12133__auto____0.call(this);
case 1:
return state_machine__12133__auto____1.call(this,state_49072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12133__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12133__auto____0;
state_machine__12133__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12133__auto____1;
return state_machine__12133__auto__;
})()
;})(switch__12132__auto__))
})();var state__12204__auto__ = (function (){var statearr_49083 = f__12203__auto__.call(null);(statearr_49083[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12202__auto___49084);
return statearr_49083;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12204__auto__);
}));
return input_queue__$1;
});
foundation.app.output_queue = (function output_queue(app_state){var output_queue__$1 = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,32));cljs.core.add_watch.call(null,app_state,new cljs.core.Keyword(null,"output","output",4303359091),(function (_,___$1,old,new$){return cljs.core.async.put_BANG_.call(null,output_queue__$1,new$);
}));
return output_queue__$1;
});
foundation.app.render_queue = (function render_queue(app_state){var render_queue__$1 = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,32));cljs.core.add_watch.call(null,app_state,new cljs.core.Keyword(null,"output","output",4303359091),(function (_,___$1,old,new$){return cljs.core.async.put_BANG_.call(null,render_queue__$1,new$);
}));
return render_queue__$1;
});

/**
* @constructor
* @param {*} state
* @param {*} input
* @param {*} output
* @param {*} renderer
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
foundation.app.Dataflow = (function (state,input,output,renderer,__meta,__extmap){
this.state = state;
this.input = input;
this.output = output;
this.renderer = renderer;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>4){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
foundation.app.Dataflow.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8807__auto__){var self__ = this;
var this__8807__auto____$1 = this;var h__8661__auto__ = self__.__hash;if(!((h__8661__auto__ == null)))
{return h__8661__auto__;
} else
{var h__8661__auto____$1 = cljs.core.hash_imap.call(null,this__8807__auto____$1);self__.__hash = h__8661__auto____$1;
return h__8661__auto____$1;
}
});
foundation.app.Dataflow.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8812__auto__,k__8813__auto__){var self__ = this;
var this__8812__auto____$1 = this;return cljs.core._lookup.call(null,this__8812__auto____$1,k__8813__auto__,null);
});
foundation.app.Dataflow.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8814__auto__,k49090,else__8815__auto__){var self__ = this;
var this__8814__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k49090,new cljs.core.Keyword(null,"state","state",1123661827)))
{return self__.state;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k49090,new cljs.core.Keyword(null,"input","input",1114262332)))
{return self__.input;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k49090,new cljs.core.Keyword(null,"output","output",4303359091)))
{return self__.output;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k49090,new cljs.core.Keyword(null,"renderer","renderer",519058485)))
{return self__.renderer;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k49090,else__8815__auto__);
} else
{return null;
}
}
}
}
}
});
foundation.app.Dataflow.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8819__auto__,k__8820__auto__,G__49089){var self__ = this;
var this__8819__auto____$1 = this;var pred__49092 = cljs.core.keyword_identical_QMARK_;var expr__49093 = k__8820__auto__;if(cljs.core.truth_(pred__49092.call(null,new cljs.core.Keyword(null,"state","state",1123661827),expr__49093)))
{return (new foundation.app.Dataflow(G__49089,self__.input,self__.output,self__.renderer,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__49092.call(null,new cljs.core.Keyword(null,"input","input",1114262332),expr__49093)))
{return (new foundation.app.Dataflow(self__.state,G__49089,self__.output,self__.renderer,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__49092.call(null,new cljs.core.Keyword(null,"output","output",4303359091),expr__49093)))
{return (new foundation.app.Dataflow(self__.state,self__.input,G__49089,self__.renderer,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__49092.call(null,new cljs.core.Keyword(null,"renderer","renderer",519058485),expr__49093)))
{return (new foundation.app.Dataflow(self__.state,self__.input,self__.output,G__49089,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.Dataflow(self__.state,self__.input,self__.output,self__.renderer,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8820__auto__,G__49089),null));
}
}
}
}
});
foundation.app.Dataflow.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8826__auto__,writer__8827__auto__,opts__8828__auto__){var self__ = this;
var this__8826__auto____$1 = this;var pr_pair__8829__auto__ = (function (keyval__8830__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8827__auto__,cljs.core.pr_writer,""," ","",opts__8828__auto__,keyval__8830__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__8827__auto__,pr_pair__8829__auto__,"#foundation.app.Dataflow{",", ","}",opts__8828__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",1123661827),self__.state],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input","input",1114262332),self__.input],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output","output",4303359091),self__.output],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"renderer","renderer",519058485),self__.renderer],null))], null),self__.__extmap));
});
foundation.app.Dataflow.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8817__auto__,entry__8818__auto__){var self__ = this;
var this__8817__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8818__auto__))
{return cljs.core._assoc.call(null,this__8817__auto____$1,cljs.core._nth.call(null,entry__8818__auto__,0),cljs.core._nth.call(null,entry__8818__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8817__auto____$1,entry__8818__auto__);
}
});
foundation.app.Dataflow.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8824__auto__){var self__ = this;
var this__8824__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",1123661827),self__.state],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input","input",1114262332),self__.input],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output","output",4303359091),self__.output],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"renderer","renderer",519058485),self__.renderer],null))], null),self__.__extmap));
});
foundation.app.Dataflow.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8816__auto__){var self__ = this;
var this__8816__auto____$1 = this;return (4 + cljs.core.count.call(null,self__.__extmap));
});
foundation.app.Dataflow.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8808__auto__,other__8809__auto__){var self__ = this;
var this__8808__auto____$1 = this;if(cljs.core.truth_((function (){var and__8233__auto__ = other__8809__auto__;if(cljs.core.truth_(and__8233__auto__))
{return ((this__8808__auto____$1.constructor === other__8809__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__8808__auto____$1,other__8809__auto__));
} else
{return and__8233__auto__;
}
})()))
{return true;
} else
{return false;
}
});
foundation.app.Dataflow.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8811__auto__,G__49089){var self__ = this;
var this__8811__auto____$1 = this;return (new foundation.app.Dataflow(self__.state,self__.input,self__.output,self__.renderer,G__49089,self__.__extmap,self__.__hash));
});
foundation.app.Dataflow.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8810__auto__){var self__ = this;
var this__8810__auto____$1 = this;return self__.__meta;
});
foundation.app.Dataflow.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8821__auto__,k__8822__auto__){var self__ = this;
var this__8821__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"renderer","renderer",519058485),null,new cljs.core.Keyword(null,"state","state",1123661827),null,new cljs.core.Keyword(null,"output","output",4303359091),null,new cljs.core.Keyword(null,"input","input",1114262332),null], null), null),k__8822__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8821__auto____$1),self__.__meta),k__8822__auto__);
} else
{return (new foundation.app.Dataflow(self__.state,self__.input,self__.output,self__.renderer,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8822__auto__)),null));
}
});
foundation.app.Dataflow.cljs$lang$type = true;
foundation.app.Dataflow.cljs$lang$ctorPrSeq = (function (this__8846__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"foundation.app/Dataflow");
});
foundation.app.Dataflow.cljs$lang$ctorPrWriter = (function (this__8846__auto__,writer__8847__auto__){return cljs.core._write.call(null,writer__8847__auto__,"foundation.app/Dataflow");
});
foundation.app.__GT_Dataflow = (function __GT_Dataflow(state,input,output,renderer){return (new foundation.app.Dataflow(state,input,output,renderer));
});
foundation.app.map__GT_Dataflow = (function map__GT_Dataflow(G__49091){return (new foundation.app.Dataflow(new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(G__49091),new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(G__49091),new cljs.core.Keyword(null,"output","output",4303359091).cljs$core$IFn$_invoke$arity$1(G__49091),new cljs.core.Keyword(null,"renderer","renderer",519058485).cljs$core$IFn$_invoke$arity$1(G__49091),null,cljs.core.dissoc.call(null,G__49091,new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.Keyword(null,"output","output",4303359091),new cljs.core.Keyword(null,"renderer","renderer",519058485))));
});
foundation.app.root = (function root(root_id){var app_state = cljs.core.atom.call(null,foundation.app.data.tracking_map.tracking_map.call(null,cljs.core.PersistentArrayMap.EMPTY));var vec__49096 = cljs.core.juxt.call(null,foundation.app.input_queue,foundation.app.output_queue,foundation.app.render_queue).call(null,app_state);var input = cljs.core.nth.call(null,vec__49096,0,null);var output = cljs.core.nth.call(null,vec__49096,1,null);var renderer = cljs.core.nth.call(null,vec__49096,2,null);return (new foundation.app.Dataflow(app_state,input,output,renderer));
});

//# sourceMappingURL=app.js.map