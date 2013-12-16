// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.behavior');
goog.require('cljs.core');
goog.require('foundation.app');
goog.require('cljs.core.async');
goog.require('clojure.zip');
goog.require('foundation.app');
goog.require('enfocus.events');
goog.require('foundation.app.message');
goog.require('enfocus.events');
goog.require('clojure.zip');
goog.require('enfocus.core');
goog.require('dommy.core');
goog.require('foundation.app.xhr');
goog.require('enfocus.core');
goog.require('foundation.app.util');
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
goog.require('dommy.core');
goog.require('foundation.models');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core._add_method.call(null,foundation.app.transform,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init","init",1017141378),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"**","**",1013905586)], null)], null),(function (state,message){return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,foundation.app.transform,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load","load",1017231448),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null)], null),(function (state,message){var _STAR_account_STAR_71688 = foundation.models._STAR_account_STAR_;try{foundation.models._STAR_account_STAR_ = new cljs.core.Keyword(null,"account","account",4131552671).cljs$core$IFn$_invoke$arity$1(message);
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"model","model",1117974171),new cljs.core.Keyword(null,"model","model",1117974171).cljs$core$IFn$_invoke$arity$1(message),new cljs.core.Keyword(null,"account","account",4131552671),new cljs.core.Keyword(null,"account","account",4131552671).cljs$core$IFn$_invoke$arity$1(message),new cljs.core.Keyword(null,"stats-model","stats-model",651400173),new cljs.core.Keyword(null,"stats-model","stats-model",651400173).cljs$core$IFn$_invoke$arity$1(message),new cljs.core.Keyword(null,"start-time","start-time",3689550026),foundation.models.start_time.call(null,new cljs.core.Keyword(null,"model","model",1117974171).cljs$core$IFn$_invoke$arity$1(message)),new cljs.core.Keyword(null,"metrics","metrics",1969730613),new cljs.core.Keyword(null,"metrics","metrics",1969730613).cljs$core$IFn$_invoke$arity$1(message),new cljs.core.Keyword(null,"granularity","granularity",2833735872),new cljs.core.Keyword(null,"granularity","granularity",2833735872).cljs$core$IFn$_invoke$arity$1(message),new cljs.core.Keyword(null,"end-time","end-time",2693279729),foundation.models.end_time.call(null,new cljs.core.Keyword(null,"model","model",1117974171).cljs$core$IFn$_invoke$arity$1(message))], null);
}finally {foundation.models._STAR_account_STAR_ = _STAR_account_STAR_71688;
}}));
cljs.core._add_method.call(null,foundation.app.transform,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load","load",1017231448),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null)], null),(function (state,message){return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"collection","collection",3567559184),new cljs.core.Keyword(null,"collection","collection",3567559184).cljs$core$IFn$_invoke$arity$1(message),new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"resource","resource",672839552),new cljs.core.Keyword(null,"resource","resource",672839552).cljs$core$IFn$_invoke$arity$1(message),new cljs.core.Keyword(null,"account","account",4131552671),new cljs.core.Keyword(null,"account","account",4131552671).cljs$core$IFn$_invoke$arity$1(message)], null);
}));
foundation.behavior.round = (function round(n,places){var p = Math.pow.call(null,10,places);return (Math.round.call(null,(p * n)) / p);
});
foundation.behavior.total_stats = (function total_stats(stats){return cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.first,foundation.templates.dashboard_metrics),cljs.core.map.call(null,(function (ms){return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.reduce.call(null,cljs.core.into,cljs.core.map.call(null,stats,cljs.core.map.call(null,cljs.core.keyword,cljs.core.map.call(null,(function (p1__71689_SHARP_){return clojure.string.replace.call(null,p1__71689_SHARP_,/_/,"-");
}),ms)))));
}),cljs.core.map.call(null,foundation.models.metrics.call(null,new cljs.core.Keyword(null,"default","default",2558708147)),cljs.core.map.call(null,cljs.core.first,foundation.templates.dashboard_metrics))));
});
foundation.behavior.graph_stats = (function graph_stats(stats,metric,metric_type){var impressions = cljs.core.map.call(null,stats,cljs.core.map.call(null,cljs.core.keyword,cljs.core.map.call(null,(function (p1__71690_SHARP_){return clojure.string.replace.call(null,p1__71690_SHARP_,/_/,"-");
}),cljs.core.get.call(null,foundation.models.metrics.call(null,new cljs.core.Keyword(null,"default","default",2558708147)),"Impressions"))));return cljs.core.vec.call(null,(function (p1__71692_SHARP_){var G__71694 = metric_type;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"rate","rate",1017397330),G__71694))
{return cljs.core.vec.call(null,cljs.core.map.call(null,(function (n){if(cljs.core.truth_((function (){var or__13823__auto__ = isNaN(n);if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return cljs.core._EQ_.call(null,n,Infinity);
}
})()))
{return 0;
} else
{return foundation.behavior.round.call(null,n,2);
}
}),cljs.core.map.call(null,cljs.core._SLASH_,cljs.core.first.call(null,impressions),cljs.core.apply.call(null,cljs.core.map,cljs.core._PLUS_,p1__71692_SHARP_))));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cpa","cpa",1014002950),G__71694))
{var billed = cljs.core.map.call(null,cljs.core._SLASH_,new cljs.core.Keyword(null,"estimated-charge-local-micro","estimated-charge-local-micro",2985516268).cljs$core$IFn$_invoke$arity$1(stats),cljs.core.repeat.call(null,1000000.0));return cljs.core.vec.call(null,cljs.core.map.call(null,(function (n){if(cljs.core.truth_((function (){var or__13823__auto__ = isNaN(n);if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return cljs.core._EQ_.call(null,n,Infinity);
}
})()))
{return 0;
} else
{return foundation.behavior.round.call(null,n,2);
}
}),cljs.core.map.call(null,cljs.core._SLASH_,billed,cljs.core.apply.call(null,cljs.core.map,cljs.core._PLUS_,p1__71692_SHARP_))));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"total","total",1124454070),G__71694))
{return cljs.core.apply.call(null,cljs.core.map,cljs.core._PLUS_,p1__71692_SHARP_);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.apply.call(null,cljs.core.map,cljs.core._PLUS_,p1__71692_SHARP_);
} else
{return null;
}
}
}
}
}).call(null,cljs.core.map.call(null,stats,cljs.core.map.call(null,cljs.core.keyword,cljs.core.map.call(null,(function (p1__71691_SHARP_){return clojure.string.replace.call(null,p1__71691_SHARP_,/_/,"-");
}),cljs.core.get.call(null,foundation.models.metrics.call(null,new cljs.core.Keyword(null,"default","default",2558708147)),metric))))));
});
foundation.behavior.cpa_stats = (function cpa_stats(stats,billed){return cljs.core.zipmap.call(null,cljs.core.keys.call(null,stats),(function (p1__71695_SHARP_){return cljs.core.map.call(null,foundation.behavior.round,p1__71695_SHARP_,cljs.core.repeat.call(null,2));
}).call(null,cljs.core.map.call(null,cljs.core._SLASH_,cljs.core.repeat.call(null,(billed / 1000000.0)),cljs.core.vals.call(null,stats))));
});
foundation.behavior.rate_stats = (function rate_stats(stats){return cljs.core.zipmap.call(null,cljs.core.keys.call(null,stats),(function (p1__71696_SHARP_){return cljs.core.map.call(null,foundation.behavior.round,p1__71696_SHARP_,cljs.core.repeat.call(null,2));
}).call(null,cljs.core.map.call(null,cljs.core._SLASH_,cljs.core.repeat.call(null,cljs.core.get.call(null,stats,"Impressions")),cljs.core.vals.call(null,stats))));
});
cljs.core._add_method.call(null,foundation.app.transform,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stats","stats",1123661841),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null)], null),(function (state,message){if(cljs.core.truth_(new cljs.core.Keyword(null,"stats","stats",1123661841).cljs$core$IFn$_invoke$arity$1(message)))
{return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"stats","stats",1123661841),new cljs.core.Keyword(null,"stats","stats",1123661841).cljs$core$IFn$_invoke$arity$1(message));
} else
{if(cljs.core.truth_(new cljs.core.Keyword(null,"metric","metric",4231325986).cljs$core$IFn$_invoke$arity$1(message)))
{return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"stat","stat",1017444806),foundation.behavior.graph_stats.call(null,new cljs.core.Keyword(null,"stats","stats",1123661841).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"metric","metric",4231325986).cljs$core$IFn$_invoke$arity$1(message),new cljs.core.Keyword(null,"metric-type","metric-type",3525295273).cljs$core$IFn$_invoke$arity$1(message)));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return state;
} else
{return null;
}
}
}
}));
cljs.core._add_method.call(null,foundation.app.transform,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stats","stats",1123661841),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null)], null),(function (state,message){var total_stats = foundation.behavior.total_stats.call(null,new cljs.core.Keyword(null,"stats","stats",1123661841).cljs$core$IFn$_invoke$arity$1(message));var rate_stats = foundation.behavior.rate_stats.call(null,total_stats);var billed_stats = cljs.core.first.call(null,new cljs.core.Keyword(null,"estimated-charge-local-micro","estimated-charge-local-micro",2985516268).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"stats","stats",1123661841).cljs$core$IFn$_invoke$arity$1(message)));return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"stats","stats",1123661841),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rate","rate",1017397330),rate_stats,new cljs.core.Keyword(null,"cpa","cpa",1014002950),foundation.behavior.cpa_stats.call(null,total_stats,billed_stats),new cljs.core.Keyword(null,"total","total",1124454070),total_stats], null));
}));
cljs.core._add_method.call(null,foundation.app.derives,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null)], true),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null),new cljs.core.Keyword(null,"vals","vals",1017516260)], null),(function (state,message,input){return cljs.core.select_keys.call(null,cljs.core.reduce.call(null,cljs.core.merge,input),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-time","start-time",3689550026),new cljs.core.Keyword(null,"end-time","end-time",2693279729)], null));
}));
cljs.core._add_method.call(null,foundation.app.transform,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add","add",1014000659),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"**","**",1013905586)], null)], null),(function (state,message){return state;
}));
cljs.core._add_method.call(null,foundation.app.transform,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update","update",4470025275),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"**","**",1013905586)], null)], null),(function (state,message){return state;
}));
cljs.core._add_method.call(null,foundation.app.transform,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove","remove",4374260726),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"**","**",1013905586)], null)], null),(function (state,message){return state;
}));

//# sourceMappingURL=behavior.js.map