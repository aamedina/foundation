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
}catch (e40671){if((e40671 instanceof Error))
{var _ = e40671;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e40671;
} else
{return null;
}
}
}} else
{return x;
}
});
foundation.app.util.log_group = (function log_group(group_name,coll){console.group(group_name);
var seq__40676_40680 = cljs.core.seq.call(null,coll);var chunk__40677_40681 = null;var count__40678_40682 = 0;var i__40679_40683 = 0;while(true){
if((i__40679_40683 < count__40678_40682))
{var d_40684 = cljs.core._nth.call(null,chunk__40677_40681,i__40679_40683);console.log(cljs.core.pr_str.call(null,cljs.core.vec.call(null,cljs.core.take.call(null,2,d_40684))));
{
var G__40685 = seq__40676_40680;
var G__40686 = chunk__40677_40681;
var G__40687 = count__40678_40682;
var G__40688 = (i__40679_40683 + 1);
seq__40676_40680 = G__40685;
chunk__40677_40681 = G__40686;
count__40678_40682 = G__40687;
i__40679_40683 = G__40688;
continue;
}
} else
{var temp__4092__auto___40689 = cljs.core.seq.call(null,seq__40676_40680);if(temp__4092__auto___40689)
{var seq__40676_40690__$1 = temp__4092__auto___40689;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40676_40690__$1))
{var c__8927__auto___40691 = cljs.core.chunk_first.call(null,seq__40676_40690__$1);{
var G__40692 = cljs.core.chunk_rest.call(null,seq__40676_40690__$1);
var G__40693 = c__8927__auto___40691;
var G__40694 = cljs.core.count.call(null,c__8927__auto___40691);
var G__40695 = 0;
seq__40676_40680 = G__40692;
chunk__40677_40681 = G__40693;
count__40678_40682 = G__40694;
i__40679_40683 = G__40695;
continue;
}
} else
{var d_40696 = cljs.core.first.call(null,seq__40676_40690__$1);console.log(cljs.core.pr_str.call(null,cljs.core.vec.call(null,cljs.core.take.call(null,2,d_40696))));
{
var G__40697 = cljs.core.next.call(null,seq__40676_40690__$1);
var G__40698 = null;
var G__40699 = 0;
var G__40700 = 0;
seq__40676_40680 = G__40697;
chunk__40677_40681 = G__40698;
count__40678_40682 = G__40699;
i__40679_40683 = G__40700;
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
}catch (e40702){if((e40702 instanceof Error))
{var e = e40702;console.groupCollapsed("Caught exception",e);
console.log("Was applying function\n",f);
console.log("With arguments",cljs.core.pr_str.call(null,args));
console.log("Re-throwing error...");
console.groupEnd();
throw e;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e40702;
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
log_exceptions.cljs$lang$applyTo = (function (arglist__40703){
var f = cljs.core.first(arglist__40703);
var args = cljs.core.rest(arglist__40703);
return log_exceptions__delegate(f,args);
});
log_exceptions.cljs$core$IFn$_invoke$arity$variadic = log_exceptions__delegate;
return log_exceptions;
})()
;

//# sourceMappingURL=util.js.map