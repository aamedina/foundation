// Compiled by ClojureScript 0.0-2120
goog.provide('foundation.test.components.dashboard');
goog.require('cljs.core');
goog.require('foundation.test.templates');
goog.require('foundation.app.ui');
goog.require('dommy.core');
goog.require('dommy.template');
goog.require('foundation.test.templates');
goog.require('foundation.test.models');
goog.require('dommy.template');
goog.require('foundation.test.models');
goog.require('foundation.app.ui');
goog.require('dommy.core');
foundation.test.components.dashboard.metrics = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Impressions","CPM","Impression Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Engagements","CPE","Engagement Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clicks","CPC","Click Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Retweets","CPRT","Retweet Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Replies","CPR","Reply Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Follows","CPF","Follow Rate"], null)], null);
foundation.test.components.dashboard.dashboard_metrics = (function dashboard_metrics(){if(typeof foundation.test.components.dashboard.t333972 !== 'undefined')
{} else
{
/**
* @constructor
*/
foundation.test.components.dashboard.t333972 = (function (dashboard_metrics,meta333973){
this.dashboard_metrics = dashboard_metrics;
this.meta333973 = meta333973;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
foundation.test.components.dashboard.t333972.cljs$lang$type = true;
foundation.test.components.dashboard.t333972.cljs$lang$ctorStr = "foundation.test.components.dashboard/t333972";
foundation.test.components.dashboard.t333972.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"foundation.test.components.dashboard/t333972");
});
foundation.test.components.dashboard.t333972.prototype.dommy$template$PElement$ = true;
foundation.test.components.dashboard.t333972.prototype.dommy$template$PElement$_elem$arity$1 = (function (x){var self__ = this;
var x__$1 = this;return cljs.core.with_meta.call(null,dommy.template.__GT_node_like.call(null,foundation.app.ui._render.call(null,x__$1)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",3908964463),x__$1], null));
});
foundation.test.components.dashboard.t333972.prototype.foundation$app$ui$IClickable$ = true;
foundation.test.components.dashboard.t333972.prototype.foundation$app$ui$IClickable$_click$arity$2 = (function (x,e){var self__ = this;
var x__$1 = this;return console.log("click!",e.target);
});
foundation.test.components.dashboard.t333972.prototype.foundation$app$ui$IRender$ = true;
foundation.test.components.dashboard.t333972.prototype.foundation$app$ui$IRender$_render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.twitter-stats#stats-list-group","div.twitter-stats#stats-list-group",1533542123),(function (){var iter__8921__auto__ = (function iter__333975(s__333976){return (new cljs.core.LazySeq(null,(function (){var s__333976__$1 = s__333976;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__333976__$1);if(temp__4092__auto__)
{var s__333976__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__333976__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__333976__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__333978 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__333977 = 0;while(true){
if((i__333977 < size__8920__auto__))
{var vec__333981 = cljs.core._nth.call(null,c__8919__auto__,i__333977);var metric = cljs.core.nth.call(null,vec__333981,0,null);var cpa = cljs.core.nth.call(null,vec__333981,1,null);var rate = cljs.core.nth.call(null,vec__333981,2,null);cljs.core.chunk_append.call(null,b__333978,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.list-group","ul.list-group",4606204857),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",1805578033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),metric], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.metric-header.list-group-item-heading","h5.metric-header.list-group-item-heading",1171357138),[cljs.core.str("0 "),cljs.core.str(metric)].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",1805578033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),[cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.list-group-item-text","small.list-group-item-text",4177219747),[cljs.core.str("0 "),cljs.core.str(cpa)].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",1805578033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),[cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.list-group-item-text","small.list-group-item-text",4177219747),[cljs.core.str("0 "),cljs.core.str(rate)].join('')], null)], null)], null));
{
var G__333983 = (i__333977 + 1);
i__333977 = G__333983;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__333978),iter__333975.call(null,cljs.core.chunk_rest.call(null,s__333976__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__333978),null);
}
} else
{var vec__333982 = cljs.core.first.call(null,s__333976__$2);var metric = cljs.core.nth.call(null,vec__333982,0,null);var cpa = cljs.core.nth.call(null,vec__333982,1,null);var rate = cljs.core.nth.call(null,vec__333982,2,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.list-group","ul.list-group",4606204857),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",1805578033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),metric], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.metric-header.list-group-item-heading","h5.metric-header.list-group-item-heading",1171357138),[cljs.core.str("0 "),cljs.core.str(metric)].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",1805578033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),[cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.list-group-item-text","small.list-group-item-text",4177219747),[cljs.core.str("0 "),cljs.core.str(cpa)].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",1805578033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),[cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.list-group-item-text","small.list-group-item-text",4177219747),[cljs.core.str("0 "),cljs.core.str(rate)].join('')], null)], null)], null),iter__333975.call(null,cljs.core.rest.call(null,s__333976__$2)));
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
foundation.test.components.dashboard.t333972.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_333974){var self__ = this;
var _333974__$1 = this;return self__.meta333973;
});
foundation.test.components.dashboard.t333972.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_333974,meta333973__$1){var self__ = this;
var _333974__$1 = this;return (new foundation.test.components.dashboard.t333972(self__.dashboard_metrics,meta333973__$1));
});
foundation.test.components.dashboard.__GT_t333972 = (function __GT_t333972(dashboard_metrics__$1,meta333973){return (new foundation.test.components.dashboard.t333972(dashboard_metrics__$1,meta333973));
});
}
return (new foundation.test.components.dashboard.t333972(dashboard_metrics,null));
});
foundation.test.components.dashboard.dashboard_template = (function dashboard_template(id){var dom333997 = document.createElement("div");dom333997.className = "twitter-stats panel panel-default";
if(cljs.core.truth_(id))
{dom333997.setAttribute("id",id);
} else
{}
dom333997.appendChild((function (){var dom333998 = document.createElement("div");dom333998.className = "panel-heading";
dom333998.appendChild((function (){var dom333999 = document.createElement("h1");dom333999.className = "panel-title";
if("resource-id")
{dom333999.setAttribute("id","resource-id");
} else
{}
return dom333999;
})());
dom333998.appendChild((function (){var dom334000 = document.createElement("div");dom334000.className = "form-inline pull-right";
dom334000.appendChild((function (){var dom334001 = document.createElement("div");dom334001.className = "form-group";
dom334001.appendChild((function (){var dom334002 = document.createElement("input");dom334002.className = "form-control date-picker";
dom334002.setAttribute("id","start-time");
if(true)
{dom334002.setAttribute("readonly",true);
} else
{}
return dom334002;
})());
return dom334001;
})());
dom334000.appendChild((function (){var dom334003 = document.createElement("em");if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)))
{dom334003.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)));
} else
{}
dom334003.appendChild(document.createTextNode("to"));
return dom334003;
})());
dom334000.appendChild((function (){var dom334004 = document.createElement("div");dom334004.className = "form-group";
dom334004.appendChild((function (){var dom334005 = document.createElement("input");dom334005.className = "form-control date-picker";
dom334005.setAttribute("id","end-time");
if(true)
{dom334005.setAttribute("readonly",true);
} else
{}
return dom334005;
})());
return dom334004;
})());
dom334000.appendChild((function (){var dom334006 = document.createElement("button");dom334006.className = "btn btn-primary btn-sm";
dom334006.setAttribute("id","update-stats");
dom334006.appendChild(document.createTextNode("Update"));
return dom334006;
})());
return dom334000;
})());
return dom333998;
})());
dom333997.appendChild((function (){var dom334007 = document.createElement("div");dom334007.className = "panel-body";
dom334007.appendChild((function (){var dom334008 = document.createElement("div");dom334008.className = "analytics-highcharts";
return dom334008;
})());
return dom334007;
})());
dom333997.appendChild((function (){var dom334009 = document.createElement("div");dom334009.className = "panel-footer row";
dom334009.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.components.dashboard.dashboard_metrics.call(null)));
return dom334009;
})());
return dom333997;
});
foundation.test.components.dashboard.dashboard = (function dashboard(id,state){if(typeof foundation.test.components.dashboard.t334013 !== 'undefined')
{} else
{
/**
* @constructor
*/
foundation.test.components.dashboard.t334013 = (function (state,id,dashboard,meta334014){
this.state = state;
this.id = id;
this.dashboard = dashboard;
this.meta334014 = meta334014;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
foundation.test.components.dashboard.t334013.cljs$lang$type = true;
foundation.test.components.dashboard.t334013.cljs$lang$ctorStr = "foundation.test.components.dashboard/t334013";
foundation.test.components.dashboard.t334013.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"foundation.test.components.dashboard/t334013");
});
foundation.test.components.dashboard.t334013.prototype.foundation$app$ui$IWithChildren$ = true;
foundation.test.components.dashboard.t334013.prototype.foundation$app$ui$IWithChildren$_with_children$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#stats-list-group","#stats-list-group",1832286227)], null);
});
foundation.test.components.dashboard.t334013.prototype.foundation$app$ui$IRender$ = true;
foundation.test.components.dashboard.t334013.prototype.foundation$app$ui$IRender$_render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return foundation.test.components.dashboard.dashboard_template.call(null,self__.id);
});
foundation.test.components.dashboard.t334013.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_334015){var self__ = this;
var _334015__$1 = this;return self__.meta334014;
});
foundation.test.components.dashboard.t334013.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_334015,meta334014__$1){var self__ = this;
var _334015__$1 = this;return (new foundation.test.components.dashboard.t334013(self__.state,self__.id,self__.dashboard,meta334014__$1));
});
foundation.test.components.dashboard.__GT_t334013 = (function __GT_t334013(state__$1,id__$1,dashboard__$1,meta334014){return (new foundation.test.components.dashboard.t334013(state__$1,id__$1,dashboard__$1,meta334014));
});
}
return (new foundation.test.components.dashboard.t334013(state,id,dashboard,null));
});

//# sourceMappingURL=dashboard.js.map