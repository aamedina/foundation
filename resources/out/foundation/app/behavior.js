// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.app.behavior');
goog.require('cljs.core');
goog.require('foundation.app');
goog.require('cljs.core.async');
goog.require('clojure.zip');
goog.require('foundation.app');
goog.require('enfocus.events');
goog.require('foundation.app.message');
goog.require('foundation.app.models');
goog.require('enfocus.events');
goog.require('clojure.zip');
goog.require('enfocus.core');
goog.require('dommy.core');
goog.require('foundation.app.xhr');
goog.require('enfocus.core');
goog.require('foundation.app.rendering');
goog.require('foundation.app.util');
goog.require('clojure.set');
goog.require('foundation.app.templates');
goog.require('clojure.string');
goog.require('foundation.app');
goog.require('foundation.app.templates');
goog.require('clojure.string');
goog.require('cljs.core.match');
goog.require('clojure.browser.repl');
goog.require('clojure.set');
goog.require('foundation.app.message');
goog.require('foundation.app.models');
goog.require('cljs.core.match');
goog.require('cljs.core.async');
goog.require('foundation.app.xhr');
goog.require('foundation.app.util');
goog.require('foundation.app.rendering');
goog.require('dommy.core');
cljs.core._add_method.call(null,foundation.app.transform,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inc","inc",1014008656),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"my-counter","my-counter",3484995149)], null)], null),(function (state,_){return cljs.core.fnil.call(null,cljs.core.inc,0).call(null,state);
}));
cljs.core._add_method.call(null,foundation.app.transform,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"swap","swap",1017447685),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"**","**",1013905586)], null)], null),(function (_,message){return new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(message);
}));
cljs.core._add_method.call(null,foundation.app.transform,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-points","add-points",1557691137),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"my-counter","my-counter",3484995149)], null)], null),(function (old_value,message){var temp__4096__auto__ = (new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(message) | 0);if(cljs.core.truth_(temp__4096__auto__))
{var points = temp__4096__auto__;return (old_value + points);
} else
{return old_value;
}
}));
cljs.core._add_method.call(null,foundation.app.derives,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"other-counters","other-counters",3756872582),new cljs.core.Keyword(null,"*","*",1013904284)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"my-counter","my-counter",3484995149)], null)], true),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total-count","total-count",3469652152)], null),new cljs.core.Keyword(null,"vals","vals",1017516260)], null),(function (state,message,nums){return cljs.core.reduce.call(null,cljs.core._PLUS_,nums);
}));
cljs.core._add_method.call(null,foundation.app.derives,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"other-counters","other-counters",3756872582),new cljs.core.Keyword(null,"*","*",1013904284)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"my-counter","my-counter",3484995149)], null)], true),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"max-count","max-count",3628163800)], null),new cljs.core.Keyword(null,"vals","vals",1017516260)], null),(function (old_value,message,nums){return cljs.core.apply.call(null,cljs.core.max,(function (){var or__7730__auto__ = old_value;if(cljs.core.truth_(or__7730__auto__))
{return or__7730__auto__;
} else
{return 0;
}
})(),nums);
}));
cljs.core._add_method.call(null,foundation.app.derives,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"my-counter","my-counter",3484995149)], null),new cljs.core.Keyword(null,"nums","nums",1017297183),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"other-counters","other-counters",3756872582),new cljs.core.Keyword(null,"*","*",1013904284)], null),new cljs.core.Keyword(null,"nums","nums",1017297183),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total-count","total-count",3469652152)], null),new cljs.core.Keyword(null,"total","total",1124454070)], true, false),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"average-count","average-count",3652414673)], null),new cljs.core.Keyword(null,"map","map",1014012110)], null),(function (old_value,message,p__35124){var map__35125 = p__35124;var map__35125__$1 = ((cljs.core.seq_QMARK_.call(null,map__35125))?cljs.core.apply.call(null,cljs.core.hash_map,map__35125):map__35125);var m = map__35125__$1;var total = cljs.core.get.call(null,map__35125__$1,new cljs.core.Keyword(null,"total","total",1124454070));var nums = cljs.core.get.call(null,map__35125__$1,new cljs.core.Keyword(null,"nums","nums",1017297183));return (total / cljs.core.count.call(null,nums));
}));
cljs.core._add_method.call(null,foundation.app.route_effect,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"my-counter","my-counter",3484995149)], null)], true),new cljs.core.Keyword(null,"single-val","single-val",1926385550)], null),(function (message,count){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"swap","swap",1017447685),foundation.app.message.path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"other-counters","other-counters",3756872582)], null),new cljs.core.Keyword(null,"value","value",1125876963),count], true, false)], null);
}));

//# sourceMappingURL=behavior.js.map