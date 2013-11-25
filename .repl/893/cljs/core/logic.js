// Compiled by ClojureScript 0.0-2080
goog.provide('cljs.core.logic');
goog.require('cljs.core');
goog.require('cljs.core.logic.protocols');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('cljs.core.logic.protocols');
goog.require('cljs.core.logic.protocols');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('clojure.set');
cljs.core.logic._STAR_logic_dbs_STAR_ = cljs.core.PersistentVector.EMPTY;
cljs.core.logic.fk = (new Error());
cljs.core.logic.assoc_meta = (function assoc_meta(x,k,v){return cljs.core.with_meta.call(null,x,cljs.core.assoc.call(null,cljs.core.meta.call(null,x),k,v));
});
cljs.core.logic.dissoc_meta = (function dissoc_meta(x,k){return cljs.core.with_meta.call(null,x,cljs.core.dissoc.call(null,cljs.core.meta.call(null,x),k));
});
cljs.core.logic.assoc_dom = (function assoc_dom(x,k,v){return cljs.core.assoc.call(null,x,new cljs.core.Keyword(null,"doms","doms",1016993507),cljs.core.assoc.call(null,x.doms,k,v));
});
cljs.core.logic.dissoc_dom = (function dissoc_dom(x,k){return cljs.core.assoc.call(null,x,new cljs.core.Keyword(null,"doms","doms",1016993507),cljs.core.dissoc.call(null,x.doms,k));
});
cljs.core.logic.record_QMARK_ = (function record_QMARK_(x){var G__119694 = x;if(G__119694)
{var bit__6915__auto__ = (G__119694.cljs$lang$protocol_mask$partition0$ & 67108864);if((bit__6915__auto__) || (G__119694.cljs$core$IRecord$))
{return true;
} else
{if((!G__119694.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,G__119694);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,G__119694);
}
});

/**
* @constructor
*/
cljs.core.logic.Pair = (function (lhs,rhs){
this.lhs = lhs;
this.rhs = rhs;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2149583122;
})
cljs.core.logic.Pair.cljs$lang$type = true;
cljs.core.logic.Pair.cljs$lang$ctorStr = "cljs.core.logic/Pair";
cljs.core.logic.Pair.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.logic/Pair");
});
cljs.core.logic.Pair.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,opts){var self__ = this;
var x__$1 = this;return cljs.core._write.call(null,writer,[cljs.core.str("("),cljs.core.str(x__$1.lhs),cljs.core.str(" . "),cljs.core.str(x__$1.rhs),cljs.core.str(")")].join(''));
});
cljs.core.logic.Pair.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,o){var self__ = this;
var ___$1 = this;if((o instanceof cljs.core.logic.Pair))
{return (cljs.core._EQ_.call(null,self__.lhs,o.lhs)) && (cljs.core._EQ_.call(null,self__.rhs,o.rhs));
} else
{return false;
}
});
cljs.core.logic.Pair.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.lhs;
});
cljs.core.logic.Pair.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.rhs;
});
cljs.core.logic.Pair.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,i){var self__ = this;
var this$__$1 = this;var G__119695 = i;if(cljs.core._EQ_.call(null,1,G__119695))
{return self__.rhs;
} else
{if(cljs.core._EQ_.call(null,0,G__119695))
{return self__.lhs;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.ex_info.call(null,"Index out of bounds",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"index","index",1114250308),i,new cljs.core.Keyword(null,"coll","coll",1016963678),this$__$1], null));
} else
{return null;
}
}
}
});
cljs.core.logic.Pair.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,i,not_found){var self__ = this;
var ___$1 = this;var G__119696 = i;if(cljs.core._EQ_.call(null,1,G__119696))
{return self__.rhs;
} else
{if(cljs.core._EQ_.call(null,0,G__119696))
{return self__.lhs;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.logic.Pair.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return 2;
});
cljs.core.logic.Pair.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;return cljs.core._lookup.call(null,this$__$1,k,null);
});
cljs.core.logic.Pair.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){var self__ = this;
var this$__$1 = this;var G__119697 = k;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"rhs","rhs",1014017135),G__119697))
{return self__.rhs;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"lhs","lhs",1014011369),G__119697))
{return self__.lhs;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.logic.Pair.prototype.toString = (function (){var self__ = this;
var _ = this;return [cljs.core.str("("),cljs.core.str(self__.lhs),cljs.core.str(" . "),cljs.core.str(self__.rhs),cljs.core.str(")")].join('');
});
cljs.core.logic.__GT_Pair = (function __GT_Pair(lhs,rhs){return (new cljs.core.logic.Pair(lhs,rhs));
});
cljs.core.logic.pair = (function pair(lhs,rhs){return (new cljs.core.logic.Pair(lhs,rhs));
});
cljs.core.logic.var_rands = (function var_rands(a,c){return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,cljs.core.logic.lvar_QMARK_,cljs.core.map.call(null,(function (p1__119698_SHARP_){return cljs.core.logic.protocols.root_var.call(null,a,p1__119698_SHARP_);
}),cljs.core.logic.protocols._rands.call(null,c))));
});
cljs.core.logic.unbound_rands = (function unbound_rands(a,c){return cljs.core.filter.call(null,(function (p1__119699_SHARP_){return cljs.core.logic.lvar_QMARK_.call(null,cljs.core.logic.protocols.root_val.call(null,a,p1__119699_SHARP_));
}),cljs.core.logic.var_rands.call(null,a,c));
});

