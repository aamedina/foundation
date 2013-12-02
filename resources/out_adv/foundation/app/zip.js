// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.app.zip');
goog.require('cljs.core');
goog.require('clojure.zip');
goog.require('clojure.zip');
foundation.app.zip.coll_zip = (function coll_zip(root){return clojure.zip.zipper(cljs.core.coll_QMARK_,cljs.core.seq,(function (node,children){return cljs.core.with_meta(cljs.core.into(cljs.core.empty(node),children),cljs.core.meta(node));
}),root);
});
foundation.app.zip.locs = (function locs(root){return cljs.core.take_while(cljs.core.complement(clojure.zip.end_QMARK_),cljs.core.iterate(clojure.zip.next,foundation.app.zip.coll_zip(root)));
});
foundation.app.zip.nodes = (function nodes(root){var iter__11590__auto__ = (function iter__53718(s__53719){return (new cljs.core.LazySeq(null,(function (){var s__53719__$1 = s__53719;while(true){
var temp__4098__auto__ = cljs.core.seq(s__53719__$1);if(temp__4098__auto__)
{var s__53719__$2 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_(s__53719__$2))
{var c__11588__auto__ = cljs.core.chunk_first(s__53719__$2);var size__11589__auto__ = cljs.core.count(c__11588__auto__);var b__53721 = cljs.core.chunk_buffer(size__11589__auto__);if((function (){var i__53720 = 0;while(true){
if((i__53720 < size__11589__auto__))
{var loc = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__11588__auto__,i__53720);cljs.core.chunk_append(b__53721,clojure.zip.node(loc));
{
var G__53722 = (i__53720 + 1);
i__53720 = G__53722;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__53721),iter__53718(cljs.core.chunk_rest(s__53719__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__53721),null);
}
} else
{var loc = cljs.core.first(s__53719__$2);return cljs.core.cons(clojure.zip.node(loc),iter__53718(cljs.core.rest(s__53719__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__11590__auto__(foundation.app.zip.locs(root));
});
