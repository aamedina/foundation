// Compiled by ClojureScript 0.0-2080
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t58138 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t58138 = (function (f,fn_handler,meta58139){
this.f = f;
this.fn_handler = fn_handler;
this.meta58139 = meta58139;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t58138.cljs$lang$type = true;
cljs.core.async.t58138.cljs$lang$ctorStr = "cljs.core.async/t58138";
cljs.core.async.t58138.cljs$lang$ctorPrWriter = (function (this__8558__auto__,writer__8559__auto__,opt__8560__auto__){return cljs.core._write.call(null,writer__8559__auto__,"cljs.core.async/t58138");
});
cljs.core.async.t58138.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t58138.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t58138.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t58138.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58140){var self__ = this;
var _58140__$1 = this;return self__.meta58139;
});
cljs.core.async.t58138.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58140,meta58139__$1){var self__ = this;
var _58140__$1 = this;return (new cljs.core.async.t58138(self__.f,self__.fn_handler,meta58139__$1));
});
cljs.core.async.__GT_t58138 = (function __GT_t58138(f__$1,fn_handler__$1,meta58139){return (new cljs.core.async.t58138(f__$1,fn_handler__$1,meta58139));
});
}
return (new cljs.core.async.t58138(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__58142 = buff;if(G__58142)
{var bit__8640__auto__ = null;if(cljs.core.truth_((function (){var or__8014__auto__ = bit__8640__auto__;if(cljs.core.truth_(or__8014__auto__))
{return or__8014__auto__;
} else
{return G__58142.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__58142.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__58142);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__58142);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_58143 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_58143);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_58143);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__8002__auto__ = ret;if(cljs.core.truth_(and__8002__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__8002__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8837__auto___58144 = n;var x_58145 = 0;while(true){
if((x_58145 < n__8837__auto___58144))
{(a[x_58145] = 0);
{
var G__58146 = (x_58145 + 1);
x_58145 = G__58146;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__58147 = (i + 1);
i = G__58147;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t58151 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t58151 = (function (flag,alt_flag,meta58152){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta58152 = meta58152;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t58151.cljs$lang$type = true;
cljs.core.async.t58151.cljs$lang$ctorStr = "cljs.core.async/t58151";
cljs.core.async.t58151.cljs$lang$ctorPrWriter = (function (this__8558__auto__,writer__8559__auto__,opt__8560__auto__){return cljs.core._write.call(null,writer__8559__auto__,"cljs.core.async/t58151");
});
cljs.core.async.t58151.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t58151.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t58151.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t58151.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58153){var self__ = this;
var _58153__$1 = this;return self__.meta58152;
});
cljs.core.async.t58151.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58153,meta58152__$1){var self__ = this;
var _58153__$1 = this;return (new cljs.core.async.t58151(self__.flag,self__.alt_flag,meta58152__$1));
});
cljs.core.async.__GT_t58151 = (function __GT_t58151(flag__$1,alt_flag__$1,meta58152){return (new cljs.core.async.t58151(flag__$1,alt_flag__$1,meta58152));
});
}
return (new cljs.core.async.t58151(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t58157 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t58157 = (function (cb,flag,alt_handler,meta58158){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta58158 = meta58158;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t58157.cljs$lang$type = true;
cljs.core.async.t58157.cljs$lang$ctorStr = "cljs.core.async/t58157";
cljs.core.async.t58157.cljs$lang$ctorPrWriter = (function (this__8558__auto__,writer__8559__auto__,opt__8560__auto__){return cljs.core._write.call(null,writer__8559__auto__,"cljs.core.async/t58157");
});
cljs.core.async.t58157.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t58157.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t58157.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t58157.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58159){var self__ = this;
var _58159__$1 = this;return self__.meta58158;
});
cljs.core.async.t58157.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58159,meta58158__$1){var self__ = this;
var _58159__$1 = this;return (new cljs.core.async.t58157(self__.cb,self__.flag,self__.alt_handler,meta58158__$1));
});
cljs.core.async.__GT_t58157 = (function __GT_t58157(cb__$1,flag__$1,alt_handler__$1,meta58158){return (new cljs.core.async.t58157(cb__$1,flag__$1,alt_handler__$1,meta58158));
});
}
return (new cljs.core.async.t58157(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__58160_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__58160_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__8014__auto__ = wport;if(cljs.core.truth_(or__8014__auto__))
{return or__8014__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__58161 = (i + 1);
i = G__58161;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__8014__auto__ = ret;if(cljs.core.truth_(or__8014__auto__))
{return or__8014__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__8002__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__8002__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__8002__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__58162){var map__58164 = p__58162;var map__58164__$1 = ((cljs.core.seq_QMARK_.call(null,map__58164))?cljs.core.apply.call(null,cljs.core.hash_map,map__58164):map__58164);var opts = map__58164__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__58162 = null;if (arguments.length > 1) {
  p__58162 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__58162);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__58165){
var ports = cljs.core.first(arglist__58165);
var p__58162 = cljs.core.rest(arglist__58165);
return alts_BANG___delegate(ports,p__58162);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t58173 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t58173 = (function (ch,f,map_LT_,meta58174){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta58174 = meta58174;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t58173.cljs$lang$type = true;
cljs.core.async.t58173.cljs$lang$ctorStr = "cljs.core.async/t58173";
cljs.core.async.t58173.cljs$lang$ctorPrWriter = (function (this__8558__auto__,writer__8559__auto__,opt__8560__auto__){return cljs.core._write.call(null,writer__8559__auto__,"cljs.core.async/t58173");
});
cljs.core.async.t58173.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t58173.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t58173.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t58173.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t58176 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t58176 = (function (fn1,_,meta58174,ch,f,map_LT_,meta58177){
this.fn1 = fn1;
this._ = _;
this.meta58174 = meta58174;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta58177 = meta58177;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t58176.cljs$lang$type = true;
cljs.core.async.t58176.cljs$lang$ctorStr = "cljs.core.async/t58176";
cljs.core.async.t58176.cljs$lang$ctorPrWriter = (function (this__8558__auto__,writer__8559__auto__,opt__8560__auto__){return cljs.core._write.call(null,writer__8559__auto__,"cljs.core.async/t58176");
});
cljs.core.async.t58176.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t58176.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t58176.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t58176.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__58166_SHARP_){return f1.call(null,(((p1__58166_SHARP_ == null))?null:self__.f.call(null,p1__58166_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t58176.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58178){var self__ = this;
var _58178__$1 = this;return self__.meta58177;
});
cljs.core.async.t58176.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58178,meta58177__$1){var self__ = this;
var _58178__$1 = this;return (new cljs.core.async.t58176(self__.fn1,self__._,self__.meta58174,self__.ch,self__.f,self__.map_LT_,meta58177__$1));
});
cljs.core.async.__GT_t58176 = (function __GT_t58176(fn1__$1,___$2,meta58174__$1,ch__$2,f__$2,map_LT___$2,meta58177){return (new cljs.core.async.t58176(fn1__$1,___$2,meta58174__$1,ch__$2,f__$2,map_LT___$2,meta58177));
});
}
return (new cljs.core.async.t58176(fn1,___$1,self__.meta58174,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__8002__auto__ = ret;if(cljs.core.truth_(and__8002__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__8002__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t58173.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t58173.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t58173.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58175){var self__ = this;
var _58175__$1 = this;return self__.meta58174;
});
cljs.core.async.t58173.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58175,meta58174__$1){var self__ = this;
var _58175__$1 = this;return (new cljs.core.async.t58173(self__.ch,self__.f,self__.map_LT_,meta58174__$1));
});
cljs.core.async.__GT_t58173 = (function __GT_t58173(ch__$1,f__$1,map_LT___$1,meta58174){return (new cljs.core.async.t58173(ch__$1,f__$1,map_LT___$1,meta58174));
});
}
return (new cljs.core.async.t58173(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t58182 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t58182 = (function (ch,f,map_GT_,meta58183){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta58183 = meta58183;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t58182.cljs$lang$type = true;
cljs.core.async.t58182.cljs$lang$ctorStr = "cljs.core.async/t58182";
cljs.core.async.t58182.cljs$lang$ctorPrWriter = (function (this__8558__auto__,writer__8559__auto__,opt__8560__auto__){return cljs.core._write.call(null,writer__8559__auto__,"cljs.core.async/t58182");
});
cljs.core.async.t58182.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t58182.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t58182.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t58182.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t58182.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t58182.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t58182.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58184){var self__ = this;
var _58184__$1 = this;return self__.meta58183;
});
cljs.core.async.t58182.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58184,meta58183__$1){var self__ = this;
var _58184__$1 = this;return (new cljs.core.async.t58182(self__.ch,self__.f,self__.map_GT_,meta58183__$1));
});
cljs.core.async.__GT_t58182 = (function __GT_t58182(ch__$1,f__$1,map_GT___$1,meta58183){return (new cljs.core.async.t58182(ch__$1,f__$1,map_GT___$1,meta58183));
});
}
return (new cljs.core.async.t58182(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t58188 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t58188 = (function (ch,p,filter_GT_,meta58189){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta58189 = meta58189;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t58188.cljs$lang$type = true;
cljs.core.async.t58188.cljs$lang$ctorStr = "cljs.core.async/t58188";
cljs.core.async.t58188.cljs$lang$ctorPrWriter = (function (this__8558__auto__,writer__8559__auto__,opt__8560__auto__){return cljs.core._write.call(null,writer__8559__auto__,"cljs.core.async/t58188");
});
cljs.core.async.t58188.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t58188.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t58188.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t58188.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t58188.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t58188.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t58188.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58190){var self__ = this;
var _58190__$1 = this;return self__.meta58189;
});
cljs.core.async.t58188.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58190,meta58189__$1){var self__ = this;
var _58190__$1 = this;return (new cljs.core.async.t58188(self__.ch,self__.p,self__.filter_GT_,meta58189__$1));
});
cljs.core.async.__GT_t58188 = (function __GT_t58188(ch__$1,p__$1,filter_GT___$1,meta58189){return (new cljs.core.async.t58188(ch__$1,p__$1,filter_GT___$1,meta58189));
});
}
return (new cljs.core.async.t58188(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12309__auto___58273 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12310__auto__ = (function (){var switch__12232__auto__ = (function (state_58252){var state_val_58253 = (state_58252[1]);if((state_val_58253 === 1))
{var state_58252__$1 = state_58252;var statearr_58254_58274 = state_58252__$1;(statearr_58254_58274[2] = null);
(statearr_58254_58274[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58253 === 2))
{var state_58252__$1 = state_58252;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58252__$1,4,ch);
} else
{if((state_val_58253 === 3))
{var inst_58250 = (state_58252[2]);var state_58252__$1 = state_58252;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58252__$1,inst_58250);
} else
{if((state_val_58253 === 4))
{var inst_58234 = (state_58252[7]);var inst_58234__$1 = (state_58252[2]);var inst_58235 = (inst_58234__$1 == null);var state_58252__$1 = (function (){var statearr_58255 = state_58252;(statearr_58255[7] = inst_58234__$1);
return statearr_58255;
})();if(cljs.core.truth_(inst_58235))
{var statearr_58256_58275 = state_58252__$1;(statearr_58256_58275[1] = 5);
} else
{var statearr_58257_58276 = state_58252__$1;(statearr_58257_58276[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58253 === 5))
{var inst_58237 = cljs.core.async.close_BANG_.call(null,out);var state_58252__$1 = state_58252;var statearr_58258_58277 = state_58252__$1;(statearr_58258_58277[2] = inst_58237);
(statearr_58258_58277[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58253 === 6))
{var inst_58234 = (state_58252[7]);var inst_58239 = p.call(null,inst_58234);var state_58252__$1 = state_58252;if(cljs.core.truth_(inst_58239))
{var statearr_58259_58278 = state_58252__$1;(statearr_58259_58278[1] = 8);
} else
{var statearr_58260_58279 = state_58252__$1;(statearr_58260_58279[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58253 === 7))
{var inst_58248 = (state_58252[2]);var state_58252__$1 = state_58252;var statearr_58261_58280 = state_58252__$1;(statearr_58261_58280[2] = inst_58248);
(statearr_58261_58280[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58253 === 8))
{var inst_58234 = (state_58252[7]);var state_58252__$1 = state_58252;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58252__$1,11,out,inst_58234);
} else
{if((state_val_58253 === 9))
{var state_58252__$1 = state_58252;var statearr_58262_58281 = state_58252__$1;(statearr_58262_58281[2] = null);
(statearr_58262_58281[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58253 === 10))
{var inst_58245 = (state_58252[2]);var state_58252__$1 = (function (){var statearr_58263 = state_58252;(statearr_58263[8] = inst_58245);
return statearr_58263;
})();var statearr_58264_58282 = state_58252__$1;(statearr_58264_58282[2] = null);
(statearr_58264_58282[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58253 === 11))
{var inst_58242 = (state_58252[2]);var state_58252__$1 = state_58252;var statearr_58265_58283 = state_58252__$1;(statearr_58265_58283[2] = inst_58242);
(statearr_58265_58283[1] = 10);
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
});return ((function (switch__12232__auto__){
return (function() {
var state_machine__12233__auto__ = null;
var state_machine__12233__auto____0 = (function (){var statearr_58269 = (new Array(9));(statearr_58269[0] = state_machine__12233__auto__);
(statearr_58269[1] = 1);
return statearr_58269;
});
var state_machine__12233__auto____1 = (function (state_58252){while(true){
var ret_value__12234__auto__ = (function (){try{while(true){
var result__12235__auto__ = switch__12232__auto__.call(null,state_58252);if(cljs.core.keyword_identical_QMARK_.call(null,result__12235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12235__auto__;
}
break;
}
}catch (e58270){if((e58270 instanceof Object))
{var ex__12236__auto__ = e58270;var statearr_58271_58284 = state_58252;(statearr_58271_58284[5] = ex__12236__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58252);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e58270;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12234__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__58285 = state_58252;
state_58252 = G__58285;
continue;
}
} else
{return ret_value__12234__auto__;
}
break;
}
});
state_machine__12233__auto__ = function(state_58252){
switch(arguments.length){
case 0:
return state_machine__12233__auto____0.call(this);
case 1:
return state_machine__12233__auto____1.call(this,state_58252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12233__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12233__auto____0;
state_machine__12233__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12233__auto____1;
return state_machine__12233__auto__;
})()
;})(switch__12232__auto__))
})();var state__12311__auto__ = (function (){var statearr_58272 = f__12310__auto__.call(null);(statearr_58272[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12309__auto___58273);
return statearr_58272;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12311__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__12309__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12310__auto__ = (function (){var switch__12232__auto__ = (function (state_58437){var state_val_58438 = (state_58437[1]);if((state_val_58438 === 1))
{var state_58437__$1 = state_58437;var statearr_58439_58476 = state_58437__$1;(statearr_58439_58476[2] = null);
(statearr_58439_58476[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58438 === 2))
{var state_58437__$1 = state_58437;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58437__$1,4,in$);
} else
{if((state_val_58438 === 3))
{var inst_58435 = (state_58437[2]);var state_58437__$1 = state_58437;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58437__$1,inst_58435);
} else
{if((state_val_58438 === 4))
{var inst_58383 = (state_58437[7]);var inst_58383__$1 = (state_58437[2]);var inst_58384 = (inst_58383__$1 == null);var state_58437__$1 = (function (){var statearr_58440 = state_58437;(statearr_58440[7] = inst_58383__$1);
return statearr_58440;
})();if(cljs.core.truth_(inst_58384))
{var statearr_58441_58477 = state_58437__$1;(statearr_58441_58477[1] = 5);
} else
{var statearr_58442_58478 = state_58437__$1;(statearr_58442_58478[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58438 === 5))
{var inst_58386 = cljs.core.async.close_BANG_.call(null,out);var state_58437__$1 = state_58437;var statearr_58443_58479 = state_58437__$1;(statearr_58443_58479[2] = inst_58386);
(statearr_58443_58479[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58438 === 6))
{var inst_58383 = (state_58437[7]);var inst_58388 = f.call(null,inst_58383);var inst_58393 = cljs.core.seq.call(null,inst_58388);var inst_58394 = inst_58393;var inst_58395 = null;var inst_58396 = 0;var inst_58397 = 0;var state_58437__$1 = (function (){var statearr_58444 = state_58437;(statearr_58444[8] = inst_58396);
(statearr_58444[9] = inst_58397);
(statearr_58444[10] = inst_58395);
(statearr_58444[11] = inst_58394);
return statearr_58444;
})();var statearr_58445_58480 = state_58437__$1;(statearr_58445_58480[2] = null);
(statearr_58445_58480[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58438 === 7))
{var inst_58433 = (state_58437[2]);var state_58437__$1 = state_58437;var statearr_58446_58481 = state_58437__$1;(statearr_58446_58481[2] = inst_58433);
(statearr_58446_58481[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58438 === 8))
{var inst_58396 = (state_58437[8]);var inst_58397 = (state_58437[9]);var inst_58399 = (inst_58397 < inst_58396);var inst_58400 = inst_58399;var state_58437__$1 = state_58437;if(cljs.core.truth_(inst_58400))
{var statearr_58447_58482 = state_58437__$1;(statearr_58447_58482[1] = 10);
} else
{var statearr_58448_58483 = state_58437__$1;(statearr_58448_58483[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58438 === 9))
{var inst_58430 = (state_58437[2]);var state_58437__$1 = (function (){var statearr_58449 = state_58437;(statearr_58449[12] = inst_58430);
return statearr_58449;
})();var statearr_58450_58484 = state_58437__$1;(statearr_58450_58484[2] = null);
(statearr_58450_58484[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58438 === 10))
{var inst_58397 = (state_58437[9]);var inst_58395 = (state_58437[10]);var inst_58402 = cljs.core._nth.call(null,inst_58395,inst_58397);var state_58437__$1 = state_58437;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58437__$1,13,out,inst_58402);
} else
{if((state_val_58438 === 11))
{var inst_58408 = (state_58437[13]);var inst_58394 = (state_58437[11]);var inst_58408__$1 = cljs.core.seq.call(null,inst_58394);var state_58437__$1 = (function (){var statearr_58454 = state_58437;(statearr_58454[13] = inst_58408__$1);
return statearr_58454;
})();if(inst_58408__$1)
{var statearr_58455_58485 = state_58437__$1;(statearr_58455_58485[1] = 14);
} else
{var statearr_58456_58486 = state_58437__$1;(statearr_58456_58486[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58438 === 12))
{var inst_58428 = (state_58437[2]);var state_58437__$1 = state_58437;var statearr_58457_58487 = state_58437__$1;(statearr_58457_58487[2] = inst_58428);
(statearr_58457_58487[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58438 === 13))
{var inst_58396 = (state_58437[8]);var inst_58397 = (state_58437[9]);var inst_58395 = (state_58437[10]);var inst_58394 = (state_58437[11]);var inst_58404 = (state_58437[2]);var inst_58405 = (inst_58397 + 1);var tmp58451 = inst_58396;var tmp58452 = inst_58395;var tmp58453 = inst_58394;var inst_58394__$1 = tmp58453;var inst_58395__$1 = tmp58452;var inst_58396__$1 = tmp58451;var inst_58397__$1 = inst_58405;var state_58437__$1 = (function (){var statearr_58458 = state_58437;(statearr_58458[14] = inst_58404);
(statearr_58458[8] = inst_58396__$1);
(statearr_58458[9] = inst_58397__$1);
(statearr_58458[10] = inst_58395__$1);
(statearr_58458[11] = inst_58394__$1);
return statearr_58458;
})();var statearr_58459_58488 = state_58437__$1;(statearr_58459_58488[2] = null);
(statearr_58459_58488[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58438 === 14))
{var inst_58408 = (state_58437[13]);var inst_58410 = cljs.core.chunked_seq_QMARK_.call(null,inst_58408);var state_58437__$1 = state_58437;if(inst_58410)
{var statearr_58460_58489 = state_58437__$1;(statearr_58460_58489[1] = 17);
} else
{var statearr_58461_58490 = state_58437__$1;(statearr_58461_58490[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58438 === 15))
{var state_58437__$1 = state_58437;var statearr_58462_58491 = state_58437__$1;(statearr_58462_58491[2] = null);
(statearr_58462_58491[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58438 === 16))
{var inst_58426 = (state_58437[2]);var state_58437__$1 = state_58437;var statearr_58463_58492 = state_58437__$1;(statearr_58463_58492[2] = inst_58426);
(statearr_58463_58492[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58438 === 17))
{var inst_58408 = (state_58437[13]);var inst_58412 = cljs.core.chunk_first.call(null,inst_58408);var inst_58413 = cljs.core.chunk_rest.call(null,inst_58408);var inst_58414 = cljs.core.count.call(null,inst_58412);var inst_58394 = inst_58413;var inst_58395 = inst_58412;var inst_58396 = inst_58414;var inst_58397 = 0;var state_58437__$1 = (function (){var statearr_58464 = state_58437;(statearr_58464[8] = inst_58396);
(statearr_58464[9] = inst_58397);
(statearr_58464[10] = inst_58395);
(statearr_58464[11] = inst_58394);
return statearr_58464;
})();var statearr_58465_58493 = state_58437__$1;(statearr_58465_58493[2] = null);
(statearr_58465_58493[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58438 === 18))
{var inst_58408 = (state_58437[13]);var inst_58417 = cljs.core.first.call(null,inst_58408);var state_58437__$1 = state_58437;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58437__$1,20,out,inst_58417);
} else
{if((state_val_58438 === 19))
{var inst_58423 = (state_58437[2]);var state_58437__$1 = state_58437;var statearr_58466_58494 = state_58437__$1;(statearr_58466_58494[2] = inst_58423);
(statearr_58466_58494[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58438 === 20))
{var inst_58408 = (state_58437[13]);var inst_58419 = (state_58437[2]);var inst_58420 = cljs.core.next.call(null,inst_58408);var inst_58394 = inst_58420;var inst_58395 = null;var inst_58396 = 0;var inst_58397 = 0;var state_58437__$1 = (function (){var statearr_58467 = state_58437;(statearr_58467[15] = inst_58419);
(statearr_58467[8] = inst_58396);
(statearr_58467[9] = inst_58397);
(statearr_58467[10] = inst_58395);
(statearr_58467[11] = inst_58394);
return statearr_58467;
})();var statearr_58468_58495 = state_58437__$1;(statearr_58468_58495[2] = null);
(statearr_58468_58495[1] = 8);
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
});return ((function (switch__12232__auto__){
return (function() {
var state_machine__12233__auto__ = null;
var state_machine__12233__auto____0 = (function (){var statearr_58472 = (new Array(16));(statearr_58472[0] = state_machine__12233__auto__);
(statearr_58472[1] = 1);
return statearr_58472;
});
var state_machine__12233__auto____1 = (function (state_58437){while(true){
var ret_value__12234__auto__ = (function (){try{while(true){
var result__12235__auto__ = switch__12232__auto__.call(null,state_58437);if(cljs.core.keyword_identical_QMARK_.call(null,result__12235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12235__auto__;
}
break;
}
}catch (e58473){if((e58473 instanceof Object))
{var ex__12236__auto__ = e58473;var statearr_58474_58496 = state_58437;(statearr_58474_58496[5] = ex__12236__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58437);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e58473;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12234__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__58497 = state_58437;
state_58437 = G__58497;
continue;
}
} else
{return ret_value__12234__auto__;
}
break;
}
});
state_machine__12233__auto__ = function(state_58437){
switch(arguments.length){
case 0:
return state_machine__12233__auto____0.call(this);
case 1:
return state_machine__12233__auto____1.call(this,state_58437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12233__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12233__auto____0;
state_machine__12233__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12233__auto____1;
return state_machine__12233__auto__;
})()
;})(switch__12232__auto__))
})();var state__12311__auto__ = (function (){var statearr_58475 = f__12310__auto__.call(null);(statearr_58475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12309__auto__);
return statearr_58475;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12311__auto__);
}));
return c__12309__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__12309__auto___58578 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12310__auto__ = (function (){var switch__12232__auto__ = (function (state_58557){var state_val_58558 = (state_58557[1]);if((state_val_58558 === 1))
{var state_58557__$1 = state_58557;var statearr_58559_58579 = state_58557__$1;(statearr_58559_58579[2] = null);
(statearr_58559_58579[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58558 === 2))
{var state_58557__$1 = state_58557;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58557__$1,4,from);
} else
{if((state_val_58558 === 3))
{var inst_58555 = (state_58557[2]);var state_58557__$1 = state_58557;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58557__$1,inst_58555);
} else
{if((state_val_58558 === 4))
{var inst_58540 = (state_58557[7]);var inst_58540__$1 = (state_58557[2]);var inst_58541 = (inst_58540__$1 == null);var state_58557__$1 = (function (){var statearr_58560 = state_58557;(statearr_58560[7] = inst_58540__$1);
return statearr_58560;
})();if(cljs.core.truth_(inst_58541))
{var statearr_58561_58580 = state_58557__$1;(statearr_58561_58580[1] = 5);
} else
{var statearr_58562_58581 = state_58557__$1;(statearr_58562_58581[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58558 === 5))
{var state_58557__$1 = state_58557;if(cljs.core.truth_(close_QMARK_))
{var statearr_58563_58582 = state_58557__$1;(statearr_58563_58582[1] = 8);
} else
{var statearr_58564_58583 = state_58557__$1;(statearr_58564_58583[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58558 === 6))
{var inst_58540 = (state_58557[7]);var state_58557__$1 = state_58557;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58557__$1,11,to,inst_58540);
} else
{if((state_val_58558 === 7))
{var inst_58553 = (state_58557[2]);var state_58557__$1 = state_58557;var statearr_58565_58584 = state_58557__$1;(statearr_58565_58584[2] = inst_58553);
(statearr_58565_58584[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58558 === 8))
{var inst_58544 = cljs.core.async.close_BANG_.call(null,to);var state_58557__$1 = state_58557;var statearr_58566_58585 = state_58557__$1;(statearr_58566_58585[2] = inst_58544);
(statearr_58566_58585[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58558 === 9))
{var state_58557__$1 = state_58557;var statearr_58567_58586 = state_58557__$1;(statearr_58567_58586[2] = null);
(statearr_58567_58586[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58558 === 10))
{var inst_58547 = (state_58557[2]);var state_58557__$1 = state_58557;var statearr_58568_58587 = state_58557__$1;(statearr_58568_58587[2] = inst_58547);
(statearr_58568_58587[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58558 === 11))
{var inst_58550 = (state_58557[2]);var state_58557__$1 = (function (){var statearr_58569 = state_58557;(statearr_58569[8] = inst_58550);
return statearr_58569;
})();var statearr_58570_58588 = state_58557__$1;(statearr_58570_58588[2] = null);
(statearr_58570_58588[1] = 2);
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
});return ((function (switch__12232__auto__){
return (function() {
var state_machine__12233__auto__ = null;
var state_machine__12233__auto____0 = (function (){var statearr_58574 = (new Array(9));(statearr_58574[0] = state_machine__12233__auto__);
(statearr_58574[1] = 1);
return statearr_58574;
});
var state_machine__12233__auto____1 = (function (state_58557){while(true){
var ret_value__12234__auto__ = (function (){try{while(true){
var result__12235__auto__ = switch__12232__auto__.call(null,state_58557);if(cljs.core.keyword_identical_QMARK_.call(null,result__12235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12235__auto__;
}
break;
}
}catch (e58575){if((e58575 instanceof Object))
{var ex__12236__auto__ = e58575;var statearr_58576_58589 = state_58557;(statearr_58576_58589[5] = ex__12236__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58557);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e58575;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12234__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__58590 = state_58557;
state_58557 = G__58590;
continue;
}
} else
{return ret_value__12234__auto__;
}
break;
}
});
state_machine__12233__auto__ = function(state_58557){
switch(arguments.length){
case 0:
return state_machine__12233__auto____0.call(this);
case 1:
return state_machine__12233__auto____1.call(this,state_58557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12233__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12233__auto____0;
state_machine__12233__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12233__auto____1;
return state_machine__12233__auto__;
})()
;})(switch__12232__auto__))
})();var state__12311__auto__ = (function (){var statearr_58577 = f__12310__auto__.call(null);(statearr_58577[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12309__auto___58578);
return statearr_58577;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12311__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__12309__auto___58677 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12310__auto__ = (function (){var switch__12232__auto__ = (function (state_58655){var state_val_58656 = (state_58655[1]);if((state_val_58656 === 1))
{var state_58655__$1 = state_58655;var statearr_58657_58678 = state_58655__$1;(statearr_58657_58678[2] = null);
(statearr_58657_58678[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58656 === 2))
{var state_58655__$1 = state_58655;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58655__$1,4,ch);
} else
{if((state_val_58656 === 3))
{var inst_58653 = (state_58655[2]);var state_58655__$1 = state_58655;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58655__$1,inst_58653);
} else
{if((state_val_58656 === 4))
{var inst_58636 = (state_58655[7]);var inst_58636__$1 = (state_58655[2]);var inst_58637 = (inst_58636__$1 == null);var state_58655__$1 = (function (){var statearr_58658 = state_58655;(statearr_58658[7] = inst_58636__$1);
return statearr_58658;
})();if(cljs.core.truth_(inst_58637))
{var statearr_58659_58679 = state_58655__$1;(statearr_58659_58679[1] = 5);
} else
{var statearr_58660_58680 = state_58655__$1;(statearr_58660_58680[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58656 === 5))
{var inst_58639 = cljs.core.async.close_BANG_.call(null,tc);var inst_58640 = cljs.core.async.close_BANG_.call(null,fc);var state_58655__$1 = (function (){var statearr_58661 = state_58655;(statearr_58661[8] = inst_58639);
return statearr_58661;
})();var statearr_58662_58681 = state_58655__$1;(statearr_58662_58681[2] = inst_58640);
(statearr_58662_58681[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58656 === 6))
{var inst_58636 = (state_58655[7]);var inst_58642 = p.call(null,inst_58636);var state_58655__$1 = state_58655;if(cljs.core.truth_(inst_58642))
{var statearr_58663_58682 = state_58655__$1;(statearr_58663_58682[1] = 9);
} else
{var statearr_58664_58683 = state_58655__$1;(statearr_58664_58683[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58656 === 7))
{var inst_58651 = (state_58655[2]);var state_58655__$1 = state_58655;var statearr_58665_58684 = state_58655__$1;(statearr_58665_58684[2] = inst_58651);
(statearr_58665_58684[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58656 === 8))
{var inst_58648 = (state_58655[2]);var state_58655__$1 = (function (){var statearr_58666 = state_58655;(statearr_58666[9] = inst_58648);
return statearr_58666;
})();var statearr_58667_58685 = state_58655__$1;(statearr_58667_58685[2] = null);
(statearr_58667_58685[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58656 === 9))
{var state_58655__$1 = state_58655;var statearr_58668_58686 = state_58655__$1;(statearr_58668_58686[2] = tc);
(statearr_58668_58686[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58656 === 10))
{var state_58655__$1 = state_58655;var statearr_58669_58687 = state_58655__$1;(statearr_58669_58687[2] = fc);
(statearr_58669_58687[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58656 === 11))
{var inst_58636 = (state_58655[7]);var inst_58646 = (state_58655[2]);var state_58655__$1 = state_58655;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58655__$1,8,inst_58646,inst_58636);
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
});return ((function (switch__12232__auto__){
return (function() {
var state_machine__12233__auto__ = null;
var state_machine__12233__auto____0 = (function (){var statearr_58673 = (new Array(10));(statearr_58673[0] = state_machine__12233__auto__);
(statearr_58673[1] = 1);
return statearr_58673;
});
var state_machine__12233__auto____1 = (function (state_58655){while(true){
var ret_value__12234__auto__ = (function (){try{while(true){
var result__12235__auto__ = switch__12232__auto__.call(null,state_58655);if(cljs.core.keyword_identical_QMARK_.call(null,result__12235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12235__auto__;
}
break;
}
}catch (e58674){if((e58674 instanceof Object))
{var ex__12236__auto__ = e58674;var statearr_58675_58688 = state_58655;(statearr_58675_58688[5] = ex__12236__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58655);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e58674;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12234__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__58689 = state_58655;
state_58655 = G__58689;
continue;
}
} else
{return ret_value__12234__auto__;
}
break;
}
});
state_machine__12233__auto__ = function(state_58655){
switch(arguments.length){
case 0:
return state_machine__12233__auto____0.call(this);
case 1:
return state_machine__12233__auto____1.call(this,state_58655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12233__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12233__auto____0;
state_machine__12233__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12233__auto____1;
return state_machine__12233__auto__;
})()
;})(switch__12232__auto__))
})();var state__12311__auto__ = (function (){var statearr_58676 = f__12310__auto__.call(null);(statearr_58676[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12309__auto___58677);
return statearr_58676;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12311__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__12309__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12310__auto__ = (function (){var switch__12232__auto__ = (function (state_58736){var state_val_58737 = (state_58736[1]);if((state_val_58737 === 7))
{var inst_58732 = (state_58736[2]);var state_58736__$1 = state_58736;var statearr_58738_58754 = state_58736__$1;(statearr_58738_58754[2] = inst_58732);
(statearr_58738_58754[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58737 === 6))
{var inst_58725 = (state_58736[7]);var inst_58722 = (state_58736[8]);var inst_58729 = f.call(null,inst_58722,inst_58725);var inst_58722__$1 = inst_58729;var state_58736__$1 = (function (){var statearr_58739 = state_58736;(statearr_58739[8] = inst_58722__$1);
return statearr_58739;
})();var statearr_58740_58755 = state_58736__$1;(statearr_58740_58755[2] = null);
(statearr_58740_58755[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58737 === 5))
{var inst_58722 = (state_58736[8]);var state_58736__$1 = state_58736;var statearr_58741_58756 = state_58736__$1;(statearr_58741_58756[2] = inst_58722);
(statearr_58741_58756[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58737 === 4))
{var inst_58725 = (state_58736[7]);var inst_58725__$1 = (state_58736[2]);var inst_58726 = (inst_58725__$1 == null);var state_58736__$1 = (function (){var statearr_58742 = state_58736;(statearr_58742[7] = inst_58725__$1);
return statearr_58742;
})();if(cljs.core.truth_(inst_58726))
{var statearr_58743_58757 = state_58736__$1;(statearr_58743_58757[1] = 5);
} else
{var statearr_58744_58758 = state_58736__$1;(statearr_58744_58758[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58737 === 3))
{var inst_58734 = (state_58736[2]);var state_58736__$1 = state_58736;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58736__$1,inst_58734);
} else
{if((state_val_58737 === 2))
{var state_58736__$1 = state_58736;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58736__$1,4,ch);
} else
{if((state_val_58737 === 1))
{var inst_58722 = init;var state_58736__$1 = (function (){var statearr_58745 = state_58736;(statearr_58745[8] = inst_58722);
return statearr_58745;
})();var statearr_58746_58759 = state_58736__$1;(statearr_58746_58759[2] = null);
(statearr_58746_58759[1] = 2);
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
});return ((function (switch__12232__auto__){
return (function() {
var state_machine__12233__auto__ = null;
var state_machine__12233__auto____0 = (function (){var statearr_58750 = (new Array(9));(statearr_58750[0] = state_machine__12233__auto__);
(statearr_58750[1] = 1);
return statearr_58750;
});
var state_machine__12233__auto____1 = (function (state_58736){while(true){
var ret_value__12234__auto__ = (function (){try{while(true){
var result__12235__auto__ = switch__12232__auto__.call(null,state_58736);if(cljs.core.keyword_identical_QMARK_.call(null,result__12235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12235__auto__;
}
break;
}
}catch (e58751){if((e58751 instanceof Object))
{var ex__12236__auto__ = e58751;var statearr_58752_58760 = state_58736;(statearr_58752_58760[5] = ex__12236__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58736);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e58751;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12234__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__58761 = state_58736;
state_58736 = G__58761;
continue;
}
} else
{return ret_value__12234__auto__;
}
break;
}
});
state_machine__12233__auto__ = function(state_58736){
switch(arguments.length){
case 0:
return state_machine__12233__auto____0.call(this);
case 1:
return state_machine__12233__auto____1.call(this,state_58736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12233__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12233__auto____0;
state_machine__12233__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12233__auto____1;
return state_machine__12233__auto__;
})()
;})(switch__12232__auto__))
})();var state__12311__auto__ = (function (){var statearr_58753 = f__12310__auto__.call(null);(statearr_58753[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12309__auto__);
return statearr_58753;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12311__auto__);
}));
return c__12309__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__12309__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12310__auto__ = (function (){var switch__12232__auto__ = (function (state_58823){var state_val_58824 = (state_58823[1]);if((state_val_58824 === 1))
{var inst_58803 = cljs.core.seq.call(null,coll);var inst_58804 = inst_58803;var state_58823__$1 = (function (){var statearr_58825 = state_58823;(statearr_58825[7] = inst_58804);
return statearr_58825;
})();var statearr_58826_58844 = state_58823__$1;(statearr_58826_58844[2] = null);
(statearr_58826_58844[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58824 === 2))
{var inst_58804 = (state_58823[7]);var state_58823__$1 = state_58823;if(cljs.core.truth_(inst_58804))
{var statearr_58827_58845 = state_58823__$1;(statearr_58827_58845[1] = 4);
} else
{var statearr_58828_58846 = state_58823__$1;(statearr_58828_58846[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58824 === 3))
{var inst_58821 = (state_58823[2]);var state_58823__$1 = state_58823;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58823__$1,inst_58821);
} else
{if((state_val_58824 === 4))
{var inst_58804 = (state_58823[7]);var inst_58807 = cljs.core.first.call(null,inst_58804);var state_58823__$1 = state_58823;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58823__$1,7,ch,inst_58807);
} else
{if((state_val_58824 === 5))
{var state_58823__$1 = state_58823;if(cljs.core.truth_(close_QMARK_))
{var statearr_58829_58847 = state_58823__$1;(statearr_58829_58847[1] = 8);
} else
{var statearr_58830_58848 = state_58823__$1;(statearr_58830_58848[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58824 === 6))
{var inst_58819 = (state_58823[2]);var state_58823__$1 = state_58823;var statearr_58831_58849 = state_58823__$1;(statearr_58831_58849[2] = inst_58819);
(statearr_58831_58849[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58824 === 7))
{var inst_58804 = (state_58823[7]);var inst_58809 = (state_58823[2]);var inst_58810 = cljs.core.next.call(null,inst_58804);var inst_58804__$1 = inst_58810;var state_58823__$1 = (function (){var statearr_58832 = state_58823;(statearr_58832[7] = inst_58804__$1);
(statearr_58832[8] = inst_58809);
return statearr_58832;
})();var statearr_58833_58850 = state_58823__$1;(statearr_58833_58850[2] = null);
(statearr_58833_58850[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58824 === 8))
{var inst_58814 = cljs.core.async.close_BANG_.call(null,ch);var state_58823__$1 = state_58823;var statearr_58834_58851 = state_58823__$1;(statearr_58834_58851[2] = inst_58814);
(statearr_58834_58851[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58824 === 9))
{var state_58823__$1 = state_58823;var statearr_58835_58852 = state_58823__$1;(statearr_58835_58852[2] = null);
(statearr_58835_58852[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_58824 === 10))
{var inst_58817 = (state_58823[2]);var state_58823__$1 = state_58823;var statearr_58836_58853 = state_58823__$1;(statearr_58836_58853[2] = inst_58817);
(statearr_58836_58853[1] = 6);
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
});return ((function (switch__12232__auto__){
return (function() {
var state_machine__12233__auto__ = null;
var state_machine__12233__auto____0 = (function (){var statearr_58840 = (new Array(9));(statearr_58840[0] = state_machine__12233__auto__);
(statearr_58840[1] = 1);
return statearr_58840;
});
var state_machine__12233__auto____1 = (function (state_58823){while(true){
var ret_value__12234__auto__ = (function (){try{while(true){
var result__12235__auto__ = switch__12232__auto__.call(null,state_58823);if(cljs.core.keyword_identical_QMARK_.call(null,result__12235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12235__auto__;
}
break;
}
}catch (e58841){if((e58841 instanceof Object))
{var ex__12236__auto__ = e58841;var statearr_58842_58854 = state_58823;(statearr_58842_58854[5] = ex__12236__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58823);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e58841;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12234__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__58855 = state_58823;
state_58823 = G__58855;
continue;
}
} else
{return ret_value__12234__auto__;
}
break;
}
});
state_machine__12233__auto__ = function(state_58823){
switch(arguments.length){
case 0:
return state_machine__12233__auto____0.call(this);
case 1:
return state_machine__12233__auto____1.call(this,state_58823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12233__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12233__auto____0;
state_machine__12233__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12233__auto____1;
return state_machine__12233__auto__;
})()
;})(switch__12232__auto__))
})();var state__12311__auto__ = (function (){var statearr_58843 = f__12310__auto__.call(null);(statearr_58843[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12309__auto__);
return statearr_58843;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12311__auto__);
}));
return c__12309__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj58857 = {};return obj58857;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__8002__auto__ = _;if(and__8002__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__8002__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__8617__auto__ = (((_ == null))?null:_);return (function (){var or__8014__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8617__auto__)]);if(or__8014__auto__)
{return or__8014__auto__;
} else
{var or__8014__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__8014__auto____$1)
{return or__8014__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj58859 = {};return obj58859;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__8002__auto__ = m;if(and__8002__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__8002__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__8617__auto__ = (((m == null))?null:m);return (function (){var or__8014__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8617__auto__)]);if(or__8014__auto__)
{return or__8014__auto__;
} else
{var or__8014__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__8014__auto____$1)
{return or__8014__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__8002__auto__ = m;if(and__8002__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__8002__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__8617__auto__ = (((m == null))?null:m);return (function (){var or__8014__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8617__auto__)]);if(or__8014__auto__)
{return or__8014__auto__;
} else
{var or__8014__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__8014__auto____$1)
{return or__8014__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__8002__auto__ = m;if(and__8002__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__8002__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__8617__auto__ = (((m == null))?null:m);return (function (){var or__8014__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8617__auto__)]);if(or__8014__auto__)
{return or__8014__auto__;
} else
{var or__8014__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__8014__auto____$1)
{return or__8014__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t59083 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t59083 = (function (cs,ch,mult,meta59084){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta59084 = meta59084;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t59083.cljs$lang$type = true;
cljs.core.async.t59083.cljs$lang$ctorStr = "cljs.core.async/t59083";
cljs.core.async.t59083.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8558__auto__,writer__8559__auto__,opt__8560__auto__){return cljs.core._write.call(null,writer__8559__auto__,"cljs.core.async/t59083");
});})(cs))
;
cljs.core.async.t59083.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t59083.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t59083.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t59083.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t59083.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t59083.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t59083.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_59085){var self__ = this;
var _59085__$1 = this;return self__.meta59084;
});})(cs))
;
cljs.core.async.t59083.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_59085,meta59084__$1){var self__ = this;
var _59085__$1 = this;return (new cljs.core.async.t59083(self__.cs,self__.ch,self__.mult,meta59084__$1));
});})(cs))
;
cljs.core.async.__GT_t59083 = ((function (cs){
return (function __GT_t59083(cs__$1,ch__$1,mult__$1,meta59084){return (new cljs.core.async.t59083(cs__$1,ch__$1,mult__$1,meta59084));
});})(cs))
;
}
return (new cljs.core.async.t59083(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__12309__auto___59306 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12310__auto__ = (function (){var switch__12232__auto__ = (function (state_59220){var state_val_59221 = (state_59220[1]);if((state_val_59221 === 32))
{var inst_59088 = (state_59220[7]);var inst_59164 = (state_59220[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_59220,31,Object,null,30);var inst_59171 = cljs.core.async.put_BANG_.call(null,inst_59164,inst_59088,done);var state_59220__$1 = state_59220;var statearr_59222_59307 = state_59220__$1;(statearr_59222_59307[2] = inst_59171);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59220__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59221 === 1))
{var state_59220__$1 = state_59220;var statearr_59223_59308 = state_59220__$1;(statearr_59223_59308[2] = null);
(statearr_59223_59308[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59221 === 33))
{var inst_59177 = (state_59220[9]);var inst_59179 = cljs.core.chunked_seq_QMARK_.call(null,inst_59177);var state_59220__$1 = state_59220;if(inst_59179)
{var statearr_59224_59309 = state_59220__$1;(statearr_59224_59309[1] = 36);
} else
{var statearr_59225_59310 = state_59220__$1;(statearr_59225_59310[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59221 === 2))
{var state_59220__$1 = state_59220;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59220__$1,4,ch);
} else
{if((state_val_59221 === 34))
{var state_59220__$1 = state_59220;var statearr_59226_59311 = state_59220__$1;(statearr_59226_59311[2] = null);
(statearr_59226_59311[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59221 === 3))
{var inst_59218 = (state_59220[2]);var state_59220__$1 = state_59220;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59220__$1,inst_59218);
} else
{if((state_val_59221 === 35))
{var inst_59202 = (state_59220[2]);var state_59220__$1 = state_59220;var statearr_59227_59312 = state_59220__$1;(statearr_59227_59312[2] = inst_59202);
(statearr_59227_59312[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59221 === 4))
{var inst_59088 = (state_59220[7]);var inst_59088__$1 = (state_59220[2]);var inst_59089 = (inst_59088__$1 == null);var state_59220__$1 = (function (){var statearr_59228 = state_59220;(statearr_59228[7] = inst_59088__$1);
return statearr_59228;
})();if(cljs.core.truth_(inst_59089))
{var statearr_59229_59313 = state_59220__$1;(statearr_59229_59313[1] = 5);
} else
{var statearr_59230_59314 = state_59220__$1;(statearr_59230_59314[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59221 === 36))
{var inst_59177 = (state_59220[9]);var inst_59181 = cljs.core.chunk_first.call(null,inst_59177);var inst_59182 = cljs.core.chunk_rest.call(null,inst_59177);var inst_59183 = cljs.core.count.call(null,inst_59181);var inst_59156 = inst_59182;var inst_59157 = inst_59181;var inst_59158 = inst_59183;var inst_59159 = 0;var state_59220__$1 = (function (){var statearr_59231 = state_59220;(statearr_59231[10] = inst_59157);
(statearr_59231[11] = inst_59158);
(statearr_59231[12] = inst_59156);
(statearr_59231[13] = inst_59159);
return statearr_59231;
})();var statearr_59232_59315 = state_59220__$1;(statearr_59232_59315[2] = null);
(statearr_59232_59315[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59221 === 5))
{var inst_59095 = cljs.core.deref.call(null,cs);var inst_59096 = cljs.core.seq.call(null,inst_59095);var inst_59097 = inst_59096;var inst_59098 = null;var inst_59099 = 0;var inst_59100 = 0;var state_59220__$1 = (function (){var statearr_59233 = state_59220;(statearr_59233[14] = inst_59097);
(statearr_59233[15] = inst_59099);
(statearr_59233[16] = inst_59098);
(statearr_59233[17] = inst_59100);
return statearr_59233;
})();var statearr_59234_59316 = state_59220__$1;(statearr_59234_59316[2] = null);
(statearr_59234_59316[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59221 === 37))
{var inst_59177 = (state_59220[9]);var inst_59186 = cljs.core.first.call(null,inst_59177);var state_59220__$1 = (function (){var statearr_59235 = state_59220;(statearr_59235[18] = inst_59186);
return statearr_59235;
})();var statearr_59236_59317 = state_59220__$1;(statearr_59236_59317[2] = null);
(statearr_59236_59317[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59221 === 6))
{var inst_59148 = (state_59220[19]);var inst_59147 = cljs.core.deref.call(null,cs);var inst_59148__$1 = cljs.core.keys.call(null,inst_59147);var inst_59149 = cljs.core.count.call(null,inst_59148__$1);var inst_59150 = cljs.core.reset_BANG_.call(null,dctr,inst_59149);var inst_59155 = cljs.core.seq.call(null,inst_59148__$1);var inst_59156 = inst_59155;var inst_59157 = null;var inst_59158 = 0;var inst_59159 = 0;var state_59220__$1 = (function (){var statearr_59237 = state_59220;(statearr_59237[19] = inst_59148__$1);
(statearr_59237[20] = inst_59150);
(statearr_59237[10] = inst_59157);
(statearr_59237[11] = inst_59158);
(statearr_59237[12] = inst_59156);
(statearr_59237[13] = inst_59159);
return statearr_59237;
})();var statearr_59238_59318 = state_59220__$1;(statearr_59238_59318[2] = null);
(statearr_59238_59318[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59221 === 38))
{var inst_59199 = (state_59220[2]);var state_59220__$1 = state_59220;var statearr_59239_59319 = state_59220__$1;(statearr_59239_59319[2] = inst_59199);
(statearr_59239_59319[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59221 === 7))
{var inst_59216 = (state_59220[2]);var state_59220__$1 = state_59220;var statearr_59240_59320 = state_59220__$1;(statearr_59240_59320[2] = inst_59216);
(statearr_59240_59320[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59221 === 39))
{var inst_59177 = (state_59220[9]);var inst_59195 = (state_59220[2]);var inst_59196 = cljs.core.next.call(null,inst_59177);var inst_59156 = inst_59196;var inst_59157 = null;var inst_59158 = 0;var inst_59159 = 0;var state_59220__$1 = (function (){var statearr_59241 = state_59220;(statearr_59241[10] = inst_59157);
(statearr_59241[11] = inst_59158);
(statearr_59241[12] = inst_59156);
(statearr_59241[21] = inst_59195);
(statearr_59241[13] = inst_59159);
return statearr_59241;
})();var statearr_59242_59321 = state_59220__$1;(statearr_59242_59321[2] = null);
(statearr_59242_59321[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59221 === 8))
{var inst_59099 = (state_59220[15]);var inst_59100 = (state_59220[17]);var inst_59102 = (inst_59100 < inst_59099);var inst_59103 = inst_59102;var state_59220__$1 = state_59220;if(cljs.core.truth_(inst_59103))
{var statearr_59243_59322 = state_59220__$1;(statearr_59243_59322[1] = 10);
} else
{var statearr_59244_59323 = state_59220__$1;(statearr_59244_59323[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59221 === 40))
{var inst_59186 = (state_59220[18]);var inst_59187 = (state_59220[2]);var inst_59188 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_59189 = cljs.core.async.untap_STAR_.call(null,m,inst_59186);var state_59220__$1 = (function (){var statearr_59245 = state_59220;(statearr_59245[22] = inst_59188);
(statearr_59245[23] = inst_59187);
return statearr_59245;
})();var statearr_59246_59324 = state_59220__$1;(statearr_59246_59324[2] = inst_59189);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59220__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59221 === 9))
{var inst_59145 = (state_59220[2]);var state_59220__$1 = state_59220;var statearr_59247_59325 = state_59220__$1;(statearr_59247_59325[2] = inst_59145);
(statearr_59247_59325[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59221 === 41))
{var inst_59186 = (state_59220[18]);var inst_59088 = (state_59220[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_59220,40,Object,null,39);var inst_59193 = cljs.core.async.put_BANG_.call(null,inst_59186,inst_59088,done);var state_59220__$1 = state_59220;var statearr_59248_59326 = state_59220__$1;(statearr_59248_59326[2] = inst_59193);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59220__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59221 === 10))
{var inst_59098 = (state_59220[16]);var inst_59100 = (state_59220[17]);var inst_59106 = cljs.core._nth.call(null,inst_59098,inst_59100);var inst_59107 = cljs.core.nth.call(null,inst_59106,0,null);var inst_59108 = cljs.core.nth.call(null,inst_59106,1,null);var state_59220__$1 = (function (){var statearr_59249 = state_59220;(statearr_59249[24] = inst_59107);
return statearr_59249;
})();if(cljs.core.truth_(inst_59108))
{var statearr_59250_59327 = state_59220__$1;(statearr_59250_59327[1] = 13);
} else
{var statearr_59251_59328 = state_59220__$1;(statearr_59251_59328[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59221 === 42))
{var state_59220__$1 = state_59220;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59220__$1,45,dchan);
} else
{if((state_val_59221 === 11))
{var inst_59097 = (state_59220[14]);var inst_59117 = (state_59220[25]);var inst_59117__$1 = cljs.core.seq.call(null,inst_59097);var state_59220__$1 = (function (){var statearr_59252 = state_59220;(statearr_59252[25] = inst_59117__$1);
return statearr_59252;
})();if(inst_59117__$1)
{var statearr_59253_59329 = state_59220__$1;(statearr_59253_59329[1] = 16);
} else
{var statearr_59254_59330 = state_59220__$1;(statearr_59254_59330[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59221 === 43))
{var state_59220__$1 = state_59220;var statearr_59255_59331 = state_59220__$1;(statearr_59255_59331[2] = null);
(statearr_59255_59331[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59221 === 12))
{var inst_59143 = (state_59220[2]);var state_59220__$1 = state_59220;var statearr_59256_59332 = state_59220__$1;(statearr_59256_59332[2] = inst_59143);
(statearr_59256_59332[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59221 === 44))
{var inst_59213 = (state_59220[2]);var state_59220__$1 = (function (){var statearr_59257 = state_59220;(statearr_59257[26] = inst_59213);
return statearr_59257;
})();var statearr_59258_59333 = state_59220__$1;(statearr_59258_59333[2] = null);
(statearr_59258_59333[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59221 === 13))
{var inst_59107 = (state_59220[24]);var inst_59110 = cljs.core.async.close_BANG_.call(null,inst_59107);var state_59220__$1 = state_59220;var statearr_59259_59334 = state_59220__$1;(statearr_59259_59334[2] = inst_59110);
(statearr_59259_59334[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59221 === 45))
{var inst_59210 = (state_59220[2]);var state_59220__$1 = state_59220;var statearr_59263_59335 = state_59220__$1;(statearr_59263_59335[2] = inst_59210);
(statearr_59263_59335[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59221 === 14))
{var state_59220__$1 = state_59220;var statearr_59264_59336 = state_59220__$1;(statearr_59264_59336[2] = null);
(statearr_59264_59336[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59221 === 15))
{var inst_59097 = (state_59220[14]);var inst_59099 = (state_59220[15]);var inst_59098 = (state_59220[16]);var inst_59100 = (state_59220[17]);var inst_59113 = (state_59220[2]);var inst_59114 = (inst_59100 + 1);var tmp59260 = inst_59097;var tmp59261 = inst_59099;var tmp59262 = inst_59098;var inst_59097__$1 = tmp59260;var inst_59098__$1 = tmp59262;var inst_59099__$1 = tmp59261;var inst_59100__$1 = inst_59114;var state_59220__$1 = (function (){var statearr_59265 = state_59220;(statearr_59265[14] = inst_59097__$1);
(statearr_59265[15] = inst_59099__$1);
(statearr_59265[16] = inst_59098__$1);
(statearr_59265[17] = inst_59100__$1);
(statearr_59265[27] = inst_59113);
return statearr_59265;
})();var statearr_59266_59337 = state_59220__$1;(statearr_59266_59337[2] = null);
(statearr_59266_59337[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59221 === 16))
{var inst_59117 = (state_59220[25]);var inst_59119 = cljs.core.chunked_seq_QMARK_.call(null,inst_59117);var state_59220__$1 = state_59220;if(inst_59119)
{var statearr_59267_59338 = state_59220__$1;(statearr_59267_59338[1] = 19);
} else
{var statearr_59268_59339 = state_59220__$1;(statearr_59268_59339[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59221 === 17))
{var state_59220__$1 = state_59220;var statearr_59269_59340 = state_59220__$1;(statearr_59269_59340[2] = null);
(statearr_59269_59340[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59221 === 18))
{var inst_59141 = (state_59220[2]);var state_59220__$1 = state_59220;var statearr_59270_59341 = state_59220__$1;(statearr_59270_59341[2] = inst_59141);
(statearr_59270_59341[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59221 === 19))
{var inst_59117 = (state_59220[25]);var inst_59121 = cljs.core.chunk_first.call(null,inst_59117);var inst_59122 = cljs.core.chunk_rest.call(null,inst_59117);var inst_59123 = cljs.core.count.call(null,inst_59121);var inst_59097 = inst_59122;var inst_59098 = inst_59121;var inst_59099 = inst_59123;var inst_59100 = 0;var state_59220__$1 = (function (){var statearr_59271 = state_59220;(statearr_59271[14] = inst_59097);
(statearr_59271[15] = inst_59099);
(statearr_59271[16] = inst_59098);
(statearr_59271[17] = inst_59100);
return statearr_59271;
})();var statearr_59272_59342 = state_59220__$1;(statearr_59272_59342[2] = null);
(statearr_59272_59342[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59221 === 20))
{var inst_59117 = (state_59220[25]);var inst_59127 = cljs.core.first.call(null,inst_59117);var inst_59128 = cljs.core.nth.call(null,inst_59127,0,null);var inst_59129 = cljs.core.nth.call(null,inst_59127,1,null);var state_59220__$1 = (function (){var statearr_59273 = state_59220;(statearr_59273[28] = inst_59128);
return statearr_59273;
})();if(cljs.core.truth_(inst_59129))
{var statearr_59274_59343 = state_59220__$1;(statearr_59274_59343[1] = 22);
} else
{var statearr_59275_59344 = state_59220__$1;(statearr_59275_59344[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59221 === 21))
{var inst_59138 = (state_59220[2]);var state_59220__$1 = state_59220;var statearr_59276_59345 = state_59220__$1;(statearr_59276_59345[2] = inst_59138);
(statearr_59276_59345[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59221 === 22))
{var inst_59128 = (state_59220[28]);var inst_59131 = cljs.core.async.close_BANG_.call(null,inst_59128);var state_59220__$1 = state_59220;var statearr_59277_59346 = state_59220__$1;(statearr_59277_59346[2] = inst_59131);
(statearr_59277_59346[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59221 === 23))
{var state_59220__$1 = state_59220;var statearr_59278_59347 = state_59220__$1;(statearr_59278_59347[2] = null);
(statearr_59278_59347[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59221 === 24))
{var inst_59117 = (state_59220[25]);var inst_59134 = (state_59220[2]);var inst_59135 = cljs.core.next.call(null,inst_59117);var inst_59097 = inst_59135;var inst_59098 = null;var inst_59099 = 0;var inst_59100 = 0;var state_59220__$1 = (function (){var statearr_59279 = state_59220;(statearr_59279[29] = inst_59134);
(statearr_59279[14] = inst_59097);
(statearr_59279[15] = inst_59099);
(statearr_59279[16] = inst_59098);
(statearr_59279[17] = inst_59100);
return statearr_59279;
})();var statearr_59280_59348 = state_59220__$1;(statearr_59280_59348[2] = null);
(statearr_59280_59348[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59221 === 25))
{var inst_59158 = (state_59220[11]);var inst_59159 = (state_59220[13]);var inst_59161 = (inst_59159 < inst_59158);var inst_59162 = inst_59161;var state_59220__$1 = state_59220;if(cljs.core.truth_(inst_59162))
{var statearr_59281_59349 = state_59220__$1;(statearr_59281_59349[1] = 27);
} else
{var statearr_59282_59350 = state_59220__$1;(statearr_59282_59350[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59221 === 26))
{var inst_59148 = (state_59220[19]);var inst_59206 = (state_59220[2]);var inst_59207 = cljs.core.seq.call(null,inst_59148);var state_59220__$1 = (function (){var statearr_59283 = state_59220;(statearr_59283[30] = inst_59206);
return statearr_59283;
})();if(inst_59207)
{var statearr_59284_59351 = state_59220__$1;(statearr_59284_59351[1] = 42);
} else
{var statearr_59285_59352 = state_59220__$1;(statearr_59285_59352[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59221 === 27))
{var inst_59157 = (state_59220[10]);var inst_59159 = (state_59220[13]);var inst_59164 = cljs.core._nth.call(null,inst_59157,inst_59159);var state_59220__$1 = (function (){var statearr_59286 = state_59220;(statearr_59286[8] = inst_59164);
return statearr_59286;
})();var statearr_59287_59353 = state_59220__$1;(statearr_59287_59353[2] = null);
(statearr_59287_59353[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59221 === 28))
{var inst_59177 = (state_59220[9]);var inst_59156 = (state_59220[12]);var inst_59177__$1 = cljs.core.seq.call(null,inst_59156);var state_59220__$1 = (function (){var statearr_59291 = state_59220;(statearr_59291[9] = inst_59177__$1);
return statearr_59291;
})();if(inst_59177__$1)
{var statearr_59292_59354 = state_59220__$1;(statearr_59292_59354[1] = 33);
} else
{var statearr_59293_59355 = state_59220__$1;(statearr_59293_59355[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59221 === 29))
{var inst_59204 = (state_59220[2]);var state_59220__$1 = state_59220;var statearr_59294_59356 = state_59220__$1;(statearr_59294_59356[2] = inst_59204);
(statearr_59294_59356[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59221 === 30))
{var inst_59157 = (state_59220[10]);var inst_59158 = (state_59220[11]);var inst_59156 = (state_59220[12]);var inst_59159 = (state_59220[13]);var inst_59173 = (state_59220[2]);var inst_59174 = (inst_59159 + 1);var tmp59288 = inst_59157;var tmp59289 = inst_59158;var tmp59290 = inst_59156;var inst_59156__$1 = tmp59290;var inst_59157__$1 = tmp59288;var inst_59158__$1 = tmp59289;var inst_59159__$1 = inst_59174;var state_59220__$1 = (function (){var statearr_59295 = state_59220;(statearr_59295[31] = inst_59173);
(statearr_59295[10] = inst_59157__$1);
(statearr_59295[11] = inst_59158__$1);
(statearr_59295[12] = inst_59156__$1);
(statearr_59295[13] = inst_59159__$1);
return statearr_59295;
})();var statearr_59296_59357 = state_59220__$1;(statearr_59296_59357[2] = null);
(statearr_59296_59357[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59221 === 31))
{var inst_59164 = (state_59220[8]);var inst_59165 = (state_59220[2]);var inst_59166 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_59167 = cljs.core.async.untap_STAR_.call(null,m,inst_59164);var state_59220__$1 = (function (){var statearr_59297 = state_59220;(statearr_59297[32] = inst_59166);
(statearr_59297[33] = inst_59165);
return statearr_59297;
})();var statearr_59298_59358 = state_59220__$1;(statearr_59298_59358[2] = inst_59167);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59220__$1);
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
}
});return ((function (switch__12232__auto__){
return (function() {
var state_machine__12233__auto__ = null;
var state_machine__12233__auto____0 = (function (){var statearr_59302 = (new Array(34));(statearr_59302[0] = state_machine__12233__auto__);
(statearr_59302[1] = 1);
return statearr_59302;
});
var state_machine__12233__auto____1 = (function (state_59220){while(true){
var ret_value__12234__auto__ = (function (){try{while(true){
var result__12235__auto__ = switch__12232__auto__.call(null,state_59220);if(cljs.core.keyword_identical_QMARK_.call(null,result__12235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12235__auto__;
}
break;
}
}catch (e59303){if((e59303 instanceof Object))
{var ex__12236__auto__ = e59303;var statearr_59304_59359 = state_59220;(statearr_59304_59359[5] = ex__12236__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59220);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e59303;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12234__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__59360 = state_59220;
state_59220 = G__59360;
continue;
}
} else
{return ret_value__12234__auto__;
}
break;
}
});
state_machine__12233__auto__ = function(state_59220){
switch(arguments.length){
case 0:
return state_machine__12233__auto____0.call(this);
case 1:
return state_machine__12233__auto____1.call(this,state_59220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12233__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12233__auto____0;
state_machine__12233__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12233__auto____1;
return state_machine__12233__auto__;
})()
;})(switch__12232__auto__))
})();var state__12311__auto__ = (function (){var statearr_59305 = f__12310__auto__.call(null);(statearr_59305[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12309__auto___59306);
return statearr_59305;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12311__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj59362 = {};return obj59362;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__8002__auto__ = m;if(and__8002__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__8002__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__8617__auto__ = (((m == null))?null:m);return (function (){var or__8014__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8617__auto__)]);if(or__8014__auto__)
{return or__8014__auto__;
} else
{var or__8014__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__8014__auto____$1)
{return or__8014__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__8002__auto__ = m;if(and__8002__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__8002__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__8617__auto__ = (((m == null))?null:m);return (function (){var or__8014__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8617__auto__)]);if(or__8014__auto__)
{return or__8014__auto__;
} else
{var or__8014__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__8014__auto____$1)
{return or__8014__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__8002__auto__ = m;if(and__8002__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__8002__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__8617__auto__ = (((m == null))?null:m);return (function (){var or__8014__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8617__auto__)]);if(or__8014__auto__)
{return or__8014__auto__;
} else
{var or__8014__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__8014__auto____$1)
{return or__8014__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__8002__auto__ = m;if(and__8002__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__8002__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__8617__auto__ = (((m == null))?null:m);return (function (){var or__8014__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8617__auto__)]);if(or__8014__auto__)
{return or__8014__auto__;
} else
{var or__8014__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__8014__auto____$1)
{return or__8014__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__8002__auto__ = m;if(and__8002__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__8002__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__8617__auto__ = (((m == null))?null:m);return (function (){var or__8014__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8617__auto__)]);if(or__8014__auto__)
{return or__8014__auto__;
} else
{var or__8014__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__8014__auto____$1)
{return or__8014__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t59472 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t59472 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta59473){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta59473 = meta59473;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t59472.cljs$lang$type = true;
cljs.core.async.t59472.cljs$lang$ctorStr = "cljs.core.async/t59472";
cljs.core.async.t59472.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8558__auto__,writer__8559__auto__,opt__8560__auto__){return cljs.core._write.call(null,writer__8559__auto__,"cljs.core.async/t59472");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t59472.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t59472.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t59472.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t59472.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t59472.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t59472.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t59472.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t59472.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t59472.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_59474){var self__ = this;
var _59474__$1 = this;return self__.meta59473;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t59472.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_59474,meta59473__$1){var self__ = this;
var _59474__$1 = this;return (new cljs.core.async.t59472(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta59473__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t59472 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t59472(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta59473){return (new cljs.core.async.t59472(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta59473));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t59472(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__12309__auto___59581 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12310__auto__ = (function (){var switch__12232__auto__ = (function (state_59539){var state_val_59540 = (state_59539[1]);if((state_val_59540 === 1))
{var inst_59478 = (state_59539[7]);var inst_59478__$1 = calc_state.call(null);var inst_59479 = cljs.core.seq_QMARK_.call(null,inst_59478__$1);var state_59539__$1 = (function (){var statearr_59541 = state_59539;(statearr_59541[7] = inst_59478__$1);
return statearr_59541;
})();if(inst_59479)
{var statearr_59542_59582 = state_59539__$1;(statearr_59542_59582[1] = 2);
} else
{var statearr_59543_59583 = state_59539__$1;(statearr_59543_59583[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59540 === 2))
{var inst_59478 = (state_59539[7]);var inst_59481 = cljs.core.apply.call(null,cljs.core.hash_map,inst_59478);var state_59539__$1 = state_59539;var statearr_59544_59584 = state_59539__$1;(statearr_59544_59584[2] = inst_59481);
(statearr_59544_59584[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59540 === 3))
{var inst_59478 = (state_59539[7]);var state_59539__$1 = state_59539;var statearr_59545_59585 = state_59539__$1;(statearr_59545_59585[2] = inst_59478);
(statearr_59545_59585[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59540 === 4))
{var inst_59478 = (state_59539[7]);var inst_59484 = (state_59539[2]);var inst_59485 = cljs.core.get.call(null,inst_59484,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_59486 = cljs.core.get.call(null,inst_59484,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_59487 = cljs.core.get.call(null,inst_59484,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_59488 = inst_59478;var state_59539__$1 = (function (){var statearr_59546 = state_59539;(statearr_59546[8] = inst_59487);
(statearr_59546[9] = inst_59488);
(statearr_59546[10] = inst_59485);
(statearr_59546[11] = inst_59486);
return statearr_59546;
})();var statearr_59547_59586 = state_59539__$1;(statearr_59547_59586[2] = null);
(statearr_59547_59586[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59540 === 5))
{var inst_59488 = (state_59539[9]);var inst_59491 = cljs.core.seq_QMARK_.call(null,inst_59488);var state_59539__$1 = state_59539;if(inst_59491)
{var statearr_59548_59587 = state_59539__$1;(statearr_59548_59587[1] = 7);
} else
{var statearr_59549_59588 = state_59539__$1;(statearr_59549_59588[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59540 === 6))
{var inst_59537 = (state_59539[2]);var state_59539__$1 = state_59539;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59539__$1,inst_59537);
} else
{if((state_val_59540 === 7))
{var inst_59488 = (state_59539[9]);var inst_59493 = cljs.core.apply.call(null,cljs.core.hash_map,inst_59488);var state_59539__$1 = state_59539;var statearr_59550_59589 = state_59539__$1;(statearr_59550_59589[2] = inst_59493);
(statearr_59550_59589[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59540 === 8))
{var inst_59488 = (state_59539[9]);var state_59539__$1 = state_59539;var statearr_59551_59590 = state_59539__$1;(statearr_59551_59590[2] = inst_59488);
(statearr_59551_59590[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59540 === 9))
{var inst_59496 = (state_59539[12]);var inst_59496__$1 = (state_59539[2]);var inst_59497 = cljs.core.get.call(null,inst_59496__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_59498 = cljs.core.get.call(null,inst_59496__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_59499 = cljs.core.get.call(null,inst_59496__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_59539__$1 = (function (){var statearr_59552 = state_59539;(statearr_59552[13] = inst_59498);
(statearr_59552[14] = inst_59499);
(statearr_59552[12] = inst_59496__$1);
return statearr_59552;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_59539__$1,10,inst_59497);
} else
{if((state_val_59540 === 10))
{var inst_59503 = (state_59539[15]);var inst_59504 = (state_59539[16]);var inst_59502 = (state_59539[2]);var inst_59503__$1 = cljs.core.nth.call(null,inst_59502,0,null);var inst_59504__$1 = cljs.core.nth.call(null,inst_59502,1,null);var inst_59505 = (inst_59503__$1 == null);var inst_59506 = cljs.core._EQ_.call(null,inst_59504__$1,change);var inst_59507 = (inst_59505) || (inst_59506);var state_59539__$1 = (function (){var statearr_59553 = state_59539;(statearr_59553[15] = inst_59503__$1);
(statearr_59553[16] = inst_59504__$1);
return statearr_59553;
})();if(cljs.core.truth_(inst_59507))
{var statearr_59554_59591 = state_59539__$1;(statearr_59554_59591[1] = 11);
} else
{var statearr_59555_59592 = state_59539__$1;(statearr_59555_59592[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59540 === 11))
{var inst_59503 = (state_59539[15]);var inst_59509 = (inst_59503 == null);var state_59539__$1 = state_59539;if(cljs.core.truth_(inst_59509))
{var statearr_59556_59593 = state_59539__$1;(statearr_59556_59593[1] = 14);
} else
{var statearr_59557_59594 = state_59539__$1;(statearr_59557_59594[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59540 === 12))
{var inst_59499 = (state_59539[14]);var inst_59518 = (state_59539[17]);var inst_59504 = (state_59539[16]);var inst_59518__$1 = inst_59499.call(null,inst_59504);var state_59539__$1 = (function (){var statearr_59558 = state_59539;(statearr_59558[17] = inst_59518__$1);
return statearr_59558;
})();if(cljs.core.truth_(inst_59518__$1))
{var statearr_59559_59595 = state_59539__$1;(statearr_59559_59595[1] = 17);
} else
{var statearr_59560_59596 = state_59539__$1;(statearr_59560_59596[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59540 === 13))
{var inst_59535 = (state_59539[2]);var state_59539__$1 = state_59539;var statearr_59561_59597 = state_59539__$1;(statearr_59561_59597[2] = inst_59535);
(statearr_59561_59597[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59540 === 14))
{var inst_59504 = (state_59539[16]);var inst_59511 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_59504);var state_59539__$1 = state_59539;var statearr_59562_59598 = state_59539__$1;(statearr_59562_59598[2] = inst_59511);
(statearr_59562_59598[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59540 === 15))
{var state_59539__$1 = state_59539;var statearr_59563_59599 = state_59539__$1;(statearr_59563_59599[2] = null);
(statearr_59563_59599[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59540 === 16))
{var inst_59514 = (state_59539[2]);var inst_59515 = calc_state.call(null);var inst_59488 = inst_59515;var state_59539__$1 = (function (){var statearr_59564 = state_59539;(statearr_59564[9] = inst_59488);
(statearr_59564[18] = inst_59514);
return statearr_59564;
})();var statearr_59565_59600 = state_59539__$1;(statearr_59565_59600[2] = null);
(statearr_59565_59600[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59540 === 17))
{var inst_59518 = (state_59539[17]);var state_59539__$1 = state_59539;var statearr_59566_59601 = state_59539__$1;(statearr_59566_59601[2] = inst_59518);
(statearr_59566_59601[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59540 === 18))
{var inst_59498 = (state_59539[13]);var inst_59499 = (state_59539[14]);var inst_59504 = (state_59539[16]);var inst_59521 = cljs.core.empty_QMARK_.call(null,inst_59499);var inst_59522 = inst_59498.call(null,inst_59504);var inst_59523 = cljs.core.not.call(null,inst_59522);var inst_59524 = (inst_59521) && (inst_59523);var state_59539__$1 = state_59539;var statearr_59567_59602 = state_59539__$1;(statearr_59567_59602[2] = inst_59524);
(statearr_59567_59602[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59540 === 19))
{var inst_59526 = (state_59539[2]);var state_59539__$1 = state_59539;if(cljs.core.truth_(inst_59526))
{var statearr_59568_59603 = state_59539__$1;(statearr_59568_59603[1] = 20);
} else
{var statearr_59569_59604 = state_59539__$1;(statearr_59569_59604[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59540 === 20))
{var inst_59503 = (state_59539[15]);var state_59539__$1 = state_59539;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59539__$1,23,out,inst_59503);
} else
{if((state_val_59540 === 21))
{var state_59539__$1 = state_59539;var statearr_59570_59605 = state_59539__$1;(statearr_59570_59605[2] = null);
(statearr_59570_59605[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59540 === 22))
{var inst_59496 = (state_59539[12]);var inst_59532 = (state_59539[2]);var inst_59488 = inst_59496;var state_59539__$1 = (function (){var statearr_59571 = state_59539;(statearr_59571[19] = inst_59532);
(statearr_59571[9] = inst_59488);
return statearr_59571;
})();var statearr_59572_59606 = state_59539__$1;(statearr_59572_59606[2] = null);
(statearr_59572_59606[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59540 === 23))
{var inst_59529 = (state_59539[2]);var state_59539__$1 = state_59539;var statearr_59573_59607 = state_59539__$1;(statearr_59573_59607[2] = inst_59529);
(statearr_59573_59607[1] = 22);
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
}
});return ((function (switch__12232__auto__){
return (function() {
var state_machine__12233__auto__ = null;
var state_machine__12233__auto____0 = (function (){var statearr_59577 = (new Array(20));(statearr_59577[0] = state_machine__12233__auto__);
(statearr_59577[1] = 1);
return statearr_59577;
});
var state_machine__12233__auto____1 = (function (state_59539){while(true){
var ret_value__12234__auto__ = (function (){try{while(true){
var result__12235__auto__ = switch__12232__auto__.call(null,state_59539);if(cljs.core.keyword_identical_QMARK_.call(null,result__12235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12235__auto__;
}
break;
}
}catch (e59578){if((e59578 instanceof Object))
{var ex__12236__auto__ = e59578;var statearr_59579_59608 = state_59539;(statearr_59579_59608[5] = ex__12236__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59539);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e59578;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12234__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__59609 = state_59539;
state_59539 = G__59609;
continue;
}
} else
{return ret_value__12234__auto__;
}
break;
}
});
state_machine__12233__auto__ = function(state_59539){
switch(arguments.length){
case 0:
return state_machine__12233__auto____0.call(this);
case 1:
return state_machine__12233__auto____1.call(this,state_59539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12233__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12233__auto____0;
state_machine__12233__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12233__auto____1;
return state_machine__12233__auto__;
})()
;})(switch__12232__auto__))
})();var state__12311__auto__ = (function (){var statearr_59580 = f__12310__auto__.call(null);(statearr_59580[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12309__auto___59581);
return statearr_59580;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12311__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj59611 = {};return obj59611;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__8002__auto__ = p;if(and__8002__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__8002__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__8617__auto__ = (((p == null))?null:p);return (function (){var or__8014__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8617__auto__)]);if(or__8014__auto__)
{return or__8014__auto__;
} else
{var or__8014__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__8014__auto____$1)
{return or__8014__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__8002__auto__ = p;if(and__8002__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__8002__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__8617__auto__ = (((p == null))?null:p);return (function (){var or__8014__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8617__auto__)]);if(or__8014__auto__)
{return or__8014__auto__;
} else
{var or__8014__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__8014__auto____$1)
{return or__8014__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__8002__auto__ = p;if(and__8002__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__8002__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__8617__auto__ = (((p == null))?null:p);return (function (){var or__8014__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8617__auto__)]);if(or__8014__auto__)
{return or__8014__auto__;
} else
{var or__8014__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__8014__auto____$1)
{return or__8014__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__8002__auto__ = p;if(and__8002__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__8002__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__8617__auto__ = (((p == null))?null:p);return (function (){var or__8014__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8617__auto__)]);if(or__8014__auto__)
{return or__8014__auto__;
} else
{var or__8014__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__8014__auto____$1)
{return or__8014__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__8014__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__8014__auto__))
{return or__8014__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__8014__auto__,mults){
return (function (p1__59612_SHARP_){if(cljs.core.truth_(p1__59612_SHARP_.call(null,topic)))
{return p1__59612_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__59612_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__8014__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t59737 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t59737 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta59738){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta59738 = meta59738;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t59737.cljs$lang$type = true;
cljs.core.async.t59737.cljs$lang$ctorStr = "cljs.core.async/t59737";
cljs.core.async.t59737.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8558__auto__,writer__8559__auto__,opt__8560__auto__){return cljs.core._write.call(null,writer__8559__auto__,"cljs.core.async/t59737");
});})(mults,ensure_mult))
;
cljs.core.async.t59737.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t59737.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t59737.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t59737.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t59737.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t59737.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t59737.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t59737.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_59739){var self__ = this;
var _59739__$1 = this;return self__.meta59738;
});})(mults,ensure_mult))
;
cljs.core.async.t59737.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_59739,meta59738__$1){var self__ = this;
var _59739__$1 = this;return (new cljs.core.async.t59737(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta59738__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t59737 = ((function (mults,ensure_mult){
return (function __GT_t59737(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta59738){return (new cljs.core.async.t59737(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta59738));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t59737(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__12309__auto___59861 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12310__auto__ = (function (){var switch__12232__auto__ = (function (state_59813){var state_val_59814 = (state_59813[1]);if((state_val_59814 === 1))
{var state_59813__$1 = state_59813;var statearr_59815_59862 = state_59813__$1;(statearr_59815_59862[2] = null);
(statearr_59815_59862[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59814 === 2))
{var state_59813__$1 = state_59813;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59813__$1,4,ch);
} else
{if((state_val_59814 === 3))
{var inst_59811 = (state_59813[2]);var state_59813__$1 = state_59813;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59813__$1,inst_59811);
} else
{if((state_val_59814 === 4))
{var inst_59742 = (state_59813[7]);var inst_59742__$1 = (state_59813[2]);var inst_59743 = (inst_59742__$1 == null);var state_59813__$1 = (function (){var statearr_59816 = state_59813;(statearr_59816[7] = inst_59742__$1);
return statearr_59816;
})();if(cljs.core.truth_(inst_59743))
{var statearr_59817_59863 = state_59813__$1;(statearr_59817_59863[1] = 5);
} else
{var statearr_59818_59864 = state_59813__$1;(statearr_59818_59864[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59814 === 5))
{var inst_59749 = cljs.core.deref.call(null,mults);var inst_59750 = cljs.core.vals.call(null,inst_59749);var inst_59751 = cljs.core.seq.call(null,inst_59750);var inst_59752 = inst_59751;var inst_59753 = null;var inst_59754 = 0;var inst_59755 = 0;var state_59813__$1 = (function (){var statearr_59819 = state_59813;(statearr_59819[8] = inst_59752);
(statearr_59819[9] = inst_59755);
(statearr_59819[10] = inst_59754);
(statearr_59819[11] = inst_59753);
return statearr_59819;
})();var statearr_59820_59865 = state_59813__$1;(statearr_59820_59865[2] = null);
(statearr_59820_59865[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59814 === 6))
{var inst_59742 = (state_59813[7]);var inst_59790 = (state_59813[12]);var inst_59792 = (state_59813[13]);var inst_59790__$1 = topic_fn.call(null,inst_59742);var inst_59791 = cljs.core.deref.call(null,mults);var inst_59792__$1 = cljs.core.get.call(null,inst_59791,inst_59790__$1);var state_59813__$1 = (function (){var statearr_59821 = state_59813;(statearr_59821[12] = inst_59790__$1);
(statearr_59821[13] = inst_59792__$1);
return statearr_59821;
})();if(cljs.core.truth_(inst_59792__$1))
{var statearr_59822_59866 = state_59813__$1;(statearr_59822_59866[1] = 19);
} else
{var statearr_59823_59867 = state_59813__$1;(statearr_59823_59867[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59814 === 7))
{var inst_59809 = (state_59813[2]);var state_59813__$1 = state_59813;var statearr_59824_59868 = state_59813__$1;(statearr_59824_59868[2] = inst_59809);
(statearr_59824_59868[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59814 === 8))
{var inst_59755 = (state_59813[9]);var inst_59754 = (state_59813[10]);var inst_59757 = (inst_59755 < inst_59754);var inst_59758 = inst_59757;var state_59813__$1 = state_59813;if(cljs.core.truth_(inst_59758))
{var statearr_59828_59869 = state_59813__$1;(statearr_59828_59869[1] = 10);
} else
{var statearr_59829_59870 = state_59813__$1;(statearr_59829_59870[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59814 === 9))
{var inst_59788 = (state_59813[2]);var state_59813__$1 = state_59813;var statearr_59830_59871 = state_59813__$1;(statearr_59830_59871[2] = inst_59788);
(statearr_59830_59871[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59814 === 10))
{var inst_59752 = (state_59813[8]);var inst_59755 = (state_59813[9]);var inst_59754 = (state_59813[10]);var inst_59753 = (state_59813[11]);var inst_59760 = cljs.core._nth.call(null,inst_59753,inst_59755);var inst_59761 = cljs.core.async.muxch_STAR_.call(null,inst_59760);var inst_59762 = cljs.core.async.close_BANG_.call(null,inst_59761);var inst_59763 = (inst_59755 + 1);var tmp59825 = inst_59752;var tmp59826 = inst_59754;var tmp59827 = inst_59753;var inst_59752__$1 = tmp59825;var inst_59753__$1 = tmp59827;var inst_59754__$1 = tmp59826;var inst_59755__$1 = inst_59763;var state_59813__$1 = (function (){var statearr_59831 = state_59813;(statearr_59831[8] = inst_59752__$1);
(statearr_59831[14] = inst_59762);
(statearr_59831[9] = inst_59755__$1);
(statearr_59831[10] = inst_59754__$1);
(statearr_59831[11] = inst_59753__$1);
return statearr_59831;
})();var statearr_59832_59872 = state_59813__$1;(statearr_59832_59872[2] = null);
(statearr_59832_59872[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59814 === 11))
{var inst_59752 = (state_59813[8]);var inst_59766 = (state_59813[15]);var inst_59766__$1 = cljs.core.seq.call(null,inst_59752);var state_59813__$1 = (function (){var statearr_59833 = state_59813;(statearr_59833[15] = inst_59766__$1);
return statearr_59833;
})();if(inst_59766__$1)
{var statearr_59834_59873 = state_59813__$1;(statearr_59834_59873[1] = 13);
} else
{var statearr_59835_59874 = state_59813__$1;(statearr_59835_59874[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59814 === 12))
{var inst_59786 = (state_59813[2]);var state_59813__$1 = state_59813;var statearr_59836_59875 = state_59813__$1;(statearr_59836_59875[2] = inst_59786);
(statearr_59836_59875[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59814 === 13))
{var inst_59766 = (state_59813[15]);var inst_59768 = cljs.core.chunked_seq_QMARK_.call(null,inst_59766);var state_59813__$1 = state_59813;if(inst_59768)
{var statearr_59837_59876 = state_59813__$1;(statearr_59837_59876[1] = 16);
} else
{var statearr_59838_59877 = state_59813__$1;(statearr_59838_59877[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59814 === 14))
{var state_59813__$1 = state_59813;var statearr_59839_59878 = state_59813__$1;(statearr_59839_59878[2] = null);
(statearr_59839_59878[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59814 === 15))
{var inst_59784 = (state_59813[2]);var state_59813__$1 = state_59813;var statearr_59840_59879 = state_59813__$1;(statearr_59840_59879[2] = inst_59784);
(statearr_59840_59879[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59814 === 16))
{var inst_59766 = (state_59813[15]);var inst_59770 = cljs.core.chunk_first.call(null,inst_59766);var inst_59771 = cljs.core.chunk_rest.call(null,inst_59766);var inst_59772 = cljs.core.count.call(null,inst_59770);var inst_59752 = inst_59771;var inst_59753 = inst_59770;var inst_59754 = inst_59772;var inst_59755 = 0;var state_59813__$1 = (function (){var statearr_59841 = state_59813;(statearr_59841[8] = inst_59752);
(statearr_59841[9] = inst_59755);
(statearr_59841[10] = inst_59754);
(statearr_59841[11] = inst_59753);
return statearr_59841;
})();var statearr_59842_59880 = state_59813__$1;(statearr_59842_59880[2] = null);
(statearr_59842_59880[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59814 === 17))
{var inst_59766 = (state_59813[15]);var inst_59775 = cljs.core.first.call(null,inst_59766);var inst_59776 = cljs.core.async.muxch_STAR_.call(null,inst_59775);var inst_59777 = cljs.core.async.close_BANG_.call(null,inst_59776);var inst_59778 = cljs.core.next.call(null,inst_59766);var inst_59752 = inst_59778;var inst_59753 = null;var inst_59754 = 0;var inst_59755 = 0;var state_59813__$1 = (function (){var statearr_59843 = state_59813;(statearr_59843[16] = inst_59777);
(statearr_59843[8] = inst_59752);
(statearr_59843[9] = inst_59755);
(statearr_59843[10] = inst_59754);
(statearr_59843[11] = inst_59753);
return statearr_59843;
})();var statearr_59844_59881 = state_59813__$1;(statearr_59844_59881[2] = null);
(statearr_59844_59881[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59814 === 18))
{var inst_59781 = (state_59813[2]);var state_59813__$1 = state_59813;var statearr_59845_59882 = state_59813__$1;(statearr_59845_59882[2] = inst_59781);
(statearr_59845_59882[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59814 === 19))
{var state_59813__$1 = state_59813;var statearr_59846_59883 = state_59813__$1;(statearr_59846_59883[2] = null);
(statearr_59846_59883[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59814 === 20))
{var state_59813__$1 = state_59813;var statearr_59847_59884 = state_59813__$1;(statearr_59847_59884[2] = null);
(statearr_59847_59884[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59814 === 21))
{var inst_59806 = (state_59813[2]);var state_59813__$1 = (function (){var statearr_59848 = state_59813;(statearr_59848[17] = inst_59806);
return statearr_59848;
})();var statearr_59849_59885 = state_59813__$1;(statearr_59849_59885[2] = null);
(statearr_59849_59885[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59814 === 22))
{var inst_59803 = (state_59813[2]);var state_59813__$1 = state_59813;var statearr_59850_59886 = state_59813__$1;(statearr_59850_59886[2] = inst_59803);
(statearr_59850_59886[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59814 === 23))
{var inst_59790 = (state_59813[12]);var inst_59794 = (state_59813[2]);var inst_59795 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_59790);var state_59813__$1 = (function (){var statearr_59851 = state_59813;(statearr_59851[18] = inst_59794);
return statearr_59851;
})();var statearr_59852_59887 = state_59813__$1;(statearr_59852_59887[2] = inst_59795);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59813__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59814 === 24))
{var inst_59742 = (state_59813[7]);var inst_59792 = (state_59813[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_59813,23,Object,null,22);var inst_59799 = cljs.core.async.muxch_STAR_.call(null,inst_59792);var state_59813__$1 = state_59813;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59813__$1,25,inst_59799,inst_59742);
} else
{if((state_val_59814 === 25))
{var inst_59801 = (state_59813[2]);var state_59813__$1 = state_59813;var statearr_59853_59888 = state_59813__$1;(statearr_59853_59888[2] = inst_59801);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59813__$1);
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
}
}
}
});return ((function (switch__12232__auto__){
return (function() {
var state_machine__12233__auto__ = null;
var state_machine__12233__auto____0 = (function (){var statearr_59857 = (new Array(19));(statearr_59857[0] = state_machine__12233__auto__);
(statearr_59857[1] = 1);
return statearr_59857;
});
var state_machine__12233__auto____1 = (function (state_59813){while(true){
var ret_value__12234__auto__ = (function (){try{while(true){
var result__12235__auto__ = switch__12232__auto__.call(null,state_59813);if(cljs.core.keyword_identical_QMARK_.call(null,result__12235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12235__auto__;
}
break;
}
}catch (e59858){if((e59858 instanceof Object))
{var ex__12236__auto__ = e59858;var statearr_59859_59889 = state_59813;(statearr_59859_59889[5] = ex__12236__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59813);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e59858;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12234__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__59890 = state_59813;
state_59813 = G__59890;
continue;
}
} else
{return ret_value__12234__auto__;
}
break;
}
});
state_machine__12233__auto__ = function(state_59813){
switch(arguments.length){
case 0:
return state_machine__12233__auto____0.call(this);
case 1:
return state_machine__12233__auto____1.call(this,state_59813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12233__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12233__auto____0;
state_machine__12233__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12233__auto____1;
return state_machine__12233__auto__;
})()
;})(switch__12232__auto__))
})();var state__12311__auto__ = (function (){var statearr_59860 = f__12310__auto__.call(null);(statearr_59860[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12309__auto___59861);
return statearr_59860;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12311__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__12309__auto___60027 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12310__auto__ = (function (){var switch__12232__auto__ = (function (state_59997){var state_val_59998 = (state_59997[1]);if((state_val_59998 === 1))
{var state_59997__$1 = state_59997;var statearr_59999_60028 = state_59997__$1;(statearr_59999_60028[2] = null);
(statearr_59999_60028[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59998 === 2))
{var inst_59960 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_59961 = 0;var state_59997__$1 = (function (){var statearr_60000 = state_59997;(statearr_60000[7] = inst_59960);
(statearr_60000[8] = inst_59961);
return statearr_60000;
})();var statearr_60001_60029 = state_59997__$1;(statearr_60001_60029[2] = null);
(statearr_60001_60029[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59998 === 3))
{var inst_59995 = (state_59997[2]);var state_59997__$1 = state_59997;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59997__$1,inst_59995);
} else
{if((state_val_59998 === 4))
{var inst_59961 = (state_59997[8]);var inst_59963 = (inst_59961 < cnt);var state_59997__$1 = state_59997;if(cljs.core.truth_(inst_59963))
{var statearr_60002_60030 = state_59997__$1;(statearr_60002_60030[1] = 6);
} else
{var statearr_60003_60031 = state_59997__$1;(statearr_60003_60031[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59998 === 5))
{var inst_59981 = (state_59997[2]);var state_59997__$1 = (function (){var statearr_60004 = state_59997;(statearr_60004[9] = inst_59981);
return statearr_60004;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59997__$1,12,dchan);
} else
{if((state_val_59998 === 6))
{var state_59997__$1 = state_59997;var statearr_60005_60032 = state_59997__$1;(statearr_60005_60032[2] = null);
(statearr_60005_60032[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59998 === 7))
{var state_59997__$1 = state_59997;var statearr_60006_60033 = state_59997__$1;(statearr_60006_60033[2] = null);
(statearr_60006_60033[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59998 === 8))
{var inst_59979 = (state_59997[2]);var state_59997__$1 = state_59997;var statearr_60007_60034 = state_59997__$1;(statearr_60007_60034[2] = inst_59979);
(statearr_60007_60034[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59998 === 9))
{var inst_59961 = (state_59997[8]);var inst_59974 = (state_59997[2]);var inst_59975 = (inst_59961 + 1);var inst_59961__$1 = inst_59975;var state_59997__$1 = (function (){var statearr_60008 = state_59997;(statearr_60008[10] = inst_59974);
(statearr_60008[8] = inst_59961__$1);
return statearr_60008;
})();var statearr_60009_60035 = state_59997__$1;(statearr_60009_60035[2] = null);
(statearr_60009_60035[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59998 === 10))
{var inst_59965 = (state_59997[2]);var inst_59966 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_59997__$1 = (function (){var statearr_60010 = state_59997;(statearr_60010[11] = inst_59965);
return statearr_60010;
})();var statearr_60011_60036 = state_59997__$1;(statearr_60011_60036[2] = inst_59966);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59997__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59998 === 11))
{var inst_59961 = (state_59997[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_59997,10,Object,null,9);var inst_59970 = chs__$1.call(null,inst_59961);var inst_59971 = done.call(null,inst_59961);var inst_59972 = cljs.core.async.take_BANG_.call(null,inst_59970,inst_59971);var state_59997__$1 = state_59997;var statearr_60012_60037 = state_59997__$1;(statearr_60012_60037[2] = inst_59972);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59997__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59998 === 12))
{var inst_59983 = (state_59997[12]);var inst_59983__$1 = (state_59997[2]);var inst_59984 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_59983__$1);var state_59997__$1 = (function (){var statearr_60013 = state_59997;(statearr_60013[12] = inst_59983__$1);
return statearr_60013;
})();if(cljs.core.truth_(inst_59984))
{var statearr_60014_60038 = state_59997__$1;(statearr_60014_60038[1] = 13);
} else
{var statearr_60015_60039 = state_59997__$1;(statearr_60015_60039[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59998 === 13))
{var inst_59986 = cljs.core.async.close_BANG_.call(null,out);var state_59997__$1 = state_59997;var statearr_60016_60040 = state_59997__$1;(statearr_60016_60040[2] = inst_59986);
(statearr_60016_60040[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59998 === 14))
{var inst_59983 = (state_59997[12]);var inst_59988 = cljs.core.apply.call(null,f,inst_59983);var state_59997__$1 = state_59997;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59997__$1,16,out,inst_59988);
} else
{if((state_val_59998 === 15))
{var inst_59993 = (state_59997[2]);var state_59997__$1 = state_59997;var statearr_60017_60041 = state_59997__$1;(statearr_60017_60041[2] = inst_59993);
(statearr_60017_60041[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59998 === 16))
{var inst_59990 = (state_59997[2]);var state_59997__$1 = (function (){var statearr_60018 = state_59997;(statearr_60018[13] = inst_59990);
return statearr_60018;
})();var statearr_60019_60042 = state_59997__$1;(statearr_60019_60042[2] = null);
(statearr_60019_60042[1] = 2);
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
});return ((function (switch__12232__auto__){
return (function() {
var state_machine__12233__auto__ = null;
var state_machine__12233__auto____0 = (function (){var statearr_60023 = (new Array(14));(statearr_60023[0] = state_machine__12233__auto__);
(statearr_60023[1] = 1);
return statearr_60023;
});
var state_machine__12233__auto____1 = (function (state_59997){while(true){
var ret_value__12234__auto__ = (function (){try{while(true){
var result__12235__auto__ = switch__12232__auto__.call(null,state_59997);if(cljs.core.keyword_identical_QMARK_.call(null,result__12235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12235__auto__;
}
break;
}
}catch (e60024){if((e60024 instanceof Object))
{var ex__12236__auto__ = e60024;var statearr_60025_60043 = state_59997;(statearr_60025_60043[5] = ex__12236__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59997);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e60024;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12234__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__60044 = state_59997;
state_59997 = G__60044;
continue;
}
} else
{return ret_value__12234__auto__;
}
break;
}
});
state_machine__12233__auto__ = function(state_59997){
switch(arguments.length){
case 0:
return state_machine__12233__auto____0.call(this);
case 1:
return state_machine__12233__auto____1.call(this,state_59997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12233__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12233__auto____0;
state_machine__12233__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12233__auto____1;
return state_machine__12233__auto__;
})()
;})(switch__12232__auto__))
})();var state__12311__auto__ = (function (){var statearr_60026 = f__12310__auto__.call(null);(statearr_60026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12309__auto___60027);
return statearr_60026;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12311__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12309__auto___60152 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12310__auto__ = (function (){var switch__12232__auto__ = (function (state_60128){var state_val_60129 = (state_60128[1]);if((state_val_60129 === 1))
{var inst_60099 = cljs.core.vec.call(null,chs);var inst_60100 = inst_60099;var state_60128__$1 = (function (){var statearr_60130 = state_60128;(statearr_60130[7] = inst_60100);
return statearr_60130;
})();var statearr_60131_60153 = state_60128__$1;(statearr_60131_60153[2] = null);
(statearr_60131_60153[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60129 === 2))
{var inst_60100 = (state_60128[7]);var inst_60102 = cljs.core.count.call(null,inst_60100);var inst_60103 = (inst_60102 > 0);var state_60128__$1 = state_60128;if(cljs.core.truth_(inst_60103))
{var statearr_60132_60154 = state_60128__$1;(statearr_60132_60154[1] = 4);
} else
{var statearr_60133_60155 = state_60128__$1;(statearr_60133_60155[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60129 === 3))
{var inst_60126 = (state_60128[2]);var state_60128__$1 = state_60128;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60128__$1,inst_60126);
} else
{if((state_val_60129 === 4))
{var inst_60100 = (state_60128[7]);var state_60128__$1 = state_60128;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_60128__$1,7,inst_60100);
} else
{if((state_val_60129 === 5))
{var inst_60122 = cljs.core.async.close_BANG_.call(null,out);var state_60128__$1 = state_60128;var statearr_60134_60156 = state_60128__$1;(statearr_60134_60156[2] = inst_60122);
(statearr_60134_60156[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60129 === 6))
{var inst_60124 = (state_60128[2]);var state_60128__$1 = state_60128;var statearr_60135_60157 = state_60128__$1;(statearr_60135_60157[2] = inst_60124);
(statearr_60135_60157[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60129 === 7))
{var inst_60108 = (state_60128[8]);var inst_60107 = (state_60128[9]);var inst_60107__$1 = (state_60128[2]);var inst_60108__$1 = cljs.core.nth.call(null,inst_60107__$1,0,null);var inst_60109 = cljs.core.nth.call(null,inst_60107__$1,1,null);var inst_60110 = (inst_60108__$1 == null);var state_60128__$1 = (function (){var statearr_60136 = state_60128;(statearr_60136[8] = inst_60108__$1);
(statearr_60136[10] = inst_60109);
(statearr_60136[9] = inst_60107__$1);
return statearr_60136;
})();if(cljs.core.truth_(inst_60110))
{var statearr_60137_60158 = state_60128__$1;(statearr_60137_60158[1] = 8);
} else
{var statearr_60138_60159 = state_60128__$1;(statearr_60138_60159[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60129 === 8))
{var inst_60108 = (state_60128[8]);var inst_60109 = (state_60128[10]);var inst_60107 = (state_60128[9]);var inst_60100 = (state_60128[7]);var inst_60112 = (function (){var c = inst_60109;var v = inst_60108;var vec__60105 = inst_60107;var cs = inst_60100;return ((function (c,v,vec__60105,cs,inst_60108,inst_60109,inst_60107,inst_60100,state_val_60129){
return (function (p1__60045_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__60045_SHARP_);
});
;})(c,v,vec__60105,cs,inst_60108,inst_60109,inst_60107,inst_60100,state_val_60129))
})();var inst_60113 = cljs.core.filterv.call(null,inst_60112,inst_60100);var inst_60100__$1 = inst_60113;var state_60128__$1 = (function (){var statearr_60139 = state_60128;(statearr_60139[7] = inst_60100__$1);
return statearr_60139;
})();var statearr_60140_60160 = state_60128__$1;(statearr_60140_60160[2] = null);
(statearr_60140_60160[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60129 === 9))
{var inst_60108 = (state_60128[8]);var state_60128__$1 = state_60128;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60128__$1,11,out,inst_60108);
} else
{if((state_val_60129 === 10))
{var inst_60120 = (state_60128[2]);var state_60128__$1 = state_60128;var statearr_60142_60161 = state_60128__$1;(statearr_60142_60161[2] = inst_60120);
(statearr_60142_60161[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60129 === 11))
{var inst_60100 = (state_60128[7]);var inst_60117 = (state_60128[2]);var tmp60141 = inst_60100;var inst_60100__$1 = tmp60141;var state_60128__$1 = (function (){var statearr_60143 = state_60128;(statearr_60143[7] = inst_60100__$1);
(statearr_60143[11] = inst_60117);
return statearr_60143;
})();var statearr_60144_60162 = state_60128__$1;(statearr_60144_60162[2] = null);
(statearr_60144_60162[1] = 2);
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
});return ((function (switch__12232__auto__){
return (function() {
var state_machine__12233__auto__ = null;
var state_machine__12233__auto____0 = (function (){var statearr_60148 = (new Array(12));(statearr_60148[0] = state_machine__12233__auto__);
(statearr_60148[1] = 1);
return statearr_60148;
});
var state_machine__12233__auto____1 = (function (state_60128){while(true){
var ret_value__12234__auto__ = (function (){try{while(true){
var result__12235__auto__ = switch__12232__auto__.call(null,state_60128);if(cljs.core.keyword_identical_QMARK_.call(null,result__12235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12235__auto__;
}
break;
}
}catch (e60149){if((e60149 instanceof Object))
{var ex__12236__auto__ = e60149;var statearr_60150_60163 = state_60128;(statearr_60150_60163[5] = ex__12236__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60128);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e60149;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12234__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__60164 = state_60128;
state_60128 = G__60164;
continue;
}
} else
{return ret_value__12234__auto__;
}
break;
}
});
state_machine__12233__auto__ = function(state_60128){
switch(arguments.length){
case 0:
return state_machine__12233__auto____0.call(this);
case 1:
return state_machine__12233__auto____1.call(this,state_60128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12233__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12233__auto____0;
state_machine__12233__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12233__auto____1;
return state_machine__12233__auto__;
})()
;})(switch__12232__auto__))
})();var state__12311__auto__ = (function (){var statearr_60151 = f__12310__auto__.call(null);(statearr_60151[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12309__auto___60152);
return statearr_60151;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12311__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12309__auto___60257 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12310__auto__ = (function (){var switch__12232__auto__ = (function (state_60234){var state_val_60235 = (state_60234[1]);if((state_val_60235 === 1))
{var inst_60211 = 0;var state_60234__$1 = (function (){var statearr_60236 = state_60234;(statearr_60236[7] = inst_60211);
return statearr_60236;
})();var statearr_60237_60258 = state_60234__$1;(statearr_60237_60258[2] = null);
(statearr_60237_60258[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60235 === 2))
{var inst_60211 = (state_60234[7]);var inst_60213 = (inst_60211 < n);var state_60234__$1 = state_60234;if(cljs.core.truth_(inst_60213))
{var statearr_60238_60259 = state_60234__$1;(statearr_60238_60259[1] = 4);
} else
{var statearr_60239_60260 = state_60234__$1;(statearr_60239_60260[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60235 === 3))
{var inst_60231 = (state_60234[2]);var inst_60232 = cljs.core.async.close_BANG_.call(null,out);var state_60234__$1 = (function (){var statearr_60240 = state_60234;(statearr_60240[8] = inst_60231);
return statearr_60240;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60234__$1,inst_60232);
} else
{if((state_val_60235 === 4))
{var state_60234__$1 = state_60234;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60234__$1,7,ch);
} else
{if((state_val_60235 === 5))
{var state_60234__$1 = state_60234;var statearr_60241_60261 = state_60234__$1;(statearr_60241_60261[2] = null);
(statearr_60241_60261[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60235 === 6))
{var inst_60229 = (state_60234[2]);var state_60234__$1 = state_60234;var statearr_60242_60262 = state_60234__$1;(statearr_60242_60262[2] = inst_60229);
(statearr_60242_60262[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60235 === 7))
{var inst_60216 = (state_60234[9]);var inst_60216__$1 = (state_60234[2]);var inst_60217 = (inst_60216__$1 == null);var inst_60218 = cljs.core.not.call(null,inst_60217);var state_60234__$1 = (function (){var statearr_60243 = state_60234;(statearr_60243[9] = inst_60216__$1);
return statearr_60243;
})();if(inst_60218)
{var statearr_60244_60263 = state_60234__$1;(statearr_60244_60263[1] = 8);
} else
{var statearr_60245_60264 = state_60234__$1;(statearr_60245_60264[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60235 === 8))
{var inst_60216 = (state_60234[9]);var state_60234__$1 = state_60234;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60234__$1,11,out,inst_60216);
} else
{if((state_val_60235 === 9))
{var state_60234__$1 = state_60234;var statearr_60246_60265 = state_60234__$1;(statearr_60246_60265[2] = null);
(statearr_60246_60265[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60235 === 10))
{var inst_60226 = (state_60234[2]);var state_60234__$1 = state_60234;var statearr_60247_60266 = state_60234__$1;(statearr_60247_60266[2] = inst_60226);
(statearr_60247_60266[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60235 === 11))
{var inst_60211 = (state_60234[7]);var inst_60221 = (state_60234[2]);var inst_60222 = (inst_60211 + 1);var inst_60211__$1 = inst_60222;var state_60234__$1 = (function (){var statearr_60248 = state_60234;(statearr_60248[10] = inst_60221);
(statearr_60248[7] = inst_60211__$1);
return statearr_60248;
})();var statearr_60249_60267 = state_60234__$1;(statearr_60249_60267[2] = null);
(statearr_60249_60267[1] = 2);
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
});return ((function (switch__12232__auto__){
return (function() {
var state_machine__12233__auto__ = null;
var state_machine__12233__auto____0 = (function (){var statearr_60253 = (new Array(11));(statearr_60253[0] = state_machine__12233__auto__);
(statearr_60253[1] = 1);
return statearr_60253;
});
var state_machine__12233__auto____1 = (function (state_60234){while(true){
var ret_value__12234__auto__ = (function (){try{while(true){
var result__12235__auto__ = switch__12232__auto__.call(null,state_60234);if(cljs.core.keyword_identical_QMARK_.call(null,result__12235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12235__auto__;
}
break;
}
}catch (e60254){if((e60254 instanceof Object))
{var ex__12236__auto__ = e60254;var statearr_60255_60268 = state_60234;(statearr_60255_60268[5] = ex__12236__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60234);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e60254;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12234__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__60269 = state_60234;
state_60234 = G__60269;
continue;
}
} else
{return ret_value__12234__auto__;
}
break;
}
});
state_machine__12233__auto__ = function(state_60234){
switch(arguments.length){
case 0:
return state_machine__12233__auto____0.call(this);
case 1:
return state_machine__12233__auto____1.call(this,state_60234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12233__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12233__auto____0;
state_machine__12233__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12233__auto____1;
return state_machine__12233__auto__;
})()
;})(switch__12232__auto__))
})();var state__12311__auto__ = (function (){var statearr_60256 = f__12310__auto__.call(null);(statearr_60256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12309__auto___60257);
return statearr_60256;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12311__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12309__auto___60366 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12310__auto__ = (function (){var switch__12232__auto__ = (function (state_60341){var state_val_60342 = (state_60341[1]);if((state_val_60342 === 1))
{var inst_60318 = null;var state_60341__$1 = (function (){var statearr_60343 = state_60341;(statearr_60343[7] = inst_60318);
return statearr_60343;
})();var statearr_60344_60367 = state_60341__$1;(statearr_60344_60367[2] = null);
(statearr_60344_60367[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60342 === 2))
{var state_60341__$1 = state_60341;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60341__$1,4,ch);
} else
{if((state_val_60342 === 3))
{var inst_60338 = (state_60341[2]);var inst_60339 = cljs.core.async.close_BANG_.call(null,out);var state_60341__$1 = (function (){var statearr_60345 = state_60341;(statearr_60345[8] = inst_60338);
return statearr_60345;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60341__$1,inst_60339);
} else
{if((state_val_60342 === 4))
{var inst_60321 = (state_60341[9]);var inst_60321__$1 = (state_60341[2]);var inst_60322 = (inst_60321__$1 == null);var inst_60323 = cljs.core.not.call(null,inst_60322);var state_60341__$1 = (function (){var statearr_60346 = state_60341;(statearr_60346[9] = inst_60321__$1);
return statearr_60346;
})();if(inst_60323)
{var statearr_60347_60368 = state_60341__$1;(statearr_60347_60368[1] = 5);
} else
{var statearr_60348_60369 = state_60341__$1;(statearr_60348_60369[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60342 === 5))
{var inst_60321 = (state_60341[9]);var inst_60318 = (state_60341[7]);var inst_60325 = cljs.core._EQ_.call(null,inst_60321,inst_60318);var state_60341__$1 = state_60341;if(inst_60325)
{var statearr_60349_60370 = state_60341__$1;(statearr_60349_60370[1] = 8);
} else
{var statearr_60350_60371 = state_60341__$1;(statearr_60350_60371[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60342 === 6))
{var state_60341__$1 = state_60341;var statearr_60352_60372 = state_60341__$1;(statearr_60352_60372[2] = null);
(statearr_60352_60372[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60342 === 7))
{var inst_60336 = (state_60341[2]);var state_60341__$1 = state_60341;var statearr_60353_60373 = state_60341__$1;(statearr_60353_60373[2] = inst_60336);
(statearr_60353_60373[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60342 === 8))
{var inst_60318 = (state_60341[7]);var tmp60351 = inst_60318;var inst_60318__$1 = tmp60351;var state_60341__$1 = (function (){var statearr_60354 = state_60341;(statearr_60354[7] = inst_60318__$1);
return statearr_60354;
})();var statearr_60355_60374 = state_60341__$1;(statearr_60355_60374[2] = null);
(statearr_60355_60374[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60342 === 9))
{var inst_60321 = (state_60341[9]);var state_60341__$1 = state_60341;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60341__$1,11,out,inst_60321);
} else
{if((state_val_60342 === 10))
{var inst_60333 = (state_60341[2]);var state_60341__$1 = state_60341;var statearr_60356_60375 = state_60341__$1;(statearr_60356_60375[2] = inst_60333);
(statearr_60356_60375[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60342 === 11))
{var inst_60321 = (state_60341[9]);var inst_60330 = (state_60341[2]);var inst_60318 = inst_60321;var state_60341__$1 = (function (){var statearr_60357 = state_60341;(statearr_60357[7] = inst_60318);
(statearr_60357[10] = inst_60330);
return statearr_60357;
})();var statearr_60358_60376 = state_60341__$1;(statearr_60358_60376[2] = null);
(statearr_60358_60376[1] = 2);
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
});return ((function (switch__12232__auto__){
return (function() {
var state_machine__12233__auto__ = null;
var state_machine__12233__auto____0 = (function (){var statearr_60362 = (new Array(11));(statearr_60362[0] = state_machine__12233__auto__);
(statearr_60362[1] = 1);
return statearr_60362;
});
var state_machine__12233__auto____1 = (function (state_60341){while(true){
var ret_value__12234__auto__ = (function (){try{while(true){
var result__12235__auto__ = switch__12232__auto__.call(null,state_60341);if(cljs.core.keyword_identical_QMARK_.call(null,result__12235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12235__auto__;
}
break;
}
}catch (e60363){if((e60363 instanceof Object))
{var ex__12236__auto__ = e60363;var statearr_60364_60377 = state_60341;(statearr_60364_60377[5] = ex__12236__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60341);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e60363;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12234__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__60378 = state_60341;
state_60341 = G__60378;
continue;
}
} else
{return ret_value__12234__auto__;
}
break;
}
});
state_machine__12233__auto__ = function(state_60341){
switch(arguments.length){
case 0:
return state_machine__12233__auto____0.call(this);
case 1:
return state_machine__12233__auto____1.call(this,state_60341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12233__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12233__auto____0;
state_machine__12233__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12233__auto____1;
return state_machine__12233__auto__;
})()
;})(switch__12232__auto__))
})();var state__12311__auto__ = (function (){var statearr_60365 = f__12310__auto__.call(null);(statearr_60365[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12309__auto___60366);
return statearr_60365;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12311__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12309__auto___60513 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12310__auto__ = (function (){var switch__12232__auto__ = (function (state_60483){var state_val_60484 = (state_60483[1]);if((state_val_60484 === 1))
{var inst_60446 = (new Array(n));var inst_60447 = inst_60446;var inst_60448 = 0;var state_60483__$1 = (function (){var statearr_60485 = state_60483;(statearr_60485[7] = inst_60447);
(statearr_60485[8] = inst_60448);
return statearr_60485;
})();var statearr_60486_60514 = state_60483__$1;(statearr_60486_60514[2] = null);
(statearr_60486_60514[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60484 === 2))
{var state_60483__$1 = state_60483;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60483__$1,4,ch);
} else
{if((state_val_60484 === 3))
{var inst_60481 = (state_60483[2]);var state_60483__$1 = state_60483;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60483__$1,inst_60481);
} else
{if((state_val_60484 === 4))
{var inst_60451 = (state_60483[9]);var inst_60451__$1 = (state_60483[2]);var inst_60452 = (inst_60451__$1 == null);var inst_60453 = cljs.core.not.call(null,inst_60452);var state_60483__$1 = (function (){var statearr_60487 = state_60483;(statearr_60487[9] = inst_60451__$1);
return statearr_60487;
})();if(inst_60453)
{var statearr_60488_60515 = state_60483__$1;(statearr_60488_60515[1] = 5);
} else
{var statearr_60489_60516 = state_60483__$1;(statearr_60489_60516[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60484 === 5))
{var inst_60456 = (state_60483[10]);var inst_60451 = (state_60483[9]);var inst_60447 = (state_60483[7]);var inst_60448 = (state_60483[8]);var inst_60455 = (inst_60447[inst_60448] = inst_60451);var inst_60456__$1 = (inst_60448 + 1);var inst_60457 = (inst_60456__$1 < n);var state_60483__$1 = (function (){var statearr_60490 = state_60483;(statearr_60490[11] = inst_60455);
(statearr_60490[10] = inst_60456__$1);
return statearr_60490;
})();if(cljs.core.truth_(inst_60457))
{var statearr_60491_60517 = state_60483__$1;(statearr_60491_60517[1] = 8);
} else
{var statearr_60492_60518 = state_60483__$1;(statearr_60492_60518[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60484 === 6))
{var inst_60448 = (state_60483[8]);var inst_60469 = (inst_60448 > 0);var state_60483__$1 = state_60483;if(cljs.core.truth_(inst_60469))
{var statearr_60494_60519 = state_60483__$1;(statearr_60494_60519[1] = 12);
} else
{var statearr_60495_60520 = state_60483__$1;(statearr_60495_60520[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60484 === 7))
{var inst_60479 = (state_60483[2]);var state_60483__$1 = state_60483;var statearr_60496_60521 = state_60483__$1;(statearr_60496_60521[2] = inst_60479);
(statearr_60496_60521[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60484 === 8))
{var inst_60456 = (state_60483[10]);var inst_60447 = (state_60483[7]);var tmp60493 = inst_60447;var inst_60447__$1 = tmp60493;var inst_60448 = inst_60456;var state_60483__$1 = (function (){var statearr_60497 = state_60483;(statearr_60497[7] = inst_60447__$1);
(statearr_60497[8] = inst_60448);
return statearr_60497;
})();var statearr_60498_60522 = state_60483__$1;(statearr_60498_60522[2] = null);
(statearr_60498_60522[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60484 === 9))
{var inst_60447 = (state_60483[7]);var inst_60461 = cljs.core.vec.call(null,inst_60447);var state_60483__$1 = state_60483;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60483__$1,11,out,inst_60461);
} else
{if((state_val_60484 === 10))
{var inst_60467 = (state_60483[2]);var state_60483__$1 = state_60483;var statearr_60499_60523 = state_60483__$1;(statearr_60499_60523[2] = inst_60467);
(statearr_60499_60523[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60484 === 11))
{var inst_60463 = (state_60483[2]);var inst_60464 = (new Array(n));var inst_60447 = inst_60464;var inst_60448 = 0;var state_60483__$1 = (function (){var statearr_60500 = state_60483;(statearr_60500[12] = inst_60463);
(statearr_60500[7] = inst_60447);
(statearr_60500[8] = inst_60448);
return statearr_60500;
})();var statearr_60501_60524 = state_60483__$1;(statearr_60501_60524[2] = null);
(statearr_60501_60524[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60484 === 12))
{var inst_60447 = (state_60483[7]);var inst_60471 = cljs.core.vec.call(null,inst_60447);var state_60483__$1 = state_60483;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60483__$1,15,out,inst_60471);
} else
{if((state_val_60484 === 13))
{var state_60483__$1 = state_60483;var statearr_60502_60525 = state_60483__$1;(statearr_60502_60525[2] = null);
(statearr_60502_60525[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60484 === 14))
{var inst_60476 = (state_60483[2]);var inst_60477 = cljs.core.async.close_BANG_.call(null,out);var state_60483__$1 = (function (){var statearr_60503 = state_60483;(statearr_60503[13] = inst_60476);
return statearr_60503;
})();var statearr_60504_60526 = state_60483__$1;(statearr_60504_60526[2] = inst_60477);
(statearr_60504_60526[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60484 === 15))
{var inst_60473 = (state_60483[2]);var state_60483__$1 = state_60483;var statearr_60505_60527 = state_60483__$1;(statearr_60505_60527[2] = inst_60473);
(statearr_60505_60527[1] = 14);
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
});return ((function (switch__12232__auto__){
return (function() {
var state_machine__12233__auto__ = null;
var state_machine__12233__auto____0 = (function (){var statearr_60509 = (new Array(14));(statearr_60509[0] = state_machine__12233__auto__);
(statearr_60509[1] = 1);
return statearr_60509;
});
var state_machine__12233__auto____1 = (function (state_60483){while(true){
var ret_value__12234__auto__ = (function (){try{while(true){
var result__12235__auto__ = switch__12232__auto__.call(null,state_60483);if(cljs.core.keyword_identical_QMARK_.call(null,result__12235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12235__auto__;
}
break;
}
}catch (e60510){if((e60510 instanceof Object))
{var ex__12236__auto__ = e60510;var statearr_60511_60528 = state_60483;(statearr_60511_60528[5] = ex__12236__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60483);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e60510;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12234__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__60529 = state_60483;
state_60483 = G__60529;
continue;
}
} else
{return ret_value__12234__auto__;
}
break;
}
});
state_machine__12233__auto__ = function(state_60483){
switch(arguments.length){
case 0:
return state_machine__12233__auto____0.call(this);
case 1:
return state_machine__12233__auto____1.call(this,state_60483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12233__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12233__auto____0;
state_machine__12233__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12233__auto____1;
return state_machine__12233__auto__;
})()
;})(switch__12232__auto__))
})();var state__12311__auto__ = (function (){var statearr_60512 = f__12310__auto__.call(null);(statearr_60512[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12309__auto___60513);
return statearr_60512;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12311__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__12309__auto___60672 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12310__auto__ = (function (){var switch__12232__auto__ = (function (state_60642){var state_val_60643 = (state_60642[1]);if((state_val_60643 === 1))
{var inst_60601 = (new Array(0));var inst_60602 = inst_60601;var inst_60603 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_60642__$1 = (function (){var statearr_60644 = state_60642;(statearr_60644[7] = inst_60603);
(statearr_60644[8] = inst_60602);
return statearr_60644;
})();var statearr_60645_60673 = state_60642__$1;(statearr_60645_60673[2] = null);
(statearr_60645_60673[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60643 === 2))
{var state_60642__$1 = state_60642;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60642__$1,4,ch);
} else
{if((state_val_60643 === 3))
{var inst_60640 = (state_60642[2]);var state_60642__$1 = state_60642;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60642__$1,inst_60640);
} else
{if((state_val_60643 === 4))
{var inst_60606 = (state_60642[9]);var inst_60606__$1 = (state_60642[2]);var inst_60607 = (inst_60606__$1 == null);var inst_60608 = cljs.core.not.call(null,inst_60607);var state_60642__$1 = (function (){var statearr_60646 = state_60642;(statearr_60646[9] = inst_60606__$1);
return statearr_60646;
})();if(inst_60608)
{var statearr_60647_60674 = state_60642__$1;(statearr_60647_60674[1] = 5);
} else
{var statearr_60648_60675 = state_60642__$1;(statearr_60648_60675[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60643 === 5))
{var inst_60610 = (state_60642[10]);var inst_60606 = (state_60642[9]);var inst_60603 = (state_60642[7]);var inst_60610__$1 = f.call(null,inst_60606);var inst_60611 = cljs.core._EQ_.call(null,inst_60610__$1,inst_60603);var inst_60612 = cljs.core.keyword_identical_QMARK_.call(null,inst_60603,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_60613 = (inst_60611) || (inst_60612);var state_60642__$1 = (function (){var statearr_60649 = state_60642;(statearr_60649[10] = inst_60610__$1);
return statearr_60649;
})();if(cljs.core.truth_(inst_60613))
{var statearr_60650_60676 = state_60642__$1;(statearr_60650_60676[1] = 8);
} else
{var statearr_60651_60677 = state_60642__$1;(statearr_60651_60677[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60643 === 6))
{var inst_60602 = (state_60642[8]);var inst_60627 = inst_60602.length;var inst_60628 = (inst_60627 > 0);var state_60642__$1 = state_60642;if(cljs.core.truth_(inst_60628))
{var statearr_60653_60678 = state_60642__$1;(statearr_60653_60678[1] = 12);
} else
{var statearr_60654_60679 = state_60642__$1;(statearr_60654_60679[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60643 === 7))
{var inst_60638 = (state_60642[2]);var state_60642__$1 = state_60642;var statearr_60655_60680 = state_60642__$1;(statearr_60655_60680[2] = inst_60638);
(statearr_60655_60680[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60643 === 8))
{var inst_60610 = (state_60642[10]);var inst_60606 = (state_60642[9]);var inst_60602 = (state_60642[8]);var inst_60615 = inst_60602.push(inst_60606);var tmp60652 = inst_60602;var inst_60602__$1 = tmp60652;var inst_60603 = inst_60610;var state_60642__$1 = (function (){var statearr_60656 = state_60642;(statearr_60656[11] = inst_60615);
(statearr_60656[7] = inst_60603);
(statearr_60656[8] = inst_60602__$1);
return statearr_60656;
})();var statearr_60657_60681 = state_60642__$1;(statearr_60657_60681[2] = null);
(statearr_60657_60681[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60643 === 9))
{var inst_60602 = (state_60642[8]);var inst_60618 = cljs.core.vec.call(null,inst_60602);var state_60642__$1 = state_60642;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60642__$1,11,out,inst_60618);
} else
{if((state_val_60643 === 10))
{var inst_60625 = (state_60642[2]);var state_60642__$1 = state_60642;var statearr_60658_60682 = state_60642__$1;(statearr_60658_60682[2] = inst_60625);
(statearr_60658_60682[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60643 === 11))
{var inst_60610 = (state_60642[10]);var inst_60606 = (state_60642[9]);var inst_60620 = (state_60642[2]);var inst_60621 = (new Array(0));var inst_60622 = inst_60621.push(inst_60606);var inst_60602 = inst_60621;var inst_60603 = inst_60610;var state_60642__$1 = (function (){var statearr_60659 = state_60642;(statearr_60659[12] = inst_60620);
(statearr_60659[13] = inst_60622);
(statearr_60659[7] = inst_60603);
(statearr_60659[8] = inst_60602);
return statearr_60659;
})();var statearr_60660_60683 = state_60642__$1;(statearr_60660_60683[2] = null);
(statearr_60660_60683[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60643 === 12))
{var inst_60602 = (state_60642[8]);var inst_60630 = cljs.core.vec.call(null,inst_60602);var state_60642__$1 = state_60642;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60642__$1,15,out,inst_60630);
} else
{if((state_val_60643 === 13))
{var state_60642__$1 = state_60642;var statearr_60661_60684 = state_60642__$1;(statearr_60661_60684[2] = null);
(statearr_60661_60684[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60643 === 14))
{var inst_60635 = (state_60642[2]);var inst_60636 = cljs.core.async.close_BANG_.call(null,out);var state_60642__$1 = (function (){var statearr_60662 = state_60642;(statearr_60662[14] = inst_60635);
return statearr_60662;
})();var statearr_60663_60685 = state_60642__$1;(statearr_60663_60685[2] = inst_60636);
(statearr_60663_60685[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_60643 === 15))
{var inst_60632 = (state_60642[2]);var state_60642__$1 = state_60642;var statearr_60664_60686 = state_60642__$1;(statearr_60664_60686[2] = inst_60632);
(statearr_60664_60686[1] = 14);
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
});return ((function (switch__12232__auto__){
return (function() {
var state_machine__12233__auto__ = null;
var state_machine__12233__auto____0 = (function (){var statearr_60668 = (new Array(15));(statearr_60668[0] = state_machine__12233__auto__);
(statearr_60668[1] = 1);
return statearr_60668;
});
var state_machine__12233__auto____1 = (function (state_60642){while(true){
var ret_value__12234__auto__ = (function (){try{while(true){
var result__12235__auto__ = switch__12232__auto__.call(null,state_60642);if(cljs.core.keyword_identical_QMARK_.call(null,result__12235__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12235__auto__;
}
break;
}
}catch (e60669){if((e60669 instanceof Object))
{var ex__12236__auto__ = e60669;var statearr_60670_60687 = state_60642;(statearr_60670_60687[5] = ex__12236__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60642);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e60669;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12234__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__60688 = state_60642;
state_60642 = G__60688;
continue;
}
} else
{return ret_value__12234__auto__;
}
break;
}
});
state_machine__12233__auto__ = function(state_60642){
switch(arguments.length){
case 0:
return state_machine__12233__auto____0.call(this);
case 1:
return state_machine__12233__auto____1.call(this,state_60642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12233__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12233__auto____0;
state_machine__12233__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12233__auto____1;
return state_machine__12233__auto__;
})()
;})(switch__12232__auto__))
})();var state__12311__auto__ = (function (){var statearr_60671 = f__12310__auto__.call(null);(statearr_60671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12309__auto___60672);
return statearr_60671;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12311__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
