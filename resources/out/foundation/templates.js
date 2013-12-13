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
foundation.templates.chart = (function chart(){var dom311695 = document.createElement("div");dom311695.className = "analytics-highcharts";
return dom311695;
});
foundation.templates.dashboard_metric = (function dashboard_metric(metric){var dom311703 = document.createElement("ul");dom311703.className = "list-group";
dom311703.appendChild((function (){var dom311704 = document.createElement("li");dom311704.className = "list-group-item";
if(cljs.core.truth_(metric))
{dom311704.setAttribute("id",metric);
} else
{}
dom311704.appendChild((function (){var dom311705 = document.createElement("h5");dom311705.className = "metric-header list-group-item-heading";
dom311705.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(metric)].join('')));
return dom311705;
})());
return dom311704;
})());
dom311703.appendChild((function (){var dom311706 = document.createElement("li");dom311706.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-cpa")].join('')))
{dom311706.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-cpa")].join(''));
} else
{}
dom311706.appendChild((function (){var dom311707 = document.createElement("small");dom311707.className = "list-group-item-text";
dom311707.appendChild(dommy.template.__GT_node_like.call(null,0));
return dom311707;
})());
return dom311706;
})());
dom311703.appendChild((function (){var dom311708 = document.createElement("li");dom311708.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-rate")].join('')))
{dom311708.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-rate")].join(''));
} else
{}
dom311708.appendChild((function (){var dom311709 = document.createElement("small");dom311709.className = "list-group-item-text";
dom311709.appendChild(dommy.template.__GT_node_like.call(null,0));
return dom311709;
})());
return dom311708;
})());
return dom311703;
});
foundation.templates.dashboard = (function dashboard(id){var dom311727 = document.createElement("div");dom311727.className = "twitter-stats panel panel-default";
if(cljs.core.truth_(id))
{dom311727.setAttribute("id",id);
} else
{}
dom311727.appendChild((function (){var dom311728 = document.createElement("div");dom311728.className = "panel-heading";
dom311728.appendChild((function (){var dom311729 = document.createElement("h1");dom311729.className = "panel-title#resource-id";
dom311729.setAttribute("id","resource-id");
return dom311729;
})());
dom311728.appendChild((function (){var dom311730 = document.createElement("div");dom311730.className = "form-inline pull-right";
dom311730.appendChild((function (){var dom311731 = document.createElement("div");dom311731.className = "form-group";
dom311731.appendChild((function (){var dom311732 = document.createElement("input");dom311732.className = "form-control date-picker";
dom311732.setAttribute("id","start-time");
if(true)
{dom311732.setAttribute("readonly",true);
} else
{}
return dom311732;
})());
return dom311731;
})());
dom311730.appendChild((function (){var dom311733 = document.createElement("em");if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)))
{dom311733.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)));
} else
{}
dom311733.appendChild(document.createTextNode("to"));
return dom311733;
})());
dom311730.appendChild((function (){var dom311734 = document.createElement("div");dom311734.className = "form-group";
dom311734.appendChild((function (){var dom311735 = document.createElement("input");dom311735.className = "form-control date-picker";
dom311735.setAttribute("id","end-time");
if(true)
{dom311735.setAttribute("readonly",true);
} else
{}
return dom311735;
})());
return dom311734;
})());
dom311730.appendChild((function (){var dom311736 = document.createElement("button");dom311736.className = "btn btn-primary btn-sm";
dom311736.setAttribute("id","update-stats");
dom311736.appendChild(document.createTextNode("Update"));
return dom311736;
})());
return dom311730;
})());
return dom311728;
})());
dom311727.appendChild((function (){var dom311737 = document.createElement("div");dom311737.className = "panel-body";
dom311737.appendChild(dommy.template.__GT_node_like.call(null,foundation.templates.chart.call(null)));
return dom311737;
})());
dom311727.appendChild((function (){var dom311738 = document.createElement("div");dom311738.className = "panel-footer row";
dom311738.appendChild((function (){var dom311739 = document.createElement("div");dom311739.className = "twitter-stats";
dom311739.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14518__auto__ = (function iter__311740(s__311741){return (new cljs.core.LazySeq(null,(function (){var s__311741__$1 = s__311741;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__311741__$1);if(temp__4092__auto__)
{var s__311741__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__311741__$2))
{var c__14516__auto__ = cljs.core.chunk_first.call(null,s__311741__$2);var size__14517__auto__ = cljs.core.count.call(null,c__14516__auto__);var b__311743 = cljs.core.chunk_buffer.call(null,size__14517__auto__);if((function (){var i__311742 = 0;while(true){
if((i__311742 < size__14517__auto__))
{var metric = cljs.core._nth.call(null,c__14516__auto__,i__311742);cljs.core.chunk_append.call(null,b__311743,foundation.templates.dashboard_metric.call(null,metric));
{
var G__311744 = (i__311742 + 1);
i__311742 = G__311744;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__311743),iter__311740.call(null,cljs.core.chunk_rest.call(null,s__311741__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__311743),null);
}
} else
{var metric = cljs.core.first.call(null,s__311741__$2);return cljs.core.cons.call(null,foundation.templates.dashboard_metric.call(null,metric),iter__311740.call(null,cljs.core.rest.call(null,s__311741__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14518__auto__.call(null,foundation.templates.dashboard_metrics);
})()));
return dom311739;
})());
return dom311738;
})());
return dom311727;
});
foundation.templates.datagrid_filter = (function datagrid_filter(){var dom311747 = document.createElement("div");dom311747.className = "autocomplete";
dom311747.appendChild((function (){var dom311748 = document.createElement("input");dom311748.className = "form-control";
if("text")
{dom311748.setAttribute("type","text");
} else
{}
if("What are you looking for?")
{dom311748.setAttribute("placeholder","What are you looking for?");
} else
{}
return dom311748;
})());
return dom311747;
});
foundation.templates.datagrid_header = (function datagrid_header(columns){var dom311755 = document.createElement("thead");dom311755.setAttribute("id","datagrid-header");
dom311755.appendChild((function (){var dom311756 = document.createElement("tr");dom311756.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14518__auto__ = (function iter__311757(s__311758){return (new cljs.core.LazySeq(null,(function (){var s__311758__$1 = s__311758;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__311758__$1);if(temp__4092__auto__)
{var s__311758__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__311758__$2))
{var c__14516__auto__ = cljs.core.chunk_first.call(null,s__311758__$2);var size__14517__auto__ = cljs.core.count.call(null,c__14516__auto__);var b__311760 = cljs.core.chunk_buffer.call(null,size__14517__auto__);if((function (){var i__311759 = 0;while(true){
if((i__311759 < size__14517__auto__))
{var col = cljs.core._nth.call(null,c__14516__auto__,i__311759);cljs.core.chunk_append.call(null,b__311760,foundation.cells.th.call(null,col));
{
var G__311761 = (i__311759 + 1);
i__311759 = G__311761;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__311760),iter__311757.call(null,cljs.core.chunk_rest.call(null,s__311758__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__311760),null);
}
} else
{var col = cljs.core.first.call(null,s__311758__$2);return cljs.core.cons.call(null,foundation.cells.th.call(null,col),iter__311757.call(null,cljs.core.rest.call(null,s__311758__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14518__auto__.call(null,columns);
})()));
return dom311756;
})());
return dom311755;
});
foundation.templates.datagrid_row = (function datagrid_row(model,columns){var dom311767 = document.createElement("tr");dom311767.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14518__auto__ = (function iter__311768(s__311769){return (new cljs.core.LazySeq(null,(function (){var s__311769__$1 = s__311769;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__311769__$1);if(temp__4092__auto__)
{var s__311769__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__311769__$2))
{var c__14516__auto__ = cljs.core.chunk_first.call(null,s__311769__$2);var size__14517__auto__ = cljs.core.count.call(null,c__14516__auto__);var b__311771 = cljs.core.chunk_buffer.call(null,size__14517__auto__);if((function (){var i__311770 = 0;while(true){
if((i__311770 < size__14517__auto__))
{var col = cljs.core._nth.call(null,c__14516__auto__,i__311770);cljs.core.chunk_append.call(null,b__311771,foundation.cells.td.call(null,col,model));
{
var G__311772 = (i__311770 + 1);
i__311770 = G__311772;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__311771),iter__311768.call(null,cljs.core.chunk_rest.call(null,s__311769__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__311771),null);
}
} else
{var col = cljs.core.first.call(null,s__311769__$2);return cljs.core.cons.call(null,foundation.cells.td.call(null,col,model),iter__311768.call(null,cljs.core.rest.call(null,s__311769__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14518__auto__.call(null,columns);
})()));
return dom311767;
});
foundation.templates.datagrid_body = (function datagrid_body(coll,columns){var dom311778 = document.createElement("tbody");dom311778.className = "datagrid-tbody";
dom311778.setAttribute("id","datagrid-body");
dom311778.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14518__auto__ = (function iter__311779(s__311780){return (new cljs.core.LazySeq(null,(function (){var s__311780__$1 = s__311780;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__311780__$1);if(temp__4092__auto__)
{var s__311780__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__311780__$2))
{var c__14516__auto__ = cljs.core.chunk_first.call(null,s__311780__$2);var size__14517__auto__ = cljs.core.count.call(null,c__14516__auto__);var b__311782 = cljs.core.chunk_buffer.call(null,size__14517__auto__);if((function (){var i__311781 = 0;while(true){
if((i__311781 < size__14517__auto__))
{var model = cljs.core._nth.call(null,c__14516__auto__,i__311781);cljs.core.chunk_append.call(null,b__311782,foundation.templates.datagrid_row.call(null,model,columns));
{
var G__311783 = (i__311781 + 1);
i__311781 = G__311783;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__311782),iter__311779.call(null,cljs.core.chunk_rest.call(null,s__311780__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__311782),null);
}
} else
{var model = cljs.core.first.call(null,s__311780__$2);return cljs.core.cons.call(null,foundation.templates.datagrid_row.call(null,model,columns),iter__311779.call(null,cljs.core.rest.call(null,s__311780__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14518__auto__.call(null,coll);
})()));
return dom311778;
});
foundation.templates.datagrid_breadcrumb = (function datagrid_breadcrumb(){var dom311795 = document.createElement("ol");dom311795.className = "breadcrumb";
dom311795.appendChild((function (){var dom311796 = document.createElement("li");dom311796.className = "active";
dom311796.setAttribute("id","account");
dom311796.appendChild((function (){var dom311797 = document.createElement("div");dom311797.className = "arrow-down";
return dom311797;
})());
dom311796.appendChild((function (){var dom311798 = document.createElement("a");dom311798.appendChild(document.createTextNode("Accounts"));
return dom311798;
})());
dom311796.appendChild((function (){var dom311799 = document.createElement("div");dom311799.className = "arrow-up";
return dom311799;
})());
return dom311796;
})());
dom311795.appendChild((function (){var dom311800 = document.createElement("li");dom311800.className = "hidden";
dom311800.setAttribute("id","campaign");
dom311800.appendChild((function (){var dom311801 = document.createElement("a");dom311801.appendChild(document.createTextNode("Campaigns"));
return dom311801;
})());
return dom311800;
})());
dom311795.appendChild((function (){var dom311802 = document.createElement("li");dom311802.className = "hidden";
dom311802.setAttribute("id","line_item");
dom311802.appendChild((function (){var dom311803 = document.createElement("a");dom311803.appendChild(document.createTextNode("Line Items"));
return dom311803;
})());
return dom311802;
})());
dom311795.appendChild((function (){var dom311804 = document.createElement("li");dom311804.className = "hidden";
dom311804.setAttribute("id","promoted_tweet");
dom311804.appendChild((function (){var dom311805 = document.createElement("a");dom311805.appendChild(document.createTextNode("Promoted Products"));
return dom311805;
})());
return dom311804;
})());
return dom311795;
});
foundation.templates.datagrid_table = (function datagrid_table(model,coll){return dommy.template.__GT_node_like.call(null,(function (){var cols = foundation.models.columns.call(null,model);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table#datagrid-table.table","table#datagrid-table.table",2230740568),foundation.templates.datagrid_header.call(null,cols),foundation.templates.datagrid_body.call(null,coll,cols)], null);
})());
});
foundation.templates.datagrid = (function datagrid(id){var dom311821 = document.createElement("div");dom311821.className = "datagrid-container panel panel-default";
if(cljs.core.truth_(id))
{dom311821.setAttribute("id",id);
} else
{}
dom311821.appendChild((function (){var dom311822 = document.createElement("div");dom311822.className = "panel-heading";
dom311822.appendChild(dommy.template.__GT_node_like.call(null,foundation.templates.datagrid_breadcrumb.call(null)));
dom311822.appendChild((function (){var dom311823 = document.createElement("form");dom311823.className = "form-inline pull-right";
dom311823.appendChild((function (){var dom311824 = document.createElement("div");dom311824.className = "form-group";
dom311824.appendChild(dommy.template.__GT_node_like.call(null,foundation.templates.datagrid_filter.call(null)));
return dom311824;
})());
return dom311823;
})());
return dom311822;
})());
dom311821.appendChild((function (){var dom311825 = document.createElement("div");dom311825.className = "panel-body";
return dom311825;
})());
dom311821.appendChild((function (){var dom311826 = document.createElement("div");dom311826.className = "panel-footer";
dom311826.appendChild((function (){var dom311827 = document.createElement("div");dom311827.className = "form-inline";
dom311827.appendChild((function (){var dom311828 = document.createElement("div");dom311828.className = "form-group";
dom311828.appendChild((function (){var dom311829 = document.createElement("button");dom311829.className = "btn btn-success btn-sm";
dom311829.setAttribute("id","new");
dom311829.appendChild(document.createTextNode("New"));
return dom311829;
})());
return dom311828;
})());
dom311827.appendChild((function (){var dom311830 = document.createElement("div");dom311830.className = "form-group";
dom311830.appendChild((function (){var dom311831 = document.createElement("button");dom311831.className = "btn btn-info btn-sm disabled";
dom311831.setAttribute("id","save");
dom311831.appendChild(document.createTextNode("Save"));
return dom311831;
})());
return dom311830;
})());
dom311827.appendChild((function (){var dom311832 = document.createElement("div");dom311832.className = "form-group";
dom311832.appendChild((function (){var dom311833 = document.createElement("button");dom311833.className = "btn btn-danger btn-sm disabled";
dom311833.setAttribute("id","delete");
dom311833.appendChild(document.createTextNode("Delete"));
return dom311833;
})());
return dom311832;
})());
dom311827.appendChild((function (){var dom311834 = document.createElement("div");dom311834.className = "form-group";
dom311834.appendChild((function (){var dom311835 = document.createElement("button");dom311835.className = "btn btn-primary btn-sm disabled";
dom311835.setAttribute("id","dupe");
dom311835.appendChild(document.createTextNode("Duplicate"));
return dom311835;
})());
return dom311834;
})());
return dom311827;
})());
return dom311826;
})());
return dom311821;
});
foundation.templates.twitter_power = (function twitter_power(id){var dom311837 = document.createElement("div");if(cljs.core.truth_(id))
{dom311837.setAttribute("id",id);
} else
{}
return dom311837;
});

//# sourceMappingURL=templates.js.map