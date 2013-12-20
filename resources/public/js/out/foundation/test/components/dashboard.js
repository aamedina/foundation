// Compiled by ClojureScript 0.0-2120
goog.provide('foundation.test.components.dashboard');
goog.require('cljs.core');
goog.require('foundation.test.templates');
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
goog.require('dommy.core');
foundation.test.components.dashboard.metrics = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Impressions","CPM","Impression Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Engagements","CPE","Engagement Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clicks","CPC","Click Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Retweets","CPRT","Retweet Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Replies","CPR","Reply Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Follows","CPF","Follow Rate"], null)], null);
foundation.test.components.dashboard.dashboard_metrics = (function dashboard_metrics(){if(typeof foundation.test.components.dashboard.t336679 !== 'undefined')
{} else
{
/**
* @constructor
*/
foundation.test.components.dashboard.t336679 = (function (dashboard_metrics,meta336680){
this.dashboard_metrics = dashboard_metrics;
this.meta336680 = meta336680;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
foundation.test.components.dashboard.t336679.cljs$lang$type = true;
foundation.test.components.dashboard.t336679.cljs$lang$ctorStr = "foundation.test.components.dashboard/t336679";
foundation.test.components.dashboard.t336679.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"foundation.test.components.dashboard/t336679");
});
foundation.test.components.dashboard.t336679.prototype.dommy$template$PElement$ = true;
foundation.test.components.dashboard.t336679.prototype.dommy$template$PElement$_elem$arity$1 = (function (x){var self__ = this;
var x__$1 = this;return cljs.core.with_meta.call(null,dommy.template.__GT_node_like.call(null,foundation.app.ui._render.call(null,x__$1)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",3908964463),x__$1], null));
});
foundation.test.components.dashboard.t336679.prototype.foundation$app$ui$IClickable$ = true;
foundation.test.components.dashboard.t336679.prototype.foundation$app$ui$IClickable$_click$arity$2 = (function (x,e){var self__ = this;
var x__$1 = this;var id = cljs.core.apply.call(null,cljs.core.str,(cljs.core.seq.call(null,e.target.id)) || (cljs.core.seq.call(null,e.target.parentNode.id)));var el = document.querySelector(dommy.core.selector.call(null,[cljs.core.str("#"),cljs.core.str(id)].join('')));var prev = dommy.template.__GT_node_like.call(null,document.querySelector("div.twitter-stats#stats-list-group")).querySelector("li.list-group-item.active");if(cljs.core.truth_(dommy.core.has_class_QMARK_.call(null,el,new cljs.core.Keyword(null,"active","active",3885920888))))
{return null;
} else
{dommy.core.add_class_BANG_.call(null,el,new cljs.core.Keyword(null,"active","active",3885920888));
var G__336682 = prev;var G__336682__$1 = (((G__336682 == null))?null:dommy.core.remove_class_BANG_.call(null,G__336682,new cljs.core.Keyword(null,"active","active",3885920888)));return G__336682__$1;
}
});
foundation.test.components.dashboard.t336679.prototype.foundation$app$ui$IRender$ = true;
foundation.test.components.dashboard.t336679.prototype.foundation$app$ui$IRender$_render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.twitter-stats#stats-list-group","div.twitter-stats#stats-list-group",1533542123),(function (){var iter__8921__auto__ = (function iter__336683(s__336684){return (new cljs.core.LazySeq(null,(function (){var s__336684__$1 = s__336684;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__336684__$1);if(temp__4092__auto__)
{var s__336684__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__336684__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__336684__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__336686 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__336685 = 0;while(true){
if((i__336685 < size__8920__auto__))
{var vec__336689 = cljs.core._nth.call(null,c__8919__auto__,i__336685);var metric = cljs.core.nth.call(null,vec__336689,0,null);var cpa = cljs.core.nth.call(null,vec__336689,1,null);var rate = cljs.core.nth.call(null,vec__336689,2,null);cljs.core.chunk_append.call(null,b__336686,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.list-group","ul.list-group",4606204857),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",1805578033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),metric], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.metric-header.list-group-item-heading","h5.metric-header.list-group-item-heading",1171357138),[cljs.core.str("0 "),cljs.core.str(metric)].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",1805578033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),[cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.list-group-item-text","small.list-group-item-text",4177219747),[cljs.core.str("0 "),cljs.core.str(cpa)].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",1805578033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),[cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.list-group-item-text","small.list-group-item-text",4177219747),[cljs.core.str("0 "),cljs.core.str(rate)].join('')], null)], null)], null));
{
var G__336691 = (i__336685 + 1);
i__336685 = G__336691;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__336686),iter__336683.call(null,cljs.core.chunk_rest.call(null,s__336684__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__336686),null);
}
} else
{var vec__336690 = cljs.core.first.call(null,s__336684__$2);var metric = cljs.core.nth.call(null,vec__336690,0,null);var cpa = cljs.core.nth.call(null,vec__336690,1,null);var rate = cljs.core.nth.call(null,vec__336690,2,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.list-group","ul.list-group",4606204857),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",1805578033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),metric], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.metric-header.list-group-item-heading","h5.metric-header.list-group-item-heading",1171357138),[cljs.core.str("0 "),cljs.core.str(metric)].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",1805578033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),[cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.list-group-item-text","small.list-group-item-text",4177219747),[cljs.core.str("0 "),cljs.core.str(cpa)].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",1805578033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),[cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.list-group-item-text","small.list-group-item-text",4177219747),[cljs.core.str("0 "),cljs.core.str(rate)].join('')], null)], null)], null),iter__336683.call(null,cljs.core.rest.call(null,s__336684__$2)));
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
foundation.test.components.dashboard.t336679.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_336681){var self__ = this;
var _336681__$1 = this;return self__.meta336680;
});
foundation.test.components.dashboard.t336679.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_336681,meta336680__$1){var self__ = this;
var _336681__$1 = this;return (new foundation.test.components.dashboard.t336679(self__.dashboard_metrics,meta336680__$1));
});
foundation.test.components.dashboard.__GT_t336679 = (function __GT_t336679(dashboard_metrics__$1,meta336680){return (new foundation.test.components.dashboard.t336679(dashboard_metrics__$1,meta336680));
});
}
return (new foundation.test.components.dashboard.t336679(dashboard_metrics,null));
});
foundation.test.components.dashboard.dashboard_template = (function dashboard_template(id){var dom336705 = document.createElement("div");dom336705.className = "twitter-stats panel panel-default";
if(cljs.core.truth_(id))
{dom336705.setAttribute("id",id);
} else
{}
dom336705.appendChild((function (){var dom336706 = document.createElement("div");dom336706.className = "panel-heading";
dom336706.appendChild((function (){var dom336707 = document.createElement("h1");dom336707.className = "panel-title";
if("resource-id")
{dom336707.setAttribute("id","resource-id");
} else
{}
return dom336707;
})());
dom336706.appendChild((function (){var dom336708 = document.createElement("div");dom336708.className = "form-inline pull-right";
dom336708.appendChild((function (){var dom336709 = document.createElement("div");dom336709.className = "form-group";
dom336709.appendChild((function (){var dom336710 = document.createElement("input");dom336710.className = "form-control date-picker";
dom336710.setAttribute("id","start-time");
if(true)
{dom336710.setAttribute("readonly",true);
} else
{}
return dom336710;
})());
return dom336709;
})());
dom336708.appendChild((function (){var dom336711 = document.createElement("em");if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)))
{dom336711.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)));
} else
{}
dom336711.appendChild(document.createTextNode("to"));
return dom336711;
})());
dom336708.appendChild((function (){var dom336712 = document.createElement("div");dom336712.className = "form-group";
dom336712.appendChild((function (){var dom336713 = document.createElement("input");dom336713.className = "form-control date-picker";
dom336713.setAttribute("id","end-time");
if(true)
{dom336713.setAttribute("readonly",true);
} else
{}
return dom336713;
})());
return dom336712;
})());
dom336708.appendChild((function (){var dom336714 = document.createElement("button");dom336714.className = "btn btn-primary btn-sm";
dom336714.setAttribute("id","update-stats");
dom336714.appendChild(document.createTextNode("Update"));
return dom336714;
})());
return dom336708;
})());
return dom336706;
})());
dom336705.appendChild((function (){var dom336715 = document.createElement("div");dom336715.className = "panel-body";
dom336715.appendChild((function (){var dom336716 = document.createElement("div");dom336716.className = "analytics-highcharts";
return dom336716;
})());
return dom336715;
})());
dom336705.appendChild((function (){var dom336717 = document.createElement("div");dom336717.className = "panel-footer row";
dom336717.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.components.dashboard.dashboard_metrics.call(null)));
return dom336717;
})());
return dom336705;
});
foundation.test.components.dashboard.dashboard = (function dashboard(id,state){if(typeof foundation.test.components.dashboard.t336721 !== 'undefined')
{} else
{
/**
* @constructor
*/
foundation.test.components.dashboard.t336721 = (function (state,id,dashboard,meta336722){
this.state = state;
this.id = id;
this.dashboard = dashboard;
this.meta336722 = meta336722;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
foundation.test.components.dashboard.t336721.cljs$lang$type = true;
foundation.test.components.dashboard.t336721.cljs$lang$ctorStr = "foundation.test.components.dashboard/t336721";
foundation.test.components.dashboard.t336721.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"foundation.test.components.dashboard/t336721");
});
foundation.test.components.dashboard.t336721.prototype.foundation$app$ui$IWithChildren$ = true;
foundation.test.components.dashboard.t336721.prototype.foundation$app$ui$IWithChildren$_with_children$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#stats-list-group","#stats-list-group",1832286227)], null);
});
foundation.test.components.dashboard.t336721.prototype.foundation$app$ui$IRender$ = true;
foundation.test.components.dashboard.t336721.prototype.foundation$app$ui$IRender$_render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return foundation.test.components.dashboard.dashboard_template.call(null,self__.id);
});
foundation.test.components.dashboard.t336721.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_336723){var self__ = this;
var _336723__$1 = this;return self__.meta336722;
});
foundation.test.components.dashboard.t336721.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_336723,meta336722__$1){var self__ = this;
var _336723__$1 = this;return (new foundation.test.components.dashboard.t336721(self__.state,self__.id,self__.dashboard,meta336722__$1));
});
foundation.test.components.dashboard.__GT_t336721 = (function __GT_t336721(state__$1,id__$1,dashboard__$1,meta336722){return (new foundation.test.components.dashboard.t336721(state__$1,id__$1,dashboard__$1,meta336722));
});
}
return (new foundation.test.components.dashboard.t336721(state,id,dashboard,null));
});

//# sourceMappingURL=dashboard.js.map