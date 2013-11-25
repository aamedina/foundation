// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.app.observers');
goog.require('cljs.core');
foundation.app.observers.listeners = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
foundation.app.observers.publish = (function publish(topic,message){var seq__50600 = cljs.core.seq.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,foundation.app.observers.listeners),topic));var chunk__50601 = null;var count__50602 = 0;var i__50603 = 0;while(true){
if((i__50603 < count__50602))
{var f = cljs.core._nth.call(null,chunk__50601,i__50603);f.call(null,message);
{
var G__50604 = seq__50600;
var G__50605 = chunk__50601;
var G__50606 = count__50602;
var G__50607 = (i__50603 + 1);
seq__50600 = G__50604;
chunk__50601 = G__50605;
count__50602 = G__50606;
i__50603 = G__50607;
continue;
}
} else
{var temp__4098__auto__ = cljs.core.seq.call(null,seq__50600);if(temp__4098__auto__)
{var seq__50600__$1 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50600__$1))
{var c__7028__auto__ = cljs.core.chunk_first.call(null,seq__50600__$1);{
var G__50608 = cljs.core.chunk_rest.call(null,seq__50600__$1);
var G__50609 = c__7028__auto__;
var G__50610 = cljs.core.count.call(null,c__7028__auto__);
var G__50611 = 0;
seq__50600 = G__50608;
chunk__50601 = G__50609;
count__50602 = G__50610;
i__50603 = G__50611;
continue;
}
} else
{var f = cljs.core.first.call(null,seq__50600__$1);f.call(null,message);
{
var G__50612 = cljs.core.next.call(null,seq__50600__$1);
var G__50613 = null;
var G__50614 = 0;
var G__50615 = 0;
seq__50600 = G__50612;
chunk__50601 = G__50613;
count__50602 = G__50614;
i__50603 = G__50615;
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
