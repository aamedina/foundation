// Compiled by ClojureScript 0.0-2120
goog.provide('foundation.test.routes');
goog.require('cljs.core');
goog.require('foundation.app.router');
goog.require('foundation.app.router');
foundation.test.routes.accounts = foundation.app.router.routes.call(null,foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/accounts"),(function (request__26369__auto__){return null;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/accounts/:id"),(function (request__26369__auto__){var id = cljs.core.get_in.call(null,request__26369__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__26369__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return id;
})));
foundation.test.routes.campaigns = foundation.app.router.routes.call(null,foundation.app.router.if_route.call(null,foundation.app.router.route_compile.call(null,"/accounts/:account-id:__path-info",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__path-info","__path-info",4484183272),/\/.*/], null)),foundation.app.router.wrap_context.call(null,(function (request__26418__auto__){var account_id = cljs.core.get_in.call(null,request__26418__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)], null),cljs.core.get_in.call(null,request__26418__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"account-id"], null)));return foundation.app.router.routing.call(null,request__26418__auto__,foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/campaigns"),(function (request__26369__auto__){return "";
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/campaigns/:id"),(function (request__26369__auto__){var id = cljs.core.get_in.call(null,request__26369__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__26369__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return id;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"post","post",1017351186),foundation.app.router.route_compile.call(null,"/campaigns/:id"),(function (request__26369__auto__){var id = cljs.core.get_in.call(null,request__26369__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__26369__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return id;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"put","put",1014015617),foundation.app.router.route_compile.call(null,"/campaigns/:id"),(function (request__26369__auto__){var id = cljs.core.get_in.call(null,request__26369__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__26369__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return id;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"delete","delete",3973413149),foundation.app.router.route_compile.call(null,"/campaigns/:id"),(function (request__26369__auto__){var id = cljs.core.get_in.call(null,request__26369__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__26369__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return id;
})));
}))));
foundation.test.routes.line_items = foundation.app.router.routes.call(null,foundation.app.router.if_route.call(null,foundation.app.router.route_compile.call(null,"/accounts/:account-id:__path-info",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__path-info","__path-info",4484183272),/\/.*/], null)),foundation.app.router.wrap_context.call(null,(function (request__26418__auto__){var account_id = cljs.core.get_in.call(null,request__26418__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)], null),cljs.core.get_in.call(null,request__26418__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"account-id"], null)));return foundation.app.router.routing.call(null,request__26418__auto__,foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/line_items?campaign_ids=:campaign-id"),(function (request__26369__auto__){var campaign_id = cljs.core.get_in.call(null,request__26369__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"campaign-id","campaign-id",3097644650)], null),cljs.core.get_in.call(null,request__26369__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"campaign-id"], null)));return null;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/line_items/:id?campaign_ids=:campaign-id"),(function (request__26369__auto__){var id = cljs.core.get_in.call(null,request__26369__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__26369__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return id;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"post","post",1017351186),foundation.app.router.route_compile.call(null,"/line_items/:id?campaign_ids=:campaign-id"),(function (request__26369__auto__){var id = cljs.core.get_in.call(null,request__26369__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__26369__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return id;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"put","put",1014015617),foundation.app.router.route_compile.call(null,"/line_items/:id?campaign_ids=:campaign-id"),(function (request__26369__auto__){var id = cljs.core.get_in.call(null,request__26369__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__26369__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return id;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"delete","delete",3973413149),foundation.app.router.route_compile.call(null,"/line_items/:id?campaign_ids=:campaign-id"),(function (request__26369__auto__){var id = cljs.core.get_in.call(null,request__26369__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__26369__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return id;
})));
}))));
foundation.test.routes.promoted_accounts = foundation.app.router.routes.call(null,foundation.app.router.if_route.call(null,foundation.app.router.route_compile.call(null,"/accounts/:account-id:__path-info",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__path-info","__path-info",4484183272),/\/.*/], null)),foundation.app.router.wrap_context.call(null,(function (request__26418__auto__){var account_id = cljs.core.get_in.call(null,request__26418__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)], null),cljs.core.get_in.call(null,request__26418__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"account-id"], null)));return foundation.app.router.routing.call(null,request__26418__auto__,foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/promoted_accounts"),(function (request__26369__auto__){return "";
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/promoted_accounts/:id"),(function (request__26369__auto__){var id = cljs.core.get_in.call(null,request__26369__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__26369__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return id;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"post","post",1017351186),foundation.app.router.route_compile.call(null,"/promoted_accounts/:id"),(function (request__26369__auto__){var id = cljs.core.get_in.call(null,request__26369__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__26369__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return id;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"put","put",1014015617),foundation.app.router.route_compile.call(null,"/promoted_accounts/:id"),(function (request__26369__auto__){var id = cljs.core.get_in.call(null,request__26369__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__26369__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return id;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"delete","delete",3973413149),foundation.app.router.route_compile.call(null,"/promoted_accounts/:id"),(function (request__26369__auto__){var id = cljs.core.get_in.call(null,request__26369__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__26369__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return id;
})));
}))));
foundation.test.routes.promoted_tweets = foundation.app.router.routes.call(null,foundation.app.router.if_route.call(null,foundation.app.router.route_compile.call(null,"/accounts/:account-id:__path-info",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__path-info","__path-info",4484183272),/\/.*/], null)),foundation.app.router.wrap_context.call(null,(function (request__26418__auto__){var account_id = cljs.core.get_in.call(null,request__26418__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)], null),cljs.core.get_in.call(null,request__26418__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"account-id"], null)));return foundation.app.router.routing.call(null,request__26418__auto__,foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/promoted_tweets"),(function (request__26369__auto__){return "";
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/promoted_tweets/:id"),(function (request__26369__auto__){var id = cljs.core.get_in.call(null,request__26369__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__26369__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return id;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"post","post",1017351186),foundation.app.router.route_compile.call(null,"/promoted_tweets/:id"),(function (request__26369__auto__){var id = cljs.core.get_in.call(null,request__26369__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__26369__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return id;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"put","put",1014015617),foundation.app.router.route_compile.call(null,"/promoted_tweets/:id"),(function (request__26369__auto__){var id = cljs.core.get_in.call(null,request__26369__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__26369__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return id;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"delete","delete",3973413149),foundation.app.router.route_compile.call(null,"/promoted_tweets/:id"),(function (request__26369__auto__){var id = cljs.core.get_in.call(null,request__26369__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__26369__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return id;
})));
}))));
foundation.test.routes.promoted_products = foundation.app.router.routes.call(null,foundation.app.router.if_route.call(null,foundation.app.router.route_compile.call(null,"/accounts/:account-id:__path-info",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__path-info","__path-info",4484183272),/\/.*/], null)),foundation.app.router.wrap_context.call(null,(function (request__26418__auto__){var account_id = cljs.core.get_in.call(null,request__26418__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)], null),cljs.core.get_in.call(null,request__26418__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"account-id"], null)));return foundation.app.router.routing.call(null,request__26418__auto__,foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/promotable_users"),(function (request__26369__auto__){return null;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/scoped_timeline"),(function (request__26369__auto__){return null;
})));
}))),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/statuses/scoped_timeline"),(function (request__26369__auto__){return null;
})));
foundation.test.routes.funding_instruments = foundation.app.router.routes.call(null,foundation.app.router.if_route.call(null,foundation.app.router.route_compile.call(null,"/accounts/:account-id:__path-info",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__path-info","__path-info",4484183272),/\/.*/], null)),foundation.app.router.wrap_context.call(null,(function (request__26418__auto__){var account_id = cljs.core.get_in.call(null,request__26418__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)], null),cljs.core.get_in.call(null,request__26418__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"account-id"], null)));return foundation.app.router.routing.call(null,request__26418__auto__,foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/funding_instruments/:id"),(function (request__26369__auto__){var id = cljs.core.get_in.call(null,request__26369__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__26369__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return null;
})));
}))),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/bidding_rules"),(function (request__26369__auto__){return null;
})));
foundation.test.routes.targeting_criteria = foundation.app.router.routes.call(null,foundation.app.router.if_route.call(null,foundation.app.router.route_compile.call(null,"/accounts/:account-id:__path-info",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__path-info","__path-info",4484183272),/\/.*/], null)),foundation.app.router.wrap_context.call(null,(function (request__26418__auto__){var account_id = cljs.core.get_in.call(null,request__26418__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"account-id","account-id",4505490477)], null),cljs.core.get_in.call(null,request__26418__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"account-id"], null)));return foundation.app.router.routing.call(null,request__26418__auto__,foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/targeting_criteria"),(function (request__26369__auto__){return "";
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/targeting_criteria/:id"),(function (request__26369__auto__){var id = cljs.core.get_in.call(null,request__26369__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__26369__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return id;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"post","post",1017351186),foundation.app.router.route_compile.call(null,"/targeting_criteria/:id"),(function (request__26369__auto__){var id = cljs.core.get_in.call(null,request__26369__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__26369__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return id;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"put","put",1014015617),foundation.app.router.route_compile.call(null,"/targeting_criteria/:id"),(function (request__26369__auto__){var id = cljs.core.get_in.call(null,request__26369__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__26369__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return id;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"delete","delete",3973413149),foundation.app.router.route_compile.call(null,"/targeting_criteria/:id"),(function (request__26369__auto__){var id = cljs.core.get_in.call(null,request__26369__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__26369__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return id;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/targeting_criteria/tailored_audiences"),(function (request__26369__auto__){return null;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/reach_estimate"),(function (request__26369__auto__){var id = cljs.core.get_in.call(null,request__26369__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__26369__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return null;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/brands_tv"),(function (request__26369__auto__){var id = cljs.core.get_in.call(null,request__26369__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__26369__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return null;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/targeting_suggestions"),(function (request__26369__auto__){var id = cljs.core.get_in.call(null,request__26369__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__26369__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return null;
})));
}))),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/targeting_criteria/locations"),(function (request__26369__auto__){return null;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/targeting_criteria/interests"),(function (request__26369__auto__){return null;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/targeting_criteria/platforms"),(function (request__26369__auto__){return null;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/targeting_criteria/devices"),(function (request__26369__auto__){return null;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/targeting_criteria/tv_shows"),(function (request__26369__auto__){return null;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/targeting_criteria/tv_markets"),(function (request__26369__auto__){return null;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/targeting_criteria/platform_versions"),(function (request__26369__auto__){return null;
})));
foundation.test.routes.analytics = foundation.app.router.routes.call(null,foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/stats/accounts/:id"),(function (request__26369__auto__){var id = cljs.core.get_in.call(null,request__26369__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__26369__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return null;
})),foundation.app.router.if_route.call(null,foundation.app.router.route_compile.call(null,"/stats/accounts/:account-id:__path-info",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__path-info","__path-info",4484183272),/\/.*/], null)),foundation.app.router.wrap_context.call(null,(function (request__26418__auto__){var id = cljs.core.get_in.call(null,request__26418__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__26418__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return foundation.app.router.routing.call(null,request__26418__auto__,foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/campaigns"),(function (request__26369__auto__){return null;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/campaigns/:id"),(function (request__26369__auto__){var id__$1 = cljs.core.get_in.call(null,request__26369__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__26369__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return null;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/line_items"),(function (request__26369__auto__){return null;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/line_items/:id"),(function (request__26369__auto__){var id__$1 = cljs.core.get_in.call(null,request__26369__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__26369__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return null;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/promoted_accounts"),(function (request__26369__auto__){return null;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/promoted_accounts/:id"),(function (request__26369__auto__){var id__$1 = cljs.core.get_in.call(null,request__26369__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__26369__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return null;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/promoted_tweets"),(function (request__26369__auto__){return null;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/promoted_tweets/:id"),(function (request__26369__auto__){var id__$1 = cljs.core.get_in.call(null,request__26369__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__26369__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return null;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/funding_instruments"),(function (request__26369__auto__){return null;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/funding_instruments/:id"),(function (request__26369__auto__){var id__$1 = cljs.core.get_in.call(null,request__26369__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__26369__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return null;
})));
}))));
foundation.test.routes.app = foundation.app.router.routes.call(null,foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/"),(function (request__26369__auto__){return cljs.core.println.call(null,"Hello, world!");
})),foundation.test.routes.accounts,foundation.test.routes.campaigns,foundation.test.routes.line_items,foundation.test.routes.promoted_accounts,foundation.test.routes.promoted_tweets,foundation.test.routes.funding_instruments,foundation.test.routes.targeting_criteria,foundation.test.routes.promoted_products,foundation.test.routes.analytics);

//# sourceMappingURL=routes.js.map