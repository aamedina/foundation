// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.app.render');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
foundation.app.render.render_queue = (function render_queue(){var c__10297__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10298__auto__ = (function (){var switch__10227__auto__ = (function (state_618504){var state_val_618505 = (state_618504[1]);if((state_val_618505 === 3))
{var inst_618502 = (state_618504[2]);var state_618504__$1 = state_618504;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_618504__$1,inst_618502);
} else
{if((state_val_618505 === 2))
{var state_618504__$1 = state_618504;var statearr_618506_618515 = state_618504__$1;(statearr_618506_618515[2] = null);
(statearr_618506_618515[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_618505 === 1))
{var state_618504__$1 = state_618504;var statearr_618507_618516 = state_618504__$1;(statearr_618507_618516[2] = null);
(statearr_618507_618516[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
});return ((function (switch__10227__auto__){
return (function() {
var state_machine__10228__auto__ = null;
var state_machine__10228__auto____0 = (function (){var statearr_618511 = (new Array(7));(statearr_618511[0] = state_machine__10228__auto__);
(statearr_618511[1] = 1);
return statearr_618511;
});
var state_machine__10228__auto____1 = (function (state_618504){while(true){
var ret_value__10229__auto__ = (function (){try{while(true){
var result__10230__auto__ = switch__10227__auto__.call(null,state_618504);if(cljs.core.keyword_identical_QMARK_.call(null,result__10230__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10230__auto__;
}
break;
}
}catch (e618512){if((e618512 instanceof Object))
{var ex__10231__auto__ = e618512;var statearr_618513_618517 = state_618504;(statearr_618513_618517[5] = ex__10231__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_618504);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e618512;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10229__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__618518 = state_618504;
state_618504 = G__618518;
continue;
}
} else
{return ret_value__10229__auto__;
}
break;
}
});
state_machine__10228__auto__ = function(state_618504){
switch(arguments.length){
case 0:
return state_machine__10228__auto____0.call(this);
case 1:
return state_machine__10228__auto____1.call(this,state_618504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10228__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10228__auto____0;
state_machine__10228__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10228__auto____1;
return state_machine__10228__auto__;
})()
;})(switch__10227__auto__))
})();var state__10299__auto__ = (function (){var statearr_618514 = f__10298__auto__.call(null);(statearr_618514[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10297__auto__);
return statearr_618514;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10299__auto__);
}));
return c__10297__auto__;
});

//# sourceMappingURL=render.js.map