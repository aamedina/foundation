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
foundation.app.templates.chart = (function chart(){var dom37760 = document.createElement("div");dom37760.className = "analytics-highcharts";
return dom37760;
});
foundation.app.templates.dashboard_metric = (function dashboard_metric(metric){var dom37768 = document.createElement("ul");dom37768.className = "list-group";
dom37768.appendChild((function (){var dom37769 = document.createElement("li");dom37769.className = "list-group-item";
if(cljs.core.truth_(metric))
{dom37769.setAttribute("id",metric);
} else
{}
dom37769.appendChild((function (){var dom37770 = document.createElement("h5");dom37770.className = "metric-header list-group-item-heading";
dom37770.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(metric)].join('')));
return dom37770;
})());
return dom37769;
})());
dom37768.appendChild((function (){var dom37771 = document.createElement("li");dom37771.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-cpa")].join('')))
{dom37771.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-cpa")].join(''));
} else
{}
dom37771.appendChild((function (){var dom37772 = document.createElement("small");dom37772.className = "list-group-item-text";
dom37772.appendChild(dommy.template.__GT_node_like.call(null,0));
return dom37772;
})());
return dom37771;
})());
dom37768.appendChild((function (){var dom37773 = document.createElement("li");dom37773.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-rate")].join('')))
{dom37773.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-rate")].join(''));
} else
{}
dom37773.appendChild((function (){var dom37774 = document.createElement("small");dom37774.className = "list-group-item-text";
dom37774.appendChild(dommy.template.__GT_node_like.call(null,0));
return dom37774;
})());
return dom37773;
})());
return dom37768;
});
foundation.app.templates.dashboard = (function dashboard(id){var dom37792 = document.createElement("div");dom37792.className = "twitter-stats panel panel-default";
if(cljs.core.truth_(id))
{dom37792.setAttribute("id",id);
} else
{}
dom37792.appendChild((function (){var dom37793 = document.createElement("div");dom37793.className = "panel-heading";
dom37793.appendChild((function (){var dom37794 = document.createElement("h1");dom37794.className = "panel-title#resource-id";
dom37794.setAttribute("id","resource-id");
return dom37794;
})());
dom37793.appendChild((function (){var dom37795 = document.createElement("div");dom37795.className = "form-inline pull-right";
dom37795.appendChild((function (){var dom37796 = document.createElement("div");dom37796.className = "form-group";
dom37796.appendChild((function (){var dom37797 = document.createElement("input");dom37797.className = "form-control date-picker";
dom37797.setAttribute("id","start-time");
if(true)
{dom37797.setAttribute("readonly",true);
} else
{}
return dom37797;
})());
return dom37796;
})());
dom37795.appendChild((function (){var dom37798 = document.createElement("em");if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)))
{dom37798.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)));
} else
{}
dom37798.appendChild(document.createTextNode("to"));
return dom37798;
})());
dom37795.appendChild((function (){var dom37799 = document.createElement("div");dom37799.className = "form-group";
dom37799.appendChild((function (){var dom37800 = document.createElement("input");dom37800.className = "form-control date-picker";
dom37800.setAttribute("id","end-time");
if(true)
{dom37800.setAttribute("readonly",true);
} else
{}
return dom37800;
})());
return dom37799;
})());
dom37795.appendChild((function (){var dom37801 = document.createElement("button");dom37801.className = "btn btn-primary btn-sm";
dom37801.setAttribute("id","update-stats");
dom37801.appendChild(document.createTextNode("Update"));
return dom37801;
})());
return dom37795;
})());
return dom37793;
})());
dom37792.appendChild((function (){var dom37802 = document.createElement("div");dom37802.className = "panel-body";
dom37802.appendChild(dommy.template.__GT_node_like.call(null,foundation.app.templates.chart.call(null)));
return dom37802;
})());
dom37792.appendChild((function (){var dom37803 = document.createElement("div");dom37803.className = "panel-footer row";
dom37803.appendChild((function (){var dom37804 = document.createElement("div");dom37804.className = "twitter-stats";
dom37804.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14481__auto__ = (function iter__37805(s__37806){return (new cljs.core.LazySeq(null,(function (){var s__37806__$1 = s__37806;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__37806__$1);if(temp__4092__auto__)
{var s__37806__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37806__$2))
{var c__14479__auto__ = cljs.core.chunk_first.call(null,s__37806__$2);var size__14480__auto__ = cljs.core.count.call(null,c__14479__auto__);var b__37808 = cljs.core.chunk_buffer.call(null,size__14480__auto__);if((function (){var i__37807 = 0;while(true){
if((i__37807 < size__14480__auto__))
{var metric = cljs.core._nth.call(null,c__14479__auto__,i__37807);cljs.core.chunk_append.call(null,b__37808,foundation.app.templates.dashboard_metric.call(null,metric));
{
var G__37809 = (i__37807 + 1);
i__37807 = G__37809;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37808),iter__37805.call(null,cljs.core.chunk_rest.call(null,s__37806__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37808),null);
}
} else
{var metric = cljs.core.first.call(null,s__37806__$2);return cljs.core.cons.call(null,foundation.app.templates.dashboard_metric.call(null,metric),iter__37805.call(null,cljs.core.rest.call(null,s__37806__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14481__auto__.call(null,foundation.app.templates.dashboard_metrics);
})()));
return dom37804;
})());
return dom37803;
})());
return dom37792;
});
foundation.app.templates.datagrid_filter = (function datagrid_filter(coll){var dom37812 = document.createElement("div");dom37812.className = "autocomplete";
dom37812.appendChild((function (){var dom37813 = document.createElement("input");dom37813.className = "form-control";
if("text")
{dom37813.setAttribute("type","text");
} else
{}
if("What are you looking for?")
{dom37813.setAttribute("placeholder","What are you looking for?");
} else
{}
return dom37813;
})());
return dom37812;
});
foundation.app.templates.datagrid_header = (function datagrid_header(columns){var dom37820 = document.createElement("thead");dom37820.setAttribute("id","datagrid-header");
dom37820.appendChild((function (){var dom37821 = document.createElement("tr");dom37821.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14481__auto__ = (function iter__37822(s__37823){return (new cljs.core.LazySeq(null,(function (){var s__37823__$1 = s__37823;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__37823__$1);if(temp__4092__auto__)
{var s__37823__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37823__$2))
{var c__14479__auto__ = cljs.core.chunk_first.call(null,s__37823__$2);var size__14480__auto__ = cljs.core.count.call(null,c__14479__auto__);var b__37825 = cljs.core.chunk_buffer.call(null,size__14480__auto__);if((function (){var i__37824 = 0;while(true){
if((i__37824 < size__14480__auto__))
{var col = cljs.core._nth.call(null,c__14479__auto__,i__37824);cljs.core.chunk_append.call(null,b__37825,foundation.app.cells.th.call(null,col));
{
var G__37826 = (i__37824 + 1);
i__37824 = G__37826;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37825),iter__37822.call(null,cljs.core.chunk_rest.call(null,s__37823__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37825),null);
}
} else
{var col = cljs.core.first.call(null,s__37823__$2);return cljs.core.cons.call(null,foundation.app.cells.th.call(null,col),iter__37822.call(null,cljs.core.rest.call(null,s__37823__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14481__auto__.call(null,columns);
})()));
return dom37821;
})());
return dom37820;
});
foundation.app.templates.datagrid_row = (function datagrid_row(model,columns){var dom37832 = document.createElement("tr");dom37832.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14481__auto__ = (function iter__37833(s__37834){return (new cljs.core.LazySeq(null,(function (){var s__37834__$1 = s__37834;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__37834__$1);if(temp__4092__auto__)
{var s__37834__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37834__$2))
{var c__14479__auto__ = cljs.core.chunk_first.call(null,s__37834__$2);var size__14480__auto__ = cljs.core.count.call(null,c__14479__auto__);var b__37836 = cljs.core.chunk_buffer.call(null,size__14480__auto__);if((function (){var i__37835 = 0;while(true){
if((i__37835 < size__14480__auto__))
{var col = cljs.core._nth.call(null,c__14479__auto__,i__37835);cljs.core.chunk_append.call(null,b__37836,foundation.app.cells.td.call(null,col,model));
{
var G__37837 = (i__37835 + 1);
i__37835 = G__37837;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37836),iter__37833.call(null,cljs.core.chunk_rest.call(null,s__37834__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37836),null);
}
} else
{var col = cljs.core.first.call(null,s__37834__$2);return cljs.core.cons.call(null,foundation.app.cells.td.call(null,col,model),iter__37833.call(null,cljs.core.rest.call(null,s__37834__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14481__auto__.call(null,columns);
})()));
return dom37832;
});
foundation.app.templates.datagrid_body = (function datagrid_body(coll,columns){var dom37843 = document.createElement("tbody");dom37843.className = "datagrid-tbody";
dom37843.setAttribute("id","datagrid-body");
dom37843.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14481__auto__ = (function iter__37844(s__37845){return (new cljs.core.LazySeq(null,(function (){var s__37845__$1 = s__37845;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__37845__$1);if(temp__4092__auto__)
{var s__37845__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37845__$2))
{var c__14479__auto__ = cljs.core.chunk_first.call(null,s__37845__$2);var size__14480__auto__ = cljs.core.count.call(null,c__14479__auto__);var b__37847 = cljs.core.chunk_buffer.call(null,size__14480__auto__);if((function (){var i__37846 = 0;while(true){
if((i__37846 < size__14480__auto__))
{var model = cljs.core._nth.call(null,c__14479__auto__,i__37846);cljs.core.chunk_append.call(null,b__37847,foundation.app.templates.datagrid_row.call(null,model,columns));
{
var G__37848 = (i__37846 + 1);
i__37846 = G__37848;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37847),iter__37844.call(null,cljs.core.chunk_rest.call(null,s__37845__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37847),null);
}
} else
{var model = cljs.core.first.call(null,s__37845__$2);return cljs.core.cons.call(null,foundation.app.templates.datagrid_row.call(null,model,columns),iter__37844.call(null,cljs.core.rest.call(null,s__37845__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14481__auto__.call(null,cljs.core.vals.call(null,coll));
})()));
return dom37843;
});
foundation.app.templates.datagrid_breadcrumb = (function datagrid_breadcrumb(coll){var dom37860 = document.createElement("ol");dom37860.className = "breadcrumb";
dom37860.appendChild((function (){var dom37861 = document.createElement("li");dom37861.className = "active";
dom37861.setAttribute("id","account");
dom37861.appendChild((function (){var dom37862 = document.createElement("div");dom37862.className = "arrow-down";
return dom37862;
})());
dom37861.appendChild((function (){var dom37863 = document.createElement("a");dom37863.appendChild(document.createTextNode("Accounts"));
return dom37863;
})());
dom37861.appendChild((function (){var dom37864 = document.createElement("div");dom37864.className = "arrow-up";
return dom37864;
})());
return dom37861;
})());
dom37860.appendChild((function (){var dom37865 = document.createElement("li");dom37865.className = "hidden";
dom37865.setAttribute("id","campaign");
dom37865.appendChild((function (){var dom37866 = document.createElement("a");dom37866.appendChild(document.createTextNode("Campaigns"));
return dom37866;
})());
return dom37865;
})());
dom37860.appendChild((function (){var dom37867 = document.createElement("li");dom37867.className = "hidden";
dom37867.setAttribute("id","line_item");
dom37867.appendChild((function (){var dom37868 = document.createElement("a");dom37868.appendChild(document.createTextNode("Line Items"));
return dom37868;
})());
return dom37867;
})());
dom37860.appendChild((function (){var dom37869 = document.createElement("li");dom37869.className = "hidden";
dom37869.setAttribute("id","promoted_tweet");
dom37869.appendChild((function (){var dom37870 = document.createElement("a");dom37870.appendChild(document.createTextNode("Promoted Products"));
return dom37870;
})());
return dom37869;
})());
return dom37860;
});
foundation.app.templates.datagrid_table = (function datagrid_table(p__37871){var map__37874 = p__37871;var map__37874__$1 = ((cljs.core.seq_QMARK_.call(null,map__37874))?cljs.core.apply.call(null,cljs.core.hash_map,map__37874):map__37874);var collection = cljs.core.get.call(null,map__37874__$1,new cljs.core.Keyword(null,"collection","collection",3567559184));var resource = cljs.core.get.call(null,map__37874__$1,new cljs.core.Keyword(null,"resource","resource",672839552));return dommy.template.__GT_node_like.call(null,(function (){var map__37875 = resource;var map__37875__$1 = ((cljs.core.seq_QMARK_.call(null,map__37875))?cljs.core.apply.call(null,cljs.core.hash_map,map__37875):map__37875);var columns = cljs.core.get.call(null,map__37875__$1,new cljs.core.Keyword(null,"columns","columns",1963625295));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table#datagrid-table.table","table#datagrid-table.table",2230740568),foundation.app.templates.datagrid_header.call(null,columns),foundation.app.templates.datagrid_body.call(null,collection,columns)], null);
})());
});
foundation.app.templates.datagrid = (function datagrid(id,collection){var dom37891 = document.createElement("div");dom37891.className = "datagrid-container panel panel-default";
if(cljs.core.truth_(id))
{dom37891.setAttribute("id",id);
} else
{}
dom37891.appendChild((function (){var dom37892 = document.createElement("div");dom37892.className = "panel-heading";
dom37892.appendChild(dommy.template.__GT_node_like.call(null,foundation.app.templates.datagrid_breadcrumb.call(null,collection)));
dom37892.appendChild((function (){var dom37893 = document.createElement("form");dom37893.className = "form-inline pull-right";
dom37893.appendChild((function (){var dom37894 = document.createElement("div");dom37894.className = "form-group";
dom37894.appendChild(dommy.template.__GT_node_like.call(null,foundation.app.templates.datagrid_filter.call(null,collection)));
return dom37894;
})());
return dom37893;
})());
return dom37892;
})());
dom37891.appendChild((function (){var dom37895 = document.createElement("div");dom37895.className = "panel-body";
dom37895.appendChild(dommy.template.__GT_node_like.call(null,foundation.app.templates.datagrid_table.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"collection","collection",3567559184),collection], null))));
return dom37895;
})());
dom37891.appendChild((function (){var dom37896 = document.createElement("div");dom37896.className = "panel-footer";
dom37896.appendChild((function (){var dom37897 = document.createElement("div");dom37897.className = "form-inline";
dom37897.appendChild((function (){var dom37898 = document.createElement("div");dom37898.className = "form-group";
dom37898.appendChild((function (){var dom37899 = document.createElement("button");dom37899.className = "btn btn-success btn-sm";
dom37899.setAttribute("id","new");
dom37899.appendChild(document.createTextNode("New"));
return dom37899;
})());
return dom37898;
})());
dom37897.appendChild((function (){var dom37900 = document.createElement("div");dom37900.className = "form-group";
dom37900.appendChild((function (){var dom37901 = document.createElement("button");dom37901.className = "btn btn-info btn-sm disabled";
dom37901.setAttribute("id","save");
dom37901.appendChild(document.createTextNode("Save"));
return dom37901;
})());
return dom37900;
})());
dom37897.appendChild((function (){var dom37902 = document.createElement("div");dom37902.className = "form-group";
dom37902.appendChild((function (){var dom37903 = document.createElement("button");dom37903.className = "btn btn-danger btn-sm disabled";
dom37903.setAttribute("id","delete");
dom37903.appendChild(document.createTextNode("Delete"));
return dom37903;
})());
return dom37902;
})());
dom37897.appendChild((function (){var dom37904 = document.createElement("div");dom37904.className = "form-group";
dom37904.appendChild((function (){var dom37905 = document.createElement("button");dom37905.className = "btn btn-primary btn-sm disabled";
dom37905.setAttribute("id","dupe");
dom37905.appendChild(document.createTextNode("Duplicate"));
return dom37905;
})());
return dom37904;
})());
return dom37897;
})());
return dom37896;
})());
return dom37891;
});
foundation.app.templates.twitter_power = (function twitter_power(id){var dom37907 = document.createElement("div");if(cljs.core.truth_(id))
{dom37907.setAttribute("id",id);
} else
{}
return dom37907;
});

//# sourceMappingURL=templates.js.map