// Compiled by ClojureScript 0.0-2120
goog.provide('foundation.test.rendering');
goog.require('cljs.core');
goog.require('foundation.app');
goog.require('foundation.test.components.dashboard');
goog.require('foundation.app.render');
goog.require('foundation.test.components.datagrid');
goog.require('foundation.test.components.chart');
goog.require('cljs.core.async');
goog.require('foundation.app');
goog.require('foundation.test.templates');
goog.require('foundation.app.render');
goog.require('foundation.app.ui');
goog.require('dommy.core');
goog.require('foundation.test.components.datagrid');
goog.require('foundation.test.templates');
goog.require('foundation.test.models');
goog.require('foundation.app');
goog.require('foundation.test.components.chart');
goog.require('foundation.test.models');
goog.require('foundation.test.components.datagrid');
goog.require('cljs.core.async');
goog.require('foundation.app.ui');
goog.require('foundation.test.components.dashboard');
goog.require('foundation.app.render');
goog.require('dommy.core');
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),cljs.core.PersistentVector.EMPTY], null),(function (renderer,p__325877,input,pid,id){var vec__325878 = p__325877;var op = cljs.core.nth.call(null,vec__325878,0,null);var path = cljs.core.nth.call(null,vec__325878,1,null);var old = cljs.core.nth.call(null,vec__325878,2,null);var new$ = cljs.core.nth.call(null,vec__325878,3,null);return foundation.test.templates.twitter_power.call(null,id);
}));
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null)], null),(function (renderer,p__325879,input,pid,id){var vec__325880 = p__325879;var op = cljs.core.nth.call(null,vec__325880,0,null);var path = cljs.core.nth.call(null,vec__325880,1,null);var old = cljs.core.nth.call(null,vec__325880,2,null);var new$ = cljs.core.nth.call(null,vec__325880,3,null);return foundation.test.components.datagrid.datagrid.call(null,input,id,new$);
}));
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-update","node-update",597066342),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null)], null),(function (renderer,p__325881,input,pid,id){var vec__325882 = p__325881;var op = cljs.core.nth.call(null,vec__325882,0,null);var path = cljs.core.nth.call(null,vec__325882,1,null);var old = cljs.core.nth.call(null,vec__325882,2,null);var new$ = cljs.core.nth.call(null,vec__325882,3,null);return cljs.core.println.call(null,new$);
}));
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-update","node-update",597066342),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null)], null),(function (renderer,p__325883,input,pid,id){var vec__325884 = p__325883;var op = cljs.core.nth.call(null,vec__325884,0,null);var path = cljs.core.nth.call(null,vec__325884,1,null);var old = cljs.core.nth.call(null,vec__325884,2,null);var new$ = cljs.core.nth.call(null,vec__325884,3,null);if(typeof foundation.test.rendering.t325885 !== 'undefined')
{} else
{
/**
* @constructor
*/
foundation.test.rendering.t325885 = (function (new$,input,id,old,path,renderer,op,pid,p__325883,vec__325884,meta325886){
this.new$ = new$;
this.input = input;
this.id = id;
this.old = old;
this.path = path;
this.renderer = renderer;
this.op = op;
this.pid = pid;
this.p__325883 = p__325883;
this.vec__325884 = vec__325884;
this.meta325886 = meta325886;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
foundation.test.rendering.t325885.cljs$lang$type = true;
foundation.test.rendering.t325885.cljs$lang$ctorStr = "foundation.test.rendering/t325885";
foundation.test.rendering.t325885.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"foundation.test.rendering/t325885");
});
foundation.test.rendering.t325885.prototype.foundation$app$ui$IRender$ = true;
foundation.test.rendering.t325885.prototype.foundation$app$ui$IRender$_render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return foundation.test.components.datagrid.datagrid_body.call(null,self__.new$,foundation.test.models.columns.call(null,foundation.test.models.accounts));
});
foundation.test.rendering.t325885.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_325887){var self__ = this;
var _325887__$1 = this;return self__.meta325886;
});
foundation.test.rendering.t325885.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_325887,meta325886__$1){var self__ = this;
var _325887__$1 = this;return (new foundation.test.rendering.t325885(self__.new$,self__.input,self__.id,self__.old,self__.path,self__.renderer,self__.op,self__.pid,self__.p__325883,self__.vec__325884,meta325886__$1));
});
foundation.test.rendering.__GT_t325885 = (function __GT_t325885(new$__$1,input__$1,id__$1,old__$1,path__$1,renderer__$1,op__$1,pid__$1,p__325883__$1,vec__325884__$1,meta325886){return (new foundation.test.rendering.t325885(new$__$1,input__$1,id__$1,old__$1,path__$1,renderer__$1,op__$1,pid__$1,p__325883__$1,vec__325884__$1,meta325886));
});
}
return (new foundation.test.rendering.t325885(new$,input,id,old,path,renderer,op,pid,p__325883,vec__325884,null));
}));
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null)], null),(function (renderer,p__325888,input,pid,id){var vec__325889 = p__325888;var op = cljs.core.nth.call(null,vec__325889,0,null);var path = cljs.core.nth.call(null,vec__325889,1,null);var old = cljs.core.nth.call(null,vec__325889,2,null);var new$ = cljs.core.nth.call(null,vec__325889,3,null);return foundation.test.components.dashboard.dashboard.call(null,id,new$);
}));
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null)], null),(function (renderer,p__325890,input,pid,id){var vec__325891 = p__325890;var op = cljs.core.nth.call(null,vec__325891,0,null);var path = cljs.core.nth.call(null,vec__325891,1,null);var old = cljs.core.nth.call(null,vec__325891,2,null);var new$ = cljs.core.nth.call(null,vec__325891,3,null);return cljs.core.dorun.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.app.render._set_data.call(null,renderer,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"chart","chart",1108527952)),foundation.test.components.chart.highchart.call(null)),foundation.test.rendering.start_date_picker.call(null,renderer,new cljs.core.Keyword(null,"start-time","start-time",3689550026).cljs$core$IFn$_invoke$arity$1(new$)),foundation.test.rendering.end_date_picker.call(null,renderer,new cljs.core.Keyword(null,"end-time","end-time",2693279729).cljs$core$IFn$_invoke$arity$1(new$))], null));
}));
foundation.test.rendering.start_date_picker = (function start_date_picker(renderer,start_time){var temp__4090__auto__ = foundation.app.render._get_data.call(null,renderer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-time-picker","start-time-picker",2510165525)], null));if(cljs.core.truth_(temp__4090__auto__))
{var picker = temp__4090__auto__;return picker;
} else
{var picker = foundation.test.templates.date_picker.call(null,document.querySelector(".date-picker#start-time"),(new Date(start_time)),new cljs.core.Keyword(null,"long-date","long-date",1095363537));foundation.app.render._set_data.call(null,renderer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-time-picker","start-time-picker",2510165525)], null),picker);
return picker;
}
});
foundation.test.rendering.end_date_picker = (function end_date_picker(renderer,end_time){var temp__4090__auto__ = foundation.app.render._get_data.call(null,renderer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"end-time-picker","end-time-picker",4747750670)], null));if(cljs.core.truth_(temp__4090__auto__))
{var picker = temp__4090__auto__;return picker;
} else
{var picker = foundation.test.templates.date_picker.call(null,document.querySelector(".date-picker#end-time"),(new Date(end_time)),new cljs.core.Keyword(null,"long-date","long-date",1095363537));foundation.app.render._set_data.call(null,renderer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"end-time-picker","end-time-picker",4747750670)], null),picker);
return picker;
}
});

//# sourceMappingURL=rendering.js.map