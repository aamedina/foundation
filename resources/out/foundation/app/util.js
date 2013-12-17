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
}catch (e370025){if((e370025 instanceof Error))
{var _ = e370025;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e370025;
} else
{return null;
}
}
}} else
{return x;
}
});
foundation.app.util.log_group = (function log_group(group_name,coll){console.group(group_name);
var seq__370030_370034 = cljs.core.seq.call(null,coll);var chunk__370031_370035 = null;var count__370032_370036 = 0;var i__370033_370037 = 0;while(true){
if((i__370033_370037 < count__370032_370036))
{var d_370038 = cljs.core._nth.call(null,chunk__370031_370035,i__370033_370037);console.log(cljs.core.pr_str.call(null,cljs.core.vec.call(null,cljs.core.take.call(null,2,d_370038))));
{
var G__370039 = seq__370030_370034;
var G__370040 = chunk__370031_370035;
var G__370041 = count__370032_370036;
var G__370042 = (i__370033_370037 + 1);
seq__370030_370034 = G__370039;
chunk__370031_370035 = G__370040;
count__370032_370036 = G__370041;
i__370033_370037 = G__370042;
continue;
}
} else
{var temp__4092__auto___370043 = cljs.core.seq.call(null,seq__370030_370034);if(temp__4092__auto___370043)
{var seq__370030_370044__$1 = temp__4092__auto___370043;if(cljs.core.chunked_seq_QMARK_.call(null,seq__370030_370044__$1))
{var c__14708__auto___370045 = cljs.core.chunk_first.call(null,seq__370030_370044__$1);{
var G__370046 = cljs.core.chunk_rest.call(null,seq__370030_370044__$1);
var G__370047 = c__14708__auto___370045;
var G__370048 = cljs.core.count.call(null,c__14708__auto___370045);
var G__370049 = 0;
seq__370030_370034 = G__370046;
chunk__370031_370035 = G__370047;
count__370032_370036 = G__370048;
i__370033_370037 = G__370049;
continue;
}
} else
{var d_370050 = cljs.core.first.call(null,seq__370030_370044__$1);console.log(cljs.core.pr_str.call(null,cljs.core.vec.call(null,cljs.core.take.call(null,2,d_370050))));
{
var G__370051 = cljs.core.next.call(null,seq__370030_370044__$1);
var G__370052 = null;
var G__370053 = 0;
var G__370054 = 0;
seq__370030_370034 = G__370051;
chunk__370031_370035 = G__370052;
count__370032_370036 = G__370053;
i__370033_370037 = G__370054;
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
}catch (e370056){if((e370056 instanceof Error))
{var e = e370056;console.groupCollapsed("Caught exception",e);
console.log("Was applying function\n",f);
console.log("With arguments",cljs.core.pr_str.call(null,args));
console.log("Re-throwing error...");
console.groupEnd();
throw e;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e370056;
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
log_exceptions.cljs$lang$applyTo = (function (arglist__370057){
var f = cljs.core.first(arglist__370057);
var args = cljs.core.rest(arglist__370057);
return log_exceptions__delegate(f,args);
});
log_exceptions.cljs$core$IFn$_invoke$arity$variadic = log_exceptions__delegate;
return log_exceptions;
})()
;
foundation.app.util.vec_unless_seqable = (function vec_unless_seqable(x){try{cljs.core.seq.call(null,x);
return x;
}catch (e370059){if((e370059 instanceof Error))
{var e = e370059;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e370059;
} else
{return null;
}
}
}});

//# sourceMappingURL=util.js.map