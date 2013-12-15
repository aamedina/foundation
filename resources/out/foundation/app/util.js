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
}catch (e322077){if((e322077 instanceof Error))
{var _ = e322077;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e322077;
} else
{return null;
}
}
}} else
{return x;
}
});
foundation.app.util.log_group = (function log_group(group_name,coll){console.group(group_name);
var seq__322082_322086 = cljs.core.seq.call(null,coll);var chunk__322083_322087 = null;var count__322084_322088 = 0;var i__322085_322089 = 0;while(true){
if((i__322085_322089 < count__322084_322088))
{var d_322090 = cljs.core._nth.call(null,chunk__322083_322087,i__322085_322089);console.log(cljs.core.pr_str.call(null,d_322090));
{
var G__322091 = seq__322082_322086;
var G__322092 = chunk__322083_322087;
var G__322093 = count__322084_322088;
var G__322094 = (i__322085_322089 + 1);
seq__322082_322086 = G__322091;
chunk__322083_322087 = G__322092;
count__322084_322088 = G__322093;
i__322085_322089 = G__322094;
continue;
}
} else
{var temp__4092__auto___322095 = cljs.core.seq.call(null,seq__322082_322086);if(temp__4092__auto___322095)
{var seq__322082_322096__$1 = temp__4092__auto___322095;if(cljs.core.chunked_seq_QMARK_.call(null,seq__322082_322096__$1))
{var c__14549__auto___322097 = cljs.core.chunk_first.call(null,seq__322082_322096__$1);{
var G__322098 = cljs.core.chunk_rest.call(null,seq__322082_322096__$1);
var G__322099 = c__14549__auto___322097;
var G__322100 = cljs.core.count.call(null,c__14549__auto___322097);
var G__322101 = 0;
seq__322082_322086 = G__322098;
chunk__322083_322087 = G__322099;
count__322084_322088 = G__322100;
i__322085_322089 = G__322101;
continue;
}
} else
{var d_322102 = cljs.core.first.call(null,seq__322082_322096__$1);console.log(cljs.core.pr_str.call(null,d_322102));
{
var G__322103 = cljs.core.next.call(null,seq__322082_322096__$1);
var G__322104 = null;
var G__322105 = 0;
var G__322106 = 0;
seq__322082_322086 = G__322103;
chunk__322083_322087 = G__322104;
count__322084_322088 = G__322105;
i__322085_322089 = G__322106;
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
}catch (e322108){if((e322108 instanceof Error))
{var e = e322108;console.groupCollapsed("Caught exception",e);
console.log("Was applying function\n",f);
console.log("With arguments",cljs.core.pr_str.call(null,args));
console.log("Re-throwing error...");
console.groupEnd();
throw e;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e322108;
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
log_exceptions.cljs$lang$applyTo = (function (arglist__322109){
var f = cljs.core.first(arglist__322109);
var args = cljs.core.rest(arglist__322109);
return log_exceptions__delegate(f,args);
});
log_exceptions.cljs$core$IFn$_invoke$arity$variadic = log_exceptions__delegate;
return log_exceptions;
})()
;
foundation.app.util.vec_unless_seqable = (function vec_unless_seqable(x){try{cljs.core.seq.call(null,x);
return x;
}catch (e322111){if((e322111 instanceof Error))
{var e = e322111;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e322111;
} else
{return null;
}
}
}});

//# sourceMappingURL=util.js.map