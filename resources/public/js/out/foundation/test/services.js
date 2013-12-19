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
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/"], null),(function (req){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"navigate","navigate",3116398819),foundation.app.message.path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"router","router",4383738555)], null),new cljs.core.Keyword(null,"to-path","to-path",4107943849),"/accounts"], true, false)], null);
}));
foundation.test.services.get_resource = (function get_resource(resource,params,query_params){return null;
});
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_202120){var state_val_202121 = (state_202120[1]);if((state_val_202121 === 2))
{var inst_202108 = (state_202120[2]);var inst_202109 = cljs.core.first.call(null,inst_202108);var inst_202110 = foundation.test.services.init.call(null,foundation.test.models.accounts,inst_202109);var inst_202111 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_202112 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_202113 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_202112,null));var inst_202114 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_202113,inst_202108];var inst_202115 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_202111,inst_202114);var inst_202116 = [inst_202115];var inst_202117 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_202116,null));var inst_202118 = cljs.core.into.call(null,inst_202110,inst_202117);var state_202120__$1 = state_202120;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_202120__$1,inst_202118);
} else
{if((state_val_202121 === 1))
{var inst_202106 = foundation.app.models.fetch.call(null,foundation.test.models.accounts);var state_202120__$1 = state_202120;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_202120__$1,2,inst_202106);
} else
{return null;
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_202125 = [null,null,null,null,null,null,null];(statearr_202125[0] = state_machine__12118__auto__);
(statearr_202125[1] = 1);
return statearr_202125;
});
var state_machine__12118__auto____1 = (function (state_202120){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_202120);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e202126){if((e202126 instanceof Object))
{var ex__12121__auto__ = e202126;var statearr_202127_202129 = state_202120;(statearr_202127_202129[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_202120);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e202126;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__202130 = state_202120;
state_202120 = G__202130;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_202120){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_202120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_202128 = f__12188__auto__.call(null);(statearr_202128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_202128;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_202151){var state_val_202152 = (state_202151[1]);if((state_val_202152 === 2))
{var inst_202134 = (state_202151[7]);var inst_202137 = (state_202151[2]);var inst_202138 = (function (){var models = inst_202137;var id = inst_202134;return ((function (models,id,inst_202134,inst_202137,state_val_202152){
return (function (p1__202131_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__202131_SHARP_),id);
});
;})(models,id,inst_202134,inst_202137,state_val_202152))
})();var inst_202139 = cljs.core.set.call(null,inst_202137);var inst_202140 = clojure.set.select.call(null,inst_202138,inst_202139);var inst_202141 = foundation.test.services.init.call(null,foundation.test.models.accounts,inst_202140);var inst_202142 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_202143 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_202144 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_202143,null));var inst_202145 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_202144,inst_202137];var inst_202146 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_202142,inst_202145);var inst_202147 = [inst_202146];var inst_202148 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_202147,null));var inst_202149 = cljs.core.into.call(null,inst_202141,inst_202148);var state_202151__$1 = state_202151;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_202151__$1,inst_202149);
} else
{if((state_val_202152 === 1))
{var inst_202132 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_202133 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_202132,null));var inst_202134 = cljs.core.get_in.call(null,req,inst_202133);var inst_202135 = foundation.app.models.fetch.call(null,foundation.test.models.accounts);var state_202151__$1 = (function (){var statearr_202153 = state_202151;(statearr_202153[7] = inst_202134);
return statearr_202153;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_202151__$1,2,inst_202135);
} else
{return null;
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_202157 = [null,null,null,null,null,null,null,null];(statearr_202157[0] = state_machine__12118__auto__);
(statearr_202157[1] = 1);
return statearr_202157;
});
var state_machine__12118__auto____1 = (function (state_202151){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_202151);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e202158){if((e202158 instanceof Object))
{var ex__12121__auto__ = e202158;var statearr_202159_202161 = state_202151;(statearr_202159_202161[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_202151);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e202158;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__202162 = state_202151;
state_202151 = G__202162;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_202151){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_202151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_202160 = f__12188__auto__.call(null);(statearr_202160[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_202160;
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
foundation.test.services.stats_request = (function stats_request(model,params,granularity,start_time,end_time){var metrics = foundation.test.models.metrics.call(null,model);return foundation.app.xhr.GET.call(null,foundation.app.models.reify_url.call(null,model,params,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"granularity","granularity",2833735872),granularity,new cljs.core.Keyword(null,"start-time","start-time",3689550026),start_time,new cljs.core.Keyword(null,"end-time","end-time",2693279729),end_time], null)));
});
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/stats/accounts/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_202173){var state_val_202174 = (state_202173[1]);if((state_val_202174 === 1))
{var inst_202163 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_202164 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_202163,null));var inst_202165 = cljs.core.get_in.call(null,req,inst_202164);var inst_202166 = [new cljs.core.Keyword(null,"id","id",1013907597)];var inst_202167 = [inst_202165];var inst_202168 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_202166,inst_202167);var inst_202169 = foundation.test.models.start_time.call(null,foundation.test.models.account_stats);var inst_202170 = foundation.test.models.end_time.call(null,foundation.test.models.account_stats);var inst_202171 = foundation.test.services.stats_request.call(null,foundation.test.models.account_stats,inst_202168,"HOUR",inst_202169,inst_202170);var state_202173__$1 = state_202173;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_202173__$1,inst_202171);
} else
{return null;
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_202178 = [null,null,null,null,null,null,null];(statearr_202178[0] = state_machine__12118__auto__);
(statearr_202178[1] = 1);
return statearr_202178;
});
var state_machine__12118__auto____1 = (function (state_202173){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_202173);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e202179){if((e202179 instanceof Object))
{var ex__12121__auto__ = e202179;var statearr_202180_202182 = state_202173;(statearr_202180_202182[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_202173);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e202179;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__202183 = state_202173;
state_202173 = G__202183;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_202173){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_202173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_202181 = f__12188__auto__.call(null);(statearr_202181[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_202181;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/stats/accounts/:account-id/campaigns/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_202197){var state_val_202198 = (state_202197[1]);if((state_val_202198 === 1))
{var inst_202184 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_202185 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_202186 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_202185,null));var inst_202187 = cljs.core.get_in.call(null,req,inst_202186);var inst_202188 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_202189 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_202188,null));var inst_202190 = cljs.core.get_in.call(null,req,inst_202189);var inst_202191 = [inst_202187,inst_202190];var inst_202192 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_202184,inst_202191);var inst_202193 = foundation.test.models.start_time.call(null,foundation.test.models.campaign_stats);var inst_202194 = foundation.test.models.end_time.call(null,foundation.test.models.campaign_stats);var inst_202195 = foundation.test.services.stats_request.call(null,foundation.test.models.campaign_stats,inst_202192,"HOUR",inst_202193,inst_202194);var state_202197__$1 = state_202197;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_202197__$1,inst_202195);
} else
{return null;
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_202202 = [null,null,null,null,null,null,null];(statearr_202202[0] = state_machine__12118__auto__);
(statearr_202202[1] = 1);
return statearr_202202;
});
var state_machine__12118__auto____1 = (function (state_202197){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_202197);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e202203){if((e202203 instanceof Object))
{var ex__12121__auto__ = e202203;var statearr_202204_202206 = state_202197;(statearr_202204_202206[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_202197);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e202203;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__202207 = state_202197;
state_202197 = G__202207;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_202197){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_202197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_202205 = f__12188__auto__.call(null);(statearr_202205[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_202205;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/stats/accounts/:account-id/line_items/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_202221){var state_val_202222 = (state_202221[1]);if((state_val_202222 === 1))
{var inst_202208 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_202209 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_202210 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_202209,null));var inst_202211 = cljs.core.get_in.call(null,req,inst_202210);var inst_202212 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_202213 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_202212,null));var inst_202214 = cljs.core.get_in.call(null,req,inst_202213);var inst_202215 = [inst_202211,inst_202214];var inst_202216 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_202208,inst_202215);var inst_202217 = foundation.test.models.start_time.call(null,foundation.test.models.line_item_stats);var inst_202218 = foundation.test.models.end_time.call(null,foundation.test.models.line_item_stats);var inst_202219 = foundation.test.services.stats_request.call(null,foundation.test.models.line_item_stats,inst_202216,"HOUR",inst_202217,inst_202218);var state_202221__$1 = state_202221;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_202221__$1,inst_202219);
} else
{return null;
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_202226 = [null,null,null,null,null,null,null];(statearr_202226[0] = state_machine__12118__auto__);
(statearr_202226[1] = 1);
return statearr_202226;
});
var state_machine__12118__auto____1 = (function (state_202221){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_202221);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e202227){if((e202227 instanceof Object))
{var ex__12121__auto__ = e202227;var statearr_202228_202230 = state_202221;(statearr_202228_202230[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_202221);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e202227;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__202231 = state_202221;
state_202221 = G__202231;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_202221){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_202221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_202229 = f__12188__auto__.call(null);(statearr_202229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_202229;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/stats/accounts/:account-id/promoted_accounts/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_202245){var state_val_202246 = (state_202245[1]);if((state_val_202246 === 1))
{var inst_202232 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_202233 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_202234 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_202233,null));var inst_202235 = cljs.core.get_in.call(null,req,inst_202234);var inst_202236 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_202237 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_202236,null));var inst_202238 = cljs.core.get_in.call(null,req,inst_202237);var inst_202239 = [inst_202235,inst_202238];var inst_202240 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_202232,inst_202239);var inst_202241 = foundation.test.models.start_time.call(null,foundation.test.models.promoted_account_stats);var inst_202242 = foundation.test.models.end_time.call(null,foundation.test.models.promoted_account_stats);var inst_202243 = foundation.test.services.stats_request.call(null,foundation.test.models.promoted_account_stats,inst_202240,"HOUR",inst_202241,inst_202242);var state_202245__$1 = state_202245;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_202245__$1,inst_202243);
} else
{return null;
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_202250 = [null,null,null,null,null,null,null];(statearr_202250[0] = state_machine__12118__auto__);
(statearr_202250[1] = 1);
return statearr_202250;
});
var state_machine__12118__auto____1 = (function (state_202245){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_202245);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e202251){if((e202251 instanceof Object))
{var ex__12121__auto__ = e202251;var statearr_202252_202254 = state_202245;(statearr_202252_202254[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_202245);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e202251;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__202255 = state_202245;
state_202245 = G__202255;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_202245){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_202245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_202253 = f__12188__auto__.call(null);(statearr_202253[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_202253;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/stats/accounts/:account-id/promoted_tweets/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_202269){var state_val_202270 = (state_202269[1]);if((state_val_202270 === 1))
{var inst_202256 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_202257 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_202258 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_202257,null));var inst_202259 = cljs.core.get_in.call(null,req,inst_202258);var inst_202260 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_202261 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_202260,null));var inst_202262 = cljs.core.get_in.call(null,req,inst_202261);var inst_202263 = [inst_202259,inst_202262];var inst_202264 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_202256,inst_202263);var inst_202265 = foundation.test.models.start_time.call(null,foundation.test.models.promoted_tweet_stats);var inst_202266 = foundation.test.models.end_time.call(null,foundation.test.models.promoted_tweet_stats);var inst_202267 = foundation.test.services.stats_request.call(null,foundation.test.models.promoted_tweet_stats,inst_202264,"HOUR",inst_202265,inst_202266);var state_202269__$1 = state_202269;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_202269__$1,inst_202267);
} else
{return null;
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_202274 = [null,null,null,null,null,null,null];(statearr_202274[0] = state_machine__12118__auto__);
(statearr_202274[1] = 1);
return statearr_202274;
});
var state_machine__12118__auto____1 = (function (state_202269){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_202269);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e202275){if((e202275 instanceof Object))
{var ex__12121__auto__ = e202275;var statearr_202276_202278 = state_202269;(statearr_202276_202278[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_202269);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e202275;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__202279 = state_202269;
state_202269 = G__202279;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_202269){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_202269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_202277 = f__12188__auto__.call(null);(statearr_202277[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_202277;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
foundation.test.services.simple_get = (function simple_get(req,query_params){var uri = [cljs.core.str(foundation.test.models.ads_api),cljs.core.str(new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req)),cljs.core.str(((cljs.core.seq.call(null,query_params))?foundation.app.models.query_params.call(null,query_params):null))].join('');var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_202299){var state_val_202300 = (state_202299[1]);if((state_val_202300 === 2))
{var inst_202296 = (state_202299[2]);var inst_202297 = cljs.core.set.call(null,inst_202296);var state_202299__$1 = state_202299;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_202299__$1,inst_202297);
} else
{if((state_val_202300 === 1))
{var inst_202294 = foundation.app.xhr.GET.call(null,uri);var state_202299__$1 = state_202299;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_202299__$1,2,inst_202294);
} else
{return null;
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_202304 = [null,null,null,null,null,null,null];(statearr_202304[0] = state_machine__12118__auto__);
(statearr_202304[1] = 1);
return statearr_202304;
});
var state_machine__12118__auto____1 = (function (state_202299){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_202299);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e202305){if((e202305 instanceof Object))
{var ex__12121__auto__ = e202305;var statearr_202306_202308 = state_202299;(statearr_202306_202308[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_202299);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e202305;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__202309 = state_202299;
state_202299 = G__202309;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_202299){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_202299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_202307 = f__12188__auto__.call(null);(statearr_202307[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_202307;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
});
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/targeting_criteria/locations"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_202317){var state_val_202318 = (state_202317[1]);if((state_val_202318 === 2))
{var inst_202314 = (state_202317[2]);var inst_202315 = cljs.core.set.call(null,inst_202314);var state_202317__$1 = state_202317;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_202317__$1,inst_202315);
} else
{if((state_val_202318 === 1))
{var inst_202310 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_202311 = [cljs.core.str(foundation.test.models.ads_api),cljs.core.str(inst_202310)].join('');var inst_202312 = foundation.app.xhr.GET.call(null,inst_202311);var state_202317__$1 = state_202317;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_202317__$1,2,inst_202312);
} else
{return null;
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_202322 = [null,null,null,null,null,null,null];(statearr_202322[0] = state_machine__12118__auto__);
(statearr_202322[1] = 1);
return statearr_202322;
});
var state_machine__12118__auto____1 = (function (state_202317){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_202317);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e202323){if((e202323 instanceof Object))
{var ex__12121__auto__ = e202323;var statearr_202324_202326 = state_202317;(statearr_202324_202326[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_202317);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e202323;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__202327 = state_202317;
state_202317 = G__202327;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_202317){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_202317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_202325 = f__12188__auto__.call(null);(statearr_202325[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_202325;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/targeting_criteria/interests"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_202335){var state_val_202336 = (state_202335[1]);if((state_val_202336 === 2))
{var inst_202332 = (state_202335[2]);var inst_202333 = cljs.core.set.call(null,inst_202332);var state_202335__$1 = state_202335;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_202335__$1,inst_202333);
} else
{if((state_val_202336 === 1))
{var inst_202328 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_202329 = [cljs.core.str(foundation.test.models.ads_api),cljs.core.str(inst_202328)].join('');var inst_202330 = foundation.app.xhr.GET.call(null,inst_202329);var state_202335__$1 = state_202335;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_202335__$1,2,inst_202330);
} else
{return null;
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_202340 = [null,null,null,null,null,null,null];(statearr_202340[0] = state_machine__12118__auto__);
(statearr_202340[1] = 1);
return statearr_202340;
});
var state_machine__12118__auto____1 = (function (state_202335){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_202335);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e202341){if((e202341 instanceof Object))
{var ex__12121__auto__ = e202341;var statearr_202342_202344 = state_202335;(statearr_202342_202344[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_202335);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e202341;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__202345 = state_202335;
state_202335 = G__202345;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_202335){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_202335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_202343 = f__12188__auto__.call(null);(statearr_202343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_202343;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));

//# sourceMappingURL=services.js.map