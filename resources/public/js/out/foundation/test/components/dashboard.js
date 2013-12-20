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
foundation.test.components.dashboard.dashboard_metrics = (function dashboard_metrics(renderer,new$){if(typeof foundation.test.components.dashboard.t421831 !== 'undefined')
{} else
{
/**
* @constructor
*/
foundation.test.components.dashboard.t421831 = (function (new$,renderer,dashboard_metrics,meta421832){
this.new$ = new$;
this.renderer = renderer;
this.dashboard_metrics = dashboard_metrics;
this.meta421832 = meta421832;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
foundation.test.components.dashboard.t421831.cljs$lang$type = true;
foundation.test.components.dashboard.t421831.cljs$lang$ctorStr = "foundation.test.components.dashboard/t421831";
foundation.test.components.dashboard.t421831.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"foundation.test.components.dashboard/t421831");
});
foundation.test.components.dashboard.t421831.prototype.dommy$template$PElement$ = true;
foundation.test.components.dashboard.t421831.prototype.dommy$template$PElement$_elem$arity$1 = (function (x){var self__ = this;
var x__$1 = this;return cljs.core.with_meta.call(null,dommy.template.__GT_node_like.call(null,foundation.app.ui._render.call(null,x__$1)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",3908964463),x__$1], null));
});
foundation.test.components.dashboard.t421831.prototype.foundation$app$ui$IClickable$ = true;
foundation.test.components.dashboard.t421831.prototype.foundation$app$ui$IClickable$_click$arity$2 = (function (x,e){var self__ = this;
var x__$1 = this;var id = cljs.core.apply.call(null,cljs.core.str,(cljs.core.seq.call(null,e.target.id)) || (cljs.core.seq.call(null,e.target.parentNode.id)));var el = document.querySelector(dommy.core.selector.call(null,[cljs.core.str("#"),cljs.core.str(id)].join('')));var prev = dommy.template.__GT_node_like.call(null,document.querySelector("div.twitter-stats#stats-list-group")).querySelector("li.list-group-item.active");var stats = new cljs.core.Keyword(null,"stats","stats",1123661841).cljs$core$IFn$_invoke$arity$1(self__.new$);var vec__421834 = clojure.string.split.call(null,id,"-");var metric = cljs.core.nth.call(null,vec__421834,0,null);var metric_type = cljs.core.nth.call(null,vec__421834,1,null);var t = foundation.test.stats.graph_stats.call(null,stats,metric,cljs.core.keyword.call(null,metric_type));var total_stats = new cljs.core.Keyword(null,"total-stats","total-stats",3484558408).cljs$core$IFn$_invoke$arity$1(self__.new$);if(cljs.core.truth_(dommy.core.has_class_QMARK_.call(null,el,new cljs.core.Keyword(null,"active","active",3885920888))))
{return null;
} else
{dommy.core.add_class_BANG_.call(null,el,new cljs.core.Keyword(null,"active","active",3885920888));
var G__421835_421848 = prev;var G__421835_421849__$1 = (((G__421835_421848 == null))?null:dommy.core.remove_class_BANG_.call(null,G__421835_421848,new cljs.core.Keyword(null,"active","active",3885920888)));var chart = foundation.app.render._get_data.call(null,self__.renderer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null));var start_picker = foundation.app.render._get_data.call(null,self__.renderer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-time-picker","start-time-picker",2510165525)], null));var start_time = start_picker.getDate().getTime();var seq__421836_421850 = cljs.core.seq.call(null,chart.series);var chunk__421837_421851 = null;var count__421838_421852 = 0;var i__421839_421853 = 0;while(true){
if((i__421839_421853 < count__421838_421852))
{var series_421854 = cljs.core._nth.call(null,chunk__421837_421851,i__421839_421853);series_421854.remove();
{
var G__421855 = seq__421836_421850;
var G__421856 = chunk__421837_421851;
var G__421857 = count__421838_421852;
var G__421858 = (i__421839_421853 + 1);
seq__421836_421850 = G__421855;
chunk__421837_421851 = G__421856;
count__421838_421852 = G__421857;
i__421839_421853 = G__421858;
continue;
}
} else
{var temp__4092__auto___421859 = cljs.core.seq.call(null,seq__421836_421850);if(temp__4092__auto___421859)
{var seq__421836_421860__$1 = temp__4092__auto___421859;if(cljs.core.chunked_seq_QMARK_.call(null,seq__421836_421860__$1))
{var c__8952__auto___421861 = cljs.core.chunk_first.call(null,seq__421836_421860__$1);{
var G__421862 = cljs.core.chunk_rest.call(null,seq__421836_421860__$1);
var G__421863 = c__8952__auto___421861;
var G__421864 = cljs.core.count.call(null,c__8952__auto___421861);
var G__421865 = 0;
seq__421836_421850 = G__421862;
chunk__421837_421851 = G__421863;
count__421838_421852 = G__421864;
i__421839_421853 = G__421865;
continue;
}
} else
{var series_421866 = cljs.core.first.call(null,seq__421836_421860__$1);series_421866.remove();
{
var G__421867 = cljs.core.next.call(null,seq__421836_421860__$1);
var G__421868 = null;
var G__421869 = 0;
var G__421870 = 0;
seq__421836_421850 = G__421867;
chunk__421837_421851 = G__421868;
count__421838_421852 = G__421869;
i__421839_421853 = G__421870;
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
foundation.test.components.dashboard.t421831.prototype.foundation$app$ui$IRender$ = true;
foundation.test.components.dashboard.t421831.prototype.foundation$app$ui$IRender$_render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var total = foundation.test.stats.total_stats.call(null,new cljs.core.Keyword(null,"total-stats","total-stats",3484558408).cljs$core$IFn$_invoke$arity$1(self__.new$));var billed = cljs.core.first.call(null,new cljs.core.Keyword(null,"estimated-charge-local-micro","estimated-charge-local-micro",2985516268).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"stats","stats",1123661841).cljs$core$IFn$_invoke$arity$1(self__.new$)));var cpas = foundation.test.stats.cpa_stats.call(null,total,billed);var rates = foundation.test.stats.rate_stats.call(null,total);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.twitter-stats#stats-list-group","div.twitter-stats#stats-list-group",1533542123),(function (){var iter__8921__auto__ = (function iter__421840(s__421841){return (new cljs.core.LazySeq(null,(function (){var s__421841__$1 = s__421841;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__421841__$1);if(temp__4092__auto__)
{var s__421841__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__421841__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__421841__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__421843 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__421842 = 0;while(true){
if((i__421842 < size__8920__auto__))
{var vec__421846 = cljs.core._nth.call(null,c__8919__auto__,i__421842);var metric = cljs.core.nth.call(null,vec__421846,0,null);var cpa = cljs.core.nth.call(null,vec__421846,1,null);var rate = cljs.core.nth.call(null,vec__421846,2,null);cljs.core.chunk_append.call(null,b__421843,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.list-group","ul.list-group",4606204857),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",1805578033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),metric], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.metric-header.list-group-item-heading","h5.metric-header.list-group-item-heading",1171357138),[cljs.core.str(cljs.core.get.call(null,total,metric)),cljs.core.str(" "),cljs.core.str(metric)].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",1805578033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),[cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.list-group-item-text","small.list-group-item-text",4177219747),[cljs.core.str(cljs.core.get.call(null,cpas,metric)),cljs.core.str(" "),cljs.core.str(cpa)].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",1805578033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),[cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.list-group-item-text","small.list-group-item-text",4177219747),[cljs.core.str(cljs.core.get.call(null,rates,metric)),cljs.core.str(" "),cljs.core.str(rate)].join('')], null)], null)], null));
{
var G__421871 = (i__421842 + 1);
i__421842 = G__421871;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__421843),iter__421840.call(null,cljs.core.chunk_rest.call(null,s__421841__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__421843),null);
}
} else
{var vec__421847 = cljs.core.first.call(null,s__421841__$2);var metric = cljs.core.nth.call(null,vec__421847,0,null);var cpa = cljs.core.nth.call(null,vec__421847,1,null);var rate = cljs.core.nth.call(null,vec__421847,2,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.list-group","ul.list-group",4606204857),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",1805578033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),metric], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.metric-header.list-group-item-heading","h5.metric-header.list-group-item-heading",1171357138),[cljs.core.str(cljs.core.get.call(null,total,metric)),cljs.core.str(" "),cljs.core.str(metric)].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",1805578033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),[cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.list-group-item-text","small.list-group-item-text",4177219747),[cljs.core.str(cljs.core.get.call(null,cpas,metric)),cljs.core.str(" "),cljs.core.str(cpa)].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",1805578033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),[cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.list-group-item-text","small.list-group-item-text",4177219747),[cljs.core.str(cljs.core.get.call(null,rates,metric)),cljs.core.str(" "),cljs.core.str(rate)].join('')], null)], null)], null),iter__421840.call(null,cljs.core.rest.call(null,s__421841__$2)));
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
foundation.test.components.dashboard.t421831.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_421833){var self__ = this;
var _421833__$1 = this;return self__.meta421832;
});
foundation.test.components.dashboard.t421831.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_421833,meta421832__$1){var self__ = this;
var _421833__$1 = this;return (new foundation.test.components.dashboard.t421831(self__.new$,self__.renderer,self__.dashboard_metrics,meta421832__$1));
});
foundation.test.components.dashboard.__GT_t421831 = (function __GT_t421831(new$__$1,renderer__$1,dashboard_metrics__$1,meta421832){return (new foundation.test.components.dashboard.t421831(new$__$1,renderer__$1,dashboard_metrics__$1,meta421832));
});
}
return (new foundation.test.components.dashboard.t421831(new$,renderer,dashboard_metrics,null));
});
foundation.test.components.dashboard.dashboard_template = (function dashboard_template(renderer,state,id){var dom421885 = document.createElement("div");dom421885.className = "twitter-stats panel panel-default";
if(cljs.core.truth_(id))
{dom421885.setAttribute("id",id);
} else
{}
dom421885.appendChild((function (){var dom421886 = document.createElement("div");dom421886.className = "panel-heading";
dom421886.appendChild((function (){var dom421887 = document.createElement("h1");dom421887.className = "panel-title";
if("resource-id")
{dom421887.setAttribute("id","resource-id");
} else
{}
return dom421887;
})());
dom421886.appendChild((function (){var dom421888 = document.createElement("div");dom421888.className = "form-inline pull-right";
dom421888.appendChild((function (){var dom421889 = document.createElement("div");dom421889.className = "form-group";
dom421889.appendChild((function (){var dom421890 = document.createElement("input");dom421890.className = "form-control date-picker";
dom421890.setAttribute("id","start-time");
if(true)
{dom421890.setAttribute("readonly",true);
} else
{}
return dom421890;
})());
return dom421889;
})());
dom421888.appendChild((function (){var dom421891 = document.createElement("em");if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)))
{dom421891.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)));
} else
{}
dom421891.appendChild(document.createTextNode("to"));
return dom421891;
})());
dom421888.appendChild((function (){var dom421892 = document.createElement("div");dom421892.className = "form-group";
dom421892.appendChild((function (){var dom421893 = document.createElement("input");dom421893.className = "form-control date-picker";
dom421893.setAttribute("id","end-time");
if(true)
{dom421893.setAttribute("readonly",true);
} else
{}
return dom421893;
})());
return dom421892;
})());
dom421888.appendChild((function (){var dom421894 = document.createElement("button");dom421894.className = "btn btn-primary btn-sm";
dom421894.setAttribute("id","update-stats");
dom421894.appendChild(document.createTextNode("Update"));
return dom421894;
})());
return dom421888;
})());
return dom421886;
})());
dom421885.appendChild((function (){var dom421895 = document.createElement("div");dom421895.className = "panel-body";
dom421895.appendChild((function (){var dom421896 = document.createElement("div");dom421896.className = "analytics-highcharts";
return dom421896;
})());
return dom421895;
})());
dom421885.appendChild((function (){var dom421897 = document.createElement("div");dom421897.className = "panel-footer row";
dom421897.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.components.dashboard.dashboard_metrics.call(null,renderer,state)));
return dom421897;
})());
return dom421885;
});
foundation.test.components.dashboard.dashboard = (function dashboard(renderer,id,state){if(typeof foundation.test.components.dashboard.t421901 !== 'undefined')
{} else
{
/**
* @constructor
*/
foundation.test.components.dashboard.t421901 = (function (state,id,renderer,dashboard,meta421902){
this.state = state;
this.id = id;
this.renderer = renderer;
this.dashboard = dashboard;
this.meta421902 = meta421902;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
foundation.test.components.dashboard.t421901.cljs$lang$type = true;
foundation.test.components.dashboard.t421901.cljs$lang$ctorStr = "foundation.test.components.dashboard/t421901";
foundation.test.components.dashboard.t421901.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"foundation.test.components.dashboard/t421901");
});
foundation.test.components.dashboard.t421901.prototype.foundation$app$ui$IWithChildren$ = true;
foundation.test.components.dashboard.t421901.prototype.foundation$app$ui$IWithChildren$_with_children$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#stats-list-group","#stats-list-group",1832286227)], null);
});
foundation.test.components.dashboard.t421901.prototype.foundation$app$ui$IRender$ = true;
foundation.test.components.dashboard.t421901.prototype.foundation$app$ui$IRender$_render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return foundation.test.components.dashboard.dashboard_template.call(null,self__.renderer,self__.state,self__.id);
});
foundation.test.components.dashboard.t421901.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_421903){var self__ = this;
var _421903__$1 = this;return self__.meta421902;
});
foundation.test.components.dashboard.t421901.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_421903,meta421902__$1){var self__ = this;
var _421903__$1 = this;return (new foundation.test.components.dashboard.t421901(self__.state,self__.id,self__.renderer,self__.dashboard,meta421902__$1));
});
foundation.test.components.dashboard.__GT_t421901 = (function __GT_t421901(state__$1,id__$1,renderer__$1,dashboard__$1,meta421902){return (new foundation.test.components.dashboard.t421901(state__$1,id__$1,renderer__$1,dashboard__$1,meta421902));
});
}
return (new foundation.test.components.dashboard.t421901(state,id,renderer,dashboard,null));
});

//# sourceMappingURL=dashboard.js.map