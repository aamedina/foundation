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
}catch (e184890){if((e184890 instanceof Error))
{var _ = e184890;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e184890;
} else
{return null;
}
}
}} else
{return x;
}
});
foundation.app.util.log_group = (function log_group(group_name,coll){console.group(group_name);
var seq__184895_184899 = cljs.core.seq.call(null,coll);var chunk__184896_184900 = null;var count__184897_184901 = 0;var i__184898_184902 = 0;while(true){
if((i__184898_184902 < count__184897_184901))
{var d_184903 = cljs.core._nth.call(null,chunk__184896_184900,i__184898_184902);console.log(cljs.core.pr_str.call(null,d_184903));
{
var G__184904 = seq__184895_184899;
var G__184905 = chunk__184896_184900;
var G__184906 = count__184897_184901;
var G__184907 = (i__184898_184902 + 1);
seq__184895_184899 = G__184904;
chunk__184896_184900 = G__184905;
count__184897_184901 = G__184906;
i__184898_184902 = G__184907;
continue;
}
} else
{var temp__4092__auto___184908 = cljs.core.seq.call(null,seq__184895_184899);if(temp__4092__auto___184908)
{var seq__184895_184909__$1 = temp__4092__auto___184908;if(cljs.core.chunked_seq_QMARK_.call(null,seq__184895_184909__$1))
{var c__8952__auto___184910 = cljs.core.chunk_first.call(null,seq__184895_184909__$1);{
var G__184911 = cljs.core.chunk_rest.call(null,seq__184895_184909__$1);
var G__184912 = c__8952__auto___184910;
var G__184913 = cljs.core.count.call(null,c__8952__auto___184910);
var G__184914 = 0;
seq__184895_184899 = G__184911;
chunk__184896_184900 = G__184912;
count__184897_184901 = G__184913;
i__184898_184902 = G__184914;
continue;
}
} else
{var d_184915 = cljs.core.first.call(null,seq__184895_184909__$1);console.log(cljs.core.pr_str.call(null,d_184915));
{
var G__184916 = cljs.core.next.call(null,seq__184895_184909__$1);
var G__184917 = null;
var G__184918 = 0;
var G__184919 = 0;
seq__184895_184899 = G__184916;
chunk__184896_184900 = G__184917;
count__184897_184901 = G__184918;
i__184898_184902 = G__184919;
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
}catch (e184921){if((e184921 instanceof Error))
{var e = e184921;console.groupCollapsed("Caught exception",e);
console.log("Was applying function\n",f);
console.log("With arguments",cljs.core.pr_str.call(null,args));
console.log("Re-throwing error...");
console.groupEnd();
throw e;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e184921;
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
log_exceptions.cljs$lang$applyTo = (function (arglist__184922){
var f = cljs.core.first(arglist__184922);
var args = cljs.core.rest(arglist__184922);
return log_exceptions__delegate(f,args);
});
log_exceptions.cljs$core$IFn$_invoke$arity$variadic = log_exceptions__delegate;
return log_exceptions;
})()
;

//# sourceMappingURL=util.js.map