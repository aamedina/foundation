// Compiled by ClojureScript 0.0-2030
goog.provide('foundation.app.observers');
goog.require('cljs.core');
foundation.app.observers.listeners = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
foundation.app.observers.publish = (function publish(topic,message){var seq__48128 = cljs.core.seq.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,foundation.app.observers.listeners),topic));var chunk__48129 = null;var count__48130 = 0;var i__48131 = 0;while(true){
if((i__48131 < count__48130))
{var f = cljs.core._nth.call(null,chunk__48129,i__48131);f.call(null,message);
{
var G__48132 = seq__48128;
var G__48133 = chunk__48129;
var G__48134 = count__48130;
var G__48135 = (i__48131 + 1);
seq__48128 = G__48132;
chunk__48129 = G__48133;
count__48130 = G__48134;
i__48131 = G__48135;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__48128);if(temp__4092__auto__)
{var seq__48128__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__48128__$1))
{var c__8156__auto__ = cljs.core.chunk_first.call(null,seq__48128__$1);{
var G__48136 = cljs.core.chunk_rest.call(null,seq__48128__$1);
var G__48137 = c__8156__auto__;
var G__48138 = cljs.core.count.call(null,c__8156__auto__);
var G__48139 = 0;
seq__48128 = G__48136;
chunk__48129 = G__48137;
count__48130 = G__48138;
i__48131 = G__48139;
continue;
}
} else
{var f = cljs.core.first.call(null,seq__48128__$1);f.call(null,message);
{
var G__48140 = cljs.core.next.call(null,seq__48128__$1);
var G__48141 = null;
var G__48142 = 0;
var G__48143 = 0;
seq__48128 = G__48140;
chunk__48129 = G__48141;
count__48130 = G__48142;
i__48131 = G__48143;
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
foundation.app.observers.subscribe = (function subscribe(topic,f){return cljs.core.swap_BANG_.call(null,foundation.app.observers.listeners,cljs.core.update_in,cljs.core.PersistentVector.fromArray([topic], true),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),f);
});
foundation.app.observers.clear = (function clear(){return cljs.core.reset_BANG_.call(null,foundation.app.observers.listeners,cljs.core.PersistentArrayMap.EMPTY);
});
