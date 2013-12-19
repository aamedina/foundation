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
foundation.test.routes.simple_get = (function simple_get(req,query_params){var uri = [cljs.core.str(foundation.test.models.ads_api),cljs.core.str(new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req)),cljs.core.str(((cljs.core.seq.call(null,query_params))?foundation.app.models.query_params.call(null,query_params):null))].join('');var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_220506){var state_val_220507 = (state_220506[1]);if((state_val_220507 === 2))
{var inst_220503 = (state_220506[2]);var inst_220504 = cljs.core.set.call(null,inst_220503);var state_220506__$1 = state_220506;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_220506__$1,inst_220504);
} else
{if((state_val_220507 === 1))
{var inst_220501 = foundation.app.xhr.GET.call(null,uri);var state_220506__$1 = state_220506;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_220506__$1,2,inst_220501);
} else
{return null;
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_220511 = [null,null,null,null,null,null,null];(statearr_220511[0] = state_machine__12118__auto__);
(statearr_220511[1] = 1);
return statearr_220511;
});
var state_machine__12118__auto____1 = (function (state_220506){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_220506);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e220512){if((e220512 instanceof Object))
{var ex__12121__auto__ = e220512;var statearr_220513_220515 = state_220506;(statearr_220513_220515[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_220506);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e220512;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__220516 = state_220506;
state_220506 = G__220516;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_220506){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_220506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_220514 = f__12188__auto__.call(null);(statearr_220514[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_220514;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
});
foundation.test.routes.stats_request = (function stats_request(p__220517){var map__220533 = p__220517;var map__220533__$1 = ((cljs.core.seq_QMARK_.call(null,map__220533))?cljs.core.apply.call(null,cljs.core.hash_map,map__220533):map__220533);var req = map__220533__$1;var model = cljs.core.get.call(null,map__220533__$1,new cljs.core.Keyword(null,"model","model",1117974171));var query_params = cljs.core.get.call(null,map__220533__$1,new cljs.core.Keyword(null,"query-params","query-params",1080249757));var params = cljs.core.get.call(null,map__220533__$1,new cljs.core.Keyword(null,"params","params",4313443576));var stats_params = cljs.core.get.call(null,map__220533__$1,new cljs.core.Keyword(null,"stats-params","stats-params",2734551526));var uri = cljs.core.get.call(null,map__220533__$1,new cljs.core.Keyword(null,"uri","uri",1014020318));var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_220539){var state_val_220540 = (state_220539[1]);if((state_val_220540 === 2))
{var inst_220537 = (state_220539[2]);var state_220539__$1 = state_220539;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_220539__$1,inst_220537);
} else
{if((state_val_220540 === 1))
{var inst_220534 = foundation.app.models.reify_url.call(null,model,params,query_params);var inst_220535 = foundation.app.xhr.GET.call(null,inst_220534);var state_220539__$1 = state_220539;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_220539__$1,2,inst_220535);
} else
{return null;
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_220544 = [null,null,null,null,null,null,null];(statearr_220544[0] = state_machine__12118__auto__);
(statearr_220544[1] = 1);
return statearr_220544;
});
var state_machine__12118__auto____1 = (function (state_220539){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_220539);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e220545){if((e220545 instanceof Object))
{var ex__12121__auto__ = e220545;var statearr_220546_220548 = state_220539;(statearr_220546_220548[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_220539);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e220545;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__220549 = state_220539;
state_220539 = G__220549;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_220539){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_220539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_220547 = f__12188__auto__.call(null);(statearr_220547[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_220547;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
});

//# sourceMappingURL=routes.js.map