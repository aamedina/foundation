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
foundation.test.components.dashboard.dashboard_metric = (function dashboard_metric(p__194519){var vec__194528 = p__194519;var metric = cljs.core.nth.call(null,vec__194528,0,null);var cpa = cljs.core.nth.call(null,vec__194528,1,null);var rate = cljs.core.nth.call(null,vec__194528,2,null);var dom194529 = document.createElement("ul");dom194529.className = "list-group";
dom194529.appendChild((function (){var dom194530 = document.createElement("li");dom194530.className = "list-group-item";
if(cljs.core.truth_(metric))
{dom194530.setAttribute("id",metric);
} else
{}
dom194530.appendChild((function (){var dom194531 = document.createElement("h5");dom194531.className = "metric-header list-group-item-heading";
dom194531.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(metric)].join('')));
return dom194531;
})());
return dom194530;
})());
dom194529.appendChild((function (){var dom194532 = document.createElement("li");dom194532.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-cpa")].join('')))
{dom194532.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-cpa")].join(''));
} else
{}
dom194532.appendChild((function (){var dom194533 = document.createElement("small");dom194533.className = "list-group-item-text";
dom194533.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(cpa)].join('')));
return dom194533;
})());
return dom194532;
})());
dom194529.appendChild((function (){var dom194534 = document.createElement("li");dom194534.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-rate")].join('')))
{dom194534.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-rate")].join(''));
} else
{}
dom194534.appendChild((function (){var dom194535 = document.createElement("small");dom194535.className = "list-group-item-text";
dom194535.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(rate)].join('')));
return dom194535;
})());
return dom194534;
})());
return dom194529;
});
foundation.test.components.dashboard.dashboard_template = (function dashboard_template(id){var dom194554 = document.createElement("div");dom194554.className = "twitter-stats panel panel-default";
if(cljs.core.truth_(id))
{dom194554.setAttribute("id",id);
} else
{}
dom194554.appendChild((function (){var dom194555 = document.createElement("div");dom194555.className = "panel-heading";
dom194555.appendChild((function (){var dom194556 = document.createElement("h1");dom194556.className = "panel-title";
if("resource-id")
{dom194556.setAttribute("id","resource-id");
} else
{}
return dom194556;
})());
dom194555.appendChild((function (){var dom194557 = document.createElement("div");dom194557.className = "form-inline pull-right";
dom194557.appendChild((function (){var dom194558 = document.createElement("div");dom194558.className = "form-group";
dom194558.appendChild((function (){var dom194559 = document.createElement("input");dom194559.className = "form-control date-picker";
dom194559.setAttribute("id","start-time");
if(true)
{dom194559.setAttribute("readonly",true);
} else
{}
return dom194559;
})());
return dom194558;
})());
dom194557.appendChild((function (){var dom194560 = document.createElement("em");if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)))
{dom194560.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)));
} else
{}
dom194560.appendChild(document.createTextNode("to"));
return dom194560;
})());
dom194557.appendChild((function (){var dom194561 = document.createElement("div");dom194561.className = "form-group";
dom194561.appendChild((function (){var dom194562 = document.createElement("input");dom194562.className = "form-control date-picker";
dom194562.setAttribute("id","end-time");
if(true)
{dom194562.setAttribute("readonly",true);
} else
{}
return dom194562;
})());
return dom194561;
})());
dom194557.appendChild((function (){var dom194563 = document.createElement("button");dom194563.className = "btn btn-primary btn-sm";
dom194563.setAttribute("id","update-stats");
dom194563.appendChild(document.createTextNode("Update"));
return dom194563;
})());
return dom194557;
})());
return dom194555;
})());
dom194554.appendChild((function (){var dom194564 = document.createElement("div");dom194564.className = "panel-body";
dom194564.appendChild((function (){var dom194565 = document.createElement("div");dom194565.className = "analytics-highcharts";
return dom194565;
})());
return dom194564;
})());
dom194554.appendChild((function (){var dom194566 = document.createElement("div");dom194566.className = "panel-footer row";
dom194566.appendChild((function (){var dom194567 = document.createElement("div");dom194567.className = "twitter-stats";
dom194567.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8921__auto__ = (function iter__194568(s__194569){return (new cljs.core.LazySeq(null,(function (){var s__194569__$1 = s__194569;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__194569__$1);if(temp__4092__auto__)
{var s__194569__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__194569__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__194569__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__194571 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__194570 = 0;while(true){
if((i__194570 < size__8920__auto__))
{var metric = cljs.core._nth.call(null,c__8919__auto__,i__194570);cljs.core.chunk_append.call(null,b__194571,foundation.test.components.dashboard.dashboard_metric.call(null,metric));
{
var G__194572 = (i__194570 + 1);
i__194570 = G__194572;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__194571),iter__194568.call(null,cljs.core.chunk_rest.call(null,s__194569__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__194571),null);
}
} else
{var metric = cljs.core.first.call(null,s__194569__$2);return cljs.core.cons.call(null,foundation.test.components.dashboard.dashboard_metric.call(null,metric),iter__194568.call(null,cljs.core.rest.call(null,s__194569__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,foundation.test.components.dashboard.dashboard_metrics);
})()));
return dom194567;
})());
return dom194566;
})());
return dom194554;
});
foundation.test.components.dashboard.dashboard = (function dashboard(id,state){cljs.core.println.call(null,id,state);
if(typeof foundation.test.components.dashboard.t194576 !== 'undefined')
{} else
{
/**
* @constructor
*/
foundation.test.components.dashboard.t194576 = (function (state,id,dashboard,meta194577){
this.state = state;
this.id = id;
this.dashboard = dashboard;
this.meta194577 = meta194577;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
foundation.test.components.dashboard.t194576.cljs$lang$type = true;
foundation.test.components.dashboard.t194576.cljs$lang$ctorStr = "foundation.test.components.dashboard/t194576";
foundation.test.components.dashboard.t194576.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"foundation.test.components.dashboard/t194576");
});
foundation.test.components.dashboard.t194576.prototype.foundation$app$ui$IRender$ = true;
foundation.test.components.dashboard.t194576.prototype.foundation$app$ui$IRender$_render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return foundation.test.components.dashboard.dashboard_template.call(null,self__.id);
});
foundation.test.components.dashboard.t194576.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_194578){var self__ = this;
var _194578__$1 = this;return self__.meta194577;
});
foundation.test.components.dashboard.t194576.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_194578,meta194577__$1){var self__ = this;
var _194578__$1 = this;return (new foundation.test.components.dashboard.t194576(self__.state,self__.id,self__.dashboard,meta194577__$1));
});
foundation.test.components.dashboard.__GT_t194576 = (function __GT_t194576(state__$1,id__$1,dashboard__$1,meta194577){return (new foundation.test.components.dashboard.t194576(state__$1,id__$1,dashboard__$1,meta194577));
});
}
return (new foundation.test.components.dashboard.t194576(state,id,dashboard,null));
});

//# sourceMappingURL=dashboard.js.map