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
foundation.templates.date_picker = (function date_picker(el,init_date,date_pattern){var date_pattern__$1 = (((date_pattern instanceof cljs.core.Keyword))?date_pattern.call(null,cljs_time.format.formatters):date_pattern);var picker = (new goog.ui.InputDatePicker((new goog.i18n.DateTimeFormat(date_pattern__$1)),(new goog.i18n.DateTimeParse(date_pattern__$1))));var G__379823_379825 = picker.getDatePicker();G__379823_379825.setUseSimpleNavigationMenu(true);
G__379823_379825.setAllowNone(true);
var G__379824 = picker;G__379824.decorate(el);
G__379824.setDate(init_date);
return G__379824;
});
foundation.templates.dashboard_metrics = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Impressions","CPM","Impression Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Engagements","CPE","Engagement Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clicks","CPC","Click Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Retweets","CPRT","Retweet Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Replies","CPR","Reply Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Follows","CPF","Follow Rate"], null)], null);
foundation.templates.dashboard_metric = (function dashboard_metric(p__379826){var vec__379835 = p__379826;var metric = cljs.core.nth.call(null,vec__379835,0,null);var cpa = cljs.core.nth.call(null,vec__379835,1,null);var rate = cljs.core.nth.call(null,vec__379835,2,null);var dom379836 = document.createElement("ul");dom379836.className = "list-group";
dom379836.appendChild((function (){var dom379837 = document.createElement("li");dom379837.className = "list-group-item";
if(cljs.core.truth_(metric))
{dom379837.setAttribute("id",metric);
} else
{}
dom379837.appendChild((function (){var dom379838 = document.createElement("h5");dom379838.className = "metric-header list-group-item-heading";
dom379838.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(metric)].join('')));
return dom379838;
})());
return dom379837;
})());
dom379836.appendChild((function (){var dom379839 = document.createElement("li");dom379839.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-cpa")].join('')))
{dom379839.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-cpa")].join(''));
} else
{}
dom379839.appendChild((function (){var dom379840 = document.createElement("small");dom379840.className = "list-group-item-text";
dom379840.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(cpa)].join('')));
return dom379840;
})());
return dom379839;
})());
dom379836.appendChild((function (){var dom379841 = document.createElement("li");dom379841.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-rate")].join('')))
{dom379841.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-rate")].join(''));
} else
{}
dom379841.appendChild((function (){var dom379842 = document.createElement("small");dom379842.className = "list-group-item-text";
dom379842.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(rate)].join('')));
return dom379842;
})());
return dom379841;
})());
return dom379836;
});
foundation.templates.dashboard = (function dashboard(id){var dom379861 = document.createElement("div");dom379861.className = "twitter-stats panel panel-default";
if(cljs.core.truth_(id))
{dom379861.setAttribute("id",id);
} else
{}
dom379861.appendChild((function (){var dom379862 = document.createElement("div");dom379862.className = "panel-heading";
dom379862.appendChild((function (){var dom379863 = document.createElement("h1");dom379863.className = "panel-title";
if("resource-id")
{dom379863.setAttribute("id","resource-id");
} else
{}
return dom379863;
})());
dom379862.appendChild((function (){var dom379864 = document.createElement("div");dom379864.className = "form-inline pull-right";
dom379864.appendChild((function (){var dom379865 = document.createElement("div");dom379865.className = "form-group";
dom379865.appendChild((function (){var dom379866 = document.createElement("input");dom379866.className = "form-control date-picker";
dom379866.setAttribute("id","start-time");
if(true)
{dom379866.setAttribute("readonly",true);
} else
{}
return dom379866;
})());
return dom379865;
})());
dom379864.appendChild((function (){var dom379867 = document.createElement("em");if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)))
{dom379867.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)));
} else
{}
dom379867.appendChild(document.createTextNode("to"));
return dom379867;
})());
dom379864.appendChild((function (){var dom379868 = document.createElement("div");dom379868.className = "form-group";
dom379868.appendChild((function (){var dom379869 = document.createElement("input");dom379869.className = "form-control date-picker";
dom379869.setAttribute("id","end-time");
if(true)
{dom379869.setAttribute("readonly",true);
} else
{}
return dom379869;
})());
return dom379868;
})());
dom379864.appendChild((function (){var dom379870 = document.createElement("button");dom379870.className = "btn btn-primary btn-sm";
dom379870.setAttribute("id","update-stats");
dom379870.appendChild(document.createTextNode("Update"));
return dom379870;
})());
return dom379864;
})());
return dom379862;
})());
dom379861.appendChild((function (){var dom379871 = document.createElement("div");dom379871.className = "panel-body";
dom379871.appendChild((function (){var dom379872 = document.createElement("div");dom379872.className = "analytics-highcharts";
return dom379872;
})());
return dom379871;
})());
dom379861.appendChild((function (){var dom379873 = document.createElement("div");dom379873.className = "panel-footer row";
dom379873.appendChild((function (){var dom379874 = document.createElement("div");dom379874.className = "twitter-stats";
dom379874.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14677__auto__ = (function iter__379875(s__379876){return (new cljs.core.LazySeq(null,(function (){var s__379876__$1 = s__379876;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__379876__$1);if(temp__4092__auto__)
{var s__379876__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__379876__$2))
{var c__14675__auto__ = cljs.core.chunk_first.call(null,s__379876__$2);var size__14676__auto__ = cljs.core.count.call(null,c__14675__auto__);var b__379878 = cljs.core.chunk_buffer.call(null,size__14676__auto__);if((function (){var i__379877 = 0;while(true){
if((i__379877 < size__14676__auto__))
{var metric = cljs.core._nth.call(null,c__14675__auto__,i__379877);cljs.core.chunk_append.call(null,b__379878,foundation.templates.dashboard_metric.call(null,metric));
{
var G__379879 = (i__379877 + 1);
i__379877 = G__379879;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__379878),iter__379875.call(null,cljs.core.chunk_rest.call(null,s__379876__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__379878),null);
}
} else
{var metric = cljs.core.first.call(null,s__379876__$2);return cljs.core.cons.call(null,foundation.templates.dashboard_metric.call(null,metric),iter__379875.call(null,cljs.core.rest.call(null,s__379876__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14677__auto__.call(null,foundation.templates.dashboard_metrics);
})()));
return dom379874;
})());
return dom379873;
})());
return dom379861;
});
foundation.templates.datagrid_filter = (function datagrid_filter(){var dom379882 = document.createElement("div");dom379882.className = "autocomplete";
dom379882.appendChild((function (){var dom379883 = document.createElement("input");dom379883.className = "form-control";
if("text")
{dom379883.setAttribute("type","text");
} else
{}
if("What are you looking for?")
{dom379883.setAttribute("placeholder","What are you looking for?");
} else
{}
return dom379883;
})());
return dom379882;
});
foundation.templates.datagrid_header = (function datagrid_header(columns){var dom379890 = document.createElement("thead");dom379890.setAttribute("id","datagrid-header");
dom379890.appendChild((function (){var dom379891 = document.createElement("tr");dom379891.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14677__auto__ = (function iter__379892(s__379893){return (new cljs.core.LazySeq(null,(function (){var s__379893__$1 = s__379893;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__379893__$1);if(temp__4092__auto__)
{var s__379893__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__379893__$2))
{var c__14675__auto__ = cljs.core.chunk_first.call(null,s__379893__$2);var size__14676__auto__ = cljs.core.count.call(null,c__14675__auto__);var b__379895 = cljs.core.chunk_buffer.call(null,size__14676__auto__);if((function (){var i__379894 = 0;while(true){
if((i__379894 < size__14676__auto__))
{var col = cljs.core._nth.call(null,c__14675__auto__,i__379894);cljs.core.chunk_append.call(null,b__379895,foundation.cells.th.call(null,col));
{
var G__379896 = (i__379894 + 1);
i__379894 = G__379896;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__379895),iter__379892.call(null,cljs.core.chunk_rest.call(null,s__379893__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__379895),null);
}
} else
{var col = cljs.core.first.call(null,s__379893__$2);return cljs.core.cons.call(null,foundation.cells.th.call(null,col),iter__379892.call(null,cljs.core.rest.call(null,s__379893__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14677__auto__.call(null,columns);
})()));
return dom379891;
})());
return dom379890;
});
foundation.templates.datagrid_row = (function datagrid_row(model,columns){var dom379902 = document.createElement("tr");dom379902.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14677__auto__ = (function iter__379903(s__379904){return (new cljs.core.LazySeq(null,(function (){var s__379904__$1 = s__379904;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__379904__$1);if(temp__4092__auto__)
{var s__379904__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__379904__$2))
{var c__14675__auto__ = cljs.core.chunk_first.call(null,s__379904__$2);var size__14676__auto__ = cljs.core.count.call(null,c__14675__auto__);var b__379906 = cljs.core.chunk_buffer.call(null,size__14676__auto__);if((function (){var i__379905 = 0;while(true){
if((i__379905 < size__14676__auto__))
{var col = cljs.core._nth.call(null,c__14675__auto__,i__379905);cljs.core.chunk_append.call(null,b__379906,foundation.cells.td.call(null,col,model));
{
var G__379907 = (i__379905 + 1);
i__379905 = G__379907;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__379906),iter__379903.call(null,cljs.core.chunk_rest.call(null,s__379904__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__379906),null);
}
} else
{var col = cljs.core.first.call(null,s__379904__$2);return cljs.core.cons.call(null,foundation.cells.td.call(null,col,model),iter__379903.call(null,cljs.core.rest.call(null,s__379904__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14677__auto__.call(null,columns);
})()));
return dom379902;
});
foundation.templates.datagrid_body = (function datagrid_body(coll,columns){var dom379913 = document.createElement("tbody");dom379913.className = "datagrid-tbody";
dom379913.setAttribute("id","datagrid-body");
dom379913.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14677__auto__ = (function iter__379914(s__379915){return (new cljs.core.LazySeq(null,(function (){var s__379915__$1 = s__379915;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__379915__$1);if(temp__4092__auto__)
{var s__379915__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__379915__$2))
{var c__14675__auto__ = cljs.core.chunk_first.call(null,s__379915__$2);var size__14676__auto__ = cljs.core.count.call(null,c__14675__auto__);var b__379917 = cljs.core.chunk_buffer.call(null,size__14676__auto__);if((function (){var i__379916 = 0;while(true){
if((i__379916 < size__14676__auto__))
{var model = cljs.core._nth.call(null,c__14675__auto__,i__379916);cljs.core.chunk_append.call(null,b__379917,foundation.templates.datagrid_row.call(null,model,columns));
{
var G__379918 = (i__379916 + 1);
i__379916 = G__379918;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__379917),iter__379914.call(null,cljs.core.chunk_rest.call(null,s__379915__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__379917),null);
}
} else
{var model = cljs.core.first.call(null,s__379915__$2);return cljs.core.cons.call(null,foundation.templates.datagrid_row.call(null,model,columns),iter__379914.call(null,cljs.core.rest.call(null,s__379915__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14677__auto__.call(null,coll);
})()));
return dom379913;
});
foundation.templates.datagrid_breadcrumb = (function datagrid_breadcrumb(){var dom379930 = document.createElement("ol");dom379930.className = "breadcrumb";
dom379930.appendChild((function (){var dom379931 = document.createElement("li");dom379931.className = "active";
dom379931.setAttribute("id","account");
dom379931.appendChild((function (){var dom379932 = document.createElement("div");dom379932.className = "arrow-down";
return dom379932;
})());
dom379931.appendChild((function (){var dom379933 = document.createElement("a");dom379933.appendChild(document.createTextNode("Accounts"));
return dom379933;
})());
dom379931.appendChild((function (){var dom379934 = document.createElement("div");dom379934.className = "arrow-up";
return dom379934;
})());
return dom379931;
})());
dom379930.appendChild((function (){var dom379935 = document.createElement("li");dom379935.className = "hidden";
dom379935.setAttribute("id","campaign");
dom379935.appendChild((function (){var dom379936 = document.createElement("a");dom379936.appendChild(document.createTextNode("Campaigns"));
return dom379936;
})());
return dom379935;
})());
dom379930.appendChild((function (){var dom379937 = document.createElement("li");dom379937.className = "hidden";
dom379937.setAttribute("id","line_item");
dom379937.appendChild((function (){var dom379938 = document.createElement("a");dom379938.appendChild(document.createTextNode("Line Items"));
return dom379938;
})());
return dom379937;
})());
dom379930.appendChild((function (){var dom379939 = document.createElement("li");dom379939.className = "hidden";
dom379939.setAttribute("id","promoted_tweet");
dom379939.appendChild((function (){var dom379940 = document.createElement("a");dom379940.appendChild(document.createTextNode("Promoted Products"));
return dom379940;
})());
return dom379939;
})());
return dom379930;
});
foundation.templates.datagrid_table = (function datagrid_table(model,coll){return dommy.template.__GT_node_like.call(null,(function (){var cols = foundation.models.columns.call(null,model);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table#datagrid-table.table","table#datagrid-table.table",2230740568),foundation.templates.datagrid_header.call(null,cols),foundation.templates.datagrid_body.call(null,coll,cols)], null);
})());
});
foundation.templates.datagrid = (function datagrid(id){var dom379956 = document.createElement("div");dom379956.className = "datagrid-container panel panel-default";
if(cljs.core.truth_(id))
{dom379956.setAttribute("id",id);
} else
{}
dom379956.appendChild((function (){var dom379957 = document.createElement("div");dom379957.className = "panel-heading";
dom379957.appendChild(dommy.template.__GT_node_like.call(null,foundation.templates.datagrid_breadcrumb.call(null)));
dom379957.appendChild((function (){var dom379958 = document.createElement("form");dom379958.className = "form-inline pull-right";
dom379958.appendChild((function (){var dom379959 = document.createElement("div");dom379959.className = "form-group";
dom379959.appendChild(dommy.template.__GT_node_like.call(null,foundation.templates.datagrid_filter.call(null)));
return dom379959;
})());
return dom379958;
})());
return dom379957;
})());
dom379956.appendChild((function (){var dom379960 = document.createElement("div");dom379960.className = "panel-body";
return dom379960;
})());
dom379956.appendChild((function (){var dom379961 = document.createElement("div");dom379961.className = "panel-footer";
dom379961.appendChild((function (){var dom379962 = document.createElement("div");dom379962.className = "form-inline";
dom379962.appendChild((function (){var dom379963 = document.createElement("div");dom379963.className = "form-group";
dom379963.appendChild((function (){var dom379964 = document.createElement("button");dom379964.className = "btn btn-success btn-sm";
dom379964.setAttribute("id","new");
dom379964.appendChild(document.createTextNode("New"));
return dom379964;
})());
return dom379963;
})());
dom379962.appendChild((function (){var dom379965 = document.createElement("div");dom379965.className = "form-group";
dom379965.appendChild((function (){var dom379966 = document.createElement("button");dom379966.className = "btn btn-info btn-sm disabled";
dom379966.setAttribute("id","save");
dom379966.appendChild(document.createTextNode("Save"));
return dom379966;
})());
return dom379965;
})());
dom379962.appendChild((function (){var dom379967 = document.createElement("div");dom379967.className = "form-group";
dom379967.appendChild((function (){var dom379968 = document.createElement("button");dom379968.className = "btn btn-danger btn-sm disabled";
dom379968.setAttribute("id","delete");
dom379968.appendChild(document.createTextNode("Delete"));
return dom379968;
})());
return dom379967;
})());
dom379962.appendChild((function (){var dom379969 = document.createElement("div");dom379969.className = "form-group";
dom379969.appendChild((function (){var dom379970 = document.createElement("button");dom379970.className = "btn btn-primary btn-sm disabled";
dom379970.setAttribute("id","dupe");
dom379970.appendChild(document.createTextNode("Duplicate"));
return dom379970;
})());
return dom379969;
})());
return dom379962;
})());
return dom379961;
})());
return dom379956;
});
foundation.templates.twitter_power = (function twitter_power(id){var dom379972 = document.createElement("div");if(cljs.core.truth_(id))
{dom379972.setAttribute("id",id);
} else
{}
return dom379972;
});

//# sourceMappingURL=templates.js.map