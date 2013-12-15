// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.templates');
goog.require('cljs.core');
goog.require('foundation.models');
goog.require('foundation.models');
goog.require('foundation.cells');
goog.require('foundation.cells');
goog.require('dommy.core');
goog.require('dommy.core');
goog.require('enfocus.events');
goog.require('enfocus.events');
goog.require('enfocus.core');
goog.require('enfocus.core');
foundation.templates.dashboard_metrics = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Impressions","Engagements","Clicks","Retweets","Replies","Follows"], null);
foundation.templates.chart = (function chart(){var dom322876 = document.createElement("div");dom322876.className = "analytics-highcharts";
return dom322876;
});
foundation.templates.dashboard_metric = (function dashboard_metric(metric){var dom322884 = document.createElement("ul");dom322884.className = "list-group";
dom322884.appendChild((function (){var dom322885 = document.createElement("li");dom322885.className = "list-group-item";
if(cljs.core.truth_(metric))
{dom322885.setAttribute("id",metric);
} else
{}
dom322885.appendChild((function (){var dom322886 = document.createElement("h5");dom322886.className = "metric-header list-group-item-heading";
dom322886.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(metric)].join('')));
return dom322886;
})());
return dom322885;
})());
dom322884.appendChild((function (){var dom322887 = document.createElement("li");dom322887.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-cpa")].join('')))
{dom322887.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-cpa")].join(''));
} else
{}
dom322887.appendChild((function (){var dom322888 = document.createElement("small");dom322888.className = "list-group-item-text";
dom322888.appendChild(dommy.template.__GT_node_like.call(null,0));
return dom322888;
})());
return dom322887;
})());
dom322884.appendChild((function (){var dom322889 = document.createElement("li");dom322889.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-rate")].join('')))
{dom322889.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-rate")].join(''));
} else
{}
dom322889.appendChild((function (){var dom322890 = document.createElement("small");dom322890.className = "list-group-item-text";
dom322890.appendChild(dommy.template.__GT_node_like.call(null,0));
return dom322890;
})());
return dom322889;
})());
return dom322884;
});
foundation.templates.dashboard = (function dashboard(id){var dom322908 = document.createElement("div");dom322908.className = "twitter-stats panel panel-default";
if(cljs.core.truth_(id))
{dom322908.setAttribute("id",id);
} else
{}
dom322908.appendChild((function (){var dom322909 = document.createElement("div");dom322909.className = "panel-heading";
dom322909.appendChild((function (){var dom322910 = document.createElement("h1");dom322910.className = "panel-title#resource-id";
dom322910.setAttribute("id","resource-id");
return dom322910;
})());
dom322909.appendChild((function (){var dom322911 = document.createElement("div");dom322911.className = "form-inline pull-right";
dom322911.appendChild((function (){var dom322912 = document.createElement("div");dom322912.className = "form-group";
dom322912.appendChild((function (){var dom322913 = document.createElement("input");dom322913.className = "form-control date-picker";
dom322913.setAttribute("id","start-time");
if(true)
{dom322913.setAttribute("readonly",true);
} else
{}
return dom322913;
})());
return dom322912;
})());
dom322911.appendChild((function (){var dom322914 = document.createElement("em");if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)))
{dom322914.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)));
} else
{}
dom322914.appendChild(document.createTextNode("to"));
return dom322914;
})());
dom322911.appendChild((function (){var dom322915 = document.createElement("div");dom322915.className = "form-group";
dom322915.appendChild((function (){var dom322916 = document.createElement("input");dom322916.className = "form-control date-picker";
dom322916.setAttribute("id","end-time");
if(true)
{dom322916.setAttribute("readonly",true);
} else
{}
return dom322916;
})());
return dom322915;
})());
dom322911.appendChild((function (){var dom322917 = document.createElement("button");dom322917.className = "btn btn-primary btn-sm";
dom322917.setAttribute("id","update-stats");
dom322917.appendChild(document.createTextNode("Update"));
return dom322917;
})());
return dom322911;
})());
return dom322909;
})());
dom322908.appendChild((function (){var dom322918 = document.createElement("div");dom322918.className = "panel-body";
dom322918.appendChild(dommy.template.__GT_node_like.call(null,foundation.templates.chart.call(null)));
return dom322918;
})());
dom322908.appendChild((function (){var dom322919 = document.createElement("div");dom322919.className = "panel-footer row";
dom322919.appendChild((function (){var dom322920 = document.createElement("div");dom322920.className = "twitter-stats";
dom322920.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14518__auto__ = (function iter__322921(s__322922){return (new cljs.core.LazySeq(null,(function (){var s__322922__$1 = s__322922;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__322922__$1);if(temp__4092__auto__)
{var s__322922__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__322922__$2))
{var c__14516__auto__ = cljs.core.chunk_first.call(null,s__322922__$2);var size__14517__auto__ = cljs.core.count.call(null,c__14516__auto__);var b__322924 = cljs.core.chunk_buffer.call(null,size__14517__auto__);if((function (){var i__322923 = 0;while(true){
if((i__322923 < size__14517__auto__))
{var metric = cljs.core._nth.call(null,c__14516__auto__,i__322923);cljs.core.chunk_append.call(null,b__322924,foundation.templates.dashboard_metric.call(null,metric));
{
var G__322925 = (i__322923 + 1);
i__322923 = G__322925;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__322924),iter__322921.call(null,cljs.core.chunk_rest.call(null,s__322922__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__322924),null);
}
} else
{var metric = cljs.core.first.call(null,s__322922__$2);return cljs.core.cons.call(null,foundation.templates.dashboard_metric.call(null,metric),iter__322921.call(null,cljs.core.rest.call(null,s__322922__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14518__auto__.call(null,foundation.templates.dashboard_metrics);
})()));
return dom322920;
})());
return dom322919;
})());
return dom322908;
});
foundation.templates.datagrid_filter = (function datagrid_filter(){var dom322928 = document.createElement("div");dom322928.className = "autocomplete";
dom322928.appendChild((function (){var dom322929 = document.createElement("input");dom322929.className = "form-control";
if("text")
{dom322929.setAttribute("type","text");
} else
{}
if("What are you looking for?")
{dom322929.setAttribute("placeholder","What are you looking for?");
} else
{}
return dom322929;
})());
return dom322928;
});
foundation.templates.datagrid_header = (function datagrid_header(columns){var dom322936 = document.createElement("thead");dom322936.setAttribute("id","datagrid-header");
dom322936.appendChild((function (){var dom322937 = document.createElement("tr");dom322937.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14518__auto__ = (function iter__322938(s__322939){return (new cljs.core.LazySeq(null,(function (){var s__322939__$1 = s__322939;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__322939__$1);if(temp__4092__auto__)
{var s__322939__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__322939__$2))
{var c__14516__auto__ = cljs.core.chunk_first.call(null,s__322939__$2);var size__14517__auto__ = cljs.core.count.call(null,c__14516__auto__);var b__322941 = cljs.core.chunk_buffer.call(null,size__14517__auto__);if((function (){var i__322940 = 0;while(true){
if((i__322940 < size__14517__auto__))
{var col = cljs.core._nth.call(null,c__14516__auto__,i__322940);cljs.core.chunk_append.call(null,b__322941,foundation.cells.th.call(null,col));
{
var G__322942 = (i__322940 + 1);
i__322940 = G__322942;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__322941),iter__322938.call(null,cljs.core.chunk_rest.call(null,s__322939__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__322941),null);
}
} else
{var col = cljs.core.first.call(null,s__322939__$2);return cljs.core.cons.call(null,foundation.cells.th.call(null,col),iter__322938.call(null,cljs.core.rest.call(null,s__322939__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14518__auto__.call(null,columns);
})()));
return dom322937;
})());
return dom322936;
});
foundation.templates.datagrid_row = (function datagrid_row(model,columns){var dom322948 = document.createElement("tr");dom322948.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14518__auto__ = (function iter__322949(s__322950){return (new cljs.core.LazySeq(null,(function (){var s__322950__$1 = s__322950;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__322950__$1);if(temp__4092__auto__)
{var s__322950__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__322950__$2))
{var c__14516__auto__ = cljs.core.chunk_first.call(null,s__322950__$2);var size__14517__auto__ = cljs.core.count.call(null,c__14516__auto__);var b__322952 = cljs.core.chunk_buffer.call(null,size__14517__auto__);if((function (){var i__322951 = 0;while(true){
if((i__322951 < size__14517__auto__))
{var col = cljs.core._nth.call(null,c__14516__auto__,i__322951);cljs.core.chunk_append.call(null,b__322952,foundation.cells.td.call(null,col,model));
{
var G__322953 = (i__322951 + 1);
i__322951 = G__322953;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__322952),iter__322949.call(null,cljs.core.chunk_rest.call(null,s__322950__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__322952),null);
}
} else
{var col = cljs.core.first.call(null,s__322950__$2);return cljs.core.cons.call(null,foundation.cells.td.call(null,col,model),iter__322949.call(null,cljs.core.rest.call(null,s__322950__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14518__auto__.call(null,columns);
})()));
return dom322948;
});
foundation.templates.datagrid_body = (function datagrid_body(coll,columns){var dom322959 = document.createElement("tbody");dom322959.className = "datagrid-tbody";
dom322959.setAttribute("id","datagrid-body");
dom322959.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14518__auto__ = (function iter__322960(s__322961){return (new cljs.core.LazySeq(null,(function (){var s__322961__$1 = s__322961;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__322961__$1);if(temp__4092__auto__)
{var s__322961__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__322961__$2))
{var c__14516__auto__ = cljs.core.chunk_first.call(null,s__322961__$2);var size__14517__auto__ = cljs.core.count.call(null,c__14516__auto__);var b__322963 = cljs.core.chunk_buffer.call(null,size__14517__auto__);if((function (){var i__322962 = 0;while(true){
if((i__322962 < size__14517__auto__))
{var model = cljs.core._nth.call(null,c__14516__auto__,i__322962);cljs.core.chunk_append.call(null,b__322963,foundation.templates.datagrid_row.call(null,model,columns));
{
var G__322964 = (i__322962 + 1);
i__322962 = G__322964;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__322963),iter__322960.call(null,cljs.core.chunk_rest.call(null,s__322961__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__322963),null);
}
} else
{var model = cljs.core.first.call(null,s__322961__$2);return cljs.core.cons.call(null,foundation.templates.datagrid_row.call(null,model,columns),iter__322960.call(null,cljs.core.rest.call(null,s__322961__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14518__auto__.call(null,coll);
})()));
return dom322959;
});
foundation.templates.datagrid_breadcrumb = (function datagrid_breadcrumb(){var dom322976 = document.createElement("ol");dom322976.className = "breadcrumb";
dom322976.appendChild((function (){var dom322977 = document.createElement("li");dom322977.className = "active";
dom322977.setAttribute("id","account");
dom322977.appendChild((function (){var dom322978 = document.createElement("div");dom322978.className = "arrow-down";
return dom322978;
})());
dom322977.appendChild((function (){var dom322979 = document.createElement("a");dom322979.appendChild(document.createTextNode("Accounts"));
return dom322979;
})());
dom322977.appendChild((function (){var dom322980 = document.createElement("div");dom322980.className = "arrow-up";
return dom322980;
})());
return dom322977;
})());
dom322976.appendChild((function (){var dom322981 = document.createElement("li");dom322981.className = "hidden";
dom322981.setAttribute("id","campaign");
dom322981.appendChild((function (){var dom322982 = document.createElement("a");dom322982.appendChild(document.createTextNode("Campaigns"));
return dom322982;
})());
return dom322981;
})());
dom322976.appendChild((function (){var dom322983 = document.createElement("li");dom322983.className = "hidden";
dom322983.setAttribute("id","line_item");
dom322983.appendChild((function (){var dom322984 = document.createElement("a");dom322984.appendChild(document.createTextNode("Line Items"));
return dom322984;
})());
return dom322983;
})());
dom322976.appendChild((function (){var dom322985 = document.createElement("li");dom322985.className = "hidden";
dom322985.setAttribute("id","promoted_tweet");
dom322985.appendChild((function (){var dom322986 = document.createElement("a");dom322986.appendChild(document.createTextNode("Promoted Products"));
return dom322986;
})());
return dom322985;
})());
return dom322976;
});
foundation.templates.datagrid_table = (function datagrid_table(model,coll){return dommy.template.__GT_node_like.call(null,(function (){var cols = foundation.models.columns.call(null,model);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table#datagrid-table.table","table#datagrid-table.table",2230740568),foundation.templates.datagrid_header.call(null,cols),foundation.templates.datagrid_body.call(null,coll,cols)], null);
})());
});
foundation.templates.datagrid = (function datagrid(id){var dom323002 = document.createElement("div");dom323002.className = "datagrid-container panel panel-default";
if(cljs.core.truth_(id))
{dom323002.setAttribute("id",id);
} else
{}
dom323002.appendChild((function (){var dom323003 = document.createElement("div");dom323003.className = "panel-heading";
dom323003.appendChild(dommy.template.__GT_node_like.call(null,foundation.templates.datagrid_breadcrumb.call(null)));
dom323003.appendChild((function (){var dom323004 = document.createElement("form");dom323004.className = "form-inline pull-right";
dom323004.appendChild((function (){var dom323005 = document.createElement("div");dom323005.className = "form-group";
dom323005.appendChild(dommy.template.__GT_node_like.call(null,foundation.templates.datagrid_filter.call(null)));
return dom323005;
})());
return dom323004;
})());
return dom323003;
})());
dom323002.appendChild((function (){var dom323006 = document.createElement("div");dom323006.className = "panel-body";
return dom323006;
})());
dom323002.appendChild((function (){var dom323007 = document.createElement("div");dom323007.className = "panel-footer";
dom323007.appendChild((function (){var dom323008 = document.createElement("div");dom323008.className = "form-inline";
dom323008.appendChild((function (){var dom323009 = document.createElement("div");dom323009.className = "form-group";
dom323009.appendChild((function (){var dom323010 = document.createElement("button");dom323010.className = "btn btn-success btn-sm";
dom323010.setAttribute("id","new");
dom323010.appendChild(document.createTextNode("New"));
return dom323010;
})());
return dom323009;
})());
dom323008.appendChild((function (){var dom323011 = document.createElement("div");dom323011.className = "form-group";
dom323011.appendChild((function (){var dom323012 = document.createElement("button");dom323012.className = "btn btn-info btn-sm disabled";
dom323012.setAttribute("id","save");
dom323012.appendChild(document.createTextNode("Save"));
return dom323012;
})());
return dom323011;
})());
dom323008.appendChild((function (){var dom323013 = document.createElement("div");dom323013.className = "form-group";
dom323013.appendChild((function (){var dom323014 = document.createElement("button");dom323014.className = "btn btn-danger btn-sm disabled";
dom323014.setAttribute("id","delete");
dom323014.appendChild(document.createTextNode("Delete"));
return dom323014;
})());
return dom323013;
})());
dom323008.appendChild((function (){var dom323015 = document.createElement("div");dom323015.className = "form-group";
dom323015.appendChild((function (){var dom323016 = document.createElement("button");dom323016.className = "btn btn-primary btn-sm disabled";
dom323016.setAttribute("id","dupe");
dom323016.appendChild(document.createTextNode("Duplicate"));
return dom323016;
})());
return dom323015;
})());
return dom323008;
})());
return dom323007;
})());
return dom323002;
});
foundation.templates.twitter_power = (function twitter_power(id){var dom323018 = document.createElement("div");if(cljs.core.truth_(id))
{dom323018.setAttribute("id",id);
} else
{}
return dom323018;
});

//# sourceMappingURL=templates.js.map