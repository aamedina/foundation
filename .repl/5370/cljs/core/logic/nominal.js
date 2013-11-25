// Compiled by ClojureScript 0.0-2080
goog.provide('cljs.core.logic.nominal');
goog.require('cljs.core');
goog.require('cljs.core.logic.protocols');
goog.require('cljs.core.logic');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('cljs.core.logic.protocols');
goog.require('cljs.core.logic.protocols');
goog.require('cljs.core.logic');
goog.require('cljs.core.logic');
cljs.core.logic.nominal.INomSwap = (function (){var obj181582 = {};return obj181582;
})();
cljs.core.logic.nominal.swap_noms = (function swap_noms(t,swap,s){if((function (){var and__6277__auto__ = t;if(and__6277__auto__)
{return t.cljs$core$logic$nominal$INomSwap$swap_noms$arity$3;
} else
{return and__6277__auto__;
}
})())
{return t.cljs$core$logic$nominal$INomSwap$swap_noms$arity$3(t,swap,s);
} else
{var x__6892__auto__ = (((t == null))?null:t);return (function (){var or__6289__auto__ = (cljs.core.logic.nominal.swap_noms[goog.typeOf(x__6892__auto__)]);if(or__6289__auto__)
{return or__6289__auto__;
} else
{var or__6289__auto____$1 = (cljs.core.logic.nominal.swap_noms["_"]);if(or__6289__auto____$1)
{return or__6289__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"INomSwap.swap-noms",t);
}
}
})().call(null,t,swap,s);
}
});
cljs.core.logic.nominal.nom_swap = (function nom_swap(a,swap){if(cljs.core._EQ_.call(null,a,cljs.core.first.call(null,swap)))
{return cljs.core.second.call(null,swap);
} else
{if(cljs.core._EQ_.call(null,a,cljs.core.second.call(null,swap)))
{return cljs.core.first.call(null,swap);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return a;
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$logic$nominal$INomSwap$ = true;
cljs.core.PersistentVector.prototype.cljs$core$logic$nominal$INomSwap$swap_noms$arity$3 = (function (t,swap,s){var t__$1 = this;var vec__181583 = cljs.core.logic.nominal.swap_noms.call(null,cljs.core.seq.call(null,t__$1),swap,s);var ts = cljs.core.nth.call(null,vec__181583,0,null);var s__$1 = cljs.core.nth.call(null,vec__181583,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,ts),s__$1], null);
});
cljs.core.logic.LCons.prototype.cljs$core$logic$nominal$INomSwap$ = true;
cljs.core.logic.LCons.prototype.cljs$core$logic$nominal$INomSwap$swap_noms$arity$3 = (function (t,swap,s){var t__$1 = this;var vec__181584 = cljs.core.logic.nominal.swap_noms.call(null,cljs.core.logic.protocols.lfirst.call(null,t__$1),swap,s);var tfirst = cljs.core.nth.call(null,vec__181584,0,null);var s__$1 = cljs.core.nth.call(null,vec__181584,1,null);var vec__181585 = cljs.core.logic.nominal.swap_noms.call(null,cljs.core.logic.protocols.lnext.call(null,t__$1),swap,s__$1);var tnext = cljs.core.nth.call(null,vec__181585,0,null);var s__$2 = cljs.core.nth.call(null,vec__181585,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta.call(null,cljs.core.logic.lcons.call(null,tfirst,tnext),cljs.core.meta.call(null,t__$1)),s__$2], null);
});
cljs.core.logic.LVar.prototype.cljs$core$logic$nominal$INomSwap$ = true;
cljs.core.logic.LVar.prototype.cljs$core$logic$nominal$INomSwap$swap_noms$arity$3 = (function (t,swap,s){var t__$1 = this;var t__$2 = cljs.core.logic.protocols.walk.call(null,s,t__$1);if(cljs.core.logic.lvar_QMARK_.call(null,t__$2))
{var v = cljs.core.with_meta.call(null,cljs.core.logic.lvar.call(null),cljs.core.meta.call(null,t__$2));var rt = cljs.core.logic.protocols.root_val.call(null,s,t__$2);var s__$1 = cljs.core.logic.nominal.suspc.call(null,v,t__$2,swap).call(null,cljs.core.logic.entangle.call(null,((cljs.core.logic.subst_val_QMARK_.call(null,rt))?cljs.core.logic.protocols.ext_no_check.call(null,s,v,rt):s),t__$2,v));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,s__$1], null);
} else
{return cljs.core.logic.nominal.swap_noms.call(null,t__$2,swap,s);
}
});
(cljs.core.logic.nominal.INomSwap["_"] = true);
(cljs.core.logic.nominal.swap_noms["_"] = (function (t,swap,s){if(cljs.core.coll_QMARK_.call(null,t))
{if(cljs.core.seq.call(null,t))
{var vec__181586 = cljs.core.logic.nominal.swap_noms.call(null,cljs.core.first.call(null,t),swap,s);var tfirst = cljs.core.nth.call(null,vec__181586,0,null);var s__$1 = cljs.core.nth.call(null,vec__181586,1,null);var vec__181587 = cljs.core.logic.nominal.swap_noms.call(null,cljs.core.next.call(null,t),swap,s__$1);var tnext = cljs.core.nth.call(null,vec__181587,0,null);var s__$2 = cljs.core.nth.call(null,vec__181587,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta.call(null,cljs.core.cons.call(null,tfirst,tnext),cljs.core.meta.call(null,t)),s__$2], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,s], null);
}
} else
{if(cljs.core.map_QMARK_.call(null,t))
{var vec__181588 = cljs.core.logic.nominal.swap_noms.call(null,cljs.core.seq.call(null,t),swap,s);var tkvs = cljs.core.nth.call(null,vec__181588,0,null);var s__$1 = cljs.core.nth.call(null,vec__181588,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,tkvs),s__$1], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,s], null);
} else
{return null;
}
}
}
}));
(cljs.core.logic.nominal.INomSwap["null"] = true);
(cljs.core.logic.nominal.swap_noms["null"] = (function (t,swap,s){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,s], null);
}));

