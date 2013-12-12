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
}catch (e96916){if((e96916 instanceof Error))
{var _ = e96916;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e96916;
} else
{return null;
}
}
}} else
{return x;
}
});
foundation.app.util.log_group = (function log_group(group_name,coll){console.group(group_name);
var seq__96921_96925 = cljs.core.seq.call(null,coll);var chunk__96922_96926 = null;var count__96923_96927 = 0;var i__96924_96928 = 0;while(true){
if((i__96924_96928 < count__96923_96927))
{var d_96929 = cljs.core._nth.call(null,chunk__96922_96926,i__96924_96928);console.log(cljs.core.pr_str.call(null,d_96929));
{
var G__96930 = seq__96921_96925;
var G__96931 = chunk__96922_96926;
var G__96932 = count__96923_96927;
var G__96933 = (i__96924_96928 + 1);
seq__96921_96925 = G__96930;
chunk__96922_96926 = G__96931;
count__96923_96927 = G__96932;
i__96924_96928 = G__96933;
continue;
}
} else
{var temp__4092__auto___96934 = cljs.core.seq.call(null,seq__96921_96925);if(temp__4092__auto___96934)
{var seq__96921_96935__$1 = temp__4092__auto___96934;if(cljs.core.chunked_seq_QMARK_.call(null,seq__96921_96935__$1))
{var c__14546__auto___96936 = cljs.core.chunk_first.call(null,seq__96921_96935__$1);{
var G__96937 = cljs.core.chunk_rest.call(null,seq__96921_96935__$1);
var G__96938 = c__14546__auto___96936;
var G__96939 = cljs.core.count.call(null,c__14546__auto___96936);
var G__96940 = 0;
seq__96921_96925 = G__96937;
chunk__96922_96926 = G__96938;
count__96923_96927 = G__96939;
i__96924_96928 = G__96940;
continue;
}
} else
{var d_96941 = cljs.core.first.call(null,seq__96921_96935__$1);console.log(cljs.core.pr_str.call(null,d_96941));
{
var G__96942 = cljs.core.next.call(null,seq__96921_96935__$1);
var G__96943 = null;
var G__96944 = 0;
var G__96945 = 0;
seq__96921_96925 = G__96942;
chunk__96922_96926 = G__96943;
count__96923_96927 = G__96944;
i__96924_96928 = G__96945;
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
}catch (e96947){if((e96947 instanceof Error))
{var e = e96947;console.groupCollapsed("Caught exception",e);
console.log("Was applying function\n",f);
console.log("With arguments",cljs.core.pr_str.call(null,args));
console.log("Re-throwing error...");
console.groupEnd();
throw e;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e96947;
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
log_exceptions.cljs$lang$applyTo = (function (arglist__96948){
var f = cljs.core.first(arglist__96948);
var args = cljs.core.rest(arglist__96948);
return log_exceptions__delegate(f,args);
});
log_exceptions.cljs$core$IFn$_invoke$arity$variadic = log_exceptions__delegate;
return log_exceptions;
})()
;
foundation.app.util.vec_unless_seqable = (function vec_unless_seqable(x){try{cljs.core.seq.call(null,x);
return x;
}catch (e96950){if((e96950 instanceof Error))
{var e = e96950;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e96950;
} else
{return null;
}
}
}});

//# sourceMappingURL=util.js.map