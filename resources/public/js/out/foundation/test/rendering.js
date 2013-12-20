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
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),cljs.core.PersistentVector.EMPTY], null),(function (renderer,p__394936,input,pid,id){var vec__394937 = p__394936;var op = cljs.core.nth.call(null,vec__394937,0,null);var path = cljs.core.nth.call(null,vec__394937,1,null);var old = cljs.core.nth.call(null,vec__394937,2,null);var new$ = cljs.core.nth.call(null,vec__394937,3,null);return foundation.test.templates.twitter_power.call(null,id);
}));
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null)], null),(function (renderer,p__394938,input,pid,id){var vec__394939 = p__394938;var op = cljs.core.nth.call(null,vec__394939,0,null);var path = cljs.core.nth.call(null,vec__394939,1,null);var old = cljs.core.nth.call(null,vec__394939,2,null);var new$ = cljs.core.nth.call(null,vec__394939,3,null);foundation.app.render._set_data.call(null,renderer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"resource","resource",672839552)], null),new cljs.core.Keyword(null,"resource","resource",672839552).cljs$core$IFn$_invoke$arity$1(new$));
return foundation.test.components.datagrid.datagrid.call(null,input,id,new$);
}));
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-update","node-update",597066342),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null)], null),(function (renderer,p__394940,input,pid,id){var vec__394941 = p__394940;var op = cljs.core.nth.call(null,vec__394941,0,null);var path = cljs.core.nth.call(null,vec__394941,1,null);var old = cljs.core.nth.call(null,vec__394941,2,null);var new$ = cljs.core.nth.call(null,vec__394941,3,null);foundation.test.components.datagrid.set_datagrid_height_BANG_.call(null);
return foundation.app.render._set_data.call(null,renderer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"resource","resource",672839552)], null),new cljs.core.Keyword(null,"resource","resource",672839552).cljs$core$IFn$_invoke$arity$1(new$));
}));
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-update","node-update",597066342),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null)], null),(function (renderer,p__394942,input,pid,id){var vec__394943 = p__394942;var op = cljs.core.nth.call(null,vec__394943,0,null);var path = cljs.core.nth.call(null,vec__394943,1,null);var old = cljs.core.nth.call(null,vec__394943,2,null);var new$ = cljs.core.nth.call(null,vec__394943,3,null);foundation.test.components.datagrid.set_datagrid_height_BANG_.call(null);
foundation.test.components.datagrid.fix_column_widths_BANG_.call(null);
var resource = foundation.app.render._get_data.call(null,renderer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"resource","resource",672839552)], null));if(typeof foundation.test.rendering.t394944 !== 'undefined')
{} else
{
/**
* @constructor
*/
foundation.test.rendering.t394944 = (function (new$,input,id,old,path,renderer,p__394942,op,pid,resource,vec__394943,meta394945){
this.new$ = new$;
this.input = input;
this.id = id;
this.old = old;
this.path = path;
this.renderer = renderer;
this.p__394942 = p__394942;
this.op = op;
this.pid = pid;
this.resource = resource;
this.vec__394943 = vec__394943;
this.meta394945 = meta394945;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
foundation.test.rendering.t394944.cljs$lang$type = true;
foundation.test.rendering.t394944.cljs$lang$ctorStr = "foundation.test.rendering/t394944";
foundation.test.rendering.t394944.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"foundation.test.rendering/t394944");
});
foundation.test.rendering.t394944.prototype.foundation$app$ui$IPostProcess$ = true;
foundation.test.rendering.t394944.prototype.foundation$app$ui$IPostProcess$_post_process$arity$1 = (function (_){var self__ = this;
var ___$1 = this;foundation.test.components.datagrid.set_datagrid_height_BANG_.call(null);
return foundation.test.components.datagrid.fix_column_widths_BANG_.call(null);
});
foundation.test.rendering.t394944.prototype.foundation$app$ui$IRender$ = true;
foundation.test.rendering.t394944.prototype.foundation$app$ui$IRender$_render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return foundation.test.components.datagrid.datagrid_body.call(null,self__.new$,foundation.test.models.columns.call(null,self__.resource));
});
foundation.test.rendering.t394944.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_394946){var self__ = this;
var _394946__$1 = this;return self__.meta394945;
});
foundation.test.rendering.t394944.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_394946,meta394945__$1){var self__ = this;
var _394946__$1 = this;return (new foundation.test.rendering.t394944(self__.new$,self__.input,self__.id,self__.old,self__.path,self__.renderer,self__.p__394942,self__.op,self__.pid,self__.resource,self__.vec__394943,meta394945__$1));
});
foundation.test.rendering.__GT_t394944 = (function __GT_t394944(new$__$1,input__$1,id__$1,old__$1,path__$1,renderer__$1,p__394942__$1,op__$1,pid__$1,resource__$1,vec__394943__$1,meta394945){return (new foundation.test.rendering.t394944(new$__$1,input__$1,id__$1,old__$1,path__$1,renderer__$1,p__394942__$1,op__$1,pid__$1,resource__$1,vec__394943__$1,meta394945));
});
}
return (new foundation.test.rendering.t394944(new$,input,id,old,path,renderer,p__394942,op,pid,resource,vec__394943,null));
}));
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null)], null),(function (renderer,p__394947,input,pid,id){var vec__394948 = p__394947;var op = cljs.core.nth.call(null,vec__394948,0,null);var path = cljs.core.nth.call(null,vec__394948,1,null);var old = cljs.core.nth.call(null,vec__394948,2,null);var new$ = cljs.core.nth.call(null,vec__394948,3,null);return foundation.test.components.dashboard.dashboard.call(null,id,new$);
}));
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null)], null),(function (renderer,p__394949,input,pid,id){var vec__394950 = p__394949;var op = cljs.core.nth.call(null,vec__394950,0,null);var path = cljs.core.nth.call(null,vec__394950,1,null);var old = cljs.core.nth.call(null,vec__394950,2,null);var new$ = cljs.core.nth.call(null,vec__394950,3,null);return cljs.core.dorun.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.app.render._set_data.call(null,renderer,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"chart","chart",1108527952)),foundation.test.components.chart.highchart.call(null)),foundation.test.rendering.start_date_picker.call(null,renderer,new cljs.core.Keyword(null,"start-time","start-time",3689550026).cljs$core$IFn$_invoke$arity$1(new$)),foundation.test.rendering.end_date_picker.call(null,renderer,new cljs.core.Keyword(null,"end-time","end-time",2693279729).cljs$core$IFn$_invoke$arity$1(new$))], null));
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