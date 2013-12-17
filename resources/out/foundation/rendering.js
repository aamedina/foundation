// Compiled by ClojureScript 0.0-2120
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
cljs.core._add_method.call(null,foundation.app.render.node_create,cljs.core.PersistentVector.EMPTY,(function (renderer,p__39306,input_queue,parent_id,id){var vec__39307 = p__39306;var _ = cljs.core.nth.call(null,vec__39307,0,null);var path = cljs.core.nth.call(null,vec__39307,1,null);var ___$1 = cljs.core.nth.call(null,vec__39307,2,null);var val = cljs.core.nth.call(null,vec__39307,3,null);return enfocus.core.at.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",1016933652)], null),enfocus.core.append.call(null,foundation.templates.twitter_power.call(null,id)));
}));
foundation.rendering.stats_msg = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"stats","stats",1123661841),foundation.app.message.path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null)], true, false);
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null),(function (renderer,p__39308,input_queue,parent_id,id){var vec__39309 = p__39308;var _ = cljs.core.nth.call(null,vec__39309,0,null);var path = cljs.core.nth.call(null,vec__39309,1,null);var ___$1 = cljs.core.nth.call(null,vec__39309,2,null);var val = cljs.core.nth.call(null,vec__39309,3,null);enfocus.core.at.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.rendering.css_id.call(null,parent_id)], null),enfocus.core.append.call(null,foundation.templates.dashboard.call(null,id)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#Impressions")].join('')], null),enfocus.core.add_class.call(null,"active"));
var seq__39310 = cljs.core.seq.call(null,foundation.templates.dashboard_metrics);var chunk__39311 = null;var count__39312 = 0;var i__39313 = 0;while(true){
if((i__39313 < count__39312))
{var vec__39314 = cljs.core._nth.call(null,chunk__39311,i__39313);var metric = cljs.core.nth.call(null,vec__39314,0,null);var cpa = cljs.core.nth.call(null,vec__39314,1,null);var rate = cljs.core.nth.call(null,vec__39314,2,null);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric)].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__39310,chunk__39311,count__39312,i__39313,vec__39314,metric,cpa,rate){
return (function (e){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"total","total",1124454070)));
});})(seq__39310,chunk__39311,count__39312,i__39313,vec__39314,metric,cpa,rate))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__39310,chunk__39311,count__39312,i__39313,vec__39314,metric,cpa,rate){
return (function (){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"cpa","cpa",1014002950)));
});})(seq__39310,chunk__39311,count__39312,i__39313,vec__39314,metric,cpa,rate))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__39310,chunk__39311,count__39312,i__39313,vec__39314,metric,cpa,rate){
return (function (){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"rate","rate",1017397330)));
});})(seq__39310,chunk__39311,count__39312,i__39313,vec__39314,metric,cpa,rate))
));
{
var G__39316 = seq__39310;
var G__39317 = chunk__39311;
var G__39318 = count__39312;
var G__39319 = (i__39313 + 1);
seq__39310 = G__39316;
chunk__39311 = G__39317;
count__39312 = G__39318;
i__39313 = G__39319;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__39310);if(temp__4092__auto__)
{var seq__39310__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39310__$1))
{var c__14683__auto__ = cljs.core.chunk_first.call(null,seq__39310__$1);{
var G__39320 = cljs.core.chunk_rest.call(null,seq__39310__$1);
var G__39321 = c__14683__auto__;
var G__39322 = cljs.core.count.call(null,c__14683__auto__);
var G__39323 = 0;
seq__39310 = G__39320;
chunk__39311 = G__39321;
count__39312 = G__39322;
i__39313 = G__39323;
continue;
}
} else
{var vec__39315 = cljs.core.first.call(null,seq__39310__$1);var metric = cljs.core.nth.call(null,vec__39315,0,null);var cpa = cljs.core.nth.call(null,vec__39315,1,null);var rate = cljs.core.nth.call(null,vec__39315,2,null);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric)].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__39310,chunk__39311,count__39312,i__39313,vec__39315,metric,cpa,rate,seq__39310__$1,temp__4092__auto__){
return (function (e){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"total","total",1124454070)));
});})(seq__39310,chunk__39311,count__39312,i__39313,vec__39315,metric,cpa,rate,seq__39310__$1,temp__4092__auto__))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__39310,chunk__39311,count__39312,i__39313,vec__39315,metric,cpa,rate,seq__39310__$1,temp__4092__auto__){
return (function (){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"cpa","cpa",1014002950)));
});})(seq__39310,chunk__39311,count__39312,i__39313,vec__39315,metric,cpa,rate,seq__39310__$1,temp__4092__auto__))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__39310,chunk__39311,count__39312,i__39313,vec__39315,metric,cpa,rate,seq__39310__$1,temp__4092__auto__){
return (function (){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"rate","rate",1017397330)));
});})(seq__39310,chunk__39311,count__39312,i__39313,vec__39315,metric,cpa,rate,seq__39310__$1,temp__4092__auto__))
));
{
var G__39324 = cljs.core.next.call(null,seq__39310__$1);
var G__39325 = null;
var G__39326 = 0;
var G__39327 = 0;
seq__39310 = G__39324;
chunk__39311 = G__39325;
count__39312 = G__39326;
i__39313 = G__39327;
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
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null),(function (renderer,p__39328,input_queue,parent_id,id){var vec__39329 = p__39328;var _ = cljs.core.nth.call(null,vec__39329,0,null);var path = cljs.core.nth.call(null,vec__39329,1,null);var ___$1 = cljs.core.nth.call(null,vec__39329,2,null);var map__39330 = cljs.core.nth.call(null,vec__39329,3,null);var map__39330__$1 = ((cljs.core.seq_QMARK_.call(null,map__39330))?cljs.core.apply.call(null,cljs.core.hash_map,map__39330):map__39330);var val = map__39330__$1;var model = cljs.core.get.call(null,map__39330__$1,new cljs.core.Keyword(null,"model","model",1117974171));var end_time = cljs.core.get.call(null,map__39330__$1,new cljs.core.Keyword(null,"end-time","end-time",2693279729));var start_time = cljs.core.get.call(null,map__39330__$1,new cljs.core.Keyword(null,"start-time","start-time",3689550026));var stats = cljs.core.get.call(null,map__39330__$1,new cljs.core.Keyword(null,"stats","stats",1123661841));if(cljs.core.truth_(start_time))
{var start_picker = foundation.rendering.start_date_picker.call(null,renderer,start_time);var end_picker = foundation.rendering.end_date_picker.call(null,renderer,end_time);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,[cljs.core.str("#"),cljs.core.str(parent_id)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#resource-id","#resource-id",2471321257)], null),enfocus.core.content.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(model)));
var seq__39331 = cljs.core.seq.call(null,foundation.templates.dashboard_metrics);var chunk__39332 = null;var count__39333 = 0;var i__39334 = 0;while(true){
if((i__39334 < count__39333))
{var vec__39335 = cljs.core._nth.call(null,chunk__39332,i__39334);var metric = cljs.core.nth.call(null,vec__39335,0,null);var cpa = cljs.core.nth.call(null,vec__39335,1,null);var rate = cljs.core.nth.call(null,vec__39335,2,null);var total_39337 = cljs.core.get.call(null,new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(stats),metric);var _cpa_39338 = cljs.core.get.call(null,new cljs.core.Keyword(null,"cpa","cpa",1014002950).cljs$core$IFn$_invoke$arity$1(stats),metric);var _rate_39339 = cljs.core.get.call(null,new cljs.core.Keyword(null,"rate","rate",1017397330).cljs$core$IFn$_invoke$arity$1(stats),metric);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric)].join('')], null),enfocus.core.content.call(null,[cljs.core.str(total_39337),cljs.core.str(" "),cljs.core.str(metric)].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),enfocus.core.content.call(null,[cljs.core.str(_cpa_39338),cljs.core.str(" "),cljs.core.str(cpa)].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),enfocus.core.content.call(null,[cljs.core.str(_rate_39339),cljs.core.str(" "),cljs.core.str(rate)].join('')));
{
var G__39340 = seq__39331;
var G__39341 = chunk__39332;
var G__39342 = count__39333;
var G__39343 = (i__39334 + 1);
seq__39331 = G__39340;
chunk__39332 = G__39341;
count__39333 = G__39342;
i__39334 = G__39343;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__39331);if(temp__4092__auto__)
{var seq__39331__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39331__$1))
{var c__14683__auto__ = cljs.core.chunk_first.call(null,seq__39331__$1);{
var G__39344 = cljs.core.chunk_rest.call(null,seq__39331__$1);
var G__39345 = c__14683__auto__;
var G__39346 = cljs.core.count.call(null,c__14683__auto__);
var G__39347 = 0;
seq__39331 = G__39344;
chunk__39332 = G__39345;
count__39333 = G__39346;
i__39334 = G__39347;
continue;
}
} else
{var vec__39336 = cljs.core.first.call(null,seq__39331__$1);var metric = cljs.core.nth.call(null,vec__39336,0,null);var cpa = cljs.core.nth.call(null,vec__39336,1,null);var rate = cljs.core.nth.call(null,vec__39336,2,null);var total_39348 = cljs.core.get.call(null,new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(stats),metric);var _cpa_39349 = cljs.core.get.call(null,new cljs.core.Keyword(null,"cpa","cpa",1014002950).cljs$core$IFn$_invoke$arity$1(stats),metric);var _rate_39350 = cljs.core.get.call(null,new cljs.core.Keyword(null,"rate","rate",1017397330).cljs$core$IFn$_invoke$arity$1(stats),metric);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric)].join('')], null),enfocus.core.content.call(null,[cljs.core.str(total_39348),cljs.core.str(" "),cljs.core.str(metric)].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),enfocus.core.content.call(null,[cljs.core.str(_cpa_39349),cljs.core.str(" "),cljs.core.str(cpa)].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),enfocus.core.content.call(null,[cljs.core.str(_rate_39350),cljs.core.str(" "),cljs.core.str(rate)].join('')));
{
var G__39351 = cljs.core.next.call(null,seq__39331__$1);
var G__39352 = null;
var G__39353 = 0;
var G__39354 = 0;
seq__39331 = G__39351;
chunk__39332 = G__39352;
count__39333 = G__39353;
i__39334 = G__39354;
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
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null),(function (renderer,p__39355,input_queue,parent_id,id){var vec__39356 = p__39355;var _ = cljs.core.nth.call(null,vec__39356,0,null);var path = cljs.core.nth.call(null,vec__39356,1,null);var ___$1 = cljs.core.nth.call(null,vec__39356,2,null);var ___$2 = cljs.core.nth.call(null,vec__39356,3,null);return enfocus.core.at.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.rendering.css_id.call(null,parent_id)], null),enfocus.core.append.call(null,foundation.templates.datagrid.call(null,id)));
}));
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null),(function (renderer,p__39357,input_queue,parent_id,id){var vec__39358 = p__39357;var _ = cljs.core.nth.call(null,vec__39358,0,null);var path = cljs.core.nth.call(null,vec__39358,1,null);var ___$1 = cljs.core.nth.call(null,vec__39358,2,null);var val = cljs.core.nth.call(null,vec__39358,3,null);if(cljs.core._EQ_.call(null,foundation.app.render.get_data.call(null,renderer,path),new cljs.core.Keyword(null,"resource","resource",672839552).cljs$core$IFn$_invoke$arity$1(val)))
{return null;
} else
{return foundation.app.render.set_data_BANG_.call(null,renderer,path,new cljs.core.Keyword(null,"resource","resource",672839552).cljs$core$IFn$_invoke$arity$1(val));
}
}));
foundation.rendering.create_msg = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"create","create",3956577390),foundation.app.message.path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null)], true, false);
foundation.rendering.save_msg = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"save","save",1017427183),foundation.app.message.path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null)], true, false);
foundation.rendering.delete_msg = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"delete","delete",3973413149),foundation.app.message.path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null)], true, false);
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null),(function (renderer,p__39359,input_queue,parent_id,id){var vec__39360 = p__39359;var _ = cljs.core.nth.call(null,vec__39360,0,null);var path = cljs.core.nth.call(null,vec__39360,1,null);var ___$1 = cljs.core.nth.call(null,vec__39360,2,null);var val = cljs.core.nth.call(null,vec__39360,3,null);var model = foundation.app.render.get_data.call(null,renderer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null));enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",3798183098)], null),enfocus.core.content.call(null,foundation.templates.datagrid_table.call(null,model,cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#new","button#new",1370997825)], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return cljs.core.async.put_BANG_.call(null,input_queue,foundation.rendering.create_msg);
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#save","button#save",3494015904)], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return cljs.core.async.put_BANG_.call(null,input_queue,foundation.rendering.save_msg);
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#delete","button#delete",4563292046)], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return cljs.core.async.put_BANG_.call(null,input_queue,foundation.rendering.delete_msg);
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#dupe","button#dupe",3493588073)], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return cljs.core.async.put_BANG_.call(null,input_queue,foundation.rendering.create_msg);
})));
return foundation.rendering.as_resizable.call(null);
}));
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null),(function (renderer,p__39361,input_queue,parent_id,id){var vec__39362 = p__39361;var _ = cljs.core.nth.call(null,vec__39362,0,null);var path = cljs.core.nth.call(null,vec__39362,1,null);var ___$1 = cljs.core.nth.call(null,vec__39362,2,null);var val = cljs.core.nth.call(null,vec__39362,3,null);var model = foundation.app.render.get_data.call(null,renderer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null));var row_count = cljs.core.count.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByTagName("tbody"))[0]).rows);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",3798183098)], null),enfocus.core.content.call(null,foundation.templates.datagrid_table.call(null,model,val)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body>tr","div.panel-body>tr",3056946278)], null),enfocus.core.content.call(null,foundation.templates.datagrid_table.call(null,model,val)));
foundation.rendering.set_datagrid_height_BANG_.call(null);
return foundation.rendering.fix_column_widths_BANG_.call(null);
}));
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null),(function (renderer,p__39363,input_queue,parent_id,id){var vec__39364 = p__39363;var _ = cljs.core.nth.call(null,vec__39364,0,null);var path = cljs.core.nth.call(null,vec__39364,1,null);var ___$1 = cljs.core.nth.call(null,vec__39364,2,null);var ___$2 = cljs.core.nth.call(null,vec__39364,3,null);var chart = foundation.chart.highchart.call(null);return foundation.app.render.set_data_BANG_.call(null,renderer,path,chart);
}));
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null),(function (renderer,p__39365,input_queue,parent_id,id){var vec__39366 = p__39365;var _ = cljs.core.nth.call(null,vec__39366,0,null);var path = cljs.core.nth.call(null,vec__39366,1,null);var ___$1 = cljs.core.nth.call(null,vec__39366,2,null);var val = cljs.core.nth.call(null,vec__39366,3,null);var chart = foundation.app.render.get_data.call(null,renderer,path);var start_time = (new Date(new cljs.core.Keyword(null,"start-time","start-time",3689550026).cljs$core$IFn$_invoke$arity$1(val))).getTime();var seq__39367_39371 = cljs.core.seq.call(null,chart.series);var chunk__39368_39372 = null;var count__39369_39373 = 0;var i__39370_39374 = 0;while(true){
if((i__39370_39374 < count__39369_39373))
{var series_39375 = cljs.core._nth.call(null,chunk__39368_39372,i__39370_39374);series_39375.remove();
{
var G__39376 = seq__39367_39371;
var G__39377 = chunk__39368_39372;
var G__39378 = count__39369_39373;
var G__39379 = (i__39370_39374 + 1);
seq__39367_39371 = G__39376;
chunk__39368_39372 = G__39377;
count__39369_39373 = G__39378;
i__39370_39374 = G__39379;
continue;
}
} else
{var temp__4092__auto___39380 = cljs.core.seq.call(null,seq__39367_39371);if(temp__4092__auto___39380)
{var seq__39367_39381__$1 = temp__4092__auto___39380;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39367_39381__$1))
{var c__14683__auto___39382 = cljs.core.chunk_first.call(null,seq__39367_39381__$1);{
var G__39383 = cljs.core.chunk_rest.call(null,seq__39367_39381__$1);
var G__39384 = c__14683__auto___39382;
var G__39385 = cljs.core.count.call(null,c__14683__auto___39382);
var G__39386 = 0;
seq__39367_39371 = G__39383;
chunk__39368_39372 = G__39384;
count__39369_39373 = G__39385;
i__39370_39374 = G__39386;
continue;
}
} else
{var series_39387 = cljs.core.first.call(null,seq__39367_39381__$1);series_39387.remove();
{
var G__39388 = cljs.core.next.call(null,seq__39367_39381__$1);
var G__39389 = null;
var G__39390 = 0;
var G__39391 = 0;
seq__39367_39371 = G__39388;
chunk__39368_39372 = G__39389;
count__39369_39373 = G__39390;
i__39370_39374 = G__39391;
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
HTMLCollection.prototype.cljs$core$ISeq$_rest$arity$1 = (function (x){var x__$1 = this;var iter__14652__auto__ = (function iter__39392(s__39393){return (new cljs.core.LazySeq(null,(function (){var s__39393__$1 = s__39393;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__39393__$1);if(temp__4092__auto__)
{var s__39393__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__39393__$2))
{var c__14650__auto__ = cljs.core.chunk_first.call(null,s__39393__$2);var size__14651__auto__ = cljs.core.count.call(null,c__14650__auto__);var b__39395 = cljs.core.chunk_buffer.call(null,size__14651__auto__);if((function (){var i__39394 = 0;while(true){
if((i__39394 < size__14651__auto__))
{var i = cljs.core._nth.call(null,c__14650__auto__,i__39394);cljs.core.chunk_append.call(null,b__39395,(x__$1[i]));
{
var G__39396 = (i__39394 + 1);
i__39394 = G__39396;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39395),iter__39392.call(null,cljs.core.chunk_rest.call(null,s__39393__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39395),null);
}
} else
{var i = cljs.core.first.call(null,s__39393__$2);return cljs.core.cons.call(null,(x__$1[i]),iter__39392.call(null,cljs.core.rest.call(null,s__39393__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14652__auto__.call(null,cljs.core.range.call(null,x__$1.length));
});
foundation.rendering.th_widths = (function th_widths(ths,widths){return cljs.core.reduce.call(null,(function (ws,p__39399){var vec__39400 = p__39399;var width = cljs.core.nth.call(null,vec__39400,0,null);var th = cljs.core.nth.call(null,vec__39400,1,null);var th_width = goog.style.getBounds(th).width;if((width > th_width))
{return cljs.core.conj.call(null,ws,width);
} else
{return cljs.core.conj.call(null,ws,th_width);
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,widths,ths));
});
foundation.rendering.td_widths = (function td_widths(rows){return cljs.core.reduce.call(null,(function (ws,td){return cljs.core.conj.call(null,ws,goog.style.getBounds(td).width);
}),cljs.core.PersistentVector.EMPTY,cljs.core.first.call(null,rows).cells);
});
foundation.rendering.full_td_widths = (function full_td_widths(th_widths,ths,row_width,table_width){return cljs.core.reduce.call(null,(function (ws,p__39403){var vec__39404 = p__39403;var width = cljs.core.nth.call(null,vec__39404,0,null);var th = cljs.core.nth.call(null,vec__39404,1,null);var th_width = width;var new_width = (table_width * (width / row_width));if((new_width > width))
{goog.style.setWidth(th,new_width);
return cljs.core.conj.call(null,ws,new_width);
} else
{goog.style.setWidth(th,width);
return cljs.core.conj.call(null,ws,width);
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,th_widths,ths));
});
foundation.rendering.fix_column_widths_BANG_ = (function fix_column_widths_BANG_(){var vec__39423 = cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__39405_SHARP_){return document.querySelector(dommy.core.selector.call(null,p1__39405_SHARP_));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".panel-body",".panel-body",1210123755),new cljs.core.Keyword(null,"tbody","tbody",1124062088),new cljs.core.Keyword(null,"thead","thead",1124231110)], null)));var panel_body = cljs.core.nth.call(null,vec__39423,0,null);var tbody = cljs.core.nth.call(null,vec__39423,1,null);var thead = cljs.core.nth.call(null,vec__39423,2,null);var table_width = goog.style.getBounds(tbody).width;var rows = tbody.rows;var ths = cljs.core.first.call(null,thead.rows).cells;var td_widths = foundation.rendering.td_widths.call(null,rows);var th_widths = foundation.rendering.th_widths.call(null,ths,td_widths);var row_width = cljs.core.reduce.call(null,cljs.core._PLUS_,th_widths);var th_widths__$1 = foundation.rendering.full_td_widths.call(null,th_widths,ths,row_width,table_width);var seq__39424 = cljs.core.seq.call(null,rows);var chunk__39425 = null;var count__39426 = 0;var i__39427 = 0;while(true){
if((i__39427 < count__39426))
{var tr = cljs.core._nth.call(null,chunk__39425,i__39427);var seq__39428_39440 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,th_widths__$1,tr.cells));var chunk__39429_39441 = null;var count__39430_39442 = 0;var i__39431_39443 = 0;while(true){
if((i__39431_39443 < count__39430_39442))
{var vec__39432_39444 = cljs.core._nth.call(null,chunk__39429_39441,i__39431_39443);var width_39445 = cljs.core.nth.call(null,vec__39432_39444,0,null);var td_39446 = cljs.core.nth.call(null,vec__39432_39444,1,null);goog.style.setWidth(td_39446,width_39445);
{
var G__39447 = seq__39428_39440;
var G__39448 = chunk__39429_39441;
var G__39449 = count__39430_39442;
var G__39450 = (i__39431_39443 + 1);
seq__39428_39440 = G__39447;
chunk__39429_39441 = G__39448;
count__39430_39442 = G__39449;
i__39431_39443 = G__39450;
continue;
}
} else
{var temp__4092__auto___39451 = cljs.core.seq.call(null,seq__39428_39440);if(temp__4092__auto___39451)
{var seq__39428_39452__$1 = temp__4092__auto___39451;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39428_39452__$1))
{var c__14683__auto___39453 = cljs.core.chunk_first.call(null,seq__39428_39452__$1);{
var G__39454 = cljs.core.chunk_rest.call(null,seq__39428_39452__$1);
var G__39455 = c__14683__auto___39453;
var G__39456 = cljs.core.count.call(null,c__14683__auto___39453);
var G__39457 = 0;
seq__39428_39440 = G__39454;
chunk__39429_39441 = G__39455;
count__39430_39442 = G__39456;
i__39431_39443 = G__39457;
continue;
}
} else
{var vec__39433_39458 = cljs.core.first.call(null,seq__39428_39452__$1);var width_39459 = cljs.core.nth.call(null,vec__39433_39458,0,null);var td_39460 = cljs.core.nth.call(null,vec__39433_39458,1,null);goog.style.setWidth(td_39460,width_39459);
{
var G__39461 = cljs.core.next.call(null,seq__39428_39452__$1);
var G__39462 = null;
var G__39463 = 0;
var G__39464 = 0;
seq__39428_39440 = G__39461;
chunk__39429_39441 = G__39462;
count__39430_39442 = G__39463;
i__39431_39443 = G__39464;
continue;
}
}
} else
{}
}
break;
}
{
var G__39465 = seq__39424;
var G__39466 = chunk__39425;
var G__39467 = count__39426;
var G__39468 = (i__39427 + 1);
seq__39424 = G__39465;
chunk__39425 = G__39466;
count__39426 = G__39467;
i__39427 = G__39468;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__39424);if(temp__4092__auto__)
{var seq__39424__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39424__$1))
{var c__14683__auto__ = cljs.core.chunk_first.call(null,seq__39424__$1);{
var G__39469 = cljs.core.chunk_rest.call(null,seq__39424__$1);
var G__39470 = c__14683__auto__;
var G__39471 = cljs.core.count.call(null,c__14683__auto__);
var G__39472 = 0;
seq__39424 = G__39469;
chunk__39425 = G__39470;
count__39426 = G__39471;
i__39427 = G__39472;
continue;
}
} else
{var tr = cljs.core.first.call(null,seq__39424__$1);var seq__39434_39473 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,th_widths__$1,tr.cells));var chunk__39435_39474 = null;var count__39436_39475 = 0;var i__39437_39476 = 0;while(true){
if((i__39437_39476 < count__39436_39475))
{var vec__39438_39477 = cljs.core._nth.call(null,chunk__39435_39474,i__39437_39476);var width_39478 = cljs.core.nth.call(null,vec__39438_39477,0,null);var td_39479 = cljs.core.nth.call(null,vec__39438_39477,1,null);goog.style.setWidth(td_39479,width_39478);
{
var G__39480 = seq__39434_39473;
var G__39481 = chunk__39435_39474;
var G__39482 = count__39436_39475;
var G__39483 = (i__39437_39476 + 1);
seq__39434_39473 = G__39480;
chunk__39435_39474 = G__39481;
count__39436_39475 = G__39482;
i__39437_39476 = G__39483;
continue;
}
} else
{var temp__4092__auto___39484__$1 = cljs.core.seq.call(null,seq__39434_39473);if(temp__4092__auto___39484__$1)
{var seq__39434_39485__$1 = temp__4092__auto___39484__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39434_39485__$1))
{var c__14683__auto___39486 = cljs.core.chunk_first.call(null,seq__39434_39485__$1);{
var G__39487 = cljs.core.chunk_rest.call(null,seq__39434_39485__$1);
var G__39488 = c__14683__auto___39486;
var G__39489 = cljs.core.count.call(null,c__14683__auto___39486);
var G__39490 = 0;
seq__39434_39473 = G__39487;
chunk__39435_39474 = G__39488;
count__39436_39475 = G__39489;
i__39437_39476 = G__39490;
continue;
}
} else
{var vec__39439_39491 = cljs.core.first.call(null,seq__39434_39485__$1);var width_39492 = cljs.core.nth.call(null,vec__39439_39491,0,null);var td_39493 = cljs.core.nth.call(null,vec__39439_39491,1,null);goog.style.setWidth(td_39493,width_39492);
{
var G__39494 = cljs.core.next.call(null,seq__39434_39485__$1);
var G__39495 = null;
var G__39496 = 0;
var G__39497 = 0;
seq__39434_39473 = G__39494;
chunk__39435_39474 = G__39495;
count__39436_39475 = G__39496;
i__39437_39476 = G__39497;
continue;
}
}
} else
{}
}
break;
}
{
var G__39498 = cljs.core.next.call(null,seq__39424__$1);
var G__39499 = null;
var G__39500 = 0;
var G__39501 = 0;
seq__39424 = G__39498;
chunk__39425 = G__39499;
count__39426 = G__39500;
i__39427 = G__39501;
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