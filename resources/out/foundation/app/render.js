// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.app.render');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
foundation.app.render.render_queue = (function render_queue(){var c__10297__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10298__auto__ = (function (){var switch__10227__auto__ = (function (state_640668){var state_val_640669 = (state_640668[1]);if((state_val_640669 === 3))
{var inst_640666 = (state_640668[2]);var state_640668__$1 = state_640668;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_640668__$1,inst_640666);
} else
{if((state_val_640669 === 2))
{var state_640668__$1 = state_640668;var statearr_640670_640679 = state_640668__$1;(statearr_640670_640679[2] = null);
(statearr_640670_640679[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_640669 === 1))
{var state_640668__$1 = state_640668;var statearr_640671_640680 = state_640668__$1;(statearr_640671_640680[2] = null);
(statearr_640671_640680[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
});return ((function (switch__10227__auto__){
return (function() {
var state_machine__10228__auto__ = null;
var state_machine__10228__auto____0 = (function (){var statearr_640675 = (new Array(7));(statearr_640675[0] = state_machine__10228__auto__);
(statearr_640675[1] = 1);
return statearr_640675;
});
var state_machine__10228__auto____1 = (function (state_640668){while(true){
var ret_value__10229__auto__ = (function (){try{while(true){
var result__10230__auto__ = switch__10227__auto__.call(null,state_640668);if(cljs.core.keyword_identical_QMARK_.call(null,result__10230__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10230__auto__;
}
break;
}
}catch (e640676){if((e640676 instanceof Object))
{var ex__10231__auto__ = e640676;var statearr_640677_640681 = state_640668;(statearr_640677_640681[5] = ex__10231__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_640668);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e640676;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10229__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__640682 = state_640668;
state_640668 = G__640682;
continue;
}
} else
{return ret_value__10229__auto__;
}
break;
}
});
state_machine__10228__auto__ = function(state_640668){
switch(arguments.length){
case 0:
return state_machine__10228__auto____0.call(this);
case 1:
return state_machine__10228__auto____1.call(this,state_640668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10228__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10228__auto____0;
state_machine__10228__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10228__auto____1;
return state_machine__10228__auto__;
})()
;})(switch__10227__auto__))
})();var state__10299__auto__ = (function (){var statearr_640678 = f__10298__auto__.call(null);(statearr_640678[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10297__auto__);
return statearr_640678;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10299__auto__);
}));
return c__10297__auto__;
});

//# sourceMappingURL=render.js.map