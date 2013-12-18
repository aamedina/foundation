// Compiled by ClojureScript 0.0-2120
goog.provide('foundation.test');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('foundation.test.routes');
goog.require('foundation.app');
goog.require('foundation.test.routes');
goog.require('foundation.app.message');
goog.require('foundation.test.services');
goog.require('foundation.test.behavior');
goog.require('clojure.string');
goog.require('foundation.app');
goog.require('clojure.string');
goog.require('foundation.test.behavior');
goog.require('foundation.test.services');
goog.require('clojure.browser.repl');
goog.require('foundation.app.message');
goog.require('foundation.test.routes');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_.call(null);
foundation.test.reset = (function reset(){return location.reload(true);
});
foundation.test._main = (function _main(){var app = foundation.app.build.call(null,new cljs.core.Keyword(null,"root-id","root-id",2393957720),"content",new cljs.core.Keyword(null,"routes","routes",4383738556),foundation.test.routes.app_routes);return app;
});
goog.exportSymbol('foundation.test._main', foundation.test._main);

//# sourceMappingURL=test.js.map