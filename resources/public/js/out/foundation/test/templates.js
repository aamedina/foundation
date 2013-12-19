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
foundation.test.templates.date_picker = (function date_picker(el,init_date,date_pattern){var date_pattern__$1 = (((date_pattern instanceof cljs.core.Keyword))?date_pattern.call(null,cljs_time.format.formatters):date_pattern);var picker = (new goog.ui.InputDatePicker((new goog.i18n.DateTimeFormat(date_pattern__$1)),(new goog.i18n.DateTimeParse(date_pattern__$1))));var G__185279_185281 = picker.getDatePicker();G__185279_185281.setUseSimpleNavigationMenu(true);
G__185279_185281.setAllowNone(true);
var G__185280 = picker;G__185280.decorate(el);
G__185280.setDate(init_date);
return G__185280;
});
foundation.test.templates.dashboard_metrics = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Impressions","CPM","Impression Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Engagements","CPE","Engagement Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clicks","CPC","Click Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Retweets","CPRT","Retweet Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Replies","CPR","Reply Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Follows","CPF","Follow Rate"], null)], null);
foundation.test.templates.dashboard_metric = (function dashboard_metric(p__185282){var vec__185291 = p__185282;var metric = cljs.core.nth.call(null,vec__185291,0,null);var cpa = cljs.core.nth.call(null,vec__185291,1,null);var rate = cljs.core.nth.call(null,vec__185291,2,null);var dom185292 = document.createElement("ul");dom185292.className = "list-group";
dom185292.appendChild((function (){var dom185293 = document.createElement("li");dom185293.className = "list-group-item";
if(cljs.core.truth_(metric))
{dom185293.setAttribute("id",metric);
} else
{}
dom185293.appendChild((function (){var dom185294 = document.createElement("h5");dom185294.className = "metric-header list-group-item-heading";
dom185294.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(metric)].join('')));
return dom185294;
})());
return dom185293;
})());
dom185292.appendChild((function (){var dom185295 = document.createElement("li");dom185295.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-cpa")].join('')))
{dom185295.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-cpa")].join(''));
} else
{}
dom185295.appendChild((function (){var dom185296 = document.createElement("small");dom185296.className = "list-group-item-text";
dom185296.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(cpa)].join('')));
return dom185296;
})());
return dom185295;
})());
dom185292.appendChild((function (){var dom185297 = document.createElement("li");dom185297.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-rate")].join('')))
{dom185297.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-rate")].join(''));
} else
{}
dom185297.appendChild((function (){var dom185298 = document.createElement("small");dom185298.className = "list-group-item-text";
dom185298.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(rate)].join('')));
return dom185298;
})());
return dom185297;
})());
return dom185292;
});
foundation.test.templates.dashboard = (function dashboard(id){var dom185317 = document.createElement("div");dom185317.className = "twitter-stats panel panel-default";
if(cljs.core.truth_(id))
{dom185317.setAttribute("id",id);
} else
{}
dom185317.appendChild((function (){var dom185318 = document.createElement("div");dom185318.className = "panel-heading";
dom185318.appendChild((function (){var dom185319 = document.createElement("h1");dom185319.className = "panel-title";
if("resource-id")
{dom185319.setAttribute("id","resource-id");
} else
{}
return dom185319;
})());
dom185318.appendChild((function (){var dom185320 = document.createElement("div");dom185320.className = "form-inline pull-right";
dom185320.appendChild((function (){var dom185321 = document.createElement("div");dom185321.className = "form-group";
dom185321.appendChild((function (){var dom185322 = document.createElement("input");dom185322.className = "form-control date-picker";
dom185322.setAttribute("id","start-time");
if(true)
{dom185322.setAttribute("readonly",true);
} else
{}
return dom185322;
})());
return dom185321;
})());
dom185320.appendChild((function (){var dom185323 = document.createElement("em");if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)))
{dom185323.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)));
} else
{}
dom185323.appendChild(document.createTextNode("to"));
return dom185323;
})());
dom185320.appendChild((function (){var dom185324 = document.createElement("div");dom185324.className = "form-group";
dom185324.appendChild((function (){var dom185325 = document.createElement("input");dom185325.className = "form-control date-picker";
dom185325.setAttribute("id","end-time");
if(true)
{dom185325.setAttribute("readonly",true);
} else
{}
return dom185325;
})());
return dom185324;
})());
dom185320.appendChild((function (){var dom185326 = document.createElement("button");dom185326.className = "btn btn-primary btn-sm";
dom185326.setAttribute("id","update-stats");
dom185326.appendChild(document.createTextNode("Update"));
return dom185326;
})());
return dom185320;
})());
return dom185318;
})());
dom185317.appendChild((function (){var dom185327 = document.createElement("div");dom185327.className = "panel-body";
dom185327.appendChild((function (){var dom185328 = document.createElement("div");dom185328.className = "analytics-highcharts";
return dom185328;
})());
return dom185327;
})());
dom185317.appendChild((function (){var dom185329 = document.createElement("div");dom185329.className = "panel-footer row";
dom185329.appendChild((function (){var dom185330 = document.createElement("div");dom185330.className = "twitter-stats";
dom185330.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8921__auto__ = (function iter__185331(s__185332){return (new cljs.core.LazySeq(null,(function (){var s__185332__$1 = s__185332;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__185332__$1);if(temp__4092__auto__)
{var s__185332__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__185332__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__185332__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__185334 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__185333 = 0;while(true){
if((i__185333 < size__8920__auto__))
{var metric = cljs.core._nth.call(null,c__8919__auto__,i__185333);cljs.core.chunk_append.call(null,b__185334,foundation.test.templates.dashboard_metric.call(null,metric));
{
var G__185335 = (i__185333 + 1);
i__185333 = G__185335;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__185334),iter__185331.call(null,cljs.core.chunk_rest.call(null,s__185332__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__185334),null);
}
} else
{var metric = cljs.core.first.call(null,s__185332__$2);return cljs.core.cons.call(null,foundation.test.templates.dashboard_metric.call(null,metric),iter__185331.call(null,cljs.core.rest.call(null,s__185332__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,foundation.test.templates.dashboard_metrics);
})()));
return dom185330;
})());
return dom185329;
})());
return dom185317;
});
foundation.test.templates.datagrid_filter = (function datagrid_filter(){var dom185338 = document.createElement("div");dom185338.className = "autocomplete";
dom185338.appendChild((function (){var dom185339 = document.createElement("input");dom185339.className = "form-control";
if("text")
{dom185339.setAttribute("type","text");
} else
{}
if("What are you looking for?")
{dom185339.setAttribute("placeholder","What are you looking for?");
} else
{}
return dom185339;
})());
return dom185338;
});
foundation.test.templates.datagrid_header = (function datagrid_header(columns){var dom185346 = document.createElement("thead");dom185346.setAttribute("id","datagrid-header");
dom185346.appendChild((function (){var dom185347 = document.createElement("tr");dom185347.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8921__auto__ = (function iter__185348(s__185349){return (new cljs.core.LazySeq(null,(function (){var s__185349__$1 = s__185349;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__185349__$1);if(temp__4092__auto__)
{var s__185349__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__185349__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__185349__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__185351 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__185350 = 0;while(true){
if((i__185350 < size__8920__auto__))
{var col = cljs.core._nth.call(null,c__8919__auto__,i__185350);cljs.core.chunk_append.call(null,b__185351,foundation.test.cells.th.call(null,col));
{
var G__185352 = (i__185350 + 1);
i__185350 = G__185352;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__185351),iter__185348.call(null,cljs.core.chunk_rest.call(null,s__185349__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__185351),null);
}
} else
{var col = cljs.core.first.call(null,s__185349__$2);return cljs.core.cons.call(null,foundation.test.cells.th.call(null,col),iter__185348.call(null,cljs.core.rest.call(null,s__185349__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,columns);
})()));
return dom185347;
})());
return dom185346;
});
foundation.test.templates.datagrid_row = (function datagrid_row(model,columns){var dom185358 = document.createElement("tr");dom185358.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8921__auto__ = (function iter__185359(s__185360){return (new cljs.core.LazySeq(null,(function (){var s__185360__$1 = s__185360;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__185360__$1);if(temp__4092__auto__)
{var s__185360__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__185360__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__185360__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__185362 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__185361 = 0;while(true){
if((i__185361 < size__8920__auto__))
{var col = cljs.core._nth.call(null,c__8919__auto__,i__185361);cljs.core.chunk_append.call(null,b__185362,foundation.test.cells.td.call(null,col,model));
{
var G__185363 = (i__185361 + 1);
i__185361 = G__185363;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__185362),iter__185359.call(null,cljs.core.chunk_rest.call(null,s__185360__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__185362),null);
}
} else
{var col = cljs.core.first.call(null,s__185360__$2);return cljs.core.cons.call(null,foundation.test.cells.td.call(null,col,model),iter__185359.call(null,cljs.core.rest.call(null,s__185360__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,columns);
})()));
return dom185358;
});
foundation.test.templates.datagrid_body = (function datagrid_body(coll,columns){var dom185369 = document.createElement("tbody");dom185369.className = "datagrid-tbody";
dom185369.setAttribute("id","datagrid-body");
dom185369.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8921__auto__ = (function iter__185370(s__185371){return (new cljs.core.LazySeq(null,(function (){var s__185371__$1 = s__185371;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__185371__$1);if(temp__4092__auto__)
{var s__185371__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__185371__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__185371__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__185373 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__185372 = 0;while(true){
if((i__185372 < size__8920__auto__))
{var model = cljs.core._nth.call(null,c__8919__auto__,i__185372);cljs.core.chunk_append.call(null,b__185373,foundation.test.templates.datagrid_row.call(null,model,columns));
{
var G__185374 = (i__185372 + 1);
i__185372 = G__185374;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__185373),iter__185370.call(null,cljs.core.chunk_rest.call(null,s__185371__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__185373),null);
}
} else
{var model = cljs.core.first.call(null,s__185371__$2);return cljs.core.cons.call(null,foundation.test.templates.datagrid_row.call(null,model,columns),iter__185370.call(null,cljs.core.rest.call(null,s__185371__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,coll);
})()));
return dom185369;
});
foundation.test.templates.datagrid_breadcrumb = (function datagrid_breadcrumb(){var dom185386 = document.createElement("ol");dom185386.className = "breadcrumb";
dom185386.appendChild((function (){var dom185387 = document.createElement("li");dom185387.className = "active";
dom185387.setAttribute("id","account");
dom185387.appendChild((function (){var dom185388 = document.createElement("div");dom185388.className = "arrow-down";
return dom185388;
})());
dom185387.appendChild((function (){var dom185389 = document.createElement("a");dom185389.appendChild(document.createTextNode("Accounts"));
return dom185389;
})());
dom185387.appendChild((function (){var dom185390 = document.createElement("div");dom185390.className = "arrow-up";
return dom185390;
})());
return dom185387;
})());
dom185386.appendChild((function (){var dom185391 = document.createElement("li");dom185391.className = "hidden";
dom185391.setAttribute("id","campaign");
dom185391.appendChild((function (){var dom185392 = document.createElement("a");dom185392.appendChild(document.createTextNode("Campaigns"));
return dom185392;
})());
return dom185391;
})());
dom185386.appendChild((function (){var dom185393 = document.createElement("li");dom185393.className = "hidden";
dom185393.setAttribute("id","line_item");
dom185393.appendChild((function (){var dom185394 = document.createElement("a");dom185394.appendChild(document.createTextNode("Line Items"));
return dom185394;
})());
return dom185393;
})());
dom185386.appendChild((function (){var dom185395 = document.createElement("li");dom185395.className = "hidden";
dom185395.setAttribute("id","promoted_tweet");
dom185395.appendChild((function (){var dom185396 = document.createElement("a");dom185396.appendChild(document.createTextNode("Promoted Products"));
return dom185396;
})());
return dom185395;
})());
return dom185386;
});
foundation.test.templates.datagrid_table = (function datagrid_table(model,coll){return dommy.template.__GT_node_like.call(null,(function (){var cols = foundation.test.models.columns.call(null,model);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table#datagrid-table.table","table#datagrid-table.table",2230740568),foundation.test.templates.datagrid_header.call(null,cols),foundation.test.templates.datagrid_body.call(null,coll,cols)], null);
})());
});
foundation.test.templates.datagrid = (function datagrid(id){var dom185412 = document.createElement("div");dom185412.className = "datagrid-container panel panel-default";
if(cljs.core.truth_(id))
{dom185412.setAttribute("id",id);
} else
{}
dom185412.appendChild((function (){var dom185413 = document.createElement("div");dom185413.className = "panel-heading";
dom185413.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.templates.datagrid_breadcrumb.call(null)));
dom185413.appendChild((function (){var dom185414 = document.createElement("form");dom185414.className = "form-inline pull-right";
dom185414.appendChild((function (){var dom185415 = document.createElement("div");dom185415.className = "form-group";
dom185415.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.templates.datagrid_filter.call(null)));
return dom185415;
})());
return dom185414;
})());
return dom185413;
})());
dom185412.appendChild((function (){var dom185416 = document.createElement("div");dom185416.className = "panel-body";
return dom185416;
})());
dom185412.appendChild((function (){var dom185417 = document.createElement("div");dom185417.className = "panel-footer";
dom185417.appendChild((function (){var dom185418 = document.createElement("div");dom185418.className = "form-inline";
dom185418.appendChild((function (){var dom185419 = document.createElement("div");dom185419.className = "form-group";
dom185419.appendChild((function (){var dom185420 = document.createElement("button");dom185420.className = "btn btn-success btn-sm";
dom185420.setAttribute("id","new");
dom185420.appendChild(document.createTextNode("New"));
return dom185420;
})());
return dom185419;
})());
dom185418.appendChild((function (){var dom185421 = document.createElement("div");dom185421.className = "form-group";
dom185421.appendChild((function (){var dom185422 = document.createElement("button");dom185422.className = "btn btn-info btn-sm disabled";
dom185422.setAttribute("id","save");
dom185422.appendChild(document.createTextNode("Save"));
return dom185422;
})());
return dom185421;
})());
dom185418.appendChild((function (){var dom185423 = document.createElement("div");dom185423.className = "form-group";
dom185423.appendChild((function (){var dom185424 = document.createElement("button");dom185424.className = "btn btn-danger btn-sm disabled";
dom185424.setAttribute("id","delete");
dom185424.appendChild(document.createTextNode("Delete"));
return dom185424;
})());
return dom185423;
})());
dom185418.appendChild((function (){var dom185425 = document.createElement("div");dom185425.className = "form-group";
dom185425.appendChild((function (){var dom185426 = document.createElement("button");dom185426.className = "btn btn-primary btn-sm disabled";
dom185426.setAttribute("id","dupe");
dom185426.appendChild(document.createTextNode("Duplicate"));
return dom185426;
})());
return dom185425;
})());
return dom185418;
})());
return dom185417;
})());
return dom185412;
});
foundation.test.templates.twitter_power = (function twitter_power(id){var dom185428 = document.createElement("div");if(cljs.core.truth_(id))
{dom185428.setAttribute("id",id);
} else
{}
return dom185428;
});

//# sourceMappingURL=templates.js.map