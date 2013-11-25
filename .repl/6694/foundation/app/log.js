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
foundation.app.log.log_map = (function log_map(m){var d = cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"timestamp","timestamp",1069030536),(new Date()).getTime());var pred__50553 = cljs.core._EQ_;var expr__50554 = cljs.core.get_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"log","log",1014011574),new cljs.core.Keyword(null,"level","level",1116770038)], null));if(cljs.core.truth_(pred__50553.call(null,new cljs.core.Keyword(null,"debug","debug",1109363141),expr__50554)))
{return console.debug(cljs.core.pr_str.call(null,d));
} else
{if(cljs.core.truth_(pred__50553.call(null,new cljs.core.Keyword(null,"error","error",1110689146),expr__50554)))
{return console.error(cljs.core.pr_str.call(null,d));
} else
{if(cljs.core.truth_(pred__50553.call(null,new cljs.core.Keyword(null,"warn","warn",1017546232),expr__50554)))
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
log_BANG_.cljs$lang$applyTo = (function (arglist__50556){
var args = cljs.core.seq(arglist__50556);
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
var log__delegate = function (args){var vec__50558 = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"render","render",4374279432),null,new cljs.core.Keyword(null,"error","error",1110689146),null,new cljs.core.Keyword(null,"warn","warn",1017546232),null,new cljs.core.Keyword(null,"debug","debug",1109363141),null], null), null),cljs.core.first.call(null,args)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args),cljs.core.rest.call(null,args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"**","**",1013905586),args], null));var level = cljs.core.nth.call(null,vec__50558,0,null);var args__$1 = cljs.core.nth.call(null,vec__50558,1,null);var message = new cljs.core.PersistentArrayMap.fromArray([foundation.app.messages.type,new cljs.core.Keyword(null,"log","log",1014011574),foundation.app.messages.topic,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [level], null),new cljs.core.Keyword(null,"message","message",1968829305),cljs.core.vec.call(null,args__$1)], true, false);if(foundation.app.log.worker_QMARK_.call(null))
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
log.cljs$lang$applyTo = (function (arglist__50559){
var args = cljs.core.seq(arglist__50559);
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
error.cljs$lang$applyTo = (function (arglist__50560){
var keyvals = cljs.core.seq(arglist__50560);
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
debug.cljs$lang$applyTo = (function (arglist__50561){
var keyvals = cljs.core.seq(arglist__50561);
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
info.cljs$lang$applyTo = (function (arglist__50562){
var keyvals = cljs.core.seq(arglist__50562);
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
warn.cljs$lang$applyTo = (function (arglist__50563){
var keyvals = cljs.core.seq(arglist__50563);
return warn__delegate(keyvals);
});
warn.cljs$core$IFn$_invoke$arity$variadic = warn__delegate;
return warn;
})()
;
foundation.app.log.log_group = (function log_group(group_name,coll){console.group(group_name);
var seq__50568_50572 = cljs.core.seq.call(null,coll);var chunk__50569_50573 = null;var count__50570_50574 = 0;var i__50571_50575 = 0;while(true){
if((i__50571_50575 < count__50570_50574))
{var d_50576 = cljs.core._nth.call(null,chunk__50569_50573,i__50571_50575);console.log(cljs.core.pr_str.call(null,d_50576));
{
var G__50577 = seq__50568_50572;
var G__50578 = chunk__50569_50573;
var G__50579 = count__50570_50574;
var G__50580 = (i__50571_50575 + 1);
seq__50568_50572 = G__50577;
chunk__50569_50573 = G__50578;
count__50570_50574 = G__50579;
i__50571_50575 = G__50580;
continue;
}
} else
{var temp__4098__auto___50581 = cljs.core.seq.call(null,seq__50568_50572);if(temp__4098__auto___50581)
{var seq__50568_50582__$1 = temp__4098__auto___50581;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50568_50582__$1))
{var c__7028__auto___50583 = cljs.core.chunk_first.call(null,seq__50568_50582__$1);{
var G__50584 = cljs.core.chunk_rest.call(null,seq__50568_50582__$1);
var G__50585 = c__7028__auto___50583;
var G__50586 = cljs.core.count.call(null,c__7028__auto___50583);
var G__50587 = 0;
seq__50568_50572 = G__50584;
chunk__50569_50573 = G__50585;
count__50570_50574 = G__50586;
i__50571_50575 = G__50587;
continue;
}
} else
{var d_50588 = cljs.core.first.call(null,seq__50568_50582__$1);console.log(cljs.core.pr_str.call(null,d_50588));
{
var G__50589 = cljs.core.next.call(null,seq__50568_50582__$1);
var G__50590 = null;
var G__50591 = 0;
var G__50592 = 0;
seq__50568_50572 = G__50589;
chunk__50569_50573 = G__50590;
count__50570_50574 = G__50591;
i__50571_50575 = G__50592;
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
}catch (e50594){if((e50594 instanceof Error))
{var e = e50594;console.groupCollapsed("Caught exception",e);
console.log("Was applying function\n",f);
console.log("With arguments",cljs.core.pr_str.call(null,args));
console.log("Re-throwing error...");
console.groupEnd();
throw e;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e50594;
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
log_exceptions.cljs$lang$applyTo = (function (arglist__50595){
var f = cljs.core.first(arglist__50595);
var args = cljs.core.rest(arglist__50595);
return log_exceptions__delegate(f,args);
});
log_exceptions.cljs$core$IFn$_invoke$arity$variadic = log_exceptions__delegate;
return log_exceptions;
})()
;
