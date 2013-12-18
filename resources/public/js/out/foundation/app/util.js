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
}catch (e21084){if((e21084 instanceof Error))
{var _ = e21084;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21084;
} else
{return null;
}
}
}} else
{return x;
}
});
foundation.app.util.log_group = (function log_group(group_name,coll){console.group(group_name);
var seq__21089_21093 = cljs.core.seq.call(null,coll);var chunk__21090_21094 = null;var count__21091_21095 = 0;var i__21092_21096 = 0;while(true){
if((i__21092_21096 < count__21091_21095))
{var d_21097 = cljs.core._nth.call(null,chunk__21090_21094,i__21092_21096);console.log(cljs.core.pr_str.call(null,cljs.core.vec.call(null,cljs.core.take.call(null,2,d_21097))));
{
var G__21098 = seq__21089_21093;
var G__21099 = chunk__21090_21094;
var G__21100 = count__21091_21095;
var G__21101 = (i__21092_21096 + 1);
seq__21089_21093 = G__21098;
chunk__21090_21094 = G__21099;
count__21091_21095 = G__21100;
i__21092_21096 = G__21101;
continue;
}
} else
{var temp__4092__auto___21102 = cljs.core.seq.call(null,seq__21089_21093);if(temp__4092__auto___21102)
{var seq__21089_21103__$1 = temp__4092__auto___21102;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21089_21103__$1))
{var c__8957__auto___21104 = cljs.core.chunk_first.call(null,seq__21089_21103__$1);{
var G__21105 = cljs.core.chunk_rest.call(null,seq__21089_21103__$1);
var G__21106 = c__8957__auto___21104;
var G__21107 = cljs.core.count.call(null,c__8957__auto___21104);
var G__21108 = 0;
seq__21089_21093 = G__21105;
chunk__21090_21094 = G__21106;
count__21091_21095 = G__21107;
i__21092_21096 = G__21108;
continue;
}
} else
{var d_21109 = cljs.core.first.call(null,seq__21089_21103__$1);console.log(cljs.core.pr_str.call(null,cljs.core.vec.call(null,cljs.core.take.call(null,2,d_21109))));
{
var G__21110 = cljs.core.next.call(null,seq__21089_21103__$1);
var G__21111 = null;
var G__21112 = 0;
var G__21113 = 0;
seq__21089_21093 = G__21110;
chunk__21090_21094 = G__21111;
count__21091_21095 = G__21112;
i__21092_21096 = G__21113;
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
}catch (e21115){if((e21115 instanceof Error))
{var e = e21115;console.groupCollapsed("Caught exception",e);
console.log("Was applying function\n",f);
console.log("With arguments",cljs.core.pr_str.call(null,args));
console.log("Re-throwing error...");
console.groupEnd();
throw e;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21115;
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
log_exceptions.cljs$lang$applyTo = (function (arglist__21116){
var f = cljs.core.first(arglist__21116);
var args = cljs.core.rest(arglist__21116);
return log_exceptions__delegate(f,args);
});
log_exceptions.cljs$core$IFn$_invoke$arity$variadic = log_exceptions__delegate;
return log_exceptions;
})()
;

//# sourceMappingURL=util.js.map