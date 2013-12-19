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
}catch (e177014){if((e177014 instanceof Error))
{var _ = e177014;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e177014;
} else
{return null;
}
}
}} else
{return x;
}
});
foundation.app.util.log_group = (function log_group(group_name,coll){console.group(group_name);
var seq__177019_177023 = cljs.core.seq.call(null,coll);var chunk__177020_177024 = null;var count__177021_177025 = 0;var i__177022_177026 = 0;while(true){
if((i__177022_177026 < count__177021_177025))
{var d_177027 = cljs.core._nth.call(null,chunk__177020_177024,i__177022_177026);console.log(cljs.core.pr_str.call(null,d_177027));
{
var G__177028 = seq__177019_177023;
var G__177029 = chunk__177020_177024;
var G__177030 = count__177021_177025;
var G__177031 = (i__177022_177026 + 1);
seq__177019_177023 = G__177028;
chunk__177020_177024 = G__177029;
count__177021_177025 = G__177030;
i__177022_177026 = G__177031;
continue;
}
} else
{var temp__4092__auto___177032 = cljs.core.seq.call(null,seq__177019_177023);if(temp__4092__auto___177032)
{var seq__177019_177033__$1 = temp__4092__auto___177032;if(cljs.core.chunked_seq_QMARK_.call(null,seq__177019_177033__$1))
{var c__8952__auto___177034 = cljs.core.chunk_first.call(null,seq__177019_177033__$1);{
var G__177035 = cljs.core.chunk_rest.call(null,seq__177019_177033__$1);
var G__177036 = c__8952__auto___177034;
var G__177037 = cljs.core.count.call(null,c__8952__auto___177034);
var G__177038 = 0;
seq__177019_177023 = G__177035;
chunk__177020_177024 = G__177036;
count__177021_177025 = G__177037;
i__177022_177026 = G__177038;
continue;
}
} else
{var d_177039 = cljs.core.first.call(null,seq__177019_177033__$1);console.log(cljs.core.pr_str.call(null,d_177039));
{
var G__177040 = cljs.core.next.call(null,seq__177019_177033__$1);
var G__177041 = null;
var G__177042 = 0;
var G__177043 = 0;
seq__177019_177023 = G__177040;
chunk__177020_177024 = G__177041;
count__177021_177025 = G__177042;
i__177022_177026 = G__177043;
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
}catch (e177045){if((e177045 instanceof Error))
{var e = e177045;console.groupCollapsed("Caught exception",e);
console.log("Was applying function\n",f);
console.log("With arguments",cljs.core.pr_str.call(null,args));
console.log("Re-throwing error...");
console.groupEnd();
throw e;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e177045;
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
log_exceptions.cljs$lang$applyTo = (function (arglist__177046){
var f = cljs.core.first(arglist__177046);
var args = cljs.core.rest(arglist__177046);
return log_exceptions__delegate(f,args);
});
log_exceptions.cljs$core$IFn$_invoke$arity$variadic = log_exceptions__delegate;
return log_exceptions;
})()
;

//# sourceMappingURL=util.js.map