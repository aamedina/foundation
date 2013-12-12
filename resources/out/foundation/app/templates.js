// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.app.templates');
goog.require('cljs.core');
goog.require('foundation.app.cells');
goog.require('foundation.app.cells');
goog.require('dommy.core');
goog.require('dommy.core');
goog.require('enfocus.events');
goog.require('enfocus.events');
goog.require('enfocus.core');
goog.require('enfocus.core');
foundation.app.templates.dashboard_metrics = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Impressions","Engagements","Clicks","Retweets","Replies","Follows"], null);
foundation.app.templates.chart = (function chart(){var dom88013 = document.createElement("div");dom88013.className = "analytics-highcharts";
return dom88013;
});
foundation.app.templates.dashboard_metric = (function dashboard_metric(metric){var dom88021 = document.createElement("ul");dom88021.className = "list-group";
dom88021.appendChild((function (){var dom88022 = document.createElement("li");dom88022.className = "list-group-item";
if(cljs.core.truth_(metric))
{dom88022.setAttribute("id",metric);
} else
{}
dom88022.appendChild((function (){var dom88023 = document.createElement("h5");dom88023.className = "metric-header list-group-item-heading";
dom88023.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(metric)].join('')));
return dom88023;
})());
return dom88022;
})());
dom88021.appendChild((function (){var dom88024 = document.createElement("li");dom88024.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-cpa")].join('')))
{dom88024.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-cpa")].join(''));
} else
{}
dom88024.appendChild((function (){var dom88025 = document.createElement("small");dom88025.className = "list-group-item-text";
dom88025.appendChild(dommy.template.__GT_node_like.call(null,0));
return dom88025;
})());
return dom88024;
})());
dom88021.appendChild((function (){var dom88026 = document.createElement("li");dom88026.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-rate")].join('')))
{dom88026.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-rate")].join(''));
} else
{}
dom88026.appendChild((function (){var dom88027 = document.createElement("small");dom88027.className = "list-group-item-text";
dom88027.appendChild(dommy.template.__GT_node_like.call(null,0));
return dom88027;
})());
return dom88026;
})());
return dom88021;
});
foundation.app.templates.dashboard = (function dashboard(id){var dom88045 = document.createElement("div");dom88045.className = "twitter-stats panel panel-default";
if(cljs.core.truth_(id))
{dom88045.setAttribute("id",id);
} else
{}
dom88045.appendChild((function (){var dom88046 = document.createElement("div");dom88046.className = "panel-heading";
dom88046.appendChild((function (){var dom88047 = document.createElement("h1");dom88047.className = "panel-title#resource-id";
dom88047.setAttribute("id","resource-id");
return dom88047;
})());
dom88046.appendChild((function (){var dom88048 = document.createElement("div");dom88048.className = "form-inline pull-right";
dom88048.appendChild((function (){var dom88049 = document.createElement("div");dom88049.className = "form-group";
dom88049.appendChild((function (){var dom88050 = document.createElement("input");dom88050.className = "form-control date-picker";
dom88050.setAttribute("id","start-time");
if(true)
{dom88050.setAttribute("readonly",true);
} else
{}
return dom88050;
})());
return dom88049;
})());
dom88048.appendChild((function (){var dom88051 = document.createElement("em");if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)))
{dom88051.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)));
} else
{}
dom88051.appendChild(document.createTextNode("to"));
return dom88051;
})());
dom88048.appendChild((function (){var dom88052 = document.createElement("div");dom88052.className = "form-group";
dom88052.appendChild((function (){var dom88053 = document.createElement("input");dom88053.className = "form-control date-picker";
dom88053.setAttribute("id","end-time");
if(true)
{dom88053.setAttribute("readonly",true);
} else
{}
return dom88053;
})());
return dom88052;
})());
dom88048.appendChild((function (){var dom88054 = document.createElement("button");dom88054.className = "btn btn-primary btn-sm";
dom88054.setAttribute("id","update-stats");
dom88054.appendChild(document.createTextNode("Update"));
return dom88054;
})());
return dom88048;
})());
return dom88046;
})());
dom88045.appendChild((function (){var dom88055 = document.createElement("div");dom88055.className = "panel-body";
dom88055.appendChild(dommy.template.__GT_node_like.call(null,foundation.app.templates.chart.call(null)));
return dom88055;
})());
dom88045.appendChild((function (){var dom88056 = document.createElement("div");dom88056.className = "panel-footer row";
dom88056.appendChild((function (){var dom88057 = document.createElement("div");dom88057.className = "twitter-stats";
dom88057.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14514__auto__ = (function iter__88058(s__88059){return (new cljs.core.LazySeq(null,(function (){var s__88059__$1 = s__88059;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__88059__$1);if(temp__4092__auto__)
{var s__88059__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__88059__$2))
{var c__14512__auto__ = cljs.core.chunk_first.call(null,s__88059__$2);var size__14513__auto__ = cljs.core.count.call(null,c__14512__auto__);var b__88061 = cljs.core.chunk_buffer.call(null,size__14513__auto__);if((function (){var i__88060 = 0;while(true){
if((i__88060 < size__14513__auto__))
{var metric = cljs.core._nth.call(null,c__14512__auto__,i__88060);cljs.core.chunk_append.call(null,b__88061,foundation.app.templates.dashboard_metric.call(null,metric));
{
var G__88062 = (i__88060 + 1);
i__88060 = G__88062;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88061),iter__88058.call(null,cljs.core.chunk_rest.call(null,s__88059__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88061),null);
}
} else
{var metric = cljs.core.first.call(null,s__88059__$2);return cljs.core.cons.call(null,foundation.app.templates.dashboard_metric.call(null,metric),iter__88058.call(null,cljs.core.rest.call(null,s__88059__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14514__auto__.call(null,foundation.app.templates.dashboard_metrics);
})()));
return dom88057;
})());
return dom88056;
})());
return dom88045;
});
foundation.app.templates.datagrid_filter = (function datagrid_filter(coll){var dom88065 = document.createElement("div");dom88065.className = "autocomplete";
dom88065.appendChild((function (){var dom88066 = document.createElement("input");dom88066.className = "form-control";
if("text")
{dom88066.setAttribute("type","text");
} else
{}
if("What are you looking for?")
{dom88066.setAttribute("placeholder","What are you looking for?");
} else
{}
return dom88066;
})());
return dom88065;
});
foundation.app.templates.datagrid_header = (function datagrid_header(columns){var dom88073 = document.createElement("thead");dom88073.setAttribute("id","datagrid-header");
dom88073.appendChild((function (){var dom88074 = document.createElement("tr");dom88074.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14514__auto__ = (function iter__88075(s__88076){return (new cljs.core.LazySeq(null,(function (){var s__88076__$1 = s__88076;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__88076__$1);if(temp__4092__auto__)
{var s__88076__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__88076__$2))
{var c__14512__auto__ = cljs.core.chunk_first.call(null,s__88076__$2);var size__14513__auto__ = cljs.core.count.call(null,c__14512__auto__);var b__88078 = cljs.core.chunk_buffer.call(null,size__14513__auto__);if((function (){var i__88077 = 0;while(true){
if((i__88077 < size__14513__auto__))
{var col = cljs.core._nth.call(null,c__14512__auto__,i__88077);cljs.core.chunk_append.call(null,b__88078,foundation.app.cells.th.call(null,col));
{
var G__88079 = (i__88077 + 1);
i__88077 = G__88079;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88078),iter__88075.call(null,cljs.core.chunk_rest.call(null,s__88076__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88078),null);
}
} else
{var col = cljs.core.first.call(null,s__88076__$2);return cljs.core.cons.call(null,foundation.app.cells.th.call(null,col),iter__88075.call(null,cljs.core.rest.call(null,s__88076__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14514__auto__.call(null,columns);
})()));
return dom88074;
})());
return dom88073;
});
foundation.app.templates.datagrid_row = (function datagrid_row(model,columns){var dom88085 = document.createElement("tr");dom88085.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14514__auto__ = (function iter__88086(s__88087){return (new cljs.core.LazySeq(null,(function (){var s__88087__$1 = s__88087;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__88087__$1);if(temp__4092__auto__)
{var s__88087__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__88087__$2))
{var c__14512__auto__ = cljs.core.chunk_first.call(null,s__88087__$2);var size__14513__auto__ = cljs.core.count.call(null,c__14512__auto__);var b__88089 = cljs.core.chunk_buffer.call(null,size__14513__auto__);if((function (){var i__88088 = 0;while(true){
if((i__88088 < size__14513__auto__))
{var col = cljs.core._nth.call(null,c__14512__auto__,i__88088);cljs.core.chunk_append.call(null,b__88089,foundation.app.cells.td.call(null,col,model));
{
var G__88090 = (i__88088 + 1);
i__88088 = G__88090;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88089),iter__88086.call(null,cljs.core.chunk_rest.call(null,s__88087__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88089),null);
}
} else
{var col = cljs.core.first.call(null,s__88087__$2);return cljs.core.cons.call(null,foundation.app.cells.td.call(null,col,model),iter__88086.call(null,cljs.core.rest.call(null,s__88087__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14514__auto__.call(null,columns);
})()));
return dom88085;
});
foundation.app.templates.datagrid_body = (function datagrid_body(coll,columns){var dom88096 = document.createElement("tbody");dom88096.className = "datagrid-tbody";
dom88096.setAttribute("id","datagrid-body");
dom88096.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14514__auto__ = (function iter__88097(s__88098){return (new cljs.core.LazySeq(null,(function (){var s__88098__$1 = s__88098;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__88098__$1);if(temp__4092__auto__)
{var s__88098__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__88098__$2))
{var c__14512__auto__ = cljs.core.chunk_first.call(null,s__88098__$2);var size__14513__auto__ = cljs.core.count.call(null,c__14512__auto__);var b__88100 = cljs.core.chunk_buffer.call(null,size__14513__auto__);if((function (){var i__88099 = 0;while(true){
if((i__88099 < size__14513__auto__))
{var model = cljs.core._nth.call(null,c__14512__auto__,i__88099);cljs.core.chunk_append.call(null,b__88100,foundation.app.templates.datagrid_row.call(null,model,columns));
{
var G__88101 = (i__88099 + 1);
i__88099 = G__88101;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88100),iter__88097.call(null,cljs.core.chunk_rest.call(null,s__88098__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88100),null);
}
} else
{var model = cljs.core.first.call(null,s__88098__$2);return cljs.core.cons.call(null,foundation.app.templates.datagrid_row.call(null,model,columns),iter__88097.call(null,cljs.core.rest.call(null,s__88098__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14514__auto__.call(null,cljs.core.vals.call(null,coll));
})()));
return dom88096;
});
foundation.app.templates.datagrid_breadcrumb = (function datagrid_breadcrumb(coll){var dom88113 = document.createElement("ol");dom88113.className = "breadcrumb";
dom88113.appendChild((function (){var dom88114 = document.createElement("li");dom88114.className = "active";
dom88114.setAttribute("id","account");
dom88114.appendChild((function (){var dom88115 = document.createElement("div");dom88115.className = "arrow-down";
return dom88115;
})());
dom88114.appendChild((function (){var dom88116 = document.createElement("a");dom88116.appendChild(document.createTextNode("Accounts"));
return dom88116;
})());
dom88114.appendChild((function (){var dom88117 = document.createElement("div");dom88117.className = "arrow-up";
return dom88117;
})());
return dom88114;
})());
dom88113.appendChild((function (){var dom88118 = document.createElement("li");dom88118.className = "hidden";
dom88118.setAttribute("id","campaign");
dom88118.appendChild((function (){var dom88119 = document.createElement("a");dom88119.appendChild(document.createTextNode("Campaigns"));
return dom88119;
})());
return dom88118;
})());
dom88113.appendChild((function (){var dom88120 = document.createElement("li");dom88120.className = "hidden";
dom88120.setAttribute("id","line_item");
dom88120.appendChild((function (){var dom88121 = document.createElement("a");dom88121.appendChild(document.createTextNode("Line Items"));
return dom88121;
})());
return dom88120;
})());
dom88113.appendChild((function (){var dom88122 = document.createElement("li");dom88122.className = "hidden";
dom88122.setAttribute("id","promoted_tweet");
dom88122.appendChild((function (){var dom88123 = document.createElement("a");dom88123.appendChild(document.createTextNode("Promoted Products"));
return dom88123;
})());
return dom88122;
})());
return dom88113;
});
foundation.app.templates.datagrid_table = (function datagrid_table(p__88124){var map__88127 = p__88124;var map__88127__$1 = ((cljs.core.seq_QMARK_.call(null,map__88127))?cljs.core.apply.call(null,cljs.core.hash_map,map__88127):map__88127);var collection = cljs.core.get.call(null,map__88127__$1,new cljs.core.Keyword(null,"collection","collection",3567559184));var resource = cljs.core.get.call(null,map__88127__$1,new cljs.core.Keyword(null,"resource","resource",672839552));return dommy.template.__GT_node_like.call(null,(function (){var map__88128 = resource;var map__88128__$1 = ((cljs.core.seq_QMARK_.call(null,map__88128))?cljs.core.apply.call(null,cljs.core.hash_map,map__88128):map__88128);var columns = cljs.core.get.call(null,map__88128__$1,new cljs.core.Keyword(null,"columns","columns",1963625295));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table#datagrid-table.table","table#datagrid-table.table",2230740568),foundation.app.templates.datagrid_header.call(null,columns),foundation.app.templates.datagrid_body.call(null,collection,columns)], null);
})());
});
foundation.app.templates.datagrid = (function datagrid(id,collection){var dom88144 = document.createElement("div");dom88144.className = "datagrid-container panel panel-default";
if(cljs.core.truth_(id))
{dom88144.setAttribute("id",id);
} else
{}
dom88144.appendChild((function (){var dom88145 = document.createElement("div");dom88145.className = "panel-heading";
dom88145.appendChild(dommy.template.__GT_node_like.call(null,foundation.app.templates.datagrid_breadcrumb.call(null,collection)));
dom88145.appendChild((function (){var dom88146 = document.createElement("form");dom88146.className = "form-inline pull-right";
dom88146.appendChild((function (){var dom88147 = document.createElement("div");dom88147.className = "form-group";
dom88147.appendChild(dommy.template.__GT_node_like.call(null,foundation.app.templates.datagrid_filter.call(null,collection)));
return dom88147;
})());
return dom88146;
})());
return dom88145;
})());
dom88144.appendChild((function (){var dom88148 = document.createElement("div");dom88148.className = "panel-body";
dom88148.appendChild(dommy.template.__GT_node_like.call(null,foundation.app.templates.datagrid_table.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"collection","collection",3567559184),collection], null))));
return dom88148;
})());
dom88144.appendChild((function (){var dom88149 = document.createElement("div");dom88149.className = "panel-footer";
dom88149.appendChild((function (){var dom88150 = document.createElement("div");dom88150.className = "form-inline";
dom88150.appendChild((function (){var dom88151 = document.createElement("div");dom88151.className = "form-group";
dom88151.appendChild((function (){var dom88152 = document.createElement("button");dom88152.className = "btn btn-success btn-sm";
dom88152.setAttribute("id","new");
dom88152.appendChild(document.createTextNode("New"));
return dom88152;
})());
return dom88151;
})());
dom88150.appendChild((function (){var dom88153 = document.createElement("div");dom88153.className = "form-group";
dom88153.appendChild((function (){var dom88154 = document.createElement("button");dom88154.className = "btn btn-info btn-sm disabled";
dom88154.setAttribute("id","save");
dom88154.appendChild(document.createTextNode("Save"));
return dom88154;
})());
return dom88153;
})());
dom88150.appendChild((function (){var dom88155 = document.createElement("div");dom88155.className = "form-group";
dom88155.appendChild((function (){var dom88156 = document.createElement("button");dom88156.className = "btn btn-danger btn-sm disabled";
dom88156.setAttribute("id","delete");
dom88156.appendChild(document.createTextNode("Delete"));
return dom88156;
})());
return dom88155;
})());
dom88150.appendChild((function (){var dom88157 = document.createElement("div");dom88157.className = "form-group";
dom88157.appendChild((function (){var dom88158 = document.createElement("button");dom88158.className = "btn btn-primary btn-sm disabled";
dom88158.setAttribute("id","dupe");
dom88158.appendChild(document.createTextNode("Duplicate"));
return dom88158;
})());
return dom88157;
})());
return dom88150;
})());
return dom88149;
})());
return dom88144;
});
foundation.app.templates.twitter_power = (function twitter_power(id){var dom88160 = document.createElement("div");if(cljs.core.truth_(id))
{dom88160.setAttribute("id",id);
} else
{}
return dom88160;
});

//# sourceMappingURL=templates.js.map