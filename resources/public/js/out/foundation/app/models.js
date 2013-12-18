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
{var vec__46417 = cljs.core.first.call(null,matches);var token = cljs.core.nth.call(null,vec__46417,0,null);var kw = cljs.core.nth.call(null,vec__46417,1,null);var value = cljs.core.get.call(null,params__$1,cljs.core.keyword.call(null,kw));{
var G__46418 = cljs.core.rest.call(null,matches);
var G__46419 = clojure.string.replace.call(null,result,token,[cljs.core.str(value)].join(''));
matches = G__46418;
result = G__46419;
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
subs_uri.cljs$lang$applyTo = (function (arglist__46420){
var uri = cljs.core.first(arglist__46420);
var params = cljs.core.rest(arglist__46420);
return subs_uri__delegate(uri,params);
});
subs_uri.cljs$core$IFn$_invoke$arity$variadic = subs_uri__delegate;
return subs_uri;
})()
;
foundation.app.models.query_params = (function query_params(kvs){if(cljs.core.seq.call(null,kvs))
{return [cljs.core.str("?"),cljs.core.str(cljs.core.apply.call(null,goog.Uri.QueryData.createFromKeysValues,cljs.core.map.call(null,cljs.core.clj__GT_js,cljs.core.juxt.call(null,cljs.core.keys,cljs.core.vals).call(null,cljs.core.reduce.call(null,(function (m,p__46423){var vec__46424 = p__46423;var k = cljs.core.nth.call(null,vec__46424,0,null);var v = cljs.core.nth.call(null,vec__46424,1,null);return cljs.core.assoc.call(null,m,clojure.string.replace.call(null,k,/-/,"_"),v);
}),cljs.core.PersistentArrayMap.EMPTY,clojure.walk.stringify_keys.call(null,kvs))))))].join('');
} else
{return null;
}
});
foundation.app.models.reify_url = (function reify_url(p__46425,model,kvs){var map__46427 = p__46425;var map__46427__$1 = ((cljs.core.seq_QMARK_.call(null,map__46427))?cljs.core.apply.call(null,cljs.core.hash_map,map__46427):map__46427);var api = cljs.core.get.call(null,map__46427__$1,new cljs.core.Keyword(null,"api","api",1014001036));var re = cljs.core.get.call(null,map__46427__$1,new cljs.core.Keyword(null,"re","re",1013907877));var keys = cljs.core.get.call(null,map__46427__$1,new cljs.core.Keyword(null,"keys","keys",1017192806));var url = cljs.core.get.call(null,map__46427__$1,new cljs.core.Keyword(null,"url","url",1014020321));var params = cljs.core.select_keys.call(null,model,keys);var query_string = foundation.app.models.query_params.call(null,cljs.core.merge.call(null,kvs,cljs.core.fnil.call(null,cljs.core.select_keys,cljs.core.PersistentArrayMap.EMPTY).call(null,new cljs.core.Keyword(null,"query-params","query-params",1080249757).cljs$core$IFn$_invoke$arity$1(model),model)));return [cljs.core.str(api),cljs.core.str(foundation.app.models.subs_uri.call(null,url,params)),cljs.core.str(query_string)].join('');
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
foundation.app.models.Model.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8760__auto__){var self__ = this;
var this__8760__auto____$1 = this;var h__8614__auto__ = self__.__hash;if(!((h__8614__auto__ == null)))
{return h__8614__auto__;
} else
{var h__8614__auto____$1 = cljs.core.hash_imap.call(null,this__8760__auto____$1);self__.__hash = h__8614__auto____$1;
return h__8614__auto____$1;
}
});
foundation.app.models.Model.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8765__auto__,k__8766__auto__){var self__ = this;
var this__8765__auto____$1 = this;return cljs.core._lookup.call(null,this__8765__auto____$1,k__8766__auto__,null);
});
foundation.app.models.Model.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8767__auto__,k46429,else__8768__auto__){var self__ = this;
var this__8767__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k46429,new cljs.core.Keyword(null,"url","url",1014020321)))
{return self__.url;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k46429,new cljs.core.Keyword(null,"api","api",1014001036)))
{return self__.api;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k46429,new cljs.core.Keyword(null,"query-params","query-params",1080249757)))
{return self__.query_params;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k46429,new cljs.core.Keyword(null,"name","name",1017277949)))
{return self__.name;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k46429,else__8768__auto__);
} else
{return null;
}
}
}
}
}
});
foundation.app.models.Model.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8772__auto__,k__8773__auto__,G__46428){var self__ = this;
var this__8772__auto____$1 = this;var pred__46431 = cljs.core.keyword_identical_QMARK_;var expr__46432 = k__8773__auto__;if(cljs.core.truth_(pred__46431.call(null,new cljs.core.Keyword(null,"url","url",1014020321),expr__46432)))
{return (new foundation.app.models.Model(G__46428,self__.api,self__.query_params,self__.name,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__46431.call(null,new cljs.core.Keyword(null,"api","api",1014001036),expr__46432)))
{return (new foundation.app.models.Model(self__.url,G__46428,self__.query_params,self__.name,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__46431.call(null,new cljs.core.Keyword(null,"query-params","query-params",1080249757),expr__46432)))
{return (new foundation.app.models.Model(self__.url,self__.api,G__46428,self__.name,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__46431.call(null,new cljs.core.Keyword(null,"name","name",1017277949),expr__46432)))
{return (new foundation.app.models.Model(self__.url,self__.api,self__.query_params,G__46428,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.models.Model(self__.url,self__.api,self__.query_params,self__.name,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8773__auto__,G__46428),null));
}
}
}
}
});
foundation.app.models.Model.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8779__auto__,writer__8780__auto__,opts__8781__auto__){var self__ = this;
var this__8779__auto____$1 = this;var pr_pair__8782__auto__ = (function (keyval__8783__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8780__auto__,cljs.core.pr_writer,""," ","",opts__8781__auto__,keyval__8783__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__8780__auto__,pr_pair__8782__auto__,"#foundation.app.models.Model{",", ","}",opts__8781__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",1014020321),self__.url],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"api","api",1014001036),self__.api],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"query-params","query-params",1080249757),self__.query_params],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1017277949),self__.name],null))], null),self__.__extmap));
});
foundation.app.models.Model.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8770__auto__,entry__8771__auto__){var self__ = this;
var this__8770__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8771__auto__))
{return cljs.core._assoc.call(null,this__8770__auto____$1,cljs.core._nth.call(null,entry__8771__auto__,0),cljs.core._nth.call(null,entry__8771__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8770__auto____$1,entry__8771__auto__);
}
});
foundation.app.models.Model.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8777__auto__){var self__ = this;
var this__8777__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",1014020321),self__.url],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"api","api",1014001036),self__.api],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"query-params","query-params",1080249757),self__.query_params],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1017277949),self__.name],null))], null),self__.__extmap));
});
foundation.app.models.Model.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8769__auto__){var self__ = this;
var this__8769__auto____$1 = this;return (4 + cljs.core.count.call(null,self__.__extmap));
});
foundation.app.models.Model.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8761__auto__,other__8762__auto__){var self__ = this;
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
foundation.app.models.Model.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8764__auto__,G__46428){var self__ = this;
var this__8764__auto____$1 = this;return (new foundation.app.models.Model(self__.url,self__.api,self__.query_params,self__.name,G__46428,self__.__extmap,self__.__hash));
});
foundation.app.models.Model.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8763__auto__){var self__ = this;
var this__8763__auto____$1 = this;return self__.__meta;
});
foundation.app.models.Model.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8774__auto__,k__8775__auto__){var self__ = this;
var this__8774__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query-params","query-params",1080249757),null,new cljs.core.Keyword(null,"name","name",1017277949),null,new cljs.core.Keyword(null,"url","url",1014020321),null,new cljs.core.Keyword(null,"api","api",1014001036),null], null), null),k__8775__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8774__auto____$1),self__.__meta),k__8775__auto__);
} else
{return (new foundation.app.models.Model(self__.url,self__.api,self__.query_params,self__.name,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8775__auto__)),null));
}
});
foundation.app.models.Model.cljs$lang$type = true;
foundation.app.models.Model.cljs$lang$ctorPrSeq = (function (this__8799__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"foundation.app.models/Model");
});
foundation.app.models.Model.cljs$lang$ctorPrWriter = (function (this__8799__auto__,writer__8800__auto__){return cljs.core._write.call(null,writer__8800__auto__,"foundation.app.models/Model");
});
foundation.app.models.__GT_Model = (function __GT_Model(url,api,query_params,name){return (new foundation.app.models.Model(url,api,query_params,name));
});
foundation.app.models.map__GT_Model = (function map__GT_Model(G__46430){return (new foundation.app.models.Model(new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(G__46430),new cljs.core.Keyword(null,"api","api",1014001036).cljs$core$IFn$_invoke$arity$1(G__46430),new cljs.core.Keyword(null,"query-params","query-params",1080249757).cljs$core$IFn$_invoke$arity$1(G__46430),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(G__46430),null,cljs.core.dissoc.call(null,G__46430,new cljs.core.Keyword(null,"url","url",1014020321),new cljs.core.Keyword(null,"api","api",1014001036),new cljs.core.Keyword(null,"query-params","query-params",1080249757),new cljs.core.Keyword(null,"name","name",1017277949))));
});
foundation.app.models.fetch = (function (){var method_table__9036__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__9037__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__9038__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__9039__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__9040__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("fetch",(function() { 
var G__46434__delegate = function (model,args){var temp__4092__auto__ = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(model);if(cljs.core.truth_(temp__4092__auto__))
{var n = temp__4092__auto__;return cljs.core.keyword.call(null,cljs.core.name.call(null,n));
} else
{return null;
}
};
var G__46434 = function (model,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__46434__delegate.call(this,model,args);};
G__46434.cljs$lang$maxFixedArity = 1;
G__46434.cljs$lang$applyTo = (function (arglist__46435){
var model = cljs.core.first(arglist__46435);
var args = cljs.core.rest(arglist__46435);
return G__46434__delegate(model,args);
});
G__46434.cljs$core$IFn$_invoke$arity$variadic = G__46434__delegate;
return G__46434;
})()
,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__9040__auto__,method_table__9036__auto__,prefer_table__9037__auto__,method_cache__9038__auto__,cached_hierarchy__9039__auto__));
})();
cljs.core._add_method.call(null,foundation.app.models.fetch,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__46438__delegate = function (model,p__46436){var map__46437 = p__46436;var map__46437__$1 = ((cljs.core.seq_QMARK_.call(null,map__46437))?cljs.core.apply.call(null,cljs.core.hash_map,map__46437):map__46437);var query_params = cljs.core.get.call(null,map__46437__$1,new cljs.core.Keyword(null,"query-params","query-params",1080249757),cljs.core.PersistentArrayMap.EMPTY);var params = cljs.core.get.call(null,map__46437__$1,new cljs.core.Keyword(null,"params","params",4313443576),cljs.core.PersistentArrayMap.EMPTY);return foundation.app.xhr.GET.call(null,cljs.core.apply.call(null,foundation.app.models.reify_url,model,params,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_params], null)),params);
};
var G__46438 = function (model,var_args){
var p__46436 = null;if (arguments.length > 1) {
  p__46436 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__46438__delegate.call(this,model,p__46436);};
G__46438.cljs$lang$maxFixedArity = 1;
G__46438.cljs$lang$applyTo = (function (arglist__46439){
var model = cljs.core.first(arglist__46439);
var p__46436 = cljs.core.rest(arglist__46439);
return G__46438__delegate(model,p__46436);
});
G__46438.cljs$core$IFn$_invoke$arity$variadic = G__46438__delegate;
return G__46438;
})()
);
foundation.app.models.create = (function (){var method_table__9036__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__9037__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__9038__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__9039__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__9040__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("create",(function (model,params){return cljs.core.name.call(null,model);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__9040__auto__,method_table__9036__auto__,prefer_table__9037__auto__,method_cache__9038__auto__,cached_hierarchy__9039__auto__));
})();
cljs.core._add_method.call(null,foundation.app.models.create,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__46442__delegate = function (model,p__46440){var map__46441 = p__46440;var map__46441__$1 = ((cljs.core.seq_QMARK_.call(null,map__46441))?cljs.core.apply.call(null,cljs.core.hash_map,map__46441):map__46441);var query_params = cljs.core.get.call(null,map__46441__$1,new cljs.core.Keyword(null,"query-params","query-params",1080249757),cljs.core.PersistentArrayMap.EMPTY);var params = cljs.core.get.call(null,map__46441__$1,new cljs.core.Keyword(null,"params","params",4313443576),cljs.core.PersistentArrayMap.EMPTY);return foundation.app.xhr.POST.call(null,cljs.core.apply.call(null,foundation.app.models.reify_url,model,params,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_params], null)),params);
};
var G__46442 = function (model,var_args){
var p__46440 = null;if (arguments.length > 1) {
  p__46440 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__46442__delegate.call(this,model,p__46440);};
G__46442.cljs$lang$maxFixedArity = 1;
G__46442.cljs$lang$applyTo = (function (arglist__46443){
var model = cljs.core.first(arglist__46443);
var p__46440 = cljs.core.rest(arglist__46443);
return G__46442__delegate(model,p__46440);
});
G__46442.cljs$core$IFn$_invoke$arity$variadic = G__46442__delegate;
return G__46442;
})()
);
foundation.app.models.update = (function (){var method_table__9036__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__9037__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__9038__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__9039__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__9040__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("update",(function (model,params){return cljs.core.name.call(null,model);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__9040__auto__,method_table__9036__auto__,prefer_table__9037__auto__,method_cache__9038__auto__,cached_hierarchy__9039__auto__));
})();
cljs.core._add_method.call(null,foundation.app.models.update,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__46446__delegate = function (model,p__46444){var map__46445 = p__46444;var map__46445__$1 = ((cljs.core.seq_QMARK_.call(null,map__46445))?cljs.core.apply.call(null,cljs.core.hash_map,map__46445):map__46445);var query_params = cljs.core.get.call(null,map__46445__$1,new cljs.core.Keyword(null,"query-params","query-params",1080249757),cljs.core.PersistentArrayMap.EMPTY);var params = cljs.core.get.call(null,map__46445__$1,new cljs.core.Keyword(null,"params","params",4313443576),cljs.core.PersistentArrayMap.EMPTY);return foundation.app.xhr.PUT.call(null,cljs.core.apply.call(null,foundation.app.models.reify_url,model,params,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_params], null)),params);
};
var G__46446 = function (model,var_args){
var p__46444 = null;if (arguments.length > 1) {
  p__46444 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__46446__delegate.call(this,model,p__46444);};
G__46446.cljs$lang$maxFixedArity = 1;
G__46446.cljs$lang$applyTo = (function (arglist__46447){
var model = cljs.core.first(arglist__46447);
var p__46444 = cljs.core.rest(arglist__46447);
return G__46446__delegate(model,p__46444);
});
G__46446.cljs$core$IFn$_invoke$arity$variadic = G__46446__delegate;
return G__46446;
})()
);
foundation.app.models.delete$ = (function (){var method_table__9036__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__9037__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__9038__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__9039__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__9040__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("delete",(function (model,params){return cljs.core.name.call(null,model);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__9040__auto__,method_table__9036__auto__,prefer_table__9037__auto__,method_cache__9038__auto__,cached_hierarchy__9039__auto__));
})();
cljs.core._add_method.call(null,foundation.app.models.delete$,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__46450__delegate = function (model,params,p__46448){var map__46449 = p__46448;var map__46449__$1 = ((cljs.core.seq_QMARK_.call(null,map__46449))?cljs.core.apply.call(null,cljs.core.hash_map,map__46449):map__46449);var query_params = cljs.core.get.call(null,map__46449__$1,new cljs.core.Keyword(null,"query-params","query-params",1080249757),cljs.core.PersistentArrayMap.EMPTY);return foundation.app.xhr.DELETE.call(null,cljs.core.apply.call(null,foundation.app.models.reify_url,model,params,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_params], null)),params);
};
var G__46450 = function (model,params,var_args){
var p__46448 = null;if (arguments.length > 2) {
  p__46448 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__46450__delegate.call(this,model,params,p__46448);};
G__46450.cljs$lang$maxFixedArity = 2;
G__46450.cljs$lang$applyTo = (function (arglist__46451){
var model = cljs.core.first(arglist__46451);
arglist__46451 = cljs.core.next(arglist__46451);
var params = cljs.core.first(arglist__46451);
var p__46448 = cljs.core.rest(arglist__46451);
return G__46450__delegate(model,params,p__46448);
});
G__46450.cljs$core$IFn$_invoke$arity$variadic = G__46450__delegate;
return G__46450;
})()
);

//# sourceMappingURL=models.js.map