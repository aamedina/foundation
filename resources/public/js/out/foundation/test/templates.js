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
foundation.test.templates.date_picker = (function date_picker(el,init_date,date_pattern){var date_pattern__$1 = (((date_pattern instanceof cljs.core.Keyword))?date_pattern.call(null,cljs_time.format.formatters):date_pattern);var picker = (new goog.ui.InputDatePicker((new goog.i18n.DateTimeFormat(date_pattern__$1)),(new goog.i18n.DateTimeParse(date_pattern__$1))));var G__31066_31068 = picker.getDatePicker();G__31066_31068.setUseSimpleNavigationMenu(true);
G__31066_31068.setAllowNone(true);
var G__31067 = picker;G__31067.decorate(el);
G__31067.setDate(init_date);
return G__31067;
});
foundation.test.templates.dashboard_metrics = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Impressions","CPM","Impression Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Engagements","CPE","Engagement Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clicks","CPC","Click Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Retweets","CPRT","Retweet Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Replies","CPR","Reply Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Follows","CPF","Follow Rate"], null)], null);
foundation.test.templates.dashboard_metric = (function dashboard_metric(p__31069){var vec__31078 = p__31069;var metric = cljs.core.nth.call(null,vec__31078,0,null);var cpa = cljs.core.nth.call(null,vec__31078,1,null);var rate = cljs.core.nth.call(null,vec__31078,2,null);var dom31079 = document.createElement("ul");dom31079.className = "list-group";
dom31079.appendChild((function (){var dom31080 = document.createElement("li");dom31080.className = "list-group-item";
if(cljs.core.truth_(metric))
{dom31080.setAttribute("id",metric);
} else
{}
dom31080.appendChild((function (){var dom31081 = document.createElement("h5");dom31081.className = "metric-header list-group-item-heading";
dom31081.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(metric)].join('')));
return dom31081;
})());
return dom31080;
})());
dom31079.appendChild((function (){var dom31082 = document.createElement("li");dom31082.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-cpa")].join('')))
{dom31082.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-cpa")].join(''));
} else
{}
dom31082.appendChild((function (){var dom31083 = document.createElement("small");dom31083.className = "list-group-item-text";
dom31083.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(cpa)].join('')));
return dom31083;
})());
return dom31082;
})());
dom31079.appendChild((function (){var dom31084 = document.createElement("li");dom31084.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-rate")].join('')))
{dom31084.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-rate")].join(''));
} else
{}
dom31084.appendChild((function (){var dom31085 = document.createElement("small");dom31085.className = "list-group-item-text";
dom31085.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(rate)].join('')));
return dom31085;
})());
return dom31084;
})());
return dom31079;
});
foundation.test.templates.dashboard = (function dashboard(id){var dom31104 = document.createElement("div");dom31104.className = "twitter-stats panel panel-default";
if(cljs.core.truth_(id))
{dom31104.setAttribute("id",id);
} else
{}
dom31104.appendChild((function (){var dom31105 = document.createElement("div");dom31105.className = "panel-heading";
dom31105.appendChild((function (){var dom31106 = document.createElement("h1");dom31106.className = "panel-title";
if("resource-id")
{dom31106.setAttribute("id","resource-id");
} else
{}
return dom31106;
})());
dom31105.appendChild((function (){var dom31107 = document.createElement("div");dom31107.className = "form-inline pull-right";
dom31107.appendChild((function (){var dom31108 = document.createElement("div");dom31108.className = "form-group";
dom31108.appendChild((function (){var dom31109 = document.createElement("input");dom31109.className = "form-control date-picker";
dom31109.setAttribute("id","start-time");
if(true)
{dom31109.setAttribute("readonly",true);
} else
{}
return dom31109;
})());
return dom31108;
})());
dom31107.appendChild((function (){var dom31110 = document.createElement("em");if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)))
{dom31110.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)));
} else
{}
dom31110.appendChild(document.createTextNode("to"));
return dom31110;
})());
dom31107.appendChild((function (){var dom31111 = document.createElement("div");dom31111.className = "form-group";
dom31111.appendChild((function (){var dom31112 = document.createElement("input");dom31112.className = "form-control date-picker";
dom31112.setAttribute("id","end-time");
if(true)
{dom31112.setAttribute("readonly",true);
} else
{}
return dom31112;
})());
return dom31111;
})());
dom31107.appendChild((function (){var dom31113 = document.createElement("button");dom31113.className = "btn btn-primary btn-sm";
dom31113.setAttribute("id","update-stats");
dom31113.appendChild(document.createTextNode("Update"));
return dom31113;
})());
return dom31107;
})());
return dom31105;
})());
dom31104.appendChild((function (){var dom31114 = document.createElement("div");dom31114.className = "panel-body";
dom31114.appendChild((function (){var dom31115 = document.createElement("div");dom31115.className = "analytics-highcharts";
return dom31115;
})());
return dom31114;
})());
dom31104.appendChild((function (){var dom31116 = document.createElement("div");dom31116.className = "panel-footer row";
dom31116.appendChild((function (){var dom31117 = document.createElement("div");dom31117.className = "twitter-stats";
dom31117.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8943__auto__ = (function iter__31118(s__31119){return (new cljs.core.LazySeq(null,(function (){var s__31119__$1 = s__31119;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__31119__$1);if(temp__4092__auto__)
{var s__31119__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31119__$2))
{var c__8941__auto__ = cljs.core.chunk_first.call(null,s__31119__$2);var size__8942__auto__ = cljs.core.count.call(null,c__8941__auto__);var b__31121 = cljs.core.chunk_buffer.call(null,size__8942__auto__);if((function (){var i__31120 = 0;while(true){
if((i__31120 < size__8942__auto__))
{var metric = cljs.core._nth.call(null,c__8941__auto__,i__31120);cljs.core.chunk_append.call(null,b__31121,foundation.test.templates.dashboard_metric.call(null,metric));
{
var G__31122 = (i__31120 + 1);
i__31120 = G__31122;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31121),iter__31118.call(null,cljs.core.chunk_rest.call(null,s__31119__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31121),null);
}
} else
{var metric = cljs.core.first.call(null,s__31119__$2);return cljs.core.cons.call(null,foundation.test.templates.dashboard_metric.call(null,metric),iter__31118.call(null,cljs.core.rest.call(null,s__31119__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8943__auto__.call(null,foundation.test.templates.dashboard_metrics);
})()));
return dom31117;
})());
return dom31116;
})());
return dom31104;
});
foundation.test.templates.datagrid_filter = (function datagrid_filter(){var dom31125 = document.createElement("div");dom31125.className = "autocomplete";
dom31125.appendChild((function (){var dom31126 = document.createElement("input");dom31126.className = "form-control";
if("text")
{dom31126.setAttribute("type","text");
} else
{}
if("What are you looking for?")
{dom31126.setAttribute("placeholder","What are you looking for?");
} else
{}
return dom31126;
})());
return dom31125;
});
foundation.test.templates.datagrid_header = (function datagrid_header(columns){var dom31133 = document.createElement("thead");dom31133.setAttribute("id","datagrid-header");
dom31133.appendChild((function (){var dom31134 = document.createElement("tr");dom31134.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8943__auto__ = (function iter__31135(s__31136){return (new cljs.core.LazySeq(null,(function (){var s__31136__$1 = s__31136;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__31136__$1);if(temp__4092__auto__)
{var s__31136__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31136__$2))
{var c__8941__auto__ = cljs.core.chunk_first.call(null,s__31136__$2);var size__8942__auto__ = cljs.core.count.call(null,c__8941__auto__);var b__31138 = cljs.core.chunk_buffer.call(null,size__8942__auto__);if((function (){var i__31137 = 0;while(true){
if((i__31137 < size__8942__auto__))
{var col = cljs.core._nth.call(null,c__8941__auto__,i__31137);cljs.core.chunk_append.call(null,b__31138,foundation.cells.th.call(null,col));
{
var G__31139 = (i__31137 + 1);
i__31137 = G__31139;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31138),iter__31135.call(null,cljs.core.chunk_rest.call(null,s__31136__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31138),null);
}
} else
{var col = cljs.core.first.call(null,s__31136__$2);return cljs.core.cons.call(null,foundation.cells.th.call(null,col),iter__31135.call(null,cljs.core.rest.call(null,s__31136__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8943__auto__.call(null,columns);
})()));
return dom31134;
})());
return dom31133;
});
foundation.test.templates.datagrid_row = (function datagrid_row(model,columns){var dom31145 = document.createElement("tr");dom31145.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8943__auto__ = (function iter__31146(s__31147){return (new cljs.core.LazySeq(null,(function (){var s__31147__$1 = s__31147;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__31147__$1);if(temp__4092__auto__)
{var s__31147__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31147__$2))
{var c__8941__auto__ = cljs.core.chunk_first.call(null,s__31147__$2);var size__8942__auto__ = cljs.core.count.call(null,c__8941__auto__);var b__31149 = cljs.core.chunk_buffer.call(null,size__8942__auto__);if((function (){var i__31148 = 0;while(true){
if((i__31148 < size__8942__auto__))
{var col = cljs.core._nth.call(null,c__8941__auto__,i__31148);cljs.core.chunk_append.call(null,b__31149,foundation.cells.td.call(null,col,model));
{
var G__31150 = (i__31148 + 1);
i__31148 = G__31150;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31149),iter__31146.call(null,cljs.core.chunk_rest.call(null,s__31147__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31149),null);
}
} else
{var col = cljs.core.first.call(null,s__31147__$2);return cljs.core.cons.call(null,foundation.cells.td.call(null,col,model),iter__31146.call(null,cljs.core.rest.call(null,s__31147__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8943__auto__.call(null,columns);
})()));
return dom31145;
});
foundation.test.templates.datagrid_body = (function datagrid_body(coll,columns){var dom31156 = document.createElement("tbody");dom31156.className = "datagrid-tbody";
dom31156.setAttribute("id","datagrid-body");
dom31156.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8943__auto__ = (function iter__31157(s__31158){return (new cljs.core.LazySeq(null,(function (){var s__31158__$1 = s__31158;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__31158__$1);if(temp__4092__auto__)
{var s__31158__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31158__$2))
{var c__8941__auto__ = cljs.core.chunk_first.call(null,s__31158__$2);var size__8942__auto__ = cljs.core.count.call(null,c__8941__auto__);var b__31160 = cljs.core.chunk_buffer.call(null,size__8942__auto__);if((function (){var i__31159 = 0;while(true){
if((i__31159 < size__8942__auto__))
{var model = cljs.core._nth.call(null,c__8941__auto__,i__31159);cljs.core.chunk_append.call(null,b__31160,foundation.test.templates.datagrid_row.call(null,model,columns));
{
var G__31161 = (i__31159 + 1);
i__31159 = G__31161;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31160),iter__31157.call(null,cljs.core.chunk_rest.call(null,s__31158__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31160),null);
}
} else
{var model = cljs.core.first.call(null,s__31158__$2);return cljs.core.cons.call(null,foundation.test.templates.datagrid_row.call(null,model,columns),iter__31157.call(null,cljs.core.rest.call(null,s__31158__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8943__auto__.call(null,coll);
})()));
return dom31156;
});
foundation.test.templates.datagrid_breadcrumb = (function datagrid_breadcrumb(){var dom31173 = document.createElement("ol");dom31173.className = "breadcrumb";
dom31173.appendChild((function (){var dom31174 = document.createElement("li");dom31174.className = "active";
dom31174.setAttribute("id","account");
dom31174.appendChild((function (){var dom31175 = document.createElement("div");dom31175.className = "arrow-down";
return dom31175;
})());
dom31174.appendChild((function (){var dom31176 = document.createElement("a");dom31176.appendChild(document.createTextNode("Accounts"));
return dom31176;
})());
dom31174.appendChild((function (){var dom31177 = document.createElement("div");dom31177.className = "arrow-up";
return dom31177;
})());
return dom31174;
})());
dom31173.appendChild((function (){var dom31178 = document.createElement("li");dom31178.className = "hidden";
dom31178.setAttribute("id","campaign");
dom31178.appendChild((function (){var dom31179 = document.createElement("a");dom31179.appendChild(document.createTextNode("Campaigns"));
return dom31179;
})());
return dom31178;
})());
dom31173.appendChild((function (){var dom31180 = document.createElement("li");dom31180.className = "hidden";
dom31180.setAttribute("id","line_item");
dom31180.appendChild((function (){var dom31181 = document.createElement("a");dom31181.appendChild(document.createTextNode("Line Items"));
return dom31181;
})());
return dom31180;
})());
dom31173.appendChild((function (){var dom31182 = document.createElement("li");dom31182.className = "hidden";
dom31182.setAttribute("id","promoted_tweet");
dom31182.appendChild((function (){var dom31183 = document.createElement("a");dom31183.appendChild(document.createTextNode("Promoted Products"));
return dom31183;
})());
return dom31182;
})());
return dom31173;
});
foundation.test.templates.datagrid_table = (function datagrid_table(model,coll){return dommy.template.__GT_node_like.call(null,(function (){var cols = foundation.models.columns.call(null,model);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table#datagrid-table.table","table#datagrid-table.table",2230740568),foundation.test.templates.datagrid_header.call(null,cols),foundation.test.templates.datagrid_body.call(null,coll,cols)], null);
})());
});
foundation.test.templates.datagrid = (function datagrid(id){var dom31199 = document.createElement("div");dom31199.className = "datagrid-container panel panel-default";
if(cljs.core.truth_(id))
{dom31199.setAttribute("id",id);
} else
{}
dom31199.appendChild((function (){var dom31200 = document.createElement("div");dom31200.className = "panel-heading";
dom31200.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.templates.datagrid_breadcrumb.call(null)));
dom31200.appendChild((function (){var dom31201 = document.createElement("form");dom31201.className = "form-inline pull-right";
dom31201.appendChild((function (){var dom31202 = document.createElement("div");dom31202.className = "form-group";
dom31202.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.templates.datagrid_filter.call(null)));
return dom31202;
})());
return dom31201;
})());
return dom31200;
})());
dom31199.appendChild((function (){var dom31203 = document.createElement("div");dom31203.className = "panel-body";
return dom31203;
})());
dom31199.appendChild((function (){var dom31204 = document.createElement("div");dom31204.className = "panel-footer";
dom31204.appendChild((function (){var dom31205 = document.createElement("div");dom31205.className = "form-inline";
dom31205.appendChild((function (){var dom31206 = document.createElement("div");dom31206.className = "form-group";
dom31206.appendChild((function (){var dom31207 = document.createElement("button");dom31207.className = "btn btn-success btn-sm";
dom31207.setAttribute("id","new");
dom31207.appendChild(document.createTextNode("New"));
return dom31207;
})());
return dom31206;
})());
dom31205.appendChild((function (){var dom31208 = document.createElement("div");dom31208.className = "form-group";
dom31208.appendChild((function (){var dom31209 = document.createElement("button");dom31209.className = "btn btn-info btn-sm disabled";
dom31209.setAttribute("id","save");
dom31209.appendChild(document.createTextNode("Save"));
return dom31209;
})());
return dom31208;
})());
dom31205.appendChild((function (){var dom31210 = document.createElement("div");dom31210.className = "form-group";
dom31210.appendChild((function (){var dom31211 = document.createElement("button");dom31211.className = "btn btn-danger btn-sm disabled";
dom31211.setAttribute("id","delete");
dom31211.appendChild(document.createTextNode("Delete"));
return dom31211;
})());
return dom31210;
})());
dom31205.appendChild((function (){var dom31212 = document.createElement("div");dom31212.className = "form-group";
dom31212.appendChild((function (){var dom31213 = document.createElement("button");dom31213.className = "btn btn-primary btn-sm disabled";
dom31213.setAttribute("id","dupe");
dom31213.appendChild(document.createTextNode("Duplicate"));
return dom31213;
})());
return dom31212;
})());
return dom31205;
})());
return dom31204;
})());
return dom31199;
});
foundation.test.templates.twitter_power = (function twitter_power(id){var dom31215 = document.createElement("div");if(cljs.core.truth_(id))
{dom31215.setAttribute("id",id);
} else
{}
return dom31215;
});

//# sourceMappingURL=templates.js.map