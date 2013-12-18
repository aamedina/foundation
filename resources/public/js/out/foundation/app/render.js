// Compiled by ClojureScript 0.0-2120
goog.provide('foundation.app.render');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('foundation.app.data.component');
goog.require('foundation.app.data.dependency');
goog.require('foundation.app.data.dependency');
goog.require('foundation.app.data.component');
goog.require('foundation.app.data.component');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('foundation.app.util');
goog.require('foundation.app.util');
foundation.app.render.render = (function (){var method_table__9066__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__9067__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__9068__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__9069__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__9070__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("render",(function (renderer,p__92716,pid,id){var vec__92717 = p__92716;var op = cljs.core.nth.call(null,vec__92717,0,null);var path = cljs.core.nth.call(null,vec__92717,1,null);var _ = cljs.core.nth.call(null,vec__92717,2,null);var ___$1 = cljs.core.nth.call(null,vec__92717,3,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,path], null);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__9070__auto__,method_table__9066__auto__,prefer_table__9067__auto__,method_cache__9068__auto__,cached_hierarchy__9069__auto__));
})();
foundation.app.render.guid = (function guid(){return IdGenerator.getInstance.call(null).getNextUniqueId();
});
foundation.app.render.log_fn = (function log_fn(deltas){return foundation.app.util.log_group.call(null,"Rendering Deltas",deltas);
});
foundation.app.render.node_seq = (function node_seq(env){return cljs.core.tree_seq.call(null,cljs.core.constantly.call(null,true),(function (n){return cljs.core.map.call(null,(function (p1__92718_SHARP_){return cljs.core.get.call(null,n,p1__92718_SHARP_);
}),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),null,new cljs.core.Keyword(null,"_data","_data",1104714747),null,new cljs.core.Keyword(null,"id","id",1013907597),null], null), null),cljs.core.keys.call(null,n)));
}),env);
});
foundation.app.render.run_on_destroy_BANG_ = (function run_on_destroy_BANG_(env){var nodes = foundation.app.render.node_seq.call(null,env);var seq__92723 = cljs.core.seq.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),nodes));var chunk__92724 = null;var count__92725 = 0;var i__92726 = 0;while(true){
if((i__92726 < count__92725))
{var f = cljs.core._nth.call(null,chunk__92724,i__92726);f.call(null);
{
var G__92727 = seq__92723;
var G__92728 = chunk__92724;
var G__92729 = count__92725;
var G__92730 = (i__92726 + 1);
seq__92723 = G__92727;
chunk__92724 = G__92728;
count__92725 = G__92729;
i__92726 = G__92730;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__92723);if(temp__4092__auto__)
{var seq__92723__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__92723__$1))
{var c__8957__auto__ = cljs.core.chunk_first.call(null,seq__92723__$1);{
var G__92731 = cljs.core.chunk_rest.call(null,seq__92723__$1);
var G__92732 = c__8957__auto__;
var G__92733 = cljs.core.count.call(null,c__8957__auto__);
var G__92734 = 0;
seq__92723 = G__92731;
chunk__92724 = G__92732;
count__92725 = G__92733;
i__92726 = G__92734;
continue;
}
} else
{var f = cljs.core.first.call(null,seq__92723__$1);f.call(null);
{
var G__92735 = cljs.core.next.call(null,seq__92723__$1);
var G__92736 = null;
var G__92737 = 0;
var G__92738 = 0;
seq__92723 = G__92735;
chunk__92724 = G__92736;
count__92725 = G__92737;
i__92726 = G__92738;
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
foundation.app.render.IRenderer = (function (){var obj92740 = {};return obj92740;
})();
foundation.app.render._get_id = (function _get_id(_,path){if((function (){var and__8216__auto__ = _;if(and__8216__auto__)
{return _.foundation$app$render$IRenderer$_get_id$arity$2;
} else
{return and__8216__auto__;
}
})())
{return _.foundation$app$render$IRenderer$_get_id$arity$2(_,path);
} else
{var x__8836__auto__ = (((_ == null))?null:_);return (function (){var or__8228__auto__ = (foundation.app.render._get_id[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (foundation.app.render._get_id["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderer.-get-id",_);
}
}
})().call(null,_,path);
}
});
foundation.app.render._parent_id = (function _parent_id(_,path){if((function (){var and__8216__auto__ = _;if(and__8216__auto__)
{return _.foundation$app$render$IRenderer$_parent_id$arity$2;
} else
{return and__8216__auto__;
}
})())
{return _.foundation$app$render$IRenderer$_parent_id$arity$2(_,path);
} else
{var x__8836__auto__ = (((_ == null))?null:_);return (function (){var or__8228__auto__ = (foundation.app.render._parent_id[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (foundation.app.render._parent_id["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderer.-parent-id",_);
}
}
})().call(null,_,path);
}
});
foundation.app.render._new_id = (function() {
var _new_id = null;
var _new_id__2 = (function (_,path){if((function (){var and__8216__auto__ = _;if(and__8216__auto__)
{return _.foundation$app$render$IRenderer$_new_id$arity$2;
} else
{return and__8216__auto__;
}
})())
{return _.foundation$app$render$IRenderer$_new_id$arity$2(_,path);
} else
{var x__8836__auto__ = (((_ == null))?null:_);return (function (){var or__8228__auto__ = (foundation.app.render._new_id[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (foundation.app.render._new_id["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderer.-new-id",_);
}
}
})().call(null,_,path);
}
});
var _new_id__3 = (function (_,path,id){if((function (){var and__8216__auto__ = _;if(and__8216__auto__)
{return _.foundation$app$render$IRenderer$_new_id$arity$3;
} else
{return and__8216__auto__;
}
})())
{return _.foundation$app$render$IRenderer$_new_id$arity$3(_,path,id);
} else
{var x__8836__auto__ = (((_ == null))?null:_);return (function (){var or__8228__auto__ = (foundation.app.render._new_id[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (foundation.app.render._new_id["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
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
foundation.app.render._delete_id = (function _delete_id(_,path){if((function (){var and__8216__auto__ = _;if(and__8216__auto__)
{return _.foundation$app$render$IRenderer$_delete_id$arity$2;
} else
{return and__8216__auto__;
}
})())
{return _.foundation$app$render$IRenderer$_delete_id$arity$2(_,path);
} else
{var x__8836__auto__ = (((_ == null))?null:_);return (function (){var or__8228__auto__ = (foundation.app.render._delete_id[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (foundation.app.render._delete_id["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderer.-delete-id",_);
}
}
})().call(null,_,path);
}
});
foundation.app.render._on_destroy = (function _on_destroy(_,path,f){if((function (){var and__8216__auto__ = _;if(and__8216__auto__)
{return _.foundation$app$render$IRenderer$_on_destroy$arity$3;
} else
{return and__8216__auto__;
}
})())
{return _.foundation$app$render$IRenderer$_on_destroy$arity$3(_,path,f);
} else
{var x__8836__auto__ = (((_ == null))?null:_);return (function (){var or__8228__auto__ = (foundation.app.render._on_destroy[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (foundation.app.render._on_destroy["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderer.-on-destroy",_);
}
}
})().call(null,_,path,f);
}
});
foundation.app.render._set_data = (function _set_data(_,path,data){if((function (){var and__8216__auto__ = _;if(and__8216__auto__)
{return _.foundation$app$render$IRenderer$_set_data$arity$3;
} else
{return and__8216__auto__;
}
})())
{return _.foundation$app$render$IRenderer$_set_data$arity$3(_,path,data);
} else
{var x__8836__auto__ = (((_ == null))?null:_);return (function (){var or__8228__auto__ = (foundation.app.render._set_data[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (foundation.app.render._set_data["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderer.-set-data",_);
}
}
})().call(null,_,path,data);
}
});
foundation.app.render._get_data = (function _get_data(_,path){if((function (){var and__8216__auto__ = _;if(and__8216__auto__)
{return _.foundation$app$render$IRenderer$_get_data$arity$2;
} else
{return and__8216__auto__;
}
})())
{return _.foundation$app$render$IRenderer$_get_data$arity$2(_,path);
} else
{var x__8836__auto__ = (((_ == null))?null:_);return (function (){var or__8228__auto__ = (foundation.app.render._get_data[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (foundation.app.render._get_data["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderer.-get-data",_);
}
}
})().call(null,_,path);
}
});
foundation.app.render._drop_data = (function _drop_data(_,path){if((function (){var and__8216__auto__ = _;if(and__8216__auto__)
{return _.foundation$app$render$IRenderer$_drop_data$arity$2;
} else
{return and__8216__auto__;
}
})())
{return _.foundation$app$render$IRenderer$_drop_data$arity$2(_,path);
} else
{var x__8836__auto__ = (((_ == null))?null:_);return (function (){var or__8228__auto__ = (foundation.app.render._drop_data[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (foundation.app.render._drop_data["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
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
* @param {*} render_fn
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
foundation.app.render.Renderer = (function (env,render_fn,__meta,__extmap){
this.env = env;
this.render_fn = render_fn;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
foundation.app.render.Renderer.prototype.foundation$app$data$component$Lifecycle$ = true;
foundation.app.render.Renderer.prototype.foundation$app$data$component$Lifecycle$start$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return null;
});
foundation.app.render.Renderer.prototype.foundation$app$data$component$Lifecycle$stop$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return null;
});
foundation.app.render.Renderer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8790__auto__){var self__ = this;
var this__8790__auto____$1 = this;var h__8644__auto__ = self__.__hash;if(!((h__8644__auto__ == null)))
{return h__8644__auto__;
} else
{var h__8644__auto____$1 = cljs.core.hash_imap.call(null,this__8790__auto____$1);self__.__hash = h__8644__auto____$1;
return h__8644__auto____$1;
}
});
foundation.app.render.Renderer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8795__auto__,k__8796__auto__){var self__ = this;
var this__8795__auto____$1 = this;return cljs.core._lookup.call(null,this__8795__auto____$1,k__8796__auto__,null);
});
foundation.app.render.Renderer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8797__auto__,k92742,else__8798__auto__){var self__ = this;
var this__8797__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k92742,new cljs.core.Keyword(null,"env","env",1014004831)))
{return self__.env;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k92742,new cljs.core.Keyword(null,"render-fn","render-fn",2853500881)))
{return self__.render_fn;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k92742,else__8798__auto__);
} else
{return null;
}
}
}
});
foundation.app.render.Renderer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8802__auto__,k__8803__auto__,G__92741){var self__ = this;
var this__8802__auto____$1 = this;var pred__92744 = cljs.core.keyword_identical_QMARK_;var expr__92745 = k__8803__auto__;if(cljs.core.truth_(pred__92744.call(null,new cljs.core.Keyword(null,"env","env",1014004831),expr__92745)))
{return (new foundation.app.render.Renderer(G__92741,self__.render_fn,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__92744.call(null,new cljs.core.Keyword(null,"render-fn","render-fn",2853500881),expr__92745)))
{return (new foundation.app.render.Renderer(self__.env,G__92741,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.render.Renderer(self__.env,self__.render_fn,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8803__auto__,G__92741),null));
}
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
foundation.app.render.Renderer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8809__auto__,writer__8810__auto__,opts__8811__auto__){var self__ = this;
var this__8809__auto____$1 = this;var pr_pair__8812__auto__ = (function (keyval__8813__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8810__auto__,cljs.core.pr_writer,""," ","",opts__8811__auto__,keyval__8813__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__8810__auto__,pr_pair__8812__auto__,"#foundation.app.render.Renderer{",", ","}",opts__8811__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"env","env",1014004831),self__.env],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-fn","render-fn",2853500881),self__.render_fn],null))], null),self__.__extmap));
});
foundation.app.render.Renderer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8800__auto__,entry__8801__auto__){var self__ = this;
var this__8800__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8801__auto__))
{return cljs.core._assoc.call(null,this__8800__auto____$1,cljs.core._nth.call(null,entry__8801__auto__,0),cljs.core._nth.call(null,entry__8801__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8800__auto____$1,entry__8801__auto__);
}
});
foundation.app.render.Renderer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8807__auto__){var self__ = this;
var this__8807__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"env","env",1014004831),self__.env],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-fn","render-fn",2853500881),self__.render_fn],null))], null),self__.__extmap));
});
foundation.app.render.Renderer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8799__auto__){var self__ = this;
var this__8799__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
foundation.app.render.Renderer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8791__auto__,other__8792__auto__){var self__ = this;
var this__8791__auto____$1 = this;if(cljs.core.truth_((function (){var and__8216__auto__ = other__8792__auto__;if(cljs.core.truth_(and__8216__auto__))
{return ((this__8791__auto____$1.constructor === other__8792__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__8791__auto____$1,other__8792__auto__));
} else
{return and__8216__auto__;
}
})()))
{return true;
} else
{return false;
}
});
foundation.app.render.Renderer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8794__auto__,G__92741){var self__ = this;
var this__8794__auto____$1 = this;return (new foundation.app.render.Renderer(self__.env,self__.render_fn,G__92741,self__.__extmap,self__.__hash));
});
foundation.app.render.Renderer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8793__auto__){var self__ = this;
var this__8793__auto____$1 = this;return self__.__meta;
});
foundation.app.render.Renderer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8804__auto__,k__8805__auto__){var self__ = this;
var this__8804__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render-fn","render-fn",2853500881),null,new cljs.core.Keyword(null,"env","env",1014004831),null], null), null),k__8805__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8804__auto____$1),self__.__meta),k__8805__auto__);
} else
{return (new foundation.app.render.Renderer(self__.env,self__.render_fn,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8805__auto__)),null));
}
});
foundation.app.render.Renderer.cljs$lang$type = true;
foundation.app.render.Renderer.cljs$lang$ctorPrSeq = (function (this__8829__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"foundation.app.render/Renderer");
});
foundation.app.render.Renderer.cljs$lang$ctorPrWriter = (function (this__8829__auto__,writer__8830__auto__){return cljs.core._write.call(null,writer__8830__auto__,"foundation.app.render/Renderer");
});
foundation.app.render.__GT_Renderer = (function __GT_Renderer(env,render_fn){return (new foundation.app.render.Renderer(env,render_fn));
});
foundation.app.render.map__GT_Renderer = (function map__GT_Renderer(G__92743){return (new foundation.app.render.Renderer(new cljs.core.Keyword(null,"env","env",1014004831).cljs$core$IFn$_invoke$arity$1(G__92743),new cljs.core.Keyword(null,"render-fn","render-fn",2853500881).cljs$core$IFn$_invoke$arity$1(G__92743),null,cljs.core.dissoc.call(null,G__92743,new cljs.core.Keyword(null,"env","env",1014004831),new cljs.core.Keyword(null,"render-fn","render-fn",2853500881))));
});
foundation.app.render.push_render_queue = (function push_render_queue(renderer,input_queue){var render_queue = cljs.core.async.chan.call(null);var c__12185__auto___92825 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12186__auto__ = (function (){var switch__12115__auto__ = (function (state_92808){var state_val_92809 = (state_92808[1]);if((state_val_92809 === 7))
{var inst_92803 = (state_92808[2]);var state_92808__$1 = (function (){var statearr_92810 = state_92808;(statearr_92810[7] = inst_92803);
return statearr_92810;
})();var statearr_92811_92826 = state_92808__$1;(statearr_92811_92826[2] = null);
(statearr_92811_92826[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_92809 === 6))
{var inst_92789 = (state_92808[8]);var inst_92791 = (state_92808[9]);var inst_92799 = foundation.app.render._parent_id.call(null,renderer,inst_92791);var inst_92800 = foundation.app.render._new_id.call(null,renderer,inst_92791);var inst_92801 = foundation.app.render.render.call(null,renderer,inst_92789,inst_92799,inst_92800);var state_92808__$1 = state_92808;var statearr_92812_92827 = state_92808__$1;(statearr_92812_92827[2] = inst_92801);
(statearr_92812_92827[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_92809 === 5))
{var inst_92794 = (state_92808[10]);var inst_92789 = (state_92808[8]);var inst_92791 = (state_92808[9]);var inst_92796 = foundation.app.render._parent_id.call(null,renderer,inst_92791);var inst_92797 = foundation.app.render.render.call(null,renderer,inst_92789,inst_92796,inst_92794);var state_92808__$1 = state_92808;var statearr_92813_92828 = state_92808__$1;(statearr_92813_92828[2] = inst_92797);
(statearr_92813_92828[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_92809 === 4))
{var inst_92794 = (state_92808[10]);var inst_92789 = (state_92808[8]);var inst_92791 = (state_92808[9]);var inst_92789__$1 = (state_92808[2]);var inst_92790 = cljs.core.nth.call(null,inst_92789__$1,0,null);var inst_92791__$1 = cljs.core.nth.call(null,inst_92789__$1,1,null);var inst_92792 = cljs.core.nth.call(null,inst_92789__$1,2,null);var inst_92793 = cljs.core.nth.call(null,inst_92789__$1,3,null);var inst_92794__$1 = foundation.app.render._get_id.call(null,renderer,inst_92791__$1);var state_92808__$1 = (function (){var statearr_92814 = state_92808;(statearr_92814[10] = inst_92794__$1);
(statearr_92814[8] = inst_92789__$1);
(statearr_92814[11] = inst_92790);
(statearr_92814[9] = inst_92791__$1);
(statearr_92814[12] = inst_92792);
(statearr_92814[13] = inst_92793);
return statearr_92814;
})();if(cljs.core.truth_(inst_92794__$1))
{var statearr_92815_92829 = state_92808__$1;(statearr_92815_92829[1] = 5);
} else
{var statearr_92816_92830 = state_92808__$1;(statearr_92816_92830[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_92809 === 3))
{var inst_92806 = (state_92808[2]);var state_92808__$1 = state_92808;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_92808__$1,inst_92806);
} else
{if((state_val_92809 === 2))
{var state_92808__$1 = state_92808;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_92808__$1,4,render_queue);
} else
{if((state_val_92809 === 1))
{var state_92808__$1 = state_92808;var statearr_92817_92831 = state_92808__$1;(statearr_92817_92831[2] = null);
(statearr_92817_92831[1] = 2);
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
});return ((function (switch__12115__auto__){
return (function() {
var state_machine__12116__auto__ = null;
var state_machine__12116__auto____0 = (function (){var statearr_92821 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_92821[0] = state_machine__12116__auto__);
(statearr_92821[1] = 1);
return statearr_92821;
});
var state_machine__12116__auto____1 = (function (state_92808){while(true){
var ret_value__12117__auto__ = (function (){try{while(true){
var result__12118__auto__ = switch__12115__auto__.call(null,state_92808);if(cljs.core.keyword_identical_QMARK_.call(null,result__12118__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12118__auto__;
}
break;
}
}catch (e92822){if((e92822 instanceof Object))
{var ex__12119__auto__ = e92822;var statearr_92823_92832 = state_92808;(statearr_92823_92832[5] = ex__12119__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92808);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e92822;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12117__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__92833 = state_92808;
state_92808 = G__92833;
continue;
}
} else
{return ret_value__12117__auto__;
}
break;
}
});
state_machine__12116__auto__ = function(state_92808){
switch(arguments.length){
case 0:
return state_machine__12116__auto____0.call(this);
case 1:
return state_machine__12116__auto____1.call(this,state_92808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12116__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12116__auto____0;
state_machine__12116__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12116__auto____1;
return state_machine__12116__auto__;
})()
;})(switch__12115__auto__))
})();var state__12187__auto__ = (function (){var statearr_92824 = f__12186__auto__.call(null);(statearr_92824[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12185__auto___92825);
return statearr_92824;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12187__auto__);
}));
return render_queue;
});
foundation.app.render.renderer = (function() {
var renderer = null;
var renderer__1 = (function (root_id){return renderer.call(null,root_id,foundation.app.render.log_fn);
});
var renderer__2 = (function (root_id,render_fn){return foundation.app.render.__GT_Renderer.call(null,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),root_id], null)),render_fn);
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
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.Keyword(null,"default","default",2558708147),(function (renderer,p__92834,pid,id){var vec__92835 = p__92834;var op = cljs.core.nth.call(null,vec__92835,0,null);var path = cljs.core.nth.call(null,vec__92835,1,null);var _ = cljs.core.nth.call(null,vec__92835,2,null);var ___$1 = cljs.core.nth.call(null,vec__92835,3,null);return cljs.core.println.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,path], null));
}));

//# sourceMappingURL=render.js.map