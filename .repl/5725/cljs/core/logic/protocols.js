// Compiled by ClojureScript 0.0-2080
goog.provide('cljs.core.logic.protocols');
goog.require('cljs.core');
cljs.core.logic.protocols.IBindable = (function (){var obj50028 = {};return obj50028;
})();
cljs.core.logic.protocols.ITreeTerm = (function (){var obj50030 = {};return obj50030;
})();
cljs.core.logic.protocols.IVar = (function (){var obj50032 = {};return obj50032;
})();
cljs.core.logic.protocols.IUninitialized = (function (){var obj50034 = {};return obj50034;
})();
cljs.core.logic.protocols._uninitialized = (function _uninitialized(coll){if((function (){var and__5145__auto__ = coll;if(and__5145__auto__)
{return coll.cljs$core$logic$protocols$IUninitialized$_uninitialized$arity$1;
} else
{return and__5145__auto__;
}
})())
{return coll.cljs$core$logic$protocols$IUninitialized$_uninitialized$arity$1(coll);
} else
{var x__5760__auto__ = (((coll == null))?null:coll);return (function (){var or__5157__auto__ = (cljs.core.logic.protocols._uninitialized[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.protocols._uninitialized["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IUninitialized.-uninitialized",coll);
}
}
})().call(null,coll);
}
});
cljs.core.logic.protocols.IUnifyTerms = (function (){var obj50036 = {};return obj50036;
})();
cljs.core.logic.protocols.unify_terms = (function unify_terms(u,v,s){if((function (){var and__5145__auto__ = u;if(and__5145__auto__)
{return u.cljs$core$logic$protocols$IUnifyTerms$unify_terms$arity$3;
} else
{return and__5145__auto__;
}
})())
{return u.cljs$core$logic$protocols$IUnifyTerms$unify_terms$arity$3(u,v,s);
} else
{var x__5760__auto__ = (((u == null))?null:u);return (function (){var or__5157__auto__ = (cljs.core.logic.protocols.unify_terms[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.protocols.unify_terms["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IUnifyTerms.unify-terms",u);
}
}
})().call(null,u,v,s);
}
});
cljs.core.logic.protocols.IUnifyWithRecord = (function (){var obj50038 = {};return obj50038;
})();
cljs.core.logic.protocols.unify_with_record = (function unify_with_record(u,v,s){if((function (){var and__5145__auto__ = u;if(and__5145__auto__)
{return u.cljs$core$logic$protocols$IUnifyWithRecord$unify_with_record$arity$3;
} else
{return and__5145__auto__;
}
})())
{return u.cljs$core$logic$protocols$IUnifyWithRecord$unify_with_record$arity$3(u,v,s);
} else
{var x__5760__auto__ = (((u == null))?null:u);return (function (){var or__5157__auto__ = (cljs.core.logic.protocols.unify_with_record[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.protocols.unify_with_record["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IUnifyWithRecord.unify-with-record",u);
}
}
})().call(null,u,v,s);
}
});
cljs.core.logic.protocols.INonStorable = (function (){var obj50040 = {};return obj50040;
})();
cljs.core.logic.protocols.non_storable_QMARK_ = (function non_storable_QMARK_(x){var G__50042 = x;if(G__50042)
{var bit__5783__auto__ = null;if(cljs.core.truth_((function (){var or__5157__auto__ = bit__5783__auto__;if(cljs.core.truth_(or__5157__auto__))
{return or__5157__auto__;
} else
{return G__50042.cljs$core$logic$protocols$INonStorable$;
}
})()))
{return true;
} else
{if((!G__50042.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.logic.protocols.INonStorable,G__50042);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.logic.protocols.INonStorable,G__50042);
}
});
cljs.core.logic.protocols.LConsSeq = (function (){var obj50044 = {};return obj50044;
})();
cljs.core.logic.protocols.lfirst = (function lfirst(this$){if((function (){var and__5145__auto__ = this$;if(and__5145__auto__)
{return this$.cljs$core$logic$protocols$LConsSeq$lfirst$arity$1;
} else
{return and__5145__auto__;
}
})())
{return this$.cljs$core$logic$protocols$LConsSeq$lfirst$arity$1(this$);
} else
{var x__5760__auto__ = (((this$ == null))?null:this$);return (function (){var or__5157__auto__ = (cljs.core.logic.protocols.lfirst[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.protocols.lfirst["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"LConsSeq.lfirst",this$);
}
}
})().call(null,this$);
}
});
cljs.core.logic.protocols.lnext = (function lnext(this$){if((function (){var and__5145__auto__ = this$;if(and__5145__auto__)
{return this$.cljs$core$logic$protocols$LConsSeq$lnext$arity$1;
} else
{return and__5145__auto__;
}
})())
{return this$.cljs$core$logic$protocols$LConsSeq$lnext$arity$1(this$);
} else
{var x__5760__auto__ = (((this$ == null))?null:this$);return (function (){var or__5157__auto__ = (cljs.core.logic.protocols.lnext[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.protocols.lnext["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"LConsSeq.lnext",this$);
}
}
})().call(null,this$);
}
});
cljs.core.logic.protocols.LConsPrint = (function (){var obj50046 = {};return obj50046;
})();
cljs.core.logic.protocols.toShortString = (function toShortString(this$){if((function (){var and__5145__auto__ = this$;if(and__5145__auto__)
{return this$.cljs$core$logic$protocols$LConsPrint$toShortString$arity$1;
} else
{return and__5145__auto__;
}
})())
{return this$.cljs$core$logic$protocols$LConsPrint$toShortString$arity$1(this$);
} else
{var x__5760__auto__ = (((this$ == null))?null:this$);return (function (){var or__5157__auto__ = (cljs.core.logic.protocols.toShortString[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.protocols.toShortString["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"LConsPrint.toShortString",this$);
}
}
})().call(null,this$);
}
});
cljs.core.logic.protocols.ISubstitutions = (function (){var obj50048 = {};return obj50048;
})();
cljs.core.logic.protocols.ext_no_check = (function ext_no_check(this$,x,v){if((function (){var and__5145__auto__ = this$;if(and__5145__auto__)
{return this$.cljs$core$logic$protocols$ISubstitutions$ext_no_check$arity$3;
} else
{return and__5145__auto__;
}
})())
{return this$.cljs$core$logic$protocols$ISubstitutions$ext_no_check$arity$3(this$,x,v);
} else
{var x__5760__auto__ = (((this$ == null))?null:this$);return (function (){var or__5157__auto__ = (cljs.core.logic.protocols.ext_no_check[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.protocols.ext_no_check["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISubstitutions.ext-no-check",this$);
}
}
})().call(null,this$,x,v);
}
});
cljs.core.logic.protocols.walk = (function walk(this$,x){if((function (){var and__5145__auto__ = this$;if(and__5145__auto__)
{return this$.cljs$core$logic$protocols$ISubstitutions$walk$arity$2;
} else
{return and__5145__auto__;
}
})())
{return this$.cljs$core$logic$protocols$ISubstitutions$walk$arity$2(this$,x);
} else
{var x__5760__auto__ = (((this$ == null))?null:this$);return (function (){var or__5157__auto__ = (cljs.core.logic.protocols.walk[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.protocols.walk["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISubstitutions.walk",this$);
}
}
})().call(null,this$,x);
}
});
cljs.core.logic.protocols.IReifyTerm = (function (){var obj50050 = {};return obj50050;
})();
cljs.core.logic.protocols.reify_term = (function reify_term(v,s){if((function (){var and__5145__auto__ = v;if(and__5145__auto__)
{return v.cljs$core$logic$protocols$IReifyTerm$reify_term$arity$2;
} else
{return and__5145__auto__;
}
})())
{return v.cljs$core$logic$protocols$IReifyTerm$reify_term$arity$2(v,s);
} else
{var x__5760__auto__ = (((v == null))?null:v);return (function (){var or__5157__auto__ = (cljs.core.logic.protocols.reify_term[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.protocols.reify_term["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IReifyTerm.reify-term",v);
}
}
})().call(null,v,s);
}
});
cljs.core.logic.protocols.IWalkTerm = (function (){var obj50052 = {};return obj50052;
})();
cljs.core.logic.protocols.walk_term = (function walk_term(v,f){if((function (){var and__5145__auto__ = v;if(and__5145__auto__)
{return v.cljs$core$logic$protocols$IWalkTerm$walk_term$arity$2;
} else
{return and__5145__auto__;
}
})())
{return v.cljs$core$logic$protocols$IWalkTerm$walk_term$arity$2(v,f);
} else
{var x__5760__auto__ = (((v == null))?null:v);return (function (){var or__5157__auto__ = (cljs.core.logic.protocols.walk_term[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.protocols.walk_term["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWalkTerm.walk-term",v);
}
}
})().call(null,v,f);
}
});
cljs.core.logic.protocols.IOccursCheckTerm = (function (){var obj50054 = {};return obj50054;
})();
cljs.core.logic.protocols.occurs_check_term = (function occurs_check_term(v,x,s){if((function (){var and__5145__auto__ = v;if(and__5145__auto__)
{return v.cljs$core$logic$protocols$IOccursCheckTerm$occurs_check_term$arity$3;
} else
{return and__5145__auto__;
}
})())
{return v.cljs$core$logic$protocols$IOccursCheckTerm$occurs_check_term$arity$3(v,x,s);
} else
{var x__5760__auto__ = (((v == null))?null:v);return (function (){var or__5157__auto__ = (cljs.core.logic.protocols.occurs_check_term[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.protocols.occurs_check_term["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IOccursCheckTerm.occurs-check-term",v);
}
}
})().call(null,v,x,s);
}
});
cljs.core.logic.protocols.IBuildTerm = (function (){var obj50056 = {};return obj50056;
})();
cljs.core.logic.protocols.build_term = (function build_term(u,s){if((function (){var and__5145__auto__ = u;if(and__5145__auto__)
{return u.cljs$core$logic$protocols$IBuildTerm$build_term$arity$2;
} else
{return and__5145__auto__;
}
})())
{return u.cljs$core$logic$protocols$IBuildTerm$build_term$arity$2(u,s);
} else
{var x__5760__auto__ = (((u == null))?null:u);return (function (){var or__5157__auto__ = (cljs.core.logic.protocols.build_term[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.protocols.build_term["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IBuildTerm.build-term",u);
}
}
})().call(null,u,s);
}
});
cljs.core.logic.protocols.IBind = (function (){var obj50058 = {};return obj50058;
})();
cljs.core.logic.protocols.bind = (function bind(this$,g){if((function (){var and__5145__auto__ = this$;if(and__5145__auto__)
{return this$.cljs$core$logic$protocols$IBind$bind$arity$2;
} else
{return and__5145__auto__;
}
})())
{return this$.cljs$core$logic$protocols$IBind$bind$arity$2(this$,g);
} else
{var x__5760__auto__ = (((this$ == null))?null:this$);return (function (){var or__5157__auto__ = (cljs.core.logic.protocols.bind[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.protocols.bind["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IBind.bind",this$);
}
}
})().call(null,this$,g);
}
});
cljs.core.logic.protocols.IMPlus = (function (){var obj50060 = {};return obj50060;
})();
cljs.core.logic.protocols.mplus = (function mplus(a,f){if((function (){var and__5145__auto__ = a;if(and__5145__auto__)
{return a.cljs$core$logic$protocols$IMPlus$mplus$arity$2;
} else
{return and__5145__auto__;
}
})())
{return a.cljs$core$logic$protocols$IMPlus$mplus$arity$2(a,f);
} else
{var x__5760__auto__ = (((a == null))?null:a);return (function (){var or__5157__auto__ = (cljs.core.logic.protocols.mplus[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.protocols.mplus["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMPlus.mplus",a);
}
}
})().call(null,a,f);
}
});
cljs.core.logic.protocols.ITake = (function (){var obj50062 = {};return obj50062;
})();
cljs.core.logic.protocols.take_STAR_ = (function take_STAR_(a){if((function (){var and__5145__auto__ = a;if(and__5145__auto__)
{return a.cljs$core$logic$protocols$ITake$take_STAR_$arity$1;
} else
{return and__5145__auto__;
}
})())
{return a.cljs$core$logic$protocols$ITake$take_STAR_$arity$1(a);
} else
{var x__5760__auto__ = (((a == null))?null:a);return (function (){var or__5157__auto__ = (cljs.core.logic.protocols.take_STAR_[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.protocols.take_STAR_["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITake.take*",a);
}
}
})().call(null,a);
}
});
cljs.core.logic.protocols.IIfA = (function (){var obj50064 = {};return obj50064;
})();
cljs.core.logic.protocols.ifa = (function ifa(b,gs,c){if((function (){var and__5145__auto__ = b;if(and__5145__auto__)
{return b.cljs$core$logic$protocols$IIfA$ifa$arity$3;
} else
{return and__5145__auto__;
}
})())
{return b.cljs$core$logic$protocols$IIfA$ifa$arity$3(b,gs,c);
} else
{var x__5760__auto__ = (((b == null))?null:b);return (function (){var or__5157__auto__ = (cljs.core.logic.protocols.ifa[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.protocols.ifa["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IIfA.ifa",b);
}
}
})().call(null,b,gs,c);
}
});
cljs.core.logic.protocols.IIfU = (function (){var obj50066 = {};return obj50066;
})();
cljs.core.logic.protocols.ifu = (function ifu(b,gs,c){if((function (){var and__5145__auto__ = b;if(and__5145__auto__)
{return b.cljs$core$logic$protocols$IIfU$ifu$arity$3;
} else
{return and__5145__auto__;
}
})())
{return b.cljs$core$logic$protocols$IIfU$ifu$arity$3(b,gs,c);
} else
{var x__5760__auto__ = (((b == null))?null:b);return (function (){var or__5157__auto__ = (cljs.core.logic.protocols.ifu[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.protocols.ifu["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IIfU.ifu",b);
}
}
})().call(null,b,gs,c);
}
});
cljs.core.logic.protocols.IRel = (function (){var obj50068 = {};return obj50068;
})();
cljs.core.logic.protocols.setfn = (function setfn(this$,arity,f){if((function (){var and__5145__auto__ = this$;if(and__5145__auto__)
{return this$.cljs$core$logic$protocols$IRel$setfn$arity$3;
} else
{return and__5145__auto__;
}
})())
{return this$.cljs$core$logic$protocols$IRel$setfn$arity$3(this$,arity,f);
} else
{var x__5760__auto__ = (((this$ == null))?null:this$);return (function (){var or__5157__auto__ = (cljs.core.logic.protocols.setfn[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.protocols.setfn["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRel.setfn",this$);
}
}
})().call(null,this$,arity,f);
}
});
cljs.core.logic.protocols.indexes_for = (function indexes_for(this$,arity){if((function (){var and__5145__auto__ = this$;if(and__5145__auto__)
{return this$.cljs$core$logic$protocols$IRel$indexes_for$arity$2;
} else
{return and__5145__auto__;
}
})())
{return this$.cljs$core$logic$protocols$IRel$indexes_for$arity$2(this$,arity);
} else
{var x__5760__auto__ = (((this$ == null))?null:this$);return (function (){var or__5157__auto__ = (cljs.core.logic.protocols.indexes_for[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.protocols.indexes_for["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRel.indexes-for",this$);
}
}
})().call(null,this$,arity);
}
});
cljs.core.logic.protocols.add_indexes = (function add_indexes(this$,arity,index){if((function (){var and__5145__auto__ = this$;if(and__5145__auto__)
{return this$.cljs$core$logic$protocols$IRel$add_indexes$arity$3;
} else
{return and__5145__auto__;
}
})())
{return this$.cljs$core$logic$protocols$IRel$add_indexes$arity$3(this$,arity,index);
} else
{var x__5760__auto__ = (((this$ == null))?null:this$);return (function (){var or__5157__auto__ = (cljs.core.logic.protocols.add_indexes[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.protocols.add_indexes["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRel.add-indexes",this$);
}
}
})().call(null,this$,arity,index);
}
});
cljs.core.logic.protocols.ITabled = (function (){var obj50070 = {};return obj50070;
})();
cljs.core.logic.protocols._reify_tabled = (function _reify_tabled(this$,v){if((function (){var and__5145__auto__ = this$;if(and__5145__auto__)
{return this$.cljs$core$logic$protocols$ITabled$_reify_tabled$arity$2;
} else
{return and__5145__auto__;
}
})())
{return this$.cljs$core$logic$protocols$ITabled$_reify_tabled$arity$2(this$,v);
} else
{var x__5760__auto__ = (((this$ == null))?null:this$);return (function (){var or__5157__auto__ = (cljs.core.logic.protocols._reify_tabled[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.protocols._reify_tabled["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITabled.-reify-tabled",this$);
}
}
})().call(null,this$,v);
}
});
cljs.core.logic.protocols.reify_tabled = (function reify_tabled(this$,v){if((function (){var and__5145__auto__ = this$;if(and__5145__auto__)
{return this$.cljs$core$logic$protocols$ITabled$reify_tabled$arity$2;
} else
{return and__5145__auto__;
}
})())
{return this$.cljs$core$logic$protocols$ITabled$reify_tabled$arity$2(this$,v);
} else
{var x__5760__auto__ = (((this$ == null))?null:this$);return (function (){var or__5157__auto__ = (cljs.core.logic.protocols.reify_tabled[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.protocols.reify_tabled["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITabled.reify-tabled",this$);
}
}
})().call(null,this$,v);
}
});
cljs.core.logic.protocols.reuse = (function reuse(this$,argv,cache,start,end){if((function (){var and__5145__auto__ = this$;if(and__5145__auto__)
{return this$.cljs$core$logic$protocols$ITabled$reuse$arity$5;
} else
{return and__5145__auto__;
}
})())
{return this$.cljs$core$logic$protocols$ITabled$reuse$arity$5(this$,argv,cache,start,end);
} else
{var x__5760__auto__ = (((this$ == null))?null:this$);return (function (){var or__5157__auto__ = (cljs.core.logic.protocols.reuse[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.protocols.reuse["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITabled.reuse",this$);
}
}
})().call(null,this$,argv,cache,start,end);
}
});
cljs.core.logic.protocols.subunify = (function subunify(this$,arg,ans){if((function (){var and__5145__auto__ = this$;if(and__5145__auto__)
{return this$.cljs$core$logic$protocols$ITabled$subunify$arity$3;
} else
{return and__5145__auto__;
}
})())
{return this$.cljs$core$logic$protocols$ITabled$subunify$arity$3(this$,arg,ans);
} else
{var x__5760__auto__ = (((this$ == null))?null:this$);return (function (){var or__5157__auto__ = (cljs.core.logic.protocols.subunify[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.protocols.subunify["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITabled.subunify",this$);
}
}
})().call(null,this$,arg,ans);
}
});
cljs.core.logic.protocols.ISuspendedStream = (function (){var obj50072 = {};return obj50072;
})();
cljs.core.logic.protocols.ready_QMARK_ = (function ready_QMARK_(this$){if((function (){var and__5145__auto__ = this$;if(and__5145__auto__)
{return this$.cljs$core$logic$protocols$ISuspendedStream$ready_QMARK_$arity$1;
} else
{return and__5145__auto__;
}
})())
{return this$.cljs$core$logic$protocols$ISuspendedStream$ready_QMARK_$arity$1(this$);
} else
{var x__5760__auto__ = (((this$ == null))?null:this$);return (function (){var or__5157__auto__ = (cljs.core.logic.protocols.ready_QMARK_[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.protocols.ready_QMARK_["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISuspendedStream.ready?",this$);
}
}
})().call(null,this$);
}
});
cljs.core.logic.protocols.IAnswerCache = (function (){var obj50074 = {};return obj50074;
})();
cljs.core.logic.protocols._add = (function _add(this$,x){if((function (){var and__5145__auto__ = this$;if(and__5145__auto__)
{return this$.cljs$core$logic$protocols$IAnswerCache$_add$arity$2;
} else
{return and__5145__auto__;
}
})())
{return this$.cljs$core$logic$protocols$IAnswerCache$_add$arity$2(this$,x);
} else
{var x__5760__auto__ = (((this$ == null))?null:this$);return (function (){var or__5157__auto__ = (cljs.core.logic.protocols._add[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.protocols._add["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAnswerCache.-add",this$);
}
}
})().call(null,this$,x);
}
});
cljs.core.logic.protocols._cached_QMARK_ = (function _cached_QMARK_(this$,x){if((function (){var and__5145__auto__ = this$;if(and__5145__auto__)
{return this$.cljs$core$logic$protocols$IAnswerCache$_cached_QMARK_$arity$2;
} else
{return and__5145__auto__;
}
})())
{return this$.cljs$core$logic$protocols$IAnswerCache$_cached_QMARK_$arity$2(this$,x);
} else
{var x__5760__auto__ = (((this$ == null))?null:this$);return (function (){var or__5157__auto__ = (cljs.core.logic.protocols._cached_QMARK_[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.protocols._cached_QMARK_["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAnswerCache.-cached?",this$);
}
}
})().call(null,this$,x);
}
});
cljs.core.logic.protocols.ISubstitutionsCLP = (function (){var obj50076 = {};return obj50076;
})();
cljs.core.logic.protocols.root_val = (function root_val(this$,x){if((function (){var and__5145__auto__ = this$;if(and__5145__auto__)
{return this$.cljs$core$logic$protocols$ISubstitutionsCLP$root_val$arity$2;
} else
{return and__5145__auto__;
}
})())
{return this$.cljs$core$logic$protocols$ISubstitutionsCLP$root_val$arity$2(this$,x);
} else
{var x__5760__auto__ = (((this$ == null))?null:this$);return (function (){var or__5157__auto__ = (cljs.core.logic.protocols.root_val[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.protocols.root_val["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISubstitutionsCLP.root-val",this$);
}
}
})().call(null,this$,x);
}
});
cljs.core.logic.protocols.root_var = (function root_var(this$,x){if((function (){var and__5145__auto__ = this$;if(and__5145__auto__)
{return this$.cljs$core$logic$protocols$ISubstitutionsCLP$root_var$arity$2;
} else
{return and__5145__auto__;
}
})())
{return this$.cljs$core$logic$protocols$ISubstitutionsCLP$root_var$arity$2(this$,x);
} else
{var x__5760__auto__ = (((this$ == null))?null:this$);return (function (){var or__5157__auto__ = (cljs.core.logic.protocols.root_var[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.protocols.root_var["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISubstitutionsCLP.root-var",this$);
}
}
})().call(null,this$,x);
}
});
cljs.core.logic.protocols.ext_run_cs = (function ext_run_cs(this$,x,v){if((function (){var and__5145__auto__ = this$;if(and__5145__auto__)
{return this$.cljs$core$logic$protocols$ISubstitutionsCLP$ext_run_cs$arity$3;
} else
{return and__5145__auto__;
}
})())
{return this$.cljs$core$logic$protocols$ISubstitutionsCLP$ext_run_cs$arity$3(this$,x,v);
} else
{var x__5760__auto__ = (((this$ == null))?null:this$);return (function (){var or__5157__auto__ = (cljs.core.logic.protocols.ext_run_cs[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.protocols.ext_run_cs["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISubstitutionsCLP.ext-run-cs",this$);
}
}
})().call(null,this$,x,v);
}
});
cljs.core.logic.protocols.queue = (function queue(this$,c){if((function (){var and__5145__auto__ = this$;if(and__5145__auto__)
{return this$.cljs$core$logic$protocols$ISubstitutionsCLP$queue$arity$2;
} else
{return and__5145__auto__;
}
})())
{return this$.cljs$core$logic$protocols$ISubstitutionsCLP$queue$arity$2(this$,c);
} else
{var x__5760__auto__ = (((this$ == null))?null:this$);return (function (){var or__5157__auto__ = (cljs.core.logic.protocols.queue[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.protocols.queue["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISubstitutionsCLP.queue",this$);
}
}
})().call(null,this$,c);
}
});
cljs.core.logic.protocols.update_var = (function update_var(this$,x,v){if((function (){var and__5145__auto__ = this$;if(and__5145__auto__)
{return this$.cljs$core$logic$protocols$ISubstitutionsCLP$update_var$arity$3;
} else
{return and__5145__auto__;
}
})())
{return this$.cljs$core$logic$protocols$ISubstitutionsCLP$update_var$arity$3(this$,x,v);
} else
{var x__5760__auto__ = (((this$ == null))?null:this$);return (function (){var or__5157__auto__ = (cljs.core.logic.protocols.update_var[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.protocols.update_var["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISubstitutionsCLP.update-var",this$);
}
}
})().call(null,this$,x,v);
}
});
cljs.core.logic.protocols.IConstraintStore = (function (){var obj50078 = {};return obj50078;
})();
cljs.core.logic.protocols.addc = (function addc(this$,a,c){if((function (){var and__5145__auto__ = this$;if(and__5145__auto__)
{return this$.cljs$core$logic$protocols$IConstraintStore$addc$arity$3;
} else
{return and__5145__auto__;
}
})())
{return this$.cljs$core$logic$protocols$IConstraintStore$addc$arity$3(this$,a,c);
} else
{var x__5760__auto__ = (((this$ == null))?null:this$);return (function (){var or__5157__auto__ = (cljs.core.logic.protocols.addc[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.protocols.addc["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IConstraintStore.addc",this$);
}
}
})().call(null,this$,a,c);
}
});
cljs.core.logic.protocols.updatec = (function updatec(this$,a,c){if((function (){var and__5145__auto__ = this$;if(and__5145__auto__)
{return this$.cljs$core$logic$protocols$IConstraintStore$updatec$arity$3;
} else
{return and__5145__auto__;
}
})())
{return this$.cljs$core$logic$protocols$IConstraintStore$updatec$arity$3(this$,a,c);
} else
{var x__5760__auto__ = (((this$ == null))?null:this$);return (function (){var or__5157__auto__ = (cljs.core.logic.protocols.updatec[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.protocols.updatec["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IConstraintStore.updatec",this$);
}
}
})().call(null,this$,a,c);
}
});
cljs.core.logic.protocols.remc = (function remc(this$,a,c){if((function (){var and__5145__auto__ = this$;if(and__5145__auto__)
{return this$.cljs$core$logic$protocols$IConstraintStore$remc$arity$3;
} else
{return and__5145__auto__;
}
})())
{return this$.cljs$core$logic$protocols$IConstraintStore$remc$arity$3(this$,a,c);
} else
{var x__5760__auto__ = (((this$ == null))?null:this$);return (function (){var or__5157__auto__ = (cljs.core.logic.protocols.remc[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.protocols.remc["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IConstraintStore.remc",this$);
}
}
})().call(null,this$,a,c);
}
});
cljs.core.logic.protocols.runc = (function runc(this$,c,state){if((function (){var and__5145__auto__ = this$;if(and__5145__auto__)
{return this$.cljs$core$logic$protocols$IConstraintStore$runc$arity$3;
} else
{return and__5145__auto__;
}
})())
{return this$.cljs$core$logic$protocols$IConstraintStore$runc$arity$3(this$,c,state);
} else
{var x__5760__auto__ = (((this$ == null))?null:this$);return (function (){var or__5157__auto__ = (cljs.core.logic.protocols.runc[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.protocols.runc["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IConstraintStore.runc",this$);
}
}
})().call(null,this$,c,state);
}
});
cljs.core.logic.protocols.constraints_for = (function constraints_for(this$,a,x,ws){if((function (){var and__5145__auto__ = this$;if(and__5145__auto__)
{return this$.cljs$core$logic$protocols$IConstraintStore$constraints_for$arity$4;
} else
{return and__5145__auto__;
}
})())
{return this$.cljs$core$logic$protocols$IConstraintStore$constraints_for$arity$4(this$,a,x,ws);
} else
{var x__5760__auto__ = (((this$ == null))?null:this$);return (function (){var or__5157__auto__ = (cljs.core.logic.protocols.constraints_for[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.protocols.constraints_for["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IConstraintStore.constraints-for",this$);
}
}
})().call(null,this$,a,x,ws);
}
});
cljs.core.logic.protocols.migrate = (function migrate(this$,x,root){if((function (){var and__5145__auto__ = this$;if(and__5145__auto__)
{return this$.cljs$core$logic$protocols$IConstraintStore$migrate$arity$3;
} else
{return and__5145__auto__;
}
})())
{return this$.cljs$core$logic$protocols$IConstraintStore$migrate$arity$3(this$,x,root);
} else
{var x__5760__auto__ = (((this$ == null))?null:this$);return (function (){var or__5157__auto__ = (cljs.core.logic.protocols.migrate[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.protocols.migrate["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IConstraintStore.migrate",this$);
}
}
})().call(null,this$,x,root);
}
});
cljs.core.logic.protocols.IConstraintStep = (function (){var obj50080 = {};return obj50080;
})();
cljs.core.logic.protocols._step = (function _step(c,s){if((function (){var and__5145__auto__ = c;if(and__5145__auto__)
{return c.cljs$core$logic$protocols$IConstraintStep$_step$arity$2;
} else
{return and__5145__auto__;
}
})())
{return c.cljs$core$logic$protocols$IConstraintStep$_step$arity$2(c,s);
} else
{var x__5760__auto__ = (((c == null))?null:c);return (function (){var or__5157__auto__ = (cljs.core.logic.protocols._step[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.protocols._step["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IConstraintStep.-step",c);
}
}
})().call(null,c,s);
}
});
cljs.core.logic.protocols.IRunnable = (function (){var obj50082 = {};return obj50082;
})();
cljs.core.logic.protocols._runnable_QMARK_ = (function _runnable_QMARK_(c){if((function (){var and__5145__auto__ = c;if(and__5145__auto__)
{return c.cljs$core$logic$protocols$IRunnable$_runnable_QMARK_$arity$1;
} else
{return and__5145__auto__;
}
})())
{return c.cljs$core$logic$protocols$IRunnable$_runnable_QMARK_$arity$1(c);
} else
{var x__5760__auto__ = (((c == null))?null:c);return (function (){var or__5157__auto__ = (cljs.core.logic.protocols._runnable_QMARK_[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.protocols._runnable_QMARK_["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRunnable.-runnable?",c);
}
}
})().call(null,c);
}
});
cljs.core.logic.protocols.IEntailed = (function (){var obj50084 = {};return obj50084;
})();
cljs.core.logic.protocols._entailed_QMARK_ = (function _entailed_QMARK_(c){if((function (){var and__5145__auto__ = c;if(and__5145__auto__)
{return c.cljs$core$logic$protocols$IEntailed$_entailed_QMARK_$arity$1;
} else
{return and__5145__auto__;
}
})())
{return c.cljs$core$logic$protocols$IEntailed$_entailed_QMARK_$arity$1(c);
} else
{var x__5760__auto__ = (((c == null))?null:c);return (function (){var or__5157__auto__ = (cljs.core.logic.protocols._entailed_QMARK_[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.protocols._entailed_QMARK_["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IEntailed.-entailed?",c);
}
}
})().call(null,c);
}
});
cljs.core.logic.protocols.IEntailedVar = (function (){var obj50086 = {};return obj50086;
})();
cljs.core.logic.protocols._entailed_var_QMARK_ = (function _entailed_var_QMARK_(c,x){if((function (){var and__5145__auto__ = c;if(and__5145__auto__)
{return c.cljs$core$logic$protocols$IEntailedVar$_entailed_var_QMARK_$arity$2;
} else
{return and__5145__auto__;
}
})())
{return c.cljs$core$logic$protocols$IEntailedVar$_entailed_var_QMARK_$arity$2(c,x);
} else
{var x__5760__auto__ = (((c == null))?null:c);return (function (){var or__5157__auto__ = (cljs.core.logic.protocols._entailed_var_QMARK_[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.protocols._entailed_var_QMARK_["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IEntailedVar.-entailed-var?",c);
}
}
})().call(null,c,x);
}
});
cljs.core.logic.protocols.IWithConstraintId = (function (){var obj50088 = {};return obj50088;
})();
cljs.core.logic.protocols._with_id = (function _with_id(c,id){if((function (){var and__5145__auto__ = c;if(and__5145__auto__)
{return c.cljs$core$logic$protocols$IWithConstraintId$_with_id$arity$2;
} else
{return and__5145__auto__;
}
})())
{return c.cljs$core$logic$protocols$IWithConstraintId$_with_id$arity$2(c,id);
} else
{var x__5760__auto__ = (((c == null))?null:c);return (function (){var or__5157__auto__ = (cljs.core.logic.protocols._with_id[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.protocols._with_id["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWithConstraintId.-with-id",c);
}
}
})().call(null,c,id);
}
});
cljs.core.logic.protocols.IConstraintId = (function (){var obj50090 = {};return obj50090;
})();
cljs.core.logic.protocols._id = (function _id(c){if((function (){var and__5145__auto__ = c;if(and__5145__auto__)
{return c.cljs$core$logic$protocols$IConstraintId$_id$arity$1;
} else
{return and__5145__auto__;
}
})())
{return c.cljs$core$logic$protocols$IConstraintId$_id$arity$1(c);
} else
{var x__5760__auto__ = (((c == null))?null:c);return (function (){var or__5157__auto__ = (cljs.core.logic.protocols._id[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.protocols._id["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IConstraintId.-id",c);
}
}
})().call(null,c);
}
});
cljs.core.logic.protocols.id = (function id(c){if((function (){var G__50092 = c;if(G__50092)
{var bit__5783__auto__ = null;if(cljs.core.truth_((function (){var or__5157__auto__ = bit__5783__auto__;if(cljs.core.truth_(or__5157__auto__))
{return or__5157__auto__;
} else
{return G__50092.cljs$core$logic$protocols$IConstraintId$;
}
})()))
{return true;
} else
{if((!G__50092.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.logic.protocols.IConstraintId,G__50092);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.logic.protocols.IConstraintId,G__50092);
}
})())
{return cljs.core.logic.protocols._id.call(null,c);
} else
{return new cljs.core.Keyword("cljs.core.logic.protocols","id","cljs.core.logic.protocols/id",2361823267).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,c));
}
});
cljs.core.logic.protocols.with_id = (function with_id(c,id){if((function (){var G__50094 = c;if(G__50094)
{var bit__5783__auto__ = null;if(cljs.core.truth_((function (){var or__5157__auto__ = bit__5783__auto__;if(cljs.core.truth_(or__5157__auto__))
{return or__5157__auto__;
} else
{return G__50094.cljs$core$logic$protocols$IWithConstraintId$;
}
})()))
{return true;
} else
{if((!G__50094.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.logic.protocols.IWithConstraintId,G__50094);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.logic.protocols.IWithConstraintId,G__50094);
}
})())
{return cljs.core.logic.protocols._with_id.call(null,c,id);
} else
{return cljs.core.vary_meta.call(null,c,cljs.core.assoc,new cljs.core.Keyword("cljs.core.logic.protocols","id","cljs.core.logic.protocols/id",2361823267),id);
}
});
cljs.core.logic.protocols.IConstraintWatchedStores = (function (){var obj50096 = {};return obj50096;
})();
cljs.core.logic.protocols._watched_stores = (function _watched_stores(c){if((function (){var and__5145__auto__ = c;if(and__5145__auto__)
{return c.cljs$core$logic$protocols$IConstraintWatchedStores$_watched_stores$arity$1;
} else
{return and__5145__auto__;
}
})())
{return c.cljs$core$logic$protocols$IConstraintWatchedStores$_watched_stores$arity$1(c);
} else
{var x__5760__auto__ = (((c == null))?null:c);return (function (){var or__5157__auto__ = (cljs.core.logic.protocols._watched_stores[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.protocols._watched_stores["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IConstraintWatchedStores.-watched-stores",c);
}
}
})().call(null,c);
}
});
cljs.core.logic.protocols.IConstraintOp = (function (){var obj50098 = {};return obj50098;
})();
cljs.core.logic.protocols._rator = (function _rator(c){if((function (){var and__5145__auto__ = c;if(and__5145__auto__)
{return c.cljs$core$logic$protocols$IConstraintOp$_rator$arity$1;
} else
{return and__5145__auto__;
}
})())
{return c.cljs$core$logic$protocols$IConstraintOp$_rator$arity$1(c);
} else
{var x__5760__auto__ = (((c == null))?null:c);return (function (){var or__5157__auto__ = (cljs.core.logic.protocols._rator[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.protocols._rator["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IConstraintOp.-rator",c);
}
}
})().call(null,c);
}
});
cljs.core.logic.protocols._rands = (function _rands(c){if((function (){var and__5145__auto__ = c;if(and__5145__auto__)
{return c.cljs$core$logic$protocols$IConstraintOp$_rands$arity$1;
} else
{return and__5145__auto__;
}
})())
{return c.cljs$core$logic$protocols$IConstraintOp$_rands$arity$1(c);
} else
{var x__5760__auto__ = (((c == null))?null:c);return (function (){var or__5157__auto__ = (cljs.core.logic.protocols._rands[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.protocols._rands["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IConstraintOp.-rands",c);
}
}
})().call(null,c);
}
});
cljs.core.logic.protocols.IReifiableConstraint = (function (){var obj50100 = {};return obj50100;
})();
cljs.core.logic.protocols._reifyc = (function _reifyc(c,v,r,a){if((function (){var and__5145__auto__ = c;if(and__5145__auto__)
{return c.cljs$core$logic$protocols$IReifiableConstraint$_reifyc$arity$4;
} else
{return and__5145__auto__;
}
})())
{return c.cljs$core$logic$protocols$IReifiableConstraint$_reifyc$arity$4(c,v,r,a);
} else
{var x__5760__auto__ = (((c == null))?null:c);return (function (){var or__5157__auto__ = (cljs.core.logic.protocols._reifyc[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.protocols._reifyc["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IReifiableConstraint.-reifyc",c);
}
}
})().call(null,c,v,r,a);
}
});
cljs.core.logic.protocols.reifiable_QMARK_ = (function reifiable_QMARK_(x){var G__50102 = x;if(G__50102)
{var bit__5783__auto__ = null;if(cljs.core.truth_((function (){var or__5157__auto__ = bit__5783__auto__;if(cljs.core.truth_(or__5157__auto__))
{return or__5157__auto__;
} else
{return G__50102.cljs$core$logic$protocols$IReifiableConstraint$;
}
})()))
{return true;
} else
{if((!G__50102.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.logic.protocols.IReifiableConstraint,G__50102);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.logic.protocols.IReifiableConstraint,G__50102);
}
});
cljs.core.logic.protocols.IEnforceableConstraint = (function (){var obj50104 = {};return obj50104;
})();
cljs.core.logic.protocols.enforceable_QMARK_ = (function enforceable_QMARK_(x){var G__50106 = x;if(G__50106)
{var bit__5783__auto__ = null;if(cljs.core.truth_((function (){var or__5157__auto__ = bit__5783__auto__;if(cljs.core.truth_(or__5157__auto__))
{return or__5157__auto__;
} else
{return G__50106.cljs$core$logic$protocols$IEnforceableConstraint$;
}
})()))
{return true;
} else
{if((!G__50106.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.logic.protocols.IEnforceableConstraint,G__50106);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.logic.protocols.IEnforceableConstraint,G__50106);
}
});
cljs.core.logic.protocols.IUnwrapConstraint = (function (){var obj50108 = {};return obj50108;
})();
cljs.core.logic.protocols._unwrap = (function _unwrap(c){if((function (){var and__5145__auto__ = c;if(and__5145__auto__)
{return c.cljs$core$logic$protocols$IUnwrapConstraint$_unwrap$arity$1;
} else
{return and__5145__auto__;
}
})())
{return c.cljs$core$logic$protocols$IUnwrapConstraint$_unwrap$arity$1(c);
} else
{var x__5760__auto__ = (((c == null))?null:c);return (function (){var or__5157__auto__ = (cljs.core.logic.protocols._unwrap[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.protocols._unwrap["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IUnwrapConstraint.-unwrap",c);
}
}
})().call(null,c);
}
});
cljs.core.logic.protocols.IMergeDomains = (function (){var obj50110 = {};return obj50110;
})();
cljs.core.logic.protocols._merge_doms = (function _merge_doms(a,b){if((function (){var and__5145__auto__ = a;if(and__5145__auto__)
{return a.cljs$core$logic$protocols$IMergeDomains$_merge_doms$arity$2;
} else
{return and__5145__auto__;
}
})())
{return a.cljs$core$logic$protocols$IMergeDomains$_merge_doms$arity$2(a,b);
} else
{var x__5760__auto__ = (((a == null))?null:a);return (function (){var or__5157__auto__ = (cljs.core.logic.protocols._merge_doms[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.protocols._merge_doms["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMergeDomains.-merge-doms",a);
}
}
})().call(null,a,b);
}
});
cljs.core.logic.protocols.IMemberCount = (function (){var obj50112 = {};return obj50112;
})();
cljs.core.logic.protocols._member_count = (function _member_count(dom){if((function (){var and__5145__auto__ = dom;if(and__5145__auto__)
{return dom.cljs$core$logic$protocols$IMemberCount$_member_count$arity$1;
} else
{return and__5145__auto__;
}
})())
{return dom.cljs$core$logic$protocols$IMemberCount$_member_count$arity$1(dom);
} else
{var x__5760__auto__ = (((dom == null))?null:dom);return (function (){var or__5157__auto__ = (cljs.core.logic.protocols._member_count[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.protocols._member_count["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMemberCount.-member-count",dom);
}
}
})().call(null,dom);
}
});
cljs.core.logic.protocols.IForceAnswerTerm = (function (){var obj50114 = {};return obj50114;
})();
cljs.core.logic.protocols._force_ans = (function _force_ans(v,x){if((function (){var and__5145__auto__ = v;if(and__5145__auto__)
{return v.cljs$core$logic$protocols$IForceAnswerTerm$_force_ans$arity$2;
} else
{return and__5145__auto__;
}
})())
{return v.cljs$core$logic$protocols$IForceAnswerTerm$_force_ans$arity$2(v,x);
} else
{var x__5760__auto__ = (((v == null))?null:v);return (function (){var or__5157__auto__ = (cljs.core.logic.protocols._force_ans[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.protocols._force_ans["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IForceAnswerTerm.-force-ans",v);
}
}
})().call(null,v,x);
}
});
cljs.core.logic.protocols.IDisunifyTerms = (function (){var obj50116 = {};return obj50116;
})();
cljs.core.logic.protocols._disunify_terms = (function _disunify_terms(u,v,s,cs){if((function (){var and__5145__auto__ = u;if(and__5145__auto__)
{return u.cljs$core$logic$protocols$IDisunifyTerms$_disunify_terms$arity$4;
} else
{return and__5145__auto__;
}
})())
{return u.cljs$core$logic$protocols$IDisunifyTerms$_disunify_terms$arity$4(u,v,s,cs);
} else
{var x__5760__auto__ = (((u == null))?null:u);return (function (){var or__5157__auto__ = (cljs.core.logic.protocols._disunify_terms[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.protocols._disunify_terms["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDisunifyTerms.-disunify-terms",u);
}
}
})().call(null,u,v,s,cs);
}
});
cljs.core.logic.protocols.ITreeConstraint = (function (){var obj50118 = {};return obj50118;
})();
cljs.core.logic.protocols.tree_constraint_QMARK_ = (function tree_constraint_QMARK_(x){var G__50120 = x;if(G__50120)
{var bit__5783__auto__ = null;if(cljs.core.truth_((function (){var or__5157__auto__ = bit__5783__auto__;if(cljs.core.truth_(or__5157__auto__))
{return or__5157__auto__;
} else
{return G__50120.cljs$core$logic$protocols$ITreeConstraint$;
}
})()))
{return true;
} else
{if((!G__50120.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.logic.protocols.ITreeConstraint,G__50120);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.logic.protocols.ITreeConstraint,G__50120);
}
});
cljs.core.logic.protocols.IPrefix = (function (){var obj50122 = {};return obj50122;
})();
cljs.core.logic.protocols._prefix = (function _prefix(c){if((function (){var and__5145__auto__ = c;if(and__5145__auto__)
{return c.cljs$core$logic$protocols$IPrefix$_prefix$arity$1;
} else
{return and__5145__auto__;
}
})())
{return c.cljs$core$logic$protocols$IPrefix$_prefix$arity$1(c);
} else
{var x__5760__auto__ = (((c == null))?null:c);return (function (){var or__5157__auto__ = (cljs.core.logic.protocols._prefix[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.protocols._prefix["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IPrefix.-prefix",c);
}
}
})().call(null,c);
}
});
cljs.core.logic.protocols.IWithPrefix = (function (){var obj50124 = {};return obj50124;
})();
cljs.core.logic.protocols._with_prefix = (function _with_prefix(c,p){if((function (){var and__5145__auto__ = c;if(and__5145__auto__)
{return c.cljs$core$logic$protocols$IWithPrefix$_with_prefix$arity$2;
} else
{return and__5145__auto__;
}
})())
{return c.cljs$core$logic$protocols$IWithPrefix$_with_prefix$arity$2(c,p);
} else
{var x__5760__auto__ = (((c == null))?null:c);return (function (){var or__5157__auto__ = (cljs.core.logic.protocols._with_prefix[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.protocols._with_prefix["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWithPrefix.-with-prefix",c);
}
}
})().call(null,c,p);
}
});
cljs.core.logic.protocols.IUnifyWithPMap = (function (){var obj50126 = {};return obj50126;
})();
cljs.core.logic.protocols.unify_with_pmap = (function unify_with_pmap(pmap,u,s){if((function (){var and__5145__auto__ = pmap;if(and__5145__auto__)
{return pmap.cljs$core$logic$protocols$IUnifyWithPMap$unify_with_pmap$arity$3;
} else
{return and__5145__auto__;
}
})())
{return pmap.cljs$core$logic$protocols$IUnifyWithPMap$unify_with_pmap$arity$3(pmap,u,s);
} else
{var x__5760__auto__ = (((pmap == null))?null:pmap);return (function (){var or__5157__auto__ = (cljs.core.logic.protocols.unify_with_pmap[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.protocols.unify_with_pmap["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IUnifyWithPMap.unify-with-pmap",pmap);
}
}
})().call(null,pmap,u,s);
}
});
cljs.core.logic.protocols.IConstrainTree = (function (){var obj50128 = {};return obj50128;
})();
cljs.core.logic.protocols._constrain_tree = (function _constrain_tree(t,fc,s){if((function (){var and__5145__auto__ = t;if(and__5145__auto__)
{return t.cljs$core$logic$protocols$IConstrainTree$_constrain_tree$arity$3;
} else
{return and__5145__auto__;
}
})())
{return t.cljs$core$logic$protocols$IConstrainTree$_constrain_tree$arity$3(t,fc,s);
} else
{var x__5760__auto__ = (((t == null))?null:t);return (function (){var or__5157__auto__ = (cljs.core.logic.protocols._constrain_tree[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.protocols._constrain_tree["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IConstrainTree.-constrain-tree",t);
}
}
})().call(null,t,fc,s);
}
});
cljs.core.logic.protocols.IFeature = (function (){var obj50130 = {};return obj50130;
})();
cljs.core.logic.protocols._feature = (function _feature(x){if((function (){var and__5145__auto__ = x;if(and__5145__auto__)
{return x.cljs$core$logic$protocols$IFeature$_feature$arity$1;
} else
{return and__5145__auto__;
}
})())
{return x.cljs$core$logic$protocols$IFeature$_feature$arity$1(x);
} else
{var x__5760__auto__ = (((x == null))?null:x);return (function (){var or__5157__auto__ = (cljs.core.logic.protocols._feature[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.protocols._feature["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFeature.-feature",x);
}
}
})().call(null,x);
}
});
