// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.app.xhr');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('cljs.core.async');
goog.require('cljs_time.coerce');
goog.require('goog.net.XhrManager');
goog.require('cljs_time.core');
goog.require('goog.Uri.QueryData');
goog.require('cljs.core.async');
goog.require('goog.storage.mechanism.HTML5LocalStorage');
goog.require('goog.storage.ExpiringStorage');
goog.require('cljs.reader');
goog.require('clojure.walk');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('cljs_time.coerce');
goog.require('cljs_time.core');
foundation.app.xhr.localstorage = (new goog.storage.ExpiringStorage((new goog.storage.mechanism.HTML5LocalStorage())));
foundation.app.xhr.get_cached = (function get_cached(uri){try{return cljs.reader.read_string.call(null,foundation.app.xhr.localstorage.get(uri));
}catch (e37076){if((e37076 instanceof Error))
{var e = e37076;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37076;
} else
{return null;
}
}
}});
/**
* @param {...*} var_args
*/
foundation.app.xhr.assoc_in_cache_BANG_ = (function() { 
var assoc_in_cache_BANG___delegate = function (k,v,p__37077){var map__37080 = p__37077;var map__37080__$1 = ((cljs.core.seq_QMARK_.call(null,map__37080))?cljs.core.apply.call(null,cljs.core.hash_map,map__37080):map__37080);var expiry = cljs.core.get.call(null,map__37080__$1,new cljs.core.Keyword(null,"expiry","expiry",4019712165));try{return foundation.app.xhr.localstorage.set(cljs.core.name.call(null,k),cljs.core.pr_str.call(null,v),expiry);
}catch (e37081){if((e37081 instanceof Error))
{var e = e37081;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37081;
} else
{return null;
}
}
}};
var assoc_in_cache_BANG_ = function (k,v,var_args){
var p__37077 = null;if (arguments.length > 2) {
  p__37077 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return assoc_in_cache_BANG___delegate.call(this,k,v,p__37077);};
assoc_in_cache_BANG_.cljs$lang$maxFixedArity = 2;
assoc_in_cache_BANG_.cljs$lang$applyTo = (function (arglist__37082){
var k = cljs.core.first(arglist__37082);
arglist__37082 = cljs.core.next(arglist__37082);
var v = cljs.core.first(arglist__37082);
var p__37077 = cljs.core.rest(arglist__37082);
return assoc_in_cache_BANG___delegate(k,v,p__37077);
});
assoc_in_cache_BANG_.cljs$core$IFn$_invoke$arity$variadic = assoc_in_cache_BANG___delegate;
return assoc_in_cache_BANG_;
})()
;
foundation.app.xhr.parse_response = (function parse_response(response_body){var temp__4090__auto__ = new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(response_body);if(cljs.core.truth_(temp__4090__auto__))
{var data = temp__4090__auto__;return data;
} else
{return response_body;
}
});
foundation.app.xhr.on_success = (function on_success(uri,response_body){var data = foundation.app.xhr.parse_response.call(null,response_body);foundation.app.xhr.assoc_in_cache_BANG_.call(null,uri,data,new cljs.core.Keyword(null,"expiry","expiry",4019712165),cljs_time.core.plus.call(null,cljs_time.core.now.call(null),cljs_time.core.minutes.call(null,15)));
return data;
});
foundation.app.xhr._STAR_headers_STAR_ = new cljs.core.PersistentArrayMap(null, 1, ["X-Requested-With","XMLHttpRequest"], null);
foundation.app.xhr.xhr_pool = (new goog.net.XhrManager(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opt_minCount","opt_minCount",4732759387),1,new cljs.core.Keyword(null,"opt_maxCount","opt_maxCount",2213988745),6,new cljs.core.Keyword(null,"opt_maxRetries","opt_maxRetries",3384426432),0], null))));
foundation.app.xhr.outstanding_requests = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
foundation.app.xhr.clojurify_keys = (function clojurify_keys(m){var f = (function (p__37085){var vec__37086 = p__37085;var k = cljs.core.nth.call(null,vec__37086,0,null);var v = cljs.core.nth.call(null,vec__37086,1,null);if(typeof k === 'string')
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,clojure.string.replace.call(null,k,/_/,"-")),v], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
}
});return clojure.walk.postwalk.call(null,(function (x){if(cljs.core.map_QMARK_.call(null,x))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,f,x));
} else
{return x;
}
}),m);
});
foundation.app.xhr.stringify = (function stringify(kvs){return JSON.stringify.call(null,cljs.core.clj__GT_js.call(null,cljs.core.reduce_kv.call(null,(function (init,k,v){return cljs.core.assoc.call(null,init,clojure.string.replace.call(null,cljs.core.name.call(null,k),/-/,"_"),v);
}),cljs.core.PersistentArrayMap.EMPTY,kvs)));
});
foundation.app.xhr.handle_response = (function handle_response(res){var content_type = cljs.core.first.call(null,clojure.string.split.call(null,res.getResponseHeader("Content-Type"),/;/));var body = (function (){var pred__37090 = cljs.core._EQ_;var expr__37091 = content_type;if(cljs.core.truth_(pred__37090.call(null,"application/json",expr__37091)))
{return foundation.app.xhr.clojurify_keys.call(null,cljs.core.js__GT_clj.call(null,res.getResponseJson()));
} else
{if(cljs.core.truth_(pred__37090.call(null,"application/edn",expr__37091)))
{return cljs.reader.read_string.call(null,res.getResponseText());
} else
{return res.getResponseText();
}
}
})();var status = res.getStatus();var headers = res.getAllResponseHeaders();var body__$1 = (((cljs.core._EQ_.call(null,status,200)) || (cljs.core._EQ_.call(null,status,201)))?foundation.app.xhr.on_success.call(null,res.getLastUri(),body):body);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"headers","headers",1809212152),headers,new cljs.core.Keyword(null,"status","status",4416389988),status,new cljs.core.Keyword(null,"body","body",1016933652),body__$1], null);
});
foundation.app.xhr.xhr = (function xhr(uri,method,content,headers){var c = cljs.core.async.chan.call(null);var m = cljs.core.async.mult.call(null,c);var temp__4090__auto__ = foundation.app.xhr.get_cached.call(null,uri);if(cljs.core.truth_(temp__4090__auto__))
{var cached = temp__4090__auto__;var tapped = cljs.core.async.tap.call(null,m,cljs.core.async.chan.call(null));cljs.core.async.put_BANG_.call(null,tapped,cached);
return tapped;
} else
{var temp__4090__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,foundation.app.xhr.outstanding_requests),uri);if(cljs.core.truth_(temp__4090__auto____$1))
{var source = temp__4090__auto____$1;return cljs.core.async.tap.call(null,source,cljs.core.async.chan.call(null));
} else
{try{foundation.app.xhr.xhr_pool.send(uri,uri,method,(((!(typeof content === 'string')) && (!((content == null))))?foundation.app.xhr.stringify.call(null,content):content),cljs.core.clj__GT_js.call(null,headers),50,(function (p1__37093_SHARP_){cljs.core.async.put_BANG_.call(null,c,foundation.app.xhr.handle_response.call(null,p1__37093_SHARP_.target));
return cljs.core.swap_BANG_.call(null,foundation.app.xhr.outstanding_requests,cljs.core.dissoc,uri);
}),0);
cljs.core.swap_BANG_.call(null,foundation.app.xhr.outstanding_requests,cljs.core.assoc,uri,m);
return cljs.core.async.tap.call(null,m,cljs.core.async.chan.call(null));
}catch (e37095){if((e37095 instanceof Error))
{var e = e37095;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37095;
} else
{return null;
}
}
}}
}
});
/**
* Sends a GET request to the specified URI.
* @param {...*} var_args
*/
foundation.app.xhr.GET = (function() { 
var GET__delegate = function (uri,p__37096){var map__37098 = p__37096;var map__37098__$1 = ((cljs.core.seq_QMARK_.call(null,map__37098))?cljs.core.apply.call(null,cljs.core.hash_map,map__37098):map__37098);var headers = cljs.core.get.call(null,map__37098__$1,new cljs.core.Keyword(null,"headers","headers",1809212152));return foundation.app.xhr.xhr.call(null,uri,"GET",null,cljs.core.merge.call(null,foundation.app.xhr._STAR_headers_STAR_,headers));
};
var GET = function (uri,var_args){
var p__37096 = null;if (arguments.length > 1) {
  p__37096 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,uri,p__37096);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__37099){
var uri = cljs.core.first(arglist__37099);
var p__37096 = cljs.core.rest(arglist__37099);
return GET__delegate(uri,p__37096);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* Sends a POST request to the specified URI with the given payload.
* @param {...*} var_args
*/
foundation.app.xhr.POST = (function() { 
var POST__delegate = function (uri,p__37100){var map__37102 = p__37100;var map__37102__$1 = ((cljs.core.seq_QMARK_.call(null,map__37102))?cljs.core.apply.call(null,cljs.core.hash_map,map__37102):map__37102);var headers = cljs.core.get.call(null,map__37102__$1,new cljs.core.Keyword(null,"headers","headers",1809212152),cljs.core.PersistentArrayMap.EMPTY);var body = cljs.core.get.call(null,map__37102__$1,new cljs.core.Keyword(null,"body","body",1016933652),null);return foundation.app.xhr.xhr.call(null,uri,"POST",body,cljs.core.merge.call(null,foundation.app.xhr._STAR_headers_STAR_,headers));
};
var POST = function (uri,var_args){
var p__37100 = null;if (arguments.length > 1) {
  p__37100 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return POST__delegate.call(this,uri,p__37100);};
POST.cljs$lang$maxFixedArity = 1;
POST.cljs$lang$applyTo = (function (arglist__37103){
var uri = cljs.core.first(arglist__37103);
var p__37100 = cljs.core.rest(arglist__37103);
return POST__delegate(uri,p__37100);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* Sends a PUT request to the specified URI with the given payload.
* @param {...*} var_args
*/
foundation.app.xhr.PUT = (function() { 
var PUT__delegate = function (uri,p__37104){var map__37106 = p__37104;var map__37106__$1 = ((cljs.core.seq_QMARK_.call(null,map__37106))?cljs.core.apply.call(null,cljs.core.hash_map,map__37106):map__37106);var headers = cljs.core.get.call(null,map__37106__$1,new cljs.core.Keyword(null,"headers","headers",1809212152),cljs.core.PersistentArrayMap.EMPTY);var body = cljs.core.get.call(null,map__37106__$1,new cljs.core.Keyword(null,"body","body",1016933652),null);return foundation.app.xhr.xhr.call(null,uri,"PUT",body,cljs.core.merge.call(null,foundation.app.xhr._STAR_headers_STAR_,headers));
};
var PUT = function (uri,var_args){
var p__37104 = null;if (arguments.length > 1) {
  p__37104 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return PUT__delegate.call(this,uri,p__37104);};
PUT.cljs$lang$maxFixedArity = 1;
PUT.cljs$lang$applyTo = (function (arglist__37107){
var uri = cljs.core.first(arglist__37107);
var p__37104 = cljs.core.rest(arglist__37107);
return PUT__delegate(uri,p__37104);
});
PUT.cljs$core$IFn$_invoke$arity$variadic = PUT__delegate;
return PUT;
})()
;
/**
* Sends a DELETE request to the specified URI.
* @param {...*} var_args
*/
foundation.app.xhr.DELETE = (function() { 
var DELETE__delegate = function (uri,p__37108){var map__37110 = p__37108;var map__37110__$1 = ((cljs.core.seq_QMARK_.call(null,map__37110))?cljs.core.apply.call(null,cljs.core.hash_map,map__37110):map__37110);var headers = cljs.core.get.call(null,map__37110__$1,new cljs.core.Keyword(null,"headers","headers",1809212152),cljs.core.PersistentArrayMap.EMPTY);var body = cljs.core.get.call(null,map__37110__$1,new cljs.core.Keyword(null,"body","body",1016933652),null);return foundation.app.xhr.xhr.call(null,uri,"DELETE",null,cljs.core.merge.call(null,foundation.app.xhr._STAR_headers_STAR_,headers));
};
var DELETE = function (uri,var_args){
var p__37108 = null;if (arguments.length > 1) {
  p__37108 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return DELETE__delegate.call(this,uri,p__37108);};
DELETE.cljs$lang$maxFixedArity = 1;
DELETE.cljs$lang$applyTo = (function (arglist__37111){
var uri = cljs.core.first(arglist__37111);
var p__37108 = cljs.core.rest(arglist__37111);
return DELETE__delegate(uri,p__37108);
});
DELETE.cljs$core$IFn$_invoke$arity$variadic = DELETE__delegate;
return DELETE;
})()
;

//# sourceMappingURL=xhr.js.map