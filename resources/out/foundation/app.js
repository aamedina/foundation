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
foundation.app.input_queue = (function input_queue(){var c__10283__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_643401){var state_val_643402 = (state_643401[1]);if((state_val_643402 === 3))
{var inst_643399 = (state_643401[2]);var state_643401__$1 = state_643401;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_643401__$1,inst_643399);
} else
{if((state_val_643402 === 2))
{var state_643401__$1 = state_643401;var statearr_643403_643412 = state_643401__$1;(statearr_643403_643412[2] = null);
(statearr_643403_643412[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_643402 === 1))
{var state_643401__$1 = state_643401;var statearr_643404_643413 = state_643401__$1;(statearr_643404_643413[2] = null);
(statearr_643404_643413[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
});return ((function (switch__10213__auto__){
return (function() {
var state_machine__10214__auto__ = null;
var state_machine__10214__auto____0 = (function (){var statearr_643408 = (new Array(7));(statearr_643408[0] = state_machine__10214__auto__);
(statearr_643408[1] = 1);
return statearr_643408;
});
var state_machine__10214__auto____1 = (function (state_643401){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_643401);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e643409){if((e643409 instanceof Object))
{var ex__10217__auto__ = e643409;var statearr_643410_643414 = state_643401;(statearr_643410_643414[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_643401);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e643409;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__643415 = state_643401;
state_643401 = G__643415;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_643401){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_643401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_643411 = f__10284__auto__.call(null);(statearr_643411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_643411;
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
foundation.app.nodes = (function nodes(root){var iter__8423__auto__ = (function iter__643420(s__643421){return (new cljs.core.LazySeq(null,(function (){var s__643421__$1 = s__643421;while(true){
var temp__4098__auto__ = cljs.core.seq.call(null,s__643421__$1);if(temp__4098__auto__)
{var s__643421__$2 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__643421__$2))
{var c__8421__auto__ = cljs.core.chunk_first.call(null,s__643421__$2);var size__8422__auto__ = cljs.core.count.call(null,c__8421__auto__);var b__643423 = cljs.core.chunk_buffer.call(null,size__8422__auto__);if((function (){var i__643422 = 0;while(true){
if((i__643422 < size__8422__auto__))
{var loc = cljs.core._nth.call(null,c__8421__auto__,i__643422);cljs.core.chunk_append.call(null,b__643423,clojure.zip.node.call(null,loc));
{
var G__643424 = (i__643422 + 1);
i__643422 = G__643424;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__643423),iter__643420.call(null,cljs.core.chunk_rest.call(null,s__643421__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__643423),null);
}
} else
{var loc = cljs.core.first.call(null,s__643421__$2);return cljs.core.cons.call(null,clojure.zip.node.call(null,loc),iter__643420.call(null,cljs.core.rest.call(null,s__643421__$2)));
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
var subs_uri__2 = (function (p__643427,kvs){var map__643429 = p__643427;var map__643429__$1 = ((cljs.core.seq_QMARK_.call(null,map__643429))?cljs.core.apply.call(null,cljs.core.hash_map,map__643429):map__643429);var url = cljs.core.get.call(null,map__643429__$1,new cljs.core.Keyword(null,"url","url",1014020321));var kvs__$1 = cljs.core.merge.call(null,cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.re_pattern,cljs.core.str),cljs.core.re_seq.call(null,/:[A-Za-z][\w-_]+/,url)),cljs.core.repeat.call(null,"")),kvs);return clojure.string.replace.call(null,clojure.string.replace.call(null,cljs.core.reduce.call(null,(function (p1__643425_SHARP_,p2__643426_SHARP_){return cljs.core.apply.call(null,clojure.string.replace,p1__643425_SHARP_,p2__643426_SHARP_);
}),[cljs.core.str(foundation.app.api),cljs.core.str(url)].join(''),kvs__$1),/\/$/,""),/\/\//,"/");
});
subs_uri = function(p__643427,kvs){
switch(arguments.length){
case 1:
return subs_uri__1.call(this,p__643427);
case 2:
return subs_uri__2.call(this,p__643427,kvs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subs_uri.cljs$core$IFn$_invoke$arity$1 = subs_uri__1;
subs_uri.cljs$core$IFn$_invoke$arity$2 = subs_uri__2;
return subs_uri;
})()
;
foundation.app._main = (function _main(){var c__10283__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_643469){var state_val_643470 = (state_643469[1]);if((state_val_643470 === 3))
{var inst_643467 = (state_643469[2]);var state_643469__$1 = state_643469;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_643469__$1,inst_643467);
} else
{if((state_val_643470 === 2))
{var inst_643458 = (state_643469[2]);var inst_643459 = cljs.core.first.call(null,inst_643458);var inst_643460 = [new cljs.core.Keyword(null,"account-id","account-id",4505490477)];var inst_643461 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_643459);var inst_643462 = [inst_643461];var inst_643463 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_643460,inst_643462);var inst_643464 = foundation.app.subs_uri.call(null,foundation.app.campaigns,inst_643463);var inst_643465 = foundation.app.xhr.GET.call(null,inst_643464);var state_643469__$1 = state_643469;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_643469__$1,3,inst_643465);
} else
{if((state_val_643470 === 1))
{var inst_643454 = new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(foundation.app.accounts);var inst_643455 = [cljs.core.str(foundation.app.api),cljs.core.str(inst_643454)].join('');var inst_643456 = foundation.app.xhr.GET.call(null,inst_643455);var state_643469__$1 = state_643469;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_643469__$1,2,inst_643456);
} else
{return null;
}
}
}
});return ((function (switch__10213__auto__){
return (function() {
var state_machine__10214__auto__ = null;
var state_machine__10214__auto____0 = (function (){var statearr_643474 = (new Array(7));(statearr_643474[0] = state_machine__10214__auto__);
(statearr_643474[1] = 1);
return statearr_643474;
});
var state_machine__10214__auto____1 = (function (state_643469){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_643469);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e643475){if((e643475 instanceof Object))
{var ex__10217__auto__ = e643475;var statearr_643476_643478 = state_643469;(statearr_643476_643478[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_643469);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e643475;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__643479 = state_643469;
state_643469 = G__643479;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_643469){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_643469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_643477 = f__10284__auto__.call(null);(statearr_643477[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_643477;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10285__auto__);
}));
return c__10283__auto__;
});
goog.exportSymbol('foundation.app._main', foundation.app._main);

//# sourceMappingURL=app.js.map