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
goog.require('cljs.core.async');
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
{var vec__314895 = cljs.core.first.call(null,matches);var token = cljs.core.nth.call(null,vec__314895,0,null);var kw = cljs.core.nth.call(null,vec__314895,1,null);var value = cljs.core.get.call(null,params__$1,cljs.core.keyword.call(null,kw));{
var G__314896 = cljs.core.rest.call(null,matches);
var G__314897 = clojure.string.replace.call(null,result,token,[cljs.core.str(value)].join(''));
matches = G__314896;
result = G__314897;
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
subs_uri.cljs$lang$applyTo = (function (arglist__314898){
var uri = cljs.core.first(arglist__314898);
var params = cljs.core.rest(arglist__314898);
return subs_uri__delegate(uri,params);
});
subs_uri.cljs$core$IFn$_invoke$arity$variadic = subs_uri__delegate;
return subs_uri;
})()
;
foundation.app.models.query_params = (function query_params(kvs){if(cljs.core.seq.call(null,kvs))
{return [cljs.core.str("?"),cljs.core.str(cljs.core.apply.call(null,goog.Uri.QueryData.createFromKeysValues,cljs.core.map.call(null,cljs.core.clj__GT_js,cljs.core.juxt.call(null,cljs.core.keys,cljs.core.vals).call(null,cljs.core.reduce.call(null,(function (m,p__314901){var vec__314902 = p__314901;var k = cljs.core.nth.call(null,vec__314902,0,null);var v = cljs.core.nth.call(null,vec__314902,1,null);return cljs.core.assoc.call(null,m,clojure.string.replace.call(null,k,/-/,"_"),v);
}),cljs.core.PersistentArrayMap.EMPTY,clojure.walk.stringify_keys.call(null,kvs))))))].join('');
} else
{return null;
}
});
foundation.app.models.reify_url = (function reify_url(p__314903){var map__314905 = p__314903;var map__314905__$1 = ((cljs.core.seq_QMARK_.call(null,map__314905))?cljs.core.apply.call(null,cljs.core.hash_map,map__314905):map__314905);var api = cljs.core.get.call(null,map__314905__$1,new cljs.core.Keyword(null,"api","api",1014001036));var re = cljs.core.get.call(null,map__314905__$1,new cljs.core.Keyword(null,"re","re",1013907877));var keys = cljs.core.get.call(null,map__314905__$1,new cljs.core.Keyword(null,"keys","keys",1017192806));var url = cljs.core.get.call(null,map__314905__$1,new cljs.core.Keyword(null,"url","url",1014020321));return (function (model,kvs){var params = cljs.core.select_keys.call(null,model,keys);var query_string = foundation.app.models.query_params.call(null,cljs.core.merge.call(null,kvs,cljs.core.fnil.call(null,cljs.core.select_keys,cljs.core.PersistentArrayMap.EMPTY).call(null,new cljs.core.Keyword(null,"query-params","query-params",1080249757).cljs$core$IFn$_invoke$arity$1(model),model)));return [cljs.core.str(api),cljs.core.str(foundation.app.models.subs_uri.call(null,url,params)),cljs.core.str(query_string)].join('');
});
});
foundation.app.models.IModel = (function (){var obj314907 = {};return obj314907;
})();
foundation.app.models._fetch = (function _fetch(_,___$1){if((function (){var and__13813__auto__ = ___$1;if(and__13813__auto__)
{return ___$1.foundation$app$models$IModel$_fetch$arity$2;
} else
{return and__13813__auto__;
}
})())
{return ___$1.foundation$app$models$IModel$_fetch$arity$2(___$1,___$1);
} else
{var x__14428__auto__ = (((___$1 == null))?null:___$1);return (function (){var or__13825__auto__ = (foundation.app.models._fetch[goog.typeOf(x__14428__auto__)]);if(or__13825__auto__)
{return or__13825__auto__;
} else
{var or__13825__auto____$1 = (foundation.app.models._fetch["_"]);if(or__13825__auto____$1)
{return or__13825__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IModel.-fetch",___$1);
}
}
})().call(null,___$1,___$1);
}
});
foundation.app.models._create = (function _create(_,___$1){if((function (){var and__13813__auto__ = ___$1;if(and__13813__auto__)
{return ___$1.foundation$app$models$IModel$_create$arity$2;
} else
{return and__13813__auto__;
}
})())
{return ___$1.foundation$app$models$IModel$_create$arity$2(___$1,___$1);
} else
{var x__14428__auto__ = (((___$1 == null))?null:___$1);return (function (){var or__13825__auto__ = (foundation.app.models._create[goog.typeOf(x__14428__auto__)]);if(or__13825__auto__)
{return or__13825__auto__;
} else
{var or__13825__auto____$1 = (foundation.app.models._create["_"]);if(or__13825__auto____$1)
{return or__13825__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IModel.-create",___$1);
}
}
})().call(null,___$1,___$1);
}
});
foundation.app.models._update = (function _update(_,___$1){if((function (){var and__13813__auto__ = ___$1;if(and__13813__auto__)
{return ___$1.foundation$app$models$IModel$_update$arity$2;
} else
{return and__13813__auto__;
}
})())
{return ___$1.foundation$app$models$IModel$_update$arity$2(___$1,___$1);
} else
{var x__14428__auto__ = (((___$1 == null))?null:___$1);return (function (){var or__13825__auto__ = (foundation.app.models._update[goog.typeOf(x__14428__auto__)]);if(or__13825__auto__)
{return or__13825__auto__;
} else
{var or__13825__auto____$1 = (foundation.app.models._update["_"]);if(or__13825__auto____$1)
{return or__13825__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IModel.-update",___$1);
}
}
})().call(null,___$1,___$1);
}
});
foundation.app.models._delete = (function _delete(_,___$1){if((function (){var and__13813__auto__ = ___$1;if(and__13813__auto__)
{return ___$1.foundation$app$models$IModel$_delete$arity$2;
} else
{return and__13813__auto__;
}
})())
{return ___$1.foundation$app$models$IModel$_delete$arity$2(___$1,___$1);
} else
{var x__14428__auto__ = (((___$1 == null))?null:___$1);return (function (){var or__13825__auto__ = (foundation.app.models._delete[goog.typeOf(x__14428__auto__)]);if(or__13825__auto__)
{return or__13825__auto__;
} else
{var or__13825__auto____$1 = (foundation.app.models._delete["_"]);if(or__13825__auto____$1)
{return or__13825__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IModel.-delete",___$1);
}
}
})().call(null,___$1,___$1);
}
});
foundation.app.models._url = (function _url(_,___$1){if((function (){var and__13813__auto__ = ___$1;if(and__13813__auto__)
{return ___$1.foundation$app$models$IModel$_url$arity$2;
} else
{return and__13813__auto__;
}
})())
{return ___$1.foundation$app$models$IModel$_url$arity$2(___$1,___$1);
} else
{var x__14428__auto__ = (((___$1 == null))?null:___$1);return (function (){var or__13825__auto__ = (foundation.app.models._url[goog.typeOf(x__14428__auto__)]);if(or__13825__auto__)
{return or__13825__auto__;
} else
{var or__13825__auto____$1 = (foundation.app.models._url["_"]);if(or__13825__auto____$1)
{return or__13825__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IModel.-url",___$1);
}
}
})().call(null,___$1,___$1);
}
});

