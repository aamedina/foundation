// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.app.effect');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
foundation.app.effect.effect_queue = (function effect_queue(){var c__10297__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10298__auto__ = (function (){var switch__10227__auto__ = (function (state_472829){var state_val_472830 = (state_472829[1]);if((state_val_472830 === 3))
{var inst_472827 = (state_472829[2]);var state_472829__$1 = state_472829;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_472829__$1,inst_472827);
} else
{if((state_val_472830 === 2))
{var state_472829__$1 = state_472829;var statearr_472831_472840 = state_472829__$1;(statearr_472831_472840[2] = null);
(statearr_472831_472840[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_472830 === 1))
{var state_472829__$1 = state_472829;var statearr_472832_472841 = state_472829__$1;(statearr_472832_472841[2] = null);
(statearr_472832_472841[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
});return ((function (switch__10227__auto__){
return (function() {
var state_machine__10228__auto__ = null;
var state_machine__10228__auto____0 = (function (){var statearr_472836 = (new Array(7));(statearr_472836[0] = state_machine__10228__auto__);
(statearr_472836[1] = 1);
return statearr_472836;
});
var state_machine__10228__auto____1 = (function (state_472829){while(true){
var ret_value__10229__auto__ = (function (){try{while(true){
var result__10230__auto__ = switch__10227__auto__.call(null,state_472829);if(cljs.core.keyword_identical_QMARK_.call(null,result__10230__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10230__auto__;
}
break;
}
}catch (e472837){if((e472837 instanceof Object))
{var ex__10231__auto__ = e472837;var statearr_472838_472842 = state_472829;(statearr_472838_472842[5] = ex__10231__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_472829);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e472837;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10229__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__472843 = state_472829;
state_472829 = G__472843;
continue;
}
} else
{return ret_value__10229__auto__;
}
break;
}
});
state_machine__10228__auto__ = function(state_472829){
switch(arguments.length){
case 0:
return state_machine__10228__auto____0.call(this);
case 1:
return state_machine__10228__auto____1.call(this,state_472829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10228__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10228__auto____0;
state_machine__10228__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10228__auto____1;
return state_machine__10228__auto__;
})()
;})(switch__10227__auto__))
})();var state__10299__auto__ = (function (){var statearr_472839 = f__10298__auto__.call(null);(statearr_472839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10297__auto__);
return statearr_472839;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10299__auto__);
}));
return c__10297__auto__;
});

//# sourceMappingURL=effect.js.map