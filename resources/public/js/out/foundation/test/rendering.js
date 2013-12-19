// Compiled by ClojureScript 0.0-2120
goog.provide('foundation.test.rendering');
goog.require('cljs.core');
goog.require('foundation.app');
goog.require('foundation.app.render');
goog.require('cljs.core.async');
goog.require('foundation.app');
goog.require('foundation.test.templates');
goog.require('foundation.app.render');
goog.require('foundation.app.ui');
goog.require('dommy.core');
goog.require('foundation.test.templates');
goog.require('foundation.app');
goog.require('cljs.core.async');
goog.require('foundation.app.ui');
goog.require('foundation.app.render');
goog.require('dommy.core');
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),cljs.core.PersistentVector.EMPTY], null),(function (renderer,p__121064,pid,id){var vec__121065 = p__121064;var op = cljs.core.nth.call(null,vec__121065,0,null);var path = cljs.core.nth.call(null,vec__121065,1,null);var old = cljs.core.nth.call(null,vec__121065,2,null);var new$ = cljs.core.nth.call(null,vec__121065,3,null);return foundation.test.templates.twitter_power.call(null,id);
}));
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null)], null),(function (renderer,p__121066,pid,id){var vec__121067 = p__121066;var op = cljs.core.nth.call(null,vec__121067,0,null);var path = cljs.core.nth.call(null,vec__121067,1,null);var old = cljs.core.nth.call(null,vec__121067,2,null);var new$ = cljs.core.nth.call(null,vec__121067,3,null);return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),id], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",1124231110)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",1124062088)], null)], null);
}));
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null)], null),(function (renderer,p__121069,pid,id){var vec__121070 = p__121069;var op = cljs.core.nth.call(null,vec__121070,0,null);var path = cljs.core.nth.call(null,vec__121070,1,null);var old = cljs.core.nth.call(null,vec__121070,2,null);var new$ = cljs.core.nth.call(null,vec__121070,3,null);if(typeof foundation.test.rendering.t121071 !== 'undefined')
{} else
{
/**
* @constructor
*/
foundation.test.rendering.t121071 = (function (new$,old,path,op,vec__121070,id,pid,p__121069,renderer,meta121072){
this.new$ = new$;
this.old = old;
this.path = path;
this.op = op;
this.vec__121070 = vec__121070;
this.id = id;
this.pid = pid;
this.p__121069 = p__121069;
this.renderer = renderer;
this.meta121072 = meta121072;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
foundation.test.rendering.t121071.cljs$lang$type = true;
foundation.test.rendering.t121071.cljs$lang$ctorStr = "foundation.test.rendering/t121071";
foundation.test.rendering.t121071.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"foundation.test.rendering/t121071");
});
foundation.test.rendering.t121071.prototype.foundation$app$ui$IParentNode$ = true;
foundation.test.rendering.t121071.prototype.foundation$app$ui$IParentNode$_parent_node$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (function (p1__121068_SHARP_){return (dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,p1__121068_SHARP_).getElementsByTagName("thead"))[0]);
});
});
foundation.test.rendering.t121071.prototype.foundation$app$ui$IRender$ = true;
foundation.test.rendering.t121071.prototype.foundation$app$ui$IRender$_render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),self__.id], null),(function (){var iter__8921__auto__ = (function iter__121074(s__121075){return (new cljs.core.LazySeq(null,(function (){var s__121075__$1 = s__121075;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__121075__$1);if(temp__4092__auto__)
{var s__121075__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__121075__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__121075__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__121077 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__121076 = 0;while(true){
if((i__121076 < size__8920__auto__))
{var n = cljs.core._nth.call(null,c__8919__auto__,i__121076);cljs.core.chunk_append.call(null,b__121077,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),n], null));
{
var G__121078 = (i__121076 + 1);
i__121076 = G__121078;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__121077),iter__121074.call(null,cljs.core.chunk_rest.call(null,s__121075__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__121077),null);
}
} else
{var n = cljs.core.first.call(null,s__121075__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),n], null),iter__121074.call(null,cljs.core.rest.call(null,s__121075__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,cljs.core.range.call(null,10));
})()], null);
});
foundation.test.rendering.t121071.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_121073){var self__ = this;
var _121073__$1 = this;return self__.meta121072;
});
foundation.test.rendering.t121071.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_121073,meta121072__$1){var self__ = this;
var _121073__$1 = this;return (new foundation.test.rendering.t121071(self__.new$,self__.old,self__.path,self__.op,self__.vec__121070,self__.id,self__.pid,self__.p__121069,self__.renderer,meta121072__$1));
});
foundation.test.rendering.__GT_t121071 = (function __GT_t121071(new$__$1,old__$1,path__$1,op__$1,vec__121070__$1,id__$1,pid__$1,p__121069__$1,renderer__$1,meta121072){return (new foundation.test.rendering.t121071(new$__$1,old__$1,path__$1,op__$1,vec__121070__$1,id__$1,pid__$1,p__121069__$1,renderer__$1,meta121072));
});
}
return (new foundation.test.rendering.t121071(new$,old,path,op,vec__121070,id,pid,p__121069,renderer,null));
}));
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-update","node-update",597066342),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null)], null),(function (renderer,p__121079,pid,id){var vec__121080 = p__121079;var op = cljs.core.nth.call(null,vec__121080,0,null);var path = cljs.core.nth.call(null,vec__121080,1,null);var old = cljs.core.nth.call(null,vec__121080,2,null);var new$ = cljs.core.nth.call(null,vec__121080,3,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),[cljs.core.str(new$)].join('')], null);
}));

//# sourceMappingURL=rendering.js.map