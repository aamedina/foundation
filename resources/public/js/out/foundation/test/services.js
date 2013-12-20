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
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_269621){var state_val_269622 = (state_269621[1]);if((state_val_269622 === 3))
{var inst_269602 = (state_269621[7]);var inst_269609 = (state_269621[2]);var inst_269610 = cljs.core.first.call(null,inst_269602);var inst_269611 = foundation.test.services.init.call(null,foundation.test.models.accounts,inst_269610,inst_269609);var inst_269612 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_269613 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_269614 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_269613,null));var inst_269615 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_269614,inst_269602];var inst_269616 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_269612,inst_269615);var inst_269617 = [inst_269616];var inst_269618 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_269617,null));var inst_269619 = cljs.core.into.call(null,inst_269611,inst_269618);var state_269621__$1 = state_269621;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_269621__$1,inst_269619);
} else
{if((state_val_269622 === 2))
{var inst_269602 = (state_269621[7]);var inst_269602__$1 = (state_269621[2]);var inst_269603 = cljs.core.first.call(null,inst_269602__$1);var inst_269604 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_269605 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_269603);var inst_269606 = [cljs.core.str("/stats"),cljs.core.str(inst_269604),cljs.core.str("/"),cljs.core.str(inst_269605)].join('');var inst_269607 = foundation.test.services.get_stats.call(null,inst_269606,inst_269603,foundation.test.models.account_stats);var state_269621__$1 = (function (){var statearr_269623 = state_269621;(statearr_269623[7] = inst_269602__$1);
return statearr_269623;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_269621__$1,3,inst_269607);
} else
{if((state_val_269622 === 1))
{var inst_269600 = foundation.app.models.fetch.call(null,foundation.test.models.accounts);var state_269621__$1 = state_269621;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_269621__$1,2,inst_269600);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_269627 = [null,null,null,null,null,null,null,null];(statearr_269627[0] = state_machine__12118__auto__);
(statearr_269627[1] = 1);
return statearr_269627;
});
var state_machine__12118__auto____1 = (function (state_269621){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_269621);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e269628){if((e269628 instanceof Object))
{var ex__12121__auto__ = e269628;var statearr_269629_269631 = state_269621;(statearr_269629_269631[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_269621);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e269628;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__269632 = state_269621;
state_269621 = G__269632;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_269621){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_269621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_269630 = f__12188__auto__.call(null);(statearr_269630[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_269630;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_269658){var state_val_269659 = (state_269658[1]);if((state_val_269659 === 3))
{var inst_269639 = (state_269658[7]);var inst_269642 = (state_269658[8]);var inst_269647 = (state_269658[2]);var inst_269648 = foundation.test.services.init.call(null,foundation.test.models.accounts,inst_269642,inst_269647);var inst_269649 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_269650 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_269651 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_269650,null));var inst_269652 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_269651,inst_269639];var inst_269653 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_269649,inst_269652);var inst_269654 = [inst_269653];var inst_269655 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_269654,null));var inst_269656 = cljs.core.into.call(null,inst_269648,inst_269655);var state_269658__$1 = state_269658;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_269658__$1,inst_269656);
} else
{if((state_val_269659 === 2))
{var inst_269639 = (state_269658[7]);var inst_269636 = (state_269658[9]);var inst_269639__$1 = (state_269658[2]);var inst_269640 = (function (){var models = inst_269639__$1;var id = inst_269636;return ((function (models,id,inst_269639,inst_269636,inst_269639__$1,state_val_269659){
return (function (p1__269633_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__269633_SHARP_),id);
});
;})(models,id,inst_269639,inst_269636,inst_269639__$1,state_val_269659))
})();var inst_269641 = cljs.core.set.call(null,inst_269639__$1);var inst_269642 = clojure.set.select.call(null,inst_269640,inst_269641);var inst_269643 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_269644 = [cljs.core.str("/stats"),cljs.core.str(inst_269643)].join('');var inst_269645 = foundation.test.services.get_stats.call(null,inst_269644,cljs.core.PersistentHashMap.EMPTY,foundation.test.models.account_stats);var state_269658__$1 = (function (){var statearr_269660 = state_269658;(statearr_269660[7] = inst_269639__$1);
(statearr_269660[8] = inst_269642);
return statearr_269660;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_269658__$1,3,inst_269645);
} else
{if((state_val_269659 === 1))
{var inst_269634 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_269635 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_269634,null));var inst_269636 = cljs.core.get_in.call(null,req,inst_269635);var inst_269637 = foundation.app.models.fetch.call(null,foundation.test.models.accounts);var state_269658__$1 = (function (){var statearr_269661 = state_269658;(statearr_269661[9] = inst_269636);
return statearr_269661;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_269658__$1,2,inst_269637);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_269665 = [null,null,null,null,null,null,null,null,null,null];(statearr_269665[0] = state_machine__12118__auto__);
(statearr_269665[1] = 1);
return statearr_269665;
});
var state_machine__12118__auto____1 = (function (state_269658){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_269658);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e269666){if((e269666 instanceof Object))
{var ex__12121__auto__ = e269666;var statearr_269667_269669 = state_269658;(statearr_269667_269669[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_269658);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e269666;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__269670 = state_269658;
state_269658 = G__269670;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_269658){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_269658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_269668 = f__12188__auto__.call(null);(statearr_269668[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_269668;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/campaigns"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_269698){var state_val_269699 = (state_269698[1]);if((state_val_269699 === 3))
{var inst_269679 = (state_269698[7]);var inst_269686 = (state_269698[2]);var inst_269687 = cljs.core.first.call(null,inst_269679);var inst_269688 = foundation.test.services.init.call(null,foundation.test.models.campaigns,inst_269687,inst_269686);var inst_269689 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_269690 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_269691 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_269690,null));var inst_269692 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_269691,inst_269679];var inst_269693 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_269689,inst_269692);var inst_269694 = [inst_269693];var inst_269695 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_269694,null));var inst_269696 = cljs.core.into.call(null,inst_269688,inst_269695);var state_269698__$1 = state_269698;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_269698__$1,inst_269696);
} else
{if((state_val_269699 === 2))
{var inst_269679 = (state_269698[7]);var inst_269679__$1 = (state_269698[2]);var inst_269680 = cljs.core.first.call(null,inst_269679__$1);var inst_269681 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_269682 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_269680);var inst_269683 = [cljs.core.str("/stats"),cljs.core.str(inst_269681),cljs.core.str("/"),cljs.core.str(inst_269682)].join('');var inst_269684 = foundation.test.services.get_stats.call(null,inst_269683,inst_269680,foundation.test.models.campaign_stats);var state_269698__$1 = (function (){var statearr_269700 = state_269698;(statearr_269700[7] = inst_269679__$1);
return statearr_269700;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_269698__$1,3,inst_269684);
} else
{if((state_val_269699 === 1))
{var inst_269671 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_269672 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_269671,null));var inst_269673 = cljs.core.get_in.call(null,req,inst_269672);var inst_269674 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_269675 = [inst_269673];var inst_269676 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_269674,inst_269675);var inst_269677 = foundation.app.models.fetch.call(null,foundation.test.models.campaigns,new cljs.core.Keyword(null,"params","params",4313443576),inst_269676);var state_269698__$1 = state_269698;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_269698__$1,2,inst_269677);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_269704 = [null,null,null,null,null,null,null,null];(statearr_269704[0] = state_machine__12118__auto__);
(statearr_269704[1] = 1);
return statearr_269704;
});
var state_machine__12118__auto____1 = (function (state_269698){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_269698);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e269705){if((e269705 instanceof Object))
{var ex__12121__auto__ = e269705;var statearr_269706_269708 = state_269698;(statearr_269706_269708[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_269698);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e269705;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__269709 = state_269698;
state_269698 = G__269709;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_269698){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_269698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_269707 = f__12188__auto__.call(null);(statearr_269707[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_269707;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/campaigns/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_269741){var state_val_269742 = (state_269741[1]);if((state_val_269742 === 3))
{var inst_269725 = (state_269741[7]);var inst_269722 = (state_269741[8]);var inst_269730 = (state_269741[2]);var inst_269731 = foundation.test.services.init.call(null,foundation.test.models.campaigns,inst_269725,inst_269730);var inst_269732 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_269733 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_269734 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_269733,null));var inst_269735 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_269734,inst_269722];var inst_269736 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_269732,inst_269735);var inst_269737 = [inst_269736];var inst_269738 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_269737,null));var inst_269739 = cljs.core.into.call(null,inst_269731,inst_269738);var state_269741__$1 = state_269741;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_269741__$1,inst_269739);
} else
{if((state_val_269742 === 2))
{var inst_269716 = (state_269741[9]);var inst_269722 = (state_269741[8]);var inst_269713 = (state_269741[10]);var inst_269722__$1 = (state_269741[2]);var inst_269723 = (function (){var models = inst_269722__$1;var account_id = inst_269716;var id = inst_269713;return ((function (models,account_id,id,inst_269716,inst_269722,inst_269713,inst_269722__$1,state_val_269742){
return (function (p1__269710_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__269710_SHARP_),id);
});
;})(models,account_id,id,inst_269716,inst_269722,inst_269713,inst_269722__$1,state_val_269742))
})();var inst_269724 = cljs.core.set.call(null,inst_269722__$1);var inst_269725 = clojure.set.select.call(null,inst_269723,inst_269724);var inst_269726 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_269727 = [cljs.core.str("/stats"),cljs.core.str(inst_269726)].join('');var inst_269728 = foundation.test.services.get_stats.call(null,inst_269727,cljs.core.PersistentHashMap.EMPTY,foundation.test.models.campaign_stats);var state_269741__$1 = (function (){var statearr_269743 = state_269741;(statearr_269743[7] = inst_269725);
(statearr_269743[8] = inst_269722__$1);
return statearr_269743;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_269741__$1,3,inst_269728);
} else
{if((state_val_269742 === 1))
{var inst_269716 = (state_269741[9]);var inst_269711 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_269712 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_269711,null));var inst_269713 = cljs.core.get_in.call(null,req,inst_269712);var inst_269714 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_269715 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_269714,null));var inst_269716__$1 = cljs.core.get_in.call(null,req,inst_269715);var inst_269717 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_269718 = [inst_269716__$1];var inst_269719 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_269717,inst_269718);var inst_269720 = foundation.app.models.fetch.call(null,foundation.test.models.campaigns,new cljs.core.Keyword(null,"params","params",4313443576),inst_269719);var state_269741__$1 = (function (){var statearr_269744 = state_269741;(statearr_269744[9] = inst_269716__$1);
(statearr_269744[10] = inst_269713);
return statearr_269744;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_269741__$1,2,inst_269720);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_269748 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_269748[0] = state_machine__12118__auto__);
(statearr_269748[1] = 1);
return statearr_269748;
});
var state_machine__12118__auto____1 = (function (state_269741){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_269741);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e269749){if((e269749 instanceof Object))
{var ex__12121__auto__ = e269749;var statearr_269750_269752 = state_269741;(statearr_269750_269752[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_269741);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e269749;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__269753 = state_269741;
state_269741 = G__269753;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_269741){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_269741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_269751 = f__12188__auto__.call(null);(statearr_269751[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_269751;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/line_items"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_269787){var state_val_269788 = (state_269787[1]);if((state_val_269788 === 3))
{var inst_269768 = (state_269787[7]);var inst_269775 = (state_269787[2]);var inst_269776 = cljs.core.first.call(null,inst_269768);var inst_269777 = foundation.test.services.init.call(null,foundation.test.models.line_items,inst_269776,inst_269775);var inst_269778 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_269779 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_269780 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_269779,null));var inst_269781 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_269780,inst_269768];var inst_269782 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_269778,inst_269781);var inst_269783 = [inst_269782];var inst_269784 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_269783,null));var inst_269785 = cljs.core.into.call(null,inst_269777,inst_269784);var state_269787__$1 = state_269787;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_269787__$1,inst_269785);
} else
{if((state_val_269788 === 2))
{var inst_269768 = (state_269787[7]);var inst_269768__$1 = (state_269787[2]);var inst_269769 = cljs.core.first.call(null,inst_269768__$1);var inst_269770 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_269771 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_269769);var inst_269772 = [cljs.core.str("/stats"),cljs.core.str(inst_269770),cljs.core.str("/"),cljs.core.str(inst_269771)].join('');var inst_269773 = foundation.test.services.get_stats.call(null,inst_269772,inst_269769,foundation.test.models.line_item_stats);var state_269787__$1 = (function (){var statearr_269789 = state_269787;(statearr_269789[7] = inst_269768__$1);
return statearr_269789;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_269787__$1,3,inst_269773);
} else
{if((state_val_269788 === 1))
{var inst_269754 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_269755 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_269754,null));var inst_269756 = cljs.core.get_in.call(null,req,inst_269755);var inst_269757 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"campaign_ids","campaign_ids",1186837115)];var inst_269758 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_269757,null));var inst_269759 = cljs.core.get_in.call(null,req,inst_269758);var inst_269760 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_269761 = [inst_269756];var inst_269762 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_269760,inst_269761);var inst_269763 = [new cljs.core.Keyword(null,"campaign-ids","campaign-ids",1185347565)];var inst_269764 = [inst_269759];var inst_269765 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_269763,inst_269764);var inst_269766 = foundation.app.models.fetch.call(null,foundation.test.models.line_items,new cljs.core.Keyword(null,"params","params",4313443576),inst_269762,new cljs.core.Keyword(null,"query-params","query-params",1080249757),inst_269765);var state_269787__$1 = state_269787;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_269787__$1,2,inst_269766);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_269793 = [null,null,null,null,null,null,null,null];(statearr_269793[0] = state_machine__12118__auto__);
(statearr_269793[1] = 1);
return statearr_269793;
});
var state_machine__12118__auto____1 = (function (state_269787){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_269787);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e269794){if((e269794 instanceof Object))
{var ex__12121__auto__ = e269794;var statearr_269795_269797 = state_269787;(statearr_269795_269797[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_269787);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e269794;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__269798 = state_269787;
state_269787 = G__269798;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_269787){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_269787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_269796 = f__12188__auto__.call(null);(statearr_269796[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_269796;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/line_items/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_269835){var state_val_269836 = (state_269835[1]);if((state_val_269836 === 3))
{var inst_269816 = (state_269835[7]);var inst_269819 = (state_269835[8]);var inst_269824 = (state_269835[2]);var inst_269825 = foundation.test.services.init.call(null,foundation.test.models.line_items,inst_269819,inst_269824);var inst_269826 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_269827 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_269828 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_269827,null));var inst_269829 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_269828,inst_269816];var inst_269830 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_269826,inst_269829);var inst_269831 = [inst_269830];var inst_269832 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_269831,null));var inst_269833 = cljs.core.into.call(null,inst_269825,inst_269832);var state_269835__$1 = state_269835;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_269835__$1,inst_269833);
} else
{if((state_val_269836 === 2))
{var inst_269805 = (state_269835[9]);var inst_269808 = (state_269835[10]);var inst_269816 = (state_269835[7]);var inst_269802 = (state_269835[11]);var inst_269816__$1 = (state_269835[2]);var inst_269817 = (function (){var models = inst_269816__$1;var campaign_id = inst_269808;var account_id = inst_269805;var id = inst_269802;return ((function (models,campaign_id,account_id,id,inst_269805,inst_269808,inst_269816,inst_269802,inst_269816__$1,state_val_269836){
return (function (p1__269799_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__269799_SHARP_),id);
});
;})(models,campaign_id,account_id,id,inst_269805,inst_269808,inst_269816,inst_269802,inst_269816__$1,state_val_269836))
})();var inst_269818 = cljs.core.set.call(null,inst_269816__$1);var inst_269819 = clojure.set.select.call(null,inst_269817,inst_269818);var inst_269820 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_269821 = [cljs.core.str("/stats"),cljs.core.str(inst_269820)].join('');var inst_269822 = foundation.test.services.get_stats.call(null,inst_269821,cljs.core.PersistentHashMap.EMPTY,foundation.test.models.line_item_stats);var state_269835__$1 = (function (){var statearr_269837 = state_269835;(statearr_269837[7] = inst_269816__$1);
(statearr_269837[8] = inst_269819);
return statearr_269837;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_269835__$1,3,inst_269822);
} else
{if((state_val_269836 === 1))
{var inst_269805 = (state_269835[9]);var inst_269808 = (state_269835[10]);var inst_269800 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_269801 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_269800,null));var inst_269802 = cljs.core.get_in.call(null,req,inst_269801);var inst_269803 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_269804 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_269803,null));var inst_269805__$1 = cljs.core.get_in.call(null,req,inst_269804);var inst_269806 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"campaign_ids","campaign_ids",1186837115)];var inst_269807 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_269806,null));var inst_269808__$1 = cljs.core.get_in.call(null,req,inst_269807);var inst_269809 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477),inst_269805__$1];var inst_269810 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_269809,null));var inst_269811 = [new cljs.core.Keyword(null,"campaign-ids","campaign-ids",1185347565)];var inst_269812 = [inst_269808__$1];var inst_269813 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_269811,inst_269812);var inst_269814 = foundation.app.models.fetch.call(null,foundation.test.models.line_items,new cljs.core.Keyword(null,"params","params",4313443576),inst_269810,new cljs.core.Keyword(null,"query-params","query-params",1080249757),inst_269813);var state_269835__$1 = (function (){var statearr_269838 = state_269835;(statearr_269838[9] = inst_269805__$1);
(statearr_269838[10] = inst_269808__$1);
(statearr_269838[11] = inst_269802);
return statearr_269838;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_269835__$1,2,inst_269814);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_269842 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_269842[0] = state_machine__12118__auto__);
(statearr_269842[1] = 1);
return statearr_269842;
});
var state_machine__12118__auto____1 = (function (state_269835){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_269835);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e269843){if((e269843 instanceof Object))
{var ex__12121__auto__ = e269843;var statearr_269844_269846 = state_269835;(statearr_269844_269846[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_269835);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e269843;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__269847 = state_269835;
state_269835 = G__269847;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_269835){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_269835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_269845 = f__12188__auto__.call(null);(statearr_269845[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_269845;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/promoted_accounts"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_269878){var state_val_269879 = (state_269878[1]);if((state_val_269879 === 3))
{var inst_269859 = (state_269878[7]);var inst_269866 = (state_269878[2]);var inst_269867 = cljs.core.first.call(null,inst_269859);var inst_269868 = foundation.test.services.init.call(null,foundation.test.models.promoted_accounts,inst_269867,inst_269866);var inst_269869 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_269870 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_269871 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_269870,null));var inst_269872 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_269871,inst_269859];var inst_269873 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_269869,inst_269872);var inst_269874 = [inst_269873];var inst_269875 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_269874,null));var inst_269876 = cljs.core.into.call(null,inst_269868,inst_269875);var state_269878__$1 = state_269878;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_269878__$1,inst_269876);
} else
{if((state_val_269879 === 2))
{var inst_269859 = (state_269878[7]);var inst_269859__$1 = (state_269878[2]);var inst_269860 = cljs.core.first.call(null,inst_269859__$1);var inst_269861 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_269862 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_269860);var inst_269863 = [cljs.core.str("/stats"),cljs.core.str(inst_269861),cljs.core.str("/"),cljs.core.str(inst_269862)].join('');var inst_269864 = foundation.test.services.get_stats.call(null,inst_269863,inst_269860,foundation.test.models.promoted_account_stats);var state_269878__$1 = (function (){var statearr_269880 = state_269878;(statearr_269880[7] = inst_269859__$1);
return statearr_269880;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_269878__$1,3,inst_269864);
} else
{if((state_val_269879 === 1))
{var inst_269848 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_269849 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_269848,null));var inst_269850 = cljs.core.get_in.call(null,req,inst_269849);var inst_269851 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"line_item_id","line_item_id",4537110510)];var inst_269852 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_269851,null));var inst_269853 = cljs.core.get_in.call(null,req,inst_269852);var inst_269854 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477),new cljs.core.Keyword(null,"line_item_id","line_item_id",4537110510)];var inst_269855 = [inst_269850,inst_269853];var inst_269856 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_269854,inst_269855);var inst_269857 = foundation.app.models.fetch.call(null,foundation.test.models.promoted_accounts,new cljs.core.Keyword(null,"params","params",4313443576),inst_269856);var state_269878__$1 = state_269878;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_269878__$1,2,inst_269857);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_269884 = [null,null,null,null,null,null,null,null];(statearr_269884[0] = state_machine__12118__auto__);
(statearr_269884[1] = 1);
return statearr_269884;
});
var state_machine__12118__auto____1 = (function (state_269878){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_269878);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e269885){if((e269885 instanceof Object))
{var ex__12121__auto__ = e269885;var statearr_269886_269888 = state_269878;(statearr_269886_269888[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_269878);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e269885;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__269889 = state_269878;
state_269878 = G__269889;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_269878){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_269878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_269887 = f__12188__auto__.call(null);(statearr_269887[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_269887;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/promoted_accounts/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_269924){var state_val_269925 = (state_269924[1]);if((state_val_269925 === 3))
{var inst_269905 = (state_269924[7]);var inst_269908 = (state_269924[8]);var inst_269913 = (state_269924[2]);var inst_269914 = foundation.test.services.init.call(null,foundation.test.models.promoted_accounts,inst_269908,inst_269913);var inst_269915 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_269916 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_269917 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_269916,null));var inst_269918 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_269917,inst_269905];var inst_269919 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_269915,inst_269918);var inst_269920 = [inst_269919];var inst_269921 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_269920,null));var inst_269922 = cljs.core.into.call(null,inst_269914,inst_269921);var state_269924__$1 = state_269924;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_269924__$1,inst_269922);
} else
{if((state_val_269925 === 2))
{var inst_269899 = (state_269924[9]);var inst_269896 = (state_269924[10]);var inst_269893 = (state_269924[11]);var inst_269905 = (state_269924[7]);var inst_269905__$1 = (state_269924[2]);var inst_269906 = (function (){var models = inst_269905__$1;var line_item_id = inst_269899;var account_id = inst_269896;var id = inst_269893;return ((function (models,line_item_id,account_id,id,inst_269899,inst_269896,inst_269893,inst_269905,inst_269905__$1,state_val_269925){
return (function (p1__269890_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__269890_SHARP_),id);
});
;})(models,line_item_id,account_id,id,inst_269899,inst_269896,inst_269893,inst_269905,inst_269905__$1,state_val_269925))
})();var inst_269907 = cljs.core.set.call(null,inst_269905__$1);var inst_269908 = clojure.set.select.call(null,inst_269906,inst_269907);var inst_269909 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_269910 = [cljs.core.str("/stats"),cljs.core.str(inst_269909)].join('');var inst_269911 = foundation.test.services.get_stats.call(null,inst_269910,cljs.core.PersistentHashMap.EMPTY,foundation.test.models.promoted_account_stats);var state_269924__$1 = (function (){var statearr_269926 = state_269924;(statearr_269926[7] = inst_269905__$1);
(statearr_269926[8] = inst_269908);
return statearr_269926;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_269924__$1,3,inst_269911);
} else
{if((state_val_269925 === 1))
{var inst_269899 = (state_269924[9]);var inst_269896 = (state_269924[10]);var inst_269891 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_269892 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_269891,null));var inst_269893 = cljs.core.get_in.call(null,req,inst_269892);var inst_269894 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_269895 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_269894,null));var inst_269896__$1 = cljs.core.get_in.call(null,req,inst_269895);var inst_269897 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"line_item_id","line_item_id",4537110510)];var inst_269898 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_269897,null));var inst_269899__$1 = cljs.core.get_in.call(null,req,inst_269898);var inst_269900 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477),new cljs.core.Keyword(null,"line_item_id","line_item_id",4537110510)];var inst_269901 = [inst_269896__$1,inst_269899__$1];var inst_269902 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_269900,inst_269901);var inst_269903 = foundation.app.models.fetch.call(null,foundation.test.models.promoted_accounts,new cljs.core.Keyword(null,"params","params",4313443576),inst_269902);var state_269924__$1 = (function (){var statearr_269927 = state_269924;(statearr_269927[9] = inst_269899__$1);
(statearr_269927[10] = inst_269896__$1);
(statearr_269927[11] = inst_269893);
return statearr_269927;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_269924__$1,2,inst_269903);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_269931 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_269931[0] = state_machine__12118__auto__);
(statearr_269931[1] = 1);
return statearr_269931;
});
var state_machine__12118__auto____1 = (function (state_269924){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_269924);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e269932){if((e269932 instanceof Object))
{var ex__12121__auto__ = e269932;var statearr_269933_269935 = state_269924;(statearr_269933_269935[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_269924);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e269932;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__269936 = state_269924;
state_269924 = G__269936;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_269924){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_269924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_269934 = f__12188__auto__.call(null);(statearr_269934[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_269934;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/promoted_tweets"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_269967){var state_val_269968 = (state_269967[1]);if((state_val_269968 === 3))
{var inst_269948 = (state_269967[7]);var inst_269955 = (state_269967[2]);var inst_269956 = cljs.core.first.call(null,inst_269948);var inst_269957 = foundation.test.services.init.call(null,foundation.test.models.promoted_tweets,inst_269956,inst_269955);var inst_269958 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_269959 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_269960 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_269959,null));var inst_269961 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_269960,inst_269948];var inst_269962 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_269958,inst_269961);var inst_269963 = [inst_269962];var inst_269964 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_269963,null));var inst_269965 = cljs.core.into.call(null,inst_269957,inst_269964);var state_269967__$1 = state_269967;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_269967__$1,inst_269965);
} else
{if((state_val_269968 === 2))
{var inst_269948 = (state_269967[7]);var inst_269948__$1 = (state_269967[2]);var inst_269949 = cljs.core.first.call(null,inst_269948__$1);var inst_269950 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_269951 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_269949);var inst_269952 = [cljs.core.str("/stats"),cljs.core.str(inst_269950),cljs.core.str("/"),cljs.core.str(inst_269951)].join('');var inst_269953 = foundation.test.services.get_stats.call(null,inst_269952,inst_269949,foundation.test.models.promoted_tweet_stats);var state_269967__$1 = (function (){var statearr_269969 = state_269967;(statearr_269969[7] = inst_269948__$1);
return statearr_269969;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_269967__$1,3,inst_269953);
} else
{if((state_val_269968 === 1))
{var inst_269937 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_269938 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_269937,null));var inst_269939 = cljs.core.get_in.call(null,req,inst_269938);var inst_269940 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"line_item_id","line_item_id",4537110510)];var inst_269941 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_269940,null));var inst_269942 = cljs.core.get_in.call(null,req,inst_269941);var inst_269943 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477),new cljs.core.Keyword(null,"line_item_id","line_item_id",4537110510)];var inst_269944 = [inst_269939,inst_269942];var inst_269945 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_269943,inst_269944);var inst_269946 = foundation.app.models.fetch.call(null,foundation.test.models.promoted_tweets,new cljs.core.Keyword(null,"params","params",4313443576),inst_269945);var state_269967__$1 = state_269967;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_269967__$1,2,inst_269946);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_269973 = [null,null,null,null,null,null,null,null];(statearr_269973[0] = state_machine__12118__auto__);
(statearr_269973[1] = 1);
return statearr_269973;
});
var state_machine__12118__auto____1 = (function (state_269967){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_269967);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e269974){if((e269974 instanceof Object))
{var ex__12121__auto__ = e269974;var statearr_269975_269977 = state_269967;(statearr_269975_269977[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_269967);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e269974;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__269978 = state_269967;
state_269967 = G__269978;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_269967){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_269967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_269976 = f__12188__auto__.call(null);(statearr_269976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_269976;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/promoted_tweets/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_270013){var state_val_270014 = (state_270013[1]);if((state_val_270014 === 3))
{var inst_269997 = (state_270013[7]);var inst_269994 = (state_270013[8]);var inst_270002 = (state_270013[2]);var inst_270003 = foundation.test.services.init.call(null,foundation.test.models.promoted_tweets,inst_269997,inst_270002);var inst_270004 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_270005 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_270006 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_270005,null));var inst_270007 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_270006,inst_269994];var inst_270008 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_270004,inst_270007);var inst_270009 = [inst_270008];var inst_270010 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_270009,null));var inst_270011 = cljs.core.into.call(null,inst_270003,inst_270010);var state_270013__$1 = state_270013;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_270013__$1,inst_270011);
} else
{if((state_val_270014 === 2))
{var inst_269982 = (state_270013[9]);var inst_269988 = (state_270013[10]);var inst_269994 = (state_270013[8]);var inst_269985 = (state_270013[11]);var inst_269994__$1 = (state_270013[2]);var inst_269995 = (function (){var models = inst_269994__$1;var line_item_id = inst_269988;var account_id = inst_269985;var id = inst_269982;return ((function (models,line_item_id,account_id,id,inst_269982,inst_269988,inst_269994,inst_269985,inst_269994__$1,state_val_270014){
return (function (p1__269979_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__269979_SHARP_),id);
});
;})(models,line_item_id,account_id,id,inst_269982,inst_269988,inst_269994,inst_269985,inst_269994__$1,state_val_270014))
})();var inst_269996 = cljs.core.set.call(null,inst_269994__$1);var inst_269997 = clojure.set.select.call(null,inst_269995,inst_269996);var inst_269998 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_269999 = [cljs.core.str("/stats"),cljs.core.str(inst_269998)].join('');var inst_270000 = foundation.test.services.get_stats.call(null,inst_269999,cljs.core.PersistentHashMap.EMPTY,foundation.test.models.promoted_tweet_stats);var state_270013__$1 = (function (){var statearr_270015 = state_270013;(statearr_270015[7] = inst_269997);
(statearr_270015[8] = inst_269994__$1);
return statearr_270015;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_270013__$1,3,inst_270000);
} else
{if((state_val_270014 === 1))
{var inst_269988 = (state_270013[10]);var inst_269985 = (state_270013[11]);var inst_269980 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_269981 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_269980,null));var inst_269982 = cljs.core.get_in.call(null,req,inst_269981);var inst_269983 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_269984 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_269983,null));var inst_269985__$1 = cljs.core.get_in.call(null,req,inst_269984);var inst_269986 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"line_item_id","line_item_id",4537110510)];var inst_269987 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_269986,null));var inst_269988__$1 = cljs.core.get_in.call(null,req,inst_269987);var inst_269989 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477),new cljs.core.Keyword(null,"line_item_id","line_item_id",4537110510)];var inst_269990 = [inst_269985__$1,inst_269988__$1];var inst_269991 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_269989,inst_269990);var inst_269992 = foundation.app.models.fetch.call(null,foundation.test.models.promoted_tweets,new cljs.core.Keyword(null,"params","params",4313443576),inst_269991);var state_270013__$1 = (function (){var statearr_270016 = state_270013;(statearr_270016[9] = inst_269982);
(statearr_270016[10] = inst_269988__$1);
(statearr_270016[11] = inst_269985__$1);
return statearr_270016;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_270013__$1,2,inst_269992);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_270020 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_270020[0] = state_machine__12118__auto__);
(statearr_270020[1] = 1);
return statearr_270020;
});
var state_machine__12118__auto____1 = (function (state_270013){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_270013);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e270021){if((e270021 instanceof Object))
{var ex__12121__auto__ = e270021;var statearr_270022_270024 = state_270013;(statearr_270022_270024[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_270013);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e270021;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__270025 = state_270013;
state_270013 = G__270025;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_270013){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_270013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_270023 = f__12188__auto__.call(null);(statearr_270023[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_270023;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));

//# sourceMappingURL=services.js.map