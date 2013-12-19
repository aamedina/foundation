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
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_220571){var state_val_220572 = (state_220571[1]);if((state_val_220572 === 3))
{var inst_220552 = (state_220571[7]);var inst_220559 = (state_220571[2]);var inst_220560 = cljs.core.first.call(null,inst_220552);var inst_220561 = foundation.test.services.init.call(null,foundation.test.models.accounts,inst_220560,inst_220559);var inst_220562 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_220563 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_220564 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_220563,null));var inst_220565 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_220564,inst_220552];var inst_220566 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_220562,inst_220565);var inst_220567 = [inst_220566];var inst_220568 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_220567,null));var inst_220569 = cljs.core.into.call(null,inst_220561,inst_220568);var state_220571__$1 = state_220571;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_220571__$1,inst_220569);
} else
{if((state_val_220572 === 2))
{var inst_220552 = (state_220571[7]);var inst_220552__$1 = (state_220571[2]);var inst_220553 = cljs.core.first.call(null,inst_220552__$1);var inst_220554 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_220555 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_220553);var inst_220556 = [cljs.core.str("/stats"),cljs.core.str(inst_220554),cljs.core.str("/"),cljs.core.str(inst_220555)].join('');var inst_220557 = foundation.test.services.get_stats.call(null,inst_220556,inst_220553,foundation.test.models.account_stats);var state_220571__$1 = (function (){var statearr_220573 = state_220571;(statearr_220573[7] = inst_220552__$1);
return statearr_220573;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_220571__$1,3,inst_220557);
} else
{if((state_val_220572 === 1))
{var inst_220550 = foundation.app.models.fetch.call(null,foundation.test.models.accounts);var state_220571__$1 = state_220571;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_220571__$1,2,inst_220550);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_220577 = [null,null,null,null,null,null,null,null];(statearr_220577[0] = state_machine__12118__auto__);
(statearr_220577[1] = 1);
return statearr_220577;
});
var state_machine__12118__auto____1 = (function (state_220571){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_220571);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e220578){if((e220578 instanceof Object))
{var ex__12121__auto__ = e220578;var statearr_220579_220581 = state_220571;(statearr_220579_220581[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_220571);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e220578;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__220582 = state_220571;
state_220571 = G__220582;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_220571){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_220571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_220580 = f__12188__auto__.call(null);(statearr_220580[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_220580;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_220608){var state_val_220609 = (state_220608[1]);if((state_val_220609 === 3))
{var inst_220592 = (state_220608[7]);var inst_220589 = (state_220608[8]);var inst_220597 = (state_220608[2]);var inst_220598 = foundation.test.services.init.call(null,foundation.test.models.accounts,inst_220592,inst_220597);var inst_220599 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_220600 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_220601 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_220600,null));var inst_220602 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_220601,inst_220589];var inst_220603 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_220599,inst_220602);var inst_220604 = [inst_220603];var inst_220605 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_220604,null));var inst_220606 = cljs.core.into.call(null,inst_220598,inst_220605);var state_220608__$1 = state_220608;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_220608__$1,inst_220606);
} else
{if((state_val_220609 === 2))
{var inst_220586 = (state_220608[9]);var inst_220589 = (state_220608[8]);var inst_220589__$1 = (state_220608[2]);var inst_220590 = (function (){var models = inst_220589__$1;var id = inst_220586;return ((function (models,id,inst_220586,inst_220589,inst_220589__$1,state_val_220609){
return (function (p1__220583_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__220583_SHARP_),id);
});
;})(models,id,inst_220586,inst_220589,inst_220589__$1,state_val_220609))
})();var inst_220591 = cljs.core.set.call(null,inst_220589__$1);var inst_220592 = clojure.set.select.call(null,inst_220590,inst_220591);var inst_220593 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_220594 = [cljs.core.str("/stats"),cljs.core.str(inst_220593)].join('');var inst_220595 = foundation.test.services.get_stats.call(null,inst_220594,cljs.core.PersistentHashMap.EMPTY,foundation.test.models.account_stats);var state_220608__$1 = (function (){var statearr_220610 = state_220608;(statearr_220610[7] = inst_220592);
(statearr_220610[8] = inst_220589__$1);
return statearr_220610;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_220608__$1,3,inst_220595);
} else
{if((state_val_220609 === 1))
{var inst_220584 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_220585 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_220584,null));var inst_220586 = cljs.core.get_in.call(null,req,inst_220585);var inst_220587 = foundation.app.models.fetch.call(null,foundation.test.models.accounts);var state_220608__$1 = (function (){var statearr_220611 = state_220608;(statearr_220611[9] = inst_220586);
return statearr_220611;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_220608__$1,2,inst_220587);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_220615 = [null,null,null,null,null,null,null,null,null,null];(statearr_220615[0] = state_machine__12118__auto__);
(statearr_220615[1] = 1);
return statearr_220615;
});
var state_machine__12118__auto____1 = (function (state_220608){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_220608);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e220616){if((e220616 instanceof Object))
{var ex__12121__auto__ = e220616;var statearr_220617_220619 = state_220608;(statearr_220617_220619[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_220608);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e220616;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__220620 = state_220608;
state_220608 = G__220620;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_220608){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_220608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_220618 = f__12188__auto__.call(null);(statearr_220618[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_220618;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/campaigns"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_220648){var state_val_220649 = (state_220648[1]);if((state_val_220649 === 3))
{var inst_220629 = (state_220648[7]);var inst_220636 = (state_220648[2]);var inst_220637 = cljs.core.first.call(null,inst_220629);var inst_220638 = foundation.test.services.init.call(null,foundation.test.models.campaigns,inst_220637,inst_220636);var inst_220639 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_220640 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_220641 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_220640,null));var inst_220642 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_220641,inst_220629];var inst_220643 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_220639,inst_220642);var inst_220644 = [inst_220643];var inst_220645 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_220644,null));var inst_220646 = cljs.core.into.call(null,inst_220638,inst_220645);var state_220648__$1 = state_220648;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_220648__$1,inst_220646);
} else
{if((state_val_220649 === 2))
{var inst_220629 = (state_220648[7]);var inst_220629__$1 = (state_220648[2]);var inst_220630 = cljs.core.first.call(null,inst_220629__$1);var inst_220631 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_220632 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_220630);var inst_220633 = [cljs.core.str("/stats"),cljs.core.str(inst_220631),cljs.core.str("/"),cljs.core.str(inst_220632)].join('');var inst_220634 = foundation.test.services.get_stats.call(null,inst_220633,inst_220630,foundation.test.models.campaign_stats);var state_220648__$1 = (function (){var statearr_220650 = state_220648;(statearr_220650[7] = inst_220629__$1);
return statearr_220650;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_220648__$1,3,inst_220634);
} else
{if((state_val_220649 === 1))
{var inst_220621 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_220622 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_220621,null));var inst_220623 = cljs.core.get_in.call(null,req,inst_220622);var inst_220624 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_220625 = [inst_220623];var inst_220626 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_220624,inst_220625);var inst_220627 = foundation.app.models.fetch.call(null,foundation.test.models.campaigns,new cljs.core.Keyword(null,"params","params",4313443576),inst_220626);var state_220648__$1 = state_220648;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_220648__$1,2,inst_220627);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_220654 = [null,null,null,null,null,null,null,null];(statearr_220654[0] = state_machine__12118__auto__);
(statearr_220654[1] = 1);
return statearr_220654;
});
var state_machine__12118__auto____1 = (function (state_220648){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_220648);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e220655){if((e220655 instanceof Object))
{var ex__12121__auto__ = e220655;var statearr_220656_220658 = state_220648;(statearr_220656_220658[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_220648);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e220655;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__220659 = state_220648;
state_220648 = G__220659;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_220648){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_220648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_220657 = f__12188__auto__.call(null);(statearr_220657[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_220657;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/campaigns/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_220691){var state_val_220692 = (state_220691[1]);if((state_val_220692 === 3))
{var inst_220675 = (state_220691[7]);var inst_220672 = (state_220691[8]);var inst_220680 = (state_220691[2]);var inst_220681 = foundation.test.services.init.call(null,foundation.test.models.campaigns,inst_220675,inst_220680);var inst_220682 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_220683 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_220684 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_220683,null));var inst_220685 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_220684,inst_220672];var inst_220686 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_220682,inst_220685);var inst_220687 = [inst_220686];var inst_220688 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_220687,null));var inst_220689 = cljs.core.into.call(null,inst_220681,inst_220688);var state_220691__$1 = state_220691;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_220691__$1,inst_220689);
} else
{if((state_val_220692 === 2))
{var inst_220663 = (state_220691[9]);var inst_220672 = (state_220691[8]);var inst_220666 = (state_220691[10]);var inst_220672__$1 = (state_220691[2]);var inst_220673 = (function (){var models = inst_220672__$1;var account_id = inst_220666;var id = inst_220663;return ((function (models,account_id,id,inst_220663,inst_220672,inst_220666,inst_220672__$1,state_val_220692){
return (function (p1__220660_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__220660_SHARP_),id);
});
;})(models,account_id,id,inst_220663,inst_220672,inst_220666,inst_220672__$1,state_val_220692))
})();var inst_220674 = cljs.core.set.call(null,inst_220672__$1);var inst_220675 = clojure.set.select.call(null,inst_220673,inst_220674);var inst_220676 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_220677 = [cljs.core.str("/stats"),cljs.core.str(inst_220676)].join('');var inst_220678 = foundation.test.services.get_stats.call(null,inst_220677,cljs.core.PersistentHashMap.EMPTY,foundation.test.models.campaign_stats);var state_220691__$1 = (function (){var statearr_220693 = state_220691;(statearr_220693[7] = inst_220675);
(statearr_220693[8] = inst_220672__$1);
return statearr_220693;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_220691__$1,3,inst_220678);
} else
{if((state_val_220692 === 1))
{var inst_220666 = (state_220691[10]);var inst_220661 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_220662 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_220661,null));var inst_220663 = cljs.core.get_in.call(null,req,inst_220662);var inst_220664 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_220665 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_220664,null));var inst_220666__$1 = cljs.core.get_in.call(null,req,inst_220665);var inst_220667 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_220668 = [inst_220666__$1];var inst_220669 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_220667,inst_220668);var inst_220670 = foundation.app.models.fetch.call(null,foundation.test.models.campaigns,new cljs.core.Keyword(null,"params","params",4313443576),inst_220669);var state_220691__$1 = (function (){var statearr_220694 = state_220691;(statearr_220694[9] = inst_220663);
(statearr_220694[10] = inst_220666__$1);
return statearr_220694;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_220691__$1,2,inst_220670);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_220698 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_220698[0] = state_machine__12118__auto__);
(statearr_220698[1] = 1);
return statearr_220698;
});
var state_machine__12118__auto____1 = (function (state_220691){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_220691);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e220699){if((e220699 instanceof Object))
{var ex__12121__auto__ = e220699;var statearr_220700_220702 = state_220691;(statearr_220700_220702[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_220691);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e220699;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__220703 = state_220691;
state_220691 = G__220703;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_220691){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_220691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_220701 = f__12188__auto__.call(null);(statearr_220701[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_220701;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/line_items"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_220737){var state_val_220738 = (state_220737[1]);if((state_val_220738 === 3))
{var inst_220718 = (state_220737[7]);var inst_220725 = (state_220737[2]);var inst_220726 = cljs.core.first.call(null,inst_220718);var inst_220727 = foundation.test.services.init.call(null,foundation.test.models.line_items,inst_220726,inst_220725);var inst_220728 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_220729 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_220730 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_220729,null));var inst_220731 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_220730,inst_220718];var inst_220732 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_220728,inst_220731);var inst_220733 = [inst_220732];var inst_220734 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_220733,null));var inst_220735 = cljs.core.into.call(null,inst_220727,inst_220734);var state_220737__$1 = state_220737;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_220737__$1,inst_220735);
} else
{if((state_val_220738 === 2))
{var inst_220718 = (state_220737[7]);var inst_220718__$1 = (state_220737[2]);var inst_220719 = cljs.core.first.call(null,inst_220718__$1);var inst_220720 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_220721 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_220719);var inst_220722 = [cljs.core.str("/stats"),cljs.core.str(inst_220720),cljs.core.str("/"),cljs.core.str(inst_220721)].join('');var inst_220723 = foundation.test.services.get_stats.call(null,inst_220722,inst_220719,foundation.test.models.line_item_stats);var state_220737__$1 = (function (){var statearr_220739 = state_220737;(statearr_220739[7] = inst_220718__$1);
return statearr_220739;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_220737__$1,3,inst_220723);
} else
{if((state_val_220738 === 1))
{var inst_220704 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_220705 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_220704,null));var inst_220706 = cljs.core.get_in.call(null,req,inst_220705);var inst_220707 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"campaign_ids","campaign_ids",1186837115)];var inst_220708 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_220707,null));var inst_220709 = cljs.core.get_in.call(null,req,inst_220708);var inst_220710 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_220711 = [inst_220706];var inst_220712 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_220710,inst_220711);var inst_220713 = [new cljs.core.Keyword(null,"campaign-ids","campaign-ids",1185347565)];var inst_220714 = [inst_220709];var inst_220715 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_220713,inst_220714);var inst_220716 = foundation.app.models.fetch.call(null,foundation.test.models.line_items,new cljs.core.Keyword(null,"params","params",4313443576),inst_220712,new cljs.core.Keyword(null,"query-params","query-params",1080249757),inst_220715);var state_220737__$1 = state_220737;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_220737__$1,2,inst_220716);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_220743 = [null,null,null,null,null,null,null,null];(statearr_220743[0] = state_machine__12118__auto__);
(statearr_220743[1] = 1);
return statearr_220743;
});
var state_machine__12118__auto____1 = (function (state_220737){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_220737);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e220744){if((e220744 instanceof Object))
{var ex__12121__auto__ = e220744;var statearr_220745_220747 = state_220737;(statearr_220745_220747[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_220737);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e220744;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__220748 = state_220737;
state_220737 = G__220748;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_220737){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_220737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_220746 = f__12188__auto__.call(null);(statearr_220746[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_220746;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/line_items/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_220785){var state_val_220786 = (state_220785[1]);if((state_val_220786 === 3))
{var inst_220766 = (state_220785[7]);var inst_220769 = (state_220785[8]);var inst_220774 = (state_220785[2]);var inst_220775 = foundation.test.services.init.call(null,foundation.test.models.line_items,inst_220769,inst_220774);var inst_220776 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_220777 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_220778 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_220777,null));var inst_220779 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_220778,inst_220766];var inst_220780 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_220776,inst_220779);var inst_220781 = [inst_220780];var inst_220782 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_220781,null));var inst_220783 = cljs.core.into.call(null,inst_220775,inst_220782);var state_220785__$1 = state_220785;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_220785__$1,inst_220783);
} else
{if((state_val_220786 === 2))
{var inst_220755 = (state_220785[9]);var inst_220758 = (state_220785[10]);var inst_220766 = (state_220785[7]);var inst_220752 = (state_220785[11]);var inst_220766__$1 = (state_220785[2]);var inst_220767 = (function (){var models = inst_220766__$1;var campaign_id = inst_220758;var account_id = inst_220755;var id = inst_220752;return ((function (models,campaign_id,account_id,id,inst_220755,inst_220758,inst_220766,inst_220752,inst_220766__$1,state_val_220786){
return (function (p1__220749_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__220749_SHARP_),id);
});
;})(models,campaign_id,account_id,id,inst_220755,inst_220758,inst_220766,inst_220752,inst_220766__$1,state_val_220786))
})();var inst_220768 = cljs.core.set.call(null,inst_220766__$1);var inst_220769 = clojure.set.select.call(null,inst_220767,inst_220768);var inst_220770 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_220771 = [cljs.core.str("/stats"),cljs.core.str(inst_220770)].join('');var inst_220772 = foundation.test.services.get_stats.call(null,inst_220771,cljs.core.PersistentHashMap.EMPTY,foundation.test.models.line_item_stats);var state_220785__$1 = (function (){var statearr_220787 = state_220785;(statearr_220787[7] = inst_220766__$1);
(statearr_220787[8] = inst_220769);
return statearr_220787;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_220785__$1,3,inst_220772);
} else
{if((state_val_220786 === 1))
{var inst_220755 = (state_220785[9]);var inst_220758 = (state_220785[10]);var inst_220750 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_220751 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_220750,null));var inst_220752 = cljs.core.get_in.call(null,req,inst_220751);var inst_220753 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_220754 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_220753,null));var inst_220755__$1 = cljs.core.get_in.call(null,req,inst_220754);var inst_220756 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"campaign_ids","campaign_ids",1186837115)];var inst_220757 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_220756,null));var inst_220758__$1 = cljs.core.get_in.call(null,req,inst_220757);var inst_220759 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477),inst_220755__$1];var inst_220760 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_220759,null));var inst_220761 = [new cljs.core.Keyword(null,"campaign-ids","campaign-ids",1185347565)];var inst_220762 = [inst_220758__$1];var inst_220763 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_220761,inst_220762);var inst_220764 = foundation.app.models.fetch.call(null,foundation.test.models.line_items,new cljs.core.Keyword(null,"params","params",4313443576),inst_220760,new cljs.core.Keyword(null,"query-params","query-params",1080249757),inst_220763);var state_220785__$1 = (function (){var statearr_220788 = state_220785;(statearr_220788[9] = inst_220755__$1);
(statearr_220788[10] = inst_220758__$1);
(statearr_220788[11] = inst_220752);
return statearr_220788;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_220785__$1,2,inst_220764);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_220792 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_220792[0] = state_machine__12118__auto__);
(statearr_220792[1] = 1);
return statearr_220792;
});
var state_machine__12118__auto____1 = (function (state_220785){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_220785);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e220793){if((e220793 instanceof Object))
{var ex__12121__auto__ = e220793;var statearr_220794_220796 = state_220785;(statearr_220794_220796[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_220785);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e220793;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__220797 = state_220785;
state_220785 = G__220797;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_220785){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_220785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_220795 = f__12188__auto__.call(null);(statearr_220795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_220795;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/promoted_accounts"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_220825){var state_val_220826 = (state_220825[1]);if((state_val_220826 === 3))
{var inst_220806 = (state_220825[7]);var inst_220813 = (state_220825[2]);var inst_220814 = cljs.core.first.call(null,inst_220806);var inst_220815 = foundation.test.services.init.call(null,foundation.test.models.promoted_accounts,inst_220814,inst_220813);var inst_220816 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_220817 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_220818 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_220817,null));var inst_220819 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_220818,inst_220806];var inst_220820 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_220816,inst_220819);var inst_220821 = [inst_220820];var inst_220822 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_220821,null));var inst_220823 = cljs.core.into.call(null,inst_220815,inst_220822);var state_220825__$1 = state_220825;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_220825__$1,inst_220823);
} else
{if((state_val_220826 === 2))
{var inst_220806 = (state_220825[7]);var inst_220806__$1 = (state_220825[2]);var inst_220807 = cljs.core.first.call(null,inst_220806__$1);var inst_220808 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_220809 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_220807);var inst_220810 = [cljs.core.str("/stats"),cljs.core.str(inst_220808),cljs.core.str("/"),cljs.core.str(inst_220809)].join('');var inst_220811 = foundation.test.services.get_stats.call(null,inst_220810,inst_220807,foundation.test.models.promoted_account_stats);var state_220825__$1 = (function (){var statearr_220827 = state_220825;(statearr_220827[7] = inst_220806__$1);
return statearr_220827;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_220825__$1,3,inst_220811);
} else
{if((state_val_220826 === 1))
{var inst_220798 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_220799 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_220798,null));var inst_220800 = cljs.core.get_in.call(null,req,inst_220799);var inst_220801 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_220802 = [inst_220800];var inst_220803 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_220801,inst_220802);var inst_220804 = foundation.app.models.fetch.call(null,foundation.test.models.promoted_accounts,new cljs.core.Keyword(null,"params","params",4313443576),inst_220803);var state_220825__$1 = state_220825;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_220825__$1,2,inst_220804);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_220831 = [null,null,null,null,null,null,null,null];(statearr_220831[0] = state_machine__12118__auto__);
(statearr_220831[1] = 1);
return statearr_220831;
});
var state_machine__12118__auto____1 = (function (state_220825){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_220825);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e220832){if((e220832 instanceof Object))
{var ex__12121__auto__ = e220832;var statearr_220833_220835 = state_220825;(statearr_220833_220835[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_220825);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e220832;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__220836 = state_220825;
state_220825 = G__220836;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_220825){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_220825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_220834 = f__12188__auto__.call(null);(statearr_220834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_220834;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/promoted_accounts/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_220868){var state_val_220869 = (state_220868[1]);if((state_val_220869 === 3))
{var inst_220852 = (state_220868[7]);var inst_220849 = (state_220868[8]);var inst_220857 = (state_220868[2]);var inst_220858 = foundation.test.services.init.call(null,foundation.test.models.promoted_accounts,inst_220852,inst_220857);var inst_220859 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_220860 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_220861 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_220860,null));var inst_220862 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_220861,inst_220849];var inst_220863 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_220859,inst_220862);var inst_220864 = [inst_220863];var inst_220865 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_220864,null));var inst_220866 = cljs.core.into.call(null,inst_220858,inst_220865);var state_220868__$1 = state_220868;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_220868__$1,inst_220866);
} else
{if((state_val_220869 === 2))
{var inst_220840 = (state_220868[9]);var inst_220843 = (state_220868[10]);var inst_220849 = (state_220868[8]);var inst_220849__$1 = (state_220868[2]);var inst_220850 = (function (){var models = inst_220849__$1;var account_id = inst_220843;var id = inst_220840;return ((function (models,account_id,id,inst_220840,inst_220843,inst_220849,inst_220849__$1,state_val_220869){
return (function (p1__220837_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__220837_SHARP_),id);
});
;})(models,account_id,id,inst_220840,inst_220843,inst_220849,inst_220849__$1,state_val_220869))
})();var inst_220851 = cljs.core.set.call(null,inst_220849__$1);var inst_220852 = clojure.set.select.call(null,inst_220850,inst_220851);var inst_220853 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_220854 = [cljs.core.str("/stats"),cljs.core.str(inst_220853)].join('');var inst_220855 = foundation.test.services.get_stats.call(null,inst_220854,cljs.core.PersistentHashMap.EMPTY,foundation.test.models.promoted_account_stats);var state_220868__$1 = (function (){var statearr_220870 = state_220868;(statearr_220870[7] = inst_220852);
(statearr_220870[8] = inst_220849__$1);
return statearr_220870;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_220868__$1,3,inst_220855);
} else
{if((state_val_220869 === 1))
{var inst_220843 = (state_220868[10]);var inst_220838 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_220839 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_220838,null));var inst_220840 = cljs.core.get_in.call(null,req,inst_220839);var inst_220841 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_220842 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_220841,null));var inst_220843__$1 = cljs.core.get_in.call(null,req,inst_220842);var inst_220844 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_220845 = [inst_220843__$1];var inst_220846 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_220844,inst_220845);var inst_220847 = foundation.app.models.fetch.call(null,foundation.test.models.promoted_accounts,new cljs.core.Keyword(null,"params","params",4313443576),inst_220846);var state_220868__$1 = (function (){var statearr_220871 = state_220868;(statearr_220871[9] = inst_220840);
(statearr_220871[10] = inst_220843__$1);
return statearr_220871;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_220868__$1,2,inst_220847);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_220875 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_220875[0] = state_machine__12118__auto__);
(statearr_220875[1] = 1);
return statearr_220875;
});
var state_machine__12118__auto____1 = (function (state_220868){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_220868);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e220876){if((e220876 instanceof Object))
{var ex__12121__auto__ = e220876;var statearr_220877_220879 = state_220868;(statearr_220877_220879[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_220868);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e220876;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__220880 = state_220868;
state_220868 = G__220880;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_220868){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_220868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_220878 = f__12188__auto__.call(null);(statearr_220878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_220878;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/promoted_tweets"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_220908){var state_val_220909 = (state_220908[1]);if((state_val_220909 === 3))
{var inst_220889 = (state_220908[7]);var inst_220896 = (state_220908[2]);var inst_220897 = cljs.core.first.call(null,inst_220889);var inst_220898 = foundation.test.services.init.call(null,foundation.test.models.promoted_tweets,inst_220897,inst_220896);var inst_220899 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_220900 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_220901 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_220900,null));var inst_220902 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_220901,inst_220889];var inst_220903 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_220899,inst_220902);var inst_220904 = [inst_220903];var inst_220905 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_220904,null));var inst_220906 = cljs.core.into.call(null,inst_220898,inst_220905);var state_220908__$1 = state_220908;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_220908__$1,inst_220906);
} else
{if((state_val_220909 === 2))
{var inst_220889 = (state_220908[7]);var inst_220889__$1 = (state_220908[2]);var inst_220890 = cljs.core.first.call(null,inst_220889__$1);var inst_220891 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_220892 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_220890);var inst_220893 = [cljs.core.str("/stats"),cljs.core.str(inst_220891),cljs.core.str("/"),cljs.core.str(inst_220892)].join('');var inst_220894 = foundation.test.services.get_stats.call(null,inst_220893,inst_220890,foundation.test.models.promoted_tweet_stats);var state_220908__$1 = (function (){var statearr_220910 = state_220908;(statearr_220910[7] = inst_220889__$1);
return statearr_220910;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_220908__$1,3,inst_220894);
} else
{if((state_val_220909 === 1))
{var inst_220881 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_220882 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_220881,null));var inst_220883 = cljs.core.get_in.call(null,req,inst_220882);var inst_220884 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_220885 = [inst_220883];var inst_220886 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_220884,inst_220885);var inst_220887 = foundation.app.models.fetch.call(null,foundation.test.models.promoted_tweets,new cljs.core.Keyword(null,"params","params",4313443576),inst_220886);var state_220908__$1 = state_220908;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_220908__$1,2,inst_220887);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_220914 = [null,null,null,null,null,null,null,null];(statearr_220914[0] = state_machine__12118__auto__);
(statearr_220914[1] = 1);
return statearr_220914;
});
var state_machine__12118__auto____1 = (function (state_220908){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_220908);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e220915){if((e220915 instanceof Object))
{var ex__12121__auto__ = e220915;var statearr_220916_220918 = state_220908;(statearr_220916_220918[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_220908);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e220915;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__220919 = state_220908;
state_220908 = G__220919;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_220908){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_220908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_220917 = f__12188__auto__.call(null);(statearr_220917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_220917;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/promoted_tweets/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_220951){var state_val_220952 = (state_220951[1]);if((state_val_220952 === 3))
{var inst_220932 = (state_220951[7]);var inst_220935 = (state_220951[8]);var inst_220940 = (state_220951[2]);var inst_220941 = foundation.test.services.init.call(null,foundation.test.models.promoted_tweets,inst_220935,inst_220940);var inst_220942 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_220943 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_220944 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_220943,null));var inst_220945 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_220944,inst_220932];var inst_220946 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_220942,inst_220945);var inst_220947 = [inst_220946];var inst_220948 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_220947,null));var inst_220949 = cljs.core.into.call(null,inst_220941,inst_220948);var state_220951__$1 = state_220951;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_220951__$1,inst_220949);
} else
{if((state_val_220952 === 2))
{var inst_220923 = (state_220951[9]);var inst_220926 = (state_220951[10]);var inst_220932 = (state_220951[7]);var inst_220932__$1 = (state_220951[2]);var inst_220933 = (function (){var models = inst_220932__$1;var account_id = inst_220926;var id = inst_220923;return ((function (models,account_id,id,inst_220923,inst_220926,inst_220932,inst_220932__$1,state_val_220952){
return (function (p1__220920_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__220920_SHARP_),id);
});
;})(models,account_id,id,inst_220923,inst_220926,inst_220932,inst_220932__$1,state_val_220952))
})();var inst_220934 = cljs.core.set.call(null,inst_220932__$1);var inst_220935 = clojure.set.select.call(null,inst_220933,inst_220934);var inst_220936 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_220937 = [cljs.core.str("/stats"),cljs.core.str(inst_220936)].join('');var inst_220938 = foundation.test.services.get_stats.call(null,inst_220937,cljs.core.PersistentHashMap.EMPTY,foundation.test.models.promoted_tweet_stats);var state_220951__$1 = (function (){var statearr_220953 = state_220951;(statearr_220953[7] = inst_220932__$1);
(statearr_220953[8] = inst_220935);
return statearr_220953;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_220951__$1,3,inst_220938);
} else
{if((state_val_220952 === 1))
{var inst_220926 = (state_220951[10]);var inst_220921 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_220922 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_220921,null));var inst_220923 = cljs.core.get_in.call(null,req,inst_220922);var inst_220924 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_220925 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_220924,null));var inst_220926__$1 = cljs.core.get_in.call(null,req,inst_220925);var inst_220927 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_220928 = [inst_220926__$1];var inst_220929 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_220927,inst_220928);var inst_220930 = foundation.app.models.fetch.call(null,foundation.test.models.promoted_tweets,new cljs.core.Keyword(null,"params","params",4313443576),inst_220929);var state_220951__$1 = (function (){var statearr_220954 = state_220951;(statearr_220954[9] = inst_220923);
(statearr_220954[10] = inst_220926__$1);
return statearr_220954;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_220951__$1,2,inst_220930);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_220958 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_220958[0] = state_machine__12118__auto__);
(statearr_220958[1] = 1);
return statearr_220958;
});
var state_machine__12118__auto____1 = (function (state_220951){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_220951);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e220959){if((e220959 instanceof Object))
{var ex__12121__auto__ = e220959;var statearr_220960_220962 = state_220951;(statearr_220960_220962[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_220951);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e220959;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__220963 = state_220951;
state_220951 = G__220963;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_220951){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_220951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_220961 = f__12188__auto__.call(null);(statearr_220961[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_220961;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));

//# sourceMappingURL=services.js.map