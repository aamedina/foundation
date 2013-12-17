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
foundation.templates.date_picker = (function date_picker(el,init_date,date_pattern){var date_pattern__$1 = (((date_pattern instanceof cljs.core.Keyword))?date_pattern.call(null,cljs_time.format.formatters):date_pattern);var picker = (new goog.ui.InputDatePicker((new goog.i18n.DateTimeFormat(date_pattern__$1)),(new goog.i18n.DateTimeParse(date_pattern__$1))));var G__39584_39586 = picker.getDatePicker();G__39584_39586.setUseSimpleNavigationMenu(true);
G__39584_39586.setAllowNone(true);
var G__39585 = picker;G__39585.decorate(el);
G__39585.setDate(init_date);
return G__39585;
});
foundation.templates.dashboard_metrics = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Impressions","CPM","Impression Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Engagements","CPE","Engagement Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clicks","CPC","Click Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Retweets","CPRT","Retweet Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Replies","CPR","Reply Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Follows","CPF","Follow Rate"], null)], null);
foundation.templates.dashboard_metric = (function dashboard_metric(p__39587){var vec__39596 = p__39587;var metric = cljs.core.nth.call(null,vec__39596,0,null);var cpa = cljs.core.nth.call(null,vec__39596,1,null);var rate = cljs.core.nth.call(null,vec__39596,2,null);var dom39597 = document.createElement("ul");dom39597.className = "list-group";
dom39597.appendChild((function (){var dom39598 = document.createElement("li");dom39598.className = "list-group-item";
if(cljs.core.truth_(metric))
{dom39598.setAttribute("id",metric);
} else
{}
dom39598.appendChild((function (){var dom39599 = document.createElement("h5");dom39599.className = "metric-header list-group-item-heading";
dom39599.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(metric)].join('')));
return dom39599;
})());
return dom39598;
})());
dom39597.appendChild((function (){var dom39600 = document.createElement("li");dom39600.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-cpa")].join('')))
{dom39600.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-cpa")].join(''));
} else
{}
dom39600.appendChild((function (){var dom39601 = document.createElement("small");dom39601.className = "list-group-item-text";
dom39601.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(cpa)].join('')));
return dom39601;
})());
return dom39600;
})());
dom39597.appendChild((function (){var dom39602 = document.createElement("li");dom39602.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-rate")].join('')))
{dom39602.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-rate")].join(''));
} else
{}
dom39602.appendChild((function (){var dom39603 = document.createElement("small");dom39603.className = "list-group-item-text";
dom39603.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(rate)].join('')));
return dom39603;
})());
return dom39602;
})());
return dom39597;
});
foundation.templates.dashboard = (function dashboard(id){var dom39622 = document.createElement("div");dom39622.className = "twitter-stats panel panel-default";
if(cljs.core.truth_(id))
{dom39622.setAttribute("id",id);
} else
{}
dom39622.appendChild((function (){var dom39623 = document.createElement("div");dom39623.className = "panel-heading";
dom39623.appendChild((function (){var dom39624 = document.createElement("h1");dom39624.className = "panel-title";
if("resource-id")
{dom39624.setAttribute("id","resource-id");
} else
{}
return dom39624;
})());
dom39623.appendChild((function (){var dom39625 = document.createElement("div");dom39625.className = "form-inline pull-right";
dom39625.appendChild((function (){var dom39626 = document.createElement("div");dom39626.className = "form-group";
dom39626.appendChild((function (){var dom39627 = document.createElement("input");dom39627.className = "form-control date-picker";
dom39627.setAttribute("id","start-time");
if(true)
{dom39627.setAttribute("readonly",true);
} else
{}
return dom39627;
})());
return dom39626;
})());
dom39625.appendChild((function (){var dom39628 = document.createElement("em");if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)))
{dom39628.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)));
} else
{}
dom39628.appendChild(document.createTextNode("to"));
return dom39628;
})());
dom39625.appendChild((function (){var dom39629 = document.createElement("div");dom39629.className = "form-group";
dom39629.appendChild((function (){var dom39630 = document.createElement("input");dom39630.className = "form-control date-picker";
dom39630.setAttribute("id","end-time");
if(true)
{dom39630.setAttribute("readonly",true);
} else
{}
return dom39630;
})());
return dom39629;
})());
dom39625.appendChild((function (){var dom39631 = document.createElement("button");dom39631.className = "btn btn-primary btn-sm";
dom39631.setAttribute("id","update-stats");
dom39631.appendChild(document.createTextNode("Update"));
return dom39631;
})());
return dom39625;
})());
return dom39623;
})());
dom39622.appendChild((function (){var dom39632 = document.createElement("div");dom39632.className = "panel-body";
dom39632.appendChild((function (){var dom39633 = document.createElement("div");dom39633.className = "analytics-highcharts";
return dom39633;
})());
return dom39632;
})());
dom39622.appendChild((function (){var dom39634 = document.createElement("div");dom39634.className = "panel-footer row";
dom39634.appendChild((function (){var dom39635 = document.createElement("div");dom39635.className = "twitter-stats";
dom39635.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14652__auto__ = (function iter__39636(s__39637){return (new cljs.core.LazySeq(null,(function (){var s__39637__$1 = s__39637;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__39637__$1);if(temp__4092__auto__)
{var s__39637__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__39637__$2))
{var c__14650__auto__ = cljs.core.chunk_first.call(null,s__39637__$2);var size__14651__auto__ = cljs.core.count.call(null,c__14650__auto__);var b__39639 = cljs.core.chunk_buffer.call(null,size__14651__auto__);if((function (){var i__39638 = 0;while(true){
if((i__39638 < size__14651__auto__))
{var metric = cljs.core._nth.call(null,c__14650__auto__,i__39638);cljs.core.chunk_append.call(null,b__39639,foundation.templates.dashboard_metric.call(null,metric));
{
var G__39640 = (i__39638 + 1);
i__39638 = G__39640;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39639),iter__39636.call(null,cljs.core.chunk_rest.call(null,s__39637__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39639),null);
}
} else
{var metric = cljs.core.first.call(null,s__39637__$2);return cljs.core.cons.call(null,foundation.templates.dashboard_metric.call(null,metric),iter__39636.call(null,cljs.core.rest.call(null,s__39637__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14652__auto__.call(null,foundation.templates.dashboard_metrics);
})()));
return dom39635;
})());
return dom39634;
})());
return dom39622;
});
foundation.templates.datagrid_filter = (function datagrid_filter(){var dom39643 = document.createElement("div");dom39643.className = "autocomplete";
dom39643.appendChild((function (){var dom39644 = document.createElement("input");dom39644.className = "form-control";
if("text")
{dom39644.setAttribute("type","text");
} else
{}
if("What are you looking for?")
{dom39644.setAttribute("placeholder","What are you looking for?");
} else
{}
return dom39644;
})());
return dom39643;
});
foundation.templates.datagrid_header = (function datagrid_header(columns){var dom39651 = document.createElement("thead");dom39651.setAttribute("id","datagrid-header");
dom39651.appendChild((function (){var dom39652 = document.createElement("tr");dom39652.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14652__auto__ = (function iter__39653(s__39654){return (new cljs.core.LazySeq(null,(function (){var s__39654__$1 = s__39654;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__39654__$1);if(temp__4092__auto__)
{var s__39654__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__39654__$2))
{var c__14650__auto__ = cljs.core.chunk_first.call(null,s__39654__$2);var size__14651__auto__ = cljs.core.count.call(null,c__14650__auto__);var b__39656 = cljs.core.chunk_buffer.call(null,size__14651__auto__);if((function (){var i__39655 = 0;while(true){
if((i__39655 < size__14651__auto__))
{var col = cljs.core._nth.call(null,c__14650__auto__,i__39655);cljs.core.chunk_append.call(null,b__39656,foundation.cells.th.call(null,col));
{
var G__39657 = (i__39655 + 1);
i__39655 = G__39657;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39656),iter__39653.call(null,cljs.core.chunk_rest.call(null,s__39654__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39656),null);
}
} else
{var col = cljs.core.first.call(null,s__39654__$2);return cljs.core.cons.call(null,foundation.cells.th.call(null,col),iter__39653.call(null,cljs.core.rest.call(null,s__39654__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14652__auto__.call(null,columns);
})()));
return dom39652;
})());
return dom39651;
});
foundation.templates.datagrid_row = (function datagrid_row(model,columns){var dom39663 = document.createElement("tr");dom39663.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14652__auto__ = (function iter__39664(s__39665){return (new cljs.core.LazySeq(null,(function (){var s__39665__$1 = s__39665;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__39665__$1);if(temp__4092__auto__)
{var s__39665__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__39665__$2))
{var c__14650__auto__ = cljs.core.chunk_first.call(null,s__39665__$2);var size__14651__auto__ = cljs.core.count.call(null,c__14650__auto__);var b__39667 = cljs.core.chunk_buffer.call(null,size__14651__auto__);if((function (){var i__39666 = 0;while(true){
if((i__39666 < size__14651__auto__))
{var col = cljs.core._nth.call(null,c__14650__auto__,i__39666);cljs.core.chunk_append.call(null,b__39667,foundation.cells.td.call(null,col,model));
{
var G__39668 = (i__39666 + 1);
i__39666 = G__39668;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39667),iter__39664.call(null,cljs.core.chunk_rest.call(null,s__39665__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39667),null);
}
} else
{var col = cljs.core.first.call(null,s__39665__$2);return cljs.core.cons.call(null,foundation.cells.td.call(null,col,model),iter__39664.call(null,cljs.core.rest.call(null,s__39665__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14652__auto__.call(null,columns);
})()));
return dom39663;
});
foundation.templates.datagrid_body = (function datagrid_body(coll,columns){var dom39674 = document.createElement("tbody");dom39674.className = "datagrid-tbody";
dom39674.setAttribute("id","datagrid-body");
dom39674.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14652__auto__ = (function iter__39675(s__39676){return (new cljs.core.LazySeq(null,(function (){var s__39676__$1 = s__39676;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__39676__$1);if(temp__4092__auto__)
{var s__39676__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__39676__$2))
{var c__14650__auto__ = cljs.core.chunk_first.call(null,s__39676__$2);var size__14651__auto__ = cljs.core.count.call(null,c__14650__auto__);var b__39678 = cljs.core.chunk_buffer.call(null,size__14651__auto__);if((function (){var i__39677 = 0;while(true){
if((i__39677 < size__14651__auto__))
{var model = cljs.core._nth.call(null,c__14650__auto__,i__39677);cljs.core.chunk_append.call(null,b__39678,foundation.templates.datagrid_row.call(null,model,columns));
{
var G__39679 = (i__39677 + 1);
i__39677 = G__39679;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39678),iter__39675.call(null,cljs.core.chunk_rest.call(null,s__39676__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39678),null);
}
} else
{var model = cljs.core.first.call(null,s__39676__$2);return cljs.core.cons.call(null,foundation.templates.datagrid_row.call(null,model,columns),iter__39675.call(null,cljs.core.rest.call(null,s__39676__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14652__auto__.call(null,coll);
})()));
return dom39674;
});
foundation.templates.datagrid_breadcrumb = (function datagrid_breadcrumb(){var dom39691 = document.createElement("ol");dom39691.className = "breadcrumb";
dom39691.appendChild((function (){var dom39692 = document.createElement("li");dom39692.className = "active";
dom39692.setAttribute("id","account");
dom39692.appendChild((function (){var dom39693 = document.createElement("div");dom39693.className = "arrow-down";
return dom39693;
})());
dom39692.appendChild((function (){var dom39694 = document.createElement("a");dom39694.appendChild(document.createTextNode("Accounts"));
return dom39694;
})());
dom39692.appendChild((function (){var dom39695 = document.createElement("div");dom39695.className = "arrow-up";
return dom39695;
})());
return dom39692;
})());
dom39691.appendChild((function (){var dom39696 = document.createElement("li");dom39696.className = "hidden";
dom39696.setAttribute("id","campaign");
dom39696.appendChild((function (){var dom39697 = document.createElement("a");dom39697.appendChild(document.createTextNode("Campaigns"));
return dom39697;
})());
return dom39696;
})());
dom39691.appendChild((function (){var dom39698 = document.createElement("li");dom39698.className = "hidden";
dom39698.setAttribute("id","line_item");
dom39698.appendChild((function (){var dom39699 = document.createElement("a");dom39699.appendChild(document.createTextNode("Line Items"));
return dom39699;
})());
return dom39698;
})());
dom39691.appendChild((function (){var dom39700 = document.createElement("li");dom39700.className = "hidden";
dom39700.setAttribute("id","promoted_tweet");
dom39700.appendChild((function (){var dom39701 = document.createElement("a");dom39701.appendChild(document.createTextNode("Promoted Products"));
return dom39701;
})());
return dom39700;
})());
return dom39691;
});
foundation.templates.datagrid_table = (function datagrid_table(model,coll){return dommy.template.__GT_node_like.call(null,(function (){var cols = foundation.models.columns.call(null,model);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table#datagrid-table.table","table#datagrid-table.table",2230740568),foundation.templates.datagrid_header.call(null,cols),foundation.templates.datagrid_body.call(null,coll,cols)], null);
})());
});
foundation.templates.datagrid = (function datagrid(id){var dom39717 = document.createElement("div");dom39717.className = "datagrid-container panel panel-default";
if(cljs.core.truth_(id))
{dom39717.setAttribute("id",id);
} else
{}
dom39717.appendChild((function (){var dom39718 = document.createElement("div");dom39718.className = "panel-heading";
dom39718.appendChild(dommy.template.__GT_node_like.call(null,foundation.templates.datagrid_breadcrumb.call(null)));
dom39718.appendChild((function (){var dom39719 = document.createElement("form");dom39719.className = "form-inline pull-right";
dom39719.appendChild((function (){var dom39720 = document.createElement("div");dom39720.className = "form-group";
dom39720.appendChild(dommy.template.__GT_node_like.call(null,foundation.templates.datagrid_filter.call(null)));
return dom39720;
})());
return dom39719;
})());
return dom39718;
})());
dom39717.appendChild((function (){var dom39721 = document.createElement("div");dom39721.className = "panel-body";
return dom39721;
})());
dom39717.appendChild((function (){var dom39722 = document.createElement("div");dom39722.className = "panel-footer";
dom39722.appendChild((function (){var dom39723 = document.createElement("div");dom39723.className = "form-inline";
dom39723.appendChild((function (){var dom39724 = document.createElement("div");dom39724.className = "form-group";
dom39724.appendChild((function (){var dom39725 = document.createElement("button");dom39725.className = "btn btn-success btn-sm";
dom39725.setAttribute("id","new");
dom39725.appendChild(document.createTextNode("New"));
return dom39725;
})());
return dom39724;
})());
dom39723.appendChild((function (){var dom39726 = document.createElement("div");dom39726.className = "form-group";
dom39726.appendChild((function (){var dom39727 = document.createElement("button");dom39727.className = "btn btn-info btn-sm disabled";
dom39727.setAttribute("id","save");
dom39727.appendChild(document.createTextNode("Save"));
return dom39727;
})());
return dom39726;
})());
dom39723.appendChild((function (){var dom39728 = document.createElement("div");dom39728.className = "form-group";
dom39728.appendChild((function (){var dom39729 = document.createElement("button");dom39729.className = "btn btn-danger btn-sm disabled";
dom39729.setAttribute("id","delete");
dom39729.appendChild(document.createTextNode("Delete"));
return dom39729;
})());
return dom39728;
})());
dom39723.appendChild((function (){var dom39730 = document.createElement("div");dom39730.className = "form-group";
dom39730.appendChild((function (){var dom39731 = document.createElement("button");dom39731.className = "btn btn-primary btn-sm disabled";
dom39731.setAttribute("id","dupe");
dom39731.appendChild(document.createTextNode("Duplicate"));
return dom39731;
})());
return dom39730;
})());
return dom39723;
})());
return dom39722;
})());
return dom39717;
});
foundation.templates.twitter_power = (function twitter_power(id){var dom39733 = document.createElement("div");if(cljs.core.truth_(id))
{dom39733.setAttribute("id",id);
} else
{}
return dom39733;
});

//# sourceMappingURL=templates.js.map