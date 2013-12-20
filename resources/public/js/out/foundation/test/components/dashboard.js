// Compiled by ClojureScript 0.0-2120
goog.provide('foundation.test.components.dashboard');
goog.require('cljs.core');
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
goog.require('foundation.app.ui');
goog.require('foundation.app.render');
goog.require('dommy.core');
foundation.test.components.dashboard.metrics = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Impressions","CPM","Impression Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Engagements","CPE","Engagement Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clicks","CPC","Click Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Retweets","CPRT","Retweet Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Replies","CPR","Reply Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Follows","CPF","Follow Rate"], null)], null);
foundation.test.components.dashboard.dashboard_metrics = (function dashboard_metrics(renderer,new$){if(typeof foundation.test.components.dashboard.t420178 !== 'undefined')
{} else
{
/**
* @constructor
*/
foundation.test.components.dashboard.t420178 = (function (new$,renderer,dashboard_metrics,meta420179){
this.new$ = new$;
this.renderer = renderer;
this.dashboard_metrics = dashboard_metrics;
this.meta420179 = meta420179;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
foundation.test.components.dashboard.t420178.cljs$lang$type = true;
foundation.test.components.dashboard.t420178.cljs$lang$ctorStr = "foundation.test.components.dashboard/t420178";
foundation.test.components.dashboard.t420178.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"foundation.test.components.dashboard/t420178");
});
foundation.test.components.dashboard.t420178.prototype.dommy$template$PElement$ = true;
foundation.test.components.dashboard.t420178.prototype.dommy$template$PElement$_elem$arity$1 = (function (x){var self__ = this;
var x__$1 = this;return cljs.core.with_meta.call(null,dommy.template.__GT_node_like.call(null,foundation.app.ui._render.call(null,x__$1)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",3908964463),x__$1], null));
});
foundation.test.components.dashboard.t420178.prototype.foundation$app$ui$IClickable$ = true;
foundation.test.components.dashboard.t420178.prototype.foundation$app$ui$IClickable$_click$arity$2 = (function (x,e){var self__ = this;
var x__$1 = this;var id = cljs.core.apply.call(null,cljs.core.str,(cljs.core.seq.call(null,e.target.id)) || (cljs.core.seq.call(null,e.target.parentNode.id)));var el = document.querySelector(dommy.core.selector.call(null,[cljs.core.str("#"),cljs.core.str(id)].join('')));var prev = dommy.template.__GT_node_like.call(null,document.querySelector("div.twitter-stats#stats-list-group")).querySelector("li.list-group-item.active");var stats = new cljs.core.Keyword(null,"stats","stats",1123661841).cljs$core$IFn$_invoke$arity$1(self__.new$);var vec__420181 = clojure.string.split.call(null,id,"-");var metric = cljs.core.nth.call(null,vec__420181,0,null);var metric_type = cljs.core.nth.call(null,vec__420181,1,null);var t = foundation.test.stats.graph_stats.call(null,stats,metric,cljs.core.keyword.call(null,metric_type));var total_stats = new cljs.core.Keyword(null,"total-stats","total-stats",3484558408).cljs$core$IFn$_invoke$arity$1(self__.new$);if(cljs.core.truth_(dommy.core.has_class_QMARK_.call(null,el,new cljs.core.Keyword(null,"active","active",3885920888))))
{return null;
} else
{dommy.core.add_class_BANG_.call(null,el,new cljs.core.Keyword(null,"active","active",3885920888));
var G__420182_420195 = prev;var G__420182_420196__$1 = (((G__420182_420195 == null))?null:dommy.core.remove_class_BANG_.call(null,G__420182_420195,new cljs.core.Keyword(null,"active","active",3885920888)));var chart = foundation.app.render._get_data.call(null,self__.renderer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null));var start_picker = foundation.app.render._get_data.call(null,self__.renderer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-time-picker","start-time-picker",2510165525)], null));var start_time = start_picker.getDate().getTime();var seq__420183_420197 = cljs.core.seq.call(null,chart.series);var chunk__420184_420198 = null;var count__420185_420199 = 0;var i__420186_420200 = 0;while(true){
if((i__420186_420200 < count__420185_420199))
{var series_420201 = cljs.core._nth.call(null,chunk__420184_420198,i__420186_420200);series_420201.remove();
{
var G__420202 = seq__420183_420197;
var G__420203 = chunk__420184_420198;
var G__420204 = count__420185_420199;
var G__420205 = (i__420186_420200 + 1);
seq__420183_420197 = G__420202;
chunk__420184_420198 = G__420203;
count__420185_420199 = G__420204;
i__420186_420200 = G__420205;
continue;
}
} else
{var temp__4092__auto___420206 = cljs.core.seq.call(null,seq__420183_420197);if(temp__4092__auto___420206)
{var seq__420183_420207__$1 = temp__4092__auto___420206;if(cljs.core.chunked_seq_QMARK_.call(null,seq__420183_420207__$1))
{var c__8952__auto___420208 = cljs.core.chunk_first.call(null,seq__420183_420207__$1);{
var G__420209 = cljs.core.chunk_rest.call(null,seq__420183_420207__$1);
var G__420210 = c__8952__auto___420208;
var G__420211 = cljs.core.count.call(null,c__8952__auto___420208);
var G__420212 = 0;
seq__420183_420197 = G__420209;
chunk__420184_420198 = G__420210;
count__420185_420199 = G__420211;
i__420186_420200 = G__420212;
continue;
}
} else
{var series_420213 = cljs.core.first.call(null,seq__420183_420207__$1);series_420213.remove();
{
var G__420214 = cljs.core.next.call(null,seq__420183_420207__$1);
var G__420215 = null;
var G__420216 = 0;
var G__420217 = 0;
seq__420183_420197 = G__420214;
chunk__420184_420198 = G__420215;
count__420185_420199 = G__420216;
i__420186_420200 = G__420217;
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
foundation.test.components.dashboard.t420178.prototype.foundation$app$ui$IRender$ = true;
foundation.test.components.dashboard.t420178.prototype.foundation$app$ui$IRender$_render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.twitter-stats#stats-list-group","div.twitter-stats#stats-list-group",1533542123),(function (){var iter__8921__auto__ = (function iter__420187(s__420188){return (new cljs.core.LazySeq(null,(function (){var s__420188__$1 = s__420188;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__420188__$1);if(temp__4092__auto__)
{var s__420188__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__420188__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__420188__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__420190 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__420189 = 0;while(true){
if((i__420189 < size__8920__auto__))
{var vec__420193 = cljs.core._nth.call(null,c__8919__auto__,i__420189);var metric = cljs.core.nth.call(null,vec__420193,0,null);var cpa = cljs.core.nth.call(null,vec__420193,1,null);var rate = cljs.core.nth.call(null,vec__420193,2,null);cljs.core.chunk_append.call(null,b__420190,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.list-group","ul.list-group",4606204857),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",1805578033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),metric], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.metric-header.list-group-item-heading","h5.metric-header.list-group-item-heading",1171357138),[cljs.core.str("0 "),cljs.core.str(metric)].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",1805578033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),[cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.list-group-item-text","small.list-group-item-text",4177219747),[cljs.core.str("0 "),cljs.core.str(cpa)].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",1805578033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),[cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.list-group-item-text","small.list-group-item-text",4177219747),[cljs.core.str("0 "),cljs.core.str(rate)].join('')], null)], null)], null));
{
var G__420218 = (i__420189 + 1);
i__420189 = G__420218;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__420190),iter__420187.call(null,cljs.core.chunk_rest.call(null,s__420188__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__420190),null);
}
} else
{var vec__420194 = cljs.core.first.call(null,s__420188__$2);var metric = cljs.core.nth.call(null,vec__420194,0,null);var cpa = cljs.core.nth.call(null,vec__420194,1,null);var rate = cljs.core.nth.call(null,vec__420194,2,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.list-group","ul.list-group",4606204857),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",1805578033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),metric], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.metric-header.list-group-item-heading","h5.metric-header.list-group-item-heading",1171357138),[cljs.core.str("0 "),cljs.core.str(metric)].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",1805578033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),[cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.list-group-item-text","small.list-group-item-text",4177219747),[cljs.core.str("0 "),cljs.core.str(cpa)].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",1805578033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),[cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.list-group-item-text","small.list-group-item-text",4177219747),[cljs.core.str("0 "),cljs.core.str(rate)].join('')], null)], null)], null),iter__420187.call(null,cljs.core.rest.call(null,s__420188__$2)));
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
foundation.test.components.dashboard.t420178.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_420180){var self__ = this;
var _420180__$1 = this;return self__.meta420179;
});
foundation.test.components.dashboard.t420178.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_420180,meta420179__$1){var self__ = this;
var _420180__$1 = this;return (new foundation.test.components.dashboard.t420178(self__.new$,self__.renderer,self__.dashboard_metrics,meta420179__$1));
});
foundation.test.components.dashboard.__GT_t420178 = (function __GT_t420178(new$__$1,renderer__$1,dashboard_metrics__$1,meta420179){return (new foundation.test.components.dashboard.t420178(new$__$1,renderer__$1,dashboard_metrics__$1,meta420179));
});
}
return (new foundation.test.components.dashboard.t420178(new$,renderer,dashboard_metrics,null));
});
foundation.test.components.dashboard.dashboard_template = (function dashboard_template(renderer,state,id){var dom420232 = document.createElement("div");dom420232.className = "twitter-stats panel panel-default";
if(cljs.core.truth_(id))
{dom420232.setAttribute("id",id);
} else
{}
dom420232.appendChild((function (){var dom420233 = document.createElement("div");dom420233.className = "panel-heading";
dom420233.appendChild((function (){var dom420234 = document.createElement("h1");dom420234.className = "panel-title";
if("resource-id")
{dom420234.setAttribute("id","resource-id");
} else
{}
return dom420234;
})());
dom420233.appendChild((function (){var dom420235 = document.createElement("div");dom420235.className = "form-inline pull-right";
dom420235.appendChild((function (){var dom420236 = document.createElement("div");dom420236.className = "form-group";
dom420236.appendChild((function (){var dom420237 = document.createElement("input");dom420237.className = "form-control date-picker";
dom420237.setAttribute("id","start-time");
if(true)
{dom420237.setAttribute("readonly",true);
} else
{}
return dom420237;
})());
return dom420236;
})());
dom420235.appendChild((function (){var dom420238 = document.createElement("em");if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)))
{dom420238.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)));
} else
{}
dom420238.appendChild(document.createTextNode("to"));
return dom420238;
})());
dom420235.appendChild((function (){var dom420239 = document.createElement("div");dom420239.className = "form-group";
dom420239.appendChild((function (){var dom420240 = document.createElement("input");dom420240.className = "form-control date-picker";
dom420240.setAttribute("id","end-time");
if(true)
{dom420240.setAttribute("readonly",true);
} else
{}
return dom420240;
})());
return dom420239;
})());
dom420235.appendChild((function (){var dom420241 = document.createElement("button");dom420241.className = "btn btn-primary btn-sm";
dom420241.setAttribute("id","update-stats");
dom420241.appendChild(document.createTextNode("Update"));
return dom420241;
})());
return dom420235;
})());
return dom420233;
})());
dom420232.appendChild((function (){var dom420242 = document.createElement("div");dom420242.className = "panel-body";
dom420242.appendChild((function (){var dom420243 = document.createElement("div");dom420243.className = "analytics-highcharts";
return dom420243;
})());
return dom420242;
})());
dom420232.appendChild((function (){var dom420244 = document.createElement("div");dom420244.className = "panel-footer row";
dom420244.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.components.dashboard.dashboard_metrics.call(null,renderer,state)));
return dom420244;
})());
return dom420232;
});
foundation.test.components.dashboard.dashboard = (function dashboard(renderer,id,state){if(typeof foundation.test.components.dashboard.t420248 !== 'undefined')
{} else
{
/**
* @constructor
*/
foundation.test.components.dashboard.t420248 = (function (state,id,renderer,dashboard,meta420249){
this.state = state;
this.id = id;
this.renderer = renderer;
this.dashboard = dashboard;
this.meta420249 = meta420249;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
foundation.test.components.dashboard.t420248.cljs$lang$type = true;
foundation.test.components.dashboard.t420248.cljs$lang$ctorStr = "foundation.test.components.dashboard/t420248";
foundation.test.components.dashboard.t420248.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"foundation.test.components.dashboard/t420248");
});
foundation.test.components.dashboard.t420248.prototype.foundation$app$ui$IWithChildren$ = true;
foundation.test.components.dashboard.t420248.prototype.foundation$app$ui$IWithChildren$_with_children$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#stats-list-group","#stats-list-group",1832286227)], null);
});
foundation.test.components.dashboard.t420248.prototype.foundation$app$ui$IRender$ = true;
foundation.test.components.dashboard.t420248.prototype.foundation$app$ui$IRender$_render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return foundation.test.components.dashboard.dashboard_template.call(null,self__.renderer,self__.state,self__.id);
});
foundation.test.components.dashboard.t420248.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_420250){var self__ = this;
var _420250__$1 = this;return self__.meta420249;
});
foundation.test.components.dashboard.t420248.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_420250,meta420249__$1){var self__ = this;
var _420250__$1 = this;return (new foundation.test.components.dashboard.t420248(self__.state,self__.id,self__.renderer,self__.dashboard,meta420249__$1));
});
foundation.test.components.dashboard.__GT_t420248 = (function __GT_t420248(state__$1,id__$1,renderer__$1,dashboard__$1,meta420249){return (new foundation.test.components.dashboard.t420248(state__$1,id__$1,renderer__$1,dashboard__$1,meta420249));
});
}
return (new foundation.test.components.dashboard.t420248(state,id,renderer,dashboard,null));
});

//# sourceMappingURL=dashboard.js.map