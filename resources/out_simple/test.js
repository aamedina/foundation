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
var subs_uri__2 = (function (p__35491,kvs){var map__35493 = p__35491;var map__35493__$1 = ((cljs.core.seq_QMARK_.call(null,map__35493))?cljs.core.apply.call(null,cljs.core.hash_map,map__35493):map__35493);var url = cljs.core.get.call(null,map__35493__$1,new cljs.core.Keyword(null,"url","url",1014020321));var kvs__$1 = cljs.core.merge.call(null,cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.re_pattern,cljs.core.str),cljs.core.re_seq.call(null,/:[A-Za-z][\w-_]+/,url)),cljs.core.repeat.call(null,"")),kvs);return clojure.string.replace.call(null,clojure.string.replace.call(null,cljs.core.reduce.call(null,(function (p1__35489_SHARP_,p2__35490_SHARP_){return cljs.core.apply.call(null,clojure.string.replace,p1__35489_SHARP_,p2__35490_SHARP_);
}),[cljs.core.str(test.api),cljs.core.str(url)].join(''),kvs__$1),/\/$/,""),/\/\//,"/");
});
subs_uri = function(p__35491,kvs){
switch(arguments.length){
case 1:
return subs_uri__1.call(this,p__35491);
case 2:
return subs_uri__2.call(this,p__35491,kvs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subs_uri.cljs$core$IFn$_invoke$arity$1 = subs_uri__1;
subs_uri.cljs$core$IFn$_invoke$arity$2 = subs_uri__2;
return subs_uri;
})()
;
test._main = (function _main(){var c__13963__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13964__auto__ = (function (){var switch__13893__auto__ = (function (state_35533){var state_val_35534 = (state_35533[1]);if((state_val_35534 === 3))
{var inst_35531 = (state_35533[2]);var state_35533__$1 = state_35533;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35533__$1,inst_35531);
} else
{if((state_val_35534 === 2))
{var inst_35522 = (state_35533[2]);var inst_35523 = cljs.core.first.call(null,inst_35522);var inst_35524 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_35525 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_35523);var inst_35526 = [inst_35525];var inst_35527 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_35524,inst_35526);var inst_35528 = test.subs_uri.call(null,test.campaigns,inst_35527);var inst_35529 = foundation.app.xhr.GET.call(null,inst_35528);var state_35533__$1 = state_35533;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35533__$1,3,inst_35529);
} else
{if((state_val_35534 === 1))
{var inst_35518 = new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(test.accounts);var inst_35519 = [cljs.core.str(test.api),cljs.core.str(inst_35518)].join('');var inst_35520 = foundation.app.xhr.GET.call(null,inst_35519);var state_35533__$1 = state_35533;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35533__$1,2,inst_35520);
} else
{return null;
}
}
}
});return ((function (switch__13893__auto__){
return (function() {
var state_machine__13894__auto__ = null;
var state_machine__13894__auto____0 = (function (){var statearr_35538 = (new Array(7));(statearr_35538[0] = state_machine__13894__auto__);
(statearr_35538[1] = 1);
return statearr_35538;
});
var state_machine__13894__auto____1 = (function (state_35533){while(true){
var ret_value__13895__auto__ = (function (){try{while(true){
var result__13896__auto__ = switch__13893__auto__.call(null,state_35533);if(cljs.core.keyword_identical_QMARK_.call(null,result__13896__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13896__auto__;
}
break;
}
}catch (e35539){if((e35539 instanceof Object))
{var ex__13897__auto__ = e35539;var statearr_35540_35542 = state_35533;(statearr_35540_35542[5] = ex__13897__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35533);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35539;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35543 = state_35533;
state_35533 = G__35543;
continue;
}
} else
{return ret_value__13895__auto__;
}
break;
}
});
state_machine__13894__auto__ = function(state_35533){
switch(arguments.length){
case 0:
return state_machine__13894__auto____0.call(this);
case 1:
return state_machine__13894__auto____1.call(this,state_35533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13894__auto____0;
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13894__auto____1;
return state_machine__13894__auto__;
})()
;})(switch__13893__auto__))
})();var state__13965__auto__ = (function (){var statearr_35541 = f__13964__auto__.call(null);(statearr_35541[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13963__auto__);
return statearr_35541;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13965__auto__);
}));
return c__13963__auto__;
});
goog.exportSymbol('test._main', test._main);
