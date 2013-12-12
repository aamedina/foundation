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
var renderer__2 = (function (root_id,log_fn){var renderer__$1 = foundation.app.render.__GT_DomRenderer.call(null,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),root_id], null)));return (function (deltas,input_queue){var deltas__$1 = cljs.core.remove.call(null,(function (p__87426){var vec__87427 = p__87426;var op = cljs.core.nth.call(null,vec__87427,0,null);var path = cljs.core.nth.call(null,vec__87427,1,null);var _ = cljs.core.nth.call(null,vec__87427,2,null);var ___$1 = cljs.core.nth.call(null,vec__87427,3,null);return (cljs.core.empty_QMARK_.call(null,path)) && (cljs.core.not_EQ_.call(null,op,new cljs.core.Keyword(null,"node-create","node-create",4378585753)));
}),deltas);if(cljs.core.seq.call(null,deltas__$1))
{log_fn.call(null,deltas__$1);
} else
{}
var seq__87428 = cljs.core.seq.call(null,deltas__$1);var chunk__87429 = null;var count__87430 = 0;var i__87431 = 0;while(true){
if((i__87431 < count__87430))
{var d = cljs.core._nth.call(null,chunk__87429,i__87431);var vec__87432_87436 = d;var op_87437 = cljs.core.nth.call(null,vec__87432_87436,0,null);var path_87438 = cljs.core.nth.call(null,vec__87432_87436,1,null);var id_87439 = (function (){var temp__4090__auto__ = foundation.app.render.get_id.call(null,renderer__$1,path_87438);if(cljs.core.truth_(temp__4090__auto__))
{var id = temp__4090__auto__;return id;
} else
{return foundation.app.render.new_id_BANG_.call(null,renderer__$1,path_87438);
}
})();var pid_87440 = foundation.app.render.fix_id.call(null,foundation.app.render.get_parent_id.call(null,renderer__$1,path_87438));cljs.core.println.call(null,d);
var G__87433_87441 = op_87437;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-disable","transform-disable",2862889209),G__87433_87441))
{foundation.app.render.transform_disable.call(null,renderer__$1,d,input_queue,id_87439);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-enable","transform-enable",2076092022),G__87433_87441))
{foundation.app.render.transform_enable.call(null,renderer__$1,d,input_queue,id_87439);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"attr","attr",1016909155),G__87433_87441))
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,id_87439);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",1125876963),G__87433_87441))
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,id_87439);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),G__87433_87441))
{foundation.app.render.node_destroy.call(null,renderer__$1,d,input_queue,id_87439);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-update","node-update",597066342),G__87433_87441))
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,pid_87440);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-create","node-create",4378585753),G__87433_87441))
{foundation.app.render.node_create.call(null,renderer__$1,d,input_queue,pid_87440,id_87439);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op_87437)].join('')));
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
var G__87442 = seq__87428;
var G__87443 = chunk__87429;
var G__87444 = count__87430;
var G__87445 = (i__87431 + 1);
seq__87428 = G__87442;
chunk__87429 = G__87443;
count__87430 = G__87444;
i__87431 = G__87445;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__87428);if(temp__4092__auto__)
{var seq__87428__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__87428__$1))
{var c__14545__auto__ = cljs.core.chunk_first.call(null,seq__87428__$1);{
var G__87446 = cljs.core.chunk_rest.call(null,seq__87428__$1);
var G__87447 = c__14545__auto__;
var G__87448 = cljs.core.count.call(null,c__14545__auto__);
var G__87449 = 0;
seq__87428 = G__87446;
chunk__87429 = G__87447;
count__87430 = G__87448;
i__87431 = G__87449;
continue;
}
} else
{var d = cljs.core.first.call(null,seq__87428__$1);var vec__87434_87450 = d;var op_87451 = cljs.core.nth.call(null,vec__87434_87450,0,null);var path_87452 = cljs.core.nth.call(null,vec__87434_87450,1,null);var id_87453 = (function (){var temp__4090__auto__ = foundation.app.render.get_id.call(null,renderer__$1,path_87452);if(cljs.core.truth_(temp__4090__auto__))
{var id = temp__4090__auto__;return id;
} else
{return foundation.app.render.new_id_BANG_.call(null,renderer__$1,path_87452);
}
})();var pid_87454 = foundation.app.render.fix_id.call(null,foundation.app.render.get_parent_id.call(null,renderer__$1,path_87452));cljs.core.println.call(null,d);
var G__87435_87455 = op_87451;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-disable","transform-disable",2862889209),G__87435_87455))
{foundation.app.render.transform_disable.call(null,renderer__$1,d,input_queue,id_87453);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-enable","transform-enable",2076092022),G__87435_87455))
{foundation.app.render.transform_enable.call(null,renderer__$1,d,input_queue,id_87453);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"attr","attr",1016909155),G__87435_87455))
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,id_87453);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",1125876963),G__87435_87455))
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,id_87453);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),G__87435_87455))
{foundation.app.render.node_destroy.call(null,renderer__$1,d,input_queue,id_87453);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-update","node-update",597066342),G__87435_87455))
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,pid_87454);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-create","node-create",4378585753),G__87435_87455))
{foundation.app.render.node_create.call(null,renderer__$1,d,input_queue,pid_87454,id_87453);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op_87451)].join('')));
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
var G__87456 = cljs.core.next.call(null,seq__87428__$1);
var G__87457 = null;
var G__87458 = 0;
var G__87459 = 0;
seq__87428 = G__87456;
chunk__87429 = G__87457;
count__87430 = G__87458;
i__87431 = G__87459;
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