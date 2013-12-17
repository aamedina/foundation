// Compiled by ClojureScript 0.0-2120
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
cljs.core._add_method.call(null,foundation.app.effect,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init","init",1017141378),cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null)], true),new cljs.core.Keyword(null,"vals","vals",1017516260)], null),(function (message,input_queue,input){var c__18264__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18265__auto__ = (function (){var switch__18194__auto__ = (function (state_39524){var state_val_39525 = (state_39524[1]);if((state_val_39525 === 4))
{var inst_39522 = (state_39524[2]);var state_39524__$1 = state_39524;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39524__$1,inst_39522);
} else
{if((state_val_39525 === 3))
{var inst_39505 = (state_39524[7]);var inst_39506 = (state_39524[8]);var inst_39515 = (state_39524[2]);var inst_39516 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"account","account",4131552671),new cljs.core.Keyword(null,"collection","collection",3567559184),new cljs.core.Keyword(null,"resource","resource",672839552)];var inst_39517 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)];var inst_39518 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_39517,null));var inst_39519 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_39518,inst_39506,inst_39505,foundation.models.accounts];var inst_39520 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_39516,inst_39519);var state_39524__$1 = (function (){var statearr_39526 = state_39524;(statearr_39526[9] = inst_39515);
return statearr_39526;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39524__$1,4,input_queue,inst_39520);
} else
{if((state_val_39525 === 2))
{var inst_39505 = (state_39524[7]);var inst_39506 = (state_39524[8]);var inst_39504 = (state_39524[2]);var inst_39505__$1 = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"name","name",1017277949),inst_39504);var inst_39506__$1 = cljs.core.first.call(null,inst_39505__$1);var inst_39507 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"model","model",1117974171),new cljs.core.Keyword(null,"account","account",4131552671),new cljs.core.Keyword(null,"stats-model","stats-model",651400173),new cljs.core.Keyword(null,"granularity","granularity",2833735872),new cljs.core.Keyword(null,"metrics","metrics",1969730613)];var inst_39508 = [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)];var inst_39509 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_39508,null));var inst_39510 = foundation.models.metrics.call(null,foundation.models.accounts);var inst_39511 = cljs.core.get.call(null,inst_39510,"Impressions");var inst_39512 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_39509,inst_39506__$1,inst_39506__$1,foundation.models.account_stats,"HOUR",inst_39511];var inst_39513 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_39507,inst_39512);var state_39524__$1 = (function (){var statearr_39527 = state_39524;(statearr_39527[7] = inst_39505__$1);
(statearr_39527[8] = inst_39506__$1);
return statearr_39527;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39524__$1,3,input_queue,inst_39513);
} else
{if((state_val_39525 === 1))
{var inst_39502 = foundation.app.xhr.GET.call(null,"http://192.241.130.213:8080/user/15/ads-api/bootstrap");var state_39524__$1 = state_39524;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39524__$1,2,inst_39502);
} else
{return null;
}
}
}
}
});return ((function (switch__18194__auto__){
return (function() {
var state_machine__18195__auto__ = null;
var state_machine__18195__auto____0 = (function (){var statearr_39531 = [null,null,null,null,null,null,null,null,null,null];(statearr_39531[0] = state_machine__18195__auto__);
(statearr_39531[1] = 1);
return statearr_39531;
});
var state_machine__18195__auto____1 = (function (state_39524){while(true){
var ret_value__18196__auto__ = (function (){try{while(true){
var result__18197__auto__ = switch__18194__auto__.call(null,state_39524);if(cljs.core.keyword_identical_QMARK_.call(null,result__18197__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18197__auto__;
}
break;
}
}catch (e39532){if((e39532 instanceof Object))
{var ex__18198__auto__ = e39532;var statearr_39533_39535 = state_39524;(statearr_39533_39535[5] = ex__18198__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39524);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e39532;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18196__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__39536 = state_39524;
state_39524 = G__39536;
continue;
}
} else
{return ret_value__18196__auto__;
}
break;
}
});
state_machine__18195__auto__ = function(state_39524){
switch(arguments.length){
case 0:
return state_machine__18195__auto____0.call(this);
case 1:
return state_machine__18195__auto____1.call(this,state_39524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18195__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18195__auto____0;
state_machine__18195__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18195__auto____1;
return state_machine__18195__auto__;
})()
;})(switch__18194__auto__))
})();var state__18266__auto__ = (function (){var statearr_39534 = f__18265__auto__.call(null);(statearr_39534[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18264__auto__);
return statearr_39534;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18266__auto__);
}));
return c__18264__auto__;
}));
cljs.core._add_method.call(null,foundation.app.effect,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load","load",1017231448),cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null)], true),new cljs.core.Keyword(null,"single-val","single-val",1926385550)], null),(function (message,input_queue,input){var c__18264__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18265__auto__ = (function (){var switch__18194__auto__ = (function (state_39569){var state_val_39570 = (state_39569[1]);if((state_val_39570 === 5))
{var inst_39567 = (state_39569[2]);var state_39569__$1 = state_39569;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39569__$1,inst_39567);
} else
{if((state_val_39570 === 4))
{var inst_39544 = (state_39569[7]);var inst_39560 = (state_39569[2]);var inst_39561 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"stats","stats",1123661841)];var inst_39562 = [new cljs.core.Keyword(null,"chart","chart",1108527952)];var inst_39563 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_39562,null));var inst_39564 = [new cljs.core.Keyword(null,"stats","stats",1123661841),inst_39563,inst_39544];var inst_39565 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_39561,inst_39564);var state_39569__$1 = (function (){var statearr_39571 = state_39569;(statearr_39571[8] = inst_39560);
return statearr_39571;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39569__$1,5,input_queue,inst_39565);
} else
{if((state_val_39570 === 3))
{var inst_39553 = (state_39569[2]);var inst_39554 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"stats","stats",1123661841)];var inst_39555 = [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)];var inst_39556 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_39555,null));var inst_39557 = [new cljs.core.Keyword(null,"stats","stats",1123661841),inst_39556,inst_39553];var inst_39558 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_39554,inst_39557);var state_39569__$1 = state_39569;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39569__$1,4,input_queue,inst_39558);
} else
{if((state_val_39570 === 2))
{var inst_39544 = (state_39569[2]);var inst_39545 = new cljs.core.Keyword(null,"stats-model","stats-model",651400173).cljs$core$IFn$_invoke$arity$1(input);var inst_39546 = new cljs.core.Keyword(null,"model","model",1117974171).cljs$core$IFn$_invoke$arity$1(input);var inst_39547 = [new cljs.core.Keyword(null,"start-time","start-time",3689550026),new cljs.core.Keyword(null,"end-time","end-time",2693279729)];var inst_39548 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_39547,null));var inst_39549 = cljs.core.select_keys.call(null,input,inst_39548);var inst_39550 = cljs.core.assoc.call(null,inst_39549,new cljs.core.Keyword(null,"granularity","granularity",2833735872),"TOTAL");var inst_39551 = foundation.app.models.fetch.call(null,inst_39545,new cljs.core.Keyword(null,"params","params",4313443576),inst_39546,new cljs.core.Keyword(null,"query-params","query-params",1080249757),inst_39550);var state_39569__$1 = (function (){var statearr_39572 = state_39569;(statearr_39572[7] = inst_39544);
return statearr_39572;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39569__$1,3,inst_39551);
} else
{if((state_val_39570 === 1))
{var inst_39537 = new cljs.core.Keyword(null,"stats-model","stats-model",651400173).cljs$core$IFn$_invoke$arity$1(input);var inst_39538 = new cljs.core.Keyword(null,"model","model",1117974171).cljs$core$IFn$_invoke$arity$1(input);var inst_39539 = [new cljs.core.Keyword(null,"start-time","start-time",3689550026),new cljs.core.Keyword(null,"end-time","end-time",2693279729),new cljs.core.Keyword(null,"granularity","granularity",2833735872)];var inst_39540 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_39539,null));var inst_39541 = cljs.core.select_keys.call(null,input,inst_39540);var inst_39542 = foundation.app.models.fetch.call(null,inst_39537,new cljs.core.Keyword(null,"params","params",4313443576),inst_39538,new cljs.core.Keyword(null,"query-params","query-params",1080249757),inst_39541);var state_39569__$1 = state_39569;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39569__$1,2,inst_39542);
} else
{return null;
}
}
}
}
}
});return ((function (switch__18194__auto__){
return (function() {
var state_machine__18195__auto__ = null;
var state_machine__18195__auto____0 = (function (){var statearr_39576 = [null,null,null,null,null,null,null,null,null];(statearr_39576[0] = state_machine__18195__auto__);
(statearr_39576[1] = 1);
return statearr_39576;
});
var state_machine__18195__auto____1 = (function (state_39569){while(true){
var ret_value__18196__auto__ = (function (){try{while(true){
var result__18197__auto__ = switch__18194__auto__.call(null,state_39569);if(cljs.core.keyword_identical_QMARK_.call(null,result__18197__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18197__auto__;
}
break;
}
}catch (e39577){if((e39577 instanceof Object))
{var ex__18198__auto__ = e39577;var statearr_39578_39580 = state_39569;(statearr_39578_39580[5] = ex__18198__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39569);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e39577;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18196__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__39581 = state_39569;
state_39569 = G__39581;
continue;
}
} else
{return ret_value__18196__auto__;
}
break;
}
});
state_machine__18195__auto__ = function(state_39569){
switch(arguments.length){
case 0:
return state_machine__18195__auto____0.call(this);
case 1:
return state_machine__18195__auto____1.call(this,state_39569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18195__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18195__auto____0;
state_machine__18195__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18195__auto____1;
return state_machine__18195__auto__;
})()
;})(switch__18194__auto__))
})();var state__18266__auto__ = (function (){var statearr_39579 = f__18265__auto__.call(null);(statearr_39579[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18264__auto__);
return statearr_39579;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18266__auto__);
}));
return c__18264__auto__;
}));

//# sourceMappingURL=services.js.map