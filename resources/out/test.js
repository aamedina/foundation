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
var subs_uri__2 = (function (p__21908,kvs){var map__21910 = p__21908;var map__21910__$1 = ((cljs.core.seq_QMARK_.call(null,map__21910))?cljs.core.apply.call(null,cljs.core.hash_map,map__21910):map__21910);var url = cljs.core.get.call(null,map__21910__$1,new cljs.core.Keyword(null,"url","url",1014020321));var kvs__$1 = cljs.core.merge.call(null,cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.re_pattern,cljs.core.str),cljs.core.re_seq.call(null,/:[A-Za-z][\w-_]+/,url)),cljs.core.repeat.call(null,"")),kvs);return clojure.string.replace.call(null,clojure.string.replace.call(null,cljs.core.reduce.call(null,(function (p1__21906_SHARP_,p2__21907_SHARP_){return cljs.core.apply.call(null,clojure.string.replace,p1__21906_SHARP_,p2__21907_SHARP_);
}),[cljs.core.str(test.api),cljs.core.str(url)].join(''),kvs__$1),/\/$/,""),/\/\//,"/");
});
subs_uri = function(p__21908,kvs){
switch(arguments.length){
case 1:
return subs_uri__1.call(this,p__21908);
case 2:
return subs_uri__2.call(this,p__21908,kvs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subs_uri.cljs$core$IFn$_invoke$arity$1 = subs_uri__1;
subs_uri.cljs$core$IFn$_invoke$arity$2 = subs_uri__2;
return subs_uri;
})()
;
test._main = (function _main(){var c__13963__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13964__auto__ = (function (){var switch__13893__auto__ = (function (state_21950){var state_val_21951 = (state_21950[1]);if((state_val_21951 === 3))
{var inst_21948 = (state_21950[2]);var state_21950__$1 = state_21950;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21950__$1,inst_21948);
} else
{if((state_val_21951 === 2))
{var inst_21939 = (state_21950[2]);var inst_21940 = cljs.core.first.call(null,inst_21939);var inst_21941 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_21942 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_21940);var inst_21943 = [inst_21942];var inst_21944 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_21941,inst_21943);var inst_21945 = test.subs_uri.call(null,test.campaigns,inst_21944);var inst_21946 = foundation.app.xhr.GET.call(null,inst_21945);var state_21950__$1 = state_21950;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21950__$1,3,inst_21946);
} else
{if((state_val_21951 === 1))
{var inst_21935 = new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(test.accounts);var inst_21936 = [cljs.core.str(test.api),cljs.core.str(inst_21935)].join('');var inst_21937 = foundation.app.xhr.GET.call(null,inst_21936);var state_21950__$1 = state_21950;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21950__$1,2,inst_21937);
} else
{return null;
}
}
}
});return ((function (switch__13893__auto__){
return (function() {
var state_machine__13894__auto__ = null;
var state_machine__13894__auto____0 = (function (){var statearr_21955 = (new Array(7));(statearr_21955[0] = state_machine__13894__auto__);
(statearr_21955[1] = 1);
return statearr_21955;
});
var state_machine__13894__auto____1 = (function (state_21950){while(true){
var ret_value__13895__auto__ = (function (){try{while(true){
var result__13896__auto__ = switch__13893__auto__.call(null,state_21950);if(cljs.core.keyword_identical_QMARK_.call(null,result__13896__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13896__auto__;
}
break;
}
}catch (e21956){if((e21956 instanceof Object))
{var ex__13897__auto__ = e21956;var statearr_21957_21959 = state_21950;(statearr_21957_21959[5] = ex__13897__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21950);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21956;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21960 = state_21950;
state_21950 = G__21960;
continue;
}
} else
{return ret_value__13895__auto__;
}
break;
}
});
state_machine__13894__auto__ = function(state_21950){
switch(arguments.length){
case 0:
return state_machine__13894__auto____0.call(this);
case 1:
return state_machine__13894__auto____1.call(this,state_21950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13894__auto____0;
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13894__auto____1;
return state_machine__13894__auto__;
})()
;})(switch__13893__auto__))
})();var state__13965__auto__ = (function (){var statearr_21958 = f__13964__auto__.call(null);(statearr_21958[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13963__auto__);
return statearr_21958;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13965__auto__);
}));
return c__13963__auto__;
});
goog.exportSymbol('test._main', test._main);

//# sourceMappingURL=test.js.map