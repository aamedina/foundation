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
}catch (e49696){if((e49696 instanceof Error))
{var _ = e49696;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e49696;
} else
{return null;
}
}
}} else
{return x;
}
});
foundation.app.util.log_group = (function log_group(group_name,coll){console.group(group_name);
var seq__49701_49705 = cljs.core.seq.call(null,coll);var chunk__49702_49706 = null;var count__49703_49707 = 0;var i__49704_49708 = 0;while(true){
if((i__49704_49708 < count__49703_49707))
{var d_49709 = cljs.core._nth.call(null,chunk__49702_49706,i__49704_49708);console.log(cljs.core.pr_str.call(null,d_49709));
{
var G__49710 = seq__49701_49705;
var G__49711 = chunk__49702_49706;
var G__49712 = count__49703_49707;
var G__49713 = (i__49704_49708 + 1);
seq__49701_49705 = G__49710;
chunk__49702_49706 = G__49711;
count__49703_49707 = G__49712;
i__49704_49708 = G__49713;
continue;
}
} else
{var temp__4092__auto___49714 = cljs.core.seq.call(null,seq__49701_49705);if(temp__4092__auto___49714)
{var seq__49701_49715__$1 = temp__4092__auto___49714;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49701_49715__$1))
{var c__8952__auto___49716 = cljs.core.chunk_first.call(null,seq__49701_49715__$1);{
var G__49717 = cljs.core.chunk_rest.call(null,seq__49701_49715__$1);
var G__49718 = c__8952__auto___49716;
var G__49719 = cljs.core.count.call(null,c__8952__auto___49716);
var G__49720 = 0;
seq__49701_49705 = G__49717;
chunk__49702_49706 = G__49718;
count__49703_49707 = G__49719;
i__49704_49708 = G__49720;
continue;
}
} else
{var d_49721 = cljs.core.first.call(null,seq__49701_49715__$1);console.log(cljs.core.pr_str.call(null,d_49721));
{
var G__49722 = cljs.core.next.call(null,seq__49701_49715__$1);
var G__49723 = null;
var G__49724 = 0;
var G__49725 = 0;
seq__49701_49705 = G__49722;
chunk__49702_49706 = G__49723;
count__49703_49707 = G__49724;
i__49704_49708 = G__49725;
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
}catch (e49727){if((e49727 instanceof Error))
{var e = e49727;console.groupCollapsed("Caught exception",e);
console.log("Was applying function\n",f);
console.log("With arguments",cljs.core.pr_str.call(null,args));
console.log("Re-throwing error...");
console.groupEnd();
throw e;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e49727;
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
log_exceptions.cljs$lang$applyTo = (function (arglist__49728){
var f = cljs.core.first(arglist__49728);
var args = cljs.core.rest(arglist__49728);
return log_exceptions__delegate(f,args);
});
log_exceptions.cljs$core$IFn$_invoke$arity$variadic = log_exceptions__delegate;
return log_exceptions;
})()
;

//# sourceMappingURL=util.js.map