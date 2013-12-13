// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.templates');
goog.require('cljs.core');
goog.require('foundation.cells');
goog.require('foundation.cells');
goog.require('dommy.core');
goog.require('dommy.core');
goog.require('enfocus.events');
goog.require('enfocus.events');
goog.require('enfocus.core');
goog.require('enfocus.core');
foundation.templates.dashboard_metrics = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Impressions","Engagements","Clicks","Retweets","Replies","Follows"], null);
foundation.templates.chart = (function chart(){var dom295686 = document.createElement("div");dom295686.className = "analytics-highcharts";
return dom295686;
});
foundation.templates.dashboard_metric = (function dashboard_metric(metric){var dom295694 = document.createElement("ul");dom295694.className = "list-group";
dom295694.appendChild((function (){var dom295695 = document.createElement("li");dom295695.className = "list-group-item";
if(cljs.core.truth_(metric))
{dom295695.setAttribute("id",metric);
} else
{}
dom295695.appendChild((function (){var dom295696 = document.createElement("h5");dom295696.className = "metric-header list-group-item-heading";
dom295696.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(metric)].join('')));
return dom295696;
})());
return dom295695;
})());
dom295694.appendChild((function (){var dom295697 = document.createElement("li");dom295697.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-cpa")].join('')))
{dom295697.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-cpa")].join(''));
} else
{}
dom295697.appendChild((function (){var dom295698 = document.createElement("small");dom295698.className = "list-group-item-text";
dom295698.appendChild(dommy.template.__GT_node_like.call(null,0));
return dom295698;
})());
return dom295697;
})());
dom295694.appendChild((function (){var dom295699 = document.createElement("li");dom295699.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-rate")].join('')))
{dom295699.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-rate")].join(''));
} else
{}
dom295699.appendChild((function (){var dom295700 = document.createElement("small");dom295700.className = "list-group-item-text";
dom295700.appendChild(dommy.template.__GT_node_like.call(null,0));
return dom295700;
})());
return dom295699;
})());
return dom295694;
});
foundation.templates.dashboard = (function dashboard(id){var dom295718 = document.createElement("div");dom295718.className = "twitter-stats panel panel-default";
if(cljs.core.truth_(id))
{dom295718.setAttribute("id",id);
} else
{}
dom295718.appendChild((function (){var dom295719 = document.createElement("div");dom295719.className = "panel-heading";
dom295719.appendChild((function (){var dom295720 = document.createElement("h1");dom295720.className = "panel-title#resource-id";
dom295720.setAttribute("id","resource-id");
return dom295720;
})());
dom295719.appendChild((function (){var dom295721 = document.createElement("div");dom295721.className = "form-inline pull-right";
dom295721.appendChild((function (){var dom295722 = document.createElement("div");dom295722.className = "form-group";
dom295722.appendChild((function (){var dom295723 = document.createElement("input");dom295723.className = "form-control date-picker";
dom295723.setAttribute("id","start-time");
if(true)
{dom295723.setAttribute("readonly",true);
} else
{}
return dom295723;
})());
return dom295722;
})());
dom295721.appendChild((function (){var dom295724 = document.createElement("em");if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)))
{dom295724.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)));
} else
{}
dom295724.appendChild(document.createTextNode("to"));
return dom295724;
})());
dom295721.appendChild((function (){var dom295725 = document.createElement("div");dom295725.className = "form-group";
dom295725.appendChild((function (){var dom295726 = document.createElement("input");dom295726.className = "form-control date-picker";
dom295726.setAttribute("id","end-time");
if(true)
{dom295726.setAttribute("readonly",true);
} else
{}
return dom295726;
})());
return dom295725;
})());
dom295721.appendChild((function (){var dom295727 = document.createElement("button");dom295727.className = "btn btn-primary btn-sm";
dom295727.setAttribute("id","update-stats");
dom295727.appendChild(document.createTextNode("Update"));
return dom295727;
})());
return dom295721;
})());
return dom295719;
})());
dom295718.appendChild((function (){var dom295728 = document.createElement("div");dom295728.className = "panel-body";
dom295728.appendChild(dommy.template.__GT_node_like.call(null,foundation.templates.chart.call(null)));
return dom295728;
})());
dom295718.appendChild((function (){var dom295729 = document.createElement("div");dom295729.className = "panel-footer row";
dom295729.appendChild((function (){var dom295730 = document.createElement("div");dom295730.className = "twitter-stats";
dom295730.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14518__auto__ = (function iter__295731(s__295732){return (new cljs.core.LazySeq(null,(function (){var s__295732__$1 = s__295732;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__295732__$1);if(temp__4092__auto__)
{var s__295732__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__295732__$2))
{var c__14516__auto__ = cljs.core.chunk_first.call(null,s__295732__$2);var size__14517__auto__ = cljs.core.count.call(null,c__14516__auto__);var b__295734 = cljs.core.chunk_buffer.call(null,size__14517__auto__);if((function (){var i__295733 = 0;while(true){
if((i__295733 < size__14517__auto__))
{var metric = cljs.core._nth.call(null,c__14516__auto__,i__295733);cljs.core.chunk_append.call(null,b__295734,foundation.templates.dashboard_metric.call(null,metric));
{
var G__295735 = (i__295733 + 1);
i__295733 = G__295735;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__295734),iter__295731.call(null,cljs.core.chunk_rest.call(null,s__295732__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__295734),null);
}
} else
{var metric = cljs.core.first.call(null,s__295732__$2);return cljs.core.cons.call(null,foundation.templates.dashboard_metric.call(null,metric),iter__295731.call(null,cljs.core.rest.call(null,s__295732__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14518__auto__.call(null,foundation.templates.dashboard_metrics);
})()));
return dom295730;
})());
return dom295729;
})());
return dom295718;
});
foundation.templates.datagrid_filter = (function datagrid_filter(coll){var dom295738 = document.createElement("div");dom295738.className = "autocomplete";
dom295738.appendChild((function (){var dom295739 = document.createElement("input");dom295739.className = "form-control";
if("text")
{dom295739.setAttribute("type","text");
} else
{}
if("What are you looking for?")
{dom295739.setAttribute("placeholder","What are you looking for?");
} else
{}
return dom295739;
})());
return dom295738;
});
foundation.templates.datagrid_header = (function datagrid_header(columns){var dom295746 = document.createElement("thead");dom295746.setAttribute("id","datagrid-header");
dom295746.appendChild((function (){var dom295747 = document.createElement("tr");dom295747.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14518__auto__ = (function iter__295748(s__295749){return (new cljs.core.LazySeq(null,(function (){var s__295749__$1 = s__295749;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__295749__$1);if(temp__4092__auto__)
{var s__295749__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__295749__$2))
{var c__14516__auto__ = cljs.core.chunk_first.call(null,s__295749__$2);var size__14517__auto__ = cljs.core.count.call(null,c__14516__auto__);var b__295751 = cljs.core.chunk_buffer.call(null,size__14517__auto__);if((function (){var i__295750 = 0;while(true){
if((i__295750 < size__14517__auto__))
{var col = cljs.core._nth.call(null,c__14516__auto__,i__295750);cljs.core.chunk_append.call(null,b__295751,foundation.cells.th.call(null,col));
{
var G__295752 = (i__295750 + 1);
i__295750 = G__295752;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__295751),iter__295748.call(null,cljs.core.chunk_rest.call(null,s__295749__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__295751),null);
}
} else
{var col = cljs.core.first.call(null,s__295749__$2);return cljs.core.cons.call(null,foundation.cells.th.call(null,col),iter__295748.call(null,cljs.core.rest.call(null,s__295749__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14518__auto__.call(null,columns);
})()));
return dom295747;
})());
return dom295746;
});
foundation.templates.datagrid_row = (function datagrid_row(model,columns){var dom295758 = document.createElement("tr");dom295758.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14518__auto__ = (function iter__295759(s__295760){return (new cljs.core.LazySeq(null,(function (){var s__295760__$1 = s__295760;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__295760__$1);if(temp__4092__auto__)
{var s__295760__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__295760__$2))
{var c__14516__auto__ = cljs.core.chunk_first.call(null,s__295760__$2);var size__14517__auto__ = cljs.core.count.call(null,c__14516__auto__);var b__295762 = cljs.core.chunk_buffer.call(null,size__14517__auto__);if((function (){var i__295761 = 0;while(true){
if((i__295761 < size__14517__auto__))
{var col = cljs.core._nth.call(null,c__14516__auto__,i__295761);cljs.core.chunk_append.call(null,b__295762,foundation.cells.td.call(null,col,model));
{
var G__295763 = (i__295761 + 1);
i__295761 = G__295763;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__295762),iter__295759.call(null,cljs.core.chunk_rest.call(null,s__295760__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__295762),null);
}
} else
{var col = cljs.core.first.call(null,s__295760__$2);return cljs.core.cons.call(null,foundation.cells.td.call(null,col,model),iter__295759.call(null,cljs.core.rest.call(null,s__295760__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14518__auto__.call(null,columns);
})()));
return dom295758;
});
foundation.templates.datagrid_body = (function datagrid_body(coll,columns){var dom295769 = document.createElement("tbody");dom295769.className = "datagrid-tbody";
dom295769.setAttribute("id","datagrid-body");
dom295769.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14518__auto__ = (function iter__295770(s__295771){return (new cljs.core.LazySeq(null,(function (){var s__295771__$1 = s__295771;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__295771__$1);if(temp__4092__auto__)
{var s__295771__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__295771__$2))
{var c__14516__auto__ = cljs.core.chunk_first.call(null,s__295771__$2);var size__14517__auto__ = cljs.core.count.call(null,c__14516__auto__);var b__295773 = cljs.core.chunk_buffer.call(null,size__14517__auto__);if((function (){var i__295772 = 0;while(true){
if((i__295772 < size__14517__auto__))
{var model = cljs.core._nth.call(null,c__14516__auto__,i__295772);cljs.core.chunk_append.call(null,b__295773,foundation.templates.datagrid_row.call(null,model,columns));
{
var G__295774 = (i__295772 + 1);
i__295772 = G__295774;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__295773),iter__295770.call(null,cljs.core.chunk_rest.call(null,s__295771__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__295773),null);
}
} else
{var model = cljs.core.first.call(null,s__295771__$2);return cljs.core.cons.call(null,foundation.templates.datagrid_row.call(null,model,columns),iter__295770.call(null,cljs.core.rest.call(null,s__295771__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14518__auto__.call(null,cljs.core.vals.call(null,coll));
})()));
return dom295769;
});
foundation.templates.datagrid_breadcrumb = (function datagrid_breadcrumb(coll){var dom295786 = document.createElement("ol");dom295786.className = "breadcrumb";
dom295786.appendChild((function (){var dom295787 = document.createElement("li");dom295787.className = "active";
dom295787.setAttribute("id","account");
dom295787.appendChild((function (){var dom295788 = document.createElement("div");dom295788.className = "arrow-down";
return dom295788;
})());
dom295787.appendChild((function (){var dom295789 = document.createElement("a");dom295789.appendChild(document.createTextNode("Accounts"));
return dom295789;
})());
dom295787.appendChild((function (){var dom295790 = document.createElement("div");dom295790.className = "arrow-up";
return dom295790;
})());
return dom295787;
})());
dom295786.appendChild((function (){var dom295791 = document.createElement("li");dom295791.className = "hidden";
dom295791.setAttribute("id","campaign");
dom295791.appendChild((function (){var dom295792 = document.createElement("a");dom295792.appendChild(document.createTextNode("Campaigns"));
return dom295792;
})());
return dom295791;
})());
dom295786.appendChild((function (){var dom295793 = document.createElement("li");dom295793.className = "hidden";
dom295793.setAttribute("id","line_item");
dom295793.appendChild((function (){var dom295794 = document.createElement("a");dom295794.appendChild(document.createTextNode("Line Items"));
return dom295794;
})());
return dom295793;
})());
dom295786.appendChild((function (){var dom295795 = document.createElement("li");dom295795.className = "hidden";
dom295795.setAttribute("id","promoted_tweet");
dom295795.appendChild((function (){var dom295796 = document.createElement("a");dom295796.appendChild(document.createTextNode("Promoted Products"));
return dom295796;
})());
return dom295795;
})());
return dom295786;
});
foundation.templates.datagrid_table = (function datagrid_table(p__295797){var map__295800 = p__295797;var map__295800__$1 = ((cljs.core.seq_QMARK_.call(null,map__295800))?cljs.core.apply.call(null,cljs.core.hash_map,map__295800):map__295800);var collection = cljs.core.get.call(null,map__295800__$1,new cljs.core.Keyword(null,"collection","collection",3567559184));var resource = cljs.core.get.call(null,map__295800__$1,new cljs.core.Keyword(null,"resource","resource",672839552));return dommy.template.__GT_node_like.call(null,(function (){var map__295801 = resource;var map__295801__$1 = ((cljs.core.seq_QMARK_.call(null,map__295801))?cljs.core.apply.call(null,cljs.core.hash_map,map__295801):map__295801);var columns = cljs.core.get.call(null,map__295801__$1,new cljs.core.Keyword(null,"columns","columns",1963625295));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table#datagrid-table.table","table#datagrid-table.table",2230740568),foundation.templates.datagrid_header.call(null,columns),foundation.templates.datagrid_body.call(null,collection,columns)], null);
})());
});
foundation.templates.datagrid = (function datagrid(id,collection){var dom295817 = document.createElement("div");dom295817.className = "datagrid-container panel panel-default";
if(cljs.core.truth_(id))
{dom295817.setAttribute("id",id);
} else
{}
dom295817.appendChild((function (){var dom295818 = document.createElement("div");dom295818.className = "panel-heading";
dom295818.appendChild(dommy.template.__GT_node_like.call(null,foundation.templates.datagrid_breadcrumb.call(null,collection)));
dom295818.appendChild((function (){var dom295819 = document.createElement("form");dom295819.className = "form-inline pull-right";
dom295819.appendChild((function (){var dom295820 = document.createElement("div");dom295820.className = "form-group";
dom295820.appendChild(dommy.template.__GT_node_like.call(null,foundation.templates.datagrid_filter.call(null,collection)));
return dom295820;
})());
return dom295819;
})());
return dom295818;
})());
dom295817.appendChild((function (){var dom295821 = document.createElement("div");dom295821.className = "panel-body";
dom295821.appendChild(dommy.template.__GT_node_like.call(null,foundation.templates.datagrid_table.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"collection","collection",3567559184),collection], null))));
return dom295821;
})());
dom295817.appendChild((function (){var dom295822 = document.createElement("div");dom295822.className = "panel-footer";
dom295822.appendChild((function (){var dom295823 = document.createElement("div");dom295823.className = "form-inline";
dom295823.appendChild((function (){var dom295824 = document.createElement("div");dom295824.className = "form-group";
dom295824.appendChild((function (){var dom295825 = document.createElement("button");dom295825.className = "btn btn-success btn-sm";
dom295825.setAttribute("id","new");
dom295825.appendChild(document.createTextNode("New"));
return dom295825;
})());
return dom295824;
})());
dom295823.appendChild((function (){var dom295826 = document.createElement("div");dom295826.className = "form-group";
dom295826.appendChild((function (){var dom295827 = document.createElement("button");dom295827.className = "btn btn-info btn-sm disabled";
dom295827.setAttribute("id","save");
dom295827.appendChild(document.createTextNode("Save"));
return dom295827;
})());
return dom295826;
})());
dom295823.appendChild((function (){var dom295828 = document.createElement("div");dom295828.className = "form-group";
dom295828.appendChild((function (){var dom295829 = document.createElement("button");dom295829.className = "btn btn-danger btn-sm disabled";
dom295829.setAttribute("id","delete");
dom295829.appendChild(document.createTextNode("Delete"));
return dom295829;
})());
return dom295828;
})());
dom295823.appendChild((function (){var dom295830 = document.createElement("div");dom295830.className = "form-group";
dom295830.appendChild((function (){var dom295831 = document.createElement("button");dom295831.className = "btn btn-primary btn-sm disabled";
dom295831.setAttribute("id","dupe");
dom295831.appendChild(document.createTextNode("Duplicate"));
return dom295831;
})());
return dom295830;
})());
return dom295823;
})());
return dom295822;
})());
return dom295817;
});
foundation.templates.twitter_power = (function twitter_power(id){var dom295833 = document.createElement("div");if(cljs.core.truth_(id))
{dom295833.setAttribute("id",id);
} else
{}
return dom295833;
});

//# sourceMappingURL=templates.js.map