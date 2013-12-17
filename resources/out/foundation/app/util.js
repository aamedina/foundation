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
}catch (e38589){if((e38589 instanceof Error))
{var _ = e38589;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e38589;
} else
{return null;
}
}
}} else
{return x;
}
});
foundation.app.util.log_group = (function log_group(group_name,coll){console.group(group_name);
var seq__38594_38598 = cljs.core.seq.call(null,coll);var chunk__38595_38599 = null;var count__38596_38600 = 0;var i__38597_38601 = 0;while(true){
if((i__38597_38601 < count__38596_38600))
{var d_38602 = cljs.core._nth.call(null,chunk__38595_38599,i__38597_38601);console.log(cljs.core.pr_str.call(null,cljs.core.vec.call(null,cljs.core.take.call(null,2,d_38602))));
{
var G__38603 = seq__38594_38598;
var G__38604 = chunk__38595_38599;
var G__38605 = count__38596_38600;
var G__38606 = (i__38597_38601 + 1);
seq__38594_38598 = G__38603;
chunk__38595_38599 = G__38604;
count__38596_38600 = G__38605;
i__38597_38601 = G__38606;
continue;
}
} else
{var temp__4092__auto___38607 = cljs.core.seq.call(null,seq__38594_38598);if(temp__4092__auto___38607)
{var seq__38594_38608__$1 = temp__4092__auto___38607;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38594_38608__$1))
{var c__14683__auto___38609 = cljs.core.chunk_first.call(null,seq__38594_38608__$1);{
var G__38610 = cljs.core.chunk_rest.call(null,seq__38594_38608__$1);
var G__38611 = c__14683__auto___38609;
var G__38612 = cljs.core.count.call(null,c__14683__auto___38609);
var G__38613 = 0;
seq__38594_38598 = G__38610;
chunk__38595_38599 = G__38611;
count__38596_38600 = G__38612;
i__38597_38601 = G__38613;
continue;
}
} else
{var d_38614 = cljs.core.first.call(null,seq__38594_38608__$1);console.log(cljs.core.pr_str.call(null,cljs.core.vec.call(null,cljs.core.take.call(null,2,d_38614))));
{
var G__38615 = cljs.core.next.call(null,seq__38594_38608__$1);
var G__38616 = null;
var G__38617 = 0;
var G__38618 = 0;
seq__38594_38598 = G__38615;
chunk__38595_38599 = G__38616;
count__38596_38600 = G__38617;
i__38597_38601 = G__38618;
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
}catch (e38620){if((e38620 instanceof Error))
{var e = e38620;console.groupCollapsed("Caught exception",e);
console.log("Was applying function\n",f);
console.log("With arguments",cljs.core.pr_str.call(null,args));
console.log("Re-throwing error...");
console.groupEnd();
throw e;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e38620;
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
log_exceptions.cljs$lang$applyTo = (function (arglist__38621){
var f = cljs.core.first(arglist__38621);
var args = cljs.core.rest(arglist__38621);
return log_exceptions__delegate(f,args);
});
log_exceptions.cljs$core$IFn$_invoke$arity$variadic = log_exceptions__delegate;
return log_exceptions;
})()
;
foundation.app.util.vec_unless_seqable = (function vec_unless_seqable(x){try{cljs.core.seq.call(null,x);
return x;
}catch (e38623){if((e38623 instanceof Error))
{var e = e38623;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e38623;
} else
{return null;
}
}
}});

//# sourceMappingURL=util.js.map