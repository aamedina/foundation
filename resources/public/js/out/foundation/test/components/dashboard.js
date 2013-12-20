// Compiled by ClojureScript 0.0-2120
goog.provide('foundation.test.components.dashboard');
goog.require('cljs.core');
goog.require('foundation.test.templates');
goog.require('foundation.app.render');
goog.require('foundation.app.ui');
goog.require('enfocus.core');
goog.require('dommy.core');
goog.require('dommy.template');
goog.require('enfocus.core');
goog.require('foundation.test.templates');
goog.require('foundation.test.models');
goog.require('dommy.template');
goog.require('foundation.test.models');
goog.require('foundation.app.ui');
goog.require('foundation.app.render');
goog.require('dommy.core');
foundation.test.components.dashboard.metrics = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Impressions","CPM","Impression Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Engagements","CPE","Engagement Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clicks","CPC","Click Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Retweets","CPRT","Retweet Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Replies","CPR","Reply Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Follows","CPF","Follow Rate"], null)], null);
foundation.test.components.dashboard.dashboard_metrics = (function dashboard_metrics(renderer,new$){if(typeof foundation.test.components.dashboard.t408819 !== 'undefined')
{} else
{
/**
* @constructor
*/
foundation.test.components.dashboard.t408819 = (function (new$,renderer,dashboard_metrics,meta408820){
this.new$ = new$;
this.renderer = renderer;
this.dashboard_metrics = dashboard_metrics;
this.meta408820 = meta408820;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
foundation.test.components.dashboard.t408819.cljs$lang$type = true;
foundation.test.components.dashboard.t408819.cljs$lang$ctorStr = "foundation.test.components.dashboard/t408819";
foundation.test.components.dashboard.t408819.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"foundation.test.components.dashboard/t408819");
});
foundation.test.components.dashboard.t408819.prototype.dommy$template$PElement$ = true;
foundation.test.components.dashboard.t408819.prototype.dommy$template$PElement$_elem$arity$1 = (function (x){var self__ = this;
var x__$1 = this;return cljs.core.with_meta.call(null,dommy.template.__GT_node_like.call(null,foundation.app.ui._render.call(null,x__$1)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",3908964463),x__$1], null));
});
foundation.test.components.dashboard.t408819.prototype.foundation$app$ui$IClickable$ = true;
foundation.test.components.dashboard.t408819.prototype.foundation$app$ui$IClickable$_click$arity$2 = (function (x,e){var self__ = this;
var x__$1 = this;var id = cljs.core.apply.call(null,cljs.core.str,(cljs.core.seq.call(null,e.target.id)) || (cljs.core.seq.call(null,e.target.parentNode.id)));var el = document.querySelector(dommy.core.selector.call(null,[cljs.core.str("#"),cljs.core.str(id)].join('')));var prev = dommy.template.__GT_node_like.call(null,document.querySelector("div.twitter-stats#stats-list-group")).querySelector("li.list-group-item.active");if(cljs.core.truth_(dommy.core.has_class_QMARK_.call(null,el,new cljs.core.Keyword(null,"active","active",3885920888))))
{return null;
} else
{dommy.core.add_class_BANG_.call(null,el,new cljs.core.Keyword(null,"active","active",3885920888));
var G__408822_408835 = prev;var G__408822_408836__$1 = (((G__408822_408835 == null))?null:dommy.core.remove_class_BANG_.call(null,G__408822_408835,new cljs.core.Keyword(null,"active","active",3885920888)));var chart = foundation.app.render._get_data.call(null,self__.renderer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null));var start_time = (new Date(new cljs.core.Keyword(null,"start-time","start-time",3689550026).cljs$core$IFn$_invoke$arity$1(self__.new$))).getTime();var seq__408823_408837 = cljs.core.seq.call(null,chart.series);var chunk__408824_408838 = null;var count__408825_408839 = 0;var i__408826_408840 = 0;while(true){
if((i__408826_408840 < count__408825_408839))
{var series_408841 = cljs.core._nth.call(null,chunk__408824_408838,i__408826_408840);series_408841.remove();
{
var G__408842 = seq__408823_408837;
var G__408843 = chunk__408824_408838;
var G__408844 = count__408825_408839;
var G__408845 = (i__408826_408840 + 1);
seq__408823_408837 = G__408842;
chunk__408824_408838 = G__408843;
count__408825_408839 = G__408844;
i__408826_408840 = G__408845;
continue;
}
} else
{var temp__4092__auto___408846 = cljs.core.seq.call(null,seq__408823_408837);if(temp__4092__auto___408846)
{var seq__408823_408847__$1 = temp__4092__auto___408846;if(cljs.core.chunked_seq_QMARK_.call(null,seq__408823_408847__$1))
{var c__8952__auto___408848 = cljs.core.chunk_first.call(null,seq__408823_408847__$1);{
var G__408849 = cljs.core.chunk_rest.call(null,seq__408823_408847__$1);
var G__408850 = c__8952__auto___408848;
var G__408851 = cljs.core.count.call(null,c__8952__auto___408848);
var G__408852 = 0;
seq__408823_408837 = G__408849;
chunk__408824_408838 = G__408850;
count__408825_408839 = G__408851;
i__408826_408840 = G__408852;
continue;
}
} else
{var series_408853 = cljs.core.first.call(null,seq__408823_408847__$1);series_408853.remove();
{
var G__408854 = cljs.core.next.call(null,seq__408823_408847__$1);
var G__408855 = null;
var G__408856 = 0;
var G__408857 = 0;
seq__408823_408837 = G__408854;
chunk__408824_408838 = G__408855;
count__408825_408839 = G__408856;
i__408826_408840 = G__408857;
continue;
}
}
} else
{}
}
break;
}
return chart.addSeries(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.Keyword(null,"stat","stat",1017444806).cljs$core$IFn$_invoke$arity$1(self__.new$),new cljs.core.Keyword(null,"pointInterval","pointInterval",1241580007),(3600 * 1000),new cljs.core.Keyword(null,"pointStart","pointStart",2269080612),start_time], null)));
}
});
foundation.test.components.dashboard.t408819.prototype.foundation$app$ui$IRender$ = true;
foundation.test.components.dashboard.t408819.prototype.foundation$app$ui$IRender$_render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.twitter-stats#stats-list-group","div.twitter-stats#stats-list-group",1533542123),(function (){var iter__8921__auto__ = (function iter__408827(s__408828){return (new cljs.core.LazySeq(null,(function (){var s__408828__$1 = s__408828;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__408828__$1);if(temp__4092__auto__)
{var s__408828__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__408828__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__408828__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__408830 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__408829 = 0;while(true){
if((i__408829 < size__8920__auto__))
{var vec__408833 = cljs.core._nth.call(null,c__8919__auto__,i__408829);var metric = cljs.core.nth.call(null,vec__408833,0,null);var cpa = cljs.core.nth.call(null,vec__408833,1,null);var rate = cljs.core.nth.call(null,vec__408833,2,null);cljs.core.chunk_append.call(null,b__408830,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.list-group","ul.list-group",4606204857),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",1805578033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),metric], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.metric-header.list-group-item-heading","h5.metric-header.list-group-item-heading",1171357138),[cljs.core.str("0 "),cljs.core.str(metric)].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",1805578033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),[cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.list-group-item-text","small.list-group-item-text",4177219747),[cljs.core.str("0 "),cljs.core.str(cpa)].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",1805578033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),[cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.list-group-item-text","small.list-group-item-text",4177219747),[cljs.core.str("0 "),cljs.core.str(rate)].join('')], null)], null)], null));
{
var G__408858 = (i__408829 + 1);
i__408829 = G__408858;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__408830),iter__408827.call(null,cljs.core.chunk_rest.call(null,s__408828__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__408830),null);
}
} else
{var vec__408834 = cljs.core.first.call(null,s__408828__$2);var metric = cljs.core.nth.call(null,vec__408834,0,null);var cpa = cljs.core.nth.call(null,vec__408834,1,null);var rate = cljs.core.nth.call(null,vec__408834,2,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.list-group","ul.list-group",4606204857),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",1805578033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),metric], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.metric-header.list-group-item-heading","h5.metric-header.list-group-item-heading",1171357138),[cljs.core.str("0 "),cljs.core.str(metric)].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",1805578033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),[cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.list-group-item-text","small.list-group-item-text",4177219747),[cljs.core.str("0 "),cljs.core.str(cpa)].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",1805578033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),[cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.list-group-item-text","small.list-group-item-text",4177219747),[cljs.core.str("0 "),cljs.core.str(rate)].join('')], null)], null)], null),iter__408827.call(null,cljs.core.rest.call(null,s__408828__$2)));
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
foundation.test.components.dashboard.t408819.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_408821){var self__ = this;
var _408821__$1 = this;return self__.meta408820;
});
foundation.test.components.dashboard.t408819.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_408821,meta408820__$1){var self__ = this;
var _408821__$1 = this;return (new foundation.test.components.dashboard.t408819(self__.new$,self__.renderer,self__.dashboard_metrics,meta408820__$1));
});
foundation.test.components.dashboard.__GT_t408819 = (function __GT_t408819(new$__$1,renderer__$1,dashboard_metrics__$1,meta408820){return (new foundation.test.components.dashboard.t408819(new$__$1,renderer__$1,dashboard_metrics__$1,meta408820));
});
}
return (new foundation.test.components.dashboard.t408819(new$,renderer,dashboard_metrics,null));
});
foundation.test.components.dashboard.dashboard_template = (function dashboard_template(renderer,state,id){var dom408872 = document.createElement("div");dom408872.className = "twitter-stats panel panel-default";
if(cljs.core.truth_(id))
{dom408872.setAttribute("id",id);
} else
{}
dom408872.appendChild((function (){var dom408873 = document.createElement("div");dom408873.className = "panel-heading";
dom408873.appendChild((function (){var dom408874 = document.createElement("h1");dom408874.className = "panel-title";
if("resource-id")
{dom408874.setAttribute("id","resource-id");
} else
{}
return dom408874;
})());
dom408873.appendChild((function (){var dom408875 = document.createElement("div");dom408875.className = "form-inline pull-right";
dom408875.appendChild((function (){var dom408876 = document.createElement("div");dom408876.className = "form-group";
dom408876.appendChild((function (){var dom408877 = document.createElement("input");dom408877.className = "form-control date-picker";
dom408877.setAttribute("id","start-time");
if(true)
{dom408877.setAttribute("readonly",true);
} else
{}
return dom408877;
})());
return dom408876;
})());
dom408875.appendChild((function (){var dom408878 = document.createElement("em");if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)))
{dom408878.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)));
} else
{}
dom408878.appendChild(document.createTextNode("to"));
return dom408878;
})());
dom408875.appendChild((function (){var dom408879 = document.createElement("div");dom408879.className = "form-group";
dom408879.appendChild((function (){var dom408880 = document.createElement("input");dom408880.className = "form-control date-picker";
dom408880.setAttribute("id","end-time");
if(true)
{dom408880.setAttribute("readonly",true);
} else
{}
return dom408880;
})());
return dom408879;
})());
dom408875.appendChild((function (){var dom408881 = document.createElement("button");dom408881.className = "btn btn-primary btn-sm";
dom408881.setAttribute("id","update-stats");
dom408881.appendChild(document.createTextNode("Update"));
return dom408881;
})());
return dom408875;
})());
return dom408873;
})());
dom408872.appendChild((function (){var dom408882 = document.createElement("div");dom408882.className = "panel-body";
dom408882.appendChild((function (){var dom408883 = document.createElement("div");dom408883.className = "analytics-highcharts";
return dom408883;
})());
return dom408882;
})());
dom408872.appendChild((function (){var dom408884 = document.createElement("div");dom408884.className = "panel-footer row";
dom408884.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.components.dashboard.dashboard_metrics.call(null,renderer,state)));
return dom408884;
})());
return dom408872;
});
foundation.test.components.dashboard.dashboard = (function dashboard(renderer,id,state){if(typeof foundation.test.components.dashboard.t408888 !== 'undefined')
{} else
{
/**
* @constructor
*/
foundation.test.components.dashboard.t408888 = (function (state,id,renderer,dashboard,meta408889){
this.state = state;
this.id = id;
this.renderer = renderer;
this.dashboard = dashboard;
this.meta408889 = meta408889;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
foundation.test.components.dashboard.t408888.cljs$lang$type = true;
foundation.test.components.dashboard.t408888.cljs$lang$ctorStr = "foundation.test.components.dashboard/t408888";
foundation.test.components.dashboard.t408888.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"foundation.test.components.dashboard/t408888");
});
foundation.test.components.dashboard.t408888.prototype.foundation$app$ui$IWithChildren$ = true;
foundation.test.components.dashboard.t408888.prototype.foundation$app$ui$IWithChildren$_with_children$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#stats-list-group","#stats-list-group",1832286227)], null);
});
foundation.test.components.dashboard.t408888.prototype.foundation$app$ui$IRender$ = true;
foundation.test.components.dashboard.t408888.prototype.foundation$app$ui$IRender$_render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return foundation.test.components.dashboard.dashboard_template.call(null,self__.renderer,self__.state,self__.id);
});
foundation.test.components.dashboard.t408888.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_408890){var self__ = this;
var _408890__$1 = this;return self__.meta408889;
});
foundation.test.components.dashboard.t408888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_408890,meta408889__$1){var self__ = this;
var _408890__$1 = this;return (new foundation.test.components.dashboard.t408888(self__.state,self__.id,self__.renderer,self__.dashboard,meta408889__$1));
});
foundation.test.components.dashboard.__GT_t408888 = (function __GT_t408888(state__$1,id__$1,renderer__$1,dashboard__$1,meta408889){return (new foundation.test.components.dashboard.t408888(state__$1,id__$1,renderer__$1,dashboard__$1,meta408889));
});
}
return (new foundation.test.components.dashboard.t408888(state,id,renderer,dashboard,null));
});

//# sourceMappingURL=dashboard.js.map