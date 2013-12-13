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
}catch (e294965){if((e294965 instanceof Error))
{var _ = e294965;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e294965;
} else
{return null;
}
}
}} else
{return x;
}
});
foundation.app.util.log_group = (function log_group(group_name,coll){console.group(group_name);
var seq__294970_294974 = cljs.core.seq.call(null,coll);var chunk__294971_294975 = null;var count__294972_294976 = 0;var i__294973_294977 = 0;while(true){
if((i__294973_294977 < count__294972_294976))
{var d_294978 = cljs.core._nth.call(null,chunk__294971_294975,i__294973_294977);console.log(cljs.core.pr_str.call(null,d_294978));
{
var G__294979 = seq__294970_294974;
var G__294980 = chunk__294971_294975;
var G__294981 = count__294972_294976;
var G__294982 = (i__294973_294977 + 1);
seq__294970_294974 = G__294979;
chunk__294971_294975 = G__294980;
count__294972_294976 = G__294981;
i__294973_294977 = G__294982;
continue;
}
} else
{var temp__4092__auto___294983 = cljs.core.seq.call(null,seq__294970_294974);if(temp__4092__auto___294983)
{var seq__294970_294984__$1 = temp__4092__auto___294983;if(cljs.core.chunked_seq_QMARK_.call(null,seq__294970_294984__$1))
{var c__14549__auto___294985 = cljs.core.chunk_first.call(null,seq__294970_294984__$1);{
var G__294986 = cljs.core.chunk_rest.call(null,seq__294970_294984__$1);
var G__294987 = c__14549__auto___294985;
var G__294988 = cljs.core.count.call(null,c__14549__auto___294985);
var G__294989 = 0;
seq__294970_294974 = G__294986;
chunk__294971_294975 = G__294987;
count__294972_294976 = G__294988;
i__294973_294977 = G__294989;
continue;
}
} else
{var d_294990 = cljs.core.first.call(null,seq__294970_294984__$1);console.log(cljs.core.pr_str.call(null,d_294990));
{
var G__294991 = cljs.core.next.call(null,seq__294970_294984__$1);
var G__294992 = null;
var G__294993 = 0;
var G__294994 = 0;
seq__294970_294974 = G__294991;
chunk__294971_294975 = G__294992;
count__294972_294976 = G__294993;
i__294973_294977 = G__294994;
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
}catch (e294996){if((e294996 instanceof Error))
{var e = e294996;console.groupCollapsed("Caught exception",e);
console.log("Was applying function\n",f);
console.log("With arguments",cljs.core.pr_str.call(null,args));
console.log("Re-throwing error...");
console.groupEnd();
throw e;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e294996;
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
log_exceptions.cljs$lang$applyTo = (function (arglist__294997){
var f = cljs.core.first(arglist__294997);
var args = cljs.core.rest(arglist__294997);
return log_exceptions__delegate(f,args);
});
log_exceptions.cljs$core$IFn$_invoke$arity$variadic = log_exceptions__delegate;
return log_exceptions;
})()
;
foundation.app.util.vec_unless_seqable = (function vec_unless_seqable(x){try{cljs.core.seq.call(null,x);
return x;
}catch (e294999){if((e294999 instanceof Error))
{var e = e294999;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e294999;
} else
{return null;
}
}
}});

//# sourceMappingURL=util.js.map