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
}catch (e324347){if((e324347 instanceof Error))
{var _ = e324347;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e324347;
} else
{return null;
}
}
}} else
{return x;
}
});
foundation.app.util.log_group = (function log_group(group_name,coll){console.group(group_name);
var seq__324352_324356 = cljs.core.seq.call(null,coll);var chunk__324353_324357 = null;var count__324354_324358 = 0;var i__324355_324359 = 0;while(true){
if((i__324355_324359 < count__324354_324358))
{var d_324360 = cljs.core._nth.call(null,chunk__324353_324357,i__324355_324359);console.log(cljs.core.pr_str.call(null,cljs.core.vec.call(null,cljs.core.take.call(null,2,d_324360))));
{
var G__324361 = seq__324352_324356;
var G__324362 = chunk__324353_324357;
var G__324363 = count__324354_324358;
var G__324364 = (i__324355_324359 + 1);
seq__324352_324356 = G__324361;
chunk__324353_324357 = G__324362;
count__324354_324358 = G__324363;
i__324355_324359 = G__324364;
continue;
}
} else
{var temp__4092__auto___324365 = cljs.core.seq.call(null,seq__324352_324356);if(temp__4092__auto___324365)
{var seq__324352_324366__$1 = temp__4092__auto___324365;if(cljs.core.chunked_seq_QMARK_.call(null,seq__324352_324366__$1))
{var c__14547__auto___324367 = cljs.core.chunk_first.call(null,seq__324352_324366__$1);{
var G__324368 = cljs.core.chunk_rest.call(null,seq__324352_324366__$1);
var G__324369 = c__14547__auto___324367;
var G__324370 = cljs.core.count.call(null,c__14547__auto___324367);
var G__324371 = 0;
seq__324352_324356 = G__324368;
chunk__324353_324357 = G__324369;
count__324354_324358 = G__324370;
i__324355_324359 = G__324371;
continue;
}
} else
{var d_324372 = cljs.core.first.call(null,seq__324352_324366__$1);console.log(cljs.core.pr_str.call(null,cljs.core.vec.call(null,cljs.core.take.call(null,2,d_324372))));
{
var G__324373 = cljs.core.next.call(null,seq__324352_324366__$1);
var G__324374 = null;
var G__324375 = 0;
var G__324376 = 0;
seq__324352_324356 = G__324373;
chunk__324353_324357 = G__324374;
count__324354_324358 = G__324375;
i__324355_324359 = G__324376;
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
}catch (e324378){if((e324378 instanceof Error))
{var e = e324378;console.groupCollapsed("Caught exception",e);
console.log("Was applying function\n",f);
console.log("With arguments",cljs.core.pr_str.call(null,args));
console.log("Re-throwing error...");
console.groupEnd();
throw e;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e324378;
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
log_exceptions.cljs$lang$applyTo = (function (arglist__324379){
var f = cljs.core.first(arglist__324379);
var args = cljs.core.rest(arglist__324379);
return log_exceptions__delegate(f,args);
});
log_exceptions.cljs$core$IFn$_invoke$arity$variadic = log_exceptions__delegate;
return log_exceptions;
})()
;
foundation.app.util.vec_unless_seqable = (function vec_unless_seqable(x){try{cljs.core.seq.call(null,x);
return x;
}catch (e324381){if((e324381 instanceof Error))
{var e = e324381;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e324381;
} else
{return null;
}
}
}});

//# sourceMappingURL=util.js.map