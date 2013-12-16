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
cljs.core._add_method.call(null,foundation.app.render.node_create,cljs.core.PersistentVector.EMPTY,(function (renderer,p__39432,input_queue,parent_id,id){var vec__39433 = p__39432;var _ = cljs.core.nth.call(null,vec__39433,0,null);var path = cljs.core.nth.call(null,vec__39433,1,null);var ___$1 = cljs.core.nth.call(null,vec__39433,2,null);var val = cljs.core.nth.call(null,vec__39433,3,null);return enfocus.core.at.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",1016933652)], null),enfocus.core.append.call(null,foundation.templates.twitter_power.call(null,id)));
}));
foundation.rendering.stats_msg = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"stats","stats",1123661841),foundation.app.message.path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null)], true, false);
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null),(function (renderer,p__39434,input_queue,parent_id,id){var vec__39435 = p__39434;var _ = cljs.core.nth.call(null,vec__39435,0,null);var path = cljs.core.nth.call(null,vec__39435,1,null);var ___$1 = cljs.core.nth.call(null,vec__39435,2,null);var val = cljs.core.nth.call(null,vec__39435,3,null);enfocus.core.at.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.rendering.css_id.call(null,parent_id)], null),enfocus.core.append.call(null,foundation.templates.dashboard.call(null,id)));
var seq__39436 = cljs.core.seq.call(null,foundation.templates.dashboard_metrics);var chunk__39437 = null;var count__39438 = 0;var i__39439 = 0;while(true){
if((i__39439 < count__39438))
{var vec__39440 = cljs.core._nth.call(null,chunk__39437,i__39439);var metric = cljs.core.nth.call(null,vec__39440,0,null);var cpa = cljs.core.nth.call(null,vec__39440,1,null);var rate = cljs.core.nth.call(null,vec__39440,2,null);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric)].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__39436,chunk__39437,count__39438,i__39439,vec__39440,metric,cpa,rate){
return (function (){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"total","total",1124454070)));
});})(seq__39436,chunk__39437,count__39438,i__39439,vec__39440,metric,cpa,rate))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__39436,chunk__39437,count__39438,i__39439,vec__39440,metric,cpa,rate){
return (function (){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"cpa","cpa",1014002950)));
});})(seq__39436,chunk__39437,count__39438,i__39439,vec__39440,metric,cpa,rate))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__39436,chunk__39437,count__39438,i__39439,vec__39440,metric,cpa,rate){
return (function (){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"rate","rate",1017397330)));
});})(seq__39436,chunk__39437,count__39438,i__39439,vec__39440,metric,cpa,rate))
));
{
var G__39442 = seq__39436;
var G__39443 = chunk__39437;
var G__39444 = count__39438;
var G__39445 = (i__39439 + 1);
seq__39436 = G__39442;
chunk__39437 = G__39443;
count__39438 = G__39444;
i__39439 = G__39445;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__39436);if(temp__4092__auto__)
{var seq__39436__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39436__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__39436__$1);{
var G__39446 = cljs.core.chunk_rest.call(null,seq__39436__$1);
var G__39447 = c__14547__auto__;
var G__39448 = cljs.core.count.call(null,c__14547__auto__);
var G__39449 = 0;
seq__39436 = G__39446;
chunk__39437 = G__39447;
count__39438 = G__39448;
i__39439 = G__39449;
continue;
}
} else
{var vec__39441 = cljs.core.first.call(null,seq__39436__$1);var metric = cljs.core.nth.call(null,vec__39441,0,null);var cpa = cljs.core.nth.call(null,vec__39441,1,null);var rate = cljs.core.nth.call(null,vec__39441,2,null);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric)].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__39436,chunk__39437,count__39438,i__39439,vec__39441,metric,cpa,rate,seq__39436__$1,temp__4092__auto__){
return (function (){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"total","total",1124454070)));
});})(seq__39436,chunk__39437,count__39438,i__39439,vec__39441,metric,cpa,rate,seq__39436__$1,temp__4092__auto__))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__39436,chunk__39437,count__39438,i__39439,vec__39441,metric,cpa,rate,seq__39436__$1,temp__4092__auto__){
return (function (){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"cpa","cpa",1014002950)));
});})(seq__39436,chunk__39437,count__39438,i__39439,vec__39441,metric,cpa,rate,seq__39436__$1,temp__4092__auto__))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__39436,chunk__39437,count__39438,i__39439,vec__39441,metric,cpa,rate,seq__39436__$1,temp__4092__auto__){
return (function (){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"rate","rate",1017397330)));
});})(seq__39436,chunk__39437,count__39438,i__39439,vec__39441,metric,cpa,rate,seq__39436__$1,temp__4092__auto__))
));
{
var G__39450 = cljs.core.next.call(null,seq__39436__$1);
var G__39451 = null;
var G__39452 = 0;
var G__39453 = 0;
seq__39436 = G__39450;
chunk__39437 = G__39451;
count__39438 = G__39452;
i__39439 = G__39453;
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
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null),(function (renderer,p__39454,input_queue,parent_id,id){var vec__39455 = p__39454;var _ = cljs.core.nth.call(null,vec__39455,0,null);var path = cljs.core.nth.call(null,vec__39455,1,null);var ___$1 = cljs.core.nth.call(null,vec__39455,2,null);var map__39456 = cljs.core.nth.call(null,vec__39455,3,null);var map__39456__$1 = ((cljs.core.seq_QMARK_.call(null,map__39456))?cljs.core.apply.call(null,cljs.core.hash_map,map__39456):map__39456);var val = map__39456__$1;var model = cljs.core.get.call(null,map__39456__$1,new cljs.core.Keyword(null,"model","model",1117974171));var end_time = cljs.core.get.call(null,map__39456__$1,new cljs.core.Keyword(null,"end-time","end-time",2693279729));var start_time = cljs.core.get.call(null,map__39456__$1,new cljs.core.Keyword(null,"start-time","start-time",3689550026));var stats = cljs.core.get.call(null,map__39456__$1,new cljs.core.Keyword(null,"stats","stats",1123661841));if(cljs.core.truth_(start_time))
{var start_picker = foundation.rendering.start_date_picker.call(null,renderer,start_time);var end_picker = foundation.rendering.end_date_picker.call(null,renderer,end_time);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,[cljs.core.str("#"),cljs.core.str(parent_id)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#resource-id","#resource-id",2471321257)], null),enfocus.core.content.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(model)));
var seq__39457 = cljs.core.seq.call(null,foundation.templates.dashboard_metrics);var chunk__39458 = null;var count__39459 = 0;var i__39460 = 0;while(true){
if((i__39460 < count__39459))
{var vec__39461 = cljs.core._nth.call(null,chunk__39458,i__39460);var metric = cljs.core.nth.call(null,vec__39461,0,null);var cpa = cljs.core.nth.call(null,vec__39461,1,null);var rate = cljs.core.nth.call(null,vec__39461,2,null);var total_39463 = cljs.core.get.call(null,new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(stats),metric);var _cpa_39464 = cljs.core.get.call(null,new cljs.core.Keyword(null,"cpa","cpa",1014002950).cljs$core$IFn$_invoke$arity$1(stats),metric);var _rate_39465 = cljs.core.get.call(null,new cljs.core.Keyword(null,"rate","rate",1017397330).cljs$core$IFn$_invoke$arity$1(stats),metric);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric)].join('')], null),enfocus.core.content.call(null,[cljs.core.str(total_39463),cljs.core.str(" "),cljs.core.str(metric)].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),enfocus.core.content.call(null,[cljs.core.str(_cpa_39464),cljs.core.str(" "),cljs.core.str(cpa)].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),enfocus.core.content.call(null,[cljs.core.str(_rate_39465),cljs.core.str(" "),cljs.core.str(rate)].join('')));
{
var G__39466 = seq__39457;
var G__39467 = chunk__39458;
var G__39468 = count__39459;
var G__39469 = (i__39460 + 1);
seq__39457 = G__39466;
chunk__39458 = G__39467;
count__39459 = G__39468;
i__39460 = G__39469;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__39457);if(temp__4092__auto__)
{var seq__39457__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39457__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__39457__$1);{
var G__39470 = cljs.core.chunk_rest.call(null,seq__39457__$1);
var G__39471 = c__14547__auto__;
var G__39472 = cljs.core.count.call(null,c__14547__auto__);
var G__39473 = 0;
seq__39457 = G__39470;
chunk__39458 = G__39471;
count__39459 = G__39472;
i__39460 = G__39473;
continue;
}
} else
{var vec__39462 = cljs.core.first.call(null,seq__39457__$1);var metric = cljs.core.nth.call(null,vec__39462,0,null);var cpa = cljs.core.nth.call(null,vec__39462,1,null);var rate = cljs.core.nth.call(null,vec__39462,2,null);var total_39474 = cljs.core.get.call(null,new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(stats),metric);var _cpa_39475 = cljs.core.get.call(null,new cljs.core.Keyword(null,"cpa","cpa",1014002950).cljs$core$IFn$_invoke$arity$1(stats),metric);var _rate_39476 = cljs.core.get.call(null,new cljs.core.Keyword(null,"rate","rate",1017397330).cljs$core$IFn$_invoke$arity$1(stats),metric);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric)].join('')], null),enfocus.core.content.call(null,[cljs.core.str(total_39474),cljs.core.str(" "),cljs.core.str(metric)].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),enfocus.core.content.call(null,[cljs.core.str(_cpa_39475),cljs.core.str(" "),cljs.core.str(cpa)].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),enfocus.core.content.call(null,[cljs.core.str(_rate_39476),cljs.core.str(" "),cljs.core.str(rate)].join('')));
{
var G__39477 = cljs.core.next.call(null,seq__39457__$1);
var G__39478 = null;
var G__39479 = 0;
var G__39480 = 0;
seq__39457 = G__39477;
chunk__39458 = G__39478;
count__39459 = G__39479;
i__39460 = G__39480;
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
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null),(function (renderer,p__39481,input_queue,parent_id,id){var vec__39482 = p__39481;var _ = cljs.core.nth.call(null,vec__39482,0,null);var path = cljs.core.nth.call(null,vec__39482,1,null);var ___$1 = cljs.core.nth.call(null,vec__39482,2,null);var ___$2 = cljs.core.nth.call(null,vec__39482,3,null);return enfocus.core.at.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.rendering.css_id.call(null,parent_id)], null),enfocus.core.append.call(null,foundation.templates.datagrid.call(null,id)));
}));
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null),(function (renderer,p__39483,input_queue,parent_id,id){var vec__39484 = p__39483;var _ = cljs.core.nth.call(null,vec__39484,0,null);var path = cljs.core.nth.call(null,vec__39484,1,null);var ___$1 = cljs.core.nth.call(null,vec__39484,2,null);var val = cljs.core.nth.call(null,vec__39484,3,null);return foundation.app.render.set_data_BANG_.call(null,renderer,path,new cljs.core.Keyword(null,"resource","resource",672839552).cljs$core$IFn$_invoke$arity$1(val));
}));
foundation.rendering.create_msg = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"create","create",3956577390),foundation.app.message.path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null)], true, false);
foundation.rendering.save_msg = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"save","save",1017427183),foundation.app.message.path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null)], true, false);
foundation.rendering.delete_msg = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"delete","delete",3973413149),foundation.app.message.path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null)], true, false);
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null),(function (renderer,p__39485,input_queue,parent_id,id){var vec__39486 = p__39485;var _ = cljs.core.nth.call(null,vec__39486,0,null);var path = cljs.core.nth.call(null,vec__39486,1,null);var ___$1 = cljs.core.nth.call(null,vec__39486,2,null);var val = cljs.core.nth.call(null,vec__39486,3,null);var model = foundation.app.render.get_data.call(null,renderer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null));enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",3798183098)], null),enfocus.core.content.call(null,foundation.templates.datagrid_table.call(null,model,cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#new","button#new",1370997825)], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return cljs.core.async.put_BANG_.call(null,input_queue,foundation.rendering.create_msg);
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#save","button#save",3494015904)], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return cljs.core.async.put_BANG_.call(null,input_queue,foundation.rendering.save_msg);
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#delete","button#delete",4563292046)], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return cljs.core.async.put_BANG_.call(null,input_queue,foundation.rendering.delete_msg);
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#dupe","button#dupe",3493588073)], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return cljs.core.async.put_BANG_.call(null,input_queue,foundation.rendering.create_msg);
})));
return foundation.rendering.as_resizable.call(null);
}));
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null),(function (renderer,p__39487,input_queue,parent_id,id){var vec__39488 = p__39487;var _ = cljs.core.nth.call(null,vec__39488,0,null);var path = cljs.core.nth.call(null,vec__39488,1,null);var ___$1 = cljs.core.nth.call(null,vec__39488,2,null);var val = cljs.core.nth.call(null,vec__39488,3,null);var model = foundation.app.render.get_data.call(null,renderer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null));var row_count = cljs.core.count.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByTagName("tbody"))[0]).rows);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",3798183098)], null),enfocus.core.content.call(null,foundation.templates.datagrid_table.call(null,model,val)));
foundation.rendering.set_datagrid_height_BANG_.call(null);
return foundation.rendering.fix_column_widths_BANG_.call(null);
}));
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null),(function (renderer,p__39489,input_queue,parent_id,id){var vec__39490 = p__39489;var _ = cljs.core.nth.call(null,vec__39490,0,null);var path = cljs.core.nth.call(null,vec__39490,1,null);var ___$1 = cljs.core.nth.call(null,vec__39490,2,null);var ___$2 = cljs.core.nth.call(null,vec__39490,3,null);var chart = foundation.chart.highchart.call(null);return foundation.app.render.set_data_BANG_.call(null,renderer,path,chart);
}));
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null),(function (renderer,p__39491,input_queue,parent_id,id){var vec__39492 = p__39491;var _ = cljs.core.nth.call(null,vec__39492,0,null);var path = cljs.core.nth.call(null,vec__39492,1,null);var ___$1 = cljs.core.nth.call(null,vec__39492,2,null);var val = cljs.core.nth.call(null,vec__39492,3,null);var chart = foundation.app.render.get_data.call(null,renderer,path);var start_time = (new Date(new cljs.core.Keyword(null,"start-time","start-time",3689550026).cljs$core$IFn$_invoke$arity$1(val))).getTime();var seq__39493_39497 = cljs.core.seq.call(null,chart.series);var chunk__39494_39498 = null;var count__39495_39499 = 0;var i__39496_39500 = 0;while(true){
if((i__39496_39500 < count__39495_39499))
{var series_39501 = cljs.core._nth.call(null,chunk__39494_39498,i__39496_39500);series_39501.remove();
{
var G__39502 = seq__39493_39497;
var G__39503 = chunk__39494_39498;
var G__39504 = count__39495_39499;
var G__39505 = (i__39496_39500 + 1);
seq__39493_39497 = G__39502;
chunk__39494_39498 = G__39503;
count__39495_39499 = G__39504;
i__39496_39500 = G__39505;
continue;
}
} else
{var temp__4092__auto___39506 = cljs.core.seq.call(null,seq__39493_39497);if(temp__4092__auto___39506)
{var seq__39493_39507__$1 = temp__4092__auto___39506;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39493_39507__$1))
{var c__14547__auto___39508 = cljs.core.chunk_first.call(null,seq__39493_39507__$1);{
var G__39509 = cljs.core.chunk_rest.call(null,seq__39493_39507__$1);
var G__39510 = c__14547__auto___39508;
var G__39511 = cljs.core.count.call(null,c__14547__auto___39508);
var G__39512 = 0;
seq__39493_39497 = G__39509;
chunk__39494_39498 = G__39510;
count__39495_39499 = G__39511;
i__39496_39500 = G__39512;
continue;
}
} else
{var series_39513 = cljs.core.first.call(null,seq__39493_39507__$1);series_39513.remove();
{
var G__39514 = cljs.core.next.call(null,seq__39493_39507__$1);
var G__39515 = null;
var G__39516 = 0;
var G__39517 = 0;
seq__39493_39497 = G__39514;
chunk__39494_39498 = G__39515;
count__39495_39499 = G__39516;
i__39496_39500 = G__39517;
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
HTMLCollection.prototype.cljs$core$ISeq$_rest$arity$1 = (function (x){var x__$1 = this;var iter__14516__auto__ = (function iter__39518(s__39519){return (new cljs.core.LazySeq(null,(function (){var s__39519__$1 = s__39519;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__39519__$1);if(temp__4092__auto__)
{var s__39519__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__39519__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__39519__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__39521 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__39520 = 0;while(true){
if((i__39520 < size__14515__auto__))
{var i = cljs.core._nth.call(null,c__14514__auto__,i__39520);cljs.core.chunk_append.call(null,b__39521,(x__$1[i]));
{
var G__39522 = (i__39520 + 1);
i__39520 = G__39522;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39521),iter__39518.call(null,cljs.core.chunk_rest.call(null,s__39519__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39521),null);
}
} else
{var i = cljs.core.first.call(null,s__39519__$2);return cljs.core.cons.call(null,(x__$1[i]),iter__39518.call(null,cljs.core.rest.call(null,s__39519__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14516__auto__.call(null,cljs.core.range.call(null,x__$1.length));
});
foundation.rendering.th_widths = (function th_widths(ths,widths){return cljs.core.reduce.call(null,(function (ws,p__39525){var vec__39526 = p__39525;var width = cljs.core.nth.call(null,vec__39526,0,null);var th = cljs.core.nth.call(null,vec__39526,1,null);var th_width = goog.style.getBounds(th).width;if((width > th_width))
{return cljs.core.conj.call(null,ws,width);
} else
{return cljs.core.conj.call(null,ws,th_width);
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,widths,ths));
});
foundation.rendering.td_widths = (function td_widths(rows){return cljs.core.reduce.call(null,(function (ws,td){return cljs.core.conj.call(null,ws,goog.style.getBounds(td).width);
}),cljs.core.PersistentVector.EMPTY,cljs.core.first.call(null,rows).cells);
});
foundation.rendering.full_td_widths = (function full_td_widths(th_widths,ths,row_width,table_width){return cljs.core.reduce.call(null,(function (ws,p__39529){var vec__39530 = p__39529;var width = cljs.core.nth.call(null,vec__39530,0,null);var th = cljs.core.nth.call(null,vec__39530,1,null);var th_width = goog.style.getBounds(th).width;var new_width = (table_width * (width / row_width));if((new_width > width))
{goog.style.setWidth(th,new_width);
return cljs.core.conj.call(null,ws,new_width);
} else
{goog.style.setWidth(th,width);
return cljs.core.conj.call(null,ws,width);
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,th_widths,ths));
});
foundation.rendering.fix_column_widths_BANG_ = (function fix_column_widths_BANG_(){var vec__39549 = cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__39531_SHARP_){return document.querySelector(dommy.core.selector.call(null,p1__39531_SHARP_));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".panel-body",".panel-body",1210123755),new cljs.core.Keyword(null,"tbody","tbody",1124062088),new cljs.core.Keyword(null,"thead","thead",1124231110)], null)));var panel_body = cljs.core.nth.call(null,vec__39549,0,null);var tbody = cljs.core.nth.call(null,vec__39549,1,null);var thead = cljs.core.nth.call(null,vec__39549,2,null);var table_width = goog.style.getBounds(panel_body).width;var rows = tbody.rows;var ths = cljs.core.first.call(null,thead.rows).cells;var td_widths = foundation.rendering.td_widths.call(null,rows);var th_widths = foundation.rendering.th_widths.call(null,ths,td_widths);var row_width = cljs.core.reduce.call(null,cljs.core._PLUS_,th_widths);var th_widths__$1 = foundation.rendering.full_td_widths.call(null,th_widths,ths,row_width,table_width);if((row_width > table_width))
{goog.style.setWidth(cljs.core.first.call(null,thead.rows),row_width);
} else
{goog.style.setWidth(cljs.core.first.call(null,thead.rows),table_width);
}
var seq__39550 = cljs.core.seq.call(null,rows);var chunk__39551 = null;var count__39552 = 0;var i__39553 = 0;while(true){
if((i__39553 < count__39552))
{var tr = cljs.core._nth.call(null,chunk__39551,i__39553);var seq__39554_39566 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,th_widths__$1,tr.cells));var chunk__39555_39567 = null;var count__39556_39568 = 0;var i__39557_39569 = 0;while(true){
if((i__39557_39569 < count__39556_39568))
{var vec__39558_39570 = cljs.core._nth.call(null,chunk__39555_39567,i__39557_39569);var width_39571 = cljs.core.nth.call(null,vec__39558_39570,0,null);var td_39572 = cljs.core.nth.call(null,vec__39558_39570,1,null);goog.style.setWidth(td_39572,width_39571);
{
var G__39573 = seq__39554_39566;
var G__39574 = chunk__39555_39567;
var G__39575 = count__39556_39568;
var G__39576 = (i__39557_39569 + 1);
seq__39554_39566 = G__39573;
chunk__39555_39567 = G__39574;
count__39556_39568 = G__39575;
i__39557_39569 = G__39576;
continue;
}
} else
{var temp__4092__auto___39577 = cljs.core.seq.call(null,seq__39554_39566);if(temp__4092__auto___39577)
{var seq__39554_39578__$1 = temp__4092__auto___39577;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39554_39578__$1))
{var c__14547__auto___39579 = cljs.core.chunk_first.call(null,seq__39554_39578__$1);{
var G__39580 = cljs.core.chunk_rest.call(null,seq__39554_39578__$1);
var G__39581 = c__14547__auto___39579;
var G__39582 = cljs.core.count.call(null,c__14547__auto___39579);
var G__39583 = 0;
seq__39554_39566 = G__39580;
chunk__39555_39567 = G__39581;
count__39556_39568 = G__39582;
i__39557_39569 = G__39583;
continue;
}
} else
{var vec__39559_39584 = cljs.core.first.call(null,seq__39554_39578__$1);var width_39585 = cljs.core.nth.call(null,vec__39559_39584,0,null);var td_39586 = cljs.core.nth.call(null,vec__39559_39584,1,null);goog.style.setWidth(td_39586,width_39585);
{
var G__39587 = cljs.core.next.call(null,seq__39554_39578__$1);
var G__39588 = null;
var G__39589 = 0;
var G__39590 = 0;
seq__39554_39566 = G__39587;
chunk__39555_39567 = G__39588;
count__39556_39568 = G__39589;
i__39557_39569 = G__39590;
continue;
}
}
} else
{}
}
break;
}
{
var G__39591 = seq__39550;
var G__39592 = chunk__39551;
var G__39593 = count__39552;
var G__39594 = (i__39553 + 1);
seq__39550 = G__39591;
chunk__39551 = G__39592;
count__39552 = G__39593;
i__39553 = G__39594;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__39550);if(temp__4092__auto__)
{var seq__39550__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39550__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__39550__$1);{
var G__39595 = cljs.core.chunk_rest.call(null,seq__39550__$1);
var G__39596 = c__14547__auto__;
var G__39597 = cljs.core.count.call(null,c__14547__auto__);
var G__39598 = 0;
seq__39550 = G__39595;
chunk__39551 = G__39596;
count__39552 = G__39597;
i__39553 = G__39598;
continue;
}
} else
{var tr = cljs.core.first.call(null,seq__39550__$1);var seq__39560_39599 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,th_widths__$1,tr.cells));var chunk__39561_39600 = null;var count__39562_39601 = 0;var i__39563_39602 = 0;while(true){
if((i__39563_39602 < count__39562_39601))
{var vec__39564_39603 = cljs.core._nth.call(null,chunk__39561_39600,i__39563_39602);var width_39604 = cljs.core.nth.call(null,vec__39564_39603,0,null);var td_39605 = cljs.core.nth.call(null,vec__39564_39603,1,null);goog.style.setWidth(td_39605,width_39604);
{
var G__39606 = seq__39560_39599;
var G__39607 = chunk__39561_39600;
var G__39608 = count__39562_39601;
var G__39609 = (i__39563_39602 + 1);
seq__39560_39599 = G__39606;
chunk__39561_39600 = G__39607;
count__39562_39601 = G__39608;
i__39563_39602 = G__39609;
continue;
}
} else
{var temp__4092__auto___39610__$1 = cljs.core.seq.call(null,seq__39560_39599);if(temp__4092__auto___39610__$1)
{var seq__39560_39611__$1 = temp__4092__auto___39610__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39560_39611__$1))
{var c__14547__auto___39612 = cljs.core.chunk_first.call(null,seq__39560_39611__$1);{
var G__39613 = cljs.core.chunk_rest.call(null,seq__39560_39611__$1);
var G__39614 = c__14547__auto___39612;
var G__39615 = cljs.core.count.call(null,c__14547__auto___39612);
var G__39616 = 0;
seq__39560_39599 = G__39613;
chunk__39561_39600 = G__39614;
count__39562_39601 = G__39615;
i__39563_39602 = G__39616;
continue;
}
} else
{var vec__39565_39617 = cljs.core.first.call(null,seq__39560_39611__$1);var width_39618 = cljs.core.nth.call(null,vec__39565_39617,0,null);var td_39619 = cljs.core.nth.call(null,vec__39565_39617,1,null);goog.style.setWidth(td_39619,width_39618);
{
var G__39620 = cljs.core.next.call(null,seq__39560_39611__$1);
var G__39621 = null;
var G__39622 = 0;
var G__39623 = 0;
seq__39560_39599 = G__39620;
chunk__39561_39600 = G__39621;
count__39562_39601 = G__39622;
i__39563_39602 = G__39623;
continue;
}
}
} else
{}
}
break;
}
{
var G__39624 = cljs.core.next.call(null,seq__39550__$1);
var G__39625 = null;
var G__39626 = 0;
var G__39627 = 0;
seq__39550 = G__39624;
chunk__39551 = G__39625;
count__39552 = G__39626;
i__39553 = G__39627;
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
foundation.rendering.as_resizable = (function as_resizable(){foundation.rendering.set_datagrid_height_BANG_.call(null);
var viewport_monitor = goog.dom.ViewportSizeMonitor.getInstanceForWindow();return goog.events.listen(viewport_monitor,goog.events.EventType.RESIZE,(function (e){return foundation.rendering.set_datagrid_height_BANG_.call(null);
}));
});

//# sourceMappingURL=rendering.js.map