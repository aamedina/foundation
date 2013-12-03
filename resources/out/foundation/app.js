// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.app');
goog.require('cljs.core');
goog.require('clojure.data');
goog.require('cljs.core.async');
goog.require('clojure.zip');
goog.require('clojure.data');
goog.require('foundation.app.message');
goog.require('clojure.zip');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('foundation.app.message');
goog.require('clojure.core');
goog.require('cljs.core.async');
goog.require('clojure.core');
foundation.app.transform = (function (){var method_table__8563__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8564__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8565__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8566__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8567__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("transform",cljs.core.juxt.call(null,foundation.app.message.type,foundation.app.message.topic),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8567__auto__,method_table__8563__auto__,prefer_table__8564__auto__,method_cache__8565__auto__,cached_hierarchy__8566__auto__));
})();
foundation.app.effect = (function (){var method_table__8563__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8564__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8565__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8566__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8567__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("effect",cljs.core.juxt.call(null,foundation.app.message.type,foundation.app.message.topic),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8567__auto__,method_table__8563__auto__,prefer_table__8564__auto__,method_cache__8565__auto__,cached_hierarchy__8566__auto__));
})();
foundation.app.derive = (function (){var method_table__8563__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8564__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8565__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8566__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8567__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("derive",cljs.core.identity,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8567__auto__,method_table__8563__auto__,prefer_table__8564__auto__,method_cache__8565__auto__,cached_hierarchy__8566__auto__));
})();
cljs.core._add_method.call(null,foundation.app.transform,new cljs.core.Keyword(null,"default","default",2558708147),(function (message,state){var new_state = state;return new_state;
}));
cljs.core._add_method.call(null,foundation.app.effect,new cljs.core.Keyword(null,"default","default",2558708147),(function (message){return cljs.core.PersistentVector.EMPTY;
}));
cljs.core._add_method.call(null,foundation.app.render,new cljs.core.Keyword(null,"default","default",2558708147),(function (p__472887){var vec__472888 = p__472887;var op = cljs.core.nth.call(null,vec__472888,0,null);var path = cljs.core.nth.call(null,vec__472888,1,null);var f = cljs.core.nth.call(null,vec__472888,2,null);var delta = vec__472888;return cljs.core.PersistentVector.EMPTY;
}));
foundation.app.input_queue = (function input_queue(data_model,render_queue){var c__10297__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10298__auto__ = (function (){var switch__10227__auto__ = (function (state_472908){var state_val_472909 = (state_472908[1]);if((state_val_472909 === 3))
{var inst_472906 = (state_472908[2]);var state_472908__$1 = state_472908;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_472908__$1,inst_472906);
} else
{if((state_val_472909 === 2))
{var state_472908__$1 = state_472908;var statearr_472910_472919 = state_472908__$1;(statearr_472910_472919[2] = null);
(statearr_472910_472919[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_472909 === 1))
{var state_472908__$1 = state_472908;var statearr_472911_472920 = state_472908__$1;(statearr_472911_472920[2] = null);
(statearr_472911_472920[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
});return ((function (switch__10227__auto__){
return (function() {
var state_machine__10228__auto__ = null;
var state_machine__10228__auto____0 = (function (){var statearr_472915 = (new Array(7));(statearr_472915[0] = state_machine__10228__auto__);
(statearr_472915[1] = 1);
return statearr_472915;
});
var state_machine__10228__auto____1 = (function (state_472908){while(true){
var ret_value__10229__auto__ = (function (){try{while(true){
var result__10230__auto__ = switch__10227__auto__.call(null,state_472908);if(cljs.core.keyword_identical_QMARK_.call(null,result__10230__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10230__auto__;
}
break;
}
}catch (e472916){if((e472916 instanceof Object))
{var ex__10231__auto__ = e472916;var statearr_472917_472921 = state_472908;(statearr_472917_472921[5] = ex__10231__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_472908);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e472916;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10229__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__472922 = state_472908;
state_472908 = G__472922;
continue;
}
} else
{return ret_value__10229__auto__;
}
break;
}
});
state_machine__10228__auto__ = function(state_472908){
switch(arguments.length){
case 0:
return state_machine__10228__auto____0.call(this);
case 1:
return state_machine__10228__auto____1.call(this,state_472908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10228__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10228__auto____0;
state_machine__10228__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10228__auto____1;
return state_machine__10228__auto__;
})()
;})(switch__10227__auto__))
})();var state__10299__auto__ = (function (){var statearr_472918 = f__10298__auto__.call(null);(statearr_472918[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10297__auto__);
return statearr_472918;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10299__auto__);
}));
return c__10297__auto__;
});
foundation.app.effect_queue = (function effect_queue(data_model,input_queue){var c__10297__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10298__auto__ = (function (){var switch__10227__auto__ = (function (state_472942){var state_val_472943 = (state_472942[1]);if((state_val_472943 === 3))
{var inst_472940 = (state_472942[2]);var state_472942__$1 = state_472942;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_472942__$1,inst_472940);
} else
{if((state_val_472943 === 2))
{var state_472942__$1 = state_472942;var statearr_472944_472953 = state_472942__$1;(statearr_472944_472953[2] = null);
(statearr_472944_472953[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_472943 === 1))
{var state_472942__$1 = state_472942;var statearr_472945_472954 = state_472942__$1;(statearr_472945_472954[2] = null);
(statearr_472945_472954[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
});return ((function (switch__10227__auto__){
return (function() {
var state_machine__10228__auto__ = null;
var state_machine__10228__auto____0 = (function (){var statearr_472949 = (new Array(7));(statearr_472949[0] = state_machine__10228__auto__);
(statearr_472949[1] = 1);
return statearr_472949;
});
var state_machine__10228__auto____1 = (function (state_472942){while(true){
var ret_value__10229__auto__ = (function (){try{while(true){
var result__10230__auto__ = switch__10227__auto__.call(null,state_472942);if(cljs.core.keyword_identical_QMARK_.call(null,result__10230__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10230__auto__;
}
break;
}
}catch (e472950){if((e472950 instanceof Object))
{var ex__10231__auto__ = e472950;var statearr_472951_472955 = state_472942;(statearr_472951_472955[5] = ex__10231__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_472942);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e472950;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10229__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__472956 = state_472942;
state_472942 = G__472956;
continue;
}
} else
{return ret_value__10229__auto__;
}
break;
}
});
state_machine__10228__auto__ = function(state_472942){
switch(arguments.length){
case 0:
return state_machine__10228__auto____0.call(this);
case 1:
return state_machine__10228__auto____1.call(this,state_472942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10228__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10228__auto____0;
state_machine__10228__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10228__auto____1;
return state_machine__10228__auto__;
})()
;})(switch__10227__auto__))
})();var state__10299__auto__ = (function (){var statearr_472952 = f__10298__auto__.call(null);(statearr_472952[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10297__auto__);
return statearr_472952;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10299__auto__);
}));
return c__10297__auto__;
});
foundation.app.render_queue = (function render_queue(data_model){var c__10297__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10298__auto__ = (function (){var switch__10227__auto__ = (function (state_472976){var state_val_472977 = (state_472976[1]);if((state_val_472977 === 3))
{var inst_472974 = (state_472976[2]);var state_472976__$1 = state_472976;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_472976__$1,inst_472974);
} else
{if((state_val_472977 === 2))
{var state_472976__$1 = state_472976;var statearr_472978_472987 = state_472976__$1;(statearr_472978_472987[2] = null);
(statearr_472978_472987[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_472977 === 1))
{var state_472976__$1 = state_472976;var statearr_472979_472988 = state_472976__$1;(statearr_472979_472988[2] = null);
(statearr_472979_472988[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
});return ((function (switch__10227__auto__){
return (function() {
var state_machine__10228__auto__ = null;
var state_machine__10228__auto____0 = (function (){var statearr_472983 = (new Array(7));(statearr_472983[0] = state_machine__10228__auto__);
(statearr_472983[1] = 1);
return statearr_472983;
});
var state_machine__10228__auto____1 = (function (state_472976){while(true){
var ret_value__10229__auto__ = (function (){try{while(true){
var result__10230__auto__ = switch__10227__auto__.call(null,state_472976);if(cljs.core.keyword_identical_QMARK_.call(null,result__10230__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10230__auto__;
}
break;
}
}catch (e472984){if((e472984 instanceof Object))
{var ex__10231__auto__ = e472984;var statearr_472985_472989 = state_472976;(statearr_472985_472989[5] = ex__10231__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_472976);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e472984;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10229__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__472990 = state_472976;
state_472976 = G__472990;
continue;
}
} else
{return ret_value__10229__auto__;
}
break;
}
});
state_machine__10228__auto__ = function(state_472976){
switch(arguments.length){
case 0:
return state_machine__10228__auto____0.call(this);
case 1:
return state_machine__10228__auto____1.call(this,state_472976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10228__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10228__auto____0;
state_machine__10228__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10228__auto____1;
return state_machine__10228__auto__;
})()
;})(switch__10227__auto__))
})();var state__10299__auto__ = (function (){var statearr_472986 = f__10298__auto__.call(null);(statearr_472986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10297__auto__);
return statearr_472986;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10299__auto__);
}));
return c__10297__auto__;
});
foundation.app.app_model_diff = (function app_model_diff(){return null;
});
foundation.app.apply_transform = (function apply_transform(data_model,message){return cljs.core.update_in.call(null,data_model,new cljs.core.Keyword(null,"topic","topic",1124450465).cljs$core$IFn$_invoke$arity$1(message),cljs.core.partial.call(null,foundation.app.transform,message));
});
cljs.core._add_method.call(null,foundation.app.transform,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inc","inc",1014008656),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"counter","counter",1971734894)], null)], null),(function (message,state){return cljs.core.fnil.call(null,cljs.core.inc,0).call(null,state);
}));
cljs.core._add_method.call(null,foundation.app.derive,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inc","inc",1014008656),cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"counter","counter",1971734894)], null)], true),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"counters","counters",641883497)], null),new cljs.core.Keyword(null,"map","map",1014012110)], null),(function (message,state){return cljs.core.fnil.call(null,cljs.core.inc,0).call(null,state);
}));
cljs.core._add_method.call(null,foundation.app.effect,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inc","inc",1014008656),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"counter","counter",1971734894)], null)], null),(function (message){return null;
}));
cljs.core._add_method.call(null,foundation.app.render,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",1013904284)], null),new cljs.core.Keyword(null,"map","map",1014012110)], null),(function (delta){return null;
}));
cljs.core._add_method.call(null,foundation.app.render,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",1013904284)], null),new cljs.core.Keyword(null,"map","map",1014012110)], null),(function (delta){return null;
}));
cljs.core._add_method.call(null,foundation.app.render,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transform-enable","transform-enable",2076092022),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",1013904284)], null),new cljs.core.Keyword(null,"map","map",1014012110)], null),(function (delta){return null;
}));
cljs.core._add_method.call(null,foundation.app.render,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transform-disable","transform-disable",2862889209),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",1013904284)], null),new cljs.core.Keyword(null,"map","map",1014012110)], null),(function (delta){return null;
}));
foundation.app.node_create = (function (){var method_table__8563__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8564__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8565__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8566__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8567__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("node-create",foundation.app.message.topic,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8567__auto__,method_table__8563__auto__,prefer_table__8564__auto__,method_cache__8565__auto__,cached_hierarchy__8566__auto__));
})();
foundation.app.node_destroy = (function (){var method_table__8563__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8564__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8565__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8566__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8567__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("node-destroy",foundation.app.message.topic,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8567__auto__,method_table__8563__auto__,prefer_table__8564__auto__,method_cache__8565__auto__,cached_hierarchy__8566__auto__));
})();
foundation.app.transform_enable = (function (){var method_table__8563__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8564__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8565__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8566__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8567__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("transform-enable",cljs.core.juxt.call(null,foundation.app.message.type,foundation.app.message.topic),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8567__auto__,method_table__8563__auto__,prefer_table__8564__auto__,method_cache__8565__auto__,cached_hierarchy__8566__auto__));
})();
foundation.app.transform_disable = (function (){var method_table__8563__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8564__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8565__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8566__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8567__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("transform-disable",cljs.core.juxt.call(null,foundation.app.message.type,foundation.app.message.topic),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8567__auto__,method_table__8563__auto__,prefer_table__8564__auto__,method_cache__8565__auto__,cached_hierarchy__8566__auto__));
})();
foundation.app.resolve_id = (function resolve_id(topic){return null;
});
foundation.app._STAR_dom_STAR_ = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
foundation.app.dom = new cljs.core.Keyword("foundation.app","dom","foundation.app/dom",3606975019);
foundation.app.root = new cljs.core.Keyword("foundation.app","root","foundation.app/root",3609860491);
foundation.app.ns_qualify = (function ns_qualify(x){return cljs.core.keyword.call(null,cljs.core.namespace.call(null,foundation.app.dom),cljs.core.name.call(null,x));
});
foundation.app.extend_dom_BANG_ = (function() {
var extend_dom_BANG_ = null;
var extend_dom_BANG___1 = (function (child){return extend_dom_BANG_.call(null,child,new cljs.core.Keyword(null,"root","root",1017410644));
});
var extend_dom_BANG___2 = (function (child,parent){return cljs.core.swap_BANG_.call(null,foundation.app._STAR_dom_STAR_,clojure.core.derive,foundation.app.ns_qualify.call(null,child),foundation.app.ns_qualify.call(null,parent));
});
extend_dom_BANG_ = function(child,parent){
switch(arguments.length){
case 1:
return extend_dom_BANG___1.call(this,child);
case 2:
return extend_dom_BANG___2.call(this,child,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
extend_dom_BANG_.cljs$core$IFn$_invoke$arity$1 = extend_dom_BANG___1;
extend_dom_BANG_.cljs$core$IFn$_invoke$arity$2 = extend_dom_BANG___2;
return extend_dom_BANG_;
})()
;
cljs.core._add_method.call(null,foundation.app.node_create,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",1013904284)], null),(function (delta){return cljs.core.list(new cljs.core.Symbol("dom","append!","dom/append!",1867496082,null));
}));
cljs.core._add_method.call(null,foundation.app.node_create,new cljs.core.Keyword(null,"default","default",2558708147),(function (delta){return null;
}));
cljs.core._add_method.call(null,foundation.app.node_destroy,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",1013904284)], null),(function (delta){return null;
}));
cljs.core._add_method.call(null,foundation.app.node_destroy,new cljs.core.Keyword(null,"default","default",2558708147),(function (delta){return null;
}));
cljs.core._add_method.call(null,foundation.app.transform_enable,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",1013904284)], null)], null),(function (delta){return cljs.core.list(new cljs.core.Symbol(null,"sel1","sel1",-1637005104,null),new cljs.core.Keyword(null,"*","*",1013904284));
}));
cljs.core._add_method.call(null,foundation.app.transform_enable,new cljs.core.Keyword(null,"default","default",2558708147),(function (delta){return null;
}));
cljs.core._add_method.call(null,foundation.app.transform_disable,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",1013904284)], null)], null),(function (delta){return null;
}));
cljs.core._add_method.call(null,foundation.app.transform_disable,new cljs.core.Keyword(null,"default","default",2558708147),(function (delta){return null;
}));

//# sourceMappingURL=app.js.map