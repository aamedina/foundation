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
foundation.app.input_queue = (function input_queue(){var c__10283__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_643597){var state_val_643598 = (state_643597[1]);if((state_val_643598 === 3))
{var inst_643595 = (state_643597[2]);var state_643597__$1 = state_643597;return cljs.core.async.impl.ioc_helpers.return_chan(state_643597__$1,inst_643595);
} else
{if((state_val_643598 === 2))
{var state_643597__$1 = state_643597;var statearr_643599_643608 = state_643597__$1;(statearr_643599_643608[2] = null);
(statearr_643599_643608[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_643598 === 1))
{var state_643597__$1 = state_643597;var statearr_643600_643609 = state_643597__$1;(statearr_643600_643609[2] = null);
(statearr_643600_643609[1] = 2);
return cljs.core.constant$keyword$297;
} else
{return null;
}
}
}
});return ((function (switch__10213__auto__){
return (function() {
var state_machine__10214__auto__ = null;
var state_machine__10214__auto____0 = (function (){var statearr_643604 = (new Array(7));(statearr_643604[0] = state_machine__10214__auto__);
(statearr_643604[1] = 1);
return statearr_643604;
});
var state_machine__10214__auto____1 = (function (state_643597){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_643597);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e643605){if((e643605 instanceof Object))
{var ex__10217__auto__ = e643605;var statearr_643606_643610 = state_643597;(statearr_643606_643610[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_643597);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e643605;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__643611 = state_643597;
state_643597 = G__643611;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_643597){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_643597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_643607 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_643607[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_643607;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10285__auto__);
}));
return c__10283__auto__;
});
cljs.core.enable_console_print_BANG_();
foundation.app.coll_zip = (function coll_zip(root){return clojure.zip.zipper(cljs.core.coll_QMARK_,cljs.core.seq,(function (node,children){return cljs.core.with_meta(cljs.core.into(cljs.core.empty(node),children),cljs.core.meta(node));
}),root);
});
foundation.app.locs = (function locs(root){return cljs.core.take_while(cljs.core.complement(clojure.zip.end_QMARK_),cljs.core.iterate(clojure.zip.next,foundation.app.coll_zip(root)));
});
foundation.app.nodes = (function nodes(root){var iter__8423__auto__ = (function iter__643616(s__643617){return (new cljs.core.LazySeq(null,(function (){var s__643617__$1 = s__643617;while(true){
var temp__4098__auto__ = cljs.core.seq(s__643617__$1);if(temp__4098__auto__)
{var s__643617__$2 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_(s__643617__$2))
{var c__8421__auto__ = cljs.core.chunk_first(s__643617__$2);var size__8422__auto__ = cljs.core.count(c__8421__auto__);var b__643619 = cljs.core.chunk_buffer(size__8422__auto__);if((function (){var i__643618 = 0;while(true){
if((i__643618 < size__8422__auto__))
{var loc = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8421__auto__,i__643618);cljs.core.chunk_append(b__643619,clojure.zip.node(loc));
{
var G__643620 = (i__643618 + 1);
i__643618 = G__643620;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__643619),iter__643616(cljs.core.chunk_rest(s__643617__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__643619),null);
}
} else
{var loc = cljs.core.first(s__643617__$2);return cljs.core.cons(clojure.zip.node(loc),iter__643616(cljs.core.rest(s__643617__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8423__auto__(foundation.app.locs(root));
});
foundation.app.api = "http://192.241.130.213:8080/user/15/ads-api";
foundation.app.accounts = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$418,"/accounts/:id"], null);
foundation.app.campaigns = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$418,"/accounts/:account-id/campaigns/:id"], null);
foundation.app.subs_uri = (function() {
var subs_uri = null;
var subs_uri__1 = (function (model){return subs_uri.cljs$core$IFn$_invoke$arity$2(model,cljs.core.PersistentArrayMap.EMPTY);
});
var subs_uri__2 = (function (p__643623,kvs){var map__643625 = p__643623;var map__643625__$1 = ((cljs.core.seq_QMARK_(map__643625))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__643625):map__643625);var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__643625__$1,cljs.core.constant$keyword$418);var kvs__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.re_pattern,cljs.core.str),cljs.core.re_seq(/:[A-Za-z][\w-_]+/,url)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("")),kvs], 0));return clojure.string.replace(clojure.string.replace(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__643621_SHARP_,p2__643622_SHARP_){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clojure.string.replace,p1__643621_SHARP_,p2__643622_SHARP_);
}),[cljs.core.str(foundation.app.api),cljs.core.str(url)].join(''),kvs__$1),/\/$/,""),/\/\//,"/");
});
subs_uri = function(p__643623,kvs){
switch(arguments.length){
case 1:
return subs_uri__1.call(this,p__643623);
case 2:
return subs_uri__2.call(this,p__643623,kvs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subs_uri.cljs$core$IFn$_invoke$arity$1 = subs_uri__1;
subs_uri.cljs$core$IFn$_invoke$arity$2 = subs_uri__2;
return subs_uri;
})()
;
foundation.app._main = (function _main(){var c__10283__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_643665){var state_val_643666 = (state_643665[1]);if((state_val_643666 === 3))
{var inst_643663 = (state_643665[2]);var state_643665__$1 = state_643665;return cljs.core.async.impl.ioc_helpers.return_chan(state_643665__$1,inst_643663);
} else
{if((state_val_643666 === 2))
{var inst_643654 = (state_643665[2]);var inst_643655 = cljs.core.first(inst_643654);var inst_643656 = [cljs.core.constant$keyword$419];var inst_643657 = cljs.core.constant$keyword$420.cljs$core$IFn$_invoke$arity$1(inst_643655);var inst_643658 = [inst_643657];var inst_643659 = (cljs.core.PersistentHashMap.fromArrays.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentHashMap.fromArrays.cljs$core$IFn$_invoke$arity$2(inst_643656,inst_643658) : cljs.core.PersistentHashMap.fromArrays.call(null,inst_643656,inst_643658));var inst_643660 = foundation.app.subs_uri.cljs$core$IFn$_invoke$arity$2(foundation.app.campaigns,inst_643659);var inst_643661 = foundation.app.xhr.GET(inst_643660);var state_643665__$1 = state_643665;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_643665__$1,3,inst_643661);
} else
{if((state_val_643666 === 1))
{var inst_643650 = cljs.core.constant$keyword$418.cljs$core$IFn$_invoke$arity$1(foundation.app.accounts);var inst_643651 = [cljs.core.str(foundation.app.api),cljs.core.str(inst_643650)].join('');var inst_643652 = foundation.app.xhr.GET(inst_643651);var state_643665__$1 = state_643665;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_643665__$1,2,inst_643652);
} else
{return null;
}
}
}
});return ((function (switch__10213__auto__){
return (function() {
var state_machine__10214__auto__ = null;
var state_machine__10214__auto____0 = (function (){var statearr_643670 = (new Array(7));(statearr_643670[0] = state_machine__10214__auto__);
(statearr_643670[1] = 1);
return statearr_643670;
});
var state_machine__10214__auto____1 = (function (state_643665){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_643665);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e643671){if((e643671 instanceof Object))
{var ex__10217__auto__ = e643671;var statearr_643672_643674 = state_643665;(statearr_643672_643674[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_643665);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e643671;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__643675 = state_643665;
state_643665 = G__643675;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_643665){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_643665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_643673 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_643673[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_643673;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10285__auto__);
}));
return c__10283__auto__;
});
goog.exportSymbol('foundation.app._main', foundation.app._main);
