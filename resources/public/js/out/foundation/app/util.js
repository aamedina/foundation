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
}catch (e21039){if((e21039 instanceof Error))
{var _ = e21039;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21039;
} else
{return null;
}
}
}} else
{return x;
}
});
foundation.app.util.log_group = (function log_group(group_name,coll){console.group(group_name);
var seq__21044_21048 = cljs.core.seq.call(null,coll);var chunk__21045_21049 = null;var count__21046_21050 = 0;var i__21047_21051 = 0;while(true){
if((i__21047_21051 < count__21046_21050))
{var d_21052 = cljs.core._nth.call(null,chunk__21045_21049,i__21047_21051);console.log(cljs.core.pr_str.call(null,cljs.core.vec.call(null,cljs.core.take.call(null,2,d_21052))));
{
var G__21053 = seq__21044_21048;
var G__21054 = chunk__21045_21049;
var G__21055 = count__21046_21050;
var G__21056 = (i__21047_21051 + 1);
seq__21044_21048 = G__21053;
chunk__21045_21049 = G__21054;
count__21046_21050 = G__21055;
i__21047_21051 = G__21056;
continue;
}
} else
{var temp__4092__auto___21057 = cljs.core.seq.call(null,seq__21044_21048);if(temp__4092__auto___21057)
{var seq__21044_21058__$1 = temp__4092__auto___21057;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21044_21058__$1))
{var c__8974__auto___21059 = cljs.core.chunk_first.call(null,seq__21044_21058__$1);{
var G__21060 = cljs.core.chunk_rest.call(null,seq__21044_21058__$1);
var G__21061 = c__8974__auto___21059;
var G__21062 = cljs.core.count.call(null,c__8974__auto___21059);
var G__21063 = 0;
seq__21044_21048 = G__21060;
chunk__21045_21049 = G__21061;
count__21046_21050 = G__21062;
i__21047_21051 = G__21063;
continue;
}
} else
{var d_21064 = cljs.core.first.call(null,seq__21044_21058__$1);console.log(cljs.core.pr_str.call(null,cljs.core.vec.call(null,cljs.core.take.call(null,2,d_21064))));
{
var G__21065 = cljs.core.next.call(null,seq__21044_21058__$1);
var G__21066 = null;
var G__21067 = 0;
var G__21068 = 0;
seq__21044_21048 = G__21065;
chunk__21045_21049 = G__21066;
count__21046_21050 = G__21067;
i__21047_21051 = G__21068;
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
}catch (e21070){if((e21070 instanceof Error))
{var e = e21070;console.groupCollapsed("Caught exception",e);
console.log("Was applying function\n",f);
console.log("With arguments",cljs.core.pr_str.call(null,args));
console.log("Re-throwing error...");
console.groupEnd();
throw e;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21070;
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
log_exceptions.cljs$lang$applyTo = (function (arglist__21071){
var f = cljs.core.first(arglist__21071);
var args = cljs.core.rest(arglist__21071);
return log_exceptions__delegate(f,args);
});
log_exceptions.cljs$core$IFn$_invoke$arity$variadic = log_exceptions__delegate;
return log_exceptions;
})()
;

//# sourceMappingURL=util.js.map