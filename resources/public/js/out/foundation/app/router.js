// Compiled by ClojureScript 0.0-2120
goog.provide('foundation.app.router');
goog.require('cljs.core');
goog.require('foundation.app');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async');
goog.require('goog.Uri');
goog.require('foundation.app');
goog.require('cljs.core.async');
goog.require('cljs.core.async.impl.channels');
goog.require('goog.string');
goog.require('foundation.app.ui');
goog.require('dommy.core');
goog.require('foundation.app.xhr');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('foundation.app');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('goog.history.Html5History');
goog.require('cljs.core.async');
goog.require('foundation.app.xhr');
goog.require('foundation.app.ui');
goog.require('dommy.core');
goog.require('goog.string');
cljs.core.enable_console_print_BANG_.call(null);
foundation.app.router._STAR_routes_STAR_ = null;
foundation.app.router.route = (function (){var method_table__9066__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__9067__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__9068__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__9069__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__9070__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("route",(function (req){return (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"method","method",4231316563).cljs$core$IFn$_invoke$arity$1(req),(function (p1__36592_SHARP_){if(cljs.core.empty_QMARK_.call(null,p1__36592_SHARP_))
{return "/";
} else
{return p1__36592_SHARP_;
}
}).call(null,clojure.string.join.call(null,"/",cljs.core.replace.call(null,clojure.set.map_invert.call(null,new cljs.core.Keyword(null,"route-params","route-params",4735447292).cljs$core$IFn$_invoke$arity$1(req)),clojure.string.split.call(null,new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(req),/\//))))],null));
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__9070__auto__,method_table__9066__auto__,prefer_table__9067__auto__,method_cache__9068__auto__,cached_hierarchy__9069__auto__));
})();
cljs.core._add_method.call(null,foundation.app.router.route,new cljs.core.Keyword(null,"default","default",2558708147),(function (req){return cljs.core.println.call(null,req);
}));
foundation.app.router.re_chars = cljs.core.reduce.call(null,(function (p1__36593_SHARP_,p2__36594_SHARP_){return cljs.core.assoc.call(null,p1__36593_SHARP_,p2__36594_SHARP_,[cljs.core.str("\\"),cljs.core.str(p2__36594_SHARP_)].join(''));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.set.call(null,"\\.*+|?()[]{}$^"));
/**
* Escape all special regex chars in a string.
*/
foundation.app.router.re_escape = (function re_escape(s){return clojure.string.escape.call(null,s,foundation.app.router.re_chars);
});
/**
* Decode a path segment in a URI. Defaults to using UTF-8 encoding.
*/
foundation.app.router.path_decode = (function path_decode(path){return decodeURI(clojure.string.replace.call(null,path,"+",encodeURI("+")));
});
/**
* Associate a key with a value. If the key already exists in the map,
* create a vector of values.
*/
foundation.app.router.assoc_vec = (function assoc_vec(m,k,v){return cljs.core.assoc.call(null,m,k,(function (){var temp__4090__auto__ = m.call(null,k);if(cljs.core.truth_(temp__4090__auto__))
{var cur = temp__4090__auto__;if(cljs.core.vector_QMARK_.call(null,cur))
{return cljs.core.conj.call(null,cur,v);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur,v], null);
}
} else
{return v;
}
})());
});
/**
* Create a hash-map from a series of regex match groups and a collection of
* keywords.
*/
foundation.app.router.assoc_keys_with_groups = (function assoc_keys_with_groups(groups,keys){return cljs.core.reduce.call(null,(function (m,p__36597){var vec__36598 = p__36597;var k = cljs.core.nth.call(null,vec__36598,0,null);var v = cljs.core.nth.call(null,vec__36598,1,null);return foundation.app.router.assoc_vec.call(null,m,k,v);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.vector,keys,groups));
});
/**
* Return the complete URL for the request.
*/
foundation.app.router.request_url = (function request_url(request){return [cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"scheme","scheme",4400883991).cljs$core$IFn$_invoke$arity$1(request))),cljs.core.str("://"),cljs.core.str(cljs.core.get_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",1809212152),"host"], null))),cljs.core.str(new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(request))].join('');
});
/**
* Return the path info for the request.
*/
foundation.app.router.path_info = (function path_info(request){var or__8228__auto__ = new cljs.core.Keyword(null,"path-info","path-info",589817032).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
} else
{return new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(request);
}
});
foundation.app.router.Route = (function (){var obj36600 = {};return obj36600;
})();
foundation.app.router.route_matches = (function route_matches(route,request){if((function (){var and__8216__auto__ = route;if(and__8216__auto__)
{return route.foundation$app$router$Route$route_matches$arity$2;
} else
{return and__8216__auto__;
}
})())
{return route.foundation$app$router$Route$route_matches$arity$2(route,request);
} else
{var x__8836__auto__ = (((route == null))?null:route);return (function (){var or__8228__auto__ = (foundation.app.router.route_matches[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (foundation.app.router.route_matches["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Route.route-matches",route);
}
}
})().call(null,route,request);
}
});

/**
* @constructor
* @param {*} re
* @param {*} keys
* @param {*} absolute_QMARK_
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
foundation.app.router.CompiledRoute = (function (re,keys,absolute_QMARK_,__meta,__extmap){
this.re = re;
this.keys = keys;
this.absolute_QMARK_ = absolute_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>3){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
foundation.app.router.CompiledRoute.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8790__auto__){var self__ = this;
var this__8790__auto____$1 = this;var h__8644__auto__ = self__.__hash;if(!((h__8644__auto__ == null)))
{return h__8644__auto__;
} else
{var h__8644__auto____$1 = cljs.core.hash_imap.call(null,this__8790__auto____$1);self__.__hash = h__8644__auto____$1;
return h__8644__auto____$1;
}
});
foundation.app.router.CompiledRoute.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8795__auto__,k__8796__auto__){var self__ = this;
var this__8795__auto____$1 = this;return cljs.core._lookup.call(null,this__8795__auto____$1,k__8796__auto__,null);
});
foundation.app.router.CompiledRoute.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8797__auto__,k36602,else__8798__auto__){var self__ = this;
var this__8797__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k36602,new cljs.core.Keyword(null,"re","re",1013907877)))
{return self__.re;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k36602,new cljs.core.Keyword(null,"keys","keys",1017192806)))
{return self__.keys;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k36602,new cljs.core.Keyword(null,"absolute?","absolute?",3046085914)))
{return self__.absolute_QMARK_;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k36602,else__8798__auto__);
} else
{return null;
}
}
}
}
});
foundation.app.router.CompiledRoute.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8802__auto__,k__8803__auto__,G__36601){var self__ = this;
var this__8802__auto____$1 = this;var pred__36604 = cljs.core.keyword_identical_QMARK_;var expr__36605 = k__8803__auto__;if(cljs.core.truth_(pred__36604.call(null,new cljs.core.Keyword(null,"re","re",1013907877),expr__36605)))
{return (new foundation.app.router.CompiledRoute(G__36601,self__.keys,self__.absolute_QMARK_,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__36604.call(null,new cljs.core.Keyword(null,"keys","keys",1017192806),expr__36605)))
{return (new foundation.app.router.CompiledRoute(self__.re,G__36601,self__.absolute_QMARK_,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__36604.call(null,new cljs.core.Keyword(null,"absolute?","absolute?",3046085914),expr__36605)))
{return (new foundation.app.router.CompiledRoute(self__.re,self__.keys,G__36601,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.router.CompiledRoute(self__.re,self__.keys,self__.absolute_QMARK_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8803__auto__,G__36601),null));
}
}
}
});
foundation.app.router.CompiledRoute.prototype.foundation$app$router$Route$ = true;
foundation.app.router.CompiledRoute.prototype.foundation$app$router$Route$route_matches$arity$2 = (function (route,request){var self__ = this;
var route__$1 = this;var path_info = (cljs.core.truth_(self__.absolute_QMARK_)?foundation.app.router.request_url.call(null,request):foundation.app.router.path_info.call(null,request));var temp__4090__auto__ = cljs.core.re_matches.call(null,self__.re,path_info);if(cljs.core.truth_(temp__4090__auto__))
{var matches = temp__4090__auto__;return foundation.app.router.assoc_keys_with_groups.call(null,cljs.core.map.call(null,foundation.app.router.path_decode,cljs.core.rest.call(null,matches)),self__.keys);
} else
{return null;
}
});
foundation.app.router.CompiledRoute.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8809__auto__,writer__8810__auto__,opts__8811__auto__){var self__ = this;
var this__8809__auto____$1 = this;var pr_pair__8812__auto__ = (function (keyval__8813__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8810__auto__,cljs.core.pr_writer,""," ","",opts__8811__auto__,keyval__8813__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__8810__auto__,pr_pair__8812__auto__,"#foundation.app.router.CompiledRoute{",", ","}",opts__8811__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"re","re",1013907877),self__.re],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"keys","keys",1017192806),self__.keys],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"absolute?","absolute?",3046085914),self__.absolute_QMARK_],null))], null),self__.__extmap));
});
foundation.app.router.CompiledRoute.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8800__auto__,entry__8801__auto__){var self__ = this;
var this__8800__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8801__auto__))
{return cljs.core._assoc.call(null,this__8800__auto____$1,cljs.core._nth.call(null,entry__8801__auto__,0),cljs.core._nth.call(null,entry__8801__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8800__auto____$1,entry__8801__auto__);
}
});
foundation.app.router.CompiledRoute.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8807__auto__){var self__ = this;
var this__8807__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"re","re",1013907877),self__.re],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"keys","keys",1017192806),self__.keys],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"absolute?","absolute?",3046085914),self__.absolute_QMARK_],null))], null),self__.__extmap));
});
foundation.app.router.CompiledRoute.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8799__auto__){var self__ = this;
var this__8799__auto____$1 = this;return (3 + cljs.core.count.call(null,self__.__extmap));
});
foundation.app.router.CompiledRoute.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8791__auto__,other__8792__auto__){var self__ = this;
var this__8791__auto____$1 = this;if(cljs.core.truth_((function (){var and__8216__auto__ = other__8792__auto__;if(cljs.core.truth_(and__8216__auto__))
{return ((this__8791__auto____$1.constructor === other__8792__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__8791__auto____$1,other__8792__auto__));
} else
{return and__8216__auto__;
}
})()))
{return true;
} else
{return false;
}
});
foundation.app.router.CompiledRoute.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8794__auto__,G__36601){var self__ = this;
var this__8794__auto____$1 = this;return (new foundation.app.router.CompiledRoute(self__.re,self__.keys,self__.absolute_QMARK_,G__36601,self__.__extmap,self__.__hash));
});
foundation.app.router.CompiledRoute.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8793__auto__){var self__ = this;
var this__8793__auto____$1 = this;return self__.__meta;
});
foundation.app.router.CompiledRoute.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8804__auto__,k__8805__auto__){var self__ = this;
var this__8804__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"absolute?","absolute?",3046085914),null,new cljs.core.Keyword(null,"re","re",1013907877),null,new cljs.core.Keyword(null,"keys","keys",1017192806),null], null), null),k__8805__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8804__auto____$1),self__.__meta),k__8805__auto__);
} else
{return (new foundation.app.router.CompiledRoute(self__.re,self__.keys,self__.absolute_QMARK_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8805__auto__)),null));
}
});
foundation.app.router.CompiledRoute.cljs$lang$type = true;
foundation.app.router.CompiledRoute.cljs$lang$ctorPrSeq = (function (this__8829__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"foundation.app.router/CompiledRoute");
});
foundation.app.router.CompiledRoute.cljs$lang$ctorPrWriter = (function (this__8829__auto__,writer__8830__auto__){return cljs.core._write.call(null,writer__8830__auto__,"foundation.app.router/CompiledRoute");
});
foundation.app.router.__GT_CompiledRoute = (function __GT_CompiledRoute(re,keys,absolute_QMARK_){return (new foundation.app.router.CompiledRoute(re,keys,absolute_QMARK_));
});
foundation.app.router.map__GT_CompiledRoute = (function map__GT_CompiledRoute(G__36603){return (new foundation.app.router.CompiledRoute(new cljs.core.Keyword(null,"re","re",1013907877).cljs$core$IFn$_invoke$arity$1(G__36603),new cljs.core.Keyword(null,"keys","keys",1017192806).cljs$core$IFn$_invoke$arity$1(G__36603),new cljs.core.Keyword(null,"absolute?","absolute?",3046085914).cljs$core$IFn$_invoke$arity$1(G__36603),null,cljs.core.dissoc.call(null,G__36603,new cljs.core.Keyword(null,"re","re",1013907877),new cljs.core.Keyword(null,"keys","keys",1017192806),new cljs.core.Keyword(null,"absolute?","absolute?",3046085914))));
});
/**
* Lex one symbol from a string, and return the symbol and trailing source.
*/
foundation.app.router.lex_1 = (function lex_1(src,clauses){return cljs.core.some.call(null,(function (p__36609){var vec__36610 = p__36609;var re = cljs.core.nth.call(null,vec__36610,0,null);var action = cljs.core.nth.call(null,vec__36610,1,null);var matches = re.exec(src);if(cljs.core.truth_(goog.string.startsWith(src,cljs.core.first.call(null,matches))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.fn_QMARK_.call(null,action))?action.call(null,matches):action),cljs.core.subs.call(null,src,cljs.core.count.call(null,cljs.core.first.call(null,matches)))], null);
} else
{return null;
}
}),cljs.core.partition.call(null,2,clauses));
});
/**
* Lex a string into tokens by matching against regexs and evaluating
* the matching associated function.
* @param {...*} var_args
*/
foundation.app.router.lex = (function() { 
var lex__delegate = function (src,clauses){var results = cljs.core.PersistentVector.EMPTY;var src__$1 = src;var clauses__$1 = clauses;while(true){
var temp__4090__auto__ = foundation.app.router.lex_1.call(null,src__$1,clauses__$1);if(cljs.core.truth_(temp__4090__auto__))
{var vec__36612 = temp__4090__auto__;var result = cljs.core.nth.call(null,vec__36612,0,null);var src__$2 = cljs.core.nth.call(null,vec__36612,1,null);var results__$1 = cljs.core.conj.call(null,results,result);if(cljs.core._EQ_.call(null,src__$2,""))
{return results__$1;
} else
{{
var G__36613 = results__$1;
var G__36614 = src__$2;
var G__36615 = clauses__$1;
results = G__36613;
src__$1 = G__36614;
clauses__$1 = G__36615;
continue;
}
}
} else
{return null;
}
break;
}
};
var lex = function (src,var_args){
var clauses = null;if (arguments.length > 1) {
  clauses = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return lex__delegate.call(this,src,clauses);};
lex.cljs$lang$maxFixedArity = 1;
lex.cljs$lang$applyTo = (function (arglist__36616){
var src = cljs.core.first(arglist__36616);
var clauses = cljs.core.rest(arglist__36616);
return lex__delegate(src,clauses);
});
lex.cljs$core$IFn$_invoke$arity$variadic = lex__delegate;
return lex;
})()
;
/**
* True if the path contains an absolute or scheme-relative URL.
*/
foundation.app.router.absolute_url_QMARK_ = (function absolute_url_QMARK_(path){return cljs.core.boolean$.call(null,cljs.core.re_matches.call(null,/(https?:)?\/\/.*/,path));
});
/**
* Compile a path string using the routes syntax into a uri-matcher struct.
*/
foundation.app.router.route_compile = (function() {
var route_compile = null;
var route_compile__1 = (function (path){return route_compile.call(null,path,cljs.core.PersistentArrayMap.EMPTY);
});
var route_compile__2 = (function (path,regexs){var splat = /\*/;var word = /:([^:\/.0-9][^:\/.]*)/;var literal = /((:[\/0-9]+)|[^:*]+)/;var word_group = ((function (splat,word,literal){
return (function (p1__36617_SHARP_){return cljs.core.keyword.call(null,cljs.core.nth.call(null,p1__36617_SHARP_,1));
});})(splat,word,literal))
;var word_regex = ((function (splat,word,literal,word_group){
return (function (p1__36618_SHARP_){return regexs.call(null,word_group.call(null,p1__36618_SHARP_),/[^\/,;?]+/);
});})(splat,word,literal,word_group))
;return (new foundation.app.router.CompiledRoute(cljs.core.re_pattern.call(null,cljs.core.apply.call(null,cljs.core.str,foundation.app.router.lex.call(null,path,splat,"(.*)",/^\/\//,"https?://",word,(function (p1__36619_SHARP_){return [cljs.core.str("("),cljs.core.str(word_regex.call(null,p1__36619_SHARP_).source),cljs.core.str(")")].join('');
}),literal,(function (p1__36620_SHARP_){return foundation.app.router.re_escape.call(null,cljs.core.first.call(null,p1__36620_SHARP_));
})))),cljs.core.remove.call(null,cljs.core.nil_QMARK_,foundation.app.router.lex.call(null,path,splat,new cljs.core.Keyword(null,"*","*",1013904284),word,word_group,literal,null)),foundation.app.router.absolute_url_QMARK_.call(null,path)));
});
route_compile = function(path,regexs){
switch(arguments.length){
case 1:
return route_compile__1.call(this,path);
case 2:
return route_compile__2.call(this,path,regexs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
route_compile.cljs$core$IFn$_invoke$arity$1 = route_compile__1;
route_compile.cljs$core$IFn$_invoke$arity$2 = route_compile__2;
return route_compile;
})()
;
(foundation.app.router.Route["string"] = true);
(foundation.app.router.route_matches["string"] = (function (route,request){return foundation.app.router.route_matches.call(null,foundation.app.router.route_compile.call(null,route),request);
}));
foundation.app.router.IResponse = (function (){var obj36622 = {};return obj36622;
})();
foundation.app.router._response = (function _response(body,request){if((function (){var and__8216__auto__ = body;if(and__8216__auto__)
{return body.foundation$app$router$IResponse$_response$arity$2;
} else
{return and__8216__auto__;
}
})())
{return body.foundation$app$router$IResponse$_response$arity$2(body,request);
} else
{var x__8836__auto__ = (((body == null))?null:body);return (function (){var or__8228__auto__ = (foundation.app.router._response[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (foundation.app.router._response["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IResponse.-response",body);
}
}
})().call(null,body,request);
}
});
(foundation.app.router.IResponse["_"] = true);
(foundation.app.router._response["_"] = (function (o,req){if((function (){var G__36625 = o;if(G__36625)
{var bit__8852__auto__ = null;if(cljs.core.truth_((function (){var or__8228__auto__ = bit__8852__auto__;if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
} else
{return G__36625.foundation$app$ui$IComponent$;
}
})()))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return foundation.app.ui.render.call(null,o);
} else
{if(cljs.core.sequential_QMARK_.call(null,o))
{return cljs.core.map.call(null,(function (p1__36624_SHARP_){return foundation.app.router._response.call(null,p1__36624_SHARP_,req);
}),o);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return o;
} else
{return null;
}
}
}
}));
cljs.core.MultiFn.prototype.foundation$app$router$IResponse$ = true;
cljs.core.MultiFn.prototype.foundation$app$router$IResponse$_response$arity$2 = (function (multifn,req){var multifn__$1 = this;return foundation.app.router._response.call(null,multifn__$1.call(null,req),req);
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.foundation$app$router$IResponse$ = true;
cljs.core.async.impl.channels.ManyToManyChannel.prototype.foundation$app$router$IResponse$_response$arity$2 = (function (c,request){var c__$1 = this;return cljs.core.async.map_GT_.call(null,(function (p1__36623_SHARP_){return foundation.app.router._response.call(null,p1__36623_SHARP_,request);
}),c__$1);
});
cljs.core.PersistentVector.prototype.foundation$app$router$IResponse$ = true;
cljs.core.PersistentVector.prototype.foundation$app$router$IResponse$_response$arity$2 = (function (messages,_){var messages__$1 = this;var temp__4092__auto__ = new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(foundation.app._STAR_app_STAR_);if(cljs.core.truth_(temp__4092__auto__))
{var input_queue = temp__4092__auto__;var seq__36626 = cljs.core.seq.call(null,messages__$1);var chunk__36627 = null;var count__36628 = 0;var i__36629 = 0;while(true){
if((i__36629 < count__36628))
{var message = cljs.core._nth.call(null,chunk__36627,i__36629);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(foundation.app._STAR_app_STAR_),message);
{
var G__36630 = seq__36626;
var G__36631 = chunk__36627;
var G__36632 = count__36628;
var G__36633 = (i__36629 + 1);
seq__36626 = G__36630;
chunk__36627 = G__36631;
count__36628 = G__36632;
i__36629 = G__36633;
continue;
}
} else
{var temp__4092__auto____$1 = cljs.core.seq.call(null,seq__36626);if(temp__4092__auto____$1)
{var seq__36626__$1 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36626__$1))
{var c__8957__auto__ = cljs.core.chunk_first.call(null,seq__36626__$1);{
var G__36634 = cljs.core.chunk_rest.call(null,seq__36626__$1);
var G__36635 = c__8957__auto__;
var G__36636 = cljs.core.count.call(null,c__8957__auto__);
var G__36637 = 0;
seq__36626 = G__36634;
chunk__36627 = G__36635;
count__36628 = G__36636;
i__36629 = G__36637;
continue;
}
} else
{var message = cljs.core.first.call(null,seq__36626__$1);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(foundation.app._STAR_app_STAR_),message);
{
var G__36638 = cljs.core.next.call(null,seq__36626__$1);
var G__36639 = null;
var G__36640 = 0;
var G__36641 = 0;
seq__36626 = G__36638;
chunk__36627 = G__36639;
count__36628 = G__36640;
i__36629 = G__36641;
continue;
}
}
} else
{return null;
}
}
break;
}
} else
{return null;
}
});
cljs.core.Atom.prototype.foundation$app$router$IResponse$ = true;
cljs.core.Atom.prototype.foundation$app$router$IResponse$_response$arity$2 = (function (ref,request){var ref__$1 = this;return foundation.app.router._response.call(null,cljs.core.deref.call(null,ref__$1),request);
});
(foundation.app.router.IResponse["function"] = true);
(foundation.app.router._response["function"] = (function (f,request){return foundation.app.router._response.call(null,f.call(null,request),request);
}));
(foundation.app.router.IResponse["string"] = true);
(foundation.app.router._response["string"] = (function (body,_){return body;
}));
(foundation.app.router.IResponse["null"] = true);
(foundation.app.router._response["null"] = (function (_,___$1){return null;
}));
foundation.app.router.method_matches_QMARK_ = (function method_matches_QMARK_(method,request){var request_method = new cljs.core.Keyword(null,"method","method",4231316563).cljs$core$IFn$_invoke$arity$1(request);var form_method = cljs.core.get_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form-params","form-params",3454215713),"_method"], null));if(cljs.core.truth_((function (){var and__8216__auto__ = form_method;if(cljs.core.truth_(and__8216__auto__))
{return cljs.core._EQ_.call(null,request_method,new cljs.core.Keyword(null,"post","post",1017351186));
} else
{return and__8216__auto__;
}
})()))
{return cljs.core._EQ_.call(null,clojure.string.upper_case.call(null,cljs.core.name.call(null,method)),clojure.string.upper_case.call(null,form_method));
} else
{return cljs.core._EQ_.call(null,method,request_method);
}
});
foundation.app.router.if_method = (function if_method(method,handler){return (function (request){if(((method == null)) || (foundation.app.router.method_matches_QMARK_.call(null,method,request)))
{return handler.call(null,request);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"get","get",1014006472),method))
{var G__36643 = handler.call(null,request);var G__36643__$1 = (((G__36643 == null))?null:cljs.core.assoc.call(null,G__36643,new cljs.core.Keyword(null,"body","body",1016933652),null));return G__36643__$1;
} else
{return null;
}
}
});
});
foundation.app.router.assoc_route_params = (function assoc_route_params(request,params){return cljs.core.merge_with.call(null,cljs.core.merge,request,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"route-params","route-params",4735447292),params,new cljs.core.Keyword(null,"params","params",4313443576),params], null));
});
/**
* Evaluate the handler if the route matches the request.
*/
foundation.app.router.if_route = (function if_route(route,handler){return (function (request){var temp__4090__auto__ = foundation.app.router.route_matches.call(null,route,request);if(cljs.core.truth_(temp__4090__auto__))
{var params = temp__4090__auto__;return handler.call(null,foundation.app.router.assoc_route_params.call(null,request,params));
} else
{return null;
}
});
});
/**
* @param {...*} var_args
*/
foundation.app.router.routing = (function() { 
var routing__delegate = function (request,handlers){return cljs.core.some.call(null,(function (p1__36644_SHARP_){return p1__36644_SHARP_.call(null,request);
}),handlers);
};
var routing = function (request,var_args){
var handlers = null;if (arguments.length > 1) {
  handlers = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return routing__delegate.call(this,request,handlers);};
routing.cljs$lang$maxFixedArity = 1;
routing.cljs$lang$applyTo = (function (arglist__36645){
var request = cljs.core.first(arglist__36645);
var handlers = cljs.core.rest(arglist__36645);
return routing__delegate(request,handlers);
});
routing.cljs$core$IFn$_invoke$arity$variadic = routing__delegate;
return routing;
})()
;
/**
* @param {...*} var_args
*/
foundation.app.router.routes = (function() { 
var routes__delegate = function (handlers){return (function (p1__36646_SHARP_){return cljs.core.apply.call(null,foundation.app.router.routing,p1__36646_SHARP_,handlers);
});
};
var routes = function (var_args){
var handlers = null;if (arguments.length > 0) {
  handlers = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return routes__delegate.call(this,handlers);};
routes.cljs$lang$maxFixedArity = 0;
routes.cljs$lang$applyTo = (function (arglist__36647){
var handlers = cljs.core.seq(arglist__36647);
return routes__delegate(handlers);
});
routes.cljs$core$IFn$_invoke$arity$variadic = routes__delegate;
return routes;
})()
;
foundation.app.router.make_route = (function make_route(method,route,handler){return foundation.app.router.if_method.call(null,method,foundation.app.router.if_route.call(null,route,(function (request){return foundation.app.router._response.call(null,handler.call(null,request),request);
})));
});
foundation.app.router.remove_suffix = (function remove_suffix(path,suffix){return cljs.core.subs.call(null,path,0,(cljs.core.count.call(null,path) - cljs.core.count.call(null,suffix)));
});
foundation.app.router.wrap_context = (function wrap_context(handler){return (function (request){var uri = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(request);var path = new cljs.core.Keyword(null,"path-info","path-info",589817032).cljs$core$IFn$_invoke$arity$2(request,uri);var context = (function (){var or__8228__auto__ = new cljs.core.Keyword(null,"context","context",1965435169).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
} else
{return "";
}
})();var subpath = new cljs.core.Keyword(null,"__path-info","__path-info",4484183272).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"route-params","route-params",4735447292).cljs$core$IFn$_invoke$arity$1(request));return handler.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"path-info","path-info",589817032),((cljs.core._EQ_.call(null,subpath,""))?"/":subpath)),new cljs.core.Keyword(null,"context","context",1965435169),foundation.app.router.remove_suffix.call(null,uri,subpath)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"__path-info","__path-info",4484183272)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-params","route-params",4735447292)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"__path-info","__path-info",4484183272)));
});
});
foundation.app.router.on_navigate = (function on_navigate(e){if(cljs.core.truth_(e.isNavigation))
{if(cljs.core.not_EQ_.call(null,"index",e.token))
{return e.token;
} else
{return "";
}
} else
{return null;
}
});
foundation.app.router.router = (cljs.core.truth_(goog.history.Html5History.isSupported())?(function (){var G__36648 = (new goog.history.Html5History());G__36648.setUseFragment(false);
G__36648.addEventListener(goog.history.EventType.NAVIGATE,foundation.app.router.on_navigate);
G__36648.setEnabled(true);
return G__36648;
})():null);
/**
* @param {...*} var_args
*/
foundation.app.router.navigate_BANG_ = (function() { 
var navigate_BANG___delegate = function (uri,p__36649){var map__36651 = p__36649;var map__36651__$1 = ((cljs.core.seq_QMARK_.call(null,map__36651))?cljs.core.apply.call(null,cljs.core.hash_map,map__36651):map__36651);var params = cljs.core.get.call(null,map__36651__$1,new cljs.core.Keyword(null,"params","params",4313443576));var method = cljs.core.get.call(null,map__36651__$1,new cljs.core.Keyword(null,"method","method",4231316563));var uri__$1 = (new goog.Uri(uri));var path = clojure.string.replace.call(null,uri__$1.getPath(),/^\//,"");foundation.app.router.router.setToken(path);
return foundation.app.router._STAR_routes_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"uri","uri",1014020318),uri__$1.getPath(),new cljs.core.Keyword(null,"method","method",4231316563),method,new cljs.core.Keyword(null,"params","params",4313443576),clojure.walk.keywordize_keys.call(null,cljs.core.apply.call(null,cljs.core.hash_map,clojure.string.split.call(null,[cljs.core.str(uri__$1.getQuery())].join(''),/=/)))], null));
};
var navigate_BANG_ = function (uri,var_args){
var p__36649 = null;if (arguments.length > 1) {
  p__36649 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return navigate_BANG___delegate.call(this,uri,p__36649);};
navigate_BANG_.cljs$lang$maxFixedArity = 1;
navigate_BANG_.cljs$lang$applyTo = (function (arglist__36652){
var uri = cljs.core.first(arglist__36652);
var p__36649 = cljs.core.rest(arglist__36652);
return navigate_BANG___delegate(uri,p__36649);
});
navigate_BANG_.cljs$core$IFn$_invoke$arity$variadic = navigate_BANG___delegate;
return navigate_BANG_;
})()
;

//# sourceMappingURL=router.js.map