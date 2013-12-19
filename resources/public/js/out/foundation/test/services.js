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
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_204620){var state_val_204621 = (state_204620[1]);if((state_val_204621 === 3))
{var inst_204601 = (state_204620[7]);var inst_204608 = (state_204620[2]);var inst_204609 = cljs.core.first.call(null,inst_204601);var inst_204610 = foundation.test.services.init.call(null,foundation.test.models.accounts,inst_204609,inst_204608);var inst_204611 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_204612 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_204613 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_204612,null));var inst_204614 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_204613,inst_204601];var inst_204615 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_204611,inst_204614);var inst_204616 = [inst_204615];var inst_204617 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_204616,null));var inst_204618 = cljs.core.into.call(null,inst_204610,inst_204617);var state_204620__$1 = state_204620;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_204620__$1,inst_204618);
} else
{if((state_val_204621 === 2))
{var inst_204601 = (state_204620[7]);var inst_204601__$1 = (state_204620[2]);var inst_204602 = cljs.core.first.call(null,inst_204601__$1);var inst_204603 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_204604 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_204602);var inst_204605 = [cljs.core.str("/stats"),cljs.core.str(inst_204603),cljs.core.str("/"),cljs.core.str(inst_204604)].join('');var inst_204606 = foundation.test.services.get_stats.call(null,inst_204605,inst_204602,foundation.test.models.account_stats);var state_204620__$1 = (function (){var statearr_204622 = state_204620;(statearr_204622[7] = inst_204601__$1);
return statearr_204622;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_204620__$1,3,inst_204606);
} else
{if((state_val_204621 === 1))
{var inst_204599 = foundation.app.models.fetch.call(null,foundation.test.models.accounts);var state_204620__$1 = state_204620;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_204620__$1,2,inst_204599);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_204626 = [null,null,null,null,null,null,null,null];(statearr_204626[0] = state_machine__12118__auto__);
(statearr_204626[1] = 1);
return statearr_204626;
});
var state_machine__12118__auto____1 = (function (state_204620){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_204620);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e204627){if((e204627 instanceof Object))
{var ex__12121__auto__ = e204627;var statearr_204628_204630 = state_204620;(statearr_204628_204630[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_204620);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e204627;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__204631 = state_204620;
state_204620 = G__204631;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_204620){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_204620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_204629 = f__12188__auto__.call(null);(statearr_204629[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_204629;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_204657){var state_val_204658 = (state_204657[1]);if((state_val_204658 === 3))
{var inst_204638 = (state_204657[7]);var inst_204641 = (state_204657[8]);var inst_204646 = (state_204657[2]);var inst_204647 = foundation.test.services.init.call(null,foundation.test.models.accounts,inst_204641,inst_204646);var inst_204648 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_204649 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_204650 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_204649,null));var inst_204651 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_204650,inst_204638];var inst_204652 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_204648,inst_204651);var inst_204653 = [inst_204652];var inst_204654 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_204653,null));var inst_204655 = cljs.core.into.call(null,inst_204647,inst_204654);var state_204657__$1 = state_204657;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_204657__$1,inst_204655);
} else
{if((state_val_204658 === 2))
{var inst_204638 = (state_204657[7]);var inst_204635 = (state_204657[9]);var inst_204638__$1 = (state_204657[2]);var inst_204639 = (function (){var models = inst_204638__$1;var id = inst_204635;return ((function (models,id,inst_204638,inst_204635,inst_204638__$1,state_val_204658){
return (function (p1__204632_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__204632_SHARP_),id);
});
;})(models,id,inst_204638,inst_204635,inst_204638__$1,state_val_204658))
})();var inst_204640 = cljs.core.set.call(null,inst_204638__$1);var inst_204641 = clojure.set.select.call(null,inst_204639,inst_204640);var inst_204642 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_204643 = [cljs.core.str("/stats"),cljs.core.str(inst_204642)].join('');var inst_204644 = foundation.test.services.get_stats.call(null,inst_204643,cljs.core.PersistentHashMap.EMPTY,foundation.test.models.account_stats);var state_204657__$1 = (function (){var statearr_204659 = state_204657;(statearr_204659[7] = inst_204638__$1);
(statearr_204659[8] = inst_204641);
return statearr_204659;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_204657__$1,3,inst_204644);
} else
{if((state_val_204658 === 1))
{var inst_204633 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_204634 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_204633,null));var inst_204635 = cljs.core.get_in.call(null,req,inst_204634);var inst_204636 = foundation.app.models.fetch.call(null,foundation.test.models.accounts);var state_204657__$1 = (function (){var statearr_204660 = state_204657;(statearr_204660[9] = inst_204635);
return statearr_204660;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_204657__$1,2,inst_204636);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_204664 = [null,null,null,null,null,null,null,null,null,null];(statearr_204664[0] = state_machine__12118__auto__);
(statearr_204664[1] = 1);
return statearr_204664;
});
var state_machine__12118__auto____1 = (function (state_204657){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_204657);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e204665){if((e204665 instanceof Object))
{var ex__12121__auto__ = e204665;var statearr_204666_204668 = state_204657;(statearr_204666_204668[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_204657);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e204665;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__204669 = state_204657;
state_204657 = G__204669;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_204657){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_204657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_204667 = f__12188__auto__.call(null);(statearr_204667[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_204667;
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