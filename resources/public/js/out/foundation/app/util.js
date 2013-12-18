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
}catch (e21024){if((e21024 instanceof Error))
{var _ = e21024;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21024;
} else
{return null;
}
}
}} else
{return x;
}
});
foundation.app.util.log_group = (function log_group(group_name,coll){console.group(group_name);
var seq__21029_21033 = cljs.core.seq.call(null,coll);var chunk__21030_21034 = null;var count__21031_21035 = 0;var i__21032_21036 = 0;while(true){
if((i__21032_21036 < count__21031_21035))
{var d_21037 = cljs.core._nth.call(null,chunk__21030_21034,i__21032_21036);console.log(cljs.core.pr_str.call(null,cljs.core.vec.call(null,cljs.core.take.call(null,2,d_21037))));
{
var G__21038 = seq__21029_21033;
var G__21039 = chunk__21030_21034;
var G__21040 = count__21031_21035;
var G__21041 = (i__21032_21036 + 1);
seq__21029_21033 = G__21038;
chunk__21030_21034 = G__21039;
count__21031_21035 = G__21040;
i__21032_21036 = G__21041;
continue;
}
} else
{var temp__4092__auto___21042 = cljs.core.seq.call(null,seq__21029_21033);if(temp__4092__auto___21042)
{var seq__21029_21043__$1 = temp__4092__auto___21042;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21029_21043__$1))
{var c__8959__auto___21044 = cljs.core.chunk_first.call(null,seq__21029_21043__$1);{
var G__21045 = cljs.core.chunk_rest.call(null,seq__21029_21043__$1);
var G__21046 = c__8959__auto___21044;
var G__21047 = cljs.core.count.call(null,c__8959__auto___21044);
var G__21048 = 0;
seq__21029_21033 = G__21045;
chunk__21030_21034 = G__21046;
count__21031_21035 = G__21047;
i__21032_21036 = G__21048;
continue;
}
} else
{var d_21049 = cljs.core.first.call(null,seq__21029_21043__$1);console.log(cljs.core.pr_str.call(null,cljs.core.vec.call(null,cljs.core.take.call(null,2,d_21049))));
{
var G__21050 = cljs.core.next.call(null,seq__21029_21043__$1);
var G__21051 = null;
var G__21052 = 0;
var G__21053 = 0;
seq__21029_21033 = G__21050;
chunk__21030_21034 = G__21051;
count__21031_21035 = G__21052;
i__21032_21036 = G__21053;
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
}catch (e21055){if((e21055 instanceof Error))
{var e = e21055;console.groupCollapsed("Caught exception",e);
console.log("Was applying function\n",f);
console.log("With arguments",cljs.core.pr_str.call(null,args));
console.log("Re-throwing error...");
console.groupEnd();
throw e;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21055;
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
log_exceptions.cljs$lang$applyTo = (function (arglist__21056){
var f = cljs.core.first(arglist__21056);
var args = cljs.core.rest(arglist__21056);
return log_exceptions__delegate(f,args);
});
log_exceptions.cljs$core$IFn$_invoke$arity$variadic = log_exceptions__delegate;
return log_exceptions;
})()
;

//# sourceMappingURL=util.js.map