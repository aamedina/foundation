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
}catch (e28624){if((e28624 instanceof Error))
{var _ = e28624;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28624;
} else
{return null;
}
}
}} else
{return x;
}
});
foundation.app.util.log_group = (function log_group(group_name,coll){console.group(group_name);
var seq__28629_28633 = cljs.core.seq.call(null,coll);var chunk__28630_28634 = null;var count__28631_28635 = 0;var i__28632_28636 = 0;while(true){
if((i__28632_28636 < count__28631_28635))
{var d_28637 = cljs.core._nth.call(null,chunk__28630_28634,i__28632_28636);console.log(cljs.core.pr_str.call(null,cljs.core.vec.call(null,cljs.core.take.call(null,2,d_28637))));
{
var G__28638 = seq__28629_28633;
var G__28639 = chunk__28630_28634;
var G__28640 = count__28631_28635;
var G__28641 = (i__28632_28636 + 1);
seq__28629_28633 = G__28638;
chunk__28630_28634 = G__28639;
count__28631_28635 = G__28640;
i__28632_28636 = G__28641;
continue;
}
} else
{var temp__4092__auto___28642 = cljs.core.seq.call(null,seq__28629_28633);if(temp__4092__auto___28642)
{var seq__28629_28643__$1 = temp__4092__auto___28642;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28629_28643__$1))
{var c__14547__auto___28644 = cljs.core.chunk_first.call(null,seq__28629_28643__$1);{
var G__28645 = cljs.core.chunk_rest.call(null,seq__28629_28643__$1);
var G__28646 = c__14547__auto___28644;
var G__28647 = cljs.core.count.call(null,c__14547__auto___28644);
var G__28648 = 0;
seq__28629_28633 = G__28645;
chunk__28630_28634 = G__28646;
count__28631_28635 = G__28647;
i__28632_28636 = G__28648;
continue;
}
} else
{var d_28649 = cljs.core.first.call(null,seq__28629_28643__$1);console.log(cljs.core.pr_str.call(null,cljs.core.vec.call(null,cljs.core.take.call(null,2,d_28649))));
{
var G__28650 = cljs.core.next.call(null,seq__28629_28643__$1);
var G__28651 = null;
var G__28652 = 0;
var G__28653 = 0;
seq__28629_28633 = G__28650;
chunk__28630_28634 = G__28651;
count__28631_28635 = G__28652;
i__28632_28636 = G__28653;
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
}catch (e28655){if((e28655 instanceof Error))
{var e = e28655;console.groupCollapsed("Caught exception",e);
console.log("Was applying function\n",f);
console.log("With arguments",cljs.core.pr_str.call(null,args));
console.log("Re-throwing error...");
console.groupEnd();
throw e;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28655;
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
log_exceptions.cljs$lang$applyTo = (function (arglist__28656){
var f = cljs.core.first(arglist__28656);
var args = cljs.core.rest(arglist__28656);
return log_exceptions__delegate(f,args);
});
log_exceptions.cljs$core$IFn$_invoke$arity$variadic = log_exceptions__delegate;
return log_exceptions;
})()
;
foundation.app.util.vec_unless_seqable = (function vec_unless_seqable(x){try{cljs.core.seq.call(null,x);
return x;
}catch (e28658){if((e28658 instanceof Error))
{var e = e28658;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28658;
} else
{return null;
}
}
}});

//# sourceMappingURL=util.js.map