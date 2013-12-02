// Compiled by ClojureScript 0.0-2080
goog.provide('cljs.core.logic.unifier');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.walk');
goog.require('cljs.core.logic');
goog.require('cljs.core.logic');
cljs.core.logic.unifier.lvarq_sym_QMARK_ = (function lvarq_sym_QMARK_(s){return ((s instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,[cljs.core.str(s)].join('')),"?"));
});
cljs.core.logic.unifier.proc_lvar = (function proc_lvar(lvar_expr,store){var v = (function (){var temp__4096__auto__ = cljs.core.deref.call(null,store).call(null,lvar_expr);if(cljs.core.truth_(temp__4096__auto__))
{var u = temp__4096__auto__;return u;
} else
{return cljs.core.logic.lvar.call(null,lvar_expr,false);
}
})();cljs.core.swap_BANG_.call(null,store,cljs.core.assoc,lvar_expr,v);
return v;
});
cljs.core.logic.unifier.lcons_expr_QMARK_ = (function lcons_expr_QMARK_(expr){var and__7718__auto__ = cljs.core.seq_QMARK_.call(null,expr);if(and__7718__auto__)
{return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,".",".",-1640531481,null),null], null), null),cljs.core.set.call(null,expr));
} else
{return and__7718__auto__;
}
});
cljs.core.logic.unifier.replace_lvar = (function replace_lvar(store){return (function (expr){if(cljs.core.logic.unifier.lvarq_sym_QMARK_.call(null,expr))
{return cljs.core.logic.unifier.proc_lvar.call(null,expr,store);
} else
{if(cljs.core.truth_(cljs.core.logic.unifier.lcons_expr_QMARK_.call(null,expr)))
{return cljs.core.logic.unifier.prep_STAR_.call(null,expr,store);
} else
{return expr;
}
}
});
});
cljs.core.logic.unifier.prep_STAR_ = (function() {
var prep_STAR_ = null;
var prep_STAR___2 = (function (expr,store){return prep_STAR_.call(null,expr,store,false,false);
});
var prep_STAR___3 = (function (expr,store,lcons_QMARK_){return prep_STAR_.call(null,expr,store,lcons_QMARK_,false);
});
var prep_STAR___4 = (function (expr,store,lcons_QMARK_,last_QMARK_){var expr__$1 = (cljs.core.truth_((function (){var and__7718__auto__ = last_QMARK_;if(cljs.core.truth_(and__7718__auto__))
{return cljs.core.seq.call(null,expr);
} else
{return and__7718__auto__;
}
})())?cljs.core.first.call(null,expr):expr);if(cljs.core.logic.unifier.lvarq_sym_QMARK_.call(null,expr__$1))
{return cljs.core.logic.unifier.proc_lvar.call(null,expr__$1,store);
} else
{if(cljs.core.seq_QMARK_.call(null,expr__$1))
{if(cljs.core.truth_((function (){var or__7730__auto__ = lcons_QMARK_;if(cljs.core.truth_(or__7730__auto__))
{return or__7730__auto__;
} else
{return cljs.core.logic.unifier.lcons_expr_QMARK_.call(null,expr__$1);
}
})()))
{var vec__621696 = expr__$1;var f = cljs.core.nth.call(null,vec__621696,0,null);var n = cljs.core.nthnext.call(null,vec__621696,1);var skip = cljs.core._EQ_.call(null,f,new cljs.core.Symbol(null,".",".",-1640531481,null));var tail = prep_STAR_.call(null,n,store,lcons_QMARK_,skip);if(skip)
{return tail;
} else
{return cljs.core.logic.lcons.call(null,prep_STAR_.call(null,f,store),tail);
}
} else
{return cljs.core.logic._walk_term.call(null,expr__$1,cljs.core.logic.unifier.replace_lvar.call(null,store));
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return expr__$1;
} else
{return null;
}
}
}
});
prep_STAR_ = function(expr,store,lcons_QMARK_,last_QMARK_){
switch(arguments.length){
case 2:
return prep_STAR___2.call(this,expr,store);
case 3:
return prep_STAR___3.call(this,expr,store,lcons_QMARK_);
case 4:
return prep_STAR___4.call(this,expr,store,lcons_QMARK_,last_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prep_STAR_.cljs$core$IFn$_invoke$arity$2 = prep_STAR___2;
prep_STAR_.cljs$core$IFn$_invoke$arity$3 = prep_STAR___3;
prep_STAR_.cljs$core$IFn$_invoke$arity$4 = prep_STAR___4;
return prep_STAR_;
})()
;
/**
* Prep a quoted expression. All symbols preceded by ? will
* be replaced with logic vars.
*/
cljs.core.logic.unifier.prep = (function prep(expr){var lvars = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prepped = ((cljs.core.logic.unifier.lvarq_sym_QMARK_.call(null,expr))?cljs.core.logic.unifier.proc_lvar.call(null,expr,lvars):(cljs.core.truth_(cljs.core.logic.unifier.lcons_expr_QMARK_.call(null,expr))?cljs.core.logic.unifier.prep_STAR_.call(null,expr,lvars,true):((new cljs.core.Keyword(null,"else","else",1017020587))?cljs.core.logic._walk_term.call(null,expr,cljs.core.logic.unifier.replace_lvar.call(null,lvars)):null)));if((function (){var G__621698 = prepped;if(G__621698)
{var bit__8356__auto__ = (G__621698.cljs$lang$protocol_mask$partition0$ & 131072);if((bit__8356__auto__) || (G__621698.cljs$core$IMeta$))
{return true;
} else
{if((!G__621698.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMeta,G__621698);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMeta,G__621698);
}
})())
{return cljs.core.with_meta.call(null,prepped,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.core.logic.unifier","lvars","cljs.core.logic.unifier/lvars",1819622758),cljs.core.keys.call(null,cljs.core.deref.call(null,lvars))], null));
} else
{return prepped;
}
});
cljs.core.logic.unifier.queue_constraint = (function queue_constraint(s,c,vs){if(cljs.core.vector_QMARK_.call(null,vs))
{return cljs.core.logic._queue.call(null,s,cljs.core.logic._unwrap.call(null,cljs.core.apply.call(null,c,cljs.core.map.call(null,(function (p1__621699_SHARP_){return cljs.core.logic.lvar.call(null,p1__621699_SHARP_,false);
}),vs))));
} else
{if(cljs.core.set_QMARK_.call(null,vs))
{return cljs.core.reduce.call(null,(function (s__$1,v){return cljs.core.logic._queue.call(null,s__$1,cljs.core.logic._unwrap.call(null,c.call(null,cljs.core.logic.lvar.call(null,v,false))));
}),s,vs);
} else
{if((vs instanceof cljs.core.Symbol))
{return cljs.core.logic._queue.call(null,s,cljs.core.logic._unwrap.call(null,cljs.core.apply.call(null,c,cljs.core.map.call(null,(function (p1__621700_SHARP_){return cljs.core.logic.lvar.call(null,p1__621700_SHARP_,false);
}),cljs.core._conj.call(null,cljs.core.List.EMPTY,vs)))));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.ex_info.call(null,[cljs.core.str("Only symbol, set of symbols, or vector of symbols allowed "),cljs.core.str("on left hand side")].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else
{return null;
}
}
}
}
});
cljs.core.logic.unifier.queue_constraints = (function queue_constraints(s,p__621701){var vec__621703 = p__621701;var vs = cljs.core.nth.call(null,vec__621703,0,null);var cs = cljs.core.nth.call(null,vec__621703,1,null);var cs__$1 = ((!(cljs.core.sequential_QMARK_.call(null,cs)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cs], null):cs);return cljs.core.reduce.call(null,(function (s__$1,c){return cljs.core.logic.unifier.queue_constraint.call(null,s__$1,c,vs);
}),s,cs__$1);
});
cljs.core.logic.unifier._unify_STAR_ = (function _unify_STAR_(init_s,u,w){return cljs.core.first.call(null,cljs.core.logic.take_STAR_.call(null,(function (){return (function (a__18696__auto__){return (new cljs.core.logic.Inc((function (){var q = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"q","q",-1640531414,null));return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__18696__auto__,(function (a__18663__auto__){var has_cs_QMARK___18664__auto__ = (cljs.core.count.call(null,a__18663__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify.call(null,((has_cs_QMARK___18664__auto__)?(new cljs.core.logic.Substitutions(a__18663__auto__.s,cljs.core.PersistentVector.EMPTY,a__18663__auto__.ts,a__18663__auto__.cs,a__18663__auto__.cq,a__18663__auto__.cqs,a__18663__auto__.oc,a__18663__auto__._meta)):a__18663__auto__),u,w);if(cljs.core.truth_(temp__4098__auto__))
{var ap__18665__auto__ = temp__4098__auto__;var vs__18666__auto__ = ((has_cs_QMARK___18664__auto__)?ap__18665__auto__.vs:null);var changed_QMARK___18667__auto__ = (cljs.core.count.call(null,vs__18666__auto__) > 0);if(changed_QMARK___18667__auto__)
{return cljs.core.logic.run_constraints_STAR_.call(null,vs__18666__auto__,ap__18665__auto__.cs,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440)).call(null,(new cljs.core.logic.Substitutions(ap__18665__auto__.s,null,ap__18665__auto__.ts,ap__18665__auto__.cs,ap__18665__auto__.cq,ap__18665__auto__.cqs,ap__18665__auto__.oc,ap__18665__auto__._meta)));
} else
{return ap__18665__auto__;
}
} else
{return null;
}
})),(function (a__18663__auto__){var has_cs_QMARK___18664__auto__ = (cljs.core.count.call(null,a__18663__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify.call(null,((has_cs_QMARK___18664__auto__)?(new cljs.core.logic.Substitutions(a__18663__auto__.s,cljs.core.PersistentVector.EMPTY,a__18663__auto__.ts,a__18663__auto__.cs,a__18663__auto__.cq,a__18663__auto__.cqs,a__18663__auto__.oc,a__18663__auto__._meta)):a__18663__auto__),q,u);if(cljs.core.truth_(temp__4098__auto__))
{var ap__18665__auto__ = temp__4098__auto__;var vs__18666__auto__ = ((has_cs_QMARK___18664__auto__)?ap__18665__auto__.vs:null);var changed_QMARK___18667__auto__ = (cljs.core.count.call(null,vs__18666__auto__) > 0);if(changed_QMARK___18667__auto__)
{return cljs.core.logic.run_constraints_STAR_.call(null,vs__18666__auto__,ap__18665__auto__.cs,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440)).call(null,(new cljs.core.logic.Substitutions(ap__18665__auto__.s,null,ap__18665__auto__.ts,ap__18665__auto__.cs,ap__18665__auto__.cq,ap__18665__auto__.cqs,ap__18665__auto__.oc,ap__18665__auto__._meta)));
} else
{return ap__18665__auto__;
}
} else
{return null;
}
})),(function (a){return cljs.core.logic.fix_constraints.call(null,a);
})),cljs.core.logic.reifyg.call(null,q));
})));
}).call(null,init_s);
})));
});
cljs.core.logic.unifier.init_s = (function init_s(opts,s){var s__$1 = cljs.core.reduce.call(null,(function (s__$1,p__621706){var vec__621707 = p__621706;var k = cljs.core.nth.call(null,vec__621707,0,null);var v = cljs.core.nth.call(null,vec__621707,1,null);return ((function (vec__621707,k,v){
return (function (a__18663__auto__){var has_cs_QMARK___18664__auto__ = (cljs.core.count.call(null,a__18663__auto__.cs) > 0);var temp__4098__auto__ = cljs.core.logic._unify.call(null,((has_cs_QMARK___18664__auto__)?(new cljs.core.logic.Substitutions(a__18663__auto__.s,cljs.core.PersistentVector.EMPTY,a__18663__auto__.ts,a__18663__auto__.cs,a__18663__auto__.cq,a__18663__auto__.cqs,a__18663__auto__.oc,a__18663__auto__._meta)):a__18663__auto__),k,v);if(cljs.core.truth_(temp__4098__auto__))
{var ap__18665__auto__ = temp__4098__auto__;var vs__18666__auto__ = ((has_cs_QMARK___18664__auto__)?ap__18665__auto__.vs:null);var changed_QMARK___18667__auto__ = (cljs.core.count.call(null,vs__18666__auto__) > 0);if(changed_QMARK___18667__auto__)
{return cljs.core.logic.run_constraints_STAR_.call(null,vs__18666__auto__,ap__18665__auto__.cs,new cljs.core.Keyword("cljs.core.logic","subst","cljs.core.logic/subst",3549233440)).call(null,(new cljs.core.logic.Substitutions(ap__18665__auto__.s,null,ap__18665__auto__.ts,ap__18665__auto__.cs,ap__18665__auto__.cq,ap__18665__auto__.cqs,ap__18665__auto__.oc,ap__18665__auto__._meta)));
} else
{return ap__18665__auto__;
}
} else
{return null;
}
});})(vec__621707,k,v))
.call(null,s__$1);
}),s,new cljs.core.Keyword(null,"as","as",1013907364).cljs$core$IFn$_invoke$arity$1(opts));return cljs.core.reduce.call(null,cljs.core.logic.unifier.queue_constraints,cljs.core.with_meta.call(null,s__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",4368745730),(function (v,rs){return rs;
})], null)),new cljs.core.Keyword(null,"when","when",1017552556).cljs$core$IFn$_invoke$arity$1(opts));
});
/**
* Unify the terms ts.
*/
cljs.core.logic.unifier.unify_STAR_ = (function() {
var unify_STAR_ = null;
var unify_STAR___1 = (function (ts){return unify_STAR_.call(null,cljs.core.PersistentArrayMap.EMPTY,ts);
});
var unify_STAR___2 = (function (opts,ts){var init_s = cljs.core.logic.unifier.init_s.call(null,opts,cljs.core.logic.empty_s);return cljs.core.logic.unifier._unify_STAR_.call(null,cljs.core.vary_meta.call(null,init_s,cljs.core.assoc,new cljs.core.Keyword(null,"reify-vars","reify-vars",4368745730),false),cljs.core.reduce.call(null,(function (p1__621708_SHARP_,p2__621709_SHARP_){return cljs.core.logic.unifier._unify_STAR_.call(null,init_s,p1__621708_SHARP_,p2__621709_SHARP_);
}),cljs.core.butlast.call(null,ts)),cljs.core.last.call(null,ts));
});
unify_STAR_ = function(opts,ts){
switch(arguments.length){
case 1:
return unify_STAR___1.call(this,opts);
case 2:
return unify_STAR___2.call(this,opts,ts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unify_STAR_.cljs$core$IFn$_invoke$arity$1 = unify_STAR___1;
unify_STAR_.cljs$core$IFn$_invoke$arity$2 = unify_STAR___2;
return unify_STAR_;
})()
;
/**
* Return the unifier that unifies terms ts.
* All terms in ts should prepped terms.
*/
cljs.core.logic.unifier.unifier_STAR_ = (function() {
var unifier_STAR_ = null;
var unifier_STAR___1 = (function (ts){return unifier_STAR_.call(null,cljs.core.PersistentArrayMap.EMPTY,ts);
});
var unifier_STAR___2 = (function (opts,ts){var _unifier_STAR_ = (function _unifier_STAR_(s,u,w){var s__$1 = cljs.core.logic.fix_constraints.call(null,cljs.core.logic._unify.call(null,cljs.core.with_meta.call(null,s,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",4368745730),false], null)),u,w));if(cljs.core.truth_(s__$1))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__621724){var vec__621725 = p__621724;var sym = cljs.core.nth.call(null,vec__621725,0,null);var var$ = cljs.core.nth.call(null,vec__621725,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,cljs.core.logic._reify.call(null,s__$1,var$)], null);
}),cljs.core.filter.call(null,(function (p__621726){var vec__621727 = p__621726;var sym = cljs.core.nth.call(null,vec__621727,0,null);var var$ = cljs.core.nth.call(null,vec__621727,1,null);return cljs.core.not_EQ_.call(null,cljs.core.logic._walk.call(null,s__$1,var$),var$);
}),cljs.core.map.call(null,(function (sym){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,cljs.core.logic.lvar.call(null,sym,false)], null);
}),new cljs.core.Keyword(null,"lvars","lvars",1117256714).cljs$core$IFn$_invoke$arity$1(opts)))));
} else
{return null;
}
});
var init_s = cljs.core.logic.unifier.init_s.call(null,opts,cljs.core.logic.empty_s);return cljs.core.reduce.call(null,(function (p1__621710_SHARP_,p2__621711_SHARP_){return _unifier_STAR_.call(null,init_s,p1__621710_SHARP_,p2__621711_SHARP_);
}),ts);
});
unifier_STAR_ = function(opts,ts){
switch(arguments.length){
case 1:
return unifier_STAR___1.call(this,opts);
case 2:
return unifier_STAR___2.call(this,opts,ts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unifier_STAR_.cljs$core$IFn$_invoke$arity$1 = unifier_STAR___1;
unifier_STAR_.cljs$core$IFn$_invoke$arity$2 = unifier_STAR___2;
return unifier_STAR_;
})()
;
/**
* Unify the terms ts returning a the value that represents their
* unificaiton. Will prep the terms.
*/
cljs.core.logic.unifier.unify = (function() {
var unify = null;
var unify__1 = (function (ts){return unify.call(null,cljs.core.PersistentArrayMap.EMPTY,ts);
});
var unify__2 = (function (opts,ts){var opts__$1 = ((cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"as","as",1013907364)))?cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"as","as",1013907364),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__621730){var vec__621731 = p__621730;var k = cljs.core.nth.call(null,vec__621731,0,null);var v = cljs.core.nth.call(null,vec__621731,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.logic.lvar.call(null,k,false),cljs.core.logic.unifier.prep.call(null,v)], null);
}),new cljs.core.Keyword(null,"as","as",1013907364).cljs$core$IFn$_invoke$arity$1(opts)))):opts);return cljs.core.logic.unifier.unify_STAR_.call(null,opts__$1,cljs.core.map.call(null,cljs.core.logic.unifier.prep,ts));
});
unify = function(opts,ts){
switch(arguments.length){
case 1:
return unify__1.call(this,opts);
case 2:
return unify__2.call(this,opts,ts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unify.cljs$core$IFn$_invoke$arity$1 = unify__1;
unify.cljs$core$IFn$_invoke$arity$2 = unify__2;
return unify;
})()
;
/**
* Return the unifier for terms ts. Will prep the terms.
*/
cljs.core.logic.unifier.unifier = (function() {
var unifier = null;
var unifier__1 = (function (ts){return unifier.call(null,cljs.core.PersistentArrayMap.EMPTY,ts);
});
var unifier__2 = (function (opts,ts){var opts__$1 = ((cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"as","as",1013907364)))?cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"as","as",1013907364),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__621735){var vec__621736 = p__621735;var k = cljs.core.nth.call(null,vec__621736,0,null);var v = cljs.core.nth.call(null,vec__621736,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.logic.lvar.call(null,k,false),cljs.core.logic.unifier.prep.call(null,v)], null);
}),new cljs.core.Keyword(null,"as","as",1013907364).cljs$core$IFn$_invoke$arity$1(opts)))):opts);var ts_SINGLEQUOTE_ = cljs.core.map.call(null,cljs.core.logic.unifier.prep,ts);var lvars = cljs.core.reduce.call(null,cljs.core.into,cljs.core.map.call(null,((function (opts__$1,ts_SINGLEQUOTE_){
return (function (p1__621732_SHARP_){return new cljs.core.Keyword("cljs.core.logic.unifier","lvars","cljs.core.logic.unifier/lvars",1819622758).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p1__621732_SHARP_));
});})(opts__$1,ts_SINGLEQUOTE_))
,cljs.core.concat.call(null,ts_SINGLEQUOTE_,cljs.core.map.call(null,cljs.core.val,new cljs.core.Keyword(null,"as","as",1013907364).cljs$core$IFn$_invoke$arity$1(opts__$1)))));return cljs.core.logic.unifier.unifier_STAR_.call(null,cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"lvars","lvars",1117256714),lvars),cljs.core.map.call(null,cljs.core.logic.unifier.prep,ts));
});
unifier = function(opts,ts){
switch(arguments.length){
case 1:
return unifier__1.call(this,opts);
case 2:
return unifier__2.call(this,opts,ts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unifier.cljs$core$IFn$_invoke$arity$1 = unifier__1;
unifier.cljs$core$IFn$_invoke$arity$2 = unifier__2;
return unifier;
})()
;

//# sourceMappingURL=unifier.js.map