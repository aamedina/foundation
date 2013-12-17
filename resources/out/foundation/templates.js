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
foundation.templates.date_picker = (function date_picker(el,init_date,date_pattern){var date_pattern__$1 = (((date_pattern instanceof cljs.core.Keyword))?date_pattern.call(null,cljs_time.format.formatters):date_pattern);var picker = (new goog.ui.InputDatePicker((new goog.i18n.DateTimeFormat(date_pattern__$1)),(new goog.i18n.DateTimeParse(date_pattern__$1))));var G__334511_334513 = picker.getDatePicker();G__334511_334513.setUseSimpleNavigationMenu(true);
G__334511_334513.setAllowNone(true);
var G__334512 = picker;G__334512.decorate(el);
G__334512.setDate(init_date);
return G__334512;
});
foundation.templates.dashboard_metrics = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Impressions","CPM","Impression Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Engagements","CPE","Engagement Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clicks","CPC","Click Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Retweets","CPRT","Retweet Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Replies","CPR","Reply Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Follows","CPF","Follow Rate"], null)], null);
foundation.templates.dashboard_metric = (function dashboard_metric(p__334514){var vec__334523 = p__334514;var metric = cljs.core.nth.call(null,vec__334523,0,null);var cpa = cljs.core.nth.call(null,vec__334523,1,null);var rate = cljs.core.nth.call(null,vec__334523,2,null);var dom334524 = document.createElement("ul");dom334524.className = "list-group";
dom334524.appendChild((function (){var dom334525 = document.createElement("li");dom334525.className = "list-group-item";
if(cljs.core.truth_(metric))
{dom334525.setAttribute("id",metric);
} else
{}
dom334525.appendChild((function (){var dom334526 = document.createElement("h5");dom334526.className = "metric-header list-group-item-heading";
dom334526.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(metric)].join('')));
return dom334526;
})());
return dom334525;
})());
dom334524.appendChild((function (){var dom334527 = document.createElement("li");dom334527.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-cpa")].join('')))
{dom334527.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-cpa")].join(''));
} else
{}
dom334527.appendChild((function (){var dom334528 = document.createElement("small");dom334528.className = "list-group-item-text";
dom334528.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(cpa)].join('')));
return dom334528;
})());
return dom334527;
})());
dom334524.appendChild((function (){var dom334529 = document.createElement("li");dom334529.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-rate")].join('')))
{dom334529.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-rate")].join(''));
} else
{}
dom334529.appendChild((function (){var dom334530 = document.createElement("small");dom334530.className = "list-group-item-text";
dom334530.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(rate)].join('')));
return dom334530;
})());
return dom334529;
})());
return dom334524;
});
foundation.templates.dashboard = (function dashboard(id){var dom334549 = document.createElement("div");dom334549.className = "twitter-stats panel panel-default";
if(cljs.core.truth_(id))
{dom334549.setAttribute("id",id);
} else
{}
dom334549.appendChild((function (){var dom334550 = document.createElement("div");dom334550.className = "panel-heading";
dom334550.appendChild((function (){var dom334551 = document.createElement("h1");dom334551.className = "panel-title";
if("resource-id")
{dom334551.setAttribute("id","resource-id");
} else
{}
return dom334551;
})());
dom334550.appendChild((function (){var dom334552 = document.createElement("div");dom334552.className = "form-inline pull-right";
dom334552.appendChild((function (){var dom334553 = document.createElement("div");dom334553.className = "form-group";
dom334553.appendChild((function (){var dom334554 = document.createElement("input");dom334554.className = "form-control date-picker";
dom334554.setAttribute("id","start-time");
if(true)
{dom334554.setAttribute("readonly",true);
} else
{}
return dom334554;
})());
return dom334553;
})());
dom334552.appendChild((function (){var dom334555 = document.createElement("em");if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)))
{dom334555.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)));
} else
{}
dom334555.appendChild(document.createTextNode("to"));
return dom334555;
})());
dom334552.appendChild((function (){var dom334556 = document.createElement("div");dom334556.className = "form-group";
dom334556.appendChild((function (){var dom334557 = document.createElement("input");dom334557.className = "form-control date-picker";
dom334557.setAttribute("id","end-time");
if(true)
{dom334557.setAttribute("readonly",true);
} else
{}
return dom334557;
})());
return dom334556;
})());
dom334552.appendChild((function (){var dom334558 = document.createElement("button");dom334558.className = "btn btn-primary btn-sm";
dom334558.setAttribute("id","update-stats");
dom334558.appendChild(document.createTextNode("Update"));
return dom334558;
})());
return dom334552;
})());
return dom334550;
})());
dom334549.appendChild((function (){var dom334559 = document.createElement("div");dom334559.className = "panel-body";
dom334559.appendChild((function (){var dom334560 = document.createElement("div");dom334560.className = "analytics-highcharts";
return dom334560;
})());
return dom334559;
})());
dom334549.appendChild((function (){var dom334561 = document.createElement("div");dom334561.className = "panel-footer row";
dom334561.appendChild((function (){var dom334562 = document.createElement("div");dom334562.className = "twitter-stats";
dom334562.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14516__auto__ = (function iter__334563(s__334564){return (new cljs.core.LazySeq(null,(function (){var s__334564__$1 = s__334564;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__334564__$1);if(temp__4092__auto__)
{var s__334564__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__334564__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__334564__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__334566 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__334565 = 0;while(true){
if((i__334565 < size__14515__auto__))
{var metric = cljs.core._nth.call(null,c__14514__auto__,i__334565);cljs.core.chunk_append.call(null,b__334566,foundation.templates.dashboard_metric.call(null,metric));
{
var G__334567 = (i__334565 + 1);
i__334565 = G__334567;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__334566),iter__334563.call(null,cljs.core.chunk_rest.call(null,s__334564__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__334566),null);
}
} else
{var metric = cljs.core.first.call(null,s__334564__$2);return cljs.core.cons.call(null,foundation.templates.dashboard_metric.call(null,metric),iter__334563.call(null,cljs.core.rest.call(null,s__334564__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14516__auto__.call(null,foundation.templates.dashboard_metrics);
})()));
return dom334562;
})());
return dom334561;
})());
return dom334549;
});
foundation.templates.datagrid_filter = (function datagrid_filter(){var dom334570 = document.createElement("div");dom334570.className = "autocomplete";
dom334570.appendChild((function (){var dom334571 = document.createElement("input");dom334571.className = "form-control";
if("text")
{dom334571.setAttribute("type","text");
} else
{}
if("What are you looking for?")
{dom334571.setAttribute("placeholder","What are you looking for?");
} else
{}
return dom334571;
})());
return dom334570;
});
foundation.templates.datagrid_header = (function datagrid_header(columns){var dom334578 = document.createElement("thead");dom334578.setAttribute("id","datagrid-header");
dom334578.appendChild((function (){var dom334579 = document.createElement("tr");dom334579.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14516__auto__ = (function iter__334580(s__334581){return (new cljs.core.LazySeq(null,(function (){var s__334581__$1 = s__334581;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__334581__$1);if(temp__4092__auto__)
{var s__334581__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__334581__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__334581__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__334583 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__334582 = 0;while(true){
if((i__334582 < size__14515__auto__))
{var col = cljs.core._nth.call(null,c__14514__auto__,i__334582);cljs.core.chunk_append.call(null,b__334583,foundation.cells.th.call(null,col));
{
var G__334584 = (i__334582 + 1);
i__334582 = G__334584;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__334583),iter__334580.call(null,cljs.core.chunk_rest.call(null,s__334581__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__334583),null);
}
} else
{var col = cljs.core.first.call(null,s__334581__$2);return cljs.core.cons.call(null,foundation.cells.th.call(null,col),iter__334580.call(null,cljs.core.rest.call(null,s__334581__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14516__auto__.call(null,columns);
})()));
return dom334579;
})());
return dom334578;
});
foundation.templates.datagrid_row = (function datagrid_row(model,columns){var dom334590 = document.createElement("tr");dom334590.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14516__auto__ = (function iter__334591(s__334592){return (new cljs.core.LazySeq(null,(function (){var s__334592__$1 = s__334592;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__334592__$1);if(temp__4092__auto__)
{var s__334592__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__334592__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__334592__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__334594 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__334593 = 0;while(true){
if((i__334593 < size__14515__auto__))
{var col = cljs.core._nth.call(null,c__14514__auto__,i__334593);cljs.core.chunk_append.call(null,b__334594,foundation.cells.td.call(null,col,model));
{
var G__334595 = (i__334593 + 1);
i__334593 = G__334595;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__334594),iter__334591.call(null,cljs.core.chunk_rest.call(null,s__334592__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__334594),null);
}
} else
{var col = cljs.core.first.call(null,s__334592__$2);return cljs.core.cons.call(null,foundation.cells.td.call(null,col,model),iter__334591.call(null,cljs.core.rest.call(null,s__334592__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14516__auto__.call(null,columns);
})()));
return dom334590;
});
foundation.templates.datagrid_body = (function datagrid_body(coll,columns){var dom334601 = document.createElement("tbody");dom334601.className = "datagrid-tbody";
dom334601.setAttribute("id","datagrid-body");
dom334601.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14516__auto__ = (function iter__334602(s__334603){return (new cljs.core.LazySeq(null,(function (){var s__334603__$1 = s__334603;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__334603__$1);if(temp__4092__auto__)
{var s__334603__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__334603__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__334603__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__334605 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__334604 = 0;while(true){
if((i__334604 < size__14515__auto__))
{var model = cljs.core._nth.call(null,c__14514__auto__,i__334604);cljs.core.chunk_append.call(null,b__334605,foundation.templates.datagrid_row.call(null,model,columns));
{
var G__334606 = (i__334604 + 1);
i__334604 = G__334606;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__334605),iter__334602.call(null,cljs.core.chunk_rest.call(null,s__334603__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__334605),null);
}
} else
{var model = cljs.core.first.call(null,s__334603__$2);return cljs.core.cons.call(null,foundation.templates.datagrid_row.call(null,model,columns),iter__334602.call(null,cljs.core.rest.call(null,s__334603__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14516__auto__.call(null,coll);
})()));
return dom334601;
});
foundation.templates.datagrid_breadcrumb = (function datagrid_breadcrumb(){var dom334618 = document.createElement("ol");dom334618.className = "breadcrumb";
dom334618.appendChild((function (){var dom334619 = document.createElement("li");dom334619.className = "active";
dom334619.setAttribute("id","account");
dom334619.appendChild((function (){var dom334620 = document.createElement("div");dom334620.className = "arrow-down";
return dom334620;
})());
dom334619.appendChild((function (){var dom334621 = document.createElement("a");dom334621.appendChild(document.createTextNode("Accounts"));
return dom334621;
})());
dom334619.appendChild((function (){var dom334622 = document.createElement("div");dom334622.className = "arrow-up";
return dom334622;
})());
return dom334619;
})());
dom334618.appendChild((function (){var dom334623 = document.createElement("li");dom334623.className = "hidden";
dom334623.setAttribute("id","campaign");
dom334623.appendChild((function (){var dom334624 = document.createElement("a");dom334624.appendChild(document.createTextNode("Campaigns"));
return dom334624;
})());
return dom334623;
})());
dom334618.appendChild((function (){var dom334625 = document.createElement("li");dom334625.className = "hidden";
dom334625.setAttribute("id","line_item");
dom334625.appendChild((function (){var dom334626 = document.createElement("a");dom334626.appendChild(document.createTextNode("Line Items"));
return dom334626;
})());
return dom334625;
})());
dom334618.appendChild((function (){var dom334627 = document.createElement("li");dom334627.className = "hidden";
dom334627.setAttribute("id","promoted_tweet");
dom334627.appendChild((function (){var dom334628 = document.createElement("a");dom334628.appendChild(document.createTextNode("Promoted Products"));
return dom334628;
})());
return dom334627;
})());
return dom334618;
});
foundation.templates.datagrid_table = (function datagrid_table(model,coll){return dommy.template.__GT_node_like.call(null,(function (){var cols = foundation.models.columns.call(null,model);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table#datagrid-table.table","table#datagrid-table.table",2230740568),foundation.templates.datagrid_header.call(null,cols),foundation.templates.datagrid_body.call(null,coll,cols)], null);
})());
});
foundation.templates.datagrid = (function datagrid(id){var dom334644 = document.createElement("div");dom334644.className = "datagrid-container panel panel-default";
if(cljs.core.truth_(id))
{dom334644.setAttribute("id",id);
} else
{}
dom334644.appendChild((function (){var dom334645 = document.createElement("div");dom334645.className = "panel-heading";
dom334645.appendChild(dommy.template.__GT_node_like.call(null,foundation.templates.datagrid_breadcrumb.call(null)));
dom334645.appendChild((function (){var dom334646 = document.createElement("form");dom334646.className = "form-inline pull-right";
dom334646.appendChild((function (){var dom334647 = document.createElement("div");dom334647.className = "form-group";
dom334647.appendChild(dommy.template.__GT_node_like.call(null,foundation.templates.datagrid_filter.call(null)));
return dom334647;
})());
return dom334646;
})());
return dom334645;
})());
dom334644.appendChild((function (){var dom334648 = document.createElement("div");dom334648.className = "panel-body";
return dom334648;
})());
dom334644.appendChild((function (){var dom334649 = document.createElement("div");dom334649.className = "panel-footer";
dom334649.appendChild((function (){var dom334650 = document.createElement("div");dom334650.className = "form-inline";
dom334650.appendChild((function (){var dom334651 = document.createElement("div");dom334651.className = "form-group";
dom334651.appendChild((function (){var dom334652 = document.createElement("button");dom334652.className = "btn btn-success btn-sm";
dom334652.setAttribute("id","new");
dom334652.appendChild(document.createTextNode("New"));
return dom334652;
})());
return dom334651;
})());
dom334650.appendChild((function (){var dom334653 = document.createElement("div");dom334653.className = "form-group";
dom334653.appendChild((function (){var dom334654 = document.createElement("button");dom334654.className = "btn btn-info btn-sm disabled";
dom334654.setAttribute("id","save");
dom334654.appendChild(document.createTextNode("Save"));
return dom334654;
})());
return dom334653;
})());
dom334650.appendChild((function (){var dom334655 = document.createElement("div");dom334655.className = "form-group";
dom334655.appendChild((function (){var dom334656 = document.createElement("button");dom334656.className = "btn btn-danger btn-sm disabled";
dom334656.setAttribute("id","delete");
dom334656.appendChild(document.createTextNode("Delete"));
return dom334656;
})());
return dom334655;
})());
dom334650.appendChild((function (){var dom334657 = document.createElement("div");dom334657.className = "form-group";
dom334657.appendChild((function (){var dom334658 = document.createElement("button");dom334658.className = "btn btn-primary btn-sm disabled";
dom334658.setAttribute("id","dupe");
dom334658.appendChild(document.createTextNode("Duplicate"));
return dom334658;
})());
return dom334657;
})());
return dom334650;
})());
return dom334649;
})());
return dom334644;
});
foundation.templates.twitter_power = (function twitter_power(id){var dom334660 = document.createElement("div");if(cljs.core.truth_(id))
{dom334660.setAttribute("id",id);
} else
{}
return dom334660;
});

//# sourceMappingURL=templates.js.map