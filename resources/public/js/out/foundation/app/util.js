// Compiled by ClojureScript 0.0-2120
goog.provide('foundation.app.util');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.reader');
foundation.app.util._STAR_debug_STAR_ = false;
foundation.app.util.safe_read_string = (function safe_read_string(s){return cljs.reader.read_string.call(null,s);
});
foundation.app.util.parse_int = (function parse_int(s){if((typeof s === 'number') || (typeof s === 'string'))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("the value passed to parse-int must be a number or a string"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",-1640527972,null),cljs.core.list(new cljs.core.Symbol(null,"number?","number?",653920207,null),new cljs.core.Symbol(null,"s","s",-1640531412,null)),cljs.core.list(new cljs.core.Symbol(null,"string?","string?",772676615,null),new cljs.core.Symbol(null,"s","s",-1640531412,null)))))].join('')));
}
return parseInt(s,10);
});
foundation.app.util.read_form_if_string = (function read_form_if_string(x){if(typeof x === 'string')
{try{return foundation.app.util.safe_read_string.call(null,x);
}catch (e21275){if((e21275 instanceof Error))
{var _ = e21275;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21275;
} else
{return null;
}
}
}} else
{return x;
}
});
foundation.app.util.log_group = (function log_group(group_name,coll){console.group(group_name);
var seq__21280_21284 = cljs.core.seq.call(null,coll);var chunk__21281_21285 = null;var count__21282_21286 = 0;var i__21283_21287 = 0;while(true){
if((i__21283_21287 < count__21282_21286))
{var d_21288 = cljs.core._nth.call(null,chunk__21281_21285,i__21283_21287);console.log(cljs.core.pr_str.call(null,cljs.core.vec.call(null,cljs.core.take.call(null,2,d_21288))));
{
var G__21289 = seq__21280_21284;
var G__21290 = chunk__21281_21285;
var G__21291 = count__21282_21286;
var G__21292 = (i__21283_21287 + 1);
seq__21280_21284 = G__21289;
chunk__21281_21285 = G__21290;
count__21282_21286 = G__21291;
i__21283_21287 = G__21292;
continue;
}
} else
{var temp__4092__auto___21293 = cljs.core.seq.call(null,seq__21280_21284);if(temp__4092__auto___21293)
{var seq__21280_21294__$1 = temp__4092__auto___21293;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21280_21294__$1))
{var c__8952__auto___21295 = cljs.core.chunk_first.call(null,seq__21280_21294__$1);{
var G__21296 = cljs.core.chunk_rest.call(null,seq__21280_21294__$1);
var G__21297 = c__8952__auto___21295;
var G__21298 = cljs.core.count.call(null,c__8952__auto___21295);
var G__21299 = 0;
seq__21280_21284 = G__21296;
chunk__21281_21285 = G__21297;
count__21282_21286 = G__21298;
i__21283_21287 = G__21299;
continue;
}
} else
{var d_21300 = cljs.core.first.call(null,seq__21280_21294__$1);console.log(cljs.core.pr_str.call(null,cljs.core.vec.call(null,cljs.core.take.call(null,2,d_21300))));
{
var G__21301 = cljs.core.next.call(null,seq__21280_21294__$1);
var G__21302 = null;
var G__21303 = 0;
var G__21304 = 0;
seq__21280_21284 = G__21301;
chunk__21281_21285 = G__21302;
count__21282_21286 = G__21303;
i__21283_21287 = G__21304;
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
foundation.app.util.log_exceptions = (function() { 
var log_exceptions__delegate = function (f,args){try{return cljs.core.apply.call(null,f,args);
}catch (e21306){if((e21306 instanceof Error))
{var e = e21306;console.groupCollapsed("Caught exception",e);
console.log("Was applying function\n",f);
console.log("With arguments",cljs.core.pr_str.call(null,args));
console.log("Re-throwing error...");
console.groupEnd();
throw e;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21306;
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
log_exceptions.cljs$lang$applyTo = (function (arglist__21307){
var f = cljs.core.first(arglist__21307);
var args = cljs.core.rest(arglist__21307);
return log_exceptions__delegate(f,args);
});
log_exceptions.cljs$core$IFn$_invoke$arity$variadic = log_exceptions__delegate;
return log_exceptions;
})()
;

//# sourceMappingURL=util.js.map