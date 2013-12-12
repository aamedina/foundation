// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.app.render');
goog.require('cljs.core');
goog.require('foundation.app.dataflow');
goog.require('cljs.core.async');
goog.require('clojure.zip');
goog.require('enfocus.events');
goog.require('foundation.app.message');
goog.require('enfocus.events');
goog.require('clojure.zip');
goog.require('enfocus.core');
goog.require('dommy.core');
goog.require('enfocus.core');
goog.require('foundation.app.dataflow');
goog.require('foundation.app.util');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.match');
goog.require('clojure.browser.repl');
goog.require('clojure.set');
goog.require('foundation.app.message');
goog.require('cljs.core.match');
goog.require('cljs.core.async');
goog.require('foundation.app.util');
goog.require('dommy.core');
foundation.app.render.node_create = (function (){var method_table__14655__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14656__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14657__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14658__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14659__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("node-create",(function (renderer,p__96728,input_queue,parent_id,id){var vec__96729 = p__96728;var _ = cljs.core.nth.call(null,vec__96729,0,null);var path = cljs.core.nth.call(null,vec__96729,1,null);var ___$1 = cljs.core.nth.call(null,vec__96729,2,null);var ___$2 = cljs.core.nth.call(null,vec__96729,3,null);var nodes = cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147)));var matching = cljs.core.set.call(null,cljs.core.filter.call(null,((function (nodes){
return (function (p1__96727_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__96727_SHARP_);
});})(nodes))
,nodes));if(cljs.core.contains_QMARK_.call(null,matching,path))
{return path;
} else
{if(cljs.core.seq.call(null,cljs.core.disj.call(null,matching,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"**","**",1013905586)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",1013904284)], null),cljs.core.PersistentVector.EMPTY)))
{return cljs.core.first.call(null,cljs.core.disj.call(null,matching,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"**","**",1013905586)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",1013904284)], null),cljs.core.PersistentVector.EMPTY));
} else
{if(cljs.core.seq.call(null,matching))
{return cljs.core.first.call(null,matching);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return new cljs.core.Keyword(null,"default","default",2558708147);
} else
{return null;
}
}
}
}
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14659__auto__,method_table__14655__auto__,prefer_table__14656__auto__,method_cache__14657__auto__,cached_hierarchy__14658__auto__));
})();
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__96730__delegate = function (renderer,delta,input_queue,args){return null;
};
var G__96730 = function (renderer,delta,input_queue,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__96730__delegate.call(this,renderer,delta,input_queue,args);};
G__96730.cljs$lang$maxFixedArity = 3;
G__96730.cljs$lang$applyTo = (function (arglist__96731){
var renderer = cljs.core.first(arglist__96731);
arglist__96731 = cljs.core.next(arglist__96731);
var delta = cljs.core.first(arglist__96731);
arglist__96731 = cljs.core.next(arglist__96731);
var input_queue = cljs.core.first(arglist__96731);
var args = cljs.core.rest(arglist__96731);
return G__96730__delegate(renderer,delta,input_queue,args);
});
G__96730.cljs$core$IFn$_invoke$arity$variadic = G__96730__delegate;
return G__96730;
})()
);
foundation.app.render.node_update = (function (){var method_table__14655__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14656__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14657__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14658__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14659__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("node-update",(function (renderer,p__96733,input_queue,parent_id){var vec__96734 = p__96733;var _ = cljs.core.nth.call(null,vec__96734,0,null);var path = cljs.core.nth.call(null,vec__96734,1,null);var ___$1 = cljs.core.nth.call(null,vec__96734,2,null);var ___$2 = cljs.core.nth.call(null,vec__96734,3,null);var nodes = cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147)));var matching = cljs.core.set.call(null,cljs.core.filter.call(null,((function (nodes){
return (function (p1__96732_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__96732_SHARP_);
});})(nodes))
,nodes));if(cljs.core.contains_QMARK_.call(null,matching,path))
{return path;
} else
{if(cljs.core.seq.call(null,cljs.core.disj.call(null,matching,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"**","**",1013905586)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",1013904284)], null),cljs.core.PersistentVector.EMPTY)))
{return cljs.core.first.call(null,cljs.core.disj.call(null,matching,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"**","**",1013905586)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",1013904284)], null),cljs.core.PersistentVector.EMPTY));
} else
{if(cljs.core.seq.call(null,matching))
{return cljs.core.first.call(null,matching);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return new cljs.core.Keyword(null,"default","default",2558708147);
} else
{return null;
}
}
}
}
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14659__auto__,method_table__14655__auto__,prefer_table__14656__auto__,method_cache__14657__auto__,cached_hierarchy__14658__auto__));
})();
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__96735__delegate = function (args){return null;
};
var G__96735 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__96735__delegate.call(this,args);};
G__96735.cljs$lang$maxFixedArity = 0;
G__96735.cljs$lang$applyTo = (function (arglist__96736){
var args = cljs.core.seq(arglist__96736);
return G__96735__delegate(args);
});
G__96735.cljs$core$IFn$_invoke$arity$variadic = G__96735__delegate;
return G__96735;
})()
);
foundation.app.render.node_destroy = (function (){var method_table__14655__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14656__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14657__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14658__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14659__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("node-destroy",(function (renderer,p__96738,input_queue,id){var vec__96739 = p__96738;var _ = cljs.core.nth.call(null,vec__96739,0,null);var path = cljs.core.nth.call(null,vec__96739,1,null);var ___$1 = cljs.core.nth.call(null,vec__96739,2,null);var ___$2 = cljs.core.nth.call(null,vec__96739,3,null);var nodes = cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147)));var matching = cljs.core.set.call(null,cljs.core.filter.call(null,((function (nodes){
return (function (p1__96737_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__96737_SHARP_);
});})(nodes))
,nodes));if(cljs.core.contains_QMARK_.call(null,matching,path))
{return path;
} else
{if(cljs.core.seq.call(null,cljs.core.disj.call(null,matching,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"**","**",1013905586)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",1013904284)], null),cljs.core.PersistentVector.EMPTY)))
{return cljs.core.first.call(null,cljs.core.disj.call(null,matching,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"**","**",1013905586)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",1013904284)], null),cljs.core.PersistentVector.EMPTY));
} else
{if(cljs.core.seq.call(null,matching))
{return cljs.core.first.call(null,matching);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return new cljs.core.Keyword(null,"default","default",2558708147);
} else
{return null;
}
}
}
}
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14659__auto__,method_table__14655__auto__,prefer_table__14656__auto__,method_cache__14657__auto__,cached_hierarchy__14658__auto__));
})();
cljs.core._add_method.call(null,foundation.app.render.node_destroy,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__96740__delegate = function (args){return null;
};
var G__96740 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__96740__delegate.call(this,args);};
G__96740.cljs$lang$maxFixedArity = 0;
G__96740.cljs$lang$applyTo = (function (arglist__96741){
var args = cljs.core.seq(arglist__96741);
return G__96740__delegate(args);
});
G__96740.cljs$core$IFn$_invoke$arity$variadic = G__96740__delegate;
return G__96740;
})()
);
foundation.app.render.transform_enable = (function (){var method_table__14655__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14656__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14657__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14658__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14659__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("transform-enable",(function (renderer,p__96743,id,message){var vec__96744 = p__96743;var _ = cljs.core.nth.call(null,vec__96744,0,null);var path = cljs.core.nth.call(null,vec__96744,1,null);var ___$1 = cljs.core.nth.call(null,vec__96744,2,null);var ___$2 = cljs.core.nth.call(null,vec__96744,3,null);var nodes = cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147)));var matching = cljs.core.set.call(null,cljs.core.filter.call(null,((function (nodes){
return (function (p1__96742_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__96742_SHARP_);
});})(nodes))
,nodes));if(cljs.core.contains_QMARK_.call(null,matching,path))
{return path;
} else
{if(cljs.core.seq.call(null,cljs.core.disj.call(null,matching,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"**","**",1013905586)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",1013904284)], null),cljs.core.PersistentVector.EMPTY)))
{return cljs.core.first.call(null,cljs.core.disj.call(null,matching,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"**","**",1013905586)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",1013904284)], null),cljs.core.PersistentVector.EMPTY));
} else
{if(cljs.core.seq.call(null,matching))
{return cljs.core.first.call(null,matching);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return new cljs.core.Keyword(null,"default","default",2558708147);
} else
{return null;
}
}
}
}
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14659__auto__,method_table__14655__auto__,prefer_table__14656__auto__,method_cache__14657__auto__,cached_hierarchy__14658__auto__));
})();
cljs.core._add_method.call(null,foundation.app.render.transform_enable,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__96745__delegate = function (args){return cljs.core.PersistentVector.EMPTY;
};
var G__96745 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__96745__delegate.call(this,args);};
G__96745.cljs$lang$maxFixedArity = 0;
G__96745.cljs$lang$applyTo = (function (arglist__96746){
var args = cljs.core.seq(arglist__96746);
return G__96745__delegate(args);
});
G__96745.cljs$core$IFn$_invoke$arity$variadic = G__96745__delegate;
return G__96745;
})()
);
foundation.app.render.transform_disable = (function (){var method_table__14655__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14656__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14657__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14658__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14659__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("transform-disable",(function (renderer,delta,input_queue){return cljs.core.second.call(null,delta);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14659__auto__,method_table__14655__auto__,prefer_table__14656__auto__,method_cache__14657__auto__,cached_hierarchy__14658__auto__));
})();
cljs.core._add_method.call(null,foundation.app.render.transform_disable,new cljs.core.Keyword(null,"default","default",2558708147),(function (renderer,delta,input_queue){return null;
}));
foundation.app.render.DomMapper = (function (){var obj96748 = {};return obj96748;
})();
foundation.app.render.get_id = (function get_id(this$,path){if((function (){var and__13810__auto__ = this$;if(and__13810__auto__)
{return this$.foundation$app$render$DomMapper$get_id$arity$2;
} else
{return and__13810__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$get_id$arity$2(this$,path);
} else
{var x__14425__auto__ = (((this$ == null))?null:this$);return (function (){var or__13822__auto__ = (foundation.app.render.get_id[goog.typeOf(x__14425__auto__)]);if(or__13822__auto__)
{return or__13822__auto__;
} else
{var or__13822__auto____$1 = (foundation.app.render.get_id["_"]);if(or__13822__auto____$1)
{return or__13822__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.get-id",this$);
}
}
})().call(null,this$,path);
}
});
foundation.app.render.get_parent_id = (function get_parent_id(this$,path){if((function (){var and__13810__auto__ = this$;if(and__13810__auto__)
{return this$.foundation$app$render$DomMapper$get_parent_id$arity$2;
} else
{return and__13810__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$get_parent_id$arity$2(this$,path);
} else
{var x__14425__auto__ = (((this$ == null))?null:this$);return (function (){var or__13822__auto__ = (foundation.app.render.get_parent_id[goog.typeOf(x__14425__auto__)]);if(or__13822__auto__)
{return or__13822__auto__;
} else
{var or__13822__auto____$1 = (foundation.app.render.get_parent_id["_"]);if(or__13822__auto____$1)
{return or__13822__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.get-parent-id",this$);
}
}
})().call(null,this$,path);
}
});
foundation.app.render.new_id_BANG_ = (function() {
var new_id_BANG_ = null;
var new_id_BANG___2 = (function (this$,path){if((function (){var and__13810__auto__ = this$;if(and__13810__auto__)
{return this$.foundation$app$render$DomMapper$new_id_BANG_$arity$2;
} else
{return and__13810__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$new_id_BANG_$arity$2(this$,path);
} else
{var x__14425__auto__ = (((this$ == null))?null:this$);return (function (){var or__13822__auto__ = (foundation.app.render.new_id_BANG_[goog.typeOf(x__14425__auto__)]);if(or__13822__auto__)
{return or__13822__auto__;
} else
{var or__13822__auto____$1 = (foundation.app.render.new_id_BANG_["_"]);if(or__13822__auto____$1)
{return or__13822__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.new-id!",this$);
}
}
})().call(null,this$,path);
}
});
var new_id_BANG___3 = (function (this$,path,v){if((function (){var and__13810__auto__ = this$;if(and__13810__auto__)
{return this$.foundation$app$render$DomMapper$new_id_BANG_$arity$3;
} else
{return and__13810__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$new_id_BANG_$arity$3(this$,path,v);
} else
{var x__14425__auto__ = (((this$ == null))?null:this$);return (function (){var or__13822__auto__ = (foundation.app.render.new_id_BANG_[goog.typeOf(x__14425__auto__)]);if(or__13822__auto__)
{return or__13822__auto__;
} else
{var or__13822__auto____$1 = (foundation.app.render.new_id_BANG_["_"]);if(or__13822__auto____$1)
{return or__13822__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.new-id!",this$);
}
}
})().call(null,this$,path,v);
}
});
new_id_BANG_ = function(this$,path,v){
switch(arguments.length){
case 2:
return new_id_BANG___2.call(this,this$,path);
case 3:
return new_id_BANG___3.call(this,this$,path,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
new_id_BANG_.cljs$core$IFn$_invoke$arity$2 = new_id_BANG___2;
new_id_BANG_.cljs$core$IFn$_invoke$arity$3 = new_id_BANG___3;
return new_id_BANG_;
})()
;
foundation.app.render.delete_id_BANG_ = (function delete_id_BANG_(this$,path){if((function (){var and__13810__auto__ = this$;if(and__13810__auto__)
{return this$.foundation$app$render$DomMapper$delete_id_BANG_$arity$2;
} else
{return and__13810__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$delete_id_BANG_$arity$2(this$,path);
} else
{var x__14425__auto__ = (((this$ == null))?null:this$);return (function (){var or__13822__auto__ = (foundation.app.render.delete_id_BANG_[goog.typeOf(x__14425__auto__)]);if(or__13822__auto__)
{return or__13822__auto__;
} else
{var or__13822__auto____$1 = (foundation.app.render.delete_id_BANG_["_"]);if(or__13822__auto____$1)
{return or__13822__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.delete-id!",this$);
}
}
})().call(null,this$,path);
}
});
foundation.app.render.on_destroy_BANG_ = (function on_destroy_BANG_(this$,path,f){if((function (){var and__13810__auto__ = this$;if(and__13810__auto__)
{return this$.foundation$app$render$DomMapper$on_destroy_BANG_$arity$3;
} else
{return and__13810__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$on_destroy_BANG_$arity$3(this$,path,f);
} else
{var x__14425__auto__ = (((this$ == null))?null:this$);return (function (){var or__13822__auto__ = (foundation.app.render.on_destroy_BANG_[goog.typeOf(x__14425__auto__)]);if(or__13822__auto__)
{return or__13822__auto__;
} else
{var or__13822__auto____$1 = (foundation.app.render.on_destroy_BANG_["_"]);if(or__13822__auto____$1)
{return or__13822__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.on-destroy!",this$);
}
}
})().call(null,this$,path,f);
}
});
foundation.app.render.set_data_BANG_ = (function set_data_BANG_(this$,ks,d){if((function (){var and__13810__auto__ = this$;if(and__13810__auto__)
{return this$.foundation$app$render$DomMapper$set_data_BANG_$arity$3;
} else
{return and__13810__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$set_data_BANG_$arity$3(this$,ks,d);
} else
{var x__14425__auto__ = (((this$ == null))?null:this$);return (function (){var or__13822__auto__ = (foundation.app.render.set_data_BANG_[goog.typeOf(x__14425__auto__)]);if(or__13822__auto__)
{return or__13822__auto__;
} else
{var or__13822__auto____$1 = (foundation.app.render.set_data_BANG_["_"]);if(or__13822__auto____$1)
{return or__13822__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.set-data!",this$);
}
}
})().call(null,this$,ks,d);
}
});
foundation.app.render.drop_data_BANG_ = (function drop_data_BANG_(this$,ks){if((function (){var and__13810__auto__ = this$;if(and__13810__auto__)
{return this$.foundation$app$render$DomMapper$drop_data_BANG_$arity$2;
} else
{return and__13810__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$drop_data_BANG_$arity$2(this$,ks);
} else
{var x__14425__auto__ = (((this$ == null))?null:this$);return (function (){var or__13822__auto__ = (foundation.app.render.drop_data_BANG_[goog.typeOf(x__14425__auto__)]);if(or__13822__auto__)
{return or__13822__auto__;
} else
{var or__13822__auto____$1 = (foundation.app.render.drop_data_BANG_["_"]);if(or__13822__auto____$1)
{return or__13822__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.drop-data!",this$);
}
}
})().call(null,this$,ks);
}
});
foundation.app.render.get_data = (function get_data(this$,ks){if((function (){var and__13810__auto__ = this$;if(and__13810__auto__)
{return this$.foundation$app$render$DomMapper$get_data$arity$2;
} else
{return and__13810__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$get_data$arity$2(this$,ks);
} else
{var x__14425__auto__ = (((this$ == null))?null:this$);return (function (){var or__13822__auto__ = (foundation.app.render.get_data[goog.typeOf(x__14425__auto__)]);if(or__13822__auto__)
{return or__13822__auto__;
} else
{var or__13822__auto____$1 = (foundation.app.render.get_data["_"]);if(or__13822__auto____$1)
{return or__13822__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.get-data",this$);
}
}
})().call(null,this$,ks);
}
});
foundation.app.render.fix_id = (function fix_id(s){if(!((s instanceof cljs.core.Keyword)))
{return cljs.core.keyword.call(null,[cljs.core.str("#"),cljs.core.str(s)].join(''));
} else
{return s;
}
});
foundation.app.render.run_on_destroy_BANG_ = (function run_on_destroy_BANG_(env){var nodes = cljs.core.tree_seq.call(null,cljs.core.constantly.call(null,true),(function (n){return cljs.core.map.call(null,(function (p1__96749_SHARP_){return cljs.core.get.call(null,n,p1__96749_SHARP_);
}),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),null,new cljs.core.Keyword(null,"_data","_data",1104714747),null,new cljs.core.Keyword(null,"id","id",1013907597),null], null), null),cljs.core.keys.call(null,n)));
}),env);var seq__96754 = cljs.core.seq.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),nodes));var chunk__96755 = null;var count__96756 = 0;var i__96757 = 0;while(true){
if((i__96757 < count__96756))
{var f = cljs.core._nth.call(null,chunk__96755,i__96757);f.call(null);
{
var G__96758 = seq__96754;
var G__96759 = chunk__96755;
var G__96760 = count__96756;
var G__96761 = (i__96757 + 1);
seq__96754 = G__96758;
chunk__96755 = G__96759;
count__96756 = G__96760;
i__96757 = G__96761;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__96754);if(temp__4092__auto__)
{var seq__96754__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__96754__$1))
{var c__14546__auto__ = cljs.core.chunk_first.call(null,seq__96754__$1);{
var G__96762 = cljs.core.chunk_rest.call(null,seq__96754__$1);
var G__96763 = c__14546__auto__;
var G__96764 = cljs.core.count.call(null,c__14546__auto__);
var G__96765 = 0;
seq__96754 = G__96762;
chunk__96755 = G__96763;
count__96756 = G__96764;
i__96757 = G__96765;
continue;
}
} else
{var f = cljs.core.first.call(null,seq__96754__$1);f.call(null);
{
var G__96766 = cljs.core.next.call(null,seq__96754__$1);
var G__96767 = null;
var G__96768 = 0;
var G__96769 = 0;
seq__96754 = G__96766;
chunk__96755 = G__96767;
count__96756 = G__96768;
i__96757 = G__96769;
continue;
}
}
} else
{return null;
}
}
break;
}
});

/**
* @constructor
* @param {*} env
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
foundation.app.render.DomRenderer = (function (env,__meta,__extmap){
this.env = env;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
foundation.app.render.DomRenderer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__14379__auto__){var self__ = this;
var this__14379__auto____$1 = this;var h__14233__auto__ = self__.__hash;if(!((h__14233__auto__ == null)))
{return h__14233__auto__;
} else
{var h__14233__auto____$1 = cljs.core.hash_imap.call(null,this__14379__auto____$1);self__.__hash = h__14233__auto____$1;
return h__14233__auto____$1;
}
});
foundation.app.render.DomRenderer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__14384__auto__,k__14385__auto__){var self__ = this;
var this__14384__auto____$1 = this;return cljs.core._lookup.call(null,this__14384__auto____$1,k__14385__auto__,null);
});
foundation.app.render.DomRenderer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__14386__auto__,k96771,else__14387__auto__){var self__ = this;
var this__14386__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k96771,new cljs.core.Keyword(null,"env","env",1014004831)))
{return self__.env;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k96771,else__14387__auto__);
} else
{return null;
}
}
});
foundation.app.render.DomRenderer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__14391__auto__,k__14392__auto__,G__96770){var self__ = this;
var this__14391__auto____$1 = this;var pred__96773 = cljs.core.keyword_identical_QMARK_;var expr__96774 = k__14392__auto__;if(cljs.core.truth_(pred__96773.call(null,new cljs.core.Keyword(null,"env","env",1014004831),expr__96774)))
{return (new foundation.app.render.DomRenderer(G__96770,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.render.DomRenderer(self__.env,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__14392__auto__,G__96770),null));
}
});
foundation.app.render.DomRenderer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__14398__auto__,writer__14399__auto__,opts__14400__auto__){var self__ = this;
var this__14398__auto____$1 = this;var pr_pair__14401__auto__ = (function (keyval__14402__auto__){return cljs.core.pr_sequential_writer.call(null,writer__14399__auto__,cljs.core.pr_writer,""," ","",opts__14400__auto__,keyval__14402__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__14399__auto__,pr_pair__14401__auto__,"#foundation.app.render.DomRenderer{",", ","}",opts__14400__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"env","env",1014004831),self__.env],null))], null),self__.__extmap));
});
foundation.app.render.DomRenderer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__14389__auto__,entry__14390__auto__){var self__ = this;
var this__14389__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__14390__auto__))
{return cljs.core._assoc.call(null,this__14389__auto____$1,cljs.core._nth.call(null,entry__14390__auto__,0),cljs.core._nth.call(null,entry__14390__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__14389__auto____$1,entry__14390__auto__);
}
});
foundation.app.render.DomRenderer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__14396__auto__){var self__ = this;
var this__14396__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"env","env",1014004831),self__.env],null))], null),self__.__extmap));
});
foundation.app.render.DomRenderer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__14388__auto__){var self__ = this;
var this__14388__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
foundation.app.render.DomRenderer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__14380__auto__,other__14381__auto__){var self__ = this;
var this__14380__auto____$1 = this;if(cljs.core.truth_((function (){var and__13810__auto__ = other__14381__auto__;if(cljs.core.truth_(and__13810__auto__))
{return ((this__14380__auto____$1.constructor === other__14381__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__14380__auto____$1,other__14381__auto__));
} else
{return and__13810__auto__;
}
})()))
{return true;
} else
{return false;
}
});
foundation.app.render.DomRenderer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__14383__auto__,G__96770){var self__ = this;
var this__14383__auto____$1 = this;return (new foundation.app.render.DomRenderer(self__.env,G__96770,self__.__extmap,self__.__hash));
});
foundation.app.render.DomRenderer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__14382__auto__){var self__ = this;
var this__14382__auto____$1 = this;return self__.__meta;
});
foundation.app.render.DomRenderer.prototype.foundation$app$render$DomMapper$ = true;
foundation.app.render.DomRenderer.prototype.foundation$app$render$DomMapper$get_id$arity$2 = (function (this$,path){var self__ = this;
var this$__$1 = this;if(cljs.core.seq.call(null,path))
{return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.env),cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"id","id",1013907597)));
} else
{return new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.env));
}
});
foundation.app.render.DomRenderer.prototype.foundation$app$render$DomMapper$get_parent_id$arity$2 = (function (this$,path){var self__ = this;
var this$__$1 = this;if(cljs.core.seq.call(null,path))
{return foundation.app.render.get_id.call(null,this$__$1,cljs.core.vec.call(null,cljs.core.butlast.call(null,path)));
} else
{return null;
}
});
foundation.app.render.DomRenderer.prototype.foundation$app$render$DomMapper$new_id_BANG_$arity$2 = (function (this$,path){var self__ = this;
var this$__$1 = this;return foundation.app.render.new_id_BANG_.call(null,this$__$1,path,cljs.core.gensym.call(null));
});
foundation.app.render.DomRenderer.prototype.foundation$app$render$DomMapper$new_id_BANG_$arity$3 = (function (this$,path,v){var self__ = this;
var this$__$1 = this;cljs.core.swap_BANG_.call(null,self__.env,cljs.core.assoc_in,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"id","id",1013907597)),v);
return v;
});
foundation.app.render.DomRenderer.prototype.foundation$app$render$DomMapper$delete_id_BANG_$arity$2 = (function (this$,path){var self__ = this;
var this$__$1 = this;foundation.app.render.run_on_destroy_BANG_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.env),path));
return cljs.core.swap_BANG_.call(null,self__.env,cljs.core.assoc_in,path,null);
});
foundation.app.render.DomRenderer.prototype.foundation$app$render$DomMapper$on_destroy_BANG_$arity$3 = (function (this$,path,f){var self__ = this;
var this$__$1 = this;return cljs.core.swap_BANG_.call(null,self__.env,cljs.core.update_in,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022)),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),f);
});
foundation.app.render.DomRenderer.prototype.foundation$app$render$DomMapper$set_data_BANG_$arity$3 = (function (this$,ks,d){var self__ = this;
var this$__$1 = this;return cljs.core.swap_BANG_.call(null,self__.env,cljs.core.assoc_in,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_data","_data",1104714747)], null),ks),d);
});
foundation.app.render.DomRenderer.prototype.foundation$app$render$DomMapper$drop_data_BANG_$arity$2 = (function (this$,ks){var self__ = this;
var this$__$1 = this;return cljs.core.swap_BANG_.call(null,self__.env,cljs.core.update_in,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_data","_data",1104714747)], null),cljs.core.butlast.call(null,ks)),cljs.core.dissoc,cljs.core.last.call(null,ks));
});
foundation.app.render.DomRenderer.prototype.foundation$app$render$DomMapper$get_data$arity$2 = (function (this$,ks){var self__ = this;
var this$__$1 = this;return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.env),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_data","_data",1104714747)], null),ks));
});
foundation.app.render.DomRenderer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__14393__auto__,k__14394__auto__){var self__ = this;
var this__14393__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"env","env",1014004831),null], null), null),k__14394__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__14393__auto____$1),self__.__meta),k__14394__auto__);
} else
{return (new foundation.app.render.DomRenderer(self__.env,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__14394__auto__)),null));
}
});
foundation.app.render.DomRenderer.cljs$lang$type = true;
foundation.app.render.DomRenderer.cljs$lang$ctorPrSeq = (function (this__14418__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"foundation.app.render/DomRenderer");
});
foundation.app.render.DomRenderer.cljs$lang$ctorPrWriter = (function (this__14418__auto__,writer__14419__auto__){return cljs.core._write.call(null,writer__14419__auto__,"foundation.app.render/DomRenderer");
});
foundation.app.render.__GT_DomRenderer = (function __GT_DomRenderer(env){return (new foundation.app.render.DomRenderer(env));
});
foundation.app.render.map__GT_DomRenderer = (function map__GT_DomRenderer(G__96772){return (new foundation.app.render.DomRenderer(new cljs.core.Keyword(null,"env","env",1014004831).cljs$core$IFn$_invoke$arity$1(G__96772),null,cljs.core.dissoc.call(null,G__96772,new cljs.core.Keyword(null,"env","env",1014004831))));
});
foundation.app.render.push_render_queue = (function push_render_queue(root_id,input_queue){var renderer = foundation.app.render.__GT_DomRenderer.call(null,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),root_id], null)));var render_queue = cljs.core.async.chan.call(null);var c__16830__auto___96822 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16831__auto__ = (function (){var switch__16760__auto__ = (function (state_96810){var state_val_96811 = (state_96810[1]);if((state_val_96811 === 4))
{var inst_96802 = (state_96810[2]);var inst_96803 = cljs.core.nth.call(null,inst_96802,0,null);var inst_96804 = cljs.core.nth.call(null,inst_96802,1,null);var inst_96805 = foundation.app.render.node_create.call(null,renderer,inst_96802,input_queue);var state_96810__$1 = (function (){var statearr_96812 = state_96810;(statearr_96812[7] = inst_96804);
(statearr_96812[8] = inst_96805);
(statearr_96812[9] = inst_96803);
return statearr_96812;
})();var statearr_96813_96823 = state_96810__$1;(statearr_96813_96823[2] = null);
(statearr_96813_96823[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_96811 === 3))
{var inst_96808 = (state_96810[2]);var state_96810__$1 = state_96810;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_96810__$1,inst_96808);
} else
{if((state_val_96811 === 2))
{var state_96810__$1 = state_96810;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_96810__$1,4,render_queue);
} else
{if((state_val_96811 === 1))
{var state_96810__$1 = state_96810;var statearr_96814_96824 = state_96810__$1;(statearr_96814_96824[2] = null);
(statearr_96814_96824[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__16760__auto__){
return (function() {
var state_machine__16761__auto__ = null;
var state_machine__16761__auto____0 = (function (){var statearr_96818 = (new Array(10));(statearr_96818[0] = state_machine__16761__auto__);
(statearr_96818[1] = 1);
return statearr_96818;
});
var state_machine__16761__auto____1 = (function (state_96810){while(true){
var ret_value__16762__auto__ = (function (){try{while(true){
var result__16763__auto__ = switch__16760__auto__.call(null,state_96810);if(cljs.core.keyword_identical_QMARK_.call(null,result__16763__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16763__auto__;
}
break;
}
}catch (e96819){if((e96819 instanceof Object))
{var ex__16764__auto__ = e96819;var statearr_96820_96825 = state_96810;(statearr_96820_96825[5] = ex__16764__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_96810);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e96819;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16762__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__96826 = state_96810;
state_96810 = G__96826;
continue;
}
} else
{return ret_value__16762__auto__;
}
break;
}
});
state_machine__16761__auto__ = function(state_96810){
switch(arguments.length){
case 0:
return state_machine__16761__auto____0.call(this);
case 1:
return state_machine__16761__auto____1.call(this,state_96810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16761__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16761__auto____0;
state_machine__16761__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16761__auto____1;
return state_machine__16761__auto__;
})()
;})(switch__16760__auto__))
})();var state__16832__auto__ = (function (){var statearr_96821 = f__16831__auto__.call(null);(statearr_96821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16830__auto___96822);
return statearr_96821;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16832__auto__);
}));
return render_queue;
});
foundation.app.render.bind_event = (function bind_event(e,id,f){return enfocus.core.at.call(null,document,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.app.render.fix_id.call(null,id)], null),enfocus.events.listen.call(null,e,f));
});
foundation.app.render.attach_transform = (function attach_transform(renderer,event,id,type,path,input_queue){return enfocus.core.at.call(null,document,(function (){var partial_message = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,type,foundation.app.message.path,path], true, false);var event_handler = ((function (partial_message){
return (function (e){var seq__96831 = cljs.core.seq.call(null,foundation.app.render.transform_enable.call(null,renderer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,path], null),id,partial_message));var chunk__96832 = null;var count__96833 = 0;var i__96834 = 0;while(true){
if((i__96834 < count__96833))
{var message = cljs.core._nth.call(null,chunk__96832,i__96834);cljs.core.async.put_BANG_.call(null,input_queue,message);
{
var G__96835 = seq__96831;
var G__96836 = chunk__96832;
var G__96837 = count__96833;
var G__96838 = (i__96834 + 1);
seq__96831 = G__96835;
chunk__96832 = G__96836;
count__96833 = G__96837;
i__96834 = G__96838;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__96831);if(temp__4092__auto__)
{var seq__96831__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__96831__$1))
{var c__14546__auto__ = cljs.core.chunk_first.call(null,seq__96831__$1);{
var G__96839 = cljs.core.chunk_rest.call(null,seq__96831__$1);
var G__96840 = c__14546__auto__;
var G__96841 = cljs.core.count.call(null,c__14546__auto__);
var G__96842 = 0;
seq__96831 = G__96839;
chunk__96832 = G__96840;
count__96833 = G__96841;
i__96834 = G__96842;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__96831__$1);cljs.core.async.put_BANG_.call(null,input_queue,message);
{
var G__96843 = cljs.core.next.call(null,seq__96831__$1);
var G__96844 = null;
var G__96845 = 0;
var G__96846 = 0;
seq__96831 = G__96843;
chunk__96832 = G__96844;
count__96833 = G__96845;
i__96834 = G__96846;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(partial_message))
;return foundation.app.render.bind_event.call(null,event,id,event_handler);
})());
});

//# sourceMappingURL=render.js.map