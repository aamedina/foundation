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
{var vec__32032 = cljs.core.first.call(null,matches);var token = cljs.core.nth.call(null,vec__32032,0,null);var kw = cljs.core.nth.call(null,vec__32032,1,null);var value = cljs.core.get.call(null,params__$1,cljs.core.keyword.call(null,kw));{
var G__32033 = cljs.core.rest.call(null,matches);
var G__32034 = clojure.string.replace.call(null,result,token,[cljs.core.str(value)].join(''));
matches = G__32033;
result = G__32034;
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
subs_uri.cljs$lang$applyTo = (function (arglist__32035){
var uri = cljs.core.first(arglist__32035);
var params = cljs.core.rest(arglist__32035);
return subs_uri__delegate(uri,params);
});
subs_uri.cljs$core$IFn$_invoke$arity$variadic = subs_uri__delegate;
return subs_uri;
})()
;
foundation.app.models.query_params = (function query_params(kvs){if(cljs.core.seq.call(null,kvs))
{return [cljs.core.str("?"),cljs.core.str(cljs.core.apply.call(null,goog.Uri.QueryData.createFromKeysValues,cljs.core.map.call(null,cljs.core.clj__GT_js,cljs.core.juxt.call(null,cljs.core.keys,cljs.core.vals).call(null,cljs.core.reduce.call(null,(function (m,p__32038){var vec__32039 = p__32038;var k = cljs.core.nth.call(null,vec__32039,0,null);var v = cljs.core.nth.call(null,vec__32039,1,null);return cljs.core.assoc.call(null,m,clojure.string.replace.call(null,k,/-/,"_"),v);
}),cljs.core.PersistentArrayMap.EMPTY,clojure.walk.stringify_keys.call(null,kvs))))))].join('');
} else
{return null;
}
});
foundation.app.models.reify_url = (function reify_url(p__32040){var map__32042 = p__32040;var map__32042__$1 = ((cljs.core.seq_QMARK_.call(null,map__32042))?cljs.core.apply.call(null,cljs.core.hash_map,map__32042):map__32042);var api = cljs.core.get.call(null,map__32042__$1,new cljs.core.Keyword(null,"api","api",1014001036));var re = cljs.core.get.call(null,map__32042__$1,new cljs.core.Keyword(null,"re","re",1013907877));var keys = cljs.core.get.call(null,map__32042__$1,new cljs.core.Keyword(null,"keys","keys",1017192806));var url = cljs.core.get.call(null,map__32042__$1,new cljs.core.Keyword(null,"url","url",1014020321));return (function (model,kvs){var params = cljs.core.select_keys.call(null,model,keys);var query_string = foundation.app.models.query_params.call(null,cljs.core.merge.call(null,kvs,cljs.core.fnil.call(null,cljs.core.select_keys,cljs.core.PersistentArrayMap.EMPTY).call(null,new cljs.core.Keyword(null,"query-params","query-params",1080249757).cljs$core$IFn$_invoke$arity$1(model),model)));return [cljs.core.str(api),cljs.core.str(foundation.app.models.subs_uri.call(null,url,params)),cljs.core.str(query_string)].join('');
});
});
foundation.app.models.IModel = (function (){var obj32044 = {};return obj32044;
})();
foundation.app.models._fetch = (function _fetch(_,___$1){if((function (){var and__7835__auto__ = ___$1;if(and__7835__auto__)
{return ___$1.foundation$app$models$IModel$_fetch$arity$2;
} else
{return and__7835__auto__;
}
})())
{return ___$1.foundation$app$models$IModel$_fetch$arity$2(___$1,___$1);
} else
{var x__8450__auto__ = (((___$1 == null))?null:___$1);return (function (){var or__7847__auto__ = (foundation.app.models._fetch[goog.typeOf(x__8450__auto__)]);if(or__7847__auto__)
{return or__7847__auto__;
} else
{var or__7847__auto____$1 = (foundation.app.models._fetch["_"]);if(or__7847__auto____$1)
{return or__7847__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IModel.-fetch",___$1);
}
}
})().call(null,___$1,___$1);
}
});
foundation.app.models._create = (function _create(_,___$1){if((function (){var and__7835__auto__ = ___$1;if(and__7835__auto__)
{return ___$1.foundation$app$models$IModel$_create$arity$2;
} else
{return and__7835__auto__;
}
})())
{return ___$1.foundation$app$models$IModel$_create$arity$2(___$1,___$1);
} else
{var x__8450__auto__ = (((___$1 == null))?null:___$1);return (function (){var or__7847__auto__ = (foundation.app.models._create[goog.typeOf(x__8450__auto__)]);if(or__7847__auto__)
{return or__7847__auto__;
} else
{var or__7847__auto____$1 = (foundation.app.models._create["_"]);if(or__7847__auto____$1)
{return or__7847__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IModel.-create",___$1);
}
}
})().call(null,___$1,___$1);
}
});
foundation.app.models._update = (function _update(_,___$1){if((function (){var and__7835__auto__ = ___$1;if(and__7835__auto__)
{return ___$1.foundation$app$models$IModel$_update$arity$2;
} else
{return and__7835__auto__;
}
})())
{return ___$1.foundation$app$models$IModel$_update$arity$2(___$1,___$1);
} else
{var x__8450__auto__ = (((___$1 == null))?null:___$1);return (function (){var or__7847__auto__ = (foundation.app.models._update[goog.typeOf(x__8450__auto__)]);if(or__7847__auto__)
{return or__7847__auto__;
} else
{var or__7847__auto____$1 = (foundation.app.models._update["_"]);if(or__7847__auto____$1)
{return or__7847__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IModel.-update",___$1);
}
}
})().call(null,___$1,___$1);
}
});
foundation.app.models._delete = (function _delete(_,___$1){if((function (){var and__7835__auto__ = ___$1;if(and__7835__auto__)
{return ___$1.foundation$app$models$IModel$_delete$arity$2;
} else
{return and__7835__auto__;
}
})())
{return ___$1.foundation$app$models$IModel$_delete$arity$2(___$1,___$1);
} else
{var x__8450__auto__ = (((___$1 == null))?null:___$1);return (function (){var or__7847__auto__ = (foundation.app.models._delete[goog.typeOf(x__8450__auto__)]);if(or__7847__auto__)
{return or__7847__auto__;
} else
{var or__7847__auto____$1 = (foundation.app.models._delete["_"]);if(or__7847__auto____$1)
{return or__7847__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IModel.-delete",___$1);
}
}
})().call(null,___$1,___$1);
}
});
foundation.app.models._url = (function _url(_,___$1){if((function (){var and__7835__auto__ = ___$1;if(and__7835__auto__)
{return ___$1.foundation$app$models$IModel$_url$arity$2;
} else
{return and__7835__auto__;
}
})())
{return ___$1.foundation$app$models$IModel$_url$arity$2(___$1,___$1);
} else
{var x__8450__auto__ = (((___$1 == null))?null:___$1);return (function (){var or__7847__auto__ = (foundation.app.models._url[goog.typeOf(x__8450__auto__)]);if(or__7847__auto__)
{return or__7847__auto__;
} else
{var or__7847__auto____$1 = (foundation.app.models._url["_"]);if(or__7847__auto____$1)
{return or__7847__auto____$1;
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
foundation.app.models.Model.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8404__auto__){var self__ = this;
var this__8404__auto____$1 = this;var h__8258__auto__ = self__.__hash;if(!((h__8258__auto__ == null)))
{return h__8258__auto__;
} else
{var h__8258__auto____$1 = cljs.core.hash_imap.call(null,this__8404__auto____$1);self__.__hash = h__8258__auto____$1;
return h__8258__auto____$1;
}
});
foundation.app.models.Model.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8409__auto__,k__8410__auto__){var self__ = this;
var this__8409__auto____$1 = this;return cljs.core._lookup.call(null,this__8409__auto____$1,k__8410__auto__,null);
});
foundation.app.models.Model.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8411__auto__,k32046,else__8412__auto__){var self__ = this;
var this__8411__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k32046,new cljs.core.Keyword(null,"url","url",1014020321)))
{return self__.url;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k32046,new cljs.core.Keyword(null,"api","api",1014001036)))
{return self__.api;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k32046,new cljs.core.Keyword(null,"query-params","query-params",1080249757)))
{return self__.query_params;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k32046,new cljs.core.Keyword(null,"f","f",1013904344)))
{return self__.f;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k32046,new cljs.core.Keyword(null,"name","name",1017277949)))
{return self__.name;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k32046,else__8412__auto__);
} else
{return null;
}
}
}
}
}
}
});
foundation.app.models.Model.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8416__auto__,k__8417__auto__,G__32045){var self__ = this;
var this__8416__auto____$1 = this;var pred__32048 = cljs.core.keyword_identical_QMARK_;var expr__32049 = k__8417__auto__;if(cljs.core.truth_(pred__32048.call(null,new cljs.core.Keyword(null,"url","url",1014020321),expr__32049)))
{return (new foundation.app.models.Model(G__32045,self__.api,self__.query_params,self__.f,self__.name,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__32048.call(null,new cljs.core.Keyword(null,"api","api",1014001036),expr__32049)))
{return (new foundation.app.models.Model(self__.url,G__32045,self__.query_params,self__.f,self__.name,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__32048.call(null,new cljs.core.Keyword(null,"query-params","query-params",1080249757),expr__32049)))
{return (new foundation.app.models.Model(self__.url,self__.api,G__32045,self__.f,self__.name,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__32048.call(null,new cljs.core.Keyword(null,"f","f",1013904344),expr__32049)))
{return (new foundation.app.models.Model(self__.url,self__.api,self__.query_params,G__32045,self__.name,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__32048.call(null,new cljs.core.Keyword(null,"name","name",1017277949),expr__32049)))
{return (new foundation.app.models.Model(self__.url,self__.api,self__.query_params,self__.f,G__32045,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.models.Model(self__.url,self__.api,self__.query_params,self__.f,self__.name,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8417__auto__,G__32045),null));
}
}
}
}
}
});
foundation.app.models.Model.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8423__auto__,writer__8424__auto__,opts__8425__auto__){var self__ = this;
var this__8423__auto____$1 = this;var pr_pair__8426__auto__ = (function (keyval__8427__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8424__auto__,cljs.core.pr_writer,""," ","",opts__8425__auto__,keyval__8427__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__8424__auto__,pr_pair__8426__auto__,"#foundation.app.models.Model{",", ","}",opts__8425__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",1014020321),self__.url],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"api","api",1014001036),self__.api],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"query-params","query-params",1080249757),self__.query_params],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"f","f",1013904344),self__.f],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1017277949),self__.name],null))], null),self__.__extmap));
});
foundation.app.models.Model.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8414__auto__,entry__8415__auto__){var self__ = this;
var this__8414__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8415__auto__))
{return cljs.core._assoc.call(null,this__8414__auto____$1,cljs.core._nth.call(null,entry__8415__auto__,0),cljs.core._nth.call(null,entry__8415__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8414__auto____$1,entry__8415__auto__);
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
foundation.app.models.Model.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8421__auto__){var self__ = this;
var this__8421__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",1014020321),self__.url],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"api","api",1014001036),self__.api],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"query-params","query-params",1080249757),self__.query_params],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"f","f",1013904344),self__.f],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1017277949),self__.name],null))], null),self__.__extmap));
});
foundation.app.models.Model.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8413__auto__){var self__ = this;
var this__8413__auto____$1 = this;return (5 + cljs.core.count.call(null,self__.__extmap));
});
foundation.app.models.Model.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8405__auto__,other__8406__auto__){var self__ = this;
var this__8405__auto____$1 = this;if(cljs.core.truth_((function (){var and__7835__auto__ = other__8406__auto__;if(cljs.core.truth_(and__7835__auto__))
{return ((this__8405__auto____$1.constructor === other__8406__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__8405__auto____$1,other__8406__auto__));
} else
{return and__7835__auto__;
}
})()))
{return true;
} else
{return false;
}
});
foundation.app.models.Model.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8408__auto__,G__32045){var self__ = this;
var this__8408__auto____$1 = this;return (new foundation.app.models.Model(self__.url,self__.api,self__.query_params,self__.f,self__.name,G__32045,self__.__extmap,self__.__hash));
});
foundation.app.models.Model.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8407__auto__){var self__ = this;
var this__8407__auto____$1 = this;return self__.__meta;
});
foundation.app.models.Model.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8418__auto__,k__8419__auto__){var self__ = this;
var this__8418__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"query-params","query-params",1080249757),null,new cljs.core.Keyword(null,"name","name",1017277949),null,new cljs.core.Keyword(null,"f","f",1013904344),null,new cljs.core.Keyword(null,"url","url",1014020321),null,new cljs.core.Keyword(null,"api","api",1014001036),null], null), null),k__8419__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8418__auto____$1),self__.__meta),k__8419__auto__);
} else
{return (new foundation.app.models.Model(self__.url,self__.api,self__.query_params,self__.f,self__.name,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8419__auto__)),null));
}
});
foundation.app.models.Model.cljs$lang$type = true;
foundation.app.models.Model.cljs$lang$ctorPrSeq = (function (this__8443__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"foundation.app.models/Model");
});
foundation.app.models.Model.cljs$lang$ctorPrWriter = (function (this__8443__auto__,writer__8444__auto__){return cljs.core._write.call(null,writer__8444__auto__,"foundation.app.models/Model");
});
foundation.app.models.__GT_Model = (function __GT_Model(url,api,query_params,f,name){return (new foundation.app.models.Model(url,api,query_params,f,name));
});
foundation.app.models.map__GT_Model = (function map__GT_Model(G__32047){return (new foundation.app.models.Model(new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(G__32047),new cljs.core.Keyword(null,"api","api",1014001036).cljs$core$IFn$_invoke$arity$1(G__32047),new cljs.core.Keyword(null,"query-params","query-params",1080249757).cljs$core$IFn$_invoke$arity$1(G__32047),new cljs.core.Keyword(null,"f","f",1013904344).cljs$core$IFn$_invoke$arity$1(G__32047),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(G__32047),null,cljs.core.dissoc.call(null,G__32047,new cljs.core.Keyword(null,"url","url",1014020321),new cljs.core.Keyword(null,"api","api",1014001036),new cljs.core.Keyword(null,"query-params","query-params",1080249757),new cljs.core.Keyword(null,"f","f",1013904344),new cljs.core.Keyword(null,"name","name",1017277949))));
});
foundation.app.models.fetch = (function (){var method_table__8680__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8681__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8682__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8683__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8684__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("fetch",(function() { 
var G__32053__delegate = function (model,p__32051){var map__32052 = p__32051;var map__32052__$1 = ((cljs.core.seq_QMARK_.call(null,map__32052))?cljs.core.apply.call(null,cljs.core.hash_map,map__32052):map__32052);var query_params = cljs.core.get.call(null,map__32052__$1,new cljs.core.Keyword(null,"query-params","query-params",1080249757));var params = cljs.core.get.call(null,map__32052__$1,new cljs.core.Keyword(null,"params","params",4313443576));var temp__4092__auto__ = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(model);if(cljs.core.truth_(temp__4092__auto__))
{var n = temp__4092__auto__;return cljs.core.keyword.call(null,cljs.core.name.call(null,n));
} else
{return null;
}
};
var G__32053 = function (model,var_args){
var p__32051 = null;if (arguments.length > 1) {
  p__32051 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__32053__delegate.call(this,model,p__32051);};
G__32053.cljs$lang$maxFixedArity = 1;
G__32053.cljs$lang$applyTo = (function (arglist__32054){
var model = cljs.core.first(arglist__32054);
var p__32051 = cljs.core.rest(arglist__32054);
return G__32053__delegate(model,p__32051);
});
G__32053.cljs$core$IFn$_invoke$arity$variadic = G__32053__delegate;
return G__32053;
})()
,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8684__auto__,method_table__8680__auto__,prefer_table__8681__auto__,method_cache__8682__auto__,cached_hierarchy__8683__auto__));
})();
cljs.core._add_method.call(null,foundation.app.models.fetch,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__32057__delegate = function (model,p__32055){var map__32056 = p__32055;var map__32056__$1 = ((cljs.core.seq_QMARK_.call(null,map__32056))?cljs.core.apply.call(null,cljs.core.hash_map,map__32056):map__32056);var query_params = cljs.core.get.call(null,map__32056__$1,new cljs.core.Keyword(null,"query-params","query-params",1080249757),cljs.core.PersistentArrayMap.EMPTY);var params = cljs.core.get.call(null,map__32056__$1,new cljs.core.Keyword(null,"params","params",4313443576),cljs.core.PersistentArrayMap.EMPTY);return foundation.app.xhr.GET.call(null,cljs.core.apply.call(null,new cljs.core.Keyword(null,"f","f",1013904344).cljs$core$IFn$_invoke$arity$1(model),params,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_params], null)),params);
};
var G__32057 = function (model,var_args){
var p__32055 = null;if (arguments.length > 1) {
  p__32055 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__32057__delegate.call(this,model,p__32055);};
G__32057.cljs$lang$maxFixedArity = 1;
G__32057.cljs$lang$applyTo = (function (arglist__32058){
var model = cljs.core.first(arglist__32058);
var p__32055 = cljs.core.rest(arglist__32058);
return G__32057__delegate(model,p__32055);
});
G__32057.cljs$core$IFn$_invoke$arity$variadic = G__32057__delegate;
return G__32057;
})()
);
foundation.app.models.create = (function (){var method_table__8680__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8681__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8682__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8683__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8684__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("create",(function (model,params){return cljs.core.name.call(null,model);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8684__auto__,method_table__8680__auto__,prefer_table__8681__auto__,method_cache__8682__auto__,cached_hierarchy__8683__auto__));
})();
cljs.core._add_method.call(null,foundation.app.models.create,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__32061__delegate = function (model,p__32059){var map__32060 = p__32059;var map__32060__$1 = ((cljs.core.seq_QMARK_.call(null,map__32060))?cljs.core.apply.call(null,cljs.core.hash_map,map__32060):map__32060);var query_params = cljs.core.get.call(null,map__32060__$1,new cljs.core.Keyword(null,"query-params","query-params",1080249757),cljs.core.PersistentArrayMap.EMPTY);var params = cljs.core.get.call(null,map__32060__$1,new cljs.core.Keyword(null,"params","params",4313443576),cljs.core.PersistentArrayMap.EMPTY);return foundation.app.xhr.POST.call(null,cljs.core.apply.call(null,new cljs.core.Keyword(null,"f","f",1013904344).cljs$core$IFn$_invoke$arity$1(model),params,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_params], null)),params);
};
var G__32061 = function (model,var_args){
var p__32059 = null;if (arguments.length > 1) {
  p__32059 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__32061__delegate.call(this,model,p__32059);};
G__32061.cljs$lang$maxFixedArity = 1;
G__32061.cljs$lang$applyTo = (function (arglist__32062){
var model = cljs.core.first(arglist__32062);
var p__32059 = cljs.core.rest(arglist__32062);
return G__32061__delegate(model,p__32059);
});
G__32061.cljs$core$IFn$_invoke$arity$variadic = G__32061__delegate;
return G__32061;
})()
);
foundation.app.models.update = (function (){var method_table__8680__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8681__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8682__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8683__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8684__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("update",(function (model,params){return cljs.core.name.call(null,model);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8684__auto__,method_table__8680__auto__,prefer_table__8681__auto__,method_cache__8682__auto__,cached_hierarchy__8683__auto__));
})();
cljs.core._add_method.call(null,foundation.app.models.update,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__32065__delegate = function (model,p__32063){var map__32064 = p__32063;var map__32064__$1 = ((cljs.core.seq_QMARK_.call(null,map__32064))?cljs.core.apply.call(null,cljs.core.hash_map,map__32064):map__32064);var query_params = cljs.core.get.call(null,map__32064__$1,new cljs.core.Keyword(null,"query-params","query-params",1080249757),cljs.core.PersistentArrayMap.EMPTY);var params = cljs.core.get.call(null,map__32064__$1,new cljs.core.Keyword(null,"params","params",4313443576),cljs.core.PersistentArrayMap.EMPTY);return foundation.app.xhr.PUT.call(null,cljs.core.apply.call(null,new cljs.core.Keyword(null,"f","f",1013904344).cljs$core$IFn$_invoke$arity$1(model),params,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_params], null)),params);
};
var G__32065 = function (model,var_args){
var p__32063 = null;if (arguments.length > 1) {
  p__32063 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__32065__delegate.call(this,model,p__32063);};
G__32065.cljs$lang$maxFixedArity = 1;
G__32065.cljs$lang$applyTo = (function (arglist__32066){
var model = cljs.core.first(arglist__32066);
var p__32063 = cljs.core.rest(arglist__32066);
return G__32065__delegate(model,p__32063);
});
G__32065.cljs$core$IFn$_invoke$arity$variadic = G__32065__delegate;
return G__32065;
})()
);
foundation.app.models.delete$ = (function (){var method_table__8680__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8681__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8682__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8683__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8684__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("delete",(function (model,params){return cljs.core.name.call(null,model);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8684__auto__,method_table__8680__auto__,prefer_table__8681__auto__,method_cache__8682__auto__,cached_hierarchy__8683__auto__));
})();
cljs.core._add_method.call(null,foundation.app.models.delete$,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__32069__delegate = function (model,params,p__32067){var map__32068 = p__32067;var map__32068__$1 = ((cljs.core.seq_QMARK_.call(null,map__32068))?cljs.core.apply.call(null,cljs.core.hash_map,map__32068):map__32068);var query_params = cljs.core.get.call(null,map__32068__$1,new cljs.core.Keyword(null,"query-params","query-params",1080249757),cljs.core.PersistentArrayMap.EMPTY);return foundation.app.xhr.DELETE.call(null,cljs.core.apply.call(null,new cljs.core.Keyword(null,"f","f",1013904344).cljs$core$IFn$_invoke$arity$1(model),params,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_params], null)),params);
};
var G__32069 = function (model,params,var_args){
var p__32067 = null;if (arguments.length > 2) {
  p__32067 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__32069__delegate.call(this,model,params,p__32067);};
G__32069.cljs$lang$maxFixedArity = 2;
G__32069.cljs$lang$applyTo = (function (arglist__32070){
var model = cljs.core.first(arglist__32070);
arglist__32070 = cljs.core.next(arglist__32070);
var params = cljs.core.first(arglist__32070);
var p__32067 = cljs.core.rest(arglist__32070);
return G__32069__delegate(model,params,p__32067);
});
G__32069.cljs$core$IFn$_invoke$arity$variadic = G__32069__delegate;
return G__32069;
})()
);
