// Compiled by ClojureScript 0.0-2120
goog.provide('foundation.test.behavior');
goog.require('cljs.core');
goog.require('foundation.app');
goog.require('foundation.app');
goog.require('foundation.app');
cljs.core._add_method.call(null,foundation.app.transform,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init","init",1017141378),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null)], null),(function (state,message){return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"resource","resource",672839552),new cljs.core.Keyword(null,"resource","resource",672839552).cljs$core$IFn$_invoke$arity$1(message)], null);
}));
cljs.core._add_method.call(null,foundation.app.transform,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init","init",1017141378),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null)], null),(function (state,message){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"model","model",1117974171),new cljs.core.Keyword(null,"model","model",1117974171).cljs$core$IFn$_invoke$arity$1(message),new cljs.core.Keyword(null,"stats","stats",1123661841),new cljs.core.Keyword(null,"stats","stats",1123661841).cljs$core$IFn$_invoke$arity$1(message)], null);
}));
cljs.core._add_method.call(null,foundation.app.transform,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load","load",1017231448),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null)], null),(function (state,message){return new cljs.core.Keyword(null,"collection","collection",3567559184).cljs$core$IFn$_invoke$arity$1(message);
}));
cljs.core._add_method.call(null,foundation.app.transform,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"create","create",3956577390),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null)], null),(function (state,message){return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.fnil.call(null,cljs.core.identity,cljs.core.PersistentArrayMap.EMPTY).call(null,new cljs.core.Keyword(null,"model","model",1117974171).cljs$core$IFn$_invoke$arity$1(message))], null),state);
}));
cljs.core._add_method.call(null,foundation.app.transform,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"save","save",1017427183),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null)], null),(function (state,message){return cljs.core.into.call(null,cljs.core.conj.call(null,cljs.core.subvec.call(null,state,0,new cljs.core.Keyword(null,"nth","nth",1014013652).cljs$core$IFn$_invoke$arity$1(message)),new cljs.core.Keyword(null,"model","model",1117974171).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.subvec.call(null,state,(new cljs.core.Keyword(null,"nth","nth",1014013652).cljs$core$IFn$_invoke$arity$1(message) + 1),cljs.core.count.call(null,state)));
}));
cljs.core._add_method.call(null,foundation.app.transform,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete","delete",3973413149),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null)], null),(function (state,message){return cljs.core.into.call(null,cljs.core.subvec.call(null,state,0,new cljs.core.Keyword(null,"nth","nth",1014013652).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.subvec.call(null,state,(new cljs.core.Keyword(null,"nth","nth",1014013652).cljs$core$IFn$_invoke$arity$1(message) + 1),cljs.core.count.call(null,state)));
}));
foundation.test.behavior.round = (function round(n,places){var p = Math.pow.call(null,10,places);return (Math.round.call(null,(p * n)) / p);
});
foundation.test.behavior.total_stats = (function total_stats(stats){return cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.first,tmpl.dashboard_metrics),cljs.core.map.call(null,(function (ms){return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.reduce.call(null,cljs.core.into,cljs.core.map.call(null,stats,cljs.core.map.call(null,cljs.core.keyword,cljs.core.map.call(null,(function (p1__408974_SHARP_){return str.replace.call(null,p1__408974_SHARP_,/_/,"-");
}),ms)))));
}),cljs.core.map.call(null,models.metrics.call(null,new cljs.core.Keyword(null,"default","default",2558708147)),cljs.core.map.call(null,cljs.core.first,tmpl.dashboard_metrics))));
});
foundation.test.behavior.js_number = (function js_number(n){if(cljs.core.truth_((function (){var or__8223__auto__ = isNaN(n);if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return cljs.core._EQ_.call(null,n,Infinity);
}
})()))
{return 0;
} else
{return foundation.test.behavior.round.call(null,n,2);
}
});
foundation.test.behavior.graph_stats = (function graph_stats(stats,metric,metric_type){var impressions = cljs.core.map.call(null,stats,cljs.core.map.call(null,cljs.core.keyword,cljs.core.map.call(null,(function (p1__408975_SHARP_){return str.replace.call(null,p1__408975_SHARP_,/_/,"-");
}),cljs.core.get.call(null,models.metrics.call(null,new cljs.core.Keyword(null,"default","default",2558708147)),"Impressions"))));return cljs.core.vec.call(null,(function (p1__408977_SHARP_){var G__408979 = metric_type;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"rate","rate",1017397330),G__408979))
{return cljs.core.vec.call(null,cljs.core.map.call(null,foundation.test.behavior.js_number,cljs.core.map.call(null,cljs.core._SLASH_,cljs.core.first.call(null,impressions),cljs.core.apply.call(null,cljs.core.map,cljs.core._PLUS_,p1__408977_SHARP_))));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cpa","cpa",1014002950),G__408979))
{var billed = cljs.core.map.call(null,cljs.core._SLASH_,new cljs.core.Keyword(null,"estimated-charge-local-micro","estimated-charge-local-micro",2985516268).cljs$core$IFn$_invoke$arity$1(stats),cljs.core.repeat.call(null,1000000.0));return cljs.core.vec.call(null,cljs.core.map.call(null,foundation.test.behavior.js_number,cljs.core.map.call(null,cljs.core._SLASH_,billed,cljs.core.apply.call(null,cljs.core.map,cljs.core._PLUS_,p1__408977_SHARP_))));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"total","total",1124454070),G__408979))
{return cljs.core.apply.call(null,cljs.core.map,cljs.core._PLUS_,p1__408977_SHARP_);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.apply.call(null,cljs.core.map,cljs.core._PLUS_,p1__408977_SHARP_);
} else
{return null;
}
}
}
}
}).call(null,cljs.core.map.call(null,stats,cljs.core.map.call(null,cljs.core.keyword,cljs.core.map.call(null,(function (p1__408976_SHARP_){return str.replace.call(null,p1__408976_SHARP_,/_/,"-");
}),cljs.core.get.call(null,models.metrics.call(null,new cljs.core.Keyword(null,"default","default",2558708147)),metric))))));
});
foundation.test.behavior.cpa_stats = (function cpa_stats(stats,billed){return cljs.core.zipmap.call(null,cljs.core.keys.call(null,stats),(function (p1__408980_SHARP_){return cljs.core.map.call(null,foundation.test.behavior.round,p1__408980_SHARP_,cljs.core.repeat.call(null,2));
}).call(null,cljs.core.map.call(null,cljs.core._SLASH_,cljs.core.repeat.call(null,(billed / 1000000.0)),cljs.core.vals.call(null,stats))));
});
foundation.test.behavior.rate_stats = (function rate_stats(stats){return cljs.core.zipmap.call(null,cljs.core.keys.call(null,stats),(function (p1__408981_SHARP_){return cljs.core.map.call(null,foundation.test.behavior.round,p1__408981_SHARP_,cljs.core.repeat.call(null,2));
}).call(null,cljs.core.map.call(null,cljs.core._SLASH_,cljs.core.repeat.call(null,cljs.core.get.call(null,stats,"Impressions")),cljs.core.vals.call(null,stats))));
});
cljs.core._add_method.call(null,foundation.app.derives,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null)], true),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null),new cljs.core.Keyword(null,"default","default",2558708147)], null),(function (state,message,input){var dashboard = cljs.core.get.call(null,input,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null));var datagrid = cljs.core.get.call(null,input,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null));return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"resource","resource",672839552),new cljs.core.Keyword(null,"resource","resource",672839552).cljs$core$IFn$_invoke$arity$1(datagrid),new cljs.core.Keyword(null,"model","model",1117974171),new cljs.core.Keyword(null,"model","model",1117974171).cljs$core$IFn$_invoke$arity$1(dashboard),new cljs.core.Keyword(null,"stats","stats",1123661841),new cljs.core.Keyword(null,"stats","stats",1123661841).cljs$core$IFn$_invoke$arity$1(dashboard),new cljs.core.Keyword(null,"start-time","start-time",3689550026),new cljs.core.Keyword(null,"start-time","start-time",3689550026).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"stats","stats",1123661841).cljs$core$IFn$_invoke$arity$1(dashboard)),new cljs.core.Keyword(null,"end-time","end-time",2693279729),new cljs.core.Keyword(null,"end-time","end-time",2693279729).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"stats","stats",1123661841).cljs$core$IFn$_invoke$arity$1(dashboard))], null);
}));

//# sourceMappingURL=behavior.js.map