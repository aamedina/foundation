// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.app.templates');
goog.require('cljs.core');
goog.require('foundation.app.cells');
goog.require('foundation.app.cells');
goog.require('dommy.core');
goog.require('dommy.core');
goog.require('enfocus.events');
goog.require('enfocus.events');
goog.require('enfocus.core');
goog.require('enfocus.core');
foundation.app.templates.dashboard_metrics = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Impressions","Engagements","Clicks","Retweets","Replies","Follows"], null);
foundation.app.templates.chart = (function chart(){var dom78581 = document.createElement("div");dom78581.className = "analytics-highcharts";
return dom78581;
});
foundation.app.templates.dashboard_metric = (function dashboard_metric(metric){var dom78589 = document.createElement("ul");dom78589.className = "list-group";
dom78589.appendChild((function (){var dom78590 = document.createElement("li");dom78590.className = "list-group-item";
if(cljs.core.truth_(metric))
{dom78590.setAttribute("id",metric);
} else
{}
dom78590.appendChild((function (){var dom78591 = document.createElement("h5");dom78591.className = "metric-header list-group-item-heading";
dom78591.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str("0 "),cljs.core.str(metric)].join('')));
return dom78591;
})());
return dom78590;
})());
dom78589.appendChild((function (){var dom78592 = document.createElement("li");dom78592.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-cpa")].join('')))
{dom78592.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-cpa")].join(''));
} else
{}
dom78592.appendChild((function (){var dom78593 = document.createElement("small");dom78593.className = "list-group-item-text";
dom78593.appendChild(dommy.template.__GT_node_like.call(null,0));
return dom78593;
})());
return dom78592;
})());
dom78589.appendChild((function (){var dom78594 = document.createElement("li");dom78594.className = "list-group-item";
if(cljs.core.truth_([cljs.core.str(metric),cljs.core.str("-rate")].join('')))
{dom78594.setAttribute("id",[cljs.core.str(metric),cljs.core.str("-rate")].join(''));
} else
{}
dom78594.appendChild((function (){var dom78595 = document.createElement("small");dom78595.className = "list-group-item-text";
dom78595.appendChild(dommy.template.__GT_node_like.call(null,0));
return dom78595;
})());
return dom78594;
})());
return dom78589;
});
foundation.app.templates.dashboard = (function dashboard(p__78596){var map__78615 = p__78596;var map__78615__$1 = ((cljs.core.seq_QMARK_.call(null,map__78615))?cljs.core.apply.call(null,cljs.core.hash_map,map__78615):map__78615);var id = cljs.core.get.call(null,map__78615__$1,new cljs.core.Keyword(null,"id","id",1013907597));var dom78616 = document.createElement("div");dom78616.className = "twitter-stats panel panel-default";
if(cljs.core.truth_(id))
{dom78616.setAttribute("id",id);
} else
{}
dom78616.appendChild((function (){var dom78617 = document.createElement("div");dom78617.className = "panel-heading";
dom78617.appendChild((function (){var dom78618 = document.createElement("h1");dom78618.className = "panel-title#resource-id";
dom78618.setAttribute("id","resource-id");
return dom78618;
})());
dom78617.appendChild((function (){var dom78619 = document.createElement("div");dom78619.className = "form-inline pull-right";
dom78619.appendChild((function (){var dom78620 = document.createElement("div");dom78620.className = "form-group";
dom78620.appendChild((function (){var dom78621 = document.createElement("input");dom78621.className = "form-control date-picker";
dom78621.setAttribute("id","start-time");
if(true)
{dom78621.setAttribute("readonly",true);
} else
{}
return dom78621;
})());
return dom78620;
})());
dom78619.appendChild((function (){var dom78622 = document.createElement("em");if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)))
{dom78622.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#6F6F6F"], null)));
} else
{}
dom78622.appendChild(document.createTextNode("to"));
return dom78622;
})());
dom78619.appendChild((function (){var dom78623 = document.createElement("div");dom78623.className = "form-group";
dom78623.appendChild((function (){var dom78624 = document.createElement("input");dom78624.className = "form-control date-picker";
dom78624.setAttribute("id","end-time");
if(true)
{dom78624.setAttribute("readonly",true);
} else
{}
return dom78624;
})());
return dom78623;
})());
dom78619.appendChild((function (){var dom78625 = document.createElement("button");dom78625.className = "btn btn-primary btn-sm";
dom78625.setAttribute("id","update-stats");
dom78625.appendChild(document.createTextNode("Update"));
return dom78625;
})());
return dom78619;
})());
return dom78617;
})());
dom78616.appendChild((function (){var dom78626 = document.createElement("div");dom78626.className = "panel-body";
dom78626.appendChild(dommy.template.__GT_node_like.call(null,foundation.app.templates.chart.call(null)));
return dom78626;
})());
dom78616.appendChild((function (){var dom78627 = document.createElement("div");dom78627.className = "panel-footer row";
dom78627.appendChild((function (){var dom78628 = document.createElement("div");dom78628.className = "twitter-stats";
dom78628.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14514__auto__ = (function iter__78629(s__78630){return (new cljs.core.LazySeq(null,(function (){var s__78630__$1 = s__78630;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__78630__$1);if(temp__4092__auto__)
{var s__78630__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__78630__$2))
{var c__14512__auto__ = cljs.core.chunk_first.call(null,s__78630__$2);var size__14513__auto__ = cljs.core.count.call(null,c__14512__auto__);var b__78632 = cljs.core.chunk_buffer.call(null,size__14513__auto__);if((function (){var i__78631 = 0;while(true){
if((i__78631 < size__14513__auto__))
{var metric = cljs.core._nth.call(null,c__14512__auto__,i__78631);cljs.core.chunk_append.call(null,b__78632,foundation.app.templates.dashboard_metric.call(null,metric));
{
var G__78633 = (i__78631 + 1);
i__78631 = G__78633;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__78632),iter__78629.call(null,cljs.core.chunk_rest.call(null,s__78630__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__78632),null);
}
} else
{var metric = cljs.core.first.call(null,s__78630__$2);return cljs.core.cons.call(null,foundation.app.templates.dashboard_metric.call(null,metric),iter__78629.call(null,cljs.core.rest.call(null,s__78630__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14514__auto__.call(null,foundation.app.templates.dashboard_metrics);
})()));
return dom78628;
})());
return dom78627;
})());
return dom78616;
});
foundation.app.templates.datagrid_filter = (function datagrid_filter(coll){var dom78636 = document.createElement("div");dom78636.className = "autocomplete";
dom78636.appendChild((function (){var dom78637 = document.createElement("input");dom78637.className = "form-control";
if("text")
{dom78637.setAttribute("type","text");
} else
{}
if("What are you looking for?")
{dom78637.setAttribute("placeholder","What are you looking for?");
} else
{}
return dom78637;
})());
return dom78636;
});
foundation.app.templates.datagrid_header = (function datagrid_header(columns){var dom78644 = document.createElement("thead");dom78644.setAttribute("id","datagrid-header");
dom78644.appendChild((function (){var dom78645 = document.createElement("tr");dom78645.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14514__auto__ = (function iter__78646(s__78647){return (new cljs.core.LazySeq(null,(function (){var s__78647__$1 = s__78647;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__78647__$1);if(temp__4092__auto__)
{var s__78647__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__78647__$2))
{var c__14512__auto__ = cljs.core.chunk_first.call(null,s__78647__$2);var size__14513__auto__ = cljs.core.count.call(null,c__14512__auto__);var b__78649 = cljs.core.chunk_buffer.call(null,size__14513__auto__);if((function (){var i__78648 = 0;while(true){
if((i__78648 < size__14513__auto__))
{var col = cljs.core._nth.call(null,c__14512__auto__,i__78648);cljs.core.chunk_append.call(null,b__78649,foundation.app.cells.th.call(null,col));
{
var G__78650 = (i__78648 + 1);
i__78648 = G__78650;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__78649),iter__78646.call(null,cljs.core.chunk_rest.call(null,s__78647__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__78649),null);
}
} else
{var col = cljs.core.first.call(null,s__78647__$2);return cljs.core.cons.call(null,foundation.app.cells.th.call(null,col),iter__78646.call(null,cljs.core.rest.call(null,s__78647__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14514__auto__.call(null,columns);
})()));
return dom78645;
})());
return dom78644;
});
foundation.app.templates.datagrid_row = (function datagrid_row(model,columns){var dom78656 = document.createElement("tr");dom78656.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14514__auto__ = (function iter__78657(s__78658){return (new cljs.core.LazySeq(null,(function (){var s__78658__$1 = s__78658;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__78658__$1);if(temp__4092__auto__)
{var s__78658__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__78658__$2))
{var c__14512__auto__ = cljs.core.chunk_first.call(null,s__78658__$2);var size__14513__auto__ = cljs.core.count.call(null,c__14512__auto__);var b__78660 = cljs.core.chunk_buffer.call(null,size__14513__auto__);if((function (){var i__78659 = 0;while(true){
if((i__78659 < size__14513__auto__))
{var col = cljs.core._nth.call(null,c__14512__auto__,i__78659);cljs.core.chunk_append.call(null,b__78660,foundation.app.cells.td.call(null,col,model));
{
var G__78661 = (i__78659 + 1);
i__78659 = G__78661;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__78660),iter__78657.call(null,cljs.core.chunk_rest.call(null,s__78658__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__78660),null);
}
} else
{var col = cljs.core.first.call(null,s__78658__$2);return cljs.core.cons.call(null,foundation.app.cells.td.call(null,col,model),iter__78657.call(null,cljs.core.rest.call(null,s__78658__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14514__auto__.call(null,columns);
})()));
return dom78656;
});
foundation.app.templates.datagrid_body = (function datagrid_body(coll,columns){var dom78667 = document.createElement("tbody");dom78667.className = "datagrid-tbody";
dom78667.setAttribute("id","datagrid-body");
dom78667.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__14514__auto__ = (function iter__78668(s__78669){return (new cljs.core.LazySeq(null,(function (){var s__78669__$1 = s__78669;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__78669__$1);if(temp__4092__auto__)
{var s__78669__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__78669__$2))
{var c__14512__auto__ = cljs.core.chunk_first.call(null,s__78669__$2);var size__14513__auto__ = cljs.core.count.call(null,c__14512__auto__);var b__78671 = cljs.core.chunk_buffer.call(null,size__14513__auto__);if((function (){var i__78670 = 0;while(true){
if((i__78670 < size__14513__auto__))
{var model = cljs.core._nth.call(null,c__14512__auto__,i__78670);cljs.core.chunk_append.call(null,b__78671,foundation.app.templates.datagrid_row.call(null,model,columns));
{
var G__78672 = (i__78670 + 1);
i__78670 = G__78672;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__78671),iter__78668.call(null,cljs.core.chunk_rest.call(null,s__78669__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__78671),null);
}
} else
{var model = cljs.core.first.call(null,s__78669__$2);return cljs.core.cons.call(null,foundation.app.templates.datagrid_row.call(null,model,columns),iter__78668.call(null,cljs.core.rest.call(null,s__78669__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__14514__auto__.call(null,cljs.core.vals.call(null,coll));
})()));
return dom78667;
});
foundation.app.templates.datagrid_breadcrumb = (function datagrid_breadcrumb(coll){var dom78684 = document.createElement("ol");dom78684.className = "breadcrumb";
dom78684.appendChild((function (){var dom78685 = document.createElement("li");dom78685.className = "active";
dom78685.setAttribute("id","account");
dom78685.appendChild((function (){var dom78686 = document.createElement("div");dom78686.className = "arrow-down";
return dom78686;
})());
dom78685.appendChild((function (){var dom78687 = document.createElement("a");dom78687.appendChild(document.createTextNode("Accounts"));
return dom78687;
})());
dom78685.appendChild((function (){var dom78688 = document.createElement("div");dom78688.className = "arrow-up";
return dom78688;
})());
return dom78685;
})());
dom78684.appendChild((function (){var dom78689 = document.createElement("li");dom78689.className = "hidden";
dom78689.setAttribute("id","campaign");
dom78689.appendChild((function (){var dom78690 = document.createElement("a");dom78690.appendChild(document.createTextNode("Campaigns"));
return dom78690;
})());
return dom78689;
})());
dom78684.appendChild((function (){var dom78691 = document.createElement("li");dom78691.className = "hidden";
dom78691.setAttribute("id","line_item");
dom78691.appendChild((function (){var dom78692 = document.createElement("a");dom78692.appendChild(document.createTextNode("Line Items"));
return dom78692;
})());
return dom78691;
})());
dom78684.appendChild((function (){var dom78693 = document.createElement("li");dom78693.className = "hidden";
dom78693.setAttribute("id","promoted_tweet");
dom78693.appendChild((function (){var dom78694 = document.createElement("a");dom78694.appendChild(document.createTextNode("Promoted Products"));
return dom78694;
})());
return dom78693;
})());
return dom78684;
});
foundation.app.templates.datagrid_table = (function datagrid_table(p__78695){var map__78698 = p__78695;var map__78698__$1 = ((cljs.core.seq_QMARK_.call(null,map__78698))?cljs.core.apply.call(null,cljs.core.hash_map,map__78698):map__78698);var collection = cljs.core.get.call(null,map__78698__$1,new cljs.core.Keyword(null,"collection","collection",3567559184));var resource = cljs.core.get.call(null,map__78698__$1,new cljs.core.Keyword(null,"resource","resource",672839552));return dommy.template.__GT_node_like.call(null,(function (){var map__78699 = resource;var map__78699__$1 = ((cljs.core.seq_QMARK_.call(null,map__78699))?cljs.core.apply.call(null,cljs.core.hash_map,map__78699):map__78699);var columns = cljs.core.get.call(null,map__78699__$1,new cljs.core.Keyword(null,"columns","columns",1963625295));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table#datagrid-table.table","table#datagrid-table.table",2230740568),foundation.app.templates.datagrid_header.call(null,columns),foundation.app.templates.datagrid_body.call(null,collection,columns)], null);
})());
});
foundation.app.templates.datagrid = (function datagrid(p__78700){var map__78717 = p__78700;var map__78717__$1 = ((cljs.core.seq_QMARK_.call(null,map__78717))?cljs.core.apply.call(null,cljs.core.hash_map,map__78717):map__78717);var collection = cljs.core.get.call(null,map__78717__$1,new cljs.core.Keyword(null,"collection","collection",3567559184));var id = cljs.core.get.call(null,map__78717__$1,new cljs.core.Keyword(null,"id","id",1013907597));var dom78718 = document.createElement("div");dom78718.className = "datagrid-container panel panel-default";
if(cljs.core.truth_(id))
{dom78718.setAttribute("id",id);
} else
{}
dom78718.appendChild((function (){var dom78719 = document.createElement("div");dom78719.className = "panel-heading";
dom78719.appendChild(dommy.template.__GT_node_like.call(null,foundation.app.templates.datagrid_breadcrumb.call(null,collection)));
dom78719.appendChild((function (){var dom78720 = document.createElement("form");dom78720.className = "form-inline pull-right";
dom78720.appendChild((function (){var dom78721 = document.createElement("div");dom78721.className = "form-group";
dom78721.appendChild(dommy.template.__GT_node_like.call(null,foundation.app.templates.datagrid_filter.call(null,collection)));
return dom78721;
})());
return dom78720;
})());
return dom78719;
})());
dom78718.appendChild((function (){var dom78722 = document.createElement("div");dom78722.className = "panel-body";
dom78722.appendChild(dommy.template.__GT_node_like.call(null,foundation.app.templates.datagrid_table.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"collection","collection",3567559184),collection], null))));
return dom78722;
})());
dom78718.appendChild((function (){var dom78723 = document.createElement("div");dom78723.className = "panel-footer";
dom78723.appendChild((function (){var dom78724 = document.createElement("div");dom78724.className = "form-inline";
dom78724.appendChild((function (){var dom78725 = document.createElement("div");dom78725.className = "form-group";
dom78725.appendChild((function (){var dom78726 = document.createElement("button");dom78726.className = "btn btn-success btn-sm";
dom78726.setAttribute("id","new");
dom78726.appendChild(document.createTextNode("New"));
return dom78726;
})());
return dom78725;
})());
dom78724.appendChild((function (){var dom78727 = document.createElement("div");dom78727.className = "form-group";
dom78727.appendChild((function (){var dom78728 = document.createElement("button");dom78728.className = "btn btn-info btn-sm disabled";
dom78728.setAttribute("id","save");
dom78728.appendChild(document.createTextNode("Save"));
return dom78728;
})());
return dom78727;
})());
dom78724.appendChild((function (){var dom78729 = document.createElement("div");dom78729.className = "form-group";
dom78729.appendChild((function (){var dom78730 = document.createElement("button");dom78730.className = "btn btn-danger btn-sm disabled";
dom78730.setAttribute("id","delete");
dom78730.appendChild(document.createTextNode("Delete"));
return dom78730;
})());
return dom78729;
})());
dom78724.appendChild((function (){var dom78731 = document.createElement("div");dom78731.className = "form-group";
dom78731.appendChild((function (){var dom78732 = document.createElement("button");dom78732.className = "btn btn-primary btn-sm disabled";
dom78732.setAttribute("id","dupe");
dom78732.appendChild(document.createTextNode("Duplicate"));
return dom78732;
})());
return dom78731;
})());
return dom78724;
})());
return dom78723;
})());
return dom78718;
});
foundation.app.templates.twitter_power = (function twitter_power(id){var dom78735 = document.createElement("div");if(cljs.core.truth_(id))
{dom78735.setAttribute("id",id);
} else
{}
dom78735.appendChild((function (){var dom78736 = document.createElement("h1");dom78736.appendChild(document.createTextNode("Hello, world!"));
return dom78736;
})());
return dom78735;
});

//# sourceMappingURL=templates.js.map