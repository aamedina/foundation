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
cljs.core._add_method.call(null,foundation.app.render.node_create,cljs.core.PersistentVector.EMPTY,(function (renderer,p__334233,input_queue,parent_id,id){var vec__334234 = p__334233;var _ = cljs.core.nth.call(null,vec__334234,0,null);var path = cljs.core.nth.call(null,vec__334234,1,null);var ___$1 = cljs.core.nth.call(null,vec__334234,2,null);var val = cljs.core.nth.call(null,vec__334234,3,null);return enfocus.core.at.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",1016933652)], null),enfocus.core.append.call(null,foundation.templates.twitter_power.call(null,id)));
}));
foundation.rendering.stats_msg = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"stats","stats",1123661841),foundation.app.message.path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null)], true, false);
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null),(function (renderer,p__334235,input_queue,parent_id,id){var vec__334236 = p__334235;var _ = cljs.core.nth.call(null,vec__334236,0,null);var path = cljs.core.nth.call(null,vec__334236,1,null);var ___$1 = cljs.core.nth.call(null,vec__334236,2,null);var val = cljs.core.nth.call(null,vec__334236,3,null);enfocus.core.at.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.rendering.css_id.call(null,parent_id)], null),enfocus.core.append.call(null,foundation.templates.dashboard.call(null,id)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#Impressions")].join('')], null),enfocus.core.add_class.call(null,"active"));
var seq__334237 = cljs.core.seq.call(null,foundation.templates.dashboard_metrics);var chunk__334238 = null;var count__334239 = 0;var i__334240 = 0;while(true){
if((i__334240 < count__334239))
{var vec__334241 = cljs.core._nth.call(null,chunk__334238,i__334240);var metric = cljs.core.nth.call(null,vec__334241,0,null);var cpa = cljs.core.nth.call(null,vec__334241,1,null);var rate = cljs.core.nth.call(null,vec__334241,2,null);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric)].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__334237,chunk__334238,count__334239,i__334240,vec__334241,metric,cpa,rate){
return (function (e){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"total","total",1124454070)));
});})(seq__334237,chunk__334238,count__334239,i__334240,vec__334241,metric,cpa,rate))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__334237,chunk__334238,count__334239,i__334240,vec__334241,metric,cpa,rate){
return (function (){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"cpa","cpa",1014002950)));
});})(seq__334237,chunk__334238,count__334239,i__334240,vec__334241,metric,cpa,rate))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__334237,chunk__334238,count__334239,i__334240,vec__334241,metric,cpa,rate){
return (function (){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"rate","rate",1017397330)));
});})(seq__334237,chunk__334238,count__334239,i__334240,vec__334241,metric,cpa,rate))
));
{
var G__334243 = seq__334237;
var G__334244 = chunk__334238;
var G__334245 = count__334239;
var G__334246 = (i__334240 + 1);
seq__334237 = G__334243;
chunk__334238 = G__334244;
count__334239 = G__334245;
i__334240 = G__334246;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__334237);if(temp__4092__auto__)
{var seq__334237__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__334237__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__334237__$1);{
var G__334247 = cljs.core.chunk_rest.call(null,seq__334237__$1);
var G__334248 = c__14547__auto__;
var G__334249 = cljs.core.count.call(null,c__14547__auto__);
var G__334250 = 0;
seq__334237 = G__334247;
chunk__334238 = G__334248;
count__334239 = G__334249;
i__334240 = G__334250;
continue;
}
} else
{var vec__334242 = cljs.core.first.call(null,seq__334237__$1);var metric = cljs.core.nth.call(null,vec__334242,0,null);var cpa = cljs.core.nth.call(null,vec__334242,1,null);var rate = cljs.core.nth.call(null,vec__334242,2,null);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric)].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__334237,chunk__334238,count__334239,i__334240,vec__334242,metric,cpa,rate,seq__334237__$1,temp__4092__auto__){
return (function (e){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"total","total",1124454070)));
});})(seq__334237,chunk__334238,count__334239,i__334240,vec__334242,metric,cpa,rate,seq__334237__$1,temp__4092__auto__))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__334237,chunk__334238,count__334239,i__334240,vec__334242,metric,cpa,rate,seq__334237__$1,temp__4092__auto__){
return (function (){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"cpa","cpa",1014002950)));
});})(seq__334237,chunk__334238,count__334239,i__334240,vec__334242,metric,cpa,rate,seq__334237__$1,temp__4092__auto__))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__334237,chunk__334238,count__334239,i__334240,vec__334242,metric,cpa,rate,seq__334237__$1,temp__4092__auto__){
return (function (){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"rate","rate",1017397330)));
});})(seq__334237,chunk__334238,count__334239,i__334240,vec__334242,metric,cpa,rate,seq__334237__$1,temp__4092__auto__))
));
{
var G__334251 = cljs.core.next.call(null,seq__334237__$1);
var G__334252 = null;
var G__334253 = 0;
var G__334254 = 0;
seq__334237 = G__334251;
chunk__334238 = G__334252;
count__334239 = G__334253;
i__334240 = G__334254;
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
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null),(function (renderer,p__334255,input_queue,parent_id,id){var vec__334256 = p__334255;var _ = cljs.core.nth.call(null,vec__334256,0,null);var path = cljs.core.nth.call(null,vec__334256,1,null);var ___$1 = cljs.core.nth.call(null,vec__334256,2,null);var map__334257 = cljs.core.nth.call(null,vec__334256,3,null);var map__334257__$1 = ((cljs.core.seq_QMARK_.call(null,map__334257))?cljs.core.apply.call(null,cljs.core.hash_map,map__334257):map__334257);var val = map__334257__$1;var model = cljs.core.get.call(null,map__334257__$1,new cljs.core.Keyword(null,"model","model",1117974171));var end_time = cljs.core.get.call(null,map__334257__$1,new cljs.core.Keyword(null,"end-time","end-time",2693279729));var start_time = cljs.core.get.call(null,map__334257__$1,new cljs.core.Keyword(null,"start-time","start-time",3689550026));var stats = cljs.core.get.call(null,map__334257__$1,new cljs.core.Keyword(null,"stats","stats",1123661841));if(cljs.core.truth_(start_time))
{var start_picker = foundation.rendering.start_date_picker.call(null,renderer,start_time);var end_picker = foundation.rendering.end_date_picker.call(null,renderer,end_time);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,[cljs.core.str("#"),cljs.core.str(parent_id)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#resource-id","#resource-id",2471321257)], null),enfocus.core.content.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(model)));
var seq__334258 = cljs.core.seq.call(null,foundation.templates.dashboard_metrics);var chunk__334259 = null;var count__334260 = 0;var i__334261 = 0;while(true){
if((i__334261 < count__334260))
{var vec__334262 = cljs.core._nth.call(null,chunk__334259,i__334261);var metric = cljs.core.nth.call(null,vec__334262,0,null);var cpa = cljs.core.nth.call(null,vec__334262,1,null);var rate = cljs.core.nth.call(null,vec__334262,2,null);var total_334264 = cljs.core.get.call(null,new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(stats),metric);var _cpa_334265 = cljs.core.get.call(null,new cljs.core.Keyword(null,"cpa","cpa",1014002950).cljs$core$IFn$_invoke$arity$1(stats),metric);var _rate_334266 = cljs.core.get.call(null,new cljs.core.Keyword(null,"rate","rate",1017397330).cljs$core$IFn$_invoke$arity$1(stats),metric);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric)].join('')], null),enfocus.core.content.call(null,[cljs.core.str(total_334264),cljs.core.str(" "),cljs.core.str(metric)].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),enfocus.core.content.call(null,[cljs.core.str(_cpa_334265),cljs.core.str(" "),cljs.core.str(cpa)].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),enfocus.core.content.call(null,[cljs.core.str(_rate_334266),cljs.core.str(" "),cljs.core.str(rate)].join('')));
{
var G__334267 = seq__334258;
var G__334268 = chunk__334259;
var G__334269 = count__334260;
var G__334270 = (i__334261 + 1);
seq__334258 = G__334267;
chunk__334259 = G__334268;
count__334260 = G__334269;
i__334261 = G__334270;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__334258);if(temp__4092__auto__)
{var seq__334258__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__334258__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__334258__$1);{
var G__334271 = cljs.core.chunk_rest.call(null,seq__334258__$1);
var G__334272 = c__14547__auto__;
var G__334273 = cljs.core.count.call(null,c__14547__auto__);
var G__334274 = 0;
seq__334258 = G__334271;
chunk__334259 = G__334272;
count__334260 = G__334273;
i__334261 = G__334274;
continue;
}
} else
{var vec__334263 = cljs.core.first.call(null,seq__334258__$1);var metric = cljs.core.nth.call(null,vec__334263,0,null);var cpa = cljs.core.nth.call(null,vec__334263,1,null);var rate = cljs.core.nth.call(null,vec__334263,2,null);var total_334275 = cljs.core.get.call(null,new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(stats),metric);var _cpa_334276 = cljs.core.get.call(null,new cljs.core.Keyword(null,"cpa","cpa",1014002950).cljs$core$IFn$_invoke$arity$1(stats),metric);var _rate_334277 = cljs.core.get.call(null,new cljs.core.Keyword(null,"rate","rate",1017397330).cljs$core$IFn$_invoke$arity$1(stats),metric);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric)].join('')], null),enfocus.core.content.call(null,[cljs.core.str(total_334275),cljs.core.str(" "),cljs.core.str(metric)].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),enfocus.core.content.call(null,[cljs.core.str(_cpa_334276),cljs.core.str(" "),cljs.core.str(cpa)].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),enfocus.core.content.call(null,[cljs.core.str(_rate_334277),cljs.core.str(" "),cljs.core.str(rate)].join('')));
{
var G__334278 = cljs.core.next.call(null,seq__334258__$1);
var G__334279 = null;
var G__334280 = 0;
var G__334281 = 0;
seq__334258 = G__334278;
chunk__334259 = G__334279;
count__334260 = G__334280;
i__334261 = G__334281;
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
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null),(function (renderer,p__334282,input_queue,parent_id,id){var vec__334283 = p__334282;var _ = cljs.core.nth.call(null,vec__334283,0,null);var path = cljs.core.nth.call(null,vec__334283,1,null);var ___$1 = cljs.core.nth.call(null,vec__334283,2,null);var ___$2 = cljs.core.nth.call(null,vec__334283,3,null);return enfocus.core.at.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.rendering.css_id.call(null,parent_id)], null),enfocus.core.append.call(null,foundation.templates.datagrid.call(null,id)));
}));
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null),(function (renderer,p__334284,input_queue,parent_id,id){var vec__334285 = p__334284;var _ = cljs.core.nth.call(null,vec__334285,0,null);var path = cljs.core.nth.call(null,vec__334285,1,null);var ___$1 = cljs.core.nth.call(null,vec__334285,2,null);var val = cljs.core.nth.call(null,vec__334285,3,null);if(cljs.core._EQ_.call(null,foundation.app.render.get_data.call(null,renderer,path),new cljs.core.Keyword(null,"resource","resource",672839552).cljs$core$IFn$_invoke$arity$1(val)))
{return null;
} else
{return foundation.app.render.set_data_BANG_.call(null,renderer,path,new cljs.core.Keyword(null,"resource","resource",672839552).cljs$core$IFn$_invoke$arity$1(val));
}
}));
foundation.rendering.create_msg = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"create","create",3956577390),foundation.app.message.path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null)], true, false);
foundation.rendering.save_msg = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"save","save",1017427183),foundation.app.message.path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null)], true, false);
foundation.rendering.delete_msg = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"delete","delete",3973413149),foundation.app.message.path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null)], true, false);
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null),(function (renderer,p__334286,input_queue,parent_id,id){var vec__334287 = p__334286;var _ = cljs.core.nth.call(null,vec__334287,0,null);var path = cljs.core.nth.call(null,vec__334287,1,null);var ___$1 = cljs.core.nth.call(null,vec__334287,2,null);var val = cljs.core.nth.call(null,vec__334287,3,null);var model = foundation.app.render.get_data.call(null,renderer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null));enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",3798183098)], null),enfocus.core.content.call(null,foundation.templates.datagrid_table.call(null,model,cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#new","button#new",1370997825)], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return cljs.core.async.put_BANG_.call(null,input_queue,foundation.rendering.create_msg);
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#save","button#save",3494015904)], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return cljs.core.async.put_BANG_.call(null,input_queue,foundation.rendering.save_msg);
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#delete","button#delete",4563292046)], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return cljs.core.async.put_BANG_.call(null,input_queue,foundation.rendering.delete_msg);
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#dupe","button#dupe",3493588073)], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return cljs.core.async.put_BANG_.call(null,input_queue,foundation.rendering.create_msg);
})));
return foundation.rendering.as_resizable.call(null);
}));
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null),(function (renderer,p__334288,input_queue,parent_id,id){var vec__334289 = p__334288;var _ = cljs.core.nth.call(null,vec__334289,0,null);var path = cljs.core.nth.call(null,vec__334289,1,null);var ___$1 = cljs.core.nth.call(null,vec__334289,2,null);var val = cljs.core.nth.call(null,vec__334289,3,null);var model = foundation.app.render.get_data.call(null,renderer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null));var row_count = cljs.core.count.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByTagName("tbody"))[0]).rows);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",3798183098)], null),enfocus.core.content.call(null,foundation.templates.datagrid_table.call(null,model,val)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body>tr","div.panel-body>tr",3056946278)], null),enfocus.core.content.call(null,foundation.templates.datagrid_table.call(null,model,val)));
foundation.rendering.set_datagrid_height_BANG_.call(null);
return foundation.rendering.fix_column_widths_BANG_.call(null);
}));
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null),(function (renderer,p__334290,input_queue,parent_id,id){var vec__334291 = p__334290;var _ = cljs.core.nth.call(null,vec__334291,0,null);var path = cljs.core.nth.call(null,vec__334291,1,null);var ___$1 = cljs.core.nth.call(null,vec__334291,2,null);var ___$2 = cljs.core.nth.call(null,vec__334291,3,null);var chart = foundation.chart.highchart.call(null);return foundation.app.render.set_data_BANG_.call(null,renderer,path,chart);
}));
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null),(function (renderer,p__334292,input_queue,parent_id,id){var vec__334293 = p__334292;var _ = cljs.core.nth.call(null,vec__334293,0,null);var path = cljs.core.nth.call(null,vec__334293,1,null);var ___$1 = cljs.core.nth.call(null,vec__334293,2,null);var val = cljs.core.nth.call(null,vec__334293,3,null);var chart = foundation.app.render.get_data.call(null,renderer,path);var start_time = (new Date(new cljs.core.Keyword(null,"start-time","start-time",3689550026).cljs$core$IFn$_invoke$arity$1(val))).getTime();var seq__334294_334298 = cljs.core.seq.call(null,chart.series);var chunk__334295_334299 = null;var count__334296_334300 = 0;var i__334297_334301 = 0;while(true){
if((i__334297_334301 < count__334296_334300))
{var series_334302 = cljs.core._nth.call(null,chunk__334295_334299,i__334297_334301);series_334302.remove();
{
var G__334303 = seq__334294_334298;
var G__334304 = chunk__334295_334299;
var G__334305 = count__334296_334300;
var G__334306 = (i__334297_334301 + 1);
seq__334294_334298 = G__334303;
chunk__334295_334299 = G__334304;
count__334296_334300 = G__334305;
i__334297_334301 = G__334306;
continue;
}
} else
{var temp__4092__auto___334307 = cljs.core.seq.call(null,seq__334294_334298);if(temp__4092__auto___334307)
{var seq__334294_334308__$1 = temp__4092__auto___334307;if(cljs.core.chunked_seq_QMARK_.call(null,seq__334294_334308__$1))
{var c__14547__auto___334309 = cljs.core.chunk_first.call(null,seq__334294_334308__$1);{
var G__334310 = cljs.core.chunk_rest.call(null,seq__334294_334308__$1);
var G__334311 = c__14547__auto___334309;
var G__334312 = cljs.core.count.call(null,c__14547__auto___334309);
var G__334313 = 0;
seq__334294_334298 = G__334310;
chunk__334295_334299 = G__334311;
count__334296_334300 = G__334312;
i__334297_334301 = G__334313;
continue;
}
} else
{var series_334314 = cljs.core.first.call(null,seq__334294_334308__$1);series_334314.remove();
{
var G__334315 = cljs.core.next.call(null,seq__334294_334308__$1);
var G__334316 = null;
var G__334317 = 0;
var G__334318 = 0;
seq__334294_334298 = G__334315;
chunk__334295_334299 = G__334316;
count__334296_334300 = G__334317;
i__334297_334301 = G__334318;
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
HTMLCollection.prototype.cljs$core$ISeq$_rest$arity$1 = (function (x){var x__$1 = this;var iter__14516__auto__ = (function iter__334319(s__334320){return (new cljs.core.LazySeq(null,(function (){var s__334320__$1 = s__334320;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__334320__$1);if(temp__4092__auto__)
{var s__334320__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__334320__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__334320__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__334322 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__334321 = 0;while(true){
if((i__334321 < size__14515__auto__))
{var i = cljs.core._nth.call(null,c__14514__auto__,i__334321);cljs.core.chunk_append.call(null,b__334322,(x__$1[i]));
{
var G__334323 = (i__334321 + 1);
i__334321 = G__334323;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__334322),iter__334319.call(null,cljs.core.chunk_rest.call(null,s__334320__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__334322),null);
}
} else
{var i = cljs.core.first.call(null,s__334320__$2);return cljs.core.cons.call(null,(x__$1[i]),iter__334319.call(null,cljs.core.rest.call(null,s__334320__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14516__auto__.call(null,cljs.core.range.call(null,x__$1.length));
});
foundation.rendering.th_widths = (function th_widths(ths,widths){return cljs.core.reduce.call(null,(function (ws,p__334326){var vec__334327 = p__334326;var width = cljs.core.nth.call(null,vec__334327,0,null);var th = cljs.core.nth.call(null,vec__334327,1,null);var th_width = goog.style.getBounds(th).width;if((width > th_width))
{return cljs.core.conj.call(null,ws,width);
} else
{return cljs.core.conj.call(null,ws,th_width);
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,widths,ths));
});
foundation.rendering.td_widths = (function td_widths(rows){return cljs.core.reduce.call(null,(function (ws,td){return cljs.core.conj.call(null,ws,goog.style.getBounds(td).width);
}),cljs.core.PersistentVector.EMPTY,cljs.core.first.call(null,rows).cells);
});
foundation.rendering.full_td_widths = (function full_td_widths(th_widths,ths,row_width,table_width){return cljs.core.reduce.call(null,(function (ws,p__334330){var vec__334331 = p__334330;var width = cljs.core.nth.call(null,vec__334331,0,null);var th = cljs.core.nth.call(null,vec__334331,1,null);var th_width = width;var new_width = (table_width * (width / row_width));if((new_width > width))
{goog.style.setWidth(th,new_width);
return cljs.core.conj.call(null,ws,new_width);
} else
{goog.style.setWidth(th,width);
return cljs.core.conj.call(null,ws,width);
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,th_widths,ths));
});
foundation.rendering.fix_column_widths_BANG_ = (function fix_column_widths_BANG_(){var vec__334350 = cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__334332_SHARP_){return document.querySelector(dommy.core.selector.call(null,p1__334332_SHARP_));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".panel-body",".panel-body",1210123755),new cljs.core.Keyword(null,"tbody","tbody",1124062088),new cljs.core.Keyword(null,"thead","thead",1124231110)], null)));var panel_body = cljs.core.nth.call(null,vec__334350,0,null);var tbody = cljs.core.nth.call(null,vec__334350,1,null);var thead = cljs.core.nth.call(null,vec__334350,2,null);var table_width = goog.style.getBounds(tbody).width;var rows = tbody.rows;var ths = cljs.core.first.call(null,thead.rows).cells;var td_widths = foundation.rendering.td_widths.call(null,rows);var th_widths = foundation.rendering.th_widths.call(null,ths,td_widths);var row_width = cljs.core.reduce.call(null,cljs.core._PLUS_,th_widths);var th_widths__$1 = foundation.rendering.full_td_widths.call(null,th_widths,ths,row_width,table_width);var seq__334351 = cljs.core.seq.call(null,rows);var chunk__334352 = null;var count__334353 = 0;var i__334354 = 0;while(true){
if((i__334354 < count__334353))
{var tr = cljs.core._nth.call(null,chunk__334352,i__334354);var seq__334355_334367 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,th_widths__$1,tr.cells));var chunk__334356_334368 = null;var count__334357_334369 = 0;var i__334358_334370 = 0;while(true){
if((i__334358_334370 < count__334357_334369))
{var vec__334359_334371 = cljs.core._nth.call(null,chunk__334356_334368,i__334358_334370);var width_334372 = cljs.core.nth.call(null,vec__334359_334371,0,null);var td_334373 = cljs.core.nth.call(null,vec__334359_334371,1,null);goog.style.setWidth(td_334373,width_334372);
{
var G__334374 = seq__334355_334367;
var G__334375 = chunk__334356_334368;
var G__334376 = count__334357_334369;
var G__334377 = (i__334358_334370 + 1);
seq__334355_334367 = G__334374;
chunk__334356_334368 = G__334375;
count__334357_334369 = G__334376;
i__334358_334370 = G__334377;
continue;
}
} else
{var temp__4092__auto___334378 = cljs.core.seq.call(null,seq__334355_334367);if(temp__4092__auto___334378)
{var seq__334355_334379__$1 = temp__4092__auto___334378;if(cljs.core.chunked_seq_QMARK_.call(null,seq__334355_334379__$1))
{var c__14547__auto___334380 = cljs.core.chunk_first.call(null,seq__334355_334379__$1);{
var G__334381 = cljs.core.chunk_rest.call(null,seq__334355_334379__$1);
var G__334382 = c__14547__auto___334380;
var G__334383 = cljs.core.count.call(null,c__14547__auto___334380);
var G__334384 = 0;
seq__334355_334367 = G__334381;
chunk__334356_334368 = G__334382;
count__334357_334369 = G__334383;
i__334358_334370 = G__334384;
continue;
}
} else
{var vec__334360_334385 = cljs.core.first.call(null,seq__334355_334379__$1);var width_334386 = cljs.core.nth.call(null,vec__334360_334385,0,null);var td_334387 = cljs.core.nth.call(null,vec__334360_334385,1,null);goog.style.setWidth(td_334387,width_334386);
{
var G__334388 = cljs.core.next.call(null,seq__334355_334379__$1);
var G__334389 = null;
var G__334390 = 0;
var G__334391 = 0;
seq__334355_334367 = G__334388;
chunk__334356_334368 = G__334389;
count__334357_334369 = G__334390;
i__334358_334370 = G__334391;
continue;
}
}
} else
{}
}
break;
}
{
var G__334392 = seq__334351;
var G__334393 = chunk__334352;
var G__334394 = count__334353;
var G__334395 = (i__334354 + 1);
seq__334351 = G__334392;
chunk__334352 = G__334393;
count__334353 = G__334394;
i__334354 = G__334395;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__334351);if(temp__4092__auto__)
{var seq__334351__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__334351__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__334351__$1);{
var G__334396 = cljs.core.chunk_rest.call(null,seq__334351__$1);
var G__334397 = c__14547__auto__;
var G__334398 = cljs.core.count.call(null,c__14547__auto__);
var G__334399 = 0;
seq__334351 = G__334396;
chunk__334352 = G__334397;
count__334353 = G__334398;
i__334354 = G__334399;
continue;
}
} else
{var tr = cljs.core.first.call(null,seq__334351__$1);var seq__334361_334400 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,th_widths__$1,tr.cells));var chunk__334362_334401 = null;var count__334363_334402 = 0;var i__334364_334403 = 0;while(true){
if((i__334364_334403 < count__334363_334402))
{var vec__334365_334404 = cljs.core._nth.call(null,chunk__334362_334401,i__334364_334403);var width_334405 = cljs.core.nth.call(null,vec__334365_334404,0,null);var td_334406 = cljs.core.nth.call(null,vec__334365_334404,1,null);goog.style.setWidth(td_334406,width_334405);
{
var G__334407 = seq__334361_334400;
var G__334408 = chunk__334362_334401;
var G__334409 = count__334363_334402;
var G__334410 = (i__334364_334403 + 1);
seq__334361_334400 = G__334407;
chunk__334362_334401 = G__334408;
count__334363_334402 = G__334409;
i__334364_334403 = G__334410;
continue;
}
} else
{var temp__4092__auto___334411__$1 = cljs.core.seq.call(null,seq__334361_334400);if(temp__4092__auto___334411__$1)
{var seq__334361_334412__$1 = temp__4092__auto___334411__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__334361_334412__$1))
{var c__14547__auto___334413 = cljs.core.chunk_first.call(null,seq__334361_334412__$1);{
var G__334414 = cljs.core.chunk_rest.call(null,seq__334361_334412__$1);
var G__334415 = c__14547__auto___334413;
var G__334416 = cljs.core.count.call(null,c__14547__auto___334413);
var G__334417 = 0;
seq__334361_334400 = G__334414;
chunk__334362_334401 = G__334415;
count__334363_334402 = G__334416;
i__334364_334403 = G__334417;
continue;
}
} else
{var vec__334366_334418 = cljs.core.first.call(null,seq__334361_334412__$1);var width_334419 = cljs.core.nth.call(null,vec__334366_334418,0,null);var td_334420 = cljs.core.nth.call(null,vec__334366_334418,1,null);goog.style.setWidth(td_334420,width_334419);
{
var G__334421 = cljs.core.next.call(null,seq__334361_334412__$1);
var G__334422 = null;
var G__334423 = 0;
var G__334424 = 0;
seq__334361_334400 = G__334421;
chunk__334362_334401 = G__334422;
count__334363_334402 = G__334423;
i__334364_334403 = G__334424;
continue;
}
}
} else
{}
}
break;
}
{
var G__334425 = cljs.core.next.call(null,seq__334351__$1);
var G__334426 = null;
var G__334427 = 0;
var G__334428 = 0;
seq__334351 = G__334425;
chunk__334352 = G__334426;
count__334353 = G__334427;
i__334354 = G__334428;
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