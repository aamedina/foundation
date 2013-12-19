// Compiled by ClojureScript 0.0-2120
goog.provide('foundation.test.components.dashboard');
goog.require('cljs.core');
goog.require('dommy.core');
goog.require('dommy.core');
goog.require('foundation.test.models');
goog.require('foundation.test.models');
goog.require('foundation.test.templates');
goog.require('foundation.test.templates');
goog.require('foundation.app.ui');
goog.require('foundation.app.ui');
foundation.test.components.dashboard.dashboard_metrics = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Impressions","CPM","Impression Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Engagements","CPE","Engagement Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clicks","CPC","Click Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Retweets","CPRT","Retweet Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Replies","CPR","Reply Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Follows","CPF","Follow Rate"], null)], null);
foundation.test.components.dashboard.dashboard_metric = (function dashboard_metric(p__194676){var vec__194685 = p__194676;var metric = cljs.core.nth.call(null,vec__194685,0,null);var cpa = cljs.core.nth.call(null,vec__194685,1,null);var rate = cljs.core.nth.call(null,vec__194685,2,null);var dom194686 = document.createElement("ul");dom194686.className = "list-group";
dom194686.appendChild((function (){var dom194687 = document.createElement("li");dom194687.className = "list-group-item";
if(cljs.core.truth_(metric))
{dom194687.setAttribute("id",metric);
} else
{}
dom194687.appendChild((function (){var dom194688 = document.createElement("h5");dom194688.className = "metric-header list-group-item-heading";
dom194688.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(metric)].join('')));
return dom194688;
})());
return dom194687;
})());
dom194686.appendChild((function (){var dom194689 = document.createElement("li");dom194689.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-cpa")].join('')))
{dom194689.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-cpa")].join(''));
} else
{}
dom194689.appendChild((function (){var dom194690 = document.createElement("small");dom194690.className = "list-group-item-text";
dom194690.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(cpa)].join('')));
return dom194690;
})());
return dom194689;
})());
dom194686.appendChild((function (){var dom194691 = document.createElement("li");dom194691.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-rate")].join('')))
{dom194691.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-rate")].join(''));
} else
{}
dom194691.appendChild((function (){var dom194692 = document.createElement("small");dom194692.className = "list-group-item-text";
dom194692.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(rate)].join('')));
return dom194692;
})());
return dom194691;
})());
return dom194686;
});
foundation.test.components.dashboard.dashboard_template = (function dashboard_template(id){var dom194711 = document.createElement("div");dom194711.className = "twitter-stats panel panel-default";
if(cljs.core.truth_(id))
{dom194711.setAttribute("id",id);
} else
{}
dom194711.appendChild((function (){var dom194712 = document.createElement("div");dom194712.className = "panel-heading";
dom194712.appendChild((function (){var dom194713 = document.createElement("h1");dom194713.className = "panel-title";
if("resource-id")
{dom194713.setAttribute("id","resource-id");
} else
{}
return dom194713;
})());
dom194712.appendChild((function (){var dom194714 = document.createElement("div");dom194714.className = "form-inline pull-right";
dom194714.appendChild((function (){var dom194715 = document.createElement("div");dom194715.className = "form-group";
dom194715.appendChild((function (){var dom194716 = document.createElement("input");dom194716.className = "form-control date-picker";
dom194716.setAttribute("id","start-time");
if(true)
{dom194716.setAttribute("readonly",true);
} else
{}
return dom194716;
})());
return dom194715;
})());
dom194714.appendChild((function (){var dom194717 = document.createElement("em");if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)))
{dom194717.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)));
} else
{}
dom194717.appendChild(document.createTextNode("to"));
return dom194717;
})());
dom194714.appendChild((function (){var dom194718 = document.createElement("div");dom194718.className = "form-group";
dom194718.appendChild((function (){var dom194719 = document.createElement("input");dom194719.className = "form-control date-picker";
dom194719.setAttribute("id","end-time");
if(true)
{dom194719.setAttribute("readonly",true);
} else
{}
return dom194719;
})());
return dom194718;
})());
dom194714.appendChild((function (){var dom194720 = document.createElement("button");dom194720.className = "btn btn-primary btn-sm";
dom194720.setAttribute("id","update-stats");
dom194720.appendChild(document.createTextNode("Update"));
return dom194720;
})());
return dom194714;
})());
return dom194712;
})());
dom194711.appendChild((function (){var dom194721 = document.createElement("div");dom194721.className = "panel-body";
dom194721.appendChild((function (){var dom194722 = document.createElement("div");dom194722.className = "analytics-highcharts";
return dom194722;
})());
return dom194721;
})());
dom194711.appendChild((function (){var dom194723 = document.createElement("div");dom194723.className = "panel-footer row";
dom194723.appendChild((function (){var dom194724 = document.createElement("div");dom194724.className = "twitter-stats";
dom194724.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8921__auto__ = (function iter__194725(s__194726){return (new cljs.core.LazySeq(null,(function (){var s__194726__$1 = s__194726;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__194726__$1);if(temp__4092__auto__)
{var s__194726__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__194726__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__194726__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__194728 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__194727 = 0;while(true){
if((i__194727 < size__8920__auto__))
{var metric = cljs.core._nth.call(null,c__8919__auto__,i__194727);cljs.core.chunk_append.call(null,b__194728,foundation.test.components.dashboard.dashboard_metric.call(null,metric));
{
var G__194729 = (i__194727 + 1);
i__194727 = G__194729;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__194728),iter__194725.call(null,cljs.core.chunk_rest.call(null,s__194726__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__194728),null);
}
} else
{var metric = cljs.core.first.call(null,s__194726__$2);return cljs.core.cons.call(null,foundation.test.components.dashboard.dashboard_metric.call(null,metric),iter__194725.call(null,cljs.core.rest.call(null,s__194726__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,foundation.test.components.dashboard.dashboard_metrics);
})()));
return dom194724;
})());
return dom194723;
})());
return dom194711;
});
foundation.test.components.dashboard.dashboard = (function dashboard(id,state){if(typeof foundation.test.components.dashboard.t194733 !== 'undefined')
{} else
{
/**
* @constructor
*/
foundation.test.components.dashboard.t194733 = (function (state,id,dashboard,meta194734){
this.state = state;
this.id = id;
this.dashboard = dashboard;
this.meta194734 = meta194734;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
foundation.test.components.dashboard.t194733.cljs$lang$type = true;
foundation.test.components.dashboard.t194733.cljs$lang$ctorStr = "foundation.test.components.dashboard/t194733";
foundation.test.components.dashboard.t194733.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"foundation.test.components.dashboard/t194733");
});
foundation.test.components.dashboard.t194733.prototype.foundation$app$ui$IRender$ = true;
foundation.test.components.dashboard.t194733.prototype.foundation$app$ui$IRender$_render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return foundation.test.components.dashboard.dashboard_template.call(null,self__.id);
});
foundation.test.components.dashboard.t194733.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_194735){var self__ = this;
var _194735__$1 = this;return self__.meta194734;
});
foundation.test.components.dashboard.t194733.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_194735,meta194734__$1){var self__ = this;
var _194735__$1 = this;return (new foundation.test.components.dashboard.t194733(self__.state,self__.id,self__.dashboard,meta194734__$1));
});
foundation.test.components.dashboard.__GT_t194733 = (function __GT_t194733(state__$1,id__$1,dashboard__$1,meta194734){return (new foundation.test.components.dashboard.t194733(state__$1,id__$1,dashboard__$1,meta194734));
});
}
return (new foundation.test.components.dashboard.t194733(state,id,dashboard,null));
});

//# sourceMappingURL=dashboard.js.map