/**
* @constructor
*/
cljs.core.logic.ConstraintStore = (function (km,cm,cid,running){
this.km = km;
this.cm = cm;
this.cid = cid;
this.running = running;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.logic.ConstraintStore.cljs$lang$type = true;
cljs.core.logic.ConstraintStore.cljs$lang$ctorStr = "cljs.core.logic/ConstraintStore";
cljs.core.logic.ConstraintStore.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.logic/ConstraintStore");
});
cljs.core.logic.ConstraintStore.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.count.call(null,self__.cm);
});
cljs.core.logic.ConstraintStore.prototype.cljs$core$logic$protocols$IConstraintStore$ = true;
cljs.core.logic.ConstraintStore.prototype.cljs$core$logic$protocols$IConstraintStore$addc$arity$3 = (function (this$,a,c){var self__ = this;
var this$__$1 = this;var vars = cljs.core.logic.var_rands.call(null,a,c);var c__$1 = cljs.core.logic.protocols.with_id.call(null,c,self__.cid);var cs = cljs.core.reduce.call(null,((function (vars,c__$1){
return (function (cs,v){return cljs.core.logic.add_var.call(null,cs,v,c__$1);
});})(vars,c__$1))
,this$__$1,vars);return (new cljs.core.logic.ConstraintStore(cs.km,cs.cm,(self__.cid + 1),self__.running));
});
cljs.core.logic.ConstraintStore.prototype.cljs$core$logic$protocols$IConstraintStore$updatec$arity$3 = (function (this$,a,c){var self__ = this;
var this$__$1 = this;var oc = self__.cm.call(null,cljs.core.logic.protocols.id.call(null,c));var nkm = (((function (){var G__119701 = c;if(G__119701)
{var bit__6915__auto__ = null;if(cljs.core.truth_((function (){var or__6289__auto__ = bit__6915__auto__;if(cljs.core.truth_(or__6289__auto__))
{return or__6289__auto__;
} else
{return G__119701.cljs$core$logic$protocols$IEntailedVar$;
}
})()))
{return true;
} else
{if((!G__119701.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.logic.protocols.IEntailedVar,G__119701);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.logic.protocols.IEntailedVar,G__119701);
}
})())?cljs.core.reduce.call(null,((function (oc){
return (function (km__$1,x){if(cljs.core.truth_(cljs.core.logic.protocols._entailed_var_QMARK_.call(null,c,x)))
{return cljs.core.dissoc.call(null,km__$1,x);
} else
{return km__$1;
}
});})(oc))
,self__.km,cljs.core.logic.var_rands.call(null,a,oc)):self__.km);return (new cljs.core.logic.ConstraintStore(nkm,cljs.core.assoc.call(null,self__.cm,cljs.core.logic.protocols.id.call(null,c),c),self__.cid,self__.running));
});
cljs.core.logic.ConstraintStore.prototype.cljs$core$logic$protocols$IConstraintStore$remc$arity$3 = (function (this$,a,c){var self__ = this;
var this$__$1 = this;var vs = cljs.core.logic.var_rands.call(null,a,c);var ocid = cljs.core.logic.protocols.id.call(null,c);var nkm = cljs.core.reduce.call(null,((function (vs,ocid){
return (function (km__$1,v){var vcs = cljs.core.disj.call(null,cljs.core.get.call(null,km__$1,v),ocid);if(cljs.core.empty_QMARK_.call(null,vcs))
{return cljs.core.dissoc.call(null,km__$1,v);
} else
{return cljs.core.assoc.call(null,km__$1,v,vcs);
}
});})(vs,ocid))
,self__.km,vs);var ncm = cljs.core.dissoc.call(null,self__.cm,ocid);return (new cljs.core.logic.ConstraintStore(nkm,ncm,self__.cid,self__.running));
});
cljs.core.logic.ConstraintStore.prototype.cljs$core$logic$protocols$IConstraintStore$runc$arity$3 = (function (this$,c,state){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(state))
{return (new cljs.core.logic.ConstraintStore(self__.km,self__.cm,self__.cid,cljs.core.conj.call(null,self__.running,cljs.core.logic.protocols.id.call(null,c))));
} else
{return (new cljs.core.logic.ConstraintStore(self__.km,self__.cm,self__.cid,cljs.core.disj.call(null,self__.running,cljs.core.logic.protocols.id.call(null,c))));
}
});
cljs.core.logic.ConstraintStore.prototype.cljs$core$logic$protocols$IConstraintStore$constraints_for$arity$4 = (function (this$,a,x,ws){var self__ = this;
var this$__$1 = this;var temp__4098__auto__ = cljs.core.get.call(null,self__.km,cljs.core.logic.protocols.root_var.call(null,a,x));if(cljs.core.truth_(temp__4098__auto__))
{var ids = temp__4098__auto__;return cljs.core.filter.call(null,(function (p1__119700_SHARP_){return cljs.core.logic.protocols._watched_stores.call(null,p1__119700_SHARP_).call(null,ws);
}),cljs.core.map.call(null,self__.cm,cljs.core.remove.call(null,self__.running,ids)));
} else
{return null;
}
});
cljs.core.logic.ConstraintStore.prototype.cljs$core$logic$protocols$IConstraintStore$migrate$arity$3 = (function (this$,x,root){var self__ = this;
var this$__$1 = this;var xcs = self__.km.call(null,x);var rootcs = self__.km.call(null,root,cljs.core.PersistentHashSet.EMPTY);var nkm = cljs.core.assoc.call(null,cljs.core.dissoc.call(null,self__.km,x),root,cljs.core.into.call(null,rootcs,xcs));return (new cljs.core.logic.ConstraintStore(nkm,self__.cm,self__.cid,self__.running));
});
cljs.core.logic.ConstraintStore.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;return cljs.core._lookup.call(null,this$__$1,k,null);
});
cljs.core.logic.ConstraintStore.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){var self__ = this;
var this$__$1 = this;var G__119702 = k;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"running","running",2564688177),G__119702))
{return self__.running;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cid","cid",1014002736),G__119702))
{return self__.cid;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cm","cm",1013907420),G__119702))
{return self__.cm;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"km","km",1013907668),G__119702))
{return self__.km;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return not_found;
} else
{return null;
}
}
}
}
}
});
cljs.core.logic.__GT_ConstraintStore = (function __GT_ConstraintStore(km,cm,cid,running){return (new cljs.core.logic.ConstraintStore(km,cm,cid,running));
});
cljs.core.logic.add_var = (function add_var(cs,x,c){if(cljs.core.truth_(cljs.core.logic.lvar_QMARK_.call(null,x)))
{} else
{throw cljs.core.ex_info.call(null,[cljs.core.str("constraint store assoc expected logic var key: "),cljs.core.str(x)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
var cm = cs.cm;var km = cs.km;var cid = cs.cid;var nkm = cljs.core.update_in.call(null,km,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),cljs.core.fnil.call(null,((function (cm,km,cid){
return (function (s){return cljs.core.conj.call(null,s,cid);
});})(cm,km,cid))
,cljs.core.PersistentHashSet.EMPTY));var ncm = cljs.core.assoc.call(null,cm,cid,c);return (new cljs.core.logic.ConstraintStore(nkm,ncm,cid,cs.running));
});
cljs.core.logic.make_cs = (function make_cs(){return (new cljs.core.logic.ConstraintStore(cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,0,cljs.core.PersistentHashSet.EMPTY));
});

/**
* @constructor
* @param {*} v
* @param {*} doms
* @param {*} eset
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
cljs.core.logic.SubstValue = (function (v,doms,eset,__meta,__extmap){
this.v = v;
this.doms = doms;
this.eset = eset;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>3){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
cljs.core.logic.SubstValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6846__auto__){var self__ = this;
var this__6846__auto____$1 = this;var h__6700__auto__ = self__.__hash;if(!((h__6700__auto__ == null)))
{return h__6700__auto__;
} else
{var h__6700__auto____$1 = cljs.core.hash_imap.call(null,this__6846__auto____$1);self__.__hash = h__6700__auto____$1;
return h__6700__auto____$1;
}
});
cljs.core.logic.SubstValue.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6851__auto__,k__6852__auto__){var self__ = this;
var this__6851__auto____$1 = this;return cljs.core._lookup.call(null,this__6851__auto____$1,k__6852__auto__,null);
});
cljs.core.logic.SubstValue.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6853__auto__,k119704,else__6854__auto__){var self__ = this;
var this__6853__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k119704,new cljs.core.Keyword(null,"v","v",1013904360)))
{return self__.v;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k119704,new cljs.core.Keyword(null,"doms","doms",1016993507)))
{return self__.doms;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k119704,new cljs.core.Keyword(null,"eset","eset",1017026895)))
{return self__.eset;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k119704,else__6854__auto__);
} else
{return null;
}
}
}
}
});
cljs.core.logic.SubstValue.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6858__auto__,k__6859__auto__,G__119703){var self__ = this;
var this__6858__auto____$1 = this;var pred__119706 = cljs.core.keyword_identical_QMARK_;var expr__119707 = k__6859__auto__;if(cljs.core.truth_(pred__119706.call(null,new cljs.core.Keyword(null,"v","v",1013904360),expr__119707)))
{return (new cljs.core.logic.SubstValue(G__119703,self__.doms,self__.eset,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__119706.call(null,new cljs.core.Keyword(null,"doms","doms",1016993507),expr__119707)))
{return (new cljs.core.logic.SubstValue(self__.v,G__119703,self__.eset,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__119706.call(null,new cljs.core.Keyword(null,"eset","eset",1017026895),expr__119707)))
{return (new cljs.core.logic.SubstValue(self__.v,self__.doms,G__119703,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.logic.SubstValue(self__.v,self__.doms,self__.eset,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6859__auto__,G__119703),null));
}
}
}
});
cljs.core.logic.SubstValue.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6865__auto__,writer__6866__auto__,opts__6867__auto__){var self__ = this;
var this__6865__auto____$1 = this;var pr_pair__6868__auto__ = (function (keyval__6869__auto__){return cljs.core.pr_sequential_writer.call(null,writer__6866__auto__,cljs.core.pr_writer,""," ","",opts__6867__auto__,keyval__6869__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__6866__auto__,pr_pair__6868__auto__,"#cljs.core.logic.SubstValue{",", ","}",opts__6867__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",1013904360),self__.v],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"doms","doms",1016993507),self__.doms],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"eset","eset",1017026895),self__.eset],null))], null),self__.__extmap));
});
cljs.core.logic.SubstValue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6856__auto__,entry__6857__auto__){var self__ = this;
var this__6856__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__6857__auto__))
{return cljs.core._assoc.call(null,this__6856__auto____$1,cljs.core._nth.call(null,entry__6857__auto__,0),cljs.core._nth.call(null,entry__6857__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__6856__auto____$1,entry__6857__auto__);
}
});
cljs.core.logic.SubstValue.prototype.toString = (function (){var self__ = this;
var _ = this;return [cljs.core.str(self__.v)].join('');
});
cljs.core.logic.SubstValue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6863__auto__){var self__ = this;
var this__6863__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",1013904360),self__.v],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"doms","doms",1016993507),self__.doms],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"eset","eset",1017026895),self__.eset],null))], null),self__.__extmap));
});
cljs.core.logic.SubstValue.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6855__auto__){var self__ = this;
var this__6855__auto____$1 = this;return (3 + cljs.core.count.call(null,self__.__extmap));
});
cljs.core.logic.SubstValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6847__auto__,other__6848__auto__){var self__ = this;
var this__6847__auto____$1 = this;if(cljs.core.truth_((function (){var and__6277__auto__ = other__6848__auto__;if(cljs.core.truth_(and__6277__auto__))
{return ((this__6847__auto____$1.constructor === other__6848__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__6847__auto____$1,other__6848__auto__));
} else
{return and__6277__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs.core.logic.SubstValue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6850__auto__,G__119703){var self__ = this;
var this__6850__auto____$1 = this;return (new cljs.core.logic.SubstValue(self__.v,self__.doms,self__.eset,G__119703,self__.__extmap,self__.__hash));
});
cljs.core.logic.SubstValue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6849__auto__){var self__ = this;
var this__6849__auto____$1 = this;return self__.__meta;
});
cljs.core.logic.SubstValue.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6860__auto__,k__6861__auto__){var self__ = this;
var this__6860__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"eset","eset",1017026895),null,new cljs.core.Keyword(null,"v","v",1013904360),null,new cljs.core.Keyword(null,"doms","doms",1016993507),null], null), null),k__6861__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6860__auto____$1),self__.__meta),k__6861__auto__);
} else
{return (new cljs.core.logic.SubstValue(self__.v,self__.doms,self__.eset,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6861__auto__)),null));
}
});
cljs.core.logic.SubstValue.cljs$lang$type = true;
cljs.core.logic.SubstValue.cljs$lang$ctorPrSeq = (function (this__6885__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.core.logic/SubstValue");
});
cljs.core.logic.SubstValue.cljs$lang$ctorPrWriter = (function (this__6885__auto__,writer__6886__auto__){return cljs.core._write.call(null,writer__6886__auto__,"cljs.core.logic/SubstValue");
});
cljs.core.logic.__GT_SubstValue = (function __GT_SubstValue(v,doms,eset){return (new cljs.core.logic.SubstValue(v,doms,eset));
});
cljs.core.logic.map__GT_SubstValue = (function map__GT_SubstValue(G__119705){return (new cljs.core.logic.SubstValue(new cljs.core.Keyword(null,"v","v",1013904360).cljs$core$IFn$_invoke$arity$1(G__119705),new cljs.core.Keyword(null,"doms","doms",1016993507).cljs$core$IFn$_invoke$arity$1(G__119705),new cljs.core.Keyword(null,"eset","eset",1017026895).cljs$core$IFn$_invoke$arity$1(G__119705),null,cljs.core.dissoc.call(null,G__119705,new cljs.core.Keyword(null,"v","v",1013904360),new cljs.core.Keyword(null,"doms","doms",1016993507),new cljs.core.Keyword(null,"eset","eset",1017026895))));
});
cljs.core.logic.subst_val_QMARK_ = (function subst_val_QMARK_(x){return (x instanceof cljs.core.logic.SubstValue);
});
cljs.core.logic.subst_val = (function() {
var subst_val = null;
var subst_val__1 = (function (x){return (new cljs.core.logic.SubstValue(x,null,null));
});
var subst_val__2 = (function (x,doms){return (new cljs.core.logic.SubstValue(x,doms,null));
});
var subst_val__3 = (function (x,doms,_meta){return cljs.core.with_meta.call(null,(new cljs.core.logic.SubstValue(x,doms,null)),_meta);
});
var subst_val__4 = (function (x,doms,eset,_meta){return cljs.core.with_meta.call(null,(new cljs.core.logic.SubstValue(x,doms,eset)),_meta);
});
subst_val = function(x,doms,eset,_meta){
switch(arguments.length){
case 1:
return subst_val__1.call(this,x);
case 2:
return subst_val__2.call(this,x,doms);
case 3:
return subst_val__3.call(this,x,doms,eset);
case 4:
return subst_val__4.call(this,x,doms,eset,_meta);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subst_val.cljs$core$IFn$_invoke$arity$1 = subst_val__1;
subst_val.cljs$core$IFn$_invoke$arity$2 = subst_val__2;
subst_val.cljs$core$IFn$_invoke$arity$3 = subst_val__3;
subst_val.cljs$core$IFn$_invoke$arity$4 = subst_val__4;
return subst_val;
})()
;
cljs.core.logic.occurs_check = (function occurs_check(s,u,v){var v__$1 = cljs.core.logic.protocols.walk.call(null,s,v);return cljs.core.logic.protocols.occurs_check_term.call(null,v__$1,u,s);
});
cljs.core.logic.ext = (function ext(s,u,v){if(cljs.core.truth_((function (){var and__6277__auto__ = s.oc;if(cljs.core.truth_(and__6277__auto__))
{return cljs.core.logic.occurs_check.call(null,s,u,((cljs.core.logic.subst_val_QMARK_.call(null,v))?v.v:v));
} else
{return and__6277__auto__;
}
})()))
{return null;
} else
{return cljs.core.logic.protocols.ext_no_check.call(null,s,u,v);
}
});
cljs.core.logic.walk_STAR_ = (function walk_STAR_(s,v){var v__$1 = cljs.core.logic.protocols.walk.call(null,s,v);return cljs.core.logic.protocols.walk_term.call(null,v__$1,(function (x){var x__$1 = cljs.core.logic.protocols.walk.call(null,s,x);if(cljs.core.truth_(cljs.core.logic.tree_term_QMARK_.call(null,x__$1)))
{return walk_STAR_.call(null,s,x__$1);
} else
{return x__$1;
}
}));
});
cljs.core.logic.unify = (function unify(s,u,v){if((u === v))
{return s;
} else
{var u__$1 = cljs.core.logic.protocols.walk.call(null,s,u);var v__$1 = cljs.core.logic.protocols.walk.call(null,s,v);if(cljs.core.truth_((function (){var and__6277__auto__ = cljs.core.logic.lvar_QMARK_.call(null,u__$1);if(cljs.core.truth_(and__6277__auto__))
{return cljs.core._EQ_.call(null,u__$1,v__$1);
} else
{return and__6277__auto__;
}
})()))
{return s;
} else
{if(cljs.core.truth_((function (){var and__6277__auto__ = cljs.core.not.call(null,cljs.core.logic.lvar_QMARK_.call(null,u__$1));if(and__6277__auto__)
{return cljs.core.logic.lvar_QMARK_.call(null,v__$1);
} else
{return and__6277__auto__;
}
})()))
{return cljs.core.logic.protocols.unify_terms.call(null,v__$1,u__$1,s);
} else
{return cljs.core.logic.protocols.unify_terms.call(null,u__$1,v__$1,s);
}
}
}
});
cljs.core.logic.unbound_names = (function (){var r = cljs.core.range.call(null,100);return cljs.core.zipmap.call(null,r,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.symbol,cljs.core.str),cljs.core.repeat.call(null,"_"),r));
})();
cljs.core.logic.reify_lvar_name = (function reify_lvar_name(s){var c = cljs.core.count.call(null,s);if((c < 100))
{return cljs.core.logic.unbound_names.call(null,c);
} else
{return cljs.core.symbol.call(null,[cljs.core.str("_"),cljs.core.str(cljs.core.count.call(null,s))].join(''));
}
});
cljs.core.logic._reify_STAR_ = (function _reify_STAR_(s,v){var v__$1 = cljs.core.logic.protocols.walk.call(null,s,v);return cljs.core.logic.protocols.reify_term.call(null,v__$1,s);
});
cljs.core.logic._reify = (function() {
var _reify = null;
var _reify__2 = (function (s,v){var v__$1 = cljs.core.logic.walk_STAR_.call(null,s,v);return cljs.core.logic.walk_STAR_.call(null,cljs.core.logic._reify_STAR_.call(null,cljs.core.with_meta.call(null,cljs.core.logic.empty_s,cljs.core.meta.call(null,s)),v__$1),v__$1);
});
var _reify__3 = (function (s,v,r){var v__$1 = cljs.core.logic.walk_STAR_.call(null,s,v);return cljs.core.logic.walk_STAR_.call(null,cljs.core.logic._reify_STAR_.call(null,r,v__$1),v__$1);
});
_reify = function(s,v,r){
switch(arguments.length){
case 2:
return _reify__2.call(this,s,v);
case 3:
return _reify__3.call(this,s,v,r);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_reify.cljs$core$IFn$_invoke$arity$2 = _reify__2;
_reify.cljs$core$IFn$_invoke$arity$3 = _reify__3;
return _reify;
})()
;
cljs.core.logic.build = (function build(s,u){return cljs.core.logic.protocols.build_term.call(null,u,s);
});

/**
* @constructor
*/
cljs.core.logic.Substitutions = (function (s,vs,ts,cs,cq,cqs,oc,_meta){
this.s = s;
this.vs = vs;
this.ts = ts;
this.cs = cs;
this.cq = cq;
this.cqs = cqs;
this.oc = oc;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2491150;
})
cljs.core.logic.Substitutions.cljs$lang$type = true;
cljs.core.logic.Substitutions.cljs$lang$ctorStr = "cljs.core.logic/Substitutions";
cljs.core.logic.Substitutions.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.logic/Substitutions");
});
cljs.core.logic.Substitutions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;return cljs.core._lookup.call(null,this$__$1,k,null);
});
cljs.core.logic.Substitutions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){var self__ = this;
var this$__$1 = this;var G__119709 = k;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"oc","oc",1013907782),G__119709))
{return self__.oc;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cqs","cqs",1014002999),G__119709))
{return self__.cqs;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cq","cq",1013907424),G__119709))
{return self__.cq;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cs","cs",1013907426),G__119709))
{return self__.cs;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ts","ts",1013907953),G__119709))
{return self__.ts;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"vs","vs",1013908015),G__119709))
{return self__.vs;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"s","s",1013904357),G__119709))
{return self__.s;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return not_found;
} else
{return null;
}
}
}
}
}
}
}
}
});
cljs.core.logic.Substitutions.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cqs","cqs",1014002999),null,new cljs.core.Keyword(null,"vs","vs",1013908015),null,new cljs.core.Keyword(null,"oc","oc",1013907782),null,new cljs.core.Keyword(null,"cq","cq",1013907424),null,new cljs.core.Keyword(null,"cs","cs",1013907426),null,new cljs.core.Keyword(null,"s","s",1013904357),null], null), null),k);
});
cljs.core.logic.Substitutions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,k,v){var self__ = this;
var this$__$1 = this;var G__119710 = k;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"oc","oc",1013907782),G__119710))
{return (new cljs.core.logic.Substitutions(self__.s,self__.vs,self__.ts,self__.cs,self__.cq,self__.cqs,v,self__._meta));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cqs","cqs",1014002999),G__119710))
{return (new cljs.core.logic.Substitutions(self__.s,self__.vs,self__.ts,self__.cs,self__.cq,v,self__.oc,self__._meta));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cq","cq",1013907424),G__119710))
{return (new cljs.core.logic.Substitutions(self__.s,self__.vs,self__.ts,self__.cs,v,self__.cqs,self__.oc,self__._meta));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cs","cs",1013907426),G__119710))
{return (new cljs.core.logic.Substitutions(self__.s,self__.vs,self__.ts,v,self__.cq,self__.cqs,self__.oc,self__._meta));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ts","ts",1013907953),G__119710))
{return (new cljs.core.logic.Substitutions(self__.s,self__.vs,v,self__.cs,self__.cq,self__.cqs,self__.oc,self__._meta));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"vs","vs",1013908015),G__119710))
{return (new cljs.core.logic.Substitutions(self__.s,v,self__.ts,self__.cs,self__.cq,self__.cqs,self__.oc,self__._meta));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"s","s",1013904357),G__119710))
{return (new cljs.core.logic.Substitutions(v,self__.vs,self__.ts,self__.cs,self__.cq,self__.cqs,self__.oc,self__._meta));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.ex_info.call(null,[cljs.core.str("Substitutions has no field for key"),cljs.core.str(k)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else
{return null;
}
}
}
}
}
}
}
}
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$protocols$IMPlus$ = true;
cljs.core.logic.Substitutions.prototype.cljs$core$logic$protocols$IMPlus$mplus$arity$2 = (function (this$,f){var self__ = this;
var this$__$1 = this;return cljs.core.logic.choice.call(null,this$__$1,f);
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$protocols$IBind$ = true;
cljs.core.logic.Substitutions.prototype.cljs$core$logic$protocols$IBind$bind$arity$2 = (function (this$,g){var self__ = this;
var this$__$1 = this;return g.call(null,this$__$1);
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$protocols$ITake$ = true;
cljs.core.logic.Substitutions.prototype.cljs$core$logic$protocols$ITake$take_STAR_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return this$__$1;
});
cljs.core.logic.Substitutions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,p__119711){var self__ = this;
var vec__119712 = p__119711;var k = cljs.core.nth.call(null,vec__119712,0,null);var v = cljs.core.nth.call(null,vec__119712,1,null);var this$__$1 = this;if(cljs.core.truth_(cljs.core.logic.lvar_QMARK_.call(null,k)))
{return cljs.core.assoc.call(null,this$__$1,k,v);
} else
{throw cljs.core.ex_info.call(null,[cljs.core.str("key must be a logic var")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
cljs.core.logic.Substitutions.prototype.toString = (function (){var self__ = this;
var _ = this;return [cljs.core.str(self__.s)].join('');
});
cljs.core.logic.Substitutions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.count.call(null,self__.s);
});
cljs.core.logic.Substitutions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,o){var self__ = this;
var this$__$1 = this;return ((this$__$1 === o)) || (((o instanceof cljs.core.logic.Substitutions)) && (cljs.core._EQ_.call(null,self__.s,o.s)));
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$protocols$ISubstitutions$ = true;
cljs.core.logic.Substitutions.prototype.cljs$core$logic$protocols$ISubstitutions$ext_no_check$arity$3 = (function (this$,u,v){var self__ = this;
var this$__$1 = this;var u__$1 = ((cljs.core.not.call(null,cljs.core.logic.lvar_QMARK_.call(null,v)))?cljs.core.logic.assoc_meta.call(null,u,new cljs.core.Keyword("cljs.core.logic","root","cljs.core.logic/root",3673158879),true):u);return (new cljs.core.logic.Substitutions(cljs.core.assoc.call(null,self__.s,u__$1,v),(cljs.core.truth_(self__.vs)?cljs.core.conj.call(null,self__.vs,u__$1):null),self__.ts,self__.cs,self__.cq,self__.cqs,self__.oc,self__._meta));
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$protocols$ISubstitutions$walk$arity$2 = (function (this$,v){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(cljs.core.logic.bindable_QMARK_.call(null,v)))
{var lv = v;var me = cljs.core.find.call(null,self__.s,v);while(true){
if((me == null))
{return lv;
} else
{var v__$1 = cljs.core.key.call(null,me);var vp = cljs.core.val.call(null,me);if(cljs.core.not.call(null,cljs.core.logic.bindable_QMARK_.call(null,vp)))
{if(cljs.core.logic.subst_val_QMARK_.call(null,vp))
{var sv = vp.v;if(cljs.core.keyword_identical_QMARK_.call(null,sv,new cljs.core.Keyword("cljs.core.logic","unbound","cljs.core.logic/unbound",1803671316)))
{return cljs.core.with_meta.call(null,v__$1,cljs.core.assoc.call(null,cljs.core.meta.call(null,vp),new cljs.core.Keyword("cljs.core.logic","unbound","cljs.core.logic/unbound",1803671316),true));
} else
{return sv;
}
} else
{return vp;
}
} else
{{
var G__119721 = vp;
var G__119722 = cljs.core.find.call(null,self__.s,vp);
lv = G__119721;
me = G__119722;
continue;
}
}
}
break;
}
} else
{return v;
}
});
cljs.core.logic.Substitutions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,new_meta){var self__ = this;
var this$__$1 = this;return (new cljs.core.logic.Substitutions(self__.s,self__.vs,self__.ts,self__.cs,self__.cq,self__.cqs,self__.oc,new_meta));
});
cljs.core.logic.Substitutions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__._meta;
});
cljs.core.logic.Substitutions.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.logic.empty_s;
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$protocols$ISubstitutionsCLP$ = true;
cljs.core.logic.Substitutions.prototype.cljs$core$logic$protocols$ISubstitutionsCLP$root_val$arity$2 = (function (this$,v){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(cljs.core.logic.lvar_QMARK_.call(null,v)))
{var lv = v;var G__119714 = cljs.core.find.call(null,self__.s,v);var vec__119715 = G__119714;var v__$1 = cljs.core.nth.call(null,vec__119715,0,null);var vp = cljs.core.nth.call(null,vec__119715,1,null);var me = vec__119715;var lv__$1 = lv;var G__119714__$1 = G__119714;while(true){
var lv__$2 = lv__$1;var vec__119716 = G__119714__$1;var v__$2 = cljs.core.nth.call(null,vec__119716,0,null);var vp__$1 = cljs.core.nth.call(null,vec__119716,1,null);var me__$1 = vec__119716;if((me__$1 == null))
{return lv__$2;
} else
{if(cljs.core.not.call(null,cljs.core.logic.lvar_QMARK_.call(null,vp__$1)))
{return vp__$1;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__119723 = vp__$1;
var G__119724 = cljs.core.find.call(null,self__.s,vp__$1);
lv__$1 = G__119723;
G__119714__$1 = G__119724;
continue;
}
} else
{return null;
}
}
}
break;
}
} else
{return v;
}
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$protocols$ISubstitutionsCLP$root_var$arity$2 = (function (this$,v){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(cljs.core.logic.lvar_QMARK_.call(null,v)))
{if(cljs.core.truth_(new cljs.core.Keyword("cljs.core.logic","root","cljs.core.logic/root",3673158879).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v))))
{return v;
} else
{var lv = v;var G__119718 = cljs.core.find.call(null,self__.s,v);var vec__119719 = G__119718;var v__$1 = cljs.core.nth.call(null,vec__119719,0,null);var vp = cljs.core.nth.call(null,vec__119719,1,null);var me = vec__119719;var lv__$1 = lv;var G__119718__$1 = G__119718;while(true){
var lv__$2 = lv__$1;var vec__119720 = G__119718__$1;var v__$2 = cljs.core.nth.call(null,vec__119720,0,null);var vp__$1 = cljs.core.nth.call(null,vec__119720,1,null);var me__$1 = vec__119720;if((me__$1 == null))
{return lv__$2;
} else
{if(cljs.core.not.call(null,cljs.core.logic.lvar_QMARK_.call(null,vp__$1)))
{if(cljs.core.logic.subst_val_QMARK_.call(null,vp__$1))
{return cljs.core.with_meta.call(null,v__$2,cljs.core.meta.call(null,vp__$1));
} else
{return v__$2;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__119725 = vp__$1;
var G__119726 = cljs.core.find.call(null,self__.s,vp__$1);
lv__$1 = G__119725;
G__119718__$1 = G__119726;
continue;
}
} else
{return null;
}
}
}
break;
}
}
} else
{return v;
}
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$protocols$ISubstitutionsCLP$ext_run_cs$arity$3 = (function (this$,x,v){var self__ = this;
var this$__$1 = this;var x__$1 = cljs.core.logic.protocols.root_var.call(null,this$__$1,x);var xs = (cljs.core.truth_(cljs.core.logic.lvar_QMARK_.call(null,v))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,cljs.core.logic.protocols.root_var.call(null,this$__$1,v)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1], null));var s__$1 = (cljs.core.truth_(self__.oc)?cljs.core.logic.ext.call(null,this$__$1,x__$1,v):cljs.core.logic.protocols.ext_no_check.call(null,this$__$1,x__$1,v));if(cljs.core.truth_(s__$1))
{return cljs.core.logic.run_constraints_STAR_.call(null,xs,self__.cs,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440)).call(null,s__$1);
} else
{return null;
}
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$protocols$ISubstitutionsCLP$queue$arity$2 = (function (this$,c){var self__ = this;
var this$__$1 = this;var id = cljs.core.logic.protocols.id.call(null,c);if(cljs.core.not.call(null,self__.cqs.call(null,id)))
{return cljs.core.assoc.call(null,cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"cq","cq",1013907424),cljs.core.conj.call(null,(function (){var or__6289__auto__ = self__.cq;if(cljs.core.truth_(or__6289__auto__))
{return or__6289__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),c)),new cljs.core.Keyword(null,"cqs","cqs",1014002999),cljs.core.conj.call(null,self__.cqs,id));
} else
{return this$__$1;
}
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$protocols$ISubstitutionsCLP$update_var$arity$3 = (function (this$,x,v){var self__ = this;
var this$__$1 = this;return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"s","s",1013904357),cljs.core.assoc.call(null,this$__$1.s,x,v));
});
cljs.core.logic.__GT_Substitutions = (function __GT_Substitutions(s,vs,ts,cs,cq,cqs,oc,_meta){return (new cljs.core.logic.Substitutions(s,vs,ts,cs,cq,cqs,oc,_meta));
});
cljs.core.logic.add_attr = (function add_attr(s,x,attr,attrv){var x__$1 = cljs.core.logic.protocols.root_var.call(null,s,x);var v = cljs.core.logic.protocols.root_val.call(null,s,x__$1);if(cljs.core.logic.subst_val_QMARK_.call(null,v))
{return cljs.core.logic.protocols.update_var.call(null,s,x__$1,cljs.core.logic.assoc_meta.call(null,v,attr,attrv));
} else
{var v__$1 = (cljs.core.truth_(cljs.core.logic.lvar_QMARK_.call(null,v))?new cljs.core.Keyword("cljs.core.logic","unbound","cljs.core.logic/unbound",1803671316):v);return cljs.core.logic.protocols.ext_no_check.call(null,s,x__$1,cljs.core.with_meta.call(null,cljs.core.logic.subst_val.call(null,v__$1),new cljs.core.PersistentArrayMap.fromArray([attr,attrv], true, false)));
}
});
cljs.core.logic.rem_attr = (function rem_attr(s,x,attr){var x__$1 = cljs.core.logic.protocols.root_var.call(null,s,x);var v = cljs.core.logic.protocols.root_val.call(null,s,x__$1);if(cljs.core.logic.subst_val_QMARK_.call(null,v))
{var new_meta = cljs.core.dissoc.call(null,cljs.core.meta.call(null,v),attr);if(((cljs.core.count.call(null,new_meta) === 0)) && (cljs.core.not_EQ_.call(null,v.v,new cljs.core.Keyword("cljs.core.logic","unbound","cljs.core.logic/unbound",1803671316))))
{return cljs.core.logic.protocols.update_var.call(null,s,x__$1,v.v);
} else
{return cljs.core.logic.protocols.update_var.call(null,s,x__$1,cljs.core.with_meta.call(null,v,new_meta));
}
} else
{return s;
}
});
cljs.core.logic.get_attr = (function get_attr(s,x,attr){var v = cljs.core.logic.protocols.root_val.call(null,s,x);if(cljs.core.logic.subst_val_QMARK_.call(null,v))
{return attr.call(null,cljs.core.meta.call(null,v));
} else
{return null;
}
});
cljs.core.logic.sync_eset = (function sync_eset(s,v,seenset,f){if(cljs.core.not_EQ_.call(null,seenset,new cljs.core.Keyword("cljs.core.logic","no-prop","cljs.core.logic/no-prop",1476398058)))
{return cljs.core.reduce.call(null,(function (s__$1,y){var y__$1 = cljs.core.logic.protocols.root_var.call(null,s__$1,y);if(!(cljs.core.contains_QMARK_.call(null,seenset,y__$1)))
{return f.call(null,s__$1,y__$1);
} else
{return s__$1;
}
}),s,v.eset);
} else
{return s;
}
});
cljs.core.logic.add_dom = (function() {
var add_dom = null;
var add_dom__4 = (function (s,x,dom,domv){var x__$1 = cljs.core.logic.protocols.root_var.call(null,s,x);return add_dom.call(null,s,x__$1,dom,domv,null);
});
var add_dom__5 = (function (s,x,dom,domv,seenset){var v = cljs.core.logic.protocols.root_val.call(null,s,x);var s__$1 = ((cljs.core.logic.subst_val_QMARK_.call(null,v))?cljs.core.logic.protocols.update_var.call(null,s,x,cljs.core.logic.assoc_dom.call(null,v,dom,domv)):(function (){var v__$1 = (cljs.core.truth_(cljs.core.logic.lvar_QMARK_.call(null,v))?new cljs.core.Keyword("cljs.core.logic","unbound","cljs.core.logic/unbound",1803671316):v);return cljs.core.logic.protocols.ext_no_check.call(null,s,x,cljs.core.logic.subst_val.call(null,v__$1,new cljs.core.PersistentArrayMap.fromArray([dom,domv], true, false)));
})());return cljs.core.logic.sync_eset.call(null,s__$1,v,seenset,(function (s__$2,y){return add_dom.call(null,s__$2,y,dom,domv,cljs.core.conj.call(null,(function (){var or__6289__auto__ = seenset;if(cljs.core.truth_(or__6289__auto__))
{return or__6289__auto__;
} else
{return cljs.core.PersistentHashSet.EMPTY;
}
})(),x));
}));
});
add_dom = function(s,x,dom,domv,seenset){
switch(arguments.length){
case 4:
return add_dom__4.call(this,s,x,dom,domv);
case 5:
return add_dom__5.call(this,s,x,dom,domv,seenset);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_dom.cljs$core$IFn$_invoke$arity$4 = add_dom__4;
add_dom.cljs$core$IFn$_invoke$arity$5 = add_dom__5;
return add_dom;
})()
;
cljs.core.logic.update_dom = (function() {
var update_dom = null;
var update_dom__4 = (function (s,x,dom,f){var x__$1 = cljs.core.logic.protocols.root_var.call(null,s,x);return update_dom.call(null,s,x__$1,dom,f,null);
});
var update_dom__5 = (function (s,x,dom,f,seenset){var v = cljs.core.logic.protocols.root_val.call(null,s,x);var v__$1 = (cljs.core.truth_(cljs.core.logic.lvar_QMARK_.call(null,v))?cljs.core.logic.subst_val.call(null,new cljs.core.Keyword("cljs.core.logic","unbound","cljs.core.logic/unbound",1803671316)):v);var doms = v__$1.doms;var s__$1 = cljs.core.logic.protocols.update_var.call(null,s,x,cljs.core.logic.assoc_dom.call(null,v__$1,dom,f.call(null,cljs.core.get.call(null,doms,dom))));return cljs.core.logic.sync_eset.call(null,s__$1,v__$1,seenset,(function (s__$2,y){return update_dom.call(null,s__$2,y,dom,f,cljs.core.conj.call(null,(function (){var or__6289__auto__ = seenset;if(cljs.core.truth_(or__6289__auto__))
{return or__6289__auto__;
} else
{return cljs.core.PersistentHashSet.EMPTY;
}
})(),x));
}));
});
update_dom = function(s,x,dom,f,seenset){
switch(arguments.length){
case 4:
return update_dom__4.call(this,s,x,dom,f);
case 5:
return update_dom__5.call(this,s,x,dom,f,seenset);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_dom.cljs$core$IFn$_invoke$arity$4 = update_dom__4;
update_dom.cljs$core$IFn$_invoke$arity$5 = update_dom__5;
return update_dom;
})()
;
cljs.core.logic.rem_dom = (function() {
var rem_dom = null;
var rem_dom__3 = (function (s,x,dom){var x__$1 = cljs.core.logic.protocols.root_var.call(null,s,x);return rem_dom.call(null,s,x__$1,dom,null);
});
var rem_dom__4 = (function (s,x,dom,seenset){var v = cljs.core.logic.protocols.root_val.call(null,s,x);var s__$1 = ((cljs.core.logic.subst_val_QMARK_.call(null,v))?(function (){var new_doms = cljs.core.dissoc.call(null,v.doms,dom);if(((cljs.core.count.call(null,new_doms) === 0)) && (cljs.core.not_EQ_.call(null,v.v,new cljs.core.Keyword("cljs.core.logic","unbound","cljs.core.logic/unbound",1803671316))))
{return cljs.core.logic.protocols.update_var.call(null,s,x,v.v);
} else
{return cljs.core.logic.protocols.update_var.call(null,s,x,cljs.core.assoc.call(null,v,new cljs.core.Keyword(null,"doms","doms",1016993507),new_doms));
}
})():s);return cljs.core.logic.sync_eset.call(null,s__$1,v,seenset,(function (s__$2,y){return rem_dom.call(null,s__$2,y,dom,cljs.core.conj.call(null,(function (){var or__6289__auto__ = seenset;if(cljs.core.truth_(or__6289__auto__))
{return or__6289__auto__;
} else
{return cljs.core.PersistentHashSet.EMPTY;
}
})(),x));
}));
});
rem_dom = function(s,x,dom,seenset){
switch(arguments.length){
case 3:
return rem_dom__3.call(this,s,x,dom);
case 4:
return rem_dom__4.call(this,s,x,dom,seenset);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rem_dom.cljs$core$IFn$_invoke$arity$3 = rem_dom__3;
rem_dom.cljs$core$IFn$_invoke$arity$4 = rem_dom__4;
return rem_dom;
})()
;
cljs.core.logic.get_dom = (function get_dom(s,x,dom){var v = cljs.core.logic.protocols.root_val.call(null,s,x);if(cljs.core.logic.subst_val_QMARK_.call(null,v))
{var v_SINGLEQUOTE_ = v.v;if(cljs.core.not_EQ_.call(null,v_SINGLEQUOTE_,new cljs.core.Keyword("cljs.core.logic","unbound","cljs.core.logic/unbound",1803671316)))
{return v_SINGLEQUOTE_;
} else
{return dom.call(null,new cljs.core.Keyword(null,"doms","doms",1016993507).cljs$core$IFn$_invoke$arity$1(v));
}
} else
{if(cljs.core.not.call(null,cljs.core.logic.lvar_QMARK_.call(null,v)))
{return v;
} else
{return null;
}
}
});
cljs.core.logic.make_s = (function() {
var make_s = null;
var make_s__0 = (function (){return make_s.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var make_s__1 = (function (m){return make_s.call(null,m,cljs.core.logic.make_cs.call(null));
});
var make_s__2 = (function (m,cs){return (new cljs.core.logic.Substitutions(m,null,null,cs,null,cljs.core.PersistentHashSet.EMPTY,true,null));
});
make_s = function(m,cs){
switch(arguments.length){
case 0:
return make_s__0.call(this);
case 1:
return make_s__1.call(this,m);
case 2:
return make_s__2.call(this,m,cs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
make_s.cljs$core$IFn$_invoke$arity$0 = make_s__0;
make_s.cljs$core$IFn$_invoke$arity$1 = make_s__1;
make_s.cljs$core$IFn$_invoke$arity$2 = make_s__2;
return make_s;
})()
;
cljs.core.logic.tabled_s = (function() {
var tabled_s = null;
var tabled_s__0 = (function (){return tabled_s.call(null,false);
});
var tabled_s__1 = (function (oc){return tabled_s.call(null,oc,null);
});
var tabled_s__2 = (function (oc,meta){return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.with_meta.call(null,cljs.core.logic.make_s.call(null),meta),new cljs.core.Keyword(null,"oc","oc",1013907782),oc),new cljs.core.Keyword(null,"ts","ts",1013907953),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY));
});
tabled_s = function(oc,meta){
switch(arguments.length){
case 0:
return tabled_s__0.call(this);
case 1:
return tabled_s__1.call(this,oc);
case 2:
return tabled_s__2.call(this,oc,meta);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tabled_s.cljs$core$IFn$_invoke$arity$0 = tabled_s__0;
tabled_s.cljs$core$IFn$_invoke$arity$1 = tabled_s__1;
tabled_s.cljs$core$IFn$_invoke$arity$2 = tabled_s__2;
return tabled_s;
})()
;
cljs.core.logic.empty_s = cljs.core.logic.make_s.call(null);
cljs.core.logic.empty_f = (function empty_f(){return null;
});
cljs.core.logic.subst_QMARK_ = (function subst_QMARK_(x){return (x instanceof cljs.core.logic.Substitutions);
});
cljs.core.logic.to_s = (function to_s(v){var s = cljs.core.reduce.call(null,(function (m,p__119729){var vec__119730 = p__119729;var k = cljs.core.nth.call(null,vec__119730,0,null);var v__$1 = cljs.core.nth.call(null,vec__119730,1,null);return cljs.core.assoc.call(null,m,k,v__$1);
}),cljs.core.PersistentArrayMap.EMPTY,v);return cljs.core.logic.make_s.call(null,s,cljs.core.logic.make_cs.call(null));
});
cljs.core.logic.annotate = (function annotate(k,v){return (function (a){return cljs.core.vary_meta.call(null,a,cljs.core.assoc,k,v);
});
});
cljs.core.logic.merge_doms = (function merge_doms(s,x,doms){var xdoms = cljs.core.logic.protocols.root_val.call(null,s,x).doms;var doms__$1 = cljs.core.seq.call(null,doms);var s__$1 = s;while(true){
if(doms__$1)
{var vec__119732 = cljs.core.first.call(null,doms__$1);var dom = cljs.core.nth.call(null,vec__119732,0,null);var domv = cljs.core.nth.call(null,vec__119732,1,null);var xdomv = cljs.core.get.call(null,xdoms,dom,new cljs.core.Keyword("cljs.core.logic","not-found","cljs.core.logic/not-found",3358757009));var ndomv = ((cljs.core.keyword_identical_QMARK_.call(null,xdomv,new cljs.core.Keyword("cljs.core.logic","not-found","cljs.core.logic/not-found",3358757009)))?domv:cljs.core.logic.protocols._merge_doms.call(null,domv,xdomv));if(cljs.core.truth_(ndomv))
{{
var G__119733 = cljs.core.next.call(null,doms__$1);
var G__119734 = cljs.core.logic.add_dom.call(null,s__$1,x,dom,ndomv,cljs.core.PersistentHashSet.EMPTY);
doms__$1 = G__119733;
s__$1 = G__119734;
continue;
}
} else
{return null;
}
} else
{return s__$1;
}
break;
}
});
cljs.core.logic.update_eset = (function update_eset(s,doms,eset){var eset__$1 = cljs.core.seq.call(null,eset);var s__$1 = s;while(true){
if(eset__$1)
{var temp__4098__auto__ = cljs.core.logic.merge_doms.call(null,s__$1,cljs.core.logic.protocols.root_var.call(null,s__$1,cljs.core.first.call(null,eset__$1)),doms);if(cljs.core.truth_(temp__4098__auto__))
{var s__$2 = temp__4098__auto__;{
var G__119735 = cljs.core.next.call(null,eset__$1);
var G__119736 = s__$2;
eset__$1 = G__119735;
s__$1 = G__119736;
continue;
}
} else
{return null;
}
} else
{return s__$1;
}
break;
}
});
cljs.core.logic.merge_with_root = (function merge_with_root(s,x,root){var xv = cljs.core.logic.protocols.root_val.call(null,s,x);var rootv = cljs.core.logic.protocols.root_val.call(null,s,root);var eset = clojure.set.union.call(null,rootv.eset,xv.eset);var doms = (function (){var xd = cljs.core.seq.call(null,xv.doms);var rd = rootv.doms;var r = cljs.core.PersistentArrayMap.EMPTY;while(true){
if(xd)
{var vec__119739 = cljs.core.first.call(null,xd);var xk = cljs.core.nth.call(null,vec__119739,0,null);var xv__$1 = cljs.core.nth.call(null,vec__119739,1,null);var temp__4096__auto__ = cljs.core.find.call(null,rd,xk);if(cljs.core.truth_(temp__4096__auto__))
{var vec__119740 = temp__4096__auto__;var _ = cljs.core.nth.call(null,vec__119740,0,null);var rv = cljs.core.nth.call(null,vec__119740,1,null);var nd = cljs.core.logic.protocols._merge_doms.call(null,xv__$1,rv);if(cljs.core.truth_(nd))
{{
var G__119741 = cljs.core.next.call(null,xd);
var G__119742 = cljs.core.dissoc.call(null,rd,xk);
var G__119743 = cljs.core.assoc.call(null,r,xk,nd);
xd = G__119741;
rd = G__119742;
r = G__119743;
continue;
}
} else
{return null;
}
} else
{{
var G__119744 = cljs.core.next.call(null,xd);
var G__119745 = rd;
var G__119746 = cljs.core.assoc.call(null,r,xk,xv__$1);
xd = G__119744;
rd = G__119745;
r = G__119746;
continue;
}
}
} else
{return cljs.core.merge.call(null,r,rd);
}
break;
}
})();var nv = (cljs.core.truth_(doms)?cljs.core.logic.subst_val.call(null,rootv.v,doms,eset,cljs.core.merge.call(null,cljs.core.meta.call(null,xv),cljs.core.meta.call(null,rootv))):null);if(cljs.core.truth_(nv))
{return cljs.core.logic.update_eset.call(null,cljs.core.logic.protocols.ext_no_check.call(null,s,root,nv),doms,eset);
} else
{return null;
}
});
cljs.core.logic.to_subst_val = (function to_subst_val(v){if(cljs.core.logic.subst_val_QMARK_.call(null,v))
{return v;
} else
{return cljs.core.logic.subst_val.call(null,new cljs.core.Keyword("cljs.core.logic","unbound","cljs.core.logic/unbound",1803671316));
}
});
cljs.core.logic.entangle = (function entangle(s,x,y){var x__$1 = cljs.core.logic.protocols.root_var.call(null,s,x);var y__$1 = cljs.core.logic.protocols.root_var.call(null,s,y);var xv = cljs.core.logic.to_subst_val.call(null,cljs.core.logic.protocols.root_val.call(null,s,x__$1));var yv = cljs.core.logic.to_subst_val.call(null,cljs.core.logic.protocols.root_val.call(null,s,y__$1));return cljs.core.logic.protocols.update_var.call(null,cljs.core.logic.protocols.update_var.call(null,s,x__$1,cljs.core.assoc.call(null,xv,new cljs.core.Keyword(null,"eset","eset",1017026895),cljs.core.conj.call(null,(function (){var or__6289__auto__ = xv.eset;if(cljs.core.truth_(or__6289__auto__))
{return or__6289__auto__;
} else
{return cljs.core.PersistentHashSet.EMPTY;
}
})(),y__$1))),y__$1,cljs.core.assoc.call(null,yv,new cljs.core.Keyword(null,"eset","eset",1017026895),cljs.core.conj.call(null,(function (){var or__6289__auto__ = yv.eset;if(cljs.core.truth_(or__6289__auto__))
{return or__6289__auto__;
} else
{return cljs.core.PersistentHashSet.EMPTY;
}
})(),x__$1)));
});

/**
* @constructor
*/
cljs.core.logic.LVar = (function (id,unique,name,oname,hash,meta){
this.id = id;
this.unique = unique;
this.name = name;
this.oname = oname;
this.hash = hash;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2154168576;
})
cljs.core.logic.LVar.cljs$lang$type = true;
cljs.core.logic.LVar.cljs$lang$ctorStr = "cljs.core.logic/LVar";
cljs.core.logic.LVar.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.logic/LVar");
});
cljs.core.logic.LVar.prototype.cljs$core$logic$protocols$IReifyTerm$ = true;
cljs.core.logic.LVar.prototype.cljs$core$logic$protocols$IReifyTerm$reify_term$arity$2 = (function (v,s){var self__ = this;
var v__$1 = this;var rf = new cljs.core.Keyword(null,"reify-vars","reify-vars",4368745730).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,s));if(cljs.core.fn_QMARK_.call(null,rf))
{return rf.call(null,v__$1,s);
} else
{if(cljs.core.truth_(rf))
{return cljs.core.logic.ext.call(null,s,v__$1,cljs.core.logic.reify_lvar_name.call(null,s));
} else
{return cljs.core.logic.ext.call(null,s,v__$1,v__$1.oname);
}
}
});
cljs.core.logic.LVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.hash;
});
cljs.core.logic.LVar.prototype.cljs$core$logic$protocols$IUnifyTerms$ = true;
cljs.core.logic.LVar.prototype.cljs$core$logic$protocols$IUnifyTerms$unify_terms$arity$3 = (function (u,v,s){var self__ = this;
var u__$1 = this;if(cljs.core.truth_(cljs.core.logic.lvar_QMARK_.call(null,v)))
{var repoint = (cljs.core.truth_(new cljs.core.Keyword("cljs.core.logic","unbound","cljs.core.logic/unbound",1803671316).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,u__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [u__$1,v], null):(cljs.core.truth_(new cljs.core.Keyword("cljs.core.logic","unbound","cljs.core.logic/unbound",1803671316).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,u__$1], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)));if(cljs.core.truth_(repoint))
{var vec__119747 = repoint;var root = cljs.core.nth.call(null,vec__119747,0,null);var other = cljs.core.nth.call(null,vec__119747,1,null);var s__$1 = cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"cs","cs",1013907426),cljs.core.logic.protocols.migrate.call(null,s.cs,other,root));var s__$2 = (cljs.core.truth_(new cljs.core.Keyword("cljs.core.logic","unbound","cljs.core.logic/unbound",1803671316).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,other)))?cljs.core.logic.merge_with_root.call(null,s__$1,other,root):s__$1);if(cljs.core.truth_(s__$2))
{return cljs.core.logic.protocols.ext_no_check.call(null,s__$2,other,root);
} else
{return null;
}
} else
{return cljs.core.logic.protocols.ext_no_check.call(null,s,u__$1,v);
}
} else
{if(cljs.core.logic.protocols.non_storable_QMARK_.call(null,v))
{throw cljs.core.ex_info.call(null,[cljs.core.str(v),cljs.core.str(" is non-storable")].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else
{if(cljs.core.not_EQ_.call(null,v,new cljs.core.Keyword("cljs.core.logic","not-found","cljs.core.logic/not-found",3358757009)))
{if(cljs.core.truth_(cljs.core.logic.tree_term_QMARK_.call(null,v)))
{return cljs.core.logic.ext.call(null,s,u__$1,v);
} else
{if(cljs.core.truth_(new cljs.core.Keyword("cljs.core.logic","unbound","cljs.core.logic/unbound",1803671316).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,u__$1))))
{return cljs.core.logic.protocols.ext_no_check.call(null,s,u__$1,cljs.core.assoc.call(null,cljs.core.logic.protocols.root_val.call(null,s,u__$1),new cljs.core.Keyword(null,"v","v",1013904360),v));
} else
{return cljs.core.logic.protocols.ext_no_check.call(null,s,u__$1,v);
}
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
}
});
cljs.core.logic.LVar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;return cljs.core._lookup.call(null,this$__$1,k,null);
});
cljs.core.logic.LVar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){var self__ = this;
var this$__$1 = this;var G__119748 = k;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597),G__119748))
{return self__.id;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"oname","oname",1119788780),G__119748))
{return self__.oname;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1017277949),G__119748))
{return self__.name;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.logic.LVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,opts){var self__ = this;
var x__$1 = this;return cljs.core._write.call(null,writer,[cljs.core.str("<lvar:"),cljs.core.str(x__$1.name),cljs.core.str(">")].join(''));
});
cljs.core.logic.LVar.prototype.cljs$core$logic$protocols$IWalkTerm$ = true;
cljs.core.logic.LVar.prototype.cljs$core$logic$protocols$IWalkTerm$walk_term$arity$2 = (function (v,f){var self__ = this;
var v__$1 = this;return f.call(null,v__$1);
});
cljs.core.logic.LVar.prototype.toString = (function (){var self__ = this;
var _ = this;return [cljs.core.str("<lvar:"),cljs.core.str(self__.name),cljs.core.str(">")].join('');
});
cljs.core.logic.LVar.prototype.cljs$core$logic$protocols$IVar$ = true;
cljs.core.logic.LVar.prototype.cljs$core$logic$protocols$IOccursCheckTerm$ = true;
cljs.core.logic.LVar.prototype.cljs$core$logic$protocols$IOccursCheckTerm$occurs_check_term$arity$3 = (function (v,x,s){var self__ = this;
var v__$1 = this;return cljs.core._EQ_.call(null,cljs.core.logic.protocols.walk.call(null,s,v__$1),x);
});
cljs.core.logic.LVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,o){var self__ = this;
var this$__$1 = this;if((function (){var G__119749 = o;if(G__119749)
{var bit__6915__auto__ = null;if(cljs.core.truth_((function (){var or__6289__auto__ = bit__6915__auto__;if(cljs.core.truth_(or__6289__auto__))
{return or__6289__auto__;
} else
{return G__119749.cljs$core$logic$protocols$IVar$;
}
})()))
{return true;
} else
{if((!G__119749.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.logic.protocols.IVar,G__119749);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.logic.protocols.IVar,G__119749);
}
})())
{if(cljs.core.truth_(self__.unique))
{return (self__.id === o.id);
} else
{return (self__.name === o.name);
}
} else
{return false;
}
});
cljs.core.logic.LVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,new_meta){var self__ = this;
var this$__$1 = this;return (new cljs.core.logic.LVar(self__.id,self__.unique,self__.name,self__.oname,self__.hash,new_meta));
});
cljs.core.logic.LVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.meta;
});
cljs.core.logic.LVar.prototype.cljs$core$logic$protocols$IBuildTerm$ = true;
cljs.core.logic.LVar.prototype.cljs$core$logic$protocols$IBuildTerm$build_term$arity$2 = (function (u,s){var self__ = this;
var u__$1 = this;var m = s.s;var cs = s.cs;var lv = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"ignore","ignore",1464039307,null));if(cljs.core.contains_QMARK_.call(null,m,u__$1))
{return s;
} else
{return cljs.core.logic.make_s.call(null,cljs.core.assoc.call(null,m,u__$1,lv),cs);
}
});
cljs.core.logic.__GT_LVar = (function __GT_LVar(id,unique,name,oname,hash,meta){return (new cljs.core.logic.LVar(id,unique,name,oname,hash,meta));
});
cljs.core.logic.next_id = (function next_id(){return cljs.reader.read_string.call(null,clojure.string.replace.call(null,[cljs.core.str(cljs.core.gensym.call(null))].join(''),/G__/,""));
});
cljs.core.logic.lvar = (function() {
var lvar = null;
var lvar__0 = (function (){var id = cljs.core.logic.next_id.call(null);var name = [cljs.core.str(id)].join('');return (new cljs.core.logic.LVar(id,true,name,null,cljs.core.hash.call(null,name),null));
});
var lvar__1 = (function (name){return lvar.call(null,name,true);
});
var lvar__2 = (function (name,unique){var oname = name;var id = (cljs.core.truth_(unique)?cljs.core.logic.next_id.call(null):name);var name__$1 = (cljs.core.truth_(unique)?[cljs.core.str(name),cljs.core.str("__"),cljs.core.str(id)].join(''):[cljs.core.str(name)].join(''));return (new cljs.core.logic.LVar(id,unique,name__$1,oname,cljs.core.hash.call(null,name__$1),null));
});
lvar = function(name,unique){
switch(arguments.length){
case 0:
return lvar__0.call(this);
case 1:
return lvar__1.call(this,name);
case 2:
return lvar__2.call(this,name,unique);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lvar.cljs$core$IFn$_invoke$arity$0 = lvar__0;
lvar.cljs$core$IFn$_invoke$arity$1 = lvar__1;
lvar.cljs$core$IFn$_invoke$arity$2 = lvar__2;
return lvar;
})()
;
cljs.core.logic.lvar_QMARK_ = (function lvar_QMARK_(x){var G__119751 = x;if(G__119751)
{var bit__6915__auto__ = null;if(cljs.core.truth_((function (){var or__6289__auto__ = bit__6915__auto__;if(cljs.core.truth_(or__6289__auto__))
{return or__6289__auto__;
} else
{return G__119751.cljs$core$logic$protocols$IVar$;
}
})()))
{return true;
} else
{if((!G__119751.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.logic.protocols.IVar,G__119751);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.logic.protocols.IVar,G__119751);
}
});
cljs.core.logic.lvars = (function lvars(n){return cljs.core.repeatedly.call(null,n,cljs.core.logic.lvar);
});
cljs.core.logic.bindable_QMARK_ = (function bindable_QMARK_(x){var or__6289__auto__ = cljs.core.logic.lvar_QMARK_.call(null,x);if(or__6289__auto__)
{return or__6289__auto__;
} else
{var G__119755 = x;if(G__119755)
{var bit__6915__auto__ = null;if(cljs.core.truth_((function (){var or__6289__auto____$1 = bit__6915__auto__;if(cljs.core.truth_(or__6289__auto____$1))
{return or__6289__auto____$1;
} else
{return G__119755.cljs$core$logic$protocols$IBindable$;
}
})()))
{return true;
} else
{if((!G__119755.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.logic.protocols.IBindable,G__119755);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.logic.protocols.IBindable,G__119755);
}
}
});

/**
* @constructor
*/
cljs.core.logic.LCons = (function (a,d,cache,meta){
this.a = a;
this.d = d;
this.cache = cache;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2154168320;
})
cljs.core.logic.LCons.cljs$lang$type = true;
cljs.core.logic.LCons.cljs$lang$ctorStr = "cljs.core.logic/LCons";
cljs.core.logic.LCons.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.logic/LCons");
});
cljs.core.logic.LCons.prototype.cljs$core$logic$protocols$IReifyTerm$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$protocols$IReifyTerm$reify_term$arity$2 = (function (v,s){var self__ = this;
var v__$1 = this;var v__$2 = v__$1;var s__$1 = s;while(true){
if(cljs.core.truth_(cljs.core.logic.lcons_QMARK_.call(null,v__$2)))
{{
var G__119756 = cljs.core.logic.protocols.lnext.call(null,v__$2);
var G__119757 = cljs.core.logic._reify_STAR_.call(null,s__$1,cljs.core.logic.protocols.lfirst.call(null,v__$2));
v__$2 = G__119756;
s__$1 = G__119757;
continue;
}
} else
{return cljs.core.logic._reify_STAR_.call(null,s__$1,v__$2);
}
break;
}
});
cljs.core.logic.LCons.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((self__.cache === -1))
{self__.cache = (((31 | 0) * cljs.core.hash.call(null,self__.d)) + cljs.core.hash.call(null,self__.a));
return self__.cache;
} else
{return self__.cache;
}
});
cljs.core.logic.LCons.prototype.cljs$core$logic$protocols$IUnifyTerms$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$protocols$IUnifyTerms$unify_terms$arity$3 = (function (u,v,s){var self__ = this;
var u__$1 = this;if(cljs.core.sequential_QMARK_.call(null,v))
{var u__$2 = u__$1;var v__$1 = cljs.core.seq.call(null,v);var s__$1 = s;while(true){
if(!((v__$1 == null)))
{if(cljs.core.truth_(cljs.core.logic.lcons_QMARK_.call(null,u__$2)))
{var temp__4096__auto__ = cljs.core.logic.unify.call(null,s__$1,cljs.core.logic.protocols.lfirst.call(null,u__$2),cljs.core.first.call(null,v__$1));if(cljs.core.truth_(temp__4096__auto__))
{var s__$2 = temp__4096__auto__;{
var G__119758 = cljs.core.logic.protocols.lnext.call(null,u__$2);
var G__119759 = cljs.core.next.call(null,v__$1);
var G__119760 = s__$2;
u__$2 = G__119758;
v__$1 = G__119759;
s__$1 = G__119760;
continue;
}
} else
{return null;
}
} else
{return cljs.core.logic.unify.call(null,s__$1,u__$2,v__$1);
}
} else
{if(cljs.core.logic.lvar_QMARK_.call(null,u__$2))
{var temp__4096__auto__ = cljs.core.logic.unify.call(null,s__$1,u__$2,cljs.core.List.EMPTY);if(cljs.core.truth_(temp__4096__auto__))
{var s__$2 = temp__4096__auto__;return s__$2;
} else
{return cljs.core.logic.unify.call(null,s__$1,u__$2,null);
}
} else
{return null;
}
}
break;
}
} else
{if(cljs.core.truth_(cljs.core.logic.lcons_QMARK_.call(null,v)))
{var u__$2 = u__$1;var v__$1 = v;var s__$1 = s;while(true){
if(cljs.core.logic.lvar_QMARK_.call(null,u__$2))
{return cljs.core.logic.unify.call(null,s__$1,u__$2,v__$1);
} else
{if(cljs.core.logic.lvar_QMARK_.call(null,v__$1))
{return cljs.core.logic.unify.call(null,s__$1,v__$1,u__$2);
} else
{if(cljs.core.truth_((function (){var and__6277__auto__ = cljs.core.logic.lcons_QMARK_.call(null,u__$2);if(cljs.core.truth_(and__6277__auto__))
{return cljs.core.logic.lcons_QMARK_.call(null,v__$1);
} else
{return and__6277__auto__;
}
})()))
{var temp__4096__auto__ = cljs.core.logic.unify.call(null,s__$1,cljs.core.logic.protocols.lfirst.call(null,u__$2),cljs.core.logic.protocols.lfirst.call(null,v__$1));if(cljs.core.truth_(temp__4096__auto__))
{var s__$2 = temp__4096__auto__;{
var G__119761 = cljs.core.logic.protocols.lnext.call(null,u__$2);
var G__119762 = cljs.core.logic.protocols.lnext.call(null,v__$1);
var G__119763 = s__$2;
u__$2 = G__119761;
v__$1 = G__119762;
s__$1 = G__119763;
continue;
}
} else
{return null;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.logic.unify.call(null,s__$1,u__$2,v__$1);
} else
{return null;
}
}
}
}
break;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
});
cljs.core.logic.LCons.prototype.cljs$core$logic$protocols$LConsSeq$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$protocols$LConsSeq$lfirst$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.a;
});
cljs.core.logic.LCons.prototype.cljs$core$logic$protocols$LConsSeq$lnext$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.d;
});
cljs.core.logic.LCons.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,opts){var self__ = this;
var x__$1 = this;return cljs.core._write.call(null,writer,[cljs.core.str(x__$1)].join(''));
});
cljs.core.logic.LCons.prototype.cljs$core$logic$protocols$IWalkTerm$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$protocols$IWalkTerm$walk_term$arity$2 = (function (v,f){var self__ = this;
var v__$1 = this;return cljs.core.logic.lcons.call(null,f.call(null,cljs.core.logic.protocols.lfirst.call(null,v__$1)),f.call(null,cljs.core.logic.protocols.lnext.call(null,v__$1)));
});
cljs.core.logic.LCons.prototype.toString = (function (){var self__ = this;
var this$ = this;if((self__.d instanceof cljs.core.logic.LCons))
{return [cljs.core.str("("),cljs.core.str(self__.a),cljs.core.str(" "),cljs.core.str(cljs.core.logic.protocols.toShortString.call(null,self__.d)),cljs.core.str(")")].join('');
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return [cljs.core.str("("),cljs.core.str(self__.a),cljs.core.str(" . "),cljs.core.str(self__.d),cljs.core.str(")")].join('');
} else
{return null;
}
}
});
cljs.core.logic.LCons.prototype.cljs$core$logic$protocols$LConsPrint$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$protocols$LConsPrint$toShortString$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((self__.d instanceof cljs.core.logic.LCons))
{return [cljs.core.str(self__.a),cljs.core.str(" "),cljs.core.str(cljs.core.logic.protocols.toShortString.call(null,self__.d))].join('');
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return [cljs.core.str(self__.a),cljs.core.str(" . "),cljs.core.str(self__.d)].join('');
} else
{return null;
}
}
});
cljs.core.logic.LCons.prototype.cljs$core$logic$protocols$ITreeTerm$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$protocols$IOccursCheckTerm$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$protocols$IOccursCheckTerm$occurs_check_term$arity$3 = (function (v,x,s){var self__ = this;
var v__$1 = this;var v__$2 = v__$1;var x__$1 = x;var s__$1 = s;while(true){
if(cljs.core.truth_(cljs.core.logic.lcons_QMARK_.call(null,v__$2)))
{var or__6289__auto__ = cljs.core.logic.occurs_check.call(null,s__$1,x__$1,cljs.core.logic.protocols.lfirst.call(null,v__$2));if(cljs.core.truth_(or__6289__auto__))
{return or__6289__auto__;
} else
{{
var G__119764 = cljs.core.logic.protocols.lnext.call(null,v__$2);
var G__119765 = x__$1;
var G__119766 = s__$1;
v__$2 = G__119764;
x__$1 = G__119765;
s__$1 = G__119766;
continue;
}
}
} else
{return cljs.core.logic.occurs_check.call(null,s__$1,x__$1,v__$2);
}
break;
}
});
cljs.core.logic.LCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,o){var self__ = this;
var this$__$1 = this;var or__6289__auto__ = (this$__$1 === o);if(or__6289__auto__)
{return or__6289__auto__;
} else
{var and__6277__auto__ = (o instanceof cljs.core.logic.LCons);if(and__6277__auto__)
{var me = this$__$1;var you = o;while(true){
if((me == null))
{return (you == null);
} else
{if(cljs.core.logic.lvar_QMARK_.call(null,me))
{return true;
} else
{if(cljs.core.logic.lvar_QMARK_.call(null,you))
{return true;
} else
{if(cljs.core.truth_((function (){var and__6277__auto____$1 = cljs.core.logic.lcons_QMARK_.call(null,me);if(cljs.core.truth_(and__6277__auto____$1))
{return cljs.core.logic.lcons_QMARK_.call(null,you);
} else
{return and__6277__auto____$1;
}
})()))
{var mef = cljs.core.logic.protocols.lfirst.call(null,me);var youf = cljs.core.logic.protocols.lfirst.call(null,you);var and__6277__auto____$1 = (cljs.core._EQ_.call(null,mef,youf)) || (cljs.core.logic.lvar_QMARK_.call(null,mef)) || (cljs.core.logic.lvar_QMARK_.call(null,youf));if(and__6277__auto____$1)
{{
var G__119767 = cljs.core.logic.protocols.lnext.call(null,me);
var G__119768 = cljs.core.logic.protocols.lnext.call(null,you);
me = G__119767;
you = G__119768;
continue;
}
} else
{return and__6277__auto____$1;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core._EQ_.call(null,me,you);
} else
{return null;
}
}
}
}
}
break;
}
} else
{return and__6277__auto__;
}
}
});
cljs.core.logic.LCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,new_meta){var self__ = this;
var this$__$1 = this;return (new cljs.core.logic.LCons(self__.a,self__.d,self__.cache,new_meta));
});
cljs.core.logic.LCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.meta;
});
cljs.core.logic.LCons.prototype.cljs$core$logic$protocols$IBuildTerm$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$protocols$IBuildTerm$build_term$arity$2 = (function (u,s){var self__ = this;
var u__$1 = this;var u__$2 = u__$1;var s__$1 = s;while(true){
if(cljs.core.truth_(cljs.core.logic.lcons_QMARK_.call(null,u__$2)))
{{
var G__119769 = cljs.core.logic.protocols.lnext.call(null,u__$2);
var G__119770 = cljs.core.logic.build.call(null,s__$1,cljs.core.logic.protocols.lfirst.call(null,u__$2));
u__$2 = G__119769;
s__$1 = G__119770;
continue;
}
} else
{return cljs.core.logic.build.call(null,s__$1,u__$2);
}
break;
}
});
cljs.core.logic.__GT_LCons = (function __GT_LCons(a,d,cache,meta){return (new cljs.core.logic.LCons(a,d,cache,meta));
});
/**
* Constructs a sequence a with an improper tail d if d is a logic variable.
*/
cljs.core.logic.lcons = (function lcons(a,d){if((cljs.core.coll_QMARK_.call(null,d)) || ((d == null)))
{return cljs.core.cons.call(null,a,cljs.core.seq.call(null,d));
} else
{return (new cljs.core.logic.LCons(a,d,-1,null));
}
});
cljs.core.logic.lcons_QMARK_ = (function lcons_QMARK_(x){return (x instanceof cljs.core.logic.LCons);
});
cljs.core.logic.tree_term_QMARK_ = (function tree_term_QMARK_(x){var or__6289__auto__ = cljs.core.coll_QMARK_.call(null,x);if(or__6289__auto__)
{return or__6289__auto__;
} else
{var G__119774 = x;if(G__119774)
{var bit__6915__auto__ = null;if(cljs.core.truth_((function (){var or__6289__auto____$1 = bit__6915__auto__;if(cljs.core.truth_(or__6289__auto____$1))
{return or__6289__auto____$1;
} else
{return G__119774.cljs$core$logic$protocols$ITreeTerm$;
}
})()))
{return true;
} else
{if((!G__119774.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.logic.protocols.ITreeTerm,G__119774);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.logic.protocols.ITreeTerm,G__119774);
}
}
});
cljs.core.logic.unify_with_sequential_STAR_ = (function unify_with_sequential_STAR_(u,v,s){if(cljs.core.sequential_QMARK_.call(null,v))
{if((cljs.core.counted_QMARK_.call(null,u)) && (cljs.core.counted_QMARK_.call(null,v)) && (!(cljs.core._EQ_.call(null,cljs.core.count.call(null,u),cljs.core.count.call(null,v)))))
{return null;
} else
{var u__$1 = cljs.core._seq.call(null,u);var v__$1 = cljs.core._seq.call(null,v);var s__$1 = s;while(true){
if(!((u__$1 == null)))
{if(!((v__$1 == null)))
{var temp__4096__auto__ = cljs.core.logic.unify.call(null,s__$1,cljs.core.first.call(null,u__$1),cljs.core.first.call(null,v__$1));if(cljs.core.truth_(temp__4096__auto__))
{var s__$2 = temp__4096__auto__;{
var G__119775 = cljs.core.next.call(null,u__$1);
var G__119776 = cljs.core.next.call(null,v__$1);
var G__119777 = s__$2;
u__$1 = G__119775;
v__$1 = G__119776;
s__$1 = G__119777;
continue;
}
} else
{return null;
}
} else
{return null;
}
} else
{if(!((v__$1 == null)))
{return null;
} else
{return s__$1;
}
}
break;
}
}
} else
{if(cljs.core.logic.lcons_QMARK_.call(null,v))
{return cljs.core.logic.protocols.unify_terms.call(null,v,u,s);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
});
cljs.core.logic.unify_with_map_STAR_ = (function unify_with_map_STAR_(u,v,s){if(cljs.core._EQ_.call(null,cljs.core.count.call(null,u),cljs.core.count.call(null,v)))
{var ks = cljs.core.keys.call(null,u);var s__$1 = s;while(true){
if(cljs.core.seq.call(null,ks))
{var kf = cljs.core.first.call(null,ks);var vf = cljs.core.get.call(null,v,kf,new cljs.core.Keyword("cljs.core.logic","not-found","cljs.core.logic/not-found",3358757009));if(cljs.core.keyword_identical_QMARK_.call(null,vf,new cljs.core.Keyword("cljs.core.logic","not-found","cljs.core.logic/not-found",3358757009)))
{return null;
} else
{var temp__4096__auto__ = cljs.core.logic.unify.call(null,s__$1,cljs.core.get.call(null,u,kf),vf);if(cljs.core.truth_(temp__4096__auto__))
{var s__$2 = temp__4096__auto__;{
var G__119778 = cljs.core.next.call(null,ks);
var G__119779 = s__$2;
ks = G__119778;
s__$1 = G__119779;
continue;
}
} else
{return null;
}
}
} else
{return s__$1;
}
break;
}
} else
{return null;
}
});
(cljs.core.logic.protocols.IUnifyTerms["_"] = true);
(cljs.core.logic.protocols.unify_terms["_"] = (function (u,v,s){if(cljs.core.sequential_QMARK_.call(null,u))
{return cljs.core.logic.unify_with_sequential_STAR_.call(null,u,v,s);
} else
{if(cljs.core.map_QMARK_.call(null,u))
{if((function (){var G__119780 = v;if(G__119780)
{var bit__6915__auto__ = null;if(cljs.core.truth_((function (){var or__6289__auto__ = bit__6915__auto__;if(cljs.core.truth_(or__6289__auto__))
{return or__6289__auto__;
} else
{return G__119780.cljs$core$logic$protocols$IUnifyWithRecord$;
}
})()))
{return true;
} else
{if((!G__119780.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.logic.protocols.IUnifyWithRecord,G__119780);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.logic.protocols.IUnifyWithRecord,G__119780);
}
})())
{return cljs.core.logic.protocols.unify_with_record.call(null,v,u,s);
} else
{if(cljs.core.map_QMARK_.call(null,v))
{return cljs.core.logic.unify_with_map_STAR_.call(null,u,v,s);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,u,v))
{return s;
} else
{return null;
}
} else
{return null;
}
}
}
}));
(cljs.core.logic.protocols.IUnifyTerms["null"] = true);
(cljs.core.logic.protocols.unify_terms["null"] = (function (u,v,s){if((v == null))
{return s;
} else
{return null;
}
}));
(cljs.core.logic.protocols.IReifyTerm["_"] = true);
(cljs.core.logic.protocols.reify_term["_"] = (function (v,s){if(cljs.core.coll_QMARK_.call(null,v))
{var v__$1 = v;var s__$1 = s;while(true){
if(cljs.core.seq.call(null,v__$1))
{{
var G__119781 = cljs.core.next.call(null,v__$1);
var G__119782 = cljs.core.logic._reify_STAR_.call(null,s__$1,cljs.core.first.call(null,v__$1));
v__$1 = G__119781;
s__$1 = G__119782;
continue;
}
} else
{return s__$1;
}
break;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return s;
} else
{return null;
}
}
}));
(cljs.core.logic.protocols.IReifyTerm["null"] = true);
(cljs.core.logic.protocols.reify_term["null"] = (function (v,s){return s;
}));
cljs.core.logic.walk_record_term = (function walk_record_term(v,f){return cljs.core.with_meta.call(null,(function (){var v__$1 = v;var r = cljs.core.logic.protocols._uninitialized.call(null,v__$1);while(true){
if(cljs.core.seq.call(null,v__$1))
{var vec__119784 = cljs.core.first.call(null,v__$1);var vfk = cljs.core.nth.call(null,vec__119784,0,null);var vfv = cljs.core.nth.call(null,vec__119784,1,null);{
var G__119785 = cljs.core.next.call(null,v__$1);
var G__119786 = cljs.core.assoc.call(null,r,cljs.core.logic.protocols.walk_term.call(null,f.call(null,vfk),f),cljs.core.logic.protocols.walk_term.call(null,f.call(null,vfv),f));
v__$1 = G__119785;
r = G__119786;
continue;
}
} else
{return r;
}
break;
}
})(),cljs.core.meta.call(null,v));
});
cljs.core.logic.walk_term_map_STAR_ = (function walk_term_map_STAR_(v,f){return cljs.core.with_meta.call(null,(function (){var v__$1 = v;var r = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);while(true){
if(cljs.core.seq.call(null,v__$1))
{var vec__119788 = cljs.core.first.call(null,v__$1);var vfk = cljs.core.nth.call(null,vec__119788,0,null);var vfv = cljs.core.nth.call(null,vec__119788,1,null);{
var G__119789 = cljs.core.next.call(null,v__$1);
var G__119790 = cljs.core.assoc_BANG_.call(null,r,cljs.core.logic.protocols.walk_term.call(null,f.call(null,vfk),f),cljs.core.logic.protocols.walk_term.call(null,f.call(null,vfv),f));
v__$1 = G__119789;
r = G__119790;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,r);
}
break;
}
})(),cljs.core.meta.call(null,v));
});
cljs.core.PersistentVector.prototype.cljs$core$logic$protocols$IWalkTerm$ = true;
cljs.core.PersistentVector.prototype.cljs$core$logic$protocols$IWalkTerm$walk_term$arity$2 = (function (v,f){var v__$1 = this;return cljs.core.with_meta.call(null,(function (){var v__$2 = v__$1;var r = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);while(true){
if(cljs.core.seq.call(null,v__$2))
{{
var G__119792 = cljs.core.next.call(null,v__$2);
var G__119793 = cljs.core.conj_BANG_.call(null,r,cljs.core.logic.protocols.walk_term.call(null,f.call(null,cljs.core.first.call(null,v__$2)),f));
v__$2 = G__119792;
r = G__119793;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,r);
}
break;
}
})(),cljs.core.meta.call(null,v__$1));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$logic$protocols$IWalkTerm$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$logic$protocols$IWalkTerm$walk_term$arity$2 = (function (v,f){var v__$1 = this;return cljs.core.logic.walk_term_map_STAR_.call(null,v__$1,f);
});
cljs.core.PersistentHashMap.prototype.cljs$core$logic$protocols$IWalkTerm$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$logic$protocols$IWalkTerm$walk_term$arity$2 = (function (v,f){var v__$1 = this;return cljs.core.logic.walk_term_map_STAR_.call(null,v__$1,f);
});
(cljs.core.logic.protocols.IWalkTerm["_"] = true);
(cljs.core.logic.protocols.walk_term["_"] = (function (v,f){if(cljs.core.seq_QMARK_.call(null,v))
{return cljs.core.with_meta.call(null,cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__119791_SHARP_){return cljs.core.logic.protocols.walk_term.call(null,f.call(null,p1__119791_SHARP_),f);
}),v)),cljs.core.meta.call(null,v));
} else
{if(cljs.core.logic.record_QMARK_.call(null,v))
{return cljs.core.logic.walk_record_term.call(null,v,f);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return f.call(null,v);
} else
{return null;
}
}
}
}));
(cljs.core.logic.protocols.IWalkTerm["null"] = true);
(cljs.core.logic.protocols.walk_term["null"] = (function (v,f){return f.call(null,null);
}));
(cljs.core.logic.protocols.IOccursCheckTerm["_"] = true);
(cljs.core.logic.protocols.occurs_check_term["_"] = (function (v,x,s){if(cljs.core.coll_QMARK_.call(null,v))
{var v__$1 = v;var x__$1 = x;var s__$1 = s;while(true){
if(cljs.core.seq.call(null,v__$1))
{var or__6289__auto__ = cljs.core.logic.occurs_check.call(null,s__$1,x__$1,cljs.core.first.call(null,v__$1));if(cljs.core.truth_(or__6289__auto__))
{return or__6289__auto__;
} else
{{
var G__119794 = cljs.core.next.call(null,v__$1);
var G__119795 = x__$1;
var G__119796 = s__$1;
v__$1 = G__119794;
x__$1 = G__119795;
s__$1 = G__119796;
continue;
}
}
} else
{return false;
}
break;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return false;
} else
{return null;
}
}
}));
(cljs.core.logic.protocols.IOccursCheckTerm["null"] = true);
(cljs.core.logic.protocols.occurs_check_term["null"] = (function (v,x,s){return false;
}));
(cljs.core.logic.protocols.IBuildTerm["_"] = true);
(cljs.core.logic.protocols.build_term["_"] = (function (u,s){if(cljs.core.coll_QMARK_.call(null,u))
{return cljs.core.reduce.call(null,cljs.core.logic.build,s,u);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return s;
} else
{return null;
}
}
}));
(cljs.core.logic.protocols.IBuildTerm["null"] = true);
(cljs.core.logic.protocols.build_term["null"] = (function (u,s){return s;
}));
cljs.core.logic.composeg = (function() {
var composeg = null;
var composeg__0 = (function (){return cljs.core.identity;
});
var composeg__2 = (function (g0,g1){return (function (a){var a__$1 = g0.call(null,a);var and__6277__auto__ = a__$1;if(cljs.core.truth_(and__6277__auto__))
{return g1.call(null,a__$1);
} else
{return and__6277__auto__;
}
});
});
composeg = function(g0,g1){
switch(arguments.length){
case 0:
return composeg__0.call(this);
case 2:
return composeg__2.call(this,g0,g1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
composeg.cljs$core$IFn$_invoke$arity$0 = composeg__0;
composeg.cljs$core$IFn$_invoke$arity$2 = composeg__2;
return composeg;
})()
;

/**
* @constructor
*/
cljs.core.logic.Choice = (function (a,f){
this.a = a;
this.f = f;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 256;
})
cljs.core.logic.Choice.cljs$lang$type = true;
cljs.core.logic.Choice.cljs$lang$ctorStr = "cljs.core.logic/Choice";
cljs.core.logic.Choice.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.logic/Choice");
});
cljs.core.logic.Choice.prototype.cljs$core$logic$protocols$ITake$ = true;
cljs.core.logic.Choice.prototype.cljs$core$logic$protocols$ITake$take_STAR_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,self__.a,(new cljs.core.LazySeq(null,(function (){return cljs.core.logic.protocols.take_STAR_.call(null,self__.f);
}),null,null)));
}),null,null));
});
cljs.core.logic.Choice.prototype.cljs$core$logic$protocols$IMPlus$ = true;
cljs.core.logic.Choice.prototype.cljs$core$logic$protocols$IMPlus$mplus$arity$2 = (function (this$,fp){var self__ = this;
var this$__$1 = this;return (new cljs.core.logic.Choice(self__.a,(function (){return cljs.core.logic.protocols.mplus.call(null,fp.call(null),self__.f);
})));
});
cljs.core.logic.Choice.prototype.cljs$core$logic$protocols$IBind$ = true;
cljs.core.logic.Choice.prototype.cljs$core$logic$protocols$IBind$bind$arity$2 = (function (this$,g){var self__ = this;
var this$__$1 = this;return cljs.core.logic.protocols.mplus.call(null,g.call(null,self__.a),(function (){return cljs.core.logic.protocols.bind.call(null,self__.f,g);
}));
});
cljs.core.logic.Choice.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;return cljs.core._lookup.call(null,this$__$1,k,null);
});
cljs.core.logic.Choice.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){var self__ = this;
var this$__$1 = this;var G__119797 = k;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"a","a",1013904339),G__119797))
{return self__.a;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return not_found;
} else
{return null;
}
}
});
cljs.core.logic.__GT_Choice = (function __GT_Choice(a,f){return (new cljs.core.logic.Choice(a,f));
});
cljs.core.logic.choice = (function choice(a,f){return (new cljs.core.logic.Choice(a,f));
});
(cljs.core.logic.protocols.ITake["null"] = true);
(cljs.core.logic.protocols.take_STAR_["null"] = (function (_){return cljs.core.List.EMPTY;
}));
(cljs.core.logic.protocols.IMPlus["null"] = true);
(cljs.core.logic.protocols.mplus["null"] = (function (_,f){return f.call(null);
}));
(cljs.core.logic.protocols.IBind["null"] = true);
(cljs.core.logic.protocols.bind["null"] = (function (_,g){return null;
}));
(cljs.core.logic.protocols.IBind["_"] = true);
(cljs.core.logic.protocols.bind["_"] = (function (this$,g){if(cljs.core.fn_QMARK_.call(null,this$))
{return (function _inc(){return cljs.core.logic.protocols.bind.call(null,this$.call(null),g);
});
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.ex_info.call(null,"No protocol method",cljs.core.PersistentArrayMap.EMPTY);
} else
{return null;
}
}
}));
(cljs.core.logic.protocols.IMPlus["_"] = true);
(cljs.core.logic.protocols.mplus["_"] = (function (this$,f){if(cljs.core.fn_QMARK_.call(null,this$))
{return (function _inc(){return cljs.core.logic.protocols.mplus.call(null,f.call(null),this$);
});
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return (new cljs.core.logic.Choice(this$,f));
} else
{return null;
}
}
}));
(cljs.core.logic.protocols.ITake["_"] = true);
(cljs.core.logic.protocols.take_STAR_["_"] = (function (this$){if(cljs.core.fn_QMARK_.call(null,this$))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.logic.protocols.take_STAR_.call(null,this$.call(null));
}),null,null));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return this$;
} else
{return null;
}
}
}));
/**
* A goal that always succeeds.
*/
cljs.core.logic.succeed = (function succeed(a){return a;
});
/**
* A goal that always fails.
*/
cljs.core.logic.fail = (function fail(a){return null;
});
cljs.core.logic.s_SHARP_ = cljs.core.logic.succeed;
cljs.core.logic.u_SHARP_ = cljs.core.logic.fail;
cljs.core.logic.ext_run_csg = (function ext_run_csg(u,v){return (function (a){return cljs.core.logic.protocols.ext_run_cs.call(null,a,u,v);
});
});
/**
* A goal that attempts to unify terms u and v.
*/
cljs.core.logic._EQ__EQ_ = (function _EQ__EQ_(u,v){return (function (a){var has_cs_QMARK_ = (cljs.core.count.call(null,a.cs) > 0);var ap = cljs.core.logic.unify.call(null,((has_cs_QMARK_)?cljs.core.assoc.call(null,a,new cljs.core.Keyword(null,"vs","vs",1013908015),cljs.core.PersistentVector.EMPTY):a),u,v);var vs = ((has_cs_QMARK_)?new cljs.core.Keyword(null,"vs","vs",1013908015).cljs$core$IFn$_invoke$arity$1(ap):null);var changed_QMARK_ = (cljs.core.count.call(null,vs) > 0);if(changed_QMARK_)
{return cljs.core.logic.run_constraints_STAR_.call(null,vs,ap.cs,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440)).call(null,cljs.core.assoc.call(null,ap,new cljs.core.Keyword(null,"vs","vs",1013908015),null));
} else
{return ap;
}
});
});
cljs.core.logic.solutions = (function() {
var solutions = null;
var solutions__2 = (function (s,g){return solutions.call(null,s,cljs.core.logic.lvar.call(null),g);
});
var solutions__3 = (function (s,q,g){return cljs.core.logic.protocols.take_STAR_.call(null,(function (a__10683__auto__){return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__10683__auto__,g),cljs.core.logic.reifyg.call(null,q));
}).call(null,s));
});
solutions = function(s,q,g){
switch(arguments.length){
case 2:
return solutions__2.call(this,s,q);
case 3:
return solutions__3.call(this,s,q,g);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
solutions.cljs$core$IFn$_invoke$arity$2 = solutions__2;
solutions.cljs$core$IFn$_invoke$arity$3 = solutions__3;
return solutions;
})()
;
cljs.core.logic.Choice.prototype.cljs$core$logic$protocols$IIfA$ = true;
cljs.core.logic.Choice.prototype.cljs$core$logic$protocols$IIfA$ifa$arity$3 = (function (b,gs,c){var b__$1 = this;return cljs.core.reduce.call(null,cljs.core.logic.protocols.bind,b__$1,gs);
});
(cljs.core.logic.protocols.IIfA["_"] = true);
(cljs.core.logic.protocols.ifa["_"] = (function (b,gs,c){if(cljs.core.fn_QMARK_.call(null,b))
{return (function _inc(){return cljs.core.logic.protocols.ifa.call(null,b.call(null),gs,c);
});
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}));
cljs.core.logic.Substitutions.prototype.cljs$core$logic$protocols$IIfA$ = true;
cljs.core.logic.Substitutions.prototype.cljs$core$logic$protocols$IIfA$ifa$arity$3 = (function (b,gs,c){var b__$1 = this;return cljs.core.reduce.call(null,cljs.core.logic.protocols.bind,b__$1,gs);
});
(cljs.core.logic.protocols.IIfA["null"] = true);
(cljs.core.logic.protocols.ifa["null"] = (function (b,gs,c){if(cljs.core.truth_(c))
{return cljs.core.force.call(null,c);
} else
{return null;
}
}));
cljs.core.logic.Choice.prototype.cljs$core$logic$protocols$IIfU$ = true;
cljs.core.logic.Choice.prototype.cljs$core$logic$protocols$IIfU$ifu$arity$3 = (function (b,gs,c){var b__$1 = this;return cljs.core.reduce.call(null,cljs.core.logic.protocols.bind,b__$1.a,gs);
});
(cljs.core.logic.protocols.IIfU["_"] = true);
(cljs.core.logic.protocols.ifu["_"] = (function (b,gs,c){if(cljs.core.fn_QMARK_.call(null,b))
{return (function _inc(){return cljs.core.logic.protocols.ifu.call(null,b.call(null),gs,c);
});
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}));
cljs.core.logic.Substitutions.prototype.cljs$core$logic$protocols$IIfU$ = true;
cljs.core.logic.Substitutions.prototype.cljs$core$logic$protocols$IIfU$ifu$arity$3 = (function (b,gs,c){var b__$1 = this;return cljs.core.reduce.call(null,cljs.core.logic.protocols.bind,b__$1,gs);
});
(cljs.core.logic.protocols.IIfU["null"] = true);
(cljs.core.logic.protocols.ifu["null"] = (function (b,gs,c){if(cljs.core.truth_(c))
{return cljs.core.force.call(null,c);
} else
{return null;
}
}));
cljs.core.logic.onceo = (function onceo(g){return (function (a119799){return cljs.core.logic.protocols.ifu.call(null,g.call(null,a119799),cljs.core.PersistentVector.EMPTY,null);
});
});
/**
* Copies a term u into v. Non-relational.
*/
cljs.core.logic.copy_term = (function copy_term(u,v){return (function (a119801){var u__$1 = cljs.core.logic.walk_STAR_.call(null,a119801,u);return (function (a__10631__auto__){return (function _inc(){return cljs.core.logic.protocols.bind.call(null,a__10631__auto__,cljs.core.logic._EQ__EQ_.call(null,cljs.core.logic.walk_STAR_.call(null,cljs.core.logic.build.call(null,cljs.core.logic.empty_s,u__$1),u__$1),v));
});
}).call(null,a119801);
});
});
/**
* A relation where a is nil
*/
cljs.core.logic.nilo = (function nilo(a){return cljs.core.logic._EQ__EQ_.call(null,null,a);
});
/**
* A relation where a is the empty list
*/
cljs.core.logic.emptyo = (function emptyo(a){return cljs.core.logic._EQ__EQ_.call(null,cljs.core.List.EMPTY,a);
});
/**
* A relation where l is a collection, such that a is the first of l
* and d is the rest of l. If ground d must be bound to a proper tail.
*/
cljs.core.logic.conso = (function conso(a,d,l){return cljs.core.logic._EQ__EQ_.call(null,cljs.core.logic.lcons.call(null,a,d),l);
});
/**
* A relation where l is a collection, such that a is the first of l
*/
cljs.core.logic.firsto = (function firsto(l,a){return (function (a__10631__auto__){return (function _inc(){var d = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"d","d",-1640531427,null));return cljs.core.logic.protocols.bind.call(null,a__10631__auto__,cljs.core.logic.conso.call(null,a,d,l));
});
});
});
/**
* A relation where l is a collection, such that d is the rest of l
*/
cljs.core.logic.resto = (function resto(l,d){return (function (a__10631__auto__){return (function _inc(){var a = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"a","a",-1640531430,null));return cljs.core.logic.protocols.bind.call(null,a__10631__auto__,cljs.core.logic._EQ__EQ_.call(null,cljs.core.logic.lcons.call(null,a,d),l));
});
});
});
/**
* A pseudo-relation that takes a coll and ensures that the goal g
* succeeds on every element of the collection.
*/
cljs.core.logic.everyg = (function everyg(g,coll){return (function (a){var coll__$1 = cljs.core.logic.protocols.walk.call(null,a,coll);return (function everyg_STAR_(g__$1,coll__$2){if(cljs.core.seq.call(null,coll__$2))
{return (function (a__10683__auto__){return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__10683__auto__,g__$1.call(null,cljs.core.first.call(null,coll__$2))),everyg_STAR_.call(null,g__$1,cljs.core.next.call(null,coll__$2)));
});
} else
{return cljs.core.logic.s_SHARP_;
}
}).call(null,g,coll__$1).call(null,a);
});
});
/**
* A relation where l is a collection, such that l contains x.
*/
cljs.core.logic.membero = (function membero(x,l){return (function (a119803){return (function _inc(){return cljs.core.logic.protocols.mplus.call(null,cljs.core.logic.protocols.bind.call(null,a119803,(function (a__10631__auto__){return (function _inc__$1(){var tail = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"tail","tail",-1636979191,null));return cljs.core.logic.protocols.bind.call(null,a__10631__auto__,cljs.core.logic._EQ__EQ_.call(null,cljs.core.logic.lcons.call(null,x,tail),l));
});
})),(function (){return cljs.core.logic.protocols.bind.call(null,a119803,(function (a__10631__auto__){return (function _inc__$1(){var head = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"head","head",-1637333095,null));var tail = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"tail","tail",-1636979191,null));return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__10631__auto__,cljs.core.logic._EQ__EQ_.call(null,cljs.core.logic.lcons.call(null,head,tail),l)),membero.call(null,x,tail));
});
}));
}));
});
});
});
/**
* Like membero but uses to disequality further constraining
* the results. For example, if x and l are ground and x occurs
* multiple times in l, member1o will succeed only once.
*/
cljs.core.logic.member1o = (function member1o(x,l){return (function (a119805){return (function _inc(){return cljs.core.logic.protocols.mplus.call(null,cljs.core.logic.protocols.bind.call(null,a119805,(function (a__10631__auto__){return (function _inc__$1(){var tail = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"tail","tail",-1636979191,null));return cljs.core.logic.protocols.bind.call(null,a__10631__auto__,cljs.core.logic._EQ__EQ_.call(null,cljs.core.logic.lcons.call(null,x,tail),l));
});
})),(function (){return cljs.core.logic.protocols.bind.call(null,a119805,(function (a__10631__auto__){return (function _inc__$1(){var head = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"head","head",-1637333095,null));var tail = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"tail","tail",-1636979191,null));return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__10631__auto__,cljs.core.logic._EQ__EQ_.call(null,cljs.core.logic.lcons.call(null,head,tail),l)),cljs.core.logic._BANG__EQ_.call(null,x,head)),member1o.call(null,x,tail));
});
}));
}));
});
});
});
/**
* A relation where x, y, and z are proper collections,
* such that z is x appended to y
*/
cljs.core.logic.appendo = (function appendo(x,y,z){return (function (a119807){return (function _inc(){return cljs.core.logic.protocols.mplus.call(null,cljs.core.logic.protocols.bind.call(null,a119807,(function (a__10631__auto__){return (function _inc__$1(){return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__10631__auto__,cljs.core.logic._EQ__EQ_.call(null,cljs.core.List.EMPTY,x)),(function (a__10631__auto____$1){return (function _inc__$1(){return cljs.core.logic.protocols.bind.call(null,a__10631__auto____$1,cljs.core.logic._EQ__EQ_.call(null,y,z));
});
}));
});
})),(function (){return cljs.core.logic.protocols.bind.call(null,a119807,(function (a__10631__auto__){return (function _inc__$1(){var a = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"a","a",-1640531430,null));var d = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"d","d",-1640531427,null));return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__10631__auto__,cljs.core.logic._EQ__EQ_.call(null,cljs.core.logic.lcons.call(null,a,d),x)),(function (a__10631__auto____$1){return (function _inc__$1(){var r = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"r","r",-1640531413,null));return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__10631__auto____$1,cljs.core.logic._EQ__EQ_.call(null,cljs.core.logic.lcons.call(null,a,r),z)),appendo.call(null,d,y,r));
});
}));
});
}));
}));
});
});
});
/**
* A relation that will permute xl into the yl. May not
* terminate if xl is not ground.
*/
cljs.core.logic.permuteo = (function permuteo(xl,yl){return (function (a119809){return (function _inc(){return cljs.core.logic.protocols.mplus.call(null,cljs.core.logic.protocols.bind.call(null,a119809,(function (a__10631__auto__){return (function _inc__$1(){return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__10631__auto__,cljs.core.logic._EQ__EQ_.call(null,cljs.core.List.EMPTY,xl)),(function (a__10631__auto____$1){return (function _inc__$1(){return cljs.core.logic.protocols.bind.call(null,a__10631__auto____$1,cljs.core.logic._EQ__EQ_.call(null,cljs.core.List.EMPTY,yl));
});
}));
});
})),(function (){return cljs.core.logic.protocols.bind.call(null,a119809,(function (a__10631__auto__){return (function _inc__$1(){var xs = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"xs","xs",-1640527692,null));var x = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"x","x",-1640531407,null));return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__10631__auto__,cljs.core.logic._EQ__EQ_.call(null,cljs.core.logic.lcons.call(null,x,xs),xl)),(function (a__10631__auto____$1){return (function _inc__$1(){var ys = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"ys","ys",-1640527661,null));return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__10631__auto____$1,permuteo.call(null,xs,ys)),cljs.core.logic.rembero.call(null,x,yl,ys));
});
}));
});
}));
}));
});
});
});
cljs.core.logic.to_stream = (function to_stream(aseq){var aseq__$1 = cljs.core.drop_while.call(null,cljs.core.nil_QMARK_,aseq);if(cljs.core.seq.call(null,aseq__$1))
{return cljs.core.logic.choice.call(null,cljs.core.first.call(null,aseq__$1),(function (){return to_stream.call(null,cljs.core.next.call(null,aseq__$1));
}));
} else
{return null;
}
});

