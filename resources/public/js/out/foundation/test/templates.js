// Compiled by ClojureScript 0.0-2120
goog.provide('foundation.test.templates');
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
foundation.test.templates.date_picker = (function date_picker(el,init_date,date_pattern){var date_pattern__$1 = (((date_pattern instanceof cljs.core.Keyword))?date_pattern.call(null,cljs_time.format.formatters):date_pattern);var picker = (new goog.ui.InputDatePicker((new goog.i18n.DateTimeFormat(date_pattern__$1)),(new goog.i18n.DateTimeParse(date_pattern__$1))));var G__40720_40722 = picker.getDatePicker();G__40720_40722.setUseSimpleNavigationMenu(true);
G__40720_40722.setAllowNone(true);
var G__40721 = picker;G__40721.decorate(el);
G__40721.setDate(init_date);
return G__40721;
});
foundation.test.templates.dashboard_metrics = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Impressions","CPM","Impression Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Engagements","CPE","Engagement Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clicks","CPC","Click Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Retweets","CPRT","Retweet Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Replies","CPR","Reply Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Follows","CPF","Follow Rate"], null)], null);
foundation.test.templates.dashboard_metric = (function dashboard_metric(p__40723){var vec__40732 = p__40723;var metric = cljs.core.nth.call(null,vec__40732,0,null);var cpa = cljs.core.nth.call(null,vec__40732,1,null);var rate = cljs.core.nth.call(null,vec__40732,2,null);var dom40733 = document.createElement("ul");dom40733.className = "list-group";
dom40733.appendChild((function (){var dom40734 = document.createElement("li");dom40734.className = "list-group-item";
if(cljs.core.truth_(metric))
{dom40734.setAttribute("id",metric);
} else
{}
dom40734.appendChild((function (){var dom40735 = document.createElement("h5");dom40735.className = "metric-header list-group-item-heading";
dom40735.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(metric)].join('')));
return dom40735;
})());
return dom40734;
})());
dom40733.appendChild((function (){var dom40736 = document.createElement("li");dom40736.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-cpa")].join('')))
{dom40736.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-cpa")].join(''));
} else
{}
dom40736.appendChild((function (){var dom40737 = document.createElement("small");dom40737.className = "list-group-item-text";
dom40737.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(cpa)].join('')));
return dom40737;
})());
return dom40736;
})());
dom40733.appendChild((function (){var dom40738 = document.createElement("li");dom40738.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-rate")].join('')))
{dom40738.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-rate")].join(''));
} else
{}
dom40738.appendChild((function (){var dom40739 = document.createElement("small");dom40739.className = "list-group-item-text";
dom40739.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(rate)].join('')));
return dom40739;
})());
return dom40738;
})());
return dom40733;
});
foundation.test.templates.dashboard = (function dashboard(id){var dom40758 = document.createElement("div");dom40758.className = "twitter-stats panel panel-default";
if(cljs.core.truth_(id))
{dom40758.setAttribute("id",id);
} else
{}
dom40758.appendChild((function (){var dom40759 = document.createElement("div");dom40759.className = "panel-heading";
dom40759.appendChild((function (){var dom40760 = document.createElement("h1");dom40760.className = "panel-title";
if("resource-id")
{dom40760.setAttribute("id","resource-id");
} else
{}
return dom40760;
})());
dom40759.appendChild((function (){var dom40761 = document.createElement("div");dom40761.className = "form-inline pull-right";
dom40761.appendChild((function (){var dom40762 = document.createElement("div");dom40762.className = "form-group";
dom40762.appendChild((function (){var dom40763 = document.createElement("input");dom40763.className = "form-control date-picker";
dom40763.setAttribute("id","start-time");
if(true)
{dom40763.setAttribute("readonly",true);
} else
{}
return dom40763;
})());
return dom40762;
})());
dom40761.appendChild((function (){var dom40764 = document.createElement("em");if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)))
{dom40764.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)));
} else
{}
dom40764.appendChild(document.createTextNode("to"));
return dom40764;
})());
dom40761.appendChild((function (){var dom40765 = document.createElement("div");dom40765.className = "form-group";
dom40765.appendChild((function (){var dom40766 = document.createElement("input");dom40766.className = "form-control date-picker";
dom40766.setAttribute("id","end-time");
if(true)
{dom40766.setAttribute("readonly",true);
} else
{}
return dom40766;
})());
return dom40765;
})());
dom40761.appendChild((function (){var dom40767 = document.createElement("button");dom40767.className = "btn btn-primary btn-sm";
dom40767.setAttribute("id","update-stats");
dom40767.appendChild(document.createTextNode("Update"));
return dom40767;
})());
return dom40761;
})());
return dom40759;
})());
dom40758.appendChild((function (){var dom40768 = document.createElement("div");dom40768.className = "panel-body";
dom40768.appendChild((function (){var dom40769 = document.createElement("div");dom40769.className = "analytics-highcharts";
return dom40769;
})());
return dom40768;
})());
dom40758.appendChild((function (){var dom40770 = document.createElement("div");dom40770.className = "panel-footer row";
dom40770.appendChild((function (){var dom40771 = document.createElement("div");dom40771.className = "twitter-stats";
dom40771.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8943__auto__ = (function iter__40772(s__40773){return (new cljs.core.LazySeq(null,(function (){var s__40773__$1 = s__40773;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__40773__$1);if(temp__4092__auto__)
{var s__40773__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__40773__$2))
{var c__8941__auto__ = cljs.core.chunk_first.call(null,s__40773__$2);var size__8942__auto__ = cljs.core.count.call(null,c__8941__auto__);var b__40775 = cljs.core.chunk_buffer.call(null,size__8942__auto__);if((function (){var i__40774 = 0;while(true){
if((i__40774 < size__8942__auto__))
{var metric = cljs.core._nth.call(null,c__8941__auto__,i__40774);cljs.core.chunk_append.call(null,b__40775,foundation.test.templates.dashboard_metric.call(null,metric));
{
var G__40776 = (i__40774 + 1);
i__40774 = G__40776;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40775),iter__40772.call(null,cljs.core.chunk_rest.call(null,s__40773__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40775),null);
}
} else
{var metric = cljs.core.first.call(null,s__40773__$2);return cljs.core.cons.call(null,foundation.test.templates.dashboard_metric.call(null,metric),iter__40772.call(null,cljs.core.rest.call(null,s__40773__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8943__auto__.call(null,foundation.test.templates.dashboard_metrics);
})()));
return dom40771;
})());
return dom40770;
})());
return dom40758;
});
foundation.test.templates.datagrid_filter = (function datagrid_filter(){var dom40779 = document.createElement("div");dom40779.className = "autocomplete";
dom40779.appendChild((function (){var dom40780 = document.createElement("input");dom40780.className = "form-control";
if("text")
{dom40780.setAttribute("type","text");
} else
{}
if("What are you looking for?")
{dom40780.setAttribute("placeholder","What are you looking for?");
} else
{}
return dom40780;
})());
return dom40779;
});
foundation.test.templates.datagrid_header = (function datagrid_header(columns){var dom40787 = document.createElement("thead");dom40787.setAttribute("id","datagrid-header");
dom40787.appendChild((function (){var dom40788 = document.createElement("tr");dom40788.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8943__auto__ = (function iter__40789(s__40790){return (new cljs.core.LazySeq(null,(function (){var s__40790__$1 = s__40790;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__40790__$1);if(temp__4092__auto__)
{var s__40790__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__40790__$2))
{var c__8941__auto__ = cljs.core.chunk_first.call(null,s__40790__$2);var size__8942__auto__ = cljs.core.count.call(null,c__8941__auto__);var b__40792 = cljs.core.chunk_buffer.call(null,size__8942__auto__);if((function (){var i__40791 = 0;while(true){
if((i__40791 < size__8942__auto__))
{var col = cljs.core._nth.call(null,c__8941__auto__,i__40791);cljs.core.chunk_append.call(null,b__40792,foundation.cells.th.call(null,col));
{
var G__40793 = (i__40791 + 1);
i__40791 = G__40793;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40792),iter__40789.call(null,cljs.core.chunk_rest.call(null,s__40790__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40792),null);
}
} else
{var col = cljs.core.first.call(null,s__40790__$2);return cljs.core.cons.call(null,foundation.cells.th.call(null,col),iter__40789.call(null,cljs.core.rest.call(null,s__40790__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8943__auto__.call(null,columns);
})()));
return dom40788;
})());
return dom40787;
});
foundation.test.templates.datagrid_row = (function datagrid_row(model,columns){var dom40799 = document.createElement("tr");dom40799.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8943__auto__ = (function iter__40800(s__40801){return (new cljs.core.LazySeq(null,(function (){var s__40801__$1 = s__40801;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__40801__$1);if(temp__4092__auto__)
{var s__40801__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__40801__$2))
{var c__8941__auto__ = cljs.core.chunk_first.call(null,s__40801__$2);var size__8942__auto__ = cljs.core.count.call(null,c__8941__auto__);var b__40803 = cljs.core.chunk_buffer.call(null,size__8942__auto__);if((function (){var i__40802 = 0;while(true){
if((i__40802 < size__8942__auto__))
{var col = cljs.core._nth.call(null,c__8941__auto__,i__40802);cljs.core.chunk_append.call(null,b__40803,foundation.cells.td.call(null,col,model));
{
var G__40804 = (i__40802 + 1);
i__40802 = G__40804;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40803),iter__40800.call(null,cljs.core.chunk_rest.call(null,s__40801__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40803),null);
}
} else
{var col = cljs.core.first.call(null,s__40801__$2);return cljs.core.cons.call(null,foundation.cells.td.call(null,col,model),iter__40800.call(null,cljs.core.rest.call(null,s__40801__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8943__auto__.call(null,columns);
})()));
return dom40799;
});
foundation.test.templates.datagrid_body = (function datagrid_body(coll,columns){var dom40810 = document.createElement("tbody");dom40810.className = "datagrid-tbody";
dom40810.setAttribute("id","datagrid-body");
dom40810.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8943__auto__ = (function iter__40811(s__40812){return (new cljs.core.LazySeq(null,(function (){var s__40812__$1 = s__40812;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__40812__$1);if(temp__4092__auto__)
{var s__40812__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__40812__$2))
{var c__8941__auto__ = cljs.core.chunk_first.call(null,s__40812__$2);var size__8942__auto__ = cljs.core.count.call(null,c__8941__auto__);var b__40814 = cljs.core.chunk_buffer.call(null,size__8942__auto__);if((function (){var i__40813 = 0;while(true){
if((i__40813 < size__8942__auto__))
{var model = cljs.core._nth.call(null,c__8941__auto__,i__40813);cljs.core.chunk_append.call(null,b__40814,foundation.test.templates.datagrid_row.call(null,model,columns));
{
var G__40815 = (i__40813 + 1);
i__40813 = G__40815;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40814),iter__40811.call(null,cljs.core.chunk_rest.call(null,s__40812__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40814),null);
}
} else
{var model = cljs.core.first.call(null,s__40812__$2);return cljs.core.cons.call(null,foundation.test.templates.datagrid_row.call(null,model,columns),iter__40811.call(null,cljs.core.rest.call(null,s__40812__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8943__auto__.call(null,coll);
})()));
return dom40810;
});
foundation.test.templates.datagrid_breadcrumb = (function datagrid_breadcrumb(){var dom40827 = document.createElement("ol");dom40827.className = "breadcrumb";
dom40827.appendChild((function (){var dom40828 = document.createElement("li");dom40828.className = "active";
dom40828.setAttribute("id","account");
dom40828.appendChild((function (){var dom40829 = document.createElement("div");dom40829.className = "arrow-down";
return dom40829;
})());
dom40828.appendChild((function (){var dom40830 = document.createElement("a");dom40830.appendChild(document.createTextNode("Accounts"));
return dom40830;
})());
dom40828.appendChild((function (){var dom40831 = document.createElement("div");dom40831.className = "arrow-up";
return dom40831;
})());
return dom40828;
})());
dom40827.appendChild((function (){var dom40832 = document.createElement("li");dom40832.className = "hidden";
dom40832.setAttribute("id","campaign");
dom40832.appendChild((function (){var dom40833 = document.createElement("a");dom40833.appendChild(document.createTextNode("Campaigns"));
return dom40833;
})());
return dom40832;
})());
dom40827.appendChild((function (){var dom40834 = document.createElement("li");dom40834.className = "hidden";
dom40834.setAttribute("id","line_item");
dom40834.appendChild((function (){var dom40835 = document.createElement("a");dom40835.appendChild(document.createTextNode("Line Items"));
return dom40835;
})());
return dom40834;
})());
dom40827.appendChild((function (){var dom40836 = document.createElement("li");dom40836.className = "hidden";
dom40836.setAttribute("id","promoted_tweet");
dom40836.appendChild((function (){var dom40837 = document.createElement("a");dom40837.appendChild(document.createTextNode("Promoted Products"));
return dom40837;
})());
return dom40836;
})());
return dom40827;
});
foundation.test.templates.datagrid_table = (function datagrid_table(model,coll){return dommy.template.__GT_node_like.call(null,(function (){var cols = foundation.models.columns.call(null,model);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table#datagrid-table.table","table#datagrid-table.table",2230740568),foundation.test.templates.datagrid_header.call(null,cols),foundation.test.templates.datagrid_body.call(null,coll,cols)], null);
})());
});
foundation.test.templates.datagrid = (function datagrid(id){var dom40853 = document.createElement("div");dom40853.className = "datagrid-container panel panel-default";
if(cljs.core.truth_(id))
{dom40853.setAttribute("id",id);
} else
{}
dom40853.appendChild((function (){var dom40854 = document.createElement("div");dom40854.className = "panel-heading";
dom40854.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.templates.datagrid_breadcrumb.call(null)));
dom40854.appendChild((function (){var dom40855 = document.createElement("form");dom40855.className = "form-inline pull-right";
dom40855.appendChild((function (){var dom40856 = document.createElement("div");dom40856.className = "form-group";
dom40856.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.templates.datagrid_filter.call(null)));
return dom40856;
})());
return dom40855;
})());
return dom40854;
})());
dom40853.appendChild((function (){var dom40857 = document.createElement("div");dom40857.className = "panel-body";
return dom40857;
})());
dom40853.appendChild((function (){var dom40858 = document.createElement("div");dom40858.className = "panel-footer";
dom40858.appendChild((function (){var dom40859 = document.createElement("div");dom40859.className = "form-inline";
dom40859.appendChild((function (){var dom40860 = document.createElement("div");dom40860.className = "form-group";
dom40860.appendChild((function (){var dom40861 = document.createElement("button");dom40861.className = "btn btn-success btn-sm";
dom40861.setAttribute("id","new");
dom40861.appendChild(document.createTextNode("New"));
return dom40861;
})());
return dom40860;
})());
dom40859.appendChild((function (){var dom40862 = document.createElement("div");dom40862.className = "form-group";
dom40862.appendChild((function (){var dom40863 = document.createElement("button");dom40863.className = "btn btn-info btn-sm disabled";
dom40863.setAttribute("id","save");
dom40863.appendChild(document.createTextNode("Save"));
return dom40863;
})());
return dom40862;
})());
dom40859.appendChild((function (){var dom40864 = document.createElement("div");dom40864.className = "form-group";
dom40864.appendChild((function (){var dom40865 = document.createElement("button");dom40865.className = "btn btn-danger btn-sm disabled";
dom40865.setAttribute("id","delete");
dom40865.appendChild(document.createTextNode("Delete"));
return dom40865;
})());
return dom40864;
})());
dom40859.appendChild((function (){var dom40866 = document.createElement("div");dom40866.className = "form-group";
dom40866.appendChild((function (){var dom40867 = document.createElement("button");dom40867.className = "btn btn-primary btn-sm disabled";
dom40867.setAttribute("id","dupe");
dom40867.appendChild(document.createTextNode("Duplicate"));
return dom40867;
})());
return dom40866;
})());
return dom40859;
})());
return dom40858;
})());
return dom40853;
});
foundation.test.templates.twitter_power = (function twitter_power(id){var dom40869 = document.createElement("div");if(cljs.core.truth_(id))
{dom40869.setAttribute("id",id);
} else
{}
return dom40869;
});

//# sourceMappingURL=templates.js.map