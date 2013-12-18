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
foundation.test.templates.date_picker = (function date_picker(el,init_date,date_pattern){var date_pattern__$1 = (((date_pattern instanceof cljs.core.Keyword))?date_pattern.call(null,cljs_time.format.formatters):date_pattern);var picker = (new goog.ui.InputDatePicker((new goog.i18n.DateTimeFormat(date_pattern__$1)),(new goog.i18n.DateTimeParse(date_pattern__$1))));var G__80378_80380 = picker.getDatePicker();G__80378_80380.setUseSimpleNavigationMenu(true);
G__80378_80380.setAllowNone(true);
var G__80379 = picker;G__80379.decorate(el);
G__80379.setDate(init_date);
return G__80379;
});
foundation.test.templates.dashboard_metrics = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Impressions","CPM","Impression Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Engagements","CPE","Engagement Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clicks","CPC","Click Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Retweets","CPRT","Retweet Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Replies","CPR","Reply Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Follows","CPF","Follow Rate"], null)], null);
foundation.test.templates.dashboard_metric = (function dashboard_metric(p__80381){var vec__80390 = p__80381;var metric = cljs.core.nth.call(null,vec__80390,0,null);var cpa = cljs.core.nth.call(null,vec__80390,1,null);var rate = cljs.core.nth.call(null,vec__80390,2,null);var dom80391 = document.createElement("ul");dom80391.className = "list-group";
dom80391.appendChild((function (){var dom80392 = document.createElement("li");dom80392.className = "list-group-item";
if(cljs.core.truth_(metric))
{dom80392.setAttribute("id",metric);
} else
{}
dom80392.appendChild((function (){var dom80393 = document.createElement("h5");dom80393.className = "metric-header list-group-item-heading";
dom80393.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(metric)].join('')));
return dom80393;
})());
return dom80392;
})());
dom80391.appendChild((function (){var dom80394 = document.createElement("li");dom80394.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-cpa")].join('')))
{dom80394.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-cpa")].join(''));
} else
{}
dom80394.appendChild((function (){var dom80395 = document.createElement("small");dom80395.className = "list-group-item-text";
dom80395.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(cpa)].join('')));
return dom80395;
})());
return dom80394;
})());
dom80391.appendChild((function (){var dom80396 = document.createElement("li");dom80396.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-rate")].join('')))
{dom80396.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-rate")].join(''));
} else
{}
dom80396.appendChild((function (){var dom80397 = document.createElement("small");dom80397.className = "list-group-item-text";
dom80397.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(rate)].join('')));
return dom80397;
})());
return dom80396;
})());
return dom80391;
});
foundation.test.templates.dashboard = (function dashboard(id){var dom80416 = document.createElement("div");dom80416.className = "twitter-stats panel panel-default";
if(cljs.core.truth_(id))
{dom80416.setAttribute("id",id);
} else
{}
dom80416.appendChild((function (){var dom80417 = document.createElement("div");dom80417.className = "panel-heading";
dom80417.appendChild((function (){var dom80418 = document.createElement("h1");dom80418.className = "panel-title";
if("resource-id")
{dom80418.setAttribute("id","resource-id");
} else
{}
return dom80418;
})());
dom80417.appendChild((function (){var dom80419 = document.createElement("div");dom80419.className = "form-inline pull-right";
dom80419.appendChild((function (){var dom80420 = document.createElement("div");dom80420.className = "form-group";
dom80420.appendChild((function (){var dom80421 = document.createElement("input");dom80421.className = "form-control date-picker";
dom80421.setAttribute("id","start-time");
if(true)
{dom80421.setAttribute("readonly",true);
} else
{}
return dom80421;
})());
return dom80420;
})());
dom80419.appendChild((function (){var dom80422 = document.createElement("em");if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)))
{dom80422.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)));
} else
{}
dom80422.appendChild(document.createTextNode("to"));
return dom80422;
})());
dom80419.appendChild((function (){var dom80423 = document.createElement("div");dom80423.className = "form-group";
dom80423.appendChild((function (){var dom80424 = document.createElement("input");dom80424.className = "form-control date-picker";
dom80424.setAttribute("id","end-time");
if(true)
{dom80424.setAttribute("readonly",true);
} else
{}
return dom80424;
})());
return dom80423;
})());
dom80419.appendChild((function (){var dom80425 = document.createElement("button");dom80425.className = "btn btn-primary btn-sm";
dom80425.setAttribute("id","update-stats");
dom80425.appendChild(document.createTextNode("Update"));
return dom80425;
})());
return dom80419;
})());
return dom80417;
})());
dom80416.appendChild((function (){var dom80426 = document.createElement("div");dom80426.className = "panel-body";
dom80426.appendChild((function (){var dom80427 = document.createElement("div");dom80427.className = "analytics-highcharts";
return dom80427;
})());
return dom80426;
})());
dom80416.appendChild((function (){var dom80428 = document.createElement("div");dom80428.className = "panel-footer row";
dom80428.appendChild((function (){var dom80429 = document.createElement("div");dom80429.className = "twitter-stats";
dom80429.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8926__auto__ = (function iter__80430(s__80431){return (new cljs.core.LazySeq(null,(function (){var s__80431__$1 = s__80431;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__80431__$1);if(temp__4092__auto__)
{var s__80431__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__80431__$2))
{var c__8924__auto__ = cljs.core.chunk_first.call(null,s__80431__$2);var size__8925__auto__ = cljs.core.count.call(null,c__8924__auto__);var b__80433 = cljs.core.chunk_buffer.call(null,size__8925__auto__);if((function (){var i__80432 = 0;while(true){
if((i__80432 < size__8925__auto__))
{var metric = cljs.core._nth.call(null,c__8924__auto__,i__80432);cljs.core.chunk_append.call(null,b__80433,foundation.test.templates.dashboard_metric.call(null,metric));
{
var G__80434 = (i__80432 + 1);
i__80432 = G__80434;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__80433),iter__80430.call(null,cljs.core.chunk_rest.call(null,s__80431__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__80433),null);
}
} else
{var metric = cljs.core.first.call(null,s__80431__$2);return cljs.core.cons.call(null,foundation.test.templates.dashboard_metric.call(null,metric),iter__80430.call(null,cljs.core.rest.call(null,s__80431__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8926__auto__.call(null,foundation.test.templates.dashboard_metrics);
})()));
return dom80429;
})());
return dom80428;
})());
return dom80416;
});
foundation.test.templates.datagrid_filter = (function datagrid_filter(){var dom80437 = document.createElement("div");dom80437.className = "autocomplete";
dom80437.appendChild((function (){var dom80438 = document.createElement("input");dom80438.className = "form-control";
if("text")
{dom80438.setAttribute("type","text");
} else
{}
if("What are you looking for?")
{dom80438.setAttribute("placeholder","What are you looking for?");
} else
{}
return dom80438;
})());
return dom80437;
});
foundation.test.templates.datagrid_header = (function datagrid_header(columns){var dom80445 = document.createElement("thead");dom80445.setAttribute("id","datagrid-header");
dom80445.appendChild((function (){var dom80446 = document.createElement("tr");dom80446.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8926__auto__ = (function iter__80447(s__80448){return (new cljs.core.LazySeq(null,(function (){var s__80448__$1 = s__80448;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__80448__$1);if(temp__4092__auto__)
{var s__80448__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__80448__$2))
{var c__8924__auto__ = cljs.core.chunk_first.call(null,s__80448__$2);var size__8925__auto__ = cljs.core.count.call(null,c__8924__auto__);var b__80450 = cljs.core.chunk_buffer.call(null,size__8925__auto__);if((function (){var i__80449 = 0;while(true){
if((i__80449 < size__8925__auto__))
{var col = cljs.core._nth.call(null,c__8924__auto__,i__80449);cljs.core.chunk_append.call(null,b__80450,foundation.cells.th.call(null,col));
{
var G__80451 = (i__80449 + 1);
i__80449 = G__80451;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__80450),iter__80447.call(null,cljs.core.chunk_rest.call(null,s__80448__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__80450),null);
}
} else
{var col = cljs.core.first.call(null,s__80448__$2);return cljs.core.cons.call(null,foundation.cells.th.call(null,col),iter__80447.call(null,cljs.core.rest.call(null,s__80448__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8926__auto__.call(null,columns);
})()));
return dom80446;
})());
return dom80445;
});
foundation.test.templates.datagrid_row = (function datagrid_row(model,columns){var dom80457 = document.createElement("tr");dom80457.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8926__auto__ = (function iter__80458(s__80459){return (new cljs.core.LazySeq(null,(function (){var s__80459__$1 = s__80459;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__80459__$1);if(temp__4092__auto__)
{var s__80459__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__80459__$2))
{var c__8924__auto__ = cljs.core.chunk_first.call(null,s__80459__$2);var size__8925__auto__ = cljs.core.count.call(null,c__8924__auto__);var b__80461 = cljs.core.chunk_buffer.call(null,size__8925__auto__);if((function (){var i__80460 = 0;while(true){
if((i__80460 < size__8925__auto__))
{var col = cljs.core._nth.call(null,c__8924__auto__,i__80460);cljs.core.chunk_append.call(null,b__80461,foundation.cells.td.call(null,col,model));
{
var G__80462 = (i__80460 + 1);
i__80460 = G__80462;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__80461),iter__80458.call(null,cljs.core.chunk_rest.call(null,s__80459__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__80461),null);
}
} else
{var col = cljs.core.first.call(null,s__80459__$2);return cljs.core.cons.call(null,foundation.cells.td.call(null,col,model),iter__80458.call(null,cljs.core.rest.call(null,s__80459__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8926__auto__.call(null,columns);
})()));
return dom80457;
});
foundation.test.templates.datagrid_body = (function datagrid_body(coll,columns){var dom80468 = document.createElement("tbody");dom80468.className = "datagrid-tbody";
dom80468.setAttribute("id","datagrid-body");
dom80468.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8926__auto__ = (function iter__80469(s__80470){return (new cljs.core.LazySeq(null,(function (){var s__80470__$1 = s__80470;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__80470__$1);if(temp__4092__auto__)
{var s__80470__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__80470__$2))
{var c__8924__auto__ = cljs.core.chunk_first.call(null,s__80470__$2);var size__8925__auto__ = cljs.core.count.call(null,c__8924__auto__);var b__80472 = cljs.core.chunk_buffer.call(null,size__8925__auto__);if((function (){var i__80471 = 0;while(true){
if((i__80471 < size__8925__auto__))
{var model = cljs.core._nth.call(null,c__8924__auto__,i__80471);cljs.core.chunk_append.call(null,b__80472,foundation.test.templates.datagrid_row.call(null,model,columns));
{
var G__80473 = (i__80471 + 1);
i__80471 = G__80473;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__80472),iter__80469.call(null,cljs.core.chunk_rest.call(null,s__80470__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__80472),null);
}
} else
{var model = cljs.core.first.call(null,s__80470__$2);return cljs.core.cons.call(null,foundation.test.templates.datagrid_row.call(null,model,columns),iter__80469.call(null,cljs.core.rest.call(null,s__80470__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8926__auto__.call(null,coll);
})()));
return dom80468;
});
foundation.test.templates.datagrid_breadcrumb = (function datagrid_breadcrumb(){var dom80485 = document.createElement("ol");dom80485.className = "breadcrumb";
dom80485.appendChild((function (){var dom80486 = document.createElement("li");dom80486.className = "active";
dom80486.setAttribute("id","account");
dom80486.appendChild((function (){var dom80487 = document.createElement("div");dom80487.className = "arrow-down";
return dom80487;
})());
dom80486.appendChild((function (){var dom80488 = document.createElement("a");dom80488.appendChild(document.createTextNode("Accounts"));
return dom80488;
})());
dom80486.appendChild((function (){var dom80489 = document.createElement("div");dom80489.className = "arrow-up";
return dom80489;
})());
return dom80486;
})());
dom80485.appendChild((function (){var dom80490 = document.createElement("li");dom80490.className = "hidden";
dom80490.setAttribute("id","campaign");
dom80490.appendChild((function (){var dom80491 = document.createElement("a");dom80491.appendChild(document.createTextNode("Campaigns"));
return dom80491;
})());
return dom80490;
})());
dom80485.appendChild((function (){var dom80492 = document.createElement("li");dom80492.className = "hidden";
dom80492.setAttribute("id","line_item");
dom80492.appendChild((function (){var dom80493 = document.createElement("a");dom80493.appendChild(document.createTextNode("Line Items"));
return dom80493;
})());
return dom80492;
})());
dom80485.appendChild((function (){var dom80494 = document.createElement("li");dom80494.className = "hidden";
dom80494.setAttribute("id","promoted_tweet");
dom80494.appendChild((function (){var dom80495 = document.createElement("a");dom80495.appendChild(document.createTextNode("Promoted Products"));
return dom80495;
})());
return dom80494;
})());
return dom80485;
});
foundation.test.templates.datagrid_table = (function datagrid_table(model,coll){return dommy.template.__GT_node_like.call(null,(function (){var cols = foundation.models.columns.call(null,model);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table#datagrid-table.table","table#datagrid-table.table",2230740568),foundation.test.templates.datagrid_header.call(null,cols),foundation.test.templates.datagrid_body.call(null,coll,cols)], null);
})());
});
foundation.test.templates.datagrid = (function datagrid(id){var dom80511 = document.createElement("div");dom80511.className = "datagrid-container panel panel-default";
if(cljs.core.truth_(id))
{dom80511.setAttribute("id",id);
} else
{}
dom80511.appendChild((function (){var dom80512 = document.createElement("div");dom80512.className = "panel-heading";
dom80512.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.templates.datagrid_breadcrumb.call(null)));
dom80512.appendChild((function (){var dom80513 = document.createElement("form");dom80513.className = "form-inline pull-right";
dom80513.appendChild((function (){var dom80514 = document.createElement("div");dom80514.className = "form-group";
dom80514.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.templates.datagrid_filter.call(null)));
return dom80514;
})());
return dom80513;
})());
return dom80512;
})());
dom80511.appendChild((function (){var dom80515 = document.createElement("div");dom80515.className = "panel-body";
return dom80515;
})());
dom80511.appendChild((function (){var dom80516 = document.createElement("div");dom80516.className = "panel-footer";
dom80516.appendChild((function (){var dom80517 = document.createElement("div");dom80517.className = "form-inline";
dom80517.appendChild((function (){var dom80518 = document.createElement("div");dom80518.className = "form-group";
dom80518.appendChild((function (){var dom80519 = document.createElement("button");dom80519.className = "btn btn-success btn-sm";
dom80519.setAttribute("id","new");
dom80519.appendChild(document.createTextNode("New"));
return dom80519;
})());
return dom80518;
})());
dom80517.appendChild((function (){var dom80520 = document.createElement("div");dom80520.className = "form-group";
dom80520.appendChild((function (){var dom80521 = document.createElement("button");dom80521.className = "btn btn-info btn-sm disabled";
dom80521.setAttribute("id","save");
dom80521.appendChild(document.createTextNode("Save"));
return dom80521;
})());
return dom80520;
})());
dom80517.appendChild((function (){var dom80522 = document.createElement("div");dom80522.className = "form-group";
dom80522.appendChild((function (){var dom80523 = document.createElement("button");dom80523.className = "btn btn-danger btn-sm disabled";
dom80523.setAttribute("id","delete");
dom80523.appendChild(document.createTextNode("Delete"));
return dom80523;
})());
return dom80522;
})());
dom80517.appendChild((function (){var dom80524 = document.createElement("div");dom80524.className = "form-group";
dom80524.appendChild((function (){var dom80525 = document.createElement("button");dom80525.className = "btn btn-primary btn-sm disabled";
dom80525.setAttribute("id","dupe");
dom80525.appendChild(document.createTextNode("Duplicate"));
return dom80525;
})());
return dom80524;
})());
return dom80517;
})());
return dom80516;
})());
return dom80511;
});
foundation.test.templates.twitter_power = (function twitter_power(id){var dom80527 = document.createElement("div");if(cljs.core.truth_(id))
{dom80527.setAttribute("id",id);
} else
{}
return dom80527;
});

//# sourceMappingURL=templates.js.map