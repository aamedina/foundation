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
foundation.templates.date_picker = (function date_picker(el,init_date,date_pattern){var date_pattern__$1 = (((date_pattern instanceof cljs.core.Keyword))?date_pattern.call(null,cljs_time.format.formatters):date_pattern);var picker = (new goog.ui.InputDatePicker((new goog.i18n.DateTimeFormat(date_pattern__$1)),(new goog.i18n.DateTimeParse(date_pattern__$1))));var G__30151_30153 = picker.getDatePicker();G__30151_30153.setUseSimpleNavigationMenu(true);
G__30151_30153.setAllowNone(true);
var G__30152 = picker;G__30152.decorate(el);
G__30152.setDate(init_date);
return G__30152;
});
foundation.templates.dashboard_metrics = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Impressions","CPM","Impression Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Engagements","CPE","Engagement Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clicks","CPC","Click Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Retweets","CPRT","Retweet Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Replies","CPR","Reply Rate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Follows","CPF","Follow Rate"], null)], null);
foundation.templates.dashboard_metric = (function dashboard_metric(p__30154){var vec__30163 = p__30154;var metric = cljs.core.nth.call(null,vec__30163,0,null);var cpa = cljs.core.nth.call(null,vec__30163,1,null);var rate = cljs.core.nth.call(null,vec__30163,2,null);var dom30164 = document.createElement("ul");dom30164.className = "list-group";
dom30164.appendChild((function (){var dom30165 = document.createElement("li");dom30165.className = "list-group-item";
if(cljs.core.truth_(metric))
{dom30165.setAttribute("id",metric);
} else
{}
dom30165.appendChild((function (){var dom30166 = document.createElement("h5");dom30166.className = "metric-header list-group-item-heading";
dom30166.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(metric)].join('')));
return dom30166;
})());
return dom30165;
})());
dom30164.appendChild((function (){var dom30167 = document.createElement("li");dom30167.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-cpa")].join('')))
{dom30167.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-cpa")].join(''));
} else
{}
dom30167.appendChild((function (){var dom30168 = document.createElement("small");dom30168.className = "list-group-item-text";
dom30168.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(cpa)].join('')));
return dom30168;
})());
return dom30167;
})());
dom30164.appendChild((function (){var dom30169 = document.createElement("li");dom30169.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-rate")].join('')))
{dom30169.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-rate")].join(''));
} else
{}
dom30169.appendChild((function (){var dom30170 = document.createElement("small");dom30170.className = "list-group-item-text";
dom30170.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(rate)].join('')));
return dom30170;
})());
return dom30169;
})());
return dom30164;
});
foundation.templates.dashboard = (function dashboard(id){var dom30189 = document.createElement("div");dom30189.className = "twitter-stats panel panel-default";
if(cljs.core.truth_(id))
{dom30189.setAttribute("id",id);
} else
{}
dom30189.appendChild((function (){var dom30190 = document.createElement("div");dom30190.className = "panel-heading";
dom30190.appendChild((function (){var dom30191 = document.createElement("h1");dom30191.className = "panel-title";
if("resource-id")
{dom30191.setAttribute("id","resource-id");
} else
{}
return dom30191;
})());
dom30190.appendChild((function (){var dom30192 = document.createElement("div");dom30192.className = "form-inline pull-right";
dom30192.appendChild((function (){var dom30193 = document.createElement("div");dom30193.className = "form-group";
dom30193.appendChild((function (){var dom30194 = document.createElement("input");dom30194.className = "form-control date-picker";
dom30194.setAttribute("id","start-time");
if(true)
{dom30194.setAttribute("readonly",true);
} else
{}
return dom30194;
})());
return dom30193;
})());
dom30192.appendChild((function (){var dom30195 = document.createElement("em");if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)))
{dom30195.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)));
} else
{}
dom30195.appendChild(document.createTextNode("to"));
return dom30195;
})());
dom30192.appendChild((function (){var dom30196 = document.createElement("div");dom30196.className = "form-group";
dom30196.appendChild((function (){var dom30197 = document.createElement("input");dom30197.className = "form-control date-picker";
dom30197.setAttribute("id","end-time");
if(true)
{dom30197.setAttribute("readonly",true);
} else
{}
return dom30197;
})());
return dom30196;
})());
dom30192.appendChild((function (){var dom30198 = document.createElement("button");dom30198.className = "btn btn-primary btn-sm";
dom30198.setAttribute("id","update-stats");
dom30198.appendChild(document.createTextNode("Update"));
return dom30198;
})());
return dom30192;
})());
return dom30190;
})());
dom30189.appendChild((function (){var dom30199 = document.createElement("div");dom30199.className = "panel-body";
dom30199.appendChild((function (){var dom30200 = document.createElement("div");dom30200.className = "analytics-highcharts";
return dom30200;
})());
return dom30199;
})());
dom30189.appendChild((function (){var dom30201 = document.createElement("div");dom30201.className = "panel-footer row";
dom30201.appendChild((function (){var dom30202 = document.createElement("div");dom30202.className = "twitter-stats";
dom30202.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14516__auto__ = (function iter__30203(s__30204){return (new cljs.core.LazySeq(null,(function (){var s__30204__$1 = s__30204;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__30204__$1);if(temp__4092__auto__)
{var s__30204__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30204__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__30204__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__30206 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__30205 = 0;while(true){
if((i__30205 < size__14515__auto__))
{var metric = cljs.core._nth.call(null,c__14514__auto__,i__30205);cljs.core.chunk_append.call(null,b__30206,foundation.templates.dashboard_metric.call(null,metric));
{
var G__30207 = (i__30205 + 1);
i__30205 = G__30207;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30206),iter__30203.call(null,cljs.core.chunk_rest.call(null,s__30204__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30206),null);
}
} else
{var metric = cljs.core.first.call(null,s__30204__$2);return cljs.core.cons.call(null,foundation.templates.dashboard_metric.call(null,metric),iter__30203.call(null,cljs.core.rest.call(null,s__30204__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14516__auto__.call(null,foundation.templates.dashboard_metrics);
})()));
return dom30202;
})());
return dom30201;
})());
return dom30189;
});
foundation.templates.datagrid_filter = (function datagrid_filter(){var dom30210 = document.createElement("div");dom30210.className = "autocomplete";
dom30210.appendChild((function (){var dom30211 = document.createElement("input");dom30211.className = "form-control";
if("text")
{dom30211.setAttribute("type","text");
} else
{}
if("What are you looking for?")
{dom30211.setAttribute("placeholder","What are you looking for?");
} else
{}
return dom30211;
})());
return dom30210;
});
foundation.templates.datagrid_header = (function datagrid_header(columns){var dom30218 = document.createElement("thead");dom30218.setAttribute("id","datagrid-header");
dom30218.appendChild((function (){var dom30219 = document.createElement("tr");dom30219.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14516__auto__ = (function iter__30220(s__30221){return (new cljs.core.LazySeq(null,(function (){var s__30221__$1 = s__30221;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__30221__$1);if(temp__4092__auto__)
{var s__30221__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30221__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__30221__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__30223 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__30222 = 0;while(true){
if((i__30222 < size__14515__auto__))
{var col = cljs.core._nth.call(null,c__14514__auto__,i__30222);cljs.core.chunk_append.call(null,b__30223,foundation.cells.th.call(null,col));
{
var G__30224 = (i__30222 + 1);
i__30222 = G__30224;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30223),iter__30220.call(null,cljs.core.chunk_rest.call(null,s__30221__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30223),null);
}
} else
{var col = cljs.core.first.call(null,s__30221__$2);return cljs.core.cons.call(null,foundation.cells.th.call(null,col),iter__30220.call(null,cljs.core.rest.call(null,s__30221__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14516__auto__.call(null,columns);
})()));
return dom30219;
})());
return dom30218;
});
foundation.templates.datagrid_row = (function datagrid_row(model,columns){var dom30230 = document.createElement("tr");dom30230.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14516__auto__ = (function iter__30231(s__30232){return (new cljs.core.LazySeq(null,(function (){var s__30232__$1 = s__30232;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__30232__$1);if(temp__4092__auto__)
{var s__30232__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30232__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__30232__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__30234 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__30233 = 0;while(true){
if((i__30233 < size__14515__auto__))
{var col = cljs.core._nth.call(null,c__14514__auto__,i__30233);cljs.core.chunk_append.call(null,b__30234,foundation.cells.td.call(null,col,model));
{
var G__30235 = (i__30233 + 1);
i__30233 = G__30235;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30234),iter__30231.call(null,cljs.core.chunk_rest.call(null,s__30232__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30234),null);
}
} else
{var col = cljs.core.first.call(null,s__30232__$2);return cljs.core.cons.call(null,foundation.cells.td.call(null,col,model),iter__30231.call(null,cljs.core.rest.call(null,s__30232__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14516__auto__.call(null,columns);
})()));
return dom30230;
});
foundation.templates.datagrid_body = (function datagrid_body(coll,columns){var dom30241 = document.createElement("tbody");dom30241.className = "datagrid-tbody";
dom30241.setAttribute("id","datagrid-body");
dom30241.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14516__auto__ = (function iter__30242(s__30243){return (new cljs.core.LazySeq(null,(function (){var s__30243__$1 = s__30243;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__30243__$1);if(temp__4092__auto__)
{var s__30243__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30243__$2))
{var c__14514__auto__ = cljs.core.chunk_first.call(null,s__30243__$2);var size__14515__auto__ = cljs.core.count.call(null,c__14514__auto__);var b__30245 = cljs.core.chunk_buffer.call(null,size__14515__auto__);if((function (){var i__30244 = 0;while(true){
if((i__30244 < size__14515__auto__))
{var model = cljs.core._nth.call(null,c__14514__auto__,i__30244);cljs.core.chunk_append.call(null,b__30245,foundation.templates.datagrid_row.call(null,model,columns));
{
var G__30246 = (i__30244 + 1);
i__30244 = G__30246;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30245),iter__30242.call(null,cljs.core.chunk_rest.call(null,s__30243__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30245),null);
}
} else
{var model = cljs.core.first.call(null,s__30243__$2);return cljs.core.cons.call(null,foundation.templates.datagrid_row.call(null,model,columns),iter__30242.call(null,cljs.core.rest.call(null,s__30243__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14516__auto__.call(null,coll);
})()));
return dom30241;
});
foundation.templates.datagrid_breadcrumb = (function datagrid_breadcrumb(){var dom30258 = document.createElement("ol");dom30258.className = "breadcrumb";
dom30258.appendChild((function (){var dom30259 = document.createElement("li");dom30259.className = "active";
dom30259.setAttribute("id","account");
dom30259.appendChild((function (){var dom30260 = document.createElement("div");dom30260.className = "arrow-down";
return dom30260;
})());
dom30259.appendChild((function (){var dom30261 = document.createElement("a");dom30261.appendChild(document.createTextNode("Accounts"));
return dom30261;
})());
dom30259.appendChild((function (){var dom30262 = document.createElement("div");dom30262.className = "arrow-up";
return dom30262;
})());
return dom30259;
})());
dom30258.appendChild((function (){var dom30263 = document.createElement("li");dom30263.className = "hidden";
dom30263.setAttribute("id","campaign");
dom30263.appendChild((function (){var dom30264 = document.createElement("a");dom30264.appendChild(document.createTextNode("Campaigns"));
return dom30264;
})());
return dom30263;
})());
dom30258.appendChild((function (){var dom30265 = document.createElement("li");dom30265.className = "hidden";
dom30265.setAttribute("id","line_item");
dom30265.appendChild((function (){var dom30266 = document.createElement("a");dom30266.appendChild(document.createTextNode("Line Items"));
return dom30266;
})());
return dom30265;
})());
dom30258.appendChild((function (){var dom30267 = document.createElement("li");dom30267.className = "hidden";
dom30267.setAttribute("id","promoted_tweet");
dom30267.appendChild((function (){var dom30268 = document.createElement("a");dom30268.appendChild(document.createTextNode("Promoted Products"));
return dom30268;
})());
return dom30267;
})());
return dom30258;
});
foundation.templates.datagrid_table = (function datagrid_table(model,coll){return dommy.template.__GT_node_like.call(null,(function (){var cols = foundation.models.columns.call(null,model);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table#datagrid-table.table","table#datagrid-table.table",2230740568),foundation.templates.datagrid_header.call(null,cols),foundation.templates.datagrid_body.call(null,coll,cols)], null);
})());
});
foundation.templates.datagrid = (function datagrid(id){var dom30284 = document.createElement("div");dom30284.className = "datagrid-container panel panel-default";
if(cljs.core.truth_(id))
{dom30284.setAttribute("id",id);
} else
{}
dom30284.appendChild((function (){var dom30285 = document.createElement("div");dom30285.className = "panel-heading";
dom30285.appendChild(dommy.template.__GT_node_like.call(null,foundation.templates.datagrid_breadcrumb.call(null)));
dom30285.appendChild((function (){var dom30286 = document.createElement("form");dom30286.className = "form-inline pull-right";
dom30286.appendChild((function (){var dom30287 = document.createElement("div");dom30287.className = "form-group";
dom30287.appendChild(dommy.template.__GT_node_like.call(null,foundation.templates.datagrid_filter.call(null)));
return dom30287;
})());
return dom30286;
})());
return dom30285;
})());
dom30284.appendChild((function (){var dom30288 = document.createElement("div");dom30288.className = "panel-body";
return dom30288;
})());
dom30284.appendChild((function (){var dom30289 = document.createElement("div");dom30289.className = "panel-footer";
dom30289.appendChild((function (){var dom30290 = document.createElement("div");dom30290.className = "form-inline";
dom30290.appendChild((function (){var dom30291 = document.createElement("div");dom30291.className = "form-group";
dom30291.appendChild((function (){var dom30292 = document.createElement("button");dom30292.className = "btn btn-success btn-sm";
dom30292.setAttribute("id","new");
dom30292.appendChild(document.createTextNode("New"));
return dom30292;
})());
return dom30291;
})());
dom30290.appendChild((function (){var dom30293 = document.createElement("div");dom30293.className = "form-group";
dom30293.appendChild((function (){var dom30294 = document.createElement("button");dom30294.className = "btn btn-info btn-sm disabled";
dom30294.setAttribute("id","save");
dom30294.appendChild(document.createTextNode("Save"));
return dom30294;
})());
return dom30293;
})());
dom30290.appendChild((function (){var dom30295 = document.createElement("div");dom30295.className = "form-group";
dom30295.appendChild((function (){var dom30296 = document.createElement("button");dom30296.className = "btn btn-danger btn-sm disabled";
dom30296.setAttribute("id","delete");
dom30296.appendChild(document.createTextNode("Delete"));
return dom30296;
})());
return dom30295;
})());
dom30290.appendChild((function (){var dom30297 = document.createElement("div");dom30297.className = "form-group";
dom30297.appendChild((function (){var dom30298 = document.createElement("button");dom30298.className = "btn btn-primary btn-sm disabled";
dom30298.setAttribute("id","dupe");
dom30298.appendChild(document.createTextNode("Duplicate"));
return dom30298;
})());
return dom30297;
})());
return dom30290;
})());
return dom30289;
})());
return dom30284;
});
foundation.templates.twitter_power = (function twitter_power(id){var dom30300 = document.createElement("div");if(cljs.core.truth_(id))
{dom30300.setAttribute("id",id);
} else
{}
return dom30300;
});

//# sourceMappingURL=templates.js.map