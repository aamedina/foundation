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
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),cljs.core.PersistentVector.EMPTY], null),(function (renderer,p__408891,input,pid,id){var vec__408892 = p__408891;var op = cljs.core.nth.call(null,vec__408892,0,null);var path = cljs.core.nth.call(null,vec__408892,1,null);var old = cljs.core.nth.call(null,vec__408892,2,null);var new$ = cljs.core.nth.call(null,vec__408892,3,null);return foundation.test.templates.twitter_power.call(null,id);
}));
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null)], null),(function (renderer,p__408893,input,pid,id){var vec__408894 = p__408893;var op = cljs.core.nth.call(null,vec__408894,0,null);var path = cljs.core.nth.call(null,vec__408894,1,null);var old = cljs.core.nth.call(null,vec__408894,2,null);var new$ = cljs.core.nth.call(null,vec__408894,3,null);foundation.app.render._set_data.call(null,renderer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"resource","resource",672839552)], null),new cljs.core.Keyword(null,"resource","resource",672839552).cljs$core$IFn$_invoke$arity$1(new$));
return foundation.test.components.datagrid.datagrid.call(null,input,id,new$);
}));
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-update","node-update",597066342),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null)], null),(function (renderer,p__408895,input,pid,id){var vec__408896 = p__408895;var op = cljs.core.nth.call(null,vec__408896,0,null);var path = cljs.core.nth.call(null,vec__408896,1,null);var old = cljs.core.nth.call(null,vec__408896,2,null);var new$ = cljs.core.nth.call(null,vec__408896,3,null);foundation.test.components.datagrid.set_datagrid_height_BANG_.call(null);
return foundation.app.render._set_data.call(null,renderer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"resource","resource",672839552)], null),new cljs.core.Keyword(null,"resource","resource",672839552).cljs$core$IFn$_invoke$arity$1(new$));
}));
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-update","node-update",597066342),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null)], null),(function (renderer,p__408897,input,pid,id){var vec__408898 = p__408897;var op = cljs.core.nth.call(null,vec__408898,0,null);var path = cljs.core.nth.call(null,vec__408898,1,null);var old = cljs.core.nth.call(null,vec__408898,2,null);var new$ = cljs.core.nth.call(null,vec__408898,3,null);foundation.test.components.datagrid.set_datagrid_height_BANG_.call(null);
foundation.test.components.datagrid.fix_column_widths_BANG_.call(null);
var resource = foundation.app.render._get_data.call(null,renderer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"resource","resource",672839552)], null));if(typeof foundation.test.rendering.t408899 !== 'undefined')
{} else
{
/**
* @constructor
*/
foundation.test.rendering.t408899 = (function (new$,input,id,old,path,renderer,op,pid,resource,vec__408898,p__408897,meta408900){
this.new$ = new$;
this.input = input;
this.id = id;
this.old = old;
this.path = path;
this.renderer = renderer;
this.op = op;
this.pid = pid;
this.resource = resource;
this.vec__408898 = vec__408898;
this.p__408897 = p__408897;
this.meta408900 = meta408900;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
foundation.test.rendering.t408899.cljs$lang$type = true;
foundation.test.rendering.t408899.cljs$lang$ctorStr = "foundation.test.rendering/t408899";
foundation.test.rendering.t408899.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"foundation.test.rendering/t408899");
});
foundation.test.rendering.t408899.prototype.foundation$app$ui$IPostProcess$ = true;
foundation.test.rendering.t408899.prototype.foundation$app$ui$IPostProcess$_post_process$arity$1 = (function (_){var self__ = this;
var ___$1 = this;foundation.test.components.datagrid.set_datagrid_height_BANG_.call(null);
return foundation.test.components.datagrid.fix_column_widths_BANG_.call(null);
});
foundation.test.rendering.t408899.prototype.foundation$app$ui$IRender$ = true;
foundation.test.rendering.t408899.prototype.foundation$app$ui$IRender$_render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return foundation.test.components.datagrid.datagrid_body.call(null,self__.new$,foundation.test.models.columns.call(null,self__.resource));
});
foundation.test.rendering.t408899.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_408901){var self__ = this;
var _408901__$1 = this;return self__.meta408900;
});
foundation.test.rendering.t408899.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_408901,meta408900__$1){var self__ = this;
var _408901__$1 = this;return (new foundation.test.rendering.t408899(self__.new$,self__.input,self__.id,self__.old,self__.path,self__.renderer,self__.op,self__.pid,self__.resource,self__.vec__408898,self__.p__408897,meta408900__$1));
});
foundation.test.rendering.__GT_t408899 = (function __GT_t408899(new$__$1,input__$1,id__$1,old__$1,path__$1,renderer__$1,op__$1,pid__$1,resource__$1,vec__408898__$1,p__408897__$1,meta408900){return (new foundation.test.rendering.t408899(new$__$1,input__$1,id__$1,old__$1,path__$1,renderer__$1,op__$1,pid__$1,resource__$1,vec__408898__$1,p__408897__$1,meta408900));
});
}
return (new foundation.test.rendering.t408899(new$,input,id,old,path,renderer,op,pid,resource,vec__408898,p__408897,null));
}));
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null)], null),(function (renderer,p__408902,input,pid,id){var vec__408903 = p__408902;var op = cljs.core.nth.call(null,vec__408903,0,null);var path = cljs.core.nth.call(null,vec__408903,1,null);var old = cljs.core.nth.call(null,vec__408903,2,null);var new$ = cljs.core.nth.call(null,vec__408903,3,null);return foundation.test.components.dashboard.dashboard.call(null,renderer,id,new$);
}));
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null)], null),(function (renderer,p__408904,input,pid,id){var vec__408905 = p__408904;var op = cljs.core.nth.call(null,vec__408905,0,null);var path = cljs.core.nth.call(null,vec__408905,1,null);var old = cljs.core.nth.call(null,vec__408905,2,null);var new$ = cljs.core.nth.call(null,vec__408905,3,null);var chart = foundation.test.components.chart.highchart.call(null);var stat = new cljs.core.Keyword(null,"promoted-tweet-timeline-clicks","promoted-tweet-timeline-clicks",1759953572).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"stats","stats",1123661841).cljs$core$IFn$_invoke$arity$1(new$));var start_time = (new Date(new cljs.core.Keyword(null,"start-time","start-time",3689550026).cljs$core$IFn$_invoke$arity$1(new$))).getTime();var seq__408906_408910 = cljs.core.seq.call(null,chart.series);var chunk__408907_408911 = null;var count__408908_408912 = 0;var i__408909_408913 = 0;while(true){
if((i__408909_408913 < count__408908_408912))
{var series_408914 = cljs.core._nth.call(null,chunk__408907_408911,i__408909_408913);series_408914.remove();
{
var G__408915 = seq__408906_408910;
var G__408916 = chunk__408907_408911;
var G__408917 = count__408908_408912;
var G__408918 = (i__408909_408913 + 1);
seq__408906_408910 = G__408915;
chunk__408907_408911 = G__408916;
count__408908_408912 = G__408917;
i__408909_408913 = G__408918;
continue;
}
} else
{var temp__4092__auto___408919 = cljs.core.seq.call(null,seq__408906_408910);if(temp__4092__auto___408919)
{var seq__408906_408920__$1 = temp__4092__auto___408919;if(cljs.core.chunked_seq_QMARK_.call(null,seq__408906_408920__$1))
{var c__8952__auto___408921 = cljs.core.chunk_first.call(null,seq__408906_408920__$1);{
var G__408922 = cljs.core.chunk_rest.call(null,seq__408906_408920__$1);
var G__408923 = c__8952__auto___408921;
var G__408924 = cljs.core.count.call(null,c__8952__auto___408921);
var G__408925 = 0;
seq__408906_408910 = G__408922;
chunk__408907_408911 = G__408923;
count__408908_408912 = G__408924;
i__408909_408913 = G__408925;
continue;
}
} else
{var series_408926 = cljs.core.first.call(null,seq__408906_408920__$1);series_408926.remove();
{
var G__408927 = cljs.core.next.call(null,seq__408906_408920__$1);
var G__408928 = null;
var G__408929 = 0;
var G__408930 = 0;
seq__408906_408910 = G__408927;
chunk__408907_408911 = G__408928;
count__408908_408912 = G__408929;
i__408909_408913 = G__408930;
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
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-update","node-update",597066342),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null)], null),(function (renderer,p__408931,input,pid,id){var vec__408932 = p__408931;var op = cljs.core.nth.call(null,vec__408932,0,null);var path = cljs.core.nth.call(null,vec__408932,1,null);var old = cljs.core.nth.call(null,vec__408932,2,null);var new$ = cljs.core.nth.call(null,vec__408932,3,null);var chart = foundation.app.render._get_data.call(null,renderer,path);var start_time = (new Date(new cljs.core.Keyword(null,"start-time","start-time",3689550026).cljs$core$IFn$_invoke$arity$1(new$))).getTime();var seq__408933_408937 = cljs.core.seq.call(null,chart.series);var chunk__408934_408938 = null;var count__408935_408939 = 0;var i__408936_408940 = 0;while(true){
if((i__408936_408940 < count__408935_408939))
{var series_408941 = cljs.core._nth.call(null,chunk__408934_408938,i__408936_408940);series_408941.remove();
{
var G__408942 = seq__408933_408937;
var G__408943 = chunk__408934_408938;
var G__408944 = count__408935_408939;
var G__408945 = (i__408936_408940 + 1);
seq__408933_408937 = G__408942;
chunk__408934_408938 = G__408943;
count__408935_408939 = G__408944;
i__408936_408940 = G__408945;
continue;
}
} else
{var temp__4092__auto___408946 = cljs.core.seq.call(null,seq__408933_408937);if(temp__4092__auto___408946)
{var seq__408933_408947__$1 = temp__4092__auto___408946;if(cljs.core.chunked_seq_QMARK_.call(null,seq__408933_408947__$1))
{var c__8952__auto___408948 = cljs.core.chunk_first.call(null,seq__408933_408947__$1);{
var G__408949 = cljs.core.chunk_rest.call(null,seq__408933_408947__$1);
var G__408950 = c__8952__auto___408948;
var G__408951 = cljs.core.count.call(null,c__8952__auto___408948);
var G__408952 = 0;
seq__408933_408937 = G__408949;
chunk__408934_408938 = G__408950;
count__408935_408939 = G__408951;
i__408936_408940 = G__408952;
continue;
}
} else
{var series_408953 = cljs.core.first.call(null,seq__408933_408947__$1);series_408953.remove();
{
var G__408954 = cljs.core.next.call(null,seq__408933_408947__$1);
var G__408955 = null;
var G__408956 = 0;
var G__408957 = 0;
seq__408933_408937 = G__408954;
chunk__408934_408938 = G__408955;
count__408935_408939 = G__408956;
i__408936_408940 = G__408957;
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