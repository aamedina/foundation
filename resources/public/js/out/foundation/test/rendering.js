// Compiled by ClojureScript 0.0-2120
goog.provide('foundation.test.rendering');
goog.require('cljs.core');
goog.require('foundation.app');
goog.require('foundation.app.render');
goog.require('cljs.core.async');
goog.require('dommy.core');
goog.require('dommy.core');
goog.require('foundation.app.ui');
goog.require('foundation.app.ui');
goog.require('foundation.app.render');
goog.require('foundation.app.render');
goog.require('foundation.app');
goog.require('foundation.app');
goog.require('cljs.core.async');
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),cljs.core.PersistentVector.EMPTY], null),(function (renderer,p__120393,pid,id){var vec__120394 = p__120393;var op = cljs.core.nth.call(null,vec__120394,0,null);var path = cljs.core.nth.call(null,vec__120394,1,null);var old = cljs.core.nth.call(null,vec__120394,2,null);var new$ = cljs.core.nth.call(null,vec__120394,3,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),id], null),"Hello, world!"], null);
}));
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null)], null),(function (renderer,p__120395,pid,id){var vec__120396 = p__120395;var op = cljs.core.nth.call(null,vec__120396,0,null);var path = cljs.core.nth.call(null,vec__120396,1,null);var old = cljs.core.nth.call(null,vec__120396,2,null);var new$ = cljs.core.nth.call(null,vec__120396,3,null);return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),id], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",1124231110)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",1124062088)], null)], null);
}));
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null)], null),(function (renderer,p__120398,pid,id){var vec__120399 = p__120398;var op = cljs.core.nth.call(null,vec__120399,0,null);var path = cljs.core.nth.call(null,vec__120399,1,null);var old = cljs.core.nth.call(null,vec__120399,2,null);var new$ = cljs.core.nth.call(null,vec__120399,3,null);if(typeof foundation.test.rendering.t120400 !== 'undefined')
{} else
{
/**
* @constructor
*/
foundation.test.rendering.t120400 = (function (new$,old,path,op,vec__120399,id,pid,p__120398,renderer,meta120401){
this.new$ = new$;
this.old = old;
this.path = path;
this.op = op;
this.vec__120399 = vec__120399;
this.id = id;
this.pid = pid;
this.p__120398 = p__120398;
this.renderer = renderer;
this.meta120401 = meta120401;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
foundation.test.rendering.t120400.cljs$lang$type = true;
foundation.test.rendering.t120400.cljs$lang$ctorStr = "foundation.test.rendering/t120400";
foundation.test.rendering.t120400.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"foundation.test.rendering/t120400");
});
foundation.test.rendering.t120400.prototype.foundation$app$ui$IParentNode$ = true;
foundation.test.rendering.t120400.prototype.foundation$app$ui$IParentNode$_parent_node$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (function (p1__120397_SHARP_){return (dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,p1__120397_SHARP_).getElementsByTagName("thead"))[0]);
});
});
foundation.test.rendering.t120400.prototype.foundation$app$ui$IRender$ = true;
foundation.test.rendering.t120400.prototype.foundation$app$ui$IRender$_render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),self__.id], null),(function (){var iter__8921__auto__ = (function iter__120403(s__120404){return (new cljs.core.LazySeq(null,(function (){var s__120404__$1 = s__120404;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__120404__$1);if(temp__4092__auto__)
{var s__120404__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__120404__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__120404__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__120406 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__120405 = 0;while(true){
if((i__120405 < size__8920__auto__))
{var n = cljs.core._nth.call(null,c__8919__auto__,i__120405);cljs.core.chunk_append.call(null,b__120406,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),n], null));
{
var G__120407 = (i__120405 + 1);
i__120405 = G__120407;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__120406),iter__120403.call(null,cljs.core.chunk_rest.call(null,s__120404__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__120406),null);
}
} else
{var n = cljs.core.first.call(null,s__120404__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),n], null),iter__120403.call(null,cljs.core.rest.call(null,s__120404__$2)));
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
foundation.test.rendering.t120400.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_120402){var self__ = this;
var _120402__$1 = this;return self__.meta120401;
});
foundation.test.rendering.t120400.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_120402,meta120401__$1){var self__ = this;
var _120402__$1 = this;return (new foundation.test.rendering.t120400(self__.new$,self__.old,self__.path,self__.op,self__.vec__120399,self__.id,self__.pid,self__.p__120398,self__.renderer,meta120401__$1));
});
foundation.test.rendering.__GT_t120400 = (function __GT_t120400(new$__$1,old__$1,path__$1,op__$1,vec__120399__$1,id__$1,pid__$1,p__120398__$1,renderer__$1,meta120401){return (new foundation.test.rendering.t120400(new$__$1,old__$1,path__$1,op__$1,vec__120399__$1,id__$1,pid__$1,p__120398__$1,renderer__$1,meta120401));
});
}
return (new foundation.test.rendering.t120400(new$,old,path,op,vec__120399,id,pid,p__120398,renderer,null));
}));
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-update","node-update",597066342),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null)], null),(function (renderer,p__120408,pid,id){var vec__120409 = p__120408;var op = cljs.core.nth.call(null,vec__120409,0,null);var path = cljs.core.nth.call(null,vec__120409,1,null);var old = cljs.core.nth.call(null,vec__120409,2,null);var new$ = cljs.core.nth.call(null,vec__120409,3,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),[cljs.core.str(new$)].join('')], null);
}));

//# sourceMappingURL=rendering.js.map