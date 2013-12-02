// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.app');
goog.require('cljs.core');
goog.require('clojure.data');
goog.require('cljs.core.async');
goog.require('clojure.zip');
goog.require('clojure.zip');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('clojure.data');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('clojure.set');
foundation.app.input_queue = (function input_queue(){var c__13963__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13964__auto__ = (function (){var switch__13893__auto__ = (function (state_53613){var state_val_53614 = (state_53613[1]);if((state_val_53614 === 3))
{var inst_53611 = (state_53613[2]);var state_53613__$1 = state_53613;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53613__$1,inst_53611);
} else
{if((state_val_53614 === 2))
{var state_53613__$1 = state_53613;var statearr_53615_53624 = state_53613__$1;(statearr_53615_53624[2] = null);
(statearr_53615_53624[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_53614 === 1))
{var state_53613__$1 = state_53613;var statearr_53616_53625 = state_53613__$1;(statearr_53616_53625[2] = null);
(statearr_53616_53625[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
});return ((function (switch__13893__auto__){
return (function() {
var state_machine__13894__auto__ = null;
var state_machine__13894__auto____0 = (function (){var statearr_53620 = (new Array(7));(statearr_53620[0] = state_machine__13894__auto__);
(statearr_53620[1] = 1);
return statearr_53620;
});
var state_machine__13894__auto____1 = (function (state_53613){while(true){
var ret_value__13895__auto__ = (function (){try{while(true){
var result__13896__auto__ = switch__13893__auto__.call(null,state_53613);if(cljs.core.keyword_identical_QMARK_.call(null,result__13896__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13896__auto__;
}
break;
}
}catch (e53621){if((e53621 instanceof Object))
{var ex__13897__auto__ = e53621;var statearr_53622_53626 = state_53613;(statearr_53622_53626[5] = ex__13897__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53613);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e53621;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__53627 = state_53613;
state_53613 = G__53627;
continue;
}
} else
{return ret_value__13895__auto__;
}
break;
}
});
state_machine__13894__auto__ = function(state_53613){
switch(arguments.length){
case 0:
return state_machine__13894__auto____0.call(this);
case 1:
return state_machine__13894__auto____1.call(this,state_53613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13894__auto____0;
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13894__auto____1;
return state_machine__13894__auto__;
})()
;})(switch__13893__auto__))
})();var state__13965__auto__ = (function (){var statearr_53623 = f__13964__auto__.call(null);(statearr_53623[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13963__auto__);
return statearr_53623;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13965__auto__);
}));
return c__13963__auto__;
});
foundation.app.build = (function build(){return null;
});

//# sourceMappingURL=app.js.map