// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.app.models');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('foundation.app.data.dependency');
goog.require('clojure.walk');
goog.require('goog.Uri.QueryData');
goog.require('foundation.app.message');
goog.require('foundation.app.xhr');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('foundation.app.data.dependency');
goog.require('foundation.app.message');
goog.require('cljs.core.async');
goog.require('foundation.app.xhr');
goog.require('foundation.app.data.dependency');
/**
* Given a URI from the resource spec, replace the matched patterns with the
* proper param val whose key matches the match in uri.
* @param {...*} var_args
*/
foundation.app.models.subs_uri = (function() { 
var subs_uri__delegate = function (uri,params){var params__$1 = ((!(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,params))))?cljs.core.apply.call(null,cljs.core.hash_map,params):cljs.core.first.call(null,params));var str = (function (){var matches = cljs.core.re_seq.call(null,/:([\w-_]+)/,uri);var result = uri;while(true){
if(cljs.core.empty_QMARK_.call(null,matches))
{return result;
} else
{var vec__44397 = cljs.core.first.call(null,matches);var token = cljs.core.nth.call(null,vec__44397,0,null);var kw = cljs.core.nth.call(null,vec__44397,1,null);var value = cljs.core.get.call(null,params__$1,cljs.core.keyword.call(null,kw));{
var G__44398 = cljs.core.rest.call(null,matches);
var G__44399 = clojure.string.replace.call(null,result,token,[cljs.core.str(value)].join(''));
matches = G__44398;
result = G__44399;
continue;
}
}
break;
}
})();return clojure.string.replace.call(null,str,/\/$/,"");
};
var subs_uri = function (uri,var_args){
var params = null;if (arguments.length > 1) {
  params = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return subs_uri__delegate.call(this,uri,params);};
subs_uri.cljs$lang$maxFixedArity = 1;
subs_uri.cljs$lang$applyTo = (function (arglist__44400){
var uri = cljs.core.first(arglist__44400);
var params = cljs.core.rest(arglist__44400);
return subs_uri__delegate(uri,params);
});
subs_uri.cljs$core$IFn$_invoke$arity$variadic = subs_uri__delegate;
return subs_uri;
})()
;
foundation.app.models.query_params = (function query_params(kvs){if(cljs.core.seq.call(null,kvs))
{return [cljs.core.str("?"),cljs.core.str(cljs.core.apply.call(null,goog.Uri.QueryData.createFromKeysValues,cljs.core.map.call(null,cljs.core.clj__GT_js,cljs.core.juxt.call(null,cljs.core.keys,cljs.core.vals).call(null,cljs.core.reduce.call(null,(function (m,p__44403){var vec__44404 = p__44403;var k = cljs.core.nth.call(null,vec__44404,0,null);var v = cljs.core.nth.call(null,vec__44404,1,null);return cljs.core.assoc.call(null,m,clojure.string.replace.call(null,k,/-/,"_"),v);
}),cljs.core.PersistentArrayMap.EMPTY,clojure.walk.stringify_keys.call(null,kvs))))))].join('');
} else
{return null;
}
});
foundation.app.models.reify_url = (function reify_url(p__44405){var map__44407 = p__44405;var map__44407__$1 = ((cljs.core.seq_QMARK_.call(null,map__44407))?cljs.core.apply.call(null,cljs.core.hash_map,map__44407):map__44407);var api = cljs.core.get.call(null,map__44407__$1,new cljs.core.Keyword(null,"api","api",1014001036));var re = cljs.core.get.call(null,map__44407__$1,new cljs.core.Keyword(null,"re","re",1013907877));var keys = cljs.core.get.call(null,map__44407__$1,new cljs.core.Keyword(null,"keys","keys",1017192806));var url = cljs.core.get.call(null,map__44407__$1,new cljs.core.Keyword(null,"url","url",1014020321));return (function() { 
var G__44408__delegate = function (model,kvs){var params = cljs.core.select_keys.call(null,model,keys);var query_string = foundation.app.models.query_params.call(null,cljs.core.merge.call(null,cljs.core.apply.call(null,cljs.core.hash_map,kvs),cljs.core.select_keys.call(null,model,new cljs.core.Keyword(null,"query-params","query-params",1080249757).cljs$core$IFn$_invoke$arity$1(model))));return [cljs.core.str(api),cljs.core.str(foundation.app.models.subs_uri.call(null,url,params)),cljs.core.str(query_string)].join('');
};
var G__44408 = function (model,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__44408__delegate.call(this,model,kvs);};
G__44408.cljs$lang$maxFixedArity = 1;
G__44408.cljs$lang$applyTo = (function (arglist__44409){
var model = cljs.core.first(arglist__44409);
var kvs = cljs.core.rest(arglist__44409);
return G__44408__delegate(model,kvs);
});
G__44408.cljs$core$IFn$_invoke$arity$variadic = G__44408__delegate;
return G__44408;
})()
;
});
foundation.app.models.ads_api = "http://192.241.130.213:8080/user/15/ads-api";
foundation.app.models.rest_api = "http://192.241.130.213:8080/user/15/rest-api";
foundation.app.models.accounts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"api","api",1014001036),"http://192.241.130.213:8080/user/15/ads-api",new cljs.core.Keyword(null,"url","url",1014020321),"/accounts/:id",new cljs.core.Keyword(null,"absolute?","absolute?",3046085914),false,new cljs.core.Keyword(null,"keys","keys",1017192806),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",1013907597)], null),new cljs.core.Keyword(null,"re","re",1013907877),/\/accounts\/([^\/,;?]+)/], null);
foundation.app.models.campaigns = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"api","api",1014001036),"http://192.241.130.213:8080/user/15/ads-api",new cljs.core.Keyword(null,"url","url",1014020321),"/accounts/:account-id/campaigns/:id",new cljs.core.Keyword(null,"absolute?","absolute?",3046085914),false,new cljs.core.Keyword(null,"keys","keys",1017192806),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"account-id","account-id",4505490477),new cljs.core.Keyword(null,"id","id",1013907597)], null),new cljs.core.Keyword(null,"re","re",1013907877),/\/accounts\/([^\/,;?]+)\/campaigns\/([^\/,;?]+)/], null);
foundation.app.models.line_items = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"api","api",1014001036),"http://192.241.130.213:8080/user/15/ads-api",new cljs.core.Keyword(null,"url","url",1014020321),"/accounts/:account-id/line_items/:id",new cljs.core.Keyword(null,"absolute?","absolute?",3046085914),false,new cljs.core.Keyword(null,"keys","keys",1017192806),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"account-id","account-id",4505490477),new cljs.core.Keyword(null,"id","id",1013907597)], null),new cljs.core.Keyword(null,"re","re",1013907877),/\/accounts\/([^\/,;?]+)\/line_items\/([^\/,;?]+)/], null);
foundation.app.models.promoted_tweets = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"api","api",1014001036),"http://192.241.130.213:8080/user/15/ads-api",new cljs.core.Keyword(null,"url","url",1014020321),"/accounts/:account-id/promoted_tweets/:id",new cljs.core.Keyword(null,"absolute?","absolute?",3046085914),false,new cljs.core.Keyword(null,"keys","keys",1017192806),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"account-id","account-id",4505490477),new cljs.core.Keyword(null,"id","id",1013907597)], null),new cljs.core.Keyword(null,"re","re",1013907877),/\/accounts\/([^\/,;?]+)\/promoted_tweets\/([^\/,;?]+)/], null);
foundation.app.models.promoted_accounts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"api","api",1014001036),"http://192.241.130.213:8080/user/15/ads-api",new cljs.core.Keyword(null,"url","url",1014020321),"/accounts/:account-id/promoted_accounts/:id",new cljs.core.Keyword(null,"absolute?","absolute?",3046085914),false,new cljs.core.Keyword(null,"keys","keys",1017192806),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"account-id","account-id",4505490477),new cljs.core.Keyword(null,"id","id",1013907597)], null),new cljs.core.Keyword(null,"re","re",1013907877),/\/accounts\/([^\/,;?]+)\/promoted_accounts\/([^\/,;?]+)/], null);
foundation.app.models.targeting_criteria = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"api","api",1014001036),"http://192.241.130.213:8080/user/15/ads-api",new cljs.core.Keyword(null,"url","url",1014020321),"/accounts/:account-id/targeting_criteria/:id",new cljs.core.Keyword(null,"absolute?","absolute?",3046085914),false,new cljs.core.Keyword(null,"keys","keys",1017192806),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"account-id","account-id",4505490477),new cljs.core.Keyword(null,"id","id",1013907597)], null),new cljs.core.Keyword(null,"re","re",1013907877),/\/accounts\/([^\/,;?]+)\/targeting_criteria\/([^\/,;?]+)/], null);
foundation.app.models.account_stats = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"query-params","query-params",1080249757),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-time","start-time",3689550026),new cljs.core.Keyword(null,"end-time","end-time",2693279729),new cljs.core.Keyword(null,"granularity","granularity",2833735872),new cljs.core.Keyword(null,"metrics","metrics",1969730613)], null),new cljs.core.Keyword(null,"url","url",1014020321),"/stats/accounts/:id",new cljs.core.Keyword(null,"api","api",1014001036),"http://192.241.130.213:8080/user/15/ads-api",new cljs.core.Keyword(null,"absolute?","absolute?",3046085914),false,new cljs.core.Keyword(null,"keys","keys",1017192806),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",1013907597)], null),new cljs.core.Keyword(null,"re","re",1013907877),/\/stats\/accounts\/([^\/,;?]+)/], null);
foundation.app.models.campaign_stats = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"query-params","query-params",1080249757),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-time","start-time",3689550026),new cljs.core.Keyword(null,"end-time","end-time",2693279729),new cljs.core.Keyword(null,"granularity","granularity",2833735872),new cljs.core.Keyword(null,"metrics","metrics",1969730613)], null),new cljs.core.Keyword(null,"url","url",1014020321),"/stats/accounts/:account-id/campaigns/:id",new cljs.core.Keyword(null,"api","api",1014001036),"http://192.241.130.213:8080/user/15/ads-api",new cljs.core.Keyword(null,"absolute?","absolute?",3046085914),false,new cljs.core.Keyword(null,"keys","keys",1017192806),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"account-id","account-id",4505490477),new cljs.core.Keyword(null,"id","id",1013907597)], null),new cljs.core.Keyword(null,"re","re",1013907877),/\/stats\/accounts\/([^\/,;?]+)\/campaigns\/([^\/,;?]+)/], null);
foundation.app.models.line_item_stats = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"query-params","query-params",1080249757),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-time","start-time",3689550026),new cljs.core.Keyword(null,"end-time","end-time",2693279729),new cljs.core.Keyword(null,"granularity","granularity",2833735872),new cljs.core.Keyword(null,"metrics","metrics",1969730613)], null),new cljs.core.Keyword(null,"url","url",1014020321),"/stats/accounts/:account-id/line_items/:id",new cljs.core.Keyword(null,"api","api",1014001036),"http://192.241.130.213:8080/user/15/ads-api",new cljs.core.Keyword(null,"absolute?","absolute?",3046085914),false,new cljs.core.Keyword(null,"keys","keys",1017192806),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"account-id","account-id",4505490477),new cljs.core.Keyword(null,"id","id",1013907597)], null),new cljs.core.Keyword(null,"re","re",1013907877),/\/stats\/accounts\/([^\/,;?]+)\/line_items\/([^\/,;?]+)/], null);
foundation.app.models.promoted_account_stats = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"query-params","query-params",1080249757),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-time","start-time",3689550026),new cljs.core.Keyword(null,"end-time","end-time",2693279729),new cljs.core.Keyword(null,"granularity","granularity",2833735872),new cljs.core.Keyword(null,"metrics","metrics",1969730613)], null),new cljs.core.Keyword(null,"url","url",1014020321),"/stats/accounts/:account-id/promoted_tweets/:id",new cljs.core.Keyword(null,"api","api",1014001036),"http://192.241.130.213:8080/user/15/ads-api",new cljs.core.Keyword(null,"absolute?","absolute?",3046085914),false,new cljs.core.Keyword(null,"keys","keys",1017192806),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"account-id","account-id",4505490477),new cljs.core.Keyword(null,"id","id",1013907597)], null),new cljs.core.Keyword(null,"re","re",1013907877),/\/stats\/accounts\/([^\/,;?]+)\/promoted_tweets\/([^\/,;?]+)/], null);
foundation.app.models.promoted_tweet_stats = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"query-params","query-params",1080249757),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-time","start-time",3689550026),new cljs.core.Keyword(null,"end-time","end-time",2693279729),new cljs.core.Keyword(null,"granularity","granularity",2833735872),new cljs.core.Keyword(null,"metrics","metrics",1969730613)], null),new cljs.core.Keyword(null,"url","url",1014020321),"/stats/accounts/:account-id/promoted_accounts/:id",new cljs.core.Keyword(null,"api","api",1014001036),"http://192.241.130.213:8080/user/15/ads-api",new cljs.core.Keyword(null,"absolute?","absolute?",3046085914),false,new cljs.core.Keyword(null,"keys","keys",1017192806),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"account-id","account-id",4505490477),new cljs.core.Keyword(null,"id","id",1013907597)], null),new cljs.core.Keyword(null,"re","re",1013907877),/\/stats\/accounts\/([^\/,;?]+)\/promoted_accounts\/([^\/,;?]+)/], null);
foundation.app.models.model_deps = foundation.app.data.dependency.depend.call(null,foundation.app.data.dependency.depend.call(null,foundation.app.data.dependency.depend.call(null,foundation.app.data.dependency.depend.call(null,foundation.app.data.dependency.depend.call(null,foundation.app.data.dependency.depend.call(null,foundation.app.data.dependency.depend.call(null,foundation.app.data.dependency.depend.call(null,foundation.app.data.dependency.depend.call(null,foundation.app.data.dependency.graph.call(null),foundation.app.models.campaigns,foundation.app.models.accounts),foundation.app.models.line_items,foundation.app.models.campaigns),foundation.app.models.promoted_accounts,foundation.app.models.line_items),foundation.app.models.promoted_tweets,foundation.app.models.line_items),foundation.app.models.account_stats,foundation.app.models.accounts),foundation.app.models.campaign_stats,foundation.app.models.campaigns),foundation.app.models.line_item_stats,foundation.app.models.line_items),foundation.app.models.promoted_account_stats,foundation.app.models.promoted_accounts),foundation.app.models.promoted_tweet_stats,foundation.app.models.promoted_tweets);
foundation.app.models.empty_targeting_criteria = cljs.core.PersistentHashMap.fromArrays(["GENDER","PHRASE_KEYWORD","EXACT_KEYWORD","FOLLOWERS_OF_USER","INTEREST","NEGATIVE_PHRASE_KEYWORD","TV_AD_TARGETING","PLATFORM","NEGATIVE_UNORDERED_KEYWORD","LOCATION","SIMILAR_TO_FOLLOWERS_OF_USER","UNORDERED_KEYWORD","NEGATIVE_EXACT_KEYWORD"],[cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY]);

//# sourceMappingURL=models.js.map