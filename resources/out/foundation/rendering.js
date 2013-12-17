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
cljs.core._add_method.call(null,foundation.app.render.node_create,cljs.core.PersistentVector.EMPTY,(function (renderer,p__352502,input_queue,parent_id,id){var vec__352503 = p__352502;var _ = cljs.core.nth.call(null,vec__352503,0,null);var path = cljs.core.nth.call(null,vec__352503,1,null);var ___$1 = cljs.core.nth.call(null,vec__352503,2,null);var val = cljs.core.nth.call(null,vec__352503,3,null);return enfocus.core.at.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",1016933652)], null),enfocus.core.append.call(null,foundation.templates.twitter_power.call(null,id)));
}));
foundation.rendering.stats_msg = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"stats","stats",1123661841),foundation.app.message.path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null)], true, false);
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null),(function (renderer,p__352504,input_queue,parent_id,id){var vec__352505 = p__352504;var _ = cljs.core.nth.call(null,vec__352505,0,null);var path = cljs.core.nth.call(null,vec__352505,1,null);var ___$1 = cljs.core.nth.call(null,vec__352505,2,null);var val = cljs.core.nth.call(null,vec__352505,3,null);enfocus.core.at.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.rendering.css_id.call(null,parent_id)], null),enfocus.core.append.call(null,foundation.templates.dashboard.call(null,id)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#Impressions")].join('')], null),enfocus.core.add_class.call(null,"active"));
var seq__352506 = cljs.core.seq.call(null,foundation.templates.dashboard_metrics);var chunk__352507 = null;var count__352508 = 0;var i__352509 = 0;while(true){
if((i__352509 < count__352508))
{var vec__352510 = cljs.core._nth.call(null,chunk__352507,i__352509);var metric = cljs.core.nth.call(null,vec__352510,0,null);var cpa = cljs.core.nth.call(null,vec__352510,1,null);var rate = cljs.core.nth.call(null,vec__352510,2,null);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric)].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__352506,chunk__352507,count__352508,i__352509,vec__352510,metric,cpa,rate){
return (function (e){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"total","total",1124454070)));
});})(seq__352506,chunk__352507,count__352508,i__352509,vec__352510,metric,cpa,rate))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__352506,chunk__352507,count__352508,i__352509,vec__352510,metric,cpa,rate){
return (function (){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"cpa","cpa",1014002950)));
});})(seq__352506,chunk__352507,count__352508,i__352509,vec__352510,metric,cpa,rate))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__352506,chunk__352507,count__352508,i__352509,vec__352510,metric,cpa,rate){
return (function (){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"rate","rate",1017397330)));
});})(seq__352506,chunk__352507,count__352508,i__352509,vec__352510,metric,cpa,rate))
));
{
var G__352512 = seq__352506;
var G__352513 = chunk__352507;
var G__352514 = count__352508;
var G__352515 = (i__352509 + 1);
seq__352506 = G__352512;
chunk__352507 = G__352513;
count__352508 = G__352514;
i__352509 = G__352515;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__352506);if(temp__4092__auto__)
{var seq__352506__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__352506__$1))
{var c__14708__auto__ = cljs.core.chunk_first.call(null,seq__352506__$1);{
var G__352516 = cljs.core.chunk_rest.call(null,seq__352506__$1);
var G__352517 = c__14708__auto__;
var G__352518 = cljs.core.count.call(null,c__14708__auto__);
var G__352519 = 0;
seq__352506 = G__352516;
chunk__352507 = G__352517;
count__352508 = G__352518;
i__352509 = G__352519;
continue;
}
} else
{var vec__352511 = cljs.core.first.call(null,seq__352506__$1);var metric = cljs.core.nth.call(null,vec__352511,0,null);var cpa = cljs.core.nth.call(null,vec__352511,1,null);var rate = cljs.core.nth.call(null,vec__352511,2,null);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric)].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__352506,chunk__352507,count__352508,i__352509,vec__352511,metric,cpa,rate,seq__352506__$1,temp__4092__auto__){
return (function (e){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"total","total",1124454070)));
});})(seq__352506,chunk__352507,count__352508,i__352509,vec__352511,metric,cpa,rate,seq__352506__$1,temp__4092__auto__))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__352506,chunk__352507,count__352508,i__352509,vec__352511,metric,cpa,rate,seq__352506__$1,temp__4092__auto__){
return (function (){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"cpa","cpa",1014002950)));
});})(seq__352506,chunk__352507,count__352508,i__352509,vec__352511,metric,cpa,rate,seq__352506__$1,temp__4092__auto__))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__352506,chunk__352507,count__352508,i__352509,vec__352511,metric,cpa,rate,seq__352506__$1,temp__4092__auto__){
return (function (){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"rate","rate",1017397330)));
});})(seq__352506,chunk__352507,count__352508,i__352509,vec__352511,metric,cpa,rate,seq__352506__$1,temp__4092__auto__))
));
{
var G__352520 = cljs.core.next.call(null,seq__352506__$1);
var G__352521 = null;
var G__352522 = 0;
var G__352523 = 0;
seq__352506 = G__352520;
chunk__352507 = G__352521;
count__352508 = G__352522;
i__352509 = G__352523;
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
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null),(function (renderer,p__352524,input_queue,parent_id,id){var vec__352525 = p__352524;var _ = cljs.core.nth.call(null,vec__352525,0,null);var path = cljs.core.nth.call(null,vec__352525,1,null);var ___$1 = cljs.core.nth.call(null,vec__352525,2,null);var map__352526 = cljs.core.nth.call(null,vec__352525,3,null);var map__352526__$1 = ((cljs.core.seq_QMARK_.call(null,map__352526))?cljs.core.apply.call(null,cljs.core.hash_map,map__352526):map__352526);var val = map__352526__$1;var model = cljs.core.get.call(null,map__352526__$1,new cljs.core.Keyword(null,"model","model",1117974171));var end_time = cljs.core.get.call(null,map__352526__$1,new cljs.core.Keyword(null,"end-time","end-time",2693279729));var start_time = cljs.core.get.call(null,map__352526__$1,new cljs.core.Keyword(null,"start-time","start-time",3689550026));var stats = cljs.core.get.call(null,map__352526__$1,new cljs.core.Keyword(null,"stats","stats",1123661841));if(cljs.core.truth_(start_time))
{var start_picker = foundation.rendering.start_date_picker.call(null,renderer,start_time);var end_picker = foundation.rendering.end_date_picker.call(null,renderer,end_time);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,[cljs.core.str("#"),cljs.core.str(parent_id)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#resource-id","#resource-id",2471321257)], null),enfocus.core.content.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(model)));
var seq__352527 = cljs.core.seq.call(null,foundation.templates.dashboard_metrics);var chunk__352528 = null;var count__352529 = 0;var i__352530 = 0;while(true){
if((i__352530 < count__352529))
{var vec__352531 = cljs.core._nth.call(null,chunk__352528,i__352530);var metric = cljs.core.nth.call(null,vec__352531,0,null);var cpa = cljs.core.nth.call(null,vec__352531,1,null);var rate = cljs.core.nth.call(null,vec__352531,2,null);var total_352533 = cljs.core.get.call(null,new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(stats),metric);var _cpa_352534 = cljs.core.get.call(null,new cljs.core.Keyword(null,"cpa","cpa",1014002950).cljs$core$IFn$_invoke$arity$1(stats),metric);var _rate_352535 = cljs.core.get.call(null,new cljs.core.Keyword(null,"rate","rate",1017397330).cljs$core$IFn$_invoke$arity$1(stats),metric);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric)].join('')], null),enfocus.core.content.call(null,[cljs.core.str(total_352533),cljs.core.str(" "),cljs.core.str(metric)].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),enfocus.core.content.call(null,[cljs.core.str(_cpa_352534),cljs.core.str(" "),cljs.core.str(cpa)].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),enfocus.core.content.call(null,[cljs.core.str(_rate_352535),cljs.core.str(" "),cljs.core.str(rate)].join('')));
{
var G__352536 = seq__352527;
var G__352537 = chunk__352528;
var G__352538 = count__352529;
var G__352539 = (i__352530 + 1);
seq__352527 = G__352536;
chunk__352528 = G__352537;
count__352529 = G__352538;
i__352530 = G__352539;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__352527);if(temp__4092__auto__)
{var seq__352527__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__352527__$1))
{var c__14708__auto__ = cljs.core.chunk_first.call(null,seq__352527__$1);{
var G__352540 = cljs.core.chunk_rest.call(null,seq__352527__$1);
var G__352541 = c__14708__auto__;
var G__352542 = cljs.core.count.call(null,c__14708__auto__);
var G__352543 = 0;
seq__352527 = G__352540;
chunk__352528 = G__352541;
count__352529 = G__352542;
i__352530 = G__352543;
continue;
}
} else
{var vec__352532 = cljs.core.first.call(null,seq__352527__$1);var metric = cljs.core.nth.call(null,vec__352532,0,null);var cpa = cljs.core.nth.call(null,vec__352532,1,null);var rate = cljs.core.nth.call(null,vec__352532,2,null);var total_352544 = cljs.core.get.call(null,new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(stats),metric);var _cpa_352545 = cljs.core.get.call(null,new cljs.core.Keyword(null,"cpa","cpa",1014002950).cljs$core$IFn$_invoke$arity$1(stats),metric);var _rate_352546 = cljs.core.get.call(null,new cljs.core.Keyword(null,"rate","rate",1017397330).cljs$core$IFn$_invoke$arity$1(stats),metric);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric)].join('')], null),enfocus.core.content.call(null,[cljs.core.str(total_352544),cljs.core.str(" "),cljs.core.str(metric)].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),enfocus.core.content.call(null,[cljs.core.str(_cpa_352545),cljs.core.str(" "),cljs.core.str(cpa)].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),enfocus.core.content.call(null,[cljs.core.str(_rate_352546),cljs.core.str(" "),cljs.core.str(rate)].join('')));
{
var G__352547 = cljs.core.next.call(null,seq__352527__$1);
var G__352548 = null;
var G__352549 = 0;
var G__352550 = 0;
seq__352527 = G__352547;
chunk__352528 = G__352548;
count__352529 = G__352549;
i__352530 = G__352550;
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
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null),(function (renderer,p__352551,input_queue,parent_id,id){var vec__352552 = p__352551;var _ = cljs.core.nth.call(null,vec__352552,0,null);var path = cljs.core.nth.call(null,vec__352552,1,null);var ___$1 = cljs.core.nth.call(null,vec__352552,2,null);var ___$2 = cljs.core.nth.call(null,vec__352552,3,null);return enfocus.core.at.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.rendering.css_id.call(null,parent_id)], null),enfocus.core.append.call(null,foundation.templates.datagrid.call(null,id)));
}));
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null),(function (renderer,p__352553,input_queue,parent_id,id){var vec__352554 = p__352553;var _ = cljs.core.nth.call(null,vec__352554,0,null);var path = cljs.core.nth.call(null,vec__352554,1,null);var ___$1 = cljs.core.nth.call(null,vec__352554,2,null);var val = cljs.core.nth.call(null,vec__352554,3,null);if(cljs.core._EQ_.call(null,foundation.app.render.get_data.call(null,renderer,path),new cljs.core.Keyword(null,"resource","resource",672839552).cljs$core$IFn$_invoke$arity$1(val)))
{return null;
} else
{return foundation.app.render.set_data_BANG_.call(null,renderer,path,new cljs.core.Keyword(null,"resource","resource",672839552).cljs$core$IFn$_invoke$arity$1(val));
}
}));
foundation.rendering.create_msg = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"create","create",3956577390),foundation.app.message.path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null)], true, false);
foundation.rendering.save_msg = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"save","save",1017427183),foundation.app.message.path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null)], true, false);
foundation.rendering.delete_msg = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"delete","delete",3973413149),foundation.app.message.path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null)], true, false);
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null),(function (renderer,p__352555,input_queue,parent_id,id){var vec__352556 = p__352555;var _ = cljs.core.nth.call(null,vec__352556,0,null);var path = cljs.core.nth.call(null,vec__352556,1,null);var ___$1 = cljs.core.nth.call(null,vec__352556,2,null);var val = cljs.core.nth.call(null,vec__352556,3,null);var model = foundation.app.render.get_data.call(null,renderer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null));enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",3798183098)], null),enfocus.core.content.call(null,foundation.templates.datagrid_table.call(null,model,cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#new","button#new",1370997825)], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return cljs.core.async.put_BANG_.call(null,input_queue,foundation.rendering.create_msg);
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#save","button#save",3494015904)], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return cljs.core.async.put_BANG_.call(null,input_queue,foundation.rendering.save_msg);
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#delete","button#delete",4563292046)], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return cljs.core.async.put_BANG_.call(null,input_queue,foundation.rendering.delete_msg);
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#dupe","button#dupe",3493588073)], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return cljs.core.async.put_BANG_.call(null,input_queue,foundation.rendering.create_msg);
})));
return foundation.rendering.as_resizable.call(null);
}));
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null),(function (renderer,p__352557,input_queue,parent_id,id){var vec__352558 = p__352557;var _ = cljs.core.nth.call(null,vec__352558,0,null);var path = cljs.core.nth.call(null,vec__352558,1,null);var ___$1 = cljs.core.nth.call(null,vec__352558,2,null);var val = cljs.core.nth.call(null,vec__352558,3,null);var model = foundation.app.render.get_data.call(null,renderer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null));var row_count = cljs.core.count.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByTagName("tbody"))[0]).rows);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",3798183098)], null),enfocus.core.content.call(null,foundation.templates.datagrid_table.call(null,model,val)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body>tr","div.panel-body>tr",3056946278)], null),enfocus.core.content.call(null,foundation.templates.datagrid_table.call(null,model,val)));
foundation.rendering.set_datagrid_height_BANG_.call(null);
return foundation.rendering.fix_column_widths_BANG_.call(null);
}));
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null),(function (renderer,p__352559,input_queue,parent_id,id){var vec__352560 = p__352559;var _ = cljs.core.nth.call(null,vec__352560,0,null);var path = cljs.core.nth.call(null,vec__352560,1,null);var ___$1 = cljs.core.nth.call(null,vec__352560,2,null);var ___$2 = cljs.core.nth.call(null,vec__352560,3,null);var chart = foundation.chart.highchart.call(null);return foundation.app.render.set_data_BANG_.call(null,renderer,path,chart);
}));
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null),(function (renderer,p__352561,input_queue,parent_id,id){var vec__352562 = p__352561;var _ = cljs.core.nth.call(null,vec__352562,0,null);var path = cljs.core.nth.call(null,vec__352562,1,null);var ___$1 = cljs.core.nth.call(null,vec__352562,2,null);var val = cljs.core.nth.call(null,vec__352562,3,null);var chart = foundation.app.render.get_data.call(null,renderer,path);var start_time = (new Date(new cljs.core.Keyword(null,"start-time","start-time",3689550026).cljs$core$IFn$_invoke$arity$1(val))).getTime();var seq__352563_352567 = cljs.core.seq.call(null,chart.series);var chunk__352564_352568 = null;var count__352565_352569 = 0;var i__352566_352570 = 0;while(true){
if((i__352566_352570 < count__352565_352569))
{var series_352571 = cljs.core._nth.call(null,chunk__352564_352568,i__352566_352570);series_352571.remove();
{
var G__352572 = seq__352563_352567;
var G__352573 = chunk__352564_352568;
var G__352574 = count__352565_352569;
var G__352575 = (i__352566_352570 + 1);
seq__352563_352567 = G__352572;
chunk__352564_352568 = G__352573;
count__352565_352569 = G__352574;
i__352566_352570 = G__352575;
continue;
}
} else
{var temp__4092__auto___352576 = cljs.core.seq.call(null,seq__352563_352567);if(temp__4092__auto___352576)
{var seq__352563_352577__$1 = temp__4092__auto___352576;if(cljs.core.chunked_seq_QMARK_.call(null,seq__352563_352577__$1))
{var c__14708__auto___352578 = cljs.core.chunk_first.call(null,seq__352563_352577__$1);{
var G__352579 = cljs.core.chunk_rest.call(null,seq__352563_352577__$1);
var G__352580 = c__14708__auto___352578;
var G__352581 = cljs.core.count.call(null,c__14708__auto___352578);
var G__352582 = 0;
seq__352563_352567 = G__352579;
chunk__352564_352568 = G__352580;
count__352565_352569 = G__352581;
i__352566_352570 = G__352582;
continue;
}
} else
{var series_352583 = cljs.core.first.call(null,seq__352563_352577__$1);series_352583.remove();
{
var G__352584 = cljs.core.next.call(null,seq__352563_352577__$1);
var G__352585 = null;
var G__352586 = 0;
var G__352587 = 0;
seq__352563_352567 = G__352584;
chunk__352564_352568 = G__352585;
count__352565_352569 = G__352586;
i__352566_352570 = G__352587;
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
HTMLCollection.prototype.cljs$core$ISeq$_rest$arity$1 = (function (x){var x__$1 = this;var iter__14677__auto__ = (function iter__352588(s__352589){return (new cljs.core.LazySeq(null,(function (){var s__352589__$1 = s__352589;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__352589__$1);if(temp__4092__auto__)
{var s__352589__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__352589__$2))
{var c__14675__auto__ = cljs.core.chunk_first.call(null,s__352589__$2);var size__14676__auto__ = cljs.core.count.call(null,c__14675__auto__);var b__352591 = cljs.core.chunk_buffer.call(null,size__14676__auto__);if((function (){var i__352590 = 0;while(true){
if((i__352590 < size__14676__auto__))
{var i = cljs.core._nth.call(null,c__14675__auto__,i__352590);cljs.core.chunk_append.call(null,b__352591,(x__$1[i]));
{
var G__352592 = (i__352590 + 1);
i__352590 = G__352592;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__352591),iter__352588.call(null,cljs.core.chunk_rest.call(null,s__352589__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__352591),null);
}
} else
{var i = cljs.core.first.call(null,s__352589__$2);return cljs.core.cons.call(null,(x__$1[i]),iter__352588.call(null,cljs.core.rest.call(null,s__352589__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14677__auto__.call(null,cljs.core.range.call(null,x__$1.length));
});
foundation.rendering.th_widths = (function th_widths(ths,widths){return cljs.core.reduce.call(null,(function (ws,p__352595){var vec__352596 = p__352595;var width = cljs.core.nth.call(null,vec__352596,0,null);var th = cljs.core.nth.call(null,vec__352596,1,null);var th_width = goog.style.getBounds(th).width;if((width > th_width))
{return cljs.core.conj.call(null,ws,width);
} else
{return cljs.core.conj.call(null,ws,th_width);
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,widths,ths));
});
foundation.rendering.td_widths = (function td_widths(rows){return cljs.core.reduce.call(null,(function (ws,td){return cljs.core.conj.call(null,ws,goog.style.getBounds(td).width);
}),cljs.core.PersistentVector.EMPTY,cljs.core.first.call(null,rows).cells);
});
foundation.rendering.full_td_widths = (function full_td_widths(th_widths,ths,row_width,table_width){return cljs.core.reduce.call(null,(function (ws,p__352599){var vec__352600 = p__352599;var width = cljs.core.nth.call(null,vec__352600,0,null);var th = cljs.core.nth.call(null,vec__352600,1,null);var th_width = width;var new_width = (table_width * (width / row_width));if((new_width > width))
{goog.style.setWidth(th,new_width);
return cljs.core.conj.call(null,ws,new_width);
} else
{goog.style.setWidth(th,width);
return cljs.core.conj.call(null,ws,width);
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,th_widths,ths));
});
foundation.rendering.fix_column_widths_BANG_ = (function fix_column_widths_BANG_(){var vec__352619 = cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__352601_SHARP_){return document.querySelector(dommy.core.selector.call(null,p1__352601_SHARP_));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".panel-body",".panel-body",1210123755),new cljs.core.Keyword(null,"tbody","tbody",1124062088),new cljs.core.Keyword(null,"thead","thead",1124231110)], null)));var panel_body = cljs.core.nth.call(null,vec__352619,0,null);var tbody = cljs.core.nth.call(null,vec__352619,1,null);var thead = cljs.core.nth.call(null,vec__352619,2,null);var table_width = goog.style.getBounds(tbody).width;var rows = tbody.rows;var ths = cljs.core.first.call(null,thead.rows).cells;var td_widths = foundation.rendering.td_widths.call(null,rows);var th_widths = foundation.rendering.th_widths.call(null,ths,td_widths);var row_width = cljs.core.reduce.call(null,cljs.core._PLUS_,th_widths);var th_widths__$1 = foundation.rendering.full_td_widths.call(null,th_widths,ths,row_width,table_width);var seq__352620 = cljs.core.seq.call(null,rows);var chunk__352621 = null;var count__352622 = 0;var i__352623 = 0;while(true){
if((i__352623 < count__352622))
{var tr = cljs.core._nth.call(null,chunk__352621,i__352623);var seq__352624_352636 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,th_widths__$1,tr.cells));var chunk__352625_352637 = null;var count__352626_352638 = 0;var i__352627_352639 = 0;while(true){
if((i__352627_352639 < count__352626_352638))
{var vec__352628_352640 = cljs.core._nth.call(null,chunk__352625_352637,i__352627_352639);var width_352641 = cljs.core.nth.call(null,vec__352628_352640,0,null);var td_352642 = cljs.core.nth.call(null,vec__352628_352640,1,null);goog.style.setWidth(td_352642,width_352641);
{
var G__352643 = seq__352624_352636;
var G__352644 = chunk__352625_352637;
var G__352645 = count__352626_352638;
var G__352646 = (i__352627_352639 + 1);
seq__352624_352636 = G__352643;
chunk__352625_352637 = G__352644;
count__352626_352638 = G__352645;
i__352627_352639 = G__352646;
continue;
}
} else
{var temp__4092__auto___352647 = cljs.core.seq.call(null,seq__352624_352636);if(temp__4092__auto___352647)
{var seq__352624_352648__$1 = temp__4092__auto___352647;if(cljs.core.chunked_seq_QMARK_.call(null,seq__352624_352648__$1))
{var c__14708__auto___352649 = cljs.core.chunk_first.call(null,seq__352624_352648__$1);{
var G__352650 = cljs.core.chunk_rest.call(null,seq__352624_352648__$1);
var G__352651 = c__14708__auto___352649;
var G__352652 = cljs.core.count.call(null,c__14708__auto___352649);
var G__352653 = 0;
seq__352624_352636 = G__352650;
chunk__352625_352637 = G__352651;
count__352626_352638 = G__352652;
i__352627_352639 = G__352653;
continue;
}
} else
{var vec__352629_352654 = cljs.core.first.call(null,seq__352624_352648__$1);var width_352655 = cljs.core.nth.call(null,vec__352629_352654,0,null);var td_352656 = cljs.core.nth.call(null,vec__352629_352654,1,null);goog.style.setWidth(td_352656,width_352655);
{
var G__352657 = cljs.core.next.call(null,seq__352624_352648__$1);
var G__352658 = null;
var G__352659 = 0;
var G__352660 = 0;
seq__352624_352636 = G__352657;
chunk__352625_352637 = G__352658;
count__352626_352638 = G__352659;
i__352627_352639 = G__352660;
continue;
}
}
} else
{}
}
break;
}
{
var G__352661 = seq__352620;
var G__352662 = chunk__352621;
var G__352663 = count__352622;
var G__352664 = (i__352623 + 1);
seq__352620 = G__352661;
chunk__352621 = G__352662;
count__352622 = G__352663;
i__352623 = G__352664;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__352620);if(temp__4092__auto__)
{var seq__352620__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__352620__$1))
{var c__14708__auto__ = cljs.core.chunk_first.call(null,seq__352620__$1);{
var G__352665 = cljs.core.chunk_rest.call(null,seq__352620__$1);
var G__352666 = c__14708__auto__;
var G__352667 = cljs.core.count.call(null,c__14708__auto__);
var G__352668 = 0;
seq__352620 = G__352665;
chunk__352621 = G__352666;
count__352622 = G__352667;
i__352623 = G__352668;
continue;
}
} else
{var tr = cljs.core.first.call(null,seq__352620__$1);var seq__352630_352669 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,th_widths__$1,tr.cells));var chunk__352631_352670 = null;var count__352632_352671 = 0;var i__352633_352672 = 0;while(true){
if((i__352633_352672 < count__352632_352671))
{var vec__352634_352673 = cljs.core._nth.call(null,chunk__352631_352670,i__352633_352672);var width_352674 = cljs.core.nth.call(null,vec__352634_352673,0,null);var td_352675 = cljs.core.nth.call(null,vec__352634_352673,1,null);goog.style.setWidth(td_352675,width_352674);
{
var G__352676 = seq__352630_352669;
var G__352677 = chunk__352631_352670;
var G__352678 = count__352632_352671;
var G__352679 = (i__352633_352672 + 1);
seq__352630_352669 = G__352676;
chunk__352631_352670 = G__352677;
count__352632_352671 = G__352678;
i__352633_352672 = G__352679;
continue;
}
} else
{var temp__4092__auto___352680__$1 = cljs.core.seq.call(null,seq__352630_352669);if(temp__4092__auto___352680__$1)
{var seq__352630_352681__$1 = temp__4092__auto___352680__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__352630_352681__$1))
{var c__14708__auto___352682 = cljs.core.chunk_first.call(null,seq__352630_352681__$1);{
var G__352683 = cljs.core.chunk_rest.call(null,seq__352630_352681__$1);
var G__352684 = c__14708__auto___352682;
var G__352685 = cljs.core.count.call(null,c__14708__auto___352682);
var G__352686 = 0;
seq__352630_352669 = G__352683;
chunk__352631_352670 = G__352684;
count__352632_352671 = G__352685;
i__352633_352672 = G__352686;
continue;
}
} else
{var vec__352635_352687 = cljs.core.first.call(null,seq__352630_352681__$1);var width_352688 = cljs.core.nth.call(null,vec__352635_352687,0,null);var td_352689 = cljs.core.nth.call(null,vec__352635_352687,1,null);goog.style.setWidth(td_352689,width_352688);
{
var G__352690 = cljs.core.next.call(null,seq__352630_352681__$1);
var G__352691 = null;
var G__352692 = 0;
var G__352693 = 0;
seq__352630_352669 = G__352690;
chunk__352631_352670 = G__352691;
count__352632_352671 = G__352692;
i__352633_352672 = G__352693;
continue;
}
}
} else
{}
}
break;
}
{
var G__352694 = cljs.core.next.call(null,seq__352620__$1);
var G__352695 = null;
var G__352696 = 0;
var G__352697 = 0;
seq__352620 = G__352694;
chunk__352621 = G__352695;
count__352622 = G__352696;
i__352623 = G__352697;
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