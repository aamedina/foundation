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
}catch (e80234){if((e80234 instanceof Error))
{var _ = e80234;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e80234;
} else
{return null;
}
}
}} else
{return x;
}
});
foundation.app.util.log_group = (function log_group(group_name,coll){console.group(group_name);
var seq__80239_80243 = cljs.core.seq.call(null,coll);var chunk__80240_80244 = null;var count__80241_80245 = 0;var i__80242_80246 = 0;while(true){
if((i__80242_80246 < count__80241_80245))
{var d_80247 = cljs.core._nth.call(null,chunk__80240_80244,i__80242_80246);console.log(cljs.core.pr_str.call(null,cljs.core.vec.call(null,cljs.core.take.call(null,2,d_80247))));
{
var G__80248 = seq__80239_80243;
var G__80249 = chunk__80240_80244;
var G__80250 = count__80241_80245;
var G__80251 = (i__80242_80246 + 1);
seq__80239_80243 = G__80248;
chunk__80240_80244 = G__80249;
count__80241_80245 = G__80250;
i__80242_80246 = G__80251;
continue;
}
} else
{var temp__4092__auto___80252 = cljs.core.seq.call(null,seq__80239_80243);if(temp__4092__auto___80252)
{var seq__80239_80253__$1 = temp__4092__auto___80252;if(cljs.core.chunked_seq_QMARK_.call(null,seq__80239_80253__$1))
{var c__8957__auto___80254 = cljs.core.chunk_first.call(null,seq__80239_80253__$1);{
var G__80255 = cljs.core.chunk_rest.call(null,seq__80239_80253__$1);
var G__80256 = c__8957__auto___80254;
var G__80257 = cljs.core.count.call(null,c__8957__auto___80254);
var G__80258 = 0;
seq__80239_80243 = G__80255;
chunk__80240_80244 = G__80256;
count__80241_80245 = G__80257;
i__80242_80246 = G__80258;
continue;
}
} else
{var d_80259 = cljs.core.first.call(null,seq__80239_80253__$1);console.log(cljs.core.pr_str.call(null,cljs.core.vec.call(null,cljs.core.take.call(null,2,d_80259))));
{
var G__80260 = cljs.core.next.call(null,seq__80239_80253__$1);
var G__80261 = null;
var G__80262 = 0;
var G__80263 = 0;
seq__80239_80243 = G__80260;
chunk__80240_80244 = G__80261;
count__80241_80245 = G__80262;
i__80242_80246 = G__80263;
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
}catch (e80265){if((e80265 instanceof Error))
{var e = e80265;console.groupCollapsed("Caught exception",e);
console.log("Was applying function\n",f);
console.log("With arguments",cljs.core.pr_str.call(null,args));
console.log("Re-throwing error...");
console.groupEnd();
throw e;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e80265;
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
log_exceptions.cljs$lang$applyTo = (function (arglist__80266){
var f = cljs.core.first(arglist__80266);
var args = cljs.core.rest(arglist__80266);
return log_exceptions__delegate(f,args);
});
log_exceptions.cljs$core$IFn$_invoke$arity$variadic = log_exceptions__delegate;
return log_exceptions;
})()
;

//# sourceMappingURL=util.js.map