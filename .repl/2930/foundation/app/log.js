// Compiled by ClojureScript 0.0-2030
goog.provide('foundation.app.log');
goog.require('cljs.core');
goog.require('foundation.app.observers');
goog.require('foundation.app.observers');
foundation.app.log.log_map = (function log_map(m){var d = cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"timestamp","timestamp",1069030536),(new Date()).getTime());var pred__48083 = cljs.core._EQ_;var expr__48084 = cljs.core.get_in.call(null,m,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"log","log",1014011574),new cljs.core.Keyword(null,"level","level",1116770038)], true));if(pred__48083.call(null,new cljs.core.Keyword(null,"debug","debug",1109363141),expr__48084))
{return console.debug(cljs.core.pr_str.call(null,d));
} else
{if(pred__48083.call(null,new cljs.core.Keyword(null,"error","error",1110689146),expr__48084))
{return console.error(cljs.core.pr_str.call(null,d));
} else
{if(pred__48083.call(null,new cljs.core.Keyword(null,"warn","warn",1017546232),expr__48084))
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
log_BANG_.cljs$lang$applyTo = (function (arglist__48086){
var args = cljs.core.seq(arglist__48086);
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
var log__delegate = function (level,keyvals){foundation.app.log.log_BANG_.call(null,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"log","log",1014011574),cljs.core.assoc.call(null,cljs.core.apply.call(null,cljs.core.hash_map,keyvals),new cljs.core.Keyword(null,"level","level",1116770038),level)], true));
return foundation.app.observers.publish.call(null,new cljs.core.Keyword(null,"log","log",1014011574),cljs.core.assoc.call(null,cljs.core.apply.call(null,cljs.core.hash_map,keyvals),new cljs.core.Keyword(null,"level","level",1116770038),level));
};
var log = function (level,var_args){
var keyvals = null;if (arguments.length > 1) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,level,keyvals);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__48087){
var level = cljs.core.first(arglist__48087);
var keyvals = cljs.core.rest(arglist__48087);
return log__delegate(level,keyvals);
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
error.cljs$lang$applyTo = (function (arglist__48088){
var keyvals = cljs.core.seq(arglist__48088);
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
debug.cljs$lang$applyTo = (function (arglist__48089){
var keyvals = cljs.core.seq(arglist__48089);
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
info.cljs$lang$applyTo = (function (arglist__48090){
var keyvals = cljs.core.seq(arglist__48090);
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
warn.cljs$lang$applyTo = (function (arglist__48091){
var keyvals = cljs.core.seq(arglist__48091);
return warn__delegate(keyvals);
});
warn.cljs$core$IFn$_invoke$arity$variadic = warn__delegate;
return warn;
})()
;
foundation.app.log.log_group = (function log_group(group_name,coll){console.group(group_name);
var seq__48096_48100 = cljs.core.seq.call(null,coll);var chunk__48097_48101 = null;var count__48098_48102 = 0;var i__48099_48103 = 0;while(true){
if((i__48099_48103 < count__48098_48102))
{var d_48104 = cljs.core._nth.call(null,chunk__48097_48101,i__48099_48103);console.log(cljs.core.pr_str.call(null,d_48104));
{
var G__48105 = seq__48096_48100;
var G__48106 = chunk__48097_48101;
var G__48107 = count__48098_48102;
var G__48108 = (i__48099_48103 + 1);
seq__48096_48100 = G__48105;
chunk__48097_48101 = G__48106;
count__48098_48102 = G__48107;
i__48099_48103 = G__48108;
continue;
}
} else
{var temp__4092__auto___48109 = cljs.core.seq.call(null,seq__48096_48100);if(temp__4092__auto___48109)
{var seq__48096_48110__$1 = temp__4092__auto___48109;if(cljs.core.chunked_seq_QMARK_.call(null,seq__48096_48110__$1))
{var c__8156__auto___48111 = cljs.core.chunk_first.call(null,seq__48096_48110__$1);{
var G__48112 = cljs.core.chunk_rest.call(null,seq__48096_48110__$1);
var G__48113 = c__8156__auto___48111;
var G__48114 = cljs.core.count.call(null,c__8156__auto___48111);
var G__48115 = 0;
seq__48096_48100 = G__48112;
chunk__48097_48101 = G__48113;
count__48098_48102 = G__48114;
i__48099_48103 = G__48115;
continue;
}
} else
{var d_48116 = cljs.core.first.call(null,seq__48096_48110__$1);console.log(cljs.core.pr_str.call(null,d_48116));
{
var G__48117 = cljs.core.next.call(null,seq__48096_48110__$1);
var G__48118 = null;
var G__48119 = 0;
var G__48120 = 0;
seq__48096_48100 = G__48117;
chunk__48097_48101 = G__48118;
count__48098_48102 = G__48119;
i__48099_48103 = G__48120;
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
}catch (e48122){if((e48122 instanceof Error))
{var e = e48122;console.groupCollapsed("Caught exception",e);
console.log("Was applying function\n",f);
console.log("With arguments",cljs.core.pr_str.call(null,args));
console.log("Re-throwing error...");
console.groupEnd();
throw e;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e48122;
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
log_exceptions.cljs$lang$applyTo = (function (arglist__48123){
var f = cljs.core.first(arglist__48123);
var args = cljs.core.rest(arglist__48123);
return log_exceptions__delegate(f,args);
});
log_exceptions.cljs$core$IFn$_invoke$arity$variadic = log_exceptions__delegate;
return log_exceptions;
})()
;
