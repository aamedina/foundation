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
});var in$ = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,32));var out__$1 = out;var c__18838__auto___323101 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18839__auto__ = (function (){var switch__18768__auto__ = (function (state_323080){var state_val_323081 = (state_323080[1]);if((state_val_323081 === 1))
{var state_323080__$1 = state_323080;var statearr_323082_323102 = state_323080__$1;(statearr_323082_323102[2] = null);
(statearr_323082_323102[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_323081 === 2))
{var state_323080__$1 = state_323080;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_323080__$1,4,in$);
} else
{if((state_val_323081 === 3))
{var inst_323078 = (state_323080[2]);var state_323080__$1 = state_323080;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_323080__$1,inst_323078);
} else
{if((state_val_323081 === 4))
{var inst_323063 = (state_323080[7]);var inst_323062 = (state_323080[2]);var inst_323063__$1 = make_argv.call(null,inst_323062);var state_323080__$1 = (function (){var statearr_323083 = state_323080;(statearr_323083[7] = inst_323063__$1);
return statearr_323083;
})();if(cljs.core.truth_(inst_323063__$1))
{var statearr_323084_323103 = state_323080__$1;(statearr_323084_323103[1] = 5);
} else
{var statearr_323085_323104 = state_323080__$1;(statearr_323085_323104[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_323081 === 5))
{var state_323080__$1 = state_323080;if(cljs.core.truth_(out__$1))
{var statearr_323086_323105 = state_323080__$1;(statearr_323086_323105[1] = 8);
} else
{var statearr_323087_323106 = state_323080__$1;(statearr_323087_323106[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_323081 === 6))
{var state_323080__$1 = state_323080;var statearr_323088_323107 = state_323080__$1;(statearr_323088_323107[2] = null);
(statearr_323088_323107[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_323081 === 7))
{var inst_323075 = (state_323080[2]);var state_323080__$1 = (function (){var statearr_323089 = state_323080;(statearr_323089[8] = inst_323075);
return statearr_323089;
})();var statearr_323090_323108 = state_323080__$1;(statearr_323090_323108[2] = null);
(statearr_323090_323108[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_323081 === 8))
{var inst_323063 = (state_323080[7]);var inst_323066 = cljs.core.apply.call(null,f,inst_323063);var state_323080__$1 = state_323080;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_323080__$1,11,out__$1,inst_323066);
} else
{if((state_val_323081 === 9))
{var inst_323063 = (state_323080[7]);var inst_323070 = cljs.core.apply.call(null,f,inst_323063);var state_323080__$1 = state_323080;var statearr_323091_323109 = state_323080__$1;(statearr_323091_323109[2] = inst_323070);
(statearr_323091_323109[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_323081 === 10))
{var inst_323072 = (state_323080[2]);var state_323080__$1 = state_323080;var statearr_323092_323110 = state_323080__$1;(statearr_323092_323110[2] = inst_323072);
(statearr_323092_323110[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_323081 === 11))
{var inst_323068 = (state_323080[2]);var state_323080__$1 = state_323080;var statearr_323093_323111 = state_323080__$1;(statearr_323093_323111[2] = inst_323068);
(statearr_323093_323111[1] = 10);
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
});return ((function (switch__18768__auto__){
return (function() {
var state_machine__18769__auto__ = null;
var state_machine__18769__auto____0 = (function (){var statearr_323097 = (new Array(9));(statearr_323097[0] = state_machine__18769__auto__);
(statearr_323097[1] = 1);
return statearr_323097;
});
var state_machine__18769__auto____1 = (function (state_323080){while(true){
var ret_value__18770__auto__ = (function (){try{while(true){
var result__18771__auto__ = switch__18768__auto__.call(null,state_323080);if(cljs.core.keyword_identical_QMARK_.call(null,result__18771__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18771__auto__;
}
break;
}
}catch (e323098){if((e323098 instanceof Object))
{var ex__18772__auto__ = e323098;var statearr_323099_323112 = state_323080;(statearr_323099_323112[5] = ex__18772__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_323080);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e323098;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18770__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__323113 = state_323080;
state_323080 = G__323113;
continue;
}
} else
{return ret_value__18770__auto__;
}
break;
}
});
state_machine__18769__auto__ = function(state_323080){
switch(arguments.length){
case 0:
return state_machine__18769__auto____0.call(this);
case 1:
return state_machine__18769__auto____1.call(this,state_323080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18769__auto____0;
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18769__auto____1;
return state_machine__18769__auto__;
})()
;})(switch__18768__auto__))
})();var state__18840__auto__ = (function (){var statearr_323100 = f__18839__auto__.call(null);(statearr_323100[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18838__auto___323101);
return statearr_323100;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18840__auto__);
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
foundation.app.test.TwitterAds.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__14382__auto__){var self__ = this;
var this__14382__auto____$1 = this;var h__14236__auto__ = self__.__hash;if(!((h__14236__auto__ == null)))
{return h__14236__auto__;
} else
{var h__14236__auto____$1 = cljs.core.hash_imap.call(null,this__14382__auto____$1);self__.__hash = h__14236__auto____$1;
return h__14236__auto____$1;
}
});
foundation.app.test.TwitterAds.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__14387__auto__,k__14388__auto__){var self__ = this;
var this__14387__auto____$1 = this;return cljs.core._lookup.call(null,this__14387__auto____$1,k__14388__auto__,null);
});
foundation.app.test.TwitterAds.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__14389__auto__,k323115,else__14390__auto__){var self__ = this;
var this__14389__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k323115,new cljs.core.Keyword(null,"app","app",1014001043)))
{return self__.app;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k323115,new cljs.core.Keyword(null,"app-model","app-model",1419288559)))
{return self__.app_model;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k323115,new cljs.core.Keyword(null,"procs","procs",1120844623)))
{return self__.procs;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k323115,else__14390__auto__);
} else
{return null;
}
}
}
}
});
foundation.app.test.TwitterAds.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__14394__auto__,k__14395__auto__,G__323114){var self__ = this;
var this__14394__auto____$1 = this;var pred__323117 = cljs.core.keyword_identical_QMARK_;var expr__323118 = k__14395__auto__;if(cljs.core.truth_(pred__323117.call(null,new cljs.core.Keyword(null,"app","app",1014001043),expr__323118)))
{return (new foundation.app.test.TwitterAds(G__323114,self__.app_model,self__.procs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__323117.call(null,new cljs.core.Keyword(null,"app-model","app-model",1419288559),expr__323118)))
{return (new foundation.app.test.TwitterAds(self__.app,G__323114,self__.procs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__323117.call(null,new cljs.core.Keyword(null,"procs","procs",1120844623),expr__323118)))
{return (new foundation.app.test.TwitterAds(self__.app,self__.app_model,G__323114,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.test.TwitterAds(self__.app,self__.app_model,self__.procs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__14395__auto__,G__323114),null));
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
foundation.app.test.TwitterAds.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__14401__auto__,writer__14402__auto__,opts__14403__auto__){var self__ = this;
var this__14401__auto____$1 = this;var pr_pair__14404__auto__ = (function (keyval__14405__auto__){return cljs.core.pr_sequential_writer.call(null,writer__14402__auto__,cljs.core.pr_writer,""," ","",opts__14403__auto__,keyval__14405__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__14402__auto__,pr_pair__14404__auto__,"#foundation.app.test.TwitterAds{",", ","}",opts__14403__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app","app",1014001043),self__.app],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-model","app-model",1419288559),self__.app_model],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"procs","procs",1120844623),self__.procs],null))], null),self__.__extmap));
});
foundation.app.test.TwitterAds.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__14392__auto__,entry__14393__auto__){var self__ = this;
var this__14392__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__14393__auto__))
{return cljs.core._assoc.call(null,this__14392__auto____$1,cljs.core._nth.call(null,entry__14393__auto__,0),cljs.core._nth.call(null,entry__14393__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__14392__auto____$1,entry__14393__auto__);
}
});
foundation.app.test.TwitterAds.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__14399__auto__){var self__ = this;
var this__14399__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app","app",1014001043),self__.app],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-model","app-model",1419288559),self__.app_model],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"procs","procs",1120844623),self__.procs],null))], null),self__.__extmap));
});
foundation.app.test.TwitterAds.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__14391__auto__){var self__ = this;
var this__14391__auto____$1 = this;return (3 + cljs.core.count.call(null,self__.__extmap));
});
foundation.app.test.TwitterAds.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__14383__auto__,other__14384__auto__){var self__ = this;
var this__14383__auto____$1 = this;if(cljs.core.truth_((function (){var and__13813__auto__ = other__14384__auto__;if(cljs.core.truth_(and__13813__auto__))
{return ((this__14383__auto____$1.constructor === other__14384__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__14383__auto____$1,other__14384__auto__));
} else
{return and__13813__auto__;
}
})()))
{return true;
} else
{return false;
}
});
foundation.app.test.TwitterAds.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__14386__auto__,G__323114){var self__ = this;
var this__14386__auto____$1 = this;return (new foundation.app.test.TwitterAds(self__.app,self__.app_model,self__.procs,G__323114,self__.__extmap,self__.__hash));
});
foundation.app.test.TwitterAds.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__14385__auto__){var self__ = this;
var this__14385__auto____$1 = this;return self__.__meta;
});
foundation.app.test.TwitterAds.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__14396__auto__,k__14397__auto__){var self__ = this;
var this__14396__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"procs","procs",1120844623),null,new cljs.core.Keyword(null,"app","app",1014001043),null,new cljs.core.Keyword(null,"app-model","app-model",1419288559),null], null), null),k__14397__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__14396__auto____$1),self__.__meta),k__14397__auto__);
} else
{return (new foundation.app.test.TwitterAds(self__.app,self__.app_model,self__.procs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__14397__auto__)),null));
}
});
foundation.app.test.TwitterAds.cljs$lang$type = true;
foundation.app.test.TwitterAds.cljs$lang$ctorPrSeq = (function (this__14421__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"foundation.app.test/TwitterAds");
});
foundation.app.test.TwitterAds.cljs$lang$ctorPrWriter = (function (this__14421__auto__,writer__14422__auto__){return cljs.core._write.call(null,writer__14422__auto__,"foundation.app.test/TwitterAds");
});
foundation.app.test.__GT_TwitterAds = (function __GT_TwitterAds(app,app_model,procs){return (new foundation.app.test.TwitterAds(app,app_model,procs));
});
foundation.app.test.map__GT_TwitterAds = (function map__GT_TwitterAds(G__323116){return (new foundation.app.test.TwitterAds(new cljs.core.Keyword(null,"app","app",1014001043).cljs$core$IFn$_invoke$arity$1(G__323116),new cljs.core.Keyword(null,"app-model","app-model",1419288559).cljs$core$IFn$_invoke$arity$1(G__323116),new cljs.core.Keyword(null,"procs","procs",1120844623).cljs$core$IFn$_invoke$arity$1(G__323116),null,cljs.core.dissoc.call(null,G__323116,new cljs.core.Keyword(null,"app","app",1014001043),new cljs.core.Keyword(null,"app-model","app-model",1419288559),new cljs.core.Keyword(null,"procs","procs",1120844623))));
});
foundation.app.test._main = (function _main(){var map__323121 = foundation.app.create_app.call(null,"content");var map__323121__$1 = ((cljs.core.seq_QMARK_.call(null,map__323121))?cljs.core.apply.call(null,cljs.core.hash_map,map__323121):map__323121);var app_model = cljs.core.get.call(null,map__323121__$1,new cljs.core.Keyword(null,"app-model","app-model",1419288559));var app = cljs.core.get.call(null,map__323121__$1,new cljs.core.Keyword(null,"app","app",1014001043));var app__$1 = (new foundation.app.test.TwitterAds(app,app_model,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)));return foundation.app.data.component.start.call(null,app__$1);
});
goog.exportSymbol('foundation.app.test._main', foundation.app.test._main);

//# sourceMappingURL=test.js.map