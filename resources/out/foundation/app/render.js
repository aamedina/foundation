// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.app.render');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
foundation.app.render.render_queue = (function render_queue(){var c__13963__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13964__auto__ = (function (){var switch__13893__auto__ = (function (state_20910){var state_val_20911 = (state_20910[1]);if((state_val_20911 === 3))
{var inst_20908 = (state_20910[2]);var state_20910__$1 = state_20910;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20910__$1,inst_20908);
} else
{if((state_val_20911 === 2))
{var state_20910__$1 = state_20910;var statearr_20912_20921 = state_20910__$1;(statearr_20912_20921[2] = null);
(statearr_20912_20921[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20911 === 1))
{var state_20910__$1 = state_20910;var statearr_20913_20922 = state_20910__$1;(statearr_20913_20922[2] = null);
(statearr_20913_20922[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
});return ((function (switch__13893__auto__){
return (function() {
var state_machine__13894__auto__ = null;
var state_machine__13894__auto____0 = (function (){var statearr_20917 = (new Array(7));(statearr_20917[0] = state_machine__13894__auto__);
(statearr_20917[1] = 1);
return statearr_20917;
});
var state_machine__13894__auto____1 = (function (state_20910){while(true){
var ret_value__13895__auto__ = (function (){try{while(true){
var result__13896__auto__ = switch__13893__auto__.call(null,state_20910);if(cljs.core.keyword_identical_QMARK_.call(null,result__13896__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13896__auto__;
}
break;
}
}catch (e20918){if((e20918 instanceof Object))
{var ex__13897__auto__ = e20918;var statearr_20919_20923 = state_20910;(statearr_20919_20923[5] = ex__13897__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20910);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20918;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20924 = state_20910;
state_20910 = G__20924;
continue;
}
} else
{return ret_value__13895__auto__;
}
break;
}
});
state_machine__13894__auto__ = function(state_20910){
switch(arguments.length){
case 0:
return state_machine__13894__auto____0.call(this);
case 1:
return state_machine__13894__auto____1.call(this,state_20910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13894__auto____0;
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13894__auto____1;
return state_machine__13894__auto__;
})()
;})(switch__13893__auto__))
})();var state__13965__auto__ = (function (){var statearr_20920 = f__13964__auto__.call(null);(statearr_20920[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13963__auto__);
return statearr_20920;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13965__auto__);
}));
return c__13963__auto__;
});

//# sourceMappingURL=render.js.map