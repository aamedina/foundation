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
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),cljs.core.PersistentVector.EMPTY], null),(function (renderer,p__400296,input,pid,id){var vec__400297 = p__400296;var op = cljs.core.nth.call(null,vec__400297,0,null);var path = cljs.core.nth.call(null,vec__400297,1,null);var old = cljs.core.nth.call(null,vec__400297,2,null);var new$ = cljs.core.nth.call(null,vec__400297,3,null);return foundation.test.templates.twitter_power.call(null,id);
}));
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null)], null),(function (renderer,p__400298,input,pid,id){var vec__400299 = p__400298;var op = cljs.core.nth.call(null,vec__400299,0,null);var path = cljs.core.nth.call(null,vec__400299,1,null);var old = cljs.core.nth.call(null,vec__400299,2,null);var new$ = cljs.core.nth.call(null,vec__400299,3,null);foundation.app.render._set_data.call(null,renderer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"resource","resource",672839552)], null),new cljs.core.Keyword(null,"resource","resource",672839552).cljs$core$IFn$_invoke$arity$1(new$));
return foundation.test.components.datagrid.datagrid.call(null,input,id,new$);
}));
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-update","node-update",597066342),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null)], null),(function (renderer,p__400300,input,pid,id){var vec__400301 = p__400300;var op = cljs.core.nth.call(null,vec__400301,0,null);var path = cljs.core.nth.call(null,vec__400301,1,null);var old = cljs.core.nth.call(null,vec__400301,2,null);var new$ = cljs.core.nth.call(null,vec__400301,3,null);foundation.test.components.datagrid.set_datagrid_height_BANG_.call(null);
return foundation.app.render._set_data.call(null,renderer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"resource","resource",672839552)], null),new cljs.core.Keyword(null,"resource","resource",672839552).cljs$core$IFn$_invoke$arity$1(new$));
}));
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-update","node-update",597066342),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null)], null),(function (renderer,p__400302,input,pid,id){var vec__400303 = p__400302;var op = cljs.core.nth.call(null,vec__400303,0,null);var path = cljs.core.nth.call(null,vec__400303,1,null);var old = cljs.core.nth.call(null,vec__400303,2,null);var new$ = cljs.core.nth.call(null,vec__400303,3,null);foundation.test.components.datagrid.set_datagrid_height_BANG_.call(null);
foundation.test.components.datagrid.fix_column_widths_BANG_.call(null);
var resource = foundation.app.render._get_data.call(null,renderer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"resource","resource",672839552)], null));if(typeof foundation.test.rendering.t400304 !== 'undefined')
{} else
{
/**
* @constructor
*/
foundation.test.rendering.t400304 = (function (new$,input,id,old,path,renderer,p__400302,op,pid,vec__400303,resource,meta400305){
this.new$ = new$;
this.input = input;
this.id = id;
this.old = old;
this.path = path;
this.renderer = renderer;
this.p__400302 = p__400302;
this.op = op;
this.pid = pid;
this.vec__400303 = vec__400303;
this.resource = resource;
this.meta400305 = meta400305;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
foundation.test.rendering.t400304.cljs$lang$type = true;
foundation.test.rendering.t400304.cljs$lang$ctorStr = "foundation.test.rendering/t400304";
foundation.test.rendering.t400304.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"foundation.test.rendering/t400304");
});
foundation.test.rendering.t400304.prototype.foundation$app$ui$IPostProcess$ = true;
foundation.test.rendering.t400304.prototype.foundation$app$ui$IPostProcess$_post_process$arity$1 = (function (_){var self__ = this;
var ___$1 = this;foundation.test.components.datagrid.set_datagrid_height_BANG_.call(null);
return foundation.test.components.datagrid.fix_column_widths_BANG_.call(null);
});
foundation.test.rendering.t400304.prototype.foundation$app$ui$IRender$ = true;
foundation.test.rendering.t400304.prototype.foundation$app$ui$IRender$_render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return foundation.test.components.datagrid.datagrid_body.call(null,self__.new$,foundation.test.models.columns.call(null,self__.resource));
});
foundation.test.rendering.t400304.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_400306){var self__ = this;
var _400306__$1 = this;return self__.meta400305;
});
foundation.test.rendering.t400304.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_400306,meta400305__$1){var self__ = this;
var _400306__$1 = this;return (new foundation.test.rendering.t400304(self__.new$,self__.input,self__.id,self__.old,self__.path,self__.renderer,self__.p__400302,self__.op,self__.pid,self__.vec__400303,self__.resource,meta400305__$1));
});
foundation.test.rendering.__GT_t400304 = (function __GT_t400304(new$__$1,input__$1,id__$1,old__$1,path__$1,renderer__$1,p__400302__$1,op__$1,pid__$1,vec__400303__$1,resource__$1,meta400305){return (new foundation.test.rendering.t400304(new$__$1,input__$1,id__$1,old__$1,path__$1,renderer__$1,p__400302__$1,op__$1,pid__$1,vec__400303__$1,resource__$1,meta400305));
});
}
return (new foundation.test.rendering.t400304(new$,input,id,old,path,renderer,p__400302,op,pid,vec__400303,resource,null));
}));
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null)], null),(function (renderer,p__400307,input,pid,id){var vec__400308 = p__400307;var op = cljs.core.nth.call(null,vec__400308,0,null);var path = cljs.core.nth.call(null,vec__400308,1,null);var old = cljs.core.nth.call(null,vec__400308,2,null);var new$ = cljs.core.nth.call(null,vec__400308,3,null);return foundation.test.components.dashboard.dashboard.call(null,id,new$);
}));
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null)], null),(function (renderer,p__400309,input,pid,id){var vec__400310 = p__400309;var op = cljs.core.nth.call(null,vec__400310,0,null);var path = cljs.core.nth.call(null,vec__400310,1,null);var old = cljs.core.nth.call(null,vec__400310,2,null);var new$ = cljs.core.nth.call(null,vec__400310,3,null);return cljs.core.dorun.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.app.render._set_data.call(null,renderer,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"chart","chart",1108527952)),foundation.test.components.chart.highchart.call(null)),foundation.test.rendering.start_date_picker.call(null,renderer,new cljs.core.Keyword(null,"start-time","start-time",3689550026).cljs$core$IFn$_invoke$arity$1(new$)),foundation.test.rendering.end_date_picker.call(null,renderer,new cljs.core.Keyword(null,"end-time","end-time",2693279729).cljs$core$IFn$_invoke$arity$1(new$))], null));
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