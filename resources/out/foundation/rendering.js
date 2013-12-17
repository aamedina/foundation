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
cljs.core._add_method.call(null,foundation.app.render.node_create,cljs.core.PersistentVector.EMPTY,(function (renderer,p__379545,input_queue,parent_id,id){var vec__379546 = p__379545;var _ = cljs.core.nth.call(null,vec__379546,0,null);var path = cljs.core.nth.call(null,vec__379546,1,null);var ___$1 = cljs.core.nth.call(null,vec__379546,2,null);var val = cljs.core.nth.call(null,vec__379546,3,null);return enfocus.core.at.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",1016933652)], null),enfocus.core.append.call(null,foundation.templates.twitter_power.call(null,id)));
}));
foundation.rendering.stats_msg = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"stats","stats",1123661841),foundation.app.message.path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null)], true, false);
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null),(function (renderer,p__379547,input_queue,parent_id,id){var vec__379548 = p__379547;var _ = cljs.core.nth.call(null,vec__379548,0,null);var path = cljs.core.nth.call(null,vec__379548,1,null);var ___$1 = cljs.core.nth.call(null,vec__379548,2,null);var val = cljs.core.nth.call(null,vec__379548,3,null);enfocus.core.at.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.rendering.css_id.call(null,parent_id)], null),enfocus.core.append.call(null,foundation.templates.dashboard.call(null,id)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#Impressions")].join('')], null),enfocus.core.add_class.call(null,"active"));
var seq__379549 = cljs.core.seq.call(null,foundation.templates.dashboard_metrics);var chunk__379550 = null;var count__379551 = 0;var i__379552 = 0;while(true){
if((i__379552 < count__379551))
{var vec__379553 = cljs.core._nth.call(null,chunk__379550,i__379552);var metric = cljs.core.nth.call(null,vec__379553,0,null);var cpa = cljs.core.nth.call(null,vec__379553,1,null);var rate = cljs.core.nth.call(null,vec__379553,2,null);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric)].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__379549,chunk__379550,count__379551,i__379552,vec__379553,metric,cpa,rate){
return (function (e){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"total","total",1124454070)));
});})(seq__379549,chunk__379550,count__379551,i__379552,vec__379553,metric,cpa,rate))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__379549,chunk__379550,count__379551,i__379552,vec__379553,metric,cpa,rate){
return (function (){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"cpa","cpa",1014002950)));
});})(seq__379549,chunk__379550,count__379551,i__379552,vec__379553,metric,cpa,rate))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__379549,chunk__379550,count__379551,i__379552,vec__379553,metric,cpa,rate){
return (function (){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"rate","rate",1017397330)));
});})(seq__379549,chunk__379550,count__379551,i__379552,vec__379553,metric,cpa,rate))
));
{
var G__379555 = seq__379549;
var G__379556 = chunk__379550;
var G__379557 = count__379551;
var G__379558 = (i__379552 + 1);
seq__379549 = G__379555;
chunk__379550 = G__379556;
count__379551 = G__379557;
i__379552 = G__379558;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__379549);if(temp__4092__auto__)
{var seq__379549__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__379549__$1))
{var c__14708__auto__ = cljs.core.chunk_first.call(null,seq__379549__$1);{
var G__379559 = cljs.core.chunk_rest.call(null,seq__379549__$1);
var G__379560 = c__14708__auto__;
var G__379561 = cljs.core.count.call(null,c__14708__auto__);
var G__379562 = 0;
seq__379549 = G__379559;
chunk__379550 = G__379560;
count__379551 = G__379561;
i__379552 = G__379562;
continue;
}
} else
{var vec__379554 = cljs.core.first.call(null,seq__379549__$1);var metric = cljs.core.nth.call(null,vec__379554,0,null);var cpa = cljs.core.nth.call(null,vec__379554,1,null);var rate = cljs.core.nth.call(null,vec__379554,2,null);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric)].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__379549,chunk__379550,count__379551,i__379552,vec__379554,metric,cpa,rate,seq__379549__$1,temp__4092__auto__){
return (function (e){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"total","total",1124454070)));
});})(seq__379549,chunk__379550,count__379551,i__379552,vec__379554,metric,cpa,rate,seq__379549__$1,temp__4092__auto__))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__379549,chunk__379550,count__379551,i__379552,vec__379554,metric,cpa,rate,seq__379549__$1,temp__4092__auto__){
return (function (){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"cpa","cpa",1014002950)));
});})(seq__379549,chunk__379550,count__379551,i__379552,vec__379554,metric,cpa,rate,seq__379549__$1,temp__4092__auto__))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__379549,chunk__379550,count__379551,i__379552,vec__379554,metric,cpa,rate,seq__379549__$1,temp__4092__auto__){
return (function (){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"rate","rate",1017397330)));
});})(seq__379549,chunk__379550,count__379551,i__379552,vec__379554,metric,cpa,rate,seq__379549__$1,temp__4092__auto__))
));
{
var G__379563 = cljs.core.next.call(null,seq__379549__$1);
var G__379564 = null;
var G__379565 = 0;
var G__379566 = 0;
seq__379549 = G__379563;
chunk__379550 = G__379564;
count__379551 = G__379565;
i__379552 = G__379566;
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
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null),(function (renderer,p__379567,input_queue,parent_id,id){var vec__379568 = p__379567;var _ = cljs.core.nth.call(null,vec__379568,0,null);var path = cljs.core.nth.call(null,vec__379568,1,null);var ___$1 = cljs.core.nth.call(null,vec__379568,2,null);var map__379569 = cljs.core.nth.call(null,vec__379568,3,null);var map__379569__$1 = ((cljs.core.seq_QMARK_.call(null,map__379569))?cljs.core.apply.call(null,cljs.core.hash_map,map__379569):map__379569);var val = map__379569__$1;var model = cljs.core.get.call(null,map__379569__$1,new cljs.core.Keyword(null,"model","model",1117974171));var end_time = cljs.core.get.call(null,map__379569__$1,new cljs.core.Keyword(null,"end-time","end-time",2693279729));var start_time = cljs.core.get.call(null,map__379569__$1,new cljs.core.Keyword(null,"start-time","start-time",3689550026));var stats = cljs.core.get.call(null,map__379569__$1,new cljs.core.Keyword(null,"stats","stats",1123661841));if(cljs.core.truth_(start_time))
{var start_picker = foundation.rendering.start_date_picker.call(null,renderer,start_time);var end_picker = foundation.rendering.end_date_picker.call(null,renderer,end_time);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,[cljs.core.str("#"),cljs.core.str(parent_id)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#resource-id","#resource-id",2471321257)], null),enfocus.core.content.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(model)));
var seq__379570 = cljs.core.seq.call(null,foundation.templates.dashboard_metrics);var chunk__379571 = null;var count__379572 = 0;var i__379573 = 0;while(true){
if((i__379573 < count__379572))
{var vec__379574 = cljs.core._nth.call(null,chunk__379571,i__379573);var metric = cljs.core.nth.call(null,vec__379574,0,null);var cpa = cljs.core.nth.call(null,vec__379574,1,null);var rate = cljs.core.nth.call(null,vec__379574,2,null);var total_379576 = cljs.core.get.call(null,new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(stats),metric);var _cpa_379577 = cljs.core.get.call(null,new cljs.core.Keyword(null,"cpa","cpa",1014002950).cljs$core$IFn$_invoke$arity$1(stats),metric);var _rate_379578 = cljs.core.get.call(null,new cljs.core.Keyword(null,"rate","rate",1017397330).cljs$core$IFn$_invoke$arity$1(stats),metric);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric)].join('')], null),enfocus.core.content.call(null,[cljs.core.str(total_379576),cljs.core.str(" "),cljs.core.str(metric)].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),enfocus.core.content.call(null,[cljs.core.str(_cpa_379577),cljs.core.str(" "),cljs.core.str(cpa)].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),enfocus.core.content.call(null,[cljs.core.str(_rate_379578),cljs.core.str(" "),cljs.core.str(rate)].join('')));
{
var G__379579 = seq__379570;
var G__379580 = chunk__379571;
var G__379581 = count__379572;
var G__379582 = (i__379573 + 1);
seq__379570 = G__379579;
chunk__379571 = G__379580;
count__379572 = G__379581;
i__379573 = G__379582;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__379570);if(temp__4092__auto__)
{var seq__379570__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__379570__$1))
{var c__14708__auto__ = cljs.core.chunk_first.call(null,seq__379570__$1);{
var G__379583 = cljs.core.chunk_rest.call(null,seq__379570__$1);
var G__379584 = c__14708__auto__;
var G__379585 = cljs.core.count.call(null,c__14708__auto__);
var G__379586 = 0;
seq__379570 = G__379583;
chunk__379571 = G__379584;
count__379572 = G__379585;
i__379573 = G__379586;
continue;
}
} else
{var vec__379575 = cljs.core.first.call(null,seq__379570__$1);var metric = cljs.core.nth.call(null,vec__379575,0,null);var cpa = cljs.core.nth.call(null,vec__379575,1,null);var rate = cljs.core.nth.call(null,vec__379575,2,null);var total_379587 = cljs.core.get.call(null,new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(stats),metric);var _cpa_379588 = cljs.core.get.call(null,new cljs.core.Keyword(null,"cpa","cpa",1014002950).cljs$core$IFn$_invoke$arity$1(stats),metric);var _rate_379589 = cljs.core.get.call(null,new cljs.core.Keyword(null,"rate","rate",1017397330).cljs$core$IFn$_invoke$arity$1(stats),metric);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric)].join('')], null),enfocus.core.content.call(null,[cljs.core.str(total_379587),cljs.core.str(" "),cljs.core.str(metric)].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),enfocus.core.content.call(null,[cljs.core.str(_cpa_379588),cljs.core.str(" "),cljs.core.str(cpa)].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),enfocus.core.content.call(null,[cljs.core.str(_rate_379589),cljs.core.str(" "),cljs.core.str(rate)].join('')));
{
var G__379590 = cljs.core.next.call(null,seq__379570__$1);
var G__379591 = null;
var G__379592 = 0;
var G__379593 = 0;
seq__379570 = G__379590;
chunk__379571 = G__379591;
count__379572 = G__379592;
i__379573 = G__379593;
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
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null),(function (renderer,p__379594,input_queue,parent_id,id){var vec__379595 = p__379594;var _ = cljs.core.nth.call(null,vec__379595,0,null);var path = cljs.core.nth.call(null,vec__379595,1,null);var ___$1 = cljs.core.nth.call(null,vec__379595,2,null);var ___$2 = cljs.core.nth.call(null,vec__379595,3,null);return enfocus.core.at.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.rendering.css_id.call(null,parent_id)], null),enfocus.core.append.call(null,foundation.templates.datagrid.call(null,id)));
}));
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null),(function (renderer,p__379596,input_queue,parent_id,id){var vec__379597 = p__379596;var _ = cljs.core.nth.call(null,vec__379597,0,null);var path = cljs.core.nth.call(null,vec__379597,1,null);var ___$1 = cljs.core.nth.call(null,vec__379597,2,null);var val = cljs.core.nth.call(null,vec__379597,3,null);if(cljs.core._EQ_.call(null,foundation.app.render.get_data.call(null,renderer,path),new cljs.core.Keyword(null,"resource","resource",672839552).cljs$core$IFn$_invoke$arity$1(val)))
{return null;
} else
{return foundation.app.render.set_data_BANG_.call(null,renderer,path,new cljs.core.Keyword(null,"resource","resource",672839552).cljs$core$IFn$_invoke$arity$1(val));
}
}));
foundation.rendering.create_msg = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"create","create",3956577390),foundation.app.message.path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null)], true, false);
foundation.rendering.save_msg = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"save","save",1017427183),foundation.app.message.path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null)], true, false);
foundation.rendering.delete_msg = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"delete","delete",3973413149),foundation.app.message.path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null)], true, false);
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null),(function (renderer,p__379598,input_queue,parent_id,id){var vec__379599 = p__379598;var _ = cljs.core.nth.call(null,vec__379599,0,null);var path = cljs.core.nth.call(null,vec__379599,1,null);var ___$1 = cljs.core.nth.call(null,vec__379599,2,null);var val = cljs.core.nth.call(null,vec__379599,3,null);var model = foundation.app.render.get_data.call(null,renderer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null));enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",3798183098)], null),enfocus.core.content.call(null,foundation.templates.datagrid_table.call(null,model,cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#new","button#new",1370997825)], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return cljs.core.async.put_BANG_.call(null,input_queue,foundation.rendering.create_msg);
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#save","button#save",3494015904)], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return cljs.core.async.put_BANG_.call(null,input_queue,foundation.rendering.save_msg);
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#delete","button#delete",4563292046)], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return cljs.core.async.put_BANG_.call(null,input_queue,foundation.rendering.delete_msg);
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#dupe","button#dupe",3493588073)], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return cljs.core.async.put_BANG_.call(null,input_queue,foundation.rendering.create_msg);
})));
return foundation.rendering.as_resizable.call(null);
}));
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null),(function (renderer,p__379600,input_queue,parent_id,id){var vec__379601 = p__379600;var _ = cljs.core.nth.call(null,vec__379601,0,null);var path = cljs.core.nth.call(null,vec__379601,1,null);var ___$1 = cljs.core.nth.call(null,vec__379601,2,null);var val = cljs.core.nth.call(null,vec__379601,3,null);var model = foundation.app.render.get_data.call(null,renderer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null));var row_count = cljs.core.count.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByTagName("tbody"))[0]).rows);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",3798183098)], null),enfocus.core.content.call(null,foundation.templates.datagrid_table.call(null,model,val)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body>tr","div.panel-body>tr",3056946278)], null),enfocus.core.content.call(null,foundation.templates.datagrid_table.call(null,model,val)));
foundation.rendering.set_datagrid_height_BANG_.call(null);
return foundation.rendering.fix_column_widths_BANG_.call(null);
}));
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null),(function (renderer,p__379602,input_queue,parent_id,id){var vec__379603 = p__379602;var _ = cljs.core.nth.call(null,vec__379603,0,null);var path = cljs.core.nth.call(null,vec__379603,1,null);var ___$1 = cljs.core.nth.call(null,vec__379603,2,null);var ___$2 = cljs.core.nth.call(null,vec__379603,3,null);var chart = foundation.chart.highchart.call(null);return foundation.app.render.set_data_BANG_.call(null,renderer,path,chart);
}));
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null),(function (renderer,p__379604,input_queue,parent_id,id){var vec__379605 = p__379604;var _ = cljs.core.nth.call(null,vec__379605,0,null);var path = cljs.core.nth.call(null,vec__379605,1,null);var ___$1 = cljs.core.nth.call(null,vec__379605,2,null);var val = cljs.core.nth.call(null,vec__379605,3,null);var chart = foundation.app.render.get_data.call(null,renderer,path);var start_time = (new Date(new cljs.core.Keyword(null,"start-time","start-time",3689550026).cljs$core$IFn$_invoke$arity$1(val))).getTime();var seq__379606_379610 = cljs.core.seq.call(null,chart.series);var chunk__379607_379611 = null;var count__379608_379612 = 0;var i__379609_379613 = 0;while(true){
if((i__379609_379613 < count__379608_379612))
{var series_379614 = cljs.core._nth.call(null,chunk__379607_379611,i__379609_379613);series_379614.remove();
{
var G__379615 = seq__379606_379610;
var G__379616 = chunk__379607_379611;
var G__379617 = count__379608_379612;
var G__379618 = (i__379609_379613 + 1);
seq__379606_379610 = G__379615;
chunk__379607_379611 = G__379616;
count__379608_379612 = G__379617;
i__379609_379613 = G__379618;
continue;
}
} else
{var temp__4092__auto___379619 = cljs.core.seq.call(null,seq__379606_379610);if(temp__4092__auto___379619)
{var seq__379606_379620__$1 = temp__4092__auto___379619;if(cljs.core.chunked_seq_QMARK_.call(null,seq__379606_379620__$1))
{var c__14708__auto___379621 = cljs.core.chunk_first.call(null,seq__379606_379620__$1);{
var G__379622 = cljs.core.chunk_rest.call(null,seq__379606_379620__$1);
var G__379623 = c__14708__auto___379621;
var G__379624 = cljs.core.count.call(null,c__14708__auto___379621);
var G__379625 = 0;
seq__379606_379610 = G__379622;
chunk__379607_379611 = G__379623;
count__379608_379612 = G__379624;
i__379609_379613 = G__379625;
continue;
}
} else
{var series_379626 = cljs.core.first.call(null,seq__379606_379620__$1);series_379626.remove();
{
var G__379627 = cljs.core.next.call(null,seq__379606_379620__$1);
var G__379628 = null;
var G__379629 = 0;
var G__379630 = 0;
seq__379606_379610 = G__379627;
chunk__379607_379611 = G__379628;
count__379608_379612 = G__379629;
i__379609_379613 = G__379630;
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
HTMLCollection.prototype.cljs$core$ISeq$_rest$arity$1 = (function (x){var x__$1 = this;var iter__14677__auto__ = (function iter__379631(s__379632){return (new cljs.core.LazySeq(null,(function (){var s__379632__$1 = s__379632;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__379632__$1);if(temp__4092__auto__)
{var s__379632__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__379632__$2))
{var c__14675__auto__ = cljs.core.chunk_first.call(null,s__379632__$2);var size__14676__auto__ = cljs.core.count.call(null,c__14675__auto__);var b__379634 = cljs.core.chunk_buffer.call(null,size__14676__auto__);if((function (){var i__379633 = 0;while(true){
if((i__379633 < size__14676__auto__))
{var i = cljs.core._nth.call(null,c__14675__auto__,i__379633);cljs.core.chunk_append.call(null,b__379634,(x__$1[i]));
{
var G__379635 = (i__379633 + 1);
i__379633 = G__379635;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__379634),iter__379631.call(null,cljs.core.chunk_rest.call(null,s__379632__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__379634),null);
}
} else
{var i = cljs.core.first.call(null,s__379632__$2);return cljs.core.cons.call(null,(x__$1[i]),iter__379631.call(null,cljs.core.rest.call(null,s__379632__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14677__auto__.call(null,cljs.core.range.call(null,x__$1.length));
});
foundation.rendering.th_widths = (function th_widths(ths,widths){return cljs.core.reduce.call(null,(function (ws,p__379638){var vec__379639 = p__379638;var width = cljs.core.nth.call(null,vec__379639,0,null);var th = cljs.core.nth.call(null,vec__379639,1,null);var th_width = goog.style.getBounds(th).width;if((width > th_width))
{return cljs.core.conj.call(null,ws,width);
} else
{return cljs.core.conj.call(null,ws,th_width);
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,widths,ths));
});
foundation.rendering.td_widths = (function td_widths(rows){return cljs.core.reduce.call(null,(function (ws,td){return cljs.core.conj.call(null,ws,goog.style.getBounds(td).width);
}),cljs.core.PersistentVector.EMPTY,cljs.core.first.call(null,rows).cells);
});
foundation.rendering.full_td_widths = (function full_td_widths(th_widths,ths,row_width,table_width){return cljs.core.reduce.call(null,(function (ws,p__379642){var vec__379643 = p__379642;var width = cljs.core.nth.call(null,vec__379643,0,null);var th = cljs.core.nth.call(null,vec__379643,1,null);var th_width = width;var new_width = (table_width * (width / row_width));if((new_width > width))
{goog.style.setWidth(th,new_width);
return cljs.core.conj.call(null,ws,new_width);
} else
{goog.style.setWidth(th,width);
return cljs.core.conj.call(null,ws,width);
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,th_widths,ths));
});
foundation.rendering.fix_column_widths_BANG_ = (function fix_column_widths_BANG_(){var vec__379662 = cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__379644_SHARP_){return document.querySelector(dommy.core.selector.call(null,p1__379644_SHARP_));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".panel-body",".panel-body",1210123755),new cljs.core.Keyword(null,"tbody","tbody",1124062088),new cljs.core.Keyword(null,"thead","thead",1124231110)], null)));var panel_body = cljs.core.nth.call(null,vec__379662,0,null);var tbody = cljs.core.nth.call(null,vec__379662,1,null);var thead = cljs.core.nth.call(null,vec__379662,2,null);var table_width = goog.style.getBounds(tbody).width;var rows = tbody.rows;var ths = cljs.core.first.call(null,thead.rows).cells;var td_widths = foundation.rendering.td_widths.call(null,rows);var th_widths = foundation.rendering.th_widths.call(null,ths,td_widths);var row_width = cljs.core.reduce.call(null,cljs.core._PLUS_,th_widths);var th_widths__$1 = foundation.rendering.full_td_widths.call(null,th_widths,ths,row_width,table_width);var seq__379663 = cljs.core.seq.call(null,rows);var chunk__379664 = null;var count__379665 = 0;var i__379666 = 0;while(true){
if((i__379666 < count__379665))
{var tr = cljs.core._nth.call(null,chunk__379664,i__379666);var seq__379667_379679 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,th_widths__$1,tr.cells));var chunk__379668_379680 = null;var count__379669_379681 = 0;var i__379670_379682 = 0;while(true){
if((i__379670_379682 < count__379669_379681))
{var vec__379671_379683 = cljs.core._nth.call(null,chunk__379668_379680,i__379670_379682);var width_379684 = cljs.core.nth.call(null,vec__379671_379683,0,null);var td_379685 = cljs.core.nth.call(null,vec__379671_379683,1,null);goog.style.setWidth(td_379685,width_379684);
{
var G__379686 = seq__379667_379679;
var G__379687 = chunk__379668_379680;
var G__379688 = count__379669_379681;
var G__379689 = (i__379670_379682 + 1);
seq__379667_379679 = G__379686;
chunk__379668_379680 = G__379687;
count__379669_379681 = G__379688;
i__379670_379682 = G__379689;
continue;
}
} else
{var temp__4092__auto___379690 = cljs.core.seq.call(null,seq__379667_379679);if(temp__4092__auto___379690)
{var seq__379667_379691__$1 = temp__4092__auto___379690;if(cljs.core.chunked_seq_QMARK_.call(null,seq__379667_379691__$1))
{var c__14708__auto___379692 = cljs.core.chunk_first.call(null,seq__379667_379691__$1);{
var G__379693 = cljs.core.chunk_rest.call(null,seq__379667_379691__$1);
var G__379694 = c__14708__auto___379692;
var G__379695 = cljs.core.count.call(null,c__14708__auto___379692);
var G__379696 = 0;
seq__379667_379679 = G__379693;
chunk__379668_379680 = G__379694;
count__379669_379681 = G__379695;
i__379670_379682 = G__379696;
continue;
}
} else
{var vec__379672_379697 = cljs.core.first.call(null,seq__379667_379691__$1);var width_379698 = cljs.core.nth.call(null,vec__379672_379697,0,null);var td_379699 = cljs.core.nth.call(null,vec__379672_379697,1,null);goog.style.setWidth(td_379699,width_379698);
{
var G__379700 = cljs.core.next.call(null,seq__379667_379691__$1);
var G__379701 = null;
var G__379702 = 0;
var G__379703 = 0;
seq__379667_379679 = G__379700;
chunk__379668_379680 = G__379701;
count__379669_379681 = G__379702;
i__379670_379682 = G__379703;
continue;
}
}
} else
{}
}
break;
}
{
var G__379704 = seq__379663;
var G__379705 = chunk__379664;
var G__379706 = count__379665;
var G__379707 = (i__379666 + 1);
seq__379663 = G__379704;
chunk__379664 = G__379705;
count__379665 = G__379706;
i__379666 = G__379707;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__379663);if(temp__4092__auto__)
{var seq__379663__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__379663__$1))
{var c__14708__auto__ = cljs.core.chunk_first.call(null,seq__379663__$1);{
var G__379708 = cljs.core.chunk_rest.call(null,seq__379663__$1);
var G__379709 = c__14708__auto__;
var G__379710 = cljs.core.count.call(null,c__14708__auto__);
var G__379711 = 0;
seq__379663 = G__379708;
chunk__379664 = G__379709;
count__379665 = G__379710;
i__379666 = G__379711;
continue;
}
} else
{var tr = cljs.core.first.call(null,seq__379663__$1);var seq__379673_379712 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,th_widths__$1,tr.cells));var chunk__379674_379713 = null;var count__379675_379714 = 0;var i__379676_379715 = 0;while(true){
if((i__379676_379715 < count__379675_379714))
{var vec__379677_379716 = cljs.core._nth.call(null,chunk__379674_379713,i__379676_379715);var width_379717 = cljs.core.nth.call(null,vec__379677_379716,0,null);var td_379718 = cljs.core.nth.call(null,vec__379677_379716,1,null);goog.style.setWidth(td_379718,width_379717);
{
var G__379719 = seq__379673_379712;
var G__379720 = chunk__379674_379713;
var G__379721 = count__379675_379714;
var G__379722 = (i__379676_379715 + 1);
seq__379673_379712 = G__379719;
chunk__379674_379713 = G__379720;
count__379675_379714 = G__379721;
i__379676_379715 = G__379722;
continue;
}
} else
{var temp__4092__auto___379723__$1 = cljs.core.seq.call(null,seq__379673_379712);if(temp__4092__auto___379723__$1)
{var seq__379673_379724__$1 = temp__4092__auto___379723__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__379673_379724__$1))
{var c__14708__auto___379725 = cljs.core.chunk_first.call(null,seq__379673_379724__$1);{
var G__379726 = cljs.core.chunk_rest.call(null,seq__379673_379724__$1);
var G__379727 = c__14708__auto___379725;
var G__379728 = cljs.core.count.call(null,c__14708__auto___379725);
var G__379729 = 0;
seq__379673_379712 = G__379726;
chunk__379674_379713 = G__379727;
count__379675_379714 = G__379728;
i__379676_379715 = G__379729;
continue;
}
} else
{var vec__379678_379730 = cljs.core.first.call(null,seq__379673_379724__$1);var width_379731 = cljs.core.nth.call(null,vec__379678_379730,0,null);var td_379732 = cljs.core.nth.call(null,vec__379678_379730,1,null);goog.style.setWidth(td_379732,width_379731);
{
var G__379733 = cljs.core.next.call(null,seq__379673_379724__$1);
var G__379734 = null;
var G__379735 = 0;
var G__379736 = 0;
seq__379673_379712 = G__379733;
chunk__379674_379713 = G__379734;
count__379675_379714 = G__379735;
i__379676_379715 = G__379736;
continue;
}
}
} else
{}
}
break;
}
{
var G__379737 = cljs.core.next.call(null,seq__379663__$1);
var G__379738 = null;
var G__379739 = 0;
var G__379740 = 0;
seq__379663 = G__379737;
chunk__379664 = G__379738;
count__379665 = G__379739;
i__379666 = G__379740;
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