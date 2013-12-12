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
foundation.app.templates.chart = (function chart(){var dom97621 = document.createElement("div");dom97621.className = "analytics-highcharts";
return dom97621;
});
foundation.app.templates.dashboard_metric = (function dashboard_metric(metric){var dom97629 = document.createElement("ul");dom97629.className = "list-group";
dom97629.appendChild((function (){var dom97630 = document.createElement("li");dom97630.className = "list-group-item";
if(cljs.core.truth_(metric))
{dom97630.setAttribute("id",metric);
} else
{}
dom97630.appendChild((function (){var dom97631 = document.createElement("h5");dom97631.className = "metric-header list-group-item-heading";
dom97631.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(metric)].join('')));
return dom97631;
})());
return dom97630;
})());
dom97629.appendChild((function (){var dom97632 = document.createElement("li");dom97632.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-cpa")].join('')))
{dom97632.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-cpa")].join(''));
} else
{}
dom97632.appendChild((function (){var dom97633 = document.createElement("small");dom97633.className = "list-group-item-text";
dom97633.appendChild(dommy.template.__GT_node_like.call(null,0));
return dom97633;
})());
return dom97632;
})());
dom97629.appendChild((function (){var dom97634 = document.createElement("li");dom97634.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-rate")].join('')))
{dom97634.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-rate")].join(''));
} else
{}
dom97634.appendChild((function (){var dom97635 = document.createElement("small");dom97635.className = "list-group-item-text";
dom97635.appendChild(dommy.template.__GT_node_like.call(null,0));
return dom97635;
})());
return dom97634;
})());
return dom97629;
});
foundation.app.templates.dashboard = (function dashboard(p__97636){var map__97655 = p__97636;var map__97655__$1 = ((cljs.core.seq_QMARK_.call(null,map__97655))?cljs.core.apply.call(null,cljs.core.hash_map,map__97655):map__97655);var id = cljs.core.get.call(null,map__97655__$1,new cljs.core.Keyword(null,"id","id",1013907597));var dom97656 = document.createElement("div");dom97656.className = "twitter-stats panel panel-default";
if(cljs.core.truth_(id))
{dom97656.setAttribute("id",id);
} else
{}
dom97656.appendChild((function (){var dom97657 = document.createElement("div");dom97657.className = "panel-heading";
dom97657.appendChild((function (){var dom97658 = document.createElement("h1");dom97658.className = "panel-title#resource-id";
dom97658.setAttribute("id","resource-id");
return dom97658;
})());
dom97657.appendChild((function (){var dom97659 = document.createElement("div");dom97659.className = "form-inline pull-right";
dom97659.appendChild((function (){var dom97660 = document.createElement("div");dom97660.className = "form-group";
dom97660.appendChild((function (){var dom97661 = document.createElement("input");dom97661.className = "form-control date-picker";
dom97661.setAttribute("id","start-time");
if(true)
{dom97661.setAttribute("readonly",true);
} else
{}
return dom97661;
})());
return dom97660;
})());
dom97659.appendChild((function (){var dom97662 = document.createElement("em");if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)))
{dom97662.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)));
} else
{}
dom97662.appendChild(document.createTextNode("to"));
return dom97662;
})());
dom97659.appendChild((function (){var dom97663 = document.createElement("div");dom97663.className = "form-group";
dom97663.appendChild((function (){var dom97664 = document.createElement("input");dom97664.className = "form-control date-picker";
dom97664.setAttribute("id","end-time");
if(true)
{dom97664.setAttribute("readonly",true);
} else
{}
return dom97664;
})());
return dom97663;
})());
dom97659.appendChild((function (){var dom97665 = document.createElement("button");dom97665.className = "btn btn-primary btn-sm";
dom97665.setAttribute("id","update-stats");
dom97665.appendChild(document.createTextNode("Update"));
return dom97665;
})());
return dom97659;
})());
return dom97657;
})());
dom97656.appendChild((function (){var dom97666 = document.createElement("div");dom97666.className = "panel-body";
dom97666.appendChild(dommy.template.__GT_node_like.call(null,foundation.app.templates.chart.call(null)));
return dom97666;
})());
dom97656.appendChild((function (){var dom97667 = document.createElement("div");dom97667.className = "panel-footer row";
dom97667.appendChild((function (){var dom97668 = document.createElement("div");dom97668.className = "twitter-stats";
dom97668.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14515__auto__ = (function iter__97669(s__97670){return (new cljs.core.LazySeq(null,(function (){var s__97670__$1 = s__97670;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__97670__$1);if(temp__4092__auto__)
{var s__97670__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__97670__$2))
{var c__14513__auto__ = cljs.core.chunk_first.call(null,s__97670__$2);var size__14514__auto__ = cljs.core.count.call(null,c__14513__auto__);var b__97672 = cljs.core.chunk_buffer.call(null,size__14514__auto__);if((function (){var i__97671 = 0;while(true){
if((i__97671 < size__14514__auto__))
{var metric = cljs.core._nth.call(null,c__14513__auto__,i__97671);cljs.core.chunk_append.call(null,b__97672,foundation.app.templates.dashboard_metric.call(null,metric));
{
var G__97673 = (i__97671 + 1);
i__97671 = G__97673;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__97672),iter__97669.call(null,cljs.core.chunk_rest.call(null,s__97670__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__97672),null);
}
} else
{var metric = cljs.core.first.call(null,s__97670__$2);return cljs.core.cons.call(null,foundation.app.templates.dashboard_metric.call(null,metric),iter__97669.call(null,cljs.core.rest.call(null,s__97670__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14515__auto__.call(null,foundation.app.templates.dashboard_metrics);
})()));
return dom97668;
})());
return dom97667;
})());
return dom97656;
});
foundation.app.templates.datagrid_filter = (function datagrid_filter(coll){var dom97676 = document.createElement("div");dom97676.className = "autocomplete";
dom97676.appendChild((function (){var dom97677 = document.createElement("input");dom97677.className = "form-control";
if("text")
{dom97677.setAttribute("type","text");
} else
{}
if("What are you looking for?")
{dom97677.setAttribute("placeholder","What are you looking for?");
} else
{}
return dom97677;
})());
return dom97676;
});
foundation.app.templates.datagrid_header = (function datagrid_header(columns){var dom97684 = document.createElement("thead");dom97684.setAttribute("id","datagrid-header");
dom97684.appendChild((function (){var dom97685 = document.createElement("tr");dom97685.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14515__auto__ = (function iter__97686(s__97687){return (new cljs.core.LazySeq(null,(function (){var s__97687__$1 = s__97687;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__97687__$1);if(temp__4092__auto__)
{var s__97687__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__97687__$2))
{var c__14513__auto__ = cljs.core.chunk_first.call(null,s__97687__$2);var size__14514__auto__ = cljs.core.count.call(null,c__14513__auto__);var b__97689 = cljs.core.chunk_buffer.call(null,size__14514__auto__);if((function (){var i__97688 = 0;while(true){
if((i__97688 < size__14514__auto__))
{var col = cljs.core._nth.call(null,c__14513__auto__,i__97688);cljs.core.chunk_append.call(null,b__97689,foundation.app.cells.th.call(null,col));
{
var G__97690 = (i__97688 + 1);
i__97688 = G__97690;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__97689),iter__97686.call(null,cljs.core.chunk_rest.call(null,s__97687__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__97689),null);
}
} else
{var col = cljs.core.first.call(null,s__97687__$2);return cljs.core.cons.call(null,foundation.app.cells.th.call(null,col),iter__97686.call(null,cljs.core.rest.call(null,s__97687__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14515__auto__.call(null,columns);
})()));
return dom97685;
})());
return dom97684;
});
foundation.app.templates.datagrid_row = (function datagrid_row(model,columns){var dom97696 = document.createElement("tr");dom97696.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14515__auto__ = (function iter__97697(s__97698){return (new cljs.core.LazySeq(null,(function (){var s__97698__$1 = s__97698;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__97698__$1);if(temp__4092__auto__)
{var s__97698__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__97698__$2))
{var c__14513__auto__ = cljs.core.chunk_first.call(null,s__97698__$2);var size__14514__auto__ = cljs.core.count.call(null,c__14513__auto__);var b__97700 = cljs.core.chunk_buffer.call(null,size__14514__auto__);if((function (){var i__97699 = 0;while(true){
if((i__97699 < size__14514__auto__))
{var col = cljs.core._nth.call(null,c__14513__auto__,i__97699);cljs.core.chunk_append.call(null,b__97700,foundation.app.cells.td.call(null,col,model));
{
var G__97701 = (i__97699 + 1);
i__97699 = G__97701;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__97700),iter__97697.call(null,cljs.core.chunk_rest.call(null,s__97698__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__97700),null);
}
} else
{var col = cljs.core.first.call(null,s__97698__$2);return cljs.core.cons.call(null,foundation.app.cells.td.call(null,col,model),iter__97697.call(null,cljs.core.rest.call(null,s__97698__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14515__auto__.call(null,columns);
})()));
return dom97696;
});
foundation.app.templates.datagrid_body = (function datagrid_body(coll,columns){var dom97707 = document.createElement("tbody");dom97707.className = "datagrid-tbody";
dom97707.setAttribute("id","datagrid-body");
dom97707.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14515__auto__ = (function iter__97708(s__97709){return (new cljs.core.LazySeq(null,(function (){var s__97709__$1 = s__97709;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__97709__$1);if(temp__4092__auto__)
{var s__97709__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__97709__$2))
{var c__14513__auto__ = cljs.core.chunk_first.call(null,s__97709__$2);var size__14514__auto__ = cljs.core.count.call(null,c__14513__auto__);var b__97711 = cljs.core.chunk_buffer.call(null,size__14514__auto__);if((function (){var i__97710 = 0;while(true){
if((i__97710 < size__14514__auto__))
{var model = cljs.core._nth.call(null,c__14513__auto__,i__97710);cljs.core.chunk_append.call(null,b__97711,foundation.app.templates.datagrid_row.call(null,model,columns));
{
var G__97712 = (i__97710 + 1);
i__97710 = G__97712;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__97711),iter__97708.call(null,cljs.core.chunk_rest.call(null,s__97709__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__97711),null);
}
} else
{var model = cljs.core.first.call(null,s__97709__$2);return cljs.core.cons.call(null,foundation.app.templates.datagrid_row.call(null,model,columns),iter__97708.call(null,cljs.core.rest.call(null,s__97709__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14515__auto__.call(null,cljs.core.vals.call(null,coll));
})()));
return dom97707;
});
foundation.app.templates.datagrid_breadcrumb = (function datagrid_breadcrumb(coll){var dom97724 = document.createElement("ol");dom97724.className = "breadcrumb";
dom97724.appendChild((function (){var dom97725 = document.createElement("li");dom97725.className = "active";
dom97725.setAttribute("id","account");
dom97725.appendChild((function (){var dom97726 = document.createElement("div");dom97726.className = "arrow-down";
return dom97726;
})());
dom97725.appendChild((function (){var dom97727 = document.createElement("a");dom97727.appendChild(document.createTextNode("Accounts"));
return dom97727;
})());
dom97725.appendChild((function (){var dom97728 = document.createElement("div");dom97728.className = "arrow-up";
return dom97728;
})());
return dom97725;
})());
dom97724.appendChild((function (){var dom97729 = document.createElement("li");dom97729.className = "hidden";
dom97729.setAttribute("id","campaign");
dom97729.appendChild((function (){var dom97730 = document.createElement("a");dom97730.appendChild(document.createTextNode("Campaigns"));
return dom97730;
})());
return dom97729;
})());
dom97724.appendChild((function (){var dom97731 = document.createElement("li");dom97731.className = "hidden";
dom97731.setAttribute("id","line_item");
dom97731.appendChild((function (){var dom97732 = document.createElement("a");dom97732.appendChild(document.createTextNode("Line Items"));
return dom97732;
})());
return dom97731;
})());
dom97724.appendChild((function (){var dom97733 = document.createElement("li");dom97733.className = "hidden";
dom97733.setAttribute("id","promoted_tweet");
dom97733.appendChild((function (){var dom97734 = document.createElement("a");dom97734.appendChild(document.createTextNode("Promoted Products"));
return dom97734;
})());
return dom97733;
})());
return dom97724;
});
foundation.app.templates.datagrid_table = (function datagrid_table(p__97735){var map__97738 = p__97735;var map__97738__$1 = ((cljs.core.seq_QMARK_.call(null,map__97738))?cljs.core.apply.call(null,cljs.core.hash_map,map__97738):map__97738);var collection = cljs.core.get.call(null,map__97738__$1,new cljs.core.Keyword(null,"collection","collection",3567559184));var resource = cljs.core.get.call(null,map__97738__$1,new cljs.core.Keyword(null,"resource","resource",672839552));return dommy.template.__GT_node_like.call(null,(function (){var map__97739 = resource;var map__97739__$1 = ((cljs.core.seq_QMARK_.call(null,map__97739))?cljs.core.apply.call(null,cljs.core.hash_map,map__97739):map__97739);var columns = cljs.core.get.call(null,map__97739__$1,new cljs.core.Keyword(null,"columns","columns",1963625295));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table#datagrid-table.table","table#datagrid-table.table",2230740568),foundation.app.templates.datagrid_header.call(null,columns),foundation.app.templates.datagrid_body.call(null,collection,columns)], null);
})());
});
foundation.app.templates.datagrid = (function datagrid(p__97740){var map__97757 = p__97740;var map__97757__$1 = ((cljs.core.seq_QMARK_.call(null,map__97757))?cljs.core.apply.call(null,cljs.core.hash_map,map__97757):map__97757);var collection = cljs.core.get.call(null,map__97757__$1,new cljs.core.Keyword(null,"collection","collection",3567559184));var id = cljs.core.get.call(null,map__97757__$1,new cljs.core.Keyword(null,"id","id",1013907597));var dom97758 = document.createElement("div");dom97758.className = "datagrid-container panel panel-default";
if(cljs.core.truth_(id))
{dom97758.setAttribute("id",id);
} else
{}
dom97758.appendChild((function (){var dom97759 = document.createElement("div");dom97759.className = "panel-heading";
dom97759.appendChild(dommy.template.__GT_node_like.call(null,foundation.app.templates.datagrid_breadcrumb.call(null,collection)));
dom97759.appendChild((function (){var dom97760 = document.createElement("form");dom97760.className = "form-inline pull-right";
dom97760.appendChild((function (){var dom97761 = document.createElement("div");dom97761.className = "form-group";
dom97761.appendChild(dommy.template.__GT_node_like.call(null,foundation.app.templates.datagrid_filter.call(null,collection)));
return dom97761;
})());
return dom97760;
})());
return dom97759;
})());
dom97758.appendChild((function (){var dom97762 = document.createElement("div");dom97762.className = "panel-body";
dom97762.appendChild(dommy.template.__GT_node_like.call(null,foundation.app.templates.datagrid_table.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"collection","collection",3567559184),collection], null))));
return dom97762;
})());
dom97758.appendChild((function (){var dom97763 = document.createElement("div");dom97763.className = "panel-footer";
dom97763.appendChild((function (){var dom97764 = document.createElement("div");dom97764.className = "form-inline";
dom97764.appendChild((function (){var dom97765 = document.createElement("div");dom97765.className = "form-group";
dom97765.appendChild((function (){var dom97766 = document.createElement("button");dom97766.className = "btn btn-success btn-sm";
dom97766.setAttribute("id","new");
dom97766.appendChild(document.createTextNode("New"));
return dom97766;
})());
return dom97765;
})());
dom97764.appendChild((function (){var dom97767 = document.createElement("div");dom97767.className = "form-group";
dom97767.appendChild((function (){var dom97768 = document.createElement("button");dom97768.className = "btn btn-info btn-sm disabled";
dom97768.setAttribute("id","save");
dom97768.appendChild(document.createTextNode("Save"));
return dom97768;
})());
return dom97767;
})());
dom97764.appendChild((function (){var dom97769 = document.createElement("div");dom97769.className = "form-group";
dom97769.appendChild((function (){var dom97770 = document.createElement("button");dom97770.className = "btn btn-danger btn-sm disabled";
dom97770.setAttribute("id","delete");
dom97770.appendChild(document.createTextNode("Delete"));
return dom97770;
})());
return dom97769;
})());
dom97764.appendChild((function (){var dom97771 = document.createElement("div");dom97771.className = "form-group";
dom97771.appendChild((function (){var dom97772 = document.createElement("button");dom97772.className = "btn btn-primary btn-sm disabled";
dom97772.setAttribute("id","dupe");
dom97772.appendChild(document.createTextNode("Duplicate"));
return dom97772;
})());
return dom97771;
})());
return dom97764;
})());
return dom97763;
})());
return dom97758;
});
foundation.app.templates.twitter_power = (function twitter_power(id){var dom97774 = document.createElement("div");if(cljs.core.truth_(id))
{dom97774.setAttribute("id",id);
} else
{}
return dom97774;
});

//# sourceMappingURL=templates.js.map