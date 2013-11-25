// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.app.observers');
goog.require('cljs.core');
foundation.app.observers.listeners = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
foundation.app.observers.publish = (function publish(topic,message){var seq__41440 = cljs.core.seq.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,foundation.app.observers.listeners),topic));var chunk__41441 = null;var count__41442 = 0;var i__41443 = 0;while(true){
if((i__41443 < count__41442))
{var f = cljs.core._nth.call(null,chunk__41441,i__41443);f.call(null,message);
{
var G__41444 = seq__41440;
var G__41445 = chunk__41441;
var G__41446 = count__41442;
var G__41447 = (i__41443 + 1);
seq__41440 = G__41444;
chunk__41441 = G__41445;
count__41442 = G__41446;
i__41443 = G__41447;
continue;
}
} else
{var temp__4098__auto__ = cljs.core.seq.call(null,seq__41440);if(temp__4098__auto__)
{var seq__41440__$1 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__41440__$1))
{var c__7028__auto__ = cljs.core.chunk_first.call(null,seq__41440__$1);{
var G__41448 = cljs.core.chunk_rest.call(null,seq__41440__$1);
var G__41449 = c__7028__auto__;
var G__41450 = cljs.core.count.call(null,c__7028__auto__);
var G__41451 = 0;
seq__41440 = G__41448;
chunk__41441 = G__41449;
count__41442 = G__41450;
i__41443 = G__41451;
continue;
}
} else
{var f = cljs.core.first.call(null,seq__41440__$1);f.call(null,message);
{
var G__41452 = cljs.core.next.call(null,seq__41440__$1);
var G__41453 = null;
var G__41454 = 0;
var G__41455 = 0;
seq__41440 = G__41452;
chunk__41441 = G__41453;
count__41442 = G__41454;
i__41443 = G__41455;
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
