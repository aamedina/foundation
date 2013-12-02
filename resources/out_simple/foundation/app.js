// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.app');
goog.require('cljs.core');
goog.require('clojure.data');
goog.require('cljs.core.async');
goog.require('clojure.zip');
goog.require('cljs.core.logic');
goog.require('clojure.data');
goog.require('cljs.core.logic.unifier');
goog.require('cljs.core.logic.unifier');
goog.require('cljs.core.logic.fd');
goog.require('clojure.zip');
goog.require('foundation.app.xhr');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.logic.fd');
goog.require('clojure.browser.repl');
goog.require('clojure.set');
goog.require('cljs.core.logic');
goog.require('cljs.core.async');
goog.require('foundation.app.xhr');
foundation.app.input_queue = (function input_queue(){var c__10283__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_643499){var state_val_643500 = (state_643499[1]);if((state_val_643500 === 3))
{var inst_643497 = (state_643499[2]);var state_643499__$1 = state_643499;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_643499__$1,inst_643497);
} else
{if((state_val_643500 === 2))
{var state_643499__$1 = state_643499;var statearr_643501_643510 = state_643499__$1;(statearr_643501_643510[2] = null);
(statearr_643501_643510[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_643500 === 1))
{var state_643499__$1 = state_643499;var statearr_643502_643511 = state_643499__$1;(statearr_643502_643511[2] = null);
(statearr_643502_643511[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
});return ((function (switch__10213__auto__){
return (function() {
var state_machine__10214__auto__ = null;
var state_machine__10214__auto____0 = (function (){var statearr_643506 = (new Array(7));(statearr_643506[0] = state_machine__10214__auto__);
(statearr_643506[1] = 1);
return statearr_643506;
});
var state_machine__10214__auto____1 = (function (state_643499){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_643499);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e643507){if((e643507 instanceof Object))
{var ex__10217__auto__ = e643507;var statearr_643508_643512 = state_643499;(statearr_643508_643512[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_643499);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e643507;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__643513 = state_643499;
state_643499 = G__643513;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_643499){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_643499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_643509 = f__10284__auto__.call(null);(statearr_643509[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_643509;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10285__auto__);
}));
return c__10283__auto__;
});
cljs.core.enable_console_print_BANG_.call(null);
foundation.app.coll_zip = (function coll_zip(root){return clojure.zip.zipper.call(null,cljs.core.coll_QMARK_,cljs.core.seq,(function (node,children){return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.empty.call(null,node),children),cljs.core.meta.call(null,node));
}),root);
});
foundation.app.locs = (function locs(root){return cljs.core.take_while.call(null,cljs.core.complement.call(null,clojure.zip.end_QMARK_),cljs.core.iterate.call(null,clojure.zip.next,foundation.app.coll_zip.call(null,root)));
});
foundation.app.nodes = (function nodes(root){var iter__8423__auto__ = (function iter__643518(s__643519){return (new cljs.core.LazySeq(null,(function (){var s__643519__$1 = s__643519;while(true){
var temp__4098__auto__ = cljs.core.seq.call(null,s__643519__$1);if(temp__4098__auto__)
{var s__643519__$2 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__643519__$2))
{var c__8421__auto__ = cljs.core.chunk_first.call(null,s__643519__$2);var size__8422__auto__ = cljs.core.count.call(null,c__8421__auto__);var b__643521 = cljs.core.chunk_buffer.call(null,size__8422__auto__);if((function (){var i__643520 = 0;while(true){
if((i__643520 < size__8422__auto__))
{var loc = cljs.core._nth.call(null,c__8421__auto__,i__643520);cljs.core.chunk_append.call(null,b__643521,clojure.zip.node.call(null,loc));
{
var G__643522 = (i__643520 + 1);
i__643520 = G__643522;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__643521),iter__643518.call(null,cljs.core.chunk_rest.call(null,s__643519__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__643521),null);
}
} else
{var loc = cljs.core.first.call(null,s__643519__$2);return cljs.core.cons.call(null,clojure.zip.node.call(null,loc),iter__643518.call(null,cljs.core.rest.call(null,s__643519__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8423__auto__.call(null,foundation.app.locs.call(null,root));
});
foundation.app.api = "http://192.241.130.213:8080/user/15/ads-api";
foundation.app.accounts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",1014020321),"/accounts/:id"], null);
foundation.app.campaigns = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",1014020321),"/accounts/:account-id/campaigns/:id"], null);
foundation.app.subs_uri = (function() {
var subs_uri = null;
var subs_uri__1 = (function (model){return subs_uri.call(null,model,cljs.core.PersistentArrayMap.EMPTY);
});
var subs_uri__2 = (function (p__643525,kvs){var map__643527 = p__643525;var map__643527__$1 = ((cljs.core.seq_QMARK_.call(null,map__643527))?cljs.core.apply.call(null,cljs.core.hash_map,map__643527):map__643527);var url = cljs.core.get.call(null,map__643527__$1,new cljs.core.Keyword(null,"url","url",1014020321));var kvs__$1 = cljs.core.merge.call(null,cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.re_pattern,cljs.core.str),cljs.core.re_seq.call(null,/:[A-Za-z][\w-_]+/,url)),cljs.core.repeat.call(null,"")),kvs);return clojure.string.replace.call(null,clojure.string.replace.call(null,cljs.core.reduce.call(null,(function (p1__643523_SHARP_,p2__643524_SHARP_){return cljs.core.apply.call(null,clojure.string.replace,p1__643523_SHARP_,p2__643524_SHARP_);
}),[cljs.core.str(foundation.app.api),cljs.core.str(url)].join(''),kvs__$1),/\/$/,""),/\/\//,"/");
});
subs_uri = function(p__643525,kvs){
switch(arguments.length){
case 1:
return subs_uri__1.call(this,p__643525);
case 2:
return subs_uri__2.call(this,p__643525,kvs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subs_uri.cljs$core$IFn$_invoke$arity$1 = subs_uri__1;
subs_uri.cljs$core$IFn$_invoke$arity$2 = subs_uri__2;
return subs_uri;
})()
;
foundation.app._main = (function _main(){var c__10283__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_643567){var state_val_643568 = (state_643567[1]);if((state_val_643568 === 3))
{var inst_643565 = (state_643567[2]);var state_643567__$1 = state_643567;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_643567__$1,inst_643565);
} else
{if((state_val_643568 === 2))
{var inst_643556 = (state_643567[2]);var inst_643557 = cljs.core.first.call(null,inst_643556);var inst_643558 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_643559 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_643557);var inst_643560 = [inst_643559];var inst_643561 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_643558,inst_643560);var inst_643562 = foundation.app.subs_uri.call(null,foundation.app.campaigns,inst_643561);var inst_643563 = foundation.app.xhr.GET.call(null,inst_643562);var state_643567__$1 = state_643567;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_643567__$1,3,inst_643563);
} else
{if((state_val_643568 === 1))
{var inst_643552 = new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(foundation.app.accounts);var inst_643553 = [cljs.core.str(foundation.app.api),cljs.core.str(inst_643552)].join('');var inst_643554 = foundation.app.xhr.GET.call(null,inst_643553);var state_643567__$1 = state_643567;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_643567__$1,2,inst_643554);
} else
{return null;
}
}
}
});return ((function (switch__10213__auto__){
return (function() {
var state_machine__10214__auto__ = null;
var state_machine__10214__auto____0 = (function (){var statearr_643572 = (new Array(7));(statearr_643572[0] = state_machine__10214__auto__);
(statearr_643572[1] = 1);
return statearr_643572;
});
var state_machine__10214__auto____1 = (function (state_643567){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_643567);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e643573){if((e643573 instanceof Object))
{var ex__10217__auto__ = e643573;var statearr_643574_643576 = state_643567;(statearr_643574_643576[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_643567);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e643573;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__643577 = state_643567;
state_643567 = G__643577;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_643567){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_643567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_643575 = f__10284__auto__.call(null);(statearr_643575[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_643575;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10285__auto__);
}));
return c__10283__auto__;
});
goog.exportSymbol('foundation.app._main', foundation.app._main);
