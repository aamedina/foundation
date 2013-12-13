// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.services');
goog.require('cljs.core');
goog.require('foundation.app');
goog.require('foundation.app.data.dependency');
goog.require('cljs.core.async');
goog.require('clojure.zip');
goog.require('foundation.app');
goog.require('enfocus.events');
goog.require('foundation.app.message');
goog.require('foundation.app.models');
goog.require('enfocus.events');
goog.require('foundation.app.data.component');
goog.require('foundation.behavior');
goog.require('clojure.zip');
goog.require('enfocus.core');
goog.require('dommy.core');
goog.require('foundation.rendering');
goog.require('foundation.app.xhr');
goog.require('enfocus.core');
goog.require('foundation.rendering');
goog.require('foundation.app.util');
goog.require('foundation.app.data.component');
goog.require('clojure.set');
goog.require('foundation.templates');
goog.require('clojure.string');
goog.require('foundation.app');
goog.require('clojure.string');
goog.require('foundation.templates');
goog.require('foundation.app.data.dependency');
goog.require('cljs.core.match');
goog.require('clojure.browser.repl');
goog.require('clojure.set');
goog.require('foundation.app.message');
goog.require('foundation.models');
goog.require('foundation.app.models');
goog.require('cljs.core.async');
goog.require('foundation.app.xhr');
goog.require('foundation.app.util');
goog.require('foundation.app.data.dependency');
goog.require('foundation.behavior');
goog.require('dommy.core');
goog.require('foundation.models');
cljs.core._add_method.call(null,foundation.app.effect,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init","init",1017141378),cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null)], true),cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null)], true),new cljs.core.Keyword(null,"vals","vals",1017516260)], null),(function (message,input_queue,input){var c__18838__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18839__auto__ = (function (){var switch__18768__auto__ = (function (state_304042){var state_val_304043 = (state_304042[1]);if((state_val_304043 === 4))
{var inst_304040 = (state_304042[2]);var state_304042__$1 = state_304042;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_304042__$1,inst_304040);
} else
{if((state_val_304043 === 3))
{var inst_304026 = (state_304042[7]);var inst_304033 = (state_304042[2]);var inst_304034 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"model","model",1117974171)];var inst_304035 = [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)];var inst_304036 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_304035,null));var inst_304037 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_304036,inst_304026];var inst_304038 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_304034,inst_304037);var state_304042__$1 = (function (){var statearr_304044 = state_304042;(statearr_304044[8] = inst_304033);
return statearr_304044;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_304042__$1,4,input_queue,inst_304038);
} else
{if((state_val_304043 === 2))
{var inst_304025 = (state_304042[2]);var inst_304026 = cljs.core.first.call(null,inst_304025);var inst_304027 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"collection","collection",3567559184)];var inst_304028 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)];var inst_304029 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_304028,null));var inst_304030 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_304029,inst_304025];var inst_304031 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_304027,inst_304030);var state_304042__$1 = (function (){var statearr_304045 = state_304042;(statearr_304045[7] = inst_304026);
return statearr_304045;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_304042__$1,3,input_queue,inst_304031);
} else
{if((state_val_304043 === 1))
{var inst_304023 = foundation.app.models.fetch.call(null,foundation.models.accounts);var state_304042__$1 = state_304042;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_304042__$1,2,inst_304023);
} else
{return null;
}
}
}
}
});return ((function (switch__18768__auto__){
return (function() {
var state_machine__18769__auto__ = null;
var state_machine__18769__auto____0 = (function (){var statearr_304049 = (new Array(9));(statearr_304049[0] = state_machine__18769__auto__);
(statearr_304049[1] = 1);
return statearr_304049;
});
var state_machine__18769__auto____1 = (function (state_304042){while(true){
var ret_value__18770__auto__ = (function (){try{while(true){
var result__18771__auto__ = switch__18768__auto__.call(null,state_304042);if(cljs.core.keyword_identical_QMARK_.call(null,result__18771__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18771__auto__;
}
break;
}
}catch (e304050){if((e304050 instanceof Object))
{var ex__18772__auto__ = e304050;var statearr_304051_304053 = state_304042;(statearr_304051_304053[5] = ex__18772__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_304042);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e304050;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18770__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__304054 = state_304042;
state_304042 = G__304054;
continue;
}
} else
{return ret_value__18770__auto__;
}
break;
}
});
state_machine__18769__auto__ = function(state_304042){
switch(arguments.length){
case 0:
return state_machine__18769__auto____0.call(this);
case 1:
return state_machine__18769__auto____1.call(this,state_304042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18769__auto____0;
state_machine__18769__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18769__auto____1;
return state_machine__18769__auto__;
})()
;})(switch__18768__auto__))
})();var state__18840__auto__ = (function (){var statearr_304052 = f__18839__auto__.call(null);(statearr_304052[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18838__auto__);
return statearr_304052;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18840__auto__);
}));
return c__18838__auto__;
}));

//# sourceMappingURL=services.js.map