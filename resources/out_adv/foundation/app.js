// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.app');
goog.require('cljs.core');
goog.require('clojure.data');
goog.require('cljs.core.async');
goog.require('clojure.zip');
goog.require('clojure.zip');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('clojure.data');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('clojure.set');
foundation.app.input_queue = (function input_queue(){var c__10283__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_644773){var state_val_644774 = (state_644773[1]);if((state_val_644774 === 3))
{var inst_644771 = (state_644773[2]);var state_644773__$1 = state_644773;return cljs.core.async.impl.ioc_helpers.return_chan(state_644773__$1,inst_644771);
} else
{if((state_val_644774 === 2))
{var state_644773__$1 = state_644773;var statearr_644775_644784 = state_644773__$1;(statearr_644775_644784[2] = null);
(statearr_644775_644784[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_644774 === 1))
{var state_644773__$1 = state_644773;var statearr_644776_644785 = state_644773__$1;(statearr_644776_644785[2] = null);
(statearr_644776_644785[1] = 2);
return cljs.core.constant$keyword$297;
} else
{return null;
}
}
}
});return ((function (switch__10213__auto__){
return (function() {
var state_machine__10214__auto__ = null;
var state_machine__10214__auto____0 = (function (){var statearr_644780 = (new Array(7));(statearr_644780[0] = state_machine__10214__auto__);
(statearr_644780[1] = 1);
return statearr_644780;
});
var state_machine__10214__auto____1 = (function (state_644773){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_644773);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e644781){if((e644781 instanceof Object))
{var ex__10217__auto__ = e644781;var statearr_644782_644786 = state_644773;(statearr_644782_644786[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_644773);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e644781;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__644787 = state_644773;
state_644773 = G__644787;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_644773){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_644773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_644783 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_644783[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_644783;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10285__auto__);
}));
return c__10283__auto__;
});
foundation.app.build = (function build(){return null;
});
cljs.core.enable_console_print_BANG_();
foundation.app.coll_zip = (function coll_zip(root){return clojure.zip.zipper(cljs.core.coll_QMARK_,cljs.core.seq,(function (node,children){return cljs.core.with_meta(cljs.core.into(cljs.core.empty(node),children),cljs.core.meta(node));
}),root);
});
foundation.app.locs = (function locs(root){return cljs.core.take_while(cljs.core.complement(clojure.zip.end_QMARK_),cljs.core.iterate(clojure.zip.next,foundation.app.coll_zip(root)));
});
foundation.app.nodes = (function nodes(root){var iter__8423__auto__ = (function iter__644792(s__644793){return (new cljs.core.LazySeq(null,(function (){var s__644793__$1 = s__644793;while(true){
var temp__4098__auto__ = cljs.core.seq(s__644793__$1);if(temp__4098__auto__)
{var s__644793__$2 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_(s__644793__$2))
{var c__8421__auto__ = cljs.core.chunk_first(s__644793__$2);var size__8422__auto__ = cljs.core.count(c__8421__auto__);var b__644795 = cljs.core.chunk_buffer(size__8422__auto__);if((function (){var i__644794 = 0;while(true){
if((i__644794 < size__8422__auto__))
{var loc = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8421__auto__,i__644794);cljs.core.chunk_append(b__644795,clojure.zip.node(loc));
{
var G__644796 = (i__644794 + 1);
i__644794 = G__644796;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__644795),iter__644792(cljs.core.chunk_rest(s__644793__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__644795),null);
}
} else
{var loc = cljs.core.first(s__644793__$2);return cljs.core.cons(clojure.zip.node(loc),iter__644792(cljs.core.rest(s__644793__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8423__auto__(foundation.app.locs(root));
});
