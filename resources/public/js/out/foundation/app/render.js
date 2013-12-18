// Compiled by ClojureScript 0.0-2120
goog.provide('foundation.app.render');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('foundation.app.data.component');
goog.require('goog.events.KeyEvent');
goog.require('cljs.core.async');
goog.require('goog.events.EventHandler');
goog.require('goog.events.FocusHandler');
goog.require('foundation.app.data.component');
goog.require('goog.events.InputHandler');
goog.require('goog.events.MouseWheelHandler');
goog.require('goog.events.ActionHandler');
goog.require('dommy.core');
goog.require('goog.events.KeyHandler');
goog.require('foundation.app.util');
goog.require('foundation.app.data.component');
goog.require('goog.events.MouseWheelEvent');
goog.require('foundation.app.data.dependency');
goog.require('goog.events.ActionEvent');
goog.require('goog.ui.IdGenerator');
goog.require('goog.events');
goog.require('goog.events.OnlineHandler');
goog.require('goog.events.EventType');
goog.require('cljs.core.async');
goog.require('foundation.app.util');
goog.require('goog.events');
goog.require('foundation.app.data.dependency');
goog.require('dommy.core');
goog.require('goog.events.FileDropHandler');
foundation.app.render.render = (function (){var method_table__9061__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__9062__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__9063__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__9064__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__9065__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("render",(function (renderer,p__38954,pid,id){var vec__38955 = p__38954;var op = cljs.core.nth.call(null,vec__38955,0,null);var path = cljs.core.nth.call(null,vec__38955,1,null);var _ = cljs.core.nth.call(null,vec__38955,2,null);var ___$1 = cljs.core.nth.call(null,vec__38955,3,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,path], null);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__9065__auto__,method_table__9061__auto__,prefer_table__9062__auto__,method_cache__9063__auto__,cached_hierarchy__9064__auto__));
})();
foundation.app.render.guid = (function guid(){return goog.ui.IdGenerator.getInstance().getNextUniqueId();
});
foundation.app.render.log_fn = (function log_fn(deltas){return foundation.app.util.log_group.call(null,"Rendering Deltas",deltas);
});
foundation.app.render.node_seq = (function node_seq(env){return cljs.core.tree_seq.call(null,cljs.core.constantly.call(null,true),(function (n){return cljs.core.map.call(null,(function (p1__38956_SHARP_){return cljs.core.get.call(null,n,p1__38956_SHARP_);
}),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),null,new cljs.core.Keyword(null,"_data","_data",1104714747),null,new cljs.core.Keyword(null,"id","id",1013907597),null], null), null),cljs.core.keys.call(null,n)));
}),env);
});
foundation.app.render.run_on_destroy_BANG_ = (function run_on_destroy_BANG_(env){var nodes = foundation.app.render.node_seq.call(null,env);var seq__38961 = cljs.core.seq.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),nodes));var chunk__38962 = null;var count__38963 = 0;var i__38964 = 0;while(true){
if((i__38964 < count__38963))
{var f = cljs.core._nth.call(null,chunk__38962,i__38964);f.call(null);
{
var G__38965 = seq__38961;
var G__38966 = chunk__38962;
var G__38967 = count__38963;
var G__38968 = (i__38964 + 1);
seq__38961 = G__38965;
chunk__38962 = G__38966;
count__38963 = G__38967;
i__38964 = G__38968;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__38961);if(temp__4092__auto__)
{var seq__38961__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38961__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__38961__$1);{
var G__38969 = cljs.core.chunk_rest.call(null,seq__38961__$1);
var G__38970 = c__8952__auto__;
var G__38971 = cljs.core.count.call(null,c__8952__auto__);
var G__38972 = 0;
seq__38961 = G__38969;
chunk__38962 = G__38970;
count__38963 = G__38971;
i__38964 = G__38972;
continue;
}
} else
{var f = cljs.core.first.call(null,seq__38961__$1);f.call(null);
{
var G__38973 = cljs.core.next.call(null,seq__38961__$1);
var G__38974 = null;
var G__38975 = 0;
var G__38976 = 0;
seq__38961 = G__38973;
chunk__38962 = G__38974;
count__38963 = G__38975;
i__38964 = G__38976;
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
foundation.app.render.refresh_queued = false;
foundation.app.render.IRenderer = (function (){var obj38978 = {};return obj38978;
})();
foundation.app.render._get_id = (function _get_id(_,path){if((function (){var and__8211__auto__ = _;if(and__8211__auto__)
{return _.foundation$app$render$IRenderer$_get_id$arity$2;
} else
{return and__8211__auto__;
}
})())
{return _.foundation$app$render$IRenderer$_get_id$arity$2(_,path);
} else
{var x__8831__auto__ = (((_ == null))?null:_);return (function (){var or__8223__auto__ = (foundation.app.render._get_id[goog.typeOf(x__8831__auto__)]);if(or__8223__auto__)
{return or__8223__auto__;
} else
{var or__8223__auto____$1 = (foundation.app.render._get_id["_"]);if(or__8223__auto____$1)
{return or__8223__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderer.-get-id",_);
}
}
})().call(null,_,path);
}
});
foundation.app.render._parent_id = (function _parent_id(_,path){if((function (){var and__8211__auto__ = _;if(and__8211__auto__)
{return _.foundation$app$render$IRenderer$_parent_id$arity$2;
} else
{return and__8211__auto__;
}
})())
{return _.foundation$app$render$IRenderer$_parent_id$arity$2(_,path);
} else
{var x__8831__auto__ = (((_ == null))?null:_);return (function (){var or__8223__auto__ = (foundation.app.render._parent_id[goog.typeOf(x__8831__auto__)]);if(or__8223__auto__)
{return or__8223__auto__;
} else
{var or__8223__auto____$1 = (foundation.app.render._parent_id["_"]);if(or__8223__auto____$1)
{return or__8223__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderer.-parent-id",_);
}
}
})().call(null,_,path);
}
});
foundation.app.render._new_id = (function() {
var _new_id = null;
var _new_id__2 = (function (_,path){if((function (){var and__8211__auto__ = _;if(and__8211__auto__)
{return _.foundation$app$render$IRenderer$_new_id$arity$2;
} else
{return and__8211__auto__;
}
})())
{return _.foundation$app$render$IRenderer$_new_id$arity$2(_,path);
} else
{var x__8831__auto__ = (((_ == null))?null:_);return (function (){var or__8223__auto__ = (foundation.app.render._new_id[goog.typeOf(x__8831__auto__)]);if(or__8223__auto__)
{return or__8223__auto__;
} else
{var or__8223__auto____$1 = (foundation.app.render._new_id["_"]);if(or__8223__auto____$1)
{return or__8223__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderer.-new-id",_);
}
}
})().call(null,_,path);
}
});
var _new_id__3 = (function (_,path,id){if((function (){var and__8211__auto__ = _;if(and__8211__auto__)
{return _.foundation$app$render$IRenderer$_new_id$arity$3;
} else
{return and__8211__auto__;
}
})())
{return _.foundation$app$render$IRenderer$_new_id$arity$3(_,path,id);
} else
{var x__8831__auto__ = (((_ == null))?null:_);return (function (){var or__8223__auto__ = (foundation.app.render._new_id[goog.typeOf(x__8831__auto__)]);if(or__8223__auto__)
{return or__8223__auto__;
} else
{var or__8223__auto____$1 = (foundation.app.render._new_id["_"]);if(or__8223__auto____$1)
{return or__8223__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderer.-new-id",_);
}
}
})().call(null,_,path,id);
}
});
_new_id = function(_,path,id){
switch(arguments.length){
case 2:
return _new_id__2.call(this,_,path);
case 3:
return _new_id__3.call(this,_,path,id);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_new_id.cljs$core$IFn$_invoke$arity$2 = _new_id__2;
_new_id.cljs$core$IFn$_invoke$arity$3 = _new_id__3;
return _new_id;
})()
;
foundation.app.render._delete_id = (function _delete_id(_,path){if((function (){var and__8211__auto__ = _;if(and__8211__auto__)
{return _.foundation$app$render$IRenderer$_delete_id$arity$2;
} else
{return and__8211__auto__;
}
})())
{return _.foundation$app$render$IRenderer$_delete_id$arity$2(_,path);
} else
{var x__8831__auto__ = (((_ == null))?null:_);return (function (){var or__8223__auto__ = (foundation.app.render._delete_id[goog.typeOf(x__8831__auto__)]);if(or__8223__auto__)
{return or__8223__auto__;
} else
{var or__8223__auto____$1 = (foundation.app.render._delete_id["_"]);if(or__8223__auto____$1)
{return or__8223__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderer.-delete-id",_);
}
}
})().call(null,_,path);
}
});
foundation.app.render._on_destroy = (function _on_destroy(_,path,f){if((function (){var and__8211__auto__ = _;if(and__8211__auto__)
{return _.foundation$app$render$IRenderer$_on_destroy$arity$3;
} else
{return and__8211__auto__;
}
})())
{return _.foundation$app$render$IRenderer$_on_destroy$arity$3(_,path,f);
} else
{var x__8831__auto__ = (((_ == null))?null:_);return (function (){var or__8223__auto__ = (foundation.app.render._on_destroy[goog.typeOf(x__8831__auto__)]);if(or__8223__auto__)
{return or__8223__auto__;
} else
{var or__8223__auto____$1 = (foundation.app.render._on_destroy["_"]);if(or__8223__auto____$1)
{return or__8223__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderer.-on-destroy",_);
}
}
})().call(null,_,path,f);
}
});
foundation.app.render._set_data = (function _set_data(_,path,data){if((function (){var and__8211__auto__ = _;if(and__8211__auto__)
{return _.foundation$app$render$IRenderer$_set_data$arity$3;
} else
{return and__8211__auto__;
}
})())
{return _.foundation$app$render$IRenderer$_set_data$arity$3(_,path,data);
} else
{var x__8831__auto__ = (((_ == null))?null:_);return (function (){var or__8223__auto__ = (foundation.app.render._set_data[goog.typeOf(x__8831__auto__)]);if(or__8223__auto__)
{return or__8223__auto__;
} else
{var or__8223__auto____$1 = (foundation.app.render._set_data["_"]);if(or__8223__auto____$1)
{return or__8223__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderer.-set-data",_);
}
}
})().call(null,_,path,data);
}
});
foundation.app.render._get_data = (function _get_data(_,path){if((function (){var and__8211__auto__ = _;if(and__8211__auto__)
{return _.foundation$app$render$IRenderer$_get_data$arity$2;
} else
{return and__8211__auto__;
}
})())
{return _.foundation$app$render$IRenderer$_get_data$arity$2(_,path);
} else
{var x__8831__auto__ = (((_ == null))?null:_);return (function (){var or__8223__auto__ = (foundation.app.render._get_data[goog.typeOf(x__8831__auto__)]);if(or__8223__auto__)
{return or__8223__auto__;
} else
{var or__8223__auto____$1 = (foundation.app.render._get_data["_"]);if(or__8223__auto____$1)
{return or__8223__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderer.-get-data",_);
}
}
})().call(null,_,path);
}
});
foundation.app.render._drop_data = (function _drop_data(_,path){if((function (){var and__8211__auto__ = _;if(and__8211__auto__)
{return _.foundation$app$render$IRenderer$_drop_data$arity$2;
} else
{return and__8211__auto__;
}
})())
{return _.foundation$app$render$IRenderer$_drop_data$arity$2(_,path);
} else
{var x__8831__auto__ = (((_ == null))?null:_);return (function (){var or__8223__auto__ = (foundation.app.render._drop_data[goog.typeOf(x__8831__auto__)]);if(or__8223__auto__)
{return or__8223__auto__;
} else
{var or__8223__auto____$1 = (foundation.app.render._drop_data["_"]);if(or__8223__auto____$1)
{return or__8223__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderer.-drop-data",_);
}
}
})().call(null,_,path);
}
});

/**
* @constructor
* @param {*} env
* @param {*} render_fn
* @param {*} handlers
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
foundation.app.render.Renderer = (function (env,render_fn,handlers,__meta,__extmap){
this.env = env;
this.render_fn = render_fn;
this.handlers = handlers;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>3){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
foundation.app.render.Renderer.prototype.foundation$app$data$component$Lifecycle$ = true;
foundation.app.render.Renderer.prototype.foundation$app$data$component$Lifecycle$start$arity$1 = (function (renderer){var self__ = this;
var renderer__$1 = this;var vec__38982 = cljs.core.repeatedly.call(null,6,(function (){return cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,32));
}));var action = cljs.core.nth.call(null,vec__38982,0,null);var key = cljs.core.nth.call(null,vec__38982,1,null);var focus = cljs.core.nth.call(null,vec__38982,2,null);var drop = cljs.core.nth.call(null,vec__38982,3,null);var scroll = cljs.core.nth.call(null,vec__38982,4,null);var online = cljs.core.nth.call(null,vec__38982,5,null);var action_handler = (new goog.events.ActionHandler(document));var key_handler = (new goog.events.KeyHandler(document));var focus_handler = (new goog.events.FocusHandler(document));var file_drop_handler = (new goog.events.FileDropHandler(document));var scroll_handler = (new goog.events.MouseWheelHandler(document));var online_handler = (new goog.events.OnlineHandler(document));var handler = (function (){var G__38983 = (new goog.events.EventHandler(renderer__$1));G__38983.listen(action_handler,goog.events.ActionHandler.EventType.BEFOREACTION,((function (G__38983,vec__38982,action,key,focus,drop,scroll,online,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler){
return (function (e){return cljs.core.async.put_BANG_.call(null,action,e);
});})(G__38983,vec__38982,action,key,focus,drop,scroll,online,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler))
);
G__38983.listen(action_handler,goog.events.ActionHandler.EventType.ACTION,((function (G__38983,vec__38982,action,key,focus,drop,scroll,online,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler){
return (function (e){return cljs.core.async.put_BANG_.call(null,action,e);
});})(G__38983,vec__38982,action,key,focus,drop,scroll,online,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler))
);
G__38983.listen(key_handler,goog.events.KeyHandler.EventType.KEY,((function (G__38983,vec__38982,action,key,focus,drop,scroll,online,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler){
return (function (e){return cljs.core.async.put_BANG_.call(null,key,e);
});})(G__38983,vec__38982,action,key,focus,drop,scroll,online,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler))
);
G__38983.listen(focus_handler,goog.events.FocusHandler.EventType.FOCUSIN,((function (G__38983,vec__38982,action,key,focus,drop,scroll,online,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler){
return (function (e){return cljs.core.async.put_BANG_.call(null,focus,e);
});})(G__38983,vec__38982,action,key,focus,drop,scroll,online,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler))
);
G__38983.listen(focus_handler,goog.events.FocusHandler.EventType.FOCUSOUT,((function (G__38983,vec__38982,action,key,focus,drop,scroll,online,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler){
return (function (e){return cljs.core.async.put_BANG_.call(null,focus,e);
});})(G__38983,vec__38982,action,key,focus,drop,scroll,online,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler))
);
G__38983.listen(file_drop_handler,goog.events.FileDropHandler.EventType.DROP,((function (G__38983,vec__38982,action,key,focus,drop,scroll,online,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler){
return (function (e){return cljs.core.async.put_BANG_.call(null,drop,e);
});})(G__38983,vec__38982,action,key,focus,drop,scroll,online,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler))
);
G__38983.listen(scroll_handler,goog.events.MouseWheelHandler.EventType.MOUSEWHEEL,((function (G__38983,vec__38982,action,key,focus,drop,scroll,online,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler){
return (function (e){return cljs.core.async.put_BANG_.call(null,scroll,e);
});})(G__38983,vec__38982,action,key,focus,drop,scroll,online,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler))
);
G__38983.listen(online_handler,goog.events.OnlineHandler.EventType.ONLINE,((function (G__38983,vec__38982,action,key,focus,drop,scroll,online,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler){
return (function (e){return cljs.core.async.put_BANG_.call(null,online,e);
});})(G__38983,vec__38982,action,key,focus,drop,scroll,online,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler))
);
G__38983.listen(online_handler,goog.events.OnlineHandler.EventType.OFFLINE,((function (G__38983,vec__38982,action,key,focus,drop,scroll,online,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler){
return (function (e){return cljs.core.async.put_BANG_.call(null,online,e);
});})(G__38983,vec__38982,action,key,focus,drop,scroll,online,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler))
);
return G__38983;
})();var render_fn__$1 = ((function (vec__38982,action,key,focus,drop,scroll,online,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,handler){
return (function (){return foundation.app.render.refresh_queued = false;
});})(vec__38982,action,key,focus,drop,scroll,online,action_handler,key_handler,focus_handler,file_drop_handler,scroll_handler,online_handler,handler))
;var c__12187__auto___39079 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_39035){var state_val_39036 = (state_39035[1]);if((state_val_39036 === 1))
{var state_39035__$1 = state_39035;var statearr_39037_39080 = state_39035__$1;(statearr_39037_39080[2] = null);
(statearr_39037_39080[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39036 === 2))
{var inst_38986 = [action,key,focus,drop,scroll,online];var inst_38987 = (new cljs.core.PersistentVector(null,6,5,cljs.core.PersistentVector.EMPTY_NODE,inst_38986,null));var state_39035__$1 = state_39035;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_39035__$1,4,inst_38987);
} else
{if((state_val_39036 === 3))
{var inst_39033 = (state_39035[2]);var state_39035__$1 = state_39035;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39035__$1,inst_39033);
} else
{if((state_val_39036 === 4))
{var inst_38991 = (state_39035[7]);var inst_38989 = (state_39035[2]);var inst_38990 = cljs.core.nth.call(null,inst_38989,0,null);var inst_38991__$1 = cljs.core.nth.call(null,inst_38989,1,null);var inst_38995 = cljs.core._EQ_.call(null,action,inst_38991__$1);var state_39035__$1 = (function (){var statearr_39038 = state_39035;(statearr_39038[7] = inst_38991__$1);
(statearr_39038[8] = inst_38990);
return statearr_39038;
})();if(inst_38995)
{var statearr_39039_39081 = state_39035__$1;(statearr_39039_39081[1] = 5);
} else
{var statearr_39040_39082 = state_39035__$1;(statearr_39040_39082[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39036 === 5))
{var inst_38990 = (state_39035[8]);var inst_38997 = console.log(inst_38990);var state_39035__$1 = state_39035;var statearr_39041_39083 = state_39035__$1;(statearr_39041_39083[2] = inst_38997);
(statearr_39041_39083[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39036 === 6))
{var inst_38991 = (state_39035[7]);var inst_38999 = cljs.core._EQ_.call(null,key,inst_38991);var state_39035__$1 = state_39035;if(inst_38999)
{var statearr_39042_39084 = state_39035__$1;(statearr_39042_39084[1] = 8);
} else
{var statearr_39043_39085 = state_39035__$1;(statearr_39043_39085[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39036 === 7))
{var inst_39030 = (state_39035[2]);var state_39035__$1 = (function (){var statearr_39044 = state_39035;(statearr_39044[9] = inst_39030);
return statearr_39044;
})();var statearr_39045_39086 = state_39035__$1;(statearr_39045_39086[2] = null);
(statearr_39045_39086[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39036 === 8))
{var inst_38990 = (state_39035[8]);var inst_39001 = console.log(inst_38990);var state_39035__$1 = state_39035;var statearr_39046_39087 = state_39035__$1;(statearr_39046_39087[2] = inst_39001);
(statearr_39046_39087[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39036 === 9))
{var inst_38991 = (state_39035[7]);var inst_39003 = cljs.core._EQ_.call(null,focus,inst_38991);var state_39035__$1 = state_39035;if(inst_39003)
{var statearr_39047_39088 = state_39035__$1;(statearr_39047_39088[1] = 11);
} else
{var statearr_39048_39089 = state_39035__$1;(statearr_39048_39089[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39036 === 10))
{var inst_39028 = (state_39035[2]);var state_39035__$1 = state_39035;var statearr_39049_39090 = state_39035__$1;(statearr_39049_39090[2] = inst_39028);
(statearr_39049_39090[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39036 === 11))
{var inst_38990 = (state_39035[8]);var inst_39005 = console.log(inst_38990);var state_39035__$1 = state_39035;var statearr_39050_39091 = state_39035__$1;(statearr_39050_39091[2] = inst_39005);
(statearr_39050_39091[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39036 === 12))
{var inst_38991 = (state_39035[7]);var inst_39007 = cljs.core._EQ_.call(null,drop,inst_38991);var state_39035__$1 = state_39035;if(inst_39007)
{var statearr_39051_39092 = state_39035__$1;(statearr_39051_39092[1] = 14);
} else
{var statearr_39052_39093 = state_39035__$1;(statearr_39052_39093[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39036 === 13))
{var inst_39026 = (state_39035[2]);var state_39035__$1 = state_39035;var statearr_39053_39094 = state_39035__$1;(statearr_39053_39094[2] = inst_39026);
(statearr_39053_39094[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39036 === 14))
{var inst_38990 = (state_39035[8]);var inst_39009 = console.log(inst_38990);var state_39035__$1 = state_39035;var statearr_39054_39095 = state_39035__$1;(statearr_39054_39095[2] = inst_39009);
(statearr_39054_39095[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39036 === 15))
{var inst_38991 = (state_39035[7]);var inst_39011 = cljs.core._EQ_.call(null,scroll,inst_38991);var state_39035__$1 = state_39035;if(inst_39011)
{var statearr_39055_39096 = state_39035__$1;(statearr_39055_39096[1] = 17);
} else
{var statearr_39056_39097 = state_39035__$1;(statearr_39056_39097[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39036 === 16))
{var inst_39024 = (state_39035[2]);var state_39035__$1 = state_39035;var statearr_39057_39098 = state_39035__$1;(statearr_39057_39098[2] = inst_39024);
(statearr_39057_39098[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39036 === 17))
{var inst_38990 = (state_39035[8]);var inst_39013 = console.log(inst_38990);var state_39035__$1 = state_39035;var statearr_39058_39099 = state_39035__$1;(statearr_39058_39099[2] = inst_39013);
(statearr_39058_39099[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39036 === 18))
{var inst_38991 = (state_39035[7]);var inst_39015 = cljs.core._EQ_.call(null,online,inst_38991);var state_39035__$1 = state_39035;if(inst_39015)
{var statearr_39059_39100 = state_39035__$1;(statearr_39059_39100[1] = 20);
} else
{var statearr_39060_39101 = state_39035__$1;(statearr_39060_39101[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39036 === 19))
{var inst_39022 = (state_39035[2]);var state_39035__$1 = state_39035;var statearr_39061_39102 = state_39035__$1;(statearr_39061_39102[2] = inst_39022);
(statearr_39061_39102[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39036 === 20))
{var inst_38990 = (state_39035[8]);var inst_39017 = console.log(inst_38990);var state_39035__$1 = state_39035;var statearr_39062_39103 = state_39035__$1;(statearr_39062_39103[2] = inst_39017);
(statearr_39062_39103[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39036 === 21))
{var state_39035__$1 = state_39035;var statearr_39063_39104 = state_39035__$1;(statearr_39063_39104[2] = null);
(statearr_39063_39104[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39036 === 22))
{var inst_39020 = (state_39035[2]);var state_39035__$1 = state_39035;var statearr_39064_39105 = state_39035__$1;(statearr_39064_39105[2] = inst_39020);
(statearr_39064_39105[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_39068 = [null,null,null,null,null,null,null,null,null,null];(statearr_39068[0] = state_machine__12118__auto__);
(statearr_39068[1] = 1);
return statearr_39068;
});
var state_machine__12118__auto____1 = (function (state_39035){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_39035);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e39069){if((e39069 instanceof Object))
{var ex__12121__auto__ = e39069;var statearr_39070_39106 = state_39035;(statearr_39070_39106[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39035);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e39069;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__39107 = state_39035;
state_39035 = G__39107;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_39035){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_39035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_39071 = f__12188__auto__.call(null);(statearr_39071[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto___39079);
return statearr_39071;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
cljs.core.swap_BANG_.call(null,self__.handlers,cljs.core.assoc,new cljs.core.Keyword(null,"action","action",3885920680),action_handler,new cljs.core.Keyword(null,"key","key",1014010321),key_handler,new cljs.core.Keyword(null,"event","event",1110795788),handler,new cljs.core.Keyword(null,"focus","focus",1111509066),focus_handler,new cljs.core.Keyword(null,"file","file",1017047278),file_drop_handler,new cljs.core.Keyword(null,"online","online",4296649157),online_handler,new cljs.core.Keyword(null,"scroll","scroll",4401191487),scroll_handler);
cljs.core.add_watch.call(null,new cljs.core.Keyword(null,"app-state","app-state",1424976215).cljs$core$IFn$_invoke$arity$1(renderer__$1),new cljs.core.Keyword(null,"root","root",1017410644),(function (_,___$1,___$2,___$3){if(cljs.core.truth_(foundation.app.render.refresh_queued))
{return null;
} else
{foundation.app.render.refresh_queued = true;
if(typeof requestAnimationFrame !== 'undefined')
{return requestAnimationFrame(render_fn__$1);
} else
{return setTimeout(render_fn__$1,16);
}
}
}));
return render_fn__$1.call(null);
});
foundation.app.render.Renderer.prototype.foundation$app$data$component$Lifecycle$stop$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var seq__39072 = cljs.core.seq.call(null,cljs.core.deref.call(null,self__.handlers));var chunk__39073 = null;var count__39074 = 0;var i__39075 = 0;while(true){
if((i__39075 < count__39074))
{var handler = cljs.core._nth.call(null,chunk__39073,i__39075);handler.dispose();
{
var G__39108 = seq__39072;
var G__39109 = chunk__39073;
var G__39110 = count__39074;
var G__39111 = (i__39075 + 1);
seq__39072 = G__39108;
chunk__39073 = G__39109;
count__39074 = G__39110;
i__39075 = G__39111;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__39072);if(temp__4092__auto__)
{var seq__39072__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39072__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__39072__$1);{
var G__39112 = cljs.core.chunk_rest.call(null,seq__39072__$1);
var G__39113 = c__8952__auto__;
var G__39114 = cljs.core.count.call(null,c__8952__auto__);
var G__39115 = 0;
seq__39072 = G__39112;
chunk__39073 = G__39113;
count__39074 = G__39114;
i__39075 = G__39115;
continue;
}
} else
{var handler = cljs.core.first.call(null,seq__39072__$1);handler.dispose();
{
var G__39116 = cljs.core.next.call(null,seq__39072__$1);
var G__39117 = null;
var G__39118 = 0;
var G__39119 = 0;
seq__39072 = G__39116;
chunk__39073 = G__39117;
count__39074 = G__39118;
i__39075 = G__39119;
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
foundation.app.render.Renderer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8785__auto__){var self__ = this;
var this__8785__auto____$1 = this;var h__8639__auto__ = self__.__hash;if(!((h__8639__auto__ == null)))
{return h__8639__auto__;
} else
{var h__8639__auto____$1 = cljs.core.hash_imap.call(null,this__8785__auto____$1);self__.__hash = h__8639__auto____$1;
return h__8639__auto____$1;
}
});
foundation.app.render.Renderer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8790__auto__,k__8791__auto__){var self__ = this;
var this__8790__auto____$1 = this;return cljs.core._lookup.call(null,this__8790__auto____$1,k__8791__auto__,null);
});
foundation.app.render.Renderer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8792__auto__,k38980,else__8793__auto__){var self__ = this;
var this__8792__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k38980,new cljs.core.Keyword(null,"env","env",1014004831)))
{return self__.env;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k38980,new cljs.core.Keyword(null,"render-fn","render-fn",2853500881)))
{return self__.render_fn;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k38980,new cljs.core.Keyword(null,"handlers","handlers",1015973339)))
{return self__.handlers;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k38980,else__8793__auto__);
} else
{return null;
}
}
}
}
});
foundation.app.render.Renderer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8797__auto__,k__8798__auto__,G__38979){var self__ = this;
var this__8797__auto____$1 = this;var pred__39076 = cljs.core.keyword_identical_QMARK_;var expr__39077 = k__8798__auto__;if(cljs.core.truth_(pred__39076.call(null,new cljs.core.Keyword(null,"env","env",1014004831),expr__39077)))
{return (new foundation.app.render.Renderer(G__38979,self__.render_fn,self__.handlers,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__39076.call(null,new cljs.core.Keyword(null,"render-fn","render-fn",2853500881),expr__39077)))
{return (new foundation.app.render.Renderer(self__.env,G__38979,self__.handlers,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__39076.call(null,new cljs.core.Keyword(null,"handlers","handlers",1015973339),expr__39077)))
{return (new foundation.app.render.Renderer(self__.env,self__.render_fn,G__38979,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.render.Renderer(self__.env,self__.render_fn,self__.handlers,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8798__auto__,G__38979),null));
}
}
}
});
foundation.app.render.Renderer.prototype.foundation$app$render$IRenderer$ = true;
foundation.app.render.Renderer.prototype.foundation$app$render$IRenderer$_get_id$arity$2 = (function (_,path){var self__ = this;
var ___$1 = this;if(cljs.core.seq.call(null,path))
{return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.env),cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"id","id",1013907597)));
} else
{return new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.env));
}
});
foundation.app.render.Renderer.prototype.foundation$app$render$IRenderer$_parent_id$arity$2 = (function (r,path){var self__ = this;
var r__$1 = this;if(cljs.core.seq.call(null,path))
{return foundation.app.render._get_id.call(null,r__$1,cljs.core.vec.call(null,cljs.core.butlast.call(null,path)));
} else
{return null;
}
});
foundation.app.render.Renderer.prototype.foundation$app$render$IRenderer$_new_id$arity$2 = (function (r,path){var self__ = this;
var r__$1 = this;return foundation.app.render._new_id.call(null,r__$1,path,foundation.app.render.guid.call(null));
});
foundation.app.render.Renderer.prototype.foundation$app$render$IRenderer$_new_id$arity$3 = (function (_,path,id){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.env,cljs.core.assoc_in,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"id","id",1013907597)),id);
return id;
});
foundation.app.render.Renderer.prototype.foundation$app$render$IRenderer$_delete_id$arity$2 = (function (_,path){var self__ = this;
var ___$1 = this;foundation.app.render.run_on_destroy_BANG_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.env),path));
return cljs.core.swap_BANG_.call(null,self__.env,cljs.core.assoc_in,path,null);
});
foundation.app.render.Renderer.prototype.foundation$app$render$IRenderer$_on_destroy$arity$3 = (function (_,path,f){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.env,cljs.core.update_in,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022)),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),f);
});
foundation.app.render.Renderer.prototype.foundation$app$render$IRenderer$_set_data$arity$3 = (function (_,path,data){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.env,cljs.core.assoc_in,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_data","_data",1104714747)], null),path),data);
});
foundation.app.render.Renderer.prototype.foundation$app$render$IRenderer$_get_data$arity$2 = (function (_,path){var self__ = this;
var ___$1 = this;return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.env),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_data","_data",1104714747)], null),path));
});
foundation.app.render.Renderer.prototype.foundation$app$render$IRenderer$_drop_data$arity$2 = (function (_,path){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.env,cljs.core.update_in,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_data","_data",1104714747)], null),cljs.core.butlast.call(null,path)),cljs.core.dissoc,cljs.core.last.call(null,path));
});
foundation.app.render.Renderer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8804__auto__,writer__8805__auto__,opts__8806__auto__){var self__ = this;
var this__8804__auto____$1 = this;var pr_pair__8807__auto__ = (function (keyval__8808__auto__){return cljs.core.pr_sequential_writer.call(null,writer__8805__auto__,cljs.core.pr_writer,""," ","",opts__8806__auto__,keyval__8808__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__8805__auto__,pr_pair__8807__auto__,"#foundation.app.render.Renderer{",", ","}",opts__8806__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"env","env",1014004831),self__.env],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-fn","render-fn",2853500881),self__.render_fn],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handlers","handlers",1015973339),self__.handlers],null))], null),self__.__extmap));
});
foundation.app.render.Renderer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8795__auto__,entry__8796__auto__){var self__ = this;
var this__8795__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__8796__auto__))
{return cljs.core._assoc.call(null,this__8795__auto____$1,cljs.core._nth.call(null,entry__8796__auto__,0),cljs.core._nth.call(null,entry__8796__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8795__auto____$1,entry__8796__auto__);
}
});
foundation.app.render.Renderer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8802__auto__){var self__ = this;
var this__8802__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"env","env",1014004831),self__.env],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-fn","render-fn",2853500881),self__.render_fn],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handlers","handlers",1015973339),self__.handlers],null))], null),self__.__extmap));
});
foundation.app.render.Renderer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8794__auto__){var self__ = this;
var this__8794__auto____$1 = this;return (3 + cljs.core.count.call(null,self__.__extmap));
});
foundation.app.render.Renderer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8786__auto__,other__8787__auto__){var self__ = this;
var this__8786__auto____$1 = this;if(cljs.core.truth_((function (){var and__8211__auto__ = other__8787__auto__;if(cljs.core.truth_(and__8211__auto__))
{return ((this__8786__auto____$1.constructor === other__8787__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__8786__auto____$1,other__8787__auto__));
} else
{return and__8211__auto__;
}
})()))
{return true;
} else
{return false;
}
});
foundation.app.render.Renderer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8789__auto__,G__38979){var self__ = this;
var this__8789__auto____$1 = this;return (new foundation.app.render.Renderer(self__.env,self__.render_fn,self__.handlers,G__38979,self__.__extmap,self__.__hash));
});
foundation.app.render.Renderer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8788__auto__){var self__ = this;
var this__8788__auto____$1 = this;return self__.__meta;
});
foundation.app.render.Renderer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8799__auto__,k__8800__auto__){var self__ = this;
var this__8799__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"render-fn","render-fn",2853500881),null,new cljs.core.Keyword(null,"env","env",1014004831),null,new cljs.core.Keyword(null,"handlers","handlers",1015973339),null], null), null),k__8800__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8799__auto____$1),self__.__meta),k__8800__auto__);
} else
{return (new foundation.app.render.Renderer(self__.env,self__.render_fn,self__.handlers,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8800__auto__)),null));
}
});
foundation.app.render.Renderer.cljs$lang$type = true;
foundation.app.render.Renderer.cljs$lang$ctorPrSeq = (function (this__8824__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"foundation.app.render/Renderer");
});
foundation.app.render.Renderer.cljs$lang$ctorPrWriter = (function (this__8824__auto__,writer__8825__auto__){return cljs.core._write.call(null,writer__8825__auto__,"foundation.app.render/Renderer");
});
foundation.app.render.__GT_Renderer = (function __GT_Renderer(env,render_fn,handlers){return (new foundation.app.render.Renderer(env,render_fn,handlers));
});
foundation.app.render.map__GT_Renderer = (function map__GT_Renderer(G__38981){return (new foundation.app.render.Renderer(new cljs.core.Keyword(null,"env","env",1014004831).cljs$core$IFn$_invoke$arity$1(G__38981),new cljs.core.Keyword(null,"render-fn","render-fn",2853500881).cljs$core$IFn$_invoke$arity$1(G__38981),new cljs.core.Keyword(null,"handlers","handlers",1015973339).cljs$core$IFn$_invoke$arity$1(G__38981),null,cljs.core.dissoc.call(null,G__38981,new cljs.core.Keyword(null,"env","env",1014004831),new cljs.core.Keyword(null,"render-fn","render-fn",2853500881),new cljs.core.Keyword(null,"handlers","handlers",1015973339))));
});
foundation.app.render.push_render_queue = (function push_render_queue(renderer,input_queue){var render_queue = cljs.core.async.chan.call(null);var c__12187__auto___39198 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_39181){var state_val_39182 = (state_39181[1]);if((state_val_39182 === 7))
{var inst_39176 = (state_39181[2]);var state_39181__$1 = (function (){var statearr_39183 = state_39181;(statearr_39183[7] = inst_39176);
return statearr_39183;
})();var statearr_39184_39199 = state_39181__$1;(statearr_39184_39199[2] = null);
(statearr_39184_39199[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39182 === 6))
{var inst_39162 = (state_39181[8]);var inst_39164 = (state_39181[9]);var inst_39172 = foundation.app.render._parent_id.call(null,renderer,inst_39164);var inst_39173 = foundation.app.render._new_id.call(null,renderer,inst_39164);var inst_39174 = foundation.app.render.render.call(null,renderer,inst_39162,inst_39172,inst_39173);var state_39181__$1 = state_39181;var statearr_39185_39200 = state_39181__$1;(statearr_39185_39200[2] = inst_39174);
(statearr_39185_39200[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39182 === 5))
{var inst_39162 = (state_39181[8]);var inst_39164 = (state_39181[9]);var inst_39167 = (state_39181[10]);var inst_39169 = foundation.app.render._parent_id.call(null,renderer,inst_39164);var inst_39170 = foundation.app.render.render.call(null,renderer,inst_39162,inst_39169,inst_39167);var state_39181__$1 = state_39181;var statearr_39186_39201 = state_39181__$1;(statearr_39186_39201[2] = inst_39170);
(statearr_39186_39201[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39182 === 4))
{var inst_39162 = (state_39181[8]);var inst_39164 = (state_39181[9]);var inst_39167 = (state_39181[10]);var inst_39162__$1 = (state_39181[2]);var inst_39163 = cljs.core.nth.call(null,inst_39162__$1,0,null);var inst_39164__$1 = cljs.core.nth.call(null,inst_39162__$1,1,null);var inst_39165 = cljs.core.nth.call(null,inst_39162__$1,2,null);var inst_39166 = cljs.core.nth.call(null,inst_39162__$1,3,null);var inst_39167__$1 = foundation.app.render._get_id.call(null,renderer,inst_39164__$1);var state_39181__$1 = (function (){var statearr_39187 = state_39181;(statearr_39187[8] = inst_39162__$1);
(statearr_39187[11] = inst_39163);
(statearr_39187[12] = inst_39165);
(statearr_39187[9] = inst_39164__$1);
(statearr_39187[10] = inst_39167__$1);
(statearr_39187[13] = inst_39166);
return statearr_39187;
})();if(cljs.core.truth_(inst_39167__$1))
{var statearr_39188_39202 = state_39181__$1;(statearr_39188_39202[1] = 5);
} else
{var statearr_39189_39203 = state_39181__$1;(statearr_39189_39203[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39182 === 3))
{var inst_39179 = (state_39181[2]);var state_39181__$1 = state_39181;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39181__$1,inst_39179);
} else
{if((state_val_39182 === 2))
{var state_39181__$1 = state_39181;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39181__$1,4,render_queue);
} else
{if((state_val_39182 === 1))
{var state_39181__$1 = state_39181;var statearr_39190_39204 = state_39181__$1;(statearr_39190_39204[2] = null);
(statearr_39190_39204[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_39194 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_39194[0] = state_machine__12118__auto__);
(statearr_39194[1] = 1);
return statearr_39194;
});
var state_machine__12118__auto____1 = (function (state_39181){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_39181);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e39195){if((e39195 instanceof Object))
{var ex__12121__auto__ = e39195;var statearr_39196_39205 = state_39181;(statearr_39196_39205[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39181);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e39195;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__39206 = state_39181;
state_39181 = G__39206;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_39181){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_39181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_39197 = f__12188__auto__.call(null);(statearr_39197[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto___39198);
return statearr_39197;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return render_queue;
});
foundation.app.render.renderer = (function() {
var renderer = null;
var renderer__1 = (function (root_id){return renderer.call(null,root_id,foundation.app.render.log_fn);
});
var renderer__2 = (function (root_id,render_fn){return foundation.app.render.__GT_Renderer.call(null,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),root_id], null)),render_fn,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY));
});
renderer = function(root_id,render_fn){
switch(arguments.length){
case 1:
return renderer__1.call(this,root_id);
case 2:
return renderer__2.call(this,root_id,render_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
renderer.cljs$core$IFn$_invoke$arity$1 = renderer__1;
renderer.cljs$core$IFn$_invoke$arity$2 = renderer__2;
return renderer;
})()
;
cljs.core._add_method.call(null,foundation.app.render.render,new cljs.core.Keyword(null,"default","default",2558708147),(function (renderer,p__39207,pid,id){var vec__39208 = p__39207;var op = cljs.core.nth.call(null,vec__39208,0,null);var path = cljs.core.nth.call(null,vec__39208,1,null);var _ = cljs.core.nth.call(null,vec__39208,2,null);var ___$1 = cljs.core.nth.call(null,vec__39208,3,null);return cljs.core.println.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,path], null));
}));

//# sourceMappingURL=render.js.map