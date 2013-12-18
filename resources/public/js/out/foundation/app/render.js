// Compiled by ClojureScript 0.0-2120
goog.provide('foundation.app.render');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('foundation.app.util');
goog.require('foundation.app.util');
foundation.app.render.render_delta = (function (){var method_table__9083__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__9084__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__9085__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__9086__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__9087__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("render-delta",(function() { 
var G__19779__delegate = function (p__19777,args){var vec__19778 = p__19777;var op = cljs.core.nth.call(null,vec__19778,0,null);var _ = cljs.core.nth.call(null,vec__19778,1,null);var ___$1 = cljs.core.nth.call(null,vec__19778,2,null);var ___$2 = cljs.core.nth.call(null,vec__19778,3,null);return op;
};
var G__19779 = function (p__19777,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__19779__delegate.call(this,p__19777,args);};
G__19779.cljs$lang$maxFixedArity = 1;
G__19779.cljs$lang$applyTo = (function (arglist__19780){
var p__19777 = cljs.core.first(arglist__19780);
var args = cljs.core.rest(arglist__19780);
return G__19779__delegate(p__19777,args);
});
G__19779.cljs$core$IFn$_invoke$arity$variadic = G__19779__delegate;
return G__19779;
})()
,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__9087__auto__,method_table__9083__auto__,prefer_table__9084__auto__,method_cache__9085__auto__,cached_hierarchy__9086__auto__));
})();
foundation.app.render.guid = (function guid(){return IdGenerator.getInstance.call(null).getNextUniqueId();
});
foundation.app.render.log_fn = (function log_fn(deltas){return foundation.app.util.log_group.call(null,"Rendering Deltas",deltas);
});
foundation.app.render.node_seq = (function node_seq(env){return cljs.core.tree_seq.call(null,cljs.core.constantly.call(null,true),(function (n){return cljs.core.map.call(null,(function (p1__19781_SHARP_){return cljs.core.get.call(null,n,p1__19781_SHARP_);
}),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),null,new cljs.core.Keyword(null,"_data","_data",1104714747),null,new cljs.core.Keyword(null,"id","id",1013907597),null], null), null),cljs.core.keys.call(null,n)));
}),env);
});
foundation.app.render.run_on_destroy_BANG_ = (function run_on_destroy_BANG_(env){var nodes = foundation.app.render.node_seq.call(null,env);var seq__19786 = cljs.core.seq.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),nodes));var chunk__19787 = null;var count__19788 = 0;var i__19789 = 0;while(true){
if((i__19789 < count__19788))
{var f = cljs.core._nth.call(null,chunk__19787,i__19789);f.call(null);
{
var G__19790 = seq__19786;
var G__19791 = chunk__19787;
var G__19792 = count__19788;
var G__19793 = (i__19789 + 1);
seq__19786 = G__19790;
chunk__19787 = G__19791;
count__19788 = G__19792;
i__19789 = G__19793;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__19786);if(temp__4092__auto__)
{var seq__19786__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19786__$1))
{var c__8974__auto__ = cljs.core.chunk_first.call(null,seq__19786__$1);{
var G__19794 = cljs.core.chunk_rest.call(null,seq__19786__$1);
var G__19795 = c__8974__auto__;
var G__19796 = cljs.core.count.call(null,c__8974__auto__);
var G__19797 = 0;
seq__19786 = G__19794;
chunk__19787 = G__19795;
count__19788 = G__19796;
i__19789 = G__19797;
continue;
}
} else
{var f = cljs.core.first.call(null,seq__19786__$1);f.call(null);
{
var G__19798 = cljs.core.next.call(null,seq__19786__$1);
var G__19799 = null;
var G__19800 = 0;
var G__19801 = 0;
seq__19786 = G__19798;
chunk__19787 = G__19799;
count__19788 = G__19800;
i__19789 = G__19801;
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
foundation.app.render.IRenderer = (function (){var obj19803 = {};return obj19803;
})();
foundation.app.render._get_id = (function _get_id(_,path){if((function (){var and__8233__auto__ = _;if(and__8233__auto__)
{return _.foundation$app$render$IRenderer$_get_id$arity$2;
} else
{return and__8233__auto__;
}
})())
{return _.foundation$app$render$IRenderer$_get_id$arity$2(_,path);
} else
{var x__8853__auto__ = (((_ == null))?null:_);return (function (){var or__8245__auto__ = (foundation.app.render._get_id[goog.typeOf(x__8853__auto__)]);if(or__8245__auto__)
{return or__8245__auto__;
} else
{var or__8245__auto____$1 = (foundation.app.render._get_id["_"]);if(or__8245__auto____$1)
{return or__8245__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderer.-get-id",_);
}
}
})().call(null,_,path);
}
});
foundation.app.render._parent_id = (function _parent_id(_,path){if((function (){var and__8233__auto__ = _;if(and__8233__auto__)
{return _.foundation$app$render$IRenderer$_parent_id$arity$2;
} else
{return and__8233__auto__;
}
})())
{return _.foundation$app$render$IRenderer$_parent_id$arity$2(_,path);
} else
{var x__8853__auto__ = (((_ == null))?null:_);return (function (){var or__8245__auto__ = (foundation.app.render._parent_id[goog.typeOf(x__8853__auto__)]);if(or__8245__auto__)
{return or__8245__auto__;
} else
{var or__8245__auto____$1 = (foundation.app.render._parent_id["_"]);if(or__8245__auto____$1)
{return or__8245__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderer.-parent-id",_);
}
}
})().call(null,_,path);
}
});
foundation.app.render._new_id = (function() {
var _new_id = null;
var _new_id__2 = (function (_,path){if((function (){var and__8233__auto__ = _;if(and__8233__auto__)
{return _.foundation$app$render$IRenderer$_new_id$arity$2;
} else
{return and__8233__auto__;
}
})())
{return _.foundation$app$render$IRenderer$_new_id$arity$2(_,path);
} else
{var x__8853__auto__ = (((_ == null))?null:_);return (function (){var or__8245__auto__ = (foundation.app.render._new_id[goog.typeOf(x__8853__auto__)]);if(or__8245__auto__)
{return or__8245__auto__;
} else
{var or__8245__auto____$1 = (foundation.app.render._new_id["_"]);if(or__8245__auto____$1)
{return or__8245__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderer.-new-id",_);
}
}
})().call(null,_,path);
}
});
var _new_id__3 = (function (_,path,id){if((function (){var and__8233__auto__ = _;if(and__8233__auto__)
{return _.foundation$app$render$IRenderer$_new_id$arity$3;
} else
{return and__8233__auto__;
}
})())
{return _.foundation$app$render$IRenderer$_new_id$arity$3(_,path,id);
} else
{var x__8853__auto__ = (((_ == null))?null:_);return (function (){var or__8245__auto__ = (foundation.app.render._new_id[goog.typeOf(x__8853__auto__)]);if(or__8245__auto__)
{return or__8245__auto__;
} else
{var or__8245__auto____$1 = (foundation.app.render._new_id["_"]);if(or__8245__auto____$1)
{return or__8245__auto____$1;
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
foundation.app.render._delete_id = (function _delete_id(_,path){if((function (){var and__8233__auto__ = _;if(and__8233__auto__)
{return _.foundation$app$render$IRenderer$_delete_id$arity$2;
} else
{return and__8233__auto__;
}
})())
{return _.foundation$app$render$IRenderer$_delete_id$arity$2(_,path);
} else
{var x__8853__auto__ = (((_ == null))?null:_);return (function (){var or__8245__auto__ = (foundation.app.render._delete_id[goog.typeOf(x__8853__auto__)]);if(or__8245__auto__)
{return or__8245__auto__;
} else
{var or__8245__auto____$1 = (foundation.app.render._delete_id["_"]);if(or__8245__auto____$1)
{return or__8245__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderer.-delete-id",_);
}
}
})().call(null,_,path);
}
});
foundation.app.render._on_destroy = (function _on_destroy(_,path,f){if((function (){var and__8233__auto__ = _;if(and__8233__auto__)
{return _.foundation$app$render$IRenderer$_on_destroy$arity$3;
} else
{return and__8233__auto__;
}
})())
{return _.foundation$app$render$IRenderer$_on_destroy$arity$3(_,path,f);
} else
{var x__8853__auto__ = (((_ == null))?null:_);return (function (){var or__8245__auto__ = (foundation.app.render._on_destroy[goog.typeOf(x__8853__auto__)]);if(or__8245__auto__)
{return or__8245__auto__;
} else
{var or__8245__auto____$1 = (foundation.app.render._on_destroy["_"]);if(or__8245__auto____$1)
{return or__8245__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderer.-on-destroy",_);
}
}
})().call(null,_,path,f);
}
});
foundation.app.render._set_data = (function _set_data(_,path,data){if((function (){var and__8233__auto__ = _;if(and__8233__auto__)
{return _.foundation$app$render$IRenderer$_set_data$arity$3;
} else
{return and__8233__auto__;
}
})())
{return _.foundation$app$render$IRenderer$_set_data$arity$3(_,path,data);
} else
{var x__8853__auto__ = (((_ == null))?null:_);return (function (){var or__8245__auto__ = (foundation.app.render._set_data[goog.typeOf(x__8853__auto__)]);if(or__8245__auto__)
{return or__8245__auto__;
} else
{var or__8245__auto____$1 = (foundation.app.render._set_data["_"]);if(or__8245__auto____$1)
{return or__8245__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderer.-set-data",_);
}
}
})().call(null,_,path,data);
}
});
foundation.app.render._get_data = (function _get_data(_,path){if((function (){var and__8233__auto__ = _;if(and__8233__auto__)
{return _.foundation$app$render$IRenderer$_get_data$arity$2;
} else
{return and__8233__auto__;
}
})())
{return _.foundation$app$render$IRenderer$_get_data$arity$2(_,path);
} else
{var x__8853__auto__ = (((_ == null))?null:_);return (function (){var or__8245__auto__ = (foundation.app.render._get_data[goog.typeOf(x__8853__auto__)]);if(or__8245__auto__)
{return or__8245__auto__;
} else
{var or__8245__auto____$1 = (foundation.app.render._get_data["_"]);if(or__8245__auto____$1)
{return or__8245__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderer.-get-data",_);
}
}
})().call(null,_,path);
}
});
foundation.app.render._drop_data = (function _drop_data(_,path){if((function (){var and__8233__auto__ = _;if(and__8233__auto__)
{return _.foundation$app$render$IRenderer$_drop_data$arity$2;
} else
{return and__8233__auto__;
}
})())
{return _.foundation$app$render$IRenderer$_drop_data$arity$2(_,path);
} else
{var x__8853__auto__ = (((_ == null))?null:_);return (function (){var or__8245__auto__ = (foundation.app.render._drop_data[goog.typeOf(x__8853__auto__)]);if(or__8245__auto__)
{return or__8245__auto__;
} else
{var or__8245__auto____$1 = (foundation.app.render._drop_data["_"]);if(or__8245__auto____$1)
{return or__8245__auto____$1;
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
foundation.app.render.Renderer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8807__auto__){var self__ = this;
var this__8807__auto____$1 = this;var h__8661__auto__ = self__.__hash;if(!((h__8661__auto__ == null)))
{return h__8661__auto__;
} else
{var h__8661__auto____$1 = cljs.core.hash_imap.call(null,this__8807__auto____$1);self__.__hash = h__8661__auto____$1;
return h__8661__auto____$1;
}
});
foundation.app.render.Renderer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8812__auto__,k__8813__auto__){var self__ = this;
var this__8812__auto____$1 = this;return cljs.core._lookup.call(null,this__8812__auto____$1,k__8813__auto__,null);
});
foundation.app.render.Renderer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8814__auto__,k19805,else__8815__auto__){var self__ = this;
var this__8814__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k19805,new cljs.core.Keyword(null,"env","env",1014004831)))
{return self__.env;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k19805,else__8815__auto__);
} else
{return null;
}
}
});
foundation.app.render.Renderer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8819__auto__,k__8820__auto__,G__19804){var self__ = this;
var this__8819__auto____$1 = this;var pred__19807 = cljs.core.keyword_identical_QMARK_;var expr__19808 = k__8820__auto__;if(cljs.core.truth_(pred__19807.call(null,new cljs.core.Keyword(null,"env","env",1014004831),expr__19808)))
{return (new foundation.app.render.Renderer(G__19804,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.render.Renderer(self__.env,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8820__auto__,G__19804),null));
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
foundation.app.render.Renderer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8826__auto__,writer__8827__auto__,opts__8828__auto__){var self__ = this;
var this__8826__auto____$1 = this;var pr_pair__8829__auto__ = (function (keyval__8830__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8827__auto__,cljs.core.pr_writer,""," ","",opts__8828__auto__,keyval__8830__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__8827__auto__,pr_pair__8829__auto__,"#foundation.app.render.Renderer{",", ","}",opts__8828__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"env","env",1014004831),self__.env],null))], null),self__.__extmap));
});
foundation.app.render.Renderer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8817__auto__,entry__8818__auto__){var self__ = this;
var this__8817__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8818__auto__))
{return cljs.core._assoc.call(null,this__8817__auto____$1,cljs.core._nth.call(null,entry__8818__auto__,0),cljs.core._nth.call(null,entry__8818__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8817__auto____$1,entry__8818__auto__);
}
});
foundation.app.render.Renderer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8824__auto__){var self__ = this;
var this__8824__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"env","env",1014004831),self__.env],null))], null),self__.__extmap));
});
foundation.app.render.Renderer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8816__auto__){var self__ = this;
var this__8816__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
foundation.app.render.Renderer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8808__auto__,other__8809__auto__){var self__ = this;
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
foundation.app.render.Renderer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8811__auto__,G__19804){var self__ = this;
var this__8811__auto____$1 = this;return (new foundation.app.render.Renderer(self__.env,G__19804,self__.__extmap,self__.__hash));
});
foundation.app.render.Renderer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8810__auto__){var self__ = this;
var this__8810__auto____$1 = this;return self__.__meta;
});
foundation.app.render.Renderer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8821__auto__,k__8822__auto__){var self__ = this;
var this__8821__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"env","env",1014004831),null], null), null),k__8822__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8821__auto____$1),self__.__meta),k__8822__auto__);
} else
{return (new foundation.app.render.Renderer(self__.env,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8822__auto__)),null));
}
});
foundation.app.render.Renderer.cljs$lang$type = true;
foundation.app.render.Renderer.cljs$lang$ctorPrSeq = (function (this__8846__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"foundation.app.render/Renderer");
});
foundation.app.render.Renderer.cljs$lang$ctorPrWriter = (function (this__8846__auto__,writer__8847__auto__){return cljs.core._write.call(null,writer__8847__auto__,"foundation.app.render/Renderer");
});
foundation.app.render.__GT_Renderer = (function __GT_Renderer(env){return (new foundation.app.render.Renderer(env));
});
foundation.app.render.map__GT_Renderer = (function map__GT_Renderer(G__19806){return (new foundation.app.render.Renderer(new cljs.core.Keyword(null,"env","env",1014004831).cljs$core$IFn$_invoke$arity$1(G__19806),null,cljs.core.dissoc.call(null,G__19806,new cljs.core.Keyword(null,"env","env",1014004831))));
});
foundation.app.render.push_render_queue = (function push_render_queue(root_id,input_queue){var renderer = foundation.app.render.__GT_Renderer.call(null,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),root_id], null)));var render_queue = cljs.core.async.chan.call(null);var c__12202__auto___19884 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12203__auto__ = (function (){var switch__12132__auto__ = (function (state_19867){var state_val_19868 = (state_19867[1]);if((state_val_19868 === 7))
{var inst_19862 = (state_19867[2]);var state_19867__$1 = (function (){var statearr_19869 = state_19867;(statearr_19869[7] = inst_19862);
return statearr_19869;
})();var statearr_19870_19885 = state_19867__$1;(statearr_19870_19885[2] = null);
(statearr_19870_19885[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19868 === 6))
{var inst_19852 = (state_19867[8]);var inst_19850 = (state_19867[9]);var inst_19858 = foundation.app.render._parent_id.call(null,renderer,inst_19852);var inst_19859 = foundation.app.render._new_id.call(null,renderer,inst_19852);var inst_19860 = foundation.app.render.render_delta.call(null,renderer,inst_19850,inst_19852,inst_19858,inst_19859);var state_19867__$1 = state_19867;var statearr_19871_19886 = state_19867__$1;(statearr_19871_19886[2] = inst_19860);
(statearr_19871_19886[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19868 === 5))
{var inst_19852 = (state_19867[8]);var inst_19853 = (state_19867[10]);var inst_19850 = (state_19867[9]);var inst_19855 = foundation.app.render._parent_id.call(null,renderer,inst_19852);var inst_19856 = foundation.app.render.render_delta.call(null,renderer,inst_19850,inst_19852,inst_19855,inst_19853);var state_19867__$1 = state_19867;var statearr_19872_19887 = state_19867__$1;(statearr_19872_19887[2] = inst_19856);
(statearr_19872_19887[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19868 === 4))
{var inst_19852 = (state_19867[8]);var inst_19853 = (state_19867[10]);var inst_19850 = (state_19867[9]);var inst_19850__$1 = (state_19867[2]);var inst_19851 = cljs.core.nth.call(null,inst_19850__$1,0,null);var inst_19852__$1 = cljs.core.nth.call(null,inst_19850__$1,1,null);var inst_19853__$1 = foundation.app.render._get_id.call(null,renderer,inst_19852__$1);var state_19867__$1 = (function (){var statearr_19873 = state_19867;(statearr_19873[8] = inst_19852__$1);
(statearr_19873[10] = inst_19853__$1);
(statearr_19873[11] = inst_19851);
(statearr_19873[9] = inst_19850__$1);
return statearr_19873;
})();if(cljs.core.truth_(inst_19853__$1))
{var statearr_19874_19888 = state_19867__$1;(statearr_19874_19888[1] = 5);
} else
{var statearr_19875_19889 = state_19867__$1;(statearr_19875_19889[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19868 === 3))
{var inst_19865 = (state_19867[2]);var state_19867__$1 = state_19867;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19867__$1,inst_19865);
} else
{if((state_val_19868 === 2))
{var state_19867__$1 = state_19867;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19867__$1,4,render_queue);
} else
{if((state_val_19868 === 1))
{var state_19867__$1 = state_19867;var statearr_19876_19890 = state_19867__$1;(statearr_19876_19890[2] = null);
(statearr_19876_19890[1] = 2);
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
});return ((function (switch__12132__auto__){
return (function() {
var state_machine__12133__auto__ = null;
var state_machine__12133__auto____0 = (function (){var statearr_19880 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19880[0] = state_machine__12133__auto__);
(statearr_19880[1] = 1);
return statearr_19880;
});
var state_machine__12133__auto____1 = (function (state_19867){while(true){
var ret_value__12134__auto__ = (function (){try{while(true){
var result__12135__auto__ = switch__12132__auto__.call(null,state_19867);if(cljs.core.keyword_identical_QMARK_.call(null,result__12135__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12135__auto__;
}
break;
}
}catch (e19881){if((e19881 instanceof Object))
{var ex__12136__auto__ = e19881;var statearr_19882_19891 = state_19867;(statearr_19882_19891[5] = ex__12136__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19867);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19881;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12134__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19892 = state_19867;
state_19867 = G__19892;
continue;
}
} else
{return ret_value__12134__auto__;
}
break;
}
});
state_machine__12133__auto__ = function(state_19867){
switch(arguments.length){
case 0:
return state_machine__12133__auto____0.call(this);
case 1:
return state_machine__12133__auto____1.call(this,state_19867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12133__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12133__auto____0;
state_machine__12133__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12133__auto____1;
return state_machine__12133__auto__;
})()
;})(switch__12132__auto__))
})();var state__12204__auto__ = (function (){var statearr_19883 = f__12203__auto__.call(null);(statearr_19883[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12202__auto___19884);
return statearr_19883;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12204__auto__);
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
var seq__19899 = cljs.core.seq.call(null,deltas);var chunk__19900 = null;var count__19901 = 0;var i__19902 = 0;while(true){
if((i__19902 < count__19901))
{var vec__19903 = cljs.core._nth.call(null,chunk__19900,i__19902);var op = cljs.core.nth.call(null,vec__19903,0,null);var path = cljs.core.nth.call(null,vec__19903,1,null);var d = vec__19903;var temp__4090__auto___19905 = foundation.app.render._get_id.call(null,renderer__$1,path);if(cljs.core.truth_(temp__4090__auto___19905))
{var id_19906 = temp__4090__auto___19905;foundation.app.render.render_delta.call(null,renderer__$1,d,path,foundation.app.render._parent_id.call(null,renderer__$1,path),id_19906);
} else
{foundation.app.render.render_delta.call(null,renderer__$1,d,path,foundation.app.render._parent_id.call(null,renderer__$1,path),foundation.app.render._new_id.call(null,renderer__$1,path));
}
{
var G__19907 = seq__19899;
var G__19908 = chunk__19900;
var G__19909 = count__19901;
var G__19910 = (i__19902 + 1);
seq__19899 = G__19907;
chunk__19900 = G__19908;
count__19901 = G__19909;
i__19902 = G__19910;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__19899);if(temp__4092__auto__)
{var seq__19899__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19899__$1))
{var c__8974__auto__ = cljs.core.chunk_first.call(null,seq__19899__$1);{
var G__19911 = cljs.core.chunk_rest.call(null,seq__19899__$1);
var G__19912 = c__8974__auto__;
var G__19913 = cljs.core.count.call(null,c__8974__auto__);
var G__19914 = 0;
seq__19899 = G__19911;
chunk__19900 = G__19912;
count__19901 = G__19913;
i__19902 = G__19914;
continue;
}
} else
{var vec__19904 = cljs.core.first.call(null,seq__19899__$1);var op = cljs.core.nth.call(null,vec__19904,0,null);var path = cljs.core.nth.call(null,vec__19904,1,null);var d = vec__19904;var temp__4090__auto___19915 = foundation.app.render._get_id.call(null,renderer__$1,path);if(cljs.core.truth_(temp__4090__auto___19915))
{var id_19916 = temp__4090__auto___19915;foundation.app.render.render_delta.call(null,renderer__$1,d,path,foundation.app.render._parent_id.call(null,renderer__$1,path),id_19916);
} else
{foundation.app.render.render_delta.call(null,renderer__$1,d,path,foundation.app.render._parent_id.call(null,renderer__$1,path),foundation.app.render._new_id.call(null,renderer__$1,path));
}
{
var G__19917 = cljs.core.next.call(null,seq__19899__$1);
var G__19918 = null;
var G__19919 = 0;
var G__19920 = 0;
seq__19899 = G__19917;
chunk__19900 = G__19918;
count__19901 = G__19919;
i__19902 = G__19920;
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