// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.app.messages');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.set');
/**
* A keyword used as a key in a message to indicate that message's topic.
* 
* Example Message:
* {msg/topic :todo, msg/type :clear-completed}
*/
foundation.app.messages.topic = new cljs.core.Keyword("foundation.app.messages","topic","foundation.app.messages/topic",2201473474);
/**
* A keyword used as a key in a message to indicate that message's type.
* 
* Example Message:
* {msg/topic :todo, msg/type :clear-completed}
*/
foundation.app.messages.type = new cljs.core.Keyword("foundation.app.messages","type","foundation.app.messages/type",3134722037);
/**
* A special message type set when initializing a model. Whenever the
* type is init, a :value key will also be present and will contain
* the :init value from that topic in your app's dataflow.
* 
* Example Message:
* {msg/topic :todo, msg/type msg/init, :value {}}
*/
foundation.app.messages.init = new cljs.core.Keyword("foundation.app.messages","init","foundation.app.messages/init",3135052323);
foundation.app.messages.app_model = new cljs.core.Keyword("foundation.app.messages","app-model","foundation.app.messages/app-model",2464477880);
foundation.app.messages.output = new cljs.core.Keyword("foundation.app.messages","output","foundation.app.messages/output",4139607604);
foundation.app.messages.effect = new cljs.core.Keyword("foundation.app.messages","output","foundation.app.messages/output",4139607604);
foundation.app.messages.priority = new cljs.core.Keyword("foundation.app.messages","priority","foundation.app.messages/priority",4046062911);
/**
* A namespace used as the namespace of message params.
*/
foundation.app.messages.param_ns = (function (){var dummy_kw = new cljs.core.Keyword("foundation.app.messages","dummy","foundation.app.messages/dummy",2220522043);return [cljs.core.str(cljs.core.namespace.call(null,dummy_kw)),cljs.core.str(".param")].join('');
})();
/**
* Return a keyword with name `kw` which can be used mark a missing
* value in a message.
*/
foundation.app.messages.param = (function param(kw){return cljs.core.keyword.call(null,foundation.app.messages.param_ns,cljs.core.name.call(null,kw));
});
/**
* Assoc message-type as type in a message, unless a type key is already present.
*/
foundation.app.messages.add_message_type = (function add_message_type(message_type,message){if(cljs.core.truth_(foundation.app.messages.type.call(null,message)))
{return message;
} else
{return cljs.core.assoc.call(null,message,foundation.app.messages.type,message_type);
}
});
/**
* Return if a key is both a symbol and is namespaced with param-namespace.
*/
foundation.app.messages.param_keyword_present_QMARK_ = (function param_keyword_present_QMARK_(key){return ((key instanceof cljs.core.Keyword)) && (cljs.core._EQ_.call(null,foundation.app.messages.param_ns,cljs.core.namespace.call(null,key)));
});
/**
* Strip the namespace from keyword kw.
*/
foundation.app.messages.strip_ns = (function strip_ns(kw){return cljs.core.keyword.call(null,cljs.core.name.call(null,kw));
});
/**
* Assert every key of param-map is a param namespaced key.
*/
foundation.app.messages.assert_only_param_keys = (function assert_only_param_keys(param_map){var keys = cljs.core.keys.call(null,param_map);if(cljs.core.every_QMARK_.call(null,(function (key){return foundation.app.messages.param_keyword_present_QMARK_.call(null,key);
}),keys))
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Every key of param-map must be a namespaced param keyword. \n           These keys are invalid: "),cljs.core.str(cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (key){return !(foundation.app.messages.param_keyword_present_QMARK_.call(null,key));
}),keys)))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",1363110461,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",-1640528255,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",-1640425448,null)], null),cljs.core.list(new cljs.core.Symbol(null,"param-keyword-present?","param-keyword-present?",1661635905,null),new cljs.core.Symbol(null,"key","key",-1640425448,null))),new cljs.core.Symbol(null,"keys","keys",-1637242963,null))))].join('')));
}
});
/**
* Replace parameter key-value pairs in a message with the appropriate values
* from param-map.
*/
foundation.app.messages.fill_params_msg = (function fill_params_msg(param_map,msg){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__18074){var vec__18075 = p__18074;var k = cljs.core.nth.call(null,vec__18075,0,null);var v = cljs.core.nth.call(null,vec__18075,1,null);var original_pair = vec__18075;var temp__4096__auto__ = k.call(null,param_map);if(cljs.core.truth_(temp__4096__auto__))
{var param_val = temp__4096__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.app.messages.strip_ns.call(null,k),param_val], null);
} else
{return original_pair;
}
}),msg));
});
/**
* Replace parameter key-value pairs in messages with the appropriate values from
* param-map.
* 
* Example:
* (fill-params {(msg/param :foo) :bar} [{msg/topic :some-model (msg/param :foo)
* {}}])
* ; -> [{msg/topic :some-model :foo :bar}]
*/
foundation.app.messages.fill_params = (function fill_params(param_map,messages){foundation.app.messages.assert_only_param_keys.call(null,param_map);
return cljs.core.mapv.call(null,cljs.core.partial.call(null,foundation.app.messages.fill_params_msg,param_map),messages);
});
/**
* Return all distinct params present as keys in messages.
* 
* Example:
* (message-params [{(msg/param :name) "John", (msg/param :age) 42},
* {(msg/param :name) "Joe"}])
* ; -> ((msg/param :name) (msg/param :age))
*/
foundation.app.messages.message_params = (function message_params(msgs){return cljs.core.distinct.call(null,(function (){var iter__6997__auto__ = (function iter__18082(s__18083){return (new cljs.core.LazySeq(null,(function (){var s__18083__$1 = s__18083;while(true){
var temp__4098__auto__ = cljs.core.seq.call(null,s__18083__$1);if(temp__4098__auto__)
{var xs__4588__auto__ = temp__4098__auto__;var msg = cljs.core.first.call(null,xs__4588__auto__);var iterys__6993__auto__ = ((function (s__18083__$1,msg,xs__4588__auto__,temp__4098__auto__){
return (function iter__18084(s__18085){return (new cljs.core.LazySeq(null,((function (s__18083__$1,msg,xs__4588__auto__,temp__4098__auto__){
return (function (){var s__18085__$1 = s__18085;while(true){
var temp__4098__auto____$1 = cljs.core.seq.call(null,s__18085__$1);if(temp__4098__auto____$1)
{var s__18085__$2 = temp__4098__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__18085__$2))
{var c__6995__auto__ = cljs.core.chunk_first.call(null,s__18085__$2);var size__6996__auto__ = cljs.core.count.call(null,c__6995__auto__);var b__18087 = cljs.core.chunk_buffer.call(null,size__6996__auto__);if((function (){var i__18086 = 0;while(true){
if((i__18086 < size__6996__auto__))
{var key = cljs.core._nth.call(null,c__6995__auto__,i__18086);if(foundation.app.messages.param_keyword_present_QMARK_.call(null,key))
{cljs.core.chunk_append.call(null,b__18087,key);
{
var G__18088 = (i__18086 + 1);
i__18086 = G__18088;
continue;
}
} else
{{
var G__18089 = (i__18086 + 1);
i__18086 = G__18089;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18087),iter__18084.call(null,cljs.core.chunk_rest.call(null,s__18085__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18087),null);
}
} else
{var key = cljs.core.first.call(null,s__18085__$2);if(foundation.app.messages.param_keyword_present_QMARK_.call(null,key))
{return cljs.core.cons.call(null,key,iter__18084.call(null,cljs.core.rest.call(null,s__18085__$2)));
} else
{{
var G__18090 = cljs.core.rest.call(null,s__18085__$2);
s__18085__$1 = G__18090;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s__18083__$1,msg,xs__4588__auto__,temp__4098__auto__))
,null,null));
});})(s__18083__$1,msg,xs__4588__auto__,temp__4098__auto__))
;var fs__6994__auto__ = cljs.core.seq.call(null,iterys__6993__auto__.call(null,cljs.core.keys.call(null,msg)));if(fs__6994__auto__)
{return cljs.core.concat.call(null,fs__6994__auto__,iter__18082.call(null,cljs.core.rest.call(null,s__18083__$1)));
} else
{{
var G__18091 = cljs.core.rest.call(null,s__18083__$1);
s__18083__$1 = G__18091;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__6997__auto__.call(null,msgs);
})());
});
/**
* Return mp where every key has been turned into a param.
* 
* Example:
* (keys-to-param-keys {:age 42, :name "John"})
* ; -> {(msg/param :age) 42, (msg/param :name) "John")
*/
foundation.app.messages.keys_to_param_keys = (function keys_to_param_keys(mp){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__18094){var vec__18095 = p__18094;var k = cljs.core.nth.call(null,vec__18095,0,null);var v = cljs.core.nth.call(null,vec__18095,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [foundation.app.messages.param.call(null,k),v], null);
}),mp));
});
/**
* Populate each message in messages with the appropriate message-type and
* parameters from input-map (if provided).
* 
* Note: asserts that input-map contains an entry for every param
* keyword in messages.
* 
* Example:
* (fill :set-age
* [{msg/topic :person, :id person-id, (param :age) {}}]
* {:age 42})
* ; -> [{topic :person msg/type :set-age :age 42 :id person-id}]
*/
foundation.app.messages.fill = (function() {
var fill = null;
var fill__2 = (function (message_type,messages){return fill.call(null,message_type,messages,cljs.core.PersistentArrayMap.EMPTY);
});
var fill__3 = (function (message_type,messages,input_map){var missing_keys = cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.keyword,cljs.core.map.call(null,cljs.core.name,foundation.app.messages.message_params.call(null,messages))));var input_keys = cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.keyword,cljs.core.keys.call(null,input_map)));if(cljs.core.empty_QMARK_.call(null,clojure.set.difference.call(null,missing_keys,input_keys)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Missing keys "),cljs.core.str(missing_keys),cljs.core.str(" is not a subset of "),cljs.core.str(input_keys),cljs.core.str(".")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",1355128395,null),cljs.core.list(new cljs.core.Symbol("set","difference","set/difference",95029996,null),new cljs.core.Symbol(null,"missing-keys","missing-keys",1461467060,null),new cljs.core.Symbol(null,"input-keys","input-keys",-300302384,null)))))].join('')));
}
var messages__$1 = (cljs.core.truth_(message_type)?cljs.core.map.call(null,cljs.core.partial.call(null,foundation.app.messages.add_message_type,message_type),messages):messages);return foundation.app.messages.fill_params.call(null,foundation.app.messages.keys_to_param_keys.call(null,input_map),messages__$1);
});
fill = function(message_type,messages,input_map){
switch(arguments.length){
case 2:
return fill__2.call(this,message_type,messages);
case 3:
return fill__3.call(this,message_type,messages,input_map);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fill.cljs$core$IFn$_invoke$arity$2 = fill__2;
fill.cljs$core$IFn$_invoke$arity$3 = fill__3;
return fill;
})()
;
