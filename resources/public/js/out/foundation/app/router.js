// Compiled by ClojureScript 0.0-2120
goog.provide('foundation.app.router');
goog.require('cljs.core');
goog.require('dommy.core');
goog.require('dommy.core');
goog.require('goog.string');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.string');
foundation.app.router.re_chars = cljs.core.reduce.call(null,(function (p1__11446_SHARP_,p2__11447_SHARP_){return cljs.core.assoc.call(null,p1__11446_SHARP_,p2__11447_SHARP_,[cljs.core.str("\\"),cljs.core.str(p2__11447_SHARP_)].join(''));
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
foundation.app.router.assoc_keys_with_groups = (function assoc_keys_with_groups(groups,keys){return cljs.core.reduce.call(null,(function (m,p__11450){var vec__11451 = p__11450;var k = cljs.core.nth.call(null,vec__11451,0,null);var v = cljs.core.nth.call(null,vec__11451,1,null);return foundation.app.router.assoc_vec.call(null,m,k,v);
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
foundation.app.router.path_info = (function path_info(request){var or__8198__auto__ = new cljs.core.Keyword(null,"path-info","path-info",589817032).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__8198__auto__))
{return or__8198__auto__;
} else
{return new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(request);
}
});
foundation.app.router.Route = (function (){var obj11453 = {};return obj11453;
})();
foundation.app.router.route_matches = (function route_matches(route,request){if((function (){var and__8186__auto__ = route;if(and__8186__auto__)
{return route.foundation$app$router$Route$route_matches$arity$2;
} else
{return and__8186__auto__;
}
})())
{return route.foundation$app$router$Route$route_matches$arity$2(route,request);
} else
{var x__8806__auto__ = (((route == null))?null:route);return (function (){var or__8198__auto__ = (foundation.app.router.route_matches[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (foundation.app.router.route_matches["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
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
foundation.app.router.CompiledRoute.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8760__auto__){var self__ = this;
var this__8760__auto____$1 = this;var h__8614__auto__ = self__.__hash;if(!((h__8614__auto__ == null)))
{return h__8614__auto__;
} else
{var h__8614__auto____$1 = cljs.core.hash_imap.call(null,this__8760__auto____$1);self__.__hash = h__8614__auto____$1;
return h__8614__auto____$1;
}
});
foundation.app.router.CompiledRoute.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8765__auto__,k__8766__auto__){var self__ = this;
var this__8765__auto____$1 = this;return cljs.core._lookup.call(null,this__8765__auto____$1,k__8766__auto__,null);
});
foundation.app.router.CompiledRoute.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8767__auto__,k11455,else__8768__auto__){var self__ = this;
var this__8767__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k11455,new cljs.core.Keyword(null,"re","re",1013907877)))
{return self__.re;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k11455,new cljs.core.Keyword(null,"keys","keys",1017192806)))
{return self__.keys;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k11455,new cljs.core.Keyword(null,"absolute?","absolute?",3046085914)))
{return self__.absolute_QMARK_;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k11455,else__8768__auto__);
} else
{return null;
}
}
}
}
});
foundation.app.router.CompiledRoute.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8772__auto__,k__8773__auto__,G__11454){var self__ = this;
var this__8772__auto____$1 = this;var pred__11457 = cljs.core.keyword_identical_QMARK_;var expr__11458 = k__8773__auto__;if(cljs.core.truth_(pred__11457.call(null,new cljs.core.Keyword(null,"re","re",1013907877),expr__11458)))
{return (new foundation.app.router.CompiledRoute(G__11454,self__.keys,self__.absolute_QMARK_,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__11457.call(null,new cljs.core.Keyword(null,"keys","keys",1017192806),expr__11458)))
{return (new foundation.app.router.CompiledRoute(self__.re,G__11454,self__.absolute_QMARK_,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__11457.call(null,new cljs.core.Keyword(null,"absolute?","absolute?",3046085914),expr__11458)))
{return (new foundation.app.router.CompiledRoute(self__.re,self__.keys,G__11454,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.router.CompiledRoute(self__.re,self__.keys,self__.absolute_QMARK_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8773__auto__,G__11454),null));
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
foundation.app.router.CompiledRoute.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8779__auto__,writer__8780__auto__,opts__8781__auto__){var self__ = this;
var this__8779__auto____$1 = this;var pr_pair__8782__auto__ = (function (keyval__8783__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8780__auto__,cljs.core.pr_writer,""," ","",opts__8781__auto__,keyval__8783__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__8780__auto__,pr_pair__8782__auto__,"#foundation.app.router.CompiledRoute{",", ","}",opts__8781__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"re","re",1013907877),self__.re],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"keys","keys",1017192806),self__.keys],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"absolute?","absolute?",3046085914),self__.absolute_QMARK_],null))], null),self__.__extmap));
});
foundation.app.router.CompiledRoute.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8770__auto__,entry__8771__auto__){var self__ = this;
var this__8770__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8771__auto__))
{return cljs.core._assoc.call(null,this__8770__auto____$1,cljs.core._nth.call(null,entry__8771__auto__,0),cljs.core._nth.call(null,entry__8771__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8770__auto____$1,entry__8771__auto__);
}
});
foundation.app.router.CompiledRoute.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8777__auto__){var self__ = this;
var this__8777__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"re","re",1013907877),self__.re],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"keys","keys",1017192806),self__.keys],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"absolute?","absolute?",3046085914),self__.absolute_QMARK_],null))], null),self__.__extmap));
});
foundation.app.router.CompiledRoute.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8769__auto__){var self__ = this;
var this__8769__auto____$1 = this;return (3 + cljs.core.count.call(null,self__.__extmap));
});
foundation.app.router.CompiledRoute.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8761__auto__,other__8762__auto__){var self__ = this;
var this__8761__auto____$1 = this;if(cljs.core.truth_((function (){var and__8186__auto__ = other__8762__auto__;if(cljs.core.truth_(and__8186__auto__))
{return ((this__8761__auto____$1.constructor === other__8762__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__8761__auto____$1,other__8762__auto__));
} else
{return and__8186__auto__;
}
})()))
{return true;
} else
{return false;
}
});
foundation.app.router.CompiledRoute.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8764__auto__,G__11454){var self__ = this;
var this__8764__auto____$1 = this;return (new foundation.app.router.CompiledRoute(self__.re,self__.keys,self__.absolute_QMARK_,G__11454,self__.__extmap,self__.__hash));
});
foundation.app.router.CompiledRoute.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8763__auto__){var self__ = this;
var this__8763__auto____$1 = this;return self__.__meta;
});
foundation.app.router.CompiledRoute.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8774__auto__,k__8775__auto__){var self__ = this;
var this__8774__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"absolute?","absolute?",3046085914),null,new cljs.core.Keyword(null,"re","re",1013907877),null,new cljs.core.Keyword(null,"keys","keys",1017192806),null], null), null),k__8775__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8774__auto____$1),self__.__meta),k__8775__auto__);
} else
{return (new foundation.app.router.CompiledRoute(self__.re,self__.keys,self__.absolute_QMARK_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8775__auto__)),null));
}
});
foundation.app.router.CompiledRoute.cljs$lang$type = true;
foundation.app.router.CompiledRoute.cljs$lang$ctorPrSeq = (function (this__8799__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"foundation.app.router/CompiledRoute");
});
foundation.app.router.CompiledRoute.cljs$lang$ctorPrWriter = (function (this__8799__auto__,writer__8800__auto__){return cljs.core._write.call(null,writer__8800__auto__,"foundation.app.router/CompiledRoute");
});
foundation.app.router.__GT_CompiledRoute = (function __GT_CompiledRoute(re,keys,absolute_QMARK_){return (new foundation.app.router.CompiledRoute(re,keys,absolute_QMARK_));
});
foundation.app.router.map__GT_CompiledRoute = (function map__GT_CompiledRoute(G__11456){return (new foundation.app.router.CompiledRoute(new cljs.core.Keyword(null,"re","re",1013907877).cljs$core$IFn$_invoke$arity$1(G__11456),new cljs.core.Keyword(null,"keys","keys",1017192806).cljs$core$IFn$_invoke$arity$1(G__11456),new cljs.core.Keyword(null,"absolute?","absolute?",3046085914).cljs$core$IFn$_invoke$arity$1(G__11456),null,cljs.core.dissoc.call(null,G__11456,new cljs.core.Keyword(null,"re","re",1013907877),new cljs.core.Keyword(null,"keys","keys",1017192806),new cljs.core.Keyword(null,"absolute?","absolute?",3046085914))));
});
/**
* Lex one symbol from a string, and return the symbol and trailing source.
*/
foundation.app.router.lex_1 = (function lex_1(src,clauses){return cljs.core.some.call(null,(function (p__11462){var vec__11463 = p__11462;var re = cljs.core.nth.call(null,vec__11463,0,null);var action = cljs.core.nth.call(null,vec__11463,1,null);var matches = re.exec(src);if(cljs.core.truth_(goog.string.startsWith(src,cljs.core.first.call(null,matches))))
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
{var vec__11465 = temp__4090__auto__;var result = cljs.core.nth.call(null,vec__11465,0,null);var src__$2 = cljs.core.nth.call(null,vec__11465,1,null);var results__$1 = cljs.core.conj.call(null,results,result);if(cljs.core._EQ_.call(null,src__$2,""))
{return results__$1;
} else
{{
var G__11466 = results__$1;
var G__11467 = src__$2;
var G__11468 = clauses__$1;
results = G__11466;
src__$1 = G__11467;
clauses__$1 = G__11468;
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
lex.cljs$lang$applyTo = (function (arglist__11469){
var src = cljs.core.first(arglist__11469);
var clauses = cljs.core.rest(arglist__11469);
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
return (function (p1__11470_SHARP_){return cljs.core.keyword.call(null,cljs.core.nth.call(null,p1__11470_SHARP_,1));
});})(splat,word,literal))
;var word_regex = ((function (splat,word,literal,word_group){
return (function (p1__11471_SHARP_){return regexs.call(null,word_group.call(null,p1__11471_SHARP_),/[^\/,;?]+/);
});})(splat,word,literal,word_group))
;return (new foundation.app.router.CompiledRoute(cljs.core.re_pattern.call(null,cljs.core.apply.call(null,cljs.core.str,foundation.app.router.lex.call(null,path,splat,"(.*)",/^\/\//,"https?://",word,(function (p1__11472_SHARP_){return [cljs.core.str("("),cljs.core.str(word_regex.call(null,p1__11472_SHARP_).source),cljs.core.str(")")].join('');
}),literal,(function (p1__11473_SHARP_){return foundation.app.router.re_escape.call(null,cljs.core.first.call(null,p1__11473_SHARP_));
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
foundation.app.router.response = (function response(body){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",4416389988),200,new cljs.core.Keyword(null,"headers","headers",1809212152),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",1016933652),body], null);
});
foundation.app.router.IRenderable = (function (){var obj11475 = {};return obj11475;
})();
foundation.app.router._render = (function _render(_,request){if((function (){var and__8186__auto__ = _;if(and__8186__auto__)
{return _.foundation$app$router$IRenderable$_render$arity$2;
} else
{return and__8186__auto__;
}
})())
{return _.foundation$app$router$IRenderable$_render$arity$2(_,request);
} else
{var x__8806__auto__ = (((_ == null))?null:_);return (function (){var or__8198__auto__ = (foundation.app.router._render[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (foundation.app.router._render["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderable.-render",_);
}
}
})().call(null,_,request);
}
});
(foundation.app.router.IRenderable["_"] = true);
(foundation.app.router._render["_"] = (function (coll,_){if(cljs.core.sequential_QMARK_.call(null,coll))
{return dommy.template.__GT_node_like.call(null,coll);
} else
{return null;
}
}));
cljs.core.Atom.prototype.foundation$app$router$IRenderable$ = true;
cljs.core.Atom.prototype.foundation$app$router$IRenderable$_render$arity$2 = (function (ref,request){var ref__$1 = this;return foundation.app.router._render.call(null,cljs.core.deref.call(null,ref__$1),request);
});
(foundation.app.router.IRenderable["function"] = true);
(foundation.app.router._render["function"] = (function (f,request){return foundation.app.router._render.call(null,f.call(null,request),request);
}));
(foundation.app.router.IRenderable["string"] = true);
(foundation.app.router._render["string"] = (function (body,_){return dommy.template.__GT_node_like.call(null,body);
}));
(foundation.app.router.IRenderable["null"] = true);
(foundation.app.router._render["null"] = (function (_,___$1){return null;
}));
foundation.app.router.method_matches_QMARK_ = (function method_matches_QMARK_(method,request){var request_method = new cljs.core.Keyword(null,"method","method",4231316563).cljs$core$IFn$_invoke$arity$1(request);var form_method = cljs.core.get_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form-params","form-params",3454215713),"_method"], null));if(cljs.core.truth_((function (){var and__8186__auto__ = form_method;if(cljs.core.truth_(and__8186__auto__))
{return cljs.core._EQ_.call(null,request_method,new cljs.core.Keyword(null,"post","post",1017351186));
} else
{return and__8186__auto__;
}
})()))
{return cljs.core._EQ_.call(null,str.upper_case.call(null,cljs.core.name.call(null,method)),str.upper_case.call(null,form_method));
} else
{return cljs.core._EQ_.call(null,method,request_method);
}
});
foundation.app.router.if_method = (function if_method(method,handler){return (function (request){if(((method == null)) || (foundation.app.router.method_matches_QMARK_.call(null,method,request)))
{return handler.call(null,request);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"get","get",1014006472),method))
{var G__11477 = handler.call(null,request);var G__11477__$1 = (((G__11477 == null))?null:cljs.core.assoc.call(null,G__11477,new cljs.core.Keyword(null,"body","body",1016933652),null));return G__11477__$1;
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
var routing__delegate = function (request,handlers){return cljs.core.some.call(null,(function (p1__11478_SHARP_){return p1__11478_SHARP_.call(null,request);
}),handlers);
};
var routing = function (request,var_args){
var handlers = null;if (arguments.length > 1) {
  handlers = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return routing__delegate.call(this,request,handlers);};
routing.cljs$lang$maxFixedArity = 1;
routing.cljs$lang$applyTo = (function (arglist__11479){
var request = cljs.core.first(arglist__11479);
var handlers = cljs.core.rest(arglist__11479);
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
var routes__delegate = function (handlers){return (function (p1__11480_SHARP_){return cljs.core.apply.call(null,foundation.app.router.routing,p1__11480_SHARP_,handlers);
});
};
var routes = function (var_args){
var handlers = null;if (arguments.length > 0) {
  handlers = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return routes__delegate.call(this,handlers);};
routes.cljs$lang$maxFixedArity = 0;
routes.cljs$lang$applyTo = (function (arglist__11481){
var handlers = cljs.core.seq(arglist__11481);
return routes__delegate(handlers);
});
routes.cljs$core$IFn$_invoke$arity$variadic = routes__delegate;
return routes;
})()
;
foundation.app.router.make_route = (function make_route(method,route,handler){return foundation.app.router.if_method.call(null,method,foundation.app.router.if_route.call(null,route,(function (request){return foundation.app.router._render.call(null,handler.call(null,request),request);
})));
});
foundation.app.router.remove_suffix = (function remove_suffix(path,suffix){return cljs.core.subs.call(null,path,0,(cljs.core.count.call(null,path) - cljs.core.count.call(null,suffix)));
});
foundation.app.router.wrap_context = (function wrap_context(handler){return (function (request){var uri = new cljs.core.Keyword(null,"uri","uri",1014020318).cljs$core$IFn$_invoke$arity$1(request);var path = new cljs.core.Keyword(null,"path-info","path-info",589817032).cljs$core$IFn$_invoke$arity$2(request,uri);var context = (function (){var or__8198__auto__ = new cljs.core.Keyword(null,"context","context",1965435169).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__8198__auto__))
{return or__8198__auto__;
} else
{return "";
}
})();var subpath = new cljs.core.Keyword(null,"__path-info","__path-info",4484183272).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"route-params","route-params",4735447292).cljs$core$IFn$_invoke$arity$1(request));return handler.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"path-info","path-info",589817032),((cljs.core._EQ_.call(null,subpath,""))?"/":subpath)),new cljs.core.Keyword(null,"context","context",1965435169),foundation.app.router.remove_suffix.call(null,uri,subpath)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"__path-info","__path-info",4484183272)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-params","route-params",4735447292)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"__path-info","__path-info",4484183272)));
});
});
foundation.app.router.accounts = foundation.app.router.routes.call(null,foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/accounts"),(function (request__8035__auto__){return "hallo";
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/accounts/:id"),(function (request__8035__auto__){var id = cljs.core.get_in.call(null,request__8035__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__8035__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return id;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"post","post",1017351186),foundation.app.router.route_compile.call(null,"/accounts/:id"),(function (request__8035__auto__){var id = cljs.core.get_in.call(null,request__8035__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__8035__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return id;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"put","put",1014015617),foundation.app.router.route_compile.call(null,"/accounts/:id"),(function (request__8035__auto__){var id = cljs.core.get_in.call(null,request__8035__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__8035__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return id;
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"delete","delete",3973413149),foundation.app.router.route_compile.call(null,"/accounts/:id"),(function (request__8035__auto__){var id = cljs.core.get_in.call(null,request__8035__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__8035__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return id;
})));
foundation.app.router.campaigns = foundation.app.router.routes.call(null,foundation.app.router.if_route.call(null,foundation.app.router.route_compile.call(null,"/accounts/:id:__path-info",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__path-info","__path-info",4484183272),/\/.*/], null)),foundation.app.router.wrap_context.call(null,(function (request__8084__auto__){var id = cljs.core.get_in.call(null,request__8084__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__8084__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return foundation.app.router.routing.call(null,request__8084__auto__,foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/campaigns"),(function (request__8035__auto__){return "campaigns";
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/campaigns/:id"),(function (request__8035__auto__){var id__$1 = cljs.core.get_in.call(null,request__8035__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__8035__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return id__$1;
})));
}))));
foundation.app.router.line_items = foundation.app.router.routes.call(null,foundation.app.router.if_route.call(null,foundation.app.router.route_compile.call(null,"/accounts/:account-id/campaigns/:id:__path-info",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__path-info","__path-info",4484183272),/\/.*/], null)),foundation.app.router.wrap_context.call(null,(function (request__8084__auto__){var id = cljs.core.get_in.call(null,request__8084__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__8084__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return foundation.app.router.routing.call(null,request__8084__auto__,foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/line_items"),(function (request__8035__auto__){return "campaigns";
})),foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/line_items/:id"),(function (request__8035__auto__){var id__$1 = cljs.core.get_in.call(null,request__8035__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.Keyword(null,"id","id",1013907597)], null),cljs.core.get_in.call(null,request__8035__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",4313443576),"id"], null)));return id__$1;
})));
}))));
foundation.app.router.app = foundation.app.router.routes.call(null,foundation.app.router.make_route.call(null,new cljs.core.Keyword(null,"get","get",1014006472),foundation.app.router.route_compile.call(null,"/"),(function (request__8035__auto__){return "";
})),foundation.app.router.accounts,foundation.app.router.campaigns,foundation.app.router.line_items);

//# sourceMappingURL=router.js.map