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
var renderer__2 = (function (root_id,log_fn){var renderer__$1 = foundation.app.render.__GT_DomRenderer.call(null,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),root_id], null)));return (function (deltas,input_queue){var deltas__$1 = cljs.core.remove.call(null,(function (p__87336){var vec__87337 = p__87336;var op = cljs.core.nth.call(null,vec__87337,0,null);var path = cljs.core.nth.call(null,vec__87337,1,null);var _ = cljs.core.nth.call(null,vec__87337,2,null);var ___$1 = cljs.core.nth.call(null,vec__87337,3,null);return (cljs.core.empty_QMARK_.call(null,path)) && (cljs.core.not_EQ_.call(null,op,new cljs.core.Keyword(null,"node-create","node-create",4378585753)));
}),deltas);if(cljs.core.seq.call(null,deltas__$1))
{log_fn.call(null,deltas__$1);
} else
{}
var seq__87338 = cljs.core.seq.call(null,deltas__$1);var chunk__87339 = null;var count__87340 = 0;var i__87341 = 0;while(true){
if((i__87341 < count__87340))
{var d = cljs.core._nth.call(null,chunk__87339,i__87341);var vec__87342_87346 = d;var op_87347 = cljs.core.nth.call(null,vec__87342_87346,0,null);var path_87348 = cljs.core.nth.call(null,vec__87342_87346,1,null);var id_87349 = (function (){var temp__4090__auto__ = foundation.app.render.get_id.call(null,renderer__$1,path_87348);if(cljs.core.truth_(temp__4090__auto__))
{var id = temp__4090__auto__;return id;
} else
{return foundation.app.render.new_id_BANG_.call(null,renderer__$1,path_87348);
}
})();var pid_87350 = foundation.app.render.fix_id.call(null,foundation.app.render.get_parent_id.call(null,renderer__$1,path_87348));var G__87343_87351 = op_87347;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-disable","transform-disable",2862889209),G__87343_87351))
{foundation.app.render.transform_disable.call(null,renderer__$1,d,input_queue,id_87349);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-enable","transform-enable",2076092022),G__87343_87351))
{foundation.app.render.transform_enable.call(null,renderer__$1,d,input_queue,id_87349);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"attr","attr",1016909155),G__87343_87351))
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,id_87349);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",1125876963),G__87343_87351))
{if(cljs.core.empty_QMARK_.call(null,path_87348))
{} else
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,id_87349);
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),G__87343_87351))
{foundation.app.render.node_destroy.call(null,renderer__$1,d,input_queue,id_87349);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-update","node-update",597066342),G__87343_87351))
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,pid_87350);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-create","node-create",4378585753),G__87343_87351))
{foundation.app.render.node_create.call(null,renderer__$1,d,input_queue,pid_87350,id_87349);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op_87347)].join('')));
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
var G__87352 = seq__87338;
var G__87353 = chunk__87339;
var G__87354 = count__87340;
var G__87355 = (i__87341 + 1);
seq__87338 = G__87352;
chunk__87339 = G__87353;
count__87340 = G__87354;
i__87341 = G__87355;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__87338);if(temp__4092__auto__)
{var seq__87338__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__87338__$1))
{var c__14545__auto__ = cljs.core.chunk_first.call(null,seq__87338__$1);{
var G__87356 = cljs.core.chunk_rest.call(null,seq__87338__$1);
var G__87357 = c__14545__auto__;
var G__87358 = cljs.core.count.call(null,c__14545__auto__);
var G__87359 = 0;
seq__87338 = G__87356;
chunk__87339 = G__87357;
count__87340 = G__87358;
i__87341 = G__87359;
continue;
}
} else
{var d = cljs.core.first.call(null,seq__87338__$1);var vec__87344_87360 = d;var op_87361 = cljs.core.nth.call(null,vec__87344_87360,0,null);var path_87362 = cljs.core.nth.call(null,vec__87344_87360,1,null);var id_87363 = (function (){var temp__4090__auto__ = foundation.app.render.get_id.call(null,renderer__$1,path_87362);if(cljs.core.truth_(temp__4090__auto__))
{var id = temp__4090__auto__;return id;
} else
{return foundation.app.render.new_id_BANG_.call(null,renderer__$1,path_87362);
}
})();var pid_87364 = foundation.app.render.fix_id.call(null,foundation.app.render.get_parent_id.call(null,renderer__$1,path_87362));var G__87345_87365 = op_87361;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-disable","transform-disable",2862889209),G__87345_87365))
{foundation.app.render.transform_disable.call(null,renderer__$1,d,input_queue,id_87363);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-enable","transform-enable",2076092022),G__87345_87365))
{foundation.app.render.transform_enable.call(null,renderer__$1,d,input_queue,id_87363);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"attr","attr",1016909155),G__87345_87365))
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,id_87363);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",1125876963),G__87345_87365))
{if(cljs.core.empty_QMARK_.call(null,path_87362))
{} else
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,id_87363);
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),G__87345_87365))
{foundation.app.render.node_destroy.call(null,renderer__$1,d,input_queue,id_87363);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-update","node-update",597066342),G__87345_87365))
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,pid_87364);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-create","node-create",4378585753),G__87345_87365))
{foundation.app.render.node_create.call(null,renderer__$1,d,input_queue,pid_87364,id_87363);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op_87361)].join('')));
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
var G__87366 = cljs.core.next.call(null,seq__87338__$1);
var G__87367 = null;
var G__87368 = 0;
var G__87369 = 0;
seq__87338 = G__87366;
chunk__87339 = G__87367;
count__87340 = G__87368;
i__87341 = G__87369;
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