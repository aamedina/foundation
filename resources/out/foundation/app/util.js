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
}catch (e18005){if((e18005 instanceof Error))
{var _ = e18005;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18005;
} else
{return null;
}
}
}} else
{return x;
}
});
foundation.app.util.log_group = (function log_group(group_name,coll){console.group(group_name);
var seq__18010_18014 = cljs.core.seq.call(null,coll);var chunk__18011_18015 = null;var count__18012_18016 = 0;var i__18013_18017 = 0;while(true){
if((i__18013_18017 < count__18012_18016))
{var d_18018 = cljs.core._nth.call(null,chunk__18011_18015,i__18013_18017);console.log(cljs.core.pr_str.call(null,d_18018));
{
var G__18019 = seq__18010_18014;
var G__18020 = chunk__18011_18015;
var G__18021 = count__18012_18016;
var G__18022 = (i__18013_18017 + 1);
seq__18010_18014 = G__18019;
chunk__18011_18015 = G__18020;
count__18012_18016 = G__18021;
i__18013_18017 = G__18022;
continue;
}
} else
{var temp__4098__auto___18023 = cljs.core.seq.call(null,seq__18010_18014);if(temp__4098__auto___18023)
{var seq__18010_18024__$1 = temp__4098__auto___18023;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18010_18024__$1))
{var c__15907__auto___18025 = cljs.core.chunk_first.call(null,seq__18010_18024__$1);{
var G__18026 = cljs.core.chunk_rest.call(null,seq__18010_18024__$1);
var G__18027 = c__15907__auto___18025;
var G__18028 = cljs.core.count.call(null,c__15907__auto___18025);
var G__18029 = 0;
seq__18010_18014 = G__18026;
chunk__18011_18015 = G__18027;
count__18012_18016 = G__18028;
i__18013_18017 = G__18029;
continue;
}
} else
{var d_18030 = cljs.core.first.call(null,seq__18010_18024__$1);console.log(cljs.core.pr_str.call(null,d_18030));
{
var G__18031 = cljs.core.next.call(null,seq__18010_18024__$1);
var G__18032 = null;
var G__18033 = 0;
var G__18034 = 0;
seq__18010_18014 = G__18031;
chunk__18011_18015 = G__18032;
count__18012_18016 = G__18033;
i__18013_18017 = G__18034;
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
}catch (e18036){if((e18036 instanceof Error))
{var e = e18036;console.groupCollapsed("Caught exception",e);
console.log("Was applying function\n",f);
console.log("With arguments",cljs.core.pr_str.call(null,args));
console.log("Re-throwing error...");
console.groupEnd();
throw e;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18036;
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
log_exceptions.cljs$lang$applyTo = (function (arglist__18037){
var f = cljs.core.first(arglist__18037);
var args = cljs.core.rest(arglist__18037);
return log_exceptions__delegate(f,args);
});
log_exceptions.cljs$core$IFn$_invoke$arity$variadic = log_exceptions__delegate;
return log_exceptions;
})()
;
foundation.app.util.vec_unless_seqable = (function vec_unless_seqable(x){try{cljs.core.seq.call(null,x);
return x;
}catch (e18039){if((e18039 instanceof Error))
{var e = e18039;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18039;
} else
{return null;
}
}
}});

//# sourceMappingURL=util.js.map