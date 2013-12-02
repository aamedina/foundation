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
foundation.app.xhr.get_cached = (function get_cached(uri){try{return cljs.reader.read_string(foundation.app.xhr.localstorage.get(uri));
}catch (e151989){if((e151989 instanceof Error))
{var e = e151989;return null;
} else
{if(cljs.core.constant$keyword$286)
{throw e151989;
} else
{return null;
}
}
}});
/**
* @param {...*} var_args
*/
foundation.app.xhr.assoc_in_cache_BANG_ = (function() { 
var assoc_in_cache_BANG___delegate = function (k,v,p__151990){var map__151993 = p__151990;var map__151993__$1 = ((cljs.core.seq_QMARK_(map__151993))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__151993):map__151993);var expiry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__151993__$1,cljs.core.constant$keyword$352);try{return foundation.app.xhr.localstorage.set(cljs.core.name(k),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v], 0)),expiry);
}catch (e151994){if((e151994 instanceof Error))
{var e = e151994;return null;
} else
{if(cljs.core.constant$keyword$286)
{throw e151994;
} else
{return null;
}
}
}};
var assoc_in_cache_BANG_ = function (k,v,var_args){
var p__151990 = null;if (arguments.length > 2) {
  p__151990 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return assoc_in_cache_BANG___delegate.call(this,k,v,p__151990);};
assoc_in_cache_BANG_.cljs$lang$maxFixedArity = 2;
assoc_in_cache_BANG_.cljs$lang$applyTo = (function (arglist__151995){
var k = cljs.core.first(arglist__151995);
arglist__151995 = cljs.core.next(arglist__151995);
var v = cljs.core.first(arglist__151995);
var p__151990 = cljs.core.rest(arglist__151995);
return assoc_in_cache_BANG___delegate(k,v,p__151990);
});
assoc_in_cache_BANG_.cljs$core$IFn$_invoke$arity$variadic = assoc_in_cache_BANG___delegate;
return assoc_in_cache_BANG_;
})()
;
foundation.app.xhr.parse_response = (function parse_response(response_body){var temp__4096__auto__ = cljs.core.constant$keyword$353.cljs$core$IFn$_invoke$arity$1(response_body);if(cljs.core.truth_(temp__4096__auto__))
{var data = temp__4096__auto__;return data;
} else
{return response_body;
}
});
foundation.app.xhr.on_success = (function on_success(uri,response_body){var data = foundation.app.xhr.parse_response(response_body);foundation.app.xhr.assoc_in_cache_BANG_.cljs$core$IFn$_invoke$arity$variadic(uri,data,cljs.core.array_seq([cljs.core.constant$keyword$352,cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(cljs_time.core.now(),cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$1(15))], 0));
return data;
});
foundation.app.xhr._STAR_headers_STAR_ = new cljs.core.PersistentArrayMap(null, 1, ["X-Requested-With","XMLHttpRequest"], null);
foundation.app.xhr.xhr_pool = (new goog.net.XhrManager(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$354,1,cljs.core.constant$keyword$355,6,cljs.core.constant$keyword$356,0], null))));
foundation.app.xhr.outstanding_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
foundation.app.xhr.clojurify_keys = (function clojurify_keys(m){var f = (function (p__151998){var vec__151999 = p__151998;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__151999,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__151999,1,null);if(typeof k === 'string')
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(k,/_/,"-")),v], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
}
});return clojure.walk.postwalk((function (x){if(cljs.core.map_QMARK_(x))
{return cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,x));
} else
{return x;
}
}),m);
});
foundation.app.xhr.stringify = (function stringify(kvs){return (JSON.stringify.cljs$core$IFn$_invoke$arity$1 ? JSON.stringify.cljs$core$IFn$_invoke$arity$1(cljs.core.clj__GT_js(cljs.core.reduce_kv((function (init,k,v){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(init,clojure.string.replace(cljs.core.name(k),/-/,"_"),v);
}),cljs.core.PersistentArrayMap.EMPTY,kvs))) : JSON.stringify.call(null,cljs.core.clj__GT_js(cljs.core.reduce_kv((function (init,k,v){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(init,clojure.string.replace(cljs.core.name(k),/-/,"_"),v);
}),cljs.core.PersistentArrayMap.EMPTY,kvs))));
});
foundation.app.xhr.handle_response = (function handle_response(res){var content_type = cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(res.getResponseHeader("Content-Type"),/;/));var body = (function (){var pred__152003 = cljs.core._EQ_;var expr__152004 = content_type;if(cljs.core.truth_((pred__152003.cljs$core$IFn$_invoke$arity$2 ? pred__152003.cljs$core$IFn$_invoke$arity$2("application/json",expr__152004) : pred__152003.call(null,"application/json",expr__152004))))
{return foundation.app.xhr.clojurify_keys(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(res.getResponseJson()));
} else
{if(cljs.core.truth_((pred__152003.cljs$core$IFn$_invoke$arity$2 ? pred__152003.cljs$core$IFn$_invoke$arity$2("application/edn",expr__152004) : pred__152003.call(null,"application/edn",expr__152004))))
{return cljs.reader.read_string(res.getResponseText());
} else
{return res.getResponseText();
}
}
})();var status = res.getStatus();var headers = res.getAllResponseHeaders();var body__$1 = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,200)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,201)))?foundation.app.xhr.on_success(res.getLastUri(),body):body);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$357,headers,cljs.core.constant$keyword$358,status,cljs.core.constant$keyword$359,body__$1], null);
});
foundation.app.xhr.xhr = (function xhr(uri,method,content,headers){var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var m = cljs.core.async.mult(c);var temp__4096__auto__ = foundation.app.xhr.get_cached(uri);if(cljs.core.truth_(temp__4096__auto__))
{var cached = temp__4096__auto__;var tapped = cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2(m,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0());cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(tapped,cached);
return tapped;
} else
{var temp__4096__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(foundation.app.xhr.outstanding_requests),uri);if(cljs.core.truth_(temp__4096__auto____$1))
{var source = temp__4096__auto____$1;return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2(source,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0());
} else
{try{foundation.app.xhr.xhr_pool.send(uri,uri,method,(((!(typeof content === 'string')) && (!((content == null))))?foundation.app.xhr.stringify(content):content),cljs.core.clj__GT_js(headers),50,(function (p1__152006_SHARP_){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,foundation.app.xhr.handle_response(p1__152006_SHARP_.target));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(foundation.app.xhr.outstanding_requests,cljs.core.dissoc,uri);
}),0);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(foundation.app.xhr.outstanding_requests,cljs.core.assoc,uri,m);
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2(m,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0());
}catch (e152008){if((e152008 instanceof Error))
{var e = e152008;return null;
} else
{if(cljs.core.constant$keyword$286)
{throw e152008;
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
var GET__delegate = function (uri,p__152009){var map__152011 = p__152009;var map__152011__$1 = ((cljs.core.seq_QMARK_(map__152011))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__152011):map__152011);var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__152011__$1,cljs.core.constant$keyword$357);return foundation.app.xhr.xhr(uri,"GET",null,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([foundation.app.xhr._STAR_headers_STAR_,headers], 0)));
};
var GET = function (uri,var_args){
var p__152009 = null;if (arguments.length > 1) {
  p__152009 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,uri,p__152009);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__152012){
var uri = cljs.core.first(arglist__152012);
var p__152009 = cljs.core.rest(arglist__152012);
return GET__delegate(uri,p__152009);
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
var POST__delegate = function (uri,p__152013){var map__152015 = p__152013;var map__152015__$1 = ((cljs.core.seq_QMARK_(map__152015))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__152015):map__152015);var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__152015__$1,cljs.core.constant$keyword$357,cljs.core.PersistentArrayMap.EMPTY);var body = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__152015__$1,cljs.core.constant$keyword$359,null);return foundation.app.xhr.xhr(uri,"POST",body,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([foundation.app.xhr._STAR_headers_STAR_,headers], 0)));
};
var POST = function (uri,var_args){
var p__152013 = null;if (arguments.length > 1) {
  p__152013 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return POST__delegate.call(this,uri,p__152013);};
POST.cljs$lang$maxFixedArity = 1;
POST.cljs$lang$applyTo = (function (arglist__152016){
var uri = cljs.core.first(arglist__152016);
var p__152013 = cljs.core.rest(arglist__152016);
return POST__delegate(uri,p__152013);
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
var PUT__delegate = function (uri,p__152017){var map__152019 = p__152017;var map__152019__$1 = ((cljs.core.seq_QMARK_(map__152019))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__152019):map__152019);var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__152019__$1,cljs.core.constant$keyword$357,cljs.core.PersistentArrayMap.EMPTY);var body = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__152019__$1,cljs.core.constant$keyword$359,null);return foundation.app.xhr.xhr(uri,"PUT",body,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([foundation.app.xhr._STAR_headers_STAR_,headers], 0)));
};
var PUT = function (uri,var_args){
var p__152017 = null;if (arguments.length > 1) {
  p__152017 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return PUT__delegate.call(this,uri,p__152017);};
PUT.cljs$lang$maxFixedArity = 1;
PUT.cljs$lang$applyTo = (function (arglist__152020){
var uri = cljs.core.first(arglist__152020);
var p__152017 = cljs.core.rest(arglist__152020);
return PUT__delegate(uri,p__152017);
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
var DELETE__delegate = function (uri,p__152021){var map__152023 = p__152021;var map__152023__$1 = ((cljs.core.seq_QMARK_(map__152023))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__152023):map__152023);var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__152023__$1,cljs.core.constant$keyword$357,cljs.core.PersistentArrayMap.EMPTY);var body = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__152023__$1,cljs.core.constant$keyword$359,null);return foundation.app.xhr.xhr(uri,"DELETE",null,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([foundation.app.xhr._STAR_headers_STAR_,headers], 0)));
};
var DELETE = function (uri,var_args){
var p__152021 = null;if (arguments.length > 1) {
  p__152021 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return DELETE__delegate.call(this,uri,p__152021);};
DELETE.cljs$lang$maxFixedArity = 1;
DELETE.cljs$lang$applyTo = (function (arglist__152024){
var uri = cljs.core.first(arglist__152024);
var p__152021 = cljs.core.rest(arglist__152024);
return DELETE__delegate(uri,p__152021);
});
DELETE.cljs$core$IFn$_invoke$arity$variadic = DELETE__delegate;
return DELETE;
})()
;
