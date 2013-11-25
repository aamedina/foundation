// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.app.observers');
goog.require('cljs.core');
foundation.app.observers.listeners = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
foundation.app.observers.publish = (function publish(topic,message){var seq__22841 = cljs.core.seq.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,foundation.app.observers.listeners),topic));var chunk__22842 = null;var count__22843 = 0;var i__22844 = 0;while(true){
if((i__22844 < count__22843))
{var f = cljs.core._nth.call(null,chunk__22842,i__22844);f.call(null,message);
{
var G__22845 = seq__22841;
var G__22846 = chunk__22842;
var G__22847 = count__22843;
var G__22848 = (i__22844 + 1);
seq__22841 = G__22845;
chunk__22842 = G__22846;
count__22843 = G__22847;
i__22844 = G__22848;
continue;
}
} else
{var temp__4098__auto__ = cljs.core.seq.call(null,seq__22841);if(temp__4098__auto__)
{var seq__22841__$1 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22841__$1))
{var c__7028__auto__ = cljs.core.chunk_first.call(null,seq__22841__$1);{
var G__22849 = cljs.core.chunk_rest.call(null,seq__22841__$1);
var G__22850 = c__7028__auto__;
var G__22851 = cljs.core.count.call(null,c__7028__auto__);
var G__22852 = 0;
seq__22841 = G__22849;
chunk__22842 = G__22850;
count__22843 = G__22851;
i__22844 = G__22852;
continue;
}
} else
{var f = cljs.core.first.call(null,seq__22841__$1);f.call(null,message);
{
var G__22853 = cljs.core.next.call(null,seq__22841__$1);
var G__22854 = null;
var G__22855 = 0;
var G__22856 = 0;
seq__22841 = G__22853;
chunk__22842 = G__22854;
count__22843 = G__22855;
i__22844 = G__22856;
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
