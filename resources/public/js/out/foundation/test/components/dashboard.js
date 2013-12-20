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
foundation.test.components.dashboard.dashboard_metrics = (function dashboard_metrics(){if(typeof foundation.test.components.dashboard.t400014 !== 'undefined')
{} else
{
/**
* @constructor
*/
foundation.test.components.dashboard.t400014 = (function (dashboard_metrics,meta400015){
this.dashboard_metrics = dashboard_metrics;
this.meta400015 = meta400015;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
foundation.test.components.dashboard.t400014.cljs$lang$type = true;
foundation.test.components.dashboard.t400014.cljs$lang$ctorStr = "foundation.test.components.dashboard/t400014";
foundation.test.components.dashboard.t400014.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"foundation.test.components.dashboard/t400014");
});
foundation.test.components.dashboard.t400014.prototype.dommy$template$PElement$ = true;
foundation.test.components.dashboard.t400014.prototype.dommy$template$PElement$_elem$arity$1 = (function (x){var self__ = this;
var x__$1 = this;return cljs.core.with_meta.call(null,dommy.template.__GT_node_like.call(null,foundation.app.ui._render.call(null,x__$1)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",3908964463),x__$1], null));
});
foundation.test.components.dashboard.t400014.prototype.foundation$app$ui$IClickable$ = true;
foundation.test.components.dashboard.t400014.prototype.foundation$app$ui$IClickable$_click$arity$2 = (function (x,e){var self__ = this;
var x__$1 = this;var id = cljs.core.apply.call(null,cljs.core.str,(cljs.core.seq.call(null,e.target.id)) || (cljs.core.seq.call(null,e.target.parentNode.id)));var el = document.querySelector(dommy.core.selector.call(null,[cljs.core.str("#"),cljs.core.str(id)].join('')));var prev = dommy.template.__GT_node_like.call(null,document.querySelector("div.twitter-stats#stats-list-group")).querySelector("li.list-group-item.active");if(cljs.core.truth_(dommy.core.has_class_QMARK_.call(null,el,new cljs.core.Keyword(null,"active","active",3885920888))))
{return null;
} else
{dommy.core.add_class_BANG_.call(null,el,new cljs.core.Keyword(null,"active","active",3885920888));
var G__400017 = prev;var G__400017__$1 = (((G__400017 == null))?null:dommy.core.remove_class_BANG_.call(null,G__400017,new cljs.core.Keyword(null,"active","active",3885920888)));return G__400017__$1;
}
});
foundation.test.components.dashboard.t400014.prototype.foundation$app$ui$IRender$ = true;
foundation.test.components.dashboard.t400014.prototype.foundation$app$ui$IRender$_render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.twitter-stats#stats-list-group","div.twitter-stats#stats-list-group",1533542123),(function (){var iter__8921__auto__ = (function iter__400018(s__400019){return (new cljs.core.LazySeq(null,(function (){var s__400019__$1 = s__400019;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__400019__$1);if(temp__4092__auto__)
{var s__400019__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__400019__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__400019__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__400021 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__400020 = 0;while(true){
if((i__400020 < size__8920__auto__))
{var vec__400024 = cljs.core._nth.call(null,c__8919__auto__,i__400020);var metric = cljs.core.nth.call(null,vec__400024,0,null);var cpa = cljs.core.nth.call(null,vec__400024,1,null);var rate = cljs.core.nth.call(null,vec__400024,2,null);cljs.core.chunk_append.call(null,b__400021,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.list-group","ul.list-group",4606204857),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",1805578033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),metric], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.metric-header.list-group-item-heading","h5.metric-header.list-group-item-heading",1171357138),[cljs.core.str("0 "),cljs.core.str(metric)].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",1805578033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),[cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.list-group-item-text","small.list-group-item-text",4177219747),[cljs.core.str("0 "),cljs.core.str(cpa)].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",1805578033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),[cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.list-group-item-text","small.list-group-item-text",4177219747),[cljs.core.str("0 "),cljs.core.str(rate)].join('')], null)], null)], null));
{
var G__400026 = (i__400020 + 1);
i__400020 = G__400026;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__400021),iter__400018.call(null,cljs.core.chunk_rest.call(null,s__400019__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__400021),null);
}
} else
{var vec__400025 = cljs.core.first.call(null,s__400019__$2);var metric = cljs.core.nth.call(null,vec__400025,0,null);var cpa = cljs.core.nth.call(null,vec__400025,1,null);var rate = cljs.core.nth.call(null,vec__400025,2,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.list-group","ul.list-group",4606204857),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",1805578033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),metric], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.metric-header.list-group-item-heading","h5.metric-header.list-group-item-heading",1171357138),[cljs.core.str("0 "),cljs.core.str(metric)].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",1805578033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),[cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.list-group-item-text","small.list-group-item-text",4177219747),[cljs.core.str("0 "),cljs.core.str(cpa)].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",1805578033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),[cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.list-group-item-text","small.list-group-item-text",4177219747),[cljs.core.str("0 "),cljs.core.str(rate)].join('')], null)], null)], null),iter__400018.call(null,cljs.core.rest.call(null,s__400019__$2)));
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
foundation.test.components.dashboard.t400014.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_400016){var self__ = this;
var _400016__$1 = this;return self__.meta400015;
});
foundation.test.components.dashboard.t400014.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_400016,meta400015__$1){var self__ = this;
var _400016__$1 = this;return (new foundation.test.components.dashboard.t400014(self__.dashboard_metrics,meta400015__$1));
});
foundation.test.components.dashboard.__GT_t400014 = (function __GT_t400014(dashboard_metrics__$1,meta400015){return (new foundation.test.components.dashboard.t400014(dashboard_metrics__$1,meta400015));
});
}
return (new foundation.test.components.dashboard.t400014(dashboard_metrics,null));
});
foundation.test.components.dashboard.dashboard_template = (function dashboard_template(id){var dom400040 = document.createElement("div");dom400040.className = "twitter-stats panel panel-default";
if(cljs.core.truth_(id))
{dom400040.setAttribute("id",id);
} else
{}
dom400040.appendChild((function (){var dom400041 = document.createElement("div");dom400041.className = "panel-heading";
dom400041.appendChild((function (){var dom400042 = document.createElement("h1");dom400042.className = "panel-title";
if("resource-id")
{dom400042.setAttribute("id","resource-id");
} else
{}
return dom400042;
})());
dom400041.appendChild((function (){var dom400043 = document.createElement("div");dom400043.className = "form-inline pull-right";
dom400043.appendChild((function (){var dom400044 = document.createElement("div");dom400044.className = "form-group";
dom400044.appendChild((function (){var dom400045 = document.createElement("input");dom400045.className = "form-control date-picker";
dom400045.setAttribute("id","start-time");
if(true)
{dom400045.setAttribute("readonly",true);
} else
{}
return dom400045;
})());
return dom400044;
})());
dom400043.appendChild((function (){var dom400046 = document.createElement("em");if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)))
{dom400046.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)));
} else
{}
dom400046.appendChild(document.createTextNode("to"));
return dom400046;
})());
dom400043.appendChild((function (){var dom400047 = document.createElement("div");dom400047.className = "form-group";
dom400047.appendChild((function (){var dom400048 = document.createElement("input");dom400048.className = "form-control date-picker";
dom400048.setAttribute("id","end-time");
if(true)
{dom400048.setAttribute("readonly",true);
} else
{}
return dom400048;
})());
return dom400047;
})());
dom400043.appendChild((function (){var dom400049 = document.createElement("button");dom400049.className = "btn btn-primary btn-sm";
dom400049.setAttribute("id","update-stats");
dom400049.appendChild(document.createTextNode("Update"));
return dom400049;
})());
return dom400043;
})());
return dom400041;
})());
dom400040.appendChild((function (){var dom400050 = document.createElement("div");dom400050.className = "panel-body";
dom400050.appendChild((function (){var dom400051 = document.createElement("div");dom400051.className = "analytics-highcharts";
return dom400051;
})());
return dom400050;
})());
dom400040.appendChild((function (){var dom400052 = document.createElement("div");dom400052.className = "panel-footer row";
dom400052.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.components.dashboard.dashboard_metrics.call(null)));
return dom400052;
})());
return dom400040;
});
foundation.test.components.dashboard.dashboard = (function dashboard(id,state){if(typeof foundation.test.components.dashboard.t400056 !== 'undefined')
{} else
{
/**
* @constructor
*/
foundation.test.components.dashboard.t400056 = (function (state,id,dashboard,meta400057){
this.state = state;
this.id = id;
this.dashboard = dashboard;
this.meta400057 = meta400057;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
foundation.test.components.dashboard.t400056.cljs$lang$type = true;
foundation.test.components.dashboard.t400056.cljs$lang$ctorStr = "foundation.test.components.dashboard/t400056";
foundation.test.components.dashboard.t400056.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"foundation.test.components.dashboard/t400056");
});
foundation.test.components.dashboard.t400056.prototype.foundation$app$ui$IWithChildren$ = true;
foundation.test.components.dashboard.t400056.prototype.foundation$app$ui$IWithChildren$_with_children$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#stats-list-group","#stats-list-group",1832286227)], null);
});
foundation.test.components.dashboard.t400056.prototype.foundation$app$ui$IRender$ = true;
foundation.test.components.dashboard.t400056.prototype.foundation$app$ui$IRender$_render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return foundation.test.components.dashboard.dashboard_template.call(null,self__.id);
});
foundation.test.components.dashboard.t400056.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_400058){var self__ = this;
var _400058__$1 = this;return self__.meta400057;
});
foundation.test.components.dashboard.t400056.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_400058,meta400057__$1){var self__ = this;
var _400058__$1 = this;return (new foundation.test.components.dashboard.t400056(self__.state,self__.id,self__.dashboard,meta400057__$1));
});
foundation.test.components.dashboard.__GT_t400056 = (function __GT_t400056(state__$1,id__$1,dashboard__$1,meta400057){return (new foundation.test.components.dashboard.t400056(state__$1,id__$1,dashboard__$1,meta400057));
});
}
return (new foundation.test.components.dashboard.t400056(state,id,dashboard,null));
});

//# sourceMappingURL=dashboard.js.map