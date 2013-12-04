// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.app.tree');
goog.require('cljs.core');
goog.require('clojure.zip');
goog.require('clojure.zip');
foundation.app.tree.inversions = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),new cljs.core.Keyword(null,"node-create","node-create",4378585753),new cljs.core.Keyword(null,"transform-enable","transform-enable",2076092022),new cljs.core.Keyword(null,"transform-disable","transform-disable",2862889209),new cljs.core.Keyword(null,"transform-disable","transform-disable",2862889209),new cljs.core.Keyword(null,"transform-enable","transform-enable",2076092022)], null);
foundation.app.tree.invert = (function invert(deltas){return cljs.core.map.call(null,foundation.app.tree.inversions,cljs.core.reverse.call(null,deltas));
});
foundation.app.tree.app_model = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"deltas","deltas",3973426989),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"t","t",1013904358),0], null);

//# sourceMappingURL=tree.js.map