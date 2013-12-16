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
}catch (e36548){if((e36548 instanceof Error))
{var _ = e36548;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36548;
} else
{return null;
}
}
}} else
{return x;
}
});
foundation.app.util.log_group = (function log_group(group_name,coll){console.group(group_name);
var seq__36553_36557 = cljs.core.seq.call(null,coll);var chunk__36554_36558 = null;var count__36555_36559 = 0;var i__36556_36560 = 0;while(true){
if((i__36556_36560 < count__36555_36559))
{var d_36561 = cljs.core._nth.call(null,chunk__36554_36558,i__36556_36560);console.log(cljs.core.pr_str.call(null,cljs.core.vec.call(null,cljs.core.take.call(null,2,d_36561))));
{
var G__36562 = seq__36553_36557;
var G__36563 = chunk__36554_36558;
var G__36564 = count__36555_36559;
var G__36565 = (i__36556_36560 + 1);
seq__36553_36557 = G__36562;
chunk__36554_36558 = G__36563;
count__36555_36559 = G__36564;
i__36556_36560 = G__36565;
continue;
}
} else
{var temp__4092__auto___36566 = cljs.core.seq.call(null,seq__36553_36557);if(temp__4092__auto___36566)
{var seq__36553_36567__$1 = temp__4092__auto___36566;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36553_36567__$1))
{var c__14547__auto___36568 = cljs.core.chunk_first.call(null,seq__36553_36567__$1);{
var G__36569 = cljs.core.chunk_rest.call(null,seq__36553_36567__$1);
var G__36570 = c__14547__auto___36568;
var G__36571 = cljs.core.count.call(null,c__14547__auto___36568);
var G__36572 = 0;
seq__36553_36557 = G__36569;
chunk__36554_36558 = G__36570;
count__36555_36559 = G__36571;
i__36556_36560 = G__36572;
continue;
}
} else
{var d_36573 = cljs.core.first.call(null,seq__36553_36567__$1);console.log(cljs.core.pr_str.call(null,cljs.core.vec.call(null,cljs.core.take.call(null,2,d_36573))));
{
var G__36574 = cljs.core.next.call(null,seq__36553_36567__$1);
var G__36575 = null;
var G__36576 = 0;
var G__36577 = 0;
seq__36553_36557 = G__36574;
chunk__36554_36558 = G__36575;
count__36555_36559 = G__36576;
i__36556_36560 = G__36577;
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
}catch (e36579){if((e36579 instanceof Error))
{var e = e36579;console.groupCollapsed("Caught exception",e);
console.log("Was applying function\n",f);
console.log("With arguments",cljs.core.pr_str.call(null,args));
console.log("Re-throwing error...");
console.groupEnd();
throw e;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36579;
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
log_exceptions.cljs$lang$applyTo = (function (arglist__36580){
var f = cljs.core.first(arglist__36580);
var args = cljs.core.rest(arglist__36580);
return log_exceptions__delegate(f,args);
});
log_exceptions.cljs$core$IFn$_invoke$arity$variadic = log_exceptions__delegate;
return log_exceptions;
})()
;
foundation.app.util.vec_unless_seqable = (function vec_unless_seqable(x){try{cljs.core.seq.call(null,x);
return x;
}catch (e36582){if((e36582 instanceof Error))
{var e = e36582;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36582;
} else
{return null;
}
}
}});

//# sourceMappingURL=util.js.map