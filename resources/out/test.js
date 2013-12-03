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
cljs.core.enable_console_print_BANG_.call(null);
test.api = "http://192.241.130.213:8080/user/15/ads-api";
test.accounts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",1014020321),"/accounts/:id"], null);
test.campaigns = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",1014020321),"/accounts/:account-id/campaigns/:id"], null);
test.subs_uri = (function() {
var subs_uri = null;
var subs_uri__1 = (function (model){return subs_uri.call(null,model,cljs.core.PersistentArrayMap.EMPTY);
});
var subs_uri__2 = (function (p__473048,kvs){var map__473050 = p__473048;var map__473050__$1 = ((cljs.core.seq_QMARK_.call(null,map__473050))?cljs.core.apply.call(null,cljs.core.hash_map,map__473050):map__473050);var url = cljs.core.get.call(null,map__473050__$1,new cljs.core.Keyword(null,"url","url",1014020321));var kvs__$1 = cljs.core.merge.call(null,cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.re_pattern,cljs.core.str),cljs.core.re_seq.call(null,/:[A-Za-z][\w-_]+/,url)),cljs.core.repeat.call(null,"")),kvs);return clojure.string.replace.call(null,clojure.string.replace.call(null,cljs.core.reduce.call(null,(function (p1__473046_SHARP_,p2__473047_SHARP_){return cljs.core.apply.call(null,clojure.string.replace,p1__473046_SHARP_,p2__473047_SHARP_);
}),[cljs.core.str(test.api),cljs.core.str(url)].join(''),kvs__$1),/\/$/,""),/\/\//,"/");
});
subs_uri = function(p__473048,kvs){
switch(arguments.length){
case 1:
return subs_uri__1.call(this,p__473048);
case 2:
return subs_uri__2.call(this,p__473048,kvs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subs_uri.cljs$core$IFn$_invoke$arity$1 = subs_uri__1;
subs_uri.cljs$core$IFn$_invoke$arity$2 = subs_uri__2;
return subs_uri;
})()
;
test._main = (function _main(){var c__10297__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10298__auto__ = (function (){var switch__10227__auto__ = (function (state_473090){var state_val_473091 = (state_473090[1]);if((state_val_473091 === 3))
{var inst_473088 = (state_473090[2]);var state_473090__$1 = state_473090;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_473090__$1,inst_473088);
} else
{if((state_val_473091 === 2))
{var inst_473079 = (state_473090[2]);var inst_473080 = cljs.core.first.call(null,inst_473079);var inst_473081 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_473082 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_473080);var inst_473083 = [inst_473082];var inst_473084 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_473081,inst_473083);var inst_473085 = test.subs_uri.call(null,test.campaigns,inst_473084);var inst_473086 = foundation.app.xhr.GET.call(null,inst_473085);var state_473090__$1 = state_473090;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_473090__$1,3,inst_473086);
} else
{if((state_val_473091 === 1))
{var inst_473075 = new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(test.accounts);var inst_473076 = [cljs.core.str(test.api),cljs.core.str(inst_473075)].join('');var inst_473077 = foundation.app.xhr.GET.call(null,inst_473076);var state_473090__$1 = state_473090;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_473090__$1,2,inst_473077);
} else
{return null;
}
}
}
});return ((function (switch__10227__auto__){
return (function() {
var state_machine__10228__auto__ = null;
var state_machine__10228__auto____0 = (function (){var statearr_473095 = (new Array(7));(statearr_473095[0] = state_machine__10228__auto__);
(statearr_473095[1] = 1);
return statearr_473095;
});
var state_machine__10228__auto____1 = (function (state_473090){while(true){
var ret_value__10229__auto__ = (function (){try{while(true){
var result__10230__auto__ = switch__10227__auto__.call(null,state_473090);if(cljs.core.keyword_identical_QMARK_.call(null,result__10230__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10230__auto__;
}
break;
}
}catch (e473096){if((e473096 instanceof Object))
{var ex__10231__auto__ = e473096;var statearr_473097_473099 = state_473090;(statearr_473097_473099[5] = ex__10231__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_473090);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e473096;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10229__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__473100 = state_473090;
state_473090 = G__473100;
continue;
}
} else
{return ret_value__10229__auto__;
}
break;
}
});
state_machine__10228__auto__ = function(state_473090){
switch(arguments.length){
case 0:
return state_machine__10228__auto____0.call(this);
case 1:
return state_machine__10228__auto____1.call(this,state_473090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10228__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10228__auto____0;
state_machine__10228__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10228__auto____1;
return state_machine__10228__auto__;
})()
;})(switch__10227__auto__))
})();var state__10299__auto__ = (function (){var statearr_473098 = f__10298__auto__.call(null);(statearr_473098[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10297__auto__);
return statearr_473098;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10299__auto__);
}));
return c__10297__auto__;
});
goog.exportSymbol('test._main', test._main);

//# sourceMappingURL=test.js.map