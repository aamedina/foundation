// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.app.zip');
goog.require('cljs.core');
foundation.app.zip.coll_zip = (function coll_zip(root){return zip.zipper.call(null,cljs.core.coll_QMARK_,cljs.core.seq,(function (node,children){return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.empty.call(null,node),children),cljs.core.meta.call(null,node));
}),root);
});
foundation.app.zip.locs = (function locs(root){return cljs.core.take_while.call(null,cljs.core.complement.call(null,zip.end_QMARK_),cljs.core.iterate.call(null,zip.next,foundation.app.zip.coll_zip.call(null,root)));
});
foundation.app.zip.nodes = (function nodes(root){var iter__11590__auto__ = (function iter__53709(s__53710){return (new cljs.core.LazySeq(null,(function (){var s__53710__$1 = s__53710;while(true){
var temp__4098__auto__ = cljs.core.seq.call(null,s__53710__$1);if(temp__4098__auto__)
{var s__53710__$2 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__53710__$2))
{var c__11588__auto__ = cljs.core.chunk_first.call(null,s__53710__$2);var size__11589__auto__ = cljs.core.count.call(null,c__11588__auto__);var b__53712 = cljs.core.chunk_buffer.call(null,size__11589__auto__);if((function (){var i__53711 = 0;while(true){
if((i__53711 < size__11589__auto__))
{var loc = cljs.core._nth.call(null,c__11588__auto__,i__53711);cljs.core.chunk_append.call(null,b__53712,zip.node.call(null,loc));
{
var G__53713 = (i__53711 + 1);
i__53711 = G__53713;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53712),iter__53709.call(null,cljs.core.chunk_rest.call(null,s__53710__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53712),null);
}
} else
{var loc = cljs.core.first.call(null,s__53710__$2);return cljs.core.cons.call(null,zip.node.call(null,loc),iter__53709.call(null,cljs.core.rest.call(null,s__53710__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__11590__auto__.call(null,foundation.app.zip.locs.call(null,root));
});
