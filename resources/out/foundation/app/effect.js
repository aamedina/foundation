// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.app.effect');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
foundation.app.effect.effect_queue = (function effect_queue(){var c__13963__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13964__auto__ = (function (){var switch__13893__auto__ = (function (state_20876){var state_val_20877 = (state_20876[1]);if((state_val_20877 === 3))
{var inst_20874 = (state_20876[2]);var state_20876__$1 = state_20876;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20876__$1,inst_20874);
} else
{if((state_val_20877 === 2))
{var state_20876__$1 = state_20876;var statearr_20878_20887 = state_20876__$1;(statearr_20878_20887[2] = null);
(statearr_20878_20887[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20877 === 1))
{var state_20876__$1 = state_20876;var statearr_20879_20888 = state_20876__$1;(statearr_20879_20888[2] = null);
(statearr_20879_20888[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
});return ((function (switch__13893__auto__){
return (function() {
var state_machine__13894__auto__ = null;
var state_machine__13894__auto____0 = (function (){var statearr_20883 = (new Array(7));(statearr_20883[0] = state_machine__13894__auto__);
(statearr_20883[1] = 1);
return statearr_20883;
});
var state_machine__13894__auto____1 = (function (state_20876){while(true){
var ret_value__13895__auto__ = (function (){try{while(true){
var result__13896__auto__ = switch__13893__auto__.call(null,state_20876);if(cljs.core.keyword_identical_QMARK_.call(null,result__13896__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13896__auto__;
}
break;
}
}catch (e20884){if((e20884 instanceof Object))
{var ex__13897__auto__ = e20884;var statearr_20885_20889 = state_20876;(statearr_20885_20889[5] = ex__13897__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20876);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20884;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20890 = state_20876;
state_20876 = G__20890;
continue;
}
} else
{return ret_value__13895__auto__;
}
break;
}
});
state_machine__13894__auto__ = function(state_20876){
switch(arguments.length){
case 0:
return state_machine__13894__auto____0.call(this);
case 1:
return state_machine__13894__auto____1.call(this,state_20876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13894__auto____0;
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13894__auto____1;
return state_machine__13894__auto__;
})()
;})(switch__13893__auto__))
})();var state__13965__auto__ = (function (){var statearr_20886 = f__13964__auto__.call(null);(statearr_20886[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13963__auto__);
return statearr_20886;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13965__auto__);
}));
return c__13963__auto__;
});

//# sourceMappingURL=effect.js.map