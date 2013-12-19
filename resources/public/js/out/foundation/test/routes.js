// Compiled by ClojureScript 0.0-2120
goog.provide('foundation.test.routes');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('foundation.app.router');
goog.require('foundation.app.router');
goog.require('foundation.app.models');
goog.require('foundation.app.xhr');
goog.require('foundation.test.models');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('foundation.test.models');
goog.require('foundation.app.models');
goog.require('cljs.core.async');
goog.require('foundation.app.xhr');
goog.require('foundation.app.router');
foundation.test.routes.accounts = foundation.app.router.routes.call(null,foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/accounts"),(function (request__183918__auto__){return foundation.app.router.route;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/accounts/:id"),(function (request__183918__auto__){var id = cljs.core.get_in.call(null,request__183918__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__183918__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return foundation.app.router.route;
})));
foundation.test.routes.campaigns = foundation.app.router.routes.call(null,foundation.app.router.if_route.call(null,foundation.app.router.route_compile.call(null,"/accounts/:account-id:__path-info",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__path-info","__path-info",4484183272),/\/.*/], null)),foundation.app.router.wrap_context.call(null,(function (request__183962__auto__){var account_id = cljs.core.get_in.call(null,request__183962__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)], null),cljs.core.get_in.call(null,request__183962__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"account-id"], null)));return foundation.app.router.routing.call(null,request__183962__auto__,foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/campaigns"),(function (request__183918__auto__){return foundation.app.router.route;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/campaigns/:id"),(function (request__183918__auto__){var id = cljs.core.get_in.call(null,request__183918__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__183918__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return foundation.app.router.route;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"post","post",1017351186),foundation.app.router.route_compile.call(null,"/campaigns/:id"),(function (request__183918__auto__){var id = cljs.core.get_in.call(null,request__183918__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__183918__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return foundation.app.router.route;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"put","put",1014015617),foundation.app.router.route_compile.call(null,"/campaigns/:id"),(function (request__183918__auto__){var id = cljs.core.get_in.call(null,request__183918__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__183918__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return foundation.app.router.route;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"delete","delete",3973413149),foundation.app.router.route_compile.call(null,"/campaigns/:id"),(function (request__183918__auto__){var id = cljs.core.get_in.call(null,request__183918__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__183918__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return foundation.app.router.route;
})));
}))));
foundation.test.routes.line_items = foundation.app.router.routes.call(null,foundation.app.router.if_route.call(null,foundation.app.router.route_compile.call(null,"/accounts/:account-id:__path-info",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__path-info","__path-info",4484183272),/\/.*/], null)),foundation.app.router.wrap_context.call(null,(function (request__183962__auto__){var account_id = cljs.core.get_in.call(null,request__183962__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)], null),cljs.core.get_in.call(null,request__183962__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"account-id"], null)));return foundation.app.router.routing.call(null,request__183962__auto__,foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/line_items"),(function (request__183918__auto__){return foundation.app.router.route;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/line_items/:id"),(function (request__183918__auto__){var id = cljs.core.get_in.call(null,request__183918__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__183918__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return foundation.app.router.route;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"post","post",1017351186),foundation.app.router.route_compile.call(null,"/line_items/:id"),(function (request__183918__auto__){var id = cljs.core.get_in.call(null,request__183918__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__183918__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return foundation.app.router.route;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"put","put",1014015617),foundation.app.router.route_compile.call(null,"/line_items/:id"),(function (request__183918__auto__){var id = cljs.core.get_in.call(null,request__183918__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__183918__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return foundation.app.router.route;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"delete","delete",3973413149),foundation.app.router.route_compile.call(null,"/line_items/:id"),(function (request__183918__auto__){var id = cljs.core.get_in.call(null,request__183918__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__183918__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return foundation.app.router.route;
})));
}))));
foundation.test.routes.promoted_accounts = foundation.app.router.routes.call(null,foundation.app.router.if_route.call(null,foundation.app.router.route_compile.call(null,"/accounts/:account-id:__path-info",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__path-info","__path-info",4484183272),/\/.*/], null)),foundation.app.router.wrap_context.call(null,(function (request__183962__auto__){var account_id = cljs.core.get_in.call(null,request__183962__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)], null),cljs.core.get_in.call(null,request__183962__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"account-id"], null)));return foundation.app.router.routing.call(null,request__183962__auto__,foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/promoted_accounts"),(function (request__183918__auto__){return foundation.app.router.route;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/promoted_accounts/:id"),(function (request__183918__auto__){var id = cljs.core.get_in.call(null,request__183918__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__183918__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return foundation.app.router.route;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"post","post",1017351186),foundation.app.router.route_compile.call(null,"/promoted_accounts/:id"),(function (request__183918__auto__){var id = cljs.core.get_in.call(null,request__183918__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__183918__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return foundation.app.router.route;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"put","put",1014015617),foundation.app.router.route_compile.call(null,"/promoted_accounts/:id"),(function (request__183918__auto__){var id = cljs.core.get_in.call(null,request__183918__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__183918__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return foundation.app.router.route;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"delete","delete",3973413149),foundation.app.router.route_compile.call(null,"/promoted_accounts/:id"),(function (request__183918__auto__){var id = cljs.core.get_in.call(null,request__183918__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__183918__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return foundation.app.router.route;
})));
}))));
foundation.test.routes.promoted_tweets = foundation.app.router.routes.call(null,foundation.app.router.if_route.call(null,foundation.app.router.route_compile.call(null,"/accounts/:account-id:__path-info",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__path-info","__path-info",4484183272),/\/.*/], null)),foundation.app.router.wrap_context.call(null,(function (request__183962__auto__){var account_id = cljs.core.get_in.call(null,request__183962__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)], null),cljs.core.get_in.call(null,request__183962__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"account-id"], null)));return foundation.app.router.routing.call(null,request__183962__auto__,foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/promoted_tweets"),(function (request__183918__auto__){return foundation.app.router.route;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/promoted_tweets/:id"),(function (request__183918__auto__){var id = cljs.core.get_in.call(null,request__183918__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__183918__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return foundation.app.router.route;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"post","post",1017351186),foundation.app.router.route_compile.call(null,"/promoted_tweets/:id"),(function (request__183918__auto__){var id = cljs.core.get_in.call(null,request__183918__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__183918__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return foundation.app.router.route;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"put","put",1014015617),foundation.app.router.route_compile.call(null,"/promoted_tweets/:id"),(function (request__183918__auto__){var id = cljs.core.get_in.call(null,request__183918__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__183918__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return foundation.app.router.route;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"delete","delete",3973413149),foundation.app.router.route_compile.call(null,"/promoted_tweets/:id"),(function (request__183918__auto__){var id = cljs.core.get_in.call(null,request__183918__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__183918__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return foundation.app.router.route;
})));
}))));
foundation.test.routes.promoted_products = foundation.app.router.routes.call(null,foundation.app.router.if_route.call(null,foundation.app.router.route_compile.call(null,"/accounts/:account-id:__path-info",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__path-info","__path-info",4484183272),/\/.*/], null)),foundation.app.router.wrap_context.call(null,(function (request__183962__auto__){var account_id = cljs.core.get_in.call(null,request__183962__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)], null),cljs.core.get_in.call(null,request__183962__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"account-id"], null)));return foundation.app.router.routing.call(null,request__183962__auto__,foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/promotable_users"),(function (request__183918__auto__){return foundation.app.router.route;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/scoped_timeline"),(function (request__183918__auto__){return foundation.app.router.route;
})));
}))),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/statuses/scoped_timeline"),(function (request__183918__auto__){return foundation.test.routes.simple_get;
})));
foundation.test.routes.funding_instruments = foundation.app.router.routes.call(null,foundation.app.router.if_route.call(null,foundation.app.router.route_compile.call(null,"/accounts/:account-id:__path-info",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__path-info","__path-info",4484183272),/\/.*/], null)),foundation.app.router.wrap_context.call(null,(function (request__183962__auto__){var account_id = cljs.core.get_in.call(null,request__183962__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)], null),cljs.core.get_in.call(null,request__183962__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"account-id"], null)));return foundation.app.router.routing.call(null,request__183962__auto__,foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/funding_instruments/:id"),(function (request__183918__auto__){var id = cljs.core.get_in.call(null,request__183918__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__183918__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return foundation.app.router.route;
})));
}))),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/bidding_rules"),(function (request__183918__auto__){return foundation.test.routes.simple_get;
})));
foundation.test.routes.targeting_criteria = foundation.app.router.routes.call(null,foundation.app.router.if_route.call(null,foundation.app.router.route_compile.call(null,"/accounts/:account-id:__path-info",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__path-info","__path-info",4484183272),/\/.*/], null)),foundation.app.router.wrap_context.call(null,(function (request__183962__auto__){var account_id = cljs.core.get_in.call(null,request__183962__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)], null),cljs.core.get_in.call(null,request__183962__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"account-id"], null)));return foundation.app.router.routing.call(null,request__183962__auto__,foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/targeting_criteria"),(function (request__183918__auto__){return foundation.app.router.route;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/targeting_criteria/:id"),(function (request__183918__auto__){var id = cljs.core.get_in.call(null,request__183918__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__183918__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return foundation.app.router.route;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"post","post",1017351186),foundation.app.router.route_compile.call(null,"/targeting_criteria/:id"),(function (request__183918__auto__){var id = cljs.core.get_in.call(null,request__183918__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__183918__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return foundation.app.router.route;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"put","put",1014015617),foundation.app.router.route_compile.call(null,"/targeting_criteria/:id"),(function (request__183918__auto__){var id = cljs.core.get_in.call(null,request__183918__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__183918__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return foundation.app.router.route;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"delete","delete",3973413149),foundation.app.router.route_compile.call(null,"/targeting_criteria/:id"),(function (request__183918__auto__){var id = cljs.core.get_in.call(null,request__183918__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__183918__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return foundation.app.router.route;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/targeting_criteria/tailored_audiences"),(function (request__183918__auto__){return foundation.test.routes.simple_get;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/reach_estimate"),(function (request__183918__auto__){var id = cljs.core.get_in.call(null,request__183918__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__183918__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return foundation.test.routes.simple_get;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/brands_tv"),(function (request__183918__auto__){var id = cljs.core.get_in.call(null,request__183918__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__183918__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return foundation.test.routes.simple_get;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/targeting_suggestions"),(function (request__183918__auto__){var id = cljs.core.get_in.call(null,request__183918__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__183918__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return foundation.test.routes.simple_get;
})));
}))),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/targeting_criteria/locations"),(function (request__183918__auto__){return foundation.test.routes.simple_get;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/targeting_criteria/interests"),(function (request__183918__auto__){return foundation.test.routes.simple_get;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/targeting_criteria/platforms"),(function (request__183918__auto__){return foundation.test.routes.simple_get;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/targeting_criteria/devices"),(function (request__183918__auto__){return foundation.test.routes.simple_get;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/targeting_criteria/tv_shows"),(function (request__183918__auto__){return foundation.test.routes.simple_get;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/targeting_criteria/tv_markets"),(function (request__183918__auto__){return foundation.test.routes.simple_get;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/targeting_criteria/platform_versions"),(function (request__183918__auto__){return foundation.test.routes.simple_get;
})));
foundation.test.routes.analytics = foundation.app.router.routes.call(null,foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/stats/accounts/:id"),(function (request__183918__auto__){var id = cljs.core.get_in.call(null,request__183918__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__183918__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return foundation.test.routes.stats_request;
})),foundation.app.router.if_route.call(null,foundation.app.router.route_compile.call(null,"/stats/accounts/:account-id:__path-info",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__path-info","__path-info",4484183272),/\/.*/], null)),foundation.app.router.wrap_context.call(null,(function (request__183962__auto__){var id = cljs.core.get_in.call(null,request__183962__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__183962__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return foundation.app.router.routing.call(null,request__183962__auto__,foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/campaigns"),(function (request__183918__auto__){return foundation.test.routes.stats_request;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/campaigns/:id"),(function (request__183918__auto__){var id__$1 = cljs.core.get_in.call(null,request__183918__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__183918__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return foundation.test.routes.stats_request;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/line_items"),(function (request__183918__auto__){return foundation.test.routes.stats_request;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/line_items/:id"),(function (request__183918__auto__){var id__$1 = cljs.core.get_in.call(null,request__183918__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__183918__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return foundation.test.routes.stats_request;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/promoted_accounts"),(function (request__183918__auto__){return foundation.test.routes.stats_request;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/promoted_accounts/:id"),(function (request__183918__auto__){var id__$1 = cljs.core.get_in.call(null,request__183918__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__183918__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return foundation.test.routes.stats_request;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/promoted_tweets"),(function (request__183918__auto__){return foundation.test.routes.stats_request;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/promoted_tweets/:id"),(function (request__183918__auto__){var id__$1 = cljs.core.get_in.call(null,request__183918__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__183918__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return foundation.test.routes.stats_request;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/funding_instruments"),(function (request__183918__auto__){return foundation.test.routes.stats_request;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/funding_instruments/:id"),(function (request__183918__auto__){var id__$1 = cljs.core.get_in.call(null,request__183918__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__183918__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return foundation.test.routes.stats_request;
})));
}))));
foundation.test.routes.app_routes = foundation.app.router.routes.call(null,foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/"),(function (request__183918__auto__){return foundation.app.router.route;
})),foundation.test.routes.accounts,foundation.test.routes.campaigns,foundation.test.routes.line_items,foundation.test.routes.promoted_accounts,foundation.test.routes.promoted_tweets,foundation.test.routes.funding_instruments,foundation.test.routes.targeting_criteria,foundation.test.routes.promoted_products,foundation.test.routes.analytics);
foundation.test.routes.simple_get = (function simple_get(req,query_params){var uri = [cljs.core.str(foundation.test.models.ads_api),cljs.core.str(new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req)),cljs.core.str(((cljs.core.seq.call(null,query_params))?foundation.app.models.query_params.call(null,query_params):null))].join('');var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_209797){var state_val_209798 = (state_209797[1]);if((state_val_209798 === 2))
{var inst_209794 = (state_209797[2]);var inst_209795 = cljs.core.set.call(null,inst_209794);var state_209797__$1 = state_209797;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_209797__$1,inst_209795);
} else
{if((state_val_209798 === 1))
{var inst_209792 = foundation.app.xhr.GET.call(null,uri);var state_209797__$1 = state_209797;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_209797__$1,2,inst_209792);
} else
{return null;
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_209802 = [null,null,null,null,null,null,null];(statearr_209802[0] = state_machine__12118__auto__);
(statearr_209802[1] = 1);
return statearr_209802;
});
var state_machine__12118__auto____1 = (function (state_209797){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_209797);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e209803){if((e209803 instanceof Object))
{var ex__12121__auto__ = e209803;var statearr_209804_209806 = state_209797;(statearr_209804_209806[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_209797);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e209803;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__209807 = state_209797;
state_209797 = G__209807;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_209797){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_209797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_209805 = f__12188__auto__.call(null);(statearr_209805[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_209805;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
});
foundation.test.routes.stats_request = (function stats_request(p__209808){var map__209824 = p__209808;var map__209824__$1 = ((cljs.core.seq_QMARK_.call(null,map__209824))?cljs.core.apply.call(null,cljs.core.hash_map,map__209824):map__209824);var req = map__209824__$1;var model = cljs.core.get.call(null,map__209824__$1,new cljs.core.Keyword(null,"model","model",1117974171));var query_params = cljs.core.get.call(null,map__209824__$1,new cljs.core.Keyword(null,"query-params","query-params",1080249757));var params = cljs.core.get.call(null,map__209824__$1,new cljs.core.Keyword(null,"params","params",4313443576));var stats_params = cljs.core.get.call(null,map__209824__$1,new cljs.core.Keyword(null,"stats-params","stats-params",2734551526));var uri = cljs.core.get.call(null,map__209824__$1,new cljs.core.Keyword(null,"uri","uri",1014020318));var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_209830){var state_val_209831 = (state_209830[1]);if((state_val_209831 === 2))
{var inst_209828 = (state_209830[2]);var state_209830__$1 = state_209830;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_209830__$1,inst_209828);
} else
{if((state_val_209831 === 1))
{var inst_209825 = foundation.app.models.reify_url.call(null,model,params,query_params);var inst_209826 = foundation.app.xhr.GET.call(null,inst_209825);var state_209830__$1 = state_209830;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_209830__$1,2,inst_209826);
} else
{return null;
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_209835 = [null,null,null,null,null,null,null];(statearr_209835[0] = state_machine__12118__auto__);
(statearr_209835[1] = 1);
return statearr_209835;
});
var state_machine__12118__auto____1 = (function (state_209830){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_209830);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e209836){if((e209836 instanceof Object))
{var ex__12121__auto__ = e209836;var statearr_209837_209839 = state_209830;(statearr_209837_209839[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_209830);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e209836;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__209840 = state_209830;
state_209830 = G__209840;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_209830){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_209830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_209838 = f__12188__auto__.call(null);(statearr_209838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_209838;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
});

//# sourceMappingURL=routes.js.map