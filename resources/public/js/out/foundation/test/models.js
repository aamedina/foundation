// Compiled by ClojureScript 0.0-2120
goog.provide('foundation.test.models');
goog.require('cljs.core');
goog.require('foundation.app.data.dependency');
goog.require('goog.Uri');
goog.require('cljs_time.coerce');
goog.require('cljs_time.core');
goog.require('foundation.app.models');
goog.require('goog.date');
goog.require('cljs_time.format');
goog.require('cljs_time.format');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('foundation.app.data.dependency');
goog.require('goog.date');
goog.require('cljs_time.coerce');
goog.require('foundation.app.data.dependency');
goog.require('cljs_time.core');
foundation.test.models.ads_api = (new goog.Uri("http://192.241.130.213:8080/user/15/ads-api"));
foundation.test.models.rest_api = (new goog.Uri("http://192.241.130.213:8080/user/15/rest-api"));
foundation.test.models._STAR_api_STAR_ = foundation.test.models.ads_api;
foundation.test.models.accounts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",1014020321),"/accounts/:id",new cljs.core.Keyword(null,"api","api",1014001036),foundation.test.models.ads_api], null);
foundation.test.models.campaigns = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",1014020321),"/accounts/:account-id/campaigns/:id",new cljs.core.Keyword(null,"api","api",1014001036),foundation.test.models.ads_api], null);
foundation.test.models.line_items = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",1014020321),"/accounts/:account-id/line_items/:id",new cljs.core.Keyword(null,"api","api",1014001036),foundation.test.models.ads_api], null);
foundation.test.models.promoted_tweets = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",1014020321),"/accounts/:account-id/promoted_tweets/:id",new cljs.core.Keyword(null,"api","api",1014001036),foundation.test.models.ads_api], null);
foundation.test.models.promoted_accounts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",1014020321),"/accounts/:account-id/promoted_accounts/:id",new cljs.core.Keyword(null,"api","api",1014001036),foundation.test.models.ads_api], null);
foundation.test.models.targeting_criteria = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",1014020321),"/accounts/:account-id/targeting_criteria/:id",new cljs.core.Keyword(null,"api","api",1014001036),foundation.test.models.ads_api], null);
foundation.test.models.account_stats = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",1014020321),"/stats/accounts/:id",new cljs.core.Keyword(null,"api","api",1014001036),foundation.test.models.ads_api,new cljs.core.Keyword(null,"query-params","query-params",1080249757),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-time","start-time",3689550026),new cljs.core.Keyword(null,"end-time","end-time",2693279729),new cljs.core.Keyword(null,"granularity","granularity",2833735872),new cljs.core.Keyword(null,"metrics","metrics",1969730613)], null)], null);
foundation.test.models.campaign_stats = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",1014020321),"/stats/accounts/:account-id/campaigns/:id",new cljs.core.Keyword(null,"api","api",1014001036),foundation.test.models.ads_api,new cljs.core.Keyword(null,"query-params","query-params",1080249757),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-time","start-time",3689550026),new cljs.core.Keyword(null,"end-time","end-time",2693279729),new cljs.core.Keyword(null,"granularity","granularity",2833735872),new cljs.core.Keyword(null,"metrics","metrics",1969730613)], null)], null);
foundation.test.models.line_item_stats = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",1014020321),"/stats/accounts/:account-id/line_items/:id",new cljs.core.Keyword(null,"api","api",1014001036),foundation.test.models.ads_api,new cljs.core.Keyword(null,"query-params","query-params",1080249757),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-time","start-time",3689550026),new cljs.core.Keyword(null,"end-time","end-time",2693279729),new cljs.core.Keyword(null,"granularity","granularity",2833735872),new cljs.core.Keyword(null,"metrics","metrics",1969730613)], null)], null);
foundation.test.models.promoted_account_stats = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",1014020321),"/stats/accounts/:account-id/promoted_tweets/:id",new cljs.core.Keyword(null,"api","api",1014001036),foundation.test.models.ads_api,new cljs.core.Keyword(null,"query-params","query-params",1080249757),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-time","start-time",3689550026),new cljs.core.Keyword(null,"end-time","end-time",2693279729),new cljs.core.Keyword(null,"granularity","granularity",2833735872),new cljs.core.Keyword(null,"metrics","metrics",1969730613)], null)], null);
foundation.test.models.promoted_tweet_stats = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",1014020321),"/stats/accounts/:account-id/promoted_accounts/:id",new cljs.core.Keyword(null,"api","api",1014001036),foundation.test.models.ads_api,new cljs.core.Keyword(null,"query-params","query-params",1080249757),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-time","start-time",3689550026),new cljs.core.Keyword(null,"end-time","end-time",2693279729),new cljs.core.Keyword(null,"granularity","granularity",2833735872),new cljs.core.Keyword(null,"metrics","metrics",1969730613)], null)], null);
foundation.test.models.model_deps = foundation.app.data.dependency.depend.call(null,foundation.app.data.dependency.depend.call(null,foundation.app.data.dependency.depend.call(null,foundation.app.data.dependency.depend.call(null,foundation.app.data.dependency.depend.call(null,foundation.app.data.dependency.depend.call(null,foundation.app.data.dependency.depend.call(null,foundation.app.data.dependency.depend.call(null,foundation.app.data.dependency.depend.call(null,foundation.app.data.dependency.graph.call(null),foundation.test.models.campaigns,foundation.test.models.accounts),foundation.test.models.line_items,foundation.test.models.campaigns),foundation.test.models.promoted_accounts,foundation.test.models.line_items),foundation.test.models.promoted_tweets,foundation.test.models.line_items),foundation.test.models.account_stats,foundation.test.models.accounts),foundation.test.models.campaign_stats,foundation.test.models.campaigns),foundation.test.models.line_item_stats,foundation.test.models.line_items),foundation.test.models.promoted_account_stats,foundation.test.models.promoted_accounts),foundation.test.models.promoted_tweet_stats,foundation.test.models.promoted_tweets);
foundation.test.models.empty_targeting_criteria = cljs.core.PersistentHashMap.fromArrays(["GENDER","PHRASE_KEYWORD","EXACT_KEYWORD","FOLLOWERS_OF_USER","INTEREST","NEGATIVE_PHRASE_KEYWORD","TV_AD_TARGETING","PLATFORM","NEGATIVE_UNORDERED_KEYWORD","LOCATION","SIMILAR_TO_FOLLOWERS_OF_USER","UNORDERED_KEYWORD","NEGATIVE_EXACT_KEYWORD"],[cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY]);
foundation.test.models.columns = (function (){var method_table__9066__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__9067__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__9068__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__9069__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__9070__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("columns",(function (model){var temp__4092__auto__ = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(model);if(cljs.core.truth_(temp__4092__auto__))
{var n = temp__4092__auto__;return cljs.core.keyword.call(null,cljs.core.name.call(null,n));
} else
{return null;
}
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__9070__auto__,method_table__9066__auto__,prefer_table__9067__auto__,method_cache__9068__auto__,cached_hierarchy__9069__auto__));
})();
cljs.core._add_method.call(null,foundation.test.models.columns,new cljs.core.Keyword(null,"default","default",2558708147),(function (model){return cljs.core.PersistentVector.EMPTY;
}));
cljs.core._add_method.call(null,foundation.test.models.columns,new cljs.core.Keyword(null,"accounts","accounts",3171725144),(function (model){return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"select-all","select-all",3651745986),new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"select","select",4402849902)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"ID",new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"account-toggle","account-toggle",4776800870)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Account",new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"name","name",1017277949)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Created At",new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"created-at","created-at",2383536298)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Timezone",new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"timezone","timezone",3232643947)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Currency",new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"currency","currency",1589306243)], null)], null);
}));
cljs.core._add_method.call(null,foundation.test.models.columns,new cljs.core.Keyword(null,"campaigns","campaigns",971379925),(function (model){return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"select-all","select-all",3651745986),new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"select","select",4402849902)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"ID",new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"toggle","toggle",4440567494)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1017277949),"Campaign",new cljs.core.Keyword(null,"editor","editor",4001043679),new cljs.core.Keyword(null,"text","text",1017460895),new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"default","default",2558708147)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"paused","paused",4313549984),new cljs.core.Keyword(null,"name","name",1017277949),"Status",new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"pause-button","pause-button",995024475)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"funding-instrument-id","funding-instrument-id",2470780259),new cljs.core.Keyword(null,"name","name",1017277949),"Funding Instrument",new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"funding-instrument","funding-instrument",716386345)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"start-time","start-time",3689550026),new cljs.core.Keyword(null,"name","name",1017277949),"Start Time",new cljs.core.Keyword(null,"editor","editor",4001043679),new cljs.core.Keyword(null,"date","date",1016980256),new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"date-picker","date-picker",838801151)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"end-time","end-time",2693279729),new cljs.core.Keyword(null,"name","name",1017277949),"End Time",new cljs.core.Keyword(null,"editor","editor",4001043679),new cljs.core.Keyword(null,"date","date",1016980256),new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"date-picker","date-picker",838801151)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"total-budget-amount-local-micro","total-budget-amount-local-micro",2983745950),new cljs.core.Keyword(null,"name","name",1017277949),"Total Budget",new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"total-budget","total-budget",4104043872),new cljs.core.Keyword(null,"editor","editor",4001043679),new cljs.core.Keyword(null,"text","text",1017460895)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Total Spent",new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"total-budget-spent","total-budget-spent",4752287809)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"daily-budget-amount-local-micro","daily-budget-amount-local-micro",3582250035),new cljs.core.Keyword(null,"name","name",1017277949),"Daily Budget",new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"daily-budget","daily-budget",2067452139),new cljs.core.Keyword(null,"editor","editor",4001043679),new cljs.core.Keyword(null,"text","text",1017460895)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Daily Spent",new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"daily-budget-spent","daily-budget-spent",4500891532)], null)], null);
}));
cljs.core._add_method.call(null,foundation.test.models.columns,new cljs.core.Keyword(null,"line-items","line-items",4024096793),(function() { 
var G__23925__delegate = function (model,args){return new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"select-all","select-all",3651745986),new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"select","select",4402849902)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"name","name",1017277949),"ID",new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"toggle","toggle",4440567494)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Targeting",new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"targeting-toggle","targeting-toggle",1454681954)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"placement-type","placement-type",755144852),new cljs.core.Keyword(null,"name","name",1017277949),"Line Item Type"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"Status",new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"paused","paused",4313549984),new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"pause-button","pause-button",995024475)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"suggested-low-cpe-bid-local-micro","suggested-low-cpe-bid-local-micro",2801575340),new cljs.core.Keyword(null,"name","name",1017277949),"Low Bid",new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"low-bid","low-bid",1369226870)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"suggested-high-cpe-bid-local-micro","suggested-high-cpe-bid-local-micro",1473050894),new cljs.core.Keyword(null,"name","name",1017277949),"High Bid",new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"high-bid","high-bid",3622445508)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"bid-amount-local-micro","bid-amount-local-micro",3385284143),new cljs.core.Keyword(null,"name","name",1017277949),"Bid",new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"bid","bid",1014001775),new cljs.core.Keyword(null,"editor","editor",4001043679),new cljs.core.Keyword(null,"text","text",1017460895)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"goal-settings","goal-settings",1750792463),new cljs.core.Keyword(null,"name","name",1017277949),"Goal"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Spent",new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"currency","currency",1589306243)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Impressions",new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"number","number",4274507451)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Engagements",new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"number","number",4274507451)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Clicks",new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"number","number",4274507451)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Retweets",new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"number","number",4274507451)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Replies",new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"number","number",4274507451)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"eCPE",new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"currency","currency",1589306243)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"eCPM",new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"currency","currency",1589306243)], null)], null);
};
var G__23925 = function (model,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__23925__delegate.call(this,model,args);};
G__23925.cljs$lang$maxFixedArity = 1;
G__23925.cljs$lang$applyTo = (function (arglist__23926){
var model = cljs.core.first(arglist__23926);
var args = cljs.core.rest(arglist__23926);
return G__23925__delegate(model,args);
});
G__23925.cljs$core$IFn$_invoke$arity$variadic = G__23925__delegate;
return G__23925;
})()
);
cljs.core._add_method.call(null,foundation.test.models.columns,new cljs.core.Keyword(null,"promoted-tweets","promoted-tweets",1060207837),(function() { 
var G__23927__delegate = function (model,args){return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"select-all","select-all",3651745986),new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"select","select",4402849902)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"name","name",1017277949),"ID",new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"toggle","toggle",4440567494)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"Tweet",new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"tweet-id","tweet-id",2543518057),new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"default","default",2558708147)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Spent",new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"number","number",4274507451)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Impressions",new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"number","number",4274507451)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Engagements",new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"number","number",4274507451)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Clicks",new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"number","number",4274507451)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Retweets",new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"number","number",4274507451)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Replies",new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"number","number",4274507451)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"eCPE",new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"currency","currency",1589306243)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"eCPM",new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"currency","currency",1589306243)], null)], null);
};
var G__23927 = function (model,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__23927__delegate.call(this,model,args);};
G__23927.cljs$lang$maxFixedArity = 1;
G__23927.cljs$lang$applyTo = (function (arglist__23928){
var model = cljs.core.first(arglist__23928);
var args = cljs.core.rest(arglist__23928);
return G__23927__delegate(model,args);
});
G__23927.cljs$core$IFn$_invoke$arity$variadic = G__23927__delegate;
return G__23927;
})()
);
cljs.core._add_method.call(null,foundation.test.models.columns,new cljs.core.Keyword(null,"promoted-accounts","promoted-accounts",3190129249),(function() { 
var G__23929__delegate = function (model,args){return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"select-all","select-all",3651745986),new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"select","select",4402849902)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"name","name",1017277949),"ID",new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"toggle","toggle",4440567494)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"Tweet",new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"tweet-id","tweet-id",2543518057),new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"default","default",2558708147)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Spent",new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"currency","currency",1589306243)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Impressions",new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"number","number",4274507451)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Engagements",new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"number","number",4274507451)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Clicks",new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"number","number",4274507451)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Retweets",new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"number","number",4274507451)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Replies",new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"number","number",4274507451)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"eCPE",new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"currency","currency",1589306243)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"eCPM",new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"currency","currency",1589306243)], null)], null);
};
var G__23929 = function (model,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__23929__delegate.call(this,model,args);};
G__23929.cljs$lang$maxFixedArity = 1;
G__23929.cljs$lang$applyTo = (function (arglist__23930){
var model = cljs.core.first(arglist__23930);
var args = cljs.core.rest(arglist__23930);
return G__23929__delegate(model,args);
});
G__23929.cljs$core$IFn$_invoke$arity$variadic = G__23929__delegate;
return G__23929;
})()
);
foundation.test.models._STAR_account_STAR_ = null;
foundation.test.models.timezone_map = new cljs.core.PersistentArrayMap(null, 4, ["America/Los_Angeles",420,"America/New_York",240,"Australia/Sydney",-600,"Asia/Tokyo",-540], null);
foundation.test.models.dst_f = (function dst_f(begin,end){return (function (date_like){return ((date_like >= goog.date.fromIsoString(begin))) && ((date_like < goog.date.fromIsoString(end)));
});
});
foundation.test.models.dst_map = cljs.core.PersistentHashMap.fromArrays.call(null,[2010,2011,2012,2013,2014,2015],[foundation.test.models.dst_f.call(null,"2011-03-14T02:00:00","2010-11-07T02:00:00"),foundation.test.models.dst_f.call(null,"2011-03-13T02:00:00","2011-11-06T02:00:00"),foundation.test.models.dst_f.call(null,"2012-03-11T02:00:00","2012-11-04T02:00:00"),foundation.test.models.dst_f.call(null,"2013-03-10T02:00:00","2013-11-03T02:00:00"),foundation.test.models.dst_f.call(null,"2014-03-09T02:00:00","2014-11-02T02:00:00"),foundation.test.models.dst_f.call(null,"2015-03-08T02:00:00","2015-11-01T02:00:00")]);
foundation.test.models.au_dst_map = cljs.core.PersistentHashMap.fromArrays.call(null,[2012,2013,2014],[foundation.test.models.dst_f.call(null,"2012-04-01T02:00:00","2012-10-07T02:00:00"),foundation.test.models.dst_f.call(null,"2013-04-07T02:00:00","2013-10-06T02:00:00"),foundation.test.models.dst_f.call(null,"2014-04-06T02:00:00","2014-10-05T02:00:00")]);
foundation.test.models.dst_QMARK_ = cljs.core.memoize.call(null,(function (d,country){var dl = d;var pred__23931 = cljs.core._EQ_;var expr__23932 = country;if(cljs.core.truth_(pred__23931.call(null,"America",expr__23932)))
{return cljs.core.get.call(null,foundation.test.models.dst_map,dl.getYear()).call(null,dl);
} else
{if(cljs.core.truth_(pred__23931.call(null,"Australia",expr__23932)))
{return cljs.core.get.call(null,foundation.test.models.au_dst_map,dl.getYear()).call(null,dl);
} else
{return true;
}
}
}));
foundation.test.models.at_midnight = (function at_midnight(date){return cljs.core.apply.call(null,cljs_time.core.date_midnight,cljs.core.juxt.call(null,cljs_time.core.year,cljs_time.core.month,cljs_time.core.day).call(null,date));
});
foundation.test.models.start_time = (function (){var method_table__9066__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__9067__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__9068__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__9069__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__9070__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("start-time",(function (model){var temp__4092__auto__ = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(model);if(cljs.core.truth_(temp__4092__auto__))
{var n = temp__4092__auto__;return cljs.core.keyword.call(null,cljs.core.name.call(null,n));
} else
{return null;
}
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__9070__auto__,method_table__9066__auto__,prefer_table__9067__auto__,method_cache__9068__auto__,cached_hierarchy__9069__auto__));
})();
cljs.core._add_method.call(null,foundation.test.models.start_time,new cljs.core.Keyword(null,"default","default",2558708147),(function (model){var offset = cljs.core.get.call(null,foundation.test.models.timezone_map,new cljs.core.Keyword(null,"time-zone","time-zone",1004576286).cljs$core$IFn$_invoke$arity$1(foundation.test.models._STAR_account_STAR_));var country = cljs.core.first.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"timezone","timezone",3232643947).cljs$core$IFn$_invoke$arity$1(foundation.test.models._STAR_account_STAR_),/\//));var tz = (cljs.core.truth_(foundation.test.models.dst_QMARK_.call(null,cljs_time.core.ago.call(null,cljs_time.core.days.call(null,28)),country))?offset:(60 + offset));return (function (p1__23934_SHARP_){return cljs_time.format.unparse.call(null,cljs_time.format.formatters.call(null,new cljs.core.Keyword(null,"date-time-no-ms","date-time-no-ms",569382179)),p1__23934_SHARP_);
}).call(null,foundation.test.models.at_midnight.call(null,cljs_time.core.minus.call(null,cljs_time.core.from_now.call(null,cljs_time.core.minutes.call(null,offset)),cljs_time.core.days.call(null,28))));
}));
cljs.core._add_method.call(null,foundation.test.models.start_time,new cljs.core.Keyword(null,"campaigns","campaigns",971379925),(function (model){return cljs_time.format.unparse.call(null,cljs_time.format.formatters.call(null,new cljs.core.Keyword(null,"date-time-no-ms","date-time-no-ms",569382179)),cljs_time.coerce.from_string.call(null,new cljs.core.Keyword(null,"start-time","start-time",3689550026).cljs$core$IFn$_invoke$arity$1(model)));
}));
foundation.test.models.end_time = (function (){var method_table__9066__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__9067__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__9068__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__9069__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__9070__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("end-time",(function (model){var temp__4092__auto__ = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(model);if(cljs.core.truth_(temp__4092__auto__))
{var n = temp__4092__auto__;return cljs.core.keyword.call(null,cljs.core.name.call(null,n));
} else
{return null;
}
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__9070__auto__,method_table__9066__auto__,prefer_table__9067__auto__,method_cache__9068__auto__,cached_hierarchy__9069__auto__));
})();
cljs.core._add_method.call(null,foundation.test.models.end_time,new cljs.core.Keyword(null,"default","default",2558708147),(function (model){var temp__4090__auto__ = goog.date.fromIsoString(foundation.test.models.start_time.call(null,model));if(cljs.core.truth_(temp__4090__auto__))
{var start_time = temp__4090__auto__;return cljs_time.format.unparse.call(null,cljs_time.format.formatters.call(null,new cljs.core.Keyword(null,"date-time-no-ms","date-time-no-ms",569382179)),cljs_time.core.plus.call(null,start_time,cljs_time.core.days.call(null,28)));
} else
{return cljs_time.format.unparse.call(null,cljs_time.format.formatters.call(null,new cljs.core.Keyword(null,"date-time-no-ms","date-time-no-ms",569382179)),cljs_time.core.today_at_midnight.call(null));
}
}));
foundation.test.models.metrics = (function (){var method_table__9066__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__9067__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__9068__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__9069__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__9070__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("metrics",(function (model){var temp__4092__auto__ = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(model);if(cljs.core.truth_(temp__4092__auto__))
{var n = temp__4092__auto__;return cljs.core.keyword.call(null,cljs.core.name.call(null,n));
} else
{return null;
}
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__9070__auto__,method_table__9066__auto__,prefer_table__9067__auto__,method_cache__9068__auto__,cached_hierarchy__9069__auto__));
})();
cljs.core._add_method.call(null,foundation.test.models.metrics,new cljs.core.Keyword(null,"default","default",2558708147),(function (model){return new cljs.core.PersistentArrayMap(null, 6, ["Impressions",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["promoted_tweet_search_impressions","promoted_account_impressions"], null),"Engagements",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["promoted_tweet_search_engagements","promoted_tweet_timeline_engagements"], null),"Clicks",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["promoted_tweet_search_clicks","promoted_tweet_timeline_clicks"], null),"Retweets",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["promoted_tweet_search_retweets","promoted_tweet_timeline_retweets"], null),"Replies",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["promoted_tweet_search_replies","promoted_tweet_timeline_replies"], null),"Follows",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["promoted_tweet_search_follows","promoted_tweet_timeline_follows"], null)], null);
}));
cljs.core._add_method.call(null,foundation.test.models.metrics,new cljs.core.Keyword(null,"promoted-tweets","promoted-tweets",1060207837),(function (model){return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Impressions",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["promoted_tweet_search_impressions"], null)], null),foundation.test.models.metrics.call(null,new cljs.core.Keyword(null,"default","default",2558708147)));
}));
cljs.core._add_method.call(null,foundation.test.models.metrics,new cljs.core.Keyword(null,"promoted-accounts","promoted-accounts",3190129249),(function (model){return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Impressions",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["promoted_tweet_search_impressions"], null)], null),foundation.test.models.metrics.call(null,new cljs.core.Keyword(null,"default","default",2558708147)));
}));

//# sourceMappingURL=models.js.map