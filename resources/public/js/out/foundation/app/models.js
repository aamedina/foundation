// Compiled by ClojureScript 0.0-2120
goog.provide('foundation.app.models');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('foundation.app.data.dependency');
goog.require('clojure.walk');
goog.require('goog.Uri.QueryData');
goog.require('foundation.app.xhr');
goog.require('clojure.walk');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('foundation.app.data.dependency');
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
{var vec__40388 = cljs.core.first.call(null,matches);var token = cljs.core.nth.call(null,vec__40388,0,null);var kw = cljs.core.nth.call(null,vec__40388,1,null);var value = cljs.core.get.call(null,params__$1,cljs.core.keyword.call(null,kw));{
var G__40389 = cljs.core.rest.call(null,matches);
var G__40390 = clojure.string.replace.call(null,result,token,[cljs.core.str(value)].join(''));
matches = G__40389;
result = G__40390;
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
subs_uri.cljs$lang$applyTo = (function (arglist__40391){
var uri = cljs.core.first(arglist__40391);
var params = cljs.core.rest(arglist__40391);
return subs_uri__delegate(uri,params);
});
subs_uri.cljs$core$IFn$_invoke$arity$variadic = subs_uri__delegate;
return subs_uri;
})()
;
foundation.app.models.query_params = (function query_params(kvs){if(cljs.core.seq.call(null,kvs))
{return [cljs.core.str("?"),cljs.core.str(cljs.core.apply.call(null,goog.Uri.QueryData.createFromKeysValues,cljs.core.map.call(null,cljs.core.clj__GT_js,cljs.core.juxt.call(null,cljs.core.keys,cljs.core.vals).call(null,cljs.core.reduce.call(null,(function (m,p__40394){var vec__40395 = p__40394;var k = cljs.core.nth.call(null,vec__40395,0,null);var v = cljs.core.nth.call(null,vec__40395,1,null);return cljs.core.assoc.call(null,m,clojure.string.replace.call(null,k,/-/,"_"),v);
}),cljs.core.PersistentArrayMap.EMPTY,clojure.walk.stringify_keys.call(null,kvs))))))].join('');
} else
{return null;
}
});
foundation.app.models.reify_url = (function reify_url(p__40396,model,kvs){var map__40398 = p__40396;var map__40398__$1 = ((cljs.core.seq_QMARK_.call(null,map__40398))?cljs.core.apply.call(null,cljs.core.hash_map,map__40398):map__40398);var api = cljs.core.get.call(null,map__40398__$1,new cljs.core.Keyword(null,"api","api",1014001036));var re = cljs.core.get.call(null,map__40398__$1,new cljs.core.Keyword(null,"re","re",1013907877));var keys = cljs.core.get.call(null,map__40398__$1,new cljs.core.Keyword(null,"keys","keys",1017192806));var url = cljs.core.get.call(null,map__40398__$1,new cljs.core.Keyword(null,"url","url",1014020321));var params = cljs.core.select_keys.call(null,model,keys);var query_string = foundation.app.models.query_params.call(null,cljs.core.merge.call(null,kvs,cljs.core.fnil.call(null,cljs.core.select_keys,cljs.core.PersistentArrayMap.EMPTY).call(null,new cljs.core.Keyword(null,"query-params","query-params",1080249757).cljs$core$IFn$_invoke$arity$1(model),model)));return [cljs.core.str(api),cljs.core.str(foundation.app.models.subs_uri.call(null,url,params)),cljs.core.str(query_string)].join('');
});

