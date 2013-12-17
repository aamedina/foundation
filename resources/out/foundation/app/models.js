// Compiled by ClojureScript 0.0-2120
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
{var vec__38285 = cljs.core.first.call(null,matches);var token = cljs.core.nth.call(null,vec__38285,0,null);var kw = cljs.core.nth.call(null,vec__38285,1,null);var value = cljs.core.get.call(null,params__$1,cljs.core.keyword.call(null,kw));{
var G__38286 = cljs.core.rest.call(null,matches);
var G__38287 = clojure.string.replace.call(null,result,token,[cljs.core.str(value)].join(''));
matches = G__38286;
result = G__38287;
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
subs_uri.cljs$lang$applyTo = (function (arglist__38288){
var uri = cljs.core.first(arglist__38288);
var params = cljs.core.rest(arglist__38288);
return subs_uri__delegate(uri,params);
});
subs_uri.cljs$core$IFn$_invoke$arity$variadic = subs_uri__delegate;
return subs_uri;
})()
;
foundation.app.models.query_params = (function query_params(kvs){if(cljs.core.seq.call(null,kvs))
{return [cljs.core.str("?"),cljs.core.str(cljs.core.apply.call(null,goog.Uri.QueryData.createFromKeysValues,cljs.core.map.call(null,cljs.core.clj__GT_js,cljs.core.juxt.call(null,cljs.core.keys,cljs.core.vals).call(null,cljs.core.reduce.call(null,(function (m,p__38291){var vec__38292 = p__38291;var k = cljs.core.nth.call(null,vec__38292,0,null);var v = cljs.core.nth.call(null,vec__38292,1,null);return cljs.core.assoc.call(null,m,clojure.string.replace.call(null,k,/-/,"_"),v);
}),cljs.core.PersistentArrayMap.EMPTY,clojure.walk.stringify_keys.call(null,kvs))))))].join('');
} else
{return null;
}
});
foundation.app.models.reify_url = (function reify_url(p__38293,model,kvs){var map__38295 = p__38293;var map__38295__$1 = ((cljs.core.seq_QMARK_.call(null,map__38295))?cljs.core.apply.call(null,cljs.core.hash_map,map__38295):map__38295);var api = cljs.core.get.call(null,map__38295__$1,new cljs.core.Keyword(null,"api","api",1014001036));var re = cljs.core.get.call(null,map__38295__$1,new cljs.core.Keyword(null,"re","re",1013907877));var keys = cljs.core.get.call(null,map__38295__$1,new cljs.core.Keyword(null,"keys","keys",1017192806));var url = cljs.core.get.call(null,map__38295__$1,new cljs.core.Keyword(null,"url","url",1014020321));var params = cljs.core.select_keys.call(null,model,keys);var query_string = foundation.app.models.query_params.call(null,cljs.core.merge.call(null,kvs,cljs.core.fnil.call(null,cljs.core.select_keys,cljs.core.PersistentArrayMap.EMPTY).call(null,new cljs.core.Keyword(null,"query-params","query-params",1080249757).cljs$core$IFn$_invoke$arity$1(model),model)));return [cljs.core.str(api),cljs.core.str(foundation.app.models.subs_uri.call(null,url,params)),cljs.core.str(query_string)].join('');
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
foundation.app.models.Model.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__14516__auto__){var self__ = this;
var this__14516__auto____$1 = this;var h__14370__auto__ = self__.__hash;if(!((h__14370__auto__ == null)))
{return h__14370__auto__;
} else
{var h__14370__auto____$1 = cljs.core.hash_imap.call(null,this__14516__auto____$1);self__.__hash = h__14370__auto____$1;
return h__14370__auto____$1;
}
});
foundation.app.models.Model.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__14521__auto__,k__14522__auto__){var self__ = this;
var this__14521__auto____$1 = this;return cljs.core._lookup.call(null,this__14521__auto____$1,k__14522__auto__,null);
});
foundation.app.models.Model.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__14523__auto__,k38297,else__14524__auto__){var self__ = this;
var this__14523__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k38297,new cljs.core.Keyword(null,"url","url",1014020321)))
{return self__.url;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k38297,new cljs.core.Keyword(null,"api","api",1014001036)))
{return self__.api;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k38297,new cljs.core.Keyword(null,"query-params","query-params",1080249757)))
{return self__.query_params;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k38297,new cljs.core.Keyword(null,"name","name",1017277949)))
{return self__.name;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k38297,else__14524__auto__);
} else
{return null;
}
}
}
}
}
});
foundation.app.models.Model.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__14528__auto__,k__14529__auto__,G__38296){var self__ = this;
var this__14528__auto____$1 = this;var pred__38299 = cljs.core.keyword_identical_QMARK_;var expr__38300 = k__14529__auto__;if(cljs.core.truth_(pred__38299.call(null,new cljs.core.Keyword(null,"url","url",1014020321),expr__38300)))
{return (new foundation.app.models.Model(G__38296,self__.api,self__.query_params,self__.name,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__38299.call(null,new cljs.core.Keyword(null,"api","api",1014001036),expr__38300)))
{return (new foundation.app.models.Model(self__.url,G__38296,self__.query_params,self__.name,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__38299.call(null,new cljs.core.Keyword(null,"query-params","query-params",1080249757),expr__38300)))
{return (new foundation.app.models.Model(self__.url,self__.api,G__38296,self__.name,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__38299.call(null,new cljs.core.Keyword(null,"name","name",1017277949),expr__38300)))
{return (new foundation.app.models.Model(self__.url,self__.api,self__.query_params,G__38296,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.models.Model(self__.url,self__.api,self__.query_params,self__.name,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__14529__auto__,G__38296),null));
}
}
}
}
});
foundation.app.models.Model.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__14535__auto__,writer__14536__auto__,opts__14537__auto__){var self__ = this;
var this__14535__auto____$1 = this;var pr_pair__14538__auto__ = (function (keyval__14539__auto__){return cljs.core.pr_sequential_writer.call(null,writer__14536__auto__,cljs.core.pr_writer,""," ","",opts__14537__auto__,keyval__14539__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__14536__auto__,pr_pair__14538__auto__,"#foundation.app.models.Model{",", ","}",opts__14537__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",1014020321),self__.url],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"api","api",1014001036),self__.api],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"query-params","query-params",1080249757),self__.query_params],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1017277949),self__.name],null))], null),self__.__extmap));
});
foundation.app.models.Model.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__14526__auto__,entry__14527__auto__){var self__ = this;
var this__14526__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__14527__auto__))
{return cljs.core._assoc.call(null,this__14526__auto____$1,cljs.core._nth.call(null,entry__14527__auto__,0),cljs.core._nth.call(null,entry__14527__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__14526__auto____$1,entry__14527__auto__);
}
});
foundation.app.models.Model.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__14533__auto__){var self__ = this;
var this__14533__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",1014020321),self__.url],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"api","api",1014001036),self__.api],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"query-params","query-params",1080249757),self__.query_params],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1017277949),self__.name],null))], null),self__.__extmap));
});
foundation.app.models.Model.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__14525__auto__){var self__ = this;
var this__14525__auto____$1 = this;return (4 + cljs.core.count.call(null,self__.__extmap));
});
foundation.app.models.Model.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__14517__auto__,other__14518__auto__){var self__ = this;
var this__14517__auto____$1 = this;if(cljs.core.truth_((function (){var and__13942__auto__ = other__14518__auto__;if(cljs.core.truth_(and__13942__auto__))
{return ((this__14517__auto____$1.constructor === other__14518__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__14517__auto____$1,other__14518__auto__));
} else
{return and__13942__auto__;
}
})()))
{return true;
} else
{return false;
}
});
foundation.app.models.Model.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__14520__auto__,G__38296){var self__ = this;
var this__14520__auto____$1 = this;return (new foundation.app.models.Model(self__.url,self__.api,self__.query_params,self__.name,G__38296,self__.__extmap,self__.__hash));
});
foundation.app.models.Model.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__14519__auto__){var self__ = this;
var this__14519__auto____$1 = this;return self__.__meta;
});
foundation.app.models.Model.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__14530__auto__,k__14531__auto__){var self__ = this;
var this__14530__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query-params","query-params",1080249757),null,new cljs.core.Keyword(null,"name","name",1017277949),null,new cljs.core.Keyword(null,"url","url",1014020321),null,new cljs.core.Keyword(null,"api","api",1014001036),null], null), null),k__14531__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__14530__auto____$1),self__.__meta),k__14531__auto__);
} else
{return (new foundation.app.models.Model(self__.url,self__.api,self__.query_params,self__.name,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__14531__auto__)),null));
}
});
foundation.app.models.Model.cljs$lang$type = true;
foundation.app.models.Model.cljs$lang$ctorPrSeq = (function (this__14555__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"foundation.app.models/Model");
});
foundation.app.models.Model.cljs$lang$ctorPrWriter = (function (this__14555__auto__,writer__14556__auto__){return cljs.core._write.call(null,writer__14556__auto__,"foundation.app.models/Model");
});
foundation.app.models.__GT_Model = (function __GT_Model(url,api,query_params,name){return (new foundation.app.models.Model(url,api,query_params,name));
});
foundation.app.models.map__GT_Model = (function map__GT_Model(G__38298){return (new foundation.app.models.Model(new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(G__38298),new cljs.core.Keyword(null,"api","api",1014001036).cljs$core$IFn$_invoke$arity$1(G__38298),new cljs.core.Keyword(null,"query-params","query-params",1080249757).cljs$core$IFn$_invoke$arity$1(G__38298),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(G__38298),null,cljs.core.dissoc.call(null,G__38298,new cljs.core.Keyword(null,"url","url",1014020321),new cljs.core.Keyword(null,"api","api",1014001036),new cljs.core.Keyword(null,"query-params","query-params",1080249757),new cljs.core.Keyword(null,"name","name",1017277949))));
});
foundation.app.models.fetch = (function (){var method_table__14792__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14793__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14794__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14795__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14796__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("fetch",(function() { 
var G__38302__delegate = function (model,args){var temp__4092__auto__ = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(model);if(cljs.core.truth_(temp__4092__auto__))
{var n = temp__4092__auto__;return cljs.core.keyword.call(null,cljs.core.name.call(null,n));
} else
{return null;
}
};
var G__38302 = function (model,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__38302__delegate.call(this,model,args);};
G__38302.cljs$lang$maxFixedArity = 1;
G__38302.cljs$lang$applyTo = (function (arglist__38303){
var model = cljs.core.first(arglist__38303);
var args = cljs.core.rest(arglist__38303);
return G__38302__delegate(model,args);
});
G__38302.cljs$core$IFn$_invoke$arity$variadic = G__38302__delegate;
return G__38302;
})()
,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14796__auto__,method_table__14792__auto__,prefer_table__14793__auto__,method_cache__14794__auto__,cached_hierarchy__14795__auto__));
})();
cljs.core._add_method.call(null,foundation.app.models.fetch,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__38306__delegate = function (model,p__38304){var map__38305 = p__38304;var map__38305__$1 = ((cljs.core.seq_QMARK_.call(null,map__38305))?cljs.core.apply.call(null,cljs.core.hash_map,map__38305):map__38305);var query_params = cljs.core.get.call(null,map__38305__$1,new cljs.core.Keyword(null,"query-params","query-params",1080249757),cljs.core.PersistentArrayMap.EMPTY);var params = cljs.core.get.call(null,map__38305__$1,new cljs.core.Keyword(null,"params","params",4313443576),cljs.core.PersistentArrayMap.EMPTY);return foundation.app.xhr.GET.call(null,cljs.core.apply.call(null,foundation.app.models.reify_url,model,params,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_params], null)),params);
};
var G__38306 = function (model,var_args){
var p__38304 = null;if (arguments.length > 1) {
  p__38304 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__38306__delegate.call(this,model,p__38304);};
G__38306.cljs$lang$maxFixedArity = 1;
G__38306.cljs$lang$applyTo = (function (arglist__38307){
var model = cljs.core.first(arglist__38307);
var p__38304 = cljs.core.rest(arglist__38307);
return G__38306__delegate(model,p__38304);
});
G__38306.cljs$core$IFn$_invoke$arity$variadic = G__38306__delegate;
return G__38306;
})()
);
foundation.app.models.create = (function (){var method_table__14792__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14793__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14794__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14795__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14796__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("create",(function (model,params){return cljs.core.name.call(null,model);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14796__auto__,method_table__14792__auto__,prefer_table__14793__auto__,method_cache__14794__auto__,cached_hierarchy__14795__auto__));
})();
cljs.core._add_method.call(null,foundation.app.models.create,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__38310__delegate = function (model,p__38308){var map__38309 = p__38308;var map__38309__$1 = ((cljs.core.seq_QMARK_.call(null,map__38309))?cljs.core.apply.call(null,cljs.core.hash_map,map__38309):map__38309);var query_params = cljs.core.get.call(null,map__38309__$1,new cljs.core.Keyword(null,"query-params","query-params",1080249757),cljs.core.PersistentArrayMap.EMPTY);var params = cljs.core.get.call(null,map__38309__$1,new cljs.core.Keyword(null,"params","params",4313443576),cljs.core.PersistentArrayMap.EMPTY);return foundation.app.xhr.POST.call(null,cljs.core.apply.call(null,foundation.app.models.reify_url,model,params,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_params], null)),params);
};
var G__38310 = function (model,var_args){
var p__38308 = null;if (arguments.length > 1) {
  p__38308 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__38310__delegate.call(this,model,p__38308);};
G__38310.cljs$lang$maxFixedArity = 1;
G__38310.cljs$lang$applyTo = (function (arglist__38311){
var model = cljs.core.first(arglist__38311);
var p__38308 = cljs.core.rest(arglist__38311);
return G__38310__delegate(model,p__38308);
});
G__38310.cljs$core$IFn$_invoke$arity$variadic = G__38310__delegate;
return G__38310;
})()
);
foundation.app.models.update = (function (){var method_table__14792__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14793__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14794__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14795__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14796__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("update",(function (model,params){return cljs.core.name.call(null,model);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14796__auto__,method_table__14792__auto__,prefer_table__14793__auto__,method_cache__14794__auto__,cached_hierarchy__14795__auto__));
})();
cljs.core._add_method.call(null,foundation.app.models.update,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__38314__delegate = function (model,p__38312){var map__38313 = p__38312;var map__38313__$1 = ((cljs.core.seq_QMARK_.call(null,map__38313))?cljs.core.apply.call(null,cljs.core.hash_map,map__38313):map__38313);var query_params = cljs.core.get.call(null,map__38313__$1,new cljs.core.Keyword(null,"query-params","query-params",1080249757),cljs.core.PersistentArrayMap.EMPTY);var params = cljs.core.get.call(null,map__38313__$1,new cljs.core.Keyword(null,"params","params",4313443576),cljs.core.PersistentArrayMap.EMPTY);return foundation.app.xhr.PUT.call(null,cljs.core.apply.call(null,foundation.app.models.reify_url,model,params,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_params], null)),params);
};
var G__38314 = function (model,var_args){
var p__38312 = null;if (arguments.length > 1) {
  p__38312 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__38314__delegate.call(this,model,p__38312);};
G__38314.cljs$lang$maxFixedArity = 1;
G__38314.cljs$lang$applyTo = (function (arglist__38315){
var model = cljs.core.first(arglist__38315);
var p__38312 = cljs.core.rest(arglist__38315);
return G__38314__delegate(model,p__38312);
});
G__38314.cljs$core$IFn$_invoke$arity$variadic = G__38314__delegate;
return G__38314;
})()
);
foundation.app.models.delete$ = (function (){var method_table__14792__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14793__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14794__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14795__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14796__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("delete",(function (model,params){return cljs.core.name.call(null,model);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14796__auto__,method_table__14792__auto__,prefer_table__14793__auto__,method_cache__14794__auto__,cached_hierarchy__14795__auto__));
})();
cljs.core._add_method.call(null,foundation.app.models.delete$,new cljs.core.Keyword(null,"default","default",2558708147),(function() { 
var G__38318__delegate = function (model,params,p__38316){var map__38317 = p__38316;var map__38317__$1 = ((cljs.core.seq_QMARK_.call(null,map__38317))?cljs.core.apply.call(null,cljs.core.hash_map,map__38317):map__38317);var query_params = cljs.core.get.call(null,map__38317__$1,new cljs.core.Keyword(null,"query-params","query-params",1080249757),cljs.core.PersistentArrayMap.EMPTY);return foundation.app.xhr.DELETE.call(null,cljs.core.apply.call(null,foundation.app.models.reify_url,model,params,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_params], null)),params);
};
var G__38318 = function (model,params,var_args){
var p__38316 = null;if (arguments.length > 2) {
  p__38316 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__38318__delegate.call(this,model,params,p__38316);};
G__38318.cljs$lang$maxFixedArity = 2;
G__38318.cljs$lang$applyTo = (function (arglist__38319){
var model = cljs.core.first(arglist__38319);
arglist__38319 = cljs.core.next(arglist__38319);
var params = cljs.core.first(arglist__38319);
var p__38316 = cljs.core.rest(arglist__38319);
return G__38318__delegate(model,params,p__38316);
});
G__38318.cljs$core$IFn$_invoke$arity$variadic = G__38318__delegate;
return G__38318;
})()
);

//# sourceMappingURL=models.js.map