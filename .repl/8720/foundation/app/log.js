// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.app.log');
goog.require('cljs.core');
goog.require('foundation.app.messages');
goog.require('foundation.app.messages');
goog.require('foundation.app.observers');
goog.require('foundation.app.observers');
foundation.app.log.worker_QMARK_ = (function worker_QMARK_(){return (this.document == null);
});
goog.exportSymbol('foundation.app.log.worker_QMARK_', foundation.app.log.worker_QMARK_);
foundation.app.log.log_map = (function log_map(m){var d = cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"timestamp","timestamp",1069030536),(new Date()).getTime());var pred__22794 = cljs.core._EQ_;var expr__22795 = cljs.core.get_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"log","log",1014011574),new cljs.core.Keyword(null,"level","level",1116770038)], null));if(cljs.core.truth_(pred__22794.call(null,new cljs.core.Keyword(null,"debug","debug",1109363141),expr__22795)))
{return console.debug(cljs.core.pr_str.call(null,d));
} else
{if(cljs.core.truth_(pred__22794.call(null,new cljs.core.Keyword(null,"error","error",1110689146),expr__22795)))
{return console.error(cljs.core.pr_str.call(null,d));
} else
{if(cljs.core.truth_(pred__22794.call(null,new cljs.core.Keyword(null,"warn","warn",1017546232),expr__22795)))
{return console.warn(cljs.core.pr_str.call(null,d));
} else
{return console.log(cljs.core.pr_str.call(null,d));
}
}
}
});
/**
* @param {...*} var_args
*/
foundation.app.log.log_BANG_ = (function() { 
var log_BANG___delegate = function (args){return foundation.app.log.log_map.call(null,cljs.core.apply.call(null,cljs.core.hash_map,args));
};
var log_BANG_ = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_BANG___delegate.call(this,args);};
log_BANG_.cljs$lang$maxFixedArity = 0;
log_BANG_.cljs$lang$applyTo = (function (arglist__22797){
var args = cljs.core.seq(arglist__22797);
return log_BANG___delegate(args);
});
log_BANG_.cljs$core$IFn$_invoke$arity$variadic = log_BANG___delegate;
return log_BANG_;
})()
;
/**
* Logs a message at level (a keyword). The message will be a map
* constructed from the key-value pairs supplied.
* @param {...*} var_args
*/
foundation.app.log.log = (function() { 
var log__delegate = function (args){var vec__22799 = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"render","render",4374279432),null,new cljs.core.Keyword(null,"error","error",1110689146),null,new cljs.core.Keyword(null,"warn","warn",1017546232),null,new cljs.core.Keyword(null,"debug","debug",1109363141),null], null), null),cljs.core.first.call(null,args)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args),cljs.core.rest.call(null,args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"**","**",1013905586),args], null));var level = cljs.core.nth.call(null,vec__22799,0,null);var args__$1 = cljs.core.nth.call(null,vec__22799,1,null);var message = new cljs.core.PersistentArrayMap.fromArray([foundation.app.messages.type,new cljs.core.Keyword(null,"log","log",1014011574),foundation.app.messages.topic,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [level], null),new cljs.core.Keyword(null,"message","message",1968829305),cljs.core.vec.call(null,args__$1)], true, false);if(foundation.app.log.worker_QMARK_.call(null))
{postMessage(cljs.core.pr_str.call(null,message));
} else
{foundation.app.log.log_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"log","log",1014011574),cljs.core.assoc.call(null,cljs.core.apply.call(null,cljs.core.hash_map,args__$1),new cljs.core.Keyword(null,"level","level",1116770038),level)], null));
}
return foundation.app.observers.publish.call(null,new cljs.core.Keyword(null,"log","log",1014011574),cljs.core.assoc.call(null,cljs.core.apply.call(null,cljs.core.hash_map,args__$1),new cljs.core.Keyword(null,"level","level",1116770038),level));
};
var log = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,args);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__22800){
var args = cljs.core.seq(arglist__22800);
return log__delegate(args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Logs a trace message. Argument is a quoted list representing the
* function being called, with arguments.
*/
foundation.app.log.trace = (function trace(call_expr){return foundation.app.log.log.call(null,new cljs.core.Keyword(null,"trace","trace",1124525239),new cljs.core.Keyword(null,"call","call",1016950224),call_expr);
});
/**
* Logs an error message.
* @param {...*} var_args
*/
foundation.app.log.error = (function() { 
var error__delegate = function (keyvals){return cljs.core.apply.call(null,foundation.app.log.log,new cljs.core.Keyword(null,"error","error",1110689146),keyvals);
};
var error = function (var_args){
var keyvals = null;if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return error__delegate.call(this,keyvals);};
error.cljs$lang$maxFixedArity = 0;
error.cljs$lang$applyTo = (function (arglist__22801){
var keyvals = cljs.core.seq(arglist__22801);
return error__delegate(keyvals);
});
error.cljs$core$IFn$_invoke$arity$variadic = error__delegate;
return error;
})()
;
/**
* Logs a :debug level message. Use this level for debugging output
* which is less verbose than :trace.
* @param {...*} var_args
*/
foundation.app.log.debug = (function() { 
var debug__delegate = function (keyvals){return cljs.core.apply.call(null,foundation.app.log.log,new cljs.core.Keyword(null,"debug","debug",1109363141),keyvals);
};
var debug = function (var_args){
var keyvals = null;if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return debug__delegate.call(this,keyvals);};
debug.cljs$lang$maxFixedArity = 0;
debug.cljs$lang$applyTo = (function (arglist__22802){
var keyvals = cljs.core.seq(arglist__22802);
return debug__delegate(keyvals);
});
debug.cljs$core$IFn$_invoke$arity$variadic = debug__delegate;
return debug;
})()
;
/**
* Logs an :info level message. Use this level for information we may
* want to record in tests of the production system.
* @param {...*} var_args
*/
foundation.app.log.info = (function() { 
var info__delegate = function (keyvals){return cljs.core.apply.call(null,foundation.app.log.log,new cljs.core.Keyword(null,"info","info",1017141280),keyvals);
};
var info = function (var_args){
var keyvals = null;if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return info__delegate.call(this,keyvals);};
info.cljs$lang$maxFixedArity = 0;
info.cljs$lang$applyTo = (function (arglist__22803){
var keyvals = cljs.core.seq(arglist__22803);
return info__delegate(keyvals);
});
info.cljs$core$IFn$_invoke$arity$variadic = info__delegate;
return info;
})()
;
/**
* Logs a :warn level message.
* @param {...*} var_args
*/
foundation.app.log.warn = (function() { 
var warn__delegate = function (keyvals){return cljs.core.apply.call(null,foundation.app.log.log,new cljs.core.Keyword(null,"warn","warn",1017546232),keyvals);
};
var warn = function (var_args){
var keyvals = null;if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return warn__delegate.call(this,keyvals);};
warn.cljs$lang$maxFixedArity = 0;
warn.cljs$lang$applyTo = (function (arglist__22804){
var keyvals = cljs.core.seq(arglist__22804);
return warn__delegate(keyvals);
});
warn.cljs$core$IFn$_invoke$arity$variadic = warn__delegate;
return warn;
})()
;
foundation.app.log.log_group = (function log_group(group_name,coll){console.group(group_name);
var seq__22809_22813 = cljs.core.seq.call(null,coll);var chunk__22810_22814 = null;var count__22811_22815 = 0;var i__22812_22816 = 0;while(true){
if((i__22812_22816 < count__22811_22815))
{var d_22817 = cljs.core._nth.call(null,chunk__22810_22814,i__22812_22816);console.log(cljs.core.pr_str.call(null,d_22817));
{
var G__22818 = seq__22809_22813;
var G__22819 = chunk__22810_22814;
var G__22820 = count__22811_22815;
var G__22821 = (i__22812_22816 + 1);
seq__22809_22813 = G__22818;
chunk__22810_22814 = G__22819;
count__22811_22815 = G__22820;
i__22812_22816 = G__22821;
continue;
}
} else
{var temp__4098__auto___22822 = cljs.core.seq.call(null,seq__22809_22813);if(temp__4098__auto___22822)
{var seq__22809_22823__$1 = temp__4098__auto___22822;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22809_22823__$1))
{var c__7028__auto___22824 = cljs.core.chunk_first.call(null,seq__22809_22823__$1);{
var G__22825 = cljs.core.chunk_rest.call(null,seq__22809_22823__$1);
var G__22826 = c__7028__auto___22824;
var G__22827 = cljs.core.count.call(null,c__7028__auto___22824);
var G__22828 = 0;
seq__22809_22813 = G__22825;
chunk__22810_22814 = G__22826;
count__22811_22815 = G__22827;
i__22812_22816 = G__22828;
continue;
}
} else
{var d_22829 = cljs.core.first.call(null,seq__22809_22823__$1);console.log(cljs.core.pr_str.call(null,d_22829));
{
var G__22830 = cljs.core.next.call(null,seq__22809_22823__$1);
var G__22831 = null;
var G__22832 = 0;
var G__22833 = 0;
seq__22809_22813 = G__22830;
chunk__22810_22814 = G__22831;
count__22811_22815 = G__22832;
i__22812_22816 = G__22833;
continue;
}
}
} else
{}
}
break;
}
return console.groupEnd();
});
/**
* @param {...*} var_args
*/
foundation.app.log.log_exceptions = (function() { 
var log_exceptions__delegate = function (f,args){try{return cljs.core.apply.call(null,f,args);
}catch (e22835){if((e22835 instanceof Error))
{var e = e22835;console.groupCollapsed("Caught exception",e);
console.log("Was applying function\n",f);
console.log("With arguments",cljs.core.pr_str.call(null,args));
console.log("Re-throwing error...");
console.groupEnd();
throw e;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22835;
} else
{return null;
}
}
}};
var log_exceptions = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_exceptions__delegate.call(this,f,args);};
log_exceptions.cljs$lang$maxFixedArity = 1;
log_exceptions.cljs$lang$applyTo = (function (arglist__22836){
var f = cljs.core.first(arglist__22836);
var args = cljs.core.rest(arglist__22836);
return log_exceptions__delegate(f,args);
});
log_exceptions.cljs$core$IFn$_invoke$arity$variadic = log_exceptions__delegate;
return log_exceptions;
})()
;
