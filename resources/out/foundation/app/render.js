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
foundation.app.render.node_create = (function (){var method_table__14654__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14655__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14656__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14657__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14658__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("node-create",(function (renderer,p__28506,input_queue,parent_id,id){var vec__28507 = p__28506;var _ = cljs.core.nth.call(null,vec__28507,0,null);var path = cljs.core.nth.call(null,vec__28507,1,null);var ___$1 = cljs.core.nth.call(null,vec__28507,2,null);var ___$2 = cljs.core.nth.call(null,vec__28507,3,null);var nodes = cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147)));var matching = cljs.core.set.call(null,cljs.core.filter.call(null,((function (nodes){
return (function (p1__28505_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__28505_SHARP_);
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
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14658__auto__,method_table__14654__auto__,prefer_table__14655__auto__,method_cache__14656__auto__,cached_hierarchy__14657__auto__));
})();
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__28508__delegate = function (renderer,delta,input_queue,args){return null;
};
var G__28508 = function (renderer,delta,input_queue,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__28508__delegate.call(this,renderer,delta,input_queue,args);};
G__28508.cljs$lang$maxFixedArity = 3;
G__28508.cljs$lang$applyTo = (function (arglist__28509){
var renderer = cljs.core.first(arglist__28509);
arglist__28509 = cljs.core.next(arglist__28509);
var delta = cljs.core.first(arglist__28509);
arglist__28509 = cljs.core.next(arglist__28509);
var input_queue = cljs.core.first(arglist__28509);
var args = cljs.core.rest(arglist__28509);
return G__28508__delegate(renderer,delta,input_queue,args);
});
G__28508.cljs$core$IFn$_invoke$arity$variadic = G__28508__delegate;
return G__28508;
})()
);
foundation.app.render.node_update = (function (){var method_table__14654__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14655__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14656__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14657__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14658__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("node-update",(function (renderer,p__28511,input_queue,parent_id){var vec__28512 = p__28511;var _ = cljs.core.nth.call(null,vec__28512,0,null);var path = cljs.core.nth.call(null,vec__28512,1,null);var ___$1 = cljs.core.nth.call(null,vec__28512,2,null);var ___$2 = cljs.core.nth.call(null,vec__28512,3,null);var nodes = cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147)));var matching = cljs.core.set.call(null,cljs.core.filter.call(null,((function (nodes){
return (function (p1__28510_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__28510_SHARP_);
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
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14658__auto__,method_table__14654__auto__,prefer_table__14655__auto__,method_cache__14656__auto__,cached_hierarchy__14657__auto__));
})();
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__28513__delegate = function (args){return null;
};
var G__28513 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__28513__delegate.call(this,args);};
G__28513.cljs$lang$maxFixedArity = 0;
G__28513.cljs$lang$applyTo = (function (arglist__28514){
var args = cljs.core.seq(arglist__28514);
return G__28513__delegate(args);
});
G__28513.cljs$core$IFn$_invoke$arity$variadic = G__28513__delegate;
return G__28513;
})()
);
foundation.app.render.node_destroy = (function (){var method_table__14654__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14655__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14656__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14657__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14658__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("node-destroy",(function (renderer,p__28516,input_queue,id){var vec__28517 = p__28516;var _ = cljs.core.nth.call(null,vec__28517,0,null);var path = cljs.core.nth.call(null,vec__28517,1,null);var ___$1 = cljs.core.nth.call(null,vec__28517,2,null);var ___$2 = cljs.core.nth.call(null,vec__28517,3,null);var nodes = cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147)));var matching = cljs.core.set.call(null,cljs.core.filter.call(null,((function (nodes){
return (function (p1__28515_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__28515_SHARP_);
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
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14658__auto__,method_table__14654__auto__,prefer_table__14655__auto__,method_cache__14656__auto__,cached_hierarchy__14657__auto__));
})();
cljs.core._add_method.call(null,foundation.app.render.node_destroy,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__28518__delegate = function (args){return null;
};
var G__28518 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__28518__delegate.call(this,args);};
G__28518.cljs$lang$maxFixedArity = 0;
G__28518.cljs$lang$applyTo = (function (arglist__28519){
var args = cljs.core.seq(arglist__28519);
return G__28518__delegate(args);
});
G__28518.cljs$core$IFn$_invoke$arity$variadic = G__28518__delegate;
return G__28518;
})()
);
foundation.app.render.transform_enable = (function (){var method_table__14654__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14655__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14656__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14657__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14658__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("transform-enable",(function (renderer,p__28521,id,message){var vec__28522 = p__28521;var _ = cljs.core.nth.call(null,vec__28522,0,null);var path = cljs.core.nth.call(null,vec__28522,1,null);var ___$1 = cljs.core.nth.call(null,vec__28522,2,null);var ___$2 = cljs.core.nth.call(null,vec__28522,3,null);var nodes = cljs.core.keys.call(null,cljs.core.dissoc.call(null,cljs.core.methods$.call(null,foundation.app.render.node_create),new cljs.core.Keyword(null,"default","default",2558708147)));var matching = cljs.core.set.call(null,cljs.core.filter.call(null,((function (nodes){
return (function (p1__28520_SHARP_){return foundation.app.dataflow.matching_path_QMARK_.call(null,path,p1__28520_SHARP_);
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
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14658__auto__,method_table__14654__auto__,prefer_table__14655__auto__,method_cache__14656__auto__,cached_hierarchy__14657__auto__));
})();
cljs.core._add_method.call(null,foundation.app.render.transform_enable,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__28523__delegate = function (args){return cljs.core.PersistentVector.EMPTY;
};
var G__28523 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__28523__delegate.call(this,args);};
G__28523.cljs$lang$maxFixedArity = 0;
G__28523.cljs$lang$applyTo = (function (arglist__28524){
var args = cljs.core.seq(arglist__28524);
return G__28523__delegate(args);
});
G__28523.cljs$core$IFn$_invoke$arity$variadic = G__28523__delegate;
return G__28523;
})()
);
foundation.app.render.transform_disable = (function (){var method_table__14654__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14655__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14656__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14657__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14658__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("transform-disable",(function (renderer,delta,input_queue){return cljs.core.second.call(null,delta);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14658__auto__,method_table__14654__auto__,prefer_table__14655__auto__,method_cache__14656__auto__,cached_hierarchy__14657__auto__));
})();
cljs.core._add_method.call(null,foundation.app.render.transform_disable,new cljs.core.Keyword(null,"default","default",2558708147),(function (renderer,delta,input_queue){return null;
}));
foundation.app.render.DomMapper = (function (){var obj28526 = {};return obj28526;
})();
foundation.app.render.get_id = (function get_id(this$,path){if((function (){var and__13809__auto__ = this$;if(and__13809__auto__)
{return this$.foundation$app$render$DomMapper$get_id$arity$2;
} else
{return and__13809__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$get_id$arity$2(this$,path);
} else
{var x__14424__auto__ = (((this$ == null))?null:this$);return (function (){var or__13821__auto__ = (foundation.app.render.get_id[goog.typeOf(x__14424__auto__)]);if(or__13821__auto__)
{return or__13821__auto__;
} else
{var or__13821__auto____$1 = (foundation.app.render.get_id["_"]);if(or__13821__auto____$1)
{return or__13821__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.get-id",this$);
}
}
})().call(null,this$,path);
}
});
foundation.app.render.get_parent_id = (function get_parent_id(this$,path){if((function (){var and__13809__auto__ = this$;if(and__13809__auto__)
{return this$.foundation$app$render$DomMapper$get_parent_id$arity$2;
} else
{return and__13809__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$get_parent_id$arity$2(this$,path);
} else
{var x__14424__auto__ = (((this$ == null))?null:this$);return (function (){var or__13821__auto__ = (foundation.app.render.get_parent_id[goog.typeOf(x__14424__auto__)]);if(or__13821__auto__)
{return or__13821__auto__;
} else
{var or__13821__auto____$1 = (foundation.app.render.get_parent_id["_"]);if(or__13821__auto____$1)
{return or__13821__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.get-parent-id",this$);
}
}
})().call(null,this$,path);
}
});
foundation.app.render.new_id_BANG_ = (function() {
var new_id_BANG_ = null;
var new_id_BANG___2 = (function (this$,path){if((function (){var and__13809__auto__ = this$;if(and__13809__auto__)
{return this$.foundation$app$render$DomMapper$new_id_BANG_$arity$2;
} else
{return and__13809__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$new_id_BANG_$arity$2(this$,path);
} else
{var x__14424__auto__ = (((this$ == null))?null:this$);return (function (){var or__13821__auto__ = (foundation.app.render.new_id_BANG_[goog.typeOf(x__14424__auto__)]);if(or__13821__auto__)
{return or__13821__auto__;
} else
{var or__13821__auto____$1 = (foundation.app.render.new_id_BANG_["_"]);if(or__13821__auto____$1)
{return or__13821__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.new-id!",this$);
}
}
})().call(null,this$,path);
}
});
var new_id_BANG___3 = (function (this$,path,v){if((function (){var and__13809__auto__ = this$;if(and__13809__auto__)
{return this$.foundation$app$render$DomMapper$new_id_BANG_$arity$3;
} else
{return and__13809__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$new_id_BANG_$arity$3(this$,path,v);
} else
{var x__14424__auto__ = (((this$ == null))?null:this$);return (function (){var or__13821__auto__ = (foundation.app.render.new_id_BANG_[goog.typeOf(x__14424__auto__)]);if(or__13821__auto__)
{return or__13821__auto__;
} else
{var or__13821__auto____$1 = (foundation.app.render.new_id_BANG_["_"]);if(or__13821__auto____$1)
{return or__13821__auto____$1;
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
foundation.app.render.delete_id_BANG_ = (function delete_id_BANG_(this$,path){if((function (){var and__13809__auto__ = this$;if(and__13809__auto__)
{return this$.foundation$app$render$DomMapper$delete_id_BANG_$arity$2;
} else
{return and__13809__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$delete_id_BANG_$arity$2(this$,path);
} else
{var x__14424__auto__ = (((this$ == null))?null:this$);return (function (){var or__13821__auto__ = (foundation.app.render.delete_id_BANG_[goog.typeOf(x__14424__auto__)]);if(or__13821__auto__)
{return or__13821__auto__;
} else
{var or__13821__auto____$1 = (foundation.app.render.delete_id_BANG_["_"]);if(or__13821__auto____$1)
{return or__13821__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.delete-id!",this$);
}
}
})().call(null,this$,path);
}
});
foundation.app.render.on_destroy_BANG_ = (function on_destroy_BANG_(this$,path,f){if((function (){var and__13809__auto__ = this$;if(and__13809__auto__)
{return this$.foundation$app$render$DomMapper$on_destroy_BANG_$arity$3;
} else
{return and__13809__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$on_destroy_BANG_$arity$3(this$,path,f);
} else
{var x__14424__auto__ = (((this$ == null))?null:this$);return (function (){var or__13821__auto__ = (foundation.app.render.on_destroy_BANG_[goog.typeOf(x__14424__auto__)]);if(or__13821__auto__)
{return or__13821__auto__;
} else
{var or__13821__auto____$1 = (foundation.app.render.on_destroy_BANG_["_"]);if(or__13821__auto____$1)
{return or__13821__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.on-destroy!",this$);
}
}
})().call(null,this$,path,f);
}
});
foundation.app.render.set_data_BANG_ = (function set_data_BANG_(this$,ks,d){if((function (){var and__13809__auto__ = this$;if(and__13809__auto__)
{return this$.foundation$app$render$DomMapper$set_data_BANG_$arity$3;
} else
{return and__13809__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$set_data_BANG_$arity$3(this$,ks,d);
} else
{var x__14424__auto__ = (((this$ == null))?null:this$);return (function (){var or__13821__auto__ = (foundation.app.render.set_data_BANG_[goog.typeOf(x__14424__auto__)]);if(or__13821__auto__)
{return or__13821__auto__;
} else
{var or__13821__auto____$1 = (foundation.app.render.set_data_BANG_["_"]);if(or__13821__auto____$1)
{return or__13821__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.set-data!",this$);
}
}
})().call(null,this$,ks,d);
}
});
foundation.app.render.drop_data_BANG_ = (function drop_data_BANG_(this$,ks){if((function (){var and__13809__auto__ = this$;if(and__13809__auto__)
{return this$.foundation$app$render$DomMapper$drop_data_BANG_$arity$2;
} else
{return and__13809__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$drop_data_BANG_$arity$2(this$,ks);
} else
{var x__14424__auto__ = (((this$ == null))?null:this$);return (function (){var or__13821__auto__ = (foundation.app.render.drop_data_BANG_[goog.typeOf(x__14424__auto__)]);if(or__13821__auto__)
{return or__13821__auto__;
} else
{var or__13821__auto____$1 = (foundation.app.render.drop_data_BANG_["_"]);if(or__13821__auto____$1)
{return or__13821__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.drop-data!",this$);
}
}
})().call(null,this$,ks);
}
});
foundation.app.render.get_data = (function get_data(this$,ks){if((function (){var and__13809__auto__ = this$;if(and__13809__auto__)
{return this$.foundation$app$render$DomMapper$get_data$arity$2;
} else
{return and__13809__auto__;
}
})())
{return this$.foundation$app$render$DomMapper$get_data$arity$2(this$,ks);
} else
{var x__14424__auto__ = (((this$ == null))?null:this$);return (function (){var or__13821__auto__ = (foundation.app.render.get_data[goog.typeOf(x__14424__auto__)]);if(or__13821__auto__)
{return or__13821__auto__;
} else
{var or__13821__auto____$1 = (foundation.app.render.get_data["_"]);if(or__13821__auto____$1)
{return or__13821__auto____$1;
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
foundation.app.render.run_on_destroy_BANG_ = (function run_on_destroy_BANG_(env){var nodes = cljs.core.tree_seq.call(null,cljs.core.constantly.call(null,true),(function (n){return cljs.core.map.call(null,(function (p1__28527_SHARP_){return cljs.core.get.call(null,n,p1__28527_SHARP_);
}),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),null,new cljs.core.Keyword(null,"_data","_data",1104714747),null,new cljs.core.Keyword(null,"id","id",1013907597),null], null), null),cljs.core.keys.call(null,n)));
}),env);var seq__28532 = cljs.core.seq.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),nodes));var chunk__28533 = null;var count__28534 = 0;var i__28535 = 0;while(true){
if((i__28535 < count__28534))
{var f = cljs.core._nth.call(null,chunk__28533,i__28535);f.call(null);
{
var G__28536 = seq__28532;
var G__28537 = chunk__28533;
var G__28538 = count__28534;
var G__28539 = (i__28535 + 1);
seq__28532 = G__28536;
chunk__28533 = G__28537;
count__28534 = G__28538;
i__28535 = G__28539;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__28532);if(temp__4092__auto__)
{var seq__28532__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28532__$1))
{var c__14545__auto__ = cljs.core.chunk_first.call(null,seq__28532__$1);{
var G__28540 = cljs.core.chunk_rest.call(null,seq__28532__$1);
var G__28541 = c__14545__auto__;
var G__28542 = cljs.core.count.call(null,c__14545__auto__);
var G__28543 = 0;
seq__28532 = G__28540;
chunk__28533 = G__28541;
count__28534 = G__28542;
i__28535 = G__28543;
continue;
}
} else
{var f = cljs.core.first.call(null,seq__28532__$1);f.call(null);
{
var G__28544 = cljs.core.next.call(null,seq__28532__$1);
var G__28545 = null;
var G__28546 = 0;
var G__28547 = 0;
seq__28532 = G__28544;
chunk__28533 = G__28545;
count__28534 = G__28546;
i__28535 = G__28547;
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
foundation.app.render.DomRenderer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__14378__auto__){var self__ = this;
var this__14378__auto____$1 = this;var h__14232__auto__ = self__.__hash;if(!((h__14232__auto__ == null)))
{return h__14232__auto__;
} else
{var h__14232__auto____$1 = cljs.core.hash_imap.call(null,this__14378__auto____$1);self__.__hash = h__14232__auto____$1;
return h__14232__auto____$1;
}
});
foundation.app.render.DomRenderer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__14383__auto__,k__14384__auto__){var self__ = this;
var this__14383__auto____$1 = this;return cljs.core._lookup.call(null,this__14383__auto____$1,k__14384__auto__,null);
});
foundation.app.render.DomRenderer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__14385__auto__,k28549,else__14386__auto__){var self__ = this;
var this__14385__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k28549,new cljs.core.Keyword(null,"env","env",1014004831)))
{return self__.env;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k28549,else__14386__auto__);
} else
{return null;
}
}
});
foundation.app.render.DomRenderer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__14390__auto__,k__14391__auto__,G__28548){var self__ = this;
var this__14390__auto____$1 = this;var pred__28551 = cljs.core.keyword_identical_QMARK_;var expr__28552 = k__14391__auto__;if(cljs.core.truth_(pred__28551.call(null,new cljs.core.Keyword(null,"env","env",1014004831),expr__28552)))
{return (new foundation.app.render.DomRenderer(G__28548,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.render.DomRenderer(self__.env,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__14391__auto__,G__28548),null));
}
});
foundation.app.render.DomRenderer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__14397__auto__,writer__14398__auto__,opts__14399__auto__){var self__ = this;
var this__14397__auto____$1 = this;var pr_pair__14400__auto__ = (function (keyval__14401__auto__){return cljs.core.pr_sequential_writer.call(null,writer__14398__auto__,cljs.core.pr_writer,""," ","",opts__14399__auto__,keyval__14401__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__14398__auto__,pr_pair__14400__auto__,"#foundation.app.render.DomRenderer{",", ","}",opts__14399__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"env","env",1014004831),self__.env],null))], null),self__.__extmap));
});
foundation.app.render.DomRenderer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__14388__auto__,entry__14389__auto__){var self__ = this;
var this__14388__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__14389__auto__))
{return cljs.core._assoc.call(null,this__14388__auto____$1,cljs.core._nth.call(null,entry__14389__auto__,0),cljs.core._nth.call(null,entry__14389__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__14388__auto____$1,entry__14389__auto__);
}
});
foundation.app.render.DomRenderer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__14395__auto__){var self__ = this;
var this__14395__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"env","env",1014004831),self__.env],null))], null),self__.__extmap));
});
foundation.app.render.DomRenderer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__14387__auto__){var self__ = this;
var this__14387__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
foundation.app.render.DomRenderer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__14379__auto__,other__14380__auto__){var self__ = this;
var this__14379__auto____$1 = this;if(cljs.core.truth_((function (){var and__13809__auto__ = other__14380__auto__;if(cljs.core.truth_(and__13809__auto__))
{return ((this__14379__auto____$1.constructor === other__14380__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__14379__auto____$1,other__14380__auto__));
} else
{return and__13809__auto__;
}
})()))
{return true;
} else
{return false;
}
});
foundation.app.render.DomRenderer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__14382__auto__,G__28548){var self__ = this;
var this__14382__auto____$1 = this;return (new foundation.app.render.DomRenderer(self__.env,G__28548,self__.__extmap,self__.__hash));
});
foundation.app.render.DomRenderer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__14381__auto__){var self__ = this;
var this__14381__auto____$1 = this;return self__.__meta;
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
foundation.app.render.DomRenderer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__14392__auto__,k__14393__auto__){var self__ = this;
var this__14392__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"env","env",1014004831),null], null), null),k__14393__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__14392__auto____$1),self__.__meta),k__14393__auto__);
} else
{return (new foundation.app.render.DomRenderer(self__.env,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__14393__auto__)),null));
}
});
foundation.app.render.DomRenderer.cljs$lang$type = true;
foundation.app.render.DomRenderer.cljs$lang$ctorPrSeq = (function (this__14417__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"foundation.app.render/DomRenderer");
});
foundation.app.render.DomRenderer.cljs$lang$ctorPrWriter = (function (this__14417__auto__,writer__14418__auto__){return cljs.core._write.call(null,writer__14418__auto__,"foundation.app.render/DomRenderer");
});
foundation.app.render.__GT_DomRenderer = (function __GT_DomRenderer(env){return (new foundation.app.render.DomRenderer(env));
});
foundation.app.render.map__GT_DomRenderer = (function map__GT_DomRenderer(G__28550){return (new foundation.app.render.DomRenderer(new cljs.core.Keyword(null,"env","env",1014004831).cljs$core$IFn$_invoke$arity$1(G__28550),null,cljs.core.dissoc.call(null,G__28550,new cljs.core.Keyword(null,"env","env",1014004831))));
});
foundation.app.render.push_render_queue = (function push_render_queue(root_id,input_queue){var renderer = foundation.app.render.__GT_DomRenderer.call(null,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),root_id], null)));var render_queue = cljs.core.async.chan.call(null);var c__16829__auto___28600 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16830__auto__ = (function (){var switch__16759__auto__ = (function (state_28588){var state_val_28589 = (state_28588[1]);if((state_val_28589 === 4))
{var inst_28580 = (state_28588[2]);var inst_28581 = cljs.core.nth.call(null,inst_28580,0,null);var inst_28582 = cljs.core.nth.call(null,inst_28580,1,null);var inst_28583 = foundation.app.render.node_create.call(null,renderer,inst_28580,input_queue);var state_28588__$1 = (function (){var statearr_28590 = state_28588;(statearr_28590[7] = inst_28581);
(statearr_28590[8] = inst_28583);
(statearr_28590[9] = inst_28582);
return statearr_28590;
})();var statearr_28591_28601 = state_28588__$1;(statearr_28591_28601[2] = null);
(statearr_28591_28601[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28589 === 3))
{var inst_28586 = (state_28588[2]);var state_28588__$1 = state_28588;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28588__$1,inst_28586);
} else
{if((state_val_28589 === 2))
{var state_28588__$1 = state_28588;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28588__$1,4,render_queue);
} else
{if((state_val_28589 === 1))
{var state_28588__$1 = state_28588;var statearr_28592_28602 = state_28588__$1;(statearr_28592_28602[2] = null);
(statearr_28592_28602[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__16759__auto__){
return (function() {
var state_machine__16760__auto__ = null;
var state_machine__16760__auto____0 = (function (){var statearr_28596 = (new Array(10));(statearr_28596[0] = state_machine__16760__auto__);
(statearr_28596[1] = 1);
return statearr_28596;
});
var state_machine__16760__auto____1 = (function (state_28588){while(true){
var ret_value__16761__auto__ = (function (){try{while(true){
var result__16762__auto__ = switch__16759__auto__.call(null,state_28588);if(cljs.core.keyword_identical_QMARK_.call(null,result__16762__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16762__auto__;
}
break;
}
}catch (e28597){if((e28597 instanceof Object))
{var ex__16763__auto__ = e28597;var statearr_28598_28603 = state_28588;(statearr_28598_28603[5] = ex__16763__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28588);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28597;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16761__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28604 = state_28588;
state_28588 = G__28604;
continue;
}
} else
{return ret_value__16761__auto__;
}
break;
}
});
state_machine__16760__auto__ = function(state_28588){
switch(arguments.length){
case 0:
return state_machine__16760__auto____0.call(this);
case 1:
return state_machine__16760__auto____1.call(this,state_28588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16760__auto____0;
state_machine__16760__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16760__auto____1;
return state_machine__16760__auto__;
})()
;})(switch__16759__auto__))
})();var state__16831__auto__ = (function (){var statearr_28599 = f__16830__auto__.call(null);(statearr_28599[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16829__auto___28600);
return statearr_28599;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16831__auto__);
}));
return render_queue;
});
foundation.app.render.bind_event = (function bind_event(e,id,f){return enfocus.core.at.call(null,document,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.app.render.fix_id.call(null,id)], null),enfocus.events.listen.call(null,e,f));
});
foundation.app.render.attach_transform = (function attach_transform(renderer,event,id,type,path,input_queue){return enfocus.core.at.call(null,document,(function (){var partial_message = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,type,foundation.app.message.path,path], true, false);var event_handler = ((function (partial_message){
return (function (e){var seq__28609 = cljs.core.seq.call(null,foundation.app.render.transform_enable.call(null,renderer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,path], null),id,partial_message));var chunk__28610 = null;var count__28611 = 0;var i__28612 = 0;while(true){
if((i__28612 < count__28611))
{var message = cljs.core._nth.call(null,chunk__28610,i__28612);cljs.core.async.put_BANG_.call(null,input_queue,message);
{
var G__28613 = seq__28609;
var G__28614 = chunk__28610;
var G__28615 = count__28611;
var G__28616 = (i__28612 + 1);
seq__28609 = G__28613;
chunk__28610 = G__28614;
count__28611 = G__28615;
i__28612 = G__28616;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__28609);if(temp__4092__auto__)
{var seq__28609__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28609__$1))
{var c__14545__auto__ = cljs.core.chunk_first.call(null,seq__28609__$1);{
var G__28617 = cljs.core.chunk_rest.call(null,seq__28609__$1);
var G__28618 = c__14545__auto__;
var G__28619 = cljs.core.count.call(null,c__14545__auto__);
var G__28620 = 0;
seq__28609 = G__28617;
chunk__28610 = G__28618;
count__28611 = G__28619;
i__28612 = G__28620;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__28609__$1);cljs.core.async.put_BANG_.call(null,input_queue,message);
{
var G__28621 = cljs.core.next.call(null,seq__28609__$1);
var G__28622 = null;
var G__28623 = 0;
var G__28624 = 0;
seq__28609 = G__28621;
chunk__28610 = G__28622;
count__28611 = G__28623;
i__28612 = G__28624;
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