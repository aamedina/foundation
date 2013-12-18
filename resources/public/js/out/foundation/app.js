// Compiled by ClojureScript 0.0-2120
goog.provide('foundation.app');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('foundation.app.data.component');
goog.require('foundation.app.data.component');
goog.require('foundation.app.render');
goog.require('foundation.app.data.tracking_map');
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
goog.require('foundation.app.data.dependency');
goog.require('foundation.app.render');
foundation.app.transact_one = (function transact_one(state,message){var state__$1 = cljs.core.dissoc.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"input","input",1114262332),message),new cljs.core.Keyword(null,"effect","effect",4002786563));var old_state = state__$1;var new_state = state__$1;return new_state;
});
foundation.app.input_queue = (function input_queue(app_state){var input_queue__$1 = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,32));var c__12185__auto___31136 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12186__auto__ = (function (){var switch__12115__auto__ = (function (state_31124){var state_val_31125 = (state_31124[1]);if((state_val_31125 === 4))
{var inst_31118 = (state_31124[2]);var inst_31119 = cljs.core.swap_BANG_.call(null,app_state,foundation.app.transact_one,inst_31118);var state_31124__$1 = (function (){var statearr_31126 = state_31124;(statearr_31126[7] = inst_31119);
return statearr_31126;
})();var statearr_31127_31137 = state_31124__$1;(statearr_31127_31137[2] = null);
(statearr_31127_31137[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31125 === 3))
{var inst_31122 = (state_31124[2]);var state_31124__$1 = state_31124;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31124__$1,inst_31122);
} else
{if((state_val_31125 === 2))
{var state_31124__$1 = state_31124;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31124__$1,4,input_queue__$1);
} else
{if((state_val_31125 === 1))
{var state_31124__$1 = state_31124;var statearr_31128_31138 = state_31124__$1;(statearr_31128_31138[2] = null);
(statearr_31128_31138[1] = 2);
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
var state_machine__12116__auto____0 = (function (){var statearr_31132 = [null,null,null,null,null,null,null,null];(statearr_31132[0] = state_machine__12116__auto__);
(statearr_31132[1] = 1);
return statearr_31132;
});
var state_machine__12116__auto____1 = (function (state_31124){while(true){
var ret_value__12117__auto__ = (function (){try{while(true){
var result__12118__auto__ = switch__12115__auto__.call(null,state_31124);if(cljs.core.keyword_identical_QMARK_.call(null,result__12118__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12118__auto__;
}
break;
}
}catch (e31133){if((e31133 instanceof Object))
{var ex__12119__auto__ = e31133;var statearr_31134_31139 = state_31124;(statearr_31134_31139[5] = ex__12119__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31124);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31133;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12117__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31140 = state_31124;
state_31124 = G__31140;
continue;
}
} else
{return ret_value__12117__auto__;
}
break;
}
});
state_machine__12116__auto__ = function(state_31124){
switch(arguments.length){
case 0:
return state_machine__12116__auto____0.call(this);
case 1:
return state_machine__12116__auto____1.call(this,state_31124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12116__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12116__auto____0;
state_machine__12116__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12116__auto____1;
return state_machine__12116__auto__;
})()
;})(switch__12115__auto__))
})();var state__12187__auto__ = (function (){var statearr_31135 = f__12186__auto__.call(null);(statearr_31135[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12185__auto___31136);
return statearr_31135;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12187__auto__);
}));
return input_queue__$1;
});
foundation.app.output_queue = (function output_queue(app_state){var output_queue__$1 = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,32));cljs.core.add_watch.call(null,app_state,new cljs.core.Keyword(null,"output","output",4303359091),(function (_,___$1,old,new$){return cljs.core.async.put_BANG_.call(null,output_queue__$1,new$);
}));
return output_queue__$1;
});
foundation.app.refresh_queued = false;
foundation.app.render_queue = (function render_queue(app_state){var render_queue__$1 = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,32));var rootf = ((function (render_queue__$1){
return (function (){foundation.app.refresh_queued = false;
var path = cljs.core.PersistentVector.EMPTY;return null;
});})(render_queue__$1))
;cljs.core.add_watch.call(null,app_state,new cljs.core.Keyword(null,"render","render",4374279432),(function (_,___$1,old,new$){if(cljs.core.truth_(foundation.app.refresh_queued))
{} else
{if(typeof requestAnimationFrame !== 'undefined')
{requestAnimationFrame(rootf);
} else
{setTimeout(rootf,16);
}
}
return cljs.core.async.put_BANG_.call(null,render_queue__$1,new$);
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
foundation.app.Dataflow.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8797__auto__,k31142,else__8798__auto__){var self__ = this;
var this__8797__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k31142,new cljs.core.Keyword(null,"state","state",1123661827)))
{return self__.state;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k31142,new cljs.core.Keyword(null,"input","input",1114262332)))
{return self__.input;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k31142,new cljs.core.Keyword(null,"output","output",4303359091)))
{return self__.output;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k31142,new cljs.core.Keyword(null,"renderer","renderer",519058485)))
{return self__.renderer;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k31142,else__8798__auto__);
} else
{return null;
}
}
}
}
}
});
foundation.app.Dataflow.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8802__auto__,k__8803__auto__,G__31141){var self__ = this;
var this__8802__auto____$1 = this;var pred__31144 = cljs.core.keyword_identical_QMARK_;var expr__31145 = k__8803__auto__;if(cljs.core.truth_(pred__31144.call(null,new cljs.core.Keyword(null,"state","state",1123661827),expr__31145)))
{return (new foundation.app.Dataflow(G__31141,self__.input,self__.output,self__.renderer,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__31144.call(null,new cljs.core.Keyword(null,"input","input",1114262332),expr__31145)))
{return (new foundation.app.Dataflow(self__.state,G__31141,self__.output,self__.renderer,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__31144.call(null,new cljs.core.Keyword(null,"output","output",4303359091),expr__31145)))
{return (new foundation.app.Dataflow(self__.state,self__.input,G__31141,self__.renderer,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__31144.call(null,new cljs.core.Keyword(null,"renderer","renderer",519058485),expr__31145)))
{return (new foundation.app.Dataflow(self__.state,self__.input,self__.output,G__31141,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.Dataflow(self__.state,self__.input,self__.output,self__.renderer,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8803__auto__,G__31141),null));
}
}
}
}
});
foundation.app.Dataflow.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8809__auto__,writer__8810__auto__,opts__8811__auto__){var self__ = this;
var this__8809__auto____$1 = this;var pr_pair__8812__auto__ = (function (keyval__8813__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8810__auto__,cljs.core.pr_writer,""," ","",opts__8811__auto__,keyval__8813__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__8810__auto__,pr_pair__8812__auto__,"#foundation.app.Dataflow{",", ","}",opts__8811__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",1123661827),self__.state],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input","input",1114262332),self__.input],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output","output",4303359091),self__.output],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"renderer","renderer",519058485),self__.renderer],null))], null),self__.__extmap));
});
foundation.app.Dataflow.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8800__auto__,entry__8801__auto__){var self__ = this;
var this__8800__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8801__auto__))
{return cljs.core._assoc.call(null,this__8800__auto____$1,cljs.core._nth.call(null,entry__8801__auto__,0),cljs.core._nth.call(null,entry__8801__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8800__auto____$1,entry__8801__auto__);
}
});
foundation.app.Dataflow.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8807__auto__){var self__ = this;
var this__8807__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",1123661827),self__.state],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input","input",1114262332),self__.input],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output","output",4303359091),self__.output],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"renderer","renderer",519058485),self__.renderer],null))], null),self__.__extmap));
});
foundation.app.Dataflow.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8799__auto__){var self__ = this;
var this__8799__auto____$1 = this;return (4 + cljs.core.count.call(null,self__.__extmap));
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
foundation.app.Dataflow.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8794__auto__,G__31141){var self__ = this;
var this__8794__auto____$1 = this;return (new foundation.app.Dataflow(self__.state,self__.input,self__.output,self__.renderer,G__31141,self__.__extmap,self__.__hash));
});
foundation.app.Dataflow.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8793__auto__){var self__ = this;
var this__8793__auto____$1 = this;return self__.__meta;
});
foundation.app.Dataflow.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8804__auto__,k__8805__auto__){var self__ = this;
var this__8804__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"renderer","renderer",519058485),null,new cljs.core.Keyword(null,"state","state",1123661827),null,new cljs.core.Keyword(null,"output","output",4303359091),null,new cljs.core.Keyword(null,"input","input",1114262332),null], null), null),k__8805__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8804__auto____$1),self__.__meta),k__8805__auto__);
} else
{return (new foundation.app.Dataflow(self__.state,self__.input,self__.output,self__.renderer,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8805__auto__)),null));
}
});
foundation.app.Dataflow.cljs$lang$type = true;
foundation.app.Dataflow.cljs$lang$ctorPrSeq = (function (this__8829__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"foundation.app/Dataflow");
});
foundation.app.Dataflow.cljs$lang$ctorPrWriter = (function (this__8829__auto__,writer__8830__auto__){return cljs.core._write.call(null,writer__8830__auto__,"foundation.app/Dataflow");
});
foundation.app.__GT_Dataflow = (function __GT_Dataflow(state,input,output,renderer){return (new foundation.app.Dataflow(state,input,output,renderer));
});
foundation.app.map__GT_Dataflow = (function map__GT_Dataflow(G__31143){return (new foundation.app.Dataflow(new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(G__31143),new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(G__31143),new cljs.core.Keyword(null,"output","output",4303359091).cljs$core$IFn$_invoke$arity$1(G__31143),new cljs.core.Keyword(null,"renderer","renderer",519058485).cljs$core$IFn$_invoke$arity$1(G__31143),null,cljs.core.dissoc.call(null,G__31143,new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.Keyword(null,"output","output",4303359091),new cljs.core.Keyword(null,"renderer","renderer",519058485))));
});
foundation.app.root = (function root(root_id){var app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-model","data-model",1196427960),foundation.app.data.tracking_map.tracking_map.call(null,cljs.core.PersistentArrayMap.EMPTY)], null));var vec__31148 = cljs.core.juxt.call(null,foundation.app.input_queue,foundation.app.output_queue,foundation.app.render_queue).call(null,app_state);var input = cljs.core.nth.call(null,vec__31148,0,null);var output = cljs.core.nth.call(null,vec__31148,1,null);var renderer = cljs.core.nth.call(null,vec__31148,2,null);return (new foundation.app.Dataflow(app_state,input,output,renderer));
});

//# sourceMappingURL=app.js.map