/**
* @constructor
* @param {*} url
* @param {*} api
* @param {*} query_params
* @param {*} name
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
foundation.app.models.Model = (function (url,api,query_params,name,__meta,__extmap){
this.url = url;
this.api = api;
this.query_params = query_params;
this.name = name;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>4){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
foundation.app.models.Model.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8807__auto__){var self__ = this;
var this__8807__auto____$1 = this;var h__8661__auto__ = self__.__hash;if(!((h__8661__auto__ == null)))
{return h__8661__auto__;
} else
{var h__8661__auto____$1 = cljs.core.hash_imap.call(null,this__8807__auto____$1);self__.__hash = h__8661__auto____$1;
return h__8661__auto____$1;
}
});
foundation.app.models.Model.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8812__auto__,k__8813__auto__){var self__ = this;
var this__8812__auto____$1 = this;return cljs.core._lookup.call(null,this__8812__auto____$1,k__8813__auto__,null);
});
foundation.app.models.Model.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8814__auto__,k40400,else__8815__auto__){var self__ = this;
var this__8814__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k40400,new cljs.core.Keyword(null,"url","url",1014020321)))
{return self__.url;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k40400,new cljs.core.Keyword(null,"api","api",1014001036)))
{return self__.api;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k40400,new cljs.core.Keyword(null,"query-params","query-params",1080249757)))
{return self__.query_params;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k40400,new cljs.core.Keyword(null,"name","name",1017277949)))
{return self__.name;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k40400,else__8815__auto__);
} else
{return null;
}
}
}
}
}
});
foundation.app.models.Model.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8819__auto__,k__8820__auto__,G__40399){var self__ = this;
var this__8819__auto____$1 = this;var pred__40402 = cljs.core.keyword_identical_QMARK_;var expr__40403 = k__8820__auto__;if(cljs.core.truth_(pred__40402.call(null,new cljs.core.Keyword(null,"url","url",1014020321),expr__40403)))
{return (new foundation.app.models.Model(G__40399,self__.api,self__.query_params,self__.name,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__40402.call(null,new cljs.core.Keyword(null,"api","api",1014001036),expr__40403)))
{return (new foundation.app.models.Model(self__.url,G__40399,self__.query_params,self__.name,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__40402.call(null,new cljs.core.Keyword(null,"query-params","query-params",1080249757),expr__40403)))
{return (new foundation.app.models.Model(self__.url,self__.api,G__40399,self__.name,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__40402.call(null,new cljs.core.Keyword(null,"name","name",1017277949),expr__40403)))
{return (new foundation.app.models.Model(self__.url,self__.api,self__.query_params,G__40399,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.models.Model(self__.url,self__.api,self__.query_params,self__.name,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8820__auto__,G__40399),null));
}
}
}
}
});
foundation.app.models.Model.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8826__auto__,writer__8827__auto__,opts__8828__auto__){var self__ = this;
var this__8826__auto____$1 = this;var pr_pair__8829__auto__ = (function (keyval__8830__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8827__auto__,cljs.core.pr_writer,""," ","",opts__8828__auto__,keyval__8830__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__8827__auto__,pr_pair__8829__auto__,"#foundation.app.models.Model{",", ","}",opts__8828__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",1014020321),self__.url],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"api","api",1014001036),self__.api],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"query-params","query-params",1080249757),self__.query_params],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1017277949),self__.name],null))], null),self__.__extmap));
});
foundation.app.models.Model.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8817__auto__,entry__8818__auto__){var self__ = this;
var this__8817__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8818__auto__))
{return cljs.core._assoc.call(null,this__8817__auto____$1,cljs.core._nth.call(null,entry__8818__auto__,0),cljs.core._nth.call(null,entry__8818__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8817__auto____$1,entry__8818__auto__);
}
});
foundation.app.models.Model.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8824__auto__){var self__ = this;
var this__8824__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",1014020321),self__.url],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"api","api",1014001036),self__.api],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"query-params","query-params",1080249757),self__.query_params],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1017277949),self__.name],null))], null),self__.__extmap));
});
foundation.app.models.Model.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8816__auto__){var self__ = this;
var this__8816__auto____$1 = this;return (4 + cljs.core.count.call(null,self__.__extmap));
});
foundation.app.models.Model.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8808__auto__,other__8809__auto__){var self__ = this;
var this__8808__auto____$1 = this;if(cljs.core.truth_((function (){var and__8233__auto__ = other__8809__auto__;if(cljs.core.truth_(and__8233__auto__))
{return ((this__8808__auto____$1.constructor === other__8809__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__8808__auto____$1,other__8809__auto__));
} else
{return and__8233__auto__;
}
})()))
{return true;
} else
{return false;
}
});
foundation.app.models.Model.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8811__auto__,G__40399){var self__ = this;
var this__8811__auto____$1 = this;return (new foundation.app.models.Model(self__.url,self__.api,self__.query_params,self__.name,G__40399,self__.__extmap,self__.__hash));
});
foundation.app.models.Model.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8810__auto__){var self__ = this;
var this__8810__auto____$1 = this;return self__.__meta;
});
foundation.app.models.Model.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8821__auto__,k__8822__auto__){var self__ = this;
var this__8821__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query-params","query-params",1080249757),null,new cljs.core.Keyword(null,"name","name",1017277949),null,new cljs.core.Keyword(null,"url","url",1014020321),null,new cljs.core.Keyword(null,"api","api",1014001036),null], null), null),k__8822__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8821__auto____$1),self__.__meta),k__8822__auto__);
} else
{return (new foundation.app.models.Model(self__.url,self__.api,self__.query_params,self__.name,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8822__auto__)),null));
}
});
foundation.app.models.Model.cljs$lang$type = true;
foundation.app.models.Model.cljs$lang$ctorPrSeq = (function (this__8846__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"foundation.app.models/Model");
});
foundation.app.models.Model.cljs$lang$ctorPrWriter = (function (this__8846__auto__,writer__8847__auto__){return cljs.core._write.call(null,writer__8847__auto__,"foundation.app.models/Model");
});
foundation.app.models.__GT_Model = (function __GT_Model(url,api,query_params,name){return (new foundation.app.models.Model(url,api,query_params,name));
});
foundation.app.models.map__GT_Model = (function map__GT_Model(G__40401){return (new foundation.app.models.Model(new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(G__40401),new cljs.core.Keyword(null,"api","api",1014001036).cljs$core$IFn$_invoke$arity$1(G__40401),new cljs.core.Keyword(null,"query-params","query-params",1080249757).cljs$core$IFn$_invoke$arity$1(G__40401),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(G__40401),null,cljs.core.dissoc.call(null,G__40401,new cljs.core.Keyword(null,"url","url",1014020321),new cljs.core.Keyword(null,"api","api",1014001036),new cljs.core.Keyword(null,"query-params","query-params",1080249757),new cljs.core.Keyword(null,"name","name",1017277949))));
});
foundation.app.models.fetch = (function (){var method_table__9083__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__9084__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__9085__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__9086__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__9087__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("fetch",(function() { 
var G__40405__delegate = function (model,args){var temp__4092__auto__ = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(model);if(cljs.core.truth_(temp__4092__auto__))
{var n = temp__4092__auto__;return cljs.core.keyword.call(null,cljs.core.name.call(null,n));
} else
{return null;
}
};
var G__40405 = function (model,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__40405__delegate.call(this,model,args);};
G__40405.cljs$lang$maxFixedArity = 1;
G__40405.cljs$lang$applyTo = (function (arglist__40406){
var model = cljs.core.first(arglist__40406);
var args = cljs.core.rest(arglist__40406);
return G__40405__delegate(model,args);
});
G__40405.cljs$core$IFn$_invoke$arity$variadic = G__40405__delegate;
return G__40405;
})()
,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__9087__auto__,method_table__9083__auto__,prefer_table__9084__auto__,method_cache__9085__auto__,cached_hierarchy__9086__auto__));
})();
cljs.core._add_method.call(null,foundation.app.models.fetch,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__40409__delegate = function (model,p__40407){var map__40408 = p__40407;var map__40408__$1 = ((cljs.core.seq_QMARK_.call(null,map__40408))?cljs.core.apply.call(null,cljs.core.hash_map,map__40408):map__40408);var query_params = cljs.core.get.call(null,map__40408__$1,new cljs.core.Keyword(null,"query-params","query-params",1080249757),cljs.core.PersistentArrayMap.EMPTY);var params = cljs.core.get.call(null,map__40408__$1,new cljs.core.Keyword(null,"params","params",4313443576),cljs.core.PersistentArrayMap.EMPTY);return foundation.app.xhr.GET.call(null,cljs.core.apply.call(null,foundation.app.models.reify_url,model,params,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_params], null)),params);
};
var G__40409 = function (model,var_args){
var p__40407 = null;if (arguments.length > 1) {
  p__40407 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__40409__delegate.call(this,model,p__40407);};
G__40409.cljs$lang$maxFixedArity = 1;
G__40409.cljs$lang$applyTo = (function (arglist__40410){
var model = cljs.core.first(arglist__40410);
var p__40407 = cljs.core.rest(arglist__40410);
return G__40409__delegate(model,p__40407);
});
G__40409.cljs$core$IFn$_invoke$arity$variadic = G__40409__delegate;
return G__40409;
})()
);
foundation.app.models.create = (function (){var method_table__9083__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__9084__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__9085__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__9086__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__9087__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("create",(function (model,params){return cljs.core.name.call(null,model);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__9087__auto__,method_table__9083__auto__,prefer_table__9084__auto__,method_cache__9085__auto__,cached_hierarchy__9086__auto__));
})();
cljs.core._add_method.call(null,foundation.app.models.create,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__40413__delegate = function (model,p__40411){var map__40412 = p__40411;var map__40412__$1 = ((cljs.core.seq_QMARK_.call(null,map__40412))?cljs.core.apply.call(null,cljs.core.hash_map,map__40412):map__40412);var query_params = cljs.core.get.call(null,map__40412__$1,new cljs.core.Keyword(null,"query-params","query-params",1080249757),cljs.core.PersistentArrayMap.EMPTY);var params = cljs.core.get.call(null,map__40412__$1,new cljs.core.Keyword(null,"params","params",4313443576),cljs.core.PersistentArrayMap.EMPTY);return foundation.app.xhr.POST.call(null,cljs.core.apply.call(null,foundation.app.models.reify_url,model,params,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_params], null)),params);
};
var G__40413 = function (model,var_args){
var p__40411 = null;if (arguments.length > 1) {
  p__40411 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__40413__delegate.call(this,model,p__40411);};
G__40413.cljs$lang$maxFixedArity = 1;
G__40413.cljs$lang$applyTo = (function (arglist__40414){
var model = cljs.core.first(arglist__40414);
var p__40411 = cljs.core.rest(arglist__40414);
return G__40413__delegate(model,p__40411);
});
G__40413.cljs$core$IFn$_invoke$arity$variadic = G__40413__delegate;
return G__40413;
})()
);
foundation.app.models.update = (function (){var method_table__9083__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__9084__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__9085__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__9086__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__9087__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("update",(function (model,params){return cljs.core.name.call(null,model);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__9087__auto__,method_table__9083__auto__,prefer_table__9084__auto__,method_cache__9085__auto__,cached_hierarchy__9086__auto__));
})();
cljs.core._add_method.call(null,foundation.app.models.update,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__40417__delegate = function (model,p__40415){var map__40416 = p__40415;var map__40416__$1 = ((cljs.core.seq_QMARK_.call(null,map__40416))?cljs.core.apply.call(null,cljs.core.hash_map,map__40416):map__40416);var query_params = cljs.core.get.call(null,map__40416__$1,new cljs.core.Keyword(null,"query-params","query-params",1080249757),cljs.core.PersistentArrayMap.EMPTY);var params = cljs.core.get.call(null,map__40416__$1,new cljs.core.Keyword(null,"params","params",4313443576),cljs.core.PersistentArrayMap.EMPTY);return foundation.app.xhr.PUT.call(null,cljs.core.apply.call(null,foundation.app.models.reify_url,model,params,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_params], null)),params);
};
var G__40417 = function (model,var_args){
var p__40415 = null;if (arguments.length > 1) {
  p__40415 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__40417__delegate.call(this,model,p__40415);};
G__40417.cljs$lang$maxFixedArity = 1;
G__40417.cljs$lang$applyTo = (function (arglist__40418){
var model = cljs.core.first(arglist__40418);
var p__40415 = cljs.core.rest(arglist__40418);
return G__40417__delegate(model,p__40415);
});
G__40417.cljs$core$IFn$_invoke$arity$variadic = G__40417__delegate;
return G__40417;
})()
);
foundation.app.models.delete$ = (function (){var method_table__9083__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__9084__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__9085__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__9086__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__9087__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("delete",(function (model,params){return cljs.core.name.call(null,model);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__9087__auto__,method_table__9083__auto__,prefer_table__9084__auto__,method_cache__9085__auto__,cached_hierarchy__9086__auto__));
})();
cljs.core._add_method.call(null,foundation.app.models.delete$,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__40421__delegate = function (model,params,p__40419){var map__40420 = p__40419;var map__40420__$1 = ((cljs.core.seq_QMARK_.call(null,map__40420))?cljs.core.apply.call(null,cljs.core.hash_map,map__40420):map__40420);var query_params = cljs.core.get.call(null,map__40420__$1,new cljs.core.Keyword(null,"query-params","query-params",1080249757),cljs.core.PersistentArrayMap.EMPTY);return foundation.app.xhr.DELETE.call(null,cljs.core.apply.call(null,foundation.app.models.reify_url,model,params,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_params], null)),params);
};
var G__40421 = function (model,params,var_args){
var p__40419 = null;if (arguments.length > 2) {
  p__40419 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__40421__delegate.call(this,model,params,p__40419);};
G__40421.cljs$lang$maxFixedArity = 2;
G__40421.cljs$lang$applyTo = (function (arglist__40422){
var model = cljs.core.first(arglist__40422);
arglist__40422 = cljs.core.next(arglist__40422);
var params = cljs.core.first(arglist__40422);
var p__40419 = cljs.core.rest(arglist__40422);
return G__40421__delegate(model,params,p__40419);
});
G__40421.cljs$core$IFn$_invoke$arity$variadic = G__40421__delegate;
return G__40421;
})()
);

//# sourceMappingURL=models.js.map