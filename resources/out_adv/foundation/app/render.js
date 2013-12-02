// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.app.render');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
foundation.app.render.render_queue = (function render_queue(){var c__13963__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__13964__auto__ = (function (){var switch__13893__auto__ = (function (state_48175){var state_val_48176 = (state_48175[1]);if((state_val_48176 === 3))
{var inst_48173 = (state_48175[2]);var state_48175__$1 = state_48175;return cljs.core.async.impl.ioc_helpers.return_chan(state_48175__$1,inst_48173);
} else
{if((state_val_48176 === 2))
{var state_48175__$1 = state_48175;var statearr_48177_48186 = state_48175__$1;(statearr_48177_48186[2] = null);
(statearr_48177_48186[1] = 3);
return cljs.core.constant$keyword$285;
} else
{if((state_val_48176 === 1))
{var state_48175__$1 = state_48175;var statearr_48178_48187 = state_48175__$1;(statearr_48178_48187[2] = null);
(statearr_48178_48187[1] = 2);
return cljs.core.constant$keyword$285;
} else
{return null;
}
}
}
});return ((function (switch__13893__auto__){
return (function() {
var state_machine__13894__auto__ = null;
var state_machine__13894__auto____0 = (function (){var statearr_48182 = (new Array(7));(statearr_48182[0] = state_machine__13894__auto__);
(statearr_48182[1] = 1);
return statearr_48182;
});
var state_machine__13894__auto____1 = (function (state_48175){while(true){
var ret_value__13895__auto__ = (function (){try{while(true){
var result__13896__auto__ = switch__13893__auto__(state_48175);if(cljs.core.keyword_identical_QMARK_(result__13896__auto__,cljs.core.constant$keyword$285))
{{
continue;
}
} else
{return result__13896__auto__;
}
break;
}
}catch (e48183){if((e48183 instanceof Object))
{var ex__13897__auto__ = e48183;var statearr_48184_48188 = state_48175;(statearr_48184_48188[5] = ex__13897__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_48175);
return cljs.core.constant$keyword$285;
} else
{if(cljs.core.constant$keyword$274)
{throw e48183;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__13895__auto__,cljs.core.constant$keyword$285))
{{
var G__48189 = state_48175;
state_48175 = G__48189;
continue;
}
} else
{return ret_value__13895__auto__;
}
break;
}
});
state_machine__13894__auto__ = function(state_48175){
switch(arguments.length){
case 0:
return state_machine__13894__auto____0.call(this);
case 1:
return state_machine__13894__auto____1.call(this,state_48175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13894__auto____0;
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13894__auto____1;
return state_machine__13894__auto__;
})()
;})(switch__13893__auto__))
})();var state__13965__auto__ = (function (){var statearr_48185 = (f__13964__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13964__auto__.cljs$core$IFn$_invoke$arity$0() : f__13964__auto__.call(null));(statearr_48185[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13963__auto__);
return statearr_48185;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13965__auto__);
}));
return c__13963__auto__;
});
