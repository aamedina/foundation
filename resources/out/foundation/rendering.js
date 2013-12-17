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
cljs.core._add_method.call(null,foundation.app.render.node_create,cljs.core.PersistentVector.EMPTY,(function (renderer,p__370742,input_queue,parent_id,id){var vec__370743 = p__370742;var _ = cljs.core.nth.call(null,vec__370743,0,null);var path = cljs.core.nth.call(null,vec__370743,1,null);var ___$1 = cljs.core.nth.call(null,vec__370743,2,null);var val = cljs.core.nth.call(null,vec__370743,3,null);return enfocus.core.at.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",1016933652)], null),enfocus.core.append.call(null,foundation.templates.twitter_power.call(null,id)));
}));
foundation.rendering.stats_msg = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"stats","stats",1123661841),foundation.app.message.path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null)], true, false);
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null),(function (renderer,p__370744,input_queue,parent_id,id){var vec__370745 = p__370744;var _ = cljs.core.nth.call(null,vec__370745,0,null);var path = cljs.core.nth.call(null,vec__370745,1,null);var ___$1 = cljs.core.nth.call(null,vec__370745,2,null);var val = cljs.core.nth.call(null,vec__370745,3,null);enfocus.core.at.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.rendering.css_id.call(null,parent_id)], null),enfocus.core.append.call(null,foundation.templates.dashboard.call(null,id)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#Impressions")].join('')], null),enfocus.core.add_class.call(null,"active"));
var seq__370746 = cljs.core.seq.call(null,foundation.templates.dashboard_metrics);var chunk__370747 = null;var count__370748 = 0;var i__370749 = 0;while(true){
if((i__370749 < count__370748))
{var vec__370750 = cljs.core._nth.call(null,chunk__370747,i__370749);var metric = cljs.core.nth.call(null,vec__370750,0,null);var cpa = cljs.core.nth.call(null,vec__370750,1,null);var rate = cljs.core.nth.call(null,vec__370750,2,null);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric)].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__370746,chunk__370747,count__370748,i__370749,vec__370750,metric,cpa,rate){
return (function (e){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"total","total",1124454070)));
});})(seq__370746,chunk__370747,count__370748,i__370749,vec__370750,metric,cpa,rate))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__370746,chunk__370747,count__370748,i__370749,vec__370750,metric,cpa,rate){
return (function (){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"cpa","cpa",1014002950)));
});})(seq__370746,chunk__370747,count__370748,i__370749,vec__370750,metric,cpa,rate))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__370746,chunk__370747,count__370748,i__370749,vec__370750,metric,cpa,rate){
return (function (){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"rate","rate",1017397330)));
});})(seq__370746,chunk__370747,count__370748,i__370749,vec__370750,metric,cpa,rate))
));
{
var G__370752 = seq__370746;
var G__370753 = chunk__370747;
var G__370754 = count__370748;
var G__370755 = (i__370749 + 1);
seq__370746 = G__370752;
chunk__370747 = G__370753;
count__370748 = G__370754;
i__370749 = G__370755;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__370746);if(temp__4092__auto__)
{var seq__370746__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__370746__$1))
{var c__14708__auto__ = cljs.core.chunk_first.call(null,seq__370746__$1);{
var G__370756 = cljs.core.chunk_rest.call(null,seq__370746__$1);
var G__370757 = c__14708__auto__;
var G__370758 = cljs.core.count.call(null,c__14708__auto__);
var G__370759 = 0;
seq__370746 = G__370756;
chunk__370747 = G__370757;
count__370748 = G__370758;
i__370749 = G__370759;
continue;
}
} else
{var vec__370751 = cljs.core.first.call(null,seq__370746__$1);var metric = cljs.core.nth.call(null,vec__370751,0,null);var cpa = cljs.core.nth.call(null,vec__370751,1,null);var rate = cljs.core.nth.call(null,vec__370751,2,null);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric)].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__370746,chunk__370747,count__370748,i__370749,vec__370751,metric,cpa,rate,seq__370746__$1,temp__4092__auto__){
return (function (e){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"total","total",1124454070)));
});})(seq__370746,chunk__370747,count__370748,i__370749,vec__370751,metric,cpa,rate,seq__370746__$1,temp__4092__auto__))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__370746,chunk__370747,count__370748,i__370749,vec__370751,metric,cpa,rate,seq__370746__$1,temp__4092__auto__){
return (function (){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"cpa","cpa",1014002950)));
});})(seq__370746,chunk__370747,count__370748,i__370749,vec__370751,metric,cpa,rate,seq__370746__$1,temp__4092__auto__))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__370746,chunk__370747,count__370748,i__370749,vec__370751,metric,cpa,rate,seq__370746__$1,temp__4092__auto__){
return (function (){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"rate","rate",1017397330)));
});})(seq__370746,chunk__370747,count__370748,i__370749,vec__370751,metric,cpa,rate,seq__370746__$1,temp__4092__auto__))
));
{
var G__370760 = cljs.core.next.call(null,seq__370746__$1);
var G__370761 = null;
var G__370762 = 0;
var G__370763 = 0;
seq__370746 = G__370760;
chunk__370747 = G__370761;
count__370748 = G__370762;
i__370749 = G__370763;
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
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null),(function (renderer,p__370764,input_queue,parent_id,id){var vec__370765 = p__370764;var _ = cljs.core.nth.call(null,vec__370765,0,null);var path = cljs.core.nth.call(null,vec__370765,1,null);var ___$1 = cljs.core.nth.call(null,vec__370765,2,null);var map__370766 = cljs.core.nth.call(null,vec__370765,3,null);var map__370766__$1 = ((cljs.core.seq_QMARK_.call(null,map__370766))?cljs.core.apply.call(null,cljs.core.hash_map,map__370766):map__370766);var val = map__370766__$1;var model = cljs.core.get.call(null,map__370766__$1,new cljs.core.Keyword(null,"model","model",1117974171));var end_time = cljs.core.get.call(null,map__370766__$1,new cljs.core.Keyword(null,"end-time","end-time",2693279729));var start_time = cljs.core.get.call(null,map__370766__$1,new cljs.core.Keyword(null,"start-time","start-time",3689550026));var stats = cljs.core.get.call(null,map__370766__$1,new cljs.core.Keyword(null,"stats","stats",1123661841));if(cljs.core.truth_(start_time))
{var start_picker = foundation.rendering.start_date_picker.call(null,renderer,start_time);var end_picker = foundation.rendering.end_date_picker.call(null,renderer,end_time);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,[cljs.core.str("#"),cljs.core.str(parent_id)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#resource-id","#resource-id",2471321257)], null),enfocus.core.content.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(model)));
var seq__370767 = cljs.core.seq.call(null,foundation.templates.dashboard_metrics);var chunk__370768 = null;var count__370769 = 0;var i__370770 = 0;while(true){
if((i__370770 < count__370769))
{var vec__370771 = cljs.core._nth.call(null,chunk__370768,i__370770);var metric = cljs.core.nth.call(null,vec__370771,0,null);var cpa = cljs.core.nth.call(null,vec__370771,1,null);var rate = cljs.core.nth.call(null,vec__370771,2,null);var total_370773 = cljs.core.get.call(null,new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(stats),metric);var _cpa_370774 = cljs.core.get.call(null,new cljs.core.Keyword(null,"cpa","cpa",1014002950).cljs$core$IFn$_invoke$arity$1(stats),metric);var _rate_370775 = cljs.core.get.call(null,new cljs.core.Keyword(null,"rate","rate",1017397330).cljs$core$IFn$_invoke$arity$1(stats),metric);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric)].join('')], null),enfocus.core.content.call(null,[cljs.core.str(total_370773),cljs.core.str(" "),cljs.core.str(metric)].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),enfocus.core.content.call(null,[cljs.core.str(_cpa_370774),cljs.core.str(" "),cljs.core.str(cpa)].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),enfocus.core.content.call(null,[cljs.core.str(_rate_370775),cljs.core.str(" "),cljs.core.str(rate)].join('')));
{
var G__370776 = seq__370767;
var G__370777 = chunk__370768;
var G__370778 = count__370769;
var G__370779 = (i__370770 + 1);
seq__370767 = G__370776;
chunk__370768 = G__370777;
count__370769 = G__370778;
i__370770 = G__370779;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__370767);if(temp__4092__auto__)
{var seq__370767__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__370767__$1))
{var c__14708__auto__ = cljs.core.chunk_first.call(null,seq__370767__$1);{
var G__370780 = cljs.core.chunk_rest.call(null,seq__370767__$1);
var G__370781 = c__14708__auto__;
var G__370782 = cljs.core.count.call(null,c__14708__auto__);
var G__370783 = 0;
seq__370767 = G__370780;
chunk__370768 = G__370781;
count__370769 = G__370782;
i__370770 = G__370783;
continue;
}
} else
{var vec__370772 = cljs.core.first.call(null,seq__370767__$1);var metric = cljs.core.nth.call(null,vec__370772,0,null);var cpa = cljs.core.nth.call(null,vec__370772,1,null);var rate = cljs.core.nth.call(null,vec__370772,2,null);var total_370784 = cljs.core.get.call(null,new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(stats),metric);var _cpa_370785 = cljs.core.get.call(null,new cljs.core.Keyword(null,"cpa","cpa",1014002950).cljs$core$IFn$_invoke$arity$1(stats),metric);var _rate_370786 = cljs.core.get.call(null,new cljs.core.Keyword(null,"rate","rate",1017397330).cljs$core$IFn$_invoke$arity$1(stats),metric);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric)].join('')], null),enfocus.core.content.call(null,[cljs.core.str(total_370784),cljs.core.str(" "),cljs.core.str(metric)].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),enfocus.core.content.call(null,[cljs.core.str(_cpa_370785),cljs.core.str(" "),cljs.core.str(cpa)].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),enfocus.core.content.call(null,[cljs.core.str(_rate_370786),cljs.core.str(" "),cljs.core.str(rate)].join('')));
{
var G__370787 = cljs.core.next.call(null,seq__370767__$1);
var G__370788 = null;
var G__370789 = 0;
var G__370790 = 0;
seq__370767 = G__370787;
chunk__370768 = G__370788;
count__370769 = G__370789;
i__370770 = G__370790;
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
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null),(function (renderer,p__370791,input_queue,parent_id,id){var vec__370792 = p__370791;var _ = cljs.core.nth.call(null,vec__370792,0,null);var path = cljs.core.nth.call(null,vec__370792,1,null);var ___$1 = cljs.core.nth.call(null,vec__370792,2,null);var ___$2 = cljs.core.nth.call(null,vec__370792,3,null);return enfocus.core.at.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.rendering.css_id.call(null,parent_id)], null),enfocus.core.append.call(null,foundation.templates.datagrid.call(null,id)));
}));
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null),(function (renderer,p__370793,input_queue,parent_id,id){var vec__370794 = p__370793;var _ = cljs.core.nth.call(null,vec__370794,0,null);var path = cljs.core.nth.call(null,vec__370794,1,null);var ___$1 = cljs.core.nth.call(null,vec__370794,2,null);var val = cljs.core.nth.call(null,vec__370794,3,null);if(cljs.core._EQ_.call(null,foundation.app.render.get_data.call(null,renderer,path),new cljs.core.Keyword(null,"resource","resource",672839552).cljs$core$IFn$_invoke$arity$1(val)))
{return null;
} else
{return foundation.app.render.set_data_BANG_.call(null,renderer,path,new cljs.core.Keyword(null,"resource","resource",672839552).cljs$core$IFn$_invoke$arity$1(val));
}
}));
foundation.rendering.create_msg = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"create","create",3956577390),foundation.app.message.path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null)], true, false);
foundation.rendering.save_msg = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"save","save",1017427183),foundation.app.message.path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null)], true, false);
foundation.rendering.delete_msg = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"delete","delete",3973413149),foundation.app.message.path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null)], true, false);
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null),(function (renderer,p__370795,input_queue,parent_id,id){var vec__370796 = p__370795;var _ = cljs.core.nth.call(null,vec__370796,0,null);var path = cljs.core.nth.call(null,vec__370796,1,null);var ___$1 = cljs.core.nth.call(null,vec__370796,2,null);var val = cljs.core.nth.call(null,vec__370796,3,null);var model = foundation.app.render.get_data.call(null,renderer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null));enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",3798183098)], null),enfocus.core.content.call(null,foundation.templates.datagrid_table.call(null,model,cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#new","button#new",1370997825)], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return cljs.core.async.put_BANG_.call(null,input_queue,foundation.rendering.create_msg);
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#save","button#save",3494015904)], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return cljs.core.async.put_BANG_.call(null,input_queue,foundation.rendering.save_msg);
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#delete","button#delete",4563292046)], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return cljs.core.async.put_BANG_.call(null,input_queue,foundation.rendering.delete_msg);
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#dupe","button#dupe",3493588073)], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return cljs.core.async.put_BANG_.call(null,input_queue,foundation.rendering.create_msg);
})));
return foundation.rendering.as_resizable.call(null);
}));
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null),(function (renderer,p__370797,input_queue,parent_id,id){var vec__370798 = p__370797;var _ = cljs.core.nth.call(null,vec__370798,0,null);var path = cljs.core.nth.call(null,vec__370798,1,null);var ___$1 = cljs.core.nth.call(null,vec__370798,2,null);var val = cljs.core.nth.call(null,vec__370798,3,null);var model = foundation.app.render.get_data.call(null,renderer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null));var row_count = cljs.core.count.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByTagName("tbody"))[0]).rows);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",3798183098)], null),enfocus.core.content.call(null,foundation.templates.datagrid_table.call(null,model,val)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body>tr","div.panel-body>tr",3056946278)], null),enfocus.core.content.call(null,foundation.templates.datagrid_table.call(null,model,val)));
foundation.rendering.set_datagrid_height_BANG_.call(null);
return foundation.rendering.fix_column_widths_BANG_.call(null);
}));
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null),(function (renderer,p__370799,input_queue,parent_id,id){var vec__370800 = p__370799;var _ = cljs.core.nth.call(null,vec__370800,0,null);var path = cljs.core.nth.call(null,vec__370800,1,null);var ___$1 = cljs.core.nth.call(null,vec__370800,2,null);var ___$2 = cljs.core.nth.call(null,vec__370800,3,null);var chart = foundation.chart.highchart.call(null);return foundation.app.render.set_data_BANG_.call(null,renderer,path,chart);
}));
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null),(function (renderer,p__370801,input_queue,parent_id,id){var vec__370802 = p__370801;var _ = cljs.core.nth.call(null,vec__370802,0,null);var path = cljs.core.nth.call(null,vec__370802,1,null);var ___$1 = cljs.core.nth.call(null,vec__370802,2,null);var val = cljs.core.nth.call(null,vec__370802,3,null);var chart = foundation.app.render.get_data.call(null,renderer,path);var start_time = (new Date(new cljs.core.Keyword(null,"start-time","start-time",3689550026).cljs$core$IFn$_invoke$arity$1(val))).getTime();var seq__370803_370807 = cljs.core.seq.call(null,chart.series);var chunk__370804_370808 = null;var count__370805_370809 = 0;var i__370806_370810 = 0;while(true){
if((i__370806_370810 < count__370805_370809))
{var series_370811 = cljs.core._nth.call(null,chunk__370804_370808,i__370806_370810);series_370811.remove();
{
var G__370812 = seq__370803_370807;
var G__370813 = chunk__370804_370808;
var G__370814 = count__370805_370809;
var G__370815 = (i__370806_370810 + 1);
seq__370803_370807 = G__370812;
chunk__370804_370808 = G__370813;
count__370805_370809 = G__370814;
i__370806_370810 = G__370815;
continue;
}
} else
{var temp__4092__auto___370816 = cljs.core.seq.call(null,seq__370803_370807);if(temp__4092__auto___370816)
{var seq__370803_370817__$1 = temp__4092__auto___370816;if(cljs.core.chunked_seq_QMARK_.call(null,seq__370803_370817__$1))
{var c__14708__auto___370818 = cljs.core.chunk_first.call(null,seq__370803_370817__$1);{
var G__370819 = cljs.core.chunk_rest.call(null,seq__370803_370817__$1);
var G__370820 = c__14708__auto___370818;
var G__370821 = cljs.core.count.call(null,c__14708__auto___370818);
var G__370822 = 0;
seq__370803_370807 = G__370819;
chunk__370804_370808 = G__370820;
count__370805_370809 = G__370821;
i__370806_370810 = G__370822;
continue;
}
} else
{var series_370823 = cljs.core.first.call(null,seq__370803_370817__$1);series_370823.remove();
{
var G__370824 = cljs.core.next.call(null,seq__370803_370817__$1);
var G__370825 = null;
var G__370826 = 0;
var G__370827 = 0;
seq__370803_370807 = G__370824;
chunk__370804_370808 = G__370825;
count__370805_370809 = G__370826;
i__370806_370810 = G__370827;
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
HTMLCollection.prototype.cljs$core$ISeq$_rest$arity$1 = (function (x){var x__$1 = this;var iter__14677__auto__ = (function iter__370828(s__370829){return (new cljs.core.LazySeq(null,(function (){var s__370829__$1 = s__370829;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__370829__$1);if(temp__4092__auto__)
{var s__370829__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__370829__$2))
{var c__14675__auto__ = cljs.core.chunk_first.call(null,s__370829__$2);var size__14676__auto__ = cljs.core.count.call(null,c__14675__auto__);var b__370831 = cljs.core.chunk_buffer.call(null,size__14676__auto__);if((function (){var i__370830 = 0;while(true){
if((i__370830 < size__14676__auto__))
{var i = cljs.core._nth.call(null,c__14675__auto__,i__370830);cljs.core.chunk_append.call(null,b__370831,(x__$1[i]));
{
var G__370832 = (i__370830 + 1);
i__370830 = G__370832;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__370831),iter__370828.call(null,cljs.core.chunk_rest.call(null,s__370829__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__370831),null);
}
} else
{var i = cljs.core.first.call(null,s__370829__$2);return cljs.core.cons.call(null,(x__$1[i]),iter__370828.call(null,cljs.core.rest.call(null,s__370829__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14677__auto__.call(null,cljs.core.range.call(null,x__$1.length));
});
foundation.rendering.th_widths = (function th_widths(ths,widths){return cljs.core.reduce.call(null,(function (ws,p__370835){var vec__370836 = p__370835;var width = cljs.core.nth.call(null,vec__370836,0,null);var th = cljs.core.nth.call(null,vec__370836,1,null);var th_width = goog.style.getBounds(th).width;if((width > th_width))
{return cljs.core.conj.call(null,ws,width);
} else
{return cljs.core.conj.call(null,ws,th_width);
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,widths,ths));
});
foundation.rendering.td_widths = (function td_widths(rows){return cljs.core.reduce.call(null,(function (ws,td){return cljs.core.conj.call(null,ws,goog.style.getBounds(td).width);
}),cljs.core.PersistentVector.EMPTY,cljs.core.first.call(null,rows).cells);
});
foundation.rendering.full_td_widths = (function full_td_widths(th_widths,ths,row_width,table_width){return cljs.core.reduce.call(null,(function (ws,p__370839){var vec__370840 = p__370839;var width = cljs.core.nth.call(null,vec__370840,0,null);var th = cljs.core.nth.call(null,vec__370840,1,null);var th_width = width;var new_width = (table_width * (width / row_width));if((new_width > width))
{goog.style.setWidth(th,new_width);
return cljs.core.conj.call(null,ws,new_width);
} else
{goog.style.setWidth(th,width);
return cljs.core.conj.call(null,ws,width);
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,th_widths,ths));
});
foundation.rendering.fix_column_widths_BANG_ = (function fix_column_widths_BANG_(){var vec__370859 = cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__370841_SHARP_){return document.querySelector(dommy.core.selector.call(null,p1__370841_SHARP_));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".panel-body",".panel-body",1210123755),new cljs.core.Keyword(null,"tbody","tbody",1124062088),new cljs.core.Keyword(null,"thead","thead",1124231110)], null)));var panel_body = cljs.core.nth.call(null,vec__370859,0,null);var tbody = cljs.core.nth.call(null,vec__370859,1,null);var thead = cljs.core.nth.call(null,vec__370859,2,null);var table_width = goog.style.getBounds(tbody).width;var rows = tbody.rows;var ths = cljs.core.first.call(null,thead.rows).cells;var td_widths = foundation.rendering.td_widths.call(null,rows);var th_widths = foundation.rendering.th_widths.call(null,ths,td_widths);var row_width = cljs.core.reduce.call(null,cljs.core._PLUS_,th_widths);var th_widths__$1 = foundation.rendering.full_td_widths.call(null,th_widths,ths,row_width,table_width);var seq__370860 = cljs.core.seq.call(null,rows);var chunk__370861 = null;var count__370862 = 0;var i__370863 = 0;while(true){
if((i__370863 < count__370862))
{var tr = cljs.core._nth.call(null,chunk__370861,i__370863);var seq__370864_370876 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,th_widths__$1,tr.cells));var chunk__370865_370877 = null;var count__370866_370878 = 0;var i__370867_370879 = 0;while(true){
if((i__370867_370879 < count__370866_370878))
{var vec__370868_370880 = cljs.core._nth.call(null,chunk__370865_370877,i__370867_370879);var width_370881 = cljs.core.nth.call(null,vec__370868_370880,0,null);var td_370882 = cljs.core.nth.call(null,vec__370868_370880,1,null);goog.style.setWidth(td_370882,width_370881);
{
var G__370883 = seq__370864_370876;
var G__370884 = chunk__370865_370877;
var G__370885 = count__370866_370878;
var G__370886 = (i__370867_370879 + 1);
seq__370864_370876 = G__370883;
chunk__370865_370877 = G__370884;
count__370866_370878 = G__370885;
i__370867_370879 = G__370886;
continue;
}
} else
{var temp__4092__auto___370887 = cljs.core.seq.call(null,seq__370864_370876);if(temp__4092__auto___370887)
{var seq__370864_370888__$1 = temp__4092__auto___370887;if(cljs.core.chunked_seq_QMARK_.call(null,seq__370864_370888__$1))
{var c__14708__auto___370889 = cljs.core.chunk_first.call(null,seq__370864_370888__$1);{
var G__370890 = cljs.core.chunk_rest.call(null,seq__370864_370888__$1);
var G__370891 = c__14708__auto___370889;
var G__370892 = cljs.core.count.call(null,c__14708__auto___370889);
var G__370893 = 0;
seq__370864_370876 = G__370890;
chunk__370865_370877 = G__370891;
count__370866_370878 = G__370892;
i__370867_370879 = G__370893;
continue;
}
} else
{var vec__370869_370894 = cljs.core.first.call(null,seq__370864_370888__$1);var width_370895 = cljs.core.nth.call(null,vec__370869_370894,0,null);var td_370896 = cljs.core.nth.call(null,vec__370869_370894,1,null);goog.style.setWidth(td_370896,width_370895);
{
var G__370897 = cljs.core.next.call(null,seq__370864_370888__$1);
var G__370898 = null;
var G__370899 = 0;
var G__370900 = 0;
seq__370864_370876 = G__370897;
chunk__370865_370877 = G__370898;
count__370866_370878 = G__370899;
i__370867_370879 = G__370900;
continue;
}
}
} else
{}
}
break;
}
{
var G__370901 = seq__370860;
var G__370902 = chunk__370861;
var G__370903 = count__370862;
var G__370904 = (i__370863 + 1);
seq__370860 = G__370901;
chunk__370861 = G__370902;
count__370862 = G__370903;
i__370863 = G__370904;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__370860);if(temp__4092__auto__)
{var seq__370860__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__370860__$1))
{var c__14708__auto__ = cljs.core.chunk_first.call(null,seq__370860__$1);{
var G__370905 = cljs.core.chunk_rest.call(null,seq__370860__$1);
var G__370906 = c__14708__auto__;
var G__370907 = cljs.core.count.call(null,c__14708__auto__);
var G__370908 = 0;
seq__370860 = G__370905;
chunk__370861 = G__370906;
count__370862 = G__370907;
i__370863 = G__370908;
continue;
}
} else
{var tr = cljs.core.first.call(null,seq__370860__$1);var seq__370870_370909 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,th_widths__$1,tr.cells));var chunk__370871_370910 = null;var count__370872_370911 = 0;var i__370873_370912 = 0;while(true){
if((i__370873_370912 < count__370872_370911))
{var vec__370874_370913 = cljs.core._nth.call(null,chunk__370871_370910,i__370873_370912);var width_370914 = cljs.core.nth.call(null,vec__370874_370913,0,null);var td_370915 = cljs.core.nth.call(null,vec__370874_370913,1,null);goog.style.setWidth(td_370915,width_370914);
{
var G__370916 = seq__370870_370909;
var G__370917 = chunk__370871_370910;
var G__370918 = count__370872_370911;
var G__370919 = (i__370873_370912 + 1);
seq__370870_370909 = G__370916;
chunk__370871_370910 = G__370917;
count__370872_370911 = G__370918;
i__370873_370912 = G__370919;
continue;
}
} else
{var temp__4092__auto___370920__$1 = cljs.core.seq.call(null,seq__370870_370909);if(temp__4092__auto___370920__$1)
{var seq__370870_370921__$1 = temp__4092__auto___370920__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__370870_370921__$1))
{var c__14708__auto___370922 = cljs.core.chunk_first.call(null,seq__370870_370921__$1);{
var G__370923 = cljs.core.chunk_rest.call(null,seq__370870_370921__$1);
var G__370924 = c__14708__auto___370922;
var G__370925 = cljs.core.count.call(null,c__14708__auto___370922);
var G__370926 = 0;
seq__370870_370909 = G__370923;
chunk__370871_370910 = G__370924;
count__370872_370911 = G__370925;
i__370873_370912 = G__370926;
continue;
}
} else
{var vec__370875_370927 = cljs.core.first.call(null,seq__370870_370921__$1);var width_370928 = cljs.core.nth.call(null,vec__370875_370927,0,null);var td_370929 = cljs.core.nth.call(null,vec__370875_370927,1,null);goog.style.setWidth(td_370929,width_370928);
{
var G__370930 = cljs.core.next.call(null,seq__370870_370921__$1);
var G__370931 = null;
var G__370932 = 0;
var G__370933 = 0;
seq__370870_370909 = G__370930;
chunk__370871_370910 = G__370931;
count__370872_370911 = G__370932;
i__370873_370912 = G__370933;
continue;
}
}
} else
{}
}
break;
}
{
var G__370934 = cljs.core.next.call(null,seq__370860__$1);
var G__370935 = null;
var G__370936 = 0;
var G__370937 = 0;
seq__370860 = G__370934;
chunk__370861 = G__370935;
count__370862 = G__370936;
i__370863 = G__370937;
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