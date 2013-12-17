// Compiled by ClojureScript 0.0-2120
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t22033 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22033 = (function (f,fn_handler,meta22034){
this.f = f;
this.fn_handler = fn_handler;
this.meta22034 = meta22034;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22033.cljs$lang$type = true;
cljs.core.async.t22033.cljs$lang$ctorStr = "cljs.core.async/t22033";
cljs.core.async.t22033.cljs$lang$ctorPrWriter = (function (this__8747__auto__,writer__8748__auto__,opt__8749__auto__){return cljs.core._write.call(null,writer__8748__auto__,"cljs.core.async/t22033");
});
cljs.core.async.t22033.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t22033.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t22033.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t22033.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22035){var self__ = this;
var _22035__$1 = this;return self__.meta22034;
});
cljs.core.async.t22033.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22035,meta22034__$1){var self__ = this;
var _22035__$1 = this;return (new cljs.core.async.t22033(self__.f,self__.fn_handler,meta22034__$1));
});
cljs.core.async.__GT_t22033 = (function __GT_t22033(f__$1,fn_handler__$1,meta22034){return (new cljs.core.async.t22033(f__$1,fn_handler__$1,meta22034));
});
}
return (new cljs.core.async.t22033(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__22037 = buff;if(G__22037)
{var bit__8829__auto__ = null;if(cljs.core.truth_((function (){var or__8198__auto__ = bit__8829__auto__;if(cljs.core.truth_(or__8198__auto__))
{return or__8198__auto__;
} else
{return G__22037.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__22037.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__22037);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__22037);
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
{var val_22038 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_22038);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_22038);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__8186__auto__ = ret;if(cljs.core.truth_(and__8186__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__8186__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__9026__auto___22039 = n;var x_22040 = 0;while(true){
if((x_22040 < n__9026__auto___22039))
{(a[x_22040] = 0);
{
var G__22041 = (x_22040 + 1);
x_22040 = G__22041;
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
var G__22042 = (i + 1);
i = G__22042;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t22046 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22046 = (function (flag,alt_flag,meta22047){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta22047 = meta22047;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22046.cljs$lang$type = true;
cljs.core.async.t22046.cljs$lang$ctorStr = "cljs.core.async/t22046";
cljs.core.async.t22046.cljs$lang$ctorPrWriter = (function (this__8747__auto__,writer__8748__auto__,opt__8749__auto__){return cljs.core._write.call(null,writer__8748__auto__,"cljs.core.async/t22046");
});
cljs.core.async.t22046.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t22046.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t22046.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t22046.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22048){var self__ = this;
var _22048__$1 = this;return self__.meta22047;
});
cljs.core.async.t22046.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22048,meta22047__$1){var self__ = this;
var _22048__$1 = this;return (new cljs.core.async.t22046(self__.flag,self__.alt_flag,meta22047__$1));
});
cljs.core.async.__GT_t22046 = (function __GT_t22046(flag__$1,alt_flag__$1,meta22047){return (new cljs.core.async.t22046(flag__$1,alt_flag__$1,meta22047));
});
}
return (new cljs.core.async.t22046(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t22052 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22052 = (function (cb,flag,alt_handler,meta22053){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta22053 = meta22053;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22052.cljs$lang$type = true;
cljs.core.async.t22052.cljs$lang$ctorStr = "cljs.core.async/t22052";
cljs.core.async.t22052.cljs$lang$ctorPrWriter = (function (this__8747__auto__,writer__8748__auto__,opt__8749__auto__){return cljs.core._write.call(null,writer__8748__auto__,"cljs.core.async/t22052");
});
cljs.core.async.t22052.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t22052.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t22052.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t22052.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22054){var self__ = this;
var _22054__$1 = this;return self__.meta22053;
});
cljs.core.async.t22052.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22054,meta22053__$1){var self__ = this;
var _22054__$1 = this;return (new cljs.core.async.t22052(self__.cb,self__.flag,self__.alt_handler,meta22053__$1));
});
cljs.core.async.__GT_t22052 = (function __GT_t22052(cb__$1,flag__$1,alt_handler__$1,meta22053){return (new cljs.core.async.t22052(cb__$1,flag__$1,alt_handler__$1,meta22053));
});
}
return (new cljs.core.async.t22052(cb,flag,alt_handler,null));
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
return (function (p1__22055_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22055_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__8198__auto__ = wport;if(cljs.core.truth_(or__8198__auto__))
{return or__8198__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__22056 = (i + 1);
i = G__22056;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__8198__auto__ = ret;if(cljs.core.truth_(or__8198__auto__))
{return or__8198__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__8186__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__8186__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__8186__auto__;
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
var alts_BANG___delegate = function (ports,p__22057){var map__22059 = p__22057;var map__22059__$1 = ((cljs.core.seq_QMARK_.call(null,map__22059))?cljs.core.apply.call(null,cljs.core.hash_map,map__22059):map__22059);var opts = map__22059__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__22057 = null;if (arguments.length > 1) {
  p__22057 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__22057);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__22060){
var ports = cljs.core.first(arglist__22060);
var p__22057 = cljs.core.rest(arglist__22060);
return alts_BANG___delegate(ports,p__22057);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t22068 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22068 = (function (ch,f,map_LT_,meta22069){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta22069 = meta22069;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22068.cljs$lang$type = true;
cljs.core.async.t22068.cljs$lang$ctorStr = "cljs.core.async/t22068";
cljs.core.async.t22068.cljs$lang$ctorPrWriter = (function (this__8747__auto__,writer__8748__auto__,opt__8749__auto__){return cljs.core._write.call(null,writer__8748__auto__,"cljs.core.async/t22068");
});
cljs.core.async.t22068.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t22068.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t22068.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t22068.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t22071 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22071 = (function (fn1,_,meta22069,ch,f,map_LT_,meta22072){
this.fn1 = fn1;
this._ = _;
this.meta22069 = meta22069;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta22072 = meta22072;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22071.cljs$lang$type = true;
cljs.core.async.t22071.cljs$lang$ctorStr = "cljs.core.async/t22071";
cljs.core.async.t22071.cljs$lang$ctorPrWriter = (function (this__8747__auto__,writer__8748__auto__,opt__8749__auto__){return cljs.core._write.call(null,writer__8748__auto__,"cljs.core.async/t22071");
});
cljs.core.async.t22071.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t22071.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t22071.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t22071.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__22061_SHARP_){return f1.call(null,(((p1__22061_SHARP_ == null))?null:self__.f.call(null,p1__22061_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t22071.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22073){var self__ = this;
var _22073__$1 = this;return self__.meta22072;
});
cljs.core.async.t22071.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22073,meta22072__$1){var self__ = this;
var _22073__$1 = this;return (new cljs.core.async.t22071(self__.fn1,self__._,self__.meta22069,self__.ch,self__.f,self__.map_LT_,meta22072__$1));
});
cljs.core.async.__GT_t22071 = (function __GT_t22071(fn1__$1,___$2,meta22069__$1,ch__$2,f__$2,map_LT___$2,meta22072){return (new cljs.core.async.t22071(fn1__$1,___$2,meta22069__$1,ch__$2,f__$2,map_LT___$2,meta22072));
});
}
return (new cljs.core.async.t22071(fn1,___$1,self__.meta22069,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__8186__auto__ = ret;if(cljs.core.truth_(and__8186__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__8186__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t22068.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t22068.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t22068.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22070){var self__ = this;
var _22070__$1 = this;return self__.meta22069;
});
cljs.core.async.t22068.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22070,meta22069__$1){var self__ = this;
var _22070__$1 = this;return (new cljs.core.async.t22068(self__.ch,self__.f,self__.map_LT_,meta22069__$1));
});
cljs.core.async.__GT_t22068 = (function __GT_t22068(ch__$1,f__$1,map_LT___$1,meta22069){return (new cljs.core.async.t22068(ch__$1,f__$1,map_LT___$1,meta22069));
});
}
return (new cljs.core.async.t22068(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t22077 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22077 = (function (ch,f,map_GT_,meta22078){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta22078 = meta22078;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22077.cljs$lang$type = true;
cljs.core.async.t22077.cljs$lang$ctorStr = "cljs.core.async/t22077";
cljs.core.async.t22077.cljs$lang$ctorPrWriter = (function (this__8747__auto__,writer__8748__auto__,opt__8749__auto__){return cljs.core._write.call(null,writer__8748__auto__,"cljs.core.async/t22077");
});
cljs.core.async.t22077.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t22077.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t22077.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t22077.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t22077.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t22077.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t22077.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22079){var self__ = this;
var _22079__$1 = this;return self__.meta22078;
});
cljs.core.async.t22077.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22079,meta22078__$1){var self__ = this;
var _22079__$1 = this;return (new cljs.core.async.t22077(self__.ch,self__.f,self__.map_GT_,meta22078__$1));
});
cljs.core.async.__GT_t22077 = (function __GT_t22077(ch__$1,f__$1,map_GT___$1,meta22078){return (new cljs.core.async.t22077(ch__$1,f__$1,map_GT___$1,meta22078));
});
}
return (new cljs.core.async.t22077(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t22083 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22083 = (function (ch,p,filter_GT_,meta22084){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta22084 = meta22084;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22083.cljs$lang$type = true;
cljs.core.async.t22083.cljs$lang$ctorStr = "cljs.core.async/t22083";
cljs.core.async.t22083.cljs$lang$ctorPrWriter = (function (this__8747__auto__,writer__8748__auto__,opt__8749__auto__){return cljs.core._write.call(null,writer__8748__auto__,"cljs.core.async/t22083");
});
cljs.core.async.t22083.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t22083.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t22083.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t22083.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t22083.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t22083.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t22083.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22085){var self__ = this;
var _22085__$1 = this;return self__.meta22084;
});
cljs.core.async.t22083.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22085,meta22084__$1){var self__ = this;
var _22085__$1 = this;return (new cljs.core.async.t22083(self__.ch,self__.p,self__.filter_GT_,meta22084__$1));
});
cljs.core.async.__GT_t22083 = (function __GT_t22083(ch__$1,p__$1,filter_GT___$1,meta22084){return (new cljs.core.async.t22083(ch__$1,p__$1,filter_GT___$1,meta22084));
});
}
return (new cljs.core.async.t22083(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10793__auto___22168 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10794__auto__ = (function (){var switch__10729__auto__ = (function (state_22147){var state_val_22148 = (state_22147[1]);if((state_val_22148 === 1))
{var state_22147__$1 = state_22147;var statearr_22149_22169 = state_22147__$1;(statearr_22149_22169[2] = null);
(statearr_22149_22169[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22148 === 2))
{var state_22147__$1 = state_22147;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22147__$1,4,ch);
} else
{if((state_val_22148 === 3))
{var inst_22145 = (state_22147[2]);var state_22147__$1 = state_22147;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22147__$1,inst_22145);
} else
{if((state_val_22148 === 4))
{var inst_22129 = (state_22147[7]);var inst_22129__$1 = (state_22147[2]);var inst_22130 = (inst_22129__$1 == null);var state_22147__$1 = (function (){var statearr_22150 = state_22147;(statearr_22150[7] = inst_22129__$1);
return statearr_22150;
})();if(cljs.core.truth_(inst_22130))
{var statearr_22151_22170 = state_22147__$1;(statearr_22151_22170[1] = 5);
} else
{var statearr_22152_22171 = state_22147__$1;(statearr_22152_22171[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22148 === 5))
{var inst_22132 = cljs.core.async.close_BANG_.call(null,out);var state_22147__$1 = state_22147;var statearr_22153_22172 = state_22147__$1;(statearr_22153_22172[2] = inst_22132);
(statearr_22153_22172[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22148 === 6))
{var inst_22129 = (state_22147[7]);var inst_22134 = p.call(null,inst_22129);var state_22147__$1 = state_22147;if(cljs.core.truth_(inst_22134))
{var statearr_22154_22173 = state_22147__$1;(statearr_22154_22173[1] = 8);
} else
{var statearr_22155_22174 = state_22147__$1;(statearr_22155_22174[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22148 === 7))
{var inst_22143 = (state_22147[2]);var state_22147__$1 = state_22147;var statearr_22156_22175 = state_22147__$1;(statearr_22156_22175[2] = inst_22143);
(statearr_22156_22175[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22148 === 8))
{var inst_22129 = (state_22147[7]);var state_22147__$1 = state_22147;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22147__$1,11,out,inst_22129);
} else
{if((state_val_22148 === 9))
{var state_22147__$1 = state_22147;var statearr_22157_22176 = state_22147__$1;(statearr_22157_22176[2] = null);
(statearr_22157_22176[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22148 === 10))
{var inst_22140 = (state_22147[2]);var state_22147__$1 = (function (){var statearr_22158 = state_22147;(statearr_22158[8] = inst_22140);
return statearr_22158;
})();var statearr_22159_22177 = state_22147__$1;(statearr_22159_22177[2] = null);
(statearr_22159_22177[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22148 === 11))
{var inst_22137 = (state_22147[2]);var state_22147__$1 = state_22147;var statearr_22160_22178 = state_22147__$1;(statearr_22160_22178[2] = inst_22137);
(statearr_22160_22178[1] = 10);
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
});return ((function (switch__10729__auto__){
return (function() {
var state_machine__10730__auto__ = null;
var state_machine__10730__auto____0 = (function (){var statearr_22164 = [null,null,null,null,null,null,null,null,null];(statearr_22164[0] = state_machine__10730__auto__);
(statearr_22164[1] = 1);
return statearr_22164;
});
var state_machine__10730__auto____1 = (function (state_22147){while(true){
var ret_value__10731__auto__ = (function (){try{while(true){
var result__10732__auto__ = switch__10729__auto__.call(null,state_22147);if(cljs.core.keyword_identical_QMARK_.call(null,result__10732__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10732__auto__;
}
break;
}
}catch (e22165){if((e22165 instanceof Object))
{var ex__10733__auto__ = e22165;var statearr_22166_22179 = state_22147;(statearr_22166_22179[5] = ex__10733__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22147);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22165;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10731__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22180 = state_22147;
state_22147 = G__22180;
continue;
}
} else
{return ret_value__10731__auto__;
}
break;
}
});
state_machine__10730__auto__ = function(state_22147){
switch(arguments.length){
case 0:
return state_machine__10730__auto____0.call(this);
case 1:
return state_machine__10730__auto____1.call(this,state_22147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10730__auto____0;
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10730__auto____1;
return state_machine__10730__auto__;
})()
;})(switch__10729__auto__))
})();var state__10795__auto__ = (function (){var statearr_22167 = f__10794__auto__.call(null);(statearr_22167[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10793__auto___22168);
return statearr_22167;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10795__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__10793__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10794__auto__ = (function (){var switch__10729__auto__ = (function (state_22332){var state_val_22333 = (state_22332[1]);if((state_val_22333 === 1))
{var state_22332__$1 = state_22332;var statearr_22334_22371 = state_22332__$1;(statearr_22334_22371[2] = null);
(statearr_22334_22371[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22333 === 2))
{var state_22332__$1 = state_22332;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22332__$1,4,in$);
} else
{if((state_val_22333 === 3))
{var inst_22330 = (state_22332[2]);var state_22332__$1 = state_22332;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22332__$1,inst_22330);
} else
{if((state_val_22333 === 4))
{var inst_22278 = (state_22332[7]);var inst_22278__$1 = (state_22332[2]);var inst_22279 = (inst_22278__$1 == null);var state_22332__$1 = (function (){var statearr_22335 = state_22332;(statearr_22335[7] = inst_22278__$1);
return statearr_22335;
})();if(cljs.core.truth_(inst_22279))
{var statearr_22336_22372 = state_22332__$1;(statearr_22336_22372[1] = 5);
} else
{var statearr_22337_22373 = state_22332__$1;(statearr_22337_22373[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22333 === 5))
{var inst_22281 = cljs.core.async.close_BANG_.call(null,out);var state_22332__$1 = state_22332;var statearr_22338_22374 = state_22332__$1;(statearr_22338_22374[2] = inst_22281);
(statearr_22338_22374[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22333 === 6))
{var inst_22278 = (state_22332[7]);var inst_22283 = f.call(null,inst_22278);var inst_22288 = cljs.core.seq.call(null,inst_22283);var inst_22289 = inst_22288;var inst_22290 = null;var inst_22291 = 0;var inst_22292 = 0;var state_22332__$1 = (function (){var statearr_22339 = state_22332;(statearr_22339[8] = inst_22291);
(statearr_22339[9] = inst_22289);
(statearr_22339[10] = inst_22290);
(statearr_22339[11] = inst_22292);
return statearr_22339;
})();var statearr_22340_22375 = state_22332__$1;(statearr_22340_22375[2] = null);
(statearr_22340_22375[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22333 === 7))
{var inst_22328 = (state_22332[2]);var state_22332__$1 = state_22332;var statearr_22341_22376 = state_22332__$1;(statearr_22341_22376[2] = inst_22328);
(statearr_22341_22376[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22333 === 8))
{var inst_22291 = (state_22332[8]);var inst_22292 = (state_22332[11]);var inst_22294 = (inst_22292 < inst_22291);var inst_22295 = inst_22294;var state_22332__$1 = state_22332;if(cljs.core.truth_(inst_22295))
{var statearr_22342_22377 = state_22332__$1;(statearr_22342_22377[1] = 10);
} else
{var statearr_22343_22378 = state_22332__$1;(statearr_22343_22378[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22333 === 9))
{var inst_22325 = (state_22332[2]);var state_22332__$1 = (function (){var statearr_22344 = state_22332;(statearr_22344[12] = inst_22325);
return statearr_22344;
})();var statearr_22345_22379 = state_22332__$1;(statearr_22345_22379[2] = null);
(statearr_22345_22379[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22333 === 10))
{var inst_22290 = (state_22332[10]);var inst_22292 = (state_22332[11]);var inst_22297 = cljs.core._nth.call(null,inst_22290,inst_22292);var state_22332__$1 = state_22332;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22332__$1,13,out,inst_22297);
} else
{if((state_val_22333 === 11))
{var inst_22303 = (state_22332[13]);var inst_22289 = (state_22332[9]);var inst_22303__$1 = cljs.core.seq.call(null,inst_22289);var state_22332__$1 = (function (){var statearr_22349 = state_22332;(statearr_22349[13] = inst_22303__$1);
return statearr_22349;
})();if(inst_22303__$1)
{var statearr_22350_22380 = state_22332__$1;(statearr_22350_22380[1] = 14);
} else
{var statearr_22351_22381 = state_22332__$1;(statearr_22351_22381[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22333 === 12))
{var inst_22323 = (state_22332[2]);var state_22332__$1 = state_22332;var statearr_22352_22382 = state_22332__$1;(statearr_22352_22382[2] = inst_22323);
(statearr_22352_22382[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22333 === 13))
{var inst_22291 = (state_22332[8]);var inst_22289 = (state_22332[9]);var inst_22290 = (state_22332[10]);var inst_22292 = (state_22332[11]);var inst_22299 = (state_22332[2]);var inst_22300 = (inst_22292 + 1);var tmp22346 = inst_22291;var tmp22347 = inst_22289;var tmp22348 = inst_22290;var inst_22289__$1 = tmp22347;var inst_22290__$1 = tmp22348;var inst_22291__$1 = tmp22346;var inst_22292__$1 = inst_22300;var state_22332__$1 = (function (){var statearr_22353 = state_22332;(statearr_22353[14] = inst_22299);
(statearr_22353[8] = inst_22291__$1);
(statearr_22353[9] = inst_22289__$1);
(statearr_22353[10] = inst_22290__$1);
(statearr_22353[11] = inst_22292__$1);
return statearr_22353;
})();var statearr_22354_22383 = state_22332__$1;(statearr_22354_22383[2] = null);
(statearr_22354_22383[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22333 === 14))
{var inst_22303 = (state_22332[13]);var inst_22305 = cljs.core.chunked_seq_QMARK_.call(null,inst_22303);var state_22332__$1 = state_22332;if(inst_22305)
{var statearr_22355_22384 = state_22332__$1;(statearr_22355_22384[1] = 17);
} else
{var statearr_22356_22385 = state_22332__$1;(statearr_22356_22385[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22333 === 15))
{var state_22332__$1 = state_22332;var statearr_22357_22386 = state_22332__$1;(statearr_22357_22386[2] = null);
(statearr_22357_22386[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22333 === 16))
{var inst_22321 = (state_22332[2]);var state_22332__$1 = state_22332;var statearr_22358_22387 = state_22332__$1;(statearr_22358_22387[2] = inst_22321);
(statearr_22358_22387[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22333 === 17))
{var inst_22303 = (state_22332[13]);var inst_22307 = cljs.core.chunk_first.call(null,inst_22303);var inst_22308 = cljs.core.chunk_rest.call(null,inst_22303);var inst_22309 = cljs.core.count.call(null,inst_22307);var inst_22289 = inst_22308;var inst_22290 = inst_22307;var inst_22291 = inst_22309;var inst_22292 = 0;var state_22332__$1 = (function (){var statearr_22359 = state_22332;(statearr_22359[8] = inst_22291);
(statearr_22359[9] = inst_22289);
(statearr_22359[10] = inst_22290);
(statearr_22359[11] = inst_22292);
return statearr_22359;
})();var statearr_22360_22388 = state_22332__$1;(statearr_22360_22388[2] = null);
(statearr_22360_22388[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22333 === 18))
{var inst_22303 = (state_22332[13]);var inst_22312 = cljs.core.first.call(null,inst_22303);var state_22332__$1 = state_22332;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22332__$1,20,out,inst_22312);
} else
{if((state_val_22333 === 19))
{var inst_22318 = (state_22332[2]);var state_22332__$1 = state_22332;var statearr_22361_22389 = state_22332__$1;(statearr_22361_22389[2] = inst_22318);
(statearr_22361_22389[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22333 === 20))
{var inst_22303 = (state_22332[13]);var inst_22314 = (state_22332[2]);var inst_22315 = cljs.core.next.call(null,inst_22303);var inst_22289 = inst_22315;var inst_22290 = null;var inst_22291 = 0;var inst_22292 = 0;var state_22332__$1 = (function (){var statearr_22362 = state_22332;(statearr_22362[8] = inst_22291);
(statearr_22362[9] = inst_22289);
(statearr_22362[15] = inst_22314);
(statearr_22362[10] = inst_22290);
(statearr_22362[11] = inst_22292);
return statearr_22362;
})();var statearr_22363_22390 = state_22332__$1;(statearr_22363_22390[2] = null);
(statearr_22363_22390[1] = 8);
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
});return ((function (switch__10729__auto__){
return (function() {
var state_machine__10730__auto__ = null;
var state_machine__10730__auto____0 = (function (){var statearr_22367 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22367[0] = state_machine__10730__auto__);
(statearr_22367[1] = 1);
return statearr_22367;
});
var state_machine__10730__auto____1 = (function (state_22332){while(true){
var ret_value__10731__auto__ = (function (){try{while(true){
var result__10732__auto__ = switch__10729__auto__.call(null,state_22332);if(cljs.core.keyword_identical_QMARK_.call(null,result__10732__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10732__auto__;
}
break;
}
}catch (e22368){if((e22368 instanceof Object))
{var ex__10733__auto__ = e22368;var statearr_22369_22391 = state_22332;(statearr_22369_22391[5] = ex__10733__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22332);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22368;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10731__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22392 = state_22332;
state_22332 = G__22392;
continue;
}
} else
{return ret_value__10731__auto__;
}
break;
}
});
state_machine__10730__auto__ = function(state_22332){
switch(arguments.length){
case 0:
return state_machine__10730__auto____0.call(this);
case 1:
return state_machine__10730__auto____1.call(this,state_22332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10730__auto____0;
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10730__auto____1;
return state_machine__10730__auto__;
})()
;})(switch__10729__auto__))
})();var state__10795__auto__ = (function (){var statearr_22370 = f__10794__auto__.call(null);(statearr_22370[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10793__auto__);
return statearr_22370;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10795__auto__);
}));
return c__10793__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__10793__auto___22473 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10794__auto__ = (function (){var switch__10729__auto__ = (function (state_22452){var state_val_22453 = (state_22452[1]);if((state_val_22453 === 1))
{var state_22452__$1 = state_22452;var statearr_22454_22474 = state_22452__$1;(statearr_22454_22474[2] = null);
(statearr_22454_22474[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22453 === 2))
{var state_22452__$1 = state_22452;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22452__$1,4,from);
} else
{if((state_val_22453 === 3))
{var inst_22450 = (state_22452[2]);var state_22452__$1 = state_22452;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22452__$1,inst_22450);
} else
{if((state_val_22453 === 4))
{var inst_22435 = (state_22452[7]);var inst_22435__$1 = (state_22452[2]);var inst_22436 = (inst_22435__$1 == null);var state_22452__$1 = (function (){var statearr_22455 = state_22452;(statearr_22455[7] = inst_22435__$1);
return statearr_22455;
})();if(cljs.core.truth_(inst_22436))
{var statearr_22456_22475 = state_22452__$1;(statearr_22456_22475[1] = 5);
} else
{var statearr_22457_22476 = state_22452__$1;(statearr_22457_22476[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22453 === 5))
{var state_22452__$1 = state_22452;if(cljs.core.truth_(close_QMARK_))
{var statearr_22458_22477 = state_22452__$1;(statearr_22458_22477[1] = 8);
} else
{var statearr_22459_22478 = state_22452__$1;(statearr_22459_22478[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22453 === 6))
{var inst_22435 = (state_22452[7]);var state_22452__$1 = state_22452;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22452__$1,11,to,inst_22435);
} else
{if((state_val_22453 === 7))
{var inst_22448 = (state_22452[2]);var state_22452__$1 = state_22452;var statearr_22460_22479 = state_22452__$1;(statearr_22460_22479[2] = inst_22448);
(statearr_22460_22479[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22453 === 8))
{var inst_22439 = cljs.core.async.close_BANG_.call(null,to);var state_22452__$1 = state_22452;var statearr_22461_22480 = state_22452__$1;(statearr_22461_22480[2] = inst_22439);
(statearr_22461_22480[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22453 === 9))
{var state_22452__$1 = state_22452;var statearr_22462_22481 = state_22452__$1;(statearr_22462_22481[2] = null);
(statearr_22462_22481[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22453 === 10))
{var inst_22442 = (state_22452[2]);var state_22452__$1 = state_22452;var statearr_22463_22482 = state_22452__$1;(statearr_22463_22482[2] = inst_22442);
(statearr_22463_22482[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22453 === 11))
{var inst_22445 = (state_22452[2]);var state_22452__$1 = (function (){var statearr_22464 = state_22452;(statearr_22464[8] = inst_22445);
return statearr_22464;
})();var statearr_22465_22483 = state_22452__$1;(statearr_22465_22483[2] = null);
(statearr_22465_22483[1] = 2);
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
});return ((function (switch__10729__auto__){
return (function() {
var state_machine__10730__auto__ = null;
var state_machine__10730__auto____0 = (function (){var statearr_22469 = [null,null,null,null,null,null,null,null,null];(statearr_22469[0] = state_machine__10730__auto__);
(statearr_22469[1] = 1);
return statearr_22469;
});
var state_machine__10730__auto____1 = (function (state_22452){while(true){
var ret_value__10731__auto__ = (function (){try{while(true){
var result__10732__auto__ = switch__10729__auto__.call(null,state_22452);if(cljs.core.keyword_identical_QMARK_.call(null,result__10732__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10732__auto__;
}
break;
}
}catch (e22470){if((e22470 instanceof Object))
{var ex__10733__auto__ = e22470;var statearr_22471_22484 = state_22452;(statearr_22471_22484[5] = ex__10733__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22452);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22470;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10731__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22485 = state_22452;
state_22452 = G__22485;
continue;
}
} else
{return ret_value__10731__auto__;
}
break;
}
});
state_machine__10730__auto__ = function(state_22452){
switch(arguments.length){
case 0:
return state_machine__10730__auto____0.call(this);
case 1:
return state_machine__10730__auto____1.call(this,state_22452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10730__auto____0;
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10730__auto____1;
return state_machine__10730__auto__;
})()
;})(switch__10729__auto__))
})();var state__10795__auto__ = (function (){var statearr_22472 = f__10794__auto__.call(null);(statearr_22472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10793__auto___22473);
return statearr_22472;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10795__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__10793__auto___22572 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10794__auto__ = (function (){var switch__10729__auto__ = (function (state_22550){var state_val_22551 = (state_22550[1]);if((state_val_22551 === 1))
{var state_22550__$1 = state_22550;var statearr_22552_22573 = state_22550__$1;(statearr_22552_22573[2] = null);
(statearr_22552_22573[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22551 === 2))
{var state_22550__$1 = state_22550;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22550__$1,4,ch);
} else
{if((state_val_22551 === 3))
{var inst_22548 = (state_22550[2]);var state_22550__$1 = state_22550;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22550__$1,inst_22548);
} else
{if((state_val_22551 === 4))
{var inst_22531 = (state_22550[7]);var inst_22531__$1 = (state_22550[2]);var inst_22532 = (inst_22531__$1 == null);var state_22550__$1 = (function (){var statearr_22553 = state_22550;(statearr_22553[7] = inst_22531__$1);
return statearr_22553;
})();if(cljs.core.truth_(inst_22532))
{var statearr_22554_22574 = state_22550__$1;(statearr_22554_22574[1] = 5);
} else
{var statearr_22555_22575 = state_22550__$1;(statearr_22555_22575[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22551 === 5))
{var inst_22534 = cljs.core.async.close_BANG_.call(null,tc);var inst_22535 = cljs.core.async.close_BANG_.call(null,fc);var state_22550__$1 = (function (){var statearr_22556 = state_22550;(statearr_22556[8] = inst_22534);
return statearr_22556;
})();var statearr_22557_22576 = state_22550__$1;(statearr_22557_22576[2] = inst_22535);
(statearr_22557_22576[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22551 === 6))
{var inst_22531 = (state_22550[7]);var inst_22537 = p.call(null,inst_22531);var state_22550__$1 = state_22550;if(cljs.core.truth_(inst_22537))
{var statearr_22558_22577 = state_22550__$1;(statearr_22558_22577[1] = 9);
} else
{var statearr_22559_22578 = state_22550__$1;(statearr_22559_22578[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22551 === 7))
{var inst_22546 = (state_22550[2]);var state_22550__$1 = state_22550;var statearr_22560_22579 = state_22550__$1;(statearr_22560_22579[2] = inst_22546);
(statearr_22560_22579[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22551 === 8))
{var inst_22543 = (state_22550[2]);var state_22550__$1 = (function (){var statearr_22561 = state_22550;(statearr_22561[9] = inst_22543);
return statearr_22561;
})();var statearr_22562_22580 = state_22550__$1;(statearr_22562_22580[2] = null);
(statearr_22562_22580[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22551 === 9))
{var state_22550__$1 = state_22550;var statearr_22563_22581 = state_22550__$1;(statearr_22563_22581[2] = tc);
(statearr_22563_22581[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22551 === 10))
{var state_22550__$1 = state_22550;var statearr_22564_22582 = state_22550__$1;(statearr_22564_22582[2] = fc);
(statearr_22564_22582[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22551 === 11))
{var inst_22531 = (state_22550[7]);var inst_22541 = (state_22550[2]);var state_22550__$1 = state_22550;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22550__$1,8,inst_22541,inst_22531);
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
});return ((function (switch__10729__auto__){
return (function() {
var state_machine__10730__auto__ = null;
var state_machine__10730__auto____0 = (function (){var statearr_22568 = [null,null,null,null,null,null,null,null,null,null];(statearr_22568[0] = state_machine__10730__auto__);
(statearr_22568[1] = 1);
return statearr_22568;
});
var state_machine__10730__auto____1 = (function (state_22550){while(true){
var ret_value__10731__auto__ = (function (){try{while(true){
var result__10732__auto__ = switch__10729__auto__.call(null,state_22550);if(cljs.core.keyword_identical_QMARK_.call(null,result__10732__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10732__auto__;
}
break;
}
}catch (e22569){if((e22569 instanceof Object))
{var ex__10733__auto__ = e22569;var statearr_22570_22583 = state_22550;(statearr_22570_22583[5] = ex__10733__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22550);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22569;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10731__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22584 = state_22550;
state_22550 = G__22584;
continue;
}
} else
{return ret_value__10731__auto__;
}
break;
}
});
state_machine__10730__auto__ = function(state_22550){
switch(arguments.length){
case 0:
return state_machine__10730__auto____0.call(this);
case 1:
return state_machine__10730__auto____1.call(this,state_22550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10730__auto____0;
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10730__auto____1;
return state_machine__10730__auto__;
})()
;})(switch__10729__auto__))
})();var state__10795__auto__ = (function (){var statearr_22571 = f__10794__auto__.call(null);(statearr_22571[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10793__auto___22572);
return statearr_22571;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10795__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__10793__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10794__auto__ = (function (){var switch__10729__auto__ = (function (state_22631){var state_val_22632 = (state_22631[1]);if((state_val_22632 === 7))
{var inst_22627 = (state_22631[2]);var state_22631__$1 = state_22631;var statearr_22633_22649 = state_22631__$1;(statearr_22633_22649[2] = inst_22627);
(statearr_22633_22649[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22632 === 6))
{var inst_22620 = (state_22631[7]);var inst_22617 = (state_22631[8]);var inst_22624 = f.call(null,inst_22617,inst_22620);var inst_22617__$1 = inst_22624;var state_22631__$1 = (function (){var statearr_22634 = state_22631;(statearr_22634[8] = inst_22617__$1);
return statearr_22634;
})();var statearr_22635_22650 = state_22631__$1;(statearr_22635_22650[2] = null);
(statearr_22635_22650[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22632 === 5))
{var inst_22617 = (state_22631[8]);var state_22631__$1 = state_22631;var statearr_22636_22651 = state_22631__$1;(statearr_22636_22651[2] = inst_22617);
(statearr_22636_22651[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22632 === 4))
{var inst_22620 = (state_22631[7]);var inst_22620__$1 = (state_22631[2]);var inst_22621 = (inst_22620__$1 == null);var state_22631__$1 = (function (){var statearr_22637 = state_22631;(statearr_22637[7] = inst_22620__$1);
return statearr_22637;
})();if(cljs.core.truth_(inst_22621))
{var statearr_22638_22652 = state_22631__$1;(statearr_22638_22652[1] = 5);
} else
{var statearr_22639_22653 = state_22631__$1;(statearr_22639_22653[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22632 === 3))
{var inst_22629 = (state_22631[2]);var state_22631__$1 = state_22631;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22631__$1,inst_22629);
} else
{if((state_val_22632 === 2))
{var state_22631__$1 = state_22631;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22631__$1,4,ch);
} else
{if((state_val_22632 === 1))
{var inst_22617 = init;var state_22631__$1 = (function (){var statearr_22640 = state_22631;(statearr_22640[8] = inst_22617);
return statearr_22640;
})();var statearr_22641_22654 = state_22631__$1;(statearr_22641_22654[2] = null);
(statearr_22641_22654[1] = 2);
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
});return ((function (switch__10729__auto__){
return (function() {
var state_machine__10730__auto__ = null;
var state_machine__10730__auto____0 = (function (){var statearr_22645 = [null,null,null,null,null,null,null,null,null];(statearr_22645[0] = state_machine__10730__auto__);
(statearr_22645[1] = 1);
return statearr_22645;
});
var state_machine__10730__auto____1 = (function (state_22631){while(true){
var ret_value__10731__auto__ = (function (){try{while(true){
var result__10732__auto__ = switch__10729__auto__.call(null,state_22631);if(cljs.core.keyword_identical_QMARK_.call(null,result__10732__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10732__auto__;
}
break;
}
}catch (e22646){if((e22646 instanceof Object))
{var ex__10733__auto__ = e22646;var statearr_22647_22655 = state_22631;(statearr_22647_22655[5] = ex__10733__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22631);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22646;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10731__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22656 = state_22631;
state_22631 = G__22656;
continue;
}
} else
{return ret_value__10731__auto__;
}
break;
}
});
state_machine__10730__auto__ = function(state_22631){
switch(arguments.length){
case 0:
return state_machine__10730__auto____0.call(this);
case 1:
return state_machine__10730__auto____1.call(this,state_22631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10730__auto____0;
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10730__auto____1;
return state_machine__10730__auto__;
})()
;})(switch__10729__auto__))
})();var state__10795__auto__ = (function (){var statearr_22648 = f__10794__auto__.call(null);(statearr_22648[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10793__auto__);
return statearr_22648;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10795__auto__);
}));
return c__10793__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__10793__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10794__auto__ = (function (){var switch__10729__auto__ = (function (state_22718){var state_val_22719 = (state_22718[1]);if((state_val_22719 === 1))
{var inst_22698 = cljs.core.seq.call(null,coll);var inst_22699 = inst_22698;var state_22718__$1 = (function (){var statearr_22720 = state_22718;(statearr_22720[7] = inst_22699);
return statearr_22720;
})();var statearr_22721_22739 = state_22718__$1;(statearr_22721_22739[2] = null);
(statearr_22721_22739[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22719 === 2))
{var inst_22699 = (state_22718[7]);var state_22718__$1 = state_22718;if(cljs.core.truth_(inst_22699))
{var statearr_22722_22740 = state_22718__$1;(statearr_22722_22740[1] = 4);
} else
{var statearr_22723_22741 = state_22718__$1;(statearr_22723_22741[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22719 === 3))
{var inst_22716 = (state_22718[2]);var state_22718__$1 = state_22718;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22718__$1,inst_22716);
} else
{if((state_val_22719 === 4))
{var inst_22699 = (state_22718[7]);var inst_22702 = cljs.core.first.call(null,inst_22699);var state_22718__$1 = state_22718;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22718__$1,7,ch,inst_22702);
} else
{if((state_val_22719 === 5))
{var state_22718__$1 = state_22718;if(cljs.core.truth_(close_QMARK_))
{var statearr_22724_22742 = state_22718__$1;(statearr_22724_22742[1] = 8);
} else
{var statearr_22725_22743 = state_22718__$1;(statearr_22725_22743[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22719 === 6))
{var inst_22714 = (state_22718[2]);var state_22718__$1 = state_22718;var statearr_22726_22744 = state_22718__$1;(statearr_22726_22744[2] = inst_22714);
(statearr_22726_22744[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22719 === 7))
{var inst_22699 = (state_22718[7]);var inst_22704 = (state_22718[2]);var inst_22705 = cljs.core.next.call(null,inst_22699);var inst_22699__$1 = inst_22705;var state_22718__$1 = (function (){var statearr_22727 = state_22718;(statearr_22727[7] = inst_22699__$1);
(statearr_22727[8] = inst_22704);
return statearr_22727;
})();var statearr_22728_22745 = state_22718__$1;(statearr_22728_22745[2] = null);
(statearr_22728_22745[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22719 === 8))
{var inst_22709 = cljs.core.async.close_BANG_.call(null,ch);var state_22718__$1 = state_22718;var statearr_22729_22746 = state_22718__$1;(statearr_22729_22746[2] = inst_22709);
(statearr_22729_22746[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22719 === 9))
{var state_22718__$1 = state_22718;var statearr_22730_22747 = state_22718__$1;(statearr_22730_22747[2] = null);
(statearr_22730_22747[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22719 === 10))
{var inst_22712 = (state_22718[2]);var state_22718__$1 = state_22718;var statearr_22731_22748 = state_22718__$1;(statearr_22731_22748[2] = inst_22712);
(statearr_22731_22748[1] = 6);
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
});return ((function (switch__10729__auto__){
return (function() {
var state_machine__10730__auto__ = null;
var state_machine__10730__auto____0 = (function (){var statearr_22735 = [null,null,null,null,null,null,null,null,null];(statearr_22735[0] = state_machine__10730__auto__);
(statearr_22735[1] = 1);
return statearr_22735;
});
var state_machine__10730__auto____1 = (function (state_22718){while(true){
var ret_value__10731__auto__ = (function (){try{while(true){
var result__10732__auto__ = switch__10729__auto__.call(null,state_22718);if(cljs.core.keyword_identical_QMARK_.call(null,result__10732__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10732__auto__;
}
break;
}
}catch (e22736){if((e22736 instanceof Object))
{var ex__10733__auto__ = e22736;var statearr_22737_22749 = state_22718;(statearr_22737_22749[5] = ex__10733__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22718);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22736;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10731__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22750 = state_22718;
state_22718 = G__22750;
continue;
}
} else
{return ret_value__10731__auto__;
}
break;
}
});
state_machine__10730__auto__ = function(state_22718){
switch(arguments.length){
case 0:
return state_machine__10730__auto____0.call(this);
case 1:
return state_machine__10730__auto____1.call(this,state_22718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10730__auto____0;
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10730__auto____1;
return state_machine__10730__auto__;
})()
;})(switch__10729__auto__))
})();var state__10795__auto__ = (function (){var statearr_22738 = f__10794__auto__.call(null);(statearr_22738[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10793__auto__);
return statearr_22738;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10795__auto__);
}));
return c__10793__auto__;
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
cljs.core.async.Mux = (function (){var obj22752 = {};return obj22752;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__8186__auto__ = _;if(and__8186__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__8186__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__8806__auto__ = (((_ == null))?null:_);return (function (){var or__8198__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj22754 = {};return obj22754;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__8186__auto__ = m;if(and__8186__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__8186__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__8806__auto__ = (((m == null))?null:m);return (function (){var or__8198__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__8186__auto__ = m;if(and__8186__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__8186__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__8806__auto__ = (((m == null))?null:m);return (function (){var or__8198__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__8186__auto__ = m;if(and__8186__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__8186__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__8806__auto__ = (((m == null))?null:m);return (function (){var or__8198__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t22978 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22978 = (function (cs,ch,mult,meta22979){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta22979 = meta22979;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22978.cljs$lang$type = true;
cljs.core.async.t22978.cljs$lang$ctorStr = "cljs.core.async/t22978";
cljs.core.async.t22978.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8747__auto__,writer__8748__auto__,opt__8749__auto__){return cljs.core._write.call(null,writer__8748__auto__,"cljs.core.async/t22978");
});})(cs))
;
cljs.core.async.t22978.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t22978.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t22978.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t22978.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t22978.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t22978.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t22978.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22980){var self__ = this;
var _22980__$1 = this;return self__.meta22979;
});})(cs))
;
cljs.core.async.t22978.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22980,meta22979__$1){var self__ = this;
var _22980__$1 = this;return (new cljs.core.async.t22978(self__.cs,self__.ch,self__.mult,meta22979__$1));
});})(cs))
;
cljs.core.async.__GT_t22978 = ((function (cs){
return (function __GT_t22978(cs__$1,ch__$1,mult__$1,meta22979){return (new cljs.core.async.t22978(cs__$1,ch__$1,mult__$1,meta22979));
});})(cs))
;
}
return (new cljs.core.async.t22978(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__10793__auto___23201 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10794__auto__ = (function (){var switch__10729__auto__ = (function (state_23115){var state_val_23116 = (state_23115[1]);if((state_val_23116 === 32))
{var inst_22983 = (state_23115[7]);var inst_23059 = (state_23115[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23115,31,Object,null,30);var inst_23066 = cljs.core.async.put_BANG_.call(null,inst_23059,inst_22983,done);var state_23115__$1 = state_23115;var statearr_23117_23202 = state_23115__$1;(statearr_23117_23202[2] = inst_23066);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23115__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23116 === 1))
{var state_23115__$1 = state_23115;var statearr_23118_23203 = state_23115__$1;(statearr_23118_23203[2] = null);
(statearr_23118_23203[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23116 === 33))
{var inst_23072 = (state_23115[9]);var inst_23074 = cljs.core.chunked_seq_QMARK_.call(null,inst_23072);var state_23115__$1 = state_23115;if(inst_23074)
{var statearr_23119_23204 = state_23115__$1;(statearr_23119_23204[1] = 36);
} else
{var statearr_23120_23205 = state_23115__$1;(statearr_23120_23205[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23116 === 2))
{var state_23115__$1 = state_23115;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23115__$1,4,ch);
} else
{if((state_val_23116 === 34))
{var state_23115__$1 = state_23115;var statearr_23121_23206 = state_23115__$1;(statearr_23121_23206[2] = null);
(statearr_23121_23206[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23116 === 3))
{var inst_23113 = (state_23115[2]);var state_23115__$1 = state_23115;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23115__$1,inst_23113);
} else
{if((state_val_23116 === 35))
{var inst_23097 = (state_23115[2]);var state_23115__$1 = state_23115;var statearr_23122_23207 = state_23115__$1;(statearr_23122_23207[2] = inst_23097);
(statearr_23122_23207[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23116 === 4))
{var inst_22983 = (state_23115[7]);var inst_22983__$1 = (state_23115[2]);var inst_22984 = (inst_22983__$1 == null);var state_23115__$1 = (function (){var statearr_23123 = state_23115;(statearr_23123[7] = inst_22983__$1);
return statearr_23123;
})();if(cljs.core.truth_(inst_22984))
{var statearr_23124_23208 = state_23115__$1;(statearr_23124_23208[1] = 5);
} else
{var statearr_23125_23209 = state_23115__$1;(statearr_23125_23209[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23116 === 36))
{var inst_23072 = (state_23115[9]);var inst_23076 = cljs.core.chunk_first.call(null,inst_23072);var inst_23077 = cljs.core.chunk_rest.call(null,inst_23072);var inst_23078 = cljs.core.count.call(null,inst_23076);var inst_23051 = inst_23077;var inst_23052 = inst_23076;var inst_23053 = inst_23078;var inst_23054 = 0;var state_23115__$1 = (function (){var statearr_23126 = state_23115;(statearr_23126[10] = inst_23053);
(statearr_23126[11] = inst_23054);
(statearr_23126[12] = inst_23052);
(statearr_23126[13] = inst_23051);
return statearr_23126;
})();var statearr_23127_23210 = state_23115__$1;(statearr_23127_23210[2] = null);
(statearr_23127_23210[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23116 === 5))
{var inst_22990 = cljs.core.deref.call(null,cs);var inst_22991 = cljs.core.seq.call(null,inst_22990);var inst_22992 = inst_22991;var inst_22993 = null;var inst_22994 = 0;var inst_22995 = 0;var state_23115__$1 = (function (){var statearr_23128 = state_23115;(statearr_23128[14] = inst_22994);
(statearr_23128[15] = inst_22993);
(statearr_23128[16] = inst_22992);
(statearr_23128[17] = inst_22995);
return statearr_23128;
})();var statearr_23129_23211 = state_23115__$1;(statearr_23129_23211[2] = null);
(statearr_23129_23211[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23116 === 37))
{var inst_23072 = (state_23115[9]);var inst_23081 = cljs.core.first.call(null,inst_23072);var state_23115__$1 = (function (){var statearr_23130 = state_23115;(statearr_23130[18] = inst_23081);
return statearr_23130;
})();var statearr_23131_23212 = state_23115__$1;(statearr_23131_23212[2] = null);
(statearr_23131_23212[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23116 === 6))
{var inst_23043 = (state_23115[19]);var inst_23042 = cljs.core.deref.call(null,cs);var inst_23043__$1 = cljs.core.keys.call(null,inst_23042);var inst_23044 = cljs.core.count.call(null,inst_23043__$1);var inst_23045 = cljs.core.reset_BANG_.call(null,dctr,inst_23044);var inst_23050 = cljs.core.seq.call(null,inst_23043__$1);var inst_23051 = inst_23050;var inst_23052 = null;var inst_23053 = 0;var inst_23054 = 0;var state_23115__$1 = (function (){var statearr_23132 = state_23115;(statearr_23132[20] = inst_23045);
(statearr_23132[19] = inst_23043__$1);
(statearr_23132[10] = inst_23053);
(statearr_23132[11] = inst_23054);
(statearr_23132[12] = inst_23052);
(statearr_23132[13] = inst_23051);
return statearr_23132;
})();var statearr_23133_23213 = state_23115__$1;(statearr_23133_23213[2] = null);
(statearr_23133_23213[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23116 === 38))
{var inst_23094 = (state_23115[2]);var state_23115__$1 = state_23115;var statearr_23134_23214 = state_23115__$1;(statearr_23134_23214[2] = inst_23094);
(statearr_23134_23214[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23116 === 7))
{var inst_23111 = (state_23115[2]);var state_23115__$1 = state_23115;var statearr_23135_23215 = state_23115__$1;(statearr_23135_23215[2] = inst_23111);
(statearr_23135_23215[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23116 === 39))
{var inst_23072 = (state_23115[9]);var inst_23090 = (state_23115[2]);var inst_23091 = cljs.core.next.call(null,inst_23072);var inst_23051 = inst_23091;var inst_23052 = null;var inst_23053 = 0;var inst_23054 = 0;var state_23115__$1 = (function (){var statearr_23136 = state_23115;(statearr_23136[21] = inst_23090);
(statearr_23136[10] = inst_23053);
(statearr_23136[11] = inst_23054);
(statearr_23136[12] = inst_23052);
(statearr_23136[13] = inst_23051);
return statearr_23136;
})();var statearr_23137_23216 = state_23115__$1;(statearr_23137_23216[2] = null);
(statearr_23137_23216[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23116 === 8))
{var inst_22994 = (state_23115[14]);var inst_22995 = (state_23115[17]);var inst_22997 = (inst_22995 < inst_22994);var inst_22998 = inst_22997;var state_23115__$1 = state_23115;if(cljs.core.truth_(inst_22998))
{var statearr_23138_23217 = state_23115__$1;(statearr_23138_23217[1] = 10);
} else
{var statearr_23139_23218 = state_23115__$1;(statearr_23139_23218[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23116 === 40))
{var inst_23081 = (state_23115[18]);var inst_23082 = (state_23115[2]);var inst_23083 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_23084 = cljs.core.async.untap_STAR_.call(null,m,inst_23081);var state_23115__$1 = (function (){var statearr_23140 = state_23115;(statearr_23140[22] = inst_23083);
(statearr_23140[23] = inst_23082);
return statearr_23140;
})();var statearr_23141_23219 = state_23115__$1;(statearr_23141_23219[2] = inst_23084);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23115__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23116 === 9))
{var inst_23040 = (state_23115[2]);var state_23115__$1 = state_23115;var statearr_23142_23220 = state_23115__$1;(statearr_23142_23220[2] = inst_23040);
(statearr_23142_23220[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23116 === 41))
{var inst_22983 = (state_23115[7]);var inst_23081 = (state_23115[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23115,40,Object,null,39);var inst_23088 = cljs.core.async.put_BANG_.call(null,inst_23081,inst_22983,done);var state_23115__$1 = state_23115;var statearr_23143_23221 = state_23115__$1;(statearr_23143_23221[2] = inst_23088);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23115__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23116 === 10))
{var inst_22993 = (state_23115[15]);var inst_22995 = (state_23115[17]);var inst_23001 = cljs.core._nth.call(null,inst_22993,inst_22995);var inst_23002 = cljs.core.nth.call(null,inst_23001,0,null);var inst_23003 = cljs.core.nth.call(null,inst_23001,1,null);var state_23115__$1 = (function (){var statearr_23144 = state_23115;(statearr_23144[24] = inst_23002);
return statearr_23144;
})();if(cljs.core.truth_(inst_23003))
{var statearr_23145_23222 = state_23115__$1;(statearr_23145_23222[1] = 13);
} else
{var statearr_23146_23223 = state_23115__$1;(statearr_23146_23223[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23116 === 42))
{var state_23115__$1 = state_23115;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23115__$1,45,dchan);
} else
{if((state_val_23116 === 11))
{var inst_22992 = (state_23115[16]);var inst_23012 = (state_23115[25]);var inst_23012__$1 = cljs.core.seq.call(null,inst_22992);var state_23115__$1 = (function (){var statearr_23147 = state_23115;(statearr_23147[25] = inst_23012__$1);
return statearr_23147;
})();if(inst_23012__$1)
{var statearr_23148_23224 = state_23115__$1;(statearr_23148_23224[1] = 16);
} else
{var statearr_23149_23225 = state_23115__$1;(statearr_23149_23225[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23116 === 43))
{var state_23115__$1 = state_23115;var statearr_23150_23226 = state_23115__$1;(statearr_23150_23226[2] = null);
(statearr_23150_23226[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23116 === 12))
{var inst_23038 = (state_23115[2]);var state_23115__$1 = state_23115;var statearr_23151_23227 = state_23115__$1;(statearr_23151_23227[2] = inst_23038);
(statearr_23151_23227[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23116 === 44))
{var inst_23108 = (state_23115[2]);var state_23115__$1 = (function (){var statearr_23152 = state_23115;(statearr_23152[26] = inst_23108);
return statearr_23152;
})();var statearr_23153_23228 = state_23115__$1;(statearr_23153_23228[2] = null);
(statearr_23153_23228[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23116 === 13))
{var inst_23002 = (state_23115[24]);var inst_23005 = cljs.core.async.close_BANG_.call(null,inst_23002);var state_23115__$1 = state_23115;var statearr_23154_23229 = state_23115__$1;(statearr_23154_23229[2] = inst_23005);
(statearr_23154_23229[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23116 === 45))
{var inst_23105 = (state_23115[2]);var state_23115__$1 = state_23115;var statearr_23158_23230 = state_23115__$1;(statearr_23158_23230[2] = inst_23105);
(statearr_23158_23230[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23116 === 14))
{var state_23115__$1 = state_23115;var statearr_23159_23231 = state_23115__$1;(statearr_23159_23231[2] = null);
(statearr_23159_23231[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23116 === 15))
{var inst_22994 = (state_23115[14]);var inst_22993 = (state_23115[15]);var inst_22992 = (state_23115[16]);var inst_22995 = (state_23115[17]);var inst_23008 = (state_23115[2]);var inst_23009 = (inst_22995 + 1);var tmp23155 = inst_22994;var tmp23156 = inst_22993;var tmp23157 = inst_22992;var inst_22992__$1 = tmp23157;var inst_22993__$1 = tmp23156;var inst_22994__$1 = tmp23155;var inst_22995__$1 = inst_23009;var state_23115__$1 = (function (){var statearr_23160 = state_23115;(statearr_23160[14] = inst_22994__$1);
(statearr_23160[15] = inst_22993__$1);
(statearr_23160[16] = inst_22992__$1);
(statearr_23160[17] = inst_22995__$1);
(statearr_23160[27] = inst_23008);
return statearr_23160;
})();var statearr_23161_23232 = state_23115__$1;(statearr_23161_23232[2] = null);
(statearr_23161_23232[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23116 === 16))
{var inst_23012 = (state_23115[25]);var inst_23014 = cljs.core.chunked_seq_QMARK_.call(null,inst_23012);var state_23115__$1 = state_23115;if(inst_23014)
{var statearr_23162_23233 = state_23115__$1;(statearr_23162_23233[1] = 19);
} else
{var statearr_23163_23234 = state_23115__$1;(statearr_23163_23234[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23116 === 17))
{var state_23115__$1 = state_23115;var statearr_23164_23235 = state_23115__$1;(statearr_23164_23235[2] = null);
(statearr_23164_23235[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23116 === 18))
{var inst_23036 = (state_23115[2]);var state_23115__$1 = state_23115;var statearr_23165_23236 = state_23115__$1;(statearr_23165_23236[2] = inst_23036);
(statearr_23165_23236[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23116 === 19))
{var inst_23012 = (state_23115[25]);var inst_23016 = cljs.core.chunk_first.call(null,inst_23012);var inst_23017 = cljs.core.chunk_rest.call(null,inst_23012);var inst_23018 = cljs.core.count.call(null,inst_23016);var inst_22992 = inst_23017;var inst_22993 = inst_23016;var inst_22994 = inst_23018;var inst_22995 = 0;var state_23115__$1 = (function (){var statearr_23166 = state_23115;(statearr_23166[14] = inst_22994);
(statearr_23166[15] = inst_22993);
(statearr_23166[16] = inst_22992);
(statearr_23166[17] = inst_22995);
return statearr_23166;
})();var statearr_23167_23237 = state_23115__$1;(statearr_23167_23237[2] = null);
(statearr_23167_23237[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23116 === 20))
{var inst_23012 = (state_23115[25]);var inst_23022 = cljs.core.first.call(null,inst_23012);var inst_23023 = cljs.core.nth.call(null,inst_23022,0,null);var inst_23024 = cljs.core.nth.call(null,inst_23022,1,null);var state_23115__$1 = (function (){var statearr_23168 = state_23115;(statearr_23168[28] = inst_23023);
return statearr_23168;
})();if(cljs.core.truth_(inst_23024))
{var statearr_23169_23238 = state_23115__$1;(statearr_23169_23238[1] = 22);
} else
{var statearr_23170_23239 = state_23115__$1;(statearr_23170_23239[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23116 === 21))
{var inst_23033 = (state_23115[2]);var state_23115__$1 = state_23115;var statearr_23171_23240 = state_23115__$1;(statearr_23171_23240[2] = inst_23033);
(statearr_23171_23240[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23116 === 22))
{var inst_23023 = (state_23115[28]);var inst_23026 = cljs.core.async.close_BANG_.call(null,inst_23023);var state_23115__$1 = state_23115;var statearr_23172_23241 = state_23115__$1;(statearr_23172_23241[2] = inst_23026);
(statearr_23172_23241[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23116 === 23))
{var state_23115__$1 = state_23115;var statearr_23173_23242 = state_23115__$1;(statearr_23173_23242[2] = null);
(statearr_23173_23242[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23116 === 24))
{var inst_23012 = (state_23115[25]);var inst_23029 = (state_23115[2]);var inst_23030 = cljs.core.next.call(null,inst_23012);var inst_22992 = inst_23030;var inst_22993 = null;var inst_22994 = 0;var inst_22995 = 0;var state_23115__$1 = (function (){var statearr_23174 = state_23115;(statearr_23174[14] = inst_22994);
(statearr_23174[15] = inst_22993);
(statearr_23174[16] = inst_22992);
(statearr_23174[29] = inst_23029);
(statearr_23174[17] = inst_22995);
return statearr_23174;
})();var statearr_23175_23243 = state_23115__$1;(statearr_23175_23243[2] = null);
(statearr_23175_23243[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23116 === 25))
{var inst_23053 = (state_23115[10]);var inst_23054 = (state_23115[11]);var inst_23056 = (inst_23054 < inst_23053);var inst_23057 = inst_23056;var state_23115__$1 = state_23115;if(cljs.core.truth_(inst_23057))
{var statearr_23176_23244 = state_23115__$1;(statearr_23176_23244[1] = 27);
} else
{var statearr_23177_23245 = state_23115__$1;(statearr_23177_23245[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23116 === 26))
{var inst_23043 = (state_23115[19]);var inst_23101 = (state_23115[2]);var inst_23102 = cljs.core.seq.call(null,inst_23043);var state_23115__$1 = (function (){var statearr_23178 = state_23115;(statearr_23178[30] = inst_23101);
return statearr_23178;
})();if(inst_23102)
{var statearr_23179_23246 = state_23115__$1;(statearr_23179_23246[1] = 42);
} else
{var statearr_23180_23247 = state_23115__$1;(statearr_23180_23247[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23116 === 27))
{var inst_23054 = (state_23115[11]);var inst_23052 = (state_23115[12]);var inst_23059 = cljs.core._nth.call(null,inst_23052,inst_23054);var state_23115__$1 = (function (){var statearr_23181 = state_23115;(statearr_23181[8] = inst_23059);
return statearr_23181;
})();var statearr_23182_23248 = state_23115__$1;(statearr_23182_23248[2] = null);
(statearr_23182_23248[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23116 === 28))
{var inst_23072 = (state_23115[9]);var inst_23051 = (state_23115[13]);var inst_23072__$1 = cljs.core.seq.call(null,inst_23051);var state_23115__$1 = (function (){var statearr_23186 = state_23115;(statearr_23186[9] = inst_23072__$1);
return statearr_23186;
})();if(inst_23072__$1)
{var statearr_23187_23249 = state_23115__$1;(statearr_23187_23249[1] = 33);
} else
{var statearr_23188_23250 = state_23115__$1;(statearr_23188_23250[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23116 === 29))
{var inst_23099 = (state_23115[2]);var state_23115__$1 = state_23115;var statearr_23189_23251 = state_23115__$1;(statearr_23189_23251[2] = inst_23099);
(statearr_23189_23251[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23116 === 30))
{var inst_23053 = (state_23115[10]);var inst_23054 = (state_23115[11]);var inst_23052 = (state_23115[12]);var inst_23051 = (state_23115[13]);var inst_23068 = (state_23115[2]);var inst_23069 = (inst_23054 + 1);var tmp23183 = inst_23053;var tmp23184 = inst_23052;var tmp23185 = inst_23051;var inst_23051__$1 = tmp23185;var inst_23052__$1 = tmp23184;var inst_23053__$1 = tmp23183;var inst_23054__$1 = inst_23069;var state_23115__$1 = (function (){var statearr_23190 = state_23115;(statearr_23190[10] = inst_23053__$1);
(statearr_23190[11] = inst_23054__$1);
(statearr_23190[12] = inst_23052__$1);
(statearr_23190[13] = inst_23051__$1);
(statearr_23190[31] = inst_23068);
return statearr_23190;
})();var statearr_23191_23252 = state_23115__$1;(statearr_23191_23252[2] = null);
(statearr_23191_23252[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23116 === 31))
{var inst_23059 = (state_23115[8]);var inst_23060 = (state_23115[2]);var inst_23061 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_23062 = cljs.core.async.untap_STAR_.call(null,m,inst_23059);var state_23115__$1 = (function (){var statearr_23192 = state_23115;(statearr_23192[32] = inst_23061);
(statearr_23192[33] = inst_23060);
return statearr_23192;
})();var statearr_23193_23253 = state_23115__$1;(statearr_23193_23253[2] = inst_23062);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23115__$1);
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
});return ((function (switch__10729__auto__){
return (function() {
var state_machine__10730__auto__ = null;
var state_machine__10730__auto____0 = (function (){var statearr_23197 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23197[0] = state_machine__10730__auto__);
(statearr_23197[1] = 1);
return statearr_23197;
});
var state_machine__10730__auto____1 = (function (state_23115){while(true){
var ret_value__10731__auto__ = (function (){try{while(true){
var result__10732__auto__ = switch__10729__auto__.call(null,state_23115);if(cljs.core.keyword_identical_QMARK_.call(null,result__10732__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10732__auto__;
}
break;
}
}catch (e23198){if((e23198 instanceof Object))
{var ex__10733__auto__ = e23198;var statearr_23199_23254 = state_23115;(statearr_23199_23254[5] = ex__10733__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23115);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23198;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10731__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23255 = state_23115;
state_23115 = G__23255;
continue;
}
} else
{return ret_value__10731__auto__;
}
break;
}
});
state_machine__10730__auto__ = function(state_23115){
switch(arguments.length){
case 0:
return state_machine__10730__auto____0.call(this);
case 1:
return state_machine__10730__auto____1.call(this,state_23115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10730__auto____0;
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10730__auto____1;
return state_machine__10730__auto__;
})()
;})(switch__10729__auto__))
})();var state__10795__auto__ = (function (){var statearr_23200 = f__10794__auto__.call(null);(statearr_23200[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10793__auto___23201);
return statearr_23200;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10795__auto__);
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
cljs.core.async.Mix = (function (){var obj23257 = {};return obj23257;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__8186__auto__ = m;if(and__8186__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__8186__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__8806__auto__ = (((m == null))?null:m);return (function (){var or__8198__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__8186__auto__ = m;if(and__8186__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__8186__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__8806__auto__ = (((m == null))?null:m);return (function (){var or__8198__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__8186__auto__ = m;if(and__8186__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__8186__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__8806__auto__ = (((m == null))?null:m);return (function (){var or__8198__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__8186__auto__ = m;if(and__8186__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__8186__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__8806__auto__ = (((m == null))?null:m);return (function (){var or__8198__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__8186__auto__ = m;if(and__8186__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__8186__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__8806__auto__ = (((m == null))?null:m);return (function (){var or__8198__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t23367 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23367 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta23368){
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
this.meta23368 = meta23368;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23367.cljs$lang$type = true;
cljs.core.async.t23367.cljs$lang$ctorStr = "cljs.core.async/t23367";
cljs.core.async.t23367.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8747__auto__,writer__8748__auto__,opt__8749__auto__){return cljs.core._write.call(null,writer__8748__auto__,"cljs.core.async/t23367");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23367.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t23367.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23367.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23367.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23367.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23367.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23367.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t23367.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23367.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23369){var self__ = this;
var _23369__$1 = this;return self__.meta23368;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23367.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23369,meta23368__$1){var self__ = this;
var _23369__$1 = this;return (new cljs.core.async.t23367(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta23368__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t23367 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t23367(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta23368){return (new cljs.core.async.t23367(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta23368));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t23367(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__10793__auto___23476 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10794__auto__ = (function (){var switch__10729__auto__ = (function (state_23434){var state_val_23435 = (state_23434[1]);if((state_val_23435 === 1))
{var inst_23373 = (state_23434[7]);var inst_23373__$1 = calc_state.call(null);var inst_23374 = cljs.core.seq_QMARK_.call(null,inst_23373__$1);var state_23434__$1 = (function (){var statearr_23436 = state_23434;(statearr_23436[7] = inst_23373__$1);
return statearr_23436;
})();if(inst_23374)
{var statearr_23437_23477 = state_23434__$1;(statearr_23437_23477[1] = 2);
} else
{var statearr_23438_23478 = state_23434__$1;(statearr_23438_23478[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23435 === 2))
{var inst_23373 = (state_23434[7]);var inst_23376 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23373);var state_23434__$1 = state_23434;var statearr_23439_23479 = state_23434__$1;(statearr_23439_23479[2] = inst_23376);
(statearr_23439_23479[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23435 === 3))
{var inst_23373 = (state_23434[7]);var state_23434__$1 = state_23434;var statearr_23440_23480 = state_23434__$1;(statearr_23440_23480[2] = inst_23373);
(statearr_23440_23480[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23435 === 4))
{var inst_23373 = (state_23434[7]);var inst_23379 = (state_23434[2]);var inst_23380 = cljs.core.get.call(null,inst_23379,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_23381 = cljs.core.get.call(null,inst_23379,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_23382 = cljs.core.get.call(null,inst_23379,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_23383 = inst_23373;var state_23434__$1 = (function (){var statearr_23441 = state_23434;(statearr_23441[8] = inst_23383);
(statearr_23441[9] = inst_23380);
(statearr_23441[10] = inst_23382);
(statearr_23441[11] = inst_23381);
return statearr_23441;
})();var statearr_23442_23481 = state_23434__$1;(statearr_23442_23481[2] = null);
(statearr_23442_23481[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23435 === 5))
{var inst_23383 = (state_23434[8]);var inst_23386 = cljs.core.seq_QMARK_.call(null,inst_23383);var state_23434__$1 = state_23434;if(inst_23386)
{var statearr_23443_23482 = state_23434__$1;(statearr_23443_23482[1] = 7);
} else
{var statearr_23444_23483 = state_23434__$1;(statearr_23444_23483[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23435 === 6))
{var inst_23432 = (state_23434[2]);var state_23434__$1 = state_23434;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23434__$1,inst_23432);
} else
{if((state_val_23435 === 7))
{var inst_23383 = (state_23434[8]);var inst_23388 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23383);var state_23434__$1 = state_23434;var statearr_23445_23484 = state_23434__$1;(statearr_23445_23484[2] = inst_23388);
(statearr_23445_23484[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23435 === 8))
{var inst_23383 = (state_23434[8]);var state_23434__$1 = state_23434;var statearr_23446_23485 = state_23434__$1;(statearr_23446_23485[2] = inst_23383);
(statearr_23446_23485[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23435 === 9))
{var inst_23391 = (state_23434[12]);var inst_23391__$1 = (state_23434[2]);var inst_23392 = cljs.core.get.call(null,inst_23391__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_23393 = cljs.core.get.call(null,inst_23391__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_23394 = cljs.core.get.call(null,inst_23391__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_23434__$1 = (function (){var statearr_23447 = state_23434;(statearr_23447[13] = inst_23394);
(statearr_23447[12] = inst_23391__$1);
(statearr_23447[14] = inst_23393);
return statearr_23447;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_23434__$1,10,inst_23392);
} else
{if((state_val_23435 === 10))
{var inst_23399 = (state_23434[15]);var inst_23398 = (state_23434[16]);var inst_23397 = (state_23434[2]);var inst_23398__$1 = cljs.core.nth.call(null,inst_23397,0,null);var inst_23399__$1 = cljs.core.nth.call(null,inst_23397,1,null);var inst_23400 = (inst_23398__$1 == null);var inst_23401 = cljs.core._EQ_.call(null,inst_23399__$1,change);var inst_23402 = (inst_23400) || (inst_23401);var state_23434__$1 = (function (){var statearr_23448 = state_23434;(statearr_23448[15] = inst_23399__$1);
(statearr_23448[16] = inst_23398__$1);
return statearr_23448;
})();if(cljs.core.truth_(inst_23402))
{var statearr_23449_23486 = state_23434__$1;(statearr_23449_23486[1] = 11);
} else
{var statearr_23450_23487 = state_23434__$1;(statearr_23450_23487[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23435 === 11))
{var inst_23398 = (state_23434[16]);var inst_23404 = (inst_23398 == null);var state_23434__$1 = state_23434;if(cljs.core.truth_(inst_23404))
{var statearr_23451_23488 = state_23434__$1;(statearr_23451_23488[1] = 14);
} else
{var statearr_23452_23489 = state_23434__$1;(statearr_23452_23489[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23435 === 12))
{var inst_23394 = (state_23434[13]);var inst_23399 = (state_23434[15]);var inst_23413 = (state_23434[17]);var inst_23413__$1 = inst_23394.call(null,inst_23399);var state_23434__$1 = (function (){var statearr_23453 = state_23434;(statearr_23453[17] = inst_23413__$1);
return statearr_23453;
})();if(cljs.core.truth_(inst_23413__$1))
{var statearr_23454_23490 = state_23434__$1;(statearr_23454_23490[1] = 17);
} else
{var statearr_23455_23491 = state_23434__$1;(statearr_23455_23491[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23435 === 13))
{var inst_23430 = (state_23434[2]);var state_23434__$1 = state_23434;var statearr_23456_23492 = state_23434__$1;(statearr_23456_23492[2] = inst_23430);
(statearr_23456_23492[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23435 === 14))
{var inst_23399 = (state_23434[15]);var inst_23406 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23399);var state_23434__$1 = state_23434;var statearr_23457_23493 = state_23434__$1;(statearr_23457_23493[2] = inst_23406);
(statearr_23457_23493[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23435 === 15))
{var state_23434__$1 = state_23434;var statearr_23458_23494 = state_23434__$1;(statearr_23458_23494[2] = null);
(statearr_23458_23494[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23435 === 16))
{var inst_23409 = (state_23434[2]);var inst_23410 = calc_state.call(null);var inst_23383 = inst_23410;var state_23434__$1 = (function (){var statearr_23459 = state_23434;(statearr_23459[18] = inst_23409);
(statearr_23459[8] = inst_23383);
return statearr_23459;
})();var statearr_23460_23495 = state_23434__$1;(statearr_23460_23495[2] = null);
(statearr_23460_23495[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23435 === 17))
{var inst_23413 = (state_23434[17]);var state_23434__$1 = state_23434;var statearr_23461_23496 = state_23434__$1;(statearr_23461_23496[2] = inst_23413);
(statearr_23461_23496[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23435 === 18))
{var inst_23394 = (state_23434[13]);var inst_23393 = (state_23434[14]);var inst_23399 = (state_23434[15]);var inst_23416 = cljs.core.empty_QMARK_.call(null,inst_23394);var inst_23417 = inst_23393.call(null,inst_23399);var inst_23418 = cljs.core.not.call(null,inst_23417);var inst_23419 = (inst_23416) && (inst_23418);var state_23434__$1 = state_23434;var statearr_23462_23497 = state_23434__$1;(statearr_23462_23497[2] = inst_23419);
(statearr_23462_23497[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23435 === 19))
{var inst_23421 = (state_23434[2]);var state_23434__$1 = state_23434;if(cljs.core.truth_(inst_23421))
{var statearr_23463_23498 = state_23434__$1;(statearr_23463_23498[1] = 20);
} else
{var statearr_23464_23499 = state_23434__$1;(statearr_23464_23499[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23435 === 20))
{var inst_23398 = (state_23434[16]);var state_23434__$1 = state_23434;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23434__$1,23,out,inst_23398);
} else
{if((state_val_23435 === 21))
{var state_23434__$1 = state_23434;var statearr_23465_23500 = state_23434__$1;(statearr_23465_23500[2] = null);
(statearr_23465_23500[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23435 === 22))
{var inst_23391 = (state_23434[12]);var inst_23427 = (state_23434[2]);var inst_23383 = inst_23391;var state_23434__$1 = (function (){var statearr_23466 = state_23434;(statearr_23466[19] = inst_23427);
(statearr_23466[8] = inst_23383);
return statearr_23466;
})();var statearr_23467_23501 = state_23434__$1;(statearr_23467_23501[2] = null);
(statearr_23467_23501[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23435 === 23))
{var inst_23424 = (state_23434[2]);var state_23434__$1 = state_23434;var statearr_23468_23502 = state_23434__$1;(statearr_23468_23502[2] = inst_23424);
(statearr_23468_23502[1] = 22);
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
});return ((function (switch__10729__auto__){
return (function() {
var state_machine__10730__auto__ = null;
var state_machine__10730__auto____0 = (function (){var statearr_23472 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23472[0] = state_machine__10730__auto__);
(statearr_23472[1] = 1);
return statearr_23472;
});
var state_machine__10730__auto____1 = (function (state_23434){while(true){
var ret_value__10731__auto__ = (function (){try{while(true){
var result__10732__auto__ = switch__10729__auto__.call(null,state_23434);if(cljs.core.keyword_identical_QMARK_.call(null,result__10732__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10732__auto__;
}
break;
}
}catch (e23473){if((e23473 instanceof Object))
{var ex__10733__auto__ = e23473;var statearr_23474_23503 = state_23434;(statearr_23474_23503[5] = ex__10733__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23434);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23473;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10731__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23504 = state_23434;
state_23434 = G__23504;
continue;
}
} else
{return ret_value__10731__auto__;
}
break;
}
});
state_machine__10730__auto__ = function(state_23434){
switch(arguments.length){
case 0:
return state_machine__10730__auto____0.call(this);
case 1:
return state_machine__10730__auto____1.call(this,state_23434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10730__auto____0;
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10730__auto____1;
return state_machine__10730__auto__;
})()
;})(switch__10729__auto__))
})();var state__10795__auto__ = (function (){var statearr_23475 = f__10794__auto__.call(null);(statearr_23475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10793__auto___23476);
return statearr_23475;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10795__auto__);
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
cljs.core.async.Pub = (function (){var obj23506 = {};return obj23506;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__8186__auto__ = p;if(and__8186__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__8186__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__8806__auto__ = (((p == null))?null:p);return (function (){var or__8198__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__8186__auto__ = p;if(and__8186__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__8186__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__8806__auto__ = (((p == null))?null:p);return (function (){var or__8198__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__8186__auto__ = p;if(and__8186__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__8186__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__8806__auto__ = (((p == null))?null:p);return (function (){var or__8198__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__8186__auto__ = p;if(and__8186__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__8186__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__8806__auto__ = (((p == null))?null:p);return (function (){var or__8198__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
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
return (function (topic){var or__8198__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__8198__auto__))
{return or__8198__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__8198__auto__,mults){
return (function (p1__23507_SHARP_){if(cljs.core.truth_(p1__23507_SHARP_.call(null,topic)))
{return p1__23507_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__23507_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__8198__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t23632 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23632 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta23633){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta23633 = meta23633;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23632.cljs$lang$type = true;
cljs.core.async.t23632.cljs$lang$ctorStr = "cljs.core.async/t23632";
cljs.core.async.t23632.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8747__auto__,writer__8748__auto__,opt__8749__auto__){return cljs.core._write.call(null,writer__8748__auto__,"cljs.core.async/t23632");
});})(mults,ensure_mult))
;
cljs.core.async.t23632.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t23632.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t23632.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t23632.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t23632.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t23632.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t23632.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t23632.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23634){var self__ = this;
var _23634__$1 = this;return self__.meta23633;
});})(mults,ensure_mult))
;
cljs.core.async.t23632.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23634,meta23633__$1){var self__ = this;
var _23634__$1 = this;return (new cljs.core.async.t23632(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta23633__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t23632 = ((function (mults,ensure_mult){
return (function __GT_t23632(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta23633){return (new cljs.core.async.t23632(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta23633));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t23632(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__10793__auto___23756 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10794__auto__ = (function (){var switch__10729__auto__ = (function (state_23708){var state_val_23709 = (state_23708[1]);if((state_val_23709 === 1))
{var state_23708__$1 = state_23708;var statearr_23710_23757 = state_23708__$1;(statearr_23710_23757[2] = null);
(statearr_23710_23757[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23709 === 2))
{var state_23708__$1 = state_23708;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23708__$1,4,ch);
} else
{if((state_val_23709 === 3))
{var inst_23706 = (state_23708[2]);var state_23708__$1 = state_23708;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23708__$1,inst_23706);
} else
{if((state_val_23709 === 4))
{var inst_23637 = (state_23708[7]);var inst_23637__$1 = (state_23708[2]);var inst_23638 = (inst_23637__$1 == null);var state_23708__$1 = (function (){var statearr_23711 = state_23708;(statearr_23711[7] = inst_23637__$1);
return statearr_23711;
})();if(cljs.core.truth_(inst_23638))
{var statearr_23712_23758 = state_23708__$1;(statearr_23712_23758[1] = 5);
} else
{var statearr_23713_23759 = state_23708__$1;(statearr_23713_23759[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23709 === 5))
{var inst_23644 = cljs.core.deref.call(null,mults);var inst_23645 = cljs.core.vals.call(null,inst_23644);var inst_23646 = cljs.core.seq.call(null,inst_23645);var inst_23647 = inst_23646;var inst_23648 = null;var inst_23649 = 0;var inst_23650 = 0;var state_23708__$1 = (function (){var statearr_23714 = state_23708;(statearr_23714[8] = inst_23649);
(statearr_23714[9] = inst_23648);
(statearr_23714[10] = inst_23650);
(statearr_23714[11] = inst_23647);
return statearr_23714;
})();var statearr_23715_23760 = state_23708__$1;(statearr_23715_23760[2] = null);
(statearr_23715_23760[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23709 === 6))
{var inst_23687 = (state_23708[12]);var inst_23685 = (state_23708[13]);var inst_23637 = (state_23708[7]);var inst_23685__$1 = topic_fn.call(null,inst_23637);var inst_23686 = cljs.core.deref.call(null,mults);var inst_23687__$1 = cljs.core.get.call(null,inst_23686,inst_23685__$1);var state_23708__$1 = (function (){var statearr_23716 = state_23708;(statearr_23716[12] = inst_23687__$1);
(statearr_23716[13] = inst_23685__$1);
return statearr_23716;
})();if(cljs.core.truth_(inst_23687__$1))
{var statearr_23717_23761 = state_23708__$1;(statearr_23717_23761[1] = 19);
} else
{var statearr_23718_23762 = state_23708__$1;(statearr_23718_23762[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23709 === 7))
{var inst_23704 = (state_23708[2]);var state_23708__$1 = state_23708;var statearr_23719_23763 = state_23708__$1;(statearr_23719_23763[2] = inst_23704);
(statearr_23719_23763[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23709 === 8))
{var inst_23649 = (state_23708[8]);var inst_23650 = (state_23708[10]);var inst_23652 = (inst_23650 < inst_23649);var inst_23653 = inst_23652;var state_23708__$1 = state_23708;if(cljs.core.truth_(inst_23653))
{var statearr_23723_23764 = state_23708__$1;(statearr_23723_23764[1] = 10);
} else
{var statearr_23724_23765 = state_23708__$1;(statearr_23724_23765[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23709 === 9))
{var inst_23683 = (state_23708[2]);var state_23708__$1 = state_23708;var statearr_23725_23766 = state_23708__$1;(statearr_23725_23766[2] = inst_23683);
(statearr_23725_23766[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23709 === 10))
{var inst_23649 = (state_23708[8]);var inst_23648 = (state_23708[9]);var inst_23650 = (state_23708[10]);var inst_23647 = (state_23708[11]);var inst_23655 = cljs.core._nth.call(null,inst_23648,inst_23650);var inst_23656 = cljs.core.async.muxch_STAR_.call(null,inst_23655);var inst_23657 = cljs.core.async.close_BANG_.call(null,inst_23656);var inst_23658 = (inst_23650 + 1);var tmp23720 = inst_23649;var tmp23721 = inst_23648;var tmp23722 = inst_23647;var inst_23647__$1 = tmp23722;var inst_23648__$1 = tmp23721;var inst_23649__$1 = tmp23720;var inst_23650__$1 = inst_23658;var state_23708__$1 = (function (){var statearr_23726 = state_23708;(statearr_23726[8] = inst_23649__$1);
(statearr_23726[9] = inst_23648__$1);
(statearr_23726[10] = inst_23650__$1);
(statearr_23726[14] = inst_23657);
(statearr_23726[11] = inst_23647__$1);
return statearr_23726;
})();var statearr_23727_23767 = state_23708__$1;(statearr_23727_23767[2] = null);
(statearr_23727_23767[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23709 === 11))
{var inst_23661 = (state_23708[15]);var inst_23647 = (state_23708[11]);var inst_23661__$1 = cljs.core.seq.call(null,inst_23647);var state_23708__$1 = (function (){var statearr_23728 = state_23708;(statearr_23728[15] = inst_23661__$1);
return statearr_23728;
})();if(inst_23661__$1)
{var statearr_23729_23768 = state_23708__$1;(statearr_23729_23768[1] = 13);
} else
{var statearr_23730_23769 = state_23708__$1;(statearr_23730_23769[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23709 === 12))
{var inst_23681 = (state_23708[2]);var state_23708__$1 = state_23708;var statearr_23731_23770 = state_23708__$1;(statearr_23731_23770[2] = inst_23681);
(statearr_23731_23770[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23709 === 13))
{var inst_23661 = (state_23708[15]);var inst_23663 = cljs.core.chunked_seq_QMARK_.call(null,inst_23661);var state_23708__$1 = state_23708;if(inst_23663)
{var statearr_23732_23771 = state_23708__$1;(statearr_23732_23771[1] = 16);
} else
{var statearr_23733_23772 = state_23708__$1;(statearr_23733_23772[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23709 === 14))
{var state_23708__$1 = state_23708;var statearr_23734_23773 = state_23708__$1;(statearr_23734_23773[2] = null);
(statearr_23734_23773[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23709 === 15))
{var inst_23679 = (state_23708[2]);var state_23708__$1 = state_23708;var statearr_23735_23774 = state_23708__$1;(statearr_23735_23774[2] = inst_23679);
(statearr_23735_23774[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23709 === 16))
{var inst_23661 = (state_23708[15]);var inst_23665 = cljs.core.chunk_first.call(null,inst_23661);var inst_23666 = cljs.core.chunk_rest.call(null,inst_23661);var inst_23667 = cljs.core.count.call(null,inst_23665);var inst_23647 = inst_23666;var inst_23648 = inst_23665;var inst_23649 = inst_23667;var inst_23650 = 0;var state_23708__$1 = (function (){var statearr_23736 = state_23708;(statearr_23736[8] = inst_23649);
(statearr_23736[9] = inst_23648);
(statearr_23736[10] = inst_23650);
(statearr_23736[11] = inst_23647);
return statearr_23736;
})();var statearr_23737_23775 = state_23708__$1;(statearr_23737_23775[2] = null);
(statearr_23737_23775[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23709 === 17))
{var inst_23661 = (state_23708[15]);var inst_23670 = cljs.core.first.call(null,inst_23661);var inst_23671 = cljs.core.async.muxch_STAR_.call(null,inst_23670);var inst_23672 = cljs.core.async.close_BANG_.call(null,inst_23671);var inst_23673 = cljs.core.next.call(null,inst_23661);var inst_23647 = inst_23673;var inst_23648 = null;var inst_23649 = 0;var inst_23650 = 0;var state_23708__$1 = (function (){var statearr_23738 = state_23708;(statearr_23738[8] = inst_23649);
(statearr_23738[16] = inst_23672);
(statearr_23738[9] = inst_23648);
(statearr_23738[10] = inst_23650);
(statearr_23738[11] = inst_23647);
return statearr_23738;
})();var statearr_23739_23776 = state_23708__$1;(statearr_23739_23776[2] = null);
(statearr_23739_23776[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23709 === 18))
{var inst_23676 = (state_23708[2]);var state_23708__$1 = state_23708;var statearr_23740_23777 = state_23708__$1;(statearr_23740_23777[2] = inst_23676);
(statearr_23740_23777[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23709 === 19))
{var state_23708__$1 = state_23708;var statearr_23741_23778 = state_23708__$1;(statearr_23741_23778[2] = null);
(statearr_23741_23778[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23709 === 20))
{var state_23708__$1 = state_23708;var statearr_23742_23779 = state_23708__$1;(statearr_23742_23779[2] = null);
(statearr_23742_23779[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23709 === 21))
{var inst_23701 = (state_23708[2]);var state_23708__$1 = (function (){var statearr_23743 = state_23708;(statearr_23743[17] = inst_23701);
return statearr_23743;
})();var statearr_23744_23780 = state_23708__$1;(statearr_23744_23780[2] = null);
(statearr_23744_23780[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23709 === 22))
{var inst_23698 = (state_23708[2]);var state_23708__$1 = state_23708;var statearr_23745_23781 = state_23708__$1;(statearr_23745_23781[2] = inst_23698);
(statearr_23745_23781[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23709 === 23))
{var inst_23685 = (state_23708[13]);var inst_23689 = (state_23708[2]);var inst_23690 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23685);var state_23708__$1 = (function (){var statearr_23746 = state_23708;(statearr_23746[18] = inst_23689);
return statearr_23746;
})();var statearr_23747_23782 = state_23708__$1;(statearr_23747_23782[2] = inst_23690);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23708__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23709 === 24))
{var inst_23687 = (state_23708[12]);var inst_23637 = (state_23708[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23708,23,Object,null,22);var inst_23694 = cljs.core.async.muxch_STAR_.call(null,inst_23687);var state_23708__$1 = state_23708;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23708__$1,25,inst_23694,inst_23637);
} else
{if((state_val_23709 === 25))
{var inst_23696 = (state_23708[2]);var state_23708__$1 = state_23708;var statearr_23748_23783 = state_23708__$1;(statearr_23748_23783[2] = inst_23696);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23708__$1);
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
});return ((function (switch__10729__auto__){
return (function() {
var state_machine__10730__auto__ = null;
var state_machine__10730__auto____0 = (function (){var statearr_23752 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23752[0] = state_machine__10730__auto__);
(statearr_23752[1] = 1);
return statearr_23752;
});
var state_machine__10730__auto____1 = (function (state_23708){while(true){
var ret_value__10731__auto__ = (function (){try{while(true){
var result__10732__auto__ = switch__10729__auto__.call(null,state_23708);if(cljs.core.keyword_identical_QMARK_.call(null,result__10732__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10732__auto__;
}
break;
}
}catch (e23753){if((e23753 instanceof Object))
{var ex__10733__auto__ = e23753;var statearr_23754_23784 = state_23708;(statearr_23754_23784[5] = ex__10733__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23708);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23753;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10731__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23785 = state_23708;
state_23708 = G__23785;
continue;
}
} else
{return ret_value__10731__auto__;
}
break;
}
});
state_machine__10730__auto__ = function(state_23708){
switch(arguments.length){
case 0:
return state_machine__10730__auto____0.call(this);
case 1:
return state_machine__10730__auto____1.call(this,state_23708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10730__auto____0;
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10730__auto____1;
return state_machine__10730__auto__;
})()
;})(switch__10729__auto__))
})();var state__10795__auto__ = (function (){var statearr_23755 = f__10794__auto__.call(null);(statearr_23755[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10793__auto___23756);
return statearr_23755;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10795__auto__);
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
,cljs.core.range.call(null,cnt));var c__10793__auto___23922 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10794__auto__ = (function (){var switch__10729__auto__ = (function (state_23892){var state_val_23893 = (state_23892[1]);if((state_val_23893 === 1))
{var state_23892__$1 = state_23892;var statearr_23894_23923 = state_23892__$1;(statearr_23894_23923[2] = null);
(statearr_23894_23923[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23893 === 2))
{var inst_23855 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_23856 = 0;var state_23892__$1 = (function (){var statearr_23895 = state_23892;(statearr_23895[7] = inst_23855);
(statearr_23895[8] = inst_23856);
return statearr_23895;
})();var statearr_23896_23924 = state_23892__$1;(statearr_23896_23924[2] = null);
(statearr_23896_23924[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23893 === 3))
{var inst_23890 = (state_23892[2]);var state_23892__$1 = state_23892;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23892__$1,inst_23890);
} else
{if((state_val_23893 === 4))
{var inst_23856 = (state_23892[8]);var inst_23858 = (inst_23856 < cnt);var state_23892__$1 = state_23892;if(cljs.core.truth_(inst_23858))
{var statearr_23897_23925 = state_23892__$1;(statearr_23897_23925[1] = 6);
} else
{var statearr_23898_23926 = state_23892__$1;(statearr_23898_23926[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23893 === 5))
{var inst_23876 = (state_23892[2]);var state_23892__$1 = (function (){var statearr_23899 = state_23892;(statearr_23899[9] = inst_23876);
return statearr_23899;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23892__$1,12,dchan);
} else
{if((state_val_23893 === 6))
{var state_23892__$1 = state_23892;var statearr_23900_23927 = state_23892__$1;(statearr_23900_23927[2] = null);
(statearr_23900_23927[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23893 === 7))
{var state_23892__$1 = state_23892;var statearr_23901_23928 = state_23892__$1;(statearr_23901_23928[2] = null);
(statearr_23901_23928[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23893 === 8))
{var inst_23874 = (state_23892[2]);var state_23892__$1 = state_23892;var statearr_23902_23929 = state_23892__$1;(statearr_23902_23929[2] = inst_23874);
(statearr_23902_23929[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23893 === 9))
{var inst_23856 = (state_23892[8]);var inst_23869 = (state_23892[2]);var inst_23870 = (inst_23856 + 1);var inst_23856__$1 = inst_23870;var state_23892__$1 = (function (){var statearr_23903 = state_23892;(statearr_23903[10] = inst_23869);
(statearr_23903[8] = inst_23856__$1);
return statearr_23903;
})();var statearr_23904_23930 = state_23892__$1;(statearr_23904_23930[2] = null);
(statearr_23904_23930[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23893 === 10))
{var inst_23860 = (state_23892[2]);var inst_23861 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_23892__$1 = (function (){var statearr_23905 = state_23892;(statearr_23905[11] = inst_23860);
return statearr_23905;
})();var statearr_23906_23931 = state_23892__$1;(statearr_23906_23931[2] = inst_23861);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23892__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23893 === 11))
{var inst_23856 = (state_23892[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23892,10,Object,null,9);var inst_23865 = chs__$1.call(null,inst_23856);var inst_23866 = done.call(null,inst_23856);var inst_23867 = cljs.core.async.take_BANG_.call(null,inst_23865,inst_23866);var state_23892__$1 = state_23892;var statearr_23907_23932 = state_23892__$1;(statearr_23907_23932[2] = inst_23867);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23892__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23893 === 12))
{var inst_23878 = (state_23892[12]);var inst_23878__$1 = (state_23892[2]);var inst_23879 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23878__$1);var state_23892__$1 = (function (){var statearr_23908 = state_23892;(statearr_23908[12] = inst_23878__$1);
return statearr_23908;
})();if(cljs.core.truth_(inst_23879))
{var statearr_23909_23933 = state_23892__$1;(statearr_23909_23933[1] = 13);
} else
{var statearr_23910_23934 = state_23892__$1;(statearr_23910_23934[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23893 === 13))
{var inst_23881 = cljs.core.async.close_BANG_.call(null,out);var state_23892__$1 = state_23892;var statearr_23911_23935 = state_23892__$1;(statearr_23911_23935[2] = inst_23881);
(statearr_23911_23935[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23893 === 14))
{var inst_23878 = (state_23892[12]);var inst_23883 = cljs.core.apply.call(null,f,inst_23878);var state_23892__$1 = state_23892;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23892__$1,16,out,inst_23883);
} else
{if((state_val_23893 === 15))
{var inst_23888 = (state_23892[2]);var state_23892__$1 = state_23892;var statearr_23912_23936 = state_23892__$1;(statearr_23912_23936[2] = inst_23888);
(statearr_23912_23936[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23893 === 16))
{var inst_23885 = (state_23892[2]);var state_23892__$1 = (function (){var statearr_23913 = state_23892;(statearr_23913[13] = inst_23885);
return statearr_23913;
})();var statearr_23914_23937 = state_23892__$1;(statearr_23914_23937[2] = null);
(statearr_23914_23937[1] = 2);
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
});return ((function (switch__10729__auto__){
return (function() {
var state_machine__10730__auto__ = null;
var state_machine__10730__auto____0 = (function (){var statearr_23918 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23918[0] = state_machine__10730__auto__);
(statearr_23918[1] = 1);
return statearr_23918;
});
var state_machine__10730__auto____1 = (function (state_23892){while(true){
var ret_value__10731__auto__ = (function (){try{while(true){
var result__10732__auto__ = switch__10729__auto__.call(null,state_23892);if(cljs.core.keyword_identical_QMARK_.call(null,result__10732__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10732__auto__;
}
break;
}
}catch (e23919){if((e23919 instanceof Object))
{var ex__10733__auto__ = e23919;var statearr_23920_23938 = state_23892;(statearr_23920_23938[5] = ex__10733__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23892);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23919;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10731__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23939 = state_23892;
state_23892 = G__23939;
continue;
}
} else
{return ret_value__10731__auto__;
}
break;
}
});
state_machine__10730__auto__ = function(state_23892){
switch(arguments.length){
case 0:
return state_machine__10730__auto____0.call(this);
case 1:
return state_machine__10730__auto____1.call(this,state_23892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10730__auto____0;
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10730__auto____1;
return state_machine__10730__auto__;
})()
;})(switch__10729__auto__))
})();var state__10795__auto__ = (function (){var statearr_23921 = f__10794__auto__.call(null);(statearr_23921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10793__auto___23922);
return statearr_23921;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10795__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10793__auto___24047 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10794__auto__ = (function (){var switch__10729__auto__ = (function (state_24023){var state_val_24024 = (state_24023[1]);if((state_val_24024 === 1))
{var inst_23994 = cljs.core.vec.call(null,chs);var inst_23995 = inst_23994;var state_24023__$1 = (function (){var statearr_24025 = state_24023;(statearr_24025[7] = inst_23995);
return statearr_24025;
})();var statearr_24026_24048 = state_24023__$1;(statearr_24026_24048[2] = null);
(statearr_24026_24048[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24024 === 2))
{var inst_23995 = (state_24023[7]);var inst_23997 = cljs.core.count.call(null,inst_23995);var inst_23998 = (inst_23997 > 0);var state_24023__$1 = state_24023;if(cljs.core.truth_(inst_23998))
{var statearr_24027_24049 = state_24023__$1;(statearr_24027_24049[1] = 4);
} else
{var statearr_24028_24050 = state_24023__$1;(statearr_24028_24050[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24024 === 3))
{var inst_24021 = (state_24023[2]);var state_24023__$1 = state_24023;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24023__$1,inst_24021);
} else
{if((state_val_24024 === 4))
{var inst_23995 = (state_24023[7]);var state_24023__$1 = state_24023;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_24023__$1,7,inst_23995);
} else
{if((state_val_24024 === 5))
{var inst_24017 = cljs.core.async.close_BANG_.call(null,out);var state_24023__$1 = state_24023;var statearr_24029_24051 = state_24023__$1;(statearr_24029_24051[2] = inst_24017);
(statearr_24029_24051[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24024 === 6))
{var inst_24019 = (state_24023[2]);var state_24023__$1 = state_24023;var statearr_24030_24052 = state_24023__$1;(statearr_24030_24052[2] = inst_24019);
(statearr_24030_24052[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24024 === 7))
{var inst_24002 = (state_24023[8]);var inst_24003 = (state_24023[9]);var inst_24002__$1 = (state_24023[2]);var inst_24003__$1 = cljs.core.nth.call(null,inst_24002__$1,0,null);var inst_24004 = cljs.core.nth.call(null,inst_24002__$1,1,null);var inst_24005 = (inst_24003__$1 == null);var state_24023__$1 = (function (){var statearr_24031 = state_24023;(statearr_24031[8] = inst_24002__$1);
(statearr_24031[10] = inst_24004);
(statearr_24031[9] = inst_24003__$1);
return statearr_24031;
})();if(cljs.core.truth_(inst_24005))
{var statearr_24032_24053 = state_24023__$1;(statearr_24032_24053[1] = 8);
} else
{var statearr_24033_24054 = state_24023__$1;(statearr_24033_24054[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24024 === 8))
{var inst_24002 = (state_24023[8]);var inst_23995 = (state_24023[7]);var inst_24004 = (state_24023[10]);var inst_24003 = (state_24023[9]);var inst_24007 = (function (){var c = inst_24004;var v = inst_24003;var vec__24000 = inst_24002;var cs = inst_23995;return ((function (c,v,vec__24000,cs,inst_24002,inst_23995,inst_24004,inst_24003,state_val_24024){
return (function (p1__23940_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__23940_SHARP_);
});
;})(c,v,vec__24000,cs,inst_24002,inst_23995,inst_24004,inst_24003,state_val_24024))
})();var inst_24008 = cljs.core.filterv.call(null,inst_24007,inst_23995);var inst_23995__$1 = inst_24008;var state_24023__$1 = (function (){var statearr_24034 = state_24023;(statearr_24034[7] = inst_23995__$1);
return statearr_24034;
})();var statearr_24035_24055 = state_24023__$1;(statearr_24035_24055[2] = null);
(statearr_24035_24055[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24024 === 9))
{var inst_24003 = (state_24023[9]);var state_24023__$1 = state_24023;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24023__$1,11,out,inst_24003);
} else
{if((state_val_24024 === 10))
{var inst_24015 = (state_24023[2]);var state_24023__$1 = state_24023;var statearr_24037_24056 = state_24023__$1;(statearr_24037_24056[2] = inst_24015);
(statearr_24037_24056[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24024 === 11))
{var inst_23995 = (state_24023[7]);var inst_24012 = (state_24023[2]);var tmp24036 = inst_23995;var inst_23995__$1 = tmp24036;var state_24023__$1 = (function (){var statearr_24038 = state_24023;(statearr_24038[11] = inst_24012);
(statearr_24038[7] = inst_23995__$1);
return statearr_24038;
})();var statearr_24039_24057 = state_24023__$1;(statearr_24039_24057[2] = null);
(statearr_24039_24057[1] = 2);
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
});return ((function (switch__10729__auto__){
return (function() {
var state_machine__10730__auto__ = null;
var state_machine__10730__auto____0 = (function (){var statearr_24043 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24043[0] = state_machine__10730__auto__);
(statearr_24043[1] = 1);
return statearr_24043;
});
var state_machine__10730__auto____1 = (function (state_24023){while(true){
var ret_value__10731__auto__ = (function (){try{while(true){
var result__10732__auto__ = switch__10729__auto__.call(null,state_24023);if(cljs.core.keyword_identical_QMARK_.call(null,result__10732__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10732__auto__;
}
break;
}
}catch (e24044){if((e24044 instanceof Object))
{var ex__10733__auto__ = e24044;var statearr_24045_24058 = state_24023;(statearr_24045_24058[5] = ex__10733__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24023);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24044;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10731__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24059 = state_24023;
state_24023 = G__24059;
continue;
}
} else
{return ret_value__10731__auto__;
}
break;
}
});
state_machine__10730__auto__ = function(state_24023){
switch(arguments.length){
case 0:
return state_machine__10730__auto____0.call(this);
case 1:
return state_machine__10730__auto____1.call(this,state_24023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10730__auto____0;
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10730__auto____1;
return state_machine__10730__auto__;
})()
;})(switch__10729__auto__))
})();var state__10795__auto__ = (function (){var statearr_24046 = f__10794__auto__.call(null);(statearr_24046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10793__auto___24047);
return statearr_24046;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10795__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10793__auto___24152 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10794__auto__ = (function (){var switch__10729__auto__ = (function (state_24129){var state_val_24130 = (state_24129[1]);if((state_val_24130 === 1))
{var inst_24106 = 0;var state_24129__$1 = (function (){var statearr_24131 = state_24129;(statearr_24131[7] = inst_24106);
return statearr_24131;
})();var statearr_24132_24153 = state_24129__$1;(statearr_24132_24153[2] = null);
(statearr_24132_24153[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24130 === 2))
{var inst_24106 = (state_24129[7]);var inst_24108 = (inst_24106 < n);var state_24129__$1 = state_24129;if(cljs.core.truth_(inst_24108))
{var statearr_24133_24154 = state_24129__$1;(statearr_24133_24154[1] = 4);
} else
{var statearr_24134_24155 = state_24129__$1;(statearr_24134_24155[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24130 === 3))
{var inst_24126 = (state_24129[2]);var inst_24127 = cljs.core.async.close_BANG_.call(null,out);var state_24129__$1 = (function (){var statearr_24135 = state_24129;(statearr_24135[8] = inst_24126);
return statearr_24135;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24129__$1,inst_24127);
} else
{if((state_val_24130 === 4))
{var state_24129__$1 = state_24129;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24129__$1,7,ch);
} else
{if((state_val_24130 === 5))
{var state_24129__$1 = state_24129;var statearr_24136_24156 = state_24129__$1;(statearr_24136_24156[2] = null);
(statearr_24136_24156[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24130 === 6))
{var inst_24124 = (state_24129[2]);var state_24129__$1 = state_24129;var statearr_24137_24157 = state_24129__$1;(statearr_24137_24157[2] = inst_24124);
(statearr_24137_24157[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24130 === 7))
{var inst_24111 = (state_24129[9]);var inst_24111__$1 = (state_24129[2]);var inst_24112 = (inst_24111__$1 == null);var inst_24113 = cljs.core.not.call(null,inst_24112);var state_24129__$1 = (function (){var statearr_24138 = state_24129;(statearr_24138[9] = inst_24111__$1);
return statearr_24138;
})();if(inst_24113)
{var statearr_24139_24158 = state_24129__$1;(statearr_24139_24158[1] = 8);
} else
{var statearr_24140_24159 = state_24129__$1;(statearr_24140_24159[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24130 === 8))
{var inst_24111 = (state_24129[9]);var state_24129__$1 = state_24129;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24129__$1,11,out,inst_24111);
} else
{if((state_val_24130 === 9))
{var state_24129__$1 = state_24129;var statearr_24141_24160 = state_24129__$1;(statearr_24141_24160[2] = null);
(statearr_24141_24160[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24130 === 10))
{var inst_24121 = (state_24129[2]);var state_24129__$1 = state_24129;var statearr_24142_24161 = state_24129__$1;(statearr_24142_24161[2] = inst_24121);
(statearr_24142_24161[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24130 === 11))
{var inst_24106 = (state_24129[7]);var inst_24116 = (state_24129[2]);var inst_24117 = (inst_24106 + 1);var inst_24106__$1 = inst_24117;var state_24129__$1 = (function (){var statearr_24143 = state_24129;(statearr_24143[10] = inst_24116);
(statearr_24143[7] = inst_24106__$1);
return statearr_24143;
})();var statearr_24144_24162 = state_24129__$1;(statearr_24144_24162[2] = null);
(statearr_24144_24162[1] = 2);
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
});return ((function (switch__10729__auto__){
return (function() {
var state_machine__10730__auto__ = null;
var state_machine__10730__auto____0 = (function (){var statearr_24148 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_24148[0] = state_machine__10730__auto__);
(statearr_24148[1] = 1);
return statearr_24148;
});
var state_machine__10730__auto____1 = (function (state_24129){while(true){
var ret_value__10731__auto__ = (function (){try{while(true){
var result__10732__auto__ = switch__10729__auto__.call(null,state_24129);if(cljs.core.keyword_identical_QMARK_.call(null,result__10732__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10732__auto__;
}
break;
}
}catch (e24149){if((e24149 instanceof Object))
{var ex__10733__auto__ = e24149;var statearr_24150_24163 = state_24129;(statearr_24150_24163[5] = ex__10733__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24129);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24149;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10731__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24164 = state_24129;
state_24129 = G__24164;
continue;
}
} else
{return ret_value__10731__auto__;
}
break;
}
});
state_machine__10730__auto__ = function(state_24129){
switch(arguments.length){
case 0:
return state_machine__10730__auto____0.call(this);
case 1:
return state_machine__10730__auto____1.call(this,state_24129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10730__auto____0;
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10730__auto____1;
return state_machine__10730__auto__;
})()
;})(switch__10729__auto__))
})();var state__10795__auto__ = (function (){var statearr_24151 = f__10794__auto__.call(null);(statearr_24151[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10793__auto___24152);
return statearr_24151;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10795__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10793__auto___24261 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10794__auto__ = (function (){var switch__10729__auto__ = (function (state_24236){var state_val_24237 = (state_24236[1]);if((state_val_24237 === 1))
{var inst_24213 = null;var state_24236__$1 = (function (){var statearr_24238 = state_24236;(statearr_24238[7] = inst_24213);
return statearr_24238;
})();var statearr_24239_24262 = state_24236__$1;(statearr_24239_24262[2] = null);
(statearr_24239_24262[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24237 === 2))
{var state_24236__$1 = state_24236;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24236__$1,4,ch);
} else
{if((state_val_24237 === 3))
{var inst_24233 = (state_24236[2]);var inst_24234 = cljs.core.async.close_BANG_.call(null,out);var state_24236__$1 = (function (){var statearr_24240 = state_24236;(statearr_24240[8] = inst_24233);
return statearr_24240;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24236__$1,inst_24234);
} else
{if((state_val_24237 === 4))
{var inst_24216 = (state_24236[9]);var inst_24216__$1 = (state_24236[2]);var inst_24217 = (inst_24216__$1 == null);var inst_24218 = cljs.core.not.call(null,inst_24217);var state_24236__$1 = (function (){var statearr_24241 = state_24236;(statearr_24241[9] = inst_24216__$1);
return statearr_24241;
})();if(inst_24218)
{var statearr_24242_24263 = state_24236__$1;(statearr_24242_24263[1] = 5);
} else
{var statearr_24243_24264 = state_24236__$1;(statearr_24243_24264[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24237 === 5))
{var inst_24213 = (state_24236[7]);var inst_24216 = (state_24236[9]);var inst_24220 = cljs.core._EQ_.call(null,inst_24216,inst_24213);var state_24236__$1 = state_24236;if(inst_24220)
{var statearr_24244_24265 = state_24236__$1;(statearr_24244_24265[1] = 8);
} else
{var statearr_24245_24266 = state_24236__$1;(statearr_24245_24266[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24237 === 6))
{var state_24236__$1 = state_24236;var statearr_24247_24267 = state_24236__$1;(statearr_24247_24267[2] = null);
(statearr_24247_24267[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24237 === 7))
{var inst_24231 = (state_24236[2]);var state_24236__$1 = state_24236;var statearr_24248_24268 = state_24236__$1;(statearr_24248_24268[2] = inst_24231);
(statearr_24248_24268[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24237 === 8))
{var inst_24213 = (state_24236[7]);var tmp24246 = inst_24213;var inst_24213__$1 = tmp24246;var state_24236__$1 = (function (){var statearr_24249 = state_24236;(statearr_24249[7] = inst_24213__$1);
return statearr_24249;
})();var statearr_24250_24269 = state_24236__$1;(statearr_24250_24269[2] = null);
(statearr_24250_24269[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24237 === 9))
{var inst_24216 = (state_24236[9]);var state_24236__$1 = state_24236;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24236__$1,11,out,inst_24216);
} else
{if((state_val_24237 === 10))
{var inst_24228 = (state_24236[2]);var state_24236__$1 = state_24236;var statearr_24251_24270 = state_24236__$1;(statearr_24251_24270[2] = inst_24228);
(statearr_24251_24270[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24237 === 11))
{var inst_24216 = (state_24236[9]);var inst_24225 = (state_24236[2]);var inst_24213 = inst_24216;var state_24236__$1 = (function (){var statearr_24252 = state_24236;(statearr_24252[7] = inst_24213);
(statearr_24252[10] = inst_24225);
return statearr_24252;
})();var statearr_24253_24271 = state_24236__$1;(statearr_24253_24271[2] = null);
(statearr_24253_24271[1] = 2);
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
});return ((function (switch__10729__auto__){
return (function() {
var state_machine__10730__auto__ = null;
var state_machine__10730__auto____0 = (function (){var statearr_24257 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_24257[0] = state_machine__10730__auto__);
(statearr_24257[1] = 1);
return statearr_24257;
});
var state_machine__10730__auto____1 = (function (state_24236){while(true){
var ret_value__10731__auto__ = (function (){try{while(true){
var result__10732__auto__ = switch__10729__auto__.call(null,state_24236);if(cljs.core.keyword_identical_QMARK_.call(null,result__10732__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10732__auto__;
}
break;
}
}catch (e24258){if((e24258 instanceof Object))
{var ex__10733__auto__ = e24258;var statearr_24259_24272 = state_24236;(statearr_24259_24272[5] = ex__10733__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24236);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24258;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10731__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24273 = state_24236;
state_24236 = G__24273;
continue;
}
} else
{return ret_value__10731__auto__;
}
break;
}
});
state_machine__10730__auto__ = function(state_24236){
switch(arguments.length){
case 0:
return state_machine__10730__auto____0.call(this);
case 1:
return state_machine__10730__auto____1.call(this,state_24236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10730__auto____0;
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10730__auto____1;
return state_machine__10730__auto__;
})()
;})(switch__10729__auto__))
})();var state__10795__auto__ = (function (){var statearr_24260 = f__10794__auto__.call(null);(statearr_24260[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10793__auto___24261);
return statearr_24260;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10795__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10793__auto___24408 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10794__auto__ = (function (){var switch__10729__auto__ = (function (state_24378){var state_val_24379 = (state_24378[1]);if((state_val_24379 === 1))
{var inst_24341 = (new Array(n));var inst_24342 = inst_24341;var inst_24343 = 0;var state_24378__$1 = (function (){var statearr_24380 = state_24378;(statearr_24380[7] = inst_24342);
(statearr_24380[8] = inst_24343);
return statearr_24380;
})();var statearr_24381_24409 = state_24378__$1;(statearr_24381_24409[2] = null);
(statearr_24381_24409[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24379 === 2))
{var state_24378__$1 = state_24378;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24378__$1,4,ch);
} else
{if((state_val_24379 === 3))
{var inst_24376 = (state_24378[2]);var state_24378__$1 = state_24378;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24378__$1,inst_24376);
} else
{if((state_val_24379 === 4))
{var inst_24346 = (state_24378[9]);var inst_24346__$1 = (state_24378[2]);var inst_24347 = (inst_24346__$1 == null);var inst_24348 = cljs.core.not.call(null,inst_24347);var state_24378__$1 = (function (){var statearr_24382 = state_24378;(statearr_24382[9] = inst_24346__$1);
return statearr_24382;
})();if(inst_24348)
{var statearr_24383_24410 = state_24378__$1;(statearr_24383_24410[1] = 5);
} else
{var statearr_24384_24411 = state_24378__$1;(statearr_24384_24411[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24379 === 5))
{var inst_24342 = (state_24378[7]);var inst_24343 = (state_24378[8]);var inst_24351 = (state_24378[10]);var inst_24346 = (state_24378[9]);var inst_24350 = (inst_24342[inst_24343] = inst_24346);var inst_24351__$1 = (inst_24343 + 1);var inst_24352 = (inst_24351__$1 < n);var state_24378__$1 = (function (){var statearr_24385 = state_24378;(statearr_24385[10] = inst_24351__$1);
(statearr_24385[11] = inst_24350);
return statearr_24385;
})();if(cljs.core.truth_(inst_24352))
{var statearr_24386_24412 = state_24378__$1;(statearr_24386_24412[1] = 8);
} else
{var statearr_24387_24413 = state_24378__$1;(statearr_24387_24413[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24379 === 6))
{var inst_24343 = (state_24378[8]);var inst_24364 = (inst_24343 > 0);var state_24378__$1 = state_24378;if(cljs.core.truth_(inst_24364))
{var statearr_24389_24414 = state_24378__$1;(statearr_24389_24414[1] = 12);
} else
{var statearr_24390_24415 = state_24378__$1;(statearr_24390_24415[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24379 === 7))
{var inst_24374 = (state_24378[2]);var state_24378__$1 = state_24378;var statearr_24391_24416 = state_24378__$1;(statearr_24391_24416[2] = inst_24374);
(statearr_24391_24416[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24379 === 8))
{var inst_24342 = (state_24378[7]);var inst_24351 = (state_24378[10]);var tmp24388 = inst_24342;var inst_24342__$1 = tmp24388;var inst_24343 = inst_24351;var state_24378__$1 = (function (){var statearr_24392 = state_24378;(statearr_24392[7] = inst_24342__$1);
(statearr_24392[8] = inst_24343);
return statearr_24392;
})();var statearr_24393_24417 = state_24378__$1;(statearr_24393_24417[2] = null);
(statearr_24393_24417[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24379 === 9))
{var inst_24342 = (state_24378[7]);var inst_24356 = cljs.core.vec.call(null,inst_24342);var state_24378__$1 = state_24378;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24378__$1,11,out,inst_24356);
} else
{if((state_val_24379 === 10))
{var inst_24362 = (state_24378[2]);var state_24378__$1 = state_24378;var statearr_24394_24418 = state_24378__$1;(statearr_24394_24418[2] = inst_24362);
(statearr_24394_24418[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24379 === 11))
{var inst_24358 = (state_24378[2]);var inst_24359 = (new Array(n));var inst_24342 = inst_24359;var inst_24343 = 0;var state_24378__$1 = (function (){var statearr_24395 = state_24378;(statearr_24395[7] = inst_24342);
(statearr_24395[8] = inst_24343);
(statearr_24395[12] = inst_24358);
return statearr_24395;
})();var statearr_24396_24419 = state_24378__$1;(statearr_24396_24419[2] = null);
(statearr_24396_24419[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24379 === 12))
{var inst_24342 = (state_24378[7]);var inst_24366 = cljs.core.vec.call(null,inst_24342);var state_24378__$1 = state_24378;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24378__$1,15,out,inst_24366);
} else
{if((state_val_24379 === 13))
{var state_24378__$1 = state_24378;var statearr_24397_24420 = state_24378__$1;(statearr_24397_24420[2] = null);
(statearr_24397_24420[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24379 === 14))
{var inst_24371 = (state_24378[2]);var inst_24372 = cljs.core.async.close_BANG_.call(null,out);var state_24378__$1 = (function (){var statearr_24398 = state_24378;(statearr_24398[13] = inst_24371);
return statearr_24398;
})();var statearr_24399_24421 = state_24378__$1;(statearr_24399_24421[2] = inst_24372);
(statearr_24399_24421[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24379 === 15))
{var inst_24368 = (state_24378[2]);var state_24378__$1 = state_24378;var statearr_24400_24422 = state_24378__$1;(statearr_24400_24422[2] = inst_24368);
(statearr_24400_24422[1] = 14);
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
});return ((function (switch__10729__auto__){
return (function() {
var state_machine__10730__auto__ = null;
var state_machine__10730__auto____0 = (function (){var statearr_24404 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24404[0] = state_machine__10730__auto__);
(statearr_24404[1] = 1);
return statearr_24404;
});
var state_machine__10730__auto____1 = (function (state_24378){while(true){
var ret_value__10731__auto__ = (function (){try{while(true){
var result__10732__auto__ = switch__10729__auto__.call(null,state_24378);if(cljs.core.keyword_identical_QMARK_.call(null,result__10732__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10732__auto__;
}
break;
}
}catch (e24405){if((e24405 instanceof Object))
{var ex__10733__auto__ = e24405;var statearr_24406_24423 = state_24378;(statearr_24406_24423[5] = ex__10733__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24378);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24405;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10731__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24424 = state_24378;
state_24378 = G__24424;
continue;
}
} else
{return ret_value__10731__auto__;
}
break;
}
});
state_machine__10730__auto__ = function(state_24378){
switch(arguments.length){
case 0:
return state_machine__10730__auto____0.call(this);
case 1:
return state_machine__10730__auto____1.call(this,state_24378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10730__auto____0;
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10730__auto____1;
return state_machine__10730__auto__;
})()
;})(switch__10729__auto__))
})();var state__10795__auto__ = (function (){var statearr_24407 = f__10794__auto__.call(null);(statearr_24407[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10793__auto___24408);
return statearr_24407;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10795__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10793__auto___24567 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10794__auto__ = (function (){var switch__10729__auto__ = (function (state_24537){var state_val_24538 = (state_24537[1]);if((state_val_24538 === 1))
{var inst_24496 = [];var inst_24497 = inst_24496;var inst_24498 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_24537__$1 = (function (){var statearr_24539 = state_24537;(statearr_24539[7] = inst_24498);
(statearr_24539[8] = inst_24497);
return statearr_24539;
})();var statearr_24540_24568 = state_24537__$1;(statearr_24540_24568[2] = null);
(statearr_24540_24568[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24538 === 2))
{var state_24537__$1 = state_24537;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24537__$1,4,ch);
} else
{if((state_val_24538 === 3))
{var inst_24535 = (state_24537[2]);var state_24537__$1 = state_24537;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24537__$1,inst_24535);
} else
{if((state_val_24538 === 4))
{var inst_24501 = (state_24537[9]);var inst_24501__$1 = (state_24537[2]);var inst_24502 = (inst_24501__$1 == null);var inst_24503 = cljs.core.not.call(null,inst_24502);var state_24537__$1 = (function (){var statearr_24541 = state_24537;(statearr_24541[9] = inst_24501__$1);
return statearr_24541;
})();if(inst_24503)
{var statearr_24542_24569 = state_24537__$1;(statearr_24542_24569[1] = 5);
} else
{var statearr_24543_24570 = state_24537__$1;(statearr_24543_24570[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24538 === 5))
{var inst_24498 = (state_24537[7]);var inst_24505 = (state_24537[10]);var inst_24501 = (state_24537[9]);var inst_24505__$1 = f.call(null,inst_24501);var inst_24506 = cljs.core._EQ_.call(null,inst_24505__$1,inst_24498);var inst_24507 = cljs.core.keyword_identical_QMARK_.call(null,inst_24498,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_24508 = (inst_24506) || (inst_24507);var state_24537__$1 = (function (){var statearr_24544 = state_24537;(statearr_24544[10] = inst_24505__$1);
return statearr_24544;
})();if(cljs.core.truth_(inst_24508))
{var statearr_24545_24571 = state_24537__$1;(statearr_24545_24571[1] = 8);
} else
{var statearr_24546_24572 = state_24537__$1;(statearr_24546_24572[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24538 === 6))
{var inst_24497 = (state_24537[8]);var inst_24522 = inst_24497.length;var inst_24523 = (inst_24522 > 0);var state_24537__$1 = state_24537;if(cljs.core.truth_(inst_24523))
{var statearr_24548_24573 = state_24537__$1;(statearr_24548_24573[1] = 12);
} else
{var statearr_24549_24574 = state_24537__$1;(statearr_24549_24574[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24538 === 7))
{var inst_24533 = (state_24537[2]);var state_24537__$1 = state_24537;var statearr_24550_24575 = state_24537__$1;(statearr_24550_24575[2] = inst_24533);
(statearr_24550_24575[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24538 === 8))
{var inst_24497 = (state_24537[8]);var inst_24505 = (state_24537[10]);var inst_24501 = (state_24537[9]);var inst_24510 = inst_24497.push(inst_24501);var tmp24547 = inst_24497;var inst_24497__$1 = tmp24547;var inst_24498 = inst_24505;var state_24537__$1 = (function (){var statearr_24551 = state_24537;(statearr_24551[7] = inst_24498);
(statearr_24551[8] = inst_24497__$1);
(statearr_24551[11] = inst_24510);
return statearr_24551;
})();var statearr_24552_24576 = state_24537__$1;(statearr_24552_24576[2] = null);
(statearr_24552_24576[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24538 === 9))
{var inst_24497 = (state_24537[8]);var inst_24513 = cljs.core.vec.call(null,inst_24497);var state_24537__$1 = state_24537;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24537__$1,11,out,inst_24513);
} else
{if((state_val_24538 === 10))
{var inst_24520 = (state_24537[2]);var state_24537__$1 = state_24537;var statearr_24553_24577 = state_24537__$1;(statearr_24553_24577[2] = inst_24520);
(statearr_24553_24577[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24538 === 11))
{var inst_24505 = (state_24537[10]);var inst_24501 = (state_24537[9]);var inst_24515 = (state_24537[2]);var inst_24516 = [];var inst_24517 = inst_24516.push(inst_24501);var inst_24497 = inst_24516;var inst_24498 = inst_24505;var state_24537__$1 = (function (){var statearr_24554 = state_24537;(statearr_24554[7] = inst_24498);
(statearr_24554[8] = inst_24497);
(statearr_24554[12] = inst_24515);
(statearr_24554[13] = inst_24517);
return statearr_24554;
})();var statearr_24555_24578 = state_24537__$1;(statearr_24555_24578[2] = null);
(statearr_24555_24578[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24538 === 12))
{var inst_24497 = (state_24537[8]);var inst_24525 = cljs.core.vec.call(null,inst_24497);var state_24537__$1 = state_24537;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24537__$1,15,out,inst_24525);
} else
{if((state_val_24538 === 13))
{var state_24537__$1 = state_24537;var statearr_24556_24579 = state_24537__$1;(statearr_24556_24579[2] = null);
(statearr_24556_24579[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24538 === 14))
{var inst_24530 = (state_24537[2]);var inst_24531 = cljs.core.async.close_BANG_.call(null,out);var state_24537__$1 = (function (){var statearr_24557 = state_24537;(statearr_24557[14] = inst_24530);
return statearr_24557;
})();var statearr_24558_24580 = state_24537__$1;(statearr_24558_24580[2] = inst_24531);
(statearr_24558_24580[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24538 === 15))
{var inst_24527 = (state_24537[2]);var state_24537__$1 = state_24537;var statearr_24559_24581 = state_24537__$1;(statearr_24559_24581[2] = inst_24527);
(statearr_24559_24581[1] = 14);
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
});return ((function (switch__10729__auto__){
return (function() {
var state_machine__10730__auto__ = null;
var state_machine__10730__auto____0 = (function (){var statearr_24563 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24563[0] = state_machine__10730__auto__);
(statearr_24563[1] = 1);
return statearr_24563;
});
var state_machine__10730__auto____1 = (function (state_24537){while(true){
var ret_value__10731__auto__ = (function (){try{while(true){
var result__10732__auto__ = switch__10729__auto__.call(null,state_24537);if(cljs.core.keyword_identical_QMARK_.call(null,result__10732__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10732__auto__;
}
break;
}
}catch (e24564){if((e24564 instanceof Object))
{var ex__10733__auto__ = e24564;var statearr_24565_24582 = state_24537;(statearr_24565_24582[5] = ex__10733__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24537);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24564;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10731__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24583 = state_24537;
state_24537 = G__24583;
continue;
}
} else
{return ret_value__10731__auto__;
}
break;
}
});
state_machine__10730__auto__ = function(state_24537){
switch(arguments.length){
case 0:
return state_machine__10730__auto____0.call(this);
case 1:
return state_machine__10730__auto____1.call(this,state_24537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10730__auto____0;
state_machine__10730__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10730__auto____1;
return state_machine__10730__auto__;
})()
;})(switch__10729__auto__))
})();var state__10795__auto__ = (function (){var statearr_24566 = f__10794__auto__.call(null);(statearr_24566[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10793__auto___24567);
return statearr_24566;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10795__auto__);
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

//# sourceMappingURL=async.js.map