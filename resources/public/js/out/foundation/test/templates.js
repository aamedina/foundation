// Compiled by ClojureScript 0.0-2120
goog.provide('foundation.test.templates');
goog.require('cljs.core');
goog.require('foundation.test.models');
goog.require('cljs_time.core');
goog.require('enfocus.events');
goog.require('goog.date');
goog.require('enfocus.core');
goog.require('dommy.core');
goog.require('cljs_time.format');
goog.require('foundation.test.cells');
goog.require('enfocus.core');
goog.require('foundation.test.models');
goog.require('goog.i18n.DateTimeParse');
goog.require('cljs_time.format');
goog.require('goog.i18n.DateTimeFormat');
goog.require('goog.i18n.DateTimeFormat');
goog.require('enfocus.events');
goog.require('goog.i18n.DateTimeParse');
goog.require('goog.date');
goog.require('foundation.test.cells');
goog.require('goog.ui.InputDatePicker');
goog.require('dommy.core');
goog.require('cljs_time.core');
cljs.core.enable_console_print_BANG_.call(null);
foundation.test.templates.date_picker = (function date_picker(el,init_date,date_pattern){var date_pattern__$1 = (((date_pattern instanceof cljs.core.Keyword))?date_pattern.call(null,cljs_time.format.formatters):date_pattern);var picker = (new goog.ui.InputDatePicker((new goog.i18n.DateTimeFormat(date_pattern__$1)),(new goog.i18n.DateTimeParse(date_pattern__$1))));var G__121657_121659 = picker.getDatePicker();G__121657_121659.setUseSimpleNavigationMenu(true);
G__121657_121659.setAllowNone(true);
var G__121658 = picker;G__121658.decorate(el);
G__121658.setDate(init_date);
return G__121658;
});
foundation.test.templates.dashboard_metrics = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Impressions","CPM","Impression Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Engagements","CPE","Engagement Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clicks","CPC","Click Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Retweets","CPRT","Retweet Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Replies","CPR","Reply Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Follows","CPF","Follow Rate"], null)], null);
foundation.test.templates.dashboard_metric = (function dashboard_metric(p__121660){var vec__121669 = p__121660;var metric = cljs.core.nth.call(null,vec__121669,0,null);var cpa = cljs.core.nth.call(null,vec__121669,1,null);var rate = cljs.core.nth.call(null,vec__121669,2,null);var dom121670 = document.createElement("ul");dom121670.className = "list-group";
dom121670.appendChild((function (){var dom121671 = document.createElement("li");dom121671.className = "list-group-item";
if(cljs.core.truth_(metric))
{dom121671.setAttribute("id",metric);
} else
{}
dom121671.appendChild((function (){var dom121672 = document.createElement("h5");dom121672.className = "metric-header list-group-item-heading";
dom121672.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(metric)].join('')));
return dom121672;
})());
return dom121671;
})());
dom121670.appendChild((function (){var dom121673 = document.createElement("li");dom121673.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-cpa")].join('')))
{dom121673.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-cpa")].join(''));
} else
{}
dom121673.appendChild((function (){var dom121674 = document.createElement("small");dom121674.className = "list-group-item-text";
dom121674.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(cpa)].join('')));
return dom121674;
})());
return dom121673;
})());
dom121670.appendChild((function (){var dom121675 = document.createElement("li");dom121675.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-rate")].join('')))
{dom121675.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-rate")].join(''));
} else
{}
dom121675.appendChild((function (){var dom121676 = document.createElement("small");dom121676.className = "list-group-item-text";
dom121676.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(rate)].join('')));
return dom121676;
})());
return dom121675;
})());
return dom121670;
});
foundation.test.templates.dashboard = (function dashboard(id){var dom121695 = document.createElement("div");dom121695.className = "twitter-stats panel panel-default";
if(cljs.core.truth_(id))
{dom121695.setAttribute("id",id);
} else
{}
dom121695.appendChild((function (){var dom121696 = document.createElement("div");dom121696.className = "panel-heading";
dom121696.appendChild((function (){var dom121697 = document.createElement("h1");dom121697.className = "panel-title";
if("resource-id")
{dom121697.setAttribute("id","resource-id");
} else
{}
return dom121697;
})());
dom121696.appendChild((function (){var dom121698 = document.createElement("div");dom121698.className = "form-inline pull-right";
dom121698.appendChild((function (){var dom121699 = document.createElement("div");dom121699.className = "form-group";
dom121699.appendChild((function (){var dom121700 = document.createElement("input");dom121700.className = "form-control date-picker";
dom121700.setAttribute("id","start-time");
if(true)
{dom121700.setAttribute("readonly",true);
} else
{}
return dom121700;
})());
return dom121699;
})());
dom121698.appendChild((function (){var dom121701 = document.createElement("em");if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)))
{dom121701.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)));
} else
{}
dom121701.appendChild(document.createTextNode("to"));
return dom121701;
})());
dom121698.appendChild((function (){var dom121702 = document.createElement("div");dom121702.className = "form-group";
dom121702.appendChild((function (){var dom121703 = document.createElement("input");dom121703.className = "form-control date-picker";
dom121703.setAttribute("id","end-time");
if(true)
{dom121703.setAttribute("readonly",true);
} else
{}
return dom121703;
})());
return dom121702;
})());
dom121698.appendChild((function (){var dom121704 = document.createElement("button");dom121704.className = "btn btn-primary btn-sm";
dom121704.setAttribute("id","update-stats");
dom121704.appendChild(document.createTextNode("Update"));
return dom121704;
})());
return dom121698;
})());
return dom121696;
})());
dom121695.appendChild((function (){var dom121705 = document.createElement("div");dom121705.className = "panel-body";
dom121705.appendChild((function (){var dom121706 = document.createElement("div");dom121706.className = "analytics-highcharts";
return dom121706;
})());
return dom121705;
})());
dom121695.appendChild((function (){var dom121707 = document.createElement("div");dom121707.className = "panel-footer row";
dom121707.appendChild((function (){var dom121708 = document.createElement("div");dom121708.className = "twitter-stats";
dom121708.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8921__auto__ = (function iter__121709(s__121710){return (new cljs.core.LazySeq(null,(function (){var s__121710__$1 = s__121710;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__121710__$1);if(temp__4092__auto__)
{var s__121710__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__121710__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__121710__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__121712 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__121711 = 0;while(true){
if((i__121711 < size__8920__auto__))
{var metric = cljs.core._nth.call(null,c__8919__auto__,i__121711);cljs.core.chunk_append.call(null,b__121712,foundation.test.templates.dashboard_metric.call(null,metric));
{
var G__121713 = (i__121711 + 1);
i__121711 = G__121713;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__121712),iter__121709.call(null,cljs.core.chunk_rest.call(null,s__121710__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__121712),null);
}
} else
{var metric = cljs.core.first.call(null,s__121710__$2);return cljs.core.cons.call(null,foundation.test.templates.dashboard_metric.call(null,metric),iter__121709.call(null,cljs.core.rest.call(null,s__121710__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,foundation.test.templates.dashboard_metrics);
})()));
return dom121708;
})());
return dom121707;
})());
return dom121695;
});
foundation.test.templates.datagrid_filter = (function datagrid_filter(){var dom121716 = document.createElement("div");dom121716.className = "autocomplete";
dom121716.appendChild((function (){var dom121717 = document.createElement("input");dom121717.className = "form-control";
if("text")
{dom121717.setAttribute("type","text");
} else
{}
if("What are you looking for?")
{dom121717.setAttribute("placeholder","What are you looking for?");
} else
{}
return dom121717;
})());
return dom121716;
});
foundation.test.templates.datagrid_header = (function datagrid_header(columns){var dom121724 = document.createElement("thead");dom121724.setAttribute("id","datagrid-header");
dom121724.appendChild((function (){var dom121725 = document.createElement("tr");dom121725.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8921__auto__ = (function iter__121726(s__121727){return (new cljs.core.LazySeq(null,(function (){var s__121727__$1 = s__121727;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__121727__$1);if(temp__4092__auto__)
{var s__121727__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__121727__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__121727__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__121729 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__121728 = 0;while(true){
if((i__121728 < size__8920__auto__))
{var col = cljs.core._nth.call(null,c__8919__auto__,i__121728);cljs.core.chunk_append.call(null,b__121729,foundation.test.cells.th.call(null,col));
{
var G__121730 = (i__121728 + 1);
i__121728 = G__121730;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__121729),iter__121726.call(null,cljs.core.chunk_rest.call(null,s__121727__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__121729),null);
}
} else
{var col = cljs.core.first.call(null,s__121727__$2);return cljs.core.cons.call(null,foundation.test.cells.th.call(null,col),iter__121726.call(null,cljs.core.rest.call(null,s__121727__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,columns);
})()));
return dom121725;
})());
return dom121724;
});
foundation.test.templates.datagrid_row = (function datagrid_row(model,columns){var dom121736 = document.createElement("tr");dom121736.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8921__auto__ = (function iter__121737(s__121738){return (new cljs.core.LazySeq(null,(function (){var s__121738__$1 = s__121738;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__121738__$1);if(temp__4092__auto__)
{var s__121738__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__121738__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__121738__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__121740 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__121739 = 0;while(true){
if((i__121739 < size__8920__auto__))
{var col = cljs.core._nth.call(null,c__8919__auto__,i__121739);cljs.core.chunk_append.call(null,b__121740,foundation.test.cells.td.call(null,col,model));
{
var G__121741 = (i__121739 + 1);
i__121739 = G__121741;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__121740),iter__121737.call(null,cljs.core.chunk_rest.call(null,s__121738__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__121740),null);
}
} else
{var col = cljs.core.first.call(null,s__121738__$2);return cljs.core.cons.call(null,foundation.test.cells.td.call(null,col,model),iter__121737.call(null,cljs.core.rest.call(null,s__121738__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,columns);
})()));
return dom121736;
});
foundation.test.templates.datagrid_body = (function datagrid_body(coll,columns){var dom121747 = document.createElement("tbody");dom121747.className = "datagrid-tbody";
dom121747.setAttribute("id","datagrid-body");
dom121747.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8921__auto__ = (function iter__121748(s__121749){return (new cljs.core.LazySeq(null,(function (){var s__121749__$1 = s__121749;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__121749__$1);if(temp__4092__auto__)
{var s__121749__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__121749__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__121749__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__121751 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__121750 = 0;while(true){
if((i__121750 < size__8920__auto__))
{var model = cljs.core._nth.call(null,c__8919__auto__,i__121750);cljs.core.chunk_append.call(null,b__121751,foundation.test.templates.datagrid_row.call(null,model,columns));
{
var G__121752 = (i__121750 + 1);
i__121750 = G__121752;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__121751),iter__121748.call(null,cljs.core.chunk_rest.call(null,s__121749__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__121751),null);
}
} else
{var model = cljs.core.first.call(null,s__121749__$2);return cljs.core.cons.call(null,foundation.test.templates.datagrid_row.call(null,model,columns),iter__121748.call(null,cljs.core.rest.call(null,s__121749__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,coll);
})()));
return dom121747;
});
foundation.test.templates.datagrid_breadcrumb = (function datagrid_breadcrumb(){var dom121764 = document.createElement("ol");dom121764.className = "breadcrumb";
dom121764.appendChild((function (){var dom121765 = document.createElement("li");dom121765.className = "active";
dom121765.setAttribute("id","account");
dom121765.appendChild((function (){var dom121766 = document.createElement("div");dom121766.className = "arrow-down";
return dom121766;
})());
dom121765.appendChild((function (){var dom121767 = document.createElement("a");dom121767.appendChild(document.createTextNode("Accounts"));
return dom121767;
})());
dom121765.appendChild((function (){var dom121768 = document.createElement("div");dom121768.className = "arrow-up";
return dom121768;
})());
return dom121765;
})());
dom121764.appendChild((function (){var dom121769 = document.createElement("li");dom121769.className = "hidden";
dom121769.setAttribute("id","campaign");
dom121769.appendChild((function (){var dom121770 = document.createElement("a");dom121770.appendChild(document.createTextNode("Campaigns"));
return dom121770;
})());
return dom121769;
})());
dom121764.appendChild((function (){var dom121771 = document.createElement("li");dom121771.className = "hidden";
dom121771.setAttribute("id","line_item");
dom121771.appendChild((function (){var dom121772 = document.createElement("a");dom121772.appendChild(document.createTextNode("Line Items"));
return dom121772;
})());
return dom121771;
})());
dom121764.appendChild((function (){var dom121773 = document.createElement("li");dom121773.className = "hidden";
dom121773.setAttribute("id","promoted_tweet");
dom121773.appendChild((function (){var dom121774 = document.createElement("a");dom121774.appendChild(document.createTextNode("Promoted Products"));
return dom121774;
})());
return dom121773;
})());
return dom121764;
});
foundation.test.templates.datagrid_table = (function datagrid_table(model,coll){return dommy.template.__GT_node_like.call(null,(function (){var cols = foundation.test.models.columns.call(null,model);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table#datagrid-table.table","table#datagrid-table.table",2230740568),foundation.test.templates.datagrid_header.call(null,cols),foundation.test.templates.datagrid_body.call(null,coll,cols)], null);
})());
});
foundation.test.templates.datagrid = (function datagrid(id){var dom121790 = document.createElement("div");dom121790.className = "datagrid-container panel panel-default";
if(cljs.core.truth_(id))
{dom121790.setAttribute("id",id);
} else
{}
dom121790.appendChild((function (){var dom121791 = document.createElement("div");dom121791.className = "panel-heading";
dom121791.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.templates.datagrid_breadcrumb.call(null)));
dom121791.appendChild((function (){var dom121792 = document.createElement("form");dom121792.className = "form-inline pull-right";
dom121792.appendChild((function (){var dom121793 = document.createElement("div");dom121793.className = "form-group";
dom121793.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.templates.datagrid_filter.call(null)));
return dom121793;
})());
return dom121792;
})());
return dom121791;
})());
dom121790.appendChild((function (){var dom121794 = document.createElement("div");dom121794.className = "panel-body";
return dom121794;
})());
dom121790.appendChild((function (){var dom121795 = document.createElement("div");dom121795.className = "panel-footer";
dom121795.appendChild((function (){var dom121796 = document.createElement("div");dom121796.className = "form-inline";
dom121796.appendChild((function (){var dom121797 = document.createElement("div");dom121797.className = "form-group";
dom121797.appendChild((function (){var dom121798 = document.createElement("button");dom121798.className = "btn btn-success btn-sm";
dom121798.setAttribute("id","new");
dom121798.appendChild(document.createTextNode("New"));
return dom121798;
})());
return dom121797;
})());
dom121796.appendChild((function (){var dom121799 = document.createElement("div");dom121799.className = "form-group";
dom121799.appendChild((function (){var dom121800 = document.createElement("button");dom121800.className = "btn btn-info btn-sm disabled";
dom121800.setAttribute("id","save");
dom121800.appendChild(document.createTextNode("Save"));
return dom121800;
})());
return dom121799;
})());
dom121796.appendChild((function (){var dom121801 = document.createElement("div");dom121801.className = "form-group";
dom121801.appendChild((function (){var dom121802 = document.createElement("button");dom121802.className = "btn btn-danger btn-sm disabled";
dom121802.setAttribute("id","delete");
dom121802.appendChild(document.createTextNode("Delete"));
return dom121802;
})());
return dom121801;
})());
dom121796.appendChild((function (){var dom121803 = document.createElement("div");dom121803.className = "form-group";
dom121803.appendChild((function (){var dom121804 = document.createElement("button");dom121804.className = "btn btn-primary btn-sm disabled";
dom121804.setAttribute("id","dupe");
dom121804.appendChild(document.createTextNode("Duplicate"));
return dom121804;
})());
return dom121803;
})());
return dom121796;
})());
return dom121795;
})());
return dom121790;
});
foundation.test.templates.twitter_power = (function twitter_power(id){var dom121806 = document.createElement("div");if(cljs.core.truth_(id))
{dom121806.setAttribute("id",id);
} else
{}
return dom121806;
});

//# sourceMappingURL=templates.js.map