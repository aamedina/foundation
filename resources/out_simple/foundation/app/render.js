// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.app.render');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
foundation.app.render.render_queue = (function render_queue(){var c__13963__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13964__auto__ = (function (){var switch__13893__auto__ = (function (state_34635){var state_val_34636 = (state_34635[1]);if((state_val_34636 === 3))
{var inst_34633 = (state_34635[2]);var state_34635__$1 = state_34635;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34635__$1,inst_34633);
} else
{if((state_val_34636 === 2))
{var state_34635__$1 = state_34635;var statearr_34637_34646 = state_34635__$1;(statearr_34637_34646[2] = null);
(statearr_34637_34646[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34636 === 1))
{var state_34635__$1 = state_34635;var statearr_34638_34647 = state_34635__$1;(statearr_34638_34647[2] = null);
(statearr_34638_34647[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
});return ((function (switch__13893__auto__){
return (function() {
var state_machine__13894__auto__ = null;
var state_machine__13894__auto____0 = (function (){var statearr_34642 = (new Array(7));(statearr_34642[0] = state_machine__13894__auto__);
(statearr_34642[1] = 1);
return statearr_34642;
});
var state_machine__13894__auto____1 = (function (state_34635){while(true){
var ret_value__13895__auto__ = (function (){try{while(true){
var result__13896__auto__ = switch__13893__auto__.call(null,state_34635);if(cljs.core.keyword_identical_QMARK_.call(null,result__13896__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13896__auto__;
}
break;
}
}catch (e34643){if((e34643 instanceof Object))
{var ex__13897__auto__ = e34643;var statearr_34644_34648 = state_34635;(statearr_34644_34648[5] = ex__13897__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34635);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34643;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13895__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34649 = state_34635;
state_34635 = G__34649;
continue;
}
} else
{return ret_value__13895__auto__;
}
break;
}
});
state_machine__13894__auto__ = function(state_34635){
switch(arguments.length){
case 0:
return state_machine__13894__auto____0.call(this);
case 1:
return state_machine__13894__auto____1.call(this,state_34635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13894__auto____0;
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13894__auto____1;
return state_machine__13894__auto__;
})()
;})(switch__13893__auto__))
})();var state__13965__auto__ = (function (){var statearr_34645 = f__13964__auto__.call(null);(statearr_34645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13963__auto__);
return statearr_34645;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13965__auto__);
}));
return c__13963__auto__;
});
