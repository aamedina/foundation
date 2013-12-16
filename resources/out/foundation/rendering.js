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
cljs.core._add_method.call(null,foundation.app.render.node_create,cljs.core.PersistentVector.EMPTY,(function (renderer,p__37864,input_queue,parent_id,id){var vec__37865 = p__37864;var _ = cljs.core.nth.call(null,vec__37865,0,null);var path = cljs.core.nth.call(null,vec__37865,1,null);var ___$1 = cljs.core.nth.call(null,vec__37865,2,null);var val = cljs.core.nth.call(null,vec__37865,3,null);return enfocus.core.at.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",1016933652)], null),enfocus.core.append.call(null,foundation.templates.twitter_power.call(null,id)));
}));
foundation.rendering.stats_msg = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"stats","stats",1123661841),foundation.app.message.path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null)], true, false);
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null),(function (renderer,p__37866,input_queue,parent_id,id){var vec__37867 = p__37866;var _ = cljs.core.nth.call(null,vec__37867,0,null);var path = cljs.core.nth.call(null,vec__37867,1,null);var ___$1 = cljs.core.nth.call(null,vec__37867,2,null);var val = cljs.core.nth.call(null,vec__37867,3,null);enfocus.core.at.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.rendering.css_id.call(null,parent_id)], null),enfocus.core.append.call(null,foundation.templates.dashboard.call(null,id)));
var seq__37868 = cljs.core.seq.call(null,foundation.templates.dashboard_metrics);var chunk__37869 = null;var count__37870 = 0;var i__37871 = 0;while(true){
if((i__37871 < count__37870))
{var vec__37872 = cljs.core._nth.call(null,chunk__37869,i__37871);var metric = cljs.core.nth.call(null,vec__37872,0,null);var cpa = cljs.core.nth.call(null,vec__37872,1,null);var rate = cljs.core.nth.call(null,vec__37872,2,null);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric)].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__37868,chunk__37869,count__37870,i__37871,vec__37872,metric,cpa,rate){
return (function (){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"total","total",1124454070)));
});})(seq__37868,chunk__37869,count__37870,i__37871,vec__37872,metric,cpa,rate))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__37868,chunk__37869,count__37870,i__37871,vec__37872,metric,cpa,rate){
return (function (){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"cpa","cpa",1014002950)));
});})(seq__37868,chunk__37869,count__37870,i__37871,vec__37872,metric,cpa,rate))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__37868,chunk__37869,count__37870,i__37871,vec__37872,metric,cpa,rate){
return (function (){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"rate","rate",1017397330)));
});})(seq__37868,chunk__37869,count__37870,i__37871,vec__37872,metric,cpa,rate))
));
{
var G__37874 = seq__37868;
var G__37875 = chunk__37869;
var G__37876 = count__37870;
var G__37877 = (i__37871 + 1);
seq__37868 = G__37874;
chunk__37869 = G__37875;
count__37870 = G__37876;
i__37871 = G__37877;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__37868);if(temp__4092__auto__)
{var seq__37868__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37868__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__37868__$1);{
var G__37878 = cljs.core.chunk_rest.call(null,seq__37868__$1);
var G__37879 = c__14547__auto__;
var G__37880 = cljs.core.count.call(null,c__14547__auto__);
var G__37881 = 0;
seq__37868 = G__37878;
chunk__37869 = G__37879;
count__37870 = G__37880;
i__37871 = G__37881;
continue;
}
} else
{var vec__37873 = cljs.core.first.call(null,seq__37868__$1);var metric = cljs.core.nth.call(null,vec__37873,0,null);var cpa = cljs.core.nth.call(null,vec__37873,1,null);var rate = cljs.core.nth.call(null,vec__37873,2,null);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric)].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__37868,chunk__37869,count__37870,i__37871,vec__37873,metric,cpa,rate,seq__37868__$1,temp__4092__auto__){
return (function (){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"total","total",1124454070)));
});})(seq__37868,chunk__37869,count__37870,i__37871,vec__37873,metric,cpa,rate,seq__37868__$1,temp__4092__auto__))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__37868,chunk__37869,count__37870,i__37871,vec__37873,metric,cpa,rate,seq__37868__$1,temp__4092__auto__){
return (function (){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"cpa","cpa",1014002950)));
});})(seq__37868,chunk__37869,count__37870,i__37871,vec__37873,metric,cpa,rate,seq__37868__$1,temp__4092__auto__))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__37868,chunk__37869,count__37870,i__37871,vec__37873,metric,cpa,rate,seq__37868__$1,temp__4092__auto__){
return (function (){return cljs.core.async.put_BANG_.call(null,input_queue,cljs.core.assoc.call(null,foundation.rendering.stats_msg,new cljs.core.Keyword(null,"metric","metric",4231325986),metric,new cljs.core.Keyword(null,"metric-type","metric-type",3525295273),new cljs.core.Keyword(null,"rate","rate",1017397330)));
});})(seq__37868,chunk__37869,count__37870,i__37871,vec__37873,metric,cpa,rate,seq__37868__$1,temp__4092__auto__))
));
{
var G__37882 = cljs.core.next.call(null,seq__37868__$1);
var G__37883 = null;
var G__37884 = 0;
var G__37885 = 0;
seq__37868 = G__37882;
chunk__37869 = G__37883;
count__37870 = G__37884;
i__37871 = G__37885;
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
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null),(function (renderer,p__37886,input_queue,parent_id,id){var vec__37887 = p__37886;var _ = cljs.core.nth.call(null,vec__37887,0,null);var path = cljs.core.nth.call(null,vec__37887,1,null);var ___$1 = cljs.core.nth.call(null,vec__37887,2,null);var map__37888 = cljs.core.nth.call(null,vec__37887,3,null);var map__37888__$1 = ((cljs.core.seq_QMARK_.call(null,map__37888))?cljs.core.apply.call(null,cljs.core.hash_map,map__37888):map__37888);var val = map__37888__$1;var model = cljs.core.get.call(null,map__37888__$1,new cljs.core.Keyword(null,"model","model",1117974171));var end_time = cljs.core.get.call(null,map__37888__$1,new cljs.core.Keyword(null,"end-time","end-time",2693279729));var start_time = cljs.core.get.call(null,map__37888__$1,new cljs.core.Keyword(null,"start-time","start-time",3689550026));var stats = cljs.core.get.call(null,map__37888__$1,new cljs.core.Keyword(null,"stats","stats",1123661841));if(cljs.core.truth_(start_time))
{var start_picker = foundation.rendering.start_date_picker.call(null,renderer,start_time);var end_picker = foundation.rendering.end_date_picker.call(null,renderer,end_time);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,[cljs.core.str("#"),cljs.core.str(parent_id)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#resource-id","#resource-id",2471321257)], null),enfocus.core.content.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(model)));
var seq__37889 = cljs.core.seq.call(null,foundation.templates.dashboard_metrics);var chunk__37890 = null;var count__37891 = 0;var i__37892 = 0;while(true){
if((i__37892 < count__37891))
{var vec__37893 = cljs.core._nth.call(null,chunk__37890,i__37892);var metric = cljs.core.nth.call(null,vec__37893,0,null);var cpa = cljs.core.nth.call(null,vec__37893,1,null);var rate = cljs.core.nth.call(null,vec__37893,2,null);var total_37895 = cljs.core.get.call(null,new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(stats),metric);var _cpa_37896 = cljs.core.get.call(null,new cljs.core.Keyword(null,"cpa","cpa",1014002950).cljs$core$IFn$_invoke$arity$1(stats),metric);var _rate_37897 = cljs.core.get.call(null,new cljs.core.Keyword(null,"rate","rate",1017397330).cljs$core$IFn$_invoke$arity$1(stats),metric);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric)].join('')], null),enfocus.core.content.call(null,[cljs.core.str(total_37895),cljs.core.str(" "),cljs.core.str(metric)].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),enfocus.core.content.call(null,[cljs.core.str(_cpa_37896),cljs.core.str(" "),cljs.core.str(cpa)].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),enfocus.core.content.call(null,[cljs.core.str(_rate_37897),cljs.core.str(" "),cljs.core.str(rate)].join('')));
{
var G__37898 = seq__37889;
var G__37899 = chunk__37890;
var G__37900 = count__37891;
var G__37901 = (i__37892 + 1);
seq__37889 = G__37898;
chunk__37890 = G__37899;
count__37891 = G__37900;
i__37892 = G__37901;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__37889);if(temp__4092__auto__)
{var seq__37889__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37889__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__37889__$1);{
var G__37902 = cljs.core.chunk_rest.call(null,seq__37889__$1);
var G__37903 = c__14547__auto__;
var G__37904 = cljs.core.count.call(null,c__14547__auto__);
var G__37905 = 0;
seq__37889 = G__37902;
chunk__37890 = G__37903;
count__37891 = G__37904;
i__37892 = G__37905;
continue;
}
} else
{var vec__37894 = cljs.core.first.call(null,seq__37889__$1);var metric = cljs.core.nth.call(null,vec__37894,0,null);var cpa = cljs.core.nth.call(null,vec__37894,1,null);var rate = cljs.core.nth.call(null,vec__37894,2,null);var total_37906 = cljs.core.get.call(null,new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(stats),metric);var _cpa_37907 = cljs.core.get.call(null,new cljs.core.Keyword(null,"cpa","cpa",1014002950).cljs$core$IFn$_invoke$arity$1(stats),metric);var _rate_37908 = cljs.core.get.call(null,new cljs.core.Keyword(null,"rate","rate",1017397330).cljs$core$IFn$_invoke$arity$1(stats),metric);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric)].join('')], null),enfocus.core.content.call(null,[cljs.core.str(total_37906),cljs.core.str(" "),cljs.core.str(metric)].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),enfocus.core.content.call(null,[cljs.core.str(_cpa_37907),cljs.core.str(" "),cljs.core.str(cpa)].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),enfocus.core.content.call(null,[cljs.core.str(_rate_37908),cljs.core.str(" "),cljs.core.str(rate)].join('')));
{
var G__37909 = cljs.core.next.call(null,seq__37889__$1);
var G__37910 = null;
var G__37911 = 0;
var G__37912 = 0;
seq__37889 = G__37909;
chunk__37890 = G__37910;
count__37891 = G__37911;
i__37892 = G__37912;
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
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null),(function (renderer,p__37913,input_queue,parent_id,id){var vec__37914 = p__37913;var _ = cljs.core.nth.call(null,vec__37914,0,null);var path = cljs.core.nth.call(null,vec__37914,1,null);var ___$1 = cljs.core.nth.call(null,vec__37914,2,null);var ___$2 = cljs.core.nth.call(null,vec__37914,3,null);return enfocus.core.at.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.rendering.css_id.call(null,parent_id)], null),enfocus.core.append.call(null,foundation.templates.datagrid.call(null,id)));
}));
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null),(function (renderer,p__37915,input_queue,parent_id,id){var vec__37916 = p__37915;var _ = cljs.core.nth.call(null,vec__37916,0,null);var path = cljs.core.nth.call(null,vec__37916,1,null);var ___$1 = cljs.core.nth.call(null,vec__37916,2,null);var val = cljs.core.nth.call(null,vec__37916,3,null);return foundation.app.render.set_data_BANG_.call(null,renderer,path,new cljs.core.Keyword(null,"resource","resource",672839552).cljs$core$IFn$_invoke$arity$1(val));
}));
foundation.rendering.create_msg = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"create","create",3956577390),foundation.app.message.path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null)], true, false);
foundation.rendering.save_msg = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"save","save",1017427183),foundation.app.message.path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null)], true, false);
foundation.rendering.delete_msg = new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"delete","delete",3973413149),foundation.app.message.path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null)], true, false);
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null),(function (renderer,p__37917,input_queue,parent_id,id){var vec__37918 = p__37917;var _ = cljs.core.nth.call(null,vec__37918,0,null);var path = cljs.core.nth.call(null,vec__37918,1,null);var ___$1 = cljs.core.nth.call(null,vec__37918,2,null);var val = cljs.core.nth.call(null,vec__37918,3,null);var model = foundation.app.render.get_data.call(null,renderer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null));enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",3798183098)], null),enfocus.core.content.call(null,foundation.templates.datagrid_table.call(null,model,cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#new","button#new",1370997825)], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return cljs.core.async.put_BANG_.call(null,input_queue,foundation.rendering.create_msg);
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#save","button#save",3494015904)], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return cljs.core.async.put_BANG_.call(null,input_queue,foundation.rendering.save_msg);
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#delete","button#delete",4563292046)], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return cljs.core.async.put_BANG_.call(null,input_queue,foundation.rendering.delete_msg);
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#dupe","button#dupe",3493588073)], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return cljs.core.async.put_BANG_.call(null,input_queue,foundation.rendering.create_msg);
})));
return foundation.rendering.as_resizable.call(null);
}));
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null),(function (renderer,p__37919,input_queue,parent_id,id){var vec__37920 = p__37919;var _ = cljs.core.nth.call(null,vec__37920,0,null);var path = cljs.core.nth.call(null,vec__37920,1,null);var ___$1 = cljs.core.nth.call(null,vec__37920,2,null);var val = cljs.core.nth.call(null,vec__37920,3,null);var model = foundation.app.render.get_data.call(null,renderer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null));var row_count = cljs.core.count.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByTagName("tbody"))[0]).rows);enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",3798183098)], null),enfocus.core.content.call(null,foundation.templates.datagrid_table.call(null,model,val)));
if((row_count === 0))
{foundation.rendering.set_datagrid_height_BANG_.call(null);
} else
{}
return foundation.rendering.fix_column_widths_BANG_.call(null);
}));
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null),(function (renderer,p__37921,input_queue,parent_id,id){var vec__37922 = p__37921;var _ = cljs.core.nth.call(null,vec__37922,0,null);var path = cljs.core.nth.call(null,vec__37922,1,null);var ___$1 = cljs.core.nth.call(null,vec__37922,2,null);var ___$2 = cljs.core.nth.call(null,vec__37922,3,null);var chart = foundation.chart.highchart.call(null);return foundation.app.render.set_data_BANG_.call(null,renderer,path,chart);
}));
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null),(function (renderer,p__37923,input_queue,parent_id,id){var vec__37924 = p__37923;var _ = cljs.core.nth.call(null,vec__37924,0,null);var path = cljs.core.nth.call(null,vec__37924,1,null);var ___$1 = cljs.core.nth.call(null,vec__37924,2,null);var val = cljs.core.nth.call(null,vec__37924,3,null);var chart = foundation.app.render.get_data.call(null,renderer,path);var start_time = (new Date(new cljs.core.Keyword(null,"start-time","start-time",3689550026).cljs$core$IFn$_invoke$arity$1(val))).getTime();var seq__37925_37929 = cljs.core.seq.call(null,chart.series);var chunk__37926_37930 = null;var count__37927_37931 = 0;var i__37928_37932 = 0;while(true){
if((i__37928_37932 < count__37927_37931))
{var series_37933 = cljs.core._nth.call(null,chunk__37926_37930,i__37928_37932);series_37933.remove();
{
var G__37934 = seq__37925_37929;
var G__37935 = chunk__37926_37930;
var G__37936 = count__37927_37931;
var G__37937 = (i__37928_37932 + 1);
seq__37925_37929 = G__37934;
chunk__37926_37930 = G__37935;
count__37927_37931 = G__37936;
i__37928_37932 = G__37937;
continue;
}
} else
{var temp__4092__auto___37938 = cljs.core.seq.call(null,seq__37925_37929);if(temp__4092__auto___37938)
{var seq__37925_37939__$1 = temp__4092__auto___37938;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37925_37939__$1))
{var c__14547__auto___37940 = cljs.core.chunk_first.call(null,seq__37925_37939__$1);{
var G__37941 = cljs.core.chunk_rest.call(null,seq__37925_37939__$1);
var G__37942 = c__14547__auto___37940;
var G__37943 = cljs.core.count.call(null,c__14547__auto___37940);
var G__37944 = 0;
seq__37925_37929 = G__37941;
chunk__37926_37930 = G__37942;
count__37927_37931 = G__37943;
i__37928_37932 = G__37944;
continue;
}
} else
{var series_37945 = cljs.core.first.call(null,seq__37925_37939__$1);series_37945.remove();
{
var G__37946 = cljs.core.next.call(null,seq__37925_37939__$1);
var G__37947 = null;
var G__37948 = 0;
var G__37949 = 0;
seq__37925_37929 = G__37946;
chunk__37926_37930 = G__37947;
count__37927_37931 = G__37948;
i__37928_37932 = G__37949;
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
HTMLCollection.prototype.cljs$core$ISeq$_rest$arity$1 = (function (x){var x__$1 = this;var iter__14516__auto__ = (function iter__37950(s__37951){return (new cljs.core.LazySeq(null,(function (){var s__37951__$1 = s__37951;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__37951__$1);if(temp__4092__auto__)
{var s__37951__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37951__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__37951__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__37953 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__37952 = 0;while(true){
if((i__37952 < size__14515__auto__))
{var i = cljs.core._nth.call(null,c__14514__auto__,i__37952);cljs.core.chunk_append.call(null,b__37953,(x__$1[i]));
{
var G__37954 = (i__37952 + 1);
i__37952 = G__37954;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37953),iter__37950.call(null,cljs.core.chunk_rest.call(null,s__37951__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37953),null);
}
} else
{var i = cljs.core.first.call(null,s__37951__$2);return cljs.core.cons.call(null,(x__$1[i]),iter__37950.call(null,cljs.core.rest.call(null,s__37951__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14516__auto__.call(null,cljs.core.range.call(null,x__$1.length));
});
foundation.rendering.th_widths = (function th_widths(ths,widths){return cljs.core.reduce.call(null,(function (ws,p__37957){var vec__37958 = p__37957;var width = cljs.core.nth.call(null,vec__37958,0,null);var th = cljs.core.nth.call(null,vec__37958,1,null);var th_width = goog.style.getBounds(th).width;if((width > th_width))
{return cljs.core.conj.call(null,ws,width);
} else
{return cljs.core.conj.call(null,ws,th_width);
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,widths,ths));
});
foundation.rendering.td_widths = (function td_widths(rows){return cljs.core.reduce.call(null,(function (ws,td){return cljs.core.conj.call(null,ws,goog.style.getBounds(td).width);
}),cljs.core.PersistentVector.EMPTY,cljs.core.first.call(null,rows).cells);
});
foundation.rendering.full_td_widths = (function full_td_widths(th_widths,ths,row_width,table_width){return cljs.core.reduce.call(null,(function (ws,p__37961){var vec__37962 = p__37961;var width = cljs.core.nth.call(null,vec__37962,0,null);var th = cljs.core.nth.call(null,vec__37962,1,null);var th_width = goog.style.getBounds(th).width;var new_width = (table_width * (width / row_width));if((new_width > width))
{goog.style.setWidth(th,new_width);
return cljs.core.conj.call(null,ws,new_width);
} else
{goog.style.setWidth(th,width);
return cljs.core.conj.call(null,ws,width);
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,th_widths,ths));
});
foundation.rendering.fix_column_widths_BANG_ = (function fix_column_widths_BANG_(){var vec__37981 = cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__37963_SHARP_){return document.querySelector(dommy.core.selector.call(null,p1__37963_SHARP_));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".panel-body",".panel-body",1210123755),new cljs.core.Keyword(null,"tbody","tbody",1124062088),new cljs.core.Keyword(null,"thead","thead",1124231110)], null)));var panel_body = cljs.core.nth.call(null,vec__37981,0,null);var tbody = cljs.core.nth.call(null,vec__37981,1,null);var thead = cljs.core.nth.call(null,vec__37981,2,null);var table_width = goog.style.getBounds(panel_body).width;var rows = tbody.rows;var ths = cljs.core.first.call(null,thead.rows).cells;var td_widths = foundation.rendering.td_widths.call(null,rows);var th_widths = foundation.rendering.th_widths.call(null,ths,td_widths);var row_width = cljs.core.reduce.call(null,cljs.core._PLUS_,th_widths);var th_widths__$1 = foundation.rendering.full_td_widths.call(null,th_widths,ths,row_width,table_width);if((row_width > table_width))
{goog.style.setWidth(cljs.core.first.call(null,thead.rows),row_width);
} else
{goog.style.setWidth(cljs.core.first.call(null,thead.rows),table_width);
}
var seq__37982 = cljs.core.seq.call(null,rows);var chunk__37983 = null;var count__37984 = 0;var i__37985 = 0;while(true){
if((i__37985 < count__37984))
{var tr = cljs.core._nth.call(null,chunk__37983,i__37985);var seq__37986_37998 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,th_widths__$1,tr.cells));var chunk__37987_37999 = null;var count__37988_38000 = 0;var i__37989_38001 = 0;while(true){
if((i__37989_38001 < count__37988_38000))
{var vec__37990_38002 = cljs.core._nth.call(null,chunk__37987_37999,i__37989_38001);var width_38003 = cljs.core.nth.call(null,vec__37990_38002,0,null);var td_38004 = cljs.core.nth.call(null,vec__37990_38002,1,null);goog.style.setWidth(td_38004,width_38003);
{
var G__38005 = seq__37986_37998;
var G__38006 = chunk__37987_37999;
var G__38007 = count__37988_38000;
var G__38008 = (i__37989_38001 + 1);
seq__37986_37998 = G__38005;
chunk__37987_37999 = G__38006;
count__37988_38000 = G__38007;
i__37989_38001 = G__38008;
continue;
}
} else
{var temp__4092__auto___38009 = cljs.core.seq.call(null,seq__37986_37998);if(temp__4092__auto___38009)
{var seq__37986_38010__$1 = temp__4092__auto___38009;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37986_38010__$1))
{var c__14547__auto___38011 = cljs.core.chunk_first.call(null,seq__37986_38010__$1);{
var G__38012 = cljs.core.chunk_rest.call(null,seq__37986_38010__$1);
var G__38013 = c__14547__auto___38011;
var G__38014 = cljs.core.count.call(null,c__14547__auto___38011);
var G__38015 = 0;
seq__37986_37998 = G__38012;
chunk__37987_37999 = G__38013;
count__37988_38000 = G__38014;
i__37989_38001 = G__38015;
continue;
}
} else
{var vec__37991_38016 = cljs.core.first.call(null,seq__37986_38010__$1);var width_38017 = cljs.core.nth.call(null,vec__37991_38016,0,null);var td_38018 = cljs.core.nth.call(null,vec__37991_38016,1,null);goog.style.setWidth(td_38018,width_38017);
{
var G__38019 = cljs.core.next.call(null,seq__37986_38010__$1);
var G__38020 = null;
var G__38021 = 0;
var G__38022 = 0;
seq__37986_37998 = G__38019;
chunk__37987_37999 = G__38020;
count__37988_38000 = G__38021;
i__37989_38001 = G__38022;
continue;
}
}
} else
{}
}
break;
}
{
var G__38023 = seq__37982;
var G__38024 = chunk__37983;
var G__38025 = count__37984;
var G__38026 = (i__37985 + 1);
seq__37982 = G__38023;
chunk__37983 = G__38024;
count__37984 = G__38025;
i__37985 = G__38026;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__37982);if(temp__4092__auto__)
{var seq__37982__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37982__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__37982__$1);{
var G__38027 = cljs.core.chunk_rest.call(null,seq__37982__$1);
var G__38028 = c__14547__auto__;
var G__38029 = cljs.core.count.call(null,c__14547__auto__);
var G__38030 = 0;
seq__37982 = G__38027;
chunk__37983 = G__38028;
count__37984 = G__38029;
i__37985 = G__38030;
continue;
}
} else
{var tr = cljs.core.first.call(null,seq__37982__$1);var seq__37992_38031 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,th_widths__$1,tr.cells));var chunk__37993_38032 = null;var count__37994_38033 = 0;var i__37995_38034 = 0;while(true){
if((i__37995_38034 < count__37994_38033))
{var vec__37996_38035 = cljs.core._nth.call(null,chunk__37993_38032,i__37995_38034);var width_38036 = cljs.core.nth.call(null,vec__37996_38035,0,null);var td_38037 = cljs.core.nth.call(null,vec__37996_38035,1,null);goog.style.setWidth(td_38037,width_38036);
{
var G__38038 = seq__37992_38031;
var G__38039 = chunk__37993_38032;
var G__38040 = count__37994_38033;
var G__38041 = (i__37995_38034 + 1);
seq__37992_38031 = G__38038;
chunk__37993_38032 = G__38039;
count__37994_38033 = G__38040;
i__37995_38034 = G__38041;
continue;
}
} else
{var temp__4092__auto___38042__$1 = cljs.core.seq.call(null,seq__37992_38031);if(temp__4092__auto___38042__$1)
{var seq__37992_38043__$1 = temp__4092__auto___38042__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37992_38043__$1))
{var c__14547__auto___38044 = cljs.core.chunk_first.call(null,seq__37992_38043__$1);{
var G__38045 = cljs.core.chunk_rest.call(null,seq__37992_38043__$1);
var G__38046 = c__14547__auto___38044;
var G__38047 = cljs.core.count.call(null,c__14547__auto___38044);
var G__38048 = 0;
seq__37992_38031 = G__38045;
chunk__37993_38032 = G__38046;
count__37994_38033 = G__38047;
i__37995_38034 = G__38048;
continue;
}
} else
{var vec__37997_38049 = cljs.core.first.call(null,seq__37992_38043__$1);var width_38050 = cljs.core.nth.call(null,vec__37997_38049,0,null);var td_38051 = cljs.core.nth.call(null,vec__37997_38049,1,null);goog.style.setWidth(td_38051,width_38050);
{
var G__38052 = cljs.core.next.call(null,seq__37992_38043__$1);
var G__38053 = null;
var G__38054 = 0;
var G__38055 = 0;
seq__37992_38031 = G__38052;
chunk__37993_38032 = G__38053;
count__37994_38033 = G__38054;
i__37995_38034 = G__38055;
continue;
}
}
} else
{}
}
break;
}
{
var G__38056 = cljs.core.next.call(null,seq__37982__$1);
var G__38057 = null;
var G__38058 = 0;
var G__38059 = 0;
seq__37982 = G__38056;
chunk__37983 = G__38057;
count__37984 = G__38058;
i__37985 = G__38059;
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
foundation.rendering.set_datagrid_height_BANG_ = (function set_datagrid_height_BANG_(){var content = document.querySelector("div.twitter-stats.panel.panel-default");var header_height = 126;var footer_height = 81;var max_height = (((document.body.clientHeight - (goog.style.getBounds(content).height + content.offsetTop)) - header_height) - footer_height);cljs.core.println.call(null,document.body.clientHeight,goog.style.getBounds(content).height);
return goog.style.setHeight((dommy.utils.__GT_Array.call(null,document.getElementsByTagName("tbody"))[0]),(cljs.core.quot.call(null,max_height,60) * 60));
});
foundation.rendering.as_resizable = (function as_resizable(){foundation.rendering.set_datagrid_height_BANG_.call(null);
var viewport_monitor = goog.dom.ViewportSizeMonitor.getInstanceForWindow();return goog.events.listen(viewport_monitor,goog.events.EventType.RESIZE,(function (e){return foundation.rendering.set_datagrid_height_BANG_.call(null);
}));
});

//# sourceMappingURL=rendering.js.map