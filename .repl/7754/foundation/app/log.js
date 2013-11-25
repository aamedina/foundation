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
foundation.app.log.log_map = (function log_map(m){var d = cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"timestamp","timestamp",1069030536),(new Date()).getTime());var pred__41393 = cljs.core._EQ_;var expr__41394 = cljs.core.get_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"log","log",1014011574),new cljs.core.Keyword(null,"level","level",1116770038)], null));if(cljs.core.truth_(pred__41393.call(null,new cljs.core.Keyword(null,"debug","debug",1109363141),expr__41394)))
{return console.debug(cljs.core.pr_str.call(null,d));
} else
{if(cljs.core.truth_(pred__41393.call(null,new cljs.core.Keyword(null,"error","error",1110689146),expr__41394)))
{return console.error(cljs.core.pr_str.call(null,d));
} else
{if(cljs.core.truth_(pred__41393.call(null,new cljs.core.Keyword(null,"warn","warn",1017546232),expr__41394)))
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
log_BANG_.cljs$lang$applyTo = (function (arglist__41396){
var args = cljs.core.seq(arglist__41396);
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
var log__delegate = function (args){var vec__41398 = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"render","render",4374279432),null,new cljs.core.Keyword(null,"error","error",1110689146),null,new cljs.core.Keyword(null,"warn","warn",1017546232),null,new cljs.core.Keyword(null,"debug","debug",1109363141),null], null), null),cljs.core.first.call(null,args)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args),cljs.core.rest.call(null,args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"**","**",1013905586),args], null));var level = cljs.core.nth.call(null,vec__41398,0,null);var args__$1 = cljs.core.nth.call(null,vec__41398,1,null);var message = new cljs.core.PersistentArrayMap.fromArray([foundation.app.messages.type,new cljs.core.Keyword(null,"log","log",1014011574),foundation.app.messages.topic,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [level], null),new cljs.core.Keyword(null,"message","message",1968829305),cljs.core.vec.call(null,args__$1)], true, false);if(foundation.app.log.worker_QMARK_.call(null))
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
log.cljs$lang$applyTo = (function (arglist__41399){
var args = cljs.core.seq(arglist__41399);
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
error.cljs$lang$applyTo = (function (arglist__41400){
var keyvals = cljs.core.seq(arglist__41400);
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
debug.cljs$lang$applyTo = (function (arglist__41401){
var keyvals = cljs.core.seq(arglist__41401);
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
info.cljs$lang$applyTo = (function (arglist__41402){
var keyvals = cljs.core.seq(arglist__41402);
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
warn.cljs$lang$applyTo = (function (arglist__41403){
var keyvals = cljs.core.seq(arglist__41403);
return warn__delegate(keyvals);
});
warn.cljs$core$IFn$_invoke$arity$variadic = warn__delegate;
return warn;
})()
;
foundation.app.log.log_group = (function log_group(group_name,coll){console.group(group_name);
var seq__41408_41412 = cljs.core.seq.call(null,coll);var chunk__41409_41413 = null;var count__41410_41414 = 0;var i__41411_41415 = 0;while(true){
if((i__41411_41415 < count__41410_41414))
{var d_41416 = cljs.core._nth.call(null,chunk__41409_41413,i__41411_41415);console.log(cljs.core.pr_str.call(null,d_41416));
{
var G__41417 = seq__41408_41412;
var G__41418 = chunk__41409_41413;
var G__41419 = count__41410_41414;
var G__41420 = (i__41411_41415 + 1);
seq__41408_41412 = G__41417;
chunk__41409_41413 = G__41418;
count__41410_41414 = G__41419;
i__41411_41415 = G__41420;
continue;
}
} else
{var temp__4098__auto___41421 = cljs.core.seq.call(null,seq__41408_41412);if(temp__4098__auto___41421)
{var seq__41408_41422__$1 = temp__4098__auto___41421;if(cljs.core.chunked_seq_QMARK_.call(null,seq__41408_41422__$1))
{var c__7028__auto___41423 = cljs.core.chunk_first.call(null,seq__41408_41422__$1);{
var G__41424 = cljs.core.chunk_rest.call(null,seq__41408_41422__$1);
var G__41425 = c__7028__auto___41423;
var G__41426 = cljs.core.count.call(null,c__7028__auto___41423);
var G__41427 = 0;
seq__41408_41412 = G__41424;
chunk__41409_41413 = G__41425;
count__41410_41414 = G__41426;
i__41411_41415 = G__41427;
continue;
}
} else
{var d_41428 = cljs.core.first.call(null,seq__41408_41422__$1);console.log(cljs.core.pr_str.call(null,d_41428));
{
var G__41429 = cljs.core.next.call(null,seq__41408_41422__$1);
var G__41430 = null;
var G__41431 = 0;
var G__41432 = 0;
seq__41408_41412 = G__41429;
chunk__41409_41413 = G__41430;
count__41410_41414 = G__41431;
i__41411_41415 = G__41432;
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
}catch (e41434){if((e41434 instanceof Error))
{var e = e41434;console.groupCollapsed("Caught exception",e);
console.log("Was applying function\n",f);
console.log("With arguments",cljs.core.pr_str.call(null,args));
console.log("Re-throwing error...");
console.groupEnd();
throw e;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e41434;
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
log_exceptions.cljs$lang$applyTo = (function (arglist__41435){
var f = cljs.core.first(arglist__41435);
var args = cljs.core.rest(arglist__41435);
return log_exceptions__delegate(f,args);
});
log_exceptions.cljs$core$IFn$_invoke$arity$variadic = log_exceptions__delegate;
return log_exceptions;
})()
;
