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
foundation.test.templates.date_picker = (function date_picker(el,init_date,date_pattern){var date_pattern__$1 = (((date_pattern instanceof cljs.core.Keyword))?date_pattern.call(null,cljs_time.format.formatters):date_pattern);var picker = (new goog.ui.InputDatePicker((new goog.i18n.DateTimeFormat(date_pattern__$1)),(new goog.i18n.DateTimeParse(date_pattern__$1))));var G__177403_177405 = picker.getDatePicker();G__177403_177405.setUseSimpleNavigationMenu(true);
G__177403_177405.setAllowNone(true);
var G__177404 = picker;G__177404.decorate(el);
G__177404.setDate(init_date);
return G__177404;
});
foundation.test.templates.dashboard_metrics = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Impressions","CPM","Impression Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Engagements","CPE","Engagement Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clicks","CPC","Click Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Retweets","CPRT","Retweet Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Replies","CPR","Reply Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Follows","CPF","Follow Rate"], null)], null);
foundation.test.templates.dashboard_metric = (function dashboard_metric(p__177406){var vec__177415 = p__177406;var metric = cljs.core.nth.call(null,vec__177415,0,null);var cpa = cljs.core.nth.call(null,vec__177415,1,null);var rate = cljs.core.nth.call(null,vec__177415,2,null);var dom177416 = document.createElement("ul");dom177416.className = "list-group";
dom177416.appendChild((function (){var dom177417 = document.createElement("li");dom177417.className = "list-group-item";
if(cljs.core.truth_(metric))
{dom177417.setAttribute("id",metric);
} else
{}
dom177417.appendChild((function (){var dom177418 = document.createElement("h5");dom177418.className = "metric-header list-group-item-heading";
dom177418.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(metric)].join('')));
return dom177418;
})());
return dom177417;
})());
dom177416.appendChild((function (){var dom177419 = document.createElement("li");dom177419.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-cpa")].join('')))
{dom177419.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-cpa")].join(''));
} else
{}
dom177419.appendChild((function (){var dom177420 = document.createElement("small");dom177420.className = "list-group-item-text";
dom177420.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(cpa)].join('')));
return dom177420;
})());
return dom177419;
})());
dom177416.appendChild((function (){var dom177421 = document.createElement("li");dom177421.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-rate")].join('')))
{dom177421.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-rate")].join(''));
} else
{}
dom177421.appendChild((function (){var dom177422 = document.createElement("small");dom177422.className = "list-group-item-text";
dom177422.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(rate)].join('')));
return dom177422;
})());
return dom177421;
})());
return dom177416;
});
foundation.test.templates.dashboard = (function dashboard(id){var dom177441 = document.createElement("div");dom177441.className = "twitter-stats panel panel-default";
if(cljs.core.truth_(id))
{dom177441.setAttribute("id",id);
} else
{}
dom177441.appendChild((function (){var dom177442 = document.createElement("div");dom177442.className = "panel-heading";
dom177442.appendChild((function (){var dom177443 = document.createElement("h1");dom177443.className = "panel-title";
if("resource-id")
{dom177443.setAttribute("id","resource-id");
} else
{}
return dom177443;
})());
dom177442.appendChild((function (){var dom177444 = document.createElement("div");dom177444.className = "form-inline pull-right";
dom177444.appendChild((function (){var dom177445 = document.createElement("div");dom177445.className = "form-group";
dom177445.appendChild((function (){var dom177446 = document.createElement("input");dom177446.className = "form-control date-picker";
dom177446.setAttribute("id","start-time");
if(true)
{dom177446.setAttribute("readonly",true);
} else
{}
return dom177446;
})());
return dom177445;
})());
dom177444.appendChild((function (){var dom177447 = document.createElement("em");if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)))
{dom177447.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)));
} else
{}
dom177447.appendChild(document.createTextNode("to"));
return dom177447;
})());
dom177444.appendChild((function (){var dom177448 = document.createElement("div");dom177448.className = "form-group";
dom177448.appendChild((function (){var dom177449 = document.createElement("input");dom177449.className = "form-control date-picker";
dom177449.setAttribute("id","end-time");
if(true)
{dom177449.setAttribute("readonly",true);
} else
{}
return dom177449;
})());
return dom177448;
})());
dom177444.appendChild((function (){var dom177450 = document.createElement("button");dom177450.className = "btn btn-primary btn-sm";
dom177450.setAttribute("id","update-stats");
dom177450.appendChild(document.createTextNode("Update"));
return dom177450;
})());
return dom177444;
})());
return dom177442;
})());
dom177441.appendChild((function (){var dom177451 = document.createElement("div");dom177451.className = "panel-body";
dom177451.appendChild((function (){var dom177452 = document.createElement("div");dom177452.className = "analytics-highcharts";
return dom177452;
})());
return dom177451;
})());
dom177441.appendChild((function (){var dom177453 = document.createElement("div");dom177453.className = "panel-footer row";
dom177453.appendChild((function (){var dom177454 = document.createElement("div");dom177454.className = "twitter-stats";
dom177454.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8921__auto__ = (function iter__177455(s__177456){return (new cljs.core.LazySeq(null,(function (){var s__177456__$1 = s__177456;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__177456__$1);if(temp__4092__auto__)
{var s__177456__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__177456__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__177456__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__177458 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__177457 = 0;while(true){
if((i__177457 < size__8920__auto__))
{var metric = cljs.core._nth.call(null,c__8919__auto__,i__177457);cljs.core.chunk_append.call(null,b__177458,foundation.test.templates.dashboard_metric.call(null,metric));
{
var G__177459 = (i__177457 + 1);
i__177457 = G__177459;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__177458),iter__177455.call(null,cljs.core.chunk_rest.call(null,s__177456__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__177458),null);
}
} else
{var metric = cljs.core.first.call(null,s__177456__$2);return cljs.core.cons.call(null,foundation.test.templates.dashboard_metric.call(null,metric),iter__177455.call(null,cljs.core.rest.call(null,s__177456__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,foundation.test.templates.dashboard_metrics);
})()));
return dom177454;
})());
return dom177453;
})());
return dom177441;
});
foundation.test.templates.datagrid_filter = (function datagrid_filter(){var dom177462 = document.createElement("div");dom177462.className = "autocomplete";
dom177462.appendChild((function (){var dom177463 = document.createElement("input");dom177463.className = "form-control";
if("text")
{dom177463.setAttribute("type","text");
} else
{}
if("What are you looking for?")
{dom177463.setAttribute("placeholder","What are you looking for?");
} else
{}
return dom177463;
})());
return dom177462;
});
foundation.test.templates.datagrid_header = (function datagrid_header(columns){var dom177470 = document.createElement("thead");dom177470.setAttribute("id","datagrid-header");
dom177470.appendChild((function (){var dom177471 = document.createElement("tr");dom177471.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8921__auto__ = (function iter__177472(s__177473){return (new cljs.core.LazySeq(null,(function (){var s__177473__$1 = s__177473;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__177473__$1);if(temp__4092__auto__)
{var s__177473__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__177473__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__177473__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__177475 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__177474 = 0;while(true){
if((i__177474 < size__8920__auto__))
{var col = cljs.core._nth.call(null,c__8919__auto__,i__177474);cljs.core.chunk_append.call(null,b__177475,foundation.test.cells.th.call(null,col));
{
var G__177476 = (i__177474 + 1);
i__177474 = G__177476;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__177475),iter__177472.call(null,cljs.core.chunk_rest.call(null,s__177473__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__177475),null);
}
} else
{var col = cljs.core.first.call(null,s__177473__$2);return cljs.core.cons.call(null,foundation.test.cells.th.call(null,col),iter__177472.call(null,cljs.core.rest.call(null,s__177473__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,columns);
})()));
return dom177471;
})());
return dom177470;
});
foundation.test.templates.datagrid_row = (function datagrid_row(model,columns){var dom177482 = document.createElement("tr");dom177482.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8921__auto__ = (function iter__177483(s__177484){return (new cljs.core.LazySeq(null,(function (){var s__177484__$1 = s__177484;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__177484__$1);if(temp__4092__auto__)
{var s__177484__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__177484__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__177484__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__177486 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__177485 = 0;while(true){
if((i__177485 < size__8920__auto__))
{var col = cljs.core._nth.call(null,c__8919__auto__,i__177485);cljs.core.chunk_append.call(null,b__177486,foundation.test.cells.td.call(null,col,model));
{
var G__177487 = (i__177485 + 1);
i__177485 = G__177487;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__177486),iter__177483.call(null,cljs.core.chunk_rest.call(null,s__177484__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__177486),null);
}
} else
{var col = cljs.core.first.call(null,s__177484__$2);return cljs.core.cons.call(null,foundation.test.cells.td.call(null,col,model),iter__177483.call(null,cljs.core.rest.call(null,s__177484__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,columns);
})()));
return dom177482;
});
foundation.test.templates.datagrid_body = (function datagrid_body(coll,columns){var dom177493 = document.createElement("tbody");dom177493.className = "datagrid-tbody";
dom177493.setAttribute("id","datagrid-body");
dom177493.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8921__auto__ = (function iter__177494(s__177495){return (new cljs.core.LazySeq(null,(function (){var s__177495__$1 = s__177495;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__177495__$1);if(temp__4092__auto__)
{var s__177495__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__177495__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__177495__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__177497 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__177496 = 0;while(true){
if((i__177496 < size__8920__auto__))
{var model = cljs.core._nth.call(null,c__8919__auto__,i__177496);cljs.core.chunk_append.call(null,b__177497,foundation.test.templates.datagrid_row.call(null,model,columns));
{
var G__177498 = (i__177496 + 1);
i__177496 = G__177498;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__177497),iter__177494.call(null,cljs.core.chunk_rest.call(null,s__177495__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__177497),null);
}
} else
{var model = cljs.core.first.call(null,s__177495__$2);return cljs.core.cons.call(null,foundation.test.templates.datagrid_row.call(null,model,columns),iter__177494.call(null,cljs.core.rest.call(null,s__177495__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,coll);
})()));
return dom177493;
});
foundation.test.templates.datagrid_breadcrumb = (function datagrid_breadcrumb(){var dom177510 = document.createElement("ol");dom177510.className = "breadcrumb";
dom177510.appendChild((function (){var dom177511 = document.createElement("li");dom177511.className = "active";
dom177511.setAttribute("id","account");
dom177511.appendChild((function (){var dom177512 = document.createElement("div");dom177512.className = "arrow-down";
return dom177512;
})());
dom177511.appendChild((function (){var dom177513 = document.createElement("a");dom177513.appendChild(document.createTextNode("Accounts"));
return dom177513;
})());
dom177511.appendChild((function (){var dom177514 = document.createElement("div");dom177514.className = "arrow-up";
return dom177514;
})());
return dom177511;
})());
dom177510.appendChild((function (){var dom177515 = document.createElement("li");dom177515.className = "hidden";
dom177515.setAttribute("id","campaign");
dom177515.appendChild((function (){var dom177516 = document.createElement("a");dom177516.appendChild(document.createTextNode("Campaigns"));
return dom177516;
})());
return dom177515;
})());
dom177510.appendChild((function (){var dom177517 = document.createElement("li");dom177517.className = "hidden";
dom177517.setAttribute("id","line_item");
dom177517.appendChild((function (){var dom177518 = document.createElement("a");dom177518.appendChild(document.createTextNode("Line Items"));
return dom177518;
})());
return dom177517;
})());
dom177510.appendChild((function (){var dom177519 = document.createElement("li");dom177519.className = "hidden";
dom177519.setAttribute("id","promoted_tweet");
dom177519.appendChild((function (){var dom177520 = document.createElement("a");dom177520.appendChild(document.createTextNode("Promoted Products"));
return dom177520;
})());
return dom177519;
})());
return dom177510;
});
foundation.test.templates.datagrid_table = (function datagrid_table(model,coll){return dommy.template.__GT_node_like.call(null,(function (){var cols = foundation.test.models.columns.call(null,model);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table#datagrid-table.table","table#datagrid-table.table",2230740568),foundation.test.templates.datagrid_header.call(null,cols),foundation.test.templates.datagrid_body.call(null,coll,cols)], null);
})());
});
foundation.test.templates.datagrid = (function datagrid(id){var dom177536 = document.createElement("div");dom177536.className = "datagrid-container panel panel-default";
if(cljs.core.truth_(id))
{dom177536.setAttribute("id",id);
} else
{}
dom177536.appendChild((function (){var dom177537 = document.createElement("div");dom177537.className = "panel-heading";
dom177537.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.templates.datagrid_breadcrumb.call(null)));
dom177537.appendChild((function (){var dom177538 = document.createElement("form");dom177538.className = "form-inline pull-right";
dom177538.appendChild((function (){var dom177539 = document.createElement("div");dom177539.className = "form-group";
dom177539.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.templates.datagrid_filter.call(null)));
return dom177539;
})());
return dom177538;
})());
return dom177537;
})());
dom177536.appendChild((function (){var dom177540 = document.createElement("div");dom177540.className = "panel-body";
return dom177540;
})());
dom177536.appendChild((function (){var dom177541 = document.createElement("div");dom177541.className = "panel-footer";
dom177541.appendChild((function (){var dom177542 = document.createElement("div");dom177542.className = "form-inline";
dom177542.appendChild((function (){var dom177543 = document.createElement("div");dom177543.className = "form-group";
dom177543.appendChild((function (){var dom177544 = document.createElement("button");dom177544.className = "btn btn-success btn-sm";
dom177544.setAttribute("id","new");
dom177544.appendChild(document.createTextNode("New"));
return dom177544;
})());
return dom177543;
})());
dom177542.appendChild((function (){var dom177545 = document.createElement("div");dom177545.className = "form-group";
dom177545.appendChild((function (){var dom177546 = document.createElement("button");dom177546.className = "btn btn-info btn-sm disabled";
dom177546.setAttribute("id","save");
dom177546.appendChild(document.createTextNode("Save"));
return dom177546;
})());
return dom177545;
})());
dom177542.appendChild((function (){var dom177547 = document.createElement("div");dom177547.className = "form-group";
dom177547.appendChild((function (){var dom177548 = document.createElement("button");dom177548.className = "btn btn-danger btn-sm disabled";
dom177548.setAttribute("id","delete");
dom177548.appendChild(document.createTextNode("Delete"));
return dom177548;
})());
return dom177547;
})());
dom177542.appendChild((function (){var dom177549 = document.createElement("div");dom177549.className = "form-group";
dom177549.appendChild((function (){var dom177550 = document.createElement("button");dom177550.className = "btn btn-primary btn-sm disabled";
dom177550.setAttribute("id","dupe");
dom177550.appendChild(document.createTextNode("Duplicate"));
return dom177550;
})());
return dom177549;
})());
return dom177542;
})());
return dom177541;
})());
return dom177536;
});
foundation.test.templates.twitter_power = (function twitter_power(id){var dom177552 = document.createElement("div");if(cljs.core.truth_(id))
{dom177552.setAttribute("id",id);
} else
{}
return dom177552;
});

//# sourceMappingURL=templates.js.map