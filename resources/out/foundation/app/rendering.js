// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.app.rendering');
goog.require('cljs.core');
goog.require('foundation.app');
goog.require('foundation.app.chart');
goog.require('foundation.app.render');
goog.require('cljs.core.async');
goog.require('clojure.zip');
goog.require('foundation.app');
goog.require('enfocus.events');
goog.require('foundation.app.message');
goog.require('foundation.app.models');
goog.require('foundation.app.render');
goog.require('enfocus.events');
goog.require('clojure.zip');
goog.require('enfocus.core');
goog.require('dommy.core');
goog.require('foundation.app.xhr');
goog.require('enfocus.core');
goog.require('foundation.app.util');
goog.require('foundation.app.chart');
goog.require('clojure.set');
goog.require('foundation.app.templates');
goog.require('clojure.string');
goog.require('foundation.app');
goog.require('foundation.app.templates');
goog.require('clojure.string');
goog.require('foundation.app.behavior');
goog.require('cljs.core.match');
goog.require('clojure.browser.repl');
goog.require('clojure.set');
goog.require('foundation.app.message');
goog.require('foundation.app.chart');
goog.require('foundation.app.models');
goog.require('cljs.core.match');
goog.require('cljs.core.async');
goog.require('foundation.app.xhr');
goog.require('foundation.app.util');
goog.require('foundation.app.render');
goog.require('foundation.app.behavior');
goog.require('dommy.core');
cljs.core.enable_console_print_BANG_.call(null);
foundation.app.rendering.css_id = (function css_id(id){return [cljs.core.str("#"),cljs.core.str(id)].join('');
});
cljs.core._add_method.call(null,foundation.app.render.node_create,cljs.core.PersistentVector.EMPTY,(function (renderer,p__37753,input_queue,parent_id,id){var vec__37754 = p__37753;var _ = cljs.core.nth.call(null,vec__37754,0,null);var path = cljs.core.nth.call(null,vec__37754,1,null);var ___$1 = cljs.core.nth.call(null,vec__37754,2,null);var val = cljs.core.nth.call(null,vec__37754,3,null);return enfocus.core.at.call(null,document,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",1016933652)], null),enfocus.core.append.call(null,foundation.app.templates.twitter_power.call(null,id)));
}));
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null),(function (renderer,delta,input_queue,parent_id,id){return enfocus.core.at.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.app.rendering.css_id.call(null,parent_id)], null),enfocus.core.append.call(null,foundation.app.templates.dashboard.call(null,id)));
}));
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null),(function (renderer,delta,input_queue,parent_id,id){return enfocus.core.at.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.app.rendering.css_id.call(null,parent_id)], null),enfocus.core.append.call(null,foundation.app.templates.datagrid.call(null,id,cljs.core.PersistentVector.EMPTY)));
}));
cljs.core._add_method.call(null,foundation.app.render.node_create,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null),(function (renderer,p__37755,input_queue,parent_id,id){var vec__37756 = p__37755;var _ = cljs.core.nth.call(null,vec__37756,0,null);var path = cljs.core.nth.call(null,vec__37756,1,null);var ___$1 = cljs.core.nth.call(null,vec__37756,2,null);var ___$2 = cljs.core.nth.call(null,vec__37756,3,null);var chart = foundation.app.chart.highchart.call(null);return foundation.app.render.set_data_BANG_.call(null,renderer,path,chart);
}));
cljs.core._add_method.call(null,foundation.app.render.node_update,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null),(function (renderer,p__37757,input_queue,parent_id,id){var vec__37758 = p__37757;var _ = cljs.core.nth.call(null,vec__37758,0,null);var path = cljs.core.nth.call(null,vec__37758,1,null);var ___$1 = cljs.core.nth.call(null,vec__37758,2,null);var val = cljs.core.nth.call(null,vec__37758,3,null);var chart = foundation.app.render.get_data.call(null,renderer,path);return cljs.core.println.call(null,path,val);
}));

//# sourceMappingURL=rendering.js.map