// Compiled by ClojureScript 0.0-2120
goog.provide('foundation.test.rendering');
goog.require('cljs.core');
goog.require('foundation.app');
goog.require('foundation.test.components.dashboard');
goog.require('foundation.app.render');
goog.require('foundation.test.components.datagrid');
goog.require('foundation.test.components.chart');
goog.require('cljs.core.async');
goog.require('foundation.app');
goog.require('foundation.test.templates');
goog.require('foundation.app.render');
goog.require('foundation.app.ui');
goog.require('dommy.core');
goog.require('foundation.test.components.datagrid');
goog.require('foundation.test.templates');
goog.require('foundation.test.models');
goog.require('foundation.app');
goog.require('foundation.test.components.chart');
goog.require('foundation.test.models');
goog.require('cljs.core.async');
goog.require('foundation.app.ui');
goog.require('foundation.test.components.dashboard');
goog.require('foundation.app.render');
goog.require('dommy.core');
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),cljs.core.PersistentVector.EMPTY], null),(function (renderer,p__122755,pid,id){var vec__122756 = p__122755;var op = cljs.core.nth.call(null,vec__122756,0,null);var path = cljs.core.nth.call(null,vec__122756,1,null);var old = cljs.core.nth.call(null,vec__122756,2,null);var new$ = cljs.core.nth.call(null,vec__122756,3,null);return foundation.test.templates.twitter_power.call(null,id);
}));
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null)], null),(function (renderer,p__122757,pid,id){var vec__122758 = p__122757;var op = cljs.core.nth.call(null,vec__122758,0,null);var path = cljs.core.nth.call(null,vec__122758,1,null);var old = cljs.core.nth.call(null,vec__122758,2,null);var new$ = cljs.core.nth.call(null,vec__122758,3,null);return foundation.test.components.datagrid.datagrid.call(null,id,new$);
}));
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null)], null),(function (renderer,p__122759,pid,id){var vec__122760 = p__122759;var op = cljs.core.nth.call(null,vec__122760,0,null);var path = cljs.core.nth.call(null,vec__122760,1,null);var old = cljs.core.nth.call(null,vec__122760,2,null);var new$ = cljs.core.nth.call(null,vec__122760,3,null);return null;
}));
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-update","node-update",597066342),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null)], null),(function (renderer,p__122761,pid,id){var vec__122762 = p__122761;var op = cljs.core.nth.call(null,vec__122762,0,null);var path = cljs.core.nth.call(null,vec__122762,1,null);var old = cljs.core.nth.call(null,vec__122762,2,null);var new$ = cljs.core.nth.call(null,vec__122762,3,null);return null;
}));
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null)], null),(function (renderer,p__122763,pid,id){var vec__122764 = p__122763;var op = cljs.core.nth.call(null,vec__122764,0,null);var path = cljs.core.nth.call(null,vec__122764,1,null);var old = cljs.core.nth.call(null,vec__122764,2,null);var new$ = cljs.core.nth.call(null,vec__122764,3,null);foundation.app.render._set_data.call(null,renderer,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"chart","chart",1108527952)),foundation.test.components.chart.highchart.call(null));
return foundation.test.components.dashboard.dashboard.call(null,id,new$);
}));

//# sourceMappingURL=rendering.js.map