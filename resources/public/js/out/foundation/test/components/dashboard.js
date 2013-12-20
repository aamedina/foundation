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
foundation.test.components.dashboard.dashboard_metric = (function dashboard_metric(p__269351){var vec__269360 = p__269351;var metric = cljs.core.nth.call(null,vec__269360,0,null);var cpa = cljs.core.nth.call(null,vec__269360,1,null);var rate = cljs.core.nth.call(null,vec__269360,2,null);var dom269361 = document.createElement("ul");dom269361.className = "list-group";
dom269361.appendChild((function (){var dom269362 = document.createElement("li");dom269362.className = "list-group-item";
if(cljs.core.truth_(metric))
{dom269362.setAttribute("id",metric);
} else
{}
dom269362.appendChild((function (){var dom269363 = document.createElement("h5");dom269363.className = "metric-header list-group-item-heading";
dom269363.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(metric)].join('')));
return dom269363;
})());
return dom269362;
})());
dom269361.appendChild((function (){var dom269364 = document.createElement("li");dom269364.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-cpa")].join('')))
{dom269364.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-cpa")].join(''));
} else
{}
dom269364.appendChild((function (){var dom269365 = document.createElement("small");dom269365.className = "list-group-item-text";
dom269365.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(cpa)].join('')));
return dom269365;
})());
return dom269364;
})());
dom269361.appendChild((function (){var dom269366 = document.createElement("li");dom269366.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-rate")].join('')))
{dom269366.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-rate")].join(''));
} else
{}
dom269366.appendChild((function (){var dom269367 = document.createElement("small");dom269367.className = "list-group-item-text";
dom269367.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(rate)].join('')));
return dom269367;
})());
return dom269366;
})());
return dom269361;
});
foundation.test.components.dashboard.dashboard_template = (function dashboard_template(id){var dom269386 = document.createElement("div");dom269386.className = "twitter-stats panel panel-default";
if(cljs.core.truth_(id))
{dom269386.setAttribute("id",id);
} else
{}
dom269386.appendChild((function (){var dom269387 = document.createElement("div");dom269387.className = "panel-heading";
dom269387.appendChild((function (){var dom269388 = document.createElement("h1");dom269388.className = "panel-title";
if("resource-id")
{dom269388.setAttribute("id","resource-id");
} else
{}
return dom269388;
})());
dom269387.appendChild((function (){var dom269389 = document.createElement("div");dom269389.className = "form-inline pull-right";
dom269389.appendChild((function (){var dom269390 = document.createElement("div");dom269390.className = "form-group";
dom269390.appendChild((function (){var dom269391 = document.createElement("input");dom269391.className = "form-control date-picker";
dom269391.setAttribute("id","start-time");
if(true)
{dom269391.setAttribute("readonly",true);
} else
{}
return dom269391;
})());
return dom269390;
})());
dom269389.appendChild((function (){var dom269392 = document.createElement("em");if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)))
{dom269392.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)));
} else
{}
dom269392.appendChild(document.createTextNode("to"));
return dom269392;
})());
dom269389.appendChild((function (){var dom269393 = document.createElement("div");dom269393.className = "form-group";
dom269393.appendChild((function (){var dom269394 = document.createElement("input");dom269394.className = "form-control date-picker";
dom269394.setAttribute("id","end-time");
if(true)
{dom269394.setAttribute("readonly",true);
} else
{}
return dom269394;
})());
return dom269393;
})());
dom269389.appendChild((function (){var dom269395 = document.createElement("button");dom269395.className = "btn btn-primary btn-sm";
dom269395.setAttribute("id","update-stats");
dom269395.appendChild(document.createTextNode("Update"));
return dom269395;
})());
return dom269389;
})());
return dom269387;
})());
dom269386.appendChild((function (){var dom269396 = document.createElement("div");dom269396.className = "panel-body";
dom269396.appendChild((function (){var dom269397 = document.createElement("div");dom269397.className = "analytics-highcharts";
return dom269397;
})());
return dom269396;
})());
dom269386.appendChild((function (){var dom269398 = document.createElement("div");dom269398.className = "panel-footer row";
dom269398.appendChild((function (){var dom269399 = document.createElement("div");dom269399.className = "twitter-stats";
dom269399.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8921__auto__ = (function iter__269400(s__269401){return (new cljs.core.LazySeq(null,(function (){var s__269401__$1 = s__269401;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__269401__$1);if(temp__4092__auto__)
{var s__269401__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__269401__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__269401__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__269403 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__269402 = 0;while(true){
if((i__269402 < size__8920__auto__))
{var metric = cljs.core._nth.call(null,c__8919__auto__,i__269402);cljs.core.chunk_append.call(null,b__269403,foundation.test.components.dashboard.dashboard_metric.call(null,metric));
{
var G__269404 = (i__269402 + 1);
i__269402 = G__269404;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__269403),iter__269400.call(null,cljs.core.chunk_rest.call(null,s__269401__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__269403),null);
}
} else
{var metric = cljs.core.first.call(null,s__269401__$2);return cljs.core.cons.call(null,foundation.test.components.dashboard.dashboard_metric.call(null,metric),iter__269400.call(null,cljs.core.rest.call(null,s__269401__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,foundation.test.components.dashboard.dashboard_metrics);
})()));
return dom269399;
})());
return dom269398;
})());
return dom269386;
});
foundation.test.components.dashboard.dashboard = (function dashboard(id,state){if(typeof foundation.test.components.dashboard.t269408 !== 'undefined')
{} else
{
/**
* @constructor
*/
foundation.test.components.dashboard.t269408 = (function (state,id,dashboard,meta269409){
this.state = state;
this.id = id;
this.dashboard = dashboard;
this.meta269409 = meta269409;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
foundation.test.components.dashboard.t269408.cljs$lang$type = true;
foundation.test.components.dashboard.t269408.cljs$lang$ctorStr = "foundation.test.components.dashboard/t269408";
foundation.test.components.dashboard.t269408.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"foundation.test.components.dashboard/t269408");
});
foundation.test.components.dashboard.t269408.prototype.foundation$app$ui$IRender$ = true;
foundation.test.components.dashboard.t269408.prototype.foundation$app$ui$IRender$_render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return foundation.test.components.dashboard.dashboard_template.call(null,self__.id);
});
foundation.test.components.dashboard.t269408.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_269410){var self__ = this;
var _269410__$1 = this;return self__.meta269409;
});
foundation.test.components.dashboard.t269408.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_269410,meta269409__$1){var self__ = this;
var _269410__$1 = this;return (new foundation.test.components.dashboard.t269408(self__.state,self__.id,self__.dashboard,meta269409__$1));
});
foundation.test.components.dashboard.__GT_t269408 = (function __GT_t269408(state__$1,id__$1,dashboard__$1,meta269409){return (new foundation.test.components.dashboard.t269408(state__$1,id__$1,dashboard__$1,meta269409));
});
}
return (new foundation.test.components.dashboard.t269408(state,id,dashboard,null));
});

//# sourceMappingURL=dashboard.js.map