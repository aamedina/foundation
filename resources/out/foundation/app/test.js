// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.app.test');
goog.require('cljs.core');
goog.require('foundation.app.data.dependency');
goog.require('cljs.core.async');
goog.require('clojure.zip');
goog.require('foundation.app');
goog.require('cljs.core.async.impl.protocols');
goog.require('enfocus.events');
goog.require('foundation.app.message');
goog.require('enfocus.events');
goog.require('foundation.app.data.component');
goog.require('foundation.behavior');
goog.require('clojure.zip');
goog.require('enfocus.core');
goog.require('dommy.core');
goog.require('foundation.rendering');
goog.require('foundation.app.xhr');
goog.require('foundation.services');
goog.require('enfocus.core');
goog.require('foundation.rendering');
goog.require('foundation.app.util');
goog.require('foundation.app.data.component');
goog.require('clojure.set');
goog.require('foundation.templates');
goog.require('clojure.string');
goog.require('foundation.app');
goog.require('clojure.string');
goog.require('foundation.templates');
goog.require('foundation.app.data.dependency');
goog.require('cljs.core.match');
goog.require('cljs.core.async.impl.protocols');
goog.require('clojure.browser.repl');
goog.require('clojure.set');
goog.require('foundation.app.message');
goog.require('cljs.core.match');
goog.require('cljs.core.async');
goog.require('foundation.app.xhr');
goog.require('foundation.app.util');
goog.require('foundation.app.data.dependency');
goog.require('foundation.services');
goog.require('foundation.behavior');
goog.require('dommy.core');
cljs.core.enable_console_print_BANG_.call(null);
foundation.app.test.reset = (function reset(){return location.reload(true);
});
foundation.app.test.proc = (function() {
var proc = null;
var proc__1 = (function (f){return proc.call(null,null,f);
});
var proc__2 = (function (out,f){var make_argv = (function (args){if(cljs.core.coll_QMARK_.call(null,args))
{return args;
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [args], null);
}
});var in$ = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,32));var out__$1 = out;var c__18051__auto___334743 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_334722){var state_val_334723 = (state_334722[1]);if((state_val_334723 === 1))
{var state_334722__$1 = state_334722;var statearr_334724_334744 = state_334722__$1;(statearr_334724_334744[2] = null);
(statearr_334724_334744[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_334723 === 2))
{var state_334722__$1 = state_334722;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_334722__$1,4,in$);
} else
{if((state_val_334723 === 3))
{var inst_334720 = (state_334722[2]);var state_334722__$1 = state_334722;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_334722__$1,inst_334720);
} else
{if((state_val_334723 === 4))
{var inst_334705 = (state_334722[7]);var inst_334704 = (state_334722[2]);var inst_334705__$1 = make_argv.call(null,inst_334704);var state_334722__$1 = (function (){var statearr_334725 = state_334722;(statearr_334725[7] = inst_334705__$1);
return statearr_334725;
})();if(cljs.core.truth_(inst_334705__$1))
{var statearr_334726_334745 = state_334722__$1;(statearr_334726_334745[1] = 5);
} else
{var statearr_334727_334746 = state_334722__$1;(statearr_334727_334746[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_334723 === 5))
{var state_334722__$1 = state_334722;if(cljs.core.truth_(out__$1))
{var statearr_334728_334747 = state_334722__$1;(statearr_334728_334747[1] = 8);
} else
{var statearr_334729_334748 = state_334722__$1;(statearr_334729_334748[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_334723 === 6))
{var state_334722__$1 = state_334722;var statearr_334730_334749 = state_334722__$1;(statearr_334730_334749[2] = null);
(statearr_334730_334749[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_334723 === 7))
{var inst_334717 = (state_334722[2]);var state_334722__$1 = (function (){var statearr_334731 = state_334722;(statearr_334731[8] = inst_334717);
return statearr_334731;
})();var statearr_334732_334750 = state_334722__$1;(statearr_334732_334750[2] = null);
(statearr_334732_334750[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_334723 === 8))
{var inst_334705 = (state_334722[7]);var inst_334708 = cljs.core.apply.call(null,f,inst_334705);var state_334722__$1 = state_334722;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_334722__$1,11,out__$1,inst_334708);
} else
{if((state_val_334723 === 9))
{var inst_334705 = (state_334722[7]);var inst_334712 = cljs.core.apply.call(null,f,inst_334705);var state_334722__$1 = state_334722;var statearr_334733_334751 = state_334722__$1;(statearr_334733_334751[2] = inst_334712);
(statearr_334733_334751[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_334723 === 10))
{var inst_334714 = (state_334722[2]);var state_334722__$1 = state_334722;var statearr_334734_334752 = state_334722__$1;(statearr_334734_334752[2] = inst_334714);
(statearr_334734_334752[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_334723 === 11))
{var inst_334710 = (state_334722[2]);var state_334722__$1 = state_334722;var statearr_334735_334753 = state_334722__$1;(statearr_334735_334753[2] = inst_334710);
(statearr_334735_334753[1] = 10);
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
});return ((function (switch__17981__auto__){
return (function() {
var state_machine__17982__auto__ = null;
var state_machine__17982__auto____0 = (function (){var statearr_334739 = (new Array(9));(statearr_334739[0] = state_machine__17982__auto__);
(statearr_334739[1] = 1);
return statearr_334739;
});
var state_machine__17982__auto____1 = (function (state_334722){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_334722);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e334740){if((e334740 instanceof Object))
{var ex__17985__auto__ = e334740;var statearr_334741_334754 = state_334722;(statearr_334741_334754[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_334722);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e334740;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__334755 = state_334722;
state_334722 = G__334755;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_334722){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_334722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_334742 = f__18052__auto__.call(null);(statearr_334742[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___334743);
return statearr_334742;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18053__auto__);
}));
return in$;
});
proc = function(out,f){
switch(arguments.length){
case 1:
return proc__1.call(this,out);
case 2:
return proc__2.call(this,out,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
proc.cljs$core$IFn$_invoke$arity$1 = proc__1;
proc.cljs$core$IFn$_invoke$arity$2 = proc__2;
return proc;
})()
;
foundation.app.test.add_proc = (function() {
var add_proc = null;
var add_proc__1 = (function (f){return add_proc.call(null,f,cljs.core.atom.call(null,foundation.app.data.dependency.graph.call(null)));
});
var add_proc__2 = (function (f,out){return add_proc.call(null,f,out,cljs.core.atom.call(null,foundation.app.data.dependency.graph.call(null)));
});
var add_proc__3 = (function (f,out,procs){var in$ = foundation.app.test.proc.call(null,out,f);cljs.core.swap_BANG_.call(null,procs,foundation.app.data.dependency.depend,out,in$);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [in$,procs], null);
});
add_proc = function(f,out,procs){
switch(arguments.length){
case 1:
return add_proc__1.call(this,f);
case 2:
return add_proc__2.call(this,f,out);
case 3:
return add_proc__3.call(this,f,out,procs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_proc.cljs$core$IFn$_invoke$arity$1 = add_proc__1;
add_proc.cljs$core$IFn$_invoke$arity$2 = add_proc__2;
add_proc.cljs$core$IFn$_invoke$arity$3 = add_proc__3;
return add_proc;
})()
;
foundation.app.test.logger = foundation.app.test.proc.call(null,cljs.core.println);

/**
* @constructor
* @param {*} app
* @param {*} app_model
* @param {*} procs
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
foundation.app.test.TwitterAds = (function (app,app_model,procs,__meta,__extmap){
this.app = app;
this.app_model = app_model;
this.procs = procs;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>3){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
foundation.app.test.TwitterAds.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__14380__auto__){var self__ = this;
var this__14380__auto____$1 = this;var h__14234__auto__ = self__.__hash;if(!((h__14234__auto__ == null)))
{return h__14234__auto__;
} else
{var h__14234__auto____$1 = cljs.core.hash_imap.call(null,this__14380__auto____$1);self__.__hash = h__14234__auto____$1;
return h__14234__auto____$1;
}
});
foundation.app.test.TwitterAds.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__14385__auto__,k__14386__auto__){var self__ = this;
var this__14385__auto____$1 = this;return cljs.core._lookup.call(null,this__14385__auto____$1,k__14386__auto__,null);
});
foundation.app.test.TwitterAds.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__14387__auto__,k334757,else__14388__auto__){var self__ = this;
var this__14387__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k334757,new cljs.core.Keyword(null,"app","app",1014001043)))
{return self__.app;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k334757,new cljs.core.Keyword(null,"app-model","app-model",1419288559)))
{return self__.app_model;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k334757,new cljs.core.Keyword(null,"procs","procs",1120844623)))
{return self__.procs;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k334757,else__14388__auto__);
} else
{return null;
}
}
}
}
});
foundation.app.test.TwitterAds.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__14392__auto__,k__14393__auto__,G__334756){var self__ = this;
var this__14392__auto____$1 = this;var pred__334759 = cljs.core.keyword_identical_QMARK_;var expr__334760 = k__14393__auto__;if(cljs.core.truth_(pred__334759.call(null,new cljs.core.Keyword(null,"app","app",1014001043),expr__334760)))
{return (new foundation.app.test.TwitterAds(G__334756,self__.app_model,self__.procs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__334759.call(null,new cljs.core.Keyword(null,"app-model","app-model",1419288559),expr__334760)))
{return (new foundation.app.test.TwitterAds(self__.app,G__334756,self__.procs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__334759.call(null,new cljs.core.Keyword(null,"procs","procs",1120844623),expr__334760)))
{return (new foundation.app.test.TwitterAds(self__.app,self__.app_model,G__334756,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.test.TwitterAds(self__.app,self__.app_model,self__.procs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__14393__auto__,G__334756),null));
}
}
}
});
foundation.app.test.TwitterAds.prototype.foundation$app$data$component$Lifecycle$ = true;
foundation.app.test.TwitterAds.prototype.foundation$app$data$component$Lifecycle$start$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return foundation.app.initialize.call(null,this$__$1);
});
foundation.app.test.TwitterAds.prototype.foundation$app$data$component$Lifecycle$stop$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return null;
});
foundation.app.test.TwitterAds.prototype.foundation$app$IApplication$ = true;
foundation.app.test.TwitterAds.prototype.foundation$app$IApplication$initialize$arity$1 = (function (application){var self__ = this;
var application__$1 = this;cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"init","init",1017141378),foundation.app.message.path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null)], true, false));
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"init","init",1017141378),foundation.app.message.path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null)], true, false));
});
foundation.app.test.TwitterAds.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__14399__auto__,writer__14400__auto__,opts__14401__auto__){var self__ = this;
var this__14399__auto____$1 = this;var pr_pair__14402__auto__ = (function (keyval__14403__auto__){return cljs.core.pr_sequential_writer.call(null,writer__14400__auto__,cljs.core.pr_writer,""," ","",opts__14401__auto__,keyval__14403__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__14400__auto__,pr_pair__14402__auto__,"#foundation.app.test.TwitterAds{",", ","}",opts__14401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app","app",1014001043),self__.app],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-model","app-model",1419288559),self__.app_model],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"procs","procs",1120844623),self__.procs],null))], null),self__.__extmap));
});
foundation.app.test.TwitterAds.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__14390__auto__,entry__14391__auto__){var self__ = this;
var this__14390__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__14391__auto__))
{return cljs.core._assoc.call(null,this__14390__auto____$1,cljs.core._nth.call(null,entry__14391__auto__,0),cljs.core._nth.call(null,entry__14391__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__14390__auto____$1,entry__14391__auto__);
}
});
foundation.app.test.TwitterAds.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__14397__auto__){var self__ = this;
var this__14397__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app","app",1014001043),self__.app],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-model","app-model",1419288559),self__.app_model],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"procs","procs",1120844623),self__.procs],null))], null),self__.__extmap));
});
foundation.app.test.TwitterAds.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__14389__auto__){var self__ = this;
var this__14389__auto____$1 = this;return (3 + cljs.core.count.call(null,self__.__extmap));
});
foundation.app.test.TwitterAds.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__14381__auto__,other__14382__auto__){var self__ = this;
var this__14381__auto____$1 = this;if(cljs.core.truth_((function (){var and__13811__auto__ = other__14382__auto__;if(cljs.core.truth_(and__13811__auto__))
{return ((this__14381__auto____$1.constructor === other__14382__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__14381__auto____$1,other__14382__auto__));
} else
{return and__13811__auto__;
}
})()))
{return true;
} else
{return false;
}
});
foundation.app.test.TwitterAds.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__14384__auto__,G__334756){var self__ = this;
var this__14384__auto____$1 = this;return (new foundation.app.test.TwitterAds(self__.app,self__.app_model,self__.procs,G__334756,self__.__extmap,self__.__hash));
});
foundation.app.test.TwitterAds.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__14383__auto__){var self__ = this;
var this__14383__auto____$1 = this;return self__.__meta;
});
foundation.app.test.TwitterAds.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__14394__auto__,k__14395__auto__){var self__ = this;
var this__14394__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"procs","procs",1120844623),null,new cljs.core.Keyword(null,"app","app",1014001043),null,new cljs.core.Keyword(null,"app-model","app-model",1419288559),null], null), null),k__14395__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__14394__auto____$1),self__.__meta),k__14395__auto__);
} else
{return (new foundation.app.test.TwitterAds(self__.app,self__.app_model,self__.procs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__14395__auto__)),null));
}
});
foundation.app.test.TwitterAds.cljs$lang$type = true;
foundation.app.test.TwitterAds.cljs$lang$ctorPrSeq = (function (this__14419__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"foundation.app.test/TwitterAds");
});
foundation.app.test.TwitterAds.cljs$lang$ctorPrWriter = (function (this__14419__auto__,writer__14420__auto__){return cljs.core._write.call(null,writer__14420__auto__,"foundation.app.test/TwitterAds");
});
foundation.app.test.__GT_TwitterAds = (function __GT_TwitterAds(app,app_model,procs){return (new foundation.app.test.TwitterAds(app,app_model,procs));
});
foundation.app.test.map__GT_TwitterAds = (function map__GT_TwitterAds(G__334758){return (new foundation.app.test.TwitterAds(new cljs.core.Keyword(null,"app","app",1014001043).cljs$core$IFn$_invoke$arity$1(G__334758),new cljs.core.Keyword(null,"app-model","app-model",1419288559).cljs$core$IFn$_invoke$arity$1(G__334758),new cljs.core.Keyword(null,"procs","procs",1120844623).cljs$core$IFn$_invoke$arity$1(G__334758),null,cljs.core.dissoc.call(null,G__334758,new cljs.core.Keyword(null,"app","app",1014001043),new cljs.core.Keyword(null,"app-model","app-model",1419288559),new cljs.core.Keyword(null,"procs","procs",1120844623))));
});
foundation.app.test._main = (function _main(){var map__334763 = foundation.app.create_app.call(null,"content");var map__334763__$1 = ((cljs.core.seq_QMARK_.call(null,map__334763))?cljs.core.apply.call(null,cljs.core.hash_map,map__334763):map__334763);var app_model = cljs.core.get.call(null,map__334763__$1,new cljs.core.Keyword(null,"app-model","app-model",1419288559));var app = cljs.core.get.call(null,map__334763__$1,new cljs.core.Keyword(null,"app","app",1014001043));var app__$1 = (new foundation.app.test.TwitterAds(app,app_model,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)));return foundation.app.data.component.start.call(null,app__$1);
});
goog.exportSymbol('foundation.app.test._main', foundation.app.test._main);

//# sourceMappingURL=test.js.map