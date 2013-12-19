// Compiled by ClojureScript 0.0-2120
goog.provide('foundation.test.services');
goog.require('cljs.core');
goog.require('foundation.app');
goog.require('foundation.app.router');
goog.require('cljs.core.async');
goog.require('foundation.app');
goog.require('foundation.app.message');
goog.require('foundation.app.models');
goog.require('goog.date');
goog.require('foundation.app.xhr');
goog.require('foundation.test.models');
goog.require('foundation.app');
goog.require('foundation.app.message');
goog.require('foundation.test.models');
goog.require('foundation.app.models');
goog.require('cljs.core.async');
goog.require('foundation.app.xhr');
goog.require('foundation.app.router');
goog.require('goog.date');
foundation.test.services.init = (function init(resource){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"init","init",1017141378),foundation.app.message.path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null)], true, false),new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"init","init",1017141378),foundation.app.message.path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null),new cljs.core.Keyword(null,"resource","resource",672839552),resource], true, false)], null);
});
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/"], null),(function (req){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"navigate","navigate",3116398819),foundation.app.message.path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"router","router",4383738555)], null),new cljs.core.Keyword(null,"to-path","to-path",4107943849),"/accounts"], true, false)], null);
}));
foundation.test.services.get_resource = (function get_resource(resource,params,query_params){return null;
});
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_195653){var state_val_195654 = (state_195653[1]);if((state_val_195654 === 2))
{var inst_195643 = (state_195653[7]);var inst_195640 = (state_195653[8]);var inst_195641 = (state_195653[9]);var inst_195646 = (state_195653[2]);var inst_195647 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_195643,inst_195646];var inst_195648 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_195641,inst_195647);var inst_195649 = [inst_195648];var inst_195650 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_195649,null));var inst_195651 = cljs.core.into.call(null,inst_195640,inst_195650);var state_195653__$1 = state_195653;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_195653__$1,inst_195651);
} else
{if((state_val_195654 === 1))
{var inst_195640 = foundation.test.services.init.call(null,foundation.test.models.accounts);var inst_195641 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_195642 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_195643 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_195642,null));var inst_195644 = foundation.app.models.fetch.call(null,foundation.test.models.accounts);var state_195653__$1 = (function (){var statearr_195655 = state_195653;(statearr_195655[7] = inst_195643);
(statearr_195655[8] = inst_195640);
(statearr_195655[9] = inst_195641);
return statearr_195655;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_195653__$1,2,inst_195644);
} else
{return null;
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_195659 = [null,null,null,null,null,null,null,null,null,null];(statearr_195659[0] = state_machine__12118__auto__);
(statearr_195659[1] = 1);
return statearr_195659;
});
var state_machine__12118__auto____1 = (function (state_195653){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_195653);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e195660){if((e195660 instanceof Object))
{var ex__12121__auto__ = e195660;var statearr_195661_195663 = state_195653;(statearr_195661_195663[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_195653);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e195660;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__195664 = state_195653;
state_195653 = G__195664;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_195653){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_195653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_195662 = f__12188__auto__.call(null);(statearr_195662[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_195662;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:id"], null),(function (req){return cljs.core.into.call(null,foundation.test.services.init,cljs.core.PersistentVector.EMPTY);
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
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/stats/accounts/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_195675){var state_val_195676 = (state_195675[1]);if((state_val_195676 === 1))
{var inst_195665 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_195666 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_195665,null));var inst_195667 = cljs.core.get_in.call(null,req,inst_195666);var inst_195668 = [new cljs.core.Keyword(null,"id","id",1013907597)];var inst_195669 = [inst_195667];var inst_195670 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_195668,inst_195669);var inst_195671 = foundation.test.models.start_time.call(null,foundation.test.models.account_stats);var inst_195672 = foundation.test.models.end_time.call(null,foundation.test.models.account_stats);var inst_195673 = foundation.test.services.stats_request.call(null,foundation.test.models.account_stats,inst_195670,"HOUR",inst_195671,inst_195672);var state_195675__$1 = state_195675;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_195675__$1,inst_195673);
} else
{return null;
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_195680 = [null,null,null,null,null,null,null];(statearr_195680[0] = state_machine__12118__auto__);
(statearr_195680[1] = 1);
return statearr_195680;
});
var state_machine__12118__auto____1 = (function (state_195675){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_195675);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e195681){if((e195681 instanceof Object))
{var ex__12121__auto__ = e195681;var statearr_195682_195684 = state_195675;(statearr_195682_195684[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_195675);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e195681;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__195685 = state_195675;
state_195675 = G__195685;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_195675){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_195675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_195683 = f__12188__auto__.call(null);(statearr_195683[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_195683;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/stats/accounts/:account-id/campaigns/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_195699){var state_val_195700 = (state_195699[1]);if((state_val_195700 === 1))
{var inst_195686 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_195687 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_195688 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_195687,null));var inst_195689 = cljs.core.get_in.call(null,req,inst_195688);var inst_195690 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_195691 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_195690,null));var inst_195692 = cljs.core.get_in.call(null,req,inst_195691);var inst_195693 = [inst_195689,inst_195692];var inst_195694 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_195686,inst_195693);var inst_195695 = foundation.test.models.start_time.call(null,foundation.test.models.campaign_stats);var inst_195696 = foundation.test.models.end_time.call(null,foundation.test.models.campaign_stats);var inst_195697 = foundation.test.services.stats_request.call(null,foundation.test.models.campaign_stats,inst_195694,"HOUR",inst_195695,inst_195696);var state_195699__$1 = state_195699;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_195699__$1,inst_195697);
} else
{return null;
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_195704 = [null,null,null,null,null,null,null];(statearr_195704[0] = state_machine__12118__auto__);
(statearr_195704[1] = 1);
return statearr_195704;
});
var state_machine__12118__auto____1 = (function (state_195699){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_195699);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e195705){if((e195705 instanceof Object))
{var ex__12121__auto__ = e195705;var statearr_195706_195708 = state_195699;(statearr_195706_195708[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_195699);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e195705;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__195709 = state_195699;
state_195699 = G__195709;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_195699){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_195699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_195707 = f__12188__auto__.call(null);(statearr_195707[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_195707;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/stats/accounts/:account-id/line_items/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_195723){var state_val_195724 = (state_195723[1]);if((state_val_195724 === 1))
{var inst_195710 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_195711 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_195712 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_195711,null));var inst_195713 = cljs.core.get_in.call(null,req,inst_195712);var inst_195714 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_195715 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_195714,null));var inst_195716 = cljs.core.get_in.call(null,req,inst_195715);var inst_195717 = [inst_195713,inst_195716];var inst_195718 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_195710,inst_195717);var inst_195719 = foundation.test.models.start_time.call(null,foundation.test.models.line_item_stats);var inst_195720 = foundation.test.models.end_time.call(null,foundation.test.models.line_item_stats);var inst_195721 = foundation.test.services.stats_request.call(null,foundation.test.models.line_item_stats,inst_195718,"HOUR",inst_195719,inst_195720);var state_195723__$1 = state_195723;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_195723__$1,inst_195721);
} else
{return null;
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_195728 = [null,null,null,null,null,null,null];(statearr_195728[0] = state_machine__12118__auto__);
(statearr_195728[1] = 1);
return statearr_195728;
});
var state_machine__12118__auto____1 = (function (state_195723){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_195723);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e195729){if((e195729 instanceof Object))
{var ex__12121__auto__ = e195729;var statearr_195730_195732 = state_195723;(statearr_195730_195732[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_195723);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e195729;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__195733 = state_195723;
state_195723 = G__195733;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_195723){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_195723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_195731 = f__12188__auto__.call(null);(statearr_195731[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_195731;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/stats/accounts/:account-id/promoted_accounts/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_195747){var state_val_195748 = (state_195747[1]);if((state_val_195748 === 1))
{var inst_195734 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_195735 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_195736 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_195735,null));var inst_195737 = cljs.core.get_in.call(null,req,inst_195736);var inst_195738 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_195739 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_195738,null));var inst_195740 = cljs.core.get_in.call(null,req,inst_195739);var inst_195741 = [inst_195737,inst_195740];var inst_195742 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_195734,inst_195741);var inst_195743 = foundation.test.models.start_time.call(null,foundation.test.models.promoted_account_stats);var inst_195744 = foundation.test.models.end_time.call(null,foundation.test.models.promoted_account_stats);var inst_195745 = foundation.test.services.stats_request.call(null,foundation.test.models.promoted_account_stats,inst_195742,"HOUR",inst_195743,inst_195744);var state_195747__$1 = state_195747;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_195747__$1,inst_195745);
} else
{return null;
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_195752 = [null,null,null,null,null,null,null];(statearr_195752[0] = state_machine__12118__auto__);
(statearr_195752[1] = 1);
return statearr_195752;
});
var state_machine__12118__auto____1 = (function (state_195747){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_195747);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e195753){if((e195753 instanceof Object))
{var ex__12121__auto__ = e195753;var statearr_195754_195756 = state_195747;(statearr_195754_195756[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_195747);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e195753;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__195757 = state_195747;
state_195747 = G__195757;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_195747){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_195747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_195755 = f__12188__auto__.call(null);(statearr_195755[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_195755;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/stats/accounts/:account-id/promoted_tweets/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_195771){var state_val_195772 = (state_195771[1]);if((state_val_195772 === 1))
{var inst_195758 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_195759 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_195760 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_195759,null));var inst_195761 = cljs.core.get_in.call(null,req,inst_195760);var inst_195762 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_195763 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_195762,null));var inst_195764 = cljs.core.get_in.call(null,req,inst_195763);var inst_195765 = [inst_195761,inst_195764];var inst_195766 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_195758,inst_195765);var inst_195767 = foundation.test.models.start_time.call(null,foundation.test.models.promoted_tweet_stats);var inst_195768 = foundation.test.models.end_time.call(null,foundation.test.models.promoted_tweet_stats);var inst_195769 = foundation.test.services.stats_request.call(null,foundation.test.models.promoted_tweet_stats,inst_195766,"HOUR",inst_195767,inst_195768);var state_195771__$1 = state_195771;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_195771__$1,inst_195769);
} else
{return null;
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_195776 = [null,null,null,null,null,null,null];(statearr_195776[0] = state_machine__12118__auto__);
(statearr_195776[1] = 1);
return statearr_195776;
});
var state_machine__12118__auto____1 = (function (state_195771){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_195771);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e195777){if((e195777 instanceof Object))
{var ex__12121__auto__ = e195777;var statearr_195778_195780 = state_195771;(statearr_195778_195780[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_195771);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e195777;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__195781 = state_195771;
state_195771 = G__195781;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_195771){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_195771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_195779 = f__12188__auto__.call(null);(statearr_195779[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_195779;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));

//# sourceMappingURL=services.js.map