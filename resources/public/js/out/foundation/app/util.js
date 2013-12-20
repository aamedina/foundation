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
}catch (e399631){if((e399631 instanceof Error))
{var _ = e399631;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e399631;
} else
{return null;
}
}
}} else
{return x;
}
});
foundation.app.util.log_group = (function log_group(group_name,coll){console.group(group_name);
var seq__399636_399640 = cljs.core.seq.call(null,coll);var chunk__399637_399641 = null;var count__399638_399642 = 0;var i__399639_399643 = 0;while(true){
if((i__399639_399643 < count__399638_399642))
{var d_399644 = cljs.core._nth.call(null,chunk__399637_399641,i__399639_399643);console.log(cljs.core.pr_str.call(null,d_399644));
{
var G__399645 = seq__399636_399640;
var G__399646 = chunk__399637_399641;
var G__399647 = count__399638_399642;
var G__399648 = (i__399639_399643 + 1);
seq__399636_399640 = G__399645;
chunk__399637_399641 = G__399646;
count__399638_399642 = G__399647;
i__399639_399643 = G__399648;
continue;
}
} else
{var temp__4092__auto___399649 = cljs.core.seq.call(null,seq__399636_399640);if(temp__4092__auto___399649)
{var seq__399636_399650__$1 = temp__4092__auto___399649;if(cljs.core.chunked_seq_QMARK_.call(null,seq__399636_399650__$1))
{var c__8952__auto___399651 = cljs.core.chunk_first.call(null,seq__399636_399650__$1);{
var G__399652 = cljs.core.chunk_rest.call(null,seq__399636_399650__$1);
var G__399653 = c__8952__auto___399651;
var G__399654 = cljs.core.count.call(null,c__8952__auto___399651);
var G__399655 = 0;
seq__399636_399640 = G__399652;
chunk__399637_399641 = G__399653;
count__399638_399642 = G__399654;
i__399639_399643 = G__399655;
continue;
}
} else
{var d_399656 = cljs.core.first.call(null,seq__399636_399650__$1);console.log(cljs.core.pr_str.call(null,d_399656));
{
var G__399657 = cljs.core.next.call(null,seq__399636_399650__$1);
var G__399658 = null;
var G__399659 = 0;
var G__399660 = 0;
seq__399636_399640 = G__399657;
chunk__399637_399641 = G__399658;
count__399638_399642 = G__399659;
i__399639_399643 = G__399660;
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
}catch (e399662){if((e399662 instanceof Error))
{var e = e399662;console.groupCollapsed("Caught exception",e);
console.log("Was applying function\n",f);
console.log("With arguments",cljs.core.pr_str.call(null,args));
console.log("Re-throwing error...");
console.groupEnd();
throw e;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e399662;
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
log_exceptions.cljs$lang$applyTo = (function (arglist__399663){
var f = cljs.core.first(arglist__399663);
var args = cljs.core.rest(arglist__399663);
return log_exceptions__delegate(f,args);
});
log_exceptions.cljs$core$IFn$_invoke$arity$variadic = log_exceptions__delegate;
return log_exceptions;
})()
;

//# sourceMappingURL=util.js.map