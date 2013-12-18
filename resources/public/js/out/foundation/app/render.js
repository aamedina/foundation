// Compiled by ClojureScript 0.0-2120
goog.provide('foundation.app.render');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('foundation.app.util');
goog.require('foundation.app.util');
foundation.app.render.render_delta = (function (){var method_table__9036__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__9037__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__9038__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__9039__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__9040__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("render-delta",(function() { 
var G__34306__delegate = function (p__34304,args){var vec__34305 = p__34304;var op = cljs.core.nth.call(null,vec__34305,0,null);var _ = cljs.core.nth.call(null,vec__34305,1,null);var ___$1 = cljs.core.nth.call(null,vec__34305,2,null);var ___$2 = cljs.core.nth.call(null,vec__34305,3,null);return op;
};
var G__34306 = function (p__34304,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__34306__delegate.call(this,p__34304,args);};
G__34306.cljs$lang$maxFixedArity = 1;
G__34306.cljs$lang$applyTo = (function (arglist__34307){
var p__34304 = cljs.core.first(arglist__34307);
var args = cljs.core.rest(arglist__34307);
return G__34306__delegate(p__34304,args);
});
G__34306.cljs$core$IFn$_invoke$arity$variadic = G__34306__delegate;
return G__34306;
})()
,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__9040__auto__,method_table__9036__auto__,prefer_table__9037__auto__,method_cache__9038__auto__,cached_hierarchy__9039__auto__));
})();
foundation.app.render.guid = (function guid(){return IdGenerator.getInstance.call(null).getNextUniqueId();
});
foundation.app.render.log_fn = (function log_fn(deltas){return foundation.app.util.log_group.call(null,"Rendering Deltas",deltas);
});
foundation.app.render.node_seq = (function node_seq(env){return cljs.core.tree_seq.call(null,cljs.core.constantly.call(null,true),(function (n){return cljs.core.map.call(null,(function (p1__34308_SHARP_){return cljs.core.get.call(null,n,p1__34308_SHARP_);
}),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),null,new cljs.core.Keyword(null,"_data","_data",1104714747),null,new cljs.core.Keyword(null,"id","id",1013907597),null], null), null),cljs.core.keys.call(null,n)));
}),env);
});
foundation.app.render.run_on_destroy_BANG_ = (function run_on_destroy_BANG_(env){var nodes = foundation.app.render.node_seq.call(null,env);var seq__34313 = cljs.core.seq.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),nodes));var chunk__34314 = null;var count__34315 = 0;var i__34316 = 0;while(true){
if((i__34316 < count__34315))
{var f = cljs.core._nth.call(null,chunk__34314,i__34316);f.call(null);
{
var G__34317 = seq__34313;
var G__34318 = chunk__34314;
var G__34319 = count__34315;
var G__34320 = (i__34316 + 1);
seq__34313 = G__34317;
chunk__34314 = G__34318;
count__34315 = G__34319;
i__34316 = G__34320;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__34313);if(temp__4092__auto__)
{var seq__34313__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34313__$1))
{var c__8927__auto__ = cljs.core.chunk_first.call(null,seq__34313__$1);{
var G__34321 = cljs.core.chunk_rest.call(null,seq__34313__$1);
var G__34322 = c__8927__auto__;
var G__34323 = cljs.core.count.call(null,c__8927__auto__);
var G__34324 = 0;
seq__34313 = G__34321;
chunk__34314 = G__34322;
count__34315 = G__34323;
i__34316 = G__34324;
continue;
}
} else
{var f = cljs.core.first.call(null,seq__34313__$1);f.call(null);
{
var G__34325 = cljs.core.next.call(null,seq__34313__$1);
var G__34326 = null;
var G__34327 = 0;
var G__34328 = 0;
seq__34313 = G__34325;
chunk__34314 = G__34326;
count__34315 = G__34327;
i__34316 = G__34328;
continue;
}
}
} else
{return null;
}
}
break;
}
});
foundation.app.render.IRenderer = (function (){var obj34330 = {};return obj34330;
})();
foundation.app.render._get_id = (function _get_id(_,path){if((function (){var and__8186__auto__ = _;if(and__8186__auto__)
{return _.foundation$app$render$IRenderer$_get_id$arity$2;
} else
{return and__8186__auto__;
}
})())
{return _.foundation$app$render$IRenderer$_get_id$arity$2(_,path);
} else
{var x__8806__auto__ = (((_ == null))?null:_);return (function (){var or__8198__auto__ = (foundation.app.render._get_id[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (foundation.app.render._get_id["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderer.-get-id",_);
}
}
})().call(null,_,path);
}
});
foundation.app.render._parent_id = (function _parent_id(_,path){if((function (){var and__8186__auto__ = _;if(and__8186__auto__)
{return _.foundation$app$render$IRenderer$_parent_id$arity$2;
} else
{return and__8186__auto__;
}
})())
{return _.foundation$app$render$IRenderer$_parent_id$arity$2(_,path);
} else
{var x__8806__auto__ = (((_ == null))?null:_);return (function (){var or__8198__auto__ = (foundation.app.render._parent_id[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (foundation.app.render._parent_id["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderer.-parent-id",_);
}
}
})().call(null,_,path);
}
});
foundation.app.render._new_id = (function() {
var _new_id = null;
var _new_id__2 = (function (_,path){if((function (){var and__8186__auto__ = _;if(and__8186__auto__)
{return _.foundation$app$render$IRenderer$_new_id$arity$2;
} else
{return and__8186__auto__;
}
})())
{return _.foundation$app$render$IRenderer$_new_id$arity$2(_,path);
} else
{var x__8806__auto__ = (((_ == null))?null:_);return (function (){var or__8198__auto__ = (foundation.app.render._new_id[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (foundation.app.render._new_id["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderer.-new-id",_);
}
}
})().call(null,_,path);
}
});
var _new_id__3 = (function (_,path,id){if((function (){var and__8186__auto__ = _;if(and__8186__auto__)
{return _.foundation$app$render$IRenderer$_new_id$arity$3;
} else
{return and__8186__auto__;
}
})())
{return _.foundation$app$render$IRenderer$_new_id$arity$3(_,path,id);
} else
{var x__8806__auto__ = (((_ == null))?null:_);return (function (){var or__8198__auto__ = (foundation.app.render._new_id[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (foundation.app.render._new_id["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderer.-new-id",_);
}
}
})().call(null,_,path,id);
}
});
_new_id = function(_,path,id){
switch(arguments.length){
case 2:
return _new_id__2.call(this,_,path);
case 3:
return _new_id__3.call(this,_,path,id);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_new_id.cljs$core$IFn$_invoke$arity$2 = _new_id__2;
_new_id.cljs$core$IFn$_invoke$arity$3 = _new_id__3;
return _new_id;
})()
;
foundation.app.render._delete_id = (function _delete_id(_,path){if((function (){var and__8186__auto__ = _;if(and__8186__auto__)
{return _.foundation$app$render$IRenderer$_delete_id$arity$2;
} else
{return and__8186__auto__;
}
})())
{return _.foundation$app$render$IRenderer$_delete_id$arity$2(_,path);
} else
{var x__8806__auto__ = (((_ == null))?null:_);return (function (){var or__8198__auto__ = (foundation.app.render._delete_id[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (foundation.app.render._delete_id["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderer.-delete-id",_);
}
}
})().call(null,_,path);
}
});
foundation.app.render._on_destroy = (function _on_destroy(_,path,f){if((function (){var and__8186__auto__ = _;if(and__8186__auto__)
{return _.foundation$app$render$IRenderer$_on_destroy$arity$3;
} else
{return and__8186__auto__;
}
})())
{return _.foundation$app$render$IRenderer$_on_destroy$arity$3(_,path,f);
} else
{var x__8806__auto__ = (((_ == null))?null:_);return (function (){var or__8198__auto__ = (foundation.app.render._on_destroy[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (foundation.app.render._on_destroy["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderer.-on-destroy",_);
}
}
})().call(null,_,path,f);
}
});
foundation.app.render._set_data = (function _set_data(_,path,data){if((function (){var and__8186__auto__ = _;if(and__8186__auto__)
{return _.foundation$app$render$IRenderer$_set_data$arity$3;
} else
{return and__8186__auto__;
}
})())
{return _.foundation$app$render$IRenderer$_set_data$arity$3(_,path,data);
} else
{var x__8806__auto__ = (((_ == null))?null:_);return (function (){var or__8198__auto__ = (foundation.app.render._set_data[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (foundation.app.render._set_data["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderer.-set-data",_);
}
}
})().call(null,_,path,data);
}
});
foundation.app.render._get_data = (function _get_data(_,path){if((function (){var and__8186__auto__ = _;if(and__8186__auto__)
{return _.foundation$app$render$IRenderer$_get_data$arity$2;
} else
{return and__8186__auto__;
}
})())
{return _.foundation$app$render$IRenderer$_get_data$arity$2(_,path);
} else
{var x__8806__auto__ = (((_ == null))?null:_);return (function (){var or__8198__auto__ = (foundation.app.render._get_data[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (foundation.app.render._get_data["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderer.-get-data",_);
}
}
})().call(null,_,path);
}
});
foundation.app.render._drop_data = (function _drop_data(_,path){if((function (){var and__8186__auto__ = _;if(and__8186__auto__)
{return _.foundation$app$render$IRenderer$_drop_data$arity$2;
} else
{return and__8186__auto__;
}
})())
{return _.foundation$app$render$IRenderer$_drop_data$arity$2(_,path);
} else
{var x__8806__auto__ = (((_ == null))?null:_);return (function (){var or__8198__auto__ = (foundation.app.render._drop_data[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (foundation.app.render._drop_data["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderer.-drop-data",_);
}
}
})().call(null,_,path);
}
});

/**
* @constructor
* @param {*} env
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
foundation.app.render.Renderer = (function (env,__meta,__extmap){
this.env = env;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
foundation.app.render.Renderer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8760__auto__){var self__ = this;
var this__8760__auto____$1 = this;var h__8614__auto__ = self__.__hash;if(!((h__8614__auto__ == null)))
{return h__8614__auto__;
} else
{var h__8614__auto____$1 = cljs.core.hash_imap.call(null,this__8760__auto____$1);self__.__hash = h__8614__auto____$1;
return h__8614__auto____$1;
}
});
foundation.app.render.Renderer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8765__auto__,k__8766__auto__){var self__ = this;
var this__8765__auto____$1 = this;return cljs.core._lookup.call(null,this__8765__auto____$1,k__8766__auto__,null);
});
foundation.app.render.Renderer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8767__auto__,k34332,else__8768__auto__){var self__ = this;
var this__8767__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k34332,new cljs.core.Keyword(null,"env","env",1014004831)))
{return self__.env;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k34332,else__8768__auto__);
} else
{return null;
}
}
});
foundation.app.render.Renderer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8772__auto__,k__8773__auto__,G__34331){var self__ = this;
var this__8772__auto____$1 = this;var pred__34334 = cljs.core.keyword_identical_QMARK_;var expr__34335 = k__8773__auto__;if(cljs.core.truth_(pred__34334.call(null,new cljs.core.Keyword(null,"env","env",1014004831),expr__34335)))
{return (new foundation.app.render.Renderer(G__34331,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.render.Renderer(self__.env,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8773__auto__,G__34331),null));
}
});
foundation.app.render.Renderer.prototype.foundation$app$render$IRenderer$ = true;
foundation.app.render.Renderer.prototype.foundation$app$render$IRenderer$_get_id$arity$2 = (function (_,path){var self__ = this;
var ___$1 = this;if(cljs.core.seq.call(null,path))
{return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.env),cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"id","id",1013907597)));
} else
{return new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.env));
}
});
foundation.app.render.Renderer.prototype.foundation$app$render$IRenderer$_parent_id$arity$2 = (function (r,path){var self__ = this;
var r__$1 = this;if(cljs.core.seq.call(null,path))
{return foundation.app.render._get_id.call(null,r__$1,cljs.core.vec.call(null,cljs.core.butlast.call(null,path)));
} else
{return null;
}
});
foundation.app.render.Renderer.prototype.foundation$app$render$IRenderer$_new_id$arity$2 = (function (r,path){var self__ = this;
var r__$1 = this;return foundation.app.render._new_id.call(null,r__$1,path,foundation.app.render.guid.call(null));
});
foundation.app.render.Renderer.prototype.foundation$app$render$IRenderer$_new_id$arity$3 = (function (_,path,id){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.env,cljs.core.assoc_in,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"id","id",1013907597)),id);
return id;
});
foundation.app.render.Renderer.prototype.foundation$app$render$IRenderer$_delete_id$arity$2 = (function (_,path){var self__ = this;
var ___$1 = this;foundation.app.render.run_on_destroy_BANG_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.env),path));
return cljs.core.swap_BANG_.call(null,self__.env,cljs.core.assoc_in,path,null);
});
foundation.app.render.Renderer.prototype.foundation$app$render$IRenderer$_on_destroy$arity$3 = (function (_,path,f){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.env,cljs.core.update_in,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022)),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),f);
});
foundation.app.render.Renderer.prototype.foundation$app$render$IRenderer$_set_data$arity$3 = (function (_,path,data){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.env,cljs.core.assoc_in,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_data","_data",1104714747)], null),path),data);
});
foundation.app.render.Renderer.prototype.foundation$app$render$IRenderer$_get_data$arity$2 = (function (_,path){var self__ = this;
var ___$1 = this;return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.env),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_data","_data",1104714747)], null),path));
});
foundation.app.render.Renderer.prototype.foundation$app$render$IRenderer$_drop_data$arity$2 = (function (_,path){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.env,cljs.core.update_in,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_data","_data",1104714747)], null),cljs.core.butlast.call(null,path)),cljs.core.dissoc,cljs.core.last.call(null,path));
});
foundation.app.render.Renderer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8779__auto__,writer__8780__auto__,opts__8781__auto__){var self__ = this;
var this__8779__auto____$1 = this;var pr_pair__8782__auto__ = (function (keyval__8783__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8780__auto__,cljs.core.pr_writer,""," ","",opts__8781__auto__,keyval__8783__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__8780__auto__,pr_pair__8782__auto__,"#foundation.app.render.Renderer{",", ","}",opts__8781__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"env","env",1014004831),self__.env],null))], null),self__.__extmap));
});
foundation.app.render.Renderer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8770__auto__,entry__8771__auto__){var self__ = this;
var this__8770__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8771__auto__))
{return cljs.core._assoc.call(null,this__8770__auto____$1,cljs.core._nth.call(null,entry__8771__auto__,0),cljs.core._nth.call(null,entry__8771__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8770__auto____$1,entry__8771__auto__);
}
});
foundation.app.render.Renderer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8777__auto__){var self__ = this;
var this__8777__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"env","env",1014004831),self__.env],null))], null),self__.__extmap));
});
foundation.app.render.Renderer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8769__auto__){var self__ = this;
var this__8769__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
foundation.app.render.Renderer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8761__auto__,other__8762__auto__){var self__ = this;
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
foundation.app.render.Renderer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8764__auto__,G__34331){var self__ = this;
var this__8764__auto____$1 = this;return (new foundation.app.render.Renderer(self__.env,G__34331,self__.__extmap,self__.__hash));
});
foundation.app.render.Renderer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8763__auto__){var self__ = this;
var this__8763__auto____$1 = this;return self__.__meta;
});
foundation.app.render.Renderer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8774__auto__,k__8775__auto__){var self__ = this;
var this__8774__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"env","env",1014004831),null], null), null),k__8775__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8774__auto____$1),self__.__meta),k__8775__auto__);
} else
{return (new foundation.app.render.Renderer(self__.env,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8775__auto__)),null));
}
});
foundation.app.render.Renderer.cljs$lang$type = true;
foundation.app.render.Renderer.cljs$lang$ctorPrSeq = (function (this__8799__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"foundation.app.render/Renderer");
});
foundation.app.render.Renderer.cljs$lang$ctorPrWriter = (function (this__8799__auto__,writer__8800__auto__){return cljs.core._write.call(null,writer__8800__auto__,"foundation.app.render/Renderer");
});
foundation.app.render.__GT_Renderer = (function __GT_Renderer(env){return (new foundation.app.render.Renderer(env));
});
foundation.app.render.map__GT_Renderer = (function map__GT_Renderer(G__34333){return (new foundation.app.render.Renderer(new cljs.core.Keyword(null,"env","env",1014004831).cljs$core$IFn$_invoke$arity$1(G__34333),null,cljs.core.dissoc.call(null,G__34333,new cljs.core.Keyword(null,"env","env",1014004831))));
});
foundation.app.render.push_render_queue = (function push_render_queue(root_id,input_queue){var renderer = foundation.app.render.__GT_Renderer.call(null,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),root_id], null)));var render_queue = cljs.core.async.chan.call(null);var c__10793__auto___34411 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10794__auto__ = (function (){var switch__10729__auto__ = (function (state_34394){var state_val_34395 = (state_34394[1]);if((state_val_34395 === 7))
{var inst_34389 = (state_34394[2]);var state_34394__$1 = (function (){var statearr_34396 = state_34394;(statearr_34396[7] = inst_34389);
return statearr_34396;
})();var statearr_34397_34412 = state_34394__$1;(statearr_34397_34412[2] = null);
(statearr_34397_34412[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34395 === 6))
{var inst_34379 = (state_34394[8]);var inst_34377 = (state_34394[9]);var inst_34385 = foundation.app.render._parent_id.call(null,renderer,inst_34379);var inst_34386 = foundation.app.render._new_id.call(null,renderer,inst_34379);var inst_34387 = foundation.app.render.render_delta.call(null,renderer,inst_34377,inst_34379,inst_34385,inst_34386);var state_34394__$1 = state_34394;var statearr_34398_34413 = state_34394__$1;(statearr_34398_34413[2] = inst_34387);
(statearr_34398_34413[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34395 === 5))
{var inst_34379 = (state_34394[8]);var inst_34377 = (state_34394[9]);var inst_34380 = (state_34394[10]);var inst_34382 = foundation.app.render._parent_id.call(null,renderer,inst_34379);var inst_34383 = foundation.app.render.render_delta.call(null,renderer,inst_34377,inst_34379,inst_34382,inst_34380);var state_34394__$1 = state_34394;var statearr_34399_34414 = state_34394__$1;(statearr_34399_34414[2] = inst_34383);
(statearr_34399_34414[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34395 === 4))
{var inst_34379 = (state_34394[8]);var inst_34377 = (state_34394[9]);var inst_34380 = (state_34394[10]);var inst_34377__$1 = (state_34394[2]);var inst_34378 = cljs.core.nth.call(null,inst_34377__$1,0,null);var inst_34379__$1 = cljs.core.nth.call(null,inst_34377__$1,1,null);var inst_34380__$1 = foundation.app.render._get_id.call(null,renderer,inst_34379__$1);var state_34394__$1 = (function (){var statearr_34400 = state_34394;(statearr_34400[8] = inst_34379__$1);
(statearr_34400[11] = inst_34378);
(statearr_34400[9] = inst_34377__$1);
(statearr_34400[10] = inst_34380__$1);
return statearr_34400;
})();if(cljs.core.truth_(inst_34380__$1))
{var statearr_34401_34415 = state_34394__$1;(statearr_34401_34415[1] = 5);
} else
{var statearr_34402_34416 = state_34394__$1;(statearr_34402_34416[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34395 === 3))
{var inst_34392 = (state_34394[2]);var state_34394__$1 = state_34394;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34394__$1,inst_34392);
} else
{if((state_val_34395 === 2))
{var state_34394__$1 = state_34394;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34394__$1,4,render_queue);
} else
{if((state_val_34395 === 1))
{var state_34394__$1 = state_34394;var statearr_34403_34417 = state_34394__$1;(statearr_34403_34417[2] = null);
(statearr_34403_34417[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__10729__auto__){
return (function() {
var state_machine__10730__auto__ = null;
var state_machine__10730__auto____0 = (function (){var statearr_34407 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34407[0] = state_machine__10730__auto__);
(statearr_34407[1] = 1);
return statearr_34407;
});
var state_machine__10730__auto____1 = (function (state_34394){while(true){
var ret_value__10731__auto__ = (function (){try{while(true){
var result__10732__auto__ = switch__10729__auto__.call(null,state_34394);if(cljs.core.keyword_identical_QMARK_.call(null,result__10732__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10732__auto__;
}
break;
}
}catch (e34408){if((e34408 instanceof Object))
{var ex__10733__auto__ = e34408;var statearr_34409_34418 = state_34394;(statearr_34409_34418[5] = ex__10733__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34394);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34408;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10731__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34419 = state_34394;
state_34394 = G__34419;
continue;
}
} else
{return ret_value__10731__auto__;
}
break;
}
});
state_machine__10730__auto__ = function(state_34394){
switch(arguments.length){
case 0:
return state_machine__10730__auto____0.call(this);
case 1:
return state_machine__10730__auto____1.call(this,state_34394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10730__auto____0;
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10730__auto____1;
return state_machine__10730__auto__;
})()
;})(switch__10729__auto__))
})();var state__10795__auto__ = (function (){var statearr_34410 = f__10794__auto__.call(null);(statearr_34410[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10793__auto___34411);
return statearr_34410;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10795__auto__);
}));
return render_queue;
});
foundation.app.render.renderer = (function() {
var renderer = null;
var renderer__1 = (function (root_id){return renderer.call(null,root_id,cljs.core.identity);
});
var renderer__2 = (function (root_id,render_fn){var renderer__$1 = foundation.app.render.__GT_Renderer.call(null,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),root_id], null)));return (function (deltas,input_queue){if(cljs.core.seq.call(null,deltas))
{render_fn.call(null,deltas);
} else
{}
var seq__34426 = cljs.core.seq.call(null,deltas);var chunk__34427 = null;var count__34428 = 0;var i__34429 = 0;while(true){
if((i__34429 < count__34428))
{var vec__34430 = cljs.core._nth.call(null,chunk__34427,i__34429);var op = cljs.core.nth.call(null,vec__34430,0,null);var path = cljs.core.nth.call(null,vec__34430,1,null);var d = vec__34430;var temp__4090__auto___34432 = foundation.app.render._get_id.call(null,renderer__$1,path);if(cljs.core.truth_(temp__4090__auto___34432))
{var id_34433 = temp__4090__auto___34432;foundation.app.render.render_delta.call(null,renderer__$1,d,path,foundation.app.render._parent_id.call(null,renderer__$1,path),id_34433);
} else
{foundation.app.render.render_delta.call(null,renderer__$1,d,path,foundation.app.render._parent_id.call(null,renderer__$1,path),foundation.app.render._new_id.call(null,renderer__$1,path));
}
{
var G__34434 = seq__34426;
var G__34435 = chunk__34427;
var G__34436 = count__34428;
var G__34437 = (i__34429 + 1);
seq__34426 = G__34434;
chunk__34427 = G__34435;
count__34428 = G__34436;
i__34429 = G__34437;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__34426);if(temp__4092__auto__)
{var seq__34426__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34426__$1))
{var c__8927__auto__ = cljs.core.chunk_first.call(null,seq__34426__$1);{
var G__34438 = cljs.core.chunk_rest.call(null,seq__34426__$1);
var G__34439 = c__8927__auto__;
var G__34440 = cljs.core.count.call(null,c__8927__auto__);
var G__34441 = 0;
seq__34426 = G__34438;
chunk__34427 = G__34439;
count__34428 = G__34440;
i__34429 = G__34441;
continue;
}
} else
{var vec__34431 = cljs.core.first.call(null,seq__34426__$1);var op = cljs.core.nth.call(null,vec__34431,0,null);var path = cljs.core.nth.call(null,vec__34431,1,null);var d = vec__34431;var temp__4090__auto___34442 = foundation.app.render._get_id.call(null,renderer__$1,path);if(cljs.core.truth_(temp__4090__auto___34442))
{var id_34443 = temp__4090__auto___34442;foundation.app.render.render_delta.call(null,renderer__$1,d,path,foundation.app.render._parent_id.call(null,renderer__$1,path),id_34443);
} else
{foundation.app.render.render_delta.call(null,renderer__$1,d,path,foundation.app.render._parent_id.call(null,renderer__$1,path),foundation.app.render._new_id.call(null,renderer__$1,path));
}
{
var G__34444 = cljs.core.next.call(null,seq__34426__$1);
var G__34445 = null;
var G__34446 = 0;
var G__34447 = 0;
seq__34426 = G__34444;
chunk__34427 = G__34445;
count__34428 = G__34446;
i__34429 = G__34447;
continue;
}
}
} else
{return null;
}
}
break;
}
});
});
renderer = function(root_id,render_fn){
switch(arguments.length){
case 1:
return renderer__1.call(this,root_id);
case 2:
return renderer__2.call(this,root_id,render_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
renderer.cljs$core$IFn$_invoke$arity$1 = renderer__1;
renderer.cljs$core$IFn$_invoke$arity$2 = renderer__2;
return renderer;
})()
;
cljs.core._add_method.call(null,foundation.app.render.render_delta,new cljs.core.Keyword(null,"node-create","node-create",4378585753),(function (renderer,delta,path,pid,id){return null;
}));
cljs.core._add_method.call(null,foundation.app.render.render_delta,new cljs.core.Keyword(null,"node-update","node-update",597066342),(function (renderer,delta,path,pid,id){return null;
}));
cljs.core._add_method.call(null,foundation.app.render.render_delta,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),(function (renderer,delta,path,pid,id){return null;
}));

//# sourceMappingURL=render.js.map