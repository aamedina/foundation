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
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_207911){var state_val_207912 = (state_207911[1]);if((state_val_207912 === 3))
{var inst_207892 = (state_207911[7]);var inst_207899 = (state_207911[2]);var inst_207900 = cljs.core.first.call(null,inst_207892);var inst_207901 = foundation.test.services.init.call(null,foundation.test.models.accounts,inst_207900,inst_207899);var inst_207902 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_207903 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_207904 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_207903,null));var inst_207905 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_207904,inst_207892];var inst_207906 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_207902,inst_207905);var inst_207907 = [inst_207906];var inst_207908 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_207907,null));var inst_207909 = cljs.core.into.call(null,inst_207901,inst_207908);var state_207911__$1 = state_207911;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_207911__$1,inst_207909);
} else
{if((state_val_207912 === 2))
{var inst_207892 = (state_207911[7]);var inst_207892__$1 = (state_207911[2]);var inst_207893 = cljs.core.first.call(null,inst_207892__$1);var inst_207894 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_207895 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_207893);var inst_207896 = [cljs.core.str("/stats"),cljs.core.str(inst_207894),cljs.core.str("/"),cljs.core.str(inst_207895)].join('');var inst_207897 = foundation.test.services.get_stats.call(null,inst_207896,inst_207893,foundation.test.models.account_stats);var state_207911__$1 = (function (){var statearr_207913 = state_207911;(statearr_207913[7] = inst_207892__$1);
return statearr_207913;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_207911__$1,3,inst_207897);
} else
{if((state_val_207912 === 1))
{var inst_207890 = foundation.app.models.fetch.call(null,foundation.test.models.accounts);var state_207911__$1 = state_207911;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_207911__$1,2,inst_207890);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_207917 = [null,null,null,null,null,null,null,null];(statearr_207917[0] = state_machine__12118__auto__);
(statearr_207917[1] = 1);
return statearr_207917;
});
var state_machine__12118__auto____1 = (function (state_207911){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_207911);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e207918){if((e207918 instanceof Object))
{var ex__12121__auto__ = e207918;var statearr_207919_207921 = state_207911;(statearr_207919_207921[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_207911);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e207918;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__207922 = state_207911;
state_207911 = G__207922;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_207911){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_207911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_207920 = f__12188__auto__.call(null);(statearr_207920[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_207920;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_207948){var state_val_207949 = (state_207948[1]);if((state_val_207949 === 3))
{var inst_207932 = (state_207948[7]);var inst_207929 = (state_207948[8]);var inst_207937 = (state_207948[2]);var inst_207938 = foundation.test.services.init.call(null,foundation.test.models.accounts,inst_207932,inst_207937);var inst_207939 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_207940 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_207941 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_207940,null));var inst_207942 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_207941,inst_207929];var inst_207943 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_207939,inst_207942);var inst_207944 = [inst_207943];var inst_207945 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_207944,null));var inst_207946 = cljs.core.into.call(null,inst_207938,inst_207945);var state_207948__$1 = state_207948;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_207948__$1,inst_207946);
} else
{if((state_val_207949 === 2))
{var inst_207926 = (state_207948[9]);var inst_207929 = (state_207948[8]);var inst_207929__$1 = (state_207948[2]);var inst_207930 = (function (){var models = inst_207929__$1;var id = inst_207926;return ((function (models,id,inst_207926,inst_207929,inst_207929__$1,state_val_207949){
return (function (p1__207923_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__207923_SHARP_),id);
});
;})(models,id,inst_207926,inst_207929,inst_207929__$1,state_val_207949))
})();var inst_207931 = cljs.core.set.call(null,inst_207929__$1);var inst_207932 = clojure.set.select.call(null,inst_207930,inst_207931);var inst_207933 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_207934 = [cljs.core.str("/stats"),cljs.core.str(inst_207933)].join('');var inst_207935 = foundation.test.services.get_stats.call(null,inst_207934,cljs.core.PersistentHashMap.EMPTY,foundation.test.models.account_stats);var state_207948__$1 = (function (){var statearr_207950 = state_207948;(statearr_207950[7] = inst_207932);
(statearr_207950[8] = inst_207929__$1);
return statearr_207950;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_207948__$1,3,inst_207935);
} else
{if((state_val_207949 === 1))
{var inst_207924 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_207925 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_207924,null));var inst_207926 = cljs.core.get_in.call(null,req,inst_207925);var inst_207927 = foundation.app.models.fetch.call(null,foundation.test.models.accounts);var state_207948__$1 = (function (){var statearr_207951 = state_207948;(statearr_207951[9] = inst_207926);
return statearr_207951;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_207948__$1,2,inst_207927);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_207955 = [null,null,null,null,null,null,null,null,null,null];(statearr_207955[0] = state_machine__12118__auto__);
(statearr_207955[1] = 1);
return statearr_207955;
});
var state_machine__12118__auto____1 = (function (state_207948){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_207948);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e207956){if((e207956 instanceof Object))
{var ex__12121__auto__ = e207956;var statearr_207957_207959 = state_207948;(statearr_207957_207959[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_207948);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e207956;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__207960 = state_207948;
state_207948 = G__207960;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_207948){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_207948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_207958 = f__12188__auto__.call(null);(statearr_207958[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_207958;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/account-id/campaigns"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_207982){var state_val_207983 = (state_207982[1]);if((state_val_207983 === 3))
{var inst_207963 = (state_207982[7]);var inst_207970 = (state_207982[2]);var inst_207971 = cljs.core.first.call(null,inst_207963);var inst_207972 = foundation.test.services.init.call(null,foundation.test.models.campaigns,inst_207971,inst_207970);var inst_207973 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_207974 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_207975 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_207974,null));var inst_207976 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_207975,inst_207963];var inst_207977 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_207973,inst_207976);var inst_207978 = [inst_207977];var inst_207979 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_207978,null));var inst_207980 = cljs.core.into.call(null,inst_207972,inst_207979);var state_207982__$1 = state_207982;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_207982__$1,inst_207980);
} else
{if((state_val_207983 === 2))
{var inst_207963 = (state_207982[7]);var inst_207963__$1 = (state_207982[2]);var inst_207964 = cljs.core.first.call(null,inst_207963__$1);var inst_207965 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_207966 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_207964);var inst_207967 = [cljs.core.str("/stats"),cljs.core.str(inst_207965),cljs.core.str("/"),cljs.core.str(inst_207966)].join('');var inst_207968 = foundation.test.services.get_stats.call(null,inst_207967,inst_207964,foundation.test.models.campaign_stats);var state_207982__$1 = (function (){var statearr_207984 = state_207982;(statearr_207984[7] = inst_207963__$1);
return statearr_207984;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_207982__$1,3,inst_207968);
} else
{if((state_val_207983 === 1))
{var inst_207961 = foundation.app.models.fetch.call(null,foundation.test.models.campaigns);var state_207982__$1 = state_207982;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_207982__$1,2,inst_207961);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_207988 = [null,null,null,null,null,null,null,null];(statearr_207988[0] = state_machine__12118__auto__);
(statearr_207988[1] = 1);
return statearr_207988;
});
var state_machine__12118__auto____1 = (function (state_207982){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_207982);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e207989){if((e207989 instanceof Object))
{var ex__12121__auto__ = e207989;var statearr_207990_207992 = state_207982;(statearr_207990_207992[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_207982);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e207989;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__207993 = state_207982;
state_207982 = G__207993;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_207982){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_207982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_207991 = f__12188__auto__.call(null);(statearr_207991[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_207991;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/account-id/campaigns/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_208019){var state_val_208020 = (state_208019[1]);if((state_val_208020 === 3))
{var inst_208000 = (state_208019[7]);var inst_208003 = (state_208019[8]);var inst_208008 = (state_208019[2]);var inst_208009 = foundation.test.services.init.call(null,foundation.test.models.campaigns,inst_208003,inst_208008);var inst_208010 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_208011 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_208012 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_208011,null));var inst_208013 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_208012,inst_208000];var inst_208014 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_208010,inst_208013);var inst_208015 = [inst_208014];var inst_208016 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_208015,null));var inst_208017 = cljs.core.into.call(null,inst_208009,inst_208016);var state_208019__$1 = state_208019;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_208019__$1,inst_208017);
} else
{if((state_val_208020 === 2))
{var inst_208000 = (state_208019[7]);var inst_207997 = (state_208019[9]);var inst_208000__$1 = (state_208019[2]);var inst_208001 = (function (){var models = inst_208000__$1;var id = inst_207997;return ((function (models,id,inst_208000,inst_207997,inst_208000__$1,state_val_208020){
return (function (p1__207994_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__207994_SHARP_),id);
});
;})(models,id,inst_208000,inst_207997,inst_208000__$1,state_val_208020))
})();var inst_208002 = cljs.core.set.call(null,inst_208000__$1);var inst_208003 = clojure.set.select.call(null,inst_208001,inst_208002);var inst_208004 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_208005 = [cljs.core.str("/stats"),cljs.core.str(inst_208004)].join('');var inst_208006 = foundation.test.services.get_stats.call(null,inst_208005,cljs.core.PersistentHashMap.EMPTY,foundation.test.models.campaign_stats);var state_208019__$1 = (function (){var statearr_208021 = state_208019;(statearr_208021[7] = inst_208000__$1);
(statearr_208021[8] = inst_208003);
return statearr_208021;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_208019__$1,3,inst_208006);
} else
{if((state_val_208020 === 1))
{var inst_207995 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_207996 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_207995,null));var inst_207997 = cljs.core.get_in.call(null,req,inst_207996);var inst_207998 = foundation.app.models.fetch.call(null,foundation.test.models.campaigns);var state_208019__$1 = (function (){var statearr_208022 = state_208019;(statearr_208022[9] = inst_207997);
return statearr_208022;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_208019__$1,2,inst_207998);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_208026 = [null,null,null,null,null,null,null,null,null,null];(statearr_208026[0] = state_machine__12118__auto__);
(statearr_208026[1] = 1);
return statearr_208026;
});
var state_machine__12118__auto____1 = (function (state_208019){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_208019);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e208027){if((e208027 instanceof Object))
{var ex__12121__auto__ = e208027;var statearr_208028_208030 = state_208019;(statearr_208028_208030[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_208019);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e208027;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__208031 = state_208019;
state_208019 = G__208031;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_208019){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_208019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_208029 = f__12188__auto__.call(null);(statearr_208029[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_208029;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/account-id/line_items"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_208053){var state_val_208054 = (state_208053[1]);if((state_val_208054 === 3))
{var inst_208034 = (state_208053[7]);var inst_208041 = (state_208053[2]);var inst_208042 = cljs.core.first.call(null,inst_208034);var inst_208043 = foundation.test.services.init.call(null,foundation.test.models.line_items,inst_208042,inst_208041);var inst_208044 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_208045 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_208046 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_208045,null));var inst_208047 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_208046,inst_208034];var inst_208048 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_208044,inst_208047);var inst_208049 = [inst_208048];var inst_208050 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_208049,null));var inst_208051 = cljs.core.into.call(null,inst_208043,inst_208050);var state_208053__$1 = state_208053;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_208053__$1,inst_208051);
} else
{if((state_val_208054 === 2))
{var inst_208034 = (state_208053[7]);var inst_208034__$1 = (state_208053[2]);var inst_208035 = cljs.core.first.call(null,inst_208034__$1);var inst_208036 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_208037 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_208035);var inst_208038 = [cljs.core.str("/stats"),cljs.core.str(inst_208036),cljs.core.str("/"),cljs.core.str(inst_208037)].join('');var inst_208039 = foundation.test.services.get_stats.call(null,inst_208038,inst_208035,foundation.test.models.line_item_stats);var state_208053__$1 = (function (){var statearr_208055 = state_208053;(statearr_208055[7] = inst_208034__$1);
return statearr_208055;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_208053__$1,3,inst_208039);
} else
{if((state_val_208054 === 1))
{var inst_208032 = foundation.app.models.fetch.call(null,foundation.test.models.line_items);var state_208053__$1 = state_208053;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_208053__$1,2,inst_208032);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_208059 = [null,null,null,null,null,null,null,null];(statearr_208059[0] = state_machine__12118__auto__);
(statearr_208059[1] = 1);
return statearr_208059;
});
var state_machine__12118__auto____1 = (function (state_208053){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_208053);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e208060){if((e208060 instanceof Object))
{var ex__12121__auto__ = e208060;var statearr_208061_208063 = state_208053;(statearr_208061_208063[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_208053);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e208060;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__208064 = state_208053;
state_208053 = G__208064;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_208053){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_208053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_208062 = f__12188__auto__.call(null);(statearr_208062[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_208062;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/account-id/line_items/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_208090){var state_val_208091 = (state_208090[1]);if((state_val_208091 === 3))
{var inst_208074 = (state_208090[7]);var inst_208071 = (state_208090[8]);var inst_208079 = (state_208090[2]);var inst_208080 = foundation.test.services.init.call(null,foundation.test.models.line_items,inst_208074,inst_208079);var inst_208081 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_208082 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_208083 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_208082,null));var inst_208084 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_208083,inst_208071];var inst_208085 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_208081,inst_208084);var inst_208086 = [inst_208085];var inst_208087 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_208086,null));var inst_208088 = cljs.core.into.call(null,inst_208080,inst_208087);var state_208090__$1 = state_208090;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_208090__$1,inst_208088);
} else
{if((state_val_208091 === 2))
{var inst_208071 = (state_208090[8]);var inst_208068 = (state_208090[9]);var inst_208071__$1 = (state_208090[2]);var inst_208072 = (function (){var models = inst_208071__$1;var id = inst_208068;return ((function (models,id,inst_208071,inst_208068,inst_208071__$1,state_val_208091){
return (function (p1__208065_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__208065_SHARP_),id);
});
;})(models,id,inst_208071,inst_208068,inst_208071__$1,state_val_208091))
})();var inst_208073 = cljs.core.set.call(null,inst_208071__$1);var inst_208074 = clojure.set.select.call(null,inst_208072,inst_208073);var inst_208075 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_208076 = [cljs.core.str("/stats"),cljs.core.str(inst_208075)].join('');var inst_208077 = foundation.test.services.get_stats.call(null,inst_208076,cljs.core.PersistentHashMap.EMPTY,foundation.test.models.line_item_stats);var state_208090__$1 = (function (){var statearr_208092 = state_208090;(statearr_208092[7] = inst_208074);
(statearr_208092[8] = inst_208071__$1);
return statearr_208092;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_208090__$1,3,inst_208077);
} else
{if((state_val_208091 === 1))
{var inst_208066 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_208067 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_208066,null));var inst_208068 = cljs.core.get_in.call(null,req,inst_208067);var inst_208069 = foundation.app.models.fetch.call(null,foundation.test.models.line_items);var state_208090__$1 = (function (){var statearr_208093 = state_208090;(statearr_208093[9] = inst_208068);
return statearr_208093;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_208090__$1,2,inst_208069);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_208097 = [null,null,null,null,null,null,null,null,null,null];(statearr_208097[0] = state_machine__12118__auto__);
(statearr_208097[1] = 1);
return statearr_208097;
});
var state_machine__12118__auto____1 = (function (state_208090){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_208090);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e208098){if((e208098 instanceof Object))
{var ex__12121__auto__ = e208098;var statearr_208099_208101 = state_208090;(statearr_208099_208101[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_208090);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e208098;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__208102 = state_208090;
state_208090 = G__208102;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_208090){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_208090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_208100 = f__12188__auto__.call(null);(statearr_208100[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_208100;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/account-id/promoted_accounts"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_208128){var state_val_208129 = (state_208128[1]);if((state_val_208129 === 3))
{var inst_208109 = (state_208128[7]);var inst_208112 = (state_208128[8]);var inst_208117 = (state_208128[2]);var inst_208118 = foundation.test.services.init.call(null,foundation.test.models.promoted_accounts,inst_208112,inst_208117);var inst_208119 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_208120 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_208121 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_208120,null));var inst_208122 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_208121,inst_208109];var inst_208123 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_208119,inst_208122);var inst_208124 = [inst_208123];var inst_208125 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_208124,null));var inst_208126 = cljs.core.into.call(null,inst_208118,inst_208125);var state_208128__$1 = state_208128;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_208128__$1,inst_208126);
} else
{if((state_val_208129 === 2))
{var inst_208109 = (state_208128[7]);var inst_208106 = (state_208128[9]);var inst_208109__$1 = (state_208128[2]);var inst_208110 = (function (){var models = inst_208109__$1;var id = inst_208106;return ((function (models,id,inst_208109,inst_208106,inst_208109__$1,state_val_208129){
return (function (p1__208103_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__208103_SHARP_),id);
});
;})(models,id,inst_208109,inst_208106,inst_208109__$1,state_val_208129))
})();var inst_208111 = cljs.core.set.call(null,inst_208109__$1);var inst_208112 = clojure.set.select.call(null,inst_208110,inst_208111);var inst_208113 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_208114 = [cljs.core.str("/stats"),cljs.core.str(inst_208113)].join('');var inst_208115 = foundation.test.services.get_stats.call(null,inst_208114,cljs.core.PersistentHashMap.EMPTY,foundation.test.models.promoted_account_stats);var state_208128__$1 = (function (){var statearr_208130 = state_208128;(statearr_208130[7] = inst_208109__$1);
(statearr_208130[8] = inst_208112);
return statearr_208130;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_208128__$1,3,inst_208115);
} else
{if((state_val_208129 === 1))
{var inst_208104 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_208105 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_208104,null));var inst_208106 = cljs.core.get_in.call(null,req,inst_208105);var inst_208107 = foundation.app.models.fetch.call(null,foundation.test.models.promoted_accounts);var state_208128__$1 = (function (){var statearr_208131 = state_208128;(statearr_208131[9] = inst_208106);
return statearr_208131;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_208128__$1,2,inst_208107);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_208135 = [null,null,null,null,null,null,null,null,null,null];(statearr_208135[0] = state_machine__12118__auto__);
(statearr_208135[1] = 1);
return statearr_208135;
});
var state_machine__12118__auto____1 = (function (state_208128){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_208128);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e208136){if((e208136 instanceof Object))
{var ex__12121__auto__ = e208136;var statearr_208137_208139 = state_208128;(statearr_208137_208139[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_208128);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e208136;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__208140 = state_208128;
state_208128 = G__208140;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_208128){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_208128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_208138 = f__12188__auto__.call(null);(statearr_208138[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_208138;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/account-id/promoted_accounts/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_208166){var state_val_208167 = (state_208166[1]);if((state_val_208167 === 3))
{var inst_208150 = (state_208166[7]);var inst_208147 = (state_208166[8]);var inst_208155 = (state_208166[2]);var inst_208156 = foundation.test.services.init.call(null,foundation.test.models.promoted_accounts,inst_208150,inst_208155);var inst_208157 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_208158 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_208159 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_208158,null));var inst_208160 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_208159,inst_208147];var inst_208161 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_208157,inst_208160);var inst_208162 = [inst_208161];var inst_208163 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_208162,null));var inst_208164 = cljs.core.into.call(null,inst_208156,inst_208163);var state_208166__$1 = state_208166;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_208166__$1,inst_208164);
} else
{if((state_val_208167 === 2))
{var inst_208144 = (state_208166[9]);var inst_208147 = (state_208166[8]);var inst_208147__$1 = (state_208166[2]);var inst_208148 = (function (){var models = inst_208147__$1;var id = inst_208144;return ((function (models,id,inst_208144,inst_208147,inst_208147__$1,state_val_208167){
return (function (p1__208141_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__208141_SHARP_),id);
});
;})(models,id,inst_208144,inst_208147,inst_208147__$1,state_val_208167))
})();var inst_208149 = cljs.core.set.call(null,inst_208147__$1);var inst_208150 = clojure.set.select.call(null,inst_208148,inst_208149);var inst_208151 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_208152 = [cljs.core.str("/stats"),cljs.core.str(inst_208151)].join('');var inst_208153 = foundation.test.services.get_stats.call(null,inst_208152,cljs.core.PersistentHashMap.EMPTY,foundation.test.models.promoted_account_stats);var state_208166__$1 = (function (){var statearr_208168 = state_208166;(statearr_208168[7] = inst_208150);
(statearr_208168[8] = inst_208147__$1);
return statearr_208168;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_208166__$1,3,inst_208153);
} else
{if((state_val_208167 === 1))
{var inst_208142 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_208143 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_208142,null));var inst_208144 = cljs.core.get_in.call(null,req,inst_208143);var inst_208145 = foundation.app.models.fetch.call(null,foundation.test.models.promoted_accounts);var state_208166__$1 = (function (){var statearr_208169 = state_208166;(statearr_208169[9] = inst_208144);
return statearr_208169;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_208166__$1,2,inst_208145);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_208173 = [null,null,null,null,null,null,null,null,null,null];(statearr_208173[0] = state_machine__12118__auto__);
(statearr_208173[1] = 1);
return statearr_208173;
});
var state_machine__12118__auto____1 = (function (state_208166){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_208166);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e208174){if((e208174 instanceof Object))
{var ex__12121__auto__ = e208174;var statearr_208175_208177 = state_208166;(statearr_208175_208177[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_208166);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e208174;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__208178 = state_208166;
state_208166 = G__208178;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_208166){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_208166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_208176 = f__12188__auto__.call(null);(statearr_208176[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_208176;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/account-id/promoted_tweets"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_208204){var state_val_208205 = (state_208204[1]);if((state_val_208205 === 3))
{var inst_208188 = (state_208204[7]);var inst_208185 = (state_208204[8]);var inst_208193 = (state_208204[2]);var inst_208194 = foundation.test.services.init.call(null,foundation.test.models.promoted_tweets,inst_208188,inst_208193);var inst_208195 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_208196 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_208197 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_208196,null));var inst_208198 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_208197,inst_208185];var inst_208199 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_208195,inst_208198);var inst_208200 = [inst_208199];var inst_208201 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_208200,null));var inst_208202 = cljs.core.into.call(null,inst_208194,inst_208201);var state_208204__$1 = state_208204;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_208204__$1,inst_208202);
} else
{if((state_val_208205 === 2))
{var inst_208185 = (state_208204[8]);var inst_208182 = (state_208204[9]);var inst_208185__$1 = (state_208204[2]);var inst_208186 = (function (){var models = inst_208185__$1;var id = inst_208182;return ((function (models,id,inst_208185,inst_208182,inst_208185__$1,state_val_208205){
return (function (p1__208179_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__208179_SHARP_),id);
});
;})(models,id,inst_208185,inst_208182,inst_208185__$1,state_val_208205))
})();var inst_208187 = cljs.core.set.call(null,inst_208185__$1);var inst_208188 = clojure.set.select.call(null,inst_208186,inst_208187);var inst_208189 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_208190 = [cljs.core.str("/stats"),cljs.core.str(inst_208189)].join('');var inst_208191 = foundation.test.services.get_stats.call(null,inst_208190,cljs.core.PersistentHashMap.EMPTY,foundation.test.models.promoted_tweet_stats);var state_208204__$1 = (function (){var statearr_208206 = state_208204;(statearr_208206[7] = inst_208188);
(statearr_208206[8] = inst_208185__$1);
return statearr_208206;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_208204__$1,3,inst_208191);
} else
{if((state_val_208205 === 1))
{var inst_208180 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_208181 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_208180,null));var inst_208182 = cljs.core.get_in.call(null,req,inst_208181);var inst_208183 = foundation.app.models.fetch.call(null,foundation.test.models.promoted_tweets);var state_208204__$1 = (function (){var statearr_208207 = state_208204;(statearr_208207[9] = inst_208182);
return statearr_208207;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_208204__$1,2,inst_208183);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_208211 = [null,null,null,null,null,null,null,null,null,null];(statearr_208211[0] = state_machine__12118__auto__);
(statearr_208211[1] = 1);
return statearr_208211;
});
var state_machine__12118__auto____1 = (function (state_208204){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_208204);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e208212){if((e208212 instanceof Object))
{var ex__12121__auto__ = e208212;var statearr_208213_208215 = state_208204;(statearr_208213_208215[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_208204);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e208212;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__208216 = state_208204;
state_208204 = G__208216;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_208204){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_208204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_208214 = f__12188__auto__.call(null);(statearr_208214[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_208214;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/account-id/promoted_tweets/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_208242){var state_val_208243 = (state_208242[1]);if((state_val_208243 === 3))
{var inst_208226 = (state_208242[7]);var inst_208223 = (state_208242[8]);var inst_208231 = (state_208242[2]);var inst_208232 = foundation.test.services.init.call(null,foundation.test.models.promoted_tweets,inst_208226,inst_208231);var inst_208233 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_208234 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_208235 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_208234,null));var inst_208236 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_208235,inst_208223];var inst_208237 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_208233,inst_208236);var inst_208238 = [inst_208237];var inst_208239 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_208238,null));var inst_208240 = cljs.core.into.call(null,inst_208232,inst_208239);var state_208242__$1 = state_208242;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_208242__$1,inst_208240);
} else
{if((state_val_208243 === 2))
{var inst_208223 = (state_208242[8]);var inst_208220 = (state_208242[9]);var inst_208223__$1 = (state_208242[2]);var inst_208224 = (function (){var models = inst_208223__$1;var id = inst_208220;return ((function (models,id,inst_208223,inst_208220,inst_208223__$1,state_val_208243){
return (function (p1__208217_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__208217_SHARP_),id);
});
;})(models,id,inst_208223,inst_208220,inst_208223__$1,state_val_208243))
})();var inst_208225 = cljs.core.set.call(null,inst_208223__$1);var inst_208226 = clojure.set.select.call(null,inst_208224,inst_208225);var inst_208227 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_208228 = [cljs.core.str("/stats"),cljs.core.str(inst_208227)].join('');var inst_208229 = foundation.test.services.get_stats.call(null,inst_208228,cljs.core.PersistentHashMap.EMPTY,foundation.test.models.promoted_tweet_stats);var state_208242__$1 = (function (){var statearr_208244 = state_208242;(statearr_208244[7] = inst_208226);
(statearr_208244[8] = inst_208223__$1);
return statearr_208244;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_208242__$1,3,inst_208229);
} else
{if((state_val_208243 === 1))
{var inst_208218 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_208219 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_208218,null));var inst_208220 = cljs.core.get_in.call(null,req,inst_208219);var inst_208221 = foundation.app.models.fetch.call(null,foundation.test.models.promoted_tweets);var state_208242__$1 = (function (){var statearr_208245 = state_208242;(statearr_208245[9] = inst_208220);
return statearr_208245;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_208242__$1,2,inst_208221);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_208249 = [null,null,null,null,null,null,null,null,null,null];(statearr_208249[0] = state_machine__12118__auto__);
(statearr_208249[1] = 1);
return statearr_208249;
});
var state_machine__12118__auto____1 = (function (state_208242){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_208242);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e208250){if((e208250 instanceof Object))
{var ex__12121__auto__ = e208250;var statearr_208251_208253 = state_208242;(statearr_208251_208253[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_208242);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e208250;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__208254 = state_208242;
state_208242 = G__208254;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_208242){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_208242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_208252 = f__12188__auto__.call(null);(statearr_208252[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_208252;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));

//# sourceMappingURL=services.js.map