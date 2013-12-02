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
foundation.app.input_queue = (function input_queue(){var c__13963__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__13964__auto__ = (function (){var switch__13893__auto__ = (function (state_53681){var state_val_53682 = (state_53681[1]);if((state_val_53682 === 3))
{var inst_53679 = (state_53681[2]);var state_53681__$1 = state_53681;return cljs.core.async.impl.ioc_helpers.return_chan(state_53681__$1,inst_53679);
} else
{if((state_val_53682 === 2))
{var state_53681__$1 = state_53681;var statearr_53683_53692 = state_53681__$1;(statearr_53683_53692[2] = null);
(statearr_53683_53692[1] = 3);
return cljs.core.constant$keyword$285;
} else
{if((state_val_53682 === 1))
{var state_53681__$1 = state_53681;var statearr_53684_53693 = state_53681__$1;(statearr_53684_53693[2] = null);
(statearr_53684_53693[1] = 2);
return cljs.core.constant$keyword$285;
} else
{return null;
}
}
}
});return ((function (switch__13893__auto__){
return (function() {
var state_machine__13894__auto__ = null;
var state_machine__13894__auto____0 = (function (){var statearr_53688 = (new Array(7));(statearr_53688[0] = state_machine__13894__auto__);
(statearr_53688[1] = 1);
return statearr_53688;
});
var state_machine__13894__auto____1 = (function (state_53681){while(true){
var ret_value__13895__auto__ = (function (){try{while(true){
var result__13896__auto__ = switch__13893__auto__(state_53681);if(cljs.core.keyword_identical_QMARK_(result__13896__auto__,cljs.core.constant$keyword$285))
{{
continue;
}
} else
{return result__13896__auto__;
}
break;
}
}catch (e53689){if((e53689 instanceof Object))
{var ex__13897__auto__ = e53689;var statearr_53690_53694 = state_53681;(statearr_53690_53694[5] = ex__13897__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_53681);
return cljs.core.constant$keyword$285;
} else
{if(cljs.core.constant$keyword$274)
{throw e53689;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__13895__auto__,cljs.core.constant$keyword$285))
{{
var G__53695 = state_53681;
state_53681 = G__53695;
continue;
}
} else
{return ret_value__13895__auto__;
}
break;
}
});
state_machine__13894__auto__ = function(state_53681){
switch(arguments.length){
case 0:
return state_machine__13894__auto____0.call(this);
case 1:
return state_machine__13894__auto____1.call(this,state_53681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13894__auto____0;
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13894__auto____1;
return state_machine__13894__auto__;
})()
;})(switch__13893__auto__))
})();var state__13965__auto__ = (function (){var statearr_53691 = (f__13964__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13964__auto__.cljs$core$IFn$_invoke$arity$0() : f__13964__auto__.call(null));(statearr_53691[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13963__auto__);
return statearr_53691;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13965__auto__);
}));
return c__13963__auto__;
});
foundation.app.build = (function build(){return null;
});
