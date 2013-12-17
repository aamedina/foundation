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
cljs.core._add_method.call(null,foundation.app.render.node_create,cljs.core.PersistentVector.EMPTY,(function (renderer,p__46487,input_queue,parent_id,id){var vec__46488 = p__46487;var _ = cljs.core.nth.call(null,vec__46488,0,null);var path = cljs.core.nth.call(null,vec__46488,1,null);var ___$1 = cljs.core.nth.call(null,vec__46488,2,null);var val = cljs.core.nth.call(null,vec__46488,3,null);return enfocus.core.at.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",1016933652)], null),enfocus.core.append.call(null,foundation.templates.twitter_power.call(null,id)));
}));
foundation.rendering.stats_msg = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"stats","stats",1123661841),foundation.app.message.path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null)], true, false);
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null),(function (renderer,p__46489,input_queue,parent_id,id){var vec__46490 = p__46489;var _ = cljs.core.nth.call(null,vec__46490,0,null);var path = cljs.core.nth.call(null,vec__46490,1,null);var ___$1 = cljs.core.nth.call(null,vec__46490,2,null);var val = cljs.core.nth.call(null,vec__46490,3,null);enfocus.core.at.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.rendering.css_id.call(null,parent_id)], null),enfocus.core.append.call(null,foundation.templates.dashboard.call(null,id)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#Impressions")].join('')], null),enfocus.core.add_class.call(null,"active"));
var seq__46491 = cljs.core.seq.call(null,foundation.templates.dashboard_metrics);var chunk__46492 = null;var count__46493 = 0;var i__46494 = 0;while(true){
if((i__46494 < count__46493))
{var vec__46495 = cljs.core._nth.call(null,chunk__46492,i__46494);var metric = cljs.core.nth.call(null,vec__46495,0,null);var cpa = cljs.core.nth.call(null,vec__46495,1,null);var rate = cljs.core.nth.call(null,vec__46495,2,null);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric)].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__46491,chunk__46492,count__46493,i__46494,vec__46495,metric,cpa,rate){
return (function (e){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"total","total",1124454070)));
});})(seq__46491,chunk__46492,count__46493,i__46494,vec__46495,metric,cpa,rate))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__46491,chunk__46492,count__46493,i__46494,vec__46495,metric,cpa,rate){
return (function (){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"cpa","cpa",1014002950)));
});})(seq__46491,chunk__46492,count__46493,i__46494,vec__46495,metric,cpa,rate))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__46491,chunk__46492,count__46493,i__46494,vec__46495,metric,cpa,rate){
return (function (){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"rate","rate",1017397330)));
});})(seq__46491,chunk__46492,count__46493,i__46494,vec__46495,metric,cpa,rate))
));
{
var G__46497 = seq__46491;
var G__46498 = chunk__46492;
var G__46499 = count__46493;
var G__46500 = (i__46494 + 1);
seq__46491 = G__46497;
chunk__46492 = G__46498;
count__46493 = G__46499;
i__46494 = G__46500;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__46491);if(temp__4092__auto__)
{var seq__46491__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46491__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__46491__$1);{
var G__46501 = cljs.core.chunk_rest.call(null,seq__46491__$1);
var G__46502 = c__14547__auto__;
var G__46503 = cljs.core.count.call(null,c__14547__auto__);
var G__46504 = 0;
seq__46491 = G__46501;
chunk__46492 = G__46502;
count__46493 = G__46503;
i__46494 = G__46504;
continue;
}
} else
{var vec__46496 = cljs.core.first.call(null,seq__46491__$1);var metric = cljs.core.nth.call(null,vec__46496,0,null);var cpa = cljs.core.nth.call(null,vec__46496,1,null);var rate = cljs.core.nth.call(null,vec__46496,2,null);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric)].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__46491,chunk__46492,count__46493,i__46494,vec__46496,metric,cpa,rate,seq__46491__$1,temp__4092__auto__){
return (function (e){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"total","total",1124454070)));
});})(seq__46491,chunk__46492,count__46493,i__46494,vec__46496,metric,cpa,rate,seq__46491__$1,temp__4092__auto__))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__46491,chunk__46492,count__46493,i__46494,vec__46496,metric,cpa,rate,seq__46491__$1,temp__4092__auto__){
return (function (){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"cpa","cpa",1014002950)));
});})(seq__46491,chunk__46492,count__46493,i__46494,vec__46496,metric,cpa,rate,seq__46491__$1,temp__4092__auto__))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__46491,chunk__46492,count__46493,i__46494,vec__46496,metric,cpa,rate,seq__46491__$1,temp__4092__auto__){
return (function (){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"rate","rate",1017397330)));
});})(seq__46491,chunk__46492,count__46493,i__46494,vec__46496,metric,cpa,rate,seq__46491__$1,temp__4092__auto__))
));
{
var G__46505 = cljs.core.next.call(null,seq__46491__$1);
var G__46506 = null;
var G__46507 = 0;
var G__46508 = 0;
seq__46491 = G__46505;
chunk__46492 = G__46506;
count__46493 = G__46507;
i__46494 = G__46508;
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
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null),(function (renderer,p__46509,input_queue,parent_id,id){var vec__46510 = p__46509;var _ = cljs.core.nth.call(null,vec__46510,0,null);var path = cljs.core.nth.call(null,vec__46510,1,null);var ___$1 = cljs.core.nth.call(null,vec__46510,2,null);var map__46511 = cljs.core.nth.call(null,vec__46510,3,null);var map__46511__$1 = ((cljs.core.seq_QMARK_.call(null,map__46511))?cljs.core.apply.call(null,cljs.core.hash_map,map__46511):map__46511);var val = map__46511__$1;var model = cljs.core.get.call(null,map__46511__$1,new cljs.core.Keyword(null,"model","model",1117974171));var end_time = cljs.core.get.call(null,map__46511__$1,new cljs.core.Keyword(null,"end-time","end-time",2693279729));var start_time = cljs.core.get.call(null,map__46511__$1,new cljs.core.Keyword(null,"start-time","start-time",3689550026));var stats = cljs.core.get.call(null,map__46511__$1,new cljs.core.Keyword(null,"stats","stats",1123661841));if(cljs.core.truth_(start_time))
{var start_picker = foundation.rendering.start_date_picker.call(null,renderer,start_time);var end_picker = foundation.rendering.end_date_picker.call(null,renderer,end_time);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,[cljs.core.str("#"),cljs.core.str(parent_id)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#resource-id","#resource-id",2471321257)], null),enfocus.core.content.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(model)));
var seq__46512 = cljs.core.seq.call(null,foundation.templates.dashboard_metrics);var chunk__46513 = null;var count__46514 = 0;var i__46515 = 0;while(true){
if((i__46515 < count__46514))
{var vec__46516 = cljs.core._nth.call(null,chunk__46513,i__46515);var metric = cljs.core.nth.call(null,vec__46516,0,null);var cpa = cljs.core.nth.call(null,vec__46516,1,null);var rate = cljs.core.nth.call(null,vec__46516,2,null);var total_46518 = cljs.core.get.call(null,new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(stats),metric);var _cpa_46519 = cljs.core.get.call(null,new cljs.core.Keyword(null,"cpa","cpa",1014002950).cljs$core$IFn$_invoke$arity$1(stats),metric);var _rate_46520 = cljs.core.get.call(null,new cljs.core.Keyword(null,"rate","rate",1017397330).cljs$core$IFn$_invoke$arity$1(stats),metric);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric)].join('')], null),enfocus.core.content.call(null,[cljs.core.str(total_46518),cljs.core.str(" "),cljs.core.str(metric)].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),enfocus.core.content.call(null,[cljs.core.str(_cpa_46519),cljs.core.str(" "),cljs.core.str(cpa)].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),enfocus.core.content.call(null,[cljs.core.str(_rate_46520),cljs.core.str(" "),cljs.core.str(rate)].join('')));
{
var G__46521 = seq__46512;
var G__46522 = chunk__46513;
var G__46523 = count__46514;
var G__46524 = (i__46515 + 1);
seq__46512 = G__46521;
chunk__46513 = G__46522;
count__46514 = G__46523;
i__46515 = G__46524;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__46512);if(temp__4092__auto__)
{var seq__46512__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46512__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__46512__$1);{
var G__46525 = cljs.core.chunk_rest.call(null,seq__46512__$1);
var G__46526 = c__14547__auto__;
var G__46527 = cljs.core.count.call(null,c__14547__auto__);
var G__46528 = 0;
seq__46512 = G__46525;
chunk__46513 = G__46526;
count__46514 = G__46527;
i__46515 = G__46528;
continue;
}
} else
{var vec__46517 = cljs.core.first.call(null,seq__46512__$1);var metric = cljs.core.nth.call(null,vec__46517,0,null);var cpa = cljs.core.nth.call(null,vec__46517,1,null);var rate = cljs.core.nth.call(null,vec__46517,2,null);var total_46529 = cljs.core.get.call(null,new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(stats),metric);var _cpa_46530 = cljs.core.get.call(null,new cljs.core.Keyword(null,"cpa","cpa",1014002950).cljs$core$IFn$_invoke$arity$1(stats),metric);var _rate_46531 = cljs.core.get.call(null,new cljs.core.Keyword(null,"rate","rate",1017397330).cljs$core$IFn$_invoke$arity$1(stats),metric);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric)].join('')], null),enfocus.core.content.call(null,[cljs.core.str(total_46529),cljs.core.str(" "),cljs.core.str(metric)].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),enfocus.core.content.call(null,[cljs.core.str(_cpa_46530),cljs.core.str(" "),cljs.core.str(cpa)].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),enfocus.core.content.call(null,[cljs.core.str(_rate_46531),cljs.core.str(" "),cljs.core.str(rate)].join('')));
{
var G__46532 = cljs.core.next.call(null,seq__46512__$1);
var G__46533 = null;
var G__46534 = 0;
var G__46535 = 0;
seq__46512 = G__46532;
chunk__46513 = G__46533;
count__46514 = G__46534;
i__46515 = G__46535;
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
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null),(function (renderer,p__46536,input_queue,parent_id,id){var vec__46537 = p__46536;var _ = cljs.core.nth.call(null,vec__46537,0,null);var path = cljs.core.nth.call(null,vec__46537,1,null);var ___$1 = cljs.core.nth.call(null,vec__46537,2,null);var ___$2 = cljs.core.nth.call(null,vec__46537,3,null);return enfocus.core.at.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.rendering.css_id.call(null,parent_id)], null),enfocus.core.append.call(null,foundation.templates.datagrid.call(null,id)));
}));
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null),(function (renderer,p__46538,input_queue,parent_id,id){var vec__46539 = p__46538;var _ = cljs.core.nth.call(null,vec__46539,0,null);var path = cljs.core.nth.call(null,vec__46539,1,null);var ___$1 = cljs.core.nth.call(null,vec__46539,2,null);var val = cljs.core.nth.call(null,vec__46539,3,null);if(cljs.core._EQ_.call(null,foundation.app.render.get_data.call(null,renderer,path),new cljs.core.Keyword(null,"resource","resource",672839552).cljs$core$IFn$_invoke$arity$1(val)))
{return null;
} else
{return foundation.app.render.set_data_BANG_.call(null,renderer,path,new cljs.core.Keyword(null,"resource","resource",672839552).cljs$core$IFn$_invoke$arity$1(val));
}
}));
foundation.rendering.create_msg = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"create","create",3956577390),foundation.app.message.path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null)], true, false);
foundation.rendering.save_msg = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"save","save",1017427183),foundation.app.message.path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null)], true, false);
foundation.rendering.delete_msg = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"delete","delete",3973413149),foundation.app.message.path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null)], true, false);
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null),(function (renderer,p__46540,input_queue,parent_id,id){var vec__46541 = p__46540;var _ = cljs.core.nth.call(null,vec__46541,0,null);var path = cljs.core.nth.call(null,vec__46541,1,null);var ___$1 = cljs.core.nth.call(null,vec__46541,2,null);var val = cljs.core.nth.call(null,vec__46541,3,null);var model = foundation.app.render.get_data.call(null,renderer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null));enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",3798183098)], null),enfocus.core.content.call(null,foundation.templates.datagrid_table.call(null,model,cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#new","button#new",1370997825)], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return cljs.core.async.put_BANG_.call(null,input_queue,foundation.rendering.create_msg);
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#save","button#save",3494015904)], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return cljs.core.async.put_BANG_.call(null,input_queue,foundation.rendering.save_msg);
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#delete","button#delete",4563292046)], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return cljs.core.async.put_BANG_.call(null,input_queue,foundation.rendering.delete_msg);
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#dupe","button#dupe",3493588073)], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return cljs.core.async.put_BANG_.call(null,input_queue,foundation.rendering.create_msg);
})));
return foundation.rendering.as_resizable.call(null);
}));
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null),(function (renderer,p__46542,input_queue,parent_id,id){var vec__46543 = p__46542;var _ = cljs.core.nth.call(null,vec__46543,0,null);var path = cljs.core.nth.call(null,vec__46543,1,null);var ___$1 = cljs.core.nth.call(null,vec__46543,2,null);var val = cljs.core.nth.call(null,vec__46543,3,null);var model = foundation.app.render.get_data.call(null,renderer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null));var row_count = cljs.core.count.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByTagName("tbody"))[0]).rows);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",3798183098)], null),enfocus.core.content.call(null,foundation.templates.datagrid_table.call(null,model,val)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body>tr","div.panel-body>tr",3056946278)], null),enfocus.core.content.call(null,foundation.templates.datagrid_table.call(null,model,val)));
foundation.rendering.set_datagrid_height_BANG_.call(null);
return foundation.rendering.fix_column_widths_BANG_.call(null);
}));
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null),(function (renderer,p__46544,input_queue,parent_id,id){var vec__46545 = p__46544;var _ = cljs.core.nth.call(null,vec__46545,0,null);var path = cljs.core.nth.call(null,vec__46545,1,null);var ___$1 = cljs.core.nth.call(null,vec__46545,2,null);var ___$2 = cljs.core.nth.call(null,vec__46545,3,null);var chart = foundation.chart.highchart.call(null);return foundation.app.render.set_data_BANG_.call(null,renderer,path,chart);
}));
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null),(function (renderer,p__46546,input_queue,parent_id,id){var vec__46547 = p__46546;var _ = cljs.core.nth.call(null,vec__46547,0,null);var path = cljs.core.nth.call(null,vec__46547,1,null);var ___$1 = cljs.core.nth.call(null,vec__46547,2,null);var val = cljs.core.nth.call(null,vec__46547,3,null);var chart = foundation.app.render.get_data.call(null,renderer,path);var start_time = (new Date(new cljs.core.Keyword(null,"start-time","start-time",3689550026).cljs$core$IFn$_invoke$arity$1(val))).getTime();var seq__46548_46552 = cljs.core.seq.call(null,chart.series);var chunk__46549_46553 = null;var count__46550_46554 = 0;var i__46551_46555 = 0;while(true){
if((i__46551_46555 < count__46550_46554))
{var series_46556 = cljs.core._nth.call(null,chunk__46549_46553,i__46551_46555);series_46556.remove();
{
var G__46557 = seq__46548_46552;
var G__46558 = chunk__46549_46553;
var G__46559 = count__46550_46554;
var G__46560 = (i__46551_46555 + 1);
seq__46548_46552 = G__46557;
chunk__46549_46553 = G__46558;
count__46550_46554 = G__46559;
i__46551_46555 = G__46560;
continue;
}
} else
{var temp__4092__auto___46561 = cljs.core.seq.call(null,seq__46548_46552);if(temp__4092__auto___46561)
{var seq__46548_46562__$1 = temp__4092__auto___46561;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46548_46562__$1))
{var c__14547__auto___46563 = cljs.core.chunk_first.call(null,seq__46548_46562__$1);{
var G__46564 = cljs.core.chunk_rest.call(null,seq__46548_46562__$1);
var G__46565 = c__14547__auto___46563;
var G__46566 = cljs.core.count.call(null,c__14547__auto___46563);
var G__46567 = 0;
seq__46548_46552 = G__46564;
chunk__46549_46553 = G__46565;
count__46550_46554 = G__46566;
i__46551_46555 = G__46567;
continue;
}
} else
{var series_46568 = cljs.core.first.call(null,seq__46548_46562__$1);series_46568.remove();
{
var G__46569 = cljs.core.next.call(null,seq__46548_46562__$1);
var G__46570 = null;
var G__46571 = 0;
var G__46572 = 0;
seq__46548_46552 = G__46569;
chunk__46549_46553 = G__46570;
count__46550_46554 = G__46571;
i__46551_46555 = G__46572;
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
HTMLCollection.prototype.cljs$core$ISeq$_rest$arity$1 = (function (x){var x__$1 = this;var iter__14516__auto__ = (function iter__46573(s__46574){return (new cljs.core.LazySeq(null,(function (){var s__46574__$1 = s__46574;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__46574__$1);if(temp__4092__auto__)
{var s__46574__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__46574__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__46574__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__46576 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__46575 = 0;while(true){
if((i__46575 < size__14515__auto__))
{var i = cljs.core._nth.call(null,c__14514__auto__,i__46575);cljs.core.chunk_append.call(null,b__46576,(x__$1[i]));
{
var G__46577 = (i__46575 + 1);
i__46575 = G__46577;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46576),iter__46573.call(null,cljs.core.chunk_rest.call(null,s__46574__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46576),null);
}
} else
{var i = cljs.core.first.call(null,s__46574__$2);return cljs.core.cons.call(null,(x__$1[i]),iter__46573.call(null,cljs.core.rest.call(null,s__46574__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14516__auto__.call(null,cljs.core.range.call(null,x__$1.length));
});
foundation.rendering.th_widths = (function th_widths(ths,widths){return cljs.core.reduce.call(null,(function (ws,p__46580){var vec__46581 = p__46580;var width = cljs.core.nth.call(null,vec__46581,0,null);var th = cljs.core.nth.call(null,vec__46581,1,null);var th_width = goog.style.getBounds(th).width;if((width > th_width))
{return cljs.core.conj.call(null,ws,width);
} else
{return cljs.core.conj.call(null,ws,th_width);
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,widths,ths));
});
foundation.rendering.td_widths = (function td_widths(rows){return cljs.core.reduce.call(null,(function (ws,td){return cljs.core.conj.call(null,ws,goog.style.getBounds(td).width);
}),cljs.core.PersistentVector.EMPTY,cljs.core.first.call(null,rows).cells);
});
foundation.rendering.full_td_widths = (function full_td_widths(th_widths,ths,row_width,table_width){return cljs.core.reduce.call(null,(function (ws,p__46584){var vec__46585 = p__46584;var width = cljs.core.nth.call(null,vec__46585,0,null);var th = cljs.core.nth.call(null,vec__46585,1,null);var th_width = width;var new_width = (table_width * (width / row_width));if((new_width > width))
{goog.style.setWidth(th,new_width);
return cljs.core.conj.call(null,ws,new_width);
} else
{goog.style.setWidth(th,width);
return cljs.core.conj.call(null,ws,width);
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,th_widths,ths));
});
foundation.rendering.fix_column_widths_BANG_ = (function fix_column_widths_BANG_(){var vec__46604 = cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__46586_SHARP_){return document.querySelector(dommy.core.selector.call(null,p1__46586_SHARP_));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".panel-body",".panel-body",1210123755),new cljs.core.Keyword(null,"tbody","tbody",1124062088),new cljs.core.Keyword(null,"thead","thead",1124231110)], null)));var panel_body = cljs.core.nth.call(null,vec__46604,0,null);var tbody = cljs.core.nth.call(null,vec__46604,1,null);var thead = cljs.core.nth.call(null,vec__46604,2,null);var table_width = goog.style.getBounds(tbody).width;var rows = tbody.rows;var ths = cljs.core.first.call(null,thead.rows).cells;var td_widths = foundation.rendering.td_widths.call(null,rows);var th_widths = foundation.rendering.th_widths.call(null,ths,td_widths);var row_width = cljs.core.reduce.call(null,cljs.core._PLUS_,th_widths);var th_widths__$1 = foundation.rendering.full_td_widths.call(null,th_widths,ths,row_width,table_width);var seq__46605 = cljs.core.seq.call(null,rows);var chunk__46606 = null;var count__46607 = 0;var i__46608 = 0;while(true){
if((i__46608 < count__46607))
{var tr = cljs.core._nth.call(null,chunk__46606,i__46608);var seq__46609_46621 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,th_widths__$1,tr.cells));var chunk__46610_46622 = null;var count__46611_46623 = 0;var i__46612_46624 = 0;while(true){
if((i__46612_46624 < count__46611_46623))
{var vec__46613_46625 = cljs.core._nth.call(null,chunk__46610_46622,i__46612_46624);var width_46626 = cljs.core.nth.call(null,vec__46613_46625,0,null);var td_46627 = cljs.core.nth.call(null,vec__46613_46625,1,null);goog.style.setWidth(td_46627,width_46626);
{
var G__46628 = seq__46609_46621;
var G__46629 = chunk__46610_46622;
var G__46630 = count__46611_46623;
var G__46631 = (i__46612_46624 + 1);
seq__46609_46621 = G__46628;
chunk__46610_46622 = G__46629;
count__46611_46623 = G__46630;
i__46612_46624 = G__46631;
continue;
}
} else
{var temp__4092__auto___46632 = cljs.core.seq.call(null,seq__46609_46621);if(temp__4092__auto___46632)
{var seq__46609_46633__$1 = temp__4092__auto___46632;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46609_46633__$1))
{var c__14547__auto___46634 = cljs.core.chunk_first.call(null,seq__46609_46633__$1);{
var G__46635 = cljs.core.chunk_rest.call(null,seq__46609_46633__$1);
var G__46636 = c__14547__auto___46634;
var G__46637 = cljs.core.count.call(null,c__14547__auto___46634);
var G__46638 = 0;
seq__46609_46621 = G__46635;
chunk__46610_46622 = G__46636;
count__46611_46623 = G__46637;
i__46612_46624 = G__46638;
continue;
}
} else
{var vec__46614_46639 = cljs.core.first.call(null,seq__46609_46633__$1);var width_46640 = cljs.core.nth.call(null,vec__46614_46639,0,null);var td_46641 = cljs.core.nth.call(null,vec__46614_46639,1,null);goog.style.setWidth(td_46641,width_46640);
{
var G__46642 = cljs.core.next.call(null,seq__46609_46633__$1);
var G__46643 = null;
var G__46644 = 0;
var G__46645 = 0;
seq__46609_46621 = G__46642;
chunk__46610_46622 = G__46643;
count__46611_46623 = G__46644;
i__46612_46624 = G__46645;
continue;
}
}
} else
{}
}
break;
}
{
var G__46646 = seq__46605;
var G__46647 = chunk__46606;
var G__46648 = count__46607;
var G__46649 = (i__46608 + 1);
seq__46605 = G__46646;
chunk__46606 = G__46647;
count__46607 = G__46648;
i__46608 = G__46649;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__46605);if(temp__4092__auto__)
{var seq__46605__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46605__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__46605__$1);{
var G__46650 = cljs.core.chunk_rest.call(null,seq__46605__$1);
var G__46651 = c__14547__auto__;
var G__46652 = cljs.core.count.call(null,c__14547__auto__);
var G__46653 = 0;
seq__46605 = G__46650;
chunk__46606 = G__46651;
count__46607 = G__46652;
i__46608 = G__46653;
continue;
}
} else
{var tr = cljs.core.first.call(null,seq__46605__$1);var seq__46615_46654 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,th_widths__$1,tr.cells));var chunk__46616_46655 = null;var count__46617_46656 = 0;var i__46618_46657 = 0;while(true){
if((i__46618_46657 < count__46617_46656))
{var vec__46619_46658 = cljs.core._nth.call(null,chunk__46616_46655,i__46618_46657);var width_46659 = cljs.core.nth.call(null,vec__46619_46658,0,null);var td_46660 = cljs.core.nth.call(null,vec__46619_46658,1,null);goog.style.setWidth(td_46660,width_46659);
{
var G__46661 = seq__46615_46654;
var G__46662 = chunk__46616_46655;
var G__46663 = count__46617_46656;
var G__46664 = (i__46618_46657 + 1);
seq__46615_46654 = G__46661;
chunk__46616_46655 = G__46662;
count__46617_46656 = G__46663;
i__46618_46657 = G__46664;
continue;
}
} else
{var temp__4092__auto___46665__$1 = cljs.core.seq.call(null,seq__46615_46654);if(temp__4092__auto___46665__$1)
{var seq__46615_46666__$1 = temp__4092__auto___46665__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46615_46666__$1))
{var c__14547__auto___46667 = cljs.core.chunk_first.call(null,seq__46615_46666__$1);{
var G__46668 = cljs.core.chunk_rest.call(null,seq__46615_46666__$1);
var G__46669 = c__14547__auto___46667;
var G__46670 = cljs.core.count.call(null,c__14547__auto___46667);
var G__46671 = 0;
seq__46615_46654 = G__46668;
chunk__46616_46655 = G__46669;
count__46617_46656 = G__46670;
i__46618_46657 = G__46671;
continue;
}
} else
{var vec__46620_46672 = cljs.core.first.call(null,seq__46615_46666__$1);var width_46673 = cljs.core.nth.call(null,vec__46620_46672,0,null);var td_46674 = cljs.core.nth.call(null,vec__46620_46672,1,null);goog.style.setWidth(td_46674,width_46673);
{
var G__46675 = cljs.core.next.call(null,seq__46615_46666__$1);
var G__46676 = null;
var G__46677 = 0;
var G__46678 = 0;
seq__46615_46654 = G__46675;
chunk__46616_46655 = G__46676;
count__46617_46656 = G__46677;
i__46618_46657 = G__46678;
continue;
}
}
} else
{}
}
break;
}
{
var G__46679 = cljs.core.next.call(null,seq__46605__$1);
var G__46680 = null;
var G__46681 = 0;
var G__46682 = 0;
seq__46605 = G__46679;
chunk__46606 = G__46680;
count__46607 = G__46681;
i__46608 = G__46682;
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