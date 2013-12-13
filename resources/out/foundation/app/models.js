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
{var vec__85498 = cljs.core.first.call(null,matches);var token = cljs.core.nth.call(null,vec__85498,0,null);var kw = cljs.core.nth.call(null,vec__85498,1,null);var value = cljs.core.get.call(null,params__$1,cljs.core.keyword.call(null,kw));{
var G__85499 = cljs.core.rest.call(null,matches);
var G__85500 = clojure.string.replace.call(null,result,token,[cljs.core.str(value)].join(''));
matches = G__85499;
result = G__85500;
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
subs_uri.cljs$lang$applyTo = (function (arglist__85501){
var uri = cljs.core.first(arglist__85501);
var params = cljs.core.rest(arglist__85501);
return subs_uri__delegate(uri,params);
});
subs_uri.cljs$core$IFn$_invoke$arity$variadic = subs_uri__delegate;
return subs_uri;
})()
;
foundation.app.models.query_params = (function query_params(kvs){if(cljs.core.seq.call(null,kvs))
{return [cljs.core.str("?"),cljs.core.str(cljs.core.apply.call(null,goog.Uri.QueryData.createFromKeysValues,cljs.core.map.call(null,cljs.core.clj__GT_js,cljs.core.juxt.call(null,cljs.core.keys,cljs.core.vals).call(null,cljs.core.reduce.call(null,(function (m,p__85504){var vec__85505 = p__85504;var k = cljs.core.nth.call(null,vec__85505,0,null);var v = cljs.core.nth.call(null,vec__85505,1,null);return cljs.core.assoc.call(null,m,clojure.string.replace.call(null,k,/-/,"_"),v);
}),cljs.core.PersistentArrayMap.EMPTY,clojure.walk.stringify_keys.call(null,kvs))))))].join('');
} else
{return null;
}
});
foundation.app.models.reify_url = (function reify_url(p__85506){var map__85508 = p__85506;var map__85508__$1 = ((cljs.core.seq_QMARK_.call(null,map__85508))?cljs.core.apply.call(null,cljs.core.hash_map,map__85508):map__85508);var api = cljs.core.get.call(null,map__85508__$1,new cljs.core.Keyword(null,"api","api",1014001036));var re = cljs.core.get.call(null,map__85508__$1,new cljs.core.Keyword(null,"re","re",1013907877));var keys = cljs.core.get.call(null,map__85508__$1,new cljs.core.Keyword(null,"keys","keys",1017192806));var url = cljs.core.get.call(null,map__85508__$1,new cljs.core.Keyword(null,"url","url",1014020321));return (function() { 
var G__85509__delegate = function (model,kvs){var params = cljs.core.select_keys.call(null,model,keys);var query_string = foundation.app.models.query_params.call(null,cljs.core.merge.call(null,cljs.core.apply.call(null,cljs.core.hash_map,kvs),cljs.core.select_keys.call(null,model,new cljs.core.Keyword(null,"query-params","query-params",1080249757).cljs$core$IFn$_invoke$arity$1(model))));return [cljs.core.str(api),cljs.core.str(foundation.app.models.subs_uri.call(null,url,params)),cljs.core.str(query_string)].join('');
};
var G__85509 = function (model,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__85509__delegate.call(this,model,kvs);};
G__85509.cljs$lang$maxFixedArity = 1;
G__85509.cljs$lang$applyTo = (function (arglist__85510){
var model = cljs.core.first(arglist__85510);
var kvs = cljs.core.rest(arglist__85510);
return G__85509__delegate(model,kvs);
});
G__85509.cljs$core$IFn$_invoke$arity$variadic = G__85509__delegate;
return G__85509;
})()
;
});
foundation.app.models.IModel = (function (){var obj85512 = {};return obj85512;
})();
foundation.app.models.fetch = (function fetch(_){if((function (){var and__13813__auto__ = _;if(and__13813__auto__)
{return _.foundation$app$models$IModel$fetch$arity$1;
} else
{return and__13813__auto__;
}
})())
{return _.foundation$app$models$IModel$fetch$arity$1(_);
} else
{var x__14428__auto__ = (((_ == null))?null:_);return (function (){var or__13825__auto__ = (foundation.app.models.fetch[goog.typeOf(x__14428__auto__)]);if(or__13825__auto__)
{return or__13825__auto__;
} else
{var or__13825__auto____$1 = (foundation.app.models.fetch["_"]);if(or__13825__auto____$1)
{return or__13825__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IModel.fetch",_);
}
}
})().call(null,_);
}
});