/**
* @constructor
*/
cljs.core.logic.AnswerCache = (function (ansl,anss,_meta){
this.ansl = ansl;
this.anss = anss;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2147877120;
})
cljs.core.logic.AnswerCache.cljs$lang$type = true;
cljs.core.logic.AnswerCache.cljs$lang$ctorStr = "cljs.core.logic/AnswerCache";
cljs.core.logic.AnswerCache.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.logic/AnswerCache");
});
cljs.core.logic.AnswerCache.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,opts){var self__ = this;
var x__$1 = this;return cljs.core._write.call(null,writer,[cljs.core.str(x__$1)].join(''));
});
cljs.core.logic.AnswerCache.prototype.cljs$core$logic$protocols$IAnswerCache$ = true;
cljs.core.logic.AnswerCache.prototype.cljs$core$logic$protocols$IAnswerCache$_add$arity$2 = (function (this$,x){var self__ = this;
var this$__$1 = this;return (new cljs.core.logic.AnswerCache(cljs.core.conj.call(null,self__.ansl,x),cljs.core.conj.call(null,self__.anss,x),self__._meta));
});
cljs.core.logic.AnswerCache.prototype.cljs$core$logic$protocols$IAnswerCache$_cached_QMARK_$arity$2 = (function (_,x){var self__ = this;
var ___$1 = this;var anss__$1 = self__.anss;return cljs.core.contains_QMARK_.call(null,anss__$1,x);
});
cljs.core.logic.AnswerCache.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;return cljs.core._lookup.call(null,this$__$1,k,null);
});
cljs.core.logic.AnswerCache.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){var self__ = this;
var this$__$1 = this;var G__119810 = k;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"anss","anss",1016903359),G__119810))
{return self__.anss;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ansl","ansl",1016903352),G__119810))
{return self__.ansl;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.logic.AnswerCache.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){var self__ = this;
var ___$1 = this;return (new cljs.core.logic.AnswerCache(self__.ansl,self__.anss,new_meta));
});
cljs.core.logic.AnswerCache.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__._meta;
});
cljs.core.logic.AnswerCache.prototype.toString = (function (){var self__ = this;
var this$ = this;return [cljs.core.str("<answer-cache:"),cljs.core.str(cljs.core.pr_str.call(null,self__.ansl)),cljs.core.str(">")].join('');
});
cljs.core.logic.__GT_AnswerCache = (function __GT_AnswerCache(ansl,anss,_meta){return (new cljs.core.logic.AnswerCache(ansl,anss,_meta));
});
cljs.core.logic.answer_cache = (function answer_cache(){return (new cljs.core.logic.AnswerCache(cljs.core.List.EMPTY,cljs.core.PersistentHashSet.EMPTY,null));
});

