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
}catch (e378828){if((e378828 instanceof Error))
{var _ = e378828;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e378828;
} else
{return null;
}
}
}} else
{return x;
}
});
foundation.app.util.log_group = (function log_group(group_name,coll){console.group(group_name);
var seq__378833_378837 = cljs.core.seq.call(null,coll);var chunk__378834_378838 = null;var count__378835_378839 = 0;var i__378836_378840 = 0;while(true){
if((i__378836_378840 < count__378835_378839))
{var d_378841 = cljs.core._nth.call(null,chunk__378834_378838,i__378836_378840);console.log(cljs.core.pr_str.call(null,cljs.core.vec.call(null,cljs.core.take.call(null,2,d_378841))));
{
var G__378842 = seq__378833_378837;
var G__378843 = chunk__378834_378838;
var G__378844 = count__378835_378839;
var G__378845 = (i__378836_378840 + 1);
seq__378833_378837 = G__378842;
chunk__378834_378838 = G__378843;
count__378835_378839 = G__378844;
i__378836_378840 = G__378845;
continue;
}
} else
{var temp__4092__auto___378846 = cljs.core.seq.call(null,seq__378833_378837);if(temp__4092__auto___378846)
{var seq__378833_378847__$1 = temp__4092__auto___378846;if(cljs.core.chunked_seq_QMARK_.call(null,seq__378833_378847__$1))
{var c__14708__auto___378848 = cljs.core.chunk_first.call(null,seq__378833_378847__$1);{
var G__378849 = cljs.core.chunk_rest.call(null,seq__378833_378847__$1);
var G__378850 = c__14708__auto___378848;
var G__378851 = cljs.core.count.call(null,c__14708__auto___378848);
var G__378852 = 0;
seq__378833_378837 = G__378849;
chunk__378834_378838 = G__378850;
count__378835_378839 = G__378851;
i__378836_378840 = G__378852;
continue;
}
} else
{var d_378853 = cljs.core.first.call(null,seq__378833_378847__$1);console.log(cljs.core.pr_str.call(null,cljs.core.vec.call(null,cljs.core.take.call(null,2,d_378853))));
{
var G__378854 = cljs.core.next.call(null,seq__378833_378847__$1);
var G__378855 = null;
var G__378856 = 0;
var G__378857 = 0;
seq__378833_378837 = G__378854;
chunk__378834_378838 = G__378855;
count__378835_378839 = G__378856;
i__378836_378840 = G__378857;
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
}catch (e378859){if((e378859 instanceof Error))
{var e = e378859;console.groupCollapsed("Caught exception",e);
console.log("Was applying function\n",f);
console.log("With arguments",cljs.core.pr_str.call(null,args));
console.log("Re-throwing error...");
console.groupEnd();
throw e;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e378859;
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
log_exceptions.cljs$lang$applyTo = (function (arglist__378860){
var f = cljs.core.first(arglist__378860);
var args = cljs.core.rest(arglist__378860);
return log_exceptions__delegate(f,args);
});
log_exceptions.cljs$core$IFn$_invoke$arity$variadic = log_exceptions__delegate;
return log_exceptions;
})()
;
foundation.app.util.vec_unless_seqable = (function vec_unless_seqable(x){try{cljs.core.seq.call(null,x);
return x;
}catch (e378862){if((e378862 instanceof Error))
{var e = e378862;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e378862;
} else
{return null;
}
}
}});

//# sourceMappingURL=util.js.map