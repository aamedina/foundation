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
cljs.core.enable_console_print_BANG_.call(null);
foundation.templates.dashboard_metrics = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Impressions","Engagements","Clicks","Retweets","Replies","Follows"], null);
foundation.templates.chart = (function chart(){var dom29095 = document.createElement("div");dom29095.className = "analytics-highcharts";
return dom29095;
});
foundation.templates.metric = (function metric(metric__$1){return enfocus.core.at.call(null,document,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric__$1)].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return cljs.core.println.call(null,metric__$1);
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric__$1),cljs.core.str("-cpa")].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return cljs.core.println.call(null,metric__$1,"-cpa");
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(metric__$1),cljs.core.str("-rate")].join('')], null),enfocus.events.listen.call(null,new cljs.core.Keyword(null,"click","click",1108654330),(function (){return cljs.core.println.call(null,metric__$1,"-rate");
})));
});
foundation.templates.dashboard_metric = (function dashboard_metric(metric){var dom29103 = document.createElement("ul");dom29103.className = "list-group";
dom29103.appendChild((function (){var dom29104 = document.createElement("li");dom29104.className = "list-group-item";
if(cljs.core.truth_(metric))
{dom29104.setAttribute("id",metric);
} else
{}
dom29104.appendChild((function (){var dom29105 = document.createElement("h5");dom29105.className = "metric-header list-group-item-heading";
dom29105.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(metric)].join('')));
return dom29105;
})());
return dom29104;
})());
dom29103.appendChild((function (){var dom29106 = document.createElement("li");dom29106.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-cpa")].join('')))
{dom29106.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-cpa")].join(''));
} else
{}
dom29106.appendChild((function (){var dom29107 = document.createElement("small");dom29107.className = "list-group-item-text";
dom29107.appendChild(dommy.template.__GT_node_like.call(null,0));
return dom29107;
})());
return dom29106;
})());
dom29103.appendChild((function (){var dom29108 = document.createElement("li");dom29108.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-rate")].join('')))
{dom29108.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-rate")].join(''));
} else
{}
dom29108.appendChild((function (){var dom29109 = document.createElement("small");dom29109.className = "list-group-item-text";
dom29109.appendChild(dommy.template.__GT_node_like.call(null,0));
return dom29109;
})());
return dom29108;
})());
return dom29103;
});
foundation.templates.dashboard = (function dashboard(id){var dom29127 = document.createElement("div");dom29127.className = "twitter-stats panel panel-default";
if(cljs.core.truth_(id))
{dom29127.setAttribute("id",id);
} else
{}
dom29127.appendChild((function (){var dom29128 = document.createElement("div");dom29128.className = "panel-heading";
dom29128.appendChild((function (){var dom29129 = document.createElement("h1");dom29129.className = "panel-title#resource-id";
dom29129.setAttribute("id","resource-id");
return dom29129;
})());
dom29128.appendChild((function (){var dom29130 = document.createElement("div");dom29130.className = "form-inline pull-right";
dom29130.appendChild((function (){var dom29131 = document.createElement("div");dom29131.className = "form-group";
dom29131.appendChild((function (){var dom29132 = document.createElement("input");dom29132.className = "form-control date-picker";
dom29132.setAttribute("id","start-time");
if(true)
{dom29132.setAttribute("readonly",true);
} else
{}
return dom29132;
})());
return dom29131;
})());
dom29130.appendChild((function (){var dom29133 = document.createElement("em");if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)))
{dom29133.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)));
} else
{}
dom29133.appendChild(document.createTextNode("to"));
return dom29133;
})());
dom29130.appendChild((function (){var dom29134 = document.createElement("div");dom29134.className = "form-group";
dom29134.appendChild((function (){var dom29135 = document.createElement("input");dom29135.className = "form-control date-picker";
dom29135.setAttribute("id","end-time");
if(true)
{dom29135.setAttribute("readonly",true);
} else
{}
return dom29135;
})());
return dom29134;
})());
dom29130.appendChild((function (){var dom29136 = document.createElement("button");dom29136.className = "btn btn-primary btn-sm";
dom29136.setAttribute("id","update-stats");
dom29136.appendChild(document.createTextNode("Update"));
return dom29136;
})());
return dom29130;
})());
return dom29128;
})());
dom29127.appendChild((function (){var dom29137 = document.createElement("div");dom29137.className = "panel-body";
dom29137.appendChild(dommy.template.__GT_node_like.call(null,foundation.templates.chart.call(null)));
return dom29137;
})());
dom29127.appendChild((function (){var dom29138 = document.createElement("div");dom29138.className = "panel-footer row";
dom29138.appendChild((function (){var dom29139 = document.createElement("div");dom29139.className = "twitter-stats";
dom29139.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8521__auto__ = (function iter__29140(s__29141){return (new cljs.core.LazySeq(null,(function (){var s__29141__$1 = s__29141;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__29141__$1);if(temp__4092__auto__)
{var s__29141__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29141__$2))
{var c__8519__auto__ = cljs.core.chunk_first.call(null,s__29141__$2);var size__8520__auto__ = cljs.core.count.call(null,c__8519__auto__);var b__29143 = cljs.core.chunk_buffer.call(null,size__8520__auto__);if((function (){var i__29142 = 0;while(true){
if((i__29142 < size__8520__auto__))
{var metric = cljs.core._nth.call(null,c__8519__auto__,i__29142);cljs.core.chunk_append.call(null,b__29143,foundation.templates.dashboard_metric.call(null,metric));
{
var G__29144 = (i__29142 + 1);
i__29142 = G__29144;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29143),iter__29140.call(null,cljs.core.chunk_rest.call(null,s__29141__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29143),null);
}
} else
{var metric = cljs.core.first.call(null,s__29141__$2);return cljs.core.cons.call(null,foundation.templates.dashboard_metric.call(null,metric),iter__29140.call(null,cljs.core.rest.call(null,s__29141__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8521__auto__.call(null,foundation.templates.dashboard_metrics);
})()));
return dom29139;
})());
return dom29138;
})());
return dom29127;
});
foundation.templates.datagrid_filter = (function datagrid_filter(){var dom29147 = document.createElement("div");dom29147.className = "autocomplete";
dom29147.appendChild((function (){var dom29148 = document.createElement("input");dom29148.className = "form-control";
if("text")
{dom29148.setAttribute("type","text");
} else
{}
if("What are you looking for?")
{dom29148.setAttribute("placeholder","What are you looking for?");
} else
{}
return dom29148;
})());
return dom29147;
});
foundation.templates.datagrid_header = (function datagrid_header(columns){var dom29155 = document.createElement("thead");dom29155.setAttribute("id","datagrid-header");
dom29155.appendChild((function (){var dom29156 = document.createElement("tr");dom29156.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8521__auto__ = (function iter__29157(s__29158){return (new cljs.core.LazySeq(null,(function (){var s__29158__$1 = s__29158;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__29158__$1);if(temp__4092__auto__)
{var s__29158__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29158__$2))
{var c__8519__auto__ = cljs.core.chunk_first.call(null,s__29158__$2);var size__8520__auto__ = cljs.core.count.call(null,c__8519__auto__);var b__29160 = cljs.core.chunk_buffer.call(null,size__8520__auto__);if((function (){var i__29159 = 0;while(true){
if((i__29159 < size__8520__auto__))
{var col = cljs.core._nth.call(null,c__8519__auto__,i__29159);cljs.core.chunk_append.call(null,b__29160,foundation.cells.th.call(null,col));
{
var G__29161 = (i__29159 + 1);
i__29159 = G__29161;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29160),iter__29157.call(null,cljs.core.chunk_rest.call(null,s__29158__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29160),null);
}
} else
{var col = cljs.core.first.call(null,s__29158__$2);return cljs.core.cons.call(null,foundation.cells.th.call(null,col),iter__29157.call(null,cljs.core.rest.call(null,s__29158__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8521__auto__.call(null,columns);
})()));
return dom29156;
})());
return dom29155;
});
foundation.templates.datagrid_row = (function datagrid_row(model,columns){var dom29167 = document.createElement("tr");dom29167.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8521__auto__ = (function iter__29168(s__29169){return (new cljs.core.LazySeq(null,(function (){var s__29169__$1 = s__29169;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__29169__$1);if(temp__4092__auto__)
{var s__29169__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29169__$2))
{var c__8519__auto__ = cljs.core.chunk_first.call(null,s__29169__$2);var size__8520__auto__ = cljs.core.count.call(null,c__8519__auto__);var b__29171 = cljs.core.chunk_buffer.call(null,size__8520__auto__);if((function (){var i__29170 = 0;while(true){
if((i__29170 < size__8520__auto__))
{var col = cljs.core._nth.call(null,c__8519__auto__,i__29170);cljs.core.chunk_append.call(null,b__29171,foundation.cells.td.call(null,col,model));
{
var G__29172 = (i__29170 + 1);
i__29170 = G__29172;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29171),iter__29168.call(null,cljs.core.chunk_rest.call(null,s__29169__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29171),null);
}
} else
{var col = cljs.core.first.call(null,s__29169__$2);return cljs.core.cons.call(null,foundation.cells.td.call(null,col,model),iter__29168.call(null,cljs.core.rest.call(null,s__29169__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8521__auto__.call(null,columns);
})()));
return dom29167;
});
foundation.templates.datagrid_body = (function datagrid_body(coll,columns){var dom29178 = document.createElement("tbody");dom29178.className = "datagrid-tbody";
dom29178.setAttribute("id","datagrid-body");
dom29178.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8521__auto__ = (function iter__29179(s__29180){return (new cljs.core.LazySeq(null,(function (){var s__29180__$1 = s__29180;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__29180__$1);if(temp__4092__auto__)
{var s__29180__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29180__$2))
{var c__8519__auto__ = cljs.core.chunk_first.call(null,s__29180__$2);var size__8520__auto__ = cljs.core.count.call(null,c__8519__auto__);var b__29182 = cljs.core.chunk_buffer.call(null,size__8520__auto__);if((function (){var i__29181 = 0;while(true){
if((i__29181 < size__8520__auto__))
{var model = cljs.core._nth.call(null,c__8519__auto__,i__29181);cljs.core.chunk_append.call(null,b__29182,foundation.templates.datagrid_row.call(null,model,columns));
{
var G__29183 = (i__29181 + 1);
i__29181 = G__29183;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29182),iter__29179.call(null,cljs.core.chunk_rest.call(null,s__29180__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29182),null);
}
} else
{var model = cljs.core.first.call(null,s__29180__$2);return cljs.core.cons.call(null,foundation.templates.datagrid_row.call(null,model,columns),iter__29179.call(null,cljs.core.rest.call(null,s__29180__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8521__auto__.call(null,coll);
})()));
return dom29178;
});
foundation.templates.datagrid_breadcrumb = (function datagrid_breadcrumb(){var dom29195 = document.createElement("ol");dom29195.className = "breadcrumb";
dom29195.appendChild((function (){var dom29196 = document.createElement("li");dom29196.className = "active";
dom29196.setAttribute("id","account");
dom29196.appendChild((function (){var dom29197 = document.createElement("div");dom29197.className = "arrow-down";
return dom29197;
})());
dom29196.appendChild((function (){var dom29198 = document.createElement("a");dom29198.appendChild(document.createTextNode("Accounts"));
return dom29198;
})());
dom29196.appendChild((function (){var dom29199 = document.createElement("div");dom29199.className = "arrow-up";
return dom29199;
})());
return dom29196;
})());
dom29195.appendChild((function (){var dom29200 = document.createElement("li");dom29200.className = "hidden";
dom29200.setAttribute("id","campaign");
dom29200.appendChild((function (){var dom29201 = document.createElement("a");dom29201.appendChild(document.createTextNode("Campaigns"));
return dom29201;
})());
return dom29200;
})());
dom29195.appendChild((function (){var dom29202 = document.createElement("li");dom29202.className = "hidden";
dom29202.setAttribute("id","line_item");
dom29202.appendChild((function (){var dom29203 = document.createElement("a");dom29203.appendChild(document.createTextNode("Line Items"));
return dom29203;
})());
return dom29202;
})());
dom29195.appendChild((function (){var dom29204 = document.createElement("li");dom29204.className = "hidden";
dom29204.setAttribute("id","promoted_tweet");
dom29204.appendChild((function (){var dom29205 = document.createElement("a");dom29205.appendChild(document.createTextNode("Promoted Products"));
return dom29205;
})());
return dom29204;
})());
return dom29195;
});
foundation.templates.datagrid_table = (function datagrid_table(model,coll){return dommy.template.__GT_node_like.call(null,(function (){var cols = foundation.models.columns.call(null,model);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table#datagrid-table.table","table#datagrid-table.table",2230740568),foundation.templates.datagrid_header.call(null,cols),foundation.templates.datagrid_body.call(null,coll,cols)], null);
})());
});
foundation.templates.datagrid = (function datagrid(id){var dom29221 = document.createElement("div");dom29221.className = "datagrid-container panel panel-default";
if(cljs.core.truth_(id))
{dom29221.setAttribute("id",id);
} else
{}
dom29221.appendChild((function (){var dom29222 = document.createElement("div");dom29222.className = "panel-heading";
dom29222.appendChild(dommy.template.__GT_node_like.call(null,foundation.templates.datagrid_breadcrumb.call(null)));
dom29222.appendChild((function (){var dom29223 = document.createElement("form");dom29223.className = "form-inline pull-right";
dom29223.appendChild((function (){var dom29224 = document.createElement("div");dom29224.className = "form-group";
dom29224.appendChild(dommy.template.__GT_node_like.call(null,foundation.templates.datagrid_filter.call(null)));
return dom29224;
})());
return dom29223;
})());
return dom29222;
})());
dom29221.appendChild((function (){var dom29225 = document.createElement("div");dom29225.className = "panel-body";
return dom29225;
})());
dom29221.appendChild((function (){var dom29226 = document.createElement("div");dom29226.className = "panel-footer";
dom29226.appendChild((function (){var dom29227 = document.createElement("div");dom29227.className = "form-inline";
dom29227.appendChild((function (){var dom29228 = document.createElement("div");dom29228.className = "form-group";
dom29228.appendChild((function (){var dom29229 = document.createElement("button");dom29229.className = "btn btn-success btn-sm";
dom29229.setAttribute("id","new");
dom29229.appendChild(document.createTextNode("New"));
return dom29229;
})());
return dom29228;
})());
dom29227.appendChild((function (){var dom29230 = document.createElement("div");dom29230.className = "form-group";
dom29230.appendChild((function (){var dom29231 = document.createElement("button");dom29231.className = "btn btn-info btn-sm disabled";
dom29231.setAttribute("id","save");
dom29231.appendChild(document.createTextNode("Save"));
return dom29231;
})());
return dom29230;
})());
dom29227.appendChild((function (){var dom29232 = document.createElement("div");dom29232.className = "form-group";
dom29232.appendChild((function (){var dom29233 = document.createElement("button");dom29233.className = "btn btn-danger btn-sm disabled";
dom29233.setAttribute("id","delete");
dom29233.appendChild(document.createTextNode("Delete"));
return dom29233;
})());
return dom29232;
})());
dom29227.appendChild((function (){var dom29234 = document.createElement("div");dom29234.className = "form-group";
dom29234.appendChild((function (){var dom29235 = document.createElement("button");dom29235.className = "btn btn-primary btn-sm disabled";
dom29235.setAttribute("id","dupe");
dom29235.appendChild(document.createTextNode("Duplicate"));
return dom29235;
})());
return dom29234;
})());
return dom29227;
})());
return dom29226;
})());
return dom29221;
});
foundation.templates.twitter_power = (function twitter_power(id){var dom29237 = document.createElement("div");if(cljs.core.truth_(id))
{dom29237.setAttribute("id",id);
} else
{}
return dom29237;
});
