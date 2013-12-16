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
foundation.templates.date_picker = (function date_picker(el,init_date,date_pattern){var date_pattern__$1 = (((date_pattern instanceof cljs.core.Keyword))?date_pattern.call(null,cljs_time.format.formatters):date_pattern);var picker = (new goog.ui.InputDatePicker((new goog.i18n.DateTimeFormat(date_pattern__$1)),(new goog.i18n.DateTimeParse(date_pattern__$1))));var G__30156_30158 = picker.getDatePicker();G__30156_30158.setUseSimpleNavigationMenu(true);
G__30156_30158.setAllowNone(true);
var G__30157 = picker;G__30157.decorate(el);
G__30157.setDate(init_date);
return G__30157;
});
foundation.templates.dashboard_metrics = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Impressions","CPM","Impression Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Engagements","CPE","Engagement Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clicks","CPC","Click Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Retweets","CPRT","Retweet Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Replies","CPR","Reply Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Follows","CPF","Follow Rate"], null)], null);
foundation.templates.dashboard_metric = (function dashboard_metric(p__30159){var vec__30168 = p__30159;var metric = cljs.core.nth.call(null,vec__30168,0,null);var cpa = cljs.core.nth.call(null,vec__30168,1,null);var rate = cljs.core.nth.call(null,vec__30168,2,null);var dom30169 = document.createElement("ul");dom30169.className = "list-group";
dom30169.appendChild((function (){var dom30170 = document.createElement("li");dom30170.className = "list-group-item";
if(cljs.core.truth_(metric))
{dom30170.setAttribute("id",metric);
} else
{}
dom30170.appendChild((function (){var dom30171 = document.createElement("h5");dom30171.className = "metric-header list-group-item-heading";
dom30171.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(metric)].join('')));
return dom30171;
})());
return dom30170;
})());
dom30169.appendChild((function (){var dom30172 = document.createElement("li");dom30172.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-cpa")].join('')))
{dom30172.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-cpa")].join(''));
} else
{}
dom30172.appendChild((function (){var dom30173 = document.createElement("small");dom30173.className = "list-group-item-text";
dom30173.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(cpa)].join('')));
return dom30173;
})());
return dom30172;
})());
dom30169.appendChild((function (){var dom30174 = document.createElement("li");dom30174.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-rate")].join('')))
{dom30174.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-rate")].join(''));
} else
{}
dom30174.appendChild((function (){var dom30175 = document.createElement("small");dom30175.className = "list-group-item-text";
dom30175.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(rate)].join('')));
return dom30175;
})());
return dom30174;
})());
return dom30169;
});
foundation.templates.dashboard = (function dashboard(id){var dom30194 = document.createElement("div");dom30194.className = "twitter-stats panel panel-default";
if(cljs.core.truth_(id))
{dom30194.setAttribute("id",id);
} else
{}
dom30194.appendChild((function (){var dom30195 = document.createElement("div");dom30195.className = "panel-heading";
dom30195.appendChild((function (){var dom30196 = document.createElement("h1");dom30196.className = "panel-title";
if("resource-id")
{dom30196.setAttribute("id","resource-id");
} else
{}
return dom30196;
})());
dom30195.appendChild((function (){var dom30197 = document.createElement("div");dom30197.className = "form-inline pull-right";
dom30197.appendChild((function (){var dom30198 = document.createElement("div");dom30198.className = "form-group";
dom30198.appendChild((function (){var dom30199 = document.createElement("input");dom30199.className = "form-control date-picker";
dom30199.setAttribute("id","start-time");
if(true)
{dom30199.setAttribute("readonly",true);
} else
{}
return dom30199;
})());
return dom30198;
})());
dom30197.appendChild((function (){var dom30200 = document.createElement("em");if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)))
{dom30200.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)));
} else
{}
dom30200.appendChild(document.createTextNode("to"));
return dom30200;
})());
dom30197.appendChild((function (){var dom30201 = document.createElement("div");dom30201.className = "form-group";
dom30201.appendChild((function (){var dom30202 = document.createElement("input");dom30202.className = "form-control date-picker";
dom30202.setAttribute("id","end-time");
if(true)
{dom30202.setAttribute("readonly",true);
} else
{}
return dom30202;
})());
return dom30201;
})());
dom30197.appendChild((function (){var dom30203 = document.createElement("button");dom30203.className = "btn btn-primary btn-sm";
dom30203.setAttribute("id","update-stats");
dom30203.appendChild(document.createTextNode("Update"));
return dom30203;
})());
return dom30197;
})());
return dom30195;
})());
dom30194.appendChild((function (){var dom30204 = document.createElement("div");dom30204.className = "panel-body";
dom30204.appendChild((function (){var dom30205 = document.createElement("div");dom30205.className = "analytics-highcharts";
return dom30205;
})());
return dom30204;
})());
dom30194.appendChild((function (){var dom30206 = document.createElement("div");dom30206.className = "panel-footer row";
dom30206.appendChild((function (){var dom30207 = document.createElement("div");dom30207.className = "twitter-stats";
dom30207.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14516__auto__ = (function iter__30208(s__30209){return (new cljs.core.LazySeq(null,(function (){var s__30209__$1 = s__30209;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__30209__$1);if(temp__4092__auto__)
{var s__30209__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30209__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__30209__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__30211 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__30210 = 0;while(true){
if((i__30210 < size__14515__auto__))
{var metric = cljs.core._nth.call(null,c__14514__auto__,i__30210);cljs.core.chunk_append.call(null,b__30211,foundation.templates.dashboard_metric.call(null,metric));
{
var G__30212 = (i__30210 + 1);
i__30210 = G__30212;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30211),iter__30208.call(null,cljs.core.chunk_rest.call(null,s__30209__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30211),null);
}
} else
{var metric = cljs.core.first.call(null,s__30209__$2);return cljs.core.cons.call(null,foundation.templates.dashboard_metric.call(null,metric),iter__30208.call(null,cljs.core.rest.call(null,s__30209__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14516__auto__.call(null,foundation.templates.dashboard_metrics);
})()));
return dom30207;
})());
return dom30206;
})());
return dom30194;
});
foundation.templates.datagrid_filter = (function datagrid_filter(){var dom30215 = document.createElement("div");dom30215.className = "autocomplete";
dom30215.appendChild((function (){var dom30216 = document.createElement("input");dom30216.className = "form-control";
if("text")
{dom30216.setAttribute("type","text");
} else
{}
if("What are you looking for?")
{dom30216.setAttribute("placeholder","What are you looking for?");
} else
{}
return dom30216;
})());
return dom30215;
});
foundation.templates.datagrid_header = (function datagrid_header(columns){var dom30223 = document.createElement("thead");dom30223.setAttribute("id","datagrid-header");
dom30223.appendChild((function (){var dom30224 = document.createElement("tr");dom30224.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14516__auto__ = (function iter__30225(s__30226){return (new cljs.core.LazySeq(null,(function (){var s__30226__$1 = s__30226;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__30226__$1);if(temp__4092__auto__)
{var s__30226__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30226__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__30226__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__30228 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__30227 = 0;while(true){
if((i__30227 < size__14515__auto__))
{var col = cljs.core._nth.call(null,c__14514__auto__,i__30227);cljs.core.chunk_append.call(null,b__30228,foundation.cells.th.call(null,col));
{
var G__30229 = (i__30227 + 1);
i__30227 = G__30229;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30228),iter__30225.call(null,cljs.core.chunk_rest.call(null,s__30226__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30228),null);
}
} else
{var col = cljs.core.first.call(null,s__30226__$2);return cljs.core.cons.call(null,foundation.cells.th.call(null,col),iter__30225.call(null,cljs.core.rest.call(null,s__30226__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14516__auto__.call(null,columns);
})()));
return dom30224;
})());
return dom30223;
});
foundation.templates.datagrid_row = (function datagrid_row(model,columns){var dom30235 = document.createElement("tr");dom30235.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14516__auto__ = (function iter__30236(s__30237){return (new cljs.core.LazySeq(null,(function (){var s__30237__$1 = s__30237;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__30237__$1);if(temp__4092__auto__)
{var s__30237__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30237__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__30237__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__30239 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__30238 = 0;while(true){
if((i__30238 < size__14515__auto__))
{var col = cljs.core._nth.call(null,c__14514__auto__,i__30238);cljs.core.chunk_append.call(null,b__30239,foundation.cells.td.call(null,col,model));
{
var G__30240 = (i__30238 + 1);
i__30238 = G__30240;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30239),iter__30236.call(null,cljs.core.chunk_rest.call(null,s__30237__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30239),null);
}
} else
{var col = cljs.core.first.call(null,s__30237__$2);return cljs.core.cons.call(null,foundation.cells.td.call(null,col,model),iter__30236.call(null,cljs.core.rest.call(null,s__30237__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14516__auto__.call(null,columns);
})()));
return dom30235;
});
foundation.templates.datagrid_body = (function datagrid_body(coll,columns){var dom30246 = document.createElement("tbody");dom30246.className = "datagrid-tbody";
dom30246.setAttribute("id","datagrid-body");
dom30246.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14516__auto__ = (function iter__30247(s__30248){return (new cljs.core.LazySeq(null,(function (){var s__30248__$1 = s__30248;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__30248__$1);if(temp__4092__auto__)
{var s__30248__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30248__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__30248__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__30250 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__30249 = 0;while(true){
if((i__30249 < size__14515__auto__))
{var model = cljs.core._nth.call(null,c__14514__auto__,i__30249);cljs.core.chunk_append.call(null,b__30250,foundation.templates.datagrid_row.call(null,model,columns));
{
var G__30251 = (i__30249 + 1);
i__30249 = G__30251;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30250),iter__30247.call(null,cljs.core.chunk_rest.call(null,s__30248__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30250),null);
}
} else
{var model = cljs.core.first.call(null,s__30248__$2);return cljs.core.cons.call(null,foundation.templates.datagrid_row.call(null,model,columns),iter__30247.call(null,cljs.core.rest.call(null,s__30248__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14516__auto__.call(null,coll);
})()));
return dom30246;
});
foundation.templates.datagrid_breadcrumb = (function datagrid_breadcrumb(){var dom30263 = document.createElement("ol");dom30263.className = "breadcrumb";
dom30263.appendChild((function (){var dom30264 = document.createElement("li");dom30264.className = "active";
dom30264.setAttribute("id","account");
dom30264.appendChild((function (){var dom30265 = document.createElement("div");dom30265.className = "arrow-down";
return dom30265;
})());
dom30264.appendChild((function (){var dom30266 = document.createElement("a");dom30266.appendChild(document.createTextNode("Accounts"));
return dom30266;
})());
dom30264.appendChild((function (){var dom30267 = document.createElement("div");dom30267.className = "arrow-up";
return dom30267;
})());
return dom30264;
})());
dom30263.appendChild((function (){var dom30268 = document.createElement("li");dom30268.className = "hidden";
dom30268.setAttribute("id","campaign");
dom30268.appendChild((function (){var dom30269 = document.createElement("a");dom30269.appendChild(document.createTextNode("Campaigns"));
return dom30269;
})());
return dom30268;
})());
dom30263.appendChild((function (){var dom30270 = document.createElement("li");dom30270.className = "hidden";
dom30270.setAttribute("id","line_item");
dom30270.appendChild((function (){var dom30271 = document.createElement("a");dom30271.appendChild(document.createTextNode("Line Items"));
return dom30271;
})());
return dom30270;
})());
dom30263.appendChild((function (){var dom30272 = document.createElement("li");dom30272.className = "hidden";
dom30272.setAttribute("id","promoted_tweet");
dom30272.appendChild((function (){var dom30273 = document.createElement("a");dom30273.appendChild(document.createTextNode("Promoted Products"));
return dom30273;
})());
return dom30272;
})());
return dom30263;
});
foundation.templates.datagrid_table = (function datagrid_table(model,coll){return dommy.template.__GT_node_like.call(null,(function (){var cols = foundation.models.columns.call(null,model);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table#datagrid-table.table","table#datagrid-table.table",2230740568),foundation.templates.datagrid_header.call(null,cols),foundation.templates.datagrid_body.call(null,coll,cols)], null);
})());
});
foundation.templates.datagrid = (function datagrid(id){var dom30289 = document.createElement("div");dom30289.className = "datagrid-container panel panel-default";
if(cljs.core.truth_(id))
{dom30289.setAttribute("id",id);
} else
{}
dom30289.appendChild((function (){var dom30290 = document.createElement("div");dom30290.className = "panel-heading";
dom30290.appendChild(dommy.template.__GT_node_like.call(null,foundation.templates.datagrid_breadcrumb.call(null)));
dom30290.appendChild((function (){var dom30291 = document.createElement("form");dom30291.className = "form-inline pull-right";
dom30291.appendChild((function (){var dom30292 = document.createElement("div");dom30292.className = "form-group";
dom30292.appendChild(dommy.template.__GT_node_like.call(null,foundation.templates.datagrid_filter.call(null)));
return dom30292;
})());
return dom30291;
})());
return dom30290;
})());
dom30289.appendChild((function (){var dom30293 = document.createElement("div");dom30293.className = "panel-body";
return dom30293;
})());
dom30289.appendChild((function (){var dom30294 = document.createElement("div");dom30294.className = "panel-footer";
dom30294.appendChild((function (){var dom30295 = document.createElement("div");dom30295.className = "form-inline";
dom30295.appendChild((function (){var dom30296 = document.createElement("div");dom30296.className = "form-group";
dom30296.appendChild((function (){var dom30297 = document.createElement("button");dom30297.className = "btn btn-success btn-sm";
dom30297.setAttribute("id","new");
dom30297.appendChild(document.createTextNode("New"));
return dom30297;
})());
return dom30296;
})());
dom30295.appendChild((function (){var dom30298 = document.createElement("div");dom30298.className = "form-group";
dom30298.appendChild((function (){var dom30299 = document.createElement("button");dom30299.className = "btn btn-info btn-sm disabled";
dom30299.setAttribute("id","save");
dom30299.appendChild(document.createTextNode("Save"));
return dom30299;
})());
return dom30298;
})());
dom30295.appendChild((function (){var dom30300 = document.createElement("div");dom30300.className = "form-group";
dom30300.appendChild((function (){var dom30301 = document.createElement("button");dom30301.className = "btn btn-danger btn-sm disabled";
dom30301.setAttribute("id","delete");
dom30301.appendChild(document.createTextNode("Delete"));
return dom30301;
})());
return dom30300;
})());
dom30295.appendChild((function (){var dom30302 = document.createElement("div");dom30302.className = "form-group";
dom30302.appendChild((function (){var dom30303 = document.createElement("button");dom30303.className = "btn btn-primary btn-sm disabled";
dom30303.setAttribute("id","dupe");
dom30303.appendChild(document.createTextNode("Duplicate"));
return dom30303;
})());
return dom30302;
})());
return dom30295;
})());
return dom30294;
})());
return dom30289;
});
foundation.templates.twitter_power = (function twitter_power(id){var dom30305 = document.createElement("div");if(cljs.core.truth_(id))
{dom30305.setAttribute("id",id);
} else
{}
return dom30305;
});

//# sourceMappingURL=templates.js.map