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
}catch (e333524){if((e333524 instanceof Error))
{var _ = e333524;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e333524;
} else
{return null;
}
}
}} else
{return x;
}
});
foundation.app.util.log_group = (function log_group(group_name,coll){console.group(group_name);
var seq__333529_333533 = cljs.core.seq.call(null,coll);var chunk__333530_333534 = null;var count__333531_333535 = 0;var i__333532_333536 = 0;while(true){
if((i__333532_333536 < count__333531_333535))
{var d_333537 = cljs.core._nth.call(null,chunk__333530_333534,i__333532_333536);console.log(cljs.core.pr_str.call(null,cljs.core.vec.call(null,cljs.core.take.call(null,2,d_333537))));
{
var G__333538 = seq__333529_333533;
var G__333539 = chunk__333530_333534;
var G__333540 = count__333531_333535;
var G__333541 = (i__333532_333536 + 1);
seq__333529_333533 = G__333538;
chunk__333530_333534 = G__333539;
count__333531_333535 = G__333540;
i__333532_333536 = G__333541;
continue;
}
} else
{var temp__4092__auto___333542 = cljs.core.seq.call(null,seq__333529_333533);if(temp__4092__auto___333542)
{var seq__333529_333543__$1 = temp__4092__auto___333542;if(cljs.core.chunked_seq_QMARK_.call(null,seq__333529_333543__$1))
{var c__14547__auto___333544 = cljs.core.chunk_first.call(null,seq__333529_333543__$1);{
var G__333545 = cljs.core.chunk_rest.call(null,seq__333529_333543__$1);
var G__333546 = c__14547__auto___333544;
var G__333547 = cljs.core.count.call(null,c__14547__auto___333544);
var G__333548 = 0;
seq__333529_333533 = G__333545;
chunk__333530_333534 = G__333546;
count__333531_333535 = G__333547;
i__333532_333536 = G__333548;
continue;
}
} else
{var d_333549 = cljs.core.first.call(null,seq__333529_333543__$1);console.log(cljs.core.pr_str.call(null,cljs.core.vec.call(null,cljs.core.take.call(null,2,d_333549))));
{
var G__333550 = cljs.core.next.call(null,seq__333529_333543__$1);
var G__333551 = null;
var G__333552 = 0;
var G__333553 = 0;
seq__333529_333533 = G__333550;
chunk__333530_333534 = G__333551;
count__333531_333535 = G__333552;
i__333532_333536 = G__333553;
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
}catch (e333555){if((e333555 instanceof Error))
{var e = e333555;console.groupCollapsed("Caught exception",e);
console.log("Was applying function\n",f);
console.log("With arguments",cljs.core.pr_str.call(null,args));
console.log("Re-throwing error...");
console.groupEnd();
throw e;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e333555;
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
log_exceptions.cljs$lang$applyTo = (function (arglist__333556){
var f = cljs.core.first(arglist__333556);
var args = cljs.core.rest(arglist__333556);
return log_exceptions__delegate(f,args);
});
log_exceptions.cljs$core$IFn$_invoke$arity$variadic = log_exceptions__delegate;
return log_exceptions;
})()
;
foundation.app.util.vec_unless_seqable = (function vec_unless_seqable(x){try{cljs.core.seq.call(null,x);
return x;
}catch (e333558){if((e333558 instanceof Error))
{var e = e333558;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e333558;
} else
{return null;
}
}
}});

//# sourceMappingURL=util.js.map