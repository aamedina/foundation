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
}catch (e269014){if((e269014 instanceof Error))
{var _ = e269014;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e269014;
} else
{return null;
}
}
}} else
{return x;
}
});
foundation.app.util.log_group = (function log_group(group_name,coll){console.group(group_name);
var seq__269019_269023 = cljs.core.seq.call(null,coll);var chunk__269020_269024 = null;var count__269021_269025 = 0;var i__269022_269026 = 0;while(true){
if((i__269022_269026 < count__269021_269025))
{var d_269027 = cljs.core._nth.call(null,chunk__269020_269024,i__269022_269026);console.log(cljs.core.pr_str.call(null,d_269027));
{
var G__269028 = seq__269019_269023;
var G__269029 = chunk__269020_269024;
var G__269030 = count__269021_269025;
var G__269031 = (i__269022_269026 + 1);
seq__269019_269023 = G__269028;
chunk__269020_269024 = G__269029;
count__269021_269025 = G__269030;
i__269022_269026 = G__269031;
continue;
}
} else
{var temp__4092__auto___269032 = cljs.core.seq.call(null,seq__269019_269023);if(temp__4092__auto___269032)
{var seq__269019_269033__$1 = temp__4092__auto___269032;if(cljs.core.chunked_seq_QMARK_.call(null,seq__269019_269033__$1))
{var c__8952__auto___269034 = cljs.core.chunk_first.call(null,seq__269019_269033__$1);{
var G__269035 = cljs.core.chunk_rest.call(null,seq__269019_269033__$1);
var G__269036 = c__8952__auto___269034;
var G__269037 = cljs.core.count.call(null,c__8952__auto___269034);
var G__269038 = 0;
seq__269019_269023 = G__269035;
chunk__269020_269024 = G__269036;
count__269021_269025 = G__269037;
i__269022_269026 = G__269038;
continue;
}
} else
{var d_269039 = cljs.core.first.call(null,seq__269019_269033__$1);console.log(cljs.core.pr_str.call(null,d_269039));
{
var G__269040 = cljs.core.next.call(null,seq__269019_269033__$1);
var G__269041 = null;
var G__269042 = 0;
var G__269043 = 0;
seq__269019_269023 = G__269040;
chunk__269020_269024 = G__269041;
count__269021_269025 = G__269042;
i__269022_269026 = G__269043;
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
}catch (e269045){if((e269045 instanceof Error))
{var e = e269045;console.groupCollapsed("Caught exception",e);
console.log("Was applying function\n",f);
console.log("With arguments",cljs.core.pr_str.call(null,args));
console.log("Re-throwing error...");
console.groupEnd();
throw e;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e269045;
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
log_exceptions.cljs$lang$applyTo = (function (arglist__269046){
var f = cljs.core.first(arglist__269046);
var args = cljs.core.rest(arglist__269046);
return log_exceptions__delegate(f,args);
});
log_exceptions.cljs$core$IFn$_invoke$arity$variadic = log_exceptions__delegate;
return log_exceptions;
})()
;

//# sourceMappingURL=util.js.map