/**
* @constructor
* @param {*} url
* @param {*} api
* @param {*} query_params
* @param {*} f
* @param {*} name
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
foundation.app.models.Model = (function (url,api,query_params,f,name,__meta,__extmap){
this.url = url;
this.api = api;
this.query_params = query_params;
this.f = f;
this.name = name;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>5){
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
foundation.app.models.Model.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__14389__auto__,k314909,else__14390__auto__){var self__ = this;
var this__14389__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k314909,new cljs.core.Keyword(null,"url","url",1014020321)))
{return self__.url;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k314909,new cljs.core.Keyword(null,"api","api",1014001036)))
{return self__.api;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k314909,new cljs.core.Keyword(null,"query-params","query-params",1080249757)))
{return self__.query_params;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k314909,new cljs.core.Keyword(null,"f","f",1013904344)))
{return self__.f;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k314909,new cljs.core.Keyword(null,"name","name",1017277949)))
{return self__.name;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k314909,else__14390__auto__);
} else
{return null;
}
}
}
}
}
}
});
foundation.app.models.Model.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__14394__auto__,k__14395__auto__,G__314908){var self__ = this;
var this__14394__auto____$1 = this;var pred__314911 = cljs.core.keyword_identical_QMARK_;var expr__314912 = k__14395__auto__;if(cljs.core.truth_(pred__314911.call(null,new cljs.core.Keyword(null,"url","url",1014020321),expr__314912)))
{return (new foundation.app.models.Model(G__314908,self__.api,self__.query_params,self__.f,self__.name,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__314911.call(null,new cljs.core.Keyword(null,"api","api",1014001036),expr__314912)))
{return (new foundation.app.models.Model(self__.url,G__314908,self__.query_params,self__.f,self__.name,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__314911.call(null,new cljs.core.Keyword(null,"query-params","query-params",1080249757),expr__314912)))
{return (new foundation.app.models.Model(self__.url,self__.api,G__314908,self__.f,self__.name,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__314911.call(null,new cljs.core.Keyword(null,"f","f",1013904344),expr__314912)))
{return (new foundation.app.models.Model(self__.url,self__.api,self__.query_params,G__314908,self__.name,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__314911.call(null,new cljs.core.Keyword(null,"name","name",1017277949),expr__314912)))
{return (new foundation.app.models.Model(self__.url,self__.api,self__.query_params,self__.f,G__314908,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.models.Model(self__.url,self__.api,self__.query_params,self__.f,self__.name,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__14395__auto__,G__314908),null));
}
}
}
}
}
});
foundation.app.models.Model.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__14401__auto__,writer__14402__auto__,opts__14403__auto__){var self__ = this;
var this__14401__auto____$1 = this;var pr_pair__14404__auto__ = (function (keyval__14405__auto__){return cljs.core.pr_sequential_writer.call(null,writer__14402__auto__,cljs.core.pr_writer,""," ","",opts__14403__auto__,keyval__14405__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__14402__auto__,pr_pair__14404__auto__,"#foundation.app.models.Model{",", ","}",opts__14403__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",1014020321),self__.url],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"api","api",1014001036),self__.api],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"query-params","query-params",1080249757),self__.query_params],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"f","f",1013904344),self__.f],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1017277949),self__.name],null))], null),self__.__extmap));
});
foundation.app.models.Model.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__14392__auto__,entry__14393__auto__){var self__ = this;
var this__14392__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__14393__auto__))
{return cljs.core._assoc.call(null,this__14392__auto____$1,cljs.core._nth.call(null,entry__14393__auto__,0),cljs.core._nth.call(null,entry__14393__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__14392__auto____$1,entry__14393__auto__);
}
});
foundation.app.models.Model.prototype.foundation$app$models$IModel$ = true;
foundation.app.models.Model.prototype.foundation$app$models$IModel$_fetch$arity$2 = (function (m,params){var self__ = this;
var m__$1 = this;return foundation.app.xhr.GET.call(null,foundation.app.models._url.call(null,m__$1,params));
});
foundation.app.models.Model.prototype.foundation$app$models$IModel$_create$arity$2 = (function (m,params){var self__ = this;
var m__$1 = this;return foundation.app.xhr.POST.call(null,foundation.app.models._url.call(null,m__$1,params),params);
});
foundation.app.models.Model.prototype.foundation$app$models$IModel$_update$arity$2 = (function (m,params){var self__ = this;
var m__$1 = this;return foundation.app.xhr.PUT.call(null,foundation.app.models._url.call(null,m__$1,params),params);
});
foundation.app.models.Model.prototype.foundation$app$models$IModel$_delete$arity$2 = (function (m,params){var self__ = this;
var m__$1 = this;return foundation.app.xhr.DELETE.call(null,foundation.app.models._url.call(null,m__$1,params),params);
});
foundation.app.models.Model.prototype.foundation$app$models$IModel$_url$arity$2 = (function (m,params){var self__ = this;
var m__$1 = this;return self__.f.call(null,m__$1,params);
});
foundation.app.models.Model.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__14399__auto__){var self__ = this;
var this__14399__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",1014020321),self__.url],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"api","api",1014001036),self__.api],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"query-params","query-params",1080249757),self__.query_params],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"f","f",1013904344),self__.f],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1017277949),self__.name],null))], null),self__.__extmap));
});
foundation.app.models.Model.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__14391__auto__){var self__ = this;
var this__14391__auto____$1 = this;return (5 + cljs.core.count.call(null,self__.__extmap));
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
foundation.app.models.Model.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__14386__auto__,G__314908){var self__ = this;
var this__14386__auto____$1 = this;return (new foundation.app.models.Model(self__.url,self__.api,self__.query_params,self__.f,self__.name,G__314908,self__.__extmap,self__.__hash));
});
foundation.app.models.Model.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__14385__auto__){var self__ = this;
var this__14385__auto____$1 = this;return self__.__meta;
});
foundation.app.models.Model.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__14396__auto__,k__14397__auto__){var self__ = this;
var this__14396__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"query-params","query-params",1080249757),null,new cljs.core.Keyword(null,"name","name",1017277949),null,new cljs.core.Keyword(null,"f","f",1013904344),null,new cljs.core.Keyword(null,"url","url",1014020321),null,new cljs.core.Keyword(null,"api","api",1014001036),null], null), null),k__14397__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__14396__auto____$1),self__.__meta),k__14397__auto__);
} else
{return (new foundation.app.models.Model(self__.url,self__.api,self__.query_params,self__.f,self__.name,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__14397__auto__)),null));
}
});
foundation.app.models.Model.cljs$lang$type = true;
foundation.app.models.Model.cljs$lang$ctorPrSeq = (function (this__14421__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"foundation.app.models/Model");
});
foundation.app.models.Model.cljs$lang$ctorPrWriter = (function (this__14421__auto__,writer__14422__auto__){return cljs.core._write.call(null,writer__14422__auto__,"foundation.app.models/Model");
});
foundation.app.models.__GT_Model = (function __GT_Model(url,api,query_params,f,name){return (new foundation.app.models.Model(url,api,query_params,f,name));
});
foundation.app.models.map__GT_Model = (function map__GT_Model(G__314910){return (new foundation.app.models.Model(new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(G__314910),new cljs.core.Keyword(null,"api","api",1014001036).cljs$core$IFn$_invoke$arity$1(G__314910),new cljs.core.Keyword(null,"query-params","query-params",1080249757).cljs$core$IFn$_invoke$arity$1(G__314910),new cljs.core.Keyword(null,"f","f",1013904344).cljs$core$IFn$_invoke$arity$1(G__314910),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(G__314910),null,cljs.core.dissoc.call(null,G__314910,new cljs.core.Keyword(null,"url","url",1014020321),new cljs.core.Keyword(null,"api","api",1014001036),new cljs.core.Keyword(null,"query-params","query-params",1080249757),new cljs.core.Keyword(null,"f","f",1013904344),new cljs.core.Keyword(null,"name","name",1017277949))));
});
foundation.app.models.fetch = (function (){var method_table__14658__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14659__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14660__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14661__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14662__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("fetch",(function() { 
var G__314914__delegate = function (model,args){var temp__4092__auto__ = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(model);if(cljs.core.truth_(temp__4092__auto__))
{var n = temp__4092__auto__;return cljs.core.keyword.call(null,cljs.core.name.call(null,n));
} else
{return null;
}
};
var G__314914 = function (model,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__314914__delegate.call(this,model,args);};
G__314914.cljs$lang$maxFixedArity = 1;
G__314914.cljs$lang$applyTo = (function (arglist__314915){
var model = cljs.core.first(arglist__314915);
var args = cljs.core.rest(arglist__314915);
return G__314914__delegate(model,args);
});
G__314914.cljs$core$IFn$_invoke$arity$variadic = G__314914__delegate;
return G__314914;
})()
,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14662__auto__,method_table__14658__auto__,prefer_table__14659__auto__,method_cache__14660__auto__,cached_hierarchy__14661__auto__));
})();
cljs.core._add_method.call(null,foundation.app.models.fetch,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__314918__delegate = function (model,p__314916){var map__314917 = p__314916;var map__314917__$1 = ((cljs.core.seq_QMARK_.call(null,map__314917))?cljs.core.apply.call(null,cljs.core.hash_map,map__314917):map__314917);var query_params = cljs.core.get.call(null,map__314917__$1,new cljs.core.Keyword(null,"query-params","query-params",1080249757),cljs.core.PersistentArrayMap.EMPTY);var params = cljs.core.get.call(null,map__314917__$1,new cljs.core.Keyword(null,"params","params",4313443576),cljs.core.PersistentArrayMap.EMPTY);return foundation.app.xhr.GET.call(null,cljs.core.apply.call(null,new cljs.core.Keyword(null,"f","f",1013904344).cljs$core$IFn$_invoke$arity$1(model),params,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_params], null)),params);
};
var G__314918 = function (model,var_args){
var p__314916 = null;if (arguments.length > 1) {
  p__314916 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__314918__delegate.call(this,model,p__314916);};
G__314918.cljs$lang$maxFixedArity = 1;
G__314918.cljs$lang$applyTo = (function (arglist__314919){
var model = cljs.core.first(arglist__314919);
var p__314916 = cljs.core.rest(arglist__314919);
return G__314918__delegate(model,p__314916);
});
G__314918.cljs$core$IFn$_invoke$arity$variadic = G__314918__delegate;
return G__314918;
})()
);
foundation.app.models.create = (function (){var method_table__14658__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14659__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14660__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14661__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14662__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("create",(function (model,params){return cljs.core.name.call(null,model);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14662__auto__,method_table__14658__auto__,prefer_table__14659__auto__,method_cache__14660__auto__,cached_hierarchy__14661__auto__));
})();
cljs.core._add_method.call(null,foundation.app.models.create,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__314922__delegate = function (model,p__314920){var map__314921 = p__314920;var map__314921__$1 = ((cljs.core.seq_QMARK_.call(null,map__314921))?cljs.core.apply.call(null,cljs.core.hash_map,map__314921):map__314921);var query_params = cljs.core.get.call(null,map__314921__$1,new cljs.core.Keyword(null,"query-params","query-params",1080249757),cljs.core.PersistentArrayMap.EMPTY);var params = cljs.core.get.call(null,map__314921__$1,new cljs.core.Keyword(null,"params","params",4313443576),cljs.core.PersistentArrayMap.EMPTY);return foundation.app.xhr.POST.call(null,cljs.core.apply.call(null,new cljs.core.Keyword(null,"f","f",1013904344).cljs$core$IFn$_invoke$arity$1(model),params,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_params], null)),params);
};
var G__314922 = function (model,var_args){
var p__314920 = null;if (arguments.length > 1) {
  p__314920 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__314922__delegate.call(this,model,p__314920);};
G__314922.cljs$lang$maxFixedArity = 1;
G__314922.cljs$lang$applyTo = (function (arglist__314923){
var model = cljs.core.first(arglist__314923);
var p__314920 = cljs.core.rest(arglist__314923);
return G__314922__delegate(model,p__314920);
});
G__314922.cljs$core$IFn$_invoke$arity$variadic = G__314922__delegate;
return G__314922;
})()
);
foundation.app.models.update = (function (){var method_table__14658__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14659__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14660__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14661__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14662__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("update",(function (model,params){return cljs.core.name.call(null,model);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14662__auto__,method_table__14658__auto__,prefer_table__14659__auto__,method_cache__14660__auto__,cached_hierarchy__14661__auto__));
})();
cljs.core._add_method.call(null,foundation.app.models.update,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__314926__delegate = function (model,p__314924){var map__314925 = p__314924;var map__314925__$1 = ((cljs.core.seq_QMARK_.call(null,map__314925))?cljs.core.apply.call(null,cljs.core.hash_map,map__314925):map__314925);var query_params = cljs.core.get.call(null,map__314925__$1,new cljs.core.Keyword(null,"query-params","query-params",1080249757),cljs.core.PersistentArrayMap.EMPTY);var params = cljs.core.get.call(null,map__314925__$1,new cljs.core.Keyword(null,"params","params",4313443576),cljs.core.PersistentArrayMap.EMPTY);return foundation.app.xhr.PUT.call(null,cljs.core.apply.call(null,new cljs.core.Keyword(null,"f","f",1013904344).cljs$core$IFn$_invoke$arity$1(model),params,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_params], null)),params);
};
var G__314926 = function (model,var_args){
var p__314924 = null;if (arguments.length > 1) {
  p__314924 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__314926__delegate.call(this,model,p__314924);};
G__314926.cljs$lang$maxFixedArity = 1;
G__314926.cljs$lang$applyTo = (function (arglist__314927){
var model = cljs.core.first(arglist__314927);
var p__314924 = cljs.core.rest(arglist__314927);
return G__314926__delegate(model,p__314924);
});
G__314926.cljs$core$IFn$_invoke$arity$variadic = G__314926__delegate;
return G__314926;
})()
);
foundation.app.models.delete$ = (function (){var method_table__14658__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14659__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14660__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14661__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14662__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("delete",(function (model,params){return cljs.core.name.call(null,model);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14662__auto__,method_table__14658__auto__,prefer_table__14659__auto__,method_cache__14660__auto__,cached_hierarchy__14661__auto__));
})();
cljs.core._add_method.call(null,foundation.app.models.delete$,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__314930__delegate = function (model,params,p__314928){var map__314929 = p__314928;var map__314929__$1 = ((cljs.core.seq_QMARK_.call(null,map__314929))?cljs.core.apply.call(null,cljs.core.hash_map,map__314929):map__314929);var query_params = cljs.core.get.call(null,map__314929__$1,new cljs.core.Keyword(null,"query-params","query-params",1080249757),cljs.core.PersistentArrayMap.EMPTY);return foundation.app.xhr.DELETE.call(null,cljs.core.apply.call(null,new cljs.core.Keyword(null,"f","f",1013904344).cljs$core$IFn$_invoke$arity$1(model),params,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_params], null)),params);
};
var G__314930 = function (model,params,var_args){
var p__314928 = null;if (arguments.length > 2) {
  p__314928 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__314930__delegate.call(this,model,params,p__314928);};
G__314930.cljs$lang$maxFixedArity = 2;
G__314930.cljs$lang$applyTo = (function (arglist__314931){
var model = cljs.core.first(arglist__314931);
arglist__314931 = cljs.core.next(arglist__314931);
var params = cljs.core.first(arglist__314931);
var p__314928 = cljs.core.rest(arglist__314931);
return G__314930__delegate(model,params,p__314928);
});
G__314930.cljs$core$IFn$_invoke$arity$variadic = G__314930__delegate;
return G__314930;
})()
);

//# sourceMappingURL=models.js.map