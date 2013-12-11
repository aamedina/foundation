// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.utils');
goog.require('cljs.core');
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
dommy.utils.dissoc_in = (function dissoc_in(m,p__49999){var vec__50001 = p__49999;var k = cljs.core.nth.call(null,vec__50001,0,null);var ks = cljs.core.nthnext.call(null,vec__50001,1);if(cljs.core.truth_(m))
{var temp__4096__auto__ = (function (){var and__15171__auto__ = ks;if(and__15171__auto__)
{return dissoc_in.call(null,m.call(null,k),ks);
} else
{return and__15171__auto__;
}
})();if(cljs.core.truth_(temp__4096__auto__))
{var res = temp__4096__auto__;return cljs.core.assoc.call(null,m,k,res);
} else
{var res = cljs.core.dissoc.call(null,m,k);if(cljs.core.empty_QMARK_.call(null,res))
{return null;
} else
{return res;
}
}
} else
{return null;
}
});
dommy.utils.__GT_Array = (function __GT_Array(array_like){return Array.prototype.slice.call(array_like);
});

//# sourceMappingURL=utils.js.map