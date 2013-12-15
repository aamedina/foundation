// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.rendering');
goog.require('cljs.core');
goog.require('foundation.app');
goog.require('foundation.chart');
goog.require('foundation.app.render');
goog.require('cljs.core.async');
goog.require('clojure.zip');
goog.require('foundation.app');
goog.require('cljs_time.coerce');
goog.require('enfocus.events');
goog.require('foundation.app.message');
goog.require('foundation.app.render');
goog.require('enfocus.events');
goog.require('foundation.behavior');
goog.require('clojure.zip');
goog.require('goog.dom');
goog.require('enfocus.core');
goog.require('dommy.core');
goog.require('foundation.app.xhr');
goog.require('enfocus.core');
goog.require('foundation.app.util');
goog.require('foundation.chart');
goog.require('foundation.chart');
goog.require('clojure.set');
goog.require('foundation.templates');
goog.require('clojure.string');
goog.require('foundation.app');
goog.require('clojure.string');
goog.require('foundation.templates');
goog.require('cljs.core.match');
goog.require('clojure.browser.repl');
goog.require('clojure.set');
goog.require('foundation.app.message');
goog.require('foundation.models');
goog.require('cljs.core.match');
goog.require('cljs.core.async');
goog.require('foundation.app.xhr');
goog.require('foundation.app.util');
goog.require('cljs_time.coerce');
goog.require('foundation.app.render');
goog.require('foundation.behavior');
goog.require('dommy.core');
goog.require('foundation.models');
cljs.core.enable_console_print_BANG_.call(null);
foundation.rendering.css_id = (function css_id(id){return [cljs.core.str("#"),cljs.core.str(id)].join('');
});
cljs.core._add_method.call(null,foundation.app.render.node_create,cljs.core.PersistentVector.EMPTY,(function (renderer,p__322754,input_queue,parent_id,id){var vec__322755 = p__322754;var _ = cljs.core.nth.call(null,vec__322755,0,null);var path = cljs.core.nth.call(null,vec__322755,1,null);var ___$1 = cljs.core.nth.call(null,vec__322755,2,null);var val = cljs.core.nth.call(null,vec__322755,3,null);return enfocus.core.at.call(null,document,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",1016933652)], null),enfocus.core.append.call(null,foundation.templates.twitter_power.call(null,id)));
}));
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null),(function (renderer,delta,input_queue,parent_id,id){return enfocus.core.at.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.rendering.css_id.call(null,parent_id)], null),enfocus.core.append.call(null,foundation.templates.dashboard.call(null,id)));
}));
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950),new cljs.core.Keyword(null,"stats","stats",1123661841)], null),(function (renderer,delta,input_queue,parent_id,id){return cljs.core.println.call(null,delta);
}));
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950),new cljs.core.Keyword(null,"stats","stats",1123661841)], null),(function (renderer,p__322756,input_queue,parent_id,id){var vec__322757 = p__322756;var _ = cljs.core.nth.call(null,vec__322757,0,null);var path = cljs.core.nth.call(null,vec__322757,1,null);var ___$1 = cljs.core.nth.call(null,vec__322757,2,null);var val = cljs.core.nth.call(null,vec__322757,3,null);return cljs.core.println.call(null,path,val);
}));
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null),(function (renderer,p__322758,input_queue,parent_id,id){var vec__322759 = p__322758;var _ = cljs.core.nth.call(null,vec__322759,0,null);var path = cljs.core.nth.call(null,vec__322759,1,null);var ___$1 = cljs.core.nth.call(null,vec__322759,2,null);var ___$2 = cljs.core.nth.call(null,vec__322759,3,null);return enfocus.core.at.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.rendering.css_id.call(null,parent_id)], null),enfocus.core.append.call(null,foundation.templates.datagrid.call(null,id)));
}));
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null),(function (renderer,p__322760,input_queue,parent_id,id){var vec__322761 = p__322760;var _ = cljs.core.nth.call(null,vec__322761,0,null);var path = cljs.core.nth.call(null,vec__322761,1,null);var ___$1 = cljs.core.nth.call(null,vec__322761,2,null);var val = cljs.core.nth.call(null,vec__322761,3,null);return foundation.app.render.set_data_BANG_.call(null,renderer,path,new cljs.core.Keyword(null,"resource","resource",672839552).cljs$core$IFn$_invoke$arity$1(val));
}));
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null),(function (renderer,p__322762,input_queue,parent_id,id){var vec__322763 = p__322762;var _ = cljs.core.nth.call(null,vec__322763,0,null);var path = cljs.core.nth.call(null,vec__322763,1,null);var ___$1 = cljs.core.nth.call(null,vec__322763,2,null);var val = cljs.core.nth.call(null,vec__322763,3,null);var resource = foundation.app.render.get_data.call(null,renderer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null));return enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",3798183098)], null),enfocus.core.content.call(null,foundation.templates.datagrid_table.call(null,resource,cljs.core.PersistentVector.EMPTY)));
}));
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null),(function (renderer,p__322764,input_queue,parent_id,id){var vec__322765 = p__322764;var _ = cljs.core.nth.call(null,vec__322765,0,null);var path = cljs.core.nth.call(null,vec__322765,1,null);var ___$1 = cljs.core.nth.call(null,vec__322765,2,null);var val = cljs.core.nth.call(null,vec__322765,3,null);var model = foundation.app.render.get_data.call(null,renderer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null));return enfocus.core.at.call(null,document.querySelector(dommy.core.selector.call(null,foundation.rendering.css_id.call(null,parent_id))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",3798183098)], null),enfocus.core.content.call(null,foundation.templates.datagrid_table.call(null,model,val)));
}));
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null),(function (renderer,p__322766,input_queue,parent_id,id){var vec__322767 = p__322766;var _ = cljs.core.nth.call(null,vec__322767,0,null);var path = cljs.core.nth.call(null,vec__322767,1,null);var ___$1 = cljs.core.nth.call(null,vec__322767,2,null);var ___$2 = cljs.core.nth.call(null,vec__322767,3,null);var chart = foundation.chart.highchart.call(null);return foundation.app.render.set_data_BANG_.call(null,renderer,path,chart);
}));
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null),(function (renderer,p__322768,input_queue,parent_id,id){var vec__322769 = p__322768;var _ = cljs.core.nth.call(null,vec__322769,0,null);var path = cljs.core.nth.call(null,vec__322769,1,null);var ___$1 = cljs.core.nth.call(null,vec__322769,2,null);var val = cljs.core.nth.call(null,vec__322769,3,null);var chart = foundation.app.render.get_data.call(null,renderer,path);var start_time = (new Date(new cljs.core.Keyword(null,"start-time","start-time",3689550026).cljs$core$IFn$_invoke$arity$1(val))).getTime();var seq__322770_322774 = cljs.core.seq.call(null,chart.series);var chunk__322771_322775 = null;var count__322772_322776 = 0;var i__322773_322777 = 0;while(true){
if((i__322773_322777 < count__322772_322776))
{var series_322778 = cljs.core._nth.call(null,chunk__322771_322775,i__322773_322777);series_322778.remove();
{
var G__322779 = seq__322770_322774;
var G__322780 = chunk__322771_322775;
var G__322781 = count__322772_322776;
var G__322782 = (i__322773_322777 + 1);
seq__322770_322774 = G__322779;
chunk__322771_322775 = G__322780;
count__322772_322776 = G__322781;
i__322773_322777 = G__322782;
continue;
}
} else
{var temp__4092__auto___322783 = cljs.core.seq.call(null,seq__322770_322774);if(temp__4092__auto___322783)
{var seq__322770_322784__$1 = temp__4092__auto___322783;if(cljs.core.chunked_seq_QMARK_.call(null,seq__322770_322784__$1))
{var c__14549__auto___322785 = cljs.core.chunk_first.call(null,seq__322770_322784__$1);{
var G__322786 = cljs.core.chunk_rest.call(null,seq__322770_322784__$1);
var G__322787 = c__14549__auto___322785;
var G__322788 = cljs.core.count.call(null,c__14549__auto___322785);
var G__322789 = 0;
seq__322770_322774 = G__322786;
chunk__322771_322775 = G__322787;
count__322772_322776 = G__322788;
i__322773_322777 = G__322789;
continue;
}
} else
{var series_322790 = cljs.core.first.call(null,seq__322770_322784__$1);series_322790.remove();
{
var G__322791 = cljs.core.next.call(null,seq__322770_322784__$1);
var G__322792 = null;
var G__322793 = 0;
var G__322794 = 0;
seq__322770_322774 = G__322791;
chunk__322771_322775 = G__322792;
count__322772_322776 = G__322793;
i__322773_322777 = G__322794;
continue;
}
}
} else
{}
}
break;
}
return chart.addSeries(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.Keyword(null,"stats","stats",1123661841).cljs$core$IFn$_invoke$arity$1(val),new cljs.core.Keyword(null,"pointInterval","pointInterval",1241580007),(3600 * 1000),new cljs.core.Keyword(null,"pointStart","pointStart",2269080612),start_time], null)));
}));

//# sourceMappingURL=rendering.js.map