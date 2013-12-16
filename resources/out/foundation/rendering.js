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
cljs.core._add_method.call(null,foundation.app.render.node_create,cljs.core.PersistentVector.EMPTY,(function (renderer,p__46344,input_queue,parent_id,id){var vec__46345 = p__46344;var _ = cljs.core.nth.call(null,vec__46345,0,null);var path = cljs.core.nth.call(null,vec__46345,1,null);var ___$1 = cljs.core.nth.call(null,vec__46345,2,null);var val = cljs.core.nth.call(null,vec__46345,3,null);return enfocus.core.at.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",1016933652)], null),enfocus.core.append.call(null,foundation.templates.twitter_power.call(null,id)));
}));
foundation.rendering.stats_msg = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"stats","stats",1123661841),foundation.app.message.path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null)], true, false);
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null),(function (renderer,p__46346,input_queue,parent_id,id){var vec__46347 = p__46346;var _ = cljs.core.nth.call(null,vec__46347,0,null);var path = cljs.core.nth.call(null,vec__46347,1,null);var ___$1 = cljs.core.nth.call(null,vec__46347,2,null);var val = cljs.core.nth.call(null,vec__46347,3,null);enfocus.core.at.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.rendering.css_id.call(null,parent_id)], null),enfocus.core.append.call(null,foundation.templates.dashboard.call(null,id)));
var seq__46348 = cljs.core.seq.call(null,foundation.templates.dashboard_metrics);var chunk__46349 = null;var count__46350 = 0;var i__46351 = 0;while(true){
if((i__46351 < count__46350))
{var vec__46352 = cljs.core._nth.call(null,chunk__46349,i__46351);var metric = cljs.core.nth.call(null,vec__46352,0,null);var cpa = cljs.core.nth.call(null,vec__46352,1,null);var rate = cljs.core.nth.call(null,vec__46352,2,null);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric)].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__46348,chunk__46349,count__46350,i__46351,vec__46352,metric,cpa,rate){
return (function (){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"total","total",1124454070)));
});})(seq__46348,chunk__46349,count__46350,i__46351,vec__46352,metric,cpa,rate))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__46348,chunk__46349,count__46350,i__46351,vec__46352,metric,cpa,rate){
return (function (){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"cpa","cpa",1014002950)));
});})(seq__46348,chunk__46349,count__46350,i__46351,vec__46352,metric,cpa,rate))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__46348,chunk__46349,count__46350,i__46351,vec__46352,metric,cpa,rate){
return (function (){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"rate","rate",1017397330)));
});})(seq__46348,chunk__46349,count__46350,i__46351,vec__46352,metric,cpa,rate))
));
{
var G__46354 = seq__46348;
var G__46355 = chunk__46349;
var G__46356 = count__46350;
var G__46357 = (i__46351 + 1);
seq__46348 = G__46354;
chunk__46349 = G__46355;
count__46350 = G__46356;
i__46351 = G__46357;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__46348);if(temp__4092__auto__)
{var seq__46348__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46348__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__46348__$1);{
var G__46358 = cljs.core.chunk_rest.call(null,seq__46348__$1);
var G__46359 = c__14547__auto__;
var G__46360 = cljs.core.count.call(null,c__14547__auto__);
var G__46361 = 0;
seq__46348 = G__46358;
chunk__46349 = G__46359;
count__46350 = G__46360;
i__46351 = G__46361;
continue;
}
} else
{var vec__46353 = cljs.core.first.call(null,seq__46348__$1);var metric = cljs.core.nth.call(null,vec__46353,0,null);var cpa = cljs.core.nth.call(null,vec__46353,1,null);var rate = cljs.core.nth.call(null,vec__46353,2,null);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric)].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__46348,chunk__46349,count__46350,i__46351,vec__46353,metric,cpa,rate,seq__46348__$1,temp__4092__auto__){
return (function (){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"total","total",1124454070)));
});})(seq__46348,chunk__46349,count__46350,i__46351,vec__46353,metric,cpa,rate,seq__46348__$1,temp__4092__auto__))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__46348,chunk__46349,count__46350,i__46351,vec__46353,metric,cpa,rate,seq__46348__$1,temp__4092__auto__){
return (function (){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"cpa","cpa",1014002950)));
});})(seq__46348,chunk__46349,count__46350,i__46351,vec__46353,metric,cpa,rate,seq__46348__$1,temp__4092__auto__))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__46348,chunk__46349,count__46350,i__46351,vec__46353,metric,cpa,rate,seq__46348__$1,temp__4092__auto__){
return (function (){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"rate","rate",1017397330)));
});})(seq__46348,chunk__46349,count__46350,i__46351,vec__46353,metric,cpa,rate,seq__46348__$1,temp__4092__auto__))
));
{
var G__46362 = cljs.core.next.call(null,seq__46348__$1);
var G__46363 = null;
var G__46364 = 0;
var G__46365 = 0;
seq__46348 = G__46362;
chunk__46349 = G__46363;
count__46350 = G__46364;
i__46351 = G__46365;
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
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null),(function (renderer,p__46366,input_queue,parent_id,id){var vec__46367 = p__46366;var _ = cljs.core.nth.call(null,vec__46367,0,null);var path = cljs.core.nth.call(null,vec__46367,1,null);var ___$1 = cljs.core.nth.call(null,vec__46367,2,null);var map__46368 = cljs.core.nth.call(null,vec__46367,3,null);var map__46368__$1 = ((cljs.core.seq_QMARK_.call(null,map__46368))?cljs.core.apply.call(null,cljs.core.hash_map,map__46368):map__46368);var val = map__46368__$1;var model = cljs.core.get.call(null,map__46368__$1,new cljs.core.Keyword(null,"model","model",1117974171));var end_time = cljs.core.get.call(null,map__46368__$1,new cljs.core.Keyword(null,"end-time","end-time",2693279729));var start_time = cljs.core.get.call(null,map__46368__$1,new cljs.core.Keyword(null,"start-time","start-time",3689550026));var stats = cljs.core.get.call(null,map__46368__$1,new cljs.core.Keyword(null,"stats","stats",1123661841));if(cljs.core.truth_(start_time))
{var start_picker = foundation.rendering.start_date_picker.call(null,renderer,start_time);var end_picker = foundation.rendering.end_date_picker.call(null,renderer,end_time);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,[cljs.core.str("#"),cljs.core.str(parent_id)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#resource-id","#resource-id",2471321257)], null),enfocus.core.content.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(model)));
var seq__46369 = cljs.core.seq.call(null,foundation.templates.dashboard_metrics);var chunk__46370 = null;var count__46371 = 0;var i__46372 = 0;while(true){
if((i__46372 < count__46371))
{var vec__46373 = cljs.core._nth.call(null,chunk__46370,i__46372);var metric = cljs.core.nth.call(null,vec__46373,0,null);var cpa = cljs.core.nth.call(null,vec__46373,1,null);var rate = cljs.core.nth.call(null,vec__46373,2,null);var total_46375 = cljs.core.get.call(null,new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(stats),metric);var _cpa_46376 = cljs.core.get.call(null,new cljs.core.Keyword(null,"cpa","cpa",1014002950).cljs$core$IFn$_invoke$arity$1(stats),metric);var _rate_46377 = cljs.core.get.call(null,new cljs.core.Keyword(null,"rate","rate",1017397330).cljs$core$IFn$_invoke$arity$1(stats),metric);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric)].join('')], null),enfocus.core.content.call(null,[cljs.core.str(total_46375),cljs.core.str(" "),cljs.core.str(metric)].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),enfocus.core.content.call(null,[cljs.core.str(_cpa_46376),cljs.core.str(" "),cljs.core.str(cpa)].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),enfocus.core.content.call(null,[cljs.core.str(_rate_46377),cljs.core.str(" "),cljs.core.str(rate)].join('')));
{
var G__46378 = seq__46369;
var G__46379 = chunk__46370;
var G__46380 = count__46371;
var G__46381 = (i__46372 + 1);
seq__46369 = G__46378;
chunk__46370 = G__46379;
count__46371 = G__46380;
i__46372 = G__46381;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__46369);if(temp__4092__auto__)
{var seq__46369__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46369__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__46369__$1);{
var G__46382 = cljs.core.chunk_rest.call(null,seq__46369__$1);
var G__46383 = c__14547__auto__;
var G__46384 = cljs.core.count.call(null,c__14547__auto__);
var G__46385 = 0;
seq__46369 = G__46382;
chunk__46370 = G__46383;
count__46371 = G__46384;
i__46372 = G__46385;
continue;
}
} else
{var vec__46374 = cljs.core.first.call(null,seq__46369__$1);var metric = cljs.core.nth.call(null,vec__46374,0,null);var cpa = cljs.core.nth.call(null,vec__46374,1,null);var rate = cljs.core.nth.call(null,vec__46374,2,null);var total_46386 = cljs.core.get.call(null,new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(stats),metric);var _cpa_46387 = cljs.core.get.call(null,new cljs.core.Keyword(null,"cpa","cpa",1014002950).cljs$core$IFn$_invoke$arity$1(stats),metric);var _rate_46388 = cljs.core.get.call(null,new cljs.core.Keyword(null,"rate","rate",1017397330).cljs$core$IFn$_invoke$arity$1(stats),metric);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric)].join('')], null),enfocus.core.content.call(null,[cljs.core.str(total_46386),cljs.core.str(" "),cljs.core.str(metric)].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),enfocus.core.content.call(null,[cljs.core.str(_cpa_46387),cljs.core.str(" "),cljs.core.str(cpa)].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),enfocus.core.content.call(null,[cljs.core.str(_rate_46388),cljs.core.str(" "),cljs.core.str(rate)].join('')));
{
var G__46389 = cljs.core.next.call(null,seq__46369__$1);
var G__46390 = null;
var G__46391 = 0;
var G__46392 = 0;
seq__46369 = G__46389;
chunk__46370 = G__46390;
count__46371 = G__46391;
i__46372 = G__46392;
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
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null),(function (renderer,p__46393,input_queue,parent_id,id){var vec__46394 = p__46393;var _ = cljs.core.nth.call(null,vec__46394,0,null);var path = cljs.core.nth.call(null,vec__46394,1,null);var ___$1 = cljs.core.nth.call(null,vec__46394,2,null);var ___$2 = cljs.core.nth.call(null,vec__46394,3,null);return enfocus.core.at.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.rendering.css_id.call(null,parent_id)], null),enfocus.core.append.call(null,foundation.templates.datagrid.call(null,id)));
}));
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null),(function (renderer,p__46395,input_queue,parent_id,id){var vec__46396 = p__46395;var _ = cljs.core.nth.call(null,vec__46396,0,null);var path = cljs.core.nth.call(null,vec__46396,1,null);var ___$1 = cljs.core.nth.call(null,vec__46396,2,null);var val = cljs.core.nth.call(null,vec__46396,3,null);return foundation.app.render.set_data_BANG_.call(null,renderer,path,new cljs.core.Keyword(null,"resource","resource",672839552).cljs$core$IFn$_invoke$arity$1(val));
}));
foundation.rendering.create_msg = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"create","create",3956577390),foundation.app.message.path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null)], true, false);
foundation.rendering.save_msg = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"save","save",1017427183),foundation.app.message.path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null)], true, false);
foundation.rendering.delete_msg = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"delete","delete",3973413149),foundation.app.message.path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null)], true, false);
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null),(function (renderer,p__46397,input_queue,parent_id,id){var vec__46398 = p__46397;var _ = cljs.core.nth.call(null,vec__46398,0,null);var path = cljs.core.nth.call(null,vec__46398,1,null);var ___$1 = cljs.core.nth.call(null,vec__46398,2,null);var val = cljs.core.nth.call(null,vec__46398,3,null);var model = foundation.app.render.get_data.call(null,renderer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null));return enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",3798183098)], null),enfocus.core.content.call(null,foundation.templates.datagrid_table.call(null,model,cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#new","button#new",1370997825)], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return cljs.core.async.put_BANG_.call(null,input_queue,foundation.rendering.create_msg);
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#save","button#save",3494015904)], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return cljs.core.async.put_BANG_.call(null,input_queue,foundation.rendering.save_msg);
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#delete","button#delete",4563292046)], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return cljs.core.async.put_BANG_.call(null,input_queue,foundation.rendering.delete_msg);
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#dupe","button#dupe",3493588073)], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return cljs.core.async.put_BANG_.call(null,input_queue,foundation.rendering.create_msg);
})));
}));
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null),(function (renderer,p__46399,input_queue,parent_id,id){var vec__46400 = p__46399;var _ = cljs.core.nth.call(null,vec__46400,0,null);var path = cljs.core.nth.call(null,vec__46400,1,null);var ___$1 = cljs.core.nth.call(null,vec__46400,2,null);var val = cljs.core.nth.call(null,vec__46400,3,null);var model = foundation.app.render.get_data.call(null,renderer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null));return enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",3798183098)], null),enfocus.core.content.call(null,foundation.templates.datagrid_table.call(null,model,val)));
}));
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null),(function (renderer,p__46401,input_queue,parent_id,id){var vec__46402 = p__46401;var _ = cljs.core.nth.call(null,vec__46402,0,null);var path = cljs.core.nth.call(null,vec__46402,1,null);var ___$1 = cljs.core.nth.call(null,vec__46402,2,null);var ___$2 = cljs.core.nth.call(null,vec__46402,3,null);var chart = foundation.chart.highchart.call(null);return foundation.app.render.set_data_BANG_.call(null,renderer,path,chart);
}));
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null),(function (renderer,p__46403,input_queue,parent_id,id){var vec__46404 = p__46403;var _ = cljs.core.nth.call(null,vec__46404,0,null);var path = cljs.core.nth.call(null,vec__46404,1,null);var ___$1 = cljs.core.nth.call(null,vec__46404,2,null);var val = cljs.core.nth.call(null,vec__46404,3,null);var chart = foundation.app.render.get_data.call(null,renderer,path);var start_time = (new Date(new cljs.core.Keyword(null,"start-time","start-time",3689550026).cljs$core$IFn$_invoke$arity$1(val))).getTime();var seq__46405_46409 = cljs.core.seq.call(null,chart.series);var chunk__46406_46410 = null;var count__46407_46411 = 0;var i__46408_46412 = 0;while(true){
if((i__46408_46412 < count__46407_46411))
{var series_46413 = cljs.core._nth.call(null,chunk__46406_46410,i__46408_46412);series_46413.remove();
{
var G__46414 = seq__46405_46409;
var G__46415 = chunk__46406_46410;
var G__46416 = count__46407_46411;
var G__46417 = (i__46408_46412 + 1);
seq__46405_46409 = G__46414;
chunk__46406_46410 = G__46415;
count__46407_46411 = G__46416;
i__46408_46412 = G__46417;
continue;
}
} else
{var temp__4092__auto___46418 = cljs.core.seq.call(null,seq__46405_46409);if(temp__4092__auto___46418)
{var seq__46405_46419__$1 = temp__4092__auto___46418;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46405_46419__$1))
{var c__14547__auto___46420 = cljs.core.chunk_first.call(null,seq__46405_46419__$1);{
var G__46421 = cljs.core.chunk_rest.call(null,seq__46405_46419__$1);
var G__46422 = c__14547__auto___46420;
var G__46423 = cljs.core.count.call(null,c__14547__auto___46420);
var G__46424 = 0;
seq__46405_46409 = G__46421;
chunk__46406_46410 = G__46422;
count__46407_46411 = G__46423;
i__46408_46412 = G__46424;
continue;
}
} else
{var series_46425 = cljs.core.first.call(null,seq__46405_46419__$1);series_46425.remove();
{
var G__46426 = cljs.core.next.call(null,seq__46405_46419__$1);
var G__46427 = null;
var G__46428 = 0;
var G__46429 = 0;
seq__46405_46409 = G__46426;
chunk__46406_46410 = G__46427;
count__46407_46411 = G__46428;
i__46408_46412 = G__46429;
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
HTMLCollection.prototype.cljs$core$ISeq$_rest$arity$1 = (function (x){var x__$1 = this;var iter__14516__auto__ = (function iter__46430(s__46431){return (new cljs.core.LazySeq(null,(function (){var s__46431__$1 = s__46431;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__46431__$1);if(temp__4092__auto__)
{var s__46431__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__46431__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__46431__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__46433 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__46432 = 0;while(true){
if((i__46432 < size__14515__auto__))
{var i = cljs.core._nth.call(null,c__14514__auto__,i__46432);cljs.core.chunk_append.call(null,b__46433,(x__$1[i]));
{
var G__46434 = (i__46432 + 1);
i__46432 = G__46434;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46433),iter__46430.call(null,cljs.core.chunk_rest.call(null,s__46431__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46433),null);
}
} else
{var i = cljs.core.first.call(null,s__46431__$2);return cljs.core.cons.call(null,(x__$1[i]),iter__46430.call(null,cljs.core.rest.call(null,s__46431__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14516__auto__.call(null,cljs.core.range.call(null,x__$1.length));
});
foundation.rendering.th_widths = (function th_widths(ths,widths){return cljs.core.reduce.call(null,(function (ws,p__46437){var vec__46438 = p__46437;var width = cljs.core.nth.call(null,vec__46438,0,null);var th = cljs.core.nth.call(null,vec__46438,1,null);var th_width = goog.style.getBounds(th).width;if((width > th_width))
{return cljs.core.conj.call(null,ws,width);
} else
{return cljs.core.conj.call(null,ws,th_width);
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,widths,ths));
});
foundation.rendering.td_widths = (function td_widths(rows){return cljs.core.reduce.call(null,(function (ws,td){return cljs.core.conj.call(null,ws,goog.style.getBounds(td).width);
}),cljs.core.PersistentVector.EMPTY,cljs.core.first.call(null,rows).cells);
});
foundation.rendering.full_td_widths = (function full_td_widths(th_widths,ths,row_width,table_width){return cljs.core.reduce.call(null,(function (ws,p__46441){var vec__46442 = p__46441;var width = cljs.core.nth.call(null,vec__46442,0,null);var th = cljs.core.nth.call(null,vec__46442,1,null);var th_width = goog.style.getBounds(th).width;var new_width = (table_width * (width / row_width));if((new_width > width))
{goog.style.setWidth(th,new_width);
return cljs.core.conj.call(null,ws,new_width);
} else
{goog.style.setWidth(th,width);
return cljs.core.conj.call(null,ws,width);
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,th_widths,ths));
});
foundation.rendering.fix_column_widths_BANG_ = (function fix_column_widths_BANG_(){var vec__46461 = cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__46443_SHARP_){return document.querySelector(dommy.core.selector.call(null,p1__46443_SHARP_));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".panel-body",".panel-body",1210123755),new cljs.core.Keyword(null,"tbody","tbody",1124062088),new cljs.core.Keyword(null,"thead","thead",1124231110)], null)));var panel_body = cljs.core.nth.call(null,vec__46461,0,null);var tbody = cljs.core.nth.call(null,vec__46461,1,null);var thead = cljs.core.nth.call(null,vec__46461,2,null);var table_width = goog.style.getBounds(panel_body).width;var rows = tbody.rows;var ths = cljs.core.first.call(null,thead.rows).cells;var td_widths = foundation.rendering.td_widths.call(null,rows);var th_widths = foundation.rendering.th_widths.call(null,ths,td_widths);var row_width = cljs.core.reduce.call(null,cljs.core._PLUS_,th_widths);var th_widths__$1 = foundation.rendering.full_td_widths.call(null,th_widths,ths,row_width,table_width);if((row_width > table_width))
{goog.style.setWidth(cljs.core.first.call(null,thead.rows),row_width);
} else
{goog.style.setWidth(cljs.core.first.call(null,thead.rows),table_width);
}
var seq__46462 = cljs.core.seq.call(null,rows);var chunk__46463 = null;var count__46464 = 0;var i__46465 = 0;while(true){
if((i__46465 < count__46464))
{var tr = cljs.core._nth.call(null,chunk__46463,i__46465);var seq__46466_46478 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,th_widths__$1,tr.cells));var chunk__46467_46479 = null;var count__46468_46480 = 0;var i__46469_46481 = 0;while(true){
if((i__46469_46481 < count__46468_46480))
{var vec__46470_46482 = cljs.core._nth.call(null,chunk__46467_46479,i__46469_46481);var width_46483 = cljs.core.nth.call(null,vec__46470_46482,0,null);var td_46484 = cljs.core.nth.call(null,vec__46470_46482,1,null);goog.style.setWidth(td_46484,width_46483);
{
var G__46485 = seq__46466_46478;
var G__46486 = chunk__46467_46479;
var G__46487 = count__46468_46480;
var G__46488 = (i__46469_46481 + 1);
seq__46466_46478 = G__46485;
chunk__46467_46479 = G__46486;
count__46468_46480 = G__46487;
i__46469_46481 = G__46488;
continue;
}
} else
{var temp__4092__auto___46489 = cljs.core.seq.call(null,seq__46466_46478);if(temp__4092__auto___46489)
{var seq__46466_46490__$1 = temp__4092__auto___46489;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46466_46490__$1))
{var c__14547__auto___46491 = cljs.core.chunk_first.call(null,seq__46466_46490__$1);{
var G__46492 = cljs.core.chunk_rest.call(null,seq__46466_46490__$1);
var G__46493 = c__14547__auto___46491;
var G__46494 = cljs.core.count.call(null,c__14547__auto___46491);
var G__46495 = 0;
seq__46466_46478 = G__46492;
chunk__46467_46479 = G__46493;
count__46468_46480 = G__46494;
i__46469_46481 = G__46495;
continue;
}
} else
{var vec__46471_46496 = cljs.core.first.call(null,seq__46466_46490__$1);var width_46497 = cljs.core.nth.call(null,vec__46471_46496,0,null);var td_46498 = cljs.core.nth.call(null,vec__46471_46496,1,null);goog.style.setWidth(td_46498,width_46497);
{
var G__46499 = cljs.core.next.call(null,seq__46466_46490__$1);
var G__46500 = null;
var G__46501 = 0;
var G__46502 = 0;
seq__46466_46478 = G__46499;
chunk__46467_46479 = G__46500;
count__46468_46480 = G__46501;
i__46469_46481 = G__46502;
continue;
}
}
} else
{}
}
break;
}
{
var G__46503 = seq__46462;
var G__46504 = chunk__46463;
var G__46505 = count__46464;
var G__46506 = (i__46465 + 1);
seq__46462 = G__46503;
chunk__46463 = G__46504;
count__46464 = G__46505;
i__46465 = G__46506;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__46462);if(temp__4092__auto__)
{var seq__46462__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46462__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__46462__$1);{
var G__46507 = cljs.core.chunk_rest.call(null,seq__46462__$1);
var G__46508 = c__14547__auto__;
var G__46509 = cljs.core.count.call(null,c__14547__auto__);
var G__46510 = 0;
seq__46462 = G__46507;
chunk__46463 = G__46508;
count__46464 = G__46509;
i__46465 = G__46510;
continue;
}
} else
{var tr = cljs.core.first.call(null,seq__46462__$1);var seq__46472_46511 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,th_widths__$1,tr.cells));var chunk__46473_46512 = null;var count__46474_46513 = 0;var i__46475_46514 = 0;while(true){
if((i__46475_46514 < count__46474_46513))
{var vec__46476_46515 = cljs.core._nth.call(null,chunk__46473_46512,i__46475_46514);var width_46516 = cljs.core.nth.call(null,vec__46476_46515,0,null);var td_46517 = cljs.core.nth.call(null,vec__46476_46515,1,null);goog.style.setWidth(td_46517,width_46516);
{
var G__46518 = seq__46472_46511;
var G__46519 = chunk__46473_46512;
var G__46520 = count__46474_46513;
var G__46521 = (i__46475_46514 + 1);
seq__46472_46511 = G__46518;
chunk__46473_46512 = G__46519;
count__46474_46513 = G__46520;
i__46475_46514 = G__46521;
continue;
}
} else
{var temp__4092__auto___46522__$1 = cljs.core.seq.call(null,seq__46472_46511);if(temp__4092__auto___46522__$1)
{var seq__46472_46523__$1 = temp__4092__auto___46522__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46472_46523__$1))
{var c__14547__auto___46524 = cljs.core.chunk_first.call(null,seq__46472_46523__$1);{
var G__46525 = cljs.core.chunk_rest.call(null,seq__46472_46523__$1);
var G__46526 = c__14547__auto___46524;
var G__46527 = cljs.core.count.call(null,c__14547__auto___46524);
var G__46528 = 0;
seq__46472_46511 = G__46525;
chunk__46473_46512 = G__46526;
count__46474_46513 = G__46527;
i__46475_46514 = G__46528;
continue;
}
} else
{var vec__46477_46529 = cljs.core.first.call(null,seq__46472_46523__$1);var width_46530 = cljs.core.nth.call(null,vec__46477_46529,0,null);var td_46531 = cljs.core.nth.call(null,vec__46477_46529,1,null);goog.style.setWidth(td_46531,width_46530);
{
var G__46532 = cljs.core.next.call(null,seq__46472_46523__$1);
var G__46533 = null;
var G__46534 = 0;
var G__46535 = 0;
seq__46472_46511 = G__46532;
chunk__46473_46512 = G__46533;
count__46474_46513 = G__46534;
i__46475_46514 = G__46535;
continue;
}
}
} else
{}
}
break;
}
{
var G__46536 = cljs.core.next.call(null,seq__46462__$1);
var G__46537 = null;
var G__46538 = 0;
var G__46539 = 0;
seq__46462 = G__46536;
chunk__46463 = G__46537;
count__46464 = G__46538;
i__46465 = G__46539;
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