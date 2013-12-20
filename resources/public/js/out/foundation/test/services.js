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
foundation.test.services.init = (function init(resource,model,stats,total_stats){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"init","init",1017141378),foundation.app.message.path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null),new cljs.core.Keyword(null,"model","model",1117974171),model,new cljs.core.Keyword(null,"stats","stats",1123661841),stats,new cljs.core.Keyword(null,"total-stats","total-stats",3484558408),total_stats], true, false),new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"init","init",1017141378),foundation.app.message.path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null),new cljs.core.Keyword(null,"resource","resource",672839552),resource], true, false)], null);
});
foundation.test.services.get_route = (function get_route(path,params){return foundation.test.routes.app_routes.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"uri","uri",1014020318),path,new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"get","get",1014006472),new cljs.core.Keyword(null,"params","params",4313443576),params], null));
});
/**
* @param {...*} var_args
*/
foundation.test.services.get_stats = (function() { 
var get_stats__delegate = function (path,params,model,p__425932){var map__425934 = p__425932;var map__425934__$1 = ((cljs.core.seq_QMARK_.call(null,map__425934))?cljs.core.apply.call(null,cljs.core.hash_map,map__425934):map__425934);var granularity = cljs.core.get.call(null,map__425934__$1,new cljs.core.Keyword(null,"granularity","granularity",2833735872),"HOUR");cljs.core.println.call(null,path,params,model);
return foundation.test.routes.app_routes.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",1014020318),path,new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"get","get",1014006472),new cljs.core.Keyword(null,"params","params",4313443576),params,new cljs.core.Keyword(null,"model","model",1117974171),model,new cljs.core.Keyword(null,"query-params","query-params",1080249757),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start-time","start-time",3689550026),foundation.test.models.start_time.call(null,model),new cljs.core.Keyword(null,"end-time","end-time",2693279729),foundation.test.models.end_time.call(null,model),new cljs.core.Keyword(null,"granularity","granularity",2833735872),granularity], null)], null));
};
var get_stats = function (path,params,model,var_args){
var p__425932 = null;if (arguments.length > 3) {
  p__425932 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return get_stats__delegate.call(this,path,params,model,p__425932);};
get_stats.cljs$lang$maxFixedArity = 3;
get_stats.cljs$lang$applyTo = (function (arglist__425935){
var path = cljs.core.first(arglist__425935);
arglist__425935 = cljs.core.next(arglist__425935);
var params = cljs.core.first(arglist__425935);
arglist__425935 = cljs.core.next(arglist__425935);
var model = cljs.core.first(arglist__425935);
var p__425932 = cljs.core.rest(arglist__425935);
return get_stats__delegate(path,params,model,p__425932);
});
get_stats.cljs$core$IFn$_invoke$arity$variadic = get_stats__delegate;
return get_stats;
})()
;
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/"], null),(function (req){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"navigate","navigate",3116398819),foundation.app.message.path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"router","router",4383738555)], null),new cljs.core.Keyword(null,"to-path","to-path",4107943849),"/accounts"], true, false)], null);
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_425963){var state_val_425964 = (state_425963[1]);if((state_val_425964 === 4))
{var inst_425938 = (state_425963[7]);var inst_425945 = (state_425963[8]);var inst_425951 = (state_425963[2]);var inst_425952 = cljs.core.first.call(null,inst_425938);var inst_425953 = foundation.test.services.init.call(null,foundation.test.models.accounts,inst_425952,inst_425945,inst_425951);var inst_425954 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_425955 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_425956 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_425955,null));var inst_425957 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_425956,inst_425938];var inst_425958 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_425954,inst_425957);var inst_425959 = [inst_425958];var inst_425960 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_425959,null));var inst_425961 = cljs.core.into.call(null,inst_425953,inst_425960);var state_425963__$1 = state_425963;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_425963__$1,inst_425961);
} else
{if((state_val_425964 === 3))
{var inst_425939 = (state_425963[9]);var inst_425945 = (state_425963[2]);var inst_425946 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_425947 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_425939);var inst_425948 = [cljs.core.str("/stats"),cljs.core.str(inst_425946),cljs.core.str("/"),cljs.core.str(inst_425947)].join('');var inst_425949 = foundation.test.services.get_stats.call(null,inst_425948,inst_425939,foundation.test.models.account_stats,new cljs.core.Keyword(null,"granularity","granularity",2833735872),"TOTAL");var state_425963__$1 = (function (){var statearr_425965 = state_425963;(statearr_425965[8] = inst_425945);
return statearr_425965;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_425963__$1,4,inst_425949);
} else
{if((state_val_425964 === 2))
{var inst_425939 = (state_425963[9]);var inst_425938 = (state_425963[7]);var inst_425938__$1 = (state_425963[2]);var inst_425939__$1 = cljs.core.first.call(null,inst_425938__$1);var inst_425940 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_425941 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_425939__$1);var inst_425942 = [cljs.core.str("/stats"),cljs.core.str(inst_425940),cljs.core.str("/"),cljs.core.str(inst_425941)].join('');var inst_425943 = foundation.test.services.get_stats.call(null,inst_425942,inst_425939__$1,foundation.test.models.account_stats);var state_425963__$1 = (function (){var statearr_425966 = state_425963;(statearr_425966[9] = inst_425939__$1);
(statearr_425966[7] = inst_425938__$1);
return statearr_425966;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_425963__$1,3,inst_425943);
} else
{if((state_val_425964 === 1))
{var inst_425936 = foundation.app.models.fetch.call(null,foundation.test.models.accounts);var state_425963__$1 = state_425963;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_425963__$1,2,inst_425936);
} else
{return null;
}
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_425970 = [null,null,null,null,null,null,null,null,null,null];(statearr_425970[0] = state_machine__12118__auto__);
(statearr_425970[1] = 1);
return statearr_425970;
});
var state_machine__12118__auto____1 = (function (state_425963){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_425963);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e425971){if((e425971 instanceof Object))
{var ex__12121__auto__ = e425971;var statearr_425972_425974 = state_425963;(statearr_425972_425974[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_425963);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e425971;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__425975 = state_425963;
state_425963 = G__425975;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_425963){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_425963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_425973 = f__12188__auto__.call(null);(statearr_425973[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_425973;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_426008){var state_val_426009 = (state_426008[1]);if((state_val_426009 === 4))
{var inst_425982 = (state_426008[7]);var inst_425991 = (state_426008[8]);var inst_425986 = (state_426008[9]);var inst_425997 = (state_426008[2]);var inst_425998 = foundation.test.services.init.call(null,foundation.test.models.accounts,inst_425986,inst_425991,inst_425997);var inst_425999 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_426000 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_426001 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_426000,null));var inst_426002 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_426001,inst_425982];var inst_426003 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_425999,inst_426002);var inst_426004 = [inst_426003];var inst_426005 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_426004,null));var inst_426006 = cljs.core.into.call(null,inst_425998,inst_426005);var state_426008__$1 = state_426008;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_426008__$1,inst_426006);
} else
{if((state_val_426009 === 3))
{var inst_425986 = (state_426008[9]);var inst_425991 = (state_426008[2]);var inst_425992 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_425993 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_425986);var inst_425994 = [cljs.core.str("/stats"),cljs.core.str(inst_425992),cljs.core.str("/"),cljs.core.str(inst_425993)].join('');var inst_425995 = foundation.test.services.get_stats.call(null,inst_425994,inst_425986,foundation.test.models.account_stats,new cljs.core.Keyword(null,"granularity","granularity",2833735872),"TOTAL");var state_426008__$1 = (function (){var statearr_426010 = state_426008;(statearr_426010[8] = inst_425991);
return statearr_426010;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_426008__$1,4,inst_425995);
} else
{if((state_val_426009 === 2))
{var inst_425982 = (state_426008[7]);var inst_425979 = (state_426008[10]);var inst_425982__$1 = (state_426008[2]);var inst_425983 = (function (){var models = inst_425982__$1;var id = inst_425979;return ((function (models,id,inst_425982,inst_425979,inst_425982__$1,state_val_426009){
return (function (p1__425976_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__425976_SHARP_),id);
});
;})(models,id,inst_425982,inst_425979,inst_425982__$1,state_val_426009))
})();var inst_425984 = cljs.core.set.call(null,inst_425982__$1);var inst_425985 = clojure.set.select.call(null,inst_425983,inst_425984);var inst_425986 = cljs.core.first.call(null,inst_425985);var inst_425987 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_425988 = [cljs.core.str("/stats"),cljs.core.str(inst_425987)].join('');var inst_425989 = foundation.test.services.get_stats.call(null,inst_425988,cljs.core.PersistentHashMap.EMPTY,foundation.test.models.account_stats);var state_426008__$1 = (function (){var statearr_426011 = state_426008;(statearr_426011[7] = inst_425982__$1);
(statearr_426011[9] = inst_425986);
return statearr_426011;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_426008__$1,3,inst_425989);
} else
{if((state_val_426009 === 1))
{var inst_425977 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_425978 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_425977,null));var inst_425979 = cljs.core.get_in.call(null,req,inst_425978);var inst_425980 = foundation.app.models.fetch.call(null,foundation.test.models.accounts);var state_426008__$1 = (function (){var statearr_426012 = state_426008;(statearr_426012[10] = inst_425979);
return statearr_426012;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_426008__$1,2,inst_425980);
} else
{return null;
}
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_426016 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_426016[0] = state_machine__12118__auto__);
(statearr_426016[1] = 1);
return statearr_426016;
});
var state_machine__12118__auto____1 = (function (state_426008){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_426008);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e426017){if((e426017 instanceof Object))
{var ex__12121__auto__ = e426017;var statearr_426018_426020 = state_426008;(statearr_426018_426020[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_426008);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e426017;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__426021 = state_426008;
state_426008 = G__426021;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_426008){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_426008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_426019 = f__12188__auto__.call(null);(statearr_426019[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_426019;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/campaigns"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_426055){var state_val_426056 = (state_426055[1]);if((state_val_426056 === 4))
{var inst_426030 = (state_426055[7]);var inst_426037 = (state_426055[8]);var inst_426043 = (state_426055[2]);var inst_426044 = cljs.core.first.call(null,inst_426030);var inst_426045 = foundation.test.services.init.call(null,foundation.test.models.campaigns,inst_426044,inst_426037,inst_426043);var inst_426046 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_426047 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_426048 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_426047,null));var inst_426049 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_426048,inst_426030];var inst_426050 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_426046,inst_426049);var inst_426051 = [inst_426050];var inst_426052 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_426051,null));var inst_426053 = cljs.core.into.call(null,inst_426045,inst_426052);var state_426055__$1 = state_426055;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_426055__$1,inst_426053);
} else
{if((state_val_426056 === 3))
{var inst_426031 = (state_426055[9]);var inst_426037 = (state_426055[2]);var inst_426038 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_426039 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_426031);var inst_426040 = [cljs.core.str("/stats"),cljs.core.str(inst_426038),cljs.core.str("/"),cljs.core.str(inst_426039)].join('');var inst_426041 = foundation.test.services.get_stats.call(null,inst_426040,inst_426031,foundation.test.models.campaign_stats,new cljs.core.Keyword(null,"granularity","granularity",2833735872),"TOTAL");var state_426055__$1 = (function (){var statearr_426057 = state_426055;(statearr_426057[8] = inst_426037);
return statearr_426057;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_426055__$1,4,inst_426041);
} else
{if((state_val_426056 === 2))
{var inst_426030 = (state_426055[7]);var inst_426031 = (state_426055[9]);var inst_426030__$1 = (state_426055[2]);var inst_426031__$1 = cljs.core.first.call(null,inst_426030__$1);var inst_426032 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_426033 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_426031__$1);var inst_426034 = [cljs.core.str("/stats"),cljs.core.str(inst_426032),cljs.core.str("/"),cljs.core.str(inst_426033)].join('');var inst_426035 = foundation.test.services.get_stats.call(null,inst_426034,inst_426031__$1,foundation.test.models.campaign_stats);var state_426055__$1 = (function (){var statearr_426058 = state_426055;(statearr_426058[7] = inst_426030__$1);
(statearr_426058[9] = inst_426031__$1);
return statearr_426058;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_426055__$1,3,inst_426035);
} else
{if((state_val_426056 === 1))
{var inst_426022 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_426023 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_426022,null));var inst_426024 = cljs.core.get_in.call(null,req,inst_426023);var inst_426025 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_426026 = [inst_426024];var inst_426027 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_426025,inst_426026);var inst_426028 = foundation.app.models.fetch.call(null,foundation.test.models.campaigns,new cljs.core.Keyword(null,"params","params",4313443576),inst_426027);var state_426055__$1 = state_426055;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_426055__$1,2,inst_426028);
} else
{return null;
}
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_426062 = [null,null,null,null,null,null,null,null,null,null];(statearr_426062[0] = state_machine__12118__auto__);
(statearr_426062[1] = 1);
return statearr_426062;
});
var state_machine__12118__auto____1 = (function (state_426055){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_426055);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e426063){if((e426063 instanceof Object))
{var ex__12121__auto__ = e426063;var statearr_426064_426066 = state_426055;(statearr_426064_426066[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_426055);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e426063;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__426067 = state_426055;
state_426055 = G__426067;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_426055){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_426055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_426065 = f__12188__auto__.call(null);(statearr_426065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_426065;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/campaigns/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_426106){var state_val_426107 = (state_426106[1]);if((state_val_426107 === 4))
{var inst_426084 = (state_426106[7]);var inst_426080 = (state_426106[8]);var inst_426089 = (state_426106[9]);var inst_426095 = (state_426106[2]);var inst_426096 = foundation.test.services.init.call(null,foundation.test.models.campaigns,inst_426084,inst_426089,inst_426095);var inst_426097 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_426098 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_426099 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_426098,null));var inst_426100 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_426099,inst_426080];var inst_426101 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_426097,inst_426100);var inst_426102 = [inst_426101];var inst_426103 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_426102,null));var inst_426104 = cljs.core.into.call(null,inst_426096,inst_426103);var state_426106__$1 = state_426106;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_426106__$1,inst_426104);
} else
{if((state_val_426107 === 3))
{var inst_426084 = (state_426106[7]);var inst_426089 = (state_426106[2]);var inst_426090 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_426091 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_426084);var inst_426092 = [cljs.core.str("/stats"),cljs.core.str(inst_426090),cljs.core.str("/"),cljs.core.str(inst_426091)].join('');var inst_426093 = foundation.test.services.get_stats.call(null,inst_426092,inst_426084,foundation.test.models.campaign_stats,new cljs.core.Keyword(null,"granularity","granularity",2833735872),"TOTAL");var state_426106__$1 = (function (){var statearr_426108 = state_426106;(statearr_426108[9] = inst_426089);
return statearr_426108;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_426106__$1,4,inst_426093);
} else
{if((state_val_426107 === 2))
{var inst_426080 = (state_426106[8]);var inst_426071 = (state_426106[10]);var inst_426074 = (state_426106[11]);var inst_426080__$1 = (state_426106[2]);var inst_426081 = (function (){var models = inst_426080__$1;var account_id = inst_426074;var id = inst_426071;return ((function (models,account_id,id,inst_426080,inst_426071,inst_426074,inst_426080__$1,state_val_426107){
return (function (p1__426068_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__426068_SHARP_),id);
});
;})(models,account_id,id,inst_426080,inst_426071,inst_426074,inst_426080__$1,state_val_426107))
})();var inst_426082 = cljs.core.set.call(null,inst_426080__$1);var inst_426083 = clojure.set.select.call(null,inst_426081,inst_426082);var inst_426084 = cljs.core.first.call(null,inst_426083);var inst_426085 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_426086 = [cljs.core.str("/stats"),cljs.core.str(inst_426085)].join('');var inst_426087 = foundation.test.services.get_stats.call(null,inst_426086,cljs.core.PersistentHashMap.EMPTY,foundation.test.models.campaign_stats);var state_426106__$1 = (function (){var statearr_426109 = state_426106;(statearr_426109[7] = inst_426084);
(statearr_426109[8] = inst_426080__$1);
return statearr_426109;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_426106__$1,3,inst_426087);
} else
{if((state_val_426107 === 1))
{var inst_426074 = (state_426106[11]);var inst_426069 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_426070 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_426069,null));var inst_426071 = cljs.core.get_in.call(null,req,inst_426070);var inst_426072 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_426073 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_426072,null));var inst_426074__$1 = cljs.core.get_in.call(null,req,inst_426073);var inst_426075 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_426076 = [inst_426074__$1];var inst_426077 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_426075,inst_426076);var inst_426078 = foundation.app.models.fetch.call(null,foundation.test.models.campaigns,new cljs.core.Keyword(null,"params","params",4313443576),inst_426077);var state_426106__$1 = (function (){var statearr_426110 = state_426106;(statearr_426110[10] = inst_426071);
(statearr_426110[11] = inst_426074__$1);
return statearr_426110;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_426106__$1,2,inst_426078);
} else
{return null;
}
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_426114 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_426114[0] = state_machine__12118__auto__);
(statearr_426114[1] = 1);
return statearr_426114;
});
var state_machine__12118__auto____1 = (function (state_426106){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_426106);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e426115){if((e426115 instanceof Object))
{var ex__12121__auto__ = e426115;var statearr_426116_426118 = state_426106;(statearr_426116_426118[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_426106);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e426115;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__426119 = state_426106;
state_426106 = G__426119;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_426106){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_426106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_426117 = f__12188__auto__.call(null);(statearr_426117[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_426117;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/line_items"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_426159){var state_val_426160 = (state_426159[1]);if((state_val_426160 === 4))
{var inst_426134 = (state_426159[7]);var inst_426141 = (state_426159[8]);var inst_426147 = (state_426159[2]);var inst_426148 = cljs.core.first.call(null,inst_426134);var inst_426149 = foundation.test.services.init.call(null,foundation.test.models.line_items,inst_426148,inst_426141,inst_426147);var inst_426150 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_426151 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_426152 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_426151,null));var inst_426153 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_426152,inst_426134];var inst_426154 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_426150,inst_426153);var inst_426155 = [inst_426154];var inst_426156 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_426155,null));var inst_426157 = cljs.core.into.call(null,inst_426149,inst_426156);var state_426159__$1 = state_426159;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_426159__$1,inst_426157);
} else
{if((state_val_426160 === 3))
{var inst_426135 = (state_426159[9]);var inst_426141 = (state_426159[2]);var inst_426142 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_426143 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_426135);var inst_426144 = [cljs.core.str("/stats"),cljs.core.str(inst_426142),cljs.core.str("/"),cljs.core.str(inst_426143)].join('');var inst_426145 = foundation.test.services.get_stats.call(null,inst_426144,inst_426135,foundation.test.models.line_item_stats,new cljs.core.Keyword(null,"granularity","granularity",2833735872),"TOTAL");var state_426159__$1 = (function (){var statearr_426161 = state_426159;(statearr_426161[8] = inst_426141);
return statearr_426161;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_426159__$1,4,inst_426145);
} else
{if((state_val_426160 === 2))
{var inst_426135 = (state_426159[9]);var inst_426134 = (state_426159[7]);var inst_426134__$1 = (state_426159[2]);var inst_426135__$1 = cljs.core.first.call(null,inst_426134__$1);var inst_426136 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_426137 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_426135__$1);var inst_426138 = [cljs.core.str("/stats"),cljs.core.str(inst_426136),cljs.core.str("/"),cljs.core.str(inst_426137)].join('');var inst_426139 = foundation.test.services.get_stats.call(null,inst_426138,inst_426135__$1,foundation.test.models.line_item_stats);var state_426159__$1 = (function (){var statearr_426162 = state_426159;(statearr_426162[9] = inst_426135__$1);
(statearr_426162[7] = inst_426134__$1);
return statearr_426162;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_426159__$1,3,inst_426139);
} else
{if((state_val_426160 === 1))
{var inst_426120 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_426121 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_426120,null));var inst_426122 = cljs.core.get_in.call(null,req,inst_426121);var inst_426123 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"campaign_ids","campaign_ids",1186837115)];var inst_426124 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_426123,null));var inst_426125 = cljs.core.get_in.call(null,req,inst_426124);var inst_426126 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_426127 = [inst_426122];var inst_426128 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_426126,inst_426127);var inst_426129 = [new cljs.core.Keyword(null,"campaign-ids","campaign-ids",1185347565)];var inst_426130 = [inst_426125];var inst_426131 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_426129,inst_426130);var inst_426132 = foundation.app.models.fetch.call(null,foundation.test.models.line_items,new cljs.core.Keyword(null,"params","params",4313443576),inst_426128,new cljs.core.Keyword(null,"query-params","query-params",1080249757),inst_426131);var state_426159__$1 = state_426159;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_426159__$1,2,inst_426132);
} else
{return null;
}
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_426166 = [null,null,null,null,null,null,null,null,null,null];(statearr_426166[0] = state_machine__12118__auto__);
(statearr_426166[1] = 1);
return statearr_426166;
});
var state_machine__12118__auto____1 = (function (state_426159){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_426159);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e426167){if((e426167 instanceof Object))
{var ex__12121__auto__ = e426167;var statearr_426168_426170 = state_426159;(statearr_426168_426170[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_426159);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e426167;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__426171 = state_426159;
state_426159 = G__426171;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_426159){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_426159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_426169 = f__12188__auto__.call(null);(statearr_426169[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_426169;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/line_items/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_426215){var state_val_426216 = (state_426215[1]);if((state_val_426216 === 4))
{var inst_426193 = (state_426215[7]);var inst_426189 = (state_426215[8]);var inst_426198 = (state_426215[9]);var inst_426204 = (state_426215[2]);var inst_426205 = foundation.test.services.init.call(null,foundation.test.models.line_items,inst_426193,inst_426198,inst_426204);var inst_426206 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_426207 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_426208 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_426207,null));var inst_426209 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_426208,inst_426189];var inst_426210 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_426206,inst_426209);var inst_426211 = [inst_426210];var inst_426212 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_426211,null));var inst_426213 = cljs.core.into.call(null,inst_426205,inst_426212);var state_426215__$1 = state_426215;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_426215__$1,inst_426213);
} else
{if((state_val_426216 === 3))
{var inst_426193 = (state_426215[7]);var inst_426198 = (state_426215[2]);var inst_426199 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_426200 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_426193);var inst_426201 = [cljs.core.str("/stats"),cljs.core.str(inst_426199),cljs.core.str("/"),cljs.core.str(inst_426200)].join('');var inst_426202 = foundation.test.services.get_stats.call(null,inst_426201,inst_426193,foundation.test.models.line_item_stats,new cljs.core.Keyword(null,"granularity","granularity",2833735872),"TOTAL");var state_426215__$1 = (function (){var statearr_426217 = state_426215;(statearr_426217[9] = inst_426198);
return statearr_426217;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_426215__$1,4,inst_426202);
} else
{if((state_val_426216 === 2))
{var inst_426175 = (state_426215[10]);var inst_426178 = (state_426215[11]);var inst_426189 = (state_426215[8]);var inst_426181 = (state_426215[12]);var inst_426189__$1 = (state_426215[2]);var inst_426190 = (function (){var models = inst_426189__$1;var campaign_id = inst_426181;var account_id = inst_426178;var id = inst_426175;return ((function (models,campaign_id,account_id,id,inst_426175,inst_426178,inst_426189,inst_426181,inst_426189__$1,state_val_426216){
return (function (p1__426172_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__426172_SHARP_),id);
});
;})(models,campaign_id,account_id,id,inst_426175,inst_426178,inst_426189,inst_426181,inst_426189__$1,state_val_426216))
})();var inst_426191 = cljs.core.set.call(null,inst_426189__$1);var inst_426192 = clojure.set.select.call(null,inst_426190,inst_426191);var inst_426193 = cljs.core.first.call(null,inst_426192);var inst_426194 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_426195 = [cljs.core.str("/stats"),cljs.core.str(inst_426194)].join('');var inst_426196 = foundation.test.services.get_stats.call(null,inst_426195,cljs.core.PersistentHashMap.EMPTY,foundation.test.models.line_item_stats);var state_426215__$1 = (function (){var statearr_426218 = state_426215;(statearr_426218[7] = inst_426193);
(statearr_426218[8] = inst_426189__$1);
return statearr_426218;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_426215__$1,3,inst_426196);
} else
{if((state_val_426216 === 1))
{var inst_426178 = (state_426215[11]);var inst_426181 = (state_426215[12]);var inst_426173 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_426174 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_426173,null));var inst_426175 = cljs.core.get_in.call(null,req,inst_426174);var inst_426176 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_426177 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_426176,null));var inst_426178__$1 = cljs.core.get_in.call(null,req,inst_426177);var inst_426179 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"campaign_ids","campaign_ids",1186837115)];var inst_426180 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_426179,null));var inst_426181__$1 = cljs.core.get_in.call(null,req,inst_426180);var inst_426182 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477),inst_426178__$1];var inst_426183 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_426182,null));var inst_426184 = [new cljs.core.Keyword(null,"campaign-ids","campaign-ids",1185347565)];var inst_426185 = [inst_426181__$1];var inst_426186 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_426184,inst_426185);var inst_426187 = foundation.app.models.fetch.call(null,foundation.test.models.line_items,new cljs.core.Keyword(null,"params","params",4313443576),inst_426183,new cljs.core.Keyword(null,"query-params","query-params",1080249757),inst_426186);var state_426215__$1 = (function (){var statearr_426219 = state_426215;(statearr_426219[10] = inst_426175);
(statearr_426219[11] = inst_426178__$1);
(statearr_426219[12] = inst_426181__$1);
return statearr_426219;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_426215__$1,2,inst_426187);
} else
{return null;
}
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_426223 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_426223[0] = state_machine__12118__auto__);
(statearr_426223[1] = 1);
return statearr_426223;
});
var state_machine__12118__auto____1 = (function (state_426215){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_426215);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e426224){if((e426224 instanceof Object))
{var ex__12121__auto__ = e426224;var statearr_426225_426227 = state_426215;(statearr_426225_426227[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_426215);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e426224;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__426228 = state_426215;
state_426215 = G__426228;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_426215){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_426215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_426226 = f__12188__auto__.call(null);(statearr_426226[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_426226;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/promoted_accounts"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_426265){var state_val_426266 = (state_426265[1]);if((state_val_426266 === 4))
{var inst_426240 = (state_426265[7]);var inst_426247 = (state_426265[8]);var inst_426253 = (state_426265[2]);var inst_426254 = cljs.core.first.call(null,inst_426240);var inst_426255 = foundation.test.services.init.call(null,foundation.test.models.promoted_accounts,inst_426254,inst_426247,inst_426253);var inst_426256 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_426257 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_426258 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_426257,null));var inst_426259 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_426258,inst_426240];var inst_426260 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_426256,inst_426259);var inst_426261 = [inst_426260];var inst_426262 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_426261,null));var inst_426263 = cljs.core.into.call(null,inst_426255,inst_426262);var state_426265__$1 = state_426265;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_426265__$1,inst_426263);
} else
{if((state_val_426266 === 3))
{var inst_426241 = (state_426265[9]);var inst_426247 = (state_426265[2]);var inst_426248 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_426249 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_426241);var inst_426250 = [cljs.core.str("/stats"),cljs.core.str(inst_426248),cljs.core.str("/"),cljs.core.str(inst_426249)].join('');var inst_426251 = foundation.test.services.get_stats.call(null,inst_426250,inst_426241,foundation.test.models.promoted_account_stats,new cljs.core.Keyword(null,"granularity","granularity",2833735872),"TOTAL");var state_426265__$1 = (function (){var statearr_426267 = state_426265;(statearr_426267[8] = inst_426247);
return statearr_426267;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_426265__$1,4,inst_426251);
} else
{if((state_val_426266 === 2))
{var inst_426240 = (state_426265[7]);var inst_426241 = (state_426265[9]);var inst_426240__$1 = (state_426265[2]);var inst_426241__$1 = cljs.core.first.call(null,inst_426240__$1);var inst_426242 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_426243 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_426241__$1);var inst_426244 = [cljs.core.str("/stats"),cljs.core.str(inst_426242),cljs.core.str("/"),cljs.core.str(inst_426243)].join('');var inst_426245 = foundation.test.services.get_stats.call(null,inst_426244,inst_426241__$1,foundation.test.models.promoted_account_stats);var state_426265__$1 = (function (){var statearr_426268 = state_426265;(statearr_426268[7] = inst_426240__$1);
(statearr_426268[9] = inst_426241__$1);
return statearr_426268;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_426265__$1,3,inst_426245);
} else
{if((state_val_426266 === 1))
{var inst_426229 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_426230 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_426229,null));var inst_426231 = cljs.core.get_in.call(null,req,inst_426230);var inst_426232 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"line_item_id","line_item_id",4537110510)];var inst_426233 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_426232,null));var inst_426234 = cljs.core.get_in.call(null,req,inst_426233);var inst_426235 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477),new cljs.core.Keyword(null,"line_item_id","line_item_id",4537110510)];var inst_426236 = [inst_426231,inst_426234];var inst_426237 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_426235,inst_426236);var inst_426238 = foundation.app.models.fetch.call(null,foundation.test.models.promoted_accounts,new cljs.core.Keyword(null,"params","params",4313443576),inst_426237);var state_426265__$1 = state_426265;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_426265__$1,2,inst_426238);
} else
{return null;
}
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_426272 = [null,null,null,null,null,null,null,null,null,null];(statearr_426272[0] = state_machine__12118__auto__);
(statearr_426272[1] = 1);
return statearr_426272;
});
var state_machine__12118__auto____1 = (function (state_426265){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_426265);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e426273){if((e426273 instanceof Object))
{var ex__12121__auto__ = e426273;var statearr_426274_426276 = state_426265;(statearr_426274_426276[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_426265);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e426273;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__426277 = state_426265;
state_426265 = G__426277;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_426265){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_426265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_426275 = f__12188__auto__.call(null);(statearr_426275[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_426275;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/promoted_accounts/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_426319){var state_val_426320 = (state_426319[1]);if((state_val_426320 === 4))
{var inst_426297 = (state_426319[7]);var inst_426302 = (state_426319[8]);var inst_426293 = (state_426319[9]);var inst_426308 = (state_426319[2]);var inst_426309 = foundation.test.services.init.call(null,foundation.test.models.promoted_accounts,inst_426297,inst_426302,inst_426308);var inst_426310 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_426311 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_426312 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_426311,null));var inst_426313 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_426312,inst_426293];var inst_426314 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_426310,inst_426313);var inst_426315 = [inst_426314];var inst_426316 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_426315,null));var inst_426317 = cljs.core.into.call(null,inst_426309,inst_426316);var state_426319__$1 = state_426319;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_426319__$1,inst_426317);
} else
{if((state_val_426320 === 3))
{var inst_426297 = (state_426319[7]);var inst_426302 = (state_426319[2]);var inst_426303 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_426304 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_426297);var inst_426305 = [cljs.core.str("/stats"),cljs.core.str(inst_426303),cljs.core.str("/"),cljs.core.str(inst_426304)].join('');var inst_426306 = foundation.test.services.get_stats.call(null,inst_426305,inst_426297,foundation.test.models.promoted_account_stats,new cljs.core.Keyword(null,"granularity","granularity",2833735872),"TOTAL");var state_426319__$1 = (function (){var statearr_426321 = state_426319;(statearr_426321[8] = inst_426302);
return statearr_426321;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_426319__$1,4,inst_426306);
} else
{if((state_val_426320 === 2))
{var inst_426281 = (state_426319[10]);var inst_426284 = (state_426319[11]);var inst_426293 = (state_426319[9]);var inst_426287 = (state_426319[12]);var inst_426293__$1 = (state_426319[2]);var inst_426294 = (function (){var models = inst_426293__$1;var line_item_id = inst_426287;var account_id = inst_426284;var id = inst_426281;return ((function (models,line_item_id,account_id,id,inst_426281,inst_426284,inst_426293,inst_426287,inst_426293__$1,state_val_426320){
return (function (p1__426278_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__426278_SHARP_),id);
});
;})(models,line_item_id,account_id,id,inst_426281,inst_426284,inst_426293,inst_426287,inst_426293__$1,state_val_426320))
})();var inst_426295 = cljs.core.set.call(null,inst_426293__$1);var inst_426296 = clojure.set.select.call(null,inst_426294,inst_426295);var inst_426297 = cljs.core.first.call(null,inst_426296);var inst_426298 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_426299 = [cljs.core.str("/stats"),cljs.core.str(inst_426298)].join('');var inst_426300 = foundation.test.services.get_stats.call(null,inst_426299,cljs.core.PersistentHashMap.EMPTY,foundation.test.models.promoted_account_stats);var state_426319__$1 = (function (){var statearr_426322 = state_426319;(statearr_426322[7] = inst_426297);
(statearr_426322[9] = inst_426293__$1);
return statearr_426322;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_426319__$1,3,inst_426300);
} else
{if((state_val_426320 === 1))
{var inst_426284 = (state_426319[11]);var inst_426287 = (state_426319[12]);var inst_426279 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_426280 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_426279,null));var inst_426281 = cljs.core.get_in.call(null,req,inst_426280);var inst_426282 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_426283 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_426282,null));var inst_426284__$1 = cljs.core.get_in.call(null,req,inst_426283);var inst_426285 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"line_item_id","line_item_id",4537110510)];var inst_426286 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_426285,null));var inst_426287__$1 = cljs.core.get_in.call(null,req,inst_426286);var inst_426288 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477),new cljs.core.Keyword(null,"line_item_id","line_item_id",4537110510)];var inst_426289 = [inst_426284__$1,inst_426287__$1];var inst_426290 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_426288,inst_426289);var inst_426291 = foundation.app.models.fetch.call(null,foundation.test.models.promoted_accounts,new cljs.core.Keyword(null,"params","params",4313443576),inst_426290);var state_426319__$1 = (function (){var statearr_426323 = state_426319;(statearr_426323[10] = inst_426281);
(statearr_426323[11] = inst_426284__$1);
(statearr_426323[12] = inst_426287__$1);
return statearr_426323;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_426319__$1,2,inst_426291);
} else
{return null;
}
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_426327 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_426327[0] = state_machine__12118__auto__);
(statearr_426327[1] = 1);
return statearr_426327;
});
var state_machine__12118__auto____1 = (function (state_426319){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_426319);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e426328){if((e426328 instanceof Object))
{var ex__12121__auto__ = e426328;var statearr_426329_426331 = state_426319;(statearr_426329_426331[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_426319);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e426328;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__426332 = state_426319;
state_426319 = G__426332;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_426319){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_426319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_426330 = f__12188__auto__.call(null);(statearr_426330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_426330;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/promoted_tweets"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_426369){var state_val_426370 = (state_426369[1]);if((state_val_426370 === 4))
{var inst_426344 = (state_426369[7]);var inst_426351 = (state_426369[8]);var inst_426357 = (state_426369[2]);var inst_426358 = cljs.core.first.call(null,inst_426344);var inst_426359 = foundation.test.services.init.call(null,foundation.test.models.promoted_tweets,inst_426358,inst_426351,inst_426357);var inst_426360 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_426361 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_426362 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_426361,null));var inst_426363 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_426362,inst_426344];var inst_426364 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_426360,inst_426363);var inst_426365 = [inst_426364];var inst_426366 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_426365,null));var inst_426367 = cljs.core.into.call(null,inst_426359,inst_426366);var state_426369__$1 = state_426369;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_426369__$1,inst_426367);
} else
{if((state_val_426370 === 3))
{var inst_426345 = (state_426369[9]);var inst_426351 = (state_426369[2]);var inst_426352 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_426353 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_426345);var inst_426354 = [cljs.core.str("/stats"),cljs.core.str(inst_426352),cljs.core.str("/"),cljs.core.str(inst_426353)].join('');var inst_426355 = foundation.test.services.get_stats.call(null,inst_426354,inst_426345,foundation.test.models.promoted_tweet_stats,new cljs.core.Keyword(null,"granularity","granularity",2833735872),"TOTAL");var state_426369__$1 = (function (){var statearr_426371 = state_426369;(statearr_426371[8] = inst_426351);
return statearr_426371;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_426369__$1,4,inst_426355);
} else
{if((state_val_426370 === 2))
{var inst_426344 = (state_426369[7]);var inst_426345 = (state_426369[9]);var inst_426344__$1 = (state_426369[2]);var inst_426345__$1 = cljs.core.first.call(null,inst_426344__$1);var inst_426346 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_426347 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_426345__$1);var inst_426348 = [cljs.core.str("/stats"),cljs.core.str(inst_426346),cljs.core.str("/"),cljs.core.str(inst_426347)].join('');var inst_426349 = foundation.test.services.get_stats.call(null,inst_426348,inst_426345__$1,foundation.test.models.promoted_tweet_stats);var state_426369__$1 = (function (){var statearr_426372 = state_426369;(statearr_426372[7] = inst_426344__$1);
(statearr_426372[9] = inst_426345__$1);
return statearr_426372;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_426369__$1,3,inst_426349);
} else
{if((state_val_426370 === 1))
{var inst_426333 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_426334 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_426333,null));var inst_426335 = cljs.core.get_in.call(null,req,inst_426334);var inst_426336 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"line_item_id","line_item_id",4537110510)];var inst_426337 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_426336,null));var inst_426338 = cljs.core.get_in.call(null,req,inst_426337);var inst_426339 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477),new cljs.core.Keyword(null,"line_item_id","line_item_id",4537110510)];var inst_426340 = [inst_426335,inst_426338];var inst_426341 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_426339,inst_426340);var inst_426342 = foundation.app.models.fetch.call(null,foundation.test.models.promoted_tweets,new cljs.core.Keyword(null,"params","params",4313443576),inst_426341);var state_426369__$1 = state_426369;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_426369__$1,2,inst_426342);
} else
{return null;
}
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_426376 = [null,null,null,null,null,null,null,null,null,null];(statearr_426376[0] = state_machine__12118__auto__);
(statearr_426376[1] = 1);
return statearr_426376;
});
var state_machine__12118__auto____1 = (function (state_426369){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_426369);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e426377){if((e426377 instanceof Object))
{var ex__12121__auto__ = e426377;var statearr_426378_426380 = state_426369;(statearr_426378_426380[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_426369);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e426377;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__426381 = state_426369;
state_426369 = G__426381;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_426369){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_426369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_426379 = f__12188__auto__.call(null);(statearr_426379[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_426379;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/promoted_tweets/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_426423){var state_val_426424 = (state_426423[1]);if((state_val_426424 === 4))
{var inst_426406 = (state_426423[7]);var inst_426397 = (state_426423[8]);var inst_426401 = (state_426423[9]);var inst_426412 = (state_426423[2]);var inst_426413 = foundation.test.services.init.call(null,foundation.test.models.promoted_tweets,inst_426401,inst_426406,inst_426412);var inst_426414 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_426415 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_426416 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_426415,null));var inst_426417 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_426416,inst_426397];var inst_426418 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_426414,inst_426417);var inst_426419 = [inst_426418];var inst_426420 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_426419,null));var inst_426421 = cljs.core.into.call(null,inst_426413,inst_426420);var state_426423__$1 = state_426423;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_426423__$1,inst_426421);
} else
{if((state_val_426424 === 3))
{var inst_426401 = (state_426423[9]);var inst_426406 = (state_426423[2]);var inst_426407 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_426408 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_426401);var inst_426409 = [cljs.core.str("/stats"),cljs.core.str(inst_426407),cljs.core.str("/"),cljs.core.str(inst_426408)].join('');var inst_426410 = foundation.test.services.get_stats.call(null,inst_426409,inst_426401,foundation.test.models.promoted_tweet_stats,new cljs.core.Keyword(null,"granularity","granularity",2833735872),"TOTAL");var state_426423__$1 = (function (){var statearr_426425 = state_426423;(statearr_426425[7] = inst_426406);
return statearr_426425;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_426423__$1,4,inst_426410);
} else
{if((state_val_426424 === 2))
{var inst_426391 = (state_426423[10]);var inst_426388 = (state_426423[11]);var inst_426385 = (state_426423[12]);var inst_426397 = (state_426423[8]);var inst_426397__$1 = (state_426423[2]);var inst_426398 = (function (){var models = inst_426397__$1;var line_item_id = inst_426391;var account_id = inst_426388;var id = inst_426385;return ((function (models,line_item_id,account_id,id,inst_426391,inst_426388,inst_426385,inst_426397,inst_426397__$1,state_val_426424){
return (function (p1__426382_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__426382_SHARP_),id);
});
;})(models,line_item_id,account_id,id,inst_426391,inst_426388,inst_426385,inst_426397,inst_426397__$1,state_val_426424))
})();var inst_426399 = cljs.core.set.call(null,inst_426397__$1);var inst_426400 = clojure.set.select.call(null,inst_426398,inst_426399);var inst_426401 = cljs.core.first.call(null,inst_426400);var inst_426402 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_426403 = [cljs.core.str("/stats"),cljs.core.str(inst_426402)].join('');var inst_426404 = foundation.test.services.get_stats.call(null,inst_426403,cljs.core.PersistentHashMap.EMPTY,foundation.test.models.promoted_tweet_stats);var state_426423__$1 = (function (){var statearr_426426 = state_426423;(statearr_426426[8] = inst_426397__$1);
(statearr_426426[9] = inst_426401);
return statearr_426426;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_426423__$1,3,inst_426404);
} else
{if((state_val_426424 === 1))
{var inst_426391 = (state_426423[10]);var inst_426388 = (state_426423[11]);var inst_426383 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_426384 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_426383,null));var inst_426385 = cljs.core.get_in.call(null,req,inst_426384);var inst_426386 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_426387 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_426386,null));var inst_426388__$1 = cljs.core.get_in.call(null,req,inst_426387);var inst_426389 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"line_item_id","line_item_id",4537110510)];var inst_426390 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_426389,null));var inst_426391__$1 = cljs.core.get_in.call(null,req,inst_426390);var inst_426392 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477),new cljs.core.Keyword(null,"line_item_id","line_item_id",4537110510)];var inst_426393 = [inst_426388__$1,inst_426391__$1];var inst_426394 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_426392,inst_426393);var inst_426395 = foundation.app.models.fetch.call(null,foundation.test.models.promoted_tweets,new cljs.core.Keyword(null,"params","params",4313443576),inst_426394);var state_426423__$1 = (function (){var statearr_426427 = state_426423;(statearr_426427[10] = inst_426391__$1);
(statearr_426427[11] = inst_426388__$1);
(statearr_426427[12] = inst_426385);
return statearr_426427;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_426423__$1,2,inst_426395);
} else
{return null;
}
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_426431 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_426431[0] = state_machine__12118__auto__);
(statearr_426431[1] = 1);
return statearr_426431;
});
var state_machine__12118__auto____1 = (function (state_426423){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_426423);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e426432){if((e426432 instanceof Object))
{var ex__12121__auto__ = e426432;var statearr_426433_426435 = state_426423;(statearr_426433_426435[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_426423);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e426432;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__426436 = state_426423;
state_426423 = G__426436;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_426423){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_426423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_426434 = f__12188__auto__.call(null);(statearr_426434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_426434;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));

//# sourceMappingURL=services.js.map