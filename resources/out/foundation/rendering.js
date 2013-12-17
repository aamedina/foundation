// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.rendering');
goog.require('cljs.core');
goog.require('foundation.app');
goog.require('foundation.chart');
goog.require('foundation.app.render');
goog.require('cljs.core.async');
goog.require('clojure.zip');
goog.require('foundation.app');
goog.require('cljs_time.coerce');
goog.require('goog.events');
goog.require('goog.dom.ViewportSizeMonitor');
goog.require('foundation.app.message');
goog.require('foundation.app.render');
goog.require('enfocus.events');
goog.require('foundation.behavior');
goog.require('clojure.zip');
goog.require('goog.dom');
goog.require('enfocus.core');
goog.require('dommy.core');
goog.require('foundation.app.xhr');
goog.require('enfocus.core');
goog.require('foundation.app.util');
goog.require('foundation.chart');
goog.require('foundation.chart');
goog.require('clojure.set');
goog.require('foundation.templates');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('foundation.app');
goog.require('clojure.string');
goog.require('foundation.templates');
goog.require('cljs.core.match');
goog.require('clojure.browser.repl');
goog.require('clojure.set');
goog.require('enfocus.events');
goog.require('foundation.app.message');
goog.require('foundation.models');
goog.require('cljs.core.match');
goog.require('cljs.core.async');
goog.require('goog.style');
goog.require('foundation.app.xhr');
goog.require('foundation.app.util');
goog.require('cljs_time.coerce');
goog.require('goog.events');
goog.require('foundation.app.render');
goog.require('foundation.behavior');
goog.require('dommy.core');
goog.require('foundation.models');
cljs.core.enable_console_print_BANG_.call(null);
foundation.rendering.css_id = (function css_id(id){return [cljs.core.str("#"),cljs.core.str(id)].join('');
});
cljs.core._add_method.call(null,foundation.app.render.node_create,cljs.core.PersistentVector.EMPTY,(function (renderer,p__325056,input_queue,parent_id,id){var vec__325057 = p__325056;var _ = cljs.core.nth.call(null,vec__325057,0,null);var path = cljs.core.nth.call(null,vec__325057,1,null);var ___$1 = cljs.core.nth.call(null,vec__325057,2,null);var val = cljs.core.nth.call(null,vec__325057,3,null);return enfocus.core.at.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",1016933652)], null),enfocus.core.append.call(null,foundation.templates.twitter_power.call(null,id)));
}));
foundation.rendering.stats_msg = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"stats","stats",1123661841),foundation.app.message.path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null)], true, false);
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null),(function (renderer,p__325058,input_queue,parent_id,id){var vec__325059 = p__325058;var _ = cljs.core.nth.call(null,vec__325059,0,null);var path = cljs.core.nth.call(null,vec__325059,1,null);var ___$1 = cljs.core.nth.call(null,vec__325059,2,null);var val = cljs.core.nth.call(null,vec__325059,3,null);enfocus.core.at.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.rendering.css_id.call(null,parent_id)], null),enfocus.core.append.call(null,foundation.templates.dashboard.call(null,id)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#Impressions")].join('')], null),enfocus.core.add_class.call(null,"active"));
var seq__325060 = cljs.core.seq.call(null,foundation.templates.dashboard_metrics);var chunk__325061 = null;var count__325062 = 0;var i__325063 = 0;while(true){
if((i__325063 < count__325062))
{var vec__325064 = cljs.core._nth.call(null,chunk__325061,i__325063);var metric = cljs.core.nth.call(null,vec__325064,0,null);var cpa = cljs.core.nth.call(null,vec__325064,1,null);var rate = cljs.core.nth.call(null,vec__325064,2,null);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric)].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__325060,chunk__325061,count__325062,i__325063,vec__325064,metric,cpa,rate){
return (function (e){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"total","total",1124454070)));
});})(seq__325060,chunk__325061,count__325062,i__325063,vec__325064,metric,cpa,rate))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__325060,chunk__325061,count__325062,i__325063,vec__325064,metric,cpa,rate){
return (function (){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"cpa","cpa",1014002950)));
});})(seq__325060,chunk__325061,count__325062,i__325063,vec__325064,metric,cpa,rate))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__325060,chunk__325061,count__325062,i__325063,vec__325064,metric,cpa,rate){
return (function (){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"rate","rate",1017397330)));
});})(seq__325060,chunk__325061,count__325062,i__325063,vec__325064,metric,cpa,rate))
));
{
var G__325066 = seq__325060;
var G__325067 = chunk__325061;
var G__325068 = count__325062;
var G__325069 = (i__325063 + 1);
seq__325060 = G__325066;
chunk__325061 = G__325067;
count__325062 = G__325068;
i__325063 = G__325069;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__325060);if(temp__4092__auto__)
{var seq__325060__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__325060__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__325060__$1);{
var G__325070 = cljs.core.chunk_rest.call(null,seq__325060__$1);
var G__325071 = c__14547__auto__;
var G__325072 = cljs.core.count.call(null,c__14547__auto__);
var G__325073 = 0;
seq__325060 = G__325070;
chunk__325061 = G__325071;
count__325062 = G__325072;
i__325063 = G__325073;
continue;
}
} else
{var vec__325065 = cljs.core.first.call(null,seq__325060__$1);var metric = cljs.core.nth.call(null,vec__325065,0,null);var cpa = cljs.core.nth.call(null,vec__325065,1,null);var rate = cljs.core.nth.call(null,vec__325065,2,null);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric)].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__325060,chunk__325061,count__325062,i__325063,vec__325065,metric,cpa,rate,seq__325060__$1,temp__4092__auto__){
return (function (e){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"total","total",1124454070)));
});})(seq__325060,chunk__325061,count__325062,i__325063,vec__325065,metric,cpa,rate,seq__325060__$1,temp__4092__auto__))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__325060,chunk__325061,count__325062,i__325063,vec__325065,metric,cpa,rate,seq__325060__$1,temp__4092__auto__){
return (function (){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"cpa","cpa",1014002950)));
});})(seq__325060,chunk__325061,count__325062,i__325063,vec__325065,metric,cpa,rate,seq__325060__$1,temp__4092__auto__))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__325060,chunk__325061,count__325062,i__325063,vec__325065,metric,cpa,rate,seq__325060__$1,temp__4092__auto__){
return (function (){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"rate","rate",1017397330)));
});})(seq__325060,chunk__325061,count__325062,i__325063,vec__325065,metric,cpa,rate,seq__325060__$1,temp__4092__auto__))
));
{
var G__325074 = cljs.core.next.call(null,seq__325060__$1);
var G__325075 = null;
var G__325076 = 0;
var G__325077 = 0;
seq__325060 = G__325074;
chunk__325061 = G__325075;
count__325062 = G__325076;
i__325063 = G__325077;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
foundation.rendering.start_date_picker = (function start_date_picker(renderer,start_time){var temp__4090__auto__ = foundation.app.render.get_data.call(null,renderer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-time-picker","start-time-picker",2510165525)], null));if(cljs.core.truth_(temp__4090__auto__))
{var picker = temp__4090__auto__;return picker;
} else
{var picker = foundation.templates.date_picker.call(null,document.querySelector(".date-picker#start-time"),(new Date(start_time)),new cljs.core.Keyword(null,"long-date","long-date",1095363537));foundation.app.render.set_data_BANG_.call(null,renderer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-time-picker","start-time-picker",2510165525)], null),picker);
return picker;
}
});
foundation.rendering.end_date_picker = (function end_date_picker(renderer,end_time){var temp__4090__auto__ = foundation.app.render.get_data.call(null,renderer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"end-time-picker","end-time-picker",4747750670)], null));if(cljs.core.truth_(temp__4090__auto__))
{var picker = temp__4090__auto__;return picker;
} else
{var picker = foundation.templates.date_picker.call(null,document.querySelector(".date-picker#end-time"),(new Date(end_time)),new cljs.core.Keyword(null,"long-date","long-date",1095363537));foundation.app.render.set_data_BANG_.call(null,renderer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"end-time-picker","end-time-picker",4747750670)], null),picker);
return picker;
}
});
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null),(function (renderer,p__325078,input_queue,parent_id,id){var vec__325079 = p__325078;var _ = cljs.core.nth.call(null,vec__325079,0,null);var path = cljs.core.nth.call(null,vec__325079,1,null);var ___$1 = cljs.core.nth.call(null,vec__325079,2,null);var map__325080 = cljs.core.nth.call(null,vec__325079,3,null);var map__325080__$1 = ((cljs.core.seq_QMARK_.call(null,map__325080))?cljs.core.apply.call(null,cljs.core.hash_map,map__325080):map__325080);var val = map__325080__$1;var model = cljs.core.get.call(null,map__325080__$1,new cljs.core.Keyword(null,"model","model",1117974171));var end_time = cljs.core.get.call(null,map__325080__$1,new cljs.core.Keyword(null,"end-time","end-time",2693279729));var start_time = cljs.core.get.call(null,map__325080__$1,new cljs.core.Keyword(null,"start-time","start-time",3689550026));var stats = cljs.core.get.call(null,map__325080__$1,new cljs.core.Keyword(null,"stats","stats",1123661841));if(cljs.core.truth_(start_time))
{var start_picker = foundation.rendering.start_date_picker.call(null,renderer,start_time);var end_picker = foundation.rendering.end_date_picker.call(null,renderer,end_time);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,[cljs.core.str("#"),cljs.core.str(parent_id)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#resource-id","#resource-id",2471321257)], null),enfocus.core.content.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(model)));
var seq__325081 = cljs.core.seq.call(null,foundation.templates.dashboard_metrics);var chunk__325082 = null;var count__325083 = 0;var i__325084 = 0;while(true){
if((i__325084 < count__325083))
{var vec__325085 = cljs.core._nth.call(null,chunk__325082,i__325084);var metric = cljs.core.nth.call(null,vec__325085,0,null);var cpa = cljs.core.nth.call(null,vec__325085,1,null);var rate = cljs.core.nth.call(null,vec__325085,2,null);var total_325087 = cljs.core.get.call(null,new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(stats),metric);var _cpa_325088 = cljs.core.get.call(null,new cljs.core.Keyword(null,"cpa","cpa",1014002950).cljs$core$IFn$_invoke$arity$1(stats),metric);var _rate_325089 = cljs.core.get.call(null,new cljs.core.Keyword(null,"rate","rate",1017397330).cljs$core$IFn$_invoke$arity$1(stats),metric);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric)].join('')], null),enfocus.core.content.call(null,[cljs.core.str(total_325087),cljs.core.str(" "),cljs.core.str(metric)].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),enfocus.core.content.call(null,[cljs.core.str(_cpa_325088),cljs.core.str(" "),cljs.core.str(cpa)].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),enfocus.core.content.call(null,[cljs.core.str(_rate_325089),cljs.core.str(" "),cljs.core.str(rate)].join('')));
{
var G__325090 = seq__325081;
var G__325091 = chunk__325082;
var G__325092 = count__325083;
var G__325093 = (i__325084 + 1);
seq__325081 = G__325090;
chunk__325082 = G__325091;
count__325083 = G__325092;
i__325084 = G__325093;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__325081);if(temp__4092__auto__)
{var seq__325081__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__325081__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__325081__$1);{
var G__325094 = cljs.core.chunk_rest.call(null,seq__325081__$1);
var G__325095 = c__14547__auto__;
var G__325096 = cljs.core.count.call(null,c__14547__auto__);
var G__325097 = 0;
seq__325081 = G__325094;
chunk__325082 = G__325095;
count__325083 = G__325096;
i__325084 = G__325097;
continue;
}
} else
{var vec__325086 = cljs.core.first.call(null,seq__325081__$1);var metric = cljs.core.nth.call(null,vec__325086,0,null);var cpa = cljs.core.nth.call(null,vec__325086,1,null);var rate = cljs.core.nth.call(null,vec__325086,2,null);var total_325098 = cljs.core.get.call(null,new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(stats),metric);var _cpa_325099 = cljs.core.get.call(null,new cljs.core.Keyword(null,"cpa","cpa",1014002950).cljs$core$IFn$_invoke$arity$1(stats),metric);var _rate_325100 = cljs.core.get.call(null,new cljs.core.Keyword(null,"rate","rate",1017397330).cljs$core$IFn$_invoke$arity$1(stats),metric);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric)].join('')], null),enfocus.core.content.call(null,[cljs.core.str(total_325098),cljs.core.str(" "),cljs.core.str(metric)].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),enfocus.core.content.call(null,[cljs.core.str(_cpa_325099),cljs.core.str(" "),cljs.core.str(cpa)].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),enfocus.core.content.call(null,[cljs.core.str(_rate_325100),cljs.core.str(" "),cljs.core.str(rate)].join('')));
{
var G__325101 = cljs.core.next.call(null,seq__325081__$1);
var G__325102 = null;
var G__325103 = 0;
var G__325104 = 0;
seq__325081 = G__325101;
chunk__325082 = G__325102;
count__325083 = G__325103;
i__325084 = G__325104;
continue;
}
}
} else
{return null;
}
}
break;
}
} else
{return null;
}
}));
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null),(function (renderer,p__325105,input_queue,parent_id,id){var vec__325106 = p__325105;var _ = cljs.core.nth.call(null,vec__325106,0,null);var path = cljs.core.nth.call(null,vec__325106,1,null);var ___$1 = cljs.core.nth.call(null,vec__325106,2,null);var ___$2 = cljs.core.nth.call(null,vec__325106,3,null);return enfocus.core.at.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.rendering.css_id.call(null,parent_id)], null),enfocus.core.append.call(null,foundation.templates.datagrid.call(null,id)));
}));
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null),(function (renderer,p__325107,input_queue,parent_id,id){var vec__325108 = p__325107;var _ = cljs.core.nth.call(null,vec__325108,0,null);var path = cljs.core.nth.call(null,vec__325108,1,null);var ___$1 = cljs.core.nth.call(null,vec__325108,2,null);var val = cljs.core.nth.call(null,vec__325108,3,null);if(cljs.core._EQ_.call(null,foundation.app.render.get_data.call(null,renderer,path),new cljs.core.Keyword(null,"resource","resource",672839552).cljs$core$IFn$_invoke$arity$1(val)))
{return null;
} else
{return foundation.app.render.set_data_BANG_.call(null,renderer,path,new cljs.core.Keyword(null,"resource","resource",672839552).cljs$core$IFn$_invoke$arity$1(val));
}
}));
foundation.rendering.create_msg = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"create","create",3956577390),foundation.app.message.path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null)], true, false);
foundation.rendering.save_msg = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"save","save",1017427183),foundation.app.message.path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null)], true, false);
foundation.rendering.delete_msg = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"delete","delete",3973413149),foundation.app.message.path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null)], true, false);
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null),(function (renderer,p__325109,input_queue,parent_id,id){var vec__325110 = p__325109;var _ = cljs.core.nth.call(null,vec__325110,0,null);var path = cljs.core.nth.call(null,vec__325110,1,null);var ___$1 = cljs.core.nth.call(null,vec__325110,2,null);var val = cljs.core.nth.call(null,vec__325110,3,null);var model = foundation.app.render.get_data.call(null,renderer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null));enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",3798183098)], null),enfocus.core.content.call(null,foundation.templates.datagrid_table.call(null,model,cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#new","button#new",1370997825)], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return cljs.core.async.put_BANG_.call(null,input_queue,foundation.rendering.create_msg);
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#save","button#save",3494015904)], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return cljs.core.async.put_BANG_.call(null,input_queue,foundation.rendering.save_msg);
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#delete","button#delete",4563292046)], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return cljs.core.async.put_BANG_.call(null,input_queue,foundation.rendering.delete_msg);
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#dupe","button#dupe",3493588073)], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return cljs.core.async.put_BANG_.call(null,input_queue,foundation.rendering.create_msg);
})));
return foundation.rendering.as_resizable.call(null);
}));
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null),(function (renderer,p__325111,input_queue,parent_id,id){var vec__325112 = p__325111;var _ = cljs.core.nth.call(null,vec__325112,0,null);var path = cljs.core.nth.call(null,vec__325112,1,null);var ___$1 = cljs.core.nth.call(null,vec__325112,2,null);var val = cljs.core.nth.call(null,vec__325112,3,null);var model = foundation.app.render.get_data.call(null,renderer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null));var row_count = cljs.core.count.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByTagName("tbody"))[0]).rows);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",3798183098)], null),enfocus.core.content.call(null,foundation.templates.datagrid_table.call(null,model,val)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body>tr","div.panel-body>tr",3056946278)], null),enfocus.core.content.call(null,foundation.templates.datagrid_table.call(null,model,val)));
foundation.rendering.set_datagrid_height_BANG_.call(null);
return foundation.rendering.fix_column_widths_BANG_.call(null);
}));
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null),(function (renderer,p__325113,input_queue,parent_id,id){var vec__325114 = p__325113;var _ = cljs.core.nth.call(null,vec__325114,0,null);var path = cljs.core.nth.call(null,vec__325114,1,null);var ___$1 = cljs.core.nth.call(null,vec__325114,2,null);var ___$2 = cljs.core.nth.call(null,vec__325114,3,null);var chart = foundation.chart.highchart.call(null);return foundation.app.render.set_data_BANG_.call(null,renderer,path,chart);
}));
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null),(function (renderer,p__325115,input_queue,parent_id,id){var vec__325116 = p__325115;var _ = cljs.core.nth.call(null,vec__325116,0,null);var path = cljs.core.nth.call(null,vec__325116,1,null);var ___$1 = cljs.core.nth.call(null,vec__325116,2,null);var val = cljs.core.nth.call(null,vec__325116,3,null);var chart = foundation.app.render.get_data.call(null,renderer,path);var start_time = (new Date(new cljs.core.Keyword(null,"start-time","start-time",3689550026).cljs$core$IFn$_invoke$arity$1(val))).getTime();var seq__325117_325121 = cljs.core.seq.call(null,chart.series);var chunk__325118_325122 = null;var count__325119_325123 = 0;var i__325120_325124 = 0;while(true){
if((i__325120_325124 < count__325119_325123))
{var series_325125 = cljs.core._nth.call(null,chunk__325118_325122,i__325120_325124);series_325125.remove();
{
var G__325126 = seq__325117_325121;
var G__325127 = chunk__325118_325122;
var G__325128 = count__325119_325123;
var G__325129 = (i__325120_325124 + 1);
seq__325117_325121 = G__325126;
chunk__325118_325122 = G__325127;
count__325119_325123 = G__325128;
i__325120_325124 = G__325129;
continue;
}
} else
{var temp__4092__auto___325130 = cljs.core.seq.call(null,seq__325117_325121);if(temp__4092__auto___325130)
{var seq__325117_325131__$1 = temp__4092__auto___325130;if(cljs.core.chunked_seq_QMARK_.call(null,seq__325117_325131__$1))
{var c__14547__auto___325132 = cljs.core.chunk_first.call(null,seq__325117_325131__$1);{
var G__325133 = cljs.core.chunk_rest.call(null,seq__325117_325131__$1);
var G__325134 = c__14547__auto___325132;
var G__325135 = cljs.core.count.call(null,c__14547__auto___325132);
var G__325136 = 0;
seq__325117_325121 = G__325133;
chunk__325118_325122 = G__325134;
count__325119_325123 = G__325135;
i__325120_325124 = G__325136;
continue;
}
} else
{var series_325137 = cljs.core.first.call(null,seq__325117_325131__$1);series_325137.remove();
{
var G__325138 = cljs.core.next.call(null,seq__325117_325131__$1);
var G__325139 = null;
var G__325140 = 0;
var G__325141 = 0;
seq__325117_325121 = G__325138;
chunk__325118_325122 = G__325139;
count__325119_325123 = G__325140;
i__325120_325124 = G__325141;
continue;
}
}
} else
{}
}
break;
}
return chart.addSeries(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.Keyword(null,"stat","stat",1017444806).cljs$core$IFn$_invoke$arity$1(val),new cljs.core.Keyword(null,"pointInterval","pointInterval",1241580007),(3600 * 1000),new cljs.core.Keyword(null,"pointStart","pointStart",2269080612),start_time], null)));
}));
HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (x){var x__$1 = this;return cljs.core.cons.call(null,cljs.core.first.call(null,x__$1),cljs.core.rest.call(null,x__$1));
});
HTMLCollection.prototype.cljs$core$ISeq$ = true;
HTMLCollection.prototype.cljs$core$ISeq$_first$arity$1 = (function (x){var x__$1 = this;return (x__$1[0]);
});
HTMLCollection.prototype.cljs$core$ISeq$_rest$arity$1 = (function (x){var x__$1 = this;var iter__14516__auto__ = (function iter__325142(s__325143){return (new cljs.core.LazySeq(null,(function (){var s__325143__$1 = s__325143;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__325143__$1);if(temp__4092__auto__)
{var s__325143__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__325143__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__325143__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__325145 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__325144 = 0;while(true){
if((i__325144 < size__14515__auto__))
{var i = cljs.core._nth.call(null,c__14514__auto__,i__325144);cljs.core.chunk_append.call(null,b__325145,(x__$1[i]));
{
var G__325146 = (i__325144 + 1);
i__325144 = G__325146;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__325145),iter__325142.call(null,cljs.core.chunk_rest.call(null,s__325143__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__325145),null);
}
} else
{var i = cljs.core.first.call(null,s__325143__$2);return cljs.core.cons.call(null,(x__$1[i]),iter__325142.call(null,cljs.core.rest.call(null,s__325143__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14516__auto__.call(null,cljs.core.range.call(null,x__$1.length));
});
foundation.rendering.th_widths = (function th_widths(ths,widths){return cljs.core.reduce.call(null,(function (ws,p__325149){var vec__325150 = p__325149;var width = cljs.core.nth.call(null,vec__325150,0,null);var th = cljs.core.nth.call(null,vec__325150,1,null);var th_width = goog.style.getBounds(th).width;if((width > th_width))
{return cljs.core.conj.call(null,ws,width);
} else
{return cljs.core.conj.call(null,ws,th_width);
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,widths,ths));
});
foundation.rendering.td_widths = (function td_widths(rows){return cljs.core.reduce.call(null,(function (ws,td){return cljs.core.conj.call(null,ws,goog.style.getBounds(td).width);
}),cljs.core.PersistentVector.EMPTY,cljs.core.first.call(null,rows).cells);
});
foundation.rendering.full_td_widths = (function full_td_widths(th_widths,ths,row_width,table_width){return cljs.core.reduce.call(null,(function (ws,p__325153){var vec__325154 = p__325153;var width = cljs.core.nth.call(null,vec__325154,0,null);var th = cljs.core.nth.call(null,vec__325154,1,null);var th_width = width;var new_width = (table_width * (width / row_width));if((new_width > width))
{goog.style.setWidth(th,new_width);
return cljs.core.conj.call(null,ws,new_width);
} else
{goog.style.setWidth(th,width);
return cljs.core.conj.call(null,ws,width);
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,th_widths,ths));
});
foundation.rendering.fix_column_widths_BANG_ = (function fix_column_widths_BANG_(){var vec__325173 = cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__325155_SHARP_){return document.querySelector(dommy.core.selector.call(null,p1__325155_SHARP_));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".panel-body",".panel-body",1210123755),new cljs.core.Keyword(null,"tbody","tbody",1124062088),new cljs.core.Keyword(null,"thead","thead",1124231110)], null)));var panel_body = cljs.core.nth.call(null,vec__325173,0,null);var tbody = cljs.core.nth.call(null,vec__325173,1,null);var thead = cljs.core.nth.call(null,vec__325173,2,null);var table_width = goog.style.getBounds(tbody).width;var rows = tbody.rows;var ths = cljs.core.first.call(null,thead.rows).cells;var td_widths = foundation.rendering.td_widths.call(null,rows);var th_widths = foundation.rendering.th_widths.call(null,ths,td_widths);var row_width = cljs.core.reduce.call(null,cljs.core._PLUS_,th_widths);var th_widths__$1 = foundation.rendering.full_td_widths.call(null,th_widths,ths,row_width,table_width);var seq__325174 = cljs.core.seq.call(null,rows);var chunk__325175 = null;var count__325176 = 0;var i__325177 = 0;while(true){
if((i__325177 < count__325176))
{var tr = cljs.core._nth.call(null,chunk__325175,i__325177);var seq__325178_325190 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,th_widths__$1,tr.cells));var chunk__325179_325191 = null;var count__325180_325192 = 0;var i__325181_325193 = 0;while(true){
if((i__325181_325193 < count__325180_325192))
{var vec__325182_325194 = cljs.core._nth.call(null,chunk__325179_325191,i__325181_325193);var width_325195 = cljs.core.nth.call(null,vec__325182_325194,0,null);var td_325196 = cljs.core.nth.call(null,vec__325182_325194,1,null);goog.style.setWidth(td_325196,width_325195);
{
var G__325197 = seq__325178_325190;
var G__325198 = chunk__325179_325191;
var G__325199 = count__325180_325192;
var G__325200 = (i__325181_325193 + 1);
seq__325178_325190 = G__325197;
chunk__325179_325191 = G__325198;
count__325180_325192 = G__325199;
i__325181_325193 = G__325200;
continue;
}
} else
{var temp__4092__auto___325201 = cljs.core.seq.call(null,seq__325178_325190);if(temp__4092__auto___325201)
{var seq__325178_325202__$1 = temp__4092__auto___325201;if(cljs.core.chunked_seq_QMARK_.call(null,seq__325178_325202__$1))
{var c__14547__auto___325203 = cljs.core.chunk_first.call(null,seq__325178_325202__$1);{
var G__325204 = cljs.core.chunk_rest.call(null,seq__325178_325202__$1);
var G__325205 = c__14547__auto___325203;
var G__325206 = cljs.core.count.call(null,c__14547__auto___325203);
var G__325207 = 0;
seq__325178_325190 = G__325204;
chunk__325179_325191 = G__325205;
count__325180_325192 = G__325206;
i__325181_325193 = G__325207;
continue;
}
} else
{var vec__325183_325208 = cljs.core.first.call(null,seq__325178_325202__$1);var width_325209 = cljs.core.nth.call(null,vec__325183_325208,0,null);var td_325210 = cljs.core.nth.call(null,vec__325183_325208,1,null);goog.style.setWidth(td_325210,width_325209);
{
var G__325211 = cljs.core.next.call(null,seq__325178_325202__$1);
var G__325212 = null;
var G__325213 = 0;
var G__325214 = 0;
seq__325178_325190 = G__325211;
chunk__325179_325191 = G__325212;
count__325180_325192 = G__325213;
i__325181_325193 = G__325214;
continue;
}
}
} else
{}
}
break;
}
{
var G__325215 = seq__325174;
var G__325216 = chunk__325175;
var G__325217 = count__325176;
var G__325218 = (i__325177 + 1);
seq__325174 = G__325215;
chunk__325175 = G__325216;
count__325176 = G__325217;
i__325177 = G__325218;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__325174);if(temp__4092__auto__)
{var seq__325174__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__325174__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__325174__$1);{
var G__325219 = cljs.core.chunk_rest.call(null,seq__325174__$1);
var G__325220 = c__14547__auto__;
var G__325221 = cljs.core.count.call(null,c__14547__auto__);
var G__325222 = 0;
seq__325174 = G__325219;
chunk__325175 = G__325220;
count__325176 = G__325221;
i__325177 = G__325222;
continue;
}
} else
{var tr = cljs.core.first.call(null,seq__325174__$1);var seq__325184_325223 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,th_widths__$1,tr.cells));var chunk__325185_325224 = null;var count__325186_325225 = 0;var i__325187_325226 = 0;while(true){
if((i__325187_325226 < count__325186_325225))
{var vec__325188_325227 = cljs.core._nth.call(null,chunk__325185_325224,i__325187_325226);var width_325228 = cljs.core.nth.call(null,vec__325188_325227,0,null);var td_325229 = cljs.core.nth.call(null,vec__325188_325227,1,null);goog.style.setWidth(td_325229,width_325228);
{
var G__325230 = seq__325184_325223;
var G__325231 = chunk__325185_325224;
var G__325232 = count__325186_325225;
var G__325233 = (i__325187_325226 + 1);
seq__325184_325223 = G__325230;
chunk__325185_325224 = G__325231;
count__325186_325225 = G__325232;
i__325187_325226 = G__325233;
continue;
}
} else
{var temp__4092__auto___325234__$1 = cljs.core.seq.call(null,seq__325184_325223);if(temp__4092__auto___325234__$1)
{var seq__325184_325235__$1 = temp__4092__auto___325234__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__325184_325235__$1))
{var c__14547__auto___325236 = cljs.core.chunk_first.call(null,seq__325184_325235__$1);{
var G__325237 = cljs.core.chunk_rest.call(null,seq__325184_325235__$1);
var G__325238 = c__14547__auto___325236;
var G__325239 = cljs.core.count.call(null,c__14547__auto___325236);
var G__325240 = 0;
seq__325184_325223 = G__325237;
chunk__325185_325224 = G__325238;
count__325186_325225 = G__325239;
i__325187_325226 = G__325240;
continue;
}
} else
{var vec__325189_325241 = cljs.core.first.call(null,seq__325184_325235__$1);var width_325242 = cljs.core.nth.call(null,vec__325189_325241,0,null);var td_325243 = cljs.core.nth.call(null,vec__325189_325241,1,null);goog.style.setWidth(td_325243,width_325242);
{
var G__325244 = cljs.core.next.call(null,seq__325184_325235__$1);
var G__325245 = null;
var G__325246 = 0;
var G__325247 = 0;
seq__325184_325223 = G__325244;
chunk__325185_325224 = G__325245;
count__325186_325225 = G__325246;
i__325187_325226 = G__325247;
continue;
}
}
} else
{}
}
break;
}
{
var G__325248 = cljs.core.next.call(null,seq__325174__$1);
var G__325249 = null;
var G__325250 = 0;
var G__325251 = 0;
seq__325174 = G__325248;
chunk__325175 = G__325249;
count__325176 = G__325250;
i__325177 = G__325251;
continue;
}
}
} else
{return null;
}
}
break;
}
});
foundation.rendering.set_datagrid_height_BANG_ = (function set_datagrid_height_BANG_(){var content = document.querySelector("div.twitter-stats.panel.panel-default");var header_height = 126;var footer_height = 81;var max_height = (((document.body.clientHeight - (goog.style.getBounds(content).height + content.offsetTop)) - header_height) - footer_height);return goog.style.setHeight((dommy.utils.__GT_Array.call(null,document.getElementsByTagName("tbody"))[0]),(cljs.core.quot.call(null,max_height,60) * 60));
});
foundation.rendering.as_resizable = (function as_resizable(){var viewport_monitor = goog.dom.ViewportSizeMonitor.getInstanceForWindow();return goog.events.listen(viewport_monitor,goog.events.EventType.RESIZE,(function (e){foundation.rendering.set_datagrid_height_BANG_.call(null);
if((viewport_monitor.getSize().width > goog.style.getBounds((dommy.utils.__GT_Array.call(null,document.getElementsByTagName("tbody"))[0])).width))
{return foundation.rendering.fix_column_widths_BANG_.call(null);
} else
{return null;
}
}));
});

//# sourceMappingURL=rendering.js.map