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
}catch (e77867){if((e77867 instanceof Error))
{var _ = e77867;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e77867;
} else
{return null;
}
}
}} else
{return x;
}
});
foundation.app.util.log_group = (function log_group(group_name,coll){console.group(group_name);
var seq__77872_77876 = cljs.core.seq.call(null,coll);var chunk__77873_77877 = null;var count__77874_77878 = 0;var i__77875_77879 = 0;while(true){
if((i__77875_77879 < count__77874_77878))
{var d_77880 = cljs.core._nth.call(null,chunk__77873_77877,i__77875_77879);console.log(cljs.core.pr_str.call(null,d_77880));
{
var G__77881 = seq__77872_77876;
var G__77882 = chunk__77873_77877;
var G__77883 = count__77874_77878;
var G__77884 = (i__77875_77879 + 1);
seq__77872_77876 = G__77881;
chunk__77873_77877 = G__77882;
count__77874_77878 = G__77883;
i__77875_77879 = G__77884;
continue;
}
} else
{var temp__4092__auto___77885 = cljs.core.seq.call(null,seq__77872_77876);if(temp__4092__auto___77885)
{var seq__77872_77886__$1 = temp__4092__auto___77885;if(cljs.core.chunked_seq_QMARK_.call(null,seq__77872_77886__$1))
{var c__14545__auto___77887 = cljs.core.chunk_first.call(null,seq__77872_77886__$1);{
var G__77888 = cljs.core.chunk_rest.call(null,seq__77872_77886__$1);
var G__77889 = c__14545__auto___77887;
var G__77890 = cljs.core.count.call(null,c__14545__auto___77887);
var G__77891 = 0;
seq__77872_77876 = G__77888;
chunk__77873_77877 = G__77889;
count__77874_77878 = G__77890;
i__77875_77879 = G__77891;
continue;
}
} else
{var d_77892 = cljs.core.first.call(null,seq__77872_77886__$1);console.log(cljs.core.pr_str.call(null,d_77892));
{
var G__77893 = cljs.core.next.call(null,seq__77872_77886__$1);
var G__77894 = null;
var G__77895 = 0;
var G__77896 = 0;
seq__77872_77876 = G__77893;
chunk__77873_77877 = G__77894;
count__77874_77878 = G__77895;
i__77875_77879 = G__77896;
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
}catch (e77898){if((e77898 instanceof Error))
{var e = e77898;console.groupCollapsed("Caught exception",e);
console.log("Was applying function\n",f);
console.log("With arguments",cljs.core.pr_str.call(null,args));
console.log("Re-throwing error...");
console.groupEnd();
throw e;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e77898;
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
log_exceptions.cljs$lang$applyTo = (function (arglist__77899){
var f = cljs.core.first(arglist__77899);
var args = cljs.core.rest(arglist__77899);
return log_exceptions__delegate(f,args);
});
log_exceptions.cljs$core$IFn$_invoke$arity$variadic = log_exceptions__delegate;
return log_exceptions;
})()
;
foundation.app.util.vec_unless_seqable = (function vec_unless_seqable(x){try{cljs.core.seq.call(null,x);
return x;
}catch (e77901){if((e77901 instanceof Error))
{var e = e77901;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e77901;
} else
{return null;
}
}
}});

//# sourceMappingURL=util.js.map