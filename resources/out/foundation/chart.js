// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.chart');
goog.require('cljs.core');
goog.require('dommy.core');
goog.require('dommy.core');
goog.require('cljs_time.core');
goog.require('cljs_time.core');
/**
* @param {...*} var_args
*/
foundation.chart.reset_series_BANG_ = (function() { 
var reset_series_BANG___delegate = function (chart,p__314217){var map__314223 = p__314217;var map__314223__$1 = ((cljs.core.seq_QMARK_.call(null,map__314223))?cljs.core.apply.call(null,cljs.core.hash_map,map__314223):map__314223);var point_start = cljs.core.get.call(null,map__314223__$1,new cljs.core.Keyword(null,"point-start","point-start",4476351831),cljs_time.core.ago.call(null,cljs_time.core.days.call(null,1)));var interval = cljs.core.get.call(null,map__314223__$1,new cljs.core.Keyword(null,"interval","interval",1584322615),(3600 * 1000));var data = cljs.core.get.call(null,map__314223__$1,new cljs.core.Keyword(null,"data","data",1016980252),cljs.core.PersistentVector.EMPTY);var name = cljs.core.get.call(null,map__314223__$1,new cljs.core.Keyword(null,"name","name",1017277949),"");var seq__314224_314228 = cljs.core.seq.call(null,chart.series);var chunk__314225_314229 = null;var count__314226_314230 = 0;var i__314227_314231 = 0;while(true){
if((i__314227_314231 < count__314226_314230))
{var series_314232 = cljs.core._nth.call(null,chunk__314225_314229,i__314227_314231);series_314232.remove();
{
var G__314233 = seq__314224_314228;
var G__314234 = chunk__314225_314229;
var G__314235 = count__314226_314230;
var G__314236 = (i__314227_314231 + 1);
seq__314224_314228 = G__314233;
chunk__314225_314229 = G__314234;
count__314226_314230 = G__314235;
i__314227_314231 = G__314236;
continue;
}
} else
{var temp__4092__auto___314237 = cljs.core.seq.call(null,seq__314224_314228);if(temp__4092__auto___314237)
{var seq__314224_314238__$1 = temp__4092__auto___314237;if(cljs.core.chunked_seq_QMARK_.call(null,seq__314224_314238__$1))
{var c__14549__auto___314239 = cljs.core.chunk_first.call(null,seq__314224_314238__$1);{
var G__314240 = cljs.core.chunk_rest.call(null,seq__314224_314238__$1);
var G__314241 = c__14549__auto___314239;
var G__314242 = cljs.core.count.call(null,c__14549__auto___314239);
var G__314243 = 0;
seq__314224_314228 = G__314240;
chunk__314225_314229 = G__314241;
count__314226_314230 = G__314242;
i__314227_314231 = G__314243;
continue;
}
} else
{var series_314244 = cljs.core.first.call(null,seq__314224_314238__$1);series_314244.remove();
{
var G__314245 = cljs.core.next.call(null,seq__314224_314238__$1);
var G__314246 = null;
var G__314247 = 0;
var G__314248 = 0;
seq__314224_314228 = G__314245;
chunk__314225_314229 = G__314246;
count__314226_314230 = G__314247;
i__314227_314231 = G__314248;
continue;
}
}
} else
{}
}
break;
}
return chart.addSeries(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data","data",1016980252),data,new cljs.core.Keyword(null,"pointInterval","pointInterval",1241580007),interval,new cljs.core.Keyword(null,"pointStart","pointStart",2269080612),point_start.getTime()], null)));
};
var reset_series_BANG_ = function (chart,var_args){
var p__314217 = null;if (arguments.length > 1) {
  p__314217 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return reset_series_BANG___delegate.call(this,chart,p__314217);};
reset_series_BANG_.cljs$lang$maxFixedArity = 1;
reset_series_BANG_.cljs$lang$applyTo = (function (arglist__314249){
var chart = cljs.core.first(arglist__314249);
var p__314217 = cljs.core.rest(arglist__314249);
return reset_series_BANG___delegate(chart,p__314217);
});
reset_series_BANG_.cljs$core$IFn$_invoke$arity$variadic = reset_series_BANG___delegate;
return reset_series_BANG_;
})()
;
foundation.chart.chart_options = (function chart_options(el){return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"exporting","exporting",1436314400),new cljs.core.Keyword(null,"chart","chart",1108527952),new cljs.core.Keyword(null,"legend","legend",4202297215),new cljs.core.Keyword(null,"title","title",1124275658),new cljs.core.Keyword(null,"tooltip","tooltip",4168794997),new cljs.core.Keyword(null,"yAxis","yAxis",1127705388),new cljs.core.Keyword(null,"xAxis","xAxis",1126781867),new cljs.core.Keyword(null,"series","series",4403032553),new cljs.core.Keyword(null,"plotOptions","plotOptions",3823924719),new cljs.core.Keyword(null,"colors","colors",3954028770),new cljs.core.Keyword(null,"credits","credits",2042537996)],[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",1014020321),"http://192.241.130.213:8081/export",new cljs.core.Keyword(null,"enabled","enabled",3699277491),false,new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contextButton","contextButton",4745067827),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"align","align",1106807415),"left",new cljs.core.Keyword(null,"y","y",1013904363),-5], null)], null)], null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"borderColor","borderColor",1736735241),new cljs.core.Keyword(null,"zoomType","zoomType",1898182943),new cljs.core.Keyword(null,"width","width",1127031096),new cljs.core.Keyword(null,"marginTop","marginTop",4264079417),new cljs.core.Keyword(null,"borderWidth","borderWidth",1755019372),new cljs.core.Keyword(null,"marginRight","marginRight",1988992128),new cljs.core.Keyword(null,"renderTo","renderTo",519057955),new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.Keyword(null,"ignoreHiddenSeries","ignoreHiddenSeries",3208461093),new cljs.core.Keyword(null,"marginbottom","marginbottom",1640863947),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",2301028935),new cljs.core.Keyword(null,"marginLeft","marginLeft",2984838727),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"height","height",4087841945)],["transparent","x",(document.body.clientWidth - 40),30,0,15,el,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fontFamily","fontFamily",4084174853),"'proxima-nova', 'Helvetica Neue', Helvetica, Arial, sans-serif",new cljs.core.Keyword(null,"fontSize","fontSize",1379505250),"10px"], null),true,-10,"transparent",-15,"areaspline",150]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enabled","enabled",3699277491),false], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",1017460895),""], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"animation","animation",2132414198),true,new cljs.core.Keyword(null,"crosshairs","crosshairs",1401077763),true,new cljs.core.Keyword(null,"borderRadius","borderRadius",2363092816),0,new cljs.core.Keyword(null,"borderWidth","borderWidth",1755019372),1], null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"title","title",1124275658),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",1017460895),"",new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"textTransform","textTransform",2341452849),"uppercase",new cljs.core.Keyword(null,"color","color",1108746965),"#A3A3A2"], null)], null),new cljs.core.Keyword(null,"min","min",1014012356),0,new cljs.core.Keyword(null,"maxPadding","maxPadding",1381501311),0,new cljs.core.Keyword(null,"gridLineDashStyle","gridLineDashStyle",3280659831),"dot",new cljs.core.Keyword(null,"showFirstLabel","showFirstLabel",2429074547),false,new cljs.core.Keyword(null,"showLastLabel","showLastLabel",2367778547),true,new cljs.core.Keyword(null,"tickPosition","tickPosition",1814648152),"inside",new cljs.core.Keyword(null,"labels","labels",4198454129),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),40,new cljs.core.Keyword(null,"y","y",1013904363),-5], null)], null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"labels","labels",4198454129),new cljs.core.Keyword(null,"maxPadding","maxPadding",1381501311),new cljs.core.Keyword(null,"tickLength","tickLength",2374632021),new cljs.core.Keyword(null,"tickPosition","tickPosition",1814648152),new cljs.core.Keyword(null,"opposite","opposite",826026585),new cljs.core.Keyword(null,"dateTimeLabelFormats","dateTimeLabelFormats",1923681397),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"plotLines","plotLines",2810489360),new cljs.core.Keyword(null,"tickPixelInterval","tickPixelInterval",4387130944)],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",1013904363),16,new cljs.core.Keyword(null,"x","x",1013904362),0], null),0,1,"inside",false,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"day","day",1014003470),"%b %d",new cljs.core.Keyword(null,"hour","hour",1017112918),"%l:%M %p"], null),"datetime",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1108746965),"#bfbfc2",new cljs.core.Keyword(null,"dashStyle","dashStyle",4247329969),"dot",new cljs.core.Keyword(null,"width","width",1127031096),1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1108746965),"#bfbfc2",new cljs.core.Keyword(null,"dashStyle","dashStyle",4247329969),"dot",new cljs.core.Keyword(null,"width","width",1127031096),1], null)], null),130]),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"areaspline","areaspline",2758389264),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fillOpacity","fillOpacity",960226426),0.1,new cljs.core.Keyword(null,"lineWidth","lineWidth",3505084836),2,new cljs.core.Keyword(null,"marker","marker",4227565484),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"radius","radius",4370292740),0], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#527ACB"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enabled","enabled",3699277491),false], null)]);
});
foundation.chart.highchart = (function highchart(){return (new Highcharts.Chart(cljs.core.clj__GT_js.call(null,foundation.chart.chart_options.call(null,document.querySelector("div.analytics-highcharts")))));
});

//# sourceMappingURL=chart.js.map