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
cljs.core._add_method.call(null,foundation.app.effect,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init","init",1017141378),cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null)], true),new cljs.core.Keyword(null,"vals","vals",1017516260)], null),(function (message,input_queue,input){var c__18051__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_334451){var state_val_334452 = (state_334451[1]);if((state_val_334452 === 4))
{var inst_334449 = (state_334451[2]);var state_334451__$1 = state_334451;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_334451__$1,inst_334449);
} else
{if((state_val_334452 === 3))
{var inst_334433 = (state_334451[7]);var inst_334432 = (state_334451[8]);var inst_334442 = (state_334451[2]);var inst_334443 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"account","account",4131552671),new cljs.core.Keyword(null,"collection","collection",3567559184),new cljs.core.Keyword(null,"resource","resource",672839552)];var inst_334444 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)];var inst_334445 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_334444,null));var inst_334446 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_334445,inst_334433,inst_334432,foundation.models.accounts];var inst_334447 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_334443,inst_334446);var state_334451__$1 = (function (){var statearr_334453 = state_334451;(statearr_334453[9] = inst_334442);
return statearr_334453;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_334451__$1,4,input_queue,inst_334447);
} else
{if((state_val_334452 === 2))
{var inst_334433 = (state_334451[7]);var inst_334432 = (state_334451[8]);var inst_334431 = (state_334451[2]);var inst_334432__$1 = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"name","name",1017277949),inst_334431);var inst_334433__$1 = cljs.core.first.call(null,inst_334432__$1);var inst_334434 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"model","model",1117974171),new cljs.core.Keyword(null,"account","account",4131552671),new cljs.core.Keyword(null,"stats-model","stats-model",651400173),new cljs.core.Keyword(null,"granularity","granularity",2833735872),new cljs.core.Keyword(null,"metrics","metrics",1969730613)];var inst_334435 = [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)];var inst_334436 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_334435,null));var inst_334437 = foundation.models.metrics.call(null,foundation.models.accounts);var inst_334438 = cljs.core.get.call(null,inst_334437,"Impressions");var inst_334439 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_334436,inst_334433__$1,inst_334433__$1,foundation.models.account_stats,"HOUR",inst_334438];var inst_334440 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_334434,inst_334439);var state_334451__$1 = (function (){var statearr_334454 = state_334451;(statearr_334454[7] = inst_334433__$1);
(statearr_334454[8] = inst_334432__$1);
return statearr_334454;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_334451__$1,3,input_queue,inst_334440);
} else
{if((state_val_334452 === 1))
{var inst_334429 = foundation.app.xhr.GET.call(null,"http://192.241.130.213:8080/user/15/ads-api/bootstrap");var state_334451__$1 = state_334451;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_334451__$1,2,inst_334429);
} else
{return null;
}
}
}
}
});return ((function (switch__17981__auto__){
return (function() {
var state_machine__17982__auto__ = null;
var state_machine__17982__auto____0 = (function (){var statearr_334458 = (new Array(10));(statearr_334458[0] = state_machine__17982__auto__);
(statearr_334458[1] = 1);
return statearr_334458;
});
var state_machine__17982__auto____1 = (function (state_334451){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_334451);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e334459){if((e334459 instanceof Object))
{var ex__17985__auto__ = e334459;var statearr_334460_334462 = state_334451;(statearr_334460_334462[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_334451);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e334459;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__334463 = state_334451;
state_334451 = G__334463;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_334451){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_334451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_334461 = f__18052__auto__.call(null);(statearr_334461[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto__);
return statearr_334461;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18053__auto__);
}));
return c__18051__auto__;
}));
cljs.core._add_method.call(null,foundation.app.effect,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load","load",1017231448),cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null)], true),new cljs.core.Keyword(null,"single-val","single-val",1926385550)], null),(function (message,input_queue,input){var c__18051__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_334496){var state_val_334497 = (state_334496[1]);if((state_val_334497 === 5))
{var inst_334494 = (state_334496[2]);var state_334496__$1 = state_334496;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_334496__$1,inst_334494);
} else
{if((state_val_334497 === 4))
{var inst_334471 = (state_334496[7]);var inst_334487 = (state_334496[2]);var inst_334488 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"stats","stats",1123661841)];var inst_334489 = [new cljs.core.Keyword(null,"chart","chart",1108527952)];var inst_334490 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_334489,null));var inst_334491 = [new cljs.core.Keyword(null,"stats","stats",1123661841),inst_334490,inst_334471];var inst_334492 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_334488,inst_334491);var state_334496__$1 = (function (){var statearr_334498 = state_334496;(statearr_334498[8] = inst_334487);
return statearr_334498;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_334496__$1,5,input_queue,inst_334492);
} else
{if((state_val_334497 === 3))
{var inst_334480 = (state_334496[2]);var inst_334481 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"stats","stats",1123661841)];var inst_334482 = [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)];var inst_334483 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_334482,null));var inst_334484 = [new cljs.core.Keyword(null,"stats","stats",1123661841),inst_334483,inst_334480];var inst_334485 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_334481,inst_334484);var state_334496__$1 = state_334496;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_334496__$1,4,input_queue,inst_334485);
} else
{if((state_val_334497 === 2))
{var inst_334471 = (state_334496[2]);var inst_334472 = new cljs.core.Keyword(null,"stats-model","stats-model",651400173).cljs$core$IFn$_invoke$arity$1(input);var inst_334473 = new cljs.core.Keyword(null,"model","model",1117974171).cljs$core$IFn$_invoke$arity$1(input);var inst_334474 = [new cljs.core.Keyword(null,"start-time","start-time",3689550026),new cljs.core.Keyword(null,"end-time","end-time",2693279729)];var inst_334475 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_334474,null));var inst_334476 = cljs.core.select_keys.call(null,input,inst_334475);var inst_334477 = cljs.core.assoc.call(null,inst_334476,new cljs.core.Keyword(null,"granularity","granularity",2833735872),"TOTAL");var inst_334478 = foundation.app.models.fetch.call(null,inst_334472,new cljs.core.Keyword(null,"params","params",4313443576),inst_334473,new cljs.core.Keyword(null,"query-params","query-params",1080249757),inst_334477);var state_334496__$1 = (function (){var statearr_334499 = state_334496;(statearr_334499[7] = inst_334471);
return statearr_334499;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_334496__$1,3,inst_334478);
} else
{if((state_val_334497 === 1))
{var inst_334464 = new cljs.core.Keyword(null,"stats-model","stats-model",651400173).cljs$core$IFn$_invoke$arity$1(input);var inst_334465 = new cljs.core.Keyword(null,"model","model",1117974171).cljs$core$IFn$_invoke$arity$1(input);var inst_334466 = [new cljs.core.Keyword(null,"start-time","start-time",3689550026),new cljs.core.Keyword(null,"end-time","end-time",2693279729),new cljs.core.Keyword(null,"granularity","granularity",2833735872)];var inst_334467 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_334466,null));var inst_334468 = cljs.core.select_keys.call(null,input,inst_334467);var inst_334469 = foundation.app.models.fetch.call(null,inst_334464,new cljs.core.Keyword(null,"params","params",4313443576),inst_334465,new cljs.core.Keyword(null,"query-params","query-params",1080249757),inst_334468);var state_334496__$1 = state_334496;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_334496__$1,2,inst_334469);
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
var state_machine__17982__auto____0 = (function (){var statearr_334503 = (new Array(9));(statearr_334503[0] = state_machine__17982__auto__);
(statearr_334503[1] = 1);
return statearr_334503;
});
var state_machine__17982__auto____1 = (function (state_334496){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_334496);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e334504){if((e334504 instanceof Object))
{var ex__17985__auto__ = e334504;var statearr_334505_334507 = state_334496;(statearr_334505_334507[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_334496);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e334504;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__334508 = state_334496;
state_334496 = G__334508;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_334496){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_334496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_334506 = f__18052__auto__.call(null);(statearr_334506[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto__);
return statearr_334506;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18053__auto__);
}));
return c__18051__auto__;
}));

//# sourceMappingURL=services.js.map