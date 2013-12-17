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
}catch (e24073){if((e24073 instanceof Error))
{var _ = e24073;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24073;
} else
{return null;
}
}
}} else
{return x;
}
});
foundation.app.util.log_group = (function log_group(group_name,coll){console.group(group_name);
var seq__24078_24082 = cljs.core.seq.call(null,coll);var chunk__24079_24083 = null;var count__24080_24084 = 0;var i__24081_24085 = 0;while(true){
if((i__24081_24085 < count__24080_24084))
{var d_24086 = cljs.core._nth.call(null,chunk__24079_24083,i__24081_24085);console.log(cljs.core.pr_str.call(null,cljs.core.vec.call(null,cljs.core.take.call(null,2,d_24086))));
{
var G__24087 = seq__24078_24082;
var G__24088 = chunk__24079_24083;
var G__24089 = count__24080_24084;
var G__24090 = (i__24081_24085 + 1);
seq__24078_24082 = G__24087;
chunk__24079_24083 = G__24088;
count__24080_24084 = G__24089;
i__24081_24085 = G__24090;
continue;
}
} else
{var temp__4092__auto___24091 = cljs.core.seq.call(null,seq__24078_24082);if(temp__4092__auto___24091)
{var seq__24078_24092__$1 = temp__4092__auto___24091;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24078_24092__$1))
{var c__8552__auto___24093 = cljs.core.chunk_first.call(null,seq__24078_24092__$1);{
var G__24094 = cljs.core.chunk_rest.call(null,seq__24078_24092__$1);
var G__24095 = c__8552__auto___24093;
var G__24096 = cljs.core.count.call(null,c__8552__auto___24093);
var G__24097 = 0;
seq__24078_24082 = G__24094;
chunk__24079_24083 = G__24095;
count__24080_24084 = G__24096;
i__24081_24085 = G__24097;
continue;
}
} else
{var d_24098 = cljs.core.first.call(null,seq__24078_24092__$1);console.log(cljs.core.pr_str.call(null,cljs.core.vec.call(null,cljs.core.take.call(null,2,d_24098))));
{
var G__24099 = cljs.core.next.call(null,seq__24078_24092__$1);
var G__24100 = null;
var G__24101 = 0;
var G__24102 = 0;
seq__24078_24082 = G__24099;
chunk__24079_24083 = G__24100;
count__24080_24084 = G__24101;
i__24081_24085 = G__24102;
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
}catch (e24104){if((e24104 instanceof Error))
{var e = e24104;console.groupCollapsed("Caught exception",e);
console.log("Was applying function\n",f);
console.log("With arguments",cljs.core.pr_str.call(null,args));
console.log("Re-throwing error...");
console.groupEnd();
throw e;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24104;
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
log_exceptions.cljs$lang$applyTo = (function (arglist__24105){
var f = cljs.core.first(arglist__24105);
var args = cljs.core.rest(arglist__24105);
return log_exceptions__delegate(f,args);
});
log_exceptions.cljs$core$IFn$_invoke$arity$variadic = log_exceptions__delegate;
return log_exceptions;
})()
;
foundation.app.util.vec_unless_seqable = (function vec_unless_seqable(x){try{cljs.core.seq.call(null,x);
return x;
}catch (e24107){if((e24107 instanceof Error))
{var e = e24107;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24107;
} else
{return null;
}
}
}});