/**
* @constructor
* @param {*} cache
* @param {*} ansv_STAR_
* @param {*} f
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
cljs.core.logic.SuspendedStream = (function (cache,ansv_STAR_,f,__meta,__extmap){
this.cache = cache;
this.ansv_STAR_ = ansv_STAR_;
this.f = f;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>3){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
cljs.core.logic.SuspendedStream.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6846__auto__){var self__ = this;
var this__6846__auto____$1 = this;var h__6700__auto__ = self__.__hash;if(!((h__6700__auto__ == null)))
{return h__6700__auto__;
} else
{var h__6700__auto____$1 = cljs.core.hash_imap.call(null,this__6846__auto____$1);self__.__hash = h__6700__auto____$1;
return h__6700__auto____$1;
}
});
cljs.core.logic.SuspendedStream.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6851__auto__,k__6852__auto__){var self__ = this;
var this__6851__auto____$1 = this;return cljs.core._lookup.call(null,this__6851__auto____$1,k__6852__auto__,null);
});
cljs.core.logic.SuspendedStream.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6853__auto__,k119812,else__6854__auto__){var self__ = this;
var this__6853__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k119812,new cljs.core.Keyword(null,"cache","cache",1108321012)))
{return self__.cache;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k119812,new cljs.core.Keyword(null,"ansv*","ansv*",1106877004)))
{return self__.ansv_STAR_;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k119812,new cljs.core.Keyword(null,"f","f",1013904344)))
{return self__.f;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k119812,else__6854__auto__);
} else
{return null;
}
}
}
}
});
cljs.core.logic.SuspendedStream.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6858__auto__,k__6859__auto__,G__119811){var self__ = this;
var this__6858__auto____$1 = this;var pred__119814 = cljs.core.keyword_identical_QMARK_;var expr__119815 = k__6859__auto__;if(cljs.core.truth_(pred__119814.call(null,new cljs.core.Keyword(null,"cache","cache",1108321012),expr__119815)))
{return (new cljs.core.logic.SuspendedStream(G__119811,self__.ansv_STAR_,self__.f,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__119814.call(null,new cljs.core.Keyword(null,"ansv*","ansv*",1106877004),expr__119815)))
{return (new cljs.core.logic.SuspendedStream(self__.cache,G__119811,self__.f,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__119814.call(null,new cljs.core.Keyword(null,"f","f",1013904344),expr__119815)))
{return (new cljs.core.logic.SuspendedStream(self__.cache,self__.ansv_STAR_,G__119811,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.logic.SuspendedStream(self__.cache,self__.ansv_STAR_,self__.f,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6859__auto__,G__119811),null));
}
}
}
});
cljs.core.logic.SuspendedStream.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6865__auto__,writer__6866__auto__,opts__6867__auto__){var self__ = this;
var this__6865__auto____$1 = this;var pr_pair__6868__auto__ = (function (keyval__6869__auto__){return cljs.core.pr_sequential_writer.call(null,writer__6866__auto__,cljs.core.pr_writer,""," ","",opts__6867__auto__,keyval__6869__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__6866__auto__,pr_pair__6868__auto__,"#cljs.core.logic.SuspendedStream{",", ","}",opts__6867__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cache","cache",1108321012),self__.cache],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ansv*","ansv*",1106877004),self__.ansv_STAR_],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"f","f",1013904344),self__.f],null))], null),self__.__extmap));
});
cljs.core.logic.SuspendedStream.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6856__auto__,entry__6857__auto__){var self__ = this;
var this__6856__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__6857__auto__))
{return cljs.core._assoc.call(null,this__6856__auto____$1,cljs.core._nth.call(null,entry__6857__auto__,0),cljs.core._nth.call(null,entry__6857__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__6856__auto____$1,entry__6857__auto__);
}
});
cljs.core.logic.SuspendedStream.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6863__auto__){var self__ = this;
var this__6863__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cache","cache",1108321012),self__.cache],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ansv*","ansv*",1106877004),self__.ansv_STAR_],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"f","f",1013904344),self__.f],null))], null),self__.__extmap));
});
cljs.core.logic.SuspendedStream.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6855__auto__){var self__ = this;
var this__6855__auto____$1 = this;return (3 + cljs.core.count.call(null,self__.__extmap));
});
cljs.core.logic.SuspendedStream.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6847__auto__,other__6848__auto__){var self__ = this;
var this__6847__auto____$1 = this;if(cljs.core.truth_((function (){var and__6277__auto__ = other__6848__auto__;if(cljs.core.truth_(and__6277__auto__))
{return ((this__6847__auto____$1.constructor === other__6848__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__6847__auto____$1,other__6848__auto__));
} else
{return and__6277__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs.core.logic.SuspendedStream.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6850__auto__,G__119811){var self__ = this;
var this__6850__auto____$1 = this;return (new cljs.core.logic.SuspendedStream(self__.cache,self__.ansv_STAR_,self__.f,G__119811,self__.__extmap,self__.__hash));
});
cljs.core.logic.SuspendedStream.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6849__auto__){var self__ = this;
var this__6849__auto____$1 = this;return self__.__meta;
});
cljs.core.logic.SuspendedStream.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6860__auto__,k__6861__auto__){var self__ = this;
var this__6860__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"f","f",1013904344),null,new cljs.core.Keyword(null,"ansv*","ansv*",1106877004),null,new cljs.core.Keyword(null,"cache","cache",1108321012),null], null), null),k__6861__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6860__auto____$1),self__.__meta),k__6861__auto__);
} else
{return (new cljs.core.logic.SuspendedStream(self__.cache,self__.ansv_STAR_,self__.f,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6861__auto__)),null));
}
});
cljs.core.logic.SuspendedStream.prototype.cljs$core$logic$protocols$ISuspendedStream$ = true;
cljs.core.logic.SuspendedStream.prototype.cljs$core$logic$protocols$ISuspendedStream$ready_QMARK_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return !((cljs.core.deref.call(null,self__.cache).ansl === self__.ansv_STAR_));
});
cljs.core.logic.SuspendedStream.cljs$lang$type = true;
cljs.core.logic.SuspendedStream.cljs$lang$ctorPrSeq = (function (this__6885__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.core.logic/SuspendedStream");
});
cljs.core.logic.SuspendedStream.cljs$lang$ctorPrWriter = (function (this__6885__auto__,writer__6886__auto__){return cljs.core._write.call(null,writer__6886__auto__,"cljs.core.logic/SuspendedStream");
});
cljs.core.logic.__GT_SuspendedStream = (function __GT_SuspendedStream(cache,ansv_STAR_,f){return (new cljs.core.logic.SuspendedStream(cache,ansv_STAR_,f));
});
cljs.core.logic.map__GT_SuspendedStream = (function map__GT_SuspendedStream(G__119813){return (new cljs.core.logic.SuspendedStream(new cljs.core.Keyword(null,"cache","cache",1108321012).cljs$core$IFn$_invoke$arity$1(G__119813),new cljs.core.Keyword(null,"ansv*","ansv*",1106877004).cljs$core$IFn$_invoke$arity$1(G__119813),new cljs.core.Keyword(null,"f","f",1013904344).cljs$core$IFn$_invoke$arity$1(G__119813),null,cljs.core.dissoc.call(null,G__119813,new cljs.core.Keyword(null,"cache","cache",1108321012),new cljs.core.Keyword(null,"ansv*","ansv*",1106877004),new cljs.core.Keyword(null,"f","f",1013904344))));
});
cljs.core.logic.make_suspended_stream = (function make_suspended_stream(cache,ansv_STAR_,f){return (new cljs.core.logic.SuspendedStream(cache,ansv_STAR_,f));
});
cljs.core.logic.suspended_stream_QMARK_ = (function suspended_stream_QMARK_(x){return (x instanceof cljs.core.logic.SuspendedStream);
});
cljs.core.logic.waiting_stream_QMARK_ = (function waiting_stream_QMARK_(x){return cljs.core.vector_QMARK_.call(null,x);
});
/**
* Take a waiting stream, a success continuation, and a failure continuation.
* If we don't find any ready suspended streams, invoke the failure
* continuation.
* If we find a ready suspended stream calculate the remainder of the waiting
* stream. If we've reached the fixpoint just call the thunk of the suspended
* stream, otherwise call mplus on the result of the thunk and the remainder
* of the waiting stream. Pass this result to the success contination.
*/
cljs.core.logic.waiting_stream_check = (function waiting_stream_check(w,success_cont,failure_cont){var w__$1 = w;var a = cljs.core.PersistentVector.EMPTY;while(true){
if((w__$1 == null))
{return failure_cont.call(null);
} else
{if(cljs.core.truth_(cljs.core.logic.protocols.ready_QMARK_.call(null,cljs.core.first.call(null,w__$1))))
{return success_cont.call(null,((function (w__$1,a){
return (function (){var ss = cljs.core.first.call(null,w__$1);var f = ss.f;var w__$2 = cljs.core.into.call(null,a,cljs.core.next.call(null,w__$1));if(cljs.core.empty_QMARK_.call(null,w__$2))
{return f.call(null);
} else
{return cljs.core.logic.protocols.mplus.call(null,f.call(null),((function (w__$1,a,ss,f,w__$2){
return (function (){return w__$2;
});})(w__$1,a,ss,f,w__$2))
);
}
});})(w__$1,a))
);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__119817 = cljs.core.next.call(null,w__$1);
var G__119818 = cljs.core.conj.call(null,a,cljs.core.first.call(null,w__$1));
w__$1 = G__119817;
a = G__119818;
continue;
}
} else
{return null;
}
}
}
break;
}
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$protocols$ITabled$ = true;
cljs.core.logic.Substitutions.prototype.cljs$core$logic$protocols$ITabled$_reify_tabled$arity$2 = (function (this$,v){var this$__$1 = this;var v__$1 = cljs.core.logic.protocols.walk.call(null,this$__$1,v);if(cljs.core.logic.lvar_QMARK_.call(null,v__$1))
{return cljs.core.logic.protocols.ext_no_check.call(null,this$__$1,v__$1,cljs.core.logic.lvar.call(null,cljs.core.count.call(null,this$__$1.s)));
} else
{if(cljs.core.coll_QMARK_.call(null,v__$1))
{return cljs.core.logic.protocols._reify_tabled.call(null,cljs.core.logic.protocols._reify_tabled.call(null,this$__$1,cljs.core.first.call(null,v__$1)),cljs.core.next.call(null,v__$1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return this$__$1;
} else
{return null;
}
}
}
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$protocols$ITabled$reify_tabled$arity$2 = (function (this$,v){var this$__$1 = this;var v__$1 = cljs.core.logic.walk_STAR_.call(null,this$__$1,v);return cljs.core.logic.walk_STAR_.call(null,cljs.core.logic.protocols._reify_tabled.call(null,cljs.core.logic.empty_s,v__$1),v__$1);
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$protocols$ITabled$reuse$arity$5 = (function (this$,argv,cache,start,end){var this$__$1 = this;var start__$1 = (function (){var or__6289__auto__ = start;if(cljs.core.truth_(or__6289__auto__))
{return or__6289__auto__;
} else
{return cljs.core.deref.call(null,cache).ansl;
}
})();var end__$1 = (function (){var or__6289__auto__ = end;if(cljs.core.truth_(or__6289__auto__))
{return or__6289__auto__;
} else
{return 0;
}
})();var reuse_loop = (function reuse_loop(ansv_STAR_){if(cljs.core._EQ_.call(null,cljs.core.count.call(null,ansv_STAR_),end__$1))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.logic.make_suspended_stream.call(null,cache,start__$1,(function (){return cljs.core.logic.protocols.reuse.call(null,this$__$1,argv,cache,cljs.core.deref.call(null,cache).ansl,cljs.core.count.call(null,start__$1));
}))], null);
} else
{var ans = cljs.core.first.call(null,ansv_STAR_);return (new cljs.core.logic.Choice(cljs.core.logic.protocols.subunify.call(null,this$__$1,argv,cljs.core.logic.protocols.reify_tabled.call(null,this$__$1,ans)),(function (){return reuse_loop.call(null,cljs.core.rest.call(null,ansv_STAR_));
})));
}
});
return reuse_loop.call(null,start__$1);
});
cljs.core.logic.Substitutions.prototype.cljs$core$logic$protocols$ITabled$subunify$arity$3 = (function (this$,arg,ans){var this$__$1 = this;var arg__$1 = cljs.core.logic.protocols.walk.call(null,this$__$1,arg);if(cljs.core._EQ_.call(null,arg__$1,ans))
{return this$__$1;
} else
{if(cljs.core.logic.lvar_QMARK_.call(null,arg__$1))
{return cljs.core.logic.protocols.ext_no_check.call(null,this$__$1,arg__$1,ans);
} else
{if(cljs.core.coll_QMARK_.call(null,arg__$1))
{return cljs.core.logic.protocols.subunify.call(null,cljs.core.logic.protocols.subunify.call(null,this$__$1,cljs.core.next.call(null,arg__$1),cljs.core.next.call(null,ans)),cljs.core.first.call(null,arg__$1),cljs.core.first.call(null,ans));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return this$__$1;
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$logic$protocols$ITake$ = true;
cljs.core.PersistentVector.prototype.cljs$core$logic$protocols$ITake$take_STAR_$arity$1 = (function (this$){var this$__$1 = this;return cljs.core.logic.waiting_stream_check.call(null,this$__$1,(function (f){return cljs.core.logic.protocols.take_STAR_.call(null,f);
}),(function (){return cljs.core.List.EMPTY;
}));
});
cljs.core.PersistentVector.prototype.cljs$core$logic$protocols$IMPlus$ = true;
cljs.core.PersistentVector.prototype.cljs$core$logic$protocols$IMPlus$mplus$arity$2 = (function (this$,f){var this$__$1 = this;return cljs.core.logic.waiting_stream_check.call(null,this$__$1,(function (fp){return cljs.core.logic.protocols.mplus.call(null,fp,f);
}),(function (){var a_inf = f.call(null);if(cljs.core.logic.waiting_stream_QMARK_.call(null,a_inf))
{return cljs.core.into.call(null,a_inf,this$__$1);
} else
{return cljs.core.logic.protocols.mplus.call(null,a_inf,(function (){return this$__$1;
}));
}
}));
});
cljs.core.PersistentVector.prototype.cljs$core$logic$protocols$IBind$ = true;
cljs.core.PersistentVector.prototype.cljs$core$logic$protocols$IBind$bind$arity$2 = (function (this$,g){var this$__$1 = this;return cljs.core.logic.waiting_stream_check.call(null,this$__$1,(function (f){return cljs.core.logic.protocols.bind.call(null,f,g);
}),(function (){return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (ss){return cljs.core.logic.make_suspended_stream.call(null,ss.cache,ss.ansv_STAR_,(function (){return cljs.core.logic.protocols.bind.call(null,ss.f.call(null),g);
}));
}),this$__$1));
}));
});
/**
* Take the argument to the goal and check that we don't
* have an alpha equivalent cached answer term in the cache.
* If it doesn't already exist in the cache add the new
* answer term.
*/
cljs.core.logic.master = (function master(argv,cache){return (function (a){var rargv = cljs.core.logic._reify.call(null,a,argv);if(cljs.core.truth_(cljs.core.logic.protocols._cached_QMARK_.call(null,cljs.core.deref.call(null,cache),rargv)))
{return null;
} else
{cljs.core.swap_BANG_.call(null,cache,(function (cache__$1){if(cljs.core.truth_(cljs.core.logic.protocols._cached_QMARK_.call(null,cache__$1,rargv)))
{return cache__$1;
} else
{return cljs.core.logic.protocols._add.call(null,cache__$1,cljs.core.logic.protocols.reify_tabled.call(null,a,argv));
}
}));
return a;
}
});
});
cljs.core.logic.addcg = (function addcg(c){return (function (a){var a__$1 = cljs.core.reduce.call(null,(function (a__$1,x){return cljs.core.logic.protocols.ext_no_check.call(null,a__$1,x,cljs.core.logic.subst_val.call(null,new cljs.core.Keyword("cljs.core.logic","unbound","cljs.core.logic/unbound",1803671316)));
}),a,cljs.core.logic.unbound_rands.call(null,a,c));return cljs.core.assoc.call(null,a__$1,new cljs.core.Keyword(null,"cs","cs",1013907426),cljs.core.logic.protocols.addc.call(null,a__$1.cs,a__$1,c));
});
});
cljs.core.logic.updatecg = (function updatecg(c){return (function (a){return cljs.core.assoc.call(null,a,new cljs.core.Keyword(null,"cs","cs",1013907426),cljs.core.logic.protocols.updatec.call(null,a.cs,a,c));
});
});
cljs.core.logic.remcg = (function remcg(c){return (function (a){return cljs.core.assoc.call(null,a,new cljs.core.Keyword(null,"cs","cs",1013907426),cljs.core.logic.protocols.remc.call(null,a.cs,a,c));
});
});
cljs.core.logic.runcg = (function runcg(c){return (function (a){return cljs.core.assoc.call(null,a,new cljs.core.Keyword(null,"cs","cs",1013907426),cljs.core.logic.protocols.runc.call(null,a.cs,c,true));
});
});
cljs.core.logic.stopcg = (function stopcg(c){return (function (a){return cljs.core.assoc.call(null,a,new cljs.core.Keyword(null,"cs","cs",1013907426),cljs.core.logic.protocols.runc.call(null,a.cs,c,false));
});
});
cljs.core.logic.ientailed_QMARK_ = (function ientailed_QMARK_(c){var G__119820 = c;if(G__119820)
{var bit__6915__auto__ = null;if(cljs.core.truth_((function (){var or__6289__auto__ = bit__6915__auto__;if(cljs.core.truth_(or__6289__auto__))
{return or__6289__auto__;
} else
{return G__119820.cljs$core$logic$protocols$IEntailed$;
}
})()))
{return true;
} else
{if((!G__119820.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.logic.protocols.IEntailed,G__119820);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.logic.protocols.IEntailed,G__119820);
}
});
cljs.core.logic.entailed_QMARK_ = (function entailed_QMARK_(c,c_SINGLEQUOTE_,a){var id = cljs.core.logic.protocols.id.call(null,c);var and__6277__auto__ = (function (){var or__6289__auto__ = new cljs.core.Keyword(null,"cm","cm",1013907420).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"cs","cs",1013907426).cljs$core$IFn$_invoke$arity$1(a)).call(null,id);if(cljs.core.truth_(or__6289__auto__))
{return or__6289__auto__;
} else
{return (id == null);
}
})();if(cljs.core.truth_(and__6277__auto__))
{return cljs.core.logic.protocols._entailed_QMARK_.call(null,c_SINGLEQUOTE_);
} else
{return and__6277__auto__;
}
});
cljs.core.logic.run_constraint = (function run_constraint(c){return (function (a){var c_SINGLEQUOTE_ = cljs.core.logic.protocols._step.call(null,c,a);if((!(cljs.core.logic.ientailed_QMARK_.call(null,c_SINGLEQUOTE_))) || (!(cljs.core.logic.entailed_QMARK_.call(null,c,c_SINGLEQUOTE_,a))))
{if(cljs.core.truth_(cljs.core.logic.protocols._runnable_QMARK_.call(null,c_SINGLEQUOTE_)))
{return cljs.core.logic.composeg.call(null,cljs.core.logic.runcg.call(null,c),cljs.core.logic.composeg.call(null,c_SINGLEQUOTE_,cljs.core.logic.stopcg.call(null,c))).call(null,a);
} else
{return a;
}
} else
{return cljs.core.logic.remcg.call(null,c).call(null,a);
}
});
});
/**
* A goal to run the constraints in cq until it is empty. Of
* course running a constraint may grow cq so this function
* finds the fixpoint.
*/
cljs.core.logic.fix_constraints = (function fix_constraints(a){var a__$1 = a;while(true){
if(cljs.core.truth_(a__$1))
{var cq = a__$1.cq;if((cljs.core.count.call(null,cq) === 0))
{return cljs.core.assoc.call(null,a__$1,new cljs.core.Keyword(null,"cq","cq",1013907424),null);
} else
{var c = cljs.core.first.call(null,cq);{
var G__119821 = cljs.core.logic.run_constraint.call(null,c).call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,a__$1,new cljs.core.Keyword(null,"cq","cq",1013907424),cljs.core.subvec.call(null,a__$1.cq,1)),new cljs.core.Keyword(null,"cqs","cqs",1014002999),cljs.core.disj.call(null,a__$1.cqs,cljs.core.logic.protocols.id.call(null,c))));
a__$1 = G__119821;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.logic.run_constraints = (function run_constraints(xcs){return (function (a){var cq = a.cq;var a__$1 = cljs.core.reduce.call(null,((function (cq){
return (function (a__$1,c){return cljs.core.logic.protocols.queue.call(null,a__$1,c);
});})(cq))
,cljs.core.assoc.call(null,a,new cljs.core.Keyword(null,"cq","cq",1013907424),(function (){var or__6289__auto__ = cq;if(cljs.core.truth_(or__6289__auto__))
{return or__6289__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})()),xcs);if(cljs.core.truth_(cq))
{return a__$1;
} else
{return cljs.core.logic.fix_constraints.call(null,a__$1);
}
});
});
cljs.core.logic.run_constraints_STAR_ = (function run_constraints_STAR_(xs,cs,ws){if(((cljs.core.count.call(null,cs) === 0)) || ((cljs.core.seq.call(null,xs) == null)))
{return cljs.core.logic.s_SHARP_;
} else
{return (function (a){var xcs = cljs.core.logic.protocols.constraints_for.call(null,cs,a,cljs.core.first.call(null,xs),ws);if(cljs.core.seq.call(null,xcs))
{return cljs.core.logic.composeg.call(null,cljs.core.logic.run_constraints.call(null,xcs),run_constraints_STAR_.call(null,cljs.core.next.call(null,xs),cs,ws)).call(null,a);
} else
{return run_constraints_STAR_.call(null,cljs.core.next.call(null,xs),cs,ws).call(null,a);
}
});
}
});
cljs.core.logic.verify_all_bound = (function verify_all_bound(a,constrained){var verify_all_bound_STAR_ = (function verify_all_bound_STAR_(a__$1,constrained__$1){while(true){
if(cljs.core.truth_(constrained__$1))
{var x = cljs.core.first.call(null,constrained__$1);if((cljs.core.logic.lvar_QMARK_.call(null,x)) && ((cljs.core.logic.lvar_QMARK_.call(null,cljs.core.logic.protocols.walk.call(null,a__$1,x))) && ((cljs.core.logic.get_dom.call(null,a__$1,x,new cljs.core.Keyword("cljs.core.logic","fd","cljs.core.logic/fd",3673845947)) == null))))
{throw cljs.core.ex_info.call(null,[cljs.core.str("Constrained variable "),cljs.core.str(x),cljs.core.str(" without domain")].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else
{{
var G__119822 = a__$1;
var G__119823 = cljs.core.next.call(null,constrained__$1);
a__$1 = G__119822;
constrained__$1 = G__119823;
continue;
}
}
} else
{return null;
}
break;
}
});
return verify_all_bound_STAR_.call(null,a,cljs.core.seq.call(null,constrained));
});
cljs.core.logic.enforceable_constrained = (function enforceable_constrained(a){var cs = a.cs;var km = cs.km;var cm = cs.cm;var vs = cljs.core.keys.call(null,km);return cljs.core.filter.call(null,(function (v){return cljs.core.some.call(null,(function (cid){var temp__4098__auto__ = cljs.core.get.call(null,cm,cid);if(cljs.core.truth_(temp__4098__auto__))
{var c = temp__4098__auto__;return cljs.core.logic.protocols.enforceable_QMARK_.call(null,c);
} else
{return null;
}
}),cljs.core.get.call(null,km,v));
}),vs);
});
cljs.core.logic.enforce_constraints = (function enforce_constraints(x){return (function (a__10683__auto__){return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__10683__auto__,cljs.core.logic.force_ans.call(null,x)),(function (a){var constrained = cljs.core.logic.enforceable_constrained.call(null,a);cljs.core.logic.verify_all_bound.call(null,a,constrained);
return cljs.core.logic.onceo.call(null,cljs.core.logic.force_ans.call(null,constrained)).call(null,a);
}));
});
});
cljs.core.logic.reify_constraints = (function reify_constraints(v,r,a){var cs = a.cs;var rcs = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (cs){
return (function (p1__119825_SHARP_){return !((p1__119825_SHARP_ == null));
});})(cs))
,cljs.core.map.call(null,((function (cs){
return (function (p1__119824_SHARP_){return cljs.core.logic.protocols._reifyc.call(null,p1__119824_SHARP_,v,r,a);
});})(cs))
,cljs.core.filter.call(null,cljs.core.logic.protocols.reifiable_QMARK_,cljs.core.vals.call(null,cs.cm)))));if(cljs.core.empty_QMARK_.call(null,rcs))
{return cljs.core.logic.choice.call(null,v,cljs.core.logic.empty_f);
} else
{return cljs.core.logic.choice.call(null,cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,v),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"-","-",1013904287)),rcs)),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1618),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,16),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1618),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,29))))),cljs.core.logic.empty_f);
}
});
cljs.core.logic.reifyg = (function reifyg(x){return (function (a__10683__auto__){return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__10683__auto__,cljs.core.logic.enforce_constraints.call(null,x)),(function (a){var v = cljs.core.logic.walk_STAR_.call(null,a,x);var r = cljs.core.logic._reify_STAR_.call(null,cljs.core.with_meta.call(null,cljs.core.logic.empty_s,cljs.core.meta.call(null,a)),v);if((cljs.core.count.call(null,r) === 0))
{return cljs.core.logic.choice.call(null,v,cljs.core.logic.empty_f);
} else
{var v__$1 = cljs.core.logic.walk_STAR_.call(null,r,v);return cljs.core.logic.reify_constraints.call(null,v__$1,r,a);
}
}));
});
});
cljs.core.logic.cgoal = (function cgoal(c){if(typeof cljs.core.logic.t119830 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.t119830 = (function (c,cgoal,meta119831){
this.c = c;
this.cgoal = cgoal;
this.meta119831 = meta119831;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.t119830.cljs$lang$type = true;
cljs.core.logic.t119830.cljs$lang$ctorStr = "cljs.core.logic/t119830";
cljs.core.logic.t119830.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.logic/t119830");
});
cljs.core.logic.t119830.prototype.cljs$core$logic$protocols$IUnwrapConstraint$ = true;
cljs.core.logic.t119830.prototype.cljs$core$logic$protocols$IUnwrapConstraint$_unwrap$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.c;
});
cljs.core.logic.t119830.prototype.call = (function (self__,a){var self__ = this;
var self____$1 = this;var _ = self____$1;var c_SINGLEQUOTE_ = cljs.core.logic.protocols._step.call(null,self__.c,a);if(cljs.core.truth_(cljs.core.logic.protocols._runnable_QMARK_.call(null,c_SINGLEQUOTE_)))
{var temp__4098__auto__ = c_SINGLEQUOTE_.call(null,a);if(cljs.core.truth_(temp__4098__auto__))
{var a__$1 = temp__4098__auto__;var c_SINGLEQUOTE___$1 = cljs.core.logic.protocols._step.call(null,self__.c,a__$1);if((cljs.core.logic.ientailed_QMARK_.call(null,c_SINGLEQUOTE___$1)) && (!(cljs.core.logic.entailed_QMARK_.call(null,self__.c,c_SINGLEQUOTE___$1,a__$1))))
{return cljs.core.logic.addcg.call(null,self__.c).call(null,a__$1);
} else
{return a__$1;
}
} else
{return null;
}
} else
{return cljs.core.logic.addcg.call(null,self__.c).call(null,a);
}
});
cljs.core.logic.t119830.prototype.apply = (function (self__,args119833){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args119833)));
});
cljs.core.logic.t119830.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){var self__ = this;
var _ = this;var c_SINGLEQUOTE_ = cljs.core.logic.protocols._step.call(null,self__.c,a);if(cljs.core.truth_(cljs.core.logic.protocols._runnable_QMARK_.call(null,c_SINGLEQUOTE_)))
{var temp__4098__auto__ = c_SINGLEQUOTE_.call(null,a);if(cljs.core.truth_(temp__4098__auto__))
{var a__$1 = temp__4098__auto__;var c_SINGLEQUOTE___$1 = cljs.core.logic.protocols._step.call(null,self__.c,a__$1);if((cljs.core.logic.ientailed_QMARK_.call(null,c_SINGLEQUOTE___$1)) && (!(cljs.core.logic.entailed_QMARK_.call(null,self__.c,c_SINGLEQUOTE___$1,a__$1))))
{return cljs.core.logic.addcg.call(null,self__.c).call(null,a__$1);
} else
{return a__$1;
}
} else
{return null;
}
} else
{return cljs.core.logic.addcg.call(null,self__.c).call(null,a);
}
});
cljs.core.logic.t119830.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_119832){var self__ = this;
var _119832__$1 = this;return self__.meta119831;
});
cljs.core.logic.t119830.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_119832,meta119831__$1){var self__ = this;
var _119832__$1 = this;return (new cljs.core.logic.t119830(self__.c,self__.cgoal,meta119831__$1));
});
cljs.core.logic.__GT_t119830 = (function __GT_t119830(c__$1,cgoal__$1,meta119831){return (new cljs.core.logic.t119830(c__$1,cgoal__$1,meta119831));
});
}
return (new cljs.core.logic.t119830(c,cgoal,null));
});
cljs.core.logic.get_dom_fd = (function get_dom_fd(a,x){if(cljs.core.logic.lvar_QMARK_.call(null,x))
{return cljs.core.logic.get_dom.call(null,a,x,new cljs.core.Keyword("cljs.core.logic","fd","cljs.core.logic/fd",3673845947));
} else
{return x;
}
});
cljs.core.logic.sort_by_member_count = (function sort_by_member_count(a){return (function (x,y){var dx = cljs.core.logic.get_dom_fd.call(null,a,x);var dy = cljs.core.logic.get_dom_fd.call(null,a,y);return (cljs.core.logic.protocols._member_count.call(null,dx) < cljs.core.logic.protocols._member_count.call(null,dy));
});
});
cljs.core.logic.sort_by_strategy = (function sort_by_strategy(v,x,a){var G__119835 = new cljs.core.Keyword("cljs.core.logic","strategy","cljs.core.logic/strategy",3884554094).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,x));if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.core.logic","ff","cljs.core.logic/ff",3673845945),G__119835))
{return cljs.core.seq.call(null,cljs.core.sort.call(null,cljs.core.logic.sort_by_member_count.call(null,a),v));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return v;
} else
{return null;
}
}
});
cljs.core.logic.LCons.prototype.cljs$core$logic$protocols$IForceAnswerTerm$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$protocols$IForceAnswerTerm$_force_ans$arity$2 = (function (v,x){var v__$1 = this;var loop = (function loop(ys){return (function (a__10683__auto__){return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__10683__auto__,cljs.core.logic.force_ans.call(null,cljs.core.logic.protocols.lfirst.call(null,ys))),((cljs.core.logic.lcons_QMARK_.call(null,cljs.core.logic.protocols.lnext.call(null,ys)))?loop.call(null,cljs.core.logic.protocols.lnext.call(null,ys)):cljs.core.logic.s_SHARP_));
});
});
return loop.call(null,v__$1);
});
(cljs.core.logic.protocols.IForceAnswerTerm["_"] = true);
(cljs.core.logic.protocols._force_ans["_"] = (function (v,x){if(cljs.core.sequential_QMARK_.call(null,v))
{var loop = (function loop(ys){if(cljs.core.truth_(ys))
{return (function (a__10683__auto__){return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__10683__auto__,cljs.core.logic.force_ans.call(null,cljs.core.first.call(null,ys))),(function (a){var temp__4096__auto__ = cljs.core.logic.sort_by_strategy.call(null,cljs.core.next.call(null,ys),x,a);if(cljs.core.truth_(temp__4096__auto__))
{var ys__$1 = temp__4096__auto__;return loop.call(null,ys__$1).call(null,a);
} else
{return a;
}
}));
});
} else
{return cljs.core.logic.s_SHARP_;
}
});
return loop.call(null,cljs.core.seq.call(null,v));
} else
{if(cljs.core.map_QMARK_.call(null,v))
{var loop = (function loop(ys){if(cljs.core.truth_(ys))
{return (function (a__10683__auto__){return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__10683__auto__,cljs.core.logic.force_ans.call(null,cljs.core.val.call(null,cljs.core.first.call(null,ys)))),loop.call(null,cljs.core.next.call(null,ys)));
});
} else
{return cljs.core.logic.s_SHARP_;
}
});
return loop.call(null,cljs.core.seq.call(null,v));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.logic.lvar_QMARK_.call(null,x))
{return cljs.core.logic.ext_run_csg.call(null,x,v);
} else
{return cljs.core.logic.s_SHARP_;
}
} else
{return null;
}
}
}
}));
(cljs.core.logic.protocols.IForceAnswerTerm["null"] = true);
(cljs.core.logic.protocols._force_ans["null"] = (function (v,x){return cljs.core.logic.s_SHARP_;
}));
cljs.core.logic.force_ans = (function force_ans(x){return (function (a){return (function (){var v = cljs.core.logic.protocols.walk.call(null,a,x);if(cljs.core.logic.lvar_QMARK_.call(null,v))
{return cljs.core.logic.protocols._force_ans.call(null,cljs.core.logic.get_dom_fd.call(null,a,x),v);
} else
{var x__$1 = cljs.core.logic.protocols.root_var.call(null,a,x);if(cljs.core.sequential_QMARK_.call(null,v))
{return cljs.core.logic.protocols._force_ans.call(null,cljs.core.logic.sort_by_strategy.call(null,v,x__$1,a),x__$1);
} else
{return cljs.core.logic.protocols._force_ans.call(null,v,x__$1);
}
}
})().call(null,a);
});
});
cljs.core.logic.distribute = (function distribute(v_STAR_,strategy){return (function (a){return cljs.core.logic.add_attr.call(null,a,v_STAR_,new cljs.core.Keyword("cljs.core.logic","strategy","cljs.core.logic/strategy",3884554094),new cljs.core.Keyword("cljs.core.logic","ff","cljs.core.logic/ff",3673845945));
});
});
cljs.core.logic.disunify = (function() {
var disunify = null;
var disunify__3 = (function (s,u,v){return disunify.call(null,s,u,v,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prefixc","prefixc",695243651),cljs.core.PersistentArrayMap.EMPTY], null));
});
var disunify__4 = (function (s,u,v,cs){if((u === v))
{return cs;
} else
{var u__$1 = cljs.core.logic.protocols.walk.call(null,s,u);var v__$1 = cljs.core.logic.protocols.walk.call(null,s,v);if((u__$1 === v__$1))
{return cs;
} else
{if((!(cljs.core.logic.lvar_QMARK_.call(null,u__$1))) && (cljs.core.logic.lvar_QMARK_.call(null,v__$1)))
{return cljs.core.logic.protocols._disunify_terms.call(null,v__$1,u__$1,s,cs);
} else
{return cljs.core.logic.protocols._disunify_terms.call(null,u__$1,v__$1,s,cs);
}
}
}
});
disunify = function(s,u,v,cs){
switch(arguments.length){
case 3:
return disunify__3.call(this,s,u,v);
case 4:
return disunify__4.call(this,s,u,v,cs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
disunify.cljs$core$IFn$_invoke$arity$3 = disunify__3;
disunify.cljs$core$IFn$_invoke$arity$4 = disunify__4;
return disunify;
})()
;
(cljs.core.logic.protocols.IDisunifyTerms["_"] = true);
(cljs.core.logic.protocols._disunify_terms["_"] = (function (u,v,s,cs){if(cljs.core.sequential_QMARK_.call(null,u))
{if(cljs.core.sequential_QMARK_.call(null,v))
{var u__$1 = cljs.core.seq.call(null,u);var v__$1 = cljs.core.seq.call(null,v);var cs__$1 = cs;while(true){
if(u__$1)
{if(v__$1)
{var uv = cljs.core.first.call(null,u__$1);var vv = cljs.core.first.call(null,v__$1);var cs__$2 = cljs.core.logic.disunify.call(null,s,uv,vv,cs__$1);if(cljs.core.truth_(cs__$2))
{{
var G__119838 = cljs.core.next.call(null,u__$1);
var G__119839 = cljs.core.next.call(null,v__$1);
var G__119840 = cs__$2;
u__$1 = G__119838;
v__$1 = G__119839;
cs__$1 = G__119840;
continue;
}
} else
{return null;
}
} else
{return null;
}
} else
{if((v__$1 == null))
{return cs__$1;
} else
{return null;
}
}
break;
}
} else
{return null;
}
} else
{if(cljs.core.map_QMARK_.call(null,u))
{if((cljs.core.map_QMARK_.call(null,v)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,u),cljs.core.count.call(null,v))))
{var ks = cljs.core.seq.call(null,cljs.core.keys.call(null,u));var cs__$1 = cs;while(true){
if(ks)
{var kf = cljs.core.first.call(null,ks);var vf = cljs.core.get.call(null,v,kf,new cljs.core.Keyword("cljs.core.logic","not-found","cljs.core.logic/not-found",3358757009));if(cljs.core._EQ_.call(null,vf,new cljs.core.Keyword("cljs.core.logic","not-found","cljs.core.logic/not-found",3358757009)))
{return null;
} else
{var temp__4096__auto__ = cljs.core.logic.disunify.call(null,s,cljs.core.get.call(null,u,kf),vf,cs__$1);if(cljs.core.truth_(temp__4096__auto__))
{var cs__$2 = temp__4096__auto__;{
var G__119841 = cljs.core.next.call(null,ks);
var G__119842 = cs__$2;
ks = G__119841;
cs__$1 = G__119842;
continue;
}
} else
{return null;
}
}
} else
{return cs__$1;
}
break;
}
} else
{return null;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(!(cljs.core._EQ_.call(null,u,v)))
{return null;
} else
{return cs;
}
} else
{return null;
}
}
}
}));
cljs.core.logic.LVar.prototype.cljs$core$logic$protocols$IDisunifyTerms$ = true;
cljs.core.logic.LVar.prototype.cljs$core$logic$protocols$IDisunifyTerms$_disunify_terms$arity$4 = (function (u,v,s,p__119836){var map__119837 = p__119836;var map__119837__$1 = ((cljs.core.seq_QMARK_.call(null,map__119837))?cljs.core.apply.call(null,cljs.core.hash_map,map__119837):map__119837);var cs = map__119837__$1;var pc = cljs.core.get.call(null,map__119837__$1,new cljs.core.Keyword(null,"prefixc","prefixc",695243651));var u__$1 = this;return cljs.core.assoc.call(null,cs,new cljs.core.Keyword(null,"prefixc","prefixc",695243651),cljs.core.assoc.call(null,pc,u__$1,v));
});
(cljs.core.logic.protocols.IDisunifyTerms["null"] = true);
(cljs.core.logic.protocols._disunify_terms["null"] = (function (u,v,s,cs){if(!((v == null)))
{return null;
} else
{return cs;
}
}));
cljs.core.logic.recover_vars_from_term = (function recover_vars_from_term(x){var r = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);cljs.core.logic.protocols.walk_term.call(null,x,(function (x__$1){if(cljs.core.logic.lvar_QMARK_.call(null,x__$1))
{cljs.core.swap_BANG_.call(null,r,cljs.core.conj,x__$1);
return x__$1;
} else
{return x__$1;
}
}));
return cljs.core.deref.call(null,r);
});
cljs.core.logic.recover_vars = (function recover_vars(p){var p__$1 = cljs.core.seq.call(null,p);var r = cljs.core.PersistentHashSet.EMPTY;while(true){
if(p__$1)
{var vec__119844 = cljs.core.first.call(null,p__$1);var u = cljs.core.nth.call(null,vec__119844,0,null);var v = cljs.core.nth.call(null,vec__119844,1,null);{
var G__119845 = cljs.core.next.call(null,p__$1);
var G__119846 = clojure.set.union.call(null,r,cljs.core.logic.recover_vars_from_term.call(null,u),cljs.core.logic.recover_vars_from_term.call(null,v));
p__$1 = G__119845;
r = G__119846;
continue;
}
} else
{return r;
}
break;
}
});
cljs.core.logic._BANG__EQ_c = (function _BANG__EQ_c(p){if(typeof cljs.core.logic.t119859 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.t119859 = (function (p,_BANG__EQ_c,meta119860){
this.p = p;
this._BANG__EQ_c = _BANG__EQ_c;
this.meta119860 = meta119860;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.t119859.cljs$lang$type = true;
cljs.core.logic.t119859.cljs$lang$ctorStr = "cljs.core.logic/t119859";
cljs.core.logic.t119859.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.logic/t119859");
});
cljs.core.logic.t119859.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$ = true;
cljs.core.logic.t119859.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440),null], null), null);
});
cljs.core.logic.t119859.prototype.cljs$core$logic$protocols$IConstraintOp$ = true;
cljs.core.logic.t119859.prototype.cljs$core$logic$protocols$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic","!=","cljs.core.logic/!=",1019412108,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1838),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1838),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,36)))));
});
cljs.core.logic.t119859.prototype.cljs$core$logic$protocols$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.seq.call(null,cljs.core.logic.recover_vars.call(null,self__.p));
});
cljs.core.logic.t119859.prototype.cljs$core$logic$protocols$IReifiableConstraint$ = true;
cljs.core.logic.t119859.prototype.cljs$core$logic$protocols$IReifiableConstraint$_reifyc$arity$4 = (function (this$,v,r,a){var self__ = this;
var this$__$1 = this;var p_STAR_ = cljs.core.logic._reify.call(null,a,cljs.core.map.call(null,(function (p__119862){var vec__119863 = p__119862;var lhs = cljs.core.nth.call(null,vec__119863,0,null);var rhs = cljs.core.nth.call(null,vec__119863,1,null);return cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,lhs),cljs.core._conj.call(null,cljs.core.List.EMPTY,rhs))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1833),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,48),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1833),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,59)))));
}),self__.p),r);if(cljs.core.empty_QMARK_.call(null,p_STAR_))
{return cljs.core.List.EMPTY;
} else
{return cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"!=","!=",-1640530443,null)),p_STAR_)),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1836),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,12),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1836),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,23)))));
}
});
cljs.core.logic.t119859.prototype.cljs$core$logic$protocols$IWithPrefix$ = true;
cljs.core.logic.t119859.prototype.cljs$core$logic$protocols$IWithPrefix$_with_prefix$arity$2 = (function (_,p__$2){var self__ = this;
var ___$1 = this;return self__._BANG__EQ_c.call(null,p__$2);
});
cljs.core.logic.t119859.prototype.cljs$core$logic$protocols$IPrefix$ = true;
cljs.core.logic.t119859.prototype.cljs$core$logic$protocols$IPrefix$_prefix$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.p;
});
cljs.core.logic.t119859.prototype.cljs$core$logic$protocols$IConstraintStep$ = true;
cljs.core.logic.t119859.prototype.cljs$core$logic$protocols$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;if(typeof cljs.core.logic.t119864 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.t119864 = (function (s,this$,meta119860,p,_BANG__EQ_c,meta119865){
this.s = s;
this.this$ = this$;
this.meta119860 = meta119860;
this.p = p;
this._BANG__EQ_c = _BANG__EQ_c;
this.meta119865 = meta119865;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.t119864.cljs$lang$type = true;
cljs.core.logic.t119864.cljs$lang$ctorStr = "cljs.core.logic/t119864";
cljs.core.logic.t119864.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.logic/t119864");
});
cljs.core.logic.t119864.prototype.cljs$core$logic$protocols$IEntailed$ = true;
cljs.core.logic.t119864.prototype.cljs$core$logic$protocols$IEntailed$_entailed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.empty_QMARK_.call(null,self__.p);
});
cljs.core.logic.t119864.prototype.cljs$core$logic$protocols$IRunnable$ = true;
cljs.core.logic.t119864.prototype.cljs$core$logic$protocols$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.some.call(null,(function (p1__119847_SHARP_){return cljs.core.not_EQ_.call(null,cljs.core.logic.protocols.walk.call(null,self__.s,p1__119847_SHARP_),p1__119847_SHARP_);
}),cljs.core.logic.recover_vars.call(null,self__.p));
});
cljs.core.logic.t119864.prototype.call = (function (self__,s__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;var p__$3 = (function (){var sp = cljs.core.seq.call(null,self__.p);var p__$3 = self__.p;while(true){
if(sp)
{var vec__119868 = cljs.core.first.call(null,sp);var x = cljs.core.nth.call(null,vec__119868,0,null);var v = cljs.core.nth.call(null,vec__119868,1,null);var xv = cljs.core.logic.walk_STAR_.call(null,s__$2,x);var vv = cljs.core.logic.walk_STAR_.call(null,s__$2,v);if(cljs.core._EQ_.call(null,xv,vv))
{{
var G__119870 = cljs.core.next.call(null,sp);
var G__119871 = cljs.core.dissoc.call(null,p__$3,x);
sp = G__119870;
p__$3 = G__119871;
continue;
}
} else
{if((cljs.core.logic.unify.call(null,s__$2,xv,vv) == null))
{return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__119872 = cljs.core.next.call(null,sp);
var G__119873 = cljs.core.assoc.call(null,cljs.core.dissoc.call(null,p__$3,x),xv,vv);
sp = G__119872;
p__$3 = G__119873;
continue;
}
} else
{return null;
}
}
}
} else
{return p__$3;
}
break;
}
})();if(cljs.core.truth_(p__$3))
{if(cljs.core.empty_QMARK_.call(null,p__$3))
{return null;
} else
{return cljs.core.logic.composeg.call(null,cljs.core.logic.remcg.call(null,self__.this$),cljs.core.logic.cgoal.call(null,self__._BANG__EQ_c.call(null,p__$3))).call(null,s__$2);
}
} else
{return cljs.core.logic.remcg.call(null,self__.this$).call(null,s__$2);
}
});
cljs.core.logic.t119864.prototype.apply = (function (self__,args119867){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args119867)));
});
cljs.core.logic.t119864.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
var _ = this;var p__$3 = (function (){var sp = cljs.core.seq.call(null,self__.p);var p__$3 = self__.p;while(true){
if(sp)
{var vec__119869 = cljs.core.first.call(null,sp);var x = cljs.core.nth.call(null,vec__119869,0,null);var v = cljs.core.nth.call(null,vec__119869,1,null);var xv = cljs.core.logic.walk_STAR_.call(null,s__$2,x);var vv = cljs.core.logic.walk_STAR_.call(null,s__$2,v);if(cljs.core._EQ_.call(null,xv,vv))
{{
var G__119874 = cljs.core.next.call(null,sp);
var G__119875 = cljs.core.dissoc.call(null,p__$3,x);
sp = G__119874;
p__$3 = G__119875;
continue;
}
} else
{if((cljs.core.logic.unify.call(null,s__$2,xv,vv) == null))
{return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__119876 = cljs.core.next.call(null,sp);
var G__119877 = cljs.core.assoc.call(null,cljs.core.dissoc.call(null,p__$3,x),xv,vv);
sp = G__119876;
p__$3 = G__119877;
continue;
}
} else
{return null;
}
}
}
} else
{return p__$3;
}
break;
}
})();if(cljs.core.truth_(p__$3))
{if(cljs.core.empty_QMARK_.call(null,p__$3))
{return null;
} else
{return cljs.core.logic.composeg.call(null,cljs.core.logic.remcg.call(null,self__.this$),cljs.core.logic.cgoal.call(null,self__._BANG__EQ_c.call(null,p__$3))).call(null,s__$2);
}
} else
{return cljs.core.logic.remcg.call(null,self__.this$).call(null,s__$2);
}
});
cljs.core.logic.t119864.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_119866){var self__ = this;
var _119866__$1 = this;return self__.meta119865;
});
cljs.core.logic.t119864.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_119866,meta119865__$1){var self__ = this;
var _119866__$1 = this;return (new cljs.core.logic.t119864(self__.s,self__.this$,self__.meta119860,self__.p,self__._BANG__EQ_c,meta119865__$1));
});
cljs.core.logic.__GT_t119864 = (function __GT_t119864(s__$1,this$__$2,meta119860__$1,p__$2,_BANG__EQ_c__$2,meta119865){return (new cljs.core.logic.t119864(s__$1,this$__$2,meta119860__$1,p__$2,_BANG__EQ_c__$2,meta119865));
});
}
return (new cljs.core.logic.t119864(s,this$__$1,self__.meta119860,self__.p,self__._BANG__EQ_c,null));
});
cljs.core.logic.t119859.prototype.cljs$core$logic$protocols$ITreeConstraint$ = true;
cljs.core.logic.t119859.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_119861){var self__ = this;
var _119861__$1 = this;return self__.meta119860;
});
cljs.core.logic.t119859.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_119861,meta119860__$1){var self__ = this;
var _119861__$1 = this;return (new cljs.core.logic.t119859(self__.p,self__._BANG__EQ_c,meta119860__$1));
});
cljs.core.logic.__GT_t119859 = (function __GT_t119859(p__$1,_BANG__EQ_c__$1,meta119860){return (new cljs.core.logic.t119859(p__$1,_BANG__EQ_c__$1,meta119860));
});
}
return (new cljs.core.logic.t119859(p,_BANG__EQ_c,null));
});
/**
* Disequality constraint. Ensures that u and v will never
* unify. u and v can be complex terms.
*/
cljs.core.logic._BANG__EQ_ = (function _BANG__EQ_(u,v){return (function (a){var cs = cljs.core.logic.disunify.call(null,a,u,v);if(!((cs == null)))
{var p = new cljs.core.Keyword(null,"prefixc","prefixc",695243651).cljs$core$IFn$_invoke$arity$1(cs);if(cljs.core.empty_QMARK_.call(null,p))
{return null;
} else
{if(cljs.core.truth_(cljs.core.some.call(null,(function (p__119880){var vec__119881 = p__119880;var u__$1 = cljs.core.nth.call(null,vec__119881,0,null);var v__$1 = cljs.core.nth.call(null,vec__119881,1,null);return (cljs.core.logic.unify.call(null,a,u__$1,v__$1) == null);
}),p)))
{return a;
} else
{return cljs.core.logic.cgoal.call(null,cljs.core.logic._BANG__EQ_c.call(null,p)).call(null,a);
}
}
} else
{return a;
}
});
});
/**
* A relation which guarantees no element of l will unify
* with another element of l.
*/
cljs.core.logic.distincto = (function distincto(l){return (function (a119883){return (function _inc(){return cljs.core.logic.protocols.mplus.call(null,cljs.core.logic.protocols.bind.call(null,a119883,(function (a__10631__auto__){return (function _inc__$1(){return cljs.core.logic.protocols.bind.call(null,a__10631__auto__,cljs.core.logic._EQ__EQ_.call(null,cljs.core.List.EMPTY,l));
});
})),(function (){return cljs.core.logic.protocols.mplus.call(null,cljs.core.logic.protocols.bind.call(null,a119883,(function (a__10631__auto__){return (function _inc__$1(){var h = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"h","h",-1640531423,null));return cljs.core.logic.protocols.bind.call(null,a__10631__auto__,cljs.core.logic._EQ__EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [h], null),l));
});
})),(function (){return cljs.core.logic.protocols.bind.call(null,a119883,(function (a__10631__auto__){return (function _inc__$1(){var t = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"t","t",-1640531411,null));var h1 = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"h1","h1",-1640528254,null));var h0 = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"h0","h0",-1640528255,null));return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__10631__auto__,cljs.core.logic._EQ__EQ_.call(null,cljs.core.logic.lcons.call(null,h0,cljs.core.logic.lcons.call(null,h1,t)),l)),cljs.core.logic._BANG__EQ_.call(null,h0,h1)),distincto.call(null,cljs.core.logic.lcons.call(null,h0,t))),distincto.call(null,cljs.core.logic.lcons.call(null,h1,t)));
});
}));
}));
}));
});
});
});
/**
* A relation between l and o where is removed from
* l exactly one time.
*/
cljs.core.logic.rembero = (function rembero(x,l,o){return (function (a119885){return (function _inc(){return cljs.core.logic.protocols.mplus.call(null,cljs.core.logic.protocols.bind.call(null,a119885,(function (a__10631__auto__){return (function _inc__$1(){var xs = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"xs","xs",-1640527692,null));return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__10631__auto__,cljs.core.logic._EQ__EQ_.call(null,cljs.core.logic.lcons.call(null,x,xs),l)),(function (a__10631__auto____$1){return (function _inc__$1(){return cljs.core.logic.protocols.bind.call(null,a__10631__auto____$1,cljs.core.logic._EQ__EQ_.call(null,xs,o));
});
}));
});
})),(function (){return cljs.core.logic.protocols.bind.call(null,a119885,(function (a__10631__auto__){return (function _inc__$1(){var ys = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"ys","ys",-1640527661,null));var y = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"y","y",-1640531406,null));return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__10631__auto__,cljs.core.logic._EQ__EQ_.call(null,cljs.core.logic.lcons.call(null,y,ys),l)),(function (a__10631__auto____$1){return (function _inc__$1(){var zs = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"zs","zs",-1640527630,null));return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__10631__auto____$1,cljs.core.logic._EQ__EQ_.call(null,cljs.core.logic.lcons.call(null,y,zs),o)),cljs.core.logic._BANG__EQ_.call(null,y,x)),rembero.call(null,x,ys,zs));
});
}));
});
}));
}));
});
});
});
cljs.core.logic.unify_with_pmap_STAR_ = (function unify_with_pmap_STAR_(u,v,s){var ks = cljs.core.keys.call(null,u);var s__$1 = s;while(true){
if(cljs.core.seq.call(null,ks))
{var kf = cljs.core.first.call(null,ks);var vf = cljs.core.get.call(null,v,kf,new cljs.core.Keyword("cljs.core.logic","not-found","cljs.core.logic/not-found",3358757009));if(cljs.core._EQ_.call(null,vf,new cljs.core.Keyword("cljs.core.logic","not-found","cljs.core.logic/not-found",3358757009)))
{return null;
} else
{var uf = cljs.core.get.call(null,u,kf);if(cljs.core.logic.lvar_QMARK_.call(null,vf))
{{
var G__119886 = cljs.core.next.call(null,ks);
var G__119887 = cljs.core.logic.featurec.call(null,vf,uf).call(null,s__$1);
ks = G__119886;
s__$1 = G__119887;
continue;
}
} else
{if(cljs.core.map_QMARK_.call(null,uf))
{var temp__4096__auto__ = cljs.core.logic.unify.call(null,s__$1,cljs.core.logic.partial_map.call(null,uf),vf);if(cljs.core.truth_(temp__4096__auto__))
{var s__$2 = temp__4096__auto__;{
var G__119888 = cljs.core.next.call(null,ks);
var G__119889 = s__$2;
ks = G__119888;
s__$1 = G__119889;
continue;
}
} else
{return null;
}
} else
{var temp__4096__auto__ = cljs.core.logic.unify.call(null,s__$1,uf,vf);if(cljs.core.truth_(temp__4096__auto__))
{var s__$2 = temp__4096__auto__;{
var G__119890 = cljs.core.next.call(null,ks);
var G__119891 = s__$2;
ks = G__119890;
s__$1 = G__119891;
continue;
}
} else
{return null;
}
}
}
}
} else
{return s__$1;
}
break;
}
});

/**
* @constructor
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
cljs.core.logic.PMap = (function (__meta,__extmap){
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
cljs.core.logic.PMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6846__auto__){var self__ = this;
var this__6846__auto____$1 = this;var h__6700__auto__ = self__.__hash;if(!((h__6700__auto__ == null)))
{return h__6700__auto__;
} else
{var h__6700__auto____$1 = cljs.core.hash_imap.call(null,this__6846__auto____$1);self__.__hash = h__6700__auto____$1;
return h__6700__auto____$1;
}
});
cljs.core.logic.PMap.prototype.cljs$core$logic$protocols$IUnifyTerms$ = true;
cljs.core.logic.PMap.prototype.cljs$core$logic$protocols$IUnifyTerms$unify_terms$arity$3 = (function (u,v,s){var self__ = this;
var u__$1 = this;if(cljs.core.map_QMARK_.call(null,v))
{return cljs.core.logic.unify_with_pmap_STAR_.call(null,u__$1,v,s);
} else
{return null;
}
});
cljs.core.logic.PMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6851__auto__,k__6852__auto__){var self__ = this;
var this__6851__auto____$1 = this;return cljs.core._lookup.call(null,this__6851__auto____$1,k__6852__auto__,null);
});
cljs.core.logic.PMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6853__auto__,k119893,else__6854__auto__){var self__ = this;
var this__6853__auto____$1 = this;if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k119893,else__6854__auto__);
} else
{return null;
}
});
cljs.core.logic.PMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6858__auto__,k__6859__auto__,G__119892){var self__ = this;
var this__6858__auto____$1 = this;var pred__119895 = cljs.core.keyword_identical_QMARK_;var expr__119896 = k__6859__auto__;return (new cljs.core.logic.PMap(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6859__auto__,G__119892),null));
});
cljs.core.logic.PMap.prototype.cljs$core$logic$protocols$IUnifyWithRecord$ = true;
cljs.core.logic.PMap.prototype.cljs$core$logic$protocols$IUnifyWithRecord$unify_with_record$arity$3 = (function (u,v,s){var self__ = this;
var u__$1 = this;if(cljs.core.map_QMARK_.call(null,v))
{return cljs.core.logic.unify_with_pmap_STAR_.call(null,u__$1,v,s);
} else
{return null;
}
});
cljs.core.logic.PMap.prototype.cljs$core$logic$protocols$IUninitialized$ = true;
cljs.core.logic.PMap.prototype.cljs$core$logic$protocols$IUninitialized$_uninitialized$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.logic.PMap());
});
cljs.core.logic.PMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6865__auto__,writer__6866__auto__,opts__6867__auto__){var self__ = this;
var this__6865__auto____$1 = this;var pr_pair__6868__auto__ = (function (keyval__6869__auto__){return cljs.core.pr_sequential_writer.call(null,writer__6866__auto__,cljs.core.pr_writer,""," ","",opts__6867__auto__,keyval__6869__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__6866__auto__,pr_pair__6868__auto__,"#cljs.core.logic.PMap{",", ","}",opts__6867__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
cljs.core.logic.PMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6856__auto__,entry__6857__auto__){var self__ = this;
var this__6856__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__6857__auto__))
{return cljs.core._assoc.call(null,this__6856__auto____$1,cljs.core._nth.call(null,entry__6857__auto__,0),cljs.core._nth.call(null,entry__6857__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__6856__auto____$1,entry__6857__auto__);
}
});
cljs.core.logic.PMap.prototype.cljs$core$logic$protocols$INonStorable$ = true;
cljs.core.logic.PMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6863__auto__){var self__ = this;
var this__6863__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
cljs.core.logic.PMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6855__auto__){var self__ = this;
var this__6855__auto____$1 = this;return (0 + cljs.core.count.call(null,self__.__extmap));
});
cljs.core.logic.PMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6847__auto__,other__6848__auto__){var self__ = this;
var this__6847__auto____$1 = this;if(cljs.core.truth_((function (){var and__6277__auto__ = other__6848__auto__;if(cljs.core.truth_(and__6277__auto__))
{return ((this__6847__auto____$1.constructor === other__6848__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__6847__auto____$1,other__6848__auto__));
} else
{return and__6277__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs.core.logic.PMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6850__auto__,G__119892){var self__ = this;
var this__6850__auto____$1 = this;return (new cljs.core.logic.PMap(G__119892,self__.__extmap,self__.__hash));
});
cljs.core.logic.PMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6849__auto__){var self__ = this;
var this__6849__auto____$1 = this;return self__.__meta;
});
cljs.core.logic.PMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6860__auto__,k__6861__auto__){var self__ = this;
var this__6860__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__6861__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6860__auto____$1),self__.__meta),k__6861__auto__);
} else
{return (new cljs.core.logic.PMap(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6861__auto__)),null));
}
});
cljs.core.logic.PMap.cljs$lang$type = true;
cljs.core.logic.PMap.cljs$lang$ctorPrSeq = (function (this__6885__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.core.logic/PMap");
});
cljs.core.logic.PMap.cljs$lang$ctorPrWriter = (function (this__6885__auto__,writer__6886__auto__){return cljs.core._write.call(null,writer__6886__auto__,"cljs.core.logic/PMap");
});
cljs.core.logic.__GT_PMap = (function __GT_PMap(){return (new cljs.core.logic.PMap());
});
cljs.core.logic.map__GT_PMap = (function map__GT_PMap(G__119894){return (new cljs.core.logic.PMap(null,cljs.core.dissoc.call(null,G__119894)));
});
/**
* Given map m, returns partial map that unifies with maps even if it
* doesn't share all of the keys of that map.
*/
cljs.core.logic.partial_map = (function partial_map(m){return cljs.core.logic.map__GT_PMap.call(null,m);
});
cljs.core.logic.partial_map_QMARK_ = (function partial_map_QMARK_(x){return (x instanceof cljs.core.logic.PMap);
});
(cljs.core.logic.protocols.IFeature["_"] = true);
(cljs.core.logic.protocols._feature["_"] = (function (x){if(cljs.core.map_QMARK_.call(null,x))
{return cljs.core.logic.partial_map.call(null,x);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}));
cljs.core.logic._featurec = (function _featurec(x,fs){if(typeof cljs.core.logic.t119905 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.t119905 = (function (fs,x,_featurec,meta119906){
this.fs = fs;
this.x = x;
this._featurec = _featurec;
this.meta119906 = meta119906;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.t119905.cljs$lang$type = true;
cljs.core.logic.t119905.cljs$lang$ctorStr = "cljs.core.logic/t119905";
cljs.core.logic.t119905.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.logic/t119905");
});
cljs.core.logic.t119905.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$ = true;
cljs.core.logic.t119905.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440),null], null), null);
});
cljs.core.logic.t119905.prototype.cljs$core$logic$protocols$IReifiableConstraint$ = true;
cljs.core.logic.t119905.prototype.cljs$core$logic$protocols$IReifiableConstraint$_reifyc$arity$4 = (function (_,v,r,a){var self__ = this;
var ___$1 = this;var fs__$2 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,self__.fs);var r__$1 = cljs.core.logic._reify_STAR_.call(null,r,cljs.core.logic.walk_STAR_.call(null,a,fs__$2));return cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic","featurec","cljs.core.logic/featurec",-851976461,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1955),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,11),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1955),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,19)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.logic.walk_STAR_.call(null,r__$1,self__.x)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.logic.walk_STAR_.call(null,r__$1,fs__$2)))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1955),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,10),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1955),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,47)))));
});
cljs.core.logic.t119905.prototype.cljs$core$logic$protocols$IConstraintOp$ = true;
cljs.core.logic.t119905.prototype.cljs$core$logic$protocols$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic","featurec","cljs.core.logic/featurec",-851976461,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1949),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1949),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,42)))));
});
cljs.core.logic.t119905.prototype.cljs$core$logic$protocols$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.x], null);
});
cljs.core.logic.t119905.prototype.cljs$core$logic$protocols$IConstraintStep$ = true;
cljs.core.logic.t119905.prototype.cljs$core$logic$protocols$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;if(typeof cljs.core.logic.t119908 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.t119908 = (function (s,this$,meta119906,fs,x,_featurec,meta119909){
this.s = s;
this.this$ = this$;
this.meta119906 = meta119906;
this.fs = fs;
this.x = x;
this._featurec = _featurec;
this.meta119909 = meta119909;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.t119908.cljs$lang$type = true;
cljs.core.logic.t119908.cljs$lang$ctorStr = "cljs.core.logic/t119908";
cljs.core.logic.t119908.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.logic/t119908");
});
cljs.core.logic.t119908.prototype.cljs$core$logic$protocols$IRunnable$ = true;
cljs.core.logic.t119908.prototype.cljs$core$logic$protocols$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return !(cljs.core.logic.lvar_QMARK_.call(null,cljs.core.logic.protocols.walk.call(null,self__.s,self__.x)));
});
cljs.core.logic.t119908.prototype.call = (function (self__,s__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;return cljs.core.logic.composeg.call(null,cljs.core.logic._EQ__EQ_.call(null,self__.fs,self__.x),cljs.core.logic.remcg.call(null,self__.this$)).call(null,s__$2);
});
cljs.core.logic.t119908.prototype.apply = (function (self__,args119911){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args119911)));
});
cljs.core.logic.t119908.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
var _ = this;return cljs.core.logic.composeg.call(null,cljs.core.logic._EQ__EQ_.call(null,self__.fs,self__.x),cljs.core.logic.remcg.call(null,self__.this$)).call(null,s__$2);
});
cljs.core.logic.t119908.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_119910){var self__ = this;
var _119910__$1 = this;return self__.meta119909;
});
cljs.core.logic.t119908.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_119910,meta119909__$1){var self__ = this;
var _119910__$1 = this;return (new cljs.core.logic.t119908(self__.s,self__.this$,self__.meta119906,self__.fs,self__.x,self__._featurec,meta119909__$1));
});
cljs.core.logic.__GT_t119908 = (function __GT_t119908(s__$1,this$__$2,meta119906__$1,fs__$2,x__$2,_featurec__$2,meta119909){return (new cljs.core.logic.t119908(s__$1,this$__$2,meta119906__$1,fs__$2,x__$2,_featurec__$2,meta119909));
});
}
return (new cljs.core.logic.t119908(s,this$__$1,self__.meta119906,self__.fs,self__.x,self__._featurec,null));
});
cljs.core.logic.t119905.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_119907){var self__ = this;
var _119907__$1 = this;return self__.meta119906;
});
cljs.core.logic.t119905.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_119907,meta119906__$1){var self__ = this;
var _119907__$1 = this;return (new cljs.core.logic.t119905(self__.fs,self__.x,self__._featurec,meta119906__$1));
});
cljs.core.logic.__GT_t119905 = (function __GT_t119905(fs__$1,x__$1,_featurec__$1,meta119906){return (new cljs.core.logic.t119905(fs__$1,x__$1,_featurec__$1,meta119906));
});
}
return (new cljs.core.logic.t119905(fs,x,_featurec,null));
});
/**
* Ensure that a map contains at least the key-value pairs
* in the map fs. fs must be partially instantiated - that is,
* it may contain values which are logic variables to support
* feature extraction.
*/
cljs.core.logic.featurec = (function featurec(x,fs){return cljs.core.logic.cgoal.call(null,cljs.core.logic._featurec.call(null,x,cljs.core.logic.partial_map.call(null,fs)));
});
cljs.core.logic.ground_term_QMARK_ = (function ground_term_QMARK_(x,s){var _ground_term_QMARK_ = (function _ground_term_QMARK_(x__$1,s__$1){var x__$2 = cljs.core.logic.protocols.walk.call(null,s__$1,x__$1);if(cljs.core.logic.lvar_QMARK_.call(null,x__$2))
{throw cljs.core.logic.fk;
} else
{return cljs.core.logic.protocols.walk_term.call(null,x__$2,(function (x__$3){var x__$4 = cljs.core.logic.protocols.walk.call(null,s__$1,x__$3);if(cljs.core.logic.lvar_QMARK_.call(null,x__$4))
{throw cljs.core.logic.fk;
} else
{if(cljs.core.logic.tree_term_QMARK_.call(null,x__$4))
{return _ground_term_QMARK_.call(null,x__$4,s__$1);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return x__$4;
} else
{return null;
}
}
}
}));
}
});
try{_ground_term_QMARK_.call(null,x,s);
return true;
}catch (e119913){if((e119913 instanceof Error))
{var e = e119913;return false;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e119913;
} else
{return null;
}
}
}});
cljs.core.logic._predc = (function() {
var _predc = null;
var _predc__2 = (function (x,p){return _predc.call(null,x,p,p);
});
var _predc__3 = (function (x,p,pform){if(typeof cljs.core.logic.t119921 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.t119921 = (function (pform,p,x,_predc,meta119922){
this.pform = pform;
this.p = p;
this.x = x;
this._predc = _predc;
this.meta119922 = meta119922;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.t119921.cljs$lang$type = true;
cljs.core.logic.t119921.cljs$lang$ctorStr = "cljs.core.logic/t119921";
cljs.core.logic.t119921.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.logic/t119921");
});
cljs.core.logic.t119921.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$ = true;
cljs.core.logic.t119921.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440),null], null), null);
});
cljs.core.logic.t119921.prototype.cljs$core$logic$protocols$IReifiableConstraint$ = true;
cljs.core.logic.t119921.prototype.cljs$core$logic$protocols$IReifiableConstraint$_reifyc$arity$4 = (function (c,v,r,s){var self__ = this;
var c__$1 = this;if((cljs.core.not_EQ_.call(null,self__.p,self__.pform)) && (cljs.core.fn_QMARK_.call(null,self__.pform)))
{return self__.pform.call(null,c__$1,v,r,s);
} else
{return self__.pform;
}
});
cljs.core.logic.t119921.prototype.cljs$core$logic$protocols$IConstraintOp$ = true;
cljs.core.logic.t119921.prototype.cljs$core$logic$protocols$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.seq_QMARK_.call(null,self__.pform))
{return cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic","predc","cljs.core.logic/predc",895622310,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2008),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,24),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2008),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,29)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.pform))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2008),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,23),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2008),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,37)))));
} else
{return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic","predc","cljs.core.logic/predc",895622310,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2009),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,23),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2009),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,44)))));
}
});
cljs.core.logic.t119921.prototype.cljs$core$logic$protocols$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.x], null);
});
cljs.core.logic.t119921.prototype.cljs$core$logic$protocols$IConstraintStep$ = true;
cljs.core.logic.t119921.prototype.cljs$core$logic$protocols$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;if(typeof cljs.core.logic.t119924 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.t119924 = (function (s,this$,meta119922,pform,p,x,_predc,meta119925){
this.s = s;
this.this$ = this$;
this.meta119922 = meta119922;
this.pform = pform;
this.p = p;
this.x = x;
this._predc = _predc;
this.meta119925 = meta119925;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.t119924.cljs$lang$type = true;
cljs.core.logic.t119924.cljs$lang$ctorStr = "cljs.core.logic/t119924";
cljs.core.logic.t119924.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.logic/t119924");
});
cljs.core.logic.t119924.prototype.cljs$core$logic$protocols$IRunnable$ = true;
cljs.core.logic.t119924.prototype.cljs$core$logic$protocols$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return !(cljs.core.logic.lvar_QMARK_.call(null,cljs.core.logic.protocols.walk.call(null,self__.s,self__.x)));
});
cljs.core.logic.t119924.prototype.call = (function (self__,s__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;var x__$3 = cljs.core.logic.protocols.walk.call(null,s__$2,self__.x);if(cljs.core.truth_(self__.p.call(null,x__$3)))
{return cljs.core.logic.remcg.call(null,self__.this$).call(null,s__$2);
} else
{return null;
}
});
cljs.core.logic.t119924.prototype.apply = (function (self__,args119927){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args119927)));
});
cljs.core.logic.t119924.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
var _ = this;var x__$3 = cljs.core.logic.protocols.walk.call(null,s__$2,self__.x);if(cljs.core.truth_(self__.p.call(null,x__$3)))
{return cljs.core.logic.remcg.call(null,self__.this$).call(null,s__$2);
} else
{return null;
}
});
cljs.core.logic.t119924.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_119926){var self__ = this;
var _119926__$1 = this;return self__.meta119925;
});
cljs.core.logic.t119924.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_119926,meta119925__$1){var self__ = this;
var _119926__$1 = this;return (new cljs.core.logic.t119924(self__.s,self__.this$,self__.meta119922,self__.pform,self__.p,self__.x,self__._predc,meta119925__$1));
});
cljs.core.logic.__GT_t119924 = (function __GT_t119924(s__$1,this$__$2,meta119922__$1,pform__$2,p__$2,x__$2,_predc__$2,meta119925){return (new cljs.core.logic.t119924(s__$1,this$__$2,meta119922__$1,pform__$2,p__$2,x__$2,_predc__$2,meta119925));
});
}
return (new cljs.core.logic.t119924(s,this$__$1,self__.meta119922,self__.pform,self__.p,self__.x,self__._predc,null));
});
cljs.core.logic.t119921.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_119923){var self__ = this;
var _119923__$1 = this;return self__.meta119922;
});
cljs.core.logic.t119921.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_119923,meta119922__$1){var self__ = this;
var _119923__$1 = this;return (new cljs.core.logic.t119921(self__.pform,self__.p,self__.x,self__._predc,meta119922__$1));
});
cljs.core.logic.__GT_t119921 = (function __GT_t119921(pform__$1,p__$1,x__$1,_predc__$1,meta119922){return (new cljs.core.logic.t119921(pform__$1,p__$1,x__$1,_predc__$1,meta119922));
});
}
return (new cljs.core.logic.t119921(pform,p,x,_predc,null));
});
_predc = function(x,p,pform){
switch(arguments.length){
case 2:
return _predc__2.call(this,x,p);
case 3:
return _predc__3.call(this,x,p,pform);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_predc.cljs$core$IFn$_invoke$arity$2 = _predc__2;
_predc.cljs$core$IFn$_invoke$arity$3 = _predc__3;
return _predc;
})()
;
cljs.core.logic.predc = (function() {
var predc = null;
var predc__2 = (function (x,p){return predc.call(null,x,p,p);
});
var predc__3 = (function (x,p,pform){return cljs.core.logic.cgoal.call(null,cljs.core.logic._predc.call(null,x,p,pform));
});
predc = function(x,p,pform){
switch(arguments.length){
case 2:
return predc__2.call(this,x,p);
case 3:
return predc__3.call(this,x,p,pform);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
predc.cljs$core$IFn$_invoke$arity$2 = predc__2;
predc.cljs$core$IFn$_invoke$arity$3 = predc__3;
return predc;
})()
;
cljs.core.logic.tramp = (function tramp(f){var f__$1 = f;while(true){
if(cljs.core.fn_QMARK_.call(null,f__$1))
{{
var G__119928 = f__$1.call(null);
f__$1 = G__119928;
continue;
}
} else
{return f__$1;
}
break;
}
});
cljs.core.logic._nafc = (function _nafc(c,args){if(typeof cljs.core.logic.t119937 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.t119937 = (function (args,c,_nafc,meta119938){
this.args = args;
this.c = c;
this._nafc = _nafc;
this.meta119938 = meta119938;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.t119937.cljs$lang$type = true;
cljs.core.logic.t119937.cljs$lang$ctorStr = "cljs.core.logic/t119937";
cljs.core.logic.t119937.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.logic/t119937");
});
cljs.core.logic.t119937.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$ = true;
cljs.core.logic.t119937.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440),null], null), null);
});
cljs.core.logic.t119937.prototype.cljs$core$logic$protocols$IReifiableConstraint$ = true;
cljs.core.logic.t119937.prototype.cljs$core$logic$protocols$IReifiableConstraint$_reifyc$arity$4 = (function (_,v,r,s){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic","nafc","cljs.core.logic/nafc",1019102320,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2051),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,12),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2051),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,16)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.c),cljs.core.logic._reify.call(null,s,self__.args,r))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2051),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,11),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2051),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,40)))));
});
cljs.core.logic.t119937.prototype.cljs$core$logic$protocols$IConstraintOp$ = true;
cljs.core.logic.t119937.prototype.cljs$core$logic$protocols$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic","nafc","cljs.core.logic/nafc",1019102320,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2047),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,21),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2047),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,41)))));
});
cljs.core.logic.t119937.prototype.cljs$core$logic$protocols$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.c], null),self__.args));
});
cljs.core.logic.t119937.prototype.cljs$core$logic$protocols$IConstraintStep$ = true;
cljs.core.logic.t119937.prototype.cljs$core$logic$protocols$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;if(typeof cljs.core.logic.t119940 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.t119940 = (function (s,this$,meta119938,args,c,_nafc,meta119941){
this.s = s;
this.this$ = this$;
this.meta119938 = meta119938;
this.args = args;
this.c = c;
this._nafc = _nafc;
this.meta119941 = meta119941;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.t119940.cljs$lang$type = true;
cljs.core.logic.t119940.cljs$lang$ctorStr = "cljs.core.logic/t119940";
cljs.core.logic.t119940.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.logic/t119940");
});
cljs.core.logic.t119940.prototype.cljs$core$logic$protocols$IRunnable$ = true;
cljs.core.logic.t119940.prototype.cljs$core$logic$protocols$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.every_QMARK_.call(null,(function (p1__119929_SHARP_){return cljs.core.logic.ground_term_QMARK_.call(null,p1__119929_SHARP_,self__.s);
}),self__.args);
});
cljs.core.logic.t119940.prototype.call = (function (self__,s__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;if(cljs.core.truth_(cljs.core.logic.tramp.call(null,cljs.core.apply.call(null,self__.c,self__.args).call(null,s__$2))))
{return null;
} else
{return cljs.core.logic.remcg.call(null,self__.this$).call(null,s__$2);
}
});
cljs.core.logic.t119940.prototype.apply = (function (self__,args119943){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args119943)));
});
cljs.core.logic.t119940.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
var _ = this;if(cljs.core.truth_(cljs.core.logic.tramp.call(null,cljs.core.apply.call(null,self__.c,self__.args).call(null,s__$2))))
{return null;
} else
{return cljs.core.logic.remcg.call(null,self__.this$).call(null,s__$2);
}
});
cljs.core.logic.t119940.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_119942){var self__ = this;
var _119942__$1 = this;return self__.meta119941;
});
cljs.core.logic.t119940.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_119942,meta119941__$1){var self__ = this;
var _119942__$1 = this;return (new cljs.core.logic.t119940(self__.s,self__.this$,self__.meta119938,self__.args,self__.c,self__._nafc,meta119941__$1));
});
cljs.core.logic.__GT_t119940 = (function __GT_t119940(s__$1,this$__$2,meta119938__$1,args__$2,c__$2,_nafc__$2,meta119941){return (new cljs.core.logic.t119940(s__$1,this$__$2,meta119938__$1,args__$2,c__$2,_nafc__$2,meta119941));
});
}
return (new cljs.core.logic.t119940(s,this$__$1,self__.meta119938,self__.args,self__.c,self__._nafc,null));
});
cljs.core.logic.t119937.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_119939){var self__ = this;
var _119939__$1 = this;return self__.meta119938;
});
cljs.core.logic.t119937.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_119939,meta119938__$1){var self__ = this;
var _119939__$1 = this;return (new cljs.core.logic.t119937(self__.args,self__.c,self__._nafc,meta119938__$1));
});
cljs.core.logic.__GT_t119937 = (function __GT_t119937(args__$1,c__$1,_nafc__$1,meta119938){return (new cljs.core.logic.t119937(args__$1,c__$1,_nafc__$1,meta119938));
});
}
return (new cljs.core.logic.t119937(args,c,_nafc,null));
});
/**
* EXPERIMENTAL: negation as failure constraint. All arguments to the goal c
* must be ground. If some argument is not ground the execution of this
* constraint will be delayed.
* @param {...*} var_args
*/
cljs.core.logic.nafc = (function() { 
var nafc__delegate = function (c,args){return cljs.core.logic.cgoal.call(null,cljs.core.logic._nafc.call(null,c,args));
};
var nafc = function (c,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return nafc__delegate.call(this,c,args);};
nafc.cljs$lang$maxFixedArity = 1;
nafc.cljs$lang$applyTo = (function (arglist__119944){
var c = cljs.core.first(arglist__119944);
var args = cljs.core.rest(arglist__119944);
return nafc__delegate(c,args);
});
nafc.cljs$core$IFn$_invoke$arity$variadic = nafc__delegate;
return nafc;
})()
;
(cljs.core.logic.protocols.IConstrainTree["_"] = true);
(cljs.core.logic.protocols._constrain_tree["_"] = (function (t,fc,s){if(cljs.core.sequential_QMARK_.call(null,t))
{var t__$1 = cljs.core.seq.call(null,t);var s__$1 = s;while(true){
if(t__$1)
{var temp__4098__auto__ = fc.call(null,cljs.core.first.call(null,t__$1),s__$1);if(cljs.core.truth_(temp__4098__auto__))
{var s__$2 = temp__4098__auto__;{
var G__119946 = cljs.core.next.call(null,t__$1);
var G__119947 = s__$2;
t__$1 = G__119946;
s__$1 = G__119947;
continue;
}
} else
{return null;
}
} else
{return s__$1;
}
break;
}
} else
{if(cljs.core.map_QMARK_.call(null,t))
{var t__$1 = cljs.core.seq.call(null,t);var s__$1 = s;while(true){
if(t__$1)
{var vec__119945 = cljs.core.first.call(null,t__$1);var _ = cljs.core.nth.call(null,vec__119945,0,null);var v = cljs.core.nth.call(null,vec__119945,1,null);var s__$2 = fc.call(null,v,s__$1);if(cljs.core.truth_(s__$2))
{{
var G__119948 = cljs.core.next.call(null,t__$1);
var G__119949 = s__$2;
t__$1 = G__119948;
s__$1 = G__119949;
continue;
}
} else
{return null;
}
} else
{return s__$1;
}
break;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
}));
cljs.core.logic.LCons.prototype.cljs$core$logic$protocols$IConstrainTree$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$protocols$IConstrainTree$_constrain_tree$arity$3 = (function (t,fc,s){var t__$1 = this;var t__$2 = t__$1;var s__$1 = s;while(true){
if(cljs.core.logic.lvar_QMARK_.call(null,t__$2))
{return fc.call(null,t__$2,s__$1);
} else
{var temp__4098__auto__ = fc.call(null,cljs.core.logic.protocols.lfirst.call(null,t__$2),s__$1);if(cljs.core.truth_(temp__4098__auto__))
{var s__$2 = temp__4098__auto__;{
var G__119950 = cljs.core.logic.protocols.lnext.call(null,t__$2);
var G__119951 = s__$2;
t__$2 = G__119950;
s__$1 = G__119951;
continue;
}
} else
{return null;
}
}
break;
}
});
cljs.core.logic.constrain_tree = (function constrain_tree(t,fc){return (function (a){return cljs.core.logic.protocols._constrain_tree.call(null,t,fc,a);
});
});
cljs.core.logic._fixc = (function() {
var _fixc = null;
var _fixc__3 = (function (x,f,reifier){return _fixc.call(null,x,f,null,reifier);
});
var _fixc__4 = (function (x,f,runnable,reifier){if(typeof cljs.core.logic.t119959 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.t119959 = (function (reifier,runnable,f,x,_fixc,meta119960){
this.reifier = reifier;
this.runnable = runnable;
this.f = f;
this.x = x;
this._fixc = _fixc;
this.meta119960 = meta119960;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.t119959.cljs$lang$type = true;
cljs.core.logic.t119959.cljs$lang$ctorStr = "cljs.core.logic/t119959";
cljs.core.logic.t119959.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.logic/t119959");
});
cljs.core.logic.t119959.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$ = true;
cljs.core.logic.t119959.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440),null], null), null);
});
cljs.core.logic.t119959.prototype.cljs$core$logic$protocols$IReifiableConstraint$ = true;
cljs.core.logic.t119959.prototype.cljs$core$logic$protocols$IReifiableConstraint$_reifyc$arity$4 = (function (c,v,r,s){var self__ = this;
var c__$1 = this;if(cljs.core.fn_QMARK_.call(null,self__.reifier))
{return self__.reifier.call(null,c__$1,self__.x,v,r,s);
} else
{var x__$2 = cljs.core.logic.walk_STAR_.call(null,r,self__.x);return cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic","fixc","cljs.core.logic/fixc",1018347826,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2122),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,16),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2122),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,20)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,x__$2),cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.reifier))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2122),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,15),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2122),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,33)))));
}
});
cljs.core.logic.t119959.prototype.cljs$core$logic$protocols$IConstraintOp$ = true;
cljs.core.logic.t119959.prototype.cljs$core$logic$protocols$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic","fixc","cljs.core.logic/fixc",1018347826,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2115),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,21),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2115),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,41)))));
});
cljs.core.logic.t119959.prototype.cljs$core$logic$protocols$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.vector_QMARK_.call(null,self__.x))
{return self__.x;
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.x], null);
}
});
cljs.core.logic.t119959.prototype.cljs$core$logic$protocols$IConstraintStep$ = true;
cljs.core.logic.t119959.prototype.cljs$core$logic$protocols$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;var xv = cljs.core.logic.protocols.walk.call(null,s,self__.x);if(typeof cljs.core.logic.t119962 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.t119962 = (function (xv,s,this$,meta119960,reifier,runnable,f,x,_fixc,meta119963){
this.xv = xv;
this.s = s;
this.this$ = this$;
this.meta119960 = meta119960;
this.reifier = reifier;
this.runnable = runnable;
this.f = f;
this.x = x;
this._fixc = _fixc;
this.meta119963 = meta119963;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.t119962.cljs$lang$type = true;
cljs.core.logic.t119962.cljs$lang$ctorStr = "cljs.core.logic/t119962";
cljs.core.logic.t119962.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.logic/t119962");
});
cljs.core.logic.t119962.prototype.cljs$core$logic$protocols$IRunnable$ = true;
cljs.core.logic.t119962.prototype.cljs$core$logic$protocols$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.fn_QMARK_.call(null,self__.runnable))
{return self__.runnable.call(null,self__.x,self__.s);
} else
{return !(cljs.core.logic.lvar_QMARK_.call(null,self__.xv));
}
});
cljs.core.logic.t119962.prototype.call = (function (self__,s__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;return cljs.core.logic.composeg.call(null,self__.f.call(null,self__.xv,s__$2,self__.reifier),cljs.core.logic.remcg.call(null,self__.this$)).call(null,s__$2);
});
cljs.core.logic.t119962.prototype.apply = (function (self__,args119965){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args119965)));
});
cljs.core.logic.t119962.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
var _ = this;return cljs.core.logic.composeg.call(null,self__.f.call(null,self__.xv,s__$2,self__.reifier),cljs.core.logic.remcg.call(null,self__.this$)).call(null,s__$2);
});
cljs.core.logic.t119962.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_119964){var self__ = this;
var _119964__$1 = this;return self__.meta119963;
});
cljs.core.logic.t119962.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_119964,meta119963__$1){var self__ = this;
var _119964__$1 = this;return (new cljs.core.logic.t119962(self__.xv,self__.s,self__.this$,self__.meta119960,self__.reifier,self__.runnable,self__.f,self__.x,self__._fixc,meta119963__$1));
});
cljs.core.logic.__GT_t119962 = (function __GT_t119962(xv__$1,s__$1,this$__$2,meta119960__$1,reifier__$2,runnable__$2,f__$2,x__$2,_fixc__$2,meta119963){return (new cljs.core.logic.t119962(xv__$1,s__$1,this$__$2,meta119960__$1,reifier__$2,runnable__$2,f__$2,x__$2,_fixc__$2,meta119963));
});
}
return (new cljs.core.logic.t119962(xv,s,this$__$1,self__.meta119960,self__.reifier,self__.runnable,self__.f,self__.x,self__._fixc,null));
});
cljs.core.logic.t119959.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_119961){var self__ = this;
var _119961__$1 = this;return self__.meta119960;
});
cljs.core.logic.t119959.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_119961,meta119960__$1){var self__ = this;
var _119961__$1 = this;return (new cljs.core.logic.t119959(self__.reifier,self__.runnable,self__.f,self__.x,self__._fixc,meta119960__$1));
});
cljs.core.logic.__GT_t119959 = (function __GT_t119959(reifier__$1,runnable__$1,f__$1,x__$1,_fixc__$1,meta119960){return (new cljs.core.logic.t119959(reifier__$1,runnable__$1,f__$1,x__$1,_fixc__$1,meta119960));
});
}
return (new cljs.core.logic.t119959(reifier,runnable,f,x,_fixc,null));
});
_fixc = function(x,f,runnable,reifier){
switch(arguments.length){
case 3:
return _fixc__3.call(this,x,f,runnable);
case 4:
return _fixc__4.call(this,x,f,runnable,reifier);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_fixc.cljs$core$IFn$_invoke$arity$3 = _fixc__3;
_fixc.cljs$core$IFn$_invoke$arity$4 = _fixc__4;
return _fixc;
})()
;
cljs.core.logic.fixc = (function() {
var fixc = null;
var fixc__3 = (function (x,f,reifier){return fixc.call(null,x,f,null,reifier);
});
var fixc__4 = (function (x,f,runnable,reifier){return cljs.core.logic.cgoal.call(null,cljs.core.logic._fixc.call(null,x,f,runnable,reifier));
});
fixc = function(x,f,runnable,reifier){
switch(arguments.length){
case 3:
return fixc__3.call(this,x,f,runnable);
case 4:
return fixc__4.call(this,x,f,runnable,reifier);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fixc.cljs$core$IFn$_invoke$arity$3 = fixc__3;
fixc.cljs$core$IFn$_invoke$arity$4 = fixc__4;
return fixc;
})()
;
cljs.core.logic.treec = (function treec(x,fc,reifier){return cljs.core.logic.fixc.call(null,x,(function loop(t,a,reifier__$1){if(cljs.core.logic.tree_term_QMARK_.call(null,t))
{return cljs.core.logic.composeg.call(null,fc.call(null,t),cljs.core.logic.constrain_tree.call(null,t,(function (t__$1,a__$1){return cljs.core.logic.fixc.call(null,t__$1,loop,reifier__$1).call(null,a__$1);
})));
} else
{return fc.call(null,t);
}
}),reifier);
});
cljs.core.logic.seqc = (function seqc(v){return cljs.core.logic.fixc.call(null,v,(function (t,_,___$1){if(cljs.core.sequential_QMARK_.call(null,t))
{return cljs.core.logic.succeed;
} else
{if(cljs.core.logic.lcons_QMARK_.call(null,t))
{return seqc.call(null,cljs.core.logic.protocols.lnext.call(null,t));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.logic.fail;
} else
{return null;
}
}
}
}),(function (_,v__$1,___$1,r,a){return cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic","seqc","cljs.core.logic/seqc",1018702372,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2149),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,13),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2149),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,17)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.logic._reify.call(null,a,v__$1,r)))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2149),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,12),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2149),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,34)))));
}));
});
