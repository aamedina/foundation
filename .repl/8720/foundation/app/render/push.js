// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.app.render.push');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('foundation.app.log');
goog.require('foundation.app.log');
foundation.app.render.push.search_ops = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"node-create","node-create",4378585753),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"*","*",1013904284),null,new cljs.core.Keyword(null,"node-*","node-*",4268699281),null], null), null),new cljs.core.Keyword(null,"node-destroy","node-destroy",2768634529),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"*","*",1013904284),null,new cljs.core.Keyword(null,"node-*","node-*",4268699281),null], null), null),new cljs.core.Keyword(null,"value","value",1125876963),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"*","*",1013904284),null,new cljs.core.Keyword(null,"value","value",1125876963),null], null), null),new cljs.core.Keyword(null,"attr","attr",1016909155),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"*","*",1013904284),null,new cljs.core.Keyword(null,"attr","attr",1016909155),null], null), null),new cljs.core.Keyword(null,"transform-enable","transform-enable",2076092022),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"*","*",1013904284),null,new cljs.core.Keyword(null,"transform-*","transform-*",3309320571),null], null), null),new cljs.core.Keyword(null,"transform-disable","transform-disable",2862889209),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"*","*",1013904284),null,new cljs.core.Keyword(null,"transform-*","transform-*",3309320571),null], null), null)], null);
foundation.app.render.push.real_path = (function real_path(op,path){return cljs.core.cons.call(null,op,cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.interleave.call(null,cljs.core.repeat.call(null,new cljs.core.Keyword(null,"children","children",2673430897)),path)),new cljs.core.Keyword(null,"handler","handler",1706707644)));
});
foundation.app.render.push.add_handler = (function add_handler(handlers,op,path,f){return cljs.core.assoc_in.call(null,handlers,foundation.app.render.push.real_path.call(null,op,path),f);
});
foundation.app.render.push.add_handlers = (function() {
var add_handlers = null;
var add_handlers__1 = (function (hs){return add_handlers.call(null,cljs.core.PersistentArrayMap.EMPTY,hs);
});
var add_handlers__2 = (function (m,hs){return cljs.core.reduce.call(null,(function (acc,p__20003){var vec__20004 = p__20003;var op = cljs.core.nth.call(null,vec__20004,0,null);var path = cljs.core.nth.call(null,vec__20004,1,null);var f = cljs.core.nth.call(null,vec__20004,2,null);return foundation.app.render.push.add_handler.call(null,acc,op,path,f);
}),m,hs);
});
add_handlers = function(m,hs){
switch(arguments.length){
case 1:
return add_handlers__1.call(this,m);
case 2:
return add_handlers__2.call(this,m,hs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_handlers.cljs$core$IFn$_invoke$arity$1 = add_handlers__1;
add_handlers.cljs$core$IFn$_invoke$arity$2 = add_handlers__2;
return add_handlers;
})()
;
foundation.app.render.push.matching_keys = (function matching_keys(ks,p){return cljs.core.filter.call(null,(function (k){var or__6304__auto__ = cljs.core._EQ_.call(null,k,p);if(or__6304__auto__)
{return or__6304__auto__;
} else
{var or__6304__auto____$1 = cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"*","*",1013904284));if(or__6304__auto____$1)
{return or__6304__auto____$1;
} else
{var or__6304__auto____$2 = cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"**","**",1013905586));if(or__6304__auto____$2)
{return or__6304__auto____$2;
} else
{if(cljs.core.contains_QMARK_.call(null,foundation.app.render.push.search_ops,p))
{return cljs.core.contains_QMARK_.call(null,p.call(null,foundation.app.render.push.search_ops),k);
} else
{return null;
}
}
}
}
}),ks);
});
foundation.app.render.push.sort_keys = (function sort_keys(ks){var sorted_keys = cljs.core.remove.call(null,(function (p1__20005_SHARP_){return cljs.core._EQ_.call(null,p1__20005_SHARP_,new cljs.core.Keyword(null,"**","**",1013905586));
}),cljs.core.sort.call(null,ks));return cljs.core.reverse.call(null,(((cljs.core.count.call(null,ks) > cljs.core.count.call(null,sorted_keys)))?cljs.core.conj.call(null,sorted_keys,new cljs.core.Keyword(null,"**","**",1013905586)):sorted_keys));
});
foundation.app.render.push.select_matches = (function select_matches(handlers,p){var keys = foundation.app.render.push.matching_keys.call(null,cljs.core.keys.call(null,handlers),p);return cljs.core.map.call(null,(function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get.call(null,handlers,k)], null);
}),foundation.app.render.push.sort_keys.call(null,keys));
});
foundation.app.render.push.find_handler_STAR_ = (function find_handler_STAR_(handlers,path){if(cljs.core.empty_QMARK_.call(null,path))
{return new cljs.core.Keyword(null,"handler","handler",1706707644).cljs$core$IFn$_invoke$arity$1(handlers);
} else
{return cljs.core.some.call(null,(function (p__20008){var vec__20009 = p__20008;var k = cljs.core.nth.call(null,vec__20009,0,null);var v = cljs.core.nth.call(null,vec__20009,1,null);var temp__4096__auto__ = find_handler_STAR_.call(null,v,cljs.core.rest.call(null,path));if(cljs.core.truth_(temp__4096__auto__))
{var handler = temp__4096__auto__;return handler;
} else
{if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"**","**",1013905586)))
{return new cljs.core.Keyword(null,"handler","handler",1706707644).cljs$core$IFn$_invoke$arity$1(v);
} else
{return null;
}
}
}),foundation.app.render.push.select_matches.call(null,new cljs.core.Keyword(null,"children","children",2673430897).cljs$core$IFn$_invoke$arity$1(handlers),cljs.core.first.call(null,path)));
}
});
foundation.app.render.push.find_handler = (function find_handler(handlers,op,path){return foundation.app.render.push.find_handler_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",2673430897),handlers], null),cljs.core.vec.call(null,cljs.core.cons.call(null,op,path)));
});
foundation.app.render.push.DomMapper = (function (){var obj20011 = {};return obj20011;
})();
foundation.app.render.push.get_id = (function get_id(this$,path){if((function (){var and__6292__auto__ = this$;if(and__6292__auto__)
{return this$.foundation$app$render$push$DomMapper$get_id$arity$2;
} else
{return and__6292__auto__;
}
})())
{return this$.foundation$app$render$push$DomMapper$get_id$arity$2(this$,path);
} else
{var x__6907__auto__ = (((this$ == null))?null:this$);return (function (){var or__6304__auto__ = (foundation.app.render.push.get_id[goog.typeOf(x__6907__auto__)]);if(or__6304__auto__)
{return or__6304__auto__;
} else
{var or__6304__auto____$1 = (foundation.app.render.push.get_id["_"]);if(or__6304__auto____$1)
{return or__6304__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.get-id",this$);
}
}
})().call(null,this$,path);
}
});
foundation.app.render.push.get_parent_id = (function get_parent_id(this$,path){if((function (){var and__6292__auto__ = this$;if(and__6292__auto__)
{return this$.foundation$app$render$push$DomMapper$get_parent_id$arity$2;
} else
{return and__6292__auto__;
}
})())
{return this$.foundation$app$render$push$DomMapper$get_parent_id$arity$2(this$,path);
} else
{var x__6907__auto__ = (((this$ == null))?null:this$);return (function (){var or__6304__auto__ = (foundation.app.render.push.get_parent_id[goog.typeOf(x__6907__auto__)]);if(or__6304__auto__)
{return or__6304__auto__;
} else
{var or__6304__auto____$1 = (foundation.app.render.push.get_parent_id["_"]);if(or__6304__auto____$1)
{return or__6304__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.get-parent-id",this$);
}
}
})().call(null,this$,path);
}
});
foundation.app.render.push.new_id_BANG_ = (function() {
var new_id_BANG_ = null;
var new_id_BANG___2 = (function (this$,path){if((function (){var and__6292__auto__ = this$;if(and__6292__auto__)
{return this$.foundation$app$render$push$DomMapper$new_id_BANG_$arity$2;
} else
{return and__6292__auto__;
}
})())
{return this$.foundation$app$render$push$DomMapper$new_id_BANG_$arity$2(this$,path);
} else
{var x__6907__auto__ = (((this$ == null))?null:this$);return (function (){var or__6304__auto__ = (foundation.app.render.push.new_id_BANG_[goog.typeOf(x__6907__auto__)]);if(or__6304__auto__)
{return or__6304__auto__;
} else
{var or__6304__auto____$1 = (foundation.app.render.push.new_id_BANG_["_"]);if(or__6304__auto____$1)
{return or__6304__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.new-id!",this$);
}
}
})().call(null,this$,path);
}
});
var new_id_BANG___3 = (function (this$,path,v){if((function (){var and__6292__auto__ = this$;if(and__6292__auto__)
{return this$.foundation$app$render$push$DomMapper$new_id_BANG_$arity$3;
} else
{return and__6292__auto__;
}
})())
{return this$.foundation$app$render$push$DomMapper$new_id_BANG_$arity$3(this$,path,v);
} else
{var x__6907__auto__ = (((this$ == null))?null:this$);return (function (){var or__6304__auto__ = (foundation.app.render.push.new_id_BANG_[goog.typeOf(x__6907__auto__)]);if(or__6304__auto__)
{return or__6304__auto__;
} else
{var or__6304__auto____$1 = (foundation.app.render.push.new_id_BANG_["_"]);if(or__6304__auto____$1)
{return or__6304__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.new-id!",this$);
}
}
})().call(null,this$,path,v);
}
});
new_id_BANG_ = function(this$,path,v){
switch(arguments.length){
case 2:
return new_id_BANG___2.call(this,this$,path);
case 3:
return new_id_BANG___3.call(this,this$,path,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
new_id_BANG_.cljs$core$IFn$_invoke$arity$2 = new_id_BANG___2;
new_id_BANG_.cljs$core$IFn$_invoke$arity$3 = new_id_BANG___3;
return new_id_BANG_;
})()
;
foundation.app.render.push.delete_id_BANG_ = (function delete_id_BANG_(this$,path){if((function (){var and__6292__auto__ = this$;if(and__6292__auto__)
{return this$.foundation$app$render$push$DomMapper$delete_id_BANG_$arity$2;
} else
{return and__6292__auto__;
}
})())
{return this$.foundation$app$render$push$DomMapper$delete_id_BANG_$arity$2(this$,path);
} else
{var x__6907__auto__ = (((this$ == null))?null:this$);return (function (){var or__6304__auto__ = (foundation.app.render.push.delete_id_BANG_[goog.typeOf(x__6907__auto__)]);if(or__6304__auto__)
{return or__6304__auto__;
} else
{var or__6304__auto____$1 = (foundation.app.render.push.delete_id_BANG_["_"]);if(or__6304__auto____$1)
{return or__6304__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.delete-id!",this$);
}
}
})().call(null,this$,path);
}
});
foundation.app.render.push.on_destroy_BANG_ = (function on_destroy_BANG_(this$,path,f){if((function (){var and__6292__auto__ = this$;if(and__6292__auto__)
{return this$.foundation$app$render$push$DomMapper$on_destroy_BANG_$arity$3;
} else
{return and__6292__auto__;
}
})())
{return this$.foundation$app$render$push$DomMapper$on_destroy_BANG_$arity$3(this$,path,f);
} else
{var x__6907__auto__ = (((this$ == null))?null:this$);return (function (){var or__6304__auto__ = (foundation.app.render.push.on_destroy_BANG_[goog.typeOf(x__6907__auto__)]);if(or__6304__auto__)
{return or__6304__auto__;
} else
{var or__6304__auto____$1 = (foundation.app.render.push.on_destroy_BANG_["_"]);if(or__6304__auto____$1)
{return or__6304__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.on-destroy!",this$);
}
}
})().call(null,this$,path,f);
}
});
foundation.app.render.push.set_data_BANG_ = (function set_data_BANG_(this$,ks,d){if((function (){var and__6292__auto__ = this$;if(and__6292__auto__)
{return this$.foundation$app$render$push$DomMapper$set_data_BANG_$arity$3;
} else
{return and__6292__auto__;
}
})())
{return this$.foundation$app$render$push$DomMapper$set_data_BANG_$arity$3(this$,ks,d);
} else
{var x__6907__auto__ = (((this$ == null))?null:this$);return (function (){var or__6304__auto__ = (foundation.app.render.push.set_data_BANG_[goog.typeOf(x__6907__auto__)]);if(or__6304__auto__)
{return or__6304__auto__;
} else
{var or__6304__auto____$1 = (foundation.app.render.push.set_data_BANG_["_"]);if(or__6304__auto____$1)
{return or__6304__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.set-data!",this$);
}
}
})().call(null,this$,ks,d);
}
});
foundation.app.render.push.drop_data_BANG_ = (function drop_data_BANG_(this$,ks){if((function (){var and__6292__auto__ = this$;if(and__6292__auto__)
{return this$.foundation$app$render$push$DomMapper$drop_data_BANG_$arity$2;
} else
{return and__6292__auto__;
}
})())
{return this$.foundation$app$render$push$DomMapper$drop_data_BANG_$arity$2(this$,ks);
} else
{var x__6907__auto__ = (((this$ == null))?null:this$);return (function (){var or__6304__auto__ = (foundation.app.render.push.drop_data_BANG_[goog.typeOf(x__6907__auto__)]);if(or__6304__auto__)
{return or__6304__auto__;
} else
{var or__6304__auto____$1 = (foundation.app.render.push.drop_data_BANG_["_"]);if(or__6304__auto____$1)
{return or__6304__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.drop-data!",this$);
}
}
})().call(null,this$,ks);
}
});
foundation.app.render.push.get_data = (function get_data(this$,ks){if((function (){var and__6292__auto__ = this$;if(and__6292__auto__)
{return this$.foundation$app$render$push$DomMapper$get_data$arity$2;
} else
{return and__6292__auto__;
}
})())
{return this$.foundation$app$render$push$DomMapper$get_data$arity$2(this$,ks);
} else
{var x__6907__auto__ = (((this$ == null))?null:this$);return (function (){var or__6304__auto__ = (foundation.app.render.push.get_data[goog.typeOf(x__6907__auto__)]);if(or__6304__auto__)
{return or__6304__auto__;
} else
{var or__6304__auto____$1 = (foundation.app.render.push.get_data["_"]);if(or__6304__auto____$1)
{return or__6304__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.get-data",this$);
}
}
})().call(null,this$,ks);
}
});
/**
* Given a node in the environment which is going to be deleted, run all on-destroy
* functions in the tree.
*/
foundation.app.render.push.run_on_destroy_BANG_ = (function run_on_destroy_BANG_(env){var nodes = cljs.core.tree_seq.call(null,cljs.core.constantly.call(null,true),(function (n){return cljs.core.map.call(null,(function (p1__20012_SHARP_){return cljs.core.get.call(null,n,p1__20012_SHARP_);
}),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),null,new cljs.core.Keyword(null,"_data","_data",1104714747),null,new cljs.core.Keyword(null,"id","id",1013907597),null], null), null),cljs.core.keys.call(null,n)));
}),env);var seq__20017 = cljs.core.seq.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022),nodes));var chunk__20018 = null;var count__20019 = 0;var i__20020 = 0;while(true){
if((i__20020 < count__20019))
{var f = cljs.core._nth.call(null,chunk__20018,i__20020);f.call(null);
{
var G__20021 = seq__20017;
var G__20022 = chunk__20018;
var G__20023 = count__20019;
var G__20024 = (i__20020 + 1);
seq__20017 = G__20021;
chunk__20018 = G__20022;
count__20019 = G__20023;
i__20020 = G__20024;
continue;
}
} else
{var temp__4098__auto__ = cljs.core.seq.call(null,seq__20017);if(temp__4098__auto__)
{var seq__20017__$1 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20017__$1))
{var c__7028__auto__ = cljs.core.chunk_first.call(null,seq__20017__$1);{
var G__20025 = cljs.core.chunk_rest.call(null,seq__20017__$1);
var G__20026 = c__7028__auto__;
var G__20027 = cljs.core.count.call(null,c__7028__auto__);
var G__20028 = 0;
seq__20017 = G__20025;
chunk__20018 = G__20026;
count__20019 = G__20027;
i__20020 = G__20028;
continue;
}
} else
{var f = cljs.core.first.call(null,seq__20017__$1);f.call(null);
{
var G__20029 = cljs.core.next.call(null,seq__20017__$1);
var G__20030 = null;
var G__20031 = 0;
var G__20032 = 0;
seq__20017 = G__20029;
chunk__20018 = G__20030;
count__20019 = G__20031;
i__20020 = G__20032;
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

/**
* @constructor
* @param {*} env
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
foundation.app.render.push.DomRenderer = (function (env,__meta,__extmap){
this.env = env;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
foundation.app.render.push.DomRenderer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6861__auto__){var self__ = this;
var this__6861__auto____$1 = this;var h__6715__auto__ = self__.__hash;if(!((h__6715__auto__ == null)))
{return h__6715__auto__;
} else
{var h__6715__auto____$1 = cljs.core.hash_imap.call(null,this__6861__auto____$1);self__.__hash = h__6715__auto____$1;
return h__6715__auto____$1;
}
});
foundation.app.render.push.DomRenderer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6866__auto__,k__6867__auto__){var self__ = this;
var this__6866__auto____$1 = this;return cljs.core._lookup.call(null,this__6866__auto____$1,k__6867__auto__,null);
});
foundation.app.render.push.DomRenderer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6868__auto__,k20034,else__6869__auto__){var self__ = this;
var this__6868__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k20034,new cljs.core.Keyword(null,"env","env",1014004831)))
{return self__.env;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k20034,else__6869__auto__);
} else
{return null;
}
}
});
foundation.app.render.push.DomRenderer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6873__auto__,k__6874__auto__,G__20033){var self__ = this;
var this__6873__auto____$1 = this;var pred__20036 = cljs.core.keyword_identical_QMARK_;var expr__20037 = k__6874__auto__;if(cljs.core.truth_(pred__20036.call(null,new cljs.core.Keyword(null,"env","env",1014004831),expr__20037)))
{return (new foundation.app.render.push.DomRenderer(G__20033,self__.__meta,self__.__extmap,null));
} else
{return (new foundation.app.render.push.DomRenderer(self__.env,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6874__auto__,G__20033),null));
}
});
foundation.app.render.push.DomRenderer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6880__auto__,writer__6881__auto__,opts__6882__auto__){var self__ = this;
var this__6880__auto____$1 = this;var pr_pair__6883__auto__ = (function (keyval__6884__auto__){return cljs.core.pr_sequential_writer.call(null,writer__6881__auto__,cljs.core.pr_writer,""," ","",opts__6882__auto__,keyval__6884__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__6881__auto__,pr_pair__6883__auto__,"#foundation.app.render.push.DomRenderer{",", ","}",opts__6882__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"env","env",1014004831),self__.env],null))], null),self__.__extmap));
});
foundation.app.render.push.DomRenderer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6871__auto__,entry__6872__auto__){var self__ = this;
var this__6871__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__6872__auto__))
{return cljs.core._assoc.call(null,this__6871__auto____$1,cljs.core._nth.call(null,entry__6872__auto__,0),cljs.core._nth.call(null,entry__6872__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__6871__auto____$1,entry__6872__auto__);
}
});
foundation.app.render.push.DomRenderer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6878__auto__){var self__ = this;
var this__6878__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"env","env",1014004831),self__.env],null))], null),self__.__extmap));
});
foundation.app.render.push.DomRenderer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6870__auto__){var self__ = this;
var this__6870__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
foundation.app.render.push.DomRenderer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6862__auto__,other__6863__auto__){var self__ = this;
var this__6862__auto____$1 = this;if(cljs.core.truth_((function (){var and__6292__auto__ = other__6863__auto__;if(cljs.core.truth_(and__6292__auto__))
{return ((this__6862__auto____$1.constructor === other__6863__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__6862__auto____$1,other__6863__auto__));
} else
{return and__6292__auto__;
}
})()))
{return true;
} else
{return false;
}
});
foundation.app.render.push.DomRenderer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6865__auto__,G__20033){var self__ = this;
var this__6865__auto____$1 = this;return (new foundation.app.render.push.DomRenderer(self__.env,G__20033,self__.__extmap,self__.__hash));
});
foundation.app.render.push.DomRenderer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6864__auto__){var self__ = this;
var this__6864__auto____$1 = this;return self__.__meta;
});
foundation.app.render.push.DomRenderer.prototype.foundation$app$render$push$DomMapper$ = true;
foundation.app.render.push.DomRenderer.prototype.foundation$app$render$push$DomMapper$get_id$arity$2 = (function (this$,path){var self__ = this;
var this$__$1 = this;if(cljs.core.seq.call(null,path))
{return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.env),cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"id","id",1013907597)));
} else
{return new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.env));
}
});
foundation.app.render.push.DomRenderer.prototype.foundation$app$render$push$DomMapper$get_parent_id$arity$2 = (function (this$,path){var self__ = this;
var this$__$1 = this;if(cljs.core.seq.call(null,path))
{return foundation.app.render.push.get_id.call(null,this$__$1,cljs.core.vec.call(null,cljs.core.butlast.call(null,path)));
} else
{return null;
}
});
foundation.app.render.push.DomRenderer.prototype.foundation$app$render$push$DomMapper$new_id_BANG_$arity$2 = (function (this$,path){var self__ = this;
var this$__$1 = this;return foundation.app.render.push.new_id_BANG_.call(null,this$__$1,path,cljs.core.gensym.call(null));
});
foundation.app.render.push.DomRenderer.prototype.foundation$app$render$push$DomMapper$new_id_BANG_$arity$3 = (function (this$,path,v){var self__ = this;
var this$__$1 = this;cljs.core.swap_BANG_.call(null,self__.env,cljs.core.assoc_in,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"id","id",1013907597)),v);
return v;
});
foundation.app.render.push.DomRenderer.prototype.foundation$app$render$push$DomMapper$delete_id_BANG_$arity$2 = (function (this$,path){var self__ = this;
var this$__$1 = this;foundation.app.render.push.run_on_destroy_BANG_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.env),path));
return cljs.core.swap_BANG_.call(null,self__.env,cljs.core.assoc_in,path,null);
});
foundation.app.render.push.DomRenderer.prototype.foundation$app$render$push$DomMapper$on_destroy_BANG_$arity$3 = (function (this$,path,f){var self__ = this;
var this$__$1 = this;return cljs.core.swap_BANG_.call(null,self__.env,cljs.core.update_in,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"on-destroy","on-destroy",2098673022)),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),f);
});
foundation.app.render.push.DomRenderer.prototype.foundation$app$render$push$DomMapper$set_data_BANG_$arity$3 = (function (this$,ks,d){var self__ = this;
var this$__$1 = this;return cljs.core.swap_BANG_.call(null,self__.env,cljs.core.assoc_in,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_data","_data",1104714747)], null),ks),d);
});
foundation.app.render.push.DomRenderer.prototype.foundation$app$render$push$DomMapper$drop_data_BANG_$arity$2 = (function (this$,ks){var self__ = this;
var this$__$1 = this;return cljs.core.swap_BANG_.call(null,self__.env,cljs.core.update_in,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_data","_data",1104714747)], null),cljs.core.butlast.call(null,ks)),cljs.core.dissoc,cljs.core.last.call(null,ks));
});
foundation.app.render.push.DomRenderer.prototype.foundation$app$render$push$DomMapper$get_data$arity$2 = (function (this$,ks){var self__ = this;
var this$__$1 = this;return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.env),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_data","_data",1104714747)], null),ks));
});
foundation.app.render.push.DomRenderer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6875__auto__,k__6876__auto__){var self__ = this;
var this__6875__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"env","env",1014004831),null], null), null),k__6876__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6875__auto____$1),self__.__meta),k__6876__auto__);
} else
{return (new foundation.app.render.push.DomRenderer(self__.env,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6876__auto__)),null));
}
});
foundation.app.render.push.DomRenderer.cljs$lang$type = true;
foundation.app.render.push.DomRenderer.cljs$lang$ctorPrSeq = (function (this__6900__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"foundation.app.render.push/DomRenderer");
});
foundation.app.render.push.DomRenderer.cljs$lang$ctorPrWriter = (function (this__6900__auto__,writer__6901__auto__){return cljs.core._write.call(null,writer__6901__auto__,"foundation.app.render.push/DomRenderer");
});
foundation.app.render.push.__GT_DomRenderer = (function __GT_DomRenderer(env){return (new foundation.app.render.push.DomRenderer(env));
});
foundation.app.render.push.map__GT_DomRenderer = (function map__GT_DomRenderer(G__20035){return (new foundation.app.render.push.DomRenderer(new cljs.core.Keyword(null,"env","env",1014004831).cljs$core$IFn$_invoke$arity$1(G__20035),null,cljs.core.dissoc.call(null,G__20035,new cljs.core.Keyword(null,"env","env",1014004831))));
});
foundation.app.render.push.renderer = (function() {
var renderer = null;
var renderer__2 = (function (root_id,handlers){return renderer.call(null,root_id,handlers,cljs.core.identity);
});
var renderer__3 = (function (root_id,handlers,log_fn){var handlers__$1 = ((cljs.core.vector_QMARK_.call(null,handlers))?foundation.app.render.push.add_handlers.call(null,handlers):handlers);var renderer__$1 = foundation.app.render.push.__GT_DomRenderer.call(null,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),root_id], null)));return (function (deltas,input_queue){log_fn.call(null,deltas);
var seq__20045 = cljs.core.seq.call(null,deltas);var chunk__20046 = null;var count__20047 = 0;var i__20048 = 0;while(true){
if((i__20048 < count__20047))
{var d = cljs.core._nth.call(null,chunk__20046,i__20048);var vec__20049_20051 = d;var op_20052 = cljs.core.nth.call(null,vec__20049_20051,0,null);var path_20053 = cljs.core.nth.call(null,vec__20049_20051,1,null);var handler_20054 = foundation.app.render.push.find_handler.call(null,handlers__$1,op_20052,path_20053);if(cljs.core.truth_(handler_20054))
{handler_20054.call(null,renderer__$1,d,input_queue);
} else
{}
{
var G__20055 = seq__20045;
var G__20056 = chunk__20046;
var G__20057 = count__20047;
var G__20058 = (i__20048 + 1);
seq__20045 = G__20055;
chunk__20046 = G__20056;
count__20047 = G__20057;
i__20048 = G__20058;
continue;
}
} else
{var temp__4098__auto__ = cljs.core.seq.call(null,seq__20045);if(temp__4098__auto__)
{var seq__20045__$1 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20045__$1))
{var c__7028__auto__ = cljs.core.chunk_first.call(null,seq__20045__$1);{
var G__20059 = cljs.core.chunk_rest.call(null,seq__20045__$1);
var G__20060 = c__7028__auto__;
var G__20061 = cljs.core.count.call(null,c__7028__auto__);
var G__20062 = 0;
seq__20045 = G__20059;
chunk__20046 = G__20060;
count__20047 = G__20061;
i__20048 = G__20062;
continue;
}
} else
{var d = cljs.core.first.call(null,seq__20045__$1);var vec__20050_20063 = d;var op_20064 = cljs.core.nth.call(null,vec__20050_20063,0,null);var path_20065 = cljs.core.nth.call(null,vec__20050_20063,1,null);var handler_20066 = foundation.app.render.push.find_handler.call(null,handlers__$1,op_20064,path_20065);if(cljs.core.truth_(handler_20066))
{handler_20066.call(null,renderer__$1,d,input_queue);
} else
{}
{
var G__20067 = cljs.core.next.call(null,seq__20045__$1);
var G__20068 = null;
var G__20069 = 0;
var G__20070 = 0;
seq__20045 = G__20067;
chunk__20046 = G__20068;
count__20047 = G__20069;
i__20048 = G__20070;
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
renderer = function(root_id,handlers,log_fn){
switch(arguments.length){
case 2:
return renderer__2.call(this,root_id,handlers);
case 3:
return renderer__3.call(this,root_id,handlers,log_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
renderer.cljs$core$IFn$_invoke$arity$2 = renderer__2;
renderer.cljs$core$IFn$_invoke$arity$3 = renderer__3;
return renderer;
})()
;
/**
* Return a queue for processing rendering deltas. This queue will
* receive one delta at a time. For each delta placed on the queue, find
* and then apply a handler to that delta. If no handler is found, the
* delta will be removed from the queue and no other processing will
* take place.
*/
foundation.app.render.push.push_render_queue = (function push_render_queue(root_id,handlers,input_queue){var renderer = foundation.app.render.push.__GT_DomRenderer.call(null,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),root_id], null)));var handlers__$1 = ((cljs.core.vector_QMARK_.call(null,handlers))?foundation.app.render.push.add_handlers.call(null,handlers):handlers);var render_queue = cljs.core.async.chan.call(null);var c__12343__auto___20147 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12344__auto__ = (function (){var switch__12213__auto__ = (function (state_20128){var state_val_20129 = (state_20128[1]);if((state_val_20129 === 8))
{var inst_20123 = (state_20128[2]);var inst_20111 = inst_20123;var state_20128__$1 = (function (){var statearr_20130 = state_20128;(statearr_20130[7] = inst_20111);
return statearr_20130;
})();var statearr_20131_20148 = state_20128__$1;(statearr_20131_20148[2] = null);
(statearr_20131_20148[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20129 === 7))
{var inst_20121 = (state_20128[2]);var state_20128__$1 = (function (){var statearr_20132 = state_20128;(statearr_20132[8] = inst_20121);
return statearr_20132;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20128__$1,8,render_queue);
} else
{if((state_val_20129 === 6))
{var state_20128__$1 = state_20128;var statearr_20133_20149 = state_20128__$1;(statearr_20133_20149[2] = null);
(statearr_20133_20149[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20129 === 5))
{var inst_20116 = (state_20128[9]);var inst_20111 = (state_20128[7]);var inst_20118 = inst_20116.call(null,renderer,inst_20111,input_queue);var state_20128__$1 = state_20128;var statearr_20134_20150 = state_20128__$1;(statearr_20134_20150[2] = inst_20118);
(statearr_20134_20150[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20129 === 4))
{var inst_20126 = (state_20128[2]);var state_20128__$1 = state_20128;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20128__$1,inst_20126);
} else
{if((state_val_20129 === 3))
{var inst_20116 = (state_20128[9]);var inst_20111 = (state_20128[7]);var inst_20114 = cljs.core.nth.call(null,inst_20111,0,null);var inst_20115 = cljs.core.nth.call(null,inst_20111,1,null);var inst_20116__$1 = foundation.app.render.push.find_handler.call(null,handlers__$1,inst_20114,inst_20115);var state_20128__$1 = (function (){var statearr_20135 = state_20128;(statearr_20135[9] = inst_20116__$1);
return statearr_20135;
})();if(cljs.core.truth_(inst_20116__$1))
{var statearr_20136_20151 = state_20128__$1;(statearr_20136_20151[1] = 5);
} else
{var statearr_20137_20152 = state_20128__$1;(statearr_20137_20152[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20129 === 2))
{var inst_20110 = (state_20128[2]);var inst_20111 = inst_20110;var state_20128__$1 = (function (){var statearr_20138 = state_20128;(statearr_20138[7] = inst_20111);
return statearr_20138;
})();var statearr_20139_20153 = state_20128__$1;(statearr_20139_20153[2] = null);
(statearr_20139_20153[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20129 === 1))
{var state_20128__$1 = state_20128;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20128__$1,2,render_queue);
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
});return ((function (switch__12213__auto__){
return (function() {
var state_machine__12214__auto__ = null;
var state_machine__12214__auto____0 = (function (){var statearr_20143 = (new Array(10));(statearr_20143[0] = state_machine__12214__auto__);
(statearr_20143[1] = 1);
return statearr_20143;
});
var state_machine__12214__auto____1 = (function (state_20128){while(true){
var ret_value__12215__auto__ = (function (){try{while(true){
var result__12216__auto__ = switch__12213__auto__.call(null,state_20128);if(cljs.core.keyword_identical_QMARK_.call(null,result__12216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12216__auto__;
}
break;
}
}catch (e20144){if((e20144 instanceof Object))
{var ex__12217__auto__ = e20144;var statearr_20145_20154 = state_20128;(statearr_20145_20154[5] = ex__12217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20128);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20144;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20155 = state_20128;
state_20128 = G__20155;
continue;
}
} else
{return ret_value__12215__auto__;
}
break;
}
});
state_machine__12214__auto__ = function(state_20128){
switch(arguments.length){
case 0:
return state_machine__12214__auto____0.call(this);
case 1:
return state_machine__12214__auto____1.call(this,state_20128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12214__auto____0;
state_machine__12214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12214__auto____1;
return state_machine__12214__auto__;
})()
;})(switch__12213__auto__))
})();var state__12345__auto__ = (function (){var statearr_20146 = f__12344__auto__.call(null);(statearr_20146[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12343__auto___20147);
return statearr_20146;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12345__auto__);
}));
return render_queue;
});
