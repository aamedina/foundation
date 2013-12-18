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
foundation.test.templates.date_picker = (function date_picker(el,init_date,date_pattern){var date_pattern__$1 = (((date_pattern instanceof cljs.core.Keyword))?date_pattern.call(null,cljs_time.format.formatters):date_pattern);var picker = (new goog.ui.InputDatePicker((new goog.i18n.DateTimeFormat(date_pattern__$1)),(new goog.i18n.DateTimeParse(date_pattern__$1))));var G__23937_23939 = picker.getDatePicker();G__23937_23939.setUseSimpleNavigationMenu(true);
G__23937_23939.setAllowNone(true);
var G__23938 = picker;G__23938.decorate(el);
G__23938.setDate(init_date);
return G__23938;
});
foundation.test.templates.dashboard_metrics = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Impressions","CPM","Impression Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Engagements","CPE","Engagement Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clicks","CPC","Click Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Retweets","CPRT","Retweet Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Replies","CPR","Reply Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Follows","CPF","Follow Rate"], null)], null);
foundation.test.templates.dashboard_metric = (function dashboard_metric(p__23940){var vec__23949 = p__23940;var metric = cljs.core.nth.call(null,vec__23949,0,null);var cpa = cljs.core.nth.call(null,vec__23949,1,null);var rate = cljs.core.nth.call(null,vec__23949,2,null);var dom23950 = document.createElement("ul");dom23950.className = "list-group";
dom23950.appendChild((function (){var dom23951 = document.createElement("li");dom23951.className = "list-group-item";
if(cljs.core.truth_(metric))
{dom23951.setAttribute("id",metric);
} else
{}
dom23951.appendChild((function (){var dom23952 = document.createElement("h5");dom23952.className = "metric-header list-group-item-heading";
dom23952.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(metric)].join('')));
return dom23952;
})());
return dom23951;
})());
dom23950.appendChild((function (){var dom23953 = document.createElement("li");dom23953.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-cpa")].join('')))
{dom23953.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-cpa")].join(''));
} else
{}
dom23953.appendChild((function (){var dom23954 = document.createElement("small");dom23954.className = "list-group-item-text";
dom23954.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(cpa)].join('')));
return dom23954;
})());
return dom23953;
})());
dom23950.appendChild((function (){var dom23955 = document.createElement("li");dom23955.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-rate")].join('')))
{dom23955.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-rate")].join(''));
} else
{}
dom23955.appendChild((function (){var dom23956 = document.createElement("small");dom23956.className = "list-group-item-text";
dom23956.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(rate)].join('')));
return dom23956;
})());
return dom23955;
})());
return dom23950;
});
foundation.test.templates.dashboard = (function dashboard(id){var dom23975 = document.createElement("div");dom23975.className = "twitter-stats panel panel-default";
if(cljs.core.truth_(id))
{dom23975.setAttribute("id",id);
} else
{}
dom23975.appendChild((function (){var dom23976 = document.createElement("div");dom23976.className = "panel-heading";
dom23976.appendChild((function (){var dom23977 = document.createElement("h1");dom23977.className = "panel-title";
if("resource-id")
{dom23977.setAttribute("id","resource-id");
} else
{}
return dom23977;
})());
dom23976.appendChild((function (){var dom23978 = document.createElement("div");dom23978.className = "form-inline pull-right";
dom23978.appendChild((function (){var dom23979 = document.createElement("div");dom23979.className = "form-group";
dom23979.appendChild((function (){var dom23980 = document.createElement("input");dom23980.className = "form-control date-picker";
dom23980.setAttribute("id","start-time");
if(true)
{dom23980.setAttribute("readonly",true);
} else
{}
return dom23980;
})());
return dom23979;
})());
dom23978.appendChild((function (){var dom23981 = document.createElement("em");if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)))
{dom23981.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)));
} else
{}
dom23981.appendChild(document.createTextNode("to"));
return dom23981;
})());
dom23978.appendChild((function (){var dom23982 = document.createElement("div");dom23982.className = "form-group";
dom23982.appendChild((function (){var dom23983 = document.createElement("input");dom23983.className = "form-control date-picker";
dom23983.setAttribute("id","end-time");
if(true)
{dom23983.setAttribute("readonly",true);
} else
{}
return dom23983;
})());
return dom23982;
})());
dom23978.appendChild((function (){var dom23984 = document.createElement("button");dom23984.className = "btn btn-primary btn-sm";
dom23984.setAttribute("id","update-stats");
dom23984.appendChild(document.createTextNode("Update"));
return dom23984;
})());
return dom23978;
})());
return dom23976;
})());
dom23975.appendChild((function (){var dom23985 = document.createElement("div");dom23985.className = "panel-body";
dom23985.appendChild((function (){var dom23986 = document.createElement("div");dom23986.className = "analytics-highcharts";
return dom23986;
})());
return dom23985;
})());
dom23975.appendChild((function (){var dom23987 = document.createElement("div");dom23987.className = "panel-footer row";
dom23987.appendChild((function (){var dom23988 = document.createElement("div");dom23988.className = "twitter-stats";
dom23988.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8926__auto__ = (function iter__23989(s__23990){return (new cljs.core.LazySeq(null,(function (){var s__23990__$1 = s__23990;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__23990__$1);if(temp__4092__auto__)
{var s__23990__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23990__$2))
{var c__8924__auto__ = cljs.core.chunk_first.call(null,s__23990__$2);var size__8925__auto__ = cljs.core.count.call(null,c__8924__auto__);var b__23992 = cljs.core.chunk_buffer.call(null,size__8925__auto__);if((function (){var i__23991 = 0;while(true){
if((i__23991 < size__8925__auto__))
{var metric = cljs.core._nth.call(null,c__8924__auto__,i__23991);cljs.core.chunk_append.call(null,b__23992,foundation.test.templates.dashboard_metric.call(null,metric));
{
var G__23993 = (i__23991 + 1);
i__23991 = G__23993;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23992),iter__23989.call(null,cljs.core.chunk_rest.call(null,s__23990__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23992),null);
}
} else
{var metric = cljs.core.first.call(null,s__23990__$2);return cljs.core.cons.call(null,foundation.test.templates.dashboard_metric.call(null,metric),iter__23989.call(null,cljs.core.rest.call(null,s__23990__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8926__auto__.call(null,foundation.test.templates.dashboard_metrics);
})()));
return dom23988;
})());
return dom23987;
})());
return dom23975;
});
foundation.test.templates.datagrid_filter = (function datagrid_filter(){var dom23996 = document.createElement("div");dom23996.className = "autocomplete";
dom23996.appendChild((function (){var dom23997 = document.createElement("input");dom23997.className = "form-control";
if("text")
{dom23997.setAttribute("type","text");
} else
{}
if("What are you looking for?")
{dom23997.setAttribute("placeholder","What are you looking for?");
} else
{}
return dom23997;
})());
return dom23996;
});
foundation.test.templates.datagrid_header = (function datagrid_header(columns){var dom24004 = document.createElement("thead");dom24004.setAttribute("id","datagrid-header");
dom24004.appendChild((function (){var dom24005 = document.createElement("tr");dom24005.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8926__auto__ = (function iter__24006(s__24007){return (new cljs.core.LazySeq(null,(function (){var s__24007__$1 = s__24007;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__24007__$1);if(temp__4092__auto__)
{var s__24007__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24007__$2))
{var c__8924__auto__ = cljs.core.chunk_first.call(null,s__24007__$2);var size__8925__auto__ = cljs.core.count.call(null,c__8924__auto__);var b__24009 = cljs.core.chunk_buffer.call(null,size__8925__auto__);if((function (){var i__24008 = 0;while(true){
if((i__24008 < size__8925__auto__))
{var col = cljs.core._nth.call(null,c__8924__auto__,i__24008);cljs.core.chunk_append.call(null,b__24009,foundation.cells.th.call(null,col));
{
var G__24010 = (i__24008 + 1);
i__24008 = G__24010;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24009),iter__24006.call(null,cljs.core.chunk_rest.call(null,s__24007__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24009),null);
}
} else
{var col = cljs.core.first.call(null,s__24007__$2);return cljs.core.cons.call(null,foundation.cells.th.call(null,col),iter__24006.call(null,cljs.core.rest.call(null,s__24007__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8926__auto__.call(null,columns);
})()));
return dom24005;
})());
return dom24004;
});
foundation.test.templates.datagrid_row = (function datagrid_row(model,columns){var dom24016 = document.createElement("tr");dom24016.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8926__auto__ = (function iter__24017(s__24018){return (new cljs.core.LazySeq(null,(function (){var s__24018__$1 = s__24018;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__24018__$1);if(temp__4092__auto__)
{var s__24018__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24018__$2))
{var c__8924__auto__ = cljs.core.chunk_first.call(null,s__24018__$2);var size__8925__auto__ = cljs.core.count.call(null,c__8924__auto__);var b__24020 = cljs.core.chunk_buffer.call(null,size__8925__auto__);if((function (){var i__24019 = 0;while(true){
if((i__24019 < size__8925__auto__))
{var col = cljs.core._nth.call(null,c__8924__auto__,i__24019);cljs.core.chunk_append.call(null,b__24020,foundation.cells.td.call(null,col,model));
{
var G__24021 = (i__24019 + 1);
i__24019 = G__24021;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24020),iter__24017.call(null,cljs.core.chunk_rest.call(null,s__24018__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24020),null);
}
} else
{var col = cljs.core.first.call(null,s__24018__$2);return cljs.core.cons.call(null,foundation.cells.td.call(null,col,model),iter__24017.call(null,cljs.core.rest.call(null,s__24018__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8926__auto__.call(null,columns);
})()));
return dom24016;
});
foundation.test.templates.datagrid_body = (function datagrid_body(coll,columns){var dom24027 = document.createElement("tbody");dom24027.className = "datagrid-tbody";
dom24027.setAttribute("id","datagrid-body");
dom24027.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8926__auto__ = (function iter__24028(s__24029){return (new cljs.core.LazySeq(null,(function (){var s__24029__$1 = s__24029;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__24029__$1);if(temp__4092__auto__)
{var s__24029__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24029__$2))
{var c__8924__auto__ = cljs.core.chunk_first.call(null,s__24029__$2);var size__8925__auto__ = cljs.core.count.call(null,c__8924__auto__);var b__24031 = cljs.core.chunk_buffer.call(null,size__8925__auto__);if((function (){var i__24030 = 0;while(true){
if((i__24030 < size__8925__auto__))
{var model = cljs.core._nth.call(null,c__8924__auto__,i__24030);cljs.core.chunk_append.call(null,b__24031,foundation.test.templates.datagrid_row.call(null,model,columns));
{
var G__24032 = (i__24030 + 1);
i__24030 = G__24032;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24031),iter__24028.call(null,cljs.core.chunk_rest.call(null,s__24029__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24031),null);
}
} else
{var model = cljs.core.first.call(null,s__24029__$2);return cljs.core.cons.call(null,foundation.test.templates.datagrid_row.call(null,model,columns),iter__24028.call(null,cljs.core.rest.call(null,s__24029__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8926__auto__.call(null,coll);
})()));
return dom24027;
});
foundation.test.templates.datagrid_breadcrumb = (function datagrid_breadcrumb(){var dom24044 = document.createElement("ol");dom24044.className = "breadcrumb";
dom24044.appendChild((function (){var dom24045 = document.createElement("li");dom24045.className = "active";
dom24045.setAttribute("id","account");
dom24045.appendChild((function (){var dom24046 = document.createElement("div");dom24046.className = "arrow-down";
return dom24046;
})());
dom24045.appendChild((function (){var dom24047 = document.createElement("a");dom24047.appendChild(document.createTextNode("Accounts"));
return dom24047;
})());
dom24045.appendChild((function (){var dom24048 = document.createElement("div");dom24048.className = "arrow-up";
return dom24048;
})());
return dom24045;
})());
dom24044.appendChild((function (){var dom24049 = document.createElement("li");dom24049.className = "hidden";
dom24049.setAttribute("id","campaign");
dom24049.appendChild((function (){var dom24050 = document.createElement("a");dom24050.appendChild(document.createTextNode("Campaigns"));
return dom24050;
})());
return dom24049;
})());
dom24044.appendChild((function (){var dom24051 = document.createElement("li");dom24051.className = "hidden";
dom24051.setAttribute("id","line_item");
dom24051.appendChild((function (){var dom24052 = document.createElement("a");dom24052.appendChild(document.createTextNode("Line Items"));
return dom24052;
})());
return dom24051;
})());
dom24044.appendChild((function (){var dom24053 = document.createElement("li");dom24053.className = "hidden";
dom24053.setAttribute("id","promoted_tweet");
dom24053.appendChild((function (){var dom24054 = document.createElement("a");dom24054.appendChild(document.createTextNode("Promoted Products"));
return dom24054;
})());
return dom24053;
})());
return dom24044;
});
foundation.test.templates.datagrid_table = (function datagrid_table(model,coll){return dommy.template.__GT_node_like.call(null,(function (){var cols = foundation.models.columns.call(null,model);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table#datagrid-table.table","table#datagrid-table.table",2230740568),foundation.test.templates.datagrid_header.call(null,cols),foundation.test.templates.datagrid_body.call(null,coll,cols)], null);
})());
});
foundation.test.templates.datagrid = (function datagrid(id){var dom24070 = document.createElement("div");dom24070.className = "datagrid-container panel panel-default";
if(cljs.core.truth_(id))
{dom24070.setAttribute("id",id);
} else
{}
dom24070.appendChild((function (){var dom24071 = document.createElement("div");dom24071.className = "panel-heading";
dom24071.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.templates.datagrid_breadcrumb.call(null)));
dom24071.appendChild((function (){var dom24072 = document.createElement("form");dom24072.className = "form-inline pull-right";
dom24072.appendChild((function (){var dom24073 = document.createElement("div");dom24073.className = "form-group";
dom24073.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.templates.datagrid_filter.call(null)));
return dom24073;
})());
return dom24072;
})());
return dom24071;
})());
dom24070.appendChild((function (){var dom24074 = document.createElement("div");dom24074.className = "panel-body";
return dom24074;
})());
dom24070.appendChild((function (){var dom24075 = document.createElement("div");dom24075.className = "panel-footer";
dom24075.appendChild((function (){var dom24076 = document.createElement("div");dom24076.className = "form-inline";
dom24076.appendChild((function (){var dom24077 = document.createElement("div");dom24077.className = "form-group";
dom24077.appendChild((function (){var dom24078 = document.createElement("button");dom24078.className = "btn btn-success btn-sm";
dom24078.setAttribute("id","new");
dom24078.appendChild(document.createTextNode("New"));
return dom24078;
})());
return dom24077;
})());
dom24076.appendChild((function (){var dom24079 = document.createElement("div");dom24079.className = "form-group";
dom24079.appendChild((function (){var dom24080 = document.createElement("button");dom24080.className = "btn btn-info btn-sm disabled";
dom24080.setAttribute("id","save");
dom24080.appendChild(document.createTextNode("Save"));
return dom24080;
})());
return dom24079;
})());
dom24076.appendChild((function (){var dom24081 = document.createElement("div");dom24081.className = "form-group";
dom24081.appendChild((function (){var dom24082 = document.createElement("button");dom24082.className = "btn btn-danger btn-sm disabled";
dom24082.setAttribute("id","delete");
dom24082.appendChild(document.createTextNode("Delete"));
return dom24082;
})());
return dom24081;
})());
dom24076.appendChild((function (){var dom24083 = document.createElement("div");dom24083.className = "form-group";
dom24083.appendChild((function (){var dom24084 = document.createElement("button");dom24084.className = "btn btn-primary btn-sm disabled";
dom24084.setAttribute("id","dupe");
dom24084.appendChild(document.createTextNode("Duplicate"));
return dom24084;
})());
return dom24083;
})());
return dom24076;
})());
return dom24075;
})());
return dom24070;
});
foundation.test.templates.twitter_power = (function twitter_power(id){var dom24086 = document.createElement("div");if(cljs.core.truth_(id))
{dom24086.setAttribute("id",id);
} else
{}
return dom24086;
});

//# sourceMappingURL=templates.js.map