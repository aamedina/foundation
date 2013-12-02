// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.app.effect');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
foundation.app.effect.effect_queue = (function effect_queue(){var c__10283__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_642971){var state_val_642972 = (state_642971[1]);if((state_val_642972 === 3))
{var inst_642969 = (state_642971[2]);var state_642971__$1 = state_642971;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_642971__$1,inst_642969);
} else
{if((state_val_642972 === 2))
{var state_642971__$1 = state_642971;var statearr_642973_642982 = state_642971__$1;(statearr_642973_642982[2] = null);
(statearr_642973_642982[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_642972 === 1))
{var state_642971__$1 = state_642971;var statearr_642974_642983 = state_642971__$1;(statearr_642974_642983[2] = null);
(statearr_642974_642983[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
});return ((function (switch__10213__auto__){
return (function() {
var state_machine__10214__auto__ = null;
var state_machine__10214__auto____0 = (function (){var statearr_642978 = (new Array(7));(statearr_642978[0] = state_machine__10214__auto__);
(statearr_642978[1] = 1);
return statearr_642978;
});
var state_machine__10214__auto____1 = (function (state_642971){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_642971);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e642979){if((e642979 instanceof Object))
{var ex__10217__auto__ = e642979;var statearr_642980_642984 = state_642971;(statearr_642980_642984[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_642971);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e642979;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__642985 = state_642971;
state_642971 = G__642985;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_642971){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_642971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_642981 = f__10284__auto__.call(null);(statearr_642981[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_642981;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10285__auto__);
}));
return c__10283__auto__;
});

//# sourceMappingURL=effect.js.map