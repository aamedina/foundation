// Compiled by ClojureScript 0.0-2120
goog.provide('foundation.test');
goog.require('cljs.core');
goog.require('foundation.app.router');
goog.require('foundation.test.routes');
goog.require('foundation.app');
goog.require('foundation.test.routes');
goog.require('foundation.app.router');
goog.require('foundation.test.services');
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
foundation.test._main = (function _main(){var router = foundation.app.router.router.call(null,foundation.test.routes.app_routes);return foundation.app.router.navigate_BANG_.call(null,router,document.location.href,new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"get","get",1014006472));
});
goog.exportSymbol('foundation.test._main', foundation.test._main);

//# sourceMappingURL=test.js.map