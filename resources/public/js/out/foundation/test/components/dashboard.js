// Compiled by ClojureScript 0.0-2120
goog.provide('foundation.test.components.dashboard');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('foundation.test.templates');
goog.require('foundation.test.stats');
goog.require('foundation.app.render');
goog.require('foundation.app.ui');
goog.require('enfocus.core');
goog.require('dommy.core');
goog.require('dommy.template');
goog.require('foundation.test.stats');
goog.require('enfocus.core');
goog.require('foundation.test.templates');
goog.require('foundation.test.models');
goog.require('dommy.template');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('foundation.test.models');
goog.require('cljs.core.async');
goog.require('foundation.app.ui');
goog.require('foundation.app.render');
goog.require('dommy.core');
foundation.test.components.dashboard.metrics = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Impressions","CPM","Impression Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Engagements","CPE","Engagement Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clicks","CPC","Click Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Retweets","CPRT","Retweet Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Replies","CPR","Reply Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Follows","CPF","Follow Rate"], null)], null);
foundation.test.components.dashboard.dashboard_metrics = (function dashboard_metrics(renderer,new$){if(typeof foundation.test.components.dashboard.t423283 !== 'undefined')
{} else
{
/**
* @constructor
*/
foundation.test.components.dashboard.t423283 = (function (new$,renderer,dashboard_metrics,meta423284){
this.new$ = new$;
this.renderer = renderer;
this.dashboard_metrics = dashboard_metrics;
this.meta423284 = meta423284;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
foundation.test.components.dashboard.t423283.cljs$lang$type = true;
foundation.test.components.dashboard.t423283.cljs$lang$ctorStr = "foundation.test.components.dashboard/t423283";
foundation.test.components.dashboard.t423283.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"foundation.test.components.dashboard/t423283");
});
foundation.test.components.dashboard.t423283.prototype.dommy$template$PElement$ = true;
foundation.test.components.dashboard.t423283.prototype.dommy$template$PElement$_elem$arity$1 = (function (x){var self__ = this;
var x__$1 = this;return cljs.core.with_meta.call(null,dommy.template.__GT_node_like.call(null,foundation.app.ui._render.call(null,x__$1)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",3908964463),x__$1], null));
});
foundation.test.components.dashboard.t423283.prototype.foundation$app$ui$IClickable$ = true;
foundation.test.components.dashboard.t423283.prototype.foundation$app$ui$IClickable$_click$arity$2 = (function (x,e){var self__ = this;
var x__$1 = this;var id = cljs.core.apply.call(null,cljs.core.str,(cljs.core.seq.call(null,e.target.id)) || (cljs.core.seq.call(null,e.target.parentNode.id)));var el = document.querySelector(dommy.core.selector.call(null,[cljs.core.str("#"),cljs.core.str(id)].join('')));var prev = dommy.template.__GT_node_like.call(null,document.querySelector("div.twitter-stats#stats-list-group")).querySelector("li.list-group-item.active");var stats = new cljs.core.Keyword(null,"stats","stats",1123661841).cljs$core$IFn$_invoke$arity$1(self__.new$);var vec__423286 = clojure.string.split.call(null,id,"-");var metric = cljs.core.nth.call(null,vec__423286,0,null);var metric_type = cljs.core.nth.call(null,vec__423286,1,null);var t = foundation.test.stats.graph_stats.call(null,stats,metric,cljs.core.keyword.call(null,metric_type));var total_stats = new cljs.core.Keyword(null,"total-stats","total-stats",3484558408).cljs$core$IFn$_invoke$arity$1(self__.new$);if(cljs.core.truth_(dommy.core.has_class_QMARK_.call(null,el,new cljs.core.Keyword(null,"active","active",3885920888))))
{return null;
} else
{dommy.core.add_class_BANG_.call(null,el,new cljs.core.Keyword(null,"active","active",3885920888));
var G__423287_423300 = prev;var G__423287_423301__$1 = (((G__423287_423300 == null))?null:dommy.core.remove_class_BANG_.call(null,G__423287_423300,new cljs.core.Keyword(null,"active","active",3885920888)));var chart = foundation.app.render._get_data.call(null,self__.renderer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null));var start_picker = foundation.app.render._get_data.call(null,self__.renderer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-time-picker","start-time-picker",2510165525)], null));var start_time = start_picker.getDate().getTime();var seq__423288_423302 = cljs.core.seq.call(null,chart.series);var chunk__423289_423303 = null;var count__423290_423304 = 0;var i__423291_423305 = 0;while(true){
if((i__423291_423305 < count__423290_423304))
{var series_423306 = cljs.core._nth.call(null,chunk__423289_423303,i__423291_423305);series_423306.remove();
{
var G__423307 = seq__423288_423302;
var G__423308 = chunk__423289_423303;
var G__423309 = count__423290_423304;
var G__423310 = (i__423291_423305 + 1);
seq__423288_423302 = G__423307;
chunk__423289_423303 = G__423308;
count__423290_423304 = G__423309;
i__423291_423305 = G__423310;
continue;
}
} else
{var temp__4092__auto___423311 = cljs.core.seq.call(null,seq__423288_423302);if(temp__4092__auto___423311)
{var seq__423288_423312__$1 = temp__4092__auto___423311;if(cljs.core.chunked_seq_QMARK_.call(null,seq__423288_423312__$1))
{var c__8952__auto___423313 = cljs.core.chunk_first.call(null,seq__423288_423312__$1);{
var G__423314 = cljs.core.chunk_rest.call(null,seq__423288_423312__$1);
var G__423315 = c__8952__auto___423313;
var G__423316 = cljs.core.count.call(null,c__8952__auto___423313);
var G__423317 = 0;
seq__423288_423302 = G__423314;
chunk__423289_423303 = G__423315;
count__423290_423304 = G__423316;
i__423291_423305 = G__423317;
continue;
}
} else
{var series_423318 = cljs.core.first.call(null,seq__423288_423312__$1);series_423318.remove();
{
var G__423319 = cljs.core.next.call(null,seq__423288_423312__$1);
var G__423320 = null;
var G__423321 = 0;
var G__423322 = 0;
seq__423288_423302 = G__423319;
chunk__423289_423303 = G__423320;
count__423290_423304 = G__423321;
i__423291_423305 = G__423322;
continue;
}
}
} else
{}
}
break;
}
return chart.addSeries(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data","data",1016980252),t,new cljs.core.Keyword(null,"pointInterval","pointInterval",1241580007),(3600 * 1000),new cljs.core.Keyword(null,"pointStart","pointStart",2269080612),start_time], null)));
}
});
foundation.test.components.dashboard.t423283.prototype.foundation$app$ui$IRender$ = true;
foundation.test.components.dashboard.t423283.prototype.foundation$app$ui$IRender$_render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var total = foundation.test.stats.total_stats.call(null,new cljs.core.Keyword(null,"total-stats","total-stats",3484558408).cljs$core$IFn$_invoke$arity$1(self__.new$));var billed = cljs.core.first.call(null,new cljs.core.Keyword(null,"estimated-charge-local-micro","estimated-charge-local-micro",2985516268).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"stats","stats",1123661841).cljs$core$IFn$_invoke$arity$1(self__.new$)));var cpas = foundation.test.stats.cpa_stats.call(null,total,billed);var rates = foundation.test.stats.rate_stats.call(null,total);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.twitter-stats#stats-list-group","div.twitter-stats#stats-list-group",1533542123),(function (){var iter__8921__auto__ = (function iter__423292(s__423293){return (new cljs.core.LazySeq(null,(function (){var s__423293__$1 = s__423293;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__423293__$1);if(temp__4092__auto__)
{var s__423293__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__423293__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__423293__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__423295 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__423294 = 0;while(true){
if((i__423294 < size__8920__auto__))
{var vec__423298 = cljs.core._nth.call(null,c__8919__auto__,i__423294);var metric = cljs.core.nth.call(null,vec__423298,0,null);var cpa = cljs.core.nth.call(null,vec__423298,1,null);var rate = cljs.core.nth.call(null,vec__423298,2,null);cljs.core.chunk_append.call(null,b__423295,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.list-group","ul.list-group",4606204857),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",1805578033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),metric], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.metric-header.list-group-item-heading","h5.metric-header.list-group-item-heading",1171357138),[cljs.core.str(cljs.core.get.call(null,total,metric)),cljs.core.str(" "),cljs.core.str(metric)].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",1805578033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),[cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.list-group-item-text","small.list-group-item-text",4177219747),[cljs.core.str(cljs.core.get.call(null,cpas,metric)),cljs.core.str(" "),cljs.core.str(cpa)].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",1805578033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),[cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.list-group-item-text","small.list-group-item-text",4177219747),[cljs.core.str(cljs.core.get.call(null,rates,metric)),cljs.core.str(" "),cljs.core.str(rate)].join('')], null)], null)], null));
{
var G__423323 = (i__423294 + 1);
i__423294 = G__423323;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__423295),iter__423292.call(null,cljs.core.chunk_rest.call(null,s__423293__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__423295),null);
}
} else
{var vec__423299 = cljs.core.first.call(null,s__423293__$2);var metric = cljs.core.nth.call(null,vec__423299,0,null);var cpa = cljs.core.nth.call(null,vec__423299,1,null);var rate = cljs.core.nth.call(null,vec__423299,2,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.list-group","ul.list-group",4606204857),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",1805578033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),metric], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.metric-header.list-group-item-heading","h5.metric-header.list-group-item-heading",1171357138),[cljs.core.str(cljs.core.get.call(null,total,metric)),cljs.core.str(" "),cljs.core.str(metric)].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",1805578033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),[cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.list-group-item-text","small.list-group-item-text",4177219747),[cljs.core.str(cljs.core.get.call(null,cpas,metric)),cljs.core.str(" "),cljs.core.str(cpa)].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",1805578033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),[cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.list-group-item-text","small.list-group-item-text",4177219747),[cljs.core.str(cljs.core.get.call(null,rates,metric)),cljs.core.str(" "),cljs.core.str(rate)].join('')], null)], null)], null),iter__423292.call(null,cljs.core.rest.call(null,s__423293__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,foundation.test.components.dashboard.metrics);
})()], null);
});
foundation.test.components.dashboard.t423283.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_423285){var self__ = this;
var _423285__$1 = this;return self__.meta423284;
});
foundation.test.components.dashboard.t423283.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_423285,meta423284__$1){var self__ = this;
var _423285__$1 = this;return (new foundation.test.components.dashboard.t423283(self__.new$,self__.renderer,self__.dashboard_metrics,meta423284__$1));
});
foundation.test.components.dashboard.__GT_t423283 = (function __GT_t423283(new$__$1,renderer__$1,dashboard_metrics__$1,meta423284){return (new foundation.test.components.dashboard.t423283(new$__$1,renderer__$1,dashboard_metrics__$1,meta423284));
});
}
return (new foundation.test.components.dashboard.t423283(new$,renderer,dashboard_metrics,null));
});
foundation.test.components.dashboard.update_button = (function update_button(renderer,state){if(typeof foundation.test.components.dashboard.t423350 !== 'undefined')
{} else
{
/**
* @constructor
*/
foundation.test.components.dashboard.t423350 = (function (state,renderer,update_button,meta423351){
this.state = state;
this.renderer = renderer;
this.update_button = update_button;
this.meta423351 = meta423351;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
foundation.test.components.dashboard.t423350.cljs$lang$type = true;
foundation.test.components.dashboard.t423350.cljs$lang$ctorStr = "foundation.test.components.dashboard/t423350";
foundation.test.components.dashboard.t423350.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"foundation.test.components.dashboard/t423350");
});
foundation.test.components.dashboard.t423350.prototype.dommy$template$PElement$ = true;
foundation.test.components.dashboard.t423350.prototype.dommy$template$PElement$_elem$arity$1 = (function (x){var self__ = this;
var x__$1 = this;return cljs.core.with_meta.call(null,dommy.template.__GT_node_like.call(null,foundation.app.ui._render.call(null,x__$1)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",3908964463),x__$1], null));
});
foundation.test.components.dashboard.t423350.prototype.foundation$app$ui$IClickable$ = true;
foundation.test.components.dashboard.t423350.prototype.foundation$app$ui$IClickable$_click$arity$2 = (function (_,e){var self__ = this;
var ___$1 = this;var start_picker = foundation.app.render._get_data.call(null,self__.renderer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-time-picker","start-time-picker",2510165525)], null));var end_picker = foundation.app.render._get_data.call(null,self__.renderer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"end-time-picker","end-time-picker",4747750670)], null));var chart = foundation.app.render._get_data.call(null,self__.renderer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null));var start_time = start_picker.getDate().getTime();var seq__423353_423376 = cljs.core.seq.call(null,chart.series);var chunk__423354_423377 = null;var count__423355_423378 = 0;var i__423356_423379 = 0;while(true){
if((i__423356_423379 < count__423355_423378))
{var series_423380 = cljs.core._nth.call(null,chunk__423354_423377,i__423356_423379);series_423380.remove();
{
var G__423381 = seq__423353_423376;
var G__423382 = chunk__423354_423377;
var G__423383 = count__423355_423378;
var G__423384 = (i__423356_423379 + 1);
seq__423353_423376 = G__423381;
chunk__423354_423377 = G__423382;
count__423355_423378 = G__423383;
i__423356_423379 = G__423384;
continue;
}
} else
{var temp__4092__auto___423385 = cljs.core.seq.call(null,seq__423353_423376);if(temp__4092__auto___423385)
{var seq__423353_423386__$1 = temp__4092__auto___423385;if(cljs.core.chunked_seq_QMARK_.call(null,seq__423353_423386__$1))
{var c__8952__auto___423387 = cljs.core.chunk_first.call(null,seq__423353_423386__$1);{
var G__423388 = cljs.core.chunk_rest.call(null,seq__423353_423386__$1);
var G__423389 = c__8952__auto___423387;
var G__423390 = cljs.core.count.call(null,c__8952__auto___423387);
var G__423391 = 0;
seq__423353_423376 = G__423388;
chunk__423354_423377 = G__423389;
count__423355_423378 = G__423390;
i__423356_423379 = G__423391;
continue;
}
} else
{var series_423392 = cljs.core.first.call(null,seq__423353_423386__$1);series_423392.remove();
{
var G__423393 = cljs.core.next.call(null,seq__423353_423386__$1);
var G__423394 = null;
var G__423395 = 0;
var G__423396 = 0;
seq__423353_423376 = G__423393;
chunk__423354_423377 = G__423394;
count__423355_423378 = G__423395;
i__423356_423379 = G__423396;
continue;
}
}
} else
{}
}
break;
}
var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_423366){var state_val_423367 = (state_423366[1]);if((state_val_423367 === 1))
{var inst_423357 = start_picker.getDate();var inst_423358 = end_picker.getDate();var inst_423359 = [new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.Keyword(null,"pointInterval","pointInterval",1241580007),new cljs.core.Keyword(null,"pointStart","pointStart",2269080612)];var inst_423360 = (3600 * 1000);var inst_423361 = [1,inst_423360,start_time];var inst_423362 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_423359,inst_423361);var inst_423363 = cljs.core.clj__GT_js.call(null,inst_423362);var inst_423364 = chart.addSeries(inst_423363);var state_423366__$1 = (function (){var statearr_423368 = state_423366;(statearr_423368[7] = inst_423358);
(statearr_423368[8] = inst_423357);
return statearr_423368;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_423366__$1,inst_423364);
} else
{return null;
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_423372 = [null,null,null,null,null,null,null,null,null];(statearr_423372[0] = state_machine__12118__auto__);
(statearr_423372[1] = 1);
return statearr_423372;
});
var state_machine__12118__auto____1 = (function (state_423366){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_423366);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e423373){if((e423373 instanceof Object))
{var ex__12121__auto__ = e423373;var statearr_423374_423397 = state_423366;(statearr_423374_423397[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_423366);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e423373;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__423398 = state_423366;
state_423366 = G__423398;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_423366){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_423366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_423375 = f__12188__auto__.call(null);(statearr_423375[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_423375;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
});
foundation.test.components.dashboard.t423350.prototype.foundation$app$ui$IRender$ = true;
foundation.test.components.dashboard.t423350.prototype.foundation$app$ui$IRender$_render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#update-stats.btn.btn-primary.btn-sm","button#update-stats.btn.btn-primary.btn-sm",3805894798),"Update"], null);
});
foundation.test.components.dashboard.t423350.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_423352){var self__ = this;
var _423352__$1 = this;return self__.meta423351;
});
foundation.test.components.dashboard.t423350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_423352,meta423351__$1){var self__ = this;
var _423352__$1 = this;return (new foundation.test.components.dashboard.t423350(self__.state,self__.renderer,self__.update_button,meta423351__$1));
});
foundation.test.components.dashboard.__GT_t423350 = (function __GT_t423350(state__$1,renderer__$1,update_button__$1,meta423351){return (new foundation.test.components.dashboard.t423350(state__$1,renderer__$1,update_button__$1,meta423351));
});
}
return (new foundation.test.components.dashboard.t423350(state,renderer,update_button,null));
});
foundation.test.components.dashboard.dashboard_template = (function dashboard_template(renderer,state,id){var dom423411 = document.createElement("div");dom423411.className = "twitter-stats panel panel-default";
if(cljs.core.truth_(id))
{dom423411.setAttribute("id",id);
} else
{}
dom423411.appendChild((function (){var dom423412 = document.createElement("div");dom423412.className = "panel-heading";
dom423412.appendChild((function (){var dom423413 = document.createElement("h1");dom423413.className = "panel-title";
if("resource-id")
{dom423413.setAttribute("id","resource-id");
} else
{}
return dom423413;
})());
dom423412.appendChild((function (){var dom423414 = document.createElement("div");dom423414.className = "form-inline pull-right";
dom423414.appendChild((function (){var dom423415 = document.createElement("div");dom423415.className = "form-group";
dom423415.appendChild((function (){var dom423416 = document.createElement("input");dom423416.className = "form-control date-picker";
dom423416.setAttribute("id","start-time");
if(true)
{dom423416.setAttribute("readonly",true);
} else
{}
return dom423416;
})());
return dom423415;
})());
dom423414.appendChild((function (){var dom423417 = document.createElement("em");if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)))
{dom423417.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)));
} else
{}
dom423417.appendChild(document.createTextNode("to"));
return dom423417;
})());
dom423414.appendChild((function (){var dom423418 = document.createElement("div");dom423418.className = "form-group";
dom423418.appendChild((function (){var dom423419 = document.createElement("input");dom423419.className = "form-control date-picker";
dom423419.setAttribute("id","end-time");
if(true)
{dom423419.setAttribute("readonly",true);
} else
{}
return dom423419;
})());
return dom423418;
})());
dom423414.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.components.dashboard.update_button.call(null,renderer,state)));
return dom423414;
})());
return dom423412;
})());
dom423411.appendChild((function (){var dom423420 = document.createElement("div");dom423420.className = "panel-body";
dom423420.appendChild((function (){var dom423421 = document.createElement("div");dom423421.className = "analytics-highcharts";
return dom423421;
})());
return dom423420;
})());
dom423411.appendChild((function (){var dom423422 = document.createElement("div");dom423422.className = "panel-footer row";
dom423422.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.components.dashboard.dashboard_metrics.call(null,renderer,state)));
return dom423422;
})());
return dom423411;
});
foundation.test.components.dashboard.dashboard = (function dashboard(renderer,id,state){if(typeof foundation.test.components.dashboard.t423426 !== 'undefined')
{} else
{
/**
* @constructor
*/
foundation.test.components.dashboard.t423426 = (function (state,id,renderer,dashboard,meta423427){
this.state = state;
this.id = id;
this.renderer = renderer;
this.dashboard = dashboard;
this.meta423427 = meta423427;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
foundation.test.components.dashboard.t423426.cljs$lang$type = true;
foundation.test.components.dashboard.t423426.cljs$lang$ctorStr = "foundation.test.components.dashboard/t423426";
foundation.test.components.dashboard.t423426.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"foundation.test.components.dashboard/t423426");
});
foundation.test.components.dashboard.t423426.prototype.foundation$app$ui$IWithChildren$ = true;
foundation.test.components.dashboard.t423426.prototype.foundation$app$ui$IWithChildren$_with_children$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#stats-list-group","#stats-list-group",1832286227),new cljs.core.Keyword(null,"#update-stats","#update-stats",1600679344)], null);
});
foundation.test.components.dashboard.t423426.prototype.foundation$app$ui$IRender$ = true;
foundation.test.components.dashboard.t423426.prototype.foundation$app$ui$IRender$_render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return foundation.test.components.dashboard.dashboard_template.call(null,self__.renderer,self__.state,self__.id);
});
foundation.test.components.dashboard.t423426.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_423428){var self__ = this;
var _423428__$1 = this;return self__.meta423427;
});
foundation.test.components.dashboard.t423426.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_423428,meta423427__$1){var self__ = this;
var _423428__$1 = this;return (new foundation.test.components.dashboard.t423426(self__.state,self__.id,self__.renderer,self__.dashboard,meta423427__$1));
});
foundation.test.components.dashboard.__GT_t423426 = (function __GT_t423426(state__$1,id__$1,renderer__$1,dashboard__$1,meta423427){return (new foundation.test.components.dashboard.t423426(state__$1,id__$1,renderer__$1,dashboard__$1,meta423427));
});
}
return (new foundation.test.components.dashboard.t423426(state,id,renderer,dashboard,null));
});

//# sourceMappingURL=dashboard.js.map