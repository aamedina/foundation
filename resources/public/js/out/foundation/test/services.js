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
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_225595){var state_val_225596 = (state_225595[1]);if((state_val_225596 === 3))
{var inst_225576 = (state_225595[7]);var inst_225583 = (state_225595[2]);var inst_225584 = cljs.core.first.call(null,inst_225576);var inst_225585 = foundation.test.services.init.call(null,foundation.test.models.accounts,inst_225584,inst_225583);var inst_225586 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_225587 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_225588 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_225587,null));var inst_225589 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_225588,inst_225576];var inst_225590 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_225586,inst_225589);var inst_225591 = [inst_225590];var inst_225592 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_225591,null));var inst_225593 = cljs.core.into.call(null,inst_225585,inst_225592);var state_225595__$1 = state_225595;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_225595__$1,inst_225593);
} else
{if((state_val_225596 === 2))
{var inst_225576 = (state_225595[7]);var inst_225576__$1 = (state_225595[2]);var inst_225577 = cljs.core.first.call(null,inst_225576__$1);var inst_225578 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_225579 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_225577);var inst_225580 = [cljs.core.str("/stats"),cljs.core.str(inst_225578),cljs.core.str("/"),cljs.core.str(inst_225579)].join('');var inst_225581 = foundation.test.services.get_stats.call(null,inst_225580,inst_225577,foundation.test.models.account_stats);var state_225595__$1 = (function (){var statearr_225597 = state_225595;(statearr_225597[7] = inst_225576__$1);
return statearr_225597;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_225595__$1,3,inst_225581);
} else
{if((state_val_225596 === 1))
{var inst_225574 = foundation.app.models.fetch.call(null,foundation.test.models.accounts);var state_225595__$1 = state_225595;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_225595__$1,2,inst_225574);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_225601 = [null,null,null,null,null,null,null,null];(statearr_225601[0] = state_machine__12118__auto__);
(statearr_225601[1] = 1);
return statearr_225601;
});
var state_machine__12118__auto____1 = (function (state_225595){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_225595);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e225602){if((e225602 instanceof Object))
{var ex__12121__auto__ = e225602;var statearr_225603_225605 = state_225595;(statearr_225603_225605[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_225595);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e225602;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__225606 = state_225595;
state_225595 = G__225606;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_225595){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_225595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_225604 = f__12188__auto__.call(null);(statearr_225604[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_225604;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_225632){var state_val_225633 = (state_225632[1]);if((state_val_225633 === 3))
{var inst_225613 = (state_225632[7]);var inst_225616 = (state_225632[8]);var inst_225621 = (state_225632[2]);var inst_225622 = foundation.test.services.init.call(null,foundation.test.models.accounts,inst_225616,inst_225621);var inst_225623 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_225624 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_225625 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_225624,null));var inst_225626 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_225625,inst_225613];var inst_225627 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_225623,inst_225626);var inst_225628 = [inst_225627];var inst_225629 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_225628,null));var inst_225630 = cljs.core.into.call(null,inst_225622,inst_225629);var state_225632__$1 = state_225632;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_225632__$1,inst_225630);
} else
{if((state_val_225633 === 2))
{var inst_225613 = (state_225632[7]);var inst_225610 = (state_225632[9]);var inst_225613__$1 = (state_225632[2]);var inst_225614 = (function (){var models = inst_225613__$1;var id = inst_225610;return ((function (models,id,inst_225613,inst_225610,inst_225613__$1,state_val_225633){
return (function (p1__225607_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__225607_SHARP_),id);
});
;})(models,id,inst_225613,inst_225610,inst_225613__$1,state_val_225633))
})();var inst_225615 = cljs.core.set.call(null,inst_225613__$1);var inst_225616 = clojure.set.select.call(null,inst_225614,inst_225615);var inst_225617 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_225618 = [cljs.core.str("/stats"),cljs.core.str(inst_225617)].join('');var inst_225619 = foundation.test.services.get_stats.call(null,inst_225618,cljs.core.PersistentHashMap.EMPTY,foundation.test.models.account_stats);var state_225632__$1 = (function (){var statearr_225634 = state_225632;(statearr_225634[7] = inst_225613__$1);
(statearr_225634[8] = inst_225616);
return statearr_225634;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_225632__$1,3,inst_225619);
} else
{if((state_val_225633 === 1))
{var inst_225608 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_225609 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_225608,null));var inst_225610 = cljs.core.get_in.call(null,req,inst_225609);var inst_225611 = foundation.app.models.fetch.call(null,foundation.test.models.accounts);var state_225632__$1 = (function (){var statearr_225635 = state_225632;(statearr_225635[9] = inst_225610);
return statearr_225635;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_225632__$1,2,inst_225611);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_225639 = [null,null,null,null,null,null,null,null,null,null];(statearr_225639[0] = state_machine__12118__auto__);
(statearr_225639[1] = 1);
return statearr_225639;
});
var state_machine__12118__auto____1 = (function (state_225632){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_225632);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e225640){if((e225640 instanceof Object))
{var ex__12121__auto__ = e225640;var statearr_225641_225643 = state_225632;(statearr_225641_225643[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_225632);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e225640;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__225644 = state_225632;
state_225632 = G__225644;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_225632){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_225632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_225642 = f__12188__auto__.call(null);(statearr_225642[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_225642;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/campaigns"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_225672){var state_val_225673 = (state_225672[1]);if((state_val_225673 === 3))
{var inst_225653 = (state_225672[7]);var inst_225660 = (state_225672[2]);var inst_225661 = cljs.core.first.call(null,inst_225653);var inst_225662 = foundation.test.services.init.call(null,foundation.test.models.campaigns,inst_225661,inst_225660);var inst_225663 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_225664 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_225665 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_225664,null));var inst_225666 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_225665,inst_225653];var inst_225667 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_225663,inst_225666);var inst_225668 = [inst_225667];var inst_225669 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_225668,null));var inst_225670 = cljs.core.into.call(null,inst_225662,inst_225669);var state_225672__$1 = state_225672;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_225672__$1,inst_225670);
} else
{if((state_val_225673 === 2))
{var inst_225653 = (state_225672[7]);var inst_225653__$1 = (state_225672[2]);var inst_225654 = cljs.core.first.call(null,inst_225653__$1);var inst_225655 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_225656 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_225654);var inst_225657 = [cljs.core.str("/stats"),cljs.core.str(inst_225655),cljs.core.str("/"),cljs.core.str(inst_225656)].join('');var inst_225658 = foundation.test.services.get_stats.call(null,inst_225657,inst_225654,foundation.test.models.campaign_stats);var state_225672__$1 = (function (){var statearr_225674 = state_225672;(statearr_225674[7] = inst_225653__$1);
return statearr_225674;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_225672__$1,3,inst_225658);
} else
{if((state_val_225673 === 1))
{var inst_225645 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_225646 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_225645,null));var inst_225647 = cljs.core.get_in.call(null,req,inst_225646);var inst_225648 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_225649 = [inst_225647];var inst_225650 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_225648,inst_225649);var inst_225651 = foundation.app.models.fetch.call(null,foundation.test.models.campaigns,new cljs.core.Keyword(null,"params","params",4313443576),inst_225650);var state_225672__$1 = state_225672;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_225672__$1,2,inst_225651);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_225678 = [null,null,null,null,null,null,null,null];(statearr_225678[0] = state_machine__12118__auto__);
(statearr_225678[1] = 1);
return statearr_225678;
});
var state_machine__12118__auto____1 = (function (state_225672){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_225672);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e225679){if((e225679 instanceof Object))
{var ex__12121__auto__ = e225679;var statearr_225680_225682 = state_225672;(statearr_225680_225682[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_225672);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e225679;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__225683 = state_225672;
state_225672 = G__225683;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_225672){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_225672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_225681 = f__12188__auto__.call(null);(statearr_225681[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_225681;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/campaigns/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_225715){var state_val_225716 = (state_225715[1]);if((state_val_225716 === 3))
{var inst_225699 = (state_225715[7]);var inst_225696 = (state_225715[8]);var inst_225704 = (state_225715[2]);var inst_225705 = foundation.test.services.init.call(null,foundation.test.models.campaigns,inst_225699,inst_225704);var inst_225706 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_225707 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_225708 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_225707,null));var inst_225709 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_225708,inst_225696];var inst_225710 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_225706,inst_225709);var inst_225711 = [inst_225710];var inst_225712 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_225711,null));var inst_225713 = cljs.core.into.call(null,inst_225705,inst_225712);var state_225715__$1 = state_225715;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_225715__$1,inst_225713);
} else
{if((state_val_225716 === 2))
{var inst_225696 = (state_225715[8]);var inst_225690 = (state_225715[9]);var inst_225687 = (state_225715[10]);var inst_225696__$1 = (state_225715[2]);var inst_225697 = (function (){var models = inst_225696__$1;var account_id = inst_225690;var id = inst_225687;return ((function (models,account_id,id,inst_225696,inst_225690,inst_225687,inst_225696__$1,state_val_225716){
return (function (p1__225684_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__225684_SHARP_),id);
});
;})(models,account_id,id,inst_225696,inst_225690,inst_225687,inst_225696__$1,state_val_225716))
})();var inst_225698 = cljs.core.set.call(null,inst_225696__$1);var inst_225699 = clojure.set.select.call(null,inst_225697,inst_225698);var inst_225700 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_225701 = [cljs.core.str("/stats"),cljs.core.str(inst_225700)].join('');var inst_225702 = foundation.test.services.get_stats.call(null,inst_225701,cljs.core.PersistentHashMap.EMPTY,foundation.test.models.campaign_stats);var state_225715__$1 = (function (){var statearr_225717 = state_225715;(statearr_225717[7] = inst_225699);
(statearr_225717[8] = inst_225696__$1);
return statearr_225717;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_225715__$1,3,inst_225702);
} else
{if((state_val_225716 === 1))
{var inst_225690 = (state_225715[9]);var inst_225685 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_225686 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_225685,null));var inst_225687 = cljs.core.get_in.call(null,req,inst_225686);var inst_225688 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_225689 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_225688,null));var inst_225690__$1 = cljs.core.get_in.call(null,req,inst_225689);var inst_225691 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_225692 = [inst_225690__$1];var inst_225693 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_225691,inst_225692);var inst_225694 = foundation.app.models.fetch.call(null,foundation.test.models.campaigns,new cljs.core.Keyword(null,"params","params",4313443576),inst_225693);var state_225715__$1 = (function (){var statearr_225718 = state_225715;(statearr_225718[9] = inst_225690__$1);
(statearr_225718[10] = inst_225687);
return statearr_225718;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_225715__$1,2,inst_225694);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_225722 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_225722[0] = state_machine__12118__auto__);
(statearr_225722[1] = 1);
return statearr_225722;
});
var state_machine__12118__auto____1 = (function (state_225715){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_225715);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e225723){if((e225723 instanceof Object))
{var ex__12121__auto__ = e225723;var statearr_225724_225726 = state_225715;(statearr_225724_225726[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_225715);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e225723;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__225727 = state_225715;
state_225715 = G__225727;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_225715){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_225715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_225725 = f__12188__auto__.call(null);(statearr_225725[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_225725;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/line_items"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_225761){var state_val_225762 = (state_225761[1]);if((state_val_225762 === 3))
{var inst_225742 = (state_225761[7]);var inst_225749 = (state_225761[2]);var inst_225750 = cljs.core.first.call(null,inst_225742);var inst_225751 = foundation.test.services.init.call(null,foundation.test.models.line_items,inst_225750,inst_225749);var inst_225752 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_225753 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_225754 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_225753,null));var inst_225755 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_225754,inst_225742];var inst_225756 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_225752,inst_225755);var inst_225757 = [inst_225756];var inst_225758 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_225757,null));var inst_225759 = cljs.core.into.call(null,inst_225751,inst_225758);var state_225761__$1 = state_225761;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_225761__$1,inst_225759);
} else
{if((state_val_225762 === 2))
{var inst_225742 = (state_225761[7]);var inst_225742__$1 = (state_225761[2]);var inst_225743 = cljs.core.first.call(null,inst_225742__$1);var inst_225744 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_225745 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_225743);var inst_225746 = [cljs.core.str("/stats"),cljs.core.str(inst_225744),cljs.core.str("/"),cljs.core.str(inst_225745)].join('');var inst_225747 = foundation.test.services.get_stats.call(null,inst_225746,inst_225743,foundation.test.models.line_item_stats);var state_225761__$1 = (function (){var statearr_225763 = state_225761;(statearr_225763[7] = inst_225742__$1);
return statearr_225763;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_225761__$1,3,inst_225747);
} else
{if((state_val_225762 === 1))
{var inst_225728 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_225729 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_225728,null));var inst_225730 = cljs.core.get_in.call(null,req,inst_225729);var inst_225731 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"campaign_ids","campaign_ids",1186837115)];var inst_225732 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_225731,null));var inst_225733 = cljs.core.get_in.call(null,req,inst_225732);var inst_225734 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_225735 = [inst_225730];var inst_225736 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_225734,inst_225735);var inst_225737 = [new cljs.core.Keyword(null,"campaign-ids","campaign-ids",1185347565)];var inst_225738 = [inst_225733];var inst_225739 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_225737,inst_225738);var inst_225740 = foundation.app.models.fetch.call(null,foundation.test.models.line_items,new cljs.core.Keyword(null,"params","params",4313443576),inst_225736,new cljs.core.Keyword(null,"query-params","query-params",1080249757),inst_225739);var state_225761__$1 = state_225761;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_225761__$1,2,inst_225740);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_225767 = [null,null,null,null,null,null,null,null];(statearr_225767[0] = state_machine__12118__auto__);
(statearr_225767[1] = 1);
return statearr_225767;
});
var state_machine__12118__auto____1 = (function (state_225761){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_225761);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e225768){if((e225768 instanceof Object))
{var ex__12121__auto__ = e225768;var statearr_225769_225771 = state_225761;(statearr_225769_225771[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_225761);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e225768;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__225772 = state_225761;
state_225761 = G__225772;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_225761){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_225761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_225770 = f__12188__auto__.call(null);(statearr_225770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_225770;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/line_items/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_225809){var state_val_225810 = (state_225809[1]);if((state_val_225810 === 3))
{var inst_225793 = (state_225809[7]);var inst_225790 = (state_225809[8]);var inst_225798 = (state_225809[2]);var inst_225799 = foundation.test.services.init.call(null,foundation.test.models.line_items,inst_225793,inst_225798);var inst_225800 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_225801 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_225802 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_225801,null));var inst_225803 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_225802,inst_225790];var inst_225804 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_225800,inst_225803);var inst_225805 = [inst_225804];var inst_225806 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_225805,null));var inst_225807 = cljs.core.into.call(null,inst_225799,inst_225806);var state_225809__$1 = state_225809;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_225809__$1,inst_225807);
} else
{if((state_val_225810 === 2))
{var inst_225782 = (state_225809[9]);var inst_225779 = (state_225809[10]);var inst_225790 = (state_225809[8]);var inst_225776 = (state_225809[11]);var inst_225790__$1 = (state_225809[2]);var inst_225791 = (function (){var models = inst_225790__$1;var campaign_id = inst_225782;var account_id = inst_225779;var id = inst_225776;return ((function (models,campaign_id,account_id,id,inst_225782,inst_225779,inst_225790,inst_225776,inst_225790__$1,state_val_225810){
return (function (p1__225773_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__225773_SHARP_),id);
});
;})(models,campaign_id,account_id,id,inst_225782,inst_225779,inst_225790,inst_225776,inst_225790__$1,state_val_225810))
})();var inst_225792 = cljs.core.set.call(null,inst_225790__$1);var inst_225793 = clojure.set.select.call(null,inst_225791,inst_225792);var inst_225794 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_225795 = [cljs.core.str("/stats"),cljs.core.str(inst_225794)].join('');var inst_225796 = foundation.test.services.get_stats.call(null,inst_225795,cljs.core.PersistentHashMap.EMPTY,foundation.test.models.line_item_stats);var state_225809__$1 = (function (){var statearr_225811 = state_225809;(statearr_225811[7] = inst_225793);
(statearr_225811[8] = inst_225790__$1);
return statearr_225811;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_225809__$1,3,inst_225796);
} else
{if((state_val_225810 === 1))
{var inst_225782 = (state_225809[9]);var inst_225779 = (state_225809[10]);var inst_225774 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_225775 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_225774,null));var inst_225776 = cljs.core.get_in.call(null,req,inst_225775);var inst_225777 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_225778 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_225777,null));var inst_225779__$1 = cljs.core.get_in.call(null,req,inst_225778);var inst_225780 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"campaign_ids","campaign_ids",1186837115)];var inst_225781 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_225780,null));var inst_225782__$1 = cljs.core.get_in.call(null,req,inst_225781);var inst_225783 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477),inst_225779__$1];var inst_225784 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_225783,null));var inst_225785 = [new cljs.core.Keyword(null,"campaign-ids","campaign-ids",1185347565)];var inst_225786 = [inst_225782__$1];var inst_225787 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_225785,inst_225786);var inst_225788 = foundation.app.models.fetch.call(null,foundation.test.models.line_items,new cljs.core.Keyword(null,"params","params",4313443576),inst_225784,new cljs.core.Keyword(null,"query-params","query-params",1080249757),inst_225787);var state_225809__$1 = (function (){var statearr_225812 = state_225809;(statearr_225812[9] = inst_225782__$1);
(statearr_225812[10] = inst_225779__$1);
(statearr_225812[11] = inst_225776);
return statearr_225812;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_225809__$1,2,inst_225788);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_225816 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_225816[0] = state_machine__12118__auto__);
(statearr_225816[1] = 1);
return statearr_225816;
});
var state_machine__12118__auto____1 = (function (state_225809){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_225809);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e225817){if((e225817 instanceof Object))
{var ex__12121__auto__ = e225817;var statearr_225818_225820 = state_225809;(statearr_225818_225820[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_225809);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e225817;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__225821 = state_225809;
state_225809 = G__225821;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_225809){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_225809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_225819 = f__12188__auto__.call(null);(statearr_225819[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_225819;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/promoted_accounts"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_225852){var state_val_225853 = (state_225852[1]);if((state_val_225853 === 3))
{var inst_225833 = (state_225852[7]);var inst_225840 = (state_225852[2]);var inst_225841 = cljs.core.first.call(null,inst_225833);var inst_225842 = foundation.test.services.init.call(null,foundation.test.models.promoted_accounts,inst_225841,inst_225840);var inst_225843 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_225844 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_225845 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_225844,null));var inst_225846 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_225845,inst_225833];var inst_225847 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_225843,inst_225846);var inst_225848 = [inst_225847];var inst_225849 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_225848,null));var inst_225850 = cljs.core.into.call(null,inst_225842,inst_225849);var state_225852__$1 = state_225852;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_225852__$1,inst_225850);
} else
{if((state_val_225853 === 2))
{var inst_225833 = (state_225852[7]);var inst_225833__$1 = (state_225852[2]);var inst_225834 = cljs.core.first.call(null,inst_225833__$1);var inst_225835 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_225836 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_225834);var inst_225837 = [cljs.core.str("/stats"),cljs.core.str(inst_225835),cljs.core.str("/"),cljs.core.str(inst_225836)].join('');var inst_225838 = foundation.test.services.get_stats.call(null,inst_225837,inst_225834,foundation.test.models.promoted_account_stats);var state_225852__$1 = (function (){var statearr_225854 = state_225852;(statearr_225854[7] = inst_225833__$1);
return statearr_225854;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_225852__$1,3,inst_225838);
} else
{if((state_val_225853 === 1))
{var inst_225822 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_225823 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_225822,null));var inst_225824 = cljs.core.get_in.call(null,req,inst_225823);var inst_225825 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"line_item_id","line_item_id",4537110510)];var inst_225826 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_225825,null));var inst_225827 = cljs.core.get_in.call(null,req,inst_225826);var inst_225828 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477),new cljs.core.Keyword(null,"line_item_id","line_item_id",4537110510)];var inst_225829 = [inst_225824,inst_225827];var inst_225830 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_225828,inst_225829);var inst_225831 = foundation.app.models.fetch.call(null,foundation.test.models.promoted_accounts,new cljs.core.Keyword(null,"params","params",4313443576),inst_225830);var state_225852__$1 = state_225852;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_225852__$1,2,inst_225831);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_225858 = [null,null,null,null,null,null,null,null];(statearr_225858[0] = state_machine__12118__auto__);
(statearr_225858[1] = 1);
return statearr_225858;
});
var state_machine__12118__auto____1 = (function (state_225852){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_225852);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e225859){if((e225859 instanceof Object))
{var ex__12121__auto__ = e225859;var statearr_225860_225862 = state_225852;(statearr_225860_225862[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_225852);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e225859;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__225863 = state_225852;
state_225852 = G__225863;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_225852){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_225852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_225861 = f__12188__auto__.call(null);(statearr_225861[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_225861;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/promoted_accounts/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_225898){var state_val_225899 = (state_225898[1]);if((state_val_225899 === 3))
{var inst_225882 = (state_225898[7]);var inst_225879 = (state_225898[8]);var inst_225887 = (state_225898[2]);var inst_225888 = foundation.test.services.init.call(null,foundation.test.models.promoted_accounts,inst_225882,inst_225887);var inst_225889 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_225890 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_225891 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_225890,null));var inst_225892 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_225891,inst_225879];var inst_225893 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_225889,inst_225892);var inst_225894 = [inst_225893];var inst_225895 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_225894,null));var inst_225896 = cljs.core.into.call(null,inst_225888,inst_225895);var state_225898__$1 = state_225898;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_225898__$1,inst_225896);
} else
{if((state_val_225899 === 2))
{var inst_225867 = (state_225898[9]);var inst_225873 = (state_225898[10]);var inst_225870 = (state_225898[11]);var inst_225879 = (state_225898[8]);var inst_225879__$1 = (state_225898[2]);var inst_225880 = (function (){var models = inst_225879__$1;var line_item_id = inst_225873;var account_id = inst_225870;var id = inst_225867;return ((function (models,line_item_id,account_id,id,inst_225867,inst_225873,inst_225870,inst_225879,inst_225879__$1,state_val_225899){
return (function (p1__225864_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__225864_SHARP_),id);
});
;})(models,line_item_id,account_id,id,inst_225867,inst_225873,inst_225870,inst_225879,inst_225879__$1,state_val_225899))
})();var inst_225881 = cljs.core.set.call(null,inst_225879__$1);var inst_225882 = clojure.set.select.call(null,inst_225880,inst_225881);var inst_225883 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_225884 = [cljs.core.str("/stats"),cljs.core.str(inst_225883)].join('');var inst_225885 = foundation.test.services.get_stats.call(null,inst_225884,cljs.core.PersistentHashMap.EMPTY,foundation.test.models.promoted_account_stats);var state_225898__$1 = (function (){var statearr_225900 = state_225898;(statearr_225900[7] = inst_225882);
(statearr_225900[8] = inst_225879__$1);
return statearr_225900;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_225898__$1,3,inst_225885);
} else
{if((state_val_225899 === 1))
{var inst_225873 = (state_225898[10]);var inst_225870 = (state_225898[11]);var inst_225865 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_225866 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_225865,null));var inst_225867 = cljs.core.get_in.call(null,req,inst_225866);var inst_225868 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_225869 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_225868,null));var inst_225870__$1 = cljs.core.get_in.call(null,req,inst_225869);var inst_225871 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"line_item_id","line_item_id",4537110510)];var inst_225872 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_225871,null));var inst_225873__$1 = cljs.core.get_in.call(null,req,inst_225872);var inst_225874 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477),new cljs.core.Keyword(null,"line_item_id","line_item_id",4537110510)];var inst_225875 = [inst_225870__$1,inst_225873__$1];var inst_225876 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_225874,inst_225875);var inst_225877 = foundation.app.models.fetch.call(null,foundation.test.models.promoted_accounts,new cljs.core.Keyword(null,"params","params",4313443576),inst_225876);var state_225898__$1 = (function (){var statearr_225901 = state_225898;(statearr_225901[9] = inst_225867);
(statearr_225901[10] = inst_225873__$1);
(statearr_225901[11] = inst_225870__$1);
return statearr_225901;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_225898__$1,2,inst_225877);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_225905 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_225905[0] = state_machine__12118__auto__);
(statearr_225905[1] = 1);
return statearr_225905;
});
var state_machine__12118__auto____1 = (function (state_225898){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_225898);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e225906){if((e225906 instanceof Object))
{var ex__12121__auto__ = e225906;var statearr_225907_225909 = state_225898;(statearr_225907_225909[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_225898);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e225906;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__225910 = state_225898;
state_225898 = G__225910;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_225898){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_225898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_225908 = f__12188__auto__.call(null);(statearr_225908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_225908;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/promoted_tweets"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_225941){var state_val_225942 = (state_225941[1]);if((state_val_225942 === 3))
{var inst_225922 = (state_225941[7]);var inst_225929 = (state_225941[2]);var inst_225930 = cljs.core.first.call(null,inst_225922);var inst_225931 = foundation.test.services.init.call(null,foundation.test.models.promoted_tweets,inst_225930,inst_225929);var inst_225932 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_225933 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_225934 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_225933,null));var inst_225935 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_225934,inst_225922];var inst_225936 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_225932,inst_225935);var inst_225937 = [inst_225936];var inst_225938 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_225937,null));var inst_225939 = cljs.core.into.call(null,inst_225931,inst_225938);var state_225941__$1 = state_225941;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_225941__$1,inst_225939);
} else
{if((state_val_225942 === 2))
{var inst_225922 = (state_225941[7]);var inst_225922__$1 = (state_225941[2]);var inst_225923 = cljs.core.first.call(null,inst_225922__$1);var inst_225924 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_225925 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_225923);var inst_225926 = [cljs.core.str("/stats"),cljs.core.str(inst_225924),cljs.core.str("/"),cljs.core.str(inst_225925)].join('');var inst_225927 = foundation.test.services.get_stats.call(null,inst_225926,inst_225923,foundation.test.models.promoted_tweet_stats);var state_225941__$1 = (function (){var statearr_225943 = state_225941;(statearr_225943[7] = inst_225922__$1);
return statearr_225943;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_225941__$1,3,inst_225927);
} else
{if((state_val_225942 === 1))
{var inst_225911 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_225912 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_225911,null));var inst_225913 = cljs.core.get_in.call(null,req,inst_225912);var inst_225914 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"line_item_id","line_item_id",4537110510)];var inst_225915 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_225914,null));var inst_225916 = cljs.core.get_in.call(null,req,inst_225915);var inst_225917 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477),new cljs.core.Keyword(null,"line_item_id","line_item_id",4537110510)];var inst_225918 = [inst_225913,inst_225916];var inst_225919 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_225917,inst_225918);var inst_225920 = foundation.app.models.fetch.call(null,foundation.test.models.promoted_tweets,new cljs.core.Keyword(null,"params","params",4313443576),inst_225919);var state_225941__$1 = state_225941;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_225941__$1,2,inst_225920);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_225947 = [null,null,null,null,null,null,null,null];(statearr_225947[0] = state_machine__12118__auto__);
(statearr_225947[1] = 1);
return statearr_225947;
});
var state_machine__12118__auto____1 = (function (state_225941){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_225941);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e225948){if((e225948 instanceof Object))
{var ex__12121__auto__ = e225948;var statearr_225949_225951 = state_225941;(statearr_225949_225951[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_225941);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e225948;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__225952 = state_225941;
state_225941 = G__225952;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_225941){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_225941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_225950 = f__12188__auto__.call(null);(statearr_225950[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_225950;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/promoted_tweets/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_225987){var state_val_225988 = (state_225987[1]);if((state_val_225988 === 3))
{var inst_225968 = (state_225987[7]);var inst_225971 = (state_225987[8]);var inst_225976 = (state_225987[2]);var inst_225977 = foundation.test.services.init.call(null,foundation.test.models.promoted_tweets,inst_225971,inst_225976);var inst_225978 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_225979 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_225980 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_225979,null));var inst_225981 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_225980,inst_225968];var inst_225982 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_225978,inst_225981);var inst_225983 = [inst_225982];var inst_225984 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_225983,null));var inst_225985 = cljs.core.into.call(null,inst_225977,inst_225984);var state_225987__$1 = state_225987;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_225987__$1,inst_225985);
} else
{if((state_val_225988 === 2))
{var inst_225959 = (state_225987[9]);var inst_225968 = (state_225987[7]);var inst_225956 = (state_225987[10]);var inst_225962 = (state_225987[11]);var inst_225968__$1 = (state_225987[2]);var inst_225969 = (function (){var models = inst_225968__$1;var line_item_id = inst_225962;var account_id = inst_225959;var id = inst_225956;return ((function (models,line_item_id,account_id,id,inst_225959,inst_225968,inst_225956,inst_225962,inst_225968__$1,state_val_225988){
return (function (p1__225953_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__225953_SHARP_),id);
});
;})(models,line_item_id,account_id,id,inst_225959,inst_225968,inst_225956,inst_225962,inst_225968__$1,state_val_225988))
})();var inst_225970 = cljs.core.set.call(null,inst_225968__$1);var inst_225971 = clojure.set.select.call(null,inst_225969,inst_225970);var inst_225972 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_225973 = [cljs.core.str("/stats"),cljs.core.str(inst_225972)].join('');var inst_225974 = foundation.test.services.get_stats.call(null,inst_225973,cljs.core.PersistentHashMap.EMPTY,foundation.test.models.promoted_tweet_stats);var state_225987__$1 = (function (){var statearr_225989 = state_225987;(statearr_225989[7] = inst_225968__$1);
(statearr_225989[8] = inst_225971);
return statearr_225989;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_225987__$1,3,inst_225974);
} else
{if((state_val_225988 === 1))
{var inst_225959 = (state_225987[9]);var inst_225962 = (state_225987[11]);var inst_225954 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_225955 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_225954,null));var inst_225956 = cljs.core.get_in.call(null,req,inst_225955);var inst_225957 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_225958 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_225957,null));var inst_225959__$1 = cljs.core.get_in.call(null,req,inst_225958);var inst_225960 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"line_item_id","line_item_id",4537110510)];var inst_225961 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_225960,null));var inst_225962__$1 = cljs.core.get_in.call(null,req,inst_225961);var inst_225963 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477),new cljs.core.Keyword(null,"line_item_id","line_item_id",4537110510)];var inst_225964 = [inst_225959__$1,inst_225962__$1];var inst_225965 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_225963,inst_225964);var inst_225966 = foundation.app.models.fetch.call(null,foundation.test.models.promoted_tweets,new cljs.core.Keyword(null,"params","params",4313443576),inst_225965);var state_225987__$1 = (function (){var statearr_225990 = state_225987;(statearr_225990[9] = inst_225959__$1);
(statearr_225990[10] = inst_225956);
(statearr_225990[11] = inst_225962__$1);
return statearr_225990;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_225987__$1,2,inst_225966);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_225994 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_225994[0] = state_machine__12118__auto__);
(statearr_225994[1] = 1);
return statearr_225994;
});
var state_machine__12118__auto____1 = (function (state_225987){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_225987);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e225995){if((e225995 instanceof Object))
{var ex__12121__auto__ = e225995;var statearr_225996_225998 = state_225987;(statearr_225996_225998[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_225987);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e225995;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__225999 = state_225987;
state_225987 = G__225999;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_225987){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_225987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_225997 = f__12188__auto__.call(null);(statearr_225997[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_225997;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));

//# sourceMappingURL=services.js.map