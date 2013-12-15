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
cljs.core._add_method.call(null,foundation.app.effect,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init","init",1017141378),cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null)], true),cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null)], true),new cljs.core.Keyword(null,"vals","vals",1017516260)], null),(function (message,input_queue,input){var c__18838__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18839__auto__ = (function (){var switch__18768__auto__ = (function (state_322816){var state_val_322817 = (state_322816[1]);if((state_val_322817 === 4))
{var inst_322814 = (state_322816[2]);var state_322816__$1 = state_322816;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_322816__$1,inst_322814);
} else
{if((state_val_322817 === 3))
{var inst_322797 = (state_322816[7]);var inst_322798 = (state_322816[8]);var inst_322807 = (state_322816[2]);var inst_322808 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"account","account",4131552671),new cljs.core.Keyword(null,"collection","collection",3567559184),new cljs.core.Keyword(null,"resource","resource",672839552)];var inst_322809 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)];var inst_322810 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_322809,null));var inst_322811 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_322810,inst_322798,inst_322797,foundation.models.accounts];var inst_322812 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_322808,inst_322811);var state_322816__$1 = (function (){var statearr_322818 = state_322816;(statearr_322818[9] = inst_322807);
return statearr_322818;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_322816__$1,4,input_queue,inst_322812);
} else
{if((state_val_322817 === 2))
{var inst_322797 = (state_322816[7]);var inst_322798 = (state_322816[8]);var inst_322797__$1 = (state_322816[2]);var inst_322798__$1 = cljs.core.first.call(null,inst_322797__$1);var inst_322799 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"model","model",1117974171),new cljs.core.Keyword(null,"account","account",4131552671),new cljs.core.Keyword(null,"stats-model","stats-model",651400173),new cljs.core.Keyword(null,"granularity","granularity",2833735872),new cljs.core.Keyword(null,"metrics","metrics",1969730613)];var inst_322800 = [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)];var inst_322801 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_322800,null));var inst_322802 = foundation.models.metrics.call(null,foundation.models.accounts);var inst_322803 = cljs.core.get.call(null,inst_322802,"Impressions");var inst_322804 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_322801,inst_322798__$1,inst_322798__$1,foundation.models.account_stats,"HOUR",inst_322803];var inst_322805 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_322799,inst_322804);var state_322816__$1 = (function (){var statearr_322819 = state_322816;(statearr_322819[7] = inst_322797__$1);
(statearr_322819[8] = inst_322798__$1);
return statearr_322819;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_322816__$1,3,input_queue,inst_322805);
} else
{if((state_val_322817 === 1))
{var inst_322795 = foundation.app.models.fetch.call(null,foundation.models.accounts);var state_322816__$1 = state_322816;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_322816__$1,2,inst_322795);
} else
{return null;
}
}
}
}
});return ((function (switch__18768__auto__){
return (function() {
var state_machine__18769__auto__ = null;
var state_machine__18769__auto____0 = (function (){var statearr_322823 = (new Array(10));(statearr_322823[0] = state_machine__18769__auto__);
(statearr_322823[1] = 1);
return statearr_322823;
});
var state_machine__18769__auto____1 = (function (state_322816){while(true){
var ret_value__18770__auto__ = (function (){try{while(true){
var result__18771__auto__ = switch__18768__auto__.call(null,state_322816);if(cljs.core.keyword_identical_QMARK_.call(null,result__18771__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18771__auto__;
}
break;
}
}catch (e322824){if((e322824 instanceof Object))
{var ex__18772__auto__ = e322824;var statearr_322825_322827 = state_322816;(statearr_322825_322827[5] = ex__18772__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_322816);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e322824;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18770__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__322828 = state_322816;
state_322816 = G__322828;
continue;
}
} else
{return ret_value__18770__auto__;
}
break;
}
});
state_machine__18769__auto__ = function(state_322816){
switch(arguments.length){
case 0:
return state_machine__18769__auto____0.call(this);
case 1:
return state_machine__18769__auto____1.call(this,state_322816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18769__auto____0;
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18769__auto____1;
return state_machine__18769__auto__;
})()
;})(switch__18768__auto__))
})();var state__18840__auto__ = (function (){var statearr_322826 = f__18839__auto__.call(null);(statearr_322826[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18838__auto__);
return statearr_322826;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18840__auto__);
}));
return c__18838__auto__;
}));
cljs.core._add_method.call(null,foundation.app.effect,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load","load",1017231448),cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null)], true),cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null)], true),new cljs.core.Keyword(null,"single-val","single-val",1926385550)], null),(function (message,input_queue,input){var c__18838__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18839__auto__ = (function (){var switch__18768__auto__ = (function (state_322861){var state_val_322862 = (state_322861[1]);if((state_val_322862 === 5))
{var inst_322859 = (state_322861[2]);var state_322861__$1 = state_322861;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_322861__$1,inst_322859);
} else
{if((state_val_322862 === 4))
{var inst_322845 = (state_322861[7]);var inst_322852 = (state_322861[2]);var inst_322853 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"stats","stats",1123661841)];var inst_322854 = [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)];var inst_322855 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_322854,null));var inst_322856 = [new cljs.core.Keyword(null,"stats","stats",1123661841),inst_322855,inst_322845];var inst_322857 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_322853,inst_322856);var state_322861__$1 = (function (){var statearr_322863 = state_322861;(statearr_322863[8] = inst_322852);
return statearr_322863;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_322861__$1,5,input_queue,inst_322857);
} else
{if((state_val_322862 === 3))
{var inst_322836 = (state_322861[9]);var inst_322845 = (state_322861[2]);var inst_322846 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"stats","stats",1123661841)];var inst_322847 = [new cljs.core.Keyword(null,"chart","chart",1108527952)];var inst_322848 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_322847,null));var inst_322849 = [new cljs.core.Keyword(null,"stats","stats",1123661841),inst_322848,inst_322836];var inst_322850 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_322846,inst_322849);var state_322861__$1 = (function (){var statearr_322864 = state_322861;(statearr_322864[7] = inst_322845);
return statearr_322864;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_322861__$1,4,input_queue,inst_322850);
} else
{if((state_val_322862 === 2))
{var inst_322836 = (state_322861[2]);var inst_322837 = new cljs.core.Keyword(null,"stats-model","stats-model",651400173).cljs$core$IFn$_invoke$arity$1(input);var inst_322838 = new cljs.core.Keyword(null,"model","model",1117974171).cljs$core$IFn$_invoke$arity$1(input);var inst_322839 = [new cljs.core.Keyword(null,"start-time","start-time",3689550026),new cljs.core.Keyword(null,"end-time","end-time",2693279729)];var inst_322840 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_322839,null));var inst_322841 = cljs.core.select_keys.call(null,input,inst_322840);var inst_322842 = cljs.core.assoc.call(null,inst_322841,new cljs.core.Keyword(null,"granularity","granularity",2833735872),"TOTAL");var inst_322843 = foundation.app.models.fetch.call(null,inst_322837,new cljs.core.Keyword(null,"params","params",4313443576),inst_322838,new cljs.core.Keyword(null,"query-params","query-params",1080249757),inst_322842);var state_322861__$1 = (function (){var statearr_322865 = state_322861;(statearr_322865[9] = inst_322836);
return statearr_322865;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_322861__$1,3,inst_322843);
} else
{if((state_val_322862 === 1))
{var inst_322829 = new cljs.core.Keyword(null,"stats-model","stats-model",651400173).cljs$core$IFn$_invoke$arity$1(input);var inst_322830 = new cljs.core.Keyword(null,"model","model",1117974171).cljs$core$IFn$_invoke$arity$1(input);var inst_322831 = [new cljs.core.Keyword(null,"start-time","start-time",3689550026),new cljs.core.Keyword(null,"end-time","end-time",2693279729),new cljs.core.Keyword(null,"granularity","granularity",2833735872),new cljs.core.Keyword(null,"metrics","metrics",1969730613)];var inst_322832 = (new cljs.core.PersistentVector(null,4,5,cljs.core.PersistentVector.EMPTY_NODE,inst_322831,null));var inst_322833 = cljs.core.select_keys.call(null,input,inst_322832);var inst_322834 = foundation.app.models.fetch.call(null,inst_322829,new cljs.core.Keyword(null,"params","params",4313443576),inst_322830,new cljs.core.Keyword(null,"query-params","query-params",1080249757),inst_322833);var state_322861__$1 = state_322861;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_322861__$1,2,inst_322834);
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
var state_machine__18769__auto____0 = (function (){var statearr_322869 = (new Array(10));(statearr_322869[0] = state_machine__18769__auto__);
(statearr_322869[1] = 1);
return statearr_322869;
});
var state_machine__18769__auto____1 = (function (state_322861){while(true){
var ret_value__18770__auto__ = (function (){try{while(true){
var result__18771__auto__ = switch__18768__auto__.call(null,state_322861);if(cljs.core.keyword_identical_QMARK_.call(null,result__18771__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18771__auto__;
}
break;
}
}catch (e322870){if((e322870 instanceof Object))
{var ex__18772__auto__ = e322870;var statearr_322871_322873 = state_322861;(statearr_322871_322873[5] = ex__18772__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_322861);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e322870;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18770__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__322874 = state_322861;
state_322861 = G__322874;
continue;
}
} else
{return ret_value__18770__auto__;
}
break;
}
});
state_machine__18769__auto__ = function(state_322861){
switch(arguments.length){
case 0:
return state_machine__18769__auto____0.call(this);
case 1:
return state_machine__18769__auto____1.call(this,state_322861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18769__auto____0;
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18769__auto____1;
return state_machine__18769__auto__;
})()
;})(switch__18768__auto__))
})();var state__18840__auto__ = (function (){var statearr_322872 = f__18839__auto__.call(null);(statearr_322872[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18838__auto__);
return statearr_322872;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18840__auto__);
}));
return c__18838__auto__;
}));

//# sourceMappingURL=services.js.map