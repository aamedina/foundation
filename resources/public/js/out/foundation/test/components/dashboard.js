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
foundation.test.components.dashboard.dashboard_metrics = (function dashboard_metrics(){if(typeof foundation.test.components.dashboard.t336736 !== 'undefined')
{} else
{
/**
* @constructor
*/
foundation.test.components.dashboard.t336736 = (function (dashboard_metrics,meta336737){
this.dashboard_metrics = dashboard_metrics;
this.meta336737 = meta336737;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
foundation.test.components.dashboard.t336736.cljs$lang$type = true;
foundation.test.components.dashboard.t336736.cljs$lang$ctorStr = "foundation.test.components.dashboard/t336736";
foundation.test.components.dashboard.t336736.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"foundation.test.components.dashboard/t336736");
});
foundation.test.components.dashboard.t336736.prototype.dommy$template$PElement$ = true;
foundation.test.components.dashboard.t336736.prototype.dommy$template$PElement$_elem$arity$1 = (function (x){var self__ = this;
var x__$1 = this;return cljs.core.with_meta.call(null,dommy.template.__GT_node_like.call(null,foundation.app.ui._render.call(null,x__$1)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",3908964463),x__$1], null));
});
foundation.test.components.dashboard.t336736.prototype.foundation$app$ui$IClickable$ = true;
foundation.test.components.dashboard.t336736.prototype.foundation$app$ui$IClickable$_click$arity$2 = (function (x,e){var self__ = this;
var x__$1 = this;var id = cljs.core.apply.call(null,cljs.core.str,(cljs.core.seq.call(null,e.target.id)) || (cljs.core.seq.call(null,e.target.parentNode.id)));var el = document.querySelector(dommy.core.selector.call(null,[cljs.core.str("#"),cljs.core.str(id)].join('')));var prev = dommy.template.__GT_node_like.call(null,document.querySelector("div.twitter-stats#stats-list-group")).querySelector("li.list-group-item.active");if(cljs.core.truth_(dommy.core.has_class_QMARK_.call(null,el,new cljs.core.Keyword(null,"active","active",3885920888))))
{return null;
} else
{dommy.core.add_class_BANG_.call(null,el,new cljs.core.Keyword(null,"active","active",3885920888));
var G__336739 = prev;var G__336739__$1 = (((G__336739 == null))?null:dommy.core.remove_class_BANG_.call(null,G__336739,new cljs.core.Keyword(null,"active","active",3885920888)));return G__336739__$1;
}
});
foundation.test.components.dashboard.t336736.prototype.foundation$app$ui$IRender$ = true;
foundation.test.components.dashboard.t336736.prototype.foundation$app$ui$IRender$_render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.twitter-stats#stats-list-group","div.twitter-stats#stats-list-group",1533542123),(function (){var iter__8921__auto__ = (function iter__336740(s__336741){return (new cljs.core.LazySeq(null,(function (){var s__336741__$1 = s__336741;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__336741__$1);if(temp__4092__auto__)
{var s__336741__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__336741__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__336741__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__336743 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__336742 = 0;while(true){
if((i__336742 < size__8920__auto__))
{var vec__336746 = cljs.core._nth.call(null,c__8919__auto__,i__336742);var metric = cljs.core.nth.call(null,vec__336746,0,null);var cpa = cljs.core.nth.call(null,vec__336746,1,null);var rate = cljs.core.nth.call(null,vec__336746,2,null);cljs.core.chunk_append.call(null,b__336743,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.list-group","ul.list-group",4606204857),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",1805578033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),metric], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.metric-header.list-group-item-heading","h5.metric-header.list-group-item-heading",1171357138),[cljs.core.str("0 "),cljs.core.str(metric)].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",1805578033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),[cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.list-group-item-text","small.list-group-item-text",4177219747),[cljs.core.str("0 "),cljs.core.str(cpa)].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",1805578033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),[cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.list-group-item-text","small.list-group-item-text",4177219747),[cljs.core.str("0 "),cljs.core.str(rate)].join('')], null)], null)], null));
{
var G__336748 = (i__336742 + 1);
i__336742 = G__336748;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__336743),iter__336740.call(null,cljs.core.chunk_rest.call(null,s__336741__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__336743),null);
}
} else
{var vec__336747 = cljs.core.first.call(null,s__336741__$2);var metric = cljs.core.nth.call(null,vec__336747,0,null);var cpa = cljs.core.nth.call(null,vec__336747,1,null);var rate = cljs.core.nth.call(null,vec__336747,2,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.list-group","ul.list-group",4606204857),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",1805578033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),metric], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.metric-header.list-group-item-heading","h5.metric-header.list-group-item-heading",1171357138),[cljs.core.str("0 "),cljs.core.str(metric)].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",1805578033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),[cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.list-group-item-text","small.list-group-item-text",4177219747),[cljs.core.str("0 "),cljs.core.str(cpa)].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",1805578033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),[cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.list-group-item-text","small.list-group-item-text",4177219747),[cljs.core.str("0 "),cljs.core.str(rate)].join('')], null)], null)], null),iter__336740.call(null,cljs.core.rest.call(null,s__336741__$2)));
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
foundation.test.components.dashboard.t336736.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_336738){var self__ = this;
var _336738__$1 = this;return self__.meta336737;
});
foundation.test.components.dashboard.t336736.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_336738,meta336737__$1){var self__ = this;
var _336738__$1 = this;return (new foundation.test.components.dashboard.t336736(self__.dashboard_metrics,meta336737__$1));
});
foundation.test.components.dashboard.__GT_t336736 = (function __GT_t336736(dashboard_metrics__$1,meta336737){return (new foundation.test.components.dashboard.t336736(dashboard_metrics__$1,meta336737));
});
}
return (new foundation.test.components.dashboard.t336736(dashboard_metrics,null));
});
foundation.test.components.dashboard.dashboard_template = (function dashboard_template(id){var dom336762 = document.createElement("div");dom336762.className = "twitter-stats panel panel-default";
if(cljs.core.truth_(id))
{dom336762.setAttribute("id",id);
} else
{}
dom336762.appendChild((function (){var dom336763 = document.createElement("div");dom336763.className = "panel-heading";
dom336763.appendChild((function (){var dom336764 = document.createElement("h1");dom336764.className = "panel-title";
if("resource-id")
{dom336764.setAttribute("id","resource-id");
} else
{}
return dom336764;
})());
dom336763.appendChild((function (){var dom336765 = document.createElement("div");dom336765.className = "form-inline pull-right";
dom336765.appendChild((function (){var dom336766 = document.createElement("div");dom336766.className = "form-group";
dom336766.appendChild((function (){var dom336767 = document.createElement("input");dom336767.className = "form-control date-picker";
dom336767.setAttribute("id","start-time");
if(true)
{dom336767.setAttribute("readonly",true);
} else
{}
return dom336767;
})());
return dom336766;
})());
dom336765.appendChild((function (){var dom336768 = document.createElement("em");if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)))
{dom336768.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)));
} else
{}
dom336768.appendChild(document.createTextNode("to"));
return dom336768;
})());
dom336765.appendChild((function (){var dom336769 = document.createElement("div");dom336769.className = "form-group";
dom336769.appendChild((function (){var dom336770 = document.createElement("input");dom336770.className = "form-control date-picker";
dom336770.setAttribute("id","end-time");
if(true)
{dom336770.setAttribute("readonly",true);
} else
{}
return dom336770;
})());
return dom336769;
})());
dom336765.appendChild((function (){var dom336771 = document.createElement("button");dom336771.className = "btn btn-primary btn-sm";
dom336771.setAttribute("id","update-stats");
dom336771.appendChild(document.createTextNode("Update"));
return dom336771;
})());
return dom336765;
})());
return dom336763;
})());
dom336762.appendChild((function (){var dom336772 = document.createElement("div");dom336772.className = "panel-body";
dom336772.appendChild((function (){var dom336773 = document.createElement("div");dom336773.className = "analytics-highcharts";
return dom336773;
})());
return dom336772;
})());
dom336762.appendChild((function (){var dom336774 = document.createElement("div");dom336774.className = "panel-footer row";
dom336774.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.components.dashboard.dashboard_metrics.call(null)));
return dom336774;
})());
return dom336762;
});
foundation.test.components.dashboard.dashboard = (function dashboard(id,state){if(typeof foundation.test.components.dashboard.t336778 !== 'undefined')
{} else
{
/**
* @constructor
*/
foundation.test.components.dashboard.t336778 = (function (state,id,dashboard,meta336779){
this.state = state;
this.id = id;
this.dashboard = dashboard;
this.meta336779 = meta336779;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
foundation.test.components.dashboard.t336778.cljs$lang$type = true;
foundation.test.components.dashboard.t336778.cljs$lang$ctorStr = "foundation.test.components.dashboard/t336778";
foundation.test.components.dashboard.t336778.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"foundation.test.components.dashboard/t336778");
});
foundation.test.components.dashboard.t336778.prototype.foundation$app$ui$IWithChildren$ = true;
foundation.test.components.dashboard.t336778.prototype.foundation$app$ui$IWithChildren$_with_children$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#stats-list-group","#stats-list-group",1832286227)], null);
});
foundation.test.components.dashboard.t336778.prototype.foundation$app$ui$IRender$ = true;
foundation.test.components.dashboard.t336778.prototype.foundation$app$ui$IRender$_render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return foundation.test.components.dashboard.dashboard_template.call(null,self__.id);
});
foundation.test.components.dashboard.t336778.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_336780){var self__ = this;
var _336780__$1 = this;return self__.meta336779;
});
foundation.test.components.dashboard.t336778.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_336780,meta336779__$1){var self__ = this;
var _336780__$1 = this;return (new foundation.test.components.dashboard.t336778(self__.state,self__.id,self__.dashboard,meta336779__$1));
});
foundation.test.components.dashboard.__GT_t336778 = (function __GT_t336778(state__$1,id__$1,dashboard__$1,meta336779){return (new foundation.test.components.dashboard.t336778(state__$1,id__$1,dashboard__$1,meta336779));
});
}
return (new foundation.test.components.dashboard.t336778(state,id,dashboard,null));
});

//# sourceMappingURL=dashboard.js.map