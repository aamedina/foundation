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
foundation.templates.date_picker = (function date_picker(el,init_date,date_pattern){var date_pattern__$1 = (((date_pattern instanceof cljs.core.Keyword))?date_pattern.call(null,cljs_time.format.formatters):date_pattern);var picker = (new goog.ui.InputDatePicker((new goog.i18n.DateTimeFormat(date_pattern__$1)),(new goog.i18n.DateTimeParse(date_pattern__$1))));var G__371020_371022 = picker.getDatePicker();G__371020_371022.setUseSimpleNavigationMenu(true);
G__371020_371022.setAllowNone(true);
var G__371021 = picker;G__371021.decorate(el);
G__371021.setDate(init_date);
return G__371021;
});
foundation.templates.dashboard_metrics = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Impressions","CPM","Impression Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Engagements","CPE","Engagement Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clicks","CPC","Click Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Retweets","CPRT","Retweet Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Replies","CPR","Reply Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Follows","CPF","Follow Rate"], null)], null);
foundation.templates.dashboard_metric = (function dashboard_metric(p__371023){var vec__371032 = p__371023;var metric = cljs.core.nth.call(null,vec__371032,0,null);var cpa = cljs.core.nth.call(null,vec__371032,1,null);var rate = cljs.core.nth.call(null,vec__371032,2,null);var dom371033 = document.createElement("ul");dom371033.className = "list-group";
dom371033.appendChild((function (){var dom371034 = document.createElement("li");dom371034.className = "list-group-item";
if(cljs.core.truth_(metric))
{dom371034.setAttribute("id",metric);
} else
{}
dom371034.appendChild((function (){var dom371035 = document.createElement("h5");dom371035.className = "metric-header list-group-item-heading";
dom371035.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(metric)].join('')));
return dom371035;
})());
return dom371034;
})());
dom371033.appendChild((function (){var dom371036 = document.createElement("li");dom371036.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-cpa")].join('')))
{dom371036.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-cpa")].join(''));
} else
{}
dom371036.appendChild((function (){var dom371037 = document.createElement("small");dom371037.className = "list-group-item-text";
dom371037.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(cpa)].join('')));
return dom371037;
})());
return dom371036;
})());
dom371033.appendChild((function (){var dom371038 = document.createElement("li");dom371038.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-rate")].join('')))
{dom371038.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-rate")].join(''));
} else
{}
dom371038.appendChild((function (){var dom371039 = document.createElement("small");dom371039.className = "list-group-item-text";
dom371039.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(rate)].join('')));
return dom371039;
})());
return dom371038;
})());
return dom371033;
});
foundation.templates.dashboard = (function dashboard(id){var dom371058 = document.createElement("div");dom371058.className = "twitter-stats panel panel-default";
if(cljs.core.truth_(id))
{dom371058.setAttribute("id",id);
} else
{}
dom371058.appendChild((function (){var dom371059 = document.createElement("div");dom371059.className = "panel-heading";
dom371059.appendChild((function (){var dom371060 = document.createElement("h1");dom371060.className = "panel-title";
if("resource-id")
{dom371060.setAttribute("id","resource-id");
} else
{}
return dom371060;
})());
dom371059.appendChild((function (){var dom371061 = document.createElement("div");dom371061.className = "form-inline pull-right";
dom371061.appendChild((function (){var dom371062 = document.createElement("div");dom371062.className = "form-group";
dom371062.appendChild((function (){var dom371063 = document.createElement("input");dom371063.className = "form-control date-picker";
dom371063.setAttribute("id","start-time");
if(true)
{dom371063.setAttribute("readonly",true);
} else
{}
return dom371063;
})());
return dom371062;
})());
dom371061.appendChild((function (){var dom371064 = document.createElement("em");if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)))
{dom371064.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)));
} else
{}
dom371064.appendChild(document.createTextNode("to"));
return dom371064;
})());
dom371061.appendChild((function (){var dom371065 = document.createElement("div");dom371065.className = "form-group";
dom371065.appendChild((function (){var dom371066 = document.createElement("input");dom371066.className = "form-control date-picker";
dom371066.setAttribute("id","end-time");
if(true)
{dom371066.setAttribute("readonly",true);
} else
{}
return dom371066;
})());
return dom371065;
})());
dom371061.appendChild((function (){var dom371067 = document.createElement("button");dom371067.className = "btn btn-primary btn-sm";
dom371067.setAttribute("id","update-stats");
dom371067.appendChild(document.createTextNode("Update"));
return dom371067;
})());
return dom371061;
})());
return dom371059;
})());
dom371058.appendChild((function (){var dom371068 = document.createElement("div");dom371068.className = "panel-body";
dom371068.appendChild((function (){var dom371069 = document.createElement("div");dom371069.className = "analytics-highcharts";
return dom371069;
})());
return dom371068;
})());
dom371058.appendChild((function (){var dom371070 = document.createElement("div");dom371070.className = "panel-footer row";
dom371070.appendChild((function (){var dom371071 = document.createElement("div");dom371071.className = "twitter-stats";
dom371071.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14677__auto__ = (function iter__371072(s__371073){return (new cljs.core.LazySeq(null,(function (){var s__371073__$1 = s__371073;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__371073__$1);if(temp__4092__auto__)
{var s__371073__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__371073__$2))
{var c__14675__auto__ = cljs.core.chunk_first.call(null,s__371073__$2);var size__14676__auto__ = cljs.core.count.call(null,c__14675__auto__);var b__371075 = cljs.core.chunk_buffer.call(null,size__14676__auto__);if((function (){var i__371074 = 0;while(true){
if((i__371074 < size__14676__auto__))
{var metric = cljs.core._nth.call(null,c__14675__auto__,i__371074);cljs.core.chunk_append.call(null,b__371075,foundation.templates.dashboard_metric.call(null,metric));
{
var G__371076 = (i__371074 + 1);
i__371074 = G__371076;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__371075),iter__371072.call(null,cljs.core.chunk_rest.call(null,s__371073__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__371075),null);
}
} else
{var metric = cljs.core.first.call(null,s__371073__$2);return cljs.core.cons.call(null,foundation.templates.dashboard_metric.call(null,metric),iter__371072.call(null,cljs.core.rest.call(null,s__371073__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14677__auto__.call(null,foundation.templates.dashboard_metrics);
})()));
return dom371071;
})());
return dom371070;
})());
return dom371058;
});
foundation.templates.datagrid_filter = (function datagrid_filter(){var dom371079 = document.createElement("div");dom371079.className = "autocomplete";
dom371079.appendChild((function (){var dom371080 = document.createElement("input");dom371080.className = "form-control";
if("text")
{dom371080.setAttribute("type","text");
} else
{}
if("What are you looking for?")
{dom371080.setAttribute("placeholder","What are you looking for?");
} else
{}
return dom371080;
})());
return dom371079;
});
foundation.templates.datagrid_header = (function datagrid_header(columns){var dom371087 = document.createElement("thead");dom371087.setAttribute("id","datagrid-header");
dom371087.appendChild((function (){var dom371088 = document.createElement("tr");dom371088.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14677__auto__ = (function iter__371089(s__371090){return (new cljs.core.LazySeq(null,(function (){var s__371090__$1 = s__371090;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__371090__$1);if(temp__4092__auto__)
{var s__371090__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__371090__$2))
{var c__14675__auto__ = cljs.core.chunk_first.call(null,s__371090__$2);var size__14676__auto__ = cljs.core.count.call(null,c__14675__auto__);var b__371092 = cljs.core.chunk_buffer.call(null,size__14676__auto__);if((function (){var i__371091 = 0;while(true){
if((i__371091 < size__14676__auto__))
{var col = cljs.core._nth.call(null,c__14675__auto__,i__371091);cljs.core.chunk_append.call(null,b__371092,foundation.cells.th.call(null,col));
{
var G__371093 = (i__371091 + 1);
i__371091 = G__371093;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__371092),iter__371089.call(null,cljs.core.chunk_rest.call(null,s__371090__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__371092),null);
}
} else
{var col = cljs.core.first.call(null,s__371090__$2);return cljs.core.cons.call(null,foundation.cells.th.call(null,col),iter__371089.call(null,cljs.core.rest.call(null,s__371090__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14677__auto__.call(null,columns);
})()));
return dom371088;
})());
return dom371087;
});
foundation.templates.datagrid_row = (function datagrid_row(model,columns){var dom371099 = document.createElement("tr");dom371099.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14677__auto__ = (function iter__371100(s__371101){return (new cljs.core.LazySeq(null,(function (){var s__371101__$1 = s__371101;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__371101__$1);if(temp__4092__auto__)
{var s__371101__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__371101__$2))
{var c__14675__auto__ = cljs.core.chunk_first.call(null,s__371101__$2);var size__14676__auto__ = cljs.core.count.call(null,c__14675__auto__);var b__371103 = cljs.core.chunk_buffer.call(null,size__14676__auto__);if((function (){var i__371102 = 0;while(true){
if((i__371102 < size__14676__auto__))
{var col = cljs.core._nth.call(null,c__14675__auto__,i__371102);cljs.core.chunk_append.call(null,b__371103,foundation.cells.td.call(null,col,model));
{
var G__371104 = (i__371102 + 1);
i__371102 = G__371104;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__371103),iter__371100.call(null,cljs.core.chunk_rest.call(null,s__371101__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__371103),null);
}
} else
{var col = cljs.core.first.call(null,s__371101__$2);return cljs.core.cons.call(null,foundation.cells.td.call(null,col,model),iter__371100.call(null,cljs.core.rest.call(null,s__371101__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14677__auto__.call(null,columns);
})()));
return dom371099;
});
foundation.templates.datagrid_body = (function datagrid_body(coll,columns){var dom371110 = document.createElement("tbody");dom371110.className = "datagrid-tbody";
dom371110.setAttribute("id","datagrid-body");
dom371110.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14677__auto__ = (function iter__371111(s__371112){return (new cljs.core.LazySeq(null,(function (){var s__371112__$1 = s__371112;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__371112__$1);if(temp__4092__auto__)
{var s__371112__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__371112__$2))
{var c__14675__auto__ = cljs.core.chunk_first.call(null,s__371112__$2);var size__14676__auto__ = cljs.core.count.call(null,c__14675__auto__);var b__371114 = cljs.core.chunk_buffer.call(null,size__14676__auto__);if((function (){var i__371113 = 0;while(true){
if((i__371113 < size__14676__auto__))
{var model = cljs.core._nth.call(null,c__14675__auto__,i__371113);cljs.core.chunk_append.call(null,b__371114,foundation.templates.datagrid_row.call(null,model,columns));
{
var G__371115 = (i__371113 + 1);
i__371113 = G__371115;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__371114),iter__371111.call(null,cljs.core.chunk_rest.call(null,s__371112__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__371114),null);
}
} else
{var model = cljs.core.first.call(null,s__371112__$2);return cljs.core.cons.call(null,foundation.templates.datagrid_row.call(null,model,columns),iter__371111.call(null,cljs.core.rest.call(null,s__371112__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14677__auto__.call(null,coll);
})()));
return dom371110;
});
foundation.templates.datagrid_breadcrumb = (function datagrid_breadcrumb(){var dom371127 = document.createElement("ol");dom371127.className = "breadcrumb";
dom371127.appendChild((function (){var dom371128 = document.createElement("li");dom371128.className = "active";
dom371128.setAttribute("id","account");
dom371128.appendChild((function (){var dom371129 = document.createElement("div");dom371129.className = "arrow-down";
return dom371129;
})());
dom371128.appendChild((function (){var dom371130 = document.createElement("a");dom371130.appendChild(document.createTextNode("Accounts"));
return dom371130;
})());
dom371128.appendChild((function (){var dom371131 = document.createElement("div");dom371131.className = "arrow-up";
return dom371131;
})());
return dom371128;
})());
dom371127.appendChild((function (){var dom371132 = document.createElement("li");dom371132.className = "hidden";
dom371132.setAttribute("id","campaign");
dom371132.appendChild((function (){var dom371133 = document.createElement("a");dom371133.appendChild(document.createTextNode("Campaigns"));
return dom371133;
})());
return dom371132;
})());
dom371127.appendChild((function (){var dom371134 = document.createElement("li");dom371134.className = "hidden";
dom371134.setAttribute("id","line_item");
dom371134.appendChild((function (){var dom371135 = document.createElement("a");dom371135.appendChild(document.createTextNode("Line Items"));
return dom371135;
})());
return dom371134;
})());
dom371127.appendChild((function (){var dom371136 = document.createElement("li");dom371136.className = "hidden";
dom371136.setAttribute("id","promoted_tweet");
dom371136.appendChild((function (){var dom371137 = document.createElement("a");dom371137.appendChild(document.createTextNode("Promoted Products"));
return dom371137;
})());
return dom371136;
})());
return dom371127;
});
foundation.templates.datagrid_table = (function datagrid_table(model,coll){return dommy.template.__GT_node_like.call(null,(function (){var cols = foundation.models.columns.call(null,model);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table#datagrid-table.table","table#datagrid-table.table",2230740568),foundation.templates.datagrid_header.call(null,cols),foundation.templates.datagrid_body.call(null,coll,cols)], null);
})());
});
foundation.templates.datagrid = (function datagrid(id){var dom371153 = document.createElement("div");dom371153.className = "datagrid-container panel panel-default";
if(cljs.core.truth_(id))
{dom371153.setAttribute("id",id);
} else
{}
dom371153.appendChild((function (){var dom371154 = document.createElement("div");dom371154.className = "panel-heading";
dom371154.appendChild(dommy.template.__GT_node_like.call(null,foundation.templates.datagrid_breadcrumb.call(null)));
dom371154.appendChild((function (){var dom371155 = document.createElement("form");dom371155.className = "form-inline pull-right";
dom371155.appendChild((function (){var dom371156 = document.createElement("div");dom371156.className = "form-group";
dom371156.appendChild(dommy.template.__GT_node_like.call(null,foundation.templates.datagrid_filter.call(null)));
return dom371156;
})());
return dom371155;
})());
return dom371154;
})());
dom371153.appendChild((function (){var dom371157 = document.createElement("div");dom371157.className = "panel-body";
return dom371157;
})());
dom371153.appendChild((function (){var dom371158 = document.createElement("div");dom371158.className = "panel-footer";
dom371158.appendChild((function (){var dom371159 = document.createElement("div");dom371159.className = "form-inline";
dom371159.appendChild((function (){var dom371160 = document.createElement("div");dom371160.className = "form-group";
dom371160.appendChild((function (){var dom371161 = document.createElement("button");dom371161.className = "btn btn-success btn-sm";
dom371161.setAttribute("id","new");
dom371161.appendChild(document.createTextNode("New"));
return dom371161;
})());
return dom371160;
})());
dom371159.appendChild((function (){var dom371162 = document.createElement("div");dom371162.className = "form-group";
dom371162.appendChild((function (){var dom371163 = document.createElement("button");dom371163.className = "btn btn-info btn-sm disabled";
dom371163.setAttribute("id","save");
dom371163.appendChild(document.createTextNode("Save"));
return dom371163;
})());
return dom371162;
})());
dom371159.appendChild((function (){var dom371164 = document.createElement("div");dom371164.className = "form-group";
dom371164.appendChild((function (){var dom371165 = document.createElement("button");dom371165.className = "btn btn-danger btn-sm disabled";
dom371165.setAttribute("id","delete");
dom371165.appendChild(document.createTextNode("Delete"));
return dom371165;
})());
return dom371164;
})());
dom371159.appendChild((function (){var dom371166 = document.createElement("div");dom371166.className = "form-group";
dom371166.appendChild((function (){var dom371167 = document.createElement("button");dom371167.className = "btn btn-primary btn-sm disabled";
dom371167.setAttribute("id","dupe");
dom371167.appendChild(document.createTextNode("Duplicate"));
return dom371167;
})());
return dom371166;
})());
return dom371159;
})());
return dom371158;
})());
return dom371153;
});
foundation.templates.twitter_power = (function twitter_power(id){var dom371169 = document.createElement("div");if(cljs.core.truth_(id))
{dom371169.setAttribute("id",id);
} else
{}
return dom371169;
});

//# sourceMappingURL=templates.js.map