// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.services');
goog.require('cljs.core');
goog.require('foundation.app');
goog.require('foundation.app.data.dependency');
goog.require('cljs.core.async');
goog.require('clojure.zip');
goog.require('foundation.app');
goog.require('enfocus.events');
goog.require('foundation.app.message');
goog.require('foundation.app.models');
goog.require('enfocus.events');
goog.require('foundation.app.data.component');
goog.require('foundation.behavior');
goog.require('clojure.zip');
goog.require('goog.date');
goog.require('enfocus.core');
goog.require('dommy.core');
goog.require('foundation.rendering');
goog.require('foundation.app.xhr');
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
goog.require('clojure.browser.repl');
goog.require('clojure.set');
goog.require('foundation.app.message');
goog.require('foundation.models');
goog.require('foundation.app.models');
goog.require('cljs.core.async');
goog.require('foundation.app.xhr');
goog.require('foundation.app.util');
goog.require('goog.date');
goog.require('foundation.app.data.dependency');
goog.require('foundation.behavior');
goog.require('dommy.core');
goog.require('foundation.models');
cljs.core._add_method.call(null,foundation.app.effect,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init","init",1017141378),cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null)], true),new cljs.core.Keyword(null,"vals","vals",1017516260)], null),(function (message,input_queue,input){var c__18051__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_325274){var state_val_325275 = (state_325274[1]);if((state_val_325275 === 4))
{var inst_325272 = (state_325274[2]);var state_325274__$1 = state_325274;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_325274__$1,inst_325272);
} else
{if((state_val_325275 === 3))
{var inst_325256 = (state_325274[7]);var inst_325255 = (state_325274[8]);var inst_325265 = (state_325274[2]);var inst_325266 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"account","account",4131552671),new cljs.core.Keyword(null,"collection","collection",3567559184),new cljs.core.Keyword(null,"resource","resource",672839552)];var inst_325267 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)];var inst_325268 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_325267,null));var inst_325269 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_325268,inst_325256,inst_325255,foundation.models.accounts];var inst_325270 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_325266,inst_325269);var state_325274__$1 = (function (){var statearr_325276 = state_325274;(statearr_325276[9] = inst_325265);
return statearr_325276;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_325274__$1,4,input_queue,inst_325270);
} else
{if((state_val_325275 === 2))
{var inst_325256 = (state_325274[7]);var inst_325255 = (state_325274[8]);var inst_325254 = (state_325274[2]);var inst_325255__$1 = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"name","name",1017277949),inst_325254);var inst_325256__$1 = cljs.core.first.call(null,inst_325255__$1);var inst_325257 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"model","model",1117974171),new cljs.core.Keyword(null,"account","account",4131552671),new cljs.core.Keyword(null,"stats-model","stats-model",651400173),new cljs.core.Keyword(null,"granularity","granularity",2833735872),new cljs.core.Keyword(null,"metrics","metrics",1969730613)];var inst_325258 = [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)];var inst_325259 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_325258,null));var inst_325260 = foundation.models.metrics.call(null,foundation.models.accounts);var inst_325261 = cljs.core.get.call(null,inst_325260,"Impressions");var inst_325262 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_325259,inst_325256__$1,inst_325256__$1,foundation.models.account_stats,"HOUR",inst_325261];var inst_325263 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_325257,inst_325262);var state_325274__$1 = (function (){var statearr_325277 = state_325274;(statearr_325277[7] = inst_325256__$1);
(statearr_325277[8] = inst_325255__$1);
return statearr_325277;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_325274__$1,3,input_queue,inst_325263);
} else
{if((state_val_325275 === 1))
{var inst_325252 = foundation.app.xhr.GET.call(null,"http://192.241.130.213:8080/user/15/ads-api/bootstrap");var state_325274__$1 = state_325274;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_325274__$1,2,inst_325252);
} else
{return null;
}
}
}
}
});return ((function (switch__17981__auto__){
return (function() {
var state_machine__17982__auto__ = null;
var state_machine__17982__auto____0 = (function (){var statearr_325281 = (new Array(10));(statearr_325281[0] = state_machine__17982__auto__);
(statearr_325281[1] = 1);
return statearr_325281;
});
var state_machine__17982__auto____1 = (function (state_325274){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_325274);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e325282){if((e325282 instanceof Object))
{var ex__17985__auto__ = e325282;var statearr_325283_325285 = state_325274;(statearr_325283_325285[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_325274);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e325282;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__325286 = state_325274;
state_325274 = G__325286;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_325274){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_325274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_325284 = f__18052__auto__.call(null);(statearr_325284[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto__);
return statearr_325284;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18053__auto__);
}));
return c__18051__auto__;
}));
cljs.core._add_method.call(null,foundation.app.effect,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load","load",1017231448),cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null)], true),new cljs.core.Keyword(null,"single-val","single-val",1926385550)], null),(function (message,input_queue,input){var c__18051__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_325319){var state_val_325320 = (state_325319[1]);if((state_val_325320 === 5))
{var inst_325317 = (state_325319[2]);var state_325319__$1 = state_325319;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_325319__$1,inst_325317);
} else
{if((state_val_325320 === 4))
{var inst_325294 = (state_325319[7]);var inst_325310 = (state_325319[2]);var inst_325311 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"stats","stats",1123661841)];var inst_325312 = [new cljs.core.Keyword(null,"chart","chart",1108527952)];var inst_325313 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_325312,null));var inst_325314 = [new cljs.core.Keyword(null,"stats","stats",1123661841),inst_325313,inst_325294];var inst_325315 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_325311,inst_325314);var state_325319__$1 = (function (){var statearr_325321 = state_325319;(statearr_325321[8] = inst_325310);
return statearr_325321;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_325319__$1,5,input_queue,inst_325315);
} else
{if((state_val_325320 === 3))
{var inst_325303 = (state_325319[2]);var inst_325304 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"stats","stats",1123661841)];var inst_325305 = [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)];var inst_325306 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_325305,null));var inst_325307 = [new cljs.core.Keyword(null,"stats","stats",1123661841),inst_325306,inst_325303];var inst_325308 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_325304,inst_325307);var state_325319__$1 = state_325319;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_325319__$1,4,input_queue,inst_325308);
} else
{if((state_val_325320 === 2))
{var inst_325294 = (state_325319[2]);var inst_325295 = new cljs.core.Keyword(null,"stats-model","stats-model",651400173).cljs$core$IFn$_invoke$arity$1(input);var inst_325296 = new cljs.core.Keyword(null,"model","model",1117974171).cljs$core$IFn$_invoke$arity$1(input);var inst_325297 = [new cljs.core.Keyword(null,"start-time","start-time",3689550026),new cljs.core.Keyword(null,"end-time","end-time",2693279729)];var inst_325298 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_325297,null));var inst_325299 = cljs.core.select_keys.call(null,input,inst_325298);var inst_325300 = cljs.core.assoc.call(null,inst_325299,new cljs.core.Keyword(null,"granularity","granularity",2833735872),"TOTAL");var inst_325301 = foundation.app.models.fetch.call(null,inst_325295,new cljs.core.Keyword(null,"params","params",4313443576),inst_325296,new cljs.core.Keyword(null,"query-params","query-params",1080249757),inst_325300);var state_325319__$1 = (function (){var statearr_325322 = state_325319;(statearr_325322[7] = inst_325294);
return statearr_325322;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_325319__$1,3,inst_325301);
} else
{if((state_val_325320 === 1))
{var inst_325287 = new cljs.core.Keyword(null,"stats-model","stats-model",651400173).cljs$core$IFn$_invoke$arity$1(input);var inst_325288 = new cljs.core.Keyword(null,"model","model",1117974171).cljs$core$IFn$_invoke$arity$1(input);var inst_325289 = [new cljs.core.Keyword(null,"start-time","start-time",3689550026),new cljs.core.Keyword(null,"end-time","end-time",2693279729),new cljs.core.Keyword(null,"granularity","granularity",2833735872)];var inst_325290 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_325289,null));var inst_325291 = cljs.core.select_keys.call(null,input,inst_325290);var inst_325292 = foundation.app.models.fetch.call(null,inst_325287,new cljs.core.Keyword(null,"params","params",4313443576),inst_325288,new cljs.core.Keyword(null,"query-params","query-params",1080249757),inst_325291);var state_325319__$1 = state_325319;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_325319__$1,2,inst_325292);
} else
{return null;
}
}
}
}
}
});return ((function (switch__17981__auto__){
return (function() {
var state_machine__17982__auto__ = null;
var state_machine__17982__auto____0 = (function (){var statearr_325326 = (new Array(9));(statearr_325326[0] = state_machine__17982__auto__);
(statearr_325326[1] = 1);
return statearr_325326;
});
var state_machine__17982__auto____1 = (function (state_325319){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_325319);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e325327){if((e325327 instanceof Object))
{var ex__17985__auto__ = e325327;var statearr_325328_325330 = state_325319;(statearr_325328_325330[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_325319);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e325327;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__325331 = state_325319;
state_325319 = G__325331;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_325319){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_325319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_325329 = f__18052__auto__.call(null);(statearr_325329[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto__);
return statearr_325329;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18053__auto__);
}));
return c__18051__auto__;
}));

//# sourceMappingURL=services.js.map