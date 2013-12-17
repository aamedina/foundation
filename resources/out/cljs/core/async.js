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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t336213 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t336213 = (function (f,fn_handler,meta336214){
this.f = f;
this.fn_handler = fn_handler;
this.meta336214 = meta336214;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t336213.cljs$lang$type = true;
cljs.core.async.t336213.cljs$lang$ctorStr = "cljs.core.async/t336213";
cljs.core.async.t336213.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"cljs.core.async/t336213");
});
cljs.core.async.t336213.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t336213.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t336213.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t336213.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_336215){var self__ = this;
var _336215__$1 = this;return self__.meta336214;
});
cljs.core.async.t336213.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_336215,meta336214__$1){var self__ = this;
var _336215__$1 = this;return (new cljs.core.async.t336213(self__.f,self__.fn_handler,meta336214__$1));
});
cljs.core.async.__GT_t336213 = (function __GT_t336213(f__$1,fn_handler__$1,meta336214){return (new cljs.core.async.t336213(f__$1,fn_handler__$1,meta336214));
});
}
return (new cljs.core.async.t336213(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__336217 = buff;if(G__336217)
{var bit__14449__auto__ = null;if(cljs.core.truth_((function (){var or__13823__auto__ = bit__14449__auto__;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return G__336217.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__336217.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__336217);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__336217);
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
{var val_336218 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_336218);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_336218);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__13811__auto__ = ret;if(cljs.core.truth_(and__13811__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__13811__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__14646__auto___336219 = n;var x_336220 = 0;while(true){
if((x_336220 < n__14646__auto___336219))
{(a[x_336220] = 0);
{
var G__336221 = (x_336220 + 1);
x_336220 = G__336221;
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
var G__336222 = (i + 1);
i = G__336222;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t336226 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t336226 = (function (flag,alt_flag,meta336227){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta336227 = meta336227;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t336226.cljs$lang$type = true;
cljs.core.async.t336226.cljs$lang$ctorStr = "cljs.core.async/t336226";
cljs.core.async.t336226.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"cljs.core.async/t336226");
});
cljs.core.async.t336226.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t336226.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t336226.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t336226.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_336228){var self__ = this;
var _336228__$1 = this;return self__.meta336227;
});
cljs.core.async.t336226.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_336228,meta336227__$1){var self__ = this;
var _336228__$1 = this;return (new cljs.core.async.t336226(self__.flag,self__.alt_flag,meta336227__$1));
});
cljs.core.async.__GT_t336226 = (function __GT_t336226(flag__$1,alt_flag__$1,meta336227){return (new cljs.core.async.t336226(flag__$1,alt_flag__$1,meta336227));
});
}
return (new cljs.core.async.t336226(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t336232 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t336232 = (function (cb,flag,alt_handler,meta336233){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta336233 = meta336233;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t336232.cljs$lang$type = true;
cljs.core.async.t336232.cljs$lang$ctorStr = "cljs.core.async/t336232";
cljs.core.async.t336232.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"cljs.core.async/t336232");
});
cljs.core.async.t336232.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t336232.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t336232.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t336232.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_336234){var self__ = this;
var _336234__$1 = this;return self__.meta336233;
});
cljs.core.async.t336232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_336234,meta336233__$1){var self__ = this;
var _336234__$1 = this;return (new cljs.core.async.t336232(self__.cb,self__.flag,self__.alt_handler,meta336233__$1));
});
cljs.core.async.__GT_t336232 = (function __GT_t336232(cb__$1,flag__$1,alt_handler__$1,meta336233){return (new cljs.core.async.t336232(cb__$1,flag__$1,alt_handler__$1,meta336233));
});
}
return (new cljs.core.async.t336232(cb,flag,alt_handler,null));
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
return (function (p1__336235_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__336235_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__13823__auto__ = wport;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__336236 = (i + 1);
i = G__336236;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__13823__auto__ = ret;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__13811__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__13811__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__13811__auto__;
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
var alts_BANG___delegate = function (ports,p__336237){var map__336239 = p__336237;var map__336239__$1 = ((cljs.core.seq_QMARK_.call(null,map__336239))?cljs.core.apply.call(null,cljs.core.hash_map,map__336239):map__336239);var opts = map__336239__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__336237 = null;if (arguments.length > 1) {
  p__336237 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__336237);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__336240){
var ports = cljs.core.first(arglist__336240);
var p__336237 = cljs.core.rest(arglist__336240);
return alts_BANG___delegate(ports,p__336237);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t336248 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t336248 = (function (ch,f,map_LT_,meta336249){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta336249 = meta336249;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t336248.cljs$lang$type = true;
cljs.core.async.t336248.cljs$lang$ctorStr = "cljs.core.async/t336248";
cljs.core.async.t336248.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"cljs.core.async/t336248");
});
cljs.core.async.t336248.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t336248.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t336248.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t336248.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t336251 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t336251 = (function (fn1,_,meta336249,ch,f,map_LT_,meta336252){
this.fn1 = fn1;
this._ = _;
this.meta336249 = meta336249;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta336252 = meta336252;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t336251.cljs$lang$type = true;
cljs.core.async.t336251.cljs$lang$ctorStr = "cljs.core.async/t336251";
cljs.core.async.t336251.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"cljs.core.async/t336251");
});
cljs.core.async.t336251.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t336251.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t336251.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t336251.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__336241_SHARP_){return f1.call(null,(((p1__336241_SHARP_ == null))?null:self__.f.call(null,p1__336241_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t336251.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_336253){var self__ = this;
var _336253__$1 = this;return self__.meta336252;
});
cljs.core.async.t336251.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_336253,meta336252__$1){var self__ = this;
var _336253__$1 = this;return (new cljs.core.async.t336251(self__.fn1,self__._,self__.meta336249,self__.ch,self__.f,self__.map_LT_,meta336252__$1));
});
cljs.core.async.__GT_t336251 = (function __GT_t336251(fn1__$1,___$2,meta336249__$1,ch__$2,f__$2,map_LT___$2,meta336252){return (new cljs.core.async.t336251(fn1__$1,___$2,meta336249__$1,ch__$2,f__$2,map_LT___$2,meta336252));
});
}
return (new cljs.core.async.t336251(fn1,___$1,self__.meta336249,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__13811__auto__ = ret;if(cljs.core.truth_(and__13811__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__13811__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t336248.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t336248.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t336248.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_336250){var self__ = this;
var _336250__$1 = this;return self__.meta336249;
});
cljs.core.async.t336248.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_336250,meta336249__$1){var self__ = this;
var _336250__$1 = this;return (new cljs.core.async.t336248(self__.ch,self__.f,self__.map_LT_,meta336249__$1));
});
cljs.core.async.__GT_t336248 = (function __GT_t336248(ch__$1,f__$1,map_LT___$1,meta336249){return (new cljs.core.async.t336248(ch__$1,f__$1,map_LT___$1,meta336249));
});
}
return (new cljs.core.async.t336248(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t336257 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t336257 = (function (ch,f,map_GT_,meta336258){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta336258 = meta336258;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t336257.cljs$lang$type = true;
cljs.core.async.t336257.cljs$lang$ctorStr = "cljs.core.async/t336257";
cljs.core.async.t336257.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"cljs.core.async/t336257");
});
cljs.core.async.t336257.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t336257.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t336257.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t336257.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t336257.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t336257.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t336257.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_336259){var self__ = this;
var _336259__$1 = this;return self__.meta336258;
});
cljs.core.async.t336257.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_336259,meta336258__$1){var self__ = this;
var _336259__$1 = this;return (new cljs.core.async.t336257(self__.ch,self__.f,self__.map_GT_,meta336258__$1));
});
cljs.core.async.__GT_t336257 = (function __GT_t336257(ch__$1,f__$1,map_GT___$1,meta336258){return (new cljs.core.async.t336257(ch__$1,f__$1,map_GT___$1,meta336258));
});
}
return (new cljs.core.async.t336257(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t336263 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t336263 = (function (ch,p,filter_GT_,meta336264){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta336264 = meta336264;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t336263.cljs$lang$type = true;
cljs.core.async.t336263.cljs$lang$ctorStr = "cljs.core.async/t336263";
cljs.core.async.t336263.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"cljs.core.async/t336263");
});
cljs.core.async.t336263.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t336263.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t336263.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t336263.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t336263.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t336263.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t336263.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_336265){var self__ = this;
var _336265__$1 = this;return self__.meta336264;
});
cljs.core.async.t336263.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_336265,meta336264__$1){var self__ = this;
var _336265__$1 = this;return (new cljs.core.async.t336263(self__.ch,self__.p,self__.filter_GT_,meta336264__$1));
});
cljs.core.async.__GT_t336263 = (function __GT_t336263(ch__$1,p__$1,filter_GT___$1,meta336264){return (new cljs.core.async.t336263(ch__$1,p__$1,filter_GT___$1,meta336264));
});
}
return (new cljs.core.async.t336263(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18051__auto___336348 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_336327){var state_val_336328 = (state_336327[1]);if((state_val_336328 === 1))
{var state_336327__$1 = state_336327;var statearr_336329_336349 = state_336327__$1;(statearr_336329_336349[2] = null);
(statearr_336329_336349[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_336328 === 2))
{var state_336327__$1 = state_336327;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_336327__$1,4,ch);
} else
{if((state_val_336328 === 3))
{var inst_336325 = (state_336327[2]);var state_336327__$1 = state_336327;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_336327__$1,inst_336325);
} else
{if((state_val_336328 === 4))
{var inst_336309 = (state_336327[7]);var inst_336309__$1 = (state_336327[2]);var inst_336310 = (inst_336309__$1 == null);var state_336327__$1 = (function (){var statearr_336330 = state_336327;(statearr_336330[7] = inst_336309__$1);
return statearr_336330;
})();if(cljs.core.truth_(inst_336310))
{var statearr_336331_336350 = state_336327__$1;(statearr_336331_336350[1] = 5);
} else
{var statearr_336332_336351 = state_336327__$1;(statearr_336332_336351[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_336328 === 5))
{var inst_336312 = cljs.core.async.close_BANG_.call(null,out);var state_336327__$1 = state_336327;var statearr_336333_336352 = state_336327__$1;(statearr_336333_336352[2] = inst_336312);
(statearr_336333_336352[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_336328 === 6))
{var inst_336309 = (state_336327[7]);var inst_336314 = p.call(null,inst_336309);var state_336327__$1 = state_336327;if(cljs.core.truth_(inst_336314))
{var statearr_336334_336353 = state_336327__$1;(statearr_336334_336353[1] = 8);
} else
{var statearr_336335_336354 = state_336327__$1;(statearr_336335_336354[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_336328 === 7))
{var inst_336323 = (state_336327[2]);var state_336327__$1 = state_336327;var statearr_336336_336355 = state_336327__$1;(statearr_336336_336355[2] = inst_336323);
(statearr_336336_336355[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_336328 === 8))
{var inst_336309 = (state_336327[7]);var state_336327__$1 = state_336327;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_336327__$1,11,out,inst_336309);
} else
{if((state_val_336328 === 9))
{var state_336327__$1 = state_336327;var statearr_336337_336356 = state_336327__$1;(statearr_336337_336356[2] = null);
(statearr_336337_336356[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_336328 === 10))
{var inst_336320 = (state_336327[2]);var state_336327__$1 = (function (){var statearr_336338 = state_336327;(statearr_336338[8] = inst_336320);
return statearr_336338;
})();var statearr_336339_336357 = state_336327__$1;(statearr_336339_336357[2] = null);
(statearr_336339_336357[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_336328 === 11))
{var inst_336317 = (state_336327[2]);var state_336327__$1 = state_336327;var statearr_336340_336358 = state_336327__$1;(statearr_336340_336358[2] = inst_336317);
(statearr_336340_336358[1] = 10);
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
});return ((function (switch__17981__auto__){
return (function() {
var state_machine__17982__auto__ = null;
var state_machine__17982__auto____0 = (function (){var statearr_336344 = (new Array(9));(statearr_336344[0] = state_machine__17982__auto__);
(statearr_336344[1] = 1);
return statearr_336344;
});
var state_machine__17982__auto____1 = (function (state_336327){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_336327);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e336345){if((e336345 instanceof Object))
{var ex__17985__auto__ = e336345;var statearr_336346_336359 = state_336327;(statearr_336346_336359[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_336327);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e336345;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__336360 = state_336327;
state_336327 = G__336360;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_336327){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_336327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_336347 = f__18052__auto__.call(null);(statearr_336347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___336348);
return statearr_336347;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18053__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__18051__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_336512){var state_val_336513 = (state_336512[1]);if((state_val_336513 === 1))
{var state_336512__$1 = state_336512;var statearr_336514_336551 = state_336512__$1;(statearr_336514_336551[2] = null);
(statearr_336514_336551[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_336513 === 2))
{var state_336512__$1 = state_336512;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_336512__$1,4,in$);
} else
{if((state_val_336513 === 3))
{var inst_336510 = (state_336512[2]);var state_336512__$1 = state_336512;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_336512__$1,inst_336510);
} else
{if((state_val_336513 === 4))
{var inst_336458 = (state_336512[7]);var inst_336458__$1 = (state_336512[2]);var inst_336459 = (inst_336458__$1 == null);var state_336512__$1 = (function (){var statearr_336515 = state_336512;(statearr_336515[7] = inst_336458__$1);
return statearr_336515;
})();if(cljs.core.truth_(inst_336459))
{var statearr_336516_336552 = state_336512__$1;(statearr_336516_336552[1] = 5);
} else
{var statearr_336517_336553 = state_336512__$1;(statearr_336517_336553[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_336513 === 5))
{var inst_336461 = cljs.core.async.close_BANG_.call(null,out);var state_336512__$1 = state_336512;var statearr_336518_336554 = state_336512__$1;(statearr_336518_336554[2] = inst_336461);
(statearr_336518_336554[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_336513 === 6))
{var inst_336458 = (state_336512[7]);var inst_336463 = f.call(null,inst_336458);var inst_336468 = cljs.core.seq.call(null,inst_336463);var inst_336469 = inst_336468;var inst_336470 = null;var inst_336471 = 0;var inst_336472 = 0;var state_336512__$1 = (function (){var statearr_336519 = state_336512;(statearr_336519[8] = inst_336471);
(statearr_336519[9] = inst_336469);
(statearr_336519[10] = inst_336470);
(statearr_336519[11] = inst_336472);
return statearr_336519;
})();var statearr_336520_336555 = state_336512__$1;(statearr_336520_336555[2] = null);
(statearr_336520_336555[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_336513 === 7))
{var inst_336508 = (state_336512[2]);var state_336512__$1 = state_336512;var statearr_336521_336556 = state_336512__$1;(statearr_336521_336556[2] = inst_336508);
(statearr_336521_336556[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_336513 === 8))
{var inst_336471 = (state_336512[8]);var inst_336472 = (state_336512[11]);var inst_336474 = (inst_336472 < inst_336471);var inst_336475 = inst_336474;var state_336512__$1 = state_336512;if(cljs.core.truth_(inst_336475))
{var statearr_336522_336557 = state_336512__$1;(statearr_336522_336557[1] = 10);
} else
{var statearr_336523_336558 = state_336512__$1;(statearr_336523_336558[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_336513 === 9))
{var inst_336505 = (state_336512[2]);var state_336512__$1 = (function (){var statearr_336524 = state_336512;(statearr_336524[12] = inst_336505);
return statearr_336524;
})();var statearr_336525_336559 = state_336512__$1;(statearr_336525_336559[2] = null);
(statearr_336525_336559[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_336513 === 10))
{var inst_336470 = (state_336512[10]);var inst_336472 = (state_336512[11]);var inst_336477 = cljs.core._nth.call(null,inst_336470,inst_336472);var state_336512__$1 = state_336512;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_336512__$1,13,out,inst_336477);
} else
{if((state_val_336513 === 11))
{var inst_336469 = (state_336512[9]);var inst_336483 = (state_336512[13]);var inst_336483__$1 = cljs.core.seq.call(null,inst_336469);var state_336512__$1 = (function (){var statearr_336529 = state_336512;(statearr_336529[13] = inst_336483__$1);
return statearr_336529;
})();if(inst_336483__$1)
{var statearr_336530_336560 = state_336512__$1;(statearr_336530_336560[1] = 14);
} else
{var statearr_336531_336561 = state_336512__$1;(statearr_336531_336561[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_336513 === 12))
{var inst_336503 = (state_336512[2]);var state_336512__$1 = state_336512;var statearr_336532_336562 = state_336512__$1;(statearr_336532_336562[2] = inst_336503);
(statearr_336532_336562[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_336513 === 13))
{var inst_336471 = (state_336512[8]);var inst_336469 = (state_336512[9]);var inst_336470 = (state_336512[10]);var inst_336472 = (state_336512[11]);var inst_336479 = (state_336512[2]);var inst_336480 = (inst_336472 + 1);var tmp336526 = inst_336471;var tmp336527 = inst_336469;var tmp336528 = inst_336470;var inst_336469__$1 = tmp336527;var inst_336470__$1 = tmp336528;var inst_336471__$1 = tmp336526;var inst_336472__$1 = inst_336480;var state_336512__$1 = (function (){var statearr_336533 = state_336512;(statearr_336533[14] = inst_336479);
(statearr_336533[8] = inst_336471__$1);
(statearr_336533[9] = inst_336469__$1);
(statearr_336533[10] = inst_336470__$1);
(statearr_336533[11] = inst_336472__$1);
return statearr_336533;
})();var statearr_336534_336563 = state_336512__$1;(statearr_336534_336563[2] = null);
(statearr_336534_336563[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_336513 === 14))
{var inst_336483 = (state_336512[13]);var inst_336485 = cljs.core.chunked_seq_QMARK_.call(null,inst_336483);var state_336512__$1 = state_336512;if(inst_336485)
{var statearr_336535_336564 = state_336512__$1;(statearr_336535_336564[1] = 17);
} else
{var statearr_336536_336565 = state_336512__$1;(statearr_336536_336565[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_336513 === 15))
{var state_336512__$1 = state_336512;var statearr_336537_336566 = state_336512__$1;(statearr_336537_336566[2] = null);
(statearr_336537_336566[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_336513 === 16))
{var inst_336501 = (state_336512[2]);var state_336512__$1 = state_336512;var statearr_336538_336567 = state_336512__$1;(statearr_336538_336567[2] = inst_336501);
(statearr_336538_336567[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_336513 === 17))
{var inst_336483 = (state_336512[13]);var inst_336487 = cljs.core.chunk_first.call(null,inst_336483);var inst_336488 = cljs.core.chunk_rest.call(null,inst_336483);var inst_336489 = cljs.core.count.call(null,inst_336487);var inst_336469 = inst_336488;var inst_336470 = inst_336487;var inst_336471 = inst_336489;var inst_336472 = 0;var state_336512__$1 = (function (){var statearr_336539 = state_336512;(statearr_336539[8] = inst_336471);
(statearr_336539[9] = inst_336469);
(statearr_336539[10] = inst_336470);
(statearr_336539[11] = inst_336472);
return statearr_336539;
})();var statearr_336540_336568 = state_336512__$1;(statearr_336540_336568[2] = null);
(statearr_336540_336568[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_336513 === 18))
{var inst_336483 = (state_336512[13]);var inst_336492 = cljs.core.first.call(null,inst_336483);var state_336512__$1 = state_336512;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_336512__$1,20,out,inst_336492);
} else
{if((state_val_336513 === 19))
{var inst_336498 = (state_336512[2]);var state_336512__$1 = state_336512;var statearr_336541_336569 = state_336512__$1;(statearr_336541_336569[2] = inst_336498);
(statearr_336541_336569[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_336513 === 20))
{var inst_336483 = (state_336512[13]);var inst_336494 = (state_336512[2]);var inst_336495 = cljs.core.next.call(null,inst_336483);var inst_336469 = inst_336495;var inst_336470 = null;var inst_336471 = 0;var inst_336472 = 0;var state_336512__$1 = (function (){var statearr_336542 = state_336512;(statearr_336542[8] = inst_336471);
(statearr_336542[9] = inst_336469);
(statearr_336542[10] = inst_336470);
(statearr_336542[11] = inst_336472);
(statearr_336542[15] = inst_336494);
return statearr_336542;
})();var statearr_336543_336570 = state_336512__$1;(statearr_336543_336570[2] = null);
(statearr_336543_336570[1] = 8);
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
});return ((function (switch__17981__auto__){
return (function() {
var state_machine__17982__auto__ = null;
var state_machine__17982__auto____0 = (function (){var statearr_336547 = (new Array(16));(statearr_336547[0] = state_machine__17982__auto__);
(statearr_336547[1] = 1);
return statearr_336547;
});
var state_machine__17982__auto____1 = (function (state_336512){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_336512);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e336548){if((e336548 instanceof Object))
{var ex__17985__auto__ = e336548;var statearr_336549_336571 = state_336512;(statearr_336549_336571[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_336512);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e336548;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__336572 = state_336512;
state_336512 = G__336572;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_336512){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_336512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_336550 = f__18052__auto__.call(null);(statearr_336550[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto__);
return statearr_336550;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18053__auto__);
}));
return c__18051__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__18051__auto___336653 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_336632){var state_val_336633 = (state_336632[1]);if((state_val_336633 === 1))
{var state_336632__$1 = state_336632;var statearr_336634_336654 = state_336632__$1;(statearr_336634_336654[2] = null);
(statearr_336634_336654[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_336633 === 2))
{var state_336632__$1 = state_336632;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_336632__$1,4,from);
} else
{if((state_val_336633 === 3))
{var inst_336630 = (state_336632[2]);var state_336632__$1 = state_336632;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_336632__$1,inst_336630);
} else
{if((state_val_336633 === 4))
{var inst_336615 = (state_336632[7]);var inst_336615__$1 = (state_336632[2]);var inst_336616 = (inst_336615__$1 == null);var state_336632__$1 = (function (){var statearr_336635 = state_336632;(statearr_336635[7] = inst_336615__$1);
return statearr_336635;
})();if(cljs.core.truth_(inst_336616))
{var statearr_336636_336655 = state_336632__$1;(statearr_336636_336655[1] = 5);
} else
{var statearr_336637_336656 = state_336632__$1;(statearr_336637_336656[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_336633 === 5))
{var state_336632__$1 = state_336632;if(cljs.core.truth_(close_QMARK_))
{var statearr_336638_336657 = state_336632__$1;(statearr_336638_336657[1] = 8);
} else
{var statearr_336639_336658 = state_336632__$1;(statearr_336639_336658[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_336633 === 6))
{var inst_336615 = (state_336632[7]);var state_336632__$1 = state_336632;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_336632__$1,11,to,inst_336615);
} else
{if((state_val_336633 === 7))
{var inst_336628 = (state_336632[2]);var state_336632__$1 = state_336632;var statearr_336640_336659 = state_336632__$1;(statearr_336640_336659[2] = inst_336628);
(statearr_336640_336659[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_336633 === 8))
{var inst_336619 = cljs.core.async.close_BANG_.call(null,to);var state_336632__$1 = state_336632;var statearr_336641_336660 = state_336632__$1;(statearr_336641_336660[2] = inst_336619);
(statearr_336641_336660[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_336633 === 9))
{var state_336632__$1 = state_336632;var statearr_336642_336661 = state_336632__$1;(statearr_336642_336661[2] = null);
(statearr_336642_336661[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_336633 === 10))
{var inst_336622 = (state_336632[2]);var state_336632__$1 = state_336632;var statearr_336643_336662 = state_336632__$1;(statearr_336643_336662[2] = inst_336622);
(statearr_336643_336662[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_336633 === 11))
{var inst_336625 = (state_336632[2]);var state_336632__$1 = (function (){var statearr_336644 = state_336632;(statearr_336644[8] = inst_336625);
return statearr_336644;
})();var statearr_336645_336663 = state_336632__$1;(statearr_336645_336663[2] = null);
(statearr_336645_336663[1] = 2);
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
});return ((function (switch__17981__auto__){
return (function() {
var state_machine__17982__auto__ = null;
var state_machine__17982__auto____0 = (function (){var statearr_336649 = (new Array(9));(statearr_336649[0] = state_machine__17982__auto__);
(statearr_336649[1] = 1);
return statearr_336649;
});
var state_machine__17982__auto____1 = (function (state_336632){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_336632);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e336650){if((e336650 instanceof Object))
{var ex__17985__auto__ = e336650;var statearr_336651_336664 = state_336632;(statearr_336651_336664[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_336632);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e336650;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__336665 = state_336632;
state_336632 = G__336665;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_336632){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_336632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_336652 = f__18052__auto__.call(null);(statearr_336652[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___336653);
return statearr_336652;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18053__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__18051__auto___336752 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_336730){var state_val_336731 = (state_336730[1]);if((state_val_336731 === 1))
{var state_336730__$1 = state_336730;var statearr_336732_336753 = state_336730__$1;(statearr_336732_336753[2] = null);
(statearr_336732_336753[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_336731 === 2))
{var state_336730__$1 = state_336730;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_336730__$1,4,ch);
} else
{if((state_val_336731 === 3))
{var inst_336728 = (state_336730[2]);var state_336730__$1 = state_336730;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_336730__$1,inst_336728);
} else
{if((state_val_336731 === 4))
{var inst_336711 = (state_336730[7]);var inst_336711__$1 = (state_336730[2]);var inst_336712 = (inst_336711__$1 == null);var state_336730__$1 = (function (){var statearr_336733 = state_336730;(statearr_336733[7] = inst_336711__$1);
return statearr_336733;
})();if(cljs.core.truth_(inst_336712))
{var statearr_336734_336754 = state_336730__$1;(statearr_336734_336754[1] = 5);
} else
{var statearr_336735_336755 = state_336730__$1;(statearr_336735_336755[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_336731 === 5))
{var inst_336714 = cljs.core.async.close_BANG_.call(null,tc);var inst_336715 = cljs.core.async.close_BANG_.call(null,fc);var state_336730__$1 = (function (){var statearr_336736 = state_336730;(statearr_336736[8] = inst_336714);
return statearr_336736;
})();var statearr_336737_336756 = state_336730__$1;(statearr_336737_336756[2] = inst_336715);
(statearr_336737_336756[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_336731 === 6))
{var inst_336711 = (state_336730[7]);var inst_336717 = p.call(null,inst_336711);var state_336730__$1 = state_336730;if(cljs.core.truth_(inst_336717))
{var statearr_336738_336757 = state_336730__$1;(statearr_336738_336757[1] = 9);
} else
{var statearr_336739_336758 = state_336730__$1;(statearr_336739_336758[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_336731 === 7))
{var inst_336726 = (state_336730[2]);var state_336730__$1 = state_336730;var statearr_336740_336759 = state_336730__$1;(statearr_336740_336759[2] = inst_336726);
(statearr_336740_336759[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_336731 === 8))
{var inst_336723 = (state_336730[2]);var state_336730__$1 = (function (){var statearr_336741 = state_336730;(statearr_336741[9] = inst_336723);
return statearr_336741;
})();var statearr_336742_336760 = state_336730__$1;(statearr_336742_336760[2] = null);
(statearr_336742_336760[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_336731 === 9))
{var state_336730__$1 = state_336730;var statearr_336743_336761 = state_336730__$1;(statearr_336743_336761[2] = tc);
(statearr_336743_336761[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_336731 === 10))
{var state_336730__$1 = state_336730;var statearr_336744_336762 = state_336730__$1;(statearr_336744_336762[2] = fc);
(statearr_336744_336762[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_336731 === 11))
{var inst_336711 = (state_336730[7]);var inst_336721 = (state_336730[2]);var state_336730__$1 = state_336730;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_336730__$1,8,inst_336721,inst_336711);
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
});return ((function (switch__17981__auto__){
return (function() {
var state_machine__17982__auto__ = null;
var state_machine__17982__auto____0 = (function (){var statearr_336748 = (new Array(10));(statearr_336748[0] = state_machine__17982__auto__);
(statearr_336748[1] = 1);
return statearr_336748;
});
var state_machine__17982__auto____1 = (function (state_336730){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_336730);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e336749){if((e336749 instanceof Object))
{var ex__17985__auto__ = e336749;var statearr_336750_336763 = state_336730;(statearr_336750_336763[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_336730);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e336749;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__336764 = state_336730;
state_336730 = G__336764;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_336730){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_336730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_336751 = f__18052__auto__.call(null);(statearr_336751[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___336752);
return statearr_336751;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18053__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__18051__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_336811){var state_val_336812 = (state_336811[1]);if((state_val_336812 === 7))
{var inst_336807 = (state_336811[2]);var state_336811__$1 = state_336811;var statearr_336813_336829 = state_336811__$1;(statearr_336813_336829[2] = inst_336807);
(statearr_336813_336829[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_336812 === 6))
{var inst_336797 = (state_336811[7]);var inst_336800 = (state_336811[8]);var inst_336804 = f.call(null,inst_336797,inst_336800);var inst_336797__$1 = inst_336804;var state_336811__$1 = (function (){var statearr_336814 = state_336811;(statearr_336814[7] = inst_336797__$1);
return statearr_336814;
})();var statearr_336815_336830 = state_336811__$1;(statearr_336815_336830[2] = null);
(statearr_336815_336830[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_336812 === 5))
{var inst_336797 = (state_336811[7]);var state_336811__$1 = state_336811;var statearr_336816_336831 = state_336811__$1;(statearr_336816_336831[2] = inst_336797);
(statearr_336816_336831[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_336812 === 4))
{var inst_336800 = (state_336811[8]);var inst_336800__$1 = (state_336811[2]);var inst_336801 = (inst_336800__$1 == null);var state_336811__$1 = (function (){var statearr_336817 = state_336811;(statearr_336817[8] = inst_336800__$1);
return statearr_336817;
})();if(cljs.core.truth_(inst_336801))
{var statearr_336818_336832 = state_336811__$1;(statearr_336818_336832[1] = 5);
} else
{var statearr_336819_336833 = state_336811__$1;(statearr_336819_336833[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_336812 === 3))
{var inst_336809 = (state_336811[2]);var state_336811__$1 = state_336811;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_336811__$1,inst_336809);
} else
{if((state_val_336812 === 2))
{var state_336811__$1 = state_336811;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_336811__$1,4,ch);
} else
{if((state_val_336812 === 1))
{var inst_336797 = init;var state_336811__$1 = (function (){var statearr_336820 = state_336811;(statearr_336820[7] = inst_336797);
return statearr_336820;
})();var statearr_336821_336834 = state_336811__$1;(statearr_336821_336834[2] = null);
(statearr_336821_336834[1] = 2);
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
});return ((function (switch__17981__auto__){
return (function() {
var state_machine__17982__auto__ = null;
var state_machine__17982__auto____0 = (function (){var statearr_336825 = (new Array(9));(statearr_336825[0] = state_machine__17982__auto__);
(statearr_336825[1] = 1);
return statearr_336825;
});
var state_machine__17982__auto____1 = (function (state_336811){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_336811);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e336826){if((e336826 instanceof Object))
{var ex__17985__auto__ = e336826;var statearr_336827_336835 = state_336811;(statearr_336827_336835[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_336811);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e336826;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__336836 = state_336811;
state_336811 = G__336836;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_336811){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_336811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_336828 = f__18052__auto__.call(null);(statearr_336828[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto__);
return statearr_336828;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18053__auto__);
}));
return c__18051__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__18051__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_336898){var state_val_336899 = (state_336898[1]);if((state_val_336899 === 1))
{var inst_336878 = cljs.core.seq.call(null,coll);var inst_336879 = inst_336878;var state_336898__$1 = (function (){var statearr_336900 = state_336898;(statearr_336900[7] = inst_336879);
return statearr_336900;
})();var statearr_336901_336919 = state_336898__$1;(statearr_336901_336919[2] = null);
(statearr_336901_336919[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_336899 === 2))
{var inst_336879 = (state_336898[7]);var state_336898__$1 = state_336898;if(cljs.core.truth_(inst_336879))
{var statearr_336902_336920 = state_336898__$1;(statearr_336902_336920[1] = 4);
} else
{var statearr_336903_336921 = state_336898__$1;(statearr_336903_336921[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_336899 === 3))
{var inst_336896 = (state_336898[2]);var state_336898__$1 = state_336898;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_336898__$1,inst_336896);
} else
{if((state_val_336899 === 4))
{var inst_336879 = (state_336898[7]);var inst_336882 = cljs.core.first.call(null,inst_336879);var state_336898__$1 = state_336898;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_336898__$1,7,ch,inst_336882);
} else
{if((state_val_336899 === 5))
{var state_336898__$1 = state_336898;if(cljs.core.truth_(close_QMARK_))
{var statearr_336904_336922 = state_336898__$1;(statearr_336904_336922[1] = 8);
} else
{var statearr_336905_336923 = state_336898__$1;(statearr_336905_336923[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_336899 === 6))
{var inst_336894 = (state_336898[2]);var state_336898__$1 = state_336898;var statearr_336906_336924 = state_336898__$1;(statearr_336906_336924[2] = inst_336894);
(statearr_336906_336924[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_336899 === 7))
{var inst_336879 = (state_336898[7]);var inst_336884 = (state_336898[2]);var inst_336885 = cljs.core.next.call(null,inst_336879);var inst_336879__$1 = inst_336885;var state_336898__$1 = (function (){var statearr_336907 = state_336898;(statearr_336907[8] = inst_336884);
(statearr_336907[7] = inst_336879__$1);
return statearr_336907;
})();var statearr_336908_336925 = state_336898__$1;(statearr_336908_336925[2] = null);
(statearr_336908_336925[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_336899 === 8))
{var inst_336889 = cljs.core.async.close_BANG_.call(null,ch);var state_336898__$1 = state_336898;var statearr_336909_336926 = state_336898__$1;(statearr_336909_336926[2] = inst_336889);
(statearr_336909_336926[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_336899 === 9))
{var state_336898__$1 = state_336898;var statearr_336910_336927 = state_336898__$1;(statearr_336910_336927[2] = null);
(statearr_336910_336927[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_336899 === 10))
{var inst_336892 = (state_336898[2]);var state_336898__$1 = state_336898;var statearr_336911_336928 = state_336898__$1;(statearr_336911_336928[2] = inst_336892);
(statearr_336911_336928[1] = 6);
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
});return ((function (switch__17981__auto__){
return (function() {
var state_machine__17982__auto__ = null;
var state_machine__17982__auto____0 = (function (){var statearr_336915 = (new Array(9));(statearr_336915[0] = state_machine__17982__auto__);
(statearr_336915[1] = 1);
return statearr_336915;
});
var state_machine__17982__auto____1 = (function (state_336898){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_336898);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e336916){if((e336916 instanceof Object))
{var ex__17985__auto__ = e336916;var statearr_336917_336929 = state_336898;(statearr_336917_336929[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_336898);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e336916;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__336930 = state_336898;
state_336898 = G__336930;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_336898){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_336898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_336918 = f__18052__auto__.call(null);(statearr_336918[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto__);
return statearr_336918;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18053__auto__);
}));
return c__18051__auto__;
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
cljs.core.async.Mux = (function (){var obj336932 = {};return obj336932;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__13811__auto__ = _;if(and__13811__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__13811__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__14426__auto__ = (((_ == null))?null:_);return (function (){var or__13823__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__14426__auto__)]);if(or__13823__auto__)
{return or__13823__auto__;
} else
{var or__13823__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__13823__auto____$1)
{return or__13823__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj336934 = {};return obj336934;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__13811__auto__ = m;if(and__13811__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__13811__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__14426__auto__ = (((m == null))?null:m);return (function (){var or__13823__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__14426__auto__)]);if(or__13823__auto__)
{return or__13823__auto__;
} else
{var or__13823__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__13823__auto____$1)
{return or__13823__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__13811__auto__ = m;if(and__13811__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__13811__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__14426__auto__ = (((m == null))?null:m);return (function (){var or__13823__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__14426__auto__)]);if(or__13823__auto__)
{return or__13823__auto__;
} else
{var or__13823__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__13823__auto____$1)
{return or__13823__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__13811__auto__ = m;if(and__13811__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__13811__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__14426__auto__ = (((m == null))?null:m);return (function (){var or__13823__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__14426__auto__)]);if(or__13823__auto__)
{return or__13823__auto__;
} else
{var or__13823__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__13823__auto____$1)
{return or__13823__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t337158 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t337158 = (function (cs,ch,mult,meta337159){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta337159 = meta337159;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t337158.cljs$lang$type = true;
cljs.core.async.t337158.cljs$lang$ctorStr = "cljs.core.async/t337158";
cljs.core.async.t337158.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"cljs.core.async/t337158");
});})(cs))
;
cljs.core.async.t337158.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t337158.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t337158.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t337158.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t337158.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t337158.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t337158.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_337160){var self__ = this;
var _337160__$1 = this;return self__.meta337159;
});})(cs))
;
cljs.core.async.t337158.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_337160,meta337159__$1){var self__ = this;
var _337160__$1 = this;return (new cljs.core.async.t337158(self__.cs,self__.ch,self__.mult,meta337159__$1));
});})(cs))
;
cljs.core.async.__GT_t337158 = ((function (cs){
return (function __GT_t337158(cs__$1,ch__$1,mult__$1,meta337159){return (new cljs.core.async.t337158(cs__$1,ch__$1,mult__$1,meta337159));
});})(cs))
;
}
return (new cljs.core.async.t337158(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__18051__auto___337381 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_337295){var state_val_337296 = (state_337295[1]);if((state_val_337296 === 32))
{var inst_337239 = (state_337295[7]);var inst_337163 = (state_337295[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_337295,31,Object,null,30);var inst_337246 = cljs.core.async.put_BANG_.call(null,inst_337239,inst_337163,done);var state_337295__$1 = state_337295;var statearr_337297_337382 = state_337295__$1;(statearr_337297_337382[2] = inst_337246);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_337295__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337296 === 1))
{var state_337295__$1 = state_337295;var statearr_337298_337383 = state_337295__$1;(statearr_337298_337383[2] = null);
(statearr_337298_337383[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337296 === 33))
{var inst_337252 = (state_337295[9]);var inst_337254 = cljs.core.chunked_seq_QMARK_.call(null,inst_337252);var state_337295__$1 = state_337295;if(inst_337254)
{var statearr_337299_337384 = state_337295__$1;(statearr_337299_337384[1] = 36);
} else
{var statearr_337300_337385 = state_337295__$1;(statearr_337300_337385[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337296 === 2))
{var state_337295__$1 = state_337295;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_337295__$1,4,ch);
} else
{if((state_val_337296 === 34))
{var state_337295__$1 = state_337295;var statearr_337301_337386 = state_337295__$1;(statearr_337301_337386[2] = null);
(statearr_337301_337386[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337296 === 3))
{var inst_337293 = (state_337295[2]);var state_337295__$1 = state_337295;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_337295__$1,inst_337293);
} else
{if((state_val_337296 === 35))
{var inst_337277 = (state_337295[2]);var state_337295__$1 = state_337295;var statearr_337302_337387 = state_337295__$1;(statearr_337302_337387[2] = inst_337277);
(statearr_337302_337387[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337296 === 4))
{var inst_337163 = (state_337295[8]);var inst_337163__$1 = (state_337295[2]);var inst_337164 = (inst_337163__$1 == null);var state_337295__$1 = (function (){var statearr_337303 = state_337295;(statearr_337303[8] = inst_337163__$1);
return statearr_337303;
})();if(cljs.core.truth_(inst_337164))
{var statearr_337304_337388 = state_337295__$1;(statearr_337304_337388[1] = 5);
} else
{var statearr_337305_337389 = state_337295__$1;(statearr_337305_337389[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337296 === 36))
{var inst_337252 = (state_337295[9]);var inst_337256 = cljs.core.chunk_first.call(null,inst_337252);var inst_337257 = cljs.core.chunk_rest.call(null,inst_337252);var inst_337258 = cljs.core.count.call(null,inst_337256);var inst_337231 = inst_337257;var inst_337232 = inst_337256;var inst_337233 = inst_337258;var inst_337234 = 0;var state_337295__$1 = (function (){var statearr_337306 = state_337295;(statearr_337306[10] = inst_337233);
(statearr_337306[11] = inst_337234);
(statearr_337306[12] = inst_337232);
(statearr_337306[13] = inst_337231);
return statearr_337306;
})();var statearr_337307_337390 = state_337295__$1;(statearr_337307_337390[2] = null);
(statearr_337307_337390[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337296 === 5))
{var inst_337170 = cljs.core.deref.call(null,cs);var inst_337171 = cljs.core.seq.call(null,inst_337170);var inst_337172 = inst_337171;var inst_337173 = null;var inst_337174 = 0;var inst_337175 = 0;var state_337295__$1 = (function (){var statearr_337308 = state_337295;(statearr_337308[14] = inst_337172);
(statearr_337308[15] = inst_337173);
(statearr_337308[16] = inst_337175);
(statearr_337308[17] = inst_337174);
return statearr_337308;
})();var statearr_337309_337391 = state_337295__$1;(statearr_337309_337391[2] = null);
(statearr_337309_337391[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337296 === 37))
{var inst_337252 = (state_337295[9]);var inst_337261 = cljs.core.first.call(null,inst_337252);var state_337295__$1 = (function (){var statearr_337310 = state_337295;(statearr_337310[18] = inst_337261);
return statearr_337310;
})();var statearr_337311_337392 = state_337295__$1;(statearr_337311_337392[2] = null);
(statearr_337311_337392[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337296 === 6))
{var inst_337223 = (state_337295[19]);var inst_337222 = cljs.core.deref.call(null,cs);var inst_337223__$1 = cljs.core.keys.call(null,inst_337222);var inst_337224 = cljs.core.count.call(null,inst_337223__$1);var inst_337225 = cljs.core.reset_BANG_.call(null,dctr,inst_337224);var inst_337230 = cljs.core.seq.call(null,inst_337223__$1);var inst_337231 = inst_337230;var inst_337232 = null;var inst_337233 = 0;var inst_337234 = 0;var state_337295__$1 = (function (){var statearr_337312 = state_337295;(statearr_337312[10] = inst_337233);
(statearr_337312[11] = inst_337234);
(statearr_337312[12] = inst_337232);
(statearr_337312[13] = inst_337231);
(statearr_337312[20] = inst_337225);
(statearr_337312[19] = inst_337223__$1);
return statearr_337312;
})();var statearr_337313_337393 = state_337295__$1;(statearr_337313_337393[2] = null);
(statearr_337313_337393[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337296 === 38))
{var inst_337274 = (state_337295[2]);var state_337295__$1 = state_337295;var statearr_337314_337394 = state_337295__$1;(statearr_337314_337394[2] = inst_337274);
(statearr_337314_337394[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337296 === 7))
{var inst_337291 = (state_337295[2]);var state_337295__$1 = state_337295;var statearr_337315_337395 = state_337295__$1;(statearr_337315_337395[2] = inst_337291);
(statearr_337315_337395[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337296 === 39))
{var inst_337252 = (state_337295[9]);var inst_337270 = (state_337295[2]);var inst_337271 = cljs.core.next.call(null,inst_337252);var inst_337231 = inst_337271;var inst_337232 = null;var inst_337233 = 0;var inst_337234 = 0;var state_337295__$1 = (function (){var statearr_337316 = state_337295;(statearr_337316[10] = inst_337233);
(statearr_337316[11] = inst_337234);
(statearr_337316[12] = inst_337232);
(statearr_337316[13] = inst_337231);
(statearr_337316[21] = inst_337270);
return statearr_337316;
})();var statearr_337317_337396 = state_337295__$1;(statearr_337317_337396[2] = null);
(statearr_337317_337396[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337296 === 8))
{var inst_337175 = (state_337295[16]);var inst_337174 = (state_337295[17]);var inst_337177 = (inst_337175 < inst_337174);var inst_337178 = inst_337177;var state_337295__$1 = state_337295;if(cljs.core.truth_(inst_337178))
{var statearr_337318_337397 = state_337295__$1;(statearr_337318_337397[1] = 10);
} else
{var statearr_337319_337398 = state_337295__$1;(statearr_337319_337398[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337296 === 40))
{var inst_337261 = (state_337295[18]);var inst_337262 = (state_337295[2]);var inst_337263 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_337264 = cljs.core.async.untap_STAR_.call(null,m,inst_337261);var state_337295__$1 = (function (){var statearr_337320 = state_337295;(statearr_337320[22] = inst_337263);
(statearr_337320[23] = inst_337262);
return statearr_337320;
})();var statearr_337321_337399 = state_337295__$1;(statearr_337321_337399[2] = inst_337264);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_337295__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337296 === 9))
{var inst_337220 = (state_337295[2]);var state_337295__$1 = state_337295;var statearr_337322_337400 = state_337295__$1;(statearr_337322_337400[2] = inst_337220);
(statearr_337322_337400[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337296 === 41))
{var inst_337261 = (state_337295[18]);var inst_337163 = (state_337295[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_337295,40,Object,null,39);var inst_337268 = cljs.core.async.put_BANG_.call(null,inst_337261,inst_337163,done);var state_337295__$1 = state_337295;var statearr_337323_337401 = state_337295__$1;(statearr_337323_337401[2] = inst_337268);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_337295__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337296 === 10))
{var inst_337173 = (state_337295[15]);var inst_337175 = (state_337295[16]);var inst_337181 = cljs.core._nth.call(null,inst_337173,inst_337175);var inst_337182 = cljs.core.nth.call(null,inst_337181,0,null);var inst_337183 = cljs.core.nth.call(null,inst_337181,1,null);var state_337295__$1 = (function (){var statearr_337324 = state_337295;(statearr_337324[24] = inst_337182);
return statearr_337324;
})();if(cljs.core.truth_(inst_337183))
{var statearr_337325_337402 = state_337295__$1;(statearr_337325_337402[1] = 13);
} else
{var statearr_337326_337403 = state_337295__$1;(statearr_337326_337403[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337296 === 42))
{var state_337295__$1 = state_337295;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_337295__$1,45,dchan);
} else
{if((state_val_337296 === 11))
{var inst_337172 = (state_337295[14]);var inst_337192 = (state_337295[25]);var inst_337192__$1 = cljs.core.seq.call(null,inst_337172);var state_337295__$1 = (function (){var statearr_337327 = state_337295;(statearr_337327[25] = inst_337192__$1);
return statearr_337327;
})();if(inst_337192__$1)
{var statearr_337328_337404 = state_337295__$1;(statearr_337328_337404[1] = 16);
} else
{var statearr_337329_337405 = state_337295__$1;(statearr_337329_337405[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337296 === 43))
{var state_337295__$1 = state_337295;var statearr_337330_337406 = state_337295__$1;(statearr_337330_337406[2] = null);
(statearr_337330_337406[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337296 === 12))
{var inst_337218 = (state_337295[2]);var state_337295__$1 = state_337295;var statearr_337331_337407 = state_337295__$1;(statearr_337331_337407[2] = inst_337218);
(statearr_337331_337407[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337296 === 44))
{var inst_337288 = (state_337295[2]);var state_337295__$1 = (function (){var statearr_337332 = state_337295;(statearr_337332[26] = inst_337288);
return statearr_337332;
})();var statearr_337333_337408 = state_337295__$1;(statearr_337333_337408[2] = null);
(statearr_337333_337408[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337296 === 13))
{var inst_337182 = (state_337295[24]);var inst_337185 = cljs.core.async.close_BANG_.call(null,inst_337182);var state_337295__$1 = state_337295;var statearr_337334_337409 = state_337295__$1;(statearr_337334_337409[2] = inst_337185);
(statearr_337334_337409[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337296 === 45))
{var inst_337285 = (state_337295[2]);var state_337295__$1 = state_337295;var statearr_337338_337410 = state_337295__$1;(statearr_337338_337410[2] = inst_337285);
(statearr_337338_337410[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337296 === 14))
{var state_337295__$1 = state_337295;var statearr_337339_337411 = state_337295__$1;(statearr_337339_337411[2] = null);
(statearr_337339_337411[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337296 === 15))
{var inst_337172 = (state_337295[14]);var inst_337173 = (state_337295[15]);var inst_337175 = (state_337295[16]);var inst_337174 = (state_337295[17]);var inst_337188 = (state_337295[2]);var inst_337189 = (inst_337175 + 1);var tmp337335 = inst_337172;var tmp337336 = inst_337173;var tmp337337 = inst_337174;var inst_337172__$1 = tmp337335;var inst_337173__$1 = tmp337336;var inst_337174__$1 = tmp337337;var inst_337175__$1 = inst_337189;var state_337295__$1 = (function (){var statearr_337340 = state_337295;(statearr_337340[14] = inst_337172__$1);
(statearr_337340[15] = inst_337173__$1);
(statearr_337340[16] = inst_337175__$1);
(statearr_337340[17] = inst_337174__$1);
(statearr_337340[27] = inst_337188);
return statearr_337340;
})();var statearr_337341_337412 = state_337295__$1;(statearr_337341_337412[2] = null);
(statearr_337341_337412[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337296 === 16))
{var inst_337192 = (state_337295[25]);var inst_337194 = cljs.core.chunked_seq_QMARK_.call(null,inst_337192);var state_337295__$1 = state_337295;if(inst_337194)
{var statearr_337342_337413 = state_337295__$1;(statearr_337342_337413[1] = 19);
} else
{var statearr_337343_337414 = state_337295__$1;(statearr_337343_337414[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337296 === 17))
{var state_337295__$1 = state_337295;var statearr_337344_337415 = state_337295__$1;(statearr_337344_337415[2] = null);
(statearr_337344_337415[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337296 === 18))
{var inst_337216 = (state_337295[2]);var state_337295__$1 = state_337295;var statearr_337345_337416 = state_337295__$1;(statearr_337345_337416[2] = inst_337216);
(statearr_337345_337416[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337296 === 19))
{var inst_337192 = (state_337295[25]);var inst_337196 = cljs.core.chunk_first.call(null,inst_337192);var inst_337197 = cljs.core.chunk_rest.call(null,inst_337192);var inst_337198 = cljs.core.count.call(null,inst_337196);var inst_337172 = inst_337197;var inst_337173 = inst_337196;var inst_337174 = inst_337198;var inst_337175 = 0;var state_337295__$1 = (function (){var statearr_337346 = state_337295;(statearr_337346[14] = inst_337172);
(statearr_337346[15] = inst_337173);
(statearr_337346[16] = inst_337175);
(statearr_337346[17] = inst_337174);
return statearr_337346;
})();var statearr_337347_337417 = state_337295__$1;(statearr_337347_337417[2] = null);
(statearr_337347_337417[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337296 === 20))
{var inst_337192 = (state_337295[25]);var inst_337202 = cljs.core.first.call(null,inst_337192);var inst_337203 = cljs.core.nth.call(null,inst_337202,0,null);var inst_337204 = cljs.core.nth.call(null,inst_337202,1,null);var state_337295__$1 = (function (){var statearr_337348 = state_337295;(statearr_337348[28] = inst_337203);
return statearr_337348;
})();if(cljs.core.truth_(inst_337204))
{var statearr_337349_337418 = state_337295__$1;(statearr_337349_337418[1] = 22);
} else
{var statearr_337350_337419 = state_337295__$1;(statearr_337350_337419[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337296 === 21))
{var inst_337213 = (state_337295[2]);var state_337295__$1 = state_337295;var statearr_337351_337420 = state_337295__$1;(statearr_337351_337420[2] = inst_337213);
(statearr_337351_337420[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337296 === 22))
{var inst_337203 = (state_337295[28]);var inst_337206 = cljs.core.async.close_BANG_.call(null,inst_337203);var state_337295__$1 = state_337295;var statearr_337352_337421 = state_337295__$1;(statearr_337352_337421[2] = inst_337206);
(statearr_337352_337421[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337296 === 23))
{var state_337295__$1 = state_337295;var statearr_337353_337422 = state_337295__$1;(statearr_337353_337422[2] = null);
(statearr_337353_337422[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337296 === 24))
{var inst_337192 = (state_337295[25]);var inst_337209 = (state_337295[2]);var inst_337210 = cljs.core.next.call(null,inst_337192);var inst_337172 = inst_337210;var inst_337173 = null;var inst_337174 = 0;var inst_337175 = 0;var state_337295__$1 = (function (){var statearr_337354 = state_337295;(statearr_337354[14] = inst_337172);
(statearr_337354[15] = inst_337173);
(statearr_337354[16] = inst_337175);
(statearr_337354[17] = inst_337174);
(statearr_337354[29] = inst_337209);
return statearr_337354;
})();var statearr_337355_337423 = state_337295__$1;(statearr_337355_337423[2] = null);
(statearr_337355_337423[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337296 === 25))
{var inst_337233 = (state_337295[10]);var inst_337234 = (state_337295[11]);var inst_337236 = (inst_337234 < inst_337233);var inst_337237 = inst_337236;var state_337295__$1 = state_337295;if(cljs.core.truth_(inst_337237))
{var statearr_337356_337424 = state_337295__$1;(statearr_337356_337424[1] = 27);
} else
{var statearr_337357_337425 = state_337295__$1;(statearr_337357_337425[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337296 === 26))
{var inst_337223 = (state_337295[19]);var inst_337281 = (state_337295[2]);var inst_337282 = cljs.core.seq.call(null,inst_337223);var state_337295__$1 = (function (){var statearr_337358 = state_337295;(statearr_337358[30] = inst_337281);
return statearr_337358;
})();if(inst_337282)
{var statearr_337359_337426 = state_337295__$1;(statearr_337359_337426[1] = 42);
} else
{var statearr_337360_337427 = state_337295__$1;(statearr_337360_337427[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337296 === 27))
{var inst_337234 = (state_337295[11]);var inst_337232 = (state_337295[12]);var inst_337239 = cljs.core._nth.call(null,inst_337232,inst_337234);var state_337295__$1 = (function (){var statearr_337361 = state_337295;(statearr_337361[7] = inst_337239);
return statearr_337361;
})();var statearr_337362_337428 = state_337295__$1;(statearr_337362_337428[2] = null);
(statearr_337362_337428[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337296 === 28))
{var inst_337231 = (state_337295[13]);var inst_337252 = (state_337295[9]);var inst_337252__$1 = cljs.core.seq.call(null,inst_337231);var state_337295__$1 = (function (){var statearr_337366 = state_337295;(statearr_337366[9] = inst_337252__$1);
return statearr_337366;
})();if(inst_337252__$1)
{var statearr_337367_337429 = state_337295__$1;(statearr_337367_337429[1] = 33);
} else
{var statearr_337368_337430 = state_337295__$1;(statearr_337368_337430[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337296 === 29))
{var inst_337279 = (state_337295[2]);var state_337295__$1 = state_337295;var statearr_337369_337431 = state_337295__$1;(statearr_337369_337431[2] = inst_337279);
(statearr_337369_337431[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337296 === 30))
{var inst_337233 = (state_337295[10]);var inst_337234 = (state_337295[11]);var inst_337232 = (state_337295[12]);var inst_337231 = (state_337295[13]);var inst_337248 = (state_337295[2]);var inst_337249 = (inst_337234 + 1);var tmp337363 = inst_337233;var tmp337364 = inst_337232;var tmp337365 = inst_337231;var inst_337231__$1 = tmp337365;var inst_337232__$1 = tmp337364;var inst_337233__$1 = tmp337363;var inst_337234__$1 = inst_337249;var state_337295__$1 = (function (){var statearr_337370 = state_337295;(statearr_337370[10] = inst_337233__$1);
(statearr_337370[11] = inst_337234__$1);
(statearr_337370[12] = inst_337232__$1);
(statearr_337370[31] = inst_337248);
(statearr_337370[13] = inst_337231__$1);
return statearr_337370;
})();var statearr_337371_337432 = state_337295__$1;(statearr_337371_337432[2] = null);
(statearr_337371_337432[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337296 === 31))
{var inst_337239 = (state_337295[7]);var inst_337240 = (state_337295[2]);var inst_337241 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_337242 = cljs.core.async.untap_STAR_.call(null,m,inst_337239);var state_337295__$1 = (function (){var statearr_337372 = state_337295;(statearr_337372[32] = inst_337241);
(statearr_337372[33] = inst_337240);
return statearr_337372;
})();var statearr_337373_337433 = state_337295__$1;(statearr_337373_337433[2] = inst_337242);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_337295__$1);
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
});return ((function (switch__17981__auto__){
return (function() {
var state_machine__17982__auto__ = null;
var state_machine__17982__auto____0 = (function (){var statearr_337377 = (new Array(34));(statearr_337377[0] = state_machine__17982__auto__);
(statearr_337377[1] = 1);
return statearr_337377;
});
var state_machine__17982__auto____1 = (function (state_337295){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_337295);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e337378){if((e337378 instanceof Object))
{var ex__17985__auto__ = e337378;var statearr_337379_337434 = state_337295;(statearr_337379_337434[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_337295);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e337378;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__337435 = state_337295;
state_337295 = G__337435;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_337295){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_337295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_337380 = f__18052__auto__.call(null);(statearr_337380[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___337381);
return statearr_337380;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18053__auto__);
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
cljs.core.async.Mix = (function (){var obj337437 = {};return obj337437;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__13811__auto__ = m;if(and__13811__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__13811__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__14426__auto__ = (((m == null))?null:m);return (function (){var or__13823__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__14426__auto__)]);if(or__13823__auto__)
{return or__13823__auto__;
} else
{var or__13823__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__13823__auto____$1)
{return or__13823__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__13811__auto__ = m;if(and__13811__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__13811__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__14426__auto__ = (((m == null))?null:m);return (function (){var or__13823__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__14426__auto__)]);if(or__13823__auto__)
{return or__13823__auto__;
} else
{var or__13823__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__13823__auto____$1)
{return or__13823__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__13811__auto__ = m;if(and__13811__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__13811__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__14426__auto__ = (((m == null))?null:m);return (function (){var or__13823__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__14426__auto__)]);if(or__13823__auto__)
{return or__13823__auto__;
} else
{var or__13823__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__13823__auto____$1)
{return or__13823__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__13811__auto__ = m;if(and__13811__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__13811__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__14426__auto__ = (((m == null))?null:m);return (function (){var or__13823__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__14426__auto__)]);if(or__13823__auto__)
{return or__13823__auto__;
} else
{var or__13823__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__13823__auto____$1)
{return or__13823__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__13811__auto__ = m;if(and__13811__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__13811__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__14426__auto__ = (((m == null))?null:m);return (function (){var or__13823__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__14426__auto__)]);if(or__13823__auto__)
{return or__13823__auto__;
} else
{var or__13823__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__13823__auto____$1)
{return or__13823__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t337547 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t337547 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta337548){
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
this.meta337548 = meta337548;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t337547.cljs$lang$type = true;
cljs.core.async.t337547.cljs$lang$ctorStr = "cljs.core.async/t337547";
cljs.core.async.t337547.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"cljs.core.async/t337547");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t337547.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t337547.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t337547.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t337547.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t337547.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t337547.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t337547.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t337547.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t337547.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_337549){var self__ = this;
var _337549__$1 = this;return self__.meta337548;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t337547.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_337549,meta337548__$1){var self__ = this;
var _337549__$1 = this;return (new cljs.core.async.t337547(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta337548__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t337547 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t337547(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta337548){return (new cljs.core.async.t337547(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta337548));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t337547(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__18051__auto___337656 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_337614){var state_val_337615 = (state_337614[1]);if((state_val_337615 === 1))
{var inst_337553 = (state_337614[7]);var inst_337553__$1 = calc_state.call(null);var inst_337554 = cljs.core.seq_QMARK_.call(null,inst_337553__$1);var state_337614__$1 = (function (){var statearr_337616 = state_337614;(statearr_337616[7] = inst_337553__$1);
return statearr_337616;
})();if(inst_337554)
{var statearr_337617_337657 = state_337614__$1;(statearr_337617_337657[1] = 2);
} else
{var statearr_337618_337658 = state_337614__$1;(statearr_337618_337658[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337615 === 2))
{var inst_337553 = (state_337614[7]);var inst_337556 = cljs.core.apply.call(null,cljs.core.hash_map,inst_337553);var state_337614__$1 = state_337614;var statearr_337619_337659 = state_337614__$1;(statearr_337619_337659[2] = inst_337556);
(statearr_337619_337659[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337615 === 3))
{var inst_337553 = (state_337614[7]);var state_337614__$1 = state_337614;var statearr_337620_337660 = state_337614__$1;(statearr_337620_337660[2] = inst_337553);
(statearr_337620_337660[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337615 === 4))
{var inst_337553 = (state_337614[7]);var inst_337559 = (state_337614[2]);var inst_337560 = cljs.core.get.call(null,inst_337559,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_337561 = cljs.core.get.call(null,inst_337559,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_337562 = cljs.core.get.call(null,inst_337559,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_337563 = inst_337553;var state_337614__$1 = (function (){var statearr_337621 = state_337614;(statearr_337621[8] = inst_337563);
(statearr_337621[9] = inst_337560);
(statearr_337621[10] = inst_337562);
(statearr_337621[11] = inst_337561);
return statearr_337621;
})();var statearr_337622_337661 = state_337614__$1;(statearr_337622_337661[2] = null);
(statearr_337622_337661[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337615 === 5))
{var inst_337563 = (state_337614[8]);var inst_337566 = cljs.core.seq_QMARK_.call(null,inst_337563);var state_337614__$1 = state_337614;if(inst_337566)
{var statearr_337623_337662 = state_337614__$1;(statearr_337623_337662[1] = 7);
} else
{var statearr_337624_337663 = state_337614__$1;(statearr_337624_337663[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337615 === 6))
{var inst_337612 = (state_337614[2]);var state_337614__$1 = state_337614;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_337614__$1,inst_337612);
} else
{if((state_val_337615 === 7))
{var inst_337563 = (state_337614[8]);var inst_337568 = cljs.core.apply.call(null,cljs.core.hash_map,inst_337563);var state_337614__$1 = state_337614;var statearr_337625_337664 = state_337614__$1;(statearr_337625_337664[2] = inst_337568);
(statearr_337625_337664[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337615 === 8))
{var inst_337563 = (state_337614[8]);var state_337614__$1 = state_337614;var statearr_337626_337665 = state_337614__$1;(statearr_337626_337665[2] = inst_337563);
(statearr_337626_337665[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337615 === 9))
{var inst_337571 = (state_337614[12]);var inst_337571__$1 = (state_337614[2]);var inst_337572 = cljs.core.get.call(null,inst_337571__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_337573 = cljs.core.get.call(null,inst_337571__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_337574 = cljs.core.get.call(null,inst_337571__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_337614__$1 = (function (){var statearr_337627 = state_337614;(statearr_337627[13] = inst_337574);
(statearr_337627[12] = inst_337571__$1);
(statearr_337627[14] = inst_337573);
return statearr_337627;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_337614__$1,10,inst_337572);
} else
{if((state_val_337615 === 10))
{var inst_337579 = (state_337614[15]);var inst_337578 = (state_337614[16]);var inst_337577 = (state_337614[2]);var inst_337578__$1 = cljs.core.nth.call(null,inst_337577,0,null);var inst_337579__$1 = cljs.core.nth.call(null,inst_337577,1,null);var inst_337580 = (inst_337578__$1 == null);var inst_337581 = cljs.core._EQ_.call(null,inst_337579__$1,change);var inst_337582 = (inst_337580) || (inst_337581);var state_337614__$1 = (function (){var statearr_337628 = state_337614;(statearr_337628[15] = inst_337579__$1);
(statearr_337628[16] = inst_337578__$1);
return statearr_337628;
})();if(cljs.core.truth_(inst_337582))
{var statearr_337629_337666 = state_337614__$1;(statearr_337629_337666[1] = 11);
} else
{var statearr_337630_337667 = state_337614__$1;(statearr_337630_337667[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337615 === 11))
{var inst_337578 = (state_337614[16]);var inst_337584 = (inst_337578 == null);var state_337614__$1 = state_337614;if(cljs.core.truth_(inst_337584))
{var statearr_337631_337668 = state_337614__$1;(statearr_337631_337668[1] = 14);
} else
{var statearr_337632_337669 = state_337614__$1;(statearr_337632_337669[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337615 === 12))
{var inst_337593 = (state_337614[17]);var inst_337574 = (state_337614[13]);var inst_337579 = (state_337614[15]);var inst_337593__$1 = inst_337574.call(null,inst_337579);var state_337614__$1 = (function (){var statearr_337633 = state_337614;(statearr_337633[17] = inst_337593__$1);
return statearr_337633;
})();if(cljs.core.truth_(inst_337593__$1))
{var statearr_337634_337670 = state_337614__$1;(statearr_337634_337670[1] = 17);
} else
{var statearr_337635_337671 = state_337614__$1;(statearr_337635_337671[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337615 === 13))
{var inst_337610 = (state_337614[2]);var state_337614__$1 = state_337614;var statearr_337636_337672 = state_337614__$1;(statearr_337636_337672[2] = inst_337610);
(statearr_337636_337672[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337615 === 14))
{var inst_337579 = (state_337614[15]);var inst_337586 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_337579);var state_337614__$1 = state_337614;var statearr_337637_337673 = state_337614__$1;(statearr_337637_337673[2] = inst_337586);
(statearr_337637_337673[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337615 === 15))
{var state_337614__$1 = state_337614;var statearr_337638_337674 = state_337614__$1;(statearr_337638_337674[2] = null);
(statearr_337638_337674[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337615 === 16))
{var inst_337589 = (state_337614[2]);var inst_337590 = calc_state.call(null);var inst_337563 = inst_337590;var state_337614__$1 = (function (){var statearr_337639 = state_337614;(statearr_337639[8] = inst_337563);
(statearr_337639[18] = inst_337589);
return statearr_337639;
})();var statearr_337640_337675 = state_337614__$1;(statearr_337640_337675[2] = null);
(statearr_337640_337675[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337615 === 17))
{var inst_337593 = (state_337614[17]);var state_337614__$1 = state_337614;var statearr_337641_337676 = state_337614__$1;(statearr_337641_337676[2] = inst_337593);
(statearr_337641_337676[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337615 === 18))
{var inst_337574 = (state_337614[13]);var inst_337573 = (state_337614[14]);var inst_337579 = (state_337614[15]);var inst_337596 = cljs.core.empty_QMARK_.call(null,inst_337574);var inst_337597 = inst_337573.call(null,inst_337579);var inst_337598 = cljs.core.not.call(null,inst_337597);var inst_337599 = (inst_337596) && (inst_337598);var state_337614__$1 = state_337614;var statearr_337642_337677 = state_337614__$1;(statearr_337642_337677[2] = inst_337599);
(statearr_337642_337677[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337615 === 19))
{var inst_337601 = (state_337614[2]);var state_337614__$1 = state_337614;if(cljs.core.truth_(inst_337601))
{var statearr_337643_337678 = state_337614__$1;(statearr_337643_337678[1] = 20);
} else
{var statearr_337644_337679 = state_337614__$1;(statearr_337644_337679[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337615 === 20))
{var inst_337578 = (state_337614[16]);var state_337614__$1 = state_337614;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_337614__$1,23,out,inst_337578);
} else
{if((state_val_337615 === 21))
{var state_337614__$1 = state_337614;var statearr_337645_337680 = state_337614__$1;(statearr_337645_337680[2] = null);
(statearr_337645_337680[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337615 === 22))
{var inst_337571 = (state_337614[12]);var inst_337607 = (state_337614[2]);var inst_337563 = inst_337571;var state_337614__$1 = (function (){var statearr_337646 = state_337614;(statearr_337646[8] = inst_337563);
(statearr_337646[19] = inst_337607);
return statearr_337646;
})();var statearr_337647_337681 = state_337614__$1;(statearr_337647_337681[2] = null);
(statearr_337647_337681[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337615 === 23))
{var inst_337604 = (state_337614[2]);var state_337614__$1 = state_337614;var statearr_337648_337682 = state_337614__$1;(statearr_337648_337682[2] = inst_337604);
(statearr_337648_337682[1] = 22);
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
});return ((function (switch__17981__auto__){
return (function() {
var state_machine__17982__auto__ = null;
var state_machine__17982__auto____0 = (function (){var statearr_337652 = (new Array(20));(statearr_337652[0] = state_machine__17982__auto__);
(statearr_337652[1] = 1);
return statearr_337652;
});
var state_machine__17982__auto____1 = (function (state_337614){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_337614);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e337653){if((e337653 instanceof Object))
{var ex__17985__auto__ = e337653;var statearr_337654_337683 = state_337614;(statearr_337654_337683[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_337614);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e337653;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__337684 = state_337614;
state_337614 = G__337684;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_337614){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_337614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_337655 = f__18052__auto__.call(null);(statearr_337655[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___337656);
return statearr_337655;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18053__auto__);
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
cljs.core.async.Pub = (function (){var obj337686 = {};return obj337686;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__13811__auto__ = p;if(and__13811__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__13811__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__14426__auto__ = (((p == null))?null:p);return (function (){var or__13823__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__14426__auto__)]);if(or__13823__auto__)
{return or__13823__auto__;
} else
{var or__13823__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__13823__auto____$1)
{return or__13823__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__13811__auto__ = p;if(and__13811__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__13811__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__14426__auto__ = (((p == null))?null:p);return (function (){var or__13823__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__14426__auto__)]);if(or__13823__auto__)
{return or__13823__auto__;
} else
{var or__13823__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__13823__auto____$1)
{return or__13823__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__13811__auto__ = p;if(and__13811__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__13811__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__14426__auto__ = (((p == null))?null:p);return (function (){var or__13823__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__14426__auto__)]);if(or__13823__auto__)
{return or__13823__auto__;
} else
{var or__13823__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__13823__auto____$1)
{return or__13823__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__13811__auto__ = p;if(and__13811__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__13811__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__14426__auto__ = (((p == null))?null:p);return (function (){var or__13823__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__14426__auto__)]);if(or__13823__auto__)
{return or__13823__auto__;
} else
{var or__13823__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__13823__auto____$1)
{return or__13823__auto____$1;
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
return (function (topic){var or__13823__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__13823__auto__,mults){
return (function (p1__337687_SHARP_){if(cljs.core.truth_(p1__337687_SHARP_.call(null,topic)))
{return p1__337687_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__337687_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__13823__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t337812 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t337812 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta337813){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta337813 = meta337813;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t337812.cljs$lang$type = true;
cljs.core.async.t337812.cljs$lang$ctorStr = "cljs.core.async/t337812";
cljs.core.async.t337812.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"cljs.core.async/t337812");
});})(mults,ensure_mult))
;
cljs.core.async.t337812.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t337812.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t337812.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t337812.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t337812.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t337812.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t337812.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t337812.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_337814){var self__ = this;
var _337814__$1 = this;return self__.meta337813;
});})(mults,ensure_mult))
;
cljs.core.async.t337812.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_337814,meta337813__$1){var self__ = this;
var _337814__$1 = this;return (new cljs.core.async.t337812(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta337813__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t337812 = ((function (mults,ensure_mult){
return (function __GT_t337812(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta337813){return (new cljs.core.async.t337812(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta337813));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t337812(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__18051__auto___337936 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_337888){var state_val_337889 = (state_337888[1]);if((state_val_337889 === 1))
{var state_337888__$1 = state_337888;var statearr_337890_337937 = state_337888__$1;(statearr_337890_337937[2] = null);
(statearr_337890_337937[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337889 === 2))
{var state_337888__$1 = state_337888;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_337888__$1,4,ch);
} else
{if((state_val_337889 === 3))
{var inst_337886 = (state_337888[2]);var state_337888__$1 = state_337888;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_337888__$1,inst_337886);
} else
{if((state_val_337889 === 4))
{var inst_337817 = (state_337888[7]);var inst_337817__$1 = (state_337888[2]);var inst_337818 = (inst_337817__$1 == null);var state_337888__$1 = (function (){var statearr_337891 = state_337888;(statearr_337891[7] = inst_337817__$1);
return statearr_337891;
})();if(cljs.core.truth_(inst_337818))
{var statearr_337892_337938 = state_337888__$1;(statearr_337892_337938[1] = 5);
} else
{var statearr_337893_337939 = state_337888__$1;(statearr_337893_337939[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337889 === 5))
{var inst_337824 = cljs.core.deref.call(null,mults);var inst_337825 = cljs.core.vals.call(null,inst_337824);var inst_337826 = cljs.core.seq.call(null,inst_337825);var inst_337827 = inst_337826;var inst_337828 = null;var inst_337829 = 0;var inst_337830 = 0;var state_337888__$1 = (function (){var statearr_337894 = state_337888;(statearr_337894[8] = inst_337830);
(statearr_337894[9] = inst_337827);
(statearr_337894[10] = inst_337829);
(statearr_337894[11] = inst_337828);
return statearr_337894;
})();var statearr_337895_337940 = state_337888__$1;(statearr_337895_337940[2] = null);
(statearr_337895_337940[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337889 === 6))
{var inst_337817 = (state_337888[7]);var inst_337867 = (state_337888[12]);var inst_337865 = (state_337888[13]);var inst_337865__$1 = topic_fn.call(null,inst_337817);var inst_337866 = cljs.core.deref.call(null,mults);var inst_337867__$1 = cljs.core.get.call(null,inst_337866,inst_337865__$1);var state_337888__$1 = (function (){var statearr_337896 = state_337888;(statearr_337896[12] = inst_337867__$1);
(statearr_337896[13] = inst_337865__$1);
return statearr_337896;
})();if(cljs.core.truth_(inst_337867__$1))
{var statearr_337897_337941 = state_337888__$1;(statearr_337897_337941[1] = 19);
} else
{var statearr_337898_337942 = state_337888__$1;(statearr_337898_337942[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337889 === 7))
{var inst_337884 = (state_337888[2]);var state_337888__$1 = state_337888;var statearr_337899_337943 = state_337888__$1;(statearr_337899_337943[2] = inst_337884);
(statearr_337899_337943[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337889 === 8))
{var inst_337830 = (state_337888[8]);var inst_337829 = (state_337888[10]);var inst_337832 = (inst_337830 < inst_337829);var inst_337833 = inst_337832;var state_337888__$1 = state_337888;if(cljs.core.truth_(inst_337833))
{var statearr_337903_337944 = state_337888__$1;(statearr_337903_337944[1] = 10);
} else
{var statearr_337904_337945 = state_337888__$1;(statearr_337904_337945[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337889 === 9))
{var inst_337863 = (state_337888[2]);var state_337888__$1 = state_337888;var statearr_337905_337946 = state_337888__$1;(statearr_337905_337946[2] = inst_337863);
(statearr_337905_337946[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337889 === 10))
{var inst_337830 = (state_337888[8]);var inst_337827 = (state_337888[9]);var inst_337829 = (state_337888[10]);var inst_337828 = (state_337888[11]);var inst_337835 = cljs.core._nth.call(null,inst_337828,inst_337830);var inst_337836 = cljs.core.async.muxch_STAR_.call(null,inst_337835);var inst_337837 = cljs.core.async.close_BANG_.call(null,inst_337836);var inst_337838 = (inst_337830 + 1);var tmp337900 = inst_337827;var tmp337901 = inst_337829;var tmp337902 = inst_337828;var inst_337827__$1 = tmp337900;var inst_337828__$1 = tmp337902;var inst_337829__$1 = tmp337901;var inst_337830__$1 = inst_337838;var state_337888__$1 = (function (){var statearr_337906 = state_337888;(statearr_337906[8] = inst_337830__$1);
(statearr_337906[14] = inst_337837);
(statearr_337906[9] = inst_337827__$1);
(statearr_337906[10] = inst_337829__$1);
(statearr_337906[11] = inst_337828__$1);
return statearr_337906;
})();var statearr_337907_337947 = state_337888__$1;(statearr_337907_337947[2] = null);
(statearr_337907_337947[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337889 === 11))
{var inst_337841 = (state_337888[15]);var inst_337827 = (state_337888[9]);var inst_337841__$1 = cljs.core.seq.call(null,inst_337827);var state_337888__$1 = (function (){var statearr_337908 = state_337888;(statearr_337908[15] = inst_337841__$1);
return statearr_337908;
})();if(inst_337841__$1)
{var statearr_337909_337948 = state_337888__$1;(statearr_337909_337948[1] = 13);
} else
{var statearr_337910_337949 = state_337888__$1;(statearr_337910_337949[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337889 === 12))
{var inst_337861 = (state_337888[2]);var state_337888__$1 = state_337888;var statearr_337911_337950 = state_337888__$1;(statearr_337911_337950[2] = inst_337861);
(statearr_337911_337950[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337889 === 13))
{var inst_337841 = (state_337888[15]);var inst_337843 = cljs.core.chunked_seq_QMARK_.call(null,inst_337841);var state_337888__$1 = state_337888;if(inst_337843)
{var statearr_337912_337951 = state_337888__$1;(statearr_337912_337951[1] = 16);
} else
{var statearr_337913_337952 = state_337888__$1;(statearr_337913_337952[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337889 === 14))
{var state_337888__$1 = state_337888;var statearr_337914_337953 = state_337888__$1;(statearr_337914_337953[2] = null);
(statearr_337914_337953[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337889 === 15))
{var inst_337859 = (state_337888[2]);var state_337888__$1 = state_337888;var statearr_337915_337954 = state_337888__$1;(statearr_337915_337954[2] = inst_337859);
(statearr_337915_337954[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337889 === 16))
{var inst_337841 = (state_337888[15]);var inst_337845 = cljs.core.chunk_first.call(null,inst_337841);var inst_337846 = cljs.core.chunk_rest.call(null,inst_337841);var inst_337847 = cljs.core.count.call(null,inst_337845);var inst_337827 = inst_337846;var inst_337828 = inst_337845;var inst_337829 = inst_337847;var inst_337830 = 0;var state_337888__$1 = (function (){var statearr_337916 = state_337888;(statearr_337916[8] = inst_337830);
(statearr_337916[9] = inst_337827);
(statearr_337916[10] = inst_337829);
(statearr_337916[11] = inst_337828);
return statearr_337916;
})();var statearr_337917_337955 = state_337888__$1;(statearr_337917_337955[2] = null);
(statearr_337917_337955[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337889 === 17))
{var inst_337841 = (state_337888[15]);var inst_337850 = cljs.core.first.call(null,inst_337841);var inst_337851 = cljs.core.async.muxch_STAR_.call(null,inst_337850);var inst_337852 = cljs.core.async.close_BANG_.call(null,inst_337851);var inst_337853 = cljs.core.next.call(null,inst_337841);var inst_337827 = inst_337853;var inst_337828 = null;var inst_337829 = 0;var inst_337830 = 0;var state_337888__$1 = (function (){var statearr_337918 = state_337888;(statearr_337918[8] = inst_337830);
(statearr_337918[9] = inst_337827);
(statearr_337918[10] = inst_337829);
(statearr_337918[16] = inst_337852);
(statearr_337918[11] = inst_337828);
return statearr_337918;
})();var statearr_337919_337956 = state_337888__$1;(statearr_337919_337956[2] = null);
(statearr_337919_337956[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337889 === 18))
{var inst_337856 = (state_337888[2]);var state_337888__$1 = state_337888;var statearr_337920_337957 = state_337888__$1;(statearr_337920_337957[2] = inst_337856);
(statearr_337920_337957[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337889 === 19))
{var state_337888__$1 = state_337888;var statearr_337921_337958 = state_337888__$1;(statearr_337921_337958[2] = null);
(statearr_337921_337958[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337889 === 20))
{var state_337888__$1 = state_337888;var statearr_337922_337959 = state_337888__$1;(statearr_337922_337959[2] = null);
(statearr_337922_337959[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337889 === 21))
{var inst_337881 = (state_337888[2]);var state_337888__$1 = (function (){var statearr_337923 = state_337888;(statearr_337923[17] = inst_337881);
return statearr_337923;
})();var statearr_337924_337960 = state_337888__$1;(statearr_337924_337960[2] = null);
(statearr_337924_337960[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337889 === 22))
{var inst_337878 = (state_337888[2]);var state_337888__$1 = state_337888;var statearr_337925_337961 = state_337888__$1;(statearr_337925_337961[2] = inst_337878);
(statearr_337925_337961[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337889 === 23))
{var inst_337865 = (state_337888[13]);var inst_337869 = (state_337888[2]);var inst_337870 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_337865);var state_337888__$1 = (function (){var statearr_337926 = state_337888;(statearr_337926[18] = inst_337869);
return statearr_337926;
})();var statearr_337927_337962 = state_337888__$1;(statearr_337927_337962[2] = inst_337870);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_337888__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_337889 === 24))
{var inst_337817 = (state_337888[7]);var inst_337867 = (state_337888[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_337888,23,Object,null,22);var inst_337874 = cljs.core.async.muxch_STAR_.call(null,inst_337867);var state_337888__$1 = state_337888;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_337888__$1,25,inst_337874,inst_337817);
} else
{if((state_val_337889 === 25))
{var inst_337876 = (state_337888[2]);var state_337888__$1 = state_337888;var statearr_337928_337963 = state_337888__$1;(statearr_337928_337963[2] = inst_337876);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_337888__$1);
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
});return ((function (switch__17981__auto__){
return (function() {
var state_machine__17982__auto__ = null;
var state_machine__17982__auto____0 = (function (){var statearr_337932 = (new Array(19));(statearr_337932[0] = state_machine__17982__auto__);
(statearr_337932[1] = 1);
return statearr_337932;
});
var state_machine__17982__auto____1 = (function (state_337888){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_337888);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e337933){if((e337933 instanceof Object))
{var ex__17985__auto__ = e337933;var statearr_337934_337964 = state_337888;(statearr_337934_337964[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_337888);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e337933;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__337965 = state_337888;
state_337888 = G__337965;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_337888){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_337888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_337935 = f__18052__auto__.call(null);(statearr_337935[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___337936);
return statearr_337935;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18053__auto__);
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
,cljs.core.range.call(null,cnt));var c__18051__auto___338102 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_338072){var state_val_338073 = (state_338072[1]);if((state_val_338073 === 1))
{var state_338072__$1 = state_338072;var statearr_338074_338103 = state_338072__$1;(statearr_338074_338103[2] = null);
(statearr_338074_338103[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_338073 === 2))
{var inst_338035 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_338036 = 0;var state_338072__$1 = (function (){var statearr_338075 = state_338072;(statearr_338075[7] = inst_338036);
(statearr_338075[8] = inst_338035);
return statearr_338075;
})();var statearr_338076_338104 = state_338072__$1;(statearr_338076_338104[2] = null);
(statearr_338076_338104[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_338073 === 3))
{var inst_338070 = (state_338072[2]);var state_338072__$1 = state_338072;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_338072__$1,inst_338070);
} else
{if((state_val_338073 === 4))
{var inst_338036 = (state_338072[7]);var inst_338038 = (inst_338036 < cnt);var state_338072__$1 = state_338072;if(cljs.core.truth_(inst_338038))
{var statearr_338077_338105 = state_338072__$1;(statearr_338077_338105[1] = 6);
} else
{var statearr_338078_338106 = state_338072__$1;(statearr_338078_338106[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_338073 === 5))
{var inst_338056 = (state_338072[2]);var state_338072__$1 = (function (){var statearr_338079 = state_338072;(statearr_338079[9] = inst_338056);
return statearr_338079;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_338072__$1,12,dchan);
} else
{if((state_val_338073 === 6))
{var state_338072__$1 = state_338072;var statearr_338080_338107 = state_338072__$1;(statearr_338080_338107[2] = null);
(statearr_338080_338107[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_338073 === 7))
{var state_338072__$1 = state_338072;var statearr_338081_338108 = state_338072__$1;(statearr_338081_338108[2] = null);
(statearr_338081_338108[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_338073 === 8))
{var inst_338054 = (state_338072[2]);var state_338072__$1 = state_338072;var statearr_338082_338109 = state_338072__$1;(statearr_338082_338109[2] = inst_338054);
(statearr_338082_338109[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_338073 === 9))
{var inst_338036 = (state_338072[7]);var inst_338049 = (state_338072[2]);var inst_338050 = (inst_338036 + 1);var inst_338036__$1 = inst_338050;var state_338072__$1 = (function (){var statearr_338083 = state_338072;(statearr_338083[10] = inst_338049);
(statearr_338083[7] = inst_338036__$1);
return statearr_338083;
})();var statearr_338084_338110 = state_338072__$1;(statearr_338084_338110[2] = null);
(statearr_338084_338110[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_338073 === 10))
{var inst_338040 = (state_338072[2]);var inst_338041 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_338072__$1 = (function (){var statearr_338085 = state_338072;(statearr_338085[11] = inst_338040);
return statearr_338085;
})();var statearr_338086_338111 = state_338072__$1;(statearr_338086_338111[2] = inst_338041);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_338072__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_338073 === 11))
{var inst_338036 = (state_338072[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_338072,10,Object,null,9);var inst_338045 = chs__$1.call(null,inst_338036);var inst_338046 = done.call(null,inst_338036);var inst_338047 = cljs.core.async.take_BANG_.call(null,inst_338045,inst_338046);var state_338072__$1 = state_338072;var statearr_338087_338112 = state_338072__$1;(statearr_338087_338112[2] = inst_338047);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_338072__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_338073 === 12))
{var inst_338058 = (state_338072[12]);var inst_338058__$1 = (state_338072[2]);var inst_338059 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_338058__$1);var state_338072__$1 = (function (){var statearr_338088 = state_338072;(statearr_338088[12] = inst_338058__$1);
return statearr_338088;
})();if(cljs.core.truth_(inst_338059))
{var statearr_338089_338113 = state_338072__$1;(statearr_338089_338113[1] = 13);
} else
{var statearr_338090_338114 = state_338072__$1;(statearr_338090_338114[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_338073 === 13))
{var inst_338061 = cljs.core.async.close_BANG_.call(null,out);var state_338072__$1 = state_338072;var statearr_338091_338115 = state_338072__$1;(statearr_338091_338115[2] = inst_338061);
(statearr_338091_338115[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_338073 === 14))
{var inst_338058 = (state_338072[12]);var inst_338063 = cljs.core.apply.call(null,f,inst_338058);var state_338072__$1 = state_338072;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_338072__$1,16,out,inst_338063);
} else
{if((state_val_338073 === 15))
{var inst_338068 = (state_338072[2]);var state_338072__$1 = state_338072;var statearr_338092_338116 = state_338072__$1;(statearr_338092_338116[2] = inst_338068);
(statearr_338092_338116[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_338073 === 16))
{var inst_338065 = (state_338072[2]);var state_338072__$1 = (function (){var statearr_338093 = state_338072;(statearr_338093[13] = inst_338065);
return statearr_338093;
})();var statearr_338094_338117 = state_338072__$1;(statearr_338094_338117[2] = null);
(statearr_338094_338117[1] = 2);
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
});return ((function (switch__17981__auto__){
return (function() {
var state_machine__17982__auto__ = null;
var state_machine__17982__auto____0 = (function (){var statearr_338098 = (new Array(14));(statearr_338098[0] = state_machine__17982__auto__);
(statearr_338098[1] = 1);
return statearr_338098;
});
var state_machine__17982__auto____1 = (function (state_338072){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_338072);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e338099){if((e338099 instanceof Object))
{var ex__17985__auto__ = e338099;var statearr_338100_338118 = state_338072;(statearr_338100_338118[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_338072);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e338099;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__338119 = state_338072;
state_338072 = G__338119;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_338072){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_338072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_338101 = f__18052__auto__.call(null);(statearr_338101[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___338102);
return statearr_338101;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18053__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18051__auto___338227 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_338203){var state_val_338204 = (state_338203[1]);if((state_val_338204 === 1))
{var inst_338174 = cljs.core.vec.call(null,chs);var inst_338175 = inst_338174;var state_338203__$1 = (function (){var statearr_338205 = state_338203;(statearr_338205[7] = inst_338175);
return statearr_338205;
})();var statearr_338206_338228 = state_338203__$1;(statearr_338206_338228[2] = null);
(statearr_338206_338228[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_338204 === 2))
{var inst_338175 = (state_338203[7]);var inst_338177 = cljs.core.count.call(null,inst_338175);var inst_338178 = (inst_338177 > 0);var state_338203__$1 = state_338203;if(cljs.core.truth_(inst_338178))
{var statearr_338207_338229 = state_338203__$1;(statearr_338207_338229[1] = 4);
} else
{var statearr_338208_338230 = state_338203__$1;(statearr_338208_338230[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_338204 === 3))
{var inst_338201 = (state_338203[2]);var state_338203__$1 = state_338203;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_338203__$1,inst_338201);
} else
{if((state_val_338204 === 4))
{var inst_338175 = (state_338203[7]);var state_338203__$1 = state_338203;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_338203__$1,7,inst_338175);
} else
{if((state_val_338204 === 5))
{var inst_338197 = cljs.core.async.close_BANG_.call(null,out);var state_338203__$1 = state_338203;var statearr_338209_338231 = state_338203__$1;(statearr_338209_338231[2] = inst_338197);
(statearr_338209_338231[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_338204 === 6))
{var inst_338199 = (state_338203[2]);var state_338203__$1 = state_338203;var statearr_338210_338232 = state_338203__$1;(statearr_338210_338232[2] = inst_338199);
(statearr_338210_338232[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_338204 === 7))
{var inst_338182 = (state_338203[8]);var inst_338183 = (state_338203[9]);var inst_338182__$1 = (state_338203[2]);var inst_338183__$1 = cljs.core.nth.call(null,inst_338182__$1,0,null);var inst_338184 = cljs.core.nth.call(null,inst_338182__$1,1,null);var inst_338185 = (inst_338183__$1 == null);var state_338203__$1 = (function (){var statearr_338211 = state_338203;(statearr_338211[8] = inst_338182__$1);
(statearr_338211[9] = inst_338183__$1);
(statearr_338211[10] = inst_338184);
return statearr_338211;
})();if(cljs.core.truth_(inst_338185))
{var statearr_338212_338233 = state_338203__$1;(statearr_338212_338233[1] = 8);
} else
{var statearr_338213_338234 = state_338203__$1;(statearr_338213_338234[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_338204 === 8))
{var inst_338182 = (state_338203[8]);var inst_338183 = (state_338203[9]);var inst_338184 = (state_338203[10]);var inst_338175 = (state_338203[7]);var inst_338187 = (function (){var c = inst_338184;var v = inst_338183;var vec__338180 = inst_338182;var cs = inst_338175;return ((function (c,v,vec__338180,cs,inst_338182,inst_338183,inst_338184,inst_338175,state_val_338204){
return (function (p1__338120_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__338120_SHARP_);
});
;})(c,v,vec__338180,cs,inst_338182,inst_338183,inst_338184,inst_338175,state_val_338204))
})();var inst_338188 = cljs.core.filterv.call(null,inst_338187,inst_338175);var inst_338175__$1 = inst_338188;var state_338203__$1 = (function (){var statearr_338214 = state_338203;(statearr_338214[7] = inst_338175__$1);
return statearr_338214;
})();var statearr_338215_338235 = state_338203__$1;(statearr_338215_338235[2] = null);
(statearr_338215_338235[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_338204 === 9))
{var inst_338183 = (state_338203[9]);var state_338203__$1 = state_338203;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_338203__$1,11,out,inst_338183);
} else
{if((state_val_338204 === 10))
{var inst_338195 = (state_338203[2]);var state_338203__$1 = state_338203;var statearr_338217_338236 = state_338203__$1;(statearr_338217_338236[2] = inst_338195);
(statearr_338217_338236[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_338204 === 11))
{var inst_338175 = (state_338203[7]);var inst_338192 = (state_338203[2]);var tmp338216 = inst_338175;var inst_338175__$1 = tmp338216;var state_338203__$1 = (function (){var statearr_338218 = state_338203;(statearr_338218[11] = inst_338192);
(statearr_338218[7] = inst_338175__$1);
return statearr_338218;
})();var statearr_338219_338237 = state_338203__$1;(statearr_338219_338237[2] = null);
(statearr_338219_338237[1] = 2);
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
});return ((function (switch__17981__auto__){
return (function() {
var state_machine__17982__auto__ = null;
var state_machine__17982__auto____0 = (function (){var statearr_338223 = (new Array(12));(statearr_338223[0] = state_machine__17982__auto__);
(statearr_338223[1] = 1);
return statearr_338223;
});
var state_machine__17982__auto____1 = (function (state_338203){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_338203);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e338224){if((e338224 instanceof Object))
{var ex__17985__auto__ = e338224;var statearr_338225_338238 = state_338203;(statearr_338225_338238[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_338203);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e338224;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__338239 = state_338203;
state_338203 = G__338239;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_338203){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_338203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_338226 = f__18052__auto__.call(null);(statearr_338226[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___338227);
return statearr_338226;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18053__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18051__auto___338332 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_338309){var state_val_338310 = (state_338309[1]);if((state_val_338310 === 1))
{var inst_338286 = 0;var state_338309__$1 = (function (){var statearr_338311 = state_338309;(statearr_338311[7] = inst_338286);
return statearr_338311;
})();var statearr_338312_338333 = state_338309__$1;(statearr_338312_338333[2] = null);
(statearr_338312_338333[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_338310 === 2))
{var inst_338286 = (state_338309[7]);var inst_338288 = (inst_338286 < n);var state_338309__$1 = state_338309;if(cljs.core.truth_(inst_338288))
{var statearr_338313_338334 = state_338309__$1;(statearr_338313_338334[1] = 4);
} else
{var statearr_338314_338335 = state_338309__$1;(statearr_338314_338335[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_338310 === 3))
{var inst_338306 = (state_338309[2]);var inst_338307 = cljs.core.async.close_BANG_.call(null,out);var state_338309__$1 = (function (){var statearr_338315 = state_338309;(statearr_338315[8] = inst_338306);
return statearr_338315;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_338309__$1,inst_338307);
} else
{if((state_val_338310 === 4))
{var state_338309__$1 = state_338309;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_338309__$1,7,ch);
} else
{if((state_val_338310 === 5))
{var state_338309__$1 = state_338309;var statearr_338316_338336 = state_338309__$1;(statearr_338316_338336[2] = null);
(statearr_338316_338336[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_338310 === 6))
{var inst_338304 = (state_338309[2]);var state_338309__$1 = state_338309;var statearr_338317_338337 = state_338309__$1;(statearr_338317_338337[2] = inst_338304);
(statearr_338317_338337[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_338310 === 7))
{var inst_338291 = (state_338309[9]);var inst_338291__$1 = (state_338309[2]);var inst_338292 = (inst_338291__$1 == null);var inst_338293 = cljs.core.not.call(null,inst_338292);var state_338309__$1 = (function (){var statearr_338318 = state_338309;(statearr_338318[9] = inst_338291__$1);
return statearr_338318;
})();if(inst_338293)
{var statearr_338319_338338 = state_338309__$1;(statearr_338319_338338[1] = 8);
} else
{var statearr_338320_338339 = state_338309__$1;(statearr_338320_338339[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_338310 === 8))
{var inst_338291 = (state_338309[9]);var state_338309__$1 = state_338309;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_338309__$1,11,out,inst_338291);
} else
{if((state_val_338310 === 9))
{var state_338309__$1 = state_338309;var statearr_338321_338340 = state_338309__$1;(statearr_338321_338340[2] = null);
(statearr_338321_338340[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_338310 === 10))
{var inst_338301 = (state_338309[2]);var state_338309__$1 = state_338309;var statearr_338322_338341 = state_338309__$1;(statearr_338322_338341[2] = inst_338301);
(statearr_338322_338341[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_338310 === 11))
{var inst_338286 = (state_338309[7]);var inst_338296 = (state_338309[2]);var inst_338297 = (inst_338286 + 1);var inst_338286__$1 = inst_338297;var state_338309__$1 = (function (){var statearr_338323 = state_338309;(statearr_338323[7] = inst_338286__$1);
(statearr_338323[10] = inst_338296);
return statearr_338323;
})();var statearr_338324_338342 = state_338309__$1;(statearr_338324_338342[2] = null);
(statearr_338324_338342[1] = 2);
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
});return ((function (switch__17981__auto__){
return (function() {
var state_machine__17982__auto__ = null;
var state_machine__17982__auto____0 = (function (){var statearr_338328 = (new Array(11));(statearr_338328[0] = state_machine__17982__auto__);
(statearr_338328[1] = 1);
return statearr_338328;
});
var state_machine__17982__auto____1 = (function (state_338309){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_338309);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e338329){if((e338329 instanceof Object))
{var ex__17985__auto__ = e338329;var statearr_338330_338343 = state_338309;(statearr_338330_338343[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_338309);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e338329;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__338344 = state_338309;
state_338309 = G__338344;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_338309){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_338309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_338331 = f__18052__auto__.call(null);(statearr_338331[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___338332);
return statearr_338331;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18053__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18051__auto___338441 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_338416){var state_val_338417 = (state_338416[1]);if((state_val_338417 === 1))
{var inst_338393 = null;var state_338416__$1 = (function (){var statearr_338418 = state_338416;(statearr_338418[7] = inst_338393);
return statearr_338418;
})();var statearr_338419_338442 = state_338416__$1;(statearr_338419_338442[2] = null);
(statearr_338419_338442[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_338417 === 2))
{var state_338416__$1 = state_338416;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_338416__$1,4,ch);
} else
{if((state_val_338417 === 3))
{var inst_338413 = (state_338416[2]);var inst_338414 = cljs.core.async.close_BANG_.call(null,out);var state_338416__$1 = (function (){var statearr_338420 = state_338416;(statearr_338420[8] = inst_338413);
return statearr_338420;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_338416__$1,inst_338414);
} else
{if((state_val_338417 === 4))
{var inst_338396 = (state_338416[9]);var inst_338396__$1 = (state_338416[2]);var inst_338397 = (inst_338396__$1 == null);var inst_338398 = cljs.core.not.call(null,inst_338397);var state_338416__$1 = (function (){var statearr_338421 = state_338416;(statearr_338421[9] = inst_338396__$1);
return statearr_338421;
})();if(inst_338398)
{var statearr_338422_338443 = state_338416__$1;(statearr_338422_338443[1] = 5);
} else
{var statearr_338423_338444 = state_338416__$1;(statearr_338423_338444[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_338417 === 5))
{var inst_338393 = (state_338416[7]);var inst_338396 = (state_338416[9]);var inst_338400 = cljs.core._EQ_.call(null,inst_338396,inst_338393);var state_338416__$1 = state_338416;if(inst_338400)
{var statearr_338424_338445 = state_338416__$1;(statearr_338424_338445[1] = 8);
} else
{var statearr_338425_338446 = state_338416__$1;(statearr_338425_338446[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_338417 === 6))
{var state_338416__$1 = state_338416;var statearr_338427_338447 = state_338416__$1;(statearr_338427_338447[2] = null);
(statearr_338427_338447[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_338417 === 7))
{var inst_338411 = (state_338416[2]);var state_338416__$1 = state_338416;var statearr_338428_338448 = state_338416__$1;(statearr_338428_338448[2] = inst_338411);
(statearr_338428_338448[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_338417 === 8))
{var inst_338393 = (state_338416[7]);var tmp338426 = inst_338393;var inst_338393__$1 = tmp338426;var state_338416__$1 = (function (){var statearr_338429 = state_338416;(statearr_338429[7] = inst_338393__$1);
return statearr_338429;
})();var statearr_338430_338449 = state_338416__$1;(statearr_338430_338449[2] = null);
(statearr_338430_338449[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_338417 === 9))
{var inst_338396 = (state_338416[9]);var state_338416__$1 = state_338416;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_338416__$1,11,out,inst_338396);
} else
{if((state_val_338417 === 10))
{var inst_338408 = (state_338416[2]);var state_338416__$1 = state_338416;var statearr_338431_338450 = state_338416__$1;(statearr_338431_338450[2] = inst_338408);
(statearr_338431_338450[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_338417 === 11))
{var inst_338396 = (state_338416[9]);var inst_338405 = (state_338416[2]);var inst_338393 = inst_338396;var state_338416__$1 = (function (){var statearr_338432 = state_338416;(statearr_338432[7] = inst_338393);
(statearr_338432[10] = inst_338405);
return statearr_338432;
})();var statearr_338433_338451 = state_338416__$1;(statearr_338433_338451[2] = null);
(statearr_338433_338451[1] = 2);
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
});return ((function (switch__17981__auto__){
return (function() {
var state_machine__17982__auto__ = null;
var state_machine__17982__auto____0 = (function (){var statearr_338437 = (new Array(11));(statearr_338437[0] = state_machine__17982__auto__);
(statearr_338437[1] = 1);
return statearr_338437;
});
var state_machine__17982__auto____1 = (function (state_338416){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_338416);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e338438){if((e338438 instanceof Object))
{var ex__17985__auto__ = e338438;var statearr_338439_338452 = state_338416;(statearr_338439_338452[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_338416);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e338438;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__338453 = state_338416;
state_338416 = G__338453;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_338416){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_338416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_338440 = f__18052__auto__.call(null);(statearr_338440[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___338441);
return statearr_338440;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18053__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18051__auto___338588 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_338558){var state_val_338559 = (state_338558[1]);if((state_val_338559 === 1))
{var inst_338521 = (new Array(n));var inst_338522 = inst_338521;var inst_338523 = 0;var state_338558__$1 = (function (){var statearr_338560 = state_338558;(statearr_338560[7] = inst_338522);
(statearr_338560[8] = inst_338523);
return statearr_338560;
})();var statearr_338561_338589 = state_338558__$1;(statearr_338561_338589[2] = null);
(statearr_338561_338589[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_338559 === 2))
{var state_338558__$1 = state_338558;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_338558__$1,4,ch);
} else
{if((state_val_338559 === 3))
{var inst_338556 = (state_338558[2]);var state_338558__$1 = state_338558;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_338558__$1,inst_338556);
} else
{if((state_val_338559 === 4))
{var inst_338526 = (state_338558[9]);var inst_338526__$1 = (state_338558[2]);var inst_338527 = (inst_338526__$1 == null);var inst_338528 = cljs.core.not.call(null,inst_338527);var state_338558__$1 = (function (){var statearr_338562 = state_338558;(statearr_338562[9] = inst_338526__$1);
return statearr_338562;
})();if(inst_338528)
{var statearr_338563_338590 = state_338558__$1;(statearr_338563_338590[1] = 5);
} else
{var statearr_338564_338591 = state_338558__$1;(statearr_338564_338591[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_338559 === 5))
{var inst_338522 = (state_338558[7]);var inst_338523 = (state_338558[8]);var inst_338531 = (state_338558[10]);var inst_338526 = (state_338558[9]);var inst_338530 = (inst_338522[inst_338523] = inst_338526);var inst_338531__$1 = (inst_338523 + 1);var inst_338532 = (inst_338531__$1 < n);var state_338558__$1 = (function (){var statearr_338565 = state_338558;(statearr_338565[10] = inst_338531__$1);
(statearr_338565[11] = inst_338530);
return statearr_338565;
})();if(cljs.core.truth_(inst_338532))
{var statearr_338566_338592 = state_338558__$1;(statearr_338566_338592[1] = 8);
} else
{var statearr_338567_338593 = state_338558__$1;(statearr_338567_338593[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_338559 === 6))
{var inst_338523 = (state_338558[8]);var inst_338544 = (inst_338523 > 0);var state_338558__$1 = state_338558;if(cljs.core.truth_(inst_338544))
{var statearr_338569_338594 = state_338558__$1;(statearr_338569_338594[1] = 12);
} else
{var statearr_338570_338595 = state_338558__$1;(statearr_338570_338595[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_338559 === 7))
{var inst_338554 = (state_338558[2]);var state_338558__$1 = state_338558;var statearr_338571_338596 = state_338558__$1;(statearr_338571_338596[2] = inst_338554);
(statearr_338571_338596[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_338559 === 8))
{var inst_338522 = (state_338558[7]);var inst_338531 = (state_338558[10]);var tmp338568 = inst_338522;var inst_338522__$1 = tmp338568;var inst_338523 = inst_338531;var state_338558__$1 = (function (){var statearr_338572 = state_338558;(statearr_338572[7] = inst_338522__$1);
(statearr_338572[8] = inst_338523);
return statearr_338572;
})();var statearr_338573_338597 = state_338558__$1;(statearr_338573_338597[2] = null);
(statearr_338573_338597[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_338559 === 9))
{var inst_338522 = (state_338558[7]);var inst_338536 = cljs.core.vec.call(null,inst_338522);var state_338558__$1 = state_338558;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_338558__$1,11,out,inst_338536);
} else
{if((state_val_338559 === 10))
{var inst_338542 = (state_338558[2]);var state_338558__$1 = state_338558;var statearr_338574_338598 = state_338558__$1;(statearr_338574_338598[2] = inst_338542);
(statearr_338574_338598[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_338559 === 11))
{var inst_338538 = (state_338558[2]);var inst_338539 = (new Array(n));var inst_338522 = inst_338539;var inst_338523 = 0;var state_338558__$1 = (function (){var statearr_338575 = state_338558;(statearr_338575[7] = inst_338522);
(statearr_338575[8] = inst_338523);
(statearr_338575[12] = inst_338538);
return statearr_338575;
})();var statearr_338576_338599 = state_338558__$1;(statearr_338576_338599[2] = null);
(statearr_338576_338599[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_338559 === 12))
{var inst_338522 = (state_338558[7]);var inst_338546 = cljs.core.vec.call(null,inst_338522);var state_338558__$1 = state_338558;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_338558__$1,15,out,inst_338546);
} else
{if((state_val_338559 === 13))
{var state_338558__$1 = state_338558;var statearr_338577_338600 = state_338558__$1;(statearr_338577_338600[2] = null);
(statearr_338577_338600[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_338559 === 14))
{var inst_338551 = (state_338558[2]);var inst_338552 = cljs.core.async.close_BANG_.call(null,out);var state_338558__$1 = (function (){var statearr_338578 = state_338558;(statearr_338578[13] = inst_338551);
return statearr_338578;
})();var statearr_338579_338601 = state_338558__$1;(statearr_338579_338601[2] = inst_338552);
(statearr_338579_338601[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_338559 === 15))
{var inst_338548 = (state_338558[2]);var state_338558__$1 = state_338558;var statearr_338580_338602 = state_338558__$1;(statearr_338580_338602[2] = inst_338548);
(statearr_338580_338602[1] = 14);
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
});return ((function (switch__17981__auto__){
return (function() {
var state_machine__17982__auto__ = null;
var state_machine__17982__auto____0 = (function (){var statearr_338584 = (new Array(14));(statearr_338584[0] = state_machine__17982__auto__);
(statearr_338584[1] = 1);
return statearr_338584;
});
var state_machine__17982__auto____1 = (function (state_338558){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_338558);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e338585){if((e338585 instanceof Object))
{var ex__17985__auto__ = e338585;var statearr_338586_338603 = state_338558;(statearr_338586_338603[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_338558);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e338585;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__338604 = state_338558;
state_338558 = G__338604;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_338558){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_338558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_338587 = f__18052__auto__.call(null);(statearr_338587[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___338588);
return statearr_338587;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18053__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18051__auto___338747 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18052__auto__ = (function (){var switch__17981__auto__ = (function (state_338717){var state_val_338718 = (state_338717[1]);if((state_val_338718 === 1))
{var inst_338676 = (new Array(0));var inst_338677 = inst_338676;var inst_338678 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_338717__$1 = (function (){var statearr_338719 = state_338717;(statearr_338719[7] = inst_338678);
(statearr_338719[8] = inst_338677);
return statearr_338719;
})();var statearr_338720_338748 = state_338717__$1;(statearr_338720_338748[2] = null);
(statearr_338720_338748[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_338718 === 2))
{var state_338717__$1 = state_338717;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_338717__$1,4,ch);
} else
{if((state_val_338718 === 3))
{var inst_338715 = (state_338717[2]);var state_338717__$1 = state_338717;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_338717__$1,inst_338715);
} else
{if((state_val_338718 === 4))
{var inst_338681 = (state_338717[9]);var inst_338681__$1 = (state_338717[2]);var inst_338682 = (inst_338681__$1 == null);var inst_338683 = cljs.core.not.call(null,inst_338682);var state_338717__$1 = (function (){var statearr_338721 = state_338717;(statearr_338721[9] = inst_338681__$1);
return statearr_338721;
})();if(inst_338683)
{var statearr_338722_338749 = state_338717__$1;(statearr_338722_338749[1] = 5);
} else
{var statearr_338723_338750 = state_338717__$1;(statearr_338723_338750[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_338718 === 5))
{var inst_338685 = (state_338717[10]);var inst_338681 = (state_338717[9]);var inst_338678 = (state_338717[7]);var inst_338685__$1 = f.call(null,inst_338681);var inst_338686 = cljs.core._EQ_.call(null,inst_338685__$1,inst_338678);var inst_338687 = cljs.core.keyword_identical_QMARK_.call(null,inst_338678,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_338688 = (inst_338686) || (inst_338687);var state_338717__$1 = (function (){var statearr_338724 = state_338717;(statearr_338724[10] = inst_338685__$1);
return statearr_338724;
})();if(cljs.core.truth_(inst_338688))
{var statearr_338725_338751 = state_338717__$1;(statearr_338725_338751[1] = 8);
} else
{var statearr_338726_338752 = state_338717__$1;(statearr_338726_338752[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_338718 === 6))
{var inst_338677 = (state_338717[8]);var inst_338702 = inst_338677.length;var inst_338703 = (inst_338702 > 0);var state_338717__$1 = state_338717;if(cljs.core.truth_(inst_338703))
{var statearr_338728_338753 = state_338717__$1;(statearr_338728_338753[1] = 12);
} else
{var statearr_338729_338754 = state_338717__$1;(statearr_338729_338754[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_338718 === 7))
{var inst_338713 = (state_338717[2]);var state_338717__$1 = state_338717;var statearr_338730_338755 = state_338717__$1;(statearr_338730_338755[2] = inst_338713);
(statearr_338730_338755[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_338718 === 8))
{var inst_338685 = (state_338717[10]);var inst_338681 = (state_338717[9]);var inst_338677 = (state_338717[8]);var inst_338690 = inst_338677.push(inst_338681);var tmp338727 = inst_338677;var inst_338677__$1 = tmp338727;var inst_338678 = inst_338685;var state_338717__$1 = (function (){var statearr_338731 = state_338717;(statearr_338731[11] = inst_338690);
(statearr_338731[7] = inst_338678);
(statearr_338731[8] = inst_338677__$1);
return statearr_338731;
})();var statearr_338732_338756 = state_338717__$1;(statearr_338732_338756[2] = null);
(statearr_338732_338756[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_338718 === 9))
{var inst_338677 = (state_338717[8]);var inst_338693 = cljs.core.vec.call(null,inst_338677);var state_338717__$1 = state_338717;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_338717__$1,11,out,inst_338693);
} else
{if((state_val_338718 === 10))
{var inst_338700 = (state_338717[2]);var state_338717__$1 = state_338717;var statearr_338733_338757 = state_338717__$1;(statearr_338733_338757[2] = inst_338700);
(statearr_338733_338757[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_338718 === 11))
{var inst_338685 = (state_338717[10]);var inst_338681 = (state_338717[9]);var inst_338695 = (state_338717[2]);var inst_338696 = (new Array(0));var inst_338697 = inst_338696.push(inst_338681);var inst_338677 = inst_338696;var inst_338678 = inst_338685;var state_338717__$1 = (function (){var statearr_338734 = state_338717;(statearr_338734[12] = inst_338697);
(statearr_338734[13] = inst_338695);
(statearr_338734[7] = inst_338678);
(statearr_338734[8] = inst_338677);
return statearr_338734;
})();var statearr_338735_338758 = state_338717__$1;(statearr_338735_338758[2] = null);
(statearr_338735_338758[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_338718 === 12))
{var inst_338677 = (state_338717[8]);var inst_338705 = cljs.core.vec.call(null,inst_338677);var state_338717__$1 = state_338717;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_338717__$1,15,out,inst_338705);
} else
{if((state_val_338718 === 13))
{var state_338717__$1 = state_338717;var statearr_338736_338759 = state_338717__$1;(statearr_338736_338759[2] = null);
(statearr_338736_338759[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_338718 === 14))
{var inst_338710 = (state_338717[2]);var inst_338711 = cljs.core.async.close_BANG_.call(null,out);var state_338717__$1 = (function (){var statearr_338737 = state_338717;(statearr_338737[14] = inst_338710);
return statearr_338737;
})();var statearr_338738_338760 = state_338717__$1;(statearr_338738_338760[2] = inst_338711);
(statearr_338738_338760[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_338718 === 15))
{var inst_338707 = (state_338717[2]);var state_338717__$1 = state_338717;var statearr_338739_338761 = state_338717__$1;(statearr_338739_338761[2] = inst_338707);
(statearr_338739_338761[1] = 14);
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
});return ((function (switch__17981__auto__){
return (function() {
var state_machine__17982__auto__ = null;
var state_machine__17982__auto____0 = (function (){var statearr_338743 = (new Array(15));(statearr_338743[0] = state_machine__17982__auto__);
(statearr_338743[1] = 1);
return statearr_338743;
});
var state_machine__17982__auto____1 = (function (state_338717){while(true){
var ret_value__17983__auto__ = (function (){try{while(true){
var result__17984__auto__ = switch__17981__auto__.call(null,state_338717);if(cljs.core.keyword_identical_QMARK_.call(null,result__17984__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__17984__auto__;
}
break;
}
}catch (e338744){if((e338744 instanceof Object))
{var ex__17985__auto__ = e338744;var statearr_338745_338762 = state_338717;(statearr_338745_338762[5] = ex__17985__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_338717);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e338744;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17983__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__338763 = state_338717;
state_338717 = G__338763;
continue;
}
} else
{return ret_value__17983__auto__;
}
break;
}
});
state_machine__17982__auto__ = function(state_338717){
switch(arguments.length){
case 0:
return state_machine__17982__auto____0.call(this);
case 1:
return state_machine__17982__auto____1.call(this,state_338717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__17982__auto____0;
state_machine__17982__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__17982__auto____1;
return state_machine__17982__auto__;
})()
;})(switch__17981__auto__))
})();var state__18053__auto__ = (function (){var statearr_338746 = f__18052__auto__.call(null);(statearr_338746[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18051__auto___338747);
return statearr_338746;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18053__auto__);
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