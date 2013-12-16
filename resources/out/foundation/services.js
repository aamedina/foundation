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
cljs.core._add_method.call(null,foundation.app.effect,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init","init",1017141378),cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null)], true),new cljs.core.Keyword(null,"vals","vals",1017516260)], null),(function (message,input_queue,input){var c__18051__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_30091){var state_val_30092 = (state_30091[1]);if((state_val_30092 === 4))
{var inst_30089 = (state_30091[2]);var state_30091__$1 = state_30091;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30091__$1,inst_30089);
} else
{if((state_val_30092 === 3))
{var inst_30073 = (state_30091[7]);var inst_30072 = (state_30091[8]);var inst_30082 = (state_30091[2]);var inst_30083 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"account","account",4131552671),new cljs.core.Keyword(null,"collection","collection",3567559184),new cljs.core.Keyword(null,"resource","resource",672839552)];var inst_30084 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)];var inst_30085 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_30084,null));var inst_30086 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_30085,inst_30073,inst_30072,foundation.models.accounts];var inst_30087 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_30083,inst_30086);var state_30091__$1 = (function (){var statearr_30093 = state_30091;(statearr_30093[9] = inst_30082);
return statearr_30093;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30091__$1,4,input_queue,inst_30087);
} else
{if((state_val_30092 === 2))
{var inst_30073 = (state_30091[7]);var inst_30072 = (state_30091[8]);var inst_30072__$1 = (state_30091[2]);var inst_30073__$1 = cljs.core.first.call(null,inst_30072__$1);var inst_30074 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"model","model",1117974171),new cljs.core.Keyword(null,"account","account",4131552671),new cljs.core.Keyword(null,"stats-model","stats-model",651400173),new cljs.core.Keyword(null,"granularity","granularity",2833735872),new cljs.core.Keyword(null,"metrics","metrics",1969730613)];var inst_30075 = [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)];var inst_30076 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_30075,null));var inst_30077 = foundation.models.metrics.call(null,foundation.models.accounts);var inst_30078 = cljs.core.get.call(null,inst_30077,"Impressions");var inst_30079 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_30076,inst_30073__$1,inst_30073__$1,foundation.models.account_stats,"HOUR",inst_30078];var inst_30080 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_30074,inst_30079);var state_30091__$1 = (function (){var statearr_30094 = state_30091;(statearr_30094[7] = inst_30073__$1);
(statearr_30094[8] = inst_30072__$1);
return statearr_30094;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30091__$1,3,input_queue,inst_30080);
} else
{if((state_val_30092 === 1))
{var inst_30070 = foundation.app.models.fetch.call(null,foundation.models.accounts);var state_30091__$1 = state_30091;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30091__$1,2,inst_30070);
} else
{return null;
}
}
}
}
});return ((function (switch__17981__auto__){
return (function() {
var state_machine__17982__auto__ = null;
var state_machine__17982__auto____0 = (function (){var statearr_30098 = (new Array(10));(statearr_30098[0] = state_machine__17982__auto__);
(statearr_30098[1] = 1);
return statearr_30098;
});
var state_machine__17982__auto____1 = (function (state_30091){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_30091);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e30099){if((e30099 instanceof Object))
{var ex__17985__auto__ = e30099;var statearr_30100_30102 = state_30091;(statearr_30100_30102[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30091);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30099;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30103 = state_30091;
state_30091 = G__30103;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_30091){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_30091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_30101 = f__18052__auto__.call(null);(statearr_30101[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto__);
return statearr_30101;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18053__auto__);
}));
return c__18051__auto__;
}));
cljs.core._add_method.call(null,foundation.app.effect,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load","load",1017231448),cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null)], true),new cljs.core.Keyword(null,"single-val","single-val",1926385550)], null),(function (message,input_queue,input){var c__18051__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_30136){var state_val_30137 = (state_30136[1]);if((state_val_30137 === 5))
{var inst_30134 = (state_30136[2]);var state_30136__$1 = state_30136;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30136__$1,inst_30134);
} else
{if((state_val_30137 === 4))
{var inst_30111 = (state_30136[7]);var inst_30127 = (state_30136[2]);var inst_30128 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"stats","stats",1123661841)];var inst_30129 = [new cljs.core.Keyword(null,"chart","chart",1108527952)];var inst_30130 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_30129,null));var inst_30131 = [new cljs.core.Keyword(null,"stats","stats",1123661841),inst_30130,inst_30111];var inst_30132 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_30128,inst_30131);var state_30136__$1 = (function (){var statearr_30138 = state_30136;(statearr_30138[8] = inst_30127);
return statearr_30138;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30136__$1,5,input_queue,inst_30132);
} else
{if((state_val_30137 === 3))
{var inst_30120 = (state_30136[2]);var inst_30121 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"stats","stats",1123661841)];var inst_30122 = [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)];var inst_30123 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_30122,null));var inst_30124 = [new cljs.core.Keyword(null,"stats","stats",1123661841),inst_30123,inst_30120];var inst_30125 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_30121,inst_30124);var state_30136__$1 = state_30136;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30136__$1,4,input_queue,inst_30125);
} else
{if((state_val_30137 === 2))
{var inst_30111 = (state_30136[2]);var inst_30112 = new cljs.core.Keyword(null,"stats-model","stats-model",651400173).cljs$core$IFn$_invoke$arity$1(input);var inst_30113 = new cljs.core.Keyword(null,"model","model",1117974171).cljs$core$IFn$_invoke$arity$1(input);var inst_30114 = [new cljs.core.Keyword(null,"start-time","start-time",3689550026),new cljs.core.Keyword(null,"end-time","end-time",2693279729)];var inst_30115 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_30114,null));var inst_30116 = cljs.core.select_keys.call(null,input,inst_30115);var inst_30117 = cljs.core.assoc.call(null,inst_30116,new cljs.core.Keyword(null,"granularity","granularity",2833735872),"TOTAL");var inst_30118 = foundation.app.models.fetch.call(null,inst_30112,new cljs.core.Keyword(null,"params","params",4313443576),inst_30113,new cljs.core.Keyword(null,"query-params","query-params",1080249757),inst_30117);var state_30136__$1 = (function (){var statearr_30139 = state_30136;(statearr_30139[7] = inst_30111);
return statearr_30139;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30136__$1,3,inst_30118);
} else
{if((state_val_30137 === 1))
{var inst_30104 = new cljs.core.Keyword(null,"stats-model","stats-model",651400173).cljs$core$IFn$_invoke$arity$1(input);var inst_30105 = new cljs.core.Keyword(null,"model","model",1117974171).cljs$core$IFn$_invoke$arity$1(input);var inst_30106 = [new cljs.core.Keyword(null,"start-time","start-time",3689550026),new cljs.core.Keyword(null,"end-time","end-time",2693279729),new cljs.core.Keyword(null,"granularity","granularity",2833735872)];var inst_30107 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_30106,null));var inst_30108 = cljs.core.select_keys.call(null,input,inst_30107);var inst_30109 = foundation.app.models.fetch.call(null,inst_30104,new cljs.core.Keyword(null,"params","params",4313443576),inst_30105,new cljs.core.Keyword(null,"query-params","query-params",1080249757),inst_30108);var state_30136__$1 = state_30136;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30136__$1,2,inst_30109);
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
var state_machine__17982__auto____0 = (function (){var statearr_30143 = (new Array(9));(statearr_30143[0] = state_machine__17982__auto__);
(statearr_30143[1] = 1);
return statearr_30143;
});
var state_machine__17982__auto____1 = (function (state_30136){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_30136);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e30144){if((e30144 instanceof Object))
{var ex__17985__auto__ = e30144;var statearr_30145_30147 = state_30136;(statearr_30145_30147[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30136);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30144;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30148 = state_30136;
state_30136 = G__30148;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_30136){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_30136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_30146 = f__18052__auto__.call(null);(statearr_30146[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto__);
return statearr_30146;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18053__auto__);
}));
return c__18051__auto__;
}));

//# sourceMappingURL=services.js.map