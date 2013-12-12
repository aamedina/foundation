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
{var vec__97568 = cljs.core.first.call(null,matches);var token = cljs.core.nth.call(null,vec__97568,0,null);var kw = cljs.core.nth.call(null,vec__97568,1,null);var value = cljs.core.get.call(null,params__$1,cljs.core.keyword.call(null,kw));{
var G__97569 = cljs.core.rest.call(null,matches);
var G__97570 = clojure.string.replace.call(null,result,token,[cljs.core.str(value)].join(''));
matches = G__97569;
result = G__97570;
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
subs_uri.cljs$lang$applyTo = (function (arglist__97571){
var uri = cljs.core.first(arglist__97571);
var params = cljs.core.rest(arglist__97571);
return subs_uri__delegate(uri,params);
});
subs_uri.cljs$core$IFn$_invoke$arity$variadic = subs_uri__delegate;
return subs_uri;
})()
;
foundation.app.models.query_params = (function query_params(kvs){if(cljs.core.seq.call(null,kvs))
{return [cljs.core.str("?"),cljs.core.str(cljs.core.apply.call(null,goog.Uri.QueryData.createFromKeysValues,cljs.core.map.call(null,cljs.core.clj__GT_js,cljs.core.juxt.call(null,cljs.core.keys,cljs.core.vals).call(null,cljs.core.reduce.call(null,(function (m,p__97574){var vec__97575 = p__97574;var k = cljs.core.nth.call(null,vec__97575,0,null);var v = cljs.core.nth.call(null,vec__97575,1,null);return cljs.core.assoc.call(null,m,clojure.string.replace.call(null,k,/-/,"_"),v);
}),cljs.core.PersistentArrayMap.EMPTY,clojure.walk.stringify_keys.call(null,kvs))))))].join('');
} else
{return null;
}
});
foundation.app.models.reify_url = (function reify_url(p__97576){var map__97578 = p__97576;var map__97578__$1 = ((cljs.core.seq_QMARK_.call(null,map__97578))?cljs.core.apply.call(null,cljs.core.hash_map,map__97578):map__97578);var api = cljs.core.get.call(null,map__97578__$1,new cljs.core.Keyword(null,"api","api",1014001036));var re = cljs.core.get.call(null,map__97578__$1,new cljs.core.Keyword(null,"re","re",1013907877));var keys = cljs.core.get.call(null,map__97578__$1,new cljs.core.Keyword(null,"keys","keys",1017192806));var url = cljs.core.get.call(null,map__97578__$1,new cljs.core.Keyword(null,"url","url",1014020321));return (function() { 
var G__97579__delegate = function (model,kvs){var params = cljs.core.select_keys.call(null,model,keys);var query_string = foundation.app.models.query_params.call(null,cljs.core.merge.call(null,cljs.core.apply.call(null,cljs.core.hash_map,kvs),cljs.core.select_keys.call(null,model,new cljs.core.Keyword(null,"query-params","query-params",1080249757).cljs$core$IFn$_invoke$arity$1(model))));return [cljs.core.str(api),cljs.core.str(foundation.app.models.subs_uri.call(null,url,params)),cljs.core.str(query_string)].join('');
};
var G__97579 = function (model,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__97579__delegate.call(this,model,kvs);};
G__97579.cljs$lang$maxFixedArity = 1;
G__97579.cljs$lang$applyTo = (function (arglist__97580){
var model = cljs.core.first(arglist__97580);
var kvs = cljs.core.rest(arglist__97580);
return G__97579__delegate(model,kvs);
});
G__97579.cljs$core$IFn$_invoke$arity$variadic = G__97579__delegate;
return G__97579;
})()
;
});
foundation.app.models.ads_api = "http://192.241.130.213:8080/user/15/ads-api";
foundation.app.models.rest_api = "http://192.241.130.213:8080/user/15/rest-api";
foundation.app.models.accounts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"api","api",1014001036),"http://192.241.130.213:8080/user/15/ads-api",new cljs.core.Keyword(null,"url","url",1014020321),"/accounts/:id",new cljs.core.Keyword(null,"absolute?","absolute?",3046085914),false,new cljs.core.Keyword(null,"keys","keys",1017192806),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",1013907597)], null),new cljs.core.Keyword(null,"re","re",1013907877),/\/accounts\/([^\/,;?]+)/], null);
foundation.app.models.account = (function() {
var account = null;
var account__1 = (function (p__97581){var map__97583 = p__97581;var map__97583__$1 = ((cljs.core.seq_QMARK_.call(null,map__97583))?cljs.core.apply.call(null,cljs.core.hash_map,map__97583):map__97583);var m__95849__auto__ = map__97583__$1;var id = cljs.core.get.call(null,map__97583__$1,new cljs.core.Keyword(null,"id","id",1013907597));var currency = cljs.core.get.call(null,map__97583__$1,new cljs.core.Keyword(null,"currency","currency",1589306243));var timezone = cljs.core.get.call(null,map__97583__$1,new cljs.core.Keyword(null,"timezone","timezone",3232643947));var name = cljs.core.get.call(null,map__97583__$1,new cljs.core.Keyword(null,"name","name",1017277949));if(typeof name === 'string')
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",772676615,null),new cljs.core.Symbol(null,"name","name",-1637157820,null))))].join('')));
}
if(typeof id === 'string')
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",772676615,null),new cljs.core.Symbol(null,"id","id",-1640528172,null))))].join('')));
}
if(typeof currency === 'string')
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",772676615,null),new cljs.core.Symbol(null,"currency","currency",-1065129526,null))))].join('')));
}
if(typeof timezone === 'string')
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",772676615,null),new cljs.core.Symbol(null,"timezone","timezone",578208178,null))))].join('')));
}
if(cljs.core.map_QMARK_.call(null,m__95849__auto__))
{return cljs.core.with_meta.call(null,m__95849__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"model","model",1117974171),new cljs.core.Keyword(null,"account","account",4131552671)], null));
} else
{return null;
}
});
var account__4 = (function (name,id,currency,timezone){if(typeof name === 'string')
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",772676615,null),new cljs.core.Symbol(null,"name","name",-1637157820,null))))].join('')));
}
if(typeof id === 'string')
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",772676615,null),new cljs.core.Symbol(null,"id","id",-1640528172,null))))].join('')));
}
if(typeof currency === 'string')
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",772676615,null),new cljs.core.Symbol(null,"currency","currency",-1065129526,null))))].join('')));
}
if(typeof timezone === 'string')
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",772676615,null),new cljs.core.Symbol(null,"timezone","timezone",578208178,null))))].join('')));
}
return cljs.core.with_meta.call(null,cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"currency","currency",1589306243),new cljs.core.Keyword(null,"timezone","timezone",3232643947)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,id,currency,timezone], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"model","model",1117974171),new cljs.core.Keyword(null,"account","account",4131552671)], null));
});
account = function(name,id,currency,timezone){
switch(arguments.length){
case 1:
return account__1.call(this,name);
case 4:
return account__4.call(this,name,id,currency,timezone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
account.cljs$core$IFn$_invoke$arity$1 = account__1;
account.cljs$core$IFn$_invoke$arity$4 = account__4;
return account;
})()
;
foundation.app.models.campaigns = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"api","api",1014001036),"http://192.241.130.213:8080/user/15/ads-api",new cljs.core.Keyword(null,"url","url",1014020321),"/accounts/:account-id/campaigns/:id",new cljs.core.Keyword(null,"absolute?","absolute?",3046085914),false,new cljs.core.Keyword(null,"keys","keys",1017192806),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"account-id","account-id",4505490477),new cljs.core.Keyword(null,"id","id",1013907597)], null),new cljs.core.Keyword(null,"re","re",1013907877),/\/accounts\/([^\/,;?]+)\/campaigns\/([^\/,;?]+)/], null);
foundation.app.models.campaign = (function() {
var campaign = null;
var campaign__1 = (function (p__97584){var map__97586 = p__97584;var map__97586__$1 = ((cljs.core.seq_QMARK_.call(null,map__97586))?cljs.core.apply.call(null,cljs.core.hash_map,map__97586):map__97586);var m__95849__auto__ = map__97586__$1;var id = cljs.core.get.call(null,map__97586__$1,new cljs.core.Keyword(null,"id","id",1013907597));var currency = cljs.core.get.call(null,map__97586__$1,new cljs.core.Keyword(null,"currency","currency",1589306243));var timezone = cljs.core.get.call(null,map__97586__$1,new cljs.core.Keyword(null,"timezone","timezone",3232643947));var name = cljs.core.get.call(null,map__97586__$1,new cljs.core.Keyword(null,"name","name",1017277949));if(typeof name === 'string')
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",772676615,null),new cljs.core.Symbol(null,"name","name",-1637157820,null))))].join('')));
}
if(typeof id === 'string')
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",772676615,null),new cljs.core.Symbol(null,"id","id",-1640528172,null))))].join('')));
}
if(typeof currency === 'string')
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",772676615,null),new cljs.core.Symbol(null,"currency","currency",-1065129526,null))))].join('')));
}
if(typeof timezone === 'string')
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",772676615,null),new cljs.core.Symbol(null,"timezone","timezone",578208178,null))))].join('')));
}
if(cljs.core.map_QMARK_.call(null,m__95849__auto__))
{return cljs.core.with_meta.call(null,m__95849__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"model","model",1117974171),new cljs.core.Keyword(null,"campaign","campaign",873985154)], null));
} else
{return null;
}
});
var campaign__4 = (function (name,id,currency,timezone){if(typeof name === 'string')
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",772676615,null),new cljs.core.Symbol(null,"name","name",-1637157820,null))))].join('')));
}
if(typeof id === 'string')
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",772676615,null),new cljs.core.Symbol(null,"id","id",-1640528172,null))))].join('')));
}
if(typeof currency === 'string')
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",772676615,null),new cljs.core.Symbol(null,"currency","currency",-1065129526,null))))].join('')));
}
if(typeof timezone === 'string')
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",772676615,null),new cljs.core.Symbol(null,"timezone","timezone",578208178,null))))].join('')));
}
return cljs.core.with_meta.call(null,cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"currency","currency",1589306243),new cljs.core.Keyword(null,"timezone","timezone",3232643947)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,id,currency,timezone], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"model","model",1117974171),new cljs.core.Keyword(null,"campaign","campaign",873985154)], null));
});
campaign = function(name,id,currency,timezone){
switch(arguments.length){
case 1:
return campaign__1.call(this,name);
case 4:
return campaign__4.call(this,name,id,currency,timezone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
campaign.cljs$core$IFn$_invoke$arity$1 = campaign__1;
campaign.cljs$core$IFn$_invoke$arity$4 = campaign__4;
return campaign;
})()
;
foundation.app.models.line_items = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"api","api",1014001036),"http://192.241.130.213:8080/user/15/ads-api",new cljs.core.Keyword(null,"url","url",1014020321),"/accounts/:account-id/line_items/:id",new cljs.core.Keyword(null,"absolute?","absolute?",3046085914),false,new cljs.core.Keyword(null,"keys","keys",1017192806),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"account-id","account-id",4505490477),new cljs.core.Keyword(null,"id","id",1013907597)], null),new cljs.core.Keyword(null,"re","re",1013907877),/\/accounts\/([^\/,;?]+)\/line_items\/([^\/,;?]+)/], null);
foundation.app.models.line_item = (function() {
var line_item = null;
var line_item__1 = (function (p__97587){var map__97589 = p__97587;var map__97589__$1 = ((cljs.core.seq_QMARK_.call(null,map__97589))?cljs.core.apply.call(null,cljs.core.hash_map,map__97589):map__97589);var m__95849__auto__ = map__97589__$1;var id = cljs.core.get.call(null,map__97589__$1,new cljs.core.Keyword(null,"id","id",1013907597));var currency = cljs.core.get.call(null,map__97589__$1,new cljs.core.Keyword(null,"currency","currency",1589306243));var timezone = cljs.core.get.call(null,map__97589__$1,new cljs.core.Keyword(null,"timezone","timezone",3232643947));var name = cljs.core.get.call(null,map__97589__$1,new cljs.core.Keyword(null,"name","name",1017277949));if(typeof name === 'string')
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",772676615,null),new cljs.core.Symbol(null,"name","name",-1637157820,null))))].join('')));
}
if(typeof id === 'string')
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",772676615,null),new cljs.core.Symbol(null,"id","id",-1640528172,null))))].join('')));
}
if(typeof currency === 'string')
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",772676615,null),new cljs.core.Symbol(null,"currency","currency",-1065129526,null))))].join('')));
}
if(typeof timezone === 'string')
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",772676615,null),new cljs.core.Symbol(null,"timezone","timezone",578208178,null))))].join('')));
}
if(cljs.core.map_QMARK_.call(null,m__95849__auto__))
{return cljs.core.with_meta.call(null,m__95849__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"model","model",1117974171),new cljs.core.Keyword(null,"line-item","line-item",3466311870)], null));
} else
{return null;
}
});
var line_item__4 = (function (name,id,currency,timezone){if(typeof name === 'string')
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",772676615,null),new cljs.core.Symbol(null,"name","name",-1637157820,null))))].join('')));
}
if(typeof id === 'string')
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",772676615,null),new cljs.core.Symbol(null,"id","id",-1640528172,null))))].join('')));
}
if(typeof currency === 'string')
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",772676615,null),new cljs.core.Symbol(null,"currency","currency",-1065129526,null))))].join('')));
}
if(typeof timezone === 'string')
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",772676615,null),new cljs.core.Symbol(null,"timezone","timezone",578208178,null))))].join('')));
}
return cljs.core.with_meta.call(null,cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"currency","currency",1589306243),new cljs.core.Keyword(null,"timezone","timezone",3232643947)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,id,currency,timezone], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"model","model",1117974171),new cljs.core.Keyword(null,"line-item","line-item",3466311870)], null));
});
line_item = function(name,id,currency,timezone){
switch(arguments.length){
case 1:
return line_item__1.call(this,name);
case 4:
return line_item__4.call(this,name,id,currency,timezone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
line_item.cljs$core$IFn$_invoke$arity$1 = line_item__1;
line_item.cljs$core$IFn$_invoke$arity$4 = line_item__4;
return line_item;
})()
;
foundation.app.models.promoted_tweets = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"api","api",1014001036),"http://192.241.130.213:8080/user/15/ads-api",new cljs.core.Keyword(null,"url","url",1014020321),"/accounts/:account-id/promoted_tweets/:id",new cljs.core.Keyword(null,"absolute?","absolute?",3046085914),false,new cljs.core.Keyword(null,"keys","keys",1017192806),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"account-id","account-id",4505490477),new cljs.core.Keyword(null,"id","id",1013907597)], null),new cljs.core.Keyword(null,"re","re",1013907877),/\/accounts\/([^\/,;?]+)\/promoted_tweets\/([^\/,;?]+)/], null);
foundation.app.models.promoted_tweet = (function() {
var promoted_tweet = null;
var promoted_tweet__1 = (function (p__97590){var map__97592 = p__97590;var map__97592__$1 = ((cljs.core.seq_QMARK_.call(null,map__97592))?cljs.core.apply.call(null,cljs.core.hash_map,map__97592):map__97592);var m__95849__auto__ = map__97592__$1;var id = cljs.core.get.call(null,map__97592__$1,new cljs.core.Keyword(null,"id","id",1013907597));var currency = cljs.core.get.call(null,map__97592__$1,new cljs.core.Keyword(null,"currency","currency",1589306243));var timezone = cljs.core.get.call(null,map__97592__$1,new cljs.core.Keyword(null,"timezone","timezone",3232643947));var name = cljs.core.get.call(null,map__97592__$1,new cljs.core.Keyword(null,"name","name",1017277949));if(typeof name === 'string')
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",772676615,null),new cljs.core.Symbol(null,"name","name",-1637157820,null))))].join('')));
}
if(typeof id === 'string')
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",772676615,null),new cljs.core.Symbol(null,"id","id",-1640528172,null))))].join('')));
}
if(typeof currency === 'string')
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",772676615,null),new cljs.core.Symbol(null,"currency","currency",-1065129526,null))))].join('')));
}
if(typeof timezone === 'string')
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",772676615,null),new cljs.core.Symbol(null,"timezone","timezone",578208178,null))))].join('')));
}
if(cljs.core.map_QMARK_.call(null,m__95849__auto__))
{return cljs.core.with_meta.call(null,m__95849__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"model","model",1117974171),new cljs.core.Keyword(null,"promoted-tweet","promoted-tweet",4617628538)], null));
} else
{return null;
}
});
var promoted_tweet__4 = (function (name,id,currency,timezone){if(typeof name === 'string')
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",772676615,null),new cljs.core.Symbol(null,"name","name",-1637157820,null))))].join('')));
}
if(typeof id === 'string')
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",772676615,null),new cljs.core.Symbol(null,"id","id",-1640528172,null))))].join('')));
}
if(typeof currency === 'string')
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",772676615,null),new cljs.core.Symbol(null,"currency","currency",-1065129526,null))))].join('')));
}
if(typeof timezone === 'string')
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",772676615,null),new cljs.core.Symbol(null,"timezone","timezone",578208178,null))))].join('')));
}
return cljs.core.with_meta.call(null,cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"currency","currency",1589306243),new cljs.core.Keyword(null,"timezone","timezone",3232643947)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,id,currency,timezone], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"model","model",1117974171),new cljs.core.Keyword(null,"promoted-tweet","promoted-tweet",4617628538)], null));
});
promoted_tweet = function(name,id,currency,timezone){
switch(arguments.length){
case 1:
return promoted_tweet__1.call(this,name);
case 4:
return promoted_tweet__4.call(this,name,id,currency,timezone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
promoted_tweet.cljs$core$IFn$_invoke$arity$1 = promoted_tweet__1;
promoted_tweet.cljs$core$IFn$_invoke$arity$4 = promoted_tweet__4;
return promoted_tweet;
})()
;
foundation.app.models.promoted_accounts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"api","api",1014001036),"http://192.241.130.213:8080/user/15/ads-api",new cljs.core.Keyword(null,"url","url",1014020321),"/accounts/:account-id/promoted_accounts/:id",new cljs.core.Keyword(null,"absolute?","absolute?",3046085914),false,new cljs.core.Keyword(null,"keys","keys",1017192806),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"account-id","account-id",4505490477),new cljs.core.Keyword(null,"id","id",1013907597)], null),new cljs.core.Keyword(null,"re","re",1013907877),/\/accounts\/([^\/,;?]+)\/promoted_accounts\/([^\/,;?]+)/], null);
foundation.app.models.promoted_account = (function() {
var promoted_account = null;
var promoted_account__1 = (function (p__97593){var map__97595 = p__97593;var map__97595__$1 = ((cljs.core.seq_QMARK_.call(null,map__97595))?cljs.core.apply.call(null,cljs.core.hash_map,map__97595):map__97595);var m__95849__auto__ = map__97595__$1;var id = cljs.core.get.call(null,map__97595__$1,new cljs.core.Keyword(null,"id","id",1013907597));var currency = cljs.core.get.call(null,map__97595__$1,new cljs.core.Keyword(null,"currency","currency",1589306243));var timezone = cljs.core.get.call(null,map__97595__$1,new cljs.core.Keyword(null,"timezone","timezone",3232643947));var name = cljs.core.get.call(null,map__97595__$1,new cljs.core.Keyword(null,"name","name",1017277949));if(typeof name === 'string')
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",772676615,null),new cljs.core.Symbol(null,"name","name",-1637157820,null))))].join('')));
}
if(typeof id === 'string')
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",772676615,null),new cljs.core.Symbol(null,"id","id",-1640528172,null))))].join('')));
}
if(typeof currency === 'string')
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",772676615,null),new cljs.core.Symbol(null,"currency","currency",-1065129526,null))))].join('')));
}
if(typeof timezone === 'string')
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",772676615,null),new cljs.core.Symbol(null,"timezone","timezone",578208178,null))))].join('')));
}
if(cljs.core.map_QMARK_.call(null,m__95849__auto__))
{return cljs.core.with_meta.call(null,m__95849__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"model","model",1117974171),new cljs.core.Keyword(null,"promoted-account","promoted-account",2192483702)], null));
} else
{return null;
}
});
var promoted_account__4 = (function (name,id,currency,timezone){if(typeof name === 'string')
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",772676615,null),new cljs.core.Symbol(null,"name","name",-1637157820,null))))].join('')));
}
if(typeof id === 'string')
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",772676615,null),new cljs.core.Symbol(null,"id","id",-1640528172,null))))].join('')));
}
if(typeof currency === 'string')
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",772676615,null),new cljs.core.Symbol(null,"currency","currency",-1065129526,null))))].join('')));
}
if(typeof timezone === 'string')
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",772676615,null),new cljs.core.Symbol(null,"timezone","timezone",578208178,null))))].join('')));
}
return cljs.core.with_meta.call(null,cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"currency","currency",1589306243),new cljs.core.Keyword(null,"timezone","timezone",3232643947)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,id,currency,timezone], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"model","model",1117974171),new cljs.core.Keyword(null,"promoted-account","promoted-account",2192483702)], null));
});
promoted_account = function(name,id,currency,timezone){
switch(arguments.length){
case 1:
return promoted_account__1.call(this,name);
case 4:
return promoted_account__4.call(this,name,id,currency,timezone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
promoted_account.cljs$core$IFn$_invoke$arity$1 = promoted_account__1;
promoted_account.cljs$core$IFn$_invoke$arity$4 = promoted_account__4;
return promoted_account;
})()
;
foundation.app.models.targeting_criterias = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"api","api",1014001036),"http://192.241.130.213:8080/user/15/ads-api",new cljs.core.Keyword(null,"url","url",1014020321),"/accounts/:account-id/targeting_criteria/:id",new cljs.core.Keyword(null,"absolute?","absolute?",3046085914),false,new cljs.core.Keyword(null,"keys","keys",1017192806),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"account-id","account-id",4505490477),new cljs.core.Keyword(null,"id","id",1013907597)], null),new cljs.core.Keyword(null,"re","re",1013907877),/\/accounts\/([^\/,;?]+)\/targeting_criteria\/([^\/,;?]+)/], null);
foundation.app.models.targeting_criteria = (function() {
var targeting_criteria = null;
var targeting_criteria__1 = (function (p__97596){var map__97598 = p__97596;var map__97598__$1 = ((cljs.core.seq_QMARK_.call(null,map__97598))?cljs.core.apply.call(null,cljs.core.hash_map,map__97598):map__97598);var m__95849__auto__ = map__97598__$1;var id = cljs.core.get.call(null,map__97598__$1,new cljs.core.Keyword(null,"id","id",1013907597));var currency = cljs.core.get.call(null,map__97598__$1,new cljs.core.Keyword(null,"currency","currency",1589306243));var timezone = cljs.core.get.call(null,map__97598__$1,new cljs.core.Keyword(null,"timezone","timezone",3232643947));var name = cljs.core.get.call(null,map__97598__$1,new cljs.core.Keyword(null,"name","name",1017277949));if(typeof name === 'string')
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",772676615,null),new cljs.core.Symbol(null,"name","name",-1637157820,null))))].join('')));
}
if(typeof id === 'string')
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",772676615,null),new cljs.core.Symbol(null,"id","id",-1640528172,null))))].join('')));
}
if(typeof currency === 'string')
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",772676615,null),new cljs.core.Symbol(null,"currency","currency",-1065129526,null))))].join('')));
}
if(typeof timezone === 'string')
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",772676615,null),new cljs.core.Symbol(null,"timezone","timezone",578208178,null))))].join('')));
}
if(cljs.core.map_QMARK_.call(null,m__95849__auto__))
{return cljs.core.with_meta.call(null,m__95849__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"model","model",1117974171),new cljs.core.Keyword(null,"targeting-criteria","targeting-criteria",2568100973)], null));
} else
{return null;
}
});
var targeting_criteria__4 = (function (name,id,currency,timezone){if(typeof name === 'string')
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",772676615,null),new cljs.core.Symbol(null,"name","name",-1637157820,null))))].join('')));
}
if(typeof id === 'string')
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",772676615,null),new cljs.core.Symbol(null,"id","id",-1640528172,null))))].join('')));
}
if(typeof currency === 'string')
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",772676615,null),new cljs.core.Symbol(null,"currency","currency",-1065129526,null))))].join('')));
}
if(typeof timezone === 'string')
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",772676615,null),new cljs.core.Symbol(null,"timezone","timezone",578208178,null))))].join('')));
}
return cljs.core.with_meta.call(null,cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"currency","currency",1589306243),new cljs.core.Keyword(null,"timezone","timezone",3232643947)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,id,currency,timezone], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"model","model",1117974171),new cljs.core.Keyword(null,"targeting-criteria","targeting-criteria",2568100973)], null));
});
targeting_criteria = function(name,id,currency,timezone){
switch(arguments.length){
case 1:
return targeting_criteria__1.call(this,name);
case 4:
return targeting_criteria__4.call(this,name,id,currency,timezone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
targeting_criteria.cljs$core$IFn$_invoke$arity$1 = targeting_criteria__1;
targeting_criteria.cljs$core$IFn$_invoke$arity$4 = targeting_criteria__4;
return targeting_criteria;
})()
;
foundation.app.models.account_stats = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"query-params","query-params",1080249757),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-time","start-time",3689550026),new cljs.core.Keyword(null,"end-time","end-time",2693279729),new cljs.core.Keyword(null,"granularity","granularity",2833735872),new cljs.core.Keyword(null,"metrics","metrics",1969730613)], null),new cljs.core.Keyword(null,"url","url",1014020321),"/stats/accounts/:id",new cljs.core.Keyword(null,"api","api",1014001036),"http://192.241.130.213:8080/user/15/ads-api",new cljs.core.Keyword(null,"absolute?","absolute?",3046085914),false,new cljs.core.Keyword(null,"keys","keys",1017192806),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",1013907597)], null),new cljs.core.Keyword(null,"re","re",1013907877),/\/stats\/accounts\/([^\/,;?]+)/], null);
foundation.app.models.account_stats = (function() {
var account_stats = null;
var account_stats__1 = (function (p__97599){var map__97601 = p__97599;var map__97601__$1 = ((cljs.core.seq_QMARK_.call(null,map__97601))?cljs.core.apply.call(null,cljs.core.hash_map,map__97601):map__97601);var m__95849__auto__ = map__97601__$1;var granularity = cljs.core.get.call(null,map__97601__$1,new cljs.core.Keyword(null,"granularity","granularity",2833735872));var end_time = cljs.core.get.call(null,map__97601__$1,new cljs.core.Keyword(null,"end-time","end-time",2693279729));var metrics = cljs.core.get.call(null,map__97601__$1,new cljs.core.Keyword(null,"metrics","metrics",1969730613));var start_time = cljs.core.get.call(null,map__97601__$1,new cljs.core.Keyword(null,"start-time","start-time",3689550026));if(cljs.core.map_QMARK_.call(null,m__95849__auto__))
{return cljs.core.with_meta.call(null,m__95849__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"model","model",1117974171),new cljs.core.Keyword(null,"account-stats","account-stats",3351265393)], null));
} else
{return null;
}
});
var account_stats__4 = (function (start_time,end_time,granularity,metrics){return cljs.core.with_meta.call(null,cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-time","start-time",3689550026),new cljs.core.Keyword(null,"end-time","end-time",2693279729),new cljs.core.Keyword(null,"granularity","granularity",2833735872),new cljs.core.Keyword(null,"metrics","metrics",1969730613)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_time,end_time,granularity,metrics], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"model","model",1117974171),new cljs.core.Keyword(null,"account-stats","account-stats",3351265393)], null));
});
account_stats = function(start_time,end_time,granularity,metrics){
switch(arguments.length){
case 1:
return account_stats__1.call(this,start_time);
case 4:
return account_stats__4.call(this,start_time,end_time,granularity,metrics);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
account_stats.cljs$core$IFn$_invoke$arity$1 = account_stats__1;
account_stats.cljs$core$IFn$_invoke$arity$4 = account_stats__4;
return account_stats;
})()
;
foundation.app.models.campaign_stats = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"parent","parent",4313447452),new cljs.core.Keyword(null,"campaigns","campaigns",971379925),new cljs.core.Keyword(null,"query-params","query-params",1080249757),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-time","start-time",3689550026),new cljs.core.Keyword(null,"end-time","end-time",2693279729),new cljs.core.Keyword(null,"granularity","granularity",2833735872),new cljs.core.Keyword(null,"metrics","metrics",1969730613)], null),new cljs.core.Keyword(null,"url","url",1014020321),"/stats/accounts/:account-id/campaigns/:id",new cljs.core.Keyword(null,"api","api",1014001036),"http://192.241.130.213:8080/user/15/ads-api",new cljs.core.Keyword(null,"absolute?","absolute?",3046085914),false,new cljs.core.Keyword(null,"keys","keys",1017192806),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"account-id","account-id",4505490477),new cljs.core.Keyword(null,"id","id",1013907597)], null),new cljs.core.Keyword(null,"re","re",1013907877),/\/stats\/accounts\/([^\/,;?]+)\/campaigns\/([^\/,;?]+)/], null);
foundation.app.models.campaign_stats = (function() {
var campaign_stats = null;
var campaign_stats__1 = (function (p__97602){var map__97604 = p__97602;var map__97604__$1 = ((cljs.core.seq_QMARK_.call(null,map__97604))?cljs.core.apply.call(null,cljs.core.hash_map,map__97604):map__97604);var m__95849__auto__ = map__97604__$1;var granularity = cljs.core.get.call(null,map__97604__$1,new cljs.core.Keyword(null,"granularity","granularity",2833735872));var end_time = cljs.core.get.call(null,map__97604__$1,new cljs.core.Keyword(null,"end-time","end-time",2693279729));var metrics = cljs.core.get.call(null,map__97604__$1,new cljs.core.Keyword(null,"metrics","metrics",1969730613));var start_time = cljs.core.get.call(null,map__97604__$1,new cljs.core.Keyword(null,"start-time","start-time",3689550026));if(cljs.core.map_QMARK_.call(null,m__95849__auto__))
{return cljs.core.with_meta.call(null,m__95849__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"model","model",1117974171),new cljs.core.Keyword(null,"campaign-stats","campaign-stats",2571878676)], null));
} else
{return null;
}
});
var campaign_stats__4 = (function (start_time,end_time,granularity,metrics){return cljs.core.with_meta.call(null,cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-time","start-time",3689550026),new cljs.core.Keyword(null,"end-time","end-time",2693279729),new cljs.core.Keyword(null,"granularity","granularity",2833735872),new cljs.core.Keyword(null,"metrics","metrics",1969730613)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_time,end_time,granularity,metrics], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"model","model",1117974171),new cljs.core.Keyword(null,"campaign-stats","campaign-stats",2571878676)], null));
});
campaign_stats = function(start_time,end_time,granularity,metrics){
switch(arguments.length){
case 1:
return campaign_stats__1.call(this,start_time);
case 4:
return campaign_stats__4.call(this,start_time,end_time,granularity,metrics);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
campaign_stats.cljs$core$IFn$_invoke$arity$1 = campaign_stats__1;
campaign_stats.cljs$core$IFn$_invoke$arity$4 = campaign_stats__4;
return campaign_stats;
})()
;
foundation.app.models.line_item_stats = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"parent","parent",4313447452),new cljs.core.Keyword(null,"line-items","line-items",4024096793),new cljs.core.Keyword(null,"query-params","query-params",1080249757),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-time","start-time",3689550026),new cljs.core.Keyword(null,"end-time","end-time",2693279729),new cljs.core.Keyword(null,"granularity","granularity",2833735872),new cljs.core.Keyword(null,"metrics","metrics",1969730613)], null),new cljs.core.Keyword(null,"url","url",1014020321),"/stats/accounts/:account-id/line_items/:id",new cljs.core.Keyword(null,"api","api",1014001036),"http://192.241.130.213:8080/user/15/ads-api",new cljs.core.Keyword(null,"absolute?","absolute?",3046085914),false,new cljs.core.Keyword(null,"keys","keys",1017192806),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"account-id","account-id",4505490477),new cljs.core.Keyword(null,"id","id",1013907597)], null),new cljs.core.Keyword(null,"re","re",1013907877),/\/stats\/accounts\/([^\/,;?]+)\/line_items\/([^\/,;?]+)/], null);
foundation.app.models.line_item_stats = (function() {
var line_item_stats = null;
var line_item_stats__1 = (function (p__97605){var map__97607 = p__97605;var map__97607__$1 = ((cljs.core.seq_QMARK_.call(null,map__97607))?cljs.core.apply.call(null,cljs.core.hash_map,map__97607):map__97607);var m__95849__auto__ = map__97607__$1;var granularity = cljs.core.get.call(null,map__97607__$1,new cljs.core.Keyword(null,"granularity","granularity",2833735872));var end_time = cljs.core.get.call(null,map__97607__$1,new cljs.core.Keyword(null,"end-time","end-time",2693279729));var metrics = cljs.core.get.call(null,map__97607__$1,new cljs.core.Keyword(null,"metrics","metrics",1969730613));var start_time = cljs.core.get.call(null,map__97607__$1,new cljs.core.Keyword(null,"start-time","start-time",3689550026));if(cljs.core.map_QMARK_.call(null,m__95849__auto__))
{return cljs.core.with_meta.call(null,m__95849__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"model","model",1117974171),new cljs.core.Keyword(null,"line-item-stats","line-item-stats",2967627856)], null));
} else
{return null;
}
});
var line_item_stats__4 = (function (start_time,end_time,granularity,metrics){return cljs.core.with_meta.call(null,cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-time","start-time",3689550026),new cljs.core.Keyword(null,"end-time","end-time",2693279729),new cljs.core.Keyword(null,"granularity","granularity",2833735872),new cljs.core.Keyword(null,"metrics","metrics",1969730613)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_time,end_time,granularity,metrics], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"model","model",1117974171),new cljs.core.Keyword(null,"line-item-stats","line-item-stats",2967627856)], null));
});
line_item_stats = function(start_time,end_time,granularity,metrics){
switch(arguments.length){
case 1:
return line_item_stats__1.call(this,start_time);
case 4:
return line_item_stats__4.call(this,start_time,end_time,granularity,metrics);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
line_item_stats.cljs$core$IFn$_invoke$arity$1 = line_item_stats__1;
line_item_stats.cljs$core$IFn$_invoke$arity$4 = line_item_stats__4;
return line_item_stats;
})()
;
foundation.app.models.promoted_account_stats = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"parent","parent",4313447452),new cljs.core.Keyword(null,"promoted-tweets","promoted-tweets",1060207837),new cljs.core.Keyword(null,"query-params","query-params",1080249757),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-time","start-time",3689550026),new cljs.core.Keyword(null,"end-time","end-time",2693279729),new cljs.core.Keyword(null,"granularity","granularity",2833735872),new cljs.core.Keyword(null,"metrics","metrics",1969730613)], null),new cljs.core.Keyword(null,"url","url",1014020321),"/stats/accounts/:account-id/promoted_tweets/:id",new cljs.core.Keyword(null,"api","api",1014001036),"http://192.241.130.213:8080/user/15/ads-api",new cljs.core.Keyword(null,"absolute?","absolute?",3046085914),false,new cljs.core.Keyword(null,"keys","keys",1017192806),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"account-id","account-id",4505490477),new cljs.core.Keyword(null,"id","id",1013907597)], null),new cljs.core.Keyword(null,"re","re",1013907877),/\/stats\/accounts\/([^\/,;?]+)\/promoted_tweets\/([^\/,;?]+)/], null);
foundation.app.models.promoted_account_stats = (function() {
var promoted_account_stats = null;
var promoted_account_stats__1 = (function (p__97608){var map__97610 = p__97608;var map__97610__$1 = ((cljs.core.seq_QMARK_.call(null,map__97610))?cljs.core.apply.call(null,cljs.core.hash_map,map__97610):map__97610);var m__95849__auto__ = map__97610__$1;var granularity = cljs.core.get.call(null,map__97610__$1,new cljs.core.Keyword(null,"granularity","granularity",2833735872));var end_time = cljs.core.get.call(null,map__97610__$1,new cljs.core.Keyword(null,"end-time","end-time",2693279729));var metrics = cljs.core.get.call(null,map__97610__$1,new cljs.core.Keyword(null,"metrics","metrics",1969730613));var start_time = cljs.core.get.call(null,map__97610__$1,new cljs.core.Keyword(null,"start-time","start-time",3689550026));if(cljs.core.map_QMARK_.call(null,m__95849__auto__))
{return cljs.core.with_meta.call(null,m__95849__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"model","model",1117974171),new cljs.core.Keyword(null,"promoted-account-stats","promoted-account-stats",3549358856)], null));
} else
{return null;
}
});
var promoted_account_stats__4 = (function (start_time,end_time,granularity,metrics){return cljs.core.with_meta.call(null,cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-time","start-time",3689550026),new cljs.core.Keyword(null,"end-time","end-time",2693279729),new cljs.core.Keyword(null,"granularity","granularity",2833735872),new cljs.core.Keyword(null,"metrics","metrics",1969730613)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_time,end_time,granularity,metrics], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"model","model",1117974171),new cljs.core.Keyword(null,"promoted-account-stats","promoted-account-stats",3549358856)], null));
});
promoted_account_stats = function(start_time,end_time,granularity,metrics){
switch(arguments.length){
case 1:
return promoted_account_stats__1.call(this,start_time);
case 4:
return promoted_account_stats__4.call(this,start_time,end_time,granularity,metrics);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
promoted_account_stats.cljs$core$IFn$_invoke$arity$1 = promoted_account_stats__1;
promoted_account_stats.cljs$core$IFn$_invoke$arity$4 = promoted_account_stats__4;
return promoted_account_stats;
})()
;
foundation.app.models.promoted_tweet_stats = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"parent","parent",4313447452),new cljs.core.Keyword(null,"promoted-accounts","promoted-accounts",3190129249),new cljs.core.Keyword(null,"query-params","query-params",1080249757),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-time","start-time",3689550026),new cljs.core.Keyword(null,"end-time","end-time",2693279729),new cljs.core.Keyword(null,"granularity","granularity",2833735872),new cljs.core.Keyword(null,"metrics","metrics",1969730613)], null),new cljs.core.Keyword(null,"url","url",1014020321),"/stats/accounts/:account-id/promoted_accounts/:id",new cljs.core.Keyword(null,"api","api",1014001036),"http://192.241.130.213:8080/user/15/ads-api",new cljs.core.Keyword(null,"absolute?","absolute?",3046085914),false,new cljs.core.Keyword(null,"keys","keys",1017192806),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"account-id","account-id",4505490477),new cljs.core.Keyword(null,"id","id",1013907597)], null),new cljs.core.Keyword(null,"re","re",1013907877),/\/stats\/accounts\/([^\/,;?]+)\/promoted_accounts\/([^\/,;?]+)/], null);
foundation.app.models.promoted_tweet_stats = (function() {
var promoted_tweet_stats = null;
var promoted_tweet_stats__1 = (function (p__97611){var map__97613 = p__97611;var map__97613__$1 = ((cljs.core.seq_QMARK_.call(null,map__97613))?cljs.core.apply.call(null,cljs.core.hash_map,map__97613):map__97613);var m__95849__auto__ = map__97613__$1;var granularity = cljs.core.get.call(null,map__97613__$1,new cljs.core.Keyword(null,"granularity","granularity",2833735872));var end_time = cljs.core.get.call(null,map__97613__$1,new cljs.core.Keyword(null,"end-time","end-time",2693279729));var metrics = cljs.core.get.call(null,map__97613__$1,new cljs.core.Keyword(null,"metrics","metrics",1969730613));var start_time = cljs.core.get.call(null,map__97613__$1,new cljs.core.Keyword(null,"start-time","start-time",3689550026));if(cljs.core.map_QMARK_.call(null,m__95849__auto__))
{return cljs.core.with_meta.call(null,m__95849__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"model","model",1117974171),new cljs.core.Keyword(null,"promoted-tweet-stats","promoted-tweet-stats",2961710604)], null));
} else
{return null;
}
});
var promoted_tweet_stats__4 = (function (start_time,end_time,granularity,metrics){return cljs.core.with_meta.call(null,cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-time","start-time",3689550026),new cljs.core.Keyword(null,"end-time","end-time",2693279729),new cljs.core.Keyword(null,"granularity","granularity",2833735872),new cljs.core.Keyword(null,"metrics","metrics",1969730613)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_time,end_time,granularity,metrics], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"model","model",1117974171),new cljs.core.Keyword(null,"promoted-tweet-stats","promoted-tweet-stats",2961710604)], null));
});
promoted_tweet_stats = function(start_time,end_time,granularity,metrics){
switch(arguments.length){
case 1:
return promoted_tweet_stats__1.call(this,start_time);
case 4:
return promoted_tweet_stats__4.call(this,start_time,end_time,granularity,metrics);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
promoted_tweet_stats.cljs$core$IFn$_invoke$arity$1 = promoted_tweet_stats__1;
promoted_tweet_stats.cljs$core$IFn$_invoke$arity$4 = promoted_tweet_stats__4;
return promoted_tweet_stats;
})()
;
foundation.app.models.model_dependencies = foundation.app.data.dependency.depend.call(null,foundation.app.data.dependency.depend.call(null,foundation.app.data.dependency.depend.call(null,foundation.app.data.dependency.depend.call(null,foundation.app.data.dependency.graph.call(null),new cljs.core.Keyword(null,"campaigns","campaigns",971379925),new cljs.core.Keyword(null,"accounts","accounts",3171725144)),new cljs.core.Keyword(null,"line-items","line-items",4024096793),new cljs.core.Keyword(null,"campaigns","campaigns",971379925)),new cljs.core.Keyword(null,"promoted-accounts","promoted-accounts",3190129249),new cljs.core.Keyword(null,"line-items","line-items",4024096793)),new cljs.core.Keyword(null,"promoted-tweets","promoted-tweets",1060207837),new cljs.core.Keyword(null,"line-items","line-items",4024096793));
foundation.app.models.empty_targeting_criteria = cljs.core.PersistentHashMap.fromArrays(["GENDER","PHRASE_KEYWORD","EXACT_KEYWORD","FOLLOWERS_OF_USER","INTEREST","NEGATIVE_PHRASE_KEYWORD","TV_AD_TARGETING","PLATFORM","NEGATIVE_UNORDERED_KEYWORD","LOCATION","SIMILAR_TO_FOLLOWERS_OF_USER","UNORDERED_KEYWORD","NEGATIVE_EXACT_KEYWORD"],[cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY]);

//# sourceMappingURL=models.js.map