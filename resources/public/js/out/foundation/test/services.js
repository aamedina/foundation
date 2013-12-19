// Compiled by ClojureScript 0.0-2120
goog.provide('foundation.test.services');
goog.require('cljs.core');
goog.require('foundation.app.router');
goog.require('cljs.core.async');
goog.require('foundation.test.routes');
goog.require('foundation.app');
goog.require('foundation.app.message');
goog.require('foundation.app.models');
goog.require('goog.date');
goog.require('foundation.app.xhr');
goog.require('foundation.test.models');
goog.require('clojure.set');
goog.require('foundation.app');
goog.require('clojure.set');
goog.require('foundation.app.message');
goog.require('foundation.test.routes');
goog.require('foundation.test.models');
goog.require('foundation.app.models');
goog.require('cljs.core.async');
goog.require('foundation.app.xhr');
goog.require('foundation.app.router');
goog.require('goog.date');
foundation.test.services.init = (function init(resource,model,stats){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"init","init",1017141378),foundation.app.message.path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null),new cljs.core.Keyword(null,"model","model",1117974171),model,new cljs.core.Keyword(null,"stats","stats",1123661841),stats], true, false),new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"init","init",1017141378),foundation.app.message.path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null),new cljs.core.Keyword(null,"resource","resource",672839552),resource], true, false)], null);
});
foundation.test.services.get_route = (function get_route(path,params){return foundation.test.routes.app_routes.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"uri","uri",1014020318),path,new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"get","get",1014006472),new cljs.core.Keyword(null,"params","params",4313443576),params], null));
});
foundation.test.services.get_stats = (function get_stats(path,params,model){return foundation.test.routes.app_routes.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",1014020318),path,new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"get","get",1014006472),new cljs.core.Keyword(null,"params","params",4313443576),params,new cljs.core.Keyword(null,"model","model",1117974171),model,new cljs.core.Keyword(null,"query-params","query-params",1080249757),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start-time","start-time",3689550026),foundation.test.models.start_time.call(null,foundation.test.models.campaign_stats),new cljs.core.Keyword(null,"end-time","end-time",2693279729),foundation.test.models.end_time.call(null,foundation.test.models.campaign_stats),new cljs.core.Keyword(null,"granularity","granularity",2833735872),"HOUR"], null)], null));
});
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/"], null),(function (req){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"navigate","navigate",3116398819),foundation.app.message.path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"router","router",4383738555)], null),new cljs.core.Keyword(null,"to-path","to-path",4107943849),"/accounts"], true, false)], null);
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_212843){var state_val_212844 = (state_212843[1]);if((state_val_212844 === 3))
{var inst_212824 = (state_212843[7]);var inst_212831 = (state_212843[2]);var inst_212832 = cljs.core.first.call(null,inst_212824);var inst_212833 = foundation.test.services.init.call(null,foundation.test.models.accounts,inst_212832,inst_212831);var inst_212834 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_212835 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_212836 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_212835,null));var inst_212837 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_212836,inst_212824];var inst_212838 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_212834,inst_212837);var inst_212839 = [inst_212838];var inst_212840 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_212839,null));var inst_212841 = cljs.core.into.call(null,inst_212833,inst_212840);var state_212843__$1 = state_212843;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_212843__$1,inst_212841);
} else
{if((state_val_212844 === 2))
{var inst_212824 = (state_212843[7]);var inst_212824__$1 = (state_212843[2]);var inst_212825 = cljs.core.first.call(null,inst_212824__$1);var inst_212826 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_212827 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_212825);var inst_212828 = [cljs.core.str("/stats"),cljs.core.str(inst_212826),cljs.core.str("/"),cljs.core.str(inst_212827)].join('');var inst_212829 = foundation.test.services.get_stats.call(null,inst_212828,inst_212825,foundation.test.models.account_stats);var state_212843__$1 = (function (){var statearr_212845 = state_212843;(statearr_212845[7] = inst_212824__$1);
return statearr_212845;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_212843__$1,3,inst_212829);
} else
{if((state_val_212844 === 1))
{var inst_212822 = foundation.app.models.fetch.call(null,foundation.test.models.accounts);var state_212843__$1 = state_212843;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_212843__$1,2,inst_212822);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_212849 = [null,null,null,null,null,null,null,null];(statearr_212849[0] = state_machine__12118__auto__);
(statearr_212849[1] = 1);
return statearr_212849;
});
var state_machine__12118__auto____1 = (function (state_212843){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_212843);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e212850){if((e212850 instanceof Object))
{var ex__12121__auto__ = e212850;var statearr_212851_212853 = state_212843;(statearr_212851_212853[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_212843);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e212850;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__212854 = state_212843;
state_212843 = G__212854;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_212843){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_212843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_212852 = f__12188__auto__.call(null);(statearr_212852[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_212852;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_212880){var state_val_212881 = (state_212880[1]);if((state_val_212881 === 3))
{var inst_212864 = (state_212880[7]);var inst_212861 = (state_212880[8]);var inst_212869 = (state_212880[2]);var inst_212870 = foundation.test.services.init.call(null,foundation.test.models.accounts,inst_212864,inst_212869);var inst_212871 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_212872 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_212873 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_212872,null));var inst_212874 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_212873,inst_212861];var inst_212875 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_212871,inst_212874);var inst_212876 = [inst_212875];var inst_212877 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_212876,null));var inst_212878 = cljs.core.into.call(null,inst_212870,inst_212877);var state_212880__$1 = state_212880;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_212880__$1,inst_212878);
} else
{if((state_val_212881 === 2))
{var inst_212858 = (state_212880[9]);var inst_212861 = (state_212880[8]);var inst_212861__$1 = (state_212880[2]);var inst_212862 = (function (){var models = inst_212861__$1;var id = inst_212858;return ((function (models,id,inst_212858,inst_212861,inst_212861__$1,state_val_212881){
return (function (p1__212855_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__212855_SHARP_),id);
});
;})(models,id,inst_212858,inst_212861,inst_212861__$1,state_val_212881))
})();var inst_212863 = cljs.core.set.call(null,inst_212861__$1);var inst_212864 = clojure.set.select.call(null,inst_212862,inst_212863);var inst_212865 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_212866 = [cljs.core.str("/stats"),cljs.core.str(inst_212865)].join('');var inst_212867 = foundation.test.services.get_stats.call(null,inst_212866,cljs.core.PersistentHashMap.EMPTY,foundation.test.models.account_stats);var state_212880__$1 = (function (){var statearr_212882 = state_212880;(statearr_212882[7] = inst_212864);
(statearr_212882[8] = inst_212861__$1);
return statearr_212882;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_212880__$1,3,inst_212867);
} else
{if((state_val_212881 === 1))
{var inst_212856 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_212857 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_212856,null));var inst_212858 = cljs.core.get_in.call(null,req,inst_212857);var inst_212859 = foundation.app.models.fetch.call(null,foundation.test.models.accounts);var state_212880__$1 = (function (){var statearr_212883 = state_212880;(statearr_212883[9] = inst_212858);
return statearr_212883;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_212880__$1,2,inst_212859);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_212887 = [null,null,null,null,null,null,null,null,null,null];(statearr_212887[0] = state_machine__12118__auto__);
(statearr_212887[1] = 1);
return statearr_212887;
});
var state_machine__12118__auto____1 = (function (state_212880){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_212880);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e212888){if((e212888 instanceof Object))
{var ex__12121__auto__ = e212888;var statearr_212889_212891 = state_212880;(statearr_212889_212891[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_212880);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e212888;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__212892 = state_212880;
state_212880 = G__212892;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_212880){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_212880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_212890 = f__12188__auto__.call(null);(statearr_212890[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_212890;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/campaigns"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_212920){var state_val_212921 = (state_212920[1]);if((state_val_212921 === 3))
{var inst_212901 = (state_212920[7]);var inst_212908 = (state_212920[2]);var inst_212909 = cljs.core.first.call(null,inst_212901);var inst_212910 = foundation.test.services.init.call(null,foundation.test.models.campaigns,inst_212909,inst_212908);var inst_212911 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_212912 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_212913 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_212912,null));var inst_212914 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_212913,inst_212901];var inst_212915 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_212911,inst_212914);var inst_212916 = [inst_212915];var inst_212917 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_212916,null));var inst_212918 = cljs.core.into.call(null,inst_212910,inst_212917);var state_212920__$1 = state_212920;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_212920__$1,inst_212918);
} else
{if((state_val_212921 === 2))
{var inst_212901 = (state_212920[7]);var inst_212901__$1 = (state_212920[2]);var inst_212902 = cljs.core.first.call(null,inst_212901__$1);var inst_212903 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_212904 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_212902);var inst_212905 = [cljs.core.str("/stats"),cljs.core.str(inst_212903),cljs.core.str("/"),cljs.core.str(inst_212904)].join('');var inst_212906 = foundation.test.services.get_stats.call(null,inst_212905,inst_212902,foundation.test.models.campaign_stats);var state_212920__$1 = (function (){var statearr_212922 = state_212920;(statearr_212922[7] = inst_212901__$1);
return statearr_212922;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_212920__$1,3,inst_212906);
} else
{if((state_val_212921 === 1))
{var inst_212893 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_212894 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_212893,null));var inst_212895 = cljs.core.get_in.call(null,req,inst_212894);var inst_212896 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_212897 = [inst_212895];var inst_212898 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_212896,inst_212897);var inst_212899 = foundation.app.models.fetch.call(null,foundation.test.models.campaigns,new cljs.core.Keyword(null,"params","params",4313443576),inst_212898);var state_212920__$1 = state_212920;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_212920__$1,2,inst_212899);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_212926 = [null,null,null,null,null,null,null,null];(statearr_212926[0] = state_machine__12118__auto__);
(statearr_212926[1] = 1);
return statearr_212926;
});
var state_machine__12118__auto____1 = (function (state_212920){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_212920);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e212927){if((e212927 instanceof Object))
{var ex__12121__auto__ = e212927;var statearr_212928_212930 = state_212920;(statearr_212928_212930[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_212920);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e212927;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__212931 = state_212920;
state_212920 = G__212931;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_212920){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_212920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_212929 = f__12188__auto__.call(null);(statearr_212929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_212929;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/campaigns/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_212963){var state_val_212964 = (state_212963[1]);if((state_val_212964 === 3))
{var inst_212944 = (state_212963[7]);var inst_212947 = (state_212963[8]);var inst_212952 = (state_212963[2]);var inst_212953 = foundation.test.services.init.call(null,foundation.test.models.campaigns,inst_212947,inst_212952);var inst_212954 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_212955 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_212956 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_212955,null));var inst_212957 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_212956,inst_212944];var inst_212958 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_212954,inst_212957);var inst_212959 = [inst_212958];var inst_212960 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_212959,null));var inst_212961 = cljs.core.into.call(null,inst_212953,inst_212960);var state_212963__$1 = state_212963;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_212963__$1,inst_212961);
} else
{if((state_val_212964 === 2))
{var inst_212935 = (state_212963[9]);var inst_212938 = (state_212963[10]);var inst_212944 = (state_212963[7]);var inst_212944__$1 = (state_212963[2]);var inst_212945 = (function (){var models = inst_212944__$1;var account_id = inst_212938;var id = inst_212935;return ((function (models,account_id,id,inst_212935,inst_212938,inst_212944,inst_212944__$1,state_val_212964){
return (function (p1__212932_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__212932_SHARP_),id);
});
;})(models,account_id,id,inst_212935,inst_212938,inst_212944,inst_212944__$1,state_val_212964))
})();var inst_212946 = cljs.core.set.call(null,inst_212944__$1);var inst_212947 = clojure.set.select.call(null,inst_212945,inst_212946);var inst_212948 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_212949 = [cljs.core.str("/stats"),cljs.core.str(inst_212948)].join('');var inst_212950 = foundation.test.services.get_stats.call(null,inst_212949,cljs.core.PersistentHashMap.EMPTY,foundation.test.models.campaign_stats);var state_212963__$1 = (function (){var statearr_212965 = state_212963;(statearr_212965[7] = inst_212944__$1);
(statearr_212965[8] = inst_212947);
return statearr_212965;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_212963__$1,3,inst_212950);
} else
{if((state_val_212964 === 1))
{var inst_212938 = (state_212963[10]);var inst_212933 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_212934 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_212933,null));var inst_212935 = cljs.core.get_in.call(null,req,inst_212934);var inst_212936 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_212937 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_212936,null));var inst_212938__$1 = cljs.core.get_in.call(null,req,inst_212937);var inst_212939 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_212940 = [inst_212938__$1];var inst_212941 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_212939,inst_212940);var inst_212942 = foundation.app.models.fetch.call(null,foundation.test.models.campaigns,new cljs.core.Keyword(null,"params","params",4313443576),inst_212941);var state_212963__$1 = (function (){var statearr_212966 = state_212963;(statearr_212966[9] = inst_212935);
(statearr_212966[10] = inst_212938__$1);
return statearr_212966;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_212963__$1,2,inst_212942);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_212970 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_212970[0] = state_machine__12118__auto__);
(statearr_212970[1] = 1);
return statearr_212970;
});
var state_machine__12118__auto____1 = (function (state_212963){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_212963);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e212971){if((e212971 instanceof Object))
{var ex__12121__auto__ = e212971;var statearr_212972_212974 = state_212963;(statearr_212972_212974[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_212963);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e212971;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__212975 = state_212963;
state_212963 = G__212975;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_212963){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_212963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_212973 = f__12188__auto__.call(null);(statearr_212973[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_212973;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/line_items"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_212997){var state_val_212998 = (state_212997[1]);if((state_val_212998 === 3))
{var inst_212978 = (state_212997[7]);var inst_212985 = (state_212997[2]);var inst_212986 = cljs.core.first.call(null,inst_212978);var inst_212987 = foundation.test.services.init.call(null,foundation.test.models.line_items,inst_212986,inst_212985);var inst_212988 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_212989 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_212990 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_212989,null));var inst_212991 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_212990,inst_212978];var inst_212992 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_212988,inst_212991);var inst_212993 = [inst_212992];var inst_212994 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_212993,null));var inst_212995 = cljs.core.into.call(null,inst_212987,inst_212994);var state_212997__$1 = state_212997;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_212997__$1,inst_212995);
} else
{if((state_val_212998 === 2))
{var inst_212978 = (state_212997[7]);var inst_212978__$1 = (state_212997[2]);var inst_212979 = cljs.core.first.call(null,inst_212978__$1);var inst_212980 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_212981 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_212979);var inst_212982 = [cljs.core.str("/stats"),cljs.core.str(inst_212980),cljs.core.str("/"),cljs.core.str(inst_212981)].join('');var inst_212983 = foundation.test.services.get_stats.call(null,inst_212982,inst_212979,foundation.test.models.line_item_stats);var state_212997__$1 = (function (){var statearr_212999 = state_212997;(statearr_212999[7] = inst_212978__$1);
return statearr_212999;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_212997__$1,3,inst_212983);
} else
{if((state_val_212998 === 1))
{var inst_212976 = foundation.app.models.fetch.call(null,foundation.test.models.line_items);var state_212997__$1 = state_212997;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_212997__$1,2,inst_212976);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_213003 = [null,null,null,null,null,null,null,null];(statearr_213003[0] = state_machine__12118__auto__);
(statearr_213003[1] = 1);
return statearr_213003;
});
var state_machine__12118__auto____1 = (function (state_212997){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_212997);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e213004){if((e213004 instanceof Object))
{var ex__12121__auto__ = e213004;var statearr_213005_213007 = state_212997;(statearr_213005_213007[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_212997);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e213004;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__213008 = state_212997;
state_212997 = G__213008;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_212997){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_212997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_213006 = f__12188__auto__.call(null);(statearr_213006[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_213006;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/line_items/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_213034){var state_val_213035 = (state_213034[1]);if((state_val_213035 === 3))
{var inst_213015 = (state_213034[7]);var inst_213018 = (state_213034[8]);var inst_213023 = (state_213034[2]);var inst_213024 = foundation.test.services.init.call(null,foundation.test.models.line_items,inst_213018,inst_213023);var inst_213025 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_213026 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_213027 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_213026,null));var inst_213028 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_213027,inst_213015];var inst_213029 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_213025,inst_213028);var inst_213030 = [inst_213029];var inst_213031 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_213030,null));var inst_213032 = cljs.core.into.call(null,inst_213024,inst_213031);var state_213034__$1 = state_213034;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_213034__$1,inst_213032);
} else
{if((state_val_213035 === 2))
{var inst_213015 = (state_213034[7]);var inst_213012 = (state_213034[9]);var inst_213015__$1 = (state_213034[2]);var inst_213016 = (function (){var models = inst_213015__$1;var id = inst_213012;return ((function (models,id,inst_213015,inst_213012,inst_213015__$1,state_val_213035){
return (function (p1__213009_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__213009_SHARP_),id);
});
;})(models,id,inst_213015,inst_213012,inst_213015__$1,state_val_213035))
})();var inst_213017 = cljs.core.set.call(null,inst_213015__$1);var inst_213018 = clojure.set.select.call(null,inst_213016,inst_213017);var inst_213019 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_213020 = [cljs.core.str("/stats"),cljs.core.str(inst_213019)].join('');var inst_213021 = foundation.test.services.get_stats.call(null,inst_213020,cljs.core.PersistentHashMap.EMPTY,foundation.test.models.line_item_stats);var state_213034__$1 = (function (){var statearr_213036 = state_213034;(statearr_213036[7] = inst_213015__$1);
(statearr_213036[8] = inst_213018);
return statearr_213036;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_213034__$1,3,inst_213021);
} else
{if((state_val_213035 === 1))
{var inst_213010 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_213011 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_213010,null));var inst_213012 = cljs.core.get_in.call(null,req,inst_213011);var inst_213013 = foundation.app.models.fetch.call(null,foundation.test.models.line_items);var state_213034__$1 = (function (){var statearr_213037 = state_213034;(statearr_213037[9] = inst_213012);
return statearr_213037;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_213034__$1,2,inst_213013);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_213041 = [null,null,null,null,null,null,null,null,null,null];(statearr_213041[0] = state_machine__12118__auto__);
(statearr_213041[1] = 1);
return statearr_213041;
});
var state_machine__12118__auto____1 = (function (state_213034){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_213034);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e213042){if((e213042 instanceof Object))
{var ex__12121__auto__ = e213042;var statearr_213043_213045 = state_213034;(statearr_213043_213045[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_213034);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e213042;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__213046 = state_213034;
state_213034 = G__213046;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_213034){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_213034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_213044 = f__12188__auto__.call(null);(statearr_213044[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_213044;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/promoted_accounts"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_213072){var state_val_213073 = (state_213072[1]);if((state_val_213073 === 3))
{var inst_213056 = (state_213072[7]);var inst_213053 = (state_213072[8]);var inst_213061 = (state_213072[2]);var inst_213062 = foundation.test.services.init.call(null,foundation.test.models.promoted_accounts,inst_213056,inst_213061);var inst_213063 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_213064 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_213065 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_213064,null));var inst_213066 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_213065,inst_213053];var inst_213067 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_213063,inst_213066);var inst_213068 = [inst_213067];var inst_213069 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_213068,null));var inst_213070 = cljs.core.into.call(null,inst_213062,inst_213069);var state_213072__$1 = state_213072;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_213072__$1,inst_213070);
} else
{if((state_val_213073 === 2))
{var inst_213050 = (state_213072[9]);var inst_213053 = (state_213072[8]);var inst_213053__$1 = (state_213072[2]);var inst_213054 = (function (){var models = inst_213053__$1;var id = inst_213050;return ((function (models,id,inst_213050,inst_213053,inst_213053__$1,state_val_213073){
return (function (p1__213047_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__213047_SHARP_),id);
});
;})(models,id,inst_213050,inst_213053,inst_213053__$1,state_val_213073))
})();var inst_213055 = cljs.core.set.call(null,inst_213053__$1);var inst_213056 = clojure.set.select.call(null,inst_213054,inst_213055);var inst_213057 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_213058 = [cljs.core.str("/stats"),cljs.core.str(inst_213057)].join('');var inst_213059 = foundation.test.services.get_stats.call(null,inst_213058,cljs.core.PersistentHashMap.EMPTY,foundation.test.models.promoted_account_stats);var state_213072__$1 = (function (){var statearr_213074 = state_213072;(statearr_213074[7] = inst_213056);
(statearr_213074[8] = inst_213053__$1);
return statearr_213074;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_213072__$1,3,inst_213059);
} else
{if((state_val_213073 === 1))
{var inst_213048 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_213049 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_213048,null));var inst_213050 = cljs.core.get_in.call(null,req,inst_213049);var inst_213051 = foundation.app.models.fetch.call(null,foundation.test.models.promoted_accounts);var state_213072__$1 = (function (){var statearr_213075 = state_213072;(statearr_213075[9] = inst_213050);
return statearr_213075;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_213072__$1,2,inst_213051);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_213079 = [null,null,null,null,null,null,null,null,null,null];(statearr_213079[0] = state_machine__12118__auto__);
(statearr_213079[1] = 1);
return statearr_213079;
});
var state_machine__12118__auto____1 = (function (state_213072){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_213072);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e213080){if((e213080 instanceof Object))
{var ex__12121__auto__ = e213080;var statearr_213081_213083 = state_213072;(statearr_213081_213083[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_213072);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e213080;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__213084 = state_213072;
state_213072 = G__213084;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_213072){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_213072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_213082 = f__12188__auto__.call(null);(statearr_213082[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_213082;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/promoted_accounts/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_213110){var state_val_213111 = (state_213110[1]);if((state_val_213111 === 3))
{var inst_213094 = (state_213110[7]);var inst_213091 = (state_213110[8]);var inst_213099 = (state_213110[2]);var inst_213100 = foundation.test.services.init.call(null,foundation.test.models.promoted_accounts,inst_213094,inst_213099);var inst_213101 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_213102 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_213103 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_213102,null));var inst_213104 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_213103,inst_213091];var inst_213105 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_213101,inst_213104);var inst_213106 = [inst_213105];var inst_213107 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_213106,null));var inst_213108 = cljs.core.into.call(null,inst_213100,inst_213107);var state_213110__$1 = state_213110;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_213110__$1,inst_213108);
} else
{if((state_val_213111 === 2))
{var inst_213088 = (state_213110[9]);var inst_213091 = (state_213110[8]);var inst_213091__$1 = (state_213110[2]);var inst_213092 = (function (){var models = inst_213091__$1;var id = inst_213088;return ((function (models,id,inst_213088,inst_213091,inst_213091__$1,state_val_213111){
return (function (p1__213085_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__213085_SHARP_),id);
});
;})(models,id,inst_213088,inst_213091,inst_213091__$1,state_val_213111))
})();var inst_213093 = cljs.core.set.call(null,inst_213091__$1);var inst_213094 = clojure.set.select.call(null,inst_213092,inst_213093);var inst_213095 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_213096 = [cljs.core.str("/stats"),cljs.core.str(inst_213095)].join('');var inst_213097 = foundation.test.services.get_stats.call(null,inst_213096,cljs.core.PersistentHashMap.EMPTY,foundation.test.models.promoted_account_stats);var state_213110__$1 = (function (){var statearr_213112 = state_213110;(statearr_213112[7] = inst_213094);
(statearr_213112[8] = inst_213091__$1);
return statearr_213112;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_213110__$1,3,inst_213097);
} else
{if((state_val_213111 === 1))
{var inst_213086 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_213087 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_213086,null));var inst_213088 = cljs.core.get_in.call(null,req,inst_213087);var inst_213089 = foundation.app.models.fetch.call(null,foundation.test.models.promoted_accounts);var state_213110__$1 = (function (){var statearr_213113 = state_213110;(statearr_213113[9] = inst_213088);
return statearr_213113;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_213110__$1,2,inst_213089);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_213117 = [null,null,null,null,null,null,null,null,null,null];(statearr_213117[0] = state_machine__12118__auto__);
(statearr_213117[1] = 1);
return statearr_213117;
});
var state_machine__12118__auto____1 = (function (state_213110){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_213110);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e213118){if((e213118 instanceof Object))
{var ex__12121__auto__ = e213118;var statearr_213119_213121 = state_213110;(statearr_213119_213121[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_213110);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e213118;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__213122 = state_213110;
state_213110 = G__213122;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_213110){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_213110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_213120 = f__12188__auto__.call(null);(statearr_213120[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_213120;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/promoted_tweets"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_213148){var state_val_213149 = (state_213148[1]);if((state_val_213149 === 3))
{var inst_213129 = (state_213148[7]);var inst_213132 = (state_213148[8]);var inst_213137 = (state_213148[2]);var inst_213138 = foundation.test.services.init.call(null,foundation.test.models.promoted_tweets,inst_213132,inst_213137);var inst_213139 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_213140 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_213141 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_213140,null));var inst_213142 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_213141,inst_213129];var inst_213143 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_213139,inst_213142);var inst_213144 = [inst_213143];var inst_213145 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_213144,null));var inst_213146 = cljs.core.into.call(null,inst_213138,inst_213145);var state_213148__$1 = state_213148;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_213148__$1,inst_213146);
} else
{if((state_val_213149 === 2))
{var inst_213129 = (state_213148[7]);var inst_213126 = (state_213148[9]);var inst_213129__$1 = (state_213148[2]);var inst_213130 = (function (){var models = inst_213129__$1;var id = inst_213126;return ((function (models,id,inst_213129,inst_213126,inst_213129__$1,state_val_213149){
return (function (p1__213123_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__213123_SHARP_),id);
});
;})(models,id,inst_213129,inst_213126,inst_213129__$1,state_val_213149))
})();var inst_213131 = cljs.core.set.call(null,inst_213129__$1);var inst_213132 = clojure.set.select.call(null,inst_213130,inst_213131);var inst_213133 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_213134 = [cljs.core.str("/stats"),cljs.core.str(inst_213133)].join('');var inst_213135 = foundation.test.services.get_stats.call(null,inst_213134,cljs.core.PersistentHashMap.EMPTY,foundation.test.models.promoted_tweet_stats);var state_213148__$1 = (function (){var statearr_213150 = state_213148;(statearr_213150[7] = inst_213129__$1);
(statearr_213150[8] = inst_213132);
return statearr_213150;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_213148__$1,3,inst_213135);
} else
{if((state_val_213149 === 1))
{var inst_213124 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_213125 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_213124,null));var inst_213126 = cljs.core.get_in.call(null,req,inst_213125);var inst_213127 = foundation.app.models.fetch.call(null,foundation.test.models.promoted_tweets);var state_213148__$1 = (function (){var statearr_213151 = state_213148;(statearr_213151[9] = inst_213126);
return statearr_213151;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_213148__$1,2,inst_213127);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_213155 = [null,null,null,null,null,null,null,null,null,null];(statearr_213155[0] = state_machine__12118__auto__);
(statearr_213155[1] = 1);
return statearr_213155;
});
var state_machine__12118__auto____1 = (function (state_213148){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_213148);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e213156){if((e213156 instanceof Object))
{var ex__12121__auto__ = e213156;var statearr_213157_213159 = state_213148;(statearr_213157_213159[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_213148);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e213156;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__213160 = state_213148;
state_213148 = G__213160;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_213148){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_213148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_213158 = f__12188__auto__.call(null);(statearr_213158[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_213158;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/promoted_tweets/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_213186){var state_val_213187 = (state_213186[1]);if((state_val_213187 === 3))
{var inst_213167 = (state_213186[7]);var inst_213170 = (state_213186[8]);var inst_213175 = (state_213186[2]);var inst_213176 = foundation.test.services.init.call(null,foundation.test.models.promoted_tweets,inst_213170,inst_213175);var inst_213177 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_213178 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_213179 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_213178,null));var inst_213180 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_213179,inst_213167];var inst_213181 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_213177,inst_213180);var inst_213182 = [inst_213181];var inst_213183 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_213182,null));var inst_213184 = cljs.core.into.call(null,inst_213176,inst_213183);var state_213186__$1 = state_213186;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_213186__$1,inst_213184);
} else
{if((state_val_213187 === 2))
{var inst_213167 = (state_213186[7]);var inst_213164 = (state_213186[9]);var inst_213167__$1 = (state_213186[2]);var inst_213168 = (function (){var models = inst_213167__$1;var id = inst_213164;return ((function (models,id,inst_213167,inst_213164,inst_213167__$1,state_val_213187){
return (function (p1__213161_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__213161_SHARP_),id);
});
;})(models,id,inst_213167,inst_213164,inst_213167__$1,state_val_213187))
})();var inst_213169 = cljs.core.set.call(null,inst_213167__$1);var inst_213170 = clojure.set.select.call(null,inst_213168,inst_213169);var inst_213171 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_213172 = [cljs.core.str("/stats"),cljs.core.str(inst_213171)].join('');var inst_213173 = foundation.test.services.get_stats.call(null,inst_213172,cljs.core.PersistentHashMap.EMPTY,foundation.test.models.promoted_tweet_stats);var state_213186__$1 = (function (){var statearr_213188 = state_213186;(statearr_213188[7] = inst_213167__$1);
(statearr_213188[8] = inst_213170);
return statearr_213188;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_213186__$1,3,inst_213173);
} else
{if((state_val_213187 === 1))
{var inst_213162 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_213163 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_213162,null));var inst_213164 = cljs.core.get_in.call(null,req,inst_213163);var inst_213165 = foundation.app.models.fetch.call(null,foundation.test.models.promoted_tweets);var state_213186__$1 = (function (){var statearr_213189 = state_213186;(statearr_213189[9] = inst_213164);
return statearr_213189;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_213186__$1,2,inst_213165);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_213193 = [null,null,null,null,null,null,null,null,null,null];(statearr_213193[0] = state_machine__12118__auto__);
(statearr_213193[1] = 1);
return statearr_213193;
});
var state_machine__12118__auto____1 = (function (state_213186){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_213186);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e213194){if((e213194 instanceof Object))
{var ex__12121__auto__ = e213194;var statearr_213195_213197 = state_213186;(statearr_213195_213197[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_213186);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e213194;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__213198 = state_213186;
state_213186 = G__213198;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_213186){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_213186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_213196 = f__12188__auto__.call(null);(statearr_213196[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_213196;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));

//# sourceMappingURL=services.js.map