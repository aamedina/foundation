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
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_209006){var state_val_209007 = (state_209006[1]);if((state_val_209007 === 3))
{var inst_208987 = (state_209006[7]);var inst_208994 = (state_209006[2]);var inst_208995 = cljs.core.first.call(null,inst_208987);var inst_208996 = foundation.test.services.init.call(null,foundation.test.models.accounts,inst_208995,inst_208994);var inst_208997 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_208998 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_208999 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_208998,null));var inst_209000 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_208999,inst_208987];var inst_209001 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_208997,inst_209000);var inst_209002 = [inst_209001];var inst_209003 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_209002,null));var inst_209004 = cljs.core.into.call(null,inst_208996,inst_209003);var state_209006__$1 = state_209006;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_209006__$1,inst_209004);
} else
{if((state_val_209007 === 2))
{var inst_208987 = (state_209006[7]);var inst_208987__$1 = (state_209006[2]);var inst_208988 = cljs.core.first.call(null,inst_208987__$1);var inst_208989 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_208990 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_208988);var inst_208991 = [cljs.core.str("/stats"),cljs.core.str(inst_208989),cljs.core.str("/"),cljs.core.str(inst_208990)].join('');var inst_208992 = foundation.test.services.get_stats.call(null,inst_208991,inst_208988,foundation.test.models.account_stats);var state_209006__$1 = (function (){var statearr_209008 = state_209006;(statearr_209008[7] = inst_208987__$1);
return statearr_209008;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_209006__$1,3,inst_208992);
} else
{if((state_val_209007 === 1))
{var inst_208985 = foundation.app.models.fetch.call(null,foundation.test.models.accounts);var state_209006__$1 = state_209006;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_209006__$1,2,inst_208985);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_209012 = [null,null,null,null,null,null,null,null];(statearr_209012[0] = state_machine__12118__auto__);
(statearr_209012[1] = 1);
return statearr_209012;
});
var state_machine__12118__auto____1 = (function (state_209006){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_209006);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e209013){if((e209013 instanceof Object))
{var ex__12121__auto__ = e209013;var statearr_209014_209016 = state_209006;(statearr_209014_209016[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_209006);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e209013;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__209017 = state_209006;
state_209006 = G__209017;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_209006){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_209006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_209015 = f__12188__auto__.call(null);(statearr_209015[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_209015;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_209043){var state_val_209044 = (state_209043[1]);if((state_val_209044 === 3))
{var inst_209024 = (state_209043[7]);var inst_209027 = (state_209043[8]);var inst_209032 = (state_209043[2]);var inst_209033 = foundation.test.services.init.call(null,foundation.test.models.accounts,inst_209027,inst_209032);var inst_209034 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_209035 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_209036 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_209035,null));var inst_209037 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_209036,inst_209024];var inst_209038 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_209034,inst_209037);var inst_209039 = [inst_209038];var inst_209040 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_209039,null));var inst_209041 = cljs.core.into.call(null,inst_209033,inst_209040);var state_209043__$1 = state_209043;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_209043__$1,inst_209041);
} else
{if((state_val_209044 === 2))
{var inst_209024 = (state_209043[7]);var inst_209021 = (state_209043[9]);var inst_209024__$1 = (state_209043[2]);var inst_209025 = (function (){var models = inst_209024__$1;var id = inst_209021;return ((function (models,id,inst_209024,inst_209021,inst_209024__$1,state_val_209044){
return (function (p1__209018_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__209018_SHARP_),id);
});
;})(models,id,inst_209024,inst_209021,inst_209024__$1,state_val_209044))
})();var inst_209026 = cljs.core.set.call(null,inst_209024__$1);var inst_209027 = clojure.set.select.call(null,inst_209025,inst_209026);var inst_209028 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_209029 = [cljs.core.str("/stats"),cljs.core.str(inst_209028)].join('');var inst_209030 = foundation.test.services.get_stats.call(null,inst_209029,cljs.core.PersistentHashMap.EMPTY,foundation.test.models.account_stats);var state_209043__$1 = (function (){var statearr_209045 = state_209043;(statearr_209045[7] = inst_209024__$1);
(statearr_209045[8] = inst_209027);
return statearr_209045;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_209043__$1,3,inst_209030);
} else
{if((state_val_209044 === 1))
{var inst_209019 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_209020 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_209019,null));var inst_209021 = cljs.core.get_in.call(null,req,inst_209020);var inst_209022 = foundation.app.models.fetch.call(null,foundation.test.models.accounts);var state_209043__$1 = (function (){var statearr_209046 = state_209043;(statearr_209046[9] = inst_209021);
return statearr_209046;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_209043__$1,2,inst_209022);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_209050 = [null,null,null,null,null,null,null,null,null,null];(statearr_209050[0] = state_machine__12118__auto__);
(statearr_209050[1] = 1);
return statearr_209050;
});
var state_machine__12118__auto____1 = (function (state_209043){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_209043);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e209051){if((e209051 instanceof Object))
{var ex__12121__auto__ = e209051;var statearr_209052_209054 = state_209043;(statearr_209052_209054[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_209043);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e209051;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__209055 = state_209043;
state_209043 = G__209055;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_209043){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_209043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_209053 = f__12188__auto__.call(null);(statearr_209053[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_209053;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/account-id/campaigns"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_209077){var state_val_209078 = (state_209077[1]);if((state_val_209078 === 3))
{var inst_209058 = (state_209077[7]);var inst_209065 = (state_209077[2]);var inst_209066 = cljs.core.first.call(null,inst_209058);var inst_209067 = foundation.test.services.init.call(null,foundation.test.models.campaigns,inst_209066,inst_209065);var inst_209068 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_209069 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_209070 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_209069,null));var inst_209071 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_209070,inst_209058];var inst_209072 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_209068,inst_209071);var inst_209073 = [inst_209072];var inst_209074 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_209073,null));var inst_209075 = cljs.core.into.call(null,inst_209067,inst_209074);var state_209077__$1 = state_209077;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_209077__$1,inst_209075);
} else
{if((state_val_209078 === 2))
{var inst_209058 = (state_209077[7]);var inst_209058__$1 = (state_209077[2]);var inst_209059 = cljs.core.first.call(null,inst_209058__$1);var inst_209060 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_209061 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_209059);var inst_209062 = [cljs.core.str("/stats"),cljs.core.str(inst_209060),cljs.core.str("/"),cljs.core.str(inst_209061)].join('');var inst_209063 = foundation.test.services.get_stats.call(null,inst_209062,inst_209059,foundation.test.models.campaign_stats);var state_209077__$1 = (function (){var statearr_209079 = state_209077;(statearr_209079[7] = inst_209058__$1);
return statearr_209079;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_209077__$1,3,inst_209063);
} else
{if((state_val_209078 === 1))
{var inst_209056 = foundation.app.models.fetch.call(null,foundation.test.models.campaigns);var state_209077__$1 = state_209077;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_209077__$1,2,inst_209056);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_209083 = [null,null,null,null,null,null,null,null];(statearr_209083[0] = state_machine__12118__auto__);
(statearr_209083[1] = 1);
return statearr_209083;
});
var state_machine__12118__auto____1 = (function (state_209077){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_209077);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e209084){if((e209084 instanceof Object))
{var ex__12121__auto__ = e209084;var statearr_209085_209087 = state_209077;(statearr_209085_209087[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_209077);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e209084;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__209088 = state_209077;
state_209077 = G__209088;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_209077){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_209077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_209086 = f__12188__auto__.call(null);(statearr_209086[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_209086;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/account-id/campaigns/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_209114){var state_val_209115 = (state_209114[1]);if((state_val_209115 === 3))
{var inst_209098 = (state_209114[7]);var inst_209095 = (state_209114[8]);var inst_209103 = (state_209114[2]);var inst_209104 = foundation.test.services.init.call(null,foundation.test.models.campaigns,inst_209098,inst_209103);var inst_209105 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_209106 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_209107 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_209106,null));var inst_209108 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_209107,inst_209095];var inst_209109 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_209105,inst_209108);var inst_209110 = [inst_209109];var inst_209111 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_209110,null));var inst_209112 = cljs.core.into.call(null,inst_209104,inst_209111);var state_209114__$1 = state_209114;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_209114__$1,inst_209112);
} else
{if((state_val_209115 === 2))
{var inst_209095 = (state_209114[8]);var inst_209092 = (state_209114[9]);var inst_209095__$1 = (state_209114[2]);var inst_209096 = (function (){var models = inst_209095__$1;var id = inst_209092;return ((function (models,id,inst_209095,inst_209092,inst_209095__$1,state_val_209115){
return (function (p1__209089_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__209089_SHARP_),id);
});
;})(models,id,inst_209095,inst_209092,inst_209095__$1,state_val_209115))
})();var inst_209097 = cljs.core.set.call(null,inst_209095__$1);var inst_209098 = clojure.set.select.call(null,inst_209096,inst_209097);var inst_209099 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_209100 = [cljs.core.str("/stats"),cljs.core.str(inst_209099)].join('');var inst_209101 = foundation.test.services.get_stats.call(null,inst_209100,cljs.core.PersistentHashMap.EMPTY,foundation.test.models.campaign_stats);var state_209114__$1 = (function (){var statearr_209116 = state_209114;(statearr_209116[7] = inst_209098);
(statearr_209116[8] = inst_209095__$1);
return statearr_209116;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_209114__$1,3,inst_209101);
} else
{if((state_val_209115 === 1))
{var inst_209090 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_209091 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_209090,null));var inst_209092 = cljs.core.get_in.call(null,req,inst_209091);var inst_209093 = foundation.app.models.fetch.call(null,foundation.test.models.campaigns);var state_209114__$1 = (function (){var statearr_209117 = state_209114;(statearr_209117[9] = inst_209092);
return statearr_209117;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_209114__$1,2,inst_209093);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_209121 = [null,null,null,null,null,null,null,null,null,null];(statearr_209121[0] = state_machine__12118__auto__);
(statearr_209121[1] = 1);
return statearr_209121;
});
var state_machine__12118__auto____1 = (function (state_209114){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_209114);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e209122){if((e209122 instanceof Object))
{var ex__12121__auto__ = e209122;var statearr_209123_209125 = state_209114;(statearr_209123_209125[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_209114);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e209122;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__209126 = state_209114;
state_209114 = G__209126;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_209114){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_209114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_209124 = f__12188__auto__.call(null);(statearr_209124[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_209124;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/account-id/line_items"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_209148){var state_val_209149 = (state_209148[1]);if((state_val_209149 === 3))
{var inst_209129 = (state_209148[7]);var inst_209136 = (state_209148[2]);var inst_209137 = cljs.core.first.call(null,inst_209129);var inst_209138 = foundation.test.services.init.call(null,foundation.test.models.line_items,inst_209137,inst_209136);var inst_209139 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_209140 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_209141 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_209140,null));var inst_209142 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_209141,inst_209129];var inst_209143 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_209139,inst_209142);var inst_209144 = [inst_209143];var inst_209145 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_209144,null));var inst_209146 = cljs.core.into.call(null,inst_209138,inst_209145);var state_209148__$1 = state_209148;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_209148__$1,inst_209146);
} else
{if((state_val_209149 === 2))
{var inst_209129 = (state_209148[7]);var inst_209129__$1 = (state_209148[2]);var inst_209130 = cljs.core.first.call(null,inst_209129__$1);var inst_209131 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_209132 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_209130);var inst_209133 = [cljs.core.str("/stats"),cljs.core.str(inst_209131),cljs.core.str("/"),cljs.core.str(inst_209132)].join('');var inst_209134 = foundation.test.services.get_stats.call(null,inst_209133,inst_209130,foundation.test.models.line_item_stats);var state_209148__$1 = (function (){var statearr_209150 = state_209148;(statearr_209150[7] = inst_209129__$1);
return statearr_209150;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_209148__$1,3,inst_209134);
} else
{if((state_val_209149 === 1))
{var inst_209127 = foundation.app.models.fetch.call(null,foundation.test.models.line_items);var state_209148__$1 = state_209148;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_209148__$1,2,inst_209127);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_209154 = [null,null,null,null,null,null,null,null];(statearr_209154[0] = state_machine__12118__auto__);
(statearr_209154[1] = 1);
return statearr_209154;
});
var state_machine__12118__auto____1 = (function (state_209148){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_209148);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e209155){if((e209155 instanceof Object))
{var ex__12121__auto__ = e209155;var statearr_209156_209158 = state_209148;(statearr_209156_209158[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_209148);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e209155;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__209159 = state_209148;
state_209148 = G__209159;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_209148){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_209148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_209157 = f__12188__auto__.call(null);(statearr_209157[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_209157;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/account-id/line_items/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_209185){var state_val_209186 = (state_209185[1]);if((state_val_209186 === 3))
{var inst_209166 = (state_209185[7]);var inst_209169 = (state_209185[8]);var inst_209174 = (state_209185[2]);var inst_209175 = foundation.test.services.init.call(null,foundation.test.models.line_items,inst_209169,inst_209174);var inst_209176 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_209177 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_209178 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_209177,null));var inst_209179 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_209178,inst_209166];var inst_209180 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_209176,inst_209179);var inst_209181 = [inst_209180];var inst_209182 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_209181,null));var inst_209183 = cljs.core.into.call(null,inst_209175,inst_209182);var state_209185__$1 = state_209185;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_209185__$1,inst_209183);
} else
{if((state_val_209186 === 2))
{var inst_209163 = (state_209185[9]);var inst_209166 = (state_209185[7]);var inst_209166__$1 = (state_209185[2]);var inst_209167 = (function (){var models = inst_209166__$1;var id = inst_209163;return ((function (models,id,inst_209163,inst_209166,inst_209166__$1,state_val_209186){
return (function (p1__209160_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__209160_SHARP_),id);
});
;})(models,id,inst_209163,inst_209166,inst_209166__$1,state_val_209186))
})();var inst_209168 = cljs.core.set.call(null,inst_209166__$1);var inst_209169 = clojure.set.select.call(null,inst_209167,inst_209168);var inst_209170 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_209171 = [cljs.core.str("/stats"),cljs.core.str(inst_209170)].join('');var inst_209172 = foundation.test.services.get_stats.call(null,inst_209171,cljs.core.PersistentHashMap.EMPTY,foundation.test.models.line_item_stats);var state_209185__$1 = (function (){var statearr_209187 = state_209185;(statearr_209187[7] = inst_209166__$1);
(statearr_209187[8] = inst_209169);
return statearr_209187;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_209185__$1,3,inst_209172);
} else
{if((state_val_209186 === 1))
{var inst_209161 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_209162 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_209161,null));var inst_209163 = cljs.core.get_in.call(null,req,inst_209162);var inst_209164 = foundation.app.models.fetch.call(null,foundation.test.models.line_items);var state_209185__$1 = (function (){var statearr_209188 = state_209185;(statearr_209188[9] = inst_209163);
return statearr_209188;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_209185__$1,2,inst_209164);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_209192 = [null,null,null,null,null,null,null,null,null,null];(statearr_209192[0] = state_machine__12118__auto__);
(statearr_209192[1] = 1);
return statearr_209192;
});
var state_machine__12118__auto____1 = (function (state_209185){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_209185);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e209193){if((e209193 instanceof Object))
{var ex__12121__auto__ = e209193;var statearr_209194_209196 = state_209185;(statearr_209194_209196[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_209185);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e209193;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__209197 = state_209185;
state_209185 = G__209197;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_209185){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_209185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_209195 = f__12188__auto__.call(null);(statearr_209195[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_209195;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/account-id/promoted_accounts"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_209223){var state_val_209224 = (state_209223[1]);if((state_val_209224 === 3))
{var inst_209207 = (state_209223[7]);var inst_209204 = (state_209223[8]);var inst_209212 = (state_209223[2]);var inst_209213 = foundation.test.services.init.call(null,foundation.test.models.promoted_accounts,inst_209207,inst_209212);var inst_209214 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_209215 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_209216 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_209215,null));var inst_209217 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_209216,inst_209204];var inst_209218 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_209214,inst_209217);var inst_209219 = [inst_209218];var inst_209220 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_209219,null));var inst_209221 = cljs.core.into.call(null,inst_209213,inst_209220);var state_209223__$1 = state_209223;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_209223__$1,inst_209221);
} else
{if((state_val_209224 === 2))
{var inst_209204 = (state_209223[8]);var inst_209201 = (state_209223[9]);var inst_209204__$1 = (state_209223[2]);var inst_209205 = (function (){var models = inst_209204__$1;var id = inst_209201;return ((function (models,id,inst_209204,inst_209201,inst_209204__$1,state_val_209224){
return (function (p1__209198_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__209198_SHARP_),id);
});
;})(models,id,inst_209204,inst_209201,inst_209204__$1,state_val_209224))
})();var inst_209206 = cljs.core.set.call(null,inst_209204__$1);var inst_209207 = clojure.set.select.call(null,inst_209205,inst_209206);var inst_209208 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_209209 = [cljs.core.str("/stats"),cljs.core.str(inst_209208)].join('');var inst_209210 = foundation.test.services.get_stats.call(null,inst_209209,cljs.core.PersistentHashMap.EMPTY,foundation.test.models.promoted_account_stats);var state_209223__$1 = (function (){var statearr_209225 = state_209223;(statearr_209225[7] = inst_209207);
(statearr_209225[8] = inst_209204__$1);
return statearr_209225;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_209223__$1,3,inst_209210);
} else
{if((state_val_209224 === 1))
{var inst_209199 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_209200 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_209199,null));var inst_209201 = cljs.core.get_in.call(null,req,inst_209200);var inst_209202 = foundation.app.models.fetch.call(null,foundation.test.models.promoted_accounts);var state_209223__$1 = (function (){var statearr_209226 = state_209223;(statearr_209226[9] = inst_209201);
return statearr_209226;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_209223__$1,2,inst_209202);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_209230 = [null,null,null,null,null,null,null,null,null,null];(statearr_209230[0] = state_machine__12118__auto__);
(statearr_209230[1] = 1);
return statearr_209230;
});
var state_machine__12118__auto____1 = (function (state_209223){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_209223);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e209231){if((e209231 instanceof Object))
{var ex__12121__auto__ = e209231;var statearr_209232_209234 = state_209223;(statearr_209232_209234[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_209223);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e209231;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__209235 = state_209223;
state_209223 = G__209235;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_209223){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_209223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_209233 = f__12188__auto__.call(null);(statearr_209233[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_209233;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/account-id/promoted_accounts/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_209261){var state_val_209262 = (state_209261[1]);if((state_val_209262 === 3))
{var inst_209242 = (state_209261[7]);var inst_209245 = (state_209261[8]);var inst_209250 = (state_209261[2]);var inst_209251 = foundation.test.services.init.call(null,foundation.test.models.promoted_accounts,inst_209245,inst_209250);var inst_209252 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_209253 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_209254 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_209253,null));var inst_209255 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_209254,inst_209242];var inst_209256 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_209252,inst_209255);var inst_209257 = [inst_209256];var inst_209258 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_209257,null));var inst_209259 = cljs.core.into.call(null,inst_209251,inst_209258);var state_209261__$1 = state_209261;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_209261__$1,inst_209259);
} else
{if((state_val_209262 === 2))
{var inst_209239 = (state_209261[9]);var inst_209242 = (state_209261[7]);var inst_209242__$1 = (state_209261[2]);var inst_209243 = (function (){var models = inst_209242__$1;var id = inst_209239;return ((function (models,id,inst_209239,inst_209242,inst_209242__$1,state_val_209262){
return (function (p1__209236_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__209236_SHARP_),id);
});
;})(models,id,inst_209239,inst_209242,inst_209242__$1,state_val_209262))
})();var inst_209244 = cljs.core.set.call(null,inst_209242__$1);var inst_209245 = clojure.set.select.call(null,inst_209243,inst_209244);var inst_209246 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_209247 = [cljs.core.str("/stats"),cljs.core.str(inst_209246)].join('');var inst_209248 = foundation.test.services.get_stats.call(null,inst_209247,cljs.core.PersistentHashMap.EMPTY,foundation.test.models.promoted_account_stats);var state_209261__$1 = (function (){var statearr_209263 = state_209261;(statearr_209263[7] = inst_209242__$1);
(statearr_209263[8] = inst_209245);
return statearr_209263;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_209261__$1,3,inst_209248);
} else
{if((state_val_209262 === 1))
{var inst_209237 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_209238 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_209237,null));var inst_209239 = cljs.core.get_in.call(null,req,inst_209238);var inst_209240 = foundation.app.models.fetch.call(null,foundation.test.models.promoted_accounts);var state_209261__$1 = (function (){var statearr_209264 = state_209261;(statearr_209264[9] = inst_209239);
return statearr_209264;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_209261__$1,2,inst_209240);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_209268 = [null,null,null,null,null,null,null,null,null,null];(statearr_209268[0] = state_machine__12118__auto__);
(statearr_209268[1] = 1);
return statearr_209268;
});
var state_machine__12118__auto____1 = (function (state_209261){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_209261);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e209269){if((e209269 instanceof Object))
{var ex__12121__auto__ = e209269;var statearr_209270_209272 = state_209261;(statearr_209270_209272[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_209261);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e209269;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__209273 = state_209261;
state_209261 = G__209273;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_209261){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_209261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_209271 = f__12188__auto__.call(null);(statearr_209271[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_209271;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/account-id/promoted_tweets"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_209299){var state_val_209300 = (state_209299[1]);if((state_val_209300 === 3))
{var inst_209283 = (state_209299[7]);var inst_209280 = (state_209299[8]);var inst_209288 = (state_209299[2]);var inst_209289 = foundation.test.services.init.call(null,foundation.test.models.promoted_tweets,inst_209283,inst_209288);var inst_209290 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_209291 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_209292 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_209291,null));var inst_209293 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_209292,inst_209280];var inst_209294 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_209290,inst_209293);var inst_209295 = [inst_209294];var inst_209296 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_209295,null));var inst_209297 = cljs.core.into.call(null,inst_209289,inst_209296);var state_209299__$1 = state_209299;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_209299__$1,inst_209297);
} else
{if((state_val_209300 === 2))
{var inst_209280 = (state_209299[8]);var inst_209277 = (state_209299[9]);var inst_209280__$1 = (state_209299[2]);var inst_209281 = (function (){var models = inst_209280__$1;var id = inst_209277;return ((function (models,id,inst_209280,inst_209277,inst_209280__$1,state_val_209300){
return (function (p1__209274_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__209274_SHARP_),id);
});
;})(models,id,inst_209280,inst_209277,inst_209280__$1,state_val_209300))
})();var inst_209282 = cljs.core.set.call(null,inst_209280__$1);var inst_209283 = clojure.set.select.call(null,inst_209281,inst_209282);var inst_209284 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_209285 = [cljs.core.str("/stats"),cljs.core.str(inst_209284)].join('');var inst_209286 = foundation.test.services.get_stats.call(null,inst_209285,cljs.core.PersistentHashMap.EMPTY,foundation.test.models.promoted_tweet_stats);var state_209299__$1 = (function (){var statearr_209301 = state_209299;(statearr_209301[7] = inst_209283);
(statearr_209301[8] = inst_209280__$1);
return statearr_209301;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_209299__$1,3,inst_209286);
} else
{if((state_val_209300 === 1))
{var inst_209275 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_209276 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_209275,null));var inst_209277 = cljs.core.get_in.call(null,req,inst_209276);var inst_209278 = foundation.app.models.fetch.call(null,foundation.test.models.promoted_tweets);var state_209299__$1 = (function (){var statearr_209302 = state_209299;(statearr_209302[9] = inst_209277);
return statearr_209302;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_209299__$1,2,inst_209278);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_209306 = [null,null,null,null,null,null,null,null,null,null];(statearr_209306[0] = state_machine__12118__auto__);
(statearr_209306[1] = 1);
return statearr_209306;
});
var state_machine__12118__auto____1 = (function (state_209299){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_209299);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e209307){if((e209307 instanceof Object))
{var ex__12121__auto__ = e209307;var statearr_209308_209310 = state_209299;(statearr_209308_209310[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_209299);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e209307;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__209311 = state_209299;
state_209299 = G__209311;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_209299){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_209299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_209309 = f__12188__auto__.call(null);(statearr_209309[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_209309;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/account-id/promoted_tweets/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_209337){var state_val_209338 = (state_209337[1]);if((state_val_209338 === 3))
{var inst_209318 = (state_209337[7]);var inst_209321 = (state_209337[8]);var inst_209326 = (state_209337[2]);var inst_209327 = foundation.test.services.init.call(null,foundation.test.models.promoted_tweets,inst_209321,inst_209326);var inst_209328 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_209329 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_209330 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_209329,null));var inst_209331 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_209330,inst_209318];var inst_209332 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_209328,inst_209331);var inst_209333 = [inst_209332];var inst_209334 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_209333,null));var inst_209335 = cljs.core.into.call(null,inst_209327,inst_209334);var state_209337__$1 = state_209337;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_209337__$1,inst_209335);
} else
{if((state_val_209338 === 2))
{var inst_209318 = (state_209337[7]);var inst_209315 = (state_209337[9]);var inst_209318__$1 = (state_209337[2]);var inst_209319 = (function (){var models = inst_209318__$1;var id = inst_209315;return ((function (models,id,inst_209318,inst_209315,inst_209318__$1,state_val_209338){
return (function (p1__209312_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__209312_SHARP_),id);
});
;})(models,id,inst_209318,inst_209315,inst_209318__$1,state_val_209338))
})();var inst_209320 = cljs.core.set.call(null,inst_209318__$1);var inst_209321 = clojure.set.select.call(null,inst_209319,inst_209320);var inst_209322 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_209323 = [cljs.core.str("/stats"),cljs.core.str(inst_209322)].join('');var inst_209324 = foundation.test.services.get_stats.call(null,inst_209323,cljs.core.PersistentHashMap.EMPTY,foundation.test.models.promoted_tweet_stats);var state_209337__$1 = (function (){var statearr_209339 = state_209337;(statearr_209339[7] = inst_209318__$1);
(statearr_209339[8] = inst_209321);
return statearr_209339;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_209337__$1,3,inst_209324);
} else
{if((state_val_209338 === 1))
{var inst_209313 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_209314 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_209313,null));var inst_209315 = cljs.core.get_in.call(null,req,inst_209314);var inst_209316 = foundation.app.models.fetch.call(null,foundation.test.models.promoted_tweets);var state_209337__$1 = (function (){var statearr_209340 = state_209337;(statearr_209340[9] = inst_209315);
return statearr_209340;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_209337__$1,2,inst_209316);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_209344 = [null,null,null,null,null,null,null,null,null,null];(statearr_209344[0] = state_machine__12118__auto__);
(statearr_209344[1] = 1);
return statearr_209344;
});
var state_machine__12118__auto____1 = (function (state_209337){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_209337);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e209345){if((e209345 instanceof Object))
{var ex__12121__auto__ = e209345;var statearr_209346_209348 = state_209337;(statearr_209346_209348[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_209337);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e209345;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__209349 = state_209337;
state_209337 = G__209349;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_209337){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_209337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_209347 = f__12188__auto__.call(null);(statearr_209347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_209347;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));

//# sourceMappingURL=services.js.map