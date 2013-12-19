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
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_209862){var state_val_209863 = (state_209862[1]);if((state_val_209863 === 3))
{var inst_209843 = (state_209862[7]);var inst_209850 = (state_209862[2]);var inst_209851 = cljs.core.first.call(null,inst_209843);var inst_209852 = foundation.test.services.init.call(null,foundation.test.models.accounts,inst_209851,inst_209850);var inst_209853 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_209854 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_209855 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_209854,null));var inst_209856 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_209855,inst_209843];var inst_209857 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_209853,inst_209856);var inst_209858 = [inst_209857];var inst_209859 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_209858,null));var inst_209860 = cljs.core.into.call(null,inst_209852,inst_209859);var state_209862__$1 = state_209862;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_209862__$1,inst_209860);
} else
{if((state_val_209863 === 2))
{var inst_209843 = (state_209862[7]);var inst_209843__$1 = (state_209862[2]);var inst_209844 = cljs.core.first.call(null,inst_209843__$1);var inst_209845 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_209846 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_209844);var inst_209847 = [cljs.core.str("/stats"),cljs.core.str(inst_209845),cljs.core.str("/"),cljs.core.str(inst_209846)].join('');var inst_209848 = foundation.test.services.get_stats.call(null,inst_209847,inst_209844,foundation.test.models.account_stats);var state_209862__$1 = (function (){var statearr_209864 = state_209862;(statearr_209864[7] = inst_209843__$1);
return statearr_209864;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_209862__$1,3,inst_209848);
} else
{if((state_val_209863 === 1))
{var inst_209841 = foundation.app.models.fetch.call(null,foundation.test.models.accounts);var state_209862__$1 = state_209862;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_209862__$1,2,inst_209841);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_209868 = [null,null,null,null,null,null,null,null];(statearr_209868[0] = state_machine__12118__auto__);
(statearr_209868[1] = 1);
return statearr_209868;
});
var state_machine__12118__auto____1 = (function (state_209862){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_209862);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e209869){if((e209869 instanceof Object))
{var ex__12121__auto__ = e209869;var statearr_209870_209872 = state_209862;(statearr_209870_209872[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_209862);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e209869;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__209873 = state_209862;
state_209862 = G__209873;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_209862){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_209862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_209871 = f__12188__auto__.call(null);(statearr_209871[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_209871;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_209899){var state_val_209900 = (state_209899[1]);if((state_val_209900 === 3))
{var inst_209880 = (state_209899[7]);var inst_209883 = (state_209899[8]);var inst_209888 = (state_209899[2]);var inst_209889 = foundation.test.services.init.call(null,foundation.test.models.accounts,inst_209883,inst_209888);var inst_209890 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_209891 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_209892 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_209891,null));var inst_209893 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_209892,inst_209880];var inst_209894 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_209890,inst_209893);var inst_209895 = [inst_209894];var inst_209896 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_209895,null));var inst_209897 = cljs.core.into.call(null,inst_209889,inst_209896);var state_209899__$1 = state_209899;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_209899__$1,inst_209897);
} else
{if((state_val_209900 === 2))
{var inst_209877 = (state_209899[9]);var inst_209880 = (state_209899[7]);var inst_209880__$1 = (state_209899[2]);var inst_209881 = (function (){var models = inst_209880__$1;var id = inst_209877;return ((function (models,id,inst_209877,inst_209880,inst_209880__$1,state_val_209900){
return (function (p1__209874_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__209874_SHARP_),id);
});
;})(models,id,inst_209877,inst_209880,inst_209880__$1,state_val_209900))
})();var inst_209882 = cljs.core.set.call(null,inst_209880__$1);var inst_209883 = clojure.set.select.call(null,inst_209881,inst_209882);var inst_209884 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_209885 = [cljs.core.str("/stats"),cljs.core.str(inst_209884)].join('');var inst_209886 = foundation.test.services.get_stats.call(null,inst_209885,cljs.core.PersistentHashMap.EMPTY,foundation.test.models.account_stats);var state_209899__$1 = (function (){var statearr_209901 = state_209899;(statearr_209901[7] = inst_209880__$1);
(statearr_209901[8] = inst_209883);
return statearr_209901;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_209899__$1,3,inst_209886);
} else
{if((state_val_209900 === 1))
{var inst_209875 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_209876 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_209875,null));var inst_209877 = cljs.core.get_in.call(null,req,inst_209876);var inst_209878 = foundation.app.models.fetch.call(null,foundation.test.models.accounts);var state_209899__$1 = (function (){var statearr_209902 = state_209899;(statearr_209902[9] = inst_209877);
return statearr_209902;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_209899__$1,2,inst_209878);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_209906 = [null,null,null,null,null,null,null,null,null,null];(statearr_209906[0] = state_machine__12118__auto__);
(statearr_209906[1] = 1);
return statearr_209906;
});
var state_machine__12118__auto____1 = (function (state_209899){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_209899);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e209907){if((e209907 instanceof Object))
{var ex__12121__auto__ = e209907;var statearr_209908_209910 = state_209899;(statearr_209908_209910[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_209899);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e209907;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__209911 = state_209899;
state_209899 = G__209911;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_209899){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_209899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_209909 = f__12188__auto__.call(null);(statearr_209909[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_209909;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/campaigns"], null),(function (req){cljs.core.println.call(null,req);
var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_209933){var state_val_209934 = (state_209933[1]);if((state_val_209934 === 3))
{var inst_209914 = (state_209933[7]);var inst_209921 = (state_209933[2]);var inst_209922 = cljs.core.first.call(null,inst_209914);var inst_209923 = foundation.test.services.init.call(null,foundation.test.models.campaigns,inst_209922,inst_209921);var inst_209924 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_209925 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_209926 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_209925,null));var inst_209927 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_209926,inst_209914];var inst_209928 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_209924,inst_209927);var inst_209929 = [inst_209928];var inst_209930 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_209929,null));var inst_209931 = cljs.core.into.call(null,inst_209923,inst_209930);var state_209933__$1 = state_209933;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_209933__$1,inst_209931);
} else
{if((state_val_209934 === 2))
{var inst_209914 = (state_209933[7]);var inst_209914__$1 = (state_209933[2]);var inst_209915 = cljs.core.first.call(null,inst_209914__$1);var inst_209916 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_209917 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_209915);var inst_209918 = [cljs.core.str("/stats"),cljs.core.str(inst_209916),cljs.core.str("/"),cljs.core.str(inst_209917)].join('');var inst_209919 = foundation.test.services.get_stats.call(null,inst_209918,inst_209915,foundation.test.models.campaign_stats);var state_209933__$1 = (function (){var statearr_209935 = state_209933;(statearr_209935[7] = inst_209914__$1);
return statearr_209935;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_209933__$1,3,inst_209919);
} else
{if((state_val_209934 === 1))
{var inst_209912 = foundation.app.models.fetch.call(null,foundation.test.models.campaigns);var state_209933__$1 = state_209933;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_209933__$1,2,inst_209912);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_209939 = [null,null,null,null,null,null,null,null];(statearr_209939[0] = state_machine__12118__auto__);
(statearr_209939[1] = 1);
return statearr_209939;
});
var state_machine__12118__auto____1 = (function (state_209933){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_209933);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e209940){if((e209940 instanceof Object))
{var ex__12121__auto__ = e209940;var statearr_209941_209943 = state_209933;(statearr_209941_209943[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_209933);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e209940;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__209944 = state_209933;
state_209933 = G__209944;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_209933){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_209933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_209942 = f__12188__auto__.call(null);(statearr_209942[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_209942;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/campaigns/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_209970){var state_val_209971 = (state_209970[1]);if((state_val_209971 === 3))
{var inst_209954 = (state_209970[7]);var inst_209951 = (state_209970[8]);var inst_209959 = (state_209970[2]);var inst_209960 = foundation.test.services.init.call(null,foundation.test.models.campaigns,inst_209954,inst_209959);var inst_209961 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_209962 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_209963 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_209962,null));var inst_209964 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_209963,inst_209951];var inst_209965 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_209961,inst_209964);var inst_209966 = [inst_209965];var inst_209967 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_209966,null));var inst_209968 = cljs.core.into.call(null,inst_209960,inst_209967);var state_209970__$1 = state_209970;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_209970__$1,inst_209968);
} else
{if((state_val_209971 === 2))
{var inst_209948 = (state_209970[9]);var inst_209951 = (state_209970[8]);var inst_209951__$1 = (state_209970[2]);var inst_209952 = (function (){var models = inst_209951__$1;var id = inst_209948;return ((function (models,id,inst_209948,inst_209951,inst_209951__$1,state_val_209971){
return (function (p1__209945_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__209945_SHARP_),id);
});
;})(models,id,inst_209948,inst_209951,inst_209951__$1,state_val_209971))
})();var inst_209953 = cljs.core.set.call(null,inst_209951__$1);var inst_209954 = clojure.set.select.call(null,inst_209952,inst_209953);var inst_209955 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_209956 = [cljs.core.str("/stats"),cljs.core.str(inst_209955)].join('');var inst_209957 = foundation.test.services.get_stats.call(null,inst_209956,cljs.core.PersistentHashMap.EMPTY,foundation.test.models.campaign_stats);var state_209970__$1 = (function (){var statearr_209972 = state_209970;(statearr_209972[7] = inst_209954);
(statearr_209972[8] = inst_209951__$1);
return statearr_209972;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_209970__$1,3,inst_209957);
} else
{if((state_val_209971 === 1))
{var inst_209946 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_209947 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_209946,null));var inst_209948 = cljs.core.get_in.call(null,req,inst_209947);var inst_209949 = foundation.app.models.fetch.call(null,foundation.test.models.campaigns);var state_209970__$1 = (function (){var statearr_209973 = state_209970;(statearr_209973[9] = inst_209948);
return statearr_209973;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_209970__$1,2,inst_209949);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_209977 = [null,null,null,null,null,null,null,null,null,null];(statearr_209977[0] = state_machine__12118__auto__);
(statearr_209977[1] = 1);
return statearr_209977;
});
var state_machine__12118__auto____1 = (function (state_209970){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_209970);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e209978){if((e209978 instanceof Object))
{var ex__12121__auto__ = e209978;var statearr_209979_209981 = state_209970;(statearr_209979_209981[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_209970);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e209978;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__209982 = state_209970;
state_209970 = G__209982;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_209970){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_209970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_209980 = f__12188__auto__.call(null);(statearr_209980[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_209980;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/line_items"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_210004){var state_val_210005 = (state_210004[1]);if((state_val_210005 === 3))
{var inst_209985 = (state_210004[7]);var inst_209992 = (state_210004[2]);var inst_209993 = cljs.core.first.call(null,inst_209985);var inst_209994 = foundation.test.services.init.call(null,foundation.test.models.line_items,inst_209993,inst_209992);var inst_209995 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_209996 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_209997 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_209996,null));var inst_209998 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_209997,inst_209985];var inst_209999 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_209995,inst_209998);var inst_210000 = [inst_209999];var inst_210001 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_210000,null));var inst_210002 = cljs.core.into.call(null,inst_209994,inst_210001);var state_210004__$1 = state_210004;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_210004__$1,inst_210002);
} else
{if((state_val_210005 === 2))
{var inst_209985 = (state_210004[7]);var inst_209985__$1 = (state_210004[2]);var inst_209986 = cljs.core.first.call(null,inst_209985__$1);var inst_209987 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_209988 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_209986);var inst_209989 = [cljs.core.str("/stats"),cljs.core.str(inst_209987),cljs.core.str("/"),cljs.core.str(inst_209988)].join('');var inst_209990 = foundation.test.services.get_stats.call(null,inst_209989,inst_209986,foundation.test.models.line_item_stats);var state_210004__$1 = (function (){var statearr_210006 = state_210004;(statearr_210006[7] = inst_209985__$1);
return statearr_210006;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_210004__$1,3,inst_209990);
} else
{if((state_val_210005 === 1))
{var inst_209983 = foundation.app.models.fetch.call(null,foundation.test.models.line_items);var state_210004__$1 = state_210004;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_210004__$1,2,inst_209983);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_210010 = [null,null,null,null,null,null,null,null];(statearr_210010[0] = state_machine__12118__auto__);
(statearr_210010[1] = 1);
return statearr_210010;
});
var state_machine__12118__auto____1 = (function (state_210004){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_210004);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e210011){if((e210011 instanceof Object))
{var ex__12121__auto__ = e210011;var statearr_210012_210014 = state_210004;(statearr_210012_210014[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_210004);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e210011;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__210015 = state_210004;
state_210004 = G__210015;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_210004){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_210004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_210013 = f__12188__auto__.call(null);(statearr_210013[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_210013;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/line_items/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_210041){var state_val_210042 = (state_210041[1]);if((state_val_210042 === 3))
{var inst_210025 = (state_210041[7]);var inst_210022 = (state_210041[8]);var inst_210030 = (state_210041[2]);var inst_210031 = foundation.test.services.init.call(null,foundation.test.models.line_items,inst_210025,inst_210030);var inst_210032 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_210033 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_210034 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_210033,null));var inst_210035 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_210034,inst_210022];var inst_210036 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_210032,inst_210035);var inst_210037 = [inst_210036];var inst_210038 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_210037,null));var inst_210039 = cljs.core.into.call(null,inst_210031,inst_210038);var state_210041__$1 = state_210041;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_210041__$1,inst_210039);
} else
{if((state_val_210042 === 2))
{var inst_210022 = (state_210041[8]);var inst_210019 = (state_210041[9]);var inst_210022__$1 = (state_210041[2]);var inst_210023 = (function (){var models = inst_210022__$1;var id = inst_210019;return ((function (models,id,inst_210022,inst_210019,inst_210022__$1,state_val_210042){
return (function (p1__210016_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__210016_SHARP_),id);
});
;})(models,id,inst_210022,inst_210019,inst_210022__$1,state_val_210042))
})();var inst_210024 = cljs.core.set.call(null,inst_210022__$1);var inst_210025 = clojure.set.select.call(null,inst_210023,inst_210024);var inst_210026 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_210027 = [cljs.core.str("/stats"),cljs.core.str(inst_210026)].join('');var inst_210028 = foundation.test.services.get_stats.call(null,inst_210027,cljs.core.PersistentHashMap.EMPTY,foundation.test.models.line_item_stats);var state_210041__$1 = (function (){var statearr_210043 = state_210041;(statearr_210043[7] = inst_210025);
(statearr_210043[8] = inst_210022__$1);
return statearr_210043;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_210041__$1,3,inst_210028);
} else
{if((state_val_210042 === 1))
{var inst_210017 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_210018 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_210017,null));var inst_210019 = cljs.core.get_in.call(null,req,inst_210018);var inst_210020 = foundation.app.models.fetch.call(null,foundation.test.models.line_items);var state_210041__$1 = (function (){var statearr_210044 = state_210041;(statearr_210044[9] = inst_210019);
return statearr_210044;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_210041__$1,2,inst_210020);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_210048 = [null,null,null,null,null,null,null,null,null,null];(statearr_210048[0] = state_machine__12118__auto__);
(statearr_210048[1] = 1);
return statearr_210048;
});
var state_machine__12118__auto____1 = (function (state_210041){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_210041);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e210049){if((e210049 instanceof Object))
{var ex__12121__auto__ = e210049;var statearr_210050_210052 = state_210041;(statearr_210050_210052[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_210041);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e210049;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__210053 = state_210041;
state_210041 = G__210053;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_210041){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_210041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_210051 = f__12188__auto__.call(null);(statearr_210051[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_210051;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/promoted_accounts"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_210079){var state_val_210080 = (state_210079[1]);if((state_val_210080 === 3))
{var inst_210063 = (state_210079[7]);var inst_210060 = (state_210079[8]);var inst_210068 = (state_210079[2]);var inst_210069 = foundation.test.services.init.call(null,foundation.test.models.promoted_accounts,inst_210063,inst_210068);var inst_210070 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_210071 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_210072 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_210071,null));var inst_210073 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_210072,inst_210060];var inst_210074 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_210070,inst_210073);var inst_210075 = [inst_210074];var inst_210076 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_210075,null));var inst_210077 = cljs.core.into.call(null,inst_210069,inst_210076);var state_210079__$1 = state_210079;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_210079__$1,inst_210077);
} else
{if((state_val_210080 === 2))
{var inst_210057 = (state_210079[9]);var inst_210060 = (state_210079[8]);var inst_210060__$1 = (state_210079[2]);var inst_210061 = (function (){var models = inst_210060__$1;var id = inst_210057;return ((function (models,id,inst_210057,inst_210060,inst_210060__$1,state_val_210080){
return (function (p1__210054_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__210054_SHARP_),id);
});
;})(models,id,inst_210057,inst_210060,inst_210060__$1,state_val_210080))
})();var inst_210062 = cljs.core.set.call(null,inst_210060__$1);var inst_210063 = clojure.set.select.call(null,inst_210061,inst_210062);var inst_210064 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_210065 = [cljs.core.str("/stats"),cljs.core.str(inst_210064)].join('');var inst_210066 = foundation.test.services.get_stats.call(null,inst_210065,cljs.core.PersistentHashMap.EMPTY,foundation.test.models.promoted_account_stats);var state_210079__$1 = (function (){var statearr_210081 = state_210079;(statearr_210081[7] = inst_210063);
(statearr_210081[8] = inst_210060__$1);
return statearr_210081;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_210079__$1,3,inst_210066);
} else
{if((state_val_210080 === 1))
{var inst_210055 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_210056 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_210055,null));var inst_210057 = cljs.core.get_in.call(null,req,inst_210056);var inst_210058 = foundation.app.models.fetch.call(null,foundation.test.models.promoted_accounts);var state_210079__$1 = (function (){var statearr_210082 = state_210079;(statearr_210082[9] = inst_210057);
return statearr_210082;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_210079__$1,2,inst_210058);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_210086 = [null,null,null,null,null,null,null,null,null,null];(statearr_210086[0] = state_machine__12118__auto__);
(statearr_210086[1] = 1);
return statearr_210086;
});
var state_machine__12118__auto____1 = (function (state_210079){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_210079);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e210087){if((e210087 instanceof Object))
{var ex__12121__auto__ = e210087;var statearr_210088_210090 = state_210079;(statearr_210088_210090[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_210079);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e210087;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__210091 = state_210079;
state_210079 = G__210091;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_210079){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_210079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_210089 = f__12188__auto__.call(null);(statearr_210089[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_210089;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/promoted_accounts/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_210117){var state_val_210118 = (state_210117[1]);if((state_val_210118 === 3))
{var inst_210098 = (state_210117[7]);var inst_210101 = (state_210117[8]);var inst_210106 = (state_210117[2]);var inst_210107 = foundation.test.services.init.call(null,foundation.test.models.promoted_accounts,inst_210101,inst_210106);var inst_210108 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_210109 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_210110 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_210109,null));var inst_210111 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_210110,inst_210098];var inst_210112 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_210108,inst_210111);var inst_210113 = [inst_210112];var inst_210114 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_210113,null));var inst_210115 = cljs.core.into.call(null,inst_210107,inst_210114);var state_210117__$1 = state_210117;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_210117__$1,inst_210115);
} else
{if((state_val_210118 === 2))
{var inst_210098 = (state_210117[7]);var inst_210095 = (state_210117[9]);var inst_210098__$1 = (state_210117[2]);var inst_210099 = (function (){var models = inst_210098__$1;var id = inst_210095;return ((function (models,id,inst_210098,inst_210095,inst_210098__$1,state_val_210118){
return (function (p1__210092_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__210092_SHARP_),id);
});
;})(models,id,inst_210098,inst_210095,inst_210098__$1,state_val_210118))
})();var inst_210100 = cljs.core.set.call(null,inst_210098__$1);var inst_210101 = clojure.set.select.call(null,inst_210099,inst_210100);var inst_210102 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_210103 = [cljs.core.str("/stats"),cljs.core.str(inst_210102)].join('');var inst_210104 = foundation.test.services.get_stats.call(null,inst_210103,cljs.core.PersistentHashMap.EMPTY,foundation.test.models.promoted_account_stats);var state_210117__$1 = (function (){var statearr_210119 = state_210117;(statearr_210119[7] = inst_210098__$1);
(statearr_210119[8] = inst_210101);
return statearr_210119;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_210117__$1,3,inst_210104);
} else
{if((state_val_210118 === 1))
{var inst_210093 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_210094 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_210093,null));var inst_210095 = cljs.core.get_in.call(null,req,inst_210094);var inst_210096 = foundation.app.models.fetch.call(null,foundation.test.models.promoted_accounts);var state_210117__$1 = (function (){var statearr_210120 = state_210117;(statearr_210120[9] = inst_210095);
return statearr_210120;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_210117__$1,2,inst_210096);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_210124 = [null,null,null,null,null,null,null,null,null,null];(statearr_210124[0] = state_machine__12118__auto__);
(statearr_210124[1] = 1);
return statearr_210124;
});
var state_machine__12118__auto____1 = (function (state_210117){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_210117);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e210125){if((e210125 instanceof Object))
{var ex__12121__auto__ = e210125;var statearr_210126_210128 = state_210117;(statearr_210126_210128[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_210117);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e210125;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__210129 = state_210117;
state_210117 = G__210129;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_210117){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_210117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_210127 = f__12188__auto__.call(null);(statearr_210127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_210127;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/promoted_tweets"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_210155){var state_val_210156 = (state_210155[1]);if((state_val_210156 === 3))
{var inst_210136 = (state_210155[7]);var inst_210139 = (state_210155[8]);var inst_210144 = (state_210155[2]);var inst_210145 = foundation.test.services.init.call(null,foundation.test.models.promoted_tweets,inst_210139,inst_210144);var inst_210146 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_210147 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_210148 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_210147,null));var inst_210149 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_210148,inst_210136];var inst_210150 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_210146,inst_210149);var inst_210151 = [inst_210150];var inst_210152 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_210151,null));var inst_210153 = cljs.core.into.call(null,inst_210145,inst_210152);var state_210155__$1 = state_210155;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_210155__$1,inst_210153);
} else
{if((state_val_210156 === 2))
{var inst_210136 = (state_210155[7]);var inst_210133 = (state_210155[9]);var inst_210136__$1 = (state_210155[2]);var inst_210137 = (function (){var models = inst_210136__$1;var id = inst_210133;return ((function (models,id,inst_210136,inst_210133,inst_210136__$1,state_val_210156){
return (function (p1__210130_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__210130_SHARP_),id);
});
;})(models,id,inst_210136,inst_210133,inst_210136__$1,state_val_210156))
})();var inst_210138 = cljs.core.set.call(null,inst_210136__$1);var inst_210139 = clojure.set.select.call(null,inst_210137,inst_210138);var inst_210140 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_210141 = [cljs.core.str("/stats"),cljs.core.str(inst_210140)].join('');var inst_210142 = foundation.test.services.get_stats.call(null,inst_210141,cljs.core.PersistentHashMap.EMPTY,foundation.test.models.promoted_tweet_stats);var state_210155__$1 = (function (){var statearr_210157 = state_210155;(statearr_210157[7] = inst_210136__$1);
(statearr_210157[8] = inst_210139);
return statearr_210157;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_210155__$1,3,inst_210142);
} else
{if((state_val_210156 === 1))
{var inst_210131 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_210132 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_210131,null));var inst_210133 = cljs.core.get_in.call(null,req,inst_210132);var inst_210134 = foundation.app.models.fetch.call(null,foundation.test.models.promoted_tweets);var state_210155__$1 = (function (){var statearr_210158 = state_210155;(statearr_210158[9] = inst_210133);
return statearr_210158;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_210155__$1,2,inst_210134);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_210162 = [null,null,null,null,null,null,null,null,null,null];(statearr_210162[0] = state_machine__12118__auto__);
(statearr_210162[1] = 1);
return statearr_210162;
});
var state_machine__12118__auto____1 = (function (state_210155){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_210155);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e210163){if((e210163 instanceof Object))
{var ex__12121__auto__ = e210163;var statearr_210164_210166 = state_210155;(statearr_210164_210166[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_210155);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e210163;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__210167 = state_210155;
state_210155 = G__210167;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_210155){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_210155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_210165 = f__12188__auto__.call(null);(statearr_210165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_210165;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1014006472),"/accounts/:account-id/promoted_tweets/:id"], null),(function (req){var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_210193){var state_val_210194 = (state_210193[1]);if((state_val_210194 === 3))
{var inst_210174 = (state_210193[7]);var inst_210177 = (state_210193[8]);var inst_210182 = (state_210193[2]);var inst_210183 = foundation.test.services.init.call(null,foundation.test.models.promoted_tweets,inst_210177,inst_210182);var inst_210184 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_210185 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_210186 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_210185,null));var inst_210187 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_210186,inst_210174];var inst_210188 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_210184,inst_210187);var inst_210189 = [inst_210188];var inst_210190 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_210189,null));var inst_210191 = cljs.core.into.call(null,inst_210183,inst_210190);var state_210193__$1 = state_210193;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_210193__$1,inst_210191);
} else
{if((state_val_210194 === 2))
{var inst_210174 = (state_210193[7]);var inst_210171 = (state_210193[9]);var inst_210174__$1 = (state_210193[2]);var inst_210175 = (function (){var models = inst_210174__$1;var id = inst_210171;return ((function (models,id,inst_210174,inst_210171,inst_210174__$1,state_val_210194){
return (function (p1__210168_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__210168_SHARP_),id);
});
;})(models,id,inst_210174,inst_210171,inst_210174__$1,state_val_210194))
})();var inst_210176 = cljs.core.set.call(null,inst_210174__$1);var inst_210177 = clojure.set.select.call(null,inst_210175,inst_210176);var inst_210178 = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req);var inst_210179 = [cljs.core.str("/stats"),cljs.core.str(inst_210178)].join('');var inst_210180 = foundation.test.services.get_stats.call(null,inst_210179,cljs.core.PersistentHashMap.EMPTY,foundation.test.models.promoted_tweet_stats);var state_210193__$1 = (function (){var statearr_210195 = state_210193;(statearr_210195[7] = inst_210174__$1);
(statearr_210195[8] = inst_210177);
return statearr_210195;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_210193__$1,3,inst_210180);
} else
{if((state_val_210194 === 1))
{var inst_210169 = [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)];var inst_210170 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_210169,null));var inst_210171 = cljs.core.get_in.call(null,req,inst_210170);var inst_210172 = foundation.app.models.fetch.call(null,foundation.test.models.promoted_tweets);var state_210193__$1 = (function (){var statearr_210196 = state_210193;(statearr_210196[9] = inst_210171);
return statearr_210196;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_210193__$1,2,inst_210172);
} else
{return null;
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_210200 = [null,null,null,null,null,null,null,null,null,null];(statearr_210200[0] = state_machine__12118__auto__);
(statearr_210200[1] = 1);
return statearr_210200;
});
var state_machine__12118__auto____1 = (function (state_210193){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_210193);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e210201){if((e210201 instanceof Object))
{var ex__12121__auto__ = e210201;var statearr_210202_210204 = state_210193;(statearr_210202_210204[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_210193);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e210201;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__210205 = state_210193;
state_210193 = G__210205;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_210193){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_210193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_210203 = f__12188__auto__.call(null);(statearr_210203[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_210203;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));

//# sourceMappingURL=services.js.map