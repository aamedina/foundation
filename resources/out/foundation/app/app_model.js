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
var renderer__2 = (function (root_id,log_fn){var renderer__$1 = foundation.app.render.__GT_DomRenderer.call(null,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),root_id], null)));return (function (deltas,input_queue){var deltas__$1 = cljs.core.remove.call(null,(function (p__87812){var vec__87813 = p__87812;var op = cljs.core.nth.call(null,vec__87813,0,null);var path = cljs.core.nth.call(null,vec__87813,1,null);var _ = cljs.core.nth.call(null,vec__87813,2,null);var ___$1 = cljs.core.nth.call(null,vec__87813,3,null);return (cljs.core.empty_QMARK_.call(null,path)) && (cljs.core.not_EQ_.call(null,op,new cljs.core.Keyword(null,"node-create","node-create",4378585753)));
}),deltas);if(cljs.core.seq.call(null,deltas__$1))
{log_fn.call(null,deltas__$1);
} else
{}
var seq__87814 = cljs.core.seq.call(null,deltas__$1);var chunk__87815 = null;var count__87816 = 0;var i__87817 = 0;while(true){
if((i__87817 < count__87816))
{var d = cljs.core._nth.call(null,chunk__87815,i__87817);var vec__87818_87822 = d;var op_87823 = cljs.core.nth.call(null,vec__87818_87822,0,null);var path_87824 = cljs.core.nth.call(null,vec__87818_87822,1,null);var id_87825 = (function (){var temp__4090__auto__ = foundation.app.render.get_id.call(null,renderer__$1,path_87824);if(cljs.core.truth_(temp__4090__auto__))
{var id = temp__4090__auto__;return id;
} else
{return foundation.app.render.new_id_BANG_.call(null,renderer__$1,path_87824);
}
})();var pid_87826 = foundation.app.render.get_parent_id.call(null,renderer__$1,path_87824);var G__87819_87827 = op_87823;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-disable","transform-disable",2862889209),G__87819_87827))
{foundation.app.render.transform_disable.call(null,renderer__$1,d,input_queue,id_87825);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-enable","transform-enable",2076092022),G__87819_87827))
{foundation.app.render.transform_enable.call(null,renderer__$1,d,input_queue,id_87825);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"attr","attr",1016909155),G__87819_87827))
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,id_87825);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",1125876963),G__87819_87827))
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,id_87825);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),G__87819_87827))
{foundation.app.render.node_destroy.call(null,renderer__$1,d,input_queue,id_87825);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-update","node-update",597066342),G__87819_87827))
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,pid_87826);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-create","node-create",4378585753),G__87819_87827))
{foundation.app.render.node_create.call(null,renderer__$1,d,input_queue,pid_87826,id_87825);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op_87823)].join('')));
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
var G__87828 = seq__87814;
var G__87829 = chunk__87815;
var G__87830 = count__87816;
var G__87831 = (i__87817 + 1);
seq__87814 = G__87828;
chunk__87815 = G__87829;
count__87816 = G__87830;
i__87817 = G__87831;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__87814);if(temp__4092__auto__)
{var seq__87814__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__87814__$1))
{var c__14545__auto__ = cljs.core.chunk_first.call(null,seq__87814__$1);{
var G__87832 = cljs.core.chunk_rest.call(null,seq__87814__$1);
var G__87833 = c__14545__auto__;
var G__87834 = cljs.core.count.call(null,c__14545__auto__);
var G__87835 = 0;
seq__87814 = G__87832;
chunk__87815 = G__87833;
count__87816 = G__87834;
i__87817 = G__87835;
continue;
}
} else
{var d = cljs.core.first.call(null,seq__87814__$1);var vec__87820_87836 = d;var op_87837 = cljs.core.nth.call(null,vec__87820_87836,0,null);var path_87838 = cljs.core.nth.call(null,vec__87820_87836,1,null);var id_87839 = (function (){var temp__4090__auto__ = foundation.app.render.get_id.call(null,renderer__$1,path_87838);if(cljs.core.truth_(temp__4090__auto__))
{var id = temp__4090__auto__;return id;
} else
{return foundation.app.render.new_id_BANG_.call(null,renderer__$1,path_87838);
}
})();var pid_87840 = foundation.app.render.get_parent_id.call(null,renderer__$1,path_87838);var G__87821_87841 = op_87837;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-disable","transform-disable",2862889209),G__87821_87841))
{foundation.app.render.transform_disable.call(null,renderer__$1,d,input_queue,id_87839);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-enable","transform-enable",2076092022),G__87821_87841))
{foundation.app.render.transform_enable.call(null,renderer__$1,d,input_queue,id_87839);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"attr","attr",1016909155),G__87821_87841))
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,id_87839);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",1125876963),G__87821_87841))
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,id_87839);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),G__87821_87841))
{foundation.app.render.node_destroy.call(null,renderer__$1,d,input_queue,id_87839);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-update","node-update",597066342),G__87821_87841))
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,pid_87840);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-create","node-create",4378585753),G__87821_87841))
{foundation.app.render.node_create.call(null,renderer__$1,d,input_queue,pid_87840,id_87839);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op_87837)].join('')));
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
var G__87842 = cljs.core.next.call(null,seq__87814__$1);
var G__87843 = null;
var G__87844 = 0;
var G__87845 = 0;
seq__87814 = G__87842;
chunk__87815 = G__87843;
count__87816 = G__87844;
i__87817 = G__87845;
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