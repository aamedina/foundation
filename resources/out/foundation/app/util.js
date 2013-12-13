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
}catch (e37040){if((e37040 instanceof Error))
{var _ = e37040;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37040;
} else
{return null;
}
}
}} else
{return x;
}
});
foundation.app.util.log_group = (function log_group(group_name,coll){console.group(group_name);
var seq__37045_37049 = cljs.core.seq.call(null,coll);var chunk__37046_37050 = null;var count__37047_37051 = 0;var i__37048_37052 = 0;while(true){
if((i__37048_37052 < count__37047_37051))
{var d_37053 = cljs.core._nth.call(null,chunk__37046_37050,i__37048_37052);console.log(cljs.core.pr_str.call(null,d_37053));
{
var G__37054 = seq__37045_37049;
var G__37055 = chunk__37046_37050;
var G__37056 = count__37047_37051;
var G__37057 = (i__37048_37052 + 1);
seq__37045_37049 = G__37054;
chunk__37046_37050 = G__37055;
count__37047_37051 = G__37056;
i__37048_37052 = G__37057;
continue;
}
} else
{var temp__4092__auto___37058 = cljs.core.seq.call(null,seq__37045_37049);if(temp__4092__auto___37058)
{var seq__37045_37059__$1 = temp__4092__auto___37058;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37045_37059__$1))
{var c__14512__auto___37060 = cljs.core.chunk_first.call(null,seq__37045_37059__$1);{
var G__37061 = cljs.core.chunk_rest.call(null,seq__37045_37059__$1);
var G__37062 = c__14512__auto___37060;
var G__37063 = cljs.core.count.call(null,c__14512__auto___37060);
var G__37064 = 0;
seq__37045_37049 = G__37061;
chunk__37046_37050 = G__37062;
count__37047_37051 = G__37063;
i__37048_37052 = G__37064;
continue;
}
} else
{var d_37065 = cljs.core.first.call(null,seq__37045_37059__$1);console.log(cljs.core.pr_str.call(null,d_37065));
{
var G__37066 = cljs.core.next.call(null,seq__37045_37059__$1);
var G__37067 = null;
var G__37068 = 0;
var G__37069 = 0;
seq__37045_37049 = G__37066;
chunk__37046_37050 = G__37067;
count__37047_37051 = G__37068;
i__37048_37052 = G__37069;
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
}catch (e37071){if((e37071 instanceof Error))
{var e = e37071;console.groupCollapsed("Caught exception",e);
console.log("Was applying function\n",f);
console.log("With arguments",cljs.core.pr_str.call(null,args));
console.log("Re-throwing error...");
console.groupEnd();
throw e;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37071;
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
log_exceptions.cljs$lang$applyTo = (function (arglist__37072){
var f = cljs.core.first(arglist__37072);
var args = cljs.core.rest(arglist__37072);
return log_exceptions__delegate(f,args);
});
log_exceptions.cljs$core$IFn$_invoke$arity$variadic = log_exceptions__delegate;
return log_exceptions;
})()
;
foundation.app.util.vec_unless_seqable = (function vec_unless_seqable(x){try{cljs.core.seq.call(null,x);
return x;
}catch (e37074){if((e37074 instanceof Error))
{var e = e37074;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37074;
} else
{return null;
}
}
}});

//# sourceMappingURL=util.js.map