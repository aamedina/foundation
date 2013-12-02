// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.app.effect');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
foundation.app.effect.effect_queue = (function effect_queue(){var c__13963__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__13964__auto__ = (function (){var switch__13893__auto__ = (function (state_48141){var state_val_48142 = (state_48141[1]);if((state_val_48142 === 3))
{var inst_48139 = (state_48141[2]);var state_48141__$1 = state_48141;return cljs.core.async.impl.ioc_helpers.return_chan(state_48141__$1,inst_48139);
} else
{if((state_val_48142 === 2))
{var state_48141__$1 = state_48141;var statearr_48143_48152 = state_48141__$1;(statearr_48143_48152[2] = null);
(statearr_48143_48152[1] = 3);
return cljs.core.constant$keyword$285;
} else
{if((state_val_48142 === 1))
{var state_48141__$1 = state_48141;var statearr_48144_48153 = state_48141__$1;(statearr_48144_48153[2] = null);
(statearr_48144_48153[1] = 2);
return cljs.core.constant$keyword$285;
} else
{return null;
}
}
}
});return ((function (switch__13893__auto__){
return (function() {
var state_machine__13894__auto__ = null;
var state_machine__13894__auto____0 = (function (){var statearr_48148 = (new Array(7));(statearr_48148[0] = state_machine__13894__auto__);
(statearr_48148[1] = 1);
return statearr_48148;
});
var state_machine__13894__auto____1 = (function (state_48141){while(true){
var ret_value__13895__auto__ = (function (){try{while(true){
var result__13896__auto__ = switch__13893__auto__(state_48141);if(cljs.core.keyword_identical_QMARK_(result__13896__auto__,cljs.core.constant$keyword$285))
{{
continue;
}
} else
{return result__13896__auto__;
}
break;
}
}catch (e48149){if((e48149 instanceof Object))
{var ex__13897__auto__ = e48149;var statearr_48150_48154 = state_48141;(statearr_48150_48154[5] = ex__13897__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_48141);
return cljs.core.constant$keyword$285;
} else
{if(cljs.core.constant$keyword$274)
{throw e48149;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__13895__auto__,cljs.core.constant$keyword$285))
{{
var G__48155 = state_48141;
state_48141 = G__48155;
continue;
}
} else
{return ret_value__13895__auto__;
}
break;
}
});
state_machine__13894__auto__ = function(state_48141){
switch(arguments.length){
case 0:
return state_machine__13894__auto____0.call(this);
case 1:
return state_machine__13894__auto____1.call(this,state_48141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13894__auto____0;
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13894__auto____1;
return state_machine__13894__auto__;
})()
;})(switch__13893__auto__))
})();var state__13965__auto__ = (function (){var statearr_48151 = (f__13964__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13964__auto__.cljs$core$IFn$_invoke$arity$0() : f__13964__auto__.call(null));(statearr_48151[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13963__auto__);
return statearr_48151;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13965__auto__);
}));
return c__13963__auto__;
});
