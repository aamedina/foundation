// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.app.zip');
goog.require('cljs.core');
goog.require('clojure.zip');
goog.require('clojure.zip');
foundation.app.zip.coll_zip = (function coll_zip(root){return clojure.zip.zipper.call(null,cljs.core.coll_QMARK_,cljs.core.seq,(function (node,children){return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.empty.call(null,node),children),cljs.core.meta.call(null,node));
}),root);
});
foundation.app.zip.locs = (function locs(root){return cljs.core.take_while.call(null,cljs.core.complement.call(null,clojure.zip.end_QMARK_),cljs.core.iterate.call(null,clojure.zip.next,foundation.app.zip.coll_zip.call(null,root)));
});
foundation.app.zip.nodes = (function nodes(root){var iter__14220__auto__ = (function iter__23645(s__23646){return (new cljs.core.LazySeq(null,(function (){var s__23646__$1 = s__23646;while(true){
var temp__4098__auto__ = cljs.core.seq.call(null,s__23646__$1);if(temp__4098__auto__)
{var s__23646__$2 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23646__$2))
{var c__14218__auto__ = cljs.core.chunk_first.call(null,s__23646__$2);var size__14219__auto__ = cljs.core.count.call(null,c__14218__auto__);var b__23648 = cljs.core.chunk_buffer.call(null,size__14219__auto__);if((function (){var i__23647 = 0;while(true){
if((i__23647 < size__14219__auto__))
{var loc = cljs.core._nth.call(null,c__14218__auto__,i__23647);cljs.core.chunk_append.call(null,b__23648,clojure.zip.node.call(null,loc));
{
var G__23649 = (i__23647 + 1);
i__23647 = G__23649;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23648),iter__23645.call(null,cljs.core.chunk_rest.call(null,s__23646__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23648),null);
}
} else
{var loc = cljs.core.first.call(null,s__23646__$2);return cljs.core.cons.call(null,clojure.zip.node.call(null,loc),iter__23645.call(null,cljs.core.rest.call(null,s__23646__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14220__auto__.call(null,foundation.app.zip.locs.call(null,root));
});

//# sourceMappingURL=zip.js.map