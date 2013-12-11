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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t31546 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31546 = (function (f,fn_handler,meta31547){
this.f = f;
this.fn_handler = fn_handler;
this.meta31547 = meta31547;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31546.cljs$lang$type = true;
cljs.core.async.t31546.cljs$lang$ctorStr = "cljs.core.async/t31546";
cljs.core.async.t31546.cljs$lang$ctorPrWriter = (function (this__15685__auto__,writer__15686__auto__,opt__15687__auto__){return cljs.core._write.call(null,writer__15686__auto__,"cljs.core.async/t31546");
});
cljs.core.async.t31546.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t31546.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t31546.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t31546.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31548){var self__ = this;
var _31548__$1 = this;return self__.meta31547;
});
cljs.core.async.t31546.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31548,meta31547__$1){var self__ = this;
var _31548__$1 = this;return (new cljs.core.async.t31546(self__.f,self__.fn_handler,meta31547__$1));
});
cljs.core.async.__GT_t31546 = (function __GT_t31546(f__$1,fn_handler__$1,meta31547){return (new cljs.core.async.t31546(f__$1,fn_handler__$1,meta31547));
});
}
return (new cljs.core.async.t31546(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__31550 = buff;if(G__31550)
{var bit__15767__auto__ = null;if(cljs.core.truth_((function (){var or__15141__auto__ = bit__15767__auto__;if(cljs.core.truth_(or__15141__auto__))
{return or__15141__auto__;
} else
{return G__31550.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__31550.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__31550);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__31550);
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
{var val_31551 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_31551);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_31551);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__15129__auto__ = ret;if(cljs.core.truth_(and__15129__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__15129__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__15964__auto___31552 = n;var x_31553 = 0;while(true){
if((x_31553 < n__15964__auto___31552))
{(a[x_31553] = 0);
{
var G__31554 = (x_31553 + 1);
x_31553 = G__31554;
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
var G__31555 = (i + 1);
i = G__31555;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t31559 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31559 = (function (flag,alt_flag,meta31560){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta31560 = meta31560;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31559.cljs$lang$type = true;
cljs.core.async.t31559.cljs$lang$ctorStr = "cljs.core.async/t31559";
cljs.core.async.t31559.cljs$lang$ctorPrWriter = (function (this__15685__auto__,writer__15686__auto__,opt__15687__auto__){return cljs.core._write.call(null,writer__15686__auto__,"cljs.core.async/t31559");
});
cljs.core.async.t31559.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t31559.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t31559.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t31559.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31561){var self__ = this;
var _31561__$1 = this;return self__.meta31560;
});
cljs.core.async.t31559.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31561,meta31560__$1){var self__ = this;
var _31561__$1 = this;return (new cljs.core.async.t31559(self__.flag,self__.alt_flag,meta31560__$1));
});
cljs.core.async.__GT_t31559 = (function __GT_t31559(flag__$1,alt_flag__$1,meta31560){return (new cljs.core.async.t31559(flag__$1,alt_flag__$1,meta31560));
});
}
return (new cljs.core.async.t31559(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t31565 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31565 = (function (cb,flag,alt_handler,meta31566){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta31566 = meta31566;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31565.cljs$lang$type = true;
cljs.core.async.t31565.cljs$lang$ctorStr = "cljs.core.async/t31565";
cljs.core.async.t31565.cljs$lang$ctorPrWriter = (function (this__15685__auto__,writer__15686__auto__,opt__15687__auto__){return cljs.core._write.call(null,writer__15686__auto__,"cljs.core.async/t31565");
});
cljs.core.async.t31565.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t31565.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t31565.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t31565.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31567){var self__ = this;
var _31567__$1 = this;return self__.meta31566;
});
cljs.core.async.t31565.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31567,meta31566__$1){var self__ = this;
var _31567__$1 = this;return (new cljs.core.async.t31565(self__.cb,self__.flag,self__.alt_handler,meta31566__$1));
});
cljs.core.async.__GT_t31565 = (function __GT_t31565(cb__$1,flag__$1,alt_handler__$1,meta31566){return (new cljs.core.async.t31565(cb__$1,flag__$1,alt_handler__$1,meta31566));
});
}
return (new cljs.core.async.t31565(cb,flag,alt_handler,null));
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
return (function (p1__31568_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31568_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__15141__auto__ = wport;if(cljs.core.truth_(or__15141__auto__))
{return or__15141__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__31569 = (i + 1);
i = G__31569;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__15141__auto__ = ret;if(cljs.core.truth_(or__15141__auto__))
{return or__15141__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4098__auto__ = (function (){var and__15129__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__15129__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__15129__auto__;
}
})();if(cljs.core.truth_(temp__4098__auto__))
{var got = temp__4098__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
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
var alts_BANG___delegate = function (ports,p__31570){var map__31572 = p__31570;var map__31572__$1 = ((cljs.core.seq_QMARK_.call(null,map__31572))?cljs.core.apply.call(null,cljs.core.hash_map,map__31572):map__31572);var opts = map__31572__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__31570 = null;if (arguments.length > 1) {
  p__31570 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__31570);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__31573){
var ports = cljs.core.first(arglist__31573);
var p__31570 = cljs.core.rest(arglist__31573);
return alts_BANG___delegate(ports,p__31570);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t31581 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31581 = (function (ch,f,map_LT_,meta31582){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta31582 = meta31582;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31581.cljs$lang$type = true;
cljs.core.async.t31581.cljs$lang$ctorStr = "cljs.core.async/t31581";
cljs.core.async.t31581.cljs$lang$ctorPrWriter = (function (this__15685__auto__,writer__15686__auto__,opt__15687__auto__){return cljs.core._write.call(null,writer__15686__auto__,"cljs.core.async/t31581");
});
cljs.core.async.t31581.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t31581.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t31581.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t31581.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t31584 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31584 = (function (fn1,_,meta31582,ch,f,map_LT_,meta31585){
this.fn1 = fn1;
this._ = _;
this.meta31582 = meta31582;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta31585 = meta31585;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31584.cljs$lang$type = true;
cljs.core.async.t31584.cljs$lang$ctorStr = "cljs.core.async/t31584";
cljs.core.async.t31584.cljs$lang$ctorPrWriter = (function (this__15685__auto__,writer__15686__auto__,opt__15687__auto__){return cljs.core._write.call(null,writer__15686__auto__,"cljs.core.async/t31584");
});
cljs.core.async.t31584.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t31584.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t31584.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t31584.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__31574_SHARP_){return f1.call(null,(((p1__31574_SHARP_ == null))?null:self__.f.call(null,p1__31574_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t31584.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31586){var self__ = this;
var _31586__$1 = this;return self__.meta31585;
});
cljs.core.async.t31584.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31586,meta31585__$1){var self__ = this;
var _31586__$1 = this;return (new cljs.core.async.t31584(self__.fn1,self__._,self__.meta31582,self__.ch,self__.f,self__.map_LT_,meta31585__$1));
});
cljs.core.async.__GT_t31584 = (function __GT_t31584(fn1__$1,___$2,meta31582__$1,ch__$2,f__$2,map_LT___$2,meta31585){return (new cljs.core.async.t31584(fn1__$1,___$2,meta31582__$1,ch__$2,f__$2,map_LT___$2,meta31585));
});
}
return (new cljs.core.async.t31584(fn1,___$1,self__.meta31582,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__15129__auto__ = ret;if(cljs.core.truth_(and__15129__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__15129__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t31581.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t31581.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t31581.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31583){var self__ = this;
var _31583__$1 = this;return self__.meta31582;
});
cljs.core.async.t31581.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31583,meta31582__$1){var self__ = this;
var _31583__$1 = this;return (new cljs.core.async.t31581(self__.ch,self__.f,self__.map_LT_,meta31582__$1));
});
cljs.core.async.__GT_t31581 = (function __GT_t31581(ch__$1,f__$1,map_LT___$1,meta31582){return (new cljs.core.async.t31581(ch__$1,f__$1,map_LT___$1,meta31582));
});
}
return (new cljs.core.async.t31581(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t31590 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31590 = (function (ch,f,map_GT_,meta31591){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta31591 = meta31591;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31590.cljs$lang$type = true;
cljs.core.async.t31590.cljs$lang$ctorStr = "cljs.core.async/t31590";
cljs.core.async.t31590.cljs$lang$ctorPrWriter = (function (this__15685__auto__,writer__15686__auto__,opt__15687__auto__){return cljs.core._write.call(null,writer__15686__auto__,"cljs.core.async/t31590");
});
cljs.core.async.t31590.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t31590.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t31590.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t31590.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t31590.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t31590.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t31590.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31592){var self__ = this;
var _31592__$1 = this;return self__.meta31591;
});
cljs.core.async.t31590.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31592,meta31591__$1){var self__ = this;
var _31592__$1 = this;return (new cljs.core.async.t31590(self__.ch,self__.f,self__.map_GT_,meta31591__$1));
});
cljs.core.async.__GT_t31590 = (function __GT_t31590(ch__$1,f__$1,map_GT___$1,meta31591){return (new cljs.core.async.t31590(ch__$1,f__$1,map_GT___$1,meta31591));
});
}
return (new cljs.core.async.t31590(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t31596 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31596 = (function (ch,p,filter_GT_,meta31597){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta31597 = meta31597;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31596.cljs$lang$type = true;
cljs.core.async.t31596.cljs$lang$ctorStr = "cljs.core.async/t31596";
cljs.core.async.t31596.cljs$lang$ctorPrWriter = (function (this__15685__auto__,writer__15686__auto__,opt__15687__auto__){return cljs.core._write.call(null,writer__15686__auto__,"cljs.core.async/t31596");
});
cljs.core.async.t31596.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t31596.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t31596.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t31596.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t31596.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t31596.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t31596.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31598){var self__ = this;
var _31598__$1 = this;return self__.meta31597;
});
cljs.core.async.t31596.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31598,meta31597__$1){var self__ = this;
var _31598__$1 = this;return (new cljs.core.async.t31596(self__.ch,self__.p,self__.filter_GT_,meta31597__$1));
});
cljs.core.async.__GT_t31596 = (function __GT_t31596(ch__$1,p__$1,filter_GT___$1,meta31597){return (new cljs.core.async.t31596(ch__$1,p__$1,filter_GT___$1,meta31597));
});
}
return (new cljs.core.async.t31596(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18976__auto___31681 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18977__auto__ = (function (){var switch__18906__auto__ = (function (state_31660){var state_val_31661 = (state_31660[1]);if((state_val_31661 === 1))
{var state_31660__$1 = state_31660;var statearr_31662_31682 = state_31660__$1;(statearr_31662_31682[2] = null);
(statearr_31662_31682[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31661 === 2))
{var state_31660__$1 = state_31660;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31660__$1,4,ch);
} else
{if((state_val_31661 === 3))
{var inst_31658 = (state_31660[2]);var state_31660__$1 = state_31660;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31660__$1,inst_31658);
} else
{if((state_val_31661 === 4))
{var inst_31642 = (state_31660[7]);var inst_31642__$1 = (state_31660[2]);var inst_31643 = (inst_31642__$1 == null);var state_31660__$1 = (function (){var statearr_31663 = state_31660;(statearr_31663[7] = inst_31642__$1);
return statearr_31663;
})();if(cljs.core.truth_(inst_31643))
{var statearr_31664_31683 = state_31660__$1;(statearr_31664_31683[1] = 5);
} else
{var statearr_31665_31684 = state_31660__$1;(statearr_31665_31684[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31661 === 5))
{var inst_31645 = cljs.core.async.close_BANG_.call(null,out);var state_31660__$1 = state_31660;var statearr_31666_31685 = state_31660__$1;(statearr_31666_31685[2] = inst_31645);
(statearr_31666_31685[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31661 === 6))
{var inst_31642 = (state_31660[7]);var inst_31647 = p.call(null,inst_31642);var state_31660__$1 = state_31660;if(cljs.core.truth_(inst_31647))
{var statearr_31667_31686 = state_31660__$1;(statearr_31667_31686[1] = 8);
} else
{var statearr_31668_31687 = state_31660__$1;(statearr_31668_31687[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31661 === 7))
{var inst_31656 = (state_31660[2]);var state_31660__$1 = state_31660;var statearr_31669_31688 = state_31660__$1;(statearr_31669_31688[2] = inst_31656);
(statearr_31669_31688[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31661 === 8))
{var inst_31642 = (state_31660[7]);var state_31660__$1 = state_31660;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31660__$1,11,out,inst_31642);
} else
{if((state_val_31661 === 9))
{var state_31660__$1 = state_31660;var statearr_31670_31689 = state_31660__$1;(statearr_31670_31689[2] = null);
(statearr_31670_31689[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31661 === 10))
{var inst_31653 = (state_31660[2]);var state_31660__$1 = (function (){var statearr_31671 = state_31660;(statearr_31671[8] = inst_31653);
return statearr_31671;
})();var statearr_31672_31690 = state_31660__$1;(statearr_31672_31690[2] = null);
(statearr_31672_31690[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31661 === 11))
{var inst_31650 = (state_31660[2]);var state_31660__$1 = state_31660;var statearr_31673_31691 = state_31660__$1;(statearr_31673_31691[2] = inst_31650);
(statearr_31673_31691[1] = 10);
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
});return ((function (switch__18906__auto__){
return (function() {
var state_machine__18907__auto__ = null;
var state_machine__18907__auto____0 = (function (){var statearr_31677 = (new Array(9));(statearr_31677[0] = state_machine__18907__auto__);
(statearr_31677[1] = 1);
return statearr_31677;
});
var state_machine__18907__auto____1 = (function (state_31660){while(true){
var ret_value__18908__auto__ = (function (){try{while(true){
var result__18909__auto__ = switch__18906__auto__.call(null,state_31660);if(cljs.core.keyword_identical_QMARK_.call(null,result__18909__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18909__auto__;
}
break;
}
}catch (e31678){if((e31678 instanceof Object))
{var ex__18910__auto__ = e31678;var statearr_31679_31692 = state_31660;(statearr_31679_31692[5] = ex__18910__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31660);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31678;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18908__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31693 = state_31660;
state_31660 = G__31693;
continue;
}
} else
{return ret_value__18908__auto__;
}
break;
}
});
state_machine__18907__auto__ = function(state_31660){
switch(arguments.length){
case 0:
return state_machine__18907__auto____0.call(this);
case 1:
return state_machine__18907__auto____1.call(this,state_31660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18907__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18907__auto____0;
state_machine__18907__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18907__auto____1;
return state_machine__18907__auto__;
})()
;})(switch__18906__auto__))
})();var state__18978__auto__ = (function (){var statearr_31680 = f__18977__auto__.call(null);(statearr_31680[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18976__auto___31681);
return statearr_31680;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18978__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__18976__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18977__auto__ = (function (){var switch__18906__auto__ = (function (state_31845){var state_val_31846 = (state_31845[1]);if((state_val_31846 === 1))
{var state_31845__$1 = state_31845;var statearr_31847_31884 = state_31845__$1;(statearr_31847_31884[2] = null);
(statearr_31847_31884[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31846 === 2))
{var state_31845__$1 = state_31845;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31845__$1,4,in$);
} else
{if((state_val_31846 === 3))
{var inst_31843 = (state_31845[2]);var state_31845__$1 = state_31845;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31845__$1,inst_31843);
} else
{if((state_val_31846 === 4))
{var inst_31791 = (state_31845[7]);var inst_31791__$1 = (state_31845[2]);var inst_31792 = (inst_31791__$1 == null);var state_31845__$1 = (function (){var statearr_31848 = state_31845;(statearr_31848[7] = inst_31791__$1);
return statearr_31848;
})();if(cljs.core.truth_(inst_31792))
{var statearr_31849_31885 = state_31845__$1;(statearr_31849_31885[1] = 5);
} else
{var statearr_31850_31886 = state_31845__$1;(statearr_31850_31886[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31846 === 5))
{var inst_31794 = cljs.core.async.close_BANG_.call(null,out);var state_31845__$1 = state_31845;var statearr_31851_31887 = state_31845__$1;(statearr_31851_31887[2] = inst_31794);
(statearr_31851_31887[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31846 === 6))
{var inst_31791 = (state_31845[7]);var inst_31796 = f.call(null,inst_31791);var inst_31801 = cljs.core.seq.call(null,inst_31796);var inst_31802 = inst_31801;var inst_31803 = null;var inst_31804 = 0;var inst_31805 = 0;var state_31845__$1 = (function (){var statearr_31852 = state_31845;(statearr_31852[8] = inst_31802);
(statearr_31852[9] = inst_31805);
(statearr_31852[10] = inst_31803);
(statearr_31852[11] = inst_31804);
return statearr_31852;
})();var statearr_31853_31888 = state_31845__$1;(statearr_31853_31888[2] = null);
(statearr_31853_31888[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31846 === 7))
{var inst_31841 = (state_31845[2]);var state_31845__$1 = state_31845;var statearr_31854_31889 = state_31845__$1;(statearr_31854_31889[2] = inst_31841);
(statearr_31854_31889[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31846 === 8))
{var inst_31805 = (state_31845[9]);var inst_31804 = (state_31845[11]);var inst_31807 = (inst_31805 < inst_31804);var inst_31808 = inst_31807;var state_31845__$1 = state_31845;if(cljs.core.truth_(inst_31808))
{var statearr_31855_31890 = state_31845__$1;(statearr_31855_31890[1] = 10);
} else
{var statearr_31856_31891 = state_31845__$1;(statearr_31856_31891[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31846 === 9))
{var inst_31838 = (state_31845[2]);var state_31845__$1 = (function (){var statearr_31857 = state_31845;(statearr_31857[12] = inst_31838);
return statearr_31857;
})();var statearr_31858_31892 = state_31845__$1;(statearr_31858_31892[2] = null);
(statearr_31858_31892[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31846 === 10))
{var inst_31805 = (state_31845[9]);var inst_31803 = (state_31845[10]);var inst_31810 = cljs.core._nth.call(null,inst_31803,inst_31805);var state_31845__$1 = state_31845;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31845__$1,13,out,inst_31810);
} else
{if((state_val_31846 === 11))
{var inst_31802 = (state_31845[8]);var inst_31816 = (state_31845[13]);var inst_31816__$1 = cljs.core.seq.call(null,inst_31802);var state_31845__$1 = (function (){var statearr_31862 = state_31845;(statearr_31862[13] = inst_31816__$1);
return statearr_31862;
})();if(inst_31816__$1)
{var statearr_31863_31893 = state_31845__$1;(statearr_31863_31893[1] = 14);
} else
{var statearr_31864_31894 = state_31845__$1;(statearr_31864_31894[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31846 === 12))
{var inst_31836 = (state_31845[2]);var state_31845__$1 = state_31845;var statearr_31865_31895 = state_31845__$1;(statearr_31865_31895[2] = inst_31836);
(statearr_31865_31895[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31846 === 13))
{var inst_31802 = (state_31845[8]);var inst_31805 = (state_31845[9]);var inst_31803 = (state_31845[10]);var inst_31804 = (state_31845[11]);var inst_31812 = (state_31845[2]);var inst_31813 = (inst_31805 + 1);var tmp31859 = inst_31802;var tmp31860 = inst_31803;var tmp31861 = inst_31804;var inst_31802__$1 = tmp31859;var inst_31803__$1 = tmp31860;var inst_31804__$1 = tmp31861;var inst_31805__$1 = inst_31813;var state_31845__$1 = (function (){var statearr_31866 = state_31845;(statearr_31866[8] = inst_31802__$1);
(statearr_31866[9] = inst_31805__$1);
(statearr_31866[10] = inst_31803__$1);
(statearr_31866[11] = inst_31804__$1);
(statearr_31866[14] = inst_31812);
return statearr_31866;
})();var statearr_31867_31896 = state_31845__$1;(statearr_31867_31896[2] = null);
(statearr_31867_31896[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31846 === 14))
{var inst_31816 = (state_31845[13]);var inst_31818 = cljs.core.chunked_seq_QMARK_.call(null,inst_31816);var state_31845__$1 = state_31845;if(inst_31818)
{var statearr_31868_31897 = state_31845__$1;(statearr_31868_31897[1] = 17);
} else
{var statearr_31869_31898 = state_31845__$1;(statearr_31869_31898[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31846 === 15))
{var state_31845__$1 = state_31845;var statearr_31870_31899 = state_31845__$1;(statearr_31870_31899[2] = null);
(statearr_31870_31899[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31846 === 16))
{var inst_31834 = (state_31845[2]);var state_31845__$1 = state_31845;var statearr_31871_31900 = state_31845__$1;(statearr_31871_31900[2] = inst_31834);
(statearr_31871_31900[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31846 === 17))
{var inst_31816 = (state_31845[13]);var inst_31820 = cljs.core.chunk_first.call(null,inst_31816);var inst_31821 = cljs.core.chunk_rest.call(null,inst_31816);var inst_31822 = cljs.core.count.call(null,inst_31820);var inst_31802 = inst_31821;var inst_31803 = inst_31820;var inst_31804 = inst_31822;var inst_31805 = 0;var state_31845__$1 = (function (){var statearr_31872 = state_31845;(statearr_31872[8] = inst_31802);
(statearr_31872[9] = inst_31805);
(statearr_31872[10] = inst_31803);
(statearr_31872[11] = inst_31804);
return statearr_31872;
})();var statearr_31873_31901 = state_31845__$1;(statearr_31873_31901[2] = null);
(statearr_31873_31901[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31846 === 18))
{var inst_31816 = (state_31845[13]);var inst_31825 = cljs.core.first.call(null,inst_31816);var state_31845__$1 = state_31845;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31845__$1,20,out,inst_31825);
} else
{if((state_val_31846 === 19))
{var inst_31831 = (state_31845[2]);var state_31845__$1 = state_31845;var statearr_31874_31902 = state_31845__$1;(statearr_31874_31902[2] = inst_31831);
(statearr_31874_31902[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31846 === 20))
{var inst_31816 = (state_31845[13]);var inst_31827 = (state_31845[2]);var inst_31828 = cljs.core.next.call(null,inst_31816);var inst_31802 = inst_31828;var inst_31803 = null;var inst_31804 = 0;var inst_31805 = 0;var state_31845__$1 = (function (){var statearr_31875 = state_31845;(statearr_31875[15] = inst_31827);
(statearr_31875[8] = inst_31802);
(statearr_31875[9] = inst_31805);
(statearr_31875[10] = inst_31803);
(statearr_31875[11] = inst_31804);
return statearr_31875;
})();var statearr_31876_31903 = state_31845__$1;(statearr_31876_31903[2] = null);
(statearr_31876_31903[1] = 8);
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
});return ((function (switch__18906__auto__){
return (function() {
var state_machine__18907__auto__ = null;
var state_machine__18907__auto____0 = (function (){var statearr_31880 = (new Array(16));(statearr_31880[0] = state_machine__18907__auto__);
(statearr_31880[1] = 1);
return statearr_31880;
});
var state_machine__18907__auto____1 = (function (state_31845){while(true){
var ret_value__18908__auto__ = (function (){try{while(true){
var result__18909__auto__ = switch__18906__auto__.call(null,state_31845);if(cljs.core.keyword_identical_QMARK_.call(null,result__18909__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18909__auto__;
}
break;
}
}catch (e31881){if((e31881 instanceof Object))
{var ex__18910__auto__ = e31881;var statearr_31882_31904 = state_31845;(statearr_31882_31904[5] = ex__18910__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31845);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31881;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18908__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31905 = state_31845;
state_31845 = G__31905;
continue;
}
} else
{return ret_value__18908__auto__;
}
break;
}
});
state_machine__18907__auto__ = function(state_31845){
switch(arguments.length){
case 0:
return state_machine__18907__auto____0.call(this);
case 1:
return state_machine__18907__auto____1.call(this,state_31845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18907__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18907__auto____0;
state_machine__18907__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18907__auto____1;
return state_machine__18907__auto__;
})()
;})(switch__18906__auto__))
})();var state__18978__auto__ = (function (){var statearr_31883 = f__18977__auto__.call(null);(statearr_31883[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18976__auto__);
return statearr_31883;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18978__auto__);
}));
return c__18976__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__18976__auto___31986 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18977__auto__ = (function (){var switch__18906__auto__ = (function (state_31965){var state_val_31966 = (state_31965[1]);if((state_val_31966 === 1))
{var state_31965__$1 = state_31965;var statearr_31967_31987 = state_31965__$1;(statearr_31967_31987[2] = null);
(statearr_31967_31987[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31966 === 2))
{var state_31965__$1 = state_31965;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31965__$1,4,from);
} else
{if((state_val_31966 === 3))
{var inst_31963 = (state_31965[2]);var state_31965__$1 = state_31965;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31965__$1,inst_31963);
} else
{if((state_val_31966 === 4))
{var inst_31948 = (state_31965[7]);var inst_31948__$1 = (state_31965[2]);var inst_31949 = (inst_31948__$1 == null);var state_31965__$1 = (function (){var statearr_31968 = state_31965;(statearr_31968[7] = inst_31948__$1);
return statearr_31968;
})();if(cljs.core.truth_(inst_31949))
{var statearr_31969_31988 = state_31965__$1;(statearr_31969_31988[1] = 5);
} else
{var statearr_31970_31989 = state_31965__$1;(statearr_31970_31989[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31966 === 5))
{var state_31965__$1 = state_31965;if(cljs.core.truth_(close_QMARK_))
{var statearr_31971_31990 = state_31965__$1;(statearr_31971_31990[1] = 8);
} else
{var statearr_31972_31991 = state_31965__$1;(statearr_31972_31991[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31966 === 6))
{var inst_31948 = (state_31965[7]);var state_31965__$1 = state_31965;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31965__$1,11,to,inst_31948);
} else
{if((state_val_31966 === 7))
{var inst_31961 = (state_31965[2]);var state_31965__$1 = state_31965;var statearr_31973_31992 = state_31965__$1;(statearr_31973_31992[2] = inst_31961);
(statearr_31973_31992[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31966 === 8))
{var inst_31952 = cljs.core.async.close_BANG_.call(null,to);var state_31965__$1 = state_31965;var statearr_31974_31993 = state_31965__$1;(statearr_31974_31993[2] = inst_31952);
(statearr_31974_31993[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31966 === 9))
{var state_31965__$1 = state_31965;var statearr_31975_31994 = state_31965__$1;(statearr_31975_31994[2] = null);
(statearr_31975_31994[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31966 === 10))
{var inst_31955 = (state_31965[2]);var state_31965__$1 = state_31965;var statearr_31976_31995 = state_31965__$1;(statearr_31976_31995[2] = inst_31955);
(statearr_31976_31995[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31966 === 11))
{var inst_31958 = (state_31965[2]);var state_31965__$1 = (function (){var statearr_31977 = state_31965;(statearr_31977[8] = inst_31958);
return statearr_31977;
})();var statearr_31978_31996 = state_31965__$1;(statearr_31978_31996[2] = null);
(statearr_31978_31996[1] = 2);
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
});return ((function (switch__18906__auto__){
return (function() {
var state_machine__18907__auto__ = null;
var state_machine__18907__auto____0 = (function (){var statearr_31982 = (new Array(9));(statearr_31982[0] = state_machine__18907__auto__);
(statearr_31982[1] = 1);
return statearr_31982;
});
var state_machine__18907__auto____1 = (function (state_31965){while(true){
var ret_value__18908__auto__ = (function (){try{while(true){
var result__18909__auto__ = switch__18906__auto__.call(null,state_31965);if(cljs.core.keyword_identical_QMARK_.call(null,result__18909__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18909__auto__;
}
break;
}
}catch (e31983){if((e31983 instanceof Object))
{var ex__18910__auto__ = e31983;var statearr_31984_31997 = state_31965;(statearr_31984_31997[5] = ex__18910__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31965);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31983;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18908__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31998 = state_31965;
state_31965 = G__31998;
continue;
}
} else
{return ret_value__18908__auto__;
}
break;
}
});
state_machine__18907__auto__ = function(state_31965){
switch(arguments.length){
case 0:
return state_machine__18907__auto____0.call(this);
case 1:
return state_machine__18907__auto____1.call(this,state_31965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18907__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18907__auto____0;
state_machine__18907__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18907__auto____1;
return state_machine__18907__auto__;
})()
;})(switch__18906__auto__))
})();var state__18978__auto__ = (function (){var statearr_31985 = f__18977__auto__.call(null);(statearr_31985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18976__auto___31986);
return statearr_31985;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18978__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__18976__auto___32085 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18977__auto__ = (function (){var switch__18906__auto__ = (function (state_32063){var state_val_32064 = (state_32063[1]);if((state_val_32064 === 1))
{var state_32063__$1 = state_32063;var statearr_32065_32086 = state_32063__$1;(statearr_32065_32086[2] = null);
(statearr_32065_32086[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32064 === 2))
{var state_32063__$1 = state_32063;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32063__$1,4,ch);
} else
{if((state_val_32064 === 3))
{var inst_32061 = (state_32063[2]);var state_32063__$1 = state_32063;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32063__$1,inst_32061);
} else
{if((state_val_32064 === 4))
{var inst_32044 = (state_32063[7]);var inst_32044__$1 = (state_32063[2]);var inst_32045 = (inst_32044__$1 == null);var state_32063__$1 = (function (){var statearr_32066 = state_32063;(statearr_32066[7] = inst_32044__$1);
return statearr_32066;
})();if(cljs.core.truth_(inst_32045))
{var statearr_32067_32087 = state_32063__$1;(statearr_32067_32087[1] = 5);
} else
{var statearr_32068_32088 = state_32063__$1;(statearr_32068_32088[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32064 === 5))
{var inst_32047 = cljs.core.async.close_BANG_.call(null,tc);var inst_32048 = cljs.core.async.close_BANG_.call(null,fc);var state_32063__$1 = (function (){var statearr_32069 = state_32063;(statearr_32069[8] = inst_32047);
return statearr_32069;
})();var statearr_32070_32089 = state_32063__$1;(statearr_32070_32089[2] = inst_32048);
(statearr_32070_32089[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32064 === 6))
{var inst_32044 = (state_32063[7]);var inst_32050 = p.call(null,inst_32044);var state_32063__$1 = state_32063;if(cljs.core.truth_(inst_32050))
{var statearr_32071_32090 = state_32063__$1;(statearr_32071_32090[1] = 9);
} else
{var statearr_32072_32091 = state_32063__$1;(statearr_32072_32091[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32064 === 7))
{var inst_32059 = (state_32063[2]);var state_32063__$1 = state_32063;var statearr_32073_32092 = state_32063__$1;(statearr_32073_32092[2] = inst_32059);
(statearr_32073_32092[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32064 === 8))
{var inst_32056 = (state_32063[2]);var state_32063__$1 = (function (){var statearr_32074 = state_32063;(statearr_32074[9] = inst_32056);
return statearr_32074;
})();var statearr_32075_32093 = state_32063__$1;(statearr_32075_32093[2] = null);
(statearr_32075_32093[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32064 === 9))
{var state_32063__$1 = state_32063;var statearr_32076_32094 = state_32063__$1;(statearr_32076_32094[2] = tc);
(statearr_32076_32094[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32064 === 10))
{var state_32063__$1 = state_32063;var statearr_32077_32095 = state_32063__$1;(statearr_32077_32095[2] = fc);
(statearr_32077_32095[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32064 === 11))
{var inst_32044 = (state_32063[7]);var inst_32054 = (state_32063[2]);var state_32063__$1 = state_32063;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32063__$1,8,inst_32054,inst_32044);
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
});return ((function (switch__18906__auto__){
return (function() {
var state_machine__18907__auto__ = null;
var state_machine__18907__auto____0 = (function (){var statearr_32081 = (new Array(10));(statearr_32081[0] = state_machine__18907__auto__);
(statearr_32081[1] = 1);
return statearr_32081;
});
var state_machine__18907__auto____1 = (function (state_32063){while(true){
var ret_value__18908__auto__ = (function (){try{while(true){
var result__18909__auto__ = switch__18906__auto__.call(null,state_32063);if(cljs.core.keyword_identical_QMARK_.call(null,result__18909__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18909__auto__;
}
break;
}
}catch (e32082){if((e32082 instanceof Object))
{var ex__18910__auto__ = e32082;var statearr_32083_32096 = state_32063;(statearr_32083_32096[5] = ex__18910__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32063);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32082;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18908__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32097 = state_32063;
state_32063 = G__32097;
continue;
}
} else
{return ret_value__18908__auto__;
}
break;
}
});
state_machine__18907__auto__ = function(state_32063){
switch(arguments.length){
case 0:
return state_machine__18907__auto____0.call(this);
case 1:
return state_machine__18907__auto____1.call(this,state_32063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18907__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18907__auto____0;
state_machine__18907__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18907__auto____1;
return state_machine__18907__auto__;
})()
;})(switch__18906__auto__))
})();var state__18978__auto__ = (function (){var statearr_32084 = f__18977__auto__.call(null);(statearr_32084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18976__auto___32085);
return statearr_32084;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18978__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__18976__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18977__auto__ = (function (){var switch__18906__auto__ = (function (state_32144){var state_val_32145 = (state_32144[1]);if((state_val_32145 === 7))
{var inst_32140 = (state_32144[2]);var state_32144__$1 = state_32144;var statearr_32146_32162 = state_32144__$1;(statearr_32146_32162[2] = inst_32140);
(statearr_32146_32162[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32145 === 6))
{var inst_32133 = (state_32144[7]);var inst_32130 = (state_32144[8]);var inst_32137 = f.call(null,inst_32130,inst_32133);var inst_32130__$1 = inst_32137;var state_32144__$1 = (function (){var statearr_32147 = state_32144;(statearr_32147[8] = inst_32130__$1);
return statearr_32147;
})();var statearr_32148_32163 = state_32144__$1;(statearr_32148_32163[2] = null);
(statearr_32148_32163[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32145 === 5))
{var inst_32130 = (state_32144[8]);var state_32144__$1 = state_32144;var statearr_32149_32164 = state_32144__$1;(statearr_32149_32164[2] = inst_32130);
(statearr_32149_32164[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32145 === 4))
{var inst_32133 = (state_32144[7]);var inst_32133__$1 = (state_32144[2]);var inst_32134 = (inst_32133__$1 == null);var state_32144__$1 = (function (){var statearr_32150 = state_32144;(statearr_32150[7] = inst_32133__$1);
return statearr_32150;
})();if(cljs.core.truth_(inst_32134))
{var statearr_32151_32165 = state_32144__$1;(statearr_32151_32165[1] = 5);
} else
{var statearr_32152_32166 = state_32144__$1;(statearr_32152_32166[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32145 === 3))
{var inst_32142 = (state_32144[2]);var state_32144__$1 = state_32144;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32144__$1,inst_32142);
} else
{if((state_val_32145 === 2))
{var state_32144__$1 = state_32144;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32144__$1,4,ch);
} else
{if((state_val_32145 === 1))
{var inst_32130 = init;var state_32144__$1 = (function (){var statearr_32153 = state_32144;(statearr_32153[8] = inst_32130);
return statearr_32153;
})();var statearr_32154_32167 = state_32144__$1;(statearr_32154_32167[2] = null);
(statearr_32154_32167[1] = 2);
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
});return ((function (switch__18906__auto__){
return (function() {
var state_machine__18907__auto__ = null;
var state_machine__18907__auto____0 = (function (){var statearr_32158 = (new Array(9));(statearr_32158[0] = state_machine__18907__auto__);
(statearr_32158[1] = 1);
return statearr_32158;
});
var state_machine__18907__auto____1 = (function (state_32144){while(true){
var ret_value__18908__auto__ = (function (){try{while(true){
var result__18909__auto__ = switch__18906__auto__.call(null,state_32144);if(cljs.core.keyword_identical_QMARK_.call(null,result__18909__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18909__auto__;
}
break;
}
}catch (e32159){if((e32159 instanceof Object))
{var ex__18910__auto__ = e32159;var statearr_32160_32168 = state_32144;(statearr_32160_32168[5] = ex__18910__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32144);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32159;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18908__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32169 = state_32144;
state_32144 = G__32169;
continue;
}
} else
{return ret_value__18908__auto__;
}
break;
}
});
state_machine__18907__auto__ = function(state_32144){
switch(arguments.length){
case 0:
return state_machine__18907__auto____0.call(this);
case 1:
return state_machine__18907__auto____1.call(this,state_32144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18907__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18907__auto____0;
state_machine__18907__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18907__auto____1;
return state_machine__18907__auto__;
})()
;})(switch__18906__auto__))
})();var state__18978__auto__ = (function (){var statearr_32161 = f__18977__auto__.call(null);(statearr_32161[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18976__auto__);
return statearr_32161;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18978__auto__);
}));
return c__18976__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__18976__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18977__auto__ = (function (){var switch__18906__auto__ = (function (state_32231){var state_val_32232 = (state_32231[1]);if((state_val_32232 === 1))
{var inst_32211 = cljs.core.seq.call(null,coll);var inst_32212 = inst_32211;var state_32231__$1 = (function (){var statearr_32233 = state_32231;(statearr_32233[7] = inst_32212);
return statearr_32233;
})();var statearr_32234_32252 = state_32231__$1;(statearr_32234_32252[2] = null);
(statearr_32234_32252[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32232 === 2))
{var inst_32212 = (state_32231[7]);var state_32231__$1 = state_32231;if(cljs.core.truth_(inst_32212))
{var statearr_32235_32253 = state_32231__$1;(statearr_32235_32253[1] = 4);
} else
{var statearr_32236_32254 = state_32231__$1;(statearr_32236_32254[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32232 === 3))
{var inst_32229 = (state_32231[2]);var state_32231__$1 = state_32231;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32231__$1,inst_32229);
} else
{if((state_val_32232 === 4))
{var inst_32212 = (state_32231[7]);var inst_32215 = cljs.core.first.call(null,inst_32212);var state_32231__$1 = state_32231;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32231__$1,7,ch,inst_32215);
} else
{if((state_val_32232 === 5))
{var state_32231__$1 = state_32231;if(cljs.core.truth_(close_QMARK_))
{var statearr_32237_32255 = state_32231__$1;(statearr_32237_32255[1] = 8);
} else
{var statearr_32238_32256 = state_32231__$1;(statearr_32238_32256[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32232 === 6))
{var inst_32227 = (state_32231[2]);var state_32231__$1 = state_32231;var statearr_32239_32257 = state_32231__$1;(statearr_32239_32257[2] = inst_32227);
(statearr_32239_32257[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32232 === 7))
{var inst_32212 = (state_32231[7]);var inst_32217 = (state_32231[2]);var inst_32218 = cljs.core.next.call(null,inst_32212);var inst_32212__$1 = inst_32218;var state_32231__$1 = (function (){var statearr_32240 = state_32231;(statearr_32240[8] = inst_32217);
(statearr_32240[7] = inst_32212__$1);
return statearr_32240;
})();var statearr_32241_32258 = state_32231__$1;(statearr_32241_32258[2] = null);
(statearr_32241_32258[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32232 === 8))
{var inst_32222 = cljs.core.async.close_BANG_.call(null,ch);var state_32231__$1 = state_32231;var statearr_32242_32259 = state_32231__$1;(statearr_32242_32259[2] = inst_32222);
(statearr_32242_32259[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32232 === 9))
{var state_32231__$1 = state_32231;var statearr_32243_32260 = state_32231__$1;(statearr_32243_32260[2] = null);
(statearr_32243_32260[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32232 === 10))
{var inst_32225 = (state_32231[2]);var state_32231__$1 = state_32231;var statearr_32244_32261 = state_32231__$1;(statearr_32244_32261[2] = inst_32225);
(statearr_32244_32261[1] = 6);
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
});return ((function (switch__18906__auto__){
return (function() {
var state_machine__18907__auto__ = null;
var state_machine__18907__auto____0 = (function (){var statearr_32248 = (new Array(9));(statearr_32248[0] = state_machine__18907__auto__);
(statearr_32248[1] = 1);
return statearr_32248;
});
var state_machine__18907__auto____1 = (function (state_32231){while(true){
var ret_value__18908__auto__ = (function (){try{while(true){
var result__18909__auto__ = switch__18906__auto__.call(null,state_32231);if(cljs.core.keyword_identical_QMARK_.call(null,result__18909__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18909__auto__;
}
break;
}
}catch (e32249){if((e32249 instanceof Object))
{var ex__18910__auto__ = e32249;var statearr_32250_32262 = state_32231;(statearr_32250_32262[5] = ex__18910__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32231);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32249;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18908__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32263 = state_32231;
state_32231 = G__32263;
continue;
}
} else
{return ret_value__18908__auto__;
}
break;
}
});
state_machine__18907__auto__ = function(state_32231){
switch(arguments.length){
case 0:
return state_machine__18907__auto____0.call(this);
case 1:
return state_machine__18907__auto____1.call(this,state_32231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18907__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18907__auto____0;
state_machine__18907__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18907__auto____1;
return state_machine__18907__auto__;
})()
;})(switch__18906__auto__))
})();var state__18978__auto__ = (function (){var statearr_32251 = f__18977__auto__.call(null);(statearr_32251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18976__auto__);
return statearr_32251;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18978__auto__);
}));
return c__18976__auto__;
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
cljs.core.async.Mux = (function (){var obj32265 = {};return obj32265;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__15129__auto__ = _;if(and__15129__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__15129__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__15744__auto__ = (((_ == null))?null:_);return (function (){var or__15141__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__15744__auto__)]);if(or__15141__auto__)
{return or__15141__auto__;
} else
{var or__15141__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__15141__auto____$1)
{return or__15141__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj32267 = {};return obj32267;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__15129__auto__ = m;if(and__15129__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__15129__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__15744__auto__ = (((m == null))?null:m);return (function (){var or__15141__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__15744__auto__)]);if(or__15141__auto__)
{return or__15141__auto__;
} else
{var or__15141__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__15141__auto____$1)
{return or__15141__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__15129__auto__ = m;if(and__15129__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__15129__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__15744__auto__ = (((m == null))?null:m);return (function (){var or__15141__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__15744__auto__)]);if(or__15141__auto__)
{return or__15141__auto__;
} else
{var or__15141__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__15141__auto____$1)
{return or__15141__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__15129__auto__ = m;if(and__15129__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__15129__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__15744__auto__ = (((m == null))?null:m);return (function (){var or__15141__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__15744__auto__)]);if(or__15141__auto__)
{return or__15141__auto__;
} else
{var or__15141__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__15141__auto____$1)
{return or__15141__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t32491 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32491 = (function (cs,ch,mult,meta32492){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta32492 = meta32492;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32491.cljs$lang$type = true;
cljs.core.async.t32491.cljs$lang$ctorStr = "cljs.core.async/t32491";
cljs.core.async.t32491.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__15685__auto__,writer__15686__auto__,opt__15687__auto__){return cljs.core._write.call(null,writer__15686__auto__,"cljs.core.async/t32491");
});})(cs))
;
cljs.core.async.t32491.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t32491.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t32491.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t32491.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t32491.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t32491.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t32491.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32493){var self__ = this;
var _32493__$1 = this;return self__.meta32492;
});})(cs))
;
cljs.core.async.t32491.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32493,meta32492__$1){var self__ = this;
var _32493__$1 = this;return (new cljs.core.async.t32491(self__.cs,self__.ch,self__.mult,meta32492__$1));
});})(cs))
;
cljs.core.async.__GT_t32491 = ((function (cs){
return (function __GT_t32491(cs__$1,ch__$1,mult__$1,meta32492){return (new cljs.core.async.t32491(cs__$1,ch__$1,mult__$1,meta32492));
});})(cs))
;
}
return (new cljs.core.async.t32491(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__18976__auto___32714 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18977__auto__ = (function (){var switch__18906__auto__ = (function (state_32628){var state_val_32629 = (state_32628[1]);if((state_val_32629 === 32))
{var inst_32496 = (state_32628[7]);var inst_32572 = (state_32628[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32628,31,Object,null,30);var inst_32579 = cljs.core.async.put_BANG_.call(null,inst_32572,inst_32496,done);var state_32628__$1 = state_32628;var statearr_32630_32715 = state_32628__$1;(statearr_32630_32715[2] = inst_32579);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32628__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32629 === 1))
{var state_32628__$1 = state_32628;var statearr_32631_32716 = state_32628__$1;(statearr_32631_32716[2] = null);
(statearr_32631_32716[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32629 === 33))
{var inst_32585 = (state_32628[9]);var inst_32587 = cljs.core.chunked_seq_QMARK_.call(null,inst_32585);var state_32628__$1 = state_32628;if(inst_32587)
{var statearr_32632_32717 = state_32628__$1;(statearr_32632_32717[1] = 36);
} else
{var statearr_32633_32718 = state_32628__$1;(statearr_32633_32718[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32629 === 2))
{var state_32628__$1 = state_32628;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32628__$1,4,ch);
} else
{if((state_val_32629 === 34))
{var state_32628__$1 = state_32628;var statearr_32634_32719 = state_32628__$1;(statearr_32634_32719[2] = null);
(statearr_32634_32719[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32629 === 3))
{var inst_32626 = (state_32628[2]);var state_32628__$1 = state_32628;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32628__$1,inst_32626);
} else
{if((state_val_32629 === 35))
{var inst_32610 = (state_32628[2]);var state_32628__$1 = state_32628;var statearr_32635_32720 = state_32628__$1;(statearr_32635_32720[2] = inst_32610);
(statearr_32635_32720[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32629 === 4))
{var inst_32496 = (state_32628[7]);var inst_32496__$1 = (state_32628[2]);var inst_32497 = (inst_32496__$1 == null);var state_32628__$1 = (function (){var statearr_32636 = state_32628;(statearr_32636[7] = inst_32496__$1);
return statearr_32636;
})();if(cljs.core.truth_(inst_32497))
{var statearr_32637_32721 = state_32628__$1;(statearr_32637_32721[1] = 5);
} else
{var statearr_32638_32722 = state_32628__$1;(statearr_32638_32722[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32629 === 36))
{var inst_32585 = (state_32628[9]);var inst_32589 = cljs.core.chunk_first.call(null,inst_32585);var inst_32590 = cljs.core.chunk_rest.call(null,inst_32585);var inst_32591 = cljs.core.count.call(null,inst_32589);var inst_32564 = inst_32590;var inst_32565 = inst_32589;var inst_32566 = inst_32591;var inst_32567 = 0;var state_32628__$1 = (function (){var statearr_32639 = state_32628;(statearr_32639[10] = inst_32565);
(statearr_32639[11] = inst_32566);
(statearr_32639[12] = inst_32567);
(statearr_32639[13] = inst_32564);
return statearr_32639;
})();var statearr_32640_32723 = state_32628__$1;(statearr_32640_32723[2] = null);
(statearr_32640_32723[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32629 === 5))
{var inst_32503 = cljs.core.deref.call(null,cs);var inst_32504 = cljs.core.seq.call(null,inst_32503);var inst_32505 = inst_32504;var inst_32506 = null;var inst_32507 = 0;var inst_32508 = 0;var state_32628__$1 = (function (){var statearr_32641 = state_32628;(statearr_32641[14] = inst_32506);
(statearr_32641[15] = inst_32505);
(statearr_32641[16] = inst_32507);
(statearr_32641[17] = inst_32508);
return statearr_32641;
})();var statearr_32642_32724 = state_32628__$1;(statearr_32642_32724[2] = null);
(statearr_32642_32724[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32629 === 37))
{var inst_32585 = (state_32628[9]);var inst_32594 = cljs.core.first.call(null,inst_32585);var state_32628__$1 = (function (){var statearr_32643 = state_32628;(statearr_32643[18] = inst_32594);
return statearr_32643;
})();var statearr_32644_32725 = state_32628__$1;(statearr_32644_32725[2] = null);
(statearr_32644_32725[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32629 === 6))
{var inst_32556 = (state_32628[19]);var inst_32555 = cljs.core.deref.call(null,cs);var inst_32556__$1 = cljs.core.keys.call(null,inst_32555);var inst_32557 = cljs.core.count.call(null,inst_32556__$1);var inst_32558 = cljs.core.reset_BANG_.call(null,dctr,inst_32557);var inst_32563 = cljs.core.seq.call(null,inst_32556__$1);var inst_32564 = inst_32563;var inst_32565 = null;var inst_32566 = 0;var inst_32567 = 0;var state_32628__$1 = (function (){var statearr_32645 = state_32628;(statearr_32645[20] = inst_32558);
(statearr_32645[10] = inst_32565);
(statearr_32645[11] = inst_32566);
(statearr_32645[12] = inst_32567);
(statearr_32645[13] = inst_32564);
(statearr_32645[19] = inst_32556__$1);
return statearr_32645;
})();var statearr_32646_32726 = state_32628__$1;(statearr_32646_32726[2] = null);
(statearr_32646_32726[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32629 === 38))
{var inst_32607 = (state_32628[2]);var state_32628__$1 = state_32628;var statearr_32647_32727 = state_32628__$1;(statearr_32647_32727[2] = inst_32607);
(statearr_32647_32727[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32629 === 7))
{var inst_32624 = (state_32628[2]);var state_32628__$1 = state_32628;var statearr_32648_32728 = state_32628__$1;(statearr_32648_32728[2] = inst_32624);
(statearr_32648_32728[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32629 === 39))
{var inst_32585 = (state_32628[9]);var inst_32603 = (state_32628[2]);var inst_32604 = cljs.core.next.call(null,inst_32585);var inst_32564 = inst_32604;var inst_32565 = null;var inst_32566 = 0;var inst_32567 = 0;var state_32628__$1 = (function (){var statearr_32649 = state_32628;(statearr_32649[21] = inst_32603);
(statearr_32649[10] = inst_32565);
(statearr_32649[11] = inst_32566);
(statearr_32649[12] = inst_32567);
(statearr_32649[13] = inst_32564);
return statearr_32649;
})();var statearr_32650_32729 = state_32628__$1;(statearr_32650_32729[2] = null);
(statearr_32650_32729[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32629 === 8))
{var inst_32507 = (state_32628[16]);var inst_32508 = (state_32628[17]);var inst_32510 = (inst_32508 < inst_32507);var inst_32511 = inst_32510;var state_32628__$1 = state_32628;if(cljs.core.truth_(inst_32511))
{var statearr_32651_32730 = state_32628__$1;(statearr_32651_32730[1] = 10);
} else
{var statearr_32652_32731 = state_32628__$1;(statearr_32652_32731[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32629 === 40))
{var inst_32594 = (state_32628[18]);var inst_32595 = (state_32628[2]);var inst_32596 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_32597 = cljs.core.async.untap_STAR_.call(null,m,inst_32594);var state_32628__$1 = (function (){var statearr_32653 = state_32628;(statearr_32653[22] = inst_32596);
(statearr_32653[23] = inst_32595);
return statearr_32653;
})();var statearr_32654_32732 = state_32628__$1;(statearr_32654_32732[2] = inst_32597);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32628__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32629 === 9))
{var inst_32553 = (state_32628[2]);var state_32628__$1 = state_32628;var statearr_32655_32733 = state_32628__$1;(statearr_32655_32733[2] = inst_32553);
(statearr_32655_32733[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32629 === 41))
{var inst_32594 = (state_32628[18]);var inst_32496 = (state_32628[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32628,40,Object,null,39);var inst_32601 = cljs.core.async.put_BANG_.call(null,inst_32594,inst_32496,done);var state_32628__$1 = state_32628;var statearr_32656_32734 = state_32628__$1;(statearr_32656_32734[2] = inst_32601);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32628__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32629 === 10))
{var inst_32506 = (state_32628[14]);var inst_32508 = (state_32628[17]);var inst_32514 = cljs.core._nth.call(null,inst_32506,inst_32508);var inst_32515 = cljs.core.nth.call(null,inst_32514,0,null);var inst_32516 = cljs.core.nth.call(null,inst_32514,1,null);var state_32628__$1 = (function (){var statearr_32657 = state_32628;(statearr_32657[24] = inst_32515);
return statearr_32657;
})();if(cljs.core.truth_(inst_32516))
{var statearr_32658_32735 = state_32628__$1;(statearr_32658_32735[1] = 13);
} else
{var statearr_32659_32736 = state_32628__$1;(statearr_32659_32736[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32629 === 42))
{var state_32628__$1 = state_32628;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32628__$1,45,dchan);
} else
{if((state_val_32629 === 11))
{var inst_32525 = (state_32628[25]);var inst_32505 = (state_32628[15]);var inst_32525__$1 = cljs.core.seq.call(null,inst_32505);var state_32628__$1 = (function (){var statearr_32660 = state_32628;(statearr_32660[25] = inst_32525__$1);
return statearr_32660;
})();if(inst_32525__$1)
{var statearr_32661_32737 = state_32628__$1;(statearr_32661_32737[1] = 16);
} else
{var statearr_32662_32738 = state_32628__$1;(statearr_32662_32738[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32629 === 43))
{var state_32628__$1 = state_32628;var statearr_32663_32739 = state_32628__$1;(statearr_32663_32739[2] = null);
(statearr_32663_32739[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32629 === 12))
{var inst_32551 = (state_32628[2]);var state_32628__$1 = state_32628;var statearr_32664_32740 = state_32628__$1;(statearr_32664_32740[2] = inst_32551);
(statearr_32664_32740[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32629 === 44))
{var inst_32621 = (state_32628[2]);var state_32628__$1 = (function (){var statearr_32665 = state_32628;(statearr_32665[26] = inst_32621);
return statearr_32665;
})();var statearr_32666_32741 = state_32628__$1;(statearr_32666_32741[2] = null);
(statearr_32666_32741[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32629 === 13))
{var inst_32515 = (state_32628[24]);var inst_32518 = cljs.core.async.close_BANG_.call(null,inst_32515);var state_32628__$1 = state_32628;var statearr_32667_32742 = state_32628__$1;(statearr_32667_32742[2] = inst_32518);
(statearr_32667_32742[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32629 === 45))
{var inst_32618 = (state_32628[2]);var state_32628__$1 = state_32628;var statearr_32671_32743 = state_32628__$1;(statearr_32671_32743[2] = inst_32618);
(statearr_32671_32743[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32629 === 14))
{var state_32628__$1 = state_32628;var statearr_32672_32744 = state_32628__$1;(statearr_32672_32744[2] = null);
(statearr_32672_32744[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32629 === 15))
{var inst_32506 = (state_32628[14]);var inst_32505 = (state_32628[15]);var inst_32507 = (state_32628[16]);var inst_32508 = (state_32628[17]);var inst_32521 = (state_32628[2]);var inst_32522 = (inst_32508 + 1);var tmp32668 = inst_32506;var tmp32669 = inst_32505;var tmp32670 = inst_32507;var inst_32505__$1 = tmp32669;var inst_32506__$1 = tmp32668;var inst_32507__$1 = tmp32670;var inst_32508__$1 = inst_32522;var state_32628__$1 = (function (){var statearr_32673 = state_32628;(statearr_32673[27] = inst_32521);
(statearr_32673[14] = inst_32506__$1);
(statearr_32673[15] = inst_32505__$1);
(statearr_32673[16] = inst_32507__$1);
(statearr_32673[17] = inst_32508__$1);
return statearr_32673;
})();var statearr_32674_32745 = state_32628__$1;(statearr_32674_32745[2] = null);
(statearr_32674_32745[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32629 === 16))
{var inst_32525 = (state_32628[25]);var inst_32527 = cljs.core.chunked_seq_QMARK_.call(null,inst_32525);var state_32628__$1 = state_32628;if(inst_32527)
{var statearr_32675_32746 = state_32628__$1;(statearr_32675_32746[1] = 19);
} else
{var statearr_32676_32747 = state_32628__$1;(statearr_32676_32747[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32629 === 17))
{var state_32628__$1 = state_32628;var statearr_32677_32748 = state_32628__$1;(statearr_32677_32748[2] = null);
(statearr_32677_32748[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32629 === 18))
{var inst_32549 = (state_32628[2]);var state_32628__$1 = state_32628;var statearr_32678_32749 = state_32628__$1;(statearr_32678_32749[2] = inst_32549);
(statearr_32678_32749[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32629 === 19))
{var inst_32525 = (state_32628[25]);var inst_32529 = cljs.core.chunk_first.call(null,inst_32525);var inst_32530 = cljs.core.chunk_rest.call(null,inst_32525);var inst_32531 = cljs.core.count.call(null,inst_32529);var inst_32505 = inst_32530;var inst_32506 = inst_32529;var inst_32507 = inst_32531;var inst_32508 = 0;var state_32628__$1 = (function (){var statearr_32679 = state_32628;(statearr_32679[14] = inst_32506);
(statearr_32679[15] = inst_32505);
(statearr_32679[16] = inst_32507);
(statearr_32679[17] = inst_32508);
return statearr_32679;
})();var statearr_32680_32750 = state_32628__$1;(statearr_32680_32750[2] = null);
(statearr_32680_32750[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32629 === 20))
{var inst_32525 = (state_32628[25]);var inst_32535 = cljs.core.first.call(null,inst_32525);var inst_32536 = cljs.core.nth.call(null,inst_32535,0,null);var inst_32537 = cljs.core.nth.call(null,inst_32535,1,null);var state_32628__$1 = (function (){var statearr_32681 = state_32628;(statearr_32681[28] = inst_32536);
return statearr_32681;
})();if(cljs.core.truth_(inst_32537))
{var statearr_32682_32751 = state_32628__$1;(statearr_32682_32751[1] = 22);
} else
{var statearr_32683_32752 = state_32628__$1;(statearr_32683_32752[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32629 === 21))
{var inst_32546 = (state_32628[2]);var state_32628__$1 = state_32628;var statearr_32684_32753 = state_32628__$1;(statearr_32684_32753[2] = inst_32546);
(statearr_32684_32753[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32629 === 22))
{var inst_32536 = (state_32628[28]);var inst_32539 = cljs.core.async.close_BANG_.call(null,inst_32536);var state_32628__$1 = state_32628;var statearr_32685_32754 = state_32628__$1;(statearr_32685_32754[2] = inst_32539);
(statearr_32685_32754[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32629 === 23))
{var state_32628__$1 = state_32628;var statearr_32686_32755 = state_32628__$1;(statearr_32686_32755[2] = null);
(statearr_32686_32755[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32629 === 24))
{var inst_32525 = (state_32628[25]);var inst_32542 = (state_32628[2]);var inst_32543 = cljs.core.next.call(null,inst_32525);var inst_32505 = inst_32543;var inst_32506 = null;var inst_32507 = 0;var inst_32508 = 0;var state_32628__$1 = (function (){var statearr_32687 = state_32628;(statearr_32687[29] = inst_32542);
(statearr_32687[14] = inst_32506);
(statearr_32687[15] = inst_32505);
(statearr_32687[16] = inst_32507);
(statearr_32687[17] = inst_32508);
return statearr_32687;
})();var statearr_32688_32756 = state_32628__$1;(statearr_32688_32756[2] = null);
(statearr_32688_32756[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32629 === 25))
{var inst_32566 = (state_32628[11]);var inst_32567 = (state_32628[12]);var inst_32569 = (inst_32567 < inst_32566);var inst_32570 = inst_32569;var state_32628__$1 = state_32628;if(cljs.core.truth_(inst_32570))
{var statearr_32689_32757 = state_32628__$1;(statearr_32689_32757[1] = 27);
} else
{var statearr_32690_32758 = state_32628__$1;(statearr_32690_32758[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32629 === 26))
{var inst_32556 = (state_32628[19]);var inst_32614 = (state_32628[2]);var inst_32615 = cljs.core.seq.call(null,inst_32556);var state_32628__$1 = (function (){var statearr_32691 = state_32628;(statearr_32691[30] = inst_32614);
return statearr_32691;
})();if(inst_32615)
{var statearr_32692_32759 = state_32628__$1;(statearr_32692_32759[1] = 42);
} else
{var statearr_32693_32760 = state_32628__$1;(statearr_32693_32760[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32629 === 27))
{var inst_32565 = (state_32628[10]);var inst_32567 = (state_32628[12]);var inst_32572 = cljs.core._nth.call(null,inst_32565,inst_32567);var state_32628__$1 = (function (){var statearr_32694 = state_32628;(statearr_32694[8] = inst_32572);
return statearr_32694;
})();var statearr_32695_32761 = state_32628__$1;(statearr_32695_32761[2] = null);
(statearr_32695_32761[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32629 === 28))
{var inst_32585 = (state_32628[9]);var inst_32564 = (state_32628[13]);var inst_32585__$1 = cljs.core.seq.call(null,inst_32564);var state_32628__$1 = (function (){var statearr_32699 = state_32628;(statearr_32699[9] = inst_32585__$1);
return statearr_32699;
})();if(inst_32585__$1)
{var statearr_32700_32762 = state_32628__$1;(statearr_32700_32762[1] = 33);
} else
{var statearr_32701_32763 = state_32628__$1;(statearr_32701_32763[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32629 === 29))
{var inst_32612 = (state_32628[2]);var state_32628__$1 = state_32628;var statearr_32702_32764 = state_32628__$1;(statearr_32702_32764[2] = inst_32612);
(statearr_32702_32764[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32629 === 30))
{var inst_32565 = (state_32628[10]);var inst_32566 = (state_32628[11]);var inst_32567 = (state_32628[12]);var inst_32564 = (state_32628[13]);var inst_32581 = (state_32628[2]);var inst_32582 = (inst_32567 + 1);var tmp32696 = inst_32565;var tmp32697 = inst_32566;var tmp32698 = inst_32564;var inst_32564__$1 = tmp32698;var inst_32565__$1 = tmp32696;var inst_32566__$1 = tmp32697;var inst_32567__$1 = inst_32582;var state_32628__$1 = (function (){var statearr_32703 = state_32628;(statearr_32703[31] = inst_32581);
(statearr_32703[10] = inst_32565__$1);
(statearr_32703[11] = inst_32566__$1);
(statearr_32703[12] = inst_32567__$1);
(statearr_32703[13] = inst_32564__$1);
return statearr_32703;
})();var statearr_32704_32765 = state_32628__$1;(statearr_32704_32765[2] = null);
(statearr_32704_32765[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32629 === 31))
{var inst_32572 = (state_32628[8]);var inst_32573 = (state_32628[2]);var inst_32574 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_32575 = cljs.core.async.untap_STAR_.call(null,m,inst_32572);var state_32628__$1 = (function (){var statearr_32705 = state_32628;(statearr_32705[32] = inst_32574);
(statearr_32705[33] = inst_32573);
return statearr_32705;
})();var statearr_32706_32766 = state_32628__$1;(statearr_32706_32766[2] = inst_32575);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32628__$1);
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
});return ((function (switch__18906__auto__){
return (function() {
var state_machine__18907__auto__ = null;
var state_machine__18907__auto____0 = (function (){var statearr_32710 = (new Array(34));(statearr_32710[0] = state_machine__18907__auto__);
(statearr_32710[1] = 1);
return statearr_32710;
});
var state_machine__18907__auto____1 = (function (state_32628){while(true){
var ret_value__18908__auto__ = (function (){try{while(true){
var result__18909__auto__ = switch__18906__auto__.call(null,state_32628);if(cljs.core.keyword_identical_QMARK_.call(null,result__18909__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18909__auto__;
}
break;
}
}catch (e32711){if((e32711 instanceof Object))
{var ex__18910__auto__ = e32711;var statearr_32712_32767 = state_32628;(statearr_32712_32767[5] = ex__18910__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32628);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32711;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18908__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32768 = state_32628;
state_32628 = G__32768;
continue;
}
} else
{return ret_value__18908__auto__;
}
break;
}
});
state_machine__18907__auto__ = function(state_32628){
switch(arguments.length){
case 0:
return state_machine__18907__auto____0.call(this);
case 1:
return state_machine__18907__auto____1.call(this,state_32628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18907__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18907__auto____0;
state_machine__18907__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18907__auto____1;
return state_machine__18907__auto__;
})()
;})(switch__18906__auto__))
})();var state__18978__auto__ = (function (){var statearr_32713 = f__18977__auto__.call(null);(statearr_32713[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18976__auto___32714);
return statearr_32713;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18978__auto__);
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
cljs.core.async.Mix = (function (){var obj32770 = {};return obj32770;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__15129__auto__ = m;if(and__15129__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__15129__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__15744__auto__ = (((m == null))?null:m);return (function (){var or__15141__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__15744__auto__)]);if(or__15141__auto__)
{return or__15141__auto__;
} else
{var or__15141__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__15141__auto____$1)
{return or__15141__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__15129__auto__ = m;if(and__15129__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__15129__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__15744__auto__ = (((m == null))?null:m);return (function (){var or__15141__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__15744__auto__)]);if(or__15141__auto__)
{return or__15141__auto__;
} else
{var or__15141__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__15141__auto____$1)
{return or__15141__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__15129__auto__ = m;if(and__15129__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__15129__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__15744__auto__ = (((m == null))?null:m);return (function (){var or__15141__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__15744__auto__)]);if(or__15141__auto__)
{return or__15141__auto__;
} else
{var or__15141__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__15141__auto____$1)
{return or__15141__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__15129__auto__ = m;if(and__15129__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__15129__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__15744__auto__ = (((m == null))?null:m);return (function (){var or__15141__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__15744__auto__)]);if(or__15141__auto__)
{return or__15141__auto__;
} else
{var or__15141__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__15141__auto____$1)
{return or__15141__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__15129__auto__ = m;if(and__15129__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__15129__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__15744__auto__ = (((m == null))?null:m);return (function (){var or__15141__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__15744__auto__)]);if(or__15141__auto__)
{return or__15141__auto__;
} else
{var or__15141__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__15141__auto____$1)
{return or__15141__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t32880 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32880 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta32881){
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
this.meta32881 = meta32881;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32880.cljs$lang$type = true;
cljs.core.async.t32880.cljs$lang$ctorStr = "cljs.core.async/t32880";
cljs.core.async.t32880.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__15685__auto__,writer__15686__auto__,opt__15687__auto__){return cljs.core._write.call(null,writer__15686__auto__,"cljs.core.async/t32880");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32880.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t32880.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32880.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32880.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32880.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32880.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32880.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t32880.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32880.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32882){var self__ = this;
var _32882__$1 = this;return self__.meta32881;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32880.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32882,meta32881__$1){var self__ = this;
var _32882__$1 = this;return (new cljs.core.async.t32880(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta32881__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t32880 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t32880(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta32881){return (new cljs.core.async.t32880(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta32881));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t32880(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__18976__auto___32989 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18977__auto__ = (function (){var switch__18906__auto__ = (function (state_32947){var state_val_32948 = (state_32947[1]);if((state_val_32948 === 1))
{var inst_32886 = (state_32947[7]);var inst_32886__$1 = calc_state.call(null);var inst_32887 = cljs.core.seq_QMARK_.call(null,inst_32886__$1);var state_32947__$1 = (function (){var statearr_32949 = state_32947;(statearr_32949[7] = inst_32886__$1);
return statearr_32949;
})();if(inst_32887)
{var statearr_32950_32990 = state_32947__$1;(statearr_32950_32990[1] = 2);
} else
{var statearr_32951_32991 = state_32947__$1;(statearr_32951_32991[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32948 === 2))
{var inst_32886 = (state_32947[7]);var inst_32889 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32886);var state_32947__$1 = state_32947;var statearr_32952_32992 = state_32947__$1;(statearr_32952_32992[2] = inst_32889);
(statearr_32952_32992[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32948 === 3))
{var inst_32886 = (state_32947[7]);var state_32947__$1 = state_32947;var statearr_32953_32993 = state_32947__$1;(statearr_32953_32993[2] = inst_32886);
(statearr_32953_32993[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32948 === 4))
{var inst_32886 = (state_32947[7]);var inst_32892 = (state_32947[2]);var inst_32893 = cljs.core.get.call(null,inst_32892,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_32894 = cljs.core.get.call(null,inst_32892,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_32895 = cljs.core.get.call(null,inst_32892,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_32896 = inst_32886;var state_32947__$1 = (function (){var statearr_32954 = state_32947;(statearr_32954[8] = inst_32895);
(statearr_32954[9] = inst_32896);
(statearr_32954[10] = inst_32894);
(statearr_32954[11] = inst_32893);
return statearr_32954;
})();var statearr_32955_32994 = state_32947__$1;(statearr_32955_32994[2] = null);
(statearr_32955_32994[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32948 === 5))
{var inst_32896 = (state_32947[9]);var inst_32899 = cljs.core.seq_QMARK_.call(null,inst_32896);var state_32947__$1 = state_32947;if(inst_32899)
{var statearr_32956_32995 = state_32947__$1;(statearr_32956_32995[1] = 7);
} else
{var statearr_32957_32996 = state_32947__$1;(statearr_32957_32996[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32948 === 6))
{var inst_32945 = (state_32947[2]);var state_32947__$1 = state_32947;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32947__$1,inst_32945);
} else
{if((state_val_32948 === 7))
{var inst_32896 = (state_32947[9]);var inst_32901 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32896);var state_32947__$1 = state_32947;var statearr_32958_32997 = state_32947__$1;(statearr_32958_32997[2] = inst_32901);
(statearr_32958_32997[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32948 === 8))
{var inst_32896 = (state_32947[9]);var state_32947__$1 = state_32947;var statearr_32959_32998 = state_32947__$1;(statearr_32959_32998[2] = inst_32896);
(statearr_32959_32998[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32948 === 9))
{var inst_32904 = (state_32947[12]);var inst_32904__$1 = (state_32947[2]);var inst_32905 = cljs.core.get.call(null,inst_32904__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_32906 = cljs.core.get.call(null,inst_32904__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_32907 = cljs.core.get.call(null,inst_32904__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_32947__$1 = (function (){var statearr_32960 = state_32947;(statearr_32960[13] = inst_32907);
(statearr_32960[14] = inst_32906);
(statearr_32960[12] = inst_32904__$1);
return statearr_32960;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_32947__$1,10,inst_32905);
} else
{if((state_val_32948 === 10))
{var inst_32911 = (state_32947[15]);var inst_32912 = (state_32947[16]);var inst_32910 = (state_32947[2]);var inst_32911__$1 = cljs.core.nth.call(null,inst_32910,0,null);var inst_32912__$1 = cljs.core.nth.call(null,inst_32910,1,null);var inst_32913 = (inst_32911__$1 == null);var inst_32914 = cljs.core._EQ_.call(null,inst_32912__$1,change);var inst_32915 = (inst_32913) || (inst_32914);var state_32947__$1 = (function (){var statearr_32961 = state_32947;(statearr_32961[15] = inst_32911__$1);
(statearr_32961[16] = inst_32912__$1);
return statearr_32961;
})();if(cljs.core.truth_(inst_32915))
{var statearr_32962_32999 = state_32947__$1;(statearr_32962_32999[1] = 11);
} else
{var statearr_32963_33000 = state_32947__$1;(statearr_32963_33000[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32948 === 11))
{var inst_32911 = (state_32947[15]);var inst_32917 = (inst_32911 == null);var state_32947__$1 = state_32947;if(cljs.core.truth_(inst_32917))
{var statearr_32964_33001 = state_32947__$1;(statearr_32964_33001[1] = 14);
} else
{var statearr_32965_33002 = state_32947__$1;(statearr_32965_33002[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32948 === 12))
{var inst_32912 = (state_32947[16]);var inst_32926 = (state_32947[17]);var inst_32907 = (state_32947[13]);var inst_32926__$1 = inst_32907.call(null,inst_32912);var state_32947__$1 = (function (){var statearr_32966 = state_32947;(statearr_32966[17] = inst_32926__$1);
return statearr_32966;
})();if(cljs.core.truth_(inst_32926__$1))
{var statearr_32967_33003 = state_32947__$1;(statearr_32967_33003[1] = 17);
} else
{var statearr_32968_33004 = state_32947__$1;(statearr_32968_33004[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32948 === 13))
{var inst_32943 = (state_32947[2]);var state_32947__$1 = state_32947;var statearr_32969_33005 = state_32947__$1;(statearr_32969_33005[2] = inst_32943);
(statearr_32969_33005[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32948 === 14))
{var inst_32912 = (state_32947[16]);var inst_32919 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32912);var state_32947__$1 = state_32947;var statearr_32970_33006 = state_32947__$1;(statearr_32970_33006[2] = inst_32919);
(statearr_32970_33006[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32948 === 15))
{var state_32947__$1 = state_32947;var statearr_32971_33007 = state_32947__$1;(statearr_32971_33007[2] = null);
(statearr_32971_33007[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32948 === 16))
{var inst_32922 = (state_32947[2]);var inst_32923 = calc_state.call(null);var inst_32896 = inst_32923;var state_32947__$1 = (function (){var statearr_32972 = state_32947;(statearr_32972[18] = inst_32922);
(statearr_32972[9] = inst_32896);
return statearr_32972;
})();var statearr_32973_33008 = state_32947__$1;(statearr_32973_33008[2] = null);
(statearr_32973_33008[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32948 === 17))
{var inst_32926 = (state_32947[17]);var state_32947__$1 = state_32947;var statearr_32974_33009 = state_32947__$1;(statearr_32974_33009[2] = inst_32926);
(statearr_32974_33009[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32948 === 18))
{var inst_32912 = (state_32947[16]);var inst_32907 = (state_32947[13]);var inst_32906 = (state_32947[14]);var inst_32929 = cljs.core.empty_QMARK_.call(null,inst_32907);var inst_32930 = inst_32906.call(null,inst_32912);var inst_32931 = cljs.core.not.call(null,inst_32930);var inst_32932 = (inst_32929) && (inst_32931);var state_32947__$1 = state_32947;var statearr_32975_33010 = state_32947__$1;(statearr_32975_33010[2] = inst_32932);
(statearr_32975_33010[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32948 === 19))
{var inst_32934 = (state_32947[2]);var state_32947__$1 = state_32947;if(cljs.core.truth_(inst_32934))
{var statearr_32976_33011 = state_32947__$1;(statearr_32976_33011[1] = 20);
} else
{var statearr_32977_33012 = state_32947__$1;(statearr_32977_33012[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32948 === 20))
{var inst_32911 = (state_32947[15]);var state_32947__$1 = state_32947;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32947__$1,23,out,inst_32911);
} else
{if((state_val_32948 === 21))
{var state_32947__$1 = state_32947;var statearr_32978_33013 = state_32947__$1;(statearr_32978_33013[2] = null);
(statearr_32978_33013[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32948 === 22))
{var inst_32904 = (state_32947[12]);var inst_32940 = (state_32947[2]);var inst_32896 = inst_32904;var state_32947__$1 = (function (){var statearr_32979 = state_32947;(statearr_32979[19] = inst_32940);
(statearr_32979[9] = inst_32896);
return statearr_32979;
})();var statearr_32980_33014 = state_32947__$1;(statearr_32980_33014[2] = null);
(statearr_32980_33014[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32948 === 23))
{var inst_32937 = (state_32947[2]);var state_32947__$1 = state_32947;var statearr_32981_33015 = state_32947__$1;(statearr_32981_33015[2] = inst_32937);
(statearr_32981_33015[1] = 22);
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
});return ((function (switch__18906__auto__){
return (function() {
var state_machine__18907__auto__ = null;
var state_machine__18907__auto____0 = (function (){var statearr_32985 = (new Array(20));(statearr_32985[0] = state_machine__18907__auto__);
(statearr_32985[1] = 1);
return statearr_32985;
});
var state_machine__18907__auto____1 = (function (state_32947){while(true){
var ret_value__18908__auto__ = (function (){try{while(true){
var result__18909__auto__ = switch__18906__auto__.call(null,state_32947);if(cljs.core.keyword_identical_QMARK_.call(null,result__18909__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18909__auto__;
}
break;
}
}catch (e32986){if((e32986 instanceof Object))
{var ex__18910__auto__ = e32986;var statearr_32987_33016 = state_32947;(statearr_32987_33016[5] = ex__18910__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32947);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32986;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18908__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33017 = state_32947;
state_32947 = G__33017;
continue;
}
} else
{return ret_value__18908__auto__;
}
break;
}
});
state_machine__18907__auto__ = function(state_32947){
switch(arguments.length){
case 0:
return state_machine__18907__auto____0.call(this);
case 1:
return state_machine__18907__auto____1.call(this,state_32947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18907__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18907__auto____0;
state_machine__18907__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18907__auto____1;
return state_machine__18907__auto__;
})()
;})(switch__18906__auto__))
})();var state__18978__auto__ = (function (){var statearr_32988 = f__18977__auto__.call(null);(statearr_32988[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18976__auto___32989);
return statearr_32988;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18978__auto__);
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
cljs.core.async.Pub = (function (){var obj33019 = {};return obj33019;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__15129__auto__ = p;if(and__15129__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__15129__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__15744__auto__ = (((p == null))?null:p);return (function (){var or__15141__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__15744__auto__)]);if(or__15141__auto__)
{return or__15141__auto__;
} else
{var or__15141__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__15141__auto____$1)
{return or__15141__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__15129__auto__ = p;if(and__15129__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__15129__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__15744__auto__ = (((p == null))?null:p);return (function (){var or__15141__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__15744__auto__)]);if(or__15141__auto__)
{return or__15141__auto__;
} else
{var or__15141__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__15141__auto____$1)
{return or__15141__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__15129__auto__ = p;if(and__15129__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__15129__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__15744__auto__ = (((p == null))?null:p);return (function (){var or__15141__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__15744__auto__)]);if(or__15141__auto__)
{return or__15141__auto__;
} else
{var or__15141__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__15141__auto____$1)
{return or__15141__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__15129__auto__ = p;if(and__15129__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__15129__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__15744__auto__ = (((p == null))?null:p);return (function (){var or__15141__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__15744__auto__)]);if(or__15141__auto__)
{return or__15141__auto__;
} else
{var or__15141__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__15141__auto____$1)
{return or__15141__auto____$1;
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
return (function (topic){var or__15141__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__15141__auto__))
{return or__15141__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__15141__auto__,mults){
return (function (p1__33020_SHARP_){if(cljs.core.truth_(p1__33020_SHARP_.call(null,topic)))
{return p1__33020_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__33020_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__15141__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t33145 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33145 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta33146){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta33146 = meta33146;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33145.cljs$lang$type = true;
cljs.core.async.t33145.cljs$lang$ctorStr = "cljs.core.async/t33145";
cljs.core.async.t33145.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__15685__auto__,writer__15686__auto__,opt__15687__auto__){return cljs.core._write.call(null,writer__15686__auto__,"cljs.core.async/t33145");
});})(mults,ensure_mult))
;
cljs.core.async.t33145.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t33145.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t33145.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4098__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4098__auto__))
{var m = temp__4098__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t33145.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t33145.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t33145.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t33145.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t33145.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33147){var self__ = this;
var _33147__$1 = this;return self__.meta33146;
});})(mults,ensure_mult))
;
cljs.core.async.t33145.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33147,meta33146__$1){var self__ = this;
var _33147__$1 = this;return (new cljs.core.async.t33145(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta33146__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t33145 = ((function (mults,ensure_mult){
return (function __GT_t33145(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta33146){return (new cljs.core.async.t33145(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta33146));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t33145(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__18976__auto___33269 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18977__auto__ = (function (){var switch__18906__auto__ = (function (state_33221){var state_val_33222 = (state_33221[1]);if((state_val_33222 === 1))
{var state_33221__$1 = state_33221;var statearr_33223_33270 = state_33221__$1;(statearr_33223_33270[2] = null);
(statearr_33223_33270[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33222 === 2))
{var state_33221__$1 = state_33221;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33221__$1,4,ch);
} else
{if((state_val_33222 === 3))
{var inst_33219 = (state_33221[2]);var state_33221__$1 = state_33221;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33221__$1,inst_33219);
} else
{if((state_val_33222 === 4))
{var inst_33150 = (state_33221[7]);var inst_33150__$1 = (state_33221[2]);var inst_33151 = (inst_33150__$1 == null);var state_33221__$1 = (function (){var statearr_33224 = state_33221;(statearr_33224[7] = inst_33150__$1);
return statearr_33224;
})();if(cljs.core.truth_(inst_33151))
{var statearr_33225_33271 = state_33221__$1;(statearr_33225_33271[1] = 5);
} else
{var statearr_33226_33272 = state_33221__$1;(statearr_33226_33272[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33222 === 5))
{var inst_33157 = cljs.core.deref.call(null,mults);var inst_33158 = cljs.core.vals.call(null,inst_33157);var inst_33159 = cljs.core.seq.call(null,inst_33158);var inst_33160 = inst_33159;var inst_33161 = null;var inst_33162 = 0;var inst_33163 = 0;var state_33221__$1 = (function (){var statearr_33227 = state_33221;(statearr_33227[8] = inst_33162);
(statearr_33227[9] = inst_33163);
(statearr_33227[10] = inst_33161);
(statearr_33227[11] = inst_33160);
return statearr_33227;
})();var statearr_33228_33273 = state_33221__$1;(statearr_33228_33273[2] = null);
(statearr_33228_33273[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33222 === 6))
{var inst_33198 = (state_33221[12]);var inst_33150 = (state_33221[7]);var inst_33200 = (state_33221[13]);var inst_33198__$1 = topic_fn.call(null,inst_33150);var inst_33199 = cljs.core.deref.call(null,mults);var inst_33200__$1 = cljs.core.get.call(null,inst_33199,inst_33198__$1);var state_33221__$1 = (function (){var statearr_33229 = state_33221;(statearr_33229[12] = inst_33198__$1);
(statearr_33229[13] = inst_33200__$1);
return statearr_33229;
})();if(cljs.core.truth_(inst_33200__$1))
{var statearr_33230_33274 = state_33221__$1;(statearr_33230_33274[1] = 19);
} else
{var statearr_33231_33275 = state_33221__$1;(statearr_33231_33275[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33222 === 7))
{var inst_33217 = (state_33221[2]);var state_33221__$1 = state_33221;var statearr_33232_33276 = state_33221__$1;(statearr_33232_33276[2] = inst_33217);
(statearr_33232_33276[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33222 === 8))
{var inst_33162 = (state_33221[8]);var inst_33163 = (state_33221[9]);var inst_33165 = (inst_33163 < inst_33162);var inst_33166 = inst_33165;var state_33221__$1 = state_33221;if(cljs.core.truth_(inst_33166))
{var statearr_33236_33277 = state_33221__$1;(statearr_33236_33277[1] = 10);
} else
{var statearr_33237_33278 = state_33221__$1;(statearr_33237_33278[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33222 === 9))
{var inst_33196 = (state_33221[2]);var state_33221__$1 = state_33221;var statearr_33238_33279 = state_33221__$1;(statearr_33238_33279[2] = inst_33196);
(statearr_33238_33279[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33222 === 10))
{var inst_33162 = (state_33221[8]);var inst_33163 = (state_33221[9]);var inst_33161 = (state_33221[10]);var inst_33160 = (state_33221[11]);var inst_33168 = cljs.core._nth.call(null,inst_33161,inst_33163);var inst_33169 = cljs.core.async.muxch_STAR_.call(null,inst_33168);var inst_33170 = cljs.core.async.close_BANG_.call(null,inst_33169);var inst_33171 = (inst_33163 + 1);var tmp33233 = inst_33162;var tmp33234 = inst_33161;var tmp33235 = inst_33160;var inst_33160__$1 = tmp33235;var inst_33161__$1 = tmp33234;var inst_33162__$1 = tmp33233;var inst_33163__$1 = inst_33171;var state_33221__$1 = (function (){var statearr_33239 = state_33221;(statearr_33239[8] = inst_33162__$1);
(statearr_33239[9] = inst_33163__$1);
(statearr_33239[10] = inst_33161__$1);
(statearr_33239[11] = inst_33160__$1);
(statearr_33239[14] = inst_33170);
return statearr_33239;
})();var statearr_33240_33280 = state_33221__$1;(statearr_33240_33280[2] = null);
(statearr_33240_33280[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33222 === 11))
{var inst_33160 = (state_33221[11]);var inst_33174 = (state_33221[15]);var inst_33174__$1 = cljs.core.seq.call(null,inst_33160);var state_33221__$1 = (function (){var statearr_33241 = state_33221;(statearr_33241[15] = inst_33174__$1);
return statearr_33241;
})();if(inst_33174__$1)
{var statearr_33242_33281 = state_33221__$1;(statearr_33242_33281[1] = 13);
} else
{var statearr_33243_33282 = state_33221__$1;(statearr_33243_33282[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33222 === 12))
{var inst_33194 = (state_33221[2]);var state_33221__$1 = state_33221;var statearr_33244_33283 = state_33221__$1;(statearr_33244_33283[2] = inst_33194);
(statearr_33244_33283[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33222 === 13))
{var inst_33174 = (state_33221[15]);var inst_33176 = cljs.core.chunked_seq_QMARK_.call(null,inst_33174);var state_33221__$1 = state_33221;if(inst_33176)
{var statearr_33245_33284 = state_33221__$1;(statearr_33245_33284[1] = 16);
} else
{var statearr_33246_33285 = state_33221__$1;(statearr_33246_33285[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33222 === 14))
{var state_33221__$1 = state_33221;var statearr_33247_33286 = state_33221__$1;(statearr_33247_33286[2] = null);
(statearr_33247_33286[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33222 === 15))
{var inst_33192 = (state_33221[2]);var state_33221__$1 = state_33221;var statearr_33248_33287 = state_33221__$1;(statearr_33248_33287[2] = inst_33192);
(statearr_33248_33287[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33222 === 16))
{var inst_33174 = (state_33221[15]);var inst_33178 = cljs.core.chunk_first.call(null,inst_33174);var inst_33179 = cljs.core.chunk_rest.call(null,inst_33174);var inst_33180 = cljs.core.count.call(null,inst_33178);var inst_33160 = inst_33179;var inst_33161 = inst_33178;var inst_33162 = inst_33180;var inst_33163 = 0;var state_33221__$1 = (function (){var statearr_33249 = state_33221;(statearr_33249[8] = inst_33162);
(statearr_33249[9] = inst_33163);
(statearr_33249[10] = inst_33161);
(statearr_33249[11] = inst_33160);
return statearr_33249;
})();var statearr_33250_33288 = state_33221__$1;(statearr_33250_33288[2] = null);
(statearr_33250_33288[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33222 === 17))
{var inst_33174 = (state_33221[15]);var inst_33183 = cljs.core.first.call(null,inst_33174);var inst_33184 = cljs.core.async.muxch_STAR_.call(null,inst_33183);var inst_33185 = cljs.core.async.close_BANG_.call(null,inst_33184);var inst_33186 = cljs.core.next.call(null,inst_33174);var inst_33160 = inst_33186;var inst_33161 = null;var inst_33162 = 0;var inst_33163 = 0;var state_33221__$1 = (function (){var statearr_33251 = state_33221;(statearr_33251[8] = inst_33162);
(statearr_33251[9] = inst_33163);
(statearr_33251[10] = inst_33161);
(statearr_33251[11] = inst_33160);
(statearr_33251[16] = inst_33185);
return statearr_33251;
})();var statearr_33252_33289 = state_33221__$1;(statearr_33252_33289[2] = null);
(statearr_33252_33289[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33222 === 18))
{var inst_33189 = (state_33221[2]);var state_33221__$1 = state_33221;var statearr_33253_33290 = state_33221__$1;(statearr_33253_33290[2] = inst_33189);
(statearr_33253_33290[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33222 === 19))
{var state_33221__$1 = state_33221;var statearr_33254_33291 = state_33221__$1;(statearr_33254_33291[2] = null);
(statearr_33254_33291[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33222 === 20))
{var state_33221__$1 = state_33221;var statearr_33255_33292 = state_33221__$1;(statearr_33255_33292[2] = null);
(statearr_33255_33292[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33222 === 21))
{var inst_33214 = (state_33221[2]);var state_33221__$1 = (function (){var statearr_33256 = state_33221;(statearr_33256[17] = inst_33214);
return statearr_33256;
})();var statearr_33257_33293 = state_33221__$1;(statearr_33257_33293[2] = null);
(statearr_33257_33293[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33222 === 22))
{var inst_33211 = (state_33221[2]);var state_33221__$1 = state_33221;var statearr_33258_33294 = state_33221__$1;(statearr_33258_33294[2] = inst_33211);
(statearr_33258_33294[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33222 === 23))
{var inst_33198 = (state_33221[12]);var inst_33202 = (state_33221[2]);var inst_33203 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_33198);var state_33221__$1 = (function (){var statearr_33259 = state_33221;(statearr_33259[18] = inst_33202);
return statearr_33259;
})();var statearr_33260_33295 = state_33221__$1;(statearr_33260_33295[2] = inst_33203);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33221__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33222 === 24))
{var inst_33150 = (state_33221[7]);var inst_33200 = (state_33221[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33221,23,Object,null,22);var inst_33207 = cljs.core.async.muxch_STAR_.call(null,inst_33200);var state_33221__$1 = state_33221;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33221__$1,25,inst_33207,inst_33150);
} else
{if((state_val_33222 === 25))
{var inst_33209 = (state_33221[2]);var state_33221__$1 = state_33221;var statearr_33261_33296 = state_33221__$1;(statearr_33261_33296[2] = inst_33209);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33221__$1);
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
});return ((function (switch__18906__auto__){
return (function() {
var state_machine__18907__auto__ = null;
var state_machine__18907__auto____0 = (function (){var statearr_33265 = (new Array(19));(statearr_33265[0] = state_machine__18907__auto__);
(statearr_33265[1] = 1);
return statearr_33265;
});
var state_machine__18907__auto____1 = (function (state_33221){while(true){
var ret_value__18908__auto__ = (function (){try{while(true){
var result__18909__auto__ = switch__18906__auto__.call(null,state_33221);if(cljs.core.keyword_identical_QMARK_.call(null,result__18909__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18909__auto__;
}
break;
}
}catch (e33266){if((e33266 instanceof Object))
{var ex__18910__auto__ = e33266;var statearr_33267_33297 = state_33221;(statearr_33267_33297[5] = ex__18910__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33221);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33266;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18908__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33298 = state_33221;
state_33221 = G__33298;
continue;
}
} else
{return ret_value__18908__auto__;
}
break;
}
});
state_machine__18907__auto__ = function(state_33221){
switch(arguments.length){
case 0:
return state_machine__18907__auto____0.call(this);
case 1:
return state_machine__18907__auto____1.call(this,state_33221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18907__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18907__auto____0;
state_machine__18907__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18907__auto____1;
return state_machine__18907__auto__;
})()
;})(switch__18906__auto__))
})();var state__18978__auto__ = (function (){var statearr_33268 = f__18977__auto__.call(null);(statearr_33268[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18976__auto___33269);
return statearr_33268;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18978__auto__);
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
,cljs.core.range.call(null,cnt));var c__18976__auto___33435 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18977__auto__ = (function (){var switch__18906__auto__ = (function (state_33405){var state_val_33406 = (state_33405[1]);if((state_val_33406 === 1))
{var state_33405__$1 = state_33405;var statearr_33407_33436 = state_33405__$1;(statearr_33407_33436[2] = null);
(statearr_33407_33436[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33406 === 2))
{var inst_33368 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_33369 = 0;var state_33405__$1 = (function (){var statearr_33408 = state_33405;(statearr_33408[7] = inst_33368);
(statearr_33408[8] = inst_33369);
return statearr_33408;
})();var statearr_33409_33437 = state_33405__$1;(statearr_33409_33437[2] = null);
(statearr_33409_33437[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33406 === 3))
{var inst_33403 = (state_33405[2]);var state_33405__$1 = state_33405;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33405__$1,inst_33403);
} else
{if((state_val_33406 === 4))
{var inst_33369 = (state_33405[8]);var inst_33371 = (inst_33369 < cnt);var state_33405__$1 = state_33405;if(cljs.core.truth_(inst_33371))
{var statearr_33410_33438 = state_33405__$1;(statearr_33410_33438[1] = 6);
} else
{var statearr_33411_33439 = state_33405__$1;(statearr_33411_33439[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33406 === 5))
{var inst_33389 = (state_33405[2]);var state_33405__$1 = (function (){var statearr_33412 = state_33405;(statearr_33412[9] = inst_33389);
return statearr_33412;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33405__$1,12,dchan);
} else
{if((state_val_33406 === 6))
{var state_33405__$1 = state_33405;var statearr_33413_33440 = state_33405__$1;(statearr_33413_33440[2] = null);
(statearr_33413_33440[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33406 === 7))
{var state_33405__$1 = state_33405;var statearr_33414_33441 = state_33405__$1;(statearr_33414_33441[2] = null);
(statearr_33414_33441[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33406 === 8))
{var inst_33387 = (state_33405[2]);var state_33405__$1 = state_33405;var statearr_33415_33442 = state_33405__$1;(statearr_33415_33442[2] = inst_33387);
(statearr_33415_33442[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33406 === 9))
{var inst_33369 = (state_33405[8]);var inst_33382 = (state_33405[2]);var inst_33383 = (inst_33369 + 1);var inst_33369__$1 = inst_33383;var state_33405__$1 = (function (){var statearr_33416 = state_33405;(statearr_33416[10] = inst_33382);
(statearr_33416[8] = inst_33369__$1);
return statearr_33416;
})();var statearr_33417_33443 = state_33405__$1;(statearr_33417_33443[2] = null);
(statearr_33417_33443[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33406 === 10))
{var inst_33373 = (state_33405[2]);var inst_33374 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_33405__$1 = (function (){var statearr_33418 = state_33405;(statearr_33418[11] = inst_33373);
return statearr_33418;
})();var statearr_33419_33444 = state_33405__$1;(statearr_33419_33444[2] = inst_33374);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33405__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33406 === 11))
{var inst_33369 = (state_33405[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33405,10,Object,null,9);var inst_33378 = chs__$1.call(null,inst_33369);var inst_33379 = done.call(null,inst_33369);var inst_33380 = cljs.core.async.take_BANG_.call(null,inst_33378,inst_33379);var state_33405__$1 = state_33405;var statearr_33420_33445 = state_33405__$1;(statearr_33420_33445[2] = inst_33380);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33405__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33406 === 12))
{var inst_33391 = (state_33405[12]);var inst_33391__$1 = (state_33405[2]);var inst_33392 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33391__$1);var state_33405__$1 = (function (){var statearr_33421 = state_33405;(statearr_33421[12] = inst_33391__$1);
return statearr_33421;
})();if(cljs.core.truth_(inst_33392))
{var statearr_33422_33446 = state_33405__$1;(statearr_33422_33446[1] = 13);
} else
{var statearr_33423_33447 = state_33405__$1;(statearr_33423_33447[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33406 === 13))
{var inst_33394 = cljs.core.async.close_BANG_.call(null,out);var state_33405__$1 = state_33405;var statearr_33424_33448 = state_33405__$1;(statearr_33424_33448[2] = inst_33394);
(statearr_33424_33448[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33406 === 14))
{var inst_33391 = (state_33405[12]);var inst_33396 = cljs.core.apply.call(null,f,inst_33391);var state_33405__$1 = state_33405;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33405__$1,16,out,inst_33396);
} else
{if((state_val_33406 === 15))
{var inst_33401 = (state_33405[2]);var state_33405__$1 = state_33405;var statearr_33425_33449 = state_33405__$1;(statearr_33425_33449[2] = inst_33401);
(statearr_33425_33449[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33406 === 16))
{var inst_33398 = (state_33405[2]);var state_33405__$1 = (function (){var statearr_33426 = state_33405;(statearr_33426[13] = inst_33398);
return statearr_33426;
})();var statearr_33427_33450 = state_33405__$1;(statearr_33427_33450[2] = null);
(statearr_33427_33450[1] = 2);
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
});return ((function (switch__18906__auto__){
return (function() {
var state_machine__18907__auto__ = null;
var state_machine__18907__auto____0 = (function (){var statearr_33431 = (new Array(14));(statearr_33431[0] = state_machine__18907__auto__);
(statearr_33431[1] = 1);
return statearr_33431;
});
var state_machine__18907__auto____1 = (function (state_33405){while(true){
var ret_value__18908__auto__ = (function (){try{while(true){
var result__18909__auto__ = switch__18906__auto__.call(null,state_33405);if(cljs.core.keyword_identical_QMARK_.call(null,result__18909__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18909__auto__;
}
break;
}
}catch (e33432){if((e33432 instanceof Object))
{var ex__18910__auto__ = e33432;var statearr_33433_33451 = state_33405;(statearr_33433_33451[5] = ex__18910__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33405);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33432;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18908__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33452 = state_33405;
state_33405 = G__33452;
continue;
}
} else
{return ret_value__18908__auto__;
}
break;
}
});
state_machine__18907__auto__ = function(state_33405){
switch(arguments.length){
case 0:
return state_machine__18907__auto____0.call(this);
case 1:
return state_machine__18907__auto____1.call(this,state_33405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18907__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18907__auto____0;
state_machine__18907__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18907__auto____1;
return state_machine__18907__auto__;
})()
;})(switch__18906__auto__))
})();var state__18978__auto__ = (function (){var statearr_33434 = f__18977__auto__.call(null);(statearr_33434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18976__auto___33435);
return statearr_33434;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18978__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18976__auto___33560 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18977__auto__ = (function (){var switch__18906__auto__ = (function (state_33536){var state_val_33537 = (state_33536[1]);if((state_val_33537 === 1))
{var inst_33507 = cljs.core.vec.call(null,chs);var inst_33508 = inst_33507;var state_33536__$1 = (function (){var statearr_33538 = state_33536;(statearr_33538[7] = inst_33508);
return statearr_33538;
})();var statearr_33539_33561 = state_33536__$1;(statearr_33539_33561[2] = null);
(statearr_33539_33561[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33537 === 2))
{var inst_33508 = (state_33536[7]);var inst_33510 = cljs.core.count.call(null,inst_33508);var inst_33511 = (inst_33510 > 0);var state_33536__$1 = state_33536;if(cljs.core.truth_(inst_33511))
{var statearr_33540_33562 = state_33536__$1;(statearr_33540_33562[1] = 4);
} else
{var statearr_33541_33563 = state_33536__$1;(statearr_33541_33563[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33537 === 3))
{var inst_33534 = (state_33536[2]);var state_33536__$1 = state_33536;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33536__$1,inst_33534);
} else
{if((state_val_33537 === 4))
{var inst_33508 = (state_33536[7]);var state_33536__$1 = state_33536;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_33536__$1,7,inst_33508);
} else
{if((state_val_33537 === 5))
{var inst_33530 = cljs.core.async.close_BANG_.call(null,out);var state_33536__$1 = state_33536;var statearr_33542_33564 = state_33536__$1;(statearr_33542_33564[2] = inst_33530);
(statearr_33542_33564[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33537 === 6))
{var inst_33532 = (state_33536[2]);var state_33536__$1 = state_33536;var statearr_33543_33565 = state_33536__$1;(statearr_33543_33565[2] = inst_33532);
(statearr_33543_33565[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33537 === 7))
{var inst_33516 = (state_33536[8]);var inst_33515 = (state_33536[9]);var inst_33515__$1 = (state_33536[2]);var inst_33516__$1 = cljs.core.nth.call(null,inst_33515__$1,0,null);var inst_33517 = cljs.core.nth.call(null,inst_33515__$1,1,null);var inst_33518 = (inst_33516__$1 == null);var state_33536__$1 = (function (){var statearr_33544 = state_33536;(statearr_33544[8] = inst_33516__$1);
(statearr_33544[9] = inst_33515__$1);
(statearr_33544[10] = inst_33517);
return statearr_33544;
})();if(cljs.core.truth_(inst_33518))
{var statearr_33545_33566 = state_33536__$1;(statearr_33545_33566[1] = 8);
} else
{var statearr_33546_33567 = state_33536__$1;(statearr_33546_33567[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33537 === 8))
{var inst_33508 = (state_33536[7]);var inst_33516 = (state_33536[8]);var inst_33515 = (state_33536[9]);var inst_33517 = (state_33536[10]);var inst_33520 = (function (){var c = inst_33517;var v = inst_33516;var vec__33513 = inst_33515;var cs = inst_33508;return ((function (c,v,vec__33513,cs,inst_33508,inst_33516,inst_33515,inst_33517,state_val_33537){
return (function (p1__33453_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__33453_SHARP_);
});
;})(c,v,vec__33513,cs,inst_33508,inst_33516,inst_33515,inst_33517,state_val_33537))
})();var inst_33521 = cljs.core.filterv.call(null,inst_33520,inst_33508);var inst_33508__$1 = inst_33521;var state_33536__$1 = (function (){var statearr_33547 = state_33536;(statearr_33547[7] = inst_33508__$1);
return statearr_33547;
})();var statearr_33548_33568 = state_33536__$1;(statearr_33548_33568[2] = null);
(statearr_33548_33568[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33537 === 9))
{var inst_33516 = (state_33536[8]);var state_33536__$1 = state_33536;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33536__$1,11,out,inst_33516);
} else
{if((state_val_33537 === 10))
{var inst_33528 = (state_33536[2]);var state_33536__$1 = state_33536;var statearr_33550_33569 = state_33536__$1;(statearr_33550_33569[2] = inst_33528);
(statearr_33550_33569[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33537 === 11))
{var inst_33508 = (state_33536[7]);var inst_33525 = (state_33536[2]);var tmp33549 = inst_33508;var inst_33508__$1 = tmp33549;var state_33536__$1 = (function (){var statearr_33551 = state_33536;(statearr_33551[7] = inst_33508__$1);
(statearr_33551[11] = inst_33525);
return statearr_33551;
})();var statearr_33552_33570 = state_33536__$1;(statearr_33552_33570[2] = null);
(statearr_33552_33570[1] = 2);
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
});return ((function (switch__18906__auto__){
return (function() {
var state_machine__18907__auto__ = null;
var state_machine__18907__auto____0 = (function (){var statearr_33556 = (new Array(12));(statearr_33556[0] = state_machine__18907__auto__);
(statearr_33556[1] = 1);
return statearr_33556;
});
var state_machine__18907__auto____1 = (function (state_33536){while(true){
var ret_value__18908__auto__ = (function (){try{while(true){
var result__18909__auto__ = switch__18906__auto__.call(null,state_33536);if(cljs.core.keyword_identical_QMARK_.call(null,result__18909__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18909__auto__;
}
break;
}
}catch (e33557){if((e33557 instanceof Object))
{var ex__18910__auto__ = e33557;var statearr_33558_33571 = state_33536;(statearr_33558_33571[5] = ex__18910__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33536);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33557;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18908__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33572 = state_33536;
state_33536 = G__33572;
continue;
}
} else
{return ret_value__18908__auto__;
}
break;
}
});
state_machine__18907__auto__ = function(state_33536){
switch(arguments.length){
case 0:
return state_machine__18907__auto____0.call(this);
case 1:
return state_machine__18907__auto____1.call(this,state_33536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18907__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18907__auto____0;
state_machine__18907__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18907__auto____1;
return state_machine__18907__auto__;
})()
;})(switch__18906__auto__))
})();var state__18978__auto__ = (function (){var statearr_33559 = f__18977__auto__.call(null);(statearr_33559[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18976__auto___33560);
return statearr_33559;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18978__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18976__auto___33665 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18977__auto__ = (function (){var switch__18906__auto__ = (function (state_33642){var state_val_33643 = (state_33642[1]);if((state_val_33643 === 1))
{var inst_33619 = 0;var state_33642__$1 = (function (){var statearr_33644 = state_33642;(statearr_33644[7] = inst_33619);
return statearr_33644;
})();var statearr_33645_33666 = state_33642__$1;(statearr_33645_33666[2] = null);
(statearr_33645_33666[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33643 === 2))
{var inst_33619 = (state_33642[7]);var inst_33621 = (inst_33619 < n);var state_33642__$1 = state_33642;if(cljs.core.truth_(inst_33621))
{var statearr_33646_33667 = state_33642__$1;(statearr_33646_33667[1] = 4);
} else
{var statearr_33647_33668 = state_33642__$1;(statearr_33647_33668[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33643 === 3))
{var inst_33639 = (state_33642[2]);var inst_33640 = cljs.core.async.close_BANG_.call(null,out);var state_33642__$1 = (function (){var statearr_33648 = state_33642;(statearr_33648[8] = inst_33639);
return statearr_33648;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33642__$1,inst_33640);
} else
{if((state_val_33643 === 4))
{var state_33642__$1 = state_33642;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33642__$1,7,ch);
} else
{if((state_val_33643 === 5))
{var state_33642__$1 = state_33642;var statearr_33649_33669 = state_33642__$1;(statearr_33649_33669[2] = null);
(statearr_33649_33669[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33643 === 6))
{var inst_33637 = (state_33642[2]);var state_33642__$1 = state_33642;var statearr_33650_33670 = state_33642__$1;(statearr_33650_33670[2] = inst_33637);
(statearr_33650_33670[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33643 === 7))
{var inst_33624 = (state_33642[9]);var inst_33624__$1 = (state_33642[2]);var inst_33625 = (inst_33624__$1 == null);var inst_33626 = cljs.core.not.call(null,inst_33625);var state_33642__$1 = (function (){var statearr_33651 = state_33642;(statearr_33651[9] = inst_33624__$1);
return statearr_33651;
})();if(inst_33626)
{var statearr_33652_33671 = state_33642__$1;(statearr_33652_33671[1] = 8);
} else
{var statearr_33653_33672 = state_33642__$1;(statearr_33653_33672[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33643 === 8))
{var inst_33624 = (state_33642[9]);var state_33642__$1 = state_33642;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33642__$1,11,out,inst_33624);
} else
{if((state_val_33643 === 9))
{var state_33642__$1 = state_33642;var statearr_33654_33673 = state_33642__$1;(statearr_33654_33673[2] = null);
(statearr_33654_33673[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33643 === 10))
{var inst_33634 = (state_33642[2]);var state_33642__$1 = state_33642;var statearr_33655_33674 = state_33642__$1;(statearr_33655_33674[2] = inst_33634);
(statearr_33655_33674[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33643 === 11))
{var inst_33619 = (state_33642[7]);var inst_33629 = (state_33642[2]);var inst_33630 = (inst_33619 + 1);var inst_33619__$1 = inst_33630;var state_33642__$1 = (function (){var statearr_33656 = state_33642;(statearr_33656[7] = inst_33619__$1);
(statearr_33656[10] = inst_33629);
return statearr_33656;
})();var statearr_33657_33675 = state_33642__$1;(statearr_33657_33675[2] = null);
(statearr_33657_33675[1] = 2);
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
});return ((function (switch__18906__auto__){
return (function() {
var state_machine__18907__auto__ = null;
var state_machine__18907__auto____0 = (function (){var statearr_33661 = (new Array(11));(statearr_33661[0] = state_machine__18907__auto__);
(statearr_33661[1] = 1);
return statearr_33661;
});
var state_machine__18907__auto____1 = (function (state_33642){while(true){
var ret_value__18908__auto__ = (function (){try{while(true){
var result__18909__auto__ = switch__18906__auto__.call(null,state_33642);if(cljs.core.keyword_identical_QMARK_.call(null,result__18909__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18909__auto__;
}
break;
}
}catch (e33662){if((e33662 instanceof Object))
{var ex__18910__auto__ = e33662;var statearr_33663_33676 = state_33642;(statearr_33663_33676[5] = ex__18910__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33642);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33662;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18908__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33677 = state_33642;
state_33642 = G__33677;
continue;
}
} else
{return ret_value__18908__auto__;
}
break;
}
});
state_machine__18907__auto__ = function(state_33642){
switch(arguments.length){
case 0:
return state_machine__18907__auto____0.call(this);
case 1:
return state_machine__18907__auto____1.call(this,state_33642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18907__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18907__auto____0;
state_machine__18907__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18907__auto____1;
return state_machine__18907__auto__;
})()
;})(switch__18906__auto__))
})();var state__18978__auto__ = (function (){var statearr_33664 = f__18977__auto__.call(null);(statearr_33664[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18976__auto___33665);
return statearr_33664;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18978__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18976__auto___33774 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18977__auto__ = (function (){var switch__18906__auto__ = (function (state_33749){var state_val_33750 = (state_33749[1]);if((state_val_33750 === 1))
{var inst_33726 = null;var state_33749__$1 = (function (){var statearr_33751 = state_33749;(statearr_33751[7] = inst_33726);
return statearr_33751;
})();var statearr_33752_33775 = state_33749__$1;(statearr_33752_33775[2] = null);
(statearr_33752_33775[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33750 === 2))
{var state_33749__$1 = state_33749;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33749__$1,4,ch);
} else
{if((state_val_33750 === 3))
{var inst_33746 = (state_33749[2]);var inst_33747 = cljs.core.async.close_BANG_.call(null,out);var state_33749__$1 = (function (){var statearr_33753 = state_33749;(statearr_33753[8] = inst_33746);
return statearr_33753;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33749__$1,inst_33747);
} else
{if((state_val_33750 === 4))
{var inst_33729 = (state_33749[9]);var inst_33729__$1 = (state_33749[2]);var inst_33730 = (inst_33729__$1 == null);var inst_33731 = cljs.core.not.call(null,inst_33730);var state_33749__$1 = (function (){var statearr_33754 = state_33749;(statearr_33754[9] = inst_33729__$1);
return statearr_33754;
})();if(inst_33731)
{var statearr_33755_33776 = state_33749__$1;(statearr_33755_33776[1] = 5);
} else
{var statearr_33756_33777 = state_33749__$1;(statearr_33756_33777[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33750 === 5))
{var inst_33726 = (state_33749[7]);var inst_33729 = (state_33749[9]);var inst_33733 = cljs.core._EQ_.call(null,inst_33729,inst_33726);var state_33749__$1 = state_33749;if(inst_33733)
{var statearr_33757_33778 = state_33749__$1;(statearr_33757_33778[1] = 8);
} else
{var statearr_33758_33779 = state_33749__$1;(statearr_33758_33779[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33750 === 6))
{var state_33749__$1 = state_33749;var statearr_33760_33780 = state_33749__$1;(statearr_33760_33780[2] = null);
(statearr_33760_33780[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33750 === 7))
{var inst_33744 = (state_33749[2]);var state_33749__$1 = state_33749;var statearr_33761_33781 = state_33749__$1;(statearr_33761_33781[2] = inst_33744);
(statearr_33761_33781[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33750 === 8))
{var inst_33726 = (state_33749[7]);var tmp33759 = inst_33726;var inst_33726__$1 = tmp33759;var state_33749__$1 = (function (){var statearr_33762 = state_33749;(statearr_33762[7] = inst_33726__$1);
return statearr_33762;
})();var statearr_33763_33782 = state_33749__$1;(statearr_33763_33782[2] = null);
(statearr_33763_33782[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33750 === 9))
{var inst_33729 = (state_33749[9]);var state_33749__$1 = state_33749;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33749__$1,11,out,inst_33729);
} else
{if((state_val_33750 === 10))
{var inst_33741 = (state_33749[2]);var state_33749__$1 = state_33749;var statearr_33764_33783 = state_33749__$1;(statearr_33764_33783[2] = inst_33741);
(statearr_33764_33783[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33750 === 11))
{var inst_33729 = (state_33749[9]);var inst_33738 = (state_33749[2]);var inst_33726 = inst_33729;var state_33749__$1 = (function (){var statearr_33765 = state_33749;(statearr_33765[7] = inst_33726);
(statearr_33765[10] = inst_33738);
return statearr_33765;
})();var statearr_33766_33784 = state_33749__$1;(statearr_33766_33784[2] = null);
(statearr_33766_33784[1] = 2);
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
});return ((function (switch__18906__auto__){
return (function() {
var state_machine__18907__auto__ = null;
var state_machine__18907__auto____0 = (function (){var statearr_33770 = (new Array(11));(statearr_33770[0] = state_machine__18907__auto__);
(statearr_33770[1] = 1);
return statearr_33770;
});
var state_machine__18907__auto____1 = (function (state_33749){while(true){
var ret_value__18908__auto__ = (function (){try{while(true){
var result__18909__auto__ = switch__18906__auto__.call(null,state_33749);if(cljs.core.keyword_identical_QMARK_.call(null,result__18909__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18909__auto__;
}
break;
}
}catch (e33771){if((e33771 instanceof Object))
{var ex__18910__auto__ = e33771;var statearr_33772_33785 = state_33749;(statearr_33772_33785[5] = ex__18910__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33749);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33771;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18908__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33786 = state_33749;
state_33749 = G__33786;
continue;
}
} else
{return ret_value__18908__auto__;
}
break;
}
});
state_machine__18907__auto__ = function(state_33749){
switch(arguments.length){
case 0:
return state_machine__18907__auto____0.call(this);
case 1:
return state_machine__18907__auto____1.call(this,state_33749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18907__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18907__auto____0;
state_machine__18907__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18907__auto____1;
return state_machine__18907__auto__;
})()
;})(switch__18906__auto__))
})();var state__18978__auto__ = (function (){var statearr_33773 = f__18977__auto__.call(null);(statearr_33773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18976__auto___33774);
return statearr_33773;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18978__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18976__auto___33921 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18977__auto__ = (function (){var switch__18906__auto__ = (function (state_33891){var state_val_33892 = (state_33891[1]);if((state_val_33892 === 1))
{var inst_33854 = (new Array(n));var inst_33855 = inst_33854;var inst_33856 = 0;var state_33891__$1 = (function (){var statearr_33893 = state_33891;(statearr_33893[7] = inst_33856);
(statearr_33893[8] = inst_33855);
return statearr_33893;
})();var statearr_33894_33922 = state_33891__$1;(statearr_33894_33922[2] = null);
(statearr_33894_33922[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33892 === 2))
{var state_33891__$1 = state_33891;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33891__$1,4,ch);
} else
{if((state_val_33892 === 3))
{var inst_33889 = (state_33891[2]);var state_33891__$1 = state_33891;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33891__$1,inst_33889);
} else
{if((state_val_33892 === 4))
{var inst_33859 = (state_33891[9]);var inst_33859__$1 = (state_33891[2]);var inst_33860 = (inst_33859__$1 == null);var inst_33861 = cljs.core.not.call(null,inst_33860);var state_33891__$1 = (function (){var statearr_33895 = state_33891;(statearr_33895[9] = inst_33859__$1);
return statearr_33895;
})();if(inst_33861)
{var statearr_33896_33923 = state_33891__$1;(statearr_33896_33923[1] = 5);
} else
{var statearr_33897_33924 = state_33891__$1;(statearr_33897_33924[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33892 === 5))
{var inst_33856 = (state_33891[7]);var inst_33859 = (state_33891[9]);var inst_33864 = (state_33891[10]);var inst_33855 = (state_33891[8]);var inst_33863 = (inst_33855[inst_33856] = inst_33859);var inst_33864__$1 = (inst_33856 + 1);var inst_33865 = (inst_33864__$1 < n);var state_33891__$1 = (function (){var statearr_33898 = state_33891;(statearr_33898[11] = inst_33863);
(statearr_33898[10] = inst_33864__$1);
return statearr_33898;
})();if(cljs.core.truth_(inst_33865))
{var statearr_33899_33925 = state_33891__$1;(statearr_33899_33925[1] = 8);
} else
{var statearr_33900_33926 = state_33891__$1;(statearr_33900_33926[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33892 === 6))
{var inst_33856 = (state_33891[7]);var inst_33877 = (inst_33856 > 0);var state_33891__$1 = state_33891;if(cljs.core.truth_(inst_33877))
{var statearr_33902_33927 = state_33891__$1;(statearr_33902_33927[1] = 12);
} else
{var statearr_33903_33928 = state_33891__$1;(statearr_33903_33928[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33892 === 7))
{var inst_33887 = (state_33891[2]);var state_33891__$1 = state_33891;var statearr_33904_33929 = state_33891__$1;(statearr_33904_33929[2] = inst_33887);
(statearr_33904_33929[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33892 === 8))
{var inst_33864 = (state_33891[10]);var inst_33855 = (state_33891[8]);var tmp33901 = inst_33855;var inst_33855__$1 = tmp33901;var inst_33856 = inst_33864;var state_33891__$1 = (function (){var statearr_33905 = state_33891;(statearr_33905[7] = inst_33856);
(statearr_33905[8] = inst_33855__$1);
return statearr_33905;
})();var statearr_33906_33930 = state_33891__$1;(statearr_33906_33930[2] = null);
(statearr_33906_33930[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33892 === 9))
{var inst_33855 = (state_33891[8]);var inst_33869 = cljs.core.vec.call(null,inst_33855);var state_33891__$1 = state_33891;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33891__$1,11,out,inst_33869);
} else
{if((state_val_33892 === 10))
{var inst_33875 = (state_33891[2]);var state_33891__$1 = state_33891;var statearr_33907_33931 = state_33891__$1;(statearr_33907_33931[2] = inst_33875);
(statearr_33907_33931[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33892 === 11))
{var inst_33871 = (state_33891[2]);var inst_33872 = (new Array(n));var inst_33855 = inst_33872;var inst_33856 = 0;var state_33891__$1 = (function (){var statearr_33908 = state_33891;(statearr_33908[7] = inst_33856);
(statearr_33908[12] = inst_33871);
(statearr_33908[8] = inst_33855);
return statearr_33908;
})();var statearr_33909_33932 = state_33891__$1;(statearr_33909_33932[2] = null);
(statearr_33909_33932[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33892 === 12))
{var inst_33855 = (state_33891[8]);var inst_33879 = cljs.core.vec.call(null,inst_33855);var state_33891__$1 = state_33891;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33891__$1,15,out,inst_33879);
} else
{if((state_val_33892 === 13))
{var state_33891__$1 = state_33891;var statearr_33910_33933 = state_33891__$1;(statearr_33910_33933[2] = null);
(statearr_33910_33933[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33892 === 14))
{var inst_33884 = (state_33891[2]);var inst_33885 = cljs.core.async.close_BANG_.call(null,out);var state_33891__$1 = (function (){var statearr_33911 = state_33891;(statearr_33911[13] = inst_33884);
return statearr_33911;
})();var statearr_33912_33934 = state_33891__$1;(statearr_33912_33934[2] = inst_33885);
(statearr_33912_33934[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33892 === 15))
{var inst_33881 = (state_33891[2]);var state_33891__$1 = state_33891;var statearr_33913_33935 = state_33891__$1;(statearr_33913_33935[2] = inst_33881);
(statearr_33913_33935[1] = 14);
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
});return ((function (switch__18906__auto__){
return (function() {
var state_machine__18907__auto__ = null;
var state_machine__18907__auto____0 = (function (){var statearr_33917 = (new Array(14));(statearr_33917[0] = state_machine__18907__auto__);
(statearr_33917[1] = 1);
return statearr_33917;
});
var state_machine__18907__auto____1 = (function (state_33891){while(true){
var ret_value__18908__auto__ = (function (){try{while(true){
var result__18909__auto__ = switch__18906__auto__.call(null,state_33891);if(cljs.core.keyword_identical_QMARK_.call(null,result__18909__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18909__auto__;
}
break;
}
}catch (e33918){if((e33918 instanceof Object))
{var ex__18910__auto__ = e33918;var statearr_33919_33936 = state_33891;(statearr_33919_33936[5] = ex__18910__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33891);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33918;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18908__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33937 = state_33891;
state_33891 = G__33937;
continue;
}
} else
{return ret_value__18908__auto__;
}
break;
}
});
state_machine__18907__auto__ = function(state_33891){
switch(arguments.length){
case 0:
return state_machine__18907__auto____0.call(this);
case 1:
return state_machine__18907__auto____1.call(this,state_33891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18907__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18907__auto____0;
state_machine__18907__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18907__auto____1;
return state_machine__18907__auto__;
})()
;})(switch__18906__auto__))
})();var state__18978__auto__ = (function (){var statearr_33920 = f__18977__auto__.call(null);(statearr_33920[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18976__auto___33921);
return statearr_33920;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18978__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__18976__auto___34080 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__18977__auto__ = (function (){var switch__18906__auto__ = (function (state_34050){var state_val_34051 = (state_34050[1]);if((state_val_34051 === 1))
{var inst_34009 = (new Array(0));var inst_34010 = inst_34009;var inst_34011 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_34050__$1 = (function (){var statearr_34052 = state_34050;(statearr_34052[7] = inst_34011);
(statearr_34052[8] = inst_34010);
return statearr_34052;
})();var statearr_34053_34081 = state_34050__$1;(statearr_34053_34081[2] = null);
(statearr_34053_34081[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34051 === 2))
{var state_34050__$1 = state_34050;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34050__$1,4,ch);
} else
{if((state_val_34051 === 3))
{var inst_34048 = (state_34050[2]);var state_34050__$1 = state_34050;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34050__$1,inst_34048);
} else
{if((state_val_34051 === 4))
{var inst_34014 = (state_34050[9]);var inst_34014__$1 = (state_34050[2]);var inst_34015 = (inst_34014__$1 == null);var inst_34016 = cljs.core.not.call(null,inst_34015);var state_34050__$1 = (function (){var statearr_34054 = state_34050;(statearr_34054[9] = inst_34014__$1);
return statearr_34054;
})();if(inst_34016)
{var statearr_34055_34082 = state_34050__$1;(statearr_34055_34082[1] = 5);
} else
{var statearr_34056_34083 = state_34050__$1;(statearr_34056_34083[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34051 === 5))
{var inst_34014 = (state_34050[9]);var inst_34011 = (state_34050[7]);var inst_34018 = (state_34050[10]);var inst_34018__$1 = f.call(null,inst_34014);var inst_34019 = cljs.core._EQ_.call(null,inst_34018__$1,inst_34011);var inst_34020 = cljs.core.keyword_identical_QMARK_.call(null,inst_34011,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_34021 = (inst_34019) || (inst_34020);var state_34050__$1 = (function (){var statearr_34057 = state_34050;(statearr_34057[10] = inst_34018__$1);
return statearr_34057;
})();if(cljs.core.truth_(inst_34021))
{var statearr_34058_34084 = state_34050__$1;(statearr_34058_34084[1] = 8);
} else
{var statearr_34059_34085 = state_34050__$1;(statearr_34059_34085[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34051 === 6))
{var inst_34010 = (state_34050[8]);var inst_34035 = inst_34010.length;var inst_34036 = (inst_34035 > 0);var state_34050__$1 = state_34050;if(cljs.core.truth_(inst_34036))
{var statearr_34061_34086 = state_34050__$1;(statearr_34061_34086[1] = 12);
} else
{var statearr_34062_34087 = state_34050__$1;(statearr_34062_34087[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34051 === 7))
{var inst_34046 = (state_34050[2]);var state_34050__$1 = state_34050;var statearr_34063_34088 = state_34050__$1;(statearr_34063_34088[2] = inst_34046);
(statearr_34063_34088[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34051 === 8))
{var inst_34014 = (state_34050[9]);var inst_34010 = (state_34050[8]);var inst_34018 = (state_34050[10]);var inst_34023 = inst_34010.push(inst_34014);var tmp34060 = inst_34010;var inst_34010__$1 = tmp34060;var inst_34011 = inst_34018;var state_34050__$1 = (function (){var statearr_34064 = state_34050;(statearr_34064[7] = inst_34011);
(statearr_34064[8] = inst_34010__$1);
(statearr_34064[11] = inst_34023);
return statearr_34064;
})();var statearr_34065_34089 = state_34050__$1;(statearr_34065_34089[2] = null);
(statearr_34065_34089[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34051 === 9))
{var inst_34010 = (state_34050[8]);var inst_34026 = cljs.core.vec.call(null,inst_34010);var state_34050__$1 = state_34050;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34050__$1,11,out,inst_34026);
} else
{if((state_val_34051 === 10))
{var inst_34033 = (state_34050[2]);var state_34050__$1 = state_34050;var statearr_34066_34090 = state_34050__$1;(statearr_34066_34090[2] = inst_34033);
(statearr_34066_34090[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34051 === 11))
{var inst_34014 = (state_34050[9]);var inst_34018 = (state_34050[10]);var inst_34028 = (state_34050[2]);var inst_34029 = (new Array(0));var inst_34030 = inst_34029.push(inst_34014);var inst_34010 = inst_34029;var inst_34011 = inst_34018;var state_34050__$1 = (function (){var statearr_34067 = state_34050;(statearr_34067[7] = inst_34011);
(statearr_34067[8] = inst_34010);
(statearr_34067[12] = inst_34028);
(statearr_34067[13] = inst_34030);
return statearr_34067;
})();var statearr_34068_34091 = state_34050__$1;(statearr_34068_34091[2] = null);
(statearr_34068_34091[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34051 === 12))
{var inst_34010 = (state_34050[8]);var inst_34038 = cljs.core.vec.call(null,inst_34010);var state_34050__$1 = state_34050;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34050__$1,15,out,inst_34038);
} else
{if((state_val_34051 === 13))
{var state_34050__$1 = state_34050;var statearr_34069_34092 = state_34050__$1;(statearr_34069_34092[2] = null);
(statearr_34069_34092[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34051 === 14))
{var inst_34043 = (state_34050[2]);var inst_34044 = cljs.core.async.close_BANG_.call(null,out);var state_34050__$1 = (function (){var statearr_34070 = state_34050;(statearr_34070[14] = inst_34043);
return statearr_34070;
})();var statearr_34071_34093 = state_34050__$1;(statearr_34071_34093[2] = inst_34044);
(statearr_34071_34093[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34051 === 15))
{var inst_34040 = (state_34050[2]);var state_34050__$1 = state_34050;var statearr_34072_34094 = state_34050__$1;(statearr_34072_34094[2] = inst_34040);
(statearr_34072_34094[1] = 14);
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
});return ((function (switch__18906__auto__){
return (function() {
var state_machine__18907__auto__ = null;
var state_machine__18907__auto____0 = (function (){var statearr_34076 = (new Array(15));(statearr_34076[0] = state_machine__18907__auto__);
(statearr_34076[1] = 1);
return statearr_34076;
});
var state_machine__18907__auto____1 = (function (state_34050){while(true){
var ret_value__18908__auto__ = (function (){try{while(true){
var result__18909__auto__ = switch__18906__auto__.call(null,state_34050);if(cljs.core.keyword_identical_QMARK_.call(null,result__18909__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__18909__auto__;
}
break;
}
}catch (e34077){if((e34077 instanceof Object))
{var ex__18910__auto__ = e34077;var statearr_34078_34095 = state_34050;(statearr_34078_34095[5] = ex__18910__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34050);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34077;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18908__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34096 = state_34050;
state_34050 = G__34096;
continue;
}
} else
{return ret_value__18908__auto__;
}
break;
}
});
state_machine__18907__auto__ = function(state_34050){
switch(arguments.length){
case 0:
return state_machine__18907__auto____0.call(this);
case 1:
return state_machine__18907__auto____1.call(this,state_34050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18907__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18907__auto____0;
state_machine__18907__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18907__auto____1;
return state_machine__18907__auto__;
})()
;})(switch__18906__auto__))
})();var state__18978__auto__ = (function (){var statearr_34079 = f__18977__auto__.call(null);(statearr_34079[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18976__auto___34080);
return statearr_34079;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18978__auto__);
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