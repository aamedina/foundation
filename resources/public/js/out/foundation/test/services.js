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
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_400395){var state_val_400396 = (state_400395[1]);if((state_val_400396 === 3))
{var inst_400376 = (state_400395[7]);var inst_400383 = (state_400395[2]);var inst_400384 = cljs.core.first.call(null,inst_400376);var inst_400385 = foundation.test.services.init.call(null,foundation.test.models.accounts,inst_400384,inst_400383);var inst_400386 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_400387 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_400388 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_400387,null));var inst_400389 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_400388,inst_400376];var inst_400390 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_400386,inst_400389);var inst_400391 = [inst_400390];var inst_400392 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_400391,null));var inst_400393 = cljs.core.into.call(null,inst_400385,inst_400392);var state_400395__$1 = state_400395;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_400395__$1,inst_400393);
} else
{if((state_val_400396 === 2))
{var inst_400376 = (state_400395[7]);var inst_400376__$1 = (state_400395[2]);var inst_400377 = cljs.core.first.call(null,inst_400376__$1);var inst_400378 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_400379 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_400377);var inst_400380 = [cljs.core.str("/stats"),cljs.core.str(inst_400378),cljs.core.str("/"),cljs.core.str(inst_400379)].join('');var inst_400381 = foundation.test.services.get_stats.call(null,inst_400380,inst_400377,foundation.test.models.account_stats);var state_400395__$1 = (function (){var statearr_400397 = state_400395;(statearr_400397[7] = inst_400376__$1);
return statearr_400397;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_400395__$1,3,inst_400381);
} else
{if((state_val_400396 === 1))
{var inst_400374 = foundation.app.models.fetch.call(null,foundation.test.models.accounts);var state_400395__$1 = state_400395;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_400395__$1,2,inst_400374);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_400401 = [null,null,null,null,null,null,null,null];(statearr_400401[0] = state_machine__12118__auto__);
(statearr_400401[1] = 1);
return statearr_400401;
});
var state_machine__12118__auto____1 = (function (state_400395){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_400395);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e400402){if((e400402 instanceof Object))
{var ex__12121__auto__ = e400402;var statearr_400403_400405 = state_400395;(statearr_400403_400405[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_400395);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e400402;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__400406 = state_400395;
state_400395 = G__400406;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_400395){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_400395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_400404 = f__12188__auto__.call(null);(statearr_400404[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_400404;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_400432){var state_val_400433 = (state_400432[1]);if((state_val_400433 === 3))
{var inst_400416 = (state_400432[7]);var inst_400413 = (state_400432[8]);var inst_400421 = (state_400432[2]);var inst_400422 = foundation.test.services.init.call(null,foundation.test.models.accounts,inst_400416,inst_400421);var inst_400423 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_400424 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_400425 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_400424,null));var inst_400426 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_400425,inst_400413];var inst_400427 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_400423,inst_400426);var inst_400428 = [inst_400427];var inst_400429 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_400428,null));var inst_400430 = cljs.core.into.call(null,inst_400422,inst_400429);var state_400432__$1 = state_400432;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_400432__$1,inst_400430);
} else
{if((state_val_400433 === 2))
{var inst_400413 = (state_400432[8]);var inst_400410 = (state_400432[9]);var inst_400413__$1 = (state_400432[2]);var inst_400414 = (function (){var models = inst_400413__$1;var id = inst_400410;return ((function (models,id,inst_400413,inst_400410,inst_400413__$1,state_val_400433){
return (function (p1__400407_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__400407_SHARP_),id);
});
;})(models,id,inst_400413,inst_400410,inst_400413__$1,state_val_400433))
})();var inst_400415 = cljs.core.set.call(null,inst_400413__$1);var inst_400416 = clojure.set.select.call(null,inst_400414,inst_400415);var inst_400417 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_400418 = [cljs.core.str("/stats"),cljs.core.str(inst_400417)].join('');var inst_400419 = foundation.test.services.get_stats.call(null,inst_400418,cljs.core.PersistentHashMap.EMPTY,foundation.test.models.account_stats);var state_400432__$1 = (function (){var statearr_400434 = state_400432;(statearr_400434[7] = inst_400416);
(statearr_400434[8] = inst_400413__$1);
return statearr_400434;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_400432__$1,3,inst_400419);
} else
{if((state_val_400433 === 1))
{var inst_400408 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_400409 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_400408,null));var inst_400410 = cljs.core.get_in.call(null,req,inst_400409);var inst_400411 = foundation.app.models.fetch.call(null,foundation.test.models.accounts);var state_400432__$1 = (function (){var statearr_400435 = state_400432;(statearr_400435[9] = inst_400410);
return statearr_400435;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_400432__$1,2,inst_400411);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_400439 = [null,null,null,null,null,null,null,null,null,null];(statearr_400439[0] = state_machine__12118__auto__);
(statearr_400439[1] = 1);
return statearr_400439;
});
var state_machine__12118__auto____1 = (function (state_400432){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_400432);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e400440){if((e400440 instanceof Object))
{var ex__12121__auto__ = e400440;var statearr_400441_400443 = state_400432;(statearr_400441_400443[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_400432);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e400440;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__400444 = state_400432;
state_400432 = G__400444;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_400432){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_400432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_400442 = f__12188__auto__.call(null);(statearr_400442[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_400442;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/campaigns"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_400472){var state_val_400473 = (state_400472[1]);if((state_val_400473 === 3))
{var inst_400453 = (state_400472[7]);var inst_400460 = (state_400472[2]);var inst_400461 = cljs.core.first.call(null,inst_400453);var inst_400462 = foundation.test.services.init.call(null,foundation.test.models.campaigns,inst_400461,inst_400460);var inst_400463 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_400464 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_400465 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_400464,null));var inst_400466 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_400465,inst_400453];var inst_400467 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_400463,inst_400466);var inst_400468 = [inst_400467];var inst_400469 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_400468,null));var inst_400470 = cljs.core.into.call(null,inst_400462,inst_400469);var state_400472__$1 = state_400472;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_400472__$1,inst_400470);
} else
{if((state_val_400473 === 2))
{var inst_400453 = (state_400472[7]);var inst_400453__$1 = (state_400472[2]);var inst_400454 = cljs.core.first.call(null,inst_400453__$1);var inst_400455 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_400456 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_400454);var inst_400457 = [cljs.core.str("/stats"),cljs.core.str(inst_400455),cljs.core.str("/"),cljs.core.str(inst_400456)].join('');var inst_400458 = foundation.test.services.get_stats.call(null,inst_400457,inst_400454,foundation.test.models.campaign_stats);var state_400472__$1 = (function (){var statearr_400474 = state_400472;(statearr_400474[7] = inst_400453__$1);
return statearr_400474;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_400472__$1,3,inst_400458);
} else
{if((state_val_400473 === 1))
{var inst_400445 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_400446 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_400445,null));var inst_400447 = cljs.core.get_in.call(null,req,inst_400446);var inst_400448 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_400449 = [inst_400447];var inst_400450 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_400448,inst_400449);var inst_400451 = foundation.app.models.fetch.call(null,foundation.test.models.campaigns,new cljs.core.Keyword(null,"params","params",4313443576),inst_400450);var state_400472__$1 = state_400472;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_400472__$1,2,inst_400451);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_400478 = [null,null,null,null,null,null,null,null];(statearr_400478[0] = state_machine__12118__auto__);
(statearr_400478[1] = 1);
return statearr_400478;
});
var state_machine__12118__auto____1 = (function (state_400472){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_400472);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e400479){if((e400479 instanceof Object))
{var ex__12121__auto__ = e400479;var statearr_400480_400482 = state_400472;(statearr_400480_400482[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_400472);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e400479;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__400483 = state_400472;
state_400472 = G__400483;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_400472){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_400472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_400481 = f__12188__auto__.call(null);(statearr_400481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_400481;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/campaigns/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_400515){var state_val_400516 = (state_400515[1]);if((state_val_400516 === 3))
{var inst_400496 = (state_400515[7]);var inst_400499 = (state_400515[8]);var inst_400504 = (state_400515[2]);var inst_400505 = foundation.test.services.init.call(null,foundation.test.models.campaigns,inst_400499,inst_400504);var inst_400506 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_400507 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_400508 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_400507,null));var inst_400509 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_400508,inst_400496];var inst_400510 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_400506,inst_400509);var inst_400511 = [inst_400510];var inst_400512 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_400511,null));var inst_400513 = cljs.core.into.call(null,inst_400505,inst_400512);var state_400515__$1 = state_400515;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_400515__$1,inst_400513);
} else
{if((state_val_400516 === 2))
{var inst_400487 = (state_400515[9]);var inst_400496 = (state_400515[7]);var inst_400490 = (state_400515[10]);var inst_400496__$1 = (state_400515[2]);var inst_400497 = (function (){var models = inst_400496__$1;var account_id = inst_400490;var id = inst_400487;return ((function (models,account_id,id,inst_400487,inst_400496,inst_400490,inst_400496__$1,state_val_400516){
return (function (p1__400484_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__400484_SHARP_),id);
});
;})(models,account_id,id,inst_400487,inst_400496,inst_400490,inst_400496__$1,state_val_400516))
})();var inst_400498 = cljs.core.set.call(null,inst_400496__$1);var inst_400499 = clojure.set.select.call(null,inst_400497,inst_400498);var inst_400500 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_400501 = [cljs.core.str("/stats"),cljs.core.str(inst_400500)].join('');var inst_400502 = foundation.test.services.get_stats.call(null,inst_400501,cljs.core.PersistentHashMap.EMPTY,foundation.test.models.campaign_stats);var state_400515__$1 = (function (){var statearr_400517 = state_400515;(statearr_400517[7] = inst_400496__$1);
(statearr_400517[8] = inst_400499);
return statearr_400517;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_400515__$1,3,inst_400502);
} else
{if((state_val_400516 === 1))
{var inst_400490 = (state_400515[10]);var inst_400485 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_400486 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_400485,null));var inst_400487 = cljs.core.get_in.call(null,req,inst_400486);var inst_400488 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_400489 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_400488,null));var inst_400490__$1 = cljs.core.get_in.call(null,req,inst_400489);var inst_400491 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_400492 = [inst_400490__$1];var inst_400493 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_400491,inst_400492);var inst_400494 = foundation.app.models.fetch.call(null,foundation.test.models.campaigns,new cljs.core.Keyword(null,"params","params",4313443576),inst_400493);var state_400515__$1 = (function (){var statearr_400518 = state_400515;(statearr_400518[9] = inst_400487);
(statearr_400518[10] = inst_400490__$1);
return statearr_400518;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_400515__$1,2,inst_400494);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_400522 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_400522[0] = state_machine__12118__auto__);
(statearr_400522[1] = 1);
return statearr_400522;
});
var state_machine__12118__auto____1 = (function (state_400515){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_400515);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e400523){if((e400523 instanceof Object))
{var ex__12121__auto__ = e400523;var statearr_400524_400526 = state_400515;(statearr_400524_400526[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_400515);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e400523;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__400527 = state_400515;
state_400515 = G__400527;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_400515){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_400515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_400525 = f__12188__auto__.call(null);(statearr_400525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_400525;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/line_items"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_400561){var state_val_400562 = (state_400561[1]);if((state_val_400562 === 3))
{var inst_400542 = (state_400561[7]);var inst_400549 = (state_400561[2]);var inst_400550 = cljs.core.first.call(null,inst_400542);var inst_400551 = foundation.test.services.init.call(null,foundation.test.models.line_items,inst_400550,inst_400549);var inst_400552 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_400553 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_400554 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_400553,null));var inst_400555 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_400554,inst_400542];var inst_400556 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_400552,inst_400555);var inst_400557 = [inst_400556];var inst_400558 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_400557,null));var inst_400559 = cljs.core.into.call(null,inst_400551,inst_400558);var state_400561__$1 = state_400561;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_400561__$1,inst_400559);
} else
{if((state_val_400562 === 2))
{var inst_400542 = (state_400561[7]);var inst_400542__$1 = (state_400561[2]);var inst_400543 = cljs.core.first.call(null,inst_400542__$1);var inst_400544 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_400545 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_400543);var inst_400546 = [cljs.core.str("/stats"),cljs.core.str(inst_400544),cljs.core.str("/"),cljs.core.str(inst_400545)].join('');var inst_400547 = foundation.test.services.get_stats.call(null,inst_400546,inst_400543,foundation.test.models.line_item_stats);var state_400561__$1 = (function (){var statearr_400563 = state_400561;(statearr_400563[7] = inst_400542__$1);
return statearr_400563;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_400561__$1,3,inst_400547);
} else
{if((state_val_400562 === 1))
{var inst_400528 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_400529 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_400528,null));var inst_400530 = cljs.core.get_in.call(null,req,inst_400529);var inst_400531 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"campaign_ids","campaign_ids",1186837115)];var inst_400532 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_400531,null));var inst_400533 = cljs.core.get_in.call(null,req,inst_400532);var inst_400534 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_400535 = [inst_400530];var inst_400536 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_400534,inst_400535);var inst_400537 = [new cljs.core.Keyword(null,"campaign-ids","campaign-ids",1185347565)];var inst_400538 = [inst_400533];var inst_400539 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_400537,inst_400538);var inst_400540 = foundation.app.models.fetch.call(null,foundation.test.models.line_items,new cljs.core.Keyword(null,"params","params",4313443576),inst_400536,new cljs.core.Keyword(null,"query-params","query-params",1080249757),inst_400539);var state_400561__$1 = state_400561;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_400561__$1,2,inst_400540);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_400567 = [null,null,null,null,null,null,null,null];(statearr_400567[0] = state_machine__12118__auto__);
(statearr_400567[1] = 1);
return statearr_400567;
});
var state_machine__12118__auto____1 = (function (state_400561){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_400561);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e400568){if((e400568 instanceof Object))
{var ex__12121__auto__ = e400568;var statearr_400569_400571 = state_400561;(statearr_400569_400571[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_400561);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e400568;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__400572 = state_400561;
state_400561 = G__400572;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_400561){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_400561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_400570 = f__12188__auto__.call(null);(statearr_400570[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_400570;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/line_items/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_400609){var state_val_400610 = (state_400609[1]);if((state_val_400610 === 3))
{var inst_400593 = (state_400609[7]);var inst_400590 = (state_400609[8]);var inst_400598 = (state_400609[2]);var inst_400599 = foundation.test.services.init.call(null,foundation.test.models.line_items,inst_400593,inst_400598);var inst_400600 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_400601 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_400602 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_400601,null));var inst_400603 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_400602,inst_400590];var inst_400604 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_400600,inst_400603);var inst_400605 = [inst_400604];var inst_400606 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_400605,null));var inst_400607 = cljs.core.into.call(null,inst_400599,inst_400606);var state_400609__$1 = state_400609;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_400609__$1,inst_400607);
} else
{if((state_val_400610 === 2))
{var inst_400590 = (state_400609[8]);var inst_400579 = (state_400609[9]);var inst_400582 = (state_400609[10]);var inst_400576 = (state_400609[11]);var inst_400590__$1 = (state_400609[2]);var inst_400591 = (function (){var models = inst_400590__$1;var campaign_id = inst_400582;var account_id = inst_400579;var id = inst_400576;return ((function (models,campaign_id,account_id,id,inst_400590,inst_400579,inst_400582,inst_400576,inst_400590__$1,state_val_400610){
return (function (p1__400573_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__400573_SHARP_),id);
});
;})(models,campaign_id,account_id,id,inst_400590,inst_400579,inst_400582,inst_400576,inst_400590__$1,state_val_400610))
})();var inst_400592 = cljs.core.set.call(null,inst_400590__$1);var inst_400593 = clojure.set.select.call(null,inst_400591,inst_400592);var inst_400594 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_400595 = [cljs.core.str("/stats"),cljs.core.str(inst_400594)].join('');var inst_400596 = foundation.test.services.get_stats.call(null,inst_400595,cljs.core.PersistentHashMap.EMPTY,foundation.test.models.line_item_stats);var state_400609__$1 = (function (){var statearr_400611 = state_400609;(statearr_400611[7] = inst_400593);
(statearr_400611[8] = inst_400590__$1);
return statearr_400611;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_400609__$1,3,inst_400596);
} else
{if((state_val_400610 === 1))
{var inst_400579 = (state_400609[9]);var inst_400582 = (state_400609[10]);var inst_400574 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_400575 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_400574,null));var inst_400576 = cljs.core.get_in.call(null,req,inst_400575);var inst_400577 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_400578 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_400577,null));var inst_400579__$1 = cljs.core.get_in.call(null,req,inst_400578);var inst_400580 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"campaign_ids","campaign_ids",1186837115)];var inst_400581 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_400580,null));var inst_400582__$1 = cljs.core.get_in.call(null,req,inst_400581);var inst_400583 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477),inst_400579__$1];var inst_400584 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_400583,null));var inst_400585 = [new cljs.core.Keyword(null,"campaign-ids","campaign-ids",1185347565)];var inst_400586 = [inst_400582__$1];var inst_400587 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_400585,inst_400586);var inst_400588 = foundation.app.models.fetch.call(null,foundation.test.models.line_items,new cljs.core.Keyword(null,"params","params",4313443576),inst_400584,new cljs.core.Keyword(null,"query-params","query-params",1080249757),inst_400587);var state_400609__$1 = (function (){var statearr_400612 = state_400609;(statearr_400612[9] = inst_400579__$1);
(statearr_400612[10] = inst_400582__$1);
(statearr_400612[11] = inst_400576);
return statearr_400612;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_400609__$1,2,inst_400588);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_400616 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_400616[0] = state_machine__12118__auto__);
(statearr_400616[1] = 1);
return statearr_400616;
});
var state_machine__12118__auto____1 = (function (state_400609){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_400609);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e400617){if((e400617 instanceof Object))
{var ex__12121__auto__ = e400617;var statearr_400618_400620 = state_400609;(statearr_400618_400620[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_400609);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e400617;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__400621 = state_400609;
state_400609 = G__400621;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_400609){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_400609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_400619 = f__12188__auto__.call(null);(statearr_400619[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_400619;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/promoted_accounts"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_400652){var state_val_400653 = (state_400652[1]);if((state_val_400653 === 3))
{var inst_400633 = (state_400652[7]);var inst_400640 = (state_400652[2]);var inst_400641 = cljs.core.first.call(null,inst_400633);var inst_400642 = foundation.test.services.init.call(null,foundation.test.models.promoted_accounts,inst_400641,inst_400640);var inst_400643 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_400644 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_400645 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_400644,null));var inst_400646 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_400645,inst_400633];var inst_400647 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_400643,inst_400646);var inst_400648 = [inst_400647];var inst_400649 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_400648,null));var inst_400650 = cljs.core.into.call(null,inst_400642,inst_400649);var state_400652__$1 = state_400652;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_400652__$1,inst_400650);
} else
{if((state_val_400653 === 2))
{var inst_400633 = (state_400652[7]);var inst_400633__$1 = (state_400652[2]);var inst_400634 = cljs.core.first.call(null,inst_400633__$1);var inst_400635 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_400636 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_400634);var inst_400637 = [cljs.core.str("/stats"),cljs.core.str(inst_400635),cljs.core.str("/"),cljs.core.str(inst_400636)].join('');var inst_400638 = foundation.test.services.get_stats.call(null,inst_400637,inst_400634,foundation.test.models.promoted_account_stats);var state_400652__$1 = (function (){var statearr_400654 = state_400652;(statearr_400654[7] = inst_400633__$1);
return statearr_400654;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_400652__$1,3,inst_400638);
} else
{if((state_val_400653 === 1))
{var inst_400622 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_400623 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_400622,null));var inst_400624 = cljs.core.get_in.call(null,req,inst_400623);var inst_400625 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"line_item_id","line_item_id",4537110510)];var inst_400626 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_400625,null));var inst_400627 = cljs.core.get_in.call(null,req,inst_400626);var inst_400628 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477),new cljs.core.Keyword(null,"line_item_id","line_item_id",4537110510)];var inst_400629 = [inst_400624,inst_400627];var inst_400630 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_400628,inst_400629);var inst_400631 = foundation.app.models.fetch.call(null,foundation.test.models.promoted_accounts,new cljs.core.Keyword(null,"params","params",4313443576),inst_400630);var state_400652__$1 = state_400652;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_400652__$1,2,inst_400631);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_400658 = [null,null,null,null,null,null,null,null];(statearr_400658[0] = state_machine__12118__auto__);
(statearr_400658[1] = 1);
return statearr_400658;
});
var state_machine__12118__auto____1 = (function (state_400652){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_400652);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e400659){if((e400659 instanceof Object))
{var ex__12121__auto__ = e400659;var statearr_400660_400662 = state_400652;(statearr_400660_400662[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_400652);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e400659;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__400663 = state_400652;
state_400652 = G__400663;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_400652){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_400652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_400661 = f__12188__auto__.call(null);(statearr_400661[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_400661;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/promoted_accounts/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_400698){var state_val_400699 = (state_400698[1]);if((state_val_400699 === 3))
{var inst_400679 = (state_400698[7]);var inst_400682 = (state_400698[8]);var inst_400687 = (state_400698[2]);var inst_400688 = foundation.test.services.init.call(null,foundation.test.models.promoted_accounts,inst_400682,inst_400687);var inst_400689 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_400690 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_400691 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_400690,null));var inst_400692 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_400691,inst_400679];var inst_400693 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_400689,inst_400692);var inst_400694 = [inst_400693];var inst_400695 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_400694,null));var inst_400696 = cljs.core.into.call(null,inst_400688,inst_400695);var state_400698__$1 = state_400698;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_400698__$1,inst_400696);
} else
{if((state_val_400699 === 2))
{var inst_400673 = (state_400698[9]);var inst_400670 = (state_400698[10]);var inst_400679 = (state_400698[7]);var inst_400667 = (state_400698[11]);var inst_400679__$1 = (state_400698[2]);var inst_400680 = (function (){var models = inst_400679__$1;var line_item_id = inst_400673;var account_id = inst_400670;var id = inst_400667;return ((function (models,line_item_id,account_id,id,inst_400673,inst_400670,inst_400679,inst_400667,inst_400679__$1,state_val_400699){
return (function (p1__400664_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__400664_SHARP_),id);
});
;})(models,line_item_id,account_id,id,inst_400673,inst_400670,inst_400679,inst_400667,inst_400679__$1,state_val_400699))
})();var inst_400681 = cljs.core.set.call(null,inst_400679__$1);var inst_400682 = clojure.set.select.call(null,inst_400680,inst_400681);var inst_400683 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_400684 = [cljs.core.str("/stats"),cljs.core.str(inst_400683)].join('');var inst_400685 = foundation.test.services.get_stats.call(null,inst_400684,cljs.core.PersistentHashMap.EMPTY,foundation.test.models.promoted_account_stats);var state_400698__$1 = (function (){var statearr_400700 = state_400698;(statearr_400700[7] = inst_400679__$1);
(statearr_400700[8] = inst_400682);
return statearr_400700;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_400698__$1,3,inst_400685);
} else
{if((state_val_400699 === 1))
{var inst_400673 = (state_400698[9]);var inst_400670 = (state_400698[10]);var inst_400665 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_400666 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_400665,null));var inst_400667 = cljs.core.get_in.call(null,req,inst_400666);var inst_400668 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_400669 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_400668,null));var inst_400670__$1 = cljs.core.get_in.call(null,req,inst_400669);var inst_400671 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"line_item_id","line_item_id",4537110510)];var inst_400672 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_400671,null));var inst_400673__$1 = cljs.core.get_in.call(null,req,inst_400672);var inst_400674 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477),new cljs.core.Keyword(null,"line_item_id","line_item_id",4537110510)];var inst_400675 = [inst_400670__$1,inst_400673__$1];var inst_400676 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_400674,inst_400675);var inst_400677 = foundation.app.models.fetch.call(null,foundation.test.models.promoted_accounts,new cljs.core.Keyword(null,"params","params",4313443576),inst_400676);var state_400698__$1 = (function (){var statearr_400701 = state_400698;(statearr_400701[9] = inst_400673__$1);
(statearr_400701[10] = inst_400670__$1);
(statearr_400701[11] = inst_400667);
return statearr_400701;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_400698__$1,2,inst_400677);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_400705 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_400705[0] = state_machine__12118__auto__);
(statearr_400705[1] = 1);
return statearr_400705;
});
var state_machine__12118__auto____1 = (function (state_400698){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_400698);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e400706){if((e400706 instanceof Object))
{var ex__12121__auto__ = e400706;var statearr_400707_400709 = state_400698;(statearr_400707_400709[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_400698);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e400706;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__400710 = state_400698;
state_400698 = G__400710;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_400698){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_400698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_400708 = f__12188__auto__.call(null);(statearr_400708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_400708;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/promoted_tweets"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_400741){var state_val_400742 = (state_400741[1]);if((state_val_400742 === 3))
{var inst_400722 = (state_400741[7]);var inst_400729 = (state_400741[2]);var inst_400730 = cljs.core.first.call(null,inst_400722);var inst_400731 = foundation.test.services.init.call(null,foundation.test.models.promoted_tweets,inst_400730,inst_400729);var inst_400732 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_400733 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_400734 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_400733,null));var inst_400735 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_400734,inst_400722];var inst_400736 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_400732,inst_400735);var inst_400737 = [inst_400736];var inst_400738 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_400737,null));var inst_400739 = cljs.core.into.call(null,inst_400731,inst_400738);var state_400741__$1 = state_400741;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_400741__$1,inst_400739);
} else
{if((state_val_400742 === 2))
{var inst_400722 = (state_400741[7]);var inst_400722__$1 = (state_400741[2]);var inst_400723 = cljs.core.first.call(null,inst_400722__$1);var inst_400724 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_400725 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_400723);var inst_400726 = [cljs.core.str("/stats"),cljs.core.str(inst_400724),cljs.core.str("/"),cljs.core.str(inst_400725)].join('');var inst_400727 = foundation.test.services.get_stats.call(null,inst_400726,inst_400723,foundation.test.models.promoted_tweet_stats);var state_400741__$1 = (function (){var statearr_400743 = state_400741;(statearr_400743[7] = inst_400722__$1);
return statearr_400743;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_400741__$1,3,inst_400727);
} else
{if((state_val_400742 === 1))
{var inst_400711 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_400712 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_400711,null));var inst_400713 = cljs.core.get_in.call(null,req,inst_400712);var inst_400714 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"line_item_id","line_item_id",4537110510)];var inst_400715 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_400714,null));var inst_400716 = cljs.core.get_in.call(null,req,inst_400715);var inst_400717 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477),new cljs.core.Keyword(null,"line_item_id","line_item_id",4537110510)];var inst_400718 = [inst_400713,inst_400716];var inst_400719 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_400717,inst_400718);var inst_400720 = foundation.app.models.fetch.call(null,foundation.test.models.promoted_tweets,new cljs.core.Keyword(null,"params","params",4313443576),inst_400719);var state_400741__$1 = state_400741;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_400741__$1,2,inst_400720);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_400747 = [null,null,null,null,null,null,null,null];(statearr_400747[0] = state_machine__12118__auto__);
(statearr_400747[1] = 1);
return statearr_400747;
});
var state_machine__12118__auto____1 = (function (state_400741){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_400741);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e400748){if((e400748 instanceof Object))
{var ex__12121__auto__ = e400748;var statearr_400749_400751 = state_400741;(statearr_400749_400751[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_400741);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e400748;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__400752 = state_400741;
state_400741 = G__400752;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_400741){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_400741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_400750 = f__12188__auto__.call(null);(statearr_400750[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_400750;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/promoted_tweets/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_400787){var state_val_400788 = (state_400787[1]);if((state_val_400788 === 3))
{var inst_400771 = (state_400787[7]);var inst_400768 = (state_400787[8]);var inst_400776 = (state_400787[2]);var inst_400777 = foundation.test.services.init.call(null,foundation.test.models.promoted_tweets,inst_400771,inst_400776);var inst_400778 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_400779 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_400780 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_400779,null));var inst_400781 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_400780,inst_400768];var inst_400782 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_400778,inst_400781);var inst_400783 = [inst_400782];var inst_400784 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_400783,null));var inst_400785 = cljs.core.into.call(null,inst_400777,inst_400784);var state_400787__$1 = state_400787;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_400787__$1,inst_400785);
} else
{if((state_val_400788 === 2))
{var inst_400756 = (state_400787[9]);var inst_400762 = (state_400787[10]);var inst_400759 = (state_400787[11]);var inst_400768 = (state_400787[8]);var inst_400768__$1 = (state_400787[2]);var inst_400769 = (function (){var models = inst_400768__$1;var line_item_id = inst_400762;var account_id = inst_400759;var id = inst_400756;return ((function (models,line_item_id,account_id,id,inst_400756,inst_400762,inst_400759,inst_400768,inst_400768__$1,state_val_400788){
return (function (p1__400753_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__400753_SHARP_),id);
});
;})(models,line_item_id,account_id,id,inst_400756,inst_400762,inst_400759,inst_400768,inst_400768__$1,state_val_400788))
})();var inst_400770 = cljs.core.set.call(null,inst_400768__$1);var inst_400771 = clojure.set.select.call(null,inst_400769,inst_400770);var inst_400772 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_400773 = [cljs.core.str("/stats"),cljs.core.str(inst_400772)].join('');var inst_400774 = foundation.test.services.get_stats.call(null,inst_400773,cljs.core.PersistentHashMap.EMPTY,foundation.test.models.promoted_tweet_stats);var state_400787__$1 = (function (){var statearr_400789 = state_400787;(statearr_400789[7] = inst_400771);
(statearr_400789[8] = inst_400768__$1);
return statearr_400789;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_400787__$1,3,inst_400774);
} else
{if((state_val_400788 === 1))
{var inst_400762 = (state_400787[10]);var inst_400759 = (state_400787[11]);var inst_400754 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_400755 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_400754,null));var inst_400756 = cljs.core.get_in.call(null,req,inst_400755);var inst_400757 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_400758 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_400757,null));var inst_400759__$1 = cljs.core.get_in.call(null,req,inst_400758);var inst_400760 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"line_item_id","line_item_id",4537110510)];var inst_400761 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_400760,null));var inst_400762__$1 = cljs.core.get_in.call(null,req,inst_400761);var inst_400763 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477),new cljs.core.Keyword(null,"line_item_id","line_item_id",4537110510)];var inst_400764 = [inst_400759__$1,inst_400762__$1];var inst_400765 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_400763,inst_400764);var inst_400766 = foundation.app.models.fetch.call(null,foundation.test.models.promoted_tweets,new cljs.core.Keyword(null,"params","params",4313443576),inst_400765);var state_400787__$1 = (function (){var statearr_400790 = state_400787;(statearr_400790[9] = inst_400756);
(statearr_400790[10] = inst_400762__$1);
(statearr_400790[11] = inst_400759__$1);
return statearr_400790;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_400787__$1,2,inst_400766);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_400794 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_400794[0] = state_machine__12118__auto__);
(statearr_400794[1] = 1);
return statearr_400794;
});
var state_machine__12118__auto____1 = (function (state_400787){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_400787);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e400795){if((e400795 instanceof Object))
{var ex__12121__auto__ = e400795;var statearr_400796_400798 = state_400787;(statearr_400796_400798[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_400787);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e400795;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__400799 = state_400787;
state_400787 = G__400799;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_400787){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_400787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_400797 = f__12188__auto__.call(null);(statearr_400797[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_400797;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));

//# sourceMappingURL=services.js.map