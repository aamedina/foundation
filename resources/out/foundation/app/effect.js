// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.app.effect');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
foundation.app.effect.effect_queue = (function effect_queue(){var c__10297__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10298__auto__ = (function (){var switch__10227__auto__ = (function (state_640634){var state_val_640635 = (state_640634[1]);if((state_val_640635 === 3))
{var inst_640632 = (state_640634[2]);var state_640634__$1 = state_640634;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_640634__$1,inst_640632);
} else
{if((state_val_640635 === 2))
{var state_640634__$1 = state_640634;var statearr_640636_640645 = state_640634__$1;(statearr_640636_640645[2] = null);
(statearr_640636_640645[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_640635 === 1))
{var state_640634__$1 = state_640634;var statearr_640637_640646 = state_640634__$1;(statearr_640637_640646[2] = null);
(statearr_640637_640646[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
});return ((function (switch__10227__auto__){
return (function() {
var state_machine__10228__auto__ = null;
var state_machine__10228__auto____0 = (function (){var statearr_640641 = (new Array(7));(statearr_640641[0] = state_machine__10228__auto__);
(statearr_640641[1] = 1);
return statearr_640641;
});
var state_machine__10228__auto____1 = (function (state_640634){while(true){
var ret_value__10229__auto__ = (function (){try{while(true){
var result__10230__auto__ = switch__10227__auto__.call(null,state_640634);if(cljs.core.keyword_identical_QMARK_.call(null,result__10230__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10230__auto__;
}
break;
}
}catch (e640642){if((e640642 instanceof Object))
{var ex__10231__auto__ = e640642;var statearr_640643_640647 = state_640634;(statearr_640643_640647[5] = ex__10231__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_640634);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e640642;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10229__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__640648 = state_640634;
state_640634 = G__640648;
continue;
}
} else
{return ret_value__10229__auto__;
}
break;
}
});
state_machine__10228__auto__ = function(state_640634){
switch(arguments.length){
case 0:
return state_machine__10228__auto____0.call(this);
case 1:
return state_machine__10228__auto____1.call(this,state_640634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10228__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10228__auto____0;
state_machine__10228__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10228__auto____1;
return state_machine__10228__auto__;
})()
;})(switch__10227__auto__))
})();var state__10299__auto__ = (function (){var statearr_640644 = f__10298__auto__.call(null);(statearr_640644[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10297__auto__);
return statearr_640644;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10299__auto__);
}));
return c__10297__auto__;
});

//# sourceMappingURL=effect.js.map