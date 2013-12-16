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
cljs.core._add_method.call(null,foundation.app.effect,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init","init",1017141378),cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null)], true),new cljs.core.Keyword(null,"vals","vals",1017516260)], null),(function (message,input_queue,input){var c__18051__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_66430){var state_val_66431 = (state_66430[1]);if((state_val_66431 === 4))
{var inst_66428 = (state_66430[2]);var state_66430__$1 = state_66430;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66430__$1,inst_66428);
} else
{if((state_val_66431 === 3))
{var inst_66412 = (state_66430[7]);var inst_66411 = (state_66430[8]);var inst_66421 = (state_66430[2]);var inst_66422 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"account","account",4131552671),new cljs.core.Keyword(null,"collection","collection",3567559184),new cljs.core.Keyword(null,"resource","resource",672839552)];var inst_66423 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)];var inst_66424 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_66423,null));var inst_66425 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_66424,inst_66412,inst_66411,foundation.models.accounts];var inst_66426 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_66422,inst_66425);var state_66430__$1 = (function (){var statearr_66432 = state_66430;(statearr_66432[9] = inst_66421);
return statearr_66432;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_66430__$1,4,input_queue,inst_66426);
} else
{if((state_val_66431 === 2))
{var inst_66412 = (state_66430[7]);var inst_66411 = (state_66430[8]);var inst_66411__$1 = (state_66430[2]);var inst_66412__$1 = cljs.core.first.call(null,inst_66411__$1);var inst_66413 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"model","model",1117974171),new cljs.core.Keyword(null,"account","account",4131552671),new cljs.core.Keyword(null,"stats-model","stats-model",651400173),new cljs.core.Keyword(null,"granularity","granularity",2833735872),new cljs.core.Keyword(null,"metrics","metrics",1969730613)];var inst_66414 = [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)];var inst_66415 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_66414,null));var inst_66416 = foundation.models.metrics.call(null,foundation.models.accounts);var inst_66417 = cljs.core.get.call(null,inst_66416,"Impressions");var inst_66418 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_66415,inst_66412__$1,inst_66412__$1,foundation.models.account_stats,"HOUR",inst_66417];var inst_66419 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_66413,inst_66418);var state_66430__$1 = (function (){var statearr_66433 = state_66430;(statearr_66433[7] = inst_66412__$1);
(statearr_66433[8] = inst_66411__$1);
return statearr_66433;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_66430__$1,3,input_queue,inst_66419);
} else
{if((state_val_66431 === 1))
{var inst_66409 = foundation.app.models.fetch.call(null,foundation.models.accounts);var state_66430__$1 = state_66430;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66430__$1,2,inst_66409);
} else
{return null;
}
}
}
}
});return ((function (switch__17981__auto__){
return (function() {
var state_machine__17982__auto__ = null;
var state_machine__17982__auto____0 = (function (){var statearr_66437 = (new Array(10));(statearr_66437[0] = state_machine__17982__auto__);
(statearr_66437[1] = 1);
return statearr_66437;
});
var state_machine__17982__auto____1 = (function (state_66430){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_66430);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e66438){if((e66438 instanceof Object))
{var ex__17985__auto__ = e66438;var statearr_66439_66441 = state_66430;(statearr_66439_66441[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66430);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e66438;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__66442 = state_66430;
state_66430 = G__66442;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_66430){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_66430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_66440 = f__18052__auto__.call(null);(statearr_66440[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto__);
return statearr_66440;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18053__auto__);
}));
return c__18051__auto__;
}));
cljs.core._add_method.call(null,foundation.app.effect,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load","load",1017231448),cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null)], true),new cljs.core.Keyword(null,"single-val","single-val",1926385550)], null),(function (message,input_queue,input){var c__18051__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_66475){var state_val_66476 = (state_66475[1]);if((state_val_66476 === 5))
{var inst_66473 = (state_66475[2]);var state_66475__$1 = state_66475;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66475__$1,inst_66473);
} else
{if((state_val_66476 === 4))
{var inst_66450 = (state_66475[7]);var inst_66466 = (state_66475[2]);var inst_66467 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"stats","stats",1123661841)];var inst_66468 = [new cljs.core.Keyword(null,"chart","chart",1108527952)];var inst_66469 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_66468,null));var inst_66470 = [new cljs.core.Keyword(null,"stats","stats",1123661841),inst_66469,inst_66450];var inst_66471 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_66467,inst_66470);var state_66475__$1 = (function (){var statearr_66477 = state_66475;(statearr_66477[8] = inst_66466);
return statearr_66477;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_66475__$1,5,input_queue,inst_66471);
} else
{if((state_val_66476 === 3))
{var inst_66459 = (state_66475[2]);var inst_66460 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"stats","stats",1123661841)];var inst_66461 = [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)];var inst_66462 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_66461,null));var inst_66463 = [new cljs.core.Keyword(null,"stats","stats",1123661841),inst_66462,inst_66459];var inst_66464 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_66460,inst_66463);var state_66475__$1 = state_66475;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_66475__$1,4,input_queue,inst_66464);
} else
{if((state_val_66476 === 2))
{var inst_66450 = (state_66475[2]);var inst_66451 = new cljs.core.Keyword(null,"stats-model","stats-model",651400173).cljs$core$IFn$_invoke$arity$1(input);var inst_66452 = new cljs.core.Keyword(null,"model","model",1117974171).cljs$core$IFn$_invoke$arity$1(input);var inst_66453 = [new cljs.core.Keyword(null,"start-time","start-time",3689550026),new cljs.core.Keyword(null,"end-time","end-time",2693279729)];var inst_66454 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_66453,null));var inst_66455 = cljs.core.select_keys.call(null,input,inst_66454);var inst_66456 = cljs.core.assoc.call(null,inst_66455,new cljs.core.Keyword(null,"granularity","granularity",2833735872),"TOTAL");var inst_66457 = foundation.app.models.fetch.call(null,inst_66451,new cljs.core.Keyword(null,"params","params",4313443576),inst_66452,new cljs.core.Keyword(null,"query-params","query-params",1080249757),inst_66456);var state_66475__$1 = (function (){var statearr_66478 = state_66475;(statearr_66478[7] = inst_66450);
return statearr_66478;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66475__$1,3,inst_66457);
} else
{if((state_val_66476 === 1))
{var inst_66443 = new cljs.core.Keyword(null,"stats-model","stats-model",651400173).cljs$core$IFn$_invoke$arity$1(input);var inst_66444 = new cljs.core.Keyword(null,"model","model",1117974171).cljs$core$IFn$_invoke$arity$1(input);var inst_66445 = [new cljs.core.Keyword(null,"start-time","start-time",3689550026),new cljs.core.Keyword(null,"end-time","end-time",2693279729),new cljs.core.Keyword(null,"granularity","granularity",2833735872)];var inst_66446 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_66445,null));var inst_66447 = cljs.core.select_keys.call(null,input,inst_66446);var inst_66448 = foundation.app.models.fetch.call(null,inst_66443,new cljs.core.Keyword(null,"params","params",4313443576),inst_66444,new cljs.core.Keyword(null,"query-params","query-params",1080249757),inst_66447);var state_66475__$1 = state_66475;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66475__$1,2,inst_66448);
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
var state_machine__17982__auto____0 = (function (){var statearr_66482 = (new Array(9));(statearr_66482[0] = state_machine__17982__auto__);
(statearr_66482[1] = 1);
return statearr_66482;
});
var state_machine__17982__auto____1 = (function (state_66475){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_66475);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e66483){if((e66483 instanceof Object))
{var ex__17985__auto__ = e66483;var statearr_66484_66486 = state_66475;(statearr_66484_66486[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66475);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e66483;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__66487 = state_66475;
state_66475 = G__66487;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_66475){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_66475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_66485 = f__18052__auto__.call(null);(statearr_66485[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto__);
return statearr_66485;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18053__auto__);
}));
return c__18051__auto__;
}));

//# sourceMappingURL=services.js.map