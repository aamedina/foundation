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
foundation.test.components.dashboard.dashboard_metrics = (function dashboard_metrics(renderer,new$){if(typeof foundation.test.components.dashboard.t409249 !== 'undefined')
{} else
{
/**
* @constructor
*/
foundation.test.components.dashboard.t409249 = (function (new$,renderer,dashboard_metrics,meta409250){
this.new$ = new$;
this.renderer = renderer;
this.dashboard_metrics = dashboard_metrics;
this.meta409250 = meta409250;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
foundation.test.components.dashboard.t409249.cljs$lang$type = true;
foundation.test.components.dashboard.t409249.cljs$lang$ctorStr = "foundation.test.components.dashboard/t409249";
foundation.test.components.dashboard.t409249.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"foundation.test.components.dashboard/t409249");
});
foundation.test.components.dashboard.t409249.prototype.dommy$template$PElement$ = true;
foundation.test.components.dashboard.t409249.prototype.dommy$template$PElement$_elem$arity$1 = (function (x){var self__ = this;
var x__$1 = this;return cljs.core.with_meta.call(null,dommy.template.__GT_node_like.call(null,foundation.app.ui._render.call(null,x__$1)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",3908964463),x__$1], null));
});
foundation.test.components.dashboard.t409249.prototype.foundation$app$ui$IClickable$ = true;
foundation.test.components.dashboard.t409249.prototype.foundation$app$ui$IClickable$_click$arity$2 = (function (x,e){var self__ = this;
var x__$1 = this;var id = cljs.core.apply.call(null,cljs.core.str,(cljs.core.seq.call(null,e.target.id)) || (cljs.core.seq.call(null,e.target.parentNode.id)));var el = document.querySelector(dommy.core.selector.call(null,[cljs.core.str("#"),cljs.core.str(id)].join('')));var prev = dommy.template.__GT_node_like.call(null,document.querySelector("div.twitter-stats#stats-list-group")).querySelector("li.list-group-item.active");if(cljs.core.truth_(dommy.core.has_class_QMARK_.call(null,el,new cljs.core.Keyword(null,"active","active",3885920888))))
{return null;
} else
{dommy.core.add_class_BANG_.call(null,el,new cljs.core.Keyword(null,"active","active",3885920888));
var G__409252_409265 = prev;var G__409252_409266__$1 = (((G__409252_409265 == null))?null:dommy.core.remove_class_BANG_.call(null,G__409252_409265,new cljs.core.Keyword(null,"active","active",3885920888)));var chart = foundation.app.render._get_data.call(null,self__.renderer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null));var start_picker = foundation.app.render._get_data.call(null,self__.renderer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-time-picker","start-time-picker",2510165525)], null));var start_time = start_picker.getDate().getTime();var seq__409253_409267 = cljs.core.seq.call(null,chart.series);var chunk__409254_409268 = null;var count__409255_409269 = 0;var i__409256_409270 = 0;while(true){
if((i__409256_409270 < count__409255_409269))
{var series_409271 = cljs.core._nth.call(null,chunk__409254_409268,i__409256_409270);series_409271.remove();
{
var G__409272 = seq__409253_409267;
var G__409273 = chunk__409254_409268;
var G__409274 = count__409255_409269;
var G__409275 = (i__409256_409270 + 1);
seq__409253_409267 = G__409272;
chunk__409254_409268 = G__409273;
count__409255_409269 = G__409274;
i__409256_409270 = G__409275;
continue;
}
} else
{var temp__4092__auto___409276 = cljs.core.seq.call(null,seq__409253_409267);if(temp__4092__auto___409276)
{var seq__409253_409277__$1 = temp__4092__auto___409276;if(cljs.core.chunked_seq_QMARK_.call(null,seq__409253_409277__$1))
{var c__8952__auto___409278 = cljs.core.chunk_first.call(null,seq__409253_409277__$1);{
var G__409279 = cljs.core.chunk_rest.call(null,seq__409253_409277__$1);
var G__409280 = c__8952__auto___409278;
var G__409281 = cljs.core.count.call(null,c__8952__auto___409278);
var G__409282 = 0;
seq__409253_409267 = G__409279;
chunk__409254_409268 = G__409280;
count__409255_409269 = G__409281;
i__409256_409270 = G__409282;
continue;
}
} else
{var series_409283 = cljs.core.first.call(null,seq__409253_409277__$1);series_409283.remove();
{
var G__409284 = cljs.core.next.call(null,seq__409253_409277__$1);
var G__409285 = null;
var G__409286 = 0;
var G__409287 = 0;
seq__409253_409267 = G__409284;
chunk__409254_409268 = G__409285;
count__409255_409269 = G__409286;
i__409256_409270 = G__409287;
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
foundation.test.components.dashboard.t409249.prototype.foundation$app$ui$IRender$ = true;
foundation.test.components.dashboard.t409249.prototype.foundation$app$ui$IRender$_render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.twitter-stats#stats-list-group","div.twitter-stats#stats-list-group",1533542123),(function (){var iter__8921__auto__ = (function iter__409257(s__409258){return (new cljs.core.LazySeq(null,(function (){var s__409258__$1 = s__409258;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__409258__$1);if(temp__4092__auto__)
{var s__409258__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__409258__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__409258__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__409260 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__409259 = 0;while(true){
if((i__409259 < size__8920__auto__))
{var vec__409263 = cljs.core._nth.call(null,c__8919__auto__,i__409259);var metric = cljs.core.nth.call(null,vec__409263,0,null);var cpa = cljs.core.nth.call(null,vec__409263,1,null);var rate = cljs.core.nth.call(null,vec__409263,2,null);cljs.core.chunk_append.call(null,b__409260,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.list-group","ul.list-group",4606204857),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",1805578033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),metric], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.metric-header.list-group-item-heading","h5.metric-header.list-group-item-heading",1171357138),[cljs.core.str("0 "),cljs.core.str(metric)].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",1805578033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),[cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.list-group-item-text","small.list-group-item-text",4177219747),[cljs.core.str("0 "),cljs.core.str(cpa)].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",1805578033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),[cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.list-group-item-text","small.list-group-item-text",4177219747),[cljs.core.str("0 "),cljs.core.str(rate)].join('')], null)], null)], null));
{
var G__409288 = (i__409259 + 1);
i__409259 = G__409288;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__409260),iter__409257.call(null,cljs.core.chunk_rest.call(null,s__409258__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__409260),null);
}
} else
{var vec__409264 = cljs.core.first.call(null,s__409258__$2);var metric = cljs.core.nth.call(null,vec__409264,0,null);var cpa = cljs.core.nth.call(null,vec__409264,1,null);var rate = cljs.core.nth.call(null,vec__409264,2,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.list-group","ul.list-group",4606204857),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",1805578033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),metric], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.metric-header.list-group-item-heading","h5.metric-header.list-group-item-heading",1171357138),[cljs.core.str("0 "),cljs.core.str(metric)].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",1805578033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),[cljs.core.str(metric),cljs.core.str("-cpa")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.list-group-item-text","small.list-group-item-text",4177219747),[cljs.core.str("0 "),cljs.core.str(cpa)].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",1805578033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),[cljs.core.str(metric),cljs.core.str("-rate")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.list-group-item-text","small.list-group-item-text",4177219747),[cljs.core.str("0 "),cljs.core.str(rate)].join('')], null)], null)], null),iter__409257.call(null,cljs.core.rest.call(null,s__409258__$2)));
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
foundation.test.components.dashboard.t409249.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_409251){var self__ = this;
var _409251__$1 = this;return self__.meta409250;
});
foundation.test.components.dashboard.t409249.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_409251,meta409250__$1){var self__ = this;
var _409251__$1 = this;return (new foundation.test.components.dashboard.t409249(self__.new$,self__.renderer,self__.dashboard_metrics,meta409250__$1));
});
foundation.test.components.dashboard.__GT_t409249 = (function __GT_t409249(new$__$1,renderer__$1,dashboard_metrics__$1,meta409250){return (new foundation.test.components.dashboard.t409249(new$__$1,renderer__$1,dashboard_metrics__$1,meta409250));
});
}
return (new foundation.test.components.dashboard.t409249(new$,renderer,dashboard_metrics,null));
});
foundation.test.components.dashboard.dashboard_template = (function dashboard_template(renderer,state,id){var dom409302 = document.createElement("div");dom409302.className = "twitter-stats panel panel-default";
if(cljs.core.truth_(id))
{dom409302.setAttribute("id",id);
} else
{}
dom409302.appendChild((function (){var dom409303 = document.createElement("div");dom409303.className = "panel-heading";
dom409303.appendChild((function (){var dom409304 = document.createElement("h1");dom409304.className = "panel-title";
if("resource-id")
{dom409304.setAttribute("id","resource-id");
} else
{}
return dom409304;
})());
dom409303.appendChild((function (){var dom409305 = document.createElement("div");dom409305.className = "form-inline pull-right";
dom409305.appendChild((function (){var dom409306 = document.createElement("div");dom409306.className = "form-group";
dom409306.appendChild((function (){var dom409307 = document.createElement("input");dom409307.className = "form-control date-picker";
dom409307.setAttribute("id","start-time");
if(true)
{dom409307.setAttribute("readonly",true);
} else
{}
return dom409307;
})());
return dom409306;
})());
dom409305.appendChild((function (){var dom409308 = document.createElement("em");if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)))
{dom409308.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)));
} else
{}
dom409308.appendChild(document.createTextNode("to"));
return dom409308;
})());
dom409305.appendChild((function (){var dom409309 = document.createElement("div");dom409309.className = "form-group";
dom409309.appendChild((function (){var dom409310 = document.createElement("input");dom409310.className = "form-control date-picker";
dom409310.setAttribute("id","end-time");
if(true)
{dom409310.setAttribute("readonly",true);
} else
{}
return dom409310;
})());
return dom409309;
})());
dom409305.appendChild((function (){var dom409311 = document.createElement("button");dom409311.className = "btn btn-primary btn-sm";
dom409311.setAttribute("id","update-stats");
dom409311.appendChild(document.createTextNode("Update"));
return dom409311;
})());
return dom409305;
})());
return dom409303;
})());
dom409302.appendChild((function (){var dom409312 = document.createElement("div");dom409312.className = "panel-body";
dom409312.appendChild((function (){var dom409313 = document.createElement("div");dom409313.className = "analytics-highcharts";
return dom409313;
})());
return dom409312;
})());
dom409302.appendChild((function (){var dom409314 = document.createElement("div");dom409314.className = "panel-footer row";
dom409314.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.components.dashboard.dashboard_metrics.call(null,renderer,state)));
return dom409314;
})());
return dom409302;
});
foundation.test.components.dashboard.dashboard = (function dashboard(renderer,id,state){if(typeof foundation.test.components.dashboard.t409318 !== 'undefined')
{} else
{
/**
* @constructor
*/
foundation.test.components.dashboard.t409318 = (function (state,id,renderer,dashboard,meta409319){
this.state = state;
this.id = id;
this.renderer = renderer;
this.dashboard = dashboard;
this.meta409319 = meta409319;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
foundation.test.components.dashboard.t409318.cljs$lang$type = true;
foundation.test.components.dashboard.t409318.cljs$lang$ctorStr = "foundation.test.components.dashboard/t409318";
foundation.test.components.dashboard.t409318.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"foundation.test.components.dashboard/t409318");
});
foundation.test.components.dashboard.t409318.prototype.foundation$app$ui$IWithChildren$ = true;
foundation.test.components.dashboard.t409318.prototype.foundation$app$ui$IWithChildren$_with_children$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#stats-list-group","#stats-list-group",1832286227)], null);
});
foundation.test.components.dashboard.t409318.prototype.foundation$app$ui$IRender$ = true;
foundation.test.components.dashboard.t409318.prototype.foundation$app$ui$IRender$_render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return foundation.test.components.dashboard.dashboard_template.call(null,self__.renderer,self__.state,self__.id);
});
foundation.test.components.dashboard.t409318.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_409320){var self__ = this;
var _409320__$1 = this;return self__.meta409319;
});
foundation.test.components.dashboard.t409318.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_409320,meta409319__$1){var self__ = this;
var _409320__$1 = this;return (new foundation.test.components.dashboard.t409318(self__.state,self__.id,self__.renderer,self__.dashboard,meta409319__$1));
});
foundation.test.components.dashboard.__GT_t409318 = (function __GT_t409318(state__$1,id__$1,renderer__$1,dashboard__$1,meta409319){return (new foundation.test.components.dashboard.t409318(state__$1,id__$1,renderer__$1,dashboard__$1,meta409319));
});
}
return (new foundation.test.components.dashboard.t409318(state,id,renderer,dashboard,null));
});

//# sourceMappingURL=dashboard.js.map