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
}catch (e360917){if((e360917 instanceof Error))
{var _ = e360917;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e360917;
} else
{return null;
}
}
}} else
{return x;
}
});
foundation.app.util.log_group = (function log_group(group_name,coll){console.group(group_name);
var seq__360922_360926 = cljs.core.seq.call(null,coll);var chunk__360923_360927 = null;var count__360924_360928 = 0;var i__360925_360929 = 0;while(true){
if((i__360925_360929 < count__360924_360928))
{var d_360930 = cljs.core._nth.call(null,chunk__360923_360927,i__360925_360929);console.log(cljs.core.pr_str.call(null,cljs.core.vec.call(null,cljs.core.take.call(null,2,d_360930))));
{
var G__360931 = seq__360922_360926;
var G__360932 = chunk__360923_360927;
var G__360933 = count__360924_360928;
var G__360934 = (i__360925_360929 + 1);
seq__360922_360926 = G__360931;
chunk__360923_360927 = G__360932;
count__360924_360928 = G__360933;
i__360925_360929 = G__360934;
continue;
}
} else
{var temp__4092__auto___360935 = cljs.core.seq.call(null,seq__360922_360926);if(temp__4092__auto___360935)
{var seq__360922_360936__$1 = temp__4092__auto___360935;if(cljs.core.chunked_seq_QMARK_.call(null,seq__360922_360936__$1))
{var c__14708__auto___360937 = cljs.core.chunk_first.call(null,seq__360922_360936__$1);{
var G__360938 = cljs.core.chunk_rest.call(null,seq__360922_360936__$1);
var G__360939 = c__14708__auto___360937;
var G__360940 = cljs.core.count.call(null,c__14708__auto___360937);
var G__360941 = 0;
seq__360922_360926 = G__360938;
chunk__360923_360927 = G__360939;
count__360924_360928 = G__360940;
i__360925_360929 = G__360941;
continue;
}
} else
{var d_360942 = cljs.core.first.call(null,seq__360922_360936__$1);console.log(cljs.core.pr_str.call(null,cljs.core.vec.call(null,cljs.core.take.call(null,2,d_360942))));
{
var G__360943 = cljs.core.next.call(null,seq__360922_360936__$1);
var G__360944 = null;
var G__360945 = 0;
var G__360946 = 0;
seq__360922_360926 = G__360943;
chunk__360923_360927 = G__360944;
count__360924_360928 = G__360945;
i__360925_360929 = G__360946;
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
}catch (e360948){if((e360948 instanceof Error))
{var e = e360948;console.groupCollapsed("Caught exception",e);
console.log("Was applying function\n",f);
console.log("With arguments",cljs.core.pr_str.call(null,args));
console.log("Re-throwing error...");
console.groupEnd();
throw e;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e360948;
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
log_exceptions.cljs$lang$applyTo = (function (arglist__360949){
var f = cljs.core.first(arglist__360949);
var args = cljs.core.rest(arglist__360949);
return log_exceptions__delegate(f,args);
});
log_exceptions.cljs$core$IFn$_invoke$arity$variadic = log_exceptions__delegate;
return log_exceptions;
})()
;
foundation.app.util.vec_unless_seqable = (function vec_unless_seqable(x){try{cljs.core.seq.call(null,x);
return x;
}catch (e360951){if((e360951 instanceof Error))
{var e = e360951;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e360951;
} else
{return null;
}
}
}});

//# sourceMappingURL=util.js.map