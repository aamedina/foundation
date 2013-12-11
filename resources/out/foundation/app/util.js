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
}catch (e17963){if((e17963 instanceof Error))
{var _ = e17963;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17963;
} else
{return null;
}
}
}} else
{return x;
}
});
foundation.app.util.log_group = (function log_group(group_name,coll){console.group(group_name);
var seq__17968_17972 = cljs.core.seq.call(null,coll);var chunk__17969_17973 = null;var count__17970_17974 = 0;var i__17971_17975 = 0;while(true){
if((i__17971_17975 < count__17970_17974))
{var d_17976 = cljs.core._nth.call(null,chunk__17969_17973,i__17971_17975);console.log(cljs.core.pr_str.call(null,d_17976));
{
var G__17977 = seq__17968_17972;
var G__17978 = chunk__17969_17973;
var G__17979 = count__17970_17974;
var G__17980 = (i__17971_17975 + 1);
seq__17968_17972 = G__17977;
chunk__17969_17973 = G__17978;
count__17970_17974 = G__17979;
i__17971_17975 = G__17980;
continue;
}
} else
{var temp__4098__auto___17981 = cljs.core.seq.call(null,seq__17968_17972);if(temp__4098__auto___17981)
{var seq__17968_17982__$1 = temp__4098__auto___17981;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17968_17982__$1))
{var c__15865__auto___17983 = cljs.core.chunk_first.call(null,seq__17968_17982__$1);{
var G__17984 = cljs.core.chunk_rest.call(null,seq__17968_17982__$1);
var G__17985 = c__15865__auto___17983;
var G__17986 = cljs.core.count.call(null,c__15865__auto___17983);
var G__17987 = 0;
seq__17968_17972 = G__17984;
chunk__17969_17973 = G__17985;
count__17970_17974 = G__17986;
i__17971_17975 = G__17987;
continue;
}
} else
{var d_17988 = cljs.core.first.call(null,seq__17968_17982__$1);console.log(cljs.core.pr_str.call(null,d_17988));
{
var G__17989 = cljs.core.next.call(null,seq__17968_17982__$1);
var G__17990 = null;
var G__17991 = 0;
var G__17992 = 0;
seq__17968_17972 = G__17989;
chunk__17969_17973 = G__17990;
count__17970_17974 = G__17991;
i__17971_17975 = G__17992;
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
}catch (e17994){if((e17994 instanceof Error))
{var e = e17994;console.groupCollapsed("Caught exception",e);
console.log("Was applying function\n",f);
console.log("With arguments",cljs.core.pr_str.call(null,args));
console.log("Re-throwing error...");
console.groupEnd();
throw e;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17994;
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
log_exceptions.cljs$lang$applyTo = (function (arglist__17995){
var f = cljs.core.first(arglist__17995);
var args = cljs.core.rest(arglist__17995);
return log_exceptions__delegate(f,args);
});
log_exceptions.cljs$core$IFn$_invoke$arity$variadic = log_exceptions__delegate;
return log_exceptions;
})()
;
foundation.app.util.vec_unless_seqable = (function vec_unless_seqable(x){try{cljs.core.seq.call(null,x);
return x;
}catch (e17997){if((e17997 instanceof Error))
{var e = e17997;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17997;
} else
{return null;
}
}
}});

//# sourceMappingURL=util.js.map