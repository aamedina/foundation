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
var seq__95891 = cljs.core.seq.call(null,deltas);var chunk__95892 = null;var count__95893 = 0;var i__95894 = 0;while(true){
if((i__95894 < count__95893))
{var d = cljs.core._nth.call(null,chunk__95892,i__95894);var vec__95895_95899 = d;var op_95900 = cljs.core.nth.call(null,vec__95895_95899,0,null);var path_95901 = cljs.core.nth.call(null,vec__95895_95899,1,null);var id_95902 = (function (){var temp__4090__auto__ = foundation.app.render.get_id.call(null,renderer__$1,path_95901);if(cljs.core.truth_(temp__4090__auto__))
{var id = temp__4090__auto__;return id;
} else
{return foundation.app.render.new_id_BANG_.call(null,renderer__$1,path_95901);
}
})();var parent_id_95903 = foundation.app.render.fix_id.call(null,foundation.app.render.get_parent_id.call(null,renderer__$1,path_95901));var G__95896_95904 = op_95900;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-disable","transform-disable",2862889209),G__95896_95904))
{foundation.app.render.transform_disable.call(null,renderer__$1,d,input_queue,id_95902,document.querySelector(dommy.core.selector.call(null,id_95902)));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-enable","transform-enable",2076092022),G__95896_95904))
{foundation.app.render.transform_enable.call(null,renderer__$1,d,input_queue,id_95902,document.querySelector(dommy.core.selector.call(null,id_95902)));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"attr","attr",1016909155),G__95896_95904))
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,id_95902,document.querySelector(dommy.core.selector.call(null,id_95902)));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",1125876963),G__95896_95904))
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,id_95902,document.querySelector(dommy.core.selector.call(null,id_95902)));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),G__95896_95904))
{foundation.app.render.node_destroy.call(null,renderer__$1,d,input_queue,id_95902);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-update","node-update",597066342),G__95896_95904))
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,parent_id_95903);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-create","node-create",4378585753),G__95896_95904))
{foundation.app.render.node_create.call(null,renderer__$1,d,input_queue,parent_id_95903,id_95902);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op_95900)].join('')));
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
var G__95905 = seq__95891;
var G__95906 = chunk__95892;
var G__95907 = count__95893;
var G__95908 = (i__95894 + 1);
seq__95891 = G__95905;
chunk__95892 = G__95906;
count__95893 = G__95907;
i__95894 = G__95908;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__95891);if(temp__4092__auto__)
{var seq__95891__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__95891__$1))
{var c__14546__auto__ = cljs.core.chunk_first.call(null,seq__95891__$1);{
var G__95909 = cljs.core.chunk_rest.call(null,seq__95891__$1);
var G__95910 = c__14546__auto__;
var G__95911 = cljs.core.count.call(null,c__14546__auto__);
var G__95912 = 0;
seq__95891 = G__95909;
chunk__95892 = G__95910;
count__95893 = G__95911;
i__95894 = G__95912;
continue;
}
} else
{var d = cljs.core.first.call(null,seq__95891__$1);var vec__95897_95913 = d;var op_95914 = cljs.core.nth.call(null,vec__95897_95913,0,null);var path_95915 = cljs.core.nth.call(null,vec__95897_95913,1,null);var id_95916 = (function (){var temp__4090__auto__ = foundation.app.render.get_id.call(null,renderer__$1,path_95915);if(cljs.core.truth_(temp__4090__auto__))
{var id = temp__4090__auto__;return id;
} else
{return foundation.app.render.new_id_BANG_.call(null,renderer__$1,path_95915);
}
})();var parent_id_95917 = foundation.app.render.fix_id.call(null,foundation.app.render.get_parent_id.call(null,renderer__$1,path_95915));var G__95898_95918 = op_95914;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-disable","transform-disable",2862889209),G__95898_95918))
{foundation.app.render.transform_disable.call(null,renderer__$1,d,input_queue,id_95916,document.querySelector(dommy.core.selector.call(null,id_95916)));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transform-enable","transform-enable",2076092022),G__95898_95918))
{foundation.app.render.transform_enable.call(null,renderer__$1,d,input_queue,id_95916,document.querySelector(dommy.core.selector.call(null,id_95916)));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"attr","attr",1016909155),G__95898_95918))
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,id_95916,document.querySelector(dommy.core.selector.call(null,id_95916)));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",1125876963),G__95898_95918))
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,id_95916,document.querySelector(dommy.core.selector.call(null,id_95916)));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),G__95898_95918))
{foundation.app.render.node_destroy.call(null,renderer__$1,d,input_queue,id_95916);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-update","node-update",597066342),G__95898_95918))
{foundation.app.render.node_update.call(null,renderer__$1,d,input_queue,parent_id_95917);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node-create","node-create",4378585753),G__95898_95918))
{foundation.app.render.node_create.call(null,renderer__$1,d,input_queue,parent_id_95917,id_95916);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op_95914)].join('')));
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
var G__95919 = cljs.core.next.call(null,seq__95891__$1);
var G__95920 = null;
var G__95921 = 0;
var G__95922 = 0;
seq__95891 = G__95919;
chunk__95892 = G__95920;
count__95893 = G__95921;
i__95894 = G__95922;
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