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
}catch (e351785){if((e351785 instanceof Error))
{var _ = e351785;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e351785;
} else
{return null;
}
}
}} else
{return x;
}
});
foundation.app.util.log_group = (function log_group(group_name,coll){console.group(group_name);
var seq__351790_351794 = cljs.core.seq.call(null,coll);var chunk__351791_351795 = null;var count__351792_351796 = 0;var i__351793_351797 = 0;while(true){
if((i__351793_351797 < count__351792_351796))
{var d_351798 = cljs.core._nth.call(null,chunk__351791_351795,i__351793_351797);console.log(cljs.core.pr_str.call(null,cljs.core.vec.call(null,cljs.core.take.call(null,2,d_351798))));
{
var G__351799 = seq__351790_351794;
var G__351800 = chunk__351791_351795;
var G__351801 = count__351792_351796;
var G__351802 = (i__351793_351797 + 1);
seq__351790_351794 = G__351799;
chunk__351791_351795 = G__351800;
count__351792_351796 = G__351801;
i__351793_351797 = G__351802;
continue;
}
} else
{var temp__4092__auto___351803 = cljs.core.seq.call(null,seq__351790_351794);if(temp__4092__auto___351803)
{var seq__351790_351804__$1 = temp__4092__auto___351803;if(cljs.core.chunked_seq_QMARK_.call(null,seq__351790_351804__$1))
{var c__14708__auto___351805 = cljs.core.chunk_first.call(null,seq__351790_351804__$1);{
var G__351806 = cljs.core.chunk_rest.call(null,seq__351790_351804__$1);
var G__351807 = c__14708__auto___351805;
var G__351808 = cljs.core.count.call(null,c__14708__auto___351805);
var G__351809 = 0;
seq__351790_351794 = G__351806;
chunk__351791_351795 = G__351807;
count__351792_351796 = G__351808;
i__351793_351797 = G__351809;
continue;
}
} else
{var d_351810 = cljs.core.first.call(null,seq__351790_351804__$1);console.log(cljs.core.pr_str.call(null,cljs.core.vec.call(null,cljs.core.take.call(null,2,d_351810))));
{
var G__351811 = cljs.core.next.call(null,seq__351790_351804__$1);
var G__351812 = null;
var G__351813 = 0;
var G__351814 = 0;
seq__351790_351794 = G__351811;
chunk__351791_351795 = G__351812;
count__351792_351796 = G__351813;
i__351793_351797 = G__351814;
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
}catch (e351816){if((e351816 instanceof Error))
{var e = e351816;console.groupCollapsed("Caught exception",e);
console.log("Was applying function\n",f);
console.log("With arguments",cljs.core.pr_str.call(null,args));
console.log("Re-throwing error...");
console.groupEnd();
throw e;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e351816;
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
log_exceptions.cljs$lang$applyTo = (function (arglist__351817){
var f = cljs.core.first(arglist__351817);
var args = cljs.core.rest(arglist__351817);
return log_exceptions__delegate(f,args);
});
log_exceptions.cljs$core$IFn$_invoke$arity$variadic = log_exceptions__delegate;
return log_exceptions;
})()
;
foundation.app.util.vec_unless_seqable = (function vec_unless_seqable(x){try{cljs.core.seq.call(null,x);
return x;
}catch (e351819){if((e351819 instanceof Error))
{var e = e351819;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e351819;
} else
{return null;
}
}
}});

//# sourceMappingURL=util.js.map