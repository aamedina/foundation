// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.app.render');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
foundation.app.render.render_queue = (function render_queue(){var c__10283__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_643141){var state_val_643142 = (state_643141[1]);if((state_val_643142 === 3))
{var inst_643139 = (state_643141[2]);var state_643141__$1 = state_643141;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_643141__$1,inst_643139);
} else
{if((state_val_643142 === 2))
{var state_643141__$1 = state_643141;var statearr_643143_643152 = state_643141__$1;(statearr_643143_643152[2] = null);
(statearr_643143_643152[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_643142 === 1))
{var state_643141__$1 = state_643141;var statearr_643144_643153 = state_643141__$1;(statearr_643144_643153[2] = null);
(statearr_643144_643153[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
});return ((function (switch__10213__auto__){
return (function() {
var state_machine__10214__auto__ = null;
var state_machine__10214__auto____0 = (function (){var statearr_643148 = (new Array(7));(statearr_643148[0] = state_machine__10214__auto__);
(statearr_643148[1] = 1);
return statearr_643148;
});
var state_machine__10214__auto____1 = (function (state_643141){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_643141);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e643149){if((e643149 instanceof Object))
{var ex__10217__auto__ = e643149;var statearr_643150_643154 = state_643141;(statearr_643150_643154[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_643141);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e643149;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__643155 = state_643141;
state_643141 = G__643155;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_643141){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_643141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_643151 = f__10284__auto__.call(null);(statearr_643151[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_643151;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10285__auto__);
}));
return c__10283__auto__;
});

//# sourceMappingURL=render.js.map