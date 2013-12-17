// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.app.util');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.reader');
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
}catch (e24235){if((e24235 instanceof Error))
{var _ = e24235;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24235;
} else
{return null;
}
}
}} else
{return x;
}
});
foundation.app.util.log_group = (function log_group(group_name,coll){console.group(group_name);
var seq__24240_24244 = cljs.core.seq.call(null,coll);var chunk__24241_24245 = null;var count__24242_24246 = 0;var i__24243_24247 = 0;while(true){
if((i__24243_24247 < count__24242_24246))
{var d_24248 = cljs.core._nth.call(null,chunk__24241_24245,i__24243_24247);console.log(cljs.core.pr_str.call(null,d_24248));
{
var G__24249 = seq__24240_24244;
var G__24250 = chunk__24241_24245;
var G__24251 = count__24242_24246;
var G__24252 = (i__24243_24247 + 1);
seq__24240_24244 = G__24249;
chunk__24241_24245 = G__24250;
count__24242_24246 = G__24251;
i__24243_24247 = G__24252;
continue;
}
} else
{var temp__4092__auto___24253 = cljs.core.seq.call(null,seq__24240_24244);if(temp__4092__auto___24253)
{var seq__24240_24254__$1 = temp__4092__auto___24253;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24240_24254__$1))
{var c__8571__auto___24255 = cljs.core.chunk_first.call(null,seq__24240_24254__$1);{
var G__24256 = cljs.core.chunk_rest.call(null,seq__24240_24254__$1);
var G__24257 = c__8571__auto___24255;
var G__24258 = cljs.core.count.call(null,c__8571__auto___24255);
var G__24259 = 0;
seq__24240_24244 = G__24256;
chunk__24241_24245 = G__24257;
count__24242_24246 = G__24258;
i__24243_24247 = G__24259;
continue;
}
} else
{var d_24260 = cljs.core.first.call(null,seq__24240_24254__$1);console.log(cljs.core.pr_str.call(null,d_24260));
{
var G__24261 = cljs.core.next.call(null,seq__24240_24254__$1);
var G__24262 = null;
var G__24263 = 0;
var G__24264 = 0;
seq__24240_24244 = G__24261;
chunk__24241_24245 = G__24262;
count__24242_24246 = G__24263;
i__24243_24247 = G__24264;
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
}catch (e24266){if((e24266 instanceof Error))
{var e = e24266;console.groupCollapsed("Caught exception",e);
console.log("Was applying function\n",f);
console.log("With arguments",cljs.core.pr_str.call(null,args));
console.log("Re-throwing error...");
console.groupEnd();
throw e;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24266;
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
log_exceptions.cljs$lang$applyTo = (function (arglist__24267){
var f = cljs.core.first(arglist__24267);
var args = cljs.core.rest(arglist__24267);
return log_exceptions__delegate(f,args);
});
log_exceptions.cljs$core$IFn$_invoke$arity$variadic = log_exceptions__delegate;
return log_exceptions;
})()
;
foundation.app.util.vec_unless_seqable = (function vec_unless_seqable(x){try{cljs.core.seq.call(null,x);
return x;
}catch (e24269){if((e24269 instanceof Error))
{var e = e24269;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24269;
} else
{return null;
}
}
}});
