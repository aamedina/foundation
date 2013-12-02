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
cljs.core.enable_console_print_BANG_.call(null);
(cljs.core.logic.fd.ISet["string"] = true);
(cljs.core.logic.fd._member_QMARK_["string"] = (function (this$,that){return cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,this$),that);
}));
(cljs.core.logic.fd._disjoint_QMARK_["string"] = (function (this$,that){return cljs.core.empty_QMARK_.call(null,cljs.core.logic.fd._difference.call(null,this$,that));
}));
(cljs.core.logic.fd._intersection["string"] = (function (this$,that){return clojure.set.intersection.call(null,cljs.core.set.call(null,this$),cljs.core.set.call(null,that));
}));
(cljs.core.logic.fd._difference["string"] = (function (this$,that){return clojure.set.difference.call(null,cljs.core.set.call(null,this$),cljs.core.set.call(null,that));
}));
foundation.app.coll_zip = (function coll_zip(root){return clojure.zip.zipper.call(null,cljs.core.coll_QMARK_,cljs.core.seq,(function (node,children){return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.empty.call(null,node),children),cljs.core.meta.call(null,node));
}),root);
});
foundation.app.locs = (function locs(root){return cljs.core.take_while.call(null,cljs.core.complement.call(null,clojure.zip.end_QMARK_),cljs.core.iterate.call(null,clojure.zip.next,foundation.app.coll_zip.call(null,root)));
});
foundation.app.nodes = (function nodes(root){var iter__8423__auto__ = (function iter__151895(s__151896){return (new cljs.core.LazySeq(null,(function (){var s__151896__$1 = s__151896;while(true){
var temp__4098__auto__ = cljs.core.seq.call(null,s__151896__$1);if(temp__4098__auto__)
{var s__151896__$2 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__151896__$2))
{var c__8421__auto__ = cljs.core.chunk_first.call(null,s__151896__$2);var size__8422__auto__ = cljs.core.count.call(null,c__8421__auto__);var b__151898 = cljs.core.chunk_buffer.call(null,size__8422__auto__);if((function (){var i__151897 = 0;while(true){
if((i__151897 < size__8422__auto__))
{var loc = cljs.core._nth.call(null,c__8421__auto__,i__151897);cljs.core.chunk_append.call(null,b__151898,clojure.zip.node.call(null,loc));
{
var G__151899 = (i__151897 + 1);
i__151897 = G__151899;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__151898),iter__151895.call(null,cljs.core.chunk_rest.call(null,s__151896__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__151898),null);
}
} else
{var loc = cljs.core.first.call(null,s__151896__$2);return cljs.core.cons.call(null,clojure.zip.node.call(null,loc),iter__151895.call(null,cljs.core.rest.call(null,s__151896__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8423__auto__.call(null,foundation.app.locs.call(null,root));
});
foundation.app.IUnifyWithSet = (function (){var obj151901 = {};return obj151901;
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
{throw cljs.core.missing_protocol.call(null,"IUnifyWithSet.-unify-with-set",v);
}
}
})().call(null,v,u,s);
}
});
cljs.core.PersistentHashSet.prototype.foundation$app$IUnifyWithSet$ = true;
cljs.core.PersistentHashSet.prototype.foundation$app$IUnifyWithSet$_unify_with_set$arity$3 = (function (v,u,s){var v__$1 = this;if(cljs.core.set_QMARK_.call(null,u))
{var vec__151902 = clojure.data.diff.call(null,v__$1,u);var v_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__151902,0,null);var u_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__151902,1,null);var vu_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__151902,2,null);var m = clojure.set.union.call(null,v_SINGLEQUOTE_,u_SINGLEQUOTE_);return cljs.core.logic._unify_terms.call(null,m,clojure.set.map_invert.call(null,m),s);
} else
{return null;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$logic$IUnifyTerms$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$logic$IUnifyTerms$_unify_terms$arity$3 = (function (u,v,s){var u__$1 = this;return foundation.app._unify_with_set.call(null,v,u__$1,s);
});
foundation.app.api = "http://192.241.130.213:8080/user/15/ads-api";
foundation.app.accounts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",1014020321),"/accounts/:id"], null);
foundation.app.campaigns = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",1014020321),"/accounts/:account-id/campaigns/:id"], null);
foundation.app.subs_uri = (function() {
var subs_uri = null;
var subs_uri__1 = (function (model){return subs_uri.call(null,model,cljs.core.PersistentArrayMap.EMPTY);
});
var subs_uri__2 = (function (p__151905,kvs){var map__151907 = p__151905;var map__151907__$1 = ((cljs.core.seq_QMARK_.call(null,map__151907))?cljs.core.apply.call(null,cljs.core.hash_map,map__151907):map__151907);var url = cljs.core.get.call(null,map__151907__$1,new cljs.core.Keyword(null,"url","url",1014020321));var kvs__$1 = cljs.core.merge.call(null,cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.re_pattern,cljs.core.str),cljs.core.re_seq.call(null,/:[A-Za-z][\w-_]+/,url)),cljs.core.repeat.call(null,"")),kvs);return clojure.string.replace.call(null,clojure.string.replace.call(null,cljs.core.reduce.call(null,(function (p1__151903_SHARP_,p2__151904_SHARP_){return cljs.core.apply.call(null,clojure.string.replace,p1__151903_SHARP_,p2__151904_SHARP_);
}),[cljs.core.str(foundation.app.api),cljs.core.str(url)].join(''),kvs__$1),/\/$/,""),/\/\//,"/");
});
subs_uri = function(p__151905,kvs){
switch(arguments.length){
case 1:
return subs_uri__1.call(this,p__151905);
case 2:
return subs_uri__2.call(this,p__151905,kvs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subs_uri.cljs$core$IFn$_invoke$arity$1 = subs_uri__1;
subs_uri.cljs$core$IFn$_invoke$arity$2 = subs_uri__2;
return subs_uri;
})()
;
foundation.app._main = (function _main(){var c__10283__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_151947){var state_val_151948 = (state_151947[1]);if((state_val_151948 === 3))
{var inst_151945 = (state_151947[2]);var state_151947__$1 = state_151947;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_151947__$1,inst_151945);
} else
{if((state_val_151948 === 2))
{var inst_151936 = (state_151947[2]);var inst_151937 = cljs.core.first.call(null,inst_151936);var inst_151938 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_151939 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_151937);var inst_151940 = [inst_151939];var inst_151941 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_151938,inst_151940);var inst_151942 = foundation.app.subs_uri.call(null,foundation.app.campaigns,inst_151941);var inst_151943 = foundation.app.xhr.GET.call(null,inst_151942);var state_151947__$1 = state_151947;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_151947__$1,3,inst_151943);
} else
{if((state_val_151948 === 1))
{var inst_151932 = new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(foundation.app.accounts);var inst_151933 = [cljs.core.str(foundation.app.api),cljs.core.str(inst_151932)].join('');var inst_151934 = foundation.app.xhr.GET.call(null,inst_151933);var state_151947__$1 = state_151947;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_151947__$1,2,inst_151934);
} else
{return null;
}
}
}
});return ((function (switch__10213__auto__){
return (function() {
var state_machine__10214__auto__ = null;
var state_machine__10214__auto____0 = (function (){var statearr_151952 = (new Array(7));(statearr_151952[0] = state_machine__10214__auto__);
(statearr_151952[1] = 1);
return statearr_151952;
});
var state_machine__10214__auto____1 = (function (state_151947){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_151947);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e151953){if((e151953 instanceof Object))
{var ex__10217__auto__ = e151953;var statearr_151954_151956 = state_151947;(statearr_151954_151956[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_151947);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e151953;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__151957 = state_151947;
state_151947 = G__151957;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_151947){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_151947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_151955 = f__10284__auto__.call(null);(statearr_151955[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_151955;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10285__auto__);
}));
return c__10283__auto__;
});
goog.exportSymbol('foundation.app._main', foundation.app._main);
