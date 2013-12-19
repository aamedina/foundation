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
foundation.test.templates.date_picker = (function date_picker(el,init_date,date_pattern){var date_pattern__$1 = (((date_pattern instanceof cljs.core.Keyword))?date_pattern.call(null,cljs_time.format.formatters):date_pattern);var picker = (new goog.ui.InputDatePicker((new goog.i18n.DateTimeFormat(date_pattern__$1)),(new goog.i18n.DateTimeParse(date_pattern__$1))));var G__121083_121085 = picker.getDatePicker();G__121083_121085.setUseSimpleNavigationMenu(true);
G__121083_121085.setAllowNone(true);
var G__121084 = picker;G__121084.decorate(el);
G__121084.setDate(init_date);
return G__121084;
});
foundation.test.templates.dashboard_metrics = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Impressions","CPM","Impression Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Engagements","CPE","Engagement Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clicks","CPC","Click Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Retweets","CPRT","Retweet Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Replies","CPR","Reply Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Follows","CPF","Follow Rate"], null)], null);
foundation.test.templates.dashboard_metric = (function dashboard_metric(p__121086){var vec__121095 = p__121086;var metric = cljs.core.nth.call(null,vec__121095,0,null);var cpa = cljs.core.nth.call(null,vec__121095,1,null);var rate = cljs.core.nth.call(null,vec__121095,2,null);var dom121096 = document.createElement("ul");dom121096.className = "list-group";
dom121096.appendChild((function (){var dom121097 = document.createElement("li");dom121097.className = "list-group-item";
if(cljs.core.truth_(metric))
{dom121097.setAttribute("id",metric);
} else
{}
dom121097.appendChild((function (){var dom121098 = document.createElement("h5");dom121098.className = "metric-header list-group-item-heading";
dom121098.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(metric)].join('')));
return dom121098;
})());
return dom121097;
})());
dom121096.appendChild((function (){var dom121099 = document.createElement("li");dom121099.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-cpa")].join('')))
{dom121099.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-cpa")].join(''));
} else
{}
dom121099.appendChild((function (){var dom121100 = document.createElement("small");dom121100.className = "list-group-item-text";
dom121100.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(cpa)].join('')));
return dom121100;
})());
return dom121099;
})());
dom121096.appendChild((function (){var dom121101 = document.createElement("li");dom121101.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-rate")].join('')))
{dom121101.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-rate")].join(''));
} else
{}
dom121101.appendChild((function (){var dom121102 = document.createElement("small");dom121102.className = "list-group-item-text";
dom121102.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(rate)].join('')));
return dom121102;
})());
return dom121101;
})());
return dom121096;
});
foundation.test.templates.dashboard = (function dashboard(id){var dom121121 = document.createElement("div");dom121121.className = "twitter-stats panel panel-default";
if(cljs.core.truth_(id))
{dom121121.setAttribute("id",id);
} else
{}
dom121121.appendChild((function (){var dom121122 = document.createElement("div");dom121122.className = "panel-heading";
dom121122.appendChild((function (){var dom121123 = document.createElement("h1");dom121123.className = "panel-title";
if("resource-id")
{dom121123.setAttribute("id","resource-id");
} else
{}
return dom121123;
})());
dom121122.appendChild((function (){var dom121124 = document.createElement("div");dom121124.className = "form-inline pull-right";
dom121124.appendChild((function (){var dom121125 = document.createElement("div");dom121125.className = "form-group";
dom121125.appendChild((function (){var dom121126 = document.createElement("input");dom121126.className = "form-control date-picker";
dom121126.setAttribute("id","start-time");
if(true)
{dom121126.setAttribute("readonly",true);
} else
{}
return dom121126;
})());
return dom121125;
})());
dom121124.appendChild((function (){var dom121127 = document.createElement("em");if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)))
{dom121127.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)));
} else
{}
dom121127.appendChild(document.createTextNode("to"));
return dom121127;
})());
dom121124.appendChild((function (){var dom121128 = document.createElement("div");dom121128.className = "form-group";
dom121128.appendChild((function (){var dom121129 = document.createElement("input");dom121129.className = "form-control date-picker";
dom121129.setAttribute("id","end-time");
if(true)
{dom121129.setAttribute("readonly",true);
} else
{}
return dom121129;
})());
return dom121128;
})());
dom121124.appendChild((function (){var dom121130 = document.createElement("button");dom121130.className = "btn btn-primary btn-sm";
dom121130.setAttribute("id","update-stats");
dom121130.appendChild(document.createTextNode("Update"));
return dom121130;
})());
return dom121124;
})());
return dom121122;
})());
dom121121.appendChild((function (){var dom121131 = document.createElement("div");dom121131.className = "panel-body";
dom121131.appendChild((function (){var dom121132 = document.createElement("div");dom121132.className = "analytics-highcharts";
return dom121132;
})());
return dom121131;
})());
dom121121.appendChild((function (){var dom121133 = document.createElement("div");dom121133.className = "panel-footer row";
dom121133.appendChild((function (){var dom121134 = document.createElement("div");dom121134.className = "twitter-stats";
dom121134.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8921__auto__ = (function iter__121135(s__121136){return (new cljs.core.LazySeq(null,(function (){var s__121136__$1 = s__121136;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__121136__$1);if(temp__4092__auto__)
{var s__121136__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__121136__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__121136__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__121138 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__121137 = 0;while(true){
if((i__121137 < size__8920__auto__))
{var metric = cljs.core._nth.call(null,c__8919__auto__,i__121137);cljs.core.chunk_append.call(null,b__121138,foundation.test.templates.dashboard_metric.call(null,metric));
{
var G__121139 = (i__121137 + 1);
i__121137 = G__121139;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__121138),iter__121135.call(null,cljs.core.chunk_rest.call(null,s__121136__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__121138),null);
}
} else
{var metric = cljs.core.first.call(null,s__121136__$2);return cljs.core.cons.call(null,foundation.test.templates.dashboard_metric.call(null,metric),iter__121135.call(null,cljs.core.rest.call(null,s__121136__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,foundation.test.templates.dashboard_metrics);
})()));
return dom121134;
})());
return dom121133;
})());
return dom121121;
});
foundation.test.templates.datagrid_filter = (function datagrid_filter(){var dom121142 = document.createElement("div");dom121142.className = "autocomplete";
dom121142.appendChild((function (){var dom121143 = document.createElement("input");dom121143.className = "form-control";
if("text")
{dom121143.setAttribute("type","text");
} else
{}
if("What are you looking for?")
{dom121143.setAttribute("placeholder","What are you looking for?");
} else
{}
return dom121143;
})());
return dom121142;
});
foundation.test.templates.datagrid_header = (function datagrid_header(columns){var dom121150 = document.createElement("thead");dom121150.setAttribute("id","datagrid-header");
dom121150.appendChild((function (){var dom121151 = document.createElement("tr");dom121151.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8921__auto__ = (function iter__121152(s__121153){return (new cljs.core.LazySeq(null,(function (){var s__121153__$1 = s__121153;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__121153__$1);if(temp__4092__auto__)
{var s__121153__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__121153__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__121153__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__121155 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__121154 = 0;while(true){
if((i__121154 < size__8920__auto__))
{var col = cljs.core._nth.call(null,c__8919__auto__,i__121154);cljs.core.chunk_append.call(null,b__121155,foundation.test.cells.th.call(null,col));
{
var G__121156 = (i__121154 + 1);
i__121154 = G__121156;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__121155),iter__121152.call(null,cljs.core.chunk_rest.call(null,s__121153__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__121155),null);
}
} else
{var col = cljs.core.first.call(null,s__121153__$2);return cljs.core.cons.call(null,foundation.test.cells.th.call(null,col),iter__121152.call(null,cljs.core.rest.call(null,s__121153__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,columns);
})()));
return dom121151;
})());
return dom121150;
});
foundation.test.templates.datagrid_row = (function datagrid_row(model,columns){var dom121162 = document.createElement("tr");dom121162.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8921__auto__ = (function iter__121163(s__121164){return (new cljs.core.LazySeq(null,(function (){var s__121164__$1 = s__121164;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__121164__$1);if(temp__4092__auto__)
{var s__121164__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__121164__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__121164__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__121166 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__121165 = 0;while(true){
if((i__121165 < size__8920__auto__))
{var col = cljs.core._nth.call(null,c__8919__auto__,i__121165);cljs.core.chunk_append.call(null,b__121166,foundation.test.cells.td.call(null,col,model));
{
var G__121167 = (i__121165 + 1);
i__121165 = G__121167;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__121166),iter__121163.call(null,cljs.core.chunk_rest.call(null,s__121164__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__121166),null);
}
} else
{var col = cljs.core.first.call(null,s__121164__$2);return cljs.core.cons.call(null,foundation.test.cells.td.call(null,col,model),iter__121163.call(null,cljs.core.rest.call(null,s__121164__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,columns);
})()));
return dom121162;
});
foundation.test.templates.datagrid_body = (function datagrid_body(coll,columns){var dom121173 = document.createElement("tbody");dom121173.className = "datagrid-tbody";
dom121173.setAttribute("id","datagrid-body");
dom121173.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8921__auto__ = (function iter__121174(s__121175){return (new cljs.core.LazySeq(null,(function (){var s__121175__$1 = s__121175;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__121175__$1);if(temp__4092__auto__)
{var s__121175__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__121175__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__121175__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__121177 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__121176 = 0;while(true){
if((i__121176 < size__8920__auto__))
{var model = cljs.core._nth.call(null,c__8919__auto__,i__121176);cljs.core.chunk_append.call(null,b__121177,foundation.test.templates.datagrid_row.call(null,model,columns));
{
var G__121178 = (i__121176 + 1);
i__121176 = G__121178;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__121177),iter__121174.call(null,cljs.core.chunk_rest.call(null,s__121175__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__121177),null);
}
} else
{var model = cljs.core.first.call(null,s__121175__$2);return cljs.core.cons.call(null,foundation.test.templates.datagrid_row.call(null,model,columns),iter__121174.call(null,cljs.core.rest.call(null,s__121175__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,coll);
})()));
return dom121173;
});
foundation.test.templates.datagrid_breadcrumb = (function datagrid_breadcrumb(){var dom121190 = document.createElement("ol");dom121190.className = "breadcrumb";
dom121190.appendChild((function (){var dom121191 = document.createElement("li");dom121191.className = "active";
dom121191.setAttribute("id","account");
dom121191.appendChild((function (){var dom121192 = document.createElement("div");dom121192.className = "arrow-down";
return dom121192;
})());
dom121191.appendChild((function (){var dom121193 = document.createElement("a");dom121193.appendChild(document.createTextNode("Accounts"));
return dom121193;
})());
dom121191.appendChild((function (){var dom121194 = document.createElement("div");dom121194.className = "arrow-up";
return dom121194;
})());
return dom121191;
})());
dom121190.appendChild((function (){var dom121195 = document.createElement("li");dom121195.className = "hidden";
dom121195.setAttribute("id","campaign");
dom121195.appendChild((function (){var dom121196 = document.createElement("a");dom121196.appendChild(document.createTextNode("Campaigns"));
return dom121196;
})());
return dom121195;
})());
dom121190.appendChild((function (){var dom121197 = document.createElement("li");dom121197.className = "hidden";
dom121197.setAttribute("id","line_item");
dom121197.appendChild((function (){var dom121198 = document.createElement("a");dom121198.appendChild(document.createTextNode("Line Items"));
return dom121198;
})());
return dom121197;
})());
dom121190.appendChild((function (){var dom121199 = document.createElement("li");dom121199.className = "hidden";
dom121199.setAttribute("id","promoted_tweet");
dom121199.appendChild((function (){var dom121200 = document.createElement("a");dom121200.appendChild(document.createTextNode("Promoted Products"));
return dom121200;
})());
return dom121199;
})());
return dom121190;
});
foundation.test.templates.datagrid_table = (function datagrid_table(model,coll){return dommy.template.__GT_node_like.call(null,(function (){var cols = foundation.test.models.columns.call(null,model);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table#datagrid-table.table","table#datagrid-table.table",2230740568),foundation.test.templates.datagrid_header.call(null,cols),foundation.test.templates.datagrid_body.call(null,coll,cols)], null);
})());
});
foundation.test.templates.datagrid = (function datagrid(id){var dom121216 = document.createElement("div");dom121216.className = "datagrid-container panel panel-default";
if(cljs.core.truth_(id))
{dom121216.setAttribute("id",id);
} else
{}
dom121216.appendChild((function (){var dom121217 = document.createElement("div");dom121217.className = "panel-heading";
dom121217.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.templates.datagrid_breadcrumb.call(null)));
dom121217.appendChild((function (){var dom121218 = document.createElement("form");dom121218.className = "form-inline pull-right";
dom121218.appendChild((function (){var dom121219 = document.createElement("div");dom121219.className = "form-group";
dom121219.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.templates.datagrid_filter.call(null)));
return dom121219;
})());
return dom121218;
})());
return dom121217;
})());
dom121216.appendChild((function (){var dom121220 = document.createElement("div");dom121220.className = "panel-body";
return dom121220;
})());
dom121216.appendChild((function (){var dom121221 = document.createElement("div");dom121221.className = "panel-footer";
dom121221.appendChild((function (){var dom121222 = document.createElement("div");dom121222.className = "form-inline";
dom121222.appendChild((function (){var dom121223 = document.createElement("div");dom121223.className = "form-group";
dom121223.appendChild((function (){var dom121224 = document.createElement("button");dom121224.className = "btn btn-success btn-sm";
dom121224.setAttribute("id","new");
dom121224.appendChild(document.createTextNode("New"));
return dom121224;
})());
return dom121223;
})());
dom121222.appendChild((function (){var dom121225 = document.createElement("div");dom121225.className = "form-group";
dom121225.appendChild((function (){var dom121226 = document.createElement("button");dom121226.className = "btn btn-info btn-sm disabled";
dom121226.setAttribute("id","save");
dom121226.appendChild(document.createTextNode("Save"));
return dom121226;
})());
return dom121225;
})());
dom121222.appendChild((function (){var dom121227 = document.createElement("div");dom121227.className = "form-group";
dom121227.appendChild((function (){var dom121228 = document.createElement("button");dom121228.className = "btn btn-danger btn-sm disabled";
dom121228.setAttribute("id","delete");
dom121228.appendChild(document.createTextNode("Delete"));
return dom121228;
})());
return dom121227;
})());
dom121222.appendChild((function (){var dom121229 = document.createElement("div");dom121229.className = "form-group";
dom121229.appendChild((function (){var dom121230 = document.createElement("button");dom121230.className = "btn btn-primary btn-sm disabled";
dom121230.setAttribute("id","dupe");
dom121230.appendChild(document.createTextNode("Duplicate"));
return dom121230;
})());
return dom121229;
})());
return dom121222;
})());
return dom121221;
})());
return dom121216;
});
foundation.test.templates.twitter_power = (function twitter_power(id){var dom121232 = document.createElement("div");if(cljs.core.truth_(id))
{dom121232.setAttribute("id",id);
} else
{}
return dom121232;
});

//# sourceMappingURL=templates.js.map