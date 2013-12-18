// Compiled by ClojureScript 0.0-2120
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
}catch (e32356){if((e32356 instanceof Error))
{var _ = e32356;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32356;
} else
{return null;
}
}
}} else
{return x;
}
});
foundation.app.util.log_group = (function log_group(group_name,coll){console.group(group_name);
var seq__32361_32365 = cljs.core.seq.call(null,coll);var chunk__32362_32366 = null;var count__32363_32367 = 0;var i__32364_32368 = 0;while(true){
if((i__32364_32368 < count__32363_32367))
{var d_32369 = cljs.core._nth.call(null,chunk__32362_32366,i__32364_32368);console.log(cljs.core.pr_str.call(null,cljs.core.vec.call(null,cljs.core.take.call(null,2,d_32369))));
{
var G__32370 = seq__32361_32365;
var G__32371 = chunk__32362_32366;
var G__32372 = count__32363_32367;
var G__32373 = (i__32364_32368 + 1);
seq__32361_32365 = G__32370;
chunk__32362_32366 = G__32371;
count__32363_32367 = G__32372;
i__32364_32368 = G__32373;
continue;
}
} else
{var temp__4092__auto___32374 = cljs.core.seq.call(null,seq__32361_32365);if(temp__4092__auto___32374)
{var seq__32361_32375__$1 = temp__4092__auto___32374;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32361_32375__$1))
{var c__8927__auto___32376 = cljs.core.chunk_first.call(null,seq__32361_32375__$1);{
var G__32377 = cljs.core.chunk_rest.call(null,seq__32361_32375__$1);
var G__32378 = c__8927__auto___32376;
var G__32379 = cljs.core.count.call(null,c__8927__auto___32376);
var G__32380 = 0;
seq__32361_32365 = G__32377;
chunk__32362_32366 = G__32378;
count__32363_32367 = G__32379;
i__32364_32368 = G__32380;
continue;
}
} else
{var d_32381 = cljs.core.first.call(null,seq__32361_32375__$1);console.log(cljs.core.pr_str.call(null,cljs.core.vec.call(null,cljs.core.take.call(null,2,d_32381))));
{
var G__32382 = cljs.core.next.call(null,seq__32361_32375__$1);
var G__32383 = null;
var G__32384 = 0;
var G__32385 = 0;
seq__32361_32365 = G__32382;
chunk__32362_32366 = G__32383;
count__32363_32367 = G__32384;
i__32364_32368 = G__32385;
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
}catch (e32387){if((e32387 instanceof Error))
{var e = e32387;console.groupCollapsed("Caught exception",e);
console.log("Was applying function\n",f);
console.log("With arguments",cljs.core.pr_str.call(null,args));
console.log("Re-throwing error...");
console.groupEnd();
throw e;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32387;
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
log_exceptions.cljs$lang$applyTo = (function (arglist__32388){
var f = cljs.core.first(arglist__32388);
var args = cljs.core.rest(arglist__32388);
return log_exceptions__delegate(f,args);
});
log_exceptions.cljs$core$IFn$_invoke$arity$variadic = log_exceptions__delegate;
return log_exceptions;
})()
;

//# sourceMappingURL=util.js.map