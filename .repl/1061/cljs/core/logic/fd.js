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
cljs.core.logic.fd.IInterval = (function (){var obj21082 = {};return obj21082;
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
cljs.core.logic.fd.IIntervals = (function (){var obj21084 = {};return obj21084;
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
cljs.core.logic.fd.ISortedDomain = (function (){var obj21086 = {};return obj21086;
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
cljs.core.logic.fd.ISet = (function (){var obj21088 = {};return obj21088;
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
var ___$1 = this;return cljs.core.apply.call(null,cljs.core.logic.fd.domain,cljs.core.drop_while.call(null,(function (p1__21089_SHARP_){return (p1__21089_SHARP_ < n);
}),self__.s));
});
cljs.core.logic.fd.FiniteDomain.prototype.cljs$core$logic$fd$ISortedDomain$_keep_before$arity$2 = (function (this$,n){var self__ = this;
var this$__$1 = this;return cljs.core.apply.call(null,cljs.core.logic.fd.domain,cljs.core.take_while.call(null,(function (p1__21090_SHARP_){return (p1__21090_SHARP_ < n);
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
var this$__$1 = this;var G__21091 = k;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"max","max",1014012118),G__21091))
{return self__.max;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"min","min",1014012356),G__21091))
{return self__.min;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"s","s",1013904357),G__21091))
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
domain.cljs$lang$applyTo = (function (arglist__21092){
var args = cljs.core.seq(arglist__21092);
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
{var i = this$__$1;var j = that;var vec__21093 = cljs.core.logic.fd.bounds.call(null,i);var imin = cljs.core.nth.call(null,vec__21093,0,null);var imax = cljs.core.nth.call(null,vec__21093,1,null);var vec__21094 = cljs.core.logic.fd.bounds.call(null,j);var jmin = cljs.core.nth.call(null,vec__21094,0,null);var jmax = cljs.core.nth.call(null,vec__21094,1,null);return ((imin > jmax)) || ((imax < jmin));
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
var G__21099 = cljs.core.next.call(null,is__$1);
var G__21100 = js__$1;
var G__21101 = r;
is__$1 = G__21099;
js__$1 = G__21100;
r = G__21101;
continue;
}
} else
{if(cljs.core.logic.fd.interval__GT_.call(null,i,j))
{{
var G__21102 = is__$1;
var G__21103 = cljs.core.next.call(null,js__$1);
var G__21104 = r;
is__$1 = G__21102;
js__$1 = G__21103;
r = G__21104;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var vec__21097 = cljs.core.logic.fd.bounds.call(null,i);var imin = cljs.core.nth.call(null,vec__21097,0,null);var imax = cljs.core.nth.call(null,vec__21097,1,null);var vec__21098 = cljs.core.logic.fd.bounds.call(null,j);var jmin = cljs.core.nth.call(null,vec__21098,0,null);var jmax = cljs.core.nth.call(null,vec__21098,1,null);if((imin <= jmin))
{if((imax < jmax))
{{
var G__21105 = cljs.core.next.call(null,is__$1);
var G__21106 = cljs.core.cons.call(null,cljs.core.logic.fd.interval.call(null,(imax + 1),jmax),cljs.core.next.call(null,js__$1));
var G__21107 = cljs.core.conj.call(null,r,cljs.core.logic.fd.interval.call(null,jmin,imax));
is__$1 = G__21105;
js__$1 = G__21106;
r = G__21107;
continue;
}
} else
{if((imax > jmax))
{{
var G__21108 = cljs.core.cons.call(null,cljs.core.logic.fd.interval.call(null,(jmax + 1),imax),cljs.core.next.call(null,is__$1));
var G__21109 = cljs.core.next.call(null,js__$1);
var G__21110 = cljs.core.conj.call(null,r,j);
is__$1 = G__21108;
js__$1 = G__21109;
r = G__21110;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__21111 = cljs.core.next.call(null,is__$1);
var G__21112 = cljs.core.next.call(null,js__$1);
var G__21113 = cljs.core.conj.call(null,r,cljs.core.logic.fd.interval.call(null,jmin,jmax));
is__$1 = G__21111;
js__$1 = G__21112;
r = G__21113;
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
var G__21114 = cljs.core.cons.call(null,cljs.core.logic.fd.interval.call(null,(jmax + 1),imax),cljs.core.next.call(null,is__$1));
var G__21115 = cljs.core.next.call(null,js__$1);
var G__21116 = cljs.core.conj.call(null,r,cljs.core.logic.fd.interval.call(null,imin,jmax));
is__$1 = G__21114;
js__$1 = G__21115;
r = G__21116;
continue;
}
} else
{if((imax < jmax))
{{
var G__21117 = is__$1;
var G__21118 = cljs.core.cons.call(null,cljs.core.logic.fd.interval.call(null,(imax + 1),jmax),cljs.core.next.call(null,js__$1));
var G__21119 = cljs.core.conj.call(null,r,i);
is__$1 = G__21117;
js__$1 = G__21118;
r = G__21119;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__21120 = cljs.core.next.call(null,is__$1);
var G__21121 = cljs.core.next.call(null,js__$1);
var G__21122 = cljs.core.conj.call(null,r,cljs.core.logic.fd.interval.call(null,imin,imax));
is__$1 = G__21120;
js__$1 = G__21121;
r = G__21122;
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
var G__21127 = cljs.core.next.call(null,is__$1);
var G__21128 = js__$1;
var G__21129 = cljs.core.conj.call(null,r,i);
is__$1 = G__21127;
js__$1 = G__21128;
r = G__21129;
continue;
}
} else
{if(cljs.core.logic.fd.interval__GT_.call(null,i,j))
{{
var G__21130 = is__$1;
var G__21131 = cljs.core.next.call(null,js__$1);
var G__21132 = r;
is__$1 = G__21130;
js__$1 = G__21131;
r = G__21132;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var vec__21125 = cljs.core.logic.fd.bounds.call(null,i);var imin = cljs.core.nth.call(null,vec__21125,0,null);var imax = cljs.core.nth.call(null,vec__21125,1,null);var vec__21126 = cljs.core.logic.fd.bounds.call(null,j);var jmin = cljs.core.nth.call(null,vec__21126,0,null);var jmax = cljs.core.nth.call(null,vec__21126,1,null);if((imin < jmin))
{if((jmax < imax))
{{
var G__21133 = cljs.core.cons.call(null,cljs.core.logic.fd.interval.call(null,(jmax + 1),imax),cljs.core.next.call(null,is__$1));
var G__21134 = cljs.core.next.call(null,js__$1);
var G__21135 = cljs.core.conj.call(null,r,cljs.core.logic.fd.interval.call(null,imin,(jmin - 1)));
is__$1 = G__21133;
js__$1 = G__21134;
r = G__21135;
continue;
}
} else
{if((jmax > imax))
{{
var G__21136 = cljs.core.next.call(null,is__$1);
var G__21137 = cljs.core.cons.call(null,cljs.core.logic.fd.interval.call(null,(imax + 1),jmax),cljs.core.next.call(null,js__$1));
var G__21138 = cljs.core.conj.call(null,r,cljs.core.logic.fd.interval.call(null,imin,(jmin - 1)));
is__$1 = G__21136;
js__$1 = G__21137;
r = G__21138;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__21139 = cljs.core.next.call(null,is__$1);
var G__21140 = cljs.core.next.call(null,js__$1);
var G__21141 = cljs.core.conj.call(null,r,cljs.core.logic.fd.interval.call(null,imin,(jmin - 1)));
is__$1 = G__21139;
js__$1 = G__21140;
r = G__21141;
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
var G__21142 = cljs.core.next.call(null,is__$1);
var G__21143 = cljs.core.cons.call(null,cljs.core.logic.fd.interval.call(null,(imax + 1),jmax),cljs.core.next.call(null,js__$1));
var G__21144 = r;
is__$1 = G__21142;
js__$1 = G__21143;
r = G__21144;
continue;
}
} else
{if((imax > jmax))
{{
var G__21145 = cljs.core.cons.call(null,cljs.core.logic.fd.interval.call(null,(jmax + 1),imax),cljs.core.next.call(null,is__$1));
var G__21146 = cljs.core.next.call(null,js__$1);
var G__21147 = r;
is__$1 = G__21145;
js__$1 = G__21146;
r = G__21147;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__21148 = cljs.core.next.call(null,is__$1);
var G__21149 = cljs.core.next.call(null,js__$1);
var G__21150 = r;
is__$1 = G__21148;
js__$1 = G__21149;
r = G__21150;
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
var G__21151 = cljs.core.next.call(null,d0__$1);
var G__21152 = d1__$1;
d0__$1 = G__21151;
d1__$1 = G__21152;
continue;
}
} else
{if(cljs.core.logic.fd.interval__GT_.call(null,i,j))
{{
var G__21153 = d0__$1;
var G__21154 = cljs.core.next.call(null,d1__$1);
d0__$1 = G__21153;
d1__$1 = G__21154;
continue;
}
} else
{if(cljs.core.truth_(cljs.core.logic.fd._disjoint_QMARK_.call(null,i,j)))
{{
var G__21155 = cljs.core.next.call(null,d0__$1);
var G__21156 = d1__$1;
d0__$1 = G__21155;
d1__$1 = G__21156;
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
var this$__$1 = this;if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21158_SHARP_){return cljs.core.logic.fd._member_QMARK_.call(null,p1__21158_SHARP_,n);
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
var G__21161 = cljs.core.next.call(null,is__$2);
var G__21162 = cljs.core.conj.call(null,r,i);
is__$2 = G__21161;
r = G__21162;
continue;
}
} else
{{
var G__21163 = cljs.core.next.call(null,is__$2);
var G__21164 = r;
is__$2 = G__21163;
r = G__21164;
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
var G__21165 = cljs.core.next.call(null,is__$2);
var G__21166 = cljs.core.conj.call(null,r,i);
is__$2 = G__21165;
r = G__21166;
continue;
}
} else
{{
var G__21167 = cljs.core.next.call(null,is__$2);
var G__21168 = r;
is__$2 = G__21167;
r = G__21168;
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
var this$__$1 = this;return cljs.core.reduce.call(null,cljs.core._PLUS_,0,cljs.core.map.call(null,(function (p1__21157_SHARP_){return cljs.core.logic.protocols._member_count.call(null,p1__21157_SHARP_);
}),self__.is));
});
cljs.core.logic.fd.MultiIntervalFD.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,j){var self__ = this;
var this$__$1 = this;if((j instanceof cljs.core.logic.fd.MultiIntervalFD))
{var i = this$__$1;var vec__21159 = cljs.core.logic.fd.bounds.call(null,j);var jmin = cljs.core.nth.call(null,vec__21159,0,null);var jmax = cljs.core.nth.call(null,vec__21159,1,null);if((cljs.core._EQ_.call(null,self__.min,jmin)) && (cljs.core._EQ_.call(null,self__.max,jmax)))
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
var this$__$1 = this;var G__21160 = k;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"max","max",1014012118),G__21160))
{return self__.max;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"min","min",1014012356),G__21160))
{return self__.min;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"is","is",1013907612),G__21160))
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
var G__21169__delegate = function (i0,i1,ir){var is = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,i1),i0),ir));return (new cljs.core.logic.fd.MultiIntervalFD(cljs.core.reduce.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.logic.fd._lb,is)),cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.logic.fd._ub,is)),is));
};
var G__21169 = function (i0,i1,var_args){
var ir = null;if (arguments.length > 2) {
  ir = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21169__delegate.call(this,i0,i1,ir);};
G__21169.cljs$lang$maxFixedArity = 2;
G__21169.cljs$lang$applyTo = (function (arglist__21170){
var i0 = cljs.core.first(arglist__21170);
arglist__21170 = cljs.core.next(arglist__21170);
var i1 = cljs.core.first(arglist__21170);
var ir = cljs.core.rest(arglist__21170);
return G__21169__delegate(i0,i1,ir);
});
G__21169.cljs$core$IFn$_invoke$arity$variadic = G__21169__delegate;
return G__21169;
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
cljs.core.logic.fd._domc = (function _domc(x){if(typeof cljs.core.logic.fd.t21178 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t21178 = (function (x,_domc,meta21179){
this.x = x;
this._domc = _domc;
this.meta21179 = meta21179;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.fd.t21178.cljs$lang$type = true;
cljs.core.logic.fd.t21178.cljs$lang$ctorStr = "cljs.core.logic.fd/t21178";
cljs.core.logic.fd.t21178.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.logic.fd/t21178");
});
cljs.core.logic.fd.t21178.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$ = true;
cljs.core.logic.fd.t21178.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440),null], null), null);
});
cljs.core.logic.fd.t21178.prototype.cljs$core$logic$protocols$IConstraintOp$ = true;
cljs.core.logic.fd.t21178.prototype.cljs$core$logic$protocols$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic.fd","domc","cljs.core.logic.fd/domc",1533784811,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,650),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,650),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,41)))));
});
cljs.core.logic.fd.t21178.prototype.cljs$core$logic$protocols$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.x], null);
});
cljs.core.logic.fd.t21178.prototype.cljs$core$logic$protocols$IConstraintStep$ = true;
cljs.core.logic.fd.t21178.prototype.cljs$core$logic$protocols$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;var xv = cljs.core.logic.protocols.walk.call(null,s,self__.x);var xd = new cljs.core.Keyword("cljs.core.logic","fd","cljs.core.logic/fd",3673845947).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"doms","doms",1016993507).cljs$core$IFn$_invoke$arity$1(cljs.core.logic.protocols.root_val.call(null,s,self__.x)));if(typeof cljs.core.logic.fd.t21181 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t21181 = (function (xd,xv,s,this$,meta21179,x,_domc,meta21182){
this.xd = xd;
this.xv = xv;
this.s = s;
this.this$ = this$;
this.meta21179 = meta21179;
this.x = x;
this._domc = _domc;
this.meta21182 = meta21182;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.fd.t21181.cljs$lang$type = true;
cljs.core.logic.fd.t21181.cljs$lang$ctorStr = "cljs.core.logic.fd/t21181";
cljs.core.logic.fd.t21181.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.logic.fd/t21181");
});
cljs.core.logic.fd.t21181.prototype.cljs$core$logic$protocols$IRunnable$ = true;
cljs.core.logic.fd.t21181.prototype.cljs$core$logic$protocols$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return !(cljs.core.logic.lvar_QMARK_.call(null,self__.xv));
});
cljs.core.logic.fd.t21181.prototype.cljs$core$logic$protocols$IEntailed$ = true;
cljs.core.logic.fd.t21181.prototype.cljs$core$logic$protocols$IEntailed$_entailed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (self__.xd == null);
});
cljs.core.logic.fd.t21181.prototype.call = (function (self__,s__$2){var self__ = this;
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
cljs.core.logic.fd.t21181.prototype.apply = (function (self__,args21184){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args21184)));
});
cljs.core.logic.fd.t21181.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
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
cljs.core.logic.fd.t21181.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21183){var self__ = this;
var _21183__$1 = this;return self__.meta21182;
});
cljs.core.logic.fd.t21181.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21183,meta21182__$1){var self__ = this;
var _21183__$1 = this;return (new cljs.core.logic.fd.t21181(self__.xd,self__.xv,self__.s,self__.this$,self__.meta21179,self__.x,self__._domc,meta21182__$1));
});
cljs.core.logic.fd.__GT_t21181 = (function __GT_t21181(xd__$1,xv__$1,s__$1,this$__$2,meta21179__$1,x__$2,_domc__$2,meta21182){return (new cljs.core.logic.fd.t21181(xd__$1,xv__$1,s__$1,this$__$2,meta21179__$1,x__$2,_domc__$2,meta21182));
});
}
return (new cljs.core.logic.fd.t21181(xd,xv,s,this$__$1,self__.meta21179,self__.x,self__._domc,null));
});
cljs.core.logic.fd.t21178.prototype.cljs$core$logic$protocols$IEnforceableConstraint$ = true;
cljs.core.logic.fd.t21178.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21180){var self__ = this;
var _21180__$1 = this;return self__.meta21179;
});
cljs.core.logic.fd.t21178.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21180,meta21179__$1){var self__ = this;
var _21180__$1 = this;return (new cljs.core.logic.fd.t21178(self__.x,self__._domc,meta21179__$1));
});
cljs.core.logic.fd.__GT_t21178 = (function __GT_t21178(x__$1,_domc__$1,meta21179){return (new cljs.core.logic.fd.t21178(x__$1,_domc__$1,meta21179));
});
}
return (new cljs.core.logic.fd.t21178(x,_domc,null));
});
cljs.core.logic.fd.domc = (function domc(x){return cljs.core.logic.cgoal.call(null,cljs.core.logic.fd._domc.call(null,x));
});
cljs.core.logic.fd._EQ__EQ_c = (function _EQ__EQ_c(u,v){if(typeof cljs.core.logic.fd.t21192 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t21192 = (function (v,u,_EQ__EQ_c,meta21193){
this.v = v;
this.u = u;
this._EQ__EQ_c = _EQ__EQ_c;
this.meta21193 = meta21193;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.fd.t21192.cljs$lang$type = true;
cljs.core.logic.fd.t21192.cljs$lang$ctorStr = "cljs.core.logic.fd/t21192";
cljs.core.logic.fd.t21192.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.logic.fd/t21192");
});
cljs.core.logic.fd.t21192.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$ = true;
cljs.core.logic.fd.t21192.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.core.logic","fd","cljs.core.logic/fd",3673845947),null,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440),null], null), null);
});
cljs.core.logic.fd.t21192.prototype.cljs$core$logic$protocols$IConstraintOp$ = true;
cljs.core.logic.fd.t21192.prototype.cljs$core$logic$protocols$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic.fd","==","cljs.core.logic.fd/==",1528485544,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,680),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,680),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,39)))));
});
cljs.core.logic.fd.t21192.prototype.cljs$core$logic$protocols$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.u,self__.v], null);
});
cljs.core.logic.fd.t21192.prototype.cljs$core$logic$protocols$IConstraintStep$ = true;
cljs.core.logic.fd.t21192.prototype.cljs$core$logic$protocols$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;var du = cljs.core.logic.get_dom_fd.call(null,s,self__.u);var dv = cljs.core.logic.get_dom_fd.call(null,s,self__.v);if(typeof cljs.core.logic.fd.t21195 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t21195 = (function (dv,du,s,this$,meta21193,v,u,_EQ__EQ_c,meta21196){
this.dv = dv;
this.du = du;
this.s = s;
this.this$ = this$;
this.meta21193 = meta21193;
this.v = v;
this.u = u;
this._EQ__EQ_c = _EQ__EQ_c;
this.meta21196 = meta21196;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.fd.t21195.cljs$lang$type = true;
cljs.core.logic.fd.t21195.cljs$lang$ctorStr = "cljs.core.logic.fd/t21195";
cljs.core.logic.fd.t21195.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.logic.fd/t21195");
});
cljs.core.logic.fd.t21195.prototype.cljs$core$logic$protocols$IRunnable$ = true;
cljs.core.logic.fd.t21195.prototype.cljs$core$logic$protocols$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var and__5145__auto__ = self__.du;if(cljs.core.truth_(and__5145__auto__))
{return self__.dv;
} else
{return and__5145__auto__;
}
});
cljs.core.logic.fd.t21195.prototype.cljs$core$logic$protocols$IEntailed$ = true;
cljs.core.logic.fd.t21195.prototype.cljs$core$logic$protocols$IEntailed$_entailed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (cljs.core.logic.fd.singleton_dom_QMARK_.call(null,self__.du)) && (cljs.core.logic.fd.singleton_dom_QMARK_.call(null,self__.dv)) && (cljs.core._EQ_.call(null,self__.du,self__.dv));
});
cljs.core.logic.fd.t21195.prototype.call = (function (self__,s__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;var i = cljs.core.logic.fd._intersection.call(null,self__.du,self__.dv);return cljs.core.logic.composeg.call(null,cljs.core.logic.fd.process_dom.call(null,self__.u,i,self__.du),cljs.core.logic.fd.process_dom.call(null,self__.v,i,self__.dv)).call(null,s__$2);
});
cljs.core.logic.fd.t21195.prototype.apply = (function (self__,args21198){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args21198)));
});
cljs.core.logic.fd.t21195.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
var _ = this;var i = cljs.core.logic.fd._intersection.call(null,self__.du,self__.dv);return cljs.core.logic.composeg.call(null,cljs.core.logic.fd.process_dom.call(null,self__.u,i,self__.du),cljs.core.logic.fd.process_dom.call(null,self__.v,i,self__.dv)).call(null,s__$2);
});
cljs.core.logic.fd.t21195.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21197){var self__ = this;
var _21197__$1 = this;return self__.meta21196;
});
cljs.core.logic.fd.t21195.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21197,meta21196__$1){var self__ = this;
var _21197__$1 = this;return (new cljs.core.logic.fd.t21195(self__.dv,self__.du,self__.s,self__.this$,self__.meta21193,self__.v,self__.u,self__._EQ__EQ_c,meta21196__$1));
});
cljs.core.logic.fd.__GT_t21195 = (function __GT_t21195(dv__$1,du__$1,s__$1,this$__$2,meta21193__$1,v__$2,u__$2,_EQ__EQ_c__$2,meta21196){return (new cljs.core.logic.fd.t21195(dv__$1,du__$1,s__$1,this$__$2,meta21193__$1,v__$2,u__$2,_EQ__EQ_c__$2,meta21196));
});
}
return (new cljs.core.logic.fd.t21195(dv,du,s,this$__$1,self__.meta21193,self__.v,self__.u,self__._EQ__EQ_c,null));
});
cljs.core.logic.fd.t21192.prototype.cljs$core$logic$protocols$IEnforceableConstraint$ = true;
cljs.core.logic.fd.t21192.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21194){var self__ = this;
var _21194__$1 = this;return self__.meta21193;
});
cljs.core.logic.fd.t21192.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21194,meta21193__$1){var self__ = this;
var _21194__$1 = this;return (new cljs.core.logic.fd.t21192(self__.v,self__.u,self__._EQ__EQ_c,meta21193__$1));
});
cljs.core.logic.fd.__GT_t21192 = (function __GT_t21192(v__$1,u__$1,_EQ__EQ_c__$1,meta21193){return (new cljs.core.logic.fd.t21192(v__$1,u__$1,_EQ__EQ_c__$1,meta21193));
});
}
return (new cljs.core.logic.fd.t21192(v,u,_EQ__EQ_c,null));
});
/**
* A finite domain constraint. u and v must be equal. u and v must
* eventually be given domains if vars.
*/
cljs.core.logic.fd._EQ__EQ_ = (function _EQ__EQ_(u,v){return cljs.core.logic.cgoal.call(null,cljs.core.logic.fd._EQ__EQ_c.call(null,u,v));
});
cljs.core.logic.fd._BANG__EQ_c = (function _BANG__EQ_c(u,v){if(typeof cljs.core.logic.fd.t21206 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t21206 = (function (v,u,_BANG__EQ_c,meta21207){
this.v = v;
this.u = u;
this._BANG__EQ_c = _BANG__EQ_c;
this.meta21207 = meta21207;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.fd.t21206.cljs$lang$type = true;
cljs.core.logic.fd.t21206.cljs$lang$ctorStr = "cljs.core.logic.fd/t21206";
cljs.core.logic.fd.t21206.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.logic.fd/t21206");
});
cljs.core.logic.fd.t21206.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$ = true;
cljs.core.logic.fd.t21206.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.core.logic","fd","cljs.core.logic/fd",3673845947),null,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440),null], null), null);
});
cljs.core.logic.fd.t21206.prototype.cljs$core$logic$protocols$IConstraintOp$ = true;
cljs.core.logic.fd.t21206.prototype.cljs$core$logic$protocols$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic.fd","!=","cljs.core.logic.fd/!=",1528485316,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,717),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,717),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,39)))));
});
cljs.core.logic.fd.t21206.prototype.cljs$core$logic$protocols$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.u,self__.v], null);
});
cljs.core.logic.fd.t21206.prototype.cljs$core$logic$protocols$IConstraintStep$ = true;
cljs.core.logic.fd.t21206.prototype.cljs$core$logic$protocols$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;var du = cljs.core.logic.get_dom_fd.call(null,s,self__.u);var dv = cljs.core.logic.get_dom_fd.call(null,s,self__.v);var su_QMARK_ = cljs.core.logic.fd.singleton_dom_QMARK_.call(null,du);var sv_QMARK_ = cljs.core.logic.fd.singleton_dom_QMARK_.call(null,dv);if(typeof cljs.core.logic.fd.t21209 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t21209 = (function (v,u,_BANG__EQ_c,s,du,dv,meta21207,sv_QMARK_,su_QMARK_,this$,meta21210){
this.v = v;
this.u = u;
this._BANG__EQ_c = _BANG__EQ_c;
this.s = s;
this.du = du;
this.dv = dv;
this.meta21207 = meta21207;
this.sv_QMARK_ = sv_QMARK_;
this.su_QMARK_ = su_QMARK_;
this.this$ = this$;
this.meta21210 = meta21210;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.fd.t21209.cljs$lang$type = true;
cljs.core.logic.fd.t21209.cljs$lang$ctorStr = "cljs.core.logic.fd/t21209";
cljs.core.logic.fd.t21209.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.logic.fd/t21209");
});
cljs.core.logic.fd.t21209.prototype.cljs$core$logic$protocols$IRunnable$ = true;
cljs.core.logic.fd.t21209.prototype.cljs$core$logic$protocols$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
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
cljs.core.logic.fd.t21209.prototype.cljs$core$logic$protocols$IEntailed$ = true;
cljs.core.logic.fd.t21209.prototype.cljs$core$logic$protocols$IEntailed$_entailed_QMARK_$arity$1 = (function (_){var self__ = this;
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
cljs.core.logic.fd.t21209.prototype.call = (function (self__,s__$2){var self__ = this;
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
cljs.core.logic.fd.t21209.prototype.apply = (function (self__,args21212){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args21212)));
});
cljs.core.logic.fd.t21209.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
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
cljs.core.logic.fd.t21209.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21211){var self__ = this;
var _21211__$1 = this;return self__.meta21210;
});
cljs.core.logic.fd.t21209.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21211,meta21210__$1){var self__ = this;
var _21211__$1 = this;return (new cljs.core.logic.fd.t21209(self__.v,self__.u,self__._BANG__EQ_c,self__.s,self__.du,self__.dv,self__.meta21207,self__.sv_QMARK_,self__.su_QMARK_,self__.this$,meta21210__$1));
});
cljs.core.logic.fd.__GT_t21209 = (function __GT_t21209(v__$2,u__$2,_BANG__EQ_c__$2,s__$1,du__$1,dv__$1,meta21207__$1,sv_QMARK___$1,su_QMARK___$1,this$__$2,meta21210){return (new cljs.core.logic.fd.t21209(v__$2,u__$2,_BANG__EQ_c__$2,s__$1,du__$1,dv__$1,meta21207__$1,sv_QMARK___$1,su_QMARK___$1,this$__$2,meta21210));
});
}
return (new cljs.core.logic.fd.t21209(self__.v,self__.u,self__._BANG__EQ_c,s,du,dv,self__.meta21207,sv_QMARK_,su_QMARK_,this$__$1,null));
});
cljs.core.logic.fd.t21206.prototype.cljs$core$logic$protocols$IEnforceableConstraint$ = true;
cljs.core.logic.fd.t21206.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21208){var self__ = this;
var _21208__$1 = this;return self__.meta21207;
});
cljs.core.logic.fd.t21206.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21208,meta21207__$1){var self__ = this;
var _21208__$1 = this;return (new cljs.core.logic.fd.t21206(self__.v,self__.u,self__._BANG__EQ_c,meta21207__$1));
});
cljs.core.logic.fd.__GT_t21206 = (function __GT_t21206(v__$1,u__$1,_BANG__EQ_c__$1,meta21207){return (new cljs.core.logic.fd.t21206(v__$1,u__$1,_BANG__EQ_c__$1,meta21207));
});
}
return (new cljs.core.logic.fd.t21206(v,u,_BANG__EQ_c,null));
});
/**
* A finite domain constraint. u and v must not be equal. u and v
* must eventually be given domains if vars.
*/
cljs.core.logic.fd._BANG__EQ_ = (function _BANG__EQ_(u,v){return cljs.core.logic.cgoal.call(null,cljs.core.logic.fd._BANG__EQ_c.call(null,u,v));
});
cljs.core.logic.fd._LT__EQ_c = (function _LT__EQ_c(u,v){if(typeof cljs.core.logic.fd.t21220 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t21220 = (function (v,u,_LT__EQ_c,meta21221){
this.v = v;
this.u = u;
this._LT__EQ_c = _LT__EQ_c;
this.meta21221 = meta21221;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.fd.t21220.cljs$lang$type = true;
cljs.core.logic.fd.t21220.cljs$lang$ctorStr = "cljs.core.logic.fd/t21220";
cljs.core.logic.fd.t21220.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.logic.fd/t21220");
});
cljs.core.logic.fd.t21220.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$ = true;
cljs.core.logic.fd.t21220.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.core.logic","fd","cljs.core.logic/fd",3673845947),null,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440),null], null), null);
});
cljs.core.logic.fd.t21220.prototype.cljs$core$logic$protocols$IConstraintOp$ = true;
cljs.core.logic.fd.t21220.prototype.cljs$core$logic$protocols$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic.fd","<=","cljs.core.logic.fd/<=",1528485515,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,750),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,750),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,39)))));
});
cljs.core.logic.fd.t21220.prototype.cljs$core$logic$protocols$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.u,self__.v], null);
});
cljs.core.logic.fd.t21220.prototype.cljs$core$logic$protocols$IConstraintStep$ = true;
cljs.core.logic.fd.t21220.prototype.cljs$core$logic$protocols$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;var du = cljs.core.logic.get_dom_fd.call(null,s,self__.u);var dv = cljs.core.logic.get_dom_fd.call(null,s,self__.v);if(typeof cljs.core.logic.fd.t21223 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t21223 = (function (dv,du,s,this$,meta21221,v,u,_LT__EQ_c,meta21224){
this.dv = dv;
this.du = du;
this.s = s;
this.this$ = this$;
this.meta21221 = meta21221;
this.v = v;
this.u = u;
this._LT__EQ_c = _LT__EQ_c;
this.meta21224 = meta21224;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.fd.t21223.cljs$lang$type = true;
cljs.core.logic.fd.t21223.cljs$lang$ctorStr = "cljs.core.logic.fd/t21223";
cljs.core.logic.fd.t21223.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.logic.fd/t21223");
});
cljs.core.logic.fd.t21223.prototype.cljs$core$logic$protocols$IRunnable$ = true;
cljs.core.logic.fd.t21223.prototype.cljs$core$logic$protocols$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var and__5145__auto__ = self__.du;if(cljs.core.truth_(and__5145__auto__))
{return self__.dv;
} else
{return and__5145__auto__;
}
});
cljs.core.logic.fd.t21223.prototype.cljs$core$logic$protocols$IEntailed$ = true;
cljs.core.logic.fd.t21223.prototype.cljs$core$logic$protocols$IEntailed$_entailed_QMARK_$arity$1 = (function (_){var self__ = this;
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
cljs.core.logic.fd.t21223.prototype.call = (function (self__,s__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;var umin = cljs.core.logic.fd._lb.call(null,self__.du);var vmax = cljs.core.logic.fd._ub.call(null,self__.dv);return cljs.core.logic.composeg.call(null,cljs.core.logic.fd.process_dom.call(null,self__.u,cljs.core.logic.fd._keep_before.call(null,self__.du,(vmax + 1)),self__.du),cljs.core.logic.fd.process_dom.call(null,self__.v,cljs.core.logic.fd._drop_before.call(null,self__.dv,umin),self__.dv)).call(null,s__$2);
});
cljs.core.logic.fd.t21223.prototype.apply = (function (self__,args21226){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args21226)));
});
cljs.core.logic.fd.t21223.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
var _ = this;var umin = cljs.core.logic.fd._lb.call(null,self__.du);var vmax = cljs.core.logic.fd._ub.call(null,self__.dv);return cljs.core.logic.composeg.call(null,cljs.core.logic.fd.process_dom.call(null,self__.u,cljs.core.logic.fd._keep_before.call(null,self__.du,(vmax + 1)),self__.du),cljs.core.logic.fd.process_dom.call(null,self__.v,cljs.core.logic.fd._drop_before.call(null,self__.dv,umin),self__.dv)).call(null,s__$2);
});
cljs.core.logic.fd.t21223.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21225){var self__ = this;
var _21225__$1 = this;return self__.meta21224;
});
cljs.core.logic.fd.t21223.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21225,meta21224__$1){var self__ = this;
var _21225__$1 = this;return (new cljs.core.logic.fd.t21223(self__.dv,self__.du,self__.s,self__.this$,self__.meta21221,self__.v,self__.u,self__._LT__EQ_c,meta21224__$1));
});
cljs.core.logic.fd.__GT_t21223 = (function __GT_t21223(dv__$1,du__$1,s__$1,this$__$2,meta21221__$1,v__$2,u__$2,_LT__EQ_c__$2,meta21224){return (new cljs.core.logic.fd.t21223(dv__$1,du__$1,s__$1,this$__$2,meta21221__$1,v__$2,u__$2,_LT__EQ_c__$2,meta21224));
});
}
return (new cljs.core.logic.fd.t21223(dv,du,s,this$__$1,self__.meta21221,self__.v,self__.u,self__._LT__EQ_c,null));
});
cljs.core.logic.fd.t21220.prototype.cljs$core$logic$protocols$IEnforceableConstraint$ = true;
cljs.core.logic.fd.t21220.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21222){var self__ = this;
var _21222__$1 = this;return self__.meta21221;
});
cljs.core.logic.fd.t21220.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21222,meta21221__$1){var self__ = this;
var _21222__$1 = this;return (new cljs.core.logic.fd.t21220(self__.v,self__.u,self__._LT__EQ_c,meta21221__$1));
});
cljs.core.logic.fd.__GT_t21220 = (function __GT_t21220(v__$1,u__$1,_LT__EQ_c__$1,meta21221){return (new cljs.core.logic.fd.t21220(v__$1,u__$1,_LT__EQ_c__$1,meta21221));
});
}
return (new cljs.core.logic.fd.t21220(v,u,_LT__EQ_c,null));
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
cljs.core.logic.fd._PLUS_c = (function _PLUS_c(u,v,w){if(typeof cljs.core.logic.fd.t21240 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t21240 = (function (w,v,u,_PLUS_c,meta21241){
this.w = w;
this.v = v;
this.u = u;
this._PLUS_c = _PLUS_c;
this.meta21241 = meta21241;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.fd.t21240.cljs$lang$type = true;
cljs.core.logic.fd.t21240.cljs$lang$ctorStr = "cljs.core.logic.fd/t21240";
cljs.core.logic.fd.t21240.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.logic.fd/t21240");
});
cljs.core.logic.fd.t21240.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$ = true;
cljs.core.logic.fd.t21240.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.core.logic","fd","cljs.core.logic/fd",3673845947),null,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440),null], null), null);
});
cljs.core.logic.fd.t21240.prototype.cljs$core$logic$protocols$IConstraintOp$ = true;
cljs.core.logic.fd.t21240.prototype.cljs$core$logic$protocols$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic.fd","+","cljs.core.logic.fd/+",1528484149,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,837),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,837),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,38)))));
});
cljs.core.logic.fd.t21240.prototype.cljs$core$logic$protocols$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.u,self__.v,self__.w], null);
});
cljs.core.logic.fd.t21240.prototype.cljs$core$logic$protocols$IConstraintStep$ = true;
cljs.core.logic.fd.t21240.prototype.cljs$core$logic$protocols$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;var du = cljs.core.logic.get_dom_fd.call(null,s,self__.u);var dv = cljs.core.logic.get_dom_fd.call(null,s,self__.v);var dw = cljs.core.logic.get_dom_fd.call(null,s,self__.w);if(typeof cljs.core.logic.fd.t21243 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t21243 = (function (v,w,u,s,_PLUS_c,meta21241,du,dw,dv,this$,meta21244){
this.v = v;
this.w = w;
this.u = u;
this.s = s;
this._PLUS_c = _PLUS_c;
this.meta21241 = meta21241;
this.du = du;
this.dw = dw;
this.dv = dv;
this.this$ = this$;
this.meta21244 = meta21244;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.fd.t21243.cljs$lang$type = true;
cljs.core.logic.fd.t21243.cljs$lang$ctorStr = "cljs.core.logic.fd/t21243";
cljs.core.logic.fd.t21243.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.logic.fd/t21243");
});
cljs.core.logic.fd.t21243.prototype.cljs$core$logic$protocols$IRunnable$ = true;
cljs.core.logic.fd.t21243.prototype.cljs$core$logic$protocols$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
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
cljs.core.logic.fd.t21243.prototype.cljs$core$logic$protocols$IEntailed$ = true;
cljs.core.logic.fd.t21243.prototype.cljs$core$logic$protocols$IEntailed$_entailed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (cljs.core.logic.fd.singleton_dom_QMARK_.call(null,self__.du)) && (cljs.core.logic.fd.singleton_dom_QMARK_.call(null,self__.dv)) && (cljs.core.logic.fd.singleton_dom_QMARK_.call(null,self__.dw)) && (cljs.core._EQ_.call(null,(self__.du + self__.dv),self__.dw));
});
cljs.core.logic.fd.t21243.prototype.call = (function (self__,s__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;var vec__21247 = (cljs.core.truth_(self__.dw)?cljs.core.logic.fd.bounds.call(null,self__.dw):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.logic.fd._lb.call(null,self__.du) + cljs.core.logic.fd._lb.call(null,self__.dv)),(cljs.core.logic.fd._ub.call(null,self__.du) + cljs.core.logic.fd._ub.call(null,self__.dv))], null));var wmin = cljs.core.nth.call(null,vec__21247,0,null);var wmax = cljs.core.nth.call(null,vec__21247,1,null);var vec__21248 = (cljs.core.truth_(self__.du)?cljs.core.logic.fd.bounds.call(null,self__.du):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.logic.fd._lb.call(null,self__.dw) - cljs.core.logic.fd._ub.call(null,self__.dv)),(cljs.core.logic.fd._ub.call(null,self__.dw) - cljs.core.logic.fd._lb.call(null,self__.dv))], null));var umin = cljs.core.nth.call(null,vec__21248,0,null);var umax = cljs.core.nth.call(null,vec__21248,1,null);var vec__21249 = (cljs.core.truth_(self__.dv)?cljs.core.logic.fd.bounds.call(null,self__.dv):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.logic.fd._lb.call(null,self__.dw) - cljs.core.logic.fd._ub.call(null,self__.du)),(cljs.core.logic.fd._ub.call(null,self__.dw) - cljs.core.logic.fd._lb.call(null,self__.du))], null));var vmin = cljs.core.nth.call(null,vec__21249,0,null);var vmax = cljs.core.nth.call(null,vec__21249,1,null);var wi = cljs.core.logic.fd.interval.call(null,(umin + vmin),(umax + vmax));var ui = cljs.core.logic.fd.interval.call(null,(wmin - vmax),(wmax - vmin));var vi = cljs.core.logic.fd.interval.call(null,(wmin - umax),(wmax - umin));var temp__4098__auto__ = (cljs.core.truth_((function (){var and__5145__auto__ = wi;if(cljs.core.truth_(and__5145__auto__))
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
cljs.core.logic.fd.t21243.prototype.apply = (function (self__,args21246){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args21246)));
});
cljs.core.logic.fd.t21243.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
var _ = this;var vec__21250 = (cljs.core.truth_(self__.dw)?cljs.core.logic.fd.bounds.call(null,self__.dw):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.logic.fd._lb.call(null,self__.du) + cljs.core.logic.fd._lb.call(null,self__.dv)),(cljs.core.logic.fd._ub.call(null,self__.du) + cljs.core.logic.fd._ub.call(null,self__.dv))], null));var wmin = cljs.core.nth.call(null,vec__21250,0,null);var wmax = cljs.core.nth.call(null,vec__21250,1,null);var vec__21251 = (cljs.core.truth_(self__.du)?cljs.core.logic.fd.bounds.call(null,self__.du):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.logic.fd._lb.call(null,self__.dw) - cljs.core.logic.fd._ub.call(null,self__.dv)),(cljs.core.logic.fd._ub.call(null,self__.dw) - cljs.core.logic.fd._lb.call(null,self__.dv))], null));var umin = cljs.core.nth.call(null,vec__21251,0,null);var umax = cljs.core.nth.call(null,vec__21251,1,null);var vec__21252 = (cljs.core.truth_(self__.dv)?cljs.core.logic.fd.bounds.call(null,self__.dv):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.logic.fd._lb.call(null,self__.dw) - cljs.core.logic.fd._ub.call(null,self__.du)),(cljs.core.logic.fd._ub.call(null,self__.dw) - cljs.core.logic.fd._lb.call(null,self__.du))], null));var vmin = cljs.core.nth.call(null,vec__21252,0,null);var vmax = cljs.core.nth.call(null,vec__21252,1,null);var wi = cljs.core.logic.fd.interval.call(null,(umin + vmin),(umax + vmax));var ui = cljs.core.logic.fd.interval.call(null,(wmin - vmax),(wmax - vmin));var vi = cljs.core.logic.fd.interval.call(null,(wmin - umax),(wmax - umin));var temp__4098__auto__ = (cljs.core.truth_((function (){var and__5145__auto__ = wi;if(cljs.core.truth_(and__5145__auto__))
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
cljs.core.logic.fd.t21243.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21245){var self__ = this;
var _21245__$1 = this;return self__.meta21244;
});
cljs.core.logic.fd.t21243.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21245,meta21244__$1){var self__ = this;
var _21245__$1 = this;return (new cljs.core.logic.fd.t21243(self__.v,self__.w,self__.u,self__.s,self__._PLUS_c,self__.meta21241,self__.du,self__.dw,self__.dv,self__.this$,meta21244__$1));
});
cljs.core.logic.fd.__GT_t21243 = (function __GT_t21243(v__$2,w__$2,u__$2,s__$1,_PLUS_c__$2,meta21241__$1,du__$1,dw__$1,dv__$1,this$__$2,meta21244){return (new cljs.core.logic.fd.t21243(v__$2,w__$2,u__$2,s__$1,_PLUS_c__$2,meta21241__$1,du__$1,dw__$1,dv__$1,this$__$2,meta21244));
});
}
return (new cljs.core.logic.fd.t21243(self__.v,self__.w,self__.u,s,self__._PLUS_c,self__.meta21241,du,dw,dv,this$__$1,null));
});
cljs.core.logic.fd.t21240.prototype.cljs$core$logic$protocols$IEnforceableConstraint$ = true;
cljs.core.logic.fd.t21240.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21242){var self__ = this;
var _21242__$1 = this;return self__.meta21241;
});
cljs.core.logic.fd.t21240.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21242,meta21241__$1){var self__ = this;
var _21242__$1 = this;return (new cljs.core.logic.fd.t21240(self__.w,self__.v,self__.u,self__._PLUS_c,meta21241__$1));
});
cljs.core.logic.fd.__GT_t21240 = (function __GT_t21240(w__$1,v__$1,u__$1,_PLUS_c__$1,meta21241){return (new cljs.core.logic.fd.t21240(w__$1,v__$1,u__$1,_PLUS_c__$1,meta21241));
});
}
return (new cljs.core.logic.fd.t21240(w,v,u,_PLUS_c,null));
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
{var q = cljs.core.quot.call(null,a,n);var G__21269 = t;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"upper","upper",1125403668),G__21269))
{return q;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"lower","lower",1117068915),G__21269))
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
if(typeof cljs.core.logic.fd.t21270 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t21270 = (function (safe_div,w,v,u,_STAR_c,meta21271){
this.safe_div = safe_div;
this.w = w;
this.v = v;
this.u = u;
this._STAR_c = _STAR_c;
this.meta21271 = meta21271;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.fd.t21270.cljs$lang$type = true;
cljs.core.logic.fd.t21270.cljs$lang$ctorStr = "cljs.core.logic.fd/t21270";
cljs.core.logic.fd.t21270.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.logic.fd/t21270");
});
cljs.core.logic.fd.t21270.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$ = true;
cljs.core.logic.fd.t21270.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.core.logic","fd","cljs.core.logic/fd",3673845947),null,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440),null], null), null);
});
cljs.core.logic.fd.t21270.prototype.cljs$core$logic$protocols$IConstraintOp$ = true;
cljs.core.logic.fd.t21270.prototype.cljs$core$logic$protocols$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic.fd","*","cljs.core.logic.fd/*",1528484146,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,921),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,20),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,921),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,40)))));
});
cljs.core.logic.fd.t21270.prototype.cljs$core$logic$protocols$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.u,self__.v,self__.w], null);
});
cljs.core.logic.fd.t21270.prototype.cljs$core$logic$protocols$IConstraintStep$ = true;
cljs.core.logic.fd.t21270.prototype.cljs$core$logic$protocols$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;var du = cljs.core.logic.get_dom_fd.call(null,s,self__.u);var dv = cljs.core.logic.get_dom_fd.call(null,s,self__.v);var dw = cljs.core.logic.get_dom_fd.call(null,s,self__.w);if(typeof cljs.core.logic.fd.t21273 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t21273 = (function (v,w,u,s,du,_STAR_c,dw,dv,meta21271,safe_div,this$,meta21274){
this.v = v;
this.w = w;
this.u = u;
this.s = s;
this.du = du;
this._STAR_c = _STAR_c;
this.dw = dw;
this.dv = dv;
this.meta21271 = meta21271;
this.safe_div = safe_div;
this.this$ = this$;
this.meta21274 = meta21274;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.fd.t21273.cljs$lang$type = true;
cljs.core.logic.fd.t21273.cljs$lang$ctorStr = "cljs.core.logic.fd/t21273";
cljs.core.logic.fd.t21273.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.logic.fd/t21273");
});
cljs.core.logic.fd.t21273.prototype.cljs$core$logic$protocols$IRunnable$ = true;
cljs.core.logic.fd.t21273.prototype.cljs$core$logic$protocols$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
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
cljs.core.logic.fd.t21273.prototype.cljs$core$logic$protocols$IEntailed$ = true;
cljs.core.logic.fd.t21273.prototype.cljs$core$logic$protocols$IEntailed$_entailed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (cljs.core.logic.fd.singleton_dom_QMARK_.call(null,self__.du)) && (cljs.core.logic.fd.singleton_dom_QMARK_.call(null,self__.dv)) && (cljs.core.logic.fd.singleton_dom_QMARK_.call(null,self__.dw)) && (cljs.core._EQ_.call(null,(self__.du * self__.dv),self__.dw));
});
cljs.core.logic.fd.t21273.prototype.call = (function (self__,s__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;var vec__21277 = (cljs.core.truth_(self__.dw)?cljs.core.logic.fd.bounds.call(null,self__.dw):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.logic.fd._lb.call(null,self__.du) * cljs.core.logic.fd._lb.call(null,self__.dv)),(cljs.core.logic.fd._ub.call(null,self__.du) * cljs.core.logic.fd._ub.call(null,self__.dv))], null));var wmin = cljs.core.nth.call(null,vec__21277,0,null);var wmax = cljs.core.nth.call(null,vec__21277,1,null);var vec__21278 = (cljs.core.truth_(self__.du)?cljs.core.logic.fd.bounds.call(null,self__.du):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.safe_div.call(null,cljs.core.logic.fd._ub.call(null,self__.dv),cljs.core.logic.fd._lb.call(null,self__.dw),cljs.core.logic.fd._lb.call(null,self__.dw),new cljs.core.Keyword(null,"lower","lower",1117068915)),self__.safe_div.call(null,cljs.core.logic.fd._lb.call(null,self__.dv),cljs.core.logic.fd._lb.call(null,self__.dw),cljs.core.logic.fd._ub.call(null,self__.dw),new cljs.core.Keyword(null,"upper","upper",1125403668))], null));var umin = cljs.core.nth.call(null,vec__21278,0,null);var umax = cljs.core.nth.call(null,vec__21278,1,null);var vec__21279 = (cljs.core.truth_(self__.dv)?cljs.core.logic.fd.bounds.call(null,self__.dv):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.safe_div.call(null,cljs.core.logic.fd._ub.call(null,self__.du),cljs.core.logic.fd._lb.call(null,self__.dw),cljs.core.logic.fd._lb.call(null,self__.dw),new cljs.core.Keyword(null,"lower","lower",1117068915)),self__.safe_div.call(null,cljs.core.logic.fd._lb.call(null,self__.du),cljs.core.logic.fd._lb.call(null,self__.dw),cljs.core.logic.fd._ub.call(null,self__.dw),new cljs.core.Keyword(null,"upper","upper",1125403668))], null));var vmin = cljs.core.nth.call(null,vec__21279,0,null);var vmax = cljs.core.nth.call(null,vec__21279,1,null);var wi = cljs.core.logic.fd.interval.call(null,(umin * vmin),(umax * vmax));var ui = cljs.core.logic.fd.interval.call(null,self__.safe_div.call(null,vmax,umin,wmin,new cljs.core.Keyword(null,"lower","lower",1117068915)),self__.safe_div.call(null,vmin,umax,wmax,new cljs.core.Keyword(null,"upper","upper",1125403668)));var vi = cljs.core.logic.fd.interval.call(null,self__.safe_div.call(null,umax,vmin,wmin,new cljs.core.Keyword(null,"lower","lower",1117068915)),self__.safe_div.call(null,umin,vmax,wmax,new cljs.core.Keyword(null,"upper","upper",1125403668)));var temp__4098__auto__ = (cljs.core.truth_((function (){var and__5145__auto__ = wi;if(cljs.core.truth_(and__5145__auto__))
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
cljs.core.logic.fd.t21273.prototype.apply = (function (self__,args21276){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args21276)));
});
cljs.core.logic.fd.t21273.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
var _ = this;var vec__21280 = (cljs.core.truth_(self__.dw)?cljs.core.logic.fd.bounds.call(null,self__.dw):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.logic.fd._lb.call(null,self__.du) * cljs.core.logic.fd._lb.call(null,self__.dv)),(cljs.core.logic.fd._ub.call(null,self__.du) * cljs.core.logic.fd._ub.call(null,self__.dv))], null));var wmin = cljs.core.nth.call(null,vec__21280,0,null);var wmax = cljs.core.nth.call(null,vec__21280,1,null);var vec__21281 = (cljs.core.truth_(self__.du)?cljs.core.logic.fd.bounds.call(null,self__.du):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.safe_div.call(null,cljs.core.logic.fd._ub.call(null,self__.dv),cljs.core.logic.fd._lb.call(null,self__.dw),cljs.core.logic.fd._lb.call(null,self__.dw),new cljs.core.Keyword(null,"lower","lower",1117068915)),self__.safe_div.call(null,cljs.core.logic.fd._lb.call(null,self__.dv),cljs.core.logic.fd._lb.call(null,self__.dw),cljs.core.logic.fd._ub.call(null,self__.dw),new cljs.core.Keyword(null,"upper","upper",1125403668))], null));var umin = cljs.core.nth.call(null,vec__21281,0,null);var umax = cljs.core.nth.call(null,vec__21281,1,null);var vec__21282 = (cljs.core.truth_(self__.dv)?cljs.core.logic.fd.bounds.call(null,self__.dv):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.safe_div.call(null,cljs.core.logic.fd._ub.call(null,self__.du),cljs.core.logic.fd._lb.call(null,self__.dw),cljs.core.logic.fd._lb.call(null,self__.dw),new cljs.core.Keyword(null,"lower","lower",1117068915)),self__.safe_div.call(null,cljs.core.logic.fd._lb.call(null,self__.du),cljs.core.logic.fd._lb.call(null,self__.dw),cljs.core.logic.fd._ub.call(null,self__.dw),new cljs.core.Keyword(null,"upper","upper",1125403668))], null));var vmin = cljs.core.nth.call(null,vec__21282,0,null);var vmax = cljs.core.nth.call(null,vec__21282,1,null);var wi = cljs.core.logic.fd.interval.call(null,(umin * vmin),(umax * vmax));var ui = cljs.core.logic.fd.interval.call(null,self__.safe_div.call(null,vmax,umin,wmin,new cljs.core.Keyword(null,"lower","lower",1117068915)),self__.safe_div.call(null,vmin,umax,wmax,new cljs.core.Keyword(null,"upper","upper",1125403668)));var vi = cljs.core.logic.fd.interval.call(null,self__.safe_div.call(null,umax,vmin,wmin,new cljs.core.Keyword(null,"lower","lower",1117068915)),self__.safe_div.call(null,umin,vmax,wmax,new cljs.core.Keyword(null,"upper","upper",1125403668)));var temp__4098__auto__ = (cljs.core.truth_((function (){var and__5145__auto__ = wi;if(cljs.core.truth_(and__5145__auto__))
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
cljs.core.logic.fd.t21273.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21275){var self__ = this;
var _21275__$1 = this;return self__.meta21274;
});
cljs.core.logic.fd.t21273.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21275,meta21274__$1){var self__ = this;
var _21275__$1 = this;return (new cljs.core.logic.fd.t21273(self__.v,self__.w,self__.u,self__.s,self__.du,self__._STAR_c,self__.dw,self__.dv,self__.meta21271,self__.safe_div,self__.this$,meta21274__$1));
});
cljs.core.logic.fd.__GT_t21273 = (function __GT_t21273(v__$2,w__$2,u__$2,s__$1,du__$1,_STAR_c__$2,dw__$1,dv__$1,meta21271__$1,safe_div__$2,this$__$2,meta21274){return (new cljs.core.logic.fd.t21273(v__$2,w__$2,u__$2,s__$1,du__$1,_STAR_c__$2,dw__$1,dv__$1,meta21271__$1,safe_div__$2,this$__$2,meta21274));
});
}
return (new cljs.core.logic.fd.t21273(self__.v,self__.w,self__.u,s,du,self__._STAR_c,dw,dv,self__.meta21271,self__.safe_div,this$__$1,null));
});
cljs.core.logic.fd.t21270.prototype.cljs$core$logic$protocols$IEnforceableConstraint$ = true;
cljs.core.logic.fd.t21270.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21272){var self__ = this;
var _21272__$1 = this;return self__.meta21271;
});
cljs.core.logic.fd.t21270.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21272,meta21271__$1){var self__ = this;
var _21272__$1 = this;return (new cljs.core.logic.fd.t21270(self__.safe_div,self__.w,self__.v,self__.u,self__._STAR_c,meta21271__$1));
});
cljs.core.logic.fd.__GT_t21270 = (function __GT_t21270(safe_div__$1,w__$1,v__$1,u__$1,_STAR_c__$1,meta21271){return (new cljs.core.logic.fd.t21270(safe_div__$1,w__$1,v__$1,u__$1,_STAR_c__$1,meta21271));
});
}
return (new cljs.core.logic.fd.t21270(safe_div,w,v,u,_STAR_c,null));
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
cljs.core.logic.fd._distinctc = (function _distinctc(x,y_STAR_,n_STAR_){if(typeof cljs.core.logic.fd.t21290 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t21290 = (function (n_STAR_,y_STAR_,x,_distinctc,meta21291){
this.n_STAR_ = n_STAR_;
this.y_STAR_ = y_STAR_;
this.x = x;
this._distinctc = _distinctc;
this.meta21291 = meta21291;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.fd.t21290.cljs$lang$type = true;
cljs.core.logic.fd.t21290.cljs$lang$ctorStr = "cljs.core.logic.fd/t21290";
cljs.core.logic.fd.t21290.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.logic.fd/t21290");
});
cljs.core.logic.fd.t21290.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$ = true;
cljs.core.logic.fd.t21290.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440),null], null), null);
});
cljs.core.logic.fd.t21290.prototype.cljs$core$logic$protocols$IConstraintOp$ = true;
cljs.core.logic.fd.t21290.prototype.cljs$core$logic$protocols$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic.fd","-distinct","cljs.core.logic.fd/-distinct",73212723,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,973),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,973),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,46)))));
});
cljs.core.logic.fd.t21290.prototype.cljs$core$logic$protocols$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.x], null);
});
cljs.core.logic.fd.t21290.prototype.cljs$core$logic$protocols$IConstraintStep$ = true;
cljs.core.logic.fd.t21290.prototype.cljs$core$logic$protocols$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;var x__$2 = cljs.core.logic.protocols.walk.call(null,s,self__.x);if(typeof cljs.core.logic.fd.t21293 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t21293 = (function (s,this$,meta21291,n_STAR_,y_STAR_,x,_distinctc,meta21294){
this.s = s;
this.this$ = this$;
this.meta21291 = meta21291;
this.n_STAR_ = n_STAR_;
this.y_STAR_ = y_STAR_;
this.x = x;
this._distinctc = _distinctc;
this.meta21294 = meta21294;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.fd.t21293.cljs$lang$type = true;
cljs.core.logic.fd.t21293.cljs$lang$ctorStr = "cljs.core.logic.fd/t21293";
cljs.core.logic.fd.t21293.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.logic.fd/t21293");
});
cljs.core.logic.fd.t21293.prototype.cljs$core$logic$protocols$IRunnable$ = true;
cljs.core.logic.fd.t21293.prototype.cljs$core$logic$protocols$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.logic.fd.singleton_dom_QMARK_.call(null,self__.x);
});
cljs.core.logic.fd.t21293.prototype.call = (function (self__,s__$2){var self__ = this;
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
var G__21297 = cljs.core.next.call(null,y_STAR___$3);
var G__21298 = s__$4;
y_STAR___$3 = G__21297;
s__$3 = G__21298;
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
cljs.core.logic.fd.t21293.prototype.apply = (function (self__,args21296){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args21296)));
});
cljs.core.logic.fd.t21293.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
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
var G__21299 = cljs.core.next.call(null,y_STAR___$3);
var G__21300 = s__$4;
y_STAR___$3 = G__21299;
s__$3 = G__21300;
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
cljs.core.logic.fd.t21293.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21295){var self__ = this;
var _21295__$1 = this;return self__.meta21294;
});
cljs.core.logic.fd.t21293.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21295,meta21294__$1){var self__ = this;
var _21295__$1 = this;return (new cljs.core.logic.fd.t21293(self__.s,self__.this$,self__.meta21291,self__.n_STAR_,self__.y_STAR_,self__.x,self__._distinctc,meta21294__$1));
});
cljs.core.logic.fd.__GT_t21293 = (function __GT_t21293(s__$1,this$__$2,meta21291__$1,n_STAR___$2,y_STAR___$2,x__$3,_distinctc__$2,meta21294){return (new cljs.core.logic.fd.t21293(s__$1,this$__$2,meta21291__$1,n_STAR___$2,y_STAR___$2,x__$3,_distinctc__$2,meta21294));
});
}
return (new cljs.core.logic.fd.t21293(s,this$__$1,self__.meta21291,self__.n_STAR_,self__.y_STAR_,x__$2,self__._distinctc,null));
});
cljs.core.logic.fd.t21290.prototype.cljs$core$logic$protocols$IEnforceableConstraint$ = true;
cljs.core.logic.fd.t21290.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21292){var self__ = this;
var _21292__$1 = this;return self__.meta21291;
});
cljs.core.logic.fd.t21290.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21292,meta21291__$1){var self__ = this;
var _21292__$1 = this;return (new cljs.core.logic.fd.t21290(self__.n_STAR_,self__.y_STAR_,self__.x,self__._distinctc,meta21291__$1));
});
cljs.core.logic.fd.__GT_t21290 = (function __GT_t21290(n_STAR___$1,y_STAR___$1,x__$1,_distinctc__$1,meta21291){return (new cljs.core.logic.fd.t21290(n_STAR___$1,y_STAR___$1,x__$1,_distinctc__$1,meta21291));
});
}
return (new cljs.core.logic.fd.t21290(n_STAR_,y_STAR_,x,_distinctc,null));
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
var G__21301 = s;
var G__21302 = cljs.core.next.call(null,ls__$1);
f = G__21301;
ls__$1 = G__21302;
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
cljs.core.logic.fd.distinctc = (function distinctc(v_STAR_){if(typeof cljs.core.logic.fd.t21312 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t21312 = (function (v_STAR_,distinctc,meta21313){
this.v_STAR_ = v_STAR_;
this.distinctc = distinctc;
this.meta21313 = meta21313;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.logic.fd.t21312.cljs$lang$type = true;
cljs.core.logic.fd.t21312.cljs$lang$ctorStr = "cljs.core.logic.fd/t21312";
cljs.core.logic.fd.t21312.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.logic.fd/t21312");
});
cljs.core.logic.fd.t21312.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$ = true;
cljs.core.logic.fd.t21312.prototype.cljs$core$logic$protocols$IConstraintWatchedStores$_watched_stores$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440),null], null), null);
});
cljs.core.logic.fd.t21312.prototype.cljs$core$logic$protocols$IConstraintOp$ = true;
cljs.core.logic.fd.t21312.prototype.cljs$core$logic$protocols$IConstraintOp$_rator$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core.logic.fd","distinct","cljs.core.logic.fd/distinct",1952820740,null),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1022),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,1022),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,45)))));
});
cljs.core.logic.fd.t21312.prototype.cljs$core$logic$protocols$IConstraintOp$_rands$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.v_STAR_], null);
});
cljs.core.logic.fd.t21312.prototype.cljs$core$logic$protocols$IConstraintStep$ = true;
cljs.core.logic.fd.t21312.prototype.cljs$core$logic$protocols$IConstraintStep$_step$arity$2 = (function (this$,s){var self__ = this;
var this$__$1 = this;var v_STAR___$2 = cljs.core.logic.protocols.walk.call(null,s,self__.v_STAR_);if(typeof cljs.core.logic.fd.t21315 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.logic.fd.t21315 = (function (s,this$,meta21313,v_STAR_,distinctc,meta21316){
this.s = s;
this.this$ = this$;
this.meta21313 = meta21313;
this.v_STAR_ = v_STAR_;
this.distinctc = distinctc;
this.meta21316 = meta21316;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.logic.fd.t21315.cljs$lang$type = true;
cljs.core.logic.fd.t21315.cljs$lang$ctorStr = "cljs.core.logic.fd/t21315";
cljs.core.logic.fd.t21315.cljs$lang$ctorPrWriter = (function (this__5701__auto__,writer__5702__auto__,opt__5703__auto__){return cljs.core._write.call(null,writer__5702__auto__,"cljs.core.logic.fd/t21315");
});
cljs.core.logic.fd.t21315.prototype.cljs$core$logic$protocols$IRunnable$ = true;
cljs.core.logic.fd.t21315.prototype.cljs$core$logic$protocols$IRunnable$_runnable_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return !(cljs.core.logic.lvar_QMARK_.call(null,self__.v_STAR_));
});
cljs.core.logic.fd.t21315.prototype.call = (function (self__,s__$2){var self__ = this;
var self____$1 = this;var _ = self____$1;var map__21319 = cljs.core.group_by.call(null,cljs.core.logic.lvar_QMARK_,self__.v_STAR_);var map__21319__$1 = ((cljs.core.seq_QMARK_.call(null,map__21319))?cljs.core.apply.call(null,cljs.core.hash_map,map__21319):map__21319);var x_STAR_ = cljs.core.get.call(null,map__21319__$1,true);var n_STAR_ = cljs.core.get.call(null,map__21319__$1,false);var n_STAR___$1 = cljs.core.sort.call(null,cljs.core._LT_,n_STAR_);if(cljs.core.logic.fd.list_sorted_QMARK_.call(null,cljs.core._LT_,n_STAR___$1))
{var x_STAR___$1 = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,x_STAR_);var n_STAR___$2 = cljs.core.into.call(null,cljs.core.sorted_set.call(null),n_STAR___$1);var xs = cljs.core.seq.call(null,x_STAR___$1);var s__$3 = s__$2;while(true){
if(xs)
{var x = cljs.core.first.call(null,xs);var temp__4098__auto__ = cljs.core.logic.fd._distinct.call(null,x,cljs.core.disj.call(null,x_STAR___$1,x),n_STAR___$2).call(null,s__$3);if(cljs.core.truth_(temp__4098__auto__))
{var s__$4 = temp__4098__auto__;{
var G__21321 = cljs.core.next.call(null,xs);
var G__21322 = s__$4;
xs = G__21321;
s__$3 = G__21322;
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
cljs.core.logic.fd.t21315.prototype.apply = (function (self__,args21318){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args21318)));
});
cljs.core.logic.fd.t21315.prototype.cljs$core$IFn$_invoke$arity$1 = (function (s__$2){var self__ = this;
var _ = this;var map__21320 = cljs.core.group_by.call(null,cljs.core.logic.lvar_QMARK_,self__.v_STAR_);var map__21320__$1 = ((cljs.core.seq_QMARK_.call(null,map__21320))?cljs.core.apply.call(null,cljs.core.hash_map,map__21320):map__21320);var x_STAR_ = cljs.core.get.call(null,map__21320__$1,true);var n_STAR_ = cljs.core.get.call(null,map__21320__$1,false);var n_STAR___$1 = cljs.core.sort.call(null,cljs.core._LT_,n_STAR_);if(cljs.core.logic.fd.list_sorted_QMARK_.call(null,cljs.core._LT_,n_STAR___$1))
{var x_STAR___$1 = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,x_STAR_);var n_STAR___$2 = cljs.core.into.call(null,cljs.core.sorted_set.call(null),n_STAR___$1);var xs = cljs.core.seq.call(null,x_STAR___$1);var s__$3 = s__$2;while(true){
if(xs)
{var x = cljs.core.first.call(null,xs);var temp__4098__auto__ = cljs.core.logic.fd._distinct.call(null,x,cljs.core.disj.call(null,x_STAR___$1,x),n_STAR___$2).call(null,s__$3);if(cljs.core.truth_(temp__4098__auto__))
{var s__$4 = temp__4098__auto__;{
var G__21323 = cljs.core.next.call(null,xs);
var G__21324 = s__$4;
xs = G__21323;
s__$3 = G__21324;
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
cljs.core.logic.fd.t21315.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21317){var self__ = this;
var _21317__$1 = this;return self__.meta21316;
});
cljs.core.logic.fd.t21315.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21317,meta21316__$1){var self__ = this;
var _21317__$1 = this;return (new cljs.core.logic.fd.t21315(self__.s,self__.this$,self__.meta21313,self__.v_STAR_,self__.distinctc,meta21316__$1));
});
cljs.core.logic.fd.__GT_t21315 = (function __GT_t21315(s__$1,this$__$2,meta21313__$1,v_STAR___$3,distinctc__$2,meta21316){return (new cljs.core.logic.fd.t21315(s__$1,this$__$2,meta21313__$1,v_STAR___$3,distinctc__$2,meta21316));
});
}
return (new cljs.core.logic.fd.t21315(s,this$__$1,self__.meta21313,v_STAR___$2,self__.distinctc,null));
});
cljs.core.logic.fd.t21312.prototype.cljs$core$logic$protocols$IEnforceableConstraint$ = true;
cljs.core.logic.fd.t21312.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21314){var self__ = this;
var _21314__$1 = this;return self__.meta21313;
});
cljs.core.logic.fd.t21312.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21314,meta21313__$1){var self__ = this;
var _21314__$1 = this;return (new cljs.core.logic.fd.t21312(self__.v_STAR_,self__.distinctc,meta21313__$1));
});
cljs.core.logic.fd.__GT_t21312 = (function __GT_t21312(v_STAR___$1,distinctc__$1,meta21313){return (new cljs.core.logic.fd.t21312(v_STAR___$1,distinctc__$1,meta21313));
});
}
return (new cljs.core.logic.fd.t21312(v_STAR_,distinctc,null));
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
cljs.core.logic.fd.bounded_listo = (function bounded_listo(l,n){return (function (a21342){return (function _inc(){return cljs.core.logic.protocols.mplus.call(null,cljs.core.logic.protocols.bind.call(null,a21342,(function (a__9707__auto__){return (function _inc__$1(){return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__9707__auto__,cljs.core.logic._EQ__EQ_.call(null,cljs.core.List.EMPTY,l)),cljs.core.logic.fd._LT__EQ_.call(null,0,n));
});
})),(function (){return cljs.core.logic.protocols.bind.call(null,a21342,(function (a__9707__auto__){return (function _inc__$1(){var t = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"t","t",-1640531411,null));var h = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"h","h",-1640531423,null));return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__9707__auto__,cljs.core.logic._EQ__EQ_.call(null,cljs.core.logic.lcons.call(null,h,t),l)),(function (a__9707__auto____$1){return (function _inc__$1(){return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__9707__auto____$1,cljs.core.logic._EQ__EQ_.call(null,n,n)),(function (a__9707__auto____$2){return (function _inc__$1(){var m = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"m","m",-1640531418,null));return cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,cljs.core.logic.protocols.bind.call(null,a__9707__auto____$2,(function (){var dom_21358 = cljs.core.logic.fd.interval.call(null,0,Number.MAX_VALUE);return (function (a__9707__auto____$3){return (function _inc__$1(){return cljs.core.logic.protocols.bind.call(null,a__9707__auto____$3,cljs.core.logic.fd.dom.call(null,m,dom_21358));
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
{var vec__21360 = form;var op = cljs.core.nth.call(null,vec__21360,0,null);var args = cljs.core.nthnext.call(null,vec__21360,1);if(cljs.core.truth_((function (){var and__5145__auto__ = cljs.core.logic.fd.binops.call(null,op);if(cljs.core.truth_(and__5145__auto__))
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
{var vec__21364 = form;var op = cljs.core.nth.call(null,vec__21364,0,null);var r1 = cljs.core.nth.call(null,vec__21364,1,null);var r2 = cljs.core.nth.call(null,vec__21364,2,null);var vec__21365 = ((cljs.core.seq_QMARK_.call(null,r1))?(function (){var s = cljs.core.gensym.call(null);cljs.core.swap_BANG_.call(null,vars,cljs.core.conj,s);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,true], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r1,false], null));var outl = cljs.core.nth.call(null,vec__21365,0,null);var outlv_QMARK_ = cljs.core.nth.call(null,vec__21365,1,null);var vec__21366 = ((cljs.core.seq_QMARK_.call(null,r2))?(function (){var s = cljs.core.gensym.call(null);cljs.core.swap_BANG_.call(null,vars,cljs.core.conj,s);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,true], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r2,false], null));var outr = cljs.core.nth.call(null,vec__21366,0,null);var outrv_QMARK_ = cljs.core.nth.call(null,vec__21366,1,null);var op__$1 = cljs.core.logic.fd.binops__GT_fd.call(null,op);return cljs.core.cons.call(null,(cljs.core.truth_(out)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,out),outr),outl),op__$1):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,outr),outl),op__$1)),cljs.core.concat.call(null,((cljs.core.seq_QMARK_.call(null,r1))?eq_STAR_.call(null,r1,vars,(cljs.core.truth_(outlv_QMARK_)?outl:null)):null),((cljs.core.seq_QMARK_.call(null,r2))?eq_STAR_.call(null,r2,vars,(cljs.core.truth_(outrv_QMARK_)?outr:null)):null)));
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
