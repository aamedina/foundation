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
foundation.app.input_queue = (function input_queue(){var c__10283__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_644859){var state_val_644860 = (state_644859[1]);if((state_val_644860 === 3))
{var inst_644857 = (state_644859[2]);var state_644859__$1 = state_644859;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_644859__$1,inst_644857);
} else
{if((state_val_644860 === 2))
{var state_644859__$1 = state_644859;var statearr_644861_644870 = state_644859__$1;(statearr_644861_644870[2] = null);
(statearr_644861_644870[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_644860 === 1))
{var state_644859__$1 = state_644859;var statearr_644862_644871 = state_644859__$1;(statearr_644862_644871[2] = null);
(statearr_644862_644871[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
});return ((function (switch__10213__auto__){
return (function() {
var state_machine__10214__auto__ = null;
var state_machine__10214__auto____0 = (function (){var statearr_644866 = (new Array(7));(statearr_644866[0] = state_machine__10214__auto__);
(statearr_644866[1] = 1);
return statearr_644866;
});
var state_machine__10214__auto____1 = (function (state_644859){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_644859);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e644867){if((e644867 instanceof Object))
{var ex__10217__auto__ = e644867;var statearr_644868_644872 = state_644859;(statearr_644868_644872[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_644859);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e644867;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__644873 = state_644859;
state_644859 = G__644873;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_644859){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_644859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_644869 = f__10284__auto__.call(null);(statearr_644869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_644869;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10285__auto__);
}));
return c__10283__auto__;
});
foundation.app.build = (function build(){return null;
});
foundation.app.coll_zip = (function coll_zip(root){return clojure.zip.zipper.call(null,cljs.core.coll_QMARK_,cljs.core.seq,(function (node,children){return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.empty.call(null,node),children),cljs.core.meta.call(null,node));
}),root);
});
foundation.app.locs = (function locs(root){return cljs.core.take_while.call(null,cljs.core.complement.call(null,clojure.zip.end_QMARK_),cljs.core.iterate.call(null,clojure.zip.next,foundation.app.coll_zip.call(null,root)));
});
foundation.app.nodes = (function nodes(root){var iter__8423__auto__ = (function iter__644878(s__644879){return (new cljs.core.LazySeq(null,(function (){var s__644879__$1 = s__644879;while(true){
var temp__4098__auto__ = cljs.core.seq.call(null,s__644879__$1);if(temp__4098__auto__)
{var s__644879__$2 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__644879__$2))
{var c__8421__auto__ = cljs.core.chunk_first.call(null,s__644879__$2);var size__8422__auto__ = cljs.core.count.call(null,c__8421__auto__);var b__644881 = cljs.core.chunk_buffer.call(null,size__8422__auto__);if((function (){var i__644880 = 0;while(true){
if((i__644880 < size__8422__auto__))
{var loc = cljs.core._nth.call(null,c__8421__auto__,i__644880);cljs.core.chunk_append.call(null,b__644881,clojure.zip.node.call(null,loc));
{
var G__644882 = (i__644880 + 1);
i__644880 = G__644882;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__644881),iter__644878.call(null,cljs.core.chunk_rest.call(null,s__644879__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__644881),null);
}
} else
{var loc = cljs.core.first.call(null,s__644879__$2);return cljs.core.cons.call(null,clojure.zip.node.call(null,loc),iter__644878.call(null,cljs.core.rest.call(null,s__644879__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8423__auto__.call(null,foundation.app.locs.call(null,root));
});
