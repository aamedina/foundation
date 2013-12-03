// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.test.start');
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
foundation.test.start.api = "http://192.241.130.213:8080/user/15/ads-api";
foundation.test.start.accounts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",1014020321),"/accounts/:id"], null);
foundation.test.start.campaigns = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",1014020321),"/accounts/:account-id/campaigns/:id"], null);
foundation.test.start.subs_uri = (function() {
var subs_uri = null;
var subs_uri__1 = (function (model){return subs_uri.call(null,model,cljs.core.PersistentArrayMap.EMPTY);
});
var subs_uri__2 = (function (p__472993,kvs){var map__472995 = p__472993;var map__472995__$1 = ((cljs.core.seq_QMARK_.call(null,map__472995))?cljs.core.apply.call(null,cljs.core.hash_map,map__472995):map__472995);var url = cljs.core.get.call(null,map__472995__$1,new cljs.core.Keyword(null,"url","url",1014020321));var kvs__$1 = cljs.core.merge.call(null,cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.re_pattern,cljs.core.str),cljs.core.re_seq.call(null,/:[A-Za-z][\w-_]+/,url)),cljs.core.repeat.call(null,"")),kvs);return clojure.string.replace.call(null,clojure.string.replace.call(null,cljs.core.reduce.call(null,(function (p1__472991_SHARP_,p2__472992_SHARP_){return cljs.core.apply.call(null,clojure.string.replace,p1__472991_SHARP_,p2__472992_SHARP_);
}),[cljs.core.str(foundation.test.start.api),cljs.core.str(url)].join(''),kvs__$1),/\/$/,""),/\/\//,"/");
});
subs_uri = function(p__472993,kvs){
switch(arguments.length){
case 1:
return subs_uri__1.call(this,p__472993);
case 2:
return subs_uri__2.call(this,p__472993,kvs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subs_uri.cljs$core$IFn$_invoke$arity$1 = subs_uri__1;
subs_uri.cljs$core$IFn$_invoke$arity$2 = subs_uri__2;
return subs_uri;
})()
;
foundation.test.start._main = (function _main(){var c__10297__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10298__auto__ = (function (){var switch__10227__auto__ = (function (state_473035){var state_val_473036 = (state_473035[1]);if((state_val_473036 === 3))
{var inst_473033 = (state_473035[2]);var state_473035__$1 = state_473035;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_473035__$1,inst_473033);
} else
{if((state_val_473036 === 2))
{var inst_473024 = (state_473035[2]);var inst_473025 = cljs.core.first.call(null,inst_473024);var inst_473026 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_473027 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_473025);var inst_473028 = [inst_473027];var inst_473029 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_473026,inst_473028);var inst_473030 = foundation.test.start.subs_uri.call(null,foundation.test.start.campaigns,inst_473029);var inst_473031 = foundation.app.xhr.GET.call(null,inst_473030);var state_473035__$1 = state_473035;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_473035__$1,3,inst_473031);
} else
{if((state_val_473036 === 1))
{var inst_473020 = new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(foundation.test.start.accounts);var inst_473021 = [cljs.core.str(foundation.test.start.api),cljs.core.str(inst_473020)].join('');var inst_473022 = foundation.app.xhr.GET.call(null,inst_473021);var state_473035__$1 = state_473035;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_473035__$1,2,inst_473022);
} else
{return null;
}
}
}
});return ((function (switch__10227__auto__){
return (function() {
var state_machine__10228__auto__ = null;
var state_machine__10228__auto____0 = (function (){var statearr_473040 = (new Array(7));(statearr_473040[0] = state_machine__10228__auto__);
(statearr_473040[1] = 1);
return statearr_473040;
});
var state_machine__10228__auto____1 = (function (state_473035){while(true){
var ret_value__10229__auto__ = (function (){try{while(true){
var result__10230__auto__ = switch__10227__auto__.call(null,state_473035);if(cljs.core.keyword_identical_QMARK_.call(null,result__10230__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10230__auto__;
}
break;
}
}catch (e473041){if((e473041 instanceof Object))
{var ex__10231__auto__ = e473041;var statearr_473042_473044 = state_473035;(statearr_473042_473044[5] = ex__10231__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_473035);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e473041;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10229__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__473045 = state_473035;
state_473035 = G__473045;
continue;
}
} else
{return ret_value__10229__auto__;
}
break;
}
});
state_machine__10228__auto__ = function(state_473035){
switch(arguments.length){
case 0:
return state_machine__10228__auto____0.call(this);
case 1:
return state_machine__10228__auto____1.call(this,state_473035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10228__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10228__auto____0;
state_machine__10228__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10228__auto____1;
return state_machine__10228__auto__;
})()
;})(switch__10227__auto__))
})();var state__10299__auto__ = (function (){var statearr_473043 = f__10298__auto__.call(null);(statearr_473043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10297__auto__);
return statearr_473043;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10299__auto__);
}));
return c__10297__auto__;
});
goog.exportSymbol('foundation.test.start._main', foundation.test.start._main);

//# sourceMappingURL=start.js.map