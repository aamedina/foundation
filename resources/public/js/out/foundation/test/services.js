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
foundation.test.services.init = (function init(resource,model){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"init","init",1017141378),foundation.app.message.path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null),new cljs.core.Keyword(null,"model","model",1117974171),model], true, false),new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"init","init",1017141378),foundation.app.message.path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null),new cljs.core.Keyword(null,"resource","resource",672839552),resource], true, false)], null);
});
foundation.test.services.get_route = (function get_route(path,params){return foundation.test.routes.app_routes.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"uri","uri",1014020318),path,new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"get","get",1014006472),new cljs.core.Keyword(null,"params","params",4313443576),params], null));
});
foundation.test.services.get_stats = (function get_stats(path,params,model){return foundation.test.routes.app_routes.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",1014020318),path,new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"get","get",1014006472),new cljs.core.Keyword(null,"params","params",4313443576),params,new cljs.core.Keyword(null,"model","model",1117974171),model,new cljs.core.Keyword(null,"query-params","query-params",1080249757),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start-time","start-time",3689550026),foundation.test.models.start_time.call(null,foundation.test.models.campaign_stats),new cljs.core.Keyword(null,"end-time","end-time",2693279729),foundation.test.models.end_time.call(null,foundation.test.models.campaign_stats),new cljs.core.Keyword(null,"granularity","granularity",2833735872),"HOUR"], null)], null));
});
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/"], null),(function (req){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"navigate","navigate",3116398819),foundation.app.message.path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"router","router",4383738555)], null),new cljs.core.Keyword(null,"to-path","to-path",4107943849),"/accounts"], true, false)], null);
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_204023){var state_val_204024 = (state_204023[1]);if((state_val_204024 === 2))
{var inst_204011 = (state_204023[2]);var inst_204012 = cljs.core.first.call(null,inst_204011);var inst_204013 = foundation.test.services.init.call(null,foundation.test.models.accounts,inst_204012);var inst_204014 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_204015 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_204016 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_204015,null));var inst_204017 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_204016,inst_204011];var inst_204018 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_204014,inst_204017);var inst_204019 = [inst_204018];var inst_204020 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_204019,null));var inst_204021 = cljs.core.into.call(null,inst_204013,inst_204020);var state_204023__$1 = state_204023;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_204023__$1,inst_204021);
} else
{if((state_val_204024 === 1))
{var inst_204009 = foundation.app.models.fetch.call(null,foundation.test.models.accounts);var state_204023__$1 = state_204023;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_204023__$1,2,inst_204009);
} else
{return null;
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_204028 = [null,null,null,null,null,null,null];(statearr_204028[0] = state_machine__12118__auto__);
(statearr_204028[1] = 1);
return statearr_204028;
});
var state_machine__12118__auto____1 = (function (state_204023){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_204023);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e204029){if((e204029 instanceof Object))
{var ex__12121__auto__ = e204029;var statearr_204030_204032 = state_204023;(statearr_204030_204032[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_204023);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e204029;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__204033 = state_204023;
state_204023 = G__204033;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_204023){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_204023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_204031 = f__12188__auto__.call(null);(statearr_204031[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_204031;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_204056){var state_val_204057 = (state_204056[1]);if((state_val_204057 === 2))
{var inst_204037 = (state_204056[7]);var inst_204040 = (state_204056[2]);var inst_204041 = (function (){var models = inst_204040;var id = inst_204037;return ((function (models,id,inst_204037,inst_204040,state_val_204057){
return (function (p1__204034_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__204034_SHARP_),id);
});
;})(models,id,inst_204037,inst_204040,state_val_204057))
})();var inst_204042 = cljs.core.set.call(null,inst_204040);var inst_204043 = clojure.set.select.call(null,inst_204041,inst_204042);var inst_204044 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_204045 = foundation.test.services.get_stats.call(null,inst_204044,cljs.core.PersistentHashMap.EMPTY,foundation.test.models.accounts);var inst_204046 = foundation.test.services.init.call(null,foundation.test.models.accounts,inst_204043);var inst_204047 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_204048 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_204049 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_204048,null));var inst_204050 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_204049,inst_204040];var inst_204051 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_204047,inst_204050);var inst_204052 = [inst_204051];var inst_204053 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_204052,null));var inst_204054 = cljs.core.into.call(null,inst_204046,inst_204053);var state_204056__$1 = (function (){var statearr_204058 = state_204056;(statearr_204058[8] = inst_204045);
return statearr_204058;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_204056__$1,inst_204054);
} else
{if((state_val_204057 === 1))
{var inst_204035 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_204036 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_204035,null));var inst_204037 = cljs.core.get_in.call(null,req,inst_204036);var inst_204038 = foundation.app.models.fetch.call(null,foundation.test.models.accounts);var state_204056__$1 = (function (){var statearr_204059 = state_204056;(statearr_204059[7] = inst_204037);
return statearr_204059;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_204056__$1,2,inst_204038);
} else
{return null;
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_204063 = [null,null,null,null,null,null,null,null,null];(statearr_204063[0] = state_machine__12118__auto__);
(statearr_204063[1] = 1);
return statearr_204063;
});
var state_machine__12118__auto____1 = (function (state_204056){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_204056);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e204064){if((e204064 instanceof Object))
{var ex__12121__auto__ = e204064;var statearr_204065_204067 = state_204056;(statearr_204065_204067[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_204056);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e204064;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__204068 = state_204056;
state_204056 = G__204068;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_204056){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_204056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_204066 = f__12188__auto__.call(null);(statearr_204066[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_204066;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/account-id/campaigns"], null),(function (req){return cljs.core.into.call(null,foundation.test.services.init,cljs.core.PersistentVector.EMPTY);
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/account-id/campaigns/:id"], null),(function (req){return cljs.core.into.call(null,foundation.test.services.init,cljs.core.PersistentVector.EMPTY);
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/account-id/line_items"], null),(function (req){return cljs.core.into.call(null,foundation.test.services.init,cljs.core.PersistentVector.EMPTY);
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/account-id/line_items/:id"], null),(function (req){return cljs.core.into.call(null,foundation.test.services.init,cljs.core.PersistentVector.EMPTY);
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/account-id/promoted_accounts"], null),(function (req){return cljs.core.into.call(null,foundation.test.services.init,cljs.core.PersistentVector.EMPTY);
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/account-id/promoted_accounts/:id"], null),(function (req){return cljs.core.into.call(null,foundation.test.services.init,cljs.core.PersistentVector.EMPTY);
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/account-id/promoted_tweets"], null),(function (req){return cljs.core.into.call(null,foundation.test.services.init,cljs.core.PersistentVector.EMPTY);
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/account-id/promoted_tweets/:id"], null),(function (req){return cljs.core.into.call(null,foundation.test.services.init,cljs.core.PersistentVector.EMPTY);
}));

//# sourceMappingURL=services.js.map