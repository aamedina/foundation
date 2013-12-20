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
foundation.test.components.dashboard.dashboard_metrics = (function dashboard_metrics(renderer,new$){if(typeof foundation.test.components.dashboard.t423120 !== 'undefined')
{} else
{
/**
* @constructor
*/
foundation.test.components.dashboard.t423120 = (function (new$,renderer,dashboard_metrics,meta423121){
this.new$ = new$;
this.renderer = renderer;
this.dashboard_metrics = dashboard_metrics;
this.meta423121 = meta423121;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
foundation.test.components.dashboard.t423120.cljs$lang$type = true;
foundation.test.components.dashboard.t423120.cljs$lang$ctorStr = "foundation.test.components.dashboard/t423120";
foundation.test.components.dashboard.t423120.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"foundation.test.components.dashboard/t423120");
});
foundation.test.components.dashboard.t423120.prototype.dommy$template$PElement$ = true;
foundation.test.components.dashboard.t423120.prototype.dommy$template$PElement$_elem$arity$1 = (function (x){var self__ = this;
var x__$1 = this;return cljs.core.with_meta.call(null,dommy.template.__GT_node_like.call(null,foundation.app.ui._render.call(null,x__$1)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",3908964463),x__$1], null));
});
foundation.test.components.dashboard.t423120.prototype.foundation$app$ui$IClickable$ = true;
foundation.test.components.dashboard.t423120.prototype.foundation$app$ui$IClickable$_click$arity$2 = (function (x,e){var self__ = this;
var x__$1 = this;var id = cljs.core.apply.call(null,cljs.core.str,(cljs.core.seq.call(null,e.target.id)) || (cljs.core.seq.call(null,e.target.parentNode.id)));var el = document.querySelector(dommy.core.selector.call(null,[cljs.core.str("#"),cljs.core.str(id)].join('')));var prev = dommy.template.__GT_node_like.call(null,document.querySelector("div.twitter-stats#stats-list-group")).querySelector("li.list-group-item.active");var stats = new cljs.core.Keyword(null,"stats","stats",1123661841).cljs$core$IFn$_invoke$arity$1(self__.new$);var vec__423123 = clojure.string.split.call(null,id,"-");var metric = cljs.core.nth.call(null,vec__423123,0,null);var metric_type = cljs.core.nth.call(null,vec__423123,1,null);var t = foundation.test.stats.graph_stats.call(null,stats,metric,cljs.core.keyword.call(null,metric_type));var total_stats = new cljs.core.Keyword(null,"total-stats","total-stats",3484558408).cljs$core$IFn$_invoke$arity$1(self__.new$);if(cljs.core.truth_(dommy.core.has_class_QMARK_.call(null,el,new cljs.core.Keyword(null,"active","active",3885920888))))
{return null;
} else
{dommy.core.add_class_BANG_.call(null,el,new cljs.core.Keyword(null,"active","active",3885920888));
var G__423124_423137 = prev;var G__423124_423138__$1 = (((G__423124_423137 == null))?null:dommy.core.remove_class_BANG_.call(null,G__423124_423137,new cljs.core.Keyword(null,"active","active",3885920888)));var chart = foundation.app.render._get_data.call(null,self__.renderer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null));var start_picker = foundation.app.render._get_data.call(null,self__.renderer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-time-picker","start-time-picker",2510165525)], null));var start_time = start_picker.getDate().getTime();var seq__423125_423139 = cljs.core.seq.call(null,chart.series);var chunk__423126_423140 = null;var count__423127_423141 = 0;var i__423128_423142 = 0;while(true){
if((i__423128_423142 < count__423127_423141))
{var series_423143 = cljs.core._nth.call(null,chunk__423126_423140,i__423128_423142);series_423143.remove();
{
var G__423144 = seq__423125_423139;
var G__423145 = chunk__423126_423140;
var G__423146 = count__423127_423141;
var G__423147 = (i__423128_423142 + 1);
seq__423125_423139 = G__423144;
chunk__423126_423140 = G__423145;
count__423127_423141 = G__423146;
i__423128_423142 = G__423147;
continue;
}
} else
{var temp__4092__auto___423148 = cljs.core.seq.call(null,seq__423125_423139);if(temp__4092__auto___423148)
{var seq__423125_423149__$1 = temp__4092__auto___423148;if(cljs.core.chunked_seq_QMARK_.call(null,seq__423125_423149__$1))
{var c__8952__auto___423150 = cljs.core.chunk_first.call(null,seq__423125_423149__$1);{
var G__423151 = cljs.core.chunk_rest.call(null,seq__423125_423149__$1);
var G__423152 = c__8952__auto___423150;
var G__423153 = cljs.core.count.call(null,c__8952__auto___423150);
var G__423154 = 0;
seq__423125_423139 = G__423151;
chunk__423126_423140 = G__423152;
count__423127_423141 = G__423153;
i__423128_423142 = G__423154;
continue;
}
} else
{var series_423155 = cljs.core.first.call(null,seq__423125_423149__$1);series_423155.remove();
{
var G__423156 = cljs.core.next.call(null,seq__423125_423149__$1);
var G__423157 = null;
var G__423158 = 0;
var G__423159 = 0;
seq__423125_423139 = G__423156;
chunk__423126_423140 = G__423157;
count__423127_423141 = G__423158;
i__423128_423142 = G__423159;
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
foundation.test.components.dashboard.t423120.prototype.foundation$app$ui$IRender$ = true;
foundation.test.components.dashboard.t423120.prototype.foundation$app$ui$IRender$_render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var total = foundation.test.stats.total_stats.call(null,new cljs.core.Keyword(null,"total-stats","total-stats",3484558408).cljs$core$IFn$_invoke$arity$1(self__.new$));var billed = cljs.core.first.call(null,new cljs.core.Keyword(null,"estimated-charge-local-micro","estimated-charge-local-micro",2985516268).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"stats","stats",1123661841).cljs$core$IFn$_invoke$arity$1(self__.new$)));var cpas = foundation.test.stats.cpa_stats.call(null,total,billed);var rates = foundation.test.stats.rate_stats.call(null,total);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.twitter-stats#stats-list-group","div.twitter-stats#stats-list-group",1533542123),(function (){var iter__8921__auto__ = (function iter__423129(s__423130){return (new cljs.core.LazySeq(null,(function (){var s__423130__$1 = s__423130;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__423130__$1);if(temp__4092__auto__)
{var s__423130__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__423130__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__423130__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__423132 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__423131 = 0;while(true){
if((i__423131 < size__8920__auto__))
{var vec__423135 = cljs.core._nth.call(null,c__8919__auto__,i__423131);var metric = cljs.core.nth.call(null,vec__423135,0,null);var cpa = cljs.core.nth.call(null,vec__423135,1,null);var rate = cljs.core.nth.call(null,vec__423135,2,null);cljs.core.chunk_append.call(null,b__423132,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.list-group","ul.list-group",4606204857),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",1805578033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),metric], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.metric-header.list-group-item-heading","h5.metric-header.list-group-item-heading",1171357138),[cljs.core.str(cljs.core.get.call(null,total,metric)),cljs.core.str(" "),cljs.core.str(metric)].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",1805578033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),[cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.list-group-item-text","small.list-group-item-text",4177219747),[cljs.core.str(cljs.core.get.call(null,cpas,metric)),cljs.core.str(" "),cljs.core.str(cpa)].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",1805578033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),[cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.list-group-item-text","small.list-group-item-text",4177219747),[cljs.core.str(cljs.core.get.call(null,rates,metric)),cljs.core.str(" "),cljs.core.str(rate)].join('')], null)], null)], null));
{
var G__423160 = (i__423131 + 1);
i__423131 = G__423160;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__423132),iter__423129.call(null,cljs.core.chunk_rest.call(null,s__423130__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__423132),null);
}
} else
{var vec__423136 = cljs.core.first.call(null,s__423130__$2);var metric = cljs.core.nth.call(null,vec__423136,0,null);var cpa = cljs.core.nth.call(null,vec__423136,1,null);var rate = cljs.core.nth.call(null,vec__423136,2,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.list-group","ul.list-group",4606204857),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",1805578033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),metric], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.metric-header.list-group-item-heading","h5.metric-header.list-group-item-heading",1171357138),[cljs.core.str(cljs.core.get.call(null,total,metric)),cljs.core.str(" "),cljs.core.str(metric)].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",1805578033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),[cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.list-group-item-text","small.list-group-item-text",4177219747),[cljs.core.str(cljs.core.get.call(null,cpas,metric)),cljs.core.str(" "),cljs.core.str(cpa)].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",1805578033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),[cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.list-group-item-text","small.list-group-item-text",4177219747),[cljs.core.str(cljs.core.get.call(null,rates,metric)),cljs.core.str(" "),cljs.core.str(rate)].join('')], null)], null)], null),iter__423129.call(null,cljs.core.rest.call(null,s__423130__$2)));
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
foundation.test.components.dashboard.t423120.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_423122){var self__ = this;
var _423122__$1 = this;return self__.meta423121;
});
foundation.test.components.dashboard.t423120.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_423122,meta423121__$1){var self__ = this;
var _423122__$1 = this;return (new foundation.test.components.dashboard.t423120(self__.new$,self__.renderer,self__.dashboard_metrics,meta423121__$1));
});
foundation.test.components.dashboard.__GT_t423120 = (function __GT_t423120(new$__$1,renderer__$1,dashboard_metrics__$1,meta423121){return (new foundation.test.components.dashboard.t423120(new$__$1,renderer__$1,dashboard_metrics__$1,meta423121));
});
}
return (new foundation.test.components.dashboard.t423120(new$,renderer,dashboard_metrics,null));
});
foundation.test.components.dashboard.update_button = (function update_button(renderer,state){if(typeof foundation.test.components.dashboard.t423187 !== 'undefined')
{} else
{
/**
* @constructor
*/
foundation.test.components.dashboard.t423187 = (function (state,renderer,update_button,meta423188){
this.state = state;
this.renderer = renderer;
this.update_button = update_button;
this.meta423188 = meta423188;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
foundation.test.components.dashboard.t423187.cljs$lang$type = true;
foundation.test.components.dashboard.t423187.cljs$lang$ctorStr = "foundation.test.components.dashboard/t423187";
foundation.test.components.dashboard.t423187.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"foundation.test.components.dashboard/t423187");
});
foundation.test.components.dashboard.t423187.prototype.dommy$template$PElement$ = true;
foundation.test.components.dashboard.t423187.prototype.dommy$template$PElement$_elem$arity$1 = (function (x){var self__ = this;
var x__$1 = this;return cljs.core.with_meta.call(null,dommy.template.__GT_node_like.call(null,foundation.app.ui._render.call(null,x__$1)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",3908964463),x__$1], null));
});
foundation.test.components.dashboard.t423187.prototype.foundation$app$ui$IClickable$ = true;
foundation.test.components.dashboard.t423187.prototype.foundation$app$ui$IClickable$_click$arity$2 = (function (_,e){var self__ = this;
var ___$1 = this;var start_picker = foundation.app.render._get_data.call(null,self__.renderer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-time-picker","start-time-picker",2510165525)], null));var end_picker = foundation.app.render._get_data.call(null,self__.renderer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"end-time-picker","end-time-picker",4747750670)], null));var chart = foundation.app.render._get_data.call(null,self__.renderer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null));var start_time = start_picker.getDate().getTime();var seq__423190_423213 = cljs.core.seq.call(null,chart.series);var chunk__423191_423214 = null;var count__423192_423215 = 0;var i__423193_423216 = 0;while(true){
if((i__423193_423216 < count__423192_423215))
{var series_423217 = cljs.core._nth.call(null,chunk__423191_423214,i__423193_423216);series_423217.remove();
{
var G__423218 = seq__423190_423213;
var G__423219 = chunk__423191_423214;
var G__423220 = count__423192_423215;
var G__423221 = (i__423193_423216 + 1);
seq__423190_423213 = G__423218;
chunk__423191_423214 = G__423219;
count__423192_423215 = G__423220;
i__423193_423216 = G__423221;
continue;
}
} else
{var temp__4092__auto___423222 = cljs.core.seq.call(null,seq__423190_423213);if(temp__4092__auto___423222)
{var seq__423190_423223__$1 = temp__4092__auto___423222;if(cljs.core.chunked_seq_QMARK_.call(null,seq__423190_423223__$1))
{var c__8952__auto___423224 = cljs.core.chunk_first.call(null,seq__423190_423223__$1);{
var G__423225 = cljs.core.chunk_rest.call(null,seq__423190_423223__$1);
var G__423226 = c__8952__auto___423224;
var G__423227 = cljs.core.count.call(null,c__8952__auto___423224);
var G__423228 = 0;
seq__423190_423213 = G__423225;
chunk__423191_423214 = G__423226;
count__423192_423215 = G__423227;
i__423193_423216 = G__423228;
continue;
}
} else
{var series_423229 = cljs.core.first.call(null,seq__423190_423223__$1);series_423229.remove();
{
var G__423230 = cljs.core.next.call(null,seq__423190_423223__$1);
var G__423231 = null;
var G__423232 = 0;
var G__423233 = 0;
seq__423190_423213 = G__423230;
chunk__423191_423214 = G__423231;
count__423192_423215 = G__423232;
i__423193_423216 = G__423233;
continue;
}
}
} else
{}
}
break;
}
var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_423203){var state_val_423204 = (state_423203[1]);if((state_val_423204 === 1))
{var inst_423194 = start_picker.getDate();var inst_423195 = end_picker.getDate();var inst_423196 = [new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.Keyword(null,"pointInterval","pointInterval",1241580007),new cljs.core.Keyword(null,"pointStart","pointStart",2269080612)];var inst_423197 = (3600 * 1000);var inst_423198 = [foundation.test.components.dashboard.t,inst_423197,start_time];var inst_423199 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_423196,inst_423198);var inst_423200 = cljs.core.clj__GT_js.call(null,inst_423199);var inst_423201 = chart.addSeries(inst_423200);var state_423203__$1 = (function (){var statearr_423205 = state_423203;(statearr_423205[7] = inst_423195);
(statearr_423205[8] = inst_423194);
return statearr_423205;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_423203__$1,inst_423201);
} else
{return null;
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_423209 = [null,null,null,null,null,null,null,null,null];(statearr_423209[0] = state_machine__12118__auto__);
(statearr_423209[1] = 1);
return statearr_423209;
});
var state_machine__12118__auto____1 = (function (state_423203){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_423203);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e423210){if((e423210 instanceof Object))
{var ex__12121__auto__ = e423210;var statearr_423211_423234 = state_423203;(statearr_423211_423234[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_423203);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e423210;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__423235 = state_423203;
state_423203 = G__423235;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_423203){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_423203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_423212 = f__12188__auto__.call(null);(statearr_423212[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_423212;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
});
foundation.test.components.dashboard.t423187.prototype.foundation$app$ui$IRender$ = true;
foundation.test.components.dashboard.t423187.prototype.foundation$app$ui$IRender$_render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#update-stats.btn.btn-primary.btn-sm","button#update-stats.btn.btn-primary.btn-sm",3805894798),"Update"], null);
});
foundation.test.components.dashboard.t423187.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_423189){var self__ = this;
var _423189__$1 = this;return self__.meta423188;
});
foundation.test.components.dashboard.t423187.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_423189,meta423188__$1){var self__ = this;
var _423189__$1 = this;return (new foundation.test.components.dashboard.t423187(self__.state,self__.renderer,self__.update_button,meta423188__$1));
});
foundation.test.components.dashboard.__GT_t423187 = (function __GT_t423187(state__$1,renderer__$1,update_button__$1,meta423188){return (new foundation.test.components.dashboard.t423187(state__$1,renderer__$1,update_button__$1,meta423188));
});
}
return (new foundation.test.components.dashboard.t423187(state,renderer,update_button,null));
});
foundation.test.components.dashboard.dashboard_template = (function dashboard_template(renderer,state,id){var dom423248 = document.createElement("div");dom423248.className = "twitter-stats panel panel-default";
if(cljs.core.truth_(id))
{dom423248.setAttribute("id",id);
} else
{}
dom423248.appendChild((function (){var dom423249 = document.createElement("div");dom423249.className = "panel-heading";
dom423249.appendChild((function (){var dom423250 = document.createElement("h1");dom423250.className = "panel-title";
if("resource-id")
{dom423250.setAttribute("id","resource-id");
} else
{}
return dom423250;
})());
dom423249.appendChild((function (){var dom423251 = document.createElement("div");dom423251.className = "form-inline pull-right";
dom423251.appendChild((function (){var dom423252 = document.createElement("div");dom423252.className = "form-group";
dom423252.appendChild((function (){var dom423253 = document.createElement("input");dom423253.className = "form-control date-picker";
dom423253.setAttribute("id","start-time");
if(true)
{dom423253.setAttribute("readonly",true);
} else
{}
return dom423253;
})());
return dom423252;
})());
dom423251.appendChild((function (){var dom423254 = document.createElement("em");if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)))
{dom423254.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)));
} else
{}
dom423254.appendChild(document.createTextNode("to"));
return dom423254;
})());
dom423251.appendChild((function (){var dom423255 = document.createElement("div");dom423255.className = "form-group";
dom423255.appendChild((function (){var dom423256 = document.createElement("input");dom423256.className = "form-control date-picker";
dom423256.setAttribute("id","end-time");
if(true)
{dom423256.setAttribute("readonly",true);
} else
{}
return dom423256;
})());
return dom423255;
})());
dom423251.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.components.dashboard.update_button.call(null,renderer,state)));
return dom423251;
})());
return dom423249;
})());
dom423248.appendChild((function (){var dom423257 = document.createElement("div");dom423257.className = "panel-body";
dom423257.appendChild((function (){var dom423258 = document.createElement("div");dom423258.className = "analytics-highcharts";
return dom423258;
})());
return dom423257;
})());
dom423248.appendChild((function (){var dom423259 = document.createElement("div");dom423259.className = "panel-footer row";
dom423259.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.components.dashboard.dashboard_metrics.call(null,renderer,state)));
return dom423259;
})());
return dom423248;
});
foundation.test.components.dashboard.dashboard = (function dashboard(renderer,id,state){if(typeof foundation.test.components.dashboard.t423263 !== 'undefined')
{} else
{
/**
* @constructor
*/
foundation.test.components.dashboard.t423263 = (function (state,id,renderer,dashboard,meta423264){
this.state = state;
this.id = id;
this.renderer = renderer;
this.dashboard = dashboard;
this.meta423264 = meta423264;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
foundation.test.components.dashboard.t423263.cljs$lang$type = true;
foundation.test.components.dashboard.t423263.cljs$lang$ctorStr = "foundation.test.components.dashboard/t423263";
foundation.test.components.dashboard.t423263.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"foundation.test.components.dashboard/t423263");
});
foundation.test.components.dashboard.t423263.prototype.foundation$app$ui$IWithChildren$ = true;
foundation.test.components.dashboard.t423263.prototype.foundation$app$ui$IWithChildren$_with_children$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#stats-list-group","#stats-list-group",1832286227),new cljs.core.Keyword(null,"#update-stats","#update-stats",1600679344)], null);
});
foundation.test.components.dashboard.t423263.prototype.foundation$app$ui$IRender$ = true;
foundation.test.components.dashboard.t423263.prototype.foundation$app$ui$IRender$_render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return foundation.test.components.dashboard.dashboard_template.call(null,self__.renderer,self__.state,self__.id);
});
foundation.test.components.dashboard.t423263.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_423265){var self__ = this;
var _423265__$1 = this;return self__.meta423264;
});
foundation.test.components.dashboard.t423263.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_423265,meta423264__$1){var self__ = this;
var _423265__$1 = this;return (new foundation.test.components.dashboard.t423263(self__.state,self__.id,self__.renderer,self__.dashboard,meta423264__$1));
});
foundation.test.components.dashboard.__GT_t423263 = (function __GT_t423263(state__$1,id__$1,renderer__$1,dashboard__$1,meta423264){return (new foundation.test.components.dashboard.t423263(state__$1,id__$1,renderer__$1,dashboard__$1,meta423264));
});
}
return (new foundation.test.components.dashboard.t423263(state,id,renderer,dashboard,null));
});

//# sourceMappingURL=dashboard.js.map