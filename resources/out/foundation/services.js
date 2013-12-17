// Compiled by ClojureScript 0.0-2120
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
goog.require('goog.date');
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
goog.require('goog.date');
goog.require('foundation.app.data.dependency');
goog.require('foundation.behavior');
goog.require('dommy.core');
goog.require('foundation.models');
cljs.core._add_method.call(null,foundation.app.effect,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init","init",1017141378),cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null)], true),new cljs.core.Keyword(null,"vals","vals",1017516260)], null),(function (message,input_queue,input){var c__18289__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_352720){var state_val_352721 = (state_352720[1]);if((state_val_352721 === 4))
{var inst_352718 = (state_352720[2]);var state_352720__$1 = state_352720;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_352720__$1,inst_352718);
} else
{if((state_val_352721 === 3))
{var inst_352701 = (state_352720[7]);var inst_352702 = (state_352720[8]);var inst_352711 = (state_352720[2]);var inst_352712 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"account","account",4131552671),new cljs.core.Keyword(null,"collection","collection",3567559184),new cljs.core.Keyword(null,"resource","resource",672839552)];var inst_352713 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)];var inst_352714 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_352713,null));var inst_352715 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_352714,inst_352702,inst_352701,foundation.models.accounts];var inst_352716 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_352712,inst_352715);var state_352720__$1 = (function (){var statearr_352722 = state_352720;(statearr_352722[9] = inst_352711);
return statearr_352722;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_352720__$1,4,input_queue,inst_352716);
} else
{if((state_val_352721 === 2))
{var inst_352701 = (state_352720[7]);var inst_352702 = (state_352720[8]);var inst_352700 = (state_352720[2]);var inst_352701__$1 = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"name","name",1017277949),inst_352700);var inst_352702__$1 = cljs.core.first.call(null,inst_352701__$1);var inst_352703 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"model","model",1117974171),new cljs.core.Keyword(null,"account","account",4131552671),new cljs.core.Keyword(null,"stats-model","stats-model",651400173),new cljs.core.Keyword(null,"granularity","granularity",2833735872),new cljs.core.Keyword(null,"metrics","metrics",1969730613)];var inst_352704 = [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)];var inst_352705 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_352704,null));var inst_352706 = foundation.models.metrics.call(null,foundation.models.accounts);var inst_352707 = cljs.core.get.call(null,inst_352706,"Impressions");var inst_352708 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_352705,inst_352702__$1,inst_352702__$1,foundation.models.account_stats,"HOUR",inst_352707];var inst_352709 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_352703,inst_352708);var state_352720__$1 = (function (){var statearr_352723 = state_352720;(statearr_352723[7] = inst_352701__$1);
(statearr_352723[8] = inst_352702__$1);
return statearr_352723;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_352720__$1,3,input_queue,inst_352709);
} else
{if((state_val_352721 === 1))
{var inst_352698 = foundation.app.xhr.GET.call(null,"http://192.241.130.213:8080/user/15/ads-api/bootstrap");var state_352720__$1 = state_352720;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_352720__$1,2,inst_352698);
} else
{return null;
}
}
}
}
});return ((function (switch__18219__auto__){
return (function() {
var state_machine__18220__auto__ = null;
var state_machine__18220__auto____0 = (function (){var statearr_352727 = [null,null,null,null,null,null,null,null,null,null];(statearr_352727[0] = state_machine__18220__auto__);
(statearr_352727[1] = 1);
return statearr_352727;
});
var state_machine__18220__auto____1 = (function (state_352720){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_352720);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e352728){if((e352728 instanceof Object))
{var ex__18223__auto__ = e352728;var statearr_352729_352731 = state_352720;(statearr_352729_352731[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_352720);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e352728;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__352732 = state_352720;
state_352720 = G__352732;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_352720){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_352720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_352730 = f__18290__auto__.call(null);(statearr_352730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto__);
return statearr_352730;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18291__auto__);
}));
return c__18289__auto__;
}));
cljs.core._add_method.call(null,foundation.app.effect,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load","load",1017231448),cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null)], true),new cljs.core.Keyword(null,"single-val","single-val",1926385550)], null),(function (message,input_queue,input){var c__18289__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_352765){var state_val_352766 = (state_352765[1]);if((state_val_352766 === 5))
{var inst_352763 = (state_352765[2]);var state_352765__$1 = state_352765;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_352765__$1,inst_352763);
} else
{if((state_val_352766 === 4))
{var inst_352740 = (state_352765[7]);var inst_352756 = (state_352765[2]);var inst_352757 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"stats","stats",1123661841)];var inst_352758 = [new cljs.core.Keyword(null,"chart","chart",1108527952)];var inst_352759 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_352758,null));var inst_352760 = [new cljs.core.Keyword(null,"stats","stats",1123661841),inst_352759,inst_352740];var inst_352761 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_352757,inst_352760);var state_352765__$1 = (function (){var statearr_352767 = state_352765;(statearr_352767[8] = inst_352756);
return statearr_352767;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_352765__$1,5,input_queue,inst_352761);
} else
{if((state_val_352766 === 3))
{var inst_352749 = (state_352765[2]);var inst_352750 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"stats","stats",1123661841)];var inst_352751 = [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)];var inst_352752 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_352751,null));var inst_352753 = [new cljs.core.Keyword(null,"stats","stats",1123661841),inst_352752,inst_352749];var inst_352754 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_352750,inst_352753);var state_352765__$1 = state_352765;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_352765__$1,4,input_queue,inst_352754);
} else
{if((state_val_352766 === 2))
{var inst_352740 = (state_352765[2]);var inst_352741 = new cljs.core.Keyword(null,"stats-model","stats-model",651400173).cljs$core$IFn$_invoke$arity$1(input);var inst_352742 = new cljs.core.Keyword(null,"model","model",1117974171).cljs$core$IFn$_invoke$arity$1(input);var inst_352743 = [new cljs.core.Keyword(null,"start-time","start-time",3689550026),new cljs.core.Keyword(null,"end-time","end-time",2693279729)];var inst_352744 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_352743,null));var inst_352745 = cljs.core.select_keys.call(null,input,inst_352744);var inst_352746 = cljs.core.assoc.call(null,inst_352745,new cljs.core.Keyword(null,"granularity","granularity",2833735872),"TOTAL");var inst_352747 = foundation.app.models.fetch.call(null,inst_352741,new cljs.core.Keyword(null,"params","params",4313443576),inst_352742,new cljs.core.Keyword(null,"query-params","query-params",1080249757),inst_352746);var state_352765__$1 = (function (){var statearr_352768 = state_352765;(statearr_352768[7] = inst_352740);
return statearr_352768;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_352765__$1,3,inst_352747);
} else
{if((state_val_352766 === 1))
{var inst_352733 = new cljs.core.Keyword(null,"stats-model","stats-model",651400173).cljs$core$IFn$_invoke$arity$1(input);var inst_352734 = new cljs.core.Keyword(null,"model","model",1117974171).cljs$core$IFn$_invoke$arity$1(input);var inst_352735 = [new cljs.core.Keyword(null,"start-time","start-time",3689550026),new cljs.core.Keyword(null,"end-time","end-time",2693279729),new cljs.core.Keyword(null,"granularity","granularity",2833735872)];var inst_352736 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_352735,null));var inst_352737 = cljs.core.select_keys.call(null,input,inst_352736);var inst_352738 = foundation.app.models.fetch.call(null,inst_352733,new cljs.core.Keyword(null,"params","params",4313443576),inst_352734,new cljs.core.Keyword(null,"query-params","query-params",1080249757),inst_352737);var state_352765__$1 = state_352765;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_352765__$1,2,inst_352738);
} else
{return null;
}
}
}
}
}
});return ((function (switch__18219__auto__){
return (function() {
var state_machine__18220__auto__ = null;
var state_machine__18220__auto____0 = (function (){var statearr_352772 = [null,null,null,null,null,null,null,null,null];(statearr_352772[0] = state_machine__18220__auto__);
(statearr_352772[1] = 1);
return statearr_352772;
});
var state_machine__18220__auto____1 = (function (state_352765){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_352765);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e352773){if((e352773 instanceof Object))
{var ex__18223__auto__ = e352773;var statearr_352774_352776 = state_352765;(statearr_352774_352776[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_352765);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e352773;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__352777 = state_352765;
state_352765 = G__352777;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_352765){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_352765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_352775 = f__18290__auto__.call(null);(statearr_352775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto__);
return statearr_352775;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18291__auto__);
}));
return c__18289__auto__;
}));

//# sourceMappingURL=services.js.map