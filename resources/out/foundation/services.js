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
cljs.core._add_method.call(null,foundation.app.effect,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init","init",1017141378),cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null)], true),new cljs.core.Keyword(null,"vals","vals",1017516260)], null),(function (message,input_queue,input){var c__18289__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_379763){var state_val_379764 = (state_379763[1]);if((state_val_379764 === 4))
{var inst_379761 = (state_379763[2]);var state_379763__$1 = state_379763;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_379763__$1,inst_379761);
} else
{if((state_val_379764 === 3))
{var inst_379744 = (state_379763[7]);var inst_379745 = (state_379763[8]);var inst_379754 = (state_379763[2]);var inst_379755 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"account","account",4131552671),new cljs.core.Keyword(null,"collection","collection",3567559184),new cljs.core.Keyword(null,"resource","resource",672839552)];var inst_379756 = [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)];var inst_379757 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_379756,null));var inst_379758 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_379757,inst_379745,inst_379744,foundation.models.accounts];var inst_379759 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_379755,inst_379758);var state_379763__$1 = (function (){var statearr_379765 = state_379763;(statearr_379765[9] = inst_379754);
return statearr_379765;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_379763__$1,4,input_queue,inst_379759);
} else
{if((state_val_379764 === 2))
{var inst_379744 = (state_379763[7]);var inst_379745 = (state_379763[8]);var inst_379743 = (state_379763[2]);var inst_379744__$1 = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"name","name",1017277949),inst_379743);var inst_379745__$1 = cljs.core.first.call(null,inst_379744__$1);var inst_379746 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"model","model",1117974171),new cljs.core.Keyword(null,"account","account",4131552671),new cljs.core.Keyword(null,"stats-model","stats-model",651400173),new cljs.core.Keyword(null,"granularity","granularity",2833735872),new cljs.core.Keyword(null,"metrics","metrics",1969730613)];var inst_379747 = [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)];var inst_379748 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_379747,null));var inst_379749 = foundation.models.metrics.call(null,foundation.models.accounts);var inst_379750 = cljs.core.get.call(null,inst_379749,"Impressions");var inst_379751 = [new cljs.core.Keyword(null,"load","load",1017231448),inst_379748,inst_379745__$1,inst_379745__$1,foundation.models.account_stats,"HOUR",inst_379750];var inst_379752 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_379746,inst_379751);var state_379763__$1 = (function (){var statearr_379766 = state_379763;(statearr_379766[7] = inst_379744__$1);
(statearr_379766[8] = inst_379745__$1);
return statearr_379766;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_379763__$1,3,input_queue,inst_379752);
} else
{if((state_val_379764 === 1))
{var inst_379741 = foundation.app.xhr.GET.call(null,"http://192.241.130.213:8080/user/15/ads-api/bootstrap");var state_379763__$1 = state_379763;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_379763__$1,2,inst_379741);
} else
{return null;
}
}
}
}
});return ((function (switch__18219__auto__){
return (function() {
var state_machine__18220__auto__ = null;
var state_machine__18220__auto____0 = (function (){var statearr_379770 = [null,null,null,null,null,null,null,null,null,null];(statearr_379770[0] = state_machine__18220__auto__);
(statearr_379770[1] = 1);
return statearr_379770;
});
var state_machine__18220__auto____1 = (function (state_379763){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_379763);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e379771){if((e379771 instanceof Object))
{var ex__18223__auto__ = e379771;var statearr_379772_379774 = state_379763;(statearr_379772_379774[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_379763);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e379771;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__379775 = state_379763;
state_379763 = G__379775;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_379763){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_379763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_379773 = f__18290__auto__.call(null);(statearr_379773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto__);
return statearr_379773;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18291__auto__);
}));
return c__18289__auto__;
}));
cljs.core._add_method.call(null,foundation.app.effect,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load","load",1017231448),cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null)], true),new cljs.core.Keyword(null,"single-val","single-val",1926385550)], null),(function (message,input_queue,input){var c__18289__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18290__auto__ = (function (){var switch__18219__auto__ = (function (state_379808){var state_val_379809 = (state_379808[1]);if((state_val_379809 === 5))
{var inst_379806 = (state_379808[2]);var state_379808__$1 = state_379808;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_379808__$1,inst_379806);
} else
{if((state_val_379809 === 4))
{var inst_379783 = (state_379808[7]);var inst_379799 = (state_379808[2]);var inst_379800 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"stats","stats",1123661841)];var inst_379801 = [new cljs.core.Keyword(null,"chart","chart",1108527952)];var inst_379802 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_379801,null));var inst_379803 = [new cljs.core.Keyword(null,"stats","stats",1123661841),inst_379802,inst_379783];var inst_379804 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_379800,inst_379803);var state_379808__$1 = (function (){var statearr_379810 = state_379808;(statearr_379810[8] = inst_379799);
return statearr_379810;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_379808__$1,5,input_queue,inst_379804);
} else
{if((state_val_379809 === 3))
{var inst_379792 = (state_379808[2]);var inst_379793 = [foundation.app.message.type,foundation.app.message.path,new cljs.core.Keyword(null,"stats","stats",1123661841)];var inst_379794 = [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)];var inst_379795 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_379794,null));var inst_379796 = [new cljs.core.Keyword(null,"stats","stats",1123661841),inst_379795,inst_379792];var inst_379797 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_379793,inst_379796);var state_379808__$1 = state_379808;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_379808__$1,4,input_queue,inst_379797);
} else
{if((state_val_379809 === 2))
{var inst_379783 = (state_379808[2]);var inst_379784 = new cljs.core.Keyword(null,"stats-model","stats-model",651400173).cljs$core$IFn$_invoke$arity$1(input);var inst_379785 = new cljs.core.Keyword(null,"model","model",1117974171).cljs$core$IFn$_invoke$arity$1(input);var inst_379786 = [new cljs.core.Keyword(null,"start-time","start-time",3689550026),new cljs.core.Keyword(null,"end-time","end-time",2693279729)];var inst_379787 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_379786,null));var inst_379788 = cljs.core.select_keys.call(null,input,inst_379787);var inst_379789 = cljs.core.assoc.call(null,inst_379788,new cljs.core.Keyword(null,"granularity","granularity",2833735872),"TOTAL");var inst_379790 = foundation.app.models.fetch.call(null,inst_379784,new cljs.core.Keyword(null,"params","params",4313443576),inst_379785,new cljs.core.Keyword(null,"query-params","query-params",1080249757),inst_379789);var state_379808__$1 = (function (){var statearr_379811 = state_379808;(statearr_379811[7] = inst_379783);
return statearr_379811;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_379808__$1,3,inst_379790);
} else
{if((state_val_379809 === 1))
{var inst_379776 = new cljs.core.Keyword(null,"stats-model","stats-model",651400173).cljs$core$IFn$_invoke$arity$1(input);var inst_379777 = new cljs.core.Keyword(null,"model","model",1117974171).cljs$core$IFn$_invoke$arity$1(input);var inst_379778 = [new cljs.core.Keyword(null,"start-time","start-time",3689550026),new cljs.core.Keyword(null,"end-time","end-time",2693279729),new cljs.core.Keyword(null,"granularity","granularity",2833735872)];var inst_379779 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_379778,null));var inst_379780 = cljs.core.select_keys.call(null,input,inst_379779);var inst_379781 = foundation.app.models.fetch.call(null,inst_379776,new cljs.core.Keyword(null,"params","params",4313443576),inst_379777,new cljs.core.Keyword(null,"query-params","query-params",1080249757),inst_379780);var state_379808__$1 = state_379808;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_379808__$1,2,inst_379781);
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
var state_machine__18220__auto____0 = (function (){var statearr_379815 = [null,null,null,null,null,null,null,null,null];(statearr_379815[0] = state_machine__18220__auto__);
(statearr_379815[1] = 1);
return statearr_379815;
});
var state_machine__18220__auto____1 = (function (state_379808){while(true){
var ret_value__18221__auto__ = (function (){try{while(true){
var result__18222__auto__ = switch__18219__auto__.call(null,state_379808);if(cljs.core.keyword_identical_QMARK_.call(null,result__18222__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18222__auto__;
}
break;
}
}catch (e379816){if((e379816 instanceof Object))
{var ex__18223__auto__ = e379816;var statearr_379817_379819 = state_379808;(statearr_379817_379819[5] = ex__18223__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_379808);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e379816;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18221__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__379820 = state_379808;
state_379808 = G__379820;
continue;
}
} else
{return ret_value__18221__auto__;
}
break;
}
});
state_machine__18220__auto__ = function(state_379808){
switch(arguments.length){
case 0:
return state_machine__18220__auto____0.call(this);
case 1:
return state_machine__18220__auto____1.call(this,state_379808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18220__auto____0;
state_machine__18220__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18220__auto____1;
return state_machine__18220__auto__;
})()
;})(switch__18219__auto__))
})();var state__18291__auto__ = (function (){var statearr_379818 = f__18290__auto__.call(null);(statearr_379818[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18289__auto__);
return statearr_379818;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18291__auto__);
}));
return c__18289__auto__;
}));

//# sourceMappingURL=services.js.map