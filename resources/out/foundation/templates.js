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
foundation.templates.date_picker = (function date_picker(el,init_date,date_pattern){cljs.core.println.call(null,init_date);
var date_pattern__$1 = (((date_pattern instanceof cljs.core.Keyword))?date_pattern.call(null,cljs_time.format.formatters):date_pattern);var picker = (new goog.ui.InputDatePicker((new goog.i18n.DateTimeFormat(date_pattern__$1)),(new goog.i18n.DateTimeParse(date_pattern__$1))));var G__75942_75944 = picker.getDatePicker();G__75942_75944.setUseSimpleNavigationMenu(true);
G__75942_75944.setAllowNone(true);
var G__75943 = picker;G__75943.decorate(el);
G__75943.setDate(init_date);
return G__75943;
});
foundation.templates.dashboard_metrics = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Impressions","CPM","Impression Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Engagements","CPE","Engagement Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clicks","CPC","Click Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Retweets","CPRT","Retweet Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Replies","CPR","Reply Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Follows","CPF","Follow Rate"], null)], null);
foundation.templates.dashboard_metric = (function dashboard_metric(p__75945){var vec__75954 = p__75945;var metric = cljs.core.nth.call(null,vec__75954,0,null);var cpa = cljs.core.nth.call(null,vec__75954,1,null);var rate = cljs.core.nth.call(null,vec__75954,2,null);var dom75955 = document.createElement("ul");dom75955.className = "list-group";
dom75955.appendChild((function (){var dom75956 = document.createElement("li");dom75956.className = "list-group-item";
if(cljs.core.truth_(metric))
{dom75956.setAttribute("id",metric);
} else
{}
dom75956.appendChild((function (){var dom75957 = document.createElement("h5");dom75957.className = "metric-header list-group-item-heading";
dom75957.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(metric)].join('')));
return dom75957;
})());
return dom75956;
})());
dom75955.appendChild((function (){var dom75958 = document.createElement("li");dom75958.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-cpa")].join('')))
{dom75958.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-cpa")].join(''));
} else
{}
dom75958.appendChild((function (){var dom75959 = document.createElement("small");dom75959.className = "list-group-item-text";
dom75959.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(cpa)].join('')));
return dom75959;
})());
return dom75958;
})());
dom75955.appendChild((function (){var dom75960 = document.createElement("li");dom75960.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-rate")].join('')))
{dom75960.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-rate")].join(''));
} else
{}
dom75960.appendChild((function (){var dom75961 = document.createElement("small");dom75961.className = "list-group-item-text";
dom75961.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(rate)].join('')));
return dom75961;
})());
return dom75960;
})());
return dom75955;
});
foundation.templates.dashboard = (function dashboard(id){var dom75980 = document.createElement("div");dom75980.className = "twitter-stats panel panel-default";
if(cljs.core.truth_(id))
{dom75980.setAttribute("id",id);
} else
{}
dom75980.appendChild((function (){var dom75981 = document.createElement("div");dom75981.className = "panel-heading";
dom75981.appendChild((function (){var dom75982 = document.createElement("h1");dom75982.className = "panel-title";
if("resource-id")
{dom75982.setAttribute("id","resource-id");
} else
{}
return dom75982;
})());
dom75981.appendChild((function (){var dom75983 = document.createElement("div");dom75983.className = "form-inline pull-right";
dom75983.appendChild((function (){var dom75984 = document.createElement("div");dom75984.className = "form-group";
dom75984.appendChild((function (){var dom75985 = document.createElement("input");dom75985.className = "form-control date-picker";
dom75985.setAttribute("id","start-time");
if(true)
{dom75985.setAttribute("readonly",true);
} else
{}
return dom75985;
})());
return dom75984;
})());
dom75983.appendChild((function (){var dom75986 = document.createElement("em");if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)))
{dom75986.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)));
} else
{}
dom75986.appendChild(document.createTextNode("to"));
return dom75986;
})());
dom75983.appendChild((function (){var dom75987 = document.createElement("div");dom75987.className = "form-group";
dom75987.appendChild((function (){var dom75988 = document.createElement("input");dom75988.className = "form-control date-picker";
dom75988.setAttribute("id","end-time");
if(true)
{dom75988.setAttribute("readonly",true);
} else
{}
return dom75988;
})());
return dom75987;
})());
dom75983.appendChild((function (){var dom75989 = document.createElement("button");dom75989.className = "btn btn-primary btn-sm";
dom75989.setAttribute("id","update-stats");
dom75989.appendChild(document.createTextNode("Update"));
return dom75989;
})());
return dom75983;
})());
return dom75981;
})());
dom75980.appendChild((function (){var dom75990 = document.createElement("div");dom75990.className = "panel-body";
dom75990.appendChild((function (){var dom75991 = document.createElement("div");dom75991.className = "analytics-highcharts";
return dom75991;
})());
return dom75990;
})());
dom75980.appendChild((function (){var dom75992 = document.createElement("div");dom75992.className = "panel-footer row";
dom75992.appendChild((function (){var dom75993 = document.createElement("div");dom75993.className = "twitter-stats";
dom75993.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14516__auto__ = (function iter__75994(s__75995){return (new cljs.core.LazySeq(null,(function (){var s__75995__$1 = s__75995;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__75995__$1);if(temp__4092__auto__)
{var s__75995__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__75995__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__75995__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__75997 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__75996 = 0;while(true){
if((i__75996 < size__14515__auto__))
{var metric = cljs.core._nth.call(null,c__14514__auto__,i__75996);cljs.core.chunk_append.call(null,b__75997,foundation.templates.dashboard_metric.call(null,metric));
{
var G__75998 = (i__75996 + 1);
i__75996 = G__75998;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__75997),iter__75994.call(null,cljs.core.chunk_rest.call(null,s__75995__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__75997),null);
}
} else
{var metric = cljs.core.first.call(null,s__75995__$2);return cljs.core.cons.call(null,foundation.templates.dashboard_metric.call(null,metric),iter__75994.call(null,cljs.core.rest.call(null,s__75995__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14516__auto__.call(null,foundation.templates.dashboard_metrics);
})()));
return dom75993;
})());
return dom75992;
})());
return dom75980;
});
foundation.templates.datagrid_filter = (function datagrid_filter(){var dom76001 = document.createElement("div");dom76001.className = "autocomplete";
dom76001.appendChild((function (){var dom76002 = document.createElement("input");dom76002.className = "form-control";
if("text")
{dom76002.setAttribute("type","text");
} else
{}
if("What are you looking for?")
{dom76002.setAttribute("placeholder","What are you looking for?");
} else
{}
return dom76002;
})());
return dom76001;
});
foundation.templates.datagrid_header = (function datagrid_header(columns){var dom76009 = document.createElement("thead");dom76009.setAttribute("id","datagrid-header");
dom76009.appendChild((function (){var dom76010 = document.createElement("tr");dom76010.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14516__auto__ = (function iter__76011(s__76012){return (new cljs.core.LazySeq(null,(function (){var s__76012__$1 = s__76012;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__76012__$1);if(temp__4092__auto__)
{var s__76012__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__76012__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__76012__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__76014 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__76013 = 0;while(true){
if((i__76013 < size__14515__auto__))
{var col = cljs.core._nth.call(null,c__14514__auto__,i__76013);cljs.core.chunk_append.call(null,b__76014,foundation.cells.th.call(null,col));
{
var G__76015 = (i__76013 + 1);
i__76013 = G__76015;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__76014),iter__76011.call(null,cljs.core.chunk_rest.call(null,s__76012__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__76014),null);
}
} else
{var col = cljs.core.first.call(null,s__76012__$2);return cljs.core.cons.call(null,foundation.cells.th.call(null,col),iter__76011.call(null,cljs.core.rest.call(null,s__76012__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14516__auto__.call(null,columns);
})()));
return dom76010;
})());
return dom76009;
});
foundation.templates.datagrid_row = (function datagrid_row(model,columns){var dom76021 = document.createElement("tr");dom76021.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14516__auto__ = (function iter__76022(s__76023){return (new cljs.core.LazySeq(null,(function (){var s__76023__$1 = s__76023;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__76023__$1);if(temp__4092__auto__)
{var s__76023__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__76023__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__76023__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__76025 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__76024 = 0;while(true){
if((i__76024 < size__14515__auto__))
{var col = cljs.core._nth.call(null,c__14514__auto__,i__76024);cljs.core.chunk_append.call(null,b__76025,foundation.cells.td.call(null,col,model));
{
var G__76026 = (i__76024 + 1);
i__76024 = G__76026;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__76025),iter__76022.call(null,cljs.core.chunk_rest.call(null,s__76023__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__76025),null);
}
} else
{var col = cljs.core.first.call(null,s__76023__$2);return cljs.core.cons.call(null,foundation.cells.td.call(null,col,model),iter__76022.call(null,cljs.core.rest.call(null,s__76023__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14516__auto__.call(null,columns);
})()));
return dom76021;
});
foundation.templates.datagrid_body = (function datagrid_body(coll,columns){var dom76032 = document.createElement("tbody");dom76032.className = "datagrid-tbody";
dom76032.setAttribute("id","datagrid-body");
dom76032.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14516__auto__ = (function iter__76033(s__76034){return (new cljs.core.LazySeq(null,(function (){var s__76034__$1 = s__76034;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__76034__$1);if(temp__4092__auto__)
{var s__76034__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__76034__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__76034__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__76036 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__76035 = 0;while(true){
if((i__76035 < size__14515__auto__))
{var model = cljs.core._nth.call(null,c__14514__auto__,i__76035);cljs.core.chunk_append.call(null,b__76036,foundation.templates.datagrid_row.call(null,model,columns));
{
var G__76037 = (i__76035 + 1);
i__76035 = G__76037;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__76036),iter__76033.call(null,cljs.core.chunk_rest.call(null,s__76034__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__76036),null);
}
} else
{var model = cljs.core.first.call(null,s__76034__$2);return cljs.core.cons.call(null,foundation.templates.datagrid_row.call(null,model,columns),iter__76033.call(null,cljs.core.rest.call(null,s__76034__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14516__auto__.call(null,coll);
})()));
return dom76032;
});
foundation.templates.datagrid_breadcrumb = (function datagrid_breadcrumb(){var dom76049 = document.createElement("ol");dom76049.className = "breadcrumb";
dom76049.appendChild((function (){var dom76050 = document.createElement("li");dom76050.className = "active";
dom76050.setAttribute("id","account");
dom76050.appendChild((function (){var dom76051 = document.createElement("div");dom76051.className = "arrow-down";
return dom76051;
})());
dom76050.appendChild((function (){var dom76052 = document.createElement("a");dom76052.appendChild(document.createTextNode("Accounts"));
return dom76052;
})());
dom76050.appendChild((function (){var dom76053 = document.createElement("div");dom76053.className = "arrow-up";
return dom76053;
})());
return dom76050;
})());
dom76049.appendChild((function (){var dom76054 = document.createElement("li");dom76054.className = "hidden";
dom76054.setAttribute("id","campaign");
dom76054.appendChild((function (){var dom76055 = document.createElement("a");dom76055.appendChild(document.createTextNode("Campaigns"));
return dom76055;
})());
return dom76054;
})());
dom76049.appendChild((function (){var dom76056 = document.createElement("li");dom76056.className = "hidden";
dom76056.setAttribute("id","line_item");
dom76056.appendChild((function (){var dom76057 = document.createElement("a");dom76057.appendChild(document.createTextNode("Line Items"));
return dom76057;
})());
return dom76056;
})());
dom76049.appendChild((function (){var dom76058 = document.createElement("li");dom76058.className = "hidden";
dom76058.setAttribute("id","promoted_tweet");
dom76058.appendChild((function (){var dom76059 = document.createElement("a");dom76059.appendChild(document.createTextNode("Promoted Products"));
return dom76059;
})());
return dom76058;
})());
return dom76049;
});
foundation.templates.datagrid_table = (function datagrid_table(model,coll){return dommy.template.__GT_node_like.call(null,(function (){var cols = foundation.models.columns.call(null,model);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table#datagrid-table.table","table#datagrid-table.table",2230740568),foundation.templates.datagrid_header.call(null,cols),foundation.templates.datagrid_body.call(null,coll,cols)], null);
})());
});
foundation.templates.datagrid = (function datagrid(id){var dom76075 = document.createElement("div");dom76075.className = "datagrid-container panel panel-default";
if(cljs.core.truth_(id))
{dom76075.setAttribute("id",id);
} else
{}
dom76075.appendChild((function (){var dom76076 = document.createElement("div");dom76076.className = "panel-heading";
dom76076.appendChild(dommy.template.__GT_node_like.call(null,foundation.templates.datagrid_breadcrumb.call(null)));
dom76076.appendChild((function (){var dom76077 = document.createElement("form");dom76077.className = "form-inline pull-right";
dom76077.appendChild((function (){var dom76078 = document.createElement("div");dom76078.className = "form-group";
dom76078.appendChild(dommy.template.__GT_node_like.call(null,foundation.templates.datagrid_filter.call(null)));
return dom76078;
})());
return dom76077;
})());
return dom76076;
})());
dom76075.appendChild((function (){var dom76079 = document.createElement("div");dom76079.className = "panel-body";
return dom76079;
})());
dom76075.appendChild((function (){var dom76080 = document.createElement("div");dom76080.className = "panel-footer";
dom76080.appendChild((function (){var dom76081 = document.createElement("div");dom76081.className = "form-inline";
dom76081.appendChild((function (){var dom76082 = document.createElement("div");dom76082.className = "form-group";
dom76082.appendChild((function (){var dom76083 = document.createElement("button");dom76083.className = "btn btn-success btn-sm";
dom76083.setAttribute("id","new");
dom76083.appendChild(document.createTextNode("New"));
return dom76083;
})());
return dom76082;
})());
dom76081.appendChild((function (){var dom76084 = document.createElement("div");dom76084.className = "form-group";
dom76084.appendChild((function (){var dom76085 = document.createElement("button");dom76085.className = "btn btn-info btn-sm disabled";
dom76085.setAttribute("id","save");
dom76085.appendChild(document.createTextNode("Save"));
return dom76085;
})());
return dom76084;
})());
dom76081.appendChild((function (){var dom76086 = document.createElement("div");dom76086.className = "form-group";
dom76086.appendChild((function (){var dom76087 = document.createElement("button");dom76087.className = "btn btn-danger btn-sm disabled";
dom76087.setAttribute("id","delete");
dom76087.appendChild(document.createTextNode("Delete"));
return dom76087;
})());
return dom76086;
})());
dom76081.appendChild((function (){var dom76088 = document.createElement("div");dom76088.className = "form-group";
dom76088.appendChild((function (){var dom76089 = document.createElement("button");dom76089.className = "btn btn-primary btn-sm disabled";
dom76089.setAttribute("id","dupe");
dom76089.appendChild(document.createTextNode("Duplicate"));
return dom76089;
})());
return dom76088;
})());
return dom76081;
})());
return dom76080;
})());
return dom76075;
});
foundation.templates.twitter_power = (function twitter_power(id){var dom76091 = document.createElement("div");if(cljs.core.truth_(id))
{dom76091.setAttribute("id",id);
} else
{}
return dom76091;
});

//# sourceMappingURL=templates.js.map