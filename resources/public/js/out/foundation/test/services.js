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
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_226477){var state_val_226478 = (state_226477[1]);if((state_val_226478 === 3))
{var inst_226458 = (state_226477[7]);var inst_226465 = (state_226477[2]);var inst_226466 = cljs.core.first.call(null,inst_226458);var inst_226467 = foundation.test.services.init.call(null,foundation.test.models.accounts,inst_226466,inst_226465);var inst_226468 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_226469 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_226470 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_226469,null));var inst_226471 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_226470,inst_226458];var inst_226472 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_226468,inst_226471);var inst_226473 = [inst_226472];var inst_226474 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_226473,null));var inst_226475 = cljs.core.into.call(null,inst_226467,inst_226474);var state_226477__$1 = state_226477;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_226477__$1,inst_226475);
} else
{if((state_val_226478 === 2))
{var inst_226458 = (state_226477[7]);var inst_226458__$1 = (state_226477[2]);var inst_226459 = cljs.core.first.call(null,inst_226458__$1);var inst_226460 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_226461 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_226459);var inst_226462 = [cljs.core.str("/stats"),cljs.core.str(inst_226460),cljs.core.str("/"),cljs.core.str(inst_226461)].join('');var inst_226463 = foundation.test.services.get_stats.call(null,inst_226462,inst_226459,foundation.test.models.account_stats);var state_226477__$1 = (function (){var statearr_226479 = state_226477;(statearr_226479[7] = inst_226458__$1);
return statearr_226479;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_226477__$1,3,inst_226463);
} else
{if((state_val_226478 === 1))
{var inst_226456 = foundation.app.models.fetch.call(null,foundation.test.models.accounts);var state_226477__$1 = state_226477;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_226477__$1,2,inst_226456);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_226483 = [null,null,null,null,null,null,null,null];(statearr_226483[0] = state_machine__12118__auto__);
(statearr_226483[1] = 1);
return statearr_226483;
});
var state_machine__12118__auto____1 = (function (state_226477){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_226477);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e226484){if((e226484 instanceof Object))
{var ex__12121__auto__ = e226484;var statearr_226485_226487 = state_226477;(statearr_226485_226487[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_226477);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e226484;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__226488 = state_226477;
state_226477 = G__226488;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_226477){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_226477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_226486 = f__12188__auto__.call(null);(statearr_226486[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_226486;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_226514){var state_val_226515 = (state_226514[1]);if((state_val_226515 === 3))
{var inst_226498 = (state_226514[7]);var inst_226495 = (state_226514[8]);var inst_226503 = (state_226514[2]);var inst_226504 = foundation.test.services.init.call(null,foundation.test.models.accounts,inst_226498,inst_226503);var inst_226505 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_226506 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_226507 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_226506,null));var inst_226508 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_226507,inst_226495];var inst_226509 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_226505,inst_226508);var inst_226510 = [inst_226509];var inst_226511 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_226510,null));var inst_226512 = cljs.core.into.call(null,inst_226504,inst_226511);var state_226514__$1 = state_226514;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_226514__$1,inst_226512);
} else
{if((state_val_226515 === 2))
{var inst_226492 = (state_226514[9]);var inst_226495 = (state_226514[8]);var inst_226495__$1 = (state_226514[2]);var inst_226496 = (function (){var models = inst_226495__$1;var id = inst_226492;return ((function (models,id,inst_226492,inst_226495,inst_226495__$1,state_val_226515){
return (function (p1__226489_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__226489_SHARP_),id);
});
;})(models,id,inst_226492,inst_226495,inst_226495__$1,state_val_226515))
})();var inst_226497 = cljs.core.set.call(null,inst_226495__$1);var inst_226498 = clojure.set.select.call(null,inst_226496,inst_226497);var inst_226499 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_226500 = [cljs.core.str("/stats"),cljs.core.str(inst_226499)].join('');var inst_226501 = foundation.test.services.get_stats.call(null,inst_226500,cljs.core.PersistentHashMap.EMPTY,foundation.test.models.account_stats);var state_226514__$1 = (function (){var statearr_226516 = state_226514;(statearr_226516[7] = inst_226498);
(statearr_226516[8] = inst_226495__$1);
return statearr_226516;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_226514__$1,3,inst_226501);
} else
{if((state_val_226515 === 1))
{var inst_226490 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_226491 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_226490,null));var inst_226492 = cljs.core.get_in.call(null,req,inst_226491);var inst_226493 = foundation.app.models.fetch.call(null,foundation.test.models.accounts);var state_226514__$1 = (function (){var statearr_226517 = state_226514;(statearr_226517[9] = inst_226492);
return statearr_226517;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_226514__$1,2,inst_226493);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_226521 = [null,null,null,null,null,null,null,null,null,null];(statearr_226521[0] = state_machine__12118__auto__);
(statearr_226521[1] = 1);
return statearr_226521;
});
var state_machine__12118__auto____1 = (function (state_226514){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_226514);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e226522){if((e226522 instanceof Object))
{var ex__12121__auto__ = e226522;var statearr_226523_226525 = state_226514;(statearr_226523_226525[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_226514);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e226522;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__226526 = state_226514;
state_226514 = G__226526;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_226514){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_226514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_226524 = f__12188__auto__.call(null);(statearr_226524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_226524;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/campaigns"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_226554){var state_val_226555 = (state_226554[1]);if((state_val_226555 === 3))
{var inst_226535 = (state_226554[7]);var inst_226542 = (state_226554[2]);var inst_226543 = cljs.core.first.call(null,inst_226535);var inst_226544 = foundation.test.services.init.call(null,foundation.test.models.campaigns,inst_226543,inst_226542);var inst_226545 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_226546 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_226547 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_226546,null));var inst_226548 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_226547,inst_226535];var inst_226549 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_226545,inst_226548);var inst_226550 = [inst_226549];var inst_226551 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_226550,null));var inst_226552 = cljs.core.into.call(null,inst_226544,inst_226551);var state_226554__$1 = state_226554;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_226554__$1,inst_226552);
} else
{if((state_val_226555 === 2))
{var inst_226535 = (state_226554[7]);var inst_226535__$1 = (state_226554[2]);var inst_226536 = cljs.core.first.call(null,inst_226535__$1);var inst_226537 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_226538 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_226536);var inst_226539 = [cljs.core.str("/stats"),cljs.core.str(inst_226537),cljs.core.str("/"),cljs.core.str(inst_226538)].join('');var inst_226540 = foundation.test.services.get_stats.call(null,inst_226539,inst_226536,foundation.test.models.campaign_stats);var state_226554__$1 = (function (){var statearr_226556 = state_226554;(statearr_226556[7] = inst_226535__$1);
return statearr_226556;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_226554__$1,3,inst_226540);
} else
{if((state_val_226555 === 1))
{var inst_226527 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_226528 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_226527,null));var inst_226529 = cljs.core.get_in.call(null,req,inst_226528);var inst_226530 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_226531 = [inst_226529];var inst_226532 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_226530,inst_226531);var inst_226533 = foundation.app.models.fetch.call(null,foundation.test.models.campaigns,new cljs.core.Keyword(null,"params","params",4313443576),inst_226532);var state_226554__$1 = state_226554;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_226554__$1,2,inst_226533);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_226560 = [null,null,null,null,null,null,null,null];(statearr_226560[0] = state_machine__12118__auto__);
(statearr_226560[1] = 1);
return statearr_226560;
});
var state_machine__12118__auto____1 = (function (state_226554){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_226554);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e226561){if((e226561 instanceof Object))
{var ex__12121__auto__ = e226561;var statearr_226562_226564 = state_226554;(statearr_226562_226564[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_226554);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e226561;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__226565 = state_226554;
state_226554 = G__226565;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_226554){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_226554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_226563 = f__12188__auto__.call(null);(statearr_226563[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_226563;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/campaigns/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_226597){var state_val_226598 = (state_226597[1]);if((state_val_226598 === 3))
{var inst_226581 = (state_226597[7]);var inst_226578 = (state_226597[8]);var inst_226586 = (state_226597[2]);var inst_226587 = foundation.test.services.init.call(null,foundation.test.models.campaigns,inst_226581,inst_226586);var inst_226588 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_226589 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_226590 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_226589,null));var inst_226591 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_226590,inst_226578];var inst_226592 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_226588,inst_226591);var inst_226593 = [inst_226592];var inst_226594 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_226593,null));var inst_226595 = cljs.core.into.call(null,inst_226587,inst_226594);var state_226597__$1 = state_226597;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_226597__$1,inst_226595);
} else
{if((state_val_226598 === 2))
{var inst_226569 = (state_226597[9]);var inst_226572 = (state_226597[10]);var inst_226578 = (state_226597[8]);var inst_226578__$1 = (state_226597[2]);var inst_226579 = (function (){var models = inst_226578__$1;var account_id = inst_226572;var id = inst_226569;return ((function (models,account_id,id,inst_226569,inst_226572,inst_226578,inst_226578__$1,state_val_226598){
return (function (p1__226566_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__226566_SHARP_),id);
});
;})(models,account_id,id,inst_226569,inst_226572,inst_226578,inst_226578__$1,state_val_226598))
})();var inst_226580 = cljs.core.set.call(null,inst_226578__$1);var inst_226581 = clojure.set.select.call(null,inst_226579,inst_226580);var inst_226582 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_226583 = [cljs.core.str("/stats"),cljs.core.str(inst_226582)].join('');var inst_226584 = foundation.test.services.get_stats.call(null,inst_226583,cljs.core.PersistentHashMap.EMPTY,foundation.test.models.campaign_stats);var state_226597__$1 = (function (){var statearr_226599 = state_226597;(statearr_226599[7] = inst_226581);
(statearr_226599[8] = inst_226578__$1);
return statearr_226599;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_226597__$1,3,inst_226584);
} else
{if((state_val_226598 === 1))
{var inst_226572 = (state_226597[10]);var inst_226567 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_226568 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_226567,null));var inst_226569 = cljs.core.get_in.call(null,req,inst_226568);var inst_226570 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_226571 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_226570,null));var inst_226572__$1 = cljs.core.get_in.call(null,req,inst_226571);var inst_226573 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_226574 = [inst_226572__$1];var inst_226575 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_226573,inst_226574);var inst_226576 = foundation.app.models.fetch.call(null,foundation.test.models.campaigns,new cljs.core.Keyword(null,"params","params",4313443576),inst_226575);var state_226597__$1 = (function (){var statearr_226600 = state_226597;(statearr_226600[9] = inst_226569);
(statearr_226600[10] = inst_226572__$1);
return statearr_226600;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_226597__$1,2,inst_226576);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_226604 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_226604[0] = state_machine__12118__auto__);
(statearr_226604[1] = 1);
return statearr_226604;
});
var state_machine__12118__auto____1 = (function (state_226597){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_226597);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e226605){if((e226605 instanceof Object))
{var ex__12121__auto__ = e226605;var statearr_226606_226608 = state_226597;(statearr_226606_226608[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_226597);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e226605;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__226609 = state_226597;
state_226597 = G__226609;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_226597){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_226597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_226607 = f__12188__auto__.call(null);(statearr_226607[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_226607;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/line_items"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_226643){var state_val_226644 = (state_226643[1]);if((state_val_226644 === 3))
{var inst_226624 = (state_226643[7]);var inst_226631 = (state_226643[2]);var inst_226632 = cljs.core.first.call(null,inst_226624);var inst_226633 = foundation.test.services.init.call(null,foundation.test.models.line_items,inst_226632,inst_226631);var inst_226634 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_226635 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_226636 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_226635,null));var inst_226637 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_226636,inst_226624];var inst_226638 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_226634,inst_226637);var inst_226639 = [inst_226638];var inst_226640 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_226639,null));var inst_226641 = cljs.core.into.call(null,inst_226633,inst_226640);var state_226643__$1 = state_226643;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_226643__$1,inst_226641);
} else
{if((state_val_226644 === 2))
{var inst_226624 = (state_226643[7]);var inst_226624__$1 = (state_226643[2]);var inst_226625 = cljs.core.first.call(null,inst_226624__$1);var inst_226626 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_226627 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_226625);var inst_226628 = [cljs.core.str("/stats"),cljs.core.str(inst_226626),cljs.core.str("/"),cljs.core.str(inst_226627)].join('');var inst_226629 = foundation.test.services.get_stats.call(null,inst_226628,inst_226625,foundation.test.models.line_item_stats);var state_226643__$1 = (function (){var statearr_226645 = state_226643;(statearr_226645[7] = inst_226624__$1);
return statearr_226645;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_226643__$1,3,inst_226629);
} else
{if((state_val_226644 === 1))
{var inst_226610 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_226611 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_226610,null));var inst_226612 = cljs.core.get_in.call(null,req,inst_226611);var inst_226613 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"campaign_ids","campaign_ids",1186837115)];var inst_226614 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_226613,null));var inst_226615 = cljs.core.get_in.call(null,req,inst_226614);var inst_226616 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_226617 = [inst_226612];var inst_226618 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_226616,inst_226617);var inst_226619 = [new cljs.core.Keyword(null,"campaign-ids","campaign-ids",1185347565)];var inst_226620 = [inst_226615];var inst_226621 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_226619,inst_226620);var inst_226622 = foundation.app.models.fetch.call(null,foundation.test.models.line_items,new cljs.core.Keyword(null,"params","params",4313443576),inst_226618,new cljs.core.Keyword(null,"query-params","query-params",1080249757),inst_226621);var state_226643__$1 = state_226643;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_226643__$1,2,inst_226622);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_226649 = [null,null,null,null,null,null,null,null];(statearr_226649[0] = state_machine__12118__auto__);
(statearr_226649[1] = 1);
return statearr_226649;
});
var state_machine__12118__auto____1 = (function (state_226643){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_226643);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e226650){if((e226650 instanceof Object))
{var ex__12121__auto__ = e226650;var statearr_226651_226653 = state_226643;(statearr_226651_226653[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_226643);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e226650;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__226654 = state_226643;
state_226643 = G__226654;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_226643){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_226643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_226652 = f__12188__auto__.call(null);(statearr_226652[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_226652;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/line_items/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_226691){var state_val_226692 = (state_226691[1]);if((state_val_226692 === 3))
{var inst_226675 = (state_226691[7]);var inst_226672 = (state_226691[8]);var inst_226680 = (state_226691[2]);var inst_226681 = foundation.test.services.init.call(null,foundation.test.models.line_items,inst_226675,inst_226680);var inst_226682 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_226683 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_226684 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_226683,null));var inst_226685 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_226684,inst_226672];var inst_226686 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_226682,inst_226685);var inst_226687 = [inst_226686];var inst_226688 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_226687,null));var inst_226689 = cljs.core.into.call(null,inst_226681,inst_226688);var state_226691__$1 = state_226691;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_226691__$1,inst_226689);
} else
{if((state_val_226692 === 2))
{var inst_226672 = (state_226691[8]);var inst_226658 = (state_226691[9]);var inst_226664 = (state_226691[10]);var inst_226661 = (state_226691[11]);var inst_226672__$1 = (state_226691[2]);var inst_226673 = (function (){var models = inst_226672__$1;var campaign_id = inst_226664;var account_id = inst_226661;var id = inst_226658;return ((function (models,campaign_id,account_id,id,inst_226672,inst_226658,inst_226664,inst_226661,inst_226672__$1,state_val_226692){
return (function (p1__226655_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__226655_SHARP_),id);
});
;})(models,campaign_id,account_id,id,inst_226672,inst_226658,inst_226664,inst_226661,inst_226672__$1,state_val_226692))
})();var inst_226674 = cljs.core.set.call(null,inst_226672__$1);var inst_226675 = clojure.set.select.call(null,inst_226673,inst_226674);var inst_226676 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_226677 = [cljs.core.str("/stats"),cljs.core.str(inst_226676)].join('');var inst_226678 = foundation.test.services.get_stats.call(null,inst_226677,cljs.core.PersistentHashMap.EMPTY,foundation.test.models.line_item_stats);var state_226691__$1 = (function (){var statearr_226693 = state_226691;(statearr_226693[7] = inst_226675);
(statearr_226693[8] = inst_226672__$1);
return statearr_226693;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_226691__$1,3,inst_226678);
} else
{if((state_val_226692 === 1))
{var inst_226664 = (state_226691[10]);var inst_226661 = (state_226691[11]);var inst_226656 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_226657 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_226656,null));var inst_226658 = cljs.core.get_in.call(null,req,inst_226657);var inst_226659 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_226660 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_226659,null));var inst_226661__$1 = cljs.core.get_in.call(null,req,inst_226660);var inst_226662 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"campaign_ids","campaign_ids",1186837115)];var inst_226663 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_226662,null));var inst_226664__$1 = cljs.core.get_in.call(null,req,inst_226663);var inst_226665 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477),inst_226661__$1];var inst_226666 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_226665,null));var inst_226667 = [new cljs.core.Keyword(null,"campaign-ids","campaign-ids",1185347565)];var inst_226668 = [inst_226664__$1];var inst_226669 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_226667,inst_226668);var inst_226670 = foundation.app.models.fetch.call(null,foundation.test.models.line_items,new cljs.core.Keyword(null,"params","params",4313443576),inst_226666,new cljs.core.Keyword(null,"query-params","query-params",1080249757),inst_226669);var state_226691__$1 = (function (){var statearr_226694 = state_226691;(statearr_226694[9] = inst_226658);
(statearr_226694[10] = inst_226664__$1);
(statearr_226694[11] = inst_226661__$1);
return statearr_226694;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_226691__$1,2,inst_226670);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_226698 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_226698[0] = state_machine__12118__auto__);
(statearr_226698[1] = 1);
return statearr_226698;
});
var state_machine__12118__auto____1 = (function (state_226691){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_226691);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e226699){if((e226699 instanceof Object))
{var ex__12121__auto__ = e226699;var statearr_226700_226702 = state_226691;(statearr_226700_226702[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_226691);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e226699;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__226703 = state_226691;
state_226691 = G__226703;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_226691){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_226691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_226701 = f__12188__auto__.call(null);(statearr_226701[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_226701;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/promoted_accounts"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_226734){var state_val_226735 = (state_226734[1]);if((state_val_226735 === 3))
{var inst_226715 = (state_226734[7]);var inst_226722 = (state_226734[2]);var inst_226723 = cljs.core.first.call(null,inst_226715);var inst_226724 = foundation.test.services.init.call(null,foundation.test.models.promoted_accounts,inst_226723,inst_226722);var inst_226725 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_226726 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_226727 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_226726,null));var inst_226728 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_226727,inst_226715];var inst_226729 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_226725,inst_226728);var inst_226730 = [inst_226729];var inst_226731 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_226730,null));var inst_226732 = cljs.core.into.call(null,inst_226724,inst_226731);var state_226734__$1 = state_226734;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_226734__$1,inst_226732);
} else
{if((state_val_226735 === 2))
{var inst_226715 = (state_226734[7]);var inst_226715__$1 = (state_226734[2]);var inst_226716 = cljs.core.first.call(null,inst_226715__$1);var inst_226717 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_226718 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_226716);var inst_226719 = [cljs.core.str("/stats"),cljs.core.str(inst_226717),cljs.core.str("/"),cljs.core.str(inst_226718)].join('');var inst_226720 = foundation.test.services.get_stats.call(null,inst_226719,inst_226716,foundation.test.models.promoted_account_stats);var state_226734__$1 = (function (){var statearr_226736 = state_226734;(statearr_226736[7] = inst_226715__$1);
return statearr_226736;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_226734__$1,3,inst_226720);
} else
{if((state_val_226735 === 1))
{var inst_226704 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_226705 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_226704,null));var inst_226706 = cljs.core.get_in.call(null,req,inst_226705);var inst_226707 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"line_item_id","line_item_id",4537110510)];var inst_226708 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_226707,null));var inst_226709 = cljs.core.get_in.call(null,req,inst_226708);var inst_226710 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477),new cljs.core.Keyword(null,"line_item_id","line_item_id",4537110510)];var inst_226711 = [inst_226706,inst_226709];var inst_226712 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_226710,inst_226711);var inst_226713 = foundation.app.models.fetch.call(null,foundation.test.models.promoted_accounts,new cljs.core.Keyword(null,"params","params",4313443576),inst_226712);var state_226734__$1 = state_226734;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_226734__$1,2,inst_226713);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_226740 = [null,null,null,null,null,null,null,null];(statearr_226740[0] = state_machine__12118__auto__);
(statearr_226740[1] = 1);
return statearr_226740;
});
var state_machine__12118__auto____1 = (function (state_226734){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_226734);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e226741){if((e226741 instanceof Object))
{var ex__12121__auto__ = e226741;var statearr_226742_226744 = state_226734;(statearr_226742_226744[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_226734);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e226741;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__226745 = state_226734;
state_226734 = G__226745;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_226734){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_226734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_226743 = f__12188__auto__.call(null);(statearr_226743[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_226743;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/promoted_accounts/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_226780){var state_val_226781 = (state_226780[1]);if((state_val_226781 === 3))
{var inst_226764 = (state_226780[7]);var inst_226761 = (state_226780[8]);var inst_226769 = (state_226780[2]);var inst_226770 = foundation.test.services.init.call(null,foundation.test.models.promoted_accounts,inst_226764,inst_226769);var inst_226771 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_226772 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_226773 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_226772,null));var inst_226774 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_226773,inst_226761];var inst_226775 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_226771,inst_226774);var inst_226776 = [inst_226775];var inst_226777 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_226776,null));var inst_226778 = cljs.core.into.call(null,inst_226770,inst_226777);var state_226780__$1 = state_226780;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_226780__$1,inst_226778);
} else
{if((state_val_226781 === 2))
{var inst_226752 = (state_226780[9]);var inst_226761 = (state_226780[8]);var inst_226755 = (state_226780[10]);var inst_226749 = (state_226780[11]);var inst_226761__$1 = (state_226780[2]);var inst_226762 = (function (){var models = inst_226761__$1;var line_item_id = inst_226755;var account_id = inst_226752;var id = inst_226749;return ((function (models,line_item_id,account_id,id,inst_226752,inst_226761,inst_226755,inst_226749,inst_226761__$1,state_val_226781){
return (function (p1__226746_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__226746_SHARP_),id);
});
;})(models,line_item_id,account_id,id,inst_226752,inst_226761,inst_226755,inst_226749,inst_226761__$1,state_val_226781))
})();var inst_226763 = cljs.core.set.call(null,inst_226761__$1);var inst_226764 = clojure.set.select.call(null,inst_226762,inst_226763);var inst_226765 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_226766 = [cljs.core.str("/stats"),cljs.core.str(inst_226765)].join('');var inst_226767 = foundation.test.services.get_stats.call(null,inst_226766,cljs.core.PersistentHashMap.EMPTY,foundation.test.models.promoted_account_stats);var state_226780__$1 = (function (){var statearr_226782 = state_226780;(statearr_226782[7] = inst_226764);
(statearr_226782[8] = inst_226761__$1);
return statearr_226782;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_226780__$1,3,inst_226767);
} else
{if((state_val_226781 === 1))
{var inst_226752 = (state_226780[9]);var inst_226755 = (state_226780[10]);var inst_226747 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_226748 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_226747,null));var inst_226749 = cljs.core.get_in.call(null,req,inst_226748);var inst_226750 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_226751 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_226750,null));var inst_226752__$1 = cljs.core.get_in.call(null,req,inst_226751);var inst_226753 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"line_item_id","line_item_id",4537110510)];var inst_226754 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_226753,null));var inst_226755__$1 = cljs.core.get_in.call(null,req,inst_226754);var inst_226756 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477),new cljs.core.Keyword(null,"line_item_id","line_item_id",4537110510)];var inst_226757 = [inst_226752__$1,inst_226755__$1];var inst_226758 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_226756,inst_226757);var inst_226759 = foundation.app.models.fetch.call(null,foundation.test.models.promoted_accounts,new cljs.core.Keyword(null,"params","params",4313443576),inst_226758);var state_226780__$1 = (function (){var statearr_226783 = state_226780;(statearr_226783[9] = inst_226752__$1);
(statearr_226783[10] = inst_226755__$1);
(statearr_226783[11] = inst_226749);
return statearr_226783;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_226780__$1,2,inst_226759);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_226787 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_226787[0] = state_machine__12118__auto__);
(statearr_226787[1] = 1);
return statearr_226787;
});
var state_machine__12118__auto____1 = (function (state_226780){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_226780);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e226788){if((e226788 instanceof Object))
{var ex__12121__auto__ = e226788;var statearr_226789_226791 = state_226780;(statearr_226789_226791[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_226780);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e226788;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__226792 = state_226780;
state_226780 = G__226792;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_226780){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_226780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_226790 = f__12188__auto__.call(null);(statearr_226790[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_226790;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/promoted_tweets"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_226823){var state_val_226824 = (state_226823[1]);if((state_val_226824 === 3))
{var inst_226804 = (state_226823[7]);var inst_226811 = (state_226823[2]);var inst_226812 = cljs.core.first.call(null,inst_226804);var inst_226813 = foundation.test.services.init.call(null,foundation.test.models.promoted_tweets,inst_226812,inst_226811);var inst_226814 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_226815 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_226816 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_226815,null));var inst_226817 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_226816,inst_226804];var inst_226818 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_226814,inst_226817);var inst_226819 = [inst_226818];var inst_226820 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_226819,null));var inst_226821 = cljs.core.into.call(null,inst_226813,inst_226820);var state_226823__$1 = state_226823;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_226823__$1,inst_226821);
} else
{if((state_val_226824 === 2))
{var inst_226804 = (state_226823[7]);var inst_226804__$1 = (state_226823[2]);var inst_226805 = cljs.core.first.call(null,inst_226804__$1);var inst_226806 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_226807 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_226805);var inst_226808 = [cljs.core.str("/stats"),cljs.core.str(inst_226806),cljs.core.str("/"),cljs.core.str(inst_226807)].join('');var inst_226809 = foundation.test.services.get_stats.call(null,inst_226808,inst_226805,foundation.test.models.promoted_tweet_stats);var state_226823__$1 = (function (){var statearr_226825 = state_226823;(statearr_226825[7] = inst_226804__$1);
return statearr_226825;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_226823__$1,3,inst_226809);
} else
{if((state_val_226824 === 1))
{var inst_226793 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_226794 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_226793,null));var inst_226795 = cljs.core.get_in.call(null,req,inst_226794);var inst_226796 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"line_item_id","line_item_id",4537110510)];var inst_226797 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_226796,null));var inst_226798 = cljs.core.get_in.call(null,req,inst_226797);var inst_226799 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477),new cljs.core.Keyword(null,"line_item_id","line_item_id",4537110510)];var inst_226800 = [inst_226795,inst_226798];var inst_226801 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_226799,inst_226800);var inst_226802 = foundation.app.models.fetch.call(null,foundation.test.models.promoted_tweets,new cljs.core.Keyword(null,"params","params",4313443576),inst_226801);var state_226823__$1 = state_226823;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_226823__$1,2,inst_226802);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_226829 = [null,null,null,null,null,null,null,null];(statearr_226829[0] = state_machine__12118__auto__);
(statearr_226829[1] = 1);
return statearr_226829;
});
var state_machine__12118__auto____1 = (function (state_226823){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_226823);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e226830){if((e226830 instanceof Object))
{var ex__12121__auto__ = e226830;var statearr_226831_226833 = state_226823;(statearr_226831_226833[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_226823);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e226830;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__226834 = state_226823;
state_226823 = G__226834;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_226823){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_226823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_226832 = f__12188__auto__.call(null);(statearr_226832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_226832;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/promoted_tweets/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_226869){var state_val_226870 = (state_226869[1]);if((state_val_226870 === 3))
{var inst_226850 = (state_226869[7]);var inst_226853 = (state_226869[8]);var inst_226858 = (state_226869[2]);var inst_226859 = foundation.test.services.init.call(null,foundation.test.models.promoted_tweets,inst_226853,inst_226858);var inst_226860 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_226861 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_226862 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_226861,null));var inst_226863 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_226862,inst_226850];var inst_226864 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_226860,inst_226863);var inst_226865 = [inst_226864];var inst_226866 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_226865,null));var inst_226867 = cljs.core.into.call(null,inst_226859,inst_226866);var state_226869__$1 = state_226869;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_226869__$1,inst_226867);
} else
{if((state_val_226870 === 2))
{var inst_226844 = (state_226869[9]);var inst_226841 = (state_226869[10]);var inst_226850 = (state_226869[7]);var inst_226838 = (state_226869[11]);var inst_226850__$1 = (state_226869[2]);var inst_226851 = (function (){var models = inst_226850__$1;var line_item_id = inst_226844;var account_id = inst_226841;var id = inst_226838;return ((function (models,line_item_id,account_id,id,inst_226844,inst_226841,inst_226850,inst_226838,inst_226850__$1,state_val_226870){
return (function (p1__226835_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__226835_SHARP_),id);
});
;})(models,line_item_id,account_id,id,inst_226844,inst_226841,inst_226850,inst_226838,inst_226850__$1,state_val_226870))
})();var inst_226852 = cljs.core.set.call(null,inst_226850__$1);var inst_226853 = clojure.set.select.call(null,inst_226851,inst_226852);var inst_226854 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_226855 = [cljs.core.str("/stats"),cljs.core.str(inst_226854)].join('');var inst_226856 = foundation.test.services.get_stats.call(null,inst_226855,cljs.core.PersistentHashMap.EMPTY,foundation.test.models.promoted_tweet_stats);var state_226869__$1 = (function (){var statearr_226871 = state_226869;(statearr_226871[7] = inst_226850__$1);
(statearr_226871[8] = inst_226853);
return statearr_226871;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_226869__$1,3,inst_226856);
} else
{if((state_val_226870 === 1))
{var inst_226844 = (state_226869[9]);var inst_226841 = (state_226869[10]);var inst_226836 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_226837 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_226836,null));var inst_226838 = cljs.core.get_in.call(null,req,inst_226837);var inst_226839 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_226840 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_226839,null));var inst_226841__$1 = cljs.core.get_in.call(null,req,inst_226840);var inst_226842 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"line_item_id","line_item_id",4537110510)];var inst_226843 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_226842,null));var inst_226844__$1 = cljs.core.get_in.call(null,req,inst_226843);var inst_226845 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477),new cljs.core.Keyword(null,"line_item_id","line_item_id",4537110510)];var inst_226846 = [inst_226841__$1,inst_226844__$1];var inst_226847 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_226845,inst_226846);var inst_226848 = foundation.app.models.fetch.call(null,foundation.test.models.promoted_tweets,new cljs.core.Keyword(null,"params","params",4313443576),inst_226847);var state_226869__$1 = (function (){var statearr_226872 = state_226869;(statearr_226872[9] = inst_226844__$1);
(statearr_226872[10] = inst_226841__$1);
(statearr_226872[11] = inst_226838);
return statearr_226872;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_226869__$1,2,inst_226848);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_226876 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_226876[0] = state_machine__12118__auto__);
(statearr_226876[1] = 1);
return statearr_226876;
});
var state_machine__12118__auto____1 = (function (state_226869){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_226869);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e226877){if((e226877 instanceof Object))
{var ex__12121__auto__ = e226877;var statearr_226878_226880 = state_226869;(statearr_226878_226880[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_226869);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e226877;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__226881 = state_226869;
state_226869 = G__226881;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_226869){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_226869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_226879 = f__12188__auto__.call(null);(statearr_226879[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_226879;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));

//# sourceMappingURL=services.js.map