// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.app.render');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
foundation.app.render.render_queue = (function render_queue(){var c__10283__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_643107){var state_val_643108 = (state_643107[1]);if((state_val_643108 === 3))
{var inst_643105 = (state_643107[2]);var state_643107__$1 = state_643107;return cljs.core.async.impl.ioc_helpers.return_chan(state_643107__$1,inst_643105);
} else
{if((state_val_643108 === 2))
{var state_643107__$1 = state_643107;var statearr_643109_643118 = state_643107__$1;(statearr_643109_643118[2] = null);
(statearr_643109_643118[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_643108 === 1))
{var state_643107__$1 = state_643107;var statearr_643110_643119 = state_643107__$1;(statearr_643110_643119[2] = null);
(statearr_643110_643119[1] = 2);
return cljs.core.constant$keyword$297;
} else
{return null;
}
}
}
});return ((function (switch__10213__auto__){
return (function() {
var state_machine__10214__auto__ = null;
var state_machine__10214__auto____0 = (function (){var statearr_643114 = (new Array(7));(statearr_643114[0] = state_machine__10214__auto__);
(statearr_643114[1] = 1);
return statearr_643114;
});
var state_machine__10214__auto____1 = (function (state_643107){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_643107);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e643115){if((e643115 instanceof Object))
{var ex__10217__auto__ = e643115;var statearr_643116_643120 = state_643107;(statearr_643116_643120[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_643107);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e643115;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__643121 = state_643107;
state_643107 = G__643121;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_643107){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_643107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_643117 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_643117[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_643117;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10285__auto__);
}));
return c__10283__auto__;
});
