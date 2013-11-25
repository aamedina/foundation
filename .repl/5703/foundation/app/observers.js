// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.app.observers');
goog.require('cljs.core');
foundation.app.observers.listeners = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
foundation.app.observers.publish = (function publish(topic,message){var seq__32154 = cljs.core.seq.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,foundation.app.observers.listeners),topic));var chunk__32155 = null;var count__32156 = 0;var i__32157 = 0;while(true){
if((i__32157 < count__32156))
{var f = cljs.core._nth.call(null,chunk__32155,i__32157);f.call(null,message);
{
var G__32158 = seq__32154;
var G__32159 = chunk__32155;
var G__32160 = count__32156;
var G__32161 = (i__32157 + 1);
seq__32154 = G__32158;
chunk__32155 = G__32159;
count__32156 = G__32160;
i__32157 = G__32161;
continue;
}
} else
{var temp__4098__auto__ = cljs.core.seq.call(null,seq__32154);if(temp__4098__auto__)
{var seq__32154__$1 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32154__$1))
{var c__7028__auto__ = cljs.core.chunk_first.call(null,seq__32154__$1);{
var G__32166 = cljs.core.chunk_rest.call(null,seq__32154__$1);
var G__32167 = c__7028__auto__;
var G__32168 = cljs.core.count.call(null,c__7028__auto__);
var G__32169 = 0;
seq__32154 = G__32166;
chunk__32155 = G__32167;
count__32156 = G__32168;
i__32157 = G__32169;
continue;
}
} else
{var f = cljs.core.first.call(null,seq__32154__$1);f.call(null,message);
{
var G__32170 = cljs.core.next.call(null,seq__32154__$1);
var G__32171 = null;
var G__32172 = 0;
var G__32173 = 0;
seq__32154 = G__32170;
chunk__32155 = G__32171;
count__32156 = G__32172;
i__32157 = G__32173;
continue;
}
}
} else
{return null;
}
}
break;
}
});
foundation.app.observers.subscribe = (function subscribe(topic,f){return cljs.core.swap_BANG_.call(null,foundation.app.observers.listeners,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [topic], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),f);
});
foundation.app.observers.clear = (function clear(){return cljs.core.reset_BANG_.call(null,foundation.app.observers.listeners,cljs.core.PersistentArrayMap.EMPTY);
});
