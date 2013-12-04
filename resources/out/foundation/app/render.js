// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.app.render');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
foundation.app.render.render_queue = (function render_queue(){var c__16593__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16594__auto__ = (function (){var switch__16523__auto__ = (function (state_23506){var state_val_23507 = (state_23506[1]);if((state_val_23507 === 3))
{var inst_23504 = (state_23506[2]);var state_23506__$1 = state_23506;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23506__$1,inst_23504);
} else
{if((state_val_23507 === 2))
{var state_23506__$1 = state_23506;var statearr_23508_23517 = state_23506__$1;(statearr_23508_23517[2] = null);
(statearr_23508_23517[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23507 === 1))
{var state_23506__$1 = state_23506;var statearr_23509_23518 = state_23506__$1;(statearr_23509_23518[2] = null);
(statearr_23509_23518[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
});return ((function (switch__16523__auto__){
return (function() {
var state_machine__16524__auto__ = null;
var state_machine__16524__auto____0 = (function (){var statearr_23513 = (new Array(7));(statearr_23513[0] = state_machine__16524__auto__);
(statearr_23513[1] = 1);
return statearr_23513;
});
var state_machine__16524__auto____1 = (function (state_23506){while(true){
var ret_value__16525__auto__ = (function (){try{while(true){
var result__16526__auto__ = switch__16523__auto__.call(null,state_23506);if(cljs.core.keyword_identical_QMARK_.call(null,result__16526__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16526__auto__;
}
break;
}
}catch (e23514){if((e23514 instanceof Object))
{var ex__16527__auto__ = e23514;var statearr_23515_23519 = state_23506;(statearr_23515_23519[5] = ex__16527__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23506);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23514;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16525__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23520 = state_23506;
state_23506 = G__23520;
continue;
}
} else
{return ret_value__16525__auto__;
}
break;
}
});
state_machine__16524__auto__ = function(state_23506){
switch(arguments.length){
case 0:
return state_machine__16524__auto____0.call(this);
case 1:
return state_machine__16524__auto____1.call(this,state_23506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16524__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16524__auto____0;
state_machine__16524__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16524__auto____1;
return state_machine__16524__auto__;
})()
;})(switch__16523__auto__))
})();var state__16595__auto__ = (function (){var statearr_23516 = f__16594__auto__.call(null);(statearr_23516[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16593__auto__);
return statearr_23516;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16595__auto__);
}));
return c__16593__auto__;
});

//# sourceMappingURL=render.js.map