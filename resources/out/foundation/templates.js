// Compiled by ClojureScript 0.0-2080
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
foundation.templates.date_picker = (function date_picker(el,init_date,date_pattern){var date_pattern__$1 = (((date_pattern instanceof cljs.core.Keyword))?date_pattern.call(null,cljs_time.format.formatters):date_pattern);var picker = (new goog.ui.InputDatePicker((new goog.i18n.DateTimeFormat(date_pattern__$1)),(new goog.i18n.DateTimeParse(date_pattern__$1))));var G__76275_76277 = picker.getDatePicker();G__76275_76277.setUseSimpleNavigationMenu(true);
G__76275_76277.setAllowNone(true);
var G__76276 = picker;G__76276.decorate(el);
G__76276.setDate(init_date);
return G__76276;
});
foundation.templates.dashboard_metrics = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Impressions","CPM","Impression Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Engagements","CPE","Engagement Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clicks","CPC","Click Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Retweets","CPRT","Retweet Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Replies","CPR","Reply Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Follows","CPF","Follow Rate"], null)], null);
foundation.templates.dashboard_metric = (function dashboard_metric(p__76278){var vec__76287 = p__76278;var metric = cljs.core.nth.call(null,vec__76287,0,null);var cpa = cljs.core.nth.call(null,vec__76287,1,null);var rate = cljs.core.nth.call(null,vec__76287,2,null);var dom76288 = document.createElement("ul");dom76288.className = "list-group";
dom76288.appendChild((function (){var dom76289 = document.createElement("li");dom76289.className = "list-group-item";
if(cljs.core.truth_(metric))
{dom76289.setAttribute("id",metric);
} else
{}
dom76289.appendChild((function (){var dom76290 = document.createElement("h5");dom76290.className = "metric-header list-group-item-heading";
dom76290.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(metric)].join('')));
return dom76290;
})());
return dom76289;
})());
dom76288.appendChild((function (){var dom76291 = document.createElement("li");dom76291.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-cpa")].join('')))
{dom76291.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-cpa")].join(''));
} else
{}
dom76291.appendChild((function (){var dom76292 = document.createElement("small");dom76292.className = "list-group-item-text";
dom76292.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(cpa)].join('')));
return dom76292;
})());
return dom76291;
})());
dom76288.appendChild((function (){var dom76293 = document.createElement("li");dom76293.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-rate")].join('')))
{dom76293.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-rate")].join(''));
} else
{}
dom76293.appendChild((function (){var dom76294 = document.createElement("small");dom76294.className = "list-group-item-text";
dom76294.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(rate)].join('')));
return dom76294;
})());
return dom76293;
})());
return dom76288;
});
foundation.templates.dashboard = (function dashboard(id){var dom76313 = document.createElement("div");dom76313.className = "twitter-stats panel panel-default";
if(cljs.core.truth_(id))
{dom76313.setAttribute("id",id);
} else
{}
dom76313.appendChild((function (){var dom76314 = document.createElement("div");dom76314.className = "panel-heading";
dom76314.appendChild((function (){var dom76315 = document.createElement("h1");dom76315.className = "panel-title";
if("resource-id")
{dom76315.setAttribute("id","resource-id");
} else
{}
return dom76315;
})());
dom76314.appendChild((function (){var dom76316 = document.createElement("div");dom76316.className = "form-inline pull-right";
dom76316.appendChild((function (){var dom76317 = document.createElement("div");dom76317.className = "form-group";
dom76317.appendChild((function (){var dom76318 = document.createElement("input");dom76318.className = "form-control date-picker";
dom76318.setAttribute("id","start-time");
if(true)
{dom76318.setAttribute("readonly",true);
} else
{}
return dom76318;
})());
return dom76317;
})());
dom76316.appendChild((function (){var dom76319 = document.createElement("em");if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)))
{dom76319.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)));
} else
{}
dom76319.appendChild(document.createTextNode("to"));
return dom76319;
})());
dom76316.appendChild((function (){var dom76320 = document.createElement("div");dom76320.className = "form-group";
dom76320.appendChild((function (){var dom76321 = document.createElement("input");dom76321.className = "form-control date-picker";
dom76321.setAttribute("id","end-time");
if(true)
{dom76321.setAttribute("readonly",true);
} else
{}
return dom76321;
})());
return dom76320;
})());
dom76316.appendChild((function (){var dom76322 = document.createElement("button");dom76322.className = "btn btn-primary btn-sm";
dom76322.setAttribute("id","update-stats");
dom76322.appendChild(document.createTextNode("Update"));
return dom76322;
})());
return dom76316;
})());
return dom76314;
})());
dom76313.appendChild((function (){var dom76323 = document.createElement("div");dom76323.className = "panel-body";
dom76323.appendChild((function (){var dom76324 = document.createElement("div");dom76324.className = "analytics-highcharts";
return dom76324;
})());
return dom76323;
})());
dom76313.appendChild((function (){var dom76325 = document.createElement("div");dom76325.className = "panel-footer row";
dom76325.appendChild((function (){var dom76326 = document.createElement("div");dom76326.className = "twitter-stats";
dom76326.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14516__auto__ = (function iter__76327(s__76328){return (new cljs.core.LazySeq(null,(function (){var s__76328__$1 = s__76328;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__76328__$1);if(temp__4092__auto__)
{var s__76328__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__76328__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__76328__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__76330 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__76329 = 0;while(true){
if((i__76329 < size__14515__auto__))
{var metric = cljs.core._nth.call(null,c__14514__auto__,i__76329);cljs.core.chunk_append.call(null,b__76330,foundation.templates.dashboard_metric.call(null,metric));
{
var G__76331 = (i__76329 + 1);
i__76329 = G__76331;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__76330),iter__76327.call(null,cljs.core.chunk_rest.call(null,s__76328__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__76330),null);
}
} else
{var metric = cljs.core.first.call(null,s__76328__$2);return cljs.core.cons.call(null,foundation.templates.dashboard_metric.call(null,metric),iter__76327.call(null,cljs.core.rest.call(null,s__76328__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14516__auto__.call(null,foundation.templates.dashboard_metrics);
})()));
return dom76326;
})());
return dom76325;
})());
return dom76313;
});
foundation.templates.datagrid_filter = (function datagrid_filter(){var dom76334 = document.createElement("div");dom76334.className = "autocomplete";
dom76334.appendChild((function (){var dom76335 = document.createElement("input");dom76335.className = "form-control";
if("text")
{dom76335.setAttribute("type","text");
} else
{}
if("What are you looking for?")
{dom76335.setAttribute("placeholder","What are you looking for?");
} else
{}
return dom76335;
})());
return dom76334;
});
foundation.templates.datagrid_header = (function datagrid_header(columns){var dom76342 = document.createElement("thead");dom76342.setAttribute("id","datagrid-header");
dom76342.appendChild((function (){var dom76343 = document.createElement("tr");dom76343.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14516__auto__ = (function iter__76344(s__76345){return (new cljs.core.LazySeq(null,(function (){var s__76345__$1 = s__76345;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__76345__$1);if(temp__4092__auto__)
{var s__76345__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__76345__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__76345__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__76347 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__76346 = 0;while(true){
if((i__76346 < size__14515__auto__))
{var col = cljs.core._nth.call(null,c__14514__auto__,i__76346);cljs.core.chunk_append.call(null,b__76347,foundation.cells.th.call(null,col));
{
var G__76348 = (i__76346 + 1);
i__76346 = G__76348;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__76347),iter__76344.call(null,cljs.core.chunk_rest.call(null,s__76345__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__76347),null);
}
} else
{var col = cljs.core.first.call(null,s__76345__$2);return cljs.core.cons.call(null,foundation.cells.th.call(null,col),iter__76344.call(null,cljs.core.rest.call(null,s__76345__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14516__auto__.call(null,columns);
})()));
return dom76343;
})());
return dom76342;
});
foundation.templates.datagrid_row = (function datagrid_row(model,columns){var dom76354 = document.createElement("tr");dom76354.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14516__auto__ = (function iter__76355(s__76356){return (new cljs.core.LazySeq(null,(function (){var s__76356__$1 = s__76356;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__76356__$1);if(temp__4092__auto__)
{var s__76356__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__76356__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__76356__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__76358 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__76357 = 0;while(true){
if((i__76357 < size__14515__auto__))
{var col = cljs.core._nth.call(null,c__14514__auto__,i__76357);cljs.core.chunk_append.call(null,b__76358,foundation.cells.td.call(null,col,model));
{
var G__76359 = (i__76357 + 1);
i__76357 = G__76359;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__76358),iter__76355.call(null,cljs.core.chunk_rest.call(null,s__76356__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__76358),null);
}
} else
{var col = cljs.core.first.call(null,s__76356__$2);return cljs.core.cons.call(null,foundation.cells.td.call(null,col,model),iter__76355.call(null,cljs.core.rest.call(null,s__76356__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14516__auto__.call(null,columns);
})()));
return dom76354;
});
foundation.templates.datagrid_body = (function datagrid_body(coll,columns){var dom76365 = document.createElement("tbody");dom76365.className = "datagrid-tbody";
dom76365.setAttribute("id","datagrid-body");
dom76365.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14516__auto__ = (function iter__76366(s__76367){return (new cljs.core.LazySeq(null,(function (){var s__76367__$1 = s__76367;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__76367__$1);if(temp__4092__auto__)
{var s__76367__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__76367__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__76367__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__76369 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__76368 = 0;while(true){
if((i__76368 < size__14515__auto__))
{var model = cljs.core._nth.call(null,c__14514__auto__,i__76368);cljs.core.chunk_append.call(null,b__76369,foundation.templates.datagrid_row.call(null,model,columns));
{
var G__76370 = (i__76368 + 1);
i__76368 = G__76370;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__76369),iter__76366.call(null,cljs.core.chunk_rest.call(null,s__76367__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__76369),null);
}
} else
{var model = cljs.core.first.call(null,s__76367__$2);return cljs.core.cons.call(null,foundation.templates.datagrid_row.call(null,model,columns),iter__76366.call(null,cljs.core.rest.call(null,s__76367__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14516__auto__.call(null,coll);
})()));
return dom76365;
});
foundation.templates.datagrid_breadcrumb = (function datagrid_breadcrumb(){var dom76382 = document.createElement("ol");dom76382.className = "breadcrumb";
dom76382.appendChild((function (){var dom76383 = document.createElement("li");dom76383.className = "active";
dom76383.setAttribute("id","account");
dom76383.appendChild((function (){var dom76384 = document.createElement("div");dom76384.className = "arrow-down";
return dom76384;
})());
dom76383.appendChild((function (){var dom76385 = document.createElement("a");dom76385.appendChild(document.createTextNode("Accounts"));
return dom76385;
})());
dom76383.appendChild((function (){var dom76386 = document.createElement("div");dom76386.className = "arrow-up";
return dom76386;
})());
return dom76383;
})());
dom76382.appendChild((function (){var dom76387 = document.createElement("li");dom76387.className = "hidden";
dom76387.setAttribute("id","campaign");
dom76387.appendChild((function (){var dom76388 = document.createElement("a");dom76388.appendChild(document.createTextNode("Campaigns"));
return dom76388;
})());
return dom76387;
})());
dom76382.appendChild((function (){var dom76389 = document.createElement("li");dom76389.className = "hidden";
dom76389.setAttribute("id","line_item");
dom76389.appendChild((function (){var dom76390 = document.createElement("a");dom76390.appendChild(document.createTextNode("Line Items"));
return dom76390;
})());
return dom76389;
})());
dom76382.appendChild((function (){var dom76391 = document.createElement("li");dom76391.className = "hidden";
dom76391.setAttribute("id","promoted_tweet");
dom76391.appendChild((function (){var dom76392 = document.createElement("a");dom76392.appendChild(document.createTextNode("Promoted Products"));
return dom76392;
})());
return dom76391;
})());
return dom76382;
});
foundation.templates.datagrid_table = (function datagrid_table(model,coll){return dommy.template.__GT_node_like.call(null,(function (){var cols = foundation.models.columns.call(null,model);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table#datagrid-table.table","table#datagrid-table.table",2230740568),foundation.templates.datagrid_header.call(null,cols),foundation.templates.datagrid_body.call(null,coll,cols)], null);
})());
});
foundation.templates.datagrid = (function datagrid(id){var dom76408 = document.createElement("div");dom76408.className = "datagrid-container panel panel-default";
if(cljs.core.truth_(id))
{dom76408.setAttribute("id",id);
} else
{}
dom76408.appendChild((function (){var dom76409 = document.createElement("div");dom76409.className = "panel-heading";
dom76409.appendChild(dommy.template.__GT_node_like.call(null,foundation.templates.datagrid_breadcrumb.call(null)));
dom76409.appendChild((function (){var dom76410 = document.createElement("form");dom76410.className = "form-inline pull-right";
dom76410.appendChild((function (){var dom76411 = document.createElement("div");dom76411.className = "form-group";
dom76411.appendChild(dommy.template.__GT_node_like.call(null,foundation.templates.datagrid_filter.call(null)));
return dom76411;
})());
return dom76410;
})());
return dom76409;
})());
dom76408.appendChild((function (){var dom76412 = document.createElement("div");dom76412.className = "panel-body";
return dom76412;
})());
dom76408.appendChild((function (){var dom76413 = document.createElement("div");dom76413.className = "panel-footer";
dom76413.appendChild((function (){var dom76414 = document.createElement("div");dom76414.className = "form-inline";
dom76414.appendChild((function (){var dom76415 = document.createElement("div");dom76415.className = "form-group";
dom76415.appendChild((function (){var dom76416 = document.createElement("button");dom76416.className = "btn btn-success btn-sm";
dom76416.setAttribute("id","new");
dom76416.appendChild(document.createTextNode("New"));
return dom76416;
})());
return dom76415;
})());
dom76414.appendChild((function (){var dom76417 = document.createElement("div");dom76417.className = "form-group";
dom76417.appendChild((function (){var dom76418 = document.createElement("button");dom76418.className = "btn btn-info btn-sm disabled";
dom76418.setAttribute("id","save");
dom76418.appendChild(document.createTextNode("Save"));
return dom76418;
})());
return dom76417;
})());
dom76414.appendChild((function (){var dom76419 = document.createElement("div");dom76419.className = "form-group";
dom76419.appendChild((function (){var dom76420 = document.createElement("button");dom76420.className = "btn btn-danger btn-sm disabled";
dom76420.setAttribute("id","delete");
dom76420.appendChild(document.createTextNode("Delete"));
return dom76420;
})());
return dom76419;
})());
dom76414.appendChild((function (){var dom76421 = document.createElement("div");dom76421.className = "form-group";
dom76421.appendChild((function (){var dom76422 = document.createElement("button");dom76422.className = "btn btn-primary btn-sm disabled";
dom76422.setAttribute("id","dupe");
dom76422.appendChild(document.createTextNode("Duplicate"));
return dom76422;
})());
return dom76421;
})());
return dom76414;
})());
return dom76413;
})());
return dom76408;
});
foundation.templates.twitter_power = (function twitter_power(id){var dom76424 = document.createElement("div");if(cljs.core.truth_(id))
{dom76424.setAttribute("id",id);
} else
{}
return dom76424;
});

//# sourceMappingURL=templates.js.map