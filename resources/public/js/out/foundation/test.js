// Compiled by ClojureScript 0.0-2120
goog.provide('foundation.test');
goog.require('cljs.core');
goog.require('foundation.test.routes');
goog.require('foundation.test.routes');
goog.require('foundation.test.routes');
goog.require('foundation.app');
goog.require('foundation.app');
goog.require('clojure.browser.repl');
cljs.core.enable_console_print_BANG_.call(null);
foundation.test.reset = (function reset(){return location.reload(true);
});
foundation.test.app_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
foundation.test._main = (function _main(){return foundation.test.routes.app.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"uri","uri",1014020318),"/",new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"get","get",1014006472)], null));
});
goog.exportSymbol('foundation.test._main', foundation.test._main);

//# sourceMappingURL=test.js.map