/**
* @constructor
* @param {*} url
* @param {*} api
* @param {*} query_params
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
foundation.app.models.Model = (function (url,api,query_params,__meta,__extmap){
this.url = url;
this.api = api;
this.query_params = query_params;
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
foundation.app.models.Model.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__14382__auto__){var self__ = this;
var this__14382__auto____$1 = this;var h__14236__auto__ = self__.__hash;if(!((h__14236__auto__ == null)))
{return h__14236__auto__;
} else
{var h__14236__auto____$1 = cljs.core.hash_imap.call(null,this__14382__auto____$1);self__.__hash = h__14236__auto____$1;
return h__14236__auto____$1;
}
});
foundation.app.models.Model.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__14387__auto__,k__14388__auto__){var self__ = this;
var this__14387__auto____$1 = this;return cljs.core._lookup.call(null,this__14387__auto____$1,k__14388__auto__,null);
});
foundation.app.models.Model.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__14389__auto__,k85514,else__14390__auto__){var self__ = this;
var this__14389__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k85514,new cljs.core.Keyword(null,"url","url",1014020321)))
{return self__.url;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k85514,new cljs.core.Keyword(null,"api","api",1014001036)))
{return self__.api;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k85514,new cljs.core.Keyword(null,"query-params","query-params",1080249757)))
{return self__.query_params;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k85514,else__14390__auto__);
} else
{return null;
}
}
}
}
});
foundation.app.models.Model.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__14394__auto__,k__14395__auto__,G__85513){var self__ = this;
var this__14394__auto____$1 = this;var pred__85516 = cljs.core.keyword_identical_QMARK_;var expr__85517 = k__14395__auto__;if(cljs.core.truth_(pred__85516.call(null,new cljs.core.Keyword(null,"url","url",1014020321),expr__85517)))
{return (new foundation.app.models.Model(G__85513,self__.api,self__.query_params,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__85516.call(null,new cljs.core.Keyword(null,"api","api",1014001036),expr__85517)))
{return (new foundation.app.models.Model(self__.url,G__85513,self__.query_params,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__85516.call(null,new cljs.core.Keyword(null,"query-params","query-params",1080249757),expr__85517)))
{return (new foundation.app.models.Model(self__.url,self__.api,G__85513,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.models.Model(self__.url,self__.api,self__.query_params,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__14395__auto__,G__85513),null));
}
}
}
});
foundation.app.models.Model.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__14401__auto__,writer__14402__auto__,opts__14403__auto__){var self__ = this;
var this__14401__auto____$1 = this;var pr_pair__14404__auto__ = (function (keyval__14405__auto__){return cljs.core.pr_sequential_writer.call(null,writer__14402__auto__,cljs.core.pr_writer,""," ","",opts__14403__auto__,keyval__14405__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__14402__auto__,pr_pair__14404__auto__,"#foundation.app.models.Model{",", ","}",opts__14403__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",1014020321),self__.url],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"api","api",1014001036),self__.api],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"query-params","query-params",1080249757),self__.query_params],null))], null),self__.__extmap));
});
foundation.app.models.Model.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__14392__auto__,entry__14393__auto__){var self__ = this;
var this__14392__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__14393__auto__))
{return cljs.core._assoc.call(null,this__14392__auto____$1,cljs.core._nth.call(null,entry__14393__auto__,0),cljs.core._nth.call(null,entry__14393__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__14392__auto____$1,entry__14393__auto__);
}
});
foundation.app.models.Model.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__14399__auto__){var self__ = this;
var this__14399__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",1014020321),self__.url],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"api","api",1014001036),self__.api],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"query-params","query-params",1080249757),self__.query_params],null))], null),self__.__extmap));
});
foundation.app.models.Model.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__14391__auto__){var self__ = this;
var this__14391__auto____$1 = this;return (3 + cljs.core.count.call(null,self__.__extmap));
});
foundation.app.models.Model.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__14383__auto__,other__14384__auto__){var self__ = this;
var this__14383__auto____$1 = this;if(cljs.core.truth_((function (){var and__13813__auto__ = other__14384__auto__;if(cljs.core.truth_(and__13813__auto__))
{return ((this__14383__auto____$1.constructor === other__14384__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__14383__auto____$1,other__14384__auto__));
} else
{return and__13813__auto__;
}
})()))
{return true;
} else
{return false;
}
});
foundation.app.models.Model.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__14386__auto__,G__85513){var self__ = this;
var this__14386__auto____$1 = this;return (new foundation.app.models.Model(self__.url,self__.api,self__.query_params,G__85513,self__.__extmap,self__.__hash));
});
foundation.app.models.Model.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__14385__auto__){var self__ = this;
var this__14385__auto____$1 = this;return self__.__meta;
});
foundation.app.models.Model.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__14396__auto__,k__14397__auto__){var self__ = this;
var this__14396__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-params","query-params",1080249757),null,new cljs.core.Keyword(null,"url","url",1014020321),null,new cljs.core.Keyword(null,"api","api",1014001036),null], null), null),k__14397__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__14396__auto____$1),self__.__meta),k__14397__auto__);
} else
{return (new foundation.app.models.Model(self__.url,self__.api,self__.query_params,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__14397__auto__)),null));
}
});
foundation.app.models.Model.cljs$lang$type = true;
foundation.app.models.Model.cljs$lang$ctorPrSeq = (function (this__14421__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"foundation.app.models/Model");
});
foundation.app.models.Model.cljs$lang$ctorPrWriter = (function (this__14421__auto__,writer__14422__auto__){return cljs.core._write.call(null,writer__14422__auto__,"foundation.app.models/Model");
});
foundation.app.models.__GT_Model = (function __GT_Model(url,api,query_params){return (new foundation.app.models.Model(url,api,query_params));
});
foundation.app.models.map__GT_Model = (function map__GT_Model(G__85515){return (new foundation.app.models.Model(new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(G__85515),new cljs.core.Keyword(null,"api","api",1014001036).cljs$core$IFn$_invoke$arity$1(G__85515),new cljs.core.Keyword(null,"query-params","query-params",1080249757).cljs$core$IFn$_invoke$arity$1(G__85515),null,cljs.core.dissoc.call(null,G__85515,new cljs.core.Keyword(null,"url","url",1014020321),new cljs.core.Keyword(null,"api","api",1014001036),new cljs.core.Keyword(null,"query-params","query-params",1080249757))));
});

//# sourceMappingURL=models.js.map