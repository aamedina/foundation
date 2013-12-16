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
goog.require('foundation.app.xhr');
goog.require('foundation.app.util');
goog.require('cljs_time.coerce');
goog.require('foundation.app.render');
goog.require('foundation.behavior');
goog.require('dommy.core');
goog.require('foundation.models');
cljs.core.enable_console_print_BANG_.call(null);
foundation.rendering.css_id = (function css_id(id){return [cljs.core.str("#"),cljs.core.str(id)].join('');
});
cljs.core._add_method.call(null,foundation.app.render.node_create,cljs.core.PersistentVector.EMPTY,(function (renderer,p__75550,input_queue,parent_id,id){var vec__75551 = p__75550;var _ = cljs.core.nth.call(null,vec__75551,0,null);var path = cljs.core.nth.call(null,vec__75551,1,null);var ___$1 = cljs.core.nth.call(null,vec__75551,2,null);var val = cljs.core.nth.call(null,vec__75551,3,null);return enfocus.core.at.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",1016933652)], null),enfocus.core.append.call(null,foundation.templates.twitter_power.call(null,id)));
}));
foundation.rendering.stats_msg = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"stats","stats",1123661841),foundation.app.message.path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null)], true, false);
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null),(function (renderer,p__75552,input_queue,parent_id,id){var vec__75553 = p__75552;var _ = cljs.core.nth.call(null,vec__75553,0,null);var path = cljs.core.nth.call(null,vec__75553,1,null);var ___$1 = cljs.core.nth.call(null,vec__75553,2,null);var val = cljs.core.nth.call(null,vec__75553,3,null);enfocus.core.at.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.rendering.css_id.call(null,parent_id)], null),enfocus.core.append.call(null,foundation.templates.dashboard.call(null,id)));
var seq__75554 = cljs.core.seq.call(null,foundation.templates.dashboard_metrics);var chunk__75555 = null;var count__75556 = 0;var i__75557 = 0;while(true){
if((i__75557 < count__75556))
{var vec__75558 = cljs.core._nth.call(null,chunk__75555,i__75557);var metric = cljs.core.nth.call(null,vec__75558,0,null);var cpa = cljs.core.nth.call(null,vec__75558,1,null);var rate = cljs.core.nth.call(null,vec__75558,2,null);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric)].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__75554,chunk__75555,count__75556,i__75557,vec__75558,metric,cpa,rate){
return (function (){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"total","total",1124454070)));
});})(seq__75554,chunk__75555,count__75556,i__75557,vec__75558,metric,cpa,rate))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__75554,chunk__75555,count__75556,i__75557,vec__75558,metric,cpa,rate){
return (function (){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"cpa","cpa",1014002950)));
});})(seq__75554,chunk__75555,count__75556,i__75557,vec__75558,metric,cpa,rate))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__75554,chunk__75555,count__75556,i__75557,vec__75558,metric,cpa,rate){
return (function (){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"rate","rate",1017397330)));
});})(seq__75554,chunk__75555,count__75556,i__75557,vec__75558,metric,cpa,rate))
));
{
var G__75560 = seq__75554;
var G__75561 = chunk__75555;
var G__75562 = count__75556;
var G__75563 = (i__75557 + 1);
seq__75554 = G__75560;
chunk__75555 = G__75561;
count__75556 = G__75562;
i__75557 = G__75563;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__75554);if(temp__4092__auto__)
{var seq__75554__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__75554__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__75554__$1);{
var G__75564 = cljs.core.chunk_rest.call(null,seq__75554__$1);
var G__75565 = c__14547__auto__;
var G__75566 = cljs.core.count.call(null,c__14547__auto__);
var G__75567 = 0;
seq__75554 = G__75564;
chunk__75555 = G__75565;
count__75556 = G__75566;
i__75557 = G__75567;
continue;
}
} else
{var vec__75559 = cljs.core.first.call(null,seq__75554__$1);var metric = cljs.core.nth.call(null,vec__75559,0,null);var cpa = cljs.core.nth.call(null,vec__75559,1,null);var rate = cljs.core.nth.call(null,vec__75559,2,null);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric)].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__75554,chunk__75555,count__75556,i__75557,vec__75559,metric,cpa,rate,seq__75554__$1,temp__4092__auto__){
return (function (){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"total","total",1124454070)));
});})(seq__75554,chunk__75555,count__75556,i__75557,vec__75559,metric,cpa,rate,seq__75554__$1,temp__4092__auto__))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__75554,chunk__75555,count__75556,i__75557,vec__75559,metric,cpa,rate,seq__75554__$1,temp__4092__auto__){
return (function (){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"cpa","cpa",1014002950)));
});})(seq__75554,chunk__75555,count__75556,i__75557,vec__75559,metric,cpa,rate,seq__75554__$1,temp__4092__auto__))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__75554,chunk__75555,count__75556,i__75557,vec__75559,metric,cpa,rate,seq__75554__$1,temp__4092__auto__){
return (function (){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"rate","rate",1017397330)));
});})(seq__75554,chunk__75555,count__75556,i__75557,vec__75559,metric,cpa,rate,seq__75554__$1,temp__4092__auto__))
));
{
var G__75568 = cljs.core.next.call(null,seq__75554__$1);
var G__75569 = null;
var G__75570 = 0;
var G__75571 = 0;
seq__75554 = G__75568;
chunk__75555 = G__75569;
count__75556 = G__75570;
i__75557 = G__75571;
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
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null),(function (renderer,p__75572,input_queue,parent_id,id){var vec__75573 = p__75572;var _ = cljs.core.nth.call(null,vec__75573,0,null);var path = cljs.core.nth.call(null,vec__75573,1,null);var ___$1 = cljs.core.nth.call(null,vec__75573,2,null);var map__75574 = cljs.core.nth.call(null,vec__75573,3,null);var map__75574__$1 = ((cljs.core.seq_QMARK_.call(null,map__75574))?cljs.core.apply.call(null,cljs.core.hash_map,map__75574):map__75574);var val = map__75574__$1;var model = cljs.core.get.call(null,map__75574__$1,new cljs.core.Keyword(null,"model","model",1117974171));var end_time = cljs.core.get.call(null,map__75574__$1,new cljs.core.Keyword(null,"end-time","end-time",2693279729));var start_time = cljs.core.get.call(null,map__75574__$1,new cljs.core.Keyword(null,"start-time","start-time",3689550026));var stats = cljs.core.get.call(null,map__75574__$1,new cljs.core.Keyword(null,"stats","stats",1123661841));if(cljs.core.truth_(start_time))
{var start_picker = foundation.rendering.start_date_picker.call(null,renderer,start_time);var end_picker = foundation.rendering.end_date_picker.call(null,renderer,end_time);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,[cljs.core.str("#"),cljs.core.str(parent_id)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#resource-id","#resource-id",2471321257)], null),enfocus.core.content.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(model)));
var seq__75575 = cljs.core.seq.call(null,foundation.templates.dashboard_metrics);var chunk__75576 = null;var count__75577 = 0;var i__75578 = 0;while(true){
if((i__75578 < count__75577))
{var vec__75579 = cljs.core._nth.call(null,chunk__75576,i__75578);var metric = cljs.core.nth.call(null,vec__75579,0,null);var cpa = cljs.core.nth.call(null,vec__75579,1,null);var rate = cljs.core.nth.call(null,vec__75579,2,null);var total_75581 = cljs.core.get.call(null,new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(stats),metric);var _cpa_75582 = cljs.core.get.call(null,new cljs.core.Keyword(null,"cpa","cpa",1014002950).cljs$core$IFn$_invoke$arity$1(stats),metric);var _rate_75583 = cljs.core.get.call(null,new cljs.core.Keyword(null,"rate","rate",1017397330).cljs$core$IFn$_invoke$arity$1(stats),metric);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric)].join('')], null),enfocus.core.content.call(null,[cljs.core.str(total_75581),cljs.core.str(" "),cljs.core.str(metric)].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),enfocus.core.content.call(null,[cljs.core.str(_cpa_75582),cljs.core.str(" "),cljs.core.str(cpa)].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),enfocus.core.content.call(null,[cljs.core.str(_rate_75583),cljs.core.str(" "),cljs.core.str(rate)].join('')));
{
var G__75584 = seq__75575;
var G__75585 = chunk__75576;
var G__75586 = count__75577;
var G__75587 = (i__75578 + 1);
seq__75575 = G__75584;
chunk__75576 = G__75585;
count__75577 = G__75586;
i__75578 = G__75587;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__75575);if(temp__4092__auto__)
{var seq__75575__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__75575__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__75575__$1);{
var G__75588 = cljs.core.chunk_rest.call(null,seq__75575__$1);
var G__75589 = c__14547__auto__;
var G__75590 = cljs.core.count.call(null,c__14547__auto__);
var G__75591 = 0;
seq__75575 = G__75588;
chunk__75576 = G__75589;
count__75577 = G__75590;
i__75578 = G__75591;
continue;
}
} else
{var vec__75580 = cljs.core.first.call(null,seq__75575__$1);var metric = cljs.core.nth.call(null,vec__75580,0,null);var cpa = cljs.core.nth.call(null,vec__75580,1,null);var rate = cljs.core.nth.call(null,vec__75580,2,null);var total_75592 = cljs.core.get.call(null,new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(stats),metric);var _cpa_75593 = cljs.core.get.call(null,new cljs.core.Keyword(null,"cpa","cpa",1014002950).cljs$core$IFn$_invoke$arity$1(stats),metric);var _rate_75594 = cljs.core.get.call(null,new cljs.core.Keyword(null,"rate","rate",1017397330).cljs$core$IFn$_invoke$arity$1(stats),metric);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric)].join('')], null),enfocus.core.content.call(null,[cljs.core.str(total_75592),cljs.core.str(" "),cljs.core.str(metric)].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),enfocus.core.content.call(null,[cljs.core.str(_cpa_75593),cljs.core.str(" "),cljs.core.str(cpa)].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),enfocus.core.content.call(null,[cljs.core.str(_rate_75594),cljs.core.str(" "),cljs.core.str(rate)].join('')));
{
var G__75595 = cljs.core.next.call(null,seq__75575__$1);
var G__75596 = null;
var G__75597 = 0;
var G__75598 = 0;
seq__75575 = G__75595;
chunk__75576 = G__75596;
count__75577 = G__75597;
i__75578 = G__75598;
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
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null),(function (renderer,p__75599,input_queue,parent_id,id){var vec__75600 = p__75599;var _ = cljs.core.nth.call(null,vec__75600,0,null);var path = cljs.core.nth.call(null,vec__75600,1,null);var ___$1 = cljs.core.nth.call(null,vec__75600,2,null);var ___$2 = cljs.core.nth.call(null,vec__75600,3,null);return enfocus.core.at.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.rendering.css_id.call(null,parent_id)], null),enfocus.core.append.call(null,foundation.templates.datagrid.call(null,id)));
}));
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null),(function (renderer,p__75601,input_queue,parent_id,id){var vec__75602 = p__75601;var _ = cljs.core.nth.call(null,vec__75602,0,null);var path = cljs.core.nth.call(null,vec__75602,1,null);var ___$1 = cljs.core.nth.call(null,vec__75602,2,null);var val = cljs.core.nth.call(null,vec__75602,3,null);return foundation.app.render.set_data_BANG_.call(null,renderer,path,new cljs.core.Keyword(null,"resource","resource",672839552).cljs$core$IFn$_invoke$arity$1(val));
}));
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null),(function (renderer,p__75603,input_queue,parent_id,id){var vec__75604 = p__75603;var _ = cljs.core.nth.call(null,vec__75604,0,null);var path = cljs.core.nth.call(null,vec__75604,1,null);var ___$1 = cljs.core.nth.call(null,vec__75604,2,null);var val = cljs.core.nth.call(null,vec__75604,3,null);var resource = foundation.app.render.get_data.call(null,renderer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null));return enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",3798183098)], null),enfocus.core.content.call(null,foundation.templates.datagrid_table.call(null,resource,cljs.core.PersistentVector.EMPTY)));
}));
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null),(function (renderer,p__75605,input_queue,parent_id,id){var vec__75606 = p__75605;var _ = cljs.core.nth.call(null,vec__75606,0,null);var path = cljs.core.nth.call(null,vec__75606,1,null);var ___$1 = cljs.core.nth.call(null,vec__75606,2,null);var val = cljs.core.nth.call(null,vec__75606,3,null);var model = foundation.app.render.get_data.call(null,renderer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null));return enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",3798183098)], null),enfocus.core.content.call(null,foundation.templates.datagrid_table.call(null,model,val)));
}));
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null),(function (renderer,p__75607,input_queue,parent_id,id){var vec__75608 = p__75607;var _ = cljs.core.nth.call(null,vec__75608,0,null);var path = cljs.core.nth.call(null,vec__75608,1,null);var ___$1 = cljs.core.nth.call(null,vec__75608,2,null);var ___$2 = cljs.core.nth.call(null,vec__75608,3,null);var chart = foundation.chart.highchart.call(null);return foundation.app.render.set_data_BANG_.call(null,renderer,path,chart);
}));
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null),(function (renderer,p__75609,input_queue,parent_id,id){var vec__75610 = p__75609;var _ = cljs.core.nth.call(null,vec__75610,0,null);var path = cljs.core.nth.call(null,vec__75610,1,null);var ___$1 = cljs.core.nth.call(null,vec__75610,2,null);var val = cljs.core.nth.call(null,vec__75610,3,null);var chart = foundation.app.render.get_data.call(null,renderer,path);var start_time = (new Date(new cljs.core.Keyword(null,"start-time","start-time",3689550026).cljs$core$IFn$_invoke$arity$1(val))).getTime();var seq__75611_75615 = cljs.core.seq.call(null,chart.series);var chunk__75612_75616 = null;var count__75613_75617 = 0;var i__75614_75618 = 0;while(true){
if((i__75614_75618 < count__75613_75617))
{var series_75619 = cljs.core._nth.call(null,chunk__75612_75616,i__75614_75618);series_75619.remove();
{
var G__75620 = seq__75611_75615;
var G__75621 = chunk__75612_75616;
var G__75622 = count__75613_75617;
var G__75623 = (i__75614_75618 + 1);
seq__75611_75615 = G__75620;
chunk__75612_75616 = G__75621;
count__75613_75617 = G__75622;
i__75614_75618 = G__75623;
continue;
}
} else
{var temp__4092__auto___75624 = cljs.core.seq.call(null,seq__75611_75615);if(temp__4092__auto___75624)
{var seq__75611_75625__$1 = temp__4092__auto___75624;if(cljs.core.chunked_seq_QMARK_.call(null,seq__75611_75625__$1))
{var c__14547__auto___75626 = cljs.core.chunk_first.call(null,seq__75611_75625__$1);{
var G__75627 = cljs.core.chunk_rest.call(null,seq__75611_75625__$1);
var G__75628 = c__14547__auto___75626;
var G__75629 = cljs.core.count.call(null,c__14547__auto___75626);
var G__75630 = 0;
seq__75611_75615 = G__75627;
chunk__75612_75616 = G__75628;
count__75613_75617 = G__75629;
i__75614_75618 = G__75630;
continue;
}
} else
{var series_75631 = cljs.core.first.call(null,seq__75611_75625__$1);series_75631.remove();
{
var G__75632 = cljs.core.next.call(null,seq__75611_75625__$1);
var G__75633 = null;
var G__75634 = 0;
var G__75635 = 0;
seq__75611_75615 = G__75632;
chunk__75612_75616 = G__75633;
count__75613_75617 = G__75634;
i__75614_75618 = G__75635;
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

//# sourceMappingURL=rendering.js.map