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
}catch (e28694){if((e28694 instanceof Error))
{var _ = e28694;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28694;
} else
{return null;
}
}
}} else
{return x;
}
});
foundation.app.util.log_group = (function log_group(group_name,coll){console.group(group_name);
var seq__28699_28703 = cljs.core.seq.call(null,coll);var chunk__28700_28704 = null;var count__28701_28705 = 0;var i__28702_28706 = 0;while(true){
if((i__28702_28706 < count__28701_28705))
{var d_28707 = cljs.core._nth.call(null,chunk__28700_28704,i__28702_28706);console.log(cljs.core.pr_str.call(null,d_28707));
{
var G__28708 = seq__28699_28703;
var G__28709 = chunk__28700_28704;
var G__28710 = count__28701_28705;
var G__28711 = (i__28702_28706 + 1);
seq__28699_28703 = G__28708;
chunk__28700_28704 = G__28709;
count__28701_28705 = G__28710;
i__28702_28706 = G__28711;
continue;
}
} else
{var temp__4092__auto___28712 = cljs.core.seq.call(null,seq__28699_28703);if(temp__4092__auto___28712)
{var seq__28699_28713__$1 = temp__4092__auto___28712;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28699_28713__$1))
{var c__14545__auto___28714 = cljs.core.chunk_first.call(null,seq__28699_28713__$1);{
var G__28715 = cljs.core.chunk_rest.call(null,seq__28699_28713__$1);
var G__28716 = c__14545__auto___28714;
var G__28717 = cljs.core.count.call(null,c__14545__auto___28714);
var G__28718 = 0;
seq__28699_28703 = G__28715;
chunk__28700_28704 = G__28716;
count__28701_28705 = G__28717;
i__28702_28706 = G__28718;
continue;
}
} else
{var d_28719 = cljs.core.first.call(null,seq__28699_28713__$1);console.log(cljs.core.pr_str.call(null,d_28719));
{
var G__28720 = cljs.core.next.call(null,seq__28699_28713__$1);
var G__28721 = null;
var G__28722 = 0;
var G__28723 = 0;
seq__28699_28703 = G__28720;
chunk__28700_28704 = G__28721;
count__28701_28705 = G__28722;
i__28702_28706 = G__28723;
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
}catch (e28725){if((e28725 instanceof Error))
{var e = e28725;console.groupCollapsed("Caught exception",e);
console.log("Was applying function\n",f);
console.log("With arguments",cljs.core.pr_str.call(null,args));
console.log("Re-throwing error...");
console.groupEnd();
throw e;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28725;
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
log_exceptions.cljs$lang$applyTo = (function (arglist__28726){
var f = cljs.core.first(arglist__28726);
var args = cljs.core.rest(arglist__28726);
return log_exceptions__delegate(f,args);
});
log_exceptions.cljs$core$IFn$_invoke$arity$variadic = log_exceptions__delegate;
return log_exceptions;
})()
;
foundation.app.util.vec_unless_seqable = (function vec_unless_seqable(x){try{cljs.core.seq.call(null,x);
return x;
}catch (e28728){if((e28728 instanceof Error))
{var e = e28728;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28728;
} else
{return null;
}
}
}});

//# sourceMappingURL=util.js.map