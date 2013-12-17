// Compiled by ClojureScript 0.0-2120
goog.provide('foundation.app.data.component');
goog.require('cljs.core');
goog.require('foundation.app.data.dependency');
goog.require('foundation.app.data.dependency');
foundation.app.data.component.Lifecycle = (function (){var obj360036 = {};return obj360036;
})();
foundation.app.data.component.start = (function start(component){if((function (){var and__13967__auto__ = component;if(and__13967__auto__)
{return component.foundation$app$data$component$Lifecycle$start$arity$1;
} else
{return and__13967__auto__;
}
})())
{return component.foundation$app$data$component$Lifecycle$start$arity$1(component);
} else
{var x__14587__auto__ = (((component == null))?null:component);return (function (){var or__13979__auto__ = (foundation.app.data.component.start[goog.typeOf(x__14587__auto__)]);if(or__13979__auto__)
{return or__13979__auto__;
} else
{var or__13979__auto____$1 = (foundation.app.data.component.start["_"]);if(or__13979__auto____$1)
{return or__13979__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Lifecycle.start",component);
}
}
})().call(null,component);
}
});
foundation.app.data.component.stop = (function stop(component){if((function (){var and__13967__auto__ = component;if(and__13967__auto__)
{return component.foundation$app$data$component$Lifecycle$stop$arity$1;
} else
{return and__13967__auto__;
}
})())
{return component.foundation$app$data$component$Lifecycle$stop$arity$1(component);
} else
{var x__14587__auto__ = (((component == null))?null:component);return (function (){var or__13979__auto__ = (foundation.app.data.component.stop[goog.typeOf(x__14587__auto__)]);if(or__13979__auto__)
{return or__13979__auto__;
} else
{var or__13979__auto____$1 = (foundation.app.data.component.stop["_"]);if(or__13979__auto____$1)
{return or__13979__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Lifecycle.stop",component);
}
}
})().call(null,component);
}
});
(foundation.app.data.component.Lifecycle["_"] = true);
(foundation.app.data.component.start["_"] = (function (this$){return this$;
}));
(foundation.app.data.component.stop["_"] = (function (this$){return this$;
}));
/**
* Returns the map of other components on which this component depends.
*/
foundation.app.data.component.dependencies = (function dependencies(component){return new cljs.core.Keyword("foundation.app.data.component","dependencies","foundation.app.data.component/dependencies",3916342316).cljs$core$IFn$_invoke$arity$2(cljs.core.meta.call(null,component),cljs.core.PersistentArrayMap.EMPTY);
});
/**
* Associates metadata with component describing the other components
* on which it depends. Component dependencies are specified as a map.
* Keys in the map correspond to keys in this component which must be
* provided by its containing system. Values in the map are the keys in
* the system at which those components may be found. Alternatively, if
* the keys are the same in both the component and its enclosing
* system, they may be specified as a vector of keys.
*/
foundation.app.data.component.using = (function using(component,dependencies){return cljs.core.vary_meta.call(null,component,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("foundation.app.data.component","dependencies","foundation.app.data.component/dependencies",3916342316)], null),cljs.core.fnil.call(null,cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY),((cljs.core.map_QMARK_.call(null,dependencies))?dependencies:((cljs.core.vector_QMARK_.call(null,dependencies))?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (x){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x], null);
}),dependencies)):((new cljs.core.Keyword(null,"else","else",1017020587))?(function(){throw cljs.core.ex_info.call(null,"Dependencies must be a map or vector",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reason","reason",4373906870),new cljs.core.Keyword("foundation.app.data.component","invalid-dependencies","foundation.app.data.component/invalid-dependencies",1367852994),new cljs.core.Keyword(null,"component","component",3908964463),component,new cljs.core.Keyword(null,"dependencies","dependencies",1517678747),dependencies], null))})():null))));
});
/**
* Associates dependency metadata with multiple components in the
* system. dependency-map is a map of keys in the system to maps or
* vectors specifying the dependencies of the component at that key in
* the system, as per 'using'.
*/
foundation.app.data.component.system_using = (function system_using(system,dependency_map){return cljs.core.reduce_kv.call(null,(function (system__$1,key,dependencies){var component = cljs.core.get.call(null,system__$1,key);if(cljs.core.truth_(component))
{} else
{throw cljs.core.ex_info.call(null,"Missing component from system",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reason","reason",4373906870),new cljs.core.Keyword("foundation.app.data.component","missing-component","foundation.app.data.component/missing-component",3557566423),new cljs.core.Keyword(null,"component-key","component-key",2719177985),key,new cljs.core.Keyword(null,"system","system",4421543329),system__$1], null));
}
return cljs.core.assoc.call(null,system__$1,key,foundation.app.data.component.using.call(null,component,dependencies));
}),system,dependency_map);
});
/**
* Returns a dependency graph, using the data structures defined in
* com.stuartsierra.dependency, for the components found by
* (select-keys system component-keys)
*/
foundation.app.data.component.dependency_graph = (function dependency_graph(system,component_keys){return cljs.core.reduce_kv.call(null,(function (graph,key,component){return cljs.core.reduce.call(null,(function (p1__360037_SHARP_,p2__360038_SHARP_){return foundation.app.data.dependency.depend.call(null,p1__360037_SHARP_,key,p2__360038_SHARP_);
}),graph,cljs.core.vals.call(null,foundation.app.data.component.dependencies.call(null,component)));
}),foundation.app.data.dependency.graph.call(null),cljs.core.select_keys.call(null,system,component_keys));
});
foundation.app.data.component.assoc_dependency = (function assoc_dependency(system,component,dependency_key,system_key){var dependency = cljs.core.get.call(null,system,system_key);if(cljs.core.truth_(dependency))
{} else
{throw cljs.core.ex_info.call(null,"Missing component dependency",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"reason","reason",4373906870),new cljs.core.Keyword("foundation.app.data.component","missing-dependency","foundation.app.data.component/missing-dependency",649371923),new cljs.core.Keyword(null,"system-key","system-key",1655621939),system_key,new cljs.core.Keyword(null,"dependency-key","dependency-key",4117969999),dependency_key,new cljs.core.Keyword(null,"component","component",3908964463),component,new cljs.core.Keyword(null,"system","system",4421543329),system], null));
}
return cljs.core.assoc.call(null,component,dependency_key,dependency);
});
foundation.app.data.component.assoc_dependencies = (function assoc_dependencies(component,system){return cljs.core.reduce_kv.call(null,(function (p1__360039_SHARP_,p2__360040_SHARP_,p3__360041_SHARP_){return foundation.app.data.component.assoc_dependency.call(null,system,p1__360039_SHARP_,p2__360040_SHARP_,p3__360041_SHARP_);
}),component,foundation.app.data.component.dependencies.call(null,component));
});
foundation.app.data.component.try_action = (function try_action(component,system,f,args){try{return cljs.core.apply.call(null,f,component,args);
}catch (e360043){if((e360043 instanceof Error))
{var t = e360043;throw cljs.core.ex_info.call(null,"Error calling function on component",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reason","reason",4373906870),new cljs.core.Keyword("foundation.app.data.component","component-function-threw-exception","foundation.app.data.component/component-function-threw-exception",3796519376),new cljs.core.Keyword(null,"function","function",2394842954),f,new cljs.core.Keyword(null,"component","component",3908964463),component,new cljs.core.Keyword(null,"system","system",4421543329),system], null),t);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e360043;
} else
{return null;
}
}
}});
foundation.app.data.component.get_component = (function get_component(system,key){var or__13979__auto__ = cljs.core.get.call(null,system,key);if(cljs.core.truth_(or__13979__auto__))
{return or__13979__auto__;
} else
{throw cljs.core.ex_info.call(null,"Missing component from system",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reason","reason",4373906870),new cljs.core.Keyword("foundation.app.data.component","missing-component","foundation.app.data.component/missing-component",3557566423),new cljs.core.Keyword(null,"component-key","component-key",2719177985),key,new cljs.core.Keyword(null,"system","system",4421543329),system], null));
}
});
/**
* Invokes (apply f component args) on each of the components at
* component-keys in the system, in dependency order. Before invoking
* f, assoc's updated dependencies of the component.
* @param {...*} var_args
*/
foundation.app.data.component.update_system = (function() { 
var update_system__delegate = function (system,component_keys,f,args){var graph = foundation.app.data.component.dependency_graph.call(null,system,component_keys);return cljs.core.reduce.call(null,(function (system__$1,key){return cljs.core.assoc.call(null,system__$1,key,foundation.app.data.component.try_action.call(null,foundation.app.data.component.assoc_dependencies.call(null,foundation.app.data.component.get_component.call(null,system__$1,key),system__$1),system__$1,f,args));
}),system,cljs.core.sort.call(null,foundation.app.data.dependency.topo_comparator.call(null,graph),component_keys));
};
var update_system = function (system,component_keys,f,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return update_system__delegate.call(this,system,component_keys,f,args);};
update_system.cljs$lang$maxFixedArity = 3;
update_system.cljs$lang$applyTo = (function (arglist__360044){
var system = cljs.core.first(arglist__360044);
arglist__360044 = cljs.core.next(arglist__360044);
var component_keys = cljs.core.first(arglist__360044);
arglist__360044 = cljs.core.next(arglist__360044);
var f = cljs.core.first(arglist__360044);
var args = cljs.core.rest(arglist__360044);
return update_system__delegate(system,component_keys,f,args);
});
update_system.cljs$core$IFn$_invoke$arity$variadic = update_system__delegate;
return update_system;
})()
;
/**
* Like update-system but operates in reverse-dependence order.
* @param {...*} var_args
*/
foundation.app.data.component.update_system_reverse = (function() { 
var update_system_reverse__delegate = function (system,component_keys,f,args){var graph = foundation.app.data.component.dependency_graph.call(null,system,component_keys);return cljs.core.reduce.call(null,(function (system__$1,key){return cljs.core.assoc.call(null,system__$1,key,foundation.app.data.component.try_action.call(null,foundation.app.data.component.assoc_dependencies.call(null,foundation.app.data.component.get_component.call(null,system__$1,key),system__$1),system__$1,f,args));
}),system,cljs.core.reverse.call(null,cljs.core.sort.call(null,foundation.app.data.dependency.topo_comparator.call(null,graph),component_keys)));
};
var update_system_reverse = function (system,component_keys,f,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return update_system_reverse__delegate.call(this,system,component_keys,f,args);};
update_system_reverse.cljs$lang$maxFixedArity = 3;
update_system_reverse.cljs$lang$applyTo = (function (arglist__360045){
var system = cljs.core.first(arglist__360045);
arglist__360045 = cljs.core.next(arglist__360045);
var component_keys = cljs.core.first(arglist__360045);
arglist__360045 = cljs.core.next(arglist__360045);
var f = cljs.core.first(arglist__360045);
var args = cljs.core.rest(arglist__360045);
return update_system_reverse__delegate(system,component_keys,f,args);
});
update_system_reverse.cljs$core$IFn$_invoke$arity$variadic = update_system_reverse__delegate;
return update_system_reverse;
})()
;
/**
* Recursively starts components in the system, in dependency order,
* assoc'ing in their dependencies along the way.
*/
foundation.app.data.component.start_system = (function start_system(system,component_keys){return foundation.app.data.component.update_system.call(null,system,component_keys,foundation.app.data.component.start);
});
/**
* Recursively stops components in the system, in reverse dependency
* order.
*/
foundation.app.data.component.stop_system = (function stop_system(system,component_keys){return foundation.app.data.component.update_system_reverse.call(null,system,component_keys,foundation.app.data.component.stop);
});

//# sourceMappingURL=component.js.map