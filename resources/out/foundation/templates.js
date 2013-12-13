// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.templates');
goog.require('cljs.core');
goog.require('foundation.cells');
goog.require('foundation.cells');
goog.require('dommy.core');
goog.require('dommy.core');
goog.require('enfocus.events');
goog.require('enfocus.events');
goog.require('enfocus.core');
goog.require('enfocus.core');
foundation.templates.dashboard_metrics = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Impressions","Engagements","Clicks","Retweets","Replies","Follows"], null);
foundation.templates.chart = (function chart(){var dom86474 = document.createElement("div");dom86474.className = "analytics-highcharts";
return dom86474;
});
foundation.templates.dashboard_metric = (function dashboard_metric(metric){var dom86482 = document.createElement("ul");dom86482.className = "list-group";
dom86482.appendChild((function (){var dom86483 = document.createElement("li");dom86483.className = "list-group-item";
if(cljs.core.truth_(metric))
{dom86483.setAttribute("id",metric);
} else
{}
dom86483.appendChild((function (){var dom86484 = document.createElement("h5");dom86484.className = "metric-header list-group-item-heading";
dom86484.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(metric)].join('')));
return dom86484;
})());
return dom86483;
})());
dom86482.appendChild((function (){var dom86485 = document.createElement("li");dom86485.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-cpa")].join('')))
{dom86485.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-cpa")].join(''));
} else
{}
dom86485.appendChild((function (){var dom86486 = document.createElement("small");dom86486.className = "list-group-item-text";
dom86486.appendChild(dommy.template.__GT_node_like.call(null,0));
return dom86486;
})());
return dom86485;
})());
dom86482.appendChild((function (){var dom86487 = document.createElement("li");dom86487.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-rate")].join('')))
{dom86487.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-rate")].join(''));
} else
{}
dom86487.appendChild((function (){var dom86488 = document.createElement("small");dom86488.className = "list-group-item-text";
dom86488.appendChild(dommy.template.__GT_node_like.call(null,0));
return dom86488;
})());
return dom86487;
})());
return dom86482;
});
foundation.templates.dashboard = (function dashboard(id){var dom86506 = document.createElement("div");dom86506.className = "twitter-stats panel panel-default";
if(cljs.core.truth_(id))
{dom86506.setAttribute("id",id);
} else
{}
dom86506.appendChild((function (){var dom86507 = document.createElement("div");dom86507.className = "panel-heading";
dom86507.appendChild((function (){var dom86508 = document.createElement("h1");dom86508.className = "panel-title#resource-id";
dom86508.setAttribute("id","resource-id");
return dom86508;
})());
dom86507.appendChild((function (){var dom86509 = document.createElement("div");dom86509.className = "form-inline pull-right";
dom86509.appendChild((function (){var dom86510 = document.createElement("div");dom86510.className = "form-group";
dom86510.appendChild((function (){var dom86511 = document.createElement("input");dom86511.className = "form-control date-picker";
dom86511.setAttribute("id","start-time");
if(true)
{dom86511.setAttribute("readonly",true);
} else
{}
return dom86511;
})());
return dom86510;
})());
dom86509.appendChild((function (){var dom86512 = document.createElement("em");if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)))
{dom86512.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)));
} else
{}
dom86512.appendChild(document.createTextNode("to"));
return dom86512;
})());
dom86509.appendChild((function (){var dom86513 = document.createElement("div");dom86513.className = "form-group";
dom86513.appendChild((function (){var dom86514 = document.createElement("input");dom86514.className = "form-control date-picker";
dom86514.setAttribute("id","end-time");
if(true)
{dom86514.setAttribute("readonly",true);
} else
{}
return dom86514;
})());
return dom86513;
})());
dom86509.appendChild((function (){var dom86515 = document.createElement("button");dom86515.className = "btn btn-primary btn-sm";
dom86515.setAttribute("id","update-stats");
dom86515.appendChild(document.createTextNode("Update"));
return dom86515;
})());
return dom86509;
})());
return dom86507;
})());
dom86506.appendChild((function (){var dom86516 = document.createElement("div");dom86516.className = "panel-body";
dom86516.appendChild(dommy.template.__GT_node_like.call(null,foundation.templates.chart.call(null)));
return dom86516;
})());
dom86506.appendChild((function (){var dom86517 = document.createElement("div");dom86517.className = "panel-footer row";
dom86517.appendChild((function (){var dom86518 = document.createElement("div");dom86518.className = "twitter-stats";
dom86518.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14518__auto__ = (function iter__86519(s__86520){return (new cljs.core.LazySeq(null,(function (){var s__86520__$1 = s__86520;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__86520__$1);if(temp__4092__auto__)
{var s__86520__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__86520__$2))
{var c__14516__auto__ = cljs.core.chunk_first.call(null,s__86520__$2);var size__14517__auto__ = cljs.core.count.call(null,c__14516__auto__);var b__86522 = cljs.core.chunk_buffer.call(null,size__14517__auto__);if((function (){var i__86521 = 0;while(true){
if((i__86521 < size__14517__auto__))
{var metric = cljs.core._nth.call(null,c__14516__auto__,i__86521);cljs.core.chunk_append.call(null,b__86522,foundation.templates.dashboard_metric.call(null,metric));
{
var G__86523 = (i__86521 + 1);
i__86521 = G__86523;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__86522),iter__86519.call(null,cljs.core.chunk_rest.call(null,s__86520__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__86522),null);
}
} else
{var metric = cljs.core.first.call(null,s__86520__$2);return cljs.core.cons.call(null,foundation.templates.dashboard_metric.call(null,metric),iter__86519.call(null,cljs.core.rest.call(null,s__86520__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14518__auto__.call(null,foundation.templates.dashboard_metrics);
})()));
return dom86518;
})());
return dom86517;
})());
return dom86506;
});
foundation.templates.datagrid_filter = (function datagrid_filter(coll){var dom86526 = document.createElement("div");dom86526.className = "autocomplete";
dom86526.appendChild((function (){var dom86527 = document.createElement("input");dom86527.className = "form-control";
if("text")
{dom86527.setAttribute("type","text");
} else
{}
if("What are you looking for?")
{dom86527.setAttribute("placeholder","What are you looking for?");
} else
{}
return dom86527;
})());
return dom86526;
});
foundation.templates.datagrid_header = (function datagrid_header(columns){var dom86534 = document.createElement("thead");dom86534.setAttribute("id","datagrid-header");
dom86534.appendChild((function (){var dom86535 = document.createElement("tr");dom86535.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14518__auto__ = (function iter__86536(s__86537){return (new cljs.core.LazySeq(null,(function (){var s__86537__$1 = s__86537;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__86537__$1);if(temp__4092__auto__)
{var s__86537__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__86537__$2))
{var c__14516__auto__ = cljs.core.chunk_first.call(null,s__86537__$2);var size__14517__auto__ = cljs.core.count.call(null,c__14516__auto__);var b__86539 = cljs.core.chunk_buffer.call(null,size__14517__auto__);if((function (){var i__86538 = 0;while(true){
if((i__86538 < size__14517__auto__))
{var col = cljs.core._nth.call(null,c__14516__auto__,i__86538);cljs.core.chunk_append.call(null,b__86539,foundation.cells.th.call(null,col));
{
var G__86540 = (i__86538 + 1);
i__86538 = G__86540;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__86539),iter__86536.call(null,cljs.core.chunk_rest.call(null,s__86537__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__86539),null);
}
} else
{var col = cljs.core.first.call(null,s__86537__$2);return cljs.core.cons.call(null,foundation.cells.th.call(null,col),iter__86536.call(null,cljs.core.rest.call(null,s__86537__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14518__auto__.call(null,columns);
})()));
return dom86535;
})());
return dom86534;
});
foundation.templates.datagrid_row = (function datagrid_row(model,columns){var dom86546 = document.createElement("tr");dom86546.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14518__auto__ = (function iter__86547(s__86548){return (new cljs.core.LazySeq(null,(function (){var s__86548__$1 = s__86548;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__86548__$1);if(temp__4092__auto__)
{var s__86548__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__86548__$2))
{var c__14516__auto__ = cljs.core.chunk_first.call(null,s__86548__$2);var size__14517__auto__ = cljs.core.count.call(null,c__14516__auto__);var b__86550 = cljs.core.chunk_buffer.call(null,size__14517__auto__);if((function (){var i__86549 = 0;while(true){
if((i__86549 < size__14517__auto__))
{var col = cljs.core._nth.call(null,c__14516__auto__,i__86549);cljs.core.chunk_append.call(null,b__86550,foundation.cells.td.call(null,col,model));
{
var G__86551 = (i__86549 + 1);
i__86549 = G__86551;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__86550),iter__86547.call(null,cljs.core.chunk_rest.call(null,s__86548__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__86550),null);
}
} else
{var col = cljs.core.first.call(null,s__86548__$2);return cljs.core.cons.call(null,foundation.cells.td.call(null,col,model),iter__86547.call(null,cljs.core.rest.call(null,s__86548__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14518__auto__.call(null,columns);
})()));
return dom86546;
});
foundation.templates.datagrid_body = (function datagrid_body(coll,columns){var dom86557 = document.createElement("tbody");dom86557.className = "datagrid-tbody";
dom86557.setAttribute("id","datagrid-body");
dom86557.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14518__auto__ = (function iter__86558(s__86559){return (new cljs.core.LazySeq(null,(function (){var s__86559__$1 = s__86559;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__86559__$1);if(temp__4092__auto__)
{var s__86559__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__86559__$2))
{var c__14516__auto__ = cljs.core.chunk_first.call(null,s__86559__$2);var size__14517__auto__ = cljs.core.count.call(null,c__14516__auto__);var b__86561 = cljs.core.chunk_buffer.call(null,size__14517__auto__);if((function (){var i__86560 = 0;while(true){
if((i__86560 < size__14517__auto__))
{var model = cljs.core._nth.call(null,c__14516__auto__,i__86560);cljs.core.chunk_append.call(null,b__86561,foundation.templates.datagrid_row.call(null,model,columns));
{
var G__86562 = (i__86560 + 1);
i__86560 = G__86562;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__86561),iter__86558.call(null,cljs.core.chunk_rest.call(null,s__86559__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__86561),null);
}
} else
{var model = cljs.core.first.call(null,s__86559__$2);return cljs.core.cons.call(null,foundation.templates.datagrid_row.call(null,model,columns),iter__86558.call(null,cljs.core.rest.call(null,s__86559__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14518__auto__.call(null,cljs.core.vals.call(null,coll));
})()));
return dom86557;
});
foundation.templates.datagrid_breadcrumb = (function datagrid_breadcrumb(coll){var dom86574 = document.createElement("ol");dom86574.className = "breadcrumb";
dom86574.appendChild((function (){var dom86575 = document.createElement("li");dom86575.className = "active";
dom86575.setAttribute("id","account");
dom86575.appendChild((function (){var dom86576 = document.createElement("div");dom86576.className = "arrow-down";
return dom86576;
})());
dom86575.appendChild((function (){var dom86577 = document.createElement("a");dom86577.appendChild(document.createTextNode("Accounts"));
return dom86577;
})());
dom86575.appendChild((function (){var dom86578 = document.createElement("div");dom86578.className = "arrow-up";
return dom86578;
})());
return dom86575;
})());
dom86574.appendChild((function (){var dom86579 = document.createElement("li");dom86579.className = "hidden";
dom86579.setAttribute("id","campaign");
dom86579.appendChild((function (){var dom86580 = document.createElement("a");dom86580.appendChild(document.createTextNode("Campaigns"));
return dom86580;
})());
return dom86579;
})());
dom86574.appendChild((function (){var dom86581 = document.createElement("li");dom86581.className = "hidden";
dom86581.setAttribute("id","line_item");
dom86581.appendChild((function (){var dom86582 = document.createElement("a");dom86582.appendChild(document.createTextNode("Line Items"));
return dom86582;
})());
return dom86581;
})());
dom86574.appendChild((function (){var dom86583 = document.createElement("li");dom86583.className = "hidden";
dom86583.setAttribute("id","promoted_tweet");
dom86583.appendChild((function (){var dom86584 = document.createElement("a");dom86584.appendChild(document.createTextNode("Promoted Products"));
return dom86584;
})());
return dom86583;
})());
return dom86574;
});
foundation.templates.datagrid_table = (function datagrid_table(p__86585){var map__86588 = p__86585;var map__86588__$1 = ((cljs.core.seq_QMARK_.call(null,map__86588))?cljs.core.apply.call(null,cljs.core.hash_map,map__86588):map__86588);var collection = cljs.core.get.call(null,map__86588__$1,new cljs.core.Keyword(null,"collection","collection",3567559184));var resource = cljs.core.get.call(null,map__86588__$1,new cljs.core.Keyword(null,"resource","resource",672839552));return dommy.template.__GT_node_like.call(null,(function (){var map__86589 = resource;var map__86589__$1 = ((cljs.core.seq_QMARK_.call(null,map__86589))?cljs.core.apply.call(null,cljs.core.hash_map,map__86589):map__86589);var columns = cljs.core.get.call(null,map__86589__$1,new cljs.core.Keyword(null,"columns","columns",1963625295));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table#datagrid-table.table","table#datagrid-table.table",2230740568),foundation.templates.datagrid_header.call(null,columns),foundation.templates.datagrid_body.call(null,collection,columns)], null);
})());
});
foundation.templates.datagrid = (function datagrid(id,collection){var dom86605 = document.createElement("div");dom86605.className = "datagrid-container panel panel-default";
if(cljs.core.truth_(id))
{dom86605.setAttribute("id",id);
} else
{}
dom86605.appendChild((function (){var dom86606 = document.createElement("div");dom86606.className = "panel-heading";
dom86606.appendChild(dommy.template.__GT_node_like.call(null,foundation.templates.datagrid_breadcrumb.call(null,collection)));
dom86606.appendChild((function (){var dom86607 = document.createElement("form");dom86607.className = "form-inline pull-right";
dom86607.appendChild((function (){var dom86608 = document.createElement("div");dom86608.className = "form-group";
dom86608.appendChild(dommy.template.__GT_node_like.call(null,foundation.templates.datagrid_filter.call(null,collection)));
return dom86608;
})());
return dom86607;
})());
return dom86606;
})());
dom86605.appendChild((function (){var dom86609 = document.createElement("div");dom86609.className = "panel-body";
dom86609.appendChild(dommy.template.__GT_node_like.call(null,foundation.templates.datagrid_table.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"collection","collection",3567559184),collection], null))));
return dom86609;
})());
dom86605.appendChild((function (){var dom86610 = document.createElement("div");dom86610.className = "panel-footer";
dom86610.appendChild((function (){var dom86611 = document.createElement("div");dom86611.className = "form-inline";
dom86611.appendChild((function (){var dom86612 = document.createElement("div");dom86612.className = "form-group";
dom86612.appendChild((function (){var dom86613 = document.createElement("button");dom86613.className = "btn btn-success btn-sm";
dom86613.setAttribute("id","new");
dom86613.appendChild(document.createTextNode("New"));
return dom86613;
})());
return dom86612;
})());
dom86611.appendChild((function (){var dom86614 = document.createElement("div");dom86614.className = "form-group";
dom86614.appendChild((function (){var dom86615 = document.createElement("button");dom86615.className = "btn btn-info btn-sm disabled";
dom86615.setAttribute("id","save");
dom86615.appendChild(document.createTextNode("Save"));
return dom86615;
})());
return dom86614;
})());
dom86611.appendChild((function (){var dom86616 = document.createElement("div");dom86616.className = "form-group";
dom86616.appendChild((function (){var dom86617 = document.createElement("button");dom86617.className = "btn btn-danger btn-sm disabled";
dom86617.setAttribute("id","delete");
dom86617.appendChild(document.createTextNode("Delete"));
return dom86617;
})());
return dom86616;
})());
dom86611.appendChild((function (){var dom86618 = document.createElement("div");dom86618.className = "form-group";
dom86618.appendChild((function (){var dom86619 = document.createElement("button");dom86619.className = "btn btn-primary btn-sm disabled";
dom86619.setAttribute("id","dupe");
dom86619.appendChild(document.createTextNode("Duplicate"));
return dom86619;
})());
return dom86618;
})());
return dom86611;
})());
return dom86610;
})());
return dom86605;
});
foundation.templates.twitter_power = (function twitter_power(id){var dom86621 = document.createElement("div");if(cljs.core.truth_(id))
{dom86621.setAttribute("id",id);
} else
{}
return dom86621;
});

//# sourceMappingURL=templates.js.map