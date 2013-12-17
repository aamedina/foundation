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
});var in$ = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,32));var out__$1 = out;var c__18051__auto___325566 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_325545){var state_val_325546 = (state_325545[1]);if((state_val_325546 === 1))
{var state_325545__$1 = state_325545;var statearr_325547_325567 = state_325545__$1;(statearr_325547_325567[2] = null);
(statearr_325547_325567[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325546 === 2))
{var state_325545__$1 = state_325545;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_325545__$1,4,in$);
} else
{if((state_val_325546 === 3))
{var inst_325543 = (state_325545[2]);var state_325545__$1 = state_325545;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_325545__$1,inst_325543);
} else
{if((state_val_325546 === 4))
{var inst_325528 = (state_325545[7]);var inst_325527 = (state_325545[2]);var inst_325528__$1 = make_argv.call(null,inst_325527);var state_325545__$1 = (function (){var statearr_325548 = state_325545;(statearr_325548[7] = inst_325528__$1);
return statearr_325548;
})();if(cljs.core.truth_(inst_325528__$1))
{var statearr_325549_325568 = state_325545__$1;(statearr_325549_325568[1] = 5);
} else
{var statearr_325550_325569 = state_325545__$1;(statearr_325550_325569[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325546 === 5))
{var state_325545__$1 = state_325545;if(cljs.core.truth_(out__$1))
{var statearr_325551_325570 = state_325545__$1;(statearr_325551_325570[1] = 8);
} else
{var statearr_325552_325571 = state_325545__$1;(statearr_325552_325571[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325546 === 6))
{var state_325545__$1 = state_325545;var statearr_325553_325572 = state_325545__$1;(statearr_325553_325572[2] = null);
(statearr_325553_325572[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325546 === 7))
{var inst_325540 = (state_325545[2]);var state_325545__$1 = (function (){var statearr_325554 = state_325545;(statearr_325554[8] = inst_325540);
return statearr_325554;
})();var statearr_325555_325573 = state_325545__$1;(statearr_325555_325573[2] = null);
(statearr_325555_325573[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325546 === 8))
{var inst_325528 = (state_325545[7]);var inst_325531 = cljs.core.apply.call(null,f,inst_325528);var state_325545__$1 = state_325545;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_325545__$1,11,out__$1,inst_325531);
} else
{if((state_val_325546 === 9))
{var inst_325528 = (state_325545[7]);var inst_325535 = cljs.core.apply.call(null,f,inst_325528);var state_325545__$1 = state_325545;var statearr_325556_325574 = state_325545__$1;(statearr_325556_325574[2] = inst_325535);
(statearr_325556_325574[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325546 === 10))
{var inst_325537 = (state_325545[2]);var state_325545__$1 = state_325545;var statearr_325557_325575 = state_325545__$1;(statearr_325557_325575[2] = inst_325537);
(statearr_325557_325575[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_325546 === 11))
{var inst_325533 = (state_325545[2]);var state_325545__$1 = state_325545;var statearr_325558_325576 = state_325545__$1;(statearr_325558_325576[2] = inst_325533);
(statearr_325558_325576[1] = 10);
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
var state_machine__17982__auto____0 = (function (){var statearr_325562 = (new Array(9));(statearr_325562[0] = state_machine__17982__auto__);
(statearr_325562[1] = 1);
return statearr_325562;
});
var state_machine__17982__auto____1 = (function (state_325545){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_325545);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e325563){if((e325563 instanceof Object))
{var ex__17985__auto__ = e325563;var statearr_325564_325577 = state_325545;(statearr_325564_325577[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_325545);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e325563;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__325578 = state_325545;
state_325545 = G__325578;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_325545){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_325545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_325565 = f__18052__auto__.call(null);(statearr_325565[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___325566);
return statearr_325565;
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
foundation.app.test.TwitterAds.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__14387__auto__,k325580,else__14388__auto__){var self__ = this;
var this__14387__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k325580,new cljs.core.Keyword(null,"app","app",1014001043)))
{return self__.app;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k325580,new cljs.core.Keyword(null,"app-model","app-model",1419288559)))
{return self__.app_model;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k325580,new cljs.core.Keyword(null,"procs","procs",1120844623)))
{return self__.procs;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k325580,else__14388__auto__);
} else
{return null;
}
}
}
}
});
foundation.app.test.TwitterAds.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__14392__auto__,k__14393__auto__,G__325579){var self__ = this;
var this__14392__auto____$1 = this;var pred__325582 = cljs.core.keyword_identical_QMARK_;var expr__325583 = k__14393__auto__;if(cljs.core.truth_(pred__325582.call(null,new cljs.core.Keyword(null,"app","app",1014001043),expr__325583)))
{return (new foundation.app.test.TwitterAds(G__325579,self__.app_model,self__.procs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__325582.call(null,new cljs.core.Keyword(null,"app-model","app-model",1419288559),expr__325583)))
{return (new foundation.app.test.TwitterAds(self__.app,G__325579,self__.procs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__325582.call(null,new cljs.core.Keyword(null,"procs","procs",1120844623),expr__325583)))
{return (new foundation.app.test.TwitterAds(self__.app,self__.app_model,G__325579,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.test.TwitterAds(self__.app,self__.app_model,self__.procs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__14393__auto__,G__325579),null));
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
foundation.app.test.TwitterAds.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__14384__auto__,G__325579){var self__ = this;
var this__14384__auto____$1 = this;return (new foundation.app.test.TwitterAds(self__.app,self__.app_model,self__.procs,G__325579,self__.__extmap,self__.__hash));
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
foundation.app.test.map__GT_TwitterAds = (function map__GT_TwitterAds(G__325581){return (new foundation.app.test.TwitterAds(new cljs.core.Keyword(null,"app","app",1014001043).cljs$core$IFn$_invoke$arity$1(G__325581),new cljs.core.Keyword(null,"app-model","app-model",1419288559).cljs$core$IFn$_invoke$arity$1(G__325581),new cljs.core.Keyword(null,"procs","procs",1120844623).cljs$core$IFn$_invoke$arity$1(G__325581),null,cljs.core.dissoc.call(null,G__325581,new cljs.core.Keyword(null,"app","app",1014001043),new cljs.core.Keyword(null,"app-model","app-model",1419288559),new cljs.core.Keyword(null,"procs","procs",1120844623))));
});
foundation.app.test._main = (function _main(){var map__325586 = foundation.app.create_app.call(null,"content");var map__325586__$1 = ((cljs.core.seq_QMARK_.call(null,map__325586))?cljs.core.apply.call(null,cljs.core.hash_map,map__325586):map__325586);var app_model = cljs.core.get.call(null,map__325586__$1,new cljs.core.Keyword(null,"app-model","app-model",1419288559));var app = cljs.core.get.call(null,map__325586__$1,new cljs.core.Keyword(null,"app","app",1014001043));var app__$1 = (new foundation.app.test.TwitterAds(app,app_model,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)));return foundation.app.data.component.start.call(null,app__$1);
});
goog.exportSymbol('foundation.app.test._main', foundation.app.test._main);

//# sourceMappingURL=test.js.map