// Compiled by ClojureScript 0.0-2120
goog.provide('foundation.app.render');
goog.require('cljs.core');
goog.require('foundation.app.util');
goog.require('foundation.app.util');
foundation.app.render.log_fn = (function log_fn(deltas){return foundation.app.util.log_group.call(null,"Rendering Deltas",deltas);
});
foundation.app.render.IRenderer = (function (){var obj32420 = {};return obj32420;
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
foundation.app.render._get_parent_id = (function _get_parent_id(_,path){if((function (){var and__8186__auto__ = _;if(and__8186__auto__)
{return _.foundation$app$render$IRenderer$_get_parent_id$arity$2;
} else
{return and__8186__auto__;
}
})())
{return _.foundation$app$render$IRenderer$_get_parent_id$arity$2(_,path);
} else
{var x__8806__auto__ = (((_ == null))?null:_);return (function (){var or__8198__auto__ = (foundation.app.render._get_parent_id[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (foundation.app.render._get_parent_id["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderer.-get-parent-id",_);
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
foundation.app.render._on_destroy = (function _on_destroy(_,path){if((function (){var and__8186__auto__ = _;if(and__8186__auto__)
{return _.foundation$app$render$IRenderer$_on_destroy$arity$2;
} else
{return and__8186__auto__;
}
})())
{return _.foundation$app$render$IRenderer$_on_destroy$arity$2(_,path);
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
})().call(null,_,path);
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
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
foundation.app.render.Renderer = (function (__meta,__extmap){
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>0){
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
foundation.app.render.Renderer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8767__auto__,k32422,else__8768__auto__){var self__ = this;
var this__8767__auto____$1 = this;if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k32422,else__8768__auto__);
} else
{return null;
}
});
foundation.app.render.Renderer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8772__auto__,k__8773__auto__,G__32421){var self__ = this;
var this__8772__auto____$1 = this;var pred__32424 = cljs.core.keyword_identical_QMARK_;var expr__32425 = k__8773__auto__;return (new foundation.app.render.Renderer(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8773__auto__,G__32421),null));
});
foundation.app.render.Renderer.prototype.foundation$app$render$IRenderer$ = true;
foundation.app.render.Renderer.prototype.foundation$app$render$IRenderer$_get_id$arity$2 = (function (_,path){var self__ = this;
var ___$1 = this;return null;
});
foundation.app.render.Renderer.prototype.foundation$app$render$IRenderer$_get_parent_id$arity$2 = (function (_,path){var self__ = this;
var ___$1 = this;return null;
});
foundation.app.render.Renderer.prototype.foundation$app$render$IRenderer$_new_id$arity$2 = (function (_,path){var self__ = this;
var ___$1 = this;return null;
});
foundation.app.render.Renderer.prototype.foundation$app$render$IRenderer$_new_id$arity$3 = (function (_,path,id){var self__ = this;
var ___$1 = this;return null;
});
foundation.app.render.Renderer.prototype.foundation$app$render$IRenderer$_delete_id$arity$2 = (function (_,path){var self__ = this;
var ___$1 = this;return null;
});
foundation.app.render.Renderer.prototype.foundation$app$render$IRenderer$_on_destroy$arity$2 = (function (_,path){var self__ = this;
var ___$1 = this;return null;
});
foundation.app.render.Renderer.prototype.foundation$app$render$IRenderer$_set_data$arity$3 = (function (_,path,data){var self__ = this;
var ___$1 = this;return null;
});
foundation.app.render.Renderer.prototype.foundation$app$render$IRenderer$_get_data$arity$2 = (function (_,path){var self__ = this;
var ___$1 = this;return null;
});
foundation.app.render.Renderer.prototype.foundation$app$render$IRenderer$_drop_data$arity$2 = (function (_,path){var self__ = this;
var ___$1 = this;return null;
});
foundation.app.render.Renderer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8779__auto__,writer__8780__auto__,opts__8781__auto__){var self__ = this;
var this__8779__auto____$1 = this;var pr_pair__8782__auto__ = (function (keyval__8783__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8780__auto__,cljs.core.pr_writer,""," ","",opts__8781__auto__,keyval__8783__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__8780__auto__,pr_pair__8782__auto__,"#foundation.app.render.Renderer{",", ","}",opts__8781__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
foundation.app.render.Renderer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8770__auto__,entry__8771__auto__){var self__ = this;
var this__8770__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8771__auto__))
{return cljs.core._assoc.call(null,this__8770__auto____$1,cljs.core._nth.call(null,entry__8771__auto__,0),cljs.core._nth.call(null,entry__8771__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8770__auto____$1,entry__8771__auto__);
}
});
foundation.app.render.Renderer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8777__auto__){var self__ = this;
var this__8777__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
foundation.app.render.Renderer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8769__auto__){var self__ = this;
var this__8769__auto____$1 = this;return (0 + cljs.core.count.call(null,self__.__extmap));
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
foundation.app.render.Renderer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8764__auto__,G__32421){var self__ = this;
var this__8764__auto____$1 = this;return (new foundation.app.render.Renderer(G__32421,self__.__extmap,self__.__hash));
});
foundation.app.render.Renderer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8763__auto__){var self__ = this;
var this__8763__auto____$1 = this;return self__.__meta;
});
foundation.app.render.Renderer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8774__auto__,k__8775__auto__){var self__ = this;
var this__8774__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__8775__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8774__auto____$1),self__.__meta),k__8775__auto__);
} else
{return (new foundation.app.render.Renderer(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8775__auto__)),null));
}
});
foundation.app.render.Renderer.cljs$lang$type = true;
foundation.app.render.Renderer.cljs$lang$ctorPrSeq = (function (this__8799__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"foundation.app.render/Renderer");
});
foundation.app.render.Renderer.cljs$lang$ctorPrWriter = (function (this__8799__auto__,writer__8800__auto__){return cljs.core._write.call(null,writer__8800__auto__,"foundation.app.render/Renderer");
});
foundation.app.render.__GT_Renderer = (function __GT_Renderer(){return (new foundation.app.render.Renderer());
});
foundation.app.render.map__GT_Renderer = (function map__GT_Renderer(G__32423){return (new foundation.app.render.Renderer(null,cljs.core.dissoc.call(null,G__32423)));
});
foundation.app.render.renderer = (function() {
var renderer = null;
var renderer__1 = (function (root_id){return renderer.call(null,root_id,cljs.core.identity);
});
var renderer__2 = (function (root_id,render_fn){return null;
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

//# sourceMappingURL=render.js.map