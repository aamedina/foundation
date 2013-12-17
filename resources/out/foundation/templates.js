// Compiled by ClojureScript 0.0-2120
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
foundation.templates.date_picker = (function date_picker(el,init_date,date_pattern){var date_pattern__$1 = (((date_pattern instanceof cljs.core.Keyword))?date_pattern.call(null,cljs_time.format.formatters):date_pattern);var picker = (new goog.ui.InputDatePicker((new goog.i18n.DateTimeFormat(date_pattern__$1)),(new goog.i18n.DateTimeParse(date_pattern__$1))));var G__361912_361914 = picker.getDatePicker();G__361912_361914.setUseSimpleNavigationMenu(true);
G__361912_361914.setAllowNone(true);
var G__361913 = picker;G__361913.decorate(el);
G__361913.setDate(init_date);
return G__361913;
});
foundation.templates.dashboard_metrics = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Impressions","CPM","Impression Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Engagements","CPE","Engagement Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clicks","CPC","Click Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Retweets","CPRT","Retweet Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Replies","CPR","Reply Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Follows","CPF","Follow Rate"], null)], null);
foundation.templates.dashboard_metric = (function dashboard_metric(p__361915){var vec__361924 = p__361915;var metric = cljs.core.nth.call(null,vec__361924,0,null);var cpa = cljs.core.nth.call(null,vec__361924,1,null);var rate = cljs.core.nth.call(null,vec__361924,2,null);var dom361925 = document.createElement("ul");dom361925.className = "list-group";
dom361925.appendChild((function (){var dom361926 = document.createElement("li");dom361926.className = "list-group-item";
if(cljs.core.truth_(metric))
{dom361926.setAttribute("id",metric);
} else
{}
dom361926.appendChild((function (){var dom361927 = document.createElement("h5");dom361927.className = "metric-header list-group-item-heading";
dom361927.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(metric)].join('')));
return dom361927;
})());
return dom361926;
})());
dom361925.appendChild((function (){var dom361928 = document.createElement("li");dom361928.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-cpa")].join('')))
{dom361928.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-cpa")].join(''));
} else
{}
dom361928.appendChild((function (){var dom361929 = document.createElement("small");dom361929.className = "list-group-item-text";
dom361929.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(cpa)].join('')));
return dom361929;
})());
return dom361928;
})());
dom361925.appendChild((function (){var dom361930 = document.createElement("li");dom361930.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-rate")].join('')))
{dom361930.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-rate")].join(''));
} else
{}
dom361930.appendChild((function (){var dom361931 = document.createElement("small");dom361931.className = "list-group-item-text";
dom361931.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(rate)].join('')));
return dom361931;
})());
return dom361930;
})());
return dom361925;
});
foundation.templates.dashboard = (function dashboard(id){var dom361950 = document.createElement("div");dom361950.className = "twitter-stats panel panel-default";
if(cljs.core.truth_(id))
{dom361950.setAttribute("id",id);
} else
{}
dom361950.appendChild((function (){var dom361951 = document.createElement("div");dom361951.className = "panel-heading";
dom361951.appendChild((function (){var dom361952 = document.createElement("h1");dom361952.className = "panel-title";
if("resource-id")
{dom361952.setAttribute("id","resource-id");
} else
{}
return dom361952;
})());
dom361951.appendChild((function (){var dom361953 = document.createElement("div");dom361953.className = "form-inline pull-right";
dom361953.appendChild((function (){var dom361954 = document.createElement("div");dom361954.className = "form-group";
dom361954.appendChild((function (){var dom361955 = document.createElement("input");dom361955.className = "form-control date-picker";
dom361955.setAttribute("id","start-time");
if(true)
{dom361955.setAttribute("readonly",true);
} else
{}
return dom361955;
})());
return dom361954;
})());
dom361953.appendChild((function (){var dom361956 = document.createElement("em");if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)))
{dom361956.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)));
} else
{}
dom361956.appendChild(document.createTextNode("to"));
return dom361956;
})());
dom361953.appendChild((function (){var dom361957 = document.createElement("div");dom361957.className = "form-group";
dom361957.appendChild((function (){var dom361958 = document.createElement("input");dom361958.className = "form-control date-picker";
dom361958.setAttribute("id","end-time");
if(true)
{dom361958.setAttribute("readonly",true);
} else
{}
return dom361958;
})());
return dom361957;
})());
dom361953.appendChild((function (){var dom361959 = document.createElement("button");dom361959.className = "btn btn-primary btn-sm";
dom361959.setAttribute("id","update-stats");
dom361959.appendChild(document.createTextNode("Update"));
return dom361959;
})());
return dom361953;
})());
return dom361951;
})());
dom361950.appendChild((function (){var dom361960 = document.createElement("div");dom361960.className = "panel-body";
dom361960.appendChild((function (){var dom361961 = document.createElement("div");dom361961.className = "analytics-highcharts";
return dom361961;
})());
return dom361960;
})());
dom361950.appendChild((function (){var dom361962 = document.createElement("div");dom361962.className = "panel-footer row";
dom361962.appendChild((function (){var dom361963 = document.createElement("div");dom361963.className = "twitter-stats";
dom361963.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14677__auto__ = (function iter__361964(s__361965){return (new cljs.core.LazySeq(null,(function (){var s__361965__$1 = s__361965;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__361965__$1);if(temp__4092__auto__)
{var s__361965__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__361965__$2))
{var c__14675__auto__ = cljs.core.chunk_first.call(null,s__361965__$2);var size__14676__auto__ = cljs.core.count.call(null,c__14675__auto__);var b__361967 = cljs.core.chunk_buffer.call(null,size__14676__auto__);if((function (){var i__361966 = 0;while(true){
if((i__361966 < size__14676__auto__))
{var metric = cljs.core._nth.call(null,c__14675__auto__,i__361966);cljs.core.chunk_append.call(null,b__361967,foundation.templates.dashboard_metric.call(null,metric));
{
var G__361968 = (i__361966 + 1);
i__361966 = G__361968;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__361967),iter__361964.call(null,cljs.core.chunk_rest.call(null,s__361965__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__361967),null);
}
} else
{var metric = cljs.core.first.call(null,s__361965__$2);return cljs.core.cons.call(null,foundation.templates.dashboard_metric.call(null,metric),iter__361964.call(null,cljs.core.rest.call(null,s__361965__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14677__auto__.call(null,foundation.templates.dashboard_metrics);
})()));
return dom361963;
})());
return dom361962;
})());
return dom361950;
});
foundation.templates.datagrid_filter = (function datagrid_filter(){var dom361971 = document.createElement("div");dom361971.className = "autocomplete";
dom361971.appendChild((function (){var dom361972 = document.createElement("input");dom361972.className = "form-control";
if("text")
{dom361972.setAttribute("type","text");
} else
{}
if("What are you looking for?")
{dom361972.setAttribute("placeholder","What are you looking for?");
} else
{}
return dom361972;
})());
return dom361971;
});
foundation.templates.datagrid_header = (function datagrid_header(columns){var dom361979 = document.createElement("thead");dom361979.setAttribute("id","datagrid-header");
dom361979.appendChild((function (){var dom361980 = document.createElement("tr");dom361980.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14677__auto__ = (function iter__361981(s__361982){return (new cljs.core.LazySeq(null,(function (){var s__361982__$1 = s__361982;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__361982__$1);if(temp__4092__auto__)
{var s__361982__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__361982__$2))
{var c__14675__auto__ = cljs.core.chunk_first.call(null,s__361982__$2);var size__14676__auto__ = cljs.core.count.call(null,c__14675__auto__);var b__361984 = cljs.core.chunk_buffer.call(null,size__14676__auto__);if((function (){var i__361983 = 0;while(true){
if((i__361983 < size__14676__auto__))
{var col = cljs.core._nth.call(null,c__14675__auto__,i__361983);cljs.core.chunk_append.call(null,b__361984,foundation.cells.th.call(null,col));
{
var G__361985 = (i__361983 + 1);
i__361983 = G__361985;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__361984),iter__361981.call(null,cljs.core.chunk_rest.call(null,s__361982__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__361984),null);
}
} else
{var col = cljs.core.first.call(null,s__361982__$2);return cljs.core.cons.call(null,foundation.cells.th.call(null,col),iter__361981.call(null,cljs.core.rest.call(null,s__361982__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14677__auto__.call(null,columns);
})()));
return dom361980;
})());
return dom361979;
});
foundation.templates.datagrid_row = (function datagrid_row(model,columns){var dom361991 = document.createElement("tr");dom361991.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14677__auto__ = (function iter__361992(s__361993){return (new cljs.core.LazySeq(null,(function (){var s__361993__$1 = s__361993;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__361993__$1);if(temp__4092__auto__)
{var s__361993__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__361993__$2))
{var c__14675__auto__ = cljs.core.chunk_first.call(null,s__361993__$2);var size__14676__auto__ = cljs.core.count.call(null,c__14675__auto__);var b__361995 = cljs.core.chunk_buffer.call(null,size__14676__auto__);if((function (){var i__361994 = 0;while(true){
if((i__361994 < size__14676__auto__))
{var col = cljs.core._nth.call(null,c__14675__auto__,i__361994);cljs.core.chunk_append.call(null,b__361995,foundation.cells.td.call(null,col,model));
{
var G__361996 = (i__361994 + 1);
i__361994 = G__361996;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__361995),iter__361992.call(null,cljs.core.chunk_rest.call(null,s__361993__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__361995),null);
}
} else
{var col = cljs.core.first.call(null,s__361993__$2);return cljs.core.cons.call(null,foundation.cells.td.call(null,col,model),iter__361992.call(null,cljs.core.rest.call(null,s__361993__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14677__auto__.call(null,columns);
})()));
return dom361991;
});
foundation.templates.datagrid_body = (function datagrid_body(coll,columns){var dom362002 = document.createElement("tbody");dom362002.className = "datagrid-tbody";
dom362002.setAttribute("id","datagrid-body");
dom362002.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14677__auto__ = (function iter__362003(s__362004){return (new cljs.core.LazySeq(null,(function (){var s__362004__$1 = s__362004;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__362004__$1);if(temp__4092__auto__)
{var s__362004__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__362004__$2))
{var c__14675__auto__ = cljs.core.chunk_first.call(null,s__362004__$2);var size__14676__auto__ = cljs.core.count.call(null,c__14675__auto__);var b__362006 = cljs.core.chunk_buffer.call(null,size__14676__auto__);if((function (){var i__362005 = 0;while(true){
if((i__362005 < size__14676__auto__))
{var model = cljs.core._nth.call(null,c__14675__auto__,i__362005);cljs.core.chunk_append.call(null,b__362006,foundation.templates.datagrid_row.call(null,model,columns));
{
var G__362007 = (i__362005 + 1);
i__362005 = G__362007;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__362006),iter__362003.call(null,cljs.core.chunk_rest.call(null,s__362004__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__362006),null);
}
} else
{var model = cljs.core.first.call(null,s__362004__$2);return cljs.core.cons.call(null,foundation.templates.datagrid_row.call(null,model,columns),iter__362003.call(null,cljs.core.rest.call(null,s__362004__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14677__auto__.call(null,coll);
})()));
return dom362002;
});
foundation.templates.datagrid_breadcrumb = (function datagrid_breadcrumb(){var dom362019 = document.createElement("ol");dom362019.className = "breadcrumb";
dom362019.appendChild((function (){var dom362020 = document.createElement("li");dom362020.className = "active";
dom362020.setAttribute("id","account");
dom362020.appendChild((function (){var dom362021 = document.createElement("div");dom362021.className = "arrow-down";
return dom362021;
})());
dom362020.appendChild((function (){var dom362022 = document.createElement("a");dom362022.appendChild(document.createTextNode("Accounts"));
return dom362022;
})());
dom362020.appendChild((function (){var dom362023 = document.createElement("div");dom362023.className = "arrow-up";
return dom362023;
})());
return dom362020;
})());
dom362019.appendChild((function (){var dom362024 = document.createElement("li");dom362024.className = "hidden";
dom362024.setAttribute("id","campaign");
dom362024.appendChild((function (){var dom362025 = document.createElement("a");dom362025.appendChild(document.createTextNode("Campaigns"));
return dom362025;
})());
return dom362024;
})());
dom362019.appendChild((function (){var dom362026 = document.createElement("li");dom362026.className = "hidden";
dom362026.setAttribute("id","line_item");
dom362026.appendChild((function (){var dom362027 = document.createElement("a");dom362027.appendChild(document.createTextNode("Line Items"));
return dom362027;
})());
return dom362026;
})());
dom362019.appendChild((function (){var dom362028 = document.createElement("li");dom362028.className = "hidden";
dom362028.setAttribute("id","promoted_tweet");
dom362028.appendChild((function (){var dom362029 = document.createElement("a");dom362029.appendChild(document.createTextNode("Promoted Products"));
return dom362029;
})());
return dom362028;
})());
return dom362019;
});
foundation.templates.datagrid_table = (function datagrid_table(model,coll){return dommy.template.__GT_node_like.call(null,(function (){var cols = foundation.models.columns.call(null,model);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table#datagrid-table.table","table#datagrid-table.table",2230740568),foundation.templates.datagrid_header.call(null,cols),foundation.templates.datagrid_body.call(null,coll,cols)], null);
})());
});
foundation.templates.datagrid = (function datagrid(id){var dom362045 = document.createElement("div");dom362045.className = "datagrid-container panel panel-default";
if(cljs.core.truth_(id))
{dom362045.setAttribute("id",id);
} else
{}
dom362045.appendChild((function (){var dom362046 = document.createElement("div");dom362046.className = "panel-heading";
dom362046.appendChild(dommy.template.__GT_node_like.call(null,foundation.templates.datagrid_breadcrumb.call(null)));
dom362046.appendChild((function (){var dom362047 = document.createElement("form");dom362047.className = "form-inline pull-right";
dom362047.appendChild((function (){var dom362048 = document.createElement("div");dom362048.className = "form-group";
dom362048.appendChild(dommy.template.__GT_node_like.call(null,foundation.templates.datagrid_filter.call(null)));
return dom362048;
})());
return dom362047;
})());
return dom362046;
})());
dom362045.appendChild((function (){var dom362049 = document.createElement("div");dom362049.className = "panel-body";
return dom362049;
})());
dom362045.appendChild((function (){var dom362050 = document.createElement("div");dom362050.className = "panel-footer";
dom362050.appendChild((function (){var dom362051 = document.createElement("div");dom362051.className = "form-inline";
dom362051.appendChild((function (){var dom362052 = document.createElement("div");dom362052.className = "form-group";
dom362052.appendChild((function (){var dom362053 = document.createElement("button");dom362053.className = "btn btn-success btn-sm";
dom362053.setAttribute("id","new");
dom362053.appendChild(document.createTextNode("New"));
return dom362053;
})());
return dom362052;
})());
dom362051.appendChild((function (){var dom362054 = document.createElement("div");dom362054.className = "form-group";
dom362054.appendChild((function (){var dom362055 = document.createElement("button");dom362055.className = "btn btn-info btn-sm disabled";
dom362055.setAttribute("id","save");
dom362055.appendChild(document.createTextNode("Save"));
return dom362055;
})());
return dom362054;
})());
dom362051.appendChild((function (){var dom362056 = document.createElement("div");dom362056.className = "form-group";
dom362056.appendChild((function (){var dom362057 = document.createElement("button");dom362057.className = "btn btn-danger btn-sm disabled";
dom362057.setAttribute("id","delete");
dom362057.appendChild(document.createTextNode("Delete"));
return dom362057;
})());
return dom362056;
})());
dom362051.appendChild((function (){var dom362058 = document.createElement("div");dom362058.className = "form-group";
dom362058.appendChild((function (){var dom362059 = document.createElement("button");dom362059.className = "btn btn-primary btn-sm disabled";
dom362059.setAttribute("id","dupe");
dom362059.appendChild(document.createTextNode("Duplicate"));
return dom362059;
})());
return dom362058;
})());
return dom362051;
})());
return dom362050;
})());
return dom362045;
});
foundation.templates.twitter_power = (function twitter_power(id){var dom362061 = document.createElement("div");if(cljs.core.truth_(id))
{dom362061.setAttribute("id",id);
} else
{}
return dom362061;
});

//# sourceMappingURL=templates.js.map