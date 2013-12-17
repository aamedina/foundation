// Compiled by ClojureScript 0.0-2120
goog.provide('foundation.test');
goog.require('cljs.core');
goog.require('secretary.core');
goog.require('secretary.core');
goog.require('foundation.app');
goog.require('foundation.app');
goog.require('clojure.browser.repl');
cljs.core.enable_console_print_BANG_.call(null);
foundation.test.reset = (function reset(){return location.reload(true);
});
foundation.test.app_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cljs.core.swap_BANG_.call(null,secretary.core._STAR_routes_STAR_,cljs.core.assoc,"/users/:id",(function (params__20281__auto__){var map__25810 = params__20281__auto__;var map__25810__$1 = ((cljs.core.seq_QMARK_.call(null,map__25810))?cljs.core.apply.call(null,cljs.core.hash_map,map__25810):map__25810);var id = cljs.core.get.call(null,map__25810__$1,new cljs.core.Keyword(null,"id","id",1013907597));return cljs.core.println.call(null,[cljs.core.str("User: "),cljs.core.str(id)].join(''));
}));
foundation.test._main = (function _main(){return secretary.core.dispatch_BANG_.call(null,"/users/adrian");
});
goog.exportSymbol('foundation.test._main', foundation.test._main);

//# sourceMappingURL=test.js.map