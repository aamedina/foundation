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
var subs_uri__2 = (function (p__26385,kvs){var map__26387 = p__26385;var map__26387__$1 = ((cljs.core.seq_QMARK_.call(null,map__26387))?cljs.core.apply.call(null,cljs.core.hash_map,map__26387):map__26387);var url = cljs.core.get.call(null,map__26387__$1,new cljs.core.Keyword(null,"url","url",1014020321));var kvs__$1 = cljs.core.merge.call(null,cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.re_pattern,cljs.core.str),cljs.core.re_seq.call(null,/:[A-Za-z][\w-_]+/,url)),cljs.core.repeat.call(null,"")),kvs);return clojure.string.replace.call(null,clojure.string.replace.call(null,cljs.core.reduce.call(null,(function (p1__26383_SHARP_,p2__26384_SHARP_){return cljs.core.apply.call(null,clojure.string.replace,p1__26383_SHARP_,p2__26384_SHARP_);
}),[cljs.core.str(test.api),cljs.core.str(url)].join(''),kvs__$1),/\/$/,""),/\/\//,"/");
});
subs_uri = function(p__26385,kvs){
switch(arguments.length){
case 1:
return subs_uri__1.call(this,p__26385);
case 2:
return subs_uri__2.call(this,p__26385,kvs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subs_uri.cljs$core$IFn$_invoke$arity$1 = subs_uri__1;
subs_uri.cljs$core$IFn$_invoke$arity$2 = subs_uri__2;
return subs_uri;
})()
;
test._main = (function _main(){var c__10343__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10344__auto__ = (function (){var switch__10273__auto__ = (function (state_26427){var state_val_26428 = (state_26427[1]);if((state_val_26428 === 3))
{var inst_26425 = (state_26427[2]);var state_26427__$1 = state_26427;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26427__$1,inst_26425);
} else
{if((state_val_26428 === 2))
{var inst_26416 = (state_26427[2]);var inst_26417 = cljs.core.first.call(null,inst_26416);var inst_26418 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_26419 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_26417);var inst_26420 = [inst_26419];var inst_26421 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_26418,inst_26420);var inst_26422 = test.subs_uri.call(null,test.campaigns,inst_26421);var inst_26423 = foundation.app.xhr.GET.call(null,inst_26422);var state_26427__$1 = state_26427;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26427__$1,3,inst_26423);
} else
{if((state_val_26428 === 1))
{var inst_26412 = new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(test.accounts);var inst_26413 = [cljs.core.str(test.api),cljs.core.str(inst_26412)].join('');var inst_26414 = foundation.app.xhr.GET.call(null,inst_26413);var state_26427__$1 = state_26427;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26427__$1,2,inst_26414);
} else
{return null;
}
}
}
});return ((function (switch__10273__auto__){
return (function() {
var state_machine__10274__auto__ = null;
var state_machine__10274__auto____0 = (function (){var statearr_26432 = (new Array(7));(statearr_26432[0] = state_machine__10274__auto__);
(statearr_26432[1] = 1);
return statearr_26432;
});
var state_machine__10274__auto____1 = (function (state_26427){while(true){
var ret_value__10275__auto__ = (function (){try{while(true){
var result__10276__auto__ = switch__10273__auto__.call(null,state_26427);if(cljs.core.keyword_identical_QMARK_.call(null,result__10276__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10276__auto__;
}
break;
}
}catch (e26433){if((e26433 instanceof Object))
{var ex__10277__auto__ = e26433;var statearr_26434_26436 = state_26427;(statearr_26434_26436[5] = ex__10277__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26427);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26433;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10275__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26437 = state_26427;
state_26427 = G__26437;
continue;
}
} else
{return ret_value__10275__auto__;
}
break;
}
});
state_machine__10274__auto__ = function(state_26427){
switch(arguments.length){
case 0:
return state_machine__10274__auto____0.call(this);
case 1:
return state_machine__10274__auto____1.call(this,state_26427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10274__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10274__auto____0;
state_machine__10274__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10274__auto____1;
return state_machine__10274__auto__;
})()
;})(switch__10273__auto__))
})();var state__10345__auto__ = (function (){var statearr_26435 = f__10344__auto__.call(null);(statearr_26435[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10343__auto__);
return statearr_26435;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10345__auto__);
}));
return c__10343__auto__;
});
goog.exportSymbol('test._main', test._main);

//# sourceMappingURL=test.js.map