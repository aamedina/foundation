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
cljs.core.enable_console_print_BANG_();
(cljs.core.logic.fd.ISet["string"] = true);
(cljs.core.logic.fd._member_QMARK_["string"] = (function (this$,that){return cljs.core.contains_QMARK_(cljs.core.set(this$),that);
}));
(cljs.core.logic.fd._disjoint_QMARK_["string"] = (function (this$,that){return cljs.core.empty_QMARK_(cljs.core.logic.fd._difference(this$,that));
}));
(cljs.core.logic.fd._intersection["string"] = (function (this$,that){return clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(this$),cljs.core.set(that));
}));
(cljs.core.logic.fd._difference["string"] = (function (this$,that){return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(this$),cljs.core.set(that));
}));
foundation.app.coll_zip = (function coll_zip(root){return clojure.zip.zipper(cljs.core.coll_QMARK_,cljs.core.seq,(function (node,children){return cljs.core.with_meta(cljs.core.into(cljs.core.empty(node),children),cljs.core.meta(node));
}),root);
});
foundation.app.locs = (function locs(root){return cljs.core.take_while(cljs.core.complement(clojure.zip.end_QMARK_),cljs.core.iterate(clojure.zip.next,foundation.app.coll_zip(root)));
});
foundation.app.nodes = (function nodes(root){var iter__8423__auto__ = (function iter__214155(s__214156){return (new cljs.core.LazySeq(null,(function (){var s__214156__$1 = s__214156;while(true){
var temp__4098__auto__ = cljs.core.seq(s__214156__$1);if(temp__4098__auto__)
{var s__214156__$2 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_(s__214156__$2))
{var c__8421__auto__ = cljs.core.chunk_first(s__214156__$2);var size__8422__auto__ = cljs.core.count(c__8421__auto__);var b__214158 = cljs.core.chunk_buffer(size__8422__auto__);if((function (){var i__214157 = 0;while(true){
if((i__214157 < size__8422__auto__))
{var loc = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8421__auto__,i__214157);cljs.core.chunk_append(b__214158,clojure.zip.node(loc));
{
var G__214159 = (i__214157 + 1);
i__214157 = G__214159;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__214158),iter__214155(cljs.core.chunk_rest(s__214156__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__214158),null);
}
} else
{var loc = cljs.core.first(s__214156__$2);return cljs.core.cons(clojure.zip.node(loc),iter__214155(cljs.core.rest(s__214156__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8423__auto__(foundation.app.locs(root));
});
foundation.app.IUnifyWithSet = (function (){var obj214161 = {};return obj214161;
})();
foundation.app._unify_with_set = (function _unify_with_set(v,u,s){if((function (){var and__7718__auto__ = v;if(and__7718__auto__)
{return v.foundation$app$IUnifyWithSet$_unify_with_set$arity$3;
} else
{return and__7718__auto__;
}
})())
{return v.foundation$app$IUnifyWithSet$_unify_with_set$arity$3(v,u,s);
} else
{var x__8333__auto__ = (((v == null))?null:v);return (function (){var or__7730__auto__ = (foundation.app._unify_with_set[goog.typeOf(x__8333__auto__)]);if(or__7730__auto__)
{return or__7730__auto__;
} else
{var or__7730__auto____$1 = (foundation.app._unify_with_set["_"]);if(or__7730__auto____$1)
{return or__7730__auto____$1;
} else
{throw cljs.core.missing_protocol("IUnifyWithSet.-unify-with-set",v);
}
}
})().call(null,v,u,s);
}
});
cljs.core.PersistentHashSet.prototype.foundation$app$IUnifyWithSet$ = true;
cljs.core.PersistentHashSet.prototype.foundation$app$IUnifyWithSet$_unify_with_set$arity$3 = (function (v,u,s){var v__$1 = this;if(cljs.core.set_QMARK_(u))
{var vec__214162 = clojure.data.diff(v__$1,u);var v_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__214162,0,null);var u_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__214162,1,null);var vu_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__214162,2,null);var m = clojure.set.union.cljs$core$IFn$_invoke$arity$2(v_SINGLEQUOTE_,u_SINGLEQUOTE_);return cljs.core.logic._unify_terms(m,clojure.set.map_invert(m),s);
} else
{return null;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$logic$IUnifyTerms$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$logic$IUnifyTerms$_unify_terms$arity$3 = (function (u,v,s){var u__$1 = this;return foundation.app._unify_with_set(v,u__$1,s);
});
foundation.app.api = "http://192.241.130.213:8080/user/15/ads-api";
foundation.app.accounts = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$418,"/accounts/:id"], null);
foundation.app.campaigns = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$418,"/accounts/:account-id/campaigns/:id"], null);
foundation.app.subs_uri = (function() {
var subs_uri = null;
var subs_uri__1 = (function (model){return subs_uri.cljs$core$IFn$_invoke$arity$2(model,cljs.core.PersistentArrayMap.EMPTY);
});
var subs_uri__2 = (function (p__214165,kvs){var map__214167 = p__214165;var map__214167__$1 = ((cljs.core.seq_QMARK_(map__214167))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__214167):map__214167);var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__214167__$1,cljs.core.constant$keyword$418);var kvs__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.re_pattern,cljs.core.str),cljs.core.re_seq(/:[A-Za-z][\w-_]+/,url)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("")),kvs], 0));return clojure.string.replace(clojure.string.replace(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__214163_SHARP_,p2__214164_SHARP_){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clojure.string.replace,p1__214163_SHARP_,p2__214164_SHARP_);
}),[cljs.core.str(foundation.app.api),cljs.core.str(url)].join(''),kvs__$1),/\/$/,""),/\/\//,"/");
});
subs_uri = function(p__214165,kvs){
switch(arguments.length){
case 1:
return subs_uri__1.call(this,p__214165);
case 2:
return subs_uri__2.call(this,p__214165,kvs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subs_uri.cljs$core$IFn$_invoke$arity$1 = subs_uri__1;
subs_uri.cljs$core$IFn$_invoke$arity$2 = subs_uri__2;
return subs_uri;
})()
;
foundation.app._main = (function _main(){var c__10283__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_214207){var state_val_214208 = (state_214207[1]);if((state_val_214208 === 3))
{var inst_214205 = (state_214207[2]);var state_214207__$1 = state_214207;return cljs.core.async.impl.ioc_helpers.return_chan(state_214207__$1,inst_214205);
} else
{if((state_val_214208 === 2))
{var inst_214196 = (state_214207[2]);var inst_214197 = cljs.core.first(inst_214196);var inst_214198 = [cljs.core.constant$keyword$419];var inst_214199 = cljs.core.constant$keyword$420.cljs$core$IFn$_invoke$arity$1(inst_214197);var inst_214200 = [inst_214199];var inst_214201 = (cljs.core.PersistentHashMap.fromArrays.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentHashMap.fromArrays.cljs$core$IFn$_invoke$arity$2(inst_214198,inst_214200) : cljs.core.PersistentHashMap.fromArrays.call(null,inst_214198,inst_214200));var inst_214202 = foundation.app.subs_uri.cljs$core$IFn$_invoke$arity$2(foundation.app.campaigns,inst_214201);var inst_214203 = foundation.app.xhr.GET(inst_214202);var state_214207__$1 = state_214207;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_214207__$1,3,inst_214203);
} else
{if((state_val_214208 === 1))
{var inst_214192 = cljs.core.constant$keyword$418.cljs$core$IFn$_invoke$arity$1(foundation.app.accounts);var inst_214193 = [cljs.core.str(foundation.app.api),cljs.core.str(inst_214192)].join('');var inst_214194 = foundation.app.xhr.GET(inst_214193);var state_214207__$1 = state_214207;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_214207__$1,2,inst_214194);
} else
{return null;
}
}
}
});return ((function (switch__10213__auto__){
return (function() {
var state_machine__10214__auto__ = null;
var state_machine__10214__auto____0 = (function (){var statearr_214212 = (new Array(7));(statearr_214212[0] = state_machine__10214__auto__);
(statearr_214212[1] = 1);
return statearr_214212;
});
var state_machine__10214__auto____1 = (function (state_214207){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_214207);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e214213){if((e214213 instanceof Object))
{var ex__10217__auto__ = e214213;var statearr_214214_214216 = state_214207;(statearr_214214_214216[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_214207);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e214213;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__214217 = state_214207;
state_214207 = G__214217;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_214207){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_214207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_214215 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_214215[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_214215;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10285__auto__);
}));
return c__10283__auto__;
});
goog.exportSymbol('foundation.app._main', foundation.app._main);
