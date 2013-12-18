// Compiled by ClojureScript 0.0-2120
goog.provide('foundation.app.render');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('foundation.app.util');
goog.require('foundation.app.util');
foundation.app.render.render_delta = (function (){var method_table__9068__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__9069__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__9070__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__9071__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__9072__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("render-delta",(function() { 
var G__19764__delegate = function (p__19762,args){var vec__19763 = p__19762;var op = cljs.core.nth.call(null,vec__19763,0,null);var _ = cljs.core.nth.call(null,vec__19763,1,null);var ___$1 = cljs.core.nth.call(null,vec__19763,2,null);var ___$2 = cljs.core.nth.call(null,vec__19763,3,null);return op;
};
var G__19764 = function (p__19762,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__19764__delegate.call(this,p__19762,args);};
G__19764.cljs$lang$maxFixedArity = 1;
G__19764.cljs$lang$applyTo = (function (arglist__19765){
var p__19762 = cljs.core.first(arglist__19765);
var args = cljs.core.rest(arglist__19765);
return G__19764__delegate(p__19762,args);
});
G__19764.cljs$core$IFn$_invoke$arity$variadic = G__19764__delegate;
return G__19764;
})()
,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__9072__auto__,method_table__9068__auto__,prefer_table__9069__auto__,method_cache__9070__auto__,cached_hierarchy__9071__auto__));
})();
foundation.app.render.guid = (function guid(){return IdGenerator.getInstance.call(null).getNextUniqueId();
});
foundation.app.render.log_fn = (function log_fn(deltas){return foundation.app.util.log_group.call(null,"Rendering Deltas",deltas);
});
foundation.app.render.node_seq = (function node_seq(env){return cljs.core.tree_seq.call(null,cljs.core.constantly.call(null,true),(function (n){return cljs.core.map.call(null,(function (p1__19766_SHARP_){return cljs.core.get.call(null,n,p1__19766_SHARP_);
}),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),null,new cljs.core.Keyword(null,"_data","_data",1104714747),null,new cljs.core.Keyword(null,"id","id",1013907597),null], null), null),cljs.core.keys.call(null,n)));
}),env);
});
foundation.app.render.run_on_destroy_BANG_ = (function run_on_destroy_BANG_(env){var nodes = foundation.app.render.node_seq.call(null,env);var seq__19771 = cljs.core.seq.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),nodes));var chunk__19772 = null;var count__19773 = 0;var i__19774 = 0;while(true){
if((i__19774 < count__19773))
{var f = cljs.core._nth.call(null,chunk__19772,i__19774);f.call(null);
{
var G__19775 = seq__19771;
var G__19776 = chunk__19772;
var G__19777 = count__19773;
var G__19778 = (i__19774 + 1);
seq__19771 = G__19775;
chunk__19772 = G__19776;
count__19773 = G__19777;
i__19774 = G__19778;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__19771);if(temp__4092__auto__)
{var seq__19771__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19771__$1))
{var c__8959__auto__ = cljs.core.chunk_first.call(null,seq__19771__$1);{
var G__19779 = cljs.core.chunk_rest.call(null,seq__19771__$1);
var G__19780 = c__8959__auto__;
var G__19781 = cljs.core.count.call(null,c__8959__auto__);
var G__19782 = 0;
seq__19771 = G__19779;
chunk__19772 = G__19780;
count__19773 = G__19781;
i__19774 = G__19782;
continue;
}
} else
{var f = cljs.core.first.call(null,seq__19771__$1);f.call(null);
{
var G__19783 = cljs.core.next.call(null,seq__19771__$1);
var G__19784 = null;
var G__19785 = 0;
var G__19786 = 0;
seq__19771 = G__19783;
chunk__19772 = G__19784;
count__19773 = G__19785;
i__19774 = G__19786;
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
foundation.app.render.IRenderer = (function (){var obj19788 = {};return obj19788;
})();
foundation.app.render._get_id = (function _get_id(_,path){if((function (){var and__8218__auto__ = _;if(and__8218__auto__)
{return _.foundation$app$render$IRenderer$_get_id$arity$2;
} else
{return and__8218__auto__;
}
})())
{return _.foundation$app$render$IRenderer$_get_id$arity$2(_,path);
} else
{var x__8838__auto__ = (((_ == null))?null:_);return (function (){var or__8230__auto__ = (foundation.app.render._get_id[goog.typeOf(x__8838__auto__)]);if(or__8230__auto__)
{return or__8230__auto__;
} else
{var or__8230__auto____$1 = (foundation.app.render._get_id["_"]);if(or__8230__auto____$1)
{return or__8230__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderer.-get-id",_);
}
}
})().call(null,_,path);
}
});
foundation.app.render._parent_id = (function _parent_id(_,path){if((function (){var and__8218__auto__ = _;if(and__8218__auto__)
{return _.foundation$app$render$IRenderer$_parent_id$arity$2;
} else
{return and__8218__auto__;
}
})())
{return _.foundation$app$render$IRenderer$_parent_id$arity$2(_,path);
} else
{var x__8838__auto__ = (((_ == null))?null:_);return (function (){var or__8230__auto__ = (foundation.app.render._parent_id[goog.typeOf(x__8838__auto__)]);if(or__8230__auto__)
{return or__8230__auto__;
} else
{var or__8230__auto____$1 = (foundation.app.render._parent_id["_"]);if(or__8230__auto____$1)
{return or__8230__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderer.-parent-id",_);
}
}
})().call(null,_,path);
}
});
foundation.app.render._new_id = (function() {
var _new_id = null;
var _new_id__2 = (function (_,path){if((function (){var and__8218__auto__ = _;if(and__8218__auto__)
{return _.foundation$app$render$IRenderer$_new_id$arity$2;
} else
{return and__8218__auto__;
}
})())
{return _.foundation$app$render$IRenderer$_new_id$arity$2(_,path);
} else
{var x__8838__auto__ = (((_ == null))?null:_);return (function (){var or__8230__auto__ = (foundation.app.render._new_id[goog.typeOf(x__8838__auto__)]);if(or__8230__auto__)
{return or__8230__auto__;
} else
{var or__8230__auto____$1 = (foundation.app.render._new_id["_"]);if(or__8230__auto____$1)
{return or__8230__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderer.-new-id",_);
}
}
})().call(null,_,path);
}
});
var _new_id__3 = (function (_,path,id){if((function (){var and__8218__auto__ = _;if(and__8218__auto__)
{return _.foundation$app$render$IRenderer$_new_id$arity$3;
} else
{return and__8218__auto__;
}
})())
{return _.foundation$app$render$IRenderer$_new_id$arity$3(_,path,id);
} else
{var x__8838__auto__ = (((_ == null))?null:_);return (function (){var or__8230__auto__ = (foundation.app.render._new_id[goog.typeOf(x__8838__auto__)]);if(or__8230__auto__)
{return or__8230__auto__;
} else
{var or__8230__auto____$1 = (foundation.app.render._new_id["_"]);if(or__8230__auto____$1)
{return or__8230__auto____$1;
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
foundation.app.render._delete_id = (function _delete_id(_,path){if((function (){var and__8218__auto__ = _;if(and__8218__auto__)
{return _.foundation$app$render$IRenderer$_delete_id$arity$2;
} else
{return and__8218__auto__;
}
})())
{return _.foundation$app$render$IRenderer$_delete_id$arity$2(_,path);
} else
{var x__8838__auto__ = (((_ == null))?null:_);return (function (){var or__8230__auto__ = (foundation.app.render._delete_id[goog.typeOf(x__8838__auto__)]);if(or__8230__auto__)
{return or__8230__auto__;
} else
{var or__8230__auto____$1 = (foundation.app.render._delete_id["_"]);if(or__8230__auto____$1)
{return or__8230__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderer.-delete-id",_);
}
}
})().call(null,_,path);
}
});
foundation.app.render._on_destroy = (function _on_destroy(_,path,f){if((function (){var and__8218__auto__ = _;if(and__8218__auto__)
{return _.foundation$app$render$IRenderer$_on_destroy$arity$3;
} else
{return and__8218__auto__;
}
})())
{return _.foundation$app$render$IRenderer$_on_destroy$arity$3(_,path,f);
} else
{var x__8838__auto__ = (((_ == null))?null:_);return (function (){var or__8230__auto__ = (foundation.app.render._on_destroy[goog.typeOf(x__8838__auto__)]);if(or__8230__auto__)
{return or__8230__auto__;
} else
{var or__8230__auto____$1 = (foundation.app.render._on_destroy["_"]);if(or__8230__auto____$1)
{return or__8230__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderer.-on-destroy",_);
}
}
})().call(null,_,path,f);
}
});
foundation.app.render._set_data = (function _set_data(_,path,data){if((function (){var and__8218__auto__ = _;if(and__8218__auto__)
{return _.foundation$app$render$IRenderer$_set_data$arity$3;
} else
{return and__8218__auto__;
}
})())
{return _.foundation$app$render$IRenderer$_set_data$arity$3(_,path,data);
} else
{var x__8838__auto__ = (((_ == null))?null:_);return (function (){var or__8230__auto__ = (foundation.app.render._set_data[goog.typeOf(x__8838__auto__)]);if(or__8230__auto__)
{return or__8230__auto__;
} else
{var or__8230__auto____$1 = (foundation.app.render._set_data["_"]);if(or__8230__auto____$1)
{return or__8230__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderer.-set-data",_);
}
}
})().call(null,_,path,data);
}
});
foundation.app.render._get_data = (function _get_data(_,path){if((function (){var and__8218__auto__ = _;if(and__8218__auto__)
{return _.foundation$app$render$IRenderer$_get_data$arity$2;
} else
{return and__8218__auto__;
}
})())
{return _.foundation$app$render$IRenderer$_get_data$arity$2(_,path);
} else
{var x__8838__auto__ = (((_ == null))?null:_);return (function (){var or__8230__auto__ = (foundation.app.render._get_data[goog.typeOf(x__8838__auto__)]);if(or__8230__auto__)
{return or__8230__auto__;
} else
{var or__8230__auto____$1 = (foundation.app.render._get_data["_"]);if(or__8230__auto____$1)
{return or__8230__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderer.-get-data",_);
}
}
})().call(null,_,path);
}
});
foundation.app.render._drop_data = (function _drop_data(_,path){if((function (){var and__8218__auto__ = _;if(and__8218__auto__)
{return _.foundation$app$render$IRenderer$_drop_data$arity$2;
} else
{return and__8218__auto__;
}
})())
{return _.foundation$app$render$IRenderer$_drop_data$arity$2(_,path);
} else
{var x__8838__auto__ = (((_ == null))?null:_);return (function (){var or__8230__auto__ = (foundation.app.render._drop_data[goog.typeOf(x__8838__auto__)]);if(or__8230__auto__)
{return or__8230__auto__;
} else
{var or__8230__auto____$1 = (foundation.app.render._drop_data["_"]);if(or__8230__auto____$1)
{return or__8230__auto____$1;
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
foundation.app.render.Renderer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8792__auto__){var self__ = this;
var this__8792__auto____$1 = this;var h__8646__auto__ = self__.__hash;if(!((h__8646__auto__ == null)))
{return h__8646__auto__;
} else
{var h__8646__auto____$1 = cljs.core.hash_imap.call(null,this__8792__auto____$1);self__.__hash = h__8646__auto____$1;
return h__8646__auto____$1;
}
});
foundation.app.render.Renderer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8797__auto__,k__8798__auto__){var self__ = this;
var this__8797__auto____$1 = this;return cljs.core._lookup.call(null,this__8797__auto____$1,k__8798__auto__,null);
});
foundation.app.render.Renderer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8799__auto__,k19790,else__8800__auto__){var self__ = this;
var this__8799__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k19790,new cljs.core.Keyword(null,"env","env",1014004831)))
{return self__.env;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k19790,else__8800__auto__);
} else
{return null;
}
}
});
foundation.app.render.Renderer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8804__auto__,k__8805__auto__,G__19789){var self__ = this;
var this__8804__auto____$1 = this;var pred__19792 = cljs.core.keyword_identical_QMARK_;var expr__19793 = k__8805__auto__;if(cljs.core.truth_(pred__19792.call(null,new cljs.core.Keyword(null,"env","env",1014004831),expr__19793)))
{return (new foundation.app.render.Renderer(G__19789,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.render.Renderer(self__.env,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8805__auto__,G__19789),null));
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
foundation.app.render.Renderer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8811__auto__,writer__8812__auto__,opts__8813__auto__){var self__ = this;
var this__8811__auto____$1 = this;var pr_pair__8814__auto__ = (function (keyval__8815__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8812__auto__,cljs.core.pr_writer,""," ","",opts__8813__auto__,keyval__8815__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__8812__auto__,pr_pair__8814__auto__,"#foundation.app.render.Renderer{",", ","}",opts__8813__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"env","env",1014004831),self__.env],null))], null),self__.__extmap));
});
foundation.app.render.Renderer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8802__auto__,entry__8803__auto__){var self__ = this;
var this__8802__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8803__auto__))
{return cljs.core._assoc.call(null,this__8802__auto____$1,cljs.core._nth.call(null,entry__8803__auto__,0),cljs.core._nth.call(null,entry__8803__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8802__auto____$1,entry__8803__auto__);
}
});
foundation.app.render.Renderer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8809__auto__){var self__ = this;
var this__8809__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"env","env",1014004831),self__.env],null))], null),self__.__extmap));
});
foundation.app.render.Renderer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8801__auto__){var self__ = this;
var this__8801__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
foundation.app.render.Renderer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8793__auto__,other__8794__auto__){var self__ = this;
var this__8793__auto____$1 = this;if(cljs.core.truth_((function (){var and__8218__auto__ = other__8794__auto__;if(cljs.core.truth_(and__8218__auto__))
{return ((this__8793__auto____$1.constructor === other__8794__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__8793__auto____$1,other__8794__auto__));
} else
{return and__8218__auto__;
}
})()))
{return true;
} else
{return false;
}
});
foundation.app.render.Renderer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8796__auto__,G__19789){var self__ = this;
var this__8796__auto____$1 = this;return (new foundation.app.render.Renderer(self__.env,G__19789,self__.__extmap,self__.__hash));
});
foundation.app.render.Renderer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8795__auto__){var self__ = this;
var this__8795__auto____$1 = this;return self__.__meta;
});
foundation.app.render.Renderer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8806__auto__,k__8807__auto__){var self__ = this;
var this__8806__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"env","env",1014004831),null], null), null),k__8807__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8806__auto____$1),self__.__meta),k__8807__auto__);
} else
{return (new foundation.app.render.Renderer(self__.env,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8807__auto__)),null));
}
});
foundation.app.render.Renderer.cljs$lang$type = true;
foundation.app.render.Renderer.cljs$lang$ctorPrSeq = (function (this__8831__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"foundation.app.render/Renderer");
});
foundation.app.render.Renderer.cljs$lang$ctorPrWriter = (function (this__8831__auto__,writer__8832__auto__){return cljs.core._write.call(null,writer__8832__auto__,"foundation.app.render/Renderer");
});
foundation.app.render.__GT_Renderer = (function __GT_Renderer(env){return (new foundation.app.render.Renderer(env));
});
foundation.app.render.map__GT_Renderer = (function map__GT_Renderer(G__19791){return (new foundation.app.render.Renderer(new cljs.core.Keyword(null,"env","env",1014004831).cljs$core$IFn$_invoke$arity$1(G__19791),null,cljs.core.dissoc.call(null,G__19791,new cljs.core.Keyword(null,"env","env",1014004831))));
});
foundation.app.render.push_render_queue = (function push_render_queue(root_id,input_queue){var renderer = foundation.app.render.__GT_Renderer.call(null,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),root_id], null)));var render_queue = cljs.core.async.chan.call(null);var c__12187__auto___19869 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_19852){var state_val_19853 = (state_19852[1]);if((state_val_19853 === 7))
{var inst_19847 = (state_19852[2]);var state_19852__$1 = (function (){var statearr_19854 = state_19852;(statearr_19854[7] = inst_19847);
return statearr_19854;
})();var statearr_19855_19870 = state_19852__$1;(statearr_19855_19870[2] = null);
(statearr_19855_19870[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19853 === 6))
{var inst_19837 = (state_19852[8]);var inst_19835 = (state_19852[9]);var inst_19843 = foundation.app.render._parent_id.call(null,renderer,inst_19837);var inst_19844 = foundation.app.render._new_id.call(null,renderer,inst_19837);var inst_19845 = foundation.app.render.render_delta.call(null,renderer,inst_19835,inst_19837,inst_19843,inst_19844);var state_19852__$1 = state_19852;var statearr_19856_19871 = state_19852__$1;(statearr_19856_19871[2] = inst_19845);
(statearr_19856_19871[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19853 === 5))
{var inst_19838 = (state_19852[10]);var inst_19837 = (state_19852[8]);var inst_19835 = (state_19852[9]);var inst_19840 = foundation.app.render._parent_id.call(null,renderer,inst_19837);var inst_19841 = foundation.app.render.render_delta.call(null,renderer,inst_19835,inst_19837,inst_19840,inst_19838);var state_19852__$1 = state_19852;var statearr_19857_19872 = state_19852__$1;(statearr_19857_19872[2] = inst_19841);
(statearr_19857_19872[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19853 === 4))
{var inst_19838 = (state_19852[10]);var inst_19837 = (state_19852[8]);var inst_19835 = (state_19852[9]);var inst_19835__$1 = (state_19852[2]);var inst_19836 = cljs.core.nth.call(null,inst_19835__$1,0,null);var inst_19837__$1 = cljs.core.nth.call(null,inst_19835__$1,1,null);var inst_19838__$1 = foundation.app.render._get_id.call(null,renderer,inst_19837__$1);var state_19852__$1 = (function (){var statearr_19858 = state_19852;(statearr_19858[10] = inst_19838__$1);
(statearr_19858[8] = inst_19837__$1);
(statearr_19858[11] = inst_19836);
(statearr_19858[9] = inst_19835__$1);
return statearr_19858;
})();if(cljs.core.truth_(inst_19838__$1))
{var statearr_19859_19873 = state_19852__$1;(statearr_19859_19873[1] = 5);
} else
{var statearr_19860_19874 = state_19852__$1;(statearr_19860_19874[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19853 === 3))
{var inst_19850 = (state_19852[2]);var state_19852__$1 = state_19852;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19852__$1,inst_19850);
} else
{if((state_val_19853 === 2))
{var state_19852__$1 = state_19852;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19852__$1,4,render_queue);
} else
{if((state_val_19853 === 1))
{var state_19852__$1 = state_19852;var statearr_19861_19875 = state_19852__$1;(statearr_19861_19875[2] = null);
(statearr_19861_19875[1] = 2);
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
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_19865 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19865[0] = state_machine__12118__auto__);
(statearr_19865[1] = 1);
return statearr_19865;
});
var state_machine__12118__auto____1 = (function (state_19852){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_19852);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e19866){if((e19866 instanceof Object))
{var ex__12121__auto__ = e19866;var statearr_19867_19876 = state_19852;(statearr_19867_19876[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19852);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19866;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19877 = state_19852;
state_19852 = G__19877;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_19852){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_19852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_19868 = f__12188__auto__.call(null);(statearr_19868[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto___19869);
return statearr_19868;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
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
var seq__19884 = cljs.core.seq.call(null,deltas);var chunk__19885 = null;var count__19886 = 0;var i__19887 = 0;while(true){
if((i__19887 < count__19886))
{var vec__19888 = cljs.core._nth.call(null,chunk__19885,i__19887);var op = cljs.core.nth.call(null,vec__19888,0,null);var path = cljs.core.nth.call(null,vec__19888,1,null);var d = vec__19888;var temp__4090__auto___19890 = foundation.app.render._get_id.call(null,renderer__$1,path);if(cljs.core.truth_(temp__4090__auto___19890))
{var id_19891 = temp__4090__auto___19890;foundation.app.render.render_delta.call(null,renderer__$1,d,path,foundation.app.render._parent_id.call(null,renderer__$1,path),id_19891);
} else
{foundation.app.render.render_delta.call(null,renderer__$1,d,path,foundation.app.render._parent_id.call(null,renderer__$1,path),foundation.app.render._new_id.call(null,renderer__$1,path));
}
{
var G__19892 = seq__19884;
var G__19893 = chunk__19885;
var G__19894 = count__19886;
var G__19895 = (i__19887 + 1);
seq__19884 = G__19892;
chunk__19885 = G__19893;
count__19886 = G__19894;
i__19887 = G__19895;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__19884);if(temp__4092__auto__)
{var seq__19884__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19884__$1))
{var c__8959__auto__ = cljs.core.chunk_first.call(null,seq__19884__$1);{
var G__19896 = cljs.core.chunk_rest.call(null,seq__19884__$1);
var G__19897 = c__8959__auto__;
var G__19898 = cljs.core.count.call(null,c__8959__auto__);
var G__19899 = 0;
seq__19884 = G__19896;
chunk__19885 = G__19897;
count__19886 = G__19898;
i__19887 = G__19899;
continue;
}
} else
{var vec__19889 = cljs.core.first.call(null,seq__19884__$1);var op = cljs.core.nth.call(null,vec__19889,0,null);var path = cljs.core.nth.call(null,vec__19889,1,null);var d = vec__19889;var temp__4090__auto___19900 = foundation.app.render._get_id.call(null,renderer__$1,path);if(cljs.core.truth_(temp__4090__auto___19900))
{var id_19901 = temp__4090__auto___19900;foundation.app.render.render_delta.call(null,renderer__$1,d,path,foundation.app.render._parent_id.call(null,renderer__$1,path),id_19901);
} else
{foundation.app.render.render_delta.call(null,renderer__$1,d,path,foundation.app.render._parent_id.call(null,renderer__$1,path),foundation.app.render._new_id.call(null,renderer__$1,path));
}
{
var G__19902 = cljs.core.next.call(null,seq__19884__$1);
var G__19903 = null;
var G__19904 = 0;
var G__19905 = 0;
seq__19884 = G__19902;
chunk__19885 = G__19903;
count__19886 = G__19904;
i__19887 = G__19905;
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