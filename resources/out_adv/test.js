// Compiled by ClojureScript 0.0-2080
goog.provide('test');
goog.require('cljs.core');
goog.require('clojure.data');
goog.require('cljs.core.async');
goog.require('foundation.app');
goog.require('cemerick.cljs.test');
goog.require('clojure.data');
goog.require('foundation.app.xhr');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('foundation.app');
goog.require('clojure.string');
goog.require('clojure.browser.repl');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('foundation.app.xhr');
goog.require('cemerick.cljs.test');
cljs.core.enable_console_print_BANG_();
test.api = "http://192.241.130.213:8080/user/15/ads-api";
test.accounts = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$400,"/accounts/:id"], null);
test.campaigns = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$400,"/accounts/:account-id/campaigns/:id"], null);
test.subs_uri = (function() {
var subs_uri = null;
var subs_uri__1 = (function (model){return subs_uri.cljs$core$IFn$_invoke$arity$2(model,cljs.core.PersistentArrayMap.EMPTY);
});
var subs_uri__2 = (function (p__49031,kvs){var map__49033 = p__49031;var map__49033__$1 = ((cljs.core.seq_QMARK_(map__49033))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49033):map__49033);var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49033__$1,cljs.core.constant$keyword$400);var kvs__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.re_pattern,cljs.core.str),cljs.core.re_seq(/:[A-Za-z][\w-_]+/,url)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("")),kvs], 0));return clojure.string.replace(clojure.string.replace(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__49029_SHARP_,p2__49030_SHARP_){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clojure.string.replace,p1__49029_SHARP_,p2__49030_SHARP_);
}),[cljs.core.str(test.api),cljs.core.str(url)].join(''),kvs__$1),/\/$/,""),/\/\//,"/");
});
subs_uri = function(p__49031,kvs){
switch(arguments.length){
case 1:
return subs_uri__1.call(this,p__49031);
case 2:
return subs_uri__2.call(this,p__49031,kvs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subs_uri.cljs$core$IFn$_invoke$arity$1 = subs_uri__1;
subs_uri.cljs$core$IFn$_invoke$arity$2 = subs_uri__2;
return subs_uri;
})()
;
test._main = (function _main(){var c__13963__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__13964__auto__ = (function (){var switch__13893__auto__ = (function (state_49073){var state_val_49074 = (state_49073[1]);if((state_val_49074 === 3))
{var inst_49071 = (state_49073[2]);var state_49073__$1 = state_49073;return cljs.core.async.impl.ioc_helpers.return_chan(state_49073__$1,inst_49071);
} else
{if((state_val_49074 === 2))
{var inst_49062 = (state_49073[2]);var inst_49063 = cljs.core.first(inst_49062);var inst_49064 = [cljs.core.constant$keyword$401];var inst_49065 = cljs.core.constant$keyword$402.cljs$core$IFn$_invoke$arity$1(inst_49063);var inst_49066 = [inst_49065];var inst_49067 = (cljs.core.PersistentHashMap.fromArrays.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentHashMap.fromArrays.cljs$core$IFn$_invoke$arity$2(inst_49064,inst_49066) : cljs.core.PersistentHashMap.fromArrays.call(null,inst_49064,inst_49066));var inst_49068 = test.subs_uri.cljs$core$IFn$_invoke$arity$2(test.campaigns,inst_49067);var inst_49069 = foundation.app.xhr.GET(inst_49068);var state_49073__$1 = state_49073;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49073__$1,3,inst_49069);
} else
{if((state_val_49074 === 1))
{var inst_49058 = cljs.core.constant$keyword$400.cljs$core$IFn$_invoke$arity$1(test.accounts);var inst_49059 = [cljs.core.str(test.api),cljs.core.str(inst_49058)].join('');var inst_49060 = foundation.app.xhr.GET(inst_49059);var state_49073__$1 = state_49073;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49073__$1,2,inst_49060);
} else
{return null;
}
}
}
});return ((function (switch__13893__auto__){
return (function() {
var state_machine__13894__auto__ = null;
var state_machine__13894__auto____0 = (function (){var statearr_49078 = (new Array(7));(statearr_49078[0] = state_machine__13894__auto__);
(statearr_49078[1] = 1);
return statearr_49078;
});
var state_machine__13894__auto____1 = (function (state_49073){while(true){
var ret_value__13895__auto__ = (function (){try{while(true){
var result__13896__auto__ = switch__13893__auto__(state_49073);if(cljs.core.keyword_identical_QMARK_(result__13896__auto__,cljs.core.constant$keyword$285))
{{
continue;
}
} else
{return result__13896__auto__;
}
break;
}
}catch (e49079){if((e49079 instanceof Object))
{var ex__13897__auto__ = e49079;var statearr_49080_49082 = state_49073;(statearr_49080_49082[5] = ex__13897__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_49073);
return cljs.core.constant$keyword$285;
} else
{if(cljs.core.constant$keyword$274)
{throw e49079;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__13895__auto__,cljs.core.constant$keyword$285))
{{
var G__49083 = state_49073;
state_49073 = G__49083;
continue;
}
} else
{return ret_value__13895__auto__;
}
break;
}
});
state_machine__13894__auto__ = function(state_49073){
switch(arguments.length){
case 0:
return state_machine__13894__auto____0.call(this);
case 1:
return state_machine__13894__auto____1.call(this,state_49073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13894__auto____0;
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13894__auto____1;
return state_machine__13894__auto__;
})()
;})(switch__13893__auto__))
})();var state__13965__auto__ = (function (){var statearr_49081 = (f__13964__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13964__auto__.cljs$core$IFn$_invoke$arity$0() : f__13964__auto__.call(null));(statearr_49081[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13963__auto__);
return statearr_49081;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13965__auto__);
}));
return c__13963__auto__;
});
goog.exportSymbol('test._main', test._main);
