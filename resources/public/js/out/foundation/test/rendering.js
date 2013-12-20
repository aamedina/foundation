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
goog.require('cljs.core.async');
goog.require('foundation.app.ui');
goog.require('foundation.test.components.dashboard');
goog.require('foundation.app.render');
goog.require('dommy.core');
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),cljs.core.PersistentVector.EMPTY], null),(function (renderer,p__281195,pid,id){var vec__281196 = p__281195;var op = cljs.core.nth.call(null,vec__281196,0,null);var path = cljs.core.nth.call(null,vec__281196,1,null);var old = cljs.core.nth.call(null,vec__281196,2,null);var new$ = cljs.core.nth.call(null,vec__281196,3,null);return foundation.test.templates.twitter_power.call(null,id);
}));
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null)], null),(function (renderer,p__281197,pid,id){var vec__281198 = p__281197;var op = cljs.core.nth.call(null,vec__281198,0,null);var path = cljs.core.nth.call(null,vec__281198,1,null);var old = cljs.core.nth.call(null,vec__281198,2,null);var new$ = cljs.core.nth.call(null,vec__281198,3,null);return foundation.test.components.datagrid.datagrid.call(null,id,new$);
}));
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-update","node-update",597066342),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null)], null),(function (renderer,p__281199,pid,id){var vec__281200 = p__281199;var op = cljs.core.nth.call(null,vec__281200,0,null);var path = cljs.core.nth.call(null,vec__281200,1,null);var old = cljs.core.nth.call(null,vec__281200,2,null);var new$ = cljs.core.nth.call(null,vec__281200,3,null);return null;
}));
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null)], null),(function (renderer,p__281201,pid,id){var vec__281202 = p__281201;var op = cljs.core.nth.call(null,vec__281202,0,null);var path = cljs.core.nth.call(null,vec__281202,1,null);var old = cljs.core.nth.call(null,vec__281202,2,null);var new$ = cljs.core.nth.call(null,vec__281202,3,null);return foundation.test.components.dashboard.dashboard.call(null,id,new$);
}));
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null)], null),(function (renderer,p__281203,pid,id){var vec__281204 = p__281203;var op = cljs.core.nth.call(null,vec__281204,0,null);var path = cljs.core.nth.call(null,vec__281204,1,null);var old = cljs.core.nth.call(null,vec__281204,2,null);var new$ = cljs.core.nth.call(null,vec__281204,3,null);return cljs.core.dorun.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.app.render._set_data.call(null,renderer,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"chart","chart",1108527952)),foundation.test.components.chart.highchart.call(null)),foundation.test.rendering.start_date_picker.call(null,renderer,new cljs.core.Keyword(null,"start-time","start-time",3689550026).cljs$core$IFn$_invoke$arity$1(new$)),foundation.test.rendering.end_date_picker.call(null,renderer,new cljs.core.Keyword(null,"end-time","end-time",2693279729).cljs$core$IFn$_invoke$arity$1(new$))], null));
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