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
cljs.core._add_method.call(null,foundation.app.effect,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init","init",1017141378),cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null)], true),new cljs.core.Keyword(null,"vals","vals",1017516260)], null),(function (message,input_queue,input){var c__18051__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_39808){var state_val_39809 = (state_39808[1]);if((state_val_39809 === 4))
{var inst_39806 = (state_39808[2]);var state_39808__$1 = state_39808;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39808__$1,inst_39806);
} else
{if((state_val_39809 === 3))
{var inst_39789 = (state_39808[7]);var inst_39790 = (state_39808[8]);var inst_39799 = (state_39808[2]);var inst_39800 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"account","account",4131552671),new cljs.core.Keyword(null,"collection","collection",3567559184),new cljs.core.Keyword(null,"resource","resource",672839552)];var inst_39801 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)];var inst_39802 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_39801,null));var inst_39803 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_39802,inst_39790,inst_39789,foundation.models.accounts];var inst_39804 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_39800,inst_39803);var state_39808__$1 = (function (){var statearr_39810 = state_39808;(statearr_39810[9] = inst_39799);
return statearr_39810;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39808__$1,4,input_queue,inst_39804);
} else
{if((state_val_39809 === 2))
{var inst_39789 = (state_39808[7]);var inst_39790 = (state_39808[8]);var inst_39788 = (state_39808[2]);var inst_39789__$1 = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"name","name",1017277949),inst_39788);var inst_39790__$1 = cljs.core.first.call(null,inst_39789__$1);var inst_39791 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"model","model",1117974171),new cljs.core.Keyword(null,"account","account",4131552671),new cljs.core.Keyword(null,"stats-model","stats-model",651400173),new cljs.core.Keyword(null,"granularity","granularity",2833735872),new cljs.core.Keyword(null,"metrics","metrics",1969730613)];var inst_39792 = [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)];var inst_39793 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_39792,null));var inst_39794 = foundation.models.metrics.call(null,foundation.models.accounts);var inst_39795 = cljs.core.get.call(null,inst_39794,"Impressions");var inst_39796 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_39793,inst_39790__$1,inst_39790__$1,foundation.models.account_stats,"HOUR",inst_39795];var inst_39797 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_39791,inst_39796);var state_39808__$1 = (function (){var statearr_39811 = state_39808;(statearr_39811[7] = inst_39789__$1);
(statearr_39811[8] = inst_39790__$1);
return statearr_39811;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39808__$1,3,input_queue,inst_39797);
} else
{if((state_val_39809 === 1))
{var inst_39786 = foundation.app.xhr.GET.call(null,"http://192.241.130.213:8080/user/15/ads-api/bootstrap");var state_39808__$1 = state_39808;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39808__$1,2,inst_39786);
} else
{return null;
}
}
}
}
});return ((function (switch__17981__auto__){
return (function() {
var state_machine__17982__auto__ = null;
var state_machine__17982__auto____0 = (function (){var statearr_39815 = (new Array(10));(statearr_39815[0] = state_machine__17982__auto__);
(statearr_39815[1] = 1);
return statearr_39815;
});
var state_machine__17982__auto____1 = (function (state_39808){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_39808);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e39816){if((e39816 instanceof Object))
{var ex__17985__auto__ = e39816;var statearr_39817_39819 = state_39808;(statearr_39817_39819[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39808);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e39816;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__39820 = state_39808;
state_39808 = G__39820;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_39808){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_39808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_39818 = f__18052__auto__.call(null);(statearr_39818[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto__);
return statearr_39818;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18053__auto__);
}));
return c__18051__auto__;
}));
cljs.core._add_method.call(null,foundation.app.effect,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load","load",1017231448),cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null)], true),new cljs.core.Keyword(null,"single-val","single-val",1926385550)], null),(function (message,input_queue,input){var c__18051__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_39853){var state_val_39854 = (state_39853[1]);if((state_val_39854 === 5))
{var inst_39851 = (state_39853[2]);var state_39853__$1 = state_39853;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39853__$1,inst_39851);
} else
{if((state_val_39854 === 4))
{var inst_39828 = (state_39853[7]);var inst_39844 = (state_39853[2]);var inst_39845 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"stats","stats",1123661841)];var inst_39846 = [new cljs.core.Keyword(null,"chart","chart",1108527952)];var inst_39847 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_39846,null));var inst_39848 = [new cljs.core.Keyword(null,"stats","stats",1123661841),inst_39847,inst_39828];var inst_39849 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_39845,inst_39848);var state_39853__$1 = (function (){var statearr_39855 = state_39853;(statearr_39855[8] = inst_39844);
return statearr_39855;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39853__$1,5,input_queue,inst_39849);
} else
{if((state_val_39854 === 3))
{var inst_39837 = (state_39853[2]);var inst_39838 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"stats","stats",1123661841)];var inst_39839 = [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)];var inst_39840 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_39839,null));var inst_39841 = [new cljs.core.Keyword(null,"stats","stats",1123661841),inst_39840,inst_39837];var inst_39842 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_39838,inst_39841);var state_39853__$1 = state_39853;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39853__$1,4,input_queue,inst_39842);
} else
{if((state_val_39854 === 2))
{var inst_39828 = (state_39853[2]);var inst_39829 = new cljs.core.Keyword(null,"stats-model","stats-model",651400173).cljs$core$IFn$_invoke$arity$1(input);var inst_39830 = new cljs.core.Keyword(null,"model","model",1117974171).cljs$core$IFn$_invoke$arity$1(input);var inst_39831 = [new cljs.core.Keyword(null,"start-time","start-time",3689550026),new cljs.core.Keyword(null,"end-time","end-time",2693279729)];var inst_39832 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_39831,null));var inst_39833 = cljs.core.select_keys.call(null,input,inst_39832);var inst_39834 = cljs.core.assoc.call(null,inst_39833,new cljs.core.Keyword(null,"granularity","granularity",2833735872),"TOTAL");var inst_39835 = foundation.app.models.fetch.call(null,inst_39829,new cljs.core.Keyword(null,"params","params",4313443576),inst_39830,new cljs.core.Keyword(null,"query-params","query-params",1080249757),inst_39834);var state_39853__$1 = (function (){var statearr_39856 = state_39853;(statearr_39856[7] = inst_39828);
return statearr_39856;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39853__$1,3,inst_39835);
} else
{if((state_val_39854 === 1))
{var inst_39821 = new cljs.core.Keyword(null,"stats-model","stats-model",651400173).cljs$core$IFn$_invoke$arity$1(input);var inst_39822 = new cljs.core.Keyword(null,"model","model",1117974171).cljs$core$IFn$_invoke$arity$1(input);var inst_39823 = [new cljs.core.Keyword(null,"start-time","start-time",3689550026),new cljs.core.Keyword(null,"end-time","end-time",2693279729),new cljs.core.Keyword(null,"granularity","granularity",2833735872)];var inst_39824 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_39823,null));var inst_39825 = cljs.core.select_keys.call(null,input,inst_39824);var inst_39826 = foundation.app.models.fetch.call(null,inst_39821,new cljs.core.Keyword(null,"params","params",4313443576),inst_39822,new cljs.core.Keyword(null,"query-params","query-params",1080249757),inst_39825);var state_39853__$1 = state_39853;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39853__$1,2,inst_39826);
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
var state_machine__17982__auto____0 = (function (){var statearr_39860 = (new Array(9));(statearr_39860[0] = state_machine__17982__auto__);
(statearr_39860[1] = 1);
return statearr_39860;
});
var state_machine__17982__auto____1 = (function (state_39853){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_39853);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e39861){if((e39861 instanceof Object))
{var ex__17985__auto__ = e39861;var statearr_39862_39864 = state_39853;(statearr_39862_39864[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39853);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e39861;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__39865 = state_39853;
state_39853 = G__39865;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_39853){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_39853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_39863 = f__18052__auto__.call(null);(statearr_39863[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto__);
return statearr_39863;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18053__auto__);
}));
return c__18051__auto__;
}));

//# sourceMappingURL=services.js.map