/**
* @constructor
*/
cljs.core.logic.nominal.Nom = (function (lvar){
this.lvar = lvar;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2154168576;
})
cljs.core.logic.nominal.Nom.cljs$lang$type = true;
cljs.core.logic.nominal.Nom.cljs$lang$ctorStr = "cljs.core.logic.nominal/Nom";
cljs.core.logic.nominal.Nom.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.logic.nominal/Nom");
});
cljs.core.logic.nominal.Nom.prototype.cljs$core$logic$protocols$IReifyTerm$ = true;
cljs.core.logic.nominal.Nom.prototype.cljs$core$logic$protocols$IReifyTerm$reify_term$arity$2 = (function (v,s){var self__ = this;
var v__$1 = this;return cljs.core.logic.ext.call(null,s,v__$1,cljs.core.symbol.call(null,[cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"reify-noms","reify-noms",4368520701).cljs$core$IFn$_invoke$arity$2(cljs.core.meta.call(null,s),true))?"a":new cljs.core.Keyword(null,"oname","oname",1119788780).cljs$core$IFn$_invoke$arity$1(v__$1))),cljs.core.str("_"),cljs.core.str(cljs.core.count.call(null,s))].join('')));
});
cljs.core.logic.nominal.Nom.prototype.cljs$core$logic$nominal$INomSwap$ = true;
cljs.core.logic.nominal.Nom.prototype.cljs$core$logic$nominal$INomSwap$swap_noms$arity$3 = (function (t,swap,s){var self__ = this;
var t__$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.logic.nominal.nom_swap.call(null,t__$1,swap),s], null);
});
cljs.core.logic.nominal.Nom.prototype.hash$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.hash.call(null,self__.lvar);
});
cljs.core.logic.nominal.Nom.prototype.cljs$core$logic$protocols$IBindable$ = true;
cljs.core.logic.nominal.Nom.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;return cljs.core._lookup.call(null,this$__$1,k,null);
});
cljs.core.logic.nominal.Nom.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){var self__ = this;
var ___$1 = this;var G__181589 = k;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"oname","oname",1119788780),G__181589))
{return new cljs.core.Keyword(null,"oname","oname",1119788780).cljs$core$IFn$_invoke$arity$1(self__.lvar);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1017277949),G__181589))
{return new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.lvar);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"lvar","lvar",1017238189),G__181589))
{return self__.lvar;
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
cljs.core.logic.nominal.Nom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,opts){var self__ = this;
var x__$1 = this;return cljs.core._write.call(null,writer,[cljs.core.str("<nom:"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(x__$1)),cljs.core.str(">")].join(''));
});
cljs.core.logic.nominal.Nom.prototype.toString = (function (){var self__ = this;
var _ = this;return [cljs.core.str("<nom:"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.lvar)),cljs.core.str(">")].join('');
});
cljs.core.logic.nominal.Nom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,o){var self__ = this;
var this$__$1 = this;return ((o instanceof cljs.core.logic.nominal.Nom)) && (cljs.core._EQ_.call(null,self__.lvar,new cljs.core.Keyword(null,"lvar","lvar",1017238189).cljs$core$IFn$_invoke$arity$1(o)));
});
cljs.core.logic.nominal.Nom.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,new_meta){var self__ = this;
var this$__$1 = this;return cljs.core.logic.nominal.nom.call(null,cljs.core.with_meta.call(null,self__.lvar,new_meta));
});
cljs.core.logic.nominal.Nom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.meta.call(null,self__.lvar);
});
cljs.core.logic.nominal.__GT_Nom = (function __GT_Nom(lvar){return (new cljs.core.logic.nominal.Nom(lvar));
});
cljs.core.logic.nominal.nom = (function nom(lvar){return (new cljs.core.logic.nominal.Nom(lvar));
});
cljs.core.logic.nominal.nom_QMARK_ = (function nom_QMARK_(x){return (x instanceof cljs.core.logic.nominal.Nom);
});
cljs.core.logic.nominal._hash = (function _hash(a,x){if(typeof cljs.core.logic.nominal.t181597 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.nominal.t181597 = (function (x,a,_hash,meta181598){
this.x = x;
this.a = a;
this._hash = _hash;
this.meta181598 = meta181598;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.nominal.t181597.cljs$lang$type = true;
cljs.core.logic.nominal.t181597.cljs$lang$ctorStr = "cljs.core.logic.nominal/t181597";
cljs.core.logic.nominal.t181597.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.logic.nominal/t181597");
});
cljs.core.logic.nominal.t181597.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$ = true;
cljs.core.logic.nominal.t181597.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440),null], null), null);
});
cljs.core.logic.nominal.t181597.prototype.cljs$core$logic$protocols$IReifiableConstraint$ = true;
cljs.core.logic.nominal.t181597.prototype.cljs$core$logic$protocols$IReifiableConstraint$_reifyc$arity$4 = (function (_,v,r,s){var self__ = this;
var ___$1 = this;var x__$2 = cljs.core.logic.walk_STAR_.call(null,r,cljs.core.logic.walk_STAR_.call(null,s,self__.x));var a__$2 = cljs.core.logic.walk_STAR_.call(null,r,cljs.core.logic.walk_STAR_.call(null,s,self__.a));if(((a__$2 instanceof cljs.core.Symbol)) && (cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,cljs.core.logic.lvar_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,x__$2))))))
{return cljs.core.symbol.call(null,[cljs.core.str(a__$2),cljs.core.str("#"),cljs.core.str(x__$2)].join(''));
} else
{return null;
}
});
cljs.core.logic.nominal.t181597.prototype.cljs$core$logic$protocols$IConstraintOp$ = true;
cljs.core.logic.nominal.t181597.prototype.cljs$core$logic$protocols$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic.nominal","hash","cljs.core.logic.nominal/hash",99352748,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,186),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,186),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,46)))));
});
cljs.core.logic.nominal.t181597.prototype.cljs$core$logic$protocols$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.a,self__.x], null);
});
cljs.core.logic.nominal.t181597.prototype.cljs$core$logic$protocols$IConstraintStep$ = true;
cljs.core.logic.nominal.t181597.prototype.cljs$core$logic$protocols$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;var a__$2 = cljs.core.logic.protocols.walk.call(null,s,self__.a);var x__$2 = cljs.core.logic.protocols.walk.call(null,s,self__.x);if(typeof cljs.core.logic.nominal.t181600 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.nominal.t181600 = (function (s,this$,meta181598,x,a,_hash,meta181601){
this.s = s;
this.this$ = this$;
this.meta181598 = meta181598;
this.x = x;
this.a = a;
this._hash = _hash;
this.meta181601 = meta181601;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.nominal.t181600.cljs$lang$type = true;
cljs.core.logic.nominal.t181600.cljs$lang$ctorStr = "cljs.core.logic.nominal/t181600";
cljs.core.logic.nominal.t181600.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.logic.nominal/t181600");
});
cljs.core.logic.nominal.t181600.prototype.cljs$core$logic$protocols$IRunnable$ = true;
cljs.core.logic.nominal.t181600.prototype.cljs$core$logic$protocols$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.logic.lvar_QMARK_.call(null,self__.a))
{return ((cljs.core.logic.lvar_QMARK_.call(null,self__.x)) && (cljs.core._EQ_.call(null,self__.x,self__.a))) || ((cljs.core.logic.tree_term_QMARK_.call(null,self__.x)) && (cljs.core.not.call(null,cljs.core.logic.nominal.tie_QMARK_.call(null,self__.x))));
} else
{return (!(cljs.core.logic.nominal.nom_QMARK_.call(null,self__.a))) || (!(cljs.core.logic.lvar_QMARK_.call(null,self__.x)));
}
});
cljs.core.logic.nominal.t181600.prototype.call = (function (self__,s__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;return cljs.core.logic.composeg.call(null,cljs.core.logic.remcg.call(null,self__.this$),(function (s__$3){if((cljs.core.logic.lvar_QMARK_.call(null,self__.a)) && (cljs.core.logic.lvar_QMARK_.call(null,self__.x)) && (cljs.core._EQ_.call(null,self__.x,self__.a)))
{return null;
} else
{if((cljs.core.logic.nominal.nom_QMARK_.call(null,self__.a)) && (cljs.core.logic.nominal.nom_QMARK_.call(null,self__.x)) && (cljs.core._EQ_.call(null,self__.x,self__.a)))
{return null;
} else
{if((!(cljs.core.logic.lvar_QMARK_.call(null,self__.a))) && (!(cljs.core.logic.nominal.nom_QMARK_.call(null,self__.a))))
{return null;
} else
{if(cljs.core.truth_((function (){var and__6277__auto__ = cljs.core.logic.nominal.nom_QMARK_.call(null,self__.a);if(and__6277__auto__)
{var and__6277__auto____$1 = cljs.core.logic.nominal.tie_QMARK_.call(null,self__.x);if(cljs.core.truth_(and__6277__auto____$1))
{return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"binding-nom","binding-nom",727512822).cljs$core$IFn$_invoke$arity$1(self__.x),self__.a);
} else
{return and__6277__auto____$1;
}
} else
{return and__6277__auto__;
}
})()))
{return s__$3;
} else
{if((cljs.core.logic.tree_term_QMARK_.call(null,self__.x)) && ((cljs.core.not.call(null,cljs.core.logic.nominal.tie_QMARK_.call(null,self__.x))) || (cljs.core.logic.nominal.nom_QMARK_.call(null,self__.a))))
{return cljs.core.logic.constrain_tree.call(null,self__.x,(function (t,s__$4){return cljs.core.logic.nominal.hash.call(null,self__.a,t).call(null,s__$4);
})).call(null,s__$3);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return s__$3;
} else
{return null;
}
}
}
}
}
}
})).call(null,s__$2);
});
cljs.core.logic.nominal.t181600.prototype.apply = (function (self__,args181603){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args181603)));
});
cljs.core.logic.nominal.t181600.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
var _ = this;return cljs.core.logic.composeg.call(null,cljs.core.logic.remcg.call(null,self__.this$),(function (s__$3){if((cljs.core.logic.lvar_QMARK_.call(null,self__.a)) && (cljs.core.logic.lvar_QMARK_.call(null,self__.x)) && (cljs.core._EQ_.call(null,self__.x,self__.a)))
{return null;
} else
{if((cljs.core.logic.nominal.nom_QMARK_.call(null,self__.a)) && (cljs.core.logic.nominal.nom_QMARK_.call(null,self__.x)) && (cljs.core._EQ_.call(null,self__.x,self__.a)))
{return null;
} else
{if((!(cljs.core.logic.lvar_QMARK_.call(null,self__.a))) && (!(cljs.core.logic.nominal.nom_QMARK_.call(null,self__.a))))
{return null;
} else
{if(cljs.core.truth_((function (){var and__6277__auto__ = cljs.core.logic.nominal.nom_QMARK_.call(null,self__.a);if(and__6277__auto__)
{var and__6277__auto____$1 = cljs.core.logic.nominal.tie_QMARK_.call(null,self__.x);if(cljs.core.truth_(and__6277__auto____$1))
{return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"binding-nom","binding-nom",727512822).cljs$core$IFn$_invoke$arity$1(self__.x),self__.a);
} else
{return and__6277__auto____$1;
}
} else
{return and__6277__auto__;
}
})()))
{return s__$3;
} else
{if((cljs.core.logic.tree_term_QMARK_.call(null,self__.x)) && ((cljs.core.not.call(null,cljs.core.logic.nominal.tie_QMARK_.call(null,self__.x))) || (cljs.core.logic.nominal.nom_QMARK_.call(null,self__.a))))
{return cljs.core.logic.constrain_tree.call(null,self__.x,(function (t,s__$4){return cljs.core.logic.nominal.hash.call(null,self__.a,t).call(null,s__$4);
})).call(null,s__$3);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return s__$3;
} else
{return null;
}
}
}
}
}
}
})).call(null,s__$2);
});
cljs.core.logic.nominal.t181600.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_181602){var self__ = this;
var _181602__$1 = this;return self__.meta181601;
});
cljs.core.logic.nominal.t181600.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_181602,meta181601__$1){var self__ = this;
var _181602__$1 = this;return (new cljs.core.logic.nominal.t181600(self__.s,self__.this$,self__.meta181598,self__.x,self__.a,self__._hash,meta181601__$1));
});
cljs.core.logic.nominal.__GT_t181600 = (function __GT_t181600(s__$1,this$__$2,meta181598__$1,x__$3,a__$3,_hash__$2,meta181601){return (new cljs.core.logic.nominal.t181600(s__$1,this$__$2,meta181598__$1,x__$3,a__$3,_hash__$2,meta181601));
});
}
return (new cljs.core.logic.nominal.t181600(s,this$__$1,self__.meta181598,x__$2,a__$2,self__._hash,null));
});
cljs.core.logic.nominal.t181597.prototype.toString = (function (){var self__ = this;
var _ = this;return [cljs.core.str(self__.a),cljs.core.str("#"),cljs.core.str(self__.x)].join('');
});
cljs.core.logic.nominal.t181597.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_181599){var self__ = this;
var _181599__$1 = this;return self__.meta181598;
});
cljs.core.logic.nominal.t181597.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_181599,meta181598__$1){var self__ = this;
var _181599__$1 = this;return (new cljs.core.logic.nominal.t181597(self__.x,self__.a,self__._hash,meta181598__$1));
});
cljs.core.logic.nominal.__GT_t181597 = (function __GT_t181597(x__$1,a__$1,_hash__$1,meta181598){return (new cljs.core.logic.nominal.t181597(x__$1,a__$1,_hash__$1,meta181598));
});
}
return (new cljs.core.logic.nominal.t181597(x,a,_hash,null));
});
cljs.core.logic.nominal.hash = (function hash(a,t){return cljs.core.logic.cgoal.call(null,cljs.core.logic.nominal._hash.call(null,a,t));
});
cljs.core.logic.nominal._do_suspc = (function _do_suspc(t1,t2,swap,a){var x = (function (){var vs = cljs.core.PersistentHashSet.fromArray([t2], true);var seen = cljs.core.PersistentHashSet.EMPTY;while(true){
var vs__$1 = clojure.set.difference.call(null,vs,seen);if(cljs.core.empty_QMARK_.call(null,vs__$1))
{return true;
} else
{if(cljs.core.truth_(cljs.core.some.call(null,((function (vs,seen,vs__$1){
return (function (p1__181604_SHARP_){return cljs.core.logic.occurs_check.call(null,a,p1__181604_SHARP_,t1);
});})(vs,seen,vs__$1))
,vs__$1)))
{return false;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__181607 = cljs.core.reduce.call(null,((function (vs,seen,vs__$1){
return (function (s0,s1){return clojure.set.union.call(null,s0,new cljs.core.Keyword(null,"eset","eset",1017026895).cljs$core$IFn$_invoke$arity$1(cljs.core.logic.protocols.root_val.call(null,a,s1)));
});})(vs,seen,vs__$1))
,cljs.core.PersistentHashSet.EMPTY,vs__$1);
var G__181608 = clojure.set.union.call(null,vs__$1,seen);
vs = G__181607;
seen = G__181608;
continue;
}
} else
{return null;
}
}
}
break;
}
})();if(cljs.core.truth_(x))
{var vec__181606 = cljs.core.logic.nominal.swap_noms.call(null,t1,swap,a);var t1__$1 = cljs.core.nth.call(null,vec__181606,0,null);var a__$1 = cljs.core.nth.call(null,vec__181606,1,null);return cljs.core.logic._EQ__EQ_.call(null,t1__$1,t2).call(null,a__$1);
} else
{return null;
}
});
cljs.core.logic.nominal._suspc = (function _suspc(v1,v2,swap){if(typeof cljs.core.logic.nominal.t181616 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.nominal.t181616 = (function (swap,v2,v1,_suspc,meta181617){
this.swap = swap;
this.v2 = v2;
this.v1 = v1;
this._suspc = _suspc;
this.meta181617 = meta181617;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.nominal.t181616.cljs$lang$type = true;
cljs.core.logic.nominal.t181616.cljs$lang$ctorStr = "cljs.core.logic.nominal/t181616";
cljs.core.logic.nominal.t181616.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.logic.nominal/t181616");
});
cljs.core.logic.nominal.t181616.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$ = true;
cljs.core.logic.nominal.t181616.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440),null], null), null);
});
cljs.core.logic.nominal.t181616.prototype.cljs$core$logic$protocols$IReifiableConstraint$ = true;
cljs.core.logic.nominal.t181616.prototype.cljs$core$logic$protocols$IReifiableConstraint$_reifyc$arity$4 = (function (c,v,r,a){var self__ = this;
var c__$1 = this;var t1 = cljs.core.logic.walk_STAR_.call(null,r,cljs.core.logic.walk_STAR_.call(null,a,self__.v1));var t2 = cljs.core.logic.walk_STAR_.call(null,r,cljs.core.logic.walk_STAR_.call(null,a,self__.v2));var swap__$2 = cljs.core.logic.walk_STAR_.call(null,r,self__.swap);if((!(cljs.core.logic.lvar_QMARK_.call(null,t1))) && (!(cljs.core.logic.lvar_QMARK_.call(null,t2))) && ((cljs.core.first.call(null,swap__$2) instanceof cljs.core.Symbol)) && ((cljs.core.second.call(null,swap__$2) instanceof cljs.core.Symbol)))
{return cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"swap","swap",-1636988084,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,swap__$2),cljs.core._conj.call(null,cljs.core.List.EMPTY,t1),cljs.core._conj.call(null,cljs.core.List.EMPTY,t2))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,259),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,12),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,259),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,34)))));
} else
{return null;
}
});
cljs.core.logic.nominal.t181616.prototype.cljs$core$logic$protocols$IConstraintOp$ = true;
cljs.core.logic.nominal.t181616.prototype.cljs$core$logic$protocols$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic.nominal","suspc","cljs.core.logic.nominal/suspc",54642610,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,247),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,247),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,47)))));
});
cljs.core.logic.nominal.t181616.prototype.cljs$core$logic$protocols$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.v1,self__.v2], null);
});
cljs.core.logic.nominal.t181616.prototype.cljs$core$logic$protocols$IConstraintStep$ = true;
cljs.core.logic.nominal.t181616.prototype.cljs$core$logic$protocols$IConstraintStep$_step$arity$2 = (function (this$,a){var self__ = this;
var this$__$1 = this;var t1 = cljs.core.logic.protocols.walk.call(null,a,self__.v1);var t2 = cljs.core.logic.protocols.walk.call(null,a,self__.v2);if(typeof cljs.core.logic.nominal.t181619 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.nominal.t181619 = (function (t2,t1,a,this$,meta181617,swap,v2,v1,_suspc,meta181620){
this.t2 = t2;
this.t1 = t1;
this.a = a;
this.this$ = this$;
this.meta181617 = meta181617;
this.swap = swap;
this.v2 = v2;
this.v1 = v1;
this._suspc = _suspc;
this.meta181620 = meta181620;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.nominal.t181619.cljs$lang$type = true;
cljs.core.logic.nominal.t181619.cljs$lang$ctorStr = "cljs.core.logic.nominal/t181619";
cljs.core.logic.nominal.t181619.cljs$lang$ctorPrWriter = (function (this__6833__auto__,writer__6834__auto__,opt__6835__auto__){return cljs.core._write.call(null,writer__6834__auto__,"cljs.core.logic.nominal/t181619");
});
cljs.core.logic.nominal.t181619.prototype.cljs$core$logic$protocols$IRunnable$ = true;
cljs.core.logic.nominal.t181619.prototype.cljs$core$logic$protocols$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (!(cljs.core.logic.lvar_QMARK_.call(null,self__.t1))) || (!(cljs.core.logic.lvar_QMARK_.call(null,self__.t2))) || (cljs.core._EQ_.call(null,self__.t1,self__.t2));
});
cljs.core.logic.nominal.t181619.prototype.call = (function (self__,a__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;return cljs.core.logic.composeg.call(null,cljs.core.logic.remcg.call(null,self__.this$),(function (a__$3){if(!(cljs.core.logic.lvar_QMARK_.call(null,self__.t1)))
{return cljs.core.logic.nominal._do_suspc.call(null,self__.t1,self__.t2,self__.swap,a__$3);
} else
{if(!(cljs.core.logic.lvar_QMARK_.call(null,self__.t2)))
{return cljs.core.logic.nominal._do_suspc.call(null,self__.t2,self__.t1,self__.swap,a__$3);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var a_STAR_ = self__.swap;var a__$4 = a__$3;while(true){
if(cljs.core.empty_QMARK_.call(null,a_STAR_))
{return a__$4;
} else
{{
var G__181623 = cljs.core.rest.call(null,a_STAR_);
var G__181624 = cljs.core.logic.nominal.hash.call(null,cljs.core.first.call(null,a_STAR_),self__.t2).call(null,a__$4);
a_STAR_ = G__181623;
a__$4 = G__181624;
continue;
}
}
break;
}
} else
{return null;
}
}
}
})).call(null,a__$2);
});
cljs.core.logic.nominal.t181619.prototype.apply = (function (self__,args181622){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args181622)));
});
cljs.core.logic.nominal.t181619.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a__$2){var self__ = this;
var _ = this;return cljs.core.logic.composeg.call(null,cljs.core.logic.remcg.call(null,self__.this$),(function (a__$3){if(!(cljs.core.logic.lvar_QMARK_.call(null,self__.t1)))
{return cljs.core.logic.nominal._do_suspc.call(null,self__.t1,self__.t2,self__.swap,a__$3);
} else
{if(!(cljs.core.logic.lvar_QMARK_.call(null,self__.t2)))
{return cljs.core.logic.nominal._do_suspc.call(null,self__.t2,self__.t1,self__.swap,a__$3);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var a_STAR_ = self__.swap;var a__$4 = a__$3;while(true){
if(cljs.core.empty_QMARK_.call(null,a_STAR_))
{return a__$4;
} else
{{
var G__181625 = cljs.core.rest.call(null,a_STAR_);
var G__181626 = cljs.core.logic.nominal.hash.call(null,cljs.core.first.call(null,a_STAR_),self__.t2).call(null,a__$4);
a_STAR_ = G__181625;
a__$4 = G__181626;
continue;
}
}
break;
}
} else
{return null;
}
}
}
})).call(null,a__$2);
});
cljs.core.logic.nominal.t181619.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_181621){var self__ = this;
var _181621__$1 = this;return self__.meta181620;
});
cljs.core.logic.nominal.t181619.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_181621,meta181620__$1){var self__ = this;
var _181621__$1 = this;return (new cljs.core.logic.nominal.t181619(self__.t2,self__.t1,self__.a,self__.this$,self__.meta181617,self__.swap,self__.v2,self__.v1,self__._suspc,meta181620__$1));
});
cljs.core.logic.nominal.__GT_t181619 = (function __GT_t181619(t2__$1,t1__$1,a__$1,this$__$2,meta181617__$1,swap__$2,v2__$2,v1__$2,_suspc__$2,meta181620){return (new cljs.core.logic.nominal.t181619(t2__$1,t1__$1,a__$1,this$__$2,meta181617__$1,swap__$2,v2__$2,v1__$2,_suspc__$2,meta181620));
});
}
return (new cljs.core.logic.nominal.t181619(t2,t1,a,this$__$1,self__.meta181617,self__.swap,self__.v2,self__.v1,self__._suspc,null));
});
cljs.core.logic.nominal.t181616.prototype.toString = (function (){var self__ = this;
var _ = this;return [cljs.core.str("suspc"),cljs.core.str(self__.v1),cljs.core.str(self__.v2),cljs.core.str(self__.swap)].join('');
});
cljs.core.logic.nominal.t181616.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_181618){var self__ = this;
var _181618__$1 = this;return self__.meta181617;
});
cljs.core.logic.nominal.t181616.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_181618,meta181617__$1){var self__ = this;
var _181618__$1 = this;return (new cljs.core.logic.nominal.t181616(self__.swap,self__.v2,self__.v1,self__._suspc,meta181617__$1));
});
cljs.core.logic.nominal.__GT_t181616 = (function __GT_t181616(swap__$1,v2__$1,v1__$1,_suspc__$1,meta181617){return (new cljs.core.logic.nominal.t181616(swap__$1,v2__$1,v1__$1,_suspc__$1,meta181617));
});
}
return (new cljs.core.logic.nominal.t181616(swap,v2,v1,_suspc,null));
});
cljs.core.logic.nominal.suspc = (function suspc(v1,v2,swap){return cljs.core.logic.cgoal.call(null,cljs.core.logic.nominal._suspc.call(null,v1,v2,swap));
});

/**
* @constructor
* @param {*} binding_nom
* @param {*} body
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
cljs.core.logic.nominal.Tie = (function (binding_nom,body,__meta,__extmap){
this.binding_nom = binding_nom;
this.body = body;
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
cljs.core.logic.nominal.Tie.prototype.cljs$core$logic$protocols$IReifyTerm$ = true;
cljs.core.logic.nominal.Tie.prototype.cljs$core$logic$protocols$IReifyTerm$reify_term$arity$2 = (function (v,s){var self__ = this;
var v__$1 = this;var s__$1 = cljs.core.logic._reify_STAR_.call(null,s,self__.binding_nom);var s__$2 = cljs.core.logic._reify_STAR_.call(null,s__$1,self__.body);return s__$2;
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$logic$nominal$INomSwap$ = true;
cljs.core.logic.nominal.Tie.prototype.cljs$core$logic$nominal$INomSwap$swap_noms$arity$3 = (function (t,swap,s){var self__ = this;
var t__$1 = this;var vec__181630 = cljs.core.logic.nominal.swap_noms.call(null,new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(t__$1),swap,s);var tbody = cljs.core.nth.call(null,vec__181630,0,null);var s__$1 = cljs.core.nth.call(null,vec__181630,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta.call(null,cljs.core.logic.nominal.tie.call(null,cljs.core.logic.nominal.nom_swap.call(null,new cljs.core.Keyword(null,"binding-nom","binding-nom",727512822).cljs$core$IFn$_invoke$arity$1(t__$1),swap),tbody),cljs.core.meta.call(null,t__$1)),s__$1], null);
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6846__auto__){var self__ = this;
var this__6846__auto____$1 = this;var h__6700__auto__ = self__.__hash;if(!((h__6700__auto__ == null)))
{return h__6700__auto__;
} else
{var h__6700__auto____$1 = cljs.core.hash_imap.call(null,this__6846__auto____$1);self__.__hash = h__6700__auto____$1;
return h__6700__auto____$1;
}
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$logic$protocols$IUnifyTerms$ = true;
cljs.core.logic.nominal.Tie.prototype.cljs$core$logic$protocols$IUnifyTerms$unify_terms$arity$3 = (function (v,u,s){var self__ = this;
var v__$1 = this;if(cljs.core.truth_(cljs.core.logic.nominal.tie_QMARK_.call(null,u)))
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"binding-nom","binding-nom",727512822).cljs$core$IFn$_invoke$arity$1(v__$1),new cljs.core.Keyword(null,"binding-nom","binding-nom",727512822).cljs$core$IFn$_invoke$arity$1(u)))
{return cljs.core.logic.unify.call(null,s,new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(v__$1),new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(u));
} else
{var vec__181631 = cljs.core.logic.nominal.swap_noms.call(null,new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(v__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"binding-nom","binding-nom",727512822).cljs$core$IFn$_invoke$arity$1(v__$1),new cljs.core.Keyword(null,"binding-nom","binding-nom",727512822).cljs$core$IFn$_invoke$arity$1(u)], null),s);var t = cljs.core.nth.call(null,vec__181631,0,null);var s__$1 = cljs.core.nth.call(null,vec__181631,1,null);return cljs.core.logic.composeg.call(null,cljs.core.logic.nominal.hash.call(null,new cljs.core.Keyword(null,"binding-nom","binding-nom",727512822).cljs$core$IFn$_invoke$arity$1(u),new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(v__$1)),cljs.core.logic._EQ__EQ_.call(null,t,new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(u))).call(null,s__$1);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6851__auto__,k__6852__auto__){var self__ = this;
var this__6851__auto____$1 = this;return cljs.core._lookup.call(null,this__6851__auto____$1,k__6852__auto__,null);
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6853__auto__,k181628,else__6854__auto__){var self__ = this;
var this__6853__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k181628,new cljs.core.Keyword(null,"binding-nom","binding-nom",727512822)))
{return self__.binding_nom;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k181628,new cljs.core.Keyword(null,"body","body",1016933652)))
{return self__.body;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k181628,else__6854__auto__);
} else
{return null;
}
}
}
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6858__auto__,k__6859__auto__,G__181627){var self__ = this;
var this__6858__auto____$1 = this;var pred__181632 = cljs.core.keyword_identical_QMARK_;var expr__181633 = k__6859__auto__;if(cljs.core.truth_(pred__181632.call(null,new cljs.core.Keyword(null,"binding-nom","binding-nom",727512822),expr__181633)))
{return (new cljs.core.logic.nominal.Tie(G__181627,self__.body,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__181632.call(null,new cljs.core.Keyword(null,"body","body",1016933652),expr__181633)))
{return (new cljs.core.logic.nominal.Tie(self__.binding_nom,G__181627,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.logic.nominal.Tie(self__.binding_nom,self__.body,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6859__auto__,G__181627),null));
}
}
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$logic$protocols$IForceAnswerTerm$ = true;
cljs.core.logic.nominal.Tie.prototype.cljs$core$logic$protocols$IForceAnswerTerm$_force_ans$arity$2 = (function (v,x){var self__ = this;
var v__$1 = this;return cljs.core.logic.force_ans.call(null,new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(v__$1));
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6865__auto__,writer__6866__auto__,opts__6867__auto__){var self__ = this;
var this__6865__auto____$1 = this;var pr_pair__6868__auto__ = (function (keyval__6869__auto__){return cljs.core.pr_sequential_writer.call(null,writer__6866__auto__,cljs.core.pr_writer,""," ","",opts__6867__auto__,keyval__6869__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__6866__auto__,pr_pair__6868__auto__,"#cljs.core.logic.nominal.Tie{",", ","}",opts__6867__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding-nom","binding-nom",727512822),self__.binding_nom],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"body","body",1016933652),self__.body],null))], null),self__.__extmap));
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6856__auto__,entry__6857__auto__){var self__ = this;
var this__6856__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__6857__auto__))
{return cljs.core._assoc.call(null,this__6856__auto____$1,cljs.core._nth.call(null,entry__6857__auto__,0),cljs.core._nth.call(null,entry__6857__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__6856__auto____$1,entry__6857__auto__);
}
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$logic$protocols$IWalkTerm$ = true;
cljs.core.logic.nominal.Tie.prototype.cljs$core$logic$protocols$IWalkTerm$walk_term$arity$2 = (function (v,f){var self__ = this;
var v__$1 = this;return cljs.core.with_meta.call(null,cljs.core.logic.nominal.tie.call(null,cljs.core.logic.protocols.walk_term.call(null,new cljs.core.Keyword(null,"binding-nom","binding-nom",727512822).cljs$core$IFn$_invoke$arity$1(v__$1),f),cljs.core.logic.protocols.walk_term.call(null,new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(v__$1),f)),cljs.core.meta.call(null,v__$1));
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$logic$protocols$IConstrainTree$ = true;
cljs.core.logic.nominal.Tie.prototype.cljs$core$logic$protocols$IConstrainTree$_constrain_tree$arity$3 = (function (t,fc,s){var self__ = this;
var t__$1 = this;return fc.call(null,new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(t__$1),s);
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6863__auto__){var self__ = this;
var this__6863__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding-nom","binding-nom",727512822),self__.binding_nom],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"body","body",1016933652),self__.body],null))], null),self__.__extmap));
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$logic$protocols$ITreeTerm$ = true;
cljs.core.logic.nominal.Tie.prototype.cljs$core$logic$protocols$IOccursCheckTerm$ = true;
cljs.core.logic.nominal.Tie.prototype.cljs$core$logic$protocols$IOccursCheckTerm$occurs_check_term$arity$3 = (function (v,x,s){var self__ = this;
var v__$1 = this;return cljs.core.logic.occurs_check.call(null,s,x,new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(v__$1));
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6855__auto__){var self__ = this;
var this__6855__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6847__auto__,other__6848__auto__){var self__ = this;
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
cljs.core.logic.nominal.Tie.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6850__auto__,G__181627){var self__ = this;
var this__6850__auto____$1 = this;return (new cljs.core.logic.nominal.Tie(self__.binding_nom,self__.body,G__181627,self__.__extmap,self__.__hash));
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6849__auto__){var self__ = this;
var this__6849__auto____$1 = this;return self__.__meta;
});
cljs.core.logic.nominal.Tie.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6860__auto__,k__6861__auto__){var self__ = this;
var this__6860__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"binding-nom","binding-nom",727512822),null,new cljs.core.Keyword(null,"body","body",1016933652),null], null), null),k__6861__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6860__auto____$1),self__.__meta),k__6861__auto__);
} else
{return (new cljs.core.logic.nominal.Tie(self__.binding_nom,self__.body,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6861__auto__)),null));
}
});
cljs.core.logic.nominal.Tie.cljs$lang$type = true;
cljs.core.logic.nominal.Tie.cljs$lang$ctorPrSeq = (function (this__6885__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.core.logic.nominal/Tie");
});
cljs.core.logic.nominal.Tie.cljs$lang$ctorPrWriter = (function (this__6885__auto__,writer__6886__auto__){return cljs.core._write.call(null,writer__6886__auto__,"cljs.core.logic.nominal/Tie");
});
cljs.core.logic.nominal.__GT_Tie = (function __GT_Tie(binding_nom,body){return (new cljs.core.logic.nominal.Tie(binding_nom,body));
});
cljs.core.logic.nominal.map__GT_Tie = (function map__GT_Tie(G__181629){return (new cljs.core.logic.nominal.Tie(new cljs.core.Keyword(null,"binding-nom","binding-nom",727512822).cljs$core$IFn$_invoke$arity$1(G__181629),new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(G__181629),null,cljs.core.dissoc.call(null,G__181629,new cljs.core.Keyword(null,"binding-nom","binding-nom",727512822),new cljs.core.Keyword(null,"body","body",1016933652))));
});
cljs.core.logic.nominal.tie = (function tie(binding_nom,body){return (new cljs.core.logic.nominal.Tie(binding_nom,body));
});
cljs.core.logic.nominal.tie_QMARK_ = (function tie_QMARK_(x){return (x instanceof cljs.core.logic.nominal.Tie);
});
