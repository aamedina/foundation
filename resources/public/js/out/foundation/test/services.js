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
foundation.test.services.init = (function init(resource,model,stats,total_stats){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"init","init",1017141378),foundation.app.message.path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null),new cljs.core.Keyword(null,"model","model",1117974171),model,new cljs.core.Keyword(null,"stats","stats",1123661841),stats,new cljs.core.Keyword(null,"total-stats","total-stats",3484558408),total_stats], true, false),new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"init","init",1017141378),foundation.app.message.path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null),new cljs.core.Keyword(null,"resource","resource",672839552),resource], true, false)], null);
});
foundation.test.services.get_route = (function get_route(path,params){return foundation.test.routes.app_routes.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"uri","uri",1014020318),path,new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"get","get",1014006472),new cljs.core.Keyword(null,"params","params",4313443576),params], null));
});
/**
* @param {...*} var_args
*/
foundation.test.services.get_stats = (function() { 
var get_stats__delegate = function (path,params,model,p__417901){var map__417903 = p__417901;var map__417903__$1 = ((cljs.core.seq_QMARK_.call(null,map__417903))?cljs.core.apply.call(null,cljs.core.hash_map,map__417903):map__417903);var granularity = cljs.core.get.call(null,map__417903__$1,new cljs.core.Keyword(null,"granularity","granularity",2833735872),"HOUR");return foundation.test.routes.app_routes.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",1014020318),path,new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"get","get",1014006472),new cljs.core.Keyword(null,"params","params",4313443576),params,new cljs.core.Keyword(null,"model","model",1117974171),model,new cljs.core.Keyword(null,"query-params","query-params",1080249757),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start-time","start-time",3689550026),foundation.test.models.start_time.call(null,foundation.test.models.campaign_stats),new cljs.core.Keyword(null,"end-time","end-time",2693279729),foundation.test.models.end_time.call(null,foundation.test.models.campaign_stats),new cljs.core.Keyword(null,"granularity","granularity",2833735872),granularity], null)], null));
};
var get_stats = function (path,params,model,var_args){
var p__417901 = null;if (arguments.length > 3) {
  p__417901 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return get_stats__delegate.call(this,path,params,model,p__417901);};
get_stats.cljs$lang$maxFixedArity = 3;
get_stats.cljs$lang$applyTo = (function (arglist__417904){
var path = cljs.core.first(arglist__417904);
arglist__417904 = cljs.core.next(arglist__417904);
var params = cljs.core.first(arglist__417904);
arglist__417904 = cljs.core.next(arglist__417904);
var model = cljs.core.first(arglist__417904);
var p__417901 = cljs.core.rest(arglist__417904);
return get_stats__delegate(path,params,model,p__417901);
});
get_stats.cljs$core$IFn$_invoke$arity$variadic = get_stats__delegate;
return get_stats;
})()
;
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/"], null),(function (req){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"navigate","navigate",3116398819),foundation.app.message.path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"router","router",4383738555)], null),new cljs.core.Keyword(null,"to-path","to-path",4107943849),"/accounts"], true, false)], null);
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_417932){var state_val_417933 = (state_417932[1]);if((state_val_417933 === 4))
{var inst_417914 = (state_417932[7]);var inst_417907 = (state_417932[8]);var inst_417920 = (state_417932[2]);var inst_417921 = cljs.core.first.call(null,inst_417907);var inst_417922 = foundation.test.services.init.call(null,foundation.test.models.accounts,inst_417921,inst_417914,inst_417920);var inst_417923 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_417924 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_417925 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_417924,null));var inst_417926 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_417925,inst_417907];var inst_417927 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_417923,inst_417926);var inst_417928 = [inst_417927];var inst_417929 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_417928,null));var inst_417930 = cljs.core.into.call(null,inst_417922,inst_417929);var state_417932__$1 = state_417932;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_417932__$1,inst_417930);
} else
{if((state_val_417933 === 3))
{var inst_417908 = (state_417932[9]);var inst_417914 = (state_417932[2]);var inst_417915 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_417916 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_417908);var inst_417917 = [cljs.core.str("/stats"),cljs.core.str(inst_417915),cljs.core.str("/"),cljs.core.str(inst_417916)].join('');var inst_417918 = foundation.test.services.get_stats.call(null,inst_417917,inst_417908,foundation.test.models.account_stats,new cljs.core.Keyword(null,"granularity","granularity",2833735872),"TOTAL");var state_417932__$1 = (function (){var statearr_417934 = state_417932;(statearr_417934[7] = inst_417914);
return statearr_417934;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_417932__$1,4,inst_417918);
} else
{if((state_val_417933 === 2))
{var inst_417907 = (state_417932[8]);var inst_417908 = (state_417932[9]);var inst_417907__$1 = (state_417932[2]);var inst_417908__$1 = cljs.core.first.call(null,inst_417907__$1);var inst_417909 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_417910 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_417908__$1);var inst_417911 = [cljs.core.str("/stats"),cljs.core.str(inst_417909),cljs.core.str("/"),cljs.core.str(inst_417910)].join('');var inst_417912 = foundation.test.services.get_stats.call(null,inst_417911,inst_417908__$1,foundation.test.models.account_stats);var state_417932__$1 = (function (){var statearr_417935 = state_417932;(statearr_417935[8] = inst_417907__$1);
(statearr_417935[9] = inst_417908__$1);
return statearr_417935;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_417932__$1,3,inst_417912);
} else
{if((state_val_417933 === 1))
{var inst_417905 = foundation.app.models.fetch.call(null,foundation.test.models.accounts);var state_417932__$1 = state_417932;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_417932__$1,2,inst_417905);
} else
{return null;
}
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_417939 = [null,null,null,null,null,null,null,null,null,null];(statearr_417939[0] = state_machine__12118__auto__);
(statearr_417939[1] = 1);
return statearr_417939;
});
var state_machine__12118__auto____1 = (function (state_417932){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_417932);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e417940){if((e417940 instanceof Object))
{var ex__12121__auto__ = e417940;var statearr_417941_417943 = state_417932;(statearr_417941_417943[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_417932);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e417940;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__417944 = state_417932;
state_417932 = G__417944;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_417932){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_417932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_417942 = f__12188__auto__.call(null);(statearr_417942[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_417942;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_417976){var state_val_417977 = (state_417976[1]);if((state_val_417977 === 4))
{var inst_417954 = (state_417976[7]);var inst_417951 = (state_417976[8]);var inst_417959 = (state_417976[9]);var inst_417965 = (state_417976[2]);var inst_417966 = foundation.test.services.init.call(null,foundation.test.models.accounts,inst_417954,inst_417959,inst_417965);var inst_417967 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_417968 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_417969 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_417968,null));var inst_417970 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_417969,inst_417951];var inst_417971 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_417967,inst_417970);var inst_417972 = [inst_417971];var inst_417973 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_417972,null));var inst_417974 = cljs.core.into.call(null,inst_417966,inst_417973);var state_417976__$1 = state_417976;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_417976__$1,inst_417974);
} else
{if((state_val_417977 === 3))
{var inst_417954 = (state_417976[7]);var inst_417959 = (state_417976[2]);var inst_417960 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_417961 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_417954);var inst_417962 = [cljs.core.str("/stats"),cljs.core.str(inst_417960),cljs.core.str("/"),cljs.core.str(inst_417961)].join('');var inst_417963 = foundation.test.services.get_stats.call(null,inst_417962,inst_417954,foundation.test.models.account_stats,new cljs.core.Keyword(null,"granularity","granularity",2833735872),"TOTAL");var state_417976__$1 = (function (){var statearr_417978 = state_417976;(statearr_417978[9] = inst_417959);
return statearr_417978;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_417976__$1,4,inst_417963);
} else
{if((state_val_417977 === 2))
{var inst_417948 = (state_417976[10]);var inst_417951 = (state_417976[8]);var inst_417951__$1 = (state_417976[2]);var inst_417952 = (function (){var models = inst_417951__$1;var id = inst_417948;return ((function (models,id,inst_417948,inst_417951,inst_417951__$1,state_val_417977){
return (function (p1__417945_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__417945_SHARP_),id);
});
;})(models,id,inst_417948,inst_417951,inst_417951__$1,state_val_417977))
})();var inst_417953 = cljs.core.set.call(null,inst_417951__$1);var inst_417954 = clojure.set.select.call(null,inst_417952,inst_417953);var inst_417955 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_417956 = [cljs.core.str("/stats"),cljs.core.str(inst_417955)].join('');var inst_417957 = foundation.test.services.get_stats.call(null,inst_417956,cljs.core.PersistentHashMap.EMPTY,foundation.test.models.account_stats);var state_417976__$1 = (function (){var statearr_417979 = state_417976;(statearr_417979[7] = inst_417954);
(statearr_417979[8] = inst_417951__$1);
return statearr_417979;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_417976__$1,3,inst_417957);
} else
{if((state_val_417977 === 1))
{var inst_417946 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_417947 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_417946,null));var inst_417948 = cljs.core.get_in.call(null,req,inst_417947);var inst_417949 = foundation.app.models.fetch.call(null,foundation.test.models.accounts);var state_417976__$1 = (function (){var statearr_417980 = state_417976;(statearr_417980[10] = inst_417948);
return statearr_417980;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_417976__$1,2,inst_417949);
} else
{return null;
}
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_417984 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_417984[0] = state_machine__12118__auto__);
(statearr_417984[1] = 1);
return statearr_417984;
});
var state_machine__12118__auto____1 = (function (state_417976){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_417976);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e417985){if((e417985 instanceof Object))
{var ex__12121__auto__ = e417985;var statearr_417986_417988 = state_417976;(statearr_417986_417988[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_417976);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e417985;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__417989 = state_417976;
state_417976 = G__417989;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_417976){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_417976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_417987 = f__12188__auto__.call(null);(statearr_417987[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_417987;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/campaigns"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_418023){var state_val_418024 = (state_418023[1]);if((state_val_418024 === 4))
{var inst_417998 = (state_418023[7]);var inst_418005 = (state_418023[8]);var inst_418011 = (state_418023[2]);var inst_418012 = cljs.core.first.call(null,inst_417998);var inst_418013 = foundation.test.services.init.call(null,foundation.test.models.campaigns,inst_418012,inst_418005,inst_418011);var inst_418014 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_418015 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_418016 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_418015,null));var inst_418017 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_418016,inst_417998];var inst_418018 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_418014,inst_418017);var inst_418019 = [inst_418018];var inst_418020 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_418019,null));var inst_418021 = cljs.core.into.call(null,inst_418013,inst_418020);var state_418023__$1 = state_418023;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_418023__$1,inst_418021);
} else
{if((state_val_418024 === 3))
{var inst_417999 = (state_418023[9]);var inst_418005 = (state_418023[2]);var inst_418006 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_418007 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_417999);var inst_418008 = [cljs.core.str("/stats"),cljs.core.str(inst_418006),cljs.core.str("/"),cljs.core.str(inst_418007)].join('');var inst_418009 = foundation.test.services.get_stats.call(null,inst_418008,inst_417999,foundation.test.models.campaign_stats,new cljs.core.Keyword(null,"granularity","granularity",2833735872),"TOTAL");var state_418023__$1 = (function (){var statearr_418025 = state_418023;(statearr_418025[8] = inst_418005);
return statearr_418025;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_418023__$1,4,inst_418009);
} else
{if((state_val_418024 === 2))
{var inst_417999 = (state_418023[9]);var inst_417998 = (state_418023[7]);var inst_417998__$1 = (state_418023[2]);var inst_417999__$1 = cljs.core.first.call(null,inst_417998__$1);var inst_418000 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_418001 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_417999__$1);var inst_418002 = [cljs.core.str("/stats"),cljs.core.str(inst_418000),cljs.core.str("/"),cljs.core.str(inst_418001)].join('');var inst_418003 = foundation.test.services.get_stats.call(null,inst_418002,inst_417999__$1,foundation.test.models.campaign_stats);var state_418023__$1 = (function (){var statearr_418026 = state_418023;(statearr_418026[9] = inst_417999__$1);
(statearr_418026[7] = inst_417998__$1);
return statearr_418026;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_418023__$1,3,inst_418003);
} else
{if((state_val_418024 === 1))
{var inst_417990 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_417991 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_417990,null));var inst_417992 = cljs.core.get_in.call(null,req,inst_417991);var inst_417993 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_417994 = [inst_417992];var inst_417995 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_417993,inst_417994);var inst_417996 = foundation.app.models.fetch.call(null,foundation.test.models.campaigns,new cljs.core.Keyword(null,"params","params",4313443576),inst_417995);var state_418023__$1 = state_418023;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_418023__$1,2,inst_417996);
} else
{return null;
}
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_418030 = [null,null,null,null,null,null,null,null,null,null];(statearr_418030[0] = state_machine__12118__auto__);
(statearr_418030[1] = 1);
return statearr_418030;
});
var state_machine__12118__auto____1 = (function (state_418023){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_418023);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e418031){if((e418031 instanceof Object))
{var ex__12121__auto__ = e418031;var statearr_418032_418034 = state_418023;(statearr_418032_418034[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_418023);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e418031;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__418035 = state_418023;
state_418023 = G__418035;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_418023){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_418023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_418033 = f__12188__auto__.call(null);(statearr_418033[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_418033;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/campaigns/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_418073){var state_val_418074 = (state_418073[1]);if((state_val_418074 === 4))
{var inst_418051 = (state_418073[7]);var inst_418056 = (state_418073[8]);var inst_418048 = (state_418073[9]);var inst_418062 = (state_418073[2]);var inst_418063 = foundation.test.services.init.call(null,foundation.test.models.campaigns,inst_418051,inst_418056,inst_418062);var inst_418064 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_418065 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_418066 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_418065,null));var inst_418067 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_418066,inst_418048];var inst_418068 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_418064,inst_418067);var inst_418069 = [inst_418068];var inst_418070 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_418069,null));var inst_418071 = cljs.core.into.call(null,inst_418063,inst_418070);var state_418073__$1 = state_418073;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_418073__$1,inst_418071);
} else
{if((state_val_418074 === 3))
{var inst_418051 = (state_418073[7]);var inst_418056 = (state_418073[2]);var inst_418057 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_418058 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_418051);var inst_418059 = [cljs.core.str("/stats"),cljs.core.str(inst_418057),cljs.core.str("/"),cljs.core.str(inst_418058)].join('');var inst_418060 = foundation.test.services.get_stats.call(null,inst_418059,inst_418051,foundation.test.models.campaign_stats,new cljs.core.Keyword(null,"granularity","granularity",2833735872),"TOTAL");var state_418073__$1 = (function (){var statearr_418075 = state_418073;(statearr_418075[8] = inst_418056);
return statearr_418075;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_418073__$1,4,inst_418060);
} else
{if((state_val_418074 === 2))
{var inst_418039 = (state_418073[10]);var inst_418048 = (state_418073[9]);var inst_418042 = (state_418073[11]);var inst_418048__$1 = (state_418073[2]);var inst_418049 = (function (){var models = inst_418048__$1;var account_id = inst_418042;var id = inst_418039;return ((function (models,account_id,id,inst_418039,inst_418048,inst_418042,inst_418048__$1,state_val_418074){
return (function (p1__418036_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__418036_SHARP_),id);
});
;})(models,account_id,id,inst_418039,inst_418048,inst_418042,inst_418048__$1,state_val_418074))
})();var inst_418050 = cljs.core.set.call(null,inst_418048__$1);var inst_418051 = clojure.set.select.call(null,inst_418049,inst_418050);var inst_418052 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_418053 = [cljs.core.str("/stats"),cljs.core.str(inst_418052)].join('');var inst_418054 = foundation.test.services.get_stats.call(null,inst_418053,cljs.core.PersistentHashMap.EMPTY,foundation.test.models.campaign_stats);var state_418073__$1 = (function (){var statearr_418076 = state_418073;(statearr_418076[7] = inst_418051);
(statearr_418076[9] = inst_418048__$1);
return statearr_418076;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_418073__$1,3,inst_418054);
} else
{if((state_val_418074 === 1))
{var inst_418042 = (state_418073[11]);var inst_418037 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_418038 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_418037,null));var inst_418039 = cljs.core.get_in.call(null,req,inst_418038);var inst_418040 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_418041 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_418040,null));var inst_418042__$1 = cljs.core.get_in.call(null,req,inst_418041);var inst_418043 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_418044 = [inst_418042__$1];var inst_418045 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_418043,inst_418044);var inst_418046 = foundation.app.models.fetch.call(null,foundation.test.models.campaigns,new cljs.core.Keyword(null,"params","params",4313443576),inst_418045);var state_418073__$1 = (function (){var statearr_418077 = state_418073;(statearr_418077[10] = inst_418039);
(statearr_418077[11] = inst_418042__$1);
return statearr_418077;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_418073__$1,2,inst_418046);
} else
{return null;
}
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_418081 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_418081[0] = state_machine__12118__auto__);
(statearr_418081[1] = 1);
return statearr_418081;
});
var state_machine__12118__auto____1 = (function (state_418073){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_418073);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e418082){if((e418082 instanceof Object))
{var ex__12121__auto__ = e418082;var statearr_418083_418085 = state_418073;(statearr_418083_418085[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_418073);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e418082;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__418086 = state_418073;
state_418073 = G__418086;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_418073){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_418073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_418084 = f__12188__auto__.call(null);(statearr_418084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_418084;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/line_items"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_418126){var state_val_418127 = (state_418126[1]);if((state_val_418127 === 4))
{var inst_418108 = (state_418126[7]);var inst_418101 = (state_418126[8]);var inst_418114 = (state_418126[2]);var inst_418115 = cljs.core.first.call(null,inst_418101);var inst_418116 = foundation.test.services.init.call(null,foundation.test.models.line_items,inst_418115,inst_418108,inst_418114);var inst_418117 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_418118 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_418119 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_418118,null));var inst_418120 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_418119,inst_418101];var inst_418121 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_418117,inst_418120);var inst_418122 = [inst_418121];var inst_418123 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_418122,null));var inst_418124 = cljs.core.into.call(null,inst_418116,inst_418123);var state_418126__$1 = state_418126;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_418126__$1,inst_418124);
} else
{if((state_val_418127 === 3))
{var inst_418102 = (state_418126[9]);var inst_418108 = (state_418126[2]);var inst_418109 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_418110 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_418102);var inst_418111 = [cljs.core.str("/stats"),cljs.core.str(inst_418109),cljs.core.str("/"),cljs.core.str(inst_418110)].join('');var inst_418112 = foundation.test.services.get_stats.call(null,inst_418111,inst_418102,foundation.test.models.line_item_stats,new cljs.core.Keyword(null,"granularity","granularity",2833735872),"TOTAL");var state_418126__$1 = (function (){var statearr_418128 = state_418126;(statearr_418128[7] = inst_418108);
return statearr_418128;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_418126__$1,4,inst_418112);
} else
{if((state_val_418127 === 2))
{var inst_418102 = (state_418126[9]);var inst_418101 = (state_418126[8]);var inst_418101__$1 = (state_418126[2]);var inst_418102__$1 = cljs.core.first.call(null,inst_418101__$1);var inst_418103 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_418104 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_418102__$1);var inst_418105 = [cljs.core.str("/stats"),cljs.core.str(inst_418103),cljs.core.str("/"),cljs.core.str(inst_418104)].join('');var inst_418106 = foundation.test.services.get_stats.call(null,inst_418105,inst_418102__$1,foundation.test.models.line_item_stats);var state_418126__$1 = (function (){var statearr_418129 = state_418126;(statearr_418129[9] = inst_418102__$1);
(statearr_418129[8] = inst_418101__$1);
return statearr_418129;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_418126__$1,3,inst_418106);
} else
{if((state_val_418127 === 1))
{var inst_418087 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_418088 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_418087,null));var inst_418089 = cljs.core.get_in.call(null,req,inst_418088);var inst_418090 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"campaign_ids","campaign_ids",1186837115)];var inst_418091 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_418090,null));var inst_418092 = cljs.core.get_in.call(null,req,inst_418091);var inst_418093 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_418094 = [inst_418089];var inst_418095 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_418093,inst_418094);var inst_418096 = [new cljs.core.Keyword(null,"campaign-ids","campaign-ids",1185347565)];var inst_418097 = [inst_418092];var inst_418098 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_418096,inst_418097);var inst_418099 = foundation.app.models.fetch.call(null,foundation.test.models.line_items,new cljs.core.Keyword(null,"params","params",4313443576),inst_418095,new cljs.core.Keyword(null,"query-params","query-params",1080249757),inst_418098);var state_418126__$1 = state_418126;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_418126__$1,2,inst_418099);
} else
{return null;
}
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_418133 = [null,null,null,null,null,null,null,null,null,null];(statearr_418133[0] = state_machine__12118__auto__);
(statearr_418133[1] = 1);
return statearr_418133;
});
var state_machine__12118__auto____1 = (function (state_418126){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_418126);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e418134){if((e418134 instanceof Object))
{var ex__12121__auto__ = e418134;var statearr_418135_418137 = state_418126;(statearr_418135_418137[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_418126);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e418134;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__418138 = state_418126;
state_418126 = G__418138;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_418126){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_418126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_418136 = f__12188__auto__.call(null);(statearr_418136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_418136;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/line_items/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_418181){var state_val_418182 = (state_418181[1]);if((state_val_418182 === 4))
{var inst_418156 = (state_418181[7]);var inst_418159 = (state_418181[8]);var inst_418164 = (state_418181[9]);var inst_418170 = (state_418181[2]);var inst_418171 = foundation.test.services.init.call(null,foundation.test.models.line_items,inst_418159,inst_418164,inst_418170);var inst_418172 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_418173 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_418174 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_418173,null));var inst_418175 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_418174,inst_418156];var inst_418176 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_418172,inst_418175);var inst_418177 = [inst_418176];var inst_418178 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_418177,null));var inst_418179 = cljs.core.into.call(null,inst_418171,inst_418178);var state_418181__$1 = state_418181;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_418181__$1,inst_418179);
} else
{if((state_val_418182 === 3))
{var inst_418159 = (state_418181[8]);var inst_418164 = (state_418181[2]);var inst_418165 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_418166 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_418159);var inst_418167 = [cljs.core.str("/stats"),cljs.core.str(inst_418165),cljs.core.str("/"),cljs.core.str(inst_418166)].join('');var inst_418168 = foundation.test.services.get_stats.call(null,inst_418167,inst_418159,foundation.test.models.line_item_stats,new cljs.core.Keyword(null,"granularity","granularity",2833735872),"TOTAL");var state_418181__$1 = (function (){var statearr_418183 = state_418181;(statearr_418183[9] = inst_418164);
return statearr_418183;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_418181__$1,4,inst_418168);
} else
{if((state_val_418182 === 2))
{var inst_418142 = (state_418181[10]);var inst_418156 = (state_418181[7]);var inst_418145 = (state_418181[11]);var inst_418148 = (state_418181[12]);var inst_418156__$1 = (state_418181[2]);var inst_418157 = (function (){var models = inst_418156__$1;var campaign_id = inst_418148;var account_id = inst_418145;var id = inst_418142;return ((function (models,campaign_id,account_id,id,inst_418142,inst_418156,inst_418145,inst_418148,inst_418156__$1,state_val_418182){
return (function (p1__418139_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__418139_SHARP_),id);
});
;})(models,campaign_id,account_id,id,inst_418142,inst_418156,inst_418145,inst_418148,inst_418156__$1,state_val_418182))
})();var inst_418158 = cljs.core.set.call(null,inst_418156__$1);var inst_418159 = clojure.set.select.call(null,inst_418157,inst_418158);var inst_418160 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_418161 = [cljs.core.str("/stats"),cljs.core.str(inst_418160)].join('');var inst_418162 = foundation.test.services.get_stats.call(null,inst_418161,cljs.core.PersistentHashMap.EMPTY,foundation.test.models.line_item_stats);var state_418181__$1 = (function (){var statearr_418184 = state_418181;(statearr_418184[7] = inst_418156__$1);
(statearr_418184[8] = inst_418159);
return statearr_418184;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_418181__$1,3,inst_418162);
} else
{if((state_val_418182 === 1))
{var inst_418145 = (state_418181[11]);var inst_418148 = (state_418181[12]);var inst_418140 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_418141 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_418140,null));var inst_418142 = cljs.core.get_in.call(null,req,inst_418141);var inst_418143 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_418144 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_418143,null));var inst_418145__$1 = cljs.core.get_in.call(null,req,inst_418144);var inst_418146 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"campaign_ids","campaign_ids",1186837115)];var inst_418147 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_418146,null));var inst_418148__$1 = cljs.core.get_in.call(null,req,inst_418147);var inst_418149 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477),inst_418145__$1];var inst_418150 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_418149,null));var inst_418151 = [new cljs.core.Keyword(null,"campaign-ids","campaign-ids",1185347565)];var inst_418152 = [inst_418148__$1];var inst_418153 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_418151,inst_418152);var inst_418154 = foundation.app.models.fetch.call(null,foundation.test.models.line_items,new cljs.core.Keyword(null,"params","params",4313443576),inst_418150,new cljs.core.Keyword(null,"query-params","query-params",1080249757),inst_418153);var state_418181__$1 = (function (){var statearr_418185 = state_418181;(statearr_418185[10] = inst_418142);
(statearr_418185[11] = inst_418145__$1);
(statearr_418185[12] = inst_418148__$1);
return statearr_418185;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_418181__$1,2,inst_418154);
} else
{return null;
}
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_418189 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_418189[0] = state_machine__12118__auto__);
(statearr_418189[1] = 1);
return statearr_418189;
});
var state_machine__12118__auto____1 = (function (state_418181){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_418181);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e418190){if((e418190 instanceof Object))
{var ex__12121__auto__ = e418190;var statearr_418191_418193 = state_418181;(statearr_418191_418193[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_418181);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e418190;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__418194 = state_418181;
state_418181 = G__418194;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_418181){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_418181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_418192 = f__12188__auto__.call(null);(statearr_418192[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_418192;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/promoted_accounts"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_418231){var state_val_418232 = (state_418231[1]);if((state_val_418232 === 4))
{var inst_418206 = (state_418231[7]);var inst_418213 = (state_418231[8]);var inst_418219 = (state_418231[2]);var inst_418220 = cljs.core.first.call(null,inst_418206);var inst_418221 = foundation.test.services.init.call(null,foundation.test.models.promoted_accounts,inst_418220,inst_418213,inst_418219);var inst_418222 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_418223 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_418224 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_418223,null));var inst_418225 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_418224,inst_418206];var inst_418226 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_418222,inst_418225);var inst_418227 = [inst_418226];var inst_418228 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_418227,null));var inst_418229 = cljs.core.into.call(null,inst_418221,inst_418228);var state_418231__$1 = state_418231;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_418231__$1,inst_418229);
} else
{if((state_val_418232 === 3))
{var inst_418207 = (state_418231[9]);var inst_418213 = (state_418231[2]);var inst_418214 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_418215 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_418207);var inst_418216 = [cljs.core.str("/stats"),cljs.core.str(inst_418214),cljs.core.str("/"),cljs.core.str(inst_418215)].join('');var inst_418217 = foundation.test.services.get_stats.call(null,inst_418216,inst_418207,foundation.test.models.promoted_account_stats,new cljs.core.Keyword(null,"granularity","granularity",2833735872),"TOTAL");var state_418231__$1 = (function (){var statearr_418233 = state_418231;(statearr_418233[8] = inst_418213);
return statearr_418233;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_418231__$1,4,inst_418217);
} else
{if((state_val_418232 === 2))
{var inst_418206 = (state_418231[7]);var inst_418207 = (state_418231[9]);var inst_418206__$1 = (state_418231[2]);var inst_418207__$1 = cljs.core.first.call(null,inst_418206__$1);var inst_418208 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_418209 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_418207__$1);var inst_418210 = [cljs.core.str("/stats"),cljs.core.str(inst_418208),cljs.core.str("/"),cljs.core.str(inst_418209)].join('');var inst_418211 = foundation.test.services.get_stats.call(null,inst_418210,inst_418207__$1,foundation.test.models.promoted_account_stats);var state_418231__$1 = (function (){var statearr_418234 = state_418231;(statearr_418234[7] = inst_418206__$1);
(statearr_418234[9] = inst_418207__$1);
return statearr_418234;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_418231__$1,3,inst_418211);
} else
{if((state_val_418232 === 1))
{var inst_418195 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_418196 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_418195,null));var inst_418197 = cljs.core.get_in.call(null,req,inst_418196);var inst_418198 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"line_item_id","line_item_id",4537110510)];var inst_418199 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_418198,null));var inst_418200 = cljs.core.get_in.call(null,req,inst_418199);var inst_418201 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477),new cljs.core.Keyword(null,"line_item_id","line_item_id",4537110510)];var inst_418202 = [inst_418197,inst_418200];var inst_418203 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_418201,inst_418202);var inst_418204 = foundation.app.models.fetch.call(null,foundation.test.models.promoted_accounts,new cljs.core.Keyword(null,"params","params",4313443576),inst_418203);var state_418231__$1 = state_418231;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_418231__$1,2,inst_418204);
} else
{return null;
}
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_418238 = [null,null,null,null,null,null,null,null,null,null];(statearr_418238[0] = state_machine__12118__auto__);
(statearr_418238[1] = 1);
return statearr_418238;
});
var state_machine__12118__auto____1 = (function (state_418231){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_418231);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e418239){if((e418239 instanceof Object))
{var ex__12121__auto__ = e418239;var statearr_418240_418242 = state_418231;(statearr_418240_418242[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_418231);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e418239;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__418243 = state_418231;
state_418231 = G__418243;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_418231){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_418231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_418241 = f__12188__auto__.call(null);(statearr_418241[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_418241;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/promoted_accounts/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_418284){var state_val_418285 = (state_418284[1]);if((state_val_418285 === 4))
{var inst_418262 = (state_418284[7]);var inst_418259 = (state_418284[8]);var inst_418267 = (state_418284[9]);var inst_418273 = (state_418284[2]);var inst_418274 = foundation.test.services.init.call(null,foundation.test.models.promoted_accounts,inst_418262,inst_418267,inst_418273);var inst_418275 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_418276 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_418277 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_418276,null));var inst_418278 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_418277,inst_418259];var inst_418279 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_418275,inst_418278);var inst_418280 = [inst_418279];var inst_418281 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_418280,null));var inst_418282 = cljs.core.into.call(null,inst_418274,inst_418281);var state_418284__$1 = state_418284;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_418284__$1,inst_418282);
} else
{if((state_val_418285 === 3))
{var inst_418262 = (state_418284[7]);var inst_418267 = (state_418284[2]);var inst_418268 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_418269 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_418262);var inst_418270 = [cljs.core.str("/stats"),cljs.core.str(inst_418268),cljs.core.str("/"),cljs.core.str(inst_418269)].join('');var inst_418271 = foundation.test.services.get_stats.call(null,inst_418270,inst_418262,foundation.test.models.promoted_account_stats,new cljs.core.Keyword(null,"granularity","granularity",2833735872),"TOTAL");var state_418284__$1 = (function (){var statearr_418286 = state_418284;(statearr_418286[9] = inst_418267);
return statearr_418286;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_418284__$1,4,inst_418271);
} else
{if((state_val_418285 === 2))
{var inst_418250 = (state_418284[10]);var inst_418253 = (state_418284[11]);var inst_418247 = (state_418284[12]);var inst_418259 = (state_418284[8]);var inst_418259__$1 = (state_418284[2]);var inst_418260 = (function (){var models = inst_418259__$1;var line_item_id = inst_418253;var account_id = inst_418250;var id = inst_418247;return ((function (models,line_item_id,account_id,id,inst_418250,inst_418253,inst_418247,inst_418259,inst_418259__$1,state_val_418285){
return (function (p1__418244_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__418244_SHARP_),id);
});
;})(models,line_item_id,account_id,id,inst_418250,inst_418253,inst_418247,inst_418259,inst_418259__$1,state_val_418285))
})();var inst_418261 = cljs.core.set.call(null,inst_418259__$1);var inst_418262 = clojure.set.select.call(null,inst_418260,inst_418261);var inst_418263 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_418264 = [cljs.core.str("/stats"),cljs.core.str(inst_418263)].join('');var inst_418265 = foundation.test.services.get_stats.call(null,inst_418264,cljs.core.PersistentHashMap.EMPTY,foundation.test.models.promoted_account_stats);var state_418284__$1 = (function (){var statearr_418287 = state_418284;(statearr_418287[7] = inst_418262);
(statearr_418287[8] = inst_418259__$1);
return statearr_418287;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_418284__$1,3,inst_418265);
} else
{if((state_val_418285 === 1))
{var inst_418250 = (state_418284[10]);var inst_418253 = (state_418284[11]);var inst_418245 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_418246 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_418245,null));var inst_418247 = cljs.core.get_in.call(null,req,inst_418246);var inst_418248 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_418249 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_418248,null));var inst_418250__$1 = cljs.core.get_in.call(null,req,inst_418249);var inst_418251 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"line_item_id","line_item_id",4537110510)];var inst_418252 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_418251,null));var inst_418253__$1 = cljs.core.get_in.call(null,req,inst_418252);var inst_418254 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477),new cljs.core.Keyword(null,"line_item_id","line_item_id",4537110510)];var inst_418255 = [inst_418250__$1,inst_418253__$1];var inst_418256 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_418254,inst_418255);var inst_418257 = foundation.app.models.fetch.call(null,foundation.test.models.promoted_accounts,new cljs.core.Keyword(null,"params","params",4313443576),inst_418256);var state_418284__$1 = (function (){var statearr_418288 = state_418284;(statearr_418288[10] = inst_418250__$1);
(statearr_418288[11] = inst_418253__$1);
(statearr_418288[12] = inst_418247);
return statearr_418288;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_418284__$1,2,inst_418257);
} else
{return null;
}
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_418292 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_418292[0] = state_machine__12118__auto__);
(statearr_418292[1] = 1);
return statearr_418292;
});
var state_machine__12118__auto____1 = (function (state_418284){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_418284);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e418293){if((e418293 instanceof Object))
{var ex__12121__auto__ = e418293;var statearr_418294_418296 = state_418284;(statearr_418294_418296[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_418284);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e418293;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__418297 = state_418284;
state_418284 = G__418297;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_418284){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_418284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_418295 = f__12188__auto__.call(null);(statearr_418295[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_418295;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/promoted_tweets"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_418334){var state_val_418335 = (state_418334[1]);if((state_val_418335 === 4))
{var inst_418316 = (state_418334[7]);var inst_418309 = (state_418334[8]);var inst_418322 = (state_418334[2]);var inst_418323 = cljs.core.first.call(null,inst_418309);var inst_418324 = foundation.test.services.init.call(null,foundation.test.models.promoted_tweets,inst_418323,inst_418316,inst_418322);var inst_418325 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_418326 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_418327 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_418326,null));var inst_418328 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_418327,inst_418309];var inst_418329 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_418325,inst_418328);var inst_418330 = [inst_418329];var inst_418331 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_418330,null));var inst_418332 = cljs.core.into.call(null,inst_418324,inst_418331);var state_418334__$1 = state_418334;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_418334__$1,inst_418332);
} else
{if((state_val_418335 === 3))
{var inst_418310 = (state_418334[9]);var inst_418316 = (state_418334[2]);var inst_418317 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_418318 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_418310);var inst_418319 = [cljs.core.str("/stats"),cljs.core.str(inst_418317),cljs.core.str("/"),cljs.core.str(inst_418318)].join('');var inst_418320 = foundation.test.services.get_stats.call(null,inst_418319,inst_418310,foundation.test.models.promoted_tweet_stats,new cljs.core.Keyword(null,"granularity","granularity",2833735872),"TOTAL");var state_418334__$1 = (function (){var statearr_418336 = state_418334;(statearr_418336[7] = inst_418316);
return statearr_418336;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_418334__$1,4,inst_418320);
} else
{if((state_val_418335 === 2))
{var inst_418310 = (state_418334[9]);var inst_418309 = (state_418334[8]);var inst_418309__$1 = (state_418334[2]);var inst_418310__$1 = cljs.core.first.call(null,inst_418309__$1);var inst_418311 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_418312 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_418310__$1);var inst_418313 = [cljs.core.str("/stats"),cljs.core.str(inst_418311),cljs.core.str("/"),cljs.core.str(inst_418312)].join('');var inst_418314 = foundation.test.services.get_stats.call(null,inst_418313,inst_418310__$1,foundation.test.models.promoted_tweet_stats);var state_418334__$1 = (function (){var statearr_418337 = state_418334;(statearr_418337[9] = inst_418310__$1);
(statearr_418337[8] = inst_418309__$1);
return statearr_418337;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_418334__$1,3,inst_418314);
} else
{if((state_val_418335 === 1))
{var inst_418298 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_418299 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_418298,null));var inst_418300 = cljs.core.get_in.call(null,req,inst_418299);var inst_418301 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"line_item_id","line_item_id",4537110510)];var inst_418302 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_418301,null));var inst_418303 = cljs.core.get_in.call(null,req,inst_418302);var inst_418304 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477),new cljs.core.Keyword(null,"line_item_id","line_item_id",4537110510)];var inst_418305 = [inst_418300,inst_418303];var inst_418306 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_418304,inst_418305);var inst_418307 = foundation.app.models.fetch.call(null,foundation.test.models.promoted_tweets,new cljs.core.Keyword(null,"params","params",4313443576),inst_418306);var state_418334__$1 = state_418334;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_418334__$1,2,inst_418307);
} else
{return null;
}
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_418341 = [null,null,null,null,null,null,null,null,null,null];(statearr_418341[0] = state_machine__12118__auto__);
(statearr_418341[1] = 1);
return statearr_418341;
});
var state_machine__12118__auto____1 = (function (state_418334){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_418334);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e418342){if((e418342 instanceof Object))
{var ex__12121__auto__ = e418342;var statearr_418343_418345 = state_418334;(statearr_418343_418345[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_418334);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e418342;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__418346 = state_418334;
state_418334 = G__418346;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_418334){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_418334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_418344 = f__12188__auto__.call(null);(statearr_418344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_418344;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/promoted_tweets/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_418387){var state_val_418388 = (state_418387[1]);if((state_val_418388 === 4))
{var inst_418370 = (state_418387[7]);var inst_418365 = (state_418387[8]);var inst_418362 = (state_418387[9]);var inst_418376 = (state_418387[2]);var inst_418377 = foundation.test.services.init.call(null,foundation.test.models.promoted_tweets,inst_418365,inst_418370,inst_418376);var inst_418378 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_418379 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_418380 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_418379,null));var inst_418381 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_418380,inst_418362];var inst_418382 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_418378,inst_418381);var inst_418383 = [inst_418382];var inst_418384 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_418383,null));var inst_418385 = cljs.core.into.call(null,inst_418377,inst_418384);var state_418387__$1 = state_418387;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_418387__$1,inst_418385);
} else
{if((state_val_418388 === 3))
{var inst_418365 = (state_418387[8]);var inst_418370 = (state_418387[2]);var inst_418371 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_418372 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_418365);var inst_418373 = [cljs.core.str("/stats"),cljs.core.str(inst_418371),cljs.core.str("/"),cljs.core.str(inst_418372)].join('');var inst_418374 = foundation.test.services.get_stats.call(null,inst_418373,inst_418365,foundation.test.models.promoted_tweet_stats,new cljs.core.Keyword(null,"granularity","granularity",2833735872),"TOTAL");var state_418387__$1 = (function (){var statearr_418389 = state_418387;(statearr_418389[7] = inst_418370);
return statearr_418389;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_418387__$1,4,inst_418374);
} else
{if((state_val_418388 === 2))
{var inst_418356 = (state_418387[10]);var inst_418362 = (state_418387[9]);var inst_418350 = (state_418387[11]);var inst_418353 = (state_418387[12]);var inst_418362__$1 = (state_418387[2]);var inst_418363 = (function (){var models = inst_418362__$1;var line_item_id = inst_418356;var account_id = inst_418353;var id = inst_418350;return ((function (models,line_item_id,account_id,id,inst_418356,inst_418362,inst_418350,inst_418353,inst_418362__$1,state_val_418388){
return (function (p1__418347_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__418347_SHARP_),id);
});
;})(models,line_item_id,account_id,id,inst_418356,inst_418362,inst_418350,inst_418353,inst_418362__$1,state_val_418388))
})();var inst_418364 = cljs.core.set.call(null,inst_418362__$1);var inst_418365 = clojure.set.select.call(null,inst_418363,inst_418364);var inst_418366 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_418367 = [cljs.core.str("/stats"),cljs.core.str(inst_418366)].join('');var inst_418368 = foundation.test.services.get_stats.call(null,inst_418367,cljs.core.PersistentHashMap.EMPTY,foundation.test.models.promoted_tweet_stats);var state_418387__$1 = (function (){var statearr_418390 = state_418387;(statearr_418390[8] = inst_418365);
(statearr_418390[9] = inst_418362__$1);
return statearr_418390;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_418387__$1,3,inst_418368);
} else
{if((state_val_418388 === 1))
{var inst_418356 = (state_418387[10]);var inst_418353 = (state_418387[12]);var inst_418348 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_418349 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_418348,null));var inst_418350 = cljs.core.get_in.call(null,req,inst_418349);var inst_418351 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_418352 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_418351,null));var inst_418353__$1 = cljs.core.get_in.call(null,req,inst_418352);var inst_418354 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"line_item_id","line_item_id",4537110510)];var inst_418355 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_418354,null));var inst_418356__$1 = cljs.core.get_in.call(null,req,inst_418355);var inst_418357 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477),new cljs.core.Keyword(null,"line_item_id","line_item_id",4537110510)];var inst_418358 = [inst_418353__$1,inst_418356__$1];var inst_418359 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_418357,inst_418358);var inst_418360 = foundation.app.models.fetch.call(null,foundation.test.models.promoted_tweets,new cljs.core.Keyword(null,"params","params",4313443576),inst_418359);var state_418387__$1 = (function (){var statearr_418391 = state_418387;(statearr_418391[10] = inst_418356__$1);
(statearr_418391[11] = inst_418350);
(statearr_418391[12] = inst_418353__$1);
return statearr_418391;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_418387__$1,2,inst_418360);
} else
{return null;
}
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_418395 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_418395[0] = state_machine__12118__auto__);
(statearr_418395[1] = 1);
return statearr_418395;
});
var state_machine__12118__auto____1 = (function (state_418387){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_418387);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e418396){if((e418396 instanceof Object))
{var ex__12121__auto__ = e418396;var statearr_418397_418399 = state_418387;(statearr_418397_418399[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_418387);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e418396;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__418400 = state_418387;
state_418387 = G__418400;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_418387){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_418387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_418398 = f__12188__auto__.call(null);(statearr_418398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_418398;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));

//# sourceMappingURL=services.js.map