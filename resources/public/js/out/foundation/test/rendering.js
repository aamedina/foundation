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
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),cljs.core.PersistentVector.EMPTY], null),(function (renderer,p__408990,input,pid,id){var vec__408991 = p__408990;var op = cljs.core.nth.call(null,vec__408991,0,null);var path = cljs.core.nth.call(null,vec__408991,1,null);var old = cljs.core.nth.call(null,vec__408991,2,null);var new$ = cljs.core.nth.call(null,vec__408991,3,null);return foundation.test.templates.twitter_power.call(null,id);
}));
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null)], null),(function (renderer,p__408992,input,pid,id){var vec__408993 = p__408992;var op = cljs.core.nth.call(null,vec__408993,0,null);var path = cljs.core.nth.call(null,vec__408993,1,null);var old = cljs.core.nth.call(null,vec__408993,2,null);var new$ = cljs.core.nth.call(null,vec__408993,3,null);foundation.app.render._set_data.call(null,renderer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"resource","resource",672839552)], null),new cljs.core.Keyword(null,"resource","resource",672839552).cljs$core$IFn$_invoke$arity$1(new$));
return foundation.test.components.datagrid.datagrid.call(null,input,id,new$);
}));
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-update","node-update",597066342),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null)], null),(function (renderer,p__408994,input,pid,id){var vec__408995 = p__408994;var op = cljs.core.nth.call(null,vec__408995,0,null);var path = cljs.core.nth.call(null,vec__408995,1,null);var old = cljs.core.nth.call(null,vec__408995,2,null);var new$ = cljs.core.nth.call(null,vec__408995,3,null);foundation.test.components.datagrid.set_datagrid_height_BANG_.call(null);
return foundation.app.render._set_data.call(null,renderer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"resource","resource",672839552)], null),new cljs.core.Keyword(null,"resource","resource",672839552).cljs$core$IFn$_invoke$arity$1(new$));
}));
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-update","node-update",597066342),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null)], null),(function (renderer,p__408996,input,pid,id){var vec__408997 = p__408996;var op = cljs.core.nth.call(null,vec__408997,0,null);var path = cljs.core.nth.call(null,vec__408997,1,null);var old = cljs.core.nth.call(null,vec__408997,2,null);var new$ = cljs.core.nth.call(null,vec__408997,3,null);foundation.test.components.datagrid.set_datagrid_height_BANG_.call(null);
foundation.test.components.datagrid.fix_column_widths_BANG_.call(null);
var resource = foundation.app.render._get_data.call(null,renderer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"resource","resource",672839552)], null));if(typeof foundation.test.rendering.t408998 !== 'undefined')
{} else
{
/**
* @constructor
*/
foundation.test.rendering.t408998 = (function (new$,input,vec__408997,id,old,path,p__408996,renderer,op,pid,resource,meta408999){
this.new$ = new$;
this.input = input;
this.vec__408997 = vec__408997;
this.id = id;
this.old = old;
this.path = path;
this.p__408996 = p__408996;
this.renderer = renderer;
this.op = op;
this.pid = pid;
this.resource = resource;
this.meta408999 = meta408999;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
foundation.test.rendering.t408998.cljs$lang$type = true;
foundation.test.rendering.t408998.cljs$lang$ctorStr = "foundation.test.rendering/t408998";
foundation.test.rendering.t408998.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"foundation.test.rendering/t408998");
});
foundation.test.rendering.t408998.prototype.foundation$app$ui$IPostProcess$ = true;
foundation.test.rendering.t408998.prototype.foundation$app$ui$IPostProcess$_post_process$arity$1 = (function (_){var self__ = this;
var ___$1 = this;foundation.test.components.datagrid.set_datagrid_height_BANG_.call(null);
return foundation.test.components.datagrid.fix_column_widths_BANG_.call(null);
});
foundation.test.rendering.t408998.prototype.foundation$app$ui$IRender$ = true;
foundation.test.rendering.t408998.prototype.foundation$app$ui$IRender$_render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return foundation.test.components.datagrid.datagrid_body.call(null,self__.new$,foundation.test.models.columns.call(null,self__.resource));
});
foundation.test.rendering.t408998.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_409000){var self__ = this;
var _409000__$1 = this;return self__.meta408999;
});
foundation.test.rendering.t408998.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_409000,meta408999__$1){var self__ = this;
var _409000__$1 = this;return (new foundation.test.rendering.t408998(self__.new$,self__.input,self__.vec__408997,self__.id,self__.old,self__.path,self__.p__408996,self__.renderer,self__.op,self__.pid,self__.resource,meta408999__$1));
});
foundation.test.rendering.__GT_t408998 = (function __GT_t408998(new$__$1,input__$1,vec__408997__$1,id__$1,old__$1,path__$1,p__408996__$1,renderer__$1,op__$1,pid__$1,resource__$1,meta408999){return (new foundation.test.rendering.t408998(new$__$1,input__$1,vec__408997__$1,id__$1,old__$1,path__$1,p__408996__$1,renderer__$1,op__$1,pid__$1,resource__$1,meta408999));
});
}
return (new foundation.test.rendering.t408998(new$,input,vec__408997,id,old,path,p__408996,renderer,op,pid,resource,null));
}));
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null)], null),(function (renderer,p__409001,input,pid,id){var vec__409002 = p__409001;var op = cljs.core.nth.call(null,vec__409002,0,null);var path = cljs.core.nth.call(null,vec__409002,1,null);var old = cljs.core.nth.call(null,vec__409002,2,null);var new$ = cljs.core.nth.call(null,vec__409002,3,null);return foundation.test.components.dashboard.dashboard.call(null,renderer,id,new$);
}));
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null)], null),(function (renderer,p__409003,input,pid,id){var vec__409004 = p__409003;var op = cljs.core.nth.call(null,vec__409004,0,null);var path = cljs.core.nth.call(null,vec__409004,1,null);var old = cljs.core.nth.call(null,vec__409004,2,null);var new$ = cljs.core.nth.call(null,vec__409004,3,null);var chart = foundation.test.components.chart.highchart.call(null);var stat = new cljs.core.Keyword(null,"promoted-tweet-timeline-clicks","promoted-tweet-timeline-clicks",1759953572).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"stats","stats",1123661841).cljs$core$IFn$_invoke$arity$1(new$));var start_time = (new Date(new cljs.core.Keyword(null,"start-time","start-time",3689550026).cljs$core$IFn$_invoke$arity$1(new$))).getTime();var seq__409005_409009 = cljs.core.seq.call(null,chart.series);var chunk__409006_409010 = null;var count__409007_409011 = 0;var i__409008_409012 = 0;while(true){
if((i__409008_409012 < count__409007_409011))
{var series_409013 = cljs.core._nth.call(null,chunk__409006_409010,i__409008_409012);series_409013.remove();
{
var G__409014 = seq__409005_409009;
var G__409015 = chunk__409006_409010;
var G__409016 = count__409007_409011;
var G__409017 = (i__409008_409012 + 1);
seq__409005_409009 = G__409014;
chunk__409006_409010 = G__409015;
count__409007_409011 = G__409016;
i__409008_409012 = G__409017;
continue;
}
} else
{var temp__4092__auto___409018 = cljs.core.seq.call(null,seq__409005_409009);if(temp__4092__auto___409018)
{var seq__409005_409019__$1 = temp__4092__auto___409018;if(cljs.core.chunked_seq_QMARK_.call(null,seq__409005_409019__$1))
{var c__8952__auto___409020 = cljs.core.chunk_first.call(null,seq__409005_409019__$1);{
var G__409021 = cljs.core.chunk_rest.call(null,seq__409005_409019__$1);
var G__409022 = c__8952__auto___409020;
var G__409023 = cljs.core.count.call(null,c__8952__auto___409020);
var G__409024 = 0;
seq__409005_409009 = G__409021;
chunk__409006_409010 = G__409022;
count__409007_409011 = G__409023;
i__409008_409012 = G__409024;
continue;
}
} else
{var series_409025 = cljs.core.first.call(null,seq__409005_409019__$1);series_409025.remove();
{
var G__409026 = cljs.core.next.call(null,seq__409005_409019__$1);
var G__409027 = null;
var G__409028 = 0;
var G__409029 = 0;
seq__409005_409009 = G__409026;
chunk__409006_409010 = G__409027;
count__409007_409011 = G__409028;
i__409008_409012 = G__409029;
continue;
}
}
} else
{}
}
break;
}
chart.addSeries(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data","data",1016980252),stat,new cljs.core.Keyword(null,"pointInterval","pointInterval",1241580007),(3600 * 1000),new cljs.core.Keyword(null,"pointStart","pointStart",2269080612),start_time], null)));
foundation.app.render._set_data.call(null,renderer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null),chart);
foundation.test.rendering.start_date_picker.call(null,renderer,new cljs.core.Keyword(null,"start-time","start-time",3689550026).cljs$core$IFn$_invoke$arity$1(new$));
foundation.test.rendering.end_date_picker.call(null,renderer,new cljs.core.Keyword(null,"end-time","end-time",2693279729).cljs$core$IFn$_invoke$arity$1(new$));
return null;
}));
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-update","node-update",597066342),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null)], null),(function (renderer,p__409030,input,pid,id){var vec__409031 = p__409030;var op = cljs.core.nth.call(null,vec__409031,0,null);var path = cljs.core.nth.call(null,vec__409031,1,null);var old = cljs.core.nth.call(null,vec__409031,2,null);var new$ = cljs.core.nth.call(null,vec__409031,3,null);var chart = foundation.app.render._get_data.call(null,renderer,path);var start_time = (new Date(new cljs.core.Keyword(null,"start-time","start-time",3689550026).cljs$core$IFn$_invoke$arity$1(new$))).getTime();var seq__409032_409036 = cljs.core.seq.call(null,chart.series);var chunk__409033_409037 = null;var count__409034_409038 = 0;var i__409035_409039 = 0;while(true){
if((i__409035_409039 < count__409034_409038))
{var series_409040 = cljs.core._nth.call(null,chunk__409033_409037,i__409035_409039);series_409040.remove();
{
var G__409041 = seq__409032_409036;
var G__409042 = chunk__409033_409037;
var G__409043 = count__409034_409038;
var G__409044 = (i__409035_409039 + 1);
seq__409032_409036 = G__409041;
chunk__409033_409037 = G__409042;
count__409034_409038 = G__409043;
i__409035_409039 = G__409044;
continue;
}
} else
{var temp__4092__auto___409045 = cljs.core.seq.call(null,seq__409032_409036);if(temp__4092__auto___409045)
{var seq__409032_409046__$1 = temp__4092__auto___409045;if(cljs.core.chunked_seq_QMARK_.call(null,seq__409032_409046__$1))
{var c__8952__auto___409047 = cljs.core.chunk_first.call(null,seq__409032_409046__$1);{
var G__409048 = cljs.core.chunk_rest.call(null,seq__409032_409046__$1);
var G__409049 = c__8952__auto___409047;
var G__409050 = cljs.core.count.call(null,c__8952__auto___409047);
var G__409051 = 0;
seq__409032_409036 = G__409048;
chunk__409033_409037 = G__409049;
count__409034_409038 = G__409050;
i__409035_409039 = G__409051;
continue;
}
} else
{var series_409052 = cljs.core.first.call(null,seq__409032_409046__$1);series_409052.remove();
{
var G__409053 = cljs.core.next.call(null,seq__409032_409046__$1);
var G__409054 = null;
var G__409055 = 0;
var G__409056 = 0;
seq__409032_409036 = G__409053;
chunk__409033_409037 = G__409054;
count__409034_409038 = G__409055;
i__409035_409039 = G__409056;
continue;
}
}
} else
{}
}
break;
}
return chart.addSeries(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.Keyword(null,"stat","stat",1017444806).cljs$core$IFn$_invoke$arity$1(new$),new cljs.core.Keyword(null,"pointInterval","pointInterval",1241580007),(3600 * 1000),new cljs.core.Keyword(null,"pointStart","pointStart",2269080612),start_time], null)));
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