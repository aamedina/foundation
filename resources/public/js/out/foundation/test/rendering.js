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
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),cljs.core.PersistentVector.EMPTY], null),(function (renderer,p__185249,pid,id){var vec__185250 = p__185249;var op = cljs.core.nth.call(null,vec__185250,0,null);var path = cljs.core.nth.call(null,vec__185250,1,null);var old = cljs.core.nth.call(null,vec__185250,2,null);var new$ = cljs.core.nth.call(null,vec__185250,3,null);return foundation.test.templates.twitter_power.call(null,id);
}));
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178)], null)], null),(function (renderer,p__185251,pid,id){var vec__185252 = p__185251;var op = cljs.core.nth.call(null,vec__185252,0,null);var path = cljs.core.nth.call(null,vec__185252,1,null);var old = cljs.core.nth.call(null,vec__185252,2,null);var new$ = cljs.core.nth.call(null,vec__185252,3,null);return foundation.test.components.datagrid.datagrid.call(null,id,new$);
}));
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null)], null),(function (renderer,p__185253,pid,id){var vec__185254 = p__185253;var op = cljs.core.nth.call(null,vec__185254,0,null);var path = cljs.core.nth.call(null,vec__185254,1,null);var old = cljs.core.nth.call(null,vec__185254,2,null);var new$ = cljs.core.nth.call(null,vec__185254,3,null);return null;
}));
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-update","node-update",597066342),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null)], null),(function (renderer,p__185255,pid,id){var vec__185256 = p__185255;var op = cljs.core.nth.call(null,vec__185256,0,null);var path = cljs.core.nth.call(null,vec__185256,1,null);var old = cljs.core.nth.call(null,vec__185256,2,null);var new$ = cljs.core.nth.call(null,vec__185256,3,null);return null;
}));
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",4261010950)], null)], null),(function (renderer,p__185257,pid,id){var vec__185258 = p__185257;var op = cljs.core.nth.call(null,vec__185258,0,null);var path = cljs.core.nth.call(null,vec__185258,1,null);var old = cljs.core.nth.call(null,vec__185258,2,null);var new$ = cljs.core.nth.call(null,vec__185258,3,null);return foundation.test.components.dashboard.dashboard.call(null,id,new$);
}));
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1108527952)], null)], null),(function (renderer,p__185259,pid,id){var vec__185260 = p__185259;var op = cljs.core.nth.call(null,vec__185260,0,null);var path = cljs.core.nth.call(null,vec__185260,1,null);var old = cljs.core.nth.call(null,vec__185260,2,null);var new$ = cljs.core.nth.call(null,vec__185260,3,null);foundation.app.render._set_data.call(null,renderer,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"chart","chart",1108527952)),foundation.test.components.chart.highchart.call(null));
return null;
}));

//# sourceMappingURL=rendering.js.map