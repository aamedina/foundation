// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.app.data.tracking_map');
goog.require('cljs.core');
goog.require('foundation.app.data.change');
goog.require('foundation.app.data.change');

/**
* @constructor
*/
foundation.app.data.tracking_map.TrackingMap = (function (basis,map,change_map){
this.basis = basis;
this.map = map;
this.change_map = change_map;
this.cljs$lang$protocol_mask$partition1$ = 4;
this.cljs$lang$protocol_mask$partition0$ = 2163640079;
})
foundation.app.data.tracking_map.TrackingMap.cljs$lang$type = true;
foundation.app.data.tracking_map.TrackingMap.cljs$lang$ctorStr = "foundation.app.data.tracking-map/TrackingMap";
foundation.app.data.tracking_map.TrackingMap.cljs$lang$ctorPrWriter = (function (this__14369__auto__,writer__14370__auto__,opt__14371__auto__){return cljs.core._write.call(null,writer__14370__auto__,"foundation.app.data.tracking-map/TrackingMap");
});
foundation.app.data.tracking_map.TrackingMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core._as_transient.call(null,self__.map);
});
foundation.app.data.tracking_map.TrackingMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core._hash.call(null,self__.map);
});
foundation.app.data.tracking_map.TrackingMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.call(null,coll__$1,k,null);
});
foundation.app.data.tracking_map.TrackingMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){var self__ = this;
var ___$1 = this;var temp__4090__auto__ = cljs.core._lookup.call(null,self__.map,k);if(cljs.core.truth_(temp__4090__auto__))
{var v = temp__4090__auto__;if((v instanceof foundation.app.data.tracking_map.TrackingMap))
{return (new foundation.app.data.tracking_map.TrackingMap(self__.basis,v.map,cljs.core.update_in.call(null,self__.change_map,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context","context",1965435169)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),k)));
} else
{if(cljs.core.map_QMARK_.call(null,v))
{return (new foundation.app.data.tracking_map.TrackingMap(self__.basis,v,cljs.core.update_in.call(null,self__.change_map,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context","context",1965435169)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),k)));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return v;
} else
{return null;
}
}
}
} else
{return not_found;
}
});
foundation.app.data.tracking_map.TrackingMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){var self__ = this;
var ___$1 = this;return (new foundation.app.data.tracking_map.TrackingMap(self__.basis,cljs.core._assoc.call(null,self__.map,k,foundation.app.data.tracking_map.plain_map.call(null,v)),foundation.app.data.tracking_map.record_change.call(null,new cljs.core.Keyword(null,"assoc","assoc",1107025799),self__.map,k,v,self__.change_map)));
});
foundation.app.data.tracking_map.TrackingMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;return cljs.core._contains_key_QMARK_.call(null,self__.map,k);
});
foundation.app.data.tracking_map.TrackingMap.prototype.call = (function() {
var G__294509 = null;
var G__294509__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var _ = self____$1;return cljs.core._lookup.call(null,self__.map,k);
});
var G__294509__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var _ = self____$1;return cljs.core._lookup.call(null,self__.map,k,not_found);
});
G__294509 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__294509__2.call(this,self__,k);
case 3:
return G__294509__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__294509;
})()
;
foundation.app.data.tracking_map.TrackingMap.prototype.apply = (function (self__,args294508){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args294508)));
});
foundation.app.data.tracking_map.TrackingMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var _ = this;return cljs.core._lookup.call(null,self__.map,k);
});
foundation.app.data.tracking_map.TrackingMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var _ = this;return cljs.core._lookup.call(null,self__.map,k,not_found);
});
foundation.app.data.tracking_map.TrackingMap.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){var self__ = this;
var o__$1 = this;return self__.map;
});
foundation.app.data.tracking_map.TrackingMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var self__ = this;
var coll__$1 = this;return cljs.core._pr_writer.call(null,self__.map,writer,opts);
});
foundation.app.data.tracking_map.TrackingMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){var self__ = this;
var ___$1 = this;return cljs.core._kv_reduce.call(null,self__.map,f,init);
});
foundation.app.data.tracking_map.TrackingMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){var self__ = this;
var coll__$1 = this;if(cljs.core.vector_QMARK_.call(null,entry))
{return cljs.core._assoc.call(null,coll__$1,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll__$1,entry);
}
});
foundation.app.data.tracking_map.TrackingMap.prototype.toString = (function (){var self__ = this;
var _ = this;return cljs.core.pr_str.call(null,self__.map);
});
foundation.app.data.tracking_map.TrackingMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core._seq.call(null,self__.map);
});
foundation.app.data.tracking_map.TrackingMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core._count.call(null,self__.map);
});
foundation.app.data.tracking_map.TrackingMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;return cljs.core._equiv.call(null,self__.map,other);
});
foundation.app.data.tracking_map.TrackingMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,meta){var self__ = this;
var ___$1 = this;return (new foundation.app.data.tracking_map.TrackingMap(self__.basis,cljs.core._with_meta.call(null,self__.map,meta),self__.change_map));
});
foundation.app.data.tracking_map.TrackingMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core._meta.call(null,self__.map);
});
foundation.app.data.tracking_map.TrackingMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core._empty.call(null,self__.map);
});
foundation.app.data.tracking_map.TrackingMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;return (new foundation.app.data.tracking_map.TrackingMap(self__.basis,cljs.core._dissoc.call(null,self__.map,k),foundation.app.data.tracking_map.record_change.call(null,new cljs.core.Keyword(null,"dissoc","dissoc",3977329067),self__.map,k,null,self__.change_map)));
});
foundation.app.data.tracking_map.__GT_TrackingMap = (function __GT_TrackingMap(basis,map,change_map){return (new foundation.app.data.tracking_map.TrackingMap(basis,map,change_map));
});
foundation.app.data.tracking_map.plain_map = (function plain_map(m){if((m instanceof foundation.app.data.tracking_map.TrackingMap))
{return m.map;
} else
{return m;
}
});
foundation.app.data.tracking_map.merge_when_tracking_map = (function merge_when_tracking_map(change_map,tracking_map){return cljs.core.merge_with.call(null,cljs.core.comp.call(null,cljs.core.set,cljs.core.concat),change_map,cljs.core.dissoc.call(null,(((tracking_map instanceof foundation.app.data.tracking_map.TrackingMap))?tracking_map.change_map:null),new cljs.core.Keyword(null,"context","context",1965435169)));
});
foundation.app.data.tracking_map.record_change = (function record_change(action,map,key,val,change_map){var map__294511 = change_map;var map__294511__$1 = ((cljs.core.seq_QMARK_.call(null,map__294511))?cljs.core.apply.call(null,cljs.core.hash_map,map__294511):map__294511);var cs = map__294511__$1;var updated = cljs.core.get.call(null,map__294511__$1,new cljs.core.Keyword(null,"updated","updated",779473965));var context = cljs.core.get.call(null,map__294511__$1,new cljs.core.Keyword(null,"context","context",1965435169));var change = ((cljs.core.seq.call(null,context))?cljs.core.conj.call(null,context,key):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null));var cs__$1 = ((cljs.core._EQ_.call(null,action,new cljs.core.Keyword(null,"dissoc","dissoc",3977329067)))?cljs.core.update_in.call(null,cs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"removed","removed",2105740242)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),change):(cljs.core.truth_((function (){var and__13813__auto__ = cljs.core.get.call(null,map,key);if(cljs.core.truth_(and__13813__auto__))
{return cljs.core.not_EQ_.call(null,cljs.core.get.call(null,map,key),foundation.app.data.tracking_map.plain_map.call(null,val));
} else
{return and__13813__auto__;
}
})())?cljs.core.update_in.call(null,cs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"updated","updated",779473965)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),change):((cljs.core.not.call(null,cljs.core.get.call(null,map,key)))?cljs.core.update_in.call(null,cs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"added","added",1106564210)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),change):((new cljs.core.Keyword(null,"else","else",1017020587))?cs:null))));var cs__$2 = (((cljs.core._EQ_.call(null,action,new cljs.core.Keyword(null,"assoc","assoc",1107025799))) && (cljs.core.map_QMARK_.call(null,val)) && (!((val instanceof foundation.app.data.tracking_map.TrackingMap))))?cljs.core.update_in.call(null,cs__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inspect","inspect",2971358598)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),change):(((cljs.core._EQ_.call(null,action,new cljs.core.Keyword(null,"assoc","assoc",1107025799))) && ((val == null)))?cljs.core.update_in.call(null,cs__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inspect","inspect",2971358598)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),change):((new cljs.core.Keyword(null,"else","else",1017020587))?cs__$1:null)));return foundation.app.data.tracking_map.merge_when_tracking_map.call(null,cs__$2,val);
});
foundation.app.data.tracking_map.changes = (function changes(v){if((v instanceof foundation.app.data.tracking_map.TrackingMap))
{return foundation.app.data.change.compact.call(null,v.basis,v.map,v.change_map);
} else
{return null;
}
});
foundation.app.data.tracking_map.tracking_map = (function tracking_map(map){return (new foundation.app.data.tracking_map.TrackingMap(map,map,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=tracking_map.js.map