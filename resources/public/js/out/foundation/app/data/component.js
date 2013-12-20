// Compiled by ClojureScript 0.0-2120
goog.provide('foundation.app.data.component');
goog.require('cljs.core');
goog.require('foundation.app.data.dependency');
goog.require('foundation.app.data.dependency');
foundation.app.data.component.Lifecycle = (function (){var obj268400 = {};return obj268400;
})();
foundation.app.data.component.start = (function start(component){if((function (){var and__8211__auto__ = component;if(and__8211__auto__)
{return component.foundation$app$data$component$Lifecycle$start$arity$1;
} else
{return and__8211__auto__;
}
})())
{return component.foundation$app$data$component$Lifecycle$start$arity$1(component);
} else
{var x__8831__auto__ = (((component == null))?null:component);return (function (){var or__8223__auto__ = (foundation.app.data.component.start[goog.typeOf(x__8831__auto__)]);if(or__8223__auto__)
{return or__8223__auto__;
} else
{var or__8223__auto____$1 = (foundation.app.data.component.start["_"]);if(or__8223__auto____$1)
{return or__8223__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Lifecycle.start",component);
}
}
})().call(null,component);
}
});
foundation.app.data.component.stop = (function stop(component){if((function (){var and__8211__auto__ = component;if(and__8211__auto__)
{return component.foundation$app$data$component$Lifecycle$stop$arity$1;
} else
{return and__8211__auto__;
}
})())
{return component.foundation$app$data$component$Lifecycle$stop$arity$1(component);
} else
{var x__8831__auto__ = (((component == null))?null:component);return (function (){var or__8223__auto__ = (foundation.app.data.component.stop[goog.typeOf(x__8831__auto__)]);if(or__8223__auto__)
{return or__8223__auto__;
} else
{var or__8223__auto____$1 = (foundation.app.data.component.stop["_"]);if(or__8223__auto____$1)
{return or__8223__auto____$1;
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
foundation.app.data.component.dependency_graph = (function dependency_graph(system,component_keys){return cljs.core.reduce_kv.call(null,(function (graph,key,component){return cljs.core.reduce.call(null,(function (p1__268401_SHARP_,p2__268402_SHARP_){return foundation.app.data.dependency.depend.call(null,p1__268401_SHARP_,key,p2__268402_SHARP_);
}),graph,cljs.core.vals.call(null,foundation.app.data.component.dependencies.call(null,component)));
}),foundation.app.data.dependency.graph.call(null),cljs.core.select_keys.call(null,system,component_keys));
});
foundation.app.data.component.assoc_dependency = (function assoc_dependency(system,component,dependency_key,system_key){var dependency = cljs.core.get.call(null,system,system_key);if(cljs.core.truth_(dependency))
{} else
{throw cljs.core.ex_info.call(null,"Missing component dependency",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"reason","reason",4373906870),new cljs.core.Keyword("foundation.app.data.component","missing-dependency","foundation.app.data.component/missing-dependency",649371923),new cljs.core.Keyword(null,"system-key","system-key",1655621939),system_key,new cljs.core.Keyword(null,"dependency-key","dependency-key",4117969999),dependency_key,new cljs.core.Keyword(null,"component","component",3908964463),component,new cljs.core.Keyword(null,"system","system",4421543329),system], null));
}
return cljs.core.assoc.call(null,component,dependency_key,dependency);
});
foundation.app.data.component.assoc_dependencies = (function assoc_dependencies(component,system){return cljs.core.reduce_kv.call(null,(function (p1__268403_SHARP_,p2__268404_SHARP_,p3__268405_SHARP_){return foundation.app.data.component.assoc_dependency.call(null,system,p1__268403_SHARP_,p2__268404_SHARP_,p3__268405_SHARP_);
}),component,foundation.app.data.component.dependencies.call(null,component));
});
foundation.app.data.component.try_action = (function try_action(component,system,f,args){try{return cljs.core.apply.call(null,f,component,args);
}catch (e268407){if((e268407 instanceof Error))
{var t = e268407;throw cljs.core.ex_info.call(null,"Error calling function on component",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reason","reason",4373906870),new cljs.core.Keyword("foundation.app.data.component","component-function-threw-exception","foundation.app.data.component/component-function-threw-exception",3796519376),new cljs.core.Keyword(null,"function","function",2394842954),f,new cljs.core.Keyword(null,"component","component",3908964463),component,new cljs.core.Keyword(null,"system","system",4421543329),system], null),t);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e268407;
} else
{return null;
}
}
}});
foundation.app.data.component.get_component = (function get_component(system,key){var or__8223__auto__ = cljs.core.get.call(null,system,key);if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
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
update_system.cljs$lang$applyTo = (function (arglist__268408){
var system = cljs.core.first(arglist__268408);
arglist__268408 = cljs.core.next(arglist__268408);
var component_keys = cljs.core.first(arglist__268408);
arglist__268408 = cljs.core.next(arglist__268408);
var f = cljs.core.first(arglist__268408);
var args = cljs.core.rest(arglist__268408);
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
update_system_reverse.cljs$lang$applyTo = (function (arglist__268409){
var system = cljs.core.first(arglist__268409);
arglist__268409 = cljs.core.next(arglist__268409);
var component_keys = cljs.core.first(arglist__268409);
arglist__268409 = cljs.core.next(arglist__268409);
var f = cljs.core.first(arglist__268409);
var args = cljs.core.rest(arglist__268409);
return update_system_reverse__delegate(system,component_keys,f,args);
});
update_system_reverse.cljs$core$IFn$_invoke$arity$variadic = update_system_reverse__delegate;
return update_system_reverse;
})()
;
/**
* Recursively starts components in the system, in dependency order,
* assoc'ing in their dependencies along the way. component-keys is a
* collection of keys (order doesn't matter) in the system specifying
* the components to start, defaults to all keys in the system.
*/
foundation.app.data.component.start_system = (function() {
var start_system = null;
var start_system__1 = (function (system){return start_system.call(null,system,cljs.core.keys.call(null,system));
});
var start_system__2 = (function (system,component_keys){return foundation.app.data.component.update_system.call(null,system,component_keys,foundation.app.data.component.start);
});
start_system = function(system,component_keys){
switch(arguments.length){
case 1:
return start_system__1.call(this,system);
case 2:
return start_system__2.call(this,system,component_keys);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
start_system.cljs$core$IFn$_invoke$arity$1 = start_system__1;
start_system.cljs$core$IFn$_invoke$arity$2 = start_system__2;
return start_system;
})()
;
/**
* Recursively stops components in the system, in reverse dependency
* order. component-keys is a collection of keys (order doesn't matter)
* in the system specifying the components to stop, defaults to all
* keys in the system.
*/
foundation.app.data.component.stop_system = (function() {
var stop_system = null;
var stop_system__1 = (function (system){return stop_system.call(null,system,cljs.core.keys.call(null,system));
});
var stop_system__2 = (function (system,component_keys){return foundation.app.data.component.update_system_reverse.call(null,system,component_keys,foundation.app.data.component.stop);
});
stop_system = function(system,component_keys){
switch(arguments.length){
case 1:
return stop_system__1.call(this,system);
case 2:
return stop_system__2.call(this,system,component_keys);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stop_system.cljs$core$IFn$_invoke$arity$1 = stop_system__1;
stop_system.cljs$core$IFn$_invoke$arity$2 = stop_system__2;
return stop_system;
})()
;

/**
* @constructor
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
foundation.app.data.component.SystemMap = (function (__meta,__extmap){
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>0){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
foundation.app.data.component.SystemMap.prototype.foundation$app$data$component$Lifecycle$ = true;
foundation.app.data.component.SystemMap.prototype.foundation$app$data$component$Lifecycle$start$arity$1 = (function (system){var self__ = this;
var system__$1 = this;return foundation.app.data.component.start_system.call(null,system__$1);
});
foundation.app.data.component.SystemMap.prototype.foundation$app$data$component$Lifecycle$stop$arity$1 = (function (system){var self__ = this;
var system__$1 = this;return foundation.app.data.component.stop_system.call(null,system__$1);
});
foundation.app.data.component.SystemMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8785__auto__){var self__ = this;
var this__8785__auto____$1 = this;var h__8639__auto__ = self__.__hash;if(!((h__8639__auto__ == null)))
{return h__8639__auto__;
} else
{var h__8639__auto____$1 = cljs.core.hash_imap.call(null,this__8785__auto____$1);self__.__hash = h__8639__auto____$1;
return h__8639__auto____$1;
}
});
foundation.app.data.component.SystemMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8790__auto__,k__8791__auto__){var self__ = this;
var this__8790__auto____$1 = this;return cljs.core._lookup.call(null,this__8790__auto____$1,k__8791__auto__,null);
});
foundation.app.data.component.SystemMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8792__auto__,k268411,else__8793__auto__){var self__ = this;
var this__8792__auto____$1 = this;if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k268411,else__8793__auto__);
} else
{return null;
}
});
foundation.app.data.component.SystemMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8797__auto__,k__8798__auto__,G__268410){var self__ = this;
var this__8797__auto____$1 = this;var pred__268413 = cljs.core.keyword_identical_QMARK_;var expr__268414 = k__8798__auto__;return (new foundation.app.data.component.SystemMap(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8798__auto__,G__268410),null));
});
foundation.app.data.component.SystemMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8804__auto__,writer__8805__auto__,opts__8806__auto__){var self__ = this;
var this__8804__auto____$1 = this;var pr_pair__8807__auto__ = (function (keyval__8808__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8805__auto__,cljs.core.pr_writer,""," ","",opts__8806__auto__,keyval__8808__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__8805__auto__,pr_pair__8807__auto__,"#foundation.app.data.component.SystemMap{",", ","}",opts__8806__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
foundation.app.data.component.SystemMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8795__auto__,entry__8796__auto__){var self__ = this;
var this__8795__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8796__auto__))
{return cljs.core._assoc.call(null,this__8795__auto____$1,cljs.core._nth.call(null,entry__8796__auto__,0),cljs.core._nth.call(null,entry__8796__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8795__auto____$1,entry__8796__auto__);
}
});
foundation.app.data.component.SystemMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8802__auto__){var self__ = this;
var this__8802__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
foundation.app.data.component.SystemMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8794__auto__){var self__ = this;
var this__8794__auto____$1 = this;return (0 + cljs.core.count.call(null,self__.__extmap));
});
foundation.app.data.component.SystemMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8786__auto__,other__8787__auto__){var self__ = this;
var this__8786__auto____$1 = this;if(cljs.core.truth_((function (){var and__8211__auto__ = other__8787__auto__;if(cljs.core.truth_(and__8211__auto__))
{return ((this__8786__auto____$1.constructor === other__8787__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__8786__auto____$1,other__8787__auto__));
} else
{return and__8211__auto__;
}
})()))
{return true;
} else
{return false;
}
});
foundation.app.data.component.SystemMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8789__auto__,G__268410){var self__ = this;
var this__8789__auto____$1 = this;return (new foundation.app.data.component.SystemMap(G__268410,self__.__extmap,self__.__hash));
});
foundation.app.data.component.SystemMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8788__auto__){var self__ = this;
var this__8788__auto____$1 = this;return self__.__meta;
});
foundation.app.data.component.SystemMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8799__auto__,k__8800__auto__){var self__ = this;
var this__8799__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__8800__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8799__auto____$1),self__.__meta),k__8800__auto__);
} else
{return (new foundation.app.data.component.SystemMap(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8800__auto__)),null));
}
});
foundation.app.data.component.SystemMap.cljs$lang$type = true;
foundation.app.data.component.SystemMap.cljs$lang$ctorPrSeq = (function (this__8824__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"foundation.app.data.component/SystemMap");
});
foundation.app.data.component.SystemMap.cljs$lang$ctorPrWriter = (function (this__8824__auto__,writer__8825__auto__){return cljs.core._write.call(null,writer__8825__auto__,"foundation.app.data.component/SystemMap");
});
foundation.app.data.component.__GT_SystemMap = (function __GT_SystemMap(){return (new foundation.app.data.component.SystemMap());
});
foundation.app.data.component.map__GT_SystemMap = (function map__GT_SystemMap(G__268412){return (new foundation.app.data.component.SystemMap(null,cljs.core.dissoc.call(null,G__268412)));
});
/**
* Returns a system constructed of key/value pairs. The system has
* default implementations of the Lifecycle 'start' and 'stop' methods
* which recursively start/stop all components in the system.
* @param {...*} var_args
*/
foundation.app.data.component.system_map = (function() { 
var system_map__delegate = function (keyvals){return foundation.app.data.component.map__GT_SystemMap.call(null,cljs.core.apply.call(null,cljs.core.array_map,keyvals));
};
var system_map = function (var_args){
var keyvals = null;if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return system_map__delegate.call(this,keyvals);};
system_map.cljs$lang$maxFixedArity = 0;
system_map.cljs$lang$applyTo = (function (arglist__268416){
var keyvals = cljs.core.seq(arglist__268416);
return system_map__delegate(keyvals);
});
system_map.cljs$core$IFn$_invoke$arity$variadic = system_map__delegate;
return system_map;
})()
;

//# sourceMappingURL=component.js.map