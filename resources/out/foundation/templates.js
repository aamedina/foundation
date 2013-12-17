// Compiled by ClojureScript 0.0-2120
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
foundation.templates.date_picker = (function date_picker(el,init_date,date_pattern){var date_pattern__$1 = (((date_pattern instanceof cljs.core.Keyword))?date_pattern.call(null,cljs_time.format.formatters):date_pattern);var picker = (new goog.ui.InputDatePicker((new goog.i18n.DateTimeFormat(date_pattern__$1)),(new goog.i18n.DateTimeParse(date_pattern__$1))));var G__352780_352782 = picker.getDatePicker();G__352780_352782.setUseSimpleNavigationMenu(true);
G__352780_352782.setAllowNone(true);
var G__352781 = picker;G__352781.decorate(el);
G__352781.setDate(init_date);
return G__352781;
});
foundation.templates.dashboard_metrics = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Impressions","CPM","Impression Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Engagements","CPE","Engagement Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clicks","CPC","Click Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Retweets","CPRT","Retweet Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Replies","CPR","Reply Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Follows","CPF","Follow Rate"], null)], null);
foundation.templates.dashboard_metric = (function dashboard_metric(p__352783){var vec__352792 = p__352783;var metric = cljs.core.nth.call(null,vec__352792,0,null);var cpa = cljs.core.nth.call(null,vec__352792,1,null);var rate = cljs.core.nth.call(null,vec__352792,2,null);var dom352793 = document.createElement("ul");dom352793.className = "list-group";
dom352793.appendChild((function (){var dom352794 = document.createElement("li");dom352794.className = "list-group-item";
if(cljs.core.truth_(metric))
{dom352794.setAttribute("id",metric);
} else
{}
dom352794.appendChild((function (){var dom352795 = document.createElement("h5");dom352795.className = "metric-header list-group-item-heading";
dom352795.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(metric)].join('')));
return dom352795;
})());
return dom352794;
})());
dom352793.appendChild((function (){var dom352796 = document.createElement("li");dom352796.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-cpa")].join('')))
{dom352796.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-cpa")].join(''));
} else
{}
dom352796.appendChild((function (){var dom352797 = document.createElement("small");dom352797.className = "list-group-item-text";
dom352797.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(cpa)].join('')));
return dom352797;
})());
return dom352796;
})());
dom352793.appendChild((function (){var dom352798 = document.createElement("li");dom352798.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-rate")].join('')))
{dom352798.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-rate")].join(''));
} else
{}
dom352798.appendChild((function (){var dom352799 = document.createElement("small");dom352799.className = "list-group-item-text";
dom352799.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(rate)].join('')));
return dom352799;
})());
return dom352798;
})());
return dom352793;
});
foundation.templates.dashboard = (function dashboard(id){var dom352818 = document.createElement("div");dom352818.className = "twitter-stats panel panel-default";
if(cljs.core.truth_(id))
{dom352818.setAttribute("id",id);
} else
{}
dom352818.appendChild((function (){var dom352819 = document.createElement("div");dom352819.className = "panel-heading";
dom352819.appendChild((function (){var dom352820 = document.createElement("h1");dom352820.className = "panel-title";
if("resource-id")
{dom352820.setAttribute("id","resource-id");
} else
{}
return dom352820;
})());
dom352819.appendChild((function (){var dom352821 = document.createElement("div");dom352821.className = "form-inline pull-right";
dom352821.appendChild((function (){var dom352822 = document.createElement("div");dom352822.className = "form-group";
dom352822.appendChild((function (){var dom352823 = document.createElement("input");dom352823.className = "form-control date-picker";
dom352823.setAttribute("id","start-time");
if(true)
{dom352823.setAttribute("readonly",true);
} else
{}
return dom352823;
})());
return dom352822;
})());
dom352821.appendChild((function (){var dom352824 = document.createElement("em");if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)))
{dom352824.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)));
} else
{}
dom352824.appendChild(document.createTextNode("to"));
return dom352824;
})());
dom352821.appendChild((function (){var dom352825 = document.createElement("div");dom352825.className = "form-group";
dom352825.appendChild((function (){var dom352826 = document.createElement("input");dom352826.className = "form-control date-picker";
dom352826.setAttribute("id","end-time");
if(true)
{dom352826.setAttribute("readonly",true);
} else
{}
return dom352826;
})());
return dom352825;
})());
dom352821.appendChild((function (){var dom352827 = document.createElement("button");dom352827.className = "btn btn-primary btn-sm";
dom352827.setAttribute("id","update-stats");
dom352827.appendChild(document.createTextNode("Update"));
return dom352827;
})());
return dom352821;
})());
return dom352819;
})());
dom352818.appendChild((function (){var dom352828 = document.createElement("div");dom352828.className = "panel-body";
dom352828.appendChild((function (){var dom352829 = document.createElement("div");dom352829.className = "analytics-highcharts";
return dom352829;
})());
return dom352828;
})());
dom352818.appendChild((function (){var dom352830 = document.createElement("div");dom352830.className = "panel-footer row";
dom352830.appendChild((function (){var dom352831 = document.createElement("div");dom352831.className = "twitter-stats";
dom352831.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14677__auto__ = (function iter__352832(s__352833){return (new cljs.core.LazySeq(null,(function (){var s__352833__$1 = s__352833;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__352833__$1);if(temp__4092__auto__)
{var s__352833__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__352833__$2))
{var c__14675__auto__ = cljs.core.chunk_first.call(null,s__352833__$2);var size__14676__auto__ = cljs.core.count.call(null,c__14675__auto__);var b__352835 = cljs.core.chunk_buffer.call(null,size__14676__auto__);if((function (){var i__352834 = 0;while(true){
if((i__352834 < size__14676__auto__))
{var metric = cljs.core._nth.call(null,c__14675__auto__,i__352834);cljs.core.chunk_append.call(null,b__352835,foundation.templates.dashboard_metric.call(null,metric));
{
var G__352836 = (i__352834 + 1);
i__352834 = G__352836;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__352835),iter__352832.call(null,cljs.core.chunk_rest.call(null,s__352833__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__352835),null);
}
} else
{var metric = cljs.core.first.call(null,s__352833__$2);return cljs.core.cons.call(null,foundation.templates.dashboard_metric.call(null,metric),iter__352832.call(null,cljs.core.rest.call(null,s__352833__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14677__auto__.call(null,foundation.templates.dashboard_metrics);
})()));
return dom352831;
})());
return dom352830;
})());
return dom352818;
});
foundation.templates.datagrid_filter = (function datagrid_filter(){var dom352839 = document.createElement("div");dom352839.className = "autocomplete";
dom352839.appendChild((function (){var dom352840 = document.createElement("input");dom352840.className = "form-control";
if("text")
{dom352840.setAttribute("type","text");
} else
{}
if("What are you looking for?")
{dom352840.setAttribute("placeholder","What are you looking for?");
} else
{}
return dom352840;
})());
return dom352839;
});
foundation.templates.datagrid_header = (function datagrid_header(columns){var dom352847 = document.createElement("thead");dom352847.setAttribute("id","datagrid-header");
dom352847.appendChild((function (){var dom352848 = document.createElement("tr");dom352848.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14677__auto__ = (function iter__352849(s__352850){return (new cljs.core.LazySeq(null,(function (){var s__352850__$1 = s__352850;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__352850__$1);if(temp__4092__auto__)
{var s__352850__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__352850__$2))
{var c__14675__auto__ = cljs.core.chunk_first.call(null,s__352850__$2);var size__14676__auto__ = cljs.core.count.call(null,c__14675__auto__);var b__352852 = cljs.core.chunk_buffer.call(null,size__14676__auto__);if((function (){var i__352851 = 0;while(true){
if((i__352851 < size__14676__auto__))
{var col = cljs.core._nth.call(null,c__14675__auto__,i__352851);cljs.core.chunk_append.call(null,b__352852,foundation.cells.th.call(null,col));
{
var G__352853 = (i__352851 + 1);
i__352851 = G__352853;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__352852),iter__352849.call(null,cljs.core.chunk_rest.call(null,s__352850__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__352852),null);
}
} else
{var col = cljs.core.first.call(null,s__352850__$2);return cljs.core.cons.call(null,foundation.cells.th.call(null,col),iter__352849.call(null,cljs.core.rest.call(null,s__352850__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14677__auto__.call(null,columns);
})()));
return dom352848;
})());
return dom352847;
});
foundation.templates.datagrid_row = (function datagrid_row(model,columns){var dom352859 = document.createElement("tr");dom352859.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14677__auto__ = (function iter__352860(s__352861){return (new cljs.core.LazySeq(null,(function (){var s__352861__$1 = s__352861;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__352861__$1);if(temp__4092__auto__)
{var s__352861__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__352861__$2))
{var c__14675__auto__ = cljs.core.chunk_first.call(null,s__352861__$2);var size__14676__auto__ = cljs.core.count.call(null,c__14675__auto__);var b__352863 = cljs.core.chunk_buffer.call(null,size__14676__auto__);if((function (){var i__352862 = 0;while(true){
if((i__352862 < size__14676__auto__))
{var col = cljs.core._nth.call(null,c__14675__auto__,i__352862);cljs.core.chunk_append.call(null,b__352863,foundation.cells.td.call(null,col,model));
{
var G__352864 = (i__352862 + 1);
i__352862 = G__352864;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__352863),iter__352860.call(null,cljs.core.chunk_rest.call(null,s__352861__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__352863),null);
}
} else
{var col = cljs.core.first.call(null,s__352861__$2);return cljs.core.cons.call(null,foundation.cells.td.call(null,col,model),iter__352860.call(null,cljs.core.rest.call(null,s__352861__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14677__auto__.call(null,columns);
})()));
return dom352859;
});
foundation.templates.datagrid_body = (function datagrid_body(coll,columns){var dom352870 = document.createElement("tbody");dom352870.className = "datagrid-tbody";
dom352870.setAttribute("id","datagrid-body");
dom352870.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14677__auto__ = (function iter__352871(s__352872){return (new cljs.core.LazySeq(null,(function (){var s__352872__$1 = s__352872;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__352872__$1);if(temp__4092__auto__)
{var s__352872__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__352872__$2))
{var c__14675__auto__ = cljs.core.chunk_first.call(null,s__352872__$2);var size__14676__auto__ = cljs.core.count.call(null,c__14675__auto__);var b__352874 = cljs.core.chunk_buffer.call(null,size__14676__auto__);if((function (){var i__352873 = 0;while(true){
if((i__352873 < size__14676__auto__))
{var model = cljs.core._nth.call(null,c__14675__auto__,i__352873);cljs.core.chunk_append.call(null,b__352874,foundation.templates.datagrid_row.call(null,model,columns));
{
var G__352875 = (i__352873 + 1);
i__352873 = G__352875;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__352874),iter__352871.call(null,cljs.core.chunk_rest.call(null,s__352872__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__352874),null);
}
} else
{var model = cljs.core.first.call(null,s__352872__$2);return cljs.core.cons.call(null,foundation.templates.datagrid_row.call(null,model,columns),iter__352871.call(null,cljs.core.rest.call(null,s__352872__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14677__auto__.call(null,coll);
})()));
return dom352870;
});
foundation.templates.datagrid_breadcrumb = (function datagrid_breadcrumb(){var dom352887 = document.createElement("ol");dom352887.className = "breadcrumb";
dom352887.appendChild((function (){var dom352888 = document.createElement("li");dom352888.className = "active";
dom352888.setAttribute("id","account");
dom352888.appendChild((function (){var dom352889 = document.createElement("div");dom352889.className = "arrow-down";
return dom352889;
})());
dom352888.appendChild((function (){var dom352890 = document.createElement("a");dom352890.appendChild(document.createTextNode("Accounts"));
return dom352890;
})());
dom352888.appendChild((function (){var dom352891 = document.createElement("div");dom352891.className = "arrow-up";
return dom352891;
})());
return dom352888;
})());
dom352887.appendChild((function (){var dom352892 = document.createElement("li");dom352892.className = "hidden";
dom352892.setAttribute("id","campaign");
dom352892.appendChild((function (){var dom352893 = document.createElement("a");dom352893.appendChild(document.createTextNode("Campaigns"));
return dom352893;
})());
return dom352892;
})());
dom352887.appendChild((function (){var dom352894 = document.createElement("li");dom352894.className = "hidden";
dom352894.setAttribute("id","line_item");
dom352894.appendChild((function (){var dom352895 = document.createElement("a");dom352895.appendChild(document.createTextNode("Line Items"));
return dom352895;
})());
return dom352894;
})());
dom352887.appendChild((function (){var dom352896 = document.createElement("li");dom352896.className = "hidden";
dom352896.setAttribute("id","promoted_tweet");
dom352896.appendChild((function (){var dom352897 = document.createElement("a");dom352897.appendChild(document.createTextNode("Promoted Products"));
return dom352897;
})());
return dom352896;
})());
return dom352887;
});
foundation.templates.datagrid_table = (function datagrid_table(model,coll){return dommy.template.__GT_node_like.call(null,(function (){var cols = foundation.models.columns.call(null,model);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table#datagrid-table.table","table#datagrid-table.table",2230740568),foundation.templates.datagrid_header.call(null,cols),foundation.templates.datagrid_body.call(null,coll,cols)], null);
})());
});
foundation.templates.datagrid = (function datagrid(id){var dom352913 = document.createElement("div");dom352913.className = "datagrid-container panel panel-default";
if(cljs.core.truth_(id))
{dom352913.setAttribute("id",id);
} else
{}
dom352913.appendChild((function (){var dom352914 = document.createElement("div");dom352914.className = "panel-heading";
dom352914.appendChild(dommy.template.__GT_node_like.call(null,foundation.templates.datagrid_breadcrumb.call(null)));
dom352914.appendChild((function (){var dom352915 = document.createElement("form");dom352915.className = "form-inline pull-right";
dom352915.appendChild((function (){var dom352916 = document.createElement("div");dom352916.className = "form-group";
dom352916.appendChild(dommy.template.__GT_node_like.call(null,foundation.templates.datagrid_filter.call(null)));
return dom352916;
})());
return dom352915;
})());
return dom352914;
})());
dom352913.appendChild((function (){var dom352917 = document.createElement("div");dom352917.className = "panel-body";
return dom352917;
})());
dom352913.appendChild((function (){var dom352918 = document.createElement("div");dom352918.className = "panel-footer";
dom352918.appendChild((function (){var dom352919 = document.createElement("div");dom352919.className = "form-inline";
dom352919.appendChild((function (){var dom352920 = document.createElement("div");dom352920.className = "form-group";
dom352920.appendChild((function (){var dom352921 = document.createElement("button");dom352921.className = "btn btn-success btn-sm";
dom352921.setAttribute("id","new");
dom352921.appendChild(document.createTextNode("New"));
return dom352921;
})());
return dom352920;
})());
dom352919.appendChild((function (){var dom352922 = document.createElement("div");dom352922.className = "form-group";
dom352922.appendChild((function (){var dom352923 = document.createElement("button");dom352923.className = "btn btn-info btn-sm disabled";
dom352923.setAttribute("id","save");
dom352923.appendChild(document.createTextNode("Save"));
return dom352923;
})());
return dom352922;
})());
dom352919.appendChild((function (){var dom352924 = document.createElement("div");dom352924.className = "form-group";
dom352924.appendChild((function (){var dom352925 = document.createElement("button");dom352925.className = "btn btn-danger btn-sm disabled";
dom352925.setAttribute("id","delete");
dom352925.appendChild(document.createTextNode("Delete"));
return dom352925;
})());
return dom352924;
})());
dom352919.appendChild((function (){var dom352926 = document.createElement("div");dom352926.className = "form-group";
dom352926.appendChild((function (){var dom352927 = document.createElement("button");dom352927.className = "btn btn-primary btn-sm disabled";
dom352927.setAttribute("id","dupe");
dom352927.appendChild(document.createTextNode("Duplicate"));
return dom352927;
})());
return dom352926;
})());
return dom352919;
})());
return dom352918;
})());
return dom352913;
});
foundation.templates.twitter_power = (function twitter_power(id){var dom352929 = document.createElement("div");if(cljs.core.truth_(id))
{dom352929.setAttribute("id",id);
} else
{}
return dom352929;
});

//# sourceMappingURL=templates.js.map