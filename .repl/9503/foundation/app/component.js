// Compiled by ClojureScript 0.0-2030
goog.provide('foundation.app.component');
goog.require('cljs.core');
goog.require('foundation.app.data.dependency');
goog.require('foundation.app.data.dependency');
foundation.app.component.Lifecycle = {};
foundation.app.component.start = (function start(component){if((function (){var and__7629__auto__ = component;if(and__7629__auto__)
{return component.foundation$app$component$Lifecycle$start$arity$1;
} else
{return and__7629__auto__;
}
})())
{return component.foundation$app$component$Lifecycle$start$arity$1(component);
} else
{var x__8234__auto__ = (((component == null))?null:component);return (function (){var or__7638__auto__ = (foundation.app.component.start[goog.typeOf(x__8234__auto__)]);if(or__7638__auto__)
{return or__7638__auto__;
} else
{var or__7638__auto____$1 = (foundation.app.component.start["_"]);if(or__7638__auto____$1)
{return or__7638__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Lifecycle.start",component);
}
}
})().call(null,component);
}
});
foundation.app.component.stop = (function stop(component){if((function (){var and__7629__auto__ = component;if(and__7629__auto__)
{return component.foundation$app$component$Lifecycle$stop$arity$1;
} else
{return and__7629__auto__;
}
})())
{return component.foundation$app$component$Lifecycle$stop$arity$1(component);
} else
{var x__8234__auto__ = (((component == null))?null:component);return (function (){var or__7638__auto__ = (foundation.app.component.stop[goog.typeOf(x__8234__auto__)]);if(or__7638__auto__)
{return or__7638__auto__;
} else
{var or__7638__auto____$1 = (foundation.app.component.stop["_"]);if(or__7638__auto____$1)
{return or__7638__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Lifecycle.stop",component);
}
}
})().call(null,component);
}
});
/**
* Returns the map of other components on which this component depends.
*/
foundation.app.component.dependencies = (function dependencies(component){return new cljs.core.Keyword("foundation.app.component","dependencies","foundation.app.component/dependencies",4224198211).cljs$core$IFn$_invoke$arity$2(cljs.core.meta.call(null,component),cljs.core.PersistentArrayMap.EMPTY);
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
foundation.app.component.using = (function using(component,dependencies){return cljs.core.vary_meta.call(null,component,cljs.core.update_in,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword("foundation.app.component","dependencies","foundation.app.component/dependencies",4224198211)], true),cljs.core.fnil.call(null,cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY),((cljs.core.map_QMARK_.call(null,dependencies))?dependencies:((cljs.core.vector_QMARK_.call(null,dependencies))?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (x){return cljs.core.PersistentVector.fromArray([x,x], true);
}),dependencies)):((new cljs.core.Keyword(null,"else","else",1017020587))?(function(){throw cljs.core.ex_info.call(null,"Dependencies must be a map or vector",cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"reason","reason",4373906870),new cljs.core.Keyword("foundation.app.component","invalid-dependencies","foundation.app.component/invalid-dependencies",1144178969),new cljs.core.Keyword(null,"component","component",3908964463),component,new cljs.core.Keyword(null,"dependencies","dependencies",1517678747),dependencies], true))})():null))));
});
/**
* Returns a dependency graph, using the data structures defined in
* com.stuartsierra.dependency, for the components found by
* (select-keys system component-keys)
*/
foundation.app.component.dependency_graph = (function dependency_graph(system,component_keys){return cljs.core.reduce_kv.call(null,(function (graph,key,component){return cljs.core.reduce.call(null,(function (p1__34288_SHARP_,p2__34289_SHARP_){return foundation.app.data.dependency.depend.call(null,p1__34288_SHARP_,key,p2__34289_SHARP_);
}),graph,cljs.core.vals.call(null,foundation.app.component.dependencies.call(null,component)));
}),foundation.app.data.dependency.graph.call(null),cljs.core.select_keys.call(null,system,component_keys));
});
foundation.app.component.assoc_dependency = (function assoc_dependency(system,component,dependency_key,system_key){var dependency = cljs.core.get.call(null,system,system_key);if(cljs.core.truth_(dependency))
{} else
{throw cljs.core.ex_info.call(null,"Missing component dependency",cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"reason","reason",4373906870),new cljs.core.Keyword("foundation.app.component","missing-dependency","foundation.app.component/missing-dependency",1088823638),new cljs.core.Keyword(null,"system-key","system-key",1655621939),system_key,new cljs.core.Keyword(null,"dependency-key","dependency-key",4117969999),dependency_key,new cljs.core.Keyword(null,"component","component",3908964463),component,new cljs.core.Keyword(null,"system","system",4421543329),system], true));
}
return cljs.core.assoc.call(null,component,dependency_key,dependency);
});
foundation.app.component.assoc_dependencies = (function assoc_dependencies(component,system){return cljs.core.reduce_kv.call(null,(function (p1__34290_SHARP_,p2__34291_SHARP_,p3__34292_SHARP_){return foundation.app.component.assoc_dependency.call(null,system,p1__34290_SHARP_,p2__34291_SHARP_,p3__34292_SHARP_);
}),component,foundation.app.component.dependencies.call(null,component));
});
foundation.app.component.try_action = (function try_action(component,system,f,args){try{return cljs.core.apply.call(null,f,component,args);
}catch (e34294){if((e34294 instanceof foundation.app.component.Throwable))
{var t = e34294;throw cljs.core.ex_info.call(null,"Error calling function on component",cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"reason","reason",4373906870),new cljs.core.Keyword("foundation.app.component","component-function-threw-exception","foundation.app.component/component-function-threw-exception",4109127439),new cljs.core.Keyword(null,"function","function",2394842954),f,new cljs.core.Keyword(null,"component","component",3908964463),component,new cljs.core.Keyword(null,"system","system",4421543329),system], true),t);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34294;
} else
{return null;
}
}
}});
foundation.app.component.get_component = (function get_component(system,key){var or__7638__auto__ = cljs.core.get.call(null,system,key);if(cljs.core.truth_(or__7638__auto__))
{return or__7638__auto__;
} else
{throw cljs.core.ex_info.call(null,"Missing component from system",cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"reason","reason",4373906870),new cljs.core.Keyword("foundation.app.component","missing-component","foundation.app.component/missing-component",3299780882),new cljs.core.Keyword(null,"component-key","component-key",2719177985),key,new cljs.core.Keyword(null,"system","system",4421543329),system], true));
}
});
/**
* Invokes (apply f component args) on each of the components at
* component-keys in the system, in dependency order. Before invoking
* f, assoc's updated dependencies of the component.
* @param {...*} var_args
*/
foundation.app.component.update_system = (function() { 
var update_system__delegate = function (system,component_keys,f,args){var graph = foundation.app.component.dependency_graph.call(null,system,component_keys);return cljs.core.reduce.call(null,(function (system__$1,key){return cljs.core.assoc.call(null,system__$1,key,foundation.app.component.try_action.call(null,foundation.app.component.assoc_dependencies.call(null,foundation.app.component.get_component.call(null,system__$1,key),system__$1),system__$1,f,args));
}),system,cljs.core.sort.call(null,foundation.app.data.dependency.topo_comparator.call(null,graph),component_keys));
};
var update_system = function (system,component_keys,f,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return update_system__delegate.call(this,system,component_keys,f,args);};
update_system.cljs$lang$maxFixedArity = 3;
update_system.cljs$lang$applyTo = (function (arglist__34295){
var system = cljs.core.first(arglist__34295);
arglist__34295 = cljs.core.next(arglist__34295);
var component_keys = cljs.core.first(arglist__34295);
arglist__34295 = cljs.core.next(arglist__34295);
var f = cljs.core.first(arglist__34295);
var args = cljs.core.rest(arglist__34295);
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
foundation.app.component.update_system_reverse = (function() { 
var update_system_reverse__delegate = function (system,component_keys,f,args){var graph = foundation.app.component.dependency_graph.call(null,system,component_keys);return cljs.core.reduce.call(null,(function (system__$1,key){return cljs.core.assoc.call(null,system__$1,key,foundation.app.component.try_action.call(null,foundation.app.component.assoc_dependencies.call(null,foundation.app.component.get_component.call(null,system__$1,key),system__$1),system__$1,f,args));
}),system,cljs.core.reverse.call(null,cljs.core.sort.call(null,foundation.app.data.dependency.topo_comparator.call(null,graph),component_keys)));
};
var update_system_reverse = function (system,component_keys,f,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return update_system_reverse__delegate.call(this,system,component_keys,f,args);};
update_system_reverse.cljs$lang$maxFixedArity = 3;
update_system_reverse.cljs$lang$applyTo = (function (arglist__34296){
var system = cljs.core.first(arglist__34296);
arglist__34296 = cljs.core.next(arglist__34296);
var component_keys = cljs.core.first(arglist__34296);
arglist__34296 = cljs.core.next(arglist__34296);
var f = cljs.core.first(arglist__34296);
var args = cljs.core.rest(arglist__34296);
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
foundation.app.component.start_system = (function start_system(system,component_keys){return foundation.app.component.update_system.call(null,system,component_keys,foundation.app.component.var$.call(null,foundation.app.component.start));
});
/**
* Recursively stops components in the system, in reverse dependency
* order.
*/
foundation.app.component.stop_system = (function stop_system(system,component_keys){return foundation.app.component.update_system_reverse.call(null,system,component_keys,foundation.app.component.var$.call(null,foundation.app.component.stop));
});
