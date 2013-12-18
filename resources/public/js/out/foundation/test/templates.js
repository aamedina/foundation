// Compiled by ClojureScript 0.0-2120
goog.provide('foundation.test.templates');
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
foundation.test.templates.date_picker = (function date_picker(el,init_date,date_pattern){var date_pattern__$1 = (((date_pattern instanceof cljs.core.Keyword))?date_pattern.call(null,cljs_time.format.formatters):date_pattern);var picker = (new goog.ui.InputDatePicker((new goog.i18n.DateTimeFormat(date_pattern__$1)),(new goog.i18n.DateTimeParse(date_pattern__$1))));var G__24162_24164 = picker.getDatePicker();G__24162_24164.setUseSimpleNavigationMenu(true);
G__24162_24164.setAllowNone(true);
var G__24163 = picker;G__24163.decorate(el);
G__24163.setDate(init_date);
return G__24163;
});
foundation.test.templates.dashboard_metrics = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Impressions","CPM","Impression Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Engagements","CPE","Engagement Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clicks","CPC","Click Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Retweets","CPRT","Retweet Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Replies","CPR","Reply Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Follows","CPF","Follow Rate"], null)], null);
foundation.test.templates.dashboard_metric = (function dashboard_metric(p__24165){var vec__24174 = p__24165;var metric = cljs.core.nth.call(null,vec__24174,0,null);var cpa = cljs.core.nth.call(null,vec__24174,1,null);var rate = cljs.core.nth.call(null,vec__24174,2,null);var dom24175 = document.createElement("ul");dom24175.className = "list-group";
dom24175.appendChild((function (){var dom24176 = document.createElement("li");dom24176.className = "list-group-item";
if(cljs.core.truth_(metric))
{dom24176.setAttribute("id",metric);
} else
{}
dom24176.appendChild((function (){var dom24177 = document.createElement("h5");dom24177.className = "metric-header list-group-item-heading";
dom24177.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(metric)].join('')));
return dom24177;
})());
return dom24176;
})());
dom24175.appendChild((function (){var dom24178 = document.createElement("li");dom24178.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-cpa")].join('')))
{dom24178.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-cpa")].join(''));
} else
{}
dom24178.appendChild((function (){var dom24179 = document.createElement("small");dom24179.className = "list-group-item-text";
dom24179.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(cpa)].join('')));
return dom24179;
})());
return dom24178;
})());
dom24175.appendChild((function (){var dom24180 = document.createElement("li");dom24180.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-rate")].join('')))
{dom24180.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-rate")].join(''));
} else
{}
dom24180.appendChild((function (){var dom24181 = document.createElement("small");dom24181.className = "list-group-item-text";
dom24181.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(rate)].join('')));
return dom24181;
})());
return dom24180;
})());
return dom24175;
});
foundation.test.templates.dashboard = (function dashboard(id){var dom24200 = document.createElement("div");dom24200.className = "twitter-stats panel panel-default";
if(cljs.core.truth_(id))
{dom24200.setAttribute("id",id);
} else
{}
dom24200.appendChild((function (){var dom24201 = document.createElement("div");dom24201.className = "panel-heading";
dom24201.appendChild((function (){var dom24202 = document.createElement("h1");dom24202.className = "panel-title";
if("resource-id")
{dom24202.setAttribute("id","resource-id");
} else
{}
return dom24202;
})());
dom24201.appendChild((function (){var dom24203 = document.createElement("div");dom24203.className = "form-inline pull-right";
dom24203.appendChild((function (){var dom24204 = document.createElement("div");dom24204.className = "form-group";
dom24204.appendChild((function (){var dom24205 = document.createElement("input");dom24205.className = "form-control date-picker";
dom24205.setAttribute("id","start-time");
if(true)
{dom24205.setAttribute("readonly",true);
} else
{}
return dom24205;
})());
return dom24204;
})());
dom24203.appendChild((function (){var dom24206 = document.createElement("em");if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)))
{dom24206.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)));
} else
{}
dom24206.appendChild(document.createTextNode("to"));
return dom24206;
})());
dom24203.appendChild((function (){var dom24207 = document.createElement("div");dom24207.className = "form-group";
dom24207.appendChild((function (){var dom24208 = document.createElement("input");dom24208.className = "form-control date-picker";
dom24208.setAttribute("id","end-time");
if(true)
{dom24208.setAttribute("readonly",true);
} else
{}
return dom24208;
})());
return dom24207;
})());
dom24203.appendChild((function (){var dom24209 = document.createElement("button");dom24209.className = "btn btn-primary btn-sm";
dom24209.setAttribute("id","update-stats");
dom24209.appendChild(document.createTextNode("Update"));
return dom24209;
})());
return dom24203;
})());
return dom24201;
})());
dom24200.appendChild((function (){var dom24210 = document.createElement("div");dom24210.className = "panel-body";
dom24210.appendChild((function (){var dom24211 = document.createElement("div");dom24211.className = "analytics-highcharts";
return dom24211;
})());
return dom24210;
})());
dom24200.appendChild((function (){var dom24212 = document.createElement("div");dom24212.className = "panel-footer row";
dom24212.appendChild((function (){var dom24213 = document.createElement("div");dom24213.className = "twitter-stats";
dom24213.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8921__auto__ = (function iter__24214(s__24215){return (new cljs.core.LazySeq(null,(function (){var s__24215__$1 = s__24215;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__24215__$1);if(temp__4092__auto__)
{var s__24215__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24215__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__24215__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__24217 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__24216 = 0;while(true){
if((i__24216 < size__8920__auto__))
{var metric = cljs.core._nth.call(null,c__8919__auto__,i__24216);cljs.core.chunk_append.call(null,b__24217,foundation.test.templates.dashboard_metric.call(null,metric));
{
var G__24218 = (i__24216 + 1);
i__24216 = G__24218;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24217),iter__24214.call(null,cljs.core.chunk_rest.call(null,s__24215__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24217),null);
}
} else
{var metric = cljs.core.first.call(null,s__24215__$2);return cljs.core.cons.call(null,foundation.test.templates.dashboard_metric.call(null,metric),iter__24214.call(null,cljs.core.rest.call(null,s__24215__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,foundation.test.templates.dashboard_metrics);
})()));
return dom24213;
})());
return dom24212;
})());
return dom24200;
});
foundation.test.templates.datagrid_filter = (function datagrid_filter(){var dom24221 = document.createElement("div");dom24221.className = "autocomplete";
dom24221.appendChild((function (){var dom24222 = document.createElement("input");dom24222.className = "form-control";
if("text")
{dom24222.setAttribute("type","text");
} else
{}
if("What are you looking for?")
{dom24222.setAttribute("placeholder","What are you looking for?");
} else
{}
return dom24222;
})());
return dom24221;
});
foundation.test.templates.datagrid_header = (function datagrid_header(columns){var dom24229 = document.createElement("thead");dom24229.setAttribute("id","datagrid-header");
dom24229.appendChild((function (){var dom24230 = document.createElement("tr");dom24230.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8921__auto__ = (function iter__24231(s__24232){return (new cljs.core.LazySeq(null,(function (){var s__24232__$1 = s__24232;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__24232__$1);if(temp__4092__auto__)
{var s__24232__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24232__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__24232__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__24234 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__24233 = 0;while(true){
if((i__24233 < size__8920__auto__))
{var col = cljs.core._nth.call(null,c__8919__auto__,i__24233);cljs.core.chunk_append.call(null,b__24234,foundation.cells.th.call(null,col));
{
var G__24235 = (i__24233 + 1);
i__24233 = G__24235;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24234),iter__24231.call(null,cljs.core.chunk_rest.call(null,s__24232__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24234),null);
}
} else
{var col = cljs.core.first.call(null,s__24232__$2);return cljs.core.cons.call(null,foundation.cells.th.call(null,col),iter__24231.call(null,cljs.core.rest.call(null,s__24232__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,columns);
})()));
return dom24230;
})());
return dom24229;
});
foundation.test.templates.datagrid_row = (function datagrid_row(model,columns){var dom24241 = document.createElement("tr");dom24241.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8921__auto__ = (function iter__24242(s__24243){return (new cljs.core.LazySeq(null,(function (){var s__24243__$1 = s__24243;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__24243__$1);if(temp__4092__auto__)
{var s__24243__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24243__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__24243__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__24245 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__24244 = 0;while(true){
if((i__24244 < size__8920__auto__))
{var col = cljs.core._nth.call(null,c__8919__auto__,i__24244);cljs.core.chunk_append.call(null,b__24245,foundation.cells.td.call(null,col,model));
{
var G__24246 = (i__24244 + 1);
i__24244 = G__24246;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24245),iter__24242.call(null,cljs.core.chunk_rest.call(null,s__24243__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24245),null);
}
} else
{var col = cljs.core.first.call(null,s__24243__$2);return cljs.core.cons.call(null,foundation.cells.td.call(null,col,model),iter__24242.call(null,cljs.core.rest.call(null,s__24243__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,columns);
})()));
return dom24241;
});
foundation.test.templates.datagrid_body = (function datagrid_body(coll,columns){var dom24252 = document.createElement("tbody");dom24252.className = "datagrid-tbody";
dom24252.setAttribute("id","datagrid-body");
dom24252.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8921__auto__ = (function iter__24253(s__24254){return (new cljs.core.LazySeq(null,(function (){var s__24254__$1 = s__24254;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__24254__$1);if(temp__4092__auto__)
{var s__24254__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24254__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__24254__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__24256 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__24255 = 0;while(true){
if((i__24255 < size__8920__auto__))
{var model = cljs.core._nth.call(null,c__8919__auto__,i__24255);cljs.core.chunk_append.call(null,b__24256,foundation.test.templates.datagrid_row.call(null,model,columns));
{
var G__24257 = (i__24255 + 1);
i__24255 = G__24257;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24256),iter__24253.call(null,cljs.core.chunk_rest.call(null,s__24254__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24256),null);
}
} else
{var model = cljs.core.first.call(null,s__24254__$2);return cljs.core.cons.call(null,foundation.test.templates.datagrid_row.call(null,model,columns),iter__24253.call(null,cljs.core.rest.call(null,s__24254__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,coll);
})()));
return dom24252;
});
foundation.test.templates.datagrid_breadcrumb = (function datagrid_breadcrumb(){var dom24269 = document.createElement("ol");dom24269.className = "breadcrumb";
dom24269.appendChild((function (){var dom24270 = document.createElement("li");dom24270.className = "active";
dom24270.setAttribute("id","account");
dom24270.appendChild((function (){var dom24271 = document.createElement("div");dom24271.className = "arrow-down";
return dom24271;
})());
dom24270.appendChild((function (){var dom24272 = document.createElement("a");dom24272.appendChild(document.createTextNode("Accounts"));
return dom24272;
})());
dom24270.appendChild((function (){var dom24273 = document.createElement("div");dom24273.className = "arrow-up";
return dom24273;
})());
return dom24270;
})());
dom24269.appendChild((function (){var dom24274 = document.createElement("li");dom24274.className = "hidden";
dom24274.setAttribute("id","campaign");
dom24274.appendChild((function (){var dom24275 = document.createElement("a");dom24275.appendChild(document.createTextNode("Campaigns"));
return dom24275;
})());
return dom24274;
})());
dom24269.appendChild((function (){var dom24276 = document.createElement("li");dom24276.className = "hidden";
dom24276.setAttribute("id","line_item");
dom24276.appendChild((function (){var dom24277 = document.createElement("a");dom24277.appendChild(document.createTextNode("Line Items"));
return dom24277;
})());
return dom24276;
})());
dom24269.appendChild((function (){var dom24278 = document.createElement("li");dom24278.className = "hidden";
dom24278.setAttribute("id","promoted_tweet");
dom24278.appendChild((function (){var dom24279 = document.createElement("a");dom24279.appendChild(document.createTextNode("Promoted Products"));
return dom24279;
})());
return dom24278;
})());
return dom24269;
});
foundation.test.templates.datagrid_table = (function datagrid_table(model,coll){return dommy.template.__GT_node_like.call(null,(function (){var cols = foundation.models.columns.call(null,model);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table#datagrid-table.table","table#datagrid-table.table",2230740568),foundation.test.templates.datagrid_header.call(null,cols),foundation.test.templates.datagrid_body.call(null,coll,cols)], null);
})());
});
foundation.test.templates.datagrid = (function datagrid(id){var dom24295 = document.createElement("div");dom24295.className = "datagrid-container panel panel-default";
if(cljs.core.truth_(id))
{dom24295.setAttribute("id",id);
} else
{}
dom24295.appendChild((function (){var dom24296 = document.createElement("div");dom24296.className = "panel-heading";
dom24296.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.templates.datagrid_breadcrumb.call(null)));
dom24296.appendChild((function (){var dom24297 = document.createElement("form");dom24297.className = "form-inline pull-right";
dom24297.appendChild((function (){var dom24298 = document.createElement("div");dom24298.className = "form-group";
dom24298.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.templates.datagrid_filter.call(null)));
return dom24298;
})());
return dom24297;
})());
return dom24296;
})());
dom24295.appendChild((function (){var dom24299 = document.createElement("div");dom24299.className = "panel-body";
return dom24299;
})());
dom24295.appendChild((function (){var dom24300 = document.createElement("div");dom24300.className = "panel-footer";
dom24300.appendChild((function (){var dom24301 = document.createElement("div");dom24301.className = "form-inline";
dom24301.appendChild((function (){var dom24302 = document.createElement("div");dom24302.className = "form-group";
dom24302.appendChild((function (){var dom24303 = document.createElement("button");dom24303.className = "btn btn-success btn-sm";
dom24303.setAttribute("id","new");
dom24303.appendChild(document.createTextNode("New"));
return dom24303;
})());
return dom24302;
})());
dom24301.appendChild((function (){var dom24304 = document.createElement("div");dom24304.className = "form-group";
dom24304.appendChild((function (){var dom24305 = document.createElement("button");dom24305.className = "btn btn-info btn-sm disabled";
dom24305.setAttribute("id","save");
dom24305.appendChild(document.createTextNode("Save"));
return dom24305;
})());
return dom24304;
})());
dom24301.appendChild((function (){var dom24306 = document.createElement("div");dom24306.className = "form-group";
dom24306.appendChild((function (){var dom24307 = document.createElement("button");dom24307.className = "btn btn-danger btn-sm disabled";
dom24307.setAttribute("id","delete");
dom24307.appendChild(document.createTextNode("Delete"));
return dom24307;
})());
return dom24306;
})());
dom24301.appendChild((function (){var dom24308 = document.createElement("div");dom24308.className = "form-group";
dom24308.appendChild((function (){var dom24309 = document.createElement("button");dom24309.className = "btn btn-primary btn-sm disabled";
dom24309.setAttribute("id","dupe");
dom24309.appendChild(document.createTextNode("Duplicate"));
return dom24309;
})());
return dom24308;
})());
return dom24301;
})());
return dom24300;
})());
return dom24295;
});
foundation.test.templates.twitter_power = (function twitter_power(id){var dom24311 = document.createElement("div");if(cljs.core.truth_(id))
{dom24311.setAttribute("id",id);
} else
{}
return dom24311;
});

//# sourceMappingURL=templates.js.map