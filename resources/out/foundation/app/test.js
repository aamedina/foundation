// Compiled by ClojureScript 0.0-2120
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
});var in$ = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,32));var out__$1 = out;var c__18289__auto___353012 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_352991){var state_val_352992 = (state_352991[1]);if((state_val_352992 === 1))
{var state_352991__$1 = state_352991;var statearr_352993_353013 = state_352991__$1;(statearr_352993_353013[2] = null);
(statearr_352993_353013[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_352992 === 2))
{var state_352991__$1 = state_352991;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_352991__$1,4,in$);
} else
{if((state_val_352992 === 3))
{var inst_352989 = (state_352991[2]);var state_352991__$1 = state_352991;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_352991__$1,inst_352989);
} else
{if((state_val_352992 === 4))
{var inst_352974 = (state_352991[7]);var inst_352973 = (state_352991[2]);var inst_352974__$1 = make_argv.call(null,inst_352973);var state_352991__$1 = (function (){var statearr_352994 = state_352991;(statearr_352994[7] = inst_352974__$1);
return statearr_352994;
})();if(cljs.core.truth_(inst_352974__$1))
{var statearr_352995_353014 = state_352991__$1;(statearr_352995_353014[1] = 5);
} else
{var statearr_352996_353015 = state_352991__$1;(statearr_352996_353015[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_352992 === 5))
{var state_352991__$1 = state_352991;if(cljs.core.truth_(out__$1))
{var statearr_352997_353016 = state_352991__$1;(statearr_352997_353016[1] = 8);
} else
{var statearr_352998_353017 = state_352991__$1;(statearr_352998_353017[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_352992 === 6))
{var state_352991__$1 = state_352991;var statearr_352999_353018 = state_352991__$1;(statearr_352999_353018[2] = null);
(statearr_352999_353018[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_352992 === 7))
{var inst_352986 = (state_352991[2]);var state_352991__$1 = (function (){var statearr_353000 = state_352991;(statearr_353000[8] = inst_352986);
return statearr_353000;
})();var statearr_353001_353019 = state_352991__$1;(statearr_353001_353019[2] = null);
(statearr_353001_353019[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_352992 === 8))
{var inst_352974 = (state_352991[7]);var inst_352977 = cljs.core.apply.call(null,f,inst_352974);var state_352991__$1 = state_352991;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_352991__$1,11,out__$1,inst_352977);
} else
{if((state_val_352992 === 9))
{var inst_352974 = (state_352991[7]);var inst_352981 = cljs.core.apply.call(null,f,inst_352974);var state_352991__$1 = state_352991;var statearr_353002_353020 = state_352991__$1;(statearr_353002_353020[2] = inst_352981);
(statearr_353002_353020[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_352992 === 10))
{var inst_352983 = (state_352991[2]);var state_352991__$1 = state_352991;var statearr_353003_353021 = state_352991__$1;(statearr_353003_353021[2] = inst_352983);
(statearr_353003_353021[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_352992 === 11))
{var inst_352979 = (state_352991[2]);var state_352991__$1 = state_352991;var statearr_353004_353022 = state_352991__$1;(statearr_353004_353022[2] = inst_352979);
(statearr_353004_353022[1] = 10);
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
});return ((function (switch__18219__auto__){
return (function() {
var state_machine__18220__auto__ = null;
var state_machine__18220__auto____0 = (function (){var statearr_353008 = [null,null,null,null,null,null,null,null,null];(statearr_353008[0] = state_machine__18220__auto__);
(statearr_353008[1] = 1);
return statearr_353008;
});
var state_machine__18220__auto____1 = (function (state_352991){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_352991);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e353009){if((e353009 instanceof Object))
{var ex__18223__auto__ = e353009;var statearr_353010_353023 = state_352991;(statearr_353010_353023[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_352991);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e353009;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__353024 = state_352991;
state_352991 = G__353024;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_352991){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_352991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_353011 = f__18290__auto__.call(null);(statearr_353011[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto___353012);
return statearr_353011;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18291__auto__);
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
foundation.app.test.TwitterAds.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__14541__auto__){var self__ = this;
var this__14541__auto____$1 = this;var h__14395__auto__ = self__.__hash;if(!((h__14395__auto__ == null)))
{return h__14395__auto__;
} else
{var h__14395__auto____$1 = cljs.core.hash_imap.call(null,this__14541__auto____$1);self__.__hash = h__14395__auto____$1;
return h__14395__auto____$1;
}
});
foundation.app.test.TwitterAds.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__14546__auto__,k__14547__auto__){var self__ = this;
var this__14546__auto____$1 = this;return cljs.core._lookup.call(null,this__14546__auto____$1,k__14547__auto__,null);
});
foundation.app.test.TwitterAds.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__14548__auto__,k353026,else__14549__auto__){var self__ = this;
var this__14548__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k353026,new cljs.core.Keyword(null,"app","app",1014001043)))
{return self__.app;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k353026,new cljs.core.Keyword(null,"app-model","app-model",1419288559)))
{return self__.app_model;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k353026,new cljs.core.Keyword(null,"procs","procs",1120844623)))
{return self__.procs;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k353026,else__14549__auto__);
} else
{return null;
}
}
}
}
});
foundation.app.test.TwitterAds.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__14553__auto__,k__14554__auto__,G__353025){var self__ = this;
var this__14553__auto____$1 = this;var pred__353028 = cljs.core.keyword_identical_QMARK_;var expr__353029 = k__14554__auto__;if(cljs.core.truth_(pred__353028.call(null,new cljs.core.Keyword(null,"app","app",1014001043),expr__353029)))
{return (new foundation.app.test.TwitterAds(G__353025,self__.app_model,self__.procs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__353028.call(null,new cljs.core.Keyword(null,"app-model","app-model",1419288559),expr__353029)))
{return (new foundation.app.test.TwitterAds(self__.app,G__353025,self__.procs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__353028.call(null,new cljs.core.Keyword(null,"procs","procs",1120844623),expr__353029)))
{return (new foundation.app.test.TwitterAds(self__.app,self__.app_model,G__353025,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.test.TwitterAds(self__.app,self__.app_model,self__.procs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__14554__auto__,G__353025),null));
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
foundation.app.test.TwitterAds.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__14560__auto__,writer__14561__auto__,opts__14562__auto__){var self__ = this;
var this__14560__auto____$1 = this;var pr_pair__14563__auto__ = (function (keyval__14564__auto__){return cljs.core.pr_sequential_writer.call(null,writer__14561__auto__,cljs.core.pr_writer,""," ","",opts__14562__auto__,keyval__14564__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__14561__auto__,pr_pair__14563__auto__,"#foundation.app.test.TwitterAds{",", ","}",opts__14562__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app","app",1014001043),self__.app],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-model","app-model",1419288559),self__.app_model],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"procs","procs",1120844623),self__.procs],null))], null),self__.__extmap));
});
foundation.app.test.TwitterAds.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__14551__auto__,entry__14552__auto__){var self__ = this;
var this__14551__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__14552__auto__))
{return cljs.core._assoc.call(null,this__14551__auto____$1,cljs.core._nth.call(null,entry__14552__auto__,0),cljs.core._nth.call(null,entry__14552__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__14551__auto____$1,entry__14552__auto__);
}
});
foundation.app.test.TwitterAds.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__14558__auto__){var self__ = this;
var this__14558__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app","app",1014001043),self__.app],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-model","app-model",1419288559),self__.app_model],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"procs","procs",1120844623),self__.procs],null))], null),self__.__extmap));
});
foundation.app.test.TwitterAds.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__14550__auto__){var self__ = this;
var this__14550__auto____$1 = this;return (3 + cljs.core.count.call(null,self__.__extmap));
});
foundation.app.test.TwitterAds.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__14542__auto__,other__14543__auto__){var self__ = this;
var this__14542__auto____$1 = this;if(cljs.core.truth_((function (){var and__13967__auto__ = other__14543__auto__;if(cljs.core.truth_(and__13967__auto__))
{return ((this__14542__auto____$1.constructor === other__14543__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__14542__auto____$1,other__14543__auto__));
} else
{return and__13967__auto__;
}
})()))
{return true;
} else
{return false;
}
});
foundation.app.test.TwitterAds.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__14545__auto__,G__353025){var self__ = this;
var this__14545__auto____$1 = this;return (new foundation.app.test.TwitterAds(self__.app,self__.app_model,self__.procs,G__353025,self__.__extmap,self__.__hash));
});
foundation.app.test.TwitterAds.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__14544__auto__){var self__ = this;
var this__14544__auto____$1 = this;return self__.__meta;
});
foundation.app.test.TwitterAds.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__14555__auto__,k__14556__auto__){var self__ = this;
var this__14555__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"procs","procs",1120844623),null,new cljs.core.Keyword(null,"app","app",1014001043),null,new cljs.core.Keyword(null,"app-model","app-model",1419288559),null], null), null),k__14556__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__14555__auto____$1),self__.__meta),k__14556__auto__);
} else
{return (new foundation.app.test.TwitterAds(self__.app,self__.app_model,self__.procs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__14556__auto__)),null));
}
});
foundation.app.test.TwitterAds.cljs$lang$type = true;
foundation.app.test.TwitterAds.cljs$lang$ctorPrSeq = (function (this__14580__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"foundation.app.test/TwitterAds");
});
foundation.app.test.TwitterAds.cljs$lang$ctorPrWriter = (function (this__14580__auto__,writer__14581__auto__){return cljs.core._write.call(null,writer__14581__auto__,"foundation.app.test/TwitterAds");
});
foundation.app.test.__GT_TwitterAds = (function __GT_TwitterAds(app,app_model,procs){return (new foundation.app.test.TwitterAds(app,app_model,procs));
});
foundation.app.test.map__GT_TwitterAds = (function map__GT_TwitterAds(G__353027){return (new foundation.app.test.TwitterAds(new cljs.core.Keyword(null,"app","app",1014001043).cljs$core$IFn$_invoke$arity$1(G__353027),new cljs.core.Keyword(null,"app-model","app-model",1419288559).cljs$core$IFn$_invoke$arity$1(G__353027),new cljs.core.Keyword(null,"procs","procs",1120844623).cljs$core$IFn$_invoke$arity$1(G__353027),null,cljs.core.dissoc.call(null,G__353027,new cljs.core.Keyword(null,"app","app",1014001043),new cljs.core.Keyword(null,"app-model","app-model",1419288559),new cljs.core.Keyword(null,"procs","procs",1120844623))));
});
foundation.app.test._main = (function _main(){var map__353032 = foundation.app.create_app.call(null,"content");var map__353032__$1 = ((cljs.core.seq_QMARK_.call(null,map__353032))?cljs.core.apply.call(null,cljs.core.hash_map,map__353032):map__353032);var app_model = cljs.core.get.call(null,map__353032__$1,new cljs.core.Keyword(null,"app-model","app-model",1419288559));var app = cljs.core.get.call(null,map__353032__$1,new cljs.core.Keyword(null,"app","app",1014001043));var app__$1 = (new foundation.app.test.TwitterAds(app,app_model,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)));return foundation.app.data.component.start.call(null,app__$1);
});
goog.exportSymbol('foundation.app.test._main', foundation.app.test._main);

//# sourceMappingURL=test.js.map