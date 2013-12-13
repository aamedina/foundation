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
}catch (e85768){if((e85768 instanceof Error))
{var _ = e85768;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e85768;
} else
{return null;
}
}
}} else
{return x;
}
});
foundation.app.util.log_group = (function log_group(group_name,coll){console.group(group_name);
var seq__85773_85777 = cljs.core.seq.call(null,coll);var chunk__85774_85778 = null;var count__85775_85779 = 0;var i__85776_85780 = 0;while(true){
if((i__85776_85780 < count__85775_85779))
{var d_85781 = cljs.core._nth.call(null,chunk__85774_85778,i__85776_85780);console.log(cljs.core.pr_str.call(null,d_85781));
{
var G__85782 = seq__85773_85777;
var G__85783 = chunk__85774_85778;
var G__85784 = count__85775_85779;
var G__85785 = (i__85776_85780 + 1);
seq__85773_85777 = G__85782;
chunk__85774_85778 = G__85783;
count__85775_85779 = G__85784;
i__85776_85780 = G__85785;
continue;
}
} else
{var temp__4092__auto___85786 = cljs.core.seq.call(null,seq__85773_85777);if(temp__4092__auto___85786)
{var seq__85773_85787__$1 = temp__4092__auto___85786;if(cljs.core.chunked_seq_QMARK_.call(null,seq__85773_85787__$1))
{var c__14549__auto___85788 = cljs.core.chunk_first.call(null,seq__85773_85787__$1);{
var G__85789 = cljs.core.chunk_rest.call(null,seq__85773_85787__$1);
var G__85790 = c__14549__auto___85788;
var G__85791 = cljs.core.count.call(null,c__14549__auto___85788);
var G__85792 = 0;
seq__85773_85777 = G__85789;
chunk__85774_85778 = G__85790;
count__85775_85779 = G__85791;
i__85776_85780 = G__85792;
continue;
}
} else
{var d_85793 = cljs.core.first.call(null,seq__85773_85787__$1);console.log(cljs.core.pr_str.call(null,d_85793));
{
var G__85794 = cljs.core.next.call(null,seq__85773_85787__$1);
var G__85795 = null;
var G__85796 = 0;
var G__85797 = 0;
seq__85773_85777 = G__85794;
chunk__85774_85778 = G__85795;
count__85775_85779 = G__85796;
i__85776_85780 = G__85797;
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
}catch (e85799){if((e85799 instanceof Error))
{var e = e85799;console.groupCollapsed("Caught exception",e);
console.log("Was applying function\n",f);
console.log("With arguments",cljs.core.pr_str.call(null,args));
console.log("Re-throwing error...");
console.groupEnd();
throw e;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e85799;
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
log_exceptions.cljs$lang$applyTo = (function (arglist__85800){
var f = cljs.core.first(arglist__85800);
var args = cljs.core.rest(arglist__85800);
return log_exceptions__delegate(f,args);
});
log_exceptions.cljs$core$IFn$_invoke$arity$variadic = log_exceptions__delegate;
return log_exceptions;
})()
;
foundation.app.util.vec_unless_seqable = (function vec_unless_seqable(x){try{cljs.core.seq.call(null,x);
return x;
}catch (e85802){if((e85802 instanceof Error))
{var e = e85802;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e85802;
} else
{return null;
}
}
}});

//# sourceMappingURL=util.js.map