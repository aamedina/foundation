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
goog.require('foundation.test.models');
goog.require('foundation.app');
goog.require('foundation.test.models');
goog.require('cljs.core.async');
goog.require('foundation.app.ui');
goog.require('foundation.app.render');
goog.require('dommy.core');
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),cljs.core.PersistentVector.EMPTY], null),(function (renderer,p__121643,pid,id){var vec__121644 = p__121643;var op = cljs.core.nth.call(null,vec__121644,0,null);var path = cljs.core.nth.call(null,vec__121644,1,null);var old = cljs.core.nth.call(null,vec__121644,2,null);var new$ = cljs.core.nth.call(null,vec__121644,3,null);return foundation.test.templates.twitter_power.call(null,id);
}));
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null)], null),(function (renderer,p__121645,pid,id){var vec__121646 = p__121645;var op = cljs.core.nth.call(null,vec__121646,0,null);var path = cljs.core.nth.call(null,vec__121646,1,null);var old = cljs.core.nth.call(null,vec__121646,2,null);var new$ = cljs.core.nth.call(null,vec__121646,3,null);return foundation.test.templates.datagrid.call(null,id);
}));
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null)], null),(function (renderer,p__121648,pid,id){var vec__121649 = p__121648;var op = cljs.core.nth.call(null,vec__121649,0,null);var path = cljs.core.nth.call(null,vec__121649,1,null);var old = cljs.core.nth.call(null,vec__121649,2,null);var new$ = cljs.core.nth.call(null,vec__121649,3,null);if(typeof foundation.test.rendering.t121650 !== 'undefined')
{} else
{
/**
* @constructor
*/
foundation.test.rendering.t121650 = (function (new$,old,path,op,vec__121649,id,pid,p__121648,renderer,meta121651){
this.new$ = new$;
this.old = old;
this.path = path;
this.op = op;
this.vec__121649 = vec__121649;
this.id = id;
this.pid = pid;
this.p__121648 = p__121648;
this.renderer = renderer;
this.meta121651 = meta121651;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
foundation.test.rendering.t121650.cljs$lang$type = true;
foundation.test.rendering.t121650.cljs$lang$ctorStr = "foundation.test.rendering/t121650";
foundation.test.rendering.t121650.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"foundation.test.rendering/t121650");
});
foundation.test.rendering.t121650.prototype.foundation$app$ui$IParentNode$ = true;
foundation.test.rendering.t121650.prototype.foundation$app$ui$IParentNode$_parent_node$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (function (p1__121647_SHARP_){return dommy.template.__GT_node_like.call(null,p1__121647_SHARP_).querySelector("div.panel-body");
});
});
foundation.test.rendering.t121650.prototype.foundation$app$ui$IRender$ = true;
foundation.test.rendering.t121650.prototype.foundation$app$ui$IRender$_render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return foundation.test.templates.datagrid_table.call(null,foundation.test.models.accounts,cljs.core.PersistentVector.EMPTY);
});
foundation.test.rendering.t121650.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_121652){var self__ = this;
var _121652__$1 = this;return self__.meta121651;
});
foundation.test.rendering.t121650.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_121652,meta121651__$1){var self__ = this;
var _121652__$1 = this;return (new foundation.test.rendering.t121650(self__.new$,self__.old,self__.path,self__.op,self__.vec__121649,self__.id,self__.pid,self__.p__121648,self__.renderer,meta121651__$1));
});
foundation.test.rendering.__GT_t121650 = (function __GT_t121650(new$__$1,old__$1,path__$1,op__$1,vec__121649__$1,id__$1,pid__$1,p__121648__$1,renderer__$1,meta121651){return (new foundation.test.rendering.t121650(new$__$1,old__$1,path__$1,op__$1,vec__121649__$1,id__$1,pid__$1,p__121648__$1,renderer__$1,meta121651));
});
}
return (new foundation.test.rendering.t121650(new$,old,path,op,vec__121649,id,pid,p__121648,renderer,null));
}));
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-update","node-update",597066342),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null)], null),(function (renderer,p__121653,pid,id){var vec__121654 = p__121653;var op = cljs.core.nth.call(null,vec__121654,0,null);var path = cljs.core.nth.call(null,vec__121654,1,null);var old = cljs.core.nth.call(null,vec__121654,2,null);var new$ = cljs.core.nth.call(null,vec__121654,3,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),[cljs.core.str(new$)].join('')], null);
}));

//# sourceMappingURL=rendering.js.map