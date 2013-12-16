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
cljs.core._add_method.call(null,foundation.app.effect,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init","init",1017141378),cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null)], true),new cljs.core.Keyword(null,"vals","vals",1017516260)], null),(function (message,input_queue,input){var c__18051__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_30096){var state_val_30097 = (state_30096[1]);if((state_val_30097 === 4))
{var inst_30094 = (state_30096[2]);var state_30096__$1 = state_30096;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30096__$1,inst_30094);
} else
{if((state_val_30097 === 3))
{var inst_30078 = (state_30096[7]);var inst_30077 = (state_30096[8]);var inst_30087 = (state_30096[2]);var inst_30088 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"account","account",4131552671),new cljs.core.Keyword(null,"collection","collection",3567559184),new cljs.core.Keyword(null,"resource","resource",672839552)];var inst_30089 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)];var inst_30090 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_30089,null));var inst_30091 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_30090,inst_30078,inst_30077,foundation.models.accounts];var inst_30092 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_30088,inst_30091);var state_30096__$1 = (function (){var statearr_30098 = state_30096;(statearr_30098[9] = inst_30087);
return statearr_30098;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30096__$1,4,input_queue,inst_30092);
} else
{if((state_val_30097 === 2))
{var inst_30078 = (state_30096[7]);var inst_30077 = (state_30096[8]);var inst_30077__$1 = (state_30096[2]);var inst_30078__$1 = cljs.core.first.call(null,inst_30077__$1);var inst_30079 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"model","model",1117974171),new cljs.core.Keyword(null,"account","account",4131552671),new cljs.core.Keyword(null,"stats-model","stats-model",651400173),new cljs.core.Keyword(null,"granularity","granularity",2833735872),new cljs.core.Keyword(null,"metrics","metrics",1969730613)];var inst_30080 = [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)];var inst_30081 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_30080,null));var inst_30082 = foundation.models.metrics.call(null,foundation.models.accounts);var inst_30083 = cljs.core.get.call(null,inst_30082,"Impressions");var inst_30084 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_30081,inst_30078__$1,inst_30078__$1,foundation.models.account_stats,"HOUR",inst_30083];var inst_30085 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_30079,inst_30084);var state_30096__$1 = (function (){var statearr_30099 = state_30096;(statearr_30099[7] = inst_30078__$1);
(statearr_30099[8] = inst_30077__$1);
return statearr_30099;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30096__$1,3,input_queue,inst_30085);
} else
{if((state_val_30097 === 1))
{var inst_30075 = foundation.app.models.fetch.call(null,foundation.models.accounts);var state_30096__$1 = state_30096;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30096__$1,2,inst_30075);
} else
{return null;
}
}
}
}
});return ((function (switch__17981__auto__){
return (function() {
var state_machine__17982__auto__ = null;
var state_machine__17982__auto____0 = (function (){var statearr_30103 = (new Array(10));(statearr_30103[0] = state_machine__17982__auto__);
(statearr_30103[1] = 1);
return statearr_30103;
});
var state_machine__17982__auto____1 = (function (state_30096){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_30096);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e30104){if((e30104 instanceof Object))
{var ex__17985__auto__ = e30104;var statearr_30105_30107 = state_30096;(statearr_30105_30107[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30096);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30104;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30108 = state_30096;
state_30096 = G__30108;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_30096){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_30096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_30106 = f__18052__auto__.call(null);(statearr_30106[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto__);
return statearr_30106;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18053__auto__);
}));
return c__18051__auto__;
}));
cljs.core._add_method.call(null,foundation.app.effect,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load","load",1017231448),cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null)], true),new cljs.core.Keyword(null,"single-val","single-val",1926385550)], null),(function (message,input_queue,input){var c__18051__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_30141){var state_val_30142 = (state_30141[1]);if((state_val_30142 === 5))
{var inst_30139 = (state_30141[2]);var state_30141__$1 = state_30141;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30141__$1,inst_30139);
} else
{if((state_val_30142 === 4))
{var inst_30116 = (state_30141[7]);var inst_30132 = (state_30141[2]);var inst_30133 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"stats","stats",1123661841)];var inst_30134 = [new cljs.core.Keyword(null,"chart","chart",1108527952)];var inst_30135 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_30134,null));var inst_30136 = [new cljs.core.Keyword(null,"stats","stats",1123661841),inst_30135,inst_30116];var inst_30137 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_30133,inst_30136);var state_30141__$1 = (function (){var statearr_30143 = state_30141;(statearr_30143[8] = inst_30132);
return statearr_30143;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30141__$1,5,input_queue,inst_30137);
} else
{if((state_val_30142 === 3))
{var inst_30125 = (state_30141[2]);var inst_30126 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"stats","stats",1123661841)];var inst_30127 = [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)];var inst_30128 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_30127,null));var inst_30129 = [new cljs.core.Keyword(null,"stats","stats",1123661841),inst_30128,inst_30125];var inst_30130 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_30126,inst_30129);var state_30141__$1 = state_30141;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30141__$1,4,input_queue,inst_30130);
} else
{if((state_val_30142 === 2))
{var inst_30116 = (state_30141[2]);var inst_30117 = new cljs.core.Keyword(null,"stats-model","stats-model",651400173).cljs$core$IFn$_invoke$arity$1(input);var inst_30118 = new cljs.core.Keyword(null,"model","model",1117974171).cljs$core$IFn$_invoke$arity$1(input);var inst_30119 = [new cljs.core.Keyword(null,"start-time","start-time",3689550026),new cljs.core.Keyword(null,"end-time","end-time",2693279729)];var inst_30120 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_30119,null));var inst_30121 = cljs.core.select_keys.call(null,input,inst_30120);var inst_30122 = cljs.core.assoc.call(null,inst_30121,new cljs.core.Keyword(null,"granularity","granularity",2833735872),"TOTAL");var inst_30123 = foundation.app.models.fetch.call(null,inst_30117,new cljs.core.Keyword(null,"params","params",4313443576),inst_30118,new cljs.core.Keyword(null,"query-params","query-params",1080249757),inst_30122);var state_30141__$1 = (function (){var statearr_30144 = state_30141;(statearr_30144[7] = inst_30116);
return statearr_30144;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30141__$1,3,inst_30123);
} else
{if((state_val_30142 === 1))
{var inst_30109 = new cljs.core.Keyword(null,"stats-model","stats-model",651400173).cljs$core$IFn$_invoke$arity$1(input);var inst_30110 = new cljs.core.Keyword(null,"model","model",1117974171).cljs$core$IFn$_invoke$arity$1(input);var inst_30111 = [new cljs.core.Keyword(null,"start-time","start-time",3689550026),new cljs.core.Keyword(null,"end-time","end-time",2693279729),new cljs.core.Keyword(null,"granularity","granularity",2833735872)];var inst_30112 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_30111,null));var inst_30113 = cljs.core.select_keys.call(null,input,inst_30112);var inst_30114 = foundation.app.models.fetch.call(null,inst_30109,new cljs.core.Keyword(null,"params","params",4313443576),inst_30110,new cljs.core.Keyword(null,"query-params","query-params",1080249757),inst_30113);var state_30141__$1 = state_30141;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30141__$1,2,inst_30114);
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
var state_machine__17982__auto____0 = (function (){var statearr_30148 = (new Array(9));(statearr_30148[0] = state_machine__17982__auto__);
(statearr_30148[1] = 1);
return statearr_30148;
});
var state_machine__17982__auto____1 = (function (state_30141){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_30141);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e30149){if((e30149 instanceof Object))
{var ex__17985__auto__ = e30149;var statearr_30150_30152 = state_30141;(statearr_30150_30152[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30141);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30149;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30153 = state_30141;
state_30141 = G__30153;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_30141){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_30141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_30151 = f__18052__auto__.call(null);(statearr_30151[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto__);
return statearr_30151;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18053__auto__);
}));
return c__18051__auto__;
}));

//# sourceMappingURL=services.js.map