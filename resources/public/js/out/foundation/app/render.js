// Compiled by ClojureScript 0.0-2120
goog.provide('foundation.app.render');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('foundation.app.util');
goog.require('foundation.app.util');
foundation.app.render.render_delta = (function (){var method_table__9036__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__9037__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__9038__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__9039__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__9040__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("render-delta",(function() { 
var G__40467__delegate = function (p__40465,args){var vec__40466 = p__40465;var op = cljs.core.nth.call(null,vec__40466,0,null);var _ = cljs.core.nth.call(null,vec__40466,1,null);var ___$1 = cljs.core.nth.call(null,vec__40466,2,null);var ___$2 = cljs.core.nth.call(null,vec__40466,3,null);return op;
};
var G__40467 = function (p__40465,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__40467__delegate.call(this,p__40465,args);};
G__40467.cljs$lang$maxFixedArity = 1;
G__40467.cljs$lang$applyTo = (function (arglist__40468){
var p__40465 = cljs.core.first(arglist__40468);
var args = cljs.core.rest(arglist__40468);
return G__40467__delegate(p__40465,args);
});
G__40467.cljs$core$IFn$_invoke$arity$variadic = G__40467__delegate;
return G__40467;
})()
,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__9040__auto__,method_table__9036__auto__,prefer_table__9037__auto__,method_cache__9038__auto__,cached_hierarchy__9039__auto__));
})();
foundation.app.render.guid = (function guid(){return IdGenerator.getInstance.call(null).getNextUniqueId();
});
foundation.app.render.log_fn = (function log_fn(deltas){return foundation.app.util.log_group.call(null,"Rendering Deltas",deltas);
});
foundation.app.render.node_seq = (function node_seq(env){return cljs.core.tree_seq.call(null,cljs.core.constantly.call(null,true),(function (n){return cljs.core.map.call(null,(function (p1__40469_SHARP_){return cljs.core.get.call(null,n,p1__40469_SHARP_);
}),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),null,new cljs.core.Keyword(null,"_data","_data",1104714747),null,new cljs.core.Keyword(null,"id","id",1013907597),null], null), null),cljs.core.keys.call(null,n)));
}),env);
});
foundation.app.render.run_on_destroy_BANG_ = (function run_on_destroy_BANG_(env){var nodes = foundation.app.render.node_seq.call(null,env);var seq__40474 = cljs.core.seq.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),nodes));var chunk__40475 = null;var count__40476 = 0;var i__40477 = 0;while(true){
if((i__40477 < count__40476))
{var f = cljs.core._nth.call(null,chunk__40475,i__40477);f.call(null);
{
var G__40478 = seq__40474;
var G__40479 = chunk__40475;
var G__40480 = count__40476;
var G__40481 = (i__40477 + 1);
seq__40474 = G__40478;
chunk__40475 = G__40479;
count__40476 = G__40480;
i__40477 = G__40481;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__40474);if(temp__4092__auto__)
{var seq__40474__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40474__$1))
{var c__8927__auto__ = cljs.core.chunk_first.call(null,seq__40474__$1);{
var G__40482 = cljs.core.chunk_rest.call(null,seq__40474__$1);
var G__40483 = c__8927__auto__;
var G__40484 = cljs.core.count.call(null,c__8927__auto__);
var G__40485 = 0;
seq__40474 = G__40482;
chunk__40475 = G__40483;
count__40476 = G__40484;
i__40477 = G__40485;
continue;
}
} else
{var f = cljs.core.first.call(null,seq__40474__$1);f.call(null);
{
var G__40486 = cljs.core.next.call(null,seq__40474__$1);
var G__40487 = null;
var G__40488 = 0;
var G__40489 = 0;
seq__40474 = G__40486;
chunk__40475 = G__40487;
count__40476 = G__40488;
i__40477 = G__40489;
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
foundation.app.render.IRenderer = (function (){var obj40491 = {};return obj40491;
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
foundation.app.render.Renderer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8767__auto__,k40493,else__8768__auto__){var self__ = this;
var this__8767__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k40493,new cljs.core.Keyword(null,"env","env",1014004831)))
{return self__.env;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k40493,else__8768__auto__);
} else
{return null;
}
}
});
foundation.app.render.Renderer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8772__auto__,k__8773__auto__,G__40492){var self__ = this;
var this__8772__auto____$1 = this;var pred__40495 = cljs.core.keyword_identical_QMARK_;var expr__40496 = k__8773__auto__;if(cljs.core.truth_(pred__40495.call(null,new cljs.core.Keyword(null,"env","env",1014004831),expr__40496)))
{return (new foundation.app.render.Renderer(G__40492,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.render.Renderer(self__.env,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8773__auto__,G__40492),null));
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
foundation.app.render.Renderer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8764__auto__,G__40492){var self__ = this;
var this__8764__auto____$1 = this;return (new foundation.app.render.Renderer(self__.env,G__40492,self__.__extmap,self__.__hash));
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
foundation.app.render.map__GT_Renderer = (function map__GT_Renderer(G__40494){return (new foundation.app.render.Renderer(new cljs.core.Keyword(null,"env","env",1014004831).cljs$core$IFn$_invoke$arity$1(G__40494),null,cljs.core.dissoc.call(null,G__40494,new cljs.core.Keyword(null,"env","env",1014004831))));
});
foundation.app.render.push_render_queue = (function push_render_queue(root_id,input_queue){var renderer = foundation.app.render.__GT_Renderer.call(null,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),root_id], null)));var render_queue = cljs.core.async.chan.call(null);var c__10793__auto___40572 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10794__auto__ = (function (){var switch__10729__auto__ = (function (state_40555){var state_val_40556 = (state_40555[1]);if((state_val_40556 === 7))
{var inst_40550 = (state_40555[2]);var state_40555__$1 = (function (){var statearr_40557 = state_40555;(statearr_40557[7] = inst_40550);
return statearr_40557;
})();var statearr_40558_40573 = state_40555__$1;(statearr_40558_40573[2] = null);
(statearr_40558_40573[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_40556 === 6))
{var inst_40538 = (state_40555[8]);var inst_40540 = (state_40555[9]);var inst_40546 = foundation.app.render._parent_id.call(null,renderer,inst_40540);var inst_40547 = foundation.app.render._new_id.call(null,renderer,inst_40540);var inst_40548 = foundation.app.render.render_delta.call(null,renderer,inst_40538,inst_40540,inst_40546,inst_40547);var state_40555__$1 = state_40555;var statearr_40559_40574 = state_40555__$1;(statearr_40559_40574[2] = inst_40548);
(statearr_40559_40574[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_40556 === 5))
{var inst_40538 = (state_40555[8]);var inst_40540 = (state_40555[9]);var inst_40541 = (state_40555[10]);var inst_40543 = foundation.app.render._parent_id.call(null,renderer,inst_40540);var inst_40544 = foundation.app.render.render_delta.call(null,renderer,inst_40538,inst_40540,inst_40543,inst_40541);var state_40555__$1 = state_40555;var statearr_40560_40575 = state_40555__$1;(statearr_40560_40575[2] = inst_40544);
(statearr_40560_40575[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_40556 === 4))
{var inst_40538 = (state_40555[8]);var inst_40540 = (state_40555[9]);var inst_40541 = (state_40555[10]);var inst_40538__$1 = (state_40555[2]);var inst_40539 = cljs.core.nth.call(null,inst_40538__$1,0,null);var inst_40540__$1 = cljs.core.nth.call(null,inst_40538__$1,1,null);var inst_40541__$1 = foundation.app.render._get_id.call(null,renderer,inst_40540__$1);var state_40555__$1 = (function (){var statearr_40561 = state_40555;(statearr_40561[11] = inst_40539);
(statearr_40561[8] = inst_40538__$1);
(statearr_40561[9] = inst_40540__$1);
(statearr_40561[10] = inst_40541__$1);
return statearr_40561;
})();if(cljs.core.truth_(inst_40541__$1))
{var statearr_40562_40576 = state_40555__$1;(statearr_40562_40576[1] = 5);
} else
{var statearr_40563_40577 = state_40555__$1;(statearr_40563_40577[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_40556 === 3))
{var inst_40553 = (state_40555[2]);var state_40555__$1 = state_40555;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40555__$1,inst_40553);
} else
{if((state_val_40556 === 2))
{var state_40555__$1 = state_40555;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40555__$1,4,render_queue);
} else
{if((state_val_40556 === 1))
{var state_40555__$1 = state_40555;var statearr_40564_40578 = state_40555__$1;(statearr_40564_40578[2] = null);
(statearr_40564_40578[1] = 2);
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
var state_machine__10730__auto____0 = (function (){var statearr_40568 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_40568[0] = state_machine__10730__auto__);
(statearr_40568[1] = 1);
return statearr_40568;
});
var state_machine__10730__auto____1 = (function (state_40555){while(true){
var ret_value__10731__auto__ = (function (){try{while(true){
var result__10732__auto__ = switch__10729__auto__.call(null,state_40555);if(cljs.core.keyword_identical_QMARK_.call(null,result__10732__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10732__auto__;
}
break;
}
}catch (e40569){if((e40569 instanceof Object))
{var ex__10733__auto__ = e40569;var statearr_40570_40579 = state_40555;(statearr_40570_40579[5] = ex__10733__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40555);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e40569;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10731__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__40580 = state_40555;
state_40555 = G__40580;
continue;
}
} else
{return ret_value__10731__auto__;
}
break;
}
});
state_machine__10730__auto__ = function(state_40555){
switch(arguments.length){
case 0:
return state_machine__10730__auto____0.call(this);
case 1:
return state_machine__10730__auto____1.call(this,state_40555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10730__auto____0;
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10730__auto____1;
return state_machine__10730__auto__;
})()
;})(switch__10729__auto__))
})();var state__10795__auto__ = (function (){var statearr_40571 = f__10794__auto__.call(null);(statearr_40571[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10793__auto___40572);
return statearr_40571;
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
var seq__40587 = cljs.core.seq.call(null,deltas);var chunk__40588 = null;var count__40589 = 0;var i__40590 = 0;while(true){
if((i__40590 < count__40589))
{var vec__40591 = cljs.core._nth.call(null,chunk__40588,i__40590);var op = cljs.core.nth.call(null,vec__40591,0,null);var path = cljs.core.nth.call(null,vec__40591,1,null);var d = vec__40591;var temp__4090__auto___40593 = foundation.app.render._get_id.call(null,renderer__$1,path);if(cljs.core.truth_(temp__4090__auto___40593))
{var id_40594 = temp__4090__auto___40593;foundation.app.render.render_delta.call(null,renderer__$1,d,path,foundation.app.render._parent_id.call(null,renderer__$1,path),id_40594);
} else
{foundation.app.render.render_delta.call(null,renderer__$1,d,path,foundation.app.render._parent_id.call(null,renderer__$1,path),foundation.app.render._new_id.call(null,renderer__$1,path));
}
{
var G__40595 = seq__40587;
var G__40596 = chunk__40588;
var G__40597 = count__40589;
var G__40598 = (i__40590 + 1);
seq__40587 = G__40595;
chunk__40588 = G__40596;
count__40589 = G__40597;
i__40590 = G__40598;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__40587);if(temp__4092__auto__)
{var seq__40587__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40587__$1))
{var c__8927__auto__ = cljs.core.chunk_first.call(null,seq__40587__$1);{
var G__40599 = cljs.core.chunk_rest.call(null,seq__40587__$1);
var G__40600 = c__8927__auto__;
var G__40601 = cljs.core.count.call(null,c__8927__auto__);
var G__40602 = 0;
seq__40587 = G__40599;
chunk__40588 = G__40600;
count__40589 = G__40601;
i__40590 = G__40602;
continue;
}
} else
{var vec__40592 = cljs.core.first.call(null,seq__40587__$1);var op = cljs.core.nth.call(null,vec__40592,0,null);var path = cljs.core.nth.call(null,vec__40592,1,null);var d = vec__40592;var temp__4090__auto___40603 = foundation.app.render._get_id.call(null,renderer__$1,path);if(cljs.core.truth_(temp__4090__auto___40603))
{var id_40604 = temp__4090__auto___40603;foundation.app.render.render_delta.call(null,renderer__$1,d,path,foundation.app.render._parent_id.call(null,renderer__$1,path),id_40604);
} else
{foundation.app.render.render_delta.call(null,renderer__$1,d,path,foundation.app.render._parent_id.call(null,renderer__$1,path),foundation.app.render._new_id.call(null,renderer__$1,path));
}
{
var G__40605 = cljs.core.next.call(null,seq__40587__$1);
var G__40606 = null;
var G__40607 = 0;
var G__40608 = 0;
seq__40587 = G__40605;
chunk__40588 = G__40606;
count__40589 = G__40607;
i__40590 = G__40608;
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
cljs.core._add_method.call(null,foundation.app.render.render_delta,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),(function (renderer,delta,path,pid,id){return null;
}));
cljs.core._add_method.call(null,foundation.app.render.render_delta,new cljs.core.Keyword(null,"value","value",1125876963),(function (renderer,delta,path,pid,id){return null;
}));
cljs.core._add_method.call(null,foundation.app.render.render_delta,new cljs.core.Keyword(null,"attr","attr",1016909155),(function (renderer,delta,path,pid,id){return null;
}));

//# sourceMappingURL=render.js.map