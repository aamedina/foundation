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
goog.require('foundation.app.render');
goog.require('foundation.behavior');
goog.require('dommy.core');
goog.require('foundation.models');
cljs.core.enable_console_print_BANG_.call(null);
foundation.rendering.css_id = (function css_id(id){return [cljs.core.str("#"),cljs.core.str(id)].join('');
});
cljs.core._add_method.call(null,foundation.app.render.node_create,cljs.core.PersistentVector.EMPTY,(function (renderer,p__89518,input_queue,parent_id,id){var vec__89519 = p__89518;var _ = cljs.core.nth.call(null,vec__89519,0,null);var path = cljs.core.nth.call(null,vec__89519,1,null);var ___$1 = cljs.core.nth.call(null,vec__89519,2,null);var val = cljs.core.nth.call(null,vec__89519,3,null);return enfocus.core.at.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",1016933652)], null),enfocus.core.append.call(null,foundation.templates.twitter_power.call(null,id)));
}));
foundation.rendering.stats_msg = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"stats","stats",1123661841),foundation.app.message.path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null)], true, false);
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null),(function (renderer,p__89520,input_queue,parent_id,id){var vec__89521 = p__89520;var _ = cljs.core.nth.call(null,vec__89521,0,null);var path = cljs.core.nth.call(null,vec__89521,1,null);var ___$1 = cljs.core.nth.call(null,vec__89521,2,null);var val = cljs.core.nth.call(null,vec__89521,3,null);enfocus.core.at.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.rendering.css_id.call(null,parent_id)], null),enfocus.core.append.call(null,foundation.templates.dashboard.call(null,id)));
var seq__89522 = cljs.core.seq.call(null,foundation.templates.dashboard_metrics);var chunk__89523 = null;var count__89524 = 0;var i__89525 = 0;while(true){
if((i__89525 < count__89524))
{var vec__89526 = cljs.core._nth.call(null,chunk__89523,i__89525);var metric = cljs.core.nth.call(null,vec__89526,0,null);var cpa = cljs.core.nth.call(null,vec__89526,1,null);var rate = cljs.core.nth.call(null,vec__89526,2,null);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric)].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__89522,chunk__89523,count__89524,i__89525,vec__89526,metric,cpa,rate){
return (function (){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"total","total",1124454070)));
});})(seq__89522,chunk__89523,count__89524,i__89525,vec__89526,metric,cpa,rate))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__89522,chunk__89523,count__89524,i__89525,vec__89526,metric,cpa,rate){
return (function (){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"cpa","cpa",1014002950)));
});})(seq__89522,chunk__89523,count__89524,i__89525,vec__89526,metric,cpa,rate))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__89522,chunk__89523,count__89524,i__89525,vec__89526,metric,cpa,rate){
return (function (){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"rate","rate",1017397330)));
});})(seq__89522,chunk__89523,count__89524,i__89525,vec__89526,metric,cpa,rate))
));
{
var G__89528 = seq__89522;
var G__89529 = chunk__89523;
var G__89530 = count__89524;
var G__89531 = (i__89525 + 1);
seq__89522 = G__89528;
chunk__89523 = G__89529;
count__89524 = G__89530;
i__89525 = G__89531;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__89522);if(temp__4092__auto__)
{var seq__89522__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__89522__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__89522__$1);{
var G__89532 = cljs.core.chunk_rest.call(null,seq__89522__$1);
var G__89533 = c__14547__auto__;
var G__89534 = cljs.core.count.call(null,c__14547__auto__);
var G__89535 = 0;
seq__89522 = G__89532;
chunk__89523 = G__89533;
count__89524 = G__89534;
i__89525 = G__89535;
continue;
}
} else
{var vec__89527 = cljs.core.first.call(null,seq__89522__$1);var metric = cljs.core.nth.call(null,vec__89527,0,null);var cpa = cljs.core.nth.call(null,vec__89527,1,null);var rate = cljs.core.nth.call(null,vec__89527,2,null);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric)].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__89522,chunk__89523,count__89524,i__89525,vec__89527,metric,cpa,rate,seq__89522__$1,temp__4092__auto__){
return (function (){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"total","total",1124454070)));
});})(seq__89522,chunk__89523,count__89524,i__89525,vec__89527,metric,cpa,rate,seq__89522__$1,temp__4092__auto__))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__89522,chunk__89523,count__89524,i__89525,vec__89527,metric,cpa,rate,seq__89522__$1,temp__4092__auto__){
return (function (){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"cpa","cpa",1014002950)));
});})(seq__89522,chunk__89523,count__89524,i__89525,vec__89527,metric,cpa,rate,seq__89522__$1,temp__4092__auto__))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__89522,chunk__89523,count__89524,i__89525,vec__89527,metric,cpa,rate,seq__89522__$1,temp__4092__auto__){
return (function (){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"rate","rate",1017397330)));
});})(seq__89522,chunk__89523,count__89524,i__89525,vec__89527,metric,cpa,rate,seq__89522__$1,temp__4092__auto__))
));
{
var G__89536 = cljs.core.next.call(null,seq__89522__$1);
var G__89537 = null;
var G__89538 = 0;
var G__89539 = 0;
seq__89522 = G__89536;
chunk__89523 = G__89537;
count__89524 = G__89538;
i__89525 = G__89539;
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
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null),(function (renderer,p__89540,input_queue,parent_id,id){var vec__89541 = p__89540;var _ = cljs.core.nth.call(null,vec__89541,0,null);var path = cljs.core.nth.call(null,vec__89541,1,null);var ___$1 = cljs.core.nth.call(null,vec__89541,2,null);var map__89542 = cljs.core.nth.call(null,vec__89541,3,null);var map__89542__$1 = ((cljs.core.seq_QMARK_.call(null,map__89542))?cljs.core.apply.call(null,cljs.core.hash_map,map__89542):map__89542);var val = map__89542__$1;var model = cljs.core.get.call(null,map__89542__$1,new cljs.core.Keyword(null,"model","model",1117974171));var end_time = cljs.core.get.call(null,map__89542__$1,new cljs.core.Keyword(null,"end-time","end-time",2693279729));var start_time = cljs.core.get.call(null,map__89542__$1,new cljs.core.Keyword(null,"start-time","start-time",3689550026));var stats = cljs.core.get.call(null,map__89542__$1,new cljs.core.Keyword(null,"stats","stats",1123661841));if(cljs.core.truth_(start_time))
{var start_picker = foundation.rendering.start_date_picker.call(null,renderer,start_time);var end_picker = foundation.rendering.end_date_picker.call(null,renderer,end_time);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,[cljs.core.str("#"),cljs.core.str(parent_id)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#resource-id","#resource-id",2471321257)], null),enfocus.core.content.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(model)));
var seq__89543 = cljs.core.seq.call(null,foundation.templates.dashboard_metrics);var chunk__89544 = null;var count__89545 = 0;var i__89546 = 0;while(true){
if((i__89546 < count__89545))
{var vec__89547 = cljs.core._nth.call(null,chunk__89544,i__89546);var metric = cljs.core.nth.call(null,vec__89547,0,null);var cpa = cljs.core.nth.call(null,vec__89547,1,null);var rate = cljs.core.nth.call(null,vec__89547,2,null);var total_89549 = cljs.core.get.call(null,new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(stats),metric);var _cpa_89550 = cljs.core.get.call(null,new cljs.core.Keyword(null,"cpa","cpa",1014002950).cljs$core$IFn$_invoke$arity$1(stats),metric);var _rate_89551 = cljs.core.get.call(null,new cljs.core.Keyword(null,"rate","rate",1017397330).cljs$core$IFn$_invoke$arity$1(stats),metric);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric)].join('')], null),enfocus.core.content.call(null,[cljs.core.str(total_89549),cljs.core.str(" "),cljs.core.str(metric)].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),enfocus.core.content.call(null,[cljs.core.str(_cpa_89550),cljs.core.str(" "),cljs.core.str(cpa)].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),enfocus.core.content.call(null,[cljs.core.str(_rate_89551),cljs.core.str(" "),cljs.core.str(rate)].join('')));
{
var G__89552 = seq__89543;
var G__89553 = chunk__89544;
var G__89554 = count__89545;
var G__89555 = (i__89546 + 1);
seq__89543 = G__89552;
chunk__89544 = G__89553;
count__89545 = G__89554;
i__89546 = G__89555;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__89543);if(temp__4092__auto__)
{var seq__89543__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__89543__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__89543__$1);{
var G__89556 = cljs.core.chunk_rest.call(null,seq__89543__$1);
var G__89557 = c__14547__auto__;
var G__89558 = cljs.core.count.call(null,c__14547__auto__);
var G__89559 = 0;
seq__89543 = G__89556;
chunk__89544 = G__89557;
count__89545 = G__89558;
i__89546 = G__89559;
continue;
}
} else
{var vec__89548 = cljs.core.first.call(null,seq__89543__$1);var metric = cljs.core.nth.call(null,vec__89548,0,null);var cpa = cljs.core.nth.call(null,vec__89548,1,null);var rate = cljs.core.nth.call(null,vec__89548,2,null);var total_89560 = cljs.core.get.call(null,new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(stats),metric);var _cpa_89561 = cljs.core.get.call(null,new cljs.core.Keyword(null,"cpa","cpa",1014002950).cljs$core$IFn$_invoke$arity$1(stats),metric);var _rate_89562 = cljs.core.get.call(null,new cljs.core.Keyword(null,"rate","rate",1017397330).cljs$core$IFn$_invoke$arity$1(stats),metric);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric)].join('')], null),enfocus.core.content.call(null,[cljs.core.str(total_89560),cljs.core.str(" "),cljs.core.str(metric)].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),enfocus.core.content.call(null,[cljs.core.str(_cpa_89561),cljs.core.str(" "),cljs.core.str(cpa)].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),enfocus.core.content.call(null,[cljs.core.str(_rate_89562),cljs.core.str(" "),cljs.core.str(rate)].join('')));
{
var G__89563 = cljs.core.next.call(null,seq__89543__$1);
var G__89564 = null;
var G__89565 = 0;
var G__89566 = 0;
seq__89543 = G__89563;
chunk__89544 = G__89564;
count__89545 = G__89565;
i__89546 = G__89566;
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
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null),(function (renderer,p__89567,input_queue,parent_id,id){var vec__89568 = p__89567;var _ = cljs.core.nth.call(null,vec__89568,0,null);var path = cljs.core.nth.call(null,vec__89568,1,null);var ___$1 = cljs.core.nth.call(null,vec__89568,2,null);var ___$2 = cljs.core.nth.call(null,vec__89568,3,null);return enfocus.core.at.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.rendering.css_id.call(null,parent_id)], null),enfocus.core.append.call(null,foundation.templates.datagrid.call(null,id)));
}));
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null),(function (renderer,p__89569,input_queue,parent_id,id){var vec__89570 = p__89569;var _ = cljs.core.nth.call(null,vec__89570,0,null);var path = cljs.core.nth.call(null,vec__89570,1,null);var ___$1 = cljs.core.nth.call(null,vec__89570,2,null);var val = cljs.core.nth.call(null,vec__89570,3,null);return foundation.app.render.set_data_BANG_.call(null,renderer,path,new cljs.core.Keyword(null,"resource","resource",672839552).cljs$core$IFn$_invoke$arity$1(val));
}));
foundation.rendering.create_msg = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"create","create",3956577390),foundation.app.message.path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null)], true, false);
foundation.rendering.save_msg = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"save","save",1017427183),foundation.app.message.path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null)], true, false);
foundation.rendering.delete_msg = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"delete","delete",3973413149),foundation.app.message.path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null)], true, false);
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null),(function (renderer,p__89571,input_queue,parent_id,id){var vec__89572 = p__89571;var _ = cljs.core.nth.call(null,vec__89572,0,null);var path = cljs.core.nth.call(null,vec__89572,1,null);var ___$1 = cljs.core.nth.call(null,vec__89572,2,null);var val = cljs.core.nth.call(null,vec__89572,3,null);var resource = foundation.app.render.get_data.call(null,renderer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null));return enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",3798183098)], null),enfocus.core.content.call(null,foundation.templates.datagrid_table.call(null,resource,cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#new","button#new",1370997825)], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return cljs.core.async.put_BANG_.call(null,input_queue,foundation.rendering.create_msg);
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#save","button#save",3494015904)], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return cljs.core.async.put_BANG_.call(null,input_queue,foundation.rendering.save_msg);
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#delete","button#delete",4563292046)], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return cljs.core.async.put_BANG_.call(null,input_queue,foundation.rendering.delete_msg);
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#dupe","button#dupe",3493588073)], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return cljs.core.async.put_BANG_.call(null,input_queue,foundation.rendering.create_msg);
})));
}));
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null),(function (renderer,p__89573,input_queue,parent_id,id){var vec__89574 = p__89573;var _ = cljs.core.nth.call(null,vec__89574,0,null);var path = cljs.core.nth.call(null,vec__89574,1,null);var ___$1 = cljs.core.nth.call(null,vec__89574,2,null);var val = cljs.core.nth.call(null,vec__89574,3,null);var model_89575 = foundation.app.render.get_data.call(null,renderer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null));enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",3798183098)], null),enfocus.core.content.call(null,foundation.templates.datagrid_table.call(null,model_89575,val)));
return foundation.rendering.fix_column_widths_BANG_.call(null);
}));
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null),(function (renderer,p__89576,input_queue,parent_id,id){var vec__89577 = p__89576;var _ = cljs.core.nth.call(null,vec__89577,0,null);var path = cljs.core.nth.call(null,vec__89577,1,null);var ___$1 = cljs.core.nth.call(null,vec__89577,2,null);var ___$2 = cljs.core.nth.call(null,vec__89577,3,null);var chart = foundation.chart.highchart.call(null);return foundation.app.render.set_data_BANG_.call(null,renderer,path,chart);
}));
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null),(function (renderer,p__89578,input_queue,parent_id,id){var vec__89579 = p__89578;var _ = cljs.core.nth.call(null,vec__89579,0,null);var path = cljs.core.nth.call(null,vec__89579,1,null);var ___$1 = cljs.core.nth.call(null,vec__89579,2,null);var val = cljs.core.nth.call(null,vec__89579,3,null);var chart = foundation.app.render.get_data.call(null,renderer,path);var start_time = (new Date(new cljs.core.Keyword(null,"start-time","start-time",3689550026).cljs$core$IFn$_invoke$arity$1(val))).getTime();var seq__89580_89584 = cljs.core.seq.call(null,chart.series);var chunk__89581_89585 = null;var count__89582_89586 = 0;var i__89583_89587 = 0;while(true){
if((i__89583_89587 < count__89582_89586))
{var series_89588 = cljs.core._nth.call(null,chunk__89581_89585,i__89583_89587);series_89588.remove();
{
var G__89589 = seq__89580_89584;
var G__89590 = chunk__89581_89585;
var G__89591 = count__89582_89586;
var G__89592 = (i__89583_89587 + 1);
seq__89580_89584 = G__89589;
chunk__89581_89585 = G__89590;
count__89582_89586 = G__89591;
i__89583_89587 = G__89592;
continue;
}
} else
{var temp__4092__auto___89593 = cljs.core.seq.call(null,seq__89580_89584);if(temp__4092__auto___89593)
{var seq__89580_89594__$1 = temp__4092__auto___89593;if(cljs.core.chunked_seq_QMARK_.call(null,seq__89580_89594__$1))
{var c__14547__auto___89595 = cljs.core.chunk_first.call(null,seq__89580_89594__$1);{
var G__89596 = cljs.core.chunk_rest.call(null,seq__89580_89594__$1);
var G__89597 = c__14547__auto___89595;
var G__89598 = cljs.core.count.call(null,c__14547__auto___89595);
var G__89599 = 0;
seq__89580_89584 = G__89596;
chunk__89581_89585 = G__89597;
count__89582_89586 = G__89598;
i__89583_89587 = G__89599;
continue;
}
} else
{var series_89600 = cljs.core.first.call(null,seq__89580_89594__$1);series_89600.remove();
{
var G__89601 = cljs.core.next.call(null,seq__89580_89594__$1);
var G__89602 = null;
var G__89603 = 0;
var G__89604 = 0;
seq__89580_89584 = G__89601;
chunk__89581_89585 = G__89602;
count__89582_89586 = G__89603;
i__89583_89587 = G__89604;
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
HTMLCollection.prototype.cljs$core$ISeq$_rest$arity$1 = (function (x){var x__$1 = this;var iter__14516__auto__ = (function iter__89605(s__89606){return (new cljs.core.LazySeq(null,(function (){var s__89606__$1 = s__89606;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__89606__$1);if(temp__4092__auto__)
{var s__89606__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__89606__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__89606__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__89608 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__89607 = 0;while(true){
if((i__89607 < size__14515__auto__))
{var i = cljs.core._nth.call(null,c__14514__auto__,i__89607);cljs.core.chunk_append.call(null,b__89608,(x__$1[i]));
{
var G__89609 = (i__89607 + 1);
i__89607 = G__89609;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__89608),iter__89605.call(null,cljs.core.chunk_rest.call(null,s__89606__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__89608),null);
}
} else
{var i = cljs.core.first.call(null,s__89606__$2);return cljs.core.cons.call(null,(x__$1[i]),iter__89605.call(null,cljs.core.rest.call(null,s__89606__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14516__auto__.call(null,cljs.core.range.call(null,x__$1.length));
});
NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (x){var x__$1 = this;return cljs.core.cons.call(null,cljs.core.first.call(null,x__$1),cljs.core.rest.call(null,x__$1));
});
NodeList.prototype.cljs$core$ISeq$ = true;
NodeList.prototype.cljs$core$ISeq$_first$arity$1 = (function (x){var x__$1 = this;return (x__$1[0]);
});
NodeList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (x){var x__$1 = this;var iter__14516__auto__ = (function iter__89610(s__89611){return (new cljs.core.LazySeq(null,(function (){var s__89611__$1 = s__89611;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__89611__$1);if(temp__4092__auto__)
{var s__89611__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__89611__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__89611__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__89613 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__89612 = 0;while(true){
if((i__89612 < size__14515__auto__))
{var i = cljs.core._nth.call(null,c__14514__auto__,i__89612);cljs.core.chunk_append.call(null,b__89613,(x__$1[i]));
{
var G__89614 = (i__89612 + 1);
i__89612 = G__89614;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__89613),iter__89610.call(null,cljs.core.chunk_rest.call(null,s__89611__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__89613),null);
}
} else
{var i = cljs.core.first.call(null,s__89611__$2);return cljs.core.cons.call(null,(x__$1[i]),iter__89610.call(null,cljs.core.rest.call(null,s__89611__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14516__auto__.call(null,cljs.core.range.call(null,x__$1.length));
});
foundation.rendering.th_widths = (function th_widths(ths,widths){return cljs.core.reduce.call(null,(function (ws,p__89617){var vec__89618 = p__89617;var width = cljs.core.nth.call(null,vec__89618,0,null);var th = cljs.core.nth.call(null,vec__89618,1,null);var th_width = goog.style.getBounds(th).width;if((width > th_width))
{return width;
} else
{return th_width;
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,widths,ths));
});
foundation.rendering.td_widths = (function td_widths(rows){return cljs.core.reduce.call(null,(function (ws,td){console.log(td.innerHTML);
return cljs.core.conj.call(null,ws,td.width);
}),cljs.core.PersistentVector.EMPTY,cljs.core.first.call(null,rows).children);
});
foundation.rendering.full_td_widths = (function full_td_widths(th_widths,ths,row_width,table_width){console.log(th_widths,ths,row_width,table_width);
return cljs.core.reduce.call(null,(function (ws,p__89621){var vec__89622 = p__89621;var width = cljs.core.nth.call(null,vec__89622,0,null);var th = cljs.core.nth.call(null,vec__89622,1,null);var th_width = goog.style.getBounds(th).width;var new_width = (table_width * (width / row_width));if((new_width > width))
{goog.style.setWidth(th,new_width);
return new_width;
} else
{goog.style.setWidth(th,width);
return width;
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,th_widths,ths));
});
foundation.rendering.fix_column_widths_BANG_ = (function fix_column_widths_BANG_(){var vec__89641 = cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__89623_SHARP_){return document.querySelector(dommy.core.selector.call(null,p1__89623_SHARP_));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".panel-body",".panel-body",1210123755),new cljs.core.Keyword(null,"tbody","tbody",1124062088),new cljs.core.Keyword(null,"thead","thead",1124231110)], null)));var panel_body = cljs.core.nth.call(null,vec__89641,0,null);var tbody = cljs.core.nth.call(null,vec__89641,1,null);var thead = cljs.core.nth.call(null,vec__89641,2,null);var table_width = goog.style.getBounds(panel_body).width;var rows = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,tbody.rows);var ths = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,thead.rows);var td_widths = foundation.rendering.td_widths.call(null,rows);var th_widths = foundation.rendering.th_widths.call(null,ths,td_widths);var row_width = cljs.core.reduce.call(null,cljs.core._PLUS_,th_widths);var th_widths__$1 = foundation.rendering.full_td_widths.call(null,th_widths,ths,row_width,table_width);if((row_width > table_width))
{goog.style.setWidth(cljs.core.first.call(null,thead.rows),row_width);
} else
{goog.style.setWidth(cljs.core.first.call(null,thead.rows),table_width);
}
var seq__89642 = cljs.core.seq.call(null,tbody.rows);var chunk__89643 = null;var count__89644 = 0;var i__89645 = 0;while(true){
if((i__89645 < count__89644))
{var tr = cljs.core._nth.call(null,chunk__89643,i__89645);var seq__89646_89658 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,tr.cells,th_widths__$1));var chunk__89647_89659 = null;var count__89648_89660 = 0;var i__89649_89661 = 0;while(true){
if((i__89649_89661 < count__89648_89660))
{var vec__89650_89662 = cljs.core._nth.call(null,chunk__89647_89659,i__89649_89661);var width_89663 = cljs.core.nth.call(null,vec__89650_89662,0,null);var td_89664 = cljs.core.nth.call(null,vec__89650_89662,1,null);styl.setWidth.call(null,td_89664,width_89663);
{
var G__89665 = seq__89646_89658;
var G__89666 = chunk__89647_89659;
var G__89667 = count__89648_89660;
var G__89668 = (i__89649_89661 + 1);
seq__89646_89658 = G__89665;
chunk__89647_89659 = G__89666;
count__89648_89660 = G__89667;
i__89649_89661 = G__89668;
continue;
}
} else
{var temp__4092__auto___89669 = cljs.core.seq.call(null,seq__89646_89658);if(temp__4092__auto___89669)
{var seq__89646_89670__$1 = temp__4092__auto___89669;if(cljs.core.chunked_seq_QMARK_.call(null,seq__89646_89670__$1))
{var c__14547__auto___89671 = cljs.core.chunk_first.call(null,seq__89646_89670__$1);{
var G__89672 = cljs.core.chunk_rest.call(null,seq__89646_89670__$1);
var G__89673 = c__14547__auto___89671;
var G__89674 = cljs.core.count.call(null,c__14547__auto___89671);
var G__89675 = 0;
seq__89646_89658 = G__89672;
chunk__89647_89659 = G__89673;
count__89648_89660 = G__89674;
i__89649_89661 = G__89675;
continue;
}
} else
{var vec__89651_89676 = cljs.core.first.call(null,seq__89646_89670__$1);var width_89677 = cljs.core.nth.call(null,vec__89651_89676,0,null);var td_89678 = cljs.core.nth.call(null,vec__89651_89676,1,null);styl.setWidth.call(null,td_89678,width_89677);
{
var G__89679 = cljs.core.next.call(null,seq__89646_89670__$1);
var G__89680 = null;
var G__89681 = 0;
var G__89682 = 0;
seq__89646_89658 = G__89679;
chunk__89647_89659 = G__89680;
count__89648_89660 = G__89681;
i__89649_89661 = G__89682;
continue;
}
}
} else
{}
}
break;
}
{
var G__89683 = seq__89642;
var G__89684 = chunk__89643;
var G__89685 = count__89644;
var G__89686 = (i__89645 + 1);
seq__89642 = G__89683;
chunk__89643 = G__89684;
count__89644 = G__89685;
i__89645 = G__89686;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__89642);if(temp__4092__auto__)
{var seq__89642__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__89642__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__89642__$1);{
var G__89687 = cljs.core.chunk_rest.call(null,seq__89642__$1);
var G__89688 = c__14547__auto__;
var G__89689 = cljs.core.count.call(null,c__14547__auto__);
var G__89690 = 0;
seq__89642 = G__89687;
chunk__89643 = G__89688;
count__89644 = G__89689;
i__89645 = G__89690;
continue;
}
} else
{var tr = cljs.core.first.call(null,seq__89642__$1);var seq__89652_89691 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,tr.cells,th_widths__$1));var chunk__89653_89692 = null;var count__89654_89693 = 0;var i__89655_89694 = 0;while(true){
if((i__89655_89694 < count__89654_89693))
{var vec__89656_89695 = cljs.core._nth.call(null,chunk__89653_89692,i__89655_89694);var width_89696 = cljs.core.nth.call(null,vec__89656_89695,0,null);var td_89697 = cljs.core.nth.call(null,vec__89656_89695,1,null);styl.setWidth.call(null,td_89697,width_89696);
{
var G__89698 = seq__89652_89691;
var G__89699 = chunk__89653_89692;
var G__89700 = count__89654_89693;
var G__89701 = (i__89655_89694 + 1);
seq__89652_89691 = G__89698;
chunk__89653_89692 = G__89699;
count__89654_89693 = G__89700;
i__89655_89694 = G__89701;
continue;
}
} else
{var temp__4092__auto___89702__$1 = cljs.core.seq.call(null,seq__89652_89691);if(temp__4092__auto___89702__$1)
{var seq__89652_89703__$1 = temp__4092__auto___89702__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__89652_89703__$1))
{var c__14547__auto___89704 = cljs.core.chunk_first.call(null,seq__89652_89703__$1);{
var G__89705 = cljs.core.chunk_rest.call(null,seq__89652_89703__$1);
var G__89706 = c__14547__auto___89704;
var G__89707 = cljs.core.count.call(null,c__14547__auto___89704);
var G__89708 = 0;
seq__89652_89691 = G__89705;
chunk__89653_89692 = G__89706;
count__89654_89693 = G__89707;
i__89655_89694 = G__89708;
continue;
}
} else
{var vec__89657_89709 = cljs.core.first.call(null,seq__89652_89703__$1);var width_89710 = cljs.core.nth.call(null,vec__89657_89709,0,null);var td_89711 = cljs.core.nth.call(null,vec__89657_89709,1,null);styl.setWidth.call(null,td_89711,width_89710);
{
var G__89712 = cljs.core.next.call(null,seq__89652_89703__$1);
var G__89713 = null;
var G__89714 = 0;
var G__89715 = 0;
seq__89652_89691 = G__89712;
chunk__89653_89692 = G__89713;
count__89654_89693 = G__89714;
i__89655_89694 = G__89715;
continue;
}
}
} else
{}
}
break;
}
{
var G__89716 = cljs.core.next.call(null,seq__89642__$1);
var G__89717 = null;
var G__89718 = 0;
var G__89719 = 0;
seq__89642 = G__89716;
chunk__89643 = G__89717;
count__89644 = G__89718;
i__89645 = G__89719;
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

//# sourceMappingURL=rendering.js.map