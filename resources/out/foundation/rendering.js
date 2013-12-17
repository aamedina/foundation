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
cljs.core._add_method.call(null,foundation.app.render.node_create,cljs.core.PersistentVector.EMPTY,(function (renderer,p__361634,input_queue,parent_id,id){var vec__361635 = p__361634;var _ = cljs.core.nth.call(null,vec__361635,0,null);var path = cljs.core.nth.call(null,vec__361635,1,null);var ___$1 = cljs.core.nth.call(null,vec__361635,2,null);var val = cljs.core.nth.call(null,vec__361635,3,null);return enfocus.core.at.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",1016933652)], null),enfocus.core.append.call(null,foundation.templates.twitter_power.call(null,id)));
}));
foundation.rendering.stats_msg = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"stats","stats",1123661841),foundation.app.message.path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null)], true, false);
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null),(function (renderer,p__361636,input_queue,parent_id,id){var vec__361637 = p__361636;var _ = cljs.core.nth.call(null,vec__361637,0,null);var path = cljs.core.nth.call(null,vec__361637,1,null);var ___$1 = cljs.core.nth.call(null,vec__361637,2,null);var val = cljs.core.nth.call(null,vec__361637,3,null);enfocus.core.at.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.rendering.css_id.call(null,parent_id)], null),enfocus.core.append.call(null,foundation.templates.dashboard.call(null,id)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#Impressions")].join('')], null),enfocus.core.add_class.call(null,"active"));
var seq__361638 = cljs.core.seq.call(null,foundation.templates.dashboard_metrics);var chunk__361639 = null;var count__361640 = 0;var i__361641 = 0;while(true){
if((i__361641 < count__361640))
{var vec__361642 = cljs.core._nth.call(null,chunk__361639,i__361641);var metric = cljs.core.nth.call(null,vec__361642,0,null);var cpa = cljs.core.nth.call(null,vec__361642,1,null);var rate = cljs.core.nth.call(null,vec__361642,2,null);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric)].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__361638,chunk__361639,count__361640,i__361641,vec__361642,metric,cpa,rate){
return (function (e){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"total","total",1124454070)));
});})(seq__361638,chunk__361639,count__361640,i__361641,vec__361642,metric,cpa,rate))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__361638,chunk__361639,count__361640,i__361641,vec__361642,metric,cpa,rate){
return (function (){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"cpa","cpa",1014002950)));
});})(seq__361638,chunk__361639,count__361640,i__361641,vec__361642,metric,cpa,rate))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__361638,chunk__361639,count__361640,i__361641,vec__361642,metric,cpa,rate){
return (function (){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"rate","rate",1017397330)));
});})(seq__361638,chunk__361639,count__361640,i__361641,vec__361642,metric,cpa,rate))
));
{
var G__361644 = seq__361638;
var G__361645 = chunk__361639;
var G__361646 = count__361640;
var G__361647 = (i__361641 + 1);
seq__361638 = G__361644;
chunk__361639 = G__361645;
count__361640 = G__361646;
i__361641 = G__361647;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__361638);if(temp__4092__auto__)
{var seq__361638__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__361638__$1))
{var c__14708__auto__ = cljs.core.chunk_first.call(null,seq__361638__$1);{
var G__361648 = cljs.core.chunk_rest.call(null,seq__361638__$1);
var G__361649 = c__14708__auto__;
var G__361650 = cljs.core.count.call(null,c__14708__auto__);
var G__361651 = 0;
seq__361638 = G__361648;
chunk__361639 = G__361649;
count__361640 = G__361650;
i__361641 = G__361651;
continue;
}
} else
{var vec__361643 = cljs.core.first.call(null,seq__361638__$1);var metric = cljs.core.nth.call(null,vec__361643,0,null);var cpa = cljs.core.nth.call(null,vec__361643,1,null);var rate = cljs.core.nth.call(null,vec__361643,2,null);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric)].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__361638,chunk__361639,count__361640,i__361641,vec__361643,metric,cpa,rate,seq__361638__$1,temp__4092__auto__){
return (function (e){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"total","total",1124454070)));
});})(seq__361638,chunk__361639,count__361640,i__361641,vec__361643,metric,cpa,rate,seq__361638__$1,temp__4092__auto__))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__361638,chunk__361639,count__361640,i__361641,vec__361643,metric,cpa,rate,seq__361638__$1,temp__4092__auto__){
return (function (){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"cpa","cpa",1014002950)));
});})(seq__361638,chunk__361639,count__361640,i__361641,vec__361643,metric,cpa,rate,seq__361638__$1,temp__4092__auto__))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__361638,chunk__361639,count__361640,i__361641,vec__361643,metric,cpa,rate,seq__361638__$1,temp__4092__auto__){
return (function (){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"rate","rate",1017397330)));
});})(seq__361638,chunk__361639,count__361640,i__361641,vec__361643,metric,cpa,rate,seq__361638__$1,temp__4092__auto__))
));
{
var G__361652 = cljs.core.next.call(null,seq__361638__$1);
var G__361653 = null;
var G__361654 = 0;
var G__361655 = 0;
seq__361638 = G__361652;
chunk__361639 = G__361653;
count__361640 = G__361654;
i__361641 = G__361655;
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
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null),(function (renderer,p__361656,input_queue,parent_id,id){var vec__361657 = p__361656;var _ = cljs.core.nth.call(null,vec__361657,0,null);var path = cljs.core.nth.call(null,vec__361657,1,null);var ___$1 = cljs.core.nth.call(null,vec__361657,2,null);var map__361658 = cljs.core.nth.call(null,vec__361657,3,null);var map__361658__$1 = ((cljs.core.seq_QMARK_.call(null,map__361658))?cljs.core.apply.call(null,cljs.core.hash_map,map__361658):map__361658);var val = map__361658__$1;var model = cljs.core.get.call(null,map__361658__$1,new cljs.core.Keyword(null,"model","model",1117974171));var end_time = cljs.core.get.call(null,map__361658__$1,new cljs.core.Keyword(null,"end-time","end-time",2693279729));var start_time = cljs.core.get.call(null,map__361658__$1,new cljs.core.Keyword(null,"start-time","start-time",3689550026));var stats = cljs.core.get.call(null,map__361658__$1,new cljs.core.Keyword(null,"stats","stats",1123661841));if(cljs.core.truth_(start_time))
{var start_picker = foundation.rendering.start_date_picker.call(null,renderer,start_time);var end_picker = foundation.rendering.end_date_picker.call(null,renderer,end_time);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,[cljs.core.str("#"),cljs.core.str(parent_id)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#resource-id","#resource-id",2471321257)], null),enfocus.core.content.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(model)));
var seq__361659 = cljs.core.seq.call(null,foundation.templates.dashboard_metrics);var chunk__361660 = null;var count__361661 = 0;var i__361662 = 0;while(true){
if((i__361662 < count__361661))
{var vec__361663 = cljs.core._nth.call(null,chunk__361660,i__361662);var metric = cljs.core.nth.call(null,vec__361663,0,null);var cpa = cljs.core.nth.call(null,vec__361663,1,null);var rate = cljs.core.nth.call(null,vec__361663,2,null);var total_361665 = cljs.core.get.call(null,new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(stats),metric);var _cpa_361666 = cljs.core.get.call(null,new cljs.core.Keyword(null,"cpa","cpa",1014002950).cljs$core$IFn$_invoke$arity$1(stats),metric);var _rate_361667 = cljs.core.get.call(null,new cljs.core.Keyword(null,"rate","rate",1017397330).cljs$core$IFn$_invoke$arity$1(stats),metric);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric)].join('')], null),enfocus.core.content.call(null,[cljs.core.str(total_361665),cljs.core.str(" "),cljs.core.str(metric)].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),enfocus.core.content.call(null,[cljs.core.str(_cpa_361666),cljs.core.str(" "),cljs.core.str(cpa)].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),enfocus.core.content.call(null,[cljs.core.str(_rate_361667),cljs.core.str(" "),cljs.core.str(rate)].join('')));
{
var G__361668 = seq__361659;
var G__361669 = chunk__361660;
var G__361670 = count__361661;
var G__361671 = (i__361662 + 1);
seq__361659 = G__361668;
chunk__361660 = G__361669;
count__361661 = G__361670;
i__361662 = G__361671;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__361659);if(temp__4092__auto__)
{var seq__361659__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__361659__$1))
{var c__14708__auto__ = cljs.core.chunk_first.call(null,seq__361659__$1);{
var G__361672 = cljs.core.chunk_rest.call(null,seq__361659__$1);
var G__361673 = c__14708__auto__;
var G__361674 = cljs.core.count.call(null,c__14708__auto__);
var G__361675 = 0;
seq__361659 = G__361672;
chunk__361660 = G__361673;
count__361661 = G__361674;
i__361662 = G__361675;
continue;
}
} else
{var vec__361664 = cljs.core.first.call(null,seq__361659__$1);var metric = cljs.core.nth.call(null,vec__361664,0,null);var cpa = cljs.core.nth.call(null,vec__361664,1,null);var rate = cljs.core.nth.call(null,vec__361664,2,null);var total_361676 = cljs.core.get.call(null,new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(stats),metric);var _cpa_361677 = cljs.core.get.call(null,new cljs.core.Keyword(null,"cpa","cpa",1014002950).cljs$core$IFn$_invoke$arity$1(stats),metric);var _rate_361678 = cljs.core.get.call(null,new cljs.core.Keyword(null,"rate","rate",1017397330).cljs$core$IFn$_invoke$arity$1(stats),metric);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric)].join('')], null),enfocus.core.content.call(null,[cljs.core.str(total_361676),cljs.core.str(" "),cljs.core.str(metric)].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),enfocus.core.content.call(null,[cljs.core.str(_cpa_361677),cljs.core.str(" "),cljs.core.str(cpa)].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),enfocus.core.content.call(null,[cljs.core.str(_rate_361678),cljs.core.str(" "),cljs.core.str(rate)].join('')));
{
var G__361679 = cljs.core.next.call(null,seq__361659__$1);
var G__361680 = null;
var G__361681 = 0;
var G__361682 = 0;
seq__361659 = G__361679;
chunk__361660 = G__361680;
count__361661 = G__361681;
i__361662 = G__361682;
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
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null),(function (renderer,p__361683,input_queue,parent_id,id){var vec__361684 = p__361683;var _ = cljs.core.nth.call(null,vec__361684,0,null);var path = cljs.core.nth.call(null,vec__361684,1,null);var ___$1 = cljs.core.nth.call(null,vec__361684,2,null);var ___$2 = cljs.core.nth.call(null,vec__361684,3,null);return enfocus.core.at.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.rendering.css_id.call(null,parent_id)], null),enfocus.core.append.call(null,foundation.templates.datagrid.call(null,id)));
}));
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null),(function (renderer,p__361685,input_queue,parent_id,id){var vec__361686 = p__361685;var _ = cljs.core.nth.call(null,vec__361686,0,null);var path = cljs.core.nth.call(null,vec__361686,1,null);var ___$1 = cljs.core.nth.call(null,vec__361686,2,null);var val = cljs.core.nth.call(null,vec__361686,3,null);if(cljs.core._EQ_.call(null,foundation.app.render.get_data.call(null,renderer,path),new cljs.core.Keyword(null,"resource","resource",672839552).cljs$core$IFn$_invoke$arity$1(val)))
{return null;
} else
{return foundation.app.render.set_data_BANG_.call(null,renderer,path,new cljs.core.Keyword(null,"resource","resource",672839552).cljs$core$IFn$_invoke$arity$1(val));
}
}));
foundation.rendering.create_msg = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"create","create",3956577390),foundation.app.message.path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null)], true, false);
foundation.rendering.save_msg = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"save","save",1017427183),foundation.app.message.path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null)], true, false);
foundation.rendering.delete_msg = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"delete","delete",3973413149),foundation.app.message.path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null)], true, false);
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null),(function (renderer,p__361687,input_queue,parent_id,id){var vec__361688 = p__361687;var _ = cljs.core.nth.call(null,vec__361688,0,null);var path = cljs.core.nth.call(null,vec__361688,1,null);var ___$1 = cljs.core.nth.call(null,vec__361688,2,null);var val = cljs.core.nth.call(null,vec__361688,3,null);var model = foundation.app.render.get_data.call(null,renderer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null));enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",3798183098)], null),enfocus.core.content.call(null,foundation.templates.datagrid_table.call(null,model,cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#new","button#new",1370997825)], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return cljs.core.async.put_BANG_.call(null,input_queue,foundation.rendering.create_msg);
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#save","button#save",3494015904)], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return cljs.core.async.put_BANG_.call(null,input_queue,foundation.rendering.save_msg);
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#delete","button#delete",4563292046)], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return cljs.core.async.put_BANG_.call(null,input_queue,foundation.rendering.delete_msg);
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#dupe","button#dupe",3493588073)], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return cljs.core.async.put_BANG_.call(null,input_queue,foundation.rendering.create_msg);
})));
return foundation.rendering.as_resizable.call(null);
}));
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null),(function (renderer,p__361689,input_queue,parent_id,id){var vec__361690 = p__361689;var _ = cljs.core.nth.call(null,vec__361690,0,null);var path = cljs.core.nth.call(null,vec__361690,1,null);var ___$1 = cljs.core.nth.call(null,vec__361690,2,null);var val = cljs.core.nth.call(null,vec__361690,3,null);var model = foundation.app.render.get_data.call(null,renderer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null));var row_count = cljs.core.count.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByTagName("tbody"))[0]).rows);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",3798183098)], null),enfocus.core.content.call(null,foundation.templates.datagrid_table.call(null,model,val)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body>tr","div.panel-body>tr",3056946278)], null),enfocus.core.content.call(null,foundation.templates.datagrid_table.call(null,model,val)));
foundation.rendering.set_datagrid_height_BANG_.call(null);
return foundation.rendering.fix_column_widths_BANG_.call(null);
}));
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null),(function (renderer,p__361691,input_queue,parent_id,id){var vec__361692 = p__361691;var _ = cljs.core.nth.call(null,vec__361692,0,null);var path = cljs.core.nth.call(null,vec__361692,1,null);var ___$1 = cljs.core.nth.call(null,vec__361692,2,null);var ___$2 = cljs.core.nth.call(null,vec__361692,3,null);var chart = foundation.chart.highchart.call(null);return foundation.app.render.set_data_BANG_.call(null,renderer,path,chart);
}));
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null),(function (renderer,p__361693,input_queue,parent_id,id){var vec__361694 = p__361693;var _ = cljs.core.nth.call(null,vec__361694,0,null);var path = cljs.core.nth.call(null,vec__361694,1,null);var ___$1 = cljs.core.nth.call(null,vec__361694,2,null);var val = cljs.core.nth.call(null,vec__361694,3,null);var chart = foundation.app.render.get_data.call(null,renderer,path);var start_time = (new Date(new cljs.core.Keyword(null,"start-time","start-time",3689550026).cljs$core$IFn$_invoke$arity$1(val))).getTime();var seq__361695_361699 = cljs.core.seq.call(null,chart.series);var chunk__361696_361700 = null;var count__361697_361701 = 0;var i__361698_361702 = 0;while(true){
if((i__361698_361702 < count__361697_361701))
{var series_361703 = cljs.core._nth.call(null,chunk__361696_361700,i__361698_361702);series_361703.remove();
{
var G__361704 = seq__361695_361699;
var G__361705 = chunk__361696_361700;
var G__361706 = count__361697_361701;
var G__361707 = (i__361698_361702 + 1);
seq__361695_361699 = G__361704;
chunk__361696_361700 = G__361705;
count__361697_361701 = G__361706;
i__361698_361702 = G__361707;
continue;
}
} else
{var temp__4092__auto___361708 = cljs.core.seq.call(null,seq__361695_361699);if(temp__4092__auto___361708)
{var seq__361695_361709__$1 = temp__4092__auto___361708;if(cljs.core.chunked_seq_QMARK_.call(null,seq__361695_361709__$1))
{var c__14708__auto___361710 = cljs.core.chunk_first.call(null,seq__361695_361709__$1);{
var G__361711 = cljs.core.chunk_rest.call(null,seq__361695_361709__$1);
var G__361712 = c__14708__auto___361710;
var G__361713 = cljs.core.count.call(null,c__14708__auto___361710);
var G__361714 = 0;
seq__361695_361699 = G__361711;
chunk__361696_361700 = G__361712;
count__361697_361701 = G__361713;
i__361698_361702 = G__361714;
continue;
}
} else
{var series_361715 = cljs.core.first.call(null,seq__361695_361709__$1);series_361715.remove();
{
var G__361716 = cljs.core.next.call(null,seq__361695_361709__$1);
var G__361717 = null;
var G__361718 = 0;
var G__361719 = 0;
seq__361695_361699 = G__361716;
chunk__361696_361700 = G__361717;
count__361697_361701 = G__361718;
i__361698_361702 = G__361719;
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
HTMLCollection.prototype.cljs$core$ISeq$_rest$arity$1 = (function (x){var x__$1 = this;var iter__14677__auto__ = (function iter__361720(s__361721){return (new cljs.core.LazySeq(null,(function (){var s__361721__$1 = s__361721;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__361721__$1);if(temp__4092__auto__)
{var s__361721__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__361721__$2))
{var c__14675__auto__ = cljs.core.chunk_first.call(null,s__361721__$2);var size__14676__auto__ = cljs.core.count.call(null,c__14675__auto__);var b__361723 = cljs.core.chunk_buffer.call(null,size__14676__auto__);if((function (){var i__361722 = 0;while(true){
if((i__361722 < size__14676__auto__))
{var i = cljs.core._nth.call(null,c__14675__auto__,i__361722);cljs.core.chunk_append.call(null,b__361723,(x__$1[i]));
{
var G__361724 = (i__361722 + 1);
i__361722 = G__361724;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__361723),iter__361720.call(null,cljs.core.chunk_rest.call(null,s__361721__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__361723),null);
}
} else
{var i = cljs.core.first.call(null,s__361721__$2);return cljs.core.cons.call(null,(x__$1[i]),iter__361720.call(null,cljs.core.rest.call(null,s__361721__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14677__auto__.call(null,cljs.core.range.call(null,x__$1.length));
});
foundation.rendering.th_widths = (function th_widths(ths,widths){return cljs.core.reduce.call(null,(function (ws,p__361727){var vec__361728 = p__361727;var width = cljs.core.nth.call(null,vec__361728,0,null);var th = cljs.core.nth.call(null,vec__361728,1,null);var th_width = goog.style.getBounds(th).width;if((width > th_width))
{return cljs.core.conj.call(null,ws,width);
} else
{return cljs.core.conj.call(null,ws,th_width);
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,widths,ths));
});
foundation.rendering.td_widths = (function td_widths(rows){return cljs.core.reduce.call(null,(function (ws,td){return cljs.core.conj.call(null,ws,goog.style.getBounds(td).width);
}),cljs.core.PersistentVector.EMPTY,cljs.core.first.call(null,rows).cells);
});
foundation.rendering.full_td_widths = (function full_td_widths(th_widths,ths,row_width,table_width){return cljs.core.reduce.call(null,(function (ws,p__361731){var vec__361732 = p__361731;var width = cljs.core.nth.call(null,vec__361732,0,null);var th = cljs.core.nth.call(null,vec__361732,1,null);var th_width = width;var new_width = (table_width * (width / row_width));if((new_width > width))
{goog.style.setWidth(th,new_width);
return cljs.core.conj.call(null,ws,new_width);
} else
{goog.style.setWidth(th,width);
return cljs.core.conj.call(null,ws,width);
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,th_widths,ths));
});
foundation.rendering.fix_column_widths_BANG_ = (function fix_column_widths_BANG_(){var vec__361751 = cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__361733_SHARP_){return document.querySelector(dommy.core.selector.call(null,p1__361733_SHARP_));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".panel-body",".panel-body",1210123755),new cljs.core.Keyword(null,"tbody","tbody",1124062088),new cljs.core.Keyword(null,"thead","thead",1124231110)], null)));var panel_body = cljs.core.nth.call(null,vec__361751,0,null);var tbody = cljs.core.nth.call(null,vec__361751,1,null);var thead = cljs.core.nth.call(null,vec__361751,2,null);var table_width = goog.style.getBounds(tbody).width;var rows = tbody.rows;var ths = cljs.core.first.call(null,thead.rows).cells;var td_widths = foundation.rendering.td_widths.call(null,rows);var th_widths = foundation.rendering.th_widths.call(null,ths,td_widths);var row_width = cljs.core.reduce.call(null,cljs.core._PLUS_,th_widths);var th_widths__$1 = foundation.rendering.full_td_widths.call(null,th_widths,ths,row_width,table_width);var seq__361752 = cljs.core.seq.call(null,rows);var chunk__361753 = null;var count__361754 = 0;var i__361755 = 0;while(true){
if((i__361755 < count__361754))
{var tr = cljs.core._nth.call(null,chunk__361753,i__361755);var seq__361756_361768 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,th_widths__$1,tr.cells));var chunk__361757_361769 = null;var count__361758_361770 = 0;var i__361759_361771 = 0;while(true){
if((i__361759_361771 < count__361758_361770))
{var vec__361760_361772 = cljs.core._nth.call(null,chunk__361757_361769,i__361759_361771);var width_361773 = cljs.core.nth.call(null,vec__361760_361772,0,null);var td_361774 = cljs.core.nth.call(null,vec__361760_361772,1,null);goog.style.setWidth(td_361774,width_361773);
{
var G__361775 = seq__361756_361768;
var G__361776 = chunk__361757_361769;
var G__361777 = count__361758_361770;
var G__361778 = (i__361759_361771 + 1);
seq__361756_361768 = G__361775;
chunk__361757_361769 = G__361776;
count__361758_361770 = G__361777;
i__361759_361771 = G__361778;
continue;
}
} else
{var temp__4092__auto___361779 = cljs.core.seq.call(null,seq__361756_361768);if(temp__4092__auto___361779)
{var seq__361756_361780__$1 = temp__4092__auto___361779;if(cljs.core.chunked_seq_QMARK_.call(null,seq__361756_361780__$1))
{var c__14708__auto___361781 = cljs.core.chunk_first.call(null,seq__361756_361780__$1);{
var G__361782 = cljs.core.chunk_rest.call(null,seq__361756_361780__$1);
var G__361783 = c__14708__auto___361781;
var G__361784 = cljs.core.count.call(null,c__14708__auto___361781);
var G__361785 = 0;
seq__361756_361768 = G__361782;
chunk__361757_361769 = G__361783;
count__361758_361770 = G__361784;
i__361759_361771 = G__361785;
continue;
}
} else
{var vec__361761_361786 = cljs.core.first.call(null,seq__361756_361780__$1);var width_361787 = cljs.core.nth.call(null,vec__361761_361786,0,null);var td_361788 = cljs.core.nth.call(null,vec__361761_361786,1,null);goog.style.setWidth(td_361788,width_361787);
{
var G__361789 = cljs.core.next.call(null,seq__361756_361780__$1);
var G__361790 = null;
var G__361791 = 0;
var G__361792 = 0;
seq__361756_361768 = G__361789;
chunk__361757_361769 = G__361790;
count__361758_361770 = G__361791;
i__361759_361771 = G__361792;
continue;
}
}
} else
{}
}
break;
}
{
var G__361793 = seq__361752;
var G__361794 = chunk__361753;
var G__361795 = count__361754;
var G__361796 = (i__361755 + 1);
seq__361752 = G__361793;
chunk__361753 = G__361794;
count__361754 = G__361795;
i__361755 = G__361796;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__361752);if(temp__4092__auto__)
{var seq__361752__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__361752__$1))
{var c__14708__auto__ = cljs.core.chunk_first.call(null,seq__361752__$1);{
var G__361797 = cljs.core.chunk_rest.call(null,seq__361752__$1);
var G__361798 = c__14708__auto__;
var G__361799 = cljs.core.count.call(null,c__14708__auto__);
var G__361800 = 0;
seq__361752 = G__361797;
chunk__361753 = G__361798;
count__361754 = G__361799;
i__361755 = G__361800;
continue;
}
} else
{var tr = cljs.core.first.call(null,seq__361752__$1);var seq__361762_361801 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,th_widths__$1,tr.cells));var chunk__361763_361802 = null;var count__361764_361803 = 0;var i__361765_361804 = 0;while(true){
if((i__361765_361804 < count__361764_361803))
{var vec__361766_361805 = cljs.core._nth.call(null,chunk__361763_361802,i__361765_361804);var width_361806 = cljs.core.nth.call(null,vec__361766_361805,0,null);var td_361807 = cljs.core.nth.call(null,vec__361766_361805,1,null);goog.style.setWidth(td_361807,width_361806);
{
var G__361808 = seq__361762_361801;
var G__361809 = chunk__361763_361802;
var G__361810 = count__361764_361803;
var G__361811 = (i__361765_361804 + 1);
seq__361762_361801 = G__361808;
chunk__361763_361802 = G__361809;
count__361764_361803 = G__361810;
i__361765_361804 = G__361811;
continue;
}
} else
{var temp__4092__auto___361812__$1 = cljs.core.seq.call(null,seq__361762_361801);if(temp__4092__auto___361812__$1)
{var seq__361762_361813__$1 = temp__4092__auto___361812__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__361762_361813__$1))
{var c__14708__auto___361814 = cljs.core.chunk_first.call(null,seq__361762_361813__$1);{
var G__361815 = cljs.core.chunk_rest.call(null,seq__361762_361813__$1);
var G__361816 = c__14708__auto___361814;
var G__361817 = cljs.core.count.call(null,c__14708__auto___361814);
var G__361818 = 0;
seq__361762_361801 = G__361815;
chunk__361763_361802 = G__361816;
count__361764_361803 = G__361817;
i__361765_361804 = G__361818;
continue;
}
} else
{var vec__361767_361819 = cljs.core.first.call(null,seq__361762_361813__$1);var width_361820 = cljs.core.nth.call(null,vec__361767_361819,0,null);var td_361821 = cljs.core.nth.call(null,vec__361767_361819,1,null);goog.style.setWidth(td_361821,width_361820);
{
var G__361822 = cljs.core.next.call(null,seq__361762_361813__$1);
var G__361823 = null;
var G__361824 = 0;
var G__361825 = 0;
seq__361762_361801 = G__361822;
chunk__361763_361802 = G__361823;
count__361764_361803 = G__361824;
i__361765_361804 = G__361825;
continue;
}
}
} else
{}
}
break;
}
{
var G__361826 = cljs.core.next.call(null,seq__361752__$1);
var G__361827 = null;
var G__361828 = 0;
var G__361829 = 0;
seq__361752 = G__361826;
chunk__361753 = G__361827;
count__361754 = G__361828;
i__361755 = G__361829;
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