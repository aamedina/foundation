// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.templates');
goog.require('cljs.core');
goog.require('foundation.models');
goog.require('cljs_time.core');
goog.require('enfocus.events');
goog.require('goog.date');
goog.require('enfocus.core');
goog.require('dommy.core');
goog.require('cljs_time.format');
goog.require('enfocus.core');
goog.require('goog.i18n.DateTimeParse');
goog.require('cljs_time.format');
goog.require('goog.i18n.DateTimeFormat');
goog.require('goog.i18n.DateTimeFormat');
goog.require('enfocus.events');
goog.require('foundation.cells');
goog.require('goog.i18n.DateTimeParse');
goog.require('goog.date');
goog.require('foundation.cells');
goog.require('goog.ui.InputDatePicker');
goog.require('dommy.core');
goog.require('foundation.models');
goog.require('cljs_time.core');
cljs.core.enable_console_print_BANG_.call(null);
foundation.templates.date_picker = (function date_picker(el,init_date,date_pattern){var date_pattern__$1 = (((date_pattern instanceof cljs.core.Keyword))?date_pattern.call(null,cljs_time.format.formatters):date_pattern);var picker = (new goog.ui.InputDatePicker((new goog.i18n.DateTimeFormat(date_pattern__$1)),(new goog.i18n.DateTimeParse(date_pattern__$1))));var G__325334_325336 = picker.getDatePicker();G__325334_325336.setUseSimpleNavigationMenu(true);
G__325334_325336.setAllowNone(true);
var G__325335 = picker;G__325335.decorate(el);
G__325335.setDate(init_date);
return G__325335;
});
foundation.templates.dashboard_metrics = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Impressions","CPM","Impression Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Engagements","CPE","Engagement Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clicks","CPC","Click Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Retweets","CPRT","Retweet Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Replies","CPR","Reply Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Follows","CPF","Follow Rate"], null)], null);
foundation.templates.dashboard_metric = (function dashboard_metric(p__325337){var vec__325346 = p__325337;var metric = cljs.core.nth.call(null,vec__325346,0,null);var cpa = cljs.core.nth.call(null,vec__325346,1,null);var rate = cljs.core.nth.call(null,vec__325346,2,null);var dom325347 = document.createElement("ul");dom325347.className = "list-group";
dom325347.appendChild((function (){var dom325348 = document.createElement("li");dom325348.className = "list-group-item";
if(cljs.core.truth_(metric))
{dom325348.setAttribute("id",metric);
} else
{}
dom325348.appendChild((function (){var dom325349 = document.createElement("h5");dom325349.className = "metric-header list-group-item-heading";
dom325349.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(metric)].join('')));
return dom325349;
})());
return dom325348;
})());
dom325347.appendChild((function (){var dom325350 = document.createElement("li");dom325350.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-cpa")].join('')))
{dom325350.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-cpa")].join(''));
} else
{}
dom325350.appendChild((function (){var dom325351 = document.createElement("small");dom325351.className = "list-group-item-text";
dom325351.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(cpa)].join('')));
return dom325351;
})());
return dom325350;
})());
dom325347.appendChild((function (){var dom325352 = document.createElement("li");dom325352.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-rate")].join('')))
{dom325352.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-rate")].join(''));
} else
{}
dom325352.appendChild((function (){var dom325353 = document.createElement("small");dom325353.className = "list-group-item-text";
dom325353.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(rate)].join('')));
return dom325353;
})());
return dom325352;
})());
return dom325347;
});
foundation.templates.dashboard = (function dashboard(id){var dom325372 = document.createElement("div");dom325372.className = "twitter-stats panel panel-default";
if(cljs.core.truth_(id))
{dom325372.setAttribute("id",id);
} else
{}
dom325372.appendChild((function (){var dom325373 = document.createElement("div");dom325373.className = "panel-heading";
dom325373.appendChild((function (){var dom325374 = document.createElement("h1");dom325374.className = "panel-title";
if("resource-id")
{dom325374.setAttribute("id","resource-id");
} else
{}
return dom325374;
})());
dom325373.appendChild((function (){var dom325375 = document.createElement("div");dom325375.className = "form-inline pull-right";
dom325375.appendChild((function (){var dom325376 = document.createElement("div");dom325376.className = "form-group";
dom325376.appendChild((function (){var dom325377 = document.createElement("input");dom325377.className = "form-control date-picker";
dom325377.setAttribute("id","start-time");
if(true)
{dom325377.setAttribute("readonly",true);
} else
{}
return dom325377;
})());
return dom325376;
})());
dom325375.appendChild((function (){var dom325378 = document.createElement("em");if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)))
{dom325378.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)));
} else
{}
dom325378.appendChild(document.createTextNode("to"));
return dom325378;
})());
dom325375.appendChild((function (){var dom325379 = document.createElement("div");dom325379.className = "form-group";
dom325379.appendChild((function (){var dom325380 = document.createElement("input");dom325380.className = "form-control date-picker";
dom325380.setAttribute("id","end-time");
if(true)
{dom325380.setAttribute("readonly",true);
} else
{}
return dom325380;
})());
return dom325379;
})());
dom325375.appendChild((function (){var dom325381 = document.createElement("button");dom325381.className = "btn btn-primary btn-sm";
dom325381.setAttribute("id","update-stats");
dom325381.appendChild(document.createTextNode("Update"));
return dom325381;
})());
return dom325375;
})());
return dom325373;
})());
dom325372.appendChild((function (){var dom325382 = document.createElement("div");dom325382.className = "panel-body";
dom325382.appendChild((function (){var dom325383 = document.createElement("div");dom325383.className = "analytics-highcharts";
return dom325383;
})());
return dom325382;
})());
dom325372.appendChild((function (){var dom325384 = document.createElement("div");dom325384.className = "panel-footer row";
dom325384.appendChild((function (){var dom325385 = document.createElement("div");dom325385.className = "twitter-stats";
dom325385.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14516__auto__ = (function iter__325386(s__325387){return (new cljs.core.LazySeq(null,(function (){var s__325387__$1 = s__325387;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__325387__$1);if(temp__4092__auto__)
{var s__325387__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__325387__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__325387__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__325389 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__325388 = 0;while(true){
if((i__325388 < size__14515__auto__))
{var metric = cljs.core._nth.call(null,c__14514__auto__,i__325388);cljs.core.chunk_append.call(null,b__325389,foundation.templates.dashboard_metric.call(null,metric));
{
var G__325390 = (i__325388 + 1);
i__325388 = G__325390;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__325389),iter__325386.call(null,cljs.core.chunk_rest.call(null,s__325387__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__325389),null);
}
} else
{var metric = cljs.core.first.call(null,s__325387__$2);return cljs.core.cons.call(null,foundation.templates.dashboard_metric.call(null,metric),iter__325386.call(null,cljs.core.rest.call(null,s__325387__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14516__auto__.call(null,foundation.templates.dashboard_metrics);
})()));
return dom325385;
})());
return dom325384;
})());
return dom325372;
});
foundation.templates.datagrid_filter = (function datagrid_filter(){var dom325393 = document.createElement("div");dom325393.className = "autocomplete";
dom325393.appendChild((function (){var dom325394 = document.createElement("input");dom325394.className = "form-control";
if("text")
{dom325394.setAttribute("type","text");
} else
{}
if("What are you looking for?")
{dom325394.setAttribute("placeholder","What are you looking for?");
} else
{}
return dom325394;
})());
return dom325393;
});
foundation.templates.datagrid_header = (function datagrid_header(columns){var dom325401 = document.createElement("thead");dom325401.setAttribute("id","datagrid-header");
dom325401.appendChild((function (){var dom325402 = document.createElement("tr");dom325402.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14516__auto__ = (function iter__325403(s__325404){return (new cljs.core.LazySeq(null,(function (){var s__325404__$1 = s__325404;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__325404__$1);if(temp__4092__auto__)
{var s__325404__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__325404__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__325404__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__325406 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__325405 = 0;while(true){
if((i__325405 < size__14515__auto__))
{var col = cljs.core._nth.call(null,c__14514__auto__,i__325405);cljs.core.chunk_append.call(null,b__325406,foundation.cells.th.call(null,col));
{
var G__325407 = (i__325405 + 1);
i__325405 = G__325407;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__325406),iter__325403.call(null,cljs.core.chunk_rest.call(null,s__325404__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__325406),null);
}
} else
{var col = cljs.core.first.call(null,s__325404__$2);return cljs.core.cons.call(null,foundation.cells.th.call(null,col),iter__325403.call(null,cljs.core.rest.call(null,s__325404__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14516__auto__.call(null,columns);
})()));
return dom325402;
})());
return dom325401;
});
foundation.templates.datagrid_row = (function datagrid_row(model,columns){var dom325413 = document.createElement("tr");dom325413.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14516__auto__ = (function iter__325414(s__325415){return (new cljs.core.LazySeq(null,(function (){var s__325415__$1 = s__325415;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__325415__$1);if(temp__4092__auto__)
{var s__325415__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__325415__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__325415__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__325417 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__325416 = 0;while(true){
if((i__325416 < size__14515__auto__))
{var col = cljs.core._nth.call(null,c__14514__auto__,i__325416);cljs.core.chunk_append.call(null,b__325417,foundation.cells.td.call(null,col,model));
{
var G__325418 = (i__325416 + 1);
i__325416 = G__325418;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__325417),iter__325414.call(null,cljs.core.chunk_rest.call(null,s__325415__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__325417),null);
}
} else
{var col = cljs.core.first.call(null,s__325415__$2);return cljs.core.cons.call(null,foundation.cells.td.call(null,col,model),iter__325414.call(null,cljs.core.rest.call(null,s__325415__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14516__auto__.call(null,columns);
})()));
return dom325413;
});
foundation.templates.datagrid_body = (function datagrid_body(coll,columns){var dom325424 = document.createElement("tbody");dom325424.className = "datagrid-tbody";
dom325424.setAttribute("id","datagrid-body");
dom325424.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14516__auto__ = (function iter__325425(s__325426){return (new cljs.core.LazySeq(null,(function (){var s__325426__$1 = s__325426;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__325426__$1);if(temp__4092__auto__)
{var s__325426__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__325426__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__325426__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__325428 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__325427 = 0;while(true){
if((i__325427 < size__14515__auto__))
{var model = cljs.core._nth.call(null,c__14514__auto__,i__325427);cljs.core.chunk_append.call(null,b__325428,foundation.templates.datagrid_row.call(null,model,columns));
{
var G__325429 = (i__325427 + 1);
i__325427 = G__325429;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__325428),iter__325425.call(null,cljs.core.chunk_rest.call(null,s__325426__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__325428),null);
}
} else
{var model = cljs.core.first.call(null,s__325426__$2);return cljs.core.cons.call(null,foundation.templates.datagrid_row.call(null,model,columns),iter__325425.call(null,cljs.core.rest.call(null,s__325426__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14516__auto__.call(null,coll);
})()));
return dom325424;
});
foundation.templates.datagrid_breadcrumb = (function datagrid_breadcrumb(){var dom325441 = document.createElement("ol");dom325441.className = "breadcrumb";
dom325441.appendChild((function (){var dom325442 = document.createElement("li");dom325442.className = "active";
dom325442.setAttribute("id","account");
dom325442.appendChild((function (){var dom325443 = document.createElement("div");dom325443.className = "arrow-down";
return dom325443;
})());
dom325442.appendChild((function (){var dom325444 = document.createElement("a");dom325444.appendChild(document.createTextNode("Accounts"));
return dom325444;
})());
dom325442.appendChild((function (){var dom325445 = document.createElement("div");dom325445.className = "arrow-up";
return dom325445;
})());
return dom325442;
})());
dom325441.appendChild((function (){var dom325446 = document.createElement("li");dom325446.className = "hidden";
dom325446.setAttribute("id","campaign");
dom325446.appendChild((function (){var dom325447 = document.createElement("a");dom325447.appendChild(document.createTextNode("Campaigns"));
return dom325447;
})());
return dom325446;
})());
dom325441.appendChild((function (){var dom325448 = document.createElement("li");dom325448.className = "hidden";
dom325448.setAttribute("id","line_item");
dom325448.appendChild((function (){var dom325449 = document.createElement("a");dom325449.appendChild(document.createTextNode("Line Items"));
return dom325449;
})());
return dom325448;
})());
dom325441.appendChild((function (){var dom325450 = document.createElement("li");dom325450.className = "hidden";
dom325450.setAttribute("id","promoted_tweet");
dom325450.appendChild((function (){var dom325451 = document.createElement("a");dom325451.appendChild(document.createTextNode("Promoted Products"));
return dom325451;
})());
return dom325450;
})());
return dom325441;
});
foundation.templates.datagrid_table = (function datagrid_table(model,coll){return dommy.template.__GT_node_like.call(null,(function (){var cols = foundation.models.columns.call(null,model);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table#datagrid-table.table","table#datagrid-table.table",2230740568),foundation.templates.datagrid_header.call(null,cols),foundation.templates.datagrid_body.call(null,coll,cols)], null);
})());
});
foundation.templates.datagrid = (function datagrid(id){var dom325467 = document.createElement("div");dom325467.className = "datagrid-container panel panel-default";
if(cljs.core.truth_(id))
{dom325467.setAttribute("id",id);
} else
{}
dom325467.appendChild((function (){var dom325468 = document.createElement("div");dom325468.className = "panel-heading";
dom325468.appendChild(dommy.template.__GT_node_like.call(null,foundation.templates.datagrid_breadcrumb.call(null)));
dom325468.appendChild((function (){var dom325469 = document.createElement("form");dom325469.className = "form-inline pull-right";
dom325469.appendChild((function (){var dom325470 = document.createElement("div");dom325470.className = "form-group";
dom325470.appendChild(dommy.template.__GT_node_like.call(null,foundation.templates.datagrid_filter.call(null)));
return dom325470;
})());
return dom325469;
})());
return dom325468;
})());
dom325467.appendChild((function (){var dom325471 = document.createElement("div");dom325471.className = "panel-body";
return dom325471;
})());
dom325467.appendChild((function (){var dom325472 = document.createElement("div");dom325472.className = "panel-footer";
dom325472.appendChild((function (){var dom325473 = document.createElement("div");dom325473.className = "form-inline";
dom325473.appendChild((function (){var dom325474 = document.createElement("div");dom325474.className = "form-group";
dom325474.appendChild((function (){var dom325475 = document.createElement("button");dom325475.className = "btn btn-success btn-sm";
dom325475.setAttribute("id","new");
dom325475.appendChild(document.createTextNode("New"));
return dom325475;
})());
return dom325474;
})());
dom325473.appendChild((function (){var dom325476 = document.createElement("div");dom325476.className = "form-group";
dom325476.appendChild((function (){var dom325477 = document.createElement("button");dom325477.className = "btn btn-info btn-sm disabled";
dom325477.setAttribute("id","save");
dom325477.appendChild(document.createTextNode("Save"));
return dom325477;
})());
return dom325476;
})());
dom325473.appendChild((function (){var dom325478 = document.createElement("div");dom325478.className = "form-group";
dom325478.appendChild((function (){var dom325479 = document.createElement("button");dom325479.className = "btn btn-danger btn-sm disabled";
dom325479.setAttribute("id","delete");
dom325479.appendChild(document.createTextNode("Delete"));
return dom325479;
})());
return dom325478;
})());
dom325473.appendChild((function (){var dom325480 = document.createElement("div");dom325480.className = "form-group";
dom325480.appendChild((function (){var dom325481 = document.createElement("button");dom325481.className = "btn btn-primary btn-sm disabled";
dom325481.setAttribute("id","dupe");
dom325481.appendChild(document.createTextNode("Duplicate"));
return dom325481;
})());
return dom325480;
})());
return dom325473;
})());
return dom325472;
})());
return dom325467;
});
foundation.templates.twitter_power = (function twitter_power(id){var dom325483 = document.createElement("div");if(cljs.core.truth_(id))
{dom325483.setAttribute("id",id);
} else
{}
return dom325483;
});

//# sourceMappingURL=templates.js.map