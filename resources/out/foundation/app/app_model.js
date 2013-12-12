// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.app.app_model');
goog.require('cljs.core');
goog.require('foundation.app.render');
goog.require('cljs.core.async');
goog.require('clojure.zip');
goog.require('enfocus.events');
goog.require('enfocus.events');
goog.require('foundation.app.render');
goog.require('clojure.zip');
goog.require('enfocus.core');
goog.require('dommy.core');
goog.require('enfocus.core');
goog.require('foundation.app.util');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.match');
goog.require('clojure.browser.repl');
goog.require('clojure.set');
goog.require('cljs.core.match');
goog.require('cljs.core.async');
goog.require('foundation.app.util');
goog.require('foundation.app.render');
goog.require('dommy.core');
foundation.app.app_model.log_fn = (function log_fn(deltas){return foundation.app.util.log_group.call(null,"Rendering Deltas",deltas);
});
foundation.app.app_model.renderer = (function() {
var renderer = null;
var renderer__1 = (function (root_id){return renderer.call(null,root_id,cljs.core.identity);
});
var renderer__2 = (function (root_id,log_fn){var renderer__$1 = foundation.app.render.__GT_DomRenderer.call(null,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),root_id], null)));return (function (deltas,input_queue){log_fn.call(null,deltas);
var seq__27447 = cljs.core.seq.call(null,deltas);var chunk__27448 = null;var count__27449 = 0;var i__27450 = 0;while(true){
if((i__27450 < count__27449))
{var d = cljs.core._nth.call(null,chunk__27448,i__27450);var vec__27451_27455 = d;var op_27456 = cljs.core.nth.call(null,vec__27451_27455,0,null);var path_27457 = cljs.core.nth.call(null,vec__27451_27455,1,null);var id_27458 = (function (){var temp__4090__auto__ = foundation.app.render.get_id.call(null,renderer__$1,path_27457);if(cljs.core.truth_(temp__4090__auto__))
{var id = temp__4090__auto__;return id;
} else
{return foundation.app.render.new_id_BANG_.call(null,renderer__$1,path_27457);
}
})();var parent_id_27459 = foundation.app.render.fix_id.call(null,foundation.app.render.get_parent_id.call(null,renderer__$1,path_27457));var G__27452_27460 = op_27456;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-disable","transform-disable",2862889209),G__27452_27460))
{foundation.app.render.transform_disable.call(null,renderer__$1,d,input_queue,id_27458,document.querySelector(dommy.core.selector.call(null,id_27458)));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-enable","transform-enable",2076092022),G__27452_27460))
{foundation.app.render.transform_enable.call(null,renderer__$1,d,input_queue,id_27458,document.querySelector(dommy.core.selector.call(null,id_27458)));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"attr","attr",1016909155),G__27452_27460))
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,id_27458,document.querySelector(dommy.core.selector.call(null,id_27458)));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",1125876963),G__27452_27460))
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,id_27458,document.querySelector(dommy.core.selector.call(null,id_27458)));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),G__27452_27460))
{foundation.app.render.node_destroy.call(null,renderer__$1,d,input_queue,id_27458);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-update","node-update",597066342),G__27452_27460))
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,parent_id_27459);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-create","node-create",4378585753),G__27452_27460))
{foundation.app.render.node_create.call(null,renderer__$1,d,input_queue,parent_id_27459,id_27458);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op_27456)].join('')));
} else
{}
}
}
}
}
}
}
}
{
var G__27461 = seq__27447;
var G__27462 = chunk__27448;
var G__27463 = count__27449;
var G__27464 = (i__27450 + 1);
seq__27447 = G__27461;
chunk__27448 = G__27462;
count__27449 = G__27463;
i__27450 = G__27464;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__27447);if(temp__4092__auto__)
{var seq__27447__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27447__$1))
{var c__14545__auto__ = cljs.core.chunk_first.call(null,seq__27447__$1);{
var G__27465 = cljs.core.chunk_rest.call(null,seq__27447__$1);
var G__27466 = c__14545__auto__;
var G__27467 = cljs.core.count.call(null,c__14545__auto__);
var G__27468 = 0;
seq__27447 = G__27465;
chunk__27448 = G__27466;
count__27449 = G__27467;
i__27450 = G__27468;
continue;
}
} else
{var d = cljs.core.first.call(null,seq__27447__$1);var vec__27453_27469 = d;var op_27470 = cljs.core.nth.call(null,vec__27453_27469,0,null);var path_27471 = cljs.core.nth.call(null,vec__27453_27469,1,null);var id_27472 = (function (){var temp__4090__auto__ = foundation.app.render.get_id.call(null,renderer__$1,path_27471);if(cljs.core.truth_(temp__4090__auto__))
{var id = temp__4090__auto__;return id;
} else
{return foundation.app.render.new_id_BANG_.call(null,renderer__$1,path_27471);
}
})();var parent_id_27473 = foundation.app.render.fix_id.call(null,foundation.app.render.get_parent_id.call(null,renderer__$1,path_27471));var G__27454_27474 = op_27470;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-disable","transform-disable",2862889209),G__27454_27474))
{foundation.app.render.transform_disable.call(null,renderer__$1,d,input_queue,id_27472,document.querySelector(dommy.core.selector.call(null,id_27472)));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-enable","transform-enable",2076092022),G__27454_27474))
{foundation.app.render.transform_enable.call(null,renderer__$1,d,input_queue,id_27472,document.querySelector(dommy.core.selector.call(null,id_27472)));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"attr","attr",1016909155),G__27454_27474))
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,id_27472,document.querySelector(dommy.core.selector.call(null,id_27472)));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",1125876963),G__27454_27474))
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,id_27472,document.querySelector(dommy.core.selector.call(null,id_27472)));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),G__27454_27474))
{foundation.app.render.node_destroy.call(null,renderer__$1,d,input_queue,id_27472);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-update","node-update",597066342),G__27454_27474))
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,parent_id_27473);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-create","node-create",4378585753),G__27454_27474))
{foundation.app.render.node_create.call(null,renderer__$1,d,input_queue,parent_id_27473,id_27472);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op_27470)].join('')));
} else
{}
}
}
}
}
}
}
}
{
var G__27475 = cljs.core.next.call(null,seq__27447__$1);
var G__27476 = null;
var G__27477 = 0;
var G__27478 = 0;
seq__27447 = G__27475;
chunk__27448 = G__27476;
count__27449 = G__27477;
i__27450 = G__27478;
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
});
renderer = function(root_id,log_fn){
switch(arguments.length){
case 1:
return renderer__1.call(this,root_id);
case 2:
return renderer__2.call(this,root_id,log_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
renderer.cljs$core$IFn$_invoke$arity$1 = renderer__1;
renderer.cljs$core$IFn$_invoke$arity$2 = renderer__2;
return renderer;
})()
;

//# sourceMappingURL=app_model.js.map