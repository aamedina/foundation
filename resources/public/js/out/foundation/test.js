// Compiled by ClojureScript 0.0-2120
goog.provide('foundation.test');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('foundation.test.routes');
goog.require('foundation.test.rendering');
goog.require('foundation.app');
goog.require('foundation.test.routes');
goog.require('foundation.app.message');
goog.require('foundation.test.rendering');
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
foundation.test._main = (function _main(){var app = foundation.app.build.call(null,new cljs.core.Keyword(null,"root-id","root-id",2393957720),"content",new cljs.core.Keyword(null,"routes","routes",4383738556),foundation.test.routes.app_routes);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"init","init",1017141378),foundation.app.message.path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null)], true, false));
cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"add","add",1014000659),foundation.app.message.path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null)], true, false));
cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(app),new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"delete","delete",3973413149),foundation.app.message.path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null)], true, false));
return app;
});
goog.exportSymbol('foundation.test._main', foundation.test._main);

//# sourceMappingURL=test.js.map