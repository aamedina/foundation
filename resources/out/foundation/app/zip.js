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
foundation.app.zip.nodes = (function nodes(root){var iter__8423__auto__ = (function iter__632287(s__632288){return (new cljs.core.LazySeq(null,(function (){var s__632288__$1 = s__632288;while(true){
var temp__4098__auto__ = cljs.core.seq.call(null,s__632288__$1);if(temp__4098__auto__)
{var s__632288__$2 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__632288__$2))
{var c__8421__auto__ = cljs.core.chunk_first.call(null,s__632288__$2);var size__8422__auto__ = cljs.core.count.call(null,c__8421__auto__);var b__632290 = cljs.core.chunk_buffer.call(null,size__8422__auto__);if((function (){var i__632289 = 0;while(true){
if((i__632289 < size__8422__auto__))
{var loc = cljs.core._nth.call(null,c__8421__auto__,i__632289);cljs.core.chunk_append.call(null,b__632290,clojure.zip.node.call(null,loc));
{
var G__632291 = (i__632289 + 1);
i__632289 = G__632291;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__632290),iter__632287.call(null,cljs.core.chunk_rest.call(null,s__632288__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__632290),null);
}
} else
{var loc = cljs.core.first.call(null,s__632288__$2);return cljs.core.cons.call(null,clojure.zip.node.call(null,loc),iter__632287.call(null,cljs.core.rest.call(null,s__632288__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8423__auto__.call(null,foundation.app.zip.locs.call(null,root));
});

//# sourceMappingURL=zip.js.map