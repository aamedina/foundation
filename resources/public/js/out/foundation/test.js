// Compiled by ClojureScript 0.0-2120
goog.provide('foundation.test');
goog.require('cljs.core');
goog.require('foundation.app.util');
goog.require('foundation.app.router');
goog.require('foundation.test.routes');
goog.require('foundation.app');
goog.require('foundation.test.routes');
goog.require('foundation.test.services');
goog.require('foundation.app.util');
goog.require('clojure.string');
goog.require('foundation.app');
goog.require('clojure.string');
goog.require('foundation.test.services');
goog.require('clojure.browser.repl');
goog.require('foundation.test.routes');
goog.require('foundation.app.router');
cljs.core.enable_console_print_BANG_.call(null);
foundation.test.reset = (function reset(){return location.reload(true);
});
foundation.test.app_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
foundation.test._main = (function _main(){var _STAR_routes_STAR_40871 = foundation.app.router._STAR_routes_STAR_;try{foundation.app.router._STAR_routes_STAR_ = foundation.test.routes.app;
return foundation.app.router.navigate_BANG_.call(null,document.location.href,new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"get","get",1014006472));
}finally {foundation.app.router._STAR_routes_STAR_ = _STAR_routes_STAR_40871;
}});
goog.exportSymbol('foundation.test._main', foundation.test._main);

//# sourceMappingURL=test.js.map