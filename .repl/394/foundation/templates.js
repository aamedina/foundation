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
foundation.templates.dashboard_metrics = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Impressions","Engagements","Clicks","Retweets","Replies","Follows"], null);
foundation.templates.chart = (function chart(){var dom32105 = document.createElement("div");dom32105.className = "analytics-highcharts";
return dom32105;
});
foundation.templates.dashboard_metric = (function dashboard_metric(metric){var dom32113 = document.createElement("ul");dom32113.className = "list-group";
dom32113.appendChild((function (){var dom32114 = document.createElement("li");dom32114.className = "list-group-item";
if(cljs.core.truth_(metric))
{dom32114.setAttribute("id",metric);
} else
{}
dom32114.appendChild((function (){var dom32115 = document.createElement("h5");dom32115.className = "metric-header list-group-item-heading";
dom32115.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(metric)].join('')));
return dom32115;
})());
return dom32114;
})());
dom32113.appendChild((function (){var dom32116 = document.createElement("li");dom32116.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-cpa")].join('')))
{dom32116.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-cpa")].join(''));
} else
{}
dom32116.appendChild((function (){var dom32117 = document.createElement("small");dom32117.className = "list-group-item-text";
dom32117.appendChild(dommy.template.__GT_node_like.call(null,0));
return dom32117;
})());
return dom32116;
})());
dom32113.appendChild((function (){var dom32118 = document.createElement("li");dom32118.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-rate")].join('')))
{dom32118.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-rate")].join(''));
} else
{}
dom32118.appendChild((function (){var dom32119 = document.createElement("small");dom32119.className = "list-group-item-text";
dom32119.appendChild(dommy.template.__GT_node_like.call(null,0));
return dom32119;
})());
return dom32118;
})());
return dom32113;
});
foundation.templates.dashboard = (function dashboard(id){var dom32137 = document.createElement("div");dom32137.className = "twitter-stats panel panel-default";
if(cljs.core.truth_(id))
{dom32137.setAttribute("id",id);
} else
{}
dom32137.appendChild((function (){var dom32138 = document.createElement("div");dom32138.className = "panel-heading";
dom32138.appendChild((function (){var dom32139 = document.createElement("h1");dom32139.className = "panel-title#resource-id";
dom32139.setAttribute("id","resource-id");
return dom32139;
})());
dom32138.appendChild((function (){var dom32140 = document.createElement("div");dom32140.className = "form-inline pull-right";
dom32140.appendChild((function (){var dom32141 = document.createElement("div");dom32141.className = "form-group";
dom32141.appendChild((function (){var dom32142 = document.createElement("input");dom32142.className = "form-control date-picker";
dom32142.setAttribute("id","start-time");
if(true)
{dom32142.setAttribute("readonly",true);
} else
{}
return dom32142;
})());
return dom32141;
})());
dom32140.appendChild((function (){var dom32143 = document.createElement("em");if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)))
{dom32143.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)));
} else
{}
dom32143.appendChild(document.createTextNode("to"));
return dom32143;
})());
dom32140.appendChild((function (){var dom32144 = document.createElement("div");dom32144.className = "form-group";
dom32144.appendChild((function (){var dom32145 = document.createElement("input");dom32145.className = "form-control date-picker";
dom32145.setAttribute("id","end-time");
if(true)
{dom32145.setAttribute("readonly",true);
} else
{}
return dom32145;
})());
return dom32144;
})());
dom32140.appendChild((function (){var dom32146 = document.createElement("button");dom32146.className = "btn btn-primary btn-sm";
dom32146.setAttribute("id","update-stats");
dom32146.appendChild(document.createTextNode("Update"));
return dom32146;
})());
return dom32140;
})());
return dom32138;
})());
dom32137.appendChild((function (){var dom32147 = document.createElement("div");dom32147.className = "panel-body";
dom32147.appendChild(dommy.template.__GT_node_like.call(null,foundation.templates.chart.call(null)));
return dom32147;
})());
dom32137.appendChild((function (){var dom32148 = document.createElement("div");dom32148.className = "panel-footer row";
dom32148.appendChild((function (){var dom32149 = document.createElement("div");dom32149.className = "twitter-stats";
dom32149.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8540__auto__ = (function iter__32150(s__32151){return (new cljs.core.LazySeq(null,(function (){var s__32151__$1 = s__32151;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__32151__$1);if(temp__4092__auto__)
{var s__32151__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32151__$2))
{var c__8538__auto__ = cljs.core.chunk_first.call(null,s__32151__$2);var size__8539__auto__ = cljs.core.count.call(null,c__8538__auto__);var b__32153 = cljs.core.chunk_buffer.call(null,size__8539__auto__);if((function (){var i__32152 = 0;while(true){
if((i__32152 < size__8539__auto__))
{var metric = cljs.core._nth.call(null,c__8538__auto__,i__32152);cljs.core.chunk_append.call(null,b__32153,foundation.templates.dashboard_metric.call(null,metric));
{
var G__32154 = (i__32152 + 1);
i__32152 = G__32154;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32153),iter__32150.call(null,cljs.core.chunk_rest.call(null,s__32151__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32153),null);
}
} else
{var metric = cljs.core.first.call(null,s__32151__$2);return cljs.core.cons.call(null,foundation.templates.dashboard_metric.call(null,metric),iter__32150.call(null,cljs.core.rest.call(null,s__32151__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8540__auto__.call(null,foundation.templates.dashboard_metrics);
})()));
return dom32149;
})());
return dom32148;
})());
return dom32137;
});
foundation.templates.datagrid_filter = (function datagrid_filter(){var dom32157 = document.createElement("div");dom32157.className = "autocomplete";
dom32157.appendChild((function (){var dom32158 = document.createElement("input");dom32158.className = "form-control";
if("text")
{dom32158.setAttribute("type","text");
} else
{}
if("What are you looking for?")
{dom32158.setAttribute("placeholder","What are you looking for?");
} else
{}
return dom32158;
})());
return dom32157;
});
foundation.templates.datagrid_header = (function datagrid_header(columns){var dom32165 = document.createElement("thead");dom32165.setAttribute("id","datagrid-header");
dom32165.appendChild((function (){var dom32166 = document.createElement("tr");dom32166.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8540__auto__ = (function iter__32167(s__32168){return (new cljs.core.LazySeq(null,(function (){var s__32168__$1 = s__32168;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__32168__$1);if(temp__4092__auto__)
{var s__32168__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32168__$2))
{var c__8538__auto__ = cljs.core.chunk_first.call(null,s__32168__$2);var size__8539__auto__ = cljs.core.count.call(null,c__8538__auto__);var b__32170 = cljs.core.chunk_buffer.call(null,size__8539__auto__);if((function (){var i__32169 = 0;while(true){
if((i__32169 < size__8539__auto__))
{var col = cljs.core._nth.call(null,c__8538__auto__,i__32169);cljs.core.chunk_append.call(null,b__32170,foundation.cells.th.call(null,col));
{
var G__32171 = (i__32169 + 1);
i__32169 = G__32171;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32170),iter__32167.call(null,cljs.core.chunk_rest.call(null,s__32168__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32170),null);
}
} else
{var col = cljs.core.first.call(null,s__32168__$2);return cljs.core.cons.call(null,foundation.cells.th.call(null,col),iter__32167.call(null,cljs.core.rest.call(null,s__32168__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8540__auto__.call(null,columns);
})()));
return dom32166;
})());
return dom32165;
});
foundation.templates.datagrid_row = (function datagrid_row(model,columns){var dom32177 = document.createElement("tr");dom32177.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8540__auto__ = (function iter__32178(s__32179){return (new cljs.core.LazySeq(null,(function (){var s__32179__$1 = s__32179;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__32179__$1);if(temp__4092__auto__)
{var s__32179__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32179__$2))
{var c__8538__auto__ = cljs.core.chunk_first.call(null,s__32179__$2);var size__8539__auto__ = cljs.core.count.call(null,c__8538__auto__);var b__32181 = cljs.core.chunk_buffer.call(null,size__8539__auto__);if((function (){var i__32180 = 0;while(true){
if((i__32180 < size__8539__auto__))
{var col = cljs.core._nth.call(null,c__8538__auto__,i__32180);cljs.core.chunk_append.call(null,b__32181,foundation.cells.td.call(null,col,model));
{
var G__32182 = (i__32180 + 1);
i__32180 = G__32182;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32181),iter__32178.call(null,cljs.core.chunk_rest.call(null,s__32179__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32181),null);
}
} else
{var col = cljs.core.first.call(null,s__32179__$2);return cljs.core.cons.call(null,foundation.cells.td.call(null,col,model),iter__32178.call(null,cljs.core.rest.call(null,s__32179__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8540__auto__.call(null,columns);
})()));
return dom32177;
});
foundation.templates.datagrid_body = (function datagrid_body(coll,columns){var dom32188 = document.createElement("tbody");dom32188.className = "datagrid-tbody";
dom32188.setAttribute("id","datagrid-body");
dom32188.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8540__auto__ = (function iter__32189(s__32190){return (new cljs.core.LazySeq(null,(function (){var s__32190__$1 = s__32190;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__32190__$1);if(temp__4092__auto__)
{var s__32190__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32190__$2))
{var c__8538__auto__ = cljs.core.chunk_first.call(null,s__32190__$2);var size__8539__auto__ = cljs.core.count.call(null,c__8538__auto__);var b__32192 = cljs.core.chunk_buffer.call(null,size__8539__auto__);if((function (){var i__32191 = 0;while(true){
if((i__32191 < size__8539__auto__))
{var model = cljs.core._nth.call(null,c__8538__auto__,i__32191);cljs.core.chunk_append.call(null,b__32192,foundation.templates.datagrid_row.call(null,model,columns));
{
var G__32193 = (i__32191 + 1);
i__32191 = G__32193;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32192),iter__32189.call(null,cljs.core.chunk_rest.call(null,s__32190__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32192),null);
}
} else
{var model = cljs.core.first.call(null,s__32190__$2);return cljs.core.cons.call(null,foundation.templates.datagrid_row.call(null,model,columns),iter__32189.call(null,cljs.core.rest.call(null,s__32190__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8540__auto__.call(null,coll);
})()));
return dom32188;
});
foundation.templates.datagrid_breadcrumb = (function datagrid_breadcrumb(){var dom32205 = document.createElement("ol");dom32205.className = "breadcrumb";
dom32205.appendChild((function (){var dom32206 = document.createElement("li");dom32206.className = "active";
dom32206.setAttribute("id","account");
dom32206.appendChild((function (){var dom32207 = document.createElement("div");dom32207.className = "arrow-down";
return dom32207;
})());
dom32206.appendChild((function (){var dom32208 = document.createElement("a");dom32208.appendChild(document.createTextNode("Accounts"));
return dom32208;
})());
dom32206.appendChild((function (){var dom32209 = document.createElement("div");dom32209.className = "arrow-up";
return dom32209;
})());
return dom32206;
})());
dom32205.appendChild((function (){var dom32210 = document.createElement("li");dom32210.className = "hidden";
dom32210.setAttribute("id","campaign");
dom32210.appendChild((function (){var dom32211 = document.createElement("a");dom32211.appendChild(document.createTextNode("Campaigns"));
return dom32211;
})());
return dom32210;
})());
dom32205.appendChild((function (){var dom32212 = document.createElement("li");dom32212.className = "hidden";
dom32212.setAttribute("id","line_item");
dom32212.appendChild((function (){var dom32213 = document.createElement("a");dom32213.appendChild(document.createTextNode("Line Items"));
return dom32213;
})());
return dom32212;
})());
dom32205.appendChild((function (){var dom32214 = document.createElement("li");dom32214.className = "hidden";
dom32214.setAttribute("id","promoted_tweet");
dom32214.appendChild((function (){var dom32215 = document.createElement("a");dom32215.appendChild(document.createTextNode("Promoted Products"));
return dom32215;
})());
return dom32214;
})());
return dom32205;
});
foundation.templates.datagrid_table = (function datagrid_table(model,coll){return dommy.template.__GT_node_like.call(null,(function (){var cols = foundation.models.columns.call(null,model);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table#datagrid-table.table","table#datagrid-table.table",2230740568),foundation.templates.datagrid_header.call(null,cols),foundation.templates.datagrid_body.call(null,coll,cols)], null);
})());
});
foundation.templates.datagrid = (function datagrid(id){var dom32231 = document.createElement("div");dom32231.className = "datagrid-container panel panel-default";
if(cljs.core.truth_(id))
{dom32231.setAttribute("id",id);
} else
{}
dom32231.appendChild((function (){var dom32232 = document.createElement("div");dom32232.className = "panel-heading";
dom32232.appendChild(dommy.template.__GT_node_like.call(null,foundation.templates.datagrid_breadcrumb.call(null)));
dom32232.appendChild((function (){var dom32233 = document.createElement("form");dom32233.className = "form-inline pull-right";
dom32233.appendChild((function (){var dom32234 = document.createElement("div");dom32234.className = "form-group";
dom32234.appendChild(dommy.template.__GT_node_like.call(null,foundation.templates.datagrid_filter.call(null)));
return dom32234;
})());
return dom32233;
})());
return dom32232;
})());
dom32231.appendChild((function (){var dom32235 = document.createElement("div");dom32235.className = "panel-body";
return dom32235;
})());
dom32231.appendChild((function (){var dom32236 = document.createElement("div");dom32236.className = "panel-footer";
dom32236.appendChild((function (){var dom32237 = document.createElement("div");dom32237.className = "form-inline";
dom32237.appendChild((function (){var dom32238 = document.createElement("div");dom32238.className = "form-group";
dom32238.appendChild((function (){var dom32239 = document.createElement("button");dom32239.className = "btn btn-success btn-sm";
dom32239.setAttribute("id","new");
dom32239.appendChild(document.createTextNode("New"));
return dom32239;
})());
return dom32238;
})());
dom32237.appendChild((function (){var dom32240 = document.createElement("div");dom32240.className = "form-group";
dom32240.appendChild((function (){var dom32241 = document.createElement("button");dom32241.className = "btn btn-info btn-sm disabled";
dom32241.setAttribute("id","save");
dom32241.appendChild(document.createTextNode("Save"));
return dom32241;
})());
return dom32240;
})());
dom32237.appendChild((function (){var dom32242 = document.createElement("div");dom32242.className = "form-group";
dom32242.appendChild((function (){var dom32243 = document.createElement("button");dom32243.className = "btn btn-danger btn-sm disabled";
dom32243.setAttribute("id","delete");
dom32243.appendChild(document.createTextNode("Delete"));
return dom32243;
})());
return dom32242;
})());
dom32237.appendChild((function (){var dom32244 = document.createElement("div");dom32244.className = "form-group";
dom32244.appendChild((function (){var dom32245 = document.createElement("button");dom32245.className = "btn btn-primary btn-sm disabled";
dom32245.setAttribute("id","dupe");
dom32245.appendChild(document.createTextNode("Duplicate"));
return dom32245;
})());
return dom32244;
})());
return dom32237;
})());
return dom32236;
})());
return dom32231;
});
foundation.templates.twitter_power = (function twitter_power(id){var dom32247 = document.createElement("div");if(cljs.core.truth_(id))
{dom32247.setAttribute("id",id);
} else
{}
return dom32247;
});
