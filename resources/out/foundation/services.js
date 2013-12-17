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
cljs.core._add_method.call(null,foundation.app.effect,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init","init",1017141378),cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null)], true),new cljs.core.Keyword(null,"vals","vals",1017516260)], null),(function (message,input_queue,input){var c__18289__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_370960){var state_val_370961 = (state_370960[1]);if((state_val_370961 === 4))
{var inst_370958 = (state_370960[2]);var state_370960__$1 = state_370960;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_370960__$1,inst_370958);
} else
{if((state_val_370961 === 3))
{var inst_370941 = (state_370960[7]);var inst_370942 = (state_370960[8]);var inst_370951 = (state_370960[2]);var inst_370952 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"account","account",4131552671),new cljs.core.Keyword(null,"collection","collection",3567559184),new cljs.core.Keyword(null,"resource","resource",672839552)];var inst_370953 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)];var inst_370954 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_370953,null));var inst_370955 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_370954,inst_370942,inst_370941,foundation.models.accounts];var inst_370956 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_370952,inst_370955);var state_370960__$1 = (function (){var statearr_370962 = state_370960;(statearr_370962[9] = inst_370951);
return statearr_370962;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_370960__$1,4,input_queue,inst_370956);
} else
{if((state_val_370961 === 2))
{var inst_370941 = (state_370960[7]);var inst_370942 = (state_370960[8]);var inst_370940 = (state_370960[2]);var inst_370941__$1 = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"name","name",1017277949),inst_370940);var inst_370942__$1 = cljs.core.first.call(null,inst_370941__$1);var inst_370943 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"model","model",1117974171),new cljs.core.Keyword(null,"account","account",4131552671),new cljs.core.Keyword(null,"stats-model","stats-model",651400173),new cljs.core.Keyword(null,"granularity","granularity",2833735872),new cljs.core.Keyword(null,"metrics","metrics",1969730613)];var inst_370944 = [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)];var inst_370945 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_370944,null));var inst_370946 = foundation.models.metrics.call(null,foundation.models.accounts);var inst_370947 = cljs.core.get.call(null,inst_370946,"Impressions");var inst_370948 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_370945,inst_370942__$1,inst_370942__$1,foundation.models.account_stats,"HOUR",inst_370947];var inst_370949 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_370943,inst_370948);var state_370960__$1 = (function (){var statearr_370963 = state_370960;(statearr_370963[7] = inst_370941__$1);
(statearr_370963[8] = inst_370942__$1);
return statearr_370963;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_370960__$1,3,input_queue,inst_370949);
} else
{if((state_val_370961 === 1))
{var inst_370938 = foundation.app.xhr.GET.call(null,"http://192.241.130.213:8080/user/15/ads-api/bootstrap");var state_370960__$1 = state_370960;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_370960__$1,2,inst_370938);
} else
{return null;
}
}
}
}
});return ((function (switch__18219__auto__){
return (function() {
var state_machine__18220__auto__ = null;
var state_machine__18220__auto____0 = (function (){var statearr_370967 = [null,null,null,null,null,null,null,null,null,null];(statearr_370967[0] = state_machine__18220__auto__);
(statearr_370967[1] = 1);
return statearr_370967;
});
var state_machine__18220__auto____1 = (function (state_370960){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_370960);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e370968){if((e370968 instanceof Object))
{var ex__18223__auto__ = e370968;var statearr_370969_370971 = state_370960;(statearr_370969_370971[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_370960);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e370968;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__370972 = state_370960;
state_370960 = G__370972;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_370960){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_370960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_370970 = f__18290__auto__.call(null);(statearr_370970[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto__);
return statearr_370970;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18291__auto__);
}));
return c__18289__auto__;
}));
cljs.core._add_method.call(null,foundation.app.effect,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load","load",1017231448),cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null)], true),new cljs.core.Keyword(null,"single-val","single-val",1926385550)], null),(function (message,input_queue,input){var c__18289__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_371005){var state_val_371006 = (state_371005[1]);if((state_val_371006 === 5))
{var inst_371003 = (state_371005[2]);var state_371005__$1 = state_371005;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_371005__$1,inst_371003);
} else
{if((state_val_371006 === 4))
{var inst_370980 = (state_371005[7]);var inst_370996 = (state_371005[2]);var inst_370997 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"stats","stats",1123661841)];var inst_370998 = [new cljs.core.Keyword(null,"chart","chart",1108527952)];var inst_370999 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_370998,null));var inst_371000 = [new cljs.core.Keyword(null,"stats","stats",1123661841),inst_370999,inst_370980];var inst_371001 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_370997,inst_371000);var state_371005__$1 = (function (){var statearr_371007 = state_371005;(statearr_371007[8] = inst_370996);
return statearr_371007;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_371005__$1,5,input_queue,inst_371001);
} else
{if((state_val_371006 === 3))
{var inst_370989 = (state_371005[2]);var inst_370990 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"stats","stats",1123661841)];var inst_370991 = [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)];var inst_370992 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_370991,null));var inst_370993 = [new cljs.core.Keyword(null,"stats","stats",1123661841),inst_370992,inst_370989];var inst_370994 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_370990,inst_370993);var state_371005__$1 = state_371005;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_371005__$1,4,input_queue,inst_370994);
} else
{if((state_val_371006 === 2))
{var inst_370980 = (state_371005[2]);var inst_370981 = new cljs.core.Keyword(null,"stats-model","stats-model",651400173).cljs$core$IFn$_invoke$arity$1(input);var inst_370982 = new cljs.core.Keyword(null,"model","model",1117974171).cljs$core$IFn$_invoke$arity$1(input);var inst_370983 = [new cljs.core.Keyword(null,"start-time","start-time",3689550026),new cljs.core.Keyword(null,"end-time","end-time",2693279729)];var inst_370984 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_370983,null));var inst_370985 = cljs.core.select_keys.call(null,input,inst_370984);var inst_370986 = cljs.core.assoc.call(null,inst_370985,new cljs.core.Keyword(null,"granularity","granularity",2833735872),"TOTAL");var inst_370987 = foundation.app.models.fetch.call(null,inst_370981,new cljs.core.Keyword(null,"params","params",4313443576),inst_370982,new cljs.core.Keyword(null,"query-params","query-params",1080249757),inst_370986);var state_371005__$1 = (function (){var statearr_371008 = state_371005;(statearr_371008[7] = inst_370980);
return statearr_371008;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_371005__$1,3,inst_370987);
} else
{if((state_val_371006 === 1))
{var inst_370973 = new cljs.core.Keyword(null,"stats-model","stats-model",651400173).cljs$core$IFn$_invoke$arity$1(input);var inst_370974 = new cljs.core.Keyword(null,"model","model",1117974171).cljs$core$IFn$_invoke$arity$1(input);var inst_370975 = [new cljs.core.Keyword(null,"start-time","start-time",3689550026),new cljs.core.Keyword(null,"end-time","end-time",2693279729),new cljs.core.Keyword(null,"granularity","granularity",2833735872)];var inst_370976 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_370975,null));var inst_370977 = cljs.core.select_keys.call(null,input,inst_370976);var inst_370978 = foundation.app.models.fetch.call(null,inst_370973,new cljs.core.Keyword(null,"params","params",4313443576),inst_370974,new cljs.core.Keyword(null,"query-params","query-params",1080249757),inst_370977);var state_371005__$1 = state_371005;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_371005__$1,2,inst_370978);
} else
{return null;
}
}
}
}
}
});return ((function (switch__18219__auto__){
return (function() {
var state_machine__18220__auto__ = null;
var state_machine__18220__auto____0 = (function (){var statearr_371012 = [null,null,null,null,null,null,null,null,null];(statearr_371012[0] = state_machine__18220__auto__);
(statearr_371012[1] = 1);
return statearr_371012;
});
var state_machine__18220__auto____1 = (function (state_371005){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_371005);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e371013){if((e371013 instanceof Object))
{var ex__18223__auto__ = e371013;var statearr_371014_371016 = state_371005;(statearr_371014_371016[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_371005);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e371013;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__371017 = state_371005;
state_371005 = G__371017;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_371005){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_371005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_371015 = f__18290__auto__.call(null);(statearr_371015[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto__);
return statearr_371015;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18291__auto__);
}));
return c__18289__auto__;
}));

//# sourceMappingURL=services.js.map