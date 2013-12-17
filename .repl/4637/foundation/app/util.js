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
}catch (e25420){if((e25420 instanceof Error))
{var _ = e25420;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25420;
} else
{return null;
}
}
}} else
{return x;
}
});
foundation.app.util.log_group = (function log_group(group_name,coll){console.group(group_name);
var seq__25425_25429 = cljs.core.seq.call(null,coll);var chunk__25426_25430 = null;var count__25427_25431 = 0;var i__25428_25432 = 0;while(true){
if((i__25428_25432 < count__25427_25431))
{var d_25433 = cljs.core._nth.call(null,chunk__25426_25430,i__25428_25432);console.log(cljs.core.pr_str.call(null,d_25433));
{
var G__25434 = seq__25425_25429;
var G__25435 = chunk__25426_25430;
var G__25436 = count__25427_25431;
var G__25437 = (i__25428_25432 + 1);
seq__25425_25429 = G__25434;
chunk__25426_25430 = G__25435;
count__25427_25431 = G__25436;
i__25428_25432 = G__25437;
continue;
}
} else
{var temp__4092__auto___25438 = cljs.core.seq.call(null,seq__25425_25429);if(temp__4092__auto___25438)
{var seq__25425_25439__$1 = temp__4092__auto___25438;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25425_25439__$1))
{var c__8552__auto___25440 = cljs.core.chunk_first.call(null,seq__25425_25439__$1);{
var G__25441 = cljs.core.chunk_rest.call(null,seq__25425_25439__$1);
var G__25442 = c__8552__auto___25440;
var G__25443 = cljs.core.count.call(null,c__8552__auto___25440);
var G__25444 = 0;
seq__25425_25429 = G__25441;
chunk__25426_25430 = G__25442;
count__25427_25431 = G__25443;
i__25428_25432 = G__25444;
continue;
}
} else
{var d_25445 = cljs.core.first.call(null,seq__25425_25439__$1);console.log(cljs.core.pr_str.call(null,d_25445));
{
var G__25446 = cljs.core.next.call(null,seq__25425_25439__$1);
var G__25447 = null;
var G__25448 = 0;
var G__25449 = 0;
seq__25425_25429 = G__25446;
chunk__25426_25430 = G__25447;
count__25427_25431 = G__25448;
i__25428_25432 = G__25449;
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
}catch (e25451){if((e25451 instanceof Error))
{var e = e25451;console.groupCollapsed("Caught exception",e);
console.log("Was applying function\n",f);
console.log("With arguments",cljs.core.pr_str.call(null,args));
console.log("Re-throwing error...");
console.groupEnd();
throw e;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25451;
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
log_exceptions.cljs$lang$applyTo = (function (arglist__25452){
var f = cljs.core.first(arglist__25452);
var args = cljs.core.rest(arglist__25452);
return log_exceptions__delegate(f,args);
});
log_exceptions.cljs$core$IFn$_invoke$arity$variadic = log_exceptions__delegate;
return log_exceptions;
})()
;
foundation.app.util.vec_unless_seqable = (function vec_unless_seqable(x){try{cljs.core.seq.call(null,x);
return x;
}catch (e25454){if((e25454 instanceof Error))
{var e = e25454;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25454;
} else
{return null;
}
}
}});
