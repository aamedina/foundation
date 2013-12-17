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
cljs.core._add_method.call(null,foundation.app.render.node_create,cljs.core.PersistentVector.EMPTY,(function (renderer,p__25509,input_queue,parent_id,id){var vec__25510 = p__25509;var _ = cljs.core.nth.call(null,vec__25510,0,null);var path = cljs.core.nth.call(null,vec__25510,1,null);var ___$1 = cljs.core.nth.call(null,vec__25510,2,null);var val = cljs.core.nth.call(null,vec__25510,3,null);return enfocus.core.at.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",1016933652)], null),enfocus.core.append.call(null,foundation.templates.twitter_power.call(null,id)));
}));
foundation.rendering.stats_msg = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"stats","stats",1123661841),foundation.app.message.path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null)], true, false);
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null),(function (renderer,p__25511,input_queue,parent_id,id){var vec__25512 = p__25511;var _ = cljs.core.nth.call(null,vec__25512,0,null);var path = cljs.core.nth.call(null,vec__25512,1,null);var ___$1 = cljs.core.nth.call(null,vec__25512,2,null);var val = cljs.core.nth.call(null,vec__25512,3,null);enfocus.core.at.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.rendering.css_id.call(null,parent_id)], null),enfocus.core.append.call(null,foundation.templates.dashboard.call(null,id)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#Impressions")].join('')], null),enfocus.core.add_class.call(null,"active"));
var seq__25513 = cljs.core.seq.call(null,foundation.templates.dashboard_metrics);var chunk__25514 = null;var count__25515 = 0;var i__25516 = 0;while(true){
if((i__25516 < count__25515))
{var vec__25517 = cljs.core._nth.call(null,chunk__25514,i__25516);var metric = cljs.core.nth.call(null,vec__25517,0,null);var cpa = cljs.core.nth.call(null,vec__25517,1,null);var rate = cljs.core.nth.call(null,vec__25517,2,null);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric)].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__25513,chunk__25514,count__25515,i__25516,vec__25517,metric,cpa,rate){
return (function (e){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"total","total",1124454070)));
});})(seq__25513,chunk__25514,count__25515,i__25516,vec__25517,metric,cpa,rate))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__25513,chunk__25514,count__25515,i__25516,vec__25517,metric,cpa,rate){
return (function (){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"cpa","cpa",1014002950)));
});})(seq__25513,chunk__25514,count__25515,i__25516,vec__25517,metric,cpa,rate))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__25513,chunk__25514,count__25515,i__25516,vec__25517,metric,cpa,rate){
return (function (){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"rate","rate",1017397330)));
});})(seq__25513,chunk__25514,count__25515,i__25516,vec__25517,metric,cpa,rate))
));
{
var G__25519 = seq__25513;
var G__25520 = chunk__25514;
var G__25521 = count__25515;
var G__25522 = (i__25516 + 1);
seq__25513 = G__25519;
chunk__25514 = G__25520;
count__25515 = G__25521;
i__25516 = G__25522;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__25513);if(temp__4092__auto__)
{var seq__25513__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25513__$1))
{var c__8567__auto__ = cljs.core.chunk_first.call(null,seq__25513__$1);{
var G__25523 = cljs.core.chunk_rest.call(null,seq__25513__$1);
var G__25524 = c__8567__auto__;
var G__25525 = cljs.core.count.call(null,c__8567__auto__);
var G__25526 = 0;
seq__25513 = G__25523;
chunk__25514 = G__25524;
count__25515 = G__25525;
i__25516 = G__25526;
continue;
}
} else
{var vec__25518 = cljs.core.first.call(null,seq__25513__$1);var metric = cljs.core.nth.call(null,vec__25518,0,null);var cpa = cljs.core.nth.call(null,vec__25518,1,null);var rate = cljs.core.nth.call(null,vec__25518,2,null);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric)].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__25513,chunk__25514,count__25515,i__25516,vec__25518,metric,cpa,rate,seq__25513__$1,temp__4092__auto__){
return (function (e){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"total","total",1124454070)));
});})(seq__25513,chunk__25514,count__25515,i__25516,vec__25518,metric,cpa,rate,seq__25513__$1,temp__4092__auto__))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__25513,chunk__25514,count__25515,i__25516,vec__25518,metric,cpa,rate,seq__25513__$1,temp__4092__auto__){
return (function (){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"cpa","cpa",1014002950)));
});})(seq__25513,chunk__25514,count__25515,i__25516,vec__25518,metric,cpa,rate,seq__25513__$1,temp__4092__auto__))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__25513,chunk__25514,count__25515,i__25516,vec__25518,metric,cpa,rate,seq__25513__$1,temp__4092__auto__){
return (function (){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"rate","rate",1017397330)));
});})(seq__25513,chunk__25514,count__25515,i__25516,vec__25518,metric,cpa,rate,seq__25513__$1,temp__4092__auto__))
));
{
var G__25527 = cljs.core.next.call(null,seq__25513__$1);
var G__25528 = null;
var G__25529 = 0;
var G__25530 = 0;
seq__25513 = G__25527;
chunk__25514 = G__25528;
count__25515 = G__25529;
i__25516 = G__25530;
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
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null),(function (renderer,p__25531,input_queue,parent_id,id){var vec__25532 = p__25531;var _ = cljs.core.nth.call(null,vec__25532,0,null);var path = cljs.core.nth.call(null,vec__25532,1,null);var ___$1 = cljs.core.nth.call(null,vec__25532,2,null);var map__25533 = cljs.core.nth.call(null,vec__25532,3,null);var map__25533__$1 = ((cljs.core.seq_QMARK_.call(null,map__25533))?cljs.core.apply.call(null,cljs.core.hash_map,map__25533):map__25533);var val = map__25533__$1;var model = cljs.core.get.call(null,map__25533__$1,new cljs.core.Keyword(null,"model","model",1117974171));var end_time = cljs.core.get.call(null,map__25533__$1,new cljs.core.Keyword(null,"end-time","end-time",2693279729));var start_time = cljs.core.get.call(null,map__25533__$1,new cljs.core.Keyword(null,"start-time","start-time",3689550026));var stats = cljs.core.get.call(null,map__25533__$1,new cljs.core.Keyword(null,"stats","stats",1123661841));if(cljs.core.truth_(start_time))
{var start_picker = foundation.rendering.start_date_picker.call(null,renderer,start_time);var end_picker = foundation.rendering.end_date_picker.call(null,renderer,end_time);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,[cljs.core.str("#"),cljs.core.str(parent_id)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#resource-id","#resource-id",2471321257)], null),enfocus.core.content.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(model)));
var seq__25534 = cljs.core.seq.call(null,foundation.templates.dashboard_metrics);var chunk__25535 = null;var count__25536 = 0;var i__25537 = 0;while(true){
if((i__25537 < count__25536))
{var vec__25538 = cljs.core._nth.call(null,chunk__25535,i__25537);var metric = cljs.core.nth.call(null,vec__25538,0,null);var cpa = cljs.core.nth.call(null,vec__25538,1,null);var rate = cljs.core.nth.call(null,vec__25538,2,null);var total_25540 = cljs.core.get.call(null,new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(stats),metric);var _cpa_25541 = cljs.core.get.call(null,new cljs.core.Keyword(null,"cpa","cpa",1014002950).cljs$core$IFn$_invoke$arity$1(stats),metric);var _rate_25542 = cljs.core.get.call(null,new cljs.core.Keyword(null,"rate","rate",1017397330).cljs$core$IFn$_invoke$arity$1(stats),metric);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric)].join('')], null),enfocus.core.content.call(null,[cljs.core.str(total_25540),cljs.core.str(" "),cljs.core.str(metric)].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),enfocus.core.content.call(null,[cljs.core.str(_cpa_25541),cljs.core.str(" "),cljs.core.str(cpa)].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),enfocus.core.content.call(null,[cljs.core.str(_rate_25542),cljs.core.str(" "),cljs.core.str(rate)].join('')));
{
var G__25543 = seq__25534;
var G__25544 = chunk__25535;
var G__25545 = count__25536;
var G__25546 = (i__25537 + 1);
seq__25534 = G__25543;
chunk__25535 = G__25544;
count__25536 = G__25545;
i__25537 = G__25546;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__25534);if(temp__4092__auto__)
{var seq__25534__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25534__$1))
{var c__8567__auto__ = cljs.core.chunk_first.call(null,seq__25534__$1);{
var G__25547 = cljs.core.chunk_rest.call(null,seq__25534__$1);
var G__25548 = c__8567__auto__;
var G__25549 = cljs.core.count.call(null,c__8567__auto__);
var G__25550 = 0;
seq__25534 = G__25547;
chunk__25535 = G__25548;
count__25536 = G__25549;
i__25537 = G__25550;
continue;
}
} else
{var vec__25539 = cljs.core.first.call(null,seq__25534__$1);var metric = cljs.core.nth.call(null,vec__25539,0,null);var cpa = cljs.core.nth.call(null,vec__25539,1,null);var rate = cljs.core.nth.call(null,vec__25539,2,null);var total_25551 = cljs.core.get.call(null,new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(stats),metric);var _cpa_25552 = cljs.core.get.call(null,new cljs.core.Keyword(null,"cpa","cpa",1014002950).cljs$core$IFn$_invoke$arity$1(stats),metric);var _rate_25553 = cljs.core.get.call(null,new cljs.core.Keyword(null,"rate","rate",1017397330).cljs$core$IFn$_invoke$arity$1(stats),metric);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric)].join('')], null),enfocus.core.content.call(null,[cljs.core.str(total_25551),cljs.core.str(" "),cljs.core.str(metric)].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),enfocus.core.content.call(null,[cljs.core.str(_cpa_25552),cljs.core.str(" "),cljs.core.str(cpa)].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),enfocus.core.content.call(null,[cljs.core.str(_rate_25553),cljs.core.str(" "),cljs.core.str(rate)].join('')));
{
var G__25554 = cljs.core.next.call(null,seq__25534__$1);
var G__25555 = null;
var G__25556 = 0;
var G__25557 = 0;
seq__25534 = G__25554;
chunk__25535 = G__25555;
count__25536 = G__25556;
i__25537 = G__25557;
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
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null),(function (renderer,p__25558,input_queue,parent_id,id){var vec__25559 = p__25558;var _ = cljs.core.nth.call(null,vec__25559,0,null);var path = cljs.core.nth.call(null,vec__25559,1,null);var ___$1 = cljs.core.nth.call(null,vec__25559,2,null);var ___$2 = cljs.core.nth.call(null,vec__25559,3,null);return enfocus.core.at.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.rendering.css_id.call(null,parent_id)], null),enfocus.core.append.call(null,foundation.templates.datagrid.call(null,id)));
}));
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null),(function (renderer,p__25560,input_queue,parent_id,id){var vec__25561 = p__25560;var _ = cljs.core.nth.call(null,vec__25561,0,null);var path = cljs.core.nth.call(null,vec__25561,1,null);var ___$1 = cljs.core.nth.call(null,vec__25561,2,null);var val = cljs.core.nth.call(null,vec__25561,3,null);if(cljs.core._EQ_.call(null,foundation.app.render.get_data.call(null,renderer,path),new cljs.core.Keyword(null,"resource","resource",672839552).cljs$core$IFn$_invoke$arity$1(val)))
{return null;
} else
{return foundation.app.render.set_data_BANG_.call(null,renderer,path,new cljs.core.Keyword(null,"resource","resource",672839552).cljs$core$IFn$_invoke$arity$1(val));
}
}));
foundation.rendering.create_msg = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"create","create",3956577390),foundation.app.message.path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null)], true, false);
foundation.rendering.save_msg = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"save","save",1017427183),foundation.app.message.path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null)], true, false);
foundation.rendering.delete_msg = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"delete","delete",3973413149),foundation.app.message.path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null)], true, false);
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null),(function (renderer,p__25562,input_queue,parent_id,id){var vec__25563 = p__25562;var _ = cljs.core.nth.call(null,vec__25563,0,null);var path = cljs.core.nth.call(null,vec__25563,1,null);var ___$1 = cljs.core.nth.call(null,vec__25563,2,null);var val = cljs.core.nth.call(null,vec__25563,3,null);var model = foundation.app.render.get_data.call(null,renderer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null));enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",3798183098)], null),enfocus.core.content.call(null,foundation.templates.datagrid_table.call(null,model,cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#new","button#new",1370997825)], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return cljs.core.async.put_BANG_.call(null,input_queue,foundation.rendering.create_msg);
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#save","button#save",3494015904)], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return cljs.core.async.put_BANG_.call(null,input_queue,foundation.rendering.save_msg);
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#delete","button#delete",4563292046)], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return cljs.core.async.put_BANG_.call(null,input_queue,foundation.rendering.delete_msg);
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#dupe","button#dupe",3493588073)], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return cljs.core.async.put_BANG_.call(null,input_queue,foundation.rendering.create_msg);
})));
return foundation.rendering.as_resizable.call(null);
}));
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null),(function (renderer,p__25564,input_queue,parent_id,id){var vec__25565 = p__25564;var _ = cljs.core.nth.call(null,vec__25565,0,null);var path = cljs.core.nth.call(null,vec__25565,1,null);var ___$1 = cljs.core.nth.call(null,vec__25565,2,null);var val = cljs.core.nth.call(null,vec__25565,3,null);var model = foundation.app.render.get_data.call(null,renderer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null));var row_count = cljs.core.count.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByTagName("tbody"))[0]).rows);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",3798183098)], null),enfocus.core.content.call(null,foundation.templates.datagrid_table.call(null,model,val)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body>tr","div.panel-body>tr",3056946278)], null),enfocus.core.content.call(null,foundation.templates.datagrid_table.call(null,model,val)));
foundation.rendering.set_datagrid_height_BANG_.call(null);
return foundation.rendering.fix_column_widths_BANG_.call(null);
}));
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null),(function (renderer,p__25566,input_queue,parent_id,id){var vec__25567 = p__25566;var _ = cljs.core.nth.call(null,vec__25567,0,null);var path = cljs.core.nth.call(null,vec__25567,1,null);var ___$1 = cljs.core.nth.call(null,vec__25567,2,null);var ___$2 = cljs.core.nth.call(null,vec__25567,3,null);var chart = foundation.chart.highchart.call(null);return foundation.app.render.set_data_BANG_.call(null,renderer,path,chart);
}));
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null),(function (renderer,p__25568,input_queue,parent_id,id){var vec__25569 = p__25568;var _ = cljs.core.nth.call(null,vec__25569,0,null);var path = cljs.core.nth.call(null,vec__25569,1,null);var ___$1 = cljs.core.nth.call(null,vec__25569,2,null);var val = cljs.core.nth.call(null,vec__25569,3,null);var chart = foundation.app.render.get_data.call(null,renderer,path);var start_time = (new Date(new cljs.core.Keyword(null,"start-time","start-time",3689550026).cljs$core$IFn$_invoke$arity$1(val))).getTime();var seq__25570_25574 = cljs.core.seq.call(null,chart.series);var chunk__25571_25575 = null;var count__25572_25576 = 0;var i__25573_25577 = 0;while(true){
if((i__25573_25577 < count__25572_25576))
{var series_25578 = cljs.core._nth.call(null,chunk__25571_25575,i__25573_25577);series_25578.remove();
{
var G__25579 = seq__25570_25574;
var G__25580 = chunk__25571_25575;
var G__25581 = count__25572_25576;
var G__25582 = (i__25573_25577 + 1);
seq__25570_25574 = G__25579;
chunk__25571_25575 = G__25580;
count__25572_25576 = G__25581;
i__25573_25577 = G__25582;
continue;
}
} else
{var temp__4092__auto___25583 = cljs.core.seq.call(null,seq__25570_25574);if(temp__4092__auto___25583)
{var seq__25570_25584__$1 = temp__4092__auto___25583;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25570_25584__$1))
{var c__8567__auto___25585 = cljs.core.chunk_first.call(null,seq__25570_25584__$1);{
var G__25586 = cljs.core.chunk_rest.call(null,seq__25570_25584__$1);
var G__25587 = c__8567__auto___25585;
var G__25588 = cljs.core.count.call(null,c__8567__auto___25585);
var G__25589 = 0;
seq__25570_25574 = G__25586;
chunk__25571_25575 = G__25587;
count__25572_25576 = G__25588;
i__25573_25577 = G__25589;
continue;
}
} else
{var series_25590 = cljs.core.first.call(null,seq__25570_25584__$1);series_25590.remove();
{
var G__25591 = cljs.core.next.call(null,seq__25570_25584__$1);
var G__25592 = null;
var G__25593 = 0;
var G__25594 = 0;
seq__25570_25574 = G__25591;
chunk__25571_25575 = G__25592;
count__25572_25576 = G__25593;
i__25573_25577 = G__25594;
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
HTMLCollection.prototype.cljs$core$ISeq$_rest$arity$1 = (function (x){var x__$1 = this;var iter__8536__auto__ = (function iter__25595(s__25596){return (new cljs.core.LazySeq(null,(function (){var s__25596__$1 = s__25596;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__25596__$1);if(temp__4092__auto__)
{var s__25596__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__25596__$2))
{var c__8534__auto__ = cljs.core.chunk_first.call(null,s__25596__$2);var size__8535__auto__ = cljs.core.count.call(null,c__8534__auto__);var b__25598 = cljs.core.chunk_buffer.call(null,size__8535__auto__);if((function (){var i__25597 = 0;while(true){
if((i__25597 < size__8535__auto__))
{var i = cljs.core._nth.call(null,c__8534__auto__,i__25597);cljs.core.chunk_append.call(null,b__25598,(x__$1[i]));
{
var G__25599 = (i__25597 + 1);
i__25597 = G__25599;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25598),iter__25595.call(null,cljs.core.chunk_rest.call(null,s__25596__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25598),null);
}
} else
{var i = cljs.core.first.call(null,s__25596__$2);return cljs.core.cons.call(null,(x__$1[i]),iter__25595.call(null,cljs.core.rest.call(null,s__25596__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8536__auto__.call(null,cljs.core.range.call(null,x__$1.length));
});
foundation.rendering.th_widths = (function th_widths(ths,widths){return cljs.core.reduce.call(null,(function (ws,p__25602){var vec__25603 = p__25602;var width = cljs.core.nth.call(null,vec__25603,0,null);var th = cljs.core.nth.call(null,vec__25603,1,null);var th_width = goog.style.getBounds(th).width;if((width > th_width))
{return cljs.core.conj.call(null,ws,width);
} else
{return cljs.core.conj.call(null,ws,th_width);
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,widths,ths));
});
foundation.rendering.td_widths = (function td_widths(rows){return cljs.core.reduce.call(null,(function (ws,td){return cljs.core.conj.call(null,ws,goog.style.getBounds(td).width);
}),cljs.core.PersistentVector.EMPTY,cljs.core.first.call(null,rows).cells);
});
foundation.rendering.full_td_widths = (function full_td_widths(th_widths,ths,row_width,table_width){return cljs.core.reduce.call(null,(function (ws,p__25606){var vec__25607 = p__25606;var width = cljs.core.nth.call(null,vec__25607,0,null);var th = cljs.core.nth.call(null,vec__25607,1,null);var th_width = width;var new_width = (table_width * (width / row_width));if((new_width > width))
{goog.style.setWidth(th,new_width);
return cljs.core.conj.call(null,ws,new_width);
} else
{goog.style.setWidth(th,width);
return cljs.core.conj.call(null,ws,width);
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,th_widths,ths));
});
foundation.rendering.fix_column_widths_BANG_ = (function fix_column_widths_BANG_(){var vec__25626 = cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__25608_SHARP_){return document.querySelector(dommy.core.selector.call(null,p1__25608_SHARP_));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".panel-body",".panel-body",1210123755),new cljs.core.Keyword(null,"tbody","tbody",1124062088),new cljs.core.Keyword(null,"thead","thead",1124231110)], null)));var panel_body = cljs.core.nth.call(null,vec__25626,0,null);var tbody = cljs.core.nth.call(null,vec__25626,1,null);var thead = cljs.core.nth.call(null,vec__25626,2,null);var table_width = goog.style.getBounds(tbody).width;var rows = tbody.rows;var ths = cljs.core.first.call(null,thead.rows).cells;var td_widths = foundation.rendering.td_widths.call(null,rows);var th_widths = foundation.rendering.th_widths.call(null,ths,td_widths);var row_width = cljs.core.reduce.call(null,cljs.core._PLUS_,th_widths);var th_widths__$1 = foundation.rendering.full_td_widths.call(null,th_widths,ths,row_width,table_width);var seq__25627 = cljs.core.seq.call(null,rows);var chunk__25628 = null;var count__25629 = 0;var i__25630 = 0;while(true){
if((i__25630 < count__25629))
{var tr = cljs.core._nth.call(null,chunk__25628,i__25630);var seq__25631_25643 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,th_widths__$1,tr.cells));var chunk__25632_25644 = null;var count__25633_25645 = 0;var i__25634_25646 = 0;while(true){
if((i__25634_25646 < count__25633_25645))
{var vec__25635_25647 = cljs.core._nth.call(null,chunk__25632_25644,i__25634_25646);var width_25648 = cljs.core.nth.call(null,vec__25635_25647,0,null);var td_25649 = cljs.core.nth.call(null,vec__25635_25647,1,null);goog.style.setWidth(td_25649,width_25648);
{
var G__25650 = seq__25631_25643;
var G__25651 = chunk__25632_25644;
var G__25652 = count__25633_25645;
var G__25653 = (i__25634_25646 + 1);
seq__25631_25643 = G__25650;
chunk__25632_25644 = G__25651;
count__25633_25645 = G__25652;
i__25634_25646 = G__25653;
continue;
}
} else
{var temp__4092__auto___25654 = cljs.core.seq.call(null,seq__25631_25643);if(temp__4092__auto___25654)
{var seq__25631_25655__$1 = temp__4092__auto___25654;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25631_25655__$1))
{var c__8567__auto___25656 = cljs.core.chunk_first.call(null,seq__25631_25655__$1);{
var G__25657 = cljs.core.chunk_rest.call(null,seq__25631_25655__$1);
var G__25658 = c__8567__auto___25656;
var G__25659 = cljs.core.count.call(null,c__8567__auto___25656);
var G__25660 = 0;
seq__25631_25643 = G__25657;
chunk__25632_25644 = G__25658;
count__25633_25645 = G__25659;
i__25634_25646 = G__25660;
continue;
}
} else
{var vec__25636_25661 = cljs.core.first.call(null,seq__25631_25655__$1);var width_25662 = cljs.core.nth.call(null,vec__25636_25661,0,null);var td_25663 = cljs.core.nth.call(null,vec__25636_25661,1,null);goog.style.setWidth(td_25663,width_25662);
{
var G__25664 = cljs.core.next.call(null,seq__25631_25655__$1);
var G__25665 = null;
var G__25666 = 0;
var G__25667 = 0;
seq__25631_25643 = G__25664;
chunk__25632_25644 = G__25665;
count__25633_25645 = G__25666;
i__25634_25646 = G__25667;
continue;
}
}
} else
{}
}
break;
}
{
var G__25668 = seq__25627;
var G__25669 = chunk__25628;
var G__25670 = count__25629;
var G__25671 = (i__25630 + 1);
seq__25627 = G__25668;
chunk__25628 = G__25669;
count__25629 = G__25670;
i__25630 = G__25671;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__25627);if(temp__4092__auto__)
{var seq__25627__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25627__$1))
{var c__8567__auto__ = cljs.core.chunk_first.call(null,seq__25627__$1);{
var G__25672 = cljs.core.chunk_rest.call(null,seq__25627__$1);
var G__25673 = c__8567__auto__;
var G__25674 = cljs.core.count.call(null,c__8567__auto__);
var G__25675 = 0;
seq__25627 = G__25672;
chunk__25628 = G__25673;
count__25629 = G__25674;
i__25630 = G__25675;
continue;
}
} else
{var tr = cljs.core.first.call(null,seq__25627__$1);var seq__25637_25676 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,th_widths__$1,tr.cells));var chunk__25638_25677 = null;var count__25639_25678 = 0;var i__25640_25679 = 0;while(true){
if((i__25640_25679 < count__25639_25678))
{var vec__25641_25680 = cljs.core._nth.call(null,chunk__25638_25677,i__25640_25679);var width_25681 = cljs.core.nth.call(null,vec__25641_25680,0,null);var td_25682 = cljs.core.nth.call(null,vec__25641_25680,1,null);goog.style.setWidth(td_25682,width_25681);
{
var G__25683 = seq__25637_25676;
var G__25684 = chunk__25638_25677;
var G__25685 = count__25639_25678;
var G__25686 = (i__25640_25679 + 1);
seq__25637_25676 = G__25683;
chunk__25638_25677 = G__25684;
count__25639_25678 = G__25685;
i__25640_25679 = G__25686;
continue;
}
} else
{var temp__4092__auto___25687__$1 = cljs.core.seq.call(null,seq__25637_25676);if(temp__4092__auto___25687__$1)
{var seq__25637_25688__$1 = temp__4092__auto___25687__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25637_25688__$1))
{var c__8567__auto___25689 = cljs.core.chunk_first.call(null,seq__25637_25688__$1);{
var G__25690 = cljs.core.chunk_rest.call(null,seq__25637_25688__$1);
var G__25691 = c__8567__auto___25689;
var G__25692 = cljs.core.count.call(null,c__8567__auto___25689);
var G__25693 = 0;
seq__25637_25676 = G__25690;
chunk__25638_25677 = G__25691;
count__25639_25678 = G__25692;
i__25640_25679 = G__25693;
continue;
}
} else
{var vec__25642_25694 = cljs.core.first.call(null,seq__25637_25688__$1);var width_25695 = cljs.core.nth.call(null,vec__25642_25694,0,null);var td_25696 = cljs.core.nth.call(null,vec__25642_25694,1,null);goog.style.setWidth(td_25696,width_25695);
{
var G__25697 = cljs.core.next.call(null,seq__25637_25688__$1);
var G__25698 = null;
var G__25699 = 0;
var G__25700 = 0;
seq__25637_25676 = G__25697;
chunk__25638_25677 = G__25698;
count__25639_25678 = G__25699;
i__25640_25679 = G__25700;
continue;
}
}
} else
{}
}
break;
}
{
var G__25701 = cljs.core.next.call(null,seq__25627__$1);
var G__25702 = null;
var G__25703 = 0;
var G__25704 = 0;
seq__25627 = G__25701;
chunk__25628 = G__25702;
count__25629 = G__25703;
i__25630 = G__25704;
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