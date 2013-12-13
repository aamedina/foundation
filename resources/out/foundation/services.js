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
cljs.core._add_method.call(null,foundation.app.effect,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init","init",1017141378),cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null)], true),cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null)], true),new cljs.core.Keyword(null,"vals","vals",1017516260)], null),(function (message,input_queue,input){var c__18838__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18839__auto__ = (function (){var switch__18768__auto__ = (function (state_315384){var state_val_315385 = (state_315384[1]);if((state_val_315385 === 4))
{var inst_315382 = (state_315384[2]);var state_315384__$1 = state_315384;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_315384__$1,inst_315382);
} else
{if((state_val_315385 === 3))
{var inst_315367 = (state_315384[7]);var inst_315368 = (state_315384[8]);var inst_315375 = (state_315384[2]);var inst_315376 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"account","account",4131552671),new cljs.core.Keyword(null,"collection","collection",3567559184),new cljs.core.Keyword(null,"resource","resource",672839552)];var inst_315377 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)];var inst_315378 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_315377,null));var inst_315379 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_315378,inst_315368,inst_315367,foundation.models.accounts];var inst_315380 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_315376,inst_315379);var state_315384__$1 = (function (){var statearr_315386 = state_315384;(statearr_315386[9] = inst_315375);
return statearr_315386;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_315384__$1,4,input_queue,inst_315380);
} else
{if((state_val_315385 === 2))
{var inst_315367 = (state_315384[7]);var inst_315368 = (state_315384[8]);var inst_315367__$1 = (state_315384[2]);var inst_315368__$1 = cljs.core.first.call(null,inst_315367__$1);var inst_315369 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"model","model",1117974171),new cljs.core.Keyword(null,"account","account",4131552671),new cljs.core.Keyword(null,"stats-model","stats-model",651400173)];var inst_315370 = [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)];var inst_315371 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_315370,null));var inst_315372 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_315371,inst_315368__$1,inst_315368__$1,foundation.models.account_stats];var inst_315373 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_315369,inst_315372);var state_315384__$1 = (function (){var statearr_315387 = state_315384;(statearr_315387[7] = inst_315367__$1);
(statearr_315387[8] = inst_315368__$1);
return statearr_315387;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_315384__$1,3,input_queue,inst_315373);
} else
{if((state_val_315385 === 1))
{var inst_315365 = foundation.app.models.fetch.call(null,foundation.models.accounts);var state_315384__$1 = state_315384;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_315384__$1,2,inst_315365);
} else
{return null;
}
}
}
}
});return ((function (switch__18768__auto__){
return (function() {
var state_machine__18769__auto__ = null;
var state_machine__18769__auto____0 = (function (){var statearr_315391 = (new Array(10));(statearr_315391[0] = state_machine__18769__auto__);
(statearr_315391[1] = 1);
return statearr_315391;
});
var state_machine__18769__auto____1 = (function (state_315384){while(true){
var ret_value__18770__auto__ = (function (){try{while(true){
var result__18771__auto__ = switch__18768__auto__.call(null,state_315384);if(cljs.core.keyword_identical_QMARK_.call(null,result__18771__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18771__auto__;
}
break;
}
}catch (e315392){if((e315392 instanceof Object))
{var ex__18772__auto__ = e315392;var statearr_315393_315395 = state_315384;(statearr_315393_315395[5] = ex__18772__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_315384);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e315392;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18770__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__315396 = state_315384;
state_315384 = G__315396;
continue;
}
} else
{return ret_value__18770__auto__;
}
break;
}
});
state_machine__18769__auto__ = function(state_315384){
switch(arguments.length){
case 0:
return state_machine__18769__auto____0.call(this);
case 1:
return state_machine__18769__auto____1.call(this,state_315384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18769__auto____0;
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18769__auto____1;
return state_machine__18769__auto__;
})()
;})(switch__18768__auto__))
})();var state__18840__auto__ = (function (){var statearr_315394 = f__18839__auto__.call(null);(statearr_315394[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18838__auto__);
return statearr_315394;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18840__auto__);
}));
return c__18838__auto__;
}));
cljs.core._add_method.call(null,foundation.app.effect,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load","load",1017231448),cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null)], true),cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952),new cljs.core.Keyword(null,"stats","stats",1123661841)], null)], true),new cljs.core.Keyword(null,"single-val","single-val",1926385550)], null),(function (message,input_queue,input){var c__18838__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18839__auto__ = (function (){var switch__18768__auto__ = (function (state_315416){var state_val_315417 = (state_315416[1]);if((state_val_315417 === 5))
{var inst_315414 = (state_315416[2]);var state_315416__$1 = state_315416;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_315416__$1,inst_315414);
} else
{if((state_val_315417 === 4))
{var state_315416__$1 = state_315416;var statearr_315418_315430 = state_315416__$1;(statearr_315418_315430[2] = null);
(statearr_315418_315430[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315417 === 3))
{var inst_315404 = (state_315416[7]);var inst_315406 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"stats","stats",1123661841)];var inst_315407 = [new cljs.core.Keyword(null,"chart","chart",1108527952)];var inst_315408 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_315407,null));var inst_315409 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_315408,inst_315404];var inst_315410 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_315406,inst_315409);var inst_315411 = cljs.core.async.put_BANG_.call(null,input_queue,inst_315410);var state_315416__$1 = state_315416;var statearr_315419_315431 = state_315416__$1;(statearr_315419_315431[2] = inst_315411);
(statearr_315419_315431[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315417 === 2))
{var inst_315404 = (state_315416[7]);var inst_315404__$1 = (state_315416[2]);var state_315416__$1 = (function (){var statearr_315420 = state_315416;(statearr_315420[7] = inst_315404__$1);
return statearr_315420;
})();if(cljs.core.truth_(inst_315404__$1))
{var statearr_315421_315432 = state_315416__$1;(statearr_315421_315432[1] = 3);
} else
{var statearr_315422_315433 = state_315416__$1;(statearr_315422_315433[1] = 4);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_315417 === 1))
{var inst_315397 = new cljs.core.Keyword(null,"stats-model","stats-model",651400173).cljs$core$IFn$_invoke$arity$1(input);var inst_315398 = new cljs.core.Keyword(null,"model","model",1117974171).cljs$core$IFn$_invoke$arity$1(input);var inst_315399 = [new cljs.core.Keyword(null,"start-time","start-time",3689550026),new cljs.core.Keyword(null,"end-time","end-time",2693279729)];var inst_315400 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_315399,null));var inst_315401 = cljs.core.select_keys.call(null,input,inst_315400);var inst_315402 = foundation.app.models.fetch.call(null,inst_315397,new cljs.core.Keyword(null,"params","params",4313443576),inst_315398,new cljs.core.Keyword(null,"query-params","query-params",1080249757),inst_315401);var state_315416__$1 = state_315416;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_315416__$1,2,inst_315402);
} else
{return null;
}
}
}
}
}
});return ((function (switch__18768__auto__){
return (function() {
var state_machine__18769__auto__ = null;
var state_machine__18769__auto____0 = (function (){var statearr_315426 = (new Array(8));(statearr_315426[0] = state_machine__18769__auto__);
(statearr_315426[1] = 1);
return statearr_315426;
});
var state_machine__18769__auto____1 = (function (state_315416){while(true){
var ret_value__18770__auto__ = (function (){try{while(true){
var result__18771__auto__ = switch__18768__auto__.call(null,state_315416);if(cljs.core.keyword_identical_QMARK_.call(null,result__18771__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18771__auto__;
}
break;
}
}catch (e315427){if((e315427 instanceof Object))
{var ex__18772__auto__ = e315427;var statearr_315428_315434 = state_315416;(statearr_315428_315434[5] = ex__18772__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_315416);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e315427;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18770__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__315435 = state_315416;
state_315416 = G__315435;
continue;
}
} else
{return ret_value__18770__auto__;
}
break;
}
});
state_machine__18769__auto__ = function(state_315416){
switch(arguments.length){
case 0:
return state_machine__18769__auto____0.call(this);
case 1:
return state_machine__18769__auto____1.call(this,state_315416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18769__auto____0;
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18769__auto____1;
return state_machine__18769__auto__;
})()
;})(switch__18768__auto__))
})();var state__18840__auto__ = (function (){var statearr_315429 = f__18839__auto__.call(null);(statearr_315429[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18838__auto__);
return statearr_315429;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18840__auto__);
}));
return c__18838__auto__;
}));

//# sourceMappingURL=services.js.map