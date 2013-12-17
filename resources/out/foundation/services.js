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
cljs.core._add_method.call(null,foundation.app.effect,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init","init",1017141378),cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null)], true),new cljs.core.Keyword(null,"vals","vals",1017516260)], null),(function (message,input_queue,input){var c__18289__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_361852){var state_val_361853 = (state_361852[1]);if((state_val_361853 === 4))
{var inst_361850 = (state_361852[2]);var state_361852__$1 = state_361852;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_361852__$1,inst_361850);
} else
{if((state_val_361853 === 3))
{var inst_361833 = (state_361852[7]);var inst_361834 = (state_361852[8]);var inst_361843 = (state_361852[2]);var inst_361844 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"account","account",4131552671),new cljs.core.Keyword(null,"collection","collection",3567559184),new cljs.core.Keyword(null,"resource","resource",672839552)];var inst_361845 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)];var inst_361846 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_361845,null));var inst_361847 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_361846,inst_361834,inst_361833,foundation.models.accounts];var inst_361848 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_361844,inst_361847);var state_361852__$1 = (function (){var statearr_361854 = state_361852;(statearr_361854[9] = inst_361843);
return statearr_361854;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_361852__$1,4,input_queue,inst_361848);
} else
{if((state_val_361853 === 2))
{var inst_361833 = (state_361852[7]);var inst_361834 = (state_361852[8]);var inst_361832 = (state_361852[2]);var inst_361833__$1 = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"name","name",1017277949),inst_361832);var inst_361834__$1 = cljs.core.first.call(null,inst_361833__$1);var inst_361835 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"model","model",1117974171),new cljs.core.Keyword(null,"account","account",4131552671),new cljs.core.Keyword(null,"stats-model","stats-model",651400173),new cljs.core.Keyword(null,"granularity","granularity",2833735872),new cljs.core.Keyword(null,"metrics","metrics",1969730613)];var inst_361836 = [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)];var inst_361837 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_361836,null));var inst_361838 = foundation.models.metrics.call(null,foundation.models.accounts);var inst_361839 = cljs.core.get.call(null,inst_361838,"Impressions");var inst_361840 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_361837,inst_361834__$1,inst_361834__$1,foundation.models.account_stats,"HOUR",inst_361839];var inst_361841 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_361835,inst_361840);var state_361852__$1 = (function (){var statearr_361855 = state_361852;(statearr_361855[7] = inst_361833__$1);
(statearr_361855[8] = inst_361834__$1);
return statearr_361855;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_361852__$1,3,input_queue,inst_361841);
} else
{if((state_val_361853 === 1))
{var inst_361830 = foundation.app.xhr.GET.call(null,"http://192.241.130.213:8080/user/15/ads-api/bootstrap");var state_361852__$1 = state_361852;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_361852__$1,2,inst_361830);
} else
{return null;
}
}
}
}
});return ((function (switch__18219__auto__){
return (function() {
var state_machine__18220__auto__ = null;
var state_machine__18220__auto____0 = (function (){var statearr_361859 = [null,null,null,null,null,null,null,null,null,null];(statearr_361859[0] = state_machine__18220__auto__);
(statearr_361859[1] = 1);
return statearr_361859;
});
var state_machine__18220__auto____1 = (function (state_361852){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_361852);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e361860){if((e361860 instanceof Object))
{var ex__18223__auto__ = e361860;var statearr_361861_361863 = state_361852;(statearr_361861_361863[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_361852);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e361860;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__361864 = state_361852;
state_361852 = G__361864;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_361852){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_361852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_361862 = f__18290__auto__.call(null);(statearr_361862[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto__);
return statearr_361862;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18291__auto__);
}));
return c__18289__auto__;
}));
cljs.core._add_method.call(null,foundation.app.effect,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load","load",1017231448),cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null)], true),new cljs.core.Keyword(null,"single-val","single-val",1926385550)], null),(function (message,input_queue,input){var c__18289__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_361897){var state_val_361898 = (state_361897[1]);if((state_val_361898 === 5))
{var inst_361895 = (state_361897[2]);var state_361897__$1 = state_361897;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_361897__$1,inst_361895);
} else
{if((state_val_361898 === 4))
{var inst_361872 = (state_361897[7]);var inst_361888 = (state_361897[2]);var inst_361889 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"stats","stats",1123661841)];var inst_361890 = [new cljs.core.Keyword(null,"chart","chart",1108527952)];var inst_361891 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_361890,null));var inst_361892 = [new cljs.core.Keyword(null,"stats","stats",1123661841),inst_361891,inst_361872];var inst_361893 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_361889,inst_361892);var state_361897__$1 = (function (){var statearr_361899 = state_361897;(statearr_361899[8] = inst_361888);
return statearr_361899;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_361897__$1,5,input_queue,inst_361893);
} else
{if((state_val_361898 === 3))
{var inst_361881 = (state_361897[2]);var inst_361882 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"stats","stats",1123661841)];var inst_361883 = [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)];var inst_361884 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_361883,null));var inst_361885 = [new cljs.core.Keyword(null,"stats","stats",1123661841),inst_361884,inst_361881];var inst_361886 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_361882,inst_361885);var state_361897__$1 = state_361897;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_361897__$1,4,input_queue,inst_361886);
} else
{if((state_val_361898 === 2))
{var inst_361872 = (state_361897[2]);var inst_361873 = new cljs.core.Keyword(null,"stats-model","stats-model",651400173).cljs$core$IFn$_invoke$arity$1(input);var inst_361874 = new cljs.core.Keyword(null,"model","model",1117974171).cljs$core$IFn$_invoke$arity$1(input);var inst_361875 = [new cljs.core.Keyword(null,"start-time","start-time",3689550026),new cljs.core.Keyword(null,"end-time","end-time",2693279729)];var inst_361876 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_361875,null));var inst_361877 = cljs.core.select_keys.call(null,input,inst_361876);var inst_361878 = cljs.core.assoc.call(null,inst_361877,new cljs.core.Keyword(null,"granularity","granularity",2833735872),"TOTAL");var inst_361879 = foundation.app.models.fetch.call(null,inst_361873,new cljs.core.Keyword(null,"params","params",4313443576),inst_361874,new cljs.core.Keyword(null,"query-params","query-params",1080249757),inst_361878);var state_361897__$1 = (function (){var statearr_361900 = state_361897;(statearr_361900[7] = inst_361872);
return statearr_361900;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_361897__$1,3,inst_361879);
} else
{if((state_val_361898 === 1))
{var inst_361865 = new cljs.core.Keyword(null,"stats-model","stats-model",651400173).cljs$core$IFn$_invoke$arity$1(input);var inst_361866 = new cljs.core.Keyword(null,"model","model",1117974171).cljs$core$IFn$_invoke$arity$1(input);var inst_361867 = [new cljs.core.Keyword(null,"start-time","start-time",3689550026),new cljs.core.Keyword(null,"end-time","end-time",2693279729),new cljs.core.Keyword(null,"granularity","granularity",2833735872)];var inst_361868 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_361867,null));var inst_361869 = cljs.core.select_keys.call(null,input,inst_361868);var inst_361870 = foundation.app.models.fetch.call(null,inst_361865,new cljs.core.Keyword(null,"params","params",4313443576),inst_361866,new cljs.core.Keyword(null,"query-params","query-params",1080249757),inst_361869);var state_361897__$1 = state_361897;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_361897__$1,2,inst_361870);
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
var state_machine__18220__auto____0 = (function (){var statearr_361904 = [null,null,null,null,null,null,null,null,null];(statearr_361904[0] = state_machine__18220__auto__);
(statearr_361904[1] = 1);
return statearr_361904;
});
var state_machine__18220__auto____1 = (function (state_361897){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_361897);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e361905){if((e361905 instanceof Object))
{var ex__18223__auto__ = e361905;var statearr_361906_361908 = state_361897;(statearr_361906_361908[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_361897);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e361905;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__361909 = state_361897;
state_361897 = G__361909;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_361897){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_361897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_361907 = f__18290__auto__.call(null);(statearr_361907[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto__);
return statearr_361907;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18291__auto__);
}));
return c__18289__auto__;
}));

//# sourceMappingURL=services.js.map