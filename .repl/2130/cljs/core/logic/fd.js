// Compiled by ClojureScript 0.0-2080
goog.provide('cljs.core.logic.fd');
goog.require('cljs.core');
goog.require('cljs.core.logic');
goog.require('cljs.core.logic.protocols');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('clojure.set');
goog.require('cljs.core.logic');
goog.require('cljs.core.logic');
goog.require('cljs.core.logic.protocols');
goog.require('cljs.core.logic.protocols');
cljs.core.logic.fd.IInterval = (function (){var obj35209 = {};return obj35209;
})();
cljs.core.logic.fd._lb = (function _lb(this$){if((function (){var and__5145__auto__ = this$;if(and__5145__auto__)
{return this$.cljs$core$logic$fd$IInterval$_lb$arity$1;
} else
{return and__5145__auto__;
}
})())
{return this$.cljs$core$logic$fd$IInterval$_lb$arity$1(this$);
} else
{var x__5760__auto__ = (((this$ == null))?null:this$);return (function (){var or__5157__auto__ = (cljs.core.logic.fd._lb[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.fd._lb["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IInterval.-lb",this$);
}
}
})().call(null,this$);
}
});
cljs.core.logic.fd._ub = (function _ub(this$){if((function (){var and__5145__auto__ = this$;if(and__5145__auto__)
{return this$.cljs$core$logic$fd$IInterval$_ub$arity$1;
} else
{return and__5145__auto__;
}
})())
{return this$.cljs$core$logic$fd$IInterval$_ub$arity$1(this$);
} else
{var x__5760__auto__ = (((this$ == null))?null:this$);return (function (){var or__5157__auto__ = (cljs.core.logic.fd._ub[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.fd._ub["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IInterval.-ub",this$);
}
}
})().call(null,this$);
}
});
cljs.core.logic.fd.IIntervals = (function (){var obj35211 = {};return obj35211;
})();
cljs.core.logic.fd._intervals = (function _intervals(this$){if((function (){var and__5145__auto__ = this$;if(and__5145__auto__)
{return this$.cljs$core$logic$fd$IIntervals$_intervals$arity$1;
} else
{return and__5145__auto__;
}
})())
{return this$.cljs$core$logic$fd$IIntervals$_intervals$arity$1(this$);
} else
{var x__5760__auto__ = (((this$ == null))?null:this$);return (function (){var or__5157__auto__ = (cljs.core.logic.fd._intervals[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.fd._intervals["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IIntervals.-intervals",this$);
}
}
})().call(null,this$);
}
});
cljs.core.logic.fd.ISortedDomain = (function (){var obj35213 = {};return obj35213;
})();
cljs.core.logic.fd._drop_one = (function _drop_one(this$){if((function (){var and__5145__auto__ = this$;if(and__5145__auto__)
{return this$.cljs$core$logic$fd$ISortedDomain$_drop_one$arity$1;
} else
{return and__5145__auto__;
}
})())
{return this$.cljs$core$logic$fd$ISortedDomain$_drop_one$arity$1(this$);
} else
{var x__5760__auto__ = (((this$ == null))?null:this$);return (function (){var or__5157__auto__ = (cljs.core.logic.fd._drop_one[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.fd._drop_one["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISortedDomain.-drop-one",this$);
}
}
})().call(null,this$);
}
});
cljs.core.logic.fd._drop_before = (function _drop_before(this$,n){if((function (){var and__5145__auto__ = this$;if(and__5145__auto__)
{return this$.cljs$core$logic$fd$ISortedDomain$_drop_before$arity$2;
} else
{return and__5145__auto__;
}
})())
{return this$.cljs$core$logic$fd$ISortedDomain$_drop_before$arity$2(this$,n);
} else
{var x__5760__auto__ = (((this$ == null))?null:this$);return (function (){var or__5157__auto__ = (cljs.core.logic.fd._drop_before[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.fd._drop_before["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISortedDomain.-drop-before",this$);
}
}
})().call(null,this$,n);
}
});
cljs.core.logic.fd._keep_before = (function _keep_before(this$,n){if((function (){var and__5145__auto__ = this$;if(and__5145__auto__)
{return this$.cljs$core$logic$fd$ISortedDomain$_keep_before$arity$2;
} else
{return and__5145__auto__;
}
})())
{return this$.cljs$core$logic$fd$ISortedDomain$_keep_before$arity$2(this$,n);
} else
{var x__5760__auto__ = (((this$ == null))?null:this$);return (function (){var or__5157__auto__ = (cljs.core.logic.fd._keep_before[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.fd._keep_before["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISortedDomain.-keep-before",this$);
}
}
})().call(null,this$,n);
}
});
cljs.core.logic.fd.ISet = (function (){var obj35215 = {};return obj35215;
})();
cljs.core.logic.fd._member_QMARK_ = (function _member_QMARK_(this$,n){if((function (){var and__5145__auto__ = this$;if(and__5145__auto__)
{return this$.cljs$core$logic$fd$ISet$_member_QMARK_$arity$2;
} else
{return and__5145__auto__;
}
})())
{return this$.cljs$core$logic$fd$ISet$_member_QMARK_$arity$2(this$,n);
} else
{var x__5760__auto__ = (((this$ == null))?null:this$);return (function (){var or__5157__auto__ = (cljs.core.logic.fd._member_QMARK_[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.fd._member_QMARK_["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-member?",this$);
}
}
})().call(null,this$,n);
}
});
cljs.core.logic.fd._disjoint_QMARK_ = (function _disjoint_QMARK_(this$,that){if((function (){var and__5145__auto__ = this$;if(and__5145__auto__)
{return this$.cljs$core$logic$fd$ISet$_disjoint_QMARK_$arity$2;
} else
{return and__5145__auto__;
}
})())
{return this$.cljs$core$logic$fd$ISet$_disjoint_QMARK_$arity$2(this$,that);
} else
{var x__5760__auto__ = (((this$ == null))?null:this$);return (function (){var or__5157__auto__ = (cljs.core.logic.fd._disjoint_QMARK_[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.fd._disjoint_QMARK_["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoint?",this$);
}
}
})().call(null,this$,that);
}
});
cljs.core.logic.fd._intersection = (function _intersection(this$,that){if((function (){var and__5145__auto__ = this$;if(and__5145__auto__)
{return this$.cljs$core$logic$fd$ISet$_intersection$arity$2;
} else
{return and__5145__auto__;
}
})())
{return this$.cljs$core$logic$fd$ISet$_intersection$arity$2(this$,that);
} else
{var x__5760__auto__ = (((this$ == null))?null:this$);return (function (){var or__5157__auto__ = (cljs.core.logic.fd._intersection[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.fd._intersection["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-intersection",this$);
}
}
})().call(null,this$,that);
}
});
cljs.core.logic.fd._difference = (function _difference(this$,that){if((function (){var and__5145__auto__ = this$;if(and__5145__auto__)
{return this$.cljs$core$logic$fd$ISet$_difference$arity$2;
} else
{return and__5145__auto__;
}
})())
{return this$.cljs$core$logic$fd$ISet$_difference$arity$2(this$,that);
} else
{var x__5760__auto__ = (((this$ == null))?null:this$);return (function (){var or__5157__auto__ = (cljs.core.logic.fd._difference[goog.typeOf(x__5760__auto__)]);if(or__5157__auto__)
{return or__5157__auto__;
} else
{var or__5157__auto____$1 = (cljs.core.logic.fd._difference["_"]);if(or__5157__auto____$1)
{return or__5157__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-difference",this$);
}
}
})().call(null,this$,that);
}
});
cljs.core.logic.fd.bounds = (function bounds(i){return cljs.core.logic.pair.call(null,cljs.core.logic.fd._lb.call(null,i),cljs.core.logic.fd._ub.call(null,i));
});
cljs.core.logic.fd.interval__LT_ = (function interval__LT_(i,j){return (cljs.core.logic.fd._ub.call(null,i) < cljs.core.logic.fd._lb.call(null,j));
});
cljs.core.logic.fd.interval__LT__EQ_ = (function interval__LT__EQ_(i,j){return (cljs.core.logic.fd._ub.call(null,i) <= cljs.core.logic.fd._lb.call(null,j));
});
cljs.core.logic.fd.interval__GT_ = (function interval__GT_(i,j){return (cljs.core.logic.fd._lb.call(null,i) > cljs.core.logic.fd._ub.call(null,j));
});
cljs.core.logic.fd.interval__GT__EQ_ = (function interval__GT__EQ_(i,j){return (cljs.core.logic.fd._lb.call(null,i) >= cljs.core.logic.fd._ub.call(null,j));
});

/**
* @constructor
*/
cljs.core.logic.fd.FiniteDomain = (function (s,min,max){
this.s = s;
this.min = min;
this.max = max;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2149581056;
})
cljs.core.logic.fd.FiniteDomain.cljs$lang$type = true;
cljs.core.logic.fd.FiniteDomain.cljs$lang$ctorStr = "cljs.core.logic.fd/FiniteDomain";
cljs.core.logic.fd.FiniteDomain.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.logic.fd/FiniteDomain");
});
cljs.core.logic.fd.FiniteDomain.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,opts){var self__ = this;
var x__$1 = this;return cljs.core._write.call(null,writer,[cljs.core.str("<domain:"),cljs.core.str(cljs.core.seq.call(null,new cljs.core.Keyword(null,"s","s",1013904357).cljs$core$IFn$_invoke$arity$1(x__$1))),cljs.core.str(">")].join(''));
});
cljs.core.logic.fd.FiniteDomain.prototype.cljs$core$logic$protocols$IMergeDomains$ = true;
cljs.core.logic.fd.FiniteDomain.prototype.cljs$core$logic$protocols$IMergeDomains$_merge_doms$arity$2 = (function (this$,that){var self__ = this;
var this$__$1 = this;return cljs.core.logic.fd._intersection.call(null,this$__$1,that);
});
cljs.core.logic.fd.FiniteDomain.prototype.cljs$core$logic$fd$IIntervals$ = true;
cljs.core.logic.fd.FiniteDomain.prototype.cljs$core$logic$fd$IIntervals$_intervals$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.seq.call(null,self__.s);
});
cljs.core.logic.fd.FiniteDomain.prototype.cljs$core$logic$fd$ISet$ = true;
cljs.core.logic.fd.FiniteDomain.prototype.cljs$core$logic$fd$ISet$_member_QMARK_$arity$2 = (function (this$,n){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(self__.s.call(null,n)))
{return true;
} else
{return false;
}
});
cljs.core.logic.fd.FiniteDomain.prototype.cljs$core$logic$fd$ISet$_disjoint_QMARK_$arity$2 = (function (this$,that){var self__ = this;
var this$__$1 = this;if(cljs.core.integer_QMARK_.call(null,that))
{if(cljs.core.truth_(self__.s.call(null,that)))
{return false;
} else
{return true;
}
} else
{if((that instanceof cljs.core.logic.fd.FiniteDomain))
{if((self__.max < new cljs.core.Keyword(null,"min","min",1014012356).cljs$core$IFn$_invoke$arity$1(that)))
{return true;
} else
{if((self__.min > new cljs.core.Keyword(null,"max","max",1014012118).cljs$core$IFn$_invoke$arity$1(that)))
{return true;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.empty_QMARK_.call(null,clojure.set.intersection.call(null,self__.s,new cljs.core.Keyword(null,"s","s",1013904357).cljs$core$IFn$_invoke$arity$1(that)));
} else
{return null;
}
}
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.logic.fd.disjoint_QMARK__STAR_.call(null,this$__$1,that);
} else
{return null;
}
}
}
});
cljs.core.logic.fd.FiniteDomain.prototype.cljs$core$logic$fd$ISet$_intersection$arity$2 = (function (this$,that){var self__ = this;
var this$__$1 = this;if(cljs.core.integer_QMARK_.call(null,that))
{if(cljs.core.truth_(cljs.core.logic.fd._member_QMARK_.call(null,this$__$1,that)))
{return that;
} else
{return null;
}
} else
{if((that instanceof cljs.core.logic.fd.FiniteDomain))
{return cljs.core.logic.fd.sorted_set__GT_domain.call(null,clojure.set.intersection.call(null,self__.s,new cljs.core.Keyword(null,"s","s",1013904357).cljs$core$IFn$_invoke$arity$1(that)));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.logic.fd.intersection_STAR_.call(null,this$__$1,that);
} else
{return null;
}
}
}
});
cljs.core.logic.fd.FiniteDomain.prototype.cljs$core$logic$fd$ISet$_difference$arity$2 = (function (this$,that){var self__ = this;
var this$__$1 = this;if(cljs.core.integer_QMARK_.call(null,that))
{return cljs.core.logic.fd.sorted_set__GT_domain.call(null,cljs.core.disj.call(null,self__.s,that));
} else
{if((that instanceof cljs.core.logic.fd.FiniteDomain))
{return cljs.core.logic.fd.sorted_set__GT_domain.call(null,clojure.set.difference.call(null,self__.s,new cljs.core.Keyword(null,"s","s",1013904357).cljs$core$IFn$_invoke$arity$1(that)));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.logic.fd.difference_STAR_.call(null,this$__$1,that);
} else
{return null;
}
}
}
});
cljs.core.logic.fd.FiniteDomain.prototype.cljs$core$logic$fd$ISortedDomain$ = true;
cljs.core.logic.fd.FiniteDomain.prototype.cljs$core$logic$fd$ISortedDomain$_drop_one$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var s__$1 = cljs.core.disj.call(null,self__.s,self__.min);var c = cljs.core.count.call(null,s__$1);if(cljs.core._EQ_.call(null,c,1))
{return cljs.core.first.call(null,s__$1);
} else
{if((c > 1))
{return (new cljs.core.logic.fd.FiniteDomain(s__$1,cljs.core.first.call(null,s__$1),self__.max));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
});
cljs.core.logic.fd.FiniteDomain.prototype.cljs$core$logic$fd$ISortedDomain$_drop_before$arity$2 = (function (_,n){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,cljs.core.logic.fd.domain,cljs.core.drop_while.call(null,(function (p1__35216_SHARP_){return (p1__35216_SHARP_ < n);
}),self__.s));
});
cljs.core.logic.fd.FiniteDomain.prototype.cljs$core$logic$fd$ISortedDomain$_keep_before$arity$2 = (function (this$,n){var self__ = this;
var this$__$1 = this;return cljs.core.apply.call(null,cljs.core.logic.fd.domain,cljs.core.take_while.call(null,(function (p1__35217_SHARP_){return (p1__35217_SHARP_ < n);
}),self__.s));
});
cljs.core.logic.fd.FiniteDomain.prototype.cljs$core$logic$fd$IInterval$ = true;
cljs.core.logic.fd.FiniteDomain.prototype.cljs$core$logic$fd$IInterval$_lb$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.min;
});
cljs.core.logic.fd.FiniteDomain.prototype.cljs$core$logic$fd$IInterval$_ub$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.max;
});
cljs.core.logic.fd.FiniteDomain.prototype.cljs$core$logic$protocols$IMemberCount$ = true;
cljs.core.logic.fd.FiniteDomain.prototype.cljs$core$logic$protocols$IMemberCount$_member_count$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.count.call(null,self__.s);
});
cljs.core.logic.fd.FiniteDomain.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;return cljs.core._lookup.call(null,this$__$1,k,null);
});
cljs.core.logic.fd.FiniteDomain.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){var self__ = this;
var this$__$1 = this;var G__35218 = k;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"max","max",1014012118),G__35218))
{return self__.max;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"min","min",1014012356),G__35218))
{return self__.min;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"s","s",1013904357),G__35218))
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
});
cljs.core.logic.fd.FiniteDomain.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,that){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(cljs.core.logic.fd.finite_domain_QMARK_.call(null,that)))
{if(cljs.core._EQ_.call(null,cljs.core.logic.protocols._member_count.call(null,this$__$1),cljs.core.logic.protocols._member_count.call(null,that)))
{return cljs.core._EQ_.call(null,self__.s,new cljs.core.Keyword(null,"s","s",1013904357).cljs$core$IFn$_invoke$arity$1(that));
} else
{return false;
}
} else
{return false;
}
});
cljs.core.logic.fd.__GT_FiniteDomain = (function __GT_FiniteDomain(s,min,max){return (new cljs.core.logic.fd.FiniteDomain(s,min,max));
});
cljs.core.logic.fd.finite_domain_QMARK_ = (function finite_domain_QMARK_(x){return (x instanceof cljs.core.logic.fd.FiniteDomain);
});
cljs.core.logic.fd.sorted_set__GT_domain = (function sorted_set__GT_domain(s){var c = cljs.core.count.call(null,s);if((c === 0))
{return null;
} else
{if(cljs.core._EQ_.call(null,c,1))
{return cljs.core.first.call(null,s);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return (new cljs.core.logic.fd.FiniteDomain(s,cljs.core.first.call(null,s),cljs.core.first.call(null,cljs.core.rseq.call(null,s))));
} else
{return null;
}
}
}
});
/**
* Construct a domain for assignment to a var. Arguments should
* be integers given in sorted order. domains may be more efficient
* than intervals when only a few values are possible.
* @param {...*} var_args
*/
cljs.core.logic.fd.domain = (function() { 
var domain__delegate = function (args){if(cljs.core.seq.call(null,args))
{return cljs.core.logic.fd.sorted_set__GT_domain.call(null,cljs.core.into.call(null,cljs.core.sorted_set.call(null),args));
} else
{return null;
}
};
var domain = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return domain__delegate.call(this,args);};
domain.cljs$lang$maxFixedArity = 0;
domain.cljs$lang$applyTo = (function (arglist__35219){
var args = cljs.core.seq(arglist__35219);
return domain__delegate(args);
});
domain.cljs$core$IFn$_invoke$arity$variadic = domain__delegate;
return domain;
})()
;
(cljs.core.logic.fd.IIntervals["number"] = true);
(cljs.core.logic.fd._intervals["number"] = (function (this__10090__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,this__10090__auto__);
}));
(cljs.core.logic.fd.ISet["number"] = true);
(cljs.core.logic.fd._member_QMARK_["number"] = (function (this__10090__auto__,that__10092__auto__){if(cljs.core.integer_QMARK_.call(null,that__10092__auto__))
{return (this__10090__auto__ === that__10092__auto__);
} else
{return cljs.core.logic.fd._member_QMARK_.call(null,that__10092__auto__,this__10090__auto__);
}
}));
(cljs.core.logic.fd._disjoint_QMARK_["number"] = (function (this__10090__auto__,that__10092__auto__){if(cljs.core.integer_QMARK_.call(null,that__10092__auto__))
{return !((this__10090__auto__ === that__10092__auto__));
} else
{return cljs.core.logic.fd._disjoint_QMARK_.call(null,that__10092__auto__,this__10090__auto__);
}
}));
(cljs.core.logic.fd._intersection["number"] = (function (this__10090__auto__,that__10092__auto__){if(cljs.core.integer_QMARK_.call(null,that__10092__auto__))
{if((this__10090__auto__ === that__10092__auto__))
{return this__10090__auto__;
} else
{return null;
}
} else
{if(cljs.core.truth_(cljs.core.logic.fd.interval_QMARK_.call(null,that__10092__auto__)))
{return cljs.core.logic.fd._intersection.call(null,that__10092__auto__,this__10090__auto__);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.logic.fd.intersection_STAR_.call(null,this__10090__auto__,that__10092__auto__);
} else
{return null;
}
}
}
}));
(cljs.core.logic.fd._difference["number"] = (function (this__10090__auto__,that__10092__auto__){if(cljs.core.integer_QMARK_.call(null,that__10092__auto__))
{if((this__10090__auto__ === that__10092__auto__))
{return null;
} else
{return this__10090__auto__;
}
} else
{if(cljs.core.truth_(cljs.core.logic.fd.interval_QMARK_.call(null,that__10092__auto__)))
{return cljs.core.logic.fd._difference.call(null,that__10092__auto__,this__10090__auto__);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.logic.fd.difference_STAR_.call(null,this__10090__auto__,that__10092__auto__);
} else
{return null;
}
}
}
}));
(cljs.core.logic.fd.ISortedDomain["number"] = true);
(cljs.core.logic.fd._drop_one["number"] = (function (this__10090__auto__){return null;
}));
(cljs.core.logic.fd._drop_before["number"] = (function (this__10090__auto__,n__10091__auto__){if((this__10090__auto__ >= n__10091__auto__))
{return this__10090__auto__;
} else
{return null;
}
}));
(cljs.core.logic.fd._keep_before["number"] = (function (this__10090__auto__,n__10091__auto__){if((this__10090__auto__ < n__10091__auto__))
{return this__10090__auto__;
} else
{return null;
}
}));
(cljs.core.logic.fd.IInterval["number"] = true);
(cljs.core.logic.fd._lb["number"] = (function (this__10090__auto__){return this__10090__auto__;
}));
(cljs.core.logic.fd._ub["number"] = (function (this__10090__auto__){return this__10090__auto__;
}));
(cljs.core.logic.protocols.IMemberCount["number"] = true);
(cljs.core.logic.protocols._member_count["number"] = (function (this__10090__auto__){return 1;
}));

/**
* @constructor
*/
cljs.core.logic.fd.IntervalFD = (function (lb,ub){
this.lb = lb;
this.ub = ub;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2149580800;
})
cljs.core.logic.fd.IntervalFD.cljs$lang$type = true;
cljs.core.logic.fd.IntervalFD.cljs$lang$ctorStr = "cljs.core.logic.fd/IntervalFD";
cljs.core.logic.fd.IntervalFD.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.logic.fd/IntervalFD");
});
cljs.core.logic.fd.IntervalFD.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,opts){var self__ = this;
var x__$1 = this;return cljs.core._write.call(null,writer,[cljs.core.str("<interval:"),cljs.core.str(cljs.core.logic.fd._lb.call(null,x__$1)),cljs.core.str(".."),cljs.core.str(cljs.core.logic.fd._ub.call(null,x__$1)),cljs.core.str(">")].join(''));
});
cljs.core.logic.fd.IntervalFD.prototype.cljs$core$logic$protocols$IMergeDomains$ = true;
cljs.core.logic.fd.IntervalFD.prototype.cljs$core$logic$protocols$IMergeDomains$_merge_doms$arity$2 = (function (this$,that){var self__ = this;
var this$__$1 = this;return cljs.core.logic.fd._intersection.call(null,this$__$1,that);
});
cljs.core.logic.fd.IntervalFD.prototype.cljs$core$logic$fd$IIntervals$ = true;
cljs.core.logic.fd.IntervalFD.prototype.cljs$core$logic$fd$IIntervals$_intervals$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core._conj.call(null,cljs.core.List.EMPTY,this$__$1);
});
cljs.core.logic.fd.IntervalFD.prototype.cljs$core$logic$fd$ISet$ = true;
cljs.core.logic.fd.IntervalFD.prototype.cljs$core$logic$fd$ISet$_member_QMARK_$arity$2 = (function (this$,n){var self__ = this;
var this$__$1 = this;return ((n >= self__.lb)) && ((n <= self__.ub));
});
cljs.core.logic.fd.IntervalFD.prototype.cljs$core$logic$fd$ISet$_disjoint_QMARK_$arity$2 = (function (this$,that){var self__ = this;
var this$__$1 = this;if(cljs.core.integer_QMARK_.call(null,that))
{return cljs.core.not.call(null,cljs.core.logic.fd._member_QMARK_.call(null,this$__$1,that));
} else
{if(cljs.core.truth_(cljs.core.logic.fd.interval_QMARK_.call(null,that)))
{var i = this$__$1;var j = that;var vec__35220 = cljs.core.logic.fd.bounds.call(null,i);var imin = cljs.core.nth.call(null,vec__35220,0,null);var imax = cljs.core.nth.call(null,vec__35220,1,null);var vec__35221 = cljs.core.logic.fd.bounds.call(null,j);var jmin = cljs.core.nth.call(null,vec__35221,0,null);var jmax = cljs.core.nth.call(null,vec__35221,1,null);return ((imin > jmax)) || ((imax < jmin));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.logic.fd.disjoint_QMARK__STAR_.call(null,this$__$1,that);
} else
{return null;
}
}
}
});
cljs.core.logic.fd.IntervalFD.prototype.cljs$core$logic$fd$ISet$_intersection$arity$2 = (function (this$,that){var self__ = this;
var this$__$1 = this;if(cljs.core.integer_QMARK_.call(null,that))
{if(cljs.core.truth_(cljs.core.logic.fd._member_QMARK_.call(null,this$__$1,that)))
{return that;
} else
{return null;
}
} else
{if(cljs.core.truth_(cljs.core.logic.fd.interval_QMARK_.call(null,that)))
{var i = this$__$1;var j = that;var imin = cljs.core.logic.fd._lb.call(null,i);var imax = cljs.core.logic.fd._ub.call(null,i);var jmin = cljs.core.logic.fd._lb.call(null,j);var jmax = cljs.core.logic.fd._ub.call(null,j);if((imax < jmin))
{return null;
} else
{if((jmax < imin))
{return null;
} else
{if(((imin <= jmin)) && ((imax >= jmax)))
{return j;
} else
{if(((jmin <= imin)) && ((jmax >= imax)))
{return i;
} else
{if(((imin <= jmin)) && ((imax <= jmax)))
{return cljs.core.logic.fd.interval.call(null,jmin,imax);
} else
{if(((jmin <= imin)) && ((jmax <= imax)))
{return cljs.core.logic.fd.interval.call(null,imin,jmax);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.ex_info.call(null,[cljs.core.str("Interval intersection not defined "),cljs.core.str(i),cljs.core.str(" "),cljs.core.str(j)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else
{return null;
}
}
}
}
}
}
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.logic.fd.intersection_STAR_.call(null,this$__$1,that);
} else
{return null;
}
}
}
});
cljs.core.logic.fd.IntervalFD.prototype.cljs$core$logic$fd$ISet$_difference$arity$2 = (function (this$,that){var self__ = this;
var this$__$1 = this;if(cljs.core.integer_QMARK_.call(null,that))
{if(cljs.core._EQ_.call(null,self__.lb,that))
{return cljs.core.logic.fd.interval.call(null,(self__.lb + 1),self__.ub);
} else
{if(cljs.core._EQ_.call(null,self__.ub,that))
{return cljs.core.logic.fd.interval.call(null,self__.lb,(self__.ub - 1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.truth_(cljs.core.logic.fd._member_QMARK_.call(null,this$__$1,that)))
{return cljs.core.logic.fd.multi_interval.call(null,cljs.core.logic.fd.interval.call(null,self__.lb,(that - 1)),cljs.core.logic.fd.interval.call(null,(that + 1),self__.ub));
} else
{return this$__$1;
}
} else
{return null;
}
}
}
} else
{if(cljs.core.truth_(cljs.core.logic.fd.interval_QMARK_.call(null,that)))
{var i = this$__$1;var j = that;var imin = cljs.core.logic.fd._lb.call(null,i);var imax = cljs.core.logic.fd._ub.call(null,i);var jmin = cljs.core.logic.fd._lb.call(null,j);var jmax = cljs.core.logic.fd._ub.call(null,j);if((jmin > imax))
{return i;
} else
{if(((jmin <= imin)) && ((jmax >= imax)))
{return null;
} else
{if(((imin < jmin)) && ((imax > jmax)))
{return cljs.core.logic.fd.multi_interval.call(null,cljs.core.logic.fd.interval.call(null,imin,(jmin - 1)),cljs.core.logic.fd.interval.call(null,(jmax + 1),imax));
} else
{if(((imin < jmin)) && ((jmin <= imax)))
{return cljs.core.logic.fd.interval.call(null,imin,(jmin - 1));
} else
{if(((imax > jmax)) && ((jmin <= imin)))
{return cljs.core.logic.fd.interval.call(null,(jmax + 1),imax);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.ex_info.call(null,[cljs.core.str("Interval difference not defined "),cljs.core.str(i),cljs.core.str(" "),cljs.core.str(j)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else
{return null;
}
}
}
}
}
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.logic.fd.difference_STAR_.call(null,this$__$1,that);
} else
{return null;
}
}
}
});
cljs.core.logic.fd.IntervalFD.prototype.cljs$core$logic$fd$ISortedDomain$ = true;
cljs.core.logic.fd.IntervalFD.prototype.cljs$core$logic$fd$ISortedDomain$_drop_one$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var nlb = (self__.lb + 1);if((nlb <= self__.ub))
{return cljs.core.logic.fd.interval.call(null,nlb,self__.ub);
} else
{return null;
}
});
cljs.core.logic.fd.IntervalFD.prototype.cljs$core$logic$fd$ISortedDomain$_drop_before$arity$2 = (function (this$,n){var self__ = this;
var this$__$1 = this;if(cljs.core._EQ_.call(null,n,self__.ub))
{return n;
} else
{if((n < self__.lb))
{return this$__$1;
} else
{if((n > self__.ub))
{return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.logic.fd.interval.call(null,n,self__.ub);
} else
{return null;
}
}
}
}
});
cljs.core.logic.fd.IntervalFD.prototype.cljs$core$logic$fd$ISortedDomain$_keep_before$arity$2 = (function (this$,n){var self__ = this;
var this$__$1 = this;if((n <= self__.lb))
{return null;
} else
{if((n > self__.ub))
{return this$__$1;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.logic.fd.interval.call(null,self__.lb,(n - 1));
} else
{return null;
}
}
}
});
cljs.core.logic.fd.IntervalFD.prototype.cljs$core$logic$fd$IInterval$ = true;
cljs.core.logic.fd.IntervalFD.prototype.cljs$core$logic$fd$IInterval$_lb$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.lb;
});
cljs.core.logic.fd.IntervalFD.prototype.cljs$core$logic$fd$IInterval$_ub$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.ub;
});
cljs.core.logic.fd.IntervalFD.prototype.cljs$core$logic$protocols$IMemberCount$ = true;
cljs.core.logic.fd.IntervalFD.prototype.cljs$core$logic$protocols$IMemberCount$_member_count$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return ((self__.ub - self__.lb) + 1);
});
cljs.core.logic.fd.IntervalFD.prototype.toString = (function (){var self__ = this;
var this$ = this;return cljs.core.pr_str.call(null,this$);
});
cljs.core.logic.fd.IntervalFD.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,o){var self__ = this;
var ___$1 = this;if((o instanceof cljs.core.logic.fd.IntervalFD))
{return (cljs.core._EQ_.call(null,self__.lb,cljs.core.logic.fd._lb.call(null,o))) && (cljs.core._EQ_.call(null,self__.ub,cljs.core.logic.fd._ub.call(null,o)));
} else
{return false;
}
});
cljs.core.logic.fd.__GT_IntervalFD = (function __GT_IntervalFD(lb,ub){return (new cljs.core.logic.fd.IntervalFD(lb,ub));
});
cljs.core.logic.fd.interval_QMARK_ = (function interval_QMARK_(x){return (x instanceof cljs.core.logic.fd.IntervalFD);
});
/**
* Construct an interval for an assignment to a var. intervals may
* be more efficient that the domain type when the range of possiblities
* is large.
*/
cljs.core.logic.fd.interval = (function() {
var interval = null;
var interval__1 = (function (ub){return (new cljs.core.logic.fd.IntervalFD(0,ub));
});
var interval__2 = (function (lb,ub){if(((ub - lb) === 0))
{return ub;
} else
{return (new cljs.core.logic.fd.IntervalFD(lb,ub));
}
});
interval = function(lb,ub){
switch(arguments.length){
case 1:
return interval__1.call(this,lb);
case 2:
return interval__2.call(this,lb,ub);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
interval.cljs$core$IFn$_invoke$arity$1 = interval__1;
interval.cljs$core$IFn$_invoke$arity$2 = interval__2;
return interval;
})()
;
cljs.core.logic.fd.intersection_STAR_ = (function intersection_STAR_(is,js){var is__$1 = cljs.core.seq.call(null,cljs.core.logic.fd._intervals.call(null,is));var js__$1 = cljs.core.seq.call(null,cljs.core.logic.fd._intervals.call(null,js));var r = cljs.core.PersistentVector.EMPTY;while(true){
if((is__$1) && (js__$1))
{var i = cljs.core.first.call(null,is__$1);var j = cljs.core.first.call(null,js__$1);if(cljs.core.logic.fd.interval__LT_.call(null,i,j))
{{
var G__35226 = cljs.core.next.call(null,is__$1);
var G__35227 = js__$1;
var G__35228 = r;
is__$1 = G__35226;
js__$1 = G__35227;
r = G__35228;
continue;
}
} else
{if(cljs.core.logic.fd.interval__GT_.call(null,i,j))
{{
var G__35229 = is__$1;
var G__35230 = cljs.core.next.call(null,js__$1);
var G__35231 = r;
is__$1 = G__35229;
js__$1 = G__35230;
r = G__35231;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var vec__35224 = cljs.core.logic.fd.bounds.call(null,i);var imin = cljs.core.nth.call(null,vec__35224,0,null);var imax = cljs.core.nth.call(null,vec__35224,1,null);var vec__35225 = cljs.core.logic.fd.bounds.call(null,j);var jmin = cljs.core.nth.call(null,vec__35225,0,null);var jmax = cljs.core.nth.call(null,vec__35225,1,null);if((imin <= jmin))
{if((imax < jmax))
{{
var G__35232 = cljs.core.next.call(null,is__$1);
var G__35233 = cljs.core.cons.call(null,cljs.core.logic.fd.interval.call(null,(imax + 1),jmax),cljs.core.next.call(null,js__$1));
var G__35234 = cljs.core.conj.call(null,r,cljs.core.logic.fd.interval.call(null,jmin,imax));
is__$1 = G__35232;
js__$1 = G__35233;
r = G__35234;
continue;
}
} else
{if((imax > jmax))
{{
var G__35235 = cljs.core.cons.call(null,cljs.core.logic.fd.interval.call(null,(jmax + 1),imax),cljs.core.next.call(null,is__$1));
var G__35236 = cljs.core.next.call(null,js__$1);
var G__35237 = cljs.core.conj.call(null,r,j);
is__$1 = G__35235;
js__$1 = G__35236;
r = G__35237;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__35238 = cljs.core.next.call(null,is__$1);
var G__35239 = cljs.core.next.call(null,js__$1);
var G__35240 = cljs.core.conj.call(null,r,cljs.core.logic.fd.interval.call(null,jmin,jmax));
is__$1 = G__35238;
js__$1 = G__35239;
r = G__35240;
continue;
}
} else
{return null;
}
}
}
} else
{if((imin > jmin))
{if((imax > jmax))
{{
var G__35241 = cljs.core.cons.call(null,cljs.core.logic.fd.interval.call(null,(jmax + 1),imax),cljs.core.next.call(null,is__$1));
var G__35242 = cljs.core.next.call(null,js__$1);
var G__35243 = cljs.core.conj.call(null,r,cljs.core.logic.fd.interval.call(null,imin,jmax));
is__$1 = G__35241;
js__$1 = G__35242;
r = G__35243;
continue;
}
} else
{if((imax < jmax))
{{
var G__35244 = is__$1;
var G__35245 = cljs.core.cons.call(null,cljs.core.logic.fd.interval.call(null,(imax + 1),jmax),cljs.core.next.call(null,js__$1));
var G__35246 = cljs.core.conj.call(null,r,i);
is__$1 = G__35244;
js__$1 = G__35245;
r = G__35246;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__35247 = cljs.core.next.call(null,is__$1);
var G__35248 = cljs.core.next.call(null,js__$1);
var G__35249 = cljs.core.conj.call(null,r,cljs.core.logic.fd.interval.call(null,imin,imax));
is__$1 = G__35247;
js__$1 = G__35248;
r = G__35249;
continue;
}
} else
{return null;
}
}
}
} else
{return null;
}
}
} else
{return null;
}
}
}
} else
{return cljs.core.apply.call(null,cljs.core.logic.fd.multi_interval,r);
}
break;
}
});
cljs.core.logic.fd.difference_STAR_ = (function difference_STAR_(is,js){var is__$1 = cljs.core.seq.call(null,cljs.core.logic.fd._intervals.call(null,is));var js__$1 = cljs.core.seq.call(null,cljs.core.logic.fd._intervals.call(null,js));var r = cljs.core.PersistentVector.EMPTY;while(true){
if(is__$1)
{if(js__$1)
{var i = cljs.core.first.call(null,is__$1);var j = cljs.core.first.call(null,js__$1);if(cljs.core.logic.fd.interval__LT_.call(null,i,j))
{{
var G__35254 = cljs.core.next.call(null,is__$1);
var G__35255 = js__$1;
var G__35256 = cljs.core.conj.call(null,r,i);
is__$1 = G__35254;
js__$1 = G__35255;
r = G__35256;
continue;
}
} else
{if(cljs.core.logic.fd.interval__GT_.call(null,i,j))
{{
var G__35257 = is__$1;
var G__35258 = cljs.core.next.call(null,js__$1);
var G__35259 = r;
is__$1 = G__35257;
js__$1 = G__35258;
r = G__35259;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var vec__35252 = cljs.core.logic.fd.bounds.call(null,i);var imin = cljs.core.nth.call(null,vec__35252,0,null);var imax = cljs.core.nth.call(null,vec__35252,1,null);var vec__35253 = cljs.core.logic.fd.bounds.call(null,j);var jmin = cljs.core.nth.call(null,vec__35253,0,null);var jmax = cljs.core.nth.call(null,vec__35253,1,null);if((imin < jmin))
{if((jmax < imax))
{{
var G__35260 = cljs.core.cons.call(null,cljs.core.logic.fd.interval.call(null,(jmax + 1),imax),cljs.core.next.call(null,is__$1));
var G__35261 = cljs.core.next.call(null,js__$1);
var G__35262 = cljs.core.conj.call(null,r,cljs.core.logic.fd.interval.call(null,imin,(jmin - 1)));
is__$1 = G__35260;
js__$1 = G__35261;
r = G__35262;
continue;
}
} else
{if((jmax > imax))
{{
var G__35263 = cljs.core.next.call(null,is__$1);
var G__35264 = cljs.core.cons.call(null,cljs.core.logic.fd.interval.call(null,(imax + 1),jmax),cljs.core.next.call(null,js__$1));
var G__35265 = cljs.core.conj.call(null,r,cljs.core.logic.fd.interval.call(null,imin,(jmin - 1)));
is__$1 = G__35263;
js__$1 = G__35264;
r = G__35265;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__35266 = cljs.core.next.call(null,is__$1);
var G__35267 = cljs.core.next.call(null,js__$1);
var G__35268 = cljs.core.conj.call(null,r,cljs.core.logic.fd.interval.call(null,imin,(jmin - 1)));
is__$1 = G__35266;
js__$1 = G__35267;
r = G__35268;
continue;
}
} else
{return null;
}
}
}
} else
{if((imin >= jmin))
{if((imax < jmax))
{{
var G__35269 = cljs.core.next.call(null,is__$1);
var G__35270 = cljs.core.cons.call(null,cljs.core.logic.fd.interval.call(null,(imax + 1),jmax),cljs.core.next.call(null,js__$1));
var G__35271 = r;
is__$1 = G__35269;
js__$1 = G__35270;
r = G__35271;
continue;
}
} else
{if((imax > jmax))
{{
var G__35272 = cljs.core.cons.call(null,cljs.core.logic.fd.interval.call(null,(jmax + 1),imax),cljs.core.next.call(null,is__$1));
var G__35273 = cljs.core.next.call(null,js__$1);
var G__35274 = r;
is__$1 = G__35272;
js__$1 = G__35273;
r = G__35274;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__35275 = cljs.core.next.call(null,is__$1);
var G__35276 = cljs.core.next.call(null,js__$1);
var G__35277 = r;
is__$1 = G__35275;
js__$1 = G__35276;
r = G__35277;
continue;
}
} else
{return null;
}
}
}
} else
{return null;
}
}
} else
{return null;
}
}
}
} else
{return cljs.core.apply.call(null,cljs.core.logic.fd.multi_interval,cljs.core.into.call(null,r,is__$1));
}
} else
{return cljs.core.apply.call(null,cljs.core.logic.fd.multi_interval,r);
}
break;
}
});
cljs.core.logic.fd.disjoint_QMARK__STAR_ = (function disjoint_QMARK__STAR_(is,js){if(cljs.core.truth_(cljs.core.logic.fd._disjoint_QMARK_.call(null,cljs.core.logic.fd.interval.call(null,cljs.core.logic.fd._lb.call(null,is),cljs.core.logic.fd._ub.call(null,is)),cljs.core.logic.fd.interval.call(null,cljs.core.logic.fd._lb.call(null,js),cljs.core.logic.fd._ub.call(null,js)))))
{return true;
} else
{var d0 = cljs.core.logic.fd._intervals.call(null,is);var d1 = cljs.core.logic.fd._intervals.call(null,js);var d0__$1 = d0;var d1__$1 = d1;while(true){
if(((d0__$1 == null)) || ((d1__$1 == null)))
{return true;
} else
{var i = cljs.core.first.call(null,d0__$1);var j = cljs.core.first.call(null,d1__$1);if(cljs.core.logic.fd.interval__LT_.call(null,i,j))
{{
var G__35278 = cljs.core.next.call(null,d0__$1);
var G__35279 = d1__$1;
d0__$1 = G__35278;
d1__$1 = G__35279;
continue;
}
} else
{if(cljs.core.logic.fd.interval__GT_.call(null,i,j))
{{
var G__35280 = d0__$1;
var G__35281 = cljs.core.next.call(null,d1__$1);
d0__$1 = G__35280;
d1__$1 = G__35281;
continue;
}
} else
{if(cljs.core.truth_(cljs.core.logic.fd._disjoint_QMARK_.call(null,i,j)))
{{
var G__35282 = cljs.core.next.call(null,d0__$1);
var G__35283 = d1__$1;
d0__$1 = G__35282;
d1__$1 = G__35283;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return false;
} else
{return null;
}
}
}
}
}
break;
}
}
});

/**
* @constructor
*/
cljs.core.logic.fd.MultiIntervalFD = (function (min,max,is){
this.min = min;
this.max = max;
this.is = is;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2149581056;
})
cljs.core.logic.fd.MultiIntervalFD.cljs$lang$type = true;
cljs.core.logic.fd.MultiIntervalFD.cljs$lang$ctorStr = "cljs.core.logic.fd/MultiIntervalFD";
cljs.core.logic.fd.MultiIntervalFD.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.logic.fd/MultiIntervalFD");
});
cljs.core.logic.fd.MultiIntervalFD.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,opts){var self__ = this;
var x__$1 = this;return cljs.core._write.call(null,writer,[cljs.core.str("<intervals:"),cljs.core.str(cljs.core.apply.call(null,cljs.core.pr_str,new cljs.core.Keyword(null,"is","is",1013907612).cljs$core$IFn$_invoke$arity$1(x__$1))),cljs.core.str(">")].join(''));
});
cljs.core.logic.fd.MultiIntervalFD.prototype.cljs$core$logic$protocols$IMergeDomains$ = true;
cljs.core.logic.fd.MultiIntervalFD.prototype.cljs$core$logic$protocols$IMergeDomains$_merge_doms$arity$2 = (function (this$,that){var self__ = this;
var this$__$1 = this;return cljs.core.logic.fd._intersection.call(null,this$__$1,that);
});
cljs.core.logic.fd.MultiIntervalFD.prototype.cljs$core$logic$fd$IIntervals$ = true;
cljs.core.logic.fd.MultiIntervalFD.prototype.cljs$core$logic$fd$IIntervals$_intervals$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.seq.call(null,self__.is);
});
cljs.core.logic.fd.MultiIntervalFD.prototype.cljs$core$logic$fd$ISet$ = true;
cljs.core.logic.fd.MultiIntervalFD.prototype.cljs$core$logic$fd$ISet$_member_QMARK_$arity$2 = (function (this$,n){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__35285_SHARP_){return cljs.core.logic.fd._member_QMARK_.call(null,p1__35285_SHARP_,n);
}),self__.is)))
{return true;
} else
{return false;
}
});
cljs.core.logic.fd.MultiIntervalFD.prototype.cljs$core$logic$fd$ISet$_disjoint_QMARK_$arity$2 = (function (this$,that){var self__ = this;
var this$__$1 = this;return cljs.core.logic.fd.disjoint_QMARK__STAR_.call(null,this$__$1,that);
});
cljs.core.logic.fd.MultiIntervalFD.prototype.cljs$core$logic$fd$ISet$_intersection$arity$2 = (function (this$,that){var self__ = this;
var this$__$1 = this;return cljs.core.logic.fd.intersection_STAR_.call(null,this$__$1,that);
});
cljs.core.logic.fd.MultiIntervalFD.prototype.cljs$core$logic$fd$ISet$_difference$arity$2 = (function (this$,that){var self__ = this;
var this$__$1 = this;return cljs.core.logic.fd.difference_STAR_.call(null,this$__$1,that);
});
cljs.core.logic.fd.MultiIntervalFD.prototype.cljs$core$logic$fd$ISortedDomain$ = true;
cljs.core.logic.fd.MultiIntervalFD.prototype.cljs$core$logic$fd$ISortedDomain$_drop_one$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var i = cljs.core.first.call(null,self__.is);if(cljs.core.truth_(cljs.core.logic.fd.singleton_dom_QMARK_.call(null,i)))
{var nis = cljs.core.rest.call(null,self__.is);return (new cljs.core.logic.fd.MultiIntervalFD(cljs.core.logic.fd._lb.call(null,cljs.core.first.call(null,nis)),self__.max,nis));
} else
{var ni = cljs.core.logic.fd._drop_one.call(null,i);return (new cljs.core.logic.fd.MultiIntervalFD(cljs.core.logic.fd._lb.call(null,ni),self__.max,cljs.core.cons.call(null,ni,cljs.core.rest.call(null,self__.is))));
}
});
cljs.core.logic.fd.MultiIntervalFD.prototype.cljs$core$logic$fd$ISortedDomain$_drop_before$arity$2 = (function (_,n){var self__ = this;
var ___$1 = this;var is__$1 = cljs.core.seq.call(null,self__.is);var is__$2 = is__$1;var r = cljs.core.PersistentVector.EMPTY;while(true){
if(is__$2)
{var i = cljs.core.logic.fd._drop_before.call(null,cljs.core.first.call(null,is__$2),n);if(cljs.core.truth_(i))
{{
var G__35288 = cljs.core.next.call(null,is__$2);
var G__35289 = cljs.core.conj.call(null,r,i);
is__$2 = G__35288;
r = G__35289;
continue;
}
} else
{{
var G__35290 = cljs.core.next.call(null,is__$2);
var G__35291 = r;
is__$2 = G__35290;
r = G__35291;
continue;
}
}
} else
{if((cljs.core.count.call(null,r) > 0))
{return cljs.core.apply.call(null,cljs.core.logic.fd.multi_interval,r);
} else
{return null;
}
}
break;
}
});
cljs.core.logic.fd.MultiIntervalFD.prototype.cljs$core$logic$fd$ISortedDomain$_keep_before$arity$2 = (function (_,n){var self__ = this;
var ___$1 = this;var is__$1 = cljs.core.seq.call(null,self__.is);var is__$2 = is__$1;var r = cljs.core.PersistentVector.EMPTY;while(true){
if(is__$2)
{var i = cljs.core.logic.fd._keep_before.call(null,cljs.core.first.call(null,is__$2),n);if(cljs.core.truth_(i))
{{
var G__35292 = cljs.core.next.call(null,is__$2);
var G__35293 = cljs.core.conj.call(null,r,i);
is__$2 = G__35292;
r = G__35293;
continue;
}
} else
{{
var G__35294 = cljs.core.next.call(null,is__$2);
var G__35295 = r;
is__$2 = G__35294;
r = G__35295;
continue;
}
}
} else
{if((cljs.core.count.call(null,r) > 0))
{return cljs.core.apply.call(null,cljs.core.logic.fd.multi_interval,r);
} else
{return null;
}
}
break;
}
});
cljs.core.logic.fd.MultiIntervalFD.prototype.cljs$core$logic$fd$IInterval$ = true;
cljs.core.logic.fd.MultiIntervalFD.prototype.cljs$core$logic$fd$IInterval$_lb$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.min;
});
cljs.core.logic.fd.MultiIntervalFD.prototype.cljs$core$logic$fd$IInterval$_ub$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.max;
});
cljs.core.logic.fd.MultiIntervalFD.prototype.cljs$core$logic$protocols$IMemberCount$ = true;
cljs.core.logic.fd.MultiIntervalFD.prototype.cljs$core$logic$protocols$IMemberCount$_member_count$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.reduce.call(null,cljs.core._PLUS_,0,cljs.core.map.call(null,(function (p1__35284_SHARP_){return cljs.core.logic.protocols._member_count.call(null,p1__35284_SHARP_);
}),self__.is));
});
cljs.core.logic.fd.MultiIntervalFD.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,j){var self__ = this;
var this$__$1 = this;if((j instanceof cljs.core.logic.fd.MultiIntervalFD))
{var i = this$__$1;var vec__35286 = cljs.core.logic.fd.bounds.call(null,j);var jmin = cljs.core.nth.call(null,vec__35286,0,null);var jmax = cljs.core.nth.call(null,vec__35286,1,null);if((cljs.core._EQ_.call(null,self__.min,jmin)) && (cljs.core._EQ_.call(null,self__.max,jmax)))
{var is__$1 = cljs.core.logic.fd.normalize_intervals.call(null,self__.is);var js = cljs.core.logic.fd.normalize_intervals.call(null,cljs.core.logic.fd._intervals.call(null,j));return cljs.core._EQ_.call(null,is__$1,js);
} else
{return false;
}
} else
{return false;
}
});
cljs.core.logic.fd.MultiIntervalFD.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;return cljs.core._lookup.call(null,this$__$1,k,null);
});
cljs.core.logic.fd.MultiIntervalFD.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){var self__ = this;
var this$__$1 = this;var G__35287 = k;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"max","max",1014012118),G__35287))
{return self__.max;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"min","min",1014012356),G__35287))
{return self__.min;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"is","is",1013907612),G__35287))
{return self__.is;
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
cljs.core.logic.fd.__GT_MultiIntervalFD = (function __GT_MultiIntervalFD(min,max,is){return (new cljs.core.logic.fd.MultiIntervalFD(min,max,is));
});
cljs.core.logic.fd.normalize_intervals = (function normalize_intervals(is){return cljs.core.reduce.call(null,(function (r,i){if((cljs.core.count.call(null,r) === 0))
{return cljs.core.conj.call(null,r,i);
} else
{var j = cljs.core.peek.call(null,r);var jmax = cljs.core.logic.fd._ub.call(null,j);var imin = cljs.core.logic.fd._lb.call(null,i);if(((imin - 1) <= jmax))
{return cljs.core.conj.call(null,cljs.core.pop.call(null,r),cljs.core.logic.fd.interval.call(null,cljs.core.logic.fd._lb.call(null,j),cljs.core.logic.fd._ub.call(null,i)));
} else
{return cljs.core.conj.call(null,r,i);
}
}
}),cljs.core.PersistentVector.EMPTY,is);
});
/**
* @param {...*} var_args
*/
cljs.core.logic.fd.multi_interval = (function() {
var multi_interval = null;
var multi_interval__0 = (function (){return null;
});
var multi_interval__1 = (function (i0){return i0;
});
var multi_interval__2 = (function (i0,i1){var is = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i0,i1], null);return (new cljs.core.logic.fd.MultiIntervalFD(cljs.core.reduce.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.logic.fd._lb,is)),cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.logic.fd._ub,is)),is));
});
var multi_interval__3 = (function() { 
var G__35296__delegate = function (i0,i1,ir){var is = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,i1),i0),ir));return (new cljs.core.logic.fd.MultiIntervalFD(cljs.core.reduce.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.logic.fd._lb,is)),cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.logic.fd._ub,is)),is));
};
var G__35296 = function (i0,i1,var_args){
var ir = null;if (arguments.length > 2) {
  ir = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__35296__delegate.call(this,i0,i1,ir);};
G__35296.cljs$lang$maxFixedArity = 2;
G__35296.cljs$lang$applyTo = (function (arglist__35297){
var i0 = cljs.core.first(arglist__35297);
arglist__35297 = cljs.core.next(arglist__35297);
var i1 = cljs.core.first(arglist__35297);
var ir = cljs.core.rest(arglist__35297);
return G__35296__delegate(i0,i1,ir);
});
G__35296.cljs$core$IFn$_invoke$arity$variadic = G__35296__delegate;
return G__35296;
})()
;
multi_interval = function(i0,i1,var_args){
var ir = var_args;
switch(arguments.length){
case 0:
return multi_interval__0.call(this);
case 1:
return multi_interval__1.call(this,i0);
case 2:
return multi_interval__2.call(this,i0,i1);
default:
return multi_interval__3.cljs$core$IFn$_invoke$arity$variadic(i0,i1, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
multi_interval.cljs$lang$maxFixedArity = 2;
multi_interval.cljs$lang$applyTo = multi_interval__3.cljs$lang$applyTo;
multi_interval.cljs$core$IFn$_invoke$arity$0 = multi_interval__0;
multi_interval.cljs$core$IFn$_invoke$arity$1 = multi_interval__1;
multi_interval.cljs$core$IFn$_invoke$arity$2 = multi_interval__2;
multi_interval.cljs$core$IFn$_invoke$arity$variadic = multi_interval__3.cljs$core$IFn$_invoke$arity$variadic;
return multi_interval;
})()
;
cljs.core.logic.fd.get_dom = (function get_dom(a,x){if(cljs.core.logic.lvar_QMARK_.call(null,x))
{return cljs.core.logic.get_dom.call(null,a,x,new cljs.core.Keyword("cljs.core.logic","fd","cljs.core.logic/fd",3673845947));
} else
{return x;
}
});
cljs.core.logic.fd.ext_dom_fd = (function ext_dom_fd(a,x,dom,domp){var a__$1 = cljs.core.logic.add_dom.call(null,a,x,new cljs.core.Keyword("cljs.core.logic","fd","cljs.core.logic/fd",3673845947),dom);if(cljs.core.not_EQ_.call(null,domp,dom))
{return cljs.core.logic.run_constraints_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),new cljs.core.Keyword(null,"cs","cs",1013907426).cljs$core$IFn$_invoke$arity$1(a__$1),new cljs.core.Keyword("cljs.core.logic","fd","cljs.core.logic/fd",3673845947)).call(null,a__$1);
} else
{return a__$1;
}
});
cljs.core.logic.fd.singleton_dom_QMARK_ = (function singleton_dom_QMARK_(x){return cljs.core.integer_QMARK_.call(null,x);
});
cljs.core.logic.fd.resolve_storable_dom = (function resolve_storable_dom(a,x,dom,domp){if(cljs.core.logic.fd.singleton_dom_QMARK_.call(null,dom))
{var xv = cljs.core.logic.protocols.walk.call(null,a,x);if(cljs.core.logic.lvar_QMARK_.call(null,xv))
{return cljs.core.logic.protocols.ext_run_cs.call(null,cljs.core.logic.rem_dom.call(null,a,x,new cljs.core.Keyword("cljs.core.logic","fd","cljs.core.logic/fd",3673845947)),x,dom);
} else
{return a;
}
} else
{return cljs.core.logic.fd.ext_dom_fd.call(null,a,x,dom,domp);
}
});
/**
* If x is a var we update its domain. If it's an integer
* we check that it's a member of the given domain. dom is
* then new domain, it should have already been calculated from
* domp which was the previous domain.
*/
cljs.core.logic.fd.process_dom = (function process_dom(x,dom,domp){return (function (a){if(cljs.core.truth_(dom))
{if(cljs.core.logic.lvar_QMARK_.call(null,x))
{return cljs.core.logic.fd.resolve_storable_dom.call(null,a,x,dom,domp);
} else
{if(cljs.core.truth_(cljs.core.logic.fd._member_QMARK_.call(null,dom,x)))
{return a;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
} else
{return null;
}
});
});
/**
* Assign a var x a domain.
*/
cljs.core.logic.fd.dom = (function dom(x,dom__$1){return (function (a){var domp = cljs.core.logic.fd.get_dom.call(null,a,x);var dom__$2 = (cljs.core.truth_(domp)?cljs.core.logic.fd._intersection.call(null,dom__$1,domp):dom__$1);return cljs.core.logic.composeg.call(null,cljs.core.logic.fd.process_dom.call(null,x,dom__$2,domp),((((domp == null)) && (!(cljs.core.logic.fd.singleton_dom_QMARK_.call(null,dom__$2))))?cljs.core.logic.fd.domc.call(null,x):cljs.core.identity)).call(null,a);
});
});
cljs.core.logic.fd.map_sum = (function map_sum(f){return (function loop(ls){if(cljs.core.empty_QMARK_.call(null,ls))
{return (function (a){return null;
});
} else
{return (function (a){return cljs.core.logic.protocols.mplus.call(null,f.call(null,cljs.core.first.call(null,ls)).call(null,a),(function (){return loop.call(null,cljs.core.rest.call(null,ls)).call(null,a);
}));
});
}
});
});
cljs.core.logic.fd.to_vals = (function to_vals(dom){var to_vals_STAR_ = (function to_vals_STAR_(is){if(cljs.core.truth_(is))
{var i = cljs.core.first.call(null,is);return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,cljs.core.logic.fd._lb.call(null,i),(function (){var temp__4096__auto__ = cljs.core.logic.fd._drop_one.call(null,i);if(cljs.core.truth_(temp__4096__auto__))
{var ni = temp__4096__auto__;return to_vals_STAR_.call(null,cljs.core.cons.call(null,ni,cljs.core.next.call(null,is)));
} else
{return to_vals_STAR_.call(null,cljs.core.next.call(null,is));
}
})());
}),null,null));
} else
{return null;
}
});
return to_vals_STAR_.call(null,cljs.core.seq.call(null,cljs.core.logic.fd._intervals.call(null,dom)));
});
cljs.core.logic.fd.MultiIntervalFD.prototype.cljs$core$logic$protocols$IForceAnswerTerm$ = true;
cljs.core.logic.fd.MultiIntervalFD.prototype.cljs$core$logic$protocols$IForceAnswerTerm$_force_ans$arity$2 = (function (v,x){var v__$1 = this;return cljs.core.logic.fd.map_sum.call(null,(function (n){return cljs.core.logic.ext_run_csg.call(null,x,n);
})).call(null,cljs.core.logic.fd.to_vals.call(null,v__$1));
});
cljs.core.logic.fd.IntervalFD.prototype.cljs$core$logic$protocols$IForceAnswerTerm$ = true;
cljs.core.logic.fd.IntervalFD.prototype.cljs$core$logic$protocols$IForceAnswerTerm$_force_ans$arity$2 = (function (v,x){var v__$1 = this;return cljs.core.logic.fd.map_sum.call(null,(function (n){return cljs.core.logic.ext_run_csg.call(null,x,n);
})).call(null,cljs.core.logic.fd.to_vals.call(null,v__$1));
});
cljs.core.logic.fd.FiniteDomain.prototype.cljs$core$logic$protocols$IForceAnswerTerm$ = true;
cljs.core.logic.fd.FiniteDomain.prototype.cljs$core$logic$protocols$IForceAnswerTerm$_force_ans$arity$2 = (function (v,x){var v__$1 = this;return cljs.core.logic.fd.map_sum.call(null,(function (n){return cljs.core.logic.ext_run_csg.call(null,x,n);
})).call(null,cljs.core.logic.fd.to_vals.call(null,v__$1));
});
cljs.core.logic.fd._domc = (function _domc(x){if(typeof cljs.core.logic.fd.t35305 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t35305 = (function (x,_domc,meta35306){
this.x = x;
this._domc = _domc;
this.meta35306 = meta35306;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.fd.t35305.cljs$lang$type = true;
cljs.core.logic.fd.t35305.cljs$lang$ctorStr = "cljs.core.logic.fd/t35305";
cljs.core.logic.fd.t35305.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.logic.fd/t35305");
});
cljs.core.logic.fd.t35305.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$ = true;
cljs.core.logic.fd.t35305.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440),null], null), null);
});
cljs.core.logic.fd.t35305.prototype.cljs$core$logic$protocols$IConstraintOp$ = true;
cljs.core.logic.fd.t35305.prototype.cljs$core$logic$protocols$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic.fd","domc","cljs.core.logic.fd/domc",1533784811,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,650),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,650),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,41)))));
});
cljs.core.logic.fd.t35305.prototype.cljs$core$logic$protocols$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.x], null);
});
cljs.core.logic.fd.t35305.prototype.cljs$core$logic$protocols$IConstraintStep$ = true;
cljs.core.logic.fd.t35305.prototype.cljs$core$logic$protocols$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;var xv = cljs.core.logic.protocols.walk.call(null,s,self__.x);var xd = new cljs.core.Keyword("cljs.core.logic","fd","cljs.core.logic/fd",3673845947).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"doms","doms",1016993507).cljs$core$IFn$_invoke$arity$1(cljs.core.logic.protocols.root_val.call(null,s,self__.x)));if(typeof cljs.core.logic.fd.t35308 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t35308 = (function (xd,xv,s,this$,meta35306,x,_domc,meta35309){
this.xd = xd;
this.xv = xv;
this.s = s;
this.this$ = this$;
this.meta35306 = meta35306;
this.x = x;
this._domc = _domc;
this.meta35309 = meta35309;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.fd.t35308.cljs$lang$type = true;
cljs.core.logic.fd.t35308.cljs$lang$ctorStr = "cljs.core.logic.fd/t35308";
cljs.core.logic.fd.t35308.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.logic.fd/t35308");
});
cljs.core.logic.fd.t35308.prototype.cljs$core$logic$protocols$IRunnable$ = true;
cljs.core.logic.fd.t35308.prototype.cljs$core$logic$protocols$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return !(cljs.core.logic.lvar_QMARK_.call(null,self__.xv));
});
cljs.core.logic.fd.t35308.prototype.cljs$core$logic$protocols$IEntailed$ = true;
cljs.core.logic.fd.t35308.prototype.cljs$core$logic$protocols$IEntailed$_entailed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (self__.xd == null);
});
cljs.core.logic.fd.t35308.prototype.call = (function (self__,s__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;if(cljs.core.truth_(self__.xd))
{if(cljs.core.truth_(cljs.core.logic.fd._member_QMARK_.call(null,self__.xd,self__.xv)))
{return cljs.core.logic.rem_dom.call(null,s__$2,self__.x,new cljs.core.Keyword("cljs.core.logic","fd","cljs.core.logic/fd",3673845947));
} else
{return null;
}
} else
{return s__$2;
}
});
cljs.core.logic.fd.t35308.prototype.apply = (function (self__,args35311){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args35311)));
});
cljs.core.logic.fd.t35308.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.xd))
{if(cljs.core.truth_(cljs.core.logic.fd._member_QMARK_.call(null,self__.xd,self__.xv)))
{return cljs.core.logic.rem_dom.call(null,s__$2,self__.x,new cljs.core.Keyword("cljs.core.logic","fd","cljs.core.logic/fd",3673845947));
} else
{return null;
}
} else
{return s__$2;
}
});
cljs.core.logic.fd.t35308.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35310){var self__ = this;
var _35310__$1 = this;return self__.meta35309;
});
cljs.core.logic.fd.t35308.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35310,meta35309__$1){var self__ = this;
var _35310__$1 = this;return (new cljs.core.logic.fd.t35308(self__.xd,self__.xv,self__.s,self__.this$,self__.meta35306,self__.x,self__._domc,meta35309__$1));
});
cljs.core.logic.fd.__GT_t35308 = (function __GT_t35308(xd__$1,xv__$1,s__$1,this$__$2,meta35306__$1,x__$2,_domc__$2,meta35309){return (new cljs.core.logic.fd.t35308(xd__$1,xv__$1,s__$1,this$__$2,meta35306__$1,x__$2,_domc__$2,meta35309));
});
}
return (new cljs.core.logic.fd.t35308(xd,xv,s,this$__$1,self__.meta35306,self__.x,self__._domc,null));
});
cljs.core.logic.fd.t35305.prototype.cljs$core$logic$protocols$IEnforceableConstraint$ = true;
cljs.core.logic.fd.t35305.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35307){var self__ = this;
var _35307__$1 = this;return self__.meta35306;
});
cljs.core.logic.fd.t35305.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35307,meta35306__$1){var self__ = this;
var _35307__$1 = this;return (new cljs.core.logic.fd.t35305(self__.x,self__._domc,meta35306__$1));
});
cljs.core.logic.fd.__GT_t35305 = (function __GT_t35305(x__$1,_domc__$1,meta35306){return (new cljs.core.logic.fd.t35305(x__$1,_domc__$1,meta35306));
});
}
return (new cljs.core.logic.fd.t35305(x,_domc,null));
});
cljs.core.logic.fd.domc = (function domc(x){return cljs.core.logic.cgoal.call(null,cljs.core.logic.fd._domc.call(null,x));
});
cljs.core.logic.fd._EQ__EQ_c = (function _EQ__EQ_c(u,v){if(typeof cljs.core.logic.fd.t35319 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t35319 = (function (v,u,_EQ__EQ_c,meta35320){
this.v = v;
this.u = u;
this._EQ__EQ_c = _EQ__EQ_c;
this.meta35320 = meta35320;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.fd.t35319.cljs$lang$type = true;
cljs.core.logic.fd.t35319.cljs$lang$ctorStr = "cljs.core.logic.fd/t35319";
cljs.core.logic.fd.t35319.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.logic.fd/t35319");
});
cljs.core.logic.fd.t35319.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$ = true;
cljs.core.logic.fd.t35319.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.core.logic","fd","cljs.core.logic/fd",3673845947),null,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440),null], null), null);
});
cljs.core.logic.fd.t35319.prototype.cljs$core$logic$protocols$IConstraintOp$ = true;
cljs.core.logic.fd.t35319.prototype.cljs$core$logic$protocols$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic.fd","==","cljs.core.logic.fd/==",1528485544,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,680),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,680),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,39)))));
});
cljs.core.logic.fd.t35319.prototype.cljs$core$logic$protocols$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.u,self__.v], null);
});
cljs.core.logic.fd.t35319.prototype.cljs$core$logic$protocols$IConstraintStep$ = true;
cljs.core.logic.fd.t35319.prototype.cljs$core$logic$protocols$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;var du = cljs.core.logic.get_dom_fd.call(null,s,self__.u);var dv = cljs.core.logic.get_dom_fd.call(null,s,self__.v);if(typeof cljs.core.logic.fd.t35322 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t35322 = (function (dv,du,s,this$,meta35320,v,u,_EQ__EQ_c,meta35323){
this.dv = dv;
this.du = du;
this.s = s;
this.this$ = this$;
this.meta35320 = meta35320;
this.v = v;
this.u = u;
this._EQ__EQ_c = _EQ__EQ_c;
this.meta35323 = meta35323;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.fd.t35322.cljs$lang$type = true;
cljs.core.logic.fd.t35322.cljs$lang$ctorStr = "cljs.core.logic.fd/t35322";
cljs.core.logic.fd.t35322.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.logic.fd/t35322");
});
cljs.core.logic.fd.t35322.prototype.cljs$core$logic$protocols$IRunnable$ = true;
cljs.core.logic.fd.t35322.prototype.cljs$core$logic$protocols$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var and__5145__auto__ = self__.du;if(cljs.core.truth_(and__5145__auto__))
{return self__.dv;
} else
{return and__5145__auto__;
}
});
cljs.core.logic.fd.t35322.prototype.cljs$core$logic$protocols$IEntailed$ = true;
cljs.core.logic.fd.t35322.prototype.cljs$core$logic$protocols$IEntailed$_entailed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (cljs.core.logic.fd.singleton_dom_QMARK_.call(null,self__.du)) && (cljs.core.logic.fd.singleton_dom_QMARK_.call(null,self__.dv)) && (cljs.core._EQ_.call(null,self__.du,self__.dv));
});
cljs.core.logic.fd.t35322.prototype.call = (function (self__,s__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;var i = cljs.core.logic.fd._intersection.call(null,self__.du,self__.dv);return cljs.core.logic.composeg.call(null,cljs.core.logic.fd.process_dom.call(null,self__.u,i,self__.du),cljs.core.logic.fd.process_dom.call(null,self__.v,i,self__.dv)).call(null,s__$2);
});
cljs.core.logic.fd.t35322.prototype.apply = (function (self__,args35325){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args35325)));
});
cljs.core.logic.fd.t35322.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
var _ = this;var i = cljs.core.logic.fd._intersection.call(null,self__.du,self__.dv);return cljs.core.logic.composeg.call(null,cljs.core.logic.fd.process_dom.call(null,self__.u,i,self__.du),cljs.core.logic.fd.process_dom.call(null,self__.v,i,self__.dv)).call(null,s__$2);
});
cljs.core.logic.fd.t35322.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35324){var self__ = this;
var _35324__$1 = this;return self__.meta35323;
});
cljs.core.logic.fd.t35322.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35324,meta35323__$1){var self__ = this;
var _35324__$1 = this;return (new cljs.core.logic.fd.t35322(self__.dv,self__.du,self__.s,self__.this$,self__.meta35320,self__.v,self__.u,self__._EQ__EQ_c,meta35323__$1));
});
cljs.core.logic.fd.__GT_t35322 = (function __GT_t35322(dv__$1,du__$1,s__$1,this$__$2,meta35320__$1,v__$2,u__$2,_EQ__EQ_c__$2,meta35323){return (new cljs.core.logic.fd.t35322(dv__$1,du__$1,s__$1,this$__$2,meta35320__$1,v__$2,u__$2,_EQ__EQ_c__$2,meta35323));
});
}
return (new cljs.core.logic.fd.t35322(dv,du,s,this$__$1,self__.meta35320,self__.v,self__.u,self__._EQ__EQ_c,null));
});
cljs.core.logic.fd.t35319.prototype.cljs$core$logic$protocols$IEnforceableConstraint$ = true;
cljs.core.logic.fd.t35319.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35321){var self__ = this;
var _35321__$1 = this;return self__.meta35320;
});
cljs.core.logic.fd.t35319.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35321,meta35320__$1){var self__ = this;
var _35321__$1 = this;return (new cljs.core.logic.fd.t35319(self__.v,self__.u,self__._EQ__EQ_c,meta35320__$1));
});
cljs.core.logic.fd.__GT_t35319 = (function __GT_t35319(v__$1,u__$1,_EQ__EQ_c__$1,meta35320){return (new cljs.core.logic.fd.t35319(v__$1,u__$1,_EQ__EQ_c__$1,meta35320));
});
}
return (new cljs.core.logic.fd.t35319(v,u,_EQ__EQ_c,null));
});
/**
* A finite domain constraint. u and v must be equal. u and v must
* eventually be given domains if vars.
*/
cljs.core.logic.fd._EQ__EQ_ = (function _EQ__EQ_(u,v){return cljs.core.logic.cgoal.call(null,cljs.core.logic.fd._EQ__EQ_c.call(null,u,v));
});
cljs.core.logic.fd._BANG__EQ_c = (function _BANG__EQ_c(u,v){if(typeof cljs.core.logic.fd.t35333 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t35333 = (function (v,u,_BANG__EQ_c,meta35334){
this.v = v;
this.u = u;
this._BANG__EQ_c = _BANG__EQ_c;
this.meta35334 = meta35334;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.fd.t35333.cljs$lang$type = true;
cljs.core.logic.fd.t35333.cljs$lang$ctorStr = "cljs.core.logic.fd/t35333";
cljs.core.logic.fd.t35333.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.logic.fd/t35333");
});
cljs.core.logic.fd.t35333.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$ = true;
cljs.core.logic.fd.t35333.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.core.logic","fd","cljs.core.logic/fd",3673845947),null,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440),null], null), null);
});
cljs.core.logic.fd.t35333.prototype.cljs$core$logic$protocols$IConstraintOp$ = true;
cljs.core.logic.fd.t35333.prototype.cljs$core$logic$protocols$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic.fd","!=","cljs.core.logic.fd/!=",1528485316,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,717),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,717),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,39)))));
});
cljs.core.logic.fd.t35333.prototype.cljs$core$logic$protocols$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.u,self__.v], null);
});
cljs.core.logic.fd.t35333.prototype.cljs$core$logic$protocols$IConstraintStep$ = true;
cljs.core.logic.fd.t35333.prototype.cljs$core$logic$protocols$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;var du = cljs.core.logic.get_dom_fd.call(null,s,self__.u);var dv = cljs.core.logic.get_dom_fd.call(null,s,self__.v);var su_QMARK_ = cljs.core.logic.fd.singleton_dom_QMARK_.call(null,du);var sv_QMARK_ = cljs.core.logic.fd.singleton_dom_QMARK_.call(null,dv);if(typeof cljs.core.logic.fd.t35336 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t35336 = (function (v,meta35334,u,_BANG__EQ_c,s,du,dv,sv_QMARK_,su_QMARK_,this$,meta35337){
this.v = v;
this.meta35334 = meta35334;
this.u = u;
this._BANG__EQ_c = _BANG__EQ_c;
this.s = s;
this.du = du;
this.dv = dv;
this.sv_QMARK_ = sv_QMARK_;
this.su_QMARK_ = su_QMARK_;
this.this$ = this$;
this.meta35337 = meta35337;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.fd.t35336.cljs$lang$type = true;
cljs.core.logic.fd.t35336.cljs$lang$ctorStr = "cljs.core.logic.fd/t35336";
cljs.core.logic.fd.t35336.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.logic.fd/t35336");
});
cljs.core.logic.fd.t35336.prototype.cljs$core$logic$protocols$IRunnable$ = true;
cljs.core.logic.fd.t35336.prototype.cljs$core$logic$protocols$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var and__5145__auto__ = self__.du;if(cljs.core.truth_(and__5145__auto__))
{var and__5145__auto____$1 = self__.dv;if(cljs.core.truth_(and__5145__auto____$1))
{var or__5157__auto__ = self__.su_QMARK_;if(cljs.core.truth_(or__5157__auto__))
{return or__5157__auto__;
} else
{return self__.sv_QMARK_;
}
} else
{return and__5145__auto____$1;
}
} else
{return and__5145__auto__;
}
});
cljs.core.logic.fd.t35336.prototype.cljs$core$logic$protocols$IEntailed$ = true;
cljs.core.logic.fd.t35336.prototype.cljs$core$logic$protocols$IEntailed$_entailed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var and__5145__auto__ = self__.du;if(cljs.core.truth_(and__5145__auto__))
{var and__5145__auto____$1 = self__.dv;if(cljs.core.truth_(and__5145__auto____$1))
{return cljs.core.logic.fd._disjoint_QMARK_.call(null,self__.du,self__.dv);
} else
{return and__5145__auto____$1;
}
} else
{return and__5145__auto__;
}
});
cljs.core.logic.fd.t35336.prototype.call = (function (self__,s__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;if(cljs.core.truth_((function (){var and__5145__auto__ = self__.su_QMARK_;if(cljs.core.truth_(and__5145__auto__))
{var and__5145__auto____$1 = self__.sv_QMARK_;if(cljs.core.truth_(and__5145__auto____$1))
{return cljs.core._EQ_.call(null,self__.du,self__.dv);
} else
{return and__5145__auto____$1;
}
} else
{return and__5145__auto__;
}
})()))
{return null;
} else
{if(cljs.core.truth_(cljs.core.logic.fd._disjoint_QMARK_.call(null,self__.du,self__.dv)))
{return s__$2;
} else
{if(cljs.core.truth_(self__.su_QMARK_))
{var temp__4098__auto__ = cljs.core.logic.fd._difference.call(null,self__.dv,self__.du);if(cljs.core.truth_(temp__4098__auto__))
{var vdiff = temp__4098__auto__;return cljs.core.logic.fd.process_dom.call(null,self__.v,vdiff,self__.dv).call(null,s__$2);
} else
{return null;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var temp__4098__auto__ = cljs.core.logic.fd._difference.call(null,self__.du,self__.dv);if(cljs.core.truth_(temp__4098__auto__))
{var udiff = temp__4098__auto__;return cljs.core.logic.fd.process_dom.call(null,self__.u,udiff,self__.du).call(null,s__$2);
} else
{return null;
}
} else
{return null;
}
}
}
}
});
cljs.core.logic.fd.t35336.prototype.apply = (function (self__,args35339){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args35339)));
});
cljs.core.logic.fd.t35336.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
var _ = this;if(cljs.core.truth_((function (){var and__5145__auto__ = self__.su_QMARK_;if(cljs.core.truth_(and__5145__auto__))
{var and__5145__auto____$1 = self__.sv_QMARK_;if(cljs.core.truth_(and__5145__auto____$1))
{return cljs.core._EQ_.call(null,self__.du,self__.dv);
} else
{return and__5145__auto____$1;
}
} else
{return and__5145__auto__;
}
})()))
{return null;
} else
{if(cljs.core.truth_(cljs.core.logic.fd._disjoint_QMARK_.call(null,self__.du,self__.dv)))
{return s__$2;
} else
{if(cljs.core.truth_(self__.su_QMARK_))
{var temp__4098__auto__ = cljs.core.logic.fd._difference.call(null,self__.dv,self__.du);if(cljs.core.truth_(temp__4098__auto__))
{var vdiff = temp__4098__auto__;return cljs.core.logic.fd.process_dom.call(null,self__.v,vdiff,self__.dv).call(null,s__$2);
} else
{return null;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var temp__4098__auto__ = cljs.core.logic.fd._difference.call(null,self__.du,self__.dv);if(cljs.core.truth_(temp__4098__auto__))
{var udiff = temp__4098__auto__;return cljs.core.logic.fd.process_dom.call(null,self__.u,udiff,self__.du).call(null,s__$2);
} else
{return null;
}
} else
{return null;
}
}
}
}
});
cljs.core.logic.fd.t35336.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35338){var self__ = this;
var _35338__$1 = this;return self__.meta35337;
});
cljs.core.logic.fd.t35336.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35338,meta35337__$1){var self__ = this;
var _35338__$1 = this;return (new cljs.core.logic.fd.t35336(self__.v,self__.meta35334,self__.u,self__._BANG__EQ_c,self__.s,self__.du,self__.dv,self__.sv_QMARK_,self__.su_QMARK_,self__.this$,meta35337__$1));
});
cljs.core.logic.fd.__GT_t35336 = (function __GT_t35336(v__$2,meta35334__$1,u__$2,_BANG__EQ_c__$2,s__$1,du__$1,dv__$1,sv_QMARK___$1,su_QMARK___$1,this$__$2,meta35337){return (new cljs.core.logic.fd.t35336(v__$2,meta35334__$1,u__$2,_BANG__EQ_c__$2,s__$1,du__$1,dv__$1,sv_QMARK___$1,su_QMARK___$1,this$__$2,meta35337));
});
}
return (new cljs.core.logic.fd.t35336(self__.v,self__.meta35334,self__.u,self__._BANG__EQ_c,s,du,dv,sv_QMARK_,su_QMARK_,this$__$1,null));
});
cljs.core.logic.fd.t35333.prototype.cljs$core$logic$protocols$IEnforceableConstraint$ = true;
cljs.core.logic.fd.t35333.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35335){var self__ = this;
var _35335__$1 = this;return self__.meta35334;
});
cljs.core.logic.fd.t35333.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35335,meta35334__$1){var self__ = this;
var _35335__$1 = this;return (new cljs.core.logic.fd.t35333(self__.v,self__.u,self__._BANG__EQ_c,meta35334__$1));
});
cljs.core.logic.fd.__GT_t35333 = (function __GT_t35333(v__$1,u__$1,_BANG__EQ_c__$1,meta35334){return (new cljs.core.logic.fd.t35333(v__$1,u__$1,_BANG__EQ_c__$1,meta35334));
});
}
return (new cljs.core.logic.fd.t35333(v,u,_BANG__EQ_c,null));
});
/**
* A finite domain constraint. u and v must not be equal. u and v
* must eventually be given domains if vars.
*/
cljs.core.logic.fd._BANG__EQ_ = (function _BANG__EQ_(u,v){return cljs.core.logic.cgoal.call(null,cljs.core.logic.fd._BANG__EQ_c.call(null,u,v));
});
cljs.core.logic.fd._LT__EQ_c = (function _LT__EQ_c(u,v){if(typeof cljs.core.logic.fd.t35347 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t35347 = (function (v,u,_LT__EQ_c,meta35348){
this.v = v;
this.u = u;
this._LT__EQ_c = _LT__EQ_c;
this.meta35348 = meta35348;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.fd.t35347.cljs$lang$type = true;
cljs.core.logic.fd.t35347.cljs$lang$ctorStr = "cljs.core.logic.fd/t35347";
cljs.core.logic.fd.t35347.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.logic.fd/t35347");
});
cljs.core.logic.fd.t35347.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$ = true;
cljs.core.logic.fd.t35347.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.core.logic","fd","cljs.core.logic/fd",3673845947),null,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440),null], null), null);
});
cljs.core.logic.fd.t35347.prototype.cljs$core$logic$protocols$IConstraintOp$ = true;
cljs.core.logic.fd.t35347.prototype.cljs$core$logic$protocols$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic.fd","<=","cljs.core.logic.fd/<=",1528485515,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,750),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,750),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,39)))));
});
cljs.core.logic.fd.t35347.prototype.cljs$core$logic$protocols$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.u,self__.v], null);
});
cljs.core.logic.fd.t35347.prototype.cljs$core$logic$protocols$IConstraintStep$ = true;
cljs.core.logic.fd.t35347.prototype.cljs$core$logic$protocols$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;var du = cljs.core.logic.get_dom_fd.call(null,s,self__.u);var dv = cljs.core.logic.get_dom_fd.call(null,s,self__.v);if(typeof cljs.core.logic.fd.t35350 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t35350 = (function (dv,du,s,this$,meta35348,v,u,_LT__EQ_c,meta35351){
this.dv = dv;
this.du = du;
this.s = s;
this.this$ = this$;
this.meta35348 = meta35348;
this.v = v;
this.u = u;
this._LT__EQ_c = _LT__EQ_c;
this.meta35351 = meta35351;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.fd.t35350.cljs$lang$type = true;
cljs.core.logic.fd.t35350.cljs$lang$ctorStr = "cljs.core.logic.fd/t35350";
cljs.core.logic.fd.t35350.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.logic.fd/t35350");
});
cljs.core.logic.fd.t35350.prototype.cljs$core$logic$protocols$IRunnable$ = true;
cljs.core.logic.fd.t35350.prototype.cljs$core$logic$protocols$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var and__5145__auto__ = self__.du;if(cljs.core.truth_(and__5145__auto__))
{return self__.dv;
} else
{return and__5145__auto__;
}
});
cljs.core.logic.fd.t35350.prototype.cljs$core$logic$protocols$IEntailed$ = true;
cljs.core.logic.fd.t35350.prototype.cljs$core$logic$protocols$IEntailed$_entailed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var and__5145__auto__ = self__.du;if(cljs.core.truth_(and__5145__auto__))
{var and__5145__auto____$1 = self__.dv;if(cljs.core.truth_(and__5145__auto____$1))
{return cljs.core.logic.fd.interval__LT__EQ_.call(null,self__.du,self__.dv);
} else
{return and__5145__auto____$1;
}
} else
{return and__5145__auto__;
}
});
cljs.core.logic.fd.t35350.prototype.call = (function (self__,s__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;var umin = cljs.core.logic.fd._lb.call(null,self__.du);var vmax = cljs.core.logic.fd._ub.call(null,self__.dv);return cljs.core.logic.composeg.call(null,cljs.core.logic.fd.process_dom.call(null,self__.u,cljs.core.logic.fd._keep_before.call(null,self__.du,(vmax + 1)),self__.du),cljs.core.logic.fd.process_dom.call(null,self__.v,cljs.core.logic.fd._drop_before.call(null,self__.dv,umin),self__.dv)).call(null,s__$2);
});
cljs.core.logic.fd.t35350.prototype.apply = (function (self__,args35353){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args35353)));
});
cljs.core.logic.fd.t35350.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
var _ = this;var umin = cljs.core.logic.fd._lb.call(null,self__.du);var vmax = cljs.core.logic.fd._ub.call(null,self__.dv);return cljs.core.logic.composeg.call(null,cljs.core.logic.fd.process_dom.call(null,self__.u,cljs.core.logic.fd._keep_before.call(null,self__.du,(vmax + 1)),self__.du),cljs.core.logic.fd.process_dom.call(null,self__.v,cljs.core.logic.fd._drop_before.call(null,self__.dv,umin),self__.dv)).call(null,s__$2);
});
cljs.core.logic.fd.t35350.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35352){var self__ = this;
var _35352__$1 = this;return self__.meta35351;
});
cljs.core.logic.fd.t35350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35352,meta35351__$1){var self__ = this;
var _35352__$1 = this;return (new cljs.core.logic.fd.t35350(self__.dv,self__.du,self__.s,self__.this$,self__.meta35348,self__.v,self__.u,self__._LT__EQ_c,meta35351__$1));
});
cljs.core.logic.fd.__GT_t35350 = (function __GT_t35350(dv__$1,du__$1,s__$1,this$__$2,meta35348__$1,v__$2,u__$2,_LT__EQ_c__$2,meta35351){return (new cljs.core.logic.fd.t35350(dv__$1,du__$1,s__$1,this$__$2,meta35348__$1,v__$2,u__$2,_LT__EQ_c__$2,meta35351));
});
}
return (new cljs.core.logic.fd.t35350(dv,du,s,this$__$1,self__.meta35348,self__.v,self__.u,self__._LT__EQ_c,null));
});
cljs.core.logic.fd.t35347.prototype.cljs$core$logic$protocols$IEnforceableConstraint$ = true;
cljs.core.logic.fd.t35347.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35349){var self__ = this;
var _35349__$1 = this;return self__.meta35348;
});
cljs.core.logic.fd.t35347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35349,meta35348__$1){var self__ = this;
var _35349__$1 = this;return (new cljs.core.logic.fd.t35347(self__.v,self__.u,self__._LT__EQ_c,meta35348__$1));
});
cljs.core.logic.fd.__GT_t35347 = (function __GT_t35347(v__$1,u__$1,_LT__EQ_c__$1,meta35348){return (new cljs.core.logic.fd.t35347(v__$1,u__$1,_LT__EQ_c__$1,meta35348));
});
}
return (new cljs.core.logic.fd.t35347(v,u,_LT__EQ_c,null));
});
/**
* A finite domain constraint. u must be less than or equal to v.
* u and v must eventually be given domains if vars.
*/
cljs.core.logic.fd._LT__EQ_ = (function _LT__EQ_(u,v){return cljs.core.logic.cgoal.call(null,cljs.core.logic.fd._LT__EQ_c.call(null,u,v));
});
/**
* A finite domain constraint. u must be less than v. u and v
* must eventually be given domains if vars.
*/
cljs.core.logic.fd._LT_ = (function _LT_(u,v){return (function (a__9776__auto__){return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__9776__auto__,cljs.core.logic.fd._LT__EQ_.call(null,u,v)),cljs.core.logic.fd._BANG__EQ_.call(null,u,v));
});
});
/**
* A finite domain constraint. u must be greater than v. u and v
* must eventually be given domains if vars.
*/
cljs.core.logic.fd._GT_ = (function _GT_(u,v){return cljs.core.logic.fd._LT_.call(null,v,u);
});
/**
* A finite domain constraint. u must be greater than or equal to v.
* u and v must eventually be given domains if vars.
*/
cljs.core.logic.fd._GT__EQ_ = (function _GT__EQ_(u,v){return cljs.core.logic.fd._LT__EQ_.call(null,v,u);
});
cljs.core.logic.fd._PLUS_c = (function _PLUS_c(u,v,w){if(typeof cljs.core.logic.fd.t35367 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t35367 = (function (w,v,u,_PLUS_c,meta35368){
this.w = w;
this.v = v;
this.u = u;
this._PLUS_c = _PLUS_c;
this.meta35368 = meta35368;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.fd.t35367.cljs$lang$type = true;
cljs.core.logic.fd.t35367.cljs$lang$ctorStr = "cljs.core.logic.fd/t35367";
cljs.core.logic.fd.t35367.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.logic.fd/t35367");
});
cljs.core.logic.fd.t35367.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$ = true;
cljs.core.logic.fd.t35367.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.core.logic","fd","cljs.core.logic/fd",3673845947),null,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440),null], null), null);
});
cljs.core.logic.fd.t35367.prototype.cljs$core$logic$protocols$IConstraintOp$ = true;
cljs.core.logic.fd.t35367.prototype.cljs$core$logic$protocols$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic.fd","+","cljs.core.logic.fd/+",1528484149,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,837),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,837),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,38)))));
});
cljs.core.logic.fd.t35367.prototype.cljs$core$logic$protocols$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.u,self__.v,self__.w], null);
});
cljs.core.logic.fd.t35367.prototype.cljs$core$logic$protocols$IConstraintStep$ = true;
cljs.core.logic.fd.t35367.prototype.cljs$core$logic$protocols$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;var du = cljs.core.logic.get_dom_fd.call(null,s,self__.u);var dv = cljs.core.logic.get_dom_fd.call(null,s,self__.v);var dw = cljs.core.logic.get_dom_fd.call(null,s,self__.w);if(typeof cljs.core.logic.fd.t35370 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t35370 = (function (v,w,u,s,_PLUS_c,meta35368,du,dw,dv,this$,meta35371){
this.v = v;
this.w = w;
this.u = u;
this.s = s;
this._PLUS_c = _PLUS_c;
this.meta35368 = meta35368;
this.du = du;
this.dw = dw;
this.dv = dv;
this.this$ = this$;
this.meta35371 = meta35371;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.fd.t35370.cljs$lang$type = true;
cljs.core.logic.fd.t35370.cljs$lang$ctorStr = "cljs.core.logic.fd/t35370";
cljs.core.logic.fd.t35370.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.logic.fd/t35370");
});
cljs.core.logic.fd.t35370.prototype.cljs$core$logic$protocols$IRunnable$ = true;
cljs.core.logic.fd.t35370.prototype.cljs$core$logic$protocols$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.du))
{var or__5157__auto__ = self__.dv;if(cljs.core.truth_(or__5157__auto__))
{return or__5157__auto__;
} else
{return self__.dw;
}
} else
{if(cljs.core.truth_(self__.dv))
{var or__5157__auto__ = self__.du;if(cljs.core.truth_(or__5157__auto__))
{return or__5157__auto__;
} else
{return self__.dw;
}
} else
{if(cljs.core.truth_(self__.dw))
{var or__5157__auto__ = self__.du;if(cljs.core.truth_(or__5157__auto__))
{return or__5157__auto__;
} else
{return self__.dv;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return false;
} else
{return null;
}
}
}
}
});
cljs.core.logic.fd.t35370.prototype.cljs$core$logic$protocols$IEntailed$ = true;
cljs.core.logic.fd.t35370.prototype.cljs$core$logic$protocols$IEntailed$_entailed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (cljs.core.logic.fd.singleton_dom_QMARK_.call(null,self__.du)) && (cljs.core.logic.fd.singleton_dom_QMARK_.call(null,self__.dv)) && (cljs.core.logic.fd.singleton_dom_QMARK_.call(null,self__.dw)) && (cljs.core._EQ_.call(null,(self__.du + self__.dv),self__.dw));
});
cljs.core.logic.fd.t35370.prototype.call = (function (self__,s__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;var vec__35374 = (cljs.core.truth_(self__.dw)?cljs.core.logic.fd.bounds.call(null,self__.dw):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.logic.fd._lb.call(null,self__.du) + cljs.core.logic.fd._lb.call(null,self__.dv)),(cljs.core.logic.fd._ub.call(null,self__.du) + cljs.core.logic.fd._ub.call(null,self__.dv))], null));var wmin = cljs.core.nth.call(null,vec__35374,0,null);var wmax = cljs.core.nth.call(null,vec__35374,1,null);var vec__35375 = (cljs.core.truth_(self__.du)?cljs.core.logic.fd.bounds.call(null,self__.du):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.logic.fd._lb.call(null,self__.dw) - cljs.core.logic.fd._ub.call(null,self__.dv)),(cljs.core.logic.fd._ub.call(null,self__.dw) - cljs.core.logic.fd._lb.call(null,self__.dv))], null));var umin = cljs.core.nth.call(null,vec__35375,0,null);var umax = cljs.core.nth.call(null,vec__35375,1,null);var vec__35376 = (cljs.core.truth_(self__.dv)?cljs.core.logic.fd.bounds.call(null,self__.dv):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.logic.fd._lb.call(null,self__.dw) - cljs.core.logic.fd._ub.call(null,self__.du)),(cljs.core.logic.fd._ub.call(null,self__.dw) - cljs.core.logic.fd._lb.call(null,self__.du))], null));var vmin = cljs.core.nth.call(null,vec__35376,0,null);var vmax = cljs.core.nth.call(null,vec__35376,1,null);var wi = cljs.core.logic.fd.interval.call(null,(umin + vmin),(umax + vmax));var ui = cljs.core.logic.fd.interval.call(null,(wmin - vmax),(wmax - vmin));var vi = cljs.core.logic.fd.interval.call(null,(wmin - umax),(wmax - umin));var temp__4098__auto__ = (cljs.core.truth_((function (){var and__5145__auto__ = wi;if(cljs.core.truth_(and__5145__auto__))
{return self__.dw;
} else
{return and__5145__auto__;
}
})())?cljs.core.logic.fd._intersection.call(null,wi,self__.dw):wi);if(cljs.core.truth_(temp__4098__auto__))
{var wi__$1 = temp__4098__auto__;var temp__4098__auto____$1 = (cljs.core.truth_((function (){var and__5145__auto__ = ui;if(cljs.core.truth_(and__5145__auto__))
{return self__.du;
} else
{return and__5145__auto__;
}
})())?cljs.core.logic.fd._intersection.call(null,ui,self__.du):ui);if(cljs.core.truth_(temp__4098__auto____$1))
{var ui__$1 = temp__4098__auto____$1;var temp__4098__auto____$2 = (cljs.core.truth_((function (){var and__5145__auto__ = vi;if(cljs.core.truth_(and__5145__auto__))
{return self__.dv;
} else
{return and__5145__auto__;
}
})())?cljs.core.logic.fd._intersection.call(null,vi,self__.dv):vi);if(cljs.core.truth_(temp__4098__auto____$2))
{var vi__$1 = temp__4098__auto____$2;if((!(cljs.core.every_QMARK_.call(null,cljs.core.logic.fd.singleton_dom_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [wi__$1,ui__$1,vi__$1], null)))) || (cljs.core._EQ_.call(null,(ui__$1 + vi__$1),wi__$1)))
{return cljs.core.logic.composeg.call(null,cljs.core.logic.fd.process_dom.call(null,self__.w,wi__$1,self__.dw),cljs.core.logic.composeg.call(null,cljs.core.logic.fd.process_dom.call(null,self__.u,ui__$1,self__.du),cljs.core.logic.fd.process_dom.call(null,self__.v,vi__$1,self__.dv))).call(null,s__$2);
} else
{return null;
}
} else
{return null;
}
} else
{return null;
}
} else
{return null;
}
});
cljs.core.logic.fd.t35370.prototype.apply = (function (self__,args35373){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args35373)));
});
cljs.core.logic.fd.t35370.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
var _ = this;var vec__35377 = (cljs.core.truth_(self__.dw)?cljs.core.logic.fd.bounds.call(null,self__.dw):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.logic.fd._lb.call(null,self__.du) + cljs.core.logic.fd._lb.call(null,self__.dv)),(cljs.core.logic.fd._ub.call(null,self__.du) + cljs.core.logic.fd._ub.call(null,self__.dv))], null));var wmin = cljs.core.nth.call(null,vec__35377,0,null);var wmax = cljs.core.nth.call(null,vec__35377,1,null);var vec__35378 = (cljs.core.truth_(self__.du)?cljs.core.logic.fd.bounds.call(null,self__.du):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.logic.fd._lb.call(null,self__.dw) - cljs.core.logic.fd._ub.call(null,self__.dv)),(cljs.core.logic.fd._ub.call(null,self__.dw) - cljs.core.logic.fd._lb.call(null,self__.dv))], null));var umin = cljs.core.nth.call(null,vec__35378,0,null);var umax = cljs.core.nth.call(null,vec__35378,1,null);var vec__35379 = (cljs.core.truth_(self__.dv)?cljs.core.logic.fd.bounds.call(null,self__.dv):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.logic.fd._lb.call(null,self__.dw) - cljs.core.logic.fd._ub.call(null,self__.du)),(cljs.core.logic.fd._ub.call(null,self__.dw) - cljs.core.logic.fd._lb.call(null,self__.du))], null));var vmin = cljs.core.nth.call(null,vec__35379,0,null);var vmax = cljs.core.nth.call(null,vec__35379,1,null);var wi = cljs.core.logic.fd.interval.call(null,(umin + vmin),(umax + vmax));var ui = cljs.core.logic.fd.interval.call(null,(wmin - vmax),(wmax - vmin));var vi = cljs.core.logic.fd.interval.call(null,(wmin - umax),(wmax - umin));var temp__4098__auto__ = (cljs.core.truth_((function (){var and__5145__auto__ = wi;if(cljs.core.truth_(and__5145__auto__))
{return self__.dw;
} else
{return and__5145__auto__;
}
})())?cljs.core.logic.fd._intersection.call(null,wi,self__.dw):wi);if(cljs.core.truth_(temp__4098__auto__))
{var wi__$1 = temp__4098__auto__;var temp__4098__auto____$1 = (cljs.core.truth_((function (){var and__5145__auto__ = ui;if(cljs.core.truth_(and__5145__auto__))
{return self__.du;
} else
{return and__5145__auto__;
}
})())?cljs.core.logic.fd._intersection.call(null,ui,self__.du):ui);if(cljs.core.truth_(temp__4098__auto____$1))
{var ui__$1 = temp__4098__auto____$1;var temp__4098__auto____$2 = (cljs.core.truth_((function (){var and__5145__auto__ = vi;if(cljs.core.truth_(and__5145__auto__))
{return self__.dv;
} else
{return and__5145__auto__;
}
})())?cljs.core.logic.fd._intersection.call(null,vi,self__.dv):vi);if(cljs.core.truth_(temp__4098__auto____$2))
{var vi__$1 = temp__4098__auto____$2;if((!(cljs.core.every_QMARK_.call(null,cljs.core.logic.fd.singleton_dom_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [wi__$1,ui__$1,vi__$1], null)))) || (cljs.core._EQ_.call(null,(ui__$1 + vi__$1),wi__$1)))
{return cljs.core.logic.composeg.call(null,cljs.core.logic.fd.process_dom.call(null,self__.w,wi__$1,self__.dw),cljs.core.logic.composeg.call(null,cljs.core.logic.fd.process_dom.call(null,self__.u,ui__$1,self__.du),cljs.core.logic.fd.process_dom.call(null,self__.v,vi__$1,self__.dv))).call(null,s__$2);
} else
{return null;
}
} else
{return null;
}
} else
{return null;
}
} else
{return null;
}
});
cljs.core.logic.fd.t35370.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35372){var self__ = this;
var _35372__$1 = this;return self__.meta35371;
});
cljs.core.logic.fd.t35370.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35372,meta35371__$1){var self__ = this;
var _35372__$1 = this;return (new cljs.core.logic.fd.t35370(self__.v,self__.w,self__.u,self__.s,self__._PLUS_c,self__.meta35368,self__.du,self__.dw,self__.dv,self__.this$,meta35371__$1));
});
cljs.core.logic.fd.__GT_t35370 = (function __GT_t35370(v__$2,w__$2,u__$2,s__$1,_PLUS_c__$2,meta35368__$1,du__$1,dw__$1,dv__$1,this$__$2,meta35371){return (new cljs.core.logic.fd.t35370(v__$2,w__$2,u__$2,s__$1,_PLUS_c__$2,meta35368__$1,du__$1,dw__$1,dv__$1,this$__$2,meta35371));
});
}
return (new cljs.core.logic.fd.t35370(self__.v,self__.w,self__.u,s,self__._PLUS_c,self__.meta35368,du,dw,dv,this$__$1,null));
});
cljs.core.logic.fd.t35367.prototype.cljs$core$logic$protocols$IEnforceableConstraint$ = true;
cljs.core.logic.fd.t35367.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35369){var self__ = this;
var _35369__$1 = this;return self__.meta35368;
});
cljs.core.logic.fd.t35367.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35369,meta35368__$1){var self__ = this;
var _35369__$1 = this;return (new cljs.core.logic.fd.t35367(self__.w,self__.v,self__.u,self__._PLUS_c,meta35368__$1));
});
cljs.core.logic.fd.__GT_t35367 = (function __GT_t35367(w__$1,v__$1,u__$1,_PLUS_c__$1,meta35368){return (new cljs.core.logic.fd.t35367(w__$1,v__$1,u__$1,_PLUS_c__$1,meta35368));
});
}
return (new cljs.core.logic.fd.t35367(w,v,u,_PLUS_c,null));
});
/**
* A finite domain constraint for addition and subtraction.
* u, v & w must eventually be given domains if vars.
*/
cljs.core.logic.fd._PLUS_ = (function _PLUS_(u,v,w){return cljs.core.logic.cgoal.call(null,cljs.core.logic.fd._PLUS_c.call(null,u,v,w));
});
cljs.core.logic.fd._ = (function _(u,v,w){return cljs.core.logic.fd._PLUS_.call(null,v,w,u);
});
cljs.core.logic.fd._STAR_c = (function _STAR_c(u,v,w){var safe_div = (function safe_div(n,c,a,t){if((n === 0))
{return c;
} else
{var q = cljs.core.quot.call(null,a,n);var G__35396 = t;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"upper","upper",1125403668),G__35396))
{return q;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"lower","lower",1117068915),G__35396))
{if((cljs.core.rem.call(null,a,n) > 0))
{return (q + 1);
} else
{return q;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(t)].join('')));
} else
{return null;
}
}
}
}
});
if(typeof cljs.core.logic.fd.t35397 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t35397 = (function (safe_div,w,v,u,_STAR_c,meta35398){
this.safe_div = safe_div;
this.w = w;
this.v = v;
this.u = u;
this._STAR_c = _STAR_c;
this.meta35398 = meta35398;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.fd.t35397.cljs$lang$type = true;
cljs.core.logic.fd.t35397.cljs$lang$ctorStr = "cljs.core.logic.fd/t35397";
cljs.core.logic.fd.t35397.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.logic.fd/t35397");
});
cljs.core.logic.fd.t35397.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$ = true;
cljs.core.logic.fd.t35397.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.core.logic","fd","cljs.core.logic/fd",3673845947),null,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440),null], null), null);
});
cljs.core.logic.fd.t35397.prototype.cljs$core$logic$protocols$IConstraintOp$ = true;
cljs.core.logic.fd.t35397.prototype.cljs$core$logic$protocols$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic.fd","*","cljs.core.logic.fd/*",1528484146,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,921),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,20),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,921),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,40)))));
});
cljs.core.logic.fd.t35397.prototype.cljs$core$logic$protocols$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.u,self__.v,self__.w], null);
});
cljs.core.logic.fd.t35397.prototype.cljs$core$logic$protocols$IConstraintStep$ = true;
cljs.core.logic.fd.t35397.prototype.cljs$core$logic$protocols$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;var du = cljs.core.logic.get_dom_fd.call(null,s,self__.u);var dv = cljs.core.logic.get_dom_fd.call(null,s,self__.v);var dw = cljs.core.logic.get_dom_fd.call(null,s,self__.w);if(typeof cljs.core.logic.fd.t35400 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t35400 = (function (v,w,u,s,du,_STAR_c,dw,dv,meta35398,safe_div,this$,meta35401){
this.v = v;
this.w = w;
this.u = u;
this.s = s;
this.du = du;
this._STAR_c = _STAR_c;
this.dw = dw;
this.dv = dv;
this.meta35398 = meta35398;
this.safe_div = safe_div;
this.this$ = this$;
this.meta35401 = meta35401;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.fd.t35400.cljs$lang$type = true;
cljs.core.logic.fd.t35400.cljs$lang$ctorStr = "cljs.core.logic.fd/t35400";
cljs.core.logic.fd.t35400.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.logic.fd/t35400");
});
cljs.core.logic.fd.t35400.prototype.cljs$core$logic$protocols$IRunnable$ = true;
cljs.core.logic.fd.t35400.prototype.cljs$core$logic$protocols$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.du))
{var or__5157__auto__ = self__.dv;if(cljs.core.truth_(or__5157__auto__))
{return or__5157__auto__;
} else
{return self__.dw;
}
} else
{if(cljs.core.truth_(self__.dv))
{var or__5157__auto__ = self__.du;if(cljs.core.truth_(or__5157__auto__))
{return or__5157__auto__;
} else
{return self__.dw;
}
} else
{if(cljs.core.truth_(self__.dw))
{var or__5157__auto__ = self__.du;if(cljs.core.truth_(or__5157__auto__))
{return or__5157__auto__;
} else
{return self__.dv;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return false;
} else
{return null;
}
}
}
}
});
cljs.core.logic.fd.t35400.prototype.cljs$core$logic$protocols$IEntailed$ = true;
cljs.core.logic.fd.t35400.prototype.cljs$core$logic$protocols$IEntailed$_entailed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (cljs.core.logic.fd.singleton_dom_QMARK_.call(null,self__.du)) && (cljs.core.logic.fd.singleton_dom_QMARK_.call(null,self__.dv)) && (cljs.core.logic.fd.singleton_dom_QMARK_.call(null,self__.dw)) && (cljs.core._EQ_.call(null,(self__.du * self__.dv),self__.dw));
});
cljs.core.logic.fd.t35400.prototype.call = (function (self__,s__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;var vec__35404 = (cljs.core.truth_(self__.dw)?cljs.core.logic.fd.bounds.call(null,self__.dw):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.logic.fd._lb.call(null,self__.du) * cljs.core.logic.fd._lb.call(null,self__.dv)),(cljs.core.logic.fd._ub.call(null,self__.du) * cljs.core.logic.fd._ub.call(null,self__.dv))], null));var wmin = cljs.core.nth.call(null,vec__35404,0,null);var wmax = cljs.core.nth.call(null,vec__35404,1,null);var vec__35405 = (cljs.core.truth_(self__.du)?cljs.core.logic.fd.bounds.call(null,self__.du):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.safe_div.call(null,cljs.core.logic.fd._ub.call(null,self__.dv),cljs.core.logic.fd._lb.call(null,self__.dw),cljs.core.logic.fd._lb.call(null,self__.dw),new cljs.core.Keyword(null,"lower","lower",1117068915)),self__.safe_div.call(null,cljs.core.logic.fd._lb.call(null,self__.dv),cljs.core.logic.fd._lb.call(null,self__.dw),cljs.core.logic.fd._ub.call(null,self__.dw),new cljs.core.Keyword(null,"upper","upper",1125403668))], null));var umin = cljs.core.nth.call(null,vec__35405,0,null);var umax = cljs.core.nth.call(null,vec__35405,1,null);var vec__35406 = (cljs.core.truth_(self__.dv)?cljs.core.logic.fd.bounds.call(null,self__.dv):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.safe_div.call(null,cljs.core.logic.fd._ub.call(null,self__.du),cljs.core.logic.fd._lb.call(null,self__.dw),cljs.core.logic.fd._lb.call(null,self__.dw),new cljs.core.Keyword(null,"lower","lower",1117068915)),self__.safe_div.call(null,cljs.core.logic.fd._lb.call(null,self__.du),cljs.core.logic.fd._lb.call(null,self__.dw),cljs.core.logic.fd._ub.call(null,self__.dw),new cljs.core.Keyword(null,"upper","upper",1125403668))], null));var vmin = cljs.core.nth.call(null,vec__35406,0,null);var vmax = cljs.core.nth.call(null,vec__35406,1,null);var wi = cljs.core.logic.fd.interval.call(null,(umin * vmin),(umax * vmax));var ui = cljs.core.logic.fd.interval.call(null,self__.safe_div.call(null,vmax,umin,wmin,new cljs.core.Keyword(null,"lower","lower",1117068915)),self__.safe_div.call(null,vmin,umax,wmax,new cljs.core.Keyword(null,"upper","upper",1125403668)));var vi = cljs.core.logic.fd.interval.call(null,self__.safe_div.call(null,umax,vmin,wmin,new cljs.core.Keyword(null,"lower","lower",1117068915)),self__.safe_div.call(null,umin,vmax,wmax,new cljs.core.Keyword(null,"upper","upper",1125403668)));var temp__4098__auto__ = (cljs.core.truth_((function (){var and__5145__auto__ = wi;if(cljs.core.truth_(and__5145__auto__))
{return self__.dw;
} else
{return and__5145__auto__;
}
})())?cljs.core.logic.fd._intersection.call(null,wi,self__.dw):wi);if(cljs.core.truth_(temp__4098__auto__))
{var wi__$1 = temp__4098__auto__;var temp__4098__auto____$1 = (cljs.core.truth_((function (){var and__5145__auto__ = ui;if(cljs.core.truth_(and__5145__auto__))
{return self__.du;
} else
{return and__5145__auto__;
}
})())?cljs.core.logic.fd._intersection.call(null,ui,self__.du):ui);if(cljs.core.truth_(temp__4098__auto____$1))
{var ui__$1 = temp__4098__auto____$1;var temp__4098__auto____$2 = (cljs.core.truth_((function (){var and__5145__auto__ = vi;if(cljs.core.truth_(and__5145__auto__))
{return self__.dv;
} else
{return and__5145__auto__;
}
})())?cljs.core.logic.fd._intersection.call(null,vi,self__.dv):vi);if(cljs.core.truth_(temp__4098__auto____$2))
{var vi__$1 = temp__4098__auto____$2;if((!(cljs.core.every_QMARK_.call(null,cljs.core.logic.fd.singleton_dom_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [wi__$1,ui__$1,vi__$1], null)))) || (cljs.core._EQ_.call(null,(ui__$1 * vi__$1),wi__$1)))
{return cljs.core.logic.composeg.call(null,cljs.core.logic.fd.process_dom.call(null,self__.w,wi__$1,self__.dw),cljs.core.logic.composeg.call(null,cljs.core.logic.fd.process_dom.call(null,self__.u,ui__$1,self__.du),cljs.core.logic.fd.process_dom.call(null,self__.v,vi__$1,self__.dv))).call(null,s__$2);
} else
{return null;
}
} else
{return null;
}
} else
{return null;
}
} else
{return null;
}
});
cljs.core.logic.fd.t35400.prototype.apply = (function (self__,args35403){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args35403)));
});
cljs.core.logic.fd.t35400.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
var _ = this;var vec__35407 = (cljs.core.truth_(self__.dw)?cljs.core.logic.fd.bounds.call(null,self__.dw):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.logic.fd._lb.call(null,self__.du) * cljs.core.logic.fd._lb.call(null,self__.dv)),(cljs.core.logic.fd._ub.call(null,self__.du) * cljs.core.logic.fd._ub.call(null,self__.dv))], null));var wmin = cljs.core.nth.call(null,vec__35407,0,null);var wmax = cljs.core.nth.call(null,vec__35407,1,null);var vec__35408 = (cljs.core.truth_(self__.du)?cljs.core.logic.fd.bounds.call(null,self__.du):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.safe_div.call(null,cljs.core.logic.fd._ub.call(null,self__.dv),cljs.core.logic.fd._lb.call(null,self__.dw),cljs.core.logic.fd._lb.call(null,self__.dw),new cljs.core.Keyword(null,"lower","lower",1117068915)),self__.safe_div.call(null,cljs.core.logic.fd._lb.call(null,self__.dv),cljs.core.logic.fd._lb.call(null,self__.dw),cljs.core.logic.fd._ub.call(null,self__.dw),new cljs.core.Keyword(null,"upper","upper",1125403668))], null));var umin = cljs.core.nth.call(null,vec__35408,0,null);var umax = cljs.core.nth.call(null,vec__35408,1,null);var vec__35409 = (cljs.core.truth_(self__.dv)?cljs.core.logic.fd.bounds.call(null,self__.dv):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.safe_div.call(null,cljs.core.logic.fd._ub.call(null,self__.du),cljs.core.logic.fd._lb.call(null,self__.dw),cljs.core.logic.fd._lb.call(null,self__.dw),new cljs.core.Keyword(null,"lower","lower",1117068915)),self__.safe_div.call(null,cljs.core.logic.fd._lb.call(null,self__.du),cljs.core.logic.fd._lb.call(null,self__.dw),cljs.core.logic.fd._ub.call(null,self__.dw),new cljs.core.Keyword(null,"upper","upper",1125403668))], null));var vmin = cljs.core.nth.call(null,vec__35409,0,null);var vmax = cljs.core.nth.call(null,vec__35409,1,null);var wi = cljs.core.logic.fd.interval.call(null,(umin * vmin),(umax * vmax));var ui = cljs.core.logic.fd.interval.call(null,self__.safe_div.call(null,vmax,umin,wmin,new cljs.core.Keyword(null,"lower","lower",1117068915)),self__.safe_div.call(null,vmin,umax,wmax,new cljs.core.Keyword(null,"upper","upper",1125403668)));var vi = cljs.core.logic.fd.interval.call(null,self__.safe_div.call(null,umax,vmin,wmin,new cljs.core.Keyword(null,"lower","lower",1117068915)),self__.safe_div.call(null,umin,vmax,wmax,new cljs.core.Keyword(null,"upper","upper",1125403668)));var temp__4098__auto__ = (cljs.core.truth_((function (){var and__5145__auto__ = wi;if(cljs.core.truth_(and__5145__auto__))
{return self__.dw;
} else
{return and__5145__auto__;
}
})())?cljs.core.logic.fd._intersection.call(null,wi,self__.dw):wi);if(cljs.core.truth_(temp__4098__auto__))
{var wi__$1 = temp__4098__auto__;var temp__4098__auto____$1 = (cljs.core.truth_((function (){var and__5145__auto__ = ui;if(cljs.core.truth_(and__5145__auto__))
{return self__.du;
} else
{return and__5145__auto__;
}
})())?cljs.core.logic.fd._intersection.call(null,ui,self__.du):ui);if(cljs.core.truth_(temp__4098__auto____$1))
{var ui__$1 = temp__4098__auto____$1;var temp__4098__auto____$2 = (cljs.core.truth_((function (){var and__5145__auto__ = vi;if(cljs.core.truth_(and__5145__auto__))
{return self__.dv;
} else
{return and__5145__auto__;
}
})())?cljs.core.logic.fd._intersection.call(null,vi,self__.dv):vi);if(cljs.core.truth_(temp__4098__auto____$2))
{var vi__$1 = temp__4098__auto____$2;if((!(cljs.core.every_QMARK_.call(null,cljs.core.logic.fd.singleton_dom_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [wi__$1,ui__$1,vi__$1], null)))) || (cljs.core._EQ_.call(null,(ui__$1 * vi__$1),wi__$1)))
{return cljs.core.logic.composeg.call(null,cljs.core.logic.fd.process_dom.call(null,self__.w,wi__$1,self__.dw),cljs.core.logic.composeg.call(null,cljs.core.logic.fd.process_dom.call(null,self__.u,ui__$1,self__.du),cljs.core.logic.fd.process_dom.call(null,self__.v,vi__$1,self__.dv))).call(null,s__$2);
} else
{return null;
}
} else
{return null;
}
} else
{return null;
}
} else
{return null;
}
});
cljs.core.logic.fd.t35400.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35402){var self__ = this;
var _35402__$1 = this;return self__.meta35401;
});
cljs.core.logic.fd.t35400.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35402,meta35401__$1){var self__ = this;
var _35402__$1 = this;return (new cljs.core.logic.fd.t35400(self__.v,self__.w,self__.u,self__.s,self__.du,self__._STAR_c,self__.dw,self__.dv,self__.meta35398,self__.safe_div,self__.this$,meta35401__$1));
});
cljs.core.logic.fd.__GT_t35400 = (function __GT_t35400(v__$2,w__$2,u__$2,s__$1,du__$1,_STAR_c__$2,dw__$1,dv__$1,meta35398__$1,safe_div__$2,this$__$2,meta35401){return (new cljs.core.logic.fd.t35400(v__$2,w__$2,u__$2,s__$1,du__$1,_STAR_c__$2,dw__$1,dv__$1,meta35398__$1,safe_div__$2,this$__$2,meta35401));
});
}
return (new cljs.core.logic.fd.t35400(self__.v,self__.w,self__.u,s,du,self__._STAR_c,dw,dv,self__.meta35398,self__.safe_div,this$__$1,null));
});
cljs.core.logic.fd.t35397.prototype.cljs$core$logic$protocols$IEnforceableConstraint$ = true;
cljs.core.logic.fd.t35397.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35399){var self__ = this;
var _35399__$1 = this;return self__.meta35398;
});
cljs.core.logic.fd.t35397.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35399,meta35398__$1){var self__ = this;
var _35399__$1 = this;return (new cljs.core.logic.fd.t35397(self__.safe_div,self__.w,self__.v,self__.u,self__._STAR_c,meta35398__$1));
});
cljs.core.logic.fd.__GT_t35397 = (function __GT_t35397(safe_div__$1,w__$1,v__$1,u__$1,_STAR_c__$1,meta35398){return (new cljs.core.logic.fd.t35397(safe_div__$1,w__$1,v__$1,u__$1,_STAR_c__$1,meta35398));
});
}
return (new cljs.core.logic.fd.t35397(safe_div,w,v,u,_STAR_c,null));
});
/**
* A finite domain constraint for multiplication and
* thus division. u, v & w must be eventually be given
* domains if vars.
*/
cljs.core.logic.fd._STAR_ = (function _STAR_(u,v,w){return cljs.core.logic.cgoal.call(null,cljs.core.logic.fd._STAR_c.call(null,u,v,w));
});
cljs.core.logic.fd.quot = (function quot(u,v,w){return cljs.core.logic.fd._STAR_.call(null,v,w,u);
});
/**
* The real *individual* distinct constraint. x is a var that now is bound to
* a single value. y* were the non-singleton bound vars that existed at the
* construction of the constraint. n* is the set of singleton domain values
* that existed at the construction of the constraint. We use categorize to
* determine the current non-singleton bound vars and singleton vlaues. if x
* is in n* or the new singletons we have failed. If not we simply remove
* the value of x from the remaining non-singleton domains bound to vars.
*/
cljs.core.logic.fd._distinctc = (function _distinctc(x,y_STAR_,n_STAR_){if(typeof cljs.core.logic.fd.t35417 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t35417 = (function (n_STAR_,y_STAR_,x,_distinctc,meta35418){
this.n_STAR_ = n_STAR_;
this.y_STAR_ = y_STAR_;
this.x = x;
this._distinctc = _distinctc;
this.meta35418 = meta35418;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.fd.t35417.cljs$lang$type = true;
cljs.core.logic.fd.t35417.cljs$lang$ctorStr = "cljs.core.logic.fd/t35417";
cljs.core.logic.fd.t35417.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.logic.fd/t35417");
});
cljs.core.logic.fd.t35417.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$ = true;
cljs.core.logic.fd.t35417.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440),null], null), null);
});
cljs.core.logic.fd.t35417.prototype.cljs$core$logic$protocols$IConstraintOp$ = true;
cljs.core.logic.fd.t35417.prototype.cljs$core$logic$protocols$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic.fd","-distinct","cljs.core.logic.fd/-distinct",73212723,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,973),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,973),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,46)))));
});
cljs.core.logic.fd.t35417.prototype.cljs$core$logic$protocols$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.x], null);
});
cljs.core.logic.fd.t35417.prototype.cljs$core$logic$protocols$IConstraintStep$ = true;
cljs.core.logic.fd.t35417.prototype.cljs$core$logic$protocols$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;var x__$2 = cljs.core.logic.protocols.walk.call(null,s,self__.x);if(typeof cljs.core.logic.fd.t35420 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t35420 = (function (s,this$,meta35418,n_STAR_,y_STAR_,x,_distinctc,meta35421){
this.s = s;
this.this$ = this$;
this.meta35418 = meta35418;
this.n_STAR_ = n_STAR_;
this.y_STAR_ = y_STAR_;
this.x = x;
this._distinctc = _distinctc;
this.meta35421 = meta35421;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.fd.t35420.cljs$lang$type = true;
cljs.core.logic.fd.t35420.cljs$lang$ctorStr = "cljs.core.logic.fd/t35420";
cljs.core.logic.fd.t35420.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.logic.fd/t35420");
});
cljs.core.logic.fd.t35420.prototype.cljs$core$logic$protocols$IRunnable$ = true;
cljs.core.logic.fd.t35420.prototype.cljs$core$logic$protocols$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.logic.fd.singleton_dom_QMARK_.call(null,self__.x);
});
cljs.core.logic.fd.t35420.prototype.call = (function (self__,s__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;if(cljs.core.truth_(self__.n_STAR_.call(null,self__.x)))
{return null;
} else
{var y_STAR___$3 = cljs.core.seq.call(null,self__.y_STAR_);var s__$3 = s__$2;while(true){
if(y_STAR___$3)
{var y = cljs.core.first.call(null,y_STAR___$3);var v = (function (){var or__5157__auto__ = cljs.core.logic.fd.get_dom.call(null,s__$3,y);if(cljs.core.truth_(or__5157__auto__))
{return or__5157__auto__;
} else
{return cljs.core.logic.protocols.walk.call(null,s__$3,y);
}
})();var s__$4 = ((!(cljs.core.logic.lvar_QMARK_.call(null,v)))?((cljs.core._EQ_.call(null,self__.x,v))?null:(cljs.core.truth_(cljs.core.logic.fd._member_QMARK_.call(null,v,self__.x))?cljs.core.logic.fd.process_dom.call(null,y,cljs.core.logic.fd._difference.call(null,v,self__.x),v).call(null,s__$3):((new cljs.core.Keyword(null,"else","else",1017020587))?s__$3:null))):s__$3);if(cljs.core.truth_(s__$4))
{{
var G__35424 = cljs.core.next.call(null,y_STAR___$3);
var G__35425 = s__$4;
y_STAR___$3 = G__35424;
s__$3 = G__35425;
continue;
}
} else
{return null;
}
} else
{return cljs.core.logic.remcg.call(null,self__.this$).call(null,s__$3);
}
break;
}
}
});
cljs.core.logic.fd.t35420.prototype.apply = (function (self__,args35423){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args35423)));
});
cljs.core.logic.fd.t35420.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.n_STAR_.call(null,self__.x)))
{return null;
} else
{var y_STAR___$3 = cljs.core.seq.call(null,self__.y_STAR_);var s__$3 = s__$2;while(true){
if(y_STAR___$3)
{var y = cljs.core.first.call(null,y_STAR___$3);var v = (function (){var or__5157__auto__ = cljs.core.logic.fd.get_dom.call(null,s__$3,y);if(cljs.core.truth_(or__5157__auto__))
{return or__5157__auto__;
} else
{return cljs.core.logic.protocols.walk.call(null,s__$3,y);
}
})();var s__$4 = ((!(cljs.core.logic.lvar_QMARK_.call(null,v)))?((cljs.core._EQ_.call(null,self__.x,v))?null:(cljs.core.truth_(cljs.core.logic.fd._member_QMARK_.call(null,v,self__.x))?cljs.core.logic.fd.process_dom.call(null,y,cljs.core.logic.fd._difference.call(null,v,self__.x),v).call(null,s__$3):((new cljs.core.Keyword(null,"else","else",1017020587))?s__$3:null))):s__$3);if(cljs.core.truth_(s__$4))
{{
var G__35426 = cljs.core.next.call(null,y_STAR___$3);
var G__35427 = s__$4;
y_STAR___$3 = G__35426;
s__$3 = G__35427;
continue;
}
} else
{return null;
}
} else
{return cljs.core.logic.remcg.call(null,self__.this$).call(null,s__$3);
}
break;
}
}
});
cljs.core.logic.fd.t35420.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35422){var self__ = this;
var _35422__$1 = this;return self__.meta35421;
});
cljs.core.logic.fd.t35420.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35422,meta35421__$1){var self__ = this;
var _35422__$1 = this;return (new cljs.core.logic.fd.t35420(self__.s,self__.this$,self__.meta35418,self__.n_STAR_,self__.y_STAR_,self__.x,self__._distinctc,meta35421__$1));
});
cljs.core.logic.fd.__GT_t35420 = (function __GT_t35420(s__$1,this$__$2,meta35418__$1,n_STAR___$2,y_STAR___$2,x__$3,_distinctc__$2,meta35421){return (new cljs.core.logic.fd.t35420(s__$1,this$__$2,meta35418__$1,n_STAR___$2,y_STAR___$2,x__$3,_distinctc__$2,meta35421));
});
}
return (new cljs.core.logic.fd.t35420(s,this$__$1,self__.meta35418,self__.n_STAR_,self__.y_STAR_,x__$2,self__._distinctc,null));
});
cljs.core.logic.fd.t35417.prototype.cljs$core$logic$protocols$IEnforceableConstraint$ = true;
cljs.core.logic.fd.t35417.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35419){var self__ = this;
var _35419__$1 = this;return self__.meta35418;
});
cljs.core.logic.fd.t35417.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35419,meta35418__$1){var self__ = this;
var _35419__$1 = this;return (new cljs.core.logic.fd.t35417(self__.n_STAR_,self__.y_STAR_,self__.x,self__._distinctc,meta35418__$1));
});
cljs.core.logic.fd.__GT_t35417 = (function __GT_t35417(n_STAR___$1,y_STAR___$1,x__$1,_distinctc__$1,meta35418){return (new cljs.core.logic.fd.t35417(n_STAR___$1,y_STAR___$1,x__$1,_distinctc__$1,meta35418));
});
}
return (new cljs.core.logic.fd.t35417(n_STAR_,y_STAR_,x,_distinctc,null));
});
cljs.core.logic.fd._distinct = (function _distinct(x,y_STAR_,n_STAR_){return cljs.core.logic.cgoal.call(null,cljs.core.logic.fd._distinctc.call(null,x,y_STAR_,n_STAR_));
});
cljs.core.logic.fd.list_sorted_QMARK_ = (function list_sorted_QMARK_(pred,ls){if(cljs.core.empty_QMARK_.call(null,ls))
{return true;
} else
{var f = cljs.core.first.call(null,ls);var ls__$1 = cljs.core.next.call(null,ls);while(true){
if(ls__$1)
{var s = cljs.core.first.call(null,ls__$1);if(cljs.core.truth_(pred.call(null,f,s)))
{{
var G__35428 = s;
var G__35429 = cljs.core.next.call(null,ls__$1);
f = G__35428;
ls__$1 = G__35429;
continue;
}
} else
{return false;
}
} else
{return true;
}
break;
}
}
});
/**
* The real distinct constraint. v* can be seq of logic vars and
* values or it can be a logic var itself. This constraint does not
* run until v* has become ground. When it has become ground we group
* v* into a set of logic vars and a sorted set of known singleton
* values. We then construct the individual constraint for each var.
*/
cljs.core.logic.fd.distinctc = (function distinctc(v_STAR_){if(typeof cljs.core.logic.fd.t35439 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t35439 = (function (v_STAR_,distinctc,meta35440){
this.v_STAR_ = v_STAR_;
this.distinctc = distinctc;
this.meta35440 = meta35440;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.fd.t35439.cljs$lang$type = true;
cljs.core.logic.fd.t35439.cljs$lang$ctorStr = "cljs.core.logic.fd/t35439";
cljs.core.logic.fd.t35439.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.logic.fd/t35439");
});
cljs.core.logic.fd.t35439.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$ = true;
cljs.core.logic.fd.t35439.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440),null], null), null);
});
cljs.core.logic.fd.t35439.prototype.cljs$core$logic$protocols$IConstraintOp$ = true;
cljs.core.logic.fd.t35439.prototype.cljs$core$logic$protocols$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic.fd","distinct","cljs.core.logic.fd/distinct",1952820740,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1022),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1022),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,45)))));
});
cljs.core.logic.fd.t35439.prototype.cljs$core$logic$protocols$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.v_STAR_], null);
});
cljs.core.logic.fd.t35439.prototype.cljs$core$logic$protocols$IConstraintStep$ = true;
cljs.core.logic.fd.t35439.prototype.cljs$core$logic$protocols$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;var v_STAR___$2 = cljs.core.logic.protocols.walk.call(null,s,self__.v_STAR_);if(typeof cljs.core.logic.fd.t35442 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t35442 = (function (s,this$,meta35440,v_STAR_,distinctc,meta35443){
this.s = s;
this.this$ = this$;
this.meta35440 = meta35440;
this.v_STAR_ = v_STAR_;
this.distinctc = distinctc;
this.meta35443 = meta35443;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.fd.t35442.cljs$lang$type = true;
cljs.core.logic.fd.t35442.cljs$lang$ctorStr = "cljs.core.logic.fd/t35442";
cljs.core.logic.fd.t35442.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.logic.fd/t35442");
});
cljs.core.logic.fd.t35442.prototype.cljs$core$logic$protocols$IRunnable$ = true;
cljs.core.logic.fd.t35442.prototype.cljs$core$logic$protocols$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return !(cljs.core.logic.lvar_QMARK_.call(null,self__.v_STAR_));
});
cljs.core.logic.fd.t35442.prototype.call = (function (self__,s__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;var map__35446 = cljs.core.group_by.call(null,cljs.core.logic.lvar_QMARK_,self__.v_STAR_);var map__35446__$1 = ((cljs.core.seq_QMARK_.call(null,map__35446))?cljs.core.apply.call(null,cljs.core.hash_map,map__35446):map__35446);var x_STAR_ = cljs.core.get.call(null,map__35446__$1,true);var n_STAR_ = cljs.core.get.call(null,map__35446__$1,false);var n_STAR___$1 = cljs.core.sort.call(null,cljs.core._LT_,n_STAR_);if(cljs.core.logic.fd.list_sorted_QMARK_.call(null,cljs.core._LT_,n_STAR___$1))
{var x_STAR___$1 = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,x_STAR_);var n_STAR___$2 = cljs.core.into.call(null,cljs.core.sorted_set.call(null),n_STAR___$1);var xs = cljs.core.seq.call(null,x_STAR___$1);var s__$3 = s__$2;while(true){
if(xs)
{var x = cljs.core.first.call(null,xs);var temp__4098__auto__ = cljs.core.logic.fd._distinct.call(null,x,cljs.core.disj.call(null,x_STAR___$1,x),n_STAR___$2).call(null,s__$3);if(cljs.core.truth_(temp__4098__auto__))
{var s__$4 = temp__4098__auto__;{
var G__35448 = cljs.core.next.call(null,xs);
var G__35449 = s__$4;
xs = G__35448;
s__$3 = G__35449;
continue;
}
} else
{return null;
}
} else
{return cljs.core.logic.remcg.call(null,self__.this$).call(null,s__$3);
}
break;
}
} else
{return null;
}
});
cljs.core.logic.fd.t35442.prototype.apply = (function (self__,args35445){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args35445)));
});
cljs.core.logic.fd.t35442.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
var _ = this;var map__35447 = cljs.core.group_by.call(null,cljs.core.logic.lvar_QMARK_,self__.v_STAR_);var map__35447__$1 = ((cljs.core.seq_QMARK_.call(null,map__35447))?cljs.core.apply.call(null,cljs.core.hash_map,map__35447):map__35447);var x_STAR_ = cljs.core.get.call(null,map__35447__$1,true);var n_STAR_ = cljs.core.get.call(null,map__35447__$1,false);var n_STAR___$1 = cljs.core.sort.call(null,cljs.core._LT_,n_STAR_);if(cljs.core.logic.fd.list_sorted_QMARK_.call(null,cljs.core._LT_,n_STAR___$1))
{var x_STAR___$1 = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,x_STAR_);var n_STAR___$2 = cljs.core.into.call(null,cljs.core.sorted_set.call(null),n_STAR___$1);var xs = cljs.core.seq.call(null,x_STAR___$1);var s__$3 = s__$2;while(true){
if(xs)
{var x = cljs.core.first.call(null,xs);var temp__4098__auto__ = cljs.core.logic.fd._distinct.call(null,x,cljs.core.disj.call(null,x_STAR___$1,x),n_STAR___$2).call(null,s__$3);if(cljs.core.truth_(temp__4098__auto__))
{var s__$4 = temp__4098__auto__;{
var G__35450 = cljs.core.next.call(null,xs);
var G__35451 = s__$4;
xs = G__35450;
s__$3 = G__35451;
continue;
}
} else
{return null;
}
} else
{return cljs.core.logic.remcg.call(null,self__.this$).call(null,s__$3);
}
break;
}
} else
{return null;
}
});
cljs.core.logic.fd.t35442.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35444){var self__ = this;
var _35444__$1 = this;return self__.meta35443;
});
cljs.core.logic.fd.t35442.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35444,meta35443__$1){var self__ = this;
var _35444__$1 = this;return (new cljs.core.logic.fd.t35442(self__.s,self__.this$,self__.meta35440,self__.v_STAR_,self__.distinctc,meta35443__$1));
});
cljs.core.logic.fd.__GT_t35442 = (function __GT_t35442(s__$1,this$__$2,meta35440__$1,v_STAR___$3,distinctc__$2,meta35443){return (new cljs.core.logic.fd.t35442(s__$1,this$__$2,meta35440__$1,v_STAR___$3,distinctc__$2,meta35443));
});
}
return (new cljs.core.logic.fd.t35442(s,this$__$1,self__.meta35440,v_STAR___$2,self__.distinctc,null));
});
cljs.core.logic.fd.t35439.prototype.cljs$core$logic$protocols$IEnforceableConstraint$ = true;
cljs.core.logic.fd.t35439.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35441){var self__ = this;
var _35441__$1 = this;return self__.meta35440;
});
cljs.core.logic.fd.t35439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35441,meta35440__$1){var self__ = this;
var _35441__$1 = this;return (new cljs.core.logic.fd.t35439(self__.v_STAR_,self__.distinctc,meta35440__$1));
});
cljs.core.logic.fd.__GT_t35439 = (function __GT_t35439(v_STAR___$1,distinctc__$1,meta35440){return (new cljs.core.logic.fd.t35439(v_STAR___$1,distinctc__$1,meta35440));
});
}
return (new cljs.core.logic.fd.t35439(v_STAR_,distinctc,null));
});
/**
* A finite domain constraint that will guarantee that
* all vars that occur in v* will be unified with unique
* values. v* need not be ground. Any vars in v* should
* eventually be given a domain.
*/
cljs.core.logic.fd.distinct = (function distinct(v_STAR_){return cljs.core.logic.cgoal.call(null,cljs.core.logic.fd.distinctc.call(null,v_STAR_));
});
/**
* Ensure that the list l never grows beyond bound n.
* n must have been assigned a domain.
*/
cljs.core.logic.fd.bounded_listo = (function bounded_listo(l,n){return (function (a35469){return (function _inc(){return cljs.core.logic.protocols.mplus.call(null,cljs.core.logic.protocols.bind.call(null,a35469,(function (a__9707__auto__){return (function _inc__$1(){return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__9707__auto__,cljs.core.logic._EQ__EQ_.call(null,cljs.core.List.EMPTY,l)),cljs.core.logic.fd._LT__EQ_.call(null,0,n));
});
})),(function (){return cljs.core.logic.protocols.bind.call(null,a35469,(function (a__9707__auto__){return (function _inc__$1(){var t = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"t","t",-1640531411,null));var h = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"h","h",-1640531423,null));return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__9707__auto__,cljs.core.logic._EQ__EQ_.call(null,cljs.core.logic.lcons.call(null,h,t),l)),(function (a__9707__auto____$1){return (function _inc__$1(){return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__9707__auto____$1,cljs.core.logic._EQ__EQ_.call(null,n,n)),(function (a__9707__auto____$2){return (function _inc__$1(){var m = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"m","m",-1640531418,null));return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__9707__auto____$2,(function (){var dom_35485 = cljs.core.logic.fd.interval.call(null,0,Number.MAX_VALUE);return (function (a__9707__auto____$3){return (function _inc__$1(){return cljs.core.logic.protocols.bind.call(null,a__9707__auto____$3,cljs.core.logic.fd.dom.call(null,m,dom_35485));
});
});
})()),cljs.core.logic.fd._PLUS_.call(null,m,1,n)),bounded_listo.call(null,t,m));
});
}));
});
}));
});
}));
}));
});
});
});
cljs.core.logic.fd.binops__GT_fd = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"+","+",-1640531484,null),new cljs.core.Symbol(null,"*","*",-1640531485,null),new cljs.core.Symbol(null,"-","-",-1640531482,null),new cljs.core.Symbol(null,"/","/",-1640531480,null),new cljs.core.Symbol(null,"<","<",-1640531467,null),new cljs.core.Symbol(null,"!=","!=",-1640530443,null),new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,">",">",-1640531465,null),new cljs.core.Symbol(null,">=",">=",-1640529544,null),new cljs.core.Symbol(null,"<=","<=",-1640529606,null)],[new cljs.core.Symbol("cljs.core.logic.fd","+","cljs.core.logic.fd/+",1528484149,null),new cljs.core.Symbol("cljs.core.logic.fd","*","cljs.core.logic.fd/*",1528484146,null),new cljs.core.Symbol("cljs.core.logic.fd","-","cljs.core.logic.fd/-",1528484151,null),new cljs.core.Symbol("cljs.core.logic.fd","quot","cljs.core.logic.fd/quot",1533391379,null),new cljs.core.Symbol("cljs.core.logic.fd","<","cljs.core.logic.fd/<",1528484292,null),new cljs.core.Symbol("cljs.core.logic.fd","!=","cljs.core.logic.fd/!=",1528485316,null),new cljs.core.Symbol("cljs.core.logic.fd","==","cljs.core.logic.fd/==",1528485544,null),new cljs.core.Symbol("cljs.core.logic.fd",">","cljs.core.logic.fd/>",1528484294,null),new cljs.core.Symbol("cljs.core.logic.fd",">=","cljs.core.logic.fd/>=",1528482121,null),new cljs.core.Symbol("cljs.core.logic.fd","<=","cljs.core.logic.fd/<=",1528485515,null)]);
cljs.core.logic.fd.binops = cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.logic.fd.binops__GT_fd));
cljs.core.logic.fd.expand = (function expand(form){if(cljs.core.seq_QMARK_.call(null,form))
{var vec__35487 = form;var op = cljs.core.nth.call(null,vec__35487,0,null);var args = cljs.core.nthnext.call(null,vec__35487,1);if(cljs.core.truth_((function (){var and__5145__auto__ = cljs.core.logic.fd.binops.call(null,op);if(cljs.core.truth_(and__5145__auto__))
{return (cljs.core.count.call(null,args) > 2);
} else
{return and__5145__auto__;
}
})()))
{return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,expand.call(null,cljs.core.cons.call(null,op,cljs.core.rest.call(null,args)))),expand.call(null,cljs.core.first.call(null,args))),op);
} else
{return cljs.core.cons.call(null,op,cljs.core.map.call(null,expand,args));
}
} else
{return form;
}
});
cljs.core.logic.fd.eq_STAR_ = (function() {
var eq_STAR_ = null;
var eq_STAR___2 = (function (form,vars){return eq_STAR_.call(null,form,vars,null);
});
var eq_STAR___3 = (function (form,vars,out){if(cljs.core.seq_QMARK_.call(null,form))
{var vec__35491 = form;var op = cljs.core.nth.call(null,vec__35491,0,null);var r1 = cljs.core.nth.call(null,vec__35491,1,null);var r2 = cljs.core.nth.call(null,vec__35491,2,null);var vec__35492 = ((cljs.core.seq_QMARK_.call(null,r1))?(function (){var s = cljs.core.gensym.call(null);cljs.core.swap_BANG_.call(null,vars,cljs.core.conj,s);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,true], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r1,false], null));var outl = cljs.core.nth.call(null,vec__35492,0,null);var outlv_QMARK_ = cljs.core.nth.call(null,vec__35492,1,null);var vec__35493 = ((cljs.core.seq_QMARK_.call(null,r2))?(function (){var s = cljs.core.gensym.call(null);cljs.core.swap_BANG_.call(null,vars,cljs.core.conj,s);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,true], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r2,false], null));var outr = cljs.core.nth.call(null,vec__35493,0,null);var outrv_QMARK_ = cljs.core.nth.call(null,vec__35493,1,null);var op__$1 = cljs.core.logic.fd.binops__GT_fd.call(null,op);return cljs.core.cons.call(null,(cljs.core.truth_(out)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,out),outr),outl),op__$1):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,outr),outl),op__$1)),cljs.core.concat.call(null,((cljs.core.seq_QMARK_.call(null,r1))?eq_STAR_.call(null,r1,vars,(cljs.core.truth_(outlv_QMARK_)?outl:null)):null),((cljs.core.seq_QMARK_.call(null,r2))?eq_STAR_.call(null,r2,vars,(cljs.core.truth_(outrv_QMARK_)?outr:null)):null)));
} else
{return form;
}
});
eq_STAR_ = function(form,vars,out){
switch(arguments.length){
case 2:
return eq_STAR___2.call(this,form,vars);
case 3:
return eq_STAR___3.call(this,form,vars,out);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
eq_STAR_.cljs$core$IFn$_invoke$arity$2 = eq_STAR___2;
eq_STAR_.cljs$core$IFn$_invoke$arity$3 = eq_STAR___3;
return eq_STAR_;
})()
;
cljs.core.logic.fd.__GT_fd = (function __GT_fd(vars,exprs){return cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic.fd","fresh","cljs.core.logic.fd/fresh",1623660598,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1098),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,5),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1098),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,10)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.with_meta.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,vars))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1098),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,11),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1098),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,19)))))),cljs.core.reverse.call(null,exprs))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1098),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,4),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1099),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,24)))));
});
cljs.core.logic.fd.eq_form = (function eq_form(form){var vars = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);var exprs = cljs.core.logic.fd.eq_STAR_.call(null,cljs.core.logic.fd.expand.call(null,form),vars);return cljs.core.logic.fd.__GT_fd.call(null,cljs.core.deref.call(null,vars),exprs);
});
