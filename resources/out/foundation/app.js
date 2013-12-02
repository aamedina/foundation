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
foundation.app.input_queue = (function input_queue(){var c__10343__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10344__auto__ = (function (){var switch__10273__auto__ = (function (state_26368){var state_val_26369 = (state_26368[1]);if((state_val_26369 === 3))
{var inst_26366 = (state_26368[2]);var state_26368__$1 = state_26368;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26368__$1,inst_26366);
} else
{if((state_val_26369 === 2))
{var state_26368__$1 = state_26368;var statearr_26370_26379 = state_26368__$1;(statearr_26370_26379[2] = null);
(statearr_26370_26379[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26369 === 1))
{var state_26368__$1 = state_26368;var statearr_26371_26380 = state_26368__$1;(statearr_26371_26380[2] = null);
(statearr_26371_26380[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
});return ((function (switch__10273__auto__){
return (function() {
var state_machine__10274__auto__ = null;
var state_machine__10274__auto____0 = (function (){var statearr_26375 = (new Array(7));(statearr_26375[0] = state_machine__10274__auto__);
(statearr_26375[1] = 1);
return statearr_26375;
});
var state_machine__10274__auto____1 = (function (state_26368){while(true){
var ret_value__10275__auto__ = (function (){try{while(true){
var result__10276__auto__ = switch__10273__auto__.call(null,state_26368);if(cljs.core.keyword_identical_QMARK_.call(null,result__10276__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10276__auto__;
}
break;
}
}catch (e26376){if((e26376 instanceof Object))
{var ex__10277__auto__ = e26376;var statearr_26377_26381 = state_26368;(statearr_26377_26381[5] = ex__10277__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26368);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26376;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10275__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26382 = state_26368;
state_26368 = G__26382;
continue;
}
} else
{return ret_value__10275__auto__;
}
break;
}
});
state_machine__10274__auto__ = function(state_26368){
switch(arguments.length){
case 0:
return state_machine__10274__auto____0.call(this);
case 1:
return state_machine__10274__auto____1.call(this,state_26368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10274__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10274__auto____0;
state_machine__10274__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10274__auto____1;
return state_machine__10274__auto__;
})()
;})(switch__10273__auto__))
})();var state__10345__auto__ = (function (){var statearr_26378 = f__10344__auto__.call(null);(statearr_26378[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10343__auto__);
return statearr_26378;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10345__auto__);
}));
return c__10343__auto__;
});
foundation.app.build = (function build(){return null;
});

//# sourceMappingURL=app.js.map