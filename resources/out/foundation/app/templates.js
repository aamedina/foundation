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
foundation.app.templates.chart = (function chart(){var dom29720 = document.createElement("div");dom29720.className = "analytics-highcharts";
return dom29720;
});
foundation.app.templates.dashboard_metric = (function dashboard_metric(metric){var dom29728 = document.createElement("ul");dom29728.className = "list-group";
dom29728.appendChild((function (){var dom29729 = document.createElement("li");dom29729.className = "list-group-item";
if(cljs.core.truth_(metric))
{dom29729.setAttribute("id",metric);
} else
{}
dom29729.appendChild((function (){var dom29730 = document.createElement("h5");dom29730.className = "metric-header list-group-item-heading";
dom29730.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(metric)].join('')));
return dom29730;
})());
return dom29729;
})());
dom29728.appendChild((function (){var dom29731 = document.createElement("li");dom29731.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-cpa")].join('')))
{dom29731.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-cpa")].join(''));
} else
{}
dom29731.appendChild((function (){var dom29732 = document.createElement("small");dom29732.className = "list-group-item-text";
dom29732.appendChild(dommy.template.__GT_node_like.call(null,0));
return dom29732;
})());
return dom29731;
})());
dom29728.appendChild((function (){var dom29733 = document.createElement("li");dom29733.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-rate")].join('')))
{dom29733.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-rate")].join(''));
} else
{}
dom29733.appendChild((function (){var dom29734 = document.createElement("small");dom29734.className = "list-group-item-text";
dom29734.appendChild(dommy.template.__GT_node_like.call(null,0));
return dom29734;
})());
return dom29733;
})());
return dom29728;
});
foundation.app.templates.dashboard = (function dashboard(p__29735){var map__29754 = p__29735;var map__29754__$1 = ((cljs.core.seq_QMARK_.call(null,map__29754))?cljs.core.apply.call(null,cljs.core.hash_map,map__29754):map__29754);var id = cljs.core.get.call(null,map__29754__$1,new cljs.core.Keyword(null,"id","id",1013907597));var dom29755 = document.createElement("div");dom29755.className = "twitter-stats panel panel-default";
if(cljs.core.truth_(id))
{dom29755.setAttribute("id",id);
} else
{}
dom29755.appendChild((function (){var dom29756 = document.createElement("div");dom29756.className = "panel-heading";
dom29756.appendChild((function (){var dom29757 = document.createElement("h1");dom29757.className = "panel-title#resource-id";
dom29757.setAttribute("id","resource-id");
return dom29757;
})());
dom29756.appendChild((function (){var dom29758 = document.createElement("div");dom29758.className = "form-inline pull-right";
dom29758.appendChild((function (){var dom29759 = document.createElement("div");dom29759.className = "form-group";
dom29759.appendChild((function (){var dom29760 = document.createElement("input");dom29760.className = "form-control date-picker";
dom29760.setAttribute("id","start-time");
if(true)
{dom29760.setAttribute("readonly",true);
} else
{}
return dom29760;
})());
return dom29759;
})());
dom29758.appendChild((function (){var dom29761 = document.createElement("em");if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)))
{dom29761.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)));
} else
{}
dom29761.appendChild(document.createTextNode("to"));
return dom29761;
})());
dom29758.appendChild((function (){var dom29762 = document.createElement("div");dom29762.className = "form-group";
dom29762.appendChild((function (){var dom29763 = document.createElement("input");dom29763.className = "form-control date-picker";
dom29763.setAttribute("id","end-time");
if(true)
{dom29763.setAttribute("readonly",true);
} else
{}
return dom29763;
})());
return dom29762;
})());
dom29758.appendChild((function (){var dom29764 = document.createElement("button");dom29764.className = "btn btn-primary btn-sm";
dom29764.setAttribute("id","update-stats");
dom29764.appendChild(document.createTextNode("Update"));
return dom29764;
})());
return dom29758;
})());
return dom29756;
})());
dom29755.appendChild((function (){var dom29765 = document.createElement("div");dom29765.className = "panel-body";
dom29765.appendChild(dommy.template.__GT_node_like.call(null,foundation.app.templates.chart.call(null)));
return dom29765;
})());
dom29755.appendChild((function (){var dom29766 = document.createElement("div");dom29766.className = "panel-footer row";
dom29766.appendChild((function (){var dom29767 = document.createElement("div");dom29767.className = "twitter-stats";
dom29767.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14514__auto__ = (function iter__29768(s__29769){return (new cljs.core.LazySeq(null,(function (){var s__29769__$1 = s__29769;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__29769__$1);if(temp__4092__auto__)
{var s__29769__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29769__$2))
{var c__14512__auto__ = cljs.core.chunk_first.call(null,s__29769__$2);var size__14513__auto__ = cljs.core.count.call(null,c__14512__auto__);var b__29771 = cljs.core.chunk_buffer.call(null,size__14513__auto__);if((function (){var i__29770 = 0;while(true){
if((i__29770 < size__14513__auto__))
{var metric = cljs.core._nth.call(null,c__14512__auto__,i__29770);cljs.core.chunk_append.call(null,b__29771,foundation.app.templates.dashboard_metric.call(null,metric));
{
var G__29772 = (i__29770 + 1);
i__29770 = G__29772;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29771),iter__29768.call(null,cljs.core.chunk_rest.call(null,s__29769__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29771),null);
}
} else
{var metric = cljs.core.first.call(null,s__29769__$2);return cljs.core.cons.call(null,foundation.app.templates.dashboard_metric.call(null,metric),iter__29768.call(null,cljs.core.rest.call(null,s__29769__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14514__auto__.call(null,foundation.app.templates.dashboard_metrics);
})()));
return dom29767;
})());
return dom29766;
})());
return dom29755;
});
foundation.app.templates.datagrid_filter = (function datagrid_filter(coll){var dom29775 = document.createElement("div");dom29775.className = "autocomplete";
dom29775.appendChild((function (){var dom29776 = document.createElement("input");dom29776.className = "form-control";
if("text")
{dom29776.setAttribute("type","text");
} else
{}
if("What are you looking for?")
{dom29776.setAttribute("placeholder","What are you looking for?");
} else
{}
return dom29776;
})());
return dom29775;
});
foundation.app.templates.datagrid_header = (function datagrid_header(columns){var dom29783 = document.createElement("thead");dom29783.setAttribute("id","datagrid-header");
dom29783.appendChild((function (){var dom29784 = document.createElement("tr");dom29784.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14514__auto__ = (function iter__29785(s__29786){return (new cljs.core.LazySeq(null,(function (){var s__29786__$1 = s__29786;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__29786__$1);if(temp__4092__auto__)
{var s__29786__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29786__$2))
{var c__14512__auto__ = cljs.core.chunk_first.call(null,s__29786__$2);var size__14513__auto__ = cljs.core.count.call(null,c__14512__auto__);var b__29788 = cljs.core.chunk_buffer.call(null,size__14513__auto__);if((function (){var i__29787 = 0;while(true){
if((i__29787 < size__14513__auto__))
{var col = cljs.core._nth.call(null,c__14512__auto__,i__29787);cljs.core.chunk_append.call(null,b__29788,foundation.app.cells.th.call(null,col));
{
var G__29789 = (i__29787 + 1);
i__29787 = G__29789;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29788),iter__29785.call(null,cljs.core.chunk_rest.call(null,s__29786__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29788),null);
}
} else
{var col = cljs.core.first.call(null,s__29786__$2);return cljs.core.cons.call(null,foundation.app.cells.th.call(null,col),iter__29785.call(null,cljs.core.rest.call(null,s__29786__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14514__auto__.call(null,columns);
})()));
return dom29784;
})());
return dom29783;
});
foundation.app.templates.datagrid_row = (function datagrid_row(model,columns){var dom29795 = document.createElement("tr");dom29795.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14514__auto__ = (function iter__29796(s__29797){return (new cljs.core.LazySeq(null,(function (){var s__29797__$1 = s__29797;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__29797__$1);if(temp__4092__auto__)
{var s__29797__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29797__$2))
{var c__14512__auto__ = cljs.core.chunk_first.call(null,s__29797__$2);var size__14513__auto__ = cljs.core.count.call(null,c__14512__auto__);var b__29799 = cljs.core.chunk_buffer.call(null,size__14513__auto__);if((function (){var i__29798 = 0;while(true){
if((i__29798 < size__14513__auto__))
{var col = cljs.core._nth.call(null,c__14512__auto__,i__29798);cljs.core.chunk_append.call(null,b__29799,foundation.app.cells.td.call(null,col,model));
{
var G__29800 = (i__29798 + 1);
i__29798 = G__29800;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29799),iter__29796.call(null,cljs.core.chunk_rest.call(null,s__29797__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29799),null);
}
} else
{var col = cljs.core.first.call(null,s__29797__$2);return cljs.core.cons.call(null,foundation.app.cells.td.call(null,col,model),iter__29796.call(null,cljs.core.rest.call(null,s__29797__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14514__auto__.call(null,columns);
})()));
return dom29795;
});
foundation.app.templates.datagrid_body = (function datagrid_body(coll,columns){var dom29806 = document.createElement("tbody");dom29806.className = "datagrid-tbody";
dom29806.setAttribute("id","datagrid-body");
dom29806.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14514__auto__ = (function iter__29807(s__29808){return (new cljs.core.LazySeq(null,(function (){var s__29808__$1 = s__29808;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__29808__$1);if(temp__4092__auto__)
{var s__29808__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29808__$2))
{var c__14512__auto__ = cljs.core.chunk_first.call(null,s__29808__$2);var size__14513__auto__ = cljs.core.count.call(null,c__14512__auto__);var b__29810 = cljs.core.chunk_buffer.call(null,size__14513__auto__);if((function (){var i__29809 = 0;while(true){
if((i__29809 < size__14513__auto__))
{var model = cljs.core._nth.call(null,c__14512__auto__,i__29809);cljs.core.chunk_append.call(null,b__29810,foundation.app.templates.datagrid_row.call(null,model,columns));
{
var G__29811 = (i__29809 + 1);
i__29809 = G__29811;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29810),iter__29807.call(null,cljs.core.chunk_rest.call(null,s__29808__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29810),null);
}
} else
{var model = cljs.core.first.call(null,s__29808__$2);return cljs.core.cons.call(null,foundation.app.templates.datagrid_row.call(null,model,columns),iter__29807.call(null,cljs.core.rest.call(null,s__29808__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14514__auto__.call(null,cljs.core.vals.call(null,coll));
})()));
return dom29806;
});
foundation.app.templates.datagrid_breadcrumb = (function datagrid_breadcrumb(coll){var dom29823 = document.createElement("ol");dom29823.className = "breadcrumb";
dom29823.appendChild((function (){var dom29824 = document.createElement("li");dom29824.className = "active";
dom29824.setAttribute("id","account");
dom29824.appendChild((function (){var dom29825 = document.createElement("div");dom29825.className = "arrow-down";
return dom29825;
})());
dom29824.appendChild((function (){var dom29826 = document.createElement("a");dom29826.appendChild(document.createTextNode("Accounts"));
return dom29826;
})());
dom29824.appendChild((function (){var dom29827 = document.createElement("div");dom29827.className = "arrow-up";
return dom29827;
})());
return dom29824;
})());
dom29823.appendChild((function (){var dom29828 = document.createElement("li");dom29828.className = "hidden";
dom29828.setAttribute("id","campaign");
dom29828.appendChild((function (){var dom29829 = document.createElement("a");dom29829.appendChild(document.createTextNode("Campaigns"));
return dom29829;
})());
return dom29828;
})());
dom29823.appendChild((function (){var dom29830 = document.createElement("li");dom29830.className = "hidden";
dom29830.setAttribute("id","line_item");
dom29830.appendChild((function (){var dom29831 = document.createElement("a");dom29831.appendChild(document.createTextNode("Line Items"));
return dom29831;
})());
return dom29830;
})());
dom29823.appendChild((function (){var dom29832 = document.createElement("li");dom29832.className = "hidden";
dom29832.setAttribute("id","promoted_tweet");
dom29832.appendChild((function (){var dom29833 = document.createElement("a");dom29833.appendChild(document.createTextNode("Promoted Products"));
return dom29833;
})());
return dom29832;
})());
return dom29823;
});
foundation.app.templates.datagrid_table = (function datagrid_table(p__29834){var map__29837 = p__29834;var map__29837__$1 = ((cljs.core.seq_QMARK_.call(null,map__29837))?cljs.core.apply.call(null,cljs.core.hash_map,map__29837):map__29837);var collection = cljs.core.get.call(null,map__29837__$1,new cljs.core.Keyword(null,"collection","collection",3567559184));var resource = cljs.core.get.call(null,map__29837__$1,new cljs.core.Keyword(null,"resource","resource",672839552));return dommy.template.__GT_node_like.call(null,(function (){var map__29838 = resource;var map__29838__$1 = ((cljs.core.seq_QMARK_.call(null,map__29838))?cljs.core.apply.call(null,cljs.core.hash_map,map__29838):map__29838);var columns = cljs.core.get.call(null,map__29838__$1,new cljs.core.Keyword(null,"columns","columns",1963625295));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table#datagrid-table.table","table#datagrid-table.table",2230740568),foundation.app.templates.datagrid_header.call(null,columns),foundation.app.templates.datagrid_body.call(null,collection,columns)], null);
})());
});
foundation.app.templates.datagrid = (function datagrid(p__29839){var map__29856 = p__29839;var map__29856__$1 = ((cljs.core.seq_QMARK_.call(null,map__29856))?cljs.core.apply.call(null,cljs.core.hash_map,map__29856):map__29856);var collection = cljs.core.get.call(null,map__29856__$1,new cljs.core.Keyword(null,"collection","collection",3567559184));var id = cljs.core.get.call(null,map__29856__$1,new cljs.core.Keyword(null,"id","id",1013907597));var dom29857 = document.createElement("div");dom29857.className = "datagrid-container panel panel-default";
if(cljs.core.truth_(id))
{dom29857.setAttribute("id",id);
} else
{}
dom29857.appendChild((function (){var dom29858 = document.createElement("div");dom29858.className = "panel-heading";
dom29858.appendChild(dommy.template.__GT_node_like.call(null,foundation.app.templates.datagrid_breadcrumb.call(null,collection)));
dom29858.appendChild((function (){var dom29859 = document.createElement("form");dom29859.className = "form-inline pull-right";
dom29859.appendChild((function (){var dom29860 = document.createElement("div");dom29860.className = "form-group";
dom29860.appendChild(dommy.template.__GT_node_like.call(null,foundation.app.templates.datagrid_filter.call(null,collection)));
return dom29860;
})());
return dom29859;
})());
return dom29858;
})());
dom29857.appendChild((function (){var dom29861 = document.createElement("div");dom29861.className = "panel-body";
dom29861.appendChild(dommy.template.__GT_node_like.call(null,foundation.app.templates.datagrid_table.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"collection","collection",3567559184),collection], null))));
return dom29861;
})());
dom29857.appendChild((function (){var dom29862 = document.createElement("div");dom29862.className = "panel-footer";
dom29862.appendChild((function (){var dom29863 = document.createElement("div");dom29863.className = "form-inline";
dom29863.appendChild((function (){var dom29864 = document.createElement("div");dom29864.className = "form-group";
dom29864.appendChild((function (){var dom29865 = document.createElement("button");dom29865.className = "btn btn-success btn-sm";
dom29865.setAttribute("id","new");
dom29865.appendChild(document.createTextNode("New"));
return dom29865;
})());
return dom29864;
})());
dom29863.appendChild((function (){var dom29866 = document.createElement("div");dom29866.className = "form-group";
dom29866.appendChild((function (){var dom29867 = document.createElement("button");dom29867.className = "btn btn-info btn-sm disabled";
dom29867.setAttribute("id","save");
dom29867.appendChild(document.createTextNode("Save"));
return dom29867;
})());
return dom29866;
})());
dom29863.appendChild((function (){var dom29868 = document.createElement("div");dom29868.className = "form-group";
dom29868.appendChild((function (){var dom29869 = document.createElement("button");dom29869.className = "btn btn-danger btn-sm disabled";
dom29869.setAttribute("id","delete");
dom29869.appendChild(document.createTextNode("Delete"));
return dom29869;
})());
return dom29868;
})());
dom29863.appendChild((function (){var dom29870 = document.createElement("div");dom29870.className = "form-group";
dom29870.appendChild((function (){var dom29871 = document.createElement("button");dom29871.className = "btn btn-primary btn-sm disabled";
dom29871.setAttribute("id","dupe");
dom29871.appendChild(document.createTextNode("Duplicate"));
return dom29871;
})());
return dom29870;
})());
return dom29863;
})());
return dom29862;
})());
return dom29857;
});
foundation.app.templates.twitter_power = (function twitter_power(id){var dom29873 = document.createElement("div");if(cljs.core.truth_(id))
{dom29873.setAttribute("id",id);
} else
{}
return dom29873;
});

//# sourceMappingURL=templates.js.map