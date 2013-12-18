// Compiled by ClojureScript 0.0-2120
goog.provide('foundation.app.util');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.reader');
foundation.app.util._STAR_debug_STAR_ = false;
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
}catch (e40631){if((e40631 instanceof Error))
{var _ = e40631;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e40631;
} else
{return null;
}
}
}} else
{return x;
}
});
foundation.app.util.log_group = (function log_group(group_name,coll){console.group(group_name);
var seq__40636_40640 = cljs.core.seq.call(null,coll);var chunk__40637_40641 = null;var count__40638_40642 = 0;var i__40639_40643 = 0;while(true){
if((i__40639_40643 < count__40638_40642))
{var d_40644 = cljs.core._nth.call(null,chunk__40637_40641,i__40639_40643);console.log(cljs.core.pr_str.call(null,cljs.core.vec.call(null,cljs.core.take.call(null,2,d_40644))));
{
var G__40645 = seq__40636_40640;
var G__40646 = chunk__40637_40641;
var G__40647 = count__40638_40642;
var G__40648 = (i__40639_40643 + 1);
seq__40636_40640 = G__40645;
chunk__40637_40641 = G__40646;
count__40638_40642 = G__40647;
i__40639_40643 = G__40648;
continue;
}
} else
{var temp__4092__auto___40649 = cljs.core.seq.call(null,seq__40636_40640);if(temp__4092__auto___40649)
{var seq__40636_40650__$1 = temp__4092__auto___40649;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40636_40650__$1))
{var c__8974__auto___40651 = cljs.core.chunk_first.call(null,seq__40636_40650__$1);{
var G__40652 = cljs.core.chunk_rest.call(null,seq__40636_40650__$1);
var G__40653 = c__8974__auto___40651;
var G__40654 = cljs.core.count.call(null,c__8974__auto___40651);
var G__40655 = 0;
seq__40636_40640 = G__40652;
chunk__40637_40641 = G__40653;
count__40638_40642 = G__40654;
i__40639_40643 = G__40655;
continue;
}
} else
{var d_40656 = cljs.core.first.call(null,seq__40636_40650__$1);console.log(cljs.core.pr_str.call(null,cljs.core.vec.call(null,cljs.core.take.call(null,2,d_40656))));
{
var G__40657 = cljs.core.next.call(null,seq__40636_40650__$1);
var G__40658 = null;
var G__40659 = 0;
var G__40660 = 0;
seq__40636_40640 = G__40657;
chunk__40637_40641 = G__40658;
count__40638_40642 = G__40659;
i__40639_40643 = G__40660;
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
}catch (e40662){if((e40662 instanceof Error))
{var e = e40662;console.groupCollapsed("Caught exception",e);
console.log("Was applying function\n",f);
console.log("With arguments",cljs.core.pr_str.call(null,args));
console.log("Re-throwing error...");
console.groupEnd();
throw e;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e40662;
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
log_exceptions.cljs$lang$applyTo = (function (arglist__40663){
var f = cljs.core.first(arglist__40663);
var args = cljs.core.rest(arglist__40663);
return log_exceptions__delegate(f,args);
});
log_exceptions.cljs$core$IFn$_invoke$arity$variadic = log_exceptions__delegate;
return log_exceptions;
})()
;

//# sourceMappingURL=